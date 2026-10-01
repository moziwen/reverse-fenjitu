---
页名: unitQuiz
显示名: 单元测验（课内单词同步测验）
状态: 已对账（PASS）（三轮复核通过，见 6.1 复核三轮；残留 R1-R4 已由蒸馏工修订落实）
chunk: chunk_44.webview.js / chunk_44.appservice.js
导航栏: 系统栏（JSON 默认「一年级上-Unit1测验」，运行时按 unit_id 动态覆盖为「<年级>-Unit<N>测验」）
---

# 页面还原规格：单元测验（课内单词同步测验）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 依据包来源（修订时逐条实读核对）：逻辑 chunk `unpacked/chunk_44.appservice.js`（共 176 行，全页逻辑在 :175 单行压缩体）；节点树 `unpacked/chunk_44.webview.js` 的 `$gwx_XC_39` 富树（共 628 行：ops 197 条 :19-215、m0 :221-602、注册 :625、wxss setCssToHead :627）；样式 `unpacked/wxss_out/pages__unitQuiz__unitQuiz.wxss`（129 行）。

## 1. 页面骨架（节点树，webview 富树）

来源：`unpacked/chunk_44.webview.js` 的 `$gwx_XC_39`（入口函数 :1；ops 常量表 z[0..196] 共 197 条于 gz$gwx_XC_39_1 :19-215；节点树 m0 :221-602；注册 `__wxAppCode__['pages/unitQuiz/unitQuiz.wxml']` :625；wxss setCssToHead :627）。

> ⚠️ 同页两份 $gwx 副本：`chunk_44.appservice.js:1-172` 内嵌一份**同名稀疏副本**（仅 58 条 ops，:19-57；m0 :63-156；注册 :173），无静态类名/文案。运行时 wxml 渲染以 **webview 侧富树为准**（注册在 :625）；本节全部按富树重写，稀疏副本不作为骨架依据（对账 diff ①③）。
> 备注：树引用了数据字段 `highlightIndex`（:129 拼字输入格高亮三元），但 appservice Page 中 grep 计数=0（:175 无 setData/定义），运行时恒为 undefined → 高亮分支实际不触发；还原时 class 三元保留但不要为其虚构交互。

### 1.1 根结构：`isFinish` 二分支（wx:if z[0]=`isFinish`，:19；树 :225-298 / :299-533）

**isFinish=true 结果页**（:225-297）：

```
<view class="page"(z[1])>                                   <!-- :226-227 -->
  <view class="ability-section"(z[2])>                      <!-- :228 -->
    <view class="ability-grid"(z[3])>                       <!-- :230 -->
      <!-- wx:for quizStarList（z[4]，:23；_2z 于 :269，item/index） -->
      <view bind:tap="showResult" class="ability-card ability-card-wide ability-card-weak"
            data-id="{{index}}">                            <!-- _mz :235 -->
        <view class="wide-left"(z[9])>                      <!-- :236 -->
          <view class="wide-content"(z[10])>                <!-- :238 -->
            <view class="wide-title-row"(z[11])>            <!-- :240 -->
              <text class="ability-name wide-name"(z[12])>{{item.title}}</text>  <!-- :242-244 -->
            </view>
            <view class="stars"(z[14])>                     <!-- :248 -->
              <tui-rate active="#ffbd26"(z[15]) current="{{item.star}}" disabled="{{true}}"
                        quantity="5" size="28" />           <!-- :250 -->
            </view>
          </view>
        </view>
        <!-- 内层 wx:if item.star==5（z[20]，:39；:257-263） -->
        <view class="ability-status status-mastered"(z[21])>已掌握</view>  <!-- :258-261 -->
      </view>
    </view>
  </view>
  <!-- 结果页操作区（:272-293） -->
  <view class="action-section"(z[23])>                      <!-- :272 -->
    <button class="action-button primary-button" open-type="share">  <!-- :274，openType=z[25]='share' -->
      <text class="button-icon"(z[26])>👫</text>             <!-- :275-277 -->
      <text>邀请同学一起挑战</text>                           <!-- :280-281 -->
    </button>
    <view bindtap="again" class="retry-button">再测一遍</view>        <!-- :285-287 -->
    <view bindtap="back" class="home-button">返回首页</view>          <!-- :289-291 -->
  </view>
  <view class="safe-bottom"(z[35]) />                       <!-- :294-295 -->
</view>
```

- 结果卡 `_mz` 索引：`['bind:tap',6,'class',1,'data-id',2]`（:235）→ bind:tap=z[6]=`showResult`（:25）、class=z[7]=`ability-card ability-card-wide ability-card-weak`（:26）、data-id=z[8]=`index`（:27）。
- tui-rate 属性：active=z[15]='#ffbd26'、current=z[16]=`item.star`、disabled=z[17]=true、quantity=z[18]='5'、size=z[19]='28'（:250）。
- 「已掌握」为内层 item.star==5 条件块的直读静态文案（z[22]，:41）。
- 分享按钮 openType=z[25]='share'（:274）；「再测一遍」bindtap=z[29]=`again`（:285）；「返回首页」bindtap=z[32]=`back`（:289）。

**isFinish=false 测验页**（:299-533）：

```
<view class="margin-top-xl margin-bottom text-center"(z[36])>   <!-- :300 -->
  <tui-steps activeSteps="{{activeSteps}}" items="{{items}}" spacing="180rpx" type="2" />  <!-- :302 -->
</view>
<!-- 5 个条件分支（互斥 wxVkey 1-5，:307/357/383/409/482） -->
```

- tui-steps 属性：activeSteps=z[37]、items=z[38]、spacing=z[39]='180rpx'、type=z[40]='2'（:302）。
- tui-steps 的 items 由 appservice 动态注入：默认 4 步「跟读 imvoice / 辨意 manage / 认形 enlarge / 拼写 evaluate」（data 初值，chunk_44.appservice.js:175）；units 有 sentences 时追加第 5 步「表达 community」（initSentence，:175）。

#### 1.1.1 跟读步（activeSteps==0，wx:if z[41]，:60；树 :307-353）

```
<view class="tui-banner-item"(z[42])>                            <!-- :308 -->
  <view class="tui-card"(z[43])>                                 <!-- :310 -->
    <image class="tui-slide-image" mode="heightFix"
           src="{{wordSpeakCurrent.img}}" />                     <!-- _mz :312 -->
    <view class="tui-new-label-voice"(z[47])>                    <!-- :313 -->
      <view>{{wordCur_index+1}}/{{wordsLength}}</view>           <!-- :315-317 -->
    </view>
  </view>
</view>
<view class="tui-word-title"(z[49])>                             <!-- :322 -->
  <view bindtap="clickWordFuxiTip" class="tui-pro-titbox-study-name">  <!-- :324，⚠️ 死绑定见 3.3 -->
    <text class="text-bold">{{wordSpeakCurrent.word}}</text>     <!-- :325-327 -->
  </view>
  <!-- 内层 wx:if record_content!=''（z[54]，:73；:333-341） -->
  <view catch:tap="playRecordAudio" class="audio-btn">
    <text class="audio-icon">▶</text>
  </view>
</view>
<view class="tui-button-bottom"(z[59])>                          <!-- :345 -->
  <image bindtap="playWordAudio" class="bottom-icon-shanka"
         src="https://qianyufang.top/public/yingyu/images/icon/voice.png" />   <!-- :347 -->
  <image bind:tap="clickRecord" class="bottom-icon-shanka"
         src="{{isRecording ? speak_recording.png : speak_record.png}}" />      <!-- :349，src 三元 z[65]，:84 -->
  <image bindtap="clickSpeakNext" class="bottom-icon-shanka"
         src="https://qianyufang.top/public/yingyu/images/icon/next.png" />    <!-- :351 -->
</view>
```

- 词图 _mz：`['class',44,'mode',1,'src',2]`（:312）→ class=z[44]=`tui-slide-image`、mode=z[45]=`heightFix`、src=z[46]=`wordSpeakCurrent.img`（:65）。
- 进度条 _oz(z[48])（:316）解码为拼接表达式 `wordCur_index+1 + '/' + wordsLength`（z[48]，:67）。
- 录音按钮 src 三元（z[65]，:84）：isRecording 真 → `.../icon/speak_recording.png`，假 → `.../icon/speak_record.png`（qianyufang.top CDN）。
- 三颗底部图标的 class 均为 z[61]=`bottom-icon-shanka`（:80；z[62]（:81）是 voice.png 的 URL；树 :347/:349/:351 复用）。

#### 1.1.2 辨意步（activeSteps==1，wx:if z[69]，:88；树 :357-379）

```
<view class="cu-list grid col-2"(z[70])>                         <!-- :358，ColorUI 全局类 -->
  <!-- wx:for cardList（z[71]，:90；_2z 于 :373，item/index） -->
  <view bindtap="clickCardQuiz" class="cu-card" data-id="{{item.id}}"
        data-index="{{index}}">                                  <!-- _mz :363 -->
    <view class="cu-item text-center"(z[77])>                    <!-- :364 -->
      <image class="{{index===clickIndex ? animation : ''}}" mode="aspectFill"
             src="{{item.img}}"
             style="width:100%;height:{{heightImg}}rpx;" />      <!-- _mz :366 -->
    </view>
  </view>
</view>
<view class="tui-button-bottom"(z[82]=z[59])>                     <!-- :375-376，class=82 → z[82](:101)=复用 z[59]='tui-button-bottom' -->
  <image bindtap="handleClickAudio" class="bottom-icon-shanka"
         src="https://qianyufang.top/public/yingyu/images/icon/voice.png" />   <!-- :377，class=z[84](:103)=复用 z[61] -->
</view>
```

- 答题卡 _mz：`['bindtap',73,'class',1,'data-id',2,'data-index',3]`（:363）→ bindtap=z[73]=`clickCardQuiz`（:92）、class=z[74]=`cu-card`、data-id=z[75]=`item.id`（:94）、data-index=z[76]=`index`。
- 图片 _mz：`['class',78,'mode',1,'src',2,'style',3]`（:366）→ class=z[78]（:97 三元 `index==clickIndex ? animation : ''`，animation 由 showAnimation 置 animation-scale-up/animation-shake，:175）、mode=z[79]=`aspectFill`（:98）、src=z[80]=`item.img`（:99）、style=z[81]（:100 拼接 `width:100%;height:` + heightImg + `rpx;`）。
- `heightImg`/`clickIndex` 为 appservice 运行时 setData 字段（:175：heightImg 按 screenHeight 计算、clickIndex 初值 -1）；底部播题按钮 class=z[84]（:103）=复用 z[61]=`bottom-icon-shanka`、bindtap=z[83]=`handleClickAudio`（:102）、src=z[85]（:104）=复用 z[62]=voice.png。
- ⚠️ `quiz-volume`/`volume-icon` 在 webview ops+m0 中 grep=0（仅 wxss_out :27-29 与 setCssToHead :627 有残留类定义），属富树无引用残留类，不得写入骨架（见第 2 节注）。

#### 1.1.3 认形步（activeSteps==2，wx:if z[86]，:105；树 :383-405）

```
<view class="tui-page__spacing"(z[88])>                          <!-- :107，wx:for cardList（z[87]，:106；_2z 于 :400） -->
  <view class="tui-product-title1 {{animation}}" bindtap="clickCardQuiz"
        data-id="{{item.id}}" data-index="{{index}}">            <!-- _mz :389 -->
    <text class="title1-text text-white">{{item.word}}</text>    <!-- :390-392 -->
  </view>
</view>
<view class="tui-button-bottom"(z[95]=z[59])>                    <!-- :401-402，class=95 → z[95](:114)=复用 z[59] -->
  <image bindtap="handleClickAudio" class="bottom-icon-shanka" src="…/icon/voice.png" />  <!-- :403，class=z[97](:116)=复用 z[61] -->
</view>
```

- 词卡 _mz：`['bindtap',89,'class',1,'data-id',2,'data-index',3]`（:389）→ bindtap=z[89]=`clickCardQuiz`（z[73] 复用）、class=z[90]（:109 拼接 `tui-product-title1 ` + z[78] 动画三元）、data-id=z[91]=z[75] 复用、data-index=z[92]=z[8] 复用。
- 外层容器 class=z[88]=`tui-page__spacing`（:107）；wx:for 数据源为 z[87]=`cardList`（:106，_2z 于 :400）。底部播题按钮：bindtap=z[96]=z[83] 复用=`handleClickAudio`、class=z[97]（:116）=复用 z[61]=`bottom-icon-shanka`、src=z[98]（:117）=复用 z[62]=voice.png。
- 单词 text class=z[93]=`title1-text text-white`（:112），内容=z[94]（:113 `item.word`）。

#### 1.1.4 拼写步（activeSteps==3，wx:if z[99]，:118；树 :409-478）

```
<view class="tui-pindu-title"(z[100])>                           <!-- :410 -->
  <text class="text-ssl">[{{wordPindu_detail.yinbiao}}]</text>   <!-- :412-415，z[102] :121 拼接 -->
  <text class="text-ssl margin-left margin-right-sm">{{wordPindu_detail.zh}}</text>  <!-- :417-420 -->
</view>
<view class="pindu_container"(z[105])>                           <!-- :423 -->
  <view class="input-area {{isCompleted ? 'completed' : ''}}">   <!-- :425，z[106] :125 拼接 -->
    <!-- wx:for inputLetters（z[108]，:127；_2z 于 :437） -->
    <text class="letter-box {{highlightIndex===index ? 'highlight' : ''}}"
          style="width:{letterBoxSize}rpx;height:{letterBoxSize}rpx;line-height:{letterBoxSize}rpx;"
      >{{item}}
    </text>                                                      <!-- _mz :430 -->
    <!-- wx:for emptySlots（z[113]，:132；_2z 于 :448） -->
    <text class="letter-box empty" style="…同上…">-</text>       <!-- _mz :441，内容 z[117]='-' :136 -->
  </view>
  <!-- wx:if isCompleted==false（z[118]，:137；:452-467） -->
  <view class="letters-area margin-top"(z[119])>                 <!-- :453 -->
    <!-- wx:for shuffledLetters（z[120]，:139；_2z 于 :465） -->
    <button bindtap="handleLetterTap" class="letter-btn {{animation}}"
            data-index="{{index}}" disabled="{{item.disabled}}"
            style="width:{buttonSize}rpx;height:{buttonSize}rpx;line-height:{buttonSize}rpx;"
      >{{item.letter}}</button>                                  <!-- _mz :458 -->
  </view>
</view>
<view class="tui-button-bottom"(z[128])>                         <!-- :470 -->
  <image bindtap="playWordAudio"    class="bottom-icon-shanka" src="…/icon/voice.png" />   <!-- :472 -->
  <image bindtap="switchPinduHardLevel" class="bottom-icon-shanka" src="…/icon/switch.png" />  <!-- :474 -->
  <image bindtap="clickNextWordPindu" class="bottom-icon-shanka" src="…/icon/next.png" />  <!-- :476 -->
</view>
```

- 输入格 _mz：`['class',110,'style',1]`（:430）→ class=z[110]（:129 三元，`highlightIndex===index?'highlight':''`）、style=z[111]（:130 拼接，三段 letterBoxSize）；内容=z[112]（:131 `item`）。
- 空位格 _mz：`['class',115,'style',1]`（:441）→ class=z[115]=`letter-box empty`（:134）、style=z[116]（:135，引用 z[111] 各段+letterBoxSize 同构）、内容=z[117]=`-`（:136，直读静态文案）。
- 候选键 _mz：`['bindtap',122,'class',1,'data-index',2,'disabled',3,'style',4]`（:458）→ bindtap=z[122]=`handleLetterTap`（:141）、class=z[123]（:142 拼接 `letter-btn ` + z[78] 动画三元）、data-index=z[124]=z[8] 复用、disabled=z[125]=`item.disabled`（:144）、style=z[126]（:145，buttonSize 同构拼接）、内容=z[127]=`item.letter`（:146）。
- `highlightIndex` 见本节开头备注：树引用但 appservice 无定义（死字段）。

#### 1.1.5 表达步（activeSteps==4，wx:if z[138]，:157；树 :482-526）

```
<view class="tui-banner-item"(z[139])>                           <!-- :483 -->
  <view class="tui-card"(z[140])>                                <!-- :485 -->
    <image class="tui-slide-image" mode="heightFix"
           src="{{describeList[sentence_index].img}}" />         <!-- :487，src=z[142] :162 -->
    <view class="tui-new-label-voice"(z[144])>                   <!-- :488 -->
      <view>{{sentence_index+1}}/{{describeList.length}}</view>  <!-- :490-492，z[145] :164 -->
    </view>
  </view>
</view>
<view class="tui-word-title"(z[146])>                            <!-- :497 -->
  <view class="tui-pro-titbox-describe">{{describeList[sentence_index].sentence}}</view>  <!-- :499-503 -->
  <!-- wx:if record_content!=''（z[149]；:507-515） -->
  <view catch:tap="playRecordAudio" class="audio-btn">
    <text class="audio-icon">▶</text>
  </view>
</view>
<view class="tui-button-bottom"(z[154])>                         <!-- :518 -->
  <image bindtap="playWordAudio"       class="bottom-icon-shanka" src="…/icon/voice.png" />   <!-- :520 -->
  <image bindtap="clickRecord"         class="bottom-icon-shanka" src="…/icon/speak_record.png" 三元 />  <!-- :522，z[156]=z[65] 复用 -->
  <image bindtap="clickDescribeNext"   class="bottom-icon-shanka" src="…/icon/next.png" />    <!-- :524 -->
</view>
```

- 句子容器 class=z[147]=`tui-pro-titbox-describe`（:166），内容=z[148]（:167 拼接 `describeList[sentence_index].sentence`）。
- 表达步 ops 大量复用跟读步常量（:158-182 的 z[42]~z[68] 二次引用），▶ 按钮 catch:tap=z[150]=z[55]=`playRecordAudio`、文案 z[153]=z[58]=`▶` 复用。

### 1.2 录音遮罩（挂根 r，:534-566）

- oF6C：wx:if `isRecording`（z[164]，:183；:536-541）——`.popup-recording-start`（z[166]，:185；z[165]（:184）=复用 z[63]=`clickRecord`，是遮罩 catch:tap 的绑定值索引，:537 `['catch:tap',165,…]`，勿当类名索引）内 `image`（_mz :538：class=z[167]（:186 拼接 `icon-recording  ` + animation）、src=z[168]=`https://qianyufang.top/public/yingyu/images/icon/recording.png`，:187）；遮罩本身 catch:tap=`clickRecord`（:537，点击即停止录音）。
- fG6C：wx:if `recordResultShow`（z[169]，:188；:544-566）——`.popup-recording-end`（z[170]，:189）> `.popup-text`（z[171]，:190）> `.value-container`（z[172]，:191）> `text.text-macron.value-font`（z[173]，:192，内容 {{value}}，:193）+ `.result-text`（z[175]，:194）> `text.text-white.text-xl`（z[176]，:195，内容 {{record_result}}，:196）。
- value/record_result 由 appservice showRecordResult 写入（:175：value 评分、record_result 识别文本），2 秒后自动复位并置 isConfetti。

### 1.3 底部弹层（:568-595）

```
<tui-bottom-popup bindclose="hideModal" maskZIndex="1001" show="{{modalResult}}" zIndex="1002">
  <scroll-view scrollY="{{true}}" class="tui-popup-scroll">      <!-- :569，scrollY=z[182] -->
    <view class="result-title">{{resultTitle}}</view>            <!-- :570-573，z[184] :203 -->
    <!-- wx:for resultList（z[185]，:204；_2z 于 :591，item/index） -->
    <view class="tui-rate-container">                            <!-- :578 -->
      <view class="tui-title">{{item.word}}</view>               <!-- :580-582，z[189]=z[94][1] :208 复用认形步 item.word -->
      <tui-rate active="#ffbd26"(z[190]) current="{{item.star}}" disabled="{{true}}"
                quantity="5" size="30" />                        <!-- :585 -->
    </view>
  </scroll-view>
  <tui-nomore backgroundColor="#f7f7f7"(z[195]) text="没有更多了"(z[196]) />  <!-- :593 -->
</tui-bottom-popup>
```

- bindclose=z[178]='hideModal'、maskZIndex=z[179]='1001'、show=z[180]=`modalResult`、zIndex=z[181]='1002'（:568）。
- 弹层内 tui-rate size='30'（z[194]=`'30'`，:213；与结果页卡片 size '28' 区分）。
- 明细行结构为 scroll-view > result-title > tui-rate-container（tui-title 词文本 + tui-rate）整层（spec 旧版漏记，对账 diff ②）。

### 状态分支

- `isFinish`：假 → 测验五步视图；真 → 结果卡片列表（每项 tui-rate + 可点 showResult 弹明细）+ 操作区（分享/再测一遍/返回首页）。
- `activeSteps` 0/1/2/3/4：五步流程互斥渲染（对应关系见 1.1.1-1.1.5，步骤名由 items 数据驱动）。
- `isCompleted`：拼写步内层（false 时渲染候选键区 letters-area；true 时 input-area 加 completed 庆祝动画，见逻辑侧 pinduResult/handleLetterTap）。
- `record_content!=''`：跟读/表达步内层条件（有识别结果时显示 ▶ 回放按钮）。
- `isRecording` / `recordResultShow`：全屏录音动画遮罩与识别结果遮罩（挂根，见 1.2）。
- `modalResult`：底部弹层显隐；内容由 showResult 按 data-id 注入 resultList（speakPass/cardPass/textPass/pinduPass/describePass 之一，:175），空则 toast「当前项无结果」。

## 2. 样式规格

来源：`unpacked/wxss_out/pages__unitQuiz__unitQuiz.wxss`（129 行，实读核对；同内容以 setCssToHead 内嵌于 chunk_44.webview.js:627，声明依赖 `./static/animation.wxss` 的 animation-scale-up / animation-shake，对应 showAnimation / recordingIcon）。数值直接当 px，不除 2。行号为实读文件行号。

| 类名 | 关键样式 | wxss 行 | 用途 |
|---|---|---|---|
| body | background:#fff9f2 | :51 | 页面背景 |
| .page | min-height:100vh; padding-bottom:20px | :53 | 页面容器 |
| .nav-bar | height:48px; background:#fff9f2; padding:0 14px | :55 | ⚠️ 自绘导航样式残留（见下注） |
| .result-header | linear-gradient(145deg,#fff3d7,#ffe6b7); border-radius:18px; border:1px solid rgba(255,184,70,.2); box-shadow:0 7px 17px rgba(231,151,42,.12); padding:15px 15px 20px | :60 | 结果页头部渐变卡 |
| .ability-card | border-radius:13px; box-shadow:0 5px 14px rgba(92,72,50,.07); min-height:120px; padding:11px; width:calc(50% - 5px) | :81 | 结果页能力卡（$gwx z[4] 实际引用类，:23） |
| .ability-card-weak | background:linear-gradient(150deg,#fff,#fffaf7); border-color:#ffe3d7 | :83 | 能力卡弱项配色 |
| .ability-card-wide | width:100%; min-height:85px; padding:13px 12px | :106 | 单列宽卡变体（结果页 z[4] 同时含 wide） |
| .quiz-star-card | width:50%; min-height:120px; background:#fff; border-radius:10px | :44 | 星级卡（wxss 存在，富树无引用，同文件复用样式残留） |
| .quiz-star-grid | flex wrap; margin:0 -4px | :43 | 星级网格（同上，富树无引用） |
| .quiz-volume | height:54px; margin-top:5px; width:100%; z-index:1 | :28 | 辨意/认形步底部容器（富树无引用，webview ops+m0 grep=0，1.1.2/1.1.3 实际渲染的是 .tui-button-bottom） |
| .volume-icon | height:54px; width:54px; z-index:999 | :29 | 底部播题图标（富树无引用，实际渲染的是 .bottom-icon-shanka） |
| .popup-recording-start | 全屏 fixed 100vw×100vh; z-index:10000; background rgba(0,0,0,.2) | :30-31 | 录音开始遮罩 |
| .popup-recording-end | 同上布局; background rgba(0,0,0,.6) | :31-32 | 录音结束/识别遮罩 |
| .confetti-gif | 120px; 居中 translate(-50%,-50%); z-index:5 | :37 | 撒花动图 |
| .value-font | Times New Roman; 150px; italic; bold | :39 | 得分大数字 |
| .letter-box | border:1px solid #333; font-size:32px; height 按数据 letterBoxSize | :15 | 拼字输入格（1.1.4 树节点） |
| .letter-btn | background:#f0f0f0; border-radius:5px; font-size:32px; height:60px | :20 | 拼字候选键（1.1.4 树节点） |
| .input-area.completed | animation:celebrate .5s ease-in-out | :14 | 拼字完成动画（1.1.4 树节点） |
| .tui-popup-scroll | height:55vh; padding:5px | :47 | 弹层滚动区（1.3 树节点） |
| .audio-btn | 30px 圆形; background:#fff2bd; flex:0 0 30px | :48 | 音频小按钮（1.1.1/1.1.5 树节点） |
| .tui-slide-image | border-radius:9px; height:60vh; width:100% | :4 | 词图（1.1.1/1.1.5 树节点） |
| .tui-banner-box-fuxi | height:66vh; z-index:99 | :1 | 横幅容器（wxss 存在，富树无引用，复用样式残留） |

⚠️ **样式存在≠骨架存在（修订后仅限个别残留）**：富树重写后，wxss 中绝大多数类已在第 1 节找到对应节点。仅 .nav-bar 一组（:55-59）及 .quiz-star-card/.quiz-star-grid（:43-44）、.quiz-volume/.volume-icon（:28-29）、.tui-banner-box-fuxi（:1）等少数类富树无引用（其中 .quiz-volume/.volume-icon 在 webview ops+m0 中 grep=0，1.1.2/1.1.3 底部实际渲染 .tui-button-bottom/.bottom-icon-shanka）；其中 .nav-bar 为自绘导航样式，但 app-config 未声明 `navigationStyle:custom` 且树无 nav-bar 节点 → 推测为同文件复用样式残留，**不据此认定自绘导航**。还原时类名可从 wxss 取、结构不可从 wxss 虚构。

依赖的全局/组件类：tui-steps / tui-rate / tui-bottom-popup / tui-nomore / tui-icon / tui-list-view / tui-list-cell（usingComponents 实证，见 3.4）。

## 3. 事件与逻辑

来源：`chunk_44.appservice.js`。:174 `__wxRoute="pages/unitQuiz/unitQuiz"` + define 开头；**全页逻辑在 :175 单行压缩体**（Page() 完整定义，实读核对）；:176 注册 `{isPage:true,isComponent:true,currentFile:'pages/unitQuiz/unitQuiz.js'}`（依据包写 `{isPage:true,...}`，实读含 isComponent:true，以本行为准）。

### 3.1 data 初始值（:175 实读）

`isFinish:false, wordsLength:0, isRecording:false, wordCur_index:0, wordSpeakCurrent:{}, speakPass:[], record_content:"", cardList:[], cardPass:[], textPass:[], sentenceExist:false, describeList:[], sentence_index:0, describePass:[], pinduNumber:0, pinduPass:[], wordPindu_detail:{}, shuffledLetters:[], inputLetters:[], currentPinduIndex:0, wrongTimes:0, emptySlots:[], isCompleted:false, letterBoxSize:68, buttonSize:120, isPinduHard:false, quizStarList:[], items:[跟读 imvoice/辨意 manage/认形 enlarge/拼写 evaluate], activeSteps:0, modalResult:false`

实例属性：`limit_speak_times:0, wordsList:[], sentenceList:[], intt_timer:0`（另运行时挂 innerAudioContext、unit_id、unit_title、cur_index、cur_title、clickTimes、pindu_correct）。

### 3.2 五步流程

onLoad(:175)：initSystemUI → getWordList(unit_id) → 存 unit_id → bindAudio → bindSpeak → setNavigateTitle → getLimitSpeakTimes。

1. **跟读（activeSteps=0）**：getWordList 读 `units` 集合取 words/sentences；逐词录音识别（bindSpeak：`n.onSuccessCallback` → setData record_content → checkResult）。clickSpeakNext 前进，词尽 → getCardList + activeSteps=1。
2. **辨意（=1，听音选图）**：getCardList 出题（随机取词 + getIndex 补 4 个干扰项；wordsLength≥4 时随机换位洗牌），playAudioTitle 播词音频；clickCardQuiz 判分 → cardQuizResult；题尽 → activeSteps=2。
3. **认形（=2，看图选词）**：与辨意共用 getCardList/clickCardQuiz，判分 → textQuizResult；题尽 → activeSteps=3 + getWordPindu。
4. **拼写（=3，pindu）**：getWordPinduDetail 读 `words`.doc(id)，有 pindu 字段才出题（无则 pinduNumber-1 跳过）；initPinduGame（按 pindu 切片打乱）/initPinduGameHard（按字母打乱，switchPinduHardLevel 切换）；handleLetterTap 正确拼接、错误 wrongTimes+1；clickNextWordPindu 前进——词尽时：有句子 → activeSteps=4 + getDescribeList，否则 isFinish=true + countFinalStar。
5. **表达（=4，仅 sentenceExist）**：getDescribeList 读 `words`（_id in ids，field {_id,extend}），filterExtendsBySentence 按 sentenceList[].matchText 匹配 extend[].title；clickDescribeNext 句尽 → isFinish=true + countFinalStar。

### 3.3 事件表

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| onLoad | onLoad | 见 3.2 | units.where({id:unit_id}).get（getWordList） | wordsList/sentenceList/sentenceExist/wordsLength |
| tap 结果卡 | showResult | 按 data-id 注入 resultList（0跟读/1辨意/2认形/3拼写/4表达），空则 toast「当前项无结果」 | — | resultList/resultTitle/modalResult |
| popup 关闭 | hideModal | 关弹层 | — | modalResult:false |
| tap 返回 | back | 页面栈=1 → reLaunch `/pages/index/index`；否则 navigateBack({delta:2}) | — | — |
| tap 再来一遍 | again | 重置五步数据（各 pass 数组清空、步骤归零） | — | isFinish/activeSteps/各 pass |
| tap 单词条 | clickWordFuxiTip | ⚠️ **死绑定**：webview 树引用（跟读步 :324，z[50]，:69）但 appservice Page 中 grep 计数=0，无函数定义，点击无效果 | — | — |
| tap 播词音频 | playWordAudio | 800ms 防抖；按 activeSteps 换源播放：0→wordSpeakCurrent.audio、3→wordPindu_detail.audio_en、4→describeList[sentence_index].audio（:175 实读） | — | innerAudioContext.src |
| tap ▶ 回放 | playRecordAudio | 800ms 防抖；record_content!='' 时回放录音（catch:tap，跟读/表达步 ▶ 按钮） | — | innerAudioContext.src |
| tap 底部播题 | handleClickAudio | 500ms 防抖；辨意/认形步播 playAudioTitle（题目词音频） | — | — |
| tap 答题卡 | clickCardQuiz | 辨意/认形判分入口（showAnimation 置 clickIndex/animation，:175），见 3.2/3.5 | — | cardPass/textPass |
| 录音 | clickRecord → clickStart/clickEnd | 500ms 后 n.stop()，识别中 loading；录音遮罩本体也 catch:tap=clickRecord（1.2，点遮罩停止） | 依赖模块 7A900081（wx.getRecorderManager + 腾讯云语音识别插件） | isRecording/record_content/recordResultShow |
| 拼字点按 | handleLetterTap | 正确 → 拼接推进，拼完 pinduResult；错误 → playWrong + wrongTimes+1 | — | inputLetters/shuffledLetters/emptySlots/wrongTimes/isCompleted |
| 难度切换 | switchPinduHardLevel | 普通（pindu 片段）/困难（单字母）互切 | — | isPinduHard |
| 下一词 | clickSpeakNext / clickNextWordPindu / clickDescribeNext | 各步推进，带 800ms/500ms 防抖（全局 u 标志） | 见 3.4 | wordCur_index/sentence_index/activeSteps |
| 分享 | onShareAppMessage / onShareTimeline | title=`unit_title+"课内单词同步测验"`，path=`/pages/school/school`，imageUrl=当前词 img（wordsList[wordCur_index].img） | — | — |

> 树绑定的 handler 共 14 个（grep 计数：bind:tap×2 + bindtap×16 + catch:tap×3 + bindclose×1 + openType share），上表已全覆盖；其中 clickWordFuxiTip 为死绑定（如上）。

### 3.4 云函数 / 云数据库清单（均出自 chunk_44.appservice.js:175，实读实证）

| 调用 | 用途 | 触发条件 |
|---|---|---|
| `units`.where({id:unit_id}).get | 取本单元 words/sentences | getWordList |
| `words`.doc(id).get | 取拼字题（pindu/name/extend/audio_en） | getWordPinduDetail |
| `words`.where({_id:command.in(ids)}).field({_id,extend}).get | 取表达步句子素材 | getDescribeList |
| `user_school`.where({baby_id,unit_id}).get | 查历史最高 unitStar | updateUserSchoolData |
| `user_school`.add({baby_id,vip,unit_id,unitStar,speakPass,cardPass,textPass,pinduPass,words,date}) | 首次记录 | 无历史记录时（newUserSchoolData） |
| 云函数 `updateUserSchool`（tag:"unitQuizUpdate"） | 上调历史最高分；成功置 `getApp().globalData.unitQuizUpdate=true` 供 school 页 onShow 刷新 | 仅新 unitStar > 旧值（`(e.data[0].unitStar||0)` 取历史最高） |

- 依赖组件（unpacked/app-service.js:59 `pages/unitQuiz/unitQuiz.json`，grep 实证）：tui-icon、tui-steps、tui-rate、tui-nomore、tui-bottom-popup、tui-list-view、tui-list-cell。
- 依赖模块（:175 头部 require 实证）：`72F19D06…`（近音词表，app-service.js:1409 define）、`7A900081…`（录音封装，:1411 define）、`A2AAD201…`（时间格式化工具 formatTime/formatMonth/formatDate/formatHour，app-service.js:1445 define，@swc 辅助 require 链），另有 @swc/runtime 内部 require（_define_property/_object_spread/_object_spread_props/_to_consumable_array，:175 头部 grep 实证）。

### 3.5 计算规则（判分/星级，必须精确到边界）

- **辨意/认形计星**（clickCardQuiz，按 clickTimes）：1 次=5 星 playGood(3)；2 次=4 星 playGood(2)；3 次=3 星 playGood(2)；4 次=2 星 playGood(1)；≥5 次=1 星 playGood(1)。答错 playWrong。
- **拼写计星**（pinduResult，按 wrongTimes）：0→5 星 playGood(3)；1→4 星 playGood(2)；2→3 星 playGood(2)；3→2 星 playGood(1)；≥4→1 星 playGood(1)。同词重复出题取历史最高星。
- **跟读单星**（calculateStarAndValue，按分数）：100→5 星/100；≥90→5 星；≥80→4 星；≥70→3 星；>60→2 星；否则 1 星（value 为对应区间随机整数）。
- **跟读/表达多词句计星**（countResultEasy）：`max(编辑距离相似度×100, 虚词折半得分)`——n≥100→5 星；n≥80→4 星；n≥60→4 星；否则 3 星。注意此表与 calculateStarAndValue 不同（多词句无 1/2 星档），还原时勿混用。虚词表 processVoiceResultWithMissing 命中虚词计 0.5、实词 1.0（:175 内嵌词表：i/me/my/…/shall/should）。
- **单词近音容错**（compareSingleWord）：识别词与目标词精确匹配得 1；否则查 `wx.getStorageSync('PHONETIC_MAP')`（fallback 模块 72F19D06 音标映射表，unpacked/app-service.js:1410，样本 `sheep:["ship","sheet","cheap"]` 等）命中亦得 1。
- **汇总**（countFinalStar）：quizStarList=[ceil(speakPass 星和/wordsLength), ceil(cardPass 星和/wordsLength), ceil(textPass 星和/wordsLength), ceil(pinduPass 星和/pinduNumber), (sentenceExist 时) ceil(describePass 星和/describeList.length)]，对应分母为 0 时该项记 0；unitStar=ceil(各步星和/步数)。
- **录音限制**：`school_speak_times` storage 按日计数（updateSpeakTimes 每次 +1）；clickRecord 中 >500 → showModal 硬上限（文案「当日录音跟读识别次数已超合理上限500次，次日恢复.」）；`vip<0`（未开通）→ showLimitModal 引导 member；`vip==0 且 >100` → showLimitModal 引导 member（confirm 跳 ../member/member）。
- **导航标题**（setNavigateTitle）：年级=unit_id.substring(5,6)（1一年级上/2一年级下/3二年级上/4二年级下/5三年级上/6三年级下），Unit 号=substring(7)，`wx.setNavigationBarTitle({title:年级+'-Unit'+N+'测验'})`，同时存 unit_title 供分享用。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 反馈音效 | 固定 TCB CDN：`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/{perfect\|good\|great\|wrong\|try-again}.mp3` | chunk_44.appservice.js:175（grep 实证 `636c-cloud1` 全文件 1 行命中；mp3 文件名逐一计数：perfect×2、good×1、great×1、wrong×1、try-again×1） | ⚠️ 待真机验证 |
| 单词音频 | activeSteps=0 播 `wordSpeakCurrent.audio`；辨意播 `wordsList[cur_index].audio`；拼写播 `wordPindu_detail.audio_en`（words 集合字段） | chunk_44.appservice.js:175（playWordAudio/playAudioTitle） | ⚠️ 待真机验证（命名规律不在本页代码，依赖 captures/ 样本） |
| 句子音频 | `describeList[sentence_index].audio`（words 集合 extend 派生） | chunk_44.appservice.js:175（playWordAudio） | ⚠️ 待真机验证 |
| 词图/分享图 | `wordsList[i].img` / `wordSpeakCurrent.img`（units.words、words 集合字段原值直用，无路径拼接） | chunk_44.appservice.js:175（getCardList/onShareAppMessage） | ⚠️ 待真机验证 |
| 录音回放 | `record_content` 即 innerAudioContext.src（识别插件返回的临时音频） | chunk_44.appservice.js:175（playRecordAudio） | ⚠️ 待真机验证 |
| 树内静态图标 | 固定 qianyufang.top CDN（非 TCB）：`https://qianyufang.top/public/yingyu/images/icon/{voice\|speak_record\|speak_recording\|next\|switch\|recording}.png`（共 6 张：voice 底部播词×3 处、speak_record/speak_recording 录音按钮三元、next 下一词×2 处、switch 难度切换、recording 录音遮罩） | chunk_44.webview.js:81/:84/:87/:153/:187（ops 实读） | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

- 底部弹层 tui-bottom-popup（modalResult，zIndex 1002 / mask 1001）：内为 scroll-view.tui-popup-scroll（55vh）> result-title（{{resultTitle}}）+ wx:for resultList 渲染 tui-rate-container（tui-title 词文本 + tui-rate size 30）+ tui-nomore「没有更多了」；内容由 showResult 按结果卡 data-id 注入对应 pass 数组。
- 录音遮罩：isRecording → .popup-recording-start（rgba .2，animation-scale-up 心跳，recordingIcon 定时器）；结束识别 → recordResultShow → .popup-recording-end（rgba .6），showRecordResult 2 秒后自动复位并置 isConfetti。
- 限流弹窗：showLimitModal（title「提醒」，confirm「加入会员」→ ../member/member）。
- 硬上限弹窗：wx.showModal「当日录音跟读识别次数已超合理上限500次，次日恢复.」。
- 拼字完成：isCompleted=true → .input-area.completed celebrate 动画（wxss :14）+ pinduResult 播报音。
- 重复作答：speakPass/describePass 按 id 查重仅在新 value 更高时覆盖星与分；pinduPass 按 id 查重仅在新 star 更高时覆盖。

## 6. 对账记录（对账员填写）

对账时间 2026-10-01。实读原文：`unpacked/chunk_44.webview.js` 全文（627 行）、`unpacked/chunk_44.appservice.js` 全文（176 行）、`unpacked/wxss_out/pages__unitQuiz__unitQuiz.wxss` 全文（129 行）、`unpacked/app-config.json`（grep window 段）、`unpacked/app-service.js`（usingComponents 与依赖模块 define 行）。实跑提取脚本 `__audit_unitquiz_tree.js`（node 解码 $gwx ops 表 197 条 + m0 全部 _mz/_oz/_rz/_2z 引用，逐条打印解码值）。

- [ ] 节点树与原文一致 —— **FAIL（重大偏差，见 diff ①②③）**
- [x] 类名抽查 n 处全中 —— **PASS（21/21 全中，见 diff ④）**
- [ ] 文案逐字一致 —— **FAIL（spec 漏 5 处可直读静态文案，见 diff ⑤）**
- [ ] 事件与云函数调用清单齐全 —— **FAIL（事件表缺 5 个绑定，见 diff ⑥；云函数清单本身齐全 PASS）**
- diff 摘要：

### ①【根因级】spec 第 1 节读错了文件：把 appservice 内嵌的稀疏 $gwx 副本当成了 webview 节点树

- spec 声称「ops 常量表 z[0..57] 于 :19-58；节点树 m0 :63-156」——这套行号与稀疏 ops（58 条）实际属于 `chunk_44.appservice.js:1-172`（该文件头部内嵌了一份**稀疏版** $gwx_XC_39 副本：Z 调用 :19-57、m0 :63-156、注册 :173）。
- 真正的节点树在 `unpacked/chunk_44.webview.js`：ops 表 **z[0..196] 共 197 条**（Z 调用 :19-215），m0 节点树 :221-602，注册 :625，wxss setCssToHead :627。
- 因此 spec 的核心结论「**树稀疏坑：中间流程 UI（选图卡、拼字键盘、录音层等）无法从本 chunk 还原**」**不成立**。真实 webview 树是富树，五步流程 UI、结果页、录音遮罩全部可还原。

### ② 真实节点树包含 spec 判定为「不存在」的全部结构（均出自 webview.js 实解码）

- **结果页**（isFinish=true 分支，m0 :226-297）：view.page > view.ability-section > view.ability-grid > wx:for quizStarList（:269）卡片 `view[bind:tap=showResult, class="ability-card ability-card-wide ability-card-weak", data-id=index]` 内部有 **wide-left > wide-content > wide-title-row > text.ability-name wide-name（内容 item.title）+ view.stars > tui-rate**（:234-254）；item.star==5 条件块（:257-263）内容为 `view.ability-status.status-mastered`「已掌握」——并非 spec 所说「内容静态部分不在树中」。
- **结果页操作区**（:272-293）：button[openType='share', class="action-button primary-button"]（text.button-icon「👫」+ text「邀请同学一起挑战」）、view[bindtap=again, class=retry-button]「再测一遍」、view[bindtap=back, class=home-button]「返回首页」、view.safe-bottom。spec 的 1.1 伪代码完全没有这些节点。
- **跟读步**（activeSteps==0，:307-353，wx:if z[41]）：tui-banner-item > tui-card > image.tui-slide-image（mode=heightFix, src=wordSpeakCurrent.img）+ view.tui-new-label-voice（内容 `{{wordCur_index+1}}/{{wordsLength}}`）；view.tui-word-title 内 **view[bindtap=clickWordFuxiTip].tui-pro-titbox-study-name > text.text-bold（wordSpeakCurrent.word）**；record_content!='' 时 catch:tap=playRecordAudio 的 audio-btn「▶」；tui-button-bottom 内三颗 image（playWordAudio/voice.png、clickRecord/speak_recording|speak_record.png、clickSpeakNext/next.png）。
- **辨意步**（==1，:357-379）：view.cu-list.grid.col-2 > wx:for cardList（:373）> view[bindtap=clickCardQuiz, class=cu-card, data-id=item.id, data-index=index] > view.cu-item.text-center > image（mode=aspectFill, src=item.img, style width:100%;height:{{heightImg}}rpx，class 三元 animation）；底部 image[bindtap=handleClickAudio]。spec 说辨意步「无静态子结构」——错。
- **认形步**（==2，:382-405）：wx:for cardList > view.tui-page__spacing > view[bindtap=clickCardQuiz, class="tui-product-title1 {{animation}}", data-id, data-index] > text.title1-text.text-white（item.word）；底部 handleClickAudio。
- **拼写步**（==3，:408-478）：view.tui-pindu-title（text.text-ssl `[{{wordPindu_detail.yinbiao}}]` + text「text-ssl margin-left margin-right-sm」{{wordPindu_detail.zh}}）；view.pindu_container > view.input-area（wx:for inputLetters 的 text.letter-box，class 三元 highlightIndex===index?'highlight':''，style letterBoxSize rpx；wx:for emptySlots 的 text.letter-box.empty，内容「-」）；isCompleted==false 时 view.letters-area.margin-top > wx:for shuffledLetters 的 button[bindtap=handleLetterTap, data-index, disabled=item.disabled, style=buttonSize rpx]（内容 item.letter）；底部三颗 image（playWordAudio/switchPinduHardLevel/clickNextWordPindu，src voice/switch/next.png）。
- **表达步**（==4，:481-526）：tui-banner-item > tui-card > image.tui-slide-image（src=describeList[sentence_index].img）+ tui-new-label-voice（`{{sentence_index+1}}/{{describeList.length}}`）；view.tui-word-title > view.tui-pro-titbox-describe（describeList[sentence_index].sentence）+ audio-btn「▶」（catch:tap=playRecordAudio）；底部三颗 image（playWordAudio/clickRecord/clickDescribeNext）。
- **录音遮罩**（挂根，:534-566）：isRecording → view[catch:tap=clickRecord].popup-recording-start > image[class="icon-recording  {{animation}}", src=recording.png]；recordResultShow → view.popup-recording-end > view.popup-text > view.value-container > text.text-macron.value-font（{{value}}）+ view.result-text > text.text-white.text-xl（{{record_result}}）。spec 1.2「内容静态部分均不在树中」——错。
- **底部弹层**（:568-595）：tui-bottom-popup 内有 **scroll-view[scrollY, class=tui-popup-scroll]** > view.result-title（{{resultTitle}}）> wx:for resultList > view.tui-rate-container > view.tui-title（{{item.word}}，z[189]=z[94][1] 解码实证）+ tui-rate（size '30'）；再 tui-nomore（#f7f7f7/没有更多了）。spec 1.3 漏 scroll-view、result-title、tui-rate-container/tui-title 整层。
- spec 1.1 的 `_mz` 索引示例（bind:tap=3/class=4/data-id=5）也是按 appservice 稀疏副本算的；真实树结果卡为 `['bind:tap',6,'class',1,'data-id',2]` → bind:tap=z[6]=showResult、class=z[7]、data-id=z[8]。

### ③ 唯一现存争议点：同页两份 $gwx 副本

appservice.js:1-172 的稀疏副本与 webview.js 的富树**同名**（$gwx_XC_39）但内容不同（稀疏副本无静态类名/文案，仅 58 条 ops）。运行时 wxml 渲染以 webview 侧为准（:625 `__wxAppCode__['pages/unitQuiz/unitQuiz.wxml']` 注册在 webview chunk）。spec 应整体按富树重写；稀疏副本可加注说明，不得作为骨架依据。

### ④ 类名抽查 PASS（21/21，wxss_out 实读行号）

.ability-card(:81)/.ability-card-weak(:83)/.ability-card-wide(:106)/.ability-status+status-mastered(:92-93)/.action-button+primary-button(:122-123)/.retry-button(:126)/.home-button(:128)/.safe-bottom(:129)/.tui-banner-item(:2)/.tui-card(:3)/.tui-slide-image(:4)/.tui-new-label-voice(:26)/.tui-word-title(:5)/.tui-pro-titbox-study-name(:21)/.audio-btn(:48)/.audio-icon(:49)/.cu-list 系列(wxss 无、ColorUI 全局，与树引用一致)/.tui-product-title1(:8)/.tui-page__spacing(:7)/.letter-box(:15)+.empty(:16)+.highlight(:17)/.letter-btn(:20)/.letters-area(:18)/.input-area+.completed(:12-14)/.pindu_container(:11)/.tui-pindu-title(:10)/.popup-recording-start(:30-31)/.popup-recording-end(:31-32)/.icon-recording(:33)/.popup-text(:34)/.value-container(:36)/.value-font(:39)/.result-text(:38)/.tui-popup-scroll(:47)/.result-title(:42)/.tui-rate-container(:40)/.tui-title(:41)。spec 第 2 节数值表全部与 wxss 原文吻合，数值抽查（value-font 150px、letter-btn height:60px、audio-btn 30px、popup-recording z-index:10000）无出入。

### ⑤ 文案：真实树可直读静态文案共 7 处，spec 只收录 1 处

webview.js 富树直读：`已掌握`(z[22],:41)、`👫`(z[27],:46)、`邀请同学一起挑战`(z[28],:47)、`再测一遍`(z[31],:50)、`返回首页`(z[34],:53)、`▶`(z[58],:77 / z[153] 复用)、`-`(拼字空位 z[117],:136)、`没有更多了`(z[196],:215)。spec「没有更多了 为本树唯一可直读静态文案」不成立。逻辑侧弹窗文案（提示/当日…500次，次日恢复./提醒/加入会员/当前项无结果/识别中.../单词准备中/播放音频出错）已 grep 实证存在于 :175，spec 3.3/5 节记录无误。

### ⑥ 事件表不齐全

真实树绑定的 handler 共 14 个（bind:tap×2+bindtap×16+catch:tap×3+bindclose×1+openType share，grep 计数），spec 3.3 表缺 4 个已定义 handler + 1 个树引用但 Page 未定义的死绑定：
- `playWordAudio`（跟读/拼写/表达底部音效按钮，z[60]，:175 有定义）——表内未列；
- `playRecordAudio`（跟读/表达步 record_content!='' 时的 ▶ 按钮 catch:tap，z[55]，:175 有定义）——表内未列；
- `handleClickAudio`（辨意/认形底部播题按钮，z[83]，:175 有定义，500ms 防抖）——表内未列；
- `clickCardQuiz`（辨意/认形答题卡 bind:tap，z[73]）——3.2 有行为描述但 3.3 事件表漏行；
- `clickWordFuxiTip`（跟读步单词条 bind:tap，z[50]，webview 树引用）——**appservice Page 中 grep 计数=0，无此函数定义**，属树引用但逻辑缺失的死绑定，spec 完全未提。
云函数/云数据库清单（units/words/user_school/云函数 updateUserSchool）与依赖模块（72F19D06 近音词表 :1409 define、7A900081 录音封装 :1411 define、A2AAD201 :1445 define——spec 3.4 漏了 A2AAD201 这个 @swc 辅助 require）——主清单齐全，A2AAD201 为补充项。

### ⑦ 其余核对项结论

- frontmatter 导航栏：app-config `pages/unitQuiz/unitQuiz.html.window` = navigationBarTitleText「一年级上-Unit1测验」+ #FFFDF8，无 navigationStyle:custom，spec 判断正确。
- usingComponents 7 组件（app-service.js:59 实证）与 spec 3.4 一致。
- 音效 mp3 计数（perfect×2/good×1/great×1/wrong×1/try-again×1）与 spec 4 表一致；webview 树另引 6 张 qianyufang.top 图标 png（voice/speak_record/speak_recording/next/switch/recording），spec 4 未收录该图标 CDN（qianyufang.top，非 TCB），建议补入资源规律表。
- wxss :627 setCssToHead 与 wxss_out 文件内容逐条一致（依赖 ./static/animation.wxss），spec 第 2 节声明正确。

**对账结论：FAIL。** 第 2/3/4/5 节主体可保留；第 1 节需按 webview 富树整体重写（结构+文案+事件表补齐），修完需重新对账。

---

## 蒸馏工修订（2026-10-01，按 diff ①②④⑤）

已按 diff 修订，待复核：
- **①** 第 1 节已按 `chunk_44.webview.js` 富树整体重写并删除「树稀疏」总判断；修订前逐行实读 ops 表 :19-215 与 m0 :221-602 核实，各小节行号/ops 索引均按富树重标。
- **②** 骨架已补全静态结构（wide-left/wide-content/stars、share 按钮+三操作按钮、tui-banner-item/tui-card/tui-slide-image、cu-list grid col-2 答题卡、pindu_container/input-area/letter-box/letter-btn/letters-area、popup-recording-start/end 内层、弹层 scroll-view+result-title+tui-rate-container 整层）；结果卡 _mz 已修正为 bind:tap=z[6]/class=z[7]/data-id=z[8]（:235）。
- **④** 文案已补齐 8 处直读静态文案（已掌握 :41 / 👫 :46 / 邀请同学一起挑战 :47 / 再测一遍 :50 / 返回首页 :53 / ▶ :77 / 拼字空位 - :136 / 没有更多了 :215），全部在 1.1-1.3 对应节点标注 z 索引与行号。
- **⑤** 事件表已补 playWordAudio/playRecordAudio/handleClickAudio/clickCardQuiz 4 个 handler（行为均按 :175 实读补写防抖与换源细节）、死绑定 clickWordFuxiTip（webview z[50] 引用，appservice grep 计数=0 实证）、依赖模块 A2AAD201（app-service.js:1445 define，formatTime 系时间格式化工具）与 @swc/runtime 内部 require；资源表已补 6 张 qianyufang.top 图标 png（:81/:84/:87/:153/:187 实读）。
- 通过项未动：第 2 节类名（21/21）、第 3.4 云函数清单、导航栏结论、usingComponents 7 组件、mp3 计数。

---

## 蒸馏工备注（本 ask 实际执行的核对）

- 本 ask 实读：`unpacked/chunk_44.appservice.js` 全文（176 行）、`unpacked/chunk_44.webview.js` 全文（627 行）、`unpacked/wxss_out/pages__unitQuiz__unitQuiz.wxss` 全文（129 行）、`unpacked/app-service.js:59`（页面 json）与 :1410-1412（依赖模块）。
- 实跑核对命令：`grep -o '"pages/unitQuiz/unitQuiz.html":{[^}]*}' unpacked/app-config.json`（系统栏 window，无 navigationStyle:custom）；`grep -c "636c-cloud1" unpacked/chunk_44.appservice.js`（=1 行）与 `grep -o "yingyu/[a-z-]*\.mp3"`（5 文件 6 处计数如 4. 表）；`sed -n '59p' unpacked/app-service.js | grep -o 'unitQuiz/unitQuiz\.json…'`（7 个 usingComponents 逐一实证）；依赖模块 72F19D06（:1410 音标映射）与 7A900081（:1411 getRecorderManager + requirePlugin("wx3e17776051baf153") + setQCloudSecret，密钥已脱敏）实读。
- 与依据包的差异修正：① :176 注册实际为 `{isPage:true,isComponent:true,...}`（依据包漏 isComponent）；② data 初值补充 record_content/cardList/sentenceExist/letterBoxSize/buttonSize/isPinduHard 等依据包未列字段；③ 多词句计星档位（≥60 也给 4 星、无 1/2 星档）依据包未区分，已按 :175 原文写明；④ try-again.mp3 播放条件为「评分≠5 星」（playResultAudio），perfect.mp3 在 playGood 与 playResultAudio 两处（故 grep 计 2）。
- 未做：CDN 可达性/真机验证（属抓包或动态采集范围）；captures/ jsonl 未读，audio/img 命名规律未采样。
- 【修订更正】本备注原第 3 条「中间流程 UI 的类名与文案因 $gwx 树稀疏无法从本 chunk 还原」**不成立**：当时误把 appservice.js:1-172 内嵌的稀疏 $gwx 副本当成了 webview 节点树；真实 webview 富树（ops 197 条，:19-215）五步流程 UI 全部可直读，已在本文件第 1 节按富树重写（对账 diff ①）。

---

## 6.1 对账员复核二轮（2026-10-01，全现场实读，不采信蒸馏工描述）

实读原文：`unpacked/chunk_44.webview.js` 全文（628 行）、`unpacked/chunk_44.appservice.js` 全文（176 行）、`unpacked/wxss_out/pages__unitQuiz__unitQuiz.wxss` 全文（130 行，:129 末条 + 尾空行）、`unpacked/app-service.js:59`（页面 json）、`unpacked/app-config.json`（window 段 grep）。实跑命令：ops 分段计数（webview :19-215 `^Z(` 计 **197 条** ✅；appservice 稀疏副本 :19-57 计 39 条）、事件绑定分段计数（webview m0 :221-602：'bindtap'×16、'bind:tap'×2、'catch:tap'×3、'bindclose'×1 ✅）、`grep -c highlightIndex / clickWordFuxiTip unpacked/chunk_44.appservice.js`（均=0 ✅ 死字段/死绑定实证）、ops 逐行抽验锚定映射 **z[N] = 行 N+19**（锚点：z[22]='已掌握':41、z[27]='👫':46、z[41]=activeSteps==0:60、z[50]='clickWordFuxiTip':69、z[61]='bottom-icon-shanka':80、z[63]='clickRecord':82、z[110]=letter-box 三元:129、z[117]='-':136、z[178]='hideModal':197、z[194]='30':213、z[196]='没有更多了':215）。

### 复核 checklist（对照本次 ask 五项任务）

1. **第 1 节富树重写——属实，骨架逐层吻合 PASS。** 五步分支全部与 m0 原文一致：跟读 :307-353（wx:if z[41]:60）、辨意 :357-379（z[69]:88）、认形 :382-405（z[86]:105）、拼写 :408-478（z[99]:118）、表达 :482-526（z[138]:157）；录音遮罩 :534-566（oF6C isRecording / fG6C recordResultShow，挂根 :535/:543）、结果页操作区 :272-293（:273/:274/:285/:289/:294）、弹层 :568-595（:568/:569/:593）逐层吻合；结果卡 _mz `['bind:tap',6,'class',1,'data-id',2]`（:235）✅；「树稀疏」总判断已删除（仅 6 节历史记录保留）✅。
2. **类名抽查 20 处——全部命中 PASS。** .page(:53 min-height:100vh, padding-bottom:20px)/.ability-card(:81 border-radius:13px, box-shadow:0 5px 14px rgba(92,72,50,.07), min-height:120px, padding:11px, width:calc(50% - 5px))/.ability-card-weak(:83)/.ability-card-wide(:106 min-height:85px, padding:13px 12px)/.ability-status+status-mastered(:92-93)/.action-button+primary-button(:122-123)/.retry-button(:126)/.home-button(:128)/.safe-bottom(:129)/.tui-banner-item(:2)/.tui-card(:3)/.tui-slide-image(:4 border-radius:9px, height:60vh)/.tui-new-label-voice(:26)/.tui-word-title(:5)/.tui-pro-titbox-study-name(:21 font-size:44px)/.tui-pro-titbox-describe(:23 font-size:36px)/.audio-btn(:48 30px 圆形, #fff2bd, flex:0 0 30px)/.audio-icon(:49)/.letter-box(:15 border:1px solid #333, font-size:32px)+.empty(:16)+.highlight(:17)/.letter-btn(:20 #f0f0f0, border-radius:5px, height:60px)/.letters-area(:18)/.input-area+.completed(:14 celebrate .5s ease-in-out)/.pindu_container(:11)/.tui-pindu-title(:10)/.popup-recording-start(:30-31 z-index:10000, rgba(0,0,0,.2))/.popup-recording-end(:31-32 rgba(0,0,0,.6))/.icon-recording(:33)/.popup-text(:34)/.value-container(:36)/.value-font(:39 Times New Roman, 150px, italic, bold)/.result-text(:38)/.tui-popup-scroll(:47 55vh)/.result-title(:42)/.tui-rate-container(:40)/.tui-title(:41)/.bottom-icon-shanka(:25 height:69px)/.nav-bar(:55 height:48px)/.quiz-star-card(:44)/.quiz-star-grid(:43)/.tui-banner-box-fuxi(:1)；.cu-list 系列 wxss 无、ColorUI 全局，与树引用一致。第 2 节数值表与 wxss 原文无出入。
3. **文案 8 处逐字核对——PASS。** 已掌握(z[22],:41)、👫(z[27],:46)、邀请同学一起挑战(z[28],:47)、再测一遍(z[31],:50)、返回首页(z[34],:53)、▶(z[58],:77；表达步 :172 Z(z[58]) 复用)、拼字空位 `-`(z[117],:136)、没有更多了(z[196],:215)——8 处全部逐字命中。
4. **事件表——PASS。** playWordAudio/playRecordAudio/handleClickAudio/clickCardQuiz 均已入 3.3 表且行为与 :175 原文一致（playWordAudio 800ms 防抖 + 三步换源 :175 实证；handleClickAudio 500ms 防抖；clickCardQuiz 800ms 防抖 + stop + showAnimation）；clickWordFuxiTip 死绑定（webview :324 引用 z[50]:69，appservice grep=0）与 highlightIndex 死字段（webview :129 引用，appservice grep=0）均已如实标注。绑定计数：树内 'bindtap'×16+'bind:tap'×2+'catch:tap'×3+'bindclose'×1 + openType share，与 spec「14 个 handler」口径一致。
5. **保留区——未被误改 PASS。** 3.4 云函数清单六项（units.where / words.doc / words.where{_id in}.field / user_school.where / user_school.add / 云函数 updateUserSchool tag:"unitQuizUpdate" → globalData.unitQuizUpdate=true）逐一在 :175 实证；导航栏 app-config=系统栏「一年级上-Unit1测验」+#FFFDF8 无 navigationStyle:custom，setNavigateTitle substring(5,6)/substring(7)（:175 实证）；usingComponents 7 组件（app-service.js:59 实证）；第 2 节数值表原样。

### 残留 diff（仅 4 处 z 索引注脚错位，不动骨架/行为结论；z[N]=行 N+19 已锚定）

- **diff R1（1.1.1 注脚一处）**：spec「三颗底部图标的 class 均为 z[62]=`bottom-icon-shanka`（:80…）」——应为 **z[61]**（:80='bottom-icon-shanka'）；z[62]（:81）是 voice.png。行号引用本身正确。
- **diff R2（1.1.2 两处类名标错）**：① 容器骨架行 `<view class="quiz-volume"(z[82])> <!-- :375 -->`——m0 :376 class 索引 82 → **z[82]（:101）= 复用 z[59] = `tui-button-bottom`**，树中并无 quiz-volume；② 注脚「底部播题按钮 class=z[63]=`volume-icon`（:76）」双重错误——:377 `['bindtap',83,'class',1,'src',2]` 解出 class=**z[84]（:103）= 复用 z[61] = `bottom-icon-shanka`**（bindtap=z[83]='handleClickAudio' :102、src=z[85]（:104）= 复用 z[62]=voice.png，均正确）；z[63]（:82）实为 'clickRecord'；`volume-icon`/`quiz-volume` 在 webview ops+m0 中 grep=0（仅 wxss_out :28-29 与 setCssToHead :627 存在，属无引用残留类），不得写进骨架。
- **diff R3（1.1.3 两处同类）**：① 容器骨架行 `<view class="quiz-volume"(z[95])> <!-- :401 -->`——m0 :402 class 索引 95 → **z[95]（:114）= 复用 z[59] = `tui-button-bottom`**；② 外层 view class 实为 **z[88]='tui-page__spacing'（:107）**，spec 标 z[87]——z[87]（:106）是 wx:for 的 cardList（:400 `_2z(z,87,…)` 用它，列表本身标注正确）。底部按钮 class（:403 `['bindtap',96,…]`）=z[97]（:116）= 复用 z[61]='bottom-icon-shanka'。
- **diff R4（1.2 一处）**：spec「.popup-recording-start（z[165]=z[63]，:185）」——应为 **z[166]**（:185='popup-recording-start'）；z[165]（:184）= 复用 z[63]='clickRecord'，它恰是遮罩 catch:tap 的绑定值（:537 `['catch:tap',165,…]`），spec 把绑定值索引误当类名索引。1.2 其余全部正确（isRecording wx:if 用 z[164]（:183）标注 ✅；z[167]/z[168]/z[169]-z[177] 档逐一核对无误）。

> 其余各小节 z 注脚抽验全部命中：1.1 根结构（z[6]/z[7]/z[8]:235、z[15]-z[19]、z[25]:44、z[29]:48、z[32]:51）、1.1.1（z[44]-z[48]、z[65]:84 三元、z[63]:349、z[66]:351）、1.1.2 答题卡/图片（z[73]-z[76]:363、z[78]-z[81]:366）、1.1.3 词卡（z[89]-z[94]:389-392）、1.1.4 全节（z[100]-z[127] 逐条命中，highlightIndex 三元 :129=z[110] ✅）、1.1.5 全节（z[142]:162、z[145]:164、z[147]-z[148]、z[150]=z[55] 复用、z[153]=z[58] 复用、z[155]/z[158]/z[161]）、1.3 全节（z[178]-z[196] 逐条命中：bindclose=z[178]='hideModal':197、size=z[194]='30':213、text=z[196]:215）。第一轮 diff ②「弹层漏层」等修订均已落实。

### 复核结论

**对账结论：本轮回仍为「对账复核中」**（残留 diff R1-R4，共 6 个注脚/骨架类名小错，均为蒸馏工把复用链 `Z(z[N])` 与 wxss 残留类混入所致，不影响任何结构/文案/事件/云函数结论）。处置：蒸馏工修正 R1-R4（要点：辨意/认形底部容器与播题按钮类名分别改为 tui-button-bottom / bottom-icon-shanka，quiz-volume/volume-icon 移入第 2 节「富树无引用残留」清单；z[61]/z[82]/z[84]/z[88]/z[95]/z[97]/z[166] 七处索引改号），修完走第三轮对账；通过后 frontmatter 方可改「已对账（PASS）」。

### 蒸馏工修订（2026-10-01，按 R1-R4）

修订前实读 `unpacked/chunk_44.webview.js` 核对：ops 段 :78-104（z[59]='tui-button-bottom':78、z[61]='bottom-icon-shanka':80、z[62]=voice.png:81、z[63]='clickRecord':82、z[82]=Z(z[59]):101、z[83]='handleClickAudio':102、z[84]=Z(z[61]):103、z[85]=Z(z[62]):104）、:105-117（z[87]=Z(z[71]):106 即 cardList、z[88]='tui-page__spacing':107、z[95]=Z(z[59]):114、z[97]=Z(z[61]):116、z[98]=Z(z[62]):117）、:183-186（z[164]=isRecording、z[165]=Z(z[63])、z[166]='popup-recording-start':185）、m0 :376（class=82）/:377（bindtap=83,class=1→z[84]）/:402（class=95）/:403（bindtap=96,class=1→z[97]）/:537（catch:tap=165,class=1→z[166]）、锚点 z[178]='hideModal':197 与 z[194]='30':213 复验通过；`grep quiz-volume|volume-icon unpacked/chunk_44.webview.js` 仅 :627 setCssToHead 命中（wxss_out :28-29 同）。已按 R1-R4 修订 7 处索引+2 处类名：R1（1.1.1 注脚 z[62]→z[61]）、R2（1.1.2 容器 quiz-volume→tui-button-bottom z[82]=z[59]，播题按钮 volume-icon→bottom-icon-shanka z[84]=z[61]）、R3（1.1.3 容器 quiz-volume→tui-button-bottom z[95]=z[59]，外层 view z[87]→z[88]='tui-page__spacing'）、R4（1.2 popup-recording-start z[165]→z[166]）；第 2 节残留类清单已补 .quiz-volume/.volume-icon 两行。待第三轮复核。

### 对账员第三轮收尾复核（2026-10-01，全现场实读，不采信蒸馏工描述）

实读原文：`unpacked/chunk_44.webview.js` ops 段 :75-119 与 :180-189、m0 段 :368-407 与 :530-541；`unpacked/wxss_out/pages__unitQuiz__unitQuiz.wxss` 全文（129 行）；grep 复验 `quiz-volume|volume-icon` 于 chunk_44.webview.js 仅 :627 setCssToHead 命中。解码口径与二轮一致：`z[N]=行 N+19`；_mz 属性表首值为基准 z 索引、后续数字为相对偏移（故 `['bindtap',83,'class',1,'src',2]` 解出 bindtap=z[83]、class=z[83+1]=z[84]、src=z[83+2]=z[85]）。

1. **R1——PASS。** 1.1.1 注脚已改「三颗底部图标 class 均为 z[61]=`bottom-icon-shanka`（:80；z[62]（:81）是 voice.png 的 URL）」。ops 实读：:80 `Z([3,'bottom-icon-shanka'])`、:81 voice.png URL，与树 :347/:349/:351 三处复用吻合；旧错号 z[62] 已不再出现在类名位。
2. **R2——PASS。** ① 1.1.2 容器骨架行已改 `<view class="tui-button-bottom"(z[82]=z[59])>`，标注 class=82 → z[82](:101)=复用 z[59]。ops 实读 :78 `Z([3,'tui-button-bottom'])`、:101 `Z(z[59])`；m0 :376 `_rz(z,oB8C,'class',82,…)` 逐字吻合。② 播题按钮已改 `bottom-icon-shanka`，bindtap=z[83]='handleClickAudio'（ops :102 实读）、class=z[84](:103)=`Z(z[61])`、src=z[85](:104)=`Z(z[62])`=voice.png，与 m0 :377 `['bindtap',83,'class',1,'src',2]` 解码逐一吻合。③ `quiz-volume`/`volume-icon` 已从骨架移除，仅存于 1.1.2 警示注与第 2 节残留类清单；警示注行号已按更正写为「wxss_out :27-29」。
3. **R3——PASS。** ① 1.1.3 容器已改 `tui-button-bottom`(z[95]=z[59])，标注 class=95 → z[95](:114)。ops 实读 :114 `Z(z[59])`；m0 :402 `_rz(z,eN8C,'class',95,…)` 吻合。② 外层 view 已改 z[88]=`tui-page__spacing`（ops :107 实读 `Z([3,'tui-page__spacing'])`；m0 :388 `_rz(z,oJ8C,'class',88,…)` 吻合）；z[87]（ops :106 `Z(z[71])`=cardList）仅标注于 wx:for 数据源，与 m0 :400 `_2z(z,87,…)` 一致，未被误当类名。
4. **R4——PASS。** 1.2 `.popup-recording-start` 已改 z[166]（ops :185 实读 `Z([3,'popup-recording-start'])`）；z[165]（ops :184 `Z(z[63])`，z[63]:82='clickRecord'）已如实标注为遮罩 catch:tap 的绑定值索引而非类名索引，与 m0 :537 `_mz(z,'view',['catch:tap',165,'class',1],…)` 解码（catch:tap=z[165]、class=z[165+1]=z[166]）吻合。
5. **抽验 8 处 wxss_out，无回归——PASS。** .quiz-volume（:27 组合选择器 `.quiz-volume,.tui-new-label-voice` + :28 独立块 height:54px;margin-top:5px;width:100%;z-index:1——1.1.2 注 :27-29 更正属实，第 2 节表格引 :28 指独有样式所在独立块，:27 共享项仅为与 .tui-new-label-voice 共用的 flex 三件，不构成残留）/​.volume-icon（:29 height:54px;width:54px;z-index:999）/​.tui-page__spacing（:6-7 padding:30px,column）/​.tui-button-bottom（:24 height:120px,bottom:0px,z-index:99）/​.bottom-icon-shanka（:25 height:69px;margin:12px,z-index:999）/​.popup-recording-start（:30-31 rgba(0,0,0,.2),fixed 100vw×100vh,z-index:10000）/​.icon-recording（:33 height:180px,width:180px,opacity:.9）/​.audio-btn（:48 30px 圆形,#fff2bd,flex:0 0 30px）——8 处行号与数值全部与原文一致。1.1.3 底部按钮补注核实：m0 :403 `['bindtap',96,'class',1,'src',2]` → bindtap=z[96]=`Z(z[83])`（ops :115）='handleClickAudio'、class=z[97]=`Z(z[61])`（ops :116）='bottom-icon-shanka'、src=z[98]=`Z(z[62])`（ops :117）=voice.png，spec 标注正确。

### 第三轮复核结论

**对账结论：PASS。** R1-R4（ops 复用链索引混标 7 处 + 类名 2 处）全部落实，抽验未发现修订引入的回归，无新增残留。frontmatter 已改「已对账（PASS）」。本页 spec（specs/pages/unitQuiz.md）对账完毕，待用户验收后更新 PROGRESS.md。
