# reverse-fenjitu

「英语分级兔」小程序逆向仓：把小程序还原为**可审计的规格书**，供前端仓（fenjitu-miniapp）
与后端仓（fenjitu-backend，由 pi 承接）消费。

## 产出物

| 产出 | 消费方 |
|---|---|
| `specs/pages/<页名>.md` 每页还原规格 | 前端 page-restorer（唯一输入） |
| `specs/api/api.md` 接口契约（冻结于 tag） | 前端 + 后端（唯一事实源） |
| `captures/collections/*.jsonl` 云数据全量导出 | 后端数据建模 / 前端数据管线 |
| `audit/report.md` 审计报告 | 项目交付物 |

## 快速开始（agent）

1. 读 [AGENTS.md](AGENTS.md)（强制规范）
2. 读 [agents/](agents/) 对应岗位说明
3. 读 `PROGRESS.md` 确认当前进度，**一页一停**

## 目录

```
unpacked/    解包产物（只读）
captures/    云数据/抓包导出（只读）
specs/pages/ 每页规格书（可写，模板 _TEMPLATE.md）
specs/api/   接口契约（冻结后变更走 audit）
tools/       提取/蒸馏脚本
audit/       审计报告与变更记录
agents/      subagent 岗位：解包工/蒸馏工/对账员/采集工
skills/      作业技能（从 .codebuddy/skills 同步）
```

## 分工边界

- 本仓（ZCode agent）：解包 → 蒸馏 spec → 对账
- 云数据动态采集：默认沿用历史 jsonl 不重抓；确需重抓时优先由 pi 侧执行
- 后端还原：**不在本仓**，见 fenjitu-backend
