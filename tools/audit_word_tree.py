# -*- coding: utf-8 -*-
"""word 页节点树对账脚本 v2（对账员专用，独立重推）
_mz 真实索引规则按 unpacked/webview.app.js 原文实现：
  base 初始 0；属性对 (prop, off)：若 base+off<0 → 该属性为字面 true；
  否则真实索引 = base+off；且 base==0 时 base=off（第一个有效属性后基准更新）。
"""
import re, json

W = open('unpacked/chunk_47.webview.js', encoding='utf-8').read().splitlines()

BSLASH = chr(92)
ops_lines = W[18:576]
z = []

def parse_val(body, i):
    while i < len(body) and body[i] in ' \t':
        i += 1
    c = body[i]
    if c == '[':
        i += 1
        arr = []
        while True:
            while i < len(body) and body[i] in ' \t':
                i += 1
            if body[i] == ']':
                return arr, i + 1
            v, i = parse_val(body, i)
            arr.append(v)
            while i < len(body) and body[i] in ' \t':
                i += 1
            if body[i] == ',':
                i += 1
    if c == "'":
        j = i + 1
        out = []
        while body[j] != "'":
            if body[j] == BSLASH:
                if body[j + 1] == 'x':
                    out.append(chr(int(body[j + 2:j + 4], 16)))
                    j += 4
                else:
                    out.append(body[j + 1])
                    j += 2
            else:
                out.append(body[j])
                j += 1
        return ''.join(out), j + 1
    m = re.match(r'-?\d+(\.\d+)?', body[i:])
    if m:
        t = m.group()
        i += m.end()
        return (float(t) if '.' in t else int(t)), i
    m = re.match(r'true|false|[A-Za-z_$][\w$]*', body[i:])
    name = m.group()
    i += m.end()
    if name == 'true':
        return True, i
    if name == 'false':
        return False, i
    if name == 'a':
        return 11, i
    if name == 'z':
        while body[i] in ' \t':
            i += 1
        assert body[i] == '['
        n, i = parse_val(body, i + 1)
        while body[i] in ' \t':
            i += 1
        assert body[i] == ']'
        i += 1
        while i < len(body) and body[i] in ' \t':
            i += 1
        if i < len(body) and body[i] == '[':
            m2, i = parse_val(body, i + 1)
            while body[i] in ' \t':
                i += 1
            assert body[i] == ']'
            i += 1
            return ('zref2', n, m2), i
        return ('zref', n), i
    raise SyntaxError(name)

def tok(s):
    body = s[s.index('(') + 1:s.rindex(')')] if '(' in s else s
    v, i = parse_val(body, 0)
    return v

for ln in ops_lines:
    s = ln.strip()
    if s.startswith('Z('):
        z.append(tok(s))
print('ops:', len(z))

def ev(o, depth=0):
    if isinstance(o, tuple):
        if o[0] == 'zref':
            return ev(z[o[1]], depth + 1) if depth < 8 else 'z[%d]…' % o[1]
        if o[0] == 'zref2':
            return ev(z[o[1]][o[2]], depth + 1) if depth < 8 else 'z[%d][%d]…' % (o[1], o[2])
    if isinstance(o, str):
        return o
    if isinstance(o, bool):
        return str(o)
    if isinstance(o, (int, float)):
        return str(o)
    if not isinstance(o, list) or not o:
        return repr(o)
    h = o[0]
    if h == 3 or h == 1:
        return str(o[1])
    if h == 11:
        return ''.join(ev(x, depth + 1) for x in o[1:])
    if h == 6:
        return ev(o[1], depth + 1) + '.' + str(o[2])
    if h == 7:
        sub = o[1]
        if isinstance(sub, list) and sub and sub[0] == 3:
            return '‹' + str(sub[1]) + '›'
        return '‹?›'
    if h == 2:
        op = o[1]
        l = ev(o[2], depth + 1)
        r = ev(o[3], depth + 1)
        return '%s %s %s' % (l, op, r)
    if h == 4:
        return ev(o[1], depth + 1)
    if h == 5:
        return '[' + ','.join(ev(x, depth + 1) for x in o[1:]) + ']'
    return repr(o)

asm = W[582:1563]
recs = []
for idx, ln in enumerate(asm, start=583):
    for m in re.finditer(r"_mz\(z,'([\w-]+)',\[([^\]]*)\]", ln):
        tag = m.group(1)
        parts = [p.strip() for p in m.group(2).split(',') if p.strip()]
        base = 0
        attrs = []
        for k in range(0, len(parts), 2):
            prop = parts[k].strip("'")
            off = int(parts[k + 1])
            if base + off < 0:
                attrs.append((prop, '<字面true>'))
            else:
                real = base + off
                attrs.append((prop, 'z[%d] %s' % (real, ev(z[real])[:140])))
                if base == 0:
                    base = off
        recs.append((idx, 'mz', tag, attrs))
    for m in re.finditer(r"_rz\(z,\w+,'([\w:-]+)',(\d+)", ln):
        n = int(m.group(2))
        recs.append((idx, 'rz', m.group(1), 'z[%d] %s' % (n, ev(z[n])[:160])))
    for m in re.finditer(r"_oz\(z,(\d+)", ln):
        n = int(m.group(1))
        recs.append((idx, 'oz', '', 'z[%d] %s' % (n, ev(z[n])[:160])))
    for m in re.finditer(r"_2z\(z,(\d+),\w+,e(?:,\w+)*,gg,'(\w+)','(\w+)'(?:,'(\w+)')?\)", ln):
        n = int(m.group(1))
        recs.append((idx, 'for', 'items=z[%d] %s' % (n, ev(z[n])[:90]),
                     'item=%s index=%s key=%s' % (m.group(2), m.group(3), m.group(4))))

with open('tools/_word_tree_dump.jsonl', 'w', encoding='utf-8') as f:
    for r in recs:
        f.write(json.dumps(r, ensure_ascii=False) + '\n')
print('recs:', len(recs))
