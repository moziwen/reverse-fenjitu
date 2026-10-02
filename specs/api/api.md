# 接口契约（api.md）

> 状态：**整理中（阶段4）**——基于 489 版解包的 27 页云函数清单 + captures/ 实测样本重写（2026-09-29）。
> 冻结后打 tag `api-frozen-v1`；变更必须走 `audit/api-changelog.md` 并通知前端仓与后端仓。
> 运行时权威 = 后端仓 `contracts/openapi.yaml`；本文件是**需求权威**。
> 每个接口至少一条真实样本背书；无样本的条目标 `推断未验证`，冻结前清零或剔除。

## 约定（前后端共同遵守）

- 响应包络：`{ code, msg, data, request_id }`
- 时间：ISO 8601 UTC；分页：`page / limit / total`
- 身份：服务端从 token 取 baby 归属，**不信任客户端传 baby_id**（原版客户端全量明传 baby_id，后端重建必须改为服务端解析）
- 错误码枚举在本文件，前端不做 msg 文案逻辑判断

## 架构事实（解包 + 实测，接口设计前置约束）

1. **原版没有 HTTP API 层**：客户端全部通过 `wx.cloud.callFunction`（25 个云函数）+ `wx.cloud.database()` 客户端直连（15+ 集合）读写。后端重建 = 把这两类访问面收敛为 REST 契约。
2. **tag 路由**：云函数内部靠 `tag` 字段分发子操作（如 `updateUserData` 承载 9+ 种写）。重建时每个 tag 对应一个独立端点。
3. **只写不读的云函数**：所有 `update*` 云函数只做写回；读取全部是客户端直连集合。重建时读接口按「集合 → 资源」设计，写接口按「云函数+tag → 动作」设计。

## 云数据库集合 ↔ 资源对照（读路径输入）

数据来源：`captures/collections/*.jsonl`（2026-09-29 导出，三数对账见 collections/README.md）。

| 集合 | 资源语义 | 条数 | 对账 | 样本 | 备注 |
|---|---|---|---|---|---|
| units | 课内单元（489 新增） | 32 | ✅ 全量 | units.jsonl | `unit_<年级>_<序号>`；**I/J/K 内联模型见下** |
| user_school | 课内学习记录（489 新增） | 1,080 | ✅ 全量¹ | user_school.jsonl | baby_id+unit_id 维度 |
| words | 词库 | 3,089 | ✅ 全量 | words.jsonl | **仅 AA~H 级**（H 19 条） |
| guide | 引导 | 0 | ✅ 空集 | — | 空集合 |
| class | 班级 | — | ❌ | — | **服务端权限拒绝，仅管理端可导**；接口不设客户端端点 |
| AA/AL/BL/CL/DL/EL/FL/GL/HL/IL/JL/KL | 分级绘本内容 ×12 | 108/102/102/102/96/90/84/84/60/60/60/60 | count 基准 | 未全量 | 与 daka 页 levelTotal 硬编码一致；I/J/K 词汇内联 `list` 字段 |
| user_study | 用户学习主记录 | 49,926 | count 基准 | 未全量 | quiz/words_collect/month_days/listen_days 嵌套 |
| user_data | 用户每日数据 | 136,617 | count 基准 | 未全量 | baby_id+date 维度 |
| user_parent | 家长 | 344,793 | count 基准 | 未全量 | 含他人 PII，不抓全量 |
| user_plan / plan / group / members / orders / phone / feedback / init | 计划/内容/交易/反馈 | 2,223/2,879/1,518/6,509/2,345/82/287/5 | count 基准 | 未全量 | 按需补样本 |

¹ user_school count 基准 1,070 为采集前快照，采集期间业务新增 10 条；导出侧 1,080 行 = 1,080 唯一 `_id`，两数 100% 一致。

### ⚠️ 建模发现：I/J/K 级词汇无独立词表（影响接口设计）

`words` 集合只有 AA~H 级（H 级仅 19 条），**I/J/K 三级词汇内联在对应内容集（IL/JL/KL）
文档的 `list` 字段中**，没有独立 words 记录。因此：

- **不建** `GET /words?level=I|J|K` 这类 words-by-level 查询路径；
- 课内/绘本接口返回 I/J/K 内容时，词汇**直接来自内容集 `list` 字段**（含 word/zh/audio/img），
  响应注明 `"wordSource": "inline"`；
- 若未来需要统一词表，走管理端从 IL/JL/KL 展开，另行变更本契约。

## 写接口（云函数 + tag → 端点）

来源：`audit/inventory.md`（489 版 25 云函数）+ 已蒸馏 spec 的 tag 实证
（word/card/daka/listen/audio/unit）。首批 5 页蒸馏后补全。

### updateUserData（9+ tag）

| tag | 端点（建议） | 语义 | 实证页 | 状态 |
|---|---|---|---|---|
| listenNew | POST /api/v1/listen/records | 当日首次听：新建（time/time_length/card_id） | listen | 已验证 |
| listenCardUpdate | POST /api/v1/listen/records/{cardId} | 当日已有记录追加听卡 | daka, listen | 已验证 |
| listenTimeUpdate | POST /api/v1/listen/time | 当日已有记录仅累计时长 | listen | 已验证 |
| wordAdd / wordListPush | POST /api/v1/word/study | 单词学习计数/列表推送 | word | 已验证 |
| wordNum | POST /api/v1/word/num | 单词数更新 | word, card | 已验证 |
| wordPindu | POST /api/v1/word/pindu | 拼读结果 | word | 已验证 |
| wordFuxiNew / wordFuxiUpdate | POST /api/v1/word/fuxi | 复习新建/更新 | word | 已验证 |
| cardQuizAdd / cardQuizPush / cardQuizNumUpdate | POST /api/v1/card/quiz | 测验记录新建/推送/更新（三分支按当日记录与卡片去重） | cardTest | 已验证 |
| updateGroupID | POST /api/v1/user/group-id | 同步 user_data.groupID（入班时） | group | 已验证 |
| cardPush / cardNumUpdate / cardAdd | POST /api/v1/card/study | 绘本学习推送/计数 | card | 已验证 |
| speakPush / speakStarUpdate / speakWcpmUpdate / singleSpeakTodayUpdate | POST /api/v1/speak/record | 跟读测评回写 | card | 已验证 |
| （其余 tag） | — | 待 21 页蒸馏补全 | — | 推断未验证 |

### updateUserStudy

| tag | 端点（建议） | 语义 | 实证页 | 状态 |
|---|---|---|---|---|
| collectWord(mode:"new") | POST /api/v1/word/collect | 收藏单词 | word, unit, card | 已验证 |
| unCollectWord | DELETE /api/v1/word/collect/{wordId} | 取消收藏 | word, card | 已验证 |
| deleteWord | DELETE /api/v1/quiz/{wordId} | 测验列表移除 | word | 已验证 |
| monthDaysAdd | POST /api/v1/calendar/days | 月打卡天数 | word, listen, card | 已验证 |
| listenUpdate | POST /api/v1/listen/days | 听力艾宾浩斯 | listen | 已验证 |
| createGroup | POST /api/v1/group/join | 入班（baby_id+groupID） | group | 已验证 |
| plan | POST /api/v1/group/plan | 班内计划写回 | group | 已验证 |
| quitGroup | POST /api/v1/group/quit | 退班（×2 调用点） | group | 已验证 |
| recordUpdate / levelAdd / levelUpdate / voiceSpeedSet / recordAudio / wordsAddQuiz | POST /api/v1/study/* | 阅读记录/级别进度/语速/录音 | card | 已验证 |

### updateUserQuiz / updateUserSchool（489 新增）

| 云函数 | tag | 端点（建议） | 语义 | 实证页 | 状态 |
|---|---|---|---|---|---|
| updateUserQuiz | updateQuizPassNum | POST /api/v1/quiz/pass | 测验通过计数 | word | 已验证 |
| updateUserQuiz | updatePindu | POST /api/v1/quiz/pindu | 拼读结果 | word | 已验证 |
| updateUserQuiz | updateQuizFuxi | POST /api/v1/quiz/fuxi | 复习检测 | word | 已验证 |
| updateUserQuiz | newLevelPass / updateLevelPass | POST /api/v1/quiz/level-pass | 级别通过新建/追加（user_study.<level> 结构） | cardTest | 已验证 |
| updateUserPlan | quiz | POST /api/v1/plan/quiz | 打卡计划测验回写（daka_current 定位任务） | cardTest | 已验证 |
| updateUserStudy | wordsAddQuiz | POST /api/v1/word/wrong-book | 错词入测验本（elemMatch 去重） | cardTest | 已验证 |
| collectWord | POST /api/v1/word/collect | 单词收藏（word_detail 全量+timestamp，elemMatch 查重） | wordExt | 已验证 |
| updateUserSchool | unitQuizUpdate | POST /api/v1/school/unit-quiz | 单元测验星回写（仅新 unitStar > 旧值才上调） | unitQuiz | 已验证 |
| updateUserSchool | test | POST /api/v1/school/words-backfill | unit_6_60 扩展词回填（疑似调试遗留，2s 后无条件触发） | school | 已验证 |
| updateMemberVip | vipNeedPay / vipExpire / vipAdd / vipUpdate | POST /api/v1/member/vip | 会员状态四分支（试用限额/到期/购买/续费） | index | 已验证 |
| getPhoneticMap | — | POST /api/v1/config/phonetic-map | 音标映射表版本号缓存（init 集合 phonetic_config） | index | 已验证 |
| getSessionKey | — | POST /api/v1/pay/session-key | wx.login code 换 sessionKey（虚拟支付签名前置） | member | 已验证 |
| payOrder | — | POST /api/v1/pay/order | 微信支付下单（money 单位分，tag=时间戳），成功后 requestPayment+轮询 | member | 已验证 |
| generateVirtualPaySign | — | POST /api/v1/pay/virtual-sign | 虚拟支付签名（offerId 1450483660，outTradeNo=fenjitu_+ts） | member | 已验证 |
| updateVirtualVIP | — | POST /api/v1/pay/virtual-callback | 虚拟支付成功回写 VIP | member | 已验证 |
| handleDeliverGoods | — | POST /api/v1/pay/deliver | 虚拟支付发货（按 outTradeNo） | member | 已验证 |
| updateMemberVip | vipAdd（member 侧） | POST /api/v1/member/vip | 支付成功会员开通（与 index 侧四分支同一端点） | member | 已验证 |
| checkJigou | init / bind / addGroup / remove / group | POST /api/v1/jigou/account | 机构账号五操作（列表/绑定/入班/移除/分班） | jigou | 已验证 |
| updateUserPlan | add / update（jigou 侧） | POST /api/v1/plan | 绑定会员自动开学习计划（⚠ update 分支 plan_id/bind_plan 混用 quirk 原样记录） | jigou | 已验证 |
| updateUserSchool | updateWordStar | POST /api/v1/school/word-star | 单词星级 | unit | 已验证 |
| updateUserSchool | updateUnitWords | POST /api/v1/school/unit-words | 单元词星覆盖 | unit | 已验证 |
| updateUserSchool | （直连 add） | POST /api/v1/school/units | 新建课内学习记录 | unit | 已验证 |

### updateUserPlan / 其余云函数

| 云函数 | tag/参数 | 端点（建议） | 语义 | 实证页 | 状态 |
|---|---|---|---|---|---|
| updateUserPlan | finish / plan_daka_add / plan_daka_progress / speak | POST /api/v1/plan/* | 计划完成/打卡/进度 | card | 已验证（明细待 plan* 页） |
| updateWordNum | word_id | POST /api/v1/word/count | 单词计数 | card | 已验证 |
| getShareQRcode | openid+level+card_index | POST /api/v1/share/qrcode | 战报海报二维码 | card | 已验证 |
| getGroupQRcode | — | POST /api/v1/group/qrcode | 班级二维码 | group | 推断未验证 |
| getPhoneticMap | — | GET /api/v1/phonetic-map | 近音词表 | index | 推断未验证 |
| checkJigou | — | POST /api/v1/jigou/check | 机构校验 | jigou | 推断未验证 |
| payOrder / generateVirtualPaySign / handleDeliverGoods / getSessionKey / updateVirtualVIP / updateMemberVip | — | POST /api/v1/pay/*、/member/* | 支付/会员 | member, vip | 推断未验证 |
| updateBabyInfo / updateUserParent / updatePhoneData / updateGroupInfo / imgSecCheck | — | POST /api/v1/user/* | 用户资料 | set, more | 推断未验证 |
| updateHelperClicks / deleteFeedback / feedbackNotice / fetchData / loginNew | — | GET/POST /api/v1/misc/* | 杂项 | help, share, index | 推断未验证 |

## 读接口（集合 → 资源）

| 集合 | 端点（建议） | 说明 | 状态 |
|---|---|---|---|
| units | GET /api/v1/school/units、/{unitId} | 课内单元（32 条全量实测） | 已验证 |
| units 内联 words/speak/sentences | 随 units 返回 | **I/J/K 级词汇由此内联提供**（`wordSource:"inline"`），无独立 words 查询 | 已验证 |
| words | GET /api/v1/words?level={AA..H} | 词库**仅 AA~H**；不支持 level=I/J/K（见建模发现） | 已验证 |
| words {id} | GET /api/v1/words/{id} | 详情（含 extend/books） | 已验证 |
| user_school | GET /api/v1/school/records?babyId&unitId | 星级/通过记录 | 已验证 |
| user_study | GET /api/v1/study/me | 本人学习记录（quiz/words_collect/month_days） | 已验证（本人） |
| user_data | GET /api/v1/user/data?date | 当日数据 | 已验证（本人） |
| AA~KL | GET /api/v1/books?level={X} | 分级绘本内容；I/J/K 含内联词汇 | count 基准 |
| class | — | **服务端权限拒绝**；班级数据走管理端导出/后端自有表，不设客户端端点 | 不可采集 |

## 冻结前待办

1. 首批 5 页（report/planList/planDetail/planCreate/more）蒸馏后补全 updateUserPlan tag 明细与 more 页云函数语义；
2. 支付/会员链路（payOrder 等 6 函数）从 member/vip 页蒸馏补参数；
3. `推断未验证` 条目清零：逐条补抓样本或剔除；
4. 响应 schema 细化（以 captures 实测字段为准；openid/baby_id/昵称等敏感字段后端侧哈希）。
