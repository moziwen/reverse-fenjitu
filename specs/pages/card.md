---
页名: card
显示名: 阅读卡（绘本跟读/录音测评/单词拼图）
状态: 对账通过（待验收）
chunk: chunk_27.webview.js / chunk_27.appservice.js
导航栏: 系统栏（初始标题为空字符串，运行时由 getCardList 成功后 500ms 设为书名 title）
---

# 页面还原规格：阅读卡（pages/card/card）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_27.webview.js，A=unpacked/chunk_27.appservice.js，X=unpacked/wxss_out/pages__card__card.wxss，C=unpacked/app-config.json。
> 定位：`grep -l "'./pages/card/card.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_27；`grep -l 'File__="pages/card/card.js"'` → chunk_27.appservice.js（app-service.js 同名串为打包外壳）。
> W 节点树标识 `$gwx_XC_20`（W:1），ops 数组 `gz$gwx_XC_20_2`（W:25-600），渲染函数 m1（W:618-1689），wxml 注册 `__wxAppCode__['pages/card/card.wxml']`（W:1713，本次 grep 实证）。W:603 `var x=['./components/tui-top-dropdown/tui-top-dropdown.wxml','./pages/card/card.wxml']`（本次 grep 实证）——chunk_27 同时承载 tui-top-dropdown 组件。
> A 页面 Page() 定义：`define("pages/card/card.js",...)`（A:443-445，445 行 `{isPage:true,currentFile:'pages/card/card.js'}` 注册尾，本次 grep/awk 实证；441-442 行为 tui-top-dropdown 组件注册 `{isPage:false,isComponent:true,...}`）。逻辑正文全部在 A:444 单行压缩代码内，函数级行号统一记 A:444。
> X 共 381 行（`wc -l` 实证），首行 `[2,"./static/animation.wxss"]` 引全局动画（breathe/ripple/blink keyframes 实际来自 page-frame 侧全局样式）。

## 1. 页面骨架（节点树）

来源：`chunk_27.webview.js` 的 `$gwx_XC_20`（W:1），行号均指 W。

```
<!-- 分支1：封面遮罩 cover_big.length!=0（z[0]，W:29；渲染 m1 W:622-639） -->
<view class="bg-img1" style="background-image:url({{cover_big}})" catch:tap="clickCoverBig">   (W:30-32)
  <view bind:tap="playAudioBig" class="cover-title cover-titbox text-white">                    (W:33-35)
    <text>{{title}}</text>                                                                       (W:36)
  </view>
  <view catch:tap="clickCoverBig" class="enter-tip">                                             (W:37-38)
    <text class="enter-tip-text">点击进入</text>                                                  (W:39-40)
  </view>
</view>

<!-- 分支2：主阅读区（else，W:640 起） -->
<!-- 2a. displayMode==1（z[12]，W:41；AA/A/B 级纯文字模式） -->
<swiper bindchange="bannerChangeHandle" current="{{bannerIndex}}" easing-function="easeOutCubic"
        circular="{{true}}" style="height:100vh">                                                (W:42-47)
  <swiper-item wx:for="{{list}}" wx:for-item="item">                                             (W:48-49)
    <view bind:tap="initParagraphs" style="background-image:url({{item.img}});height:100%">      (W:50-52)
      <!-- tui-product-title1 容器显示条件：autopage_hide==false && showGame==false（z[24]，W:53）；isTitle_zh==false（z[26]，W:55）只决定容器内是分词循环还是整段 cur_title_zh（m1 W:687-693） -->
      <view wx:for="{{paragraphs}}" wx:for-item="pItem">                                         (W:57)
        <text wx:for="{{pItem.words}}" catch:tap="clickWord"
              class="{{word.type==='word'?'title1-text':''}} {{word.highlight?'highlighted':''}}"
              data-p-index="{{pIndex}}" data-w-index="{{wIndex}}"
              style="font-size:{{list[bannerIndex].font}}rpx;color:{{word.color}}">{{word.text}}</text>  (W:61-69)
      </view>
    </view>
  </swiper-item>
</swiper>
<view wx:if="{{record_content!=''}}" catch:tap="playRecordAudio" class="audio-btn-1">
  <text class="audio-icon">▶</text>                                                              (W:73-76)
</view>

<!-- 2b. displayMode==2（z[48]，W:77；C 级及以上图文模式） -->
<!-- isPad==false 分支（W:78） -->
<swiper bindchange="bannerChangeHandle" current="{{bannerIndex}}" easing-function="easeOutCubic"
        circular="{{true}}" style="height:{{phone_image_height}}rpx">                            (W:79-84)
  <swiper-item data-index="{{index}}">
    <image bind:tap="initParagraphs" mode="widthFix" src="{{item.img}}"
           style="width:100%;height:100%"/>                                                      (W:87-92, 节点723)
  </swiper-item>
</swiper>
<!-- isPad 分支：image class="pad-image" style="height:{{pad_image_height}}rpx" mode="heightFix" -->  (W:120-127)
<!-- 正文 text 同模式1但 class=title2-text（W:105→z[76]）；中文段 paragraphs_zh class=title2-text（W:111-113） -->
<!-- 两种模式尾部均有 -->
<view catch:tap="playRecordAudio" class="audio-btn-2"><text class="audio-icon">▶</text></view>   (W:153-155)

<!-- 3. 固定顶栏 -->
<view class="top-view">                                                                          (W:156)
  <view class="setting">
    <tui-icon bindclick="showSettingModal" color="#ff9b6a" name="setup" size="80" unit="rpx"/>   (W:158-162)
  </view>
  <view bindtap="deleteRecord">                                                                  (W:163)
  <image wx:for="{{userStarList}}" class="icon-star-speak"
         src="{{item>3 ? '…/star_icon.png' : '…/star_icon_grey.png'}}"/>   <!-- 阈值 item>3 用亮星（W:168）[＋breathe-effect 当前页+showConfetti] [＋small >10星]（W:167-168） -->
  </view>
  <button open-type="share">                                                                     (W:169-171)
    <image class="share-image" src="…/icon/share.png"/>                                          (W:172-173)
  </button>
</view>

<!-- 4. 右侧进度条 -->
<tui-tag padding="12rpx 18rpx" shape="circleRight" type="translucent">{{bannerIndex+1}}/{{list.length}}</tui-tag>  (W:146,175-179)

<!-- 5. 右上功能列 view class=icon-list（W:180） -->
<image bindtap="setAutoPage"     class="icon-right2" src="…/switch-open.png | …/switch-close.png"/>  <!-- 随 isAutoPageStatus（W:181-183） -->
<image bindtap="goQuiz"          class="icon-right1" src="…/icon/quiz.png"/>                     (W:184-186)
<image bindtap="clickWordGame"   class="icon-right3" src="…/icon/wrod_select.png"/>  <!-- 源码即拼写 wrod，照抄（W:187-189） -->

<!-- 6. 左上音频控制（W:190-198） -->
<image bindtap="playAudioHandle" src="…/pause.png | …/play.png"/>        <!-- 随 audioPlayStatus（W:190-192） -->
<image bindtap="showTitleZh"     src="…/icon/zh.png"/>                   (W:193-195)
<image bindtap="clickRecord"     src="…/speak_recording.png | …/speak_record.png"/>  <!-- 随 isRecording（W:196-198） -->
```

### 状态分支
- **封面遮罩**：`cover_big.length!=0` 时整页被封面层覆盖（z[0]，W:29），点击「点击进入」（clickCoverBig，z[1]）进入阅读区。
- **displayMode**：1=纯文字模式（AA/A/B 级，z[12]）；2=图文模式（C 级及以上，z[48]）。displayMode 由 onLoad 的 getSystemInfo 按级别写入（A:444）。
- **displayMode==2 内部分支**：`isPad==false`（image mode=widthFix, style=height:{{phone_image_height}}rpx）与 `isPad`（class=pad-image, mode=heightFix, style=height:{{pad_image_height}}rpx）两套尺寸（W:78-127）。isPad 判定：windowHeight/windowWidth<1.5（A:444）。
- **正文双轨**：英文段 `paragraphs`（type='word' 有 title1-text/title2-text 类、color、highlight 高亮、catch:tap=clickWord），中文段 `paragraphs_zh` 仅 displayMode==2 显示（class=title2-text，W:111-113）。
- **tui-product-title1 容器**：显示条件 `autopage_hide==false && showGame==false`（z[24]，W:53）；`isTitle_zh==false`（z[26]，W:55）只决定容器内是分词循环还是整段 `cur_title_zh`（W:687-693）。
- **audio-btn 回听按钮**：显示条件均为 `record_content != ''`（z[43]，W:72；文字模式 `_oz(z,43)` W:699、图文模式 `_oz(z,122)`→z[43] W:844 同），与 isComplete 无关。文字模式 audio-btn-1（W:73-76）；图文模式 audio-btn-2（W:153-155）。isComplete 仅在 A 侧 last-page 1s 定时器中 setData（A:444）。
- **录音中**：isRecording 时全屏遮罩 popup-recording-start（W:421-425，节点 1280-1285），icon-recording 带 animation。

### 以下为页面级弹层/浮层（节点树续，行号均 W）

```
<!-- 7. 设置抽屉 tui-bottom-popup（节点907）：bindclose=hideModal(199) maskZIndex=1001(200) show={{popupShow}}(201) zIndex=1002(202) -->
  内 scroll-view height:60vh(204)，tui-list-cell：
  「1.手动翻页时是否静音」      switch bindchange=changeSetting1  checked=setting_silent        (W:209-211)
  「2.音频播放时是否高亮显示」  changeSetting6                    setting_highlight              (W:217-219)
  「3.录音模式」tui-radio-group changeSetting2 value=setting_speak：
      0=「录音测评」(230) / 1=「只录音不测评」(235)                                            (W:222-235)
  「4.播放选择」changeSetting5 setting_recorder：
      0=「原声音频」(245) / 1=「跟读录音」(250)                                                (W:237-250)
  speed_mode_exist 时：「5.速度模式」changeSetting7 setting_speed_mode
      1=「流利 [感情饱满]」(261) / 0=「慢读 [发音清晰]」(266)                                   (W:251-266)
  else：「5.播放速度」slider changeSetting4 activeColor=#5677fc backgroundColor=#c0c0c0
      max=1.2 min=0.6 step=0.1 value=setting_speed（节点1054）                                  (W:268-276)
      ⚠️ 编号「5.」与上一项「5.速度模式」重复——源码即如此（W:268），照抄勿修正。
  尾部 <tui-nomore text="已经到底部了"/>                                                        (W:277-278)

<!-- 8. 自动翻页弹窗 tui-modal bindcancel=hideModalAutoplay(279) show=modalAutopage(281) 标题「自动翻页设置」(283) -->
  「1.自动翻页时间间隔」slider setAutoPageTime max=3 min=0 step=1 value=autopage_time          (W:287-296)
  「2.单个页面重复次数」slider setAutoPageNum  max=3 min=1     value=autopage_num              (W:299-308)
  「3.是否隐藏底部文字」switch changeAutopage2 autopage_hide                                   (W:313-315)
  「4.是否播放中文音频」switch changeAutopage1 autopage_zh                                     (W:321-323)
  vip>0 时：「5.是否自动播放下一本」switch changeAutopage3 autopage_next                       (W:325-332)
  按钮 bindtap=startAutoPlay class=bg-blue「开始自动播放」                                      (W:335-340)

<!-- 9. 单词卡顶部下拉 tui-top-dropdown（节点1154）：bindclose=hideModal5(341) height=560(342) mask=false(343) show=modalWordTop(344) style=z-index:999(345) -->
  scroll-view class=tui-order-list wx:for=wordClicks(346-347)，view class=tui-goods-item(349)：
  左图 view bind:tap=downloadWordPoster(350) class=tui-goods-img(351)
    <image src="{{item.img}}"/> + tui-new-label-finish/download-icon(355-356) src=…/icon/download_square.png(357)
  中部 tui-goods-center(358)：
    view bindtap=clickWordSpell(359) class=tui-word-name(360) > word-container(362)
      wx:for={{item.name}}(365) wx:for-item=citem(364) wx:for-index=cindex(363)
      <text class="letter-box {{highlightIndex===cindex && clickWordId==index ? 'highlight' : ''}}">{{citem}}</text>  (W:367-368)
    image class=tui-logo-small src=voice_on.png(369-370)
    text {{item.yinbiao}}(371)；tui-goods-name tui-gray text-xxl(372-373)「 [{{item.yinbiao}}]」(374)
    「{{item.zh}}」(377)；{{item.include}}(378) 列表 bindtap=clickWordInclude(384)
  功能行(388-399)：clickWordAudioTop(389) src=pause/play 随 wordPlaying(392)；
    collectWord(393) src=collect/collect_no 随 item.collect(396)；wordExtendTop(397) src=more.png(399)
  clickWordPrompt(401) class=tui-study-prompt(402) 内容 utils.extractSentence(item.prompt)(404)
  海报层 posterUrl(407) class=poster-container-word(408)：closePosterWord(409) close-btn「×」(410-411)；
    image class=poster-img mode=widthFix src=posterUrl(412-414)；savePoster(415) save-btn「保存到相册」(416-417)
  canvas class=hidden-canvas id=posterCanvas type=2d（节点1276）                                 (W:418-420)

<!-- 10. 录音状态层：isRecording 时 -->
<view catch:tap="clickRecord" class="popup-recording-start">
  <image class="icon-recording +animation" src="…/recording.png"/>                              (W:421-425)
</view>

<!-- 11. 测评结果弹层：recordResultShow||isWCPMshow -->
<view catch:tap="closeResultShow" class="popup-recording-end">                                  (W:426-428)
  <!-- recordResultShow 分支（W:429） -->
  星级 wx:for=star：icon-star padding-xss src=star.png/star_gray.png，灰星数 5-star              (W:432-439)
  value==100&&isConfetti：<image class="confetti-gif" src="…/confetti.gif"/>                     (W:441-444)
  <text class="text-macron value-text">{{value}}</text>                                          (W:445-446)
  <text class="result-text">{{record_result}}</text>                                             (W:447-449)
  value!=100 时 action-bar(450-451)：
    playReocrdAudio data-type=1「播放原声」(452-458，函数名源码即拼写 Reocrd，照抄)
    clickStart「再次跟读」(459-464)
    playReocrdAudio data-type=2「录音回放」(465-471)
  <!-- isWCPMshow 分支：战报卡片（W:1389-1522，节点472-531） -->
  reward-card(472) > light-ray(473) > badge-wrapper bounce「🏆」(474-476)
  card-title「本课阅读战报」(477-478)
  metric-row×3：
    「完成度」showWCompleteTip(481,484)：三星 star-icon active-star/empty-star(488)
      animation-delay=(index+1)*0.15s(489)「★」(490)；raw-data-text「{{completedPages}}/{{totalPages}} 页」(492)
    「准确度」showAccuracyTip(493,496)：「平均 {{averageScore}} 分」(504)，星 delay=(index+3)*0.15s(501)
    「流利度」showWCPMtip(505,508)：「{{wcpmValue}} WCPM」(516)，星 delay=(index+6)*0.15s(513)
  comment-area「{{motivationalText}}」(518-520)
  按钮：closeResultShow btn-close「✖ 关闭」(522-526)；showAndGeneratePoster btn-share「✨ 分享」(527-531)

<!-- 12. 拼图游戏层 showGame -->
<view class="game-mask"> <view class="immersive-game-box +shake-err">                            (W:532-534)
  isGamePassed&&isConfetti：confetti(535)
  answer-area wx:for=originalWordsData(541-542)：
    view bindtap=handleWordClick class="word-slot filled/empty +is-error"(545-546)
      word-text {{userAnswer[index].word}}(549-550) + underline-glow(551)
      phonetic-abs-box {{item.phonetic}}(553-555)；{{item.punctuation}}(556-558)
  未通过时 options-pool wx:for=shuffledWords(560-561)：
    view bindtap=moveToAnswer class="word-card-glass +is-hidden" {{item.word}}                  (W:563-566)
  glass-action-btns(567)：closeGame btn-minor「关闭」(568-570)；
    playAudioHandle btn-main 文案随 audioPlayStatus 0=「听音」/1=「暂停」/2=「继续」(571-578)；
    checkGameResult btn-confirm「检查」(579-581)

<!-- 13. 分享海报层 showPoster -->
<view class="poster-mask"> <view class="poster-container">                                       (W:582-584)
  canvas class=hide-canvas id=myPoster style=width:750px;height:1334px type=2d（节点1663）       (W:585-588)
  image class=preview-img mode=widthFix src=posterImage(589-591)
  poster-btns(592)：closePoster btn-cancel「取消」(593-595)；saveToPhotosAlbum btn-save「保存到相册」(596-598)
```

**页面数据引用**（W 节点树绑定全集）：cover_big/title/list/bannerIndex/paragraphs/paragraphs_zh/cur_title_zh(W:71)/isTitle_zh/displayMode/isPad/phone_image_height/pad_image_height/word(text,type,highlight,color)/highlightIndex+clickWordId(W:367 letter-box)/userStarList(星 src 阈值 item>3，W:168)/showConfetti/record_content/isComplete/record_result/audioPlayStatus/isRecording/setting_silent/speak/recorder/speed_mode/speed/vip/popupShow/modalAutopage/autopage_*/modalWordTop/wordClicks(name,img,yinbiao,zh,include,prompt,collect,wordPlaying)/star/value/recordResultShow/isWCPMshow/completionStars/accuracyStars/fluencyStars/completedPages/totalPages/averageScore/wcpmValue/motivationalText/showGame/isShaking(W:534)/isGamePassed(W:535,552,559)/activePhoneticIndex(W:552)/originalWordsData(word,phonetic,punctuation)/userAnswer/itemIsWrong/shuffledWords(word,selected)/showPoster/posterImage/posterUrl。

## 2. 样式规格

来源：`wxss_out/pages__card__card.wxss`（381 行）。数值直接当 px，不除 2。行号为 X 文件行号。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .container | padding-bottom:env(safe-area-inset-bottom) | 页面根容器（X:2） |
| .bg-img1 | background-position:50%; background-size:cover; background-attachment:fixed | 封面背景层（X:47-48） |
| .cover-title | border-radius:30px; bottom:80px; min-height:100px; padding:20px 0; position:fixed | 封面书名条（X:213-214） |
| .enter-tip | background:#f1f1f1; border-radius:20px; bottom:33px; box-shadow:0 2px 4px rgba(0,0,0,.05); height:41px; right:30px; width:90px; opacity:.7; font-size:16px; position:fixed | 「点击进入」提示（X:217-218） |
| .tui-product-title1 | background:#f1f1f1; border-radius:25px; bottom:0; height:80px; font-size:25px; font-weight:500; opacity:.7; position:fixed; z-index:99 | 文字模式正文容器（X:51-52） |
| .title1-text,.title2-text | color:#2d3436; font-family:Arial,Microsoft YaHei,黑体,宋体,sans-serif; font-weight:500; letter-spacing:.5px; line-height:1.4 | 正文文字（X:185） |
| .title2-text | font-size:28px | 图文模式正文（X:186） |
| .tui-product-title2 | font-size:28px; line-height:1.6; padding:10px 40px 10px 10px; word-spacing:2px | 图文模式英文容器（X:54） |
| .tui-product-title3 | font-size:21px | 图文模式中文容器（X:56） |
| .pad-image | — | iPad 图文模式图（X:51 区域） |
| .top-view | position:fixed; top:0; width:100%; z-index:99; padding:0 5px; justify-content:space-between | 固定顶栏（约 X:62，压缩排序） |
| .setting | left:10px | 设置图标位 |
| .tui-banner-tag | color:#fff; left:0; position:fixed; top:60px | 进度 tag（约 X:64） |
| breathe/ripple/blink | keyframes（X:3-22）；.blink→breathe 1.2s infinite（约 X:23）；.breathe-effect→breathe 3s 1 forwards（约 X:24）；.ripple::after→ripple-ani（X:25-31） | 全局动画（实源自 ./static/animation.wxss，X:1 import） |
| .hotspot-container | 60px; translate(-50%,-50%) | 星星热区（约 X:32） |
| .star-wrapper | 34px; z-index:10 | 星星容器（X:33-34） |
| .audio-btn-1 | bottom:90px; right:13px | 文字模式回听按钮（X:378-379） |
| .audio-btn-2 | bottom:20px; left:50%; translate(-50%,-50%); z-index:199 | 图文模式回听按钮（X:379-380） |
| （audio-btn-1/2 共有） | background:#fff2bd; border-radius:50%; height:40px; width:40px; position:fixed | 回听按钮外观（X:379） |
| .audio-icon | color:#4d4430; font-size:14px | 「▶」（X:381） |
| .metric-label | color:#5c6b73; font-size:16px; font-weight:500; width:31% | 战报指标名（X:352） |
| .stars-box | gap:6px; width:44% | 战报星级盒（X:355） |
| .star-icon | font-size:26px | 战报星（X:356） |
| .raw-data-text | color:#a0aec0; font-size:12px; font-weight:700; width:25% | 战报原始数据（X:357） |
| .comment-text | color:#4a5568; font-size:14px; line-height:1.6; text-align:center | 战报激励文案（X:312） |
| popIn/floating/starPop/fadeInUp/buttonPulse | keyframes（X:313-351） | 战报动画 |
| .btn-close | background:#f0f4f8; color:#7f8c8d | 战报关闭钮（X:338） |
| .btn-share | background:linear-gradient(135deg,#ff9f43,#ff6b6b); box-shadow:0 6px 16px hsla(0,100%,71%,.3); animation:buttonPulse 2s infinite | 战报分享钮（X:340） |
| .poster-mask | background:rgba(0,0,0,.65); z-index:9999 | 海报遮罩（X:359） |
| .poster-container | width:80%; animation:popScaleUp .35s cubic-bezier(.34,1.56,.64,1) both | 海报容器（X:360-361） |
| .preview-img | border-radius:18px; box-shadow:0 12px 36px rgba(0,0,0,.4); width:100% | 海报预览（X:362） |
| .btn-action | border-radius:23px; height:46px; font-size:15px; font-weight:700 | 海报按钮（X:364） |
| .btn-save | background:linear-gradient(135deg,#ff9f43,#ff6b6b) | 保存钮（X:367） |
| .hide-canvas | height:1334px; left:-4999.5px; top:-4999.5px; width:750px; position:absolute; opacity:0 | 分享海报离屏画布（X:358） |
| .poster-img | width:300px; height:540px; border-radius:8px | 单词卡海报（X:373） |
| .save-btn | background-color:#ff9800; border-radius:20px; width:200px; font-size:15px | 单词卡保存钮（X:374） |
| .hidden-canvas | width:300px; height:540px; left:-9999px | 单词卡离屏画布（X:375） |
| .close-btn | 30px 圆钮; right:30px; top:40px; z-index:10001 | 单词卡海报关闭（X:376-377） |

依据包已核对关键选择器实际存在（.tui-product-title1 X:52、.audio-btn-1 X:378-380、.reward-card 区域 X:312-377 等）。~~待复核~~ **已解除**（对账员 D10：52 类批量 grep 全中、关键数值抽验逐值相符，2026-09-28）。

依赖的全局类（ColorUI 等，page-frame.html setCssToHead，本次未展开）：.text-white / .text-macron / .text-xxl / .text-xl / .padding-xss / .bg-blue / .bg-img 相关 / .tui-gray / tui-* 组件类；组件样式（tui-icon/tui-tag/tui-bottom-popup/tui-top-dropdown/tui-modal/tui-list-cell/tui-radio-group/tui-label/tui-radio/tui-nomore）在 wxss_out/components__*.wxss（本页 tui-top-dropdown 在 wxss_out/components__tui-top-dropdown__tui-top-dropdown.wxss）。

## 3. 事件与逻辑

来源：`chunk_27.appservice.js`（A:443-445，Page 正文全部在 A:444 单行压缩代码内）。

页面 data 初始值（A:444 Page 对象字面量，依据包通读）：`displayMode:1, isPad:!1, title:'', cover_big:'', list:[], bannerIndex:0, cur_title_zh:'', speed_mode_exist:!1, audioPlayStatus:0, isRecording:!1, isComplete:!1, setting_silent:!1, setting_highlight:!1, setting_speak:0, setting_speed:1, setting_recorder:0, setting_speed_mode:1, userStarList:[], isTitle_zh:!1, record_result:'', record_content:'', isWCPMshow:!1, wcpmValue:0, completionStars:1, accuracyStars:1, fluencyStars:1, totalPages:8, completedPages:0, averageScore:0, showPoster:!1, posterImage:'', posterUrl:'', isAutoPageStatus:!1, modalAutopage:!1, autopage_time:1, autopage_num:1, autopage_zh:!1, autopage_hide:!1, autopage_next:!1, modalWordTop:!1, wordClicks:[], popupShow:!1, star:1, value:60, recordResultShow:!1, isConfetti:!1, showGame:!1, shuffledWords:[], userAnswer:[] 等`。

### 生命周期
- **onLoad(t)**（A:444）：card_id=t.id、level=card_id 截 '-' 前缀、daka_day 透传；getSystemInfo()（windowHeight/Width 判 isPad：windowHeight/windowWidth<1.5 为 pad；AA/A/B 级 displayMode=1，其余=2）；bindAudio()；1s 后 settingLock 解锁；getCardList()；getSettingStorage()；有 baby_id 则 initUserData() 否则挂 babyInfoReadyCallback。
- **onShow**：bindSpeak()（A:444）。
- **onUnload**：关闭自动播放并销毁 innerAudioContext（A:444）。
- 无 onReachBottom / onPullDownRefresh（`grep -c "onReachBottom\|onPullDownRefresh" unpacked/chunk_27.appservice.js` → 0，本次实证）；C:1 中该页 `enablePullDownRefresh:false`、`onReachBottomDistance:0`（本次实证）。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 封面「点击进入」 | clickCoverBig | 关闭封面遮罩进入阅读 | — | — |
| 封面点击 | playAudioBig | 播封面大图原声（cover_big .jpg→.mp3） | — | audioPlayStatus |
| swiper 翻页 | bannerChangeHandle | bannerIndex 同步；450ms 后 processPageData（非静音或自动播放时 playAudioAuto）；最后一页延时 1s 置 isComplete 并 updateUserRecord/checkCardWords | updateUserStudy(updateUserRecord 内，见下) | bannerIndex, isComplete |
| 文字/图 tap | initParagraphs | 重建分词并（按设置）恢复播放 | — | paragraphs/paragraphs_zh |
| 单词 tap（正文） | clickWord | wordsList 缓存/words 集合查询 → modalWordTop 弹 tui-top-dropdown | words.where({name,include…elemMatch}).get | modalWordTop, wordClicks |
| 播放/暂停 | playAudioHandle | audioPlayStatus 0/1/2 三态 | — | audioPlayStatus |
| 中文朗读 | showTitleZh | 播 .jpg→0.mp3，isTitle_zh 切换 | — | isTitle_zh |
| 录音 | clickRecord | 限次三连判（见计算规则）后 start/stop 录音测评 | updateUserStudy(记录回写，见下) | isRecording, record_result, value, star |
| 回听 | playRecordAudio | 播 recordAudios[bannerIndex]（跟读录音可替换原声） | — | — |
| 设置 | showSettingModal / hideModal | popupShow 开关 | — | popupShow |
| 设置项 | changeSetting1/2/4/5/6/7 | 静音/录音模式/播放速度/播放选择/高亮/速度模式 | — | setting_* |
| 自动翻页 | setAutoPage → startAutoPlay | 弹 modalAutopage；startAutoPlay 存 Storage 'autoPlaySetting' 并启动 | — | isAutoPageStatus, modalAutopage |
| 自动翻页设置 | setAutoPageTime/Num, changeAutopage1/2/3 | slider/switch 同步 | — | autopage_* |
| 自动翻页推进 | pageChangeAuto / nextAutopage | 读完当前书 index+1 自动下一本 | — | bannerIndex |
| 测验 | goQuiz | 录音中拒绝（isRecording!=true 才继续）；停自动播放；AA/A/B/C 级 → `../cardTest/cardTest?level=&id=&index=&daka_current=`，其余级 → `../cardQuiz/cardQuiz?level=&id=&index=&daka_current=`（A:444 原文实证） | — | — |
| 拼图 | clickWordGame / initGame / moveToAnswer / handleWordClick / moveBack / checkGameResult / closeGame | cur_title 按 `/([a-zA-Z0-9'-]+)([.,!?;])?/` 切词洗牌；错词 shake+vibrateShort；全对播 perfect.mp3 | words 查 word 的 audio_en/yinbiao（playGameWordAudio） | showGame, shuffledWords, userAnswer, itemIsWrong |
| 单词卡拼读 | clickWordSpell | `https://qianyufang.top/public/letter/<单字母>.mp3` 逐字母 + audio_en | — | — |
| 单词卡例句 | clickWordPrompt | 播 item.prompt（extractString 提取 `Prompt/(.*)\.mp3`） | — | — |
| 收藏 | collectWord | 收藏 + addWordlistQuiz 自动加入 quiz + 计数 | updateUserStudy(collectWord) / updateWordNum(word_id) | wordClicks[].collect |
| 单词扩展 | wordExtendTop | 跳 ../wordExt/wordExt?word= | — | — |
| 单词卡海报 | downloadWordPoster / savePoster / closePosterWord | 生成/保存/关闭单词卡海报；不调 getShareQRcode，二维码用固定 `qrcode.jpg`（A:444，见 D9） | downloadFile(wordClicks[e].img) + downloadFile(…/qrcode.jpg) | posterUrl |
| 测评操作 | clickStart / playReocrdAudio | 再次跟读 / 播原声(data-type=1)/录音回放(data-type=2) | — | — |
| 结果关闭 | closeResultShow | recordResultShow/isWCPMshow 关 | — | — |
| 战报分享 | showAndGeneratePoster / drawPosterContent / saveToPhotosAlbum / closePoster | 750×1334 canvas 海报 | getShareQRcode(share_info=openid+level(AA→'-')+card_index) | posterImage |
| 星星区 tap | deleteRecord | 删除本卡跟读记录 | updateUserStudy(deleteRecord，两处 tag) | userStarList |
| 分享 | onShareAppMessage | `t.from!="button"` 推广分支：title「分享你一个英语分级阅读小程序」、path=`/pages/index/index?tuiguang_openid=<openid>`、imageUrl=…(tcb.qcloud.la)/public/yingyu/shareImg.png；button 分支：path=/pages/share/share?card_id=&**user_babyid**=（无第二下划线，A:444 原文实证）；标题「<昵称>的第<total_days>天英语分级打卡已完成，<level>级《<title>》」，昵称缺省：nickName 为空或「微信用户」时用「我」；imageUrl=cover.replace('.jpg','0.jpg') | — | — |

### 云函数调用清单（A:444，`grep -o 'callFunction({name:"[A-Za-z]*"'` 计数，本次实证：updateUserStudy 12 / updateUserData 9 / updateUserPlan 4 / getShareQRcode 1 / updateWordNum 1）

1. `updateUserStudy` ×12，tag：recordUpdate / levelAdd / levelUpdate / monthDaysAdd / voiceSpeedSet / recordAudio（saveRecord 回写、deleteRecord 两处）/ unCollectWord / collectWord / wordsAddQuiz。
2. `updateUserData` ×9，tag：cardPush / cardNumUpdate / cardAdd / speakWcpmUpdate / singleSpeakTodayUpdate / speakPush / speakStarUpdate / wordStudyNew / wordStudy。
3. `updateUserPlan` ×4，tag：finish / plan_daka_add / plan_daka_progress / speak。
4. `getShareQRcode` ×1，参数 share_info=openid+level(AA→'-')+card_index。
5. `updateWordNum` ×1，参数 word_id。

### 云数据库直连（A:444，`grep -o 'collection("[a-z_]*")'` 计数，本次实证：words 7 / user_study 6 / user_plan 3 / user_data 2 / plan 1）

- `words` ×7：clickWord 查词（name/include elemMatch）、playGameWordAudio、collectWord 兜底等。
- `user_study` ×6：getTotalDays、getRecordAudios（aggregate project）、updateDataLevel、updateUserStudyQuiz、checkWordCollect、updateTotalDays。
- `user_plan` ×3、`user_data` ×2、`plan` ×1。
- **动态集合**：getDatabaseLevel() 将 level 映射为内容集合名 AA→AA、A→AL、B→BL、C→CL、D→DL…K→KL；getCardList/nextAutopage 按 `collection(该名).where({id|index}).get`。

### 计算规则（判分/星级/WCPM，精确到边界）

- **阅读主流程**（A:444）：getCardList 取书 → allParagraphs=splitTextIntoParagraphs(title_arr||title, phrase)（processSentence 按 phrase 正则标 type:'phrase' color:'blue'，纯英文/中文分词 type:'word'/'other'）→ bannerChangeHandle 450ms 后 processPageData。
- **音频命名规律**：见第 4 节。语速 playbackRate=babyInfo.voice_speed（≥0.6 才生效）。
- **高亮跟读**（A:444）：handleHighlight 按字符数占比生成 generateWordTimings + setInterval(50ms) 二分定位高亮 paragraphs[p][w].highlight。
- **录音限次 clickRecord**（A:444，分支顺序与文案已回读原文实证）：① `limit_speak_times>500` → showModal title「提示」content「当日录音跟读识别次数已超合理上限500次，次日恢复.」（句尾为英文句点）② `vip<0` 且已达 2 次/日 → showLimitModal「跟读录音测评功能，加入会员后可无限制使用。」③ `vip==0` 且已达 100 次/日 → showLimitModal「普通用户每日跟读录音次数有上限，加入VIP后可解除限制。」
- **评分链**（A:444）：checkResult → countResultValue →
  - 单句 countResultSingle：compareSingleWord 精确匹配 + PHONETIC_MAP 近音词容错（近音表模块 `l=require('../../72F19D06BB058EAF1497F50124DF56F4.js')`，优先 wx.getStorageSync('PHONETIC_MAP')）；
  - 多句 countResultEasy：processVoiceResultWithMissing 虚词表 0.5 分 + wordSimilarity Levenshtein；
  - → calculateStarAndValue：**100→5星；≥90→5星；≥80→4星；≥70→3星；>60→2星；其余→1星**；
  - → countUserStars → saveRecord（wx.cloud.uploadFile cloudPath=`audios/<vip>/<yyyyMM>/<level>/<card_id>/<baby_id>_<bannerIndex>.mp3`）→ updateSpeakData（speakPush/speakStarUpdate）。
- **语音识别封装**（A:444）：bindSpeak 依赖模块 `d=require('../../7A900081BB058EAF1CF6688611EF56F4.js')`（onStateChange/onSuccessCallback/start/stop）。
- **WCPM 战报**（A:444 showWCPMresult，分界已回读原文实证）：三星分界——完成度 `Math.round(10*完成页/总页)>=10?3:>=5?2:1`；准确度 `averageScore>=85?3:>=60?2:1`；流利度 `wcpmValue>=50?3:>=30?2:1`；getMotivationalText 按「完成-准确-流利」星级键取随机激励文案（含 default_* 兜底，全部文案内置于源码）；countWCPM 时长 ×0.85 系数。
- **打卡/计划联动**（A:444）：updateUserRecord → updateDataLevel+updateUserData+updateUserPlan → checkPlanDaka；checkTodayDakaSpeakStar/checkPlanSpeak/updateTotalDays；免费/体验限制：card_times≥100 拒绝、vip==0 每日 10 次（checkUserDataToday）。
- **导航栏标题**：getCardList 成功后 500ms `wx.setNavigationBarTitle({title:this.data.title})`（A:444；`grep -c setNavigationBarTitle` → 1 处，本次实证）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 页面原声音频 | 页面图 `.jpg` → 同名 `.mp3` | A:444 代码字符串拼接 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 慢读音频 | speed_mode_exist 且 setting_speed_mode==1 时 `.jpg` → `1.mp3` | A:444 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 中文朗读音频 | `.jpg` → `0.mp3` | A:444 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 封面大图原声 | cover_big `.jpg` → `.mp3`（playAudioBig） | A:444 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 跟读录音替换 | 回听可替换为 recordAudios[bannerIndex] | A:444 | 已验证（代码逻辑） |
| 拼读字母音 | `https://qianyufang.top/public/letter/<单字母>.mp3` 逐字母 | A:444 clickWordSpell | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 测评结果音频 | `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/{perfect,brilliant,good,great,try-again}.mp3`（playResultAudio 按 5/4/3/2/1 星选曲） | A:444 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 静态资源域名 | `https://qianyufang.top/public/yingyu/...`（图标 share.png/quiz.png/wrod_select.png/zh.png/switch-open.png/switch-close.png/star_icon.png/star_icon_grey.png/download_square.png/recording.png、gif/confetti.gif 等） | W 节点树 URL 字面量 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 上传录音路径 | cloudPath=`audios/<vip>/<yyyyMM>/<level>/<card_id>/<baby_id>_<bannerIndex>.mp3` | A:444 saveRecord | 已验证（代码逻辑） |
| 页面内容图/文 | 来自动态集合（AA/AL/BL/CL/DL…KL），item.img/list[bannerIndex].font 等，命名规律未知 | A:444 getCardList | ⚠️ 待采集（captures/ 本页数据结构未核对） |
| quiz 二维码 | 固定 `https://qianyufang.top/public/yingyu/qrcode.jpg`（海报内，downloadWordPoster/drawPosterContent 共用，A:444 原文出现 2 处） | A:444 downloadWordPoster/drawPosterContent | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |

注：所有 URL 命名规律均出自代码字符串拼接，CDN 可用性未验证（本岗未做运行时验证）。

## 5. 弹窗 / 分支状态

- **设置抽屉**（tui-bottom-popup，popupShow）：5 组设置项，speed_mode_exist 分支决定显示「速度模式」单选还是「播放速度」slider（0.6-1.2，step 0.1）；「播放速度」文案编号「5.」与「5.速度模式」重复——源码即如此（W:268），照抄勿修正。
- **自动翻页弹窗**（tui-modal，modalAutopage）：autopage_next 项仅 vip>0 显示；「开始自动播放」存 Storage 'autoPlaySetting'。
- **单词卡下拉**（tui-top-dropdown，modalWordTop，height 560，z-index 999）：词条含 name/img/audio_en/audio_zh/yinbiao/zh/include/prompt/collect/wordPlaying；含独立海报层（poster-container-word）。
- **录音测评结果层**（popup-recording-end，recordResultShow）：星级（灰星 5-star）、分值大数字、record_result 文案；value==100 时 confetti.gif；value!=100 显示三操作（播放原声/再次跟读/录音回放，函数名 playReocrdAudio 为源码拼写错误，照抄）。
- **WCPM 战报卡**（isWCPMshow）：reward-card 三指标（完成度/准确度/流利度）各三星 + 激励文案 + 关闭/分享按钮。
- **拼图游戏层**（showGame，game-mask）：immersive-game-box；错词 shake-err；未通过显示 options-pool，通过后仅答区；底部三按钮（关闭/听音·暂停·继续/检查）。
- **分享海报层**（showPoster，poster-mask）：hide-canvas 750×1334 离屏 + preview-img 预览 + 取消/保存；海报内容「今日阅读战报」、完成度/准确度/流利度三星、激励文案、二维码、slogan「英语分级兔，陪孩子快乐读RAZ」（A:444 drawPosterContent）。
- **会员引导**：vip==0 录音超限/免费次数用尽时弹会员引导（A:444）。
- **依赖组件**：tui-icon / tui-tag / tui-bottom-popup / tui-top-dropdown（本 chunk 自带，W:603 + A:441-442）/ tui-modal / tui-list-cell / tui-radio-group / tui-label / tui-radio / tui-nomore。

## 6. 对账记录（对账员填写，2026-09-28 独立重推）

- [x] 节点树与原文一致 —— 基本一致，4 处偏差见 diff D1-D4
- [x] 类名抽查 52 处全中（要求 ≥10）
- [x] 文案逐字一致
- [x] 事件与云函数调用清单齐全

### 对账方法（本次实际执行）
- W 侧：通读 `chunk_27.webview.js` W:25-600（ops 数组 gz$gwx_XC_20_2）+ W:618-1689（m1 渲染函数），逐 z 索引（行 N → z[N-29]）与 spec 骨架比对。
- X 侧：通读 `wxss_out/pages__card__card.wxss` 全 381 行；`grep -c "\.<类名>[,{ :.]"` 批量抽查 52 个类名，全部 ≥1 命中；关键数值逐条比对。
- A 侧：`grep -o` 实证 A:444 内函数定义、云函数计数（updateUserStudy 12 / updateUserData 9 / updateUserPlan 4 / getShareQRcode 1 / updateWordNum 1）、collection 计数（words 7 / user_study 6 / user_plan 3 / user_data 2 / plan 1 + 动态 collection(a)/(e) 各 1）、全部 tag 字面量、goQuiz/clickRecord/showWCPMresult/calculateStarAndValue/onShareAppMessage/downloadWordPoster/playResultAudio/saveRecord/countWCPM/getSystemInfo/onLoad/onShow/onUnload/bannerChangeHandle/processPageData/nextAutopage/getDatabaseLevel/playAudioBig/playAudioZh/showTitleZh/initGame/clickWordSpell/playGameWordAudio/collectWord 等原文片段。
- C 侧：`pages/card/card.html` window 实证 `enablePullDownRefresh:false`、`onReachBottomDistance:0`、`navigationBarTitleText:""`（app-config.json）。
- 文案：W ops 全部 UI 字符串（点击进入/5 组设置项/自动翻页 5 项/开始自动播放/已经到底部了/播放原声/再次跟读/录音回放/本课阅读战报/完成度/准确度/流利度/★/✖/关闭/✨/分享/听音/暂停/继续/检查/取消/保存到相册/×/▶/🏆）与 spec 逐字一致；A 侧弹窗文案（录音限次 3 条、删除确认、保存提示）一并核到（见 diff 修复建议 R3）。

### diff 摘要（需蒸馏工修正 spec 正文）

- **D1【节点树·实质】audio-btn-1/2 显示条件写错**：spec 骨架行 49 与「状态分支」行 101 写 `wx:if="{{isComplete}}"`。原文 z[43]（W:72）= `record_content != ''`，m1 对文字模式（`_oz(z,43)`，W:699）与图文模式（`_oz(z,122)`→z[43]，W:844）的 audio-btn 条件均为 **record_content 不为空**，与 isComplete 无关。isComplete 只在 A 侧 last-page 1s 定时器中 setData（A:444 实证 `bannerIndex==list.length-1 && !isComplete → setData({isComplete:!0})+updateUserRecord()+checkCardWords()`）。
- **D2【节点树·表述】tui-product-title1 容器条件归属错**：spec 行 39/100 写「isTitle_zh==false 时叠加 tui-product-title1」。原文：容器显示条件 z[24]（W:53）= `autopage_hide==false && showGame==false`；`isTitle_zh==false`（z[26]，W:55）只决定容器内是分词循环还是整段 `cur_title_zh`（W:687-693）。
- **D3【节点树·小】战报星动画 delay 写错**：spec 行 169 写 `index*0.15s`。原文 z[489]（W:489）= `(index+1)*0.15s`；准确度行 `(index+3)*0.15s`（W:501）、流利度行 `(index+6)*0.15s`（W:513）。
- **D4【节点树·遗漏】页面数据绑定全集不全**：spec 行 195 遗漏 W 侧实际绑定的 `cur_title_zh`（W:71）、`highlightIndex`/`clickWordId`（W:367 letter-box highlight 条件 `highlightIndex===cindex && clickWordId==index`，spec 行 137 的 `{{highlight}}` 为伪写法）、`isShaking`（W:534）、`isGamePassed`（W:535,552,559）、`activePhoneticIndex`（W:552）；星星 src 阈值 `item>3 ? star_icon : star_icon_grey`（W:168）spec 行 74 未记。
- **D5【事件·实质】goQuiz 分支目标页**（遗留问题 1 关闭）：A:444 原文 `goQuiz`：AA/A/B/C 级 → `../cardTest/cardTest?level=&id=&index=&daka_current=`；其余级 → `../cardQuiz/cardQuiz?level=&id=&index=&daka_current=`。spec 事件表行 274 只写 cardQuiz，需改为双分支。
- **D6【事件·实质】onShareAppMessage 参数名**：原文 path=`/pages/share/share?card_id=...&user_babyid=...`（**user_babyid**，无第二下划线），spec 行 285 写 `user_baby_id` 有误。另：`t.from!="button"` 时走推广分支 title「分享你一个英语分级阅读小程序」path=`/pages/index/index?tuiguang_openid=<openid>` imageUrl=…/shareImg.png（spec 未记）；昵称缺省逻辑：nickName 为空或「微信用户」时用「我」。
- **D7【逻辑·确认】录音限次三分支顺序与文案**（遗留问题 2 关闭）：A:444 clickRecord 原文顺序 ① `limit_speak_times>500` → showModal title「提示」content「当日录音跟读识别次数已超合理上限500次，次日恢复.」（注意句尾英文句点）② `vip<0 && >=2` → showLimitModal「跟读录音测评功能，加入会员后可无限制使用。」③ `vip==0 && >=100` → showLimitModal「普通用户每日跟读录音次数有上限，加入VIP后可解除限制。」spec 行 307 数值/顺序正确，建议补文案入 spec。
- **D8【逻辑·确认】WCPM 三星分界**（遗留问题 3 关闭）：A:444 showWCPMresult 原文：流利度 `wcpmValue>=50?3:>=30?2:1`；完成度 `Math.round(10*完成页/总页)>=10?3:>=5?2:1`；准确度 `平均分>=85?3:>=60?2:1`。calculateStarAndValue：100→{5,100}、>=90→{5,90-99}、>=80→{4}、>=70→{3}、>60→{2}、其余→{1,50-59}。spec 行 311/314 的分界全部与原文相符，可去「待复核」。
- **D9【逻辑·确认】单词卡海报不调 getShareQRcode**（遗留问题 8 关闭）：A:444 downloadWordPoster 原文只 `downloadFile(wordClicks[e].img)` + `downloadFile("https://qianyufang.top/public/yingyu/qrcode.jpg")`（固定二维码）后 drawCanvas；getShareQRcode ×1 确属战报海报侧。spec 行 280 表格中「getShareQRcode?」应删去。
- **D10【样式·确认】wxss 类名抽查全中**（遗留问题 4 关闭）：52 类批量 grep 全部存在；数值抽验 .cover-title X:214、.enter-tip X:218、.tui-product-title1 X:52、.tui-product-title2/3 X:54/56、.audio-btn-1/2 X:378-380、.hide-canvas X:358（left:-4999.5px）、.poster-img X:373、.close-btn X:376、.metric-label X:352、.stars-box X:355 等均与 spec 表逐值相符。
- 其余核对通过：生命周期（onLoad/onShow/onUnload A:444 原文一致）、isPad 判定（`Math.floor(10*h/w)<15` ⟺ h/w<1.5）、displayMode（AA/A/B→1 其余→2）、getCardList 成功后 500ms setNavigationBarTitle（grep 实证 1 处）、saveRecord cloudPath 逐段一致、countWCPM ×0.85 系数一致、playResultAudio 5/4/3/2/1 星→perfect/brilliant/good/great/try-again.mp3 一致、autoPlaySetting 存储键 6 处、checkUserDataToday（card_times>=100「每日合理学习次数上限为100次，次日恢复」；vip==0 且 >=10「体验会员每天学习上限为10次，加入VIP可无解除限制。」）、getDatabaseLevel AA→AA/A→AL…K→KL、initGame 正则 `/([a-zA-Z0-9'-]+)([.,!?;])?/g`、模块引用 72F19D06…/7A900081… 各 1 处。
- 未核项（保持 spec 原标注）：遗留 5（captures 数据结构）、6（PHONETIC_MAP 表内容）、7（CDN 真机验证）不在本次对账范围。

### 修复建议清单（交蒸馏工）
1. 修正骨架行 49 与状态分支：audio-btn 条件改 `record_content != ''`（D1）。
2. 修正 tui-product-title1 条件表述（D2）。
3. 修正战报星 animation-delay 三处（D3），补 D4 遗漏的数据绑定与星星阈值。
4. goQuiz 事件表行改双分支（D5）；onShareAppMessage 参数改 `user_babyid` 并补推广分支（D6）。
5. 将遗留问题 1/2/3/4/8 从清单划去，把 D7 文案、D8 分界、D9 结论并入正文第 3 节。

蒸馏工修正记录（2026-09-24）：落实 D1-D6 及遗留清单更新。

### 对账员复核（第二轮收尾）：D1-D6 修正验证通过，遗留 1/2/3/4/8 关闭确认，verdict=PASS（正文修正落实后）

- D1（audio-btn 条件）：回验 W:72 z[43]=`record_content != ''`、W:699 文字模式 `_oz(z,43)`，spec 行 49/101 新表述「与 isComplete 无关」与原文一致。
- D2（tui-product-title1 条件）：回验 W:53 z[24]=`autopage_hide==false && showGame==false`、W:55 z[26]=`isTitle_zh==false`，spec 行 39/100 条件归属表述正确。
- D3（战报星 delay）：回验 W:489 `(index+1)*0.15s`、W:501 `(index+3)*0.15s`、W:513 `(index+6)*0.15s`，spec 行 169-171 三处 delay 已逐字一致。
- D4（数据绑定补漏）：回验 W:367 letter-box 条件 `highlightIndex===cindex && clickWordId==index`、W:168 星 src 阈值 `item>3`，spec 行 195 补入 cur_title_zh/highlightIndex/clickWordId/isShaking/isGamePassed/activePhoneticIndex，行 74 补入阈值，齐全。
- D5（goQuiz 双分支）：grep 复证 A:444 同时存在 `cardTest/cardTest?level="+this.level+"&id="+this.card_id+"&index="+this.card_index+"` 与 `cardQuiz/cardQuiz?...` 同参两支，spec 行 274 双分支表述与原文一致。
- D6（onShareAppMessage）：grep 复证 `user_babyid`（1 处，无第二下划线）、`tuiguang_openid`（1 处）、「分享你一个英语分级阅读小程序」+ shareImg.png（各 1 处），spec 行 285 参数名与推广分支表述与原文一致。
- 遗留问题 1/2/3/4/8 已按划去格式关闭（~~【已关闭】~~ + 关闭依据），5/6/7/9 按原状保留。D7 文案、D8 分界、D9 结论（qrcode.jpg ×2 / getShareQRcode ×1 grep 复证）已并入第 3/4 节正文。
- 篡改检查：对账员历轮第 6 节对账方法、diff 摘要 D1-D10、修复建议清单文字原样未动；实质清单（52 类名抽查/文案逐字/事件云函数清单）原样。
- verdict=PASS。

---

### 蒸馏遗留问题清单（移交对账员/后续）

1. ~~【已关闭 2026-09-28 对账】goQuiz 跳转参数~~ → 已实证：AA/A/B/C 级跳 cardTest，其余级跳 cardQuiz，参数 level/id/index/daka_current（见 D5，已并入事件表）。
2. ~~【已关闭 2026-09-28 对账】录音限次三分支~~ → 已回读原文实证，顺序与文案见第 3 节（D7）。
3. ~~【已关闭 2026-09-28 对账】WCPM 三星分界~~ → 已回读原文实证，分界见第 3 节（D8）。
4. ~~【已关闭 2026-09-28 对账】X 类名样式表~~ → 对账员 52 类批量 grep 全中、关键数值抽验相符（D10），第 2 节「待复核」标注可视为解除。
5. 【待采集】页面内容图/文（动态集合 AA/AL/BL…KL 的字段结构、img 命名规律）与 words/user_study 样本：captures/ 下本页数据结构未核对（依据包明确未做），数据结构以 captures 为权威。
6. 【待提取】PHONETIC_MAP 近音词表：优先 wx.getStorageSync('PHONETIC_MAP')，兜底本地模块 72F19D06BB058EAF1497F50124DF56F4.js，蒸馏该容错表需单独提取该模块。
7. 【抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）】全部音频/图标 URL 命名规律（qianyufang.top 与 tcb.qcloud.la 两域名）均出自代码拼接，CDN 可用性未验证。
8. ~~【已关闭 2026-09-28 对账】单词卡海报 getShareQRcode 归属~~ → 已实证不调用，二维码为固定 qrcode.jpg（见 D9，已并入事件表与第 4 节）。
9. 【源码原样保留】wrod_select.png（W:189）与 playReocrdAudio（W:452）为源码拼写错误，照抄勿修正；「5.播放速度」编号重复（W:268）同。
