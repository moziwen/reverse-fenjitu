---
页名: search
显示名: 搜索
状态: 对账通过（待验收）
chunk: chunk_40.webview.js / chunk_40.appservice.js
导航栏: 系统栏（标题「搜索」，白底 #fff 黑字）
---

# 页面还原规格：搜索（pages/search/search）

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。
> 证据标注：W=unpacked/chunk_40.webview.js（170 行，本次会话全文通读），A=unpacked/chunk_40.appservice.js（68 行，页面逻辑全部在 A:68 单行内，本次整行通读；`__wxRoute = "pages/search/search"` 位于 A:67 行中，A:1-66 为渲染层 $gwx_XC_35 精简副本），X=unpacked/wxss_out/pages__search__search.wxss（10 条规则，本次全文通读），C=unpacked/app-config.json（python json 解析）。
> 定位命令（本次重跑一致）：`grep -l "'./pages/search/search.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 unpacked/chunk_40.webview.js；`grep -l "pages/search/search" unpacked/chunk_*.appservice.js` → 唯一命中 unpacked/chunk_40.appservice.js。
> ops 换算与骨架机械核验：ops 数组 z 共 48 项（op0-op47，W:19-66 逐个 Z() 调用）。`_mz` 属性数组按锚点规则解析——**首个非负索引为锚（绝对下标），后续数字为锚偏移；首属性值 -1 表示字面量、不绑 ops**（W:82 实例：`['autoFocus',-1,'bindinput',6,'class',1,…]` → autoFocus=-1 字面量、bindinput=op6、class=op7、confirmType=op8、focus=op9、placeholder=op10、placeholderClass=op11、value=op12）。全 chunk 9 处 _mz（W:80/82/84/87/96/101/114/117/138）逐处核验一致。另以桩运行时（临时 harness，未入仓）加载 W:1-167 工厂函数实际渲染出完整节点树，与第 1 节逐一吻合——含 W:114 节点 class 的裁决（见文末勘误 1）。

## 1. 页面骨架（节点树）

来源：`chunk_40.webview.js` 的 `$gwx_XC_35`（定义 W:1，ops W:19-66，节点树 m0 W:72-145，入口注册 W:168 `__wxAppCode__['pages/search/search.wxml']`，同源内嵌 wxss 副本 W:170）。注意 A:1-66 是同一 $gwx_XC_35 的逻辑侧精简副本（仅 container + tui-collapse 循环 + tui-nomore，缺搜索框区），**勿当骨架权威**。

```
<view class="container">                                            (op0=W:19, 挂载 W:74-75 → W:143)
  <view class="tui-searchbox">                                      (op1=W:20, W:76-77 → W:91)
    <view class="tui-search-input">                                 (op2=W:21, W:78-79 → W:86)
      <icon color="#333" size="13" type="search"/>                  (W:80, color=op3=W:22, size=op4=W:23 '13', type=op5=W:24) 装饰图标
      <input bindinput="inputKey" class="tui-input" confirmType="done" focus="true"
             placeholder="输入标题里的关键单词" placeholderClass="tui-input-plholder"
             value="{{key}}"/>                                      (W:82；autoFocus=-1 字面量不绑 ops；bindinput=op6=W:25, class=op7=W:26, confirmType=op8=W:27, focus=op9=W:28 字面量 true, placeholder=op10=W:29, placeholderClass=op11=W:30, value=op12=W:31 {{key}})
      <icon bindtap="cleanKey" color="#bcbcbc" hidden="{{!key}}" size="13" type="clear"/>
                                                                    (W:84, bindtap=op13=W:32, color=op14=W:33, hidden=op15=W:34 {{!key}}, size=op16=W:35 复用 op4, type=op17=W:36) 清除按钮
    </view>
    <view bindtap="searchResult" class="tui-confirm text-bold">搜索</view>
                                                                    (W:87-90, bindtap=op18=W:37, class=op19=W:38, 文案=op20=W:39)
  </view>
  <view wx:for="{{dataList}}" wx:for-item="item" wx:for-index="index" wx:key="index">
                                                                    (W:137 `_2z(z,21,tCWC,e,s,gg,aBWC,'item','index','index')`, 列表=op21=W:40 {{dataList}}；每项实际包一层无类名 view W:95，见注 ①)
    <tui-collapse bindclick="clickLevel" current="{{item.current}}" index="{{index}}"/>
                                                                    (W:96, bindclick=op23=W:42, current=op24=W:43 {{item.current}}, index=op25=W:44 {{index}})
      <view slot="title">                                           (W:97-98, slot 名=op26=W:45 'title')
        <view class="tui-rate-container">                           (op27=W:46, W:99-100)
          <view class="tui-title" style="color:{{item.list.length!=0?'#ff9b6a':'#888'}}">
                                                                    (W:101, class=op28=W:47, style=op29=W:48)
            {{item.name}}级, {{item.list.length}}个结果             (op30=W:49 拼接节点, W:102 挂入)
          </view>
        </view>
      </view>
      <view slot="content">                                         (W:107-108, slot 名=op31=W:50 'content')
        <view class="cu-list grid col-3 margin-top-sm">             (op32=W:51, W:109-110) 3 列封面网格
          <view wx:for="{{item.list}}" wx:for-item="citem" wx:for-index="index" wx:key="index"
                bindtap="goCardDetail" class="cu-card" data-id="{{citem.id}}"/>
                                                                    (W:129 `_2z(z,34,tQWC,bEWC,eDWC,gg,aPWC,'citem','index','index')`, 列表=op34=W:53 {{item.list}}；W:114, bindtap=op36=W:55, class=op37=W:56 'cu-card', data-id=op38=W:57 {{citem.id}})
            <view class="cu-item">                                  (op39=W:58, W:115-116)
              <image lazy-load src="{{citem.cover}}" style="width:100%;height:320rpx;"/>
                                                                    (W:117, lazyLoad=op40=W:59 'true', src=op41=W:60 {{citem.cover}}, style=op42=W:61)
              <view class="text-cut text-sm padding-xs">{{citem.index+1}}. {{citem.title}}</view>
                                                                    (W:119-121, class=op43=W:62, 文案=op44=W:63 拼接)
            </view>
          </view>
        </view>
      </view>
    </tui-collapse>
  </view>
  <tui-nomore backgroundColor="#f7f7f7" text="没有更多了"/>         (W:138, backgroundColor=op45=W:64, text=op46=W:65) 无条件常驻
  <view class="tui-safearea-bottom"/>                               (op47=W:66, W:140-141) 本页 wxss 无此规则，全局 app.wxss 有（实际吃到），见第 2 节
</view>
```

注：
- ① 外层循环每项渲染为「无类名 view（W:95 oHWC）＞ tui-collapse」两层（桩渲染实测）；wx:for 落在该 view 还是 block 上无法从编译产物区分，按渲染结果记录。内层循环无包裹层——wx:for 直接落在 cu-card view 上（每项仅一个 view 节点 W:114）。
- ② op33（`[3,'citem']` W:52）与 op35（复压 z[22] 'index' W:54）在 m0 中**零引用**（全部 _mz/_rz/_oz/_2z 引用索引实测清点），为 wx:for-item/index 名的编译遗留 ops；实际 item 名以 `_2z` 第 8 参字面量 'citem' 传入（W:129）。**'citem' 不是任何节点的类名**（勘误 1）。
- ③ 全树无 wx:if/wx:elif 条件帧，仅两处条件表达式（op15 hidden、op29 颜色三元）与两个 `_2z` 循环。
- ④ 组件依赖：tui-collapse（bindclick 事件 + current/index 属性 + title/content 双插槽）、tui-nomore（backgroundColor/text 属性）。组件实体在 unpacked/components/tui-collapse/（tui-collapse.html、tui-collapse.json）与 unpacked/components/tui-nomore/（本次 ls 确认存在）；`grep -c usingComponents unpacked/app-config.json` → 0（本次实测），注册关系未落在解包 app-config，为编译期注入（同 more.md 口径）。

### 状态分支

- **标题行颜色两态（op29）**：`item.list.length!=0` → `#ff9b6a`（该级有结果），否则 `#888`（空/未查）。首次进入页面 12 级 list 全空 → 12 行全灰。
- **「N个结果」为实时值**：取 `item.list.length`；data 里的 `num` 字段（AA:108…K:60）**不参与渲染**（ops 全量 dump 无 num 引用）。
- **清除按钮显隐（op15）**：`hidden="{{!key}}"`——key 非空才显示。
- **输入框聚焦（op9）**：`focus="true"` 字面量绑定，进入页面输入框即聚焦（弹键盘）。
- **展开态（op24）**：tui-collapse 的 current 由 `dataList[i].current` 控制（-1 收起 / 级序号展开）；clickLevel 仅切换本级 → **允许多级同时展开**（非互斥手风琴，见第 3 节）。

## 2. 样式规格

来源：`wxss_out/pages__search__search.wxss`（10 条规则，数值直接当 px，不除 2）。同源副本 W:170 内嵌 setCssToHead（path:"./pages/search/search.wxss"），本次逐条比对一致（30rpx→15px、35rpx→17.5px、66rpx→33px、28rpx→14px、32rpx→16px、20rpx→10px、16rpx→8px、10rpx→5px）。

| 类名 | 关键样式 | 用途 | 行号 |
|---|---|---|---|
| body | background:#fff; color:#333 | 页面底色 | X:1 |
| .container | box-sizing:border-box; padding:0 15px 15px | 页面容器 | X:2 |
| .tui-searchbox | padding:15px 0；与 .tui-search-input 共有 flex 声明（align-items:center; box-sizing:border-box; display:flex） | 搜索区外框 | X:3-4 |
| .tui-search-input | background:#f2f2f2; border-radius:17.5px; flex-wrap:nowrap; height:33px; padding:0 15px; width:100% | 输入框胶囊底座 | X:5 |
| .tui-input | color:#333; flex:1; font-size:14px; padding:0 8px | 输入框 | X:6 |
| .tui-input-plholder | color:#b2b2b2; font-size:14px | placeholder 文字 | X:7 |
| .tui-confirm | color:#ff9b6a; flex-shrink:0; font-size:16px; padding-left:15px | 「搜索」按钮 | X:8 |
| .tui-rate-container | background:#fff; font-size:15px; flex 两端对齐; margin:0 15px; padding:10px | 级别标题行 | X:9 |
| .tui-title | font-size:14px; font-weight:300; padding:5px 0; text-align:center; width:100% | 级别标题文字 | X:10 |

骨架类的其他样式来源（本次 grep/python 实测）：

- **全局 ColorUI**（page-frame.html setCssToHead 全局块）：`.cu-list` / `.cu-card` / `.cu-item` / `.text-cut` / `.text-sm` / `.padding-xs` / `.margin-top-sm`（`grep -c "cu-card\|cu-list\|cu-item" unpacked/page-frame.html` → 43 行命中）。3 列网格由 `cu-list grid col-3` 组合而成，具体数值本次未展开提取（需要时跑 SKILL.md 的 extract_common_wxss.py）。
- **`.tui-safearea-bottom` 本页 wxss 无此规则，但 app.wxss 全局块有**：X 无此规则；page-frame.html 中 `tui-safearea-bottom{`（无点 CSS 形态）15 处，经 setCssToHead 调用区间归属（python 实测）——**1 处属 ./app.wxss 全局块**（pos≈802982；所在调用起点 650874、`path:"./app.wxss"` 全文件唯一、调用区间内无其他 setCssToHead；归属方法以对照类 `tui-searchbox{` 双命中 search 自有块夹逼验证），规则拼接原文 `.tui-safearea-bottom{height:env(safe-area-inset-bottom);width:100%}`（与 thorui 全局变量同块）；其余 14 处分属 audio/card/cardQuiz/cardTest/daka/group/listen/more/planDetail/planList/report/school/share/word 页块（无组件块命中）。**修正结论（对账 diff#1）：app.wxss 为小程序全局样式，search 页该 view 实际吃到 `height:env(safe-area-inset-bottom);width:100%`，并非无样式空节点——还原时需实现底部安全区占位**；.container 的 padding-bottom:15px（X:2）仍并存。
- `.citem` 不是类名（勘误 1）；page-frame.html 中 69 处 "citem" 命中（python count 与 grep -o 双口径一致）均为其他页编译 wxml 的数据变量（{{citem.xxx}} 形态），非 CSS 选择器（`.citem` / `citem{` 形态均 0 处）。
- 组件样式：`wxss_out/components__tui-collapse__tui-collapse.wxss` 与 `components__tui-nomore__tui-nomore.wxss` 存在（本次 ls 确认）；内容属组件 spec，此处不展开。

## 3. 事件与逻辑

来源：`chunk_40.appservice.js`（A:68 单行）。模块级头部：`t=require("../../@swc/runtime/_define_property")`（swc 编译辅助，`t._({},path,value)` 用于 setData 路径更新）、`e=wx.cloud.database({})`、`a=["AA","A","B","C","D","E","F","G","H","I","J","K"]`（12 级名数组）、`n=!1`（查询节流标志）；另有死表达式 `e.command,getApp(),e.command.aggregate`（求值即弃，全行无后续使用）。

**本页无云函数**：`grep -c callFunction unpacked/chunk_40.appservice.js` → 0（本次实测）；全部数据访问为客户端直查云数据库。

data 初始值（A:68 原文核对）：`key:""`、`searchResult:[]`、`pageIndex:0`、`dataList` 12 项 `[{current:-1,name:"AA",num:108,list:[]}, …, {current:-1,name:"K",num:60,list:[]}]`，num 序列 **AA:108 / A:102 / B:102 / C:102 / D:96 / E:90 / F:84 / G:84 / H:60 / I:60 / J:60 / K:60**。
死数据字段（ops 全量 dump 无引用，本次实测）：`searchResult`（A:68 计 4 处：data 初始化 + inputKey/cleanKey 重置 + 同名方法名，二者不同层级无冲突）、`pageIndex`（2 处：初始化 + inputKey 重置）、`num`（12 处字面量，仅存于 data）。

| 事件 | 处理函数 | 行为概述 | 云函数/云数据库 | 写回 |
|---|---|---|---|---|
| input bindinput（W:82） | inputKey | `setData({key:e.detail.value, pageIndex:0, searchResult:[]})`；**不触发查询** | — | key, pageIndex※, searchResult※ |
| 清除 icon tap（W:84） | cleanKey | `setData({key:"",searchResult:[]})` + for 循环 12 次 `setData("dataList[i].list", [])` 清空全部结果 | — | key, dataList[0..11].list, searchResult※ |
| 「搜索」tap（W:87） | searchResult | ①key 为空 → toast「请输入单词」(icon:error)；②`key.length<3` → toast「请至少输入三个字符」(icon:none)；③模块级 `n` 节流（1.5s 内重复点击静默忽略）→ wx.showLoading「查询中」→ **同步 for 循环 12 级**各调一次 getLevelCards(t, a[t])（12 个并发 get）→ setTimeout 1.5s 后 hideLoading | 12× 云数据库 get | dataList[i].list ×12 |
| tui-collapse bindclick（W:96） | clickLevel | `idx=e.detail.index`；`setData("dataList["+idx+"].current", current==idx ? -1 : idx)`——本级开关切换，**不清其他级 → 允许多级同时展开**；遗留 `console.log("change",…)` | — | dataList[idx].current |
| 卡片 tap（W:114） | goCardDetail | `wx.navigateTo({url:"../card/card?id="+e.currentTarget.dataset.id})` | — | — |

### 云数据库查询规格（getLevelCards，A:68）

```js
e.collection(getDatabaseLevel(level))
 .where({title: new e.RegExp({regexp: this.data.key, options: "i"})})   // 标题正则模糊匹配，大小写不敏感
 .field({_id:false, id:true, index:true, title:true, cover:true})       // 投影 4 字段，排除 _id
 .limit(9)                                                              // 每级最多 9 条
 .orderBy("index","asc")                                                // 按 index 升序
 .get({success: res => res.data.length != 0
        ? setData("dataList[idx].list", res.data)
        : setData("dataList[idx].list", [])})                           // 空结果写 []
```

集合名映射（getDatabaseLevel，A:68，12 个集合；默认 AA）：

| 级名 | AA | A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 集合 | AA | AL | BL | CL | DL | EL | FL | GL | HL | IL | JL | KL |

### 计算规则（精确到边界）

- **搜索触发三闸**：空 key（`0==this.data.key.length`）→「请输入单词」；`key.length<3`（恰好 2 字符拒、3 字符放行）→「请至少输入三个字符」；节流 `n`（`!0!=n` 才进入，置 true 后 1500ms 复位）——节流窗口内点击**无任何反馈**。
- **loading 与查询解耦**：hideLoading 是固定 1.5s 定时器，不等待任何一次 get 返回；12 个 get 的 success 各自独立 setData，无汇总回调 → 弱网下 loading 消失时结果可能尚未到达，先返回的级别先渲染。
- **每次输入重置** pageIndex/searchResult，但两者无渲染消费（死字段）；输入不自动触发查询，必须点「搜索」。
- **12 级全量并发**：无级别过滤/短路，点一次「搜索」固定发 12 个集合查询。
- **显示序号**：卡片标题序号 = `citem.index+1`（数据库 index 字段从 0 计）。

wx API 清单（`grep -o "wx\.[a-zA-Z]*"` 本次实测）：wx.cloud 1 / wx.showLoading 1（title「查询中」）/ wx.hideLoading 1 / wx.showToast 2（error、none 各 1）/ wx.navigateTo 1；另有 console.log 1 处（clickLevel 遗留调试输出）。A:68 无 http 字面量（`grep -c http` → 0），全页无静态资源 URL。

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 搜索结果封面 | 来自云数据库 cards 集合（AA/AL/BL/CL/DL/EL/FL/GL/HL/IL/JL/KL）文档的 `cover` 字段，随查询动态返回；代码无任何 URL 字面量或目录规律可录 | A:68 field 投影含 cover；W:60 op41 {{citem.cover}} | ⚠️ 零样本——captures/collections 现仅 units(32 条)/words(3,089 条)/user_school(1,080 条)（本次 python 实测），**无 12 个 cards 集合的任何样本**；words.jsonl 3,089 条无 `cover` 键，"cover" 字符串命中分布于 27 个字段路径（含数组下标口径，共 86 处值命中），均为单词名（cover/covering 等）或由单词名/例句构造的资源 URL 值（如 /img=…/B/Word/covering.jpg、/title[]/audio_en=…/B/Word/cover.mp3、/prompt=…/AA/Prompt/…covers….mp3），words 集合无 cover 字段（python 逐行定位实测）。只记录字段名，不猜路径，待采集或真机验证 |

（本页无其他静态资源——对比 more.md 的 qianyufang.top 图标集，search 页 A:68 与 ops 全量 dump 均无 URL 字面量。）

## 5. 弹窗 / 分支状态

- 无弹窗组件，无 wx.showModal / wx.previewImage（A:68 wx API 实测仅 5 种）。
- **查询中**：wx.showLoading「查询中」（固定 1.5s，与结果到达无关）。
- **校验 toast**：「请输入单词」(icon:error) / 「请至少输入三个字符」(icon:none)。
- **展开态**：tui-collapse current=-1 收起 / =级序号展开；本级开关式切换，可多开；展开内容为 3 列封面网格（cu-list grid col-3），卡片文案「序号. 标题」（序号=citem.index+1）。
- **结果态颜色**：有结果 #ff9b6a / 空结果 #888（仅作用于 tui-title 文字）。
- **导航出口**：仅 goCardDetail → `../card/card?id=<卡片id>`。
- **导航栏**：系统栏白底 #fff 黑字标题「搜索」（C：page["pages/search/search.html"].window = {navigationBarTitleText:"搜索", navigationBarBackgroundColor:"#fff", navigationBarTextStyle:"black", backgroundColorTop:"#fff", backgroundColorBottom:"#fff"}，python 解析实测）。全局 global.window 为 #f1f1f1 灰底黑字、无 navigationStyle 键；navigationStyle:"custom" 全文件仅 index/daka 两页。search 不在 tabBar（5 项：首页/课内/单词/打卡/我的）。
- **页面注册**：C 的 pages 数组（27 项，无扩展名形态）含 `pages/search/search`；page 配置键为 `pages/search/search.html`。

## 6. 对账记录（对账员填写）

对账时间 2026-10-01。对账员独立重跑定位与计数命令、独立通读原文（W 全文 `wc -l`=170、A 全文 `wc -l`=68、X 全文 10 规则、app-config.json python json 解析、page-frame.html 归属扫描），未参考蒸馏过程。节点树为**自写解析脚本**从 W:72-145 重建：独立解析 ops 表 48 项（Z 逐行、含 `Z(z[4])`/`Z(z[22])` 复压）、9 处 `_mz` 属性按锚点规则（首个非负=绝对下标，后续=锚偏移，负值=字面量不绑 ops）、`_rz`×10/`_oz`×3/`_2z`×2（`grep -o` 计数同），产出 25 节点树后与第 1 节逐行比对——未复用蒸馏桩。

- [x] 节点树与原文一致
  定位复核：`grep -l "'./pages/search/search.wxml'" unpacked/chunk_*.webview.js` → 唯一命中 chunk_40.webview.js；`grep -l "pages/search/search" unpacked/chunk_*.appservice.js` → 唯一命中 chunk_40.appservice.js（spec 前言两条定位命令均复现）。ops op0-op47 与 §1 行号映射全中（op k=W:k+19）；`_mz(` 计数 9 处（W:80/82/84/87/96/101/114/117/138）。重建树与 §1 逐行吻合：container＞tui-searchbox＞tui-search-input＞(icon #333/13/search + input.tui-input + icon 清除)＋view.tui-confirm.text-bold「搜索」＋⟳op21 {{dataList}}（item/index/key=index，W:137）＞**无类名 view（W:95）**＞tui-collapse（bindclick=op23/current=op24/index=op25）＞slot title（tui-rate-container＞tui-title style 三元 `color:{{item.list.length!=0?'#ff9b6a':'#888'}};` + op30 文案）与 slot content（op32 网格＞⟳op34 {{item.list}}（citem/index/key=index，W:129）＞view class=**op37 'cu-card'** bindtap=op36 data-id=op38＞cu-item＞image lazyLoad='true' src/style op42＞text-cut text-sm padding-xs + op44 文案）＋tui-nomore（#f7f7f7/没有更多了）＋tui-safearea-bottom。机械断言：op33/op35 零引用=True（注②）、op16==op4('13')/op35==op22('index') 复压=True、模板根 tCWC→oHWC（有包裹层）/tQWC→oVWC（内层无包裹）=注①、W:114 class=cu-card=勘误 1 夹逼证据再现（bindtap=op36 与 data-id=op38 夹出 class=op37）、autoFocus=-1 字面量、focus=op9 [1,true] 字面量 true。
- [x] 类名抽查 19 处全中（要求 ≥10）
  W 侧逐 token grep 全中：container W:19/46/170、tui-searchbox W:20/170、tui-search-input W:21/170、tui-input W:26/30/170、tui-input-plholder W:30/170、tui-confirm W:38/170、text-bold W:38、tui-rate-container W:46/170、tui-title W:47/170、cu-list/grid/col-3/margin-top-sm W:51、cu-card W:56、cu-item W:58、text-cut/text-sm/padding-xs W:62、tui-safearea-bottom W:66。X 侧 9 个本页类全中 X:1-10（X 共 10 规则；`.tui-safearea-bottom` 在 X 0 命中=「本页 wxss 无」成立）。全局类在 page-frame.html 以 setCssToHead 无点形态定位：text-bold/text-cut/text-sm/padding-xs/margin-top-sm/cu-list/cu-card/cu-item 全部命中 **./app.wxss 全局块**（cu-item 另在 jigou/group/planDetail/planList 页块各 1 处页级副本）；`grep -c "cu-card\|cu-list\|cu-item" page-frame.html`=43 行复现。另以脚本从 W:170 setCssToHead 数组重建 CSS（跳过 `[1]` 标记 token、`[0,n]`→n/2 px）与 X **逐字节相等（True）**，§2 的 8 组 rpx→px 换算（30→15/35→17.5/66→33/28→14/32→16/20→10/16→8/10→5）全中。
- [x] 文案逐字一致
  W：输入标题里的关键单词×1（W:29）、搜索×1（W:39）、`级, `×1 与 `个结果`×1（W:49）、`. `×1（W:63）、没有更多了×1（W:65）；A：请输入单词×1（`icon:"error"`×1）、请至少输入三个字符×1（`icon:"none"`×1）、查询中×1、`console.log("change",…)`×1（A:68；A 全文件 console.log 共 2 处，A:59 属 $gwx 副本 catch，§3 页面逻辑口径成立）、`../card/card?id=`×1；C：navigationBarTitleText「搜索」原文在。全部逐字。
- [x] 事件与云函数调用清单齐全
  事件独立枚举：W 的 bind 属性共 5 处 = bindinput×1（W:82）+ bindtap×3（W:84/87/114）+ bindclick×1（W:96），与 §3 表 5 行一一对应，无幽灵事件。云函数 `grep -c callFunction`=0 ✓；云数据库链 `.collection/.where/.field/.limit/.orderBy/.get(` 各 1 处 ✓，`field({_id:!1,id:!0,index:!0,title:!0,cover:!0})`、`limit(9)`、`orderBy("index","asc")`、`new e.RegExp({regexp:…,options:"i"})`、getDatabaseLevel 12 集合 AA/AL…KL 均逐字在 A:68。wx API `grep -o` 计数：wx.cloud 1/showLoading 1/hideLoading 1/showToast 2/navigateTo 1、`grep -c http`=0 ✓。data 初始 12 级 num 序列 108/102/102/102/96/90/84/84/60/60/60/60、`searchResult` 4 处/`pageIndex` 2 处/`num:` 12 处、三闸顺序（空 key→<3→`!0!=n` 节流 1500ms）、12 级 for 并发 get、hideLoading 固定 1.5s 定时——与 A:68 原文一致。app-config python 解析：pages 27 项含 `pages/search/search`（下标 13）、page 键 `pages/search/search.html` window={搜索,#fff,black,backgroundColorTop/Bottom #fff}、global window #f1f1f1 黑字且无 navigationStyle 键、navigationStyle:"custom" 仅 index/daka 两页、tabBar 5 项（index/school/word/daka/more）不含 search、`grep -c usingComponents`=0、unpacked/components/tui-collapse 与 tui-nomore 目录存在 ✓。captures/collections 现仅 units(32 条)/words(3,089 条)/user_school(1,080 条)（+README/_counts），无 12 个 cards 集合样本 ✓。

### diff 摘要

| # | 位置 | spec 现文 | 原文证据（本次实测） | 定级 |
|---|---|---|---|---|
| 1 | §2「骨架类的其他样式来源」第 2 条、§1 末行括注「本页无样式定义，见第 2 节」的延伸结论、勘误 4 | 15 处 CSS 形态命中「全部属于其他页面/组件的 wxss 块（card/audio/class/help/member/planDetail/planList/report/set/vip 及 tui-tabs/tui-top-dropdown/tui-charts-column/tui-textarea/weui uploader），**无 app 全局块命中**」→ search 页该 view「渲染为无样式空节点（高 0）」 | page-frame.html 中 `tui-safearea-bottom{`（无点 CSS 形态）实测 15 处：**1 处属 ./app.wxss 全局块**（pos≈802982；其所在 setCssToHead 调用起点 650874、终点 path:"./app.wxss" 全文件唯一、调用区间内无其他 setCssToHead，归属方法经对照类 `tui-searchbox{` 双命中 search 自有块验证）；规则拼接原文 `.tui-safearea-bottom{height:env(safe-area-inset-bottom);width:100%}`（与 thorui 全局变量同块）。其余 14 处分属 audio/card/cardQuiz/cardTest/daka/group/listen/more/planDetail/planList/report/school/share/word 页块，与 spec 所列 10 页+5 组件无一对应 | **实 diff**：app.wxss 是小程序全局样式，search 页该 view 实际吃到 `height:env(safe-area-inset-bottom);width:100%`，并非无样式空节点——会传导到还原行为（底部安全区占位）。「X 本页无此规则」半句保留，删「无 app 全局块命中/无样式空节点」结论，勘误 4 的「样式缺失原因」即此 |
| 2 | §2「`.citem` 不是类名」条 | 「page-frame.html 中 63 处 "citem" 命中」 | python `s.count('citem')`=69、`grep -o "citem" page-frame.html \| wc -l`=69；CSS 形态 `.citem`/`citem{` 均 0 处 | 计数错（63→69），主结论「非类名、无 CSS 选择器形态」不变，顺带修 |
| 3 | §4 表格证据列 | 「words.jsonl 中 "cover" 命中均为单词名（cover/covered/discovery 等）非 URL 字段」 | words.jsonl 3,089 条无 `cover` **键** ✓；但 'cover' 字符串分布于 27 个字段路径，其中含 URL **值**（/img=`…/B/Word/covering.jpg`、/audio_en=`…/B/Word/cover.mp3`、/prompt=`…/AA/Prompt/…covers….mp3`——均由单词名/例句构造的词卡资源 URL） | 轻微：措辞精化为「命中均为单词名或由单词名/例句构造的 URL 值，words 集合无 cover 字段」；「12 cards 集合零样本、cover 字段 URL 形态零证据、待采集/真机验证」主结论维持 |

**结论**：节点树 / 类名抽查（19 处）/ 文案 / 事件与云函数清单四项核对全部执行完毕且各自通过；但 diff#1 属会传导到还原行为的实质不一致（spec 断言「无 app 全局块命中→无样式空节点」被原文推翻），本次对账**不通过（FAIL）**——蒸馏工按 diff#1 修正 §2/§1 末行/勘误 4（#2/#3 顺带）后复核关闭。PROGRESS.md 按「对账通过后更新」约定本次未动。

可复跑的核对点（本次蒸馏已执行）：ops 48 项 dump（W:19-66 逐行）；9 处 `_mz` 锚点核验（W:80/82/84/87/96/101/114/117/138）；桩运行时渲染全树（临时 harness 未入仓：stub 运行时 eval W:1-167 工厂并补 :168 行首 `}` 调用；需预置 `__WXML_GLOBAL__`、`outerGlobal.__webview_engine_version__=0.02` 以跳过 :159 老引擎 `_ev(root)` 分支；表达式编码注意——常量 `[3,…]`/`[1,…]`/`[11,…]` 为裸数字操作码，`[[7],…]`/`[[6],…]`/`[[2,"op"],…]` 的操作码在子数组内）；A:68 逐项计数；app-config python 解析。

### 蒸馏工修正记录（2026-10-01）

按对账 diff #1-#3 修正；修正前蒸馏工已到原文自验，三项全部复现：

- **diff#1（§2 safearea 条 / §1 末行括注 / 勘误 4）**：page-frame.html 中 `tui-safearea-bottom{`（无点 CSS 形态）python 实测 15 处；以 `setCssToHead(` 起点到 `path:"…"}` 后终止符建 67 个调用区间（零重叠）逐处归属——**1 处属 ./app.wxss 全局块**（pos 802982 ∈ [650874, 822451]，`path:"./app.wxss"` 全文件唯一、区间内无其他 setCssToHead）+ 14 处页块（audio/card/cardQuiz/cardTest/daka/group/listen/more/planDetail/planList/report/school/share/word，无组件块）；802982 处规则原文 `.tui-safearea-bottom{height:env(safe-area-inset-bottom);width:100%}`（与 thorui 全局变量同块）；归属方法以对照类 `tui-searchbox{` 双命中 search 自有块（1833020/1833090 ∈ search.wxss 调用区间）夹逼验证。结论改为：app.wxss 全局样式实际作用于该 view，非无样式空节点。
- **diff#2（§2 citem 条）**：63→69（python `s.count('citem')`=69、`grep -o "citem" page-frame.html | wc -l`=69 双口径一致）；`.citem` 字面 0 处、`citem{` 0 处，CSS 形态 0 处结论不变。
- **diff#3（§4 证据列措辞）**：words.jsonl 3,089 行 python 逐行实测无 `cover` 键；'cover' 字符串值命中共 86 处、分布于 27 个字段路径（含数组下标口径；折叠数组为 12 条逻辑路径），含 URL 值 /img=…/B/Word/covering.jpg、/title[]/audio_en=…/B/Word/cover.mp3、/prompt=…/AA/Prompt/…covers….mp3（均由单词名/例句构造）。「12 cards 集合零样本、cover 字段 URL 形态零证据、待采集/真机验证」主结论维持。

改动范围：frontmatter 状态、§1 末行括注、§2 两处、§4 表格证据列、勘误 4、本记录；其余未动。

### 对账员复核（第二轮收尾，2026-10-01）

对账员独立回原文抽验 #1-#3 修正表述，三项全部复现，**verdict=PASS**：

- **#1（§2 safearea 条 / §1 末行括注 / 勘误 4）**：独立重跑 page-frame.html 归属扫描——`tui-safearea-bottom{`（无点 CSS 形态）实测 15 处；pos 802982 落在 app.wxss setCssToHead 调用区间内（起点 650874 实测一致；终点本轮口径计至 `path:"./app.wxss"}` 尾为 822449，spec 写 822451 为调用尾部字节计数口径差，不影响归属）；`path:"./app.wxss"` 全文件唯一（位于 822431）；区间 (650874,822449) 内无其他 setCssToHead 调用（67 个调用 token 逐一核对）；命中处规则被拆串存储（命中处前一字节为引号、前串以 `.` 结尾），拼接原文逐字等于 `.tui-safearea-bottom{height:env(safe-area-inset-bottom);width:100%}`，其后紧邻 thorui 全局变量串=同块成立；对照类 `tui-searchbox{` 双命中 search 自有块（1833020/1833090）复现；其余 14 处命中归属 audio/card/cardQuiz/cardTest/daka/group/listen/more/planDetail/planList/report/school/share/word 页块，与 spec 清单逐一相符、无组件块。spec 新表述「实际吃到全局规则、非无样式空节点」与原文一致。
- **#2（§2 citem 条）**：python `s.count('citem')`=69 与 `grep -o "citem" page-frame.html | wc -l`=69 双口径复现；`.citem` 与 `citem{` 形态均 0 处，非类名结论不变。spec 现文「69 处…双口径一致」成立。
- **#3（§4 表格证据列）**：words.jsonl 3,089 行复现；全树无 `cover` 键（顶层与任意嵌套字段名均无 cover）；'cover' 字符串**值**命中 86 处、分布于 27 个字段路径（含数组下标口径）、去下标折叠 12 条逻辑路径，均与 spec/修正记录数字一致；三类 URL 样本形态逐一复现（/img=…/B/Word/covering.jpg、/title[N]/audio_en=…/B/Word/cover.mp3、/prompt=…/AA/Prompt/…）。措辞精化忠实于原文。
- **篡改检查**：search.md 为 git 未跟踪文件，无历史基线可 diff；以第一轮记录完整性判定——第 6 节第一轮内容（对账声明、四个核对项、diff 摘要表、「不通过（FAIL）」结论、可复跑核对点）完整在位、未被改写，本轮新增仅「蒸馏工修正记录」块与改动范围行；第一轮记录中的关键数字（15 处/802982/650874/唯一 path/14 页块清单/对照类 1833020、1833090/69 双口径/0 CSS 形态/3,089/27 路径/86 值命中/`grep -c cu` 43/pages 27 项 search 下标 13）经本轮独立复测全部复现，无篡改迹象。

**复核结论**：#1-#3 修正验证通过，第一轮 FAIL 关闭，search 页对账通过（待验收）。PROGRESS.md search 行已同步更新。

## 附：本次蒸馏对依据包的勘误与补充（均已回原文实证）

1. **【勘误·骨架】W:114 节点 class 依据包写 `citem` → 实为 `cu-card`**（op37=W:56）。三重证据：① ops 全量 dump：op33=[3,"citem"]、op37=[3,"cu-card"]；② 锚点规则 9/9 处核验，该节点 bindtap=op36('goCardDetail')、data-id=op38({{citem.id}}) 夹逼确认 class=36+1=op37；③ 桩运行时渲染实测输出 `<view bindtap="goCardDetail" class="cu-card" data-id="ID1">`。op33/op35 在 m0 中零引用，为编译遗留（见第 1 节注 ②）。同时 ColorUI 惯例 `cu-card > cu-item` 结构与 W:116 内层 view.cu-item 相符。
2. **【精化】** 依据包称 clickLevel「手风琴式切换」——括号内行为描述（当前展开置 -1、否则置 idx）正确（A:68 `n.current==a?-1:a`），但实为**本级独立开关**：仅 setData 本级 current，不触碰其他级 → 允许多级同时展开，非互斥手风琴。
3. **【补充】** 依据包提示「cover 需对 captures/collections 样本核验」——本次已核验：captures 无 12 个 cards 集合的任何样本（现仅 units/words/user_school），cover URL 形态零证据，维持「待采集/抽样验证通过（2026-09-29 CDN 探测，见 audit/cdn-probe.md）」。
4. **【勘误·2026-10-01 修正】** `tui-safearea-bottom` 本页 wxss 无此规则，但 page-frame.html **./app.wxss 全局块有** `.tui-safearea-bottom{height:env(safe-area-inset-bottom);width:100%}`（15 处 CSS 形态命中中 1 处属 app.wxss 全局块 pos≈802982，其余 14 处分属 audio/card/cardQuiz/cardTest/daka/group/listen/more/planDetail/planList/report/school/share/word 页块、无组件块命中）——search 页该 view 实际吃到全局规则，非无样式空节点；原「无样式来源/样式缺失原因」之说作废（对账 diff#1，详见第 2 节与文末修正记录）。
5. **【确认】** A:1-66 为渲染层 $gwx 精简副本（仅 container + tui-collapse 循环 + tui-nomore，W 版多出搜索框区/插槽结构/safearea 节点），依据包「勿当骨架权威」提示经本次通读确认属实。
