$gwx_XC_46=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
if(typeof global==='undefined'){if (typeof __GWX_GLOBAL__==='undefined')global={};else global=__GWX_GLOBAL__;}if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_46 || [];
function gz$gwx_XC_46_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tui-countdown-class tui-countdown-box'])
Z([[7],[3,'days']])
Z([3,'tui-countdown-item'])
Z([a,[3,'background:'],[[7],[3,'backgroundColor']],[3,';border-color:'],[[7],[3,'borderColor']],[3,';width:'],[[12],[[6],[[7],[3,'parse']],[3,'getWidth']],[[5],[[5],[[7],[3,'d']]],[[7],[3,'width']]]],[3,'rpx;height:'],[[7],[3,'height']],[3,'rpx']])
Z([a,[3,'tui-countdown-time '],[[2,'?:'],[[7],[3,'scale']],[1,'tui-countdown-scale'],[1,'']]])
Z([a,[3,'font-size:'],[[7],[3,'size']],[3,'rpx;color:'],[[7],[3,'color']],[3,';line-height:'],[[7],[3,'size']],z[3][9]])
Z([a,[[7],[3,'d']]])
Z(z[1])
Z([a,[3,'tui-countdown-colon '],[[2,'?:'],[[2,'=='],[[7],[3,'borderColor']],[1,'transparent']],[1,'tui-colon-pad'],[1,'']]])
Z([a,[3,'line-height:'],[[7],[3,'colonSize']],[3,'rpx;font-size:'],[[7],[3,'colonSize']],z[5][3],[[7],[3,'colonColor']]])
Z([a,[[2,'?:'],[[7],[3,'isColon']],[1,':'],[1,'天']]])
Z([[7],[3,'hours']])
Z(z[2])
Z([a,z[3][1],z[3][2],z[3][3],z[3][4],z[3][5],[[2,'+'],[[12],[[6],[[7],[3,'parse']],[3,'getWidth']],[[5],[[5],[[7],[3,'h']]],[[7],[3,'width']]]],[1,'rpx']],[3,';height:'],[[2,'+'],[[7],[3,'height']],[1,'rpx']]])
Z([a,z[4][1],z[4][2]])
Z([a,z[5][1],[[2,'+'],[[7],[3,'size']],[1,'rpx']],[3,';color:'],z[5][4],z[5][5],[[2,'+'],[[7],[3,'size']],[1,'rpx']]])
Z([a,[[7],[3,'h']]])
Z(z[11])
Z([a,z[8][1],z[8][2]])
Z([a,z[9][1],[[2,'+'],[[7],[3,'colonSize']],[1,'rpx']],[3,';font-size:'],[[2,'+'],[[7],[3,'colonSize']],[1,'rpx']],z[15][3],z[9][6]])
Z([a,[[2,'?:'],[[7],[3,'isColon']],[1,':'],[1,'时']]])
Z([[7],[3,'minutes']])
Z(z[2])
Z([a,z[3][1],z[3][2],z[3][3],z[3][4],z[3][5],[[2,'+'],[[12],[[6],[[7],[3,'parse']],[3,'getWidth']],[[5],[[5],[[7],[3,'i']]],[[7],[3,'width']]]],[1,'rpx']],z[13][7],z[13][8]])
Z([a,z[4][1],z[4][2]])
Z([a,z[5][1],z[15][2],z[15][3],z[5][4],z[5][5],z[15][2]])
Z([a,[[7],[3,'i']]])
Z(z[21])
Z([a,z[8][1],z[8][2]])
Z([a,z[9][1],z[19][2],z[19][3],z[19][2],z[15][3],z[9][6]])
Z([a,[[2,'?:'],[[7],[3,'isColon']],[1,':'],[1,'分']]])
Z([[7],[3,'seconds']])
Z(z[2])
Z([a,z[3][1],z[3][2],z[3][3],z[3][4],z[3][5],[[2,'+'],[[12],[[6],[[7],[3,'parse']],[3,'getWidth']],[[5],[[5],[[7],[3,'s']]],[[7],[3,'width']]]],[1,'rpx']],z[13][7],z[13][8]])
Z([a,z[4][1],z[4][2]])
Z([a,z[5][1],z[15][2],z[15][3],z[5][4],z[5][5],z[15][2]])
Z([a,[[7],[3,'s']]])
Z([[2,'&&'],[[7],[3,'seconds']],[[2,'!'],[[7],[3,'isColon']]]])
Z([a,z[8][1],z[8][2]])
Z([a,z[9][1],z[9][2],z[9][3],z[9][2],z[5][3],z[9][6]])
Z([a,[[2,'?:'],[[7],[3,'unitEn']],[1,'s'],[1,'秒']]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'seconds']],[[7],[3,'isMs']]],[[7],[3,'isColon']]])
Z([3,'tui-countdown-colon'])
Z([a,z[9][1],z[9][2],z[9][3],z[9][2],[3,'rpx ;color:'],z[9][6]])
Z([3,'.'])
Z([[2,'&&'],[[7],[3,'seconds']],[[7],[3,'isMs']]])
Z([3,'tui-countdown__ms'])
Z([a,z[3][1],z[3][2],z[3][3],z[3][4],z[19][3],[[7],[3,'msSize']],z[5][3],[[7],[3,'msColor']],z[13][7],z[3][8],[3,'rpx;width:'],[[2,'?:'],[[2,'>'],[[7],[3,'msWidth']],[1,0]],[[2,'+'],[[7],[3,'msWidth']],[1,'rpx']],[1,'auto']]])
Z([[2,'?:'],[[7],[3,'ani']],[1,'tui-ms__list'],[1,'']])
Z([[7],[3,'ms']])
Z([3,'index'])
Z([3,'tui-ms__item'])
Z([a,[3,'height:'],z[3][8],z[3][9]])
Z(z[4][2])
Z([a,[[7],[3,'item']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_46_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_46_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_46=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_46=true;
var x=['./components/tui-countdown/tui-countdown.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_46_1()
var oLQD=_n('view')
_rz(z,oLQD,'class',0,e,s,gg)
var lMQD=_v()
_(oLQD,lMQD)
if(_oz(z,1,e,s,gg)){lMQD.wxVkey=1
var hWQD=_mz(z,'view',['class',2,'style',1],[],e,s,gg)
var oXQD=_mz(z,'view',['class',4,'style',1],[],e,s,gg)
var cYQD=_oz(z,6,e,s,gg)
_(oXQD,cYQD)
_(hWQD,oXQD)
_(lMQD,hWQD)
}
var aNQD=_v()
_(oLQD,aNQD)
if(_oz(z,7,e,s,gg)){aNQD.wxVkey=1
var oZQD=_mz(z,'view',['class',8,'style',1],[],e,s,gg)
var l1QD=_oz(z,10,e,s,gg)
_(oZQD,l1QD)
_(aNQD,oZQD)
}
var tOQD=_v()
_(oLQD,tOQD)
if(_oz(z,11,e,s,gg)){tOQD.wxVkey=1
var a2QD=_mz(z,'view',['class',12,'style',1],[],e,s,gg)
var t3QD=_mz(z,'view',['class',14,'style',1],[],e,s,gg)
var e4QD=_oz(z,16,e,s,gg)
_(t3QD,e4QD)
_(a2QD,t3QD)
_(tOQD,a2QD)
}
var ePQD=_v()
_(oLQD,ePQD)
if(_oz(z,17,e,s,gg)){ePQD.wxVkey=1
var b5QD=_mz(z,'view',['class',18,'style',1],[],e,s,gg)
var o6QD=_oz(z,20,e,s,gg)
_(b5QD,o6QD)
_(ePQD,b5QD)
}
var bQQD=_v()
_(oLQD,bQQD)
if(_oz(z,21,e,s,gg)){bQQD.wxVkey=1
var x7QD=_mz(z,'view',['class',22,'style',1],[],e,s,gg)
var o8QD=_mz(z,'view',['class',24,'style',1],[],e,s,gg)
var f9QD=_oz(z,26,e,s,gg)
_(o8QD,f9QD)
_(x7QD,o8QD)
_(bQQD,x7QD)
}
var oRQD=_v()
_(oLQD,oRQD)
if(_oz(z,27,e,s,gg)){oRQD.wxVkey=1
var c0QD=_mz(z,'view',['class',28,'style',1],[],e,s,gg)
var hARD=_oz(z,30,e,s,gg)
_(c0QD,hARD)
_(oRQD,c0QD)
}
var xSQD=_v()
_(oLQD,xSQD)
if(_oz(z,31,e,s,gg)){xSQD.wxVkey=1
var oBRD=_mz(z,'view',['class',32,'style',1],[],e,s,gg)
var cCRD=_mz(z,'view',['class',34,'style',1],[],e,s,gg)
var oDRD=_oz(z,36,e,s,gg)
_(cCRD,oDRD)
_(oBRD,cCRD)
_(xSQD,oBRD)
}
var oTQD=_v()
_(oLQD,oTQD)
if(_oz(z,37,e,s,gg)){oTQD.wxVkey=1
var lERD=_mz(z,'view',['class',38,'style',1],[],e,s,gg)
var aFRD=_oz(z,40,e,s,gg)
_(lERD,aFRD)
_(oTQD,lERD)
}
var fUQD=_v()
_(oLQD,fUQD)
if(_oz(z,41,e,s,gg)){fUQD.wxVkey=1
var tGRD=_mz(z,'view',['class',42,'style',1],[],e,s,gg)
var eHRD=_oz(z,44,e,s,gg)
_(tGRD,eHRD)
_(fUQD,tGRD)
}
var cVQD=_v()
_(oLQD,cVQD)
if(_oz(z,45,e,s,gg)){cVQD.wxVkey=1
var bIRD=_mz(z,'view',['class',46,'style',1],[],e,s,gg)
var oJRD=_n('view')
_rz(z,oJRD,'class',48,e,s,gg)
var xKRD=_v()
_(oJRD,xKRD)
var oLRD=function(cNRD,fMRD,hORD,gg){
var cQRD=_mz(z,'view',['class',51,'style',1],[],cNRD,fMRD,gg)
var oRRD=_n('view')
_rz(z,oRRD,'class',53,cNRD,fMRD,gg)
var lSRD=_oz(z,54,cNRD,fMRD,gg)
_(oRRD,lSRD)
_(cQRD,oRRD)
_(hORD,cQRD)
return hORD
}
xKRD.wxXCkey=2
_2z(z,49,oLRD,e,s,gg,xKRD,'item','index','index')
_(bIRD,oJRD)
_(cVQD,bIRD)
}
lMQD.wxXCkey=1
aNQD.wxXCkey=1
tOQD.wxXCkey=1
ePQD.wxXCkey=1
bQQD.wxXCkey=1
oRQD.wxXCkey=1
xSQD.wxXCkey=1
oTQD.wxXCkey=1
fUQD.wxXCkey=1
cVQD.wxXCkey=1
_(r,oLQD)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
outerGlobal.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_46";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(outerGlobal.__webview_engine_version__)!='undefined'&&outerGlobal.__webview_engine_version__+1e-6>=0.02+1e-6&&outerGlobal.__mergeData__)
{
env=outerGlobal.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(outerGlobal.__webview_engine_version__)=='undefined'|| outerGlobal.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_46();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tui-countdown/tui-countdown.wxml'] = [$gwx_XC_46, './components/tui-countdown/tui-countdown.wxml'];else __wxAppCode__['components/tui-countdown/tui-countdown.wxml'] = $gwx_XC_46( './components/tui-countdown/tui-countdown.wxml' );
	
var noCss=typeof __vd_version_info__!=='undefined'&&__vd_version_info__.noCss===true;if(!noCss){__wxAppCode__['components/tui-countdown/tui-countdown.wxss']=setCssToHead([".",[1],"tui-countdown-box,.",[1],"tui-countdown-item{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.",[1],"tui-countdown-item{border:",[0,1]," solid;border-radius:",[0,6],";-webkit-justify-content:center;justify-content:center;padding:",[0,2],";-webkit-transform:translateZ(0);transform:translateZ(0);white-space:nowrap}\n.",[1],"tui-countdown-time{margin:0;padding:0}\n.",[1],"tui-countdown-colon{display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding:0 ",[0,5],"}\n.",[1],"tui-colon-pad{padding:0!important}\n.",[1],"tui-countdown-scale{-webkit-transform:scale(.9);transform:scale(.9);-webkit-transform-origin:center center;transform-origin:center center}\n.",[1],"tui-countdown__ms{border:",[0,1]," solid;border-radius:",[0,6],";overflow:hidden}\n.",[1],"tui-ms__list{-webkit-animation:loop 1s steps(10) infinite;animation:loop 1s steps(10) infinite}\n@-webkit-keyframes loop{from{-webkit-transform:translateY(0);transform:translateY(0)}\nto{-webkit-transform:translateY(-100%);transform:translateY(-100%)}\n}@keyframes loop{from{-webkit-transform:translateY(0);transform:translateY(0)}\nto{-webkit-transform:translateY(-100%);transform:translateY(-100%)}\n}.",[1],"tui-ms__item{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n",],undefined,{path:"./components/tui-countdown/tui-countdown.wxss"});
}