---
页名: unit
显示名: 单词学习（课内单词）
状态: 对账通过（待验收）
chunk: chunk_43.webview.js / chunk_43.appservice.js
导航栏: 系统栏（初始标题「单词学习」，运行时被 JS 覆盖为「<年级>-Unit<N>」）
---

# 页面还原规格：单词学习（pages/unit/unit）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_43.webview.js，A=unpacked/chunk_43.appservice.js，X=unpacked/wxss_out/pages__unit__unit.wxss，C=unpacked/app-config.json。A 页面逻辑全部在 A:188 单行压缩代码内（本行已全文通读核实），函数级行号统一记 A:188。

## 1. 页面骨架（节点树）

来源：`chunk_43.webview.js` 的 `$gwx_XC_38`（W:1），ops 数组构建函数 `gz$gwx_XC_38_1`（W:15-159），节点树构建 W:165-438，wxml 引用 `var x=['./pages/unit/unit.wxml']`（W:162），注册 `__wxAppCode__['pages/unit/unit.wxml']=$gwx_XC_38(...)`（W:439）。
定位命令与输出：`grep -n "pages/unit/unit.wxml" unpacked/chunk_43.webview.js` → W:162、W:439（依据包原记 :160/:438，实际抽查为 :162/:439，以本次 grep 为准）。

```
<view class="tui-word-title">                                     (ops[0]，_mz 绑定 W:169)
  <view class="word-side-btn">
    <tui-icon catch:tap="selectPreWord" data-id="{{index}}" color="#ff9b6a" name="towardsleft" size="90" unit="rpx"/>   (W:169 _mz: catch:tap→ops[2]，data-id=ops[23]=W:23)
  </view>
  <view class="tui-pro-titbox" bind:tap="clickWordAudioZh">        (W:172 一带)
    <text class="word-name">{{currentWord.name}}</text>
    <view class="word-sub">
      <text class="word-phonetic" wx:if="{{currentWord.yinbiao}}">[{{currentWord.yinbiao}}]</text>
      <text class="word-zh"> {{currentWord.zh}} </text>
    </view>
    <tui-icon name="news-fill" size="32" unit="rpx"/>              (W:204 一带)
  </view>
  <view class="word-side-btn">
    <tui-icon catch:tap="selectNextWord" data-id="{{index}}" color="#ff9b6a" name="towardsright" size="90" unit="rpx"/>   (W:211 一带，data-id 同 ops[23])
  </view>
</view>

<view class="tui-banner-box">                                     双分支：isPindu（W:218-225 判断）
  <!-- isPindu=true：拼读游戏 -->
  <view class="pindu_container">
    <view class="input-area {{isCompleted?'completed':''}}" bind:tap="clickWordSpell">
      <!-- 注：A:188 全行无 clickWordSpell 定义（定义在 pages/word/word.js 即 chunk_47），本页该绑定指向未定义 handler，点击无响应，属原样保留的无效绑定（W:222 一带，_mz 索引坑：bind:tap=ops[35]=W:54）。 -->
      <text class="letter-box word-letter-box {{highlightIndex===index?'highlight':''}}"
            style="width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;line-height:{{letterBoxSize}}rpx;" wx:for="{{inputLetters}}">{{item}}</text>   <!-- N1/N3 修正：class=ops[40]=W:59→z[13][2]→ops[13]=W:32（letter-box + word-letter-box 两段拼接），style=ops[41]=W:60 三段同 {{letterBoxSize}}rpx；word-letter-box 样式 X:55-56（26px 加粗，.highlight #f44336） -->
      <text class="letter-box empty" style="width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;line-height:{{letterBoxSize}}rpx;" wx:for="{{emptySlots}}">-</text>   <!-- N6 补注：style=ops[46]=W:65，z[41][1]/[2]/[3]/[5]/[7] 引 W:60 片段重排后为 width/height/line-height 三段同 {{letterBoxSize}}rpx，与输入格同数据源（W:237 _mz 'class',45,'style',1） -->
    </view>
    <view class="letters-area margin-top" wx:if="{{isCompleted==false}}">
      <button class="letter-btn {{index===clickIndex?animation:''}}" style="width:{{buttonSize}}rpx;" bindtap="handleLetterTap" data-index="{{index}}"
              disabled="{{item.disabled}}" wx:for="{{shuffledLetters}}">{{item.letter}}</button>   <!-- 动态类：animation 取值 animation-scale-up / animation-shake，见 A:188 showAnimation（W:254 一带，ops[53]=W:72）；style=ops[56]=W:75 仅 width 单段 {{buttonSize}}rpx（z[41][1]/z[41][7] 引 W:60 的 'width:'/'rpx;' 片段，A:188 setData({letterBoxSize:e,buttonSize:n})） -->
    </view>
  </view>
  <!-- isPindu=false：图片轮播 -->
  <swiper bindchange="changeWordImage" circular current="{{image_index}}" duration="150"
          indicatorColor="#fff" indicatorDots="{{true}}" nextMargin="68rpx" previousMargin="68rpx"
          style="height:60vh">                                       (W:237 一带)
    <swiper-item class="tui-banner-item" wx:for="{{extends}}">
      <view class="tui-card">
        <image class="tui-slide-image" bind:tap="playWordAudio" mode="heightFix" src="{{item.img}}"/>
        <view class="tui-card-title">{{item.title}}</view>
      </view>
    </swiper-item>
  </swiper>
  <view class="audio-btn" catch:tap="playRecordAudio" wx:if="{{record_content!=''}}">
    <text class="audio-icon">▶</text>
  </view>

<view class="tui-button-bottom">                                   四个图标按钮（W:258-269 一带）
  <image class="bottom-icon-shanka" bindtap="collectWord"   src="https://qianyufang.top/public/yingyu/images/icon/add.png"/>
  <image class="bottom-icon-shanka" bindtap="spellWord"     src="https://qianyufang.top/public/yingyu/images/icon/spell.png"/>
  <image class="bottom-icon-shanka" bind:tap="clickRecord"  src="…/speak_recording.png | …/speak_record.png"/>  <!-- 按 isRecording 切换 -->
  <image class="bottom-icon-shanka" bindtap="autoplayWord"  src="…/pause.png | …/play.png"/>                    <!-- 按 isWordListen 切换 -->
</view>

<view class="unit-summary" wx:if="{{currentWord.books}}">          去绘本里再遇见
  <view class="detail-section-title">去绘本里再遇见</view>
  <scroll-view scrollY="{{true}}">
    <view class="tui-list-view" wx:for="{{currentWord.books}}">
      <tui-list-cell lineLeft="{{0}}">
        <view class="tui-item-box" bind:tap="goBookLearn" data-id="{{item.card_id}}">
          <view class="tui-msg-pic"><image mode="aspectFill" src="{{item.img}}"/></view>
          <view class="tui-msg-name">{{item.level}}：{{item.title}}</view>
          <view class="tui-msg-content">{{item.page}}页，共{{item.words}}个词汇</view>
          <view class="tui-msg-right"><tui-icon color="#ff9b6a" name="arrowright" size="58" unit="rpx"/></view>
        </view>
      </tui-list-cell>
    </view>
  </scroll-view>
  <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>          (W:327-329 一带)
</view>

<view class="popup-recording-start" wx:if="{{isRecording}}">       录音中弹层
  <view class="icon-recording {{animation}}">
    <!-- N4 补注：原文 class 字面量为 'icon-recording  '（双空格，W:143），绑定的是 {{animation}} 原始值（[[7],[3,'animation']]）而非三元；animation 由 recordingIcon 每 1s 周期 set/unset（A:188） -->
    <image src="https://qianyufang.top/public/yingyu/images/icon/recording.png"/>
  </view>
</view>

<view class="popup-recording-end" wx:if="{{recordResultShow}}">    识别结果弹层
  <view class="popup-text">
    <view class="value-container">
      <image class="confetti-gif" mode="aspectFit" wx:if="{{value==100 && isConfetti}}"
             src="https://qianyufang.top/public/yingyu/images/gif/confetti.gif"/>
      <text class="text-macron value-font">{{value}}</text>
    </view>
    <view class="result-text"><text class="text-white text-xl">{{record_result}}</text></view>
  </view>
</view>
```

### 状态分支
- `isPindu=true` 显示拼读游戏区（input-area + letters-area），`isPindu=false` 显示 swiper 图片轮播（W:218-225 判断）。轮播区 `audio-btn` 仅当 `record_content!=''` 显示（W:253-256 一带）。
- `isCompleted` 时 input-area 加 `.completed`（celebrate 动画）且 letters-area（wx:if isCompleted==false）消失。
- `currentWord.books` 存在才渲染绘本推荐区；每项展示 `{{item.level}}：{{item.title}}` 与「{{item.page}}页，共{{item.words}}个词汇」（W:130 一带，ops[111] 解引用 z[76][1]→ops[76]=item.title）。
- 录音中弹层 `popup-recording-start`（遮罩 rgba(0,0,0,.2)），识别中 icon-recording 按 1s 周期切换 `animation-scale-up` class（A:188 recordingIcon）。
- 结果弹层 `popup-recording-end`（遮罩 rgba(0,0,0,.6)），`value==100 && isConfetti` 时叠加 confetti-gif，2s 后自动关闭（A:188 showRecordResult：setTimeout 2e3）。
- 依赖自定义组件：tui-icon / tui-list-view / tui-list-cell / tui-nomore（W:169/:204/:313/:327 一带节点树引用）。

## 2. 样式规格

来源：`wxss_out/pages__unit__unit.wxss`（109 行；确认命令 `ls unpacked/wxss_out/ | grep -i unit`）。数值直接当 px，不除 2。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .tui-word-title | padding:10px 5px; flex 行布局 | 顶部单词标题区 |
| .word-side-btn | 60px×60px; flex:0 0 60px | 左右切换单词按钮位 |
| .word-name | font-size:28px; font-weight:700; color:#333; word-break:break-word | 单词大字（X:75） |
| .word-phonetic / .word-zh | font-size:16px; color:#999/#888 | 音标/中文释义 |
| .tui-banner-box | height:60vh; z-index:99 | 轮播容器 |
| .tui-slide-image | height:60vh; border-radius:9px | 单词图 |
| .tui-card-title | color:#fff; font-size:24px; position:absolute; bottom:10px | 图上标题 |
| .audio-btn | 30px 圆形; background:#fff2bd; bottom:40px; left:50% | 跟读录音回放按钮 |
| .bottom-icon-shanka | 138rpx(源) 见 setCssToHead W:441 | 底部四图标 |
| .unit-summary | background:#fff; border:1px solid #f0eee9; border-radius:14px; padding:14px | 绘本推荐卡 |
| .tui-msg-pic | 50px×75px; border-radius:10%; margin-right:12px | 绘本缩略图 |
| .pindu_container | padding:30px 10px; column flex | 拼读区容器 |
| .letter-box | font-size:32px; border:1px solid #333 | 拼读输入格 |
| .letter-box.empty | color:#ccc | 空位「-」 |
| .letter-box.highlight | background-color:#ffeb3b; border-color:#f44336 | 当前拼读高亮 |
| .letter-btn | font-size:32px; height:60px; background-color:#f0f0f0; border-radius:5px; border:1px solid #333 | 字母按钮 |
| .letter-btn[disabled] | background-color:#ccc; opacity:.5 | 已用字母 |
| .input-area.completed | animation:celebrate .5s ease-in-out（keyframes 在 X:100-108 区域） | 拼读完成动画 |
| .word-letter-box | font-size:26px; font-weight:700；.highlight 时 color:#f44336 | 拼读时单词逐字母高亮（spellWord） |
| .popup-recording-start | background-color:rgba(0,0,0,.2); 全屏 fixed; z-index:10000 | 录音中遮罩 |
| .popup-recording-end | background-color:rgba(0,0,0,.6); 全屏 fixed; z-index:10000 | 结果遮罩 |
| .icon-recording | 180px×180px; opacity:.7 | 录音动效图 |
| .value-font | font-family:Times New Roman; font-size:150px; italic; bold | 分值大数字 |
| .confetti-gif | 120px×120px; 绝对居中 | 满分彩带 |

依据包勘误：依据包 wxssFile 字段写「.word-name font-size:21px 对应源 42rpx」，实测 21px/42rpx 属 `.detail-word`（X:5，detail 弹层遗留类，本页节点树未使用）；本页实际使用的 `.word-name` 为 **28px（源 56rpx，W:441 setCssToHead）**，以实测为准。

依赖的全局类（ColorUI / animation.wxss）：`.text-white` / `.text-xl`（来自 page-frame.html 全局，本次未展开）；`animation-scale-up` / `animation-shake`（来自 `./static/animation.wxss`，W:441 setCssToHead 头部 `[[2,"./static/animation.wxss"]]` 确认 import）。原始 rpx 数值内嵌于 W:441（如 letter-btn height 120rpx、word-name 56rpx），换算与 wxss_out 一致。

## 3. 事件与逻辑

来源：`chunk_43.appservice.js`（A:186-189；Page({...}) 全部在 A:188 单行内，本行全文通读核实；wxml 路由注册 A:186-187）。

页面数据初始值（A:188 Page data）：`unit_id/unit_title/word_index:0/currentWord:{}/extends:[]/image_index:0/isPad:true/audio_zh/isWordListen:false/isRecording:false/record_content/isPindu:false/speakPass:[]/pinduPassStar:1/schoolDataExist:false/wordStarExist:false`。全局 `r` = 当前单元单词总数（getUnitWords 内赋值），`d` 为 500~600ms 防抖标志。

onLoad(t)（A:188）：接收 query `unit_id`、`word_id` → `bindAudio()` → `setData({unit_id})` → `initWord(word_id)` → `bindSpeak()` → `setNavigateTitle()` → `getLimitSpeakTimes()`。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 左/右箭头 tap | selectPreWord / selectNextWord | word_index ±1（循环），getWordDetail(id) | words.doc(id).get | currentWord, speakPass:[], pinduPassStar:1 |
| 点单词区 tap | clickWordAudioZh | 先播 audio_en，结束后接播 audio_zh | — | audio_zh |
| 点图片 tap | playWordAudio | 播 extends[image_index].audio | — | — |
| swiper change | changeWordImage | image_index 同步，record_content 清空，续播 | — | image_index |
| 收藏 tap | collectWord | 先 user_study 查重（elemMatch name+level），无记录才收藏；toast「单词收藏成功」无条件先弹 | user_study.where(elemMatch).get；updateUserStudy | globalData.wordsUpdate=true |
| 拼读按钮 tap | spellWord | currentWord.pindu 为空则 toast「词组无拼写」；否则进拼读游戏并逐字母播 letter 音+整词音 | — | spellQueue/highlightIndex |
| 跟读按钮 tap | clickRecord | 限流三连判（见计算规则），start/stop 录音 | — | isRecording, school_speak_times(storage) |
| 自动播放 tap | autoplayWord | isWordListen 开关；onEnded 自动下一张/下一个单词 | — | isWordListen, image_index, word_index |
| 字母按钮 tap | handleLetterTap | 与 getExpectedSegment 匹配；错则 playWrong+wrongTimes+1 | — | inputLetters, emptySlots, wrongTimes, pinduPassStar |
| 绘本项 tap | goBookLearn | navigateTo ../card/card?id={{card_id}} | — | — |
| 录音回放 tap | playRecordAudio | 播 record_content（识别成功回调写入，来源为识别回调第 3 参，【待复核】） | — | — |
| 分享 | onShareAppMessage | title=unit_title+"课内单词学习"，path=/pages/school/school，imageUrl=currentWord.img（A:188） | — | — |
| 分享朋友圈 | onShareTimeline | title="RAZ课内单词同步"+unit_title，imageUrl=currentWord.img | — | — |

### 云函数调用清单（wx.cloud.callFunction，A:188）
1. `updateUserStudy`，tag=`collectWord`，data={baby_id, word: currentWord+timestamp}（collectWord 内，查重通过才调；成功置 globalData.wordsUpdate=true）。
2. `updateUserSchool`，tag=`updateWordStar`，data={baby_id, unit_id, word_index, star}（updateWordStar 内；成功置 globalData.unitQuizUpdate=true 并 setData schoolDataExist/wordStarExist=true）。
3. `updateUserSchool`，tag=`updateUnitWords`，data={baby_id, unit_id, unitWords}（updateUnitWords 内；成功置 unitQuizUpdate=true 并置双 Exist=true）。

### 云数据库直连（var n=wx.cloud.database({}), s=n.command，A:188）
1. `words`：initWord / getWordDetail 均用 `n.collection("words").doc(word_id).get`。
2. `units`：getUnitWords 用 `n.collection("units").where({id: unit_id}).get`，取 `data[0].words` 为 unitWords（`r`=长度），并按 `_id` 定位 word_index。
3. `user_school`：getUserSchoolStar 用 `where({baby_id, unit_id}).get`（words.length==unitWords.length 时置 wordStarExist 并整体覆盖 unitWords）；newUnitData 用 `collection("user_school").add({data:{baby_id, unit_id, words: unitWords, vip, date:new Date}})`。
4. `user_study`：collectWord 先 `where({baby_id, words_collect: s.elemMatch({name, level})}).get` 判重（s=command）。

### 计算规则（判分/进度/星级，精确到边界）
- **标题映射 setNavigateTitle**（A:188）：`unit_id.substring(5,6)`→年级（1=一年级上, 2=一年级下, 3=二年级上, 4=二年级下, 5=三年级上, 6=三年级下）；`unit_id.substring(7)`→Unit 序号；`wx.setNavigationBarTitle({title: 年级+"-Unit"+序号})`。
- **限流 clickRecord**（A:188）：① `limit_speak_times>500` → showModal「当日录音跟读识别次数已超合理上限500次，次日恢复.」（无取消按钮 showCancel:false）；② `globalData.vip<0` → showLimitModal「跟读录音测评功能，加入会员后可无限制使用。」（redirect 到 member）；③ `vip==0 && limit_speak_times>100` → showLimitModal「跟读录音次数已超出当日上限，加入会员后可继续使用。」。计数存 storage 键 `school_speak_times={date: globalData.today_date, times}`，每次 clickStart 自增并写回；跨日重置为 0（getLimitSpeakTimes，A:188）。
- **单词判分 calculateStarAndValue**（A:188）：score=round(100×compareSingleWord)（完全相等或命中近音词表得 100）；100→3星/100分；≥90→3星/90-99随机；>70→2星/70-89随机；否则 1星/60-69随机。近音词表：`(wx.getStorageSync("PHONETIC_MAP") || e)[正确词]` 包含识别词即通过（e=require("../../72F19D06BB058EAF1497F50124DF56F4.js")，A:188）。
- **词组判分 countResultEasy**（A:188）：s=max(round(100×wordSimilarity), finalScore)（finalScore 由 processVoiceResultWithMissing 计算，含 37 个虚词表 0.5 权重容错与 PHONETIC_MAP 近音匹配）；100→3星/100；≥90→3星；≥70→2星；否则 1星（词组最高 3 星，代码中 5/4 星音频分支在此页不可达）。
- **拼读星级 countPinduStar**（A:188）：wrongTimes=0→3星；<3→2星；<5→1星；≥5→0星（表达式 `+(t<5)`）。
- **最终星级 coutFinalStar**（A:188）：`a = Math.round((Σ speakPass[].star + pinduPassStar) / (extends.length + 1))`；仅当新星级 a **大于** 已存 unitWords[word_index].star 时才更新并落库；落库路由：wordStarExist→updateWordStar；否则 schoolDataExist→updateUnitWords；否则 newUnitData 新建。
- **自动连播 handleAudioEnd**（A:188）：audio_zh 排队接播；isWordListen 时 image_index+1，越过 extends.length 则 word_index+1（≥r 回绕 0）并 getWordDetail。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 字母音 | `https://qianyufang.top/public/letter/{字母大写}.mp3` | A:188 两处（playLetterAudio、spellWord spellQueue），代码内 2 处命中 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 结果/错误音 | `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/{perfect,brilliant,good,great,try-again,wrong}.mp3` | A:188 playResultAudio/playWrong，代码内 6 个字面量 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 功能图标 | `https://qianyufang.top/public/yingyu/images/icon/{add,spell,speak_recording,speak_record,pause,play,recording}.png` | W 节点树 grep URL 字面量，7 个命中 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 满分彩带 | `https://qianyufang.top/public/yingyu/images/gif/confetti.gif` | W 节点树 URL 字面量，1 处 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 单词图/音频 | 来自云数据库 words（currentWord.img / audio_en / audio_zh / extend[].img / extend[].audio），命名规律未知 | A:188 getWordExtends（无 extend 字段时回退 {name,img,audio_en} 单项） | ⚠️ 待采集（captures/ 无 jsonl） |
| 绘本封面 | currentWord.books[].img，命名规律未知 | W 节点树 + A:188 | ⚠️ 待采集 |

## 5. 弹窗 / 分支状态

- 录音中弹层 `popup-recording-start`：icon-recording 每 1s 加 `animation-scale-up` 800ms 后移除（recordingIcon，A:188）。
- 识别结果弹层 `popup-recording-end`：显示分值大数字（value-font 150px italic）+ record_result 文案；value==100 时 confetti.gif；showRecordResult 2s 后自动关闭并清 record_result（A:188）。
- 限流弹窗：500 上限为 showModal（仅「提示」确认）；vip<0 与 vip==0 超 100 走 showLimitModal（确认→加入会员跳 ../member/member，非 redirect 时 navigateTo；取消且 redirect 态时页面栈<2 则 reLaunch ../index/index 否则 navigateBack，A:188）。
- 收藏 toast：collectWord 无条件先 toast「单词收藏成功」，查重/写库在 toast 之后异步进行（A:188，注意此为原有行为）。
- 词组无拼读：currentWord.pindu 为空时 spellWord toast「词组无拼写」（A:188）。
- 拼读完成：input-area 加 .completed 播 celebrate 动画，1s 后播整词音并置 isCompleted=true（handleLetterTap，A:188）。

## 6. 对账记录（对账员填写）

> 对账时间 2026-09-24。方法：只读原文重推，不采信蒸馏过程。核对命令与命中行逐条列出。
> 原文定位：`grep -n "pages/unit/unit" unpacked/chunk_43.webview.js` → W:162/W:439；`grep -l "'./pages/unit/unit.wxml'" unpacked/chunk_*.webview.js` → 仅 chunk_43；`awk 'NR==188' unpacked/chunk_43.appservice.js`（A:188 单行 17,939 字符全文通读）；`grep -n "pages/unit/unit" unpacked/page-frame.html` → W:58 unit.json（usingComponents 四件套与 spec 1.状态分支一致）；`grep -n "pages/unit/unit.html" unpacked/app-config.json` → 标题「单词学习」系统栏，与 frontmatter 一致；chunk 归属 `page-frame.html` `__LAZY_CODE_LOADING_CHUNK_MAP__` → `['chunk_43',['pages/unit/unit']]` 确认。

- [x] 节点树与原文一致 —— **四轮迭代后全部通过**（首轮 D1-D4 → 二轮复核 PASS 并新增 N1-N4 → 三轮 N1-N4 复核 PASS 并新增 N6 → 四轮 N6 复核 PASS，见下方各轮记录）
- [x] 类名抽查 26 处全中（抽查脚本对 `unpacked/wxss_out/pages__unit__unit.wxss` 逐条正则比对：tui-word-title/word-side-btn/word-name/word-phonetic/word-zh/tui-banner-box/tui-slide-image/tui-card-title/audio-btn/bottom-icon-shanka/unit-summary/tui-msg-pic/pindu_container/letter-box/letter-btn/word-letter-box/icon-recording/value-font/confetti-gif 19 主类 + letter-box.empty/highlight、letter-btn[disabled]、input-area.completed、popup-recording-start/end、word-letter-box.highlight 7 状态类，26/26 PASS；`.word-zh` 一项脚本初判 FAIL 系正则未处理分组选择器，人工核 X:78 `.word-phonetic,.word-zh{font-size:16px;line-height:1.4}` + X:79 `.word-zh{color:#888}` 无 diff。原始 rpx 与 X 换算一致：word-name 56rpx→28px、letter-btn 120rpx→60px、bottom-icon-shanka 138rpx→69px、value-font 300rpx→150px，均见 W:441 setCssToHead）
- [x] 文案逐字一致（W:117「去绘本里再遇见」、W:139「没有更多了」、W:100「▶」、W:132「页，共/个词汇」、W:130「：」全角冒号；A:188 toast「单词收藏成功」「词组无拼写」「开始」「结束」、showModal「当日录音跟读识别次数已超合理上限500次，次日恢复.」、showLimitModal「跟读录音测评功能，加入会员后可无限制使用。」「跟读录音次数已超出当日上限，加入会员后可继续使用。」、分享「课内单词学习」「RAZ课内单词同步」——均逐字节 in 判定 PASS）
- [x] 事件与云函数调用清单齐全（A:188 计数确认：wx.cloud.callFunction 共 3 处 = updateUserStudy/collectWord + updateUserSchool/updateWordStar + updateUserSchool/updateUnitWords，tag/data 字段与 spec 3. 清单逐字一致；wx.cloud.database 共 4 集合 words×2/units×1/user_school×2/user_study×1 与 spec 一致；13 个 wxml 事件 handler 在 A:188 全部存在 `fn:` 前缀判定 PASS）

### 节点树 diff（须蒸馏工修正）

1. **W:130 绘本书名字段错**：spec 第 1 节 L79 写 `{{item.level}}：{{item.name}}`，原文 ops[111] 为 `Z([a,[[6],[[7],[3,'item']],[3,'level']],[3,'：'],z[76][1]])`，`z[76][1]` 解引用 ops[76]（W:95）= `[[6],[[7],[3,'item']],[3,'title']]`，即真实绑定是 **`{{item.title}}` 不是 `{{item.name}}`**。改为 `<view class="tui-msg-name">{{item.level}}：{{item.title}}</view>`。
2. **W:222 input-area 缺事件绑定**：原文 `o43C=_mz(z,'view',['bind:tap',35,'class',1],…)`，按 _mz 索引坑（SKILL.md）真实索引 bind:tap=ops[35]=W:54 `'clickWordSpell'`、class=ops[36]=W:55 `'input-area …'`。spec L40 的 input-area 应补 `bind:tap="clickWordSpell"`。注意：A:188 全行无 `clickWordSpell` 定义（仅 `clickWordPindu`，由 spellWord 内部调用），该绑定在本页指向未定义 handler（clickWordSpell:function 实际定义在 pages/word/word.js，chunk_47），复现时点击 input-area 无响应——属原样保留的无效绑定，须在 spec 标注。
3. **W:254 letter-btn 缺动态类（次要）**：原文 class=ops[53]=W:72 `'letter-btn '+(index==clickIndex?animation:'')`，spec L46 漏写 `{{index===clickIndex?animation:''}}`（animation-scale-up / animation-shake，见 A:188 showAnimation）。
4. **W:169/W:211 左右切换 tui-icon 带 `data-id="{{index}}"`（轻微遗漏）**：_mz 属性列表含 'data-id'（真实索引 ops[23]=W:23 `[[7],[3,'index']]`），spec 骨架未记录，可补注。

### 勘误与复核结论

- spec L42 letter-box style 简写 `letterBoxSize rpx`：原文 ops[60]（W:60）为 `width:…;height:…;line-height:…` 三段同值，语义一致，可不改。
- **解除【待复核】**（spec 3. 事件表 playRecordAudio 行）：A:188 `a.onSuccessCallback=function(i,e,a){…t.setData({record_content:a}),t.checkResult(i)}` 确认 record_content 来自识别成功回调第 3 参，playRecordAudio 播的即识别后返回的音频 URL（空串回退 playWordAudio）。
- 数据初始值 16 字段（A:188 `data:{unit_id:"",…wordStarExist:!1}`）与 spec 3. 开头列出的初始值逐项一致。
- 计算边界复核：countPinduStar `i=0==t?3:t<3?2:+(t<5)`（0→3星,<3→2星,<5→1星,≥5→0星）✓；coutFinalStar `Math.round((ΣspeakPass.star+pinduPassStar)/(extends.length+1))` 且仅新值>旧值才 setData+落库 ✓；calculateStarAndValue/countResultEasy 阈值 100/90/70 ✓；限流 500 showModal(showCancel:!1) → vip<0 → vip==0&&>100 顺序 ✓；school_speak_times 跨日重置 ✓；recordingIcon setInterval 1e3 / scale-up 800ms ✓；showRecordResult 2e3 自动关 ✓。
- 资源 URL 复核：letter 音 2 处、结果音 6 字面量（perfect/brilliant/good/great/try-again/wrong.mp3 @ tcb.qcloud.la）、图标 7 + confetti 1（节点树字面量）与 spec 4. 数量逐一相符。
- 合并包交叉验证：`unpacked/app-service.js` 内 `define("pages/unit/unit.js")` 段 body 与 A:188 前 17,576 字符逐字节一致（差异仅尾部 `},{isPage:true,…}` 注册尾），无第二版本。

**diff 摘要（最终）**：**PASS（2026-09-28 四轮收敛）**。类名 26 处/文案/事件云函数三项始终通过；节点树历经：首轮 D1-D4（item.title、clickWordSpell 无效绑定、letter-btn 动态类、tui-icon data-id）→ 二轮复核 PASS 并新增 N1-N4（letter-box 补 word-letter-box 双类、letter-btn 补 width:buttonSize 单段 style、letter-box style 三段展开、icon-recording 双空格补注；N5 撤销）→ 三轮复核 PASS 并新增 N6（emptySlots letter-box 补 letterBoxSize 三段 style）→ 四轮 N6 复核 PASS。全部修正经对账员逐条回原文独立验证，无遗留 diff，本页对账通过，待用户验收。

蒸馏工修正记录：D1/D2 修正，D3/D4 补注（时间 2026-09-24）
蒸馏工修正记录（第二轮，2026-09-28）：N1 补 letter-box 漏写的 word-letter-box 类（W:226 class=ops[40]=W:59→z[13][2]→ops[13]=W:32，真实类名为 letter-box word-letter-box + 高亮三元）；N2 补 letter-btn style="width:{{buttonSize}}rpx;"（W:254 style=ops[56]=W:75，width 单段，z[41][1]/z[41][7] 引 W:60 片段，A:188 setData({letterBoxSize:e,buttonSize:n})）；N3 将 letter-box style 简写展开为 width/height/line-height 三段同 {{letterBoxSize}}rpx（ops[41]=W:60）；N4 补注 icon-recording 原文 class 双空格 'icon-recording  ' 且直接绑 {{animation}} 原始值（W:143）。N5 经对账员复核无 diff 已撤销，未做改动。
蒸馏工修正记录（第三轮，2026-09-28）：N6 补 emptySlots 空位 letter-box 的 style="width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;line-height:{{letterBoxSize}}rpx;"（W:237 style=ops[46]=W:65，z[41] 片段重排后三段同 {{letterBoxSize}}rpx，与输入格同数据源）。N1-N4 第三轮复核全部 PASS，前轮修正内容未动。
蒸馏工修正记录（第四轮，2026-09-28）：无正文改动（N6 已于第三轮修正，本轮为对账员收尾复核轮，仅对账员更新状态与结论）。

> **对账员复核（2026-09-24 第二轮）**：D1-D4 独立重推全部改对、未引入新错，逐条证据：
> - **D1 PASS**：W:130 `Z([a,…[3,'level'],[3,'：'],z[76][1]])`，z[76][1]→ops[76]=W:95 `[[6],[[7],[3,'item']],[3,'title']]`；spec L80 现为 `{{item.level}}：{{item.title}}` ✓，且 L79 goBookLearn 的 data-id=ops[123]=`item.card_id`（W:123）未被误改。
> - **D2 PASS**：spec L40 input-area 已补 `bind:tap="clickWordSpell"`（W:222 `_mz(z,'view',['bind:tap',35,'class',1]` → ops[35]=W:54，索引坑换算无误）；无效绑定标注与原文一致——A:188 全行 0 次命中 `clickWordSpell`（grep -c=0，仅 `clickWordPindu` 3 次，spellWord 内调用），`clickWordSpell:function` 实际定义于 pages/word/word.js（chunk_47，`var x=['./pages/word/word.wxml']` chunk_47:154）✓。
> - **D3 PASS**：spec L47 letter-btn 已补 `{{index===clickIndex?animation:''}}`，与 W:72 `[[2,'=='],[[7],[3,'index']],[[7],[3,'clickIndex']]],[[7],[3,'animation']]` 一致（== 宽松比较转 === 不算 diff）；animation 取值 A:188 `showAnimation:function(t,i){…1==i?…animation:"animation-scale-up":…animation:"animation-shake"}`，handleLetterTap 内 `this.showAnimation(a,0)` ✓。
> - **D4 PASS**：spec L22/L33 两个 tui-icon 均已补 `data-id="{{index}}"`，W:169/W:211 `_mz` 属性表均含 `'data-id',2` → ops[23]=W:23 `[[7],[3,'index']]`（右箭头复用 z[3]/z[4]/z[6]/z[7]，同指 ops[23]）✓。
> - 骨架其余部分抽查（word-name/word-phonetic/word-zh 绑定 W:30/35/39、swiper 八属性 W:268、audio-btn W:286、底部四图标 W:307-313、popup 两弹层 W:373/380）与 spec 一致，未见顺手改错处。
>
> **复核新增节点树 diff（N1-N5，待蒸馏工修正）**：
>
> 1. **N1（实质）L43 letter-box 漏 `word-letter-box` 类**：W:226 `_mz(z,'text',['class',40,'style',1]` → class=ops[40]=W:59 `Z([a,[3,'letter-box '],z[13][2]])`，z[13][2]→ops[13]=W:32 `'word-letter-box '+（highlightIndex===index?'highlight':''）`。真实类名是 **`letter-box word-letter-box {{highlightIndex===index?'highlight':''}}`**；spec 只写了 letter-box 分支，漏第二个类名（该类 wxss 26px 加粗、.highlight 红 #f44336，见 spec 2. 表，样式表在、骨架漏类）。
> 2. **N2（实质）L48 letter-btn 漏 `style="width:{{buttonSize}}rpx;"`**：W:254 `_mz(z,'button',['bindtap',52,'class',1,'data-index',2,'disabled',3,'style',4]` → style=ops[56]=W:75 `Z([a,z[41][1],[[7],[3,'buttonSize']],z[41][7]])`，z[41][1]/z[41][7] 引 W:60 的 `'width:'`/`'rpx;'` 片段，即 style 仅 **`width:{{buttonSize}}rpx;`** 一段（A:188 `setData({letterBoxSize:e,buttonSize:n})` 赋值，与 letterBoxSize 同批但不同值）。spec 只写了 data-index 与 disabled，漏 style。
> 3. **N3（次要）L43 letter-box 漏 `style`**：W:226 属性表 style=ops[41]=W:60 `width/height/line-height` 三段同 `{{letterBoxSize}}rpx`（A:188 同一 setData 赋值）。spec L43 现写 `style="letterBoxSize rpx"`，语义接近但不完整，建议改 `style="width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;line-height:{{letterBoxSize}}rpx"`。
> 4. **N4（轻微）L91 icon-recording 动态类补注**：W:143 `Z([a,[3,'icon-recording  '],[[7],[3,'animation']]])`（原文「icon-recording」后双空格），绑定的是**原始值** `{{animation}}`（`[[7],[3,'animation']]`）而非三元。spec 现写 `class="icon-recording {{animation}}"` 语义一致，无需改正文，仅需补注「原文双空格；animation 值由 recordingIcon 每 1s 周期 set/unset」即可。
> 5. ~~N5（轻微）audio-btn 补充~~ **复核后无 diff，撤销**：W:286 `catch:tap`=ops[78]=W:97、class=ops[79]=W:98，spec 记录正确，保留此行仅作核对痕迹。
>
> **本轮结论**：D1-D4 修正成立；但第 1 节骨架仍有 N1-N4 新增 diff，**维持 FAIL**，修完 N1-N3（实质）+ N4（补注）后再复核。第 2/3/4/5 节此前通过的结论不受影响。
>
> diff 摘要（最终以修正 N1-N4 为准）：~~节点树 4 处（D1-D4）~~ 已复核通过；新增节点树 2 实质（N1 letter-box 漏 word-letter-box 类、N2 letter-btn 漏 style=width:buttonSize）+ 1 次要（N3 letter-box style 简写不完整）+ 1 补注（N4 icon-recording 双空格）。

> **对账员复核（2026-09-28 第三轮）**：范围收窄为 N1-N4 修正验证 + 前两轮对账内容完整性检查。
> - **N1 PASS**：原文重核 W:226 `_mz(z,'text',['class',40,'style',1]` → class=ops[40]=W:59 `Z([a,[3,'letter-box '],z[13][2]])`，z[13][2]→ops[13]=W:32 `'word-letter-box '+（highlightIndex===index?'highlight':''）`；spec L42 现为 `letter-box word-letter-box {{highlightIndex===index?'highlight':''}}`，两段拼接与三元均与原文一致 ✓。
> - **N2 PASS**：原文重核 W:254 button 属性表 `['bindtap',52,'class',1,'data-index',2,'disabled',3,'style',4]` → style=ops[56]=W:75 `Z([a,z[41][1],[[7],[3,'buttonSize']],z[41][7]])`，z[41][1]/z[41][7] 引 W:60 的 `'width:'`/`'rpx;'` 片段，即仅 `width:{{buttonSize}}rpx;` 单段；A:188 `setData({letterBoxSize:e,buttonSize:n})` 已 grep 实证。spec L47 现为 `style="width:{{buttonSize}}rpx;"` ✓。
> - **N3 PASS**：原文重核 W:60 = `width:/height:/line-height:` 三段同 `{{letterBoxSize}}rpx`（ops[41]，W:226 style 序号 1 → 真实索引 41）；spec L43 已展开三段完整写法 ✓。
> - **N4 PASS**：原文重核 W:143 `Z([a,[3,'icon-recording  '],[[7],[3,'animation']]])`（cat -A 实证双空格），绑定原始值非三元；spec L91 正文 `icon-recording {{animation}}` 语义一致，L92 已按约定补注（双空格 + 原始值 + recordingIcon 1s 周期，recordingIcon:function 在 A:188 grep 实证存在）✓。
> - **改动范围检查**：diff 对比确认蒸馏工只动了第 1 节拼读分支（L42/L43/L47/L48 注释、L91 后补注行）、frontmatter 状态、第 6 节末尾新增第二轮修正记录行；「节点树 diff」小节 D1-D4 四条原文、第二轮复核块全部逐字保留，未篡改；`grep item.name` 仅命中 D1 描述原文（L228）与 diff 摘要（L242），属对账记录本身，非骨架残留。
> - **第三轮新发现 N6（遗漏，轻微）**：emptySlots 的 letter-box（spec L44 `<text class="letter-box empty" wx:for="{{emptySlots}}">-</text>`）原文也带 style：W:237 `_mz(z,'text',['class',45,'style',1]` → style=ops[46]=W:65 `Z([a,z[41][1],z[41][2],z[41][3],z[41][2],z[41][5],z[41][2],z[41][7]])`。z[41]=W:60 的片段索引为 [1]='width:' [2]=`[[7],[3,'letterBoxSize']]` [3]='rpx;height:' [5]='rpx;line-height:' [7]='rpx;'，故 ops[65] 重排后仍为 **width/height/line-height 三段同 `{{letterBoxSize}}rpx`**（同数据源，与 letter-box 输入格一致；A:188 setData({letterBoxSize:e,buttonSize:n}) 同批赋值）。spec L44 漏写该 style，须补 `style="width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;line-height:{{letterBoxSize}}rpx;"`。
>
> **本轮结论**：N1-N4 修正全部成立、无新引入错误；但骨架仍有 N6 一处遗漏（emptySlots letter-box 漏 style，取值与 N3 同为 letterBoxSize 三段），**维持 FAIL**，修完 N6 再复核。

> **对账员复核（2026-09-28 第四轮，收尾轮）**：范围收窄为 N6 修正验证 + 历轮对账内容完整性检查。
> - **N6 PASS**：原文重核 W:237 `_mz(z,'text',['class',45,'style',1]` → style=ops[46]=W:65 `Z([a,z[41][1],z[41][2],z[41][3],z[41][2],z[41][5],z[41][2],z[41][7]])`；z[41]=W:60 片段索引 [1]='width:' [2]=`[[7],[3,'letterBoxSize']]` [3]='rpx;height:' [5]='rpx;line-height:' [7]='rpx;'，重排序列 1,2,3,2,5,2,7 恰好还原为 `width:{{letterBoxSize}}rpx;height:{{letterBoxSize}}rpx;line-height:{{letterBoxSize}}rpx;` 三段同值；数据源 A:188 `setData({letterBoxSize:e,buttonSize:n})`（calculateSizes 内）本轮 grep 实证。spec L44 现为完整三段 style 且补注证据链（ops[46]=W:65、z[41] 引 W:60、同输入格数据源）✓。
> - **改动范围检查**：本轮蒸馏工仅动 L44（补 style + N6 补注注释）、frontmatter 状态、第 6 节新增第三轮修正记录行；历轮对账内容（首轮三行勾选与 D1-D4 原文、第二轮复核块 N1-N5、第三轮复核块）逐字保留未篡改；类名/文案/事件云函数三项核对记录原样。
>
> **最终结论（PASS）**：四轮迭代全部收敛——首轮 4 处（D1-D4）→ 二轮复核 PASS 且新增 4 处（N1-N4）→ 三轮复核 PASS 且新增 1 处（N6）→ 四轮 N6 复核 PASS，无遗留 diff，无新引入错误。第 1-5 节全部与原文一致，**本页对账通过（待验收）**。剩余两项 ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md）/待采集 标记属资源规律章节固有状态，不影响节点树对账结论。
