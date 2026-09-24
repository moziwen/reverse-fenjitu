#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 unpacked/ 提取静态清单（零幻觉：只提取，不做推断）。

产出（stdout 或写入 audit/）：
1. 页面 ↔ chunk 对照表（webview: wxml 引用 / appservice: define("pages/x/x.js"）
2. 组件 ↔ chunk 对照
3. 云函数调用清单（callFunction name → chunk）
4. 云数据库集合引用清单（collection("x") → chunk）
5. 全局样式来源（page-frame.html setCssToHead path 列表）

用法: python tools/extract_inventory.py [unpacked_dir] [out_md]
"""
import json, re, os, glob, sys

unpacked = sys.argv[1] if len(sys.argv) > 1 else 'unpacked'
out = sys.argv[2] if len(sys.argv) > 2 else 'audit/inventory.md'
U = os.path.abspath(unpacked)

def read(p):
    return open(p, encoding='utf-8', errors='ignore').read()

cfg = json.load(open(os.path.join(U, 'app-config.json'), encoding='utf-8'))
pages = sorted(cfg.get('page', {}).keys())

wv_chunks = sorted(glob.glob(os.path.join(U, 'chunk_*.webview.js')),
                   key=lambda f: int(re.search(r'chunk_(\d+)', f).group(1)))
ap_chunks = sorted(glob.glob(os.path.join(U, 'chunk_*.appservice.js')),
                   key=lambda f: int(re.search(r'chunk_(\d+)', f).group(1)))
wv_txt = {os.path.basename(f): read(f) for f in wv_chunks}
ap_txt = {os.path.basename(f): read(f) for f in ap_chunks}

page_rows, comp_rows = [], []
for p in pages:
    d = p.rsplit('/', 1)[0]
    wxml = './' + d + '/' + d.split('/')[-1] + '.wxml'
    wv = [k for k, t in wv_txt.items() if ("'" + wxml + "'") in t]
    ap = [k for k, t in ap_txt.items() if ('File__="' + d + '/' + d.split('/')[-1] + '.js"') in t]
    page_rows.append((d, wxml, wv, ap))

# 组件 chunk：wxml 引用落在 components/ 的
comp_map = {}
for k, t in wv_txt.items():
    for m in re.findall(r"'(\./components/[\w\-]+/[\w\-]+\.wxml)'", t):
        comp_map.setdefault(m, set()).add(k)

# 云函数
fn_map = {}
for k, t in ap_txt.items():
    for m in re.findall(r'callFunction[^)]{0,120}?name:\s*["\']([\w\-]+)["\']', t):
        fn_map.setdefault(m, set()).add(k)

# 集合引用（含变量引用 collection(a) 计数）
col_map, col_var = {}, 0
for k, t in ap_txt.items():
    for m in re.findall(r'collection\(["\']([\w\-]+)["\']\)', t):
        col_map.setdefault(m, set()).add(k)
    col_var += len(re.findall(r'collection\((?!["\'])', t))

# 全局样式
pf = read(os.path.join(U, 'page-frame.html'))
paths = re.findall(r'\{path:\s*"([^"]+)"\}', pf)

L = []
A = L.append
A('# 解包静态清单（由 tools/extract_inventory.py 自动生成）\n')
A('## 页面 ↔ chunk 对照\n')
A('| 页面 | webview | appservice |')
A('|---|---|---|')
for d, wxml, wv, ap in page_rows:
    A('| %s | %s | %s |' % (d, ','.join(wv) or '—', ','.join(ap) or '—'))
A('\n## 组件 ↔ chunk 对照\n')
A('| 组件 wxml | webview chunk |')
A('|---|---|')
for m in sorted(comp_map):
    A('| %s | %s |' % (m, ','.join(sorted(comp_map[m]))))
A('\n## 云函数调用清单\n')
A('| 云函数 | 调用方 chunk |')
A('|---|---|')
for k in sorted(fn_map):
    A('| %s | %s |' % (k, ','.join(sorted(fn_map[k]))))
A('\n## 云数据库集合引用\n')
A('| 集合 | 引用 chunk |')
A('|---|---|')
for k in sorted(col_map):
    A('| %s | %s |' % (k, ','.join(sorted(col_map[k]))))
A('\n变量名引用 collection(a) 次数: %d（具体集合名需动态确认，见 captures/）\n' % col_var)
A('\n## 全局样式来源（page-frame.html setCssToHead）\n')
for p in paths:
    A('- ' + p)
A('\n含 `__COMMON_STYLESHEETS__`: %s' % ('__COMMON_STYLESHEETS__' in pf))
A('含 ColorUI 标志类 `.bg-macron`: %s' % ('bg-macron' in pf))

txt = '\n'.join(L)
os.makedirs(os.path.dirname(os.path.abspath(out)), exist_ok=True)
open(out, 'w', encoding='utf-8').write(txt)
print(txt)
print('\nwritten:', out)
