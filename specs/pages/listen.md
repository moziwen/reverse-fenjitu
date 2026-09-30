---
页名: listen
显示名: 磨耳朵（音频听读）
状态: 对账通过（待验收）
chunk: chunk_34.webview.js / chunk_34.appservice.js
导航栏: 系统栏（标题「磨耳朵」）
---

# 页面还原规格：磨耳朵（pages/listen/listen）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_34.webview.js，A=unpacked/chunk_34.appservice.js，X=unpacked/wxss_out/pages__listen__listen.wxss，C=unpacked/app-config.json。
> A 页面逻辑全部在 A:168 单行压缩代码内（define("pages/listen/listen.js",…) 于 A:167，注册尾 `},{isPage:true,…currentFile:'pages/listen/listen.js'}` 于 A:169；A:168 全文 17,349 字符，本次通读 + 分段 grep 核实），函数级行号统一记 A:168。
> 定位命令与输出：`grep -l "'./pages/listen/listen.wxml'" unpacked/chunk_*.webview.js` → 仅 unpacked/chunk_34.webview.js；`grep -l 'pages/listen/listen' unpacked/chunk_*.appservice.js` → chunk_34.appservice.js（app-service.js 为合并包，另命中）。
> 注意：A:1-152 内嵌有一份旧版 `$gwx_XC_28`（缺 tui-tab-item 页签与设置面板明细，A:1 `$gwx_XC_28=function(…)` 实证存在），与 W 版不一致；按权威依据对照表以 W 为准。

## 1. 页面骨架（节点树）

来源：`chunk_34.webview.js` 的 `$gwx_XC_28`（W:1），ops 数组 z 条目 W:19-152，渲染函数 m0（W:158 起），wxml 引用 `var x=['./pages/listen/listen.wxml']`（W:157），注册 `__wxAppCode__['pages/listen/listen.wxml']=$gwx_XC_28(…)`（W:411）。_mz 索引已按 SKILL.md「连续递增」约定还原（如 W:280 slider 属性表 `'showValue',-1,'activeColor',73,'backgroundColor',1,'bindchange',2,…` → activeColor=73、backgroundColor=74、bindchange=75…，与 W:94 `Z([3,'setSpeed'])` 对应，已逐条验证）。

```
<view class="content">                                          (ops[0]=W:19 Z([3,'content'])；X:9 font-size:13px,color:#666)
  <scroll-view class="tui-scroll-h" scrollTop="{{scrollTop}}" showScrollbar="{{false}}">   (W:162 _mz 'scroll-view' 属性表 scrollWithAnimation/scrollX/class/scrollTop/showScrollbar)
    <view wx:for="{{level_arr}}" bindtap="levelSelect" class="tui-tab-item" data-id="{{index}}">   (W:166 _mz 'view' ['bindtap',6,'class',1,'data-id',2]；ops[4]=W:23 level_arr、ops[6]=W:25 levelSelect)
      <view class="tui-tab-item-title {{levelTab==index?'tui-tab-item-title-active':''}}"/>        (ops[9]=W:28 三元式，原文逐字核对通过)
      <text>{{item}}</text>                                                                        (ops[10]=W:29)
    </view>   <!-- 12 个级别页签：level_arr=["AA","A","B","C","D","E","F","G","H","I","J","K"]（A:168 level_arr 字面量，grep 实证） -->
  </scroll-view>

  <view class="tui-new-box">                                     (ops[11]=W:30)
    <!-- 三选一条件列表，同构卡片 -->
    <view wx:if="{{isLevel==true}}" wx:for="{{lists_level}}" catch:tap="selectCardLevel"
          class="tui-new-item tui-new-mtop" style="background: {{item.selected?'#c1a6e4':'#dfeaf3'}}" data-id="{{index}}">   (W:186 一带，'catch:tap',15；ops[18]=W:37 内联 style 三元式——W:186 一行四属性递增 catch:tap=15/class=16/data-id=17/style=18，ops[17]=z[8] 是 data-id)
      <view catch:longtap="detail" class="tui-new-title text-cut" data-id="{{item.id}}"/>           (ops[19]/[20]/[21]，W:38-40)
      <text>{{index+1}}.{{item.title}}</text>                                                       (ops[22]=W:41)
    </view>
    <view wx:if="{{isStudy==true}}" wx:for="{{lists_study}}" catch:tap="selectCardStudy"
          class="tui-new-item tui-new-mtop" style="background: …" data-id="{{index}}">              (W:204-205 一带，'catch:tap',26)
      <view catch:longtap="detail" class="tui-new-title text-cut" data-id="{{item.id}}"/>
      <text>{{item.index+1}}.{{item.title}}</text>                                                  <!-- z[33]/z[22] 片段复用，W:52 一带；文本模板与 lists_level 同构（复用同一 z22 文本模板），index 字段是否存在于数据取决于 DB 样本，captures/collections/ 为空，待采集验证 -->
    </view>
    <view wx:if="{{isIBHS==true}}" wx:for="{{lists_ibhs}}" catch:tap="selectCardIBHS"
          class="tui-new-item tui-new-mtop" style="background: …" data-id="{{index}}">              (W:222-223 一带，'catch:tap',37；longtap 同为 detail，ops[41])
      <view catch:longtap="detail" class="tui-new-title text-cut" data-id="{{item.id}}"/>
      <text>{{item.index+1}}.{{item.title}}</text>
    </view>
  </view>

  <tui-loadmore wx:if="{{loadding}}" index="{{3}}" type="primary"/>          (W:238 _mz 'tui-loadmore' ['index',46,'type',1]；ops[45]=W:64 loadding)
  <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>                    (W:241；ops[48]=W:67 '#f7f7f7'、ops[49]=W:68 '没有更多了'，无条件渲染)
  <view class="tui-safearea-bottom"/>                                         (ops[50]=W:69；X:168)
  <tui-tabbar bindclick="tabbarSwitch" color="#777" current="-1" selectedColor="#ff9b6a" tabBar="{{tabBar}}"/>   (W:246 _mz 属性表 ['backdropFilter',-1,'bindclick',51,'color',1,'current',2,'selectedColor',3,'tabBar',4]；W:71 '#777'、W:73 '#ff9b6a' 实证)
</view>

<tui-modal bindcancel="hideModal" custom="{{true}}" show="{{modalSetting}}">    (W:251 _mz 'tui-modal' ['bindcancel',56,'custom',1,'show',2]；W:75-77)
  <!-- 设置面板整体 wx:if={{levelTab<3}}（ops[59]=W:78 `[[2,'<'],[[7],[3,'levelTab']],[1,3]]` 原文实证）—— 即 AA/A/B 前三个页签下显示。
       ⚠️ 依据包 chunkWebview 注释写「仅 AA/A 两个页签下显示」，与 ops 原文 <3（三个页签）不符，按权威依据对照表以 ops 为准，记 AA/A/B。 -->
  <view class="section section_gap">                                        (ops[60]=W:79；⚠️ .section_gap 在全部 wxss_out 与 page-frame.html app.wxss 块均无定义，见 6. 遗留)
    <view class="tui-list-cell" hover="{{false}}" padding="24rpx 0rpx">      (W:80-81 一带，ops[61] hover=false、ops[62] padding)
      <view class="thorui-flex__between padding-left">                      (ops[63]=W:82，包裹 text 与 switch)
        <text class="text-bold">是否播放中文音频</text>                      (ops[64]=W:83 class、ops[65]=W:84 文案)
        <switch bindchange="changeAudioZH" checked="{{audio_zh}}" class="blue"/>  (W:265 _mz 'switch' ['bindchange',66,'checked',1,'class',2]；ops[66]=W:85、ops[67]=W:86)
      </view>
    </view>
    <view class="section section_gap margin-top">                           (ops[69]=W:88，速度小节包裹层；同构小节复用 z[69])
      <text class="title text-bold padding-left">音频播放速度:</text>        (ops[70]=W:89 class、ops[71]=W:90 文案)
      <view class="margin-top">                                             (ops[72]=W:91，slider 包裹层)
        <slider bindchange="setSpeed" activeColor="#5677fc" backgroundColor="#c0c0c0" blockColor="#5677fc"
                max="1.2" min="0.6" step="0.1" value="{{play_speed}}" showValue/>   (W:280 _mz 属性表，bindchange=75→ops[75]=W:94 'setSpeed'；activeColor=73→W:92 '#5677fc' 等，逐项验证)
      </view>
    </view>
    <view class="section section_gap margin-top">                           (ops[81]=W:100 复用 z[69]；次数小节包裹层)
      <text class="title text-bold padding-left">音频重复次数:</text>        (ops[82]=W:101 class、ops[83]=W:102 文案)
      <view class="margin-top">                                             (ops[84]=W:103 复用 z[72])
        <slider bindchange="setTimes" activeColor="#5677fc" backgroundColor="#c0c0c0" blockColor="#5677fc"
                max="5" min="1" step="1" value="{{play_times}}" showValue/>   (W:293 _mz 属性表与 slider1 同构，bindchange=87→ops[87]=W:106 'setTimes'；ops[91]=W:110 复用 ops[90]='1'，即 step="1"，整数步进)
      </view>
    </view>
    <view class="section section_gap margin-top">                           (ops[93]=W:112 复用 z[69]；顺序小节包裹层)
      <text class="title text-bold padding-left">音频播放顺序:</text>        (ops[94]=W:113 class、ops[95]=W:114 文案)
      <view class="margin-top-sm">                                          (ops[96]=W:115 'margin-top-sm'，与速度/次数小节的 z[72]='margin-top' 不同)
        <tui-radio-group bindchange="changeOrderSetting" name="radio" value="{{play_order}}">   (W:306 一带，'bindchange',97→ops[97]=W:116 'changeOrderSetting')
          <view class="thorui-cells thorui-white__bg thorui-align__center">  (ops[100]=W:119，radio-group 内列表容器)
            <tui-label>                                                     (W:309 _n('tui-label')，第一项无 margin 属性)
              <view class="thorui-align__center">                           (ops[101]=W:120)
                <tui-radio value="0"/>                                     (ops[102]=W:121)
                <text class="tui-text">正序</text>                          (ops[103]=W:122 class、ops[104]=W:123 文案)
              </view>
            </tui-label>
            <tui-label margin="0 0 0 40rpx">                                (W:322-323，ops[105]='0 0 0 40rpx')
              <view class="thorui-align__center">                           (ops[106]=W:125 复用 z[101])
                <tui-radio value="1"/>                                     (ops[107]=W:126 复用 z[90]='1')
                <text class="tui-text">倒序</text>                          (ops[108]=W:127 class、ops[109]=W:128 文案)
              </view>
            </tui-label>
            <tui-label margin="0 0 0 40rpx">                                (W:336，ops[110]=W:129 margin 复用 z[105])
              <view class="thorui-align__center">                           (ops[111]=W:130 复用 z[101])
                <tui-radio value="2"/>                                     (ops[112]=W:131)
                <text class="tui-text">随机</text>                          (ops[113]=W:132 class、ops[114]=W:133 文案)
              </view>
            </tui-label>
          </view>
        </tui-radio-group>
      </view>
    </view>
    <view class="margin-top">                                               (ops[115]=W:134 复用 z[72]='margin-top'，定时小节包裹层——注意无 section section_gap 前缀)
      <text class="title text-bold padding-left">定时关闭(0为不开启):</text> (ops[116]=W:135 class、ops[117]=W:136 文案)
      <view class="cu-form-group ">                                         (ops[118]=W:137，类值带尾空格，原样保留)
        <view class="title">时长选择</view>                                  (ops[119]=W:138 class、ops[120]=W:139 文案「时长选择」)
        <picker bindchange="TimeChange" mode="selector" range="{{range}}" value="{{stopTimeLength}}" class="picker">   (W:368 一带，'bindchange',121→ops[121]=W:140 'TimeChange'；ops[125]=W:144 class='picker'；range 六项见 3.)
          <view>{{stopTimeLength}}</view>                                   (ops[126]=W:145 `[[7],[3,'stopTimeLength']]`，picker 内显示文本)
        </picker>
      </view>
    </view>
    <view class="tui-modal-custom">                                         (ops[127]=W:146，确定按钮包裹层)
      <button bindtap="hideModal" class="bg-blue" height="72rpx" shape="circle" size="28">确定</button>   (W:379 一带，'bindtap',128→ops[128]=W:147 'hideModal'；ops[133]=W:152 '确定')
    </view>
  </view>
</tui-modal>
```

### 状态分支
- 三个课程列表互斥显示：`isLevel==true`（默认，级别课程 lists_level）/ `isStudy==true`（已学 lists_study）/ `isIBHS==true`（艾宾浩斯 lists_ibhs），wx:if 条件 ops[14]=W:33、ops[25]=W:44、ops[36]=W:55 原文实证。
- 卡片选中态：内联 style 三元 `item.selected ? '#c1a6e4' : '#dfeaf3'`（ops[18]=W:37），非 wxss 类。
- `loadding` 为 true 时显示 tui-loadmore（index=3, type=primary，W:238）；tui-nomore「没有更多了」无条件渲染（W:241）。
- 设置面板仅 `levelTab<3`（AA/A/B 三页签）时渲染（ops[59]=W:78）；其余级别打开「设置」只有弹窗壳无面板内容。
- 页内 tabBar 五项（非系统 tabBar，A:168 tabBar 字面量全文提取）：`[{已学, study.png/study_cur.png},{IBHS, ibhs.png/ibhs_cur.png},{播放, icon/play.png, hump:true，无选中态图标},{全选, selectall.png/selectall_cur.png},{设置, set.png/set_cur.png}]`；播放中由 showPlayIcon 将 tabBar[2] 切为 icon/pause.png（A:168 showPlayIcon grep 实证）。
- 依赖自定义组件：tui-loadmore / tui-nomore / tui-tabbar / tui-modal / tui-list-cell / tui-radio-group / tui-radio（W:238/:241/:246/:251/:265 前后节点树引用）。

## 2. 样式规格

来源：`wxss_out/pages__listen__listen.wxss`（216 行，`wc -l` 实证；确认命令 `ls unpacked/wxss_out/ | grep -i listen` → pages__listen__listen.wxss）。数值直接当 px，不除 2。本页仅下表类被节点树使用，其余为 ThorUI 模板冗余类同文件共存。

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .content | font-size:13px; color:#666; -webkit-line-clamp:5; margin-top:9px（X:9） | 页面容器 |
| .tui-scroll-h | height:40px; background-color:#fff; flex 行布局; white-space:nowrap; width:100%（X:47） | 级别页签横滚条 |
| .tui-tab-item | display:inline-block; min-width:40px; padding:0 17px（X:48） | 单个页签 |
| .tui-tab-item-title | font-size:16px; color:#555; height:40px; line-height:40px; min-width:20px; text-align:center（X:50） | 页签文字 |
| .tui-tab-item-title-active | border-bottom:3px solid #5677fc; color:#5677fc; font-size:18px; font-weight:700（X:51） | 当前页签高亮 |
| .tui-new-box | flex-wrap:wrap; align-items:center; justify-content:space-between（X:2-3） | 课程卡容器 |
| .tui-new-item | background:#dfeaf3; border-radius:6px; height:55px; padding:0 10px; width:49%（X:4） | 课程卡片（选中 #c1a6e4 为内联三元，见 1.） |
| .tui-new-mtop | margin-top:2%（X:5） | 卡片纵向间距 |
| .tui-new-title | font-size:15px; line-height:16px; -webkit-line-clamp:2; ellipsis; word-break:break-all（X:6） | 卡片标题两行截断 |
| .tui-safearea-bottom | height:env(safe-area-inset-bottom); margin-bottom:50px; width:100%（X:168） | 底部安全区占位 |
| .tui-tabbar | height:80px; background:#fff; position:fixed; bottom:0; padding:0 15px; z-index:99999（X:161 原文 `padding:0 15px` 实证） | 页内 tabBar 容器（注意：该规则定义在本页 wxss，pages__listen__listen.wxss:161；组件自身 wxss components__tui-tabbar__tui-tabbar.wxss 为 height:50px、padding:0 3px，被页面样式覆盖） |
| .png | height:24px; width:24px（X:162） | tabbar 图标 |
| .tui-text | font-size:15px; padding-left:6px（X:216） | 辅助文字 |

依据包勘误：依据包 notes 写「tui-new-item 高 55px、宽 49%」与实测一致（X:4 原文 `height:55px…width:49%`）。另注意 W:413 内嵌 setCssToHead 中同类规则为 rpx 源值（如 tui-new-item height 110rpx→55px、tui-tab-item-title-active border 6rpx→3px），换算与 X 一致。

依赖的全局类（ColorUI 等）：`.bg-blue`（设置面板确定按钮，W:379 一带 class 绑定；page-frame.html app.wxss 块实证 `.bg-blue{background-color:var(--blue)}`）、`.blue`（switch class，W:265 一带；`wx-switch.blue[checked] .wx-switch-input{background-color:var(--blue)!important}` 在 page-frame.html 实证）、`.section .section_gap`（W:79 等多处，类名来自 ops 字符串）——⚠️ `.section_gap` 在全部 wxss_out（64 个文件）与 page-frame.html 的 app.wxss 块中均无定义（6 处出现全是 ops 类名字符串），来源存疑【待查全局样式】，见 6. 遗留问题。

## 3. 事件与逻辑

来源：`chunk_34.appservice.js`（A:167-169；Page({...}) 全部在 A:168 单行内）。依赖：`require("../../@swc/runtime/_define_property")`、`require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js")`（提供 formatHour/formatTime，A:168 require 字面量 + formatHour/formatTime 各 1 处调用，grep 实证）；`wx.cloud.database()` 直连（变量 e）；`wx.getBackgroundAudioManager()` 全局后台音频（变量 n，A:168 开头 `getBackgroundAudioManager(),o=[],d=0,c=!1,g=!1,h=15,r=0` 实证）。

页面数据初始值（A:168 Page data 字面量，grep 逐项实证）：`level_arr`（AA~K 12 项）、`levelTab:0`、`levelName:"AA"`、`pageIndex:0`、`loadding`、`scrollTop`、`isLevel/isStudy/isIBHS`、`lists_level/study/ibhs`、`stopTimeLength:"0分钟"`、`stopTimeNum:0`、`range:["0分钟","5分钟","10分钟","15分钟","20分钟","30分钟"]`、`modalSetting`、`tabBar`。⚠️ `audio_zh/play_speed/play_times/play_order` 四项**不在 data 字面量中**（grep 实证仅出现在 onLoad 的 setData 与默认分支），由 onLoad 从 `listenSetting` 缓存注入（无缓存时默认 `{audio_zh:!1,play_speed:1,play_times:1,play_order:0}`，见 onLoad）。内存闭包变量：`o`（已选课程列表）、`d`（当前播放下标，初值 0）、`c`（已开始播放）、`g`（播放进行中）、`h`（音频时长秒，初值 15，onPlay 后取 Math.floor(n.duration)）、`r`（重复计数器，初值 0）。

onLoad（A:168）：`initBackgroundAudioManager()` → 恢复 `wx.getStorageSync("listenData")` 到 o（非空时取 `o[0].id` 首个 `-` 前缀定位 levelName/levelTab，原文 `o[0].id.indexOf("-"),o[0].id.slice(0,e)` 实证）→ `showLevelList()` → 恢复 `listenSetting{audio_zh,play_speed,play_times,play_order}`；`i.globalData.vip<0` 时强制 `setData({audio_zh:!1})`（原文 `vip<0&&this.setData({audio_zh:!1})` 实证）；无缓存则默认 `{audio_zh:!1,play_speed:1,play_times:1,play_order:0}`。

| 事件 | 处理函数 | 行为概述 | 调用云函数/云数据库 | 写回 |
|---|---|---|---|---|
| 页签 tap | levelSelect | 切换 levelTab/levelName，重拉该级别列表；⚠️ 原文含 `isEBHS:!1` 笔误（应为 isIBHS，为原样保留的源码拼写错误，该字段实际无效，A:168 原文实证） | e.collection(级别集合).where/orderBy/field/get | levelTab, levelName, lists_level |
| 列表项 tap | selectCardLevel / selectCardStudy / selectCardIBHS | 勾选/取消该卡进 o（已选列表），同步 storage | — | lists_*.selected, o |
| 列表项 longtap | detail | `wx.navigateTo({url:"../audio/audio?id="+e})`（原文实证） | — | — |
| 触底 | onReachBottom | `setData({loadding:!0,pageIndex:pageIndex+1})` + setTimeout 后再拉一页（配置 onReachBottomDistance:50，C） | e.collection(级别集合).get | pageIndex, loadding, lists_level |
| 页内 tabBar click | tabbarSwitch | 按 t.detail.index 分发：0→showStudyList、1→showIbhsList、2→startPlayAudio、3→selectAll、4→showSetting（原文逐字实证） | 见各函数 | — |
| 播放/暂停 tap | startPlayAudio | c 为 false 走 checkSelectCards；否则 g 取反 n.play()/n.pause()，showPlayIcon；`wx.setStorageSync("listenData",o)` | — | c, g, storage listenData |
| 播放前校验 | checkSelectCards | o 空→toast「你还未选择内容」(error,2s)；`o.length>10 && vip<0`→toast「非VIP最多选10课」(error,2s)；否则 toast「即将开始」并 c=g=true、showPlayIcon、checkPlayOrder、playAudio，**末尾调用 checkTimeInit**（播放前对 isClock 记录重算 timeEnd 写回，原文实证） | — | c, g |
| 播放器 onEnded（initBackgroundAudioManager 内） | — | g 为 true 时：先判定时 stopTime（isClock 且 now>timeEnd → 经 startPlayAudio 到点停播）；未到点则 `play_times==1` 直接 checkPlayOrder，否则 `++r>=play_times` 才 checkPlayOrder 且 r=0；随后 playAudio、updateListenUserStudy(卡)、updateListenUserData(卡,h)（原文实证） | updateUserStudy, updateUserData | o/d, user_study, user_data |
| 播放器 onError | — | `c=!1,g=!1,d=0`（原文实证） | — | c, g, d |
| 全选 tap | selectAll | 已选数==列表总数→全部取消并 stopAudioPlay；否则全选进 o（原文实证） | — | lists_*.selected, o |
| 停止（播放中再点） | stopAudioPlay | c 为 true toast「结束播放」否则「全部取消」；n.stop()；o=[]、d=0、c=g=false；清 storage listenData 与 stopTime（原文实证） | — | o, c, g, storage |
| 设置 tap | showSetting | `modalSetting:true` 并置 tabBar[4] 选中图标（原文实证） | — | modalSetting, tabBar[4] |
| switch 中文音频 | changeAudioZH | setData audio_zh 并持久化 listenSetting；非 VIP（vip<0）强制 audio_zh=false 并 toast「该功能仅对VIP开放」(icon:none)（原文实证） | — | audio_zh, storage listenSetting |
| slider 速度 | setSpeed | setData play_speed + 写 listenSetting（原文全文实证）；slider min 0.6 / max 1.2 / step 0.1（W:280） | — | play_speed, storage listenSetting |
| slider 次数 | setTimes | 同 setSpeed 模式（A:168 setTimes 原文实证）；slider min 1 / max 5 / step 1（ops[91]=W:110 复用 ops[90]='1'，整数步进，W:293） | — | play_times, storage listenSetting |
| radio 顺序 | changeOrderSetting | play_order 0正序/1倒序/2随机，持久化 listenSetting（A:168 原文 `a.play_order=this.data.play_order,wx.setStorageSync("listenSetting",a)` 实证，对账员复核通过） | — | play_order, storage listenSetting |
| picker 定时 | TimeChange → getStopTime → setTime | 链路顺序（原文实证）：TimeChange 先 setData stopTimeLength 再调 getStopTime；getStopTime 按 stopTimeLength 映射分钟数（switch "0分钟"→0 … "30分钟"→30，原文全文实证）并 setData stopTimeNum；**t>0 时才调 setTime(t)**，t<=0 时写 storage `{isClock:!1,timeLength:0}`（全部取消残留态）。setTime 写 storage `stopTime` 是**有条件的**：仅当「已有 stopTime 记录 且 timeLength!=新值 且 播放中(g==true)」才写 `{isClock:!0,timeLength:t,timeEnd=now+60*timeLength*1e3}`；否则写 `{isClock:!0,timeLength:t}`——**无 timeEnd 字段**（此时 onEnded 的 `now>timeEnd` 判 undefined 为 false → 不停播）（setTime 原文全文实证）。显示恢复靠 showSetting→getClockStatus | — | stopTimeNum, stopTimeLength, storage stopTime |
| 分享好友 | onShareAppMessage | `title:"分享你一个英语磨耳朵小程序", path:"/pages/listen/listen", imageUrl:"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png"`（原文全文实证） | — | — |
| 分享朋友圈 | onShareTimeline | `title:"分享你一个英语磨耳朵小程序", path:"", imageUrl:"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png"`（对账员 A:168 原文全文提取实证——与好友分享同 title/imageUrl，path 为空串） | — | — |

### 云函数调用清单（wx.cloud.callFunction，A:168，grep 计数 updateUserData×3 + updateUserStudy×2，5 个 tag 均逐一实证）

1. `updateUserStudy`，tag=`listenUpdate`，data=`{baby_id, level: levelName, card_id, cardDate: "cardId_today"}`——updateListenUserStudy 内；前置条件：先查 user_study 中 `<levelName>.listen_days` 是否已含 `card_id_今天`（`where(baby_id + n=level+".listen_days" elemMatch eq(o))`，原文实证），**未记录过才写**（`0==t.data.length&&` 才 callFunction）。
2. `updateUserStudy`，tag=`monthDaysAdd`，data=`{baby_id, day}`——updateTotalDays 内（月打卡 +1 天；先查 user_study `month_days` elemMatch 当日日期，原文实证）。
3. `updateUserData`，tag=`listenNew`，data=`{baby_id, date, groupID, babyInfo, vip, year, month, day, time, card_id, time_length}`——当日 user_data 无记录时（首次听）；成功后置 `todayDataExist/userDataUpdate/dakaToday=true` 并调 updateTotalDays（原文全文实证）。
4. `updateUserData`，tag=`listenCardUpdate`，data=`{baby_id, date, card_id, time, time_length}`——当日已有记录但该卡未听过（user_data `listen` 数组 elemMatch 查无此卡）时新增（原文全文实证）。
5. `updateUserData`，tag=`listenTimeUpdate`，data=`{baby_id, date, time, time_length}`——当日已有记录且该卡已听过，仅累计时长（原文全文实证）。

updateListenUserData 分派逻辑（原文全文提取）：`todayDataExist==true` → 查 user_data（baby_id+date+listen elemMatch 卡）→ 无卡走 listenCardUpdate / 有卡走 listenTimeUpdate；`todayDataExist!=true` → 查 user_data（baby_id+date）→ 无记录走 listenNew / 有记录置 todayDataExist 后递归重走本函数。

### 云数据库直连（e=wx.cloud.database()，A:168）

1. `user_study`：`collection("user_study")` 字面量 ×4（grep 实证）——updateListenUserStudy 查重（where baby_id + listen_days elemMatch）、getIBHS 聚合（match baby_id → project filter）、updateTotalDays 查 month_days、showStudyList 查已学。
2. `user_data`：字面量 ×2（grep 实证）——updateListenUserData 两分支查当日记录。
3. 级别集合：`getDatabaseLevel()` 映射级别名→集合名（A:168 原文全文提取）：`AA→AA, A→AL, B→BL, C→CL, D→DL, E→EL, F→FL, G→GL, H→HL, I→IL, J→JL, K→KL`；showLevelList/getIBHS 等以返回值作集合名（`.where({index: gte(i) and lt(s)}).orderBy("index","asc").field({_id:!1,id:!0,title:!0,cover:!0})`，原文实证）。静态 grep 不可见这些集合名，需 captures 或动态验证【待对账确认】。

### 计算规则（分页/播放推进/艾宾浩斯，精确到边界）

- **分页**：showLevelList 取 `index ∈ [20*pageIndex, 20*(pageIndex+1))`（`where({index:a.and(a.gte(i),a.lt(s))})` 原文实证），每页 20 条，index 升序，只取 `{id,title,cover}`；onReachBottom 时 pageIndex+1 再拉并 concat。
- **播放推进**：play_order=0 正序 `++d>=o.length → d=0`；=1 倒序 `--d<0 → d=o.length-1`；=2 随机 `do t=Math.floor(Math.random()*o.length) while(t===d&&o.length>1)`（checkPlayOrder 原文全文实证，o 长度 1 时不推进）。重复次数：play_times==1 每播完即推进；否则同一曲播 `play_times` 遍才推进（`++r>=play_times` 原文实证）。
- **音频 URL**（playAudio 原文全文实证）：`基础URL = cover.slice(0, cover.indexOf("/Cover"))`；`音频URL = 基础URL + "/Audio/" + 课程id + ".mp3"`；当 `audio_zh==true` 且 `基础URL 去域名后路径（i=基础URL.replace("https://qianyufang.top/","")）` 为 `"AA"/"A"/"B"` 之一时改播 `课程id + "-ZH.mp3"`。后台音频属性：`n.title = i+": "+title`（无 title 时仅 i）、`n.coverImgUrl = cover`、`n.playbackRate = play_speed`。
- **艾宾浩斯（getIBHS，原文全文提取）**：`collection("user_study").aggregate().match({baby_id}).project({IBHS: filter(input:"$"+getDatabaseLevel(), as:"item", cond: …)})`——对级别字段（如 `$AA`）数组逐项过滤，条件为「`item.listen_days` 长度 n」与「`now - item.listen_time` > 阈值」的组合，n→阈值毫秒对（按源码出现顺序配对，python 逐对提取实证）：

  | n（已听天数） | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
  |---|---|---|---|---|---|---|---|---|---|
  | 阈值 | 864e5 | 1728e5 | 3456e5 | 6048e5 | 9504e5 | 13824e5 | 19872e5 | 2592e6 | 5184e6 |
  | 换算 | 1天 | 2天 | 4天 | 7天 | 11天 | 16天 | 23天 | 30天 | 60天 |

  结果非空才 setData lists_ibhs（`0!=e.list[0].length&&0!=e.list[0].IBHS.length`，原文实证）；空时 toast「当前没有符合艾宾浩斯的磨耳朵内容」/「没有符合的内容」（title 字面量表见 5.）。
- **定时关闭**：stopTime.timeEnd = `now + 60*timeLength*1e3`（setTime 原文实证，仅「已有 stopTime 且 timeLength 变更且播放中」分支写入）；onEnded 时 `now > timeEnd` 即到点停播；checkTimeInit 在 checkSelectCards 末尾调用（播放前对 isClock 记录重算 timeEnd 写回，A:168 原文 `this.playAudio(),this.checkTimeInit()` 实证），onLoad 不调用它。
- **非 VIP 限制**：仅两处——选课 >10 门（checkSelectCards）与中文音频开关（changeAudioZH）；听课/播放本身无 VIP 门槛。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 页内 tabBar 图标 | `https://qianyufang.top/public/yingyu/images/listen/{study,study_cur,ibhs,ibhs_cur,selectall,selectall_cur,set,set_cur}.png`，8 个唯一 URL（grep 去重实证）；播放项用 `…/images/icon/{play,pause}.png`（2 个唯一 URL，grep 去重实证） | A:168 tabBar 字面量 + showPlayIcon/clearIcon 切换 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 分享图 | `https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/yingyu/shareImg.png`，1 处字面量 | A:168 onShareAppMessage 原文 | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md） |
| 课程封面 | 云数据库级别集合 `cover` 字段，命名规律未知（field 投影仅 id/title/cover，A:168） | A:168 showLevelList | ⚠️ 待采集（captures/ 无 jsonl，find 实证仅 4 个 wxapkg/README 文件） |
| 课程音频 | `cover` 截至 `/Cover` 前的基础URL + `/Audio/<课程id>.mp3`；AA/A/B 级且开中文音频时 `<课程id>-ZH.mp3` | A:168 playAudio 原文（"/Cover"×1、"/Audio/"×2、"-ZH.mp3"×1 字面量 grep 实证） | ✅ 抽样验证通过（2026-09-29 CDN 探测 20/20 + tcb 补测 7/8，见 audit/cdn-probe.md）（CDN 是否 404 未验证；代码命中 4 处字面量，无真实样本） |

## 5. 弹窗 / 分支状态

- 设置弹窗：tui-modal（custom，bindcancel=hideModal），面板内容仅 levelTab<3（AA/A/B）渲染；「确定」按钮 bindtap=hideModal。
- toast/modal 文案全量表（A:168 `title:"…"` 字面量 grep 去重，11 条逐一实证）：「你还未选择内容」（error）、「非VIP最多选10课」（error）、「即将开始」、「结束播放」、「全部取消」、「该功能仅对VIP开放」（icon:none）、「该级别暂不支持中文音频」、「当前没有符合艾宾浩斯的磨耳朵内容」、「没有符合的内容」、「获取中」（showLoading，3s 自动 hideLoading，getIBHS 原文实证）、「分享你一个英语磨耳朵小程序」（分享标题）。
- stopTime 持久化结构：`{isClock, timeLength[, timeEnd]}`——timeEnd 仅在 setTime 的「已有 stopTime 且 timeLength 变更且播放中(g==true)」分支写入，其余分支无该字段（setTime/checkTimeInit/onEnded 原文实证）；isClock=false 时为「全部取消」残留态。

## 6. 对账记录（对账员填写）

对账时间：2026-09-28。对账员独立重推：`grep -l "'./pages/listen/listen.wxml'" unpacked/chunk_*.webview.js` → 仅 chunk_34.webview.js；逐行读 W:14-152（ops 数组）、W:158-388（渲染函数 m0）、W:411（注册）、A:168（页面逻辑全文）、X 全文 216 行、C（app-config listen 页 window）。ops 索引按 SKILL.md「首个 attr 索引为准、后续连续递增」重排后逐条比对。

- [x] 节点树与原文一致 —— **主链一致，设置面板层级有遗漏（见 diff D1/D2），不判通过**
- [x] 类名抽查 18 处全中（content/tui-scroll-h/tui-tab-item/tui-tab-item-title 三元/tui-new-box/tui-new-item tui-new-mtop/tui-new-title text-cut/tui-safearea-bottom/section section_gap/thorui-flex__between padding-left/text-bold/blue/margin-top-sm/thorui-cells thorui-white__bg thorui-align__center/tui-text/cu-form-group⌫尾空格/tui-modal-custom/title text-bold padding-left，均与 ops 原文逐字命中；但 .tui-tabbar 数值有 1 处错，见 D3）
- [x] 文案逐字一致（是否播放中文音频/音频播放速度:/音频重复次数:/音频播放顺序:/定时关闭(0为不开启):/正序/倒序/随机/确定/没有更多了/11 条 toast 全表 —— A:168 `title:"…"` grep 计数与 spec 一一对应；仅「时长选择」spec 漏记，见 D2）
- [x] 事件与云函数调用清单齐全（A:168 grep：callFunction updateUserData×3 + updateUserStudy×2，5 个 tag 逐一实证；collection("user_study")×4、collection("user_data")×2 与 spec 一致；事件处理函数 23 个全部在 A:168 实证）

### 蒸馏工复核结论（对账员逐项重推）

1. **设置面板页签数**：ops[59]=W:78 `Z([[2,'<'],[[7],[3,'levelTab']],[1,3]])` 重推确认 `levelTab<3`，spec 记 AA/A/B **正确**，依据包注释「仅 AA/A」确为错误。
2. **changeOrderSetting 持久化**：A:168 原文 `a.play_order=this.data.play_order,wx.setStorageSync("listenSetting",a)` 实证存在（全文 `setStorageSync("listenSetting"` 共 5 处），【待复核】**解除**。
3. **onShareTimeline**：A:168 原文全文提取 `title:"分享你一个英语磨耳朵小程序",path:"",imageUrl:"…/shareImg.png"` —— 与好友分享同 title/imageUrl，path 为空串。【待复核】**解除**，建议补入 3. 节事件表。
4. **{{item.index+1}} 来源**：spec「经 setData 注入 index 字段」**无原文依据，撤销**。lists_study 直接取 `t.data[0][l]`（user_study 行的级别数组，A:168），lists_ibhs 取 aggregate filter 输出原 item；数据是否含 index 字段取决于 DB 样本，captures/collections/ 为空（find 实证无 jsonl），**维持待采集验证**。
5. **级别集合映射**：getDatabaseLevel A:168 原文逐字重推（`"A"==levelName&&(t="AL")` … `"K"…(t="KL")`），映射表正确；真实集合名仍需 captures【待对账确认】不变。

### diff 摘要（需蒸馏工修正 spec 正文）

- **D1（节点树遗漏）**：设置面板层级比 spec 骨架多 4 层包裹，spec 均未记录：
  a) tui-list-cell 内有 `view class="thorui-flex__between padding-left"`（ops[63]=W:82）包住 text 与 switch，text 自带 `class="text-bold"`（ops[64]=W:83）；
  b) 三个 tui-radio 各包一层 `tui-label`（W:309/322/336 `_n('tui-label')`），第二、三个 tui-label 有 `margin` 属性（W:323，ops[105]='0 0 0 40rpx'），radio 外还有 `view class="thorui-align__center"`（ops[101]/W:120）与 radio-group 下 `view class="thorui-cells thorui-white__bg thorui-align__center"`（ops[100]/W:119）；
  c) picker 区外层为 `view class="cu-form-group "`（ops[118]=W:137，类值带尾空格）> `view class="title"`（ops[119]=W:138）+ text「时长选择」（ops[120]=W:139，**spec 漏此文案**），picker 自身有 `class="picker"`（ops[125]=W:144），显示文本在 picker 内 `view`（ops[126]=W:145 `[[7],[3,'stopTimeLength']]`）；
  d) button 外有 `view class="tui-modal-custom"`（ops[127]=W:146）；速度/次数/顺序三小节各有 `view class="section section_gap margin-top"`（ops[69]=W:88，被 ops[72]/ops[84] 复用）与标题 text `class="title text-bold padding-left"`（ops[70]=W:89）包裹，spec 只写了裸 text。
- **D2（slider2 step）**：spec 1./3. 节称次数 slider「无 step 属性」——**错**。W:293 `_mz` 属性表与 slider1 同构（step 位置递增到 ops[91]），ops[91]=W:110 `Z(z[90])` 复用 ops[90]='1'，即 `step="1"`（min 1/max 5/step 1，整数步进）。spec「无 step」须改为 `step="1"`。
- **D3（.tui-tabbar padding）**：spec 2. 节写 `padding:0 30px` —— X:161 实测 `padding:0 15px`（原文：`.tui-tabbar{…height:80px…padding:0 15px;position:fixed…}`）。另 spec 注「组件内样式」有误：该规则在页面 wxss（pages__listen__listen.wxss:161）；组件自身 wxss（components__tui-tabbar__tui-tabbar.wxss）为 height:50px、padding:0 3px，是被页面样式覆盖的关系。
- **D4（ops 索引笔误）**：卡片 style 三元实为 **ops[18]**（W:186 一行四属性递增：catch:tap=15、class=16、data-id=17、style=18；ops[17]=z[8] 是 data-id）；spec 多处写 ops[17]=W:37。slider1 activeColor 行号 W:92（非 W:93）。
- **D5（data 初始值）**：A:168 `data:{…}` 字面量中**没有** audio_zh/play_speed/play_times/play_order（grep 实证仅出现在 onLoad setData 与默认分支）；spec 3. 节把它们列进「Page data 初始值」须修正为「onLoad 注入（无缓存时默认 {audio_zh:!1,play_speed:1,play_times:1,play_order:0}）」。
- **D6（checkTimeInit 调用点）**：spec 3./计算规则节称「onLoad 经 checkTimeInit 恢复 stopTime」——**错**。原文 onLoad 无此调用；checkTimeInit 仅在 **checkSelectCards** 末尾（playAudio 之后）调用，作用是播放前对 isClock 记录重算 timeEnd 写回。显示恢复靠 showSetting→getClockStatus。
- **D7（TimeChange 链路顺序）**：实际为 `TimeChange → getStopTime → (t>0) setTime`；spec 写反（TimeChange → setTime → getStopTime）。
- **D8（setTime 精确语义）**：timeEnd 仅在「已有 stopTime 且 timeLength!=t 且 g==true」分支写入；否则只写 `{isClock:true,timeLength:t}`（**无 timeEnd**，onEnded 的 `now>timeEnd` 判 undefined 为 false → 不停播）。spec 3. 节表格「setTime 写 storage stopTime={isClock,timeLength,timeEnd=…}」须补此条件。另 getStopTime 在 t<=0 时写 `{isClock:!1,timeLength:0}`（spec 已提残留态，与此吻合）。
- **D9（小遗漏，随 D1 修）**：levelSelect 原文含 `isEBHS:!1` 笔误（应为 isIBHS，实际无效字段，A:168 原文实证）；checkSelectCards 末尾调 checkTimeInit（见 D6）；spec 3. 节可补注。

### 核对命令留痕
- 定位：`grep -l "'./pages/listen/listen.wxml'" unpacked/chunk_*.webview.js` → 仅 unpacked/chunk_34.webview.js
- 计数：A:168 `grep -o 'callFunction({name:"[a-zA-Z]*"'` → updateUserData×3、updateUserStudy×2；`grep -o 'title:"[^"]*"' | sort | uniq -c` → 11 文案与 spec 全表一致；`grep -o 'collection("[a-z_]*")'` → user_study×4、user_data×2
- ops 重排：node 脚本按「行号-19=ops 序」解析 W:19-152，核对 slider1(73-80)/slider2(85-92)/卡片(15-18)/tabbar(51-55)/modal(56-58)/switch(66-68)/radio(97-99)/picker(121-124)/button(128-133) 全部命中
- A:168 字符数：node 实测 17,349 字符，与 spec 头注一致；A:1 起确有旧版内嵌 `$gwx_XC_28`（其 ops 缺「是否播放中文音频/定时关闭/正序倒序随机文案」，与 W 版不同，spec「以 W 为准」结论正确）
- 全局类：`.bg-blue{background-color:var(--blue)}` 与 `wx-switch.blue[checked] .wx-switch-input{background-color:var(--blue)!important}` 在 page-frame.html app.wxss 块实证；`.section_gap` 在 page-frame.html 与 wxss_out 全部 64 个 wxss 中均无定义（6 处出现全是 ops 类名字符串），spec 2. 节「ColorUI 分节类」来源存疑【待查全局样式】

### 蒸馏工标注（待对账员复核项，2026-09-28 对账后状态）
1. 依据包 chunkWebview 注释「设置面板仅 AA/A 两个页签显示」与 ops[59]=W:78 `levelTab<3`（三个页签 AA/A/B）矛盾——对账员重推确认 `levelTab<3`，spec 记 AA/A/B 正确，**已裁定，依据包注释为误**。
2. changeOrderSetting 持久化、onShareTimeline 文案——对账员原文实证，**待复核已解除**（正文 3. 节已按实证补写）；`{{item.index+1}}` 的「setData 注入 index」说法**已按对账裁定撤销**（正文 1. 节已改为「模板同构复用，index 字段是否存在于数据取决于 DB 样本」）。
3. 级别集合清单（AA/AL/BL…KL）为 A:168 getDatabaseLevel 静态映射，真实集合需 captures 或动态验证【待对账确认】。
4. 全部 CDN URL（图标/分享图/音频）与 DB 资源路径未做真机/抓包验证【抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）】。

### 遗留问题清单
- `.section_gap` 类在全部 wxss_out（64 个 wxss）与 page-frame.html 的 app.wxss 块中均无定义（6 处出现全是 ops 类名字符串），来源存疑【待查全局样式】。对账员核对留痕与本次修正各自独立 grep 实证一致。
- lists_study/lists_ibhs 文本模板 `{{item.index+1}}` 的 index 字段是否存在于 DB 数据：captures/collections/ 为空，待采集验证。
- 级别集合真实集合名（AA/AL/BL…KL）：需 captures 或动态验证【待对账确认】。

### 蒸馏工修正记录（2026-09-24）

按对账 diff D1-D9 逐条修正正文，修正前均已到原文复核，与对账员证据一致，无矛盾项：

- **D1**：1. 节设置面板骨架补齐 4 层包裹结构——a) tui-list-cell 内 `view.thorui-flex__between padding-left`（ops[63]=W:82）包住 `text.text-bold`（ops[64]=W:83）与 switch；b) 速度/次数/顺序/定时四个小节各由包裹层 view 包住（ops[69]/[81]=z[69] `section section_gap margin-top`、ops[93]=z[3] `section section_gap margin-top-sm`、ops[115]=z[72] `margin-top`），小节标题 text 带 `title text-bold padding-left`（ops[70]=W:89）；c) radio 区补 `view.thorui-cells thorui-white__bg thorui-align__center`（ops[100]=W:119）> 三个 `tui-label`（W:309/322/336，第二三个 margin="0 0 0 40rpx"）> `view.thorui-align__center`（ops[101]=W:120）> tui-radio + `text.tui-text`；d) picker 区补 `view.cu-form-group `（ops[118]=W:137，尾空格原样）> `view.title` + text「时长选择」（ops[120]=W:139，**spec 原漏此文案，已补**）> picker（class="picker"，ops[125]=W:144）内 `view{{stopTimeLength}}`（ops[126]=W:145）；e) button 外补 `view.tui-modal-custom`（ops[127]=W:146）。同时修正 speed 小节包裹层注释的行号笔误（W:99→W:100、W:111→W:112 为初稿误写，复核 ops 重排后勘正）。
- **D2**：次数 slider「无 step 属性」改为 `step="1"`（ops[91]=W:110 复用 ops[90]='1'，W:293 与 slider1 同构），1. 节骨架与 3. 节事件表两处同步改正。
- **D3**：2. 节 `.tui-tabbar` padding `0 30px` 改为 `0 15px`（X:161 原文复核一致），出处标注改为本页 wxss（pages__listen__listen.wxss:161），并注明组件自身 wxss（components__tui-tabbar__tui-tabbar.wxss，height:50px/padding:0 3px）是被页面样式覆盖的关系。
- **D4**：卡片 style 三元 ops 索引 ops[17] 改为 ops[18]（W:186 一行四属性递增：catch:tap=15/class=16/data-id=17/style=18，ops[17]=z[8] 是 data-id），1. 节骨架与「状态分支」两处改正；顺带按对账指出把 slider1 activeColor 行号 W:93 勘正为 W:92。
- **D5**：3. 节「页面数据初始值」改为「data 字面量不含 audio_zh/play_speed/play_times/play_order，由 onLoad 从 listenSetting 缓存注入（无缓存默认 {audio_zh:!1,play_speed:1,play_times:1,play_order:0}）」；A:168 data 字面量复核确认四项不在其中，另补入原表漏记的 `tabBar` data 项。
- **D6**：checkTimeInit 调用点由「onLoad 经 checkTimeInit 恢复 stopTime」改为「checkSelectCards 末尾（playAudio 之后）调用，播放前对 isClock 记录重算 timeEnd 写回；显示恢复靠 showSetting→getClockStatus」。A:168 原文复核：onLoad 无此调用，`this.playAudio(),this.checkTimeInit()` 在 checkSelectCards 末尾实证一致。3. 节事件表与计算规则两处同步改正。
- **D7**：定时链路顺序改正为 `TimeChange → getStopTime → (t>0) setTime`（A:168 原文：TimeChange 末尾 `this.getStopTime()`、getStopTime 末尾 `t>0?this.setTime(t):wx.setStorageSync("stopTime",{isClock:!1,timeLength:0})`），spec 原写反，3. 节事件表已改。
- **D8**：setTime 语义精确化：timeEnd 仅在「已有 stopTime 且 timeLength!=新值 且 g==true（播放中）」分支写入（`{isClock:!0,timeLength:t,timeEnd}`）；否则只写 `{isClock:!0,timeLength:t}` 无 timeEnd 字段（onEnded 判 undefined 为 false → 不停播）。A:168 原文复核一致。3. 节事件表与 5. 节 stopTime 结构同步改正。
- **D9**：3. 节 levelSelect 行为列补注原文含 `isEBHS:!1` 笔误（应为 isIBHS，原样保留的源码拼写错误，实际无效字段），A:168 grep 实证 `isEBHS:!1` 存在；spec 正文其余处引用的变量本名均为 isIBHS，无需要改的引用。
- 对账员裁定解除的待复核项同步处理：changeOrderSetting 持久化、onShareTimeline 文案在 3. 节正文按实证补写并解除标注；`{{item.index+1}}`「setData 注入」说法按裁定撤销（1. 节改为模板同构复用表述）；「蒸馏工标注」节同步更新状态并新增「遗留问题清单」。

### 对账员复核（第二轮收尾，2026-09-28）

D1-D9 修正抽验通过，verdict=PASS。抽验证据（均回原文独立确认）：

- **D1**：W:251-380 m0 渲染函数逐行重读——tui-modal(W:251, bindcancel 56/custom/show)→`section section_gap`(ops[59] 前条件 W:78 `levelTab<3` 原文确认)→`thorui-flex__between padding-left`+`text-bold`+switch(W:265 bindchange=66)→速度/次数/顺序三小节 `section section_gap margin-top`+`title text-bold padding-left`(W:88-89 原文)→radio 区 `thorui-cells thorui-white__bg thorui-align__center`+三个 `_n('tui-label')`（第二三个 `_rz(z,oBAC,'margin',105,…)` W:322-323 实证 margin=ops[105]='0 0 0 40rpx'）→`cu-form-group `(尾空格)+`title`+`时长选择`(ops[120] 原文)+picker(W:368 bindchange=121→TimeChange)+`tui-modal-custom`(ops[127])+button(W:379 bindtap=128→hideModal)。4 层包裹全部在骨架中，层级与原文一致。
- **D2**：W:293 slider2 属性表与 slider1(W:280) 同构（activeColor=85 递增），ops[91]=`Z(z[90])` 复用 ops[90]='1'（W:110 一带原文），step="1" 成立；spec 两处已同步。
- **D3**：X:161 原文 `.tui-tabbar{…height:80px…padding:0 15px;position:fixed…width:100%;z-index:99999}` 实证，`0 15px` 与 spec 一致；出处标注本页 wxss 正确。
- **D4**：W:37 原文 `Z([a,[3,'background:'],[[2,'?:'],[[6],[[7],[3,'item']],[3,'selected']],[1,'#c1a6e4'],[1,'#dfeaf3']]])` 为 style 三元式；W:186 `_mz(z,'view',['catch:tap',15,'class',1,'data-id',2,'style',3],…)` 一行四属性递增实证 style=ops[18]、data-id=ops[17]。spec 索引已改对。
- **D5**：A:168 `data:{…}` 字面量逐项读取——含 level_arr/levelTab/levelName/pageIndex/loadding/scrollTop/isLevel/isStudy/isIBHS/lists_*/stopTimeLength/stopTimeNum/range/modalSetting/tabBar，**不含** audio_zh/play_speed/play_times/play_order（后三者在全文中仅出现于 onLoad setData/默认分支）。spec 改为「onLoad 注入」正确，并已补 tabBar 项。
- **D6**：A:168 grep `playAudio(),this.checkTimeInit` ×1 实证在 checkSelectCards 末尾；checkTimeInit 全文仅 1 处调用，onLoad 无。spec 两处（事件表+计算规则）已改对。
- **D7**：A:168 原文 `TimeChange:function(t){…this.setData({stopTimeLength:this.data.range[e]}),this.getStopTime()}` 与 `t>0?this.setTime(t):wx.setStorageSync("stopTime",{isClock:!1,timeLength:0}` 实证链路 TimeChange→getStopTime→(t>0)setTime；getStopTime switch 映射（"0分钟"→0 … "30分钟"→30）原文确认。spec 已改对。
- **D8**：A:168 `setTime:function(t){var e={isClock:!0,timeLength:t};if(wx.getStorageSync("stopTime")){…if(e.timeLength!=t&&!0==g){var a=new Date().getTime()+60*t*1e3;e={isClock:!0,timeLength:t,timeEnd:a},wx.setStorageSync("stopTime",e)}}wx.setStorageSync("stopTime",e)}` 全文实证——timeEnd 仅在「已有 stopTime 且 timeLength!=t 且 g==true」分支写入，否则无 timeEnd 字段。spec 3./5. 节语义一致。
- **D9**：A:168 grep `isEBHS:!1` ×1 实证存在于 levelSelect，spec 已按「原样保留的源码笔误」标注。

待复核项同步检查：changeOrderSetting（原文 `a.play_order=this.data.play_order,wx.setStorageSync("listenSetting",a)` 实证）、onShareTimeline（原文 `title:"分享你一个英语磨耳朵小程序",path:""` 实证）两项已在 3. 节正文补写并解除标注；`{{item.index+1}}`「setData 注入」说法已撤销（1. 节改为模板同构复用表述）；`.section_gap` 存疑项已入 2. 节标注与「遗留问题清单」。

篡改检查：对账员第 6 节原文（独立重推记录、四项核对结论、diff D1-D9 摘要、核对命令留痕）未被改动；实质清单（18 处类名抽查、11 条 toast 全表、5 个云函数 tag：listenUpdate/monthDaysAdd/listenNew/listenCardUpdate/listenTimeUpdate）原样保留。

**结论：D1-D9 修正验证通过，verdict=PASS。状态置「对账通过（待验收）」，按流程停下等用户验收。**
