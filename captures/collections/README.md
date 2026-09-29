# captures/collections — 云数据库导出

## count 对账基准（2026-09-29 11:03~11:05，服务端 count()）

| 集合 | count | 说明 |
|---|---|---|
| **units** | 32 | 489 新增，课内单元 |
| **user_school** | 1,070 | 489 新增，课内学习记录（baby_id+unit_id 维度） |
| **user_study** | 49,926 | 用户学习主记录（quiz/words_collect/month_days/listen_days 等） |
| **words** | 3,089 | 词库（level AA~K 分级） |
| AA~KL（12 个级别内容集） | 108/102/102/102/96/90/84/84/60/60/60/60 | 分级绘本内容；**与 daka 页 levelTotal 硬编码 [108,102,102,102,96,90,84,84,60,60,60,60] 完全一致**（spec daka.md 交叉验证） |
| feedback | 287 | 意见反馈 |
| group | 1,518 | 班级/群组 |
| init | 5 | 初始化数据 |
| members | 6,509 | 会员 |
| orders | 2,345 | 订单 |
| phone | 82 | 手机号记录 |
| plan | 2,879 | 打卡计划 |
| user_data | 136,617 | 用户数据（baby_id+date 维度） |
| user_parent | 344,793 | 家长（最大集合） |
| user_plan | 2,223 | 用户计划 |
| class | **null** | count 无返回——疑似客户端无读权限或集合不存在于当前环境，待复核 |
| guide | 0 | 空集合 |

原始记录：`_counts.jsonl`。采集方式：WMPF CDP（ws://127.0.0.1:62000）→ Runtime.evaluate →
appservice 上下文（context 3）调 `wx.cloud.database().collection(<n>).count()`，只读，间隔 3~8s。


## 第 1 天导出（2026-09-29 11:0x~，会话约 25 分钟）

| 集合 | 今日导出 | 服务端 count | 对账 |
|---|---|---|---|
| units | **32** | 32 | ✅ 全量（行数=唯一_id=32=32） |
| user_school | **400** | 1,070 | 🔶 第一批（拆次日，余 672） |
| guide | 0 | 0 | ✅ 空集确认 |

- units 结构：`_id/gradeName/grade_id(1~6)/id(unit_年级_unitNo)/title/unitNo/sentences(matchText,sentence)/speak(audio[],img,text)/words(id,word,zh,audio,img,book,extend)`；
  URL 域名 100% `qianyufang.top`（586 处），可供 spec「待真机验证」项抽样。
- user_school 结构：`_id/_openid/baby_id/unit_id/date/vip/words/cardPass/pinduPass/speakPass/textPass/unitStar/records`。
- **class 集合复核：get() 同样权限拒绝**（与 count=null 一致）——服务端把 class 设为不可客户端读，
  该集合数据只能走管理端导出，标「不可采集」。
- 运维：脚本固化 `captures/tools/day1_export.py` / `day1_user_school.py`；次日续跑 user_school
  用 skip(400) 起，配额继续 ≤500。


## 第 2 天导出（2026-09-29 下午，会话 22 分钟）

| 集合 | 今日 | 累计 | 服务端 count | 余量 |
|---|---|---|---|---|
| user_school | 500 | **900** | 1,070 | 170（拆第 3 天） |

- 今日配额 500 条用满即停（纪律）。跨日去重验证：900 行 = 900 唯一 _id，无重复。
- 第 3 天计划：user_school 余 170 收尾全量 + words 前半（count=3089，约 330 条配额内）。

## 采集纪律与计划（后续 jsonl 导出遵照 wxapp-cloud-export）

- 只读（脚本零写调用）；间隔 3~8s 随机；**单日 ≤500 条**；单会话 ≤30 分钟；拆 3~5 天
- 优先级：units(32) → user_school(1,070) → words(3,089) 可快速全量；
  user_study(49,926)/user_data(136,617)/user_parent(344,793) 为大集合，**按需投影**，
  他人用户数据无必要不抓（隐私包袱）
- 大集合策略：words/units/user_school 全量；user_study 抓当前 baby_id 本人；
  user_parent/user_data 只在 api.md 建模必需时抓样本（每集合 ≤500）
- 重新采集操作：启动 WMPF 调试器（见 wechat-miniapp-reverse 技能）→ 小号微信打开小程序 →
  重定位 appservice context（见 captures/tools/_appservice_ctx.json 方法说明）→ 跑导出脚本
