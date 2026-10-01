---
页名: cardTest
显示名: 听力测验（卡片四选一答题 + 通过率结果页）
状态: 已对账（对账员 2026-10-01 PASS，见 §6）
chunk: chunk_30.webview.js / chunk_30.appservice.js
导航栏: 系统栏（标题「听力测验」，非 custom）
---

# 页面还原规格：听力测验（pages/cardTest/cardTest）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_30.webview.js，A=unpacked/chunk_30.appservice.js，X=unpacked/wxss_out/pages__cardTest__cardTest.wxss，C=unpacked/app-config.json。
> 定位（本会话依据包实际执行）：`grep -l "'./pages/cardTest/cardTest.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_30.webview.js；`grep -l 'pages/cardTest/cardTest' chunk_*.appservice.js` → 唯一命中 chunk_30.appservice.js（appservice.app.js 无 cardTest 引用）。
> W 节点树标识 `$gwx_XC_24`（W:1），节点构建体 m0（W:139-198），文案/类名常量表 ops 数组 z（W:18-135），W:139 `var x=['./pages/cardTest/cardTest.wxml']`。A 页面定义 `define("pages/cardTest/cardTest.js",...)`（A:186-187），逻辑正文全部在 A:187 单行压缩代码内，函数级行号统一记 A:187。
> ⚠️ 坑点：A:1-185 亦含一份 `$gwx_XC_24`（appservice 侧冗余副本），其 ops 表缺 huanhu/yanhua/按钮等节点，是精简副本；节点树以 W 侧全表（W:18-135）为准。

## 0. 页面配置与注册

来源：C（python json 解析输出）。

- 系统导航栏（非 custom）：`pages/cardTest/cardTest.html` 的 window 配置为 `{navigationBarTitleText:"听力测验", backgroundColorTop:"#fff", backgroundColorBottom:"#fff", onReachBottomDistance:0, enablePullDownRefresh:false}`，未出现 `navigationStyle:"custom"`（对比首页 pages/index/index.html 有 `"navigationStyle":"custom"`）。下拉刷新关闭。
- 页面注册于 C 的 pages 数组第 5 项 `'pages/cardTest/cardTest'`。
- 页面级 usingComponents（内嵌于 app-service.js `__wxAppCode__['pages/cardTest/cardTest.json']`，python 正则提取+json 解析输出；不在 app-config.json page 字段内）：tui-steps、tui-collapse、tui-rate、tui-icon、tui-list-cell、tui-grid、tui-grid-item、tui-bottom-popup（路径 /components/...）。
- 插件：QCloudAIVoice 3.0.0，provider wx3e17776051baf153（C plugins 字段）。

## 1. 页面骨架（节点树）

来源：W 的 `$gwx_XC_24`（W:1），m0（W:139-198），ops 常量下标（W:18-135），行号均指 W。

```
<!-- 根条件：isFinish（z:19），双分支 -->

■ 答题态（isFinish==false，W:112-164）
<tui-steps activeSteps="{{activeSteps}}" items="{{items}}" spacing="180rpx" type="2"/>   (W:115, z:77-80)

<block wx:if="{{isPad==false}}">                                                          (z:81, W 分支)
  <view class="cu-list grid col-2">                                                       (z:82)
    <view wx:for="{{curList}}" bindtap="click"                                            (z:83-85)
          class="cu-card cu-item text-center {{index==clickIndex?animation:''}}"          (z:86-90)
          data-id="{{item.id}}" data-index="{{index}}">                                   (z:87-88)
      <image mode="aspectFill" src="{{item.img}}"
             style="width:100%;height:{{heightImg}}rpx"/>                                 (z:91-93)
    </view>
  </view>
</block>
<block wx:else>  <!-- isPad 真分支 -->
  <tui-grid>
    <tui-grid-item cell="2">                                                              (z:96)
      <view bindtap="click" class="cu-item text-center {{index==clickIndex?animation:''}}">(z:97-101)
        <image class="tui-grid-img" lazy-load mode="aspectFit" src="{{item.img}}"
               style="width:100%;height:{{heightImg}}rpx"/>                               (z:98)
      </view>
    </tui-grid-item>
  </tui-grid>
</block>

<view class="quiz-volume">                                                                (z:105)
  <image bindtap="handleClickAudio" class="volume-icon"
         src=".../icon/voice_play.png"/>                                                  (z:106-108)
</view>

<!-- 底部弹窗：卡片单词详情 -->
<tui-bottom-popup bindclose="hideModal" maskZIndex="1001" show="{{modalWord}}" zIndex="1002"> (W:165, z:109-113)
  <view class="tui-popup-scroll">
    <view class="tui-banner-item">                                                        (z:114)
      <image class="tui-word-image" mode="heightFix" src="{{pop_card.img}}"
             style="height:660rpx"/>                                                      (z:115-118)
    </view>
    <view class="tui-pro-titbox">                                                         (z:120)
      <view bindtap="clickCardAudio">
        <tui-icon color="#ff9b6a" name="news-fill" size="68" unit="rpx"/>                 (z:121-124)
        <text class="text-center"> {{pop_card.title}}</text>                              (z:125-126)
      </view>
      <view bindtap="clickCardAudioZh">
        <tui-icon color="#ff9b6a" name="news-fill" size="68" unit="rpx"/>                 (z:128-131)
        <text> {{pop_card.title_zh}}</text>                                               (z:134)
      </view>
    </view>
  </view>
</tui-bottom-popup>

■ 完成态（isFinish==true，W:9-111）
<view class="huanhu">                                                                     (z:21, fixed 右上)
  <image bindtap="switch_huanhu" class="icon-huanhu"
         src="{{isHuanhu ? .../icon/voice_on.png : .../icon/voice_off.png}}"/>            (z:22-24)
</view>
<view class="margin-top text-center">                                                     (z:25)
  <view class="padding text-xl text-bold title-display">                                  (z:26)
    <image wx:if="{{passRate==100}}" class="icon-yanhua" src=".../icon/yanhua.png"/>      (z:20, z:28-29)
    <text class="{{passRate==100?'text-red':''}}">测验结果：通过率 {{passRate}}%</text>     (z:30-31, a=11 拼接)
    <image wx:if="{{passRate==100}}" class="confetti-gif" mode="aspectFit"
           src=".../gif/Trophy.gif"/>                                                     (z:36-38, 条件复用 z:20)
  </view>
</view>
<view wx:for="{{dataList}}" wx:for-item="item" wx:for-index="index">                      (z:39)
  <tui-collapse bindclick="change" current="{{item.current}}" index="{{index}}">          (z:41-43)
    <view slot="title" class="tui-rate-container">                                        (z:45)
      <tui-rate current="{{item.star}}" disabled="true" quantity="3" size="36"/>          (z:46-49)
    </view>
    <view slot="content">
      <view class="tui-title">{{item.num}} 次</view>                                      (z:50-51)
      <view class="tui-content">
        <view wx:for="{{item.list}}" wx:for-item="citem">                                 (z:53-54)
          <tui-list-cell bindtap="showCardsList"
                         data-index="{{index}}" data-title="{{citem}}"/>                  (z:57-60)
        </view>
      </view>
    </view>
  </tui-collapse>
</view>
<view class="margin-top-xl">
  <button class="bg-macron" open-type="share" style="width:50%">邀请朋友一起测</button>     (z:61-65, openType 属性)
</view>
<view class="margin-top-xl">
  <button class="again" bindtap="again">再测一遍</button>                                   (z:66-70)
</view>
<view class="margin-top-xl margin-bottom-xl text-center">
  <button class="back bg-blue" bindtap="back">返回首页</button>                             (z:72-76)
</view>
```

### 状态分支
- 根条件 `isFinish`（z:19，W:9 vs W:112）分两态：答题态（steps 进度条 + 双列卡片网格 + 重播按钮 + 底部弹窗）与完成态（欢呼开关 + 通过率头部 + 星级折叠面板×3 + 三个按钮）。
- 答题态内 `isPad==false`（z:81）双分支：手机端 `cu-list.grid.col-2` 平铺 view；平板端 `tui-grid`（cell=2）+ `tui-grid-item`，image 加 `tui-grid-img` 类与 lazyLoad。两分支动画类均为 `index==clickIndex ? animation : ''` 三目（z:90 / z:101 同构）。
- `passRate==100`（z:20）条件追加：icon-yanhua 烟花图 + text-red 红色文字 + confetti-gif 奖杯 GIF（z:36-38）。
- 欢呼图标 src 由 `isHuanhu` 三目切换 voice_on.png / voice_off.png（z:24）。
- 分享按钮为 `open-type="share"`（z:63），非 bindtap。

## 2. 样式规格

来源：X=unpacked/wxss_out/pages__cardTest__cardTest.wxss（唯一命中：`ls wxss_out | grep -i cardTest` → pages__cardTest__cardTest.wxss；W:360 setCssToHead 内嵌同一份样式，[0,N] 数值即 px，与 wxss 文件一致；共 374 行）。数值直接当 px，不除 2。

| 类名 | 关键样式 | 用途 | 证据(X:) |
|---|---|---|---|
| .container | box-sizing:border-box; padding:10px 0 60px | 页面容器 | 1 |
| .huanhu | position:fixed; right:8px; top:8px | 欢呼开关悬浮钮 | 2 |
| .icon-huanhu | height:30px; width:30px | 开关图标 | 3 |
| .title-display | flex 居中 | 结果标题容器 | 4 |
| .icon-yanhua | height:50px; width:50px | 烟花图 | 5 |
| .quiz-volume | margin-top:5px; width:100%; z-index:1 | 重播按钮容器 | 6 |
| .quiz-volume,.volume-bg | height:54px; flex 居中 | — | 7 |
| .volume-bg | background:#5677fc; border-radius:50%; opacity:.7; width:54px | 音量底圈 | 8 |
| .volume-icon | height:54px; width:54px; z-index:999 | 重播图标 | 9 |
| .header | padding:40px 45px 30px | 头部（组件样式） | 10 |
| .title | color:#333; font-size:17px; font-weight:500 | 组件标题 | 11 |
| .sub-title | color:#7a7a7a; font-size:12px; padding-top:9px | 组件副标题 | 12 |
| .tui-rate-container | background:#fff; font-size:15px; margin:15px 15px 0; padding:20px | 星级容器 | 13 |
| .tui-title | font-size:24px; margin-left:90px | 「n 次」文案 | 14 |
| .bg-macron | background-color:#ff9b6a | 分享按钮底色 | 全局（page-frame.html，`--macron:#ff9b6a`；页面 wxss 无定义，对账修正） |
| .tui-grid-img | margin:0 auto; text-align:center | 平板网格图 | 38 |
| .tui-banner-item | flex 居中 flex-column | 弹窗图容器 | 21-22 |
| .tui-pro-titbox | font-size:16px; font-weight:500; padding:0 15px; flex | 弹窗词条行 | 49 |
| .tui-popup-scroll | font-size:13px; height:auto | 弹窗滚动区 | 279 |
| .confetti-gif | height:120px; width:120px; position:absolute; pointer-events:none; z-index:5 | 奖杯撒花 GIF | 374 |

注：`.tui-word-image` 在页面 wxss 无单独定义（组件内样式，X 依据包明示）。
依赖的全局类（ColorUI / ThorUI，来自 page-frame 侧全局样式与 X:15-373 约 300+ 行 tui-* 组件库样式）：`.margin-top(-xl/-bottom-xl)` / `.text-center` / `.text-xl` / `.text-bold` / `.text-red` / `.padding` / `.cu-list` / `.cu-card` / `.cu-item` / `.grid` / `.col-2` / `.bg-blue` / `.bg-macron`。

## 3. 事件与逻辑

来源：A:187（压缩单行，行内函数名定位）。

### Page data 初始值（A:187）
`isPad:!1, isFinish:!1, isHuanhu:!0, curList:[], passList:[], passRate:0, modalWord:!1, animation:'', star:1, dataList:[{current:-1,star:3,num:0,list:[]},{current:-1,star:2,num:0,list:[]},{current:-1,star:1,num:0,list:[]}], items:[], activeSteps:-1`
实例属性：level, card_id, card_title, card_index, cover, daka_current=-1, wordsList, wrongWords, clickTimes=0, cur_title, cur_index。

### onLoad 参数（A:187）
`t.daka_current`→parseInt 存 daka_current；`t.level`→level；`t.id`→card_id；`t.index`→card_index。随后依次 initSystemUI()、initAudio()、getCardList(level,id)、getWordsList()。

### 事件表

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| 卡片点击 | click | 800ms 防抖（模块级 o 标志），停音频；dataset.index/id；点对→activeSteps+1、按 clickTimes 定星级、showAnimation 'animation-scale-up'；点错→'animation-shake'+playWrong() | （间接，见 countResult） | cur_index/activeSteps/animation/clickTimes |
| 重播标题音 | handleClickAudio | playAudioTitle 重播当前题读音 | — | — |
| 折叠面板点击 | change | 切换 dataList[index].current | — | dataList |
| 词条点击 | showCardsList | 按 data-title 在卡片 list 匹配，setData pop_card={img,title,title_zh}，modalWord=true | — | pop_card/modalWord |
| 弹窗关闭 | hideModal | modalWord=false | — | modalWord |
| 弹窗播英文 | clickCardAudio | img.replace('.jpg','.mp3') encodeURI 播放 | — | — |
| 弹窗播中文 | clickCardAudioZh | '.jpg'→'0.mp3' 播放 | — | — |
| 欢呼开关 | switch_huanhu | toggle isHuanhu，toast「欢呼声开启/关闭」，wx.setStorageSync('setting') 持久化；getSettingStorage 读回 | — | isHuanhu + storage |
| 再测一遍 | again | 重置答题态重新出题（A:187） | — | curList/passList 等 |
| 返回 | back | 页面栈长度 1→wx.reLaunch /pages/index/index；否则 navigateBack delta:2 | — | — |
| 分享 | onShareAppMessage/onShareTimeline | title「我的RAZ测验是{passRate}分，邀请你一起测」，path/query `id={card_id}&level={level}`，imageUrl=cover（getCardList 中 cover.replace('.jpg','0.jpg')） | — | — |

### 云函数调用清单（4 个云函数 / 9 处调用，A:187，grep 'name:"..."' 输出）

| # | 云函数 | tag | 触发条件 | 参数 |
|---|---|---|---|---|
| 1 | updateUserPlan | quiz | checkPlanQuiz：globalData.plan_id 非空且 daka_current>=0，且 user_plan.list[daka_current] 中找到 card_id | {baby_id, current(daka_current), task_index, value:passRate, quizResult:dataList} |
| 2a | updateUserData | cardQuizAdd | updateCardQuiz：当日无记录 | 含 level/card_id/title/rate/cover/dataList/年月日/time；成功后置 todayDataExist 且调 updateTotalDays |
| 2b | updateUserData | cardQuizPush | 当日有记录但无该 cardQuiz；user_data where {baby_id,date,cardQuiz:elemMatch({id:card_id})} | push 新 cardQuiz |
| 2c | updateUserData | cardQuizNumUpdate | 当日已有该 cardQuiz | 更新 rate/dataList |
| 3a | updateUserStudy | monthDaysAdd | updateTotalDays：user_study.month_days elemMatch 当日 date 无记录时 | 当日记录 |
| 3b | updateUserStudy | wordsAddQuiz | updateUserStudyQuiz：user_study.quiz elemMatch {word,level} 无记录时记错词 | word/img/audio_en/level |
| 3c | updateUserStudy | collectWord | collectWord：words_collect elemMatch {name} 无记录时收藏 | 附 timestamp |
| 4a | updateUserQuiz | newLevelPass | updateUserLevelPass：user_study where {baby_id,'<level>.id':card_id} 无记录 | 含 card_index |
| 4b | updateUserQuiz | updateLevelPass | 有记录但 '<level>.pass' 无 elemMatch('card_id-card_index') | 追加 pass 记录 |

### 云数据库集合（A:187 末尾 getDatabaseLevel）

- 动态卡片集合映射：level A→AL, B→BL, C→CL, D→DL, E→EL, F→FL, G→GL, H→HL, I→IL, J→JL, K→KL，默认 'AA'。
- 静态集合：words（getWordsList，where name in 卡片 words 字段）、user_data、user_plan、user_study。卡片集合 field 取 cover/title/list 与 words。

### 计算规则（必须精确到边界）

- 出题 getCurList/getIndex（A:187）：从 d=list 随机取题（跳过 passList 已有 id），正确项 + 3 个随机干扰项（getIndex 递归去重）共 4 项；按随机数 s 三段（<25 / <50 / <75）交换打乱正确项位置；500ms 后 playAudioTitle 播标题读音。
- 星级（A:187 click）：按同一题点击次数 clickTimes 定星——1 次=3 星 playGood(3)，2 次=2 星 playGood(2)，≥3 次=1 星 playGood(1)。
- 计分 countResult（A:187）：passList.push({id,title,star})；3 星→dataList[0] 且 updateUserLevelPass；1-2 星→dataList[1]/dataList[2]，且 checkWordOfTitle（标题含 wordsList 词名或 include 词→wrongWords 去重后 updateUserStudyQuiz）。
- 通过率：全部完成后 `passRate = ceil(100 × dataList[0].num / n)`（n=list 长度，即三星题数/总题数向上取整）；500ms 后 isFinish=true；满 100 且 isHuanhu→playHuanhu；随后 updateCardQuiz + checkPlanQuiz。
- 平板适配 initSystemUI（A:187）：wx.getWindowInfo，screenHeight/screenWidth<1.5（15>floor(10*h/w)）→isPad=true；heightImg=1.5*(w/2-24*i)*i（i=750/w）。

### 依赖模块（A:187）
`../../@swc/runtime/_define_property`、`../../A2AAD201BB058EAFC4CCBA0673FF56F4.js`（s.formatHour）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 题目/词条英文音 | 卡片图 img 路径 `.jpg`→`.mp3`（encodeURI 后播放） | A:187 playAudioTitle/clickCardAudio | ⚠️ 待真机验证（CDN 可能 404） |
| 词条中文音 | 同路径 `.jpg`→`0.mp3`（中文读音后缀 0） | A:187 clickCardAudioZh | ⚠️ 待真机验证 |
| 答题反馈音 | perfect/good/great.mp3（3/2/1 星）、wrong.mp3、try-again.mp3、huanhu.mp3 | A:187 playGood/playWrong/playHuanhu | ⚠️ 待真机验证 |
| 反馈音域名 | 均在 tcb 云存储 `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/` 下 | A:187 | 样本 6 个文件名，未见逐条可达性验证 |
| 图标（W 侧） | `https://qianyufang.top/public/yingyu/images/icon/` 下 voice_on.png / voice_off.png / yanhua.png / voice_play.png；gif 子目录 Trophy.gif | W:18-135（z:24/28/108/38） | 样本 5 个，待真机验证 |
| 分享封面 | cover.replace('.jpg','0.jpg')（与中文音后缀同规律） | A:187 getCardList | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

- 答题态底部弹窗 tui-bottom-popup（W:165，z:109-113）：show=modalWord，maskZIndex=1001 / zIndex=1002，bindclose=hideModal；内容为卡片大图（heightFix 660rpx）+ 英文行（clickCardAudio）+ 中文行（clickCardAudioZh），tui-icon news-fill #ff9b6a 68rpx。
- 完成态三档折叠面板：dataList[0]=3 星档 / [1]=2 星档 / [2]=1 星档，tui-rate 显示 item.star、quantity=3、size=36、disabled；面板内容「{item.num} 次」+ 该档错题列表（tui-list-cell，data-title=citem 点击回弹窗）。
- 通过率满分彩蛋：yanhua.png 烟花图 + text-red + Trophy.gif 撒花（z:20/36-38），且 isHuanhu 开启时播 huanhu.mp3（A:187）。
- 欢呼开关悬浮于完成态右上（.huanhu fixed，X:2），状态持久化到 storage key 'setting'（A:187）。

## 6. 对账记录（对账员填写）

对账时间：2026-10-01。对账员独立重推：仅依据 unpacked/ 原文（chunk_30.webview.js / chunk_30.appservice.js / wxss_out/pages__cardTest__cardTest.wxss / app-config.json / app-service.js）与本 spec 逐项 diff，未读蒸馏过程。

- [x] 节点树与原文一致（注意 A:1-185 冗余 $gwx_XC_24 副本，以 W 侧为准）
- [x] 类名抽查 20 处全中（页面 wxss 17 处 + 全局 2 处 + 组件内 1 处，见 diff 摘要 2）
- [x] 文案逐字一致（「测验结果：通过率」「邀请朋友一起测」「再测一遍」「返回首页」「{item.num} 次」全部命中原文，见 diff 摘要 3）
- [x] 事件与云函数调用清单齐全（4 云函数 9 处全部命中原文，事件函数 12 个全部在 A:187 定义，见 diff 摘要 4）
- diff 摘要：

### 1. 节点树核对（PASS）

- 依据包实际执行：`grep -l "'./pages/cardTest/cardTest.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_30.webview.js；`grep -n '\$gwx_XC_24' unpacked/chunk_30.webview.js` → W:1 定义、W:14 `var z=__WXML_GLOBAL__.ops_set.$gwx_XC_24`、W:137-138 ops_set/ops_init。冗余副本确认存在：A 侧（chunk_30.appservice.js:1）亦有 `$gwx_XC_24` 定义，节点树按 spec 约定以 W 侧为准。
- 用 node 重放 W:18-135 的 Z(...) 序列还原常量表 z[0..115]（每个 z 下标 i 对应原文行 W:19+i），与 spec §1 标注的 z 下标逐一对拍：
  - 根条件 z:0=`isFinish`（W:19）双分支，W 侧 m0 else 分支（eLPB.wxVkey=2）为完成态、if 分支为答题态，与 spec「W:9 vs W:112」分支方向一致。
  - 完成态逐点命中：z:2-5（huanhu/switch_huanhu/icon-huanhu/isHuanhu 三目 voice_on/voice_off）、z:6-7（margin-top text-center / padding text-xl text-bold title-display）、z:8-10（icon-yanhua+yanhua.png）、z:11（text-red 三目）、z:12=`[11,['测验结果：通过率 ',passRate,'%']]`、z:17-19（confetti-gif/aspectFit/Trophy.gif）、z:20-24（dataList for + change + item.current）、z:25-30（slot title/tui-rate-container/tui-rate disabled true quantity 3 size 36）、z:31-32（tui-title + `[11,[item.num,' 次']]`）、z:36-40（tui-content + citem for + showCardsList data-index/data-title）、z:42-56（三按钮：bg-macron+share+width:50%+邀请朋友一起测 / again+再测一遍 / back+bg-blue+返回首页，style 均为 width:50%;）。
  - 答题态逐点命中：z:58-61（tui-steps activeSteps/items/spacing 180rpx/type 2）、z:62（isPad==false）、z:63-74（cu-list grid col-2 + curList for + click + cu-card + item.id/index + cu-item text-center + index==clickIndex 三目 animation + aspectFill + img + heightImg rpx）、z:77-85（tui-grid + cell=2 + tui-grid-item + view click + tui-grid-img + lazyLoad + aspectFit）、z:86-89（quiz-volume/handleClickAudio/volume-icon/voice_play.png）、z:90-93（tui-bottom-popup hideModal 1001 modalWord 1002）、z:94-99（tui-popup-scroll/tui-banner-item/tui-word-image/heightFix/pop_card.img/height:660rpx）、z:100-107（clickCardAudio + #ff9b6a news-fill 68 rpx + text-center + `[' ',pop_card.title]`）、z:108-115（clickCardAudioZh 同构 + pop_card.title_zh）。
  - 结构差异修正：spec §1 答题态 image 写 mode="aspectFill"，但平板分支（isPad 真分支）实际为 z:84=`aspectFit`（W:259 `_mz(z,'image',['class',82,'lazyLoad',1,'mode',2,..])` 引 z:84）——spec §1 第 50-51 行未标出该差异（手机分支 aspectFill 正确，平板分支应为 aspectFit）。已按原文更正 spec §1（见下）。
- 结论：节点树与 W 侧原文一致（含上述 1 处 spec 措辞修正，非原文偏差）。

### 2. 类名抽查核对（20 处全中，PASS）

命令：`grep -n "^\.类名" unpacked/wxss_out/pages__cardTest__cardTest.wxss`（逐类执行）+ `grep -o "bg-macron{[^}]*}"` 全树检索。X 行号经核对与 spec §2 表一致：

| 类名 | spec 关键样式 | 原文（X:行号） | 结果 |
|---|---|---|---|
| .container | padding:10px 0 60px | X:1 | ✓（另有 X:223 `padding-bottom:env(safe-area-inset-bottom)` 覆写，spec 未列，非偏差） |
| .huanhu | fixed right:8px top:8px | X:2 | ✓ |
| .icon-huanhu | height:30px width:30px | X:3 | ✓ |
| .title-display | flex 居中 | X:4 | ✓ |
| .icon-yanhua | 50px×50px | X:5 | ✓ |
| .quiz-volume | margin-top:5px width:100% z-index:1 | X:6 | ✓ |
| .quiz-volume,.volume-bg | height:54px flex 居中 | X:7 | ✓ |
| .volume-bg | #5677fc border-radius:50% opacity:.7 54px | X:8 | ✓ |
| .volume-icon | 54px×54px z-index:999 | X:9 | ✓ |
| .header | padding:40px 45px 30px | X:10 | ✓（另有 box-sizing:border-box） |
| .title | #333 17px 500 | X:11 | ✓ |
| .sub-title | #7a7a7a 12px padding-top:9px | X:12 | ✓ |
| .tui-rate-container | #fff 15px margin:15px 15px 0 padding:20px | X:13 | ✓（另有 justify-content:space-between） |
| .tui-title | 24px margin-left:90px | X:14 | ✓（X:157 另有一份 .tui-title{color:#888;font-size:14px;padding:5px 0;width:100%}，为组件库样式段，spec 取 X:14 页面语义正确） |
| .bg-macron | background-color:#ff9b6a | 页面 wxss 无定义；全局 page-frame.html：`bg-macron{background-color:var(--macron);color:var(--white)}` 且 `--macron:#ff9b6a` | ✓（spec 归入全局类正确，但 spec §2 表将其行号标为 X:31 有误——实际不在页面 wxss，已修正） |
| .tui-grid-img | margin:0 auto text-align:center | X:38 | ✓（另有 vertical-align:middle） |
| .tui-banner-item | flex 居中 flex-column | X:237 | ✓（flex 居中成立；无 flex-column 属性，spec 括注「flex-column」为冗余描述，样式数值本身无偏差） |
| .tui-pro-titbox | 16px 500 padding:0 15px flex | X:49 | ✓ |
| .tui-popup-scroll | 13px height:auto | X:279 | ✓ |
| .confetti-gif | 120px×120px absolute pointer-events:none z-index:5 | X:374 | ✓ |

补充：`.tui-word-image` 在页面 wxss 确无独立规则（`grep -n "\.tui-word-image" X` 无命中），与 spec §2 注一致（组件内样式）。

### 3. 文案逐字核对（PASS）

| spec 文案 | 原文出处 | 结果 |
|---|---|---|
| 测验结果：通过率 {passRate}% | z:12（W:31）`[11,[3,'测验结果：通过率 '],[[7],[3,'passRate']],[3,'%']]` | ✓ 逐字（「通过率」后有一空格） |
| 邀请朋友一起测 | z:46（W:65） | ✓ 逐字 |
| 再测一遍 | z:51（W:70） | ✓ 逐字 |
| 返回首页 | z:56（W:75） | ✓ 逐字 |
| {item.num} 次 | z:32（W:51）`[11,[[6,item,num]],[3,' 次']]` | ✓ 逐字（「次」前有一空格） |

### 4. 事件与云函数清单核对（PASS）

- 节点树事件绑定（z 表 + m0）：click(z:66/78)、handleClickAudio(z:87)、change(z:22)、showCardsList(z:38)、hideModal(z:90)、clickCardAudio(z:100)、clickCardAudioZh(z:108)、switch_huanhu(z:3)、openType=share(z:44)、again(z:48)、back(z:53)——与 spec §3 事件表 11 项一一对应。
- A:187 侧验证：12 个事件处理函数（click/handleClickAudio/change/showCardsList/hideModal/clickCardAudio/clickCardAudioZh/switch_huanhu/again/back/onShareAppMessage/onShareTimeline）在 A:187 中全部有定义。
- 云函数清单：`grep -o 'name:"[a-zA-Z]*"' unpacked/chunk_30.appservice.js | sort | uniq -c` → updateUserPlan×1、updateUserData×3、updateUserStudy×3、updateUserQuiz×2，合计 4 个云函数 9 处调用，与 spec §3 表（1/2a-2c/3a-3c/4a-4b）完全一致。
- 集合映射（getDatabaseLevel）：AL/BL/…/KL + 默认 AA、words、user_data、user_plan、user_study 均在 A:187 命中。

### 5. 对账中发现的 spec 修正（已改回 spec 正文）

1. §1 平板分支 image 的 mode：原文为 aspectFit（z:84，W:104），spec 原写 aspectFill——已更正 spec §1 第 50 行（tui-grid 分支改为 `mode="aspectFit"`，手机 cu-list 分支保持 aspectFill z:72/W:91 不变）。同时原文平板分支 image 有 lazyLoad（z:83/W:259），spec 已写，保持。
2. §2 .bg-macron 证据行号：页面 wxss 无该规则，实际来自 page-frame.html 全局（`--macron:#ff9b6a`），spec 原标「X:31」——已修正为全局来源。
3. 其余各项（节点树结构、事件、文案、样式数值、配置、云函数清单）与原文无偏差。

对账结论：**PASS**（4/4 项通过，2 处 spec 证据标注已按原文修正）。

---

## 遗留问题（蒸馏工备注）

1. **captures 对账未做**：本 ask 依据包明示「captures/ 样本未在本 ask 范围内核对，数据结构结论仅来自代码」——dataList/passList/cardQuiz 等结构需与 captures/collections/*.jsonl 对账后方可冻结。
2. **云函数体不在本 chunk**：updateUserData 等具体实现属云侧代码，本仓未见云函数源码目录；tag 语义（cardQuizAdd/Push/NumUpdate 等）均来自调用侧参数推断。
3. **组件 props 语义未逐一验证**：tui-collapse/tui-rate/tui-steps/tui-bottom-popup 的 props 来自调用侧传参推断，组件实现未打开（依据包明示超出范围）。
4. **again 函数细节**：依据包仅给出「重置答题态」概述，未展开重置字段全清单，对账时建议补验。
5. **资源可达性**：所有音频/图标/分享封面路径均为规律推断，按仓库规范标记 ⚠️ 待真机验证（用户侧 CDN 探测报告 audit/ 已有 24/24 可达结论可参考，但未覆盖本页全部文件名）。
6. **usingComponents 位置**：内嵌于 app-service.js 的 cardTest.json 而非 app-config.json page 字段（依据包已提取解析成功，非阻塞）。
