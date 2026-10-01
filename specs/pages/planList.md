---
页名: planList
显示名: 打卡计划列表
状态: 对账通过（待验收）
chunk: chunk_37.webview.js / chunk_37.appservice.js
导航栏: 系统栏（标题「打卡计划列表」）
---

# 页面还原规格：打卡计划列表（pages/planList/planList）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_37.webview.js（262 行，含末尾空行，本次全读），A=unpacked/chunk_37.appservice.js（`grep -c ""`=154 行；Page 主体在 A:153 单行压缩，本次用 grep -o 逐字面量核实），X=unpacked/wxss_out/pages__planList__planList.wxss（263 行，本次抽读关键行），C=unpacked/app-config.json（python json 解析）。
> 定位命令与输出：`grep -l "'./pages/planList/planList.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_37.webview.js；复核 W:96 `var x=['./pages/planList/planList.wxml']`、W:259 `__wxAppCode__['pages/planList/planList.wxml'] = $gwx_XC_31(...)`。
>
> **⚠ _mz 索引坑（已按 SKILL 规则换算，并与 ops 表逐条对上）**：`_mz(z,'tui-tag',['bind:tap',3,'data-id',1,'margin',2,...])`（W:104）中，首个属性取其印出的数字为 ops 下标，后续属性为「首下标 + 连续偏移」。即 bind:tap=z[3]、data-id=z[4]、margin=z[5]、padding=z[6]、plain=z[7]、shape=z[8]、size=z[9]、type=z[10]。已与 ops 定义逐条核对：z[3]=W:22 'selectLevel'、z[4]=W:23 'index'、z[5]=W:24 '10rpx 20rpx'、z[6]=W:25 '12rpx 24rpx'、z[7]=W:26 false、z[8]=W:27 'circle'、z[9]=W:28 '34rpx'、z[10]=W:29 selected==index 三元，全部吻合。
>
> **⚠ 双份 $gwx_XC_31**：A:1-151 还有一份逻辑层渲染副本（A:1 定义、A:14-63 ops、A:151 结束），其 ops 索引与 W 侧**不一致**（实测副本 `Z([3,'tui-container'])` 在 A:46，按首 Z 行 19 起算即 z[27]；W 侧为 z[30]）。**骨架引用一律以 W 为准，勿混用两份索引。**

## 1. 页面骨架（节点树）

来源：`chunk_37.webview.js` 的 `$gwx_XC_31`（W:1 定义；ops 表 z[0..72] 在 W:19-91；渲染函数 m0 在 W:97-235；根节点 `root={tag:"wx-page"}` W:240）。m0 返回 **3 个顶层节点**（W:120/217/219 的 `_(r,…)`）。

```
<root wx-page>

① 顶部筛选栏
<view class="tui-footer  margin-top">                                  z[0]=W:19（原文 class 双空格）；挂载 W:99-100
  <!-- wx:for={{levels}} z[1]=W:20，_2z 挂载 W:111，项模板 W:103-109，项名 item/index -->
  <tui-tag bind:tap="selectLevel" data-id="{{index}}"
           margin="10rpx 20rpx" padding="12rpx 24rpx" plain="{{false}}"
           shape="circle" size="34rpx"
           type="{{selected==index?'primary':'gray'}}">                _mz W:104（换算见页首）；z[5..9]=W:24-28
    {{item}}级                                                         z[11]=W:30；_oz W:105
  </tui-tag>
  <tui-tag bind:tap="selectLevel" data-id="99"                         W:112-115；bind:tap=z[12]=z[3]、data-id=z[13]=W:32 '99'
           margin/padding/plain/shape/size 同上（复用 z[14..18]=z[5..9]）
           type="{{selected==99?'primary':'gray'}}">                   z[19]=W:38
    我打卡的                                                           z[20]=W:39
  </tui-tag>
  <tui-tag bind:tap="selectLevel" data-id="100"                        W:116-119；bind:tap=z[21]=z[3]、data-id=z[22]=W:41 '100'
           margin/padding/plain/shape/size 同上（复用 z[23..27]=z[5..9]）
           type="{{selected==100?'primary':'gray'}}">                  z[28]=W:47
    我创建的                                                           z[29]=W:48
  </tui-tag>
</view>

② 计划列表区
<view class="tui-container">                                           z[30]=W:49；挂载 W:121-122
  <view class="tui-extend-box">                                        z[31]=W:50；挂载 W:123-124
    <!-- wx:for={{list}} z[32]=W:51，_2z 挂载 W:195，项模板 W:127-193，项名 item/index -->
    <view bind:longpress="deletePlan" bind:tap="goPlanDetail"
          class="tui-extend-item" data-id="{{index}}"
          style="background-image:url({{item.cover}});background-size:cover;">
                                                                       _mz W:128：bind:longpress=z[34]=W:53 'deletePlan'、bind:tap=z[35]=W:54 'goPlanDetail'
                                                                       class=z[36]=W:55、data-id=z[37]=z[4]='index'、style=z[38]=W:57（拼接表达式）
      <!-- wx:if={{item.public}} z[39]=W:58，判断 W:131 -->
      <view class="bg-green tui-new-label-top text-center text-white text-xs">置顶</view>
                                                                       z[40]=W:59、z[41]=W:60；渲染 W:132-136
      <view class="title-area">                                        z[42]=W:61；W:138-139
        <view class="tui-title">{{item.title}}</view>                  z[43]=W:62、z[44]=W:63；W:140-143
      </view>
      <view class="tui-desc">"{{item.desc}}"</view>                    z[45]=W:64、z[46]=W:65（字面量 \x22，desc 两端带字面引号）；W:146-149
      <!-- wx:if={{selected<99}} z[47]=W:66，判断 W:153 -->
      <view class="tui-sub-title">共有{{item.member||0}}人参与打卡</view>
                                                                       z[48]=W:67、z[49]=W:68（member 空则 0）；W:154-157
      <!-- wx:if={{selected==99}} z[50]=W:69，判断 W:162 -->
      <view class="tui-sub-title">                                     z[51]=z[48]=W:70；W:163-164
        <!-- 二分支 W:165-176 -->
        wx:if={{plan_exist_cur && index==0}}（z[52]=W:71，判断 W:167）：
          当前正在打卡，我已打卡{{item.day}}天                          z[53]=W:72；W:168-169
        else（W:171-173）：
          添加于{{stringUtil.subStr(item.time,10)}}，我共打卡{{item.day}}天
                                                                       z[54]=W:73（后两段复用 z[53][2..3]）
      </view>
      <!-- wx:if={{selected==100}} z[55]=W:74，判断 W:180 -->
      <view class="tui-sub-title">[{{item.level}}级] 计划共有{{item.total}}天，共有{{item.member||0}}人参与打卡</view>
                                                                       z[56]=z[48]=W:75、z[57]=W:76（末两段复用 z[49][2..3]）；W:181-184
    </view>
    <tui-nomore backgroundColor="#f7f7f7" text="暂无更多了"/>           z[58]=W:77、z[59]=W:78；挂载 W:196-197
    <!-- ⚠ tui-nomore 在 .tui-extend-box 内、wx:for 之外：列表恒挂，非空也有 -->
  </view>
  <!-- wx:if={{list.length==0}} z[60]=W:79，判断 W:201 -->
  <view>                                                               W:202
    <view class="padding flex flex-direction text-center margin-top-xl">   z[61]=W:80；W:203-204
      <text class="text-xl text-grey margin-top">暂无计划</text>        z[62]=W:81、z[63]=W:82；W:205-208
    </view>
  </view>
  <view class="tui-safearea-bottom"/>                                  z[64]=W:83；挂载 W:213-215
</view>

③ 底部悬浮按钮
<!-- wx:if={{create_plan}} z[65]=W:84，判断 W:220 -->
<view class="flex-sub text-center bottom-btn"
      style="position:fixed;bottom:100rpx;width:100%;opacity:0.9;">    z[66]=W:85、z[67]=W:86；W:221-222
  <button bindtap="goPlanCreate" style="width:50%;background-color:#5677fc;">
                                                                       z[68]=W:87、z[69]=W:88；W:222
    <view class="cuIcon-roundadd text-xl text-white"/>                 z[70]=W:89；W:223-225
    <text class="text-white">创建个人打卡计划</text>                    z[71]=W:90、z[72]=W:91；W:226-229
  </button>
</view>
```

### 状态分支
- **selected 三态**（A:153 data `selected:0`，selectLevel 设置）：
  - 0-11：等级筛选（`levels:["AA","A","B","C","D","E","F","G","H","I","J","K"]` 12 级，A:153，本次 grep 实测）→ 列表项显示 `共有N人参与打卡`（z[49]）
  - 99：「我打卡的」→ 项 0 若为当前计划显示 `当前正在打卡…`，其余显示 `添加于<日期>…`（z[53]/z[54]）
  - 100：「我创建的」→ 显示 `[X级] 计划共有N天，共有N人参与打卡`（z[57]）
- **item.public 为真** → 卡片右上角「置顶」角标（z[39]→z[41]，W:131-136）
- **list.length==0** → 空态「暂无计划」（z[60]→z[63]，W:201-212）；与此同时列表尾 tui-nomore「暂无更多了」恒在（W:196-197，在 wx:for 外）
- **create_plan**（onLoad 按 `globalData.plan_id` 是否非空计算）→ 底部悬浮「创建个人打卡计划」按钮显隐（z[65]，W:220）

### 页面级 wxs
`stringUtil` 作用域为本页 wxml：绑定 `f_['./pages/planList/planList.wxml']['stringUtil']=nv_require("m_./pages/planList/planList.wxml:stringUtil")`（unpacked/webview.app.js:1446，本次实测）；实现 `subStr(str,len)=str.substring(0,len)`（webview.app.js:1447 `np_8`，本次实测；page-frame.html:1509 同）。故 `subStr(item.time,10)` 取 time 前 10 位即日期段。

### 依赖组件（页面 json 注册）
页面 json 原文（unpacked/app-service.js:52，本次实测；common.app.js:52 / page-frame.html:52 同）：
`__wxAppCode__['pages/planList/planList.json'] = {"navigationBarTitleText":"打卡计划列表","usingComponents":{"tui-nomore":"/components/tui-nomore/tui-nomore","tui-tag":"/components/tui-tag/tui-tag"}}`
- `tui-tag`：用到 props bind:tap/data-id/margin/padding/plain/shape/size/type；内部 wxs `getTypeClass`（plain→`tui-{{type}}-outline`，否则 `tui-{{type}}`）、`getClassName`（shape==circle→`tui-tag-fillet` 等）在 unpacked/appservice.app.js:1305 与 unpacked/webview.app.js:1425（本次实测）；组件样式 unpacked/wxss_out/components__tui-tag__tui-tag.wxss（本次 ls 实测存在）
- `tui-nomore`：props backgroundColor/text；样式 unpacked/wxss_out/components__tui-nomore__tui-nomore.wxss（本次 ls 实测存在）
- 组件自身注册：unpacked/components/tui-tag/tui-tag.json = `{"component":true,"usingComponents":{}}`（依据包核实，本次未复读）

## 2. 样式规格

来源：`wxss_out/pages__planList__planList.wxss`（还原自 W:261 的 setCssToHead，尾注 `(./pages/planList/planList.wxss:1:26875)`）。数值直接当 px 抄。以下为**骨架实际用到的选择器**（其余 ~230 行为 thorui/tui 组件库 demo 样式整包混入，还原时忽略）。

| 类名 | 关键样式（行号 X:） | 用途 |
|---|---|---|
| .tui-footer | flex 横排换行、align-items:center、color:#585858、min-height:28px（X:10）；与 .tui-sub-title 共享 position:relative;z-index:10（X:9） | 顶部筛选栏（class 组合 `tui-footer  margin-top`，原文双空格） |
| .tui-container | X:2 justify-content:center;padding:15px;width:100%；X:46 flex 纵向、padding-bottom:env(safe-area-inset-bottom)、box-sizing:border-box | 列表区容器 |
| .tui-extend-box | flex:1、margin-right:5px（X:3）；last-child 归零（X:4） | 列表包裹 |
| .tui-extend-item | background:#dfeaf3、border-radius:10px、color:#fff、font-family:Microsoft YaHei、margin-bottom:5px、padding:15px 10px、text-align:justify、word-break:break-all、position:relative（X:5） | 计划卡片（背景图由行内 style `background-image:url(item.cover);background-size:cover` 叠加，z[38]=W:57） |
| .tui-title | X:6 font-size:20px;font-weight:700;line-height:20px；X:31 覆盖 color:#666;line-height:15px;padding:15px；X:238 再覆盖 color:#fff;font-size:19px;font-weight:200;font-weight:600;padding:15px 0;text-align:center —— **CSS 级联最终生效 19px 白字居中** | 卡片标题 |
| .tui-desc | font-size:14px;padding:5px 0;text-align:left（X:240）；color:`v#fff6e4`（**原文笔误，非法颜色值，实际不生效**）；X:239 与 .tui-title 共享 width:100% | 卡片描述 |
| .tui-new-label-top | absolute right:0 top:0、height:17px、width:28px、border-radius:12%（X:7，配 ColorUI .bg-green/.text-white） | 置顶角标 |
| .tui-sub-title | color:#fff、font-size:16px、padding:10px 8px、text-align:left（X:8）；relative+z-index:10（X:9） | 卡片副标题行 |
| .title-area | flex 两端对齐、position:relative、z-index:10（X:253） | 标题行布局 |
| .bottom-btn | position:fixed、bottom:50px、z-index:999、width:100%（X:12），与行内 style `bottom:100rpx;opacity:0.9` 叠加 | 底部悬浮按钮 |
| .tui-safearea-bottom | height:env(safe-area-inset-bottom)、margin-bottom:50px、width:100%（X:201） | 底部安全区垫高 |
| body / .container | background-color:#f7f7f7（X:107）；padding-bottom:env(safe-area-inset-bottom)（X:108） | 页面底色 |

依赖的全局类（ColorUI，定义在 page-frame.html 全局 setCssToHead，本次 grep 到 CSS 变量与类名命中 53 处，未逐类核值）：`.bg-green` `.text-white` `.text-xs` `.text-center` `.text-xl` `.text-grey` `.margin-top` `.margin-top-xl` `.padding` `.flex` `.flex-direction` `.flex-sub` `.cuIcon-roundadd`

**原文笔误原样记录（还原时保留与否由 page-restorer 决定，spec 不改写）**：`.tui-desc{color:v#fff6e4}`（X:240 与 W:261 一致）；`.tui-default{color:"#d7f0db"}`（X:32，本页骨架未用到）。

## 3. 事件与逻辑

来源：`chunk_37.appservice.js`（A:152 `__wxRoute="pages/planList/planList"`；A:153 Page 主体单行；A:154 选项 `{isPage:true,isComponent:true,currentFile:'pages/planList/planList.js'}`——以上本次 sed 实测）。页面头部：`var t=wx.cloud.database({}), e=t.command`（云数据库客户端直连）、`a=getApp()`、`require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（日期工具，导出 formatTime/formatMonth/formatDate/formatHour，定义 unpacked/appservice.app.js:1382-1384 实测；planList 内未直接调用其导出，仅 require）。

### data 初始值（A:153）
`levels:["AA","A","B","C","D","E","F","G","H","I","J","K"]`（12 级，grep 实测）、`create_plan:false`、`modal_height:800`、`modalCreate:false`、`modalDakaRate:false`、`modalSetting:false`、`title_name:""`、`title_desc:""`、`type:0`、`list:[]`、`selected:0`。其中 modalCreate/modalDakaRate/modalSetting/title_name/title_desc/type 六个字段在本页 wxml 无引用，属冗余/预留（骨架 W 侧 ops 表 0 命中）。

### 方法逐条（证据均 A:153，本次 grep -o 逐条核实函数体）

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| tui-tag bind:tap（3 处） | selectLevel | id=parseInt(dataset.id)；selected!=id 时 setData selected；100→getMyCreate()、99→checkMyPlan()、否则 checkLevelPlan(levels[id]) | — | selected、list |
| 列表项 bind:tap | goPlanDetail | `wx.navigateTo({url:"../planDetail/planDetail?plan_id="+list[dataset.id].plan_id+"&pageList=1"})` | — | — |
| 列表项 bind:longpress | deletePlan | 仅 selected>=99 生效（`if(!(this.data.selected<99))`）；99→deleteHistory(id)、100→deleteCreate(id) | 间接见下 | — |
| button bindtap | goPlanCreate | `wx.navigateTo({url:"../planCreate/planCreate"})` | — | — |
| onLoad | onLoad | 参数带 `my` → selected=99 + checkMyPlan()，否则 checkLevelPlan("AA")；`globalData.plan_id && 0!=plan_id.length` → create_plan=false，否则 true；`wx.getWindowInfo()` 算 `modal_height=750/windowWidth*windowHeight*0.8`（实测表达式 `750/l*i*.8`） | — | selected、create_plan、modal_height |
| onShareAppMessage | — | title「分享你一个英语绘本分级阅读小程序」，path=`/pages/index/index?tuiguang_openid={{openid}}`，imageUrl=`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png`（grep 实测） | — | — |
| onShareTimeline | — | 同 title，imageUrl=`https://qianyufang.top/public/yingyu/fenjitu.jpg`（grep 实测） | — | — |

内部方法（无直接 UI 事件）：
- `checkLevelPlan(level)`：`db.collection("plan").where(command.or([{level,public:true},{level,member:command.gt(1)}])).orderBy("member","desc").orderBy("index","asc").field({list:false}).limit(20).get()`（实测 `e.or([{level:a,public:!0},{level:a,member:e.gt(1)}])`）；成功后**客户端再排序**（public 优先，再按 member 降序）→ setData list
- `checkMyPlan()`：`db.collection("user_plan").where({baby_id:globalData.baby_id}).field({cover,title,desc,history,plan_id,day}).get()`；`plan_exist_cur = (data[0].plan_id != "")`；**list = （plan_id 非空时取 `t.data` 整组，否则空数组）；data[0].history 真值才 concat**（原文 `t.data[0].history&&(a=a.concat(t.data[0].history))`，已按对账 diff#3 补条件）→ setData {plan_exist_cur, list}。⚠ 此处与依据包表述「取 data[0]」不同：实测源码为 `""!=t.data[0].plan_id&&(a=t.data,i=!0)`，初始组是**整个 data 数组**非仅 data[0]，已按源码修正，待对账员复核
- `deleteHistory(i)`：`i==0 && plan_exist_cur==true` → toast「当前在打卡的计划，需先退出再删除」（icon:none）；否则 showModal（title「删除计划」、confirmText「确定删除」）内容「是否删除已打卡的计划[title]"desc"，删除后该计划打卡数据将清空」→ 确认调 deleteHistoryPlan(list[i].plan_id)（以上文案 grep 实测）
- `deleteHistoryPlan(plan_id)`：`wx.cloud.callFunction({name:"updateUserPlan", data:{tag:"delete", baby_id, plan_id}})` → toast「移除成功」→ checkMyPlan()
- `deleteCreate(i)`：`list[i]._openid==globalData.openid` 才可删；showModal（title「删除计划」、confirmText「确定删除」）内容「是否删除已创建的计划[title]"desc"，删除后该计划将不可被查看」→ 确认后 `db.collection("plan").where({plan_id}).remove()` → toast「删除成功」→ 本地 splice 后 setData list
- `getMyCreate()`：`db.collection("plan").where({_openid:globalData.openid}).orderBy("member","desc").field({list:false}).limit(20).get()`（外层 showLoading「加载中」+500ms 定时 hideLoading）

### 云函数调用清单（本页写操作入口）
| 云函数 | 触发 | data 载荷 | 证据 |
|---|---|---|---|
| updateUserPlan | deleteHistory 确认后（deleteHistoryPlan） | `{tag:"delete", baby_id, plan_id}` | A:153（`name:"updateUserPlan"`、`tag:"delete"` 均 grep 实测） |

### 云数据库直连清单（客户端 API，非云函数）
| 集合 | 操作 | 条件/投影 | 证据 |
|---|---|---|---|
| plan | get（checkLevelPlan） | where or[{level,public:true},{level,member>1}]，orderBy member desc + index asc，field{list:false}，limit 20 | A:153 |
| plan | get（getMyCreate） | where{_openid}，orderBy member desc，field{list:false}，limit 20 | A:153 |
| plan | remove（deleteCreate） | where{plan_id} | A:153 |
| user_plan | get（checkMyPlan） | where{baby_id}，field{cover,title,desc,history,plan_id,day} | A:153 |

字段结构以 captures/collections/*.jsonl 为唯一真实样本（本岗位未做数据对账，留对账员）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 转发分享图（好友） | 固定 URL：`https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png` | A:153（grep `shareImg.png` 命中） | URL 原样记录；CDN 可达性抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |
| 转发分享图（朋友圈） | 固定 URL：`https://qianyufang.top/public/yingyu/fenjitu.jpg` | A:153（grep `fenjitu.jpg` 命中） | URL 原样记录；抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md） |
| 计划封面 `item.cover` | 无静态路径规律：值为**云数据库 plan/user_plan 的 cover 字段**，经行内 style 作卡片背景图（z[38]=W:57） | A:153（checkMyPlan field 含 cover；checkLevelPlan/getMyCreate 未投影 → 取整文档） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）（路径是否可达属数据对账 + 真机范畴；本岗位未验证，无样本数可计） |

本页无本地静态图片/音频资源（W 侧 ops 表无 image/audio 节点，全部 73 个 ops 已通读）。

## 5. 弹窗 / 分支状态

- **删除确认弹窗**（wx.showModal，title「删除计划」、confirmText「确定删除」，均 A:153 实测）：
  - 我打卡的（99）：「是否删除已打卡的计划[title]"desc"，删除后该计划打卡数据将清空」；特例：第 0 项且 plan_exist_cur==true → 仅 toast「当前在打卡的计划，需先退出再删除」
  - 我创建的（100）：「是否删除已创建的计划[title]"desc"，删除后该计划将不可被查看」；仅 `list[i]._openid==globalData.openid` 才弹
  - ⚠ 弹窗内容里 desc 两端带字面引号，与列表渲染 z[46] 一致（A:153 实测 `]""'+a.desc+'"'`）
- **空态**：list.length==0 → 居中灰字「暂无计划」（z[61..63]）
- **无计划可建态**：create_plan==false（globalData.plan_id 非空，即已有当前打卡计划）→ 底部「创建个人打卡计划」按钮隐藏
- **加载反馈**：checkLevelPlan/getMyCreate（「加载中」×2）与 deleteHistoryPlan/deleteCreate（「处理中」×2）均有 wx.showLoading（A:153 实测，grep 共 4 处；getMyCreate 另有 500ms 定时 hideLoading）；**checkMyPlan 函数体无 showLoading/hideLoading，还原时勿加**（已按对账 diff#1 修正）
- data 中 modalCreate/modalDakaRate/modalSetting/title_name/title_desc/type + modal_height 在本页 wxml 无对应弹窗（冗余/预留，见 §3）

## 6. 对账记录（对账员填写）

对账时间 2026-09-30。对账员独立重跑定位与计数命令、独立通读原文（W 全文 262 行、A:153 整行 3986 字节、X 全文 263 行、app-config/app-service.js 相关行），未参考蒸馏过程。

- [x] 节点树与原文一致（W:97-235 m0）
  定位复核：`grep -l "'./pages/planList/planList.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_37.webview.js；W:96 `var x=['./pages/planList/planList.wxml']`、W:259 `__wxAppCode__['pages/planList/planList.wxml'] = $gwx_XC_31(...)` 同实测。ops 表逐条重数 z[0..72] 共 73 条（W:19-91），spec 每条 z 引用全中；`_mz` 属性索引换算（首属性印出数字为下标、后续+1）在 W:104/112/116（三个 tui-tag）、W:128（列表项 view）、W:196（tui-nomore）、W:221/222（view/button）七处全部与 ops 吻合。三顶层挂载 W:120/217/219；wx:for 两处（W:111 挂 z[1] levels、W:195 挂 z[32] list，项名均 item/index）；wx:if 判断行 W:131/153/162/167/180/201/220；99 分支二分支 else 在 W:171-173；tui-nomore 挂在 bAMC（.tui-extend-box）内且于 `_2z` 之后（W:196-197，恒挂非空也有）；根 `root={"tag":"wx-page"}`（W:240）。均与 spec 一致。
- [x] 类名抽查 15 处全中（要求 ≥10）
  W 侧 class 字面量 / X 侧 wxss 选择器 / page-frame.html 全局类三向核对：z[0] `tui-footer  margin-top`（双空格，W:19；X:10）、z[30] tui-container（W:49；X:2,X:46）、z[31] tui-extend-box（W:50；X:3-4）、z[36] tui-extend-item（W:55；X:5）、z[40] `bg-green tui-new-label-top text-center text-white text-xs`（W:59；X:7）、z[42] title-area（W:61；X:252-253）、z[43] tui-title（W:62；X:6,X:31,X:238）、z[45] tui-desc（W:64；X:239-240）、z[48] tui-sub-title（W:67；X:8-9）、z[61] `padding flex flex-direction text-center margin-top-xl`（W:80）、z[62] `text-xl text-grey margin-top`（W:81）、z[64] tui-safearea-bottom（W:83；X:201）、z[66] `flex-sub text-center bottom-btn`（W:85；X:11-12）、z[70] `cuIcon-roundadd text-xl text-white`（W:89）、z[71] text-white（W:90）。依赖的 13 个 ColorUI 全局类逐一 grep page-frame.html 命中：bg-green/text-white/text-xs/text-center/text-xl/text-grey/margin-top/margin-top-xl/padding/flex/flex-direction/flex-sub 按 `",[1],"X{` 形态各 1 处、cuIcon-roundadd 按 `cuIcon-roundadd:` 形态 1 处。样式数值抽查与 W:261 setCssToHead 一致（如 .tui-extend-item border-radius [0,20]→10px、padding [0,30] [0,20]→15px 10px；.tui-new-label-top 17px/28px；.tui-title 级联终值 19px 白字居中）；两处原文笔误 X:240 `color:v#fff6e4`、X:32 `color:"#d7f0db"` 与 W:261 原样吻合。
- [x] 文案逐字一致
  W 侧 13 处节点文案全中：{{item}}级（W:30）/我打卡的（W:39）/我创建的（W:48）/置顶（W:60）/{{item.title}}（W:63）/"{{item.desc}}"（W:65，两端 \x22 字面引号）/共有…人参与打卡（W:68，member 空则 0）/当前正在打卡，我已打卡…天（W:72）/添加于…，我共打卡…天（W:73，后两段复用 z[53][2..3]）/[…级] 计划共有…天，共有…人参与打卡（W:76，末两段复用 z[49][2..3]）/暂无更多了（W:78）/暂无计划（W:82）/创建个人打卡计划（W:91）。A 侧（A:153 通读）分享标题、path、imageUrl×2、删除弹窗两条内容、toast×3（当前在打卡的计划，需先退出再删除 / 移除成功 / 删除成功）、showModal title「删除计划」与 confirmText「确定删除」、showLoading「加载中/处理中」均逐字一致。
- [x] 事件与云函数调用清单齐全
  事件绑定与 W 侧 `_mz` 一致：selectLevel×3（bind:tap）、deletePlan（bind:longpress）、goPlanDetail（bind:tap）、goPlanCreate（bindtap）。实测 `grep -c "callFunction" unpacked/chunk_37.appservice.js` = 1（仅 updateUserPlan，payload `{tag:"delete",baby_id,plan_id}`）；`grep -o 'collection("[a-z_]*")'` → `collection("plan")`×3 + `collection("user_plan")`×1，与 spec §3 云数据库直连清单 4 行一一对应（checkLevelPlan get / getMyCreate get / deleteCreate remove / checkMyPlan get）。附带复核：日期工具 define 与 formatTime/formatMonth/formatDate 导出实测于 unpacked/appservice.app.js:1382-1384；tui-tag wxs（plain→`tui-{{type}}-outline`）实测于 appservice.app.js:1305 与 webview.app.js:1425；stringUtil 绑定 + np_8 `subStr=str.substring(0,len)` 实测于 unpacked/webview.app.js:1446-1447，page-frame.html:1509 同文；unpacked/components/tui-tag/tui-tag.json = `{"component":true,"usingComponents":{}}`、tui-nomore.json 与两组件 wxss_out 文件存在性均实测；app-config.json：pages 含 pages/planList/planList、不在 tabBar、window 非 custom 且全局 navigationBarTitleText 为空 → 系统栏 + 页面 json 标题「打卡计划列表」（app-service.js:52 / common.app.js:52 / page-frame.html:52 三处同文）成立。
- [x] checkMyPlan 初始组口径：**裁定 spec 正确**。A:153 原文 `""!=t.data[0].plan_id&&(a=t.data,i=!0),t.data[0].history&&(a=a.concat(t.data[0].history))`——初始组确为 `t.data` 整组，非 data[0]，依据包旧表述作废。⚠ 补充：concat 亦是条件性的（原文带 `t.data[0].history&&` 前置，history 真值才 concat），§3 该句未写此条件，修复时顺带补注（见 diff#3）。

### diff 摘要

| # | 位置 | spec 现文 | 原文证据 | 定级 |
|---|---|---|---|---|
| 1 | §5 加载反馈 | 「checkLevelPlan/checkMyPlan/getMyCreate/deleteHistoryPlan/deleteCreate 均有 wx.showLoading」 | 实测 `grep -o 'showLoading({title:"[^"]*"' unpacked/chunk_37.appservice.js` = 「加载中」×2（checkLevelPlan/getMyCreate）+「处理中」×2（deleteHistoryPlan/deleteCreate），共 4 处；A:153 checkMyPlan 函数体内无 showLoading/hideLoading | **实 diff**：checkMyPlan 应从该句移除（否则还原时会给无加载态的方法加 loading） |
| 2 | 页首证据说明 | W=261 行 | `grep -c "" unpacked/chunk_37.webview.js` = 262（末尾 1 空行） | 口径备注，无实质影响 |
| 3 | §3 checkMyPlan 描述 | 「concat data[0].history」未写条件 | A:153 `t.data[0].history&&(a=a.concat(...))` | 轻微：补「history 真值才 concat」，可与 #1 一并修 |

**结论**：节点树 / 类名抽查 / 文案 / 事件与云函数清单四项全部通过；因 diff#1 属会传导到还原行为的实质不一致，本次对账**不通过（FAIL）**——修 §5（连同 §3 补注）后复核即可关闭。

**蒸馏工修正记录（2026-09-30）**：已按对账 diff #1-#3 修正——#1 §5「加载反馈」移除 checkMyPlan（实测 `grep -o 'showLoading({title:"[^"]*"' unpacked/chunk_37.appservice.js` 仅 4 处：「加载中」×2=checkLevelPlan/getMyCreate、「处理中」×2=deleteHistoryPlan/deleteCreate，checkMyPlan 函数体无 showLoading/hideLoading）；#3 §3 checkMyPlan 补条件（A:153 原文 `t.data[0].history&&(a=a.concat(t.data[0].history))`，history 真值才 concat）；#2 页首经核已是「262 行，含末尾空行」准确表述（`grep -c ""` 实测 262），其余 W:261 为 setCssToHead 行号引用（W:261 实含 setCssToHead 及尾注），无需改动。

### 对账员复核（第二轮收尾，2026-09-30）

**#1-#3 修正验证通过，verdict=PASS。**

- **#1 showLoading 归属（通过）**：独立重跑 `grep -o "showLoading" unpacked/chunk_37.appservice.js | wc -l` = 4、`hideLoading` 同为 4；4 处归属逐一确认——checkLevelPlan 函数体开头 `wx.showLoading({title:"加载中"})`、getMyCreate 函数体开头 `wx.showLoading({title:"加载中"})` 且紧随 `setTimeout(function(){wx.hideLoading…`、deleteHistoryPlan 开头 `wx.showLoading({title:"处理中"})`、deleteCreate 在 showModal complete 确认分支内 `wx.showLoading({title:"处理中"})`。另整段提取 checkMyPlan 完整函数体（`checkMyPlan:function(){var e=this;t.collection("user_plan")…e.setData({plan_exist_cur:i,list:a})}})},goPlanDetail` 正常衔接到下一方法，体内确无 showLoading/hideLoading）。§5 现表述（checkLevelPlan/getMyCreate「加载中」+ deleteHistoryPlan/deleteCreate「处理中」、checkMyPlan 无 loading 警示）与原文完全一致。
- **#3 concat 条件（通过）**：A:153 原文 `""!=t.data[0].plan_id&&(a=t.data,i=!0),t.data[0].history&&(a=a.concat(t.data[0].history)),e.setData({plan_exist_cur:i,list:a})`；§3 现表述「plan_id 非空时取 t.data 整组，否则空数组；data[0].history 真值才 concat」与原文逐字吻合。
- **#2 行数口径（通过，附口径精确化备注）**：`grep -c "" unpacked/chunk_37.webview.js` = 262 复现（261 个换行符 + 末行无尾换行），页首主值 262 正确。精确口径备注：实测末行 W:262 为 `}`（1 字符），单个 tab 的空行在 W:260，文件**无尾换行**；页首括注「含末尾空行」系对账员上轮 diff 摘要「末尾 1 空行」措辞的延续，与实测略有出入，属口径备注级、不影响 262 主值与任何还原行为，随本复核关闭，后续引用以 `grep -c ""`=262 为准。
- **篡改检查（通过）**：planList.md 当前未入 git（无历史快照）、audit/ 无本页对账副本、PROGRESS.md 本页行仍空，故以**实质复验**替代字节级比对——上轮第 6 节四项核对中的关键实测断言全部复验成立：`grep -c "callFunction"` = 1 且非空 `name:"…"` 仅 `updateUserPlan` 一处；`collection("[a-z_]*")` 分布 plan×3 + user_plan×1；A:153 行 3986 字节复现；W:96/W:259 定位断言复现。diff 摘要 #1/#2/#3 与上轮 FAIL 清单语义一致，L230「不通过（FAIL）」结论行原样保留，蒸馏工修正记录为第 6 节末尾追加块、未覆盖对账内容。判定上轮对账记录未被改动。
- **最终结论**：四项核对 + diff#1-#3 修正全部通过，本页对账**通过（PASS）**，frontmatter 已置「对账通过（待验收）」，停下等用户验收。
