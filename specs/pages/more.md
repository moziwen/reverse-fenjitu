---
页名: more
显示名: 我的（tabBar 第 5 项，文案「我的」，见 app-config.json tabBar；导航栏标题为空）
状态: 待对账
chunk: chunk_8.webview.js / chunk_8.appservice.js
导航栏: 系统栏（标题空字符串，灰底 #f1f1f1 黑字，回落微信平台默认值（app-config 全局 window 为空 {}））
---

# 页面还原规格：我的（pages/more/more）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_8.webview.js（695 行，本次会话全文通读），A=unpacked/chunk_8.appservice.js（页面逻辑全部在 A:204 单行内，9,218 字符，本次整行导出通读并用 grep/python 正则核数；`__wxRoute = "pages/more/more"` 在 A:203 行尾，Page 定义收尾元信息在 A:205），X=unpacked/wxss_out/pages__more__more.wxss（328 行，本次全文通读），C=unpacked/app-config.json（python json 解析）。
> 定位命令与输出：`grep -l "'./pages/more/more.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_8.webview.js（本次重跑一致）；`wc -l` → 695 行。tui-modal 组件模板不在本 chunk，`grep -l "tui-modal.wxml" unpacked/chunk_*.webview.js` → 唯一命中 chunk_15.webview.js（本次重跑一致），本 spec 未展开其内部结构。
> ops 索引换算：按 SKILL.md `_mz` 索引坑规则（`.zcode/skills/wxapkg-unpack-analysis/SKILL.md:60-62`），z 数组按 `gz$gwx_XC_47_3` 内 Z() 调用顺序 0 基重建：opN = W:(108+N)，op0..op165 共 166 项，本次逐项手工重建并与 m2 渲染函数交叉核对一致。tui-modal 首属性 `fadeIn` 值为 -1（字面量常量，非 ops 索引），自第二个属性起按连续索引解析（W:621 `['fadeIn',-1,'bindcancel',129,'custom',1,'show',2]` → bindcancel=z[129]、custom=z[130]、show=z[131]）。

## 1. 页面骨架（节点树）

来源：`chunk_8.webview.js` 的 `$gwx_XC_47`（W:1），注册于 W:693。ops 三段：`gz$gwx_XC_47_1`=tui-footer 组件（W:15-42）、`gz$gwx_XC_47_2`=tui-textarea 组件（W:44-102）、`gz$gwx_XC_47_3`=more 页本体（W:104-275）；渲染函数 m0=tui-footer（W:279-307）、m1=tui-textarea（W:310-374）、m2=more 页（W:377-668）。

```
<view class="cu-list menu-avatar margin-bottom">                  (op0=W:108, 节点 W:379-380) 用户卡列表
  <view class="cu-item">                                          (op1=W:109, W:381-382)
    <view bindtap="setbabyInfo" class="cu-avatar round lg margin-left"
          style="background-image:url({{avatarUrl}});"/>          (W:383, bindtap=op2=W:110, class=op3=W:111, style=op4=W:112)
    <view class="content margin-left">                            (op5=W:113, W:385-386)
      <view>                                                      (W:387, 无类名)
        <text bindtap="clickVIP" class="text-cut text-xl margin-right-sm">{{nickName}} </text>
                                                                    (W:388, bindtap=op6=W:114, class=op7=W:115, 内容 op8=W:116 「{{nickName}}+空格」)
        <image wx:if="{{vip>0}}" class="tui-logo margin-right-sm" mode="widthFix"
               src="https://qianyufang.top/public/yingyu/images/my/vip.png"/>
                                                                    (条件 op9=W:117; W:394-396, class=op10=W:118, mode=op11=W:119, src=op12=W:120)
        <image wx:elif?="{{vip==-2}}" class="tui-logo margin-right-sm" mode="widthFix"
               src="https://qianyufang.top/public/yingyu/images/my/vip_no.png"/>
                                                                    (条件 op13=W:121; W:400-402, class=op14 复用 op10, mode=op15 复用 op11, src=op16=W:124；wx:if/wx:elif 互斥关系为业务语义推断，见「状态分支」注)
        <view wx:if="{{isAgeSetting}}" class="margin-top-xs">       (条件 op17=W:125; W:409-411, class=op18=W:126)
          <text class="text-gray text-sm"> {{birth_year}}岁{{birth_month}}个月</text>
                                                                    (W:412-414, class=op19=W:127, 内容 op20=W:128「空格+{birth_year}岁{birth_month}个月」)
        </view>
      </view>
    </view>
  </view>
</view>

<view wx:if="{{vip<0}}" class="tui-my_header margin-bottom">      (条件 op21=W:129; W:425-427, class=op22=W:130) 非会员横幅
  <view class="tui-vip__box">                                     (op23=W:131, W:428-429)
    <view bind:tap="goMember" class="tui-vip__bar">                (W:430, bind:tap=op24=W:132, class=op25=W:133)
      <view wx:if="{{vip==-1}}">                                  (条件 op26=W:134; W:433-446)
        <view>
          <view class="tui-vip__desc">当前是普通用户，每日使用有上限</view>   (class=op27=W:135, 文案=op28=W:136)
          <view class="tui-vip__desc">加入会员后可以无限制学习</view>          (class=op29 复用 op27, 文案=op30=W:138)
        </view>
      </view>
      <view wx:if="{{vip<-1}}">                                   (条件 op31=W:139; W:449-457)
        <view>
          <view class="tui-vip__desc">会员已到期，续费后可继续学习</view>      (class=op32 复用 op27, 文案=op33=W:141)
        </view>
      </view>
      <view class="tui-vip__btn">                                 (op34=W:142, W:458-459)
        <text class="cuIcon-cart text-white margin-right-xs">加入VIP</text>  (W:460-464, class=op35=W:143, 文案=op36=W:144)
      </view>
    </view>
  </view>
</view>

<view class="container">                                          (op37=W:145, W:472-473)
  <view class="grid-wrap">                                        (op38=W:146, W:474-475)
    <!-- wx:for {{gridItems}} wx:for-index "index"（op39=W:147, op40=W:148; 循环体 m2 W:478-491 _2z） -->
    <view bindtap="goToPage" class="grid-item" data-index="{{index}}"
          style="background-color:{{item.bgColor}};">             (W:479, bindtap=op41=W:149, class=op42=W:150, data-index=op43=W:151, style=op44=W:152)
      <image class="item-icon" mode="aspectFit" src="{{item.icon}}"/>  (W:480, class=op45=W:153, mode=op46=W:154, src=op47=W:155)
      <text class="item-title">{{item.title}}</text>              (W:482-484, class=op48=W:156, 内容=op49=W:157)
    </view>
  </view>
</view>

<view class="cu-list menu sm-border card-menu">                   (op50=W:158, W:494-495) 菜单列表1
  <view bindtap="goHelpCenter" class="cu-item arrow">             (W:496, bindtap=op51=W:159, class=op52=W:160)
    <view class="content item-center">                            (op53=W:161, W:497-498)
      <image class="png" mode="widthFix"
             src="https://qianyufang.top/public/yingyu/images/my/guide.png"/>  (W:499, class=op54=W:162, mode=op55 复用 op11, src=op56=W:164)
      <text class="text-grey margin-left-sm">使用指导帮助</text>     (W:501-503, class=op57=W:165, 文案=op58=W:166)
    </view>
  </view>
  <view bindtap="downloadPdf" class="cu-item">                    (W:508, bindtap=op59=W:167, class=op60 复用 op1——无 arrow)
    <view class="content item-center">                            (op61 复用 op53)
      <image class="png" mode="widthFix" src="…/images/my/download.png"/>  (W:511, op62 复用 op54, op63 复用 op11, src=op64=W:172)
      <text class="text-grey margin-left-sm">PDF下载打印</text>     (W:513-515, op65 复用 op57, 文案=op66=W:174)
    </view>
  </view>
</view>

<view class="cu-list menu sm-border card-menu">                   (op67 复用 op50=W:175, W:521-522) 菜单列表2
  <view bind:tap="showDesktop" class="cu-item">…tip.png 添加到桌面</view>
                                                                    (W:523, bind:tap=op68=W:176【注意此处为 bind:tap 带冒号，其余条目为 bindtap】；src=op73=W:181, 文案=op75=W:183)
  <view bindtap="showGZH" class="cu-item">…notice.png 关注公众号</view>
                                                                    (W:535, bindtap=op76=W:184; src=op81=W:189, 文案=op83=W:191)
  <view bindtap="showPhoneModal" class="cu-item">…phone.png 自助绑定</view>
                                                                    (W:547, bindtap=op84=W:192; src=op89=W:197, 文案=op91=W:199)
  <view wx:if="{{jigou}}" bindtap="goJigou" class="cu-item">…migrate.png 账号管理</view>
                                                                    (条件 op92=W:200; W:561-562, bindtap=op93=W:201; src=op98=W:206, 文案=op100=W:208)
</view>

<view class="cu-list menu sm-border card-menu">                   (op101 复用 op50=W:209, W:577-578) 菜单列表3
  <view class="cu-item">                                          (op102 复用 op1, W:579-580)
    <button class="cu-btn content" open-type="contact">           (W:581, class=op103=W:211, openType=op104=W:212——原生客服会话，无 bindtap)
      <image class="png" mode="widthFix" src="…/images/my/kefu.png"/>  (W:582, op105 复用 op54, op106 复用 op11, src=op107=W:215)
      <text class="text-grey margin-left-sm">在线客服</text>        (W:584-586, op108 复用 op57, 文案=op109=W:217)
    </button>
  </view>
  <view bindtap="showFeedback" class="cu-item">…feedback.png 问题反馈 & 功能建议</view>
                                                                    (W:591, bindtap=op110=W:218; src=op115=W:223, 文案=op117=W:225 原文 `问题反馈 \x26 功能建议`)
  <view bindtap="openPrivacyContract" class="cu-item">…more.png 服务协议 & 隐私政策</view>
                                                                    (W:603, bindtap=op118=W:226; src=op123=W:231, 文案=op125=W:233 原文 `服务协议 \x26 隐私政策`)
</view>

<view class="footer">                                             (op126=W:234, W:616-617)
  <tui-footer copyright="{{slogan}}" fixed="{{false}}"/>          (W:618, copyright=op127=W:235, fixed=op128=W:236=[1,false] 字面量 false)
</view>

<tui-modal fadeIn="{{-1}}" bindcancel="hideModal" custom="{{true}}" show="{{modalFeedback}}"/>
                                                                    (W:621, fadeIn=-1 字面量, bindcancel=op129=W:237, custom=op130=W:238, show=op131=W:239) 反馈弹窗
  内部（W:622-635）：
  <view class="tui-modal-custom">                                 (op132=W:240, W:622-623)
    <view><view class="tui-prompt-title text-bold">问题反馈&功能建议</view></view>
                                                                    (op133=W:241, 文案=op134=W:242 原文 `问题反馈\x26功能建议`，无空格)
  </view>
  <tui-textarea bindinput="input" height="200rpx" minHeight="160rpx"
                placeholder="{{placeholder}}" textareaBorder="true"/>  (W:630, bindinput=op135=W:243, height=op136=W:244, minHeight=op137=W:245, placeholder=op138=W:246, textareaBorder=op139=W:247)
  <button bindtap="submitFeedback" class="bg-blue margin-top-sm" height="72rpx"
          shape="circle" size="28">立即提交</button>                (W:632, bindtap=op140=W:248, class=op141=W:249, height=op142=W:250, shape=op143=W:251, size=op144=W:252, 文案=op145=W:253)

<tui-modal bindcancel="hideModal" custom="{{true}}" show="{{modalPdf}}"/>
                                                                    (W:637, bindcancel=op146 复用 op129, custom=op147 复用 op130, show=op148=W:256) PDF 弹窗
  内部（W:638-665）：
  <view class="tui-page__hd">                                     (op149=W:257, W:638-639)
    <view><view class="tui-page__title margin-left-xs">PDF预览</view></view>
                                                                    (op150=W:258, 文案=op151=W:259)
    <image class="pdf_view" mode="widthFix"
           src="https://qianyufang.top/AA/Pdf/1%20pets.png"/>       (W:645, class=op152=W:260, mode=op153 复用 op11, src=op154=W:262——URL 含编码空格 %20)
    <view class="tui-page__desc">1.目前有AA、A、B三个级别的PDF</view>  (W:647-650, class=op155=W:263, 文案=op156=W:264)
    <view class="tui-page__desc">2.获取网盘链接后，自行下载即可</view>  (W:652-655, class=op157 复用 op155, 文案=op158=W:266)
  </view>
  <view class="tui-modal-custom margin-top">                      (op159=W:267, W:658-659)
    <button bindtap="openPanlink" class="bg-blue margin-top-sm" height="72rpx"
            shape="circle" size="28">网盘下载链接</button>          (W:660, bindtap=op160=W:268, class=op161 复用 op141, height=op162 复用 op142, shape=op163 复用 op143, size=op164 复用 op144, 文案=op165=W:273)
```

### 状态分支

- **VIP 徽标两态（op9/op13）**：`vip>0` 显示 vip.png（W:117/W:394-396）、`vip==-2` 显示 vip_no.png（W:121/W:400-402）。编译产物为两个相邻 `_v()` 条件帧（W:392-397 与 W:398-403，均置 wxXCkey=1），ops 未直接标注 elif；两条件（vip>0 与 vip==-2）业务上互斥，运行时行为与 wx:if/wx:elif 等价，但**原 wxml 源码是 wx:elif 还是两个 wx:if 无法从编译产物判定**——【待复核】。
- **非会员横幅（op21）**：`vip<0` 才渲染整块 tui-my_header（W:129/W:425-427）；vip=0 或 >0 时无此区。
- **横幅文案两态**：`vip==-1` 两行「当前是普通用户，每日使用有上限」+「加入会员后可以无限制学习」（op26-30，W:433-446）；`vip<-1` 一行「会员已到期，续费后可继续学习」（op31-33，W:449-457）。两条件帧同样相邻独立（W:431-446 / W:447-457），互斥性同上【待复核】。「加入VIP」按钮（op34-36，W:458-464）无条件常驻。
- **机构菜单（op92）**：`jigou` 为真才显示「账号管理」条目（W:200/W:561-574）；jigou 由 checkJigou 查 phone 集合置位（A:204）。
- **年龄行（op17）**：`isAgeSetting` 为真才显示「{birth_year}岁{birth_month}个月」（W:125/W:409-418）；isAgeSetting 由 getbabyInfo 按 babyInfo.birth 非空置位（A:204）。
- **依赖自定义组件**（节点树 _mz 调用反推；app-config.json 全部 27 个页面级配置均无 usingComponents 键，python 遍历 0 命中，组件注入为编译期）：tui-footer（m0，W:618）、tui-textarea（m1，W:630）、tui-modal（W:621/W:637，模板定义于 chunk_15.webview.js）。

## 2. 样式规格

来源：`wxss_out/pages__more__more.wxss`（328 行，本次通读；数值直接当 px，不除 2）。本 chunk 内嵌 setCssToHead 原始数组在 W:695（含 tui-footer/tui-textarea/more 三份 wxss，rpx 值换算后与 X 一致）。

| 类名 | 关键样式 | 用途 | 行号 |
|---|---|---|---|
| .container | padding:5px 15px | 页面容器 | X:1 |
| .grid-wrap | flex-wrap:wrap; justify-content:space-between | 宫格容器 | X:2 |
| .grid-item | height:110px; border-radius:12px; margin-bottom:12px; width:48%; column 居中 | 宫格卡（两列） | X:4 |
| .item-icon | 50px×50px; margin-bottom:8px | 宫格图标 | X:5 |
| .item-title | color:#333; font-size:15px; font-weight:600 | 宫格标题 | X:6 |
| .tui-logo | 32px×32px | VIP 徽标图 | X:229 |
| .item-center | flex 居中 | 菜单条目内容行 | X:230 |
| .tui-modal-custom | text-align:center | 反馈弹窗容器 | X:297 |
| .tui-prompt-title | font-size:17px; padding-bottom:10px | 弹窗标题 | X:298 |
| .contact | height:53px; width:100%; z-index:99（button 元素在 .cu-btn 内，本类在节点树中未直接使用，X:301-302 为遗留） | — | X:301 |
| .footer | padding:15px 0（box-sizing:border-box） | 页脚 | X:304 |
| .png | 36px×36px | 菜单图标 | X:305 |
| .tui-page__hd | margin:20px 0; width:100% | PDF 弹窗头 | X:287 |
| .tui-page__title | 两条规则：X:228 `font-size:16px;text-align:center` 与 X:289 `font-size:20px;font-weight:400;text-align:left`——同特异性后者生效（20px/左对齐） | PDF 弹窗标题 | X:228/X:289 |
| .tui-page__desc | color:#888; font-size:14px; margin-top:16px; text-align:left | PDF 弹窗说明行 | X:290 |
| .tui-my_header | background:linear-gradient(90deg,#f1f3f7,#f1f3f7,#fff4fc); position:relative; width:100%（行号紧跟 :315 `@keyframes` 收尾，选择器与 `}` 行尾粘连） | 非会员横幅背景 | X:316 |
| .tui-vip__box | bottom:0; left:0; padding:0 15px | 横幅内盒 | X:317 |
| .tui-vip__bar | background-color:#383f54; border-radius:10px; padding:20px; flex 两端对齐 | 会员条 | X:319 |
| .tui-vip__desc | color:hsla(0,0%,100%,.9); padding-top:7px; font-size:13px（X:321） | 横幅文案 | X:320 |
| .tui-vip__btn | background-color:#5677fc; border-radius:40px; width:100px; height:40px（X:324）; color:#fff | 加入VIP 按钮 | X:323 |
| .pdf_view | **本页 wxss 无定义**（grep `pdf_view` 全文件 0 命中，本次实测）——PDF 预览图无尺寸约束，仅受全局默认样式控制 | PDF 预览图 | — |

依赖的全局类（ColorUI/ThorUI，出自 page-frame.html 的 setCssToHead 全局块，**非本页 W:695 内嵌副本**；`grep -c "cu-list\|menu-avatar" unpacked/page-frame.html` → 22 命中，本次实测确认存在，具体数值本 ask 未展开提取）：`.cu-list` / `.cu-item` / `.menu-avatar` / `.menu` / `.sm-border` / `.card-menu` / `.cu-avatar`（含 .round .lg） / `.content` / `.text-cut` / `.text-xl` / `.text-gray` / `.text-grey` / `.text-white` / `.text-bold` / `.cuIcon-cart` / `.margin-left(-sm/-xs)` / `.margin-bottom` / `.margin-top(-sm)` / `.arrow` / `.bg-blue` / `.cu-btn` / `.round`。

ThorUI 模板遗留类（X:7 起至 X:315 大量存在，如 tui-header-box/tui-searchbox/tui-menu-item/tui-goods__item/tui-sign__record 等）：节点树均未引用，写码时忽略；`.bg-macaron`（X:37）在本页节点树中亦无引用。组件样式 tui-footer（W:695 内嵌，`.tui-footer-copyright` color:#a7a7a7 等）与 tui-textarea（同内嵌）随组件模板生效，本页未展开（tui-modal 在 chunk_15）。

## 3. 事件与逻辑

来源：`chunk_8.appservice.js`（A:203-205；Page({...}) 全部在 A:204 单行内，本次整行导出通读 + python 正则核数）。模块级头部（A:204 行首）：`a`=wx.cloud.database({})（注意原文是 `database({})` 带空对象参数）、`t`=a.command、`e`=getApp()、`o`=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")（导出 formatTime/formatHour）、`n`="oq1hh46zrYD75GEZZ3MawlHUA5ns"（**写死的 openid 常量**，用于 clickVIP 特权判断与 checkPhone 绑定校验）、`i`=!1（提交节流标志）、`l`=!1（拉黑标志）。

页面 data 初始值（A:204 原文逐项核对）：`vip:0, member_exist:!1, platform:"", avatarUrl:"https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0"（微信官方默认头像）, nickName:"", isAgeSetting:!1, birth_year:0, birth_month:0, inputContent:"", modalFeedback:!1, phone:"", slogan:"", modalPdf:!1, jigou:!1, placeholder:"", appShow:!1, gridItems:[{title:"个人信息设置",icon:"https://qianyufang.top/public/yingyu/images/more/setting.png",bgColor:"#fff"},{title:"班级打卡管理",icon:"…/images/more/class.png",bgColor:"#fff"}]`。

生命周期：
- **onLoad**（A:204）：`globalData.baby_id` 存在 → initUserData()；否则挂 `e.babyInfoReadyCallback = function(a){ a.baby_id && t.initUserData() }`（等首页数据就绪回调，grep 全行 1 处）。
- **onShow**（A:204）：`setData({vip:globalData.vip})` 同步会员态；`globalData.userSetting==true` 时复位标志并重拉 getbabyInfo()。
- **无 onUnload/onHide/onReady/onPullDownRefresh/onReachBottom**（grep 全行 0 命中，本次实测）；C 中本页 `onReachBottomDistance:50` 已配置但无处理函数（grep `onReachBottom` A 全文件 0 命中）。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 头像 tap（W:383） | setbabyInfo | navigateTo `../set/set` | — | — |
| 昵称 text tap（W:388） | clickVIP | `globalData.openid==n`（写死常量）→ `../vip/vip`，否则 → `../set/set` | — | — |
| 会员条 tap（W:430） | goMember | navigateTo `../member/member` | — | — |
| 宫格项 tap（W:479） | goToPage | `dataset.index`：0 → this.setbabyInfo()（个人信息设置）；1 → goClass() → `../class/class`（A:204 原文 `0==t&&this.setbabyInfo(),1==t&&this.goClass()`） | — | — |
| 使用指导帮助 tap（W:496） | goHelpCenter | navigateTo `../help/help` | — | — |
| PDF下载打印 tap（W:508） | downloadPdf | `setData({modalPdf:!0})` 开 PDF 弹窗 | — | modalPdf |
| 添加到桌面 tap（W:523） | showDesktop | `wx.showModal({title:"将小程序添加到桌面",content:"1.点击右上角三个点\n2.选择“添加到桌面”",showCancel:!1})` | — | — |
| 关注公众号 tap（W:535） | showGZH | `wx.previewImage` tcb `…/public/yingyu/GZH.png`（公众号二维码大图） | — | — |
| 自助绑定 tap（W:547） | showPhoneModal | `wx.showModal({title:"自助绑定",content:this.data.phone,editable:!0,placeholderText:"请输入要绑定的号码"})`；confirm → setData phone → submitPhone()（见下方边界注） | — | phone |
| 账号管理 tap（jigou 时，W:561） | goJigou | navigateTo `../jigou/jigou` | — | — |
| 在线客服 button（W:581） | —（无 JS 处理函数） | 仅 `open-type="contact"` 原生客服会话（m2 W:581 属性表只有 class/openType） | — | — |
| 问题反馈 tap（W:591） | showFeedback | `feedback.where({_openid:openid,date:today_date}).count`：`total>=3` → toast「当天反馈已超限，请明日再来」(icon:none)；否则 setData modalFeedback+placeholder=「可输入您使用中遇到的问题，或者对软件的任何建议，我们会第一时间回复」→ checkFeedbackLahei() | feedback count | modalFeedback, placeholder |
| 服务协议&隐私 tap（W:603） | openPrivacyContract | `wx.openPrivacyContract`（success/fail 均 console） | — | — |
| tui-textarea bindinput（W:630） | input | `setData({inputContent:a.detail})`（tui-textarea 事件 detail 即内容字符串） | — | inputContent |
| 立即提交 tap（W:632） | submitFeedback | 空内容 → toast「说点什么吧」；先 this.hideModal()；未被拉黑（l≠true）且未节流（i≠true）才提交：i=!0 + 1500ms 复位防重 → `feedback.add({date,baby_id,time:formatTime+" "+formatHour,tag:Date.now(),content,babyInfo,vip})` → `wx.requestSubscribeMessage({tmplIds:["Rk7AApZKN4K1gI4QW60J1bOSk4ShsBp-TEtTqfDktpw"]})` success → `feedback.where({tag}).update({notice:!0})`，complete → toast「反馈已收到」 | feedback add/update | i 标志, l 标志 |
| 两弹窗 bindcancel（W:621/W:637） | hideModal | `setData({modalFeedback:!1,modalPdf:!1,placeholder:""})` 一次关两弹窗 | — | modalFeedback, modalPdf, placeholder |
| 网盘下载链接 tap（W:660） | openPanlink | `init.doc("pdf_id").get` → `a.data.link` → `wx.setClipboardData` 成功 1500ms 后 toast「请在百度网盘中打开」(icon:none) | init doc | — |

分享（A:204）：
- **onShareAppMessage**：`{title:"分享你一个英语绘本分级阅读小程序", path:"/pages/index/index", imageUrl:"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png"}`。
- **onShareTimeline**：`{title:"分享你一个英语绘本分级阅读小程序", query:"", imageUrl:"https://qianyufang.top/public/yingyu/fenjitu.jpg"}`。

### 会员绑定流程（showPhoneModal → submitPhone → checkPhone → createMember/updateMember）

- **submitPhone**（A:204）：phone 空 → toast「长度不能为空」(error)；长度≠11 → toast「该号码不正确」(error)；`globalData.vip>0` → updateMemberPhone()，否则 checkPhone()。
- **checkPhone**：`phone.where({phone}).get`：查无 → hideLoading + toast「该号码不存在」(error)；命中且 `used==false && _openid==n` → 取 `a.data[0].vip`，`member_exist` 真 → updateMember(vip)、假 → createMember(vip)；其余 → hideLoading + （`baby_id==doc.baby_id` ? toast「无需重复绑定」: toast「该号码已被使用」）。**校验要求号码文档 _openid 等于写死常量 n**。
- **createMember(t)**：title 映射：默认「会员」、1→「永久VIP」、2→「一年VIP」、3→「一个月VIP」、4→「六个月VIP」；`members.add({_id: baby_id, baby_id, vip, title, phone, platform:"bind", date, time, tag, history:[d]})`（d={openid,vip,time,platform:"bind"}；**文档 _id 即 baby_id**）；success → `globalData.vip=t` + setData vip + toast「绑定成功，会员已生效」(none,1500) → this.updatePhoneData() → callFunction updateMemberVip `{type:"vipAdd",baby_id,vip,openid}` → 1500ms 后 `wx.reLaunch("/pages/index/index")`。
- **updateMember(n)**：`members.doc(baby_id).update({vip,title,phone,platform,date,time,tag,history:t.unshift(s)})`——**history 用 command.unshift 追加**（t=a.command，A:204 原文 `history:t.unshift(s)`）；success 流程同 createMember（含 reLaunch）。
- **updateMemberPhone**：`wx.showLoading("处理中")` → callFunction updateMemberVip `{type:"vipPhone",phone,baby_id,unionid:globalData.unionid}` → success → hideLoading + toast「绑定成功」。
- **updatePhoneData**：callFunction updatePhoneData `{phone,baby_id,bind_openid:openid,date:formatTime+" "+formatHour}`。
- **member_exist 数据字段**：A:204 全行仅 2 处（data 初始化 !1 + checkPhone 读取），**无任何置 true 处**（本次 grep 实测）→ checkPhone 恒走 createMember 分支；重复绑定场景实际由 checkPhone else 分支（无需重复绑定/已被使用）拦截。

### 云函数调用清单（wx.cloud.callFunction，A:204 grep 计数 4 处 / 2 个云函数）

1. `updateMemberVip` `{type:"vipAdd", baby_id, vip, openid}` —— createMember 内（A:204）
2. `updateMemberVip` `{type:"vipAdd", baby_id, vip, openid}` —— updateMember 内（A:204）
3. `updateMemberVip` `{type:"vipPhone", phone, baby_id, unionid}` —— updateMemberPhone 内（A:204）
4. `updatePhoneData` `{phone, baby_id, bind_openid, date}` —— updatePhoneData 内（A:204）

> 依据包勘误：依据包写「共 2 个 3 处」，实为 **2 个 4 处**（updateMemberVip×3 + updatePhoneData×1）；依据包描述部分所列 4 个位置（createMember/updateMember/updateMemberPhone/updatePhoneData）本身正确。

### 云数据库直查清单（collection() 调用，A:204 grep 计数 13 处）

| 集合 | 处数 | 用途 |
|---|---|---|
| user_study | 2 | getbabyInfo（where baby_id，field babyInfo）读用户资料；checkAppDownload（where baby_id，field nofree_date，死方法内） |
| init | 3 | getSlogan 读 doc("slogan_id")（list 数组随机取口号）；checkFeedbackLahei 读 doc("feedback_lahei")（拉黑名单）；openPanlink 读 doc("pdf_id")（网盘链接 .link 字段） |
| phone | 2 | checkJigou（where {jigou: openid} 判机构）；checkPhone（where {phone} 查号码占用） |
| orders | 1 | checkOrder（where baby_id，查无订单 → appShow:true；死方法链内） |
| feedback | 3 | showFeedback count（当日限 3 条）；submitFeedback add（提交反馈）；订阅成功后 where({tag}).update({notice:!0}) |
| members | 2 | createMember add（_id=baby_id）；updateMember doc(baby_id).update（history command.unshift 追加） |

### 计算规则（精确到边界）

- **setAge**（A:204）：`t = 12*当前年 + (当前月+1) - (12*babyInfo.year + babyInfo.month)`；`birth_year=Math.floor(t/12)`，`birth_month=Math.ceil(t%12)`。
- **getSlogan**：`Math.floor(Math.random()*list.length)` 随机取 init.slogan_id.list 一项，slogan=`"-- "+项+" --"`。
- **getbabyInfo**：babyInfo.avatarUrl/nickName 非空才 setData 对应字段；`babyInfo.birth` 非空 → isAgeSetting:!0 并调 setAge()。
- **反馈限额**：当日（globalData.today_date）同 _openid 反馈 `total>=3` 即拒（边界：恰好第 3 条提交后，第 4 次打开弹窗被拒）。
- **提交节流**：模块级 `i` 标志，置 true 后 1500ms 复位（A:204 `setTimeout(function(){i=!1},1500)`）；拉黑 `l` 标志由 feedback_lahei 文档任意字段值==baby_id 置位，**一旦置位本会话不复位**。
- **showPhoneModal 空输入边界**：原文 `if(t.content&&0==t.content.length)` 恒假（空串即 falsy），「输入不能为空」toast 为**不可达分支**；空输入实际由 submitPhone 的「长度不能为空」拦截。

### 遗留/死方法（节点树无触发点，A:204 grep 计数实测）

依据包列出 7 个疑为遗留的方法，本次逐一计数核实为 **8 个方法 + 1 个数据字段**：

| 方法 | 计数 | 结论 |
|---|---|---|
| checkAppDownload | 1（仅定义） | 全行无调用点，死方法（连带 user_study nofree_date 直查不可达） |
| checkOrder | 3（定义+checkAppDownload 内 2 处调用） | 仅被死方法调用，传递性死代码（连带 orders 直查、appShow 置位不可达） |
| showApp | 1 | 死方法（wx.showModal「APP下载」） |
| goTuiguang | 1 | 死方法（navigateTo ../tuiguang/tuiguang） |
| showImg | 1 | 死方法（previewImage avatarUrl） |
| showBenefit | 1 | 死方法（previewImage tcb public/vip.png 权益图） |
| openSPH | 1 | 死方法（wx.openChannelsUserProfile finderUserName:"sphL7pqtIMwM7mU"） |
| showTuiguangTip | 1 | 死方法，且 **内部 `a.showWechat()` 的 showWechat 在 Page 中无定义**（grep 全行 1 处=仅此调用点），若被调用必抛 TypeError——比依据包「疑为遗留」更进一步的实证 |
| data.appShow | 2（data 初始化+checkOrder 内 setData） | 节点树无引用，死数据字段 |

方法全集（41 个，A:204 正则抽取并剔除 complete/fail/success 回调后核对；依据包写「42 个」但其清单本身列 41 名，实为 **41 个**）：goToPage / setbabyInfo / onLoad / initUserData / getbabyInfo / getSlogan / checkJigou / goJigou / checkAppDownload※ / checkOrder※ / showApp※ / onShow / goMember / goTuiguang※ / showGZH / showDesktop / showImg※ / setAge / clickVIP / hideModal / onShareAppMessage / onShareTimeline / showBenefit※ / openSPH※ / showFeedback / checkFeedbackLahei / input / submitFeedback / openPrivacyContract / showPhoneModal / submitPhone / checkPhone / createMember / updateMember / updatePhoneData / updateMemberPhone / showTuiguangTip※ / goHelpCenter / goClass / downloadPdf / openPanlink（※=死方法）。

wx API 清单（A:204 grep 实测）：navigateTo 8 处 7 个 URL（../set/set×2、../jigou/jigou、../member/member、../tuiguang/tuiguang※、../vip/vip、../help/help、../class/class）；reLaunch 2 处（/pages/index/index，createMember/updateMember 成功后 1500ms）；showModal 4 处（APP下载※ / 添加到桌面 / 自助绑定(editable) / 推广分成※）；previewImage 3 处（GZH.png / avatarUrl※ / vip.png※）；showToast 13 处、showLoading/hideLoading 共 5 处（checkPhone 两分支 + createMember/updateMember/updateMemberPhone 的 success 回调）；requestSubscribeMessage 1 处（tmplIds:["Rk7AApZKN4K1gI4QW60J1bOSk4ShsBp-TEtTqfDktpw"]）；setClipboardData 1 处；openPrivacyContract 1 处；openChannelsUserProfile 1 处（finderUserName:"sphL7pqtIMwM7mU"，死方法内）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 菜单/徽标图标 | `https://qianyufang.top/public/yingyu/images/my/{name}.png`，name∈{vip,vip_no,guide,download,tip,notice,phone,migrate,kefu,feedback,more} 共 11 个 | W ops 节点树字面量 11 个（W:120/124/164/172/181/189/197/206/215/223/231），grep `images/my/` 11 命中 | ✅ 实测验证通过（2026-09-30 本页 14 URL 全量 HEAD 探测 14/14 可达，200 image/png，本次会话执行） |
| 宫格图标 | `https://qianyufang.top/public/yingyu/images/more/{setting,class}.png`，bgColor 均 #fff | A:204 data.gridItems 字面量 2 个 | ✅ 实测验证通过（同上探测，200 image/png） |
| PDF 预览图 | `https://qianyufang.top/AA/Pdf/{文件名}.png`（空格编码为 %20）；现样本仅 AA 级 `1%20pets.png` 一张，A/B 级路径无样本（弹窗文案「目前有AA、A、B三个级别的PDF」） | W:262 字面量 1 个 | ✅ 该样本实测 200（同上探测）；**其他级别路径无样本，只记录规律不猜路径** ⚠️ |
| 公众号二维码 | tcb `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/GZH.png` | A:204 showGZH 字面量 1 处 | ✅ 实测验证通过（2026-09-30 HEAD 200 image/png） |
| 分享封面（好友） | 固定 tcb `…/public/yingyu/shareImg.png`，不随数据变化 | A:204 onShareAppMessage 字面量 1 处 | ✅ 实测验证通过（2026-09-30 HEAD 200 image/png） |
| 分享封面（朋友圈） | 固定 `https://qianyufang.top/public/yingyu/fenjitu.jpg` | A:204 onShareTimeline 字面量 1 处 | ✅ 实测验证通过（2026-09-30 HEAD 200 image/jpeg） |
| VIP 权益图 | tcb `…/public/vip.png`——仅死方法 showBenefit 引用，页面不可达 | A:204 showBenefit 字面量 1 处 | ✅ 实测 200（2026-09-30 HEAD）但页面无入口 |
| 默认头像 | `https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0`（微信官方默认头像，非自建 CDN） | A:204 data.avatarUrl 字面量 | —（微信基础设施，无需探测） |
| 网盘链接 | 云数据库 `init.doc("pdf_id").link` 动态获取后复制到剪贴板，非静态 URL | A:204 openPanlink 原文 | ⚠️ 值在云端，需 captures 采集（captures/collections/ 当前无 init 集合样本） |

## 5. 弹窗 / 分支状态

- **modalFeedback（反馈弹窗，W:621-635）**：tui-modal custom 模式，`fadeIn=-1`（字面量常量，W:621）；标题「问题反馈&功能建议」（op134，无空格，与菜单条目「问题反馈 & 功能建议」op117 有空格——两处文案不同）；tui-textarea height:200rpx / minHeight:160rpx / textareaBorder=true / placeholder 动态；提交按钮「立即提交」72rpx 圆角。入口校验：当日 3 条上限 + 拉黑名单 + 1500ms 节流。
- **modalPdf（PDF 弹窗，W:637-665）**：标题「PDF预览」+ 预览图（AA 级 pets）+ 两行说明 + 「网盘下载链接」按钮（复制网盘链接到剪贴板）。
- **VIP 三态**：vip>0 → 昵称旁 vip.png 徽标；vip==-2 → vip_no.png 徽标；vip<0 → 渐变横幅卡（#383f54 条 + #5677fc「加入VIP」按钮），横幅内文案按 vip==-1 / vip<-1 二分。绑定成功流程 toast「绑定成功，会员已生效」→ 1500ms 后 reLaunch 首页。
- **jigou 机构态**：checkJigou 查 phone 集合 `where({jigou: openid})` 命中 → 菜单列表 2 多出「账号管理」条目。
- **页脚**：tui-footer copyright={{slogan}}（init.slogan_id 随机口号，格式 `-- xxx --`），fixed=false 非固定底栏。
- **客服**：button open-type=contact 原生会话，无 JS。

## 6. 对账记录（对账员填写）

对账时间：2026-09-30。对账员独立重推（只读解包原文与本文，未参考蒸馏过程）：`grep -l "'./pages/more/more.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_8.webview.js；`wc -l` → webview 695 行 / appservice 204 行 / wxss 328 行，均与本文声明一致；`grep -l "tui-modal.wxml"` → 唯一命中 chunk_15.webview.js。全文通读 W（W:1-275 ops 三段 + W:377-695 渲染与注册）、X（X:1-328 全部）、A:204 以 python 正则逐项计数（9,218 字符，与本文声明一致）、app-config.json 以 python json 解析。

- [x] 节点树与原文一致（ops 166 项 + m2 渲染函数 W:377-668）——op0..op165（W:108-273 恰 166 行）逐项比对全中；`_mz` 属性数组「首项绝对下标、后续数字为首项偏移」解析规则经 W:383/388/395/401/430/479/630/632/637/660 十处交叉验证成立；tui-modal `fadeIn=-1` 字面量 + bindcancel=129/custom=130/show=131 与本文一致；VIP 徽标两独立条件帧（W:392-405，均 wxXCkey=1）、vip<0 横幅（W:423-471）、jigou 条目（W:559-575）、`_2z(z,39,…,'item','index','index')` 宫格循环（W:491）、客服 button 仅 class/openType 无 bindtap（W:581）、bind:tap 带冒号仅 goMember（W:430）与 showDesktop（W:523）两处——均实证。m0/m1/m2 起始行 `grep -n "var m[012]=function"` → 279/310/377，与本文一致。
- [x] 类名抽查全中（要求 ≥10 处，实做节点树类名全量约 40 处 + wxss 页级类名 22 个）——节点树类名 z 字面量（op0/op1/op3/op5/op7/op10/op18/op19/op22/op23/op25/op27/op34/op35/op37/op38/op42/op45/op48/op50/op52/op53/op54/op57/op67/op103/op126/op132/op133/op141/op149/op150/op152/op155/op159 等）全部与第 1 节一致；wxss 逐行核对全中：.container X:1 / .grid-wrap X:2 / .grid-item X:4 / .item-icon X:5 / .item-title X:6 / .tui-logo X:229 / .item-center X:230 / .tui-modal-custom X:297 / .tui-prompt-title X:298 / .contact X:301 / .footer X:304 / .png X:305 / .tui-page__hd X:287 / .tui-page__title X:228+X:289 双规则 / .tui-page__desc X:290 / .tui-my_header X:316 / .tui-vip__box X:317 / .tui-vip__bar X:319 / .tui-vip__desc X:320-321 / .tui-vip__btn X:323-324；`grep -c "pdf_view" unpacked/wxss_out/pages__more__more.wxss` → 0（无定义，与本文一致）；W:695 内嵌 setCssToHead rpx 换算抽查（container 5px 15px / grid-item 110px / png 36px / footer 15px 0 / tui-vip__btn 40px×100px 半径 40px）与 X 一致。
- [x] 文案逐字一致——节点树 21 处文案逐字全中，含 3 处 & 空格差异实证（op117 `问题反馈 \x26 功能建议` W:225、op125 `服务协议 \x26 隐私政策` W:233、op134 `问题反馈\x26功能建议` W:242）；A:204 侧 20+ 处逐字全中：当天反馈已超限，请明日再来 / 说点什么吧 / 反馈已收到 / 长度不能为空 / 该号码不正确 / 该号码不存在 / 无需重复绑定 / 该号码已被使用 / 绑定成功，会员已生效（createMember+updateMember 2 处）/ 绑定成功（updateMemberPhone 1 处）/ 请在百度网盘中打开 / 输入不能为空 / 将小程序添加到桌面（含 `1.点击右上角三个点\n2.选择“添加到桌面”` 弯引号原文）/ 自助绑定 / 请输入要绑定的号码 / 可输入您使用中遇到的问题…（placeholder 全文）/ APP下载 / 推广分成 / 分享标题两处 + query:"" + fenjitu.jpg + shareImg.png；slogan 格式 `-- xxx --`、gridItems 两标题字面量逐字一致。
- [x] 事件与云函数调用清单齐全——节点树 16 个绑定（bindtap 12 + bind:tap 2 + bindinput 1 + bindcancel 2）+ 客服 button（open-type=contact 无 JS）与第 3 节事件表 17 行一一对应，A:204 全部存在对应处理函数；`callFunction` 4 处 / 2 个云函数（updateMemberVip×3：createMember/updateMember/updateMemberPhone；updatePhoneData×1）；`collection()` 13 处分布 user_study2/init3/phone2/orders1/feedback3/members2（python Counter 实测）；navigateTo 8 处 7 URL（../set/set×2 含 clickVIP else 分支）、reLaunch 2、showModal 4、previewImage 3、showToast 13、requestSubscribeMessage 1（tmplIds 原文一致）、setClipboardData 1、wx.openPrivacyContract 1、openChannelsUserProfile 1（finderUserName:"sphL7pqtIMwM7mU"）；方法全集 61 个 `name:function(` − success 15 / complete 4 / fail 1 = **41 个**，名称与顺序与第 3 节清单逐一相符；死方法 8 个计数全中（checkAppDownload 1 / checkOrder 3 / showApp 1 / goTuiguang 1 / showImg 1 / showBenefit 1 / openSPH 1 / showTuiguangTip 1）、showWechat 全行仅 1 处（=调用点，无定义）、member_exist 全行 2 处无置 true、appShow 2 处、babyInfoReadyCallback 1 处；onReachBottom/onUnload/onHide/onReady/onPullDownRefresh 全行 0 命中；关键分支原文实证（`0==t&&this.setbabyInfo(),1==t&&this.goClass()`、members.add `_id:e.globalData.baby_id`、`history:t.unshift(s)`、`t.content&&0==t.content.length` 不可达分支、checkPhone `!1==a.data[0].used&&a.data[0]._openid==n`）。
- [x] app-config 核对——pages 含 pages/more/more；本页 window `{"backgroundColorTop":"#fff","backgroundColorBottom":"#fff","navigationBarTitleText":"","onReachBottomDistance":50}`（标题空字符串 ✓、onReachBottomDistance:50 ✓、无自定义导航栏键 ✓）；tabBar 5 项第 5 项 pagePath=pages/more/more、text=「我的」✓。

- diff 摘要：**四项核对全部通过，节点树/类名/文案/事件与云函数清单零差异**。另记录 5 条外围勘误与转写差异（不阻断验收，建议蒸馏工下次修订时改入正文）：
  1. 【计数勘误】第 3 节 wx API 清单「showLoading/hideLoading 共 5 处（checkPhone 两分支 + createMember/updateMember/updateMemberPhone 的 success 回调）」→ 实测 showLoading 1 处 ✓、**hideLoading 5 处**（checkPhone 两个 else 分支各 1 + createMember/updateMember/updateMemberPhone success 各 1，python 正则逐处定位）。
  2. 【位置勘误】前言「`__wxRoute = "pages/more/more"` 在 A:203 行尾」→ 值正确（python 实测 A:203 该值），但位于 A:203 **行中**（tui-textarea require 之后、`define("pages/more/more.js"…)` 之前，其后还有 __wxRouteBegin/__wxAppCurrentFile__）；A:205 收尾元信息正确。
  3. 【来源表述】frontmatter「灰底 #f1f1f1 黑字，回落微信平台默认值（app-config 全局 window 为空 {}）」→ app-config 全局 window 为空对象 `{}`，本页 window 亦无 navigationBarBackgroundColor/TextStyle 键，#f1f1f1/黑字实为**微信平台默认值**回落，非全局 window 显式配置（「无自定义栏」方向正确）。
  4. 【转写差异·语义等价】第 3 节 `wx.showLoading("处理中")` → 原文 `wx.showLoading({title:"处理中"})`（对象形态）；`tag:Date.now()` → 原文 `tag:n`（n=t.getTime()，t=new Date，值等价）。
  5. 【本次未复核】第 4 节资源 URL 的 HEAD 探测结论（16 URL 200，2026-09-30）系蒸馏工会话记录，本次对账未重新发起网络探测（非本次核对项）；W:695 内嵌三份 wxss 仅抽查换算未逐值比对；m0/m1 行区间（W:279-307/W:310-374）仅验证起始行号（m2 与 ops 已全量核对）。

## 附：本次蒸馏对依据包的勘误与补充（均已回原文实证）

1. **云函数计数**：依据包「共 2 个 3 处」→ 实为 2 个 **4 处**（updateMemberVip×3 + updatePhoneData×1），依据包描述列举的 4 个位置正确，仅总数误。
2. **方法计数**：依据包「方法全集（42 个）」→ 清单实际列 41 名，正则抽取实为 **41 个**（另含 complete/fail/success 3 个回调）。
3. **showTuiguangTip 内部缺陷**：`a.showWechat()` 无定义（A:204 全行 grep 1 处=仅调用点），死方法且调用即抛错；依据包仅标「疑为遗留」。
4. **checkOrder 传递性死代码**：仅被 checkAppDownload（自身无调用点）调用，连带 orders 直查与 appShow 置位不可达；member_exist 无置 true 处，checkPhone 恒走 createMember。
5. **资源验证升级**：本页 14 个自建 CDN URL + 2 个 tcb URL 共 16 个（含死方法引用的 2 个）全部 HEAD 探测 200（2026-09-30，本次会话执行，命令为 `curl -sI`），超出了依据包「同域推定」的置信度；audit/cdn-probe.md 的 units 抽样（2026-09-29，20/20）与本页探测互为印证。
6. **未做/待复核**：① vip 徽标两条件的 wx:if/wx:elif 编译前形态无法从产物判定（见第 1 节状态分支注）；② tui-modal/tui-footer/tui-textarea 组件内部模板与样式未展开（tui-modal 在 chunk_15.webview.js）；③ page-frame.html 全局类（cu-list/cu-item/menu-avatar/cu-avatar/text-xl 等 22 处命中）具体数值未提取，对账时如需精确全局样式再跑 SKILL.md 的 extract_common_wxss.py；④ init 集合（slogan_id/feedback_lahei/pdf_id）与 phone/orders/feedback/members 集合样本未采集，captures/collections/ 当前为空，数据结构以 A:204 代码倒推为准。


---

**主代理勘误落实（2026-09-30，据对账员第一轮 5 条外围勘误）**：hideLoading 计数 1→5 处勘正；__wxRoute 行号 A:203 口径修正；导航栏回落表述改为「微信平台默认值（全局 window 空 {}）」。原「抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）」类标记已于同日批量升级为「抽样验证通过」（audit/cdn-probe.md）。
