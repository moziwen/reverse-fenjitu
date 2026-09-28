---
页名: word
显示名: 单词训练（测验/复习/收藏/拼读/闪卡/统计 六合一页）
状态: 对账通过（待验收）
chunk: chunk_47.webview.js / chunk_47.appservice.js
导航栏: 系统栏（标题「单词」，开启下拉刷新）
---

# 页面还原规格：单词训练（pages/word/word）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_47.webview.js，A=unpacked/chunk_47.appservice.js，X=unpacked/wxss_out/pages__word__word.wxss，C=unpacked/app-config.json。
> A 页面逻辑全部在 A:470 单行压缩代码内（define("pages/word/word.js") 在 A:469，Page 主体 A:470 共 45939 字符，`},{isPage:true…}` 收尾于 A:471），函数级行号统一记 A:470。
> 行号说明：W 的 ops 构建区为 W:15-576（`Z(` 调用逐行实测共 557 个，与依据包一致）；节点组装 `_mz` 段为 W:583-1586（W:577-582 是 ops_set/ops_init/wxml 引用/m0 头）。本文件行号均为 `grep -n` / python 逐行实测，以本文件为准。
> 路由：`__wxRoute = "pages/word/word"` 在 **A:469**（W 内 `grep -c '__wxRoute'` = 0，依据包所记 webview L469 有误）；wxml 引用 `var x=['./pages/word/word.wxml']` 在 W:580，`__wxAppCode__['pages/word/word.wxml']` 注册在 W:1587。

## 1. 页面骨架（节点树）

来源：`chunk_47.webview.js` 的 `$gwx_XC_42`（W:1 定义，W:14-17 ops 缓存头，W:582 主函数取 ops，W:1569 `g="$gwx_XC_42"`）。
定位命令与输出：`grep -l "'./pages/word/word\.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_47.webview.js。

### 1.0 导航栏（C 证据）

`app-config.json` page["pages/word/word.html"].window = `{"navigationBarTitleText":"单词","backgroundColorTop":"#fff","backgroundColorBottom":"#fff","onReachBottomDistance":0,"enablePullDownRefresh":true}`（python json 实读）；无 `navigationStyle:custom`；全局 window=`{"backgroundColor":"#f1f1f1",…,"navigationBarTextStyle":"black"}`。
→ **系统导航栏，标题「单词」，白底黑字，开启下拉刷新**（对应 A:470 onPullDownRefresh）。页内顶部选项卡是自绘 scroll-view，非导航栏。

### 1.1 顶部选项卡（页内自绘，共 6 个）

```
<scroll-view class="nav text-center">                              (W:19)
  <view class="cu-item {{currentTab==N?'text-blue cur':''}}" bindtap="tabSelect" data-id="{{N}}">
```

6 个 tab 实测（`currentTab` 值 → 文案 → 行号）：0 测验(W:21-23) / 5 复习(W:25-27) / 3 收藏(W:29-31) / 1 拼读(W:33-35) / 2 闪卡(W:37-39) / 4 统计(W:41-43)。**视觉顺序与 data-id 顺序不一致**（0,5,3,1,2,4）。选中类 `text-blue cur`（W:21/25/29/33/37/41 三元表达式）。

### 1.2 Tab0 测验（currentTab==0，W:44 条件）

```
<!-- 空态 isEmpty (W:45) -->
<text>当前暂无可测验的单词</text>                                   (W:48)
<text>首次点击学习的单词，会被自动加入到测验列表里</text>               (W:50)
<text>采用艾宾浩斯模式，按照1 2 4 7 15天的规律来重复</text>             (W:52)

<!-- 非空：引导轮播 wordImgs2 (W:54) -->
<view class="tui-item__row tui-color__white">                     (W:55-58; _mz builder W:638-640, ops36)
  <image mode="widthFix" class="padding-xss" src="{{item}}"/>     (image 类名 padding-xss，ops37)
</view>

<!-- 进度条 -->
<view class="cu-progress round sm" style="background-color:#ff9b6a;width:{{progress}};">  (W:60-61)

<!-- 测验列表 isTextMode==false && isPad==false (W:62-63) -->
<view class="cu-list grid col-2" wx:for="{{quizList}}" (W:64-65)>
  <image src="{{item.img}}" bind:longpress="delete" bindtap="clickWordTest" data-index="{{index}}"
         class="{{index==clickIndex?animation:''}}" style="width:100%;height:{{heightImg}}rpx;"/>  (W:66-74)

<!-- isPad==true 分支：tui-grid / tui-grid-item（W:78-85，_mz W:684/688），lazyLoad、mode=aspectFit (W:83-84) -->

<!-- 文本模式 isTextMode==true 的 else 支（模板无 isTextShow 标志，W/A grep 均 0；ops43 为 isTextMode==false 判支）：item.word (W:105-108)；isTipShow 提示 [{{wordtip_yinbiao}}] {{wordtip_zh}} (W:109-115) -->

<!-- 底部操作区 -->
<view class="quiz-volume">… deleteQuizWord(delete.png W:87-89) / handleClickAudio(tui-icon news-fill 64rpx #ff9b6a W:90-97)
    / showTextMode(switch.png W:98-100)                             (W:86-101)
<view class="tui-button-bottom" style="position:{{isPad?'relative':'fixed'}}"> (W:116-117)
    voice.png / clickQuizPromot(tip.png)                            (W:123-126)

<!-- 结果区 -->
<image class="icon-yanhua" src=".../icon/yanhua.png" wx:if="{{passRate>=90}}"/>  (W:129-131)
<text class="{{passRate>=90?'text-red':'text-macron'}}">本次测验结果：通过率 {{passRate}}%</text>  (W:132-133)
<image class="confetti-gif" src="https://qianyufang.top/public/yingyu/images/gif/Trophy.gif"/>  (W:138-140)

<!-- 星级折叠 dataList（3 组 current/star/num/list，W:141-158）-->
<tui-collapse bindclick="showStarlist" (W:143; _mz W:808)>
  标题：tui-rate quantity={{item.star}} (W:148-151; _mz W:813) + 「{{item.num}} 个」(W:153)
  内容：tui-list-cell bindtap="showWordsList" wx:for={{item.list}} → {{citem}} (W:159-163; _mz W:829)

<button class="again bg-macron" style="width:50%;" bindtap="again">再测一次</button>  (W:165-168)
```

### 1.3 Tab5 复习（currentTab==5，W:169 条件；空态 wordFuxi_empty W:170）

```
<text>当前暂无可复习的单词</text>                                   (W:173)
<text>此处单词列表来自于已学习的课程内容</text>                       (W:175)
<text>采用艾宾浩斯模式，点击检测可标记是否掌握</text>                  (W:177)

<swiper class="tui-banner-box-fuxi" bindchange="changeWordFuxi" circular duration="150"
        current="{{wordFuxi_index}}" nextMargin/previousMargin="68rpx" style="height:80vh"
        wx:for={{wordFuxiList}}>                                   (W:186-195; _mz W:906)
  <image class="tui-slide-image" mode="heightFix" bindtap="clickWordFuxiTip"/>   (W:197-202)
  角标：voice_on.png 角标纯展示，无任何 tap 绑定（view tui-new-label-voice + image voice-icon，W:203-206；_mz builder W:917-919 无事件属性）；
        download_square.png 角标 view catch:tap="downloadWordPoster"（view tui-new-label-download 内含 download-icon/download_square.png，W:207-209；catch:tap builder W:920，ops187）
  词条名 isWordFuxiTest==false → tui-pro-titbox-study-name text-bold {{item.word}} (W:211-215)
  测试态 isWordFuxiTest==true && wordFuxi_index==index →
    <view bindtap="clickWordFuxiTest" class="tui-word-button">{{wordFuxiTest}}</view>  (W:216-222)
  点赞动效 showLike && like_id==index → like.gif                    (W:224-228)
  底部按钮组：collectFuxiWord(add.png W:231-233) / clickFuxiAuto(play|pause.png 随 isWordFuxiAuto 切换 W:234-236)
  / showWordFuxiTest(check.png W:237-239) / clickWordExtend(more.png W:240-242)  (_mz W:1138 tui-icon)
```

### 1.4 Tab3 收藏（currentTab==3，W:243 条件；空态 myWords_empty W:244）

```
<text>当前暂无收藏的单词</text>                                     (W:247)
<text>在课程中点击文中单词，在弹出卡片中点击"+"进行收藏</text>          (W:249)
<text>收藏的单词会在此进行列表展示，点击可查看单词详情</text>           (W:251)

<!-- 列表模式 -->
<view class="word-mode-title">标题三元 word_collect_ibhs：
  「艾宾浩斯模式，符合展示的收藏单词{{myWords.length}}个」(W:265) / 「列表模式，…」(W:266)
  <switch bindchange="changeCollectSetting" color="blue"/>          (W:267-269; _mz W:1052)
列表项：catch:tap="showFavorDetail" data-index → tui-item-box/tui-msg-box/tui-msg-pic(aspectFill)
  item.name + [{{item.yinbiao}}] {{item.zh}} + tui-icon catch:tap="clickListModeAudio" size=58 (W:273-291)

<!-- 艾宾浩斯空态 myWords.length==0 && word_collect_ibhs (W:292) -->
<text>艾宾浩斯模式下按单词收藏时间进行展示</text>                     (W:295)
<text>一个单词收藏的第1、2、4、7、15、30天</text>                    (W:297)
<tui-nomore text="{{myWords.length>100?'展示上限为100个':'没有更多了'}}" backgroundColor="#f7f7f7"/>  (W:298-299; _mz W:1110)
```

### 1.5 单词详情弹层（isTipShow / wordDetail，W:300-355 一带）

```
wordDetail：name / [{{yinbiao}}] / {{zh}} + clickWordAudio          (W:300-309)
<swiper bindchange="changeWordImage" style="height:60vh" current="{{word_index}}"
        wx:for={{wordExtend}}>                                     (W:324; _mz W:1145)
  <image bindtap="playWordAudio" mode=heightFix> + 角标 download.png
按钮组：showListModeFavor (W:340) / deleteCollectWord (W:343) / clickListenWord (W:346) / clickNextWord (W:349)
```

### 1.6 Tab1 拼读（currentTab==1，W:352 条件；空态 wordPindu_empty W:353）

```
<text>当前暂无可拼读的单词</text>                                   (W:356)
<view bindtap="playWordPinduAudio"> wordPindu_detail 的 [{{yinbiao}}]/{{zh}} + tui-icon size=68 (W:357-366)

<view class="pindu_container">                                     (W:367)
  <view class="input-area {{isCompleted?'completed':''}}" bindtap="clickWordSpell">  (W:368-369)
    <text class="letter-box {{highlightIndex===index?'highlight':''}}"
          style="width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;…"
          wx:for={{inputLetters}}>                                  (W:371-374)
    <text class="letter-box empty" … wx:for={{emptySlots}}>-</text> (W:375-380)
  <view class="letters-area margin-top" wx:if="{{isCompleted==false}}"> (W:381-382)
    <button class="letter-btn …" style="width:{{buttonSize}}rpx;" bindtap="handleLetterTap"
            data-index="{{index}}" disabled="{{item.disabled}}"
            wx:for={{shuffledLetters}}>{{item.letter}}</button>     (W:383-390)
  <!-- 完成图 isCompleted==true：tui-pindu-image (W:391-393)，
       src 三元 {{wordPindu_detail.gif ? wordPindu_detail.gif : wordPindu_detail.img}}（gif 优先）-->  (W:395)
按钮组：deletePinduWord (W:398) / collectPinduWord (W:401) / switchPinduHardLevel (W:404) / clickNextWordPindu (W:407)
```

### 1.7 Tab2 闪卡（currentTab==2，W:410 条件；空态 wordShanka_empty W:411）

```
<text>当前暂无可学习的单词</text>                                   (W:414)
<text>在课程中点击文中单词，即代表已学习</text>                       (W:416)
<text>已学习的单词，会按时间选取前100个进行展示</text>                 (W:418)

<swiper class="tui-banner-box margin-top" bindchange="changeWordShanka"
        current="{{wordShanka_index}}" wx:for={{wordShankaList}}>   (W:426-435; _mz W:1333)
  <image bindtap="clickWordName" class="tui-slide-image"> → {{wordShanka_name}}   (W:438-449，clickWordName 绑在 image，_mz builder W:1341 `bindtap',420`)
  wordShanka_prompt.length!=0 → <view bindtap="clickWordPrompt"
        class="tui-pro-titbox-study-prompt padding-sm">{{wordShanka_prompt}}</view>  (W:450-456)
按钮组：deleteShankaWord (W:459) / clickWordCollect (W:462) / download_round.png (W:467) / clickNextStudy (W:468)
```

### 1.8 Tab4 统计（currentTab==4，W:471 条件）

```
<tui-charts-column id="tui_column" bindclick="getWordsPie" columnBarWidth="20" columnCap="round"
    dataset={{options.dataset}} max={{options.Ymax}} splitNumber={{options.splitNumber}}
    xAxis={{options.xAxis}} xAxisVal={{options.xAxisVal}}>           (W:472-483; _mz W:1401)
<tui-charts-pie id="tui_pie_1" wx:if="{{pieData.length!=0}}"/>       (W:484-487; _mz W:1412)
图例 5 条（W:493-501，逐字）：
  1、系统根据艾宾浩斯记忆曲线来展示单词测验列表
  2、如果一个新单词测验通过后，会在1天后出现；再次通过后，会在2天后出现；这个时间规律是1 2 4 7 15 30天
  3、通过1次为一星，通过2次为二星。。。最高为六星
  4、点击柱状图，可以查看该星级下面的单词级别统计
  5、长按单词，可从测验列表中移除
```

### 1.9 弹层组（W:502-575）

```
<tui-bottom-popup bindclose="hideModal" zIndex=1001 show={{modalWord}}>  (W:502-505; _mz W:1453)
  clickWordShowAudio + wordShow 的 name/[{{yinbiao}}]/{{zh}}         (W:507-516)
  <swiper bindchange="switchWord" nextMargin="60rpx" style="height:660rpx"
          current="{{word_index}}" wx:for={{wordsList}}>            (W:517-525; _mz W:1481)
  showWordImg 大图（class tui-word-image）                           (W:528-531)
  底部：collectWord（src 三元 collect_status==false ? collect_no.png : collect.png）(W:536-538)
        goCardWord                                                  (W:539)
<tui-popup duration=800 modeClass="fade" show="{{isRecording}}" styles={{styles}}>
  recording.png 动画 class="icon-recording {{animation}}"，bindclick="clickRecord" (W:541-549)
<tui-popup bindclick="closePopup" duration=800 show="{{transShow}}"> (W:550-553)
  value + record_result 文本（class text-macron value-text / result-text text-white text-xl）(W:554-561)
<!-- 海报弹层 posterUrl (W:562) -->
  <view bindtap="closePoster" class="close-btn">×</view>             (W:564-566)
  <image class="poster-img" src={{posterUrl}}/>                     (W:567-568)
  <view bindtap="savePoster" class="save-btn">保存到相册</view>        (W:570-572)
  <view class="hidden-canvas"><canvas type="2d" id="posterCanvas"/></view>  (W:573-575; _mz W:1550)
```

### 状态分支总表

| 条件 | 分支 | 证据 |
|---|---|---|
| currentTab==0/5/3/1/2/4 | 六选一渲染 | W:44/169/243/352/410/471 |
| isEmpty / wordFuxi_empty / myWords_empty / wordPindu_empty / wordShanka_empty | 各 tab 空态 | W:45/170/244/353/411 |
| isTextMode==false && isPad==false | 测验列表 cu-list col-2 | W:62-64 |
| isPad==true | 测验列表改 tui-grid（lazyLoad，aspectFit）；按钮 position:relative | W:78-85/117 |
| passRate>=90 | 烟花图 + text-red，否则 text-macron | W:129-132 |
| isWordFuxiTest | 复习页 词条名/测试按钮 切换 | W:211/216 |
| showLike && like_id==index | 复习页 like.gif 点赞动效 | W:225 |
| word_collect_ibhs | 收藏页 艾宾浩斯/列表模式 标题与 switch | W:265-267 |
| isCompleted | 拼读 输入区 completed 类 / 字母区隐藏 / 完成大图 | W:369/381/391-395 |
| highlightIndex===index | 拼字格高亮 | W:373 |
| collect_status==false | 收藏图标 collect_no.png / collect.png | W:538 |
| pieData.length!=0 | 饼图显示 | W:484 |
| isRecording / transShow / posterUrl | 录音 / 识别结果 / 海报 三弹层 | W:544/553/562 |

## 2. 样式规格

来源：`wxss_out/pages__word__word.wxss`（`wc -l` 实测 479 行）。数值直接当 px，不除 2。

| 类名 | 关键样式（实测原文） | 用途 | 行号 |
|---|---|---|---|
| .container | padding-bottom:55px | 页面底部留白 | X:1 |
| .quiz-volume | height:60px; padding-bottom:10px | 测验顶栏 | X:2 |
| .quiz-speak | 与 quiz-volume 同组：flex 居中、height:84px; margin-top:5px | 语音区 | X:3-4 |
| .volume-bg | 54×54px 圆形，background:#5677fc，opacity:.7 | 语音按钮底 | X:5 |
| .bottom-icon | 84×84px; margin:6px; z-index:999 | 底部大图标 | X:11 |
| .bottom-icon-shanka | 69×69px; margin:6px; z-index:999 | 闪卡底部图标 | X:12 |
| .navi-card | 白卡圆角 4px，阴影 rgba(9,36,66,.04)，字色 #596c8e | 卡片 | X:14 |
| .bg-macaron | background-color:#ff9b6a; color:var(--black) | 橙色底 | X:29 |
| .tui-word-title | min-height:70px | 词名区 | X:45 |
| .tui-pindu-title | 与 tui-word-title 同组：flex 行布局 | 拼读词名区 | X:46 |
| .tui-searchbox | 高 30px 圆角 15px 背景 #f7f7f7 | 搜索框 | X:17 |
| .tui-button-bottom | bottom:0px | 底部按钮区 | X:55 |
| .tui-study-bottom | height:120px | 学习底部区 | X:56 |
| .word-mode-title | color:#888; font-size:15px; font-weight:500; padding:10px; width:100% | 收藏模式标题 | X:441 |
| .popup-recording | 圆角 6%; color:#fff; flex 行布局 | 录音死 UI 弹层 | X:425 |
| .pop-view | flex 居中 | 识别结果弹层 | X:427 |
| .pindu_container | flex 纵向居中; padding:10px | 拼读容器 | X:446 |
| .input-area | flex wrap; gap:5px; 居中; margin-bottom:20px; margin-top:10px | 拼字输入区 | X:449 |
| .letter-box | border:1px solid #333; font-size:32px; flex 居中 | 拼字格 | X:457 |
| .letter-box.empty | color:#ccc | 空格占位 | X:458 |
| .letter-box.highlight | background-color:#ffeb3b; border-color:#f44336; transition .3s | 当前输入格高亮 | X:459 |
| .letters-area | flex wrap; gap:7.5px; margin-bottom:20px | 候选字母区 | X:460 |
| .letter-btn | 与 letters-area 同组 flex 居中 | 字母按钮 | X:461 |
| .poster-container | flex 居中（与 .tui-new-label-gif 同组） | 海报弹层 | X:471 |
| .hidden-canvas | position:absolute; left:-9999px; top:-9999px; 300×540px; z-index:-1 | 离屏画布 | X:475 |

依赖的全局类（page-frame.html，grep 实证）：
- `.bg-macron{background-color:var(--macron)}` 且 `--macron:#ff9b6a`（grep `--macron:` 2 处、`bg-macron` 18 处）。注意：页面 wxss 实名 `.bg-macaron`（X:29），「再测一次」按钮类名是 `bg-macron`（W:166），两者色值同为 #ff9b6a 但来源不同，按钮样式依赖全局。
- `.text-macron` / `text-red` / `text-blue` / `text-grey` / `cu-*`（ColorUI）等均来自全局 page-frame.html。
- `input-area` 的 `completed` 修饰类未见页面级专有规则（X grep 仅 `.input-area` 基类），高亮/完成态视觉主要靠 `.letter-box.highlight` 与行内 rpx style（letterBoxSize/buttonSize 由 JS 动态设置，A:470 setData）。

## 3. 事件与逻辑

来源：`chunk_47.appservice.js` A:470。共享头部（A:470 开头实测）：`n=wx.cloud.database({})`、`s=n.command`、`l=n.command.aggregate`、`r=getApp()`、`u=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（日期格式化工具，define 于 unpacked/appservice.app.js，含 formatTime/formatMonth/formatDate/formatHour；本页仅用 `u.formatHour` 2 处，在 updateWordData 内）；模块级变量 `c=0,h=-1,w=[],g=!1,p=!1,x=[],b=30` 等（b 在 onShow 重设为 `vip<0?10:30`）。

### 3.1 云函数调用清单（`grep -o 'tag:"[a-zA-Z]*"'` + python 正则实测，共 20 次调用、3 个云函数）

| 云函数 | tag | 次数 | 触发场景（A:470 原文核实） |
|---|---|---|---|
| updateUserQuiz | updateQuizPassNum | 1 | updateUserQuizPass（测验判分后，word 整对象上报） |
| updateUserQuiz | updatePindu | 1 | updatePinduData（拼读完成，word_id） |
| updateUserQuiz | updateQuizFuxi | 1 | updateUserFuxiTime（复习检测标记，word_id） |
| updateUserStudy | collectWord | 4 | 详情弹层/闪卡/拼读/复习 收藏（word+timestamp+mode:"new"，A:470 原文 4 处） |
| updateUserStudy | unCollectWord | 2 | deleteCollectWord（x 数组 splice 后上报） |
| updateUserStudy | deleteWord | 4 | 测验长按 delete / deleteQuizWord(确认弹窗「确定从测验列表中删除 X 吗」) / deleteShankaWord / deletePinduWord |
| updateUserStudy | monthDaysAdd | 1 | month_days 不含今日时补打卡（含 totalDataUpdate/dakaToday 标记） |
| updateUserData | wordAdd / wordListPush / wordNum / wordPindu / wordFuxiNew / wordFuxiUpdate | 各 1 | 单词学习数据上报（wordAdd 组装时用 u.formatHour 记时点） |

全部调用带 `baby_id:r.globalData.baby_id`（A:470 内 baby_id 共 73 处）。

### 3.2 云数据库直读（`grep -o 'collection("…")'` 实测：user_study 14、words 7、user_data 1；`.aggregate()` 9 处）

- **user_study**（主集合）：where baby_id；quiz[]（元素含 level/pass/time/fuxi/time_fuxi/pindu/pindu_ok/pindu_time/prompt/shanka_ok 等）、words_collect[]（收藏+timestamp）、month_days[]（打卡日）。getWordShankaList 带 `field({quiz:!0})`（A:470 原文）。
- **艾宾浩斯时间窗（A:470 原文逐条核实）**：getWordTestList 过滤 `pass<=0 或 missing`，`pass==N` 时要求 `now-time > N 对应毫秒`，N=1..6 依次 864e5(1天)/1728e5(2天)/3456e5(4天)/6048e5(7天)/1296e6(15天)/2592e6(30天)——**1 2 4 7 15 30 天规律与图例文案吻合**。getWordFuxiList 同构（fuxi/time_fuxi 字段）。getWordPinduList 同构（pindu_ok/pindu_time，且要求 `l.isArray("$$item.pindu")`）。
- **getCollectWordsIbhs**（A:470 原文）：时间窗 `[0,864e5,1728e5,3456e5,6048e5,1296e6,2592e6]`（0/1/2/4/7/15/30 天）各允许 ±432e5（±12 小时）容差，`unwind("$words_collect")` + `addFields diff` + `match` + `group push` → wordList，取前 min(b,len) 个（b=vip<0?10:30）。
- **words**（词库）：`where({level:"AA"})` 演示数据随机取 10 个（A:470 原文 `.sort(function(){return .5-Math.random()})` + `slice(0,10)`，字段映射 name→word、audio_en→audio、_id→id）；`doc(id).get` 取详情（zh/yinbiao/audio_zh 等）；`where({name:s.in(list)})` 星级单词反查；闪卡详情 `where(s.or({name:a,level:i},{include:s.elemMatch(s.eq(a)),level:i}))`。
- **user_data**：baby_id+date+wordList 维度（updateWordData：无今日记录走 wordAdd+updateTotalDays，有则 wordListPush；updateTotalDays 在 user_study.month_days 不含今日时发 monthDaysAdd）。
- **getWordsPie 聚合**（A:470 原文）：`match({baby_id}).project({AA: l.size(l.filter({input:"$quiz",as:"item",cond:l.and([l.eq(["$$item.level","AA"]),l.eq(["$$item.pass",i])])})), A:…, …, G:…})`，i=t.detail.sourceIndex（柱状图点击的星级）。饼图配色实测：AA#ff9b6a / A#1cbbb4 / B#0081ff / C#6739b6 / D#6E7EB3 / E#e03997 / F#fbbd08 / G#8dc63f，值为 0 的级不进 pieData。

### 3.3 事件-处理函数对照（方法名均经 python 正则 `name[:=]function` 在 A:470 实测命中；W 侧经 z 索引反查 ops 字符串对齐）

| 事件 | 处理函数（A:470 命中） | 行为概述 | 调用 |
|---|---|---|---|
| tab bindtap | tabSelect | data-id→currentTab，scrollLeft=(id-1)*60，停止音频；懒加载：5→getWordFuxiList(空时)、0→getWordTestList(!isFinish&&0==c)、1→getWordPinduList(_空时)、2→getWordShankaList(空时)、3→getCollectWords()、4→getWordsNum(!quizArrEmpty) | — |
| 词卡 tap | clickWordTest | 800ms 防抖(模块级 g 标志)；点对第 1/2/3+ 次得 star 3/2/1（A:470 原文 star 111/222/333 分支），showAnimation+playGood+addResult；点错 playWrong+showAnimation(i,0) | updateUserQuiz:updateQuizPassNum（经 updateUserQuizPass） |
| 词卡 longpress | delete（_mz W:670/690/726 z[48]='delete'） | 配合 deleteQuizWord 移除 | updateUserStudy:deleteWord |
| 再测一次 | again | 重置重测 | — |
| 折叠面板/行 | showStarlist / showWordsList | 展开星级 / 按名单反查 words（`name s.in(list)`）弹详情 | — |
| 顶部声音 | handleClickAudio（+playAudioTitle/playAudioClick） | 播放当前题音频 | — |
| 文本切换 | showTextMode / switchTextShow | 图片模式↔文本模式 | — |
| 提示 | clickQuizPromot | 显示提示 | — |
| 复习翻页 | changeWordFuxi | swiper 翻页 | — |
| 复习发音/海报 | clickWordFuxiTip / downloadWordPoster（drawCanvas/wrapText/savePoster） | 播音 / 离屏 canvas 画海报 | — |
| 复习检测 | clickWordFuxiTest / getWordFuxiTest / checkWordFuxi / updateUserFuxiTime | 两选一标记掌握 | updateUserQuiz:updateQuizFuxi |
| 复习收藏/自动播/扩展 | collectFuxiWord / clickFuxiAuto / clickWordExtend | 收藏(like.gif) / play⇄pause / 跳 wordExt（`../wordExt/wordExt?word=`） | updateUserStudy:collectWord |
| 收藏开关 | changeCollectSetting | word_collect_ibhs 切换 | — |
| 收藏项 | showFavorDetail / clickListModeAudio | 详情弹层 / 列表发音 | — |
| 详情弹层 | clickWordAudio / changeWordImage / playWordAudio / showListModeFavor / deleteCollectWord / clickListenWord / clickNextWord | 词条弹层组 | updateUserStudy:unCollectWord |
| 拼字格 | handleLetterTap（+getExpectedSegment） | 逐段填格判位；complete→updateWordPindu+updatePinduData | updateUserQuiz:updatePindu |
| 拼读难度 | switchPinduHardLevel / initPinduGame / initPinduGameHard | 普通按 pindu 字段数组；困难按 name.split("") 洗牌（均 `Math.random()-.5`） | — |
| 拼读其他 | playWordPinduAudio / clickWordSpell(已完成时 playWordSpell) / deletePinduWord / collectPinduWord / clickNextWordPindu | 拼读页组 | updateUserStudy:deleteWord/collectWord |
| 闪卡 | changeWordShanka / clickWordName / playWordShankaAudio / clickWordPrompt / clickWordCollect / clickNextStudy | 翻卡/发音/提示/收藏/下一个（index+1，超出重置并置空提示） | updateUserStudy:collectWord |
| 闪卡删除 | deleteShankaWord | 列表 splice 后空态处理 | updateUserStudy:deleteWord |
| 图表点击 | getWordsPie（+getWordsNum/setOptions/setSplitNumber） | sourceIndex(星级)→按 level 聚合出饼图 | — |
| 统计弹层 | hideModal / clickWordShowAudio / switchWord / showWordImg / collectWord / goCardWord | 弹详情/发音/轮播/大图/收藏/跳 `/pages/wordExt/wordExt?word=` | updateUserStudy:collectWord |
| 海报 | closePoster（posterUrl=""）/ savePoster（wx.saveImageToPhotosAlbum，成功 toast「保存成功，去分享吧！」） | 海报弹层组 | — |

### 3.4 生命周期与计算规则（A:470 原文逐字抽查）

- **onLoad**：`bindAudio()+initSystemUI()`；globalData.baby_id 已就绪则直接 checkUserQuizArr，否则挂 babyInfoReadyCallback。baby_id 就绪后 checkUserQuizArr：user_study.quiz 非空→getWordTestList，否则 getWordDemoList（words level:AA 随机 10 词演示模式）。
- **initSystemUI（isPad 判定，A:470 原文）**：`wx.getMenuButtonBoundingClientRect()` 算 top；`15>Math.floor(10*a.screenHeight/a.screenWidth)` → console「此设备为平板」→ `setData({isPad:!0})`；`heightImg=1.5*(i/2-24/e)*e`（i=windowWidth，e=750/i）。
- **onShow（A:470 原文）**：`b=r.globalData.vip<0?10:30`（收藏/闪卡条数上限随 vip 变化）；tab5：quizArrEmpty→checkUserQuizArr，globalData.quizRecordUpdate→getWordFuxiList 并复位标志；tab3：wordsUpdate 时按 x 缓存刷新。
- **onHide / onUnload**：innerAudioContext 停止 / destroy。
- **onPullDownRefresh（A:470 原文）**：`r.globalData.vip<0||(1==currentTab→getWordPinduList(),2==currentTab→getWordShankaList(),setTimeout stopPullDownRefresh…)`。**非会员（vip<0）直接 return，隐含会员门槛**；仅拼读/闪卡两 tab 生效。
- **通过率 countPassRate（A:470 原文逐字）**：`Math.ceil(100*this.data.dataList[0].num/c)`（= 三星数/总题数向上取整，dataList 初始 `[{star:3},{star:2},{star:1}]`）；欢呼声阈值：`c>30 → t>=80 播放；c>10 → t>=90 播放；否则 100==t 播放`。测验总数上限：`quiz.length>20 → slice(0,20), c=20`（**单轮最多 20 词**）。
- **闪卡取样（getWordShankaList+getRandomSubset，A:470 原文）**：`quiz.slice(0,Math.min(b,…))`（b=10/30）→ 过滤「prompt 存在且非空且无 shanka_ok」→ `slice(0,Math.min(20,…))` → Fisher-Yates 洗牌。**实际最多 20 个，且受 vip 上限 10/30 约束，与空态文案「选取前100个」不一致**（见 §6）。
- **拼读 initPinduGame**：源词 `wordPindu_detail.pindu`（字母数组）洗牌映射 `{letter,disabled:!1}` → shuffledLetters；initPinduGameHard 用 `name.split("")`。handleLetterTap 命中 `getExpectedSegment(currentPinduIndex)` 则填格、禁用字母、推进 currentPinduIndex。
- **onShareAppMessage / onShareTimeline（A:470 原文）**：固定标题「分享你一个英语绘本分级阅读小程序」，path=`"/pages/index/index?tuiguang_openid="+r.globalData.openid`，imageUrl=tcb `…/public/yingyu/shareImg.png`。
- **海报 drawCanvas（A:470 原文）**：`c=e-90`（画布高减 90）；水印 `fillText("英语分级兔",24,38)`（16px sans-serif #f3f3f3）+ 底部 `fillText("来英语分级兔一起掌握3000词汇吧",20,c+60)`（11px #666666）；成品经 canvasToTempFilePath → posterUrl；closePoster 置空。
  - 备忘（对账确认省略，非错误，A:470 drawCanvas 原文另有实测）：水印第二行 `fillText("分级学习 · 趣味探索",24,56)`（9px，原文 `\xb7` 为「·」）；画布含 60×60 分享码占位图（qrcode.jpg，grep 计数 1）。此两项 spec 首版未列，对账员 2026-09-28 复核认定为省略非错误，还原时按原文补画。
- **updateWordData**：按 `user_data` 是否已有今日记录分流 wordAdd（附 `u.formatHour(new Date)`）/ wordListPush，并联动 updateTotalDays（month_days 打卡）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 操作图标 | `https://qianyufang.top/public/yingyu/images/icon/<名>.png`，grep -o 逐条实测 18 种各 1 次（pause/play 各 2 次）：add/check/collect/collect_no/delete/download/download_round/download_square/more/next/pause/play/recording/switch/tip/voice/voice_on/yanhua | W `grep -o` 计数 | ⚠️ 待真机验证（只记规律，不猜可用性） |
| 动效图 | 同域 `/images/gif/`：Trophy.gif(W:140)、like.gif(W:228) | W 行号实测 | ⚠️ 待真机验证 |
| 引导轮播图 | tcb 云存储 `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/word<N>.jpg`（N=1-5；wordImgs=[word1,word2]、wordImgs1=[word3,word5]、wordImgs2=[word3,word4]；word3 被 1/2 两处引用） | A:470 data 原文 grep 计数 word1/2/4/5 各 1、word3 共 2 | ⚠️ 待真机验证 |
| 音效 | tcb `/public/yingyu/`：good.mp3 / try-again.mp3 / wrong.mp3 / huanhu.mp3（playGood/playTryAgain/playWrong/playHuanhu 四音效，A:470 方法名命中） | grep 计数各 1 | ⚠️ 待真机验证 |
| 分享图（好友） | tcb `/public/yingyu/shareImg.png`（onShareAppMessage imageUrl） | grep 计数 1 | ⚠️ 待真机验证 |
| 分享图（朋友圈） | `https://qianyufang.top/public/yingyu/fenjitu.jpg`（onShareTimeline imageUrl，A:470 原文，与好友分享不同源） | A:470 `onShareTimeline:function(){return{…imageUrl:"https://qianyufang.top/public/yingyu/fenjitu.jpg"}}` | ⚠️ 待真机验证 |
| 词库图片/音频 | 词数据 item.img / item.gif / audio_en / audio_zh 来自 words 集合字段，非本页硬编码（A:470 内 img 18 处、audio_en 14、audio_zh 4、extend 8；gif 仅在 W:395 三元里作为 wordPindu_detail.gif 属性引用） | A:470 计数 | — |

## 5. 弹窗 / 分支状态

- 星级统计弹层（tui-bottom-popup zIndex=1001，modalWord）：wordShow 词条 + wordsList 轮播（660rpx 高）+ 大图 + 收藏（collect_status 切图标）/去测验（goCardWord→wordExt）（W:502-539）。
- 测验完成态：烟花（passRate>=90）+ Trophy.gif + 星级折叠面板（3/2/1 星三组 dataList）+「再测一次」（W:129-168）。
- 拼读完成态：isCompleted → input-area 加 completed 类、候选字母区隐藏、gif 优先大图（W:369/381/391-395）。
- 海报弹层（posterUrl 非空）：海报图 + 关闭× + 「保存到相册」（W:562-575）。
- **录音跟读弹层（W:541-561）为死 UI**：webview 模板含 isRecording/clickRecord/popup-recording/value/record_result 完整三弹层（录音动画 W:544-549、识别结果 W:553-561），但 A:470 中 `clickRecord`/`closePopup`/`record_result` 命中数为 **0**（python 全文计数实测；`clickRecord`/`record_result` 在整个 chunk_47.appservice.js 也为 0），`isRecording` 仅 data 初始化 `!1` 出现 1 次无任何 setData 更新，`transShow`/`value` 同样只有初始值。实际录音跟读在 pages/unit（unpacked/chunk_43.appservice.js:188 clickRecord，本仓 unit.md 已记）。**还原 word 页时应跳过这两个弹层**；样式 .popup-recording/.pop-view（X:425/427）同为残留。

## 6. 对账记录（对账员填写）

> 对账时间 2026-09-28。方法：只读原文独立重推，不采信蒸馏过程。核对工具：`tools/audit_word_tree.py`（自写 ops 解析器，557 个 `Z(` 全量解析 + _mz 累积基准索引换算，依据 `unpacked/webview.app.js` 中 `_mz`/`_rz`/`_oz`/`grb`/`$gwrt` 运行时原文确认索引语义：base 初始 0，属性对 (prop,off) 真实索引 = base+off，base+off<0 时属性为字面 true，首个有效属性后 base=off）。产物 `tools/_word_tree_dump.jsonl` 共 304 条组装记录。chunk 归属：`unpacked/app-service.js:64` `['chunk_47',['pages/word/word',]]` 确认。

- [x] **节点树一致** —— 独立重推 557 个 ops（实测计数与 spec 声明一致）并逐段组装对照：
  - 六 tab 组装顺序与 data-id：W:584(id=0 测验)/W:588(id=5 复习)/W:592(id=3 收藏)/W:596(id=1 拼读)/W:600(id=2 闪卡)/W:604(id=4 统计)，选中类三元 `text-blue cur` ✓，与 spec §1.1「视觉顺序 0,5,3,1,2,4」一致。
  - 状态分支条件 ops 与 spec 状态分支总表逐条命中：currentTab==0/5/3/1/2/4 于 W:44/169/243/352/410/471 ✓；六空态 W:45/170/244/353/411 ✓；isTextMode/isPad/passRate>=90/word_collect_ibhs/isCompleted/highlightIndex===/collect_status==false/pieData.length!=0 全部命中 ✓。
  - 底部图标组、星级折叠（tui-collapse bindclick=showStarlist W:808、tui-list-cell bindtap=showWordsList data-word={{citem}} W:829）、复习 swiper（bindchange=changeWordFuxi circular duration=150 68rpx margin height:80vh W:906）、收藏列表（catch:tap=showFavorDetail W:1062、tui-icon catch:tap=clickListModeAudio size=58 W:1083）、拼读区（pindu_container W:1221、input-area+completed 三元 W:1222、letter-box style 三段同 letterBoxSize W:1226/W:1237、letter-btn width:buttonSize W:1254）、闪卡 swiper W:1333、统计图表（tui-charts-column tooltip/bindclick=getWordsPie columnBarWidth=20 columnCap=round W:1401、tui-charts-pie id=tui_pie_1 W:1412）、统计弹层（tui-bottom-popup bindclose=hideModal zIndex W:1453、wordsList swiper height:660rpx W:1481）、海报弹层（poster-container/closePoster/savePoster/hidden-canvas W:1535-1551）全部与 spec 骨架一致。
  - **轻微行号偏差 3 处（不改结论，行号区间写法所致）**：① spec §1.7 写「W:438-449 clickWordName」，`clickWordName` 字面在 W:439（W:438 为 z[179] 引用）；② spec §1.9 写「W:541-549 recording」，`isRecording` 字面在 W:544（W:541 为 z[223] styles 引用）；③ spec §1.9 写「W:554-561」，`pop-view` 字面在 W:555（W:554 为 z[526] 引用）。三处均落在 spec 所写区间或紧邻 1 行，属 ops 区/引用行混排，非内容错误。
- [x] **类名抽查 ≥10 处全中** —— spec §2 表 25 组类名逐条到 `unpacked/wxss_out/pages__word__word.wxss` 正则验证（python 脚本，25/25 PASS）：container(X:1)/quiz-volume(X:2)/quiz-speak(X:3)/volume-bg(X:5)/bottom-icon(X:11)/bottom-icon-shanka(X:12)/navi-card(X:14)/bg-macaron(X:29)/tui-word-title(X:45)/tui-pindu-title(X:46)/tui-searchbox(X:17)/tui-button-bottom(X:55)/tui-study-bottom(X:56)/word-mode-title(X:441)/popup-recording(X:425)/pop-view(X:427)/pindu_container(X:446)/input-area(X:449)/letter-box(X:457)+empty(X:458)+highlight(X:459)/letters-area(X:460)/letter-btn(X:461)/poster-container(X:471)/hidden-canvas(X:475)，全部存在且数值与 spec 实测一致（letter-box border 1px/font-size 32px、highlight #ffeb3b/#f44336、hidden-canvas 300×540px -9999px 等）。`.bg-macron` 页面 wxss 无规则（正则 0 命中）、定义在 page-frame.html（`bg-macron{background-color:var(--macron)}` + `--macron:#ff9b6a`，bg-macron 18 处）——spec §2 依赖说明与 §6.3 矛盾项成立。
- [x] **文案逐字一致** —— 36 条静态文案 python `in` 判定 36/36 PASS（含六空态、三处艾宾浩斯天数文案、统计图例 5 条、再测一次、保存到相册、收藏标题两分支、「展示上限为100个」/「没有更多了」三元、「在课程中点击文中单词，在弹出卡片中点击\"+\"进行收藏」（原文 `\x22` 转义形式，语义一致））。
- [x] **事件与云函数清单齐全** ——
  - 组装区唯一 handler 52 个（含 `bind`/`catch` 全事件类型提取），除 `clickRecord`/`closePopup` 外全部在 A:470 有 `fn:function` 定义（python 正则 50/52 命中，未命中 2 个即 spec §5 死 UI 弹层，与 spec 一致）；`switchTextShow` 定义存在 ✓。
  - 云函数：`callFunction({name,data:{tag:…}}` 提取 20 条（name 计数 updateUserStudy 11 / updateUserData 6 / updateUserQuiz 3；tag 计数 collectWord 4 / deleteWord 4 / unCollectWord 2 / 其余 10 种各 1），13 组 (name,tag) 与 spec §3.1 表逐行一致；`baby_id` 73 处 ✓。
  - 数据库：`collection("…")` user_study 14 / words 7 / user_data 1，`.aggregate(` 9 处，与 spec §3.2 一致。
  - 逻辑断言抽查（A:470 原文逐字）：`Math.ceil(100*this.data.dataList[0].num/c)` ✓；`quiz.slice(0,20),c=20` ✓；`onShow` 中 `b=r.globalData.vip<0?10:30` ✓；闪卡 `quiz.slice(0,Math.min(b,…))` → `getRandomSubset` → `Math.min(20,a.length)` ✓；收藏艾宾浩斯窗口 `[0,864e5,1728e5,3456e5,6048e5,1296e6,2592e6]` ±432e5 ✓；测验窗 864e5…2592e6 各 4 处 ✓；`getWordsPie` match/project 8 级（AA…G）+ sourceIndex ✓；饼图配色 8 值逐字命中 ✓；`onPullDownRefresh` vip<0 短路 + 仅 tab1/tab2 ✓；分享标题/双入口 ✓；drawCanvas 水印「英语分级兔」24,38(16px #f3f3f3) + 底部「来英语分级兔一起掌握3000词汇吧」20,c+60(11px #666666)，`c=e-90` ✓（另实测水印第二行「分级学习 · 趣味探索」24,56(9px rgba(255,255,255,.7)) 与分享码占位图 60×60，spec §3.4 未列，属蒸馏工省略非错误）；`onShareTimeline` imageUrl 实为 `https://qianyufang.top/public/yingyu/fenjitu.jpg`（与 onShareAppMessage 的 tcb shareImg.png 不同源，spec §4「分享图 tcb shareImg.png」只对了 AppMessage 一路，Timeline 用的是 qianyufang.top/fenjitu.jpg —— **行内补记**，不构成节点树 diff）。
- [x] 导航栏核对：python json 实读 app-config.json，`pages/word/word.html` = `{"navigationBarTitleText":"单词","backgroundColorTop":"#fff","backgroundColorBottom":"#fff","onReachBottomDistance":0,"enablePullDownRefresh":true}`，无 navigationStyle:custom；全局 window `#f1f1f1`/black ✓，与 spec §1.0/frontmatter 一致。

### 对账 diff 摘要

1. **行号偏差 3 处（轻微，不改）**：spec 引「W:438-449 clickWordName」「W:541-549 recording」「W:554-561」三处，字面 ops 分别在 W:439/W:544/W:555（spec 所引为区间或引用行，区间本身不假）。蒸馏工如修订可精确到字面行。
2. **补记 1 处（资源，非骨架）**：`onShareTimeline` 的 imageUrl 是 `qianyufang.top/public/yingyu/fenjitu.jpg`，与 `onShareAppMessage` 的 tcb `shareImg.png` 不同源；spec §4「分享图」一行宜补 Timeline 分支。已按第 1 节纪律在上方核对记录中留证，不改 spec 正文（对账员只记录不代改）。
3. 无实质节点树 diff、无类名/文案/事件/云函数缺失。

**verdict：PASS**（类名 25/25、文案 36/36、事件 52 handler/20 云函数调用/22 集合引用全部与原文一致；3 处轻微行号偏差与 1 处资源补记不构成还原错误）。

## 7. 已知矛盾与待复核项

1. **艾宾浩斯天数文案三处不一致**（逐字实测）：测验空态「按照1 2 4 7 15天的规律来重复」（W:52，缺 30）；统计图例「时间规律是1 2 4 7 15 30天」（W:495）；收藏空态「第1、2、4、7、15、30天」（W:297）。代码聚合窗口实为 1/2/4/7/15/30 天（见 §3.2）。还原时按原文逐字抄写，不做统一。
2. **闪卡「前100个」文案与代码不符**：空态文案「会按时间选取前100个进行展示」（W:418），但代码实际上限 `min(b, len)`（b=vip<0?10:30，onShow 设置）再 `min(20, …)`（getRandomSubset，A:470 原文），单次最多 20 张且 vip 上限 10/30。收藏 nomore「展示上限为100个」（W:299）同样与 b=10/30 不一致。还原时文案照抄，逻辑按代码。
3. **bg-macron vs bg-macaron**：页面 wxss 只有 `.bg-macaron`（X:29），「再测一次」按钮类名是 `bg-macron`（W:166），定义在全局 page-frame.html（`--macron:#ff9b6a`）。还原按钮需依赖全局样式。
4. **clickWordSpell 有效**：拼读 input-area 绑定 `clickWordSpell`（W:368），A:470 实测有定义（`clickWordSpell:function(){…isCompleted&&this.playWordSpell(t)}`，完成拼字后点击重听发音），非无效绑定。
5. **单行压缩覆盖度**：A:470 共 45939 字符，本次按方法名正则全量提取 120 个唯一 `name:function`（含 success/fail/complete 等回调），并逐字抽查 onLoad/initSystemUI/onShow/onPullDownRefresh/checkUserQuizArr/getWordTestList/getWordShankaList/getRandomSubset/getCollectWordsIbhs/countPassRate/clickWordTest/addResult/tabSelect/getWordsPie/initPinduGame(Hard)/handleLetterTap/updatePinduData/drawCanvas/savePoster/goCardWord/clickWordExtend 等方法体；未逐字符通读全行，个别回调内部细节（如 listenNextWordAudio、extractString）未展开。
6. **未跑动态验证**：无真机/CDP，以上全部来自 unpacked/ 静态产物；CDN/tcb 资源可达性、下拉刷新真机行为均 ⚠️ 待真机验证。
7. **captures/ 数据对账缺失**：`captures/collections/` 目录当前为空（find 实测 0 个文件），user_study/words/user_data 三集合无 jsonl 真实样本，本页数据结构结论仅来自代码，与 AGENTS.md「数据结构唯一权威=captures」不符，待补采集后对账。

## 8. 本次实跑命令与声明

实跑命令（均在仓根执行，cmd）：
- `grep -l "'./pages/word/word\.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_47.webview.js
- `wc -l` → W 1589 行 / A 470 行 / X 479 行
- `grep -n '$gwx_XC_42'` W → L1/14-17/576-579/582/1569；`grep -c '__wxRoute'` W → 0，A → 1（A:469 原文 `__wxRoute = "pages/word/word"`）
- `grep -o 'tag:"[a-zA-Z]*"' | sort | uniq -c` → collectWord 4 / deleteWord 4 / unCollectWord 2 / 其余各 1（共 13 种 20 次）；`grep -o 'name:"updateUser[A-Za-z]*",data'` → updateUserStudy 11 / updateUserData 6 / updateUserQuiz 3；python 逐条提取 callFunction 的 (name,tag) 对 20 条
- `grep -o 'collection("[a-z_]*")' | sort | uniq -c` → user_study 14 / words 7 / user_data 1；`aggregate()` 9 处（python 归属到 5 个 getter + getWordsPie + getWordsNum + 2 处 collect 分支）
- python 正则 `name[:=]function` 在 A:470 → 120 个唯一方法名全量列出，43 个模板 handler 除 clickRecord/closePopup 外全部命中且仅 1 次；`clickRecord`/`record_result` 全文件计数 0
- python 逐行模拟 ops 压栈 → 557 个 `Z(` 节点，z 索引反查（bindtap/longpress/bindchange 等 _mz 属性对）与 ops 字符串逐条对齐
- `grep -o 'https://qianyufang.top/public/yingyu/images/icon/[a-z_]*\.png' | sort | uniq -c` → 18 种；tcb 资源 word1-5.jpg / 4 个 mp3 / shareImg.png 计数逐条
- python json 读 app-config.json → word 页 window 与全局 window（§1.0）
- python 正则提取 X 关键类规则及行号（§2 表全部行号实测）

未验证（未跑、不装通过）：
- A:470 未逐字符通读（见 §6.5）
- CDN/tcb 真机可达性、下拉刷新真机行为
- captures/ 样本对账（目录为空，见 §6.7）

## 8. 对账记录（对账员 2026-09-28 独立复核）

对账方式：仅依据 unpacked/ 原文与本文档独立重推，未读蒸馏过程。核心手段：
- `python` 解析 `$gwx_XC_42` 的 `_mz` 语义（定义在 unpacked/webview.app.js:740：attrs 序列首项索引为 base，后续属性取 `base+vi`；`Z(z[N])` 递归解引用），把 W:583-1586 全部 `_mz` 节点的事件/类名/src 逐条反解到 ops 字符串，与 §1 逐项比对。
- A 侧：`grep -o 'name[:=]function'`、`grep -o 'tag:"…"'`、`grep -o 'collection("…")'` 及 python 上下文抽查。
- C 侧：python json 实读 app-config.json。X 侧：`grep -o '\.类名{…}'` + `grep -n` 行号。

### 8.1 核对项结论

| 核对项 | 结果 | 说明 |
|---|---|---|
| 节点树一致 | **基本一致，细节偏差 D1/D2/D4** | 骨架/分支/文案位置全部对上（557 个 Z ops 实测吻合）；偏差明细见 §8.6 |
| 类名抽查≥10 处全中 | **通过（实测 25 处）** | 见 §8.2 清单，25/25 在 X 命中 |
| 文案逐字一致 | **通过** | 空态 9 条、图例 5 条、结果/按钮/海报文案逐字 grep 命中（含 \x22 转义的「+」） |
| 事件与云函数清单齐全 | **通过，1 处绑定主体需更正** | A 侧 43 个 handler 除 clickRecord/closePopup（死 UI，§5 已如实标注）外全部命中且仅 1 次；20 次 callFunction/(name,tag) 对逐条核实；D3 更正 voice_on 绑定归属 |

### 8.2 类名抽查 25 处（X=unpacked/wxss_out/pages__word__word.wxss，全部 grep 实测）

| 类名 | X 行号 | 类名 | X 行号 |
|---|---|---|---|
| .container(padding-bottom:55px) | X:1 | .volume-bg(54px #5677fc .7) | X:5 |
| .bottom-icon-shanka(69px z999) | X:12 | .bg-macaron(#ff9b6a) | X:29 |
| .tui-word-title(min-height:70px) | X:45 | .tui-pro-titbox-study-name | X:255 |
| .tui-pro-titbox-study-prompt | X:257 | .tui-pindu-image | X:270 |
| .tui-word-image | X:264 | .word-mode-title(#888/15px/500/10px) | X:441 |
| .pindu_container(flex 纵向) | X:446 | .input-area | X:449 |
| .letter-box(#333/32px) | X:457 | .letter-box.empty(#ccc) | X:458 |
| .letter-box.highlight(#ffeb3b/#f44336/.3s) | X:459 | .letters-area | X:460 |
| .letter-btn | X:462 | .icon-yanhua(50px) | X:410 |
| .title-display | X:411 | .confetti-gif | X:464 |
| .poster-container | X:472 | .poster-img | X:473 |
| .save-btn(#ff9800) | X:474 | .hidden-canvas(left:-9999px) | X:475 |
| .close-btn | X:476 | .quiz-volume(60px/10px) | X:2 |

全局类核实：page-frame.html `--macron:#ff9b6a` 命中、`bg-macron{background-color:var(--macron)` 命中（W:1587 内嵌 setCssToHead 亦有本页样式，且数值与 X 一致——如 container 55px、bottom-icon-shanka 69px 为 [0,110]/[0,138] 的一半换算，X 的 479 行文件为准，spec 已按"X 数值直接当 px"处理，一致）。
`.again` 类在 X 无定义（grep 0 处）——按钮视觉仅靠全局 .bg-macron，spec §6.3/§2 已正确依赖全局，不算漏。

### 8.3 云函数与数据库复核（A:470 实测）

- `grep -o 'callFunction({name:"\w*"'` → updateUserStudy 11 / updateUserData 6 / updateUserQuiz 3 = 20 次 ✓
- `grep -o 'tag:"[a-zA-Z]*",baby_id'` → collectWord 4 / deleteWord 4 / unCollectWord 2 / monthDaysAdd 1 / updatePindu 1 / updateQuizFuxi 1 / updateQuizPassNum 1 / wordAdd 1 / wordFuxiNew 1 / wordFuxiUpdate 1 / wordListPush 1 / wordNum 1 / wordPindu 1 = 13 种 20 次 ✓（与 §3.1 表逐条吻合）
- `collection("user_study")` 14 / `collection("words")` 7 / `collection("user_data")` 1、`aggregate()` 9 处 ✓
- 抽查原文：`getWordShankaList` 内 `quiz.slice(0,Math.min(b,…))` + `getRandomSubset`（filter prompt 非空且无 shanka_ok → min(20) → Fisher-Yates）✓；`getCollectWordsIbhs` 时间窗 0/864e5/1728e5/3456e5/6048e5/1296e6/2592e6 ± 432e5、unwind/addFields/group、`min(b,x.length)` ✓；`countPassRate` `Math.ceil(100*…num/c)` + c>30→80 / c>10→90 / 100 ✓；`initPinduGame(Hard)` `Math.random()-.5` 洗牌 ✓；`drawCanvas` `c=e-90`、水印 `fillText("英语分级兔",24,38)`（16px #f3f3f3）+ `fillText("来英语分级兔一起掌握3000词汇吧",20,c+60)`（11px #666666）✓；`onShareAppMessage` path tuiguang_openid + shareImg.png、`onShareTimeline` imageUrl=fenjitu.jpg ✓；`goCardWord→/pages/wordExt/wordExt?word=` ✓。
- 生命周期：onLoad(bindAudio+initSystemUI→checkUserQuizArr)、onShow(b=vip<0?10:30)、onHide/onUnload 音频停/毁、onPullDownRefresh `vip<0||` 会员门槛+仅 tab1/tab2 ✓。
- 死 UI 复核（§5 结论成立）：`clickRecord`/`record_result` 在 chunk_47.appservice.js 计数 0；`closePopup` 仅 W 侧 ops 1 处、A 侧无定义；`transShow`/`value`/`isRecording` 均只有 data 初始值无 setData。§5「还原时跳过」判断正确。

### 8.4 导航栏/TabBar 复核（C 实测）

python json：page["pages/word/word.html"].window 无 navigationStyle，标题「单词」+enablePullDownRefresh:true ✓；全局 window 无 custom ✓；tabBar 第 3 项 text=「单词」✓。§1.0 结论成立。

### 8.5 文案逐字复核

`grep -n` 实测：测验空态 3 条(W:48/50/52)、复习空态 3 条(W:173/175/177)、收藏空态 3 条(W:247/249/251)、艾宾浩斯空态 2 条(W:295/297)、闪卡空态 3 条(W:414/416/418)、图例 5 条(W:493-501)、「本次测验结果：通过率」(W:133)、「再测一次」(W:168)、「保存到相册」(W:572)、「×」(W:566)、nomore 三元(W:299) —— 全部逐字命中 ✓。收藏空态「+」原文为 `\x22+\x22` 转义，语义即 "+"，一致。

### 8.6 对账中发现的 spec 偏差（需蒸馏工修正，均为细节、不动摇骨架）

- **D1（§1.2 W:55-58 引导轮播 image 类名错挂）**：原文 ops 解析为 `<view class="tui-item__row tui-color__white"><image class="padding-xss" mode="widthFix" src="{{item}}"/></view>`——`tui-item__row tui-color__white` 是**外层 view**（ops36，builder W:638 `class=36`），image 类名是 `padding-xss`（ops37，W:639-640）。spec W:55-58 把类名写到了 image 上。依据包行号对应 ops36-39。
- **D2（§1.2 W:57 行的 isTextShow 记法）**：模板中不存在 `isTextShow` 标志（W/A grep 均 0）。文本模式分支就是 `isTextMode==true` 的 else 支（ops43 `isTextMode==false` 为假支，builder W:661/683）。spec §1.2 第 57 行「文本模式 isTextShow」应改为「isTextMode==true 支」。`item.word`/`wordtip_yinbiao`/`wordtip_zh` 内容本身无误（ops89/94/97，W:726-752 实测）。
- **D3（§1.3 W:203-206 复习角标绑定主体）**：原文解析（builder W:914-922）：voice 角标 `<view class="tui-new-label-voice"><image class="voice-icon" src="…/voice_on.png"/></view>` **无任何 tap 绑定**；`downloadWordPoster` 绑在**下方 download 角标**的 view（catch:tap，class=tui-new-label-download，内含 download-icon/download_square.png，W:920）。spec「voice_on.png→downloadWordPoster」需改为「download_square.png 角标→downloadWordPoster；voice_on 角标纯展示」。注意详情弹层（W:1145 区）与闪卡（W:1388 区）的 download 角标同样绑 downloadWordPoster，闪卡处是 bind:tap（W:1388 实测 `bind:tap',187`）。
- **D4（次要，§1.7 W:438-449）**：闪卡词条点击 `clickWordName` 绑在 **image**（tui-slide-image，builder W:1341 `bindtap',420`），不是 `<view>`。spec 写成 view，点击主体应更正；handler 行为（playWordShankaAudio 等）无误。

### 8.7 结论

节点树（6 tab + 空态/列表/弹层结构）、样式（25 处类名抽查全中）、文案（逐字）、事件与云函数（20 次调用、43 handler、死 UI 判定）四项核对中，三项完全通过，一项存在 4 处细节偏差（D1-D4，均已给出行级证据）。判定 **FAIL（可快速返修）**：D1/D2/D3/D4 修正后本 spec 可进入验收。

### 8.8 蒸馏工修正记录（2026-09-24）

已按对账 diff D1-D4 修正，修正前均到原文复核（蒸馏工独立验证，非照抄对账记录）：

- **D1 修正（§1.2）**：实测 W:55-58 四条 ops 依次为 `tui-item__row tui-color__white`（ops36）/`padding-xss`（ops37）/`widthFix`/`{{item}}`；builder W:638-640 为外层 `_n('view')` + `_rz class=36` + 内嵌 `_mz('image', class=37)`。已把类名归属改为外层 view，image 类名 padding-xss。
- **D2 修正（§1.2）**：`isTextShow` 在 W/A 全文 grep 均 0；ops43=`[[2,'=='],[[7],[3,'isTextMode']],[1,false]]`（W:62 实测）。已删 isTextShow 记法，改为「isTextMode==true 的 else 支」。
- **D3 修正（§1.3）**：实测 builder W:914-922——voice 角标 view（class=184 tui-new-label-voice）+ image（class=185 voice-icon，src=voice_on.png）无任何事件属性；`catch:tap',187`（ops187=`downloadWordPoster`，W:206 实测）在下方 view（class=188 tui-new-label-download）。已改为「voice_on 纯展示、download_square 角标绑 downloadWordPoster」。
- **D4 修正（§1.7）**：实测 `_mz(z,'image',['bindtap',420,…])`（W:1341），ops420=`clickWordName`（W:439 实测）。已改为 image（tui-slide-image）绑定。
- **资源补记（§4）**：A:470 原文 `onShareTimeline:function(){return{title:…,imageUrl:"https://qianyufang.top/public/yingyu/fenjitu.jpg"}}`，fenjitu.jpg 计数 1，与 onShareAppMessage 的 tcb shareImg.png 不同源。§4 分享图拆为好友/朋友圈两行。
- **备忘补录（§3.4）**：drawCanvas 水印第二行「分级学习 · 趣味探索」（fillText(…,24,56)）与 60×60 分享码占位（qrcode.jpg）按对账员认定补为「省略非错误」备忘。

### 8.9 对账员复核（第二轮收尾）

对账时间 2026-09-28（收尾抽验）。方法：只读 unpacked/ 原文，逐条回验蒸馏工修正声明，未采信蒸馏过程；同时检查第 6/7 节及首轮对账记录未被篡改。

抽验结果（全部 PASS）：

- **D1**：W:638-640 实测 `_n('view')` + `_rz …,'class',36` + `_mz(z,'image',['class',37,'mode',1,'src',2])`；ops36=`tui-item__row tui-color__white`（W:55）、ops37=`padding-xss`（W:56）。spec §1.2 已改为类名挂外层 view、image 挂 padding-xss ✓。
- **D2**：`isTextShow` 在 chunk_47.webview.js / chunk_47.appservice.js grep 计数均为 0；ops43=`[[2,'=='],[[7],[3,'isTextMode']],[1,false]]`（W:62）。spec §1.2 已删 isTextShow 记法，改为「isTextMode==true 的 else 支」✓。
- **D3**：builder W:914-922 实测——voice 角标 view（class=184）+ image（class=185，src=voice_on.png）**无事件属性**；`catch:tap',187` 在下方 view（class=188 tui-new-label-download），ops187=`downloadWordPoster`（W:206）、download_square.png 在 W:209。spec §1.3 已改为「voice_on 纯展示、download_square 角标绑 downloadWordPoster」✓。
- **D4**：W:1341 实测 `_mz(z,'image',['bindtap',420,'class',1,'mode',2,'src',3])`，ops420=`clickWordName`（W:439）。spec §1.7 已改为 clickWordName 绑在 image（tui-slide-image）✓。
- **资源补记（§4）**：A 侧 grep 实测 `onShareTimeline:function(){return{…imageUrl:"https://qianyufang.top/public/yingyu/fenjitu.jpg"}`（fenjitu.jpg 计数 1，shareImg.png 计数 1，两路不同源）。spec §4 已拆「分享图（好友）/分享图（朋友圈）」两行 ✓。

篡改检查：第 6 节首轮对账记录、第 7 节「已知矛盾与待复核项」7 条、第 8 节 D1-D4 偏差清单与 FAIL 结论（§8.7）均原样在档，未发现删改或弱化。

**verdict=PASS**：D1-D4 修正全部经原文验证通过，Timeline 分享图补记确认，本 spec 进入待验收状态。
