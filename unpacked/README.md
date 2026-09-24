# unpacked/ — 「英语分级兔」解包产物（只读）

> **当前版本：线上 489 版**（2026-09-24 从 PC 微信 4.x 缓存 `xwechat/radium/users/cbdf1a5c.../applet/packages/` 解包）。
> 此前基于 485 版历史产物的第一轮解包已全部撤下，本目录无 485 残留。
> 版本对比结论见 `../audit/解包分析报告.md` §1.3。

## 版本特征（489）

| 项 | 值 |
|---|---|
| 主 appid | `wx62876f2ba0772875` |
| 页面数 | 27（app-config.json，含 489 新增 school / unit / unitQuiz / unitStudy） |
| 云函数 | 25（含 489 新增 `updateUserSchool`） |
| 集合引用 | 17（含 489 新增 `units`、`user_school`） |
| chunk 对数 | 49（chunk_0..48，webview 与 appservice 同号） |
| tabBar | 首页 / 课内(school) / 单词 / 打卡 / 我的 |
| 云环境 | `cloud1-1gzyz2y5d29d9d43` |
| 页面↔chunk 对照 | `../audit/inventory.md` |

## 目录结构

```
app-config.json          # 每页导航栏/window 配置（还原导航栏唯一权威）
app-service.js           # 主逻辑入口
appservice.app.js        # 逻辑层运行时
webview.app.js           # 渲染层运行时
page-frame.html          # 全局样式（ColorUI+ThorUI+WeUI，setCssToHead 88 段）
chunk_NN.appservice.js   # 各页逻辑层（计算/云函数调用/写回）
chunk_NN.webview.js      # 各页渲染层（$gwx_XC_NN 节点树）
wxss_out/                # 由 ../tools/extract_wxss.py 从 page-frame.html 还原（64 份，数值即 px）
pages/                   # 每页 html 壳
components/              # ThorUI tui-* 组件 + privacyPopup
miniprogram_npm/         # weui-miniprogram
images/                  # tabbar 等静态图
__extended__/wxfa43a4a7041a84de/   # extended 分包（101 文件）
__plugin__/wx3e17776051baf153/     # WeUI 插件（4 文件）
```

## 规则（AGENTS.md）

- 本目录**只读**：禁止修改、禁止把分析结论写在这里。
- 分析结论一律写入 `specs/`（每条带 chunk 文件+行号证据），进度看 `../PROGRESS.md`。
- 重新解包/复核：用 `../tools/decrypt_v1mmwx.py`（原始包备份在 `../captures/_orig_wxapkg/`）。
