---
页名: index
显示名: 首页（英语分级兔）
状态: 已对账（2026-10-01 对账员独立复核，PASS 含 2 处勘误，见第 6 节）
chunk: chunk_0.webview.js / chunk_0.appservice.js
导航栏: custom（页面自行对齐胶囊，标题「英语分级兔」不渲染系统栏）
---

# 页面还原规格：首页（pages/index/index）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_0.webview.js（384 行），A=unpacked/chunk_0.appservice.js（页面逻辑全部在 A:151 单行内，`__wxRoute="pages/index/index"` 在 A:150 行尾；本蒸馏将 A:151 提取为临时文件后逐项 grep/截取实证，未入仓），X=unpacked/wxss_out/pages__index__index.wxss（55 行），C=unpacked/app-config.json（python json 解析）。
> 定位命令（本次重跑）：`grep -l "'./pages/index/index.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_0.webview.js。webview 与 appservice 恰好同为 chunk_0。
> 节点树机械核验（本次重跑）：`node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_0.webview.js XC_0 ./pages/index/index.wxml` → exit=0，displayMode A/B/C 三种输出一致，与第 1 节骨架吻合（script 对复杂插值节点显示为 `<undefined>`/`wxVkey=undefined`，为工具显示局限，以 W ops 段为准）。
> 对依据包的行号勘误（本次回原文证实）：依据包称 wxml 入口注册在 W:53、挂载在 W:147——实际 `var x=['./components/privacyPopup/privacyPopup.wxml','./pages/index/index.wxml']` 在 **W:137**，挂载 `__wxAppCode__['pages/index/index.wxml']=$gwx_XC_0(...)` 在 **W:382**；W:53/54 是 ops 段开头（agree/disagree 事件名），W:147 是节点树中段的 `_rz` 行。页面模板 ops 实际延伸到 **W:53-132**（依据包写「ops 段 53-98 行」偏短）。

## 1. 页面骨架（节点树）

来源：`chunk_0.webview.js` 的 `$gwx_XC_0`（定义 W:1，页面模板节点树 m1 起于 W:189，privacy-popup 组件标签绑定在 W:192 `_mz(z,'privacy-popup',['bind:agree',0,'bind:disagree',1],…)`，入口注册 W:137 + 挂载 W:382；组件 privacyPopup 自身模板 m0/ops W:19-52 为 weui-half-screen-dialog 结构，属组件 spec）。页面模板 ops 关键锚点（均为本次 grep 实测行号）：

```
<page>
  <privacy-popup bind:agree="agree" bind:disagree="disagree"/>   (W:192 绑定；事件名 ops W:53/54)
  <view class="container">                                       (W:55)
    1. <view class="tui-header1" style="margin-top:{top}px">     (W:56, style 动态 W:57)
       ├ <view bindtap="clickSearch" class="tui-icon-box3">      (W:58)
       │   └ <image class="icon-grid" src="https://qianyufang.top/public/yingyu/images/icon/search.png"/>  (W:60-61)
       ├ <view bindtap="goListen" class="tui-icon-box1">         (W:62-63)
       │   └ <view class="header-text">磨耳朵</view>             (W:64-65)
       └ <view bindtap="clickIBHS" class="tui-icon-box2"
            wx:if="{{isNoStudy==false}}"
            style="background-color:{{ibhs?'#ff9b6a':'#DCDCDC'}};">艾宾浩斯</view>
                                                                  (W:66-69, 文案 W:71)
    2. <view class="tui-tabs margin-top-sm">                      (W:70 附近, margin-top-sm=W:70/72 z[11] 复用)
       └ <scroll-view class="tui-scroll-h" scrollX scrollWithAnimation
            scrollIntoView="tab_{currentTab}" showScrollbar=false> (W:73-75)
         └ wx:for={{level_arr}} wx:for-index="index" bindtap="tabSelect"  (W:76-78)
           └ <view class="tui-tab-item">                          (W:79)
             └ <text class="tui-tab-item-title {{currentTab==index?'tui-tab-item-title-active':''}}"/>
                                                                  (W:80-82, active 三元 W:82)
    3. <view class="cu-list grid col-3 margin-top-sm">            (ops 段, 紧邻 W:85 之前)
       ├ wx:if={{ibhs==false}} → wx:for={{lists}} bindtap="goCardPage"   (W:85-88)
       │   └ <view class="cu-card" data-id="{{item.id}}">         (W:89-90)
       │     └ <view class="cu-item card-shadow">                 (W:92)
       │       ├ <image style="width:100%;height:320rpx;" src={{item.cover}}/>  (W:93-94)
       │       ├ 角标 <text class="bg-macron tui-new-label-text text-center text-white text-xs">{{item.num}}次</text>
       │       │                                                  (W:96-97; 「仅学过才显示」见注③)
       │       ├ 进度条 <view class="tui-new-label-progress"><view class="bg-macron" style="width:{动态}%"/></view>
       │       │                                                  (W:99-101, 宽度表达式见遗留#3)
       │       └ <text class="text-cut text-df padding-xs">{{index+1}}. {{item.title}}</text>  (W:102-103)
       └ wx:if={{lists_ibhs.length!=0}} → 同构卡片（艾宾浩斯模式）  (W:104-117)
           角标类 bg-macron tui-new-label-text-ibhs text-center text-white text-xs  (W:114)
           文案 "{{item.index+1}}. {{item.num}}"（num 形如「2次，7天前」，A:151 showIBHS 拼接）
    4. 空态分支 wx:if={{ibhs==true&&lists_ibhs.length==0}}：       (W:119 附近, && 判定)
       <view class="padding flex flex-direction text-center margin-top-xl">  四段灰字：
       「当前暂无符合艾宾浩斯学习模式的内容」(W:121)
       「可再次点击艾宾浩斯按钮，切换到正常列表」(W:123)
       「该模式会按照1 2 4 7 15 30天的规律进行提醒」(W:125)
       「可根据科学规律进行复习，加深记忆」(W:127)
    5. <tui-nomore backgroundColor="#f7f7f7" text="暂时没有更多了"/>  (W:130-132, 由 {{loadding}} 控制 W:128)
```

注：
- ① 提取脚本对 header-text 内 text 与 wx:for 首支输出 `<undefined>`/`wxVkey=undefined`，为工具对复杂插值的显示局限；磨耳朵/艾宾浩斯/搜索图标/tabSelect/goCardPage 等均已在 W ops 段找到对应 Z([...]) 行（W:61/65/67/71/78/88 本次 grep 实测），二者交叉印证。
- ② 组件依赖：privacyPopup（bind:agree/bind:disagree，W:192）、tui-nomore（backgroundColor/text，W:130-132）。入口注册 `var x=['./components/privacyPopup/privacyPopup.wxml','./pages/index/index.wxml']` 在 W:137。
- ③ 依据包称角标「{{item.num}}次，仅学过才显示」——ops 段该 text 未见到外层 wx:if（W:96-97 连续），「仅学过」条件**待复核**（遗留#4）；num 初始为 0（A:151 data）。

### 状态分支

- **艾宾浩斯开关三态**：按钮本体 `wx:if={{isNoStudy==false}}`（W:66，未登录/未初始化时不显示）；激活色 `{{ibhs?'#ff9b6a':'#DCDCDC'}}`（W:68-69）；列表区 `ibhs==false` 走普通网格（W:85），`lists_ibhs.length!=0` 走艾宾浩斯网格（W:104），`ibhs==true && lists_ibhs.length==0` 走空态文案（W:119-127）。
- **tab 选中态**：`tui-tab-item-title-active` 由 `currentTab==index` 三元切换（W:82）。
- **首屏默认 AA 级 12 本内置**（A:151 data.lists，不先请求库）：cover 形如 `cloud://cloud1-1gzyz2y5d29d9d43.636c-cloud1-1gzyz2y5d29d9d43-1313118183/public/cover/pet.jpg` 等（本次 grep 实测 12 条 cover 字面量），title 如 Pet / Plains animal / … / Insects，id 如 AA-1、AA-61、AA-81。

## 2. 样式规格

来源：`wxss_out/pages__index__index.wxss`（55 行，数值直接当 px，不除 2；行号=本次 grep/sed 实测，与依据包所记略有出入处以实测为准）。

| 类名 | 关键样式 | 用途 | 行号 |
|---|---|---|---|
| .container | padding-bottom:env(safe-area-inset-bottom) | 页面容器 | X:1 |
| .tui-header1 | align-items:flex-start（与 .tui-tabs 共有 display:flex） | 头部 | X:8-9 |
| .tui-tabs | flex:1; flex-direction:column; overflow:hidden; position:relative | tab 区外框 | X:10 |
| .tui-scroll-h | background-color:#fff; box-sizing:border-box; padding:8px 0; white-space:nowrap; width:100% | 横向滚动条 | X:11 |
| .tui-tab-item | display:inline-block; padding:0 6px | 单个 tab | X:12 |
| .tui-tab-item-title | background-color:#f5f6f7; border-radius:50px; color:#666; font-size:16px; font-weight:500; min-width:30px; padding:5px 16px; text-align:center; transition:all .2s ease | tab 文字 | X:13 |
| .tui-tab-item-title-active | background:#ff9b6a!important; box-shadow:0 3px 8px rgba(255,152,0,.35); color:#fff!important; font-weight:700!important; transform:scale(1.05) | tab 选中态（主题色） | X:14 |
| .tui-new-label | height:32px; position:absolute; right:0; top:0; width:32px | 角标底 | X:16 |
| .tui-new-label-text | right:0px（height:17px;width:28px 与 free 类共有，见 X:18-19） | 「N次」角标 | X:18-19 |
| .tui-new-label-text-ibhs | height:17px; width:64px; border-radius:12%; position:absolute; right:0; top:0 | 艾宾浩斯角标（更宽） | X:20 |
| .tui-new-label-progress | bottom:0; height:8px; left:0; opacity:.8; position:absolute; width:100% | 进度条轨道 | X:21 |
| .tui-icon-box1 | background-color:#d3d3d3; width:65px（与 box2 共有 border-radius:20px 等见 X:32） | 磨耳朵按钮 | X:31-32 |
| .tui-icon-box2 | background-color:#585858; width:75px | 艾宾浩斯按钮 | X:33 |
| .tui-icon-box3 | background-color:#dcdcdc; width:38px | 搜索按钮 | X:34 |
| .header-text | color:#282828; font-size:13px; font-weight:520; margin-left:4px | 「磨耳朵」文字 | X:35 |
| .icon-grid | height:21px; width:21px | 搜索图标 | X:36 |
| .card-shadow | box-shadow:0 2px 4px rgba(0,0,0,.05) | 书卡阴影 | X:42 |

依赖的全局类（ColorUI，page-frame.html setCssToHead，不在本文件）：`.bg-macron` / `.text-center` / `.text-white` / `.text-xs` / `.text-cut` / `.text-df` / `.padding-xs` / `.margin-top-sm` / `.margin-top-xl` / `.flex` / `.flex-direction` / `.text-grey` / `.cu-list` / `.grid` / `.col-3` / `.cu-item`。
⚠ 异常（沿依据包 notes，本次未重查归属）：extract_gwx_tree 输出尾部把本页同源 setCssToHead 标注为「pages/share/share.wxss（chunk_42.webview.js:303）」，疑似工具对公共样式来源的标注偏差；样式数值以 X 为权威（AGENTS.md 权威依据表）。

## 3. 事件与逻辑

来源：`chunk_0.appservice.js` A:151（单行，本次提取临时文件逐项 grep 实证）。头部：`i=wx.cloud.database({})`、`n=i.command`、`o=i.command.aggregate`、`l=getApp()`、`d=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（formatTime/formatHour，require 在 A:150）。**数据读全部客户端直查云数据库，仅 2 个云函数**：`grep -c "callFunction({name:"`=5 → updateMemberVip×4（type：vipNeedPay / vipExpire / vipUpdate+vipAdd 于 addMembers 内 / vipAdd）、getPhoneticMap×1（本次 uniq -c 实测）。

data 初始值（A:151 实测）：`level_arr=["AA(108本)","A(102本)","B(102本)","C(102本)","D(96本)","E(90本)","F(84本)","G(84本)","H(60本)","I(60本)","J(60本)","K(60本)"]`、`currentTab:0`、`currentLevel:"AA"`、`lists`（AA 级 12 本内置）、`lists_total:[108,102,102,102,96,90,84,84,60,60,60,60]`、`ibhs:!1`、`pageIndex:[0×12]`、`isNoStudy:!0`。

| 事件 | 处理函数 | 行为概述 | 云函数/云数据库 | 写回 |
|---|---|---|---|---|
| onLoad | onLoad | formatTime 存 globalData.today_date → initSystemUI()（wx.getMenuButtonBoundingClientRect 算 height/top 对齐胶囊，本次 grep 实测存在）→ initLists() → processEntry(t)（等 app 的 babyInfoReadyCallback 后 initUserAfterLogin）→ setTimeout 800ms 后 getPhoneticMap()（`setTimeout(function(){a.getPhoneticMap()},800)` 本次实测） | init(doc phonetic_config) | globalData.today_date, data.top/height |
| onShow | onShow | 处理 globalData.cardNumUpdate / quizPassUpdate 标志：cardNumUpdate→清标志+setData（截断于 `{isN…`，推断 isNoStudy:!1，遗留#4）；quizPassUpdate→清标志+getCardNum()（本次实测两标志各 2 处） | — | isNoStudy※, 卡数 |
| 搜索 icon tap（W:58） | clickSearch | `wx.navigateTo({url:"../search/search"})`（A:151 实测） | — | — |
| 磨耳朵 tap（W:62） | goListen | `wx.navigateTo({url:"../listen/listen"})`（实测） | — | — |
| 艾宾浩斯 tap（W:67） | clickIBHS | 切换 ibhs；true 时 showIBHS() 聚合查询（见下） | user_study 聚合 | ibhs, lists_ibhs |
| tab tap（W:78） | tabSelect | 设 currentTab + `scrollLeft:(id-1)*60`（A:151 实测）→ getCurLevel() → getLists() | 对应级集合 | currentTab, currentLevel, scrollLeft※ |
| 书卡 tap（W:88） | goCardPage | `wx.navigateTo({url:"../card/card?id="+item.id})`（实测） | — | — |
| onReachBottom | onReachBottom | 守卫 `12*pageIndex[currentTab]>lists_total[currentTab] || !1==ibhs` → 仅普通模式且未到末页时 pageIndex+1 + setTimeout getLists()（A:151 原文实测，见计算规则） | 对应级集合 | pageIndex[currentTab], loadding |
| privacyPopup agree/disagree（W:192） | agree / disagree | 仅 console（依据包；函数存在本次 grep 实测，函数体未逐字展开） | — | — |
| 分享 | onShareAppMessage | `title:"分享你一个英语绘本分级阅读小程序"`, `path:"/pages/index/index"`, `imageUrl:"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png"`（A:151 逐字实测） | — | — |
| 朋友圈 | onShareTimeline | 同 title，`imageUrl:"https://qianyufang.top/public/yingyu/fenjitu.jpg"`（实测） | — | — |

### 云数据库查询规格（A:151 实测）

- **getLists()**（普通列表分页）：`i.collection(getDatabaseLevel()).where({index:n.and(n.gte(12*pageIndex), n.lt((pageIndex+1)*12))}).orderBy("index","asc").field({_id:!1,id:!0,title:!0,cover:!0}).get(...)` → success 后 `lists=lists.concat(res.data)`、loadding:!1，lists 非空则 getCardNum()；AA 级且 pageIndex==0 时先 `setData({lists:[]})` 清内置默认书目。
- **getCardNum()**：`i.collection("user_study").doc(l.globalData.baby_id).field({[currentLevel]:!0}).get()` → 非空走 showUserData()（写各书 num/progress）。
- **showIBHS()**（艾宾浩斯聚合）：`i.collection("user_study").aggregate().match({baby_id}).project({IBHS:o.filter({input:"$"+currentLevel, as:"item", cond:o.or([num==1&&now-time>864e5, num==2&&>1728e5, num==3&&>3456e5, num==4&&>6048e5, num==5&&>1296e6, num==6&&>2592e6])})}).end()`（六段阈值本次逐段实测）；结果拼 `num+"次，N天前"`（N∈30/15/7/4/2/1，按 d>30/15/7/4/2 降档）→ lists_ibhs。
- **checkTodayDataExist()**：`i.collection("user_data").where({baby_id, date:globalData.today_date}).field({date:!0}).get()` → globalData.todayDataExist 布尔。
- **checkTimestamp(链接校验)**：`i.collection("members").where(n.or([{tag:eq(a)},{history:elemMatch({tag:eq(a)})}]))`（实测前段）。
- **init 版本缓存**：`i.collection("init").doc("phonetic_config").get()` → version 与 Storage `PHONETIC_VERSION` 比对，变更则 callFunction getPhoneticMap → 缓存 `PHONETIC_MAP`/`PHONETIC_VERSION`（键名本次 grep 实测）。

集合调用计数（本次 `grep -o "\.collection(\"…\")" | uniq -c` 实测）：AA×1、members×4、user_study×3、user_data×1、init×1——与依据包一致。

### 计算规则（精确到边界）

- **等级→集合映射 getDatabaseLevel()**：display 级 A~K ↔ 库名 AL,BL,CL,DL,EL,FL,GL,HL,IL,JL,KL（11 个库名字面量本次 grep 各 1 处实测）；AA 直用 AA 库。
- **分页边界**：每页 12 条；`onReachBottom` 守卫为 `12*pageIndex[currentTab] > lists_total[currentTab] || !1==ibhs && (加载…)`（`||` 低于 `&&`，即**已越过末页或处于艾宾浩斯模式则不加载**）；查询窗口 `index ∈ [12*pageIndex, 12*(pageIndex+1))`。
- **VIP 到期天数 checkVipExpire**（A:151 逐段实测 `N==l.globalData.vip&&(e=D)`）：vip 3→30 天、4→183 天、2→365 天、5→730 天、6→91 天、7→7 天、8→15 天；超期置 `globalData.vip=-2` 并云函数 updateMemberVip(type:vipExpire)。
- **试用限额 checkTrialLimit**（A:151 原文实测）：`g>=30` → setVipNeedPay(-1)；`g>=25 && u>=3` → setVipNeedPay(-1)；`u>=5 && g>=15` → setVipNeedPay(-1)（g=records.length、u=total_days，变量名以原文为准；与依据包一致）。
- **addMembers 定价**（A:151 逐字实测）：vip1=「永久VIP」198、vip2=「一年VIP」99、vip3=「一个月VIP」18、vip4=「六个月VIP」69；同函数内 updateMemberVip(type:vipUpdate+vipAdd)。
- **显示序号**：普通模式卡片序号=`index+1`（W:103）；艾宾浩斯模式序号=`item.index+1`（W:117）。
- **额外导航出口**（依据包未列，A:151 grep 实测）：`/pages/member/member?qrcode=1` 与 `?qrcode=2`（VIP 购买/续费）；`wx.reLaunch({url:"/pages/index/index"})`（1e3ms 延时，用于登录态刷新）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 书封面 | `cloud://cloud1-1gzyz2y5d29d9d43.636c-cloud1-1gzyz2y5d29d9d43-1313118183/public/cover/<slug>.jpg`，slug=title 小写连字符（pet / plain-animal / sea-animal / farm-animal / jungle-animal / zoo / rainforest-animal / pond-animal / gobi-animal / these-birds / baby-animal / insect）；数据库文档 cover 字段同规律（getLists field 含 cover） | A:151 内置 12 条 cover 字面量（本次 grep 计 12 处 `cloud1-…/public/cover/…`）；W:93 {{item.cover}} | 样本 n=12（代码内置）；⚠️ CDN 可达性待真机验证（旁证：audit/cdn-probe.md 2026-09-29 探测 24/24 可达，本次未重测） |
| 转发图（好友） | 固定 URL：`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png` | A:151 逐字实测 | ⚠️ 待真机验证 |
| 转发图（朋友圈） | 固定 URL：`https://qianyufang.top/public/yingyu/fenjitu.jpg` | A:151 逐字实测 | ⚠️ 待真机验证 |
| 搜索图标 | 固定 URL：`https://qianyufang.top/public/yingyu/images/icon/search.png` | W:61 逐字实测 | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

- **privacyPopup**（隐私弹窗组件）：页面根节点挂载（W:192），agree/disagree 回调仅 console（依据包，函数存在实测）；组件模板为 weui-half-screen-dialog 结构（W:19-52 ops，属组件 spec 不展开）。
- **加载态**：wx.showLoading title 实测共 4 种：「初始化」「加载中」「学习数据读取中」「获取中」（A:151 grep uniq -c 实测）；「VIP会员已到期」「VIP会员已生效」为 **wx.showToast(icon:"none")**（对账勘误 B，见第 6 节）；底部 tui-nomore 由 `{{loadding}}` 控制（W:128-132）。
- **VIP 弹窗出口**：navigateTo `/pages/member/member?qrcode=1|2`；到期 **toast「VIP会员已到期」**（showToast icon:none，对账勘误 B）+ 1e3ms 后 reLaunch 回首页。
- **登录链**：onLoad→processEntry→等 app 的 babyInfoReadyCallback→initUserAfterLogin（members 校验链：checkTimestamp / checkVipStatus / checkVipExpire / checkTrialLimit，均本次 grep 实测存在）。
- **tabBar**：index 为第 1 项（C python 解析实测 tabBar 5 项：index/school/word/daka/more）。

## 6. 对账记录（对账员填写）

- [x] 节点树与原文一致
- [x] 类名抽查 17 处全中（≥10 达标）
- [x] 文案逐字一致
- [x] 事件与云函数调用清单齐全
- diff 摘要：**PASS**。2 处 spec 表述勘误（不改变结论，已回原文证实）：

**对账方法（本次独立重跑，未复用蒸馏过程）**

1. chunk 定位：`grep -l "'./pages/index/index.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_0.webview.js（384 行）。appservice 同为 chunk_0，`sed -n '150p'` 行尾见 `__wxRoute = "pages/index/index"`，页面逻辑全在 A:151（13434 字节，已提取临时文件 `__audit_index_a151.js` 逐项 grep）。
2. 节点树：Read W:50-383 原文 + 重跑 `node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_0.webview.js XC_0 ./pages/index/index.wxml` → exit=0，A/B/C 三态输出一致，骨架与 spec 第 1 节逐层吻合（privacy-popup→container→tui-header1(3 按钮)→tui-tabs(scroll-view+wx:for tab)→cu-list grid col-3(卡片网格+艾宾浩斯同构分支+空态四段文案)→tui-loadmore→tui-nomore）。`<undefined>` 为工具对复杂插值显示局限（spec 注①属实）。m1 绑定原文实证：`_mz(z,'privacy-popup',['bind:agree',0,'bind:disagree',1],…)` W:192；三组 `wx:for` 的 `_2z(z,23/33/52,…,'item','index','index')` W:237/248/278；卡片 `data-id`（W:227 `'id',3`）与艾宾浩斯卡 `data-id`+`data-index`（W:248）。
3. 类名抽查 17 处（≥10）：`.container/.tui-header1/.tui-tabs/.tui-scroll-h/.tui-tab-item/.tui-tab-item-title/.tui-tab-item-title-active/.tui-new-label/.tui-new-label-text/.tui-new-label-text-ibhs/.tui-new-label-progress/.tui-icon-box1/.tui-icon-box2/.tui-icon-box3/.header-text/.icon-grid/.card-shadow` 全部在 wxss_out/pages__index__index.wxss 命中且仅 1 次（`grep -c "^\.<类>{"` 均 =1）；另抽 15 条关键声明逐字命中（含 `background-color:#ff9b6a!important`、`min-width:30px`、`width:64px`、`opacity:.8`、`#d3d3d3/#585858/#dcdcdc`、`font-weight:520`、`scale(1.05)`、`0 2px 4px rgba(0,0,0,.05)` 等）。⚠ 一处规格书笔误：`.tui-tab-item-title` 背景实为 **`background-color:#f5f6f7`**（X:13 实测），spec 写作 `background:#f5f6f7`，值同、属性名异。
4. 文案逐字：空态四段、「磨耳朵」「艾宾浩斯」「暂时没有更多了」（W ops 段 grep 实测）、「分享你一个英语绘本分级阅读小程序」（A:151 实测，onShareAppMessage/onShareTimeline 各 1 处）、「英语分级兔」（app-config `page["pages/index/index.html"].window.navigationBarTitleText` python 解析实测，navigationStyle=custom 同源）——全部逐字命中。
5. 事件与云函数清单：`grep -o "callFunction({name:…" | uniq -c` → **updateMemberVip×4（vipAdd/vipExpire/vipNeedPay/vipUpdate 各 1）+ getPhoneticMap×1**，与 spec 一致；集合计数 AA×1 / members×4 / user_study×3（doc+aggregate+where 各 1）/ user_data×1 / init×1，一致。导航出口 navigateTo×5（card?id= / listen / search / member?qrcode=1 / member?qrcode=2）+ reLaunch×1（/pages/index/index，1e3ms 延时），与 spec 3/5 节一致。关键公式逐字复核：`scrollLeft:(t.currentTarget.dataset.id-1)*60`、分页窗 `a=12*t.data.pageIndex[t.data.currentTab]`，`e=(t.data.pageIndex[t.data.currentTab]+1)*12`、守卫 `12*pageIndex[currentTab]>lists_total[currentTab]||!1==ibhs&&…`（运算符优先级与 spec 3 节判定一致）、getDatabaseLevel 11 级映射 AL~KL 逐级命中、VIP 天数 7 对（3→30/4→183/2→365/5→730/6→91/7→7/8→15）逐条命中、定价 `永久VIP o=198 / 一年VIP 99 / 一个月VIP 18 / 六个月VIP 69` 命中、试用限额 `g>=30`、`g>=25&&u>=3`、`u>=5&&g>=15` 三条件命中、艾宾浩斯 filter 六段阈值 864e5/1728e5/3456e5/6048e5/1296e6/2592e6 逐段命中、`次，N天前` N∈{1,2,4,7,15,30} 六种字面量命中、`PHONETIC_MAP`/`PHONETIC_VERSION`、`doc("phonetic_config")`、`setTimeout(…getPhoneticMap(),800)`、`getMenuButtonBoundingClientRect`、`globalData.today_date=d.formatTime(new Date)`、cardNumUpdate/quizPassUpdate 各 2 处——全部与 spec 一致。

**勘误（对账员改 spec 两处）**

- 勘误 A（本节上方第 3 点）：`.tui-tab-item-title` 的 `background:#f5f6f7` 应为 `background-color:#f5f6f7`（spec 第 2 节表格该单元格已照原文改）。数值不变，不影响还原。
- 勘误 B（本节上方复核段）：spec 第 3 节「加载态」与第 5 节把「VIP会员已到期」「VIP会员已生效」归入 wx.showLoading——原文实为 **`wx.showToast({title:"VIP会员已生效",icon:"none"})` 与 `wx.showToast({title:"VIP会员已到期",icon:"none"})`**（A:151 grep 上下文实测）；wx.showLoading 全页仅 4 种 title：初始化/加载中/学习数据读取中/获取中。spec 第 3 节「加载态」行与第 5 节「VIP 弹窗出口」行的归类已按原文更正。

**遗留确认（不改 verdict）**：遗留#3 进度条宽度仍为 ops 拼接（W:101 `width:`+z[45]+z[16][3]），但 A:151 已实证数据来源为 `lists[<index>].progress=Math.floor(100*pass.length/总数)+"%"`（showUserData 内实测），spec「推断 {{item.progress}}%」方向正确；遗留#4 角标 wx:if 外层条件在 W:96-97 连续 ops 中确实未见独立 wx:if（bUB/oVB 双虚拟节点仅包进度条视图，W:254-260 实测），「仅学过才显示」的表述维持待复核。

## 附：本次蒸馏对依据包的勘误与补充（均已回原文实证）

1. **【勘误·行号】** wxml 入口注册 W:53→**W:137**、挂载 W:147→**W:382**、页面 ops 段「53-98」→**W:53-132**（W:53/54 实为 agree/disagree 事件名 ops）。前言已述。
2. **【补充】** 依据包未列的导航出口：`/pages/member/member?qrcode=1`、`?qrcode=2`、`reLaunch /pages/index/index`（A:151 grep 实测）。
3. **【确认】** 云函数计数 updateMemberVip×4 / getPhoneticMap×1、集合计数 AA×1/members×4/user_study×3/user_data×1/init×1、艾宾浩斯六段阈值、VIP 天数表、定价四档、试用限额三条件、分享双图 URL、`scrollLeft:(id-1)*60`、getLists 分页窗口——均本次独立复测与依据包一致。
4. **【待复核】** 进度条宽度动态表达式（W:101 `width:`+z[45] 拼接，推断 {{item.progress}}%）与角标「仅学过才显示」的 wx:if 条件未逐字展开（遗留#3/#4）；wxss 行号与依据包出入处以 X 实测为准（如 .card-shadow 在 X:42 而非依据包所记 44）。