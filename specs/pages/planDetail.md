---
页名: planDetail
显示名: 打卡计划详情
状态: 对账通过（待验收）
chunk: chunk_36.webview.js / chunk_36.appservice.js
导航栏: 系统栏（标题「打卡计划详情」）
---

# 页面还原规格：打卡计划详情（pages/planDetail/planDetail）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_36.webview.js（`wc -l`=1222 行、`grep -c ""`=1223，末尾 1 空行，本次双口径实测），A=unpacked/chunk_36.appservice.js（399 行；`sed -n '395,399p'` 实测 :397 define 行、:398 Page 主体单行 15673 字节、:399 选项行，本次 `awk length` 实测），X=unpacked/wxss_out/pages__planDetail__planDetail.wxss（385 行，本次抽读关键行），C=unpacked/app-config.json（node 解析），合并副本=unpacked/app-service.js（:51 页面 json、:6382-6384 Page 副本，本次实测）。
> 定位命令与输出：`grep -l "'./pages/planDetail/planDetail.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_36.webview.js；复核 W:414 `var x=['./pages/planDetail/planDetail.wxml']`、W:1220 `__wxAppCode__['pages/planDetail/planDetail.wxml'] = $gwx_XC_30(...)`、W:1222 页面 wxss setCssToHead（`(./pages/planDetail/planDetail.wxss:1:29950)`）。
>
> **⚠ _mz 索引坑（已按 SKILL 规则换算，并与 ops 表逐条对上）**：`_mz(z,'view',['class',0,'style',1],[])`（W:417）中，首个属性取其印出的数字为 ops 下标，后续属性为「首下标 + 连续偏移」。如 W:427 `['bindtap',6,'color',1,'name',2,'size',3]` → bindtap=z[6]、color=z[7]、name=z[8]、size=z[9]，与 z 定义行逐一吻合（z[6]=W:25 'editTitle'、z[7]=W:26 '#5677fc'、z[8]=W:27 'edit'、z[9]=W:28 '32'）。全文件 67 处 `_mz`（本次 `grep -o "_mz(" | wc -l` 实测，67 行各 1 处，行号 417…1188）均按此换算。
>
> **⚠ z[N] 行号换算规则（本次实测建立）**：ops 表 z[0..390] 共 391 条由 gz$gwx_XC_30_1 内 391 个 `Z(...)` 调用按行序 push（W:18 `function Z(ops){z.push(ops)}`），每行恰 1 个调用 → **z[N] 定义行 = W:(N+19)**（z[0]=W:19 … z[390]=W:409），本页无跨行/多 Z 行例外（本次 node 脚本逐行重数 391 条验证，dump 脚本 `node tools/extract_gwx_ops.js unpacked/chunk_36.webview.js XC_30` 输出同为 391 条）。注意部分 z 是对先前 z 的**引用复用**（如 z[37]=Z(z[5]) W:56、z[88]=Z(z[40]) W:107、z[181]=Z(z[113]) W:200、z[390]=Z(z[183]) W:409），内容等价、下标独立，勿据内容反推下标。
>
> **⚠ 双份 $gwx_XC_30**：A:151-396 还有一份逻辑层渲染副本（A:151 `var x=['./pages/planDetail/planDetail.wxml']` 起，A:396 收尾；`grep -c "gwx_XC_30" chunk_36.appservice.js` = 11）。**骨架引用一律以 W 为准，勿混用两份索引**（同 planList 页首警告）。

## 1. 页面骨架（节点树）

来源：`chunk_36.webview.js` 的 `$gwx_XC_30`（W:1 定义；ops 表 z[0..390] 在 W:19-409；渲染函数 m0 在 W:415-1197；根 `root={"tag":"wx-page"}` W:1201）。m0 向 r 挂 **9 个顶层节点**（W:490/652/690/744/781/799/1050/1122/1195）：3 个常驻块 + 6 个弹窗。

```
① 计划卡片头（挂载 W:490）
<view class="tui-extend-item"                                                      _mz W:417：class=z[0]=W:19、style=z[1]=W:20
      style="background-image:url({{plan_cover}});background-size:cover;">
  <view class="title-area">                                                        z[2]=W:21；W:418-419，挂 W:432-433
    <view class="tui-title">{{title}}</view>                                       z[3]=W:22、z[4]=W:23；W:420-423
    <!-- wx:if={{isPlanOwner}} z[5]=W:24，判断 W:426 -->
    <tui-icon bindtap="editTitle" color="#5677fc" name="edit" size="32"/>          _mz W:427：z[6]=W:25、z[7]=W:26、z[8]=W:27、z[9]=W:28
  </view>
  <view class="tui-desc">“{{desc}}”</view>                                         z[10]=W:29、z[11]=W:30（desc 两端为中文弯引号 “ ” 字面量）；W:434-438
  <!-- wx:if={{total_num>0}} z[12]=W:31（原文 `total_num>0`），判断 W:441 -->
  <view bind:tap="clickAllUserList" class="avatar-list">                           _mz W:442：bind:tap=z[13]=W:32、class=z[14]=W:33
    <view class="cu-avatar-group padding-sm">                                      z[15]=W:34；W:443-444
      <!-- wx:for={{avatars}} z[16]=W:35，_2z 挂载 W:453，项名 item/index -->
      <view class="cu-avatar round"                                                _mz W:448：class=z[18]=W:37、style=z[19]=W:38
            style="background-image:url({{item.babyInfo.avatarUrl}});"/>           （z[19] 复用 z[1][1] 前缀 + z[19][3] ');' 后缀）
    </view>
    <view class="tui-avatar-title text-gray">当前共{{total_num}}人在打卡</view>      z[20]=W:39、z[21]=W:40；W:455-458
  </view>
  <!-- 进度文案两分支 z[22]=W:41 `current<total`，判断 W:464 -->
  wx:if 真（W:465-469）：<view class="tui-desc">当前计划进展到第{{current+1}}天，总共{{total}}天</view>
                                                                                        z[23]=W:42（复用 z[10]）、z[24]=W:43
  else（W:471-476）：  <view class="tui-desc">当前计划已到期，总共{{total}}天</view>      z[25]=W:44（复用 z[10]）、z[26]=W:45
  <!-- wx:if={{isAdd && day}} z[27]=W:46，判断 W:480 -->
  <view class="tui-desc">我已打卡{{day}}天，其中补打卡{{day_late}}课</view>            z[28]=W:47、z[29]=W:48；W:481-485

② 每日计划列表区（挂载 W:652）
<view class="tui-block__box">                                                      z[30]=W:49；W:491-492
  <scroll-view scrollY="true">                                                     W:493-494
    <!-- wx:for={{list}} z[31]=W:50，_2z 挂载 W:645，项名 item/index；项模板 W:497-642 -->
    <view class="margin-top-sm">                                                   z[33]=W:52；W:498-499
      <view class="tui-group-name"                                                 _mz W:500：class=z[34]=W:53
            style="background:{{index==current&&isAdd?'#fadbd9':''}};">             style=z[35]=W:54（原文三元，假分支为空串）
        <view class="tui-addr-item">                                               z[36]=W:55；W:501-502
          <!-- wx:if={{isPlanOwner}} z[37]=W:56（复用 z[5]），判断 W:505 -->
          <tui-icon bindclick="showEditModal" color="#5677fc" data-id="{{index}}"
                    name="edit" size="32"/>                                        _mz W:506：bindclick=z[38]=W:57、color=z[39]=W:58、data-id=z[40]=W:59、name=z[41]=W:60、size=z[42]=W:61
        </view>
        <text class="text-bold">{{index+1}}/{{total}}</text>                       z[43]=W:62、z[44]=W:63；W:509-513
      </view>
      <!-- wx:if={{isGroupPlan==false}} z[45]=W:64，判断 W:519（进度条仅个人计划显示） -->
      <view class="cu-progress round sm" style="width:60%;">                        _mz W:520：class=z[46]=W:65、style=z[47]=W:66（静态字面量）
        <view class="bg-macron" style="width:{{utils.calcFinishRate(item)}};">      _mz W:521：class=z[48]=W:67、style=z[49]=W:68（wxs 调用）
          {{utils.calcFinishRate(item)}}                                            z[50]=W:69（bar 内百分比文字，W:522-523）
        </view>
      </view>
      <!-- 完成态两分支 z[51]=W:70 `calcFinishRate(item)==='100%'`，判断 W:529 -->
      wx:if 真（W:530）：   <image class="daka_icon" src="…/images/icon/love.png"/>   _mz W:530：class=z[52]=W:71、src=z[53]=W:72（URL 全称见 §4）
      else（W:534-538）：   <text style="font-size:26rpx;">共{{item.length}}个任务</text>
                                                                                        z[54]=W:73、z[55]=W:74（item.length=当天任务数）
      <!-- wx:if={{daka_list && daka_list[index].length!=0}} z[56]=W:75，判断 W:545 -->
      <scroll-view class="daka-avatar-scroll" enhanced="true" scrollX="true"
                   showScrollbar="{{false}}">                                        _mz W:546：class=z[57]=W:76、enhanced=z[58]=W:77、scrollX=z[59]=W:78（复用 z[58]）、showScrollbar=z[60]=W:79 false
        <view class="daka-avatar-list">                                              z[61]=W:80；W:547-548
          <!-- wx:for={{daka_list[index]}} z[64]=W:83，_2z 挂载 W:569，项名 citem/cindex -->
          <view bind:tap="clickUserDaka" class="avatar-item"                        _mz W:552：bind:tap=z[66]=W:85、class=z[67]=W:86、
                data-cid="{{cindex}}" data-id="{{index}}">                           data-cid=z[68]=W:87、data-id=z[69]=W:88
            <view class="progress-ring" style="--progress:{{citem.progress}};">      _mz W:553：class=z[70]=W:89、style=z[71]=W:90（CSS 变量喂进度环）
              <view class="progress-fill"                                            z[72]=W:91；W:554
                    style="background-color:{{citem.type?'#8799a3':'#ff9b6a'}};"/>    _mz W:554：class=z[72]、style=z[73]=W:92（补打卡 type 真值→灰蓝，否则橙）
              <view class="progress-bg"/>                                            z[74]=W:93；W:556-557
              <view class="avatar-inner">                                            z[75]=W:94；W:559-560
                <image class="avatar-img" mode="aspectFill" src="{{citem.avatarUrl}}"/>
                                                                                        _mz W:561：class=z[76]=W:95、mode=z[77]=W:96、src=z[78]=W:97
          </view>
        </view>
      </view>
      <view class="tui-cmt-box tui-mtop tui-radius-all">                            z[79]=W:98；W:573-574
        <scroll-view scrollX="true">                                               W:575-576
          <view class="tui-goods__list">                                           z[80]=W:99；W:577-578
            <!-- wx:for={{item}} z[83]=W:102，_2z 挂载 W:636，项名 citem/cindex（外层 index 不被遮蔽） -->
            <view class="tui-goods__item">                                         z[85]=W:104；W:582-583
              <view bind:tap="goStudy" class="tui-goods__imgbox"                   _mz W:584：bind:tap=z[86]=W:105、class=z[87]=W:106、
                    data-day="{{index}}" data-id="{{cindex}}">                      data-day=z[88]=W:107（复用 z[40] 外层天序）、data-id=z[89]=W:108（复用 z[68] 当天任务序）
                <image class="tui-goods__img" mode="aspectFill" src="{{citem.cover}}"
                       style="opacity:{{citem.finish?0.7:1}};"/>                    _mz W:585：class=z[90]=W:109、mode=z[91]=W:110、src=z[92]=W:111、style=z[93]=W:112（完成降透明）
                <!-- wx:if={{citem.finish}} z[94]=W:113，判断 W:588 -->
                <view class="tui-new-label-finish">                                  z[95]=W:114；W:589-590
                  <tui-icon color="#ff9b6a" name="square-fill" size="38"/>           _mz W:591：color=z[96]=W:115、name=z[97]=W:116、size=z[98]=W:117
                </view>
                <!-- 星级区 wx:if={{citem.speak||citem.quiz}} z[99]=W:118，判断 W:597 -->
                <view class="tui-new-label-star">                                    z[100]=W:119；W:598-599
                  <!-- wx:for={{utils.calcStarNumber(citem.quiz,citem.speak)}} z[101]=W:120，_2z 挂 W:608，项名 item/index -->
                  <image class="icon-star-speak" src="…/images/icon/star_icon.png"/>     _mz W:603：class=z[103]=W:122、src=z[104]=W:123（亮星 ×星数）
                  <!-- wx:for={{3-utils.calcStarNumber(citem.quiz,citem.speak)}} z[105]=W:124，_2z 挂 W:617 -->
                  <image class="icon-star-speak" src="…/images/icon/star_icon_grey.png"/> _mz W:612：class=z[107]=W:126（复用 z[103]）、src=z[108]=W:127（灰星 ×余数）
                </view>
              </view>
              <view class="tui-pri__box"                                             _mz W:625：class=z[109]=W:128
                    style="background-color:{{citem.finish?'#ff9b6a':''}};">          style=z[110]=W:129
                <view class="tui-sale-pri">{{citem.index+1}}.{{citem.title}}</view>   z[111]=W:130、z[112]=W:131；W:626-629
    <!-- ⚠ tui-nomore「没有更多了」在 scroll-view 内、wx:for 外：恒挂非空也有（W:646-647） -->
    <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                        _mz W:646：backgroundColor=z[113]=W:132、text=z[114]=W:133
    <view class="tui-safearea-bottom"/>                                            z[115]=W:134；W:648-650

③ 底部按钮（挂载 W:690）
<view class="bottom-btn">                                                          z[116]=W:135；W:653-654
  <button open-type="share" style="width:45%;" type="primary">                     _mz W:655：openType=z[117]=W:136、style=z[118]=W:137（静态字面量）、type=z[119]=W:138
    <view class="cuIcon-share text-xl text-white"/>                                z[120]=W:139；W:656-658
    <text class="text-white">转发打卡计划</text>                                    z[121]=W:140、z[122]=W:141；W:659-663
  </button>
  <button bindtap="clickPlanBtn"                                                   _mz W:665：bindtap=z[123]=W:142
          style="width:45%;background-color:#5677fc;">                             style=z[124]=W:143（静态字面量）
    <!-- 两分支 z[125]=W:144 `isAdd==false`，判断 W:668 -->
    wx:if 真（未加入，W:669-676）：
      <view class="cuIcon-roundadd text-xl text-white"/>                           z[126]=W:145
      <text class="text-white">{{isGroupPlan?'添加班级计划':'加入个人计划'}}</text>   z[127]=W:146、z[128]=W:147
    else（已加入，W:678-686）：
      <view class="cuIcon-exit text-xl text-white"/>                               z[129]=W:148
      <text class="text-white">{{isGroupPlan?'删除班级计划':'退出个人计划'}}</text>   z[130]=W:149、z[131]=W:150

④ modalEdit 编辑当天任务弹窗（tui-bottom-popup，挂载 W:744）
<tui-bottom-popup bindclose="hideModal1" maskZIndex="1001" show="{{modalEdit}}" zIndex="1002"/>
                                                                                        _mz W:691：bindclose=z[132]=W:151、maskZIndex=z[133]=W:152、show=z[134]=W:153、zIndex=z[135]=W:154
  <view class="tui-block__box">                                                    z[136]=W:155（复用 z[30]）；W:692-693
    <scroll-view scrollY class="tui-popup-scroll" style="height:{{modal_height}}rpx;">
                                                                                        _mz W:694：scrollY=-1(true)、class=z[137]=W:156、style=z[138]=W:157
      <view class="tui-group-name">                                                z[139]=W:158（复用 z[34]）；W:695-696
        <view class="tui-addr-item">                                               z[140]=W:159；W:697-698
          <text class="text-bold margin-right">第{{edit_item}}</text>              z[141]=W:160、z[142]=W:161（edit_item=N/M 天序文案）；W:699-703
        </view>
        <text class="text-sm padding-bottom-sm">长按可删除，点击底部按钮可添加</text>
                                                                                        z[143]=W:162、z[144]=W:163（与长按事件互证）；W:705-709
      <view class="cu-list grid col-3">                                            z[145]=W:164；W:711-712
        <!-- wx:for={{taskList}} z[146]=W:165，_2z 挂载 W:731，项名 item/index -->
        <view bind:longpress="deleteTask" class="cu-card" data-id="{{index}}">     _mz W:716：bind:longpress=z[148]=W:167、class=z[149]=W:168、data-id=z[150]=W:169
          <view class="cu-item">                                                   z[151]=W:170；W:717-718
            <image src="{{item.cover}}" style="width:100%;height:320rpx;"/>        _mz W:719：src=z[152]=W:171、style=z[153]=W:172
            <view class="text-cut text-s margin-top-xs">{{item.index+1}}: {{item.title}}</view>
                                                                                        z[154]=W:173、z[155]=W:174；W:721-724
      <button bindtap="selectCard" class="margin-top"                              _mz W:733：bindtap=z[156]=W:175、class=z[157]=W:176
              style="width:40%;background-color:#5677fc;">                          style=z[158]=W:177
        <view class="cuIcon-add text-xl text-white"/>                              z[159]=W:178；W:734-735
        <text>添加任务</text>                                                       z[160]=W:179；W:736-737
      <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                     _mz W:740：z[161]=W:180（复用 z[113]）、z[162]=W:181（复用 z[114]）

⑤ modalTask 选课弹窗（tui-bottom-popup，挂载 W:781）
<tui-bottom-popup bindclose="hideModal2" maskZIndex="1001" show="{{modalTask}}" zIndex="1002"/>
                                                                                        _mz W:745：bindclose=z[163]=W:182、show=z[165]=W:184（zIndex/maskZIndex 同④复用 z[133]/z[135]）
  <scroll-view scrollY class="tui-popup-scroll" style="height:{{modal_height}}rpx;">
                                                                                        _mz W:746：class=z[167]=W:186（复用 z[137]）、style=z[168]=W:187（复用 z[138]）
    <view class="tui-product-box">                                                 z[169]=W:188；W:747-748
      <view class="tui-new-box">                                                   z[170]=W:189；W:749-750
        <!-- wx:for={{lists_level}} z[171]=W:190，_2z 挂载 W:764，项名 item/index -->
        <view bindtap="clickLesson" class="tui-new-item tui-new-mtop" data-id="{{index}}"/>
                                                                                        _mz W:754：bindtap=z[173]=W:192、class=z[174]=W:193、data-id=z[175]=W:194
          <view class="tui-new-title text-cut">{{index+1}}.{{item.title}}</view>     z[176]=W:195、z[177]=W:196（复用 z[44][1]/z[112][2]/z[155][3]）；W:755-758
      <!-- 两分支 z[178]=W:197 isShowAllList，判断 W:769 -->
      wx:if 真：  <tui-nomore backgroundColor="#f7f7f7" text="已经显示全部"/>          _mz W:770：z[179]=W:198、z[180]=W:199
      else：      <tui-nomore backgroundColor="#f7f7f7" bind:tap="showMoreList" text="点击加载更多"/>
                                                                                        _mz W:774：z[181]=W:200、bind:tap=z[182]=W:201、text=z[183]=W:202

⑥ modalModify 修改计划信息弹窗（tui-modal，挂载 W:799）
<tui-modal fadeIn bindcancel="hideModal3" custom="true" show="{{modalModify}}"/>    _mz W:782：fadeIn=-1(true)、bindcancel=z[184]=W:203、custom=z[185]=W:204 true、show=z[186]=W:205
  <view class="tui-modal-custom">                                                  z[187]=W:206；W:783-784
    <view class="tui-page__title">修改:</view>                                      z[188]=W:207、z[189]=W:208；W:785-788
    <input bindinput="inputTitle" class="{{!modalModify?'tui-hidden-input':''}}"
           placeholder="{{title}}"/>                                               _mz W:790：bindinput=z[190]=W:209、class=z[191]=W:210、placeholder=z[192]=W:211
    <input bindinput="inputDesc" class="{{!modalModify?'tui-hidden-input':''}}"
           placeholder="{{desc}}"/>                                                _mz W:792：bindinput=z[193]=W:212、class=z[194]=W:213（复用 z[191]）、placeholder=z[195]=W:214
    <button bindtap="submitModify" class="bg-blue" height="72rpx" shape="circle" size="28">确定</button>
                                                                                        _mz W:794：bindtap=z[196]=W:215、class=z[197]=W:216、height=z[198]=W:217、shape=z[199]=W:218、size=z[200]=W:219、文字 z[201]=W:220
    <!-- ⚠ 两个 input 未见 value 绑定、placeholder 预填当前值，语义待复核（见页尾遗留 #2） -->

⑦ modalUser 用户打卡详情弹窗（tui-bottom-popup，挂载 W:1050）
<tui-bottom-popup bindclose="hideModal" maskZIndex="1001" show="{{modalUser}}" zIndex="1002"/>
                                                                                        _mz W:800：bindclose=z[202]=W:221、show=z[204]=W:223（hideModal 与 ⑨ 共用，A 侧一次关两个）
  <view class="tui-pro-titbox">                                                    z[206]=W:225；W:801-802
    <view class="cu-list menu-avatar" style="width:100%;">                          _mz W:803：class=z[207]=W:226、style=z[208]=W:227
      <view class="cu-item">                                                       z[209]=W:228（复用 z[151]）；W:804-805
        <view class="cu-avatar round lg" style="background-image:url({{user_avatarUrl}});"/>
                                                                                        _mz W:806：class=z[210]=W:230、style=z[211]=W:231
        <view class="content flex-sub">{{user_nickName}}</view>                    z[212]=W:231、z[213]=W:232；W:808-813
        <view class="action text-df">第{{current_day}}天任务</view>                 z[214]=W:233、z[215]=W:234；W:815-819
    <scroll-view scrollY class="tui-popup-scroll" style="height:{{modal_height}}rpx;">
                                                                                        _mz W:823：class=z[216]=W:235（复用 z[137]）、style=z[217]=W:236（复用 z[138]）
      <!-- 三项统计（tui-sign__record）W:824-879 -->
      <view class="tui-sign__record">                                              z[218]=W:238；W:824-825
        <view class="tui-record__item">已打卡/<text class="tui-num__size">{{user_days_total}}</text>天</view>
                                                                                        z[219]=W:238、z[220]=W:239、z[221]=W:240、z[222]=W:241、z[223]=W:242、z[224]=W:243、z[225]=W:244（复用 z[24][5]='天'）
        <view class="tui-record__item">补打卡/<text class="tui-num__size">{{user_days_late}}</text>课</view>
                                                                                        z[226..232]=W:245-251（课=z[232]=W:251，复用 z[29][5]）
        <view class="tui-record__item">缺打卡/<text class="tui-num__size">{{user_days_undo}}</text>天</view>
                                                                                        z[233..239]=W:252-258
      <!-- 荣誉墙三卡（honor-wall）W:881-1045 -->
      <view class="honor-wall">                                                    z[240]=W:259；W:881-882
        <view class="honor-card">                                                  z[241]=W:260；W:883-884
          <view class="card-header"><view class="card-left"><text class="title">第{{current_day}}天打卡详情</text></view></view>
                                                                                        z[242]=W:261、z[243]=W:262、z[244]=W:263、z[245]=W:264；W:885-894
          <view class="top3">                                                        z[246]=W:265；W:896-897
            <view class="padding-sm">                                               z[247]=W:266；W:898-899
              <view class="subtitle">{{daka_type==0?'当天已按时打卡':'当天已补打卡'}}，任务完成度：</view>
                                                                                        z[248]=W:267、z[249]=W:268；W:900-903
              <tui-progress showInfo activeColor="#ff9b6a" backgroundColor="#f3f3f3"
                            color="#ff7900" percent="{{progress}}" width="10"/>      _mz W:905：showInfo=-1(true)、activeColor=z[250]=W:269（复用 z[96]）、backgroundColor=z[251]=W:270、color=z[252]=W:271、percent=z[253]=W:272、width=z[254]=W:273
            <view class="cu-list grid col-3">                                       z[255]=W:274（复用 z[145]）；W:908-909
              <!-- wx:for={{cardList}} z[256]=W:275，_2z 挂载 W:940，项名 item/index -->
              <view class="cu-card"><view class="cu-item">                          z[258]=W:277、z[259]=W:278；W:913-916
                <image src="{{item.cover}}" style="width:100%;height:320rpx;"/>     _mz W:917：src=z[260]=W:279（复用 z[152]）、style=z[261]=W:280（复用 z[153]）
                <!-- wx:if={{item.finish}} z[262]=W:281，判断 W:920 -->
                <view class="tui-new-label-finish">                                 z[263]=W:282（复用 z[95]）
                  <tui-icon color="#ff9b6a" name="square-fill" size="38"/>          _mz W:923：z[264]=W:283、z[265]=W:284（复用 z[97]）、z[266]=W:285（复用 z[98]）
                <view class="text-cut text-sm margin-top-xs">{{item.title}}</view>  z[267]=W:286、z[268]=W:287（复用 z[155][3]）；W:930-933
        <view class="honor-card">                                                  z[269]=W:288（复用 z[241]）；W:944-945
          <view class="card-header">…<text class="title">测验完成情况</text>        z[270]=W:289、z[271]=W:290、z[272]=W:291、z[273]=W:292；W:946-955
          <view class="top3">                                                      z[274]=W:293（复用 z[246]）；W:957-958
            <!-- wx:for={{cardList}} z[275]=W:294（复用 z[256]），_2z 挂载 W:988，项名 item/index -->
            <!-- wx:if={{item.quiz}} z[277]=W:296，判断 W:964 -->
            <view bind:tap="showQuizDetail" class="flex align-center margin-top-sm" data-id="{{index}}"/>
                                                                                        _mz W:965：bind:tap=z[278]=W:297、class=z[279]=W:298、data-id=z[280]=W:299
              <view class="text-cut" style="width:40%;">                            _mz W:966：class=z[281]=W:300、style=z[282]=W:301
                <text class="text-gray">{{item.title}}</text>                       z[283]=W:302、z[284]=W:303；W:967-971
              <view class="cu-progress round sm" style="width:86%;">                _mz W:973：class=z[285]=W:304（复用 z[46]）、style=z[286]=W:305
                <view class="bg-macron" style="width:{{item.quiz}}%;"/>             _mz W:974：class=z[287]=W:306（复用 z[48]）、style=z[288]=W:307
              <view class="record-play margin-left-sm">                            z[289]=W:308；W:977-978
                <image class="quiz-more-icon" src="…/images/icon/more.png"/>        _mz W:979：class=z[290]=W:309、src=z[291]=W:310
        <view class="honor-card">                                                  z[292]=W:311（复用 z[241]）；W:991-992
          <view class="card-header">…<text class="title">跟读录音结果</text>        z[293]=W:312、z[294]=W:313、z[295]=W:314、z[296]=W:315；W:993-1002
          <view class="top3">                                                      z[297]=W:316（复用 z[246]）；W:1004-1005
            <!-- wx:for={{cardList}} z[298]=W:317（复用 z[256]），_2z 挂载 W:1043，项名 item/index -->
            <!-- wx:if={{item.speak}} z[300]=W:319，判断 W:1011 -->
            <view bindtap="goCardShare" class="flex align-center" data-id="{{index}}"/>
                                                                                        _mz W:1012：bindtap=z[301]=W:320、class=z[302]=W:321、data-id=z[303]=W:322
              <view class="text-cut" style="width:40%;">                            _mz W:1013：class=z[304]=W:323（复用 z[281]）、style=z[305]=W:324（复用 z[282]）
                <text class="text-gray">{{item.title}}</text>                       z[306]=W:325（复用 z[283]）、z[307]=W:326；W:1014-1018
              <view class="star-speak">                                             z[308]=W:327；W:1020-1021
                <!-- wx:for={{item.speakResult}} z[310]=W:329，_2z 挂载 W:1030，项名 citem/index -->
                <image class="icon-star-speak"                                      _mz W:1025：class=z[312]=W:331（复用 z[103]）
                       src="{{citem>3?'…/icon/star_icon.png':'…/icon/star_icon_grey.png'}}"/>
                                                                                        src=z[313]=W:332（原文三元 `citem>3`，URL 全称见 §4）
              <view class="record-play">                                            z[314]=W:333；W:1032-1033
                <image class="record-play-icon" src="…/images/icon/voice.png"/>     _mz W:1034：class=z[315]=W:334、src=z[316]=W:335
      <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                     _mz W:1047：z[317]=W:336、z[318]=W:337

⑧ modalQuizDetail 测验详情弹窗（tui-bottom-popup，挂载 W:1122）
<tui-bottom-popup bindclose="hideModalQuizDetail" maskZIndex="1001" show="{{modalQuizDetail}}" zIndex="1002"/>
                                                                                        _mz W:1051：bindclose=z[319]=W:338、show=z[321]=W:340
  <view class="tui-block__box">                                                    z[323]=W:342（复用 z[30]）；W:1052-1053
    <scroll-view scrollY class="tui-popup-scroll" style="height:{{modal_height}}rpx;">
                                                                                        _mz W:1054：class=z[324]=W:343（复用 z[137]）、style=z[325]=W:344（复用 z[138]）
      <view class="tui-quiz-item">                                                 z[326]=W:345；W:1055-1056
        <image class="tui-quiz-cover" mode="aspectFill" src="{{quizDetailCover}}"/> _mz W:1057：class=z[327]=W:346、mode=z[328]=W:347、src=z[329]=W:348
        <view class="tui-goods-center">                                            z[330]=W:349；W:1059-1060
          <view class="tui-quiz-name margin-left padding-top"><text class="tui-gray text-xl">{{quizDetailTitle}}</text></view>
                                                                                        z[331]=W:350、z[332]=W:351、z[333]=W:352；W:1061-1068
          <view class="tui-quiz-name margin-left padding-top"><text class="tui-gray text-xl">测验通过率 {{quizDetailRate}}%</text></view>
                                                                                        z[334]=W:353（复用 z[331]）、z[335]=W:354（复用 z[332]）、z[336]=W:355；W:1069-1076
      <!-- wx:for={{quizDetailList}} z[337]=W:356，_2z 挂载 W:1117，项名 item/index -->
      <tui-collapse bindclick="changeCollapse" current="{{item.current}}" index="{{index}}"/>
                                                                                        _mz W:1082：bindclick=z[339]=W:358、current=z[340]=W:359、index=z[341]=W:360
        <view slot="title">                                                        z[342]=W:361（复用 z[244]）……slot 名原文 'title'/'content'（W:1084/1097 _rz 'slot'）
          <view class="tui-rate-container">                                        z[343]=W:362；W:1085-1086
            <tui-rate current="{{item.star}}" disabled="true" quantity="3" size="36"/>
                                                                                        _mz W:1087：current=z[344]=W:363、disabled=z[345]=W:364（复用 z[58]='true'）、quantity=z[346]=W:365、size=z[347]=W:366
            <view class="tui-title-quiz">{{item.num}} 次</view>                    z[348]=W:367、z[349]=W:368；W:1089-1093
        <view slot="content">                                                      z[350]=W:369；W:1096-1097
          <!-- wx:for={{item.list}} z[352]=W:371，_2z 挂载 W:1111，项名 citem/index -->
          <view class="tui-content-quiz"><tui-list-cell>{{citem}}</tui-list-cell></view>
                                                                                        z[354]=W:373、z[355]=W:374；W:1101-1106（tui-list-cell 为未注册标签，WXML 原样节点）
      <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                     _mz W:1118：z[356]=W:375、z[357]=W:376

⑨ modalAll 全部打卡用户弹窗（tui-bottom-popup，挂载 W:1195）
<tui-bottom-popup bindclose="hideModal" maskZIndex="1001" show="{{modalAll}}" zIndex="1002"/>
                                                                                        _mz W:1123：bindclose=z[358]=W:377（复用 z[202]）、show=z[360]=W:379
  <scroll-view scrollY class="tui-popup-scroll" style="height:{{modal_height}}rpx;">
                                                                                        _mz W:1124：class=z[362]=W:381（复用 z[137]）、style=z[363]=W:382（复用 z[138]）
    <!-- wx:for={{userList}} z[364]=W:383，_2z 挂载 W:1180，项名 item/index -->
    <view class="tui-pro-titbox">                                                  z[366]=W:385（复用 z[206]）；W:1128-1129
      <view class="cu-list menu-avatar" style="width:100%;">                       _mz W:1130：class=z[367]=W:386（复用 z[207]）、style=z[368]=W:387（复用 z[208]）
        <view class="cu-item">                                                     z[369]=W:388（复用 z[151]）；W:1131-1132
          <view class="cu-number text-macron value-text">{{index+1}}.</view>       z[370]=W:389、z[371]=W:390（复用 z[44][1]+z[112][2]）；W:1133-1136
          <view class="cu-avatar1 round lg"                                        _mz W:1138：class=z[372]=W:391
                style="background-image:url({{item.babyInfo?item.babyInfo.avatarUrl:default_avatarUrl}});"/>
                                                                                        style=z[373]=W:392（头像缺省三目，见 §4）
          <view class="content1 flex-sub">                                         z[374]=W:393；W:1140-1141
            <!-- wx:if={{item.babyInfo}} z[375]=W:394，判断 W:1144 -->
            <view>{{item.babyInfo.nickName}}</view>                                z[376]=W:395；W:1145-1148
            <!-- wx:if={{item.babyInfo && item.babyInfo.birth}} z[377]=W:396，判断 W:1152 -->
            <view class="text-gray text-sm">{{item.babyInfo.birth}}</view>         z[378]=W:397、z[379]=W:398；W:1153-1157
          <view class="action">打卡<text class="text-red">{{item.day}}</text>天</view>
                                                                                        z[380]=W:399、z[381]=W:400、z[382]=W:401、z[383]=W:402、z[384]=W:403（复用 z[24][5]）；W:1162-1172
    <!-- 两分支 z[385]=W:404 isShowAllUser，判断 W:1183 -->
    wx:if 真：  <tui-nomore backgroundColor="#f7f7f7" text="已经显示全部"/>          _mz W:1184：z[386]=W:405、z[387]=W:406（复用 z[180]）
    else：      <tui-nomore backgroundColor="#f7f7f7" bind:tap="showMoreUser" text="点击加载更多"/>
                                                                                        _mz W:1188：z[388]=W:407（复用 z[113]）、bind:tap=z[389]=W:408、text=z[390]=W:409（复用 z[183]）
```

### 状态分支
- **isPlanOwner**（getPlanDetail 中 `plan._openid==globalData.openid` 时置真，A:398 实测）→ ① 标题行出现「编辑」icon（W:426-429）、② 每天行头出现「编辑」icon（W:505-508，bindclick=showEditModal）。
- **total_num>0**（z[12]=W:31 原文 `total_num>0`）→ ① 头像组+「当前共N人在打卡」显示（W:441）。
- **current<total**（z[22]=W:41）→ 进度文案二分支：进行中「当前计划进展到第{{current+1}}天，总共{{total}}天」/ 已到期「当前计划已到期，总共{{total}}天」（W:464-477）。
- **isAdd&&day**（z[27]=W:46）→ 「我已打卡N天，其中补打卡N课」行（W:480-486）。
- **isGroupPlan==false**（z[45]=W:64）→ 每日计划块显示完成度进度条（W:519-526）；班级计划无此条。
- **calcFinishRate(item)==='100%'**（z[51]=W:70，字符串 `'100%'` 全等）→ 当天完成显示 love.png 图标，否则「共N个任务」（W:529-539）。
- **daka_list[index] 非空**（z[56]=W:75 `daka_list&&daka_list[index].length!=0`）→ 打卡头像横滚区显示（W:545-572）；头像环着色 `citem.type?'#8799a3':'#ff9b6a'`（z[73]=W:92）。
- **citem.finish** → 任务封面 opacity:0.7 + 「完成」角标（W:588-594、z[93]=W:112）。
- **citem.speak||citem.quiz**（z[99]=W:118）→ 星级区显示：亮星 `calcStarNumber(citem.quiz,citem.speak)` 颗 + 灰星 `3-同值` 颗（W:597-619）。
- **isAdd==false**（z[125]=W:144）→ 底部主按钮文案「添加班级计划/加入个人计划」（按 isGroupPlan），否则「删除班级计划/退出个人计划」（W:668-687）。
- **modalEdit/modalTask/modalModify/modalUser/modalQuizDetail/modalAll** 六弹窗 show 开关；modalTask/modalAll 尾部「已经显示全部 vs 点击加载更多」由 isShowAllList（z[178]=W:197）/ isShowAllUser（z[385]=W:404）切换（W:769-776、W:1183-1190）。
- **daka_type**：honor 卡 1 副标题 `daka_type==0?'当天已按时打卡':'当天已补打卡'`（z[249]=W:268，A:398 clickUserDaka 写入）。

### 页面级 wxs
`utils` 作用域为本页 wxml：绑定 `f_['./pages/planDetail/planDetail.wxml']['utils'] = f_['./pages/planDetail/planDetail.wxs'] || nv_require("p_./pages/planDetail/planDetail.wxs")`（unpacked/app-service.js:1382，本次实测；webview.app.js:1439 同文）。模块定义 np_7 在 app-service.js:1386（webview.app.js:1443 同），导出 `nv_calcFinishRate` / `nv_calcStarNumber`（app-service.js:1386 `nv_module.nv_exports=({nv_calcFinishRate:…,nv_calcStarNumber:…})`，本次实测）。计算规则精确边界见 §3「计算规则」。

### 依赖组件（页面 json 注册）
页面 json 原文（unpacked/app-service.js:51，本次实测；C 侧 `page["pages/planDetail/planDetail.html"].window={"navigationBarTitleText":"打卡计划详情"}`，node 解析实测；无 navigationStyle → 系统导航栏；不在 tabBar，C 侧 pages 含 `pages/planDetail/planDetail`）：
`__wxAppCode__['pages/planDetail/planDetail.json'] = {"navigationBarTitleText":"打卡计划详情","usingComponents":{"tui-icon":"/components/tui-icon/tui-icon","tui-bottom-popup":"/components/tui-bottom-popup/tui-bottom-popup","tui-loadmore":"/components/tui-loadmore/tui-loadmore","tui-modal":"/components/tui-modal/tui-modal","tui-progress":"/components/tui-progress/tui-progress","tui-collapse":"/components/tui-collapse/tui-collapse","tui-rate":"/components/tui-rate/tui-rate","tui-nomore":"/components/tui-nomore/tui-nomore"}}`
- 共 8 个注册组件。**tui-loadmore 注册但本页节点树 0 引用**（`grep -c "tui-loadmore" chunk_36.webview.js` = 0，本次实测）→ 冗余注册，还原可不挂。
- 节点树实际用到 7 个：tui-icon（×4 处属性组）、tui-bottom-popup（×5）、tui-modal（×1）、tui-progress（×1）、tui-collapse（×1）、tui-rate（×1）、tui-nomore（×8 处：W:646/740/770/774/1047/1118/1184/1188）。
- ⑧ 内 `<tui-list-cell>`（W:1103）为**未注册自定义标签**（不在 usingComponents），按原文原样记录。

## 2. 样式规格

来源：`wxss_out/pages__planDetail__planDetail.wxss`（385 行，还原自 W:1222 setCssToHead，尾注 `(./pages/planDetail/planDetail.wxss:1:29950)`）。数值直接当 px 抄。以下为**骨架实际用到的选择器**（其余数百行为 thorui/tui demo 样式整包混入，还原时忽略）。

| 类名 | 关键样式（行号 X:） | 用途 |
|---|---|---|
| .tui-extend-item | X:52 word-wrap:break-word;box-sizing:border-box;color:#302525;font-family:Microsoft YaHei;margin-bottom:5px;padding:10px;position:relative;text-align:justify;width:100%;word-break:break-all | ① 根卡片（背景图由行内 style 叠加，z[1]=W:20） |
| .title-area | X:57 flex 两端对齐、position:relative、z-index:10 | 标题行 |
| .tui-title | X:136 color:#f1f1f1;font-size:19px;font-weight:700;flex 居中;padding:20px 15px 15px | 卡片标题 |
| .tui-desc | X:58 box-sizing:border-box;color:#f3f3f3;font-size:14px;padding:5px 0;text-align:left;width:100% | ① 描述/进度文案行（浅色叠在封面图上） |
| .avatar-list | X:2 flex 横排、align-items:center、padding:5px | 头像组容器 |
| .cu-avatar-group padding-sm / .cu-avatar round | ColorUI 全局（page-frame.html） | 头像组/圆头像 |
| .tui-avatar-title | X:3 font-size:16px;font-weight:400 | 「当前共N人在打卡」 |
| .tui-block__box | X:45 background-color:#f1f1f1;border-radius:10px;padding:10 5px 5px;width:100%;box-sizing:border-box;overflow:hidden | ② 列表区容器（padding 首值原文无单位 `10`，X:45 原样） |
| .tui-group-name / .tui-addr-item | X:46 .tui-group-name color:#333;font-size:17px;line-height:17px;padding:10px;width:100%；.tui-addr-item X:304 | 每日计划行头（.margin-top-sm 为 ColorUI 全局类 margin-top:10px，page-frame.html 16 处命中，本次实测；X 侧 0 定义） |
| .cu-progress round sm / .bg-macron | ColorUI 全局 + 组件样式 | 完成度进度条（bar 宽由行内 style 覆盖） |
| .daka_icon | X:60 height:26px;width:26px | 完成爱心图标 |
| .tui-cmt-box / .tui-mtop / .tui-radius-all | X:260 background:#fff;margin-left:10px;margin-right:10px；.tui-mtop 同名两处 X:155（margin-top:60px）与 X:262（margin-top:13px），**级联终值 13px**；.tui-radius-all X:261 border-radius:6px;overflow:hidden | 任务横滚容器 |
| .tui-goods__list / .tui-goods__item / .tui-goods__imgbox / .tui-goods__img | X:36-40（item height:145px;box-shadow:0 2px 4px rgba(0,0,0,.05)；imgbox/img width:23vw;height:120px） | 横滚任务卡 |
| .tui-new-label-finish | X:48 border-radius:12%;height:28px;width:28px;left:1px;top:1px;position:absolute | 完成角标 |
| .tui-new-label-star | X:51 bottom:3px;height:30px;width:100% | 星级条 |
| .icon-star-speak | X:307 height:26px;width:26px | 星星图标 |
| .tui-pri__box / .tui-sale-pri | X:41-43（sale-pri color:#585858;font-size:12px;line-height:15px;padding:5px 0） | 任务序号行 |
| .tui-safearea-bottom | X:109 height:env(safe-area-inset-bottom);margin-bottom:40px;width:100% | 安全区垫高 |
| .bottom-btn | X:59 bottom:50px;opacity:.9;position:fixed;width:100%;z-index:999;flex 两端对齐 | 底部按钮栏（按钮宽 45% 由行内 style 定，z[118]/z[124]） |
| .tui-popup-scroll | X:86 box-sizing:border-box;height:400px（行内 style `height:{{modal_height}}rpx` 覆盖） | 各弹窗滚动体 |
| .tui-hidden-input | X:55 width:0 | modalModify 关闭时隐藏 input |
| .tui-modal-custom / .tui-page__title | X:53 text-align:center / X:56 font-size:20px;font-weight:400;text-align:left | ⑥ 弹窗体 |
| .tui-pro-titbox | X:283 flex;font-size:16px;font-weight:500;padding:5px 15px;position:relative | ⑦⑨ 头部用户卡 |
| .tui-sign__record / .tui-record__item / .tui-record__title / .tui-record__num / .tui-num__size | X:362-368（record 高 100px、圆角 12px；num 色 #ff9b6a；num__size font-size:32px;line-height:32px） | 三项打卡统计 |
| .daka-avatar-scroll / .daka-avatar-list / .avatar-item | X:353-356（scroll padding:5px 0;white-space:nowrap；list gap:5px;padding-left:8px） | 打卡头像横滚 |
| .progress-ring | X:357 `--progress:0%`（CSS 变量默认值）;border-radius:50%;height:34px;width:34px;overflow:hidden;position:relative | 进度环容器 |
| .progress-fill | X:358 background:#1890ff;**clip-path:polygon(50% 50%,50% 0,100% 0,100% 100%,0 100%,0 0,calc(50% + 50%*cos((var(--progress)*3.6-90)*3.14159/180)) calc(50% + 50%*sin((var(--progress)*3.6-90)*3.14159/180)))**（含 -webkit- 前缀；transition:clip-path .3s ease） | 扇形进度填充（角度 = progress×3.6-90 起笔） |
| .progress-bg / .avatar-img | X:359-361（bg #f3f3f3 内缩 2px；img object-fit:cover 内缩 4px、z-index:2） | 环底/头像 |
| .honor-wall / .honor-card / .card-header / .card-header .title | X:369-375（wall gap:12px；card 圆角 10px、box-shadow:0 2px 5px rgba(0,0,0,.05)、padding:12px；title font-size:17px;font-weight:600） | 荣誉墙 |
| .top3 | X:376-382 margin-top:5px;width:100%（含 .rank-item/.rank/.avatar/.name/.value 子规则） | 卡内列表区 |
| .record-play / .record-play-icon / .quiz-more-icon | X:286-288（icon 27px、more 28px；record z-index:99） | 录音/更多图标 |
| .star-speak | X:306 height:40px;flex 横排居中;z-index:1 | 跟读星级行 |
| .tui-quiz-item / .tui-quiz-cover / .tui-quiz-name | X:383-385（cover 90px 圆角 3%；name font-size:24px;line-height:21px 两行截断） | ⑧ 测验头部 |
| .tui-rate-container / .tui-title-quiz / .tui-content-quiz | X:343-345（container padding:20px;margin:15px；content-quiz padding:10px 10px 10px 35px） | ⑧ 折叠面板 |
| .tui-new-item / .tui-new-mtop / .tui-new-title / .tui-new-box / .tui-product-box | X:348-352（item 背景 **#c1a6e4**、height:55px、width:49%——⑤ 选课宫格特有紫色） | ⑤ 选课宫格 |
| .cu-list grid col-3 / .cu-card / .cu-item / .cu-list menu-avatar / .cu-number | ColorUI 全局（page-frame.html）+ X:312 `.cu-list.menu-avatar>.cu-item>.cu-number{left:5px;position:absolute}` | 宫格/用户列表 |
| .tui-pro-titbox 内 .content flex-sub / .content1 flex-sub / .action | ColorUI 全局 | 用户信息两列 |
| .text-bold / .text-gray / .text-red / .text-white / .text-cut / .text-s / .text-sm / .text-xl / .text-gray / .margin-* / .padding-* / .flex / .align-center / .cuIcon-* | ColorUI 全局（page-frame.html） | 工具类 |

依赖的全局类（ColorUI，定义在 page-frame.html 全局 setCssToHead，本次 grep 抽验 cuIcon-share/cuIcon-roundadd/cuIcon-exit/cuIcon-add/square-fill 由 tui-icon 组件内部渲染）：`.cuIcon-share` `.cuIcon-roundadd` `.cuIcon-exit` `.cuIcon-add` `.text-white` `.text-xl` `.text-gray` `.text-red` `.text-bold` `.text-cut` `.text-sm` `.text-df` `.text-center` `.tui-gray` `.flex` `.flex-sub` `.align-center` `.margin-top` `.margin-top-xs` `.margin-top-sm` `.margin-left` `.margin-left-sm` `.margin-right` `.padding-sm` `.padding-bottom-sm` `.cu-avatar-group` `.cu-avatar` `.cu-progress` `.bg-macron` `.cu-list` `.cu-card` `.cu-item` `.cu-number`。增删说明（对账 diff#6，本次改前原文复核）：`.text-df` 为 page-frame.html setCssToHead 定义；`.tui-gray` 为页级 X:15/X:336 双定义（#999,13px 与 #848484!important）；原列 `.text-s` 为死类（page-frame/X `.text-s{` 均 0 命中，④ z[154] 使用处无样式）已删。

## 3. 事件与逻辑

来源：`chunk_36.appservice.js`（A:397 `;__wxRoute="pages/planDetail/planDetail";…define("pages/planDetail/planDetail.js",…)`；A:398 Page 主体单行 15673 字节；A:399 `{isPage:true,isComponent:true,currentFile:'pages/planDetail/planDetail.js'}`——以上本次 sed/awk 实测；合并副本 app-service.js:6382-6384 同文实测）。页面头部：`var e=wx.cloud.database({}), i=e.command, s=getApp(); var d=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（A:398 实测；该模块导出 formatTime/formatMonth/formatDate/formatHour，unpacked/appservice.app.js:1383 实测）。

### data 初始值（A:398，本次 grep 原文提取）
直接字面量：`default_avatarUrl:"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/touxiang.png"`、`title:""`、`total:1`、`list:[]`、`plan_id:""`、`plan_cover:""`、`group_id:""`、`group_index:-1`、`add_time:0`、`current:0`、`day:0`、`day_late:0`。
经 `t._(a,…)`（@swc/runtime define_property）续写：`total:0`（**覆盖前值 1，最终 0**）、`isAdd:!1`、`isPlanCreate:!1`、`isPlanOwner:!1`、`level:"AA"`、`lists_level:[]`、`lelvel_total:60`（原文拼写即 lelvel）、`isGroupPlan:!1`、`clickLock:!1`、`progress:"66%"`（疑调试遗留初始值）、`isShare:!1`、`modalModify:!1`、`total_num:0`、`avatars:[]`、`daka_list:[]`、`cardList:[]`、`quizList:[]`、`speakList:[]`、`modalAll:!1`、`pageUserallIndex:0`、`userList:[]`、`isShowAllUser:!1`。共 33 个。
运行期 setData 新增（不在初始字面量）：`modalEdit`、`modalTask`、`modalUser`、`modalQuizDetail`、`modal_height`、`eidt_index`（原文拼写即 eidt）、`edit_item`、`taskList`、`pageIndex`、`isShowAllList`、`user_babyid`、`user_avatarUrl`、`user_nickName`、`current_day`、`daka_type`、`user_days_total`、`user_days_late`、`user_days_undo`、`quizDetailList`、`quizDetailCover`、`quizDetailTitle`、`quizDetailRate`。
**遗留字段**：`quizList`/`speakList` 初始化后全程无写入（`grep -o 'quizList:[^,}]*\|speakList:[^,}]*'` 仅命中初始值，本次实测）、节点树 0 引用 → 死数据；`progress` 在 ⑦ tui-progress percent 消费（z[253]=W:272，W:905），**非遗留**（依据包原表述「progress 未见消费」有误，已按原文修正）。

### onLoad / onShow
- `onLoad(a)`（A:398 实测）：`countModalHeight()` → `setData({plan_id:a.plan_id})` → `getPlanDetail()` → `getAvatars()`；`a.share`→isShare、`a.pageList`→isGroupPlan:false、`a.isAdd`→isAdd:true+isGroupPlan:false、`a.isPlanCreate`→isPlanCreate:true+isGroupPlan:true、`a.group_index`→group_index+isAdd:true+isGroupPlan:true、`a.pageGroup`→isGroupPlan:false、`a.isPlanPersonal`→isPlanCreate:true+isGroupPlan:false；末尾 `checkPlanAdd()`。**onLoad 参数全集：plan_id/share/pageList/isAdd/isPlanCreate/group_index/pageGroup/isPlanPersonal**（依据包漏 pageGroup，本次补全）。
- `countModalHeight()`：`wx.getWindowInfo()` → `modal_height = 750/windowWidth*windowHeight*0.66`（原文 `750/e*t*.66`，实测）。
- `onShow()`：`isAdd && getUserPlan()`（A:398 实测）。
- `onShareAppMessage()`（A:398 实测）：title=`"[["+this.data.title+"] "+s.globalData.today_date+"第"+(current+1)+"/"+total+"天打卡,《"+list[current][0].title+"》共"+list[current].length+"课"`（即「[计划名] {今日日期}第N/M天打卡,《当天第1课名》共K课」）；imageUrl=`list[current][0].cover.replace(".jpg","0.jpg")`；path=`"/pages/planDetail/planDetail?plan_id="+plan_id+"&share=1"`。
- `onShareTimeline()`（A:398 实测）：title=`"邀请你一起加入英语分级学习"+level+"级打卡计划"`、query=`"plan_id="+plan_id`、imageUrl=`"https://qianyufang.top/public/yingyu/fenjitu.jpg"`。

### 事件绑定合计 23 处（本次 `grep -n "_mz("` 全量枚举 + 逐条与 A:398 方法名比对，无幽灵事件）
bindtap×6（W:427/665/733/754/794/1012）+ bind:tap×6（W:442/552/584/774/965/1188）+ bindclose×5（W:691/745/800/1051/1123）+ bindcancel×1（W:782）+ bindclick×2（W:506/1082）+ bindinput×2（W:790/792）+ bind:longpress×1（W:716）。

| 事件 | 处理函数 | 行为概述（证据均 A:398，本次 grep -o 逐条核实函数体） | 调用云函数/DB | 写回 |
|---|---|---|---|---|
| tui-icon bindtap（① 标题） | editTitle | `setData({modalModify:!0})` | — | modalModify |
| view bind:tap（① 头像组） | clickAllUserList | `modalAll:true`；`userList.length==0 && showAllUser()` | 间接 | modalAll |
| view bind:tap（② 头像环） | clickUserDaka | dataset.id=天序 i、cid=组内序 s；取 `daka_list[i][s]` 的 baby_id/avatarUrl/nickName/type/progress；progress 为含 `%` 字符串则 strip 后 parseInt；showLoading「查询中」+ 立即 hideLoading；`setData({user_babyid,user_avatarUrl,user_nickName,progress:parseInt(r),current_day:i+1,daka_type,modalUser:true})`；再查该用户 user_plan：plan_id 相同→`user_days_total=day`、`user_days_late=day_late`、`user_days_undo=max(0, min(current+1,total)-user_days_total)`、`cardList=该用户list[i]`；不同→遍历 history 找相同 plan_id 同口径取数；都没有→三项归 0 + toast「本计划已被该用户彻底删除，数据不可查」（icon:none） | user_plan get | user_* 七字段、cardList、progress |
| view bind:tap（② 任务卡） | goStudy | `i=dataset.id`（任务序）、`e=dataset.day`（天序）；`e<current` → `navigateTo ../card/card?id=…&daka_day=e`；否则 `../card/card?id=…` | — | — |
| tui-nomore bind:tap（⑤ 尾） | showMoreList | `pageIndex+1` → `showLevelList()` | 等级集合 get | pageIndex、lists_level |
| view bind:tap（⑦ quiz 行） | showQuizDetail | `cardList[id].quizResult` 存在 → `setData({quizDetailList:quizResult, quizDetailCover:cover, quizDetailTitle:title, quizDetailRate:quiz, modalQuizDetail:true})` | — | quizDetail* 四字段 |
| view bindtap（⑦ speak 行） | goCardShare | `navigateTo ../share/share?card_id=…&user_babyid=user_babyid` | — | — |
| tui-nomore bind:tap（⑨ 尾） | showMoreUser | `!isShowAllUser` → `pageUserallIndex+1`，setTimeout 100ms → `showAllUser()` | 间接 | pageUserallIndex |
| button bindtap（③ 主按钮） | clickPlanBtn | clickLock 防抖（置真 + 3s 复位）；`isPlanCreate` → isGroupPlan ? (isShare ? checkUserInfo() : addGroupPlan()) : checkUserPlanAdd()；`group_index>=0` → showModal title「删除班级计划」content「删除后，将解绑该计划与班级之间的关联，班级用户无法查看该计划」confirmText「确定删除」→ quitGroupPlan()；`isAdd` → showModal title「退出个人计划」content「退出后，将不会再自动更新每天的打卡任务。」confirmText「确定退出」→ quitUserPlan()；否则 → isShare ? checkUserInfo() : checkUserPlanAdd() | 见各分支 | clickLock |
| view bind:longpress（④ 宫格） | deleteTask | `id=taskList[e].id`，取首个 `-` 前缀为等级；showModal title「移除课程」content「是否将：{等级}级第{index+1}课《{title}》移出学习计划{edit_item}？」confirmText「确定移出」→ confirm 后 `handleTaskDelete(e)` | 见 handleTaskDelete | — |
| button bindtap（④ 底） | selectCard | `setData({modalTask:true, pageIndex:0})` → `showLevelList()` + `getLevelTotal()` | 等级集合 count/get | modalTask、pageIndex |
| view bindtap（⑤ 课程项） | clickLesson | 取 `lists_level[id]` 的 title/cover/id；showModal title「添加任务」content「是否添加任务：{level}级第{id+1}课《{title}》」→ confirm 后 `setData({modalTask:false})` + `writeTask(title, cover, id, dataset.id)` | 见 writeTask | — |
| input bindinput（⑥ 标题） | inputTitle | `setData({title:a.detail.value})` | — | title |
| input bindinput（⑥ 描述） | inputDesc | `setData({desc:a.detail.value})` | — | desc |
| button bindtap（⑥ 确定） | submitModify | title 空 → toast「名字不能为空」(icon:error)；长度>15 → toast「班级名字不能超过15个字」(icon:error)；desc>30 → toast「班级描述不饿能超过30个字」(icon:error，原文错别字保留)；全过 → showLoading「修改中」→ plan + user_plan 双写 {title,desc} → `modalModify:false` + toast「修改成功」 | plan/user_plan update | modalModify |
| tui-bottom-popup bindclose ×4（④⑤⑧⑨） | hideModal1/hideModal2/hideModalQuizDetail/hideModal | 分别 `modalEdit:false` / `modalTask:false` / `modalQuizDetail:false` / **`modalUser:false, modalAll:false`（一次关两弹窗，⑦⑨ 共用）** | — | 对应 show 位 |
| tui-modal bindcancel（⑥） | hideModal3 | `modalModify:false` | — | modalModify |
| tui-icon bindclick（② 行头） | showEditModal | `t=parseInt(dataset.id)`；`setData({modalEdit:true, eidt_index:t, edit_item:(t+1)+"/"+list.length, taskList:list[t]})`（原文拼写 eidt_index） | — | modalEdit、eidt_index、edit_item、taskList |
| tui-collapse bindclick（⑧） | changeCollapse | `e=detail.index`；`quizDetailList[e].current = (item.current==e ? -1 : e)`（折叠互斥开关） | — | quizDetailList[N].current |

### 内部方法（无直接 UI 事件）
- `getPlanDetail()`：showLoading「计划加载中」→ `plan.where({plan_id}).get()` → 成功：setData {plan_cover,total,list,title,desc,level}；`_openid==globalData.openid` → isPlanOwner:true；有 group_id 且 isAdd → `current=daysDifference(add_time)`；**`(!public || globalData.plan_id==plan_id) && !hasOwnProperty("daka")` → 云函数 tag:"daka_arr" 补建打卡数组，否则 setTimeout 200ms 后 `daka_list=plan.daka`**；查无此计划 → toast「该计划已被删除，无法查看」(icon:none) + 1.5s 后 reLaunch `../class/class`（isGroupPlan）或 `../planList/planList`。
- `checkPlanAdd()`：`globalData.plan_id==plan_id` → isAdd:true + getUserPlan()；否则挂 `s.babyInfoReadyCallback` 异步同判。
- `getUserPlan()`：`user_plan.where({baby_id, plan_id}).field({history:!1}).get()` → setTimeout 1000ms 后 setData {plan_cover,total,list,title,desc,current,day,day_late(缺省 0)}；level 缺失时从 `list[0][0].id` 取首个 `-` 前缀。
- `checkUserPlanAdd()`：`globalData.groupID.indexOf(plan_id.slice(0,3))!=-1 && add_time>0` → t=daysDifference(add_time)；`user_plan.where({baby_id}).get()` → 空则 `newUserPlan(t)`，否则 `updateUserPlan(t)`。
- `newUserPlan(current)`：showLoading「加入处理中」→ `globalData.plan_id=plan_id` → 云函数 tag:"add"，载荷 {baby_id, babyInfo, plan_id, plan_cover, list, total, title, date:"", current, desc, level, vip:globalData.vip} → success：toast「加入成功」+ reLaunch `../daka/daka`。
- `updateUserPlan(current)`：showLoading「更新处理中」→ 云函数 tag:"update"，载荷同 add → success：**toast「加入成功」原文如此（更新路径复用同一 success 文案）** + reLaunch `../daka/daka`。
- `quitUserPlan()`：`globalData.plan_id=""` → 云函数 tag:"quit"，载荷 {baby_id, plan_id, plan_cover, title, desc, `time: formatTime(new Date)+" "+formatHour(new Date)`, list: `day>0?list:[]`, day, day_late, current, total} → toast「退出成功」+ reLaunch `../daka/daka`。
- `addGroupPlan()`：`plan.where({_openid, plan_id}).update({isAdd:true, add_time})` + `group.where({_openid, group_id}).update({plan_id, add_time, total})`（success 挂在 group update 上：toast「添加成功」+ reLaunch `../class/class`）。
- `quitGroupPlan()`：`plan.where({_openid, plan_id}).update({isAdd:false})` + `group.where({_openid, group_id}).update({plan_id:"", total:0})` → toast「删除成功」+ reLaunch `../class/class`。
- `checkUserInfo()`：`globalData.plan_id==""` → updateUserPlan(0)，否则 newUserPlan()。
- `showAllUser()`：showLoading「获取中」→ `user_plan.where({plan_id}).field({babyInfo:true, day:true}).orderBy("day","desc").skip(20*pageUserallIndex).limit(20).get()` → `userList=旧.concat(新)`；新页 <20 条 → isShowAllUser:true；setTimeout 300ms hideLoading。
- `showLevelList()`：**原文无 `.skip()/.limit()` 方法调用**，实为 index 范围分页：t=20*pageIndex、s=(pageIndex+1)*20 → `collection(getDatabaseLevel()).where({index: i.and(i.gte(t), i.lt(s))}).orderBy("index","asc").field({_id:!1,id:!0,title:!0,cover:!0}).get()`（and/gte/lt 边界原文如此）→ `lists_level=旧.concat(新)`；`lists_level.length>=lelvel_total` → isShowAllList:true。
- `getLevelTotal()`：`collection(getDatabaseLevel()).where({index: i.gte(0)}).count()` → `lelvel_total`（原文拼写 lelvel）。
- `getAvatars()`：`user_study.where({plan_id}).count()` → total>0 时 setData total_num，再 `orderBy("timestamp","desc").field({babyInfo:!0}).limit(10).get()` → avatars。
- `writeTask(title, cover, id, index)`：taskList.push({cover,id,index,title}) → setData `list[eidt_index]` 与 taskList → toast「添加成功」→ `plan.where({_openid, plan_id}).update({"list."+eidt_index: taskList})`。
- `handleTaskDelete(i)`：taskList.splice(i,1) → setData taskList + `list[eidt_index]` → toast「删除成功，学习计划已同步」(icon:none) → `plan.where({_openid, plan_id}).update({list})`。
- `daysDifference(date)`：`Math.floor((今天零点 - date 零点)/864e5)`（年月日逐项取 new Date 后比较）。
- `getDatabaseLevel()`：默认 "AA"；level=="A"→"AL"、"B"→"BL"…"K"→"KL" 共 **12 个集合名**（AA,AL,BL,CL,DL,EL,FL,GL,HL,IL,JL,KL），A:398 逐条实测。
- **死代码（零调用，本次 grep 计数）**：`editTask`（仅定义 1 处，函数体仅 `if(!isPlanOwner) return`）、`showHistoryData`（仅定义 1 处，读 user_plan history[a] 的旧版入口）——还原时可省略，留档备查。

### 云函数调用清单（本页唯一云函数 updateUserPlan，4 个调用点）
| 云函数 | 触发 | data 载荷 | 证据 |
|---|---|---|---|
| updateUserPlan | getPlanDetail：计划无 daka 字段 | `{tag:"daka_arr", plan_id, total}` | A:398（`grep -o 'name:"updateUserPlan",data:{tag:"[a-z_]*"'` 4 命中：daka_arr/add/update/quit，本次实测） |
| updateUserPlan | newUserPlan（加入） | `{tag:"add", baby_id, babyInfo, plan_id, plan_cover, list, total, title, date:"", current, desc, level, vip}` | A:398 |
| updateUserPlan | updateUserPlan（更新） | `{tag:"update", …同 add 载荷}` | A:398 |
| updateUserPlan | quitUserPlan（退出） | `{tag:"quit", baby_id, plan_id, plan_cover, title, desc, time, list, day, day_late, current, total}` | A:398 |

`grep -o "callFunction" chunk_36.appservice.js | wc -l` = 4（本次实测）——除 updateUserPlan 外无其他云函数。

### 云数据库直连清单（客户端 API，`e=wx.cloud.database()`、`i=e.command`）
| 集合 | 操作 | 条件/投影 | 方法 | 证据 |
|---|---|---|---|---|
| plan ×6 | get | where{plan_id} | getPlanDetail | A:398（`grep -o 'collection("[a-z_]*")' | sort | uniq -c`：plan 6 / user_plan 6 / user_study 2 / group 2，本次实测） |
| plan | update | where{plan_id}，{title,desc} | submitModify | A:398 |
| plan | update | where{_openid,plan_id}，{"list.N":taskList}（N=eidt_index） | writeTask | A:398 |
| plan | update | where{_openid,plan_id}，{list}（整组替换） | handleTaskDelete | A:398 |
| plan | update | where{_openid,plan_id}，{isAdd:true,add_time} | addGroupPlan | A:398 |
| plan | update | where{_openid,plan_id}，{isAdd:false} | quitGroupPlan | A:398 |
| user_plan | get | where{baby_id,plan_id}，field{history:false} | getUserPlan | A:398 |
| user_plan | get | where{baby_id}（checkUserPlanAdd 判加入/更新） | checkUserPlanAdd | A:398 |
| user_plan | get | where{baby_id}（他人，plan_id/history 兜底） | clickUserDaka | A:398 |
| user_plan | get | where{plan_id}，field{babyInfo,day}，orderBy day desc，skip 20×N，limit 20 | showAllUser | A:398 |
| user_plan | get | where{baby_id}（读 history，死代码入口） | showHistoryData | A:398 |
| user_plan | update | where{plan_id}，{title,desc} | submitModify | A:398 |
| user_study ×2 | count + get | where{plan_id}；get 另 orderBy timestamp desc、field{babyInfo}、limit 10 | getAvatars | A:398 |
| group ×2 | update | where{_openid,group_id}；{plan_id,add_time,total}（加）/ {plan_id:"",total:0}（退） | addGroupPlan / quitGroupPlan | A:398 |

字段结构以 captures/collections/*.jsonl 为唯一真实样本（本岗位未做数据对账，留对账员）。

### 计算规则（wxs 与 js，必须精确到边界）
- **wxs `calcFinishRate(list)`**（app-service.js:1386 np_7，本次原文提取）：`!list || list.length==0 → 返回数值 0（不带 %）`；否则 `(list.filter(item=>item.finish===true).length / list.length * 100).toFixed(0) + '%'`（**返回字符串带 %**）。消费点：② 进度条宽度 z[49]=W:68 与条内文字 z[50]=W:69；完成判断 z[51]=W:70 为与字符串 `'100%'` **全等**（仅当天全完成时成立）。
- **wxs `calcStarNumber(quiz, speak)`**（app-service.js:1386，本次原文提取）：`total=0,num=0; if(quiz){num++;total+=quiz} if(speak){num++;total+=speak}; average=Math.ceil(total/num); average>=80→3 星；>=60→2 星；否则 1 星`。**边界**：两者皆空时 num=0 → average=NaN → 落到 1 星，但节点树 z[99]=W:118 `speak||quiz` 先行短路，实际不触发。
- **星级渲染**（② 任务卡）：亮星 `calcStarNumber(citem.quiz,citem.speak)` 颗（z[101]=W:120，参数序与 wxs 签名一致）、灰星 `3-同值` 颗（z[105]=W:124）；wxml 对数字 wx:for 即渲染 N 次。
- **js `daysDifference(add_time)`**（A:398）：`Math.floor((今日零点 − add_time 当日零点)/864e5)` → 即自然日差，作为 `current`（getPlanDetail isAdd 分支与 checkUserPlanAdd 的 t）。
- **缺打卡数**（clickUserDaka）：`应至 = min(该用户 current+1, total)`；`user_days_undo = user_days_total < 应至 ? 应至 − user_days_total : 0`（当前计划与 history 两分支同口径，A:398 实测）。
- **进度环**：② 头像环 `--progress` 直接吃 `citem.progress` 原始值（z[71]=W:90，可为 "66%" 形式字符串直接入 CSS 变量）；⑦ tui-progress `percent` 用 clickUserDaka 里 strip % 后 parseInt 的数值（z[253]=W:272）。两种形态并存，还原时注意取数口径。
- **modal_height**：`750/windowWidth*windowHeight*0.66`（rpx），供各弹窗 scroll-view 行内 style（z[138]=W:157）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 功能图标 | `https://qianyufang.top/public/yingyu/images/icon/<名>.png`，本页 5 种：love（z[53]=W:72）、star_icon（z[104]=W:123 与 z[313]=W:332）、star_icon_grey（z[108]=W:127 与 z[313]=W:332）、more（z[291]=W:310）、voice（z[316]=W:335）；`grep -o` 计数 love/more/voice 各 1、star_icon/star_icon_grey 各 2（本次实测） | W ops 节点树字面量 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，icon 目录规律在列，见 audit/cdn-probe.md） |
| 朋友圈分享图 | 固定 URL：`https://qianyufang.top/public/yingyu/fenjitu.jpg` | A:398 onShareTimeline（grep 命中 1，本次实测） | ✅ 抽样验证通过（同上，见 audit/cdn-probe.md） |
| 好友分享封面 | 当天第 1 课封面 `list[current][0].cover` 将 `.jpg` 替换为 `0.jpg`（`cover.replace(".jpg","0.jpg")`） | A:398 onShareAppMessage（字面量 1 处，实测） | ✅ 抽样验证通过（双路径规律见 audit/cdn-probe.md / cdn-可达性探测.md） |
| 缺省头像 default_avatarUrl | 固定 URL：`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/touxiang.png`（A:398 data 初始值，grep 计数 1；⑨ 用户头像缺省三目 z[373]=W:392 消费） | A:398 + W:392 | ✅ 抽样验证通过（tcb 基础设施已补测，见 audit/cdn-probe.md；本文件 URL 未单独 HEAD 探测，按目录/域级结论收录） |
| 计划封面 plan_cover | 无静态路径规律：值为**云数据库 plan.cover 字段**（getPlanDetail 写入），经 ① 行内 style 作卡片背景（z[1]=W:20） | A:398 + W:20 | ⚠️ 待真机验证（路径可达性属数据对账 + 真机范畴；本岗位未验证，无样本数可计） |
| 任务/卡片封面 | `list[][].cover`（② citem.cover=z[92]=W:111、④ item.cover=z[152]=W:171）、`cardList[].cover`（⑦ z[260]=W:279）、测验头图 `quizDetailCover`（⑧ z[329]=W:348，源自 cardList[].cover）——均为云数据库字段 | W ops + A:398 | ⚠️ 待真机验证（同上） |
| 打卡头像 | `daka_list[][].avatarUrl`（② z[78]=W:97）、`avatars[].babyInfo.avatarUrl`（① z[19]=W:38）、`user_avatarUrl`（⑦ z[211]=W:230）——均来自 user_study/user_plan 的 babyInfo 字段 | W ops + A:398 | ⚠️ 待真机验证（同上） |

本页无本地静态图片/音频资源（W 侧 391 个 ops 已通读，无 image 本地路径、无 audio 节点）。

## 5. 弹窗 / 分支状态

- **modalEdit（④ 编辑当天任务）**：showEditModal 打开；标题行「第{N/M}」+ 提示「长按可删除，点击底部按钮可添加」（z[144]=W:163，与 bind:longpress 互证）；宫格项长按 → showModal「移除课程」确认后删除并同步 plan.list；底部「添加任务」按钮 → modalTask。tui-bottom-popup zIndex=1002/maskZIndex=1001。
- **modalTask（⑤ 选课）**：selectCard 打开并重置 pageIndex=0；宫格按当前等级集合（getDatabaseLevel）分页 20 条；confirm「添加任务」→ writeTask 追加并双写本地与 plan.list；尾部「已经显示全部 / 点击加载更多（showMoreList）」按 isShowAllList 切换。
- **modalModify（⑥ 修改信息）**：tui-modal custom 态；⚠ 两个 input **无 value 绑定**，placeholder 分别预填当前 `{{title}}`/`{{desc}}`（z[192]=W:211、z[195]=W:214），class 为 `!modalModify?'tui-hidden-input':''`（width:0 隐藏术）；输入经 inputTitle/inputDesc 实时 setData 回写 data.title/desc；确定时三段校验：title 空 → toast「名字不能为空」(icon:error) → title>15 字 → toast「班级名字不能超过15个字」(icon:error) → desc>30 字 → toast「班级描述不饿能超过30个字」(icon:error，原文错别字保留)；全过 → showLoading「修改中」→ plan+user_plan 双写 {title,desc} → `modalModify:false` + toast「修改成功」。原文未见「取消」路径（bindcancel=hideModal3 仅复位开关）。
- **modalUser（⑦ 用户打卡详情）**：clickUserDaka 打开；头部用户卡（头像/昵称/第N天任务）；三项统计「已打卡 N 天 / 补打卡 N 课 / 缺打卡 N 天」（user_days_total/late/undo）；荣誉墙三卡：①第N天打卡详情（daka_type 副标题 + tui-progress 完成度 + cardList 宫格含完成角标）②测验完成情况（quiz 行 → showQuizDetail）③跟读录音结果（speak 行 → goCardShare，星语 `citem>3` 亮/灰星 + voice.png 播放位）。该用户计划已删除 → 三项归 0 + toast「本计划已被该用户彻底删除，数据不可查」。
- **modalQuizDetail（⑧ 测验详情）**：showQuizDetail 且 `quizResult` 存在才打开；头图+标题+「测验通过率 N%」（quizDetailRate=cardList[].quiz）；tui-collapse 列表（changeCollapse 互斥展开），面板头 tui-rate（3 星、disabled、size 36）+「N 次」，面板体 item.list 逐条 citem 文本。
- **modalAll（⑨ 全部用户）**：clickAllUserList 打开；首次 userList 空才拉取；user_plan 按 day desc 分页 20 条；序号+头像（缺省 touxiang.png）+昵称/生日+「打卡 N 天」；尾部「已经显示全部 / 点击加载更多（showMoreUser）」按 isShowAllUser 切换。
- **modalModify 关闭特例**：hideModal（⑦⑨ 共用）一次置 `modalUser:false, modalAll:false`（A:398 实测）。
- **计划不存在**：getPlanDetail 查空 → toast「该计划已被删除，无法查看」+ 1.5s reLaunch（class/planList 二选一）。
- **防抖**：clickPlanBtn clickLock 3s。

## 6. 对账记录（对账员填写）

对账时间 2026-09-30。对账员独立重跑定位与计数命令、独立通读原文（W 全文 1222 行含 ops 表与 m0、X 关键行、A:397-399 及各函数体逐段、app-config.json node 解析、app-service.js:51/1382/1386/6382-6384），未参考蒸馏过程。

- [x] 节点树与原文一致（W:415-1197 m0）
  定位复核：`grep -l "'./pages/planDetail/planDetail.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_36.webview.js；W:414 `var x=[...]`、W:1201 `root={"tag":"wx-page"}`、W:1220 `__wxAppCode__['pages/planDetail/planDetail.wxml'] = $gwx_XC_30(...)`、W:1222 setCssToHead 尾注 `(./pages/planDetail/planDetail.wxss:1:29950)` 同实测。ops 表逐条重数 391 条（`sed -n '19,409p' unpacked/chunk_36.webview.js | grep -c "^Z("` = 391），z[N]↔W:(N+19) 映射全核通过（z[0]=W:19 … z[390]=W:409，无例外）；9 顶层挂载 W:490/652/690/744/781/799/1050/1122/1195 全中；`_mz` 换算（首属性印出数字为下标、后续 +连续偏移）在 W:427（bindtap=z[6]/color=z[7]/name=z[8]/size=z[9]）、W:442、W:506、W:552、W:584、W:655、W:716、W:794、W:905、W:1087 等处全部与 ops 吻合；`_mz(` 全文件实测 67 处（`grep -o "_mz(" | wc -l` = 67），spec §1 逐处覆盖无遗漏（见 diff#3 汇总数）；wx:for `_2z` 14 处（W:453/569/608/617/636/731/764/940/988/1030/1043/1111/1117/1180）项名/索引名与 spec 一致；wx:if/else 判断行与条件 ops（z[5]/z[12]/z[22]/z[27]/z[45]/z[51]`==='100%'`/z[56]/z[94]/z[99]/z[125]/z[178]/z[249]/z[262]/z[277]/z[300]/z[375]/z[377]/z[385]）逐一对上；⑧ slot 名 W:1084/1097、`tui-list-cell` 未注册标签 W:1103 原样节点、tui-nomore ×8（W:646/740/770/774/1047/1118/1184/1188，实测 `grep -o` 计数 8）、tui-loadmore W 侧 0 引用（`grep -c` = 0）均实测成立。
- [x] 类名抽查 54 处全中（要求 ≥10）
  W 节点树 class 字面量 × X 选择器行号+数值双向核对全中：.avatar-list X:2、.tui-avatar-title X:3、.tui-goods__list/item/imgbox/img X:36-40（item height:145px、box-shadow 0 2px 4px；imgbox/img 23vw/120px）、.tui-pri__box/.tui-sale-pri X:41-43、.tui-block__box X:45（padding 首值无单位 `10` 原样）、.tui-group-name X:46、.tui-new-label-finish X:48、.tui-new-label-star X:51、.tui-extend-item X:52、.tui-modal-custom X:53、.tui-hidden-input X:55、.tui-page__title X:56、.title-area X:57、.tui-desc X:58、.bottom-btn X:59、.daka_icon X:60、.tui-popup-scroll X:86、.tui-safearea-bottom X:109、.tui-title X:136、.tui-mtop X:155(60px)/X:262(13px) 级联终值 13px、.tui-cmt-box X:260、.tui-radius-all X:261、.tui-pro-titbox X:283、.record-play/.record-play-icon/.quiz-more-icon X:286-288、.tui-addr-item X:304、.star-speak X:306、.icon-star-speak X:307、.tui-rate-container/.tui-content-quiz/.tui-title-quiz X:343-345、.tui-new-item X:348（#c1a6e4）、.daka-avatar-scroll/.daka-avatar-list/.avatar-item X:353-356、.progress-ring X:357、.progress-fill X:358（clip-path cos/sin + `--progress` 原文原样）、.progress-bg X:359、.avatar-img X:360-361、.tui-sign__record X:362、.tui-record__item X:364、.tui-record__title X:366、.tui-record__num X:367（#ff9b6a）、.tui-num__size X:368、.honor-wall X:369、.honor-card X:370、.top3 X:376-382、.tui-quiz-item/.tui-quiz-cover X:383-384。依赖的 ColorUI 全局类 grep page-frame.html（`",[1],"X{` 形态）逐一命中：text-white/text-gray/text-red/text-bold/text-cut/text-sm/text-xl/text-df/text-center/flex-sub/align-center/padding-sm/padding-bottom-sm/margin-right/margin-left(-sm)/margin-top(-xs/-sm=10px)/bg-macron/cu-avatar(-group)/cu-progress/cu-list/cu-card/cu-item/cu-number/text-macron/value-text/cuIcon-share/cuIcon-roundadd/cuIcon-exit/cuIcon-add。三处增删见 diff#6。
- [x] 文案逐字一致（spec 已录文案全中；A 侧漏 3 条见 diff#1）
  W 侧节点文案逐字全中：{{title}}、"{{desc}}"（W:30 两端中文弯引号 “ ” 原样）、当前共…人在打卡（W:40）、当前计划进展到第…天，总共…天（W:43）/当前计划已到期，总共…天（W:45）、我已打卡…天，其中补打卡…课（W:48）、共…个任务（W:74）、没有更多了（z[114]=W:133）、转发打卡计划（W:141）、添加班级计划/加入个人计划（W:147）、删除班级计划/退出个人计划（W:150）、第{{edit_item}}（W:161）、长按可删除，点击底部按钮可添加（W:163）、添加任务（W:179）、已经显示全部（W:199）/点击加载更多（W:202）、修改:（W:208）、确定（W:220）、第…天任务（W:234）、已打卡/补打卡/缺打卡 + 天/课（W:240-258）、第…天打卡详情（W:264）、当天已按时打卡/当天已补打卡，任务完成度：（W:268）、测验完成情况（W:292）、跟读录音结果（W:315）、测验通过率 …%（W:355）、… 次（W:368）、打卡…天（W:400-403）、{{index+1}}/{{total}}（W:63）、{{citem.index+1}}.{{citem.title}}（W:131）、{{item.index+1}}: {{item.title}}（W:174）。A 侧（A:398 通读 + `grep -o` 全量提取中文串）分享标题模板/path/imageUrl×2（fenjitu.jpg、.jpg→0.jpg）、删除/退出弹窗两条 content + confirmText×3、移除课程弹窗拼接串、各 toast/showLoading 文案逐字一致；唯 submitModify 漏录 3 条（diff#1）。
- [x] 事件与云函数调用清单齐全（有 1 处条件误记见 diff#2）
  事件绑定独立枚举：`grep -n "_mz("` = 67 处中带事件属性 23 处 = bindtap×6（W:427/665/733/754/794/1012）+ bind:tap×6（W:442/552/584/774/965/1188）+ bindclose×5（W:691/745/800/1051/1123）+ bindcancel×1（W:782）+ bindclick×2（W:506/1082）+ bindinput×2（W:790/792）+ bind:longpress×1（W:716），与 spec §3 计数与行号全中；22 个处理函数（hideModal1/hideModal2 数字尾缀专项核验存在：`hideModal1:function(){this.setData({modalEdit:!1})}`、`hideModal2:function(){this.setData({modalTask:!1})}`）与 A:398 方法名一一对应，无幽灵事件；hideModal 一次关 modalUser+modalAll 实测。云函数 `grep -o "callFunction" | wc -l` = 4，全部 updateUserPlan tags daka_arr/add/update/quit ✓；DB 集合计数 `grep -o 'collection("[a-z_]*")' | sort | uniq -c` = plan 6/user_plan 6/user_study 2/group 2，与 §3 直连清单行数一一对应（唯 handleTaskDelete 行 where 条件漏 `_openid`，diff#2）。data 33 字段（12 字面量 + 21 `t._` 续写，total 覆盖为 0）、onLoad 8 参数（含 pageGroup）、countModalHeight `750/e*t*.66`、onShow、clickPlanBtn clickLock 3e3 防抖四分支、daysDifference（年月日零点/864e5）、缺打卡口径 `应至=min(current+1,total)`、getDatabaseLevel 12 集合（AA…KL 逐条实测）、wxs 两函数边界（空数组返回数值 0；>=80→3 星/>=60→2 星/否则 1 星）、死代码 editTask/showHistoryData（各仅 1 处定义）、quizList/speakList 各仅初始值 1 处、eidt_index×4/lelvel×3 拼写遗留，全部实测与 spec 一致。app-config.json：window={"navigationBarTitleText":"打卡计划详情"}、无 navigationStyle、不在 tabBar ✓；页面 json 8 组件（app-service.js:51）✓；app-service.js:1382 wxs 绑定、:1386 np_7 双函数导出、:6382-6384 合并副本 ✓；A 侧 `grep -c "gwx_XC_30"` = 11、A:151 `var x=[...]` 同文 ✓。

### diff 摘要

| # | 位置 | spec 现文 | 原文证据（本次实测） | 定级 |
|---|---|---|---|---|
| 1 | §3 事件表 submitModify 行、§5 modalModify 条 | 「title 空→名字不能为空；长度>15→班级名字不能超过15个字；否则 plan+user_plan 双写 {title,desc}，modalModify:false」 | A:398 原文为三段校验 + 反馈：`this.data.desc.length>30?wx.showToast({title:"班级描述不饿能超过30个字",icon:"error"})`（原文错别字「不饿能」）→ `wx.showLoading({title:"修改中"})` → plan+user_plan 双写 → `this.setData({modalModify:!1}),wx.showToast({title:"修改成功"})` | **实 diff**：漏 desc>30 校验分支与「修改中/修改成功」反馈，会传导到还原行为 |
| 2 | §3 内部方法 handleTaskDelete 条、§3 云数据库直连清单该行 | 「plan.where({plan_id}).update({list})」/「where{plan_id}，{list}（整组替换）」 | A:398 `e.collection("plan").where({_openid:s.globalData.openid,plan_id:this.data.plan_id}).update({data:{list:this.data.list}})` | **实 diff**：where 条件漏 `_openid`，写权限口径不同 |
| 3 | 页首证据说明（`_mz` 计数） | 「全文件 48 处 `_mz`」 | `grep -o "_mz(" unpacked/chunk_36.webview.js | wc -l` = 67（67 行各 1 处，行号 417…1188；spec §1 已全覆盖 67 处，仅汇总数错） | 计数错误，无实质影响，顺带修 |
| 4 | §3 内部方法 addGroupPlan 条 | 「（success 内 showToast）」 | A:398 success 内 `wx.showToast({title:"添加成功"}),wx.reLaunch({url:"../class/class"})` | 轻微：补 toast 文案「添加成功」与 reLaunch 目标 |
| 5 | §3 内部方法 showLevelList 条 | 「skip=20*pageIndex、limit=20 →」 | A:398 无 `.skip()/.limit()` 方法调用：`t=20*pageIndex,s=(pageIndex+1)*20` 作 where index `i.and(i.gte(t),i.lt(s))` 范围分页，且带 `.orderBy("index","asc").field({_id:!1,id:!0,title:!0,cover:!0})` | 轻微：改述为 index 范围分页并补 orderBy/field |
| 6 | §2 依赖全局类清单 | `.text-s` 列于 ColorUI 全局类 | `.text-s{` 在 page-frame.html 与页级 X 均 0 命中（④ z[154] 使用，无定义死类）；⑦ z[214] `.text-df`（page-frame 有定义）、⑧ z[332] `.tui-gray`（页级 X 双定义：#999,13px 与 #848484!important）未列入清单 | 轻微：依赖清单三处增删 |

**结论**：节点树 / 类名抽查 / 文案（已录部分）/ 事件与云函数清单四项核对全部执行完毕；因 diff#1、#2 属会传导到还原行为的实质不一致，本次对账**不通过（FAIL）**——蒸馏工按 diff#1-#6 修正（#1/#2 必修，#3-#6 顺带）后复核关闭。PROGRESS.md 按「对账通过后更新」约定本次未动。

**蒸馏工修正记录（2026-09-30）**：已按 diff#1-#6 修正本文件，改前各项均到原文复核——#1 §3 事件表 submitModify 行与 §5 modalModify 条补 desc>30 校验分支（toast「班级描述不饿能超过30个字」，原文错别字「不饿能」保留）及 showLoading「修改中」+ `modalModify:false` + toast「修改成功」（A:398 函数体 grep 提取）；#2 §3 handleTaskDelete 条与 DB 直连清单行 where 条件补 `_openid`（原文 `where({_openid:s.globalData.openid,plan_id})`）；#3 页首 `_mz` 汇总数 48→67（`grep -o "_mz(" | wc -l` 实测）；#4 §3 addGroupPlan 补 success（挂在 group update 上）内 toast「添加成功」+ reLaunch `../class/class`；#5 §3 showLevelList 改述为 index 范围分页（原文无 `.skip()/.limit()`）并补 `.orderBy("index","asc").field({_id:!1,id:!0,title:!0,cover:!0})`；#6 §2 依赖全局类删 `.text-s`（page-frame/X `.text-s{` 均 0 命中死类）、补 `.text-df`（page-frame setCssToHead 有定义）与 `.tui-gray`（页级 X:15/X:336 双定义）。frontmatter 状态改「待对账（已按对账 diff #1-#6 修正，待对账员复核）」，其余未动。

**对账员复核（第二轮收尾，2026-09-30）**：#1-#6 修正逐条回原文抽验，**全部验证通过，verdict=PASS**。
- #1 ✓ A:398 submitModify 函数体原文为三段校验链 `0==title.length→"名字不能为空"(error)` / `title.length>15→"班级名字不能超过15个字"(error)` / `desc.length>30→"班级描述不饿能超过30个字"(error)`（错别字「不饿能」原文逐字在，spec 保留正确）+ `(wx.showLoading({title:"修改中"}), plan.update{title,desc}, user_plan.update{title,desc}, setData({modalModify:!1}), wx.showToast({title:"修改成功"}))`；§3 事件表行与 §5 modalModify 条与原文逐项一致。
- #2 ✓ A:398 handleTaskDelete 原文 `e.collection("plan").where({_openid:s.globalData.openid,plan_id:this.data.plan_id}).update({data:{list:this.data.list}})`——双字段 where；§3 方法条与 DB 直连清单行均已补 `_openid`。
- #3 ✓ `grep -o "_mz(" chunk_36.webview.js | wc -l` = 67、`grep -c "_mz("` = 67（67 行各 1 处），页首汇总数 67 与实测一致。
- #4 ✓ A:398 addGroupPlan 原文 success 挂在 group update 上：`success:function(a){wx.showToast({title:"添加成功"}),wx.reLaunch({url:"../class/class"})}`；§3 条与原文一致（plan update 无 success 挂点，记录口径正确）。
- #5 ✓ A:398 showLevelList 原文无 `.skip()/.limit()`，为 `t=20*a.data.pageIndex,s=(a.data.pageIndex+1)*20` → `where({index:i.and(i.gte(t),i.lt(s))}).orderBy("index","asc").field({_id:!1,id:!0,title:!0,cover:!0})`——范围分页表达式与 orderBy/field 逐字吻合；§3 条一致（含 `lists_level.length>=lelvel_total → isShowAllList:true`）。
- #6 ✓ `.text-s{` page-frame.html 0 命中、X 侧 `.text-s` 0 命中（死类，依赖清单已删）；`.text-df` page-frame setCssToHead 有定义（`"text-df{font-size:",[0,28],"}"` 拼接形态）；`.tui-gray` X:15（#999,13px）与 X:336（#848484!important）双定义。依赖清单与增删说明均与实测一致。
- **篡改检查**：本节对账内容（四项勾选、6 条 diff 表、FAIL 结论段）未被改动；其数字声明本次重跑全数命中（`sed -n '19,409p' | grep -c "^Z("` = 391、tui-nomore 8、tui-loadmore 0、callFunction 4、collection plan 6/user_plan 6/user_study 2/group 2、A 侧 `grep -c "gwx_XC_30"` = 11、A:398 = 15673 字节、hideModal1/hideModal2 函数体与 hideModal `setData({modalUser:!1,modalAll:!1})` 原文逐字在、quitUserPlan 载荷（time: formatTime+" "+formatHour、`list: day>0?list:[]`）同文）。蒸馏工修正记录为结论段之后的独立追加段，未触碰上文。
- **非阻塞残留备案（不影响 verdict）**：§2 选择器表末行「工具类」的类名列仍列 `.text-s`（该行本义为骨架工具类罗列，④ z[154] 确在使用），但来源列标「ColorUI 全局（page-frame.html）」与死类事实相悖；依赖全局类清单与增删说明已明确其为「使用处无样式」死类，还原以该清单为准，不传导还原行为，留验收知情。

**结论（第二轮）**：对账通过（PASS），frontmatter 状态改「对账通过（待验收）」。PROGRESS.md 仍按约定待用户验收后由主流程更新，本次未动。

---

## 附：蒸馏工遗留问题清单（交对账员 / page-restorer）

1. **modalModify 输入框语义（待复核）**：两个 input 仅 bindinput+class+placeholder 三属性（W:790/792），**无 value 绑定**；placeholder 直接绑定 `{{title}}`/`{{desc}}`（z[192]/z[195]）——即「非受控输入 + placeholder 预填当前值」的非常规写法。js 侧 inputTitle/inputDesc 确为实时回写 data.title/desc（A:398 实测）。静态产物无法进一步判定渲染表现，建议对账员复核原 wxml 语义或真机验证。
2. **静态宽度字面量**：② 进度条外层 `style="width:60%;"`（z[47]=W:66）、③ 两按钮 `width:45%`（z[118]=W:137、z[124]=W:143）、④ 添加按钮 `width:40%`（z[158]=W:177）均为编译产物静态字面量。「是否为动态样式的降级常量」无法从静态产物判定——依据包原疑问保留，按静态值还原即可。
3. **进度环 CSS 兼容性（未验证）**：`.progress-fill` 的 clip-path 使用 `calc()+cos()/sin()` 三角函数与 `--progress` CSS 变量（X:358），纯静态分析未做真机/低版本基础库验证；`transition: clip-path .3s` 的实际动效同未验证。
4. **死代码 / 冗余清单**：data 的 `quizList`/`speakList` 永不写入且节点树 0 引用；`editTask`、`showHistoryData` 两方法零调用；`tui-loadmore` 组件注册未使用；`total` 初始值双写（字面量 1 被覆盖为 0，最终 0）；`progress` 初始 `"66%"` 疑调试遗留。还原时可省略，但需知情。
5. **calcStarNumber 参数分组**：编译产物 z[101]=W:120 的实参为嵌套 op5 包装（`calcStarNumber(<op5(citem.quiz)>, citem.speak)` 形态），参数序按 wxs 签名 `(quiz, speak)` 还原（app-service.js:1386 签名实测）；分组细节待对账员终审。
6. **行数口径**：W `wc -l`=1222 / `grep -c ""`=1223（末尾空行）；A=399 行（Page 主体 A:398 单行 15673 字节）；X=385 行。
7. **流程状态**：本 spec 为蒸馏工产出，PROGRESS.md 按约定待对账员通过后更新；本岗位未触发动态采集（unpacked/ 材料完整）。
