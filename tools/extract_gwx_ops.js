#!/usr/bin/env node
// 提取 $gwx_XC_NN 的 ops 数组（gz$gwx_XC_NN_1），把 Z([...]) 序列求值成可读字符串表。
// 用法：node tools/extract_gwx_ops.js <chunk.webview.js> <XC_NN>
// 只做机械解析，不做任何猜测；[7] 数据绑定显示为 {{path}}，[2] 运算显示为 (a OP b)。
'use strict';
const fs = require('fs');
const file = process.argv[2];
const name = process.argv[3]; // 如 XC_30
if (!file || !name) { console.error('用法: node extract_gwx_ops.js <chunk> <XC_NN>'); process.exit(1); }
const src = fs.readFileSync(file, 'utf8');
const fnName = `gz$gwx_${name}_1`;
const start = src.indexOf(`function ${fnName}`);
if (start < 0) { console.error(`未找到 ${fnName}`); process.exit(1); }
const bodyStart = src.indexOf('{', start);
// 找到函数结束：以 "})(__WXML_GLOBAL__.ops_cached" 为界
const endMark = src.indexOf('})(__WXML_GLOBAL__.ops_cached', bodyStart);
if (endMark < 0) { console.error('未找到函数结束标记'); process.exit(1); }
let body = src.slice(bodyStart, endMark);
// 抠出 Z(...) 行序列
const lines = body.split('\n').filter(l => /^\s*Z\(/.test(l) || /^\s*var a=/i.test(l));
const code = lines.join('\n');
const sandbox = { z: [], Z: ops => sandbox.z.push(ops) };
const vm = require('vm');
vm.runInNewContext(`var a = 11; ${code};`, { Z: sandbox.Z, z: sandbox.z, console });
// 递归把 ops 数组渲染成可读串
function render(node) {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (!Array.isArray(node)) return JSON.stringify(node);
  const t = node[0];
  if (t === 1 || t === 2 || t === 3) {
    // 1 数字字面量 / 2 运算 / 3 字符串字面量
    if (t === 3) return `'${node[1]}'`;
    if (t === 1) return String(node[1]);
    const op = node[1];
    const rest = node.slice(2).map(render);
    if (op === '?:') return `(${rest[0]} ? ${rest[1]} : ${rest[2]})`;
    if (op === '!') return `!${rest[0]}`;
    if (rest.length === 1) return `${op}${rest[0]}`;
    return `(${rest.join(` ${op} `)})`;
  }
  if (t === 5) return `call(${node.slice(1).map(render).join(', ')})`; // 实参包
  if (t === 6) { // 成员访问 obj[key]
    return `${render(node[1])}.${render(node[2])}`;
  }
  if (t === 7) return `{{${render(node[1])}}}`; // 数据绑定
  if (t === 11) return node.slice(1).map(render).join(''); // 字符串拼接
  if (t === 12) { // 函数调用
    const fn = render(node[1]);
    const args = node.slice(2).map(render).join(', ');
    return `${fn}(${args})`;
  }
  return `<op${t}:${node.slice(1).map(render).join('|')}>`;
}
// 解析 z[NN] / z[NN][MM] 引用：先浅渲染一遍，遇到引用展开
function resolveTop(ops, i) {
  let s = JSON.stringify(ops, (k, v) => v);
  // 把 {"ref":N} 之类不存在；引用在源码里是直接嵌的 z[NN]，vm 求值时已经展开成数组本体
  return render(ops);
}
const out = [];
sandbox.z.forEach((ops, i) => {
  let rendered = '';
  try { rendered = resolveTop(ops, i); } catch (e) { rendered = `<ERROR ${e.message}>`; }
  out.push(`z[${i}] = ${rendered}`);
});
console.log(out.join('\n'));
