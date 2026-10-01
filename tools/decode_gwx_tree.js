#!/usr/bin/env node
// 解码 $gwx 节点树（webview chunk 的 m 函数）为可读骨架。
// 用法: node tools/decode_gwx_tree.js <chunk.webview.js> <opsFnName> <m1Start> <m1End> <rootVar> <outPrefix>
// 例:   node tools/decode_gwx_tree.js unpacked/chunk_25.webview.js gz$gwx_XC_18_2 892 2756 r group
// 只做机械解析（_n/_mz/_v/_oz/_rz/_/_2z/if-elif-else/闭包），零猜测。
// _mz 属性索引坑（SKILL.md）：attr 列表里只有第一个索引是真实 ops 索引，后续按序号连续 +1。
'use strict';
const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm');

const [, , CHUNK, OPSFN, S, E, ROOTVAR, PREFIX] = process.argv;
if (!CHUNK || !OPSFN || !S || !E || !ROOTVAR || !PREFIX) {
  console.error('参数不足'); process.exit(1);
}
const L1 = +S, L2 = +E;
const src = fs.readFileSync(CHUNK, 'utf8');
const allLines = src.split('\n');
const m1Lines = allLines.slice(L1 - 1, L2);

// ---------- 1) 求 ops ----------
function evalOps(fnName) {
  const start = src.indexOf(`function ${fnName}`);
  if (start < 0) throw new Error('未找到 ' + fnName);
  const bodyStart = src.indexOf('{', start);
  const endMark = src.indexOf('})(__WXML_GLOBAL__.ops_cached', bodyStart);
  if (endMark < 0) throw new Error('未找到结束标记');
  const body = src.slice(bodyStart, endMark);
  const lines = body.split('\n').filter(l => /^\s*Z\(/.test(l) || /^\s*var a=/i.test(l));
  const sandbox = { z: [] };
  vm.runInNewContext(`var a = 11; ${lines.join('\n')};`, { Z: o => sandbox.z.push(o), z: sandbox.z, console });
  return sandbox.z;
}
const z = evalOps(OPSFN);

// ---------- 2) ops 渲染 ----------
// ops 有两种编码：普通 [t, val|op, args...] 与包裹 [[t(,op)], args...]
// raw=true：字段名/字符串不加引号与大括号（用于属性值与条件展示）
function render(node, raw) {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!Array.isArray(node)) return JSON.stringify(node);
  let t, op, args;
  if (Array.isArray(node[0])) { t = node[0][0]; op = node[0][1]; args = node.slice(1); }
  else if (t = node[0], t === 1 || t === 2 || t === 3) { op = node[1]; args = node.slice(2); }
  else { args = node.slice(1); }
  const val3 = () => (Array.isArray(node[0]) ? (node[0].length > 1 ? node[0][1] : render(args[0], raw)) : node[1]);
  if (t === 1) return String(val3());
  if (t === 3) return raw ? String(val3()) : `'${val3()}'`;
  if (t === 2) {
    const rest = args.map(a => render(a, raw));
    if (op === '?:') return `(${rest[0]} ? ${rest[1]} : ${rest[2]})`;
    if (op === '!') return `!${rest[0]}`;
    if (rest.length === 1) return `${op}${rest[0]}`;
    return `(${rest.join(` ${op} `)})`;
  }
  if (t === 5) return `(${args.map(a => render(a, raw)).join(', ')})`;
  if (t === 6) return `${render(args[0], true)}.${render(args[1], true)}`; // 成员访问永远裸名
  if (t === 7) return raw ? render(args[0], true) : `{{${render(args[0], true)}}}`;
  if (t === 11) return args.map(a => (Array.isArray(a) && (a[0] === 3 || (Array.isArray(a[0]) && a[0][0] === 3)) ? render(a, true) : render(a, false))).join('');
  if (t === 12) return `${render(args[0], true)}(${args.slice(1).map(a => render(a, raw)).join(', ')})`;
  return `<op${t}:${node.slice(1).map(a => render(a, raw)).join('|')}>`;
}
const strip = s => String(s).replace(/^\{\{/, '').replace(/\}\}$/, '');

// ---------- 3) 解析语句 ----------
const SCOPES = { main: mkScope('main') };
function mkScope(name) { return { name, vars: {}, edges: [], conds: {}, fors: {}, params: [] }; }
const scopeStack = [SCOPES.main];
let cur = SCOPES.main;
let depth = 0;
const trace = [];
const stats = { n: 0, mz: 0, v: 0, oz: 0, rz: 0, at: 0, if: 0, clo: 0, lop: 0, unknown: 0 };

m1Lines.forEach((rawLine, i) => {
  const line = rawLine.trim();
  if (!line) return;
  const abs = L1 + i;
  let m;
  if (line === '}') {
    if (depth === 0 && scopeStack.length > 1) { // 闭包体结束：弹回外层作用域（支持嵌套闭包）
      const done = scopeStack.pop();
      cur = scopeStack[scopeStack.length - 1];
      trace.push(`L${abs} CLOSURE_END ${done.name}`); return;
    }
    if (depth > 0) depth--;
    return;
  }
  if ((m = line.match(/^if\(_oz\(z,(\d+),[a-zA-Z0-9]+,[a-zA-Z0-9]+,gg\)\)\{(\w+)\.wxVkey=(\d+)$/))) {
    cur.conds[m[2]] = cur.conds[m[2]] || [];
    cur.conds[m[2]].push({ k: 'wx:if', v: strip(render(z[+m[1]], true)), abs });
    depth++; stats.if++; trace.push(`L${abs} IF ${m[2]} {{${render(z[+m[1]])}}}`); return;
  }
  if ((m = line.match(/^else if\(_oz\(z,(\d+),[a-zA-Z0-9]+,[a-zA-Z0-9]+,gg\)\)\{(\w+)\.wxVkey=(\d+)$/))) {
    cur.conds[m[2]] = cur.conds[m[2]] || [];
    cur.conds[m[2]].push({ k: 'wx:elif', v: strip(render(z[+m[1]], true)), abs });
    depth++; stats.if++; trace.push(`L${abs} ELIF ${m[2]}`); return;
  }
  if ((m = line.match(/^else\{(\w+)\.wxVkey=\d+$/))) {
    cur.conds[m[1]] = cur.conds[m[1]] || [];
    cur.conds[m[1]].push({ k: 'wx:else', v: '', abs });
    depth++; stats.if++; trace.push(`L${abs} ELSE ${m[1]}`); return;
  }
  if (/^\w+\.wxVkey=\d+$/.test(line)) return;
  if (/^\w+\.wxXCkey=\d+$/.test(line)) return;
  if (/^return /.test(line)) return;
  if (/^var z=gz\$/.test(line)) return; // m1 开头取 ops，已在外面求值
  if ((m = line.match(/^(\w+)\.attr\['([^']+)'\]=(.+)$/))) { // 静态属性赋值（如 scroll-view scrollX）
    const v = cur.vars[m[1]];
    if (v) v.attrs[m[2]] = m[3].replace(/^(\w+)$/, '$1');
    return;
  }
  if ((m = line.match(/^var (\w+)=function\(([^)]*)\)\{$/))) {
    if (abs === L1) { // 文件首行的顶层函数（如 m1）即根作用域，不是闭包
      SCOPES.main.params = m[2].split(',').map(s => s.trim());
      return;
    }
    const sc = mkScope(m[1]);
    sc.params = m[2].split(',').map(s => s.trim());
    SCOPES[m[1]] = sc; scopeStack.push(sc); cur = sc; depth = 0; stats.clo++;
    trace.push(`L${abs} CLOSURE ${m[1]}(${sc.params.join(',')})`); return;
  }
  if ((m = line.match(/^_2z\(z,(\d+),(\w+),[a-zA-Z0-9]+,[a-zA-Z0-9]+,gg,(\w+),'([^']*)','([^']*)','([^']*)'\)$/))) {
    const listExpr = strip(render(z[+m[1]], true));
    cur.fors[m[3]] = cur.fors[m[3]] || [];
    cur.fors[m[3]].push({ list: listExpr, item: m[4], index: m[5], closure: m[2], abs });
    stats.lop++; trace.push(`L${abs} FOR ${m[3]} {{${listExpr}}} item=${m[4]} idx=${m[5]} closure=${m[2]}`); return;
  }
  if ((m = line.match(/^var (\w+)=_n\('([^']+)'\)$/))) {
    cur.vars[m[1]] = { kind: 'el', tag: m[2], attrs: {}, abs }; stats.n++; return;
  }
  if ((m = line.match(/^var (\w+)=_mz\(z,'([^']+)',\[([^\]]*)\]/))) {
    const attrs = {}; const pairs = [];
    const re = /'([^']+)',(\d+)/g; let p; let first = null, k = 0;
    while ((p = re.exec(m[3]))) {
      const listed = +p[2];
      if (first === null) first = listed;
      const real = first + k;
      attrs[p[1]] = render(z[real], true);
      pairs.push(`${p[1]}: listed=${listed} real=${real} => ${JSON.stringify(attrs[p[1]])}`);
      k++;
    }
    cur.vars[m[1]] = { kind: 'el', tag: m[2], attrs, abs, pairs }; stats.mz++; return;
  }
  if ((m = line.match(/^var (\w+)=_v\(\)$/))) { cur.vars[m[1]] = { kind: 'block', attrs: {}, abs }; stats.v++; return; }
  if ((m = line.match(/^var (\w+)=_oz\(z,(\d+),/))) {
    cur.vars[m[1]] = { kind: 'text', val: render(z[+m[2]]), abs }; stats.oz++; return;
  }
  if ((m = line.match(/^_rz\(z,(\w+),'([^']+)',(\d+),/))) {
    const v = cur.vars[m[1]];
    if (v) v.attrs[m[2]] = render(z[+m[3]], true);
    stats.rz++; return;
  }
  if ((m = line.match(/^_\((\w+),(\w+)\)$/))) { cur.edges.push([m[1], m[2], abs]); stats.at++; return; }
  stats.unknown++; trace.push(`L${abs} ?? ${line.slice(0, 160)}`);
});

// ---------- 4) 渲染树 ----------
const children = {};
for (const name of Object.keys(SCOPES)) {
  SCOPES[name].edges.forEach(([a, b]) => {
    (children[name + '::' + a] = children[name + '::' + a] || []).push(name + '::' + b);
  });
}
function renderNode(key, indent, lines) {
  const sep = key.indexOf('::');
  const scope = key.slice(0, sep), name = key.slice(sep + 2);
  const sc = SCOPES[scope]; const v = sc.vars[name];
  if (!v) { lines.push(`${indent}${name} (未定义变量?)`); return; }
  const conds = (sc.conds[name] || []).map(c => c.k === 'wx:else' ? 'wx:else' : `${c.k}={{${c.v}}} @L${c.abs}`).join(' ');
  const fors = (sc.fors[name] || []).map(f => `wx:for={{${f.list}}} wx:for-item="${f.item}" wx:for-index="${f.index}" @L${f.abs} (片段=${f.closure})`).join(' ; ');
  const L = `@L${v.abs}`;
  if (v.kind === 'text') { lines.push(`${indent}${L} 文本: ${v.val}`); return; }
  const attrs = Object.entries(v.attrs).map(([k, val]) => `${k}=${val}`).join(' ');
  const tagDesc = v.kind === 'block' ? '<block(wx:?)>' : `<${v.tag}>`;
  lines.push(`${indent}${L} ${tagDesc}${attrs ? ' ' + attrs : ''}${conds ? '  ⟨' + conds + '⟩' : ''}${fors ? '  ⟨' + fors + '⟩' : ''}`);
  (children[key] || []).forEach(c => renderNode(c, indent + '    ', lines));
  // 闭合行省略，缩进即结构
}

const lines = [];
lines.push(`# 节点树解码：${path.basename(CHUNK)} L${L1}-${L2}（m1），ops=${OPSFN}（${z.length} 项）`);
lines.push(`# 缩进=层级；@LNN=该节点定义语句在 chunk 中的行号；⟨⟩=wx:if/wx:for 注记；文本节点为 _oz 动态内容`);
lines.push('');
lines.push(`## 页面根（_(${ROOTVAR},…) 挂载）`);
(children['main::' + ROOTVAR] || []).forEach(c => renderNode(c, '', lines));
for (const name of Object.keys(SCOPES)) {
  if (name === 'main') continue;
  const sc = SCOPES[name];
  const containerParam = sc.params[2];
  lines.push('');
  lines.push(`## wx:for 片段 ${name}（形参 ${sc.params.join(',')}，第 3 参=容器）`);
  (children[name + '::' + containerParam] || []).forEach(c => renderNode(c, '', lines));
}

const outDir = os.tmpdir();
fs.writeFileSync(path.join(outDir, PREFIX + '_skeleton.txt'), lines.join('\n'), 'utf8');
fs.writeFileSync(path.join(outDir, PREFIX + '_ops.txt'), z.map((n, i) => `z[${i}] = ${render(n)}`).join('\n'), 'utf8');
fs.writeFileSync(path.join(outDir, PREFIX + '_trace.txt'), trace.join('\n'), 'utf8');
console.log('stats =', JSON.stringify(stats), '| ops =', z.length, '| 未识别行 =', stats.unknown);
console.log('输出目录:', outDir, `文件: ${PREFIX}_skeleton.txt / ${PREFIX}_ops.txt / ${PREFIX}_trace.txt`);
