#!/usr/bin/env node
// 用 page-frame.html 里的真实 gwx 运行时跑指定 chunk 的 $gwx_XC_NN，输出「已解析节点树」：
// 标签、属性求值结果、wx:if/wx:for 分支结构、以及 chunk 内联 setCssToHead 的页面 wxss。
// 零幻觉：属性索引规则来自 page-frame.html 的 _mz 源码（base+printed），helpers 取自运行时
// 自己暴露的 __g（按 chunk 尾部实参顺序传回，与生产加载方式一致）。
// 用法：node tools/extract_gwx_tree.js <page-frame.html> <chunk.webview.js> <XC_NN> <entry.wxml路径>
'use strict';
const fs = require('fs');
const vm = require('vm');
const [,, pfPath, chunkPath, xcName, entryPath] = process.argv;
if (!pfPath || !chunkPath || !xcName || !entryPath) {
  console.error('用法: node extract_gwx_tree.js <page-frame.html> <chunk.webview.js> <XC_NN> <entry路径>');
  process.exit(1);
}
const pf = fs.readFileSync(pfPath, 'utf8');
// 切片：从主框架 wcc 运行时 IIFE 开始，到 __g 定义之后的插件脚本之前为止
const a = pf.indexOf('(function(){/*v0.5vv_20211229_syb_scopedata*/');
const b = pf.indexOf('__wxCodeSpace__.batchAddCompiledScripts');
if (a < 0 || b < 0) { console.error('page-frame 切片边界未找到 a=' + a + ' b=' + b); process.exit(1); }
const runtime = pf.slice(a, b);

const sandbox = {
  console, setTimeout, clearTimeout, setInterval, Date, JSON, Math, RegExp, Error,
  __vd_version_info__: {}, __wxAppCode__: {},
  __WXML_GLOBAL__: { entrys: {}, defines: {}, modules: {}, ops: [], ops_set: {}, ops_cached: {}, ops_init: {}, total_ops: 0 },
};
sandbox.window = sandbox;
sandbox.navigator = { userAgent: 'Node' };
sandbox.screen = { width: 375, height: 667 };
sandbox.document = {
  createElement: () => ({ style: {}, childNodes: [], setAttribute() {}, appendChild() {}, removeChild() {}, sheet: { insertRule() {}, cssRules: [] } }),
  addEventListener() {}, createTextNode: () => ({}),
  head: { appendChild() {} }, getElementsByTagName: () => [{ appendChild() {} }],
  documentElement: { style: {} },
};
sandbox.location = { href: '' };
sandbox.outerGlobal = { __webview_engine_version__: 0.02 }; // render 闭包走「返回 root 对象」分支
sandbox.setCssToHead = function (segs, warn, opt) { sandbox.__lastCss = { segs, warn, opt }; return function () {}; };
vm.createContext(sandbox);
vm.runInContext(runtime, sandbox, { filename: 'page-frame-runtime.js' });

const chunk = fs.readFileSync(chunkPath, 'utf8');
const mHead = chunk.match(new RegExp('\\$gwx_' + xcName + '=function\\(([^)]*)\\)'));
if (!mHead) { console.error('未找到 $gwx_' + xcName + ' 定义'); process.exit(1); }
const params = mHead[1].split(',').map(s => s.trim());
const gObj = vm.runInContext('__g', sandbox); // __g 定义在 context 全局上（defineProperty 不可枚举），须在 context 内取
if (!gObj || typeof gObj !== 'object') { console.error('运行时未定义 __g（typeof=' + typeof gObj + '）'); process.exit(1); }
// chunk 尾部实参顺序：}(__g.a,__g.b,...,__g.aa);
const tailBody = chunk.slice(chunk.lastIndexOf('}(__g.'));
const tailOrder = (tailBody.match(/__g\.[a-zA-Z]{1,2}/g) || []).map(s => s.slice(4));
console.error('[info] 形参数=' + params.length + ' 尾部实参数=' + tailOrder.length);
if (tailOrder.length !== params.length) { console.error('形参/实参数不一致'); process.exit(1); }
const args = tailOrder.map((k, i) => {
  const v = gObj[k];
  if (typeof v === 'undefined') { console.error('__g.' + k + '（参数 ' + params[i] + '）缺失'); process.exit(1); }
  return v;
});
vm.runInContext(chunk, sandbox, { filename: chunkPath }); // 副作用：注册 __wxAppCode__/__WXML_GLOBAL__.ops_set
// 注意：chunk 里 $gwx_XC_37=function(53 helpers){return function(path,global){...}}(__g.a,...,__g.aa)
// —— 外层 IIFE 已按生产方式绑定 __g helpers，$gwx_XC_37 即 (path,global)=>render 的内层函数
const gwxEntry = vm.runInContext('$gwx_' + xcName, sandbox); // 顶层赋值在 context 全局，宿主侧需经 context 读取
if (typeof gwxEntry !== 'function') { console.error('sandbox 中未取得 $gwx_' + xcName + '（typeof=' + typeof gwxEntry + '）'); process.exit(1); }
const gwxProbe = gwxEntry(entryPath, {});
console.error('[info] render(typeof)=' + typeof gwxProbe);
if (typeof gwxProbe !== 'function') { console.error('调用未返回 render 闭包'); process.exit(1); }

const envs = {
  'A: displayMode=1(手机竖屏)': {
    height: 400, displayMode: 1, level: 'A', card_id: 'A1-demo', user_babyid: 'BABY', index: 0,
    title: '卡片标题', cover: 'https://qianyufang.top/public/yingyu/images/cover.jpg',
    list: [{ img: 'https://qianyufang.top/1.jpg', title: 'apple' }, { img: 'https://qianyufang.top/2.jpg', title: 'banana' }],
    bannerIndex: 0, cur_title: 'apple', audioRecords: [], isPad: false, setting_speak: 0,
    stars: [3, 5, 0, 0, 0, 0, 0, 0], values: ['3.5', '5'], texts: ['I said apple'], cur_star: 0,
    transShow: false, isAutoPage: false, isHideText: false,
    phone_image_height: 1200, pad_image_height: 500, user_info: { nickName: '测试' }, user_days: 12,
  },
};
envs['B: displayMode=2 isPad=true(平板)'] = Object.assign({}, envs['A: displayMode=1(手机竖屏)'], { displayMode: 2, isPad: true });
envs['C: displayMode=2 isPad=false(手机横屏比)'] = Object.assign({}, envs['A: displayMode=1(手机竖屏)'], { displayMode: 2, isPad: false });

function dump(node, depth, out) {
  const pad = '  '.repeat(depth);
  if (node.tag === 'virtual') {
    out.push(pad + '<virtual wxVkey=' + node.wxVkey + '>  // wx:if 命中第 ' + node.wxVkey + ' 支（1=真,2=假）');
    (node.children || []).forEach(c => dump(c, depth + 1, out));
    return;
  }
  const attrs = Object.keys(node.attr || {}).map(k => k + '=' + JSON.stringify(node.attr[k])).join(' ');
  out.push(pad + '<' + node.tag + (attrs ? ' ' + attrs : '') + '>');
  (node.children || []).forEach(c => dump(c, depth + 1, out));
}

for (const label of Object.keys(envs)) {
  let root;
  try {
    root = gwxProbe(envs[label], {}, {});
  } catch (e) {
    console.error('[FAIL] ' + label + ' -> ' + (e && e.stack || e));
    process.exit(1);
  }
  const out = [];
  dump(root, 0, out);
  console.log('========== ' + label + ' ==========');
  console.log(out.join('\n'));
}

// 还原 chunk 内联的页面 wxss（setCssToHead 分段：[0,N]=N rpx，[1]=类名前缀占位（此处空），[2,path]=@import）
if (sandbox.__lastCss) {
  const css = sandbox.__lastCss.segs.map(seg => {
    if (typeof seg === 'string') return seg;
    if (Array.isArray(seg)) {
      if (seg[0] === 0) return seg[1] + 'rpx';
      if (seg[0] === 1) return '';
      if (seg[0] === 2) return '@import "' + seg[1] + '";\n';
    }
    return '';
  }).join('');
  console.log('========== pages/share/share.wxss（由 chunk_42.webview.js:303 setCssToHead 还原） ==========');
  console.log(css);
}
