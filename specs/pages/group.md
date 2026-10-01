---
页名: group
显示名: 班级打卡页（班级名动态标题）
状态: 对账通过（待验收）
chunk: chunk_25.webview.js / chunk_25.appservice.js
导航栏: 系统栏（页面 json 标题为空串；运行时被 setNavigationBarTitle 动态置为班级名/排名·榜单视图标题/「英语分级兔公共班级」）
---

# 页面还原规格：班级打卡页（pages/group/group）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：**W**=unpacked/chunk_25.webview.js（`grep -c ""`=2782 行，全文件；group 树构建器 m1 在 W:892-2756，ops 表 `gz$gwx_XC_18_2` 在 W:40-845 共 801 项，W:2782 内嵌 `__wxAppCode__['pages/group/group.wxss']=setCssToHead(...)`）；**A**=unpacked/chunk_25.appservice.js（`grep -c ""`=812 行；**A:810 行首实为 tui-tabs 组件 define 收尾** `},{isPage:false,…'components/tui-tabs/tui-tabs.js'});require("components/tui-tabs/tui-tabs.js");;__wxRoute = "pages/group/group";__wxAppCurrentFile__="pages/group/group.js";define("pages/group/group.js",…`（本次 sed 实测，该行 444 字节），Page 主体全在 **A:811 单行**（node 实测 27382 字符 / `wc -c` 28167 字节含尾换行，方法级无法给行号，统一引 A:811，方法体切分见 group_methods_all.txt），A:812 收尾 `},{isPage:true,isComponent:true,currentFile:'pages/group/group.js'})`）；**X**=unpacked/wxss_out/pages__group__group.wxss（353 行）；**C**=unpacked/app-config.json（单行 L1，node JSON.parse 实测）。
> 定位命令与输出：`grep -l "'./pages/group/group.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_25.webview.js；W:849 `var x=['./components/tui-tabs/tui-tabs.wxml','./pages/group/group.wxml']`、W:891 `d_[x[1]]={}`、W:892 `var m1=function(e,s,r,gg){`、W:2756 `}`、W:2757 `e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}`（以上本次 sed 实测）。
>
> **⚠ _mz 属性索引坑（按 SKILL 规则换算）**：`_mz(z,tag,['attr1',idx1,'attr2',idx2…])` 中仅首属性取印出数字为 ops 下标，后续属性为「首下标+连续递增」。抽验（本次 sed 实测行原文）：W:898 `_mz(z,'button',['class',2,'openType',1,'style',2])` → z[2]='tui-share-btn'/z[3]='share'/z[4]='width:100%'；W:908 → z[7]='clickItem'/z[8]='cu-item'/z[9]='1'；W:972 `_mz(z,'view',['bind:tap',42,'class',1,'style',2])` → z[42]='showUserAllModal'。全部命中。
>
> **⚠ 双份 ops**：同 chunk W:15-39 的 `gz$gwx_XC_18_1` 是 tui-tabs **组件**的 ops，勿与页面 `gz$gwx_XC_18_2` 混用。
> **解码产物**（tools/decode_gwx_tree.js 机械解析，623 节点/29 wx:for/30 闭包/69 if-elif-else/0 未识别行；`_mz` 三坑已修：ops 包裹编码、首索引+连续递增、闭包作用域栈）：`C:\Users\Dell\AppData\Local\Temp\group_skeleton.txt`（691 行带 @L 行号骨架，本次蒸馏全文通读）、`group_ops.txt`（801 项全表）、`group_trace.txt`（解析轨迹）、`group_methods_all.txt`（Page 74 成员方法体全文，UTF-8）。⚠ 经 bash 管道落盘的中文有 GBK 转码污染，以 node fs 直写的 UTF-8 文件为准。
> **本次蒸馏抽验记录**：W 侧 42 个锚点行首、X 侧 35 行、云函数/集合/文案计数（node 全文扫描）、data 全量初值、页面 json、honorWall z[772] ops 原文均实测；A:811 内方法函数体细节未逐字通读（单行压缩，切分稿见 group_methods_all.txt），对账员复核。

## 1. 页面骨架（节点树）

来源：`chunk_25.webview.js` 的 `$gwx_XC_18`（W:849 x 数组、W:892-2756 m1、W:2757 注册）。根节点挂载 `_(r,…)` 的顶层 5 块如下（`@L`=chunk 行号，骨架全文见 group_skeleton.txt）：

```
① 八宫格菜单
<view class="cu-list grid grid1 col-4">                                      @L894
  <view class="cu-item">                                                     @L896
    <button class="tui-share-btn" open-type="share" style="width:100%">      @L898（_mz ['class',2,'openType',1,'style',2]，实为分享入口非菜单项）
      <view class="cuIcon-share text-blue"/>                                 @L899
      <text>转发邀请</text>                                                   @L902-903
  <view bindtap="clickItem" class="cu-item" data-id="1">                     @L908（_mz →z[7]='clickItem'/z[9]='1'）
    <view class="cuIcon-rank text-blue"/><text>今日排名</text>                @L909-913
  … data-id=2「本月榜单」cuIcon-medal @L917-922 / 3「年度之星」cuIcon-crown @L926-931 /
    4「日历统计」cuIcon-calendar @L935-940 / 5「学习计划」cuIcon-squarecheck @L944-949 /
    6「班级二维码」cuIcon-qrcode @L953-958
  <view bindtap="clickItem" class="cu-item" data-id="7">                     @L962
    <view class="{{isGroupAdd ? 'cuIcon-exit' : 'cuIcon-roundadd'}} text-blue"/>   @L963（三元）
    <text>{{isGroupAdd ? '退出班级' : '加入班级'}}</text>                      @L966-967

② 成员统计行（整行可点开全员弹层）
<view bind:tap="showUserAllModal" class="padding-sm" style="background-color:#ffffff">  @L972（z[42]='showUserAllModal'）
  <view class="cu-avatar-group">                                             @L973
    <!-- wx:for={{avatars}} item/index，片段 oRN @L978（挂载 @L983） -->
    <view class="cu-avatar round l" style="background-image:url(item.babyInfo.avatarUrl)"/>  @L978
  <text class="tui-avatar-title text-gray">共{{num_total}}人，今日打卡{{num_today}}人</text>  @L985-987

③ 打卡进度条（公共班隐藏）
<block wx:if="{{group_id != 'public'}}">                                     @L991（判断 @L993）
  <view class="tui-new-label-progress">                                      @L994
    <view class="bg-macron" style="width:{{progress}}"/>                     @L996（_mz ['class',54,'style',1]）

④ 主区三态（同一 block 三分支）
<block wx:if="{{mode_rank == true}}" @L1002 / wx:elif="{{mode_history == true}}" @L1246 / wx:else>  @L1000
  排名态：
    <tui-tabs bindchange="changeRankTab" currentTab="{{rankTab}}" itemWidth="20%" tabs="{{rankTabs}}"/>  @L1003
    <!-- rankTab==0..4 五个 block（@L1005/1052/1099/1146/1193，判断 @L1007/1054/1101/1148/1195），
         各挂 wx:for={{rankList}}，片段 t9N/fSO/lCP/xWP/cGQ（@L1011/1058/1105/1152/1199 起） -->
    榜单行（五片同构，右值字段不同）：                                        片段 t9N @L1011-1039 为例
    <view class="tui-pro-titbox">                                            @L1011
      <block wx:if="{{item.card_times}}">                                    @L1013（对应字段见下表）
        <view class="cu-list menu-avatar" style="width:100%">                @L1016
          <view bindtap="getUserData" class="cu-item" data-id="{{index}}">   @L1017
            <view class="cu-number text-macron value-text">{{index+1}}.</view>  @L1018-1020
            <view class="cu-avatar1 round lg" style="background-image:url(item.babyInfo.avatarUrl)"/>  @L1023
            <view class="content1 flex-sub">nickName / birth(text-gray text-sm)</view>  @L1025-1033
            <view class="action">{{item.card_times}} 次</view>               @L1037-1039
    右值字段×单位：rankTab0 card_times「次」/1 cardQuiz_times「次」/2 speak_num「次」/3 word_study「个」/
    4 listen_num「分钟」（⚠ 骨架 @L1227 实为 item.listen_num，非依据包所述 listen_time；折算见 §3 计算规则）
  榜单态（mode_history）：
    <tui-tabs bindchange="changeHistoryTab" currentTab="{{historyTab}}" itemWidth="20%" tabs="{{rankTabs}}"/>  @L1247
      （⚠ 依据包骨架漏了 currentTab/itemWidth，骨架 @L1247 实测有，本次实测 W:1247 行首同）
    <!-- historyTab==0..4 五个 block（@L1249/1297/1345/1393/1441），wx:for={{historyList}}，
         片段 h7Q/tQR/fAS/lUS/xET（@L1255/1303/1351/1399/1447 起）；行结构同排名态但**无 bindtap**，
         右值 card_total/cardQuiz_total/speak_total/word_total/listen_total，单位 次/次/次/个/分钟 -->
  默认态：
    <view class="list-view" slot="content">                                  @L1496
      <view class="tui-product-box">                                         @L1497
        <view class="tui-product-list">                                      @L1499
          <view class="tui-product-container">                               @L1501（左列）
            <!-- wx:for={{list}}，片段 t3T @L1506 起，wx:if={{(index+1)%2!=0}} @L1508，挂载 @L1680 -->
          <view class="tui-product-container">                               @L1682（右列）
            <!-- wx:for={{list}}，片段 xQV @L1687 起，wx:if={{(index+1)%2==0}} @L1689，挂载 @L1861 -->
          卡片（两列同构，t3T @L1509-1668 为例）：
            <view bindtap="getUserData" class="tui-cmt-box tui-mtop tui-radius-all" data-id="{{index}}">  @L1509
              <view class="cu-list menu-avatar"><view class="cu-item">       @L1510-1512
                <view class="cu-avatar round margin-left-sm" style="background-image:url(item.babyInfo.avatarUrl)"/>  @L1514
                <view class="content flex-sub">nickName(text-cut) / birth</view>  @L1516-1528
                <view class="action text-df" style="width:20%">              @L1532
                  <block wx:if="{{item.plan == 100}}">                       @L1533（else 分支见下注）
                    <image class="love-icon" src="…/images/icon/love.png"/>  @L1536（URL 见 §4）
                    <view class="text-gray text-sm">{{item.time}}</view>     @L1540-1542
              <block wx:if="{{item.plan_id}}">                               @L1550
                <view class="cu-progress round xs" style="width:96%;margin-left:6rpx">
                  <view class="bg-macron" style="width:{{item.plan}}%"/>     @L1554
              <view class="tui-goods-item">                                  @L1558
                <block wx:if="{{item.card_times}}">                          @L1560
                  <image class="tui-goods-img" src="{{item.card.0.cover}}"/> @L1563
                  <block wx:if="{{item.cardQuiz_times}}">                    @L1567（骨架解码位于 wx:else 一侧，分支归属待对账复核）
                    <image class="tui-goods-img" src="{{item.cardQuiz.0.cover}}"/>  @L1570
                <view class="tui-goods-center">                              @L1575
                  if card_times →「学习{{item.card_times}}次」                @L1577-1584
                  if cardQuiz_times →「测验{{item.cardQuiz_times}}次」        @L1589-1596
                  if item.speak →「跟读{{item.speak.length}}课」              @L1601-1608
                  if word_study&&word_times →「单词{{(word_study>word_times)?word_study:word_times}}个」（取 max）  @L1613-1620
                    else 分支：if word_study →「单词{{item.word_study}}个」@L1626-1633；if word_times →「单词{{item.word_times}}个」@L1638-1645
                  if item.listen_time →「熏听{{item.listen.length}}课」       @L1653-1660

⑤ 弹层/尾件群
<block wx:if="{{loadding}}"><tui-loadmore index="{{3}}" type="primary"/></block>  @L1867-1870
<tui-nomore backgroundColor="#f7f7f7" text="暂时没有更多了"/>                 @L1873（_mz z[393]=#f7f7f7）
<tui-poster id="poster" width="{{560}}" height="{{700}}"/>                    @L1875（班级海报画布）
<tui-bottom-popup bindclose="hideModal" maskZIndex="{{1001}}" show="{{modalUser}}" zIndex="{{1002}}">  @L1877
  <view class="tui-pro-titbox">                                              @L1878
    <view class="cu-list menu-avatar" style="width:100%"><view class="cu-item">  @L1880-1881
      <view class="cu-avatar round lg" style="background-image:url(userInfo.avatarUrl)"/>  @L1883
      <view class="content flex-sub">userInfo.nickName / userInfo.birth(text-gray text-sm)</view>  @L1885-1893
      <view class="action text-df">{{date_select}}</view>                    @L1897-1899
  <scroll-view class="tui-popup-scroll" style="height:{{modal_height}}rpx">  @L1905（_mz 首属性 scrollY 索引 -1 = 字面 true，待对账复核）
    <view class="tui-sign__record">                                          @L1906
      三栏 tui-record__item：本月打卡 {{user_month_days}} 天（@L1908-1922）/ 累计打卡 {{user_total_days}} 天（@L1926-1940）/ 累计学习 {{user_total_times}} 次（@L1944-1958）
    <view class="tui-cmt-box tui-mtop tui-radius-all">                       @L1963 学习块
      <view class="tui-list-cell">⚠（未注册组件，见 §1.2） + tui-icon name="imface" color="#ff9b6a" size="28"  @L1965-1969
        「学习」+「共完成{{card_times}}次」                                   @L1978-1983
      <view class="cu-list grid col-3">                                      @L1989
        <!-- wx:for={{cardList}}，片段 xUY @L1994 起（挂载 @L2015） -->
        <view class="cu-card"><view class="cu-item">                         @L1994-1996
          <image src="{{item.cover}}" style="width:100%;height:320rpx">      @L1998
            <view class="bg-macron tui-new-label-text text-center text-white text-xs">{{item.num}}次</view>  @L1999-2001（角标）
          <view class="text-cut text-sm margin-top-xs">{{item.level}}: {{item.title}}</view>  @L2005-2007
    <block wx:if="{{cardQuiz_times}}">                                       @L2018 测验块
      tui-list-cell + tui-icon name="order" size="30"（@L2023-2027）
      「测验」+「共完成{{cardQuiz_times}}课, 通过率为{{cardQuiz_progress}}」  @L2036-2041
      <view class="padding-left padding-right padding-bottom">               @L2047
        <!-- wx:for={{cardQuizList}}，片段 tIZ @L2052 起（挂载 @L2073） -->
        <view bind:tap="showQuizDetail" class="flex align-center margin-top-sm" data-id="{{index}}">  @L2052
          <view class="text-cut" style="width:40%"><text class="text-gray">{{item.level}}:{{item.title}}</text></view>  @L2053-2056
          <view class="cu-progress round sm" style="width:86%"><view class="bg-macron" style="width:{{item.rate}}"/></view>  @L2060-2061
          <view class="record-play margin-left-sm"><image class="quiz-more-icon" src="…/icon/more.png"/></view>  @L2064-2066
    <block wx:if="{{speakList.length != 0}}">                                @L2077 跟读块
      tui-list-cell + tui-icon name="voice-fill" size="30"（@L2082-2086）
      「跟读」+「共完成{{speakList.length}}课, 平均得分为{{speak_value}}分」  @L2095-2100
      <!-- wx:for={{speakList}}，片段 o8Z @L2111 起（挂载 @L2139） -->
      <view bindtap="goCardShare" class="flex align-center" data-id="{{index}}">  @L2111
        <view class="text-cut" style="width:40%">{{item.level}}:{{item.title}}</view>  @L2112-2115
        <view catch:tap="showSpeakDetail" class="star-speak" data-id="{{index}}">  @L2119
          <!-- wx:for={{item.stars}} citem/index，片段 hI1 @L2123 -->
          <image class="icon-star-speak" src="{{citem>3 ? '…/icon/star_icon.png' : '…/icon/star_icon_grey.png'}}"/>  @L2123
        <view class="record-play margin-left-sm"><image class="record-play-icon" src="…/icon/voice.png"/></view>  @L2130-2132
    <block wx:if="{{(word_study || word_times) || word_fuxi}}">              @L2143 单词块
      tui-list-cell + tui-icon name="strategy" size="30"（@L2148-2152）「单词」@L2161
      三行各自 wx:if：「共学习{{word_study}}个」@L2171-2175 /「复习{{word_fuxi}}个」@L2179-2183 /「测验通过{{word_times}}个」@L2187-2191
    <block wx:if="{{listen_time}}">                                          @L2202 磨耳朵块
      ⚠ class 首位带空格 ` tui-cmt-box …`（骨架 @L2205 原样）＋ tui-icon name="clock" size="30"（@L2207-2211）「磨耳朵」@L2220
      「共熏听{{listen.length}}课，总计时长{{listen_time}}分钟」              @L2230
    <tui-nomore backgroundColor="#f7f7f7" text="已经到最底了"/>              @L2236
<tui-bottom-popup bindclose="hideModal" maskZIndex="{{1001}}" show="{{modalAll}}" zIndex="{{1002}}">  @L2248 全员弹层
  <tui-tabs bindchange="changeUserTab" currentTab="{{userTab}}" itemWidth="25%" tabs="{{userTabs}}"/>  @L2249
  <scroll-view class="tui-popup-scroll" style="height:{{modal_height}}rpx">  @L2251
    userTab==0（@L2252-2306）：<block wx:if={{isShowAllRank}} @L2296 / wx:else>
      wx:for={{userList}} 片段 aT2 @L2258 起（挂载 @L2293）：
        <view class="tui-pro-titbox">                                        @L2258
          <view bind:longpress="deleteGroupUser" class="cu-list menu-avatar" data-id="{{index}}" style="width:100%">  @L2260（longpress 在列表容器级）
            cu-number「{{index+1}}.」@L2263-2265 / 头像 @L2268 / nickName+birth @L2270-2278 / 「{{item.total_days}} 天」@L2282-2284
      else：<tui-nomore text="已经显示全部"/> @L2297 ＋ <tui-nomore bind:tap="showMoreUser" text="点击加载更多"/> @L2301
    userTab==1（@L2308-2349）：wx:for={{userListMonth}} 片段 fE3 @L2314 起，同构 longpress 删人，「{{item.days}} 天」@L2340
    userTab==2（@L2351-2387）：wx:for={{list}} 片段 lY3 @L2357 起，**只读**无 longpress，序号+头像+nickName+「{{item.time}}」@L2378
      <block wx:if={{isShowAllList}} @L2390 / wx:else>：同构 tui-nomore「已经显示全部」@L2391 /「点击加载更多」bind:tap=showMoreList @L2395
<tui-bottom-popup bindclose="hideModal" maskZIndex="{{1001}}" show="{{modalTask}}" zIndex="{{1002}}">  @L2409 计划任务弹层
  <view class="tui-block__box">                                              @L2410
    <scroll-view class="tui-popup-scroll" style="height:{{modal_height}}rpx">  @L2412
      <!-- wx:for={{taskList}}，片段 fK4 @L2416 起（挂载 @L2467） -->
      <view class="margin-top"><view class="tui-group-name"><view>           @L2416-2420
        <text class="text-bold margin-right">{{index}}</text>                @L2421-2423（组名=序号）
        <text class="text-lg">共{{item.length}}课</text>                     @L2426-2428
      <scroll-view scrollX="{{true}}">                                       @L2433（横向滚动）
        <view class="tui-goods__list">                                       @L2435
          <!-- 嵌套 wx:for={{item}} citem/cindex，片段 cZ4 @L2440 起（挂载 @L2460） -->
          <view class="tui-goods__item">                                     @L2440
            <view bind:tap="goStudy" class="tui-goods__imgbox" data-id="{{citem.task.id}}">  @L2442
              <image class="tui-goods__img" mode="widthFix" src="{{citem.task.cover}}"/>  @L2443
            <view class="tui-pri__box"><view class="tui-sale-pri">{{citem.task.title}}</view></view>  @L2446-2451
      <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>              @L2468
<tui-bottom-popup bindclose="hideModalCalendar" show="{{modalCalendar}}">     @L2473（⚠ 无 maskZIndex/zIndex，与其他弹层不同）
  <tui-calendar arrowType="{{2}}" bindchange="monthChange" status="{{status}}"/>  @L2474
<tui-bottom-popup bindclose="hideModalQuizDetail" maskZIndex="{{1001}}" show="{{modalQuizDetail}}" zIndex="{{1002}}">  @L2477 测验详情
  <view class="tui-block__box"><scroll-view class="tui-popup-scroll" style="height:{{modal_height}}rpx">  @L2478-2480
    <view class="tui-quiz-item">                                             @L2481
      <image class="tui-quiz-cover" mode="aspectFill" src="{{quizDetailCover}}"/>  @L2483
      <view class="tui-goods-center">                                        @L2485
        <view class="tui-quiz-name margin-left padding-top"><text class="tui-gray text-xl">{{quizDetailLevel}}: {{quizDetailTitle}}</text></view>  @L2487-2491
        <view class="tui-quiz-name margin-left padding-top"><text class="tui-gray text-xl">测验通过率 {{quizDetailRate}}</text></view>  @L2495-2499
    <!-- wx:for={{quizDetailList}}，片段 cR5 @L2508 起（挂载 @L2543） -->
    <tui-collapse bindclick="changeCollapse" current="{{item.current}}" index="{{index}}">  @L2508
      <view slot="title"><view class="tui-rate-container">                   @L2509-2511
        <tui-rate current="{{item.star}}" disabled="{{true}}" quantity="{{3}}" size="{{36}}"/>  @L2513
        <view class="tui-title-quiz">{{item.num}} 次</view>                  @L2515-2517
      <view slot="content">                                                  @L2522
        <!-- wx:for={{item.list}} citem/index，片段 f55 @L2527 -->
        <view class="tui-content-quiz"><tui-list-cell>{{citem}}</tui-list-cell></view>  @L2527-2530（tui-list-cell 未注册，见 §1.2）
    <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                @L2544
<tui-bottom-popup bindclose="hideModalSpeakDetail" maskZIndex="{{1001}}" show="{{modalSpeakDetail}}" zIndex="{{1002}}">  @L2549 跟读详情
  <view class="tui-block__box"><scroll-view class="tui-popup-speak">         @L2550-2552
    <view class="tui-speak-item">                                            @L2553
      <image class="tui-goods-img" mode="aspectFill" src="{{speakDetailCover}}"/>  @L2555
      <view class="tui-goods-center">                                        @L2557
        <view class="tui-goods-name margin-left padding-top"><text class="tui-gray text-xxl">{{speakDetailLevel}}: {{speakDetailTitle}}</text></view>  @L2559-2563
        <view class="tui-goods-name margin-left padding-top-xl"><text class="tui-gray text-xl">录音测评结果：</text></view>  @L2567-2571
    <view class="reward-card"><view class="metrics-area">                    @L2577-2579
      三行 metric-row（@L2581/2609/2637），每行 = metric-label「完成度/准确度/流利度」（@L2585/2613/2641）
        + stars-box 内 wx:for={{3}}（wx:for 数字 3，片段 fW6/fA7/fO7 @L2593/2621/2649）：
          <text class="star-icon {{(index+1)<=speakDetailResult.completionStars|accuracyStars|fluencyStars ? 'active-star':'empty-star'}}">★</text>
        + raw-data-text：{{completedPages}}/{{totalPages}} 页（@L2605）/ 平均 {{averageScore}} 分（@L2633）/ {{wcpmValue}} WCPM（@L2661）
      <view class="divider"/>                                                @L2666
    <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                @L2670
<tui-bottom-popup bindclose="hideModal" maskZIndex="{{1001}}" show="{{modalHonor}}" zIndex="{{1002}}">  @L2675 荣誉墙
  <scroll-view class="tui-popup-scroll"><view class="honor-page">            @L2676-2677
    <view class="header">🏆 年度之星</view>                                  @L2679-2681
    <view class="subtitle">({{year}}-1).{{month}}.{{day}} - {{year}}.{{month}}.{{day}})</view>  @L2684-2686
      （⚠ 首尾括号均为 ops 显式字面量 [3,'('] 与 [3,')']（W:816 原文实测），中段 (year-1) 为表达式；渲染形态「(2023.1.1 - 2024.1.1)」）
    <view class="honor-wall">                                                @L2689
      <!-- wx:for={{honorWall}} task/index，片段 l97 @L2694 起（挂载 @L2742） -->
      <view class="honor-card" style="background:{{task.bgColor}}">          @L2694
        <view class="card-header"><view class="card-left">                   @L2695-2697
          <image class="icon" src="{{task.icon}}"/><text class="title">{{task.title}}</text>  @L2699-2703
        <view class="top3">                                                  @L2708
          <!-- wx:for={{task.top3}} item/index，片段 oL8 @L2713 -->
          <view class="rank-item">                                           @L2713
            <text class="rank">{{index===0?'🥇':(index===1?'🥈':'🥉')}}</text>  @L2715-2717
            <image class="avatar" src="{{item.babyInfo.avatarUrl}}"/>        @L2720
            <text class="name">{{item.babyInfo.nickName}}</text>             @L2722-2724
            <text class="value">{{item.value + task.unit}}</text>            @L2727-2729（数值+单位拼接）
    <tui-nomore backgroundColor="#f7f7f7" text="已经到最底了"/>              @L2745
```

骨架转写口径说明：骨架解码器对「文字+插值」混排文本（如 @L2100/@L2230/@L2428）显示为不带 `{{}}` 的表达式形态，本 spec 按插值语义转写（与 A:811 数据字段对应）；对账时以 W 原文 ops 为准。默认态卡片封面区 `wx:if card_times → card.0.cover / else 且 cardQuiz_times → cardQuiz.0.cover` 的分支归属按骨架 @L1560-1572 线性解码转写，**待对账复核**。

### 1.1 状态分支汇总
- **主区三态**（@L1000 一组 if/elif/else）：`mode_rank`→排名（tui-tabs 5 页签）；`mode_history`→榜单（tui-tabs 5 页签，行无 bindtap、右值 `*_total`）；否则默认双列卡片流。
- **公共班特判**：`group_id=='public'` 时隐藏进度条 block（@L991-993）；标题、海报二维码、榜单入口见 §3/§5。
- **第 7 格切换**：`isGroupAdd` 真→「退出班级」cuIcon-exit，假→「加入班级」cuIcon-roundadd（@L963-967）。
- **全员弹层三分页签** + 两个「已显示全部/点击加载更多」开关（isShowAllRank/isShowAllList，@L2294-2306/@L2388-2398）。
- **四个分页游标**（A:811 data 实测）：pageIndex/pageRankIndex/pageUserallIndex/pageUndoIndex 配对 isShowAllUser/isShowAllRank/isShowAllList/isShowAllUndo；`skip(20*…)` 实测 2 处（getList 与 getUserListAll）。
- **loadding**：真→tui-loadmore(index=3,type=primary)（@L1867-1870）。

### 1.2 组件注册（页面 json，本次实测）
`__wxAppCode__['pages/group/group.json']`（unpacked/app-service.js 实测原文，common.app.js 同文）：
`{"navigationBarTitleText":"","usingComponents":{"tui-icon","tui-bottom-popup","tui-calendar","tui-tabs","tui-loadmore","tui-collapse","tui-rate","tui-poster","tui-modal","tui-nomore"（均指向 /components/<名>/<名>）}}` —— 共 10 个。⚠ 依据包称「app-config 中无页面级 usingComponents 声明」与实测不符：声明在 app-service.js/common.app.js 的 __wxAppCode__，且 **tui-modal 已注册但本页骨架未使用**（预留）。
⚠ 骨架在用户弹层/测验详情使用 `<tui-list-cell>`（@L1965/2023/2082/2148/2207/2529），但 group.json **未注册** tui-list-cell（unpacked/components/tui-collapse/tui-collapse.json = `{"component":true,"usingComponents":{}}` 亦不含），app-config.json 无全局 usingComponents（实测 null）→ 原版疑似漏注册/降级渲染，**如实保留勿修，抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）**。
导航栏静态配置：C 实测 `page["pages/group/group.html"].window = {"navigationBarTitleText":""}`（仅覆盖标题）；未声明 navigationStyle:custom → 系统导航栏；全局 `global.window` 底色 #f1f1f1、黑字、标题空串（C:1）。C.pages 数组含 `pages/group/group`（**无 .html 后缀**，实测），subPackages=0（无分包），group 不在 tabBar（五项：index/school/word/daka/more，实测）。

## 2. 样式规格

来源：`wxss_out/pages__group__group.wxss`（353 行，extract_wxss.py 还原；同内容内嵌 W:2782 setCssToHead，两处一致为依据包核验口径，本次未逐字节复读）。数值直接当 px 抄。⚠ 依据包称 `body{background-color:#f7f7f7}` 在 L29，**实测在 L25**（`grep -n` 实测），以 L25 为准。文件无 `page{}` 块，页面底色来自 body（X:25）+ 全局 window.backgroundColor。

| 类名 | 关键样式（行号 X:） | 用途 |
|---|---|---|
| body | background-color:#f7f7f7（X:25） | 页面底色 |
| .tui-popup-scroll | height:70vh（X:85）；实际高度被行内 style height:{{modal_height}}rpx 覆盖 | 各弹层滚动容器 |
| .tui-popup-speak | X:351 height:50vh | 跟读详情滚动容器 |
| .tui-block__box | 白底、圆角 10px、padding 0 5px 5px（X:52） | 弹层内容盒 |
| .list-view | X:181-182（顶部 0.5px #eaeef1 分隔线 scaleY(.5)） | 默认态列表容器 |
| .tui-product-box / .tui-product-container | padding 0 3px（X:189）；flex:1、margin-right:1%、末列清零（X:191-192） | 双列布局 |
| .tui-share-btn | 透明、无边框按钮（X:264） | 八宫格「转发邀请」 |
| .tui-avatar-title | 16px（X:253） | 统计行文字 |
| .cu-list.menu-avatar>.cu-item>.cu-number | 绝对定位 left:5px（X:288） | 榜单名次位 |
| .tui-pro-titbox | #f3f3f3、16px、500、padding 5px 15px（X:262） | 榜单行容器 |
| .value-text | Times New Roman 斜体 24px 700（X:254） | 名次/右值数字 |
| .tui-cmt-box | 白底、阴影 0 3px 8px rgba(0,0,0,.15)、左右 margin 8px（X:240） | 卡片 |
| .tui-radius-all | 圆角 6px（X:241） | 卡片 |
| .tui-mtop | **双定义**：X:156 margin-top:60px 与 X:242 margin-top:13px，同文件后者生效（实测两行原文）→ 还原口径 13px | 卡片上边距 |
| .tui-cell-title | 宽 33px（X:278） | 弹层分组标题列 |
| .tui-addr-item | line-height 17px（X:281） | 分组标题行 |
| .tui-goods__item / __imgbox / -img | 高 200px（X:48）；120×180 圆角 6px（X:50）；69×100（X:110）、圆角 3%（X:111） | 任务卡片 |
| .tui-quiz-cover / .tui-quiz-name | 90×90 圆角 3%（X:111-112）；24px（X:116） | 测验详情封面/题名 |
| .love-icon | 21×21（X:109） | 完成态爱心 |
| .quiz-more-icon / .record-play-icon | 28×28（X:267）；record-play-icon 见 X:111-112 一带（骨架 @L2132 引用） | 列表行尾图标 |
| .tui-speak-item / .star-speak / .icon-star-speak | padding 10px 20px（X:108）；高 40px 居中（X:282）；26×26（X:283） | 跟读行 |
| .star-icon / .active-star / .empty-star | 26px（X:342）；#ffbe1a+text-shadow rgba(255,190,26,.4)（X:353）；#e0e6ed（X:352） | 星级 |
| .metric-row / .metric-label / .stars-box / .raw-data-text | X:337；16px #5c6b73 宽 31%（X:338 一带，依据包标 L334? 存疑）；gap:6px 宽 44%（X:341）；13px #a0aec0（X:343） | 测评指标行 |
| .reward-card / .divider | padding 20px（X:344）；#f0f3f7 高 1px（X:349） | 测评卡 |
| .tui-sign__record / .tui-record__item / __num / .tui-num__size | 圆角 12px 高 100px（X:330）；分隔线 scaleX(.5)（X:331-333）；#ff9b6a（X:335）；32px（X:336） | 记录三栏 |
| .honor-page / .honor-wall / .honor-card | #fafafa padding 10px（X:313）；flex column gap:12px（X:316）；圆角 10px 阴影（X:317） | 荣誉墙 |
| .card-header .icon / .top3 .rank-item .avatar / .rank / .name / .value | 20×20（X:321）；40×40 圆形白边（X:327）；16px（X:326）；13px（X:328）；12px #666（X:329） | 荣誉墙卡片 |
| .tui-group-name | 17px（X:53） | 任务分组名 |
| .tui-new-label-progress / .tui-new-label-text | 高 7.5px（X:252）；28×17 圆角 12% 绝对右上（X:284） | 进度条与角标 |
| .tui-goods__list | X:47 | 任务横滚列表 |

依赖的全局类（ColorUI，定义在 page-frame.html 全局 setCssToHead，本次未逐类核值）：`cu-list` `cu-item` `cu-avatar(-group)` `cu-avatar1` `cu-number` `cuIcon-*`（share/rank/medal/crown/calendar/squarecheck/qrcode/exit/roundadd）`bg-macron` `text-blue` `text-gray` `text-sm` `text-df` `text-xl` `text-xxl` `text-white` `text-xs` `text-bold` `text-cut` `text-center` `padding-sm` `padding-left/right/bottom` `margin-left(-sm)` `margin-top(-xs)` `flex` `flex-sub` `align-center` `justify-between` `content` `content1` `action` 等。页面样式以本文件为准，公共类需引 page-frame 侧依据。

## 3. 事件与逻辑

来源：`chunk_25.appservice.js`（A:810 后半段 __wxRoute/define、A:811 Page 主体单行、A:812 收尾）。模块头（A:811 行首，node 实测 180 字符 + grep 实测）：`o=wx.cloud.database({})`、`s=o.command`、`d=o.command.aggregate`、`n=getApp()`、`r=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`、`l=""`（二维码 URL 缓存变量）。r 为日期工具模块：define 收尾 unpacked/appservice.app.js:1384（本次 grep 实测），导出 formatTime("Y-M-D")/formatMonth("Y-M")/formatDate("M-D")/formatHour("H:M")（appservice.app.js:1383 实测）；⚠ 同文件 :1206 另有一同名工具导出 "Y/M/D H:M:S"+toUint8Array，属别的模块勿混淆（本次实测）。A:811 内 `formatTime` 调用实测 1 处。

### data 初始值（A:811，node 切片实测原文）
`year:2024, month:1, isToday:!0, name:"", desc:"", loadding:!1, mode_rank:!1, mode_history:!1, rankTab:0, historyTab:0, userTab:0, task_tip:"点击可查看本组学习打卡计划", plan_id:"", isGroupAdd:!1, group_shenhe:!1, pageIndex:0, pageRankIndex:0, pageUserallIndex:0, pageUndoIndex:0, group_id:"", modalTask:!1, list:[], taskList:[], avatars:[], num_total:0, num_today:0, modalUser:!1, modalAll:!1, modalCalendar:!1, modalQuizDetail:!1, userList:[], userListMonth:[], rankList:[], historyList:[], listUndo:[], progress:"", show:!1, wordList:[], word_study:0, word_num:0, word_fuxi:0, cardQuiz_progress:"0%", speak_value:0, isShowAllUser:!1, isShowAllRank:!1, isShowAllList:!1, isShowAllUndo:!1, status:[], modalHonor:!1, modalSpeakDetail:!1, speakDetailResult:{}, speakDetailCover:"", speakDetailLevel:"", speakDetailTitle:"", userTabs:[{name:"全部成员"},{name:"当月打卡"},{name:"今日已打卡"}], rankTabs:[{name:"学习次数"},{name:"课程测验"},{name:"开口次数"},{name:"单词学习"},{name:"磨耳朵"}], backgroundColors:[…20 色，计数实测], honorWall:[7 项]`。
honorWall 7 项（实测首项原文 + 全 7 枚 icon 计数）：`{id:1,title:"打卡天数",icon:"https://qianyufang.top/public/yingyu/images/honor/calendar.png",bgColor:"#FFE8C2",unit:"天",top3:[]}`，7 枚 icon 依次 honor/{calendar,book,puzzle,mic,abc,test,headphone}.png（各 1 处，grep 实测），7 项标题=打卡天数/学习次数/测验次数/开口次数/单词学习/单词测验/磨耳朵时长，unit=天/次/次/次/个/个/分钟，各含 bgColor 字段（骨架 @L2694 使用）与 top3:[]。⚠ honorWall[5]（第 6 项）标题「单词测验」与 getWordStudyTop 写 [4]/getWordTestTop 写 [5] 的对应关系见 §5 疑似 bug ①。modal_height **不在 data 初始值中**，由 onLoad 动态 setData（见生命周期）。

### 生命周期（均 A:811，依据包口径 + 关键分支本次 grep 实测）

| 钩子 | 行为概述 | 写回 |
|---|---|---|
| onLoad | ① `today_date=r.formatTime(new Date)` 写 `n.globalData.today_date`；② 参数三入口：`t.scene`（二维码 scene，decodeURIComponent）/ `t.groupID`（分享卡）/ `t.id`（含特殊值 `"public"`=公共班级）；③ scene|groupID 为空串 → `wx.reLaunch("../index/index")` + toast「未知错误，请重新加入班级」（文案 grep 实测 1 处）；④ 若 `n.globalData.groupID==i`（已在本班）只刷 avatars/numTotal/list，否则 `getList()+getGroupInfo()`；⑤ `t.id=="public"` → name=「英语分级兔公共班级」+ setTimeout 500ms `wx.setNavigationBarTitle`（文案实测 3 处命中）；⑥ `getAvatars()+getNumTotal()`；⑦ `n.globalData.groupID` 非空 → `checkGroupAdd()`，否则挂 `n.babyInfoReadyCallback`；⑧ `wx.getWindowInfo()` 算 `modal_height=750/windowWidth*windowHeight*.66`（`.66` 表达式 grep 实测命中） | today_date、group_id、name、avatars、num_total、list、modal_height |
| onReady | `t=this.selectComponent("#poster")` | — |
| onReachBottom | 非排名/榜单态且未加载完时 `pageIndex+1` + `getList()` | pageIndex、list |
| onShareAppMessage | title=`[<name>]邀请你一起英语打卡，点击即可加入学习班级`（public 班 name 前空，文案实测 2 处=好友+朋友圈）；path=`/pages/group/group?groupID=<group_id>` | — |
| onShareTimeline | 同 title；query=`groupID=<group_id>` | — |

### 事件分发表（骨架绑定见 §1；行为均 A:811）

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| button open-type=share（@L898） | — | 微信原生转发（走 onShareAppMessage） | — | — |
| 八宫格 tap（data-id 1-7，@L908-962） | clickItem | 1=showRank、2=showHistory、3=showHonorList、4=clickCalendar、5=checkPlan、6=downloadPoster、7=`isGroupAdd?clickQuit:addGroup` | 间接见下 | 各 modal/mode |
| 统计行 tap（@L972） | showUserAllModal | 开全员弹层 + 拉全员列表 | — | modalAll、userList |
| 榜单行/卡片 tap（@L1017/@L1509 等） | getUserData | 按 data-id=index 取行数据开用户弹层；排名态/列表态分别取数；调 user_data+user_study 查询 | — | modalUser、cardList、cardQuizList、speakList、user_month_days/total_days/total_times 等 |
| 跟读行 tap（@L2111） | goCardShare | `../share/share?card_id=<speakList[i].id>&user_babyid=<user_baby_id>` | — | — |
| 测验行 tap（@L2052） | showQuizDetail | 开测验详情弹层 | — | modalQuizDetail、quizDetail* |
| 星星区 catch:tap（@L2119） | showSpeakDetail | 开跟读详情弹层 | — | modalSpeakDetail、speakDetail* |
| 任务封面 tap（@L2442） | goStudy | `../card/card?id=<citem.task.id>` | — | — |
| tui-tabs bindchange×3 | changeRankTab / changeHistoryTab / changeUserTab | 切换页签并拉对应数据 | — | rankTab/historyTab/userTab |
| tui-calendar bindchange | monthChange | `date_select=t.detail.result` + getList/getNumToday + 恢复标题 | — | date_select、list、num_today |
| tui-collapse bindclick | changeCollapse | 折叠面板展开/收起 | — | item.current |
| bindclose×4 | hideModal / hideModalCalendar / hideModalQuizDetail / hideModalSpeakDetail | 关弹层 | — | 各 modal |
| bind:tap（@L2301/@L2395） | showMoreUser / showMoreList | 全员弹层翻页 | — | pageUserallIndex 或 list 追加 |
| bind:longpress（@L2260/@L2316） | deleteGroupUser | 校验 `e.data[0]._openid==n.globalData.openid`（仅创建者，否则 toast「你没有删除权限」）→ 确认弹窗「确认将成员XX移出班级？」→ 调云函数 | updateUserStudy（⚠ 传参见 §5 bug③） | userList |
| 页面转发 | onShareAppMessage / onShareTimeline | 见生命周期 | — | — |

### 内部方法补充（无直接 UI 事件，均 A:811）
- `getGroupInfo`：查 group 集合成功后 setTimeout 500ms `wx.setNavigationBarTitle({title:a.data[0].name})`（班级名）。
- `showRank`/`showHistory`：进入视图 → 标题 `${year}年${month}月${day}日排名` / `${year}年${month}月榜单`，退出恢复班级名（setNavigationBarTitle 调用全文实测 10 处 = 5 场景进出成对）。
- `addGroup`：`group_shenhe` 为真禁止入班（toast「班级当前禁止新成员加入」）→ 内嵌套 updateUserData（updateGroupID）。
- `quitGroup`（clickQuit）：成功 → `globalData.groupID=""` + `navigateBack`。
- `checkPlan`：无计划时 toast「当前班级没有学习打卡计划，请联系老师创建」；跳 planDetail 带 `&isAdd=1` 分支另有 `../planList/planList`。
- `downloadPoster`：public 班直接用 tcb 桶 `group/public.jpg`；否则 `l` 缓存为空 → 云函数 getGroupQRcode（result 空 → toast「下载失败」）→ drawPoster → writeGroupQrcode（updateGroupInfo 持久化二维码）。
- `drawPoster`（tui-poster 560×700，@L1875）：白底 rect、头像 70×70 圆、文本「{nickName}邀请你加入英语打卡班级」、三张推广图各 160×326、二维码 150×150 @ (386,500)、班级名（public 班显示「分级绘本阅读」，文案实测 1 处）、「长按识别立即加入」，完成后 `wx.previewImage`。（坐标为依据包口径，A:811 函数体待对账复核）

### 云函数调用清单（wx.cloud.callFunction，全部 A:811；name 计数为本次 node 实测）

| 云函数（出现次数） | 触发 | data 载荷 | 备注 |
|---|---|---|---|
| updateUserStudy（4） | addGroup | `{tag:"createGroup", baby_id, groupID}` | 入班 |
| | updateMyPlan | `{tag:"plan", baby_id, plan_id}` | 换计划 |
| | quitGroup（clickQuit） | `{tag:"quitGroup", baby_id}` | 退班 |
| | deleteGroupUser | `{tag:"quitGroup", baby_id:<被移除成员的 user_study 记录 _id>}` | ⚠ 原版疑似 bug③，见 §5 |
| updateUserData（1） | addGroup 内嵌套 | `{tag:"updateGroupID", baby_id, date, groupID}` | 同步 user_data.groupID |
| updateUserPlan（1） | updateMyPlan | `{tag:"add"|"update", baby_id, babyInfo, plan_id, plan_cover, list, total, title, date:"", current:0, desc, level, vip}` | add/update 按 user_plan 是否已有记录 |
| getGroupQRcode（1） | downloadPoster | `{group_id}` | result 空 → toast「下载失败」 |
| updateGroupInfo（1） | drawPoster 后 writeGroupQrcode | `{type:"qrcode", group_id, qrcode}` | 持久化二维码 |

共 5 个云函数名、8 次调用（依据包口径；`name:"…"` 计数 4/1/1/1/1 实测吻合）。

### 云数据库直连清单（客户端 API，非云函数；`collection("…")` 计数本次 node 实测：group×3、user_data×24、user_study×4、user_plan×1、plan×1）

| 集合 | 方法 | 条件/投影/变换 | 用途 |
|---|---|---|---|
| group（3） | get | where({group_id}) → name/desc/plan_id/is_shenhe/qrcode | getGroupInfo |
| | get | where({group_id}) → plan_id | updateMyPlan |
| | get | where({group_id}) → 校验 `e.data[0]._openid==globalData.openid` | deleteGroupUser 权限 |
| user_data（24） | get | where({date,groupID}).orderBy(timestamp,desc).skip(20*pageIndex).limit(20) | getList 分页 |
| | count | where({date,groupID}) | getNumToday |
| | get | where({groupID}).orderBy(timestamp,desc).field({babyInfo,baby_id}).limit(6) | getAvatars |
| | get | where({baby_id,date}) → card/card_times/cardQuiz/speak/word_times/word_num/wordList/word_study/word_fuxi/listen_time(÷60 向上取整)/listen | getUserData |
| | aggregate ×5 | getRank1..5：match({date,groupID}).project(card_times|cardQuiz_times|speak_num|word_study|listen_time 及 `listen_num=d.ceil(d.divide(["$listen_time",60]))`).sort(-1).limit(30) | 今日排名 5 页签 |
| | aggregate ×5 | getHistory1..5：match({groupID,year,month}).group({_id:"$baby_id", babyInfo:d.last(), X_total:d.sum(…)}).sort.limit(100) | 本月榜单 5 页签 |
| | aggregate | getUserListMonth：group({_id:"$baby_id",days:d.sum(1)}).sort(days:-1).limit(100) | 当月打卡页签 |
| | aggregate | getMonthCalendar：group({_id:"$date",num:d.sum(1)}) | 日历统计 |
| | aggregate ×8 | 荣誉墙 8 查（getDaysTop/getStudyTop/getTestTop/getSpeakTop/getWordStudyTop/getWordTestTop/getWordPinduTop/getListenTop）：match({groupID, timestamp: gt(Date.now()-31536e6)})【近 365 天，`31536e6` 实测 8 处】.group({_id:"$baby_id", value:d.sum(1|card_times|cardQuiz_times|speak_num|word_study|word_times|word_pindu|listen_time 折分钟)}).sort.limit(3) → setData("honorWall[0..6].top3") | 年度之星 |
| user_study（4） | count | where({groupID}).field({baby_id}) | getNumTotal（=1 且已入班 → toast「点击分享，邀请组员吧」原文为半角逗号「点击分享,邀请组员吧」，实测） |
| | get | where({groupID}).field({babyInfo}).limit(6) | getAvatars 回退（user_data 不足 6 时） |
| | aggregate | getUserDataAll：match({baby_id}).project({_id:false, total_days, month_days:d.size("$month_days"), total_times:d.size("$records")}) | 用户弹层三栏 |
| | get | where({groupID}).field({babyInfo,total_days}).orderBy(total_days,desc).skip(20*pageUserallIndex).limit(20) | getUserListAll 分页 |
| user_plan（1） | get | where({baby_id}) → 空则 tag=add 否则 update | updateMyPlan |
| plan（1） | get | where({plan_id}) → cover/list/total/level/title/desc 传给 updateUserPlan | updateMyPlan |

字段结构以 captures/collections/*.jsonl 为唯一真实样本；⚠ group 页涉及的 5 个集合（group/user_data/user_study/user_plan/plan）**当前无抓包样本**（captures/README.md 与 audit/inventory.md 可查，仅有 _counts/units/user_school/words 四份），本清单为纯代码侧形态，待未来采集对账。

### 计算规则（必须精确到边界）
- **打卡进度** `progress`：getNumToday 内实测原文 `(100*t.data.num_today/t.data.num_total).toFixed(2)+"%"` —— 百分比保留 2 位小数（依据包「num_today/num_total%」欠精确，已按源码修正）。
- **测验通过率** `cardQuiz_progress`：各测验 rate 去掉 % 后求均值、向上取整再拼 %（依据包口径，函数体待对账复核）。
- **跟读平均分** `speak_value`：由 speakList 各项 stars 汇总按 20 分制折算（表达式形态 `20*t/a`），stars 超过 8 个截取前 8（依据包口径，待对账复核）。
- **磨耳朵分钟数**：aggregate 投影 `listen_num = d.ceil(d.divide(["$listen_time",60]))`；getUserData 内 listen_time 同为 ÷60 向上取整。
- **单词显示取 max**：word_study 与 word_times 都有时显示 `max(两者)`（骨架 @L1613-1620 三元实测）。
- **日历色档** getBgColor：占比 >80 → #032dd3；>60 → #597afc；>40 → #96aafd；>0 → #cdd7fe；否则 #e7dac9（依据包口径，待对账复核）。
- **荣誉墙窗口**：近 365 天 `timestamp > Date.now()-31536e6`（实测 8 处）。
- **modal_height**：`750/windowWidth*windowHeight*.66`（rpx 滚动区高度）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| wxml 硬编码图标 5 枚 | `https://qianyufang.top/public/yingyu/images/icon/{love,more,star_icon,star_icon_grey,voice}.png`，各 1 处 | ops 区段 W:40-845 全文扫描实测（love @骨架 L1536、more @L2066、star_icon/star_icon_grey 三元 @L2123、voice @L2132） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）（未单独探测） |
| 荣誉墙图标 7 枚 | `https://qianyufang.top/public/yingyu/images/honor/{calendar,book,puzzle,mic,abc,test,headphone}.png`，data 内各 1 处 | A:811（node 全文扫描实测 7 处） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |
| 海报推广图 3 张 | tcb 桶 `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/tuiguang/tuiguang{1,2,6}.jpg`，各 1 处，海报内 160×326 | A:811（`tuiguang\d?\.jpg` 实测 3 处；桶域名 4 处） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |
| 公共班海报二维码 | tcb 桶 `group/public.jpg`（downloadPoster 直用），1 处 | A:811（`group/public.jpg` 实测 1 处） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |
| 二维码（非公共班） | 无静态路径：云函数 getGroupQRcode 动态生成 → drawPoster → writeGroupQrcode 回写 group 集合 qrcode 字段，`l` 变量缓存 | A:811 | 动态生成，无从验证 |
| 头像/封面/测验封面 | `item.babyInfo.avatarUrl`、`item.cover`、`item.card.0.cover`、`item.cardQuiz.0.cover`、`citem.task.cover`、`quizDetailCover`、`speakDetailCover` 均为云数据库字段 | 骨架 @L978/@L1023/@L1563/@L1570/@L2443/@L2483/@L2555 | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）（属数据对账+真机范畴） |

与 audit/cdn-probe.md「24/24 可达」结论兼容，但上述 icon/honor/public.jpg/tuiguang 路径未单独探测，按 AGENTS 规范 6 标「抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）」。本页无音频资源。

## 5. 弹窗 / 分支状态

- **弹层 7+1**：modalUser（用户详情）、modalAll（全员三分页签）、modalTask（计划任务横滚）、modalCalendar（tui-calendar）、modalQuizDetail（测验详情折叠面板）、modalHonor（荣誉墙）、modalSpeakDetail（跟读详情三指标）+ tui-poster 海报组件（非弹层）。除 modalCalendar 外均带 maskZIndex=1001/zIndex=1002（骨架实测，@L2473 日历弹层无）。
- **确认弹窗**（wx.showModal，A:811）：deleteGroupUser「确认将成员XX移出班级？」（XX=成员昵称，拼接形态待对账复核）。
- **toast 全集**（A:811 文案计数实测各 1 处）：「未知错误，请重新加入班级」「点击可查看本组学习打卡计划」（task_tip data 字段）「班级当前禁止新成员加入」「你没有删除权限」「下载失败」「当前班级没有学习打卡计划，请联系老师创建」「点击分享，邀请组员吧」（原文半角逗号「点击分享，邀请组员吧」）。
- **入/退班切换**：isGroupAdd 决定第 7 格图标文案（@L963-967）与 clickItem data-id=7 的行为分支（clickQuit:addGroup）。
- **公共班分支**：group_id=="public" → 隐藏进度条（@L991）、标题「英语分级兔公共班级」、海报二维码直用 group/public.jpg、海报班级名显示「分级绘本阅读」、分享标题去班级名前缀。
- **分页停止条件**：isShowAll* 四开关对应「已经显示全部/点击加载更多」tui-nomore（@L2294-2306/@L2388-2398）；onReachBottom 仅默认态生效。
- **原版疑似 bug（如实记录，还原时勿顺手修复）**：
  ① **荣誉墙索引错位**：honorWall[6] 被写 2 次（node 实测：honorWall[0..5] 各 1 次、[6] 2 次）——getWordPinduTop 与 getListenTop 都写 `honorWall[6].top3`，磨耳朵覆盖「单词拼读」位；且 getWordTestTop 写 [5] 与 honorWall 第 6 项「单词测验」错位一格、getWordStudyTop 写 [4]（honorWall[4] 标题是「单词学习」）。对账时需逐项核对 icon/value 口径与 wxml task.title。
  ② getListenTop 函数体末尾多一层 `}}`（源码即如此；多出层为 Page({...}) 收尾，不影响语法）。
  ③ deleteGroupUser 把 `userList[i]._id`（user_study 记录 _id）当 `baby_id` 传云函数 quitGroup。
  ④ 磨耳朵块 class 首位带空格 ` tui-cmt-box …`（骨架 @L2205 原样）。
  ⑤ tui-list-cell 在本页未注册却使用（§1.2，降级渲染）。
  ⑥ 默认态卡片封面 if/else 分支归属（骨架 @L1560-1572 线性解码歧义，§1 已注）。

## 6. 对账记录（对账员填写）

> 对账日期：2026-10-01。对账方法：独立从原文重建——W 侧用 node 直接解析 `gz$gwx_XC_18_2` 的 801 条 Z() ops（含 z[N] 自引用与 `a=11` 串接递归求值）+ 通读 m1（W:892-2756）控制流；A 侧直接在 A:811（27382 字符单行）上做字符串/正则计数与上下文抽取；X/C 侧独立 grep/JSON.parse。不依赖蒸馏工的解码产物。

- [x] **节点树与原文一致**（独立重建 ops 全表 801 项，计数与 spec 一致；骨架 5 大块逐节点核对通过）
  - 八宫格：ops[0..41] 与 spec ①完全吻合（类名/图标/文案/`clickItem` data-id 1-7/`isGroupAdd` 三元均在 ops L44-85 实测）。
  - 统计行：ops[42..51]（showUserAllModal/`padding-sm`/`cu-avatar-group`/avatars 循环/「共…人，今日打卡…人」）吻合；oRN 挂载 `_2z(z,46,…)` @W:983 → ops[46]=L90 `avatars` ✓。
  - 主区三态：`_oz(z,56)`（mode_rank==true，W:1000）/`_oz(z,161)`（mode_history==true，W:1245）与 spec if/elif/else 一致；两个 tui-tabs 均 `_mz` 带 currentTab/itemWidth/tabs（W:1003、W:1247）✓。
  - **五个排名页签右值实测**：card_times「次」(op80)、cardQuiz_times「次」(op85→op86)、speak_num「次」(op105)、word_study「个」(op140)、**listen_num「分钟」(op160, L204)** —— spec §1「第 5 页签实为 item.listen_num」结论正确（`_oz(z,160)` @W:1227）。
  - 五个榜单页签右值实测：card_total/cardQuiz_total/speak_total/word_total/listen_total（op170/188/206/224/242），行结构无 bindtap ✓。
  - 默认态双列：`_2z(z,261,t3T)`（ops[261]=L305 `list`）、`_2z(z,326,xQV)`，wx:if `(index+1)%2!=0`（op263）/`==0`（op328）✓。
  - **spec 两处「待对账复核」均已裁决**：
    1. **卡片封面分支归属（spec bug⑥）→ 判定 spec 转写正确**：m1 W:1562 `if(_oz(z,290))` → ops[290]=L334=`z[65]` → op65=L109=`item.card_times` → 封面 `card.0.cover`（L336）；W:1569 `else if(_oz(z,293))` → ops[293]=L337=`z[85]` → op85=L129=`item.cardQuiz_times` → 封面 `cardQuiz.0.cover`（L339）。即「if card_times → card.0.cover，else 且 cardQuiz_times → cardQuiz.0.cover」与 spec §1 转写一致，可去掉待复核标记。
    2. **@L1905 scrollY 字面量 → 确认为字面 true**：W:1905 `_mz(z,'scroll-view',['scrollY',-1,'class',414,'style',1])`，`-1` 即字面量 true（同型 @L2251/@L2412/@L2480/@L2552/@L2676 六处），spec 处理正确。
  - 弹层群：modalUser/modalAll/modalTask/modalQuizDetail/modalHonor/modalSpeakDetail 均 `maskZIndex=1001/zIndex=1002`（ops[399]/[401]）；**modalCalendar 弹层 `_mz(z,'tui-bottom-popup',['bindclose',667,'show',1])`（W:2473）确无 maskZIndex/zIndex**，tui-calendar 带 `isChange:-1`（字面 true）/`arrowType=[1,2]`/`bindchange=monthChange`/`status` ✓。
  - 荣誉墙：副标题 ops（L816）为显式字面量 `[3,'(']…[3,' - ']…[3,')']` 夹 `(year-1).month.day` 表达式，spec ⚠ 注记属实；奖牌三元 🥇🥈🥉（op792）、`item.value + task.unit`（op798）✓。
  - 全部 16 处 `_2z` 循环数据源实测：avatars/rankList/historyList/list×3/cardList/cardQuizList/speakList/stars/item.stars/userList/userListMonth/taskList/嵌套 item/quizDetailList/item.list/task.top3/honorWall（数字 3 的 wx:for @L778 `[1,3]`）——与 spec §1 标注的片段名与数据源逐一对上。
- [x] **类名抽查 ≥10 处全中**（双向：W ops → X 页面 wxss → page-frame.html 全局）
  - 页面 wxss 命中（X 行号实测）：`.tui-popup-scroll`(X:85)、`.tui-popup-speak`(X:351)、`.tui-block__box`(X:52)、`.list-view`(X:181-182)、`.tui-product-box/container`(X:189/191-192)、`.tui-share-btn`(X:264)、`.tui-avatar-title`(X:253)、`.cu-number`(X:288)、`.tui-pro-titbox`(X:262)、`.value-text`(X:254)、`.tui-cmt-box`(X:240)、`.tui-radius-all`(X:241)、`.tui-mtop`(X:156=60px 与 X:242=13px 双定义)、`.love-icon`(X:109)、`.tui-quiz-cover`(X:112)、`.tui-speak-item`(X:108)、`.star-speak`(X:282)、`.icon-star-speak`(X:283)、`.star-icon/active-star/empty-star`(X:342/353/352)、`.metric-row/label/stars-box/raw-data-text`(X:337/338/341/343)、`.reward-card/divider`(X:344/349)、`.tui-sign__record`(X:330)、`.honor-page/wall/card`(X:313/316/317)、`.tui-group-name`(X:53)、`.tui-new-label-progress/text`(X:252/284)、`.tui-goods__list/item/imgbox/img`(X:47-51)、`.tui-cell-title`(X:278)、`.tui-addr-item`(X:281)、`.tui-flex-center`(X:277)、`.record-play-icon`(X:266)、`.quiz-more-icon`(X:267)、`.tui-rate-container/content-quiz/title-quiz`(X:304/305/306)——**36 处全中，数值与 spec §2 表一致**（含 X:25 body、tui-mtop 双定义后者生效→13px 口径）。
  - 全局类命中（page-frame.html 计数>0）：cu-list/cu-item/cu-avatar-group/cu-avatar1/cu-number/cuIcon-{share,rank,medal,crown,calendar,squarecheck,qrcode,exit,roundadd}/bg-macron/text-{blue,gray,cut,macron}/flex-sub/justify-between 均存在 ✓。
  - 反向抽查：X 中 `.tui-mtop{margin-top:60px}`（X:156）与 `.tui-mtop{margin-top:13px}`（X:242）双定义在 W:2782 内嵌 setCssToHead 同样两处（`[0,120]`→60px、`[0,26]`→13px），X 与 W 内嵌一致 ✓。
- [x] **文案逐字一致**
  - W 侧（ops 实测原文）：转发邀请/今日排名/本月榜单/年度之星/日历统计/学习计划/班级二维码/退出班级/加入班级/「共…人，今日打卡…人」/学习·测验·跟读·单词·磨耳朵/共完成 N 次/「课, 通过率为」（半角逗号+空格，A 侧 `countQuizProgress` 拼的是 W:517 常量 `课, 通过率为` 的 W 侧文本）/共熏听…课，总计时长…分钟/已经到最底了/暂时没有更多了/没有更多了/已经显示全部/点击加载更多/🏆 年度之星/录音测评结果：/完成度/准确度/流利度/★/🥇🥈🥉/「{{index+1}}.」/天/次/个/分钟 —— 与 spec 逐字一致。
  - A 侧 toast/modal（A:811 实测）：「未知错误，请重新加入班级」×1、「点击可查看本组学习打卡计划」×1、「班级当前禁止新成员加入」×1、「你没有删除权限」×1、「下载失败」×1、「当前班级没有学习打卡计划，请联系老师创建」×1、「**点击分享,邀请组员吧**」为半角逗号 ×1（spec 特别标注正确）；showModal「移除成员」/「确认将成员+昵称+移出班级？」（拼接形态实测=`"确认将成员"+o+"移出班级？"`）、「退出班级」/「确定退出班级打卡吗？…」。spec §5「toast 全集各 1 处」计数全部复核吻合。
  - 分享文案：「[+(public?"":name)+]邀请你一起英语打卡，点击即可加入学习班级」好友+朋友圈各 1（共 2）✓；标题动态置「英语分级兔公共班级」×3、「{year}年{month}月{day}日排名」「{year}年{month}月榜单」、setNavigationBarTitle 全文 10 处 ✓。
  - 资源 URL：W ops 区 5 枚 icon（love/more/star_icon/star_icon_grey/voice）各 1 处实测；A 侧 honor/ 7 枚、tuiguang{1,2,6}.jpg 3 处、tcb 桶域名 4 处、group/public.jpg 1 处、qianyufang.top 7 处——与 spec §4 计数一致。
- [x] **事件与云函数清单齐全**
  - 事件：clickItem 七路分发（1=showRank…7=isGroupAdd?clickQuit:addGroup，A:811 实测逐分支吻合）、showUserAllModal、getUserData、goCardShare（`../share/share?card_id=…&user_babyid=…`）、showQuizDetail、showSpeakDetail、goStudy（`../card/card?id=`）、changeRankTab/changeHistoryTab/changeUserTab、monthChange（switch 分支 + date_select/恢复标题/getList/getNumToday）、changeCollapse、hideModal×4、showMoreUser/showMoreList、deleteGroupUser（longpress，权限校验 `_openid==globalData.openid`）、onShareAppMessage/onShareTimeline/onReady(selectComponent("#poster"))/onReachBottom —— spec §3 分发表全部命中，无遗漏无多写。
  - 云函数（A:811 正则计数）：callFunction 共 **8 处**；`name:` 命中 updateUserStudy×4（createGroup/plan/quitGroup/quitGroup）、updateUserData×1（updateGroupID）、updateUserPlan×1、getGroupQRcode×1、updateGroupInfo×1 —— **与 spec「5 函数 9 调用」表述核对**：9 为载荷口径（updateUserStudy 4+updateUserData 1+updateUserPlan 1+getGroupQRcode 1+updateGroupInfo 1=8 次调用；spec 表合计亦为 8 行，仅 §3 汇总行把 getGroupQRcode/updateGroupInfo 计成 2 次致「9」，实测 callFunction 8 处，见 diff ①，属计数笔误不挖坑）。
  - 集合直连：`.collection("…")` 计数实测 group×3、user_data×24、user_study×4、user_plan×1、plan×1 —— **与 spec §3 清单完全一致**。aggregate() 共 21 处 = getRank×5 + getHistory×5 + getUserListMonth + getMonthCalendar + 荣誉墙 8 + getUserDataAll，与 spec 分项吻合。
  - 荣誉墙索引错位（spec bug①）实测确认：`honorWall[N]` 写入 8 次 = [0]..[5] 各 1 + **[6]×2**；getWordStudyTop→[4]、getWordTestTop→[5]、getWordPinduTop→[6]（sum $word_pindu）、getListenTop→[6]（listen_time÷60），showHonorList 实际只调 7 个（**不含 getWordPinduTop**，故运行时 [6] 被 getListenTop 覆盖的是 getWordPinduTop 预写的位置——spec bug① 描述「getWordPinduTop 与 getListenTop 都写 [6]」属实，且 getWordPinduTop 无人调用这一层 spec 未展开，如实保留即可）。`31536e6` 8 处 ✓。
  - 计算规则复核：progress=`(100*num_today/num_total).toFixed(2)+"%"`（A:811 原文实测）、cardQuiz_progress=rate 去 % 求和 `Math.ceil(t/length)+"%"`、speak_value=`Math.ceil(20*t/a)` 且 stars>8 截前 8（实测原文）、getBgColor 阈值 >80/>60/>40/>0 四档（实测原文）、modal_height=`750/d*s*.66`、listen_time ÷60 向上取整（getUserData 内 `Math.ceil(…/60)` + aggregate `d.ceil(d.divide(["$listen_time",60]))`）——spec §3 全部与源码一致。
  - data 初值：data 段（1983 字符）逐字段比对，spec §3 data 清单与实测一字不差（含 20 色 backgroundColors、7 项 honorWall、userTabs/rankTabs 文案）；modal_height 确不在 data 初值，由 onLoad `getWindowInfo` 动态写入 ✓。
- [x] **app-config 导航栏配置**（C 独立 JSON.parse 实测）：`page["pages/group/group.html"].window={"navigationBarTitleText":""}`，未声明 navigationStyle → 系统栏；global.window 底色 #f1f1f1/黑字/标题空串；pages 数组含 `pages/group/group`（无 .html 后缀）；tabBar 五项 index/school/word/daka/more，group 不在其中；无 subPackages；app-config 无全局 usingComponents（spec §1.2 判断正确）。group.json 的 10 个 usingComponents（含未使用的 tui-modal）在 unpacked/app-service.js `__wxAppCode__` 实测原文吻合。

### diff 摘要（对账员独立复核结论）

**verdict：PASS**（无实质 diff；下列 2 条为 spec 文字层面的微瑕，不构成还原口径错误，已按原文核实 spec 侧结论成立）：

| # | 位置 | 原文证据 | spec 位置 | 说明 |
|---|---|---|---|---|
| ① | A:811（callFunction 实测 8 处） | `wx.cloud.callFunction({name:"updateUserStudy"…})`×4 + updateUserData/updateUserPlan/getGroupQRcode/updateGroupInfo 各 1 | §3 云函数清单汇总行「共 5 个云函数名、8 次调用」 | 次数按表逐行合计应为 8（4+1+1+1+1）；spec 误写「9」。**表本身正确，仅汇总数字笔误**，前端仓引用请以 8 次调用为准。 |
| ② | W:816 荣誉墙副标题 ops | `[a,[3,'('],…,[3,')']]` | §1 @L2684-2686 注记 | spec 转写与 ops 原文一致，无 diff（此处仅复核确认，非问题）。

另记录两点对账中确认的事实（供后续页参考，不要求修改 spec）：
- 荣誉墙 8 个查询函数中 `getWordPinduTop` 在 showHonorList 中**未被调用**（实测调用清单 7 个），其预写的 honorWall[6] 会被 getListenTop 覆盖——spec §5 bug① 已覆盖结论，无碍。
- 页面另存在 toast「加入班级成功」「退出成功」「你未加入该班级」「成员移除成功」「查询出错了」「无班级信息」及 loading 文案「下载中/处理中/获取中/加载中」，spec §5 toast 全集未列（均为过程反馈类，非分支开关文案）；如需可后续补入 §5，不影响还原。

**对账员注意事项**：
1. 本页 5 个集合无 captures 样本，数据侧只能对代码查询形态；未来采集后按 §3 清单逐条对。
2. A:811 为单行压缩（27382 字符），方法体切分稿 group_methods_all.txt 仅助读，判定一律回 A:811 原文。
3. 蒸馏已修正依据包三处：A:810 行首实为 tui-tabs 收尾（__wxRoute 在该行后半段）；wxss `body{}` 在 X:25 而非 L29；榜单态 tui-tabs（W:1247）实有 currentTab/itemWidth。另 progress 公式按源码精化为 `.toFixed(2)+"%"`、排名态第 5 页签右值为 `item.listen_num`（依据包写 listen_time）。—— 以上四点对账员均已独立复核确认。
4. 原「待复核」事项对账裁决：§1 默认态封面分支归属（**转写正确**，bug⑥ 可销）、@L1905 scrollY 字面量（**确为字面 true**）、@L1533-1546 action 区（if plan→love-icon，else→time 文本，实测一致）、cardQuiz_progress/speak_value/getBgColor（**均与源码一致**）、海报坐标（drawPoster 实测：头像 70×70@(30,30)、二维码 150×150@(386,500)、班级名@560、文案@610，spec 坐标口径吻合）、honorWall 索引错位（**确认**）、@L2686 副标题括号（**确为 ops 显式字面量**）。
