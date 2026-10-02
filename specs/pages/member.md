---
页名: member
显示名: 会员权益页（VIP 购买/支付双通道）
状态: 已对账 PASS（2026-10-02）
chunk: chunk_35.webview.js / chunk_35.appservice.js
导航栏: 系统栏（标题「会员权益」，深紫底 #1f1e41 白字）
---

# 页面还原规格：会员权益页（pages/member/member）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：**W**=unpacked/chunk_35.webview.js（`wc -l`=231 行，全文件单页；ops 表 `$gwx_XC_29` 在 W:18-80，共 **59 条** ops（下标 0..58，52 条字面 + 7 条 z 自引用，本次 `grep -c "Z(\["`=52、`grep -c "Z(z\["`=7 实测；⚠ 依据包称 60 条，实测 59，以 59 为准）；树构建器 m0 在 W:83-204，W:205 `e_[x[0]]={f:m0,…}` 注册）；**A**=unpacked/chunk_35.appservice.js（`wc -l`=93 行；A:92 为 tui 组件 define 收尾+__wxRoute，Page 主体全在 **A:93 单行**（node 实测 6987 字符），A:94 收尾）；**X**=wxss_out/pages__member__member.wxss（24 行）；**C**=unpacked/app-config.json（node JSON.parse 实测）。
> 定位命令与输出：`grep -l "'./pages/member/member.wxml'" unpacked/chunk_*.webview.js` → **唯一命中 unpacked/chunk_35.webview.js**（本次实测）。
>
> **⚠ 硬规则核验（骨架只认 webview 富树）**：A:15-33 内嵌同名 `$gwx_XC_29` 稀疏副本，本次实测仅 **14 条** `Z([` ops（A:19-32；A:18 为 IIFE 头不含 op），远少于 W 侧 59 条 → 本页骨架依据一律取自 W，不取自 A（AGENTS.md 硬规则，本次复核通过）。
> **⚠ _mz 属性索引坑（相对偏移）**：`_mz(z,tag,['attr1',i1,'attr2',i2,…])` 首属性取 ops 下标 i1，后续属性为 i1+n 连续递增。抽验（本次 W 原文实测）：W:95 `_mz(z,'swiper',['class',7,'indicatorDots',1,'nextMargin',2,'previousMargin',3])` → z[8]=false/z[9]='30px'/z[10]=z[9]='30px'；W:183 `_mz(z,'button',['class',48,'openType',1,'style',2])` → z[49]='contact'/z[50]='width:80%'；W:193 `_mz(z,'button',['bind:tap',54,'class',1,'style',2])` → z[55]=z[48]='bg-white'/z[56]=z[50]='width:80%'。全部命中。
> ops 下标与行号换算规律（本次实测）：字面 ops 下标 N 对应 W 行号 N+19（op0@W:19 … op58@W:77）；z 自引用 ops 下标 10/19/25/39/53/55/56 对应 W:29/38/44/58/72/74/75（W 原文逐行实测：op10=W:29 引 z[9]、op19=W:38 引 z[12]、op25=W:44 引 z[12]、op39=W:58 引 z[8]、op53=W:72 引 z[47]、op55=W:74 引 z[48]、op56=W:75 引 z[50]）。
> A:93 为单行压缩，方法级无法给行号，统一引 A:93，函数体以本次 node 切片实测原文为准（见 §3 各节引文）。

## 1. 页面骨架（节点树）

来源：`chunk_35.webview.js` 的 `$gwx_XC_29`（ops 表 W:18-80，m0 树构建 W:83-204）。`@L`=W 行号：

```
<view class="container">                                                          @L85-86（op0）
├─ <view class="tui-img__box">                                                    @L87-88（op1）
│  └─ <view class="tui-bg-view">                                                  @L89-90（op2）
│     ├─ <image class="tui-img" mode="widthFix" src="https://qianyufang.top/public/yingyu/images/my/member.jpg"/>  @L91-92（op3/op4/op5，URL 字面 ops @W:24）
│     └─ <view class="tui-explain__box">                                          @L93-94（op6）
│        └─ <swiper class="tui-explain-swiper" indicator-dots="{{false}}" next-margin="30px" previous-margin="30px">  @L95（_mz 实测 z[8]=[1,false] 即字面 false、z[9]=z[10]='30px'）
│           └─ wx:for {{tips}} item/index                                         _2z(z,11,…) @L125（op11=@W:30，数据源 tips）
│              └─ <swiper-item class="tui-swiper__item">                          @L99-100（op13）
│                 └─ <view class="tui-explain-item">                              @L101-102（op14，⚠ 依据包骨架漏了此类名，ops z[14] 实有）
│                    └─ <view class="tui-vip__title">{{item.title}}               @L103-106（op15 + 文本 op16=@W:35）
│                       └─ wx:for {{item.desc}} citem/index                       _2z(z,18,…) @L119（op18=@W:37）
│                          └─ <view class="tui-vip__desc">{{citem}}               @L111-114（op20 + 文本 op21=@W:40）
├─ <view class="pay-dialog margin-top">                                           @L129-130（op22）
│  ├─ <view class="tui-attr-box">                                                 @L131-132（op23）
│  │  └─ wx:for {{vipOptions}} item/index                                         _2z(z,24,…) @L156（op24=@W:43）
│  │     └─ <view bindtap="selectVip" class="tui-attr-item {{selectVipType==item.vip?'tui-attr-active':''}}" data-id="{{index}}">  @L135-136
│  │        │   （_mz ['bindtap',26,'class',1,'data-id',2]：z[26]='selectVip'，class 三元 op27=@W:46 实测原文，data-id=op28={{index}}）
│  │        ├─ <view class="padding-left-sm">{{item.text}}                        @L137-140（op29 + 文本 op30=@W:49）
│  │        └─ wx:if {{item.price}}                                               @L142-144（op31=@W:50）
│  │           └─ <view class="tui-original-price tui-gray tui-line-through">{{item.price}}  @L145-148（op32 + 文本 op33）
│  ├─ block wx:if {{timeDown>0}}                                                  @L158-160（op34=@W:53）
│  │  └─ <view class="padding timedown">优惠倒计时：<tui-countdown borderColor="#e54d42" days="{{true}}" is-colon="{{false}}" time="{{timeDown}}"/>  @L161-168
│  │      （文字 op36=@W:55「优惠倒计时：」；tui-countdown _mz @L165 实测 z[37]='#e54d42'/z[38]=[1,true]/z[39]=z[8]=false/z[40]={{timeDown}}）
│  └─ <view class="cu-bar" style="background-color:#07c160">                      @L169（op41 + style op42=@W:61）
│     └─ <view bindtap="clickPay" class="action margin-0 flex-sub text-white solid-left">  @L170（_mz ['bindtap',43,'class',1]，z[43]='clickPay'/z[44]）
│        ├─ <text class="cuIcon-moneybag margin-right-xs"/>                       @L171-173（op45）
│        └─ 点此支付，立即生效                                                     @L174-175（op46=@W:65）
├─ <view class="tui-mtop margin-top">                                             @L181-182（op47）
│  └─ <button class="bg-white" open-type="contact" style="width:80%">在线咨询</button>  @L183-187（_mz ['class',48,'openType',1,'style',2] 实测；文本 op51=@W:70）
├─ block wx:if {{vip<0}}                                                          @L188-190（op52=@W:71）
│  └─ <view class="tui-mtop margin-top">                                          @L191-192（op53=z[47] 复用）
│     └─ <button bind:tap="showWechat" class="bg-white" style="width:80%">添加客服</button>  @L193-198（op54-57）
└─ <view class="padding"/>                                                        @L199-201（op58，收尾空盒）
```

### 1.1 组件注册（页面 json，本次实测）
`__wxAppCode__['pages/member/member.json']`（unpacked/app-service.js 实测原文）：`{"navigationBarTitleText":"会员权益","navigationBarBackgroundColor":"#1f1e41","backgroundColorTop":"#1f1e41","backgroundColorBottom":"#181735","navigationBarTextStyle":"white","usingComponents":{"tui-countdown":"/components/tui-countdown/tui-countdown","tui-nomore":"/components/tui-nomore/tui-nomore"}}` —— 共 2 个。⚠ **tui-nomore 已注册但本页骨架未使用**（预留，与 group 页 tui-modal 同类情形，如实保留勿删）。unpacked/components/tui-countdown/ 仅有 tui-countdown.html/.json（json=`{"component":true,"usingComponents":{}}`，本次实测）；其组件实现与样式不在本页 wxss 内，还原时需另查组件 chunk（见 §6 遗留）。

### 1.2 导航栏
C 实测（node JSON.parse）：`page["pages/member/member.html"].window = {"navigationBarTitleText":"会员权益","navigationBarBackgroundColor":"#1f1e41","backgroundColorTop":"#1f1e41","backgroundColorBottom":"#181735","navigationBarTextStyle":"white"}`。未声明 navigationStyle:custom → **系统导航栏**，深紫底白字标题「会员权益」；页面 body 同底色 #1f1e41（X:1），下拉底 #181735。C.pages 数组含 `pages/member/member`（无 .html 后缀，实测）；不在 tabBar（五项 index/school/word/daka/more，与 group.md 实测一致）。

### 1.3 状态分支汇总
- **vip<0**（已过期/异常态）：显示「添加客服」按钮（@L188-198）。
- **timeDown>0**：显示优惠倒计时条（@L158-168）；timeDown 来源见 §3 计算规则（每月末倒计时 或 拼团 end_time 倒计时）。
- **套餐选中态**：`selectVipType==item.vip` → 追加 `tui-attr-active`（红字+描边，X:18-19）。
- **划线价**：`item.price` 非空才渲染划线原价（@L142-148）。
- 无其他条件渲染；本页无弹窗组件、无分享配置（A:93 实测无 onShareAppMessage）。

## 2. 样式规格

来源：`wxss_out/pages__member__member.wxss`（24 行，本次全文读取）；同内容内嵌 W:231 setCssToHead（本次对照 `[0,40]`=20px 等折算一致）。数值直接当 px 抄，不除 2。

| 类名 | 关键样式（行号 X:） | 用途 |
|---|---|---|
| .container, body | background-color:#1f1e41（X:1） | 页面深紫底 |
| .tui-img / .tui-img__box | width:100%（X:2）；.tui-img display:block;height:auto（X:3） | 会员头图 |
| .tui-bg-view | position:relative;width:100%（X:4） | 头图容器 |
| .tui-explain__box | 绝对定位覆盖头图 top:0/left:0、padding:20px、z-index:1（X:5） | 权益说明浮层 |
| .tui-explain-swiper / .tui-swiper__item | 高宽 100%（X:6）；__item 左右 padding:0 8px（X:7） | 权益轮播 |
| .tui-explain-item | 半透明暖色底 hsla(30,49%,78%,.05)、圆角 6px、字色 #e3c8ad、padding:20px 15px（X:8） | 权益卡片 |
| .tui-vip__title | 字色 hsla(30,49%,78%,.95)、20px、700、底边 0.5px 分隔线、padding-bottom:12px（X:10-11） | 权益标题 |
| .tui-vip__desc | 字色 .85 透明、16px、padding-top:12px（X:12） | 权益描述行 |
| .pay-dialog | 白灰底 #f8f8f8、圆角 5px、宽 80%、居中（X:20） | 支付区容器 |
| .tui-attr-box | font-size:0、margin-bottom:5px（X:14） | 套餐列表 |
| .tui-attr-item | 底/边 #fcedea、圆角 16px、16px 字、高 40px、margin:10px、min-width:70%、padding:10 10px（X:16，⚠ `padding:10 10px` 缺单位为原样，还原时按 10px 10px 处理并标待复核）；wx-text 700、padding-left:6px（X:17） | 套餐项 |
| .tui-attr-active | 底 #fcedea!important、字 #e41f19、700；::after 0.5px #e41f19 描边圆角 20px（X:18-19） | 选中套餐 |
| .tui-gray / .tui-original-price / .tui-line-through | #999（X:21）；16px/line-height:13px/padding:5px（X:22）；删除线（X:23） | 划线原价 |
| .timedown | flex 居中（X:24） | 倒计时条 |

依赖的全局类（ColorUI 等，定义在 page-frame.html 全局 setCssToHead，本次实测）。⚠ 口径说明：以下按「N 行 / M 次」双记 —— N=`grep -c` 命中行数，M=`grep -o` 出现次数（page-frame 为压缩 JS，一行内可多次出现，取值以出现次数 M 为准）：`cu-bar`(2 行/73 次) `action`(30 行/283 次) `margin-0`(2 行/2 次) `flex-sub`(14 行/15 次) `text-white`(27 行/27 次) `solid-left`(2 行/4 次) `cuIcon-moneybag`(2 行/3 次) `margin-right-xs`(4 行/4 次) `margin-top`(108 行/416 次) `padding`(134 行/1853 次) `padding-left-sm`(2 行/2 次) `bg-white`(3 行/3 次)。⚠ `tui-mtop` 在 page-frame.html 计 19 行/23 次（多页复用），本页 X 内**无** .tui-mtop 定义 → 该类值取全局 page-frame 侧依据（本页未核值，待对账复核）。

## 3. 事件与逻辑

来源：`chunk_35.appservice.js`（A:92 define 头、A:93 Page 主体单行 6987 字符、A:94 收尾）。模块头（A:93 行首实测原文）：`a=wx.cloud.database({})`、`i=getApp()`、`o=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（日期工具，同 group 页）、**`n=!1`（支付防重锁）、`s=""`（sessionKey 模块级缓存变量）**。

### data 初始值（A:93，node 切片实测原文）
`vip:0, tips:[], platform:"other", selectVipId:"raz_vip3", selectVipType:3, selectVipMoney:18, selectVipTitle:"一个月VIP", vipOptions:[], payError:!1, payCancel:!1, from_qrcode:0, virtualPay_shenhe:!1`。⚠ `timeDown` **不在 data 初始值**，由 getInitOptions（拼团）或 getTimeDown（月末）动态写入。

### 生命周期（A:93，切片实测）
- **onLoad**：① 参数 `t.qrcode` → `from_qrcode=parseInt(t.qrcode)`；② `wx.getDeviceInfo().platform` + `globalData.vip` 写回；③ 依次调 `getInitOptions() → getSessionKey() → checkOrderPay() → checkVirtualSwitch() → getTimeDown()`（实测原文调用序）。⚠ 无 onShow/onUnload。
- 交叉引用：index 页 chunk_0.appservice.js:151 实测原文 `decodeURIComponent(t.scene)`，scene=="member"→`/pages/member/member?qrcode=1`、scene=="group"→`/pages/member/member?qrcode=2` —— 与本页 from_qrcode 处理吻合（1=会员推广、2=拼团）。

### 事件分发表（骨架绑定见 §1；行为均 A:93）

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| 套餐 tap（@L135） | selectVip | 按 data-id=index 取 `vipOptions[e]` 回填 id/vip/money/title | — | selectVipId/Type/Money/Title |
| 支付条 tap（@L170） | clickPay | 双通道分流（规则见下） | 间接见下 | — |
| button open-type=contact（@L183） | — | 微信原生客服会话（在线咨询） | — | — |
| 添加客服 tap（@L193） | showWechat | `wx.previewImage` 预览客服二维码 `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/wechat.jpg`（A:93 实测原文，1 处） | — | — |

### clickPay 双通道分流（A:93 实测原文）
`from_qrcode>0 || globalData.vip==-2 || payError==true || (payCancel==true && virtualPay_shenhe==false) || (selectVipId=='raz_vip1' && virtualPay_shenhe==false)` 任一成立 → **payHandle（微信支付）**；否则 → **createOrder→virtualPay（虚拟支付 wx.requestVirtualPayment）**。
- **通道 A：payHandle（微信支付）**：防重锁 `n` 置真 3s；showLoading「处理中」；`d="121775250120140"+timestamp`（⚠ 微信支付单号前缀实测，依据包未记）；先 `addOrderData` 落 orders 单据；`c=Math.round(100*selectVipMoney)`（分）→ 云函数 payOrder `{title, money:c, tag:s(时间戳)}`；success → `wx.requestPayment(result.payment)`，success → showLoading「支付确认中...」+ `pollOrderStatus(d,0)`；fail → errMsg 含 "cancel" → toast「支付已取消」，否则 toast「支付出错」。
- **通道 B：createOrder→virtualPay（虚拟支付）**：防重锁 1s；`outTradeNo="fenjitu_"+timestamp`，先 addOrderData；签名串 `JSON.stringify({offerId:"1450483660", buyQuantity:1, env:0, currencyType:"CNY", productId:selectVipId, goodsPrice:Math.round(100*selectVipMoney), outTradeNo, attach:"productId="+selectVipId})`（实测原文）→ 云函数 generateVirtualPaySign `{uri:"requestVirtualPayment", signData, sessionKey:s, appKey:"PfTGbwGvawV8nbvT3UFuOPbwVWhTEANZ"}`（⚠ appKey 明文实测）；code==0 → `wx.requestVirtualPayment({signData, paySig, signature, mode:"short_series_goods"})`；签名失败 → payError=true + toast「获取签名失败，请再次尝试」。
- **虚拟支付成功**（handleVirtualPay）：`globalData.vip=selectVipType` → 连发 3 个云函数（updateVirtualVIP / handleDeliverGoods / updateMemberVip，见清单）→ toast「会员已生效」→ 1.5s 后 `wx.reLaunch("../index/index")`；失败 → `updateOrdersFail`（orders update errCode/errMsg），errCode==-2 → payCancel=true + toast「支付取消」，否则 payError=true + toast「支付遇到点问题，可再试一次」。
- **pollOrderStatus(outTradeNo, cnt)**：cnt>10 → toast「确认超时，请联系客服」；否则 orders `where({outTradeNo}).get()`，`order_status=='finished'` → `globalData.vip=该单 vip` + toast「会员已生效」+ 1.5s reLaunch 首页；未完成 → **1.2s 后递归（实测 1200ms；fail 分支 1500ms）**，无独立次数上限字段（cnt+1 递归，>10 截止）。

### 云函数调用清单（wx.cloud.callFunction，A:93；name 计数本次实测各 1、callFunction 共 6 处）

| 云函数 | 触发 | data 载荷（实测原文口径） | 备注 |
|---|---|---|---|
| getSessionKey | onLoad | `{code}`（wx.login 取得） | 回填模块变量 `s`=sessionKey，供虚拟支付签名 |
| payOrder | payHandle | `{title:selectVipTitle, money:Math.round(100*selectVipMoney), tag:时间戳}` | 微信支付下单 |
| generateVirtualPaySign | virtualPay | `{uri:"requestVirtualPayment", signData, sessionKey, appKey:"PfTGbwGvawV8nbvT3UFuOPbwVWhTEANZ"}` | 虚拟支付签名 |
| updateVirtualVIP | 虚拟支付成功 | `{baby_id, unionid, openid, vip, money, title, time, tag, platform, outTradeNo:"fenjitu_"+ts}` | addMembersVIP 内 |
| handleDeliverGoods | 虚拟支付成功 | `{outTradeNo}` | addMembersVIP 内 |
| updateMemberVip | 虚拟支付成功 | `{type:"vipAdd", baby_id, vip, openid}` | addMembersVIP 内 |

共 6 个云函数名、6 次调用（依据包口径 6 函数，本次计数吻合）。

### 云数据库直连清单（客户端 API；`.collection(` 计数实测 6 处：init×2、orders×4）

| 集合 | 方法 | 条件/载荷（实测原文口径） | 用途 |
|---|---|---|---|
| init | doc("init_id").get | → `tips`（权益说明数组）、`money_setting`（→vipOptions）、`group_sale`（拼团价，end_time 倒计时） | getInitOptions |
| init | doc("pay_id").get | → `virtualPay_shenhe` | checkVirtualSwitch |
| orders | where({baby_id}).orderBy("tag","desc").limit(1).get | 最近一单：`order_status=='finished'` → from_qrcode=1；`errCode==-2` → payCancel=true；其他 errCode → payError=true；无 errCode → payCancel=true | checkOrderPay |
| orders | add | `{_id:<单号>, baby_id, unionid, date:globalData.today_date, money, vip:selectVipType, title, id:selectVipId, platform, tag:时间戳, time:"Y-M-D H:M", outTradeNo}`；⚠ 微信支付单号 `_id="121775250120140"+ts`，虚拟支付单号 `"fenjitu_"+ts`（同值写入 outTradeNo） | addOrderData（两通道共用，实测 1 处定义） |
| orders | where({outTradeNo}).get | 轮询 `order_status=='finished'` | pollOrderStatus |
| orders | where({outTradeNo}).update | `{errCode, errMsg}` | updateOrdersFail |

字段结构以 captures/collections/*.jsonl 为唯一真实样本；⚠ init / orders 两集合**当前无抓包样本**（captures/collections/ 实测仅 _counts/units/user_school/words 四份），本清单为纯代码侧形态，待未来采集对账。

### 计算规则（必须精确到边界）
- **timeDown（默认）**：getTimeDown 实测原文 `Math.floor((new Date(年,月+1,1,0,0,0)-now)/1e3)` —— 距**下月 1 日 0 点**的秒数（本月末倒计时）。
- **timeDown（拼团覆盖）**：getInitOptions 内 `i=Math.floor((group_sale.end_time-now)/1e3)`；当 `from_qrcode==2 && i>0` → **vipOptions 整体替换为 `[group_sale]`** 并选中第 0 项，timeDown=end_time 倒计时；否则仅取 `vipOptions[0].money` 为默认金额（实测原文）。
- **支付金额**：微信支付与虚拟支付均为 `Math.round(100*selectVipMoney)`（元→分）。
- **from_qrcode 二次置位**：checkOrderPay 查到最近一单已 finished → `from_qrcode=1`（此后 clickPay 恒走微信支付通道）。
- **防重锁**：模块变量 `n`；payHandle 3s / createOrder 1s 后解锁（实测原文）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 会员头图 | `https://qianyufang.top/public/yingyu/images/my/member.jpg`（域名 qianyufang.top，目录 images/my/），硬编码 ops 字面量，1 处 | ops 下标 5（W:24 实测原文） | ⚠️ 待真机验证 |
| 客服二维码 | tcb 桶 `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/wechat.jpg`（目录 public/yingyu/），A:93 字符串 1 处 | showWechat 实测原文 | ⚠️ 待真机验证 |

本页无音频资源、无本地缓存图片依赖；两条远程 URL 均为全路径硬编码，无命名规律可推广，样本各 1 处。

## 5. 弹窗 / 分支状态

- 本页**无自定义弹窗**（骨架无 modal 类节点，A:93 无 showModal/showActionSheet，实测）。
- **loading 全集**（wx.showLoading，计数实测）：「加载中」×1（getInitOptions）、「处理中」×2（payHandle/createOrder）、「支付确认中...」×1（requestPayment success）。
- **toast 全集**（计数实测各 1 处，除注明）：「支付已取消」（微信支付 cancel）、「支付出错」（微信支付 fail）、「确认超时，请联系客服」（轮询>10 次）、「会员已生效」×2（轮询 finished icon:success / 虚拟支付 success icon:none）、「获取签名失败，请再次尝试」duration:1500、「支付取消」icon:error（虚拟支付 errCode==-2）、「支付遇到点问题，可再试一次」；另有 console.log「登录失败！」（非 toast）。
- **支付失败状态机**：payError（可重试，走微信支付通道）/ payCancel（用户取消；仅当 virtualPay_shenhe==false 时改走微信支付）两开关 + from_qrcode 置位，见 §3 计算规则。
- **审核开关**：`virtualPay_shenhe`（init 集合 pay_id 单据）为真时：payCancel 与 raz_vip1 不再强制走微信支付（即虚拟支付可用）；为假时这两类场景走微信支付。
- ⚠ **原版疑似死代码（如实记录）**：`checkSessionKey` 函数已定义（A:93 实测 1 处）但**从未被调用**（`checkSessionKey(` 调用计数实测 0），sessionKey 仅在 onLoad 经 getSessionKey 拉取一次、过期无续期逻辑。还原时勿顺手修复。

## 6. 对账记录（对账员填写，2026-10-02 独立重推）

- [x] 节点树与原文一致
- [x] 类名抽查 22 处全中
- [x] 文案逐字一致
- [x] 事件与云函数调用清单齐全
- diff 摘要（3 处注记级瑕疵，均不影响结论）：

**核对方法（本次实测命令）**：`grep -l "'./pages/member/member.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_35.webview.js；`grep -c "Z(\["`=52 / `grep -c "Z(z\["`=7（W 侧，52+7=59 ops，与 §0 一致）；A 侧稀疏副本 `Z([` 实测 14 条；`grep -o "callFunction" A | wc -l`=6、`grep -o "name:\"…\"" | sort | uniq -c` → 6 函数名各 1；`grep -o "\.collection("` =6（init×2/orders×4，`grep -o "collection(\"…\")" | uniq -c` 复核）；`grep -o "wx.showLoading|showToast"` =4/8 且标题逐一 uniq 与 §5 全集吻合；`node -e JSON.parse(app-config.json)` → member window 四件套与 pages/tabBar 均实测。

1. **节点树**：W:83-204 m0 全树逐节点重推，25 个节点（含 2 个 wx:for 循环体、3 个 wx:if 分支、swiper/循环双重嵌套）与 §1 树形图逐一吻合；9 处 `_mz` 属性相对偏移全部实算命中（含 W:136 三元 class=op27、W:165 tui-countdown 四属性、W:193 bind:tap 复用 z[48]/z[50]）。骨架无出入。
2. **类名抽查 22 处**（≥10 达标）：container/tui-img__box/tui-bg-view/tui-img/tui-explain__box/tui-explain-swiper/tui-swiper__item/tui-explain-item/tui-vip__title/tui-vip__desc/pay-dialog margin-top/tui-attr-box/tui-attr-item+三元 tui-attr-active/padding-left-sm/tui-original-price tui-gray tui-line-through/padding timedown/cu-bar/action margin-0 flex-sub text-white solid-left/cuIcon-moneybag margin-right-xs/tui-mtop margin-top/bg-white/padding —— 均在 W ops 表原位命中（op0..op58），X 侧样式数值逐行与 W:231 setCssToHead 折算一致（[0,40]=20px 等）。
3. **文案**：4 段字面文案「优惠倒计时：」「点此支付，立即生效」「在线咨询」「添加客服」逐字命中（W:55/65/70/76）；绑定文本 item.title/citem/item.text/item.price（op16/21/30/33）与导航栏「会员权益」（C + member.json）一致。
4. **事件/云函数**：骨架 4 处绑定（selectVip@L136、clickPay@L170、open-type=contact@L183、bind:tap showWechat@L193）与 §3 分发表一一对应；6 云函数名各出现 1 次（getSessionKey/payOrder/generateVirtualPaySign/updateVirtualVIP/handleDeliverGoods/updateMemberVip），载荷字段逐字核对 A:93 原文无误（含 appKey、121775250120140 前缀、fenjitu_ 前缀、1450483660）；轮询 1200/1500ms、防重锁 3e3/1e3、Math.round(100*…)×2 处均实测；checkSessionKey 定义 1 处、调用 0 处（死代码结论复核成立）；onLoad 五连调顺序原文吻合；chunk_0.appservice.js:151 scene 交叉引用（member?qrcode=1 / group?qrcode=2）复核命中。

**对账员发现的 spec 注记瑕疵（3 处，建议蒸馏工下次修订）**：
- §0 行 17「z 自引用 ops 下标 8/9/12/44/53/55/56」**有误**：实测自引用 op 下标为 **10/19/25/39/53/55/56**（分别引用 z[9]/z[12]/z[12]/z[8]/z[47]/z[48]/z[50]，W:29/38/44/58/72/74/75）；原列出的 8/9/12 是被引用下标、44 是字面 op（op44='action margin-0…'），属混写。所附 7 个 W 行号本身正确，自引用总数 7 正确。
- §0 行 15 稀疏副本 ops 行号引「A:18-31」，实测 `Z([` 位于 **A:19-32**（14 条计数正确，行号区间偏 1）。
- §2 行 94 全局类计数混用口径：cu-bar(2)/flex-sub(14)/text-white(27)/solid-left(2)/cuIcon-moneybag(2)/bg-white(3) 为 `grep -c` **行数**（如 cu-bar 实为 2 行 73 次出现、flex-sub 14 行 15 次），而 tui-mtop「23 处」为 `grep -o` **出现次数**（19 行 23 次）。数字各自属实但口径不一，取值时以出现次数为准更稳。
- 另记（非 diff）：X:9 `.tui-ios-title`、X:13 `.tui-vip__btn` 在 wxss 中存在但骨架未使用，§2 表按"页面所用类"口径未列，如实记录即可；A:93 模块头另有 `a.command,a.command.aggregate` 与两条 @swc/runtime require，§3 未列（不影响还原）。

**蒸馏工修订（2026-10-02）：已按注记 ①②③ 更正** —— ① §0 行 17 z 自引用下标更正为 10/19/25/39/53/55/56（分别引用 z[9]/z[12]/z[12]/z[8]/z[47]/z[48]/z[50]，unpacked/chunk_35.webview.js W:29/38/44/58/72/74/75 原文逐行核实）；② §0 行 15 稀疏副本 ops 区间更正为 A:19-32（A 原文核实，A:18 为 IIFE 头不含 op）；③ §2 行 94 全局类计数统一为「N 行 / M 次」双记格式并加口径说明（page-frame.html 本次逐类实测补齐两口径，取值以出现次数为准）。三处均为注记级更正，未改动任何还原结论。

---

## 遗留问题清单（移交对账员/后续）

1. **tui-countdown 组件实现未蒸馏（本页未做，仅定位）**：组件实现 logic 在 unpacked/chunk_7.appservice.js（W 侧树 `./components/tui-countdown/tui-countdown.wxml` @chunk_7.appservice.js:34，类名 ops `tui-countdown-class tui-countdown-box` @:19，本次 grep 实测）；组件样式已提取为 wxss_out/components__tui-countdown__tui-countdown.wxss（13 行，本次确认存在：.tui-countdown-item 0.5px 描边圆角 3px 等）。组件属性 props/行为细节**待复核**（属组件库蒸馏范畴，未在本次任务内）。
2. **`.tui-mtop` 数值缺失**：本页 X 无定义、page-frame.html 命中 23 处未逐一定位取值（§2 已标待复核）；group 页经验（X:156=60px 与 X:242=13px 双定义）提示该类可能多值，需以本页实际生效值核 page-frame 依据。
3. **`.tui-attr-item` 的 `padding:10 10px` 缺单位**（X:16 原样）：还原口径按 10px 10px 处理，但原版即如此，**待对账裁决**是否原样保留。
4. **依据包 ops 计数 60 vs 实测 59**：W:18-80 全量清点 52 字面 + 7 z 引用 = 59（下标 0..58 无缺口），以 59 为准，对账员复核。
5. **checkSessionKey 死代码**（§5）：确认是否还原（建议：规格书如实记录、前端仓自行取舍）。
6. **init / orders 集合无 captures 样本**：tips/vipOptions/group_sale/money_setting 与订单单据字段结构均为代码侧形态，待动态采集后按 §3 清单对账（wxapp-cloud-export 风控纪律）。
7. **appKey 明文**（`PfTGbwGvawV8nbvT3UFuOPbwVWhTEANZ`）与微信支付单号前缀 `121775250120140` 均为前端硬编码（A:93 实测），还原时照抄，勿视为脱敏占位符。
