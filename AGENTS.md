# reverse-fenjitu 开发约定（AGENTS 必读）

逆向仓：把「英语分级兔」小程序还原为**可审计的规格书**。本仓不产出业务代码，
产出物是 `specs/`（蒸馏结论）与 `audit/`（证据链）。开发仓只吃 specs，不接触原始 chunk。

## 真相源与目录职责

| 目录 | 职责 | 规则 |
|---|---|---|
| `unpacked/` | 解包产物（chunk 四件套），**只读** | 禁止修改、禁止把分析结论写在这里 |
| `captures/` | 云数据库/抓包导出（jsonl），**只读** | 附 README：集合说明、条数、对账结果 |
| `specs/pages/` | 每页还原规格书（人读） | 唯一可写区，frontmatter + 分节模板 |
| `specs/api/` | 接口契约 api.md 及冻结版本 | 打 git tag 冻结，变更必须走 audit |
| `tools/` | 提取/蒸馏脚本 | 脚本零幻觉原则：提取用脚本，判断用 agent |
| `audit/` | 审计报告、变更记录 | 对上交付物，持续沉淀 |
| `agents/` | subagent 岗位说明 | 各角色职责与边界 |
| `PROGRESS.md` | 进度唯一真相源 | 每页完成后必须更新 |

## 强制规范

1. **证据链**：`specs/pages/*.md` 中每条结论必须标注出处（`chunk_NN.webview.js` 文件+行号 / 抓包样本编号）。无证据的结论不许入 spec。
2. **原始材料不重抓**：本仓工作对象是解包产物与历史采集 jsonl；只有当材料缺失/损坏时才启动动态采集（遵守 wxapp-cloud-export 风控纪律：限速/只读/小号）。
3. **契约冻结**：`specs/api/api.md` 一经开发仓引用即打 tag（如 `api-frozen-v1`）；之后修改必须新增 `audit/api-changelog.md` 条目并通知前端仓与后端（pi）。
4. **蒸馏角色分离**：spec 蒸馏工不写代码；对账员独立 diff，只给解包原文和 spec，不给蒸馏过程。
5. **一页一停**：每页 spec 完成 → 对账员通过 → 更新 PROGRESS.md → 停下等用户验收。
6. **资源路径只记录规律，不猜路径**：音频/封面命名规律写入 spec；对「本地有文件但 CDN 可能 404」的路径必须标记 `待真机验证`。
7. 所有文件 UTF-8，注释与文档中文。

## 蒸馏工作流（每页 5 步）

1. 跑 `tools/` 提取脚本生成该页依据包（节点树+wxss+app-config+云函数调用清单）← 脚本，零幻觉
2. spec 蒸馏工读依据包，写 `specs/pages/<页名>.md` ← agent 只干这个
3. 对账员独立 diff（原文 vs spec）
4. 修 diff → 更新 PROGRESS.md → 停下等验收

## 权威依据对照表

| 结论类型 | 唯一权威 | 备注 |
|---|---|---|
| 页面骨架/类名/文案/事件 | `chunk_NN.webview.js` 的 `$gwx_XC_NN` | `_mz` 属性索引坑见 SKILL.md |
| 样式数值 | `wxss_out/pages__*.wxss` | 数值直接当 px 抄，不再除 2 |
| 导航栏 | `app-config.json` | custom 还是系统栏、标题文案 |
| 页面逻辑/云函数 | `chunk_NN.appservice.js` | 函数名=云函数名 |
| 全局样式 | `page-frame.html` setCssToHead | ColorUI 所在 |
| 数据结构 | `captures/collections/*.jsonl` | 唯一真实样本 |

## chunk 定位

```bash
grep -l "'./pages/<name>/<name>.wxml'" unpacked/chunk_*.webview.js
```
