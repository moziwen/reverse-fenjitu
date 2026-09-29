#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第1天导出：定位 appservice → class 复核 → units 全量 → guide 复核。单连接内完成。"""
import json, time, random
from websocket import create_connection

ws = create_connection('ws://127.0.0.1:62000', timeout=45)
_id=[0]

def locate():
    ts=rpc('Target.getTargets')[0]['result']['targetInfos']
    app=[t for t in ts if 'wx62876f2ba0772875' in str(t.get('url') or '')][0]
    r,_=rpc('Target.attachToTarget',{'targetId':app['targetId'],'flatten':True})
    sess=r['result']['sessionId']
    rpc('Runtime.enable', sess=sess)
    time.sleep(1.2)
    ws.settimeout(2); ctxs=[]; t0=time.time()
    while time.time()-t0<2.5:
        try: m=json.loads(ws.recv())
        except Exception: break
        if m.get('method')=='Runtime.executionContextCreated':
            ctxs.append(m['params']['context']['id'])
    ws.settimeout(45)
    if not ctxs: ctxs=[1,2,3,4,5]
    for cid in ctxs:
        v=ev(f'typeof wx', cid=cid, sess=sess)
        if v=='object':
            print(f'[locate] APPSERVICE = ctx {cid}', flush=True)
            return sess, cid
    raise RuntimeError('未找到 appservice')

def rpc(method, params=None, sess=None, to=30):
    _id[0]+=1
    msg={'id':_id[0],'method':method,'params':params or {}}
    if sess: msg['sessionId']=sess
    ws.send(json.dumps(msg)); ws.settimeout(to); t0=time.time()
    evs=[]
    while time.time()-t0<to:
        m=json.loads(ws.recv())
        if m.get('id')==_id[0]: return m, evs
        evs.append(m)
    return None, evs

def ev(expr, cid=None, sess=None, to=30):
    p={'expression':expr,'awaitPromise':True,'returnByValue':True}
    if cid: p['contextId']=cid
    m,evs=rpc('Runtime.evaluate', p, sess=sess, to=to)
    r=(m or {}).get('result',{})
    if 'exceptionDetails' in r:
        return {'EXC': (r['exceptionDetails'].get('exception',{}).get('description') or '')[:200]}
    inner=r.get('result',{})
    if isinstance(inner,dict) and 'value' in inner:
        return inner.get('value')
    return inner.get('result',{}).get('value') if isinstance(inner,dict) else None

sess, cid = locate()

def cloud(expr):
    global sess, cid
    v=ev(expr, cid=cid, sess=sess)
    if isinstance(v,dict) and 'EXC' in v: return v
    if v is None:
        # 上下文可能失效，重定位一次
        print('[relocate] ...', flush=True)
        sess, cid = locate()
        v=ev(expr, cid=cid, sess=sess)
    return v

# 1) class 复核
print('class get →', json.dumps(cloud('wx.cloud.database({}).collection("class").limit(1).get()'))[:300], flush=True)
time.sleep(random.uniform(3,6))

# 2) units 全量
n, total = 0, 32
with open('captures/collections/units.jsonl','a',encoding='utf-8') as f:
    while n < total:
        v=cloud(f'wx.cloud.database({{}}).collection("units").skip({n}).limit(20).get()')
        data=(v or {}).get('data') if isinstance(v,dict) else None
        if not data:
            print('units 分页止:', json.dumps(v)[:120], flush=True); break
        for doc in data: f.write(json.dumps(doc,ensure_ascii=False,default=str)+'\n')
        n+=len(data); print(f'units {n}/{total}', flush=True)
        if n<total: time.sleep(random.uniform(3,8))
print('units 共', n, '条', flush=True)
time.sleep(random.uniform(3,6))

# 3) guide
print('guide →', json.dumps(cloud('wx.cloud.database({}).collection("guide").count()')), flush=True)
ws.close(); print('DAY1-PART1 DONE')
