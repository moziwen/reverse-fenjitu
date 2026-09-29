#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""小程序重开后的一键会话重建：定位 appservice context → 保存 _appservice_ctx.json。"""
import json, time
from websocket import create_connection

ws = create_connection('ws://127.0.0.1:62000', timeout=25)
def rpc(i, method, params=None, sess=None, to=20):
    msg={'id':i,'method':method,'params':params or {}}
    if sess: msg['sessionId']=sess
    ws.send(json.dumps(msg)); ws.settimeout(to); t0=time.time()
    evs=[]
    while time.time()-t0<to:
        m=json.loads(ws.recv())
        if m.get('id')==i: return m, evs
        evs.append(m)
    return None, evs

ts=rpc(1,'Target.getTargets')[0]['result']['targetInfos']
apps=[t for t in ts if 'wx62876f2ba0772875' in str(t.get('url') or '')]
if not apps:
    print('未找到小程序 target——请确认小程序已打开'); raise SystemExit(1)
app=apps[0]
r,_=rpc(2,'Target.attachToTarget',{'targetId':app['targetId'],'flatten':True})
sess=r['result']['sessionId']
rpc(3,'Runtime.enable', sess=sess)
time.sleep(1.5)
# 收上下文事件
ws.settimeout(2); ctxs=[]; t0=time.time()
while time.time()-t0<3:
    try: m=json.loads(ws.recv())
    except Exception: break
    if m.get('method')=='Runtime.executionContextCreated':
        ctxs.append(m['params']['context']['id'])
if not ctxs: ctxs=[1,2,3,4,5]
for cid in ctxs:
    v,_=rpc(100+cid,'Runtime.evaluate',
            {'expression':'(typeof wx)+"/"+(typeof wx.cloud)','returnByValue':True,'contextId':cid}, sess=sess)
    val=((v or {}).get('result',{}).get('result',{}) or {}).get('value')
    print('ctx',cid,'→',val)
    if val and val.startswith('object'):
        json.dump({'sess':sess,'contextId':cid,'targetId':app['targetId']}, open('captures/tools/_appservice_ctx.json','w'))
        print('*** APPSERVICE 锁定 ctx', cid, '已保存')
        ws.close(); raise SystemExit(0)
print('全部 context 均非 appservice'); ws.close(); raise SystemExit(2)
