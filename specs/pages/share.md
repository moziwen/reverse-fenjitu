---
页名: share
显示名: 打卡录音分享/自动播放页（pages/share/share，分享卡片落地页；无 tabBar 入口）
状态: 对账通过（2026-10-01，对账员独立重推，唯一 diff=前言 wxss_out 状态过时，见第 6 节）
chunk: chunk_42.webview.js / chunk_42.appservice.js
导航栏: 系统栏（标题空字符串，灰底 #f1f1f1 黑字走全局 window 配置；运行时由 wx.setNavigationBarTitle 动态改为卡片标题）
---

# 页面还原规格：打卡录音分享/自动播放页（pages/share/share/share）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_42.webview.js（303 行，本次会话通读节点树区 W:114-283 与内联 wxss W:303），A=unpacked/chunk_42.appservice.js（83 行；页面逻辑全部在 A:83 单行内，`wc -c`=8161 字节含换行，本次整行分段导出通读；`__wxRoute = "pages/share/share"` 在 A:82，`define("pages/share/share.js",…)` 起于 A:83），P=unpacked/page-frame.html，C=unpacked/app-config.json（node JSON.parse 解析）。
> ⚠️ 样式权威变更：`unpacked/wxss_out/` 目录在本仓**不存在**（`ls wxss_out/` → No such file or directory，本次实测），无法按 AGENTS 权威对照表取 wxss_out；本页样式改用等价权威来源——**W:303 内联 `__wxAppCode__['pages/share/share.wxss']=setCssToHead(…,{path:"./pages/share/share.wxss"})`**（页面 wxss 的打包原文），数值按 rpx 抄录。建议后续跑 tools/extract_wxss.py 重建 wxss_out 后回填复核。
> 定位命令与输出：`grep -l "'./pages/share/share.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_42.webview.js（本次重跑一致）；`wc -l` → webview 303 行 / appservice 83 行；P:64 `__LAZY_CODE_LOADING_CHUNK_MAP__` 含 `['chunk_42',['pages/share/share',]]`（本次 grep 实证）；P:57 `__wxAppCode__['pages/share/share.json']` 含 usingComponents。
> ops 索引换算（零幻觉）：`$gwx_XC_37` 定义于 W:1，ops 表 `gz$gwx_XC_37_1` 含 **91 个 Z() 调用 = z[0]..z[90]**（W:19-109，`grep -c '^\s*Z('` → 91，本次实测），页面渲染函数 m0=W:115-278，wxml 入口注册 W:114/W:301。本次用仓内 tools/extract_gwx_ops.js 对 91 个 ops **全量机械求值**（非手工推算），结果与本文第 1 节逐项一致；并用 tools/extract_gwx_tree.js 加载 P 的真实 `$gwrt/_rz/_mz` 运行时真跑 `$gwx_XC_37`，三分支环境渲染验证通过（`node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_42.webview.js XC_37 "./pages/share/share.wxml"` → EXIT=0，详见第 5 节）。
> ⚠️ 渲染权威澄清：A:1-81 存在同app名 `$gwx_XC_37` 的 appservice 侧副本（`grep -c '\$gwx_XC_37'` A:1-81 → 11 处，本次实测），是精简副本**非渲染权威**；权威=W 侧。

## 1. 页面骨架（节点树）

来源：`chunk_42.webview.js` 的 `$gwx_XC_37`（W:1），注册于 W:114/W:301。ops z[0..90] 定义于 W:19-109；渲染函数 m0（W:115-278）。三个顶层块：轮播区（tui-banner-swiper）、固定操作栏（top-view）、底部浮层（pop-view）。

```
<view class="tui-banner-swiper">                                (z0=W:19, 节点 W:117-118)

  <!-- 支1 wx:if displayMode==1（z1=W:20, W:120-121）：AA/A/B 级手机竖版背景图模式 -->
  <swiper bindchange="bannerChangeHandle" circular="{{true}}"
          current="{{bannerIndex}}" style="height:80vh">        (W:122, z2-z5=W:21-24)
    <!-- wx:for {{list}} item/index（z6-z8=W:25-27, _2z W:134）-->
    <swiper-item data-index="{{index}}">                        (W:126-127, z7-z8)
      <view bind:tap="playAudioAgain" class="bg-img1"
            style="background-image:url({{item.img}});height:100%">  (W:128, z9-z11=W:28-30)
    </swiper-item>
  </swiper>
  <view bind:tap="playAudioAgain" class="tui-product-title1">   (W:136, z12-z13)
    <view class="padding">                                      (W:138, z14)
      <rich-text nodes="{{cur_title}}"/>                        (W:140, z15=W:34)
    </view>
  </view>

  <!-- 支2 wx:elif displayMode==2（z16=W:35, W:147）+ 二级 wx:if isPad==false（z17=W:36, W:150）-->
  <!-- 支2a 手机（isPad==false）：widthFix / linear / phone_image_height -->
  <swiper bindchange="bannerChangeHandle" circular="{{true}}"
          current="{{bannerIndex}}" easing-function="linear"
          style="height:{{phone_image_height}}rpx">             (W:151, z18-z22=W:37-41)
    <!-- wx:for {{list}}（z23, _2z W:163）-->
    <swiper-item data-index="{{index}}">                        (W:155-156, z24-z25)
      <image bind:tap="playAudioAgain" mode="widthFix" src="{{item.img}}"
             style="width:100%;height:100%;"/>                  (W:157, z26-z29=W:42-46)
    </swiper-item>
  </swiper>
  <view bind:tap="playAudioAgain" class="tui-product-title2">   (W:165, z30-z31)
    <rich-text nodes="{{cur_title}}"/>                          (W:167, z32=W:48)
  </view>

  <!-- 支2b 平板（wx:else）：heightFix / easeOutCubic / pad_image_height -->
  <swiper bindchange="bannerChangeHandle" circular="{{isComplete}}"  ⚠️ 见状态分支注
          current="{{bannerIndex}}" easing-function="easeOutCubic"
          style="height:{{pad_image_height}}rpx;margin-top:120rpx;">  (W:172, z33-z37=W:52-56)
    <!-- wx:for {{list}}（z38, _2z W:183）-->
    <swiper-item class="pad-image" data-index="{{index}}">      (W:176, z40-z41=W:59-60)
      <image bind:tap="playAudioAgain" mode="heightFix" src="{{item.img}}"
             style="height:{{pad_image_height}}rpx;"/>          (W:177, z42-z45=W:61-64)
    </swiper-item>
  </swiper>
  <view bind:tap="playAudioAgain" class="tui-product-title3">   (W:185, z46-z47)
    <rich-text nodes="{{cur_title}}"/>                          (W:187, z48=W:67)
  </view>
</view>

<view class="top-view">                                         (z49=W:68, 节点 W:196-197) 固定操作栏
  <view class="tui-banner-tag">                                 (z50=W:69, W:199)
    <tui-tag padding="12rpx 18rpx" shape="circleRight" type="primary">
                                                                (W:200, z51-z53=W:70-72) 页码徽标
      {{bannerIndex+1}}/{{list.length}}                         (内容 z54=W:74, W:201)
    </tui-tag>
  </view>
  <image bindtap="setAutoPage" class="icon-right2"
         src="{{isAutoPage?'https://qianyufang.top/public/yingyu/images/icon/switch-open.png':'https://qianyufang.top/public/yingyu/images/icon/switch-close.png'}}"/>
                                                                (W:205, z55-z57=W:75-77) 自动翻页开关
  <view wx:if="{{values[bannerIndex]}}">                        (条件 op58=z58=W:78, W:209) 有分数才显示
    <text class="text-macron fenshu-text">{{values[bannerIndex]}}</text>
                                                                (W:211-213, z59-z60=W:79-80) 分数字
  </view>
  <view class="share">                                          (z61=W:81, W:219)
    <button open-type="share" plain="{{true}}">                 (W:220, z62-z63=W:82-83) 微信原生转发按钮
      <image class="share-image" style="width:100%;"
             src="https://qianyufang.top/public/yingyu/images/icon/share.png"/>
                                                                (W:221, z64-z66=W:84-86)
    </button>
  </view>
  <image bindtap="clickNext" class="icon-right3"
         src="https://qianyufang.top/public/yingyu/images/icon/next.png"/>
                                                                (W:225, z67-z69=W:87-89) 下一张
</view>

<view class="pop-view">                                         (z70=W:90, 节点 W:230) 底部浮层
  <view class="popup-text">                                     (z71=W:91, W:232)
    <view wx:if="{{setting_speak}}">                            (条件 op72=z72=W:93, W:235) ⚠️ 恒假，见状态分支注
      <text class="text-macron value-text">{{value}}</text>     (W:236-238, z73-z74=W:94-95) ⚠️ value 无写入处
    </view>
    <view wx:else>                                              (W:242)
      <!-- wx:for {{stars[bannerIndex]}}（z75=W:94, _2z W:251）实心星 -->
      <image class="icon-star padding-xss"
             src="https://qianyufang.top/public/yingyu/images/icon/star.png"/>
                                                                (W:246, z77-z78=W:96-97)
      <!-- wx:for {{5-stars[bannerIndex]}}（z79=W:98, _2z W:260）灰星 -->
      <image class="icon-star padding-xss"
             src="https://qianyufang.top/public/yingyu/images/icon/star_gray.png"/>
                                                                (W:255, z81-z82=W:100-101)
    </view>
    <view wx:if="{{texts.length!=0 && texts[bannerIndex] && isHideText==false}}">
                                                                (条件 op83=z83=W:103, W:266) 评测文本
      <view class="result-text">                                (z84=W:104, W:268)
        <icon catch:tap="hideText" class="margin-top-sm" color="#5677fc"
              size="32" type="clear"/>                          (W:269, z85-z89=W:105-109) 关闭钮
        {{texts[bannerIndex]}}                                  (内容 z90=W:109, W:271)
      </view>
    </view>
  </view>
</view>
```

### 状态分支

- **双维度四态轮播**：外层 `displayMode==1`（z1）/ `==2`（z16，wx:elif 语义由 W:147-193 相邻条件帧+else 实证：op17 命中走支2a，W:171 `else` 走支2b）二选一；displayMode 由 getSystemInfo 按 level 段位决定（AA/A/B→1，其余→2，A:83）。displayMode==2 时再按 `isPad`（z17）分手机/平板两支。
- **⚠️ 平板支 circular 疑似源码笔误（待复核）**：z34 绑定 `{{isComplete}}`（W:55），但 `isComplete` 在页面 data（A:83）**无此字段且全行 0 次出现**（本次 grep 实测）→ 运行时恒 undefined（falsy，不可循环滑动）；另两支为字面量 true（z3/z19=W:22/W:38）。运行验证 B 环境实测渲染 `circular=undefined`（tools/extract_gwx_tree.js 输出）。还原写码建议按字面 `{{isComplete}}` 抄录并加注释，不要"顺手修正"。
- **分数字分支（op58）**：`values[bannerIndex]` 有值（有口语评测分数）才渲染 `.fenshu-text`（W:209-217）；stars/texts 为空时操作栏只剩页码徽标+两图标。
- **⚠️ setting_speak 分支为死代码**：op72 绑定 `{{setting_speak}}`（W:235），但 data 默认 `setting_speak:0`（A:83）且全行无其他写入处（本次 grep `setting_speak` 仅 1 命中=初始化）→ 恒走 else 星级分支；且其内 `{{value}}`（z74）在 data 中**无 value 字段、无任何 setData 写入处**（grep `setData({value` → 0 命中）。该分支疑似沿袭口语评测页遗留开关。
- **评测文本浮层（op83）**：`texts.length!=0 && texts[bannerIndex] && isHideText==false` 三条件与 A:83 compareSpeakText 入口条件一致（W:266 ↔ A:83）；点击 clear 图标 `hideText` → `isHideText:!0` 后本会话不再显示（A:83，无复位处）。
- **依赖自定义组件**：tui-tag（W:200，components/tui-tag/tui-tag）实际渲染；share.json 还声明了 tui-tabbar（P:57）但节点树**未使用**（本次 m0 全文核验 0 命中）【待复核：疑似配置遗留】。

## 2. 样式规格

来源：W:303 内联 setCssToHead（`{path:"./pages/share/share.wxss"}`，页面 wxss 打包原文；`wxss_out/` 不存在，见前言）。数值按 rpx 抄录（不除 2；工具还原输出 `[0,N]`→`N rpx` 已与 W:303 原文逐段核对）。首部 `@import "./static/animation.wxss";`（setCssToHead 首元 `[2,"./static/animation.wxss"]`）与 `body{height:100%}`。

| 类名 | 关键样式（rpx） | 用途 | W:303 证据 |
|---|---|---|---|
| .tui-banner-swiper | height:100% | 轮播容器 | `[1],"tui-banner-swiper{height:100%}"` |
| .bg-img1 | background-position:50%; background-size:cover（+与 .bg-img2 共用 background-attachment:fixed; background-repeat:no-repeat） | 支1 卡片背景图 | 原文两段规则 |
| .top-view | display:flex; flex-direction:row; align-items:center; justify-content:space-between; position:fixed; top:0rpx; height:160rpx; width:100%; z-index:99 | 固定操作栏 | `height:","[0,160],"` 等 |
| .tui-banner-tag | color:#fff; justify-content:center（+flex 居中） | 页码徽标容器 | 原文 |
| .tui-product-title1 | background:#f1f1f1; bottom:0rpx; flex-direction:column; font-size:68rpx; height:20vh; justify-content:center; position:fixed; width:100%; z-index:99（font-weight:500 与 .tui-pro-titbox1 共用规则） | 支1 底部标题条 | 原文 |
| .tui-product-title2 | font-size:56rpx; font-weight:500; padding:40rpx 20rpx; position:relative; z-index:99 | 支2a 标题 | 原文 |
| .tui-product-title3 | background:#f1f1f1; border-radius:50rpx; flex-direction:column; font-size:58rpx; padding:40rpx 20rpx; width:100%; z-index:99 | 支2b 标题 | 原文 |
| .pad-image | flex-direction:row; justify-content:center | 平板卡片图容器 | 原文 |
| .share | right:20rpx; top:70rpx | 分享按钮定位 | 原文 |
| .share wx-button | border:none; height:90rpx; padding:0; width:90rpx（**标签选择器**） | 去除原生 button 默认样式 | 原文 |
| .share-image | height:90rpx; width:100% | 分享图标 | 原文 |
| .icon-right2 | height:92rpx; width:92rpx | 自动翻页开关图标 | 原文 |
| .icon-right3 | height:86rpx; width:86rpx | 下一张图标 | 原文 |
| .pop-view | flex-direction:column; position:fixed; top:160rpx; z-index:999（width:100%/flex 居中与 .popup-text 共用规则） | 底部浮层容器 | 原文 |
| .popup-text | border-radius:6%; color:#fff; flex-direction:row; height:240rpx | 浮层内容盒 | 原文 |
| .value-text | font-size:300rpx | 分数字（死分支） | 原文 |
| .fenshu-text,.value-text | font-family:Times New Roman,Times,serif; font-style:italic; font-weight:700（**原文含中间 `,Times,`，依据包漏写**） | 分数字字形 | 原文 |
| .fenshu-text | font-size:150rpx | 分数字号 | 原文 |
| .icon-star | height:130rpx; width:18% | 星星图 | 原文 |
| .result-text | background-color:#ddcfcf; border-radius:1%; color:#000; display:flex; font-size:60rpx; height:auto; max-height:500rpx; opacity:.6; width:92% | 评测文本浮层 | 原文 |
| .highlighted | background-color:#ff0 | **未读对词**高亮（rich-text 内 span，见第 3 节勘误） | 原文 |

依赖的全局类（出自 page-frame.html 全局 ColorUI 块，非本页 W:303 内联副本，具体数值本 ask 未提取）：`.padding`、`.padding-xss`（星星图 class）、`.margin-top-sm`（clear 图标 class）。⚠️ 本页 wxss 同时打包了大量 ThorUI/其他页遗留类（tui-header/tui-searchbox/tui-menu-item/tui-goods-*/tui-modal-*/star-speak/recorder/autoPage/word/quiz/translate/fenshu/bottom-view 等，本次通读确认），节点树均未引用，写码时忽略。

> 旁证：W:303 setCssToHead 尾参携带构建警告串 `"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/share/share.wxss:1:69)"` —— 与 `.share wx-button` 标签选择器规则互证（原 wxss 含标签选择器，属源码事实而非还原误差）。

## 3. 事件与逻辑

来源：`chunk_42.appservice.js`（A:83 单行承载全部页面逻辑）。模块头部（A:83 行首）：`e=wx.cloud.database({})`（**无 wx.cloud.callFunction，grep 全行 0 命中，本次实测**）、`a=e.command.aggregate`、`i=8`（⚠️ 模块级变量，初始 8，含义见计算规则）。

页面 data 初始值（A:83 原文逐项核对）：`height:400, displayMode:1, level:"", card_id:"", user_babyid:"", index:0, title:"", cover:"", list:[], bannerIndex:0, cur_title:"", audioRecords:[], isPad:!1, setting_speak:0, stars:[0,0,0,0,0,0,0,0]（8 个 0）, values:[], texts:[], cur_star:0, transShow:!1, isAutoPage:!1, isHideText:!1`。⚠️ data **无** `user_info`/`value`/`paragraphs`/`isComplete` 字段（后两者运行时被写入/绑定，见下）。

生命周期：
- **onLoad 双入口**（A:83）：
  1. **扫码分享场景** `t.scene` 存在：`decodeURIComponent` 后 `slice(0,28)`=openid（28 字符）、`slice(28,29)`=level 单字符（`"-"→"AA"`）、`slice(29)`=卡片 index → setData level → getSystemInfo() → getShareQrcode(openid, index)。
  2. **分享卡片参数** `card_id + user_babyid`：setData 两参数；`card_id` 中第一个 `"-"` 前的子串即 level（`indexOf("-")`+`substring`）→ getCardList() → getSystemInfo() → getUserStudyInfo(user_babyid)。
  两入口入口处均先 `this.bindAudio()`。
- **onUnload**：`innerAudioContext.destroy()` 并置 null（A:83）。

| 事件 | 处理函数 | 行为概述 | 云数据库 | 写回 |
|---|---|---|---|---|
| swiper bindchange（三支 W:122/151/172） | bannerChangeHandle | stop → setData bannerIndex=parseInt(detail.current)（连带写死字段 `paragraphs:[]`，⚠️ data 无此字段）→ cur_title=list[bannerIndex].title → compareSpeakText → getImageHeight → **500ms** 后 playAudioAuto | — | bannerIndex, paragraphs, cur_title |
| 卡片项 tap（W:128/157/177 三支各一） | playAudioAgain | `audioRecords[bannerIndex]` → innerAudioContext.src → play | — | — |
| 自动翻页开关 tap（W:205） | setAutoPage | isAutoPage==false：toast「开始自动播放」→ isAutoPage:!0 → **1s** 后 bannerChangeAuto；否则 toast「停止自动播放」→ isAutoPage:!1 | — | isAutoPage |
| 下一张 tap（W:225） | clickNext | stop → bannerIndex+1（`>=list.length` 回 0，连带 paragraphs:[]）→ cur_title → compareSpeakText → getImageHeight → **500ms** 后 playAudioAuto | — | bannerIndex, paragraphs, cur_title |
| clear 图标 catch:tap（W:269） | hideText | `isHideText:!0`（无复位处） | — | isHideText |
| button open-type=share（W:220） | —（无 JS 绑定） | 微信原生转发 → onShareAppMessage | — | — |
| 页面转发/朋友圈 | onShareAppMessage / onShareTimeline | 见计算规则（分享文案模板） | — | — |
| innerAudioContext onError（A:83） | — | toast「播放音频出错」(icon:none) | — | — |
| innerAudioContext onEnded（A:83） | — | isAutoPage==true 时 **1.5s** 后 bannerChangeAuto（自动翻页+续播） | — | — |

### 云数据库直查清单（全部 `e.collection(...)`，A:83；wx.cloud.callFunction 0 处）

1. `user_parent`：getShareQrcode —— `where({_openid: scene前28位openid}).get()` → `data[0].baby_id` → setData user_babyid → getCardListByIndex(index) + getUserStudyInfo(baby_id)（扫码链路）。
2. **分级卡片集合（动态集合名 getDatabaseLevel）**：`"AA"` 默认；level 映射 `A→AL, B→BL, C→CL, D→DL, E→EL, F→FL, G→GL, H→HL, I→IL, J→JL, K→KL`（A:83 原文逐级 `==` 判断，共 11 个集合名）。getCardListByIndex 用 `where({index:parseInt(scene第30位起)})`，getCardList 用 `where({id:card_id})`；成功回调取 `id/index/title/cover/list`（list[n] 含 img/title），setData cur_title=list[0].title，**600ms** 后 hideLoading + `wx.setNavigationBarTitle({title})`，再 getImageHeight + getUserStars + getAudioRecords。
3. `user_data`：getUserStars —— `where({baby_id, "speak.id":card_id}).orderBy("timestamp","desc").field({speak:!0}).limit(1).get()` → 遍历 `data[0].speak` 找 `id==card_id` 项 → setData `stars/values`（`texts` 存在时再加 texts 并触发 compareSpeakText）。
4. `user_study`（doc 读）：getUserStudyInfo —— `doc(user_babyid).field({babyInfo:!0,total_days:!0}).get()` → setData `user_info=babyInfo, user_days=total_days`。
5. `user_study`（聚合）：getAudioRecords —— `aggregate().match({baby_id}).project({[level]: a.filter({input:"$"+level, as:"item", cond:a.eq(["$$item.id",card_id])})}).end()` → 命中取 `list[0][level][0].audio` 为 audioRecords 并 playAudioAuto；**为空则回退** `list[n].img.replace(".jpg",".mp3")` 逐项生成 audioRecords（规律，见第 4 节）。

### 计算规则（精确到边界）

- **isPad 判定**（getSystemInfo，A:83）：`t=wx.getWindowInfo()`，`Math.floor(10*windowHeight/windowWidth)>15 ? isPad=!1 : isPad=!0`（即高宽比 >1.5 判手机，否则判平板）。同时 `height=750/windowWidth*windowHeight`、`pad_image_height=2*windowWidth/3`、`phone_image_height=3*windowWidth/2`（rpx）。
- **displayMode 判定**（同函数）：`level∈{AA,A,B} → 1`，否则 `2`。
- **getImageHeight**：仅 `displayMode==2 && isPad==false` 时执行——`wx.getImageInfo(list[bannerIndex].img)` → `phone_image_height = imgHeight × (750/imgWidth)`（按真实图宽高适配）；bannerChangeHandle/clickNext/bannerChangeAuto 每次翻页后重算。
- **自动翻页取模基数 i（⚠️ 隐性缺陷，待复核）**：`bannerChangeAuto` 用 `bannerIndex=(bannerIndex+1)%i`，`i` 是模块级变量（A:83 行首 `i=8`），仅由 getCardListByIndex/getCardList 的 success 回调赋值为 `list.length`；**加载失败/未完成时保持初始值 8**（若 list 不足 8 项，bannerChangeAuto 内 `list[bannerIndex].title` 可能读 undefined）。
- **compareSpeakText（⚠️ 依据包方向写反，以本条为准）**：入口条件与 op83 相同；对 `list[bannerIndex].title` 逐词（`split(" ")`，去标点+小写）与 `extractWords(texts[bannerIndex])`（`toLowerCase().match(/[a-z]+/g)`，即口语识别出的词）比对：**命中（读对）→ 原样拼接；未命中 → 包 `<span class="highlighted">词</span>`**（A:83 原文 `r?s+=d+" ":s+='<span class="highlighted">'.concat(d,"</span> ")`）→ setData cur_title 供 rich-text 展示。**即黄底高亮=没读对的词**，与 `.highlighted{background-color:#ff0}`（W:303）配套。
- **分享文案模板**（onShareAppMessage/onShareTimeline，A:83 两处同构）：昵称 `user_info.nickName` 为空串或 `"微信用户"` 时取 `"我"`；`title = {nickName}的第{user_days}天英语分级打卡录音已完成，{level}级《{title}》`；`imageUrl = cover.replace(".jpg","0.jpg")`；好友 `path = "/pages/share/share?card_id="+card_id+"&user_babyid="+user_babyid`，朋友圈 `query = "card_id=…&user_babyid=…"`（同参）。
- **延时参数汇总**：600ms 导航栏标题（两卡片加载函数各 1 处）；500ms 翻页后续播（bannerChangeHandle/clickNext）；1500ms onEnded 自动翻页；1000ms setAutoPage 开启后首翻。
- **user_info 空窗（待复核，低概率）**：data 无 `user_info` 默认值，若 getUserStudyInfo 尚未返回即触发 onShareAppMessage，`this.data.user_info.nickName.length` 将读 undefined 抛 TypeError（A:83 原文无防御）。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 操作栏/星星图标 | `https://qianyufang.top/public/yingyu/images/icon/{share,next,switch-open,switch-close,star,star_gray}.png`，共 **6** 个文件名 / 7 处字面量（z57 三元两值 + z65/z69/z78/z82） | W ops 字面量（W:75-89 区间），extract_gwx_ops.js 全量求值输出 | 规律实录；可达性见仓内 CDN 探测报告（commit 2c3f913，24/24 可达），本次未重测 |
| 卡片图/背景图 | `item.img` 来自云数据库分级集合 `list[n].img`（无本地路径规律，唯一真实样本=captures） | A:83 getCardList*/getCardListByIndex；节点树 z11/z28/z44 | ⚠️ 数据侧资源，路径在云端 |
| 卡片音频 | 优先 `user_study.{level}[id==card_id].audio` 聚合记录；**回退规律**：`list[n].img.replace(".jpg",".mp3")` | A:83 getAudioRecords 两分支原文 | ⚠️ 回退路径仅规律无样本实测 |
| 分享封面 | `cover.replace(".jpg","0.jpg")`（cover 来自分级集合） | A:83 onShareAppMessage/onShareTimeline 原文 2 处 | ⚠️ 数据侧资源 |
| 动画样式 | 页面 wxss 首行 `@import "./static/animation.wxss"`（全局静态样式，非页面私有） | W:303 setCssToHead 首元 `[2,"./static/animation.wxss"]` | 静态资源，随包分发 |

## 5. 弹窗 / 分支状态

无 showModal/modal 类弹窗；页面"浮层"由节点树条件渲染承担。三分支运行验证（tools/extract_gwx_tree.js 真跑 `$gwx_XC_37`，EXIT=0，本次执行）：

- **环境 A：displayMode=1（AA/A/B 级手机）** → 命中支1：swiper 80vh + `.bg-img1` 背景图卡 + `.tui-product-title1` 底部标题条（渲染树逐节点吻合）。
- **环境 B：displayMode=2 + isPad=true（平板）** → 命中支2b：`circular=undefined`（isComplete 缺失实证）、easeOutCubic、`height:{pad_image_height}rpx;margin-top:120rpx`、`.pad-image` + heightFix。
- **环境 C：displayMode=2 + isPad=false（手机横图）** → 命中支2a：circular=true、linear、widthFix、`height:{phone_image_height}rpx`。
- **自动播放状态机**：页面加载即播（getAudioRecords 成功 → playAudioAuto）→ onEnded 且 isAutoPage → 1.5s 翻页续播；翻页（手滑/next/自动）一律 stop→500ms 重播当前 audioRecords[bannerIndex]。
- **评测结果浮层**：有 texts 且未 hideText 时显示 result-text（识别全文，未读对词黄底）；点 clear 永久隐藏（本会话）。
- **死分支两处**（见第 1 节注）：setting_speak 恒 0 → 分数字（value-text）分支不可达；平板支 circular 恒 undefined。

## 6. 对账记录（对账员填写，2026-10-01）

- [x] 节点树与原文一致
- [x] 类名抽查 20 处全中（要求≥10）
- [x] 文案逐字一致
- [x] 事件与云函数调用清单齐全（wx.cloud.callFunction 0 处，collection 计数全中）

**对账方法（独立重推，未读蒸馏工依据包）**：`node tools/extract_gwx_tree.js unpacked/page-frame.html unpacked/chunk_42.webview.js XC_37 "./pages/share/share.wxml"` → EXIT=0，三分支渲染树 377 行；`node tools/extract_gwx_ops.js unpacked/chunk_42.webview.js XC_37` → **91 条 ops（z[0..90]）全量求值**；`grep`/`node -e` 直查 A=chunk_42.appservice.js 原文（83 行）与 C=app-config.json（require 解析）。`wc -l` → W:303/A:83 与前言一致；`grep -c '\$gwx_XC_37'` → W 11 处 / A 11 处（A 侧精简副本结论成立）；C 实测 share window=`{backgroundColorTop:#fff, backgroundColorBottom:#fff, onReachBottomDistance:0, enablePullDownRefresh:false, navigationBarTitleText:""}`，无 navigationStyle:custom（系统栏+空标题成立），tabBar 5 页（index/school/word/daka/more）不含 share（无 tabBar 入口成立）。

**① 节点树**：渲染树三分支与第 1 节逐节点一致——支1 swiper(circular=true,80vh)+.bg-img1+.tui-product-title1(.padding>rich-text)；支2a linear/widthFix/`height:{{phone_image_height}}rpx`+.tui-product-title2；支2b **`circular=undefined`（z34=`<op7:'isComplete'>` 实证源码笔误）**/easeOutCubic/heightFix/`height:{{pad_image_height}}rpx;margin-top:120rpx`+.pad-image+.tui-product-title3；top-view=tui-tag(padding="12rpx 18rpx" shape="circleRight" type="primary", 内容 z54=`{{bannerIndex+1}}/{{list.length}}`)+icon-right2(setAutoPage, src 三元 z57)+fenshu-text 条件支(z58=values[bannerIndex])+share(button openType=share, plain=z63='true')+icon-right3(clickNext)；pop-view=popup-text+**setting_speak 死分支（渲染树 wxVkey=2 走 else，与第 5 节一致）**+star/star_gray 两 wx:for(z75/z79=`5-stars[bannerIndex]`)+result-text(hideText icon color=#5677fc size=32 type=clear)。三支 wx:for 均含 data-index={{index}}；三支卡片项 bind:tap=playAudioAgain 全中。
**② 类名抽查 20 处全中**（ops 编号 + W:303/wxss_out 双证）：tui-banner-swiper(z0)、bg-img1(z10)、tui-product-title1(z13)、padding(z14)、tui-product-title2(z31)、pad-image(z40)、tui-product-title3(z47)、top-view(z49)、tui-banner-tag(z50)、icon-right2(z56)、text-macron fenshu-text(z59)、share(z61)、share-image(z64)、icon-right3(z68)、pop-view(z70)、popup-text(z71)、text-macron value-text(z73)、icon-star padding-xss(z77/z81)、result-text(z84)、margin-top-sm(z86)；`.highlighted` 由 A:83 compareSpeakText 生成+样式规则实证。
**③ 文案**：toast 三条 `grep -o` 各 1 处逐字命中（"开始自动播放"/"停止自动播放"/title:"播放音频出错",icon:"none"）；分享模板「天英语分级打卡录音已完成，」2 处（onShareAppMessage/onShareTimeline 同构成立）+昵称 `var e="我";0!=this.data.user_info.nickName.length&&"微信用户"!=` 原文命中；图标 URL 字面量 **7 处**（z57 三元两值+z65/z69/z78/z82，qianyufang.top 路径逐字）；高亮三元原文 `r?s+=d+" ":s+='<span class="highlighted">'.concat(d,"</span> ")` 逐字命中（**勘误 1 方向修正成立：黄底=未读对**）。
**④ 事件与云数据库**：事件绑定与第 3 节表全中（bannerChangeHandle 三支 bindchange / playAudioAgain 三支 / setAutoPage / clickNext / hideText catch:tap / open-type=share 无 JS 绑定 / onShareAppMessage / onShareTimeline / onError / onEnded）；`grep -o callFunction` = **0**；`collection(...)` 计数 = user_parent 1 / user_data 1 / user_study 2（doc 读+聚合）✓；getDatabaseLevel `var t="AA"` 默认 + `"A"==..?"AL"` 逐级写法、11 个集合名 AL~KL 各 1 处 ✓；`where({index:parseInt(t` / `where({id:t.data.card_id}` / `.doc(t` + `field({babyInfo:!0,total_days:!0})` / `orderBy("timestamp","desc")` + `field({speak:!0})` / `aggregate().match({baby_id:..}).project(..a.filter({input:"$"+s,as:"item",cond:a.eq(["$$item.id",..]))` 全命中；data 初始值整串 `grep -o 'data:{[^}]*}'` 与第 3 节逐字段一致（含 stars 8 个 0、setting_speak:0、无 isComplete/user_info/value/paragraphs）；延时实测 **600×2**（setNavigationBarTitle 2 处）/**500×2**/**1500×1**（onEnded）/`1e3`×1（setAutoPage），与延时汇总一致；勘误复核：isComplete 全行 **0** 命中、`paragraphs:[]` **2** 处、setting_speak **1** 处、`setData({value` **0** 处、`aggregate,i=8` 原文命中（勘误 2/3/5 成立）；`pad_image_height:2*a/3`、`phone_image_height:3*a/2`、`Math.floor(10*e/a)>15?isPad:!1`、getImageHeight `2==displayMode&&!1==isPad` 才执行，与计算规则一致。
**⑤ 样式回填复核（勘误 6-② 完成）**：⚠️ **前言「wxss_out/ 目录不存在」已过时**——本次实测 `unpacked/wxss_out/pages__share__share.wxss` 存在（228 行/227 条规则，含 `body{height:100%}`），样式权威回归 AGENTS 对照表。程序化对比（归一化：去 CRLF、去 `-webkit-` 前缀重复对、`;}`→`}`、rpx÷2→px）：W:303 内联还原版与 wxss_out **227 条规则双向零差、序列级全等**。故第 2 节按 rpx 抄录的全部数值（top-view 160rpx=tui-product-title1 68rpx=…fenshu-text 150rpx 等）与 wxss_out 权威值严格 2:1 吻合，`font-family:Times New Roman,Times,serif`（含中间 `,Times,`）在 wxss_out:207 同样命中（勘误 4 成立）。第 2 节数值零 diff；建议后续维护时直接引用 wxss_out 并更新前言状态描述。
- **diff 摘要**：内容性 diff = **0**。唯一发现为元数据过时：前言与第 2 节「wxss_out/ 不存在」的现场描述已失效（wxss_out 已重建且与 W:303 完全等价），不影响任何结论与数值；spec 正文无需修改，仅本节留档。

## 附：本次蒸馏对依据包的勘误与补充（均已回原文实证）

1. **【方向性勘误】compareSpeakText 高亮对象写反**：依据包称「命中的词包 `<span class="highlighted">`」；A:83 原文为 `r?s+=d+" ":s+='<span class="highlighted">'.concat(d,"</span> ")`（r=true=命中→原样，未命中→包 highlighted），**黄底=未读对的词**。第 3 节计算规则已按原文修正，对账员请重点核对此条。
2. **【补充-隐性缺陷】自动翻页取模基数**：模块变量 `i` 初始 8（A:83 `aggregate,i=8`），仅卡片加载成功回调更新为 list.length；加载失败时 bannerChangeAuto 按 8 取模，可能越界读 `list[bannerIndex].title`。依据包未提及。
3. **【补充-死写】`paragraphs:[]`**：bannerChangeHandle/clickNext 各写 1 处（grep 2 命中），data 无此字段，纯死写（同 isComplete 性质，但无渲染影响）。
4. **【补充-字体值】`.fenshu-text,.value-text` 的 font-family 原文为 `Times New Roman,Times,serif`**（W:303），依据包写 `Times New Roman,serif` 漏了中间 `,Times,`。
5. **【核实确认】依据包以下疑点全部实证成立**：isComplete 全行 0 命中（A:83 grep）；tui-tabbar 声明未使用（P:57 声明 ✓，W:115-278 未渲染 ✓）；分数视图 wx:if 绑定 values[bannerIndex]（z58=W:78）；wx.cloud.callFunction 0 命中；A:1-81 存在 appservice 侧 `$gwx_XC_37` 精简副本。
6. **未做/待复核**：① tui-tag 组件内部模板未展开（components/tui-tag/tui-tag，渲染为页码徽标，实测节点 `<undefined>` 子内容属组件内部，不在本页 spec 范围）；② wxss_out/ 缺失，本页样式以 W:303 内联还原为准，extract_wxss.py 重建后应回填复核（尤其 rpx 换算抽查）；③ page-frame.html 全局类（.padding/.padding-xss/.margin-top-sm）具体数值未提取；④ CDN 可达性未重测（沿用 commit 2c3f913 用户侧探测报告 24/24）；⑤ 未做动态采集（原始材料齐全，未触发）。
