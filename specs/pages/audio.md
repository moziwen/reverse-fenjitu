---
页名: audio
显示名: 磨耳朵/音频播放页（注意：标题「磨耳朵」属 listen 页，audio 页无标题）
状态: 对账通过（待验收）
chunk: chunk_28.webview.js / chunk_28.appservice.js
导航栏: 系统栏（未配置标题（默认空标题）；onReachBottomDistance:50）
---

# 页面还原规格：audio（音频播放页）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。

## 1. 页面骨架（节点树）

来源：`chunk_28.webview.js` 的 `$gwx_XC_21`（声明于 chunk_28.webview.js:1，注册于 chunk_28.webview.js:116：`__wxAppCode__['pages/audio/audio.wxml'] = $gwx_XC_21`）。定位命令：`grep -l "./pages/audio/audio\.wxml" unpacked/chunk_*.webview.js` → 仅 chunk_28.webview.js。ops 表见 chunk_28.webview.js:19-41（索引 0..22），节点构建体 chunk_28.webview.js:47-93。

```
view.tui-pro-titbox                                    (op0)
└─ view.text-bold                                      (op1)
   └─ 文本：{{level}}：{{title}}                       (op2，拼接表达式)
view.playAudio                                         (op3)
└─ view.body                                           (op4)
   └─ image.coverImg                                   (op5)
      src={{cover}}                                    (op6)
      class='coverImg ' + (audioPlayStatus==1 ? 'play' : '')   (op5，播放中旋转)
wx:for {{lists}} (wx:for-item=item, wx:for-index=index)  (op7；chunk_28.webview.js:73 _2z(...,'item','index','index'))
└─ view  bindtap=clickItem (op9)  data-id={{index}} (op11)  class='index' (op10)
   └─ tui-list-cell
      color = index==clickId ? '#ff9b6a' : '#333'      (op12)
      size = '38'                                      (op13)
      └─ 文本：{{index+1}}. {{item.title}}             (op14)
wx:if {{share}}                                        (op15；chunk_28.webview.js:76)
└─ view.flex-sub.text-center.margin-top                (op16)
   └─ view.solid-bottom                                (op17)
      └─ button  bindtap=clickBtn (op18)
         class='bg-blue light text-xl'                 (op19)
         style='width:60%;'                            (op20)
         文案：「查看更多内容」                          (op21)
view.tui-safearea-bottom                               (op22)
```

### 状态分支
- `audioPlayStatus` 三态驱动 UI：1=播放中 → 封面加 `play` 类旋转（op5）；点击列表项时该项 `index==clickId` → tui-list-cell 文字变 `#ff9b6a` 高亮，否则 `#333`（op12）。
- `share` 为 true（从分享码 scene 进入）时才渲染「查看更多内容」按钮区（op15）；onLoad 中 scene 入口置 share:true（chunk_28.appservice.js:70）。
- 使用组件：`tui-list-cell`（usingComponents 指向 `/components/tui-list-cell/tui-list-cell`，见 unpacked/app-service.js:37 中嵌入的 pages/audio/audio.json）。

## 2. 样式规格

来源：`wxss_out/pages__audio__audio.wxss`（22,497 字节/文件大小实测吻合；多行文件，行号为该文件内行号；数值直接当 px，不除 2）

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .tui-pro-titbox | font-size:16px; font-weight:500; padding:5px; text-align:center; box-sizing:border-box | 顶部标题框（:59） |
| .body | display:flex; align-items:center; justify-content:center; height:190px; margin-top:10px; width:100% | 封面容器（:1） |
| .coverImg | border-radius:50%; height:180px; position:absolute; width:180px | 圆形封面（:2） |
| .coverImg.play | animation:rotate 15s linear infinite; animation-fill-mode:forwards | 播放中旋转（:3） |
| @keyframes rotate | 0%{transform:rotate(0)} → 100%{transform:rotate(1turn)} | 旋转动画（:4-7，-webkit 与标准两份） |
| .tui-list-cell | font-size:16px; line-height:32px; padding:18px 15px; position:relative; width:100% | 列表项（:155） |
| .tui-safearea-bottom | height:env(safe-area-inset-bottom); margin-bottom:50px; width:100% | 底部安全区（:175） |
| .tui-content | background-color:#fff; color:#555; font-size:24px; padding:2.5px 10px | 【待复核】本页骨架 ops 表未见使用该类，属 ThorUI 遗留，还原时可不实现 |

注意：该 wxss 含大量 ThorUI 组件库全局/演示类（如 :21 .tui-product-box、:23 .tui-new-item），本页骨架未使用，不要照抄。

依赖的全局类（ColorUI 等，来自 page-frame.html setCssToHead，本页骨架用到）：`.text-bold`、`.flex-sub`、`.text-center`、`.margin-top`、`.solid-bottom`、`.bg-blue`、`.light`、`.text-xl`。

## 3. 事件与逻辑

来源：`chunk_28.appservice.js`（page 定义 chunk_28.appservice.js:69-71；页面数据与全部函数见 :70）

页面数据（chunk_28.appservice.js:70）：
`data = { level:"", card_id:"", audioPlayStatus:0, cover:"", audio:"", clickId:-1, lists:[], share:!1 }`

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| 页面加载 | onLoad(t) | 解析 id 或 scene（scene 需 decodeURIComponent，来自分享码，此时 share:true 并清空 lists/audio）；level = id 按 '-' 切分取首段，card_id = 整个 id；随后 bindAudio()；参数 t.task 存在→getAudioDetail(0)，否则 getAudioDetail(1)（1=自动播放整卡音频） | 无（直查云数据库） | level, card_id, share |
| 页面卸载 | onUnload | 销毁 innerAudioContext | 无 | — |
| tap 封面区 | playAudio | 三态：0=未播（清列表高亮 clickId=-1，src=audio, loop=false, play）→1；1=播放中（pause）→2；2=暂停（play 续播）→1 | 无 | audioPlayStatus, clickId |
| tap 列表项 | clickItem(t) | dataset.id 为 Number；再次点击同项→stop 并复位（audioPlayStatus=0, clickId=-1）；否则 src = encodeURI(decodeURIComponent(lists[id].img.replace('.jpg','.mp3')))，play | 无 | clickId, audioPlayStatus |
| tap「查看更多内容」 | clickBtn | 停止音频并置空，wx.reLaunch('/pages/index/index') | 无 | audioPlayStatus |
| 分享给朋友 | onShareAppMessage | title=level+':'+title；path=/pages/audio/audio?level=..&id=this.data.id；imageUrl=cover | 无 | — |
| 分享朋友圈 | onShareTimeline | 同上，path='level=..&id=..'（单页模式 query 格式） | 无 | — |

### 计算规则（必须精确到边界）
- 数据获取 getAudioDetail(a)：`wx.cloud.database()`（chunk_28.appservice.js:70 开头 `var t=wx.cloud.database({})`，**客户端直连云数据库，不是云函数**）→ `collection(集合名).where({id: card_id}).field({cover:true,title:true,list:true}).get()`。
- 成功后：`cover = t.data[0].cover.replace('.jpg','0.jpg')`；`title = t.data[0].title`；`lists = t.data[0].list`。
- `a==1` 时拼接整卡音频 URL：`'https://qianyufang.top/' + level + '/Audio/' + card_id + '.mp3'` 并 playAudio()。
- 集合名映射 getDatabaseLevel()：level 字母 → 字母+'L'（A→AL, B→BL, C→CL, D→DL, E→EL, F→FL, G→GL, H→HL, I→IL, J→JL, K→KL）；**默认 'AA'**（无匹配字母时）。
- 播放器绑定 bindAudio()：wx.createInnerAudioContext()；onPlay→audioPlayStatus=1；onPause→2；onEnded→0 且 clickId=-1；onError→0 并 wx.showToast「播放音频出错」（icon:none）。

### 云函数调用清单
- **0 个**。grep -c 'callFunction' chunk_28.appservice.js = 0。本页数据访问全部是客户端 `wx.cloud.database()` 直查集合（AA / AL~KL），音频走静态 CDN。

### 已知源码疑点（照抄，勿修复）
- onShareAppMessage / onShareTimeline 引用 `this.data.id`，但 data 只定义了 `card_id`，`id` 未在 data 中定义 —— 分享路径中的 id 可能为 `undefined`，疑似源码 bug（chunk_28.appservice.js:70）。还原时照抄原逻辑并保留此注释。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 整卡音频 | `https://qianyufang.top/<level>/Audio/<card_id>.mp3` | chunk_28.appservice.js:70 getAudioDetail 拼接逻辑 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md）（域名可达性为本地推断） |
| 封面图 | 云数据库 cover 字段值 `.jpg` → `.jpg` 前插入 `0`，即 `xxx.jpg → xxx0.jpg` | chunk_28.appservice.js:70 `cover.replace('.jpg','0.jpg')` | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 条目音频 | `lists[i].img` 字段值 `.jpg → .mp3`（中文路径需 decodeURIComponent + encodeURI 处理） | chunk_28.appservice.js:70 clickItem | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 集合命名 | level 字母 + 'L'（A→AL…K→KL），默认 'AA' | chunk_28.appservice.js:70 getDatabaseLevel | 代码实证；集合内样本未核对 |

说明：本次未核对 captures/ 样本，`lists[]` 条目字段结构（item.title / item.img）仅以代码引用为据（chunk_28.webview.js:66 op14 用 item.title；chunk_28.appservice.js:70 clickItem 用 item.img）。

## 5. 弹窗 / 分支状态

- 本页无自定义弹窗。分支状态：
  - 播放态：封面旋转（audioPlayStatus==1，op5）。
  - 列表高亮：当前播放项文字 `#ff9b6a`，其余 `#333`（op12）。
  - 播放出错：wx.showToast「播放音频出错」icon:none（chunk_28.appservice.js:70 bindAudio onError）。
  - 分享进入（share=true）：底部出现「查看更多内容」按钮，点击 reLaunch 回首页（op15-21；chunk_28.appservice.js:70 clickBtn）。

## 6. 对账记录（对账员填写）

对账日期：2026-09-28。方法：独立重读 `unpacked/chunk_28.webview.js` / `unpacked/chunk_28.appservice.js` / `unpacked/wxss_out/pages__audio__audio.wxss` / `unpacked/page-frame.html` / `unpacked/app-config.json` / `unpacked/app-service.js`，未参考蒸馏过程。

- [x] 节点树与原文一致 —— 结构、类名、绑定、数据流全部一致；**但 op 索引标注多处错位，须修正**（见 diff-1）
- [x] 类名抽查 16 处全中（要求 ≥10）
- [x] 文案逐字一致
- [x] 事件与云函数调用清单齐全（云函数 0 个，实测 `grep -c "callFunction" unpacked/chunk_28.appservice.js` = 0）；遗漏 1 处行为（见 diff-3）

### diff 摘要

**diff-1（须修正）op 索引与行号引用错位。** 依据 `_mz` 运行时实现（`unpacked/app-service.js` 中 `function _mz(z,tag,attrs,generics,...)`：`_rz(z,tmp,attrs[i],base+attrs[i+1],...)`，首个属性用原始索引、后续按 base 连续递增），ops 表实为 **chunk_28.webview.js:19-41，共 23 条，索引 0..22**（非 spec 所写「:11-33（索引 0..33）」）；节点构建体 m0 实为 **:47-93**（非 :38-89）。修正对照（原文索引 ← spec 误标）：

| 节点/属性 | 正确 op | spec 误标 | 原文行 |
|---|---|---|---|
| image class（coverImg ?: play） | op5 | op6 | :58 |
| image src（cover） | op6 | op7 | :58 |
| wx:for lists（_2z，'item','index','index'） | op7 | op8 | :73 |
| 列表 view bindtap=clickItem | op9 | op10 | :64 |
| 列表 view class='index' | op10 | op9 | :64 |
| 列表 view data-id={{index}} | op11 | op12 | :64 |
| tui-list-cell color（?: #ff9b6a/#333） | op12 | op13 | :65 |
| tui-list-cell size='38' | op13 | op24 | :65 |
| 列表文本 {{index+1}}. {{item.title}} | op14 | op25 | :66 |
| wx:if share | op15 | op26 | :76 |
| view.flex-sub.text-center.margin-top | op16 | op27 | :78 |
| view.solid-bottom | op17 | op28 | :80 |
| button bindtap=clickBtn | op18 | op29 | :81 |
| button class='bg-blue light text-xl' | op19 | op30 | :81 |
| button style='width:60%;' | op20 | op31 | :81 |
| 文本「查看更多内容」 | op21 | op32 | :82 |
| view.tui-safearea-bottom | op22 | op33 | :89 |

另：spec 引用「:60 _2z」「:73 wx:if」实际分别为 :73、:76；注册行 :116 核实无误（含 delayedGwx 数组形式与直接调用两种）。op10='tui-content' 在 m0 中确无引用（死 op），spec 第 2 节「待复核」结论成立。

**diff-2（无差异）类名抽查 16 处全中**：页内 wxss —— .tui-pro-titbox(:59)、.body(:1)、.coverImg(:2)、.coverImg.play(:3)、@keyframes rotate(:4-7，spec 只写 :4-5，实际 -webkit 与标准两份)、.tui-list-cell(:155)、.tui-safearea-bottom(:175)、.tui-content(:218)，数值逐字一致；全局类（page-frame.html setCssToHead 块内逐一检索命中）—— .text-bold{font-weight:700}、.text-center{text-align:center}、.margin-top{margin-top:30rpx当量}、.flex-sub{flex:1}、.bg-blue{background-color:var(--blue)}、.light（多色变体，blueLight 在列）、.text-xl{font-size:36当量}、.solid-bottom（组选择器 position:relative + ::after 下边框）。

**diff-3（须补充）playAudio 三态中 0→1 分支**：原文还有 `setData({clickId:-1})`（chunk_28.appservice.js:70，`0==this.data.audioPlayStatus?(this.setData({clickId:-1}),...src=...loop=!1...play()`），即点封面从头播放时同时清除列表高亮。spec 第 3 节 playAudio 行与第 1 节状态分支均未记录。

**diff-4（措辞微调）导航栏**：`app-config.json` 中 `pages/audio/audio.html` 的 window 实为 `{"onReachBottomDistance":50}`，**未配置 navigationBarTitleText 键**（页面级 audio.json 同样未配），并非「显式空字符串」；运行时默认空标题，效果等同，但 frontmatter 表述建议改为「未配置（默认空标题）；onReachBottomDistance:50」。

### 结论

结构/类名/文案/事件四项核对内容本身无实质错误，但 diff-1 的证据索引错位数达 17 处、diff-3 漏 1 处行为，按「证据链必须可回溯」标准判定**须修正后通过**。（2026-09-24 第二轮复核：修正全部验证通过，最终 **PASS**，见文末对账员复核块。）

### 蒸馏工修正记录（2026-09-24）

按对账员修正清单完成：① op 索引错位 17 处全部改正（改前蒸馏工已独立重数 ops 表 chunk_28.webview.js:19-41 共 23 条 op0..op22，并核验 m0 构建体 `_mz`/`_rz` 调用实参，与对账员给出的正确索引逐条一致，无矛盾）；② 行号引用 4 处改正（ops 表 :19-41、构建体 :47-93、_2z :73、wx:if :76）；③ 第 3 节 playAudio 0→1 分支补记 `setData({clickId:-1})` 清列表高亮，写回列补 clickId；④ @keyframes 行号 :4-5 → :4-7；⑤ frontmatter 导航栏改为「未配置标题（默认空标题）；onReachBottomDistance:50」（已复核 app-config.json 与 app-service.js:37 audio.json 确无 navigationBarTitleText 键）。实质结论（类名/文案/事件/云函数）未改动。

### 对账员复核（2026-09-24 第二轮，收尾）

独立重验 chunk_28.webview.js / chunk_28.appservice.js / wxss_out/pages__audio__audio.wxss / app-config.json 原文：

- op 索引：抽验 21 处（含此前错位的 op5/op12/op19 在内的第 1/4/5 节全部标注）逐条与原文对齐 —— ops 表 ：19-41 共 23 条（op0..op22），m0 构建体 ：47-93 各 `_mz`/`_rz`/`_oz` 实参（:64 bindtap,9/class,10/data-id,11；:65 color,12/size,13；:66 _oz(14)；:76 _oz(15)；:78 class,16；:80 class,17；:81 bindtap,18/class,19/style,20；:82 _oz(21)；:89 class,22）与 spec 标注全部一致；`_mz` 首属性原始索引、后续 base 递增语义已对照 app-service.js:804 实现复核。
- 行号引用 3 处：构建体 ：47-93、_2z :73、wx:if :76 均正确。
- diff-3：第 3 节 playAudio 行已补记 0→1 分支 `setData({clickId:-1})` 清列表高亮，写回列已补 clickId，与 chunk_28.appservice.js:70 原文一致。
- @keyframes：wxss :4-7（-webkit 与标准两份，:8 起为 .tui-product-box）核对无误。
- 导航栏：app-config.json 中 `pages/audio/audio.html` window 实为 `{"onReachBottomDistance":50}`，无 navigationBarTitleText 键，frontmatter 表述准确。
- 第 6 节对账内容与实质结论（类名/文案/事件/云函数清单）未被改动。

**verdict = PASS**（证据链全部可回溯，无遗留差异，提交用户验收。）
