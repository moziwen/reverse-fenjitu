---
页名: <name>
显示名: <中文页面名>
状态: 蒸馏中 | 待对账 | 对账通过 | 已冻结
chunk: chunk_NN.webview.js / chunk_NN.appservice.js
导航栏: custom | 系统栏（标题「<文案>」）
---

# 页面还原规格：<显示名>

> 本文件由蒸馏工产出，每条结论必须带证据。前端 page-restorer 只读本文件写码。

## 1. 页面骨架（节点树）

来源：`chunk_NN.webview.js` 的 `$gwx_XC_NN`（行号：）

```
<层级缩进的节点树骨架，含 class / 文案 / 事件绑定 / 图片 URL>
```

### 状态分支
- 条件渲染差异（如 level_type=0 显示图 + 中文题干，H~K 仅文字）

## 2. 样式规格

来源：`wxss_out/pages__<page>__<page>.wxss`（数值直接当 px，不除 2）

| 类名 | 关键样式 | 用途 |
|---|---|---|
| .xxx | width:36px; color:#e41f19 | 星级 |

依赖的全局类（ColorUI 等）：`.bg-macron` / `.text-xl` / ...

## 3. 事件与逻辑

来源：`chunk_NN.appservice.js`（行号：）

| 事件 | 处理函数 | 行为概述 | 调用云函数 | 写回 |
|---|---|---|---|---|
| tap提交 | onOk | 判分 | recordQuiz, checkPlanQuiz | updateUserStudy |

### 计算规则（判分/进度/星级等，必须精确到边界）
- 例：通过率 = ceil(100 × 三星题数 / 总题数)

## 4. 资源规律

| 资源 | 规律 | 证据 | 状态 |
|---|---|---|---|
| 题干音频 | `pages[0].img` 所在目录 + `<题号>-title.mp3` | 样本 n 条命中 | 已验证 |
| 封面 | 原版 `cover` 字段真实路径 | — | ⚠️ 待真机验证 |

## 5. 弹窗 / 分支状态

- 完成态：欢呼声开关 / 烟花奖杯 / 星级折叠面板（含 `.tui-icon-arrow`）

## 6. 对账记录（对账员填写）

- [ ] 节点树与原文一致
- [ ] 类名抽查 n 处全中
- [ ] 文案逐字一致
- [ ] 事件与云函数调用清单齐全
- diff 摘要：
