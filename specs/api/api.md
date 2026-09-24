# 接口契约（api.md）

> 状态：征集全量后冻结，打 tag `api-frozen-v1`。
> 运行时权威 = 后端仓 `contracts/openapi.yaml`；本文件是需求权威。
> 每个接口至少一条真实抓包/导出样本背书；无样本的条目必须标 `推断未验证`，冻结前清零。

## 约定（前后端共同遵守）

- 响应包络：`{ code, msg, data, request_id }`
- 时间：ISO 8601 UTC；分页：`page / limit / total`
- 身份：服务端从 token 取 baby 归属，**不信任客户端传 baby_id**
- 错误码枚举在本文件，前端不做 msg 文案逻辑判断

## 接口清单

| 云函数名 | 方法+路径 | 入参 | 响应 data 摘要 | 调用页面 | 样本 | 状态 |
|---|---|---|---|---|---|---|
| getStudy | GET /api/v1/study/:babyId | - | 今日学习进度 | report, daka | capture#12 | 已验证 |
| recordQuiz | POST /api/v1/quiz/record | {bookId,stars,...} | 写回结果 | cardQuiz | capture#15 | 已验证 |

> 行模板逐条补全；冻结时全部行状态=已验证，`推断未验证` 条目清零或剔除。

## 集合 ↔ 表对照

| 云数据库集合 | 用途 | 导出文件 | 条数 | count 对账 |
|---|---|---|---|---|
| books | 绘本 | captures/collections/books.jsonl | 1008 | ✅ |
