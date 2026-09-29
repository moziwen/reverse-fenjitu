#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""第1天：user_school 前 400 条（count=1070，余 672 拆次日）。"""
import json, time, random
from websocket import create_connection

ws = create_connection('ws://127.0.0.1:62000', timeout=45)
_id=[0]

def rpc(method, params=None, sess=None, to=30):
    _id[0]+=1
    msg={'id':_id[0],'method':method,'params':params or {}}
    if sess: msg['sessionId']=sess
    ws.send(json.dumps(msg)); ws.settimeout(to)
    t0=time.time()
    while time.time()-t0<to:
        m=json.loads(ws.recv())
        if m.get('id')==_id[0]:
            return m
    return None

def ev(expr, cid=None, sess=None, to=30):
    p={'expression':expr,'awaitPromise':True,'returnByValue':True}
    if cid: p['contextId']=cid
    m=rpc('Runtime.evaluate', p, sess=sess, to=to)
    if m is None: return None
    r=m.get('result',{})
    if 'exceptionDetails' in r:
        return {'EXC':'...'}
    inner=r.get('result',{})
    if isinstance(inner,dict) and 'value' in inner:
        return inner.get('value')
    if isinstance(inner,dict):
        return inner.get('result',{}).get('value')
    return None

def locate():
    ts=rpc('Target.getTargets')
    infos=ts['result']['targetInfos']
    apps=[t for t in infos if 'wx62876f2ba0772875' in str(t.get('url') or '')]
    if not apps: raise RuntimeError('小程序不在')
    r=rpc('Target.attachToTarget',{'targetId':apps[0]['targetId'],'flatten':True})
    sess=r['result']['sessionId']
    rpc('Runtime.enable', sess=sess)
    time.sleep(1.2)
    cid=None
    ws.settimeout(2); t0=time.time(); ctxs=[]
    while time.time()-t0<2.5:
        try: m=json.loads(ws.recv())
        except Exception: break
        if m.get('method')=='Runtime.executionContextCreated':
            ctxs.append(m['params']['context']['id'])
    ws.settimeout(30)
    for c in (ctxs or [4,5,6,1,2,3]):
        if ev('typeof wx', c, sess)=='object':
            cid=c; break
    if not cid: raise RuntimeError('未定位到 appservice')
    print('ctx =', cid, flush=True)
    return sess, cid

sess,cid=locate()
total=1070; cap_today=400; n=0
with open('captures/collections/user_school.jsonl','a',encoding='utf-8') as f:
    t0=time.time()
    while n < cap_today and n < total:
        v=ev(f'wx.cloud.database({{}}).collection("user_school").skip({n}).limit(20).get()', cid, sess)
        data=(v or {}).get('data') if isinstance(v,dict) else None
        if not data:
            print('分页止:', json.dumps(v)[:120], flush=True); break
        for doc in data:
            f.write(json.dumps(doc,ensure_ascii=False,default=str)+'\n')
        n+=len(data)
        print(f'user_school {n}/{cap_today}', flush=True)
        time.sleep(random.uniform(3,7))
        if time.time()-t0>20*60:
            print('!!20min停'); break
print('user_school 今日', n, '条', flush=True)
ws.close()
print('DAY1 DONE')
