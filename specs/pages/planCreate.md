---
页名: planCreate
显示名: 创建打卡计划
状态: 对账通过（待验收；2 处注记已修）
chunk: chunk_17.webview.js / chunk_17.appservice.js
导航栏: 系统栏（标题「创建打卡计划」）
---

# 页面还原规格：创建打卡计划（pages/planCreate/planCreate）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_17.webview.js，A=unpacked/chunk_17.appservice.js，X=unpacked/wxss_out/pages__planCreate__planCreate.wxss，C=unpacked/app-config.json。A 页面逻辑全部在 A:135 单行压缩代码内（7,658 字符（8,063 字节），本次会话已整行导出通读并逐项 grep 核实，函数级行号统一记 A:135）。
> 定位命令与输出（本会话实际执行）：`grep -l "'./pages/planCreate/planCreate.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_17.webview.js；`grep -n "__wxAppCode__\['pages/planCreate/planCreate.wxml'\]" chunk_17.webview.js` → W:355（`$gwx_XC_9` 注册）；`grep -n "pages/planCreate/planCreate" chunk_17.appservice.js` → A:134（`__wxRoute = "pages/planCreate/planCreate"` + define 开始）、A:136（`},{isPage:true,...})` 结束），页面体即 A:135。W 文件 `grep -c ""` = 358 行。
> ⚠️ 给对账员的提示：**chunk_17.appservice.js 的 A:63-131 还内嵌了同一份 `$gwx_XC_9` 模板代码副本**（A:63 `__WXML_GLOBAL__.ops_init.$gwx_XC_9=true`、A:64 `var x=[...]`、A:131 注册行），与 W 内容同源——骨架请以 W 为准，勿按 A 行号对节点树。
> ⚠️ 依据包勘误（蒸馏工按原文修正，见第 1 节）：依据包把 `view.padding`（各 section 容器）记为 tui-extend-item 子节点、把 `view.tui-page__hd` 记为 tui-block__box 子节点；原文 `_(bKE,lUE)`（W:290）、`_(bKE,oZF)`（W:297）、`_(bKE,t3F)`（W:310）实证三者均为 **view.container 直接子节点**，tui-modal 挂根 `_(r,o8F)`（W:329）。

## 1. 页面骨架（节点树）

来源：`chunk_17.webview.js` 的 `$gwx_XC_9`。模板注册表 `var x=['./components/tui-numberbox/tui-numberbox.wxml','./pages/planCreate/planCreate.wxml']`（W:143，本 chunk 含 2 个模板）；组件模板 **m0**（tui-numberbox，W:144-161，z 数组 `gz$gwx_XC_9_1` 定义于 W:15）；页面模板 **m1**（W:163 起，`var m1=function` W:163 本会话 grep 实证；z 数组 = ops 构建函数 `gz$gwx_XC_9_2`，定义于 W:39-141，共 **96 项**——本会话实测区间内 `Z(` 出现 97 处，其中 1 处是 Z 函数定义本身，96 项与依据包一致）。_mz 属性索引坑按 SKILL.md:60-62（首属性索引为真、后续连续递增）处理；本会话对关键节点属性表逐一回原文核实（W:152/186/208/232/242/260/270/293/312/320/322/324 全部命中）。

```
view.container                                                          (ops0, W:165)
├─ view.tui-block__box                                                  (ops1, W:167)
│  └─ view.tui-extend-item                                              (ops2, W:169)
│     ├─ view.title-area                                                (ops3, W:171)
│     │  └─ view.tui-title > {{title}}                                  (ops4-5, W:173-177)
│     └─ 【wx:if {{desc.length!=0}}】虚拟节点 _v()                        (ops6, W:181)
│        └─ view.tui-desc                                               (ops7, W:183)
│           ├─ text “{{desc}}”                                          (ops8, W:185，原文弯引号 “ ”)
│           └─ <tui-icon bind:tap="editTitle" color="#5677fc" name="edit" size="32"/>   (ops9-12，ops W:52-55；节点 W:186 ['bind:tap',9,'color',1,'name',2,'size',3])
├─ view.padding                                                         (ops13, W:191)【挂 container：W:290】
│  ├─ view.section.section_gap                                          (ops14)
│  │  ├─ text.section__title.text-bold.text-xl >「1.选择打卡级别（必选一个）」  (ops15-16, W:195-201)
│  │  └─ view.tui-footer  margin-top-sm（原文 class 双空格）               (ops17, W:203)
│  │     └─【wx:for {{levels}} item/index】(ops18，ops W:61；循环体 _2z(z,18,…) W:215)
│  │        └─ <tui-tag bind:tap="selectLevel" data-id="{{index}}" margin="10rpx 12rpx"
│  │              padding="12rpx 12rpx" plain="{{false}}" shape="circle" size="34rpx"
│  │              type="{{selected==index?'primary':'gray'}}">{{item}}级</tui-tag>
│  │                                                                    (ops19-27，ops W:62-70；节点 W:208 ['bind:tap',19,'data-id',1,'margin',2,'padding',3,'plain',4,'shape',5,'size',6,'type',7]，8 属性连续递增)
│  ├─ view.section.section_gap.margin-top.margin-bottom                 (ops28，ops W:71；节点 W:218)
│  │  ├─ text.section__title >「2.选择课程范围（第{{select_start}}-第{{select_end}}，共{{select_end-select_start+1}}课）」  (ops29-30)
│  │  ├─ view.tui-footer.padding                                        (ops31)
│  │  │  ├─ text.section__title >「起始课程编号：」                        (ops32-33)
│  │  │  └─ <tui-numberbox bindchange="changeStart" min="{{1}}" value="{{select_start}}"/>   (ops34-36, W:232 节点 ['bindchange',34,'min',1,'value',2]；未传 max → 组件默认 max=99，A:133)
│  │  └─ view.tui-footer.padding                                        (ops37)
│  │     ├─ text.section__title >「结束课程编号：」                        (ops38-39)
│  │     └─ <tui-numberbox bindchange="changeEnd" max="{{level_num}}" value="{{select_end}}"/>  (ops40-42, W:242)
│  ├─ view.section.section_gap.margin-top.margin-bottom（同构，类复用 z[28]）  (ops43，节点 W:246)
│  │  ├─ text >「3.选择每天学习数量（新学{{select_num_new}}课，复习{{select_num_old}}课）」 (ops44-45)
│  │  ├─ view.tui-footer.padding >「新学（最小1，最大10）」
│  │  │   + <tui-numberbox bindchange="changeNum1" max="10" min="1" value="{{select_num_new}}"/>  (ops46-52, W:260)
│  │  └─ view.tui-footer.padding >「复习（最小0，最大10）」
│  │     + <tui-numberbox bindchange="changeNum2" max="10" min="0" value="{{select_num_old}}"/>   (ops53-59, W:270；max 值复用 z[50]='10')
│  └─ view.section.section_gap.margin-top.margin-bottom（同构 z[28]）      (ops60，节点 W:274)
│     ├─ text >「4.打卡计划天数（共{{select_days}}天，每天{{select_num}}课）」 (ops61-62，尾部「课）」复用 z[30][7])
│     └─ view.tui-footer >「计划总数{{select_end-select_start+1}}课 / 每天新学{{select_num_new}}课 = 需要打卡{{select_days}}天 」
│                                                                    (ops63-65；表达式片段复用 z[30][6]/z[45][2]/z[62][2]，末尾「天 」带尾随空格，W:108 原文)
├─ view.tui-modal-custom                                                (ops66, W:291)【挂 container：W:297】
│  └─ <button bindtap="submit" class="bg-blue" height="72rpx" shape="circle" size="28">确定创建</button>  (ops67-72, W:293；shape 复用 z[24]='circle'，size 复用 z[71]='28'——z[71] 定义于 W:114，是 submit 按钮自身项，submitModify 在 W:137 反向引用 z[71])
└─ view.tui-page__hd                                                    (ops73, W:298)【挂 container：W:310】
   ├─ view.tui-page__title >「Tips」                                    (ops74-75, W:300)
   └─ view.tui-page__desc >「如果该模板未能完全符合需求，可以先创建，再点击修改。每一天的任务都支持课程的添加和删除操作。」  (ops76-77, W:305)

<tui-modal bindcancel="hideModal" custom="{{true}}" show="{{modalModify}}" fadeIn=false>   (ops78-80, W:312 节点 ['fadeIn',-1,'bindcancel',78,'custom',1,'show',2]；fadeIn 属性索引 -1=静态假值，不占 ops 项)【挂根 r：W:329】
└─ view.tui-modal-custom                                                (ops81, W:313)
   ├─ view.tui-page__title >「修改:」                                   (ops82-83)
   ├─ <input bindinput="inputTitle" class="{{!modalModify?'tui-hidden-input':''}}" placeholder="{{title}}"/>  (ops84-86, W:320)
   ├─ <input bindinput="inputDesc" class="{{!modalModify?'tui-hidden-input':''}}" placeholder="{{desc}}"/>    (ops87-89, W:322；class 表达式复用 z[85])
   └─ <button bindtap="submitModify" class="bg-blue" height="72rpx" shape="circle" size="28">确定</button>    (ops90-95, W:324；class/height/shape/size 复用 z[68]/z[69]/z[24]/z[71])
```

### 状态分支
- 标题/描述区：`desc.length!=0` 才渲染 tui-desc 行（ops6，W:181）；tui-desc 内含编辑入口 tui-icon（bind:tap=editTitle，W:186）。
- 级别标签：`wx:for {{levels}}`（12 级 AA~K）循环 tui-tag，选中态 `selected==index ? 'primary' : 'gray'`（ops26）。
- 修改弹窗：`tui-modal show="{{modalModify}}"`，`custom="{{true}}"`，`fadeIn=false`（静态假值，W:312 属性索引 -1）；弹窗内两个 input 的 class 为 `{{!modalModify?'tui-hidden-input':''}}`（W:320/322），即弹窗关闭态 input 挂 `.tui-hidden-input{width:0}`（X:8）隐藏——配合 tui-modal 关闭动画的原实现细节，原样保留。
- 本页 wxml 无任何 image 节点（`grep -c "'image'" chunk_17.webview.js` = 0），视觉全靠文字/样式/组件。
- data 中 `group_detail:{}`、`total_num:0`、`taskToday:[]` 三字段在 A:135 全部方法与 m1 节点树中均无读取点（group_detail 仅 getGroupInfo 写入；taskToday/total_num 完全未用），属原作者遗留字段——还原时建议保留以对齐原文，但无任何行为。

### 组件依赖（4 个，wxml 引用）
- **tui-numberbox**：组件模板 m0 在本 chunk（W:144-161：`view.tui-numberbox` 内 reduce 视图（bindtap，ops1）+ input（bindblur/bindinput，W:152 `['bindblur',6,'bindinput',1,'class',2,'disabled',3,'style',4,'type',5,'value',6]`）+ plus 视图（bindtap，ops13））；组件定义在 A:132-134（`Component({properties:{…}})`，body 在 A:133）。properties 全表（A:133 原文，本次 grep 逐项核实）：`value`(Number，optionalTypes [String]，默认 1，observer→setValue)、`min`(1)、`max`(99)、`step`(1)、`disabled`(false)、`iconBgColor`("transparent")、`radius`("50%")、`iconSize`(24)、`iconColor`("#333")、`height`(50)、`width`(90)、`backgroundColor`("#f2f2f2")、`color`("#333")、`index`(0)、`custom`(0)；`handleChange` 经 `triggerEvent("change",{value:Number(t),type:e,index:this.data.index,custom:this.data.custom})` 抛出（A:133；页面 bindchange 只读 detail.value，type/index/custom 3 字段对本页行为无影响）→ 页面用 bindchange 接。
- **tui-icon / tui-tag / tui-modal**：定义在其他 chunk（本 chunk 仅有调用节点）；app-config.json 全文件 `usingComponents` 0 命中（本会话 node 解析实测），组件注册为编译期注入（同 daka.md 口径）。组件样式不在页面 wxss，查 `wxss_out/components__tui-*.wxss`。
- tui-numberbox 的组件 wxss 内嵌于 W:357 前半段 setCssToHead（path:./components/tui-numberbox/tui-numberbox.wxss，含 base64 woff 字体 `numberbox`，图标 `\e691`=reduce、`\e605`=plus）。

## 2. 样式规格

来源：`wxss_out/pages__planCreate__planCreate.wxss`（19 行，本次通读；与 W:357 后半段 setCssToHead（path:./pages/planCreate/planCreate.wxss）同源，数值直接当 px，不除 2）。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| body | background-color:#f0f0f0; height:100% (X:1) | 页面底色 |
| .tui-page__hd | box-sizing:border-box; padding:40px; width:100% (X:2) | Tips 区 |
| .tui-page__bd | margin-top:20px; padding-bottom:40px (X:3) | 本页未用（无该类节点） |
| .tui-page__title | L4 font-size:20px；L9 font-size:20px; font-weight:400; text-align:left（后者生效）(X:4/X:9) | Tips/「修改:」标题 |
| .tui-page__desc | color:#888; font-size:14px; margin-top:10px; text-align:left (X:5) | Tips 描述 |
| .tui-modal-custom | text-align:center (X:6) | 提交按钮容器/弹窗内容器 |
| .tui-modal-input | border-bottom:0.5px solid #e6e6e6; font-size:16px; margin:15px auto 25px; width:80% (X:7) | 本页未用（弹窗 input 未挂此类） |
| .tui-hidden-input | width:0 (X:8) | 修改弹窗关闭态隐藏 input |
| .container | padding-bottom:env(safe-area-inset-bottom) (X:10) | 页面容器 |
| .tui-block__box | background-color:#f1f1f1; overflow:hidden (X:11)；与 .tui-extend-item 共有 border-radius:10px; box-sizing:border-box; width:100% (X:12) | 灰底圆角卡 |
| .tui-extend-item | word-wrap:break-word; color:#302525; font-family:Microsoft YaHei; margin-bottom:5px; padding:15px 10px; position:relative; text-align:justify; word-break:break-all (X:13) | 标题卡 |
| .title-area | justify-content:space-between; position:relative; z-index:10 (X:14)；与 .tui-title 共有 align-items:center; display:flex (X:15) | 标题行 |
| .tui-title | box-sizing:border-box; font-size:19px; font-weight:700; justify-content:center; padding:20px 15px 15px; width:100% (X:16) | 计划标题 |
| .tui-desc | box-sizing:border-box; color:#888; flex-direction:row; font-size:14px; padding:5px 0; text-align:left; width:100% (X:17)；与 .tui-footer 共有 align-items:center; display:flex (X:18) | 描述行（含编辑图标） |
| .tui-footer | color:#585858; flex-wrap:wrap; justify-content:space-between; min-height:26px; position:relative; z-index:10 (X:19) | 各 section 行 |

依赖的全局类（**不在本页 wxss**）：`.text-bold` / `.text-xl` / `.bg-blue`（提交按钮）/ `.padding` / `.margin-top` / `.margin-bottom` / `.margin-top-sm` 共 7 类，来自 page-frame.html 内嵌 app.wxss 编译块（对账已逐类验证定义存在）。`.section` / `.section_gap` / `.section__title` 3 类**全仓无样式定义**——page-frame.html 全文件无 `.section{`/`.section_gap{`/`.section__title{` 选择器（仅有的 5 处 `section__title{` 子串属 tui-section 组件的 `.tui-section__title`，非本类），全解包产物亦无定义、只有本页使用，属挂名死类，**还原无需提供样式**（原文页面效果即如此）。

## 3. 事件与逻辑

来源：`chunk_17.appservice.js` A:135（单行压缩 7,658 字符，本次整行导出通读 + grep 计数核实）。模块级：`t=require("../../@swc/runtime/_sliced_to_array")`（generateStudyPlan 内 `t._(e,2)` 解构用）、`e=wx.cloud.database({})`（其后 `e.command,e.command.aggregate;` 为求值即弃的占位）、`a=getApp()`、`s=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（用其 `formatTime`）、**`l=!1` 模块级防重标志**（A:135 头部原文 `…s=require(…),l=!1;Page({`）。

### data 初始值（A:135 原文全量）
`levels:["AA","A","B","C","D","E","F","G","H","I","J","K"]`、`isGroup:!1`、`group_detail:{}`、`title:""`、`desc:""`、`list_click:0`、`total_num:0`、`taskToday:[]`、`level_total:[108,102,102,102,96,90,84,84,60,60,60,60]`、`level_num:0`、`selected:-1`、`select_level:""`、`select_start:1`、`select_end:99`、`select_days:7`、`select_num:1`、`select_num_new:1`、`select_num_old:0`、`plan_total:0`、`modalModify:!1`。
（依据包漏记 6 项：group_detail / list_click / total_num / taskToday / level_num / select_level，本次按 A:135 原文补齐。）注意：**`group_id` 不在初始 data**，仅班级分支 onLoad 时 setData 注入；`modal_height` 亦由 onLoad setData 注入。
level_total 与 daka.md 的 levelTotal=[108,102,102,102,96,90,84,84,60,60,60,60] 跨页一致。

### 生命周期
- **onLoad(t)**（A:135）：URL 带 `group_id` → `setData({isGroup:!0, group_id:t.group_id, list_click:parseInt(t.click)})` + getGroupInfo()（班级创建形态，**标题/描述不在此赋值**）；否则 `setData({isGroup:!1})`，`title = globalData.babyInfo.nickName + "的个人学习打卡计划"`，`desc = "本计划创建于" + 年 + "年" + 月 + "月" + 日 + "日"`（个人创建形态）。两分支合流后 `countDays() + getPlanTotal()`；末尾 `wx.getWindowInfo()` → `modal_height = 750/windowWidth*windowHeight*0.8`（原文 `modal_height:750/c*o*.8`，o=windowHeight，c=windowWidth）。
- **无 onShow/onHide/onUnload/onShareAppMessage 等其他生命周期**（A:135 通读确认，Page 内仅上述方法清单）。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| tui-icon tap（标题区） | editTitle | `setData({modalModify:!0})` 打开修改弹窗 | — | modalModify |
| tui-tag tap（级别标签） | selectLevel | `e=parseInt(dataset.id)` → `setData({selected:e, select_level:levels[e], level_num:level_total[e], select_end:level_total[e]})` + countDays()（select_end 联动为该级别总课数） | — | selected, select_level, level_num, select_end, select_days |
| numberbox bindchange（起始） | changeStart | 未选级别（selected<0）→ toast「请先选择级别」icon:error；否则 `setData({select_start:t.detail.value})` + countDays() | — | select_start, select_days |
| numberbox bindchange（结束） | changeEnd | 同上守卫；`setData({select_end:t.detail.value})` + countDays() | — | select_end, select_days |
| numberbox bindchange（新学） | changeNum1 | 同上守卫；`setData({select_num_new})` → `setData({select_num: new+old})` → countDays() | — | select_num_new, select_num, select_days |
| numberbox bindchange（复习） | changeNum2 | 同上守卫；`setData({select_num_old})` → `setData({select_num: new+old})`；**不调 countDays**（A:135 原文该方法止于 setData） | — | select_num_old, select_num |
| button tap「确定创建」 | submit | 8 级校验链 + 3 秒防重（见下），通过 → `fetchRecords(select_start-1, select_end-1)` | fetchData | — |
| tui-modal bindcancel | hideModal | `setData({modalModify:!1})` | — | modalModify |
| input bindinput（弹窗标题） | inputTitle | `setData({title:t.detail.value})` | — | title |
| input bindinput（弹窗描述） | inputDesc | `setData({desc:t.detail.value})` | — | desc |
| button tap「确定」 | submitModify | 校验（见第 5 节）通过 → 关弹窗 + toast「修改成功」；**仅改本地 data，无任何写库** | — | modalModify |

### submit 校验链（A:135 原文顺序与文案逐字，条件为原文边界）
1. `select_level.length==0` → toast「1.请选择一个级别」icon:none（注意判据是 select_level 空串，不是 selected<0）
2. `select_start>=select_end` → 「2.课程范围起始值必须小于结束值」icon:none duration:2000（须严格 start<end）
3. `select_start<=0 || select_end<=0` → 「2.课程范围输入有误」icon:none
4. `select_num<1 || select_num>20` → 「3.每天学习数量输入有误」icon:none
5. `select_num_new<1 || select_num_new>10` → 「3.每天新学数量输入有误」icon:none
6. `select_num_old<0 || select_num_old>10` → 「3.每天复习数量输入有误」icon:none
7. `globalData.vip<=0 && plan_total>=20` → 「最多创建20个，可以先长按删除」icon:none duration:2000
8. `globalData.vip>0 && plan_total>=50` → 「最多创建50个，可以先长按删除」icon:none duration:2000
9. 通过后：模块级防重 `!0!=l` 才放行——`l=!0` + `setTimeout(()=>{l=!1},3e3)`（3 秒内重复点击无效）→ `fetchRecords(this.data.select_start-1, this.data.select_end-1)`（**传 0 基索引**）。

### fetchRecords 与云函数（A:135）
- `wx.showLoading({title:"创建中..."})` → `s=getDatabaseLevel()` → **`wx.cloud.callFunction({name:"fetchData", data:{level:s, startIndex:t, endIndex:e}, …})`**（t/e 即上面 start-1/end-1）。
- success 回调：`t.result.success` 为真才继续（`console.log("总记录数：", t.result.total)`，isGroup?writeGroupPlan(t.result.data):writePersonalPlan(t.result.data)）；为假 → `wx.hideLoading()` + toast **`t.result.errMsg`**（云函数返回的业务错误文案，非固定文案）。
- fail 回调：`wx.hideLoading()` + toast「调用失败」icon:none + `console.error("云函数调用失败：",t)`。
- 云函数/云数据库调用清单（本会话 grep -o 实测计数）：`callFunction({name:"fetchData"` ×1（唯一云函数）；`collection("group")` ×1（getGroupInfo 的 get）；`collection("plan")` ×3（getPlanTotal 的 count + writeGroupPlan 的 add + writePersonalPlan 的 add）。
- getGroupInfo：`plan` 前先 `e.collection("group").where({group_id}).get()`，`e.data.length!=0` 才 `setData({group_detail:e.data[0], title:e.data[0].name, desc:e.data[0].desc})`；若 desc 为空串，兜底 `desc="本计划创建于"+年+"年"+月+"月"+日+"日"`（A:135 原文）。
- getPlanTotal：`e.collection("plan").where({_openid: globalData.openid}).count()` → `plan_total=e.total`。

### 计算规则（精确到边界）
- **countDays**：`select_days = Math.ceil((select_end - select_start + 1) / select_num_new)`（A:135 原文；仅按新学数折算天数，复习不摊入天数）。
- **getDatabaseLevel**（级别→云库名后缀）：默认 `"AA"`；`"A"→"AL"、"B"→"BL"、"C"→"CL"、"D"→"DL"、"E"→"EL"、"F"→"FL"、"G"→"GL"、"H"→"HL"、"I"→"IL"、"J"→"JL"、"K"→"KL"`（A:135 && 链原文；本会话 grep `"AL"`…`"KL"` 各 1 命中）。与 daka.md 的映射表一致。
- **getPlanCover**：`return "https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/plan/" + Math.floor(79*Math.random()) + ".jpg"`（A:135 原文）→ 随机取 0~78.jpg，共 **79 张**。
- **generateStudyPlan(records, numNew, numOld)**（排课算法，A:135 原文变量流）：设 `i=records.length`（总课数）、`n=Math.ceil(i/numNew)`（计划天数）、`o=numNew+numOld`（每日总数）、`c=Math.ceil(numOld*n/i)`（每课复习配额）、间隔序列 `d=[1,3]`；初始化 `r=Array(n).fill().map(()=>[])`（逐日数组）、`u`=每课已安排次数 Map（初始 0）、`h`=每课首排日 Map、`_`=每课已排日列表 Map、游标 `g=0`。逐日 `l`：
  1. 新学切分：按 records 顺序取 `numNew` 门（受 `g<i` 限制）push 进当天，`u` 计数 +1，`h`/`_` 记首排日与排日列表；
  2. 复习回填：遍历已首排的课，命中条件 = `u(课) <= c`（原文 `!(u.get(e)>=c+1||当天已含)`）且 `首排日 h + d[已排次数-1] === 当日`（d=[1,3]：首学次日复习一次、首学后第 3 天再复习一次）；候选择 `u` 升序，取 `Math.max(numOld, o-当天已排数)` 门 push（`_` 同步 push 当日）；
  3. 当日仍不满（`r[l].length<o`）：`l<2`（第 1、2 天）仅 `console.log("第X天复习内容不足，保持当前安排")`；第 3 天起从「已安排过（u>0）且仍有配额（u<c+1）且当日未含」的课按 `u` 升序补齐到 `o` 门。
  返回 `r`（Array(n)，每项为当日课程对象数组）→ 即 plan 文档的 `list` 字段。
- **getRandomContinuousChars**：`t = globalData.baby_id.substr(0,28)`，起点 `e = Math.floor(Math.random()*(t.length-5+1))`，返回 `t.substr(e,5)`（baby_id 前 28 字符内随机连续 5 字符）。

### plan 集合写入形状（新文档权威形状，A:135 原文）
- **writeGroupPlan**（班级）：`list = generateStudyPlan(result, select_num_new, select_num_old)`，`plan_id = group_id.slice(0,6) + "_" + Date.now()`，`e.collection("plan").add({data:{ group_id, plan_id, cover(=getPlanCover()), title, desc, public:!1, isAdd:!1, total:select_days, level:select_level, date:s.formatTime(now), tag:时间戳, list, daka:Array(select_days).fill().map(()=>[]) }})`；success → `wx.hideLoading()` + `navigateTo "../planDetail/planDetail?plan_id="+plan_id+"&isPlanCreate=1"`。
- **writePersonalPlan**（个人）：`plan_id = getRandomContinuousChars() + "_" + Date.now()`，`add({data:{ plan_id, cover, title, desc, public:!1, total:select_days, level:select_level, date:s.formatTime(now), tag:时间戳, list, vip:globalData.vip, daka:Array(select_days).fill().map(()=>[]) }})`（**无 group_id / isAdd，多 vip**）；success → `navigateTo "../planDetail/planDetail?plan_id="+plan_id+"&isPlanPersonal=1"`，`hideLoading` 放在 complete 回调。
- `daka` 初始结构 = `Array(total).fill().map(()=>[])`（每日一个空数组），与 captures/plan jsonl 对账时注意（captures/collections 现无 plan 集合样本，本形状以 A:135 代码为唯一权威）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 计划封面 | `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/plan/{0..78}.jpg`（`Math.floor(79*Math.random())`，79 张） | A:135 getPlanCover，代码字面量 1 处（grep 实证） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |
| numberbox 减/加图标 | 组件内嵌 base64 woff 字体，`\e691`=reduce、`\e605`=plus，无 CDN 依赖 | W:357 前半段 setCssToHead（path:./components/tui-numberbox/tui-numberbox.wxss） | ✅ 已实证（内嵌资源） |

> ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）依据：① captures/collections/ 现只有 units/words/user_school/_counts（本会话 ls 实测），**无 plan 集合样本**，`plan/N.jpg` 无真实样本可对；② audit/cdn-probe.md 与 audit/cdn-可达性探测.md 均**未覆盖 `/plan/` 路径**（本会话 grep "plan" 两报告 0 命中；可达性探测的封面仅 `AA/Cover/farm-animal.jpg` 与 `AA/Cover/Big/…`，属课程封面双路径，非计划封面）。同域名 tcb 云存储此前探测 7/8 可达（cdn-probe.md 补充探测，fenjitu.jpg 404），故本路径存在 404 风险，保持 AGENTS.md 规则 6 标记。
> 本页 wxml 无 image 节点（`grep -c "'image'" chunk_17.webview.js` = 0，本会话实测），页面静态资源仅上述两项。

## 5. 弹窗 / 分支状态

- **修改弹窗**（页面唯一弹窗，tui-modal custom 模式）：editTitle 开（tui-icon tap）→ modalModify=true；hideModal（bindcancel）/submitModify 成功后关。内容：标题「修改:」+ 两个 input（placeholder 分别绑定当前 `{{title}}`/`{{desc}}`，bindinput 双向写回 data.title/desc）+「确定」按钮。
- **submitModify 校验**（A:135 原文顺序，icon:error）：① `title.length==0` → 「名字不能为空」；② `title.length>15` → 「班级名字不能超过15个字」；③ `desc.length>30` → 「班级描述不饿能超过30个字」（**原文错别字「不饿能」，逐字保留**，还原时勿"修正"文案）。通过 → 关弹窗 + toast「修改成功」（默认 success 图标）。仅改本地 data，**无写库**——修改结果随 submit 创建时才落库。
- **双形态页面**：isGroup=true（URL 带 group_id，标题/描述取 group 集合 name/desc，desc 空时兜底「本计划创建于…」；创建走 writeGroupPlan，跳转带 `isPlanCreate=1`）vs isGroup=false（默认；标题 nickName+「的个人学习打卡计划」、描述「本计划创建于年月日」；走 writePersonalPlan，跳转带 `isPlanPersonal=1`）。
- **未选级别守卫**：changeStart/changeEnd/changeNum1/changeNum2 四个入口在 `selected<0` 时统一 toast「请先选择级别」icon:error，不写 data。
- **防重**：submit 通过全部校验后受模块级 `l` 标志限制，3 秒窗口内第二次点击直接忽略（无提示）。
- **原始代码怪癖**（原样保留，勿"修复"）：① 未选级别时 `level_num=0` 而 `select_end=99`（结束编号 numberbox 的 `max={{level_num}}`=0 与 value=99 矛盾，运行时表现未验证——守卫会先拦住用户输入）；② 起始编号 numberbox 只传 `min=1` 不传 max，落入组件默认 `max=99`（A:133）；③ 提交校验用 `select_start>=select_end` 拒绝，允许 start<end 的最小差 1；④ countDays 不受 select_num（新学+复习）影响，只除以 select_num_new。

## 6. 对账记录（对账员填写）

> 对账日期 2026-09-30。对账员独立重推：不读蒸馏依据包，直接从 `unpacked/chunk_17.webview.js`（m1 函数体 W:163-331 全文导出 + 自写 node 脚本对 `gz$gwx_XC_9_2` 求值渲染出 96 项 z 表）、`unpacked/wxss_out/pages__planCreate__planCreate.wxss`（19 行全文）、`unpacked/chunk_17.appservice.js` A:135（7,658 字符整行导出通读）、`unpacked/app-config.json`（node 解析）四件套重推，再与本 spec 第 1-5 节逐项比对。对账中实际执行：`grep -l "pages/planCreate/planCreate.wxml" chunk_*.webview.js` → 唯一命中 chunk_17；`grep -c "" chunk_17.webview.js` → 358 行；区间 W:39-141 内 `Z(` 出现 97 处（96 项 + W:42 `function Z(ops){z.push(ops)}` 定义本身），与 spec:19 口径一致。

- [x] 节点树与原文一致（重点抽查全中：`_(bKE,lUE)` W:290、`_(bKE,oZF)` W:297、`_(bKE,t3F)` W:310、`_(r,o8F)` W:329 四处挂载关系与依据包勘误结论吻合；tui-modal `fadeIn` 属性索引 -1 W:312 属实；`_(r,bKE)` W:311 container 挂根。m1 全部 21 组 `_n/_rz/_mz/_oz/_v/_2z` 调用逐一回原文核对：tag 名、属性名、属性序、挂载父节点与 spec 第 1 节树完全一致；m0（W:144-161）结构与 W:152 input 属性表一致；`_2z(z,18,…,'item','index')` W:215 循环体 x1E 属实）
- [x] 类名抽查 22 处全中（超出 ≥10 处要求）：页面级 12 类 container/tui-block__box/tui-extend-item/title-area/tui-title/tui-desc/tui-footer/tui-modal-custom/tui-page__hd/tui-page__title/tui-page__desc/tui-hidden-input 在 X:2-19 均有规则、数值逐条相符（X 全表 19 行与 spec 第 2 节表格逐行一致）；全局级 7 类 text-bold/text-xl/bg-blue/padding/margin-top/margin-top-sm/margin-bottom 在 page-frame.html 的 app.wxss 编译块（偏移 650874 起、`{path:"./app.wxss"}` @822431 收尾）内均找到定义（如 `.text-bold{font-weight:700}`、`.text-xl{font-size:36rpx}`、`.bg-blue{background-color:var(--blue)}`、`.padding{padding:30rpx}`、`.margin-top-sm{margin-top:20rpx}`）。ops17 `tui-footer  margin-top-sm` 原文双空格属实（z[17] 渲染与 W:108 前后原文均证）
- [x] 文案逐字一致：W 侧 15 条（4 个 section 标题、起始/结束课程编号：、新学/复习括注、Tips 正文、「确定创建」「确定」「修改:」半角冒号、`“{{desc}}”` 弯引号 z[8]、`{{item}}级` z[27]、汇总行 z[65] 复用 z[30][6]/z[45][2]/z[62][2] 且末尾「天 」带尾随空格——W:105/W:108 原文 `Z([a,[3,'计划总数'],z[30][6],…,[3,'天 ']])` 实证）＋ A:135 侧 16 条 toast（submit 8 级校验文案及顺序、请先选择级别×4、创建中...、调用失败、名字不能为空、班级名字不能超过15个字、**班级描述不饿能超过30个字**（「不饿能」×1 实测）、修改成功、第X天复习内容不足）全部逐字相符。spec:19「复用」注记全部经原文证实：z[57]=Z(z[50])（W:100）、z[70]=Z(z[24])（W:113）、z[88]=Z(z[85])（W:131）、z[91..94]=Z(z[68]/z[69]/z[24]/z[71])（W:134-137）
- [x] 事件与云函数调用清单齐全：A:135 通读，Page 内方法清单 = spec 第 3 节事件表 11 个处理函数 + 生命周期 onLoad（无其他生命周期）+ 工具方法 countDays/getPlanCover/generateStudyPlan/getDatabaseLevel/getRandomContinuousChars + 数据方法 getGroupInfo/getPlanTotal/fetchRecords/writeGroupPlan/writePersonalPlan，一一对上；data 21 项初始值逐字一致（含依据包漏记 6 项）；onLoad 两分支、`modal_height:750/c*o*.8`、countDays 公式、getDatabaseLevel 12 级映射（"AL"…"KL" 各 1 处 + 默认 "AA"）、getPlanCover 79 张、generateStudyPlan 边界（d=[1,3]、u<=c 命中、Math.max(numOld,o-当天已排数)、l<2 仅 log）、writeGroupPlan/writePersonalPlan 字段形状与跳转参数均与 spec 一致。node 实测计数：`callFunction({name:"fetchData"` ×1（全文件唯一 callFunction）、`collection("group")` ×1、`collection("plan")` ×3（count+add+add，collection 总数 4）、「请先选择级别」×4、「调用失败」×2（toast"调用失败" + console.error"云函数调用失败："，result.errMsg 分支在 success 回调内另算——spec:148/194 的区分属实）。app-config：`pages/planCreate/planCreate` 在 pages 列表，页面配置 `{"window":{"navigationBarTitleText":"创建打卡计划"}}` 无 custom → 系统栏属实；`usingComponents` 全文件 0 命中属实。A:133 properties 15 项全中；A:63/A:64/A:131 内嵌 `$gwx_XC_9` 副本警告属实；W:357 前半段 numberbox wxss（font-family:numberbox、`\e691`/`\e605`、woff 内嵌）+ 后半段 planCreate wxss 属实；W 全文件 `grep -c "image"` = 0 属实

### diff 摘要（需蒸馏工修正 2 处，均为注记级、不影响还原行为）

1. **spec:106 全局类来源表述有误（实质 diff）**：spec 称 `.section`/`.section_gap`/`.section__title` 与其余 7 类同「来自 page-frame.html setCssToHead 全局块」。实测：page-frame.html 的 app.wxss 编译块（650874-822471）及全文中 `section`/`section_gap`/`section__title` 均为 **0 定义**（该区间三词出现次数 = 0/0/0；全文件其余命中均为各页 ops 副本里的类名字符串；`grep -rl "section_gap{" unpacked/` 无一文件命中，app-service.js 命中亦为 ops 副本）。结论：这 3 个类在全解包产物中**只有使用、无样式定义**，是挂名死类。修法：spec:106 应改为——7 类（text-bold/text-xl/bg-blue/padding/margin-top/margin-top-sm/margin-bottom）来自 page-frame.html 内嵌的 app.wxss 编译块（原小程序全局样式），已逐类验证定义存在；`.section`/`.section_gap`/`.section__title` 3 类全仓无定义，还原时无需提供样式（原文页面效果即如此）。
2. **spec:80 handleChange payload 记漏 3 字段（轻微）**：A:133 原文 `triggerEvent("change",{value:Number(t),type:e,index:this.data.index,custom:this.data.custom})`，spec 只写 `{value:Number(t)}`。页面侧 bindchange 只读 `t.detail.value`，行为无影响，建议补全字面量。
3. **备注（口径）**：spec:12「A:135 单行压缩 8,063 字符」实测为 7,658 字符 / 8,062-8,063 UTF-8 字节——8,063 是字节数非字符数，内容不受影响。
4. **备注（表述方向）**：spec:59「submit 按钮…size 复用 z[71]='28' 同 submitModify 按钮」引用方向写反——z[71] 定义于 W:114（`Z([3,'28'])`，即 submit 按钮自身的 size 项），是 submitModify 在 W:137 反向引用 z[71]（shape 同理：z[70]=Z(z[24])，z[24] 属 tui-tag）。值与结论均不受影响。

**对账结论：PASS**（四项核对全部通过；2 处需修正项均为注记级，修正后建议 frontmatter 状态改「对账通过」）。

> 蒸馏工修正记录（2026-09-30）：按 diff 摘要修正 4 处正文——① spec:106：`.section`/`.section_gap`/`.section__title` 改为「全仓无样式定义、还原无需提供样式」（蒸馏工复核：page-frame.html 全文件 `.section{`/`.section_gap{`/`.section__title{` 均 0 命中，仅有的 5 处 `section__title{` 子串属 `.tui-section__title`；`grep -rlo "\.section_gap{" unpacked/` 无命中），其余 7 类来源口径改为「page-frame.html 内嵌 app.wxss 编译块」；② spec:80：handleChange payload 补全 `type/index/custom` 3 字段（A:133 原文验证）；③ spec:12：字符数口径改「7,658 字符（8,063 字节）」（第 3 节开头 spec:110 同一口径同步修正，保持全文一致）；④ spec:59：z[71] 引用方向改「submitModify 反向引用 z[71]（submit 按钮自身项）」（W:114 `Z([3,'28'])` 定义 / W:137 `Z(z[71])` 反向引用，蒸馏工已验证）。frontmatter 状态更新为「对账通过（待验收；2 处注记已修）」。
