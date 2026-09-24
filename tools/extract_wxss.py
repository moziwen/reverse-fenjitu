#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""从 page-frame.html 提取每页/组件 wxss（还原 setCssToHead 数组）。

用法: python tools/extract_wxss.py <page-frame.html> <outdir>
规则（铁律见交接文档 §6.1）:
  - 数组元素交替为 字符串片段 / [0,n]（n=原 rpx 值, 输出 n/2 px）/ [1]（opt.suffix 占位, 忽略）
  - 字符串为 JS 转义（\x22 等），先解码为普通字符再拼接
"""
import re, os, sys


def js_unescape(body):
    out, i = [], 0
    while i < len(body):
        c = body[i]
        if c == '\\' and i + 1 < len(body):
            nxt = body[i + 1]
            if nxt == 'x':
                out.append(chr(int(body[i + 2:i + 4], 16)))
                i += 4
                continue
            if nxt == 'u' and i + 5 < len(body):
                out.append(chr(int(body[i + 2:i + 6], 16)))
                i += 6
                continue
            mapping = {'n': '\n', 't': '\t', 'r': '\r', '"': '"',
                       "'": "'", '\\': '\\', '/': '/', 'b': '\b', 'f': '\f'}
            out.append(mapping.get(nxt, nxt))
            i += 2
            continue
        out.append(c)
        i += 1
    return ''.join(out)


def parse_array(text, start):
    """start 指向 '['，配对返回 (list, 末尾下标+1)。"""
    depth, i, in_str = 0, start, False
    while i < len(text):
        c = text[i]
        if in_str:
            if c == '\\':
                i += 2
                continue
            if c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == '[':
                depth += 1
            elif c == ']':
                depth -= 1
                if depth == 0:
                    return decode_array(text[start:i + 1]), i + 1
        i += 1
    raise ValueError('unbalanced array')


def decode_array(arr_text):
    """解析 JS 数组字面量: 元素为字符串或 [op, n]。"""
    body = arr_text.strip()
    items, i, n = [], 1, len(body) - 1
    while i < n:
        c = body[i]
        if c == '"':
            j = i + 1
            while j < n:
                if body[j] == '\\':
                    j += 2
                    continue
                if body[j] == '"':
                    break
                j += 1
            items.append(js_unescape(body[i + 1:j]))
            i = j + 1
        elif c == '[':
            j = body.index(']', i)
            sub = [int(x) if x.strip().lstrip('-').isdigit() else x.strip()
                   for x in body[i + 1:j].split(',') if x.strip()]
            items.append(sub)
            i = j + 1
        else:
            i += 1
    return items


def main(src, outdir):
    t = open(src, encoding='utf-8', errors='ignore').read()
    pat = re.compile(r"__wxAppCode__\['([^']*?\.wxss)'\]=setCssToHead\(", re.S)
    os.makedirs(outdir, exist_ok=True)
    n = 0
    for m in pat.finditer(t):
        key = m.group(1)
        arr, _ = parse_array(t, m.end())
        css = []
        for item in arr:
            if isinstance(item, str):
                css.append(item)
            elif isinstance(item, list):
                if item and item[0] == 0 and len(item) > 1:
                    css.append('%gpx' % (item[1] / 2))  # rpx → px（375pt 宽）
                # op==1 suffix 占位忽略; op==2 可调用片段忽略
        dest = os.path.join(outdir, key.replace('/', '__'))
        with open(dest, 'w', encoding='utf-8') as f:
            f.write(''.join(css))
        n += 1
    print('extracted %d wxss -> %s' % (n, outdir))


if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
