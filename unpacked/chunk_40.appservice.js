$gwx_XC_35=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_35 || [];
function gz$gwx_XC_35_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[7],[3,'dataList']])
Z([3,'index'])
Z([3,'clickLevel'])
Z([[6],[[7],[3,'item']],[3,'current']])
Z([[7],[3,'index']])
Z([3,'#f7f7f7'])
Z([3,'没有更多了'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_35_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_35_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_35=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_35=true;
var x=['./pages/search/search.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_35_1()
var oP2=_n('view')
_rz(z,oP2,'class',0,e,s,gg)
var cQ2=_v()
_(oP2,cQ2)
var oR2=function(aT2,lS2,tU2,gg){
var bW2=_mz(z,'tui-collapse',['bindclick',3,'current',1,'index',2],[],aT2,lS2,gg)
_(tU2,bW2)
return tU2
}
cQ2.wxXCkey=4
_2z(z,1,oR2,e,s,gg,cQ2,'item','index','index')
var oX2=_mz(z,'tui-nomore',['backgroundColor',6,'text',1],[],e,s,gg)
_(oP2,oX2)
_(r,oP2)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_35";var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
;g="";
return root;
}
}
}
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_35();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/search/search.wxml'] = [$gwx_XC_35, './pages/search/search.wxml'];else __wxAppCode__['pages/search/search.wxml'] = $gwx_XC_35( './pages/search/search.wxml' );
	;__wxRoute = "pages/search/search";__wxRouteBegin = true;__wxAppCurrentFile__="pages/search/search.js";define("pages/search/search.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../@swc/runtime/_define_property"),e=wx.cloud.database({});e.command,getApp(),e.command.aggregate;var a=["AA","A","B","C","D","E","F","G","H","I","J","K"],n=!1;Page({data:{key:"",searchResult:[],pageIndex:0,dataList:[{current:-1,name:"AA",num:108,list:[]},{current:-1,name:"A",num:102,list:[]},{current:-1,name:"B",num:102,list:[]},{current:-1,name:"C",num:102,list:[]},{current:-1,name:"D",num:96,list:[]},{current:-1,name:"E",num:90,list:[]},{current:-1,name:"F",num:84,list:[]},{current:-1,name:"G",num:84,list:[]},{current:-1,name:"H",num:60,list:[]},{current:-1,name:"I",num:60,list:[]},{current:-1,name:"J",num:60,list:[]},{current:-1,name:"K",num:60,list:[]}]},cleanKey:function(){this.setData({key:"",searchResult:[]});for(var e=0;e<this.data.dataList.length;e++){var a="dataList["+e+"].list";this.setData(t._({},a,[]))}},inputKey:function(t){var e=t.detail.value;this.setData({key:e,pageIndex:0,searchResult:[]})},searchResult:function(){if(0==this.data.key.length)return void wx.showToast({title:"请输入单词",icon:"error"});if(this.data.key.length<3)return void wx.showToast({title:"请至少输入三个字符",icon:"none"});if(!0!=n){n=!0,setTimeout(function(){n=!1},1500),wx.showLoading({title:"查询中"});for(var t=0;t<a.length;t++)this.getLevelCards(t,a[t]);setTimeout(function(){wx.hideLoading()},1500)}},getLevelCards:function(a,n){var i=this,r=i.getDatabaseLevel(n);e.collection(r).where({title:new e.RegExp({regexp:i.data.key,options:"i"})}).field({_id:!1,id:!0,index:!0,title:!0,cover:!0}).limit(9).orderBy("index","asc").get({success:function(e){var n="dataList["+a+"].list";0!=e.data.length?i.setData(t._({},n,e.data)):i.setData(t._({},n,[]))}})},clickLevel:function(e){var a=e.detail.index,n=this.data.dataList[a],i="dataList[".concat(a,"].current");console.log("change",i),this.setData(t._({},i,n.current==a?-1:a))},goCardDetail:function(t){var e=t.currentTarget.dataset.id;wx.navigateTo({url:"../card/card?id="+e})},getDatabaseLevel:function(t){var e="AA";return"A"==t&&(e="AL"),"B"==t&&(e="BL"),"C"==t&&(e="CL"),"D"==t&&(e="DL"),"E"==t&&(e="EL"),"F"==t&&(e="FL"),"G"==t&&(e="GL"),"H"==t&&(e="HL"),"I"==t&&(e="IL"),"J"==t&&(e="JL"),"K"==t&&(e="KL"),e}});
},{isPage:true,isComponent:true,currentFile:'pages/search/search.js'});require("pages/search/search.js");