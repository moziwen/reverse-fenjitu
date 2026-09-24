$gwx_XC_10=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];
function gz$gwx_XC_10_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'change'])
Z([a,[3,'tui-popup__transition '],[[4],[[5],[[6],[[7],[3,'ani']],[3,'in']]]]])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'transform']]],[1,';']],[[7],[3,'stylesObject']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_10=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_10=true;
var x=['./components/tui-popup/tui-popup.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_10_1()
var e8B=_v()
_(r,e8B)
if(_oz(z,0,e,s,gg)){e8B.wxVkey=1
var b9B=_mz(z,'view',['bindtap',1,'class',1,'style',2],[],e,s,gg)
var o0B=_n('slot')
_(b9B,o0B)
_(e8B,b9B)
}
e8B.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_10";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_10();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tui-popup/tui-popup.wxml'] = [$gwx_XC_10, './components/tui-popup/tui-popup.wxml'];else __wxAppCode__['components/tui-popup/tui-popup.wxml'] = $gwx_XC_10( './components/tui-popup/tui-popup.wxml' );
	;__wxRoute = "components/tui-popup/tui-popup";__wxRouteBegin = true;__wxAppCurrentFile__="components/tui-popup/tui-popup.js";define("components/tui-popup/tui-popup.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../@swc/runtime/_define_property"),e=require("../../@swc/runtime/_object_spread"),a=require("../../@swc/runtime/_object_spread_props");Component({properties:{show:{type:Boolean,value:!1,observer:function(t){t?this.open():this.close()}},modeClass:{type:Array,value:[]},duration:{type:Number,value:300},styles:{type:Object,value:{position:"fixed",bottom:0,top:0,left:0,right:0,display:"flex","justify-content":"center","align-items":"center"},observer:function(t){this.setData({stylesObject:this.stylesHandle()})}}},data:{isShow:!1,transform:"",ani:{in:"",active:""},stylesObject:""},lifetimes:{attached:function(){this.setData({stylesObject:this.stylesHandle()})}},methods:{stylesHandle:function(){var t=a._(e._({},this.data.styles),{"transition-duration":this.data.duration/1e3+"s"}),s="";for(var r in t)s+=this.toLine(r)+":"+t[r]+";";return s},change:function(){this.triggerEvent("click",{detail:this.data.isShow})},open:function(){var e=this;clearTimeout(this.data.timer);var a="ani.in";this.setData(t._({isShow:!0,transform:""},a,""));var s="";for(var r in this.getTranfrom(!1))"opacity"===r?this.setData(t._({},a,"fade-in")):s+="".concat(this.getTranfrom(!1)[r]," ");this.setData({transform:s},function(){setTimeout(function(){e._animation(!0)},50)})},close:function(t){clearTimeout(this.data.timer),this._animation(!1)},_animation:function(e){var a=this,s=this.getTranfrom(e);this.setData({transform:""});var r="";for(var i in s)"opacity"===i?this.setData(t._({},"ani.in","fade-".concat(e?"out":"in"))):r+="".concat(s[i]," ");this.setData({transform:r}),this.data.timer=setTimeout(function(){e||a.setData({isShow:!1}),a.triggerEvent("change",{detail:a.data.isShow})},this.data.duration)},getTranfrom:function(t){var e={transform:""};return this.data.modeClass.forEach(function(a){switch(a){case"fade":e.opacity=+!!t;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ")}}),e},_modeClassArr:function(t){var e=this.data.modeClass;if("string"==typeof e)return e+"-"+t;var a="";return e.forEach(function(e){a+=e+"-"+t+","}),a.substr(0,a.length-1)},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}});
},{isPage:false,isComponent:true,currentFile:'components/tui-popup/tui-popup.js'});require("components/tui-popup/tui-popup.js");