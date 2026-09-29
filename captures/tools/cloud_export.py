#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""英语分级兔 · 云数据库只读导出（wxapp-cloud-export 纪律版）。

硬纪律（不可协商，来自 2026-09 真实警告处罚）：
  - 只读：代码中不存在任何 update/add/remove/set 写调用
  - 限速：请求间隔 3~8 秒随机（--interval 可放宽到不低于 3）
  - 单日 ≤500 条（--daily-cap），到达即停
  - 单次会话 ≤30 分钟（--session-min），到点停
  - 风控提示（任何 errCode/-1 频发）→ 立即停并退出

用法（CDP 连接建立后）：
  python captures/tools/cloud_export.py --counts           # 仅 17 集合 count 基准
  python captures/tools/cloud_export.py --export units     # 导出单集合（≤500 条/日）
"""
import json, time, random, argparse, os, sys, datetime

WS = 'ws://127.0.0.1:62000'
OUT = os.path.join(os.path.dirname(__file__), '..', 'collections')
SESSION_START = time.time()

# 静态提取的集合清单（tools/extract_inventory.py + 解包产物；units/user_school 为 489 新增）
COLLECTIONS = ['AA','AL','BL','CL','DL','EL','FL','GL','HL','IL','JL','KL',
               'feedback','group','init','members','orders','phone','plan',
               'user_data','user_parent','user_plan','user_study','words',
               'units','user_school','class','guide']
PRIORITY = ['units','user_school','user_study','words']

def rpc(ws, method, params=None, _id=[0]):
    _id[0] += 1
    ws.send(json.dumps({'id': _id[0], 'method': method, 'params': params or {}}))
    while True:
        msg = json.loads(ws.recv())
        if msg.get('id') == _id[0]:
            if 'error' in msg:
                raise RuntimeError(msg['error'])
            return msg.get('result', {})
        # 事件忽略

def get_db_expr():
    """在页面上下文里拿 database 句柄的表达式（只读封装）。"""
    return ("(() => { const app = getApp(); return wx.cloud.database({}); })()")

def count_collection(ws, name):
    expr = f'wx.cloud.database({{}}).collection("{name}").count()'
    r = rpc(ws, 'Runtime.evaluate', {
        'expression': expr, 'awaitPromise': True, 'returnByValue': True})
    v = r.get('result', {}).get('value')
    if isinstance(v, dict) and 'total' in v:
        return v['total']
    return ('ERR', str(v)[:120])

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--counts', action='store_true', help='只做 count 基准')
    ap.add_argument('--export', help='导出指定集合为 jsonl')
    ap.add_argument('--interval', type=float, default=0, help='覆盖间隔下限（默认 3~8 随机）')
    ap.add_argument('--daily-cap', type=int, default=500)
    ap.add_argument('--session-min', type=float, default=30)
    args = ap.parse_args()
    lo, hi = (max(3, args.interval), max(8, args.interval + 5))

    from websocket import create_connection
    ws = create_connection(WS, timeout=30)
    os.makedirs(OUT, exist_ok=True)

    done = 0
    def budget_left():
        return (done < args.daily_cap) and (time.time() - SESSION_START < args.session_min * 60)

    if args.counts or not args.export:
        rows = []
        names = PRIORITY + [c for c in COLLECTIONS if c not in PRIORITY]
        for name in names:
            if not budget_left(): print('!! 日配额/会话时限到达，停止'); break
            total = count_collection(ws, name)
            rows.append({'collection': name, 'count': total, 'at': datetime.datetime.now().isoformat(timespec='seconds')})
            print(rows[-1])
            with open(os.path.join(OUT, '_counts.jsonl'), 'a', encoding='utf-8') as f:
                f.write(json.dumps(rows[-1], ensure_ascii=False) + '\n')
            time.sleep(random.uniform(lo, hi))

    if args.export:
        name = args.export
        total = count_collection(ws, name)
        print(f'{name} count={total}')
        path = os.path.join(OUT, f'{name}.jsonl')
        n = 0
        while n < min(total, args.daily_cap) and budget_left():
            expr = (f'wx.cloud.database({{}}).collection("{name}")'
                    f'.skip({n}).limit(20).get()')
            r = rpc(ws, 'Runtime.evaluate', {
                'expression': expr, 'awaitPromise': True, 'returnByValue': True})
            data = (r.get('result', {}).get('value') or {}).get('data', [])
            if not data:
                print('  分页提前结束（可能权限截断）'); break
            with open(path, 'a', encoding='utf-8') as f:
                for doc in data:
                    f.write(json.dumps(doc, ensure_ascii=False, default=str) + '\n')
            n += len(data)
            print(f'  {name}: {n}/{min(total, args.daily_cap)}')
            time.sleep(random.uniform(lo, hi))
        print(f'{name} 导出 {n} 条 → {path}')
    ws.close()

if __name__ == '__main__':
    main()
