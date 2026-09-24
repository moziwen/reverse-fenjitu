/* zcode-workflow
name: distill-spec
description: 逆向仓每页规格蒸馏流水线：提取依据包 → 蒸馏 spec → 对账员独立 diff
whenToUse: reverse-fenjitu 仓按页蒸馏还原规格时；一次只跑一页（一页一停）
*/
/* zcode-workflow args:
page:
  type: string
  required: true
  description: 页面名，如 cardQuiz
repo:
  type: string
  required: false
  default: D:/webwork/reverse-fenjitu
*/

interface ExtractResult { chunkWebview: string; chunkAppservice: string; wxssFile: string; navBar: string; notes: string }
interface SpecResult { path: string; openQuestions: string }
interface AuditResult { verdict: 'PASS' | 'FAIL'; diffs: string }

const page = String(args.page)
const repo = String(args.repo ?? 'D:/webwork/reverse-fenjitu')

phase('定位 chunk 并提取依据包')
const extract = agent('解包工').ask<ExtractResult>(
  `你是逆向仓的解包工。仓库：${repo}。目标页面：${page}。
1. 用 Grep 在 ${repo}/unpacked/chunk_*.webview.js 中定位包含 './pages/${page}/${page}.wxml' 的 chunk 文件。
2. 从该 chunk 的 $gwx 节点树提取页面骨架（类名/文案/事件），从对应 appservice chunk 提取逻辑与云函数调用清单，
   从 wxss_out 提取该页样式，从 app-config.json 确认导航栏配置（custom 还是系统栏、标题）。
3. 若 unpacked/ 为空（尚未解包），不要编造：返回 notes 字段说明缺失，其余字段留空。
所有结论必须带文件+行号证据。`
)

phase('蒸馏还原规格书')
const spec = agent('蒸馏工').ask<SpecResult>(
  `你是蒸馏工。依据包结论如下，按 ${repo}/specs/pages/_TEMPLATE.md 模板写 ${repo}/specs/pages/${page}.md。
每条结论必须带证据（chunk 文件+行号）；没把握的标「待复核」，禁止编造；资源路径只写规律+样本数。
依据包：
${JSON.stringify(extract)}
完成后返回 spec 路径与遗留问题清单。`
)

phase('对账员独立复核')
const audit = agent('对账员').ask<AuditResult>(
  `你是对账员，只信原文不信过程。独立重推页面 ${page} 并与 spec 逐项核对：
原文：${repo}/unpacked/ 下该页 chunk 节点树、wxss、app-config。
产出：${spec.path}。
核对项：节点树一致 / 类名抽查≥10处全中 / 文案逐字一致 / 事件与云函数清单齐全。
把核对结果写入 spec 第 6 节「对账记录」。返回 verdict 与 diff 摘要。`
)

return {
  page,
  chunk: extract,
  specPath: spec.path,
  auditVerdict: audit.verdict,
  diffs: audit.diffs,
  nextStep: audit.verdict === 'PASS'
    ? '更新 PROGRESS.md，停下等用户验收'
    : '打回蒸馏工修 diff 后重新对账'
}
