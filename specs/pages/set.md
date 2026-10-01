---
页名: set
显示名: 用户信息设置（从「我的」页头像/宫格进入；同时承担家庭共享的接受/邀请/解绑三种视角）
状态: 对账通过（待验收；diff ①-⑫ 已修）
chunk: chunk_41.webview.js / chunk_41.appservice.js
导航栏: 系统栏（标题「用户信息设置」，白底 #fff 黑字，app-config.json pages/set/set.html）
---

# 页面还原规格：用户信息设置（pages/set/set）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_41.webview.js（502 行，`wc -l` 实测）；A=unpacked/chunk_41.appservice.js（页面逻辑全部在 A:178 单行内，9,887 字符，本次整行提取通读 + python 正则定位函数偏移）；X=unpacked/wxss_out/pages__set__set.wxss（27 行，本次全文通读）；C=unpacked/app-config.json（python json 解析）。
> 定位命令与输出：`grep -l "pages/set/set" unpacked/chunk_*.appservice.js` → 唯一命中 chunk_41.appservice.js（本次重跑一致）；`grep -n "__wxRoute = \"pages/set/set\""` → A:177（`__wxRoute`+`define("pages/set/set.js")`）、A:179（收尾 `{isPage:true,isComponent:true,currentFile:'pages/set/set.js'}`）；W 侧 `grep -n "pages/set/set.wxml"` → W:169 与 W:500 两行命中（W:500 行内注册 2 处，见 §1 勘误）。
> 模块依赖（A:178 行首）：`a`=wx.cloud.database({})、`t`=a.command、`e`=getApp()、`n`=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")。A2AAD 工具模块 define 起于 unpacked/appservice.app.js:1382（行内偏移 178 处，本次 python 定位），模块体 :1383，导出 `formatTime`=YYYY-MM-DD、`formatHour`=HH:MM（另导出 formatMonth/formatDate，本页未用）——本页仅 unbind 新建 user_study 时用 `n.formatTime(new Date)+" "+n.formatHour(new Date)` 拼 date 字段（A:178 原文实证）。
> ops 索引换算：z 数组 146 项（z[0..145]），本次 ask 实跑 `node tools/extract_gwx_ops.js unpacked/chunk_41.webview.js XC_36` 机械重建，全表与手读一致。三处易错点：(a) 出生年月行 arrow 是 ops 拼接 [3,' ']+[1,true] → 字符串 `" true"`（真值、显示箭头），机械表 z[22] 原样输出 `' 'true`，非布尔绑定；(b) 会员行 last=z[98] 字符串字面量 `'true'`，非布尔；(c) 会员到期分支是 `vip == -2`（z[106] `<op2,==:<op7:'vip'>|<op2,-:2>>`，一元负号）。

## 1. 页面骨架（节点树）

来源：`chunk_41.webview.js` 的 `$gwx_XC_36`（W:1），ops 三段合一（W:14-167），wxml 声明与注册 W:169 `var x=['./pages/set/set.wxml'];d_[x[0]]={}`，m0 渲染函数 W:170-477，模板注册 `e_[x[0]]={f:m0,...}` W:478，wxss 内嵌 `__wxAppCode__['pages/set/set.wxss']=setCssToHead(...)` W:502。
> 依据包勘误（对账修订）：依据包写「注册 `__wxAppCode__['pages/set/set.wxml']`（:500）」——W:500 为复合行：m0 IIFE 收尾 `}(__g.a,...)` + `if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();` + 两分支注册 `__wxAppCode__['pages/set/set.wxml']=[$gwx_XC_36,'./pages/set/set.wxml']`（delayedGwx 分支）/ `=$gwx_XC_36('./pages/set/set.wxml')`（else 主分支），即该字符串在 W:500 存在 **2 处**（本次 grep -c 实测）；W:169 `d_[x[0]]={}` + W:478 `e_[x[0]]` 机制描述仍成立（见上）。

```
<view data-weui-theme="{{theme}}">                                (z[0]=op7:'theme'; W:172-173) 页面根，随系统深浅色
  <button class="avatar-wrapper" open-type="chooseAvatar"
          bind:chooseavatar="onChooseAvatar">                     (z[1..3]; W:174 _mz ['bind:chooseavatar',1,'class',1,'openType',2]) 头像选择
    <image class="avatar" src="{{avatarUrl}}"/>                   (z[4..5]; W:175) 当前头像
  </button>
  <view class="tui-set-box">                                      (z[6]; W:179-180)
    <view class="tui-mtop">                                       (z[7]; W:181-182) 昵称卡
      <tui-list-cell arrow="{{false}}" bind:tap="editNickname" radius="{{true}}">
                                                                    (z[8]=false/z[9]='editNickname'/z[10]=true; W:183 _mz 实测)
        <view class="tui-item-box">                               (z[11]; W:184-185)
          <image class="tui-logo" mode="widthFix"
                 src="https://qianyufang.top/public/yingyu/images/my/nickname.png"/>  (z[12..14]; W:186)
          <text class="tui-list-cell_name">我的昵称</text>          (z[15]/z[16]; W:188-190)
          <view class="tui-right"><view class="cu-capsule">
            <text class="tui-list-cell_name  text-xl">{{nickName}}</text>
                                                                    (z[17..20]；z[19] 原文两个空格 `tui-list-cell_name  text-xl`；W:193-199)
          </view></view>
        </view>
      </tui-list-cell>
    </view>
    <view class="tui-mtop">                                       (z[21]; W:207-208) 出生年月卡
      <tui-list-cell arrow=" true" radius="{{true}}">             (z[22] 拼接 `' '+true`=" true" 真值 + z[23]=true; W:209)
        <view class="tui-item-box">                               (z[24]; W:210-211)
          <image class="tui-logo" mode="widthFix"
                 src="https://qianyufang.top/public/yingyu/images/my/birth.png"/>      (z[25..27]; W:212)
          <text class="tui-list-cell_name">出生年月</text>          (z[28]/z[29]; W:214-216)
          <view class="tui-right">
            <picker bindchange="bindDateChange" end="{{date_today}}" fields="month"
                    mode="date" start="2010-01-01" value="{{birth}}">  (z[31..36]; W:221 _mz 实测) 月份粒度日期选择，end=今天
              <view class="picker">{{birth}}</view>               (z[37]/z[38]; W:222-225) 初始「点击设置」
            </picker>
          </view>
        </view>
      </tui-list-cell>
    </view>
    <view class="tui-mtop">                                       (z[39]; W:232-233) 我的身份卡
      <tui-list-cell arrow="{{false}}" radius="{{true}}">         (z[40]=false/z[41]=true; W:234)
        <view class="tui-item-box">                               (z[42]; W:235-236)
          <image class="tui-logo" mode="widthFix"
                 src="https://qianyufang.top/public/yingyu/images/my/shenfen.png"/>    (z[43..45]; W:237-238)
          <text class="tui-list-cell_name">我的身份</text>          (z[46]/z[47]; W:240-241)
          <view class="tui-right"><view class="cu-capsule">     (z[48]/z[49]; W:244-247)
            <view bind:tap="selectParent" data-id="1"
                  class="cu-tag {{parent==1?'bg-macron':'line-macron'}}">爸爸</view>  (z[50..53]; W:248-251)
            <view bind:tap="selectParent" data-id="2"
                  class="cu-tag {{parent==2?'bg-macron':'line-macron'}}">妈妈</view>  (z[54..57]; W:252-255)
            <view bind:tap="selectParent" data-id="3"
                  class="cu-tag {{parent==3?'bg-macron':'line-macron'}}">宝宝</view>  (z[58..61]; W:256-259)
            <view bind:tap="selectParent" data-id="4"
                  class="cu-tag {{parent==4?'bg-macron':'line-macron'}}">老师</view>  (z[62..65]; W:260-263，老师文案 op z[65] 落 W:261)
          </view></view>
        </view>
      </tui-list-cell>
    </view>
    <view class="tui-mtop">                                       (z[66]; W:269-270) 家庭成员卡
      <tui-list-cell arrow="{{false}}" radius="{{true}}">         (z[67]=false/z[68]=true; W:271)
        <view class="tui-item-box">                               (z[69]; W:272-273)
          <image class="tui-logo" mode="widthFix"
                 src="https://qianyufang.top/public/yingyu/images/my/family.png"/>     (z[70..72]; W:274-275)
          <text class="tui-list-cell_name">家庭成员</text>          (z[73]/z[74]; W:277-278)
          <view class="tui-right"><view class="cu-capsule">     (z[75]/z[76]; W:283-284)
            <view wx:for="{{family}}" wx:for-item="item" wx:for-index="index">  (z[77]/z[78]; W:285+349 _2z item/index)
              <view class="margin-left">                          (z[79]; 每项外壳)
                <tui-tag wx:if="{{item.parent==0}}" shape="circle">未知</tui-tag>   (z[80..82])
                <tui-tag wx:if="{{item.parent==1}}" shape="circle">爸爸</tui-tag>   (z[83..85])
                <tui-tag wx:if="{{item.parent==2}}" shape="circle">妈妈</tui-tag>   (z[86..88])
                <tui-tag wx:if="{{item.parent==3}}" shape="circle">宝宝</tui-tag>   (z[89..91])
                <tui-tag wx:if="{{item.parent==4}}" shape="circle">老师</tui-tag>   (z[92..94])
                （item.parent>4 或缺失时五帧全不渲染；编译产物为 5 个相邻条件帧，原 wxml 是
                  wx:if/elif 链还是 5 个独立 wx:if 无法从产物判定——【待复核】，同 more.md vip 徽标情形）
              </view>
            </view>
          </view></view>
        </view>
      </tui-list-cell>
    </view>
    <view wx:if="{{vip!=0}}" class="tui-mtop">                    (z[95]=条件/z[96]='tui-mtop'; W:357-359) 会员行（vip=0 整块不渲染）
      <tui-list-cell arrow="{{false}}" last="true">               (z[97]=false/z[98]='true' 字符串字面量; W:360 _mz ['arrow',97,'last',1]；z[96]='tui-mtop' 归上行 view，W:358-359)
        <view class="tui-item-box">                               (z[99]; W:361-362)
          <image class="tui-logo" mode="widthFix"
                 src="https://qianyufang.top/public/yingyu/images/my/vip1.png"/>       (z[100..102]; W:363-364)
          <text class="tui-list-cell_name">{{vipTitle}}</text>    (z[103]/z[104]; W:366-369) members.title 或「普通用户」
          <view class="tui-right">                                (z[105]; W:370-371)
            <text wx:if="{{vip==-2}}">已到期 {{time}}</text>      (z[106]/z[107]; W:374-377 条件帧 wxVkey=1)
            <text wx:else>已于{{time}} 生效</text>                (z[108]; W:378-383 else wxVkey=2)
          </view>
        </view>
      </tui-list-cell>
    </view>
    <view wx:if="{{is_share==false}}">                            (z[109]; W:394-395) 本人/主账号视角（被共享者走 :463 else）
      <view class="tui-mtop" wx:if="{{main_user==true}}">         (z[110]/z[111]; W:398-399)
        <button wx:if="{{family.length<3}}" class="bg-macron"
                open-type="share" style="width:80%;">邀请家庭成员共享账号</button>  (z[112..116]; W:402-409) 橙色分享按钮
        <view wx:if="{{family.length>1}}" class="margin-top-xl">  (z[117]/z[118]; W:412-414)
          <button bind:tap="unbind" class="bg-green" style="width:80%;">我要解绑其他共享账号</button>  (z[119..122]; W:415-420)
        </view>
      </view>
      <view wx:else>  <!-- main_user!=true：被共享进来的非主账号 -->
        <button bind:tap="unbind" class="bg-green" style="width:80%;">我要解绑此账号，不再共享</button>  (z[123..126]; W:424-429)
      </view>
      <view class="margin-top-xl">                                (z[127]; W:432-433)
        <button bind:tap="back" class="bg-blue" style="width:80%;">返回</button>  (z[128..131]; W:434-438)
      </view>
      <view class="tui-page__hd">                                 (z[132]; W:439-440) Tips 区
        <view class="tui-page__title">Tips</view>                 (z[133]/z[134]; W:441-443)
        <view class="tui-page__desc">1.每个{{vip!=0?'会员':''}}账号最多可以三个微信共享</view>  (z[135]/z[136]；z[136] 原文 `'1.每个'+(vip!=0?'会员':'')+'账号最多可以三个微信共享'`; W:444-447)
        <view class="tui-page__desc">2.点击橙色按钮转发给家人，对方打开后即可共享</view>        (z[137]/z[138]; W:448-451)
        <view class="tui-page__desc">3.学习打卡数据家庭内部成员可见，实时同步更新</view>        (z[139]/z[140]; W:452-455)
      </view>
    </view>
    <view wx:else>  <!-- is_share!=false：通过分享链接进入、正在接受共享的视角 -->
      <view class="margin-top-xl">                                (z[141]; W:463-464)
        <button bind:tap="goHome" class="bg-macron" style="width:60%;">查看宝宝的学习记录</button>  (z[142..145]; W:465-471)
      </view>
    </view>
  </view>
</view>
```

事件绑定全集（节点树侧，ops 全表实跑核验）：`onChooseAvatar`(z[1]) / `editNickname`(z[9]) / `bindDateChange`(z[31]) / `selectParent`×4(data-id 1-4，z[50]/z[54]/z[58]/z[62]) / `share`(open-type，z[114]) / `unbind`×2(z[119]/z[123]) / `back`(z[128]) / `goHome`(z[142])。**ops 全表 146 项无任何指向 showMember 的绑定**（本次全表通读 0 命中）→ showMember 为死代码。

### 状态分支

- **三视角总开关（z[109] `is_share==false`）**：onLoad 无 baby_id 参数（本人视角）或 checkTag/checkLimit 校验通过（接受共享完成）→ is_share=false，显示完整设置页；onLoad 带 baby_id（点开分享链接）→ is_share=true，整页只剩「查看宝宝的学习记录」按钮（W:463-471）。
- **主账号判定（z[111] `main_user==true`）**：onLoad 中 `baby_id.substring(0,28)!=openid` 才置 main_user=false（A:178 原文 `e.globalData.baby_id.substring(0,28)!=e.globalData.openid&&t.setData({main_user:!1})`）——baby_id 前 28 位=主账号 openid 的约定再次实证。主账号显示「邀请共享」（family.length<3 时）+「解绑其他共享账号」（family.length>1 时）双按钮；非主账号只显示「我要解绑此账号，不再共享」。
- **邀请按钮门槛（z[112] `family.length<3`）**：满 3 个共享成员后隐藏邀请按钮（与 Tips 第 1 条「每个(会员)账号最多可以三个微信共享」及 checkLimit 的 `<3` 放行逻辑闭环）。
- **解绑按钮门槛（z[117] `family.length>1`）**：仅 1 条 family 记录（只有自己）时不显示「解绑其他共享账号」；unbind 函数内还有二次防线 `1==family.length → toast「当前无共享，也无需解绑」`（A:178，本次实证，依据包未录）。
- **会员行（z[95] `vip!=0`）**：vip=0（普通用户）时整块不渲染；vip==-2 →「已到期 {{time}}」（z[106]/z[107]），否则 →「已于{{time}} 生效」（z[108]，注意「已于」后无空格、「生效」前有一个空格）。vip 数值语义（-2=到期、负值家族、title 文案集）需与 members 集合样本对账——captures/collections/ 当前仅 units/user_school/words/_counts 四件（本次 ls 实测），无 members 样本，**该项留给对账员/后续采集，【待复核】**。
- **身份四选一（z[50..65]）**：parent ∈ {1爸爸,2妈妈,3宝宝,4老师}，选中项 `bg-macron`（实底橙）其余 `line-macron`（描边）；写入 user_parent.parent 并回显 family 标签（z[80..94] 同一数值语义，0=未知）。
- **依赖自定义组件**：tui-list-cell（arrow/radius/last 属性）、tui-tag（shape 属性），注册于 unpacked/app-service.js:56 `__wxAppCode__['pages/set/set.json']={...,"usingComponents":{"tui-list-cell":"/components/tui-list-cell/tui-list-cell","tui-tag":"/components/tui-tag/tui-tag"}}`（本次 grep 实测；组件内部模板本 spec 未展开，【待复核】）。

## 2. 样式规格

来源：`wxss_out/pages__set__set.wxss`（27 行，extract_wxss.py 还原产物；原始 setCssToHead 数组内嵌于 W:502，本次抽查头部 `.tui-set-box{color:#333;padding-bottom:` [0,20]→10px 与 X:1 一致）。数值已 rpx→px 归一，直接当 px 抄，不除 2。

节点树用到的类：

| 类名 | 关键样式 | 用途 | 行号 |
|---|---|---|---|
| .tui-set-box | color:#333; padding-bottom:10px | 页面容器 | X:1 |
| .avatar-wrapper | border-radius:8px; margin:40px 0; padding:0; width:56px!important | 头像按钮 | X:2 |
| .avatar | display:block; 56px×56px | 头像图 | X:3 |
| .tui-list-cell | flex 居中; font-size:15px; padding:12px 15px | 设置行 | X:6 |
| .tui-item-box | box-sizing:border-box; width:100% | 行内盒 | X:9 |
| .tui-item-box,.tui-list-cell_name | flex 居中（合选器） | — | X:10 |
| .tui-list-cell_name | justify-content:center; padding-left:10px | 行文案 | X:11 |
| .tui-ml-auto,.tui-right | margin-left:auto（合选器；.tui-ml-auto 本页节点树未用） | 右侧值区 | X:12 |
| .tui-right | color:#333; font-size:13px; margin-right:17px | 右侧值区 | X:13 |
| .tui-logo | flex-shrink:0; 26px×26px | 行首图标 | X:14 |
| .tui-mtop | margin-top:10px | 卡间距 | X:15 |
| .tui-page__hd | box-sizing:border-box; padding:40px; width:100% | Tips 区（40px 与本页其余 10-26px 不成比例，疑原 rpx 混用，**按 wxss_out 原样记录，勿换算**） | X:23 |
| .tui-page__title | font-size:20px; font-weight:400; text-align:left | Tips 标题 | X:25 |
| .tui-page__desc | color:#888; font-size:14px; margin-top:10px; text-align:left | Tips 条目 | X:26 |

页面 wxss 有定义但本页节点树未用（疑模板残留/复用底稿，写码忽略）：.container X:4、.confirm X:5、.tui-info-box X:7、.tui-avatar X:8、.tui-exit X:16、.tui-line-cell X:17、.tui-input X:18、.radio-group X:19、.tui-radio X:20、.tui-title X:21、.tui-flex-box X:22、.tui-page__bd X:24、.tui-bottom-scroll X:27（本次逐行核对与依据包清单一致）。

依赖的全局类（页面 wxss 无定义，出自 page-frame.html 全局块/ColorUI，**具体数值未提取**，需要时跑 tools/extract_common_wxss.py）：`cu-capsule` / `cu-tag` / `bg-macron` / `line-macron` / `bg-green` / `bg-blue` / `text-xl` / `margin-left` / `margin-top-xl`；另内层 `view.picker` 的 `.picker` 类在本页 wxss 无定义（picker 原生组件 + 无类样式，落全局或浏览器默认）。data-weui-theme 为 weui 主题钩子。

## 3. 事件与逻辑

来源：`chunk_41.appservice.js`（A:177-179；Page({...}) 全部在 A:178 单行内）。方法全集（A:178 正则抽取，剔除 success/fail/complete 回调后 24 个）：onLoad / onChooseAvatar / uploadAvatar / updateAvatarUrl / editNickname / finishInput / confirmNickname / bindDateChange / updateBirth / selectParent / getBabyInfo / getFamily / checkVip / checkTag / checkLimit / checkParent / unbind / unbindShare / updateTodayDaka / formatDate / showMember / back / goHome / onShareAppMessage。函数→字符偏移（char offset）定位表（A:178 行内第 N 个字符，python `函数名:function` 正则实测；对账员同口径独立实测全吻合，供定位）：onLoad@426、checkTag@1060、checkLimit@1328、checkVip@1648（members）、formatDate 调用点@2184、formatDate 定义@2208、checkParent@2543、getFamily@3166、getBabyInfo@3500、onChooseAvatar@4173、uploadAvatar@4306、updateAvatarUrl@4908、editNickname@5136、finishInput@5469、confirmNickname@5816、bindDateChange@6140、updateBirth@6466、updateTodayDaka@6896、back@7085、goHome@7129、showMember@7182、onShareAppMessage@7313、unbind@7585、unbindShare@9120。

### data 初始值（A:178 原文逐项核对）

`is_share:false, theme:wx.getAppBaseInfo().theme, avatarUrl:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"（微信官方默认灰色头像）, nickName:"", birth:"点击设置", parent:0, family:[], vip:0, vipTitle:"普通用户", time:"", isInput:false, tag:"", main_user:true, date_today:""`。

### 生命周期

- **onLoad(options)**（A:178）：`date_today=globalData.today_date`；`wx.onThemeChange` 同步 theme。分支：
  - `options.baby_id` 存在 → `is_share:true`（被共享者视角）：
    - 有 `options.tag` → 存 tag；`globalData.vip<=0` → checkTag(tag,baby_id)（走共享绑定链）；否则 toast「已生效会员账号无法接受共享」(none) + 1500ms 后 `reLaunch ../index/index`。
    - 无 tag → console「该分享属于旧链接」+ toast「该链接已失效」(error) + 1e3(1s) 后 reLaunch 首页（原文 `setTimeout(...,1e3)`）。
  - 无 baby_id（本人视角）→ getBabyInfo() + getFamily() + checkVip()；且 `baby_id.substring(0,28)!=openid` → `main_user:false`。
- 无 onShow/onUnload/onHide/onReady/下拉刷新（A:178 grep 0 命中，本次实测）。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| chooseavatar（W:174） | onChooseAvatar | `detail.avatarUrl` → setData avatarUrl → uploadAvatar() | — | avatarUrl |
| —（内部） | uploadAvatar | `wx.cloud.uploadFile({cloudPath:"avatars/"+baby_id+".png", filePath:avatarUrl})` → `wx.cloud.getTempFileURL` → imgSecCheck{imgUrl:临时URL}：errCode==0 → `globalData.userSetting=!0` + `globalData.babyInfo.avatarUrl=临时URL+"?&time="+new Date().getTime()`（"?&" 拼接破缓存）→ updateAvatarUrl() + updateTodayDaka()；否则 toast「图片存在问题，请更换一张再试」(none)；fail 仅 console.log("err") | imgSecCheck | globalData.userSetting/babyInfo.avatarUrl |
| —（内部） | updateAvatarUrl | callFunction updateBabyInfo{baby_id,babyInfo} → toast「头像上传成功」 | updateBabyInfo | — |
| 昵称行 tap（W:183） | editNickname | `wx.showModal({title:"修改昵称",editable:true,placeholderText:"请输入新昵称",confirmText:"确认修改"})`，confirm 后空值三态：content 空/长度 0 → toast「昵称不能为空」(error)；非空但 trim()==='' → toast「不能为空字符」(error)；否则 → finishInput(content) | — | — |
| —（内部） | finishInput | showLoading「处理中」→ imgSecCheck{content,type:"text"}：errCode==0 → confirmNickname(content)；否则 hideLoading+toast「昵称存在问题，请换一个再试」(none)；fail → toast「处理失败」(error) | imgSecCheck | — |
| —（内部） | confirmNickname | `globalData.userSetting=true`、babyInfo.nickName=新值 → updateBabyInfo{baby_id,babyInfo} → complete：hideLoading+toast「昵称修改成功」→ updateTodayDaka() | updateBabyInfo | globalData.userSetting/babyInfo |
| picker change（W:221） | bindDateChange | setData birth=选择值；`globalData.babyInfo.birth=值`；`year=parseInt(值.substring(0,4))`、`month=parseInt(值.substring(5))` → updateBirth() + updateTodayDaka() | — | birth, globalData.babyInfo.year/month |
| —（内部） | updateBirth | `globalData.userSetting=true` → updateBabyInfo{baby_id,babyInfo}（无回调） | updateBabyInfo | globalData.userSetting |
| 身份 tag tap（W:248-263） | selectParent | `dataset.id` parseInt → globalData.parent + setData → user_parent `doc(openid).update({parent:id})` → success 后 getFamily() 刷新 | user_parent doc update | parent |
| 返回 tap（W:434） | back | `wx.navigateBack({delta:0})` | — | — |
| 查看记录 tap（W:465） | goHome | `wx.reLaunch({url:"../daka/daka"})` | — | — |
| 邀请按钮（open-type=share，W:402） | —（转发回调） | onShareAppMessage from=='button' 分支（见下） | — | — |
| 解绑 tap×2（W:415/424） | unbind | 见「解绑流程」 | user_parent / user_study / updateUserParent | — |

### 共享绑定链（checkTag → checkLimit → checkParent）

- **checkTag(tag,baby_id)**：`user_parent.where({tag:elemMatch(eq(tag))})`——查无此 tag → toast「该链接已失效」(error)+1s reLaunch（tag 是分享链接里的时间戳，过期即失效）；命中 → checkLimit(baby_id)。
- **checkLimit(baby_id)**：`user_parent.where({baby_id})` ——`data.length<3` 才放行（置 globalData.baby_id → checkParent()+getBabyInfo()+getFamily()+checkVip()）；否则 toast「绑定数量超限」(error)+1s reLaunch。**边界：恰好已有 3 条即拒**。
- **checkParent()**：`user_parent.where({_openid:openid})`——空 → `add({_id:openid, baby_id, kids:[baby_id], parent, tag:[tag], time:new Date, timestamp:Date.now()})`（**文档 _id 即 openid**）+ toast「账号共享成功」；非空 → `doc(openid).update({baby_id, kids:command.unshift(baby_id), tag:command.unshift(tag)})` + toast「账号共享成功」（kids/tag 数组头部插入，保留历史）。

### 解绑流程（unbind，A:178 char @7585 起）

1. `family.length==1` → toast「当前无共享，也无需解绑」(none) 直接返回（A:178 实证）。
2. `user_parent.where({_openid:openid})` 取自己文档：
   - **非主账号**（`data[0].baby_id.substring(0,28)!=openid`）：在 `kids[]` 里找前 28 位==自己 openid 的原始 baby_id（c）：
     - 找到 → showModal「账号解绑／解绑后，账号将恢复共享之前的状态，是否继续？」→ confirm → `doc(openid).update({baby_id:c})` → toast「解绑成功」(success)+reLaunch 首页；
     - 没找到（c 为空）→ showModal「账号解绑／解绑后，将为您创建一个新的账号，是否继续？」→ confirm → 新 baby_id=`openid+"-"+Date.now()`，`doc(openid).update({baby_id:新值, kids:command.unshift(新值)})` → user_study `add({_id:新baby_id, babyInfo, baby_id, quiz:[], records:[], total_days:0, time:new Date, timestamp, date:formatTime+' '+formatHour})`（新账号学习记录空壳）→ add success 回调：toast「解绑成功」(success) + `reLaunch ../index/index`（@8861 实证；「解绑成功」全行共 3 处）。
   - **主账号**（`==openid`）→ unbindShare()。
3. **unbindShare()**：先把 family 中 `_openid==自己` 的记录筛出 setData（本地回显）+ toast「解绑成功」(success)；再 `user_parent.where({baby_id, _openid:command.neq(baby_id.substring(0,28))}).field({_openid,kids})` 遍历其他共享成员（success 回调内 `e=a.data[t]._openid` 局部变量遮蔽外层 `e=getApp()`，下述 openid 均指**被遍历成员的** _openid）：`kids.length==1` → callFunction updateUserParent `{type:"delete", openid:被遍历成员_openid}`（整档删除）；否则遍历其 kids[]，`kids[i].indexOf(被遍历成员_openid)!=-1` 子串包含命中（非 substring(0,28) 前缀比较）→ callFunction updateUserParent `{type:"update", openid:被遍历成员_openid, baby_id:命中的 kid 原值}`（把该成员的 baby_id 还原为其 kid 原值）。云函数 updateUserParent 本体不在本页（函数名=云函数名，见 AGENTS 权威表）。

### 会员查询（checkVip）

`globalData.baby_id==""` → 直接 reLaunch 首页；否则 `members.where({baby_id})`——命中 → `setData({vip,vipTitle:title,time})` + `globalData.vip=vip`；未命中 → user_study 兜底 `where({baby_id}).field({vip,time})`：`0!=data.length` 时 `n=data[0].vip、i=data[0].time` → `globalData.vip=n` + `setData({vip:n, vipTitle:"普通用户", time:t.formatDate(i)})`——兜底分支显式写回 time（经本页 formatDate 格式化，t=this 页面实例，@2184 实证），影响会员行「已到期/已于…生效」显示值。

### 打卡联动（updateTodayDaka）

头像（updateAvatarUrl 后）、昵称（confirmNickname 后）、生日（bindDateChange 内）三项修改后统一触发：callFunction `updateUserData` `{tag:"userSetting", baby_id, date:globalData.today_date, babyInfo}`——通知打卡页同步今日资料（tag 值即 more 页 onShow 轮询的 userSetting 信号）。

### 云函数调用清单（wx.cloud.callFunction，A:178 共 8 处 / 4 个云函数，grep -o 实测计数）

| 云函数 | 处数 | 载荷 | 触发点 |
|---|---|---|---|
| imgSecCheck | 2 | `{imgUrl}`（uploadAvatar，头像临时 URL）；`{content, type:"text"}`（finishInput，昵称文本） | errCode==0 才继续 |
| updateBabyInfo | 3 | `{baby_id, babyInfo}` | updateAvatarUrl / confirmNickname / updateBirth |
| updateUserData | 1 | `{tag:"userSetting", baby_id, date:today_date, babyInfo}` | updateTodayDaka |
| updateUserParent | 2 | `{type:"delete", openid}`；`{type:"update", openid, baby_id}` | unbindShare 清理其他共享成员 |

### 云数据库直查清单（a.collection()，A:178 共 15 处，python 定位实测）

| 集合 | 处数 | 分布 |
|---|---|---|
| user_parent（读写） | 11 | checkTag×1（where tag elemMatch）、checkLimit×1（where baby_id）、checkParent×3（where _openid + add + doc update）、getFamily×1（where baby_id）、selectParent×1（doc update parent）、unbind×3（where _openid + 两处 doc update baby_id）、unbindShare×1（where baby_id+_openid neq） |
| user_study（读写） | 3 | checkVip 兜底（field vip,time）、getBabyInfo（where baby_id，field babyInfo → avatarUrl/nickName/birth）、unbind 新建空壳 add |
| members（只读） | 1 | checkVip（where baby_id → vip/title/time → globalData.vip） |

### 分享（onShareAppMessage，A:178）

- 菜单转发（from!='button'）：`{title:"一个好玩的英语分级阅读小程序", path:"/pages/index/index"}`（无 imageUrl）。
- 按钮转发（from=='button'，即「邀请家庭成员共享账号」）：`{title:"邀请你一起学习", path:"/pages/set/set?baby_id=<baby_id>&tag=<Date.now()时间戳>", imageUrl:this.data.avatarUrl}`——path 与 onLoad 的 baby_id/tag 参数闭环（tag 时间戳即 checkTag 的 elemMatch 校验值，过期链接走「该链接已失效」）。

### 死代码（节点树无触发点，本次实测）

| 方法 | 证据 | 结论 |
|---|---|---|
| showMember | A:178 定义（previewImage tcb `…/public/member.png`，无参）；ops 全表 z[0..145] 无绑定 | 死代码/疑似残留，member.png 不可达 |
| ~~formatDate~~（对账勘误，撤出死代码） | A:178 定义（YYYY-MM-DD HH:MM:SS，padStart 拼接，@2208）+ checkVip 兜底实际调用 `time:t.formatDate(i)`（@2184，t=this 页面实例）；全行 2 处=定义 1 + 调用 1 | **非死函数**，见 §会员查询 |
| data.isInput | A:178 初始 false；节点树无输入框绑定 | 死数据字段（本次 ops 全表无 isInput 引用） |

调试残留（⑫，原文实录，写码可忽略）：onShareAppMessage `console.log("sss",t)`@7454、unbindShare `console.log("111",…)`@9516、uploadAvatar `console.log("rrr",n)`@4554、bindDateChange `console.log("ddd",…)`@6167、updateAvatarUrl `console.log("avatarurl",…)`@5067，共 5 处；全行 console.log 实测 9 处，其余 4 处为命名日志（「该分享属于旧链接」@795、"onChooseAvatar"@4200、"err"@4877、"selectParent"@6657）。

### 计算规则（精确到边界）

- **baby_id 前 28 位=openid 约定**：main_user 判定（@994）、unbind 非主判定（@7817）、unbind kids 找原始号（@7904）、unbindShare 的 neq 过滤（@9444）**四处**共用 `substring(0,28)`（char 偏移实测）。
- **共享上限**：checkLimit `data.length<3` 放行；节点树邀请按钮 `family.length<3` 同阈值。
- **出生年月拆解**：year=parseInt(birth.substring(0,4))，month=parseInt(birth.substring(5))（birth 形如 YYYY-MM，picker fields=month）。
- **过期判定**：tag 为分享时刻 `Date.now()` 时间戳，落库到 user_parent.tag 数组；checkTag elemMatch 查无即「该链接已失效」——无宽限期。
- **新账号命名**：unbind 建新号 baby_id=`openid+"-"+Date.now()`，user_study 文档 _id 同值。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 设置页图标 | `https://qianyufang.top/public/yingyu/images/my/{name}.png`，name∈{nickname,birth,shenfen,family,vip1} 共 5 个 | W ops 字面量 5 个（z[14]/z[27]/z[45]/z[72]/z[102]） | ⚠️ 抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）——audit/cdn-probe.md（24/24 抽样）**不覆盖** images/my/*.png 与 member.png（本次 `grep -o "images/my/[a-z1]*\.png" audit/cdn-probe.md` → 0 命中、`grep -c "member.png"` → 0），本 ask 未发起网络探测 |
| 死代码预览图 | tcb `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/member.png`——仅 showMember 引用，页面不可达 | A:178 showMember 字面量 1 处 | ⚠️ 同上 + 死代码 |
| 头像上传目标 | 云存储 `avatars/{baby_id}.png`（cloudPath，上传后 getTempFileURL 取临时 URL 送审） | A:178 uploadAvatar 原文（本次实证，依据包未录 cloudPath） | 规律记录，非展示 URL |
| 默认头像 | `https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0`（微信官方默认头像，非自建 CDN） | A:178 data.avatarUrl 字面量 | —（微信基础设施，无需探测） |
| 分享封面（按钮转发） | 动态 `this.data.avatarUrl`（当前头像），无固定图 | A:178 onShareAppMessage | — |

## 5. 弹窗 / 分支状态

- **接受共享视角（is_share==true）**：整页只显示「查看宝宝的学习记录」（width:60%，橙色）→ goHome 进打卡页；校验失败（链接失效/超限/已是会员）均 toast 后 1-1.5s 踢回首页。
- **修改昵称弹窗**：wx.showModal editable，标题「修改昵称」、placeholder「请输入新昵称」、确认键「确认修改」；confirm 后空值三态（content 空/长度 0 →「昵称不能为空」、trim 后空串 →「不能为空字符」，均 error），通过校验才先过 imgSecCheck 文本审核再入库。
- **解绑确认弹窗两态**：①「解绑后，账号将恢复共享之前的状态，是否继续？」（kids 里找得到原始号）；②「解绑后，将为您创建一个新的账号，是否继续？」（找不到，需新建空壳账号）。
- **成功 toast 集**：「账号共享成功」（checkParent 两分支）、「解绑成功」×3（unbind 恢复原号分支、unbind 新建账号 user_study.add success 回调、unbindShare）、「头像上传成功」「昵称修改成功」（updateBabyInfo 回调）。
- **主/非主账号按钮差异**：主账号 = 邀请（<3 时）+「解绑其他共享账号」（>1 时）+ 返回；非主账号 =「我要解绑此账号，不再共享」+ 返回；无任何账号 = 仅 Tips + 返回。
- **深浅色**：theme 随 wx.onThemeChange 实时同步到 data-weui-theme。

## 6. 对账记录（对账员填写，2026-10-01 独立重推）

对账员仅凭原文（W/A/X/C 四件）独立重推，未读蒸馏过程；以下每项均本次实跑。

- [x] **节点树与原文一致**（ops 146 项 + m0 W:170-477）：`node tools/extract_gwx_ops.js unpacked/chunk_41.webview.js XC_36` 独立重建 → **146 项**（z[0..145]），全表与 spec 节点树 z 索引逐项吻合；三处易错点实证：z[19] `'tui-list-cell_name  text-xl'`（双空格）、z[22] `' 'true`（字符串拼接）、z[98] `'true'` 字面量、z[106] `<op2,==:<op7:'vip'>|<op2,-:2>>`（一元负号）。m0 原文按行抽查 19 段（W:174-175、179-183、184-190、193-199、209-221、244-247、248-259、285+349、357-360、374-383、394-399、402-409、415-429、434-438、441-455、463-471），节点结构与行号全部吻合（含 4 个身份 tag 的 `_mz ['bindtap',50,'class',1,'data-id',2]`、picker `_mz ['bindchange',31,'end',1,'fields',2,'mode',3,'start',4,'value',5]`、family `_2z(z,77,…,'item','index','index')`、vip!=0/main_user/family.length<3/>1/is_share 条件帧 wxVkey 序列）。
- [x] **类名抽查 18 处全中**（≥10 达标）：z[2] avatar-wrapper(W:174)、z[4] avatar(W:175)、z[6] tui-set-box(W:180)、z[7] tui-mtop(W:182)、z[11] tui-item-box(W:185)、z[12] tui-logo(W:186)、z[15] tui-list-cell_name(W:189)、z[17] tui-right(W:194)、z[18] cu-capsule(W:196)、z[19] 双空格类(W:198)、z[48]/z[49](W:245/247)、z[113] bg-macron(W:402)、z[120] bg-green(W:415)、z[129] bg-blue(W:434)、z[133] tui-page__hd(W:442)、z[135] tui-page__desc(W:445)、z[141] margin-top-xl(W:464)、z[143] bg-macron(W:465)。另：spec §2「节点树未用」13 类清单在 ops 全表 `grep -oE` **0 命中**，成立。
- [x] **文案逐字一致**：节点树侧 z[16]/z[29]/z[47]/z[53..65]/z[74]/z[82..94]/z[107]「已到期 」/z[108]「已于」+time+「 生效」（原文 `'已于'<op7:'time'>' 生效'`，「已于」后无空格、「生效」前一个空格实证）/z[116]/z[122]/z[126]/z[131]/z[136..140]（Tips 三条）/z[145] 全中。A 侧 data 初始值 13 字段（python 逐字比对含默认头像 URL）、昵称弹窗三文案、解绑弹窗两态（title「账号解绑」+ content 逐字）、toast 集计数（该链接已失效×2、账号共享成功×2、解绑成功×3、普通用户×2）逐条实证。
- [x] **事件与云函数调用清单齐全**：`grep -o callFunction` → **8 处**；`grep -o 'name:"…"'` → imgSecCheck×2 / updateBabyInfo×3 / updateUserData×1 / updateUserParent×2（4 函数）✓；`grep -o 'collection("…")'` → user_parent×11 / user_study×3 / members×1 = **15 处** ✓；`database({})`×1 ✓。python 正则抽取方法名 28 个 − success/fail/complete/setTimeout = **24 个**，与 spec 清单逐一吻合；showMember 全行仅定义 1 处（0 绑定，死代码结论维持）；事件绑定 9 组与 ops 全表一致。载荷抽查：updateUserData 四键、cloudPath `avatars/{baby_id}.png`、imgSecCheck 两载荷、updateUserParent delete/update、checkLimit `data.length<3`、checkParent add 七字段（`timestamp:new Date().getTime()`）、checkTag `elemMatch(t.eq(…))`、onLoad `vip<=0` 门槛 + 1500ms / 旧链接 1e3，全实证。
- [x] **app-config 核对**：python json 读 `unpacked/app-config.json` → `pages/set/set.html` window `{navigationBarTitleText:"用户信息设置", navigationBarBackgroundColor:"#fff", navigationBarTextStyle:"black"}` ✓；tabBar 5 项（index/school/word/daka/more）**不含 set** ✓；组件注册 `unpacked/app-service.js:56` tui-list-cell/tui-tag ✓；A 侧 `grep -l "pages/set/set" unpacked/chunk_*.appservice.js` 唯一命中 chunk_41 ✓；A:177/179 路由收尾、A:178 长 9887 字符 ✓。captures/collections/ 现状（README+units+user_school+words+_counts）与 spec「无 members 样本」一致。

### diff 摘要（须蒸馏工修正后方可验收）

| # | 级别 | diff | 原文证据 |
|---|---|---|---|
| 1 | **须修正** | 附录勘误 1 后半句不成立：`__wxAppCode__['pages/set/set.wxml']` 字符串**在本文件存在**（grep -c=2，均在 W:500） | W:500 为复合行：m0 IIFE 收尾 + `if(__vd_version_info__.delayedGwx\|\|false)$gwx_XC_36();` + 两分支注册 `__wxAppCode__['pages/set/set.wxml']=[$gwx_XC_36,'./pages/set/set.wxml']`（delayedGwx）/ `=$gwx_XC_36('./pages/set/set.wxml')`（else）。勘误 1 前半句（IIFE 收尾）与 W:169/478 机制描述仍成立 |
| 2 | **须修正** | formatDate **不是死函数**：死代码表「全行仅 1 处=仅定义 0 调用」错误，实测 2 处 | checkVip 的 user_study 兜底 success 内 `t.setData({vip:n,vipTitle:"普通用户",time:t.formatDate(i)})`（A:178 char 偏移 @2184），i=`a.data[0].time`；定义 @2208 |
| 3 | **须修正** | §会员查询兜底分支漏 `time:t.formatDate(i)` 写回（影响会员行「已到期/已于…生效」显示值），且 setData 含 `vipTitle:"普通用户"` | 同上 @2184 原文 |
| 4 | **须修正** | editNickname 空值校验是三态，漏两条 toast：「不能为空字符」(error，content.trim()===''分支)、「昵称不能为空」(error，content 空/长度 0 分支)；spec 只写「内容非空 → finishInput」 | A:178 editNickname 原文 `t.confirm&&(t.content&&0!=t.content.length?""===t.content.trim()?wx.showToast({title:"不能为空字符",icon:"error"}):a.finishInput(t.content):wx.showToast({title:"昵称不能为空",icon:"error"}))` |
| 5 | **须修正** | uploadAvatar imgSecCheck 失败分支漏 toast「图片存在问题，请更换一张再试」(none)；成功分支漏 `babyInfo.avatarUrl=n+"?&time="+new Date().getTime()` 破缓存拼接与 `globalData.userSetting=!0`、updateTodayDaka() 直接触发（§3 事件表只写「errCode==0 → updateAvatarUrl()」） | A:178 uploadAvatar success 内原文（@4466 起窗口） |
| 6 | **须修正** | unbind 新建账号分支 success 回调漏记：user_study.add success → toast「解绑成功」(success)+reLaunch 首页（「解绑成功」实为 3 处，spec 流程明细只录 2 处） | A:178 @8861 原文 |
| 7 | 修正 | §计算规则「substring(0,28) 三处共用」→ 实为 **4 处** | char 口径 @994（onLoad main_user）/ @7817（unbind 非主判定）/ @7904（unbind kids 找原号）/ @9444（unbindShare neq） |
| 8 | 修正 | 函数偏移定位表口径不明、按现值不可复现：9 个数字与 char/byte 两口径实测均不吻合（仅 checkVip@1742 与 byte 口径巧合重合） | 对账员实测 char 口径：checkTag@1060、checkLimit@1328、checkVip@1648、checkParent@2543、getFamily@3166、getBabyInfo@3500、selectParent@6632、unbind@7585、unbindShare@9120（formatDate 调用点@2184/定义@2208）；建议换用本表或注明口径 |
| 9 | 笔误 | §2 称 wxss「28 行」，实测 **27 行**（cat -n 至 27；内容本身全对） | `wc -l unpacked/wxss_out/pages__set__set.wxss` → 27；§2 表格 14 行样式逐项比对无误 |
| 10 | 笔误 | 节点树会员行 cell 标注「z[96]=false」应为「z[97]=false」（z[96]='tui-mtop'，W:358-359 class 96；cell 属性在 W:360 `['arrow',97,'last',1]`） | W:357-360 原文 |
| 11 | 可选 | unbindShare「在其 kids 中找含自己 openid 的项」表述歧义：原文 `n[i].indexOf(e)` 中 e=**被遍历成员的** _openid（局部 shadow），且为子串包含匹配而非 substring(0,28) 前缀比较；「还原为其 kid 原值」结论正确 | A:178 @9656 起原文 |
| 12 | 可选 | 调试残留可补记：onShareAppMessage `console.log("sss",t)`、unbindShare `console.log("111",…)`、uploadAvatar `console.log("rrr",n)`、bindDateChange `console.log("ddd",…)`、updateAvatarUrl `console.log("avatarurl",…)` | A:178 各处原文 |

- 对账结论：四项核对（节点树/类名/文案/事件云函数）+ app-config 全部通过；diff #1-#6 为 spec 与原文不符处（其中 #2/#3 影响会员行 time 显示的还原），须蒸馏工修正后本页方可验收。
- **蒸馏工修正记录（2026-09-30）**：diff ①-⑫ 已逐条回原文（A:178/W:357-360/X）复核并修入正文——① W:500 复合行 wxml 注册 2 处（头部 grep 口径、§1 勘误、附录 1 三处同步改）；② formatDate 非死函数（2 处=定义@2208+调用@2184），撤出死代码表；③ §会员查询兜底补 `time:t.formatDate(i)` 写回；④ editNickname 空值三态两条 toast 补全；⑤ uploadAvatar 补失败 toast「图片存在问题，请更换一张再试」+ 成功分支破缓存拼接（原文实为 `?&time=`，任务单所记 `&time=` 漏问号）；⑥ unbind 新建账号 add success 补 toast「解绑成功」+reLaunch（全行 3 处）；⑦ substring(0,28) 改 4 处（@994/@7817/@7904/@9444）；⑧ 偏移表改 char offset 口径、采纳对账员实测值，另 python 实测补全 24 方法全表；⑨ wxss 改 27 行；⑩ 会员行 cell 改 z[97]=false（z[96]='tui-mtop'）；⑪ unbindShare indexOf 匹配对象澄清为被遍历成员 _openid（回调内 e 局部遮蔽）；⑫ 补记 5 处 console 调试残留（另实测全行共 9 处，余 4 处为命名日志）。

- **对账员复核（第二轮收尾，2026-10-01）**：①-⑫ 修正验证通过，维持 verdict=PASS。抽验记录（原文权威=W/A/X）：① W:500 单行 `grep -o "__wxAppCode__\['pages/set/set.wxml'\]"` → **2 处**，行首 IIFE 收尾 `}(__g.a,…__g.aa);` + `if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();` 实读确认；② A:178 `grep -o formatDate` → 2 处，char 口径调用 @2184 `formatDate(i)})` 紧邻定义 @2208 `formatDate:function(a){…padStart(2,"0")…}`；④ editNickname 原文逐字：`t.content&&0!=t.content.length?""===t.content.trim()?toast「不能为空字符」(error):finishInput(t.content):toast「昵称不能为空」(error)`，三态成立；⑤ 「图片存在问题，请更换一张再试」grep 命中，成功分支原文 `userSetting=!0, babyInfo.avatarUrl=n+"?&time="+new Date().getTime(), updateAvatarUrl(), updateTodayDaka()`——破缓存确为 `?&time=` 带问号，spec 记法正确；⑥ `grep -o 解绑成功` → **3 处**，@8861 原文 `解绑成功",icon:"success"}),wx.reLaunch({url:"../index/index"})`；⑦ substring(0,28) 四偏移 @994/@7817/@7904/@9444 逐一实读全中（main_user 判定/kids 找原号/2 处解绑与 neq 过滤）；⑩ W:360 原文 `_mz(z,'tui-list-cell',['arrow',97,'last',1],[],e,s,gg)` → z[97]=false ✓，W:357-359 确认 z[96]='tui-mtop'。另复核 A:178 char 长 9887 与 spec 头部声明一致。第 6 节对账记录与 diff 表（①-⑫）未被改动，蒸馏工修正以追加方式落在 diff 表之后。

## 附：本次蒸馏对依据包的勘误与补充（均已回原文实证）

1. **【勘误·对账修订】W:500 为复合行，含 wxml 注册 2 处**：W:500 同时含 m0 IIFE 收尾 `}(__g.a,...)` + `if(__vd_version_info__.delayedGwx||false)$gwx_XC_36();` + 两分支注册 `__wxAppCode__['pages/set/set.wxml']=[$gwx_XC_36,'./pages/set/set.wxml']`（delayedGwx 分支）/ `=$gwx_XC_36('./pages/set/set.wxml')`（else 主分支）——`__wxAppCode__['pages/set/set.wxml']` 在 W:500 存在 **2 处**（grep -c 实测），本条原稿「该字符串在本文件不存在」不成立。W:169 `var x=['./pages/set/set.wxml'];d_[x[0]]={}` → m0 W:170-477 → `e_[x[0]]={f:m0,...}` W:478 链路描述仍成立。wxss 注册 `__wxAppCode__['pages/set/set.wxss']` 在 W:502，该条无误。
2. **【勘误】A2AAD 模块定位**：define 起于 appservice.app.js:1382 行内偏移 178（python 实测），模块体 :1383（单行，导出 formatTime/formatMonth/formatDate/formatHour 四个函数），收尾 :1384；依据包所记「行内偏移 611272」不符。导出函数名与用途（formatTime/formatHour）无误。
3. **【补充】unbind 边界**：`family.length==1 → toast「当前无共享，也无需解绑」`；非主账号解绑分「恢复原号/新建账号」两态（两份 showModal 文案与 user_study 空壳 add 均已实证入 spec），依据包仅概括为「doc(openid).update{baby_id}」。
4. **【补充】uploadAvatar cloudPath**：`avatars/{baby_id}.png`，uploadFile → getTempFileURL → imgSecCheck 链路；依据包未录。
5. **【补充·对账修订】死代码**：data.isInput（节点树无引用）为新增死数据字段；showMember 死代码实证加固（ops 全表 146 项无绑定）。formatDate 原判「定义 0 调用」不成立——checkVip 兜底实际调用（@2184），全行 2 处=定义 1+调用 1，已撤出死代码表。
6. **【未做/待复核】**：① vip==-2 等数值语义与 members 集合样本对账（captures/collections/ 无 members/user_parent/user_study 样本，本次 ls 实测）；② my/*.png 5 图标 + member.png 未做 HEAD 探测（audit/cdn-probe.md 不覆盖）；③ 全局类具体数值未提取（page-frame.html）；④ tui-list-cell/tui-tag 组件内部模板未展开；⑤ family 五条件帧的 wx:if/elif 编译前形态无法从产物判定。
