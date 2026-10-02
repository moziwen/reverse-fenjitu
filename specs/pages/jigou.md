---
页名: jigou
显示名: 机构账号管理 / 账号绑定（双模式页）
状态: 对账通过（2026-10-02，见 §7）
chunk: chunk_22.webview.js / chunk_22.appservice.js
导航栏: 系统栏（标题由 JS 运行时设置：管理态「机构账号管理」/ 绑定态「账号绑定」）
---

# 页面还原规格：机构账号管理 / 账号绑定

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。

## 1. 页面骨架（节点树）

来源：`chunk_22.webview.js` 的 `$gwx_XC_15`（页面模板注册：chunk_22.webview.js:94 与 :257；主函数 m1：chunk_22.webview.js:141-233；文案/绑定常量表 gz$gwx_XC_15_2：chunk_22.webview.js:39-91，共 47 条 ops，z[N] = 第 43+N 行）。

⚠ 稀疏副本核对：chunk_22.appservice.js:30-42 存在同名 gz$gwx_XC_15_2 仅 7 条 ops（tips/index/#fff/20rpx/item/#f7f7f7/没有更多了），确认为稀疏副本，**未采用**；本骨架全部取自 webview 富树（符合 AGENTS.md 硬规则）。_mz/_2z 属性索引按 unpacked/webview.app.js 的 base+偏移语义还原。

```
<view class="container">                                    ← 仅 wxss 有 .container，富树未见对应节点：样式存在、骨架未使用
  <block wx:for="{{tips}}" wx:for-item="item" wx:for-index="index">
    <tui-section isLine background="#fff" margin="20rpx 10rpx" title="{{item}}" />   ← z[0-5]，chunk_22.webview.js:148；两条提示文案由 appservice onLoad setData 注入
  </block>

  <view class="cu-list menu-avatar padding">                ← z[6]，chunk_22.webview.js:156
    <block wx:for="{{list}}" wx:for-item="item" wx:for-index="cid">   ← z[8]，chunk_22.webview.js:228
      <view class="padding bg-blue light margin-bottom-sm">  ← z[11]，chunk_22.webview.js:161（每个账号卡片）
        <view class="text-black">                           ← z[12]
          <text>{{cid+1}} ID: {{item.phone}}</text>          ← z[13]，chunk_22.webview.js:164
        </view>
        <view class="text-black">
          <text>账号类型：{{item.vip==1?'永久VIP':'一个月VIP'}}</text>   ← z[15]，chunk_22.webview.js:169
        </view>
        <picker bindchange="bindPickerChange" data-id="{{cid}}" mode="selector" range="{{groupArr}}" value="{{index}}">   ← z[16-20]，chunk_22.webview.js:172
          <!-- item.group 为真 -->
          <view class="text-black"><text>所属班级：{{item.group}}</text></view>          ← z[23]，chunk_22.webview.js:175-188 分支1
          <!-- item.group 为假 -->
          <view class="picker"><text>点击分配班级：{{item.group}}</text></view>           ← z[25]，分支2
        </picker>
        <view class="text-black"><text>绑定时间：{{item.bind_date}}</text></view>        ← z[27]，chunk_22.webview.js:193
        <view class="text-black"><text>用户昵称：{{item.babyInfo.nickName}}</text></view> ← z[29]，chunk_22.webview.js:198
        <view class="text-black"><text>打卡天数：{{item.total_days}}</text></view>        ← z[31]，chunk_22.webview.js:203
        <view class="tui-item-box margin-top-sm">           ← z[32]，chunk_22.webview.js:207
          <!-- wx:if {{item.used==true}}（z[33]，chunk_22.webview.js:210） -->
          <button bind:tap="removeUser" class="tui-right" data-id="{{cid}}" type="default">移除用户</button>   ← z[34-38]，chunk_22.webview.js:211-214
          <!-- wx:else -->
          <button bindtap="click" class="tui-right" data-id="{{cid}}" open-type="share" type="primary">转发开通</button>  ← z[39-44]，chunk_22.webview.js:217-220
        </view>
      </view>
    </block>
  </view>

  <tui-nomore backgroundColor="#f7f7f7" text="没有更多了" />   ← z[45-46]，chunk_22.webview.js:230
</view>
```

（上方 `<view class="container">` 仅为可读性示意包裹，富树中**无** container 节点；真实根即 tips 循环 + cu-list + tui-nomore。）

### 状态分支
- `item.used==true` → 显示「移除用户」按钮（type=default，bind:tap=removeUser）；`used` 非真 → 显示「转发开通」按钮（type=primary，bindtap=click，open-type=share），chunk_22.webview.js:210-220。
- `item.group` 为真 → 「所属班级：{{item.group}}」；为假 → 「点击分配班级：{{item.group}}」（此时 group 为空，文案呈「点击分配班级：」），chunk_22.webview.js:175-188。
- `item.vip==1` → 「永久VIP」；否则「一个月VIP」，z[15]（chunk_22.webview.js:169）。
- 页面双模式由 onLoad 的 query 是否带 phone 决定（管理态 vs 绑定态），见 §3；骨架节点树为同一棵，绑定态实际呈现由 JS 路径控制（checkBind 成功后 bindMember 内 reLaunch，见 §3）。

## 2. 样式规格

来源：`wxss_out/pages__jigou__jigou.wxss`（22 行，已读全文；数值直接当 px，不除 2。来源对应 unpacked/chunk_22.webview.js:259 的 setCssToHead，rpx 已除 2 落盘）

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .container | padding:5px 0 10px | 页面容器（⚠ 样式存在、骨架未使用） |
| .tui-item-box | flex 居中; width:100% | 账号卡按钮区容器（骨架 z[32] 使用，另加 margin-top-sm 全局类） |
| .tui-right | color:#999; font-size:18px; margin-right:10px; width:25px | 移除/转发按钮 |
| .tui-share-btn | background:transparent; border:0; margin-top:2px; padding:0 | 转发按钮（骨架未见节点：样式存在、骨架未使用） |
| .cu-list.grid1 系列 | grid 布局（wxss_out L5-11） | ⚠ 骨架使用的是 `cu-list menu-avatar`，grid1 未使用 |
| .tui-page__hd/__bd/__title/__desc、.tui-attr-*、.tui-footer、.tui-prompt-title | 见 wxss_out L12-22 | ⚠ 本页富树未见对应节点：样式存在、骨架未使用（可能为构建合并产物） |

依赖的全局类（ColorUI 等，来自 page-frame.html setCssToHead）：`.padding` `.bg-blue` `.light` `.margin-bottom-sm` `.text-black` `.margin-top-sm` `.cu-list` `.menu-avatar` `.picker`（骨架 z[6]/z[11]/z[12]/z[25] 引用）。

## 3. 事件与逻辑

来源：`chunk_22.appservice.js`（页面 JS 全部位于第 115 行单行内，即 define("pages/jigou/jigou.js") 整体；旁证 app-service.js:2715）。函数清单：onLoad / click / onShareAppMessage / checkBind / bindMember / updatePhoneData / handleUserPlan / newUserPlan / updateUserPlan / getClass / getList / getUserInfo / removeUser / bindPickerChange。

### data 初始字段
`loadding:false, setting:[], list:[], groupList:[], groupArr:[], bind_vip:0, bind_title:"VIP会员", bind_phone:"", bind_tag:"", bind_group:"", bind_plan:""`（chunk_22.appservice.js:115 Page data）。

### 双模式入口 onLoad
- query 带 `phone` → `wx.setNavigationBarTitle("账号绑定")`，走 checkBind(phone, tag)（绑定态）。
- 否则 → 标题「机构账号管理」，setData tips 两条文案：「可点击转发来分配账号，对方点开后会员立即生效」「可随时移除账号的使用者，账号对应的数据将会初始化，学员的VIP也会立即失效」，再 getClass() + getList()（chunk_22.appservice.js:115 onLoad；关键文案已在本 session grep 命中验证）。

### 事件表

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| picker bindchange | bindPickerChange | e.detail.value 为 groupArr 下标 → setData list[cid].group；若 list 项已有 bind_date 发 addGroup，否则发 group | checkJigou type:"group" {phone,group_id}；checkJigou type:"addGroup" {baby_id,groupID} | list[cid].group |
| 移除按钮 tap | removeUser(data-id) | 移除账号使用者，成功 toast「移除成功」后重新 getList | checkJigou type:"remove" {baby_id,phone} | list |
| 转发按钮 tap（open-type=share） | click(data-id) | 模块级变量 o = list[cid].phone，记录当前选中账号，供 onShareAppMessage 使用 | 无 | 模块变量 o |
| 页面分享 | onShareAppMessage | from==="button" 时 {title:"邀请你开通英语分级会员，点击即可开通", path:"/pages/jigou/jigou?phone=<o>&tag=<ts>", imageUrl:"https://qianyufang.top/public/yingyu/imgShareBig.png"} | 无 | — |

### 云函数调用清单（wx.cloud.callFunction，函数名=云函数名；chunk_22.appservice.js:115，本 session grep 该行 callFunction 共 8 处命中）

| # | 云函数 | type/tag | 参数 | 触发点 |
|---|---|---|---|---|
| 1 | checkJigou | type:"init" | {openid} | getList()；success 回填 list 并触发 getUserInfo |
| 2 | checkJigou | type:"bind" | {phone,baby_id,bind_openid,date,bind_tag} | updatePhoneData()；绑定成功后回写 phone 表 |
| 3 | checkJigou | type:"addGroup" | {baby_id,groupID} | bindMember() 尾部（bind_group 非空时）与 bindPickerChange()（list 项已有 bind_date 时） |
| 4 | checkJigou | type:"remove" | {baby_id,phone} | removeUser()；成功 toast「移除成功」后重新 getList |
| 5 | checkJigou | type:"group" | {phone,group_id} | bindPickerChange() 分配班级 |
| 6 | updateUserPlan | tag:"add" | {baby_id,babyInfo,plan_id,plan_cover,list,total,title,date:"",current:0,desc,level,vip} | newUserPlan()（user_plan 无记录时） |
| 7 | updateUserPlan | tag:"update" | {baby_id,plan_id,…同字段} | updateUserPlan()（已有记录时） |

⚠ 原码 quirk（updateUserPlan）：update 分支先 `e.globalData.plan_id=this.data.plan_id` 而 add 分支用 `this.data.bind_plan`，且 update 传参用的是 `this.data.bind_plan`——按原样记录，勿"修"（chunk_22.appservice.js:115）。

### 客户端直连云数据库（wx.cloud.database()，非云函数）

| 集合 | 用途 |
|---|---|
| phone | checkBind 按 phone 查：used→toast「账号已被使用」；bind_tag 含本次 tag→「该链接已失效」 |
| group | checkBind 内按 group_id 取 plan_id；getClass 按 _openid 取班级列表 → groupArr=names |
| members | bindMember：无记录 add {_id=baby_id,…,platform:"bind",history:[l]}；有记录 doc(baby_id).update {…,history:command.unshift(l)} |
| plan | handleUserPlan 按 plan_id 查 |
| user_plan | handleUserPlan 判 add/update |
| user_study | getUserInfo 按 baby_id field babyInfo/total_days/groupID，回填 list[i].group 为匹配 group_id 的班级名 |

（全部 chunk_22.appservice.js:115 各函数。）

### 绑定成功/失败路径（绑定态）
bindMember 成功后 `e.globalData.vip=bind_vip`，toast「绑定成功，会员已生效」，1s 后 `reLaunch /pages/index/index`；失败 toast「绑定失败」，同样 reLaunch（chunk_22.appservice.js:115）。

### 工具模块
`require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")` 仅用 formatTime/formatHour 拼时间字符串（chunk_22.appservice.js:115 bindMember 内）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 分享大图 | 固定 URL `https://qianyufang.top/public/yingyu/imgShareBig.png`，仅 onShareAppMessage from==="button" 一处 | chunk_22.appservice.js:115（本 session grep 命中） | ⚠️ 待真机验证（CDN 可能 404） |

本页无其他本地/CDN 静态资源引用（骨架富树 chunk_22.webview.js:141-233 未见 image 节点）。

## 5. 弹窗 / 分支状态

- 本页无自定义弹窗组件；反馈均为 wx.showToast（「移除成功」「绑定成功，会员已生效」「绑定失败」「账号已被使用」「该链接已失效」等，chunk_22.appservice.js:115）。
- 分支状态汇总见 §1 状态分支（used 双按钮、group 双文案、vip 双类型文案）与 §3 双模式入口（管理态/绑定态标题）。
- 绑定态成功/失败 1s 后均 reLaunch 至 /pages/index/index（chunk_22.appservice.js:115）。

## 6. 组件声明备注

页面 json 注册组件：`{"tui-nomore":"/components/tui-nomore/tui-nomore","tui-section":"/components/tui-section/tui-section","tui-tag":"/components/tui-tag/tui-tag"}`（unpacked/app-service.js:46）。**富树中无任何 `<tui-tag>` 节点，按骨架为准记为未使用**；实际使用 tui-section（z 索引 148 处 _mz）与 tui-nomore（chunk_22.webview.js:230）。

## 7. 对账记录（对账员填写）

对账时间 2026-10-02；对账员独立重推，依据仅 `unpacked/chunk_22.webview.js`、`unpacked/chunk_22.appservice.js`、`wxss_out/pages__jigou__jigou.wxss`、`unpacked/app-service.js`、`unpacked/app-config.json`，未读蒸馏过程。

- [x] 节点树与原文一致
  - 本 session 实跑 `grep -n "XC_15" unpacked/chunk_22.webview.js` 确认注册：m1 于 :141-233，页面注册 `__wxAppCode__['pages/jigou/jigou.wxml']=$gwx_XC_15('./pages/jigou/jigou.wxml')` 于 :257；ops 表 gz$gwx_XC_15_2 于 :39-91 共 47 条 ops（z[0] 在 :43，z[46] 在 :89，与 spec「z[N]=第 43+N 行」逐条吻合）。
  - 逐节点重推核对：tips 循环外层 view class z[2]=''（:144-145，空 class，spec 未列该属性，属可忽略示意差异）→ tui-section isLine(-1=true)/background z[3]='#fff'/margin z[4]='20rpx 10rpx'/title z[5]=item（:148）；cu-list 容器 class z[6]（:156）；卡片 class z[11]（:161）；picker 五属性 bindchange z[16]/data-id z[17]/mode z[18]/range z[19]/value z[20]（:172）；group 分支 class z[22]=z[12]（:176-177）、else 分支 class z[24]='picker'（:183-184）；used 双按钮 button 属性序与 spec 一致（:211/:217）；tui-nomore z[45-46]（:230）。全部与 spec §1 相符。
  - 稀疏副本复核：`unpacked/chunk_22.appservice.js:30-42` 的 gz$gwx_XC_15_2 仅 7 条 ops（tips/index/#fff/20rpx 10rpx/item/#f7f7f7/没有更多了），确认稀疏、未采用，spec 判断正确。
- [x] 类名抽查 12 处全中（原文 ops → spec/wxss）：
  1. z[6] `cu-list menu-avatar padding`（:47，:156 引用）✓
  2. z[11] `padding bg-blue light margin-bottom-sm`（:50，:161）✓
  3. z[12] `text-black`（:51，:162 及 z[22]/z[26]/z[28]/z[30] 复用）✓
  4. z[24] `picker`（:63，:183）✓
  5. z[32] `tui-item-box margin-top-sm`（:71，:207）✓
  6. z[35] `tui-right`（:74，被两处 button 复用 :211/:217）✓
  7. wxss `.container{padding:5px 0 10px}` ↔ setCssToHead `padding:[0,10] 0 [0,20]`（chunk_22.webview.js:259）✓（rpx÷2 落盘正确）
  8. `.tui-item-box` flex 居中 + width:100% ✓（wxss_out L2）
  9. `.tui-right{color:#999;font-size:18px;margin-right:10px;width:25px}` ↔ `[0,36]/[0,20]/[0,50]`（:259）✓
  10. `.tui-share-btn` 存在于 wxss_out L4、富树无节点 → spec 记「样式存在、骨架未使用」✓
  11. `cu-list.grid1` 系列 wxss_out L5-11、富树无 grid1 节点 → spec 记未使用 ✓
  12. `.tui-page__*`/`.tui-attr-*`/`.tui-footer`/`.tui-prompt-title` wxss_out L12-22、富树无节点 → spec 记未使用 ✓
- [x] 文案逐字一致
  - ops 表：` ID: `（:52）、`账号类型：`/`永久VIP`/`一个月VIP`（:54）、`所属班级：`（:62）、`点击分配班级：`（:64）、`绑定时间：`（:66）、`用户昵称：`（:68）、`打卡天数：`（:70）、`移除用户`（:77）、`转发开通`（:83）、`没有更多了`（:89）。
  - 实跑 grep（awk NR==115 chunk_22.appservice.js）：tips 两条文案逐字命中；`setNavigationBarTitle` 两标题「账号绑定」「机构账号管理」命中；toast「移除成功」「绑定成功，会员已生效」×2、「绑定失败」「账号已被使用」「该链接已失效」「账号有误」「请再次进入」「处理中」「查询中」「绑定中」命中；分享标题「邀请你开通英语分级会员，点击即可开通」命中。与 spec §3/§5 完全一致。
- [x] 事件与云函数调用清单齐全
  - 实跑统计：NR==115 行 `callFunction` 共 8 处；`name:"checkJigou"`×6 + `name:"updateUserPlan"`×2；type 字面量 init/bind/addGroup/remove/group 各命中（addGroup×2），tag 字面量 add/update 各命中。与 spec §3 表 7 条调用一一对应。
  - 五个 checkJigou 载荷逐字段核对（grep 提取原文）：`{type:"init",openid}`、`{type:"bind",phone,baby_id,bind_openid,date,bind_tag}`、`{type:"addGroup",baby_id,groupID}`（bindMember 尾部用 e.globalData.baby_id/a.data.bind_group；bindPickerChange 用局部 d/o）、`{type:"remove",baby_id,phone}`、`{type:"group",phone,group_id}` ✓。
  - 事件处理器 14 个（onLoad/click/onShareAppMessage/checkBind/bindMember/updatePhoneData/handleUserPlan/newUserPlan/updateUserPlan/getClass/getList/getUserInfo/removeUser/bindPickerChange）逐一 grep `<name>:function` 各命中 1 次 ✓。onShareAppMessage 的 path/imageUrl、click 写模块级 `o`（模块头 `var o=""`，chunk_22.appservice.js:115 首 300 字符）✓。
  - quirk 复核：updateUserPlan update 分支原文 `e.globalData.plan_id=this.data.plan_id` + 传参 `plan_id:this.data.bind_plan`，spec ⚠ 记录与原文一致 ✓。
  - `history:i.unshift(l)`（members update 分支）：模块头 `i=t.command`（t=wx.cloud.database()），故实为 `db.command.unshift(l)`，spec §3 表「history:command.unshift(l)」语义正确 ✓。
  - 直连集合 phone/group/members/plan/user_plan/user_study 计数命中（collection 调用 2/2/3/1/1/1）✓；getClass 按 `_openid` 取班级、groupArr=names ✓；getUserInfo field babyInfo/total_days/groupID ✓。
  - 导航栏复核：app-config.json `"pages/jigou/jigou.html":{"window":{"navigationBarTitleText":""}}`，无 custom → 系统栏、标题运行时设置 ✓；组件注册 `pages/jigou/jigou.json` usingComponents={tui-nomore,tui-section,tui-tag} 于 app-service.js:46 逐字命中，富树无 tui-tag 节点 → spec §6 判断正确 ✓。
- diff 摘要：
  - 无实质 diff，spec 全部核对项通过。
  - 备注级（不影响结论）：① §1 树中 tips 循环外层 view 原文带空 class（z[2]=''），spec 未列，属示意省略；② bindMember 的 members update 分支 tag 取值有原文细节 `"bind"==n.data[0].platform ? n.data[0].tag : o.getTime()`（spec 未展开，与本页契约无关）；③ reLaunch 双形式并存：绑定态成功/失败为 `/pages/index/index`，checkBind/getList 失败路径为 `../index/index`，spec §5 表述仅覆盖绑定态，准确无冲突。
