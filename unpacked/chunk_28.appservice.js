$gwx_XC_21=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_21 || [];
function gz$gwx_XC_21_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'lists']])
Z([3,'index'])
Z([3,'clickItem'])
Z([3,'tui-content'])
Z([[7],[3,'index']])
Z([[2,'?:'],[[2,'=='],[[7],[3,'index']],[[7],[3,'clickId']]],[1,'#ff9b6a'],[1,'#333']])
Z([3,'38'])
Z([[7],[3,'share']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_21_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_21_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_21=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_21=true;
var x=['./pages/audio/audio.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_21_1()
var oTM=_v()
_(r,oTM)
var fUM=function(hWM,cVM,oXM,gg){
var oZM=_mz(z,'view',['bindtap',2,'class',1,'data-id',2],[],hWM,cVM,gg)
var l1M=_mz(z,'tui-list-cell',['color',5,'size',1],[],hWM,cVM,gg)
_(oZM,l1M)
_(oXM,oZM)
return oXM
}
oTM.wxXCkey=4
_2z(z,0,fUM,e,s,gg,oTM,'item','index','index')
var xSM=_v()
_(r,xSM)
if(_oz(z,7,e,s,gg)){xSM.wxVkey=1
}
xSM.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_21";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_21();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/audio/audio.wxml'] = [$gwx_XC_21, './pages/audio/audio.wxml'];else __wxAppCode__['pages/audio/audio.wxml'] = $gwx_XC_21( './pages/audio/audio.wxml' );
	;__wxRoute = "pages/audio/audio";__wxRouteBegin = true;__wxAppCurrentFile__="pages/audio/audio.js";define("pages/audio/audio.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=wx.cloud.database({});t.command,getApp(),t.command.aggregate,Page({data:{level:"",card_id:"",audioPlayStatus:0,cover:"",audio:"",clickId:-1,lists:[],share:!1},onLoad:function(t){console.log("onLoad");var a="";t.id&&(a=t.id),t.scene&&(a=decodeURIComponent(t.scene),this.setData({lists:[],audio:"",share:!0}));var e=a.indexOf("-"),i=a.substring(0,e);console.log("detail",a,i),this.setData({level:i,card_id:a}),this.bindAudio(),t.task?this.getAudioDetail(0):this.getAudioDetail(1)},bindAudio:function(){var t=this;this.innerAudioContext=wx.createInnerAudioContext(),this.innerAudioContext.onPlay(function(){console.log("onPlay"),t.setData({audioPlayStatus:1})}),this.innerAudioContext.onPause(function(){t.setData({audioPlayStatus:2})}),this.innerAudioContext.onEnded(function(){console.log("onEnded"),t.setData({audioPlayStatus:0,clickId:-1})}),this.innerAudioContext.onError(function(){console.log("onError"),t.setData({audioPlayStatus:0}),wx.showToast({title:"播放音频出错",icon:"none"})})},onUnload:function(){this.innerAudioContext&&(this.innerAudioContext.destroy(),this.innerAudioContext=null)},getDatabaseLevel:function(){var t="AA";return"A"==this.data.level&&(t="AL"),"B"==this.data.level&&(t="BL"),"C"==this.data.level&&(t="CL"),"D"==this.data.level&&(t="DL"),"E"==this.data.level&&(t="EL"),"F"==this.data.level&&(t="FL"),"G"==this.data.level&&(t="GL"),"H"==this.data.level&&(t="HL"),"I"==this.data.level&&(t="IL"),"J"==this.data.level&&(t="JL"),"K"==this.data.level&&(t="KL"),t},getAudioDetail:function(a){var e=this,i=e.getDatabaseLevel();t.collection(i).where({id:e.data.card_id}).field({cover:!0,title:!0,list:!0}).get({success:function(t){if(e.setData({cover:t.data[0].cover.replace(".jpg","0.jpg"),title:t.data[0].title,lists:t.data[0].list}),1==a){var i="https://qianyufang.top/"+e.data.level+"/Audio/"+e.data.card_id+".mp3";e.setData({audio:i}),e.playAudio()}}})},playAudio:function(){0==this.data.audioPlayStatus?(this.setData({clickId:-1}),this.innerAudioContext.src=this.data.audio,this.innerAudioContext.loop=!1,console.log("开始播放"),this.innerAudioContext.play()):1==this.data.audioPlayStatus?(console.log("暂停播放"),this.innerAudioContext.pause()):2==this.data.audioPlayStatus&&(console.log("继续播放"),this.innerAudioContext.play())},clickItem:function(t){var a=parseInt(t.currentTarget.dataset.id);if(a==this.data.clickId)this.setData({clickId:-1,audioPlayStatus:0}),this.innerAudioContext.stop();else{this.setData({clickId:a,audioPlayStatus:1});var e=encodeURI(decodeURIComponent(this.data.lists[a].img.replace(".jpg",".mp3")));this.innerAudioContext.src=e,this.innerAudioContext.play()}},onShareAppMessage:function(){return{title:this.data.level+":"+this.data.title,path:"/pages/audio/audio?level="+this.data.level+"&id="+this.data.id,imageUrl:this.data.cover}},onShareTimeline:function(){return{title:this.data.level+":"+this.data.title,path:"level="+this.data.level+"&id="+this.data.id,imageUrl:this.data.cover}},clickBtn:function(){this.innerAudioContext&&(this.innerAudioContext.stop(),this.innerAudioContext=null),wx.reLaunch({url:"/pages/index/index"})}});
},{isPage:true,isComponent:true,currentFile:'pages/audio/audio.js'});require("pages/audio/audio.js");