$gwx_XC_37=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_37 || [];
function gz$gwx_XC_37_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'tui-banner-swiper'])
Z([[2,'=='],[[7],[3,'displayMode']],[1,1]])
Z([[2,'=='],[[7],[3,'displayMode']],[1,2]])
Z([3,'top-view'])
Z([3,'12rpx 18rpx'])
Z([3,'circleRight'])
Z([3,'primary'])
Z([[6],[[7],[3,'values']],[[7],[3,'bannerIndex']]])
Z([[2,'&&'],[[2,'&&'],[[2,'!='],[[6],[[7],[3,'texts']],[3,'length']],[1,0]],[[6],[[7],[3,'texts']],[[7],[3,'bannerIndex']]]],[[2,'=='],[[7],[3,'isHideText']],[1,false]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_37=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_37=true;
var x=['./pages/share/share.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_37_1()
var hU3=_n('view')
_rz(z,hU3,'class',0,e,s,gg)
var oV3=_v()
_(hU3,oV3)
if(_oz(z,1,e,s,gg)){oV3.wxVkey=1
}
var cW3=_v()
_(hU3,cW3)
if(_oz(z,2,e,s,gg)){cW3.wxVkey=1
}
oV3.wxXCkey=1
cW3.wxXCkey=1
_(r,hU3)
var oX3=_n('view')
_rz(z,oX3,'class',3,e,s,gg)
var aZ3=_mz(z,'tui-tag',['padding',4,'shape',1,'type',2],[],e,s,gg)
_(oX3,aZ3)
var lY3=_v()
_(oX3,lY3)
if(_oz(z,7,e,s,gg)){lY3.wxVkey=1
}
lY3.wxXCkey=1
_(r,oX3)
var cT3=_v()
_(r,cT3)
if(_oz(z,8,e,s,gg)){cT3.wxVkey=1
}
cT3.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_37";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_37();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/share/share.wxml'] = [$gwx_XC_37, './pages/share/share.wxml'];else __wxAppCode__['pages/share/share.wxml'] = $gwx_XC_37( './pages/share/share.wxml' );
	;__wxRoute = "pages/share/share";__wxRouteBegin = true;__wxAppCurrentFile__="pages/share/share.js";define("pages/share/share.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../@swc/runtime/_define_property");getApp();var e=wx.cloud.database({});e.command;var a=e.command.aggregate,i=8;Page({data:{height:400,displayMode:1,level:"",card_id:"",user_babyid:"",index:0,title:"",cover:"",list:[],bannerIndex:0,cur_title:"",audioRecords:[],isPad:!1,setting_speak:0,stars:[0,0,0,0,0,0,0,0],values:[],texts:[],cur_star:0,transShow:!1,isAutoPage:!1,isHideText:!1},onLoad:function(t){if(this.bindAudio(),t.scene){var e=decodeURIComponent(t.scene);console.log("onLoad",e);var a=e.slice(0,28),i=e.slice(28,29);"-"==i&&(i="AA"),this.setData({level:i});var s=e.slice(29);this.getSystemInfo(),this.getShareQrcode(a,s);return}this.setData({card_id:t.card_id,user_babyid:t.user_babyid});var n=this.data.card_id.indexOf("-"),d=this.data.card_id.substring(0,n);this.setData({level:d}),this.getCardList(),this.getSystemInfo(),this.getUserStudyInfo(this.data.user_babyid)},onUnload:function(){this.innerAudioContext&&(this.innerAudioContext.destroy(),this.innerAudioContext=null)},getShareQrcode:function(t,a){var i=this;e.collection("user_parent").where({_openid:t}).get({success:function(t){var e=t.data[0].baby_id;i.setData({user_babyid:e}),i.getCardListByIndex(a),i.getUserStudyInfo(e)}})},getCardListByIndex:function(t){var a=this;console.log("getCardListByIndex"),wx.showLoading({title:"即将播放"});var s=a.getDatabaseLevel();e.collection(s).where({index:parseInt(t)}).get({success:function(t){i=t.data[0].list.length,a.setData({card_id:t.data[0].id,index:t.data[0].index,title:t.data[0].title,cover:t.data[0].cover,list:t.data[0].list,cur_title:t.data[0].list[0].title}),setTimeout(function(){wx.hideLoading(),wx.setNavigationBarTitle({title:a.data.title})},600),a.getImageHeight(),a.getUserStars(),a.getAudioRecords()}})},getCardList:function(){var t=this;console.log("getCardList"),wx.showLoading({title:"即将播放"});var a=t.getDatabaseLevel();e.collection(a).where({id:t.data.card_id}).get({success:function(e){i=e.data[0].list.length,t.setData({index:e.data[0].index,title:e.data[0].title,cover:e.data[0].cover,list:e.data[0].list,cur_title:e.data[0].list[0].title}),setTimeout(function(){wx.hideLoading(),wx.setNavigationBarTitle({title:t.data.title})},600),t.getImageHeight(),t.getUserStars(),t.getAudioRecords()}})},getUserStars:function(){var t=this;e.collection("user_data").where({baby_id:t.data.user_babyid,"speak.id":t.data.card_id}).orderBy("timestamp","desc").field({speak:!0}).limit(1).get({success:function(e){if(0!=e.data.length){var a=e.data[0].speak;for(var i in a)if(a[i].id==t.data.card_id){t.setData({stars:a[i].stars,values:a[i].values}),a[i].texts&&(t.setData({texts:a[i].texts}),t.compareSpeakText());return}}}})},bindAudio:function(){var t=this;t.innerAudioContext=wx.createInnerAudioContext(),t.innerAudioContext.onPlay(function(){console.log("onPlay")}),t.innerAudioContext.onEnded(function(){console.log("onEnded"),!0==t.data.isAutoPage&&setTimeout(function(){t.bannerChangeAuto()},1500)}),t.innerAudioContext.onError(function(){console.log("onError"),wx.showToast({title:"播放音频出错",icon:"none"})})},compareSpeakText:function(){if(0!=this.data.texts.length&&this.data.texts[this.data.bannerIndex]&&this.data.texts[this.data.bannerIndex].length>0){for(var t=this.data.texts[this.data.bannerIndex],e=this.data.list[this.data.bannerIndex].title,a=this.extractWords(t),i=e.split(" "),s="",n=0;n<i.length;n++){var d=i[n],o=d.replace(/[^\w\s]|_/g,"").toLowerCase(),r=!1,l=!0,h=!1,c=void 0;try{for(var u,g=a[Symbol.iterator]();!(l=(u=g.next()).done);l=!0)if(u.value.replace(/[^\w\s]|_/g,"").toLowerCase()===o){r=!0;break}}catch(t){h=!0,c=t}finally{try{l||null==g.return||g.return()}finally{if(h)throw c}}r?s+=d+" ":s+='<span class="highlighted">'.concat(d,"</span> ")}this.setData({cur_title:s})}},extractWords:function(t){return t.toLowerCase().match(/[a-z]+/g)||[]},getUserStudyInfo:function(t){var a=this;e.collection("user_study").doc(t).field({babyInfo:!0,total_days:!0}).get({success:function(t){a.setData({user_info:t.data.babyInfo,user_days:t.data.total_days})}})},getSystemInfo:function(){var t=wx.getWindowInfo(),e=t.windowHeight,a=t.windowWidth;Math.floor(10*e/a)>15?this.setData({isPad:!1}):this.setData({isPad:!0}),this.setData({height:750/a*e,pad_image_height:2*a/3,phone_image_height:3*a/2}),"AA"==this.data.level||"A"==this.data.level||"B"==this.data.level?this.setData({displayMode:1}):this.setData({displayMode:2})},getImageHeight:function(){var t=this;2==t.data.displayMode&&!1==t.data.isPad&&wx.getImageInfo({src:t.data.list[t.data.bannerIndex].img,success:function(e){console.log("getImageHeight",e.width,e.height);var a=750/e.width,i=e.height*a;t.setData({phone_image_height:i})}})},getAudioRecords:function(){var i=this,s=i.data.level;e.collection("user_study").aggregate().match({baby_id:i.data.user_babyid}).project(t._({},s,a.filter({input:"$"+s,as:"item",cond:a.eq(["$$item.id",i.data.card_id])}))).end({success:function(t){if(0!=t.list.length&&0!=t.list[0][s].length){var e=t.list[0][s][0];e.audio&&(i.setData({audioRecords:e.audio}),i.playAudioAuto())}else{for(var a=[],n=0;n<i.data.list.length;n++){var d=i.data.list[n].img.replace(".jpg",".mp3");a.push(d)}i.setData({audioRecords:a}),i.playAudioAuto()}}})},playAudioAgain:function(){var t=this.data.audioRecords[this.data.bannerIndex];this.innerAudioContext.src=t,console.log("开始播放"),this.innerAudioContext.play()},playAudioAuto:function(){console.log("playAudioAuto");var t=this.data.audioRecords[this.data.bannerIndex];this.innerAudioContext.src=t,console.log("开始播放"),this.innerAudioContext.play()},bannerChangeAuto:function(){console.log("bannerChangeAuto"),this.setData({bannerIndex:(this.data.bannerIndex+1)%i}),this.getImageHeight(),this.setData({cur_title:this.data.list[this.data.bannerIndex].title}),this.compareSpeakText()},bannerChangeHandle:function(t){var e=this;this.innerAudioContext.stop(),console.log("bannerChangeHandle",t.detail.current),this.setData({bannerIndex:parseInt(t.detail.current),paragraphs:[]}),this.setData({cur_title:this.data.list[this.data.bannerIndex].title}),this.compareSpeakText(),this.getImageHeight(),setTimeout(function(){e.playAudioAuto()},500)},setAutoPage:function(){var t=this;!1==this.data.isAutoPage?(wx.showToast({title:"开始自动播放"}),this.setData({isAutoPage:!0}),setTimeout(function(){t.bannerChangeAuto()},1e3)):(wx.showToast({title:"停止自动播放"}),this.setData({isAutoPage:!1}))},onShareAppMessage:function(t){var e="我";0!=this.data.user_info.nickName.length&&"微信用户"!=this.data.user_info.nickName&&(e=this.data.user_info.nickName);var a=this.data.cover.replace(".jpg","0.jpg");return{title:e+"的第"+this.data.user_days+"天英语分级打卡录音已完成，"+this.data.level+"级《"+this.data.title+"》",path:"/pages/share/share?card_id="+this.data.card_id+"&user_babyid="+this.data.user_babyid,imageUrl:a}},onShareTimeline:function(){var t="我";0!=this.data.user_info.nickName.length&&"微信用户"!=this.data.user_info.nickName&&(t=this.data.user_info.nickName);var e=this.data.cover.replace(".jpg","0.jpg");return{title:t+"的第"+this.data.user_days+"天英语分级打卡录音已完成，"+this.data.level+"级《"+this.data.title+"》",query:"card_id="+this.data.card_id+"&user_babyid="+this.data.user_babyid,imageUrl:e}},clickNext:function(){var t=this;this.innerAudioContext.stop(),this.setData({bannerIndex:this.data.bannerIndex+1,paragraphs:[]}),this.data.bannerIndex>=this.data.list.length&&this.setData({bannerIndex:0}),this.setData({cur_title:this.data.list[this.data.bannerIndex].title}),this.compareSpeakText(),this.getImageHeight(),setTimeout(function(){t.playAudioAuto()},500)},hideText:function(){this.setData({isHideText:!0})},getDatabaseLevel:function(){var t="AA";return"A"==this.data.level&&(t="AL"),"B"==this.data.level&&(t="BL"),"C"==this.data.level&&(t="CL"),"D"==this.data.level&&(t="DL"),"E"==this.data.level&&(t="EL"),"F"==this.data.level&&(t="FL"),"G"==this.data.level&&(t="GL"),"H"==this.data.level&&(t="HL"),"I"==this.data.level&&(t="IL"),"J"==this.data.level&&(t="JL"),"K"==this.data.level&&(t="KL"),t}});
},{isPage:true,isComponent:true,currentFile:'pages/share/share.js'});require("pages/share/share.js");