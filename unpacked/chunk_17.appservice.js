$gwx_XC_9=function(_,_v,_n,_p,_s,_wp,_wl,$gwn,$gwl,$gwh,wh,$gstack,$gwrt,gra,grb,TestTest,wfor,_ca,_da,_r,_rz,_o,_oz,_1,_1z,_2,_2z,_m,_mz,nv_getDate,nv_getRegExp,nv_console,nv_parseInt,nv_parseFloat,nv_isNaN,nv_isFinite,nv_decodeURI,nv_decodeURIComponent,nv_encodeURI,nv_encodeURIComponent,$gdc,nv_JSON,_af,_gv,_ai,_grp,_gd,_gapi,$ixc,_ic,_w,_ev,_tsd){return function(path,global){
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
var z=__WXML_GLOBAL__.ops_set.$gwx_XC_9 || [];
function gz$gwx_XC_9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_1);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_1
}
function gz$gwx_XC_9_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_XC_9_2)return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_2
__WXML_GLOBAL__.ops_cached.$gwx_XC_9_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container'])
Z([[2,'!='],[[6],[[7],[3,'desc']],[3,'length']],[1,0]])
Z([3,'editTitle'])
Z([3,'#5677fc'])
Z([3,'edit'])
Z([3,'32'])
Z([3,'padding'])
Z([[7],[3,'levels']])
Z([3,'selectLevel'])
Z([[7],[3,'index']])
Z([3,'10rpx 12rpx'])
Z([3,'12rpx 12rpx'])
Z([1,false])
Z([3,'circle'])
Z([3,'34rpx'])
Z([[2,'?:'],[[2,'=='],[[7],[3,'selected']],[[7],[3,'index']]],[1,'primary'],[1,'gray']])
Z([3,'section section_gap margin-top margin-bottom'])
Z([3,'changeStart'])
Z([1,1])
Z([[7],[3,'select_start']])
Z([3,'changeEnd'])
Z([[7],[3,'level_num']])
Z([[7],[3,'select_end']])
Z(z[16])
Z([3,'changeNum1'])
Z([3,'10'])
Z([3,'1'])
Z([[7],[3,'select_num_new']])
Z([3,'changeNum2'])
Z(z[25])
Z([3,'0'])
Z([[7],[3,'select_num_old']])
Z([3,'hideModal'])
Z([1,true])
Z([[7],[3,'modalModify']])
})(__WXML_GLOBAL__.ops_cached.$gwx_XC_9_2);return __WXML_GLOBAL__.ops_cached.$gwx_XC_9_2
}
__WXML_GLOBAL__.ops_set.$gwx_XC_9=z;
__WXML_GLOBAL__.ops_init.$gwx_XC_9=true;
var x=['./components/tui-numberbox/tui-numberbox.wxml','./pages/planCreate/planCreate.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_XC_9_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_XC_9_2()
var cOB=_n('view')
_rz(z,cOB,'class',0,e,s,gg)
var oPB=_v()
_(cOB,oPB)
if(_oz(z,1,e,s,gg)){oPB.wxVkey=1
var lQB=_mz(z,'tui-icon',['bind:tap',2,'color',1,'name',2,'size',3],[],e,s,gg)
_(oPB,lQB)
}
var aRB=_n('view')
_rz(z,aRB,'class',6,e,s,gg)
var tSB=_v()
_(aRB,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_mz(z,'tui-tag',['bind:tap',8,'data-id',1,'margin',2,'padding',3,'plain',4,'shape',5,'size',6,'type',7],[],oVB,bUB,gg)
_(xWB,fYB)
return xWB
}
tSB.wxXCkey=4
_2z(z,7,eTB,e,s,gg,tSB,'item','index','')
var cZB=_n('view')
_rz(z,cZB,'class',16,e,s,gg)
var h1B=_mz(z,'tui-numberbox',['bindchange',17,'min',1,'value',2],[],e,s,gg)
_(cZB,h1B)
var o2B=_mz(z,'tui-numberbox',['bindchange',20,'max',1,'value',2],[],e,s,gg)
_(cZB,o2B)
_(aRB,cZB)
var c3B=_n('view')
_rz(z,c3B,'class',23,e,s,gg)
var o4B=_mz(z,'tui-numberbox',['bindchange',24,'max',1,'min',2,'value',3],[],e,s,gg)
_(c3B,o4B)
var l5B=_mz(z,'tui-numberbox',['bindchange',28,'max',1,'min',2,'value',3],[],e,s,gg)
_(c3B,l5B)
_(aRB,c3B)
_(cOB,aRB)
oPB.wxXCkey=1
oPB.wxXCkey=3
_(r,cOB)
var a6B=_mz(z,'tui-modal',['fadeIn',-1,'bindcancel',32,'custom',1,'show',2],[],e,s,gg)
_(r,a6B)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
;g="$gwx_XC_9";var main=e_[path].f
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
}(__g.a,__g.b,__g.c,__g.d,__g.e,__g.f,__g.g,__g.h,__g.i,__g.j,__g.k,__g.l,__g.m,__g.n,__g.o,__g.p,__g.q,__g.r,__g.s,__g.t,__g.u,__g.v,__g.w,__g.x,__g.y,__g.z,__g.A,__g.B,__g.C,__g.D,__g.E,__g.F,__g.G,__g.H,__g.I,__g.J,__g.K,__g.L,__g.M,__g.N,__g.O,__g.P,__g.Q,__g.R,__g.S,__g.T,__g.U,__g.V,__g.W,__g.X,__g.Y,__g.Z,__g.aa);if(__vd_version_info__.delayedGwx||false)$gwx_XC_9();	if (__vd_version_info__.delayedGwx) __wxAppCode__['components/tui-numberbox/tui-numberbox.wxml'] = [$gwx_XC_9, './components/tui-numberbox/tui-numberbox.wxml'];else __wxAppCode__['components/tui-numberbox/tui-numberbox.wxml'] = $gwx_XC_9( './components/tui-numberbox/tui-numberbox.wxml' );
		if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/planCreate/planCreate.wxml'] = [$gwx_XC_9, './pages/planCreate/planCreate.wxml'];else __wxAppCode__['pages/planCreate/planCreate.wxml'] = $gwx_XC_9( './pages/planCreate/planCreate.wxml' );
	;__wxRoute = "components/tui-numberbox/tui-numberbox";__wxRouteBegin = true;__wxAppCurrentFile__="components/tui-numberbox/tui-numberbox.js";define("components/tui-numberbox/tui-numberbox.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Component({properties:{value:{type:Number,optionalTypes:[String],value:1,observer:function(t){this.setValue()}},min:{type:Number,value:1},max:{type:Number,value:99},step:{type:Number,value:1},disabled:{type:Boolean,value:!1},iconBgColor:{type:String,value:"transparent"},radius:{type:String,value:"50%"},iconSize:{type:Number,value:24},iconColor:{type:String,value:"#333"},height:{type:Number,value:50},width:{type:Number,value:90},backgroundColor:{type:String,value:"#f2f2f2"},color:{type:String,value:"#333"},index:{type:Number,value:0},custom:{type:Number,value:0}},data:{inputValue:0},lifetimes:{attached:function(){this.setValue()}},methods:{setValue:function(){this.setData({inputValue:Number(this.data.value)})},toFixed:function(t,e){var a=Math.pow(10,e),i=t*a+.5;return(i=parseInt(i,10)/a)+""},getLen:function(t,e){var a=0,i=0;return Number.isInteger(e)||(a=(e+"").split(".")[1].length),Number.isInteger(t)||(i=(t+"").split(".")[1].length),Math.max(a,i)},getScale:function(t,e){var a=1,i=1;return Number.isInteger(e)||(a=Math.pow(10,(e+"").split(".")[1].length)),Number.isInteger(t)||(i=Math.pow(10,(t+"").split(".")[1].length)),Math.max(a,i)},calcNum:function(t){if(!this.data.disabled&&(this.data.inputValue!=this.data.min||"reduce"!==t)&&(this.data.inputValue!=this.data.max||"plus"!==t)){var e=this.getScale(this.data.inputValue,this.data.step),a=this.getLen(this.data.inputValue,this.data.step),i=Number(this.data.inputValue)*e,u=this.data.step*e;"reduce"===t?i-=u:"plus"===t&&(i+=u);var n=this.toFixed(i/e,a);n<this.data.min&&(n=this.data.min),n>this.data.max&&(n=this.data.max),this.handleChange(n,t)}},plus:function(){this.calcNum("plus")},reduce:function(){this.calcNum("reduce")},input:function(t){this.setData({inputValue:t.detail.value})},blur:function(t){var e=t.detail.value;e?(~e.indexOf(".")&&Number.isInteger(this.data.step)&&Number.isInteger(Number(e))&&(e=e.split(".")[0]),(e=Number(e))>this.data.max?e=this.data.max:e<this.data.min&&(e=this.data.min)):e=this.data.min,(e!=this.data.value||e==this.data.inputValue)&&t.detail.value||this.setData({inputValue:e}),this.handleChange(e,"blur")},handleChange:function(t,e){this.data.disabled||this.triggerEvent("change",{value:Number(t),type:e,index:this.data.index,custom:this.data.custom})}}});
},{isPage:false,isComponent:true,currentFile:'components/tui-numberbox/tui-numberbox.js'});require("components/tui-numberbox/tui-numberbox.js");;__wxRoute = "pages/planCreate/planCreate";__wxRouteBegin = true;__wxAppCurrentFile__="pages/planCreate/planCreate.js";define("pages/planCreate/planCreate.js",function(require,module,exports,window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../../@swc/runtime/_sliced_to_array"),e=wx.cloud.database({});e.command,e.command.aggregate;var a=getApp(),s=require("../../A2AAD201BB058EAFC4CCBA0673FF56F4.js"),l=!1;Page({data:{levels:["AA","A","B","C","D","E","F","G","H","I","J","K"],isGroup:!1,group_detail:{},title:"",desc:"",list_click:0,total_num:0,taskToday:[],level_total:[108,102,102,102,96,90,84,84,60,60,60,60],level_num:0,selected:-1,select_level:"",select_start:1,select_end:99,select_days:7,select_num:1,select_num_new:1,select_num_old:0,plan_total:0,modalModify:!1},onLoad:function(t){if(t.group_id)this.setData({isGroup:!0,group_id:t.group_id,list_click:parseInt(t.click)}),this.getGroupInfo();else{this.setData({isGroup:!1});var e=a.globalData.babyInfo.nickName+"的个人学习打卡计划",s=new Date,l=s.getMonth()+1,i="本计划创建于"+s.getFullYear()+"年"+l+"月"+s.getDate()+"日";this.setData({title:e,desc:i})}this.countDays(),this.getPlanTotal();var n=wx.getWindowInfo(),o=n.windowHeight,c=n.windowWidth;this.setData({modal_height:750/c*o*.8})},getGroupInfo:function(){var t=this;e.collection("group").where({group_id:t.data.group_id}).get({success:function(e){if(0!=e.data.length&&(t.setData({group_detail:e.data[0],title:e.data[0].name,desc:e.data[0].desc}),0==t.data.desc.length)){var a=new Date,s=a.getMonth()+1,l="本计划创建于"+a.getFullYear()+"年"+s+"月"+a.getDate()+"日";t.setData({desc:l})}}})},getPlanTotal:function(){var t=this;e.collection("plan").where({_openid:a.globalData.openid}).count({success:function(e){t.setData({plan_total:e.total})}})},selectLevel:function(t){var e=parseInt(t.currentTarget.dataset.id),a=this.data.level_total[e];this.setData({selected:e,select_level:this.data.levels[e],level_num:a,select_end:a}),this.countDays()},changeStart:function(t){this.data.selected<0?wx.showToast({title:"请先选择级别",icon:"error"}):(this.setData({select_start:t.detail.value}),this.countDays())},changeEnd:function(t){this.data.selected<0?wx.showToast({title:"请先选择级别",icon:"error"}):(this.setData({select_end:t.detail.value}),this.countDays())},changeNum1:function(t){if(this.data.selected<0)return void wx.showToast({title:"请先选择级别",icon:"error"});var e=t.detail.value;this.setData({select_num_new:e}),this.setData({select_num:this.data.select_num_new+this.data.select_num_old}),this.countDays()},changeNum2:function(t){if(this.data.selected<0)return void wx.showToast({title:"请先选择级别",icon:"error"});var e=t.detail.value;this.setData({select_num_old:e}),this.setData({select_num:this.data.select_num_new+this.data.select_num_old})},countDays:function(){var t=Math.ceil((this.data.select_end-this.data.select_start+1)/this.data.select_num_new);this.setData({select_days:t})},submit:function(){0==this.data.select_level.length?wx.showToast({title:"1.请选择一个级别",icon:"none"}):this.data.select_start>=this.data.select_end?wx.showToast({title:"2.课程范围起始值必须小于结束值",icon:"none",duration:2e3}):this.data.select_start<=0||this.data.select_end<=0?wx.showToast({title:"2.课程范围输入有误",icon:"none"}):this.data.select_num<1||this.data.select_num>20?wx.showToast({title:"3.每天学习数量输入有误",icon:"none"}):this.data.select_num_new<1||this.data.select_num_new>10?wx.showToast({title:"3.每天新学数量输入有误",icon:"none"}):this.data.select_num_old<0||this.data.select_num_old>10?wx.showToast({title:"3.每天复习数量输入有误",icon:"none"}):a.globalData.vip<=0&&this.data.plan_total>=20?wx.showToast({title:"最多创建20个，可以先长按删除",icon:"none",duration:2e3}):a.globalData.vip>0&&this.data.plan_total>=50?wx.showToast({title:"最多创建50个，可以先长按删除",icon:"none",duration:2e3}):!0!=l&&(l=!0,setTimeout(function(){l=!1},3e3),this.fetchRecords(this.data.select_start-1,this.data.select_end-1))},fetchRecords:function(t,e){var a=this;wx.showLoading({title:"创建中..."});var s=a.getDatabaseLevel();wx.cloud.callFunction({name:"fetchData",data:{level:s,startIndex:t,endIndex:e},success:function(t){t.result.success?(console.log("总记录数：",t.result.total),!0==a.data.isGroup?a.writeGroupPlan(t.result.data):a.writePersonalPlan(t.result.data)):(wx.hideLoading(),wx.showToast({title:t.result.errMsg,icon:"none"}))},fail:function(t){wx.hideLoading(),wx.showToast({title:"调用失败",icon:"none"}),console.error("云函数调用失败：",t)}})},getPlanCover:function(){return"https://636c-cloud1-1gzyz2y5d29d9d43-1313118183.tcb.qcloud.la/plan/"+Math.floor(79*Math.random())+".jpg"},generateStudyPlan:function(e,a,s){for(var l=function(l){for(var n=0;n<a&&g<i;n++){var w=e[g];r[l].push(w),u.set(w,u.get(w)+1),h.has(w)||(h.set(w,l),_.set(w,[l])),g++}var f=[];h.forEach(function(t,e){if(!(u.get(e)>=c+1||r[l].includes(e))){var a=_.get(e).length-1;a>=d.length||t+d[a]===l&&f.push(e)}}),f.sort(function(t,e){return u.get(t)-u.get(e)});var v=o-r[l].length;f.slice(0,Math.max(s,v)).forEach(function(t){r[l].push(t),u.set(t,u.get(t)+1),_.get(t).push(l)}),r[l].length<o&&(l<2?console.log("第".concat(l+1,"天复习内容不足，保持当前安排")):Array.from(u.entries()).filter(function(e){var a=t._(e,2),s=a[0],i=a[1];return i>0&&i<c+1&&!r[l].includes(s)}).sort(function(t,e){return t[1]-e[1]}).slice(0,o-r[l].length).forEach(function(e){var a=t._(e,1)[0];r[l].push(a),u.set(a,u.get(a)+1),_.get(a).push(l)}))},i=e.length,n=Math.ceil(i/a),o=a+s,c=Math.ceil(s*n/i),d=[1,3],r=Array(n).fill().map(function(){return[]}),u=new Map(e.map(function(t){return[t,0]})),h=new Map,_=new Map,g=0,w=0;w<n;w++)l(w);return r},writeGroupPlan:function(t){var a=this.generateStudyPlan(t,this.data.select_num_new,this.data.select_num_old),l=new Date,i=l.getTime(),n=this.data.group_id.slice(0,6)+"_"+i,o=this.data.select_days,c=this.data.select_level,d=this.data.group_id,r=this.getPlanCover();e.collection("plan").add({data:{group_id:d,plan_id:n,cover:r,title:this.data.title,desc:this.data.desc,public:!1,isAdd:!1,total:o,level:c,date:s.formatTime(l),tag:i,list:a,daka:Array(o).fill().map(function(){return[]})},success:function(t){wx.hideLoading(),wx.navigateTo({url:"../planDetail/planDetail?plan_id="+n+"&isPlanCreate=1"})}})},writePersonalPlan:function(t){var l=this.generateStudyPlan(t,this.data.select_num_new,this.data.select_num_old),i=new Date,n=i.getTime(),o=this.getRandomContinuousChars()+"_"+n,c=this.data.select_days,d=this.data.select_level,r=this.getPlanCover();e.collection("plan").add({data:{plan_id:o,cover:r,title:this.data.title,desc:this.data.desc,public:!1,total:c,level:d,date:s.formatTime(i),tag:n,list:l,vip:a.globalData.vip,daka:Array(c).fill().map(function(){return[]})},success:function(t){wx.navigateTo({url:"../planDetail/planDetail?plan_id="+o+"&isPlanPersonal=1",complete:function(t){wx.hideLoading()}})}})},getRandomContinuousChars:function(){var t=a.globalData.baby_id.substr(0,28),e=Math.floor(Math.random()*(t.length-5+1));return t.substr(e,5)},getDatabaseLevel:function(){var t="AA";return"A"==this.data.select_level&&(t="AL"),"B"==this.data.select_level&&(t="BL"),"C"==this.data.select_level&&(t="CL"),"D"==this.data.select_level&&(t="DL"),"E"==this.data.select_level&&(t="EL"),"F"==this.data.select_level&&(t="FL"),"G"==this.data.select_level&&(t="GL"),"H"==this.data.select_level&&(t="HL"),"I"==this.data.select_level&&(t="IL"),"J"==this.data.select_level&&(t="JL"),"K"==this.data.select_level&&(t="KL"),t},hideModal:function(){this.setData({modalModify:!1})},editTitle:function(){this.setData({modalModify:!0})},inputTitle:function(t){this.setData({title:t.detail.value})},inputDesc:function(t){this.setData({desc:t.detail.value})},submitModify:function(){0==this.data.title.length?wx.showToast({title:"名字不能为空",icon:"error"}):this.data.title.length>15?wx.showToast({title:"班级名字不能超过15个字",icon:"error"}):this.data.desc.length>30?wx.showToast({title:"班级描述不饿能超过30个字",icon:"error"}):(this.setData({modalModify:!1}),wx.showToast({title:"修改成功"}))}});
},{isPage:true,isComponent:true,currentFile:'pages/planCreate/planCreate.js'});require("pages/planCreate/planCreate.js");