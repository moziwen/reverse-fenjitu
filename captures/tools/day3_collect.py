#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第3天：user_school 余 170 收尾全量 + words 前 330 条（count=3089）。"""
import json, time, random
from websocket import create_connection

ws = create_connection('ws://127.0.0.1:62000', timeout=45)
sj = json.load(open('captures/tools/_appservice_ctx.json'))
_id=[0]

def rpc(method, params=None, sess=None, to=30):
    _id[0]+=1
    msg={'id':_id[0],'method':method,'params':params or {}}
    if sess: msg['sessionId']=sess
    ws.send(json.dumps(msg)); ws.settimeout(to)
    t0=time.time()
    while time.time()-t0<to:
        m=json.loads(ws.recv())
        if m.get('id')==_id[0]: return m
    return None

def ev(expr, to=30):
    m=rpc('Runtime.evaluate', {'expression':expr,'awaitPromise':True,'returnByValue':True,
        'contextId':sj['contextId']}, sess=sj['sess'], to=to)
    if m is None: return None
    r=m.get('result',{})
    if 'exceptionDetails' in r: return {'EXC':'...'}
    inner=r.get('result',{})
    return inner.get('value') if isinstance(inner,dict) and 'value' in inner else \
           (inner.get('result',{}).get('value') if isinstance(inner,dict) else None)

def pull(coll, skip0, cap, total, outfile):
    n=0
    with open(outfile,'a',encoding='utf-8') as f:
        t0=time.time()
        while n<cap and skip0+n<total:
            v=ev(f'wx.cloud.database({{}}).collection("{coll}").skip({skip0+n}).limit(20).get()')
            data=(v or {}).get('data') if isinstance(v,dict) else None
            if not data:
                print(f'{coll} 分页止:', json.dumps(v)[:120], flush=True); break
            for doc in data: f.write(json.dumps(doc,ensure_ascii=False,default=str)+'\n')
            n+=len(data)
            print(f'{coll} {skip0+n}/{total}（今日 {n}/{cap}）', flush=True)
            time.sleep(random.uniform(3,8))
            if time.time()-t0>20*60: print('!!20min停'); break
    return n

# 1) user_school 收尾
n1=pull('user_school', 900, 170, 1070, 'captures/collections/user_school.jsonl')
print('user_school 今日', n1, '→ 累计', 900+n1, '/1070', flush=True)
time.sleep(random.uniform(5,8))
# 2) words 前 330 条（170+330=500 = 今日配额）
n2=pull('words', 0, 500-n1, 3089, 'captures/collections/words.jsonl')
print('words 今日', n2, '→ 累计', n2, '/3089', flush=True)
ws.close(); print('DAY3 DONE')
