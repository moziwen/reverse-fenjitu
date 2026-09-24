# captures/_orig_wxapkg

解密后的原始 wxapkg 备份（2026-09-24，由 `tools/decrypt_v1mmwx.py` 从 PC 微信 4.x
缓存 `xwechat/radium/users/cbdf1a5c.../applet/packages/` 解出，加密包原件仍在微信缓存目录）。

| 文件 | appid | 版本 | 内容 |
|---|---|---|---|
| main_wx62876f2ba0772875_489.wxapkg | wx62876f2ba0772875 | 489 | 主包（314 文件，解包于 unpacked/） |
| extended_wxfa43a4a7041a84de_46.wxapkg | wxfa43a4a7041a84de | 46 | extended 分包（101 文件，解包于 unpacked/__extended__/） |
| plugin_wx3e17776051baf153_54.wxapkg | wx3e17776051baf153 | 54 | WeUI 插件（4 文件，解包于 unpacked/__plugin__/） |

只读。复核解包正确性时用 `tools/decrypt_v1mmwx.py` 的 unpack() 重新展开对比。

⚠️ `*.wxapkg` 已加入 `.gitignore` 不入库：编译产物内嵌原小程序方的腾讯云密钥
（app-service.js / appservice.app.js 中的 `setQCloudSecret`），公开仓库不应携带；
本地解包产物中该两处密钥已替换为 `*_REDACTED_FOR_PUBLIC_REPO` 占位符，脱敏位置
即录音跟读插件初始化处（详见 audit/解包分析报告.md）。
