---
页名: wordExt
显示名: 单词卡（单词扩展学习页）
状态: 已对账（PASS，3 处行号/出处口径微偏见 §6）
chunk: chunk_48.webview.js / chunk_48.appservice.js
导航栏: 系统栏（标题「单词卡」，onLoad 运行时被覆盖为当前单词，见 §3 生命周期）
---

# 页面还原规格：单词卡（单词扩展学习页）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 逻辑源 `chunk_48.appservice.js` 的 `define("pages/wordExt/wordExt.js")` 整段压缩于 **L57 单行**（约 12K 字符）；节点树源 `chunk_48.webview.js` 的 `$gwx_XC_43`（定义 L1，注册 L143，渲染函数 m0 在 L73-142）。

## 0. 页面数据（data 初始值）

来源：`chunk_48.appservice.js:57`

```js
data: {
  posterUrl: "",      // 海报临时文件路径，空=弹层不显示
  word_num: 99,       // 已学单词数（海报文案用），getWordNum 回填
  height: 400,        // swiper 高度 rpx，onLoad 按窗口换算
  cardList: [],       // 单词卡数组 [{img, audio, title}]
  image_index: 0,     // 当前卡索引
  cur_word: "",       // 当前单词（onLoad 从 ?word= 取）
  word_level: "",     // 单词等级（words.level）
  word_detail: {},    // words 集合整条记录
  isAudioPlay: false  // 音频播放态（切播放/暂停图标）
}
// 另有模块级闭包标志 l = false（音频 500ms 防抖，L57 顶部 var l=!1）
```

## 1. 页面骨架（节点树）

来源：`chunk_48.webview.js` 的 `$gwx_XC_43`（行号：L1 定义，ops 常量表 L19-67，渲染函数 m0 L73-142；下述行号为 m0 内行号，z[N] 为 ops 表索引并注明 ops 行号）

```
L75  view.tui-banner-swiper                          (z[0] L19)
├─ L77  swiper  bindchange=changeImage  circular=true  duration=500
│       interval=3500  style="height:{{height}}rpx"  (样式绑定 z[5] L24)
│   └─ L78-95  wx:for={{cardList}}  wx:key="index"  (z[6] L25, item/index 同名)
│       └─ L81  swiper-item
│           ├─ L82  view.bg.bg-img  (z[8] L27)
│           │     style="background-image:url({{item.img}});height:100%;"  (z[9] L28)
│           └─ L84  view  bind:tap=playAudio  (z[10] L29)
│                 class=tui-product-title  (z[11] L30)
│               └─ L85-88  view.tui-pro-titbox.text-white  (z[12] L31)
│                     └─ 文案 {{item.title}}  (z[13] L32)
├─ L98-114  wx:if={{posterUrl}}  (z[14] L33) ── 海报弹层
│   └─ L101  view.poster-container  (z[15] L34)
│       ├─ L103  view  bindtap=closePoster  (z[16] L35)  class=close-btn  (z[17] L36)
│       │         └─ 文案 "×"  (z[18] L37)
│       ├─ L107  image.poster-img  (z[19] L38)  mode=widthFix  (z[20] L39)
│       │         src={{posterUrl}}  (z[21] L40)
│       └─ L109  button  bindtap=savePoster  (z[22] L41)  class=save-btn  (z[23] L42)
│                 └─ 文案 "保存到相册"  (z[24] L43)
├─ L115-116  canvas.hidden-canvas  id=posterCanvas  type=2d
│             (z[25]/z[26]/z[27] L44-46) ── ⚠️ 无条件渲染（在 wx:if 之外），供海报离屏绘制
├─ L117-123  view.tui-banner-tag  (z[28] L47)
│   └─ L119  组件 <tui-tag>：originRight=-1（即 true）、padding="12rpx 18rpx"（z[29] L48）、
│             shape="circleRight"（z[30] L49）、type="translucent"（z[31] L50）
│             内容 {{image_index+1}}/{{cardList.length}}  (z[32] L51, 表达式 [2,'+'] 加法)
├─ L124-130  view.share  (z[33] L52)
│   └─ L126  button  openType=share  (z[34] L53)  plain=true
│       └─ L127  image.share-image  (z[36] L55)
│             src="https://qianyufang.top/public/yingyu/images/icon/share.png"  (z[37] L56)
│             style="width:100%;"  (z[38] L57)
└─ L131-139  view.tui-button-bottom  (z[39] L58)，三张图均 class=bottom-icon (z[41] L60)
    ├─ L133  image  bindtap=playAudio  (z[40] L59)
    │         src={{isAudioPlay ? '…/pause.png' : '…/play.png'}}  (z[42] L61 三目)
    ├─ L135  image  bindtap=downloadWordPoster  (z[43] L62)
    │         src="https://qianyufang.top/public/yingyu/images/icon/download_round.png"  (z[45] L64)
    └─ L137  image  bindtap=clickAdd  (z[46] L65)
              src="https://qianyufang.top/public/yingyu/images/icon/add.png"  (z[48] L67)
```

### 状态分支
- `posterUrl` 非空 → 海报弹层（全屏遮罩 + 预览图 + 保存按钮 + 右上 ×）；`hidden-canvas` 不在弹层内，常驻渲染（`chunk_48.webview.js` m0 L98-116，wx:if 闭合于 canvas 之前）。
- 底部喇叭图标二态：`isAudioPlay ? pause.png : play.png`（z[42] L61）。
- 无其他条件渲染；cardList 为空数组时 swiper 区为空白（无 loading 骨架节点）。

### 组件依赖
- `tui-tag`：非本 chunk 定义，在 `unpacked/chunk_26.appservice.js:54` `define("components/tui-tag/tui-tag.js")`，properties 默认 type:"primary"/padding:"16rpx 26rpx"/shape:"square"/originRight:Boolean（同文件 L55 Component properties 段）；本页覆盖为 padding="12rpx 18rpx"、shape="circleRight"、type="translucent"、originRight=true。
- `app-config.json` 中无 `usingComponents` 静态注册（json 内检索 "tui-tag" 0 处），组件经公共 chunk 全局注册可用。

## 2. 样式规格

来源：`wxss_out/pages__wordExt__wordExt.wxss`（25 行，数值直接当 px，不除 2；rpx 原值见 `chunk_48.webview.js:167` setCssToHead）

| 类名 | 关键样式 | 用途 |
|---|---|---|
| body | background-color:#f7f7f7 | 页面底色（L1） |
| .container | padding-bottom:55px（rpx 源 110rpx） | ⚠️ 样式残留：wxml 骨架无 container 类节点（L2） |
| .tui-banner-swiper | position:relative | swiper 容器（L9） |
| .tui-product-title | position:fixed; top:50px; width:100%; min-height:100px; border-radius:30px; flex 居中 | 单词标题浮层（L10-11） |
| .tui-pro-titbox | font-size:64px; font-weight:500; padding:5px 15px; position:relative | 单词大标题 64px（L12） |
| .tui-banner-tag | position:absolute; left:0; top:20px; color:#fff | 左上角「第 n/共 m 张」标签容器（L5） |
| .share | position:fixed; right:10px; top:10px | 右上分享按钮容器（L6） |
| .share wx-button | width:51px; height:51px; padding:0; border:none | （L7） |
| .share-image | width:100%; height:51px | 分享图标（L8） |
| .tui-button-bottom | position:fixed; bottom:30px; width:100%; height:120px; z-index:99; flex 居中 | 底部三图标条（L3） |
| .bottom-icon | width:69px; height:69px; margin:12px; z-index:999 | 底部图标（L4） |
| .poster-container | position:fixed; 100vw×100vh; background:rgba(0,0,0,.7); z-index:9999; flex 纵向居中 | 海报弹层遮罩（L20） |
| .poster-img | width:300px; height:540px; border-radius:8px; box-shadow:0 6px 16px rgba(0,0,0,.3) | 海报预览图（L21） |
| .save-btn | width:200px; margin-top:20px; font-size:15px; background:#ff9800; color:#fff; border-radius:20px; z-index:10000 | 保存按钮（L22） |
| .close-btn | 30×30px; 圆形; background:hsla(0,0%,100%,.25); font-size:22px; right:30px; top:50px; z-index:10001；:active 时 .4 底 | 关闭按钮（L24-25） |
| .hidden-canvas | width:300px; height:540px; position:absolute; left:-9999px; top:-9999px; z-index:-1 | 海报离屏画布，固定 px 不换算（L23，rpx 源值同为 300/540，无 [0,n] 换算标记） |
| .popup-recording / .icon-recording / .pop-view / .popup-text / .result-text / .value-text | 如 .value-text{font-size:150px; font-family:Times; italic} | ⚠️ 本页 wxml 未使用的样式（疑似共享 wxss 残留）（L13-19） |

依赖的全局类（ColorUI 等）：`.bg` `.bg-img` `.text-white`（节点树 L82/L85 使用，定义在 page-frame.html 全局 setCssToHead，本页 wxss 无定义）。

## 3. 事件与逻辑

来源：`chunk_48.appservice.js`（行号：L56-57，逻辑整段在 L57）

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| swiper bindchange | changeImage | 更新 image_index → playAudio（翻卡自动读音频） | — | image_index |
| 标题区 bind:tap / 底部喇叭 bindtap | playAudio | 闭包 l 做 500ms 防抖；image_index 越界回 0；src=encodeURI(decodeURIComponent(audio)) 后自动播放 | — | （isAudioPlay 由 onPlay/onEnded 回调维护） |
| 下载图标 bindtap | downloadWordPoster | 见 §5 海报生成 | — | posterUrl |
| 保存按钮 bindtap | savePoster | wx.saveImageToPhotosAlbum(posterUrl)；成功 toast「保存成功，去分享吧！」(icon:success)，失败 toast「保存失败」(icon:none) | — | — |
| × bindtap | closePoster | 关闭海报弹层 | — | posterUrl:"" |
| 加号 bindtap | clickAdd | 先 toast「单词收藏成功」；再查 user_study 是否已收藏（words_collect elemMatch {name, level}），未收藏才写入 | updateUserStudy(tag:"collectWord", baby_id, word:word_detail+timestamp) | o.globalData.wordsUpdate=true |
| button openType=share | （无自定义 handler，原生转发） | 触发 onShareAppMessage | — | — |

### 生命周期（L57 onLoad/onUnload）
- `onLoad(t)`：`setData({cur_word:t.word})` → `initAudio()` → `getCardList(t.word)` → `getWordNum()` → `wx.setNavigationBarTitle({title:t.word})`（**动态用单词本身替换导航栏标题**，app-config 默认标题「单词卡」仅 onLoad 前一瞬可见）→ 按 `wx.getWindowInfo` 换算 `height = 750/windowWidth*windowHeight`（rpx 铺满屏）。
- `onUnload`：innerAudioContext 存在则 `destroy()` 并置 null。
- `initAudio`：`wx.createInnerAudioContext()`；onPlay → `isAudioPlay:true`（回调内 console.log「监控播放事件」）；onEnded → `isAudioPlay:false`。

### 云函数调用清单（全页）
- 仅 **1 个**：`wx.cloud.callFunction({name:"updateUserStudy", data:{tag:"collectWord", baby_id, word:word_detail(附 timestamp)}})`（L57 clickAdd 内），成功后置 `o.globalData.wordsUpdate=!0`。grep 复核：`grep -c 'name:"updateUserStudy"' unpacked/chunk_48.appservice.js` → 1（本 ask 执行）。

### 云数据库集合（直查，非云函数）
来源：L57（`i = wx.cloud.database()`）

| 集合 | 查询 | 用途 |
|---|---|---|
| words | `where({name}).get()` → 取 `level`/整条 `word_detail`/`extend`；另 `field({level:!0})` 二次查（getWordList 内） | 卡片数据源 |
| level 库（AA/AL/BL/CL/DL/EL/FL/GL/HL/IL/JL/KL） | `aggregate().match({words:elemMatch(eq(word))}).project({list:filter(indexOfBytes(toLower($$item.title), toLower(word)) ≠ -1)})` | 无 extend 时的降级图库 |
| user_study | ① `where({baby_id}).field({quiz:!0}).get()` → `word_num = data[0].quiz.length`；② `where({baby_id, words_collect:elemMatch({name, level})}).get()` 收藏查重 | 已学数 / 收藏查重 |

### cardList 四级降级链（getCardList 起，必须精确到边界）
1. `words` 查询命中且 `i.data[0].extend` 非空 → `cardList = extend`，hideLoading，playAudio。
2. 否则 → `getListNoExtend(level, word)`：`getDatabaseLevel(level)` 选库 → level 库聚合过滤；命中（`t.list.length ≠ 0` 且 `t.list[0].list.length ≠ 0`）→ 遍历构造 `{img, audio: img.replace(".jpg",".mp3"), title}` 数组；未命中 → `getWordList(word)`。
3. `getWordList`：**重查 words.field({level:!0})** 再走一遍完全相同的 level 库聚合（⚠️ 行为与 getListNoExtend 重复，疑为冗余，原样还原）；仍未命中 → `getWordCover(word)`。
4. `getWordCover`：`cardList = [{img: word.img, audio: word.audio_en, title: word.name}]`（封面兜底单卡）。

### ⚠️ 忠实记录的疑似 bug（原样还原，不得修正）
`getDatabaseLevel` 判断的是 `this.level` 而非 `this.data.word_level`（L57 原文：`var t="AA";return "A"==this.level&&(t="AL")…`）。本页从未给 `this.level` 赋值——grep 复核 `grep -o "this\.level=" unpacked/chunk_48.appservice.js` → 0 处（本 ask 执行），故该函数**恒返回 "AA"**，降级链中的 level 库聚合实际永远查 AA 库。此行为是压缩原文的忠实结果，对账员注意按原样对账，不作「修复」。

### 计算规则（必须精确到边界）
- swiper 高度：`height = 750 / windowWidth × windowHeight`（rpx，铺满屏）（L57 onLoad）。
- 已学单词数：`word_num = user_study 首条记录的 quiz 数组长度`（L57 getWordNum；首条记录不存在时 `e.data[0].quiz.length` 会抛错——原样记录，未见兜底）。
- 音频防抖：闭包 `l` 置 true 后 500ms 复位；期间再次 playAudio 直接 return（L57 playAudio）。
- 音频越界：`image_index >= cardList.length` 时回 0（L57 playAudio）。
- 收收藏：先弹 toast 再查重；查重条件为 `words_collect` 中存在 `{name: cur_word, level: word_level}` 的元素；仅当 `e.data.length == 0` 才 callFunction，word_detail 附 `timestamp = new Date().getTime()`（L57 clickAdd）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 卡片图片 | level 库聚合结果的 `item.img` 原样使用 | chunk_48.appservice.js:57（getListNoExtend/getWordList 内 `t.list[a].list[n].img`） | ⚠️ 待真机验证 |
| 卡片音频 | 由图片路径推导：`img.replace(".jpg", ".mp3")` | chunk_48.appservice.js:57（同上两函数内 `var s=l.replace(".jpg",".mp3")`） | ⚠️ 待真机验证（规律实录，CDN 可达性本任务未验证；本仓 audit 已有 24/24 CDN 探测报告可交叉引用） |
| 封面兜底卡 | `words.img` + `words.audio_en` | chunk_48.appservice.js:57 getWordCover | ⚠️ 待真机验证 |
| 海报二维码 | 固定 `https://qianyufang.top/public/yingyu/qrcode.jpg` | chunk_48.appservice.js:57 downloadWordPoster | ⚠️ 待真机验证 |
| 分享图标 | `https://qianyufang.top/public/yingyu/images/icon/share.png` | chunk_48.webview.js m0 z[37] (L56) | ⚠️ 待真机验证 |
| 播放/暂停图标 | `…/images/icon/play.png`、`…/images/icon/pause.png`（三目切换） | chunk_48.webview.js m0 z[42] (L61) | ⚠️ 待真机验证 |
| 下载/收藏图标 | `…/images/icon/download_round.png`、`…/images/icon/add.png` | chunk_48.webview.js m0 z[45] (L64) / z[48] (L67) | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

### 海报生成（downloadWordPoster → drawCanvas，L57）
- 流程：loading「单词海报生成中」→ `downloadFile(cardList[image_index].img)` + `downloadFile("https://qianyufang.top/public/yingyu/qrcode.jpg")` → SelectorQuery 选 `#posterCanvas`（fields:{node:true,size:true}）→ 按 `pixelRatio` 缩放画布物理尺寸并 `ctx.scale` → drawCanvas。
- `downloadFile` 为 Promise 包装 `wx.downloadFile`，**仅 statusCode 200 才 resolve**（L57）；任一失败 → hideLoading + toast「图片加载失败」(icon:none)。
- drawCanvas 画布内容（画布 CSS 尺寸 300×540，图片绘制高 `a-90`）：
  1. 图片铺 (0,0,w,a-90) → 黑罩 `rgba(0,0,0,.3)` 同区域；
  2. 左上「英语分级兔」16px #f3f3f3 @(24,38) +「分级学习 · 趣味探索」9px rgba(255,255,255,.7) @(24,56)；
  3. 中央单词 `word_detail.name` 42px bold 白 @(w/2, 0.7×(a-90)) + "/音标/"（`"/"+word_detail.yinbiao+"/"`）16px rgba(255,255,255,.85) @(w/2, 同 y+35)；
  4. 底部白条 (0, a-90, w, 90) rgba(255,255,255,.98)：左 20 处「这是我RAZ学习的第{word_num}个单词」12px bold #333（y=a-90+35）+「来英语分级兔一起掌握3000词汇吧」11px #666（y=a-90+60）；
  5. 右下角 60×60 二维码 @(w-60-20, a-90+15)；500ms 后 `canvasToTempFilePath` → `posterUrl`，hideLoading。
- ⚠️ 死代码（原样还原）：drawCanvas 中 `extractString(prompt)` 的返回值与 `word_detail.zh` 赋给未使用变量，实际未上画布；`getTodayDate`、`wrapText` 在本页定义但**未被调用**。

### 入口（谁跳到本页）
4 处 navigateTo，均带 `?word=` 参数：
- `chunk_27.appservice.js:444`（wordExtendTop 处理器内 `url:"../wordExt/wordExt?word="`）
- `chunk_32.appservice.js:687`
- `chunk_38.appservice.js:142`
- `chunk_47.appservice.js:470`（另有绝对路径 "/pages/wordExt/wordExt"）

（依据包结论；四个入口页的具体函数上下文仅定位到行号未展开，标「待复核」。）

### 分享
- `onShareAppMessage`（L57）：`title="今日单词：{cur_word} [{word_detail.yinbiao}] {word_detail.zh}"`，`path="/pages/wordExt/wordExt?word={cur_word}"`，`imageUrl=word_detail.img`。
- `onShareTimeline`（L57）：同 title/imageUrl，`query="word={cur_word}"`。

## 6. 对账记录（对账员填写）

对账时间：2026-10-01。对账员独立重推依据：`unpacked/chunk_48.webview.js`（节点树 m0 L73-142、ops 表 L19-67、setCssToHead L166-167）、`unpacked/chunk_48.appservice.js` L57、`unpacked/app-config.json`、`wxss_out/pages__wordExt__wordExt.wxss`（本 ask 用 `python tools/extract_wxss.py unpacked/page-frame.html wxss_out` 现场重生成，64 个文件中确认含本页 25 行 wxss）。

- [x] 节点树与原文一致 —— m0 全部 20 个节点创建行（`_n`/`_mz`/`_rz`/`_2z`）与 spec §1 树逐项吻合：事件绑定（bindchange=1、bind:tap=10、bindtap=16/22/40/43/46）、属性（circular/duration/interval/style、mode=widthFix、openType/plain、id=posterCanvas、type=2d、tui-tag 四 props originRight=-1）、z 索引（z[10] 复用于 z[40]、z[33]→z[34]、z[2]→z[35]、z[41]→z[44]/z[47]、z[14]→z[21]）、wx:for item/index 同名（L95 `_2z(...'item','index','index')`）、三目/加法表达式（z[32]/z[42]）全部核实。
- [x] 类名抽查 21 处全中（超出 ≥10 要求）：节点树 14 个 class 值（tui-banner-swiper / bg bg-img / tui-product-title / tui-pro-titbox text-white / poster-container / close-btn / poster-img / save-btn / hidden-canvas / tui-banner-tag / share / share-image / tui-button-bottom / bottom-icon）→ 其中 11 个在本页 wxss 命中，bg/bg-img/text-white 3 个不在本页 wxss（符合 spec「全局类」声明）；另 7 个 spec 声明的未使用残留类（container/popup-recording/icon-recording/pop-view/popup-text/result-text/value-text）反向确认在本页 wxss L2/L13-19 均存在。
- [x] 文案逐字一致 —— 14 项静态/动态文案全中：×、保存到相册（webview ops z[18]/z[24]）；单词收藏成功、保存成功，去分享吧！、保存失败、图片加载失败、单词海报生成中、扩展单词加载中、监控播放事件、onEnded、英语分级兔、分级学习 · 趣味探索（原文为 JS 转义 `\xb7`=U+00B7 与 spec 的「·」同字符）、这是我RAZ学习的第{n}个单词、来英语分级兔一起掌握3000词汇吧（appservice L57）；分享 title/path/imageUrl/query 拼接式与 spec §5 逐字一致；导航栏「单词卡」在 app-config.json `page/pages/wordExt/wordExt.html.window.navigationBarTitleText` 确认。
- [x] 事件与云函数调用清单齐全 —— 22 个函数（onLoad/onUnload/initAudio/getCardList/getListNoExtend/getWordList/getWordCover/getDatabaseLevel/playAudio/changeImage/onShareAppMessage/onShareTimeline/getWordNum/clickAdd/downloadWordPoster/extractString/drawCanvas/getTodayDate/downloadFile/wrapText/savePoster/closePoster）全部在 L57 验证存在；`grep -c callFunction` → 1，name 仅 `updateUserStudy`；集合 words×3 / user_study×2 与 spec §3 清单一致；海报绘制全部参数（d=a-90、rgba(0,0,0,0.3)、16px@24,38、9px@24,56、42px@i/2,.7*d、音标+.7*d+35、白条 fillRect(0,d,i,90)、12px@20,d+35、11px@20,d+60、二维码 drawImage(o,i-60-20,d+15,60,60)、500ms 后 canvasToTempFilePath、downloadFile 仅 200 resolve、pixelRatio 缩放）逐项 PASS；三处疑似 bug/死代码（getDatabaseLevel 读 `this.level` 且 `this.level=` 0 处赋值、prompt 三目取值未上画布、getTodayDate/wrapText 定义未被调用）全部按原文证实。
- diff 摘要（3 处，均为行号/出处标注口径，不动结论）：
  1. **头注行号**：spec 称 $gwx_XC_43「注册 L165」——实测 `e_[x[0]]={f:m0,...}` 在 **L143**；L165 是 `}(__g.a,...)` 闭包调用与 `__vd_version_info__.delayedGwx` 行。建议头注改为「注册 L143」。
   → 已采纳：头注改为注册 L143（2026-10-02 第四批验收后小修）。
  2. **§1 树中 wx:if/wx:for 区间行号**：spec 标 wx:if「L98-114」——实测 `if(_oz(z,14,...)` 在 **L100**（L98 是 `var oFOD=_v()`），闭合 `}` L114 属实；wx:for 标「L78-95」中 `_2z` 实在 L95、区间起点 L78 是 `var fIOD=_v()`。区间口径偏宽 2 行，树内容本身无误。
  3. **§2 全局类 .bg 出处**：spec 称 `.bg` 定义在 page-frame.html 全局 setCssToHead——实测 page-frame.html 中 `.bg-img{`（background-attachment:fixed...）与 `.text-white{color:var(--white)}` 均找到，但**独立的 `.bg{` 类定义 0 处**（全部 19 处 `bg{` 前缀均为 thorui-__bg/bg-img/bg-white 等），`unpacked/__extended__/` 全目录亦无。节点树 z[8]='bg bg-img' 中类名「bg」本身属实，但其样式来源存疑（可能依赖 .bg-img 的 background-position 承载，或该类为无效类名）。前端还原时以 .bg-img 为准即可，「.bg 有全局定义」一句建议改为「.bg 未在 page-frame.html 检出独立定义，疑似无效挂名」。

  以上 3 处不影响页面结构与逻辑结论，判定 **PASS**。
