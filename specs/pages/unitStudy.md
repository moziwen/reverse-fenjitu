---
页名: unitStudy
显示名: 课本内容跟读（单元跟读配音）
状态: 已对账（PASS）
chunk: chunk_45.webview.js / chunk_45.appservice.js
导航栏: 系统栏（JSON 静态标题「一年级上-Unit1测验」疑似与 unitQuiz 串写，运行时被 setNavigateTitle 动态覆盖为「<年级>-Unit<N>跟读」）
---

# 页面还原规格：课本内容跟读（单元跟读配音）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 依据包来源（本次实读核对）：逻辑 `unpacked/chunk_45.appservice.js`（共 82 行，`__wxRoute` :81，全页逻辑在 :82 单行压缩体，define 注册 :82 尾）；节点树 `unpacked/chunk_45.webview.js` 的 `$gwx_XC_40` 富树（共 192 行：ops 46 条 :19-64、m0 :70-166、组件注册 `e_[x[0]]` :168、wxml 注册 :190、wxss setCssToHead :192）；样式 `wxss_out/pages__unitStudy__unitStudy.wxss`（30 行，整读）。
> ⚠️ 同页两份 $gwx 副本：`chunk_45.appservice.js:1-63` 内嵌同名**稀疏副本**（`grep -c '^Z(' ` 实测仅 **9 条** Z(:19-27)，m0 :33-63，e_ :64），无静态类名/文案。骨架只认 webview 侧富树（AGENTS.md 硬规则），本节全部按富树书写。

## 1. 页面骨架（节点树，webview 富树）

来源：`unpacked/chunk_45.webview.js` 的 `$gwx_XC_40`（函数定义 :1；ops 常量表 z[0..45] 共 46 条于 gz$gwx_XC_40_1 :19-64，**锚定 z[N]=行 N+19**，锚点 z[0]='tui-banner-item':19、z[17]='▶':36、z[22]='tui-button-bottom':41、z[45]=record_result:64；节点树 m0 :70-166；`e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}` :168，j/ic 均空 → **树内无自定义组件标签**）；注册 `__wxAppCode__['pages/unitStudy/unitStudy.wxml']` :190（本页 chunk 定位：`grep -l "'./pages/unitStudy/unitStudy.wxml'" unpacked/chunk_*.webview.js` 唯一命中 chunk_45）。

```
<view class="tui-banner-item"(z[0])>                            <!-- eZ0C :72-73 -->
  <!-- 点整卡播整图音频 -->
  <view bind:tap="playImageAudio" class="tui-card">             <!-- b10C :74，_mz ['bind:tap',1,'class',1] → tap=z[1](:20)、class=z[2](:21) -->
    <image class="tui-slide-image" mode="heightFix"
           src="{{speakList[image_index].img}}" />              <!-- o20C :75，class=z[3](:22)/mode=z[4](:23)/src=z[5](:24) -->
    <view class="tui-new-label-index">                          <!-- o40C :76-77，class=z[6](:25) -->
      <view>{{image_index+1}}/{{speakList.length}}</view>       <!-- f50C :78，内容 _oz(z,7)=z[7](:26) 拼接表达式 -->
    </view>
    <!-- wx:if isAudioPlaying（z[8]，:27；虚拟节点 :83-91） -->
    <view class="tui-new-label-voice">                          <!-- h70C :86-87，class=z[9](:28) -->
      <image class="voice-icon"
             src="https://qianyufang.top/public/yingyu/images/icon/voice_on.png" />  <!-- o80C :88，class=z[10](:29)/src=z[11](:30) -->
    </view>
  </view>
</view>
<!-- 点标题区播当前句音频（catchtap 阻止冒泡） -->
<view catchtap="playRecordAudio" class="tui-word-title">        <!-- c90C :95，_mz ['catchtap',12,'class',1] → catchtap=z[12](:31)、class=z[13](:32) -->
  <!-- wx:if record_content!=''（z[14]，:33；虚拟节点 :96-107） -->
  <view class="audio-btn">                                      <!-- lAAD :99-100，class=z[15](:34) -->
    <text class="audio-icon">▶</text>                           <!-- aBAD :101-104，class=z[16](:35)，文案 z[17]='▶'(:36) 直读 -->
  </view>
  <view class="tui-pro-titbox-describe">{{cur_text}}</view>     <!-- eDAD :108-112，class=z[18](:37)，内容 z[19]=cur_text(:38) -->
  <view class="text-sm">{{(text_index+1)}}/{{speakList[image_index].text.length}}</view>
                                                                <!-- oFAD :113-117，class=z[20](:39)，内容 z[21](:40) 拼接 '('+(text_index+1)+'/'+len+')' -->
</view>
<view class="tui-button-bottom">                                <!-- oHAD :121-122，class=z[22](:41) -->
  <image bindtap="playTextAudio" class="bottom-icon-speak"
         src="https://qianyufang.top/public/yingyu/images/icon/voice.png" />     <!-- fIAD :123，bindtap=z[23](:42)/class=z[24](:43)/src=z[25](:44) -->
  <image bind:tap="clickRecord" class="bottom-icon-speak"
         src="{{isRecording ? …/speak_recording.png : …/speak_record.png}}" />   <!-- cJAD :125，bind:tap=z[26](:45)/class=z[27]=复用 z[24](:46)/src=z[28] 三元(:47) -->
  <image bindtap="clickNext" class="bottom-icon-speak"
         src="https://qianyufang.top/public/yingyu/images/icon/next.png" />      <!-- hKAD :127，bindtap=z[29](:48)/class=z[30]=复用 z[24](:49)/src=z[31](:50) -->
</view>
<!-- 录音中遮罩（挂根，:130-137） -->
<view catch:tap="clickRecord" class="popup-recording-start">    <!-- oLAD :133，_mz ['catch:tap',33,'class',1] → catch:tap=z[33](:52)=Z(z[26])='clickRecord'、class=z[34]='popup-recording-start'(:53) -->
  <image class="icon-recording  {{animation}}"
         src="https://qianyufang.top/public/yingyu/images/icon/recording.png" /> <!-- cMAD :134，class=z[35](:54) 拼接 'icon-recording  '+animation、src=z[36](:55) -->
</view>
<!-- 识别结果遮罩（挂根，:138-163） -->
<view class="popup-recording-end">                              <!-- oNAD :141-142，class=z[38](:57)，wx:if recordResultShow（z[37]，:56；:140） -->
  <view class="popup-text">                                     <!-- lOAD :143-144，class=z[39](:58) -->
    <view class="value-container">                              <!-- aPAD :145-146，class=z[40](:59) -->
      <text class="text-macron value-font">{{value}}</text>     <!-- tQAD :147-150，class=z[41]='text-macron value-font'(:60)，内容 z[42]=value(:61) -->
    </view>
    <view class="result-text">                                  <!-- bSAD :154-155，class=z[43](:62) -->
      <text class="text-white text-xl">{{record_result}}</text> <!-- oTAD :156-159，class=z[44](:63)，内容 z[45]=record_result(:64) -->
    </view>
  </view>
</view>
```

- **录音遮罩 catch:tap 已解码**（依据包标注「无法对上」，本次实解码推翻）：m0 :133 `_mz ['catch:tap',33,'class',1]`，z[33]（:52）=`Z(z[26])` 复用 `clickRecord`——遮罩点击即调 clickRecord（同 unitQuiz 录音遮罩行为，点遮罩停止录音）。_mz 第 4 参空数组不影响该解码。仍列入对账员复核项（第 6 节）。
- 本页静态文案仅 1 处直读：`▶`（z[17]，:36）。其余均为数据绑定表达式。
- 三颗底部图标 class 同为 z[24]='bottom-icon-speak'（:43），cJAD/hKAD 经 Z(z[24]) 复用（:46/:49）。

### 状态分支

- `isAudioPlaying`（z[8]，:27）：播放中 → 卡片右上角显示 voice_on.png 动态指示（`.tui-new-label-voice`）；否则不渲染。
- `record_content!=''`（z[14]，:33）：当前句有识别结果 → 显示 ▶ 回放按钮（catchtap=playRecordAudio，:31）。
- `isRecording`（z[32]，:51）：录音中 → 全屏半透明遮罩 + recording.png + animation-scale-up 动画；遮罩本体 catch:tap=clickRecord。
- `recordResultShow`（z[37]，:56）：识别完成 → 全屏深色遮罩展示得分 {{value}} + 识别文本 {{record_result}}，2 秒后自动复位（showRecordResult，:82）。
- 死字段：`isConfetti` 由 showRecordResult setData（:82 实证），但富树 46 条 ops + m0 中 grep=0，**无任何节点引用**（同 unitQuiz `highlightIndex` 教训）——还原时不要为其虚构 UI。

## 2. 样式规格

来源：`wxss_out/pages__unitStudy__unitStudy.wxss`（30 行，本次整读；同内容以 setCssToHead 内嵌于 chunk_45.webview.js:192，首元素声明依赖 `./static/animation.wxss`）。数值直接当 px，不除 2。行号为 wxss_out 实读行号。

| 类名 | 关键样式 | wxss 行 | 用途 |
|---|---|---|---|
| .tui-banner-item | flex 纵向居中; margin-top:10px | :1 | 根容器 |
| .tui-card | position:relative | :2 | 图卡容器 |
| .tui-slide-image | border-radius:9px; height:60vh; width:100%; transition:all .05s linear | :3 | 课文图 |
| .tui-word-title | flex 横向居中; min-height:50px; padding:10px | :4-5 | 标题区 |
| .tui-pro-titbox-describe | font-size:36px | :6 | 当前句文本 |
| .tui-button-bottom | flex 居中; height:90px; bottom:0; position:relative; z-index:99 | :7 | 底栏 |
| .bottom-icon-speak | 69px×69px; margin:12px; z-index:999 | :8 | 底栏三图标 |
| .tui-new-label-index | height:30px; opacity:.7; background:#f0f0f0; left:0 | :9 | 左上角序号标 |
| .tui-new-label-index/.tui-new-label-voice | 绝对定位 top:0; 宽 45px（voice 高 45px right:0，index 高 30px） | :10-11 | 角标 |
| .voice-icon | 30px×30px | :12 | 播放指示图标 |
| .popup-recording-start | fixed 全屏 100vw×100vh; z-index:10000; rgba(0,0,0,.2) | :13-14 | 录音中遮罩 |
| .popup-recording-end | 同上布局; rgba(0,0,0,.6) | :14-15 | 结果遮罩 |
| .icon-recording | 180px×180px; opacity:.9 | :16 | 录音动画图 |
| .popup-text | color:#fff; height:200px; width:80vw | :17-18 | 结果内容盒 |
| .value-container | position:relative; flex 居中 | :19 | 分数容器 |
| .value-font | Times New Roman; font-size:150px; italic; 700 | :22 | 得分大数字 |
| .result-text | height:100px; width:80vw; flex 居中 | :21 | 结果文本行 |
| .audio-btn | 30px 圆形; background:#fff2bd; margin-left:8px; :active scale(.94) | :28-30 | ▶ 回放按钮 |
| .audio-icon | color:#4d4430; font-size:14px | :29 | ▶ 字形 |

- **富树无引用残留类**（wxss 存在、本页 46 条 ops+m0 中 grep=0，还原时不得虚构节点）：`.confetti-gif`（:20，120px 居中撒花位）、`.summary-desc`（:23）、`.stars`（:24）、`.star-active`/`.star-empty`（:25-27）——系同打包文件与 unitQuiz 共用样式残留。
- animation-scale-up 动画类定义于 `./static/animation.wxss`（webview:192 声明依赖；实际定义在 `unpacked/webview.app.js` 内联样式：`animation-scale-up{animation-name:scale-up}` + `@keyframes scale-up{0%{opacity:.6;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}`，grep 实证），非本页 wxss。

## 3. 事件与逻辑

来源：`chunk_45.appservice.js`。:81 `__wxRoute="pages/unitStudy/unitStudy"`；**全页逻辑在 :82 单行压缩体**（Page() 完整定义 + define 注册 `{isPage:true,isComponent:true,currentFile:'pages/unitStudy/unitStudy.js'}`，实读 :82 尾）。

### 3.1 data 初始值（:82 实读）

`image_index:0, text_index:0, speakList:[], isAudioPlaying:false, isRecording:false, animation:"", recordResultShow:false, value:0, record_result:"", speakPass:[], record_content:""`

实例属性：`limit_speak_times:0, intt_timer:0`；运行时挂 `unit_id, unit_title, innerAudioContext, imageAudioPlay, textAudioPlay`。

### 3.2 流程

onLoad(:82)：`unit_id=t.unit_id` → initSystemUI（getWindowInfo 判平板 isPad）→ bindAudio → bindSpeak → setNavigateTitle → getLimitSpeakTimes → getSpeakList。

1. **取数**：getSpeakList → `s.collection("units").where({id:unit_id}).get`（:82 实读）→ `speakList=e.data[0].speak`，`cur_text=speak[0].text[0]`。speakList[] 每项含 `img / text[]（句子数组）/ audio[]（逐句音频数组）`。
2. **跟读循环**：点图卡 playImageAudio → 播 audio[0]，播完 onEnded→handleAudioEnd 自动推进 text_index 逐句播（bindAudio/handleAudioEnd，:82 实读）；点标题 catchtap=playRecordAudio（**注意：标题区 catchtap 绑的是 playRecordAudio 回放录音，点标题区另无播文本入口，播单句音频走底栏 voice.png=playTextAudio**）；clickNext 逐句/逐图推进——末图末句后**回卷 image_index:0 循环跟读**（:82 实读 `setData({image_index:0,…})`）。
3. **录音识别**：clickRecord → 限流检查（3.5）→ clickStart（600ms 防抖标志 n，停掉播放中音频）→ recordingIcon(true)（clearInterval+定时器置 animation='animation-scale-up'）→ 录音模块 i（7A900081）→ clickEnd → recordingIcon(false)+showLoading「识别中...」→ 识别成功 onSuccessCallback → setData record_content/record_result → checkResult。
4. **判分回显**：showRecordResult → speakResult 入账 → recordResultShow:true + isConfetti:true → 2 秒（setTimeout 2e3）复位。

### 3.3 事件表（树绑定 handler 共 5 个：bind:tap×1 + bindtap×2 + bind:tap(录音按钮)×1 + catchtap×1 + catch:tap×1，逐条在 :82 grep 有定义，无死绑定）

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| onLoad | onLoad | 3.2 流程 | units.where({id}).get（getSpeakList） | speakList/cur_text |
| tap 图卡 | playImageAudio | 停当前播放 → isAudioPlaying:true、text_index:0 → 播 speakList[image_index].audio[0]，播完自动逐句推进（handleAudioEnd） | — | isAudioPlaying/text_index/cur_text/imageAudioPlay |
| tap 底栏 voice | playTextAudio | 停当前 → 播 audio[text_index]，置 textAudioPlay=true | — | isAudioPlaying |
| tap ▶ 回放 | playRecordAudio | record_content!='' → 回放录音；否则兜底 playTextAudio（:82 实读） | — | innerAudioContext.src |
| catchtap 标题区 | playRecordAudio | 同上（阻止冒泡，避免触发外层） | — | — |
| tap 底栏录音 | clickRecord → clickStart/clickEnd | 限流三连（3.5）→ 录音 + 腾讯云句子识别（依赖模块 7A900081） | 依赖模块 7A900081（wx.getRecorderManager + 插件 sentenceRecognition） | isRecording/animation/record_content/record_result/recordResultShow/value/speakPass |
| tap 录音遮罩 | clickRecord | 遮罩 catch:tap（1 节已解码），点遮罩即停止录音 | — | isRecording |
| tap 底栏 next | clickNext | 清 record_content → 逐句/逐图推进，末图末句回卷 image_index:0 | — | text_index/image_index/cur_text/record_content |
| 分享 | onShareAppMessage | title=unit_title+"课本内容跟读配音"，path=`/pages/unitStudy/unitStudy`，imageUrl=当前图 img（:82 实读） | — | — |
| 分享朋友圈 | onShareTimeline | 同 title，query:""，imageUrl=当前图 img（:82 实读） | — | — |

### 3.4 云函数 / 云数据库 / 存储清单（:82 实读 + grep 实证）

| 调用 | 用途 | 证据 |
|---|---|---|
| `units`.where({id:unit_id}).get | 取跟读素材 speakList | :82（getSpeakList，实读 `collection("units").where({id:t.unit_id})`） |
| **wx.cloud.callFunction：本页 0 次** | 数据全走客户端直查；写回不在本页发生（speakPass 仅存 data/内存，未发现 .add/.update/.doc 调用，grep `.add(`/`.update(`/`.doc(` 均无命中） | `grep -c callFunction unpacked/chunk_45.appservice.js` = 0 |
| storage 读 `school_speak_times` | 当日跟读次数（getLimitSpeakTimes：date==today_date 则取 times，否则重置 {date,times:0} 并写回） | :82 实读 |
| storage 写 `school_speak_times` | updateSpeakTimes 每次 +1（`wx.setStorageSync("school_speak_times",…)` 共 3 处） | :82 grep 实证 |
| storage 读 `PHONETIC_MAP` | 近音词容错表（`wx.getStorageSync("PHONETIC_MAP")||e`，e=require 72F19D06 兜底表）；**本页只读不写**（grep setStorageSync 无 PHONETIC_MAP 命中） | :82 实读 |
| 依赖模块 | `A2AAD201…`（bare require，@swc 辅助/副作用注册）；`72F19D06…`=近音词表（unpacked/app-service.js:1409 define，:1410 模块体，样本 `sheep:["ship","sheet","cheap"],eat:["it","at"],…`）；`7A900081…`=录音+腾讯云句子识别封装（unpacked/app-service.js:1411 define，:1412 模块体：`wx.getRecorderManager()` + `requirePlugin("wx3e17776051baf153")` + `setQCloudSecret(…)`（密钥已脱敏）→ sentenceRecognition 16k_en/mp3） | :82 require 头 + app-service.js 实读 |

- 页面 json（unpacked/app-service.js 内 `pages/unitStudy/unitStudy.json`，grep 实证）：usingComponents 声明 tui-icon / tui-rate / tui-bottom-popup，但**本页富树 j/ic 为空（:168），三个组件均未在树中实际使用**——还原时不引入。

### 3.5 计算规则（判分/限流，必须精确到边界）

- **限流三连**（clickRecord，:82 实读，按序）：
  1. `limit_speak_times>500` → `wx.showModal({title:"提示",content:"当日录音跟读识别次数已超合理上限500次，次日恢复.",showCancel:false})` 硬上限，不发起录音；
  2. `a.globalData.vip<0` → showLimitModal("跟读录音测评功能，加入会员后可无限制使用。",false)；
  3. `0==a.globalData.vip`（免费用户）`&& this.limit_speak_times>100` → showLimitModal("跟读录音次数已超出当日上限，加入会员后可继续使用。",false)。即 vip==0 且当日 >100 次才弹窗（vip<0 已被第 2 条拦截，vip>0 不限次）。
- **showLimitModal(t,e)**：showModal title「提醒」/ confirmText「加入会员」/ cancelText「取消」(#666666)；confirm → e?redirectTo:navigateTo `../member/member`；cancel 且 e → 页面栈<2 ? reLaunch `../index/index` : navigateBack（本页两处调用均传 e=false，cancel 分支不触发）。
- **单句判分**（checkResult → countResultValue，:82 实读）：识别结果为空 → star:1、value=50~59 随机，直接 showRecordResult；否则 setTimeout 50ms → 目标句 processText 后仅 1 词 → countResultSingle，多词 → countResultEasy。
- **单词判分**（countResultSingle）：score=round(100×compareSingleWord)，经 calculateStarAndValue 出星。
- **星级映射**（calculateStarAndValue，:82 实读）：≥90→5 星/value 90~99；≥80→4 星；≥70→3 星/value 70~79；>60→2 星/value 60~69；否则 1 星/value 50~59。
- **近音容错**（compareSingleWord）：识别词与目标词精确匹配得 1；否则查 `wx.getStorageSync("PHONETIC_MAP")||e`（72F19D06 兜底表），命中表内近音数组得 1（console.warn「触发近音词容错逻辑」，:82 实读）。
- **多词句判分**（countResultEasy，:82 实读，与 calculateStarAndValue 档位**不同**，还原勿混用）：n=max(round(100×wordSimilarity), processVoiceResultWithMissing.finalScore)；n≥100→5 星/value 100；n≥80→4 星/value 90~99；n≥60→4 星/value 80~89；否则 3 星/value 60~79。**无 2 星/1 星档**。
- **编辑距离**（wordSimilarity）：Levenshtein，1-dist/max(len)，normalizeSentence 预处理（:82 实读）。
- **虚词半分容错**（processVoiceResultWithMissing，:82 实读）：内嵌虚词表（`i/me/my/…/the/a/an/in/on/at/by/with/for/about/of/to/from/and/but/or/so/because/if/when/is/am/are/was/were/be/been/being/do/does/did/can/could/will/would/shall/should`，实读表尾）；逐目标词比对——与识别词精确匹配或命中近音表 → 计 1 分并推进游标；目标词属虚词（未读到）→ 计 0.5 分（该分支不推进游标、不记 [ERR]，实读三元结构）；否则记 `[ERR]+识别词`。finalScore=min(100, ceil(100×得分/目标词数))。
- **入账去重**（speakResult，:82 实读）：id=`image_index+"-"+text_index`；speakPass 中已有该 id 时仅在新 value>旧 value 时覆盖 star/value；否则 push {id,text,star,value}。
- **结果反馈音**（playResultAudio，:82 实读）：5 星→perfect.mp3、4→brilliant.mp3、3→good.mp3、2→great.mp3、其余→try-again.mp3。
- **导航标题**（setNavigateTitle，:82 实读）：年级=unit_id.substring(5,6)（1一年级上/2一年级下/3二年级上/4二年级下/5三年级上/6三年级下），Unit 号=substring(7)，标题=`年级+"-Unit"+N+"跟读"`，`wx.setNavigationBarTitle({title:a})`，同时存 unit_title 供分享。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 结果反馈音效 | 固定 TCB CDN：`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/{perfect\|brilliant\|good\|great\|try-again}.mp3`（5 个文件各 1 处，grep 计数实证） | chunk_45.appservice.js:82 | ⚠️ 待真机验证 |
| 树内静态图标 | 固定 qianyufang.top CDN（非 TCB）：`https://qianyufang.top/public/yingyu/images/icon/{voice_on\|voice\|speak_record\|speak_recording\|next\|recording}.png` 共 6 张（grep uniq 计数：voice_on/voice/next/recording 各 1 处，speak_recording+speak_record 为同一三元 1 组） | chunk_45.webview.js:30/:44/:47/:50/:55（ops 实读） | ⚠️ 待真机验证 |
| 课文图/句音频 | `speakList[i].img` / `speakList[i].audio[j]`（units 集合 speak 字段原值直用，本页无任何路径拼接） | chunk_45.appservice.js:82（getSpeakList/playImageAudio/playTextAudio） | ⚠️ 待真机验证（命名规律依赖 captures/ 采样，本页未做） |
| 录音回放 | `record_content` 即临时录音地址，直接赋 innerAudioContext.src | chunk_45.appservice.js:82（playRecordAudio 实读） | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

- **录音中遮罩**：isRecording → .popup-recording-start（rgba .2 全屏）> image.icon-recording（180px，class 拼接 `icon-recording  `+animation，animation='animation-scale-up' 由 recordingIcon 定时器驱动）；遮罩本体 catch:tap=clickRecord 可点击停止。
- **识别结果遮罩**：recordResultShow → .popup-recording-end（rgba .6）> .popup-text > .value-container > text.value-font（{{value}}，150px Times New Roman 斜体）+ .result-text > text.text-white.text-xl（{{record_result}}）；showRecordResult 2 秒后自动复位。
- **限流弹窗**：showLimitModal（title「提醒」，confirm「加入会员」→ ../member/member）；硬上限 wx.showModal「当日录音跟读识别次数已超合理上限500次，次日恢复.」（showCancel:false）。
- **识别中 loading**：clickEnd → wx.showLoading({title:"识别中..."})，showRecordResult 时 hideLoading。

## 6. 对账记录（对账员填写，2026-10-02 独立复核）

- [x] 节点树与原文一致——对账员独立实读 `unpacked/chunk_45.webview.js` 全文 192 行复核通过。重点复核项均确认：
  - ① 录音遮罩解码正确：m0 :133 `_mz(z,'view',['catch:tap',33,'class',1])`，z[33]（:52）原文 `Z(z[26])`，z[26]（:45）=`'clickRecord'` → 遮罩 catch:tap=clickRecord，复用链成立；
  - ② c90C（:95）原文确为 `catchtap`（无冒号）绑 playRecordAudio，cJAD（:125）确为 `bind:tap`（带冒号）绑 clickRecord，spec 按原文拼写无误；
  - ③ 树结构核实：eZ0C 含 b10C+c90C（:94/:119），oHAD/两遮罩挂根 r（:129/:131/:139）；`e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}`（:168）j/ic 空，无自定义组件标签；
  - ④ 稀疏副本复核：appservice 侧 9 条 Z(:19-27)、m0 :33-63、e_ :64，与 spec 描述一致，骨架未误用；
  - ⑤ 死字段 isConfetti 复核：`head -191 chunk_45.webview.js | grep -c 'isConfetti\|confetti'` = 0，仅 setCssToHead(:192) 有同类名，树内确无引用。
- [x] 类名抽查 20 处全中（z[N]=行 N+19 锚定法逐条对照原文）：z[0]:19 / z[2]:21 / z[3]:22 / z[6]:25 / z[9]:28 / z[10]:29 / z[13]:32 / z[15]:34 / z[16]:35 / z[18]:37 / z[20]:39 / z[22]:41 / z[24]:43 / z[34]:53 / z[38]:57 / z[39]:58 / z[40]:59 / z[41]:60 / z[43]:62 / z[44]:63 —— 全部与 spec 第 1 节一致。
- [x] 文案逐字一致——静态直读文案仅 z[17]='▶'（:36）1 处，spec 所记无误；其余 z[7]/z[19]/z[21]/z[42]/z[45] 均为绑定表达式，与 spec 表述一致。app-config 静态标题「一年级上-Unit1测验」（grep `"pages/unitStudy/unitStudy.html":{"window":{…}}` 实证，无 navigationStyle:custom）与 frontmatter 记载一致。
- [x] 事件与云函数调用清单齐全——`grep -c 'callFunction' unpacked/chunk_45.appservice.js` = 0；`.add(`/`.update(`/`.doc(` grep 均无命中；`collection("units"` 仅 1 处；storage：`getStorageSync("school_speak_times")`×2、`setStorageSync("school_speak_times"`×3、`getStorageSync("PHONETIC_MAP")`×2、setStorageSync("PHONETIC_MAP") 0 处，与 3.4 表全部吻合；树内 6 处绑定 5 个 handler 逐一在 :82 有定义，无死绑定；插件证据 `requirePlugin("wx3e17776051baf153")`+`setQCloudSecret`+`sentenceRecognition({engSerViceType:"16k_en",…voiceFormat:"mp3"})` 在 app-service.js:1412 实读命中（密钥在解包产物中已脱敏）。图标/音效计数复核：qianyufang 6 图标 5 组、5 个 mp3 各 1 处，与第 4 节一致。
- [x] 样式抽查：wxss_out 30 行整读，`.tui-banner-item` margin-top:10px(:1)、`.tui-slide-image` 9px(:3)、`.tui-pro-titbox-describe` 36px(:6)、`.bottom-icon-speak` 69px(:8)、`.voice-icon` 30px(:12)、`.icon-recording` 180px(:16)、`.value-font` Times/150px/italic/700(:22)、`.audio-btn` 30px/#fff2bd/8px(:28)、`.audio-icon` 14px(:29)、两遮罩 rgba .2/.6(:13/:15) 全中；残留类 .confetti-gif(:20)/.summary-desc(:23)/.stars(:24)/.star-active(:26)/.star-empty(:27) 确在 wxss、树内 grep=0，与 2 节记载一致。
- [x] 逻辑抽查：判分档位（calculateStarAndValue / countResultEasy）、虚词 0.5 分不推进游标、speakResult 去重覆盖、clickNext 末图回卷 image_index:0、showRecordResult 2e3 复位、分享 path/query/imageUrl、showLimitModal 分支——逐条与 :82 原文一致。
- [ ] **发现 1 处 spec 错误，需蒸馏工修正（3.5 限流第 3 条）**：
  - spec 3.5 第 3 条及「以原文为准」注记写为 `a.globalData.vip&&this.limit_speak_times>100`（真值判断），并称依据包「vip==0」有误。
  - **原文实为 `0==a.globalData.vip&&this.limit_speak_times>100`**（chunk_45.appservice.js:82 实读；`grep -o '0==a\.globalData\.vip&&this\.limit_speak_times>100\|a\.globalData\.vip&&this\.limit_speak_times>100'` → 前者 1 处、后者 0 处）。
  - 即：vip==0（免费用户）且当日>100 次才弹窗；vip 为负已被第 2 条拦截，vip>0 不限次。**依据包原本正确，蒸馏工改错了，应改回**。
- 次要勘误（不改判）：3.4 证据列「72F19D06 define :1410 / 7A900081 define :1412」——define 语句实际起于 app-service.js:1409 / :1411，:1410/:1412 为模块体（sheep 样本 / getRecorderManager+setQCloudSecret 所在行），引用行号建议前移一行。
- diff 摘要：节点树/类名/文案/事件云函数/样式五项全过；唯一实质 diff = 3.5 限流第 3 条条件被蒸馏工误改（原文 `0==a.globalData.vip&&…`），外加 1 处 define 行号引用偏移。修完 3.5 后本页可判 PASS。

> 蒸馏工修订（2026-10-02）：已按 diff ①② 修订（3.5 限流第 3 条改回原文条件 `0==a.globalData.vip&&this.limit_speak_times>100` 并删除错误注记；3.4 两模块 define 行号前移至 :1409/:1411），修订前实读 chunk_45.appservice.js:82 与 app-service.js:1409-1412 核实，待复核。

- [x] **收尾复核（对账员，2026-10-02 现场实读，修订后）——通过，判 PASS**：
  - 复核 1：原文 `chunk_45.appservice.js:82` 实读命中 `if(0==a.globalData.vip&&this.limit_speak_times>100)return void this.showLimitModal("跟读录音次数已超出当日上限，加入会员后可继续使用。",!1)`，spec 3.5 第 3 条已与原文逐字一致，错误「真值判断」注记已删、现为如实说明（vip==0 且 >100 弹窗；vip<0 被第 2 条拦截；vip>0 不限次）——通过；
  - 复核 2：`app-service.js` 实读 1409-1412 行——:1409 行尾起 `define("72F19D06…`、:1410 模块体（sheep 样本）；:1411 行尾起 `define("7A900081…`、:1412 模块体（getRecorderManager+requirePlugin wx3e17776051baf153+setQCloudSecret，密钥已脱敏）。spec 3.4 行号已改为「:1409 define，:1410 模块体」/「:1411 define，:1412 模块体」——通过；
  - 复核 3（回归抽验，均命中）：骨架 5 节点——z[0]='tui-banner-item'(:19)、z[7] 拼接 `image_index+1+'/'+speakList.length`(:26)、z[17]='▶'(:36)、z[22]='tui-button-bottom'(:41)、z[33]=`Z(z[26])`(:52) 复用 clickRecord；wxss 4 处——.tui-banner-item margin-top:10px(:1)、.tui-slide-image 9px/60vh/transition .05s(:3)、.tui-pro-titbox-describe 36px(:6)、.bottom-icon-speak 69px/margin 12px(:8)。修订未引入回归。
  - 首轮两条 diff 均已落实，无残留，本页 spec 通过。

---

## 蒸馏工备注（本 ask 实际执行的核对）

- 实读：`unpacked/chunk_45.appservice.js` 全文（82 行，:82 压缩体关键片段逐一 grep 解读）、`unpacked/chunk_45.webview.js` :19-64（ops 46 条逐条）与 :70-168（m0 全文）、`wxss_out/pages__unitStudy__unitStudy.wxss` 全文（30 行）。
- 实跑命令与结果：`grep -l "'./pages/unitStudy/unitStudy.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_45；`grep -c '^Z(' unpacked/chunk_45.webview.js` = 46、`grep -c '^Z(' unpacked/chunk_45.appservice.js` = 9（稀疏副本实证）；`grep -c callFunction unpacked/chunk_45.appservice.js` = 0；`grep -o 'qianyufang.top[^"]*' unpacked/chunk_45.webview.js | sort | uniq -c` → 6 图标 5 组（见 4 节）；`grep -o 'yingyu/[a-z-]*\.mp3' unpacked/chunk_45.appservice.js | sort | uniq -c` → 5 文件各 1；`grep -o '"pages/unitStudy/unitStudy.html":{[^}]*}' unpacked/app-config.json` → 系统栏 window（无 navigationStyle:custom）；`grep -o 'wx3e17776051baf153\|sentenceRecognition\|16k_en\|setQCloudSecret' unpacked/app-service.js` 全命中（:1412 define 实读，密钥已脱敏）；animation.wxss 不存在于 wxss_out，scale-up keyframes 定义在 `unpacked/webview.app.js`（grep 实证）。
- 与依据包的差异修正：① 依据包称录音遮罩 catch:tap「绑定值索引无法对上」——本次实解码 z[33]=Z(z[26])='clickRecord'（:52 复用 :45），已入骨架，仍列对账复核项；② 限流条件此前的「与依据包的差异修正②」注记系蒸馏工误记（依据包「vip==0 且>100」本就正确，:82 原文即 `0==a.globalData.vip&&this.limit_speak_times>100`），已于 2026-10-02 复核修订时改正，3.5 第 3 条现为原文条件；③ 依据包未写明 countResultEasy 的具体档位（≥100→5 星/≥80→4 星/≥60→**4 星**/否则 3 星，无 1/2 星档），已按 :82 原文补全；④ 依据包未写明 clickNext 末图末句**回卷 image_index:0** 循环行为，已补；⑤ onShareAppMessage path 为 `/pages/unitStudy/unitStudy`（本页自身），与 unitQuiz 的 `/pages/school/school` 不同；⑥ 页面 json 声明的 3 个 usingComponents（tui-icon/tui-rate/tui-bottom-popup）在富树中均未使用（e_ j/ic 空，:168），已标注。
- 未做：captures/ jsonl 未读（img/audio 命名规律未采样）；CDN 可达性/真机验证；全局 ColorUI 样式（page-frame.html）未提取。
