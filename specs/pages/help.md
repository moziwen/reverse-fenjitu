---
页名: help
显示名: 使用帮助中心（pages/help/help，注册于 app-config pages 数组索引 26）
状态: 对账通过（待验收）
chunk: chunk_33.webview.js / chunk_33.appservice.js
导航栏: 系统栏（标题「使用帮助中心」，无 navigationStyle 字段 → 非 custom）
---

# 页面还原规格：使用帮助中心（pages/help/help）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_33.webview.js（226 行，本次会话抽查/通读骨架区段 W:1-3/19-201/224-226），A=unpacked/chunk_33.appservice.js（114 行 + 末行 115，全文件仅 1 个 `define(`（grep -c 实测），页面逻辑全部在 A:114 单行内，2,421 字符，本次整行导出逐段通读），X=unpacked/wxss_out/pages__help__help.wxss（**24 行**，wc -l 与 cat -n 一致；依据包写「25 行」系笔误，见附录勘误 1），C=unpacked/app-config.json（node JSON.parse）。
> 定位命令与输出：`grep -l "'./pages/help/help.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_33.webview.js；注册在 W:224 `__wxAppCode__['pages/help/help.wxml']`；`wc -l` → W 226 行 / A 114 行 / X 24 行。
> ops 索引换算：按 SKILL.md `_mz` 索引坑规则，ops 函数 `gz$gwx_XC_27_1`（W:15）逐行 Z() 重建：opN = W:(19+N)，op0..op67 共 68 项（W:19-86，`grep -c "^Z("` → 68，本次实测），已逐项与 m0 渲染函数交叉核对一致（如 W:100 tui-list-cell `['arrow',6,'bindclick',1,'data-id',2,'data-type',3]` → arrow=op6/bindclick=op7/data-id=op8/data-type=op9）。复用项写作 z[N]（如 op17=z[1] 表示复用 op1 的字面量 '#000'）。
> 双残本警示：W 与 A 各嵌一份 `$gwx_XC_27`，**内容不同**——A:15 起也有 `gz$gwx_XC_27_1`，但 Z() 仅 33 项（实测计数），缺反馈按钮与两个 modal 的 ops（与依据包 notes「appservice 版为旧编译残本」结论一致，但其「ops 0-51」口径与实测 33 项不符，见附录勘误 6）。按 AGENTS.md 权威对照表，本 spec 骨架全部取自 W（webview 版）。

## 1. 页面骨架（节点树）

来源：`chunk_33.webview.js` 的 `$gwx_XC_27`（W:1），ops 函数 W:15-86，渲染函数仅 m0 一个（W:92-201）。页面顶层有**两个兄弟节点**：view.container（W:146 `_(r,eP7B)` 挂页面根）与固定反馈按钮 fixed view（W:158 `_(r,eH8B)` 挂页面根）——后者不是 container 的子节点。

```
<view class="container">                                              (op0=W:19, W:94-95)
  <tui-list-view color="#000" size="38" title="常用功能介绍">          (W:96, color=op1=W:20, size=op2=W:21, title=op3=W:22)
    <!-- wx:for {{list1}}（op4=W:23, 循环 W:115 `_2z(z,4,…,'item','index','index')`；循环体 W:99-114） -->
    <tui-list-cell arrow="{{item.from>0?true:false}}" bindclick="showDetail"
          data-id="{{index}}" data-type="1"/>                        (W:100, arrow=op6=W:25 三元绑定, bindclick=op7=W:26, data-id=op8=W:27, data-type=op9=W:28)
      <view class="tui-item-box">                                    (op10=W:29, W:101-102)
        <tui-icon color="#19be6b" name="service" size="{{24}}"/>     (W:103, color=op11=W:30, name=op12=W:31, size=op13=W:32 数值 24)
        <text class="tui-list-cell_name">{{item.title}}</text>       (W:105-107, class=op14=W:33, 内容=op15=W:34 绑定 item.title)
      </view>
    </tui-list-cell>
  </tui-list-view>
  <view class="margin-top"/>                                         (op16=W:35, W:117-118)
  <tui-list-view color="#000" size="38" title="常见问题解决">          (W:120, color=op17=z[1] 复用 '#000', size=op18=z[2] 复用 '38', title=op19=W:38)
    <!-- wx:for {{list2}}（op20=W:39, 循环 W:139 `_2z(z,20,…,'item','index','index')`；循环体 W:123-138） -->
    <tui-list-cell arrow="{{item.from>0?true:false}}" bindclick="showDetail"
          data-id="{{index}}" data-type="2"/>                        (W:124, arrow=op22=z[6] 复用同一三元绑定, bindclick=op23=z[7], data-id=op24=z[8], data-type=op25=W:44 '2')
      <view class="tui-item-box">                                    (op26=z[10] 复用, W:125-126)
        <tui-icon color="#ff7900" name="explain" size="{{24}}"/>     (W:127, color=op27=W:46, name=op28=W:47, size=op29=z[13] 复用数值 24)
        <text class="tui-list-cell_name">{{item.title}}</text>       (W:129-131, class=op30=z[14] 复用, 内容=op31=W:50 引用 op15 内层绑定 item.title)
      </view>
    </tui-list-cell>
  </tui-list-view>
  <tui-nomore backgroundColor="#f7f7f7" text="暂无更多了"/>           (W:141, backgroundColor=op32=W:51, text=op33=W:52)
  <view class="tui-safearea-bottom"/>                                (op34=W:53, W:143-144)
</view>

<view class="flex-sub text-center bottom-btn"
      style="position:fixed;bottom:100rpx;width:100%;opacity:0.9;z-index:999;"/>
                                                                    (op35=W:54, op36=W:55 内联 rpx 原样, W:147; 挂页面根, W:158)
  <button bindtap="showFeedback" style="width:60%;background-color:#5677fc;"/>
                                                                    (W:148, bindtap=op37=W:56, style=op38=W:57)
    <view class="cuIcon-question text-xl text-white"/>              (op39=W:58, W:149-150, 空节点仅图标字体)
    <text class="text-white">以上都没有？点此提交</text>              (op40=W:59, 文案=op41=W:60, W:152-155)

<tui-modal fadeIn bindcancel="hideModal" custom="{{true}}" show="{{modalFeedback}}"/>
                                                                    (W:159, fadeIn 裸属性（编译为 -1 操作数，运行时恒 true）, bindcancel=op42=W:61, custom=op43=W:62 true 字面量, show=op44=W:63) 问题反馈弹窗
  内部（W:160-173）：
  <view class="tui-modal-custom">                                   (op45=W:64, W:160-161)
    <view class="tui-prompt-title text-bold">问题反馈</view>          (op46=W:65, 文案=op47=W:66, W:162-166 —— 注意：help 页标题仅「问题反馈」四字，与 more 页「问题反馈&功能建议」不同)
    <input bindinput="input" class="{{'tui-modal-input ' + (!modalFeedback ? 'tui-hidden-input' : '')}}"
           placeholder="请输入问题描述或建议"/>                      (W:167, bindinput=op48=W:67, class=op49=W:68 拼接绑定, placeholder=op50=W:69)
    <button bindtap="submitFeedback" class="bg-blue" height="72rpx"
            shape="circle" size="28">立即提交</button>              (W:169, bindtap=op51=W:70, class=op52=W:71, height=op53=W:72, shape=op54=W:73, size=op55=W:74 字符串 '28', 文案=op56=W:75)

<tui-modal fadeIn bindcancel="hideModal" custom="{{true}}" show="{{modalTips}}"/>
                                                                    (W:175, fadeIn 裸属性（编译为 -1 操作数，运行时恒 true，W:175 属性序 ['fadeIn',-1,'bindcancel',57,'custom',1,'show',2]）, bindcancel=op57=z[42] 复用 'hideModal', custom=op58=z[43] 复用 true, show=op59=W:78) 答案详情弹窗
  内部（W:176-199）：
  <view class="tui-modal-custom">                                   (op60=z[45] 复用, W:176-177)
    <view class="tui-page__hd">                                     (op61=W:80, W:178-179)
      <view class="tui-page__title">{{title}}</view>                (op62=W:81, 内容=op63=W:82 绑定 title, W:180-184)
      <!-- wx:for {{answer}}（op64=W:83, 循环 W:196 `_2z(z,64,…,'item','index','index')`；循环体 W:187-194） -->
      <view class="tui-page__desc">{{index+1}}.{{item}}</view>      (op66=W:85, 内容=op67=W:86 绑定 (index+1)+'.'+item, W:188-192)
```

### 状态分支

- **arrow 箭头条件（op6/op22 同一表达式）**：编译产物为 `(item.from>0) ? true : false`（W:25 `Z([[2,'?:'],[[2,'>'],…,[1,0]],[1,true],[1,false]])`）——`from>0`（即 from=1 公众号文章 / from=2 视频号）的条目显示右侧箭头；纯文本答案条目（from 其他值）不显示箭头。
- **showDetail 三分支**（A:114）：`from==1` → `wx.openOfficialAccountArticle({url:source})`；`from==2` → `wx.openChannelsActivity({feedId:source, finderUserName:"sphL7pqtIMwM7mU"})`；**否则** → 弹出 modalTips 文本答案弹窗。三分支均调用 `wx.hideLoading()`（分支1/2 在跳转调用之后，分支3 在 setData 之前）。
- **tui-hidden-input 技巧（op49）**：input 的 class 为拼接绑定 `'tui-modal-input ' + (!modalFeedback ? 'tui-hidden-input' : '')`（W:68 ops 原文）——弹窗关闭态（modalFeedback=false）时 input 被 `.tui-hidden-input{width:0}`（X:20）隐藏，开启态恢复正常输入框。
- **依赖自定义组件**（模板均不在本 chunk，本次 grep -l 定位）：tui-list-view → chunk_13.webview.js、tui-list-cell → chunk_12.webview.js、tui-icon → chunk_11.webview.js、tui-nomore → chunk_16.webview.js、tui-modal → chunk_15.webview.js。`bindclick` 是 tui-list-cell 组件自定义事件（非原生 bindtap），组件内转发，页面侧处理函数为 showDetail。
- **本页无任何 image 节点与 http URL 字面量**：ops 68 项（W:19-86）逐项核对 0 命中；图标全部走 tui-icon 的 name 字符串（service/explain），由组件内部映射为字体/图标资源。

## 2. 样式规格

来源：`wxss_out/pages__help__help.wxss`（24 行，本次全文通读；数值直接当 px，不除 2）。与 W:226 内嵌 `setCssToHead(…,{path:"./pages/help/help.wxss"})` 数组逐条一致（本次比对），rpx→px 换算实测吻合：20rpx=10px、26rpx=13px、34rpx=17px、52rpx=26px、100rpx=50px、24rpx=12px、500rpx=250px、120rpx=60px、76rpx=38px、40rpx=20px、32rpx=16px、30rpx=15px、10rpx=5px、1rpx=0.5px。

| 类名 | 关键样式 | 用途 | 行号 |
|---|---|---|---|
| .container | padding-bottom:env(safe-area-inset-bottom) | 页面容器（适配底部安全区） | X:1 |
| .tui-item-box | width:100% | 列表条目内容盒 | X:2 |
| .tui-item-box,.tui-list-cell_name | flex 居中（align-items:center; display:flex） | 图标+文字横排 | X:3 |
| .tui-list-cell_name | justify-content:center; padding-left:10px | 条目标题 | X:4 |
| .tui-modal-custom | text-align:center | 两弹窗容器 | X:17 |
| .tui-prompt-title | font-size:17px; padding-bottom:10px | 反馈弹窗标题 | X:18 |
| .tui-modal-input | border-bottom:0.5px solid #e6e6e6; font-size:16px; margin:15px auto 25px; width:80% | 反馈输入框 | X:19 |
| .tui-hidden-input | width:0 | 弹窗关闭态隐藏真 input（见第 1 节状态分支） | X:20 |
| .tui-page__hd | box-sizing:border-box; padding:5px; width:100% | 答案弹窗头 | X:21 |
| .tui-page__title | font-size:20px; font-weight:400; text-align:left | 答案弹窗标题 | X:23 |
| .tui-page__desc | color:#888; font-size:15px; margin-top:15px; text-align:left | 答案逐条说明行 | X:24 |

- W:226 内嵌副本另有 `.tui-page__bd{margin-top:20px;padding-bottom:40px}`（对应 X:22，**数值为无 rpx 前缀的直接 px**）——本页节点树未引用 tui-page__bd，属文件级整体还原。
- ThorUI 链带遗留类（X:5-16：.tui-ml-auto/.tui-right/.tui-logo/.tui-flex/.tui-msg-box/.tui-msg-pic/.tui-msg-item/.tui-msg-name/.tui-msg-content/.tui-msg-right/.tui-right-dot/.tui-msg-time）：节点树均未引用，写码时忽略。
- 依赖的全局类（**本页 wxss 无定义**，grep `bottom-btn|flex-sub` X 全文件 0 命中，本次实测；出自 page-frame.html 全局块，`grep -c` 实测命中：bottom-btn 5 处、flex-sub 14 处、tui-safearea-bottom 24 处）：`.flex-sub` / `.text-center` / `.bottom-btn` / `.tui-safearea-bottom` / `.margin-top` / `.cuIcon-question` / `.text-xl` / `.text-white` / `.bg-blue`。具体数值本次未提取（见遗留问题 5）。

## 3. 事件与逻辑

来源：`chunk_33.appservice.js`（A:113-115；`__wxRoute="pages/help/help"` 在 A:113，Page({...}) 全部在 A:114 单行内，本次整行导出通读；A:115 收尾元信息）。模块级头部（A:114 行首）：

- `t=wx.cloud.database({})` —— 直连云数据库；**其后的 `t.command;` 是无赋值表达式语句**（未存入变量，A:114 全行再无 command 用法，编译残留；依据包「t.command 取用」表述易误导，见附录勘误 3）。
- `e=getApp()` —— globalData 取用 openid / today_date / baby_id / babyInfo / vip。
- `a=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")` —— 工具库 formatTime / formatHour（本页 time 字段拼接用）。
- `i=!1` —— 模块级提交防抖锁。

data 初始值（A:114 原文）：`{list1:[], list2:[], modalFeedback:!1}`。**inputContent 未在 data 声明**，由 input 事件动态写入（A:114 `input` 函数）。

生命周期：仅 onLoad（两次查 guide，见下）。无 onShow/onReady/onHide/onUnload/onPullDownRefresh/onReachBottom（A:114 通读确认）。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 页面加载 | onLoad | 两次查 guide 集合：`where({show:true,type:1}).orderBy("clicks","desc").get()` → setData list1；`where({show:true,type:2}).orderBy("clicks","desc").get()` → setData list2（**按点击量降序**） | guide 读 ×2 | list1, list2 |
| 列表条目 tap（tui-list-cell bindclick，W:100/W:124） | showDetail | `wx.showLoading({title:"加载中"})` → `parseInt(dataset.id)`、`parseInt(dataset.type)` → type=1 取 list1[id]、type=2 取 list2[id]（否则空对象 {}）→ **无条件先 countClicks(item._id)** → 三分支（见第 1 节状态分支） | updateHelperClicks；wx.openOfficialAccountArticle / wx.openChannelsActivity | modalTips, title, answer |
| —（countClicks 内部） | countClicks | `wx.cloud.callFunction({name:"updateHelperClicks", data:{doc_id:item._id}})` | updateHelperClicks | — |
| 底部按钮 tap（W:148） | showFeedback | `feedback.where({_openid:globalData.openid, date:globalData.today_date}).count`：`total>=3` → toast「当天反馈已超限，请明日再来」(icon:none)；否则 setData modalFeedback=true（**每日每 openid 限 3 条**） | feedback count | modalFeedback |
| input bindinput（W:167） | input | `setData({inputContent:e.detail.value})` | — | inputContent |
| 提交按钮 tap（W:169） | submitFeedback | 判空 → this.hideModal() → 防抖锁检查 → feedback.add 7 字段 → 订阅消息 → 成功后 update notice → toast（详见下方流程） | feedback add / update | i 标志, modalFeedback, modalTips |
| 两弹窗 bindcancel（W:159/W:175） | hideModal | `setData({modalFeedback:!1, modalTips:!1})` 一次关两弹窗 | — | modalFeedback, modalTips |

### submitFeedback 流程（A:114 原文顺序）

1. 判空：`if(0==this.data.inputContent.length) return void wx.showToast({title:"说点什么吧"})`。
2. `this.hideModal()`（先关弹窗，无论后续是否提交）。
3. 防抖：`!1==i` 才继续；`i=!0`，`setTimeout(function(){i=!1},1500)` 1500ms 复位。
4. `var o=new Date, n=o.getTime()`；`feedback.add({data:{date:today_date, baby_id, time:formatTime(o)+" "+formatHour(o), tag:n, content:inputContent, babyInfo, vip}})` —— **add 实写 7 字段**（第 8 个 notice 由第 6 步 update 追加）。
5. `wx.requestSubscribeMessage({tmplIds:["Rk7AApZKN4K1gI4QW60J1bOSk4ShsBp-TEtTqfDktpw"]})`。
6. 订阅 success → `feedback.where({tag:n}).update({data:{notice:!0}})`；complete → toast「反馈已收到」。

### 计算规则（精确到边界）

- **反馈限额**：当日（globalData.today_date）同 _openid 反馈 `total>=3` 即拒（边界：恰好第 3 条提交后，第 4 次打开弹窗被拒）。与 more 页同一限额口径（more.md A:204 实证一致）。
- **提交节流**：模块级 `i` 标志，置 true 后 1500ms 复位；**hideModal 在节流判断之前执行**——1500ms 内重复点击时弹窗仍会关闭但不写入。
- **showDetail 边界**：dataset.type 非 1/2 时取值为空对象 `{}`（A:114 原文 `var i={}`），`countClicks(i._id)` 将以 `doc_id:undefined` 调用云函数（页面 data-type 固定 '1'/'2'，正常运行不触发）。
- **inputContent 未声明边界**：用户从未触发过 input 事件时 `this.data.inputContent` 为 undefined，`0==this.data.inputContent.length` 将抛 TypeError（「说点什么吧」toast 仅在「输入过又删空」场景可达）——原样行为，还原时保留。
- **wx.showLoading 为对象形态**：A:114 原文 `wx.showLoading({title:"加载中"})`。

### 云函数调用清单（wx.cloud.callFunction，A:114 全行仅 1 处）

1. `updateHelperClicks` `{doc_id}` —— countClicks 内（A:114）

### 云数据库直查清单（collection() 调用，A:114 计数：guide ×2 / feedback ×3）

| 集合 | 处数 | 用途 |
|---|---|---|
| guide | 2 | onLoad 读：where({show:true,type:1/2}).orderBy("clicks","desc").get() |
| feedback | 3 | showFeedback count（当日限流）；submitFeedback add（7 字段）；订阅成功后 where({tag}).update({notice:true}) |

分享（A:114）：
- **onShareAppMessage**：`{title:"分享你一个英语绘本分级阅读小程序", path:"/pages/index/index?tuiguang_openid="+globalData.openid, imageUrl:"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png"}`。
- **onShareTimeline**：同 title，`query:""`，`imageUrl:"https://qianyufang.top/public/yingyu/fenjitu.jpg"`。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 页面图片 | **本页无**：节点树 0 个 image 节点、ops 68 项 0 个 URL 字面量（W:19-86 逐项核对）；图标走 tui-icon name 字符串（service/explain），资源映射在组件内（chunk_11.webview.js，未展开） | W:19-86 | — |
| 列表跳转目标 | 动态来自 guide 集合：from=1 → `item.source` 为公众号文章 URL（openOfficialAccountArticle）；from=2 → `item.source` 为视频号 feedId（openChannelsActivity，finderUserName 硬编码 `sphL7pqtIMwM7mU`）；其余 → `item.answer` 文本弹窗 | A:114 showDetail 原文 | ⚠️ 值在云端，captures/collections/ 当前**无 guide 集合样本**，待采集对账 |
| 分享封面（好友） | 固定 tcb `…/public/yingyu/shareImg.png`，与 more 页字面完全一致（more.md:291） | A:114 onShareAppMessage 字面量 1 处 | 沿用 2026-09-30 HEAD 探测 200 结论（more.md:291 / audit/cdn-probe.md）；**本次未重测** |
| 分享封面（朋友圈） | 固定 `https://qianyufang.top/public/yingyu/fenjitu.jpg`，与 more 页字面完全一致（more.md:292） | A:114 onShareTimeline 字面量 1 处 | 同上 |
| 订阅消息模板 | 硬编码 `Rk7AApZKN4K1gI4QW60J1bOSk4ShsBp-TEtTqfDktpw`（与 more 页反馈订阅同一模板 ID，more.md:216） | A:114 tmplIds 字面量 1 处 | — |

## 5. 弹窗 / 分支状态

- **modalFeedback（问题反馈弹窗，W:159-173）**：tui-modal custom 模式，fadeIn 裸属性（编译为 -1 操作数，运行时恒 true）；标题「问题反馈」（op47，无「&功能建议」，与 more 页弹窗标题不同）；input placeholder「请输入问题描述或建议」，class 拼接 tui-hidden-input 实现关闭态隐藏；提交按钮「立即提交」72rpx 圆角 bg-blue。入口校验：当日 3 条上限（showFeedback）→ 输入判空 → 1500ms 节流 → 写入 + 订阅。
- **modalTips（答案详情弹窗，W:175-199）**：tui-modal custom 模式，复用 hideModal/custom 字面量；标题 `{{title}}`（来自被点条目 item.title）；正文 `wx:for {{answer}}` 逐条渲染 `{{index+1}}.{{item}}`（tui-page__desc，15px #888）。**answer 被 wx:for 遍历 → 应为数组或可遍历结构，JS 侧未再加工**（A:114 直接 setData item.answer），形态需以 captures/collections guide 样本为准，勿猜。
- **列表双组**：type=1「常用功能介绍」绿图标 service（#19be6b）；type=2「常见问题解决」橙图标 explain（#ff7900）；均按 guide.clicks 降序；条目 from>0 显示箭头并外跳，否则弹文本答案。
- **固定底部反馈按钮**：fixed bottom:100rpx、opacity 0.9、z-index 999，蓝底 #5677fc，cuIcon-question + 「以上都没有？点此提交」；showFeedback 先做每日限额校验。
- **页尾**：tui-nomore「暂无更多了」（#f7f7f7 底）+ tui-safearea-bottom 安全区占位。

## 6. 对账记录（对账员填写，2026-10-01 独立复账）

对账方法：只读解包原文与本文，不读蒸馏依据包。节点树用真实运行时渲染：`node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_33.webview.js XC_27 "./pages/help/help.wxml"`（注：`$gwx_XC_27` 经 W:224 尾调用后已是渲染工厂，须直接 `gwx(entryPath,{})` 调用，脚本原写法 `gwx.apply(null,args)(...)` 传参会失败，本次已修正副本后运行成功）；ops 用 `node tools/extract_gwx_ops.js unpacked/chunk_33.webview.js XC_27` 独立重建 z[0]..z[67] 共 68 项；`_mz` 索引规则以 page-frame.html 内 `_mz` 源码实证（首个非负操作数成为后续属性的 base 偏移；负操作数 → `tmp.attr[attrs[i]]=true` 字面 true）；内嵌 CSS 抽出 setCssToHead 数组（113 元素）解码后与 X 逐行比对。

- [x] 节点树与原文一致 —— **结构 100% 一致**（双根兄弟节点、container 五子顺序、双 modal 内容、wx:for 循环体、fixed 反馈按钮，渲染树逐项吻合），D1/D2 属性转写失真已修正（见下方复核块）
- [x] 类名抽查 15 处全中 —— X 定义的 11 类逐条数值命中（.container X:1 / .tui-item-box X:2 / .tui-item-box,.tui-list-cell_name X:3 / .tui-list-cell_name X:4 / .tui-modal-custom X:17 / .tui-prompt-title X:18 / .tui-modal-input X:19 / .tui-hidden-input X:20 / .tui-page__hd X:21 / .tui-page__title X:23 / .tui-page__desc X:24，另 X:22 .tui-page__bd 直接 px 亦吻合）；全局 9 类在 page-frame.html 实证：bottom-btn `grep -c`=5、flex-sub=14、tui-safearea-bottom=24（与本文 §2 计数一致），margin-top 以 `".",[1],"margin-top{margin-top:",[0,30],"}` 分段形式存在（30rpx），text-center=28、text-xl=30、text-white=27、bg-blue=17、cuIcon-question=2；`grep -c "bottom-btn\|flex-sub"` X 全文件 0 命中复核一致
- [x] 文案逐字一致 —— 12 处全中：常用功能介绍(z[3])/常见问题解决(z[19])/暂无更多了(z[33])/以上都没有？点此提交(z[41])/问题反馈(z[47])/请输入问题描述或建议(z[50])/立即提交(z[56])/加载中/说点什么吧/当天反馈已超限，请明日再来/反馈已收到/分享你一个英语绘本分级阅读小程序（后 5 处 A:114 原文）
- [x] 事件与云函数调用清单齐全 —— A:114（2,421 字符，`[...s].length` 实测）逐句核对：onLoad guide×2（where show:true type:1/2 + orderBy("clicks","desc")）、showDetail（parseInt dataset、`var i={}` 边界、无条件先 countClicks、from==1/2/否则三分支）、countClicks→`wx.cloud.callFunction` 全行仅 1 处 updateHelperClicks{doc_id}、showFeedback total>=3 限额、input、submitFeedback（判空→hideModal 先于 1500ms 节流→add 7 字段→订阅模板 Rk7AApZKN4K1gI4QW60J1bOSk4ShsBp-TEtTqfDktpw→where({tag}).update notice:!0→complete toast）、hideModal 双关、onShareAppMessage/onShareTimeline 字面量逐字；collection 计数 guide×2/feedback×3 复核一致；`t.command;` 无赋值残留（全行 command 仅 1 处）；data 三键、inputContent 未声明复核一致
- 其他复核通过项：W 226 行/A 114 行+末行 115（awk NR=115）/X 24 行；W=9,953 B、A=7,209 B（附录 6「依据包自述未复核」的字节数本次复核通过）；A 全文 `define(`=1；A 侧残本 `grep -c "^Z("`=33（勘误 6 一致）；opN=W:(19+N) 换算、op31=`Z([a,z[15][1]])` 结构引用 op15、op55=`Z([3,'28'])` 字符串、op67=(index+1)+'.'+item 全部实证；组件 chunk 5/5（tui-list-view→13、tui-list-cell→12、tui-icon→11、tui-nomore→16、tui-modal→15，app-config 无 usingComponents，本文 grep -l 口径复现一致）；app-config pages 数组索引 26（0 基，共 27 页）、`page["pages/help/help.html"].window.navigationBarTitleText="使用帮助中心"`、无 navigationStyle；工具库 A2AAD201BB058EAFC4CCBA0673FF56F4.js（app-service.js 内 define）确有 formatTime/formatHour；渲染函数仅 m0 一个（`grep -o "var m[0-9]*=function"` 唯一命中）；captures/collections 无 guide 样本；audit/cdn-probe.md 存在；more.md:213/259 限额口径同文、more 页 appservice（chunk_8）A:204 含 total>=3、tmplId 在 more.md:216/281、分享封面 more.md:291/292 均对得上

- diff 摘要（5 处，D1/D2 为实质、需蒸馏工修正后复账；D3/D4/D5 为引文/措辞级）：

  1. **D1｜fadeIn 转写失真（§1 L56、§5 L173）**：本文写 `fadeIn="{{-1}}"` /「fadeIn=-1 字面量」。原文 W:159 为 `_mz(z,'tui-modal',['fadeIn',-1,...])`，按 page-frame.html `_mz` 源码负操作数分支 `tmp.attr[attrs[i]]=true`，**运行时该属性恒为布尔 true**（渲染树实测 `fadeIn=true`）；68 项 ops 中也无 -1 字面量。tui-modal 属性声明 `fadeIn:{type:Boolean,value:!1}`（chunk_15.appservice.js），故行为等价、但作为还原模板失真。建议改写为「fadeIn（裸属性，编译为 -1 操作数，运行时恒 true）」。
  2. **D2｜modal2 漏写 fadeIn（§1 L67）**：原文 W:175 `['fadeIn',-1,'bindcancel',57,'custom',1,'show',2]` 与 modal1 同样含 fadeIn（恒 true），本文该模板行只写了 bindcancel/custom/show 三属性，应补。
  3. **D3｜op49 引文不实（§1 L80「（W:68 ops 原文）」及附录勘误 5）**：W:68 原文为 `Z([a,[3,'tui-modal-input '],[[2,'?:'],[[2,'!'],[[7],[3,'modalFeedback']]],[1,'tui-hidden-input'],[1,'']]])`，即 `'tui-modal-input ' + (!modalFeedback ? 'tui-hidden-input' : '')`；本文转写作 `(modalFeedback ? '' : 'tui-hidden-input')` —— 真值表完全相同（渲染树 modalFeedback=undefined → `tui-modal-input tui-hidden-input` 实证），语义等价，但「ops 原文」四字名不副实，勘误 5 的引文应更正为 !modalFeedback 形式。
  4. **D4｜hideLoading 次序表述（§1 L79「三个分支均先 wx.hideLoading()」）**：A:114 实际顺序为分支1 `wx.openOfficialAccountArticle(...)` **后** hideLoading、分支2 `wx.openChannelsActivity(...)` **后** hideLoading、仅分支3 先 hideLoading 再 setData。「均先」与原文不符，建议改为「三分支均调用 wx.hideLoading()（分支1/2 在跳转调用之后，分支3 在 setData 之前）」。
  5. **D5｜行号笔误（frontmatter 证据头注 L12「W:224-227」）**：W 全文 226 行，应为 W:224-226。

**复账结论：FAIL** —— 类名/文案/事件云函数三项全过，节点树结构一致但 D1/D2 两处属性保真问题待修正；修正 D1/D2（顺带 D3/D4/D5）后无需重跑提取，可直接改判 PASS。

- 蒸馏工修正记录（2026-10-01）：已按 D1（modal1/modal2 fadeIn 改写为裸属性表述，§1+§5）、D2（modal2 模板行补 fadeIn）、D3（op49 三元改为与 W:68 原文一致的 !modalFeedback 方向，含附录勘误 5 引文更正）、D4（showDetail 三分支 hideLoading 次序措辞更正）、D5（头注 W:224-227→W:224-226）修正完毕，待对账员复核。

### 对账员复核（第二轮收尾，2026-10-01）

D1-D5 修正逐条回原文抽验，全部通过，verdict=PASS：

- **D1 通过**：W:159 原文 `_mz(z,'tui-modal',['fadeIn',-1,'bindcancel',42,'custom',1,'show',2],…)`,负操作数按 `_mz` 规则运行时恒 true;spec §1 L56 / §5 L173 已改为「fadeIn 裸属性（编译为 -1 操作数，运行时恒 true）」,与上轮渲染树实测（fadeIn=true）一致。
- **D2 通过**：W:175 原文属性序 `['fadeIn',-1,'bindcancel',57,'custom',1,'show',2]`,spec §1 L67 modal2 模板行已补 fadeIn 并附完整属性序,与原文一致。
- **D3 通过**：W:68 原文 `Z([a,[3,'tui-modal-input '],[[2,'?:'],[[2,'!'],[[7],[3,'modalFeedback']]],[1,'tui-hidden-input'],[1,'']]])`,spec §1 L80 及附录勘误 5 已改为 `'tui-modal-input ' + (!modalFeedback ? 'tui-hidden-input' : '')` 方向,与 ops 原文一致。
- **D4 通过**：A:114 原文分支1 `wx.openOfficialAccountArticle(...)` 后 hideLoading、分支2 `wx.openChannelsActivity(...)` 后 hideLoading、分支3 `(wx.hideLoading(),this.setData({modalTips:!0,…}))`;spec §1 L79 措辞「分支1/2 在跳转调用之后，分支3 在 setData 之前」与原文吻合。
- **D5 通过**：spec 头注（L12）已改为 W:224-226,与 `wc -l`=226 行一致。
- 篡改检查：本对账员第 6 节原复账内容（方法段、四项勾选、其他复核通过项、diff 摘要、FAIL 结论、蒸馏工修正记录）逐字未动。
- 最终判定：**PASS**,状态置「对账通过（待验收）」,第 1 项节点树勾选补划。

## 附：本次蒸馏对依据包的勘误与补充（均已回原文实证）

1. **wxss 行数**：依据包写「25 行」→ 实测 **24 行**（`wc -l` 与 `cat -n` 一致）；依据包所列规则行号（:1、:2-4、:17-20、:21-24）本身全部吻合。
2. **tui-button size 类型**：依据包写「size=op55 数值28」→ 实为**字符串 '28'**（W:74 `Z([3,'28'])`）；数值字面量是 tui-icon 的 size=24（W:32 `Z([1,24])`）。
3. **`t.command;` 无赋值**：A:114 行首 `var t=wx.cloud.database({});t.command;`——command 未存入变量、全行无其他 command 用法，为编译残留表达式；依据包「t.command 取用」易误导为存在 command 调用。
4. **feedback.add 字段数**：依据包写「add 写入 8 字段」→ add 实写 **7 字段**（date/baby_id/time/tag/content/babyInfo/vip，A:114 原文），第 8 个 notice 由订阅成功后 `where({tag}).update({data:{notice:!0}})` 追加；「8 字段」仅在 add+update 合并口径下成立。
5. **input 类绑定转写差异（语义等价）**：W:68 ops 原文为 `'tui-modal-input ' + (!modalFeedback ? 'tui-hidden-input' : '')`，依据包转写为 `modalFeedback?'tui-modal-input tui-hidden-input':'tui-modal-input '`——条件方向相反但运行结果相同，本文按 ops 原文（!modalFeedback 形式）转写。
6. **appservice 残本 ops 项数**：依据包 notes 写「ops 0-51」→ 实测 A 侧 `gz$gwx_XC_27_1` 的 Z() 仅 **33 项**（`grep -c "^Z("` 计数）；残本缺反馈按钮与两个 modal 的结论与依据包一致。残本字节数（9953/7209）依据包自述，本次未复核。
7. **骨架层级补充**：底部反馈按钮 fixed view 是 **container 的兄弟节点**（W:146 `_(r,eP7B)` 与 W:158 `_(r,eH8B)` 均挂页面根），依据包骨架清单未明示层级。
8. **列表项挂载收尾行**：list2 循环 `_2z` 在 W:139、tui-nomore 在 W:141、根挂载完成在 W:146——依据包给的 :141/:144 等行号一致，补充 W:146 为 root 挂载点。
