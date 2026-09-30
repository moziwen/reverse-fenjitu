// 对账员专用：独立重推 report 页节点树（不读蒸馏工 dump，直接 eval 解包原文）
// 用法: node tools/audit_report_recode.js  （工作目录=仓库根）
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = fs.readFileSync(path.join(ROOT, 'unpacked/chunk_38.webview.js'), 'utf8');
const lines = SRC.split('\n');

// ---------- 1. eval ops 常量表（17 行的 gz$gwx_XC_32_1 内 (function(z){...})(...) 段） ----------
// 用定界串直接截取 (function(z){...}) 函数表达式本体（不带调用尾巴，调用由本脚本自己传 []）
const OPENS = '(function(z){';
const CLOSES = '})(__WXML_GLOBAL__.ops_cached.$gwx_XC_32_1);';
const s0 = SRC.indexOf(OPENS), s1 = SRC.indexOf(CLOSES);
if (s0 < 0 || s1 < 0) throw new Error('ops 表段未定位');
const opsBody = SRC.slice(s0, s1 + 2); // 恰好到 `})` 为止，不含实参
const ops = [];
new Function('z', opsBody + '(z);')(ops); // IIFE 无 return，靠闭包 push 填充
// (上面已直接构造)
console.log('=== OPS 表：共 ' + ops.length + ' 条（独立 eval 原文） ===');
ops.forEach((op, i) => {
  const txt = safeJson(op);
  console.log('op' + i + '\t' + txt);
});

function safeJson(v) { try { return JSON.stringify(v); } catch (e) { return String(v); } }

// ---------- 2. ops 解释器（表达式形态还原，不依赖运行时 scope 语义） ----------
// op 格式（本次实测）：[3,s]=字符串 / [1,v]=原始值 / [11,...]=拼接 /
// [[2,'op',],a,b]=运算(!= > ?:) / [[6],base,key]=成员访问 / [[7],path]=数据路径
const PH = s => '⟦' + s + '⟧'; // 数据路径占位标记
function unwrap(s) { return String(s).replace(/⟦/g, '').replace(/⟧/g, ''); }
function fmt(v) { return v === undefined || v === null ? '' : String(v); }
function evalOp(op) {
  if (!Array.isArray(op)) return fmt(op);
  const head = op[0];
  if (Array.isArray(head)) { // 操作码在嵌套头部
    if (head[0] === 2) { // 运算
      const o = head[1];
      if (o === '?:') return '(' + evalOp(op[1]) + ') ? ' + evalOp(op[2]) + ' : ' + evalOp(op[3]);
      return evalOp(op[1]) + ' ' + o + ' ' + evalOp(op[2]);
    }
    if (head[0] === 6) { // 成员访问
      const base = evalOp(op[1]), key = evalOp(op[2]);
      const m = base.match(/^⟦(.+)⟧$/);
      const keyM = String(key).match(/^⟦(.+)⟧$/);
      const keyTxt = keyM ? keyM[1] : (/^\d+$/.test(key) ? key : "'" + key + "'");
      return m ? PH(m[1] + '[' + keyTxt + ']') : PH('(' + base + ')[' + keyTxt + ']');
    }
    if (head[0] === 7) return PH(evalOp(op[1])); // 数据路径
    return '{{?op' + safeJson(head) + '}}';
  }
  if (head === 3) return op[1]; // 字符串
  if (head === 1) return String(op[1]); // 原始值
  if (head === 11) return op.slice(1).map(p => fmt(evalOp(p))).join(''); // 拼接
  return '{{?op' + safeJson(op) + '}}';
}

// ---------- 3. 桩执行 $gwx_XC_32 全文（53 实参齐全） ----------
const nodes = []; // 平铺事件/属性记录
function makeNode(tag) { return { tag, attrs: {}, children: [] }; }
function setAttr(node, k, v) {
  node.attrs[k] = unwrap(v);
  if (/^(bind|catch|mut-|capture-)/.test(k)) nodes.push({ ev: k, val: unwrap(v), tag: node.tag });
}
function _(p, c) {
  if (c === null || c === undefined || typeof c !== 'object') c = { tag: '#text', attrs: {}, children: [], text: fmt(c) };
  p.children.push(c); return c;
}
const stub_n = t => makeNode(t);
const stub_v = () => { const n = makeNode('#virtual'); n.wxVkey = 0; return n; };
const stub_oz = (z, i) => evalOp(z[i]);
const stub_rz = (z, node, k, i) => setAttr(node, k, evalOp(z[i]));
const stub_mz = (z, tag, pairs) => {
  // _mz 索引坑规则（对账实证修正版）：打印值 -1 = 布尔属性无值（不占 op、不作递增基准）；
  // 首个非 -1 打印值为真实 op 索引，其后属性真实索引 = 该基准 + 自基准起的属性序（连续递增）。
  // 实证：tui-rate ['active',34,...,5 属性] → op34~38；tui-progress ['showInfo',-1,'activeColor',18,...] → op18~22。
  const node = makeNode(tag);
  let base = null;
  for (let p = 0, ord = 0; p < pairs.length; p += 2) {
    const k = pairs[p], idxField = pairs[p + 1];
    let real;
    if (idxField === -1) { real = -1; }
    else if (base === null) { base = idxField; ord = 0; real = idxField; }
    else { ord++; real = base + ord; }
    const v = real < 0 ? '' : evalOp(z[real]);
    setAttr(node, k, v);
    node.attrs['__op_' + k] = real;
  }
  return node;
};
const stub_2z = (z, i, fn, e, s, gg, holder, itemName, indexName, keyName) => {
  holder.__for = { list: evalOp(z[i]), item: itemName, index: indexName, key: keyName };
  const env = new Proxy({}, { get: () => '' });
  fn(env, env, holder, gg); // 渲染一次模板体
};
const stub_tsd = () => {};
const stub_gdc = () => ({});
const stub_ev = r => r;
const SIG = ['_','_v','_n','_p','_s','_wp','_wl','$gwn','$gwl','$gwh','wh','$gstack','$gwrt','gra','grb','TestTest','wfor','_ca','_da','_r','_rz','_o','_oz','_1','_1z','_2','_2z','_m','_mz','nv_getDate','nv_getRegExp','nv_console','nv_parseInt','nv_parseFloat','nv_isNaN','nv_isFinite','nv_decodeURI','nv_decodeURIComponent','nv_encodeURI','nv_encodeURIComponent','$gdc','nv_JSON','_af','_gv','_ai','_grp','_gd','_gapi','$ixc','_ic','_w','_ev','_tsd'];
const STUBS = { '_': _, _v: stub_v, _n: stub_n, _rz: stub_rz, _oz: stub_oz, _mz: stub_mz, _2z: stub_2z, $gdc: stub_gdc, _ev: stub_ev, _tsd: stub_tsd };
const KEYS = [];
for (const c of 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') KEYS.push(c);
KEYS.push('aa');
if (KEYS.length !== 53) throw new Error('实参键数=' + KEYS.length);
const G = {};
KEYS.forEach((k, i) => { G[k] = STUBS[SIG[i]] || function () {}; });

const wrapper = new Function('__g', '__vd_version_info__', '__wxAppCode__', 'outerGlobal', 'global', 'console', 'setCssToHead', lines.join('\n'));
const appCode = {};
wrapper(G, { delayedGwx: false }, appCode, {}, globalThis, console, function (arr) { return { setCssToHead: arr }; });
const renderer = appCode['pages/report/report.wxml'];
if (typeof renderer !== 'function') throw new Error('renderer 未注册，appCode keys=' + Object.keys(appCode));

const origLog = console.log;
const root = renderer({}, {}, {});
console.log = origLog;

// ---------- 4. 树打印 ----------
const out = [];
const debind = s => unwrap(String(s)).replace(/⟦([^⟧]*)⟧/g, '{{$1}}'); // ⟦path⟧ → {{path}}
function walk(n, depth, ctx) {
  const pad = '  '.repeat(depth);
  if (n.__for) out.push(pad + '#for ' + n.__for.item + ',' + n.__for.index + ' in ' + debind(n.__for.list) + '  (wx:key=' + JSON.stringify(n.__for.key) + ')');
  if (n.tag === '#virtual') {
    out.push(pad + (n.__for ? '<block wx:for>' : '<block wx:if>'));
  } else if (n.tag === '#text') {
    out.push(pad + '#text: ' + JSON.stringify(debind(n.text)));
  } else {
    const attrs = Object.entries(n.attrs || {}).filter(([k]) => !k.startsWith('__op_'))
      .map(([k, v]) => k + '="' + v + '"').join(' ');
    out.push(pad + '<' + n.tag + (attrs ? ' ' + attrs : '') + '>');
  }
  (n.children || []).forEach(c => walk(c, depth + 1, ctx));
}
walk(root, 0, {});
console.log('=== 渲染树（桩执行原文 m0 产物） ===');
console.log(out.join('\n'));

console.log('=== 事件绑定收集 ===');
nodes.forEach(x => console.log(x.tag + ' [' + x.ev + '] = ' + JSON.stringify(x.val)));

// ---------- 5. 数据绑定路径与字面量文本 ----------
const binds = new Set(), texts = new Set();
(function scan(v) {
  if (typeof v === 'string') {
    for (const m of v.matchAll(/\{\{([^}]+)\}\}/g)) binds.add(m[1].trim());
    if (!/\{\{/.test(v) && v.trim() && v.trim() !== '') texts.add(v);
  } else if (Array.isArray(v)) v.forEach(scan);
  else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => { if (!k.startsWith('__op_')) scan(x); });
})(root);
console.log('=== 数据绑定路径 ===');
console.log([...binds].sort().join('\n'));
console.log('=== 静态文本字面量 ===');
console.log([...texts].map(t => JSON.stringify(t)).join('\n'));
