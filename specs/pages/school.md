---
页名: school
显示名: 课内同步（课内单词主页）
状态: 蒸馏中
chunk: chunk_39.webview.js / chunk_39.appservice.js
导航栏: 系统栏（标题「课内同步」）
---

# 页面还原规格：课内同步（pages/school/school）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_39.webview.js（327 行，实测 21758 字节），A=unpacked/chunk_39.appservice.js（100 行；L99 为 `__wxRoute="pages/school/school"`，页面逻辑全部在 **A:100 单行**（实测 4966 字符，本次全文逐段 grep 抽取核实），L101 为注册尾），X=wxss_out/pages__school__school.wxss（100 行），C=unpacked/app-config.json。
> ⚠ A:1-98 存在同号 `$gwx_XC_33` 渲染树副本（appservice 侧冗余拷贝，不完整），**权威渲染树只认 webview 侧**（W:1 定义、W:108 `var x=['./pages/school/school.wxml']`、W:325 注册 `__wxAppCode__['pages/school/school.wxml']`）。对账时只用 webview。

## 1. 页面骨架（节点树）

来源：`chunk_39.webview.js` 的 `$gwx_XC_33`（W:1），ops 数组构建函数 `gz$gwx_XC_33_1`（W:6-107），节点树构建 W:111-300，wxml 引用 W:108，注册 W:325。
定位命令与输出：`grep -n "pages/school/school.wxml" unpacked/chunk_39.webview.js` → W:108、W:325（唯一命中，chunk 归属唯一：`grep -l "'./pages/school/school.wxml'" unpacked/chunk_*.webview.js` → 仅 chunk_39）。

```
<view class="page">                                                        (hCQC 根，W:111-112 class=ops[0])
  <view class="section-header"/>                                           (W:113-114；仅有结构，无标题文案节点)

  <scroll-view class="grade-scroll" enableFlex scrollX showScrollbar>      (W:115，属性表 ['enableFlex',-1,'scrollX',-1,'class',2,'showScrollbar',1])
    <view class="grade-list">                                              (W:116-117)
      <view class="grade-item {{currentGradeId===item.id?'grade-item-active':''}}"
            bindtap="changeGrade" data-id="{{item.id}}"
            wx:for="{{grades}}" wx:key="id">                               (W:121 _mz ['bindtap',7,'class',1,'data-id',2]；⚠ _mz 索引坑：真实索引 ops[7]=W:26 'changeGrade'、ops[8]=W:27 'grade-item '+(currentGradeId===item.id?'grade-item-active':'')、ops[9]=W:28 item.id，与 z 数组 W:25-28 逐一验证吻合)
        {{item.name}}                                                      (W:122 _oz(z,10) → ops[10]=W:29 item.name)
      </view>                                                              (循环 _2z(z,5,...,'item','index','id')，W:128)

  <scroll-view class="unit-scroll" enableFlex scrollX showScrollbar>       (W:134)
    <view class="unit-list">                                               (W:136)
      <view class="unit-card {{currentUnitId===item.id?'unit-card-active':''}}"
            bindtap="changeUnit" data-id="{{item.id}}"
            wx:for="{{units}}" wx:key="id">                                (W:142 _mz ['bindtap',17,'class',1,'data-id',2] → ops[17]=W:36 'changeUnit'、ops[18]=W:37 条件类、ops[19]=W:38 item.id；循环 _2z(z,15,...) W:155)
        <view class="unit-no">Unit {{item.unitNo}}</view>                  (W:140-143，ops[21]=W:40 'Unit '+item.unitNo)
        <view class="unit-name">{{item.title}}</view>                      (W:147-148，ops[23]=W:42 item.title)

  <view class="unit-summary">                                              (W:159-160，ops[24] W:43)
    <view class="summary-left">                                            (W:161-162，ops[25])
      <view class="summary-title">{{currentUnit.unitNo}}</view>            (W:165 一带，ops z[21][1] 拼接 currentUnit.unitNo)
      <text class="summary-dot">·</text>                                   (W:168-169，ops[29]=W:48 '·')
      <view class="summary-desc">{{currentUnit.title}}</view>              (W:172 一带)
      <view class="summary-desc">本单元 {{currentUnit.words.length}} 个核心单词 ·</view>   (ops[31]=W:51，三段拼接)
      <view class="summary-desc" wx:if="{{currentUnit.sentences}}">{{currentUnit.sentences.length}} 个核心句型</view>   (条件 W:181-184，wx:if 条件 ops=z[36]=W:53 currentUnit.sentences，文案 ops=W:54)
    </view>
    <view class="stars">                                                   (ops[27]=W:44)
      <text class="{{index<unitStar?'star-active':'star-empty'}}">★</text> ×5   (ops[28]=W:46 [1,5] 固定 5 次；class=ops=W:58 index<unitStar 三元；文本 ops=W:59 '★'；循环 _2z(z,37,...) W:201)

  <view class="padding-left">                                              (W:206-207，ops=W:55)
    <!-- wx:if unitStudyExist（条件 ops=W:61，W:210 if(_oz(z,42,...))） -->
    <view class="quiz-btn" bindtap="startUnitStudy">读一读</view>           (W:211-213，_mz ['bindtap',43,'class',1] → ops[43]=W:62 'startUnitStudy'、ops[44]=W:63 'quiz-btn'；文案 ops=W:64)
    <!-- 上述块结束后，无条件渲染： -->
    <view class="quiz-btn" bindtap="startUnitQuiz">测一测</view>            (W:216-218，_mz ['bindtap',46,'class',1] → ops[46]=W:65 'startUnitQuiz'、class 复用 z[44]；文案 ops=W:67)

  <view class="word-waterfall">                                            (W:223-224，ops=W:68)
    <view class="word-column" wx:for="{{wordColumns}}">                    (W:228-229；循环 _2z(z,50,...) W:293)
      <view class="word-card" bindtap="clickWord" data-id="{{word.id}}"
            wx:for="{{item}}" wx:key="index">                              (W:236 _mz ['bindtap',56,'class',1,'data-id',2]...实际属性表 ['catchtap' 前略] → bindtap=ops[56]=W:75 'clickWord'、class=ops[57]=W:76 'word-card'、data-id=ops=W:77 word.id；内层循环 _2z(z,54,...) W:288)
        <view class="word-card-top">                                       (ops[59]=W:78)
          <text class="word-en">{{word.word}}</text>                       (ops[60]=W:79 类、文本 ops=W:81 word.word)
          <view class="audio-btn" catchtap="playWordAudio"
                data-audio="{{word.audio}}" data-id="{{word.id}}">          (W:241-247 _mz ['catchtap',62,'class',1,'data-audio',2,'data-id',3] → catchtap=ops[62]=W:81? 修正：ops[62]=W:81 为 'playWordAudio'（W:81 行内容），class=ops[63]=W:83 'audio-btn'，data-audio=ops[64]=W:85 word.audio，data-id=ops[65]=W:86 z[58] word.id)
            <text class="audio-icon">▶</text>                               (ops[66]=W:87 类、文本 ops=W:89 '▶')
          </view>
        </view>
        <view class="word-image-wrap">                                     (ops=W:90)
          <image class="word-image" mode="aspectFill"
                 src="{{word.gif && gifClick==word.id ? word.gif : word.img}}"/>   (W:249-252，src 三元 ops=W:94：宽松 == 原样，gifClick 绑定见第 3 节【待复核】)
        </view>
        <view class="word-card-bottom">                                    (ops=W:91)
          <text class="word-meta">{{word.extend}}个扩展</text>             (ops=W:93 两段拼接；注意「个扩展」前无空格)
          <text class="word-meta" wx:if="{{word.book}}">· {{word.book}}本绘本</text>   (条件 ops=W:94→word.book，文案 ops=W:95 三段 '· '+book+'本绘本')
          <view class="word-stars">                                        (ops=W:96 复用 z[36] 处样式类)
            <text class="{{index<word.star?'star-active':'star-empty'}}">★</text> ×3   (ops[37]=W:97 [1,3] 固定 3 次；class=ops=W:99 index<word.star 三元；文本复用 z[40]='★'；循环 _2z(z,78,...) W:281)
          </view>
        </view>

  <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                 (W:295，_mz ['backgroundColor',82,'text',1] → ops[82]=W:101 '#f7f7f7'、ops[83]=W:102 '没有更多了')
  <view class="bottom-space"/>                                             (W:297-298，ops=W:103)
</view>
```

依赖数据字段（W ops 全量核对）：`grades, currentGradeId, units, currentUnitId, currentUnit(unitNo,title,words,sentences), unitStar, unitStudyExist, wordColumns, word(word,id,word,audio,gif,img,extend,book,star), gifClick`。

### 状态分支
- 年级高亮：`currentGradeId===item.id` → `.grade-item-active`（ops[8]=W:27）。
- 单元卡高亮：`currentUnitId===item.id` → `.unit-card-active`（ops[18]=W:37）。
- 「读一读」按钮仅当 `unitStudyExist` 渲染（W:210 条件块，值由 currentUnit.speak 决定，见第 3 节）；「测一测」始终渲染。
- 「N 个核心句型」仅当 `currentUnit.sentences` 存在（W:181-184）。
- 星级：summary 区固定 5 星按 `index<unitStar` 点亮；单词卡固定 3 星按 `index<word.star` 点亮。
- 单词卡图片：`word.gif` 存在且 `gifClick==word.id` 时显示 gif，否则显示 img（ops=W:94）。**【待复核】gifClick 触发链断裂**：A:100 中 `gifClick` 仅出现 2 次（grep 计数=2），且全部是 `handleAudioEnd` 内清空 `setData({gifClick:""})`，**本页 JS 无任何将 gifClick 置为 word.id 的代码**（playWordAudio 内为空 `setData({})`，见第 3 节）——即 gif 动效分支在本页疑似不可达，可能为调试遗留或依赖旧版本行为，复现时按 img 分支处理即可，勿自行补造触发逻辑。
- 依赖自定义组件：tui-nomore（W:295）。

## 2. 样式规格

来源：`wxss_out/pages__school__school.wxss`（生成命令 `python tools/extract_wxss.py unpacked/chunk_39.webview.js wxss_out`，输出 extracted 1 wxss；实测 9607 字节/100 行；来源 W:327 setCssToHead path:"./pages/school/school.wxss"）。数值直接当 px，不除 2。首行 `body{background:#fffdf8;color:#2e2e2e}`，`.page{box-sizing:border-box;padding:14px}`。

| 类名 | 关键样式 | 用途 | X 行号 |
|---|---|---|---|
| .grade-scroll | white-space:nowrap; width:100% | 年级横向滚动 | X:3 |
| .grade-list | flex; gap:10px | 年级列表 | X:4 |
| .grade-item | background:#fff; border:1px solid #eee; border-radius:20px; color:#666; flex-shrink:0; font-size:14px; padding:9px 16px; transition:all .2s | 年级胶囊 | X:5 |
| .grade-item-active | background:#fff3c8; border-color:#ffcf4a; color:#333; font-weight:700 | 年级选中态 | X:6 |
| .unit-scroll | white-space:nowrap; width:100% | 单元横向滚动 | X:11 |
| .unit-list | flex; gap:8px | 单元列表 | X:12-13 |
| .unit-card | background:#f7f7f7; border-radius:10px; flex-direction:column; flex-shrink:0; max-width:180px; min-width:120px; padding:9px | 单元卡 | X:14 |
| .unit-card-active | background:#fff8da; border-color:#ffc83d | 单元选中态 | X:15 |
| .unit-no | color:#999; font-size:15px; margin-bottom:5px | Unit 序号 | X:16 |
| .unit-name | color:#333; font-size:16px; height:27px; line-height:17px; 2 行截断(-webkit-line-clamp:2) | 单元名 | X:17 |
| .unit-summary | background:#fff; border:1px solid #f0eee9; border-radius:14px; box-shadow:0 3px 8px 1px rgba(0,0,0,.15); margin:20px 0; padding:14px; flex 两端对齐 | 单元摘要卡 | X:18 |
| .summary-left | flex:1; min-width:0 | 左侧文案列 | X:19 |
| .summary-title | font-size:17px; font-weight:700 | Unit 标题 | X:20 |
| .summary-dot | color:#bbb; margin:0 4px | 分隔点 | X:21 |
| .summary-desc | color:#999; font-size:12px; margin-top:8px | 描述行 | X:22 |
| .quiz-btn | background:#fff8da; border:1px solid #ffc83d; border-radius:16px; color:#555; font-size:12px; margin-top:8px; padding:7.5px 12px | 读一读/测一测按钮 | X:24 |
| .stars | flex 行; align-items:center; font-size:13px; gap:1px; flex-shrink:0 | 摘要区星容器 | X:30-31 |
| .word-waterfall | flex; align-items:flex-start; gap:10px; width:100% | 瀑布流容器 | X:80 |
| .word-column | flex:1; min-width:0 | 瀑布流列 | X:81 |
| .word-card | background:#fff; border:1px solid #f0eee9; border-radius:14px; margin-bottom:10px; padding:10px; overflow:hidden（X:26 另有旧定义 border #efefef/padding:14px，被 X:86 覆盖） | 单词卡 | X:26/86-87 |
| .word-card-top | flex 行两端对齐; height:36px; padding-bottom:10px | 卡顶行 | X:88 |
| .word-en | color:#252525; flex:1; font-size:21px; font-weight:700; line-height:36px; 单行省略 | 单词大字 | X:89 |
| .audio-btn | 30px×30px 圆形; background:#fff2bd; margin-left:8px; :active 时 scale(.94) | 播放按钮 | X:90/92 |
| .audio-icon | color:#4d4430; font-size:12px; margin-left:1.5px | ▶ 图标 | X:91 |
| .word-image-wrap | aspect-ratio:2/3; background:#f5f5f5; border-radius:11px; overflow:hidden; width:100% | 图片容器 | X:83/93 |
| .word-image | display:block; height:100%; width:100% | 单词图 | X:94 |
| .word-card-bottom | flex 行两端对齐; gap:5px; margin-top:9px | 卡底行 | X:95 |
| .word-meta | color:#9a9a9a; flex:1; font-size:11px; 单行省略 | 扩展/绘本文案 | X:96 |
| .word-stars | flex 行; font-size:9px; gap:0.5px; flex-shrink:0 | 词卡星容器 | X:97/100 |
| .star-active | color:#ffbd26 | 亮星 | X:98 |
| .star-empty | color:#ddd | 灭星 | X:99 |
| .bottom-space | （wxss 内无此类的字号/留白定义，仅占位 view） | 底部留白 | — |
| .section-header | flex 两端对齐; margin-bottom:20px | 头部结构 | X:7 |
| .padding-left | （无独立定义，节点树引用但样式表无此选择器，按无样式处理） | 按钮组容器 | — |

依据包勘误：依据包称 chunk_39.webview.js「9072 字节」，实测 `wc -c` 为 **21758 字节**（327 行数一致）；行号引用不受影响，记录存档。

wxss 中大量节点树未引用的类（X:7-9/23/25/27-33/34-79 区域的 word-header/section-title/section-desc/current-grade/summary-progress/word-grid/word-card-active/word-top/word-cn/word-footer/footer-dot/word-bottom/mini-stars 及 tui-*、cu-*、list-view 组件库残留，见 W:327 同一 setCssToHead）——**本页复现只实现第 1 节节点树实际引用的类**，上表已逐一标注 X 行号，其余忽略。

依赖的全局类：无（本页节点树未引用 ColorUI/animation 类；tui-nomore 组件自带样式，来自全局组件库 page-frame.html，本次未展开）。

## 3. 事件与逻辑

来源：`chunk_39.appservice.js`（A:99 路由；A:100 单行 4966 字符为 Page({...}) 全体，本次逐函数 grep 抽取全文核实）。

### 页面数据初始值（A:100 Page data，逐字核对）
`columnCount:2, wordColumns:[], grades:[], currentGradeId:1, currentGradeName:"一年级上", units:[], currentUnitId:"unit_1_1", unitStar:0, unitStudyExist:!1, currentUnit:{unitNo:1,title:"",wordCount:0,sentenceCount:0}, currentWords:[]`
（注意初始 currentUnit 含 wordCount/sentenceCount 字段，但节点树从不引用这两个字段——节点树只读 unitNo/title/words/sentences。）

### 生命周期
- **onLoad**（A:100）：`wx.getSystemInfoSync().windowWidth` → 列数 `t>=900?4 : t>=600?3 : 2` → `setData({columnCount})` → `initStorage()` → `initGrades()` → `bindAudio()`。
- **onShow**（A:100）：`globalData.unitQuizUpdate===true` 时清标记（置 false）并调 `getUserSchoolData()`（测验页回写后的刷新钩子）。
- **onShareAppMessage**（A:100）：title=`currentGradeName+"课内单词学习"`，path=`/pages/school/school`，**imageUrl 为空串""**（依据包未提及，本次实读补记）。
- **onShareTimeline**（A:100）：title=`"RAZ课内单词同步"+currentGradeName`，query:""，imageUrl=`https://qianyufang.top/public/yingyu/fenjitu.jpg`。

### 事件表

| 事件 | 处理函数 | 行为概述 | 云数据库/云函数 | 写回 |
|---|---|---|---|---|
| 年级胶囊 tap | changeGrade | `Number(dataset.id)`；与 currentGradeId 不同才动作：setData currentGradeId=grades[n-1].id、currentGradeName=grades[n-1].name（⚠ 按 **id-1 下标**取 grades，见遗留问题），loadGradeUnits()，写 storage school_grade_id | — | currentGradeId, currentGradeName；storage `school_grade_id` |
| 单元卡 tap | changeUnit | units.find(id===n) 命中后：setData currentUnitId/currentUnit/currentWords=unit.words/unitStar:0 → 按 `currentUnit.speak` 置 unitStudyExist → splitWords() → getUserSchoolData() → 写 storage school_unit_id → updateWords() | updateWords 内可能触发 | currentUnitId, currentUnit, currentWords, unitStar:0, unitStudyExist；storage `school_unit_id` |
| 单词卡 tap | clickWord | navigateTo `../unit/unit?word_id={dataset.id}&unit_id={currentUnitId}` | — | — |
| 播放按钮 catchtap | playWordAudio | dataset.audio 非空 → `setData({})`（**空 setData，原文如此**）→ innerAudioContext.src=audio → play()；否则 toast「暂无音频」(icon:none) | — | — |
| 测一测 tap | startUnitQuiz | navigateTo `../unitQuiz/unitQuiz?unit_id={currentUnitId}` | — | — |
| 读一读 tap | startUnitStudy | navigateTo `../unitStudy/unitStudy?unit_id={currentUnitId}` | — | — |
| 音频播放结束 | handleAudioEnd（innerAudioContext.onEnded 回调） | gifClick 非空则清空 | — | gifClick:"" |
| 音频播放出错 | （onError 内联回调） | toast「播放音频出错」(icon:none) | — | — |
| 分享给朋友 | onShareAppMessage | 见生命周期 | — | — |
| 分享朋友圈 | onShareTimeline | 见生命周期 | — | — |

### 内部方法（非事件直连）

| 方法 | 行为 | 证据 |
|---|---|---|
| initStorage | 读 storage `school_grade_id` → setData currentGradeId；读 storage `school_unit_id` → setData currentUnitId（仅恢复数据，不触发加载） | A:100 |
| initGrades | `collection("init").doc("grade_id").get()` → success 里 `setData({grades:n.data.list})`（**字段为 data.list，非 data 本体**）→ loadGradeUnits() | A:100 |
| loadGradeUnits | `collection("units").where({grade_id:currentGradeId}).get()` → setData units → **无条件** setData currentUnitId=currentUnit=currentWords=units[0]（即首次加载时 initStorage 恢复的 school_unit_id 会被 units[0] 覆盖，原文行为如此）→ 按 currentUnit.speak 置 unitStudyExist → splitWords() → getUserSchoolData() → updateWords() | A:100 |
| splitWords | 瀑布流分列：`Array.from({length:columnCount||2})`，按 `下标 % columnCount` 轮转分桶（**非按高度/顺序填充**），setData wordColumns | A:100 |
| getUserSchoolData | `collection("user_school").where({baby_id, unit_id:currentUnitId}).get()` → 有数据：以 data[0].words 建 Map(id→记录)，currentWords 逐词 `map.get(id) || 浅拷贝原词`，setData unitStar=data[0].unitStar + 覆盖 currentWords → splitWords()；无数据：setData unitStar:0 | A:100 |
| updateWords | **仅当 currentUnitId==="unit_6_60"**：逐词 `collection("words").where({name:word}).get()`，命中则 setData currentWords[n].id=data[0]._id、.audio=data[0].audio_en、.img=data[0].img、.zh=data[0].zh；**2 秒后（setTimeout 2e3）无条件**调云函数 updateUserSchool 回写 currentWords。⚠ 疑似调试遗留代码（硬编码单单元 + tag:"test" + console.log("333",...)），复现时建议整段跳过并在代码注释标注 | A:100 |
| bindAudio | `wx.createInnerAudioContext()`，onPlay/onStop 仅 console.log，onEnded→handleAudioEnd，onError→toast「播放音频出错」 | A:100 |

### 云函数调用清单（wx.cloud.callFunction，A:100 全行仅 1 处）
1. `updateUserSchool`，tag=`"test"`，data={baby_id: globalData.baby_id, unit_id: currentUnitId, words: currentWords}（仅 updateWords 内、且仅 unit_6_60、延迟 2s 触发）。

### 云数据库直连（`var a=wx.cloud.database({})`，A:100 顶部）
1. `init`：`a.collection("init").doc("grade_id").get()` → grades 列表（initGrades）。
2. `units`：`a.collection("units").where({grade_id}).get()` → 当前年级单元（loadGradeUnits）。
3. `words`：`a.collection("words").where({name}).get()` → 逐词补 id/img/audio_en/zh（updateWords，仅 unit_6_60 触发）。
4. `user_school`：`a.collection("user_school").where({baby_id, unit_id}).get()` → unitStar 与已学词覆盖（getUserSchoolData）。

### 计算规则
- 列数：windowWidth ≥900→4 列，≥600→3 列，否则 2 列（onLoad，A:100）。
- 瀑布流分桶：词序 i 落入第 `i % columnCount` 列（splitWords，A:100）。
- unitStudyExist = !!currentUnit.speak（changeUnit / loadGradeUnits 两处同口径，A:100）。
- 星级点亮：summary 区 `index<unitStar`（0~5），词卡 `index<word.star`（0~3），纯渲染判断无计算（ops W:58/W:99）。
- 本页**无判分/落库计算**；星级与已学词全部来自 user_school 集合直读（getUserSchoolData），写回发生在 unitQuiz/unitStudy/unit 页（本页只经 onShow 的 unitQuizUpdate 标记感知刷新）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 单词图/单词音频 | 全部来自云数据库：img 来自 `units[].words[].img` 或 `words` 集合 data[0].img；audio 来自 `words` 集合 data[0].audio_en（units 内置 words 无 audio 字段时按钮点按 toast「暂无音频」）。URL 命名规律未知，不猜路径 | A:100 updateWords/playWordAudio；W:249-252 src 绑定 | ⚠️ 待采集（captures/ 样本未核对，留给数据结构蒸馏工） |
| 单词 gif | word.gif 字段，仅 gifClick 命中时显示（本页触发链疑似断裂，见第 1 节【待复核】） | W:94 三元；A:100 gifClick 仅 2 处清空 | ⚠️ 待复核 |
| 分享朋友圈封面 | `https://qianyufang.top/public/yingyu/fenjitu.jpg` | A:100 onShareTimeline，代码内 1 处字面量 | ⚠️ 待真机验证（本次纯静态提取，未做网络验证） |
| 分享给朋友封面 | imageUrl 为空串""（微信取默认截图） | A:100 onShareAppMessage | 已验证（代码字面量） |

## 5. 弹窗 / 分支状态

- 本页无自定义弹层组件。仅有 toast 三种：「暂无音频」（playWordAudio 无音频时）、「播放音频出错」（innerAudioContext.onError）——均为 icon:none 轻提示（A:100）。
- 「读一读」按钮的存在性分支：unitStudyExist（=currentUnit.speak 真值）控制，无动画（W:210）。
- onShow 刷新分支：globalData.unitQuizUpdate 标记消费后即清，属跨页通信约定（unitQuiz 测验回写后触发，A:100）。

## 6. 遗留问题清单（本次蒸馏标记）

1. 【待复核】gifClick 无置值代码：A:100 全行 `gifClick` 仅 2 次命中（handleAudioEnd 清空），无任何 `setData({gifClick:<word.id>})` —— gif 动效分支疑似不可达（见第 1 节状态分支）。
2. 【疑似调试遗留】updateWords 硬编码仅 unit_6_60 生效 + setTimeout 2s 后无条件 updateUserSchool(tag:"test") + console.log("333",...)（A:100）。复现建议跳过。
3. 【原文行为记录】changeGrade 以 `grades[n-1]`（id-1 下标）取年级，隐含「grades 按 id 1..N 连续排列且 id=下标+1」的约定，未做防御；复现照抄即可但勿改动语义。
4. 【原文行为记录】loadGradeUnits 无条件取 units[0]，initStorage 恢复的 school_unit_id 在首次加载会被覆盖（A:100）。
5. 【原文行为记录】playWordAudio 内含空 `setData({})`（A:100），无实际作用，原样保留。
6. 【依据包勘误】依据包称 webview 9072 字节，实测 21758 字节（`wc -c`）；依据包称 appservice 100 行页面 JS 在 L99-101，实测 L99 路由 / L100 逻辑体（4966 字符）/ L101 注册尾，行号口径已统一。
7. 【未验证】音频 URL 与封面/图片 CDN 可达性未实测（纯静态提取）；captures/ 中 init/units/words/user_school 集合样本未核对（超出本 ask 范围）。
8. A:1-98 冗余 $gwx_XC_33 副本已识别并排除，对账时只用 webview 侧（对账员注意）。

## 7. 对账记录（对账员填写）

对账日期：2026-10-01。对账方式：仅凭解包原文（unpacked/chunk_39.webview.js / chunk_39.appservice.js / wxss_out/pages__school__school.wxss / unpacked/app-config.json）独立重推，不参照蒸馏过程。核实命令与输出全部当场执行。

- [x] 节点树与原文一致
- [x] 类名抽查 30 处全中（要求≥10）
- [x] 文案逐字一致（22/22 字面量命中）
- [x] 事件与云函数调用清单齐全
- diff 摘要：

**通过，无阻断性 diff。** 仅记录以下轻微偏差（均不影响复现）：

1. 【行号漂移 ±1~2】spec 第 1 节部分 W 行号与原文有 1~2 行偏差，内容与 ops 索引均正确：单元卡 `_mz` 实为 W:140（spec 写 W:142）；summary-dot 的 `_n('text')` 实为 W:167-169（spec 写 W:168-169）；词卡 `_mz` 实为 W:233（spec 写 W:236）；摘要区星级循环 `_2z(z,37,...)` 实为 W:202（spec 写 W:201）；audio-icon 类 ops[66] 实为 W:85、文本 ops[67] 实为 W:86（spec 写 W:87/W:89）。
2. 【ops 引用笔误】第 1 节「word-image src 三元 ops=W:94」应为 **ops[71]=W:90**（W:90 实测含 `gifClick` 三元，`grep -n gifClick` 唯一命中 W:90）；W:94 实为 word.book 条件（ops[75]），spec 第 74 行的引用是对的，仅第 70 行写串。
3. 【节点树重推全量通过】对账员独立解析 `gz$gwx_XC_33_1`（W:12-107）：Z() 调用共 85 条（ops[0]..ops[84]），与 spec 第 1 节引用的 ops 索引逐一吻合（bindtap 7/17/43/46/56、catchtap 62、文本 ops[45]/[48]/[82]/[83] 等）；节点构建 W:111-300 共 27 处结构性断言（根 hCQC、各容器嵌套、`_2z` 六个循环及其 key 'item'/'index'/'id'、wx:if 两条 W:181/W:210、tui-nomore W:295、注册 W:325）全部命中。`grep -l "'./pages/school/school.wxml'" unpacked/chunk_*.webview.js` → 仅 chunk_39，归属唯一。
4. 【类名抽查】30 处类名字面量（page/section-header/grade-scroll/grade-list/grade-item/unit-scroll/unit-list/unit-card/unit-no/unit-name/unit-summary/summary-left/summary-title/summary-dot/summary-desc/stars/padding-left/quiz-btn/word-waterfall/word-column/word-card/word-card-top/word-en/audio-btn/audio-icon/word-image-wrap/word-image/word-card-bottom/word-meta/word-stars）在 W ops 源行全部命中（条件类 grade-item-active/unit-card-active/star-active/star-empty 另在 ops[8]/[18]/[39]/[80] 三元表达式中确认）。
5. 【wxss 核对】spec 第 2 节引用的 39 个 X 行号全部命中（含 .word-card 双定义 X:26/X:86、.word-image-wrap 双定义 X:83/X:93）；数值抽查与 setCssToHead 原始 rpx（÷2 口径）一致（如 grade-item padding [0,18],[0,32]→9px 16px、word-en font-size [0,42]→21px）；`.bottom-space`/`.padding-left` 确认无选择器定义（grep 仅命中 tui-* 内的 padding-left 属性），spec 处理正确。
6. 【事件与云函数】webview 侧 tap 绑定共 6 处（bindtap ops[7]/[17]/[43]/[46]/[56]、catchtap ops[62]），A:100 中对应 6 个处理函数全部存在；Page 18 个方法（onLoad/onShow/8 事件/9 内部方法）grep 全命中。云函数 `wx.cloud.callFunction` 全行仅 1 处 = updateUserSchool（tag:"test"）✓；云数据库直连 4 集合 init/units/words/user_school ✓；storage 键 school_grade_id / school_unit_id 读写各 1 处 ✓；navigateTo 3 条 URL 与 spec 一致 ✓；toast 恰 2 种（暂无音频/播放音频出错，均 icon:"none"）✓。gifClick 在 A:100 确仅 2 次命中（1 读 1 清），spec 遗留问题 1 的「触发链断裂」判断成立。
7. 【导航栏】app-config.json `pages/school/school.html.window` = `{navigationBarTitleText:"课内同步", navigationBarBackgroundColor:"#FFFDF8", navigationBarTextStyle:"black", backgroundColor:"#FFFDF8"}`，系统栏确认，spec frontmatter 正确（spec 可补充导航栏底色 #FFFDF8/文字 black 两项，非 diff）。
8. 【byte 口径】实测 `wc -c`：webview 21758 字节、appservice 9072 字节、wxss 9607 字节；spec 头注「A:100 单行 4966 字符」核为准确。A:1-98 冗余 $gwx_XC_33 副本确认存在（A:1/A:14/A:15/A:85/A:98 命中），对账只用 webview 侧，spec 处理正确。
