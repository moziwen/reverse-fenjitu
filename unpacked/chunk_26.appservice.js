$gwx_XC_19=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];
function gz$gwx_XC_19_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'handleClick'])
Z([a,[3,'tui-tag '],[[2,'?:'],[[7],[3,'originLeft']],[1,'tui-origin-left'],[1,'']],[3,' '],[[2,'?:'],[[7],[3,'originRight']],[1,'tui-origin-right'],[1,'']],[3,' '],[[12],[[6],[[7],[3,'parse']],[3,'getClassName']],[[5],[[5],[[7],[3,'shape']]],[[7],[3,'plain']]]],[3,' '],[[12],[[6],[[7],[3,'parse']],[3,'getTypeClass']],[[5],[[5],[[7],[3,'type']]],[[7],[3,'plain']]]]])
Z([[2,'?:'],[[7],[3,'hover']],[1,'tui-tag-opcity'],[1,'']])
Z([3,'150'])
Z([a,[3,'transform:scale('],[[7],[3,'scaleMultiple']],[3,');padding:'],[[7],[3,'padding']],[3,';margin:'],[[7],[3,'margin']],[3,';font-size:'],[[7],[3,'size']],[3,';line-height:'],[[7],[3,'size']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_19=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_19=true;
var x=['./components/tui-tag/tui-tag.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_19_1()
var tCK=_mz(z,'view',['bindtap',0,'class',1,'hoverClass',1,'hoverStayTime',2,'style',3],[],e,s,gg)
var eDK=_n('slot')
_(tCK,eDK)
_(r,tCK)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_19";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_19();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tui-tag/tui-tag.wxml'] = [$gwx_XC_19, './components/tui-tag/tui-tag.wxml'];else __wxAppCode__['components/tui-tag/tui-tag.wxml'] = $gwx_XC_19( './components/tui-tag/tui-tag.wxml' );
	;__wxRoute = "components/tui-tag/tui-tag";__wxRouteBegin = true;__wxAppCurrentFile__="components/tui-tag/tui-tag.js";define("components/tui-tag/tui-tag.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{type:{type:String,value:"primary"},padding:{type:String,value:"16rpx 26rpx"},margin:{type:String,value:"0"},size:{type:String,value:"28rpx"},shape:{type:String,value:"square"},plain:{type:Boolean,value:!1},hover:{type:Boolean,value:!1},scaleMultiple:{type:Number,value:1},originLeft:{type:Boolean,value:!1},originRight:{type:Boolean,value:!1},index:{type:Number,value:0}},methods:{handleClick:function(){this.triggerEvent("click",{index:this.data.index})}}});
},{isPage:false,isComponent:true,currentFile:'components/tui-tag/tui-tag.js'});require("components/tui-tag/tui-tag.js");