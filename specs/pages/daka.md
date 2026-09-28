---
页名: daka
显示名: 打卡（学习总览）
状态: 对账通过（待验收）
chunk: chunk_32.webview.js / chunk_32.appservice.js
导航栏: custom（自绘导航，无系统栏标题；页面内 tui-header2 显示 {date}）
---

# 页面还原规格：打卡（pages/daka/daka）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_32.webview.js，A=unpacked/chunk_32.appservice.js，X=unpacked/wxss_out/pages__daka__daka.wxss，C=unpacked/app-config.json。A 页面逻辑全部在 A:687 单行压缩代码内（34,125 字符，本次会话已整行导出通读并用 grep -o 核实各方法/字面量），函数级行号统一记 A:687。
> 定位命令与输出：`grep -n "pages/daka/daka.wxml" unpacked/chunk_32.webview.js` → W:688（`var x=['./pages/daka/daka.wxml']`）、W:1746（`__wxAppCode__['pages/daka/daka.wxml'] = $gwx_XC_26(...)` 注册）；`grep -n "define(\"pages/daka/daka" unpacked/chunk_32.appservice.js` → A:686（define 行），函数体在 A:687。W 文件 `grep -c ""` = 1749 行（末行为空行，setCssToHead 在 W:1748）。

## 1. 页面骨架（节点树）

来源：`chunk_32.webview.js` 的 `$gwx_XC_26`（W:1），ops 数组构建函数 `gz$gwx_XC_26_1`（W:19-684，该区间逐行 `Z(...)` ops 定义，本次已抽查通读），渲染函数 `m0`（W:689-1723）。定位命令 `grep -l "'./pages/daka/daka.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_32.webview.js（依据包核实，本次复核 W:688/W:1746 一致）。

```
<view class="tui-header2" style="margin-top:{{top}}px">              (ops[0]=W:19, ops[1]=W:20)
  <view class="tui-icon-box2">                                       (W:21)
    <text class="text-bold text-xls">{{date}}</text>                 (W:22-23)
    <!-- wx:if {{share}}==false (ops[4]=W:24) 包住以下分类入口 -->
    <view class="tui-product-category margin-top-sm">                (W:25)
      <view class="tui-category-item" bindtap="goGroup">             (W:26-30 一带, bindtap=ops[8]=W:28 'goGroup')
        <image class="tui-category-img" mode="scaleToFill"
               src="https://qianyufang.top/public/yingyu/images/daka/group.png"/>   (W:30)
        <view class="tui-category-name">{{itemName1}}</view>         (W:31-32, 初始'加入班级')
      </view>
      <view class="tui-category-item" bindtap="goPlanList">          (W:34-37, bindtap=ops[9+5]=W:34)
        <image class="tui-category-img" src="…/images/daka/plan.png"/>   (W:37)
        <view class="tui-category-name">打卡计划</view>               (W:39)
      </view>
      <view class="tui-category-item" bindtap="goReport">            (W:41-44)
        <image class="tui-category-img" src="…/images/daka/milestone.png"/>  (W:44)
        <view class="tui-category-name">学习报告</view>               (W:46)
      </view>
      <view class="tui-category-item" bindtap="showCalendarModal">   (W:48-51)
        <image class="tui-category-img" src="…/images/daka/calendar.png"/>   (W:51)
        <view class="tui-category-name">日历统计</view>               (W:53)
      </view>
      <button class="tui-share-btn" open-type="share" style="width:100rpx;">  (W:55-57, m0 内 button 节点 W:748 ['class',36,'openType',1,'style',2]，【无 bindtap】，转发全靠 open-type=share)
        <image class="share" src="…/images/daka/share.png"/>          (W:60)
        <view>转发分享</view>                                        (W:62)
      </button>
    </view>
  </view>
</view>

<view class="tui-sign__record" bind:tap="showModalDays">             (W:64, bind:tap=m0 W:760 ['bind:tap',44,'class',1]，z[44]=W:63='showModalDays'——【事件在统计条，不在分享按钮】)
  <view class="tui-record__item">                                    (W:65)
    <view class="tui-record__title">本月打卡</view>                   (W:66-67 一带)
    <view class="tui-record__num"><text class="tui-num__size">{{month_days}}</text>天</view>   (W:68-71 一带)
  </view>
  <view class="tui-record__item"> 累计打卡 {{total_days}} 天 </view>  (W:72-78 一带)
  <view class="tui-record__item"> 累计学习 {{total_records}} 次 </view>  (W:79-84 一带)
  <!-- 三列间以 .tui-record__item::after 竖分隔线（X:194-195） -->
</view>

<view class="tui-cmt-box tui-radius-all">                            (W:86) 今日任务卡
  <view class="tui-list-between">                                    (W:87)
    <view class="tui-flex-center tui-addr-item">                     (W:88-89)
      <view wx:if="{{todayDo==taskToday.length}}">                   (ops[6]=W:91)
        <image class="love-icon margin-right-xs" src="…/images/icon/love.png"/>  (W:92-93)
        <tui-circular-progress style="z-index:10;" defaultColor="#d3d3d3" diam="40"
            progressColor="#ff9b6a" fontSize="10" percentage="{{today_progress}}" zIndex="99"/>  (ops[9]-ops[14]=W:94-101, m0 组件调用 W:871 一带)
      </view>
      <text wx:else class="text-df margin-left-xs">第{{current}}天打卡任务</text>   (W:102-103)
      <text class="text-lg">今日打卡任务</text>                       (ops[14]-ops[15]=W:104-105，依据包未记录此文案，蒸馏工补录；节点归属已由对账员复核确认，见第 6 节文案逐字一致项「今日打卡任务 z[86]=W:105」)
      <text wx:if="{{taskToday.length!=0}}" class="text-df">，已完成{{todayDo}}/{{taskToday.length}}</text>  (W:106-108)
    </view>
    <tui-tag bind:tap="goPlan" padding="12rpx 24rpx" plain="{{true}}" shape="circle"
             size="28rpx" type="warning">{{plan_empty?'创建计划':'查看计划'}}</tui-tag>   (ops[19]-ops[25]=W:109-115)
  </view>
  <view wx:if="{{taskToday.length!=0||plan_over}}">                  (ops[28]=W:119)
    <view class="flex align-center padding-left padding-bottom">     (W:120)
      <tui-week-date activeBackground arrow bindclick="dateClick"/>  (W:118 属性 + m0 组件调用 W:876 ['activeBackground',97,'arrow',1,'bindclick',2])
      <view class="cu-progress round sm" style="width:86%;">         (W:121-122)
        <view class="bg-macron" style="width:{{plan_progress}};"/>   (W:123-124, 节点树原文拼写 bg-macron；页面 wxss 无此类定义，实际不生效——正确类名为 bg-macaron，见 X:32)
      </view>
      <view class="record-play margin-left-sm text-gray">{{plan_days}}/{{total}}</view>  (W:125-127)
    </view>
    <scroll-view scrollX="{{true}}">                                 (m0 W:896-897, attr scrollX)
      <view class="tui-goods__list">                                 (W:128)
        <!-- wx:for {{taskToday}} (W:129), wx:for-index 'index' (W:130)，循环体 _2z(z,110,o8WB,...) 于 m0 W:952 -->
        <view class="tui-goods__item" bind:tap="goCard" data-id="{{index}}">   (W:131-134, bind:tap=ops[113] data-id=ops[114]=W:134)
          <view class="tui-goods__imgbox">
            <image class="tui-goods__img" mode="aspectFill" src="{{item.cover}}"
                   style="opacity:{{item.finish?'0.7':'1'}};"/>      (W:135-138, opacity 三元 ops[16]=W:138)
            <view wx:if="{{item.finish}}" class="tui-new-label-finish">
              <tui-icon color="#ff9b6a" name="square-fill" size="38"/>  (W:139-143, m0 节点 W:912 ['color',122,'name',1,'size',2]：color=z[122]=z[78]=W:97 '#ff9b6a'、name=z[123]=W:142 'square-fill'、size=z[124]=W:143 '38')
            </view>
            <view wx:if="{{item.quiz}}" class="tui-new-label-quiz">
              <tui-icon color="#ff9b6a" name="order" size="38"/>     (W:144-148, m0 节点 W:921 ['color',127,'name',1,'size',2]：color=z[127]=z[78] '#ff9b6a'、name=z[128]=W:147 'order'、size=z[129]=z[124] '38')
            </view>
            <view wx:if="{{item.speak}}" class="tui-new-label-speak">
              <image src="…/images/icon/speak_finish.png" style="height:56rpx;width:56rpx;"/>  (W:149-152)
            </view>
          </view>
          <view class="tui-pri__box" style="background-color:{{item.finish?'#ff9b6a':''}};">  (W:153-154)
            <view class="tui-sale-pri">{{index+1}}.{{item.title}}</view>  (W:155-156)
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- wx:else 分支（m0 W:956-963） -->
    <tui-nomore backgroundColor="#f7f7f7" text="当前暂无打卡计划"/>    (W:157-158)
    <view class="" bindtap="clickGuide">                             (W:159)
      <text class="tui-page__desc text-bold">[⭐点击查看如何创建个人打卡计划⭐]</text>  (W:160-161)
    </view>
  </view>
</view>

<view class="tui-pro-detail">                                        (W:165) 学习卡片
  <view class="tui-cmt-box tui-mtop tui-radius-all">                 (W:166)
    <view class="tui-list-cell" bind:tap="showModalStudy">           (W:167-168)
      <tui-icon class="tui-bold tui-cell-title text-xxl" color="#ff9b6a" name="imface" size="28"/>  (W:169-172, m0 节点 W:983 ['color',151,'name',1,'size',2]：color=z[151]=z[78] '#ff9b6a'、name=z[152]=W:171 'imface'、size=z[153]=W:172 '28'，_mz 属性序 color/name/size 依 z 数组复用，_mz 索引坑见 SKILL.md)
      <view class="text-bold text-xl margin-left">学习</view>         (W:175-176)
      <view class="margin-left-sm padding-sm tui-list-cell_name"
            wx:if="{{cardList.length!=0}}">共完成{{cardList.length}}课，{{cur_level}}级进度为{{level_progress}}</view>  (W:178-180)
      <image wx:if="{{cardList.length!=0}}" class="card-listen-icon margin-left-sm"
             catch:tap="listenCards"
             src="{{listenCards_playing?'…/icon/pause.png':'…/icon/play.png'}}"/>  (W:181-183, 绑定名 z[162]=W:181='listenCards'，实证为 **catch:tap**——m0 W:1007 `['catch:tap',162,'class',1,'src',2]`，阻止冒泡)
      <view class="cu-list grid col-3">                              (W:184)
        <!-- wx:for {{cardList}} (W:185), bindtap=goCardStudy data-id={{item.id}} (W:187-189) -->
        <view class="cu-card cu-item" style="width:100%;height:320rpx;">   (W:188-192)
          <view class="bg-macron tui-new-label-text text-center text-white text-xs">{{item.num}}</view>  (W:193-194, 节点树原文拼写 bg-macron，页面 wxss 无定义不生效；正确类名 bg-macaron 见 X:32)
          <view class="text-cut text-sm margin-top-xs">{{item.level}}: {{item.title}}</view>  (W:195-196, title 复用 z[137][3]→ops[137])
        </view>
      </view>
    </view>
  </view>

  <view wx:if="{{share==false||cardQuiz_times}}" class="tui-cmt-box …">  (W:197) 测验卡片
    <view class="tui-list-cell" bind:tap="showModalTest">            (W:199)
      <tui-icon color="#ff9b6a" name="circle-selected" size="32"/>   (W:203-204, m0 节点 W:1049 ['color',183,'name',1,'size',2]：color=z[183]=z[78] '#ff9b6a'、name=z[184]=W:203 'circle-selected'、size=z[185]=W:204 '32')
      <view>测验</view>                                              (W:208)
      <view class="padding-sm">共{{cardQuizList.length}}课，通过率为{{cardQuiz_progress}}</view>  (W:209-211)
      <view wx:if="{{cardQuiz_times!=0}}" class="padding-left padding-right padding-bottom bg-white">  (W:212)
        <!-- wx:for {{cardQuizList}} (W:214), bindtap=showQuizDetail data-id={{item.current}} (W:216), style width:40% (W:220) -->
        <view class="tui-rate-container">{{item.star}}…</view>        (W:617-621 同弹层结构)
        <view class="tui-title">{{item.current}} 次</view>            (W:622-623)
        <view class="tui-content">{{citem}}</view>                    (W:628-629)
        <image class="quiz-more-icon" src="…/images/icon/more.png"/>  (W:228-229)
      </view>
    </view>
  </view>

  <view wx:if="{{share==false||speak_num}}" class="tui-cmt-box …">    (W:230) 跟读卡片
    <view class="tui-list-cell" bind:tap="showModalSpeak">           (W:232)
      <tui-icon color="#ff9b6a" name="imvoice" size="30"/>           (W:236-237, m0 节点 W:1115 ['color',216,'name',1,'size',2]：color=z[216]=z[78] '#ff9b6a'、name=z[217]=W:236 'imvoice'、size=z[218]=W:237 '30')
      <view>跟读</view>                                              (W:241)
      <view class="padding-sm">共{{speakList.length}}课，开口{{speak_num}}次，平均为{{speak_value}}分</view>  (W:242-244)
      <view wx:if="{{speakList.length!=0}}">                          (W:246)
        <!-- wx:for {{speakList}} (W:247), bindtap=goCardShare data-id={{index}} (W:249), style width:33% (W:253) -->
        <view bind:tap="showSpeakDetail" …>                          (W:256)
          <view class="star-speak">                                  (W:257)
            <!-- wx:for {{item.stars}} wx:for-item 'citem' (W:259-260) -->
            <image class="icon-star-speak"
                   src="{{citem>3?'…/icon/star_icon.png':'…/icon/star_icon_grey.png'}}"/>  (W:262-263)
          </view>
          <image class="record-play-icon" src="…/images/icon/voice.png"/>  (W:265-266)
        </view>
      </view>
    </view>
  </view>

  <view wx:if="{{speak_words_wrong_list.length>0}}" class="wrong-words-list">  (W:267-268) 喷错单词
    <!-- wx:for {{speak_words_wrong_list}} (W:269), bindtap=clickWordExtend data-id={{index}} (W:271) -->
    <text style="…12rpx… scale 1.1 … font 32rpx" class="light-orange">{{item}}</text>  (W:273-279)
  </view>

  <view wx:if="{{share==false||word_num}}" class="tui-cmt-box …">     (W:280) 单词卡片
    <view class="tui-list-cell" bind:tap="showModalWord">            (W:281)
      <tui-icon color="#ff9b6a" name="explore" size="30"/>           (W:285-286, m0 节点 W:1248 ['color',283,'name',1,'size',2]：color=z[283]=z[78] '#ff9b6a'、name=z[284]=W:303 'explore'、size=z[285]=z[218]→W:237 '30'【原 spec 记 32 且引用 z[218]='32' 有误，z[218] 实为 '30'】)
      <view>单词</view>                                              (W:291)
      <view class="padding-sm">共学习{{word_study}}个，复习{{word_fuxi}}个，测验{{word_num}}个</view>  (W:292-294)
      <text wx:if="{{word_pindu}}">，拼读{{word_pindu}}个</text>       (W:295-296)
    </view>
  </view>

  <view wx:if="{{share==false||listen_time}}" class="tui-cmt-box …">  (W:297) 磨耳朵卡片
    <view class="tui-list-cell" bind:tap="showModalListen">          (W:298)
      <tui-icon color="#ff9b6a" name="clock" size="30"/>             (W:302-303, m0 节点 W:1208 ['color',266,'name',1,'size',2]：color=z[266]=z[78] '#ff9b6a'、name=z[267]=W:286 'clock'、size=z[268]=z[218] '30'【原 spec 记 32 有误】)
      <view>磨耳朵</view>                                            (W:308)
      <view class="padding-sm">共熏听{{listen.length}}课，总计时长{{listen_time}}分钟</view>  (W:309-311)
    </view>
  </view>

  <tui-nomore text="已经到底部了"/>                                   (W:312-313)
  <view class="tui-safearea-bottom"/>                                (W:314)
</view>
```

### 弹层组（tui-bottom-popup 系列）

来源：ops W:315-633，节点创建 m0 W:1287-1722（本次已通读 1287-1301 与 470-688 一带）。

```
<tui-bottom-popup show="{{modalCalendar}}" bindclose="hideModal" maskZIndex="1001" zIndex="1002">  (W:315-316, 节点 cF2B W:1287 ['bindclose',296,'show',1]——此弹层无 maskZIndex/zIndex 属性对，数字值见下注)
  <tui-calendar isChange arrowType="2" bindchange="monthChange" status="{{status}}"/>    (W:317-319, arrowType=z[298]=W:317 [1,2] 字面量 2【非 '1001'】；节点 hG2B W:1288 ['isChange',-1,'arrowType',298,'bindchange',1,'status',2])
</tui-bottom-popup>

<tui-bottom-popup show="{{modalListen}}" bindclose="hideModal" maskZIndex="1001" zIndex="1002">   (W:322-323, 节点 oH2B W:1291 ['bindclose',301,'maskZIndex',1,'show',2,'zIndex',3]：maskZIndex=z[302]=W:321 '1001'、zIndex=z[304]=W:323 '1002')
  <scroll-view scrollY class="tui-popup-scroll" style="height:{{modal_height}}rpx;">  (W:324-325, 节点 cI2B W:1291)
    <view class="tui-page__bd">…
      <view class="tui-charts-box">
        <tui-charts-column id="tui_column" clickEffect="1" columnBarWidth="20" columnCap="round"
            dataset/legend/Ymax/splitNumber/xAxis/xAxisVal={{options1.*}}/>          (节点 tM2B W:1298, 属性取 ops[310]-ops[317]→options1 字段)
        <tui-charts-line id="tui_line" dataset/legend/Ymax/splitNumber/xAxis/xAxisVal/yAxisSplitLine={{options2.*}}/>  (W:326-333)
        <tui-nomore …/>                                                              (复用 ops[138] 一带)
      </view>
    </view>
  </scroll-view>
</tui-bottom-popup>

<tui-bottom-popup show="{{modalWord}}" bindclose="hideModal" maskZIndex="1003" zIndex="1004">     (W:334-335, 节点 oR2B W:1316 ['bindclose',332,…]：maskZIndex=z[333]=W:352 '1003'、zIndex=z[335]=W:354 '1004')
  内含 tui-charts-column id="tui_column_word_study" (options17, W:344-351)、
       tui-charts-column id="tui_column_word" (options3, W:355-362)、
       tui-charts-line id="tui_line_word" (options11, W:363-372, 带 Ymin/yAxisSplitLine)
</tui-bottom-popup>

<tui-bottom-popup show="{{modalStudy}}" bindclose="hideModal" maskZIndex="1003" zIndex="1004">    (W:373-375, 节点 o62B W:1352 ['bindclose',377,…]：maskZIndex=z[378]=z[333] '1003'、zIndex=z[380]=z[335] '1004')
  内含 tui-charts-column id="tui_column_study" (options4, W:383-390)；
  等级进度列表 wx:for {{levelProgress}} (m0 _2z W:1388, 循环起点 z[396])：每项 view class cu-progress round x (z[384]=W:422)
    内 view class bg-macron style="width:{{item.progress}};" (z[386]=z[104]=W:123 'bg-macron'，节点树原文拼写 bg-macron，页面 wxss 无定义不生效；正确类名 bg-macaron 见 X:32) + 文案 {{item.progress}}，外层 class padding (z[398]=W:417)
</tui-bottom-popup>

<tui-bottom-popup show="{{modalTest}}" bindclose="hideModal" maskZIndex="1001" zIndex="1002">     (W:412-413, 节点 oP3B W:1393 ['bindclose',409,…]：maskZIndex=z[410]=z[302] '1001'、zIndex=z[412]=z[304] '1002')
  内含 tui-charts-column id="tui_column_test" (options5, W:422-429)、
       tui-charts-line id="tui_line_test" (options6, W:433-442, 带 Ymin/yAxisSplitLine)
</tui-bottom-popup>

<tui-bottom-popup show="{{modalSpeak}}" bindclose="hideModal" maskZIndex="1001" zIndex="1002">    (W:445-446, 节点 cZ3B W:1418 ['bindclose',441,…]：maskZIndex=z[442]=z[302] '1001'、zIndex=z[444]=z[304] '1002')
  内含 tui-charts-column id="tui_column_speak" (options7, W:455-462)、
       tui-charts-column id="tui_column_speak_num" (options12, W:466-475, 带 Ymin/yAxisSplitLine)、
       tui-charts-line id="tui_line_speak" (options8, W:476-485, 带 Ymin/yAxisSplitLine)
</tui-bottom-popup>

<tui-bottom-popup show="{{modalDays}}" bindclose="hideModal" maskZIndex="1003" zIndex="1004">     (W:489-490, 节点 fC4B W:1451 ['bindclose',488,…]：maskZIndex=z[489]=z[333] '1003'、zIndex=z[491]=z[335] '1004')
  内含 6 图（W:500-590）：tui-charts-column id="tui_column_month_days" (options9)、
  "tui_column_month_times" (options10)、"tui_column_month_quiz" (options13)、
  "tui_column_month_speak" (options14)、"tui_column_month_word" (options15)、
  "tui_column_month_listen" (options16)，全部 column 类型、仅 options9 带 splitNumber 排列差异
</tui-bottom-popup>

<tui-bottom-popup show="{{modalQuizDetail}}" bindclose="hideModal" maskZIndex="1001" zIndex="1002">  (W:595-597, 节点 o44B W:1523 ['bindclose',574,'maskZIndex',1,'show',2,'zIndex',3]：maskZIndex=z[575]=z[302] '1001'、zIndex=z[577]=z[304] '1002')
  <view class="tui-block__box">                                      (W:598)
    <view class="tui-goods-item">
      <image class="tui-goods-img" src="{{quizDetailCover}}"/>        (W:600-603)
      <view class="tui-goods-name margin-left padding-top">
        <text class="tui-gray text-xl">{{quizDetailLevel}}: {{quizDetailTitle}}</text>  (W:605-607)
        <view class="tui-goods-name margin-left padding-top-xl">测验通过率 {{quizDetailRate}}</view>  (W:608-610)
      </view>
    </view>
    <!-- wx:for {{quizDetailList}} (m0 _2z W:1577, 起点z[592]=W:611)：每项 tui-collapse bindclick="changeCollapse" current="{{item.star}}" (节点 oL5B W:1554 ['bindclick',594,'current',1,'index',2])，折叠内 slot wx:for item.list→citem (m0 _2z W:1583, 起点z[607]) 每条为 tui-list-cell{{citem}} (节点 oZ5B W:1575) -->
    <view class="tui-rate-container">
      <tui-rate current="{{item.star}}" disabled="true" quantity="3" size="36"/>  (W:617-621)
      <view class="tui-title">{{item.current}} 次</view>              (W:622-623)
    </view>
    <view class="tui-content">{{citem}}</view>                        (W:628-629, wx:for item.list→citem)
    <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>          (节点 o25B W:1590 ['backgroundColor',611,'text',1]：backgroundColor=z[611]=z[138]='#f7f7f7'、text=z[612]=W:631 '没有更多了'【spec 原漏记，补录】)
  </view>
</tui-bottom-popup>

<tui-bottom-popup show="{{modalSpeakDetail}}" bindclose="hideModal" maskZIndex="1001" zIndex="1002">  (W:633-635, 节点 l35B W:1595 ['bindclose',613,…]：maskZIndex=z[614]=z[302] '1001'、zIndex=z[616]=z[304] '1002')
  <view class="tui-popup-speak">                                     (W:637)
    <view class="tui-goods-item margin-top-sm">
      <image src="{{speakDetailCover}}"/>                             (W:640)
      <view>{{speakDetailLevel}}: {{speakDetailTitle}}</view>          (W:643-645)
      <view>录音测评结果：</view>                                      (W:647-648)
      <view class="reward-card margin-top">
        <view class="metrics-area">
          <view class="metric-row">
            <view class="metric-label">完成度</view>                   (W:652-653)
            <view class="stars-box">                                  (W:654)
              <!-- wx:for [1,2,3] (ops[655]=[1,3] 区间) wx:for-item '*this' (W:656) -->
              <text class="star-icon {{index+1<=speakDetailResult.completionStars?'active-star':'empty-star'}}">★</text>  (W:657-658)
            </view>
            <view class="raw-data-text">{{speakDetailResult.completedPages}}/{{speakDetailResult.totalPages}} 页</view>  (W:659-660)
          </view>
          <view class="metric-row"> 准确度 + accuracyStars + 平均 {{speakDetailResult.averageScore}} 分 </view>  (W:662-670)
          <view class="metric-row"> 流利度 + fluencyStars + {{speakDetailResult.wcpmValue}} WCPM </view>          (W:672-680)
          <view class="divider"/>                                     (W:681)
        </view>
      </view>
    </view>
  </view>
</tui-bottom-popup>
```

### 状态分支
- 顶部分类入口整组由 `share==false` 控制（W:24）：普通模式显示 5 个入口；分享模式（`share=true`，通过 `?baby_id=&date=` 进入）隐藏。
- 测验/跟读/单词/磨耳朵四卡：`share==false || 对应次数>0` 才显示（W:197/230/280/297）。
- 今日任务头：`todayDo==taskToday.length` 时显示 love 图标 + tui-circular-progress（W:91-101），否则显示「第{{current}}天打卡任务」（W:102-103）。
- 任务列表：`taskToday.length!=0||plan_over` 才渲染进度条区（W:119）；`taskToday` 有数据走横滑列表（W:129），否则显示空态「当前暂无打卡计划」+ clickGuide 引导（m0 W:956-963）；`plan_over` 时另有 tui-nomore「当前学习计划已到期」（W:162-164）。
- 任务角标三态：`item.finish`→finish 图标（square-fill，W:139-143）、`item.quiz`→quiz 图标（order，W:144-148）、`item.speak`→speak_finish 图标（W:149-152）；已完成项封面 opacity 0.7、价格条背景 #ff9b6a（W:138/W:154）。
- 星级显示规则：跟读列表 `citem>3` 亮星（W:263）；跟读详情三行指标 `index+1<=xxxStars` 亮星（W:657/667/678 一带）。
- 依赖自定义组件（节点树 _mz 调用反推；app-config.json 全文件无 usingComponents 键，python 遍历 0 次命中，组件注入为编译期）：tui-bottom-popup / tui-calendar / tui-charts-column / tui-charts-line / tui-circular-progress / tui-collapse（测验详情弹层条目，m0 W:1554）/ tui-list-cell（测验详情折叠内容条目，m0 W:1575）/ tui-rate / tui-tag / tui-week-date / tui-nomore / tui-icon。

## 2. 样式规格

来源：`wxss_out/pages__daka__daka.wxss`（233 行，本次通读；数值直接当 px，不除 2）。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .container | padding-bottom:55px (X:1) | 页面容器 |
| .tui-header2 | flex 居中 (X:177-178 一带) | 自绘导航标题区 |
| .tui-sign__record | height:100px; border-radius:12px; margin-top:15px (X:192) | 打卡统计条 |
| .tui-record__item | flex:1; column; font-size:14px; ::after 0.5px 竖分隔线 rgba(0,0,0,.2) scaleX(.5) (X:193-195) | 统计三列 |
| .tui-record__num | color:#ff9b6a; padding-top:6px (X:197) | 统计数字色 |
| .tui-num__size | font-size:32px; line-height:32px (X:198) | 统计大数字 |
| .tui-category-item | height:65px; width:20%; column (X:201) | 分类入口格 |
| .tui-category-img | 38px×38px; opacity:.88 (X:202) | 分类图标 |
| .tui-cmt-box | 白底; box-shadow:0 3px 8px 1px rgba(0,0,0,.15); margin:13px 8px 0 (X:71) | 卡片容器 |
| .tui-radius-all | border-radius:12px (X:36) | 卡片圆角 |
| .bg-macaron | background-color:#ff9b6a; color:var(--black) (X:32) | 主题橙背景。注意：节点树原文拼写为 `bg-macron`（W:123/W:193/W:425 一带），页面样式表无 `.bg-macron` 定义——页面 wxss 中该类不生效；页面自身定义的类是 `.bg-macaron`（页面 wxss 与 W:1748 内嵌副本均为此拼写）。另 app.wxss 全局有 `.bg-macron{background-color:var(--macron);color:var(--white)}`（--macron:#ff9b6a），节点树的 bg-macron 运行时落在这条全局定义 |
| .tui-goods__item/.tui-goods__imgbox | height:175px (X:157) | 任务横滑卡 |
| .tui-goods__imgbox | width:32vw (X:158) | 任务卡图盒 |
| .tui-goods__img | height:153px; width:30vw; border-radius:5px 5px 0 0 (X:159) | 任务封面 |
| .tui-new-label-finish | 28px×28px; left/top:1px; border-radius:12% (X:169) | 完成角标位 |
| .tui-new-label-quiz | left:33px (X:170-171) | 测验角标位 |
| .tui-new-label-speak | left:63px (X:171-172) | 跟读角标位 |
| .love-icon | 21px×21px (X:191 一带) | 任务完成爱心 |
| .card-listen-icon | 24px×24px (X:195 一带) | 磨耳朵播放小图标 |
| .record-play-icon | 27px×27px (X:194 一带) | 跟读播放小图标 |
| .quiz-more-icon | 28px×28px (X:196 一带) | 测验展开箭头 |
| .star-speak | height:40px; row flex 居中 (X:186 一带) | 跟读星星行 |
| .icon-star-speak | 26px×26px (X:187 一带) | 跟读星 |
| .tui-popup-scroll | height:400px; font-size:13px (X:110) | 图表弹层滚动区（内联 height:{{modal_height}}rpx 覆盖） |
| .tui-charts-box | padding:0 15px 0 25px (X:210) | 图表容器 |
| .tui-block__box | background:#f1f1f1; border-radius:10px; padding:5px (X:160 一带) | 测验详情盒 |
| .tui-popup-speak | height:50vh (X:230) | 跟读详情弹层 |
| .metric-label | color:#5c6b73; font-size:16px; width:31% (X:217) | 指标名 |
| .stars-box | gap:6px; width:44% (X:220) | 星星组 |
| .star-icon | font-size:26px (X:222 一带) | 详情星 |
| .active-star | color:#ffbe1a; text-shadow:0 2px 8px rgba(255,190,26,.4) (X:232) | 亮星 |
| .empty-star | color:#e0e6ed (X:231) | 灰星 |
| .reward-card | padding:20px; 白底 (X:223) | 录音测评结果卡 |
| .badge-wrapper | 70px 圆; linear-gradient(135deg,#fff6e0,#ffe099) (X:225) | 徽章位 |
| .divider | height:1px; background:#f0f3f7; width:90% (X:228) | 分隔线 |
| .metrics-area | column flex; gap:20px (X:229) | 三行指标容器 |
| .raw-data-text | color:#a0aec0; font-size:13px; width:25% (X:221 一带) | 指标原始数据 |

依赖的全局类（ColorUI，出自 **page-frame.html** 的 setCssToHead 块——app.wxss 块与各组件/页面 wxss 块，**非本页 W:1748**：W:1748 仅含页面自身样式，grep text-bold/cu-progress/light-orange/tui-mtop 均 0 命中）：`.cu-progress`（app.wxss 块） / `.cu-list grid col-3` / `.cu-card` / `.cu-item` / `.text-xl` / `.text-xs` / `.text-gray` / `.text-bold`（app.wxss 块 `font-weight:700`） / `.light-orange`（tui-tag.wxss 块 `background:#fef5eb;color:#faa851`） / `.flex align-center` / `.margin-top-sm` 等。原始 rpx 内嵌于 W:1748（如 .container padding-bottom 110rpx→55px、tui-sign__record height 200rpx→100px、tui-num__size 64rpx→32px），换算与 X 一致。另：app.wxss 全局有 `.bg-macron{background-color:var(--macron);color:var(--white)}`（--macron:#ff9b6a），节点树写的 bg-macron 走的是这条全局定义，但颜色文字与本页 `.bg-macaron{background-color:#ff9b6a;color:var(--black)}` 不同。

## 3. 事件与逻辑

来源：`chunk_32.appservice.js`（A:686-687；Page({...}) 全部在 A:687 单行内，本次整行导出通读 + grep -o 核实）。全局 `s`=wx.cloud.database({}), `i`=s.command, `n`=s.command.aggregate（A:687 头部）；`r` 为模块级变量（磨耳朵本次播放时长秒数，初始 0）；`d`=require('../../A2AAD201BB058EAFC4CCBA0673FF56F4.js')（A:687，模块定义于 appservice.app.js:1382-1384，导出 formatTime/formatMonth/formatDate/formatHour，本次 grep 核实 4 个导出）。

页面 data 初始值（A:687，data:(t={…}) 原文 + `a._(t,…)` 注入，本次 grep 逐项核实）：`itemName1:'加入班级', date:'', share:false, cur_level:'AA', level_progress:'0%', cardList:[], card_times:0, cardQuizList:[], cardQuiz_times:0, cardQuiz_progress:'0%', speakList:[], speak_value:0, speak_num:0, wordList:[], word_study/word_times/word_num/word_pindu/word_fuxi:0, listen:[], listen_time:0, modalCalendar:false, total_records/month_days/total_days:0, listenCards_playing:false, speak_words_wrong_list:[], modalSpeakDetail:false, speakDetailResult:{}, speakDetailCover:'', speakDetailLevel:'', speakDetailTitle:'', status:[], curMonth:[], current:0, today_current:0, modalDayList:false, dayList:[], taskToday:[], plan_days/total:0, plan_progress:'0%', plan_over:false`（注入项：levelProgress:[]、levelTotal:[108,102,102,102,96,90,84,84,60,60,60,60]、plan_empty:false、modal_height:800、modalListen/modalWord/modalStudy/modalTest/modalQuizDetail/modalDays:false）及 options1..options17 共 17 组图表配置（grep -oE 实测 17 个 key；dataset 色值 #5677fc×10、#ff7900×9、yAxisSplitLine #e3e3e3×4；Ymax×50/Ymin×3/splitNumber×34）。另有 Page 顶层字段 share_baby_id:''、share_date:''、share_cover:''（A:687 `Page({share_baby_id:"",share_date:"",share_cover:"",data:(t={…})` 原文）。

onLoad(t)（A:687）：initSystemUI → 若 query 含 scene 或 baby_id（分享进入）：scene 则 `getQRshare(decodeURIComponent(scene))`（user_data.doc(scene).get → processUserData, share=true）；baby_id 则 `setData({share:true})`、记 share_baby_id/share_date、`getShareList(baby_id,date)`（user_data.where({baby_id,date}).get，空则 reLaunch ../index/index）、initTotalRecords。否则 `setData({share:false})`，globalData.baby_id 存在则 initUserData()。

onShow（A:687）：itemName1 按 globalData.groupID 切「我的班级/加入班级」；`userDataUpdate` 时清标志，date!=today_date 则 cleanData，再 initCardList + getPlanToday；`totalDataUpdate` 时 initTotalRecords。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 分类 tap×4 | goGroup / goPlanList / goReport / showCalendarModal | 见下「页面跳转」；showCalendarModal 置 modalCalendar，globalData.dakaToday 为真时（消费一次）getMonthCalendar | user_data count+get | modalCalendar, status, curMonth |
| 统计条 tap（本月打卡/累计打卡/累计学习） | showModalDays | 置 modalDays 并 getChartDataDays（aggregate group 按月聚合 6 条）【事件绑在 .tui-sign__record 统计条（m0 W:760，z[44]），不在分享按钮】 | user_data aggregate | modalDays, options9/10/13/14/15/16 |
| 转发分享按钮 | —（无 bindtap） | button 仅 `open-type="share"` 触发原生转发（m0 W:748 属性表只有 class/openType/style） | — | — |
| 周日期点击 | dateClick → daysDifference → getPlanClickDate | daysDifference=floor((今天-点击日)/864e5)；**getPlanClickDate 为空函数 `function(t){}`（A:687 原文），dateClick 三分支（今天/早于今天/晚于今天）全部只调它，点击无任何实际逻辑**（原样保留的占位） | — | — |
| goPlan tag tap | goPlan | globalData.plan_id 非空 → ../planDetail/planDetail?plan_id=…&isAdd=1；否则 ../planCreate/planCreate | — | — |
| 日历翻月 | monthChange | detail.switch → setData day/year/month/days+`cur_records:[]`（A:687 原文含 cur_records，spec 原漏记）+status 清空+getMonthCalendar；否则点某日：status[day-1].bgColor=='#ff9b6a' 时 getCradList(date)（user_data.where({baby_id,date}).get → cleanData+回填当日数据+关弹窗） | user_data×2 | status, cur_records, curMonth, modalCalendar, cardList… |
| 任务卡 tap | goCard | `current<today_current` 时 ../card/card?id=…&daka_day=current，否则 ../card/card?id=…。**today_current 仅在 data 初始化为 0，A:687 内无其他赋值点（grep 全行仅 2 处命中：初始化+goCard 比较），故运行时恒走不带 daka_day 分支（已实证）** | — | — |
| 学习卡片 tap | showModalStudy | 置 modalStudy 并 getChartDataStudy（user_data where card_times exists orderBy timestamp desc limit 7） | user_data get | modalStudy, options4, levelProgress |
| 学习列表 tap | goCardStudy | navigateTo ../card/card?id={{item.id}} | — | — |
| 磨耳朵小图标 catch:tap | listenCards | 播放开关：停止态首次点击 createInnerAudioContext + listenCards_index:0 + startListen；onPlay 200ms 后 r=Math.floor(duration)；onEnded → updateListenTime(当前卡 id) → index+1（==cardList.length 归 0）→ 续播；播放中点击 → stop + playing=false | 见 updateListenTime | listenCards_playing, listenCards_index |
| 测验卡 tap | showModalTest | 置 modalTest 并 getChartDataTest（user_data where cardQuiz exists limit 7） | user_data get | modalTest, options5/6 |
| 测验条目 tap | showQuizDetail | 取 cardQuizList[id] 置 quizDetailList/Cover/Level/Title/Rate，开 modalQuizDetail | — | quizDetail*, modalQuizDetail |
| 测验详情折叠 | changeCollapse | tui-collapse 的 bindclick；折叠内容为 item.list 逐条 {{citem}}（tui-list-cell） | — | — |
| 跟读卡 tap | showModalSpeak | 置 modalSpeak 并 getChartDataSpeak（user_data where speak exists limit 7） | user_data get | modalSpeak, options7/12/8 |
| 跟读条目 tap | goCardShare / showSpeakDetail | goCardShare → ../share/share?card_id=…&user_babyid=（**参数名原文 user_babyid，无第二个下划线**，A:687 原文 `"&user_babyid="+s`；share 模式用 share_baby_id）；showSpeakDetail → speakList[id].wcpm_result 存在时置 speakDetailResult/Cover/Level/Title 开 modalSpeakDetail | — | modalSpeakDetail, speakDetail* |
| 喷错词 tap | clickWordExtend | 取 speak_words_wrong_list[id]，`words.where({name}).get` 成功后 navigateTo ../wordExt/wordExt?word=… | words×1 | — |
| 单词卡 tap | showModalWord | 置 modalWord 并 getChartDataWord（user_data aggregate match word_num exists limit 7）+ getDataWordStudy（aggregate match word_study exists limit 7） | user_data aggregate×2 | modalWord, options17/3/11 |
| 磨耳朵卡 tap | showModalListen | 置 modalListen 并 getChartData（user_data where listen_time exists limit 7） | user_data get | modalListen, options1/2 |
| 日历统计 tap | showCalendarModal | 同上 | — | — |
| 弹层关闭 | hideModal | 一次性关闭全部 9 个弹窗标志 | — | modal* 全 false |
| 空态引导 tap | clickGuide | `wx.openOfficialAccountArticle({url:"https://mp.weixin.qq.com/s/mi9sCAGNji5yYOHZJ2Xw0g"})`（A:687 末尾） | — | — |
| 分享好友 | onShareAppMessage | 见下方「分享规则」 | — | share_cover |
| 分享朋友圈 | onShareTimeline | 见下方「分享规则」 | — | share_cover |
| 下拉刷新 | onPullDownRefresh | `this.onLoad(1)`，1s 后 wx.stopPullDownRefresh（对应 app-config enablePullDownRefresh:true） | — | 全量重载 |

### 页面跳转清单（navigateTo URL 字面量，A:687 grep -o 实测）
`../card/card?id=`×3（goCardStudy/goCard×2 分支）、`../group/group?id=`×1（goGroup 班级）、`../group/group?id=public`×1（goGroup 兜底）、`../planCreate/planCreate`×1、`../planDetail/planDetail?plan_id=`×1（&isAdd=1）、`../planList/planList`×1、`../report/report`×1（goReport）、`../share/share?card_id=`×1、`../wordExt/wordExt?word=`×2（clickWordExtend）；reLaunch `../index/index`×1（getShareList 查无数据）；外部 `wx.openOfficialAccountArticle` 公众号文章 1 处。

### 云函数调用清单（wx.cloud.callFunction，A:687 grep 计数 2 处）
1. `updateUserData`，tag=`listenCardUpdate`，data={baby_id, date, card_id, time(=formatHour(now)), time_length(=r)}——updateListenTime 内，user_data 当日文档 listen 数组**不含**该 card_id 时调用（先 user_data.where({baby_id,date,listen:elemMatch(eq(card_id))}).get 判断），成功置 globalData.userDataUpdate=true。
2. `updateUserData`，tag=`listenTimeUpdate`，data={baby_id, date, time, time_length}——同函数，listen 已含该 card_id 时调用（仅累计时长）。两调用均以 `globalData.todayDataExist==true` 为前置。

### 云数据库直查清单（collection 调用计数，A:687 grep -c 实测：user_data×16, user_study×3, user_plan×1, words×2）
1. `user_data`：initCardList（where baby_id orderBy timestamp desc limit 1，主数据源）、getShareList、getQRshare（doc(scene)）、processUserData 后的各统计、initTotalRecords 走 user_study（见下）、getMonthCalendar（count≤20 分页判断）、getMonthDataNoPage/ByPage（field date）、getCradList（按 date）、showCalendarModal、getChartData/getChartDataWord/getDataWordStudy/getChartDataTest/getChartDataSpeak/getChartDataDays、updateListenTime 判重。
2. `user_study`：initTotalRecords 用 **aggregate**：match({baby_id}).project({total_days:1, month_days:size($month_days), total_records:size($records)})（即打卡天数/累计学习次数存于 user_study 文档）；getLevelProgress 用 doc(baby_id).field({当前级别:true})；getLevelsProgress 用 doc(baby_id) 读各级别数组对照 levelTotal。
3. `user_plan`：getPlanToday 内 `where({baby_id, plan_id}).get`，读 current/total/day/list（plan_id 为空时置 plan_empty=true）。**current<total** 时 `setData({current:e+1, plan_days:day, total, plan_progress:Math.ceil(100*day/total)+'%', taskToday:list[e]})`（e=库中 current 值）并 getTodayDo；否则 `setData({current:0, plan_over:true, plan_days, total, plan_progress, taskToday:[]})`。
4. `words`：clickWordExtend（where name）×1、getSpeakWordsTop5 数据落地后跳 wordExt 前查词×1。

### 计算规则（进度/统计，精确到边界）
- **今日任务进度 getTodayDo**（A:687）：todayDo=taskToday 中 finish 为真的个数；`today_progress=Math.ceil(100*todayDo/taskToday.length)`。
- **计划进度 getPlanToday**：`plan_progress=Math.ceil(100*day/total)+'%'`；库中 current<total 才有当日任务。
- **级别进度 getLevelProgress**（A:687）：当前级别=cardList[0].level；已完成课数=user_study 文档该级别数组长度；库总课数=`getDatabaseLevel(level)` 对应集合 `where({index:gte(0)}).count().total`；`level_progress=Math.ceil(100*已完成/总数)+'%'`。
- **级别→集合映射 getDatabaseLevel**（A:687）：AA→AA；A→AL、B→BL、C→CL、D→DL、E→EL、F→FL、G→GL、H→HL、I→IL、J→JL、K→KL（其余默认 AA）。
- **等级进度列表 getLevelsProgress**（A:687）：遍历 user_study doc 各级别数组，`progress=Math.ceil(100*数组长度/levelTotal[序])+'%'`，levelTotal=[108,102,102,102,96,90,84,84,60,60,60,60]。
- **测验通过率 countQuizProgress**（A:687）：`Math.ceil(Σ parseInt(rate.replace('%','')) / cardQuizList.length)+'%'`。
- **跟读均分 countSpeakValue**（A:687）：Σ 非零 stars / 非零个数，`speak_value=Math.ceil(20*Σ/个数)`（满分 100）；**每课 stars 超过 8 个时截断为前 8 个并 setData 回写**（`slice(0,8)`）。
- **图表兜底下限 countTestPer / countSpeakPer**（A:687）：test=`Math.ceil(平均 rate%)`，speak=`Math.ceil(20*平均星级比)`；两者 `>60?值:60`（不足 60 按 60 画）。
- **喷错单词 getSpeakWordsTop5**（A:687）：输入 user_data.speak_words_wrong_list（跟读原始词序列），过滤 60+ 停用词 Set（i/me/my/…/what/how/null），按词频 Object.entries+sort 降序取前 5 → speak_words_wrong_list（展示区实际是「开口高频词 Top5」而非错词）。
- **磨耳朵时长**（A:687 initCardList 尾）：库中 `listen_time` 存**秒**，展示 `listen_time=Math.ceil(t.listen_time/60)`（分钟）；当日磨耳朵秒数 r 在 onPlay 200ms 后取 `Math.floor(innerAudioContext.duration)`；磨耳朵音频 `https://qianyufang.top/{level}/Audio/{id}.mp3`。
- **日历状态 showCalendar**（A:687）：1..days 逐日，命中 curMonth 某条 `getDay(date)==a`（getDay=parseInt(date.substring(8))）→ `{bgColor:'#ff9b6a', color:'#fff', check:true}`，否则 `{bgColor:'#e7dac9', color:'#fff', check:false}`。getMonthCalendar 先 count，≤20 走单页查询，>20 走 ByPage（第二页固定 skip(20)，仅两页）。
- **弹层高度 initSystemUI**（A:687）：modal_height=`0.66*750/windowWidth*windowHeight`（即屏幕高的 66% 换 rpx）。

### 分享规则（A:687）
- **onShareAppMessage**：昵称兜底「我」（globalData.babyInfo.nickName 非空且≠「微信用户」）；`cardList.length!=0` 时 share_cover=`cardList[0].cover.replace('.jpg','0.jpg')`，否则兜底 `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png`；标题**两分支**（依据包漏记 0% 分支，蒸馏工补录）：`level_progress=='0%'` → `{昵称}的第{total_days}天英语分级打卡已完成`；否则 → `{昵称}的第{total_days}天英语分级打卡已完成，当前级别学习进度{level_progress}`；path=`/pages/daka/daka?baby_id={baby_id}&date={date}`。
- **onShareTimeline**：`cardList.length!=0` 时 share_cover=`cardList[0].cover`（**不替换** 0.jpg），否则兜底 `https://qianyufang.top/public/yingyu/fenjitu.jpg`；标题=`我的第{total_days}天英语打卡`；query=`baby_id={baby_id}&date={date}`。

### 其他生命周期
- onHide（A:687 原文）：`console.log("onHide")` 后**有清理逻辑**——`!0==this.data.listenCards_playing&&(this.innerAudioContext.stop(),this.setData({listenCards_playing:!1}))`，即磨耳朵播放中切后台会 stop 音频并复位 listenCards_playing（已实证，原「仅 console.log」结论错误）。
- onUnload：innerAudioContext 存在则 destroy 并置 null（A:687）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 磨耳朵音频 | `https://qianyufang.top/{level}/Audio/{id}.mp3`（level=cardList[].level，id=cardList[].id） | A:687 playListenAudio，代码内 1 处模板拼接 | ⚠️ 待真机验证 |
| 分类图标 | `https://qianyufang.top/public/yingyu/images/daka/{group,plan,milestone,calendar,share}.png` | W ops 节点树字面量 5 个（W:30/37/44/51/60），grep 命中 5 | ⚠️ 待真机验证 |
| 功能图标 | `https://qianyufang.top/public/yingyu/images/icon/{love,pause,play,more,speak_finish,star_icon,star_icon_grey,voice}.png` | W ops 节点树字面量 8 个（W:93/183/229/151/263/266），grep 命中 8 | ⚠️ 待真机验证 |
| 分享封面（好友） | 卡片封面替换 `.jpg→0.jpg`（如 `xxx.jpg→xxx0.jpg`），兜底 tcb `…/public/yingyu/shareImg.png` | A:687 onShareAppMessage，字面量 1 处 | ⚠️ 待真机验证 |
| 分享封面（朋友圈） | 卡片封面原样，兜底 `https://qianyufang.top/public/yingyu/fenjitu.jpg` | A:687 onShareTimeline，字面量 1 处 | ⚠️ 待真机验证 |
| 任务/学习卡封面 | 云数据库 user_data.card[].cover / cardQuiz[].cover，命名规律未知 | W:137/W:603 节点绑定 + A:687 processUserData | ⚠️ 待采集（captures/collections/ 当前为空目录） |
| 公众号引导文章 | `https://mp.weixin.qq.com/s/mi9sCAGNji5yYOHZJ2Xw0g` | A:687 clickGuide 字面量 1 处 | ⚠️ 待真机验证 |

> 全局类出处修正（对应对账 diff#11）：第 2 节「依赖的全局类」的证据指向更正为 page-frame.html 的 setCssToHead 各块（app.wxss 与组件 wxss），本页内嵌副本 W:1748 不含 text-bold/cu-progress/light-orange/tui-mtop 等全局类，仅有页面自身样式（与 X 互证部分仅限页面样式）。

## 5. 弹窗 / 分支状态

- 9 个弹窗标志一次关齐：hideModal 关 modalCalendar/modalListen/modalWord/modalStudy/modalTest/modalSpeak/modalDays/modalQuizDetail/modalSpeakDetail（A:687）。
- modalCalendar（tui-calendar arrowType=2）：翻月走 monthChange switch 分支；点已打卡日（bgColor #ff9b6a）回填当日全部学习数据（getCradList）。
- 图表弹层统一结构：tui-bottom-popup > scroll-view.tui-popup-scroll(height:modal_height rpx) > tui-charts-box；磨耳朵=柱图+折线图，单词=双柱图+折线图（带 Ymin），学习=柱图+等级进度条列表，测验=柱图+折线图（带 Ymin），跟读=双柱图+折线图（带 Ymin），日历统计=6 柱图（本月打卡天/次数/测验/跟读/单词/磨耳朵，aggregate group by 月 substr($date,0,7)，limit 6 个月）。
- 弹层 **maskZIndex/zIndex** 实证值（tui-bottom-popup 无 arrowType 属性；「1001-1004」是层级参数不是箭头样式，原 spec 归属有误已改正）：modalCalendar 弹层（W:1287）无 maskZIndex/zIndex 属性对；modalListen=1001/1002（W:1291）；modalWord=1003/1004（W:1316）；modalStudy=1003/1004（W:1352）；modalTest=1001/1002（W:1393）；modalSpeak=1001/1002（W:1418）；modalDays=1003/1004（W:1451）；modalQuizDetail=1001/1002（W:1523）；modalSpeakDetail=1001/1002（W:1595）。tui-calendar 的 arrowType=z[298]=字面量 2（W:317）。
- 测验详情弹层：tui-collapse（bindclick=changeCollapse）逐条渲染 quizDetailList，折叠内容为 item.list 的 tui-list-cell{{citem}}；tui-rate disabled quantity=3，条目「{current} 次」；底部另有 tui-nomore backgroundColor=#f7f7f7 text=「没有更多了」（m0 W:1590，spec 原漏记已补）。跟读详情弹层：三行指标（完成度/准确度/流利度）三星制 + 原始数据（completedPages/totalPages 页、平均 averageScore 分、wcpmValue WCPM），数据源 speakList[].wcpm_result。
- 分享模式（share=true）：顶部 5 入口隐藏、学习卡保留、测验/跟读/单词/磨耳朵卡按次数条件显示；goCardShare 用 share_baby_id（URL 参数名 user_babyid）。

## 6. 对账记录（对账员填写）

对账时间：2026-09-28。对账方法：对账员独立重推——通读 `chunk_32.webview.js` W:1-1749（ops 数组 W:19-684 全量逐行、m0 渲染函数 W:689-1745 全量）+ 用脚本按 `_mz` 偏移语义重建 z 数组（665 ops）解析各属性真值；`chunk_32.appservice.js` A:687 整行导出后用 grep/python 正则逐项核数（34,125 字符与 spec 记录一致）；`wxss_out/pages__daka__daka.wxss` 233 行通读抽查；`page-frame.html` 复核全局类。全部核对均在本会话实际执行，命令与输出见各条。

- [x] 节点树与原文一致 —— ops 全量通读 + m0 通读，骨架顺序/条件分支/wx:for 全部对上（W:19-684 / W:689-1745）
- [x] 类名抽查 30 处全中 —— ops 类名 12 处（tui-header2 W:19、tui-product-category margin-top-sm W:25、tui-category-item W:26、tui-record__num W:63、tui-num__size W:64、tui-cmt-box tui-radius-all W:86、cu-progress round sm W:121、tui-goods__item W:130、tui-new-label-finish W:140、tui-pri__box W:153、wrong-words-list W:268、tui-popup-scroll W:324）+ wxss 18 处（.container X:1、.tui-radius-all X:36、.tui-cmt-box X:71、.tui-popup-scroll X:110、.tui-goods__imgbox X:157-158、.tui-goods__img X:159、.tui-block__box X:164、.tui-new-label-finish X:169、quiz/speak X:170-172、.tui-sign__record X:192、.tui-record__item X:194-195（含 ::after 竖线 rgba(0,0,0,.2) scaleX(.5)）、.tui-record__num X:197、.tui-num__size X:198、.tui-category-item X:201、.tui-category-img X:202、.tui-charts-box X:210、.metric-label X:217、.stars-box X:220、.divider X:228、.metrics-area X:229、.tui-popup-speak X:230、.empty-star X:231、.active-star X:232）
- [x] 文案逐字一致 —— 加入班级/我的班级（A:687 data+onShow）、打卡计划 W:57、学习报告 W:64、日历统计 W:71、转发分享 W:80、本月打卡 W:85、累计打卡 W:92、累计学习 W:99、「第{current}天打卡任务」z[84]=W:103、「今日打卡任务」z[86]=W:105、「，已完成{todayDo}/{taskToday.length}」z[89]、创建计划/查看计划 W:133、「{plan_days}/{total}」z[108]、当前暂无打卡计划 W:176、[⭐点击查看如何创建个人打卡计划⭐] W:161、当前学习计划已到期 W:164、学习 W:175、共完成{cardList.length}课，{cur_level}级进度为{level_progress} z[160]、测验 W:189+「共{n}课，通过率为{cardQuiz_progress}」z[191]、跟读 W:222+「共{n}课，开口{speak_num}次，平均为{speak_value}分」、单词 W:272+「共学习{word_study}个，复习{word_fuxi}个，测验{word_num}个」W:294+「，拼读{word_pindu}个」W:296、磨耳朵 W:289+「共熏听{listen.length}课，总计时长{listen_time}分钟」、已经到底部了 W:313、没有更多了 W:629（quiz 弹层内，spec 漏记）、录音测评结果： W:647、完成度/准确度/流利度 W:652/662/672、「平均 {averageScore} 分」W:667-670、「{wcpmValue} WCPM」W:679-680、测验通过率 W:628、★ W:639
- [x] 事件与云函数调用清单齐全 —— A:687 grep 实测：wx.cloud.callFunction×2（updateUserData tag=listenCardUpdate / listenTimeUpdate，前置 globalData.todayDataExist==true、判重 elemMatch，与 spec 3 节一致）；collection 计数 user_data×16 / user_study×3 / user_plan×1 / words×2 与 spec「云数据库直查清单」计数一致；navigateTo 计数 ../card/card?id=×3、../group/group?id=×1、../group/group?id=public×1、../planCreate×1、../planDetail?plan_id=×1、../planList×1、../report×1、../share/share?card_id=×1、../wordExt/wordExt?word=×2、reLaunch ../index/index×1，与 spec「页面跳转清单」一致；onShareAppMessage（「0%"==level_progress 两分支标题、.jpg→0.jpg、shareImg.png 兜底、path=/pages/daka/daka?baby_id=）/onShareTimeline（fenjitu.jpg 兜底）/onPullDownRefresh（this.onLoad(1)+1e3ms stopPullDownRefresh）/clickGuide（openOfficialAccountArticle 文章 URL）逐项命中；levelTotal=[108,102,102,102,96,90,84,84,60,60,60,60]、slice(0,8)、864e5、skip(20)、/60、.66、options1..17 共 17 组（Ymax×50/Ymin×3/splitNumber×34、#5677fc×10、#ff7900×9、#e3e3e3×4）全部命中

### diff 摘要（对账员发现，需蒸馏工修复）

1. **【事件归属错误】`showModalDays` 绑在统计条不在分享按钮**：m0 W:760 `lQVB=_mz(z,'view',['bind:tap',44,'class',1])`，z[44]=W:63=`'showModalDays'`，class=z[45]=W:64=`'tui-sign__record'`——点「本月打卡/累计打卡/累计学习」统计条打开 modalDays（6 柱图）。而转发分享 button（m0 W:748 `['class',36,'openType',1,'style',2]`）**无任何 bindtap**，仅靠 `open-type="share"` 原生转发。spec 第 1 节 W:62 注释「bindtap=showModalDays ops[63]」与第 3 节事件表「转发分享按钮 tap → showModalDays」均错；第 3 节「分类 tap×4」表第一行亦应改为统计条 tap。
2. **【z[78] 待对账项落实】**z[78]=W:97=`'#ff9b6a'`（W:78 定义）——tui-circular-progress 的 fontColor 与 tui-icon 的 color 均引用它，spec W:91 注释「color=ops[141]=z[78] 待对账」可关闭：完成角标 icon color=#ff9b6a。
3. **【图标 size 抄错 2 处】单词卡 tui-icon（m0 W:1248，base=283）：name=z[284]='explore'、**size=z[285]='30'**（非 32，spec 引「复用 z[218]→'32'」有误——z[218]=W:237='30'，且单词卡 size 实际取 z[285]）；磨耳朵卡 tui-icon（m0 W:1208，base=266）：name=z[267]='clock'、**size=z[268]='30'**（非 32）。另测验角标 quiz icon（m0 W:945）size=z[129]='38'，spec 未记 size。
4. **【arrowType 结论错误】第 5 节「弹层 arrowType 1001/1002/1003/1004」不成立**：各 tui-bottom-popup 的 `_mz` 属性表只有 `['bindclose',N,'maskZIndex',1,'show',2,'zIndex',3]`（m0 W:1291/1316/1352/1393/1418/1451/1523/1595），按偏移解析 maskZIndex/zIndex 才是 '1001'/'1002'、'1003'/'1004' 等字面量（如 modalListen 弹层 maskZIndex='1001'、zIndex='1002'，modalWord 弹层 maskZIndex='1003'、zIndex='1004'）；tui-calendar 的 arrowType=z[298]=W:317=`[1,2]`（字面量 2），不是 '1001'。spec 第 1/5 节所有 arrowType 归属需改为 maskZIndex/zIndex。
5. **【onHide 有清理逻辑，spec「仅 console.log」错】**A:687 onHide 实体：`onHide:function(){console.log("onHide"),!0==this.data.listenCards_playing&&(this.innerAudioContext.stop(),this.setData({listenCards_playing:!1}))}`——播放中切后台会 stop 并复位标志。spec 3 节「其他生命周期」待复核项可关闭：onHide 有停止磨耳朵播放逻辑。
6. **【goCardShare 参数名】**实际 URL 为 `../share/share?card_id=…&user_babyid=…`（A:687 原文 `user_babyid`，无第二下划线），spec 事件表写「user_baby_id=」需更正。
7. **【data 初始值小漏】**data 块实际还有 `cardQuiz_progress:"0%"`、`wordList:[]`、`speakDetailCover:""`、`speakDetailLevel:""`、`speakDetailTitle:""`、`modalDayList:!1`、`dayList:[]`、`share_cover:""`（A:687 data:(t={…}) 原文），spec 第 3 节 data 清单未列全（modal_height:800 经 `a._(t,"modal_height",800)` 注入属实，plan_empty 同法注入）。
8. **【quiz 弹层漏一个 tui-nomore】**测验详情弹层底部另有 `tui-nomore backgroundColor='#f7f7f7' text='没有更多了'`（ops W:629，节点 m0 W:1568 一带），spec 弹层组未记。
9. **【monthChange 翻月分支】**switch 分支 setData 含 `day/year/month/days` + `cur_records:[]`（A:687 原文），spec 只写「year/month/days+status 清空」，cur_records 漏记（小）。
10. **【本节复核关闭项】**spec 中四处「待复核」本次已实证：① today_current 确仅 data 初始化 0 一处赋值（A:687 count==2，goCard 运行时恒走不带 daka_day 分支）；② getPlanClickDate 确为空函数 `function(t){}`；③ onHide 见 diff#5；④ arrowType 见 diff#4（原「待复核」结论方向对——确实未实证，但实证结果是 spec 写错了）。
11. **【样式表拼写确认】**页面 wxss 与本页内嵌 setCssToHead（W:1748）中的类名均为 **`bg-macaron`**（X:32 `.bg-macaron{background-color:#ff9b6a;color:var(--black)}`），而节点树 ops 用的是 `bg-macron`（W:104/W:174，拼写少了 a）——即该类在 wxss 中**无定义、实际不生效**，ColorUI 的 `bg-macaron`/`light-orange`/`tui-mtop`/`cu-progress` 均出自 page-frame.html（grep 命中 8/3/23/21 次），本页内嵌副本 W:1748 无这四个类。spec 第 2 节「.bg-macron background-color:#ff9b6a (X:32)」的 X 行号指向的是 bg-macaron，且「W:1748 与 X 一致互证」表述需限定为页面自身样式（全局类不在 W:1748）。
12. **【依赖组件名单核对】**从节点树 _mz 反推的自定义组件（tui-bottom-popup/tui-calendar/tui-charts-column/tui-charts-line/tui-circular-progress/tui-rate/tui-tag/tui-week-date/tui-nomore/tui-icon）另加 2 个 spec 漏记：**tui-collapse**（测验详情弹层，m0 W:1525）、**tui-list-cell**（quizDetailList 条目内层，m0 W:1551）。

### 复核通过的待验证标注（不改 spec 正文，供开发仓参考）

- 跟读条目 tap 处 spec 注「bind 绑定名 ops[17]='listenCards'，catch/bind 以对账为准」→ 实证为 **catch:tap**（m0 W:1019 `['catch:tap',162,'class',1,'src',2]`，z[162]='listenCards'）。
- 分类图标 5 个 URL、功能图标 8 个 URL、磨耳朵音频模板 `https://qianyufang.top/{level}/Audio/{id}.mp3`（A:687 playListenAudio 原文）、公众号文章 URL——grep 全部命中，计数与 spec 一致。

**结论：**核对比率为「骨架/文案/事件/云函数清单主体全对」，但存在 2 处事件归属错误（diff#1、#6）、1 处逻辑漏记（diff#5）、若干属性值/组件漏记（diff#3/4/7/8/9/11/12），**本次不通过**。请蒸馏工按 diff 修复后交对账员复审；PROGRESS.md 不更新（对账未通过不推进）。

### 蒸馏工修正记录（2026-09-24）

对账员 12 条 diff 已全部修复，每条修正前均在原文重新验证（z 数组按 `gz$gwx_XC_26_1` 内 Z() 调用顺序 0 基重建，665 项，与对账员结论一致）。逐条修正如下：

1. **showModalDays 事件归属**（diff#1）：已改第 1 节统计条注释为 `bind:tap="showModalDays"`（m0 W:760 `['bind:tap',44,'class',1]`，z[44]=W:63='showModalDays'、z[45]=W:64='tui-sign__record'）；分享 button 注释改为「无 bindtap，仅 open-type=share」（m0 W:748 `['class',36,'openType',1,'style',2]`）；第 3 节事件表拆为「统计条 tap → showModalDays」与「转发分享按钮 → 无事件」两行。
2. **z[78]='#ff9b6a'**（diff#2）：已在 W:97 原文核实 `Z([3,'#ff9b6a'])`（W:78 定义 `Z([3,'#ff9b6a'])` 序列中 z[78] 即此值）。第 1 节完成角标 tui-icon 补记 `color="#ff9b6a"`，并连带补齐本页全部 7 处 tui-icon 的 color 属性（finish W:912、quiz W:921、learn imface W:983、quiz 卡 circle-selected W:1049、speak imvoice W:1115、word explore W:1248、listen clock W:1208，color 均复用 z[78]）。
3. **size 抄错**（diff#3）：单词卡 explore size 改为 30（z[285]=z[218]，z[218]=W:237='30'，原 spec「复用 z[218]→'32'」确有误）；磨耳朵卡 clock size 改为 30（z[268]=z[218]）；quiz 角标 order icon size=38 已补记（z[129]=z[124]=W:143 '38'）。注意 z[185]=W:204='32' 属学习卡 circle-selected 图标（m0 W:1049），非角标。
4. **arrowType→maskZIndex/zIndex**（diff#4）：已实证 tui-bottom-popup 各节点属性表为 `['bindclose',N,'maskZIndex',1,'show',2,'zIndex',3]`（W:1291/1316/1352/1393/1418/1451/1523/1595），「1001-1004」为 maskZIndex/zIndex 值；tui-calendar arrowType=z[298]=W:317 `[1,2]`（字面量 2）。第 1 节弹层组与第 5 节全部改为 maskZIndex/zIndex 逐弹层取值（1001/1002 与 1003/1004 两组交替复用）。
5. **onHide 清理逻辑**（diff#5）：A:687 原文 `onHide:function(){console.log("onHide"),!0==this.data.listenCards_playing&&(this.innerAudioContext.stop(),this.setData({listenCards_playing:!1}))}`，第 3 节已改为「播放中切后台 stop 并复位 listenCards_playing」。
6. **user_babyid**（diff#6）：A:687 原文 `wx.navigateTo({url:"../share/share?card_id="+e+"&user_babyid="+s})`，第 3 节事件表已改正（无第二个下划线）。
7. **data 初始值补全**（diff#7）：第 3 节 data 清单已按 A:687 原文补 `cardQuiz_progress:"0%"、wordList:[]、speakDetailCover/Level/Title:""、modalDayList:!1、dayList:[]`；并注明 share_baby_id/share_date/share_cover 为 Page 顶层字段（`Page({share_baby_id:"",share_date:"",share_cover:"",data:(t={…})` 原文）、levelProgress/levelTotal/plan_empty/modal_height/modalListen/modalWord/modalStudy/modalTest/modalQuizDetail/modalDays 经 `a._(t,…)` 注入（modal_height:800、plan_empty:!1 已核实）。
8. **quiz 弹层 tui-nomore**（diff#8）：已在 W:629-631 核实 `Z(z[138])`/'没有更多了'，节点 o25B W:1590 `['backgroundColor',611,'text',1]`（backgroundColor=z[611]=z[138]='#f7f7f7'），弹层组已补记。原文核对说明：对账员写「ops W:629」实际是 z[610]/W:630 附近的文案定义行，节点在 W:1590，语义一致。
9. **monthChange 翻月分支 cur_records**（diff#9）：A:687 原文 setData 含 `cur_records:[]`，事件表已补。
10. **四处「待复核」关闭**（diff#10）：① today_current——A:687 grep 全行仅 2 处命中（data 初始化 0 + goCard 比较），goCard 恒走不带 daka_day 分支，正文标注已改为实证结论；② getPlanClickDate——A:687 原文 `getPlanClickDate:function(t){}`，且 dateClick 三分支（今天/早于/晚于今天）全部只调用它，正文已按实证写；③ onHide——见修正 5；④ arrowType——见修正 4（原「待复核」实证结果为 spec 原结论有误，已改正）。
11. **bg-macaron/bg-macron 与全局类出处**（diff#11）：X:32 原文 `.bg-macaron{background-color:#ff9b6a;color:var(--black)}`（拼写有 a）；节点树 ops 原文为 `bg-macron`（W:123/W:193/W:425 z[104]/z[136]），页面 wxss 无 `.bg-macron` 定义。第 1 节骨架、第 2 节样式表已按「节点树原文拼写 bg-macron，页面 wxss 定义为 bg-macaron」勘正。全局类证据指向一并修正：page-frame.html 复核，text-bold（font-weight:700）、cu-progress 系列出自 app.wxss 块（page-frame L:1644），light-orange（background:#fef5eb;color:#faa851）出自 tui-tag.wxss 块（page-frame L:7027），W:1748 内 grep text-bold/cu-progress/light-orange/tui-mtop 均 0 命中（bg-macaron 1 命中，属页面自身样式）；另 app.wxss 全局确有 `.bg-macron{background-color:var(--macron);color:var(--white)}`（--macron:#ff9b6a），即节点树的 bg-macron 落到的是这条全局定义而非页面 bg-macaron，两者 color 不同，开发仓写码需以节点树原文拼写为准并知悉此差异。
12. **依赖组件补记**（diff#12）：tui-collapse（m0 W:1554 `['bindclick',594,'current',1,'index',2]`，测验详情弹层内渲染 quizDetailList）与 tui-list-cell（m0 W:1575，tui-collapse 折叠内容 slot 内逐条渲染 item.list→citem）已补入第 1 节依赖组件清单，弹层组注释同步补记。

附加：对账员「复核通过」项中 catch:tap 实证结论已回写第 1 节正文（m0 W:1007 `['catch:tap',162,'class',1,'src',2]`，z[162]=W:181='listenCards'；对账记录中 W:1019 为笔误，实际节点行 W:1007，z 值一致不影响结论）。

### 对账员复核（第二轮收尾）

复核时间：2026-09-28（第二轮）。方法：对上轮 12 条 diff 逐条回原文抽验关键证据（本会话实际执行 sed/grep 取行核对），并对蒸馏工追加的 bg-macron 全局定义发现做独立验证；同时对第 6 节对账内容做篡改检查。

**12 条修正抽验（每条至少一处关键证据回原文核实，全部命中）：**

1. showModalDays 事件归属：W:760 原文 `lQVB=_mz(z,'view',['bind:tap',44,'class',1],…)`，z[44]=W:63 `Z([3,'showModalDays'])`、z[45]=W:64 `Z([3,'tui-sign__record'])`——事件确在统计条；W:748 分享 button 属性表 `['class',36,'openType',1,'style',2]` 无 bindtap。spec 第 1/3 节已改正，与原文一致。
2. z[78] color：W:97 原文 `Z([3,'#ff9b6a'])`（W:78 定义行），spec 第 1 节 7 处 tui-icon color 补记成立。
3. icon size：W:287/W:304 原文均 `Z(z[218])`，W:237=`Z([3,'30'])`——explore/clock size=30（z[285]/z[268]）成立；W:204=`Z([3,'32'])` 属 circle-selected（z[185]），区分正确。
4. arrowType→maskZIndex：W:1287 原文 `cF2B=_mz(z,'tui-bottom-popup',['bindclose',296,'show',1],…)`（calendar 弹层确无 maskZIndex/zIndex 对）；W:1291/W:1451 `['bindclose',N,'maskZIndex',1,'show',2,'zIndex',3]`；tui-calendar arrowType=W:317 `Z([1,2])` 字面量 2。第 1/5 节改正成立。
5. onHide 清理：A:687 原文 grep 实测 `onHide:function(){console.log("onHide"),!0==this.data.listenCards_playing&&(this.innerAudioContext.stop(),this.setData({listenCards_playing:!1}))}`——spec 改正成立。
6. user_babyid：A:687 原文 grep 实测 `user_babyid=`（无第二个下划线），spec 已改正。
7. data 漏项：A:687 grep 实测 `cardQuiz_progress:"0%"`、`wordList:[]`、`speakDetailCover:""`、`modalDayList:!1`、`share_baby_id:"",share_date:"",share_cover:""` 均命中，补全成立。
8. quiz 弹层 tui-nomore：W:631 原文 `Z([3,'没有更多了'])`，节点 o25B W:1590 `['backgroundColor',611,'text',1]`——补记成立。
9. monthChange cur_records：A:687 grep 实测 `cur_records:[]` 命中，补记成立。
10. 四项待复核关闭：A:687 grep 实测 `getPlanClickDate:function(t){}` 空函数、`today_current` 全行 2 处命中（初始化+goCard 比较）——实证结论成立。
11. bg-macaron/bg-macron：X:32 原文 `.bg-macaron{background-color:#ff9b6a;color:var(--black)}`（拼写有 a）；页面 wxss grep bg-macron 0 命中；W:1748 仅 1 处 bg-macaron（页面自身样式）——勘正成立。
12. 组件补记：W:1554 原文 `oL5B=_mz(z,'tui-collapse',['bindclick',594,'current',1,'index',2],…)`、W:1575 `oZ5B=_n('tui-list-cell')`——tui-collapse/tui-list-cell 补记成立。

**bg-macron 全局定义新发现——独立验证成立，采纳：** page-frame.html 原文实测 `.bg-macron{background-color:var(--macron);color:var(--white)}` 与 `--macron:#ff9b6a`，均位于 app.wxss 的 setCssToHead 块（page-frame L:1644，与 text-bold 同块）；即节点树写的 bg-macron 运行时落在该全局定义（color:var(--white)）而非页面 `.bg-macaron`（color:var(--black)），两者 color 不同。「页面 wxss 无定义」的旧表述由「落在全局 app.wxss 定义」取代，spec 第 2 节与修正记录 11 的新表述采纳。

**篡改检查：** 第 6 节对账内容（勾选项 4 条、diff 摘要 12 条、结论段）未被改动；实质清单核数本会话复测一致——callFunction×2、collection 计数 user_data×16/user_study×3/user_plan×1/words×2、today_current×2，原样。

**遗留备注（不阻塞验收，下轮蒸馏工顺手同步）：** 第 1 节三处行内注释（W:123/W:193/W:425 一带，骨架 L79/L127/L226）仍残留旧表述「页面 wxss 无定义不生效——正确类名为 bg-macaron」，与第 2 节已采纳的「bg-macron 落在 app.wxss 全局定义」相抵；开发仓写码以第 2 节与修正记录 11 为准（节点树原文拼写 bg-macron，运行时生效于全局定义，color=var(--white)），三处行内注释按此口径理解。

**verdict=PASS**：12 条 diff 修正全部验证通过，bg-macron 全局定义发现成立并采纳，篡改检查无异常。PROGRESS.md 由对账员更新推进，本页转「对账通过（待验收）」，等用户验收。
