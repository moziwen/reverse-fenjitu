$gwx_XC_43=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_43 || [];
function gz$gwx_XC_43_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_43_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_43_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_43_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'posterUrl']])
Z([3,'12rpx 18rpx'])
Z([3,'circleRight'])
Z([3,'translucent'])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_43_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_43_1
}
__WXML_GLOBAL__.ops_set.$gwx_XC_43=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_43=true;
var x=['./pages/wordExt/wordExt.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_43_1()
var hW8=_v()
_(r,hW8)
if(_oz(z,0,e,s,gg)){hW8.wxVkey=1
}
var oX8=_mz(z,'tui-tag',['originRight',-1,'padding',1,'shape',1,'type',2],[],e,s,gg)
_(r,oX8)
hW8.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_43";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_43();	if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/wordExt/wordExt.wxml'] = [$gwx_XC_43, './pages/wordExt/wordExt.wxml'];else __wxAppCode__['pages/wordExt/wordExt.wxml'] = $gwx_XC_43( './pages/wordExt/wordExt.wxml' );
	;__wxRoute = "pages/wordExt/wordExt";__wxRouteBegin = true;__wxAppCurrentFile__="pages/wordExt/wordExt.js";define("pages/wordExt/wordExt.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../@swc/runtime/_async_to_generator"),e=require("../../@swc/runtime/_ts_generator"),i=wx.cloud.database({}),a=i.command,o=getApp(),n=i.command.aggregate,l=!1;Page({data:{posterUrl:"",word_num:99,height:400,cardList:[],image_index:0,cur_word:"",word_level:"",word_detail:{},isAudioPlay:!1},onLoad:function(t){this.setData({cur_word:t.word}),this.initAudio(),this.getCardList(t.word),this.getWordNum(),wx.setNavigationBarTitle({title:t.word});var e=wx.getWindowInfo(),i=e.windowHeight,a=e.windowWidth;this.setData({height:750/a*i})},onUnload:function(){this.innerAudioContext&&(this.innerAudioContext.destroy(),this.innerAudioContext=null)},initAudio:function(){var t=this;this.innerAudioContext=wx.createInnerAudioContext(),this.innerAudioContext.onPlay(function(){console.log("监控播放事件"),t.setData({isAudioPlay:!0})}),this.innerAudioContext.onEnded(function(){console.log("onEnded"),t.setData({isAudioPlay:!1})})},getCardList:function(t){var e=this;console.log("getCardList",t),wx.showLoading({title:"扩展单词加载中"}),i.collection("words").where({name:t}).get({success:function(i){if(e.setData({word_level:i.data[0].level,word_detail:i.data[0]}),i.data[0].extend)e.setData({cardList:i.data[0].extend}),wx.hideLoading(),e.playAudio();else{var a=i.data[0].level;e.getListNoExtend(a,t)}}})},getListNoExtend:function(t,e){var o=this,l=o.getDatabaseLevel(t);i.collection(l).aggregate().match({words:a.elemMatch(a.eq(e))}).project({list:n.filter({input:"$list",as:"item",cond:n.neq([n.indexOfBytes([n.toLower("$$item.title"),n.toLower(e)]),-1])})}).end({success:function(t){if(0!=t.list.length&&0!=t.list[0].list.length){for(var i=[],a=0;a<t.list.length;a++)for(var n=0;n<t.list[a].list.length;n++){var l=t.list[a].list[n].img,s=l.replace(".jpg",".mp3");i.push({img:l,audio:s,title:t.list[a].list[n].title})}o.setData({cardList:i}),wx.hideLoading(),o.playAudio()}else console.log("333333"),o.getWordList(e)},fail:function(t){console.error(t)}})},getDatabaseLevel:function(){var t="AA";return"A"==this.level&&(t="AL"),"B"==this.level&&(t="BL"),"C"==this.level&&(t="CL"),"D"==this.level&&(t="DL"),"E"==this.level&&(t="EL"),"F"==this.level&&(t="FL"),"G"==this.level&&(t="GL"),"H"==this.level&&(t="HL"),"I"==this.level&&(t="IL"),"J"==this.level&&(t="JL"),"K"==this.level&&(t="KL"),t},getWordList:function(t){var e=this;i.collection("words").where({name:t}).field({level:!0}).get({success:function(o){var l=o.data[0].level;console.log("getWordList",l,t);var s=e.getDatabaseLevel(l);i.collection(s).aggregate().match({words:a.elemMatch(a.eq(t))}).project({list:n.filter({input:"$list",as:"item",cond:n.neq([n.indexOfBytes([n.toLower("$$item.title"),n.toLower(t)]),-1])})}).end({success:function(i){if(0!=i.list.length&&0!=i.list[0].list.length){for(var a=[],o=0;o<i.list.length;o++)for(var n=0;n<i.list[o].list.length;n++){var l=i.list[o].list[n].img,s=l.replace(".jpg",".mp3");a.push({img:l,audio:s,title:i.list[o].list[n].title})}e.setData({cardList:a}),wx.hideLoading(),e.playAudio()}else e.getWordCover(t)},fail:function(t){console.error(t)}})}})},getWordCover:function(t){var e=this;i.collection("words").where({name:t}).get({success:function(t){e.setData({cardList:[{img:t.data[0].img,audio:t.data[0].audio_en,title:t.data[0].name}]}),wx.hideLoading(),e.playAudio()}})},playAudio:function(){if(console.log("playAudio"),!1==l){l=!0,setTimeout(function(){l=!1},500),this.data.image_index>=this.data.cardList.length&&this.setData({image_index:0});var t=encodeURI(decodeURIComponent(this.data.cardList[this.data.image_index].audio));this.innerAudioContext.src=t,console.log("开始播放"),this.innerAudioContext.play()}},changeImage:function(t){var e=t.detail.current;console.log("changeImage",e),this.setData({image_index:e}),this.playAudio()},onShareAppMessage:function(){return{title:"今日单词："+this.data.cur_word+" ["+this.data.word_detail.yinbiao+"] "+this.data.word_detail.zh,path:"/pages/wordExt/wordExt?word="+this.data.cur_word,imageUrl:this.data.word_detail.img}},onShareTimeline:function(){return{title:"今日单词："+this.data.cur_word+" ["+this.data.word_detail.yinbiao+"] "+this.data.word_detail.zh,imageUrl:this.data.word_detail.img,query:"word="+this.data.cur_word}},getWordNum:function(){var t=this;i.collection("user_study").where({baby_id:o.globalData.baby_id}).field({quiz:!0}).get({success:function(e){var i=e.data[0].quiz.length;t.setData({word_num:i})}})},clickAdd:function(){var t=this;wx.showToast({title:"单词收藏成功"}),i.collection("user_study").where({baby_id:o.globalData.baby_id,words_collect:a.elemMatch({name:t.data.cur_word,level:t.data.word_level})}).get({success:function(e){if(0==e.data.length){var i=t.data.word_detail;i.timestamp=new Date().getTime(),wx.cloud.callFunction({name:"updateUserStudy",data:{tag:"collectWord",baby_id:o.globalData.baby_id,word:i},success:function(t){o.globalData.wordsUpdate=!0}})}}})},downloadWordPoster:function(){return t._(function(){var t,i,a;return e._(this,function(e){switch(e.label){case 0:t=this,wx.showLoading({title:"单词海报生成中"}),e.label=1;case 1:return e.trys.push([1,4,,5]),[4,this.downloadFile(this.data.cardList[this.data.image_index].img)];case 2:return i=e.sent(),[4,this.downloadFile("https://qianyufang.top/public/yingyu/qrcode.jpg")];case 3:return a=e.sent(),wx.createSelectorQuery().select("#posterCanvas").fields({node:!0,size:!0}).exec(function(e){var o=e[0].node,n=o.getContext("2d"),l=wx.getWindowInfo().pixelRatio,s=e[0].width,r=e[0].height;o.width=s*l,o.height=r*l,n.scale(l,l),t.drawCanvas(o,n,s,r,i,a)}),[3,5];case 4:return console.error(e.sent()),wx.hideLoading(),wx.showToast({title:"图片加载失败",icon:"none"}),[3,5];case 5:return[2]}})}).call(this)},extractString:function(t){var e=t.match(/Prompt\/(.*)\.mp3/);return e&&e[1]?decodeURIComponent(e[1]):null},drawCanvas:function(t,e,i,a,o,n){var l=this,s=this.data.word_detail.name,r="/"+this.data.word_detail.yinbiao+"/";this.data.word_detail.prompt?this.extractString(this.data.word_detail.prompt):this.data.word_detail.zh;var d=a-90,c=t.createImage();c.src=o,c.onload=function(){e.drawImage(c,0,0,i,d),e.fillStyle="rgba(0, 0, 0, 0.3)",e.fillRect(0,0,i,d),e.textAlign="left",e.fillStyle="#f3f3f3",e.font="normal 16px sans-serif",e.fillText("英语分级兔",24,38),e.fillStyle="rgba(255, 255, 255, 0.7)",e.font="normal 9px sans-serif",e.fillText("分级学习 \xb7 趣味探索",24,56),e.fillStyle="#FFFFFF",e.font="normal bold 42px sans-serif",e.textAlign="center",e.fillText(s,i/2,.7*d),e.fillStyle="rgba(255, 255, 255, 0.85)",e.font="normal 16px sans-serif",e.fillText(r,i/2,.7*d+35),e.fillStyle="rgba(255, 255, 255, 0.98)",e.fillRect(0,d,i,90),e.textAlign="left",e.fillStyle="#333333",e.font="normal bold 12px sans-serif";var a="这是我RAZ学习的第"+l.data.word_num+"个单词";e.fillText(a,20,d+35),e.fillStyle="#666666",e.font="normal 11px sans-serif",e.fillText("来英语分级兔一起掌握3000词汇吧",20,d+60);var o=t.createImage();o.src=n,o.onload=function(){e.drawImage(o,i-60-20,d+15,60,60),setTimeout(function(){wx.canvasToTempFilePath({canvas:t,success:function(t){l.setData({posterUrl:t.tempFilePath}),console.log("海报路径：",l.data.posterUrl),wx.hideLoading()},fail:function(t){console.error("err",t),wx.hideLoading()}})},500)}}},getTodayDate:function(){var t=new Date,e=t.getFullYear(),i=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0");return"".concat(e,".").concat(i,".").concat(a)},downloadFile:function(t){return new Promise(function(e,i){wx.downloadFile({url:t,success:function(t){200===t.statusCode?e(t.tempFilePath):i(Error("Download failed"))},fail:i})})},wrapText:function(t,e,i,a,o,n){var l=e.split(" "),s="";t.textAlign="center";for(var r=0;r<l.length;r++){var d=s+l[r]+" ";t.measureText(d).width>o&&r>0?(t.fillText(s,i,a),s=l[r]+" ",a+=n):s=d}t.fillText(s,i,a)},savePoster:function(){wx.saveImageToPhotosAlbum({filePath:this.data.posterUrl,success:function(){wx.showToast({title:"保存成功，去分享吧！",icon:"success"})},fail:function(){wx.showToast({title:"保存失败",icon:"none"})}})},closePoster:function(){this.setData({posterUrl:""})}});
},{isPage:true,isComponent:true,currentFile:'pages/wordExt/wordExt.js'});require("pages/wordExt/wordExt.js");