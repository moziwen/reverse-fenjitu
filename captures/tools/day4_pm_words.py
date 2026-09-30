#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第4天下午场：words skip(1080) 起 740 条（日配额余量 1500-760=740）。"""
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

SKIP=1080; CAP=740; TOTAL=3089; n=0
with open('captures/collections/words.jsonl','a',encoding='utf-8') as f:
    t0=time.time()
    while n<CAP and SKIP+n<TOTAL:
        v=ev(f'wx.cloud.database({{}}).collection("words").skip({SKIP+n}).limit(20).get()')
        data=(v or {}).get('data') if isinstance(v,dict) else None
        if not data:
            print('分页止:', json.dumps(v)[:120], flush=True); break
        for doc in data: f.write(json.dumps(doc,ensure_ascii=False,default=str)+'\n')
        n+=len(data)
        if n%100==0: print(f'words {SKIP+n}/{TOTAL}（本场 {n}/{CAP}）', flush=True)
        time.sleep(random.uniform(3,8))
        if time.time()-t0>14*60: print('!!14min 场次保护停'); break
print('下午场 words', n, '条 → 累计', SKIP+n, '/3089', flush=True)
ws.close(); print('PM DONE')
