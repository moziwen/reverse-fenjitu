---
页名: class
显示名: 班级打卡管理
状态: 已对账 PASS（2026-10-02，diff 1 为必须修正项，见第 8 节；同日蒸馏工已按 diff ①-⑤ 修订）
chunk: chunk_31.webview.js / chunk_31.appservice.js
导航栏: 系统栏（标题「班级打卡管理」）
---

# 页面还原规格：班级打卡管理（pages/class/class）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。

## 1. 页面骨架（节点树）

来源：`chunk_31.webview.js` 的 `$gwx_XC_25`（行号：ops 表 :19-185 共 167 条，渲染函数 m0 :191-468，注册 `e_[x[0]]={f:m0}` :469，`__wxAppCode__['pages/class/class.wxml']` :491）

【富树确认】webview 侧 chunk_31.webview.js 共 494 行、167 条 ops、m0 带完整 `_n()/_mz()` 节点构造并内嵌整页 wxss setCssToHead（:493）；对照 appservice 侧 chunk_31.appservice.js 仅 183 行、内嵌同名稀疏 `$gwx_XC_25` 副本（:1-80，其中 Z 函数定义在 :18，ops 条目 :19-79 共 61 条，无文案节点；2026-10-02 蒸馏工实读复核，diff ③ 原记「62 条」系把定义行计入）——已按硬规则弃用，骨架全部以下述 webview 富树为准。定位命令：`grep -l "'./pages/class/class.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_31.webview.js。

下文 Z 序号 = ops 序号，行号 = chunk_31.webview.js:19+Z（即 z[N] 位于第 19+N 行，两套标注严格对应，勿混写）。

```
<view class="tui-page__hd" wx:if="{{type==0}}">                     ← z[0]，m0:195-223（顶部说明块，仅样例态）
  <view class="tui-page__title">使用方法</view>                      ← z[3]
  <view class="tui-page__desc">1.老师可为学生创建班级，发布打卡计划，查看组员打卡详情</view>  ← z[5]/z[9]
  <view class="tui-page__desc">2.以下为样例模板，点击底部按钮创建后即可正式使用</view>
  <view class="tui-page__desc">3.创建之后，进入班级页面，然后转发邀请学生加入</view>
  <view class="tui-page__desc text-bold" bindtap="clickGuide">4.👉点击查看如何创建班级打卡计划👈</view>  ← z[10]/z[12]
</view>

<view class="tui-container">                                        ← z[13]，m0:224
  <view class="tui-extend-box" wx:for="{{list}}" wx:for-item="item" wx:for-index="index">  ← z[14]/z[15]，m0:339；item 模板 bCSB(m0:230-337)
    <view class="tui-extend-item">                                  ← z[17]（班级卡片）
      <view class="title-area">                                     ← z[20]
        <view class="tui-title" bind:longpress="editTitle" catch:tap="delete" data-id="{{index}}">
          {{item.name}}                                             ← z[19]/z[18]/z[21]/z[22]
          （{{item.member}}人）      ← z[25]，wx:if {{item.member<999}}（z[24]）
        </view>
      </view>
      <view class="tui-desc">“{{item.desc}}”</view>                ← z[26]/z[27]/z[28]，wx:if {{item.desc}}（z[26]）
      <view class="tui-sub-title">{{date_today}}</view>             ← z[30]/z[31]
      <text class="text-df"> 班级当前计划进度第{{item.current+1}}/{{item.total}}天</text>  ← z[33]/z[34]，wx:if {{item.total}}（z[32]）
      <view class="task-area">                                      ← z[34]
        <view class="tui-sub-title">当前计划已到期，可以先删除再重新创建</view>   ← z[37]，wx:if {{item.current>=item.total}}（z[35]）
        <view class="tui-sub-title">当前计划已删除，可以再重新创建</view>          ← z[40]，wx:if {{item.delete}}（z[38]）
        <view class="tui-sub-title" wx:for="{{item.task}}" wx:for-item="citem" wx:for-index="cindex">
          第{{citem.index+1}}课：《{{citem.title}}》                 ← z[46]/z[47]，m0:302
        </view>
      </view>
      <view class="tui-footer">                                     ← z[47]，m0:306-333
        <tui-tag wx:if="{{item.plan_id && item.plan_id.length!=0}}" catch:tap="goPlanDetail" data-id
                 padding="12rpx 24rpx" plain={{false}} shape="circle" size="34rpx" type="white">查看班级打卡计划</tui-tag>  ← z[48]-z[57]
        <tui-tag wx:else catch:tap="makePlan" …同款样式>创建班级打卡计划</tui-tag>                              ← z[58]/z[66]
        <tui-icon catch:tap="showSetting" color="#585858" name="setup" size="40"/>     ← z[67]
        <button catch:tap="clickShare" openType="share" style="border:none;background:transparent;padding:0;margin:0;" class="share-btn">
          <tui-icon color="#585858" name="share" size="40"/>                            ← z[73]/z[77]
        </button>
        <tui-icon catch:tap="goGroup" color="#585858" name="towardsright" size="36"/>  ← z[81]
      </view>
    </view>
  </view>
</view>

<view class="flex-sub text-center padding">                          ← z[87]，m0:342（底部创建按钮）
  <view class="solid-bottom">
    <button bindtap="clickBtn" class="bg-blue light text-xl" style="width:60%;">创建新的班级</button>  ← z[89]-z[92]
  </view>
</view>

<tui-modal fadeIn bindcancel="hideModal" custom show="{{modalCreate}}">   ← z[93]-z[95]，m0:352（创建弹窗）
  <view class="tui-modal-custom">
    <view class="tui-page__title">创建:</view>                       ← z[98]
    <input bindinput="inputTitle" class="tui-modal-input {{!modalCreate?'tui-hidden-input':''}}" placeholder="请输入班级名字（必填）"/>  ← z[99]-z[101]
    <input bindinput="inputDesc" placeholder="可输入班级描述（选填）"/>  ← z[102]/z[104]
    <button bindtap="submitCreate" class="bg-blue" height="72rpx" shape="circle" size="28">确定</button>  ← z[105]/z[110]
  </view>
</tui-modal>

<tui-modal bindcancel="hideModal" custom show="{{modalModify}}">     ← z[113]，m0:370（修改弹窗，show 由 JS setData）
  <view class="tui-modal-custom">
    修改:                                                            ← z[117]
    <input bindinput="inputTitle" placeholder="{{title_name}}"/>      ← z[119]
    <input bindinput="inputDesc" placeholder="{{title_desc.length==0?'此处输入班级描述':title_desc}}"/>  ← z[122]
    <button bindtap="submitModify" …同款>确定</button>                ← z[128]
  </view>
</tui-modal>

<tui-modal bindcancel="hideModal" custom show="{{modalSetting}}">    ← z[131]，m0:388（设置弹窗）
  <view class="section section_gap margin-top">                      ← z[132]
    <view class="title text-bold padding-left">1. 修改班级名字和描述:</view>  ← z[133]/z[134]
    <view class="thorui-flex__between padding-left">点击卡片里的班级名字，即可修改。</view>  ← z[135]/z[137]
    <view class="padding-xs">…</view>                                ← z[136]
    <view class="title text-bold padding-left">2. 修改已发布的打卡任务:</view>  ← z[140]
    <view …>点击查看打卡计划，可进行任务添加或删除操作。</view>          ← z[143]
    <view class="title text-bold padding-left">3. 删除班级:</view>     ← z[146]
    <view …>长按班级名字，即可彻底删除班级。</view>                     ← z[149]
    <view class="text-between">                                      ← z[151]
      <text>4. 审核组员加入: </text>                                  ← z[153]
      <switch bindchange="changeSetting" checked="{{is_shenhe}}" class="blue"/>  ← z[154]-z[156]
      <view>开启后，本班级将禁止用户加入。</view>                      ← z[159]
    </view>
    <view class="tui-modal-custom margin-top">
      <button bindtap="hideModal" class="bg-blue" height="72rpx" shape="circle" size="28">确定</button>  ← z[162]-z[166]，m0:458-464
    </view>
  </view>
</tui-modal>
```

用到的自定义组件：**tui-tag / tui-icon / tui-modal**（webview 树 `_mz` 调用可见，chunk_31.webview.js:311/317/322/352 等）。⚠ `app-config.json` 页面级与 global 配置均未检索到 `usingComponents` 声明（疑被此打包格式剥离）——组件注册方式待复核。

### 状态分支
- `type==0`（无班级/样例态）：显示顶部「使用方法」说明块 + 样例模板卡片；`type!=0`（有班级）：说明块隐藏（z[0] wx:if，m0:195）。
- 样例卡片内容（type=0 时展示，来源 chunk_31.appservice.js:182）：name "A级英语打卡"、desc "坚持打卡30天会有奖励哦"、date "2025-01-23"、current:8/total:30、task = [{cover: https://qianyufang.top/A/Cover/butterfly.jpg, id: A-11, index: 7, title: "Hello butterfly"}, {…, index: 8, title: "At the pond"}]。
- 卡片 footer：`item.plan_id && item.plan_id.length!=0` → 「查看班级打卡计划」；否则 → 「创建班级打卡计划」（z[49]/z[58]）。
- 计划到期：`item.current>=item.total` → 灰字「当前计划已到期…」（z[35]）；`item.delete` → 「当前计划已删除…」（z[38]）。
- 人数显示上限：`item.member<999` 才追加「（N人）」（z[24]）。

## 2. 样式规格

来源：`wxss_out/pages__class__class.wxss`（23 条规则，数值直接当 px，不除 2）。已与权威 `chunk_31.webview.js:493` 内嵌 setCssToHead 逐条对照一致。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .tui-page__hd | padding:10px; margin-bottom:10px; width:100%; box-sizing:border-box | 顶部说明块容器 |
| .tui-page__title | font-size:20px; font-weight:400; text-align:left | 「使用方法」/「创建:」标题 |
| .tui-page__desc | color:#888; font-size:13px; margin-top:15px | 说明行 |
| .tui-desc | color:#5c5555; font-size:14px; padding:5px 0 | 班级描述引号文案 |
| .tui-container | display:flex; flex-direction:column; justify-content:center; padding:15px | 列表容器 |
| .tui-extend-box | flex:1; margin-right:5px（:last-child margin-right:0） | 列表包裹层 |
| .tui-extend-item | background:#dfeaf3; border-radius:10px; box-shadow:0 3px 8px 1px rgba(0,0,0,.15); color:#fff; font-family:Microsoft YaHei; padding:15px 10px; margin-bottom:10px; word-break:break-all | 班级卡片 |
| .title-area | display:flex; align-items:center; justify-content:space-between; position:relative; z-index:10 | 卡片标题区 |
| .tui-title | font-weight:600（前有 font-weight:200 被覆盖）; padding:15px 0; text-align:center; width:100%; color:#36454f; font-size:19px | 班级名 |
| .tui-sub-title | color:#36454f; font-size:19px; padding:10px 8px; text-align:left | 日期/进度/任务行 |
| .task-area | margin-bottom:15px; min-height:50px; z-index:999 | 任务列表区 |
| .tui-footer | display:flex; align-items:center; justify-content:space-between; width:100% | 卡片底部操作区 |
| .tag-item / .icon-item | flex:0 0 50% / flex:1，均 flex 居中 | 底部操作项 |
| .share-btn | line-height:normal; width:auto!important | 分享按钮 |
| .tui-modal-custom | text-align:center | 弹窗内容 |
| .tui-modal-input | border-bottom:0.5px solid #e6e6e6; font-size:16px; margin:15px auto 25px; width:80% | 弹窗输入框 |
| .tui-hidden-input | width:0 | 隐藏弹窗时的输入框 |
| .text-between | display:flex; flex-direction:row; justify-content:space-between; width:90% | 设置弹窗第 4 节 |

依赖的全局类（ColorUI 等，来自 page-frame.html setCssToHead，本页 wxss 不含）：`.flex-sub` `.text-center` `.padding` `.solid-bottom` `.bg-blue` `.light` `.text-xl` `.text-df` `.text-bold` `.section` `.section_gap` `.margin-top` `.padding-left` `.padding-xs` `.thorui-flex__between` `.blue`。

## 3. 事件与逻辑

来源：`chunk_31.appservice.js`（页面定义 `define("pages/class/class.js",…)` :181-183，单行压缩体 :182；本节行号均指 :182）

| 事件 | 处理函数 | 行为概述 | 云数据库调用 | 写回 |
|---|---|---|---|---|
| tap 引导行 | clickGuide | wx.openOfficialAccountArticle 打开帮助文章 | — | — |
| tap 创建按钮 | clickBtn | vip 数量限额校验（见下）→ 开 modalCreate | — | — |
| input 创建/修改弹窗 | inputTitle / inputDesc | 写入 title_name / title_desc | — | — |
| tap 确定（创建） | submitCreate | 名字校验（见下）→ createGroup | group.add / group.get(查重) | 新增 group 记录，刷新 list |
| tap 确定（修改） | submitModify | 同名校验 → modifyGroup | group.update | list 内 name/desc |
| longpress 班级名 | editTitle | 开 modalModify（title_name/title_desc 取当前 item） | — | — |
| catch:tap 班级名 | delete | wx.showModal 确认 → 删除班级 | group.remove | list 刷新，空则回样例 |
| catch:tap 查看计划 | goPlanDetail | **仅 type==1 有动作**：navigateTo ../planDetail/planDetail?plan_id=&group_index=；**原文无 else 分支——样例态（type!=1）点击无任何反应、无 toast**（:182 原文实读：`goPlanDetail:function(t){if(1==this.data.type){…navigateTo…}}`） | — | — |
| catch:tap 创建计划 | makePlan | navigateTo ../planCreate/planCreate?group_id=&click=<index> | — | — |
| catch:tap 设置齿轮 | showSetting | 开 modalSetting | — | — |
| switch 审核开关 | changeSetting | 800ms 防抖（s 标志位）→ changeClassShenhe → toast「已禁止用户加入」/「已允许用户加入」 | group.update({is_shenhe}) | is_shenhe |
| catch:tap 右箭头 | goGroup | wx.navigateTo ../group/group?id=<group_id> | — | — |
| button 分享 | clickShare | 设 share_title=name+「邀请你加入班级打卡」；share_cover 默认 shareImg.png，有 task 时用 task[0].cover | — | — |
| onShareAppMessage | — | path="/pages/group/group?groupID="+share_group_id | — | — |
| onShareTimeline | — | title「分享你一个英语绘本分级阅读小程序」 imageUrl=https://qianyufang.top/public/yingyu/fenjitu.jpg | — | — |
| onLoad | onLoad | setData({vip: globalData.vip, date_today: globalData.today_date}) → checkGroup() → wx.getWindowInfo 算 modal_height=750/windowWidth*windowHeight*0.8 | — | — |

**本页 0 次 wx.cloud.callFunction**（grep 计数=0，已在本会话复核：`grep -c "callFunction" unpacked/chunk_31.appservice.js` → 0），全部走 `wx.cloud.database()` 客户端 API 直连（`var e=wx.cloud.database({})`，:182）。集合调用清单（已复核计数：group×10 / plan×1 / user_study×1 / class×1）：

- **collection("group") ×10**：
  1. checkGroup：where({_openid}).orderBy("tag","desc").get —— 空 → type:0+样例；非空 → type:1+getPlanCurrent+countUserNumber
  2. transferGroup：逐条 add 复制 group 记录（旧表 class → group 迁移），末尾 remove class
  3. countUserNumber 内：where({group_id}).update({member:n})
  4. updateGroupName / updateGroupDesc：where({_openid,group_id}).update({name} / {desc})
  5. delete：where({_openid,group_id}).remove
  6. createGroupma：where({group_id}).get —— 6 位随机 ID 查重，字母表 `ABCDEFGHJKLMNPQRSTUVWXYZ123456789`（不含 I/O/0）
  7. createGroup：add({vip,group_id,name,desc,tag:Date.getTime(),time:formatTime+" "+formatHour})
  8. modifyGroup：where({_openid,group_id}).update({name,desc})
  9. changeClassShenhe：where({_openid,group_id}).update({is_shenhe})
  （第 10 处在压缩体内，具体语句待复核——压缩体未逐段反展开，仅按 grep 计数确认总数 10）
- **collection("plan") ×1**：getCurrentTask：where({plan_id}).get —— i<list.length → list[i].task=plan.list[i], current=i；越界 → task=[]；plan 不存在 → task=[]+plan_id=""+delete:true
- **collection("user_study") ×1**：countUserNumber：where({groupID}).field({baby_id:true}).count → member=total，再回写 group.member
- **collection("class") ×1**：transferGroup 末尾 remove（旧班级表迁移清理）

### 计算规则（创建限额/校验，必须精确到边界）
- **创建数量限额**（clickBtn，:182；2026-10-02 按原文反展开更正，diff ②）——条件链为三元嵌套，**仅前两支只 toast 不开弹窗**：
  - `vip<=0 && list>=5` → toast「创建数量超限」（仅 toast，不开弹窗）
  - 否则 `vip==1 && list>=50` → toast「创建数量超限，不能超过50个」（仅 toast，不开弹窗）
  - 其余全部落入第三支（逗号表达式：先按条件 toast，再 `setData({…,modalCreate:!0})` **打开创建弹窗**）：
    - `vip==2`：list>=20 → toast「创建数量超限，年会员不能超过20个」（toast 后仍开弹窗）
    - 非 vip==2（含 vip<=0 且 list<5、vip==1 且 list<50）：list>=10 → toast「创建数量超限，月会员不能超过10个」（toast 后仍开弹窗；**月会员支条件是「非 vip==2」，非「vip==2 且 >=10」**）
- **提交校验**（submitCreate/submitModify，:182）：
  - 名字空 → 「名字不能为空」
  - 名字 >15 字 → 「班级名字不能超过15个字」
  - 描述 >30 字 → 「班级描述不饿能超过30个字」（**原文错别字照录**，:182）
- **成员数**：user_study.count 后直接写回 group.member（供卡片「（N人）」展示）。
- **计划进度**：current 取自 plan.list 索引，展示时 +1（骨架 z[34]）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 班级封面/任务封面 | 复用 task.cover 字段（样例 `https://qianyufang.top/A/Cover/<课程英文名>.jpg`），本页自身不生成新路径 | chunk_31.appservice.js:182 样例 o.task[0].cover | ⚠️ 待真机验证 |
| 默认分享图 | `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png` | chunk_31.appservice.js:182（clickShare，命名规律记录） | ⚠️ 待真机验证 |
| 朋友圈分享图 | `https://qianyufang.top/public/yingyu/fenjitu.jpg` | chunk_31.appservice.js:182（onShareTimeline） | ⚠️ 待真机验证 |
| 引导文章 | `https://mp.weixin.qq.com/s/ZAS23CKbju4_6JFFFaA61Q`（公众号文章，非图片资源） | chunk_31.appservice.js:182（clickGuide） | ⚠️ 待真机验证 |

本页不新增音频路径规律；样例仅 1 条（appservice 内置样例对象），无批量样本可统计。

## 5. 弹窗 / 分支状态

- **创建弹窗 modalCreate**：tui-modal fadeIn，输入名字（必填）+描述（选填），submitCreate 校验后 createGroup（6 位随机 group_id 查重 + add）。
- **修改弹窗 modalModify**：placeholder 复用 title_name / title_desc（描述空时占位「此处输入班级描述」），submitModify → modifyGroup。
- **设置弹窗 modalSetting**：4 节说明（改名改描述 / 改打卡任务 / 删除班级 / 审核开关），第 4 节为 switch（checked={{is_shenhe}}，class="blue"），changeSetting 800ms 防抖后 changeClassShenhe 更新并 toast。底部「确定」按钮仅 hideModal。
- **删除确认**：wx.showModal(title「删除班级」, content「删除班级 [name] 以后，将无法再发布任务和管理成员」)，确认后 remove；list 删空回样例态（type:0）。
- **样例态 type==0**：顶部使用方法块 + 样例卡片（数据为内置 o 对象）；此时 makePlan/goGroup 的 else 分支仅 toast 提示（:182 原文实读属实）；**goPlanDetail 无 else 分支，样例态点击无任何反应**（见第 3 节表，diff ① 更正）。

## 6. 数据结构（对照 captures）

- captures/collections 现有样本仅 units / words / user_school / _counts（captures/collections/ 目录清单，本会话 ls 复核），**无 group / plan / class 集合样本**。本页涉及集合的真实数据结构待补抓样本后对照（遵守只读限速纪律）。
- **数据结论口径：无样本，仅代码依据**——class 集合不可采集（旧表，transferGroup 迁移后即 remove），本页全部数据结论（group/plan/user_study 字段与流程）均来自对 chunk_31.appservice.js:182 客户端直查代码的反推，未与任何真实样本对照；补抓样本前不得视为已验证。
- 可从代码确认的字段（chunk_31.appservice.js:182）：group：_openid, group_id, name, desc, tag(时间戳), time, member, is_shenhe, plan_id, current, total, task[]（task 内 cover/id/index/title）；plan：plan_id, list[]。

## 7. 待考事项

- **data.options 图表配置**（dataset name「最近7天班级成员打卡率(%)」、color #ff7900、Ymin 10/Ymax 100，chunk_31.appservice.js:182）在本页 webview 骨架中未见渲染节点——疑为遗留字段或供图表组件动态使用，待考。
- **app-config usingComponents 缺失**：页面用了 tui-tag/tui-icon/tui-modal 但 app-config.json 无声明，疑被打包格式剥离，待考。
- **vip==2 限额文案**：「年会员不能超过20个」/「月会员不能超过10个」同属 clickBtn 第三支内的 vip==2 与非 vip==2 二分（详见第 3 节限额规则，diff ② 已按原文更正分支结构）；vip 值与会员等级映射仍待对照其他页 spec 复核。
- collection("group") 第 10 处调用语句未逐段反展开定位，仅 grep 计数确认（见第 3 节注）。

## 8. 对账记录（对账员填写）

对账时间：2026-10-02。方法：独立重推——webview 侧通读 `chunk_31.webview.js` 全 494 行（ops :19-185 共 167 条已复核计数、m0 :191-468、注册 :469、`__wxAppCode__` :491、setCssToHead :493）；appservice 侧通读 `chunk_31.appservice.js:182` 压缩体全文（逐函数反读至 `clickGuide` 收尾）；`wxss_out/pages__class__class.wxss` 23 条规则与内嵌 setCssToHead 逐条对照。

- [x] 节点树与原文一致 —— z[0]~z[166] 逐条 ops 核对：文案节点、wx:if 条件（type==0 / member<999 / item.desc / item.total / current>=total / item.delete / plan_id&&length!=0 / title_desc.length==0）、_mz 组件调用（tui-tag×2 / tui-icon×3 / tui-modal×3 / button×5 / input×4 / switch×1）与骨架一致。备注①：设置弹窗 4 节的原始结构是「view 节容器 > text 标题 + view 行容器 > text 正文」，spec 把 text 拍平成 view——如「1. 修改班级名字和描述:」实为 `<text class="title text-bold padding-left">`（z[133]类/z[134]文），正文是 `<text class="padding-xs">`（z[136]）外套 `<view class="thorui-flex__between padding-left">`（z[135]）；第 4 节外层另有 `view.section.section_gap.margin-top`（z[150]），text-between（z[151]）内含 text.title.text-bold.padding-left 标题（z[152]/z[153]）+switch（z[154]-z[156]），其后另有 `view.thorui-flex__between.padding-left`（z[157]）> `text.padding-xs`（z[158]）包「开启后…」（z[159]）。类名与文案无缺，层次需蒸馏工修正。备注②：z 序号标注混用——z[44]/z[49]/z[52]/z[65]（（N人）/date_today/进度行/第N课 的内容）实为**行号**，对应 ops 序号应为 z[25]/z[30]/z[33]/z[46]。
- [x] 类名抽查 25 处全中 —— tui-page__hd / tui-page__title / tui-page__desc / tui-container / tui-extend-box / tui-extend-item / title-area / tui-title / tui-desc / tui-sub-title / task-area / tui-footer / tag-item / icon-item / share-btn / tui-modal-custom / tui-modal-input / tui-hidden-input / text-between 共 19 个在本页 wxss_out 逐条命中且数值与第 2 节表一致；text-df / flex-sub / text-center / padding / solid-bottom / bg-blue / light / text-xl / text-bold / section_gap / margin-top / padding-left / padding-xs / thorui-flex__between / blue 在 page-frame.html 命中（grep 计数均 >0，如 flex-sub 14 / text-xl 30 / thorui-flex__between 5）；footer-item 在 page-frame.html 命中 3 处（本页 wxss 不含，spec 已归全局类，属实）。
- [x] 文案逐字一致 —— 骨架 22 条静态文案 + JS 侧 23 条 toast/modal 文案全部逐字核对通过（含错别字「班级描述不饿能超过30个字」照录无误；「4. 审核组员加入: 」尾部空格、进度行「 班级当前计划进度第」首部空格均在）；删除确认弹窗 content「删除班级 [name] 以后，将无法再发布任务和管理成员」、分享标题「…邀请你加入班级打卡」、朋友圈文案与 URL 均一致。app-config 页面标题「班级打卡管理」一致（pages/class/class.html → navigationBarTitleText）。
- [x] 事件与云数据库调用清单齐全 —— webview 侧 15 个绑定事件 + onShareAppMessage / onShareTimeline / onLoad 与第 3 节表逐一对应；`grep -c "callFunction" unpacked/chunk_31.appservice.js` → 0 属实；collection 计数 group×10 / plan×1 / user_study×1 / class×1 属实（grep -o 复核）。**第 7 节「第 10 处 group 调用待复核」可闭合**：checkGroup.get / transferGroup.add / countUserNumber.update / updateGroupName.update / updateGroupDesc.update / delete.remove / createGroupma.get / createGroup.add / modifyGroup.update / changeClassShenhe.update 恰为 10 处，无未知调用。

diff 摘要（交蒸馏工修正，骨架结论不动）：

1. 【行为描述错误，必须修】goPlanDetail **无 else 分支**：原文 `goPlanDetail:function(t){if(1==this.data.type){…navigateTo…}}`——样例态（type==0）点击「查看班级打卡计划」无任何反应（无 toast）。第 3 节表「type!=1 时仅 toast」及第 5 节「goPlanDetail/makePlan/goGroup 仅 toast 提示」中 goPlanDetail 部分不成立（makePlan/goGroup 的 else toast 属实）。
2. 【限额分支描述不准】clickBtn 原文：`2==vip ? (list>=20&&toast「年会员…20个」) : (list>=10&&toast「月会员…10个」), setData({…,modalCreate:!0})`——月会员支条件是**非 vip==2**（含 vip<=0 且 list<5 落入此支），非「vip==2 且 >=10」；且除 vip<=0&&list>=5 与 vip==1&&list>=50 两支只 toast 外，其余情况（含 vip==2 超限） setData 仍会打开创建弹窗。
3. 【稀疏副本参数修准】appservice 侧稀疏 `$gwx_XC_25` 实际位于 :1-80，Z 条目 62 条（行 18-79），第 1 节「:1-180，约 80 条」修准。
4. 【小遗漏】样例对象含 `date:"2025-01-23"` 字段（o.date），第 1 节状态分支未列。
5. 【行号/序号标注混用】见上备注②，z[N] 与行号 19+N 两套标注混用，引用时以 ops 序号为准。

结论：PASS。4 项核对全过；diff 1 为必须修正项，2-5 为修准项；第 7 节待考事项（usingComponents 剥离 / vip 映射 / options 图表遗留）维持待考。

---

**蒸馏工修订（2026-10-02）：已按 diff ①-⑤ 修订。** 修订前均已实读原文核实，未凭清单盲改：

1. 【diff ①】实读 chunk_31.appservice.js:182 `goPlanDetail:function(t){if(1==this.data.type){…navigateTo…}}`——确认无 else 分支。已更正第 3 节表与第 5 节：样例态（type!=1）点击「查看班级打卡计划」无任何反应（无 toast）；makePlan/goGroup 的 else toast 属实并保留。
2. 【diff ②】实读 chunk_31.appservice.js:182 `clickBtn`——确认条件链为 `vip<=0&&list>=5?toast : (vip==1&&list>=50?toast : (vip==2?(list>=20&&toast):(list>=10&&toast)), setData({…,modalCreate:!0}))`。已更正第 3 节限额规则：月会员支条件是「非 vip==2」（含 vip<=0 且 list<5），非「vip==2 且 >=10」；仅 vip<=0&&list>=5 与 vip==1&&list>=50 两支只 toast，其余情况（含 vip==2 超限）setData 仍打开创建弹窗。
3. 【diff ③】实读 chunk_31.appservice.js:1-80——稀疏 `$gwx_XC_25` 副本 Z 函数定义在 :18，ops 条目实际位于 :19-79 共 61 条（diff 清单所记 62 条系把 `function Z(ops)` 定义行计入）。已修准第 1 节为「:1-80，ops 条目 :19-79 共 61 条」。
4. 【diff ④】grep 核实 chunk_31.appservice.js:182 样例数组 o[0] 首字段即 `date:"2025-01-23"`。已在第 1 节状态分支补列。
5. 【diff ⑤】按「行号 = 19+ops 序号」逐条重标（z[0]@L19 起连续验证至尾部）：（N人）应为 z[25]（原误标 z[44]）、date_today 应为 z[30]/z[31]（原 z[29]/z[49]）、进度行应为 z[33]/z[34]（原 z[31]/z[32]/z[52]）、第N课应为 z[46]/z[47]（原 z[43]/z[65]）；desc 引号文案更正为 z[26]-z[28]（原 z[47] 为行号混入）、设置弹窗确定按钮更正为 z[162]-z[166]（原 z[160]/z[166]）、计划进度引用更正为 z[34]（原 z[52]）。第 1 节已注明两套标注严格对应、勿混写。

数据结论口径：第 6 节已补「无样本，仅代码依据」声明（class 集合不可采集，本页数据结论全部来自 group/plan/user_study 客户端直查代码反推）。
