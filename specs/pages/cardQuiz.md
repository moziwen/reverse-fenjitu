---
页名: cardQuiz
显示名: 阅读测验
状态: 已对账（PASS）
chunk: chunk_29.webview.js / chunk_29.appservice.js
导航栏: 系统栏（标题「阅读测验」）
---

# 页面还原规格：阅读测验

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 依据包来源：grep 定位 `grep -l "'./pages/cardQuiz/cardQuiz.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 `unpacked/chunk_29.webview.js`；节点树由 `node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_29.webview.js XC_22 ./pages/cardQuiz/cardQuiz.wxml` 运行时求值（displayMode A/B/C 三种输出一致，本次蒸馏会话实际执行）。

## 1. 页面骨架（节点树）

来源：`chunk_29.webview.js` 的 `$gwx_XC_22`（函数定义行号：chunk_29.webview.js:1；ops 求值函数 `gz$gwx_XC_22_1`：:15-107，其中 Z( ops 全量枚举体 :19-105；主渲染函数 `m0`：:111-272；入口注册 `e_[x[0]]={f:m0}`：:274；`__wxAppCode__['pages/cardQuiz/cardQuiz.wxml'] = $gwx_XC_22(...)`：:296）。

页面为 **isFinish 二态**：`isFinish` 假 → 答题视图；`isFinish` 真 → 结果视图。

### 1.1 答题视图（isFinish 假，wx:if 命中第 2 支）

```
<view class="margin-top-xl text-center">
  <tui-steps activeSteps={{activeSteps}} items={{items}} spacing="180rpx" type="2" />
</view>
<view class="tui-banner-item" bindtap="playAudioTitle">
  <view class="{{level_type ? 'quiz-title2' : 'quiz-title'}}">{{quiz_title}}</view>
  <!-- wx:if level_type==0（D/E/F/G 级）才有： -->
  <image class="tui-slide-image" mode="heightFix" src="{{quiz_img}}">
    <view class="tui-new-label-voice">
      <image class="voice-icon" src=".../icon/voice_on.png" />
    </view>
  </image>
</view>
<!-- 选项列表，wx:for={{quiz.options}}，item/index -->
<view class="tui-mtop tui-radius-all"
      style="background: {{optionClick==index ? '#fcd0ba' : '#fff'}}"
      bindtap="playAudioOption" data-id="{{index}}"
      wx:for="{{quiz.options}}" wx:for-item="item" wx:for-index="index">
  <view class="tui-list-cell"><view class="tui-addr-item">{{item}}</view></view>
</view>
<view class="quiz-volume">
  <image class="volume-icon margin-right-xl" bindtap="clickAudioPlay"
         src="https://qianyufang.top/public/yingyu/images/icon/play.png" />
  <image class="volume-icon" bindtap="checkAnswer"
         src=".../icon/ok.png" />
  <image class="volume-icon margin-left-xl" bindtap="showTips"
         src=".../icon/tip.png" />
</view>
<view class="tui-safearea-bottom" />
```

- tui-steps：ops 索引 52-56（chunk_29.webview.js:71-75 + m0 使用点 :217）。
- 横幅区（quiz_title / quiz_img / voice_on）：ops 57-67（chunk_29.webview.js:76-86 + m0 使用点 :220-236）。
- 选项列表：ops 68-75（chunk_29.webview.js:87-94 + m0 使用点 :239-255）。
- quiz-volume 三图标：ops 76-85（chunk_29.webview.js:95-104 + m0 使用点 :256-264）。play.png 为全 URL；ok.png、tip.png、voice_on.png 同域 qianyufang.top `/public/yingyu/images/icon/`（wxml 侧静态域名规律，样本数 4，全部同域）。
- tui-safearea-bottom：ops 86（chunk_29.webview.js:105 + m0 使用点 :265-267）。

### 1.2 结果视图（isFinish 真，ops 0-51，m0 chunk_29.webview.js:115-213）

```
<!-- 欢呼开关 -->
<view class="huanhu" bindtap="switch_huanhu">
  <image class="icon-huanhu" src="{{isHuanhu ? voice_on : voice_off}}" />  <!-- 60x60，域名 qianyufang.top/public/yingyu/images/icon/ -->
</view>
<view class="margin-top text-center">
  <view class="padding text-xl text-bold title-display">
    <!-- wx:if passRate==100： -->
    <image class="icon-yanhua" src="https://qianyufang.top/public/yingyu/images/icon/yanhua.png" />
    <text class="{{passRate==100 ? 'text-red' : ''}}">测验结果：通过率 {{passRate}}%</text>
    <!-- wx:if passRate==100： -->
    <image class="confetti-gif" mode="aspectFit" src="https://qianyufang.top/public/yingyu/images/gif/Trophy.gif" />
  </view>
</view>
<!-- 成绩明细，wx:for={{dataList}} -->
<tui-collapse bindclick="change" current="{{item.current}}" index="{{index}}">
  <!-- title 槽 -->
  <view class="tui-rate-container">
    <tui-rate current="{{item.star}}" disabled="true" quantity="3" size="36" />
    <view class="tui-title"><text>{{item.num}} 次</text></view>
  </view>
  <!-- content 槽，wx:for={{item.list}}，子模板 cNMB（chunk_29.webview.js:179-188） -->
  <view class="tui-content">
    <tui-list-cell bindtap="showQuizDetail" data-index data-title>{{citem}}</tui-list-cell>
  </view>
</tui-collapse>
<view class="margin-top-xl">
  <button class="bg-macron" style="width:50%;" bindtap="again">再测一遍</button>
</view>
<view class="margin-top-xl">
  <button class="bg-blue" bindtap="back">返回首页</button>
</view>
```

- 欢呼开关：ops 2-5；烟花：ops 8-10；通过率文本：ops 11-12；Trophy.gif：ops 16-19（16 为条件复用 z[1]，17 class、18 mode、19 src）；折叠面板：ops 22-41（title 槽 tui-title 包裹层 op31 = chunk_29.webview.js:50，m0 :168-169；content 槽 tui-content 包裹层 op37 = :56，子模板 cNMB :179-188，内容循环 _2z 注册 :190；外层折叠循环 _2z 注册 :196）；两个按钮：ops 42-51（`margin-top-xl` 包裹层 op42/op47 = chunk_29.webview.js:61/66，m0 :198-199 与 :204-205）。

### 状态分支

- `isFinish`：答题视图 ↔ 结果视图二态切换（见 1.1/1.2）。
- `level_type`：D/E/F/G 级置 0 → 答题视图显示题干图 `quiz_img` + 中文题干类 `quiz-title2`；其余级置 1 → 仅文字 `quiz-title`（appservice 侧 getDatabaseLevel，chunk_29.appservice.js:143；节点树 wx:if ops 61）。
- `passRate==100`：显示 yanhua.png 与 Trophy.gif，结果文本加 `text-red`。
- `optionClick==index`：被点选项背景 `#fcd0ba`，否则 `#fff`。

## 2. 样式规格

来源：`unpacked/wxss_out/pages__cardQuiz__cardQuiz.wxss`（43 行，由 chunk_29.webview.js:298 setCssToHead 还原，@import "./static/animation.wxss"）。数值直接当 px，不除 2。行号为本次蒸馏实读核对的文件行号（与依据包所报个别行号有 ±1 偏差，以本表为准）。

| 类名 | 关键样式 | wxss 行 | 用途 |
|---|---|---|---|
| .container | padding:10px 0 60px | :2 | 页面容器 |
| .huanhu | position:fixed; right:8px; top:8px | :3 | 欢呼开关定位 |
| .icon-huanhu | 30px×30px | :4 | 欢呼开关图标 |
| .icon-yanhua | 50px×50px | :6 | 烟花图标 |
| .quiz-volume | margin-top:20px; width:100%; z-index:1 | :7 | 底部三图标容器 |
| .quiz-volume,.volume-bg | flex 居中; height:54px | :8 | — |
| .volume-bg | background:#5677fc; border-radius:50%; opacity:.7; width:54px | :9 | — |
| .volume-icon | 60px×60px; z-index:99 | :10 | 底部操作图标 |
| .tui-rate-container | flex 两端居中; margin:15px; padding:20px; font-size:15px | :13 | 折叠面板标题槽 |
| wx-tui-macaron | color:#ff9b6a | :17 | — |
| .bg-macaron | background-color:#ff9b6a | :18 | — |
| .tui-radius-all | border-radius:12px; overflow:hidden | :21 | 选项圆角 |
| .quiz_recorder | bottom:20px; position:fixed; width:100% | :23 | — |
| .tui-addr-item | font-size:18px; font-weight:300; line-height:17px; padding:10px | :26 | 选项文本 |
| .tui-list-cell | flex 居中; font-size:13px; line-height:13px; padding:15px | :28 | 选项行 |
| .tui-slide-image | border-radius:6px; height:290px; top:0 | :36 | 题干图（D~G 级） |
| .tui-new-label-voice | 44px×44px; right:1px; top:1px; border-radius:12% | :37 | 语音角标容器 |
| .voice-icon | 41px×41px | :38 | 语音角标图标 |
| .tui-banner-item | flex 纵向居中; padding:0 10px | :39 | 题干横幅 |
| .quiz-title | font-size:24px; padding:10px | :40 | A~C 级题干 |
| .quiz-title2 | font-size:28px; margin:20px 0 10px; padding:10px 10px 10px 15px | :41 | D~G 级题干 |
| .tui-content | background:#fff; color:#555; font-size:16px; padding:10px 15px 10px 35px | :42 | 折叠面板内容 |
| .confetti-gif | 120px×120px; position:absolute; z-index:5; pointer-events:none | :43 | 奖杯动图 |

原始 rpx 值同步内联在 chunk_29.webview.js:298（如 .volume-icon 120rpx、.quiz-title 48rpx）。

⚠️ **bg-macron 拼写缺 u**：wxml 按钮（ops 42-45）写的是 `bg-macron`，样式表只有 `.bg-macaron`（:18），无 `.bg-macron` 定义 → 该按钮**实际渲染无背景色**。属原文既有缺陷，还原时照抄 `bg-macron` 并知悉无样式生效。已核对 chunk_29.webview.js 中 `bg-macron`/`bg-macaron` 各出现 1 次（grep 实证）。

依赖的全局类（ColorUI 等）：`margin-top-xl` / `text-center` / `text-xl` / `text-bold` / `text-red` / `padding` / `tui-mtop` / `tui-safearea-bottom` / `bg-blue` / `margin-right-xl` / `margin-left-xl` / `title-display`（后者不在本页 wxss 中，属全局/组件样式，待复核具体定义位置）。

## 3. 事件与逻辑

来源：`chunk_29.appservice.js`。页面注册行 :142（`__wxRoute = "pages/cardQuiz/cardQuiz"; define("pages/cardQuiz/cardQuiz.js",...)`，338 字符，本次实读核对），**全页逻辑在 :143 单行压缩体**（12,877 字符 / 12,967 UTF-8 字节，双记口径，本次实读核对），:144 为 define 闭合。下表行号统一写 143。

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| tap 题干 | playAudioTitle | 播 `{urlPath}/Quiz/{quizIndex+1}-title.mp3`；D/E/F/G 级（level_type=0）播 `-title0.mp3` | — | — |
| tap 选项 | playAudioOption | 播 `{urlPath}/Quiz/{n}-option{optionId}.mp3` | — | optionClick |
| tap 喇叭 | clickAudioPlay | 重播题干音频 | — | — |
| tap 对勾 | checkAnswer | 判分（见计算规则） | updateUserData / updateUserPlan / updateUserQuiz / updateUserStudy | user_data / user_plan / user_study / words |
| tap 灯泡 | showTips | 播 `quiz.question` 对应图片路径 `.jpg→.mp3`（encodeURI(decodeURIComponent(...))） | — | — |
| tap 欢呼开关 | switch_huanhu | 翻转 isHuanhu，`!0==isHuanhu` 时 wx.showToast「欢呼声开启」否则「欢呼声关闭」，随后 `wx.getStorageSync("setting")` 置 isHuanhu 后 setStorageSync 回写（chunk_29.appservice.js:143 实读） | — | storage setting |
| collapse | change | 折叠面板展开/收起 | — | item.current |
| tap 明细 | showQuizDetail | **仅 console.log("showQuizDetail", t)，原版未实现跳转**；节点携带 data-index/data-title（chunk_29.appservice.js:143 实读：`showQuizDetail:function(t){console.log("showQuizDetail",t)}`，紧随其后为 onShareAppMessage） | — | — |
| tap 再测一遍 | again | 重置本组测验 | — | — |
| tap 返回首页 | back | `1==getCurrentPages().length ? wx.reLaunch({url:"/pages/index/index"}) : wx.navigateBack({delta:2})`（chunk_29.appservice.js:143 实读） | — | — |
| onShareAppMessage | — | title「分享你一个英语分级阅读小程序」，path=/pages/index/index，imageUrl=TCB CDN shareImg.png | — | — |
| onUnload | — | 销毁 innerAudioContext | — | — |

### 云函数调用清单（均 wx.cloud.callFunction，tag 为 data.tag；已在 :143 逐一 grep 实证各 tag 字符串存在）

1. **updateUserPlan** — checkPlanQuiz 内（tag="quiz"），携带 baby_id/current/task_index/value=passRate/quizResult=dataList；仅 `globalData.plan_id` 非空且 `daka_current>=0` 时调用。
2. **updateUserData** — 3 个 tag：
   - `cardQuizAdd`：今日无数据时首记（baby_id/groupID/babyInfo/vip/date/year/month/day/time/level/card_id/title/rate/cover/dataList），成功后置 `globalData.todayDataExist/userDataUpdate/dakaToday=true` 并触发 updateTotalDays；
   - `cardQuizPush`：今日有 user_data 但无该 cardQuiz 记录时 push；
   - `cardQuizNumUpdate`：已有同 card_id 记录时更新 rate/dataList。
3. **updateUserStudy** — 2 个 tag：`monthDaysAdd`（updateTotalDays 内，user_study.month_days 不含当日时补记）；`wordsAddQuiz`（updateUserStudyQuiz 内，从 words 集合查 name/img/audio_en/level 后写入错词）。
4. **updateUserQuiz** — 2 个 tag：`newLevelPass`（user_study 无该 level 记录时）；`updateLevelPass`（有记录但 pass 数组不含 id 时）。

### getCardQuiz 加载态（chunk_29.appservice.js:143 实读）

getCardQuiz 进入即 `wx.showLoading({title:"加载中"})`，在 `.get` 的 success 回调尾部（setData cover/card_title/…/urlPath 之后）`wx.hideLoading()`。

### 云数据库集合（const a=wx.cloud.database()）

| 集合 | 用途 | 证据 |
|---|---|---|
| 答题集（动态名：getDatabaseLevel() level A→AL、B→BL … K→KL） | getCardQuiz：`a.collection(i).where({id:card_id}).get`，取 data[0] 的 cover(.jpg→0.jpg)/title/quiz/list | chunk_29.appservice.js:143 |
| user_plan | checkPlanQuiz 读取（where baby_id，field list/current） | 同上 |
| user_data | updateCardQuiz 读取/判重（where baby_id+date+cardQuiz elemMatch id） | 同上 |
| user_study | updateTotalDays、updateUserStudyQuiz、updateUserLevelPass 读取 | 同上 |
| words | updateUserStudyQuiz 读取（where include elemMatch word） | 同上 |

### 计算规则（判分/进度/星级，必须精确到边界）

- **checkAnswer**：未点选项直接 playWrong；答对按 clickTimes 计星——首答 3 星（playGood），二答 2 星，三答及以后 1 星；写入 passList/dataList[0..2]，activeSteps+1。
- **通过率** = ceil(3 星题数 / 总题数 × 100)；passRate==100 且 isHuanhu 时播欢呼。
- 全部答完：1 秒后 `isFinish=true` 切结果视图，并调 updateCardQuiz() + checkPlanQuiz()。
- **getNextQuiz**：答完后 1 秒自动进下一题。
- urlPath 推导：`cardList[0].img` 截取到最后一个 `/` 之前。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 题干音频 | `{urlPath}/Quiz/{题号}-title.mp3`；D/E/F/G 级加 `-title0.mp3` 变体 | chunk_29.appservice.js:143（`-title.mp3`/`-title0.mp3`/`Quiz/"+` grep 实证：Quiz/"+ 出现 3 次） | ⚠️ 待真机验证（urlPath 由 cardList[0].img 动态推导，依赖 captures/ 样本，本 ask 未读 jsonl，不猜 CDN 前缀） |
| 选项音频 | `{urlPath}/Quiz/{题号}-option{选项id}.mp3` | chunk_29.appservice.js:143（`-option` 实证） | ⚠️ 待真机验证 |
| 提示音频 | quiz.question 对应图片路径 `.jpg`→`.mp3` | chunk_29.appservice.js:143（`question` 出现 2 次） | ⚠️ 待真机验证 |
| 反馈音效（TCB CDN） | `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/{perfect\|good\|great\|wrong\|try-again\|huanhu}.mp3` | chunk_29.appservice.js:143（6 个 mp3 路径逐一 grep 实证） | ⚠️ 待真机验证 |
| 分享图 | 同 TCB CDN `/public/yingyu/shareImg.png` | chunk_29.appservice.js:143（onShareAppMessage 实读实证） | ⚠️ 待真机验证 |
| wxml 静态图 | `https://qianyufang.top/public/yingyu/images/icon/` 下 voice_on/play/ok/tip/yanhua.png 及 `.../gif/Trophy.gif` | chunk_29.webview.js 节点树（m0 :111-272）；wxml 侧样本 6 处同域 | ⚠️ 待真机验证 |
| 答题集封面 | cover 字段原值 `.jpg` 替换为 `0.jpg` 后使用 | chunk_29.appservice.js:143（getCardQuiz） | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

- 结果视图：欢呼开关（huanhu 固定右上 8px，icon 30px，src 随 isHuanhu 在 voice_on/voice_off 间切换）/ 烟花+奖杯（仅 passRate==100）/ 星级折叠面板（tui-collapse，title 槽 tui-rate 三星 + tui-title 内「{num} 次」，content 槽 tui-content 包 tui-list-cell 列错题）。
- 欢呼开关持久化在 `wx.getStorageSync("setting")`，switch_huanhu 回写 setStorageSync，并 toast「欢呼声开启/关闭」（chunk_29.appservice.js:143 实读）。
- getCardQuiz 加载期间 wx.showLoading「加载中」/ wx.hideLoading（chunk_29.appservice.js:143 实读）。
- 音频上下文在 onUnload 统一销毁。

## 6. 对账记录（对账员填写）

对账日期：2026-10-01。对账员独立重推，仅用原文（`unpacked/chunk_29.webview.js`、`unpacked/chunk_29.appservice.js`、`unpacked/app-config.json`、`unpacked/wxss_out/pages__cardQuiz__cardQuiz.wxss`）与本 spec，未参考蒸馏过程。

执行命令与结果：
- `grep -l "'./pages/cardQuiz/cardQuiz.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 `unpacked/chunk_29.webview.js`（复核通过）。
- `node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_29.webview.js XC_22 ./pages/cardQuiz/cardQuiz.wxml` → exit 0，A/B/C 三种 displayMode 输出一致；答题视图静态属性与绑定（spacing="180rpx" type="2"、quiz-title、quiz-volume 三图标 bindtap+src、tui-safearea-bottom）与 1.1 逐项吻合。
- ops 全量枚举（node 脚本逐行扫 `Z(`，chunk_29.webview.js:19-105）→ 共 87 条 op（索引 0-86），spec 各节 ops 索引全部对上。
- node 抽取 `chunk_29.appservice.js:143`（实测 12,877 字符 / 12,967 UTF-8 字节）逐一 grep：11 个云函数 tag（updateUserPlan、updateUserData、updateUserStudy、updateUserQuiz、cardQuizAdd、cardQuizPush、cardQuizNumUpdate、monthDaysAdd、wordsAddQuiz、newLevelPass、updateLevelPass）全部命中；6 个 TCB mp3（perfect/good/great/wrong/try-again/huanhu）、shareImg.png、`-title.mp3`/`-title0.mp3`/`-option`、`.jpg`→`0.jpg`、`encodeURI(decodeURIComponent(...))` 全部命中。处理函数定义体（playAudioTitle/playAudioTitleZh/playAudioOption/showTips/checkAnswer/countResult/getNextQuiz/updateCardQuiz/checkPlanQuiz/updateUserLevelPass/updateTotalDays/switch_huanhu/change/again/back/onUnload/onShareAppMessage/getCardQuiz/getDatabaseLevel）逐一实读核对。
- `node -e "JSON.parse(app-config.json)"`：`pages/cardQuiz/cardQuiz.html` window = `{navigationBarTitleText:"阅读测验",backgroundColorTop:"#fff",backgroundColorBottom:"#fff",onReachBottomDistance:0,enablePullDownRefresh:false}`，**无 navigationStyle:"custom"**（对比 index 页有 custom）→ frontmatter「系统栏（标题「阅读测验」）」成立。
- 类名抽查脚本对第 2 节 18 个类名逐一断言（要求 ≥10）：**18/18 值全中**（.tui-new-label-voice / .confetti-gif 两条仅属性书写顺序不同，值域一致：前者 height:44px;width:44px;border-radius:12%;right:1px;top:1px，后者 height:120px;width:120px;z-index:5;pointer-events:none;position:absolute）；wxss 43 行、`.bg-macron` 无定义 / `.bg-macaron` 在 :18 —— 第 2 节 ⚠️ 缺 u 结论复核成立。

- [x] 节点树与原文一致 —— isFinish 二态、tui-steps / 横幅 / 选项列表 / quiz-volume 三图标 / safearea（答题视图）与欢呼开关 / 烟花 / 通过率文本 / Trophy / 折叠面板 / 双按钮（结果视图）的属性与绑定逐项对上；但 1.2 骨架漏 3 个包裹层（diff 2-4）。
- [x] 类名抽查 18 处全中（要求 ≥10）。
- [x] 文案逐字一致 —— wxml 侧 5 条中文（「测验结果：通过率 」「%」「 次」「再测一遍」「返回首页」，chunk_29.webview.js:31/51/65/70）与 onShareAppMessage title「分享你一个英语分级阅读小程序」逐字核对通过；appservice 侧 toast「欢呼声开启/关闭」、loading「加载中」spec 未收录（diff 5，非错写）。
- [ ] 事件与云函数调用清单 —— 清单本身齐全（10 个 bindtap/bindclick + onShareAppMessage + onUnload + 4 云函数 8 tag 全部在案），但 showQuizDetail 行为描述与原文不符（diff 1）。

diff 摘要（须蒸馏工修订后复审）：
1. 【行为错误】第 3 节 showQuizDetail 写「跳题目详情」。原文 `showQuizDetail:function(t){console.log("showQuizDetail",t)}`（chunk_29.appservice.js:143，onShareAppMessage 紧随其后）**仅 console.log，无任何跳转**。应改为「仅 console.log（原版未实现跳转），节点携带 data-index/data-title」。
2. 【骨架缺层】1.2 title 槽：「{num} 次」text 外层实有 `<view class="tui-title">` 包裹（op31 = chunk_29.webview.js:50；m0 :168-169）。
3. 【骨架缺层】1.2 content 槽：每个 tui-list-cell 外层实有 `<view class="tui-content">` 包裹（op37 = chunk_29.webview.js:56；m0 :179-193）。
4. 【骨架缺层】1.2 两个 button 各自外层实有 `<view class="margin-top-xl">` 包裹（op42/op47，chunk_29.webview.js:61/66；m0 :198-199 与 :204-205）。
5. 【遗漏可补】switch_huanhu 含 wx.showToast「欢呼声开启/关闭」；getCardQuiz 含 wx.showLoading「加载中」/wx.hideLoading；back() 实现为 `1==getCurrentPages().length ? wx.reLaunch("/pages/index/index") : wx.navigateBack({delta:2})`。
6. 【行号偏差】chunk_29.webview.js 行号引用多处不准（ops 索引本身全对）：gz$gwx_XC_22_1 实际 :15（spec 写 :14）；m0 实际 :111-272（spec 写 :108-283 / :110-249）；e_ 注册实际 :274（spec 写 :284）；tui-steps ops52-56 实际 :71-75、m0 使用点 :217（spec 写 :49-56 + :252-256）；折叠面板子模板 cNMB 实际 :179-193（spec 写 :183-208）；1.1 各分节所附 webview 行号（:257-259 / :274-277 / :286-288 / :291-292）同样整体偏移，请按本次实测修正。
7. 【数字偏差】蒸馏工备注 L143「12,968 字符」/L142「339 字符」实测为 **12,877 字符（12,967 UTF-8 字节）** / **338 字符**。
8. 【索引微偏】1.2 备注「Trophy.gif：ops 16-18」实为 ops 16(条件复用 z[1]) / 17(class) / 18(mode) / 19(src)，终点应到 19。

结论：主体结论全部成立，但存在 1 处行为描述错误（showQuizDetail）+ 3 处骨架缺层 + 行号/字数勘误。**FAIL —— 待蒸馏工按上述 8 条修订后复审。**

蒸馏工修订：已按 diff ①-⑧ 修订，待复核。

### 复核（对账员，2026-10-01，全部现场实读）

逐条核验 8 条 diff：

1. **diff①（showQuizDetail）落实**：实读 `chunk_29.appservice.js:143`，原文为 `showQuizDetail:function(t){console.log("showQuizDetail",t)}`，紧随其后为 `onShareAppMessage`，与 spec 第 3 节修订后表述（仅 console.log、原版未实现跳转、携带 data-index/data-title）一致。m0 使用点 op38（chunk_29.webview.js:182 `data-index`/`data-title` 属性）吻合。
2. **diff②（tui-title 包裹层）落实**：op31=`Z([3,'tui-title'])` 在 chunk_29.webview.js:50；m0 :168-169 `_rz(z,oJMB,'class',31,...)`。1.2 骨架已补 `<view class="tui-title"><text>{{item.num}} 次</text></view>`，行号正确。
3. **diff③（tui-content 包裹层）落实**：op56=`Z([3,'tui-content'])` 在 chunk_29.webview.js:56；子模板 cNMB :179-188（`_rz(z,lSMB,'class',37,...)` 在 :181）。1.2 骨架已补，行号正确。
4. **diff④（margin-top-xl 包裹层）落实**：op42/op47 在 chunk_29.webview.js:61/66；m0 :198-199（`_rz(z,eVMB,'class',42)`）与 :204-205（`_rz(z,xYMB,'class',47)`）。1.2 两个 button 各自的 `<view class="margin-top-xl">` 包裹已补，行号正确。
5. **diff⑤（toast/loading/back）落实**：`switch_huanhu` 实读含 `wx.showToast({title:"欢呼声开启"})`/`{title:"欢呼声关闭"}` + getStorageSync("setting") 回写 setStorageSync；`getCardQuiz` 进入即 `wx.showLoading({title:"加载中"})`，hideLoading 在 setData({urlPath:d}) 之后；`back:function(){1==getCurrentPages().length?wx.reLaunch({url:"/pages/index/index"}):wx.navigateBack({delta:2})}` 逐字核对。spec 第 3/5 节均已补入。
6. **diff⑥（行号勘误）落实**：实读核对——`gz$gwx_XC_22_1` 定义于 :15（spec 1 节写 :15-107 ✓）、`m0` 于 :111-272（spec ✓）、`e_[x[0]]={f:m0,...}` 于 :274（grep 实证 ✓）；tui-steps ops 52-56 对应 :71-75 + m0 :217 ✓；横幅 ops 57-67 对应 :76-86 + m0 :220-236 ✓；选项 ops 68-75 对应 :87-94 + m0 :239-255 ✓；quiz-volume ops 76-85 对应 :95-104 + m0 :256-264 ✓；safearea op86=:105 + m0 :265-267 ✓；折叠 ops 22-41（:42-61）+ m0 :161-196 ✓；cNMB :179-188 ✓；`__wxAppCode__['pages/cardQuiz/cardQuiz.wxml']` 注册于 :296 ✓。全部分节行号勘误后与原文一致。
7. **diff⑦（字符数口径）落实**：实测 L143 去行尾换行为 12,877 字符 / 12,967 UTF-8 字节（双记），L142 define 头 338 字符，与 spec 第 3 节修订后数字一致。
8. **diff⑧（Trophy.gif ops）落实**：实读 :36-38，Trophy.gif 占 ops 16（条件复用 `Z(z[1])`，:35）/17（class confetti-gif）/18（mode aspectFit）/19（src）；m0 :148-149 `['class',17,'mode',1,'src',2]` 使用点吻合。spec 已改为 ops 16-19。

新错误抽查（防修订引入回归）：
- 类名抽查 18 处（第 2 节全表）对 `unpacked/wxss_out/pages__cardQuiz__cardQuiz.wxss`（43 行）逐一核对：18/18 数值全中（含 .tui-new-label-voice 44px/right:1px/top:1px/border-radius:12%、.confetti-gif 120px/z-index:5/pointer-events:none、.tui-title :14 在案、.bg-macaron :18 在案、无 .bg-macron 定义——⚠️ 缺 u 结论复核成立）。
- 文案逐字复核：wxml 侧「测验结果：通过率 」「%」「 次」「再测一遍」「返回首页」（chunk_29.webview.js:31/51/65/70）与 appservice 侧「分享你一个英语分级阅读小程序」「欢呼声开启」「欢呼声关闭」「加载中」（:143）逐字命中。
- 节点树重跑 `node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_29.webview.js XC_22 ./pages/cardQuiz/cardQuiz.wxml`：exit 0，A/B/C 三态输出一致，答题视图（tui-steps spacing="180rpx" type="2"、quiz-title、quiz-volume 三图标、tui-safearea-bottom）与 1.1 逐项吻合。
- ops 全量重扫：`Z(` 共 87 条（索引 0-86），spec 各节 ops 索引全部对上；`e_[x[0]]` 注册在 :274（grep 实证）。
- 云函数 11 tag（updateUserPlan×1 / updateUserData×3 / updateUserStudy×2 调用点 / updateUserQuiz×2 / cardQuizAdd / cardQuizPush / cardQuizNumUpdate / monthDaysAdd / wordsAddQuiz / newLevelPass / updateLevelPass）全部在 :143 命中；cardQuizAdd 字段（baby_id/groupID/babyInfo/vip/date/year/month/day/time/level/card_id/title/rate/cover/dataList）、user_plan where baby_id + field list/current、user_data where baby_id+date+cardQuiz elemMatch id、words where include elemMatch（取 name/img/audio_en/level）、getDatabaseLevel A→AL…K→KL 全映射、checkAnswer 边界（-1==optionClick 直接 playWrong；clickTimes 1/2/≥3 → 3/2/1 星；Math.ceil(100*num/总题数)）、成功后 1 秒 isFinish=!0 + updateCardQuiz()+checkPlanQuiz()——均与 spec 逐条吻合，修订未引入回归。

复核结论：**8/8 条 diff 全部落实，抽查无新错误。PASS。**

---

## 蒸馏工备注（本 ask 实际执行的核对）

- 定位命令与节点树提取：本会话执行 `grep -l "'./pages/cardQuiz/cardQuiz.wxml'" unpacked/chunk_*.webview.js`（唯一命中 chunk_29）与 `node tools/extract_gwx_tree.js ... XC_22 ...`（成功，A/B/C 输出一致）。
- appservice 行号修正：依据包统一写 :142；实读 :142 为 `__wxRoute`+define 开头（338 字符），**逻辑体在 :143**（12,877 字符 / 12,967 UTF-8 字节，双记口径），:144 为闭合。所有云函数 tag、音频 URL、分享图均在 :143 内 grep/实读实证（11 个 tag 全部命中）。
- wxss 行号修正：以实读 `unpacked/wxss_out/pages__cardQuiz__cardQuiz.wxss`（43 行）为准，个别类行号与依据包 ±1（如 .bg-macaron 在 :18 非 :17、.tui-list-cell 在 :28 非 :24）。
- app-config 核对：`pages/cardQuiz/cardQuiz.html` window 含 `navigationBarTitleText:"阅读测验"`、`backgroundColorTop/Bottom:#fff`、`onReachBottomDistance:0`、`enablePullDownRefresh:false`，**无 navigationStyle:"custom"**（对比首页 index 显式有 custom）→ 系统导航栏（grep 实证）。
- CDN 可达性（音频三态/封面双路径）未在本 ask 验证，属抓包/动态采集范围；未读 captures/ jsonl。
- 其他 grep 命中 cardQuiz 的 appservice chunk：25/27/30/32/44，为其他页面跳转引用，非本页逻辑。
