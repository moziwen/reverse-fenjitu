#!/usr/bin/env node
// 解析 group 页 Page({...}) 方法表：每个方法的云函数调用/集合操作/页面跳转/r.* 帮助模块调用
// 用法: node tools/analyze_page_js.js <appservice_body.js>（单行 Page({...}) 编译产物）
'use strict';
const fs = require('fs');
const src = fs.readFileSync(process.argv[2], 'utf8');

const pageStart = src.indexOf('Page({');
if (pageStart < 0) { console.error('未找到 Page({'); process.exit(1); }
// 花括号配平取 Page({...}) 整体（考虑字符串）
let i = pageStart + 'Page('.length, depth = 0, inStr = null, esc = false;
for (; i < src.length; i++) {
  const ch = src[i];
  if (inStr) {
    if (esc) { esc = false; continue; }
    if (ch === '\\') { esc = true; continue; }
    if (ch === inStr) inStr = null;
    continue;
  }
  if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
  if (ch === '{') depth++;
  else if (ch === '}') { depth--; if (depth === 0) { i++; break; } }
}
const pageBody = src.slice(pageStart + 'Page('.length, i);

// 深度为 1 时切分 key: value
const methods = [];
let d = 0, inStr2 = null, esc2 = false, keyStart = -1, lastColon = -1, segStart = 0;
for (let k = 0; k < pageBody.length; k++) {
  const ch = pageBody[k];
  if (inStr2) {
    if (esc2) { esc2 = false; continue; }
    if (ch === '\\') { esc2 = true; continue; }
    if (ch === inStr2) inStr2 = null;
    continue;
  }
  if (ch === '"' || ch === "'" || ch === '`') { inStr2 = ch; continue; }
  if (ch === '{' || ch === '[' || ch === '(') d++;
  else if (ch === '}' || ch === ']' || ch === ')') d--;
  else if (ch === ':' && d === 1) lastColon = k;
  else if (ch === ',' && d === 1) {
    if (lastColon > keyStart) {
      const key = pageBody.slice(keyStart > 0 ? keyStart : 0, lastColon).trim().replace(/^["']|["']$/g, '');
      methods.push({ key, body: pageBody.slice((keyStart > 0 ? keyStart : 0), k) });
    }
    keyStart = k + 1; lastColon = -1;
  }
}
if (lastColon > keyStart) {
  const key = pageBody.slice(keyStart, lastColon).trim().replace(/^["']|["']$/g, '');
  methods.push({ key, body: pageBody.slice(keyStart) });
}

const pick = (body, re) => { const s = new Set(); let m; const r = new RegExp(re, 'g'); while ((m = r.exec(body))) s.add(m[1]); return [...s]; };

// 指定方法名时，直接打印该方法体；--all <outfile> 时把全部方法体写入 UTF-8 文件
const only = process.argv[3];
if (only === '--all') {
  let out = `Page 顶层成员 ${methods.length} 个\n\n`;
  for (const { key, body } of methods) out += `===== ${key} (${body.length}B) =====\n${body}\n\n`;
  fs.writeFileSync(process.argv[4], out, 'utf8');
  console.log('written', methods.length, 'methods ->', process.argv[4]);
  process.exit(0);
}
if (only) {
  const hit = methods.find(x => x.key === only);
  if (!hit) { console.error('无此方法:', only, '可选:', methods.map(x => x.key).join(',')); process.exit(1); }
  console.log('===== ' + hit.key + ' =====');
  console.log(hit.body);
  process.exit(0);
}

console.log(`Page 顶层成员 ${methods.length} 个：`);
for (const { key, body } of methods) {
  const cloud = pick(body, 'wx\\.cloud\\.callFunction\\(\\{name:"([^"]+)"');
  const coll = pick(body, '\\.collection\\("([^"]+)"');
  const nav = pick(body, 'navigate[Tt]o:\\s*"?([^",\\s}]+)"?');
  const navUrl = pick(body, 'url:"([^"]+)"');
  const rcall = pick(body, '\\br\\.([A-Za-z_$][\\w$]*)\\s*\\(');
  const len = body.length;
  console.log(`  ${key} (${len}B)` +
    (cloud.length ? ` 云函数[${cloud.join(',')}]` : '') +
    (coll.length ? ` 集合[${coll.join(',')}]` : '') +
    (navUrl.length ? ` 跳转[${navUrl.join(',')}]` : '') +
    (rcall.length ? ` 帮助r.[${rcall.join(',')}]` : ''));
}
