---
页名: vip
显示名: VIP 管理后台（管理员收款/发卡）
状态: 对账通过（diff-1 长按事件已在席修正，2026-10-02）
chunk: chunk_46.webview.js / chunk_46.appservice.js
导航栏: 系统栏（标题「」空串）
---

# 页面还原规格：VIP 管理后台（管理员收款/发卡）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
>
> ⚠️ **敏感页**：本页是管理员收款后台——onLoad 按 openid 白名单校验，非白名单强制 `wx.reLaunch("/pages/index/index")`；含收款金额统计与 phone 集合写入。还原与测试时严禁绕过该校验（证据：`wxss_out/_vip_appservice_body.js:2`，`d="oq1hh46zrYD75GEZZ3MawlHUA5ns"`，onLoad 内 `d!=t.globalData.openid?wx.reLaunch(...)`）。

## 1. 页面骨架（节点树）

来源：`unpacked/chunk_46.webview.js` 的 `$gwx_XC_41`（定义 :1 起，完整 :1-:325；映射 `:138 var x=['./pages/vip/vip.wxml']`，`:325 __wxAppCode__['pages/vip/vip.wxml'] = $gwx_XC_41('./pages/vip/vip.wxml')`）。

来源核验（本会话实跑）：
- `grep -c "$gwx_XC_41" unpacked/chunk_46.webview.js` → **11**（富树，327 行文件）
- `grep -c "$gwx_XC_41" unpacked/chunk_46.appservice.js` → 11，但该文件仅 **54 行**（同名稀疏副本，**已排除**，不作骨架依据）
- 树提取命令：`node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_46.webview.js XC_41 ./pages/vip/vip.wxml`（exit=0，三套 displayMode 树一致），输出 `wxss_out/_vip_tree.json`
- 文案求值：`tools/extract_gwx_ops.js` 求值全部 114 条 ops（z[0]..z[114]）

骨架（手机竖屏，displayMode=1；B/C 两套树逐节点相同）：

```
<page>
├─ view.header-card                          （绿底收款卡，3 列）
│   ├─ view.card-item > text.label + text.value
│   │     文案「收款 ¥{{money_today}}」        ops :22「收款」/:24「¥」+{{money_today}}
│   ├─ view.card-item > text.label + text.value
│   │     文案「安卓 ¥{{money_android}}」      ops :27「安卓」/:29 +{{money_android}}
│   └─ view.card-item > text.label + text.value
│         文案「苹果 ¥{{money_apple}}」        ops :32「苹果」/:34 +{{money_apple}}
├─ view.flex-sub.text-center                 （4 个分享按钮）
│   ├─ view.solid-bottom.text-xl.padding
│   │     └─ button[bindtap=click, openType=share, class=bg-blue light, style=width:60%]
│   │           data-id="1"，文案「永久VIP」    ops :39 / :42
│   ├─ view.solid-bottom.text-xl.padding.margin-top
│   │     └─ button[同上] data-id="2"，文案「一年VIP」  ops :46 / :49
│   ├─ view.solid-bottom.text-xl.padding.margin-top
│   │     └─ button[同上] data-id="4"，文案「六个月VIP」 ops :53 / :56
│   └─ view.solid-bottom.text-xl.padding.margin-top
│         └─ button[同上] data-id="3"，文案「一个月VIP」 ops :60 / :63
├─ tui-list-cell[unlined=true, hover=false]   （号码录入行，ops :64-:77）
│   └─ view.thorui-input-border.thorui-flex__between
│       ├─ input[bindinput=writePhone, class=thorui-input, type=number,
│       │          placeholder=请输入号码(:68), placeholderClass=thorui-phcolor]
│       ├─ text[bind:tap=checkInfoPhone, class=text-bold text-blue] 文案「查询」(:73)
│       └─ view.margin-left > switch[bindchange=switchVirtualPay,
│                                       checked={{virtualPay_shenhe}}(:76), class=blue(:77)]
├─ view.flex.text-center.margin-top          （5 个发卡按钮，ops :78-:103）
│   ├─ view[bindtap=submitPhone, class=bg-green light margin-sm, style=width:20%]
│   │     data-id="3"，文案「一月」  (:79-:83)
│   ├─ 同上 data-id="6"，文案「三月」 (:86-:88)
│   ├─ 同上 data-id="4"，文案「半年」 (:93)
│   ├─ 同上 data-id="2"，文案「一年」 (:98)
│   └─ 同上 data-id="1"，文案「永久」 (:103)
├─ view.cu-list.menu-avatar.padding           （反馈列表，wx:for={{lists_question}} :105，
│                                              wx:for-index="index" :106，ops :104-:118）
│   └─ 项内（wx:for/virtual 分支，树:50-51；根节点见 §6 diff-1 更正）：
│       ├─ view[bind:tap=reply, bind:longpress=delete, data-id={{index}},
│       │            class=padding bg-blue light margin-bottom-sm]
│       ├─ 文本「{{index}}+1 ID:{{item._openid}}」   ops :111-:112
│       ├─ 文本「提交时间：{{item.time}}」            ops :114
│       ├─ 文本「反馈内容：{{item.content}}」         ops :116
│       └─ 文本「VIP：{{item.vip}}」                 ops :118
└─ tui-modal[fadeIn=true, bindcancel=hideModal(:119), custom=true, show={{modalReply}}(:121)]
    └─ view.tui-modal-custom(:122)
        ├─ view.tui-prompt-title.text-bold(:123)  文案「问题ID:{{index}}+1」 ops :124
        ├─ input[bindconfirm=input(:125),
        │        class 三元「tui-modal-input ?!modalReply…tui-hidden-input…」(:126),
        │        placeholder=请输入问题回复(:127)]
        └─ button[bind:tap=submitReply(:128), class=bg-blue, height=72rpx(:130),
                  shape=circle(:131), size=28(:132)]  文案「提交」(:133)
```

### 状态分支
- `checked={{virtualPay_shenhe}}`：开关初值来自 onLoad 云数据库读取（见 §3）。
- `modalReply`：回复弹窗显隐，由 reply() 置 true、hideModal()/submitReply() 置 false。
- `tui-hidden-input`：input class 三元拼接——`!modalReply` 为真时附加 `tui-hidden-input`（width:0，隐藏真实输入框，ops :126）。
- 反馈列表 `wx:if`/virtual 分支：树提取输出 virtual 节点（`wxss_out/_vip_tree.json` 树 :50-51），具体分支条件 ops 中未见第二支文案 → **分支差异待复核**。
- 非白名单 openid：整页不可达（onLoad 直接 reLaunch），无降级 UI。

## 2. 样式规格

来源：`wxss_out/pages__vip__vip.wxss`（16 行，rpx→px 已折算，数值直接当 px）。与 `unpacked/chunk_46.webview.js:327` 的 `setCssToHead`（path:"./pages/vip/vip.wxss"）逐值一致（本会话实跑 sed :327 核对，源为 rpx 原值 12/30/40/60/10/60/28/10/36/26/800/34/20/1/32/30/50/10/40/26/30/120/12）。

⚠️ `wxss_out/_vip_tree.json` 尾部（:175-191）打印的 css 标注为「pages/share/share.wxss 由 chunk_42.webview.js:303 setCssToHead 还原」——运行时沙箱残留的上一个 setCssToHead 调用，**非本页样式，勿引用**。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .header-card | background-color:#07c160; border-radius:6px; margin-bottom:15px; padding:20px 0; flex | 绿底收款卡容器 |
| .header-card .card-item | color:#fff; flex:1; flex-direction:column; position:relative | 三列之一 |
| .header-card .card-item:first-child::after | width:0.5px; height:60%; background:hsla(0,0%,100%,.2); right:0; top:20% | 列分隔线 |
| .header-card .card-item .icon | 30px×30px; opacity:.9; margin-bottom:5px | 图标位（骨架未见 icon 节点，**待复核**） |
| .header-card .card-item .label | font-size:14px; margin-bottom:5px | 「收款/安卓/苹果」 |
| .header-card .card-item .value | font-size:18px; font-weight:700 | 金额 |
| .tui-popup-scroll | font-size:13px; height:400px | 弹窗滚动区 |
| .tui-modal-custom | text-align:center | 回复弹窗容器 |
| .tui-prompt-title | font-size:17px; padding-bottom:10px | 「问题ID:…」标题 |
| .tui-modal-input | border-bottom:0.5px solid #e6e6e6; font-size:16px; margin:15px auto 25px; width:80% | 回复输入框 |
| .tui-hidden-input | width:0 | 隐藏真实输入框 |
| .tui-page__hd/__bd/__title/__desc | padding:5px / margin-top:20px; padding-bottom:40px / 20px 400 / #888 13px | Thorui 页头组（骨架未见引用，**待复核**） |
| .input-title | flex-shrink:0; min-width:60px; padding-right:6px | 输入行标题（同上，**待复核**） |

依赖的全局类（ColorUI/Thorui，不在本页 wxss，属 page-frame.html 全局 setCssToHead，本 ask 未展开提取）：`flex-sub` `text-center` `solid-bottom` `text-xl` `padding` `margin-top` `margin-sm` `bg-blue light` `bg-green light` `flex` `text-bold` `text-blue` `text-black` `margin-left` `cu-list menu-avatar` `tui-list-cell` `thorui-input-border` `thorui-flex__between` `thorui-input` `thorui-phcolor` `blue`(switch)。

## 3. 事件与逻辑

来源：`unpacked/chunk_46.appservice.js:53`（`;__wxRoute = "pages/vip/vip"…define("pages/vip/vip.js",…)`），逻辑体已切片至 `wxss_out/_vip_appservice_body.js`（共 3 行，全部逻辑在 :2，本会话逐行读核）。工具模块 `require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（formatTime/formatHour，body:2 行首）。

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| onLoad | onLoad | 白名单校验（`d!=openid` → `wx.reLaunch("/pages/index/index")`）；通过则 countMoneyToday + getFeedback + 读 init/pay_id | —（直连 DB） | virtualPay_shenhe |
| button share | click | 按 data-id 设置分享文案/图/vip 等级 i（1/2/3/4） | — | o/n/i（模块级变量） |
| 分享回调 | onShareAppMessage | path=`/pages/index/index?manage_vip=<openid>&vip=<i>&tag=<Date.now()>`；title=o；imageUrl=n。**VIP 发放走分享链接参数，不调云函数** | — | — |
| input | writePhone | setData phone | — | phone |
| tap查询 | checkInfoPhone | `phone` 集合 where({phone}) 查：无 → toast「该号码不存在」；used → 弹窗「<phone> VIP<vip>已绑定 <bind_date>」；否则「<phone> 未绑定VIP<vip>」 | —（直连 DB） | — |
| switch | switchVirtualPay | 取反后写 `init` 集合 doc("pay_id") update virtualPay_shenhe | —（直连 DB） | virtualPay_shenhe |
| tap发卡 | submitPhone | openid≠白名单 → navigateBack；phone 长度≠11 → toast「长度须为11位」；查 phone 集合：无记录 → add({vip:i, title, phone, used:false, date:`formatTime formatHour`, time:Date})，toast「创建成功 <i>」；已有 → showModal「号码已录入，<已开通/未开通><vip>」确认后 doc(_id).update({used:false, vip:i, title, date, time})，toast「更新成功 <i>」 | —（直连 DB） | phone 集合 add/update |
| 长按反馈卡片 | delete | showModal「删除反馈」，confirm 后 callFunction | **deleteFeedback** data:{doc_id}（`_vip_appservice_body.js:2`） | lists_question 本地 splice |
| tap回复 | reply | setData modalReply:true, index=dataset.id | — | modalReply/index |
| modal取消 | hideModal | modalReply:false | — | modalReply |
| input确认 | input | setData replyContent | — | replyContent |
| tap提交回复 | submitReply | replyContent 空 → toast「回复不能为空」；否则 showLoading，callFunction 后 hideLoading + toast「处理完成」+ 本地 splice 移除该项 | **feedbackNotice** data:{doc_id, openid, content, reply, reply_time}（`_vip_appservice_body.js:2`） | modalReply:false, lists_question |

### 计算规则（必须精确到边界）
- **今日收入统计** countMoneyToday：`orders` 集合 `where({date: t.globalData.today_date, order_status:"finished"})`；逐条 `money` 累加，`platform=="ios"` 计入 money_apple，**其余（含 android 与未知值）全部计入 money_android**——money_today=全部之和，两者之和=today。累加用 addFloatWithTwoDecimals：`(round(100a)+round(100b))/100` 再 toFixed(2) 取 Number（两位小数浮点容错）。结果集为空时**不 setData**（保持初始 0）。证据：`_vip_appservice_body.js:2`。
- **VIP 等级映射** checkTitle（分享等级 i 与发卡 data-id 共用数值域）：1=永久VIP、2=一年VIP、3=一个月VIP、4=六个月VIP、6=三个月VIP；缺省返回「VIP会员」。注意：**i=5 无映射**（树中发卡按钮也只有 3/6/4/2/1 五个，无 5）。证据：`_vip_appservice_body.js:2`。
- **发卡标题与分享标题不一致**：分享文案 click() 为 1=「点击即可成为永久VIP会员」/2=「1年」/3=「1个月」/4=「6个月」（data 初始值「点击即可获取VIP权益」，`_vip_appservice_body.js:2` 行首 `o="点击即可获取VIP权益"`）；checkTitle 为 1=永久VIP/2=一年/3=一个月/4=六个月/6=三个月。
- **分享图床规律**：`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/vip/vip<N>.png`（N=1/2/3/4，click 内 4 处字面量）。
- **无 touch 等其余事件**；页面事件全集=click/writePhone/checkInfoPhone/switchVirtualPay/submitPhone/delete(longpress)/reply/hideModal/input/submitReply/onShareAppMessage。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| VIP 分享图 | `<tcb环境后缀>.tcb.qcloud.la/public/vip/vip<N>.png`，N∈{1,2,3,4} 与分享等级一一对应 | click 函数 4 处字面量（`_vip_appservice_body.js:2`），样本 4 条全命中 | 已验证（字面量，未请求 CDN） |

本页无其他图片/音频资源引用。

## 5. 弹窗 / 分支状态

- 回复弹窗 `tui-modal`（show={{modalReply}}）：标题「问题ID:<index+1>」+ 隐藏式 input（tui-hidden-input width:0，placeholder「请输入问题回复」）+ 圆形「提交」按钮。
- 系统弹窗（wx.showModal/wx.showToast）：删除反馈确认「删除反馈/内容」；号码已录入「号码已录入，<状态><vip>」confirmText=「重新开通」；信息查询两种文案；toast「长度须为11位」「该号码不存在」「回复不能为空」「创建成功 <i>」「更新成功 <i>」「删除成功」「处理完成」。
- 虚拟支付开关 switch：受 `init/pay_id.virtualPay_shenhe` 驱动，onLoad 读入，切换即写回。

## 6. 对账记录（对账员填写，2026-10-02 本会话独立复核）

- [x] 节点树与原文一致（重跑 `node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_46.webview.js XC_41 ./pages/vip/vip.wxml`，exit=0；A/B/C 三套树逐节点相同；与 spec §1 骨架逐节点比对，唯一偏差 diff-1 已在席修正，见下）
- [x] 类名抽查 23 处全中（脚本解析 webview.js:19-133 全部 ops 字面量 z[0]..z[114]，对 spec 骨架出现的 23 个类串逐一在字面量集合中命中；唯一"未命中" `tui-modal-input ` 实为 ops :126 的拼接前缀 `[3,'tui-modal-input ']`（尾随空格）+三元 `tui-hidden-input`，原文 `chunk_46.webview.js:126`，非缺失）
- [x] 文案逐字一致（收款/安卓/苹果/永久VIP/一年VIP/六个月VIP/一个月VIP/请输入号码/查询/一月/三月/半年/一年/永久/提交时间：/反馈内容：/VIP：/` ID:`/问题ID:/请输入问题回复/提交 全部在 ops :22-:133 命中；复合文案按 ops 结构拆分核对：:112 `index`+1` ID:`+item._openid、:114「提交时间：」、:116「反馈内容：」、:118「VIP：」、:124「问题ID:」）
- [x] 事件与云函数调用清单齐全（callFunction 仅 deleteFeedback/feedbackNotice 2 处，其余为客户端直连云数据库——init/orders/feedback/phone 四个集合；入 api.md 时按 AGENTS 规则区分）
- diff 摘要：**diff-1（唯一偏差，已在席修正）**——反馈项根节点实际绑定 `bind:tap=reply + bind:longpress=delete + data-id={{index}}`（`chunk_46.webview.js:258`，`_mz` base 偏移语义经 `page-frame.html` `_mz` 运行时核实），原 spec 误写为独立「bindtap=delete」按钮。§1 骨架行、§3 事件表「tap删除反馈→长按反馈卡片 delete」、§3 事件全集已同步改为与原文一致。除此之外节点树/23 处类名/全部文案/2 处 callFunction + 4 集合直连清单均与原文一致。**结论：修正后对账通过（PASS）**，无遗留待裁决项。

**核对命令**（本会话实跑）：
- `grep -l "'./pages/vip/vip.wxml'" unpacked/chunk_*.webview.js` → 仅 `chunk_46.webview.js`
- `grep -c "\$gwx_XC_41"` → webview.js=11（327 行富树）/ appservice.js=11（54 行稀疏副本，已排除，符合 AGENTS 硬规则）
- `wc -l` → chunk_46.webview.js 327 行 / chunk_46.appservice.js 54 行
- `node tools/extract_gwx_tree.js ...` → exit=0，输出与 spec §1 骨架一致
- 类名/文案脚本核对 + `grep -o "callFunction({name:\"[a-zA-Z]*\""` / `grep -o "collection(\"[a-zA-Z_]*\")"` 计数核对
- wxss 数值：webview.js:327 setCssToHead（path:"./pages/vip/vip.wxss"）rpx 原值 20 组 rpx/2=px 全对上 `wxss_out/pages__vip__vip.wxss`（脚本核验 20 pairs 0 bad）
- 导航栏：`app-config.json` 中 `pages/vip/vip.html":{"window":{}}` 为空对象，页面无本地 window 配置；生效值来自 `global.window`（navigationBarTitleText:"" 空串、系统栏、navigationBarBackgroundColor:#f1f1f1）——frontmatter「系统栏（标题「」空串）」成立，补证据于此。

### diff 明细

**diff-1（已在席修正 §1/§3）**：反馈列表项根节点（`chunk_46.webview.js:258` 原文）为
`var xECD=_mz(z,'view',['bind:longpress',88,'bind:tap',1,'class',2,'data-id',3],[],eBCD,tACD,gg)`。
`_mz` 运行时语义（`page-frame.html` 内 `function _mz`：首属性偏移即 base，其后值索引 = base+offset）逐属性解出：
- `bind:longpress` → z[88] = `'delete'`（webview.js:107）
- `bind:tap` → z[89] = `'reply'`（:108）
- `class` → z[90] = `'padding bg-blue light margin-bottom-sm'`（:109）
- `data-id` → z[91] = `{{index}}` 绑定表达式（:110 `[[7],[3,'index']]`）

**结论**：树上不存在单独的删除按钮；反馈卡片同一节点 **bind:tap=reply（进回复弹窗）+ bind:longpress=delete（长按删反馈）+ data-id={{index}}**。原 spec §1 写成「bindtap=delete(:107), bindtap=reply(:108)」（触发方式错、且漏 data-id），§3「tap删除反馈 delete」已改为「**长按**反馈卡片 → delete」（showModal「删除反馈」content 取 `lists_question[index].content`，confirm 后 callFunction deleteFeedback——逻辑体行为描述本身正确，仅触发方式错）。§1/§3 已同步修正为与原文一致。

### 复核通过的补充证据
- `wxss_out/_vip_tree.json:51` 的 `<virtual wxVkey=undefined>` 与 ops :105（`wx:for={{lists_question}}`）一致，spec §1「分支差异待复核」标注保留（wfor 运行时 `page-frame.html` 内 `function _2z(z,opindex,func,env,scope,global,father,itemname,indexname,keyname)` 走 `wfor`，`item/index` 命名与 spec 一致）。
- `checkTitle` 映射 1=永久VIP/2=一年VIP/3=一个月VIP/4=六个月VIP/6=三个月VIP、i=5 无映射（`_vip_appservice_body.js:2`，本会话重读核）。
- 分享 path 拼接 `manage_vip=<openid>&vip=<i>&tag=<Date.now()>` 与 §3 一致（body:2）。
- 收款统计：`orders` where({date,order_status:"finished"})，ios→money_apple，**其余全入 money_android**（含 android 与未知值），空结果不 setData——与 §3 边界一致（body:2）。
- 导航栏标题：`app-config.json` `global.window.navigationBarTitleText=""`（空串），vip 页 window:{} 无覆盖 → frontmatter 成立。
