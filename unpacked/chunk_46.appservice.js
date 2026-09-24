$gwx_XC_41=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];
function gz$gwx_XC_41_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([1,false])
Z([3,'hideModal'])
Z([1,true])
Z([[7],[3,'modalReply']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_41=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_41=true;
var x=['./pages/vip/vip.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_41_1()
var o45=_mz(z,'tui-list-cell',['unlined',-1,'hover',0],[],e,s,gg)
_(r,o45)
var f55=_mz(z,'tui-modal',['fadeIn',-1,'bindcancel',1,'custom',1,'show',2],[],e,s,gg)
_(r,f55)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_41";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_41();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/vip/vip.wxml'] = [$gwx_XC_41, './pages/vip/vip.wxml'];else __wxAppCode__['pages/vip/vip.wxml'] = $gwx_XC_41( './pages/vip/vip.wxml' );
	;__wxRoute = "pages/vip/vip";__wxRouteBegin = true;__wxAppCurrentFile__="pages/vip/vip.js";define("pages/vip/vip.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";var t=getApp(),e=wx.cloud.database({}),a=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js");e.command;var o="点击即可获取VIP权益",n="",i=0,d="oq1hh46zrYD75GEZZ3MawlHUA5ns";Page({data:{money_today:0,money_android:0,money_apple:0,phone:"",virtualPay_shenhe:!1,lists_question:[],replyContent:""},onLoad:function(a){var o=this;d!=t.globalData.openid?wx.reLaunch({url:"/pages/index/index"}):(o.countMoneyToday(),o.getFeedback(),e.collection("init").doc("pay_id").get({success:function(t){o.setData({virtualPay_shenhe:t.data.virtualPay_shenhe})}}))},countMoneyToday:function(){var a=this;e.collection("orders").where({date:t.globalData.today_date,order_status:"finished"}).get({success:function(t){if(0!=t.data.length){for(var e=0,o=0,n=0,i=0;i<t.data.length;i++)e=a.addFloatWithTwoDecimals(e,t.data[i].money),"ios"==t.data[i].platform?n=a.addFloatWithTwoDecimals(n,t.data[i].money):o=a.addFloatWithTwoDecimals(o,t.data[i].money);a.setData({money_today:e,money_android:o,money_apple:n})}}})},addFloatWithTwoDecimals:function(t,e){return Number(((Math.round(100*t)+Math.round(100*e))/100).toFixed(2))},getFeedback:function(){var t=this;e.collection("feedback").where({notice:!0}).get({success:function(e){t.setData({lists_question:e.data})}})},click:function(t){var e=parseInt(t.currentTarget.dataset.id);1==e&&(o="点击即可成为永久VIP会员",i=1,n="https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/vip/vip1.png"),2==e&&(o="点击即可获取1年VIP会员",i=2,n="https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/vip/vip2.png"),3==e&&(o="点击即可获取1个月VIP会员",i=3,n="https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/vip/vip3.png"),4==e&&(o="点击即可获取6个月VIP会员",i=4,n="https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/public/vip/vip4.png")},onShareAppMessage:function(){var e=new Date().getTime();return console.log("onShareAppMessage",o,i,e),{title:o,path:"/pages/index/index?manage_vip="+t.globalData.openid+"&vip="+i+"&tag="+e,imageUrl:n}},writePhone:function(t){console.log("writePhone",t);var e=t.detail.value;this.setData({phone:e})},checkTitle:function(t){var e="VIP会员";return 1==t&&(e="永久VIP"),2==t&&(e="一年VIP"),3==t&&(e="一个月VIP"),4==t&&(e="六个月VIP"),6==t&&(e="三个月VIP"),e},submitPhone:function(o){var n=this,i=parseInt(o.currentTarget.dataset.id);t.globalData.openid!=d?wx.navigateBack():11!=n.data.phone.length?wx.showToast({title:"长度须为11位",icon:"error"}):e.collection("phone").where({phone:n.data.phone}).get({success:function(t){var o=n.checkTitle(i);if(0==t.data.length){var d=new Date;e.collection("phone").add({data:{vip:i,title:o,phone:n.data.phone,used:!1,date:a.formatTime(d)+" "+a.formatHour(d),time:d},success:function(t){wx.showToast({title:"创建成功 "+i})}})}else{var c=t.data[0]._id,s=t.data[0].used?"已开通":"未开通",l=t.data[0].vip;wx.showModal({title:"提示",content:"号码已录入，"+s+l,confirmText:"重新开通",complete:function(t){if(t.confirm){var n=new Date;e.collection("phone").doc(c).update({data:{used:!1,vip:i,title:o,date:a.formatTime(n)+" "+a.formatHour(n),time:n},success:function(t){wx.showToast({title:"更新成功 "+i})}})}}})}}})},checkInfoPhone:function(){var t=this;e.collection("phone").where({phone:t.data.phone}).get({success:function(e){0==e.data.length?wx.showToast({title:"该号码不存在",icon:"error"}):e.data[0].used?wx.showModal({title:"信息查询",content:t.data.phone+" VIP"+e.data[0].vip+"已绑定 "+e.data[0].bind_date,complete:function(t){t.cancel,t.confirm}}):wx.showModal({title:"信息查询",content:t.data.phone+" 未绑定VIP"+e.data[0].vip,complete:function(t){t.cancel,t.confirm}})}})},switchVirtualPay:function(t){this.setData({virtualPay_shenhe:!this.data.virtualPay_shenhe}),e.collection("init").doc("pay_id").update({data:{virtualPay_shenhe:this.data.virtualPay_shenhe}})},reply:function(t){var e=parseInt(t.currentTarget.dataset.id);this.setData({modalReply:!0,index:e})},delete:function(t){var e=this,a=parseInt(t.currentTarget.dataset.id);wx.showModal({title:"删除反馈",content:e.data.lists_question[a].content,complete:function(t){t.confirm&&wx.cloud.callFunction({name:"deleteFeedback",data:{doc_id:e.data.lists_question[a]._id},success:function(t){wx.showToast({title:"删除成功"});var o=e.data.lists_question;o.splice(a,1),e.setData({lists_question:o})}})}})},hideModal:function(){this.setData({modalReply:!1})},input:function(t){this.setData({replyContent:t.detail.value})},submitReply:function(){var t=this;if(0==t.data.replyContent.length)return void wx.showToast({title:"回复不能为空",icon:"error"});wx.showLoading({title:"处理中"});var e=new Date,o=a.formatTime(e)+" "+a.formatHour(e);wx.cloud.callFunction({name:"feedbackNotice",data:{doc_id:t.data.lists_question[t.data.index]._id,openid:t.data.lists_question[t.data.index]._openid,content:t.data.lists_question[t.data.index].content,reply:t.data.replyContent,reply_time:o},complete:function(e){wx.hideLoading({success:function(t){wx.showToast({title:"处理完成"})}});var a=t.data.lists_question;a.splice(t.data.index,1),t.setData({modalReply:!1,lists_question:a})}})}});
},{isPage:true,isComponent:true,currentFile:'pages/vip/vip.js'});require("pages/vip/vip.js");