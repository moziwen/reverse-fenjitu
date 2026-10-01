---
页名: report
显示名: 月度学习报告（荣誉墙）
状态: 对账通过（2026-09-30，对账员独立重推零 diff）
chunk: chunk_38.webview.js / chunk_38.appservice.js
导航栏: 系统栏（标题「本月英语学习报告」）
---

# 页面还原规格：月度学习报告（pages/report/report）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_38.webview.js，A=unpacked/chunk_38.appservice.js，X=unpacked/wxss_out/pages__report__report.wxss，C=unpacked/app-config.json。A 页面逻辑全部在 A:142 单行压缩代码内（本次 `sed -n '142p' | wc -c` 实测 9,173 字节含换行，与依据包 9,108 字符口径差为 UTF-8 中文多字节所致），函数级行号统一记 A:142@col。
> 定位命令与输出：`grep -l "'./pages/report/report.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_38（依据包核实；本次复核 W:153 `var x=['./pages/report/report.wxml'];d_[x[0]]={}`、W:425 `__wxAppCode__['pages/report/report.wxml'] = $gwx_XC_32(...)` 注册、W:427 `setCssToHead(...)` 页面样式内联，均实测命中）。节点树=$gwx_XC_32，ops 常量表 130 条（W:18-149），渲染函数 m0（W:154-402）。_mz 属性索引坑规避与交叉验证方法见依据包 notes 3（ops 全量 Node dump 解码 + 全部 tui 组件属性值交叉验证）。
> 本页零弹窗（无 tui-bottom-popup），第 5 节改为分支状态汇总。

## 1. 页面骨架（节点树）

来源：`chunk_38.webview.js` 的 `$gwx_XC_32`（W:425 注册）。本次已抽查核对代表行原文：W:160（`_oz(z,2,…)`）、W:174（`_mz(z,'view',['class',7,'style',1]…)`）、W:195（tui-progress 属性表 `['showInfo',-1,'activeColor',18,'backgroundColor',1,'color',2,'percent',3,'width',4]`）、W:220（tui-rate `['active',34,'current',1,'disabled',2,'quantity',3,'size',4]`）、W:287（课程封面 `['src',72,'style',1]`）、W:379（tui-tag 八属性 `['bindclick',118,'data-id',1,'margin',2,'padding',3,'scaleMultiple',4,'shape',5,'size',6,'type',7]`）、W:396（tui-nomore `['backgroundColor',127,'text',1]`），op 偏移与依据包 dump 一致。

```
<view class="honor-page">                                          (W:156-157, op0)
  <view class="header">                                            (W:158-159, op1)
    <text>{{year}} 年 {{month}} 月</text>                          (W:160, op2)
  </view>
  <!-- 空态分支 -->
  <block wx:if="{{empty_report}}">                                 (W:163-165, op3)
    <view class="header">
      <text>本月暂无任何学习记录</text>                             (W:166-169, op4/op5)
    </view>
  </block>
  <!-- 【注意】honor-wall 无 wx:else，空报告时与空态文案同时渲染（四张零值卡片照常显示） -->
  <view class="honor-wall">                                        (W:172-173, op6)
    <!-- 卡1：Keep Going（学习进度） -->
    <view class="honor-card" style="background:{{bgColors[0]}}">   (W:174, op7=class/op8=style)
      <view class="card-header">
        <view class="card-left">                                   (op9/op10)
          <image class="icon" src="https://qianyufang.top/public/yingyu/images/honor/mic.png"/>  (W:179, op11/op12)
          <text class="title">Keep Going!</text>                   (W:181-184, op13/op14)
        </view>
      </view>
      <view class="top3">                                          (op15)
        <view class="subtitle">本月平均每天学习{{month_avarge}}课，学完{{level_cur}}级还需{{level_days}}天</view>  (W:190-193, op16/op17)
        <tui-progress showInfo activeColor="#ff9b6a" backgroundColor="#f3f3f3"
                      color="#ff7900" percent="{{level_progress}}" width="10"/>  (W:195, op18~22)
      </view>
    </view>
    <!-- 卡2：执行力（打卡） -->
    <view class="honor-card" style="background:{{bgColors[1]}}">   (W:199, op23/op24)
      <view class="card-header"><view class="card-left">
        <image class="icon" src="…/images/honor/calendar.png"/>    (W:204, op27/op28)
        <text class="title">执行力</text>                           (W:206-209, op29/op30)
      </view></view>
      <view class="subtitle">本月学习天数：{{month_days}}/{{cur_days}} 天，本月打卡率：{{month_daka_rate}}</view>  (W:215-218, op32/op33)
      <tui-rate active="#ff9b6a" current="{{month_daka_star}}" disabled="true"
                quantity="10" size="{{star_size}}"/>               (W:220, op34~38)
      <!-- 计划块：仅 plan_id 非空时渲染 -->
      <block wx:if="{{plan_id!=''}}">                              (W:222-240, op39)
        <view bind:tap="goPlan">                                   (W:225-226, op40)
          <view class="subtitle">[{{plan_title}}]</view>           (op41/op42)
          <view class="subtitle">总计打卡：{{plan_days_normal}}/{{plan_days_cur}} 天，整体完成率：{{plan_finish_rate}}</view>  (W:232-235, op43/op44)
          <tui-rate active="#ff9b6a" current="{{month_plan_star}}" disabled="true"
                    quantity="10" size="{{star_size}}"/>           (W:237, op45~49)
        </view>
      </block>
    </view>
    <!-- 卡3：学习内容（本月课程 Top3 网格） -->
    <view class="honor-card" style="background:{{bgColors[2]}}">   (W:245, op50/op51)
      <view class="card-header"><view class="card-left">
        <image class="icon" src="…/images/honor/book.png"/>        (W:250, op54/op55)
        <text class="title">学习内容</text>                         (W:252-254, op56/op57)
      </view></view>
      <view class="subtitle">本月完成学习{{month_cards}}课，共{{month_cards_times}}次</view>  (W:261-263, op59/op60)
      <view class="subtitle">                                      (W:266-267, op61)
        <text>其中{{level_cur}}级占比{{level_cur_ratio}}</text>     (W:268, op62)
        <block wx:if="{{level_second}}">                           (W:270-275, op63)
          <text>，{{level_second}}级占比{{level_second_ratio}}</text>  (op64)
        </block>
      </view>
      <view class="cu-list grid col-3">                            (W:279-280, op65)【网格样式来自全局 ColorUI，见第 2 节】
        <!-- wx:for {{cardList}} wx:key="index" (W:281-304, op66) -->
        <view bindtap="goCardStudy" data-id="{{item._id}}" class="cu-card">  (W:284, op68/op69/op70)
          <view class="cu-item">                                   (W:286, op71)
            <image src="{{item.cover}}" style="width:100%;height:300rpx;"/>  (W:287, op72/op73)
            <!-- 【易错】角标在编译树中是 image 的子节点： -->
            <view class="bg-macron tui-new-label-text text-center text-white text-sm">{{item.num}}次</view>  (W:288-292, op74/op75)
            <view class="text-cut text-sm">{{item.level}}: {{item.title}}</view>  (W:294-297, op76/op77，冒号后有空格)
          </view>
        </view>
      </view>
    </view>
    <!-- 卡4：开口能力（跟读） -->
    <view class="honor-card" style="background:{{bgColors[3]}}">   (W:307, op78/op79)
      <view class="card-header"><view class="card-left">
        <image class="icon" src="…/images/honor/test.png"/>        (W:312, op82/op83)
        <text class="title">开口能力</text>                         (W:314-317, op84/op85)
      </view></view>
      <view class="subtitle">开口次数{{month_speak_num}}次，说出单词{{month_speak_words}}个</view>  (W:323-326, op87/op88)
      <!-- wx:for {{speakList}} wx:key="index" (W:328-360, op89) -->
      <view bindtap="goCardShare" data-id="{{index}}" class="flex align-center">  (W:331, op91/op92/op93)
        <view class="text-cut" style="width:33%;">                 (W:332, op94/op95)
          <text class="text-gray">{{item.level}}:{{item.title}}</text>  (W:333-336, op96/op97，【冒号后无空格】，与卡3写法不同)
        </view>
        <view class="star-speak">                                  (W:339-340, op98)
          <!-- wx:for {{item.stars}} wx:for-item="citem" (W:343-349, op100) -->
          <image class="icon-star-speak" src="{{citem>3?'https://qianyufang.top/public/yingyu/images/icon/star_icon.png':'https://qianyufang.top/public/yingyu/images/icon/star_gray.png'}}"/>  (W:344, op102/op103，亮星阈值 citem>3；灰星文件名是 star_gray 而非 daka 页的 star_icon_grey)
        </view>
        <view class="record-play">
          <image class="record-play-icon" src="…/images/icon/voice.png"/>  (W:351-353, op104~106)
        </view>
      </view>
      <view class="subtitle margin-top-sm">熟练通过{{words_right}}个，仍需练习{{words_wrong}}个</view>  (W:361-364, op107/op108)
      <view class="padding">
        <tui-charts-pie bindclick="onClick" diam="300" id="tui_pie_1"
                        legend="{{legend}}" title="掌握程度"/>      (W:366-369, op109~114)
      </view>
      <!-- 错词列表 -->
      <block wx:if="{{speak_words_wrong_list.length>0}}">          (W:371-389, op115)
        <view class="wrong-words-list">                            (W:374-375, op116)
          <!-- wx:for {{speak_words_wrong_list}} wx:key=""（key 为空串）(W:378-386, op117) -->
          <tui-tag bindclick="clickWordExtend" data-id="{{index}}" margin="12rpx" padding="12rpx"
                   scaleMultiple="1.1" shape="circle" size="32rpx" type="light-orange">{{item._id}}</tui-tag>  (W:379-381, op118~125 共 8 属性 + op126 文本)
        </view>
      </block>
    </view>
  </view>
  <tui-nomore backgroundColor="#f7f7f7" text="已经到底部了"/>        (W:396-397, op127/op128，【无条件渲染】)
  <view class="tui-safearea-bottom"/>                               (W:398-400, op129)
</view>
```

### 数据绑定全集（W ops 解码，依据包 dump）

year、month、empty_report、bgColors[0..3]、month_avarge、level_cur、level_days、level_progress、month_days、cur_days、month_daka_rate、month_daka_star、star_size、plan_id、plan_title、plan_days_normal、plan_days_cur、plan_finish_rate、month_plan_star、month_cards、month_cards_times、level_cur_ratio、level_second、level_second_ratio、cardList[{_id,cover,num,level,title}]、month_speak_num、month_speak_words、speakList[{_id,level,title,stars[]}]、words_right、words_wrong、legend、speak_words_wrong_list[{_id}]、index。

### 依赖组件

页面级 usingComponents 注册 12 个（app-service.js:53 原文，本次 `sed -n '53p' | tr ',' '\n' | grep` 实测全名单）：tui-nomore / tui-icon / tui-bottom-popup / tui-poster / tui-progress / tui-charts-column / tui-charts-pie / tui-rate / tui-tag / tui-circular-progress / tui-week-date / tui-charts-line。本页骨架实际用到其中 5 个：tui-progress（W:195）、tui-rate×2（W:220/W:237）、tui-charts-pie（W:366）、tui-tag（W:379）、tui-nomore（W:396），其余 7 个注册未用。

## 2. 样式规格

来源：`wxss_out/pages__report__report.wxss`（29 条规则 X:1-29，本次整文件通读原文转录；数值直接当 px，不除 2；源头=W:427 setCssToHead，与 X 一致）。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .honor-page | background-color:#fafafa; padding:10px (X:1) | 页面容器 |
| .header | color:#4b4b4b; font-size:24px; font-weight:700; margin-bottom:10px; text-align:center (X:2) | 「YYYY 年 M 月」标题（空态标题共用） |
| .subtitle | color:#555; font-size:16px; padding:5px 0（原文 padding-bottom:5px;padding-top:5px）(X:3) | 卡片副标题行 |
| .honor-wall | flex column; gap:12px (X:4) | 四卡纵排容器 |
| .honor-card | border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,.05); margin-bottom:5px; padding:12px; width:100% (X:5) | 荣誉卡（背景色由 style 内联 bgColors[n] 随机） |
| .card-header | justify-content:space-between；.card-header 与 .card-header .card-left 均 flex 居中 (X:6-7) | 卡头 |
| .card-header .card-left | gap:5px (X:8) | 图标+标题组 |
| .card-header .icon | 20px×20px (X:9) | 卡图标 |
| .card-header .title | font-size:17px; font-weight:600 (X:10) | 卡标题 |
| .top3 | margin-top:5px; width:100%; flex column (X:11-12) | 卡1 指标区 |
| .top3 .rank-item 系列 | .rank 16px (X:14)、.avatar 40px 圆形白边 (X:15)、.name 13px (X:16)、.value 12px (X:17) | 【死样式】本页节点树无 rank-item/avatar/name/value 节点（W ops 全量无对应 class），遗留自模板 |
| .tui-legend__box / __item / __circle / .tui-flex-box | 图例纵排 wrap / 14px margin 10,12,15 / 圆点 10px / row wrap margin-bottom:13px (X:18-22) | tui-charts-pie 图例配套 |
| .wrong-words-list | flex row wrap; padding:0 10px 10px 6px（原文 padding-bottom/left/right）(X:22-23) | 错词 tag 容器 |
| .tui-safearea-bottom | height:env(safe-area-inset-bottom); width:100% (X:24) | 底部安全区 |
| .record-play | flex 居中; z-index:99 (X:25) | 播放图标位 |
| .record-play-icon | 27px×27px (X:26) | 播放图标 |
| .star-speak | flex row 居中; height:40px; width:100%; z-index:1 (X:27) | 星级行 |
| .icon-star-speak | 26px×26px (X:28) | 跟读星 |
| .tui-new-label-text | 28px×17px; flex 居中; position:absolute; right:0; top:0; border-radius:12% (X:29) | 课程封面右上角标（X 原文 right:0;top:0；依据包注释「左上角标」有误，已按原文改正为右上） |

依赖的全局类（ColorUI，出自 page-frame.html 的 setCssToHead 块，**不在本页 X**）：`.cu-list .grid .col-3` / `.cu-card` / `.cu-item`（课程网格）、`.bg-macron`（角标底色，全局定义 background-color:var(--macron)——同 daka.md 第 2 节口径）、`.text-center` / `.text-white` / `.text-sm` / `.text-cut` / `.text-gray` / `.flex` / `.align-center` / `.margin-top-sm` / `.padding`。本次取证命令 `grep -c "<类名>" unpacked/page-frame.html` 实测命中数：cu-list 22、cu-card 12、cu-item 18、bg-macron 18、text-cut 16、text-gray 13、text-center 28、text-white 27、text-sm 16、align-center 9、margin-top-sm 16、col-3（选择器上下文）若干（如 `col-3 margin-to…`、`col-3\x3e…`）。**仅存在性取证，具体数值未提取**——开发仓写码前需从 page-frame.html 提取上述类定义（遗留问题 3）。

## 3. 事件与逻辑

来源：`chunk_38.appservice.js`（A:141 `__wxRoute="pages/report/report";…;define("pages/report/report.js",…)`；Page 正文全部在 A:142 单行内）。运行环境：`wx.cloud.database({})` 建客户端（A:142@col176），`s`=db.command、`i`=db.command.aggregate、`r`=getApp()；@col~400 require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")（日期格式化工具 formatTime/formatMonth/formatDate/formatHour，模块定义于 app-service.js，同 daka.md 口径）。

页面 data 初始值（A:142@col504 一带，依据包通读）：`share_babyid:""`、`empty_report:!1`、`level_cur:"AA"`、`level_days:0`、`level_progress:0`、`month_speak_num:0`、`month_speak_words:0`、`month_plan_star:0`、`words_right:0`、`words_wrong:0`、`plan_id:""`、`plan_title:""`、`cardBgColor:[]`（【节点树未用，实际用的是 bgColors，W ops 无 cardBgColor 绑定】）、`star_size:36`、`dataset:[{value:1200,color:"#FE7488",name:"熟练通过",rate:"66%"},{value:800,color:"#6E7EB3",name:"仍需练习",rate:"34%"}]`（饼图两扇区默认值，draw 前的占位）、`legend:{show:!1}`、`speakList:[]`、`speak_words_wrong_list:[]`。另有模块级 20 色调色板 `var d=["#FFE6E6","#D6F5E5","#E0F7FA","#FBE9E7","#FCE4EC","#FFF3B0","#FFF9C4","#E8EAF6","#E1F5FE","#F3E5F5","#FFEBEE","#E0F2F1","#FFFDE7","#F3F0FF","#FCE4EC","#E6F7FF","#FFF8E1","#F1F8E9","#FFE0B2","#F8BBD0"]`（本次 grep 实测 #FFE6E6/#F8BBD0 各 1 命中于 A:142）。

### 生命周期

- **onLoad**（A:142@900）：取当前年月 setData（year/month）；getRandomUniqueElements()；URL 参数 `baby_id` 存在 → `share:true` + 记 share_babyid，否则 `share:false`；initData()；setStarSize()。
- **initData**（@1150）= 依次调 getMonthLevels / getMonthCards / getDakaPlan / getStudyCards / getStudyCardsTimes / getSpeakData / getSpeakWordsWrong 七段（本次 grep 19 个方法名全部命中 A:142）。
- 无 onPullDownRefresh 逻辑（C:53 页面窗配置 `enablePullDownRefresh:false`、`onReachBottomDistance:0`，本次 python 解析 C 实测）。

### 事件表

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 计划块 tap | goPlan（@4412，navigateTo@4430） | 跳 `../planDetail/planDetail?plan_id=…&isAdd=1` | — | — |
| 课程格 tap | goCardStudy（@7578，navigateTo@7635） | 跳 `../card/card?id={{item._id}}`（data-id） | — | — |
| 跟读条目 tap | goCardShare（@7323，navigateTo@7510） | 跳 `../share/share?card_id={{speakList[index]._id}}&user_babyid={{babyid}}`（参数名原文 user_babyid，无第二下划线） | — | — |
| 错词 tag 点击 | clickWordExtend（@7678） | word=speak_words_wrong_list[index]._id；先 `words.where({name:word}).get`，命中 → 跳 `../wordExt/wordExt?word=…`（@7901）；未命中 → 兜底 `words.where({include:elemMatch(eq(word))}).get`（@7953），取首条（多条时优先 `level==data.cur_level` 的那条）→ 跳 wordExt（@8235）【易错：本页 data 未定义 cur_level，取值 undefined，仅当单词多 level 命中时退化为取首条】 | words×2 | — |
| 饼图点击 | onClick（@7287） | 仅 console.log，空实现 | — | — |
| 分享好友 | onShareAppMessage（@8292） | `{title:"我的{year}年{month}月英语学习成长报告", path:"/pages/report/report?baby_id="+babyid}`（本次 grep「英语学习成长报告」×2 命中 A:142） | — | — |
| 分享朋友圈 | onShareTimeline（@8494） | 同标题，query=`baby_id=…` | — | — |

### 页面跳转清单（A:142 navigateTo 字面量）

`../planDetail/planDetail?plan_id=`×1（&isAdd=1）、`../share/share?card_id=`×1（&user_babyid=）、`../card/card?id=`×1、`../wordExt/wordExt?word=`×2（clickWordExtend 两分支）。无 reLaunch / switchTab。

### 云函数调用清单

**零云函数、零 wx.request**：`grep -c "callFunction\|wx.request" unpacked/chunk_38.appservice.js` → **0**（本次实测，与依据包一致）。全部数据走客户端云数据库直查/聚合。

### 云数据库直查清单（collection 计数，本次 `grep -o 'collection(.\{0,14\}' | sort | uniq -c` 实测，与依据包 12 处字面量一致）

| 集合 | 次数 | 用途 |
|---|---|---|
| user_data | 7（6 aggregate + 1 where.count） | getMonthLevels 聚合（@col1691）+ 打卡统计 count（@col2511）、getMonthCards、getStudyCards、getStudyCardsTimes、getSpeakData、getSpeakWordsWrong 各 1 次聚合 |
| user_plan | 1 | getDakaPlan `where({baby_id: r.globalData.baby_id})`（@col3877） |
| user_study | 1 | getLevelLeftDays `where({baby_id}).field({level_cur:true}).get()` |
| plan | 1 | getPlanTitle `where({plan_id})`（@col5690）【死代码，见下】 |
| words | 2 | clickWordExtend `where({name})` + `where({include:elemMatch})` |
| （动态）collection(d) | 1 | getLevelLeftDays `collection(getDatabaseLevel()).where({index:gte(0)}).count()`（该级内容集总词数） |

### 计算规则（精确到边界）

- **等级占比 getMonthLevels**（@1652）：user_data 聚合 `match{baby_id:(share?share_babyid:globalData.baby_id), year, month}` → `project{card}` → `unwind $card` → `group{_id:"$card.level", count:sum(1)}` → sort count 倒序。list 空 → `empty_report:true`；`level_cur=list[0]._id`；`level_cur_ratio=round(100*c0/total)%`；恰 2 级时 `level_second_ratio=100-level_cur_ratio`（level_second 复用第一段逻辑的次级名）；>2 级时 `level_second=list[1]._id`、占比=list[1] 计数占比。
- **打卡统计**（getMonthLevels 后半，user_data `where{baby_id,year,month}.count()` @col2511）：`cur_days=new Date().getDate()`（当月已过天数按「今天几号」计）；`month_days=total`（本月有记录天数）；`s=round(100*total/cur_days)` → `month_daka_rate=s%`、`month_daka_star=ceil(s/10)`（10 星制）；`month_avarge=ceil(卡片总数/month_days)` → 调 getLevelLeftDays。
- **剩余天数/进度 getLevelLeftDays**（@2887）：`collection(getDatabaseLevel()).where({index:gte(0)}).count()` 得该级总课数 d；user_study `where({baby_id}).field({level_cur:true})`（投影键为 level_cur 变量值）→ `e=data[0][level_cur]`（该级已学下标数组）；`level_days=floor((d-e.length)/month_avarge)`；`level_progress=(100*e.length/d).toFixed(1)`【toFixed 保留 1 位小数、**不带 % 号**，与 daka 页 ceil+% 口径不同】。
- **本月课程 getMonthCards**（@3372）：user_data 聚合 unwind $card → `group{_id:"$card.id", num:sum("$card.num"), title:first, level:first, cover:first}` → sort num 倒序 → limit 3 → cardList（num=该课本月学习次数，即角标「n次」）。
- **计划卡 getDakaPlan**（@3841）：user_plan `where({baby_id: r.globalData.baby_id})`——**本页唯一不用 share_babyid 的查询**，分享查看他人报告时计划块显示的仍是访问者自己的计划。取 `plan_id`、`plan_title=title`、`plan_days_cur=min(current+1,total)`、`plan_days_normal=day`；遍历 `list[0..min-1][*].finish` 统计完成数 → `plan_finish_rate=round(100*完成/总)%`、`month_plan_star=round(10*完成/总)`（10 星制）。
- **去重课数 getStudyCards**（@4517）：user_data 聚合 unwind $card → `group{_id:"$card.id"}` → `count("uniqueCardIdCount")` → month_cards。
- **开口统计 getStudyCardsTimes**（@4884）：user_data 聚合 `group{_id:null, totalCardTimes:sum("$card_times"), totalSpeakNum:sum("$speak_num"), totalSpeakWords:sum("$speak_words"), speakWordsWrong:sum("$speak_words_wrong")}` → `month_cards_times/month_speak_num/month_speak_words/words_wrong`，`words_right=totalSpeakWords-speakWordsWrong`；随后 `dataset[0].value=words_right`、`dataset[1].value=words_wrong`，`selectComponent("#tui_pie_1").draw(dataset)` 重画饼图（扇区色 #FE7488 熟练通过 / #6E7EB3 仍需练习）。
- **跟读 Top3 getSpeakData**（@5810）：user_data 聚合 `project{speak}` → unwind $speak → `addFields{singleValuesSum:sum("$speak.values")}` → `sort{"speak.id":1, singleValuesSum:-1}` → `group{_id:"$speak.id", maxSingleValuesSum:max, title:first, level:first, stars:first}` → sort maxSingleValuesSum 倒序 → limit 3 → speakList（stars 原样透传，亮星阈值 `citem>3`）。
- **错词榜 getSpeakWordsWrong**（@6414）：user_data 聚合 unwind $speak_words_wrong_list → `match{speak_words_wrong_list:nin([约60个英语功能词停用词：i/me/my/…/how/null])}` → `group{_id:"$speak_words_wrong_list", wordCount:sum(1)}` → sort wordCount 倒序 → limit 10 → speak_words_wrong_list【停用词精确清单未逐词转录，见遗留问题 4】。
- **星级尺寸 setStarSize**（@1350）：`star_size=min(36, floor(0.9*windowWidth/10))`。
- **卡片背景 getRandomUniqueElements**（@1465）：Fisher-Yates 洗牌 20 色调色板取前 4 → bgColors，对应 4 张 honor-card 内联背景（每次进入页面随机）。
- **级别→集合映射 getDatabaseLevel**（@8673）：AA→AA、A→AL、B→BL、C→CL、D→DL、E→EL、F→FL、G→GL、H→HL、I→IL、J→JL、K→KL（与 daka.md 同款映射，本次 grep 方法名命中 A:142）。
- **getPlanTitle**（@5653，plan 集合 where{plan_id}→plan_title）：已定义但 initData 七段未调用，页面流程中为死代码【依据包结论；plan 集合的该查询不产生实际效果】。

### 数据路径易错点（还原后端接口时勿混淆）

1. baby_id 取值二态：7 处 user_data 聚合/统计均走 `share ? share_babyid : globalData.baby_id`；**仅 getDakaPlan 的 user_plan 查询固定用 `r.globalData.baby_id`**（A:142@col3877）。
2. goCardShare 的 user_babyid 传的是当前 babyid（分享模式下=share_babyid，即被查看者），参数名原文 `user_babyid`。
3. clickWordExtend 兜底查询依赖 `data.cur_level`——本页 data 未定义该字段（初始 data 清单无），取值 undefined。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 卡片图标（honor 组） | `https://qianyufang.top/public/yingyu/images/honor/{mic,calendar,book,test}.png` | W 节点树字面量 4 个（W:179/204/250/312） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）（honor/ 目录为本页特有；`grep -rn "honor" audit/*.md` 0 命中，两份探测报告 audit/cdn-probe.md 与 audit/cdn-可达性探测.md 均未覆盖该目录） |
| 跟读亮星 | `…/images/icon/star_icon.png`（citem>3 时） | W:344 三元分支字面量 | ✅ 沿用 daka.md 同 URL 已验证口径（daka.md 第 4 节功能图标组含 star_icon/voice，audit/cdn-probe.md 已将 icon/ 目录规律升级「抽样验证通过」） |
| 跟读灰星 | `…/images/icon/star_gray.png`（citem≤3 时） | W:344 三元分支字面量 | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）（文件名 star_gray 为本页特有；daka 页灰星是 star_icon_grey.png，两者并存，既有 spec/探测均未出现 star_gray 文件名） |
| 跟读播放图标 | `…/images/icon/voice.png` | W:351-353 字面量 | ✅ 同上（daka.md 功能图标组同 URL） |
| 课程封面 | 云数据库 `user_data.card[].cover`（getMonthCards group cover:first 聚合），命名规律未知 | W:287 绑定 + A:142 getMonthCards | ⚠️ 待采集（captures/collections/ 目前仅 units/user_school/words 有全量 jsonl；user_data 仅服务端 count 136,617 无样本，见 captures/collections/_counts.jsonl） |
| 静态资源域名 | `https://qianyufang.top/public/yingyu/...`（与 daka/card/listen 等页同域名） | W 节点树 7 个 URL 字面量 | 域名级已验证（audit/cdn-probe.md），具体 5 个新文件抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |

> 本次核对命令（2026-09-30）：`grep -n "honor\|star_gray\|voice.png\|mic\|calendar\|book.png\|test.png" audit/cdn-probe.md` → 0 命中；`grep -rn "honor" audit/*.md` → 0 命中。即依据包 notes 4 所述「未核对这些 URL 是否在探测覆盖范围内」已完成核对：**honor/×4 与 star_gray.png 不在覆盖内**，star_icon/voice 在 daka.md 已验证组内。

## 5. 分支状态（本页无弹窗）

- **空报告态**：`empty_report=true`（getMonthLevels 聚合空）时显示「本月暂无任何学习记录」；**honor-wall 无 wx:else，四张零值卡片与空态文案同屏渲染**（W:163-173，依据包易错点 6a）。
- **计划块**：`plan_id!=''` 才渲染（W:222-240）；数据源为访问者自己的 user_plan（见第 3 节易错点 1）。
- **第二等级文案**：`level_second` 真值才追加「，{level_second}级占比{level_second_ratio}」（W:270-275）。
- **课程角标**：编译树中角标 view 是 image 的**子节点**（W:287-292），类组合 `bg-macron tui-new-label-text text-center text-white text-sm`，绝对定位右上（X:29）。
- **错词列表**：`speak_words_wrong_list.length>0` 才渲染（W:371-389），wx:key 为空串。
- **饼图**：id=tui_pie_1，初始 dataset 为占位值（熟练通过 1200/66%、仍需练习 800/34%），getStudyCardsTimes 拉到真实值后 draw 替换；legend 初始 `{show:!1}`，draw 后是否置 true 依据包未记 → **待复核**（遗留问题 5）。
- **分享模式**（URL 带 baby_id 进入，share=true）：仅影响 7 处 user_data 查询的 baby_id 取值（改用 share_babyid），页面骨架无 share 分支（W ops 无 share 绑定）；user_plan 计划卡不受影响（见上）。
- **背景随机**：4 张卡背景色每次 onLoad 从 20 色板随机（无固定配色，还原时不可写死）。

## 6. 对账记录（对账员填写，2026-09-30）

- [x] 节点树与原文一致
- [x] 类名抽查 19 处全中（要求≥10）
- [x] 文案逐字一致
- [x] 事件与云数据库调用清单齐全（本页零云函数，collection 计数全中）

**对账方法（独立重推，未读蒸馏工 dump）**：新增 `tools/audit_report_recode.js`（对账专用脚本）——直接从 `unpacked/chunk_38.webview.js` 原文 eval ops 常量表（得 **130 条**，与 spec 口径一致；op_k 对应原文行 19+k，W:18 为 IIFE 头、W:149 为收尾，spec「W:18-149」自洽），再以 53 实参齐备的桩环境执行 `$gwx_XC_32`/`m0` 全文，真实跑出渲染树。`_mz` 索引坑按 SKILL 规则规避，并在 tui-progress 上实证了精确形态：**打印值 -1=无值布尔属性（不占 op、不作递增基准），后续属性真实索引=首个非 -1 打印值+序号**（`['showInfo',-1,'activeColor',18,…]` → op18~22，与 spec 记载吻合）。

**① 节点树**：独立重推树与 spec 第 1 节逐节点一致——honor-page → header（{{year}} 年 {{month}} 月）→ block wx:if empty_report → honor-wall（4 张 honor-card，bgColors[0..3] 内联）→ tui-nomore（无条件）→ tui-safearea-bottom；empty 报告态 honor-wall 无 wx:else ✓；4 个条件（op3/op39/op63/op115）与 4 个 wx:for（cardList/speakList/item.stars 均 wx:key="index"、speak_words_wrong_list wx:key=""）全中；亮星三元 `citem>3 ? star_icon.png : star_gray.png`（op103）✓；角标 view 是 image 子节点（W:287-292）✓；5 个组件属性表（tui-progress 6 属性/tui-rate×2 各 5 属性/tui-charts-pie 5 属性/tui-tag 8 属性/tui-nomore 2 属性）逐属性全中；spec 引言 7 个代表行号（W:160/174/195/220/287/379/396）与原文精确对位。
**② 类名抽查 19 处全中**（grep -n 原文行号）：honor-page(W:19)、header(W:20)、honor-wall(W:25)、honor-card(W:26)、card-header(W:28)、top3(W:34)、subtitle(W:35)、cu-list grid col-3(W:84)、cu-card(W:88)、cu-item(W:90)、bg-macron tui-new-label-text text-center text-white text-sm(W:93)、text-cut text-sm(W:95)、text-gray(W:115)、star-speak(W:117)、icon-star-speak(W:121)、record-play-icon(W:124)、subtitle margin-top-sm(W:126)、padding(W:128)、wrong-words-list(W:135)、tui-safearea-bottom(W:148)；样式侧 X:1-29 共 29 条规则与 spec 第 2 节表格逐条核对一致（含数值），W:427 setCssToHead 原文与 X 数值一一对应。
**③ 文案**：spec 第 1 节全部 24 段文案（含全部插值模板分段）`grep -F` 原文逐字命中；「本月英语学习报告」于 app-config.json 实测命中（本次 `node -e require` 解析 C，`enablePullDownRefresh:false`、`onReachBottomDistance:0` 同实测）。
**④ 事件与云函数**：W 树事件绑定 5 个（bind:tap=goPlan、bindtap=goCardStudy、bindtap=goCardShare、bindclick=onClick、bindclick=clickWordExtend）与 spec 事件表一致；A:142 实测：`onShareAppMessage`/`onShareTimeline` 各 1、分享标题「英语学习成长报告」×2；`grep -c "callFunction\|wx.request"` = **0**（零云函数）；collection 计数 `grep -o "collection(.\{0,14\}"|sort|uniq -c` = user_data 7（6 aggregate+1 where）/ user_plan 1 / user_study 1 / plan 1 / words 2 / collection(d) 1，与 spec 清单全中；navigateTo 5 处（planDetail×1 带 isAdd=1、share×1 带 user_babyid、card×1、wordExt×2）、reLaunch/switchTab=0；20 个方法名全命中（getPlanTitle 仅 1 次=仅定义处，死代码结论成立；initData 3 次）；data 初始值断言全中（empty_report:!1、star_size:36、legend:{show:!1}、level_cur:"AA"、cardBgColor:[]、dataset 占位 1200/800/66%/34%、speakList:[]、speak_words_wrong_list:[]、share_babyid:""、plan_id:""）；`data.cur_level` 引用 1 次/定义 0 次（易错点 3 成立）；`(100*e.length/d).toFixed(1)` 字面量 1 次（level_progress 不带 % 号口径成立）；20 色板 #FFE6E6/#F8BBD0 各 1 命中；组件注册 12 个（app-service.js:53）全中。

- diff 摘要：**零实质 diff**。两条口径备注（非错误）：a) 第 2 节全局类命中数为 `grep -c` **按行**口径（与 spec 声明命令自洽）；若按出现次数口径则 cu-list 114、cu-card 36、cu-item 159、text-cut 18，其余 8 类两口径相同。b) 第 1 节数据绑定全集将 speakList._id 列入——W 节点树内 speakList 实际仅绑定 level/title/stars 与 index（_id 用于 A 侧 goCardShare 跳转参数 `speakList[index]._id`），cardList._id 则确有树内绑定（data-id）。

---

### 蒸馏遗留问题清单（移交对账员/后续）

1. 【抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）】honor/ 组 4 图标（mic/calendar/book/test.png）与 icon/star_gray.png 的 CDN 可达性——本次已核实两份探测报告（audit/cdn-probe.md、audit/cdn-可达性探测.md）均未覆盖（grep honor 0 命中）；star_gray 与 daka 页 star_icon_grey 两文件名并存，探测时一并确认。
2. 【待采集】user_data（card/speak/speak_words_wrong_list 字段结构）、user_plan、plan 集合样本——captures/collections/ 仅有 units/user_school/words 全量 jsonl；user_data/user_plan/plan 仅有服务端 count（136,617 / 2,223 / 2,879，_counts.jsonl）。数据结构以 captures 为权威（AGENTS.md）。
3. 【待提取】全局 ColorUI 类具体数值（cu-list grid col-3 / cu-card / cu-item / bg-macron / text-cut / text-gray 等）——本页仅做存在性取证（grep 命中数见第 2 节），依据包亦指示「写 spec 时需另从全局提取」；开发仓写码前必须补齐。
4. 【已核补录（对账员 2026-09-30）】getSpeakWordsWrong 停用词表：本次从 A:142 提取 `nin([...])` 数组原文，**共 66 项引号词、去重 65 个唯一词**（`"when"` 在数组中重复出现 2 次，函数语义无影响）。完整清单（按原文顺序）：i, me, my, mine, we, us, our, ours, you, your, yours, he, him, his, she, her, hers, it, its, they, them, their, theirs, the, a, an, in, on, at, by, with, for, about, of, to, from, and, but, or, so, because, if, when, is, am, are, was, were, be, been, being, do, does, did, can, could, will, would, shall, should, where, when, who, what, how, null。与依据包「约60个，i/me/my/…/how/null」记载吻合。
5. 【已核（对账员 2026-09-30）】tui-charts-pie 的 legend 显示状态——本次 `grep -o ".\{0,30\}legend.\{0,40\}"` 实测 A:142 中 `legend` 仅出现 1 次（data 初始 `{show:!1}`），**页面侧确无任何 setData 写回 legend.show=true 的代码**；图例是否显示由组件内部对 `legend.show` 的读取决定（组件库行为，非页面逻辑），页面侧结论维持：legend 恒为初始 `{show:!1}`。
6. 【已核（代码逻辑）】getPlanTitle 为死代码（initData 七段未调用，依据包结论，grep initData 命中 3 处与七段清单一致）；本页零云函数（callFunction/wx.request grep=0，本次复测一致）。
7. 【信息记录】chunk_38.appservice.js:1-140 另含一份 $gwx_XC_32 精简镜像（appservice 侧降级渲染），骨架以 webview chunk 为准（AGENTS.md 权威对照表）；对账时如需可对照。
