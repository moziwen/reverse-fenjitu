var __wxAppConsole__=console;definePlugin('plugin://wx3e17776051baf153',function(define,require,module,exports,global,wx,App,Page,Component,Behavior,getApp,getCurrentPages,console,requireMiniProgram,WXWebAssembly,__wxCodeSpace__,){var __vd_version_info__=__vd_version_info__||{};if(typeof console==='undefined')console=__wxAppConsole__;;if(typeof __wxCodeSpace__==='undefined')__wxCodeSpace__=global.__wxCodeSpace__;;/*v0.5vv_20211229_syb_scopedata*/global.__wcc_version__='v0.5vv_20211229_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx3e17776051baf153=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx3e17776051baf153:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(typeof o==="string"||typeof o==="boolean"||typeof o==="number") return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(Object.prototype.hasOwnProperty.call(o,k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&typeof o==="function"){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

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
var z=__WXML_GLOBAL__.ops_set.$gwx_wx3e17776051baf153 || [];
function gz$gwx_wx3e17776051baf153_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx3e17776051baf153_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx3e17776051baf153_1
__WXML_GLOBAL__.ops_cached.$gwx_wx3e17776051baf153_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_wx3e17776051baf153_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx3e17776051baf153_1
}
__WXML_GLOBAL__.ops_set.$gwx_wx3e17776051baf153=z;
__WXML_GLOBAL__.ops_init.$gwx_wx3e17776051baf153=true;
var nv_require=function(){var nnm={};var nom={};return function(n){if(n[0]==='p'&&n[1]==='_'&&f_[n.slice(2)])return f_[n.slice(2)];return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./components/list/list.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx3e17776051baf153_1()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
;	global.__wxAppCode__['plugin-private://wx3e17776051baf153/components/list/list.json'] = {"component":true};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx3e17776051baf153/components/list/list.wxml'] = [$gwx_wx3e17776051baf153, './components/list/list.wxml' ];else global.__wxAppCode__['plugin-private://wx3e17776051baf153/components/list/list.wxml'] = $gwx_wx3e17776051baf153( './components/list/list.wxml' );
		global.__wxAppCode__['plugin-private://wx3e17776051baf153/plugin.json'] = {"publicComponents":{"list":"components/list/list"},"main":"index.js"};
		if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx3e17776051baf153/plugin.wxml'] = [$gwx_wx3e17776051baf153, './plugin.wxml' ];else global.__wxAppCode__['plugin-private://wx3e17776051baf153/plugin.wxml'] = $gwx_wx3e17776051baf153( './plugin.wxml' );
	;	define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=new Array(a);e<a;e++)n[e]=r[e];return n}module.exports=_arrayLikeToArray; 
 			}); 
		define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayLikeToArray=require("./arrayLikeToArray");function _arrayWithoutHoles(r){if(Array.isArray(r))return arrayLikeToArray(r)}module.exports=_arrayWithoutHoles; 
 			}); 
		define("@babel/runtime/helpers/asyncToGenerator.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function asyncGeneratorStep(n,e,r,t,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void r(n)}i.done?e(u):Promise.resolve(u).then(t,o)}function _asyncToGenerator(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var a=n.apply(e,r);function c(n){asyncGeneratorStep(a,t,o,c,i,"next",n)}function i(n){asyncGeneratorStep(a,t,o,c,i,"throw",n)}c(void 0)}))}}module.exports=_asyncToGenerator; 
 			}); 
		define("@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _classCallCheck(a,l){if(!(a instanceof l))throw new TypeError("Cannot call a class as a function")}module.exports=_classCallCheck; 
 			}); 
		define("@babel/runtime/helpers/createClass.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var toPropertyKey=require("./toPropertyKey");function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,toPropertyKey(o.key),o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}module.exports=_createClass; 
 			}); 
		define("@babel/runtime/helpers/createForOfIteratorHelper.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var unsupportedIterableToArray=require("./unsupportedIterableToArray");function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return u=r.done,r},e:function(r){i=!0,a=r},f:function(){try{u||null==t.return||t.return()}finally{if(i)throw a}}}}module.exports=_createForOfIteratorHelper; 
 			}); 
		define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var toPropertyKey=require("./toPropertyKey");function _defineProperty(e,r,t){return(r=toPropertyKey(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}module.exports=_defineProperty; 
 			}); 
		define("@babel/runtime/helpers/interopRequireDefault.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
module.exports=function(e){return e&&e.__esModule?e:{default:e}},module.exports.__esModule=!0,module.exports.default=module.exports;
 
 			}); 
		define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}module.exports=_iterableToArray; 
 			}); 
		define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}module.exports=_nonIterableSpread; 
 			}); 
		define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var defineProperty=require("./defineProperty");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread2(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}module.exports=_objectSpread2; 
 			}); 
		define("@babel/runtime/helpers/regeneratorRuntime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var t=require("./typeof");function r(){module.exports=r=function(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function h(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{h({},"")}catch(t){h=function(t,r,e){return t[r]=e}}function f(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),c=new k(n||[]);return i(a,"_invoke",{value:E(t,e,c)}),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p={};function d(){}function v(){}function y(){}var g={};h(g,c,(function(){return this}));var m=Object.getPrototypeOf,w=m&&m(m(G([])));w&&w!==n&&o.call(w,c)&&(g=w);var x=y.prototype=d.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(r){h(t,r,(function(t){return this._invoke(r,t)}))}))}function b(r,e){function n(i,a,c,u){var l=s(r[i],r,a);if("throw"!==l.type){var h=l.arg,f=h.value;return f&&"object"==t(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){h.value=t,c(h)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function E(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===p)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var u=s(t,r,e);if("normal"===u.type){if(n=e.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n="completed",e.method="throw",e.arg=u.arg)}}}function _(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,_(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function G(t){if(t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:N}}function N(){return{value:void 0,done:!0}}return v.prototype=y,i(x,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=h(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,h(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},L(b.prototype),h(b.prototype,u,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(x),h(x,l,"Generator"),h(x,c,(function(){return this})),h(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:G(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},e}module.exports=r,module.exports.__esModule=!0,module.exports.default=module.exports;
 
 			}); 
		define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayWithoutHoles=require("./arrayWithoutHoles"),iterableToArray=require("./iterableToArray"),unsupportedIterableToArray=require("./unsupportedIterableToArray"),nonIterableSpread=require("./nonIterableSpread");function _toConsumableArray(r){return arrayWithoutHoles(r)||iterableToArray(r)||unsupportedIterableToArray(r)||nonIterableSpread()}module.exports=_toConsumableArray; 
 			}); 
		define("@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var _typeof=require("./typeof");function _toPrimitive(r,t){if("object"!==_typeof(r)||null===r)return r;var e=r[Symbol.toPrimitive];if(void 0!==e){var i=e.call(r,t||"default");if("object"!==_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}module.exports=_toPrimitive; 
 			}); 
		define("@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var _typeof=require("./typeof"),toPrimitive=require("./toPrimitive");function _toPropertyKey(r){var t=toPrimitive(r,"string");return"symbol"===_typeof(t)?t:String(t)}module.exports=_toPropertyKey; 
 			}); 
		define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}module.exports=_typeof; 
 			}); 
		define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
var arrayLikeToArray=require("./arrayLikeToArray");function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?arrayLikeToArray(r,e):void 0}}module.exports=_unsupportedIterableToArray; 
 			}); 
		define("api/RealtimeASR.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../utils/recordManger.js");module.exports={getRecordRecognitionManager:function(){return new e}}; 
 			}); 
		define("api/SentenceASR.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../utils/config.js"),r=require("../utils/aaiApi.js");function o(){for(var e="",r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],o=0;o<8;o++)e+=r[Math.round(Math.random()*(r.length-1))];return e}module.exports={getSentenceRecognition:function(t){var i=t.projectId||0,n=t.engSerViceType||"16k",c=t.sourceType||0,u=t.voiceFormat||"mp3",d=t.url||"",l=t.data||"",a=t.dataLen||0,s=t.success,f=t.fail,p=e.GetQCloudSecret();r.SetQCloudSecret(p);var y={ProjectId:i,SubServiceType:2,EngSerViceType:n,SourceType:c,VoiceFormat:u,UsrAudioKey:o(),Url:d,Data:l,DataLen:a,success:function(e){if(e&&e.Response){var r=e.Response;if(r.Error){var o={Error:r.Error,requestId:r.RequestId};f(o)}else{var t=r.Result,i=r.RequestId;s({result:t,requestId:i})}}else{f({errCode:"-10001",errMsg:"内部错误"})}},fail:function(e){f(e)}},m=Object.prototype.hasOwnProperty;m.call(t,"wordInfo")&&"number"==typeof t.wordInfo&&(y.WordInfo=t.wordInfo),m.call(t,"filterDirty")&&"number"==typeof t.filterDirty&&(y.FilterDirty=t.filterDirty),m.call(t,"filterModal")&&"number"==typeof t.filterModal&&(y.FilterModal=t.filterModal),m.call(t,"filterPunc")&&"number"==typeof t.filterPunc&&(y.FilterPunc=t.filterPunc),m.call(t,"convertNumMode")&&"number"==typeof t.convertNumMode&&(y.ConvertNumMode=t.convertNumMode),m.call(t,"hotwordId")&&"string"==typeof t.hotwordId&&(y.HotwordId=t.hotwordId),m.call(t,"customizationId")&&"number"==typeof t.customizationId&&(y.CustomizationId=t.customizationId),m.call(t,"reinforceHotword")&&"number"==typeof t.reinforceHotword&&(y.ReinforceHotword=t.reinforceHotword),m.call(t,"hotwordList")&&"string"==typeof t.hotwordList&&(y.HotwordList=t.hotwordList),r.doQuerySentence(y,{Action:"SentenceRecognition",Version:"2019-06-14",Region:"ap-guangzhou"})}}; 
 			}); 
		define("api/SpeechRecongnizer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default,r=e(require("../utils/recorderSpeechRecognizer.js")),t=e(require("../utils/speechRecognizer.js")),u=e(require("../utils/recorderSpeechRecognizerV2.js"));module.exports={getRecordSpeechRecognizer:function(){return new r.default},getSpeechRecognizer:function(){return new t.default},getRecordSpeechRecognizerV2:function(){return new u.default}}; 
 			}); 
		define("api/TMT.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../utils/config.js"),t=require("../utils/tmtApi.js");module.exports={getTranslateText:function(r){var s=r.content||"",o=r.source||"zh",c=r.target||"en",n=r.projectId||0,i=r.success,u=r.fail,a=e.GetQCloudSecret();t.SetQCloudSecret(a.secretid,a.secretkey),t.doQueryTMT({Action:"TextTranslate",Version:"2018-03-21",Region:"ap-guangzhou",SourceText:s,Source:o,Target:c,ProjectId:n,success:function(e){if(e&&e.Response){var t=e.Response;if(t.Error)return void u(t);i(t)}else u(e)},fail:function(e){u(e)}})},getTranslateImage:function(r){var s=r.sessionUuid||"session-12345",o=r.source||"zh",c=r.target||"en",n=r.scene||"doc",i=r.data||"",u=r.projectId||0,a=r.success,d=r.fail,g=e.GetQCloudSecret();t.SetQCloudSecret(g.secretid,g.secretkey),t.doQueryTMT({Action:"ImageTranslate",Version:"2018-03-21",Region:"ap-guangzhou",SessionUuid:s,Scene:n,Data:i,Source:o,Target:c,ProjectId:u,success:function(e){if(e&&e.Response){var t=e.Response;if(t.Error)return void d(t);a(t)}else d(e)},fail:function(e){d(e)}})},getLanguageDetect:function(r){var s=r.text||"",o=r.projectId||0,c=r.success,n=r.fail,i=e.GetQCloudSecret();t.SetQCloudSecret(i.secretid,i.secretkey),t.doQueryTMT({Action:"LanguageDetect",Version:"2018-03-21",Region:"ap-guangzhou",Text:s,ProjectId:o,success:function(e){if(e&&e.Response){var t=e.Response;if(t.Error)return void n(t);c(t)}else n(e)},fail:function(e){n(e)}})}}; 
 			}); 
		define("api/TTS.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t=require("../utils/ttsApi.js"),o=require("../utils/config");module.exports={doQueryTTS:function(r){var s=r.content||"",i=r.speed||0,n=r.voiceType||0,u=r.volume||0,a=r.language||1,d=r.projectId||0,c=r.sampleRate||16e3,l=r.success,p=r.fail,m=o.GetQCloudSecret();e=new t({appId:m.appid,secretId:m.secretid,secretKey:m.secretkey,token:m.token});var y={text:s,speed:i,voiceType:n,volume:u,language:a,projectId:d,sampleRate:c};r.emotionCategory&&(y.emotionCategory=r.emotionCategory),r.emotionIntensity&&r.emotionIntensity>=50&&r.emotionIntensity<=200&&(y.emotionIntensity=r.emotionIntensity),e.request(y,(function(e,t){if(e)p(e);else{var o=t.Response;if(o.Error){var r={Error:o.Error,requestId:o.RequestId};p(r)}else{if(e&&e.errCode&&e.errMsg)return void p(e);var i=t.Response.AudioUrl,n={result:{origin:s,filePath:i},requestId:o.RequestId};l(n)}}}))}}; 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./api/RealtimeASR.js"),t=require("./api/SentenceASR.js"),r=require("./api/TTS.js"),n=require("./api/TMT.js"),i=require("./utils/config.js"),c=require("./api/SpeechRecongnizer.js");module.exports={setQCloudSecret:i.SetQCloudSecret,getRecordRecognitionManager:e.getRecordRecognitionManager,textToSpeech:r.doQueryTTS,translateText:n.getTranslateText,translateImage:n.getTranslateImage,languageDetect:n.getLanguageDetect,sentenceRecognition:t.getSentenceRecognition,speechRecognizerManager:c.getRecordSpeechRecognizer,realtimeRecognition:c.getSpeechRecognizer,speechRecognizerManagerV2:c.getRecordSpeechRecognizerV2}; 
 			}); 
		define("utils/aaiApi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t=require("../@babel/runtime/helpers/objectSpread2"),r=require("../@babel/runtime/helpers/typeof"),o=require("./sendYunAPIRequestV3"),n=require("./config");var c=function(){function e(e,t){Error.call(this,t),this.type=e,this.message=t}return e.prototype=new Error,e.prototype.constructor=e,e}(),s=function(){};module.exports={SetQCloudSecret:function(t){if(!t.secretid||!t.secretkey)throw new c("ERR_INVALID_PARAMS","请传入云账号信息");var r={SecretId:t.secretid,SecretKey:t.secretkey,path:"/"};t.token&&(r.Token=t.token),e||(e=new o(r))},doQuerySentence:function(o,i){if("object"!==r(o)){var u="请求传参应为 object 类型，但实际传了 ".concat(r(o)," 类型");throw new c("ERR_INVALID_PARAMS",u)}var p=o.success||s,a=o.fail||s,l=o.complete||s;delete o.SecretKey;var f=function(e){a(e),l(arguments)};if(!e)throw new c("ERR_INVALID_PARAMS","请传入云账号信息");e.request(o,t({serviceType:"asr",baseHost:"tencentcloudapi.com",method:"POST"},i),(function(t,r){var o;(e=null,t)?f(t):r&&r.Response?(n.GetQCloudSecret().openConsole&&console.log("doQuery succ：",JSON.stringify(r.Response)),function(e){p(e),l(arguments)}(r)):("请求Response为空",o=new c("error","请求Response为空"),f(o))}))}}; 
 			}); 
		define("utils/api.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";module.exports={getServerTime:function(t){return new Promise((function(e,n){try{wx.request({url:"https://asr.cloud.tencent.com/server_time",data:t,method:"GET",dataType:"json",success:function(t){t&&t.data?e(t&&t.data):n(t)},fail:function(t){n(t)}})}catch(t){n(t)}}))}}; 
 			}); 
		define("utils/asrApi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=(0,require("../@babel/runtime/helpers/interopRequireDefault").default)(require("./errorHandle")),t=require("./cryptojs"),o=require("./util"),n=require("./config"),r={},c=[],a=function(e){Object.assign(r,{method:"POST",protocol:"https",serviceType:"asr"},e)};function i(t,o,r,a,i,l,s){try{var u={"content-type":"application/octet-stream",Host:"asr.cloud.tencent.com","Content-Length":r.bufLen,Authorization:a};s&&(u["X-TC-Token"]=s),wx.request({url:"https://asr.cloud.tencent.com/asr/v1/".concat(t,"?").concat(o),data:r.frameBuffer,method:"POST",header:u,success:function(t){if(t.data){var o=t.data;if(e.default[o.code]&&127!==o.code){var r=o;return console.log("queryASR fail:",JSON.stringify(r)),void l(r,null)}0===o.code&&(n.GetQCloudSecret().openConsole&&console.log("queryASR succ:",JSON.stringify(o)),o.final=i.end,l(null,o),c[i.seq]=!0)}else l(null,t),c[i.seq]=!0},fail:function(e){console.log("queryASR fail:",e),l(e,null)}})}catch(e){console.log(e)}}a.prototype.generateUrl=function(e){e=e||{};var t=this._getHost(e),o=void 0===e.path?r.path:e.path;return"".concat(e.protocol||r.protocol,"://").concat(t).concat(o)},a.prototype.generateQueryString=function(e){var t=(e=e||r).timeStampOffset?+e.timeStampOffset+Math.round(Date.now()/1e3):Math.round(Date.now()/1e3),o=null===e.engine_model_type?"16k_zh":e.engine_model_type,c={secretid:e.secretId||r.secretId,timestamp:t,expired:t+180,nonce:Math.round(65535*Math.random()),seq:e.seq,end:e.end,res_type:0,sub_service_type:1,engine_model_type:o,result_text_format:0,voice_format:8,source:0,voice_id:e.voice_id,timeout:5e3},a=Object.prototype.hasOwnProperty;a.call(e,"hotword_id")&&(c.hotword_id=e.hotword_id),a.call(e,"customization_id")&&(c.customization_id=e.customization_id),a.call(e,"filter_dirty")&&(c.filter_dirty=e.filter_dirty),a.call(e,"filter_modal")&&(c.filter_modal=e.filter_modal),a.call(e,"filter_punc")&&(c.filter_punc=e.filter_punc),a.call(e,"convert_num_mode")&&(c.convert_num_mode=e.convert_num_mode),a.call(e,"needvad")&&(c.needvad=e.needvad);var i=Object.keys(c),l="",s=this._getHost(e),u=(e.method||r.method).toUpperCase(),d=r.path;i.sort(),i.forEach((function(e){var t=c[e];""!==e&&((null==t||"number"==typeof t&&isNaN(t))&&(t=""),l+="&".concat(e,"=").concat(t))})),l=l.slice(1);var p=e.appId||r.appId;return n.GetQCloudSecret().openConsole&&console.log("加密前：","".concat(u).concat(s).concat(d).concat(p,"?").concat(l)),l},a.prototype.request=function(e,t,o){"function"==typeof e&&(t=e,e=r),e=e||r,t=t||Function.prototype;var a=this.generateQueryString(e),l=e.appId||r.appId,s=this.sign("POSTasr.cloud.tencent.com/asr/v1/".concat(l,"?").concat(a),e.secretKey||r.secretKey);setTimeout((function(){c[e.seq]||(n.GetQCloudSecret().openConsole&&console.log("未收到回包，重发一次，seq=",e.seq),i(l,a,o,s,e,t,r.token))}),1e3),i(l,a,o,s,e,t,r.token)},a.prototype.sign=function(e,r){var c=t.HmacSHA1(e,r),a=o.toUint8Array(c),i=wx.arrayBufferToBase64(a);return n.GetQCloudSecret().openConsole&&console.log("wx.base64后：",i),i},a.prototype._getHost=function(e){var t=e.host;return t||(t="".concat(e.serviceType||r.serviceType,".").concat(e.baseHost||r.baseHost)),t},module.exports=a; 
 			}); 
		define("utils/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e={appid:0,secretid:"",secretkey:"",openConsole:!0};module.exports={SetQCloudSecret:function(t,o,r,n,c){e.appid=t,e.secretid=o,e.secretkey=r,e.openConsole=n,e.token=c},GetQCloudSecret:function(){return e}}; 
 			}); 
		define("utils/crypto-js.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t,e=require("../@babel/runtime/helpers/typeof");t=function(){var t,e,r,i,n,o,s,a,c=c||function(t,e){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),"undefined"!=typeof self&&self.crypto&&(r=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&"undefined"!=typeof global&&global.crypto&&(r=global.crypto),!r&&"function"==typeof require)try{r=require("crypto")}catch(t){}var i=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(t){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(t){}}throw new Error("Native crypto module could not be used to get secure random number.")},n=Object.create||function(){function t(){}return function(e){var r;return t.prototype=e,r=new t,t.prototype=null,r}}(),o={},s=o.lib={},a=s.Base={extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},c=s.WordArray=a.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:4*t.length},toString:function(t){return(t||l).stringify(this)},concat:function(t){var e=this.words,r=t.words,i=this.sigBytes,n=t.sigBytes;if(this.clamp(),i%4)for(var o=0;o<n;o++){var s=r[o>>>2]>>>24-o%4*8&255;e[i+o>>>2]|=s<<24-(i+o)%4*8}else for(var a=0;a<n;a+=4)e[i+a>>>2]=r[a>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,r=this.sigBytes;e[r>>>2]&=4294967295<<32-r%4*8,e.length=t.ceil(r/4)},clone:function(){var t=a.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var e=[],r=0;r<t;r+=4)e.push(i());return new c.init(e,t)}}),h=o.enc={},l=h.Hex={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push((o>>>4).toString(16)),i.push((15&o).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i+=2)r[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new c.init(r,e/2)}},f=h.Latin1={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n++){var o=e[n>>>2]>>>24-n%4*8&255;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var e=t.length,r=[],i=0;i<e;i++)r[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new c.init(r,e)}},u=h.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},d=s.BufferedBlockAlgorithm=a.extend({reset:function(){this._data=new c.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var r,i=this._data,n=i.words,o=i.sigBytes,s=this.blockSize,a=o/(4*s),h=(a=e?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,l=t.min(4*h,o);if(h){for(var f=0;f<h;f+=s)this._doProcessBlock(n,f);r=n.splice(0,h),i.sigBytes-=l}return new c.init(r,l)},clone:function(){var t=a.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),p=(s.Hasher=d.extend({cfg:a.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){d.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,r){return new t.init(r).finalize(e)}},_createHmacHelper:function(t){return function(e,r){return new p.HMAC.init(t,r).finalize(e)}}}),o.algo={});return o}(Math);return e=(t=c).lib,r=e.Base,i=e.WordArray,(n=t.x64={}).Word=r.extend({init:function(t,e){this.high=t,this.low=e}}),n.WordArray=r.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=null!=e?e:8*t.length},toX32:function(){for(var t=this.words,e=t.length,r=[],n=0;n<e;n++){var o=t[n];r.push(o.high),r.push(o.low)}return i.create(r,this.sigBytes)},clone:function(){for(var t=r.clone.call(this),e=t.words=this.words.slice(0),i=e.length,n=0;n<i;n++)e[n]=e[n].clone();return t}}),function(){if("function"==typeof ArrayBuffer){var t=c.lib.WordArray,e=t.init;(t.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var r=t.byteLength,i=[],n=0;n<r;n++)i[n>>>2]|=t[n]<<24-n%4*8;e.call(this,i,r)}else e.apply(this,arguments)}).prototype=t}}(),function(){var t=c,e=t.lib.WordArray,r=t.enc;function i(t){return t<<8&4278255360|t>>>8&16711935}r.Utf16=r.Utf16BE={stringify:function(t){for(var e=t.words,r=t.sigBytes,i=[],n=0;n<r;n+=2){var o=e[n>>>2]>>>16-n%4*8&65535;i.push(String.fromCharCode(o))}return i.join("")},parse:function(t){for(var r=t.length,i=[],n=0;n<r;n++)i[n>>>1]|=t.charCodeAt(n)<<16-n%2*16;return e.create(i,2*r)}},r.Utf16LE={stringify:function(t){for(var e=t.words,r=t.sigBytes,n=[],o=0;o<r;o+=2){var s=i(e[o>>>2]>>>16-o%4*8&65535);n.push(String.fromCharCode(s))}return n.join("")},parse:function(t){for(var r=t.length,n=[],o=0;o<r;o++)n[o>>>1]|=i(t.charCodeAt(o)<<16-o%2*16);return e.create(n,2*r)}}}(),function(){var t=c,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,r=t.sigBytes,i=this._map;t.clamp();for(var n=[],o=0;o<r;o+=3)for(var s=(e[o>>>2]>>>24-o%4*8&255)<<16|(e[o+1>>>2]>>>24-(o+1)%4*8&255)<<8|e[o+2>>>2]>>>24-(o+2)%4*8&255,a=0;a<4&&o+.75*a<r;a++)n.push(i.charAt(s>>>6*(3-a)&63));var c=i.charAt(64);if(c)for(;n.length%4;)n.push(c);return n.join("")},parse:function(t){var r=t.length,i=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<i.length;o++)n[i.charCodeAt(o)]=o}var s=i.charAt(64);if(s){var a=t.indexOf(s);-1!==a&&(r=a)}return function(t,r,i){for(var n=[],o=0,s=0;s<r;s++)if(s%4){var a=i[t.charCodeAt(s-1)]<<s%4*2,c=i[t.charCodeAt(s)]>>>6-s%4*2,h=a|c;n[o>>>2]|=h<<24-o%4*8,o++}return e.create(n,o)}(t,r,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),function(){var t=c,e=t.lib.WordArray;function r(t,r,i){for(var n=[],o=0,s=0;s<r;s++)if(s%4){var a=i[t.charCodeAt(s-1)]<<s%4*2|i[t.charCodeAt(s)]>>>6-s%4*2;n[o>>>2]|=a<<24-o%4*8,o++}return e.create(n,o)}t.enc.Base64url={stringify:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=t.words,i=t.sigBytes,n=e?this._safe_map:this._map;t.clamp();for(var o=[],s=0;s<i;s+=3)for(var a=r[s>>>2]>>>24-s%4*8&255,c=r[s+1>>>2]>>>24-(s+1)%4*8&255,h=r[s+2>>>2]>>>24-(s+2)%4*8&255,l=a<<16|c<<8|h,f=0;f<4&&s+.75*f<i;f++)o.push(n.charAt(l>>>6*(3-f)&63));var u=n.charAt(64);if(u)for(;o.length%4;)o.push(u);return o.join("")},parse:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=t.length,n=e?this._safe_map:this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var s=0;s<n.length;s++)o[n.charCodeAt(s)]=s}var a=n.charAt(64);if(a){var c=t.indexOf(a);-1!==c&&(i=c)}return r(t,i,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",_safe_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"}}(),function(t){var e=c,r=e.lib,i=r.WordArray,n=r.Hasher,o=e.algo,s=[];!function(){for(var e=0;e<64;e++)s[e]=4294967296*t.abs(t.sin(e+1))|0}();var a=o.MD5=n.extend({_doReset:function(){this._hash=new i.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o=this._hash.words,a=t[e+0],c=t[e+1],d=t[e+2],p=t[e+3],_=t[e+4],v=t[e+5],y=t[e+6],g=t[e+7],B=t[e+8],w=t[e+9],k=t[e+10],m=t[e+11],S=t[e+12],x=t[e+13],b=t[e+14],A=t[e+15],H=o[0],z=o[1],C=o[2],D=o[3];H=h(H,z,C,D,a,7,s[0]),D=h(D,H,z,C,c,12,s[1]),C=h(C,D,H,z,d,17,s[2]),z=h(z,C,D,H,p,22,s[3]),H=h(H,z,C,D,_,7,s[4]),D=h(D,H,z,C,v,12,s[5]),C=h(C,D,H,z,y,17,s[6]),z=h(z,C,D,H,g,22,s[7]),H=h(H,z,C,D,B,7,s[8]),D=h(D,H,z,C,w,12,s[9]),C=h(C,D,H,z,k,17,s[10]),z=h(z,C,D,H,m,22,s[11]),H=h(H,z,C,D,S,7,s[12]),D=h(D,H,z,C,x,12,s[13]),C=h(C,D,H,z,b,17,s[14]),H=l(H,z=h(z,C,D,H,A,22,s[15]),C,D,c,5,s[16]),D=l(D,H,z,C,y,9,s[17]),C=l(C,D,H,z,m,14,s[18]),z=l(z,C,D,H,a,20,s[19]),H=l(H,z,C,D,v,5,s[20]),D=l(D,H,z,C,k,9,s[21]),C=l(C,D,H,z,A,14,s[22]),z=l(z,C,D,H,_,20,s[23]),H=l(H,z,C,D,w,5,s[24]),D=l(D,H,z,C,b,9,s[25]),C=l(C,D,H,z,p,14,s[26]),z=l(z,C,D,H,B,20,s[27]),H=l(H,z,C,D,x,5,s[28]),D=l(D,H,z,C,d,9,s[29]),C=l(C,D,H,z,g,14,s[30]),H=f(H,z=l(z,C,D,H,S,20,s[31]),C,D,v,4,s[32]),D=f(D,H,z,C,B,11,s[33]),C=f(C,D,H,z,m,16,s[34]),z=f(z,C,D,H,b,23,s[35]),H=f(H,z,C,D,c,4,s[36]),D=f(D,H,z,C,_,11,s[37]),C=f(C,D,H,z,g,16,s[38]),z=f(z,C,D,H,k,23,s[39]),H=f(H,z,C,D,x,4,s[40]),D=f(D,H,z,C,a,11,s[41]),C=f(C,D,H,z,p,16,s[42]),z=f(z,C,D,H,y,23,s[43]),H=f(H,z,C,D,w,4,s[44]),D=f(D,H,z,C,S,11,s[45]),C=f(C,D,H,z,A,16,s[46]),H=u(H,z=f(z,C,D,H,d,23,s[47]),C,D,a,6,s[48]),D=u(D,H,z,C,g,10,s[49]),C=u(C,D,H,z,b,15,s[50]),z=u(z,C,D,H,v,21,s[51]),H=u(H,z,C,D,S,6,s[52]),D=u(D,H,z,C,p,10,s[53]),C=u(C,D,H,z,k,15,s[54]),z=u(z,C,D,H,c,21,s[55]),H=u(H,z,C,D,B,6,s[56]),D=u(D,H,z,C,A,10,s[57]),C=u(C,D,H,z,y,15,s[58]),z=u(z,C,D,H,x,21,s[59]),H=u(H,z,C,D,_,6,s[60]),D=u(D,H,z,C,m,10,s[61]),C=u(C,D,H,z,d,15,s[62]),z=u(z,C,D,H,w,21,s[63]),o[0]=o[0]+H|0,o[1]=o[1]+z|0,o[2]=o[2]+C|0,o[3]=o[3]+D|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;r[n>>>5]|=128<<24-n%32;var o=t.floor(i/4294967296),s=i;r[15+(n+64>>>9<<4)]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),r[14+(n+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),e.sigBytes=4*(r.length+1),this._process();for(var a=this._hash,c=a.words,h=0;h<4;h++){var l=c[h];c[h]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return a},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});function h(t,e,r,i,n,o,s){var a=t+(e&r|~e&i)+n+s;return(a<<o|a>>>32-o)+e}function l(t,e,r,i,n,o,s){var a=t+(e&i|r&~i)+n+s;return(a<<o|a>>>32-o)+e}function f(t,e,r,i,n,o,s){var a=t+(e^r^i)+n+s;return(a<<o|a>>>32-o)+e}function u(t,e,r,i,n,o,s){var a=t+(r^(e|~i))+n+s;return(a<<o|a>>>32-o)+e}e.MD5=n._createHelper(a),e.HmacMD5=n._createHmacHelper(a)}(Math),function(){var t=c,e=t.lib,r=e.WordArray,i=e.Hasher,n=t.algo,o=[],s=n.SHA1=i.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],s=r[2],a=r[3],c=r[4],h=0;h<80;h++){if(h<16)o[h]=0|t[e+h];else{var l=o[h-3]^o[h-8]^o[h-14]^o[h-16];o[h]=l<<1|l>>>31}var f=(i<<5|i>>>27)+c+o[h];f+=h<20?1518500249+(n&s|~n&a):h<40?1859775393+(n^s^a):h<60?(n&s|n&a|s&a)-1894007588:(n^s^a)-899497514,c=a,a=s,s=n<<30|n>>>2,n=i,i=f}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+s|0,r[3]=r[3]+a|0,r[4]=r[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=Math.floor(r/4294967296),e[15+(i+64>>>9<<4)]=r,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});t.SHA1=i._createHelper(s),t.HmacSHA1=i._createHmacHelper(s)}(),function(t){var e=c,r=e.lib,i=r.WordArray,n=r.Hasher,o=e.algo,s=[],a=[];!function(){function e(e){for(var r=t.sqrt(e),i=2;i<=r;i++)if(!(e%i))return!1;return!0}function r(t){return 4294967296*(t-(0|t))|0}for(var i=2,n=0;n<64;)e(i)&&(n<8&&(s[n]=r(t.pow(i,.5))),a[n]=r(t.pow(i,1/3)),n++),i++}();var h=[],l=o.SHA256=n.extend({_doReset:function(){this._hash=new i.init(s.slice(0))},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],l=r[5],f=r[6],u=r[7],d=0;d<64;d++){if(d<16)h[d]=0|t[e+d];else{var p=h[d-15],_=(p<<25|p>>>7)^(p<<14|p>>>18)^p>>>3,v=h[d-2],y=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;h[d]=_+h[d-7]+y+h[d-16]}var g=i&n^i&o^n&o,B=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22),w=u+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&l^~c&f)+a[d]+h[d];u=f,f=l,l=c,c=s+w|0,s=o,o=n,n=i,i=w+(B+g)|0}r[0]=r[0]+i|0,r[1]=r[1]+n|0,r[2]=r[2]+o|0,r[3]=r[3]+s|0,r[4]=r[4]+c|0,r[5]=r[5]+l|0,r[6]=r[6]+f|0,r[7]=r[7]+u|0},_doFinalize:function(){var e=this._data,r=e.words,i=8*this._nDataBytes,n=8*e.sigBytes;return r[n>>>5]|=128<<24-n%32,r[14+(n+64>>>9<<4)]=t.floor(i/4294967296),r[15+(n+64>>>9<<4)]=i,e.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA256=n._createHelper(l),e.HmacSHA256=n._createHmacHelper(l)}(Math),function(){var t=c,e=t.lib.WordArray,r=t.algo,i=r.SHA256,n=r.SHA224=i.extend({_doReset:function(){this._hash=new e.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=i._doFinalize.call(this);return t.sigBytes-=4,t}});t.SHA224=i._createHelper(n),t.HmacSHA224=i._createHmacHelper(n)}(),function(){var t=c,e=t.lib.Hasher,r=t.x64,i=r.Word,n=r.WordArray,o=t.algo;function s(){return i.create.apply(i,arguments)}var a=[s(1116352408,3609767458),s(1899447441,602891725),s(3049323471,3964484399),s(3921009573,2173295548),s(961987163,4081628472),s(1508970993,3053834265),s(2453635748,2937671579),s(2870763221,3664609560),s(3624381080,2734883394),s(310598401,1164996542),s(607225278,1323610764),s(1426881987,3590304994),s(1925078388,4068182383),s(2162078206,991336113),s(2614888103,633803317),s(3248222580,3479774868),s(3835390401,2666613458),s(4022224774,944711139),s(264347078,2341262773),s(604807628,2007800933),s(770255983,1495990901),s(1249150122,1856431235),s(1555081692,3175218132),s(1996064986,2198950837),s(2554220882,3999719339),s(2821834349,766784016),s(2952996808,2566594879),s(3210313671,3203337956),s(3336571891,1034457026),s(3584528711,2466948901),s(113926993,3758326383),s(338241895,168717936),s(666307205,1188179964),s(773529912,1546045734),s(1294757372,1522805485),s(1396182291,2643833823),s(1695183700,2343527390),s(1986661051,1014477480),s(2177026350,1206759142),s(2456956037,344077627),s(2730485921,1290863460),s(2820302411,3158454273),s(3259730800,3505952657),s(3345764771,106217008),s(3516065817,3606008344),s(3600352804,1432725776),s(4094571909,1467031594),s(275423344,851169720),s(430227734,3100823752),s(506948616,1363258195),s(659060556,3750685593),s(883997877,3785050280),s(958139571,3318307427),s(1322822218,3812723403),s(1537002063,2003034995),s(1747873779,3602036899),s(1955562222,1575990012),s(2024104815,1125592928),s(2227730452,2716904306),s(2361852424,442776044),s(2428436474,593698344),s(2756734187,3733110249),s(3204031479,2999351573),s(3329325298,3815920427),s(3391569614,3928383900),s(3515267271,566280711),s(3940187606,3454069534),s(4118630271,4000239992),s(116418474,1914138554),s(174292421,2731055270),s(289380356,3203993006),s(460393269,320620315),s(685471733,587496836),s(852142971,1086792851),s(1017036298,365543100),s(1126000580,2618297676),s(1288033470,3409855158),s(1501505948,4234509866),s(1607167915,987167468),s(1816402316,1246189591)],h=[];!function(){for(var t=0;t<80;t++)h[t]=s()}();var l=o.SHA512=e.extend({_doReset:function(){this._hash=new n.init([new i.init(1779033703,4089235720),new i.init(3144134277,2227873595),new i.init(1013904242,4271175723),new i.init(2773480762,1595750129),new i.init(1359893119,2917565137),new i.init(2600822924,725511199),new i.init(528734635,4215389547),new i.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var r=this._hash.words,i=r[0],n=r[1],o=r[2],s=r[3],c=r[4],l=r[5],f=r[6],u=r[7],d=i.high,p=i.low,_=n.high,v=n.low,y=o.high,g=o.low,B=s.high,w=s.low,k=c.high,m=c.low,S=l.high,x=l.low,b=f.high,A=f.low,H=u.high,z=u.low,C=d,D=p,E=_,R=v,M=y,F=g,P=B,W=w,O=k,I=m,U=S,K=x,X=b,L=A,j=H,T=z,N=0;N<80;N++){var q,Z,V=h[N];if(N<16)Z=V.high=0|t[e+2*N],q=V.low=0|t[e+2*N+1];else{var G=h[N-15],J=G.high,Q=G.low,Y=(J>>>1|Q<<31)^(J>>>8|Q<<24)^J>>>7,$=(Q>>>1|J<<31)^(Q>>>8|J<<24)^(Q>>>7|J<<25),tt=h[N-2],et=tt.high,rt=tt.low,it=(et>>>19|rt<<13)^(et<<3|rt>>>29)^et>>>6,nt=(rt>>>19|et<<13)^(rt<<3|et>>>29)^(rt>>>6|et<<26),ot=h[N-7],st=ot.high,at=ot.low,ct=h[N-16],ht=ct.high,lt=ct.low;Z=(Z=(Z=Y+st+((q=$+at)>>>0<$>>>0?1:0))+it+((q+=nt)>>>0<nt>>>0?1:0))+ht+((q+=lt)>>>0<lt>>>0?1:0),V.high=Z,V.low=q}var ft,ut=O&U^~O&X,dt=I&K^~I&L,pt=C&E^C&M^E&M,_t=D&R^D&F^R&F,vt=(C>>>28|D<<4)^(C<<30|D>>>2)^(C<<25|D>>>7),yt=(D>>>28|C<<4)^(D<<30|C>>>2)^(D<<25|C>>>7),gt=(O>>>14|I<<18)^(O>>>18|I<<14)^(O<<23|I>>>9),Bt=(I>>>14|O<<18)^(I>>>18|O<<14)^(I<<23|O>>>9),wt=a[N],kt=wt.high,mt=wt.low,St=j+gt+((ft=T+Bt)>>>0<T>>>0?1:0),xt=yt+_t;j=X,T=L,X=U,L=K,U=O,K=I,O=P+(St=(St=(St=St+ut+((ft+=dt)>>>0<dt>>>0?1:0))+kt+((ft+=mt)>>>0<mt>>>0?1:0))+Z+((ft+=q)>>>0<q>>>0?1:0))+((I=W+ft|0)>>>0<W>>>0?1:0)|0,P=M,W=F,M=E,F=R,E=C,R=D,C=St+(vt+pt+(xt>>>0<yt>>>0?1:0))+((D=ft+xt|0)>>>0<ft>>>0?1:0)|0}p=i.low=p+D,i.high=d+C+(p>>>0<D>>>0?1:0),v=n.low=v+R,n.high=_+E+(v>>>0<R>>>0?1:0),g=o.low=g+F,o.high=y+M+(g>>>0<F>>>0?1:0),w=s.low=w+W,s.high=B+P+(w>>>0<W>>>0?1:0),m=c.low=m+I,c.high=k+O+(m>>>0<I>>>0?1:0),x=l.low=x+K,l.high=S+U+(x>>>0<K>>>0?1:0),A=f.low=A+L,f.high=b+X+(A>>>0<L>>>0?1:0),z=u.low=z+T,u.high=H+j+(z>>>0<T>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;return e[i>>>5]|=128<<24-i%32,e[30+(i+128>>>10<<5)]=Math.floor(r/4294967296),e[31+(i+128>>>10<<5)]=r,t.sigBytes=4*e.length,this._process(),this._hash.toX32()},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});t.SHA512=e._createHelper(l),t.HmacSHA512=e._createHmacHelper(l)}(),function(){var t=c,e=t.x64,r=e.Word,i=e.WordArray,n=t.algo,o=n.SHA512,s=n.SHA384=o.extend({_doReset:function(){this._hash=new i.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var t=o._doFinalize.call(this);return t.sigBytes-=16,t}});t.SHA384=o._createHelper(s),t.HmacSHA384=o._createHmacHelper(s)}(),function(t){var e=c,r=e.lib,i=r.WordArray,n=r.Hasher,o=e.x64.Word,s=e.algo,a=[],h=[],l=[];!function(){for(var t=1,e=0,r=0;r<24;r++){a[t+5*e]=(r+1)*(r+2)/2%64;var i=(2*t+3*e)%5;t=e%5,e=i}for(t=0;t<5;t++)for(e=0;e<5;e++)h[t+5*e]=e+(2*t+3*e)%5*5;for(var n=1,s=0;s<24;s++){for(var c=0,f=0,u=0;u<7;u++){if(1&n){var d=(1<<u)-1;d<32?f^=1<<d:c^=1<<d-32}128&n?n=n<<1^113:n<<=1}l[s]=o.create(c,f)}}();var f=[];!function(){for(var t=0;t<25;t++)f[t]=o.create()}();var u=s.SHA3=n.extend({cfg:n.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new o.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var r=this._state,i=this.blockSize/2,n=0;n<i;n++){var o=t[e+2*n],s=t[e+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),(z=r[n]).high^=s,z.low^=o}for(var c=0;c<24;c++){for(var u=0;u<5;u++){for(var d=0,p=0,_=0;_<5;_++)d^=(z=r[u+5*_]).high,p^=z.low;var v=f[u];v.high=d,v.low=p}for(u=0;u<5;u++){var y=f[(u+4)%5],g=f[(u+1)%5],B=g.high,w=g.low;for(d=y.high^(B<<1|w>>>31),p=y.low^(w<<1|B>>>31),_=0;_<5;_++)(z=r[u+5*_]).high^=d,z.low^=p}for(var k=1;k<25;k++){var m=(z=r[k]).high,S=z.low,x=a[k];x<32?(d=m<<x|S>>>32-x,p=S<<x|m>>>32-x):(d=S<<x-32|m>>>64-x,p=m<<x-32|S>>>64-x);var b=f[h[k]];b.high=d,b.low=p}var A=f[0],H=r[0];for(A.high=H.high,A.low=H.low,u=0;u<5;u++)for(_=0;_<5;_++){var z=r[k=u+5*_],C=f[k],D=f[(u+1)%5+5*_],E=f[(u+2)%5+5*_];z.high=C.high^~D.high&E.high,z.low=C.low^~D.low&E.low}z=r[0];var R=l[c];z.high^=R.high,z.low^=R.low}},_doFinalize:function(){var e=this._data,r=e.words,n=(this._nDataBytes,8*e.sigBytes),o=32*this.blockSize;r[n>>>5]|=1<<24-n%32,r[(t.ceil((n+1)/o)*o>>>5)-1]|=128,e.sigBytes=4*r.length,this._process();for(var s=this._state,a=this.cfg.outputLength/8,c=a/8,h=[],l=0;l<c;l++){var f=s[l],u=f.high,d=f.low;u=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8),d=16711935&(d<<8|d>>>24)|4278255360&(d<<24|d>>>8),h.push(d),h.push(u)}return new i.init(h,a)},clone:function(){for(var t=n.clone.call(this),e=t._state=this._state.slice(0),r=0;r<25;r++)e[r]=e[r].clone();return t}});e.SHA3=n._createHelper(u),e.HmacSHA3=n._createHmacHelper(u)}(Math),function(t){var e=c,r=e.lib,i=r.WordArray,n=r.Hasher,o=e.algo,s=i.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),a=i.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),h=i.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),l=i.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),f=i.create([0,1518500249,1859775393,2400959708,2840853838]),u=i.create([1352829926,1548603684,1836072691,2053994217,0]),d=o.RIPEMD160=n.extend({_doReset:function(){this._hash=i.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var r=0;r<16;r++){var i=e+r,n=t[i];t[i]=16711935&(n<<8|n>>>24)|4278255360&(n<<24|n>>>8)}var o,c,d,w,k,m,S,x,b,A,H,z=this._hash.words,C=f.words,D=u.words,E=s.words,R=a.words,M=h.words,F=l.words;for(m=o=z[0],S=c=z[1],x=d=z[2],b=w=z[3],A=k=z[4],r=0;r<80;r+=1)H=o+t[e+E[r]]|0,H+=r<16?p(c,d,w)+C[0]:r<32?_(c,d,w)+C[1]:r<48?v(c,d,w)+C[2]:r<64?y(c,d,w)+C[3]:g(c,d,w)+C[4],H=(H=B(H|=0,M[r]))+k|0,o=k,k=w,w=B(d,10),d=c,c=H,H=m+t[e+R[r]]|0,H+=r<16?g(S,x,b)+D[0]:r<32?y(S,x,b)+D[1]:r<48?v(S,x,b)+D[2]:r<64?_(S,x,b)+D[3]:p(S,x,b)+D[4],H=(H=B(H|=0,F[r]))+A|0,m=A,A=b,b=B(x,10),x=S,S=H;H=z[1]+d+b|0,z[1]=z[2]+w+A|0,z[2]=z[3]+k+m|0,z[3]=z[4]+o+S|0,z[4]=z[0]+c+x|0,z[0]=H},_doFinalize:function(){var t=this._data,e=t.words,r=8*this._nDataBytes,i=8*t.sigBytes;e[i>>>5]|=128<<24-i%32,e[14+(i+64>>>9<<4)]=16711935&(r<<8|r>>>24)|4278255360&(r<<24|r>>>8),t.sigBytes=4*(e.length+1),this._process();for(var n=this._hash,o=n.words,s=0;s<5;s++){var a=o[s];o[s]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}return n},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});function p(t,e,r){return t^e^r}function _(t,e,r){return t&e|~t&r}function v(t,e,r){return(t|~e)^r}function y(t,e,r){return t&r|e&~r}function g(t,e,r){return t^(e|~r)}function B(t,e){return t<<e|t>>>32-e}e.RIPEMD160=n._createHelper(d),e.HmacRIPEMD160=n._createHmacHelper(d)}(Math),function(){var t=c,e=t.lib.Base,r=t.enc.Utf8;t.algo.HMAC=e.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=r.parse(e));var i=t.blockSize,n=4*i;e.sigBytes>n&&(e=t.finalize(e)),e.clamp();for(var o=this._oKey=e.clone(),s=this._iKey=e.clone(),a=o.words,c=s.words,h=0;h<i;h++)a[h]^=1549556828,c[h]^=909522486;o.sigBytes=s.sigBytes=n,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,r=e.finalize(t);return e.reset(),e.finalize(this._oKey.clone().concat(r))}})}(),function(){var t=c,e=t.lib,r=e.Base,i=e.WordArray,n=t.algo,o=n.SHA1,s=n.HMAC,a=n.PBKDF2=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r=this.cfg,n=s.create(r.hasher,t),o=i.create(),a=i.create([1]),c=o.words,h=a.words,l=r.keySize,f=r.iterations;c.length<l;){var u=n.update(e).finalize(a);n.reset();for(var d=u.words,p=d.length,_=u,v=1;v<f;v++){_=n.finalize(_),n.reset();for(var y=_.words,g=0;g<p;g++)d[g]^=y[g]}o.concat(u),h[0]++}return o.sigBytes=4*l,o}});t.PBKDF2=function(t,e,r){return a.create(r).compute(t,e)}}(),function(){var t=c,e=t.lib,r=e.Base,i=e.WordArray,n=t.algo,o=n.MD5,s=n.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:o,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var r,n=this.cfg,o=n.hasher.create(),s=i.create(),a=s.words,c=n.keySize,h=n.iterations;a.length<c;){r&&o.update(r),r=o.update(t).finalize(e),o.reset();for(var l=1;l<h;l++)r=o.finalize(r),o.reset();s.concat(r)}return s.sigBytes=4*c,s}});t.EvpKDF=function(t,e,r){return s.create(r).compute(t,e)}}(),c.lib.Cipher||function(t){var e=c,r=e.lib,i=r.Base,n=r.WordArray,o=r.BufferedBlockAlgorithm,s=e.enc,a=(s.Utf8,s.Base64),h=e.algo.EvpKDF,l=r.Cipher=o.extend({cfg:i.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,r){this.cfg=this.cfg.extend(r),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?B:y}return function(e){return{encrypt:function(r,i,n){return t(i).encrypt(e,r,i,n)},decrypt:function(r,i,n){return t(i).decrypt(e,r,i,n)}}}}()}),f=(r.StreamCipher=l.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),e.mode={}),u=r.BlockCipherMode=i.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),d=f.CBC=function(){var t=u.extend();function e(t,e,r){var i,n=this._iv;n?(i=n,this._iv=void 0):i=this._prevBlock;for(var o=0;o<r;o++)t[e+o]^=i[o]}return t.Encryptor=t.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize;e.call(this,t,r,n),i.encryptBlock(t,r),this._prevBlock=t.slice(r,r+n)}}),t.Decryptor=t.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize,o=t.slice(r,r+n);i.decryptBlock(t,r),e.call(this,t,r,n),this._prevBlock=o}}),t}(),p=(e.pad={}).Pkcs7={pad:function(t,e){for(var r=4*e,i=r-t.sigBytes%r,o=i<<24|i<<16|i<<8|i,s=[],a=0;a<i;a+=4)s.push(o);var c=n.create(s,i);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},_=(r.BlockCipher=l.extend({cfg:l.cfg.extend({mode:d,padding:p}),reset:function(){var t;l.reset.call(this);var e=this.cfg,r=e.iv,i=e.mode;this._xformMode==this._ENC_XFORM_MODE?t=i.createEncryptor:(t=i.createDecryptor,this._minBufferSize=1),this._mode&&this._mode.__creator==t?this._mode.init(this,r&&r.words):(this._mode=t.call(i,this,r&&r.words),this._mode.__creator=t)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t,e=this.cfg.padding;return this._xformMode==this._ENC_XFORM_MODE?(e.pad(this._data,this.blockSize),t=this._process(!0)):(t=this._process(!0),e.unpad(t)),t},blockSize:4}),r.CipherParams=i.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),v=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext,r=t.salt;return(r?n.create([1398893684,1701076831]).concat(r).concat(e):e).toString(a)},parse:function(t){var e,r=a.parse(t),i=r.words;return 1398893684==i[0]&&1701076831==i[1]&&(e=n.create(i.slice(2,4)),i.splice(0,4),r.sigBytes-=16),_.create({ciphertext:r,salt:e})}},y=r.SerializableCipher=i.extend({cfg:i.extend({format:v}),encrypt:function(t,e,r,i){i=this.cfg.extend(i);var n=t.createEncryptor(r,i),o=n.finalize(e),s=n.cfg;return _.create({ciphertext:o,key:r,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:i.format})},decrypt:function(t,e,r,i){return i=this.cfg.extend(i),e=this._parse(e,i.format),t.createDecryptor(r,i).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),g=(e.kdf={}).OpenSSL={execute:function(t,e,r,i){i||(i=n.random(8));var o=h.create({keySize:e+r}).compute(t,i),s=n.create(o.words.slice(e),4*r);return o.sigBytes=4*e,_.create({key:o,iv:s,salt:i})}},B=r.PasswordBasedCipher=y.extend({cfg:y.cfg.extend({kdf:g}),encrypt:function(t,e,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,t.keySize,t.ivSize);i.iv=n.iv;var o=y.encrypt.call(this,t,e,n.key,i);return o.mixIn(n),o},decrypt:function(t,e,r,i){i=this.cfg.extend(i),e=this._parse(e,i.format);var n=i.kdf.execute(r,t.keySize,t.ivSize,e.salt);return i.iv=n.iv,y.decrypt.call(this,t,e,n.key,i)}})}(),c.mode.CFB=function(){var t=c.lib.BlockCipherMode.extend();function e(t,e,r,i){var n,o=this._iv;o?(n=o.slice(0),this._iv=void 0):n=this._prevBlock,i.encryptBlock(n,0);for(var s=0;s<r;s++)t[e+s]^=n[s]}return t.Encryptor=t.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize;e.call(this,t,r,n,i),this._prevBlock=t.slice(r,r+n)}}),t.Decryptor=t.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize,o=t.slice(r,r+n);e.call(this,t,r,n,i),this._prevBlock=o}}),t}(),c.mode.CTR=(o=c.lib.BlockCipherMode.extend(),s=o.Encryptor=o.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var s=o.slice(0);r.encryptBlock(s,0),o[i-1]=o[i-1]+1|0;for(var a=0;a<i;a++)t[e+a]^=s[a]}}),o.Decryptor=s,o),c.mode.CTRGladman=function(){var t=c.lib.BlockCipherMode.extend();function e(t){if(255==(t>>24&255)){var e=t>>16&255,r=t>>8&255,i=255&t;255===e?(e=0,255===r?(r=0,255===i?i=0:++i):++r):++e,t=0,t+=e<<16,t+=r<<8,t+=i}else t+=1<<24;return t}var r=t.Encryptor=t.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize,o=this._iv,s=this._counter;o&&(s=this._counter=o.slice(0),this._iv=void 0),function(t){0===(t[0]=e(t[0]))&&(t[1]=e(t[1]))}(s);var a=s.slice(0);i.encryptBlock(a,0);for(var c=0;c<n;c++)t[r+c]^=a[c]}});return t.Decryptor=r,t}(),c.mode.OFB=function(){var t=c.lib.BlockCipherMode.extend(),e=t.Encryptor=t.extend({processBlock:function(t,e){var r=this._cipher,i=r.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),r.encryptBlock(o,0);for(var s=0;s<i;s++)t[e+s]^=o[s]}});return t.Decryptor=e,t}(),c.mode.ECB=((a=c.lib.BlockCipherMode.extend()).Encryptor=a.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),a.Decryptor=a.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),a),c.pad.AnsiX923={pad:function(t,e){var r=t.sigBytes,i=4*e,n=i-r%i,o=r+n-1;t.clamp(),t.words[o>>>2]|=n<<24-o%4*8,t.sigBytes+=n},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},c.pad.Iso10126={pad:function(t,e){var r=4*e,i=r-t.sigBytes%r;t.concat(c.lib.WordArray.random(i-1)).concat(c.lib.WordArray.create([i<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},c.pad.Iso97971={pad:function(t,e){t.concat(c.lib.WordArray.create([2147483648],1)),c.pad.ZeroPadding.pad(t,e)},unpad:function(t){c.pad.ZeroPadding.unpad(t),t.sigBytes--}},c.pad.ZeroPadding={pad:function(t,e){var r=4*e;t.clamp(),t.sigBytes+=r-(t.sigBytes%r||r)},unpad:function(t){var e=t.words,r=t.sigBytes-1;for(r=t.sigBytes-1;r>=0;r--)if(e[r>>>2]>>>24-r%4*8&255){t.sigBytes=r+1;break}}},c.pad.NoPadding={pad:function(){},unpad:function(){}},function(t){var e=c,r=e.lib.CipherParams,i=e.enc.Hex;e.format.Hex={stringify:function(t){return t.ciphertext.toString(i)},parse:function(t){var e=i.parse(t);return r.create({ciphertext:e})}}}(),function(){var t=c,e=t.lib.BlockCipher,r=t.algo,i=[],n=[],o=[],s=[],a=[],h=[],l=[],f=[],u=[],d=[];!function(){for(var t=[],e=0;e<256;e++)t[e]=e<128?e<<1:e<<1^283;var r=0,c=0;for(e=0;e<256;e++){var p=c^c<<1^c<<2^c<<3^c<<4;p=p>>>8^255&p^99,i[r]=p,n[p]=r;var _=t[r],v=t[_],y=t[v],g=257*t[p]^16843008*p;o[r]=g<<24|g>>>8,s[r]=g<<16|g>>>16,a[r]=g<<8|g>>>24,h[r]=g,g=16843009*y^65537*v^257*_^16843008*r,l[p]=g<<24|g>>>8,f[p]=g<<16|g>>>16,u[p]=g<<8|g>>>24,d[p]=g,r?(r=_^t[t[t[y^_]]],c^=t[t[c]]):r=c=1}}();var p=[0,1,2,4,8,16,32,64,128,27,54],_=r.AES=e.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,r=t.sigBytes/4,n=4*((this._nRounds=r+6)+1),o=this._keySchedule=[],s=0;s<n;s++)s<r?o[s]=e[s]:(h=o[s-1],s%r?r>6&&s%r==4&&(h=i[h>>>24]<<24|i[h>>>16&255]<<16|i[h>>>8&255]<<8|i[255&h]):(h=i[(h=h<<8|h>>>24)>>>24]<<24|i[h>>>16&255]<<16|i[h>>>8&255]<<8|i[255&h],h^=p[s/r|0]<<24),o[s]=o[s-r]^h);for(var a=this._invKeySchedule=[],c=0;c<n;c++){if(s=n-c,c%4)var h=o[s];else h=o[s-4];a[c]=c<4||s<=4?h:l[i[h>>>24]]^f[i[h>>>16&255]]^u[i[h>>>8&255]]^d[i[255&h]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,o,s,a,h,i)},decryptBlock:function(t,e){var r=t[e+1];t[e+1]=t[e+3],t[e+3]=r,this._doCryptBlock(t,e,this._invKeySchedule,l,f,u,d,n),r=t[e+1],t[e+1]=t[e+3],t[e+3]=r},_doCryptBlock:function(t,e,r,i,n,o,s,a){for(var c=this._nRounds,h=t[e]^r[0],l=t[e+1]^r[1],f=t[e+2]^r[2],u=t[e+3]^r[3],d=4,p=1;p<c;p++){var _=i[h>>>24]^n[l>>>16&255]^o[f>>>8&255]^s[255&u]^r[d++],v=i[l>>>24]^n[f>>>16&255]^o[u>>>8&255]^s[255&h]^r[d++],y=i[f>>>24]^n[u>>>16&255]^o[h>>>8&255]^s[255&l]^r[d++],g=i[u>>>24]^n[h>>>16&255]^o[l>>>8&255]^s[255&f]^r[d++];h=_,l=v,f=y,u=g}_=(a[h>>>24]<<24|a[l>>>16&255]<<16|a[f>>>8&255]<<8|a[255&u])^r[d++],v=(a[l>>>24]<<24|a[f>>>16&255]<<16|a[u>>>8&255]<<8|a[255&h])^r[d++],y=(a[f>>>24]<<24|a[u>>>16&255]<<16|a[h>>>8&255]<<8|a[255&l])^r[d++],g=(a[u>>>24]<<24|a[h>>>16&255]<<16|a[l>>>8&255]<<8|a[255&f])^r[d++],t[e]=_,t[e+1]=v,t[e+2]=y,t[e+3]=g},keySize:8});t.AES=e._createHelper(_)}(),function(){var t=c,e=t.lib,r=e.WordArray,i=e.BlockCipher,n=t.algo,o=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],s=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],a=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],l=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],f=n.DES=i.extend({_doReset:function(){for(var t=this._key.words,e=[],r=0;r<56;r++){var i=o[r]-1;e[r]=t[i>>>5]>>>31-i%32&1}for(var n=this._subKeys=[],c=0;c<16;c++){var h=n[c]=[],l=a[c];for(r=0;r<24;r++)h[r/6|0]|=e[(s[r]-1+l)%28]<<31-r%6,h[4+(r/6|0)]|=e[28+(s[r+24]-1+l)%28]<<31-r%6;for(h[0]=h[0]<<1|h[0]>>>31,r=1;r<7;r++)h[r]=h[r]>>>4*(r-1)+3;h[7]=h[7]<<5|h[7]>>>27}var f=this._invSubKeys=[];for(r=0;r<16;r++)f[r]=n[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,e,r){this._lBlock=t[e],this._rBlock=t[e+1],u.call(this,4,252645135),u.call(this,16,65535),d.call(this,2,858993459),d.call(this,8,16711935),u.call(this,1,1431655765);for(var i=0;i<16;i++){for(var n=r[i],o=this._lBlock,s=this._rBlock,a=0,c=0;c<8;c++)a|=h[c][((s^n[c])&l[c])>>>0];this._lBlock=s,this._rBlock=o^a}var f=this._lBlock;this._lBlock=this._rBlock,this._rBlock=f,u.call(this,1,1431655765),d.call(this,8,16711935),d.call(this,2,858993459),u.call(this,16,65535),u.call(this,4,252645135),t[e]=this._lBlock,t[e+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});function u(t,e){var r=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=r,this._lBlock^=r<<t}function d(t,e){var r=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=r,this._rBlock^=r<<t}t.DES=i._createHelper(f);var p=n.TripleDES=i.extend({_doReset:function(){var t=this._key.words;if(2!==t.length&&4!==t.length&&t.length<6)throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");var e=t.slice(0,2),i=t.length<4?t.slice(0,2):t.slice(2,4),n=t.length<6?t.slice(0,2):t.slice(4,6);this._des1=f.createEncryptor(r.create(e)),this._des2=f.createEncryptor(r.create(i)),this._des3=f.createEncryptor(r.create(n))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});t.TripleDES=i._createHelper(p)}(),function(){var t=c,e=t.lib.StreamCipher,r=t.algo,i=r.RC4=e.extend({_doReset:function(){for(var t=this._key,e=t.words,r=t.sigBytes,i=this._S=[],n=0;n<256;n++)i[n]=n;n=0;for(var o=0;n<256;n++){var s=n%r,a=e[s>>>2]>>>24-s%4*8&255;o=(o+i[n]+a)%256;var c=i[n];i[n]=i[o],i[o]=c}this._i=this._j=0},_doProcessBlock:function(t,e){t[e]^=n.call(this)},keySize:8,ivSize:0});function n(){for(var t=this._S,e=this._i,r=this._j,i=0,n=0;n<4;n++){r=(r+t[e=(e+1)%256])%256;var o=t[e];t[e]=t[r],t[r]=o,i|=t[(t[e]+t[r])%256]<<24-8*n}return this._i=e,this._j=r,i}t.RC4=e._createHelper(i);var o=r.RC4Drop=i.extend({cfg:i.cfg.extend({drop:192}),_doReset:function(){i._doReset.call(this);for(var t=this.cfg.drop;t>0;t--)n.call(this)}});t.RC4Drop=e._createHelper(o)}(),function(){var t=c,e=t.lib.StreamCipher,r=t.algo,i=[],n=[],o=[],s=r.Rabbit=e.extend({_doReset:function(){for(var t=this._key.words,e=this.cfg.iv,r=0;r<4;r++)t[r]=16711935&(t[r]<<8|t[r]>>>24)|4278255360&(t[r]<<24|t[r]>>>8);var i=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],n=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];for(this._b=0,r=0;r<4;r++)a.call(this);for(r=0;r<8;r++)n[r]^=i[r+4&7];if(e){var o=e.words,s=o[0],c=o[1],h=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),l=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),f=h>>>16|4294901760&l,u=l<<16|65535&h;for(n[0]^=h,n[1]^=f,n[2]^=l,n[3]^=u,n[4]^=h,n[5]^=f,n[6]^=l,n[7]^=u,r=0;r<4;r++)a.call(this)}},_doProcessBlock:function(t,e){var r=this._X;a.call(this),i[0]=r[0]^r[5]>>>16^r[3]<<16,i[1]=r[2]^r[7]>>>16^r[5]<<16,i[2]=r[4]^r[1]>>>16^r[7]<<16,i[3]=r[6]^r[3]>>>16^r[1]<<16;for(var n=0;n<4;n++)i[n]=16711935&(i[n]<<8|i[n]>>>24)|4278255360&(i[n]<<24|i[n]>>>8),t[e+n]^=i[n]},blockSize:4,ivSize:2});function a(){for(var t=this._X,e=this._C,r=0;r<8;r++)n[r]=e[r];for(e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<n[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<n[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<n[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<n[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<n[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<n[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<n[6]>>>0?1:0)|0,this._b=e[7]>>>0<n[7]>>>0?1:0,r=0;r<8;r++){var i=t[r]+e[r],s=65535&i,a=i>>>16,c=((s*s>>>17)+s*a>>>15)+a*a,h=((4294901760&i)*i|0)+((65535&i)*i|0);o[r]=c^h}t[0]=o[0]+(o[7]<<16|o[7]>>>16)+(o[6]<<16|o[6]>>>16)|0,t[1]=o[1]+(o[0]<<8|o[0]>>>24)+o[7]|0,t[2]=o[2]+(o[1]<<16|o[1]>>>16)+(o[0]<<16|o[0]>>>16)|0,t[3]=o[3]+(o[2]<<8|o[2]>>>24)+o[1]|0,t[4]=o[4]+(o[3]<<16|o[3]>>>16)+(o[2]<<16|o[2]>>>16)|0,t[5]=o[5]+(o[4]<<8|o[4]>>>24)+o[3]|0,t[6]=o[6]+(o[5]<<16|o[5]>>>16)+(o[4]<<16|o[4]>>>16)|0,t[7]=o[7]+(o[6]<<8|o[6]>>>24)+o[5]|0}t.Rabbit=e._createHelper(s)}(),function(){var t=c,e=t.lib.StreamCipher,r=t.algo,i=[],n=[],o=[],s=r.RabbitLegacy=e.extend({_doReset:function(){var t=this._key.words,e=this.cfg.iv,r=this._X=[t[0],t[3]<<16|t[2]>>>16,t[1],t[0]<<16|t[3]>>>16,t[2],t[1]<<16|t[0]>>>16,t[3],t[2]<<16|t[1]>>>16],i=this._C=[t[2]<<16|t[2]>>>16,4294901760&t[0]|65535&t[1],t[3]<<16|t[3]>>>16,4294901760&t[1]|65535&t[2],t[0]<<16|t[0]>>>16,4294901760&t[2]|65535&t[3],t[1]<<16|t[1]>>>16,4294901760&t[3]|65535&t[0]];this._b=0;for(var n=0;n<4;n++)a.call(this);for(n=0;n<8;n++)i[n]^=r[n+4&7];if(e){var o=e.words,s=o[0],c=o[1],h=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),l=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),f=h>>>16|4294901760&l,u=l<<16|65535&h;for(i[0]^=h,i[1]^=f,i[2]^=l,i[3]^=u,i[4]^=h,i[5]^=f,i[6]^=l,i[7]^=u,n=0;n<4;n++)a.call(this)}},_doProcessBlock:function(t,e){var r=this._X;a.call(this),i[0]=r[0]^r[5]>>>16^r[3]<<16,i[1]=r[2]^r[7]>>>16^r[5]<<16,i[2]=r[4]^r[1]>>>16^r[7]<<16,i[3]=r[6]^r[3]>>>16^r[1]<<16;for(var n=0;n<4;n++)i[n]=16711935&(i[n]<<8|i[n]>>>24)|4278255360&(i[n]<<24|i[n]>>>8),t[e+n]^=i[n]},blockSize:4,ivSize:2});function a(){for(var t=this._X,e=this._C,r=0;r<8;r++)n[r]=e[r];for(e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<n[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<n[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<n[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<n[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<n[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<n[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<n[6]>>>0?1:0)|0,this._b=e[7]>>>0<n[7]>>>0?1:0,r=0;r<8;r++){var i=t[r]+e[r],s=65535&i,a=i>>>16,c=((s*s>>>17)+s*a>>>15)+a*a,h=((4294901760&i)*i|0)+((65535&i)*i|0);o[r]=c^h}t[0]=o[0]+(o[7]<<16|o[7]>>>16)+(o[6]<<16|o[6]>>>16)|0,t[1]=o[1]+(o[0]<<8|o[0]>>>24)+o[7]|0,t[2]=o[2]+(o[1]<<16|o[1]>>>16)+(o[0]<<16|o[0]>>>16)|0,t[3]=o[3]+(o[2]<<8|o[2]>>>24)+o[1]|0,t[4]=o[4]+(o[3]<<16|o[3]>>>16)+(o[2]<<16|o[2]>>>16)|0,t[5]=o[5]+(o[4]<<8|o[4]>>>24)+o[3]|0,t[6]=o[6]+(o[5]<<16|o[5]>>>16)+(o[4]<<16|o[4]>>>16)|0,t[7]=o[7]+(o[6]<<8|o[6]>>>24)+o[5]|0}t.RabbitLegacy=e._createHelper(s)}(),c},"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=t():"function"==typeof define&&define.amd?define([],t):(void 0).CryptoJS=t(); 
 			}); 
		define("utils/cryptojs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t,n,e,i,r,s=s||function(t,n){var e={},i=e.lib={},r=function(){},s=i.Base={extend:function(t){r.prototype=this;var n=new r;return t&&n.mixIn(t),n.hasOwnProperty("init")||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},o=i.WordArray=s.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=null!=n?n:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var n=this.words,e=t.words,i=this.sigBytes;if(t=t.sigBytes,this.clamp(),i%4)for(var r=0;r<t;r++)n[i+r>>>2]|=(e[r>>>2]>>>24-r%4*8&255)<<24-(i+r)%4*8;else if(65535<e.length)for(r=0;r<t;r+=4)n[i+r>>>2]=e[r>>>2];else n.push.apply(n,e);return this.sigBytes+=t,this},clamp:function(){var n=this.words,e=this.sigBytes;n[e>>>2]&=4294967295<<32-e%4*8,n.length=t.ceil(e/4)},clone:function(){var t=s.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var e=[],i=0;i<n;i+=4)e.push(4294967296*t.random()|0);return new o.init(e,n)}}),a=e.enc={},c=a.Hex={stringify:function(t){var n=t.words;t=t.sigBytes;for(var e=[],i=0;i<t;i++){var r=n[i>>>2]>>>24-i%4*8&255;e.push((r>>>4).toString(16)),e.push((15&r).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,e=[],i=0;i<n;i+=2)e[i>>>3]|=parseInt(t.substr(i,2),16)<<24-i%8*4;return new o.init(e,n/2)}},h=a.Latin1={stringify:function(t){var n=t.words;t=t.sigBytes;for(var e=[],i=0;i<t;i++)e.push(String.fromCharCode(n[i>>>2]>>>24-i%4*8&255));return e.join("")},parse:function(t){for(var n=t.length,e=[],i=0;i<n;i++)e[i>>>2]|=(255&t.charCodeAt(i))<<24-i%4*8;return new o.init(e,n)}},u=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},f=i.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=u.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var e=this._data,i=e.words,r=e.sigBytes,s=this.blockSize,a=r/(4*s);if(n=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*s,r=t.min(4*n,r),n){for(var c=0;c<n;c+=s)this._doProcessBlock(i,c);c=i.splice(0,n),e.sigBytes-=r}return new o.init(c,r)},clone:function(){var t=s.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});i.Hasher=f.extend({cfg:s.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,e){return new t.init(e).finalize(n)}},_createHmacHelper:function(t){return function(n,e){return new l.HMAC.init(t,e).finalize(n)}}});var l=e.algo={};return e}(Math);n=(r=(t=s).lib).WordArray,e=r.Hasher,i=[],r=t.algo.SHA1=e.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,n){for(var e=this._hash.words,r=e[0],s=e[1],o=e[2],a=e[3],c=e[4],h=0;80>h;h++){if(16>h)i[h]=0|t[n+h];else{var u=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=u<<1|u>>>31}u=(r<<5|r>>>27)+c+i[h],u=20>h?u+(1518500249+(s&o|~s&a)):40>h?u+(1859775393+(s^o^a)):60>h?u+((s&o|s&a|o&a)-1894007588):u+((s^o^a)-899497514),c=a,a=o,o=s<<30|s>>>2,s=r,r=u}e[0]=e[0]+r|0,e[1]=e[1]+s|0,e[2]=e[2]+o|0,e[3]=e[3]+a|0,e[4]=e[4]+c|0},_doFinalize:function(){var t=this._data,n=t.words,e=8*this._nDataBytes,i=8*t.sigBytes;return n[i>>>5]|=128<<24-i%32,n[14+(i+64>>>9<<4)]=Math.floor(e/4294967296),n[15+(i+64>>>9<<4)]=e,t.sigBytes=4*n.length,this._process(),this._hash},clone:function(){var t=e.clone.call(this);return t._hash=this._hash.clone(),t}}),t.SHA1=e._createHelper(r),t.HmacSHA1=e._createHmacHelper(r),function(){var t=s,n=t.enc.Utf8;t.algo.HMAC=t.lib.Base.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=n.parse(e));var i=t.blockSize,r=4*i;e.sigBytes>r&&(e=t.finalize(e)),e.clamp();for(var s=this._oKey=e.clone(),o=this._iKey=e.clone(),a=s.words,c=o.words,h=0;h<i;h++)a[h]^=1549556828,c[h]^=909522486;s.sigBytes=o.sigBytes=r,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var n=this._hasher;return t=n.finalize(t),n.reset(),n.finalize(this._oKey.clone().concat(t))}})}(),module.exports=s; 
 			}); 
		define("utils/errorHandle.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r={100:"获取语音分片信息失败",101:"语音分片过大",102:"参数不合法",103:"访问数据库失败",104:"AppID 服务未开通，请在控制台开通服务",105:"模板不存在",106:"模板停用",107:"鉴权失败",108:"拼接签名串失败",109:"l5获取 IP、port 失败",110:"后台识别服务器故障，请从 seq=0重传",111:"后台识别模块回包格式错误",112:"语音分片为空",113:"后台服务器识别超时",114:"引擎编号不合法",115:"时长计算时音频类型不合法",116:"无可使用的免费额度",117:"禁止访问",118:"请求限流",119:"账户欠费停止服务，请及时充值",120:"获取 rpcClient 错误",121:"后台识别服务器错误，请从seq=0重传",122:"后台识别服务器收到的包格式错误",123:"后台识别服务器音频解压失败，请从seq=0重传",124:"后台识别服务器识别失败，请从seq=0重传",125:"后台识别服务器识别失败，请重新尝试",126:"后台识别服务器音频分片等待超时，请从seq=0重传",127:"后台识别服务器音频分片重复","FailedOperation.ServiceIsolate":"账号因为欠费停止服务，请在腾讯云账户充值。","FailedOperation.UserHasNoFreeAmount":"账号本月免费额度已用完。","FailedOperation.UserNotRegistered":"服务未开通，请在腾讯云官网语音识别控制台开通服务。",InternalError:"内部错误。","InternalError.ErrorConfigure":"初始化配置失败。","InternalError.ErrorCreateLog":"创建日志失败。","InternalError.ErrorDownFile":"下载音频文件失败。","InternalError.ErrorFailNewprequest":"新建数组失败。","InternalError.ErrorFailWritetodb":"写入数据库失败。","InternalError.ErrorFileCannotopen":"文件无法打开。","InternalError.ErrorGetRoute":"获取路由失败。","InternalError.ErrorMakeLogpath":"创建日志路径失败。","InternalError.ErrorRecognize":"识别失败。","InvalidParameter.ErrorContentlength":"请求数据长度无效。","InvalidParameter.ErrorParamsMissing":"参数不全。","InvalidParameter.ErrorParsequest":"解析请求数据失败。",InvalidParameterValue:"参数取值错误。","InvalidParameterValue.ErrorInvalidAppid":"AppId无效。","InvalidParameterValue.ErrorInvalidClientip":"ClientIp无效。","InvalidParameterValue.ErrorInvalidEngservice":"EngSerViceType无效。","InvalidParameterValue.ErrorInvalidProjectid":"ProjectId无效。","InvalidParameterValue.ErrorInvalidRequestid":"RequestId无效。","InvalidParameterValue.ErrorInvalidSourcetype":"SourceType无效。","InvalidParameterValue.ErrorInvalidSubservicetype":"SubserviceType无效。","InvalidParameterValue.ErrorInvalidUrl":"Url无效。","InvalidParameterValue.ErrorInvalidUseraudiokey":"UsrAudioKey无效。","InvalidParameterValue.ErrorInvalidVoiceFormat":"音频编码格式不支持。","InvalidParameterValue.ErrorInvalidVoicedata":"音频数据无效。"};exports.default=r; 
 			}); 
		define("utils/logger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=wx.getRealtimeLogManager();module.exports={logManager:e}; 
 			}); 
		define("utils/qcloudApiV3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("./cryptojs"),t=require("./util"),o=require("./config"),n={},r=function(e){Object.assign(n,{path:"/",method:"POST",protocol:"https"},e)};r.prototype.generateUrl=function(e){e=e||{};var t=this._getHost(e),o=void 0===e.path?n.path:e.path;return"".concat(e.protocol||n.protocol,"://").concat(t).concat(o)},r.prototype.generateQueryString=function(e,t){t=t||n;var r=n;delete e.success,delete e.fail,delete e.complete;var c=Object.assign({Region:n.Region,SecretId:t.SecretId||n.SecretId,Timestamp:Math.round(Date.now()/1e3),Nonce:Math.round(65535*Math.random()),Token:n.Token},e),a=!!e.Version,s=Object.keys(c),i="",p="",u=this._getHost(t),l=(t.method||r.method).toUpperCase(),d=void 0===t.path?r.path:t.path;s.sort(),s.forEach((function(e){var t=c[e];!a&&"POST"===l&&t&&"@"===t[0]||""!==e&&((null==t||"number"==typeof t&&isNaN(t))&&(t=""),i+="&".concat(e.indexOf("_")?e.replace(/_/g,"."):e,"=").concat(t),p+="&".concat(e.indexOf("_")?e.replace(/_/g,"."):e,"=").concat(encodeURIComponent(t)))})),i=i.slice(1),p=p.slice(1);var h=this.sign("".concat(l).concat(u).concat(d,"?").concat(i),t.SecretKey||r.SecretKey);return c.Signature=h,o.GetQCloudSecret().openConsole&&console.log("signStr:",encodeURIComponent(h)),p+="&Signature=".concat(encodeURIComponent(h))},r.prototype.request=function(e,t,r,c){"function"==typeof t&&(r=t,t=n),t=t||n,r=r||Function.prototype;var a=this.generateUrl(t),s=(t.method||n.method).toUpperCase(),i=this.generateQueryString(e,t),p={url:a,method:s};"POST"===s||(p.url+="?".concat(i)),Object.assign(p,c),o.GetQCloudSecret().openConsole&&console.log("dataStr:",i),wx.request({url:p.url,data:i,method:s,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){r(null,e.data)},fail:function(e){r(e,null)}})},r.prototype.sign=function(n,r){var c=e.HmacSHA1(n,r),a=t.toUint8Array(c),s=wx.arrayBufferToBase64(a);return o.GetQCloudSecret().openConsole&&console.log("wx.base64后：",s),s},r.prototype._getHost=function(e){var t=e.host;return t||(t="".concat(e.serviceType||n.serviceType,".").concat(e.baseHost||n.baseHost)),t},module.exports=r; 
 			}); 
		define("utils/recordManger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t,o,n,r,l=require("../utils/asrApi.js"),u=require("../utils/config"),i=require("./api.js"),s=wx.getRecorderManager(),c=0,a="",d=null,p={},f=null,m=null,_=null,y=null,g=null,v=null,h=null,C=null,b=function(){s.onInterruptionBegin((function(){s.stop()})),s.onInterruptionEnd((function(){s.stop()})),s.onStart((function(){e({msg:"OK"}),c=0,a=function(){for(var e="",t=0,o=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],n=0;n<16;n++)t=Math.round(Math.random()*(o.length-1)),e+=o[t];return e}(),p={}})),s.onStop((function(e){p=e,setTimeout((function(){if(c>1){var e=new Uint8Array([11,22,33]);S(e,e.byteLength,c,!0,a)}}),500)})),s.onError((function(e){n(e)})),s.onFrameRecorded((function(e){var t=e.frameBuffer,o=e.isLastFrame;t&&(u.GetQCloudSecret().openConsole&&console.log("onFrameRecorded size:",t.byteLength),S(t,t.byteLength,c,o,a),o?c=0:c+=1)}))};function S(e,n,i,s,c){if(!r){var a=u.GetQCloudSecret();r=new l({appId:a.appid,secretId:a.secretid,secretKey:a.secretkey,token:a.token,baseHost:"cloud.tencent.com",path:"/asr/v1/"})}var b={serviceType:"asr",method:"POST",seq:i,end:s?1:0,voice_id:c,engine_model_type:f,timeStampOffset:d};null!==m&&(b.hotword_id=m),null!==_&&(b.customization_id=_),null!==y&&(b.filter_dirty=y),null!==g&&(b.filter_modal=g),null!==v&&(b.filter_punc=v),null!==h&&(b.convert_num_mode=h),null!==C&&(b.needvad=C),r.request(b,(function(e,n){e?o({code:e.code,result:"",resList:{resultList:[],resultNumber:-1},errMsg:e.message}):(!e&&(n.text||n.result_number>0)&&(n.text,o({code:n.code,result:n.text,resList:{resultList:n.result_list,resultNumber:n.result_number},errMsg:""})),1==n.final&&(p.result=n.text,t(p)))}),{frameBuffer:e,bufLen:n})}b.prototype.start=function(e){var t=6e4;f=e.engine_model_type||"16k_zh",null!=e&&e.duration>0&&e.duration<=6e5&&(t=e.duration),u.GetQCloudSecret().openConsole&&console.log("engine_model_type",f);var o=Object.prototype.hasOwnProperty;o.call(e,"hotword_id")&&"string"==typeof e.hotword_id&&(m=e.hotword_id),o.call(e,"customization_id")&&"string"==typeof e.customization_id&&(_=e.customization_id),o.call(e,"filter_dirty")&&"number"==typeof e.filter_dirty&&(y=e.filter_dirty),o.call(e,"filter_modal")&&"number"==typeof e.filter_modal&&(g=e.filter_modal),o.call(e,"filter_punc")&&"number"==typeof e.filter_punc&&(v=e.filter_punc),o.call(e,"convert_num_mode")&&"number"==typeof e.convert_num_mode&&(h=e.convert_num_mode),o.call(e,"needvad")&&"number"==typeof e.needvad&&(C=e.needvad);var n={duration:t,sampleRate:16e3,numberOfChannels:1,encodeBitRate:96e3,format:"mp3",frameSize:.32};i.getServerTime().then((function(e){d=parseInt(e)-Math.round(Date.now()/1e3),s.start(n)})).catch((function(){s.start(n)}))},b.prototype.stop=function(){s.stop()},b.prototype.onStart=function(t){u.GetQCloudSecret().openConsole&&console.log("set startCB"),e=t},b.prototype.onRecognize=function(e){u.GetQCloudSecret().openConsole&&console.log("set recognizeCB"),o=e},b.prototype.onStop=function(e){u.GetQCloudSecret().openConsole&&console.log("set stopCB"),t=e},b.prototype.onError=function(e){u.GetQCloudSecret().openConsole&&console.log("set errorCB"),n=e},module.exports=b; 
 			}); 
		define("utils/recorder.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("../@babel/runtime/helpers/objectSpread2"),r=require("../@babel/runtime/helpers/classCallCheck"),t=require("../@babel/runtime/helpers/createClass"),o=require("./logger").logManager.tag("plugin-speechRecognizer"),n=wx.getRecorderManager(),i=function(){function i(){r(this,i),i.instance||(i.instance=this),this.recorderIsStart=!1}return t(i,[{key:"start",value:function(r,t){var i=this;this.voiceId=t,this.recorderIsStart=!1;var a={duration:r.duration||6e5,sampleRate:r.engine_model_type||16e3,numberOfChannels:1,encodeBitRate:r.encodeBitRate||64e3,format:r.voice_format||"PCM",frameSize:r.frameSize||.32,audioSource:r.audioSource||"auto"};n.start(a),o.info("recorderParams: ",e(e({},a),{},{voice_id:this.voiceId,time:(new Date).getTime()})),n.onStart((function(e){i.recorderIsStart=!0,o.info("wx.getRecorderManager is onStart: ",{voice_id:i.voiceId,recorderIsStart:i.recorderIsStart,res:e,time:(new Date).getTime()})})),n.onStop((function(e){i.recorderIsStart=!1,i.OnStop(e),o.info("wx.getRecorderManager is onStop: ",{voice_id:i.voiceId,recorderIsStart:i.recorderIsStart,time:(new Date).getTime()})})),n.onError((function(e){i.recorderIsStart=!1,o.error("wx.getRecorderManager is onError: ",{voice_id:i.voiceId,recorderIsStart:i.recorderIsStart,res:e,time:(new Date).getTime()}),i.OnError(e),i.stop()})),n.onFrameRecorded((function(e){i.OnReceivedData(e.frameBuffer),i.OnFrameRecorded(e)})),n.onInterruptionBegin((function(){i.recorderIsStart=!1,o.error("wx.getRecorderManager is onInterruptionBegin: ",{voice_id:i.voiceId,time:(new Date).getTime()}),n.stop(),i.OnInterruptionBegin()})),n.onInterruptionEnd((function(){i.recorderIsStart=!1,o.error("wx.getRecorderManager is onInterruptionEnd: ",{voice_id:i.voiceId,time:(new Date).getTime()}),i.OnInterruptionEnd()}))}},{key:"stop",value:function(){o.info("call wx.getRecorderManager stop",{voice_id:this.voiceId,time:(new Date).getTime(),recorderIsStart:this.recorderIsStart}),n&&this.recorderIsStart&&n.stop()}},{key:"OnReceivedData",value:function(e){}},{key:"OnError",value:function(e){}},{key:"OnStop",value:function(e){}},{key:"OnFrameRecorded",value:function(e){}},{key:"OnInterruptionBegin",value:function(){}},{key:"OnInterruptionEnd",value:function(){}}]),i}();exports.default=i; 
 			}); 
		define("utils/recorderSpeechRecognizer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=require("../@babel/runtime/helpers/toConsumableArray"),t=require("../@babel/runtime/helpers/objectSpread2"),i=require("../@babel/runtime/helpers/classCallCheck"),n=require("../@babel/runtime/helpers/createClass"),o=e(require("./recorder.js")),c=e(require("./speechRecognizer.js")),a=require("./logger").logManager.tag("plugin-recorderSpeechRecognizer"),s=null,d=function(){function e(){i(this,e),this.init()}return n(e,[{key:"init",value:function(){this.params=null,this.speechRecognizer=null,this.isCanSendData=!1,this.audioData=[],this.getDataTime=[],this.sendDataTime=[],this.preWriteTime=0,s&&(clearTimeout(s),s=null)}},{key:"start",value:function(e){var i=this;if(this.init(),this.voiceId="xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var r=16*Math.random()|0;return("x"===e?r:3&r|8).toString(16)})),this.params=e,a.info("call start function",t(t({},e),{},{secretkey:"",voice_id:this.voiceId,time:(new Date).getTime()})),this.recorder)return a.error('"recorder is not stop',t(t({},e),{},{secretkey:"",voice_id:this.voiceId,time:(new Date).getTime()})),!1;this.recorder=new o.default,this.audioData=[],this.recorder.OnReceivedData=function(e){try{if(i.speechRecognizer&&i.isCanSendData){var t;i.OnFrameRecorded(e),i.getDataTime.push((new Date).getTime()),(t=i.audioData).push.apply(t,r(new Int8Array(e)));var n=i.params.timestampInterval||110;if((new Date).getTime()-i.preWriteTime>n){var o=i.audioData.splice(0,i.audioData.length),c=new Int8Array(o),s=(new Date).getTime();i.speechRecognizer.write(c.buffer),i.preWriteTime=s,i.sendDataTime.push(s)}}else a.info("this.speechRecognizer is not write send",{voice_id:i.voiceId,oralEvaluation:i.speechRecognizer,isCanSendData:i.isCanSendData,time:(new Date).getTime()})}catch(e){a.info("this.oralEvaluation try catch",{voice_id:i.voiceId,oralEvaluation:i.speechRecognizer,isCanSendData:i.isCanSendData,e:JSON.stringify(e),time:(new Date).getTime()})}},this.recorder.OnStop=function(e){a.info("the recorder is OnStop",{voice_id:i.voiceId,res:e,speechRecognizer:i.speechRecognizer,isCanSendData:i.isCanSendData,time:(new Date).getTime()}),i.recorder=null;var r=i.params.engine_model_type.includes("8k")?1600:3200,t=i.params.timestampInterval||100;i.OnRecorderStop(e),s=setInterval((function(){if(i.speechRecognizer&&i.isCanSendData&&(new Date).getTime()-i.preWriteTime>t)if(i.audioData.length>r){var e=(new Date).getTime();i.speechRecognizer.write(new Int8Array(i.audioData.splice(0,r)).buffer),i.sendDataTime.push(e),i.preWriteTime=e}else i.speechRecognizer.write(new Int8Array(i.audioData).buffer),i.sendDataTime.push("".concat((new Date).getTime(),"-final")),i.speechRecognizer&&i.speechRecognizer.stop(),clearInterval(s),s=null}),100)},this.recorder.OnError=function(e){a.error("the recorder is OnError",{voice_id:i.voiceId,err:e,time:(new Date).getTime()}),i.OnError(e),i.recognizerErrorStop()},this.recorder.OnInterruptionBegin=function(){i.OnInterruptionBegin(),i.recognizerErrorStop()},this.recorder.OnInterruptionEnd=function(){i.OnInterruptionEnd(),i.recognizerErrorStop()};var n=e.engine_model_type.includes("8k"),d={engine_model_type:n?8e3:16e3,encodeBitRate:n?32e3:64e3,duration:e.duration,frameSize:e.frameSize,voice_format:8===e.voice_format?"mp3":"PCM",audioSource:e.audioSource};this.recorder.start(d,this.voiceId),this.speechRecognizer||(this.speechRecognizer=new c.default),this.speechRecognizer.OnRecognitionStart=function(e){var r;a.info("get server OnRecognitionStart",{res:e,voice_id:i.voiceId,recorderIsStart:null===(r=i.recorder)||void 0===r?void 0:r.recorderIsStart,time:(new Date).getTime()});var t=function(e){var r;i.OnRecognitionStart(e),i.isCanSendData=!0,a.info("the speechRecognizer is OnRecognitionStart",{res:e,voice_id:i.voiceId,recorderIsStart:null===(r=i.recorder)||void 0===r?void 0:r.recorderIsStart,time:(new Date).getTime()})};i.recorder&&i.recorder.recorderIsStart?t(e):setTimeout((function(){var r;i.recorder&&i.recorder.recorderIsStart?t(e):(setTimeout((function(){var r;i.recorder&&i.recorder.recorderIsStart?t(e):a.info("another this.recorder.recorderIsStart is not normal state",{res:e,voice_id:i.voiceId,recorderIsStart:null===(r=i.recorder)||void 0===r?void 0:r.recorderIsStart,time:(new Date).getTime()})}),2e3),a.info("this.recorder.recorderIsStart is not normal state",{res:e,voice_id:i.voiceId,recorderIsStart:null===(r=i.recorder)||void 0===r?void 0:r.recorderIsStart,time:(new Date).getTime()}))}),2e3)},this.speechRecognizer.OnSentenceBegin=function(e){i.OnSentenceBegin(e)},this.speechRecognizer.OnRecognitionResultChange=function(e){i.OnRecognitionResultChange(e)},this.speechRecognizer.OnSentenceEnd=function(e){i.OnSentenceEnd(e)},this.speechRecognizer.OnRecognitionComplete=function(e){i.speechRecognizer?i.speechRecognizer.close((function(){i.OnRecognitionComplete(e),i.isCanSendData=!1,i.speechRecognizer=null,a.info("the speechRecognizer is OnRecognitionComplete",{voice_id:null==e?void 0:e.voice_id,getDataTime:i.getDataTime,sendDataTime:i.sendDataTime,time:(new Date).getTime()})})):a.info("the speechRecognizer is OnRecognitionComplete error",{voice_id:null==e?void 0:e.voice_id,time:(new Date).getTime()})},this.speechRecognizer.OnError=function(e){var r;a.info("the speechRecognizer is OnError",{voice_id:i.voiceId,res:e,recorderIsStart:null===(r=i.recorder)||void 0===r?void 0:r.recorderIsStart,getDataTime:i.getDataTime,sendDataTime:i.sendDataTime,time:(new Date).getTime()}),i.OnError(e),i.isCanSendData=!1,i.recorder&&i.recorder.recorderIsStart?i.recorder.stop():setTimeout((function(){i.recorder&&i.recorder.recorderIsStart&&i.recorder.stop()}),2e3),i.speechRecognizer=null},this.speechRecognizer.OnSocketClose=function(e){var r;a.info("the speechRecognizer is OnSocketClose",{voice_id:i.voiceId,res:e,recorderIsStart:null===(r=i.recorder)||void 0===r?void 0:r.recorderIsStart,getDataTime:i.getDataTime,sendDataTime:i.sendDataTime,time:(new Date).getTime()}),i.isCanSendData&&(i.isCanSendData=!1),i.recorder&&i.recorder.recorderIsStart&&i.recorder.stop(),i.speechRecognizer=null},this.speechRecognizer.start(this.params,this.voiceId)}},{key:"writeContent",value:function(e){return a.info("call writeContent function",{voice_id:this.voiceId,time:(new Date).getTime()}),this.speechRecognizer?this.speechRecognizer.writeContent(e):(a.error("writeContent error: speechRecognizer is not initialized",{voice_id:this.voiceId,time:(new Date).getTime()}),!1)}},{key:"stop",value:function(){a.info("call stop function",{voice_id:this.voiceId,recorder:this.recorder,time:(new Date).getTime()}),this.recorder&&this.recorder.stop()}},{key:"recorderErrorStop",value:function(){this.stop(),this.recorder=null}},{key:"recognizerErrorStop",value:function(){this.speechRecognizer&&this.speechRecognizer.stop()}},{key:"OnRecognitionStart",value:function(e){}},{key:"OnSentenceBegin",value:function(e){}},{key:"OnRecognitionResultChange",value:function(){}},{key:"OnSentenceEnd",value:function(){}},{key:"OnRecognitionComplete",value:function(){}},{key:"OnError",value:function(){}},{key:"OnRecorderStop",value:function(){}},{key:"OnFrameRecorded",value:function(){}},{key:"OnInterruptionBegin",value:function(){}},{key:"OnInterruptionEnd",value:function(){}}]),e}();exports.default=d; 
 			}); 
		define("utils/recorderSpeechRecognizerV2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=require("../@babel/runtime/helpers/toConsumableArray"),t=require("../@babel/runtime/helpers/objectSpread2"),r=require("../@babel/runtime/helpers/classCallCheck"),n=require("../@babel/runtime/helpers/createClass"),o=e(require("./recorder.js")),c=e(require("./speechRecognizerV2.js")),a=require("./logger").logManager.tag("plugin-recorderSpeechRecognizerV2"),s=null,u=function(){function e(){r(this,e),this.init()}return n(e,[{key:"init",value:function(){this.params=null,this.speechRecognizer=null,this.isCanSendData=!1,this.audioData=[],this.getDataTime=[],this.sendDataTime=[],this.preWriteTime=0,s&&(clearTimeout(s),s=null)}},{key:"start",value:function(e){if(this.init(),this.voiceId="xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var i=16*Math.random()|0;return("x"===e?i:3&i|8).toString(16)})),this.params=e,a.info("call start function",t(t({},e),{},{secretkey:"",voice_id:this.voiceId,time:(new Date).getTime()})),this.recorder)return a.error("recorder is not stop",t(t({},e),{},{secretkey:"",voice_id:this.voiceId,time:(new Date).getTime()})),!1;this.recorder=new o.default,this.audioData=[],this._bindRecorderEvents(),this._startRecorder(e),this._bindRecognizerEvents(),this.speechRecognizer.start(this.params,this.voiceId)}},{key:"_bindRecorderEvents",value:function(){var e=this;this.recorder.OnReceivedData=function(i){return e._onAudioFrame(i)},this.recorder.OnStop=function(i){return e._onRecorderStop(i)},this.recorder.OnError=function(i){a.error("the recorder is OnError",{voice_id:e.voiceId,err:i,time:(new Date).getTime()}),e.OnError(i),e.recognizerErrorStop()},this.recorder.OnInterruptionBegin=function(){e.OnInterruptionBegin(),e.recognizerErrorStop()},this.recorder.OnInterruptionEnd=function(){e.OnInterruptionEnd(),e.recognizerErrorStop()}}},{key:"_startRecorder",value:function(e){var i=e.engine_model_type.includes("8k"),t={engine_model_type:i?8e3:16e3,encodeBitRate:i?32e3:64e3,duration:e.duration,frameSize:e.frameSize,voice_format:8===e.voice_format?"mp3":"PCM",audioSource:e.audioSource};this.recorder.start(t,this.voiceId)}},{key:"_onAudioFrame",value:function(e){try{var t;if(!this.speechRecognizer||!this.isCanSendData)return;this.OnFrameRecorded(e),this.getDataTime.push((new Date).getTime()),(t=this.audioData).push.apply(t,i(new Int8Array(e)));var r=this.params.timestampInterval||110;if((new Date).getTime()-this.preWriteTime>r){var n=this.audioData.splice(0,this.audioData.length),o=new Int8Array(n),c=(new Date).getTime();this.speechRecognizer.write(o.buffer),this.preWriteTime=c,this.sendDataTime.push(c)}}catch(e){a.info("OnReceivedData error",{voice_id:this.voiceId,e:JSON.stringify(e),time:(new Date).getTime()})}}},{key:"_onRecorderStop",value:function(e){var i=this;a.info("the recorder is OnStop",{voice_id:this.voiceId,res:e,time:(new Date).getTime()}),this.recorder=null;var t=this.params.engine_model_type.includes("8k")?1600:3200,r=this.params.timestampInterval||100;this.OnRecorderStop(e),s=setInterval((function(){if(i.speechRecognizer&&i.isCanSendData&&!((new Date).getTime()-i.preWriteTime<=r))if(i.audioData.length>t){var e=(new Date).getTime();i.speechRecognizer.write(new Int8Array(i.audioData.splice(0,t)).buffer),i.sendDataTime.push(e),i.preWriteTime=e}else i.speechRecognizer.write(new Int8Array(i.audioData).buffer),i.sendDataTime.push("".concat((new Date).getTime(),"-final")),i.speechRecognizer&&i.speechRecognizer.stop(),clearInterval(s),s=null}),100)}},{key:"_bindRecognizerEvents",value:function(){var e=this;this.speechRecognizer||(this.speechRecognizer=new c.default),this.speechRecognizer.OnRecognitionStart=function(i){a.info("get server OnRecognitionStart",{res:i,voice_id:e.voiceId,time:(new Date).getTime()}),e._waitRecorderReady((function(i){e.OnRecognitionStart(i),e.isCanSendData=!0}),i)},this.speechRecognizer.OnRecognitionSentences=function(i){e.OnRecognitionSentences(i)},this.speechRecognizer.OnRecognitionComplete=function(i){e.speechRecognizer&&e.speechRecognizer.close((function(){e.OnRecognitionComplete(i),e.isCanSendData=!1,e.speechRecognizer=null,a.info("the speechRecognizer is OnRecognitionComplete",{voice_id:null==i?void 0:i.voice_id,time:(new Date).getTime()})}))},this.speechRecognizer.OnError=function(i){a.info("the speechRecognizer is OnError",{voice_id:e.voiceId,res:i,time:(new Date).getTime()}),e.OnError(i),e.isCanSendData=!1,e._waitRecorderReady((function(){return e.recorder&&e.recorder.stop()})),e.speechRecognizer=null},this.speechRecognizer.OnSocketClose=function(i){a.info("the speechRecognizer is OnSocketClose",{voice_id:e.voiceId,res:i,time:(new Date).getTime()}),e.isCanSendData&&(e.isCanSendData=!1),e.recorder&&e.recorder.recorderIsStart&&e.recorder.stop(),e.speechRecognizer=null}}},{key:"_waitRecorderReady",value:function(e,i){var t=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;this.recorder&&this.recorder.recorderIsStart?e(i):r>=3||setTimeout((function(){t._waitRecorderReady(e,i,r+1)}),2e3)}},{key:"writeContent",value:function(e){return this.speechRecognizer?this.speechRecognizer.writeContent(e):(a.error("writeContent error: speechRecognizer is not initialized",{voice_id:this.voiceId,time:(new Date).getTime()}),!1)}},{key:"stop",value:function(){a.info("call stop function",{voice_id:this.voiceId,time:(new Date).getTime()}),this.recorder&&this.recorder.stop()}},{key:"recorderErrorStop",value:function(){this.stop(),this.recorder=null}},{key:"recognizerErrorStop",value:function(){this.speechRecognizer&&this.speechRecognizer.stop()}},{key:"OnRecognitionStart",value:function(e){}},{key:"OnRecognitionSentences",value:function(e){}},{key:"OnRecognitionComplete",value:function(e){}},{key:"OnError",value:function(e){}},{key:"OnRecorderStop",value:function(e){}},{key:"OnFrameRecorded",value:function(e){}},{key:"OnInterruptionBegin",value:function(){}},{key:"OnInterruptionEnd",value:function(){}}]),e}();exports.default=u; 
 			}); 
		define("utils/sendYunAPIRequestV3.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/objectSpread2"),t=require("./crypto-js"),o=require("./config"),n={},c=function(e){Object.assign(n,{path:"/",method:"POST",protocol:"https"},e)};function r(e){var t=function(e){var t=e.host;t||(t="".concat(e.serviceType||n.serviceType,".").concat(e.baseHost||n.baseHost));return t}(e=e||{}),o=void 0===e.path?n.path:e.path;return"".concat(e.protocol||n.protocol,"://").concat(t).concat(o)}function a(e,o,n){delete o.success,delete o.fail,delete o.complete;var c="POST\n/\n\n"+"content-type:application/json\nhost:".concat(null==e?void 0:e.serviceType,".").concat(null==e?void 0:e.baseHost,"\n")+"\ncontent-type;host\n"+t.SHA256(JSON.stringify(o)),r=Math.ceil(n/1e3),a=function(e){var t=new Date(e),o=t.getUTCFullYear(),n="0".concat(t.getUTCMonth()+1).slice(-2),c="0".concat(t.getUTCDate()).slice(-2);return"".concat(o,"-").concat(n,"-").concat(c)}(n),i=a+"/"+(null==e?void 0:e.serviceType)+"/tc3_request",s="TC3-HMAC-SHA256\n"+r+"\n"+i+"\n"+t.SHA256(c);function l(e,o){return t.HmacSHA256(o,e)}var u=l("TC3"+(null==e?void 0:e.SecretKey),a),p=l(u,null==e?void 0:e.serviceType),d=l(p,"tc3_request"),T=t.HmacSHA256(s,d);return"TC3-HMAC-SHA256 Credential="+(null==e?void 0:e.SecretId)+"/"+i+", SignedHeaders=content-type;host, Signature="+T}c.prototype.request=function(t,c,i,s){"function"==typeof c&&(i=c,c=n),c=e(e({},n),c),i=i||Function.prototype;var l=r(c),u=(c.method||n.method).toUpperCase(),p=Date.now(),d={url:l,method:u},T={Authorization:a(c,t,p),Host:"".concat(c.serviceType,".").concat(c.baseHost),"Content-Type":"application/json","X-TC-Action":c.Action,"X-TC-Timestamp":Math.ceil(p/1e3).toString(),"X-TC-Version":c.Version,"X-TC-Region":c.Region};c.Token&&(T["X-TC-Token"]=c.Token);var v={url:l,method:"post",header:T,data:t,timeout:1e4,success:function(e){i(null,e.data)},fail:function(e){i(e,null)}};if(Object.assign(d,s),o.GetQCloudSecret().openConsole){var h={};for(var C in t)"Data"!==C&&(h[C]=t[C]);console.log("req",h)}wx.request(v)},module.exports=c; 
 			}); 
		define("utils/speechRecognizer.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.NewCredential=void 0;var t=require("../@babel/runtime/helpers/regeneratorRuntime"),i=require("../@babel/runtime/helpers/objectSpread2"),n=require("../@babel/runtime/helpers/asyncToGenerator"),r=require("../@babel/runtime/helpers/classCallCheck"),s=require("../@babel/runtime/helpers/createClass"),o=e(require("./cryptojs.js")),c=require("./logger"),a=require("./api.js"),u=c.logManager.tag("plugin-speechRecognizer"),d=["appid","secretkey","token","signCallback","duration","frameSize","audioSource","serverTime","timestampInterval"],l=function(){function e(t,i){r(this,e),this.config={appid:t.appid,secretid:t.secretid},this.query=t||null,this.voiceId=i}var o;return s(e,[{key:"formatSignString",value:function(e,t){var i="",n="asr.cloud.tencent.com/asr/v2/";this.config.appid&&(n+=this.config.appid);var r=Object.keys(e);for(var s in r.sort(),r)r.hasOwnProperty(s)&&(i+="&".concat(r[s],"=").concat(t&&"string"==typeof e[r[s]]?encodeURIComponent(e[r[s]]):e[r[s]]));return"".concat(n,"?").concat(i.slice(1))}},{key:"createQuery",value:(o=n(t().mark((function e(){var n,r,s,o,c,u;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n={},r=(new Date).getTime(),"false"!==String(this.query.serverTime)){e.next=6;break}e.t0=r,e.next=9;break;case 6:return e.next=8,a.getServerTime();case 8:e.t0=e.sent;case 9:for(s=e.t0,n.secretid=this.config.secretid||"",n.engine_model_type=this.query.engine_model_type||"16k_zh",n.timestamp=parseInt(s),n.expired=Math.round(r/1e3)+86400,n.nonce=Math.round(r/1e5),n.voice_id=this.voiceId,n.voice_format=this.query.voice_format||1,o=i({},this.query),c=0,u=d.length;c<u;c++)o.hasOwnProperty(d[c])&&delete o[d[c]];return n=i(i({},o),n),e.abrupt("return",n);case 21:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}]),e}();exports.NewCredential=l;var h=function(){function e(){r(this,e),this.appid="",this.secretid="",this.socket=null,this.isSignSuccess=!1,this.isSentenceBegin=!1,this.query={},this.signCallback=null,this.voiceId="",this.sendDataSuccessTime=[],this.getMessageTime=[]}var c,a;return s(e,[{key:"stop",value:function(){this.socket&&1===this.socket.readyState?this.socket.send({data:JSON.stringify({type:"end"})}):u.error("stop error",{code:6003,message:"连接未连接或已经关闭。",voice_id:this.voiceId,socket:this.socket,time:(new Date).getTime()})}},{key:"getUrl",value:(a=n(t().mark((function e(){var i,n,r,s;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.appid&&this.secretid){e.next=3;break}return console.error("请确认是否填入appId和secretId"),e.abrupt("return",!1);case 3:return i=new l(this.query,this.voiceId),e.next=6,i.createQuery();case 6:return n=e.sent,r=i.formatSignString(n,!0),s=i.formatSignString(n),e.abrupt("return","".concat(r,"&signature=").concat(encodeURIComponent(this.signCallback(s))));case 10:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"start",value:(c=n(t().mark((function e(n,r){var s,c,a,d,l=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(e){var t=n.secretkey,i=o.default.HmacSHA1(e,t),r=s(i);return wx.arrayBufferToBase64(r)},s=function(e){for(var t=e.words,i=e.sigBytes,n=new Uint8Array(i),r=0;r<i;r++)n[r]=t[r>>>2]>>>24-r%4*8&255;return n},this.appid=n.appid||"",this.secretid=n.secretid||"",this.socket=null,this.isSignSuccess=!1,this.isSentenceBegin=!1,this.query=i({},n),this.voiceId=r||"xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),this.signCallback=n.signCallback||c,e.next=12,this.getUrl();case 12:if(a=e.sent,u.info("the speechRecognizer get url",{voice_id:this.voiceId,url:a,time:(new Date).getTime()}),a){e.next=17;break}return this.OnError({code:6002,message:"鉴权失败",voice_id:this.voiceId}),e.abrupt("return");case 17:u.info("get wss appId",{appid:this.appid,voice_id:this.voiceId,time:(new Date).getTime()}),d={url:"wss://".concat(a),header:{}},n.token&&(d.header["X-TC-Token"]=n.token),d.header["X-TC-Version"]="miniProgram-plugin-2.2.6",this.socket=wx.connectSocket(d),this.socket.onMessage((function(e){var t=JSON.parse(e.data||null);if(l.getMessageTime.push((new Date).getTime()),0!==t.code)l.OnError(t),l.close();else{if(l.isSignSuccess||(l.OnRecognitionStart(t),l.isSignSuccess=!0),1===t.final)return void l.OnRecognitionComplete(t);t.result&&(0===t.result.slice_type?(l.OnSentenceBegin(t),l.isSentenceBegin=!0):2===t.result.slice_type?(l.isSentenceBegin||l.OnSentenceBegin(t),l.OnSentenceEnd(t)):l.OnRecognitionResultChange(t))}})),this.socket.onError((function(e){u.info("the socket onError",{voice_id:l.voiceId,e:JSON.stringify(e),time:(new Date).getTime()}),l.OnError({code:6e3,message:e,voice_id:l.voiceId}),null!=l&&l.socket&&(l.close(),l.socket=null)})),this.socket.onClose((function(e){l.OnSocketClose(e),l.socket=null,u.info("socket is close",{voice_id:l.voiceId,sendDataSuccessTime:l.sendDataSuccessTime,getMessageTime:l.getMessageTime,time:(new Date).getTime()})}));case 25:case"end":return e.stop()}}),e,this)}))),function(e,t){return c.apply(this,arguments)})},{key:"close",value:function(e){var t=this;this.socket&&1===this.socket.readyState&&this.socket.close({code:1e3,fail:function(e){u.error("write error",{code:6e3,message:e,voice_id:t.voiceId,time:(new Date).getTime()})},complete:function(t){e&&e()}})}},{key:"writeContent",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.socket)return u.error("writeContent error",{code:6001,message:"连接未建立，无法发送上下文提示",voice_id:this.voiceId,time:(new Date).getTime()}),!1;if(1!==this.socket.readyState)return i<5?(u.info("writeContent: socket not ready, retry",{readyState:this.socket.readyState,retryCount:i,voice_id:this.voiceId,time:(new Date).getTime()}),setTimeout((function(){t.writeContent(e,i+1)}),200),!0):(u.error("writeContent error",{code:6001,message:"socket not ready after ".concat(i," retries"),voice_id:this.voiceId,time:(new Date).getTime()}),!1);try{var n=JSON.stringify(e);return this.socket.send({data:n,success:function(){u.info("writeContent success",{voice_id:t.voiceId,time:(new Date).getTime()})},fail:function(e){var i;u.error("writeContent send fail",{code:6e3,message:JSON.stringify(e),voice_id:t.voiceId,readyState:null===(i=t.socket)||void 0===i?void 0:i.readyState,time:(new Date).getTime()})}}),!0}catch(e){return u.error("writeContent exception",{voice_id:this.voiceId,e:JSON.stringify(e),time:(new Date).getTime()}),!1}}},{key:"write",value:function(e){var t=this;this.socket&&1===this.socket.readyState?this.socket.send({data:e,success:function(e){t.sendDataSuccessTime.push((new Date).getTime())},fail:function(e){u.error("write error",{code:6e3,message:JSON.stringify(e),voice_id:t.voiceId,time:(new Date).getTime()})}}):u.error("write error",{code:6001,message:"连接未建立，请稍后发送数据！",voice_id:this.voiceId,time:(new Date).getTime()})}},{key:"OnRecognitionStart",value:function(e){}},{key:"OnSentenceBegin",value:function(e){}},{key:"OnRecognitionResultChange",value:function(){}},{key:"OnSentenceEnd",value:function(){}},{key:"OnRecognitionComplete",value:function(){}},{key:"OnSocketClose",value:function(){}},{key:"OnError",value:function(){}}]),e}();exports.default=h; 
 			}); 
		define("utils/speechRecognizerV2.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=require("../@babel/runtime/helpers/interopRequireDefault").default;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("../@babel/runtime/helpers/regeneratorRuntime"),i=require("../@babel/runtime/helpers/objectSpread2"),r=require("../@babel/runtime/helpers/asyncToGenerator"),n=require("../@babel/runtime/helpers/classCallCheck"),s=require("../@babel/runtime/helpers/createClass"),o=require("../@babel/runtime/helpers/createForOfIteratorHelper"),c=e(require("./cryptojs.js")),a=require("./logger"),u=require("./api.js"),h=a.logManager.tag("plugin-speechRecognizerV2"),d=new Set(["appid","secretkey","token","signCallback","duration","frameSize","audioSource","serverTime","timestampInterval","host"]);function l(e,t){var i,r=Object.keys(e).sort(),n=[],s=o(r);try{for(s.s();!(i=s.n()).done;){var c=i.value,a=e[c],u=t&&"string"==typeof a?encodeURIComponent(a):a;n.push("".concat(c,"=").concat(u))}}catch(e){s.e(e)}finally{s.f()}return n.join("&")}var f=function(){function e(t,i){n(this,e),this.config={appid:t.appid,secretid:t.secretid},this.query=t||null,this.voiceId=i}var o;return s(e,[{key:"formatSignString",value:function(e){var t=l(e,!0);return"".concat("asr.cloud.tencent.com").concat("/asr/v2/").concat(this.config.appid||"","?").concat(t)}},{key:"createQuery",value:(o=r(t().mark((function e(){var r,n,s,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={},n=(new Date).getTime(),"false"!==String(this.query.serverTime)){e.next=6;break}e.t0=n,e.next=9;break;case 6:return e.next=8,u.getServerTime();case 8:e.t0=e.sent;case 9:return s=e.t0,r.secretid=this.config.secretid||"",r.engine_model_type=this.query.engine_model_type||"16k_zh",r.timestamp=parseInt(s),r.expired=Math.round(n/1e3)+86400,r.nonce=Math.round(n/1e5),r.voice_id=this.voiceId,r.voice_format=this.query.voice_format||1,r.result_mod=1,r.speaker_diarization=void 0!==this.query.speaker_diarization?Number(this.query.speaker_diarization):1,o=i({},this.query),d.forEach((function(e){delete o[e]})),e.abrupt("return",i(i({},o),r));case 22:case"end":return e.stop()}}),e,this)}))),function(){return o.apply(this,arguments)})}]),e}(),g=function(){function e(){n(this,e),this.appid="",this.secretid="",this.socket=null,this.isSignSuccess=!1,this.query={},this.signCallback=null,this.voiceId="",this.host="",this.sendDataSuccessTime=[],this.getMessageTime=[]}var o,a;return s(e,[{key:"stop",value:function(){this.socket&&1===this.socket.readyState?this.socket.send({data:JSON.stringify({type:"end"})}):h.error("stop error",{code:6003,message:"连接未连接或已经关闭。",voice_id:this.voiceId,socket:this.socket,time:(new Date).getTime()})}},{key:"getUrl",value:(a=r(t().mark((function e(){var i,r,n,s,o,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.appid&&this.secretid){e.next=3;break}return console.error("请确认是否填入appId和secretId"),e.abrupt("return",!1);case 3:return i=new f(this.query,this.voiceId),e.next=6,i.createQuery();case 6:return r=e.sent,n=i.formatSignString(r),s=this.host||"asr.cloud.tencent.com",o=l(r,!1),c="".concat(s).concat("/asr/v2/").concat(this.appid,"?").concat(o),e.abrupt("return","".concat(c,"&signature=").concat(encodeURIComponent(this.signCallback(n))));case 12:case"end":return e.stop()}}),e,this)}))),function(){return a.apply(this,arguments)})},{key:"start",value:(o=r(t().mark((function e(r,n){var s,o,c=this;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.appid=r.appid||"",this.secretid=r.secretid||"",this.host=r.host||"",this.socket=null,this.isSignSuccess=!1,this.query=i({},r),this.voiceId=n||"xxxxxxxx-xxxx-5xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})),this.signCallback=r.signCallback||this._defaultSignCallback(r.secretkey),e.next=10,this.getUrl();case 10:if(s=e.sent,h.info("the speechRecognizerV2 get url",{voice_id:this.voiceId,url:s,time:(new Date).getTime()}),s){e.next=15;break}return this.OnError({code:6002,message:"鉴权失败",voice_id:this.voiceId}),e.abrupt("return");case 15:o={url:"wss://".concat(s),header:{"X-TC-Version":"miniProgram-plugin-2.2.6"}},r.token&&(o.header["X-TC-Token"]=r.token),this.socket=wx.connectSocket(o),this.socket.onMessage((function(e){return c._handleMessage(e)})),this.socket.onError((function(e){return c._handleError(e)})),this.socket.onClose((function(e){return c._handleClose(e)}));case 21:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"_defaultSignCallback",value:function(e){return function(t){for(var i=c.default.HmacSHA1(t,e),r=i.words,n=i.sigBytes,s=new Uint8Array(n),o=0;o<n;o++)s[o]=r[o>>>2]>>>24-o%4*8&255;return wx.arrayBufferToBase64(s)}}},{key:"_handleMessage",value:function(e){var t=JSON.parse(e.data||null);if(this.getMessageTime.push((new Date).getTime()),0!==t.code)return this.OnError(t),void this.close();this.isSignSuccess||(this.OnRecognitionStart(t),this.isSignSuccess=!0),1!==t.final?t.sentences&&this.OnRecognitionSentences(t):this.OnRecognitionComplete(t)}},{key:"_handleError",value:function(e){h.info("the socket onError",{voice_id:this.voiceId,e:JSON.stringify(e),time:(new Date).getTime()}),this.OnError({code:6e3,message:e,voice_id:this.voiceId}),this.socket&&(this.close(),this.socket=null)}},{key:"_handleClose",value:function(e){this.OnSocketClose(e),this.socket=null,h.info("socket is close",{voice_id:this.voiceId,sendDataSuccessTime:this.sendDataSuccessTime,getMessageTime:this.getMessageTime,time:(new Date).getTime()})}},{key:"close",value:function(e){var t=this;this.socket&&1===this.socket.readyState&&this.socket.close({code:1e3,fail:function(e){h.error("close error",{code:6e3,message:e,voice_id:t.voiceId,time:(new Date).getTime()})},complete:function(){e&&e()}})}},{key:"writeContent",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!this.socket)return h.error("writeContent error",{code:6001,message:"连接未建立，无法发送上下文提示",voice_id:this.voiceId,time:(new Date).getTime()}),!1;if(1!==this.socket.readyState)return i<5?(setTimeout((function(){return t.writeContent(e,i+1)}),200),!0):(h.error("writeContent error",{code:6001,message:"socket not ready after ".concat(i," retries"),voice_id:this.voiceId,time:(new Date).getTime()}),!1);try{return this.socket.send({data:JSON.stringify(e),success:function(){return h.info("writeContent success",{voice_id:t.voiceId,time:(new Date).getTime()})},fail:function(e){return h.error("writeContent send fail",{code:6e3,message:JSON.stringify(e),voice_id:t.voiceId,time:(new Date).getTime()})}}),!0}catch(e){return h.error("writeContent exception",{voice_id:this.voiceId,e:JSON.stringify(e),time:(new Date).getTime()}),!1}}},{key:"write",value:function(e){var t=this;this.socket&&1===this.socket.readyState?this.socket.send({data:e,success:function(){return t.sendDataSuccessTime.push((new Date).getTime())},fail:function(e){return h.error("write error",{code:6e3,message:JSON.stringify(e),voice_id:t.voiceId,time:(new Date).getTime()})}}):h.error("write error",{code:6001,message:"连接未建立，请稍后发送数据！",voice_id:this.voiceId,time:(new Date).getTime()})}},{key:"OnRecognitionStart",value:function(e){}},{key:"OnRecognitionSentences",value:function(e){}},{key:"OnRecognitionComplete",value:function(e){}},{key:"OnSocketClose",value:function(e){}},{key:"OnError",value:function(e){}}]),e}();exports.default=g; 
 			}); 
		define("utils/tmtApi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e,t=require("../@babel/runtime/helpers/typeof"),o=require("./qcloudApiV3.js");var r=function(){function e(e,t){Error.call(this,t),this.type=e,this.message=t}return e.prototype=new Error,e.prototype.constructor=e,e}(),n=function(){};module.exports={SetQCloudSecret:function(t,n){if(!t||!n)throw new r("ERR_INVALID_PARAMS","请传入云账号信息");e||(e=new o({SecretId:t,SecretKey:n,path:"/"}))},doQueryTMT:function(o){if("object"!==t(o)){var c="请求传参应为 object 类型，但实际传了 ".concat(t(o)," 类型");throw new r("ERR_INVALID_PARAMS",c)}var s=o.success||n,i=o.fail||n,u=o.complete||n;delete o.SecretKey;var p=function(e){i(e),u(arguments)};if(!e)throw new r("ERR_INVALID_PARAMS","请传入云账号信息");e.request(o,{serviceType:"tmt",baseHost:"tencentcloudapi.com",method:"POST"},(function(e,t){var o;e?p(e):t&&t.Response?(console.log("queryTMT succ：",JSON.stringify(t.Response)),function(e){s(e),u(arguments)}(t)):("请求Response为空",o=new r("error","请求Response为空"),p(o))}))}}; 
 			}); 
		define("utils/ttsApi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("./cryptojs"),e=require("./util"),o=require("../utils/config"),n={},r=function(t){Object.assign(n,{method:"POST",protocol:"https",serviceType:"tts",baseHost:"cloud.tencent.com",path:"/stream"},t)};r.prototype.generateUrl=function(t){t=t||{};var e=this._getHost(t),o=void 0===t.path?n.path:t.path;return"".concat(t.protocol||n.protocol,"://").concat(e).concat(o)},r.prototype.generateQueryString=function(t){var e=Object.keys(t),r="",a=this._getHost(n),c=n.method,s=n.path;return e.sort(),e.forEach((function(e){var o=t[e];""!==e&&((null==o||"number"==typeof o&&isNaN(o))&&(o=""),r+="&".concat(e,"=").concat(o))})),r=r.slice(1),o.GetQCloudSecret().openConsole&&console.log("加密前：","".concat(c).concat(a).concat(s,"?").concat(r)),"".concat(c).concat(a).concat(s,"?").concat(r)},r.prototype.request=function(t,e){"function"==typeof t&&(e=t,t=n),t=t||n,e=e||Function.prototype;var o=Math.round(Date.now()/1e3),r={Action:"TextToAudioUrl",AppId:t.appId||n.appId,SecretId:t.secretId||n.secretId,Timestamp:o,Expired:o+90,Text:t.text,SessionId:Math.round(65535*Math.random()).toString(),Speed:t.speed,VoiceType:t.voiceType,Volume:t.volume,ProjectId:t.projectId,PrimaryLanguage:t.language,SampleRate:t.sampleRate,Codec:"mp3"};t.emotionCategory&&(r.EmotionCategory=t.emotionCategory),t.emotionIntensity&&t.emotionIntensity>=50&&t.emotionIntensity<=200&&(r.EmotionIntensity=t.emotionIntensity);var a=this.generateQueryString(r),c={"content-type":"application/json",Authorization:this.sign(a,t.secretKey||n.secretKey)};n.token&&(c["X-TC-Token"]=n.token),wx.request({url:"https://tts.cloud.tencent.com/stream",data:JSON.stringify(r),method:"POST",header:c,success:function(t){if(t.data&&t.statusCode){var o=String(t.statusCode);if(/^4+/g.test(o)||/^5+/g.test(o))return void e({errCode:t.statusCode,errMsg:t.errMsg},null)}t.data?e(null,t.data):(console.log("queryTTS no data:".concat(t)),e({errCode:-10001,errMsg:"内部错误"},null))},fail:function(t){console.log("queryTTS fail:",t),e(t,null)}})},r.prototype.sign=function(n,r){var a=t.HmacSHA1(n,r),c=e.toUint8Array(a),s=wx.arrayBufferToBase64(c);return o.GetQCloudSecret().openConsole&&console.log("wx.base64后：",s),s},r.prototype._getHost=function(t){var e=t.host;return e||(e="".concat(t.serviceType||n.serviceType,".").concat(t.baseHost||n.baseHost)),e},module.exports=r; 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=function(t){return(t=t.toString())[1]?t:"0".concat(t)};module.exports={formatTime:function(r){var e=r.getFullYear(),n=r.getMonth()+1,o=r.getDate(),a=r.getHours(),i=r.getMinutes(),u=r.getSeconds();return[e,n,o].map(t).join("/")+" "+[a,i,u].map(t).join(":")},toUint8Array:function(t){for(var r=t.words,e=t.sigBytes,n=new Uint8Array(e),o=0;o<e;o++){var a=r[o>>>2]>>>24-o%4*8&255;n[o]=a}return n}}; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wx3e17776051baf153/components/list/list.js';global.__wxRouteBegin = true; 	define("components/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";Component({data:{list:[],welcome:"欢迎使用腾讯智能对话平台"},attached:function(){this.setData({list:[{name:"电视",price:1e3},{name:"电脑",price:4e3},{name:"手机",price:3e3}]})}}); 
 			}); 	require("components/list/list.js");
 	;;global.publishDomainComponents({'plugin://wx3e17776051baf153/list':'plugin-private://wx3e17776051baf153/components/list/list',});;	module.exports = function() {
		return require('index.js')
	};});requirePlugin('plugin://wx3e17776051baf153');