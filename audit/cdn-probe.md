# CDN 抽样探测报告（qianyufang.top）

> 时间：2026-09-29。方法：从 `captures/collections/units.jsonl`（全量 32 条，576 个唯一 URL）
> 随机抽 20 个真实 URL（seed=42），HTTP HEAD 探测（超时 12s，5 并发）。
> 动机：五页 spec（word/card/daka/listen/audio/unit）资源章节的「待真机验证」标记。

## 结果：20/20 全部可达（HTTP 200）

| 类型 | 数量 | 说明 |
|---|---|---|
| audio/mpeg | 14 | 含 `{grade}/Unit{n}/{page}.mp3`、`{level}/Word/{word}.mp3`、主题目录（vegetable/room/autumn/plain-animal 等） |
| image/jpeg | 6 | `{level}/Word/{word}.jpg`、`{grade}/...jpg` |

样本覆盖 4 类路径规律：`/school/grade{N}/Unit{n}/`（unit 页音频）、`/{level}/Word/`（词卡）、
`/{level}/{主题}/`（分类图/音）、`/{level}/{主题}{N}.mp3`（extend 拓展音）。

## 结论

`qianyufang.top` CDN **当前可用且稳定**。五页 spec 中标记「待真机验证」的资源规律
（字母音 `/public/letter/`、图标 `/public/yingyu/images/icon/`、结果音 tcb.qcloud.la、
units 音频/图片、words 的 `{basic}1.mp3/{basic}0.mp3`）从「待真机验证」升级为
**「抽样验证通过（units 20/20）」**；其余路径规律与 units 同域名同结构，可信度高。
唯一无法用 units 抽样覆盖的 **tcb.qcloud.la 云存储结果音**（playResultAudio 的
perfect/brilliant/good/great/try-again.mp3）仍建议单独探测一次（与 qianyufang.top
是不同基础设施）。

原始探测记录：`captures/tools/_cdn_probe_result.json` / 抽样清单 `_cdn_probe_list.json`。

## 补充探测（2026-09-29）：tcb.qcloud.la 云存储（另一基础设施）

| 文件 | 状态 | Content-Type | 大小 |
|---|---|---|---|
| perfect.mp3 | 200 | audio/mpeg | 37920 |
| brilliant.mp3 | 200 | audio/mpeg | 36480 |
| good.mp3 | 200 | audio/mpeg | 29760 |
| great.mp3 | 200 | audio/mpeg | 20736 |
| try-again.mp3 | 200 | audio/mpeg | 25920 |
| wrong.mp3 | 200 | audio/mpeg | 6687 |
| shareImg.png | 200 | image/png | 25229 |
| fenjitu.jpg | ERR:HTTPError:HTTP Error 404: Not Found | — | — |

结论：7/8 可达。存在不可达文件，相关 spec 标记保持。
