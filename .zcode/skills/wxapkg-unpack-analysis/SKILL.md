---
name: wxapkg-unpack-analysis
description: >-
  微信小程序包静态解包与还原依据提取。触发词：解包、wxapkg、V1MMWX、chunk、反编译、$gwx、节点树、还原依据、小程序源码分析。
  覆盖：PC 微信缓存包定位 → 解密解包 → chunk 反编译 → 节点树/wxss/appservice/app-config 四件套提取 → 云函数清单。
  与 wechat-miniapp-reverse（运行时 CDP 动态调试）互补：本技能是纯本地静态分析，零风控风险。
  不用于：运行时抓包调试（→ wechat-miniapp-reverse）、JS 混淆还原（→ ast-deobfuscate）、数据导出（→ wxapp-cloud-export）。
---

# 小程序包解包与静态还原

## 定位

风控视角的黄金规则：**解包是纯本地文件操作，服务端完全无感知，随便做**。所有小程序还原项目的第一步都从这里开始。

## 输入

- 小程序 appid（如 `wx62876f2ba0772875`），或小程序名称（可从 PC 微信小程序面板确认 appid）

## 流程（5 步）

### 1. 定位缓存包

PC 微信小程序运行后会落地加密缓存包：
`<微信文件目录>/WeChat Files/Applet/<appid>/<版本>/__APP__.wxapkg`（V1MMWX 加密）。
找最新版本目录；分包可能有多个性命名的 wxapkg。

### 2. 解密解包

用 V1MMWX 解密工具（密钥源自微信本地 salt）解出原始 wxapkg，再用 `unpack_wxapkg.py` 解包。
产物结构：

```
*_unpacked/
  app-service.js            # 主逻辑入口
  app-config.json           # 每页导航栏/window 配置（还原导航栏的唯一权威）
  app.wxss 相关 setCssToHead（在 page-frame.html）
  chunk_NN.appservice.js    # 各页逻辑层（计算/云函数调用/写回）
  chunk_NN.webview.js       # 各页渲染层（$gwx_XC_NN 节点树）
  page-frame.html           # 全局样式与公共 stylesheet
```

### 3. 提取页面 ↔ chunk 对照

```bash
grep -l "'./pages/<name>/<name>.wxml'" *_unpacked/chunk_*.webview.js
```

先建全量对照表写进分析报告，后面逐页还原不再找。

### 4. 提取四件套（每页的"还原依据"）

| 依据 | 来源 | 用途 |
|---|---|---|
| 节点树/类名/文案/事件 | `chunk_NN.webview.js` 的 `$gwx_XC_NN` | 页面骨架唯一权威 |
| 样式 | `extract_wxss.py`（还原 `setCssToHead` 数组） | 权威样式 |
| 页面逻辑 | `chunk_NN.appservice.js` | 计算/云函数调用/写回 |
| 导航栏配置 | `app-config.json` | custom 还是系统栏、标题文案 |

**`_mz(z,'tag',[attr,idx,...])` 索引坑**：打印出的属性索引只有第一个是对的，
后面是"第几个属性"的序号，真实 ops 索引从第一个起连续递增。
例：`['bindtap',18,'class',1,'style',2]` 实际是 `bindtap=op18, class=op19, style=op20`。

### 5. 全局样式与云函数

- 全局样式：`extract_common_wxss.py <page-frame.html> <outdir>`，提取 `__COMMON_STYLESHEETS__`
  和 `setCssToHead(..., {path:"./app.wxss"})`（很多项目全局样式是 ColorUI 等组件库，漏了它每页样式都是空的）
- 云函数清单：`extract_cloudfunctions.py`，产出"写操作入口"清单（后端重建的输入）

## 产物约定

```
<项目>_unpacked/       # 解包原始产物
wxss_out/              # 逐页还原后的 wxss
<项目>_分析报告.md      # 架构总览/集合结构/云函数清单/页面↔chunk 对照
```

## 出口条件

- [ ] 页面 ↔ chunk 对照表完整
- [ ] 四件套按页可查
- [ ] 云函数清单 + 云数据库集合结构成文（接 `wxapp-cloud-export`）
- [ ] 全局样式来源确认（是否组件库）
