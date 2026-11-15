var VXGAME=(()=>{var Vu=Object.defineProperty;var p0=Object.getOwnPropertyDescriptor;var m0=Object.getOwnPropertyNames;var g0=Object.prototype.hasOwnProperty;var x0=(s,e)=>{for(var t in e)Vu(s,t,{get:e[t],enumerable:!0})},v0=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of m0(e))!g0.call(s,i)&&i!==t&&Vu(s,i,{get:()=>e[i],enumerable:!(n=p0(e,i))||n.enumerable});return s};var _0=s=>v0(Vu({},"__esModule",{value:!0}),s);var QM={};x0(QM,{mount:()=>jM});var jd=0,Ih=1,Qd=2;var js=1,ep=2,Qr=3,ui=0,dn=1,Qt=2,en=0,Ls=1,ln=2,Dh=3,Lh=4,ac=5,Gn=100,tp=101,np=102,ip=103,sp=104,Qs=200,rp=201,ap=202,op=203,Nl=204,Ul=205,xo=206,lp=207,vo=208,cp=209,up=210,hp=211,fp=212,dp=213,pp=214,oc=0,lc=1,cc=2,Ns=3,uc=4,hc=5,fc=6,dc=7,Nh=0,mp=1,gp=2,hi=0,_o=1,yo=2,Mo=3,er=4,bo=5,So=6,Eo=7,_h="attached",xp="detached",Uh=300,xs=301,tr=302,pc=303,mc=304,To=306,Yt=1e3,ei=1001,Or=1002,Wt=1003,gc=1004;var nr=1005;var jt=1006,ea=1007;var Zn=1008;var Tn=1009,Fh=1010,Oh=1011,ta=1012,xc=1013,fi=1014,Kn=1015,tn=1016,vc=1017,_c=1018,vs=1020,Bh=35902,Hh=35899,zh=1021,kh=1022,In=1023,gi=1026,Ai=1027,yc=1028,Mc=1029,ir=1030,bc=1031;var Sc=1033,wo=33776,Ao=33777,Ro=33778,Co=33779,Ec=35840,Tc=35841,wc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37488,Dc=37489,Lc=37490,Nc=37491,Uc=37808,Fc=37809,Oc=37810,Bc=37811,Hc=37812,zc=37813,kc=37814,Vc=37815,Gc=37816,Wc=37817,Xc=37818,qc=37819,Yc=37820,Zc=37821,Kc=36492,$c=36494,Jc=36495,jc=36283,Qc=36284,eu=36285,tu=36286,nu=2200,iu=2201,vp=2202,Us=2300,Fs=2301,Ll=2302,Ps=2400,Is=2401,Fa=2402,su=2500,_p=2501,Vh=0,Po=1,na=2,yp=3200;var ru=0,Mp=1,Ji="",Ft="srgb",gn="srgb-linear",Oa="linear",Tt="srgb";var Cs=7680;var yh=519,bp=512,Sp=513,Ep=514,au=515,Tp=516,wp=517,ou=518,Ap=519,Fl=35044,lu=35048;var Gh="300 es",ci=2e3,Ba=2001;function Wh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function y0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Br(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Rp(){let s=Br("canvas");return s.style.display="block",s}var cd={},Hr=null;function Ha(...s){let e="THREE."+s.shift();Hr?Hr("log",e,...s):console.log(e,...s)}function Ke(...s){let e="THREE."+s.shift();Hr?Hr("warn",e,...s):console.warn(e,...s)}function tt(...s){let e="THREE."+s.shift();Hr?Hr("error",e,...s):console.error(e,...s)}function zr(...s){let e=s.join(" ");e in cd||(cd[e]=!0,Ke(...s))}function Cp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var xi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=1234567,Da=Math.PI/180,Os=180/Math.PI;function ti(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ft(s,e,t){return Math.max(e,Math.min(t,s))}function Xh(s,e){return(s%e+e)%e}function M0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function b0(s,e,t){return s!==e?(t-s)/(e-s):0}function La(s,e,t){return(1-t)*s+t*e}function S0(s,e,t,n){return La(s,e,1-Math.exp(-t*n))}function E0(s,e=1){return e-Math.abs(Xh(s,e*2)-e)}function T0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function w0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function A0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function R0(s,e){return s+Math.random()*(e-s)}function C0(s){return s*(.5-Math.random())}function P0(s){s!==void 0&&(ud=s);let e=ud+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I0(s){return s*Da}function D0(s){return s*Os}function L0(s){return(s&s-1)===0&&s!==0}function N0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function U0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function F0(s,e,t,n,i){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*d,o*l);break;case"YZY":s.set(c*d,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*d,o*u,o*l);break;case"XZX":s.set(o*u,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*u,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*u,o*l);break;default:Ke("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var ji={DEG2RAD:Da,RAD2DEG:Os,generateUUID:ti,clamp:ft,euclideanModulo:Xh,mapLinear:M0,inverseLerp:b0,lerp:La,damp:S0,pingpong:E0,smoothstep:T0,smootherstep:w0,randInt:A0,randFloat:R0,randFloatSpread:C0,seededRandom:P0,degToRad:I0,radToDeg:D0,isPowerOfTwo:L0,ceilPowerOfTwo:N0,floorPowerOfTwo:U0,setQuaternionFromProperEuler:F0,normalize:Dt,denormalize:li},oe=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},sn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==g){let m=c*d+l*f+u*g+h*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),b=Math.sin(y);p=Math.sin(p*y)/b,o=Math.sin(o*y)/b,c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+x*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+g*o,h=h*p+x*o;let y=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=y,l*=y,u*=y,h*=y}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:Ke("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Gu.copy(this).projectOnVector(e),this.sub(Gu)}reflect(e){return this.sub(Gu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Gu=new I,hd=new sn,ht=class s{constructor(e,t,n,i,r,a,o,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],y=i[1],b=i[4],v=i[7],T=i[2],A=i[5],D=i[8];return r[0]=a*x+o*y+c*T,r[3]=a*m+o*b+c*A,r[6]=a*p+o*v+c*D,r[1]=l*x+u*y+h*T,r[4]=l*m+u*b+h*A,r[7]=l*p+u*v+h*D,r[2]=d*x+f*y+g*T,r[5]=d*m+f*b+g*A,r[8]=d*p+f*v+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,g=t*h+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Wu.makeScale(e,t)),this}rotate(e){return this.premultiply(Wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Wu=new ht,fd=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dd=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O0(){let s={enabled:!0,workingColorSpace:gn,spaces:{},convert:function(i,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Tt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Tt&&(i.r=Fr(i.r),i.g=Fr(i.g),i.b=Fr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ji?Oa:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,a){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[gn]:{primaries:e,whitePoint:n,transfer:Oa,toXYZ:fd,fromXYZ:dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Tt,toXYZ:fd,fromXYZ:dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}var pt=O0();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var vr,Ol=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vr===void 0&&(vr=Br("canvas")),vr.width=e.width,vr.height=e.height;let i=vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Br("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Xi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return Ke("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B0=0,kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Xu(i[a].image)):r.push(Xu(i[a]))}else r=Xu(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Ke("Texture: Unable to serialize Texture."),{})}var H0=0,qu=new I,on=class s extends xi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=ei,i=ei,r=jt,a=Zn,o=In,c=Tn,l=s.DEFAULT_ANISOTROPY,u=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=ti(),this.name="",this.source=new kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qu).x}get height(){return this.source.getSize(qu).y}get depth(){return this.source.getSize(qu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ke(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Uh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yt:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yt:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Uh;on.DEFAULT_ANISOTROPY=1;var Rt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(l+1)/2,v=(f+1)/2,T=(p+1)/2,A=(u+d)/4,D=(h+x)/4,L=(g+m)/4;return b>v&&b>T?b<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(b),i=A/n,r=D/n):v>T?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=A/i,r=L/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=D/r,i=L/r),this.set(n,i,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-x)/y,this.z=(d-u)/y,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bl=class extends xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new on(i);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new kr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends Bl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},za=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Hl=class extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(r,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),il.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),il.copy(n.boundingBox)),il.applyMatrix4(e.matrixWorld),this.union(il)}let i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ma),sl.subVectors(this.max,Ma),_r.subVectors(e.a,Ma),yr.subVectors(e.b,Ma),Mr.subVectors(e.c,Ma),rs.subVectors(yr,_r),as.subVectors(Mr,yr),Ts.subVectors(_r,Mr);let t=[0,-rs.z,rs.y,0,-as.z,as.y,0,-Ts.z,Ts.y,rs.z,0,-rs.x,as.z,0,-as.x,Ts.z,0,-Ts.x,-rs.y,rs.x,0,-as.y,as.x,0,-Ts.y,Ts.x,0];return!Yu(t,_r,yr,Mr,sl)||(t=[1,0,0,0,1,0,0,0,1],!Yu(t,_r,yr,Mr,sl))?!1:(rl.crossVectors(rs,as),t=[rl.x,rl.y,rl.z],Yu(t,_r,yr,Mr,sl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new I,new I,new I,new I,new I,new I,new I,new I],ri=new I,il=new Wn,_r=new I,yr=new I,Mr=new I,rs=new I,as=new I,Ts=new I,Ma=new I,sl=new I,rl=new I,ws=new I;function Yu(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){ws.fromArray(s,r);let o=i.x*Math.abs(ws.x)+i.y*Math.abs(ws.y)+i.z*Math.abs(ws.z),c=e.dot(ws),l=t.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var z0=new Wn,ba=new I,Zu=new I,Fn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):z0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);let t=ba.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(ba,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Zu)),this.expandByPoint(ba.copy(e.center).sub(Zu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hi=new I,Ku=new I,al=new I,os=new I,$u=new I,ol=new I,Ju=new I,hs=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ku.copy(e).add(t).multiplyScalar(.5),al.copy(t).sub(e).normalize(),os.copy(this.origin).sub(Ku);let r=e.distanceTo(t)*.5,a=-this.direction.dot(al),o=os.dot(this.direction),c=-os.dot(al),l=os.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=r*u,h>=0)if(d>=-g)if(d<=g){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Ku).addScaledVector(al,d),f}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),i=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(i>r)return null;let a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,i,r){$u.subVectors(t,e),ol.subVectors(n,e),Ju.crossVectors($u,ol);let a=this.direction.dot(Ju),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;os.subVectors(this.origin,e);let c=o*this.direction.dot(ol.crossVectors(os,ol));if(c<0)return null;let l=o*this.direction.dot($u.cross(os));if(l<0||c+l>a)return null;let u=-o*os.dot(Ju);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class s{constructor(e,t,n,i,r,a,o,c,l,u,h,d,f,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,d,f,g,x,m)}set(e,t,n,i,r,a,o,c,l,u,h,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/br.setFromMatrixColumn(e,0).length(),r=1/br.setFromMatrixColumn(e,1).length(),a=1/br.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,g=l*u,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,x=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=x-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,V0)}lookAt(e,t,n){let i=this.elements;return kn.subVectors(e,t),kn.lengthSq()===0&&(kn.z=1),kn.normalize(),ls.crossVectors(n,kn),ls.lengthSq()===0&&(Math.abs(n.z)===1?kn.x+=1e-4:kn.z+=1e-4,kn.normalize(),ls.crossVectors(n,kn)),ls.normalize(),ll.crossVectors(kn,ls),i[0]=ls.x,i[4]=ll.x,i[8]=kn.x,i[1]=ls.y,i[5]=ll.y,i[9]=kn.y,i[2]=ls.z,i[6]=ll.z,i[10]=kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],y=n[3],b=n[7],v=n[11],T=n[15],A=i[0],D=i[4],L=i[8],S=i[12],E=i[1],N=i[5],O=i[9],G=i[13],j=i[2],ee=i[6],Z=i[10],X=i[14],ue=i[3],$=i[7],ge=i[11],xe=i[15];return r[0]=a*A+o*E+c*j+l*ue,r[4]=a*D+o*N+c*ee+l*$,r[8]=a*L+o*O+c*Z+l*ge,r[12]=a*S+o*G+c*X+l*xe,r[1]=u*A+h*E+d*j+f*ue,r[5]=u*D+h*N+d*ee+f*$,r[9]=u*L+h*O+d*Z+f*ge,r[13]=u*S+h*G+d*X+f*xe,r[2]=g*A+x*E+m*j+p*ue,r[6]=g*D+x*N+m*ee+p*$,r[10]=g*L+x*O+m*Z+p*ge,r[14]=g*S+x*G+m*X+p*xe,r[3]=y*A+b*E+v*j+T*ue,r[7]=y*D+b*N+v*ee+T*$,r[11]=y*L+b*O+v*Z+T*ge,r[15]=y*S+b*G+v*X+T*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],y=c*f-l*d,b=o*f-l*h,v=o*d-c*h,T=a*f-l*u,A=a*d-c*u,D=a*h-o*u;return t*(x*y-m*b+p*v)-n*(g*y-m*T+p*A)+i*(g*b-x*T+p*D)-r*(g*v-x*A+m*D)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=h*m*l-x*d*l+x*c*f-o*m*f-h*c*p+o*d*p,b=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,v=u*x*l-g*h*l+g*o*f-a*x*f-u*o*p+a*h*p,T=g*h*c-u*x*c-g*o*d+a*x*d+u*o*m-a*h*m,A=t*y+n*b+i*v+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/A;return e[0]=y*D,e[1]=(x*d*r-h*m*r-x*i*f+n*m*f+h*i*p-n*d*p)*D,e[2]=(o*m*r-x*c*r+x*i*l-n*m*l-o*i*p+n*c*p)*D,e[3]=(h*c*r-o*d*r-h*i*l+n*d*l+o*i*f-n*c*f)*D,e[4]=b*D,e[5]=(u*m*r-g*d*r+g*i*f-t*m*f-u*i*p+t*d*p)*D,e[6]=(g*c*r-a*m*r-g*i*l+t*m*l+a*i*p-t*c*p)*D,e[7]=(a*d*r-u*c*r+u*i*l-t*d*l-a*i*f+t*c*f)*D,e[8]=v*D,e[9]=(g*h*r-u*x*r-g*n*f+t*x*f+u*n*p-t*h*p)*D,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*D,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*D,e[12]=T*D,e[13]=(u*x*i-g*h*i+g*n*d-t*x*d-u*n*m+t*h*m)*D,e[14]=(g*o*i-a*x*i-g*n*c+t*x*c+a*n*m-t*o*m)*D,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*d+t*o*d)*D,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,g=r*h,x=a*u,m=a*h,p=o*h,y=c*l,b=c*u,v=c*h,T=n.x,A=n.y,D=n.z;return i[0]=(1-(x+p))*T,i[1]=(f+v)*T,i[2]=(g-b)*T,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(d+p))*A,i[6]=(m+y)*A,i[7]=0,i[8]=(g+b)*D,i[9]=(m-y)*D,i[10]=(1-(d+x))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=br.set(i[0],i[1],i[2]).length(),a=br.set(i[4],i[5],i[6]).length(),o=br.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),ai.copy(this);let l=1/r,u=1/a,h=1/o;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=ci,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===ci)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ba)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=ci,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===ci)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ba)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},br=new I,ai=new Ze,k0=new I(0,0,0),V0=new I(1,1,1),ls=new I,ll=new I,kn=new I,pd=new Ze,md=new sn,Xn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ke("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},G0=0,gd=new I,Sr=new sn,zi=new Ze,cl=new I,Sa=new I,W0=new I,X0=new sn,xd=new I(1,0,0),vd=new I(0,1,0),_d=new I(0,0,1),yd={type:"added"},q0={type:"removed"},Er={type:"childadded",child:null},ju={type:"childremoved",child:null},Ot=class s extends xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new I,t=new Xn,n=new sn,i=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ze},normalMatrix:{value:new ht}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,t){return Sr.setFromAxisAngle(e,t),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(_d,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(_d,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cl.copy(e):cl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Sa,cl,this.up):zi.lookAt(cl,Sa,this.up),this.quaternion.setFromRotationMatrix(zi),i&&(zi.extractRotation(i.matrixWorld),Sr.setFromRotationMatrix(zi),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yd),Er.child=e,this.dispatchEvent(Er),Er.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q0),ju.child=e,this.dispatchEvent(ju),ju.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yd),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,e,W0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,X0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Ot.DEFAULT_UP=new I(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oi=new I,ki=new I,Qu=new I,Vi=new I,Tr=new I,wr=new I,Md=new I,eh=new I,th=new I,nh=new I,ih=new Rt,sh=new Rt,rh=new Rt,Wi=class s{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),oi.subVectors(e,t),i.cross(oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){oi.subVectors(i,t),ki.subVectors(n,t),Qu.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(ki),c=oi.dot(Qu),l=ki.dot(ki),u=ki.dot(Qu),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vi.x),c.addScaledVector(a,Vi.y),c.addScaledVector(o,Vi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return ih.setScalar(0),sh.setScalar(0),rh.setScalar(0),ih.fromBufferAttribute(e,t),sh.fromBufferAttribute(e,n),rh.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(ih,r.x),a.addScaledVector(sh,r.y),a.addScaledVector(rh,r.z),a}static isFrontFacing(e,t,n,i){return oi.subVectors(n,t),ki.subVectors(e,t),oi.cross(ki).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),oi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,a,o;Tr.subVectors(i,n),wr.subVectors(r,n),eh.subVectors(e,n);let c=Tr.dot(eh),l=wr.dot(eh);if(c<=0&&l<=0)return t.copy(n);th.subVectors(e,i);let u=Tr.dot(th),h=wr.dot(th);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Tr,a);nh.subVectors(e,r);let f=Tr.dot(nh),g=wr.dot(nh);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(wr,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Md.subVectors(r,i),o=(h-u)/(h-u+(f-g)),t.copy(i).addScaledVector(Md,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Tr,a).addScaledVector(wr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},ul={h:0,s:0,l:0};function ah(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ee=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=pt.workingColorSpace){if(e=Xh(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ah(a,r,e+1/3),this.g=ah(a,r,e),this.b=ah(a,r,e-1/3)}return pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&Ke("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ke("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ke("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=Pp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ke("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return pt.workingToColorSpace(Sn.copy(this),e),Math.round(ft(Sn.r*255,0,255))*65536+Math.round(ft(Sn.g*255,0,255))*256+Math.round(ft(Sn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Sn.copy(this),t);let n=Sn.r,i=Sn.g,r=Sn.b,a=Math.max(n,i,r),o=Math.min(n,i,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Ft){pt.workingToColorSpace(Sn.copy(this),e);let t=Sn.r,n=Sn.g,i=Sn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(ul);let n=La(cs.h,ul.h,t),i=La(cs.s,ul.s,t),r=La(cs.l,ul.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Sn=new Ee;Ee.NAMES=Pp;var Y0=0,En=class extends xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=Ls,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Ul,this.blendEquation=Gn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ke(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Ke(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==ui&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Nl&&(n.blendSrc=this.blendSrc),this.blendDst!==Ul&&(n.blendDst=this.blendDst),this.blendEquation!==Gn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},St=class extends En{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Nh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var nn=new I,hl=new oe,Z0=0,vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Z0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fl,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=li(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=li(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=li(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=li(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fl&&(e.usage=this.usage),e}};var vi=class extends vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var st=class extends vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},K0=0,jn=new Ze,oh=new Ot,Ar=new I,Vn=new Wn,Ea=new Wn,fn=new I,Mt=class s extends xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wh(e)?ka:vi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&Ke("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Ea.setFromBufferAttribute(o),this.morphTargetsRelative?(fn.addVectors(Vn.min,Ea.min),Vn.expandByPoint(fn),fn.addVectors(Vn.max,Ea.max),Vn.expandByPoint(fn)):(Vn.expandByPoint(Ea.min),Vn.expandByPoint(Ea.max))}Vn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)fn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(fn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)fn.fromBufferAttribute(o,l),c&&(Ar.fromBufferAttribute(e,l),fn.add(Ar)),i=Math.max(i,n.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new I,c[L]=new I;let l=new I,u=new I,h=new I,d=new oe,f=new oe,g=new oe,x=new I,m=new I;function p(L,S,E){l.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,E),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,E),u.sub(l),h.sub(l),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(N),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(N),o[L].add(x),o[S].add(x),o[E].add(x),c[L].add(m),c[S].add(m),c[E].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let L=0,S=y.length;L<S;++L){let E=y[L],N=E.start,O=E.count;for(let G=N,j=N+O;G<j;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new I,v=new I,T=new I,A=new I;function D(L){T.fromBufferAttribute(i,L),A.copy(T);let S=o[L];b.copy(S),b.sub(T.multiplyScalar(T.dot(S))).normalize(),v.crossVectors(A,S);let N=v.dot(c[L])<0?-1:1;a.setXYZW(L,b.x,b.y,b.z,N)}for(let L=0,S=y.length;L<S;++L){let E=y[L],N=E.start,O=E.count;for(let G=N,j=N+O;G<j;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fn.fromBufferAttribute(e,t),fn.normalize(),e.setXYZ(t,fn.x,fn.y,fn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new vt(d,u,h)}if(this.index===null)return Ke("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bd=new Ze,As=new hs,fl=new Fn,Sd=new I,dl=new I,pl=new I,ml=new I,lh=new I,gl=new I,Ed=new I,xl=new I,We=class extends Ot{constructor(e=new Mt,t=new St){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let o=this.morphTargetInfluences;if(r&&o){gl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(lh.fromBufferAttribute(h,e),a?gl.addScaledVector(lh,u):gl.addScaledVector(lh.sub(t),u))}t.add(gl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(r),As.copy(e.ray).recast(e.near),!(fl.containsPoint(As.origin)===!1&&(As.intersectSphere(fl,Sd)===null||As.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(bd.copy(r).invert(),As.copy(e.ray).applyMatrix4(bd),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,n){let i,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=b;v<T;v+=3){let A=o.getX(v),D=o.getX(v+1),L=o.getX(v+2);i=vl(this,p,e,n,l,u,h,A,D,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);i=vl(this,a,e,n,l,u,h,y,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),b=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=b;v<T;v+=3){let A=v,D=v+1,L=v+2;i=vl(this,p,e,n,l,u,h,A,D,L),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let y=m,b=m+1,v=m+2;i=vl(this,a,e,n,l,u,h,y,b,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function $0(s,e,t,n,i,r,a,o){let c;if(e.side===dn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===ui,o),c===null)return null;xl.copy(o),xl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(xl);return l<t.near||l>t.far?null:{distance:l,point:xl.clone(),object:s}}function vl(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,dl),s.getVertexPosition(c,pl),s.getVertexPosition(l,ml);let u=$0(s,e,t,n,dl,pl,ml,Ed);if(u){let h=new I;Wi.getBarycoord(Ed,dl,pl,ml,h),i&&(u.uv=Wi.getInterpolatedAttribute(i,o,c,l,h,new oe)),r&&(u.uv1=Wi.getInterpolatedAttribute(r,o,c,l,h,new oe)),a&&(u.normal=Wi.getInterpolatedAttribute(a,o,c,l,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new I,materialIndex:0};Wi.getNormal(dl,pl,ml,d.normal),u.face=d,u.barycoord=h}return u}var _t=class s extends Mt{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};let o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(h,2));function g(x,m,p,y,b,v,T,A,D,L,S){let E=v/D,N=T/L,O=v/2,G=T/2,j=A/2,ee=D+1,Z=L+1,X=0,ue=0,$=new I;for(let ge=0;ge<Z;ge++){let xe=ge*N-G;for(let Ne=0;Ne<ee;Ne++){let Ue=Ne*E-O;$[x]=Ue*y,$[m]=xe*b,$[p]=j,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(Ne/D),h.push(1-ge/L),X+=1}}for(let ge=0;ge<L;ge++)for(let xe=0;xe<D;xe++){let Ne=d+xe+ee*ge,Ue=d+xe+ee*(ge+1),qe=d+(xe+1)+ee*(ge+1),rt=d+(xe+1)+ee*ge;c.push(Ne,Ue,rt),c.push(Ue,qe,rt),ue+=6}o.addGroup(f,ue,S),f+=ue,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function sr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Ke("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(s){let e={};for(let t=0;t<s.length;t++){let n=sr(s[t]);for(let i in n)e[i]=n[i]}return e}function J0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qh(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var vn={clone:sr,merge:wn},j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Q0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,lt=class extends En{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=Q0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=J0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Va=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},us=new I,Td=new oe,wd=new oe,Vt=class extends Va{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Da*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,Td,wd),t.subVectors(wd,Td)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Da*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rr=-90,Cr=1,zl=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Vt(Rr,Cr,e,t);i.layers=this.layers,this.add(i);let r=new Vt(Rr,Cr,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Rr,Cr,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Rr,Cr,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Rr,Cr,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Rr,Cr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ga=class extends on{constructor(e=[],t=xs,n,i,r,a,o,c,l,u){super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wa=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Ga(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new _t(5,5,5),r=new lt({name:"CubemapFromEquirect",uniforms:sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:en});r.uniforms.tEquirect.value=t;let a=new We(i,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=jt),new zl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}},Gt=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},eg={type:"move"},Gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Xa=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ee(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Bs=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Hs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Cn=new I,fs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=li(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=li(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=li(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=li(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=li(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ha("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ha("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wr=class extends En{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,Ta=new I,Ir=new I,Dr=new I,Lr=new oe,wa=new oe,Ip=new Ze,_l=new I,Aa=new I,yl=new I,Ad=new oe,ch=new oe,Rd=new oe,qa=class extends Ot{constructor(e=new Wr){if(super(),this.isSprite=!0,this.type="Sprite",Pr===void 0){Pr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Hs(t,5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute("position",new fs(n,3,0,!1)),Pr.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&tt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ir.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Dr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let a=this.center;Ml(_l.set(-.5,-.5,0),Dr,a,Ir,i,r),Ml(Aa.set(.5,-.5,0),Dr,a,Ir,i,r),Ml(yl.set(.5,.5,0),Dr,a,Ir,i,r),Ad.set(0,0),ch.set(1,0),Rd.set(1,1);let o=e.ray.intersectTriangle(_l,Aa,yl,!1,Ta);if(o===null&&(Ml(Aa.set(-.5,.5,0),Dr,a,Ir,i,r),ch.set(0,1),o=e.ray.intersectTriangle(_l,yl,Aa,!1,Ta),o===null))return;let c=e.ray.origin.distanceTo(Ta);c<e.near||c>e.far||t.push({distance:c,point:Ta.clone(),uv:Wi.getInterpolation(Ta,_l,Aa,yl,Ad,ch,Rd,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ml(s,e,t,n,i,r){Lr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(wa.x=r*Lr.x-i*Lr.y,wa.y=i*Lr.x+r*Lr.y):wa.copy(Lr),s.copy(e),s.x+=wa.x,s.y+=wa.y,s.applyMatrix4(Ip)}var Cd=new I,Pd=new Rt,Id=new Rt,tg=new I,Dd=new Ze,bl=new I,uh=new Fn,Ld=new Ze,hh=new hs,ds=class extends We{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=_h,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingBox.expandByPoint(bl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Fn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,bl),this.boundingSphere.expandByPoint(bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uh.copy(this.boundingSphere),uh.applyMatrix4(i),e.ray.intersectsSphere(uh)!==!1&&(Ld.copy(i).invert(),hh.copy(e.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&hh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===_h?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ke("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Pd.fromBufferAttribute(i.attributes.skinIndex,e),Id.fromBufferAttribute(i.attributes.skinWeight,e),Cd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Id.getComponent(r);if(a!==0){let o=Pd.getComponent(r);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(tg.copy(Cd).applyMatrix4(Dd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},qi=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},_i=class extends on{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Wt,u=Wt,h,d){super(null,a,o,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Nd=new Ze,ng=new Ze,zs=class s{constructor(e=[],t=[]){this.uuid=ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ke("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:ng;Nd.multiplyMatrices(o,t[r]),Nd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _i(t,e,e,In,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],a=t[r];a===void 0&&(Ke("Skeleton: No bone found with UUID:",r),a=new qi),this.bones.push(a),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let a=t[i];e.bones.push(a.uuid);let o=n[i];e.boneInverses.push(o.toArray())}return e}},ni=class extends vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Nr=new Ze,Ud=new Ze,Sl=[],Fd=new Wn,ig=new Ze,Ra=new We,Ca=new Fn,xn=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ni(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ig)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Fd.copy(e.boundingBox).applyMatrix4(Nr),this.boundingBox.union(Fd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Nr),Ca.copy(e.boundingSphere).applyMatrix4(Nr),this.boundingSphere.union(Ca)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ra.geometry=this.geometry,Ra.material=this.material,Ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ca.copy(this.boundingSphere),Ca.applyMatrix4(n),e.ray.intersectsSphere(Ca)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Nr),Ud.multiplyMatrices(n,Nr),Ra.matrixWorld=Ud,Ra.raycast(e,Sl);for(let a=0,o=Sl.length;a<o;a++){let c=Sl[a];c.instanceId=r,c.object=this,t.push(c)}Sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ni(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(i*this.count),i,this.count,yc,Kn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fh=new I,sg=new I,rg=new ht,Qn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=fh.subVectors(n,t).cross(sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(fh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rg.getNormalMatrix(e),i=this.coplanarPoint(fh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Rs=new Fn,ag=new oe(.5,.5),El=new I,Xr=class{constructor(e=new Qn,t=new Qn,n=new Qn,i=new Qn,r=new Qn,a=new Qn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ci,n=!1){let i=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],y=r[12],b=r[13],v=r[14],T=r[15];if(i[0].setComponents(l-a,f-u,p-g,T-y).normalize(),i[1].setComponents(l+a,f+u,p+g,T+y).normalize(),i[2].setComponents(l+o,f+h,p+x,T+b).normalize(),i[3].setComponents(l-o,f-h,p-x,T-b).normalize(),n)i[4].setComponents(c,d,m,v).normalize(),i[5].setComponents(l-c,f-d,p-m,T-v).normalize();else if(i[4].setComponents(l-c,f-d,p-m,T-v).normalize(),t===ci)i[5].setComponents(l+c,f+d,p+m,T+v).normalize();else if(t===Ba)i[5].setComponents(c,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);let t=ag.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(El.x=i.normal.x>0?e.max.x:e.min.x,El.y=i.normal.y>0?e.max.y:e.min.y,El.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var qr=class extends En{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},kl=new I,Vl=new I,Od=new Ze,Pa=new hs,Tl=new Fn,dh=new I,Bd=new I,ks=class extends Ot{constructor(e=new Mt,t=new qr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)kl.fromBufferAttribute(t,i-1),Vl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=kl.distanceTo(Vl);e.setAttribute("lineDistance",new st(n,1))}else Ke("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(i),Tl.radius+=r,e.ray.intersectsSphere(Tl)===!1)return;Od.copy(i).invert(),Pa.copy(e.ray).applyMatrix4(Od);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=u.getX(x),y=u.getX(x+1),b=wl(this,e,Pa,c,p,y,x);b&&t.push(b)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(f),p=wl(this,e,Pa,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=wl(this,e,Pa,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=wl(this,e,Pa,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wl(s,e,t,n,i,r,a){let o=s.geometry.attributes.position;if(kl.fromBufferAttribute(o,i),Vl.fromBufferAttribute(o,r),t.distanceSqToSegment(kl,Vl,dh,Bd)>n)return;dh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(dh);if(!(l<e.near||l>e.far))return{distance:l,point:Bd.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Hd=new I,zd=new I,Vs=class extends ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Hd.fromBufferAttribute(t,i),zd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hd.distanceTo(zd);e.setAttribute("lineDistance",new st(n,1))}else Ke("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ya=class extends ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Yr=class extends En{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},kd=new Ze,Mh=new hs,Al=new Fn,Rl=new I,ps=class extends Ot{constructor(e=new Mt,t=new Yr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Al.copy(n.boundingSphere),Al.applyMatrix4(i),Al.radius+=r,e.ray.intersectsSphere(Al)===!1)return;kd.copy(i).invert(),Mh.copy(e.ray).applyMatrix4(kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Rl.fromBufferAttribute(h,m),Vd(Rl,m,c,i,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Rl.fromBufferAttribute(h,g),Vd(Rl,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vd(s,e,t,n,i,r,a){let o=Mh.distanceSqToPoint(s);if(o<t){let c=new I;Mh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var qn=class extends on{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},yi=class extends on{constructor(e,t,n=fi,i,r,a,o=Wt,c=Wt,l,u=gi,h=1){if(u!==gi&&u!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gl=class extends yi{constructor(e,t=fi,n=xs,i,r,a=Wt,o=Wt,c,l=gi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Za=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ms=class s extends Mt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,x=i+1,m=new I,p=new I;for(let y=0;y<=g;y++){let b=0,v=0,T=0,A=0;if(y<=n){let S=y/n,E=S*Math.PI/2;v=-u-e*Math.cos(E),T=e*Math.sin(E),A=-e*Math.cos(E),b=S*h}else if(y<=n+r){let S=(y-n)/r;v=-u+S*t,T=e,A=0,b=h+S*d}else{let S=(y-n-r)/n,E=S*Math.PI/2;v=u+e*Math.sin(E),T=e*Math.cos(E),A=e*Math.sin(E),b=h+d+S*h}let D=Math.max(0,Math.min(1,b/f)),L=0;y===0?L=.5/i:y===g&&(L=-.5/i);for(let S=0;S<=i;S++){let E=S/i,N=E*Math.PI*2,O=Math.sin(N),G=Math.cos(N);p.x=-T*G,p.y=v,p.z=T*O,o.push(p.x,p.y,p.z),m.set(-T*G,A,T*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(E+L,D)}if(y>0){let S=(y-1)*x;for(let E=0;E<i;E++){let N=S+E,O=S+E+1,G=y*x+E,j=y*x+E+1;a.push(N,O,G),a.push(O,j,G)}}}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var rn=class s extends Mt{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,x=[],m=n/2,p=0;y(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function y(){let v=new I,T=new I,A=0,D=(t-e)/n;for(let L=0;L<=r;L++){let S=[],E=L/r,N=E*(t-e)+e;for(let O=0;O<=i;O++){let G=O/i,j=G*c+o,ee=Math.sin(j),Z=Math.cos(j);T.x=N*ee,T.y=-E*n+m,T.z=N*Z,h.push(T.x,T.y,T.z),v.set(ee,D,Z).normalize(),d.push(v.x,v.y,v.z),f.push(G,1-E),S.push(g++)}x.push(S)}for(let L=0;L<i;L++)for(let S=0;S<r;S++){let E=x[S][L],N=x[S+1][L],O=x[S+1][L+1],G=x[S][L+1];(e>0||S!==0)&&(u.push(E,N,G),A+=3),(t>0||S!==r-1)&&(u.push(N,O,G),A+=3)}l.addGroup(p,A,0),p+=A}function b(v){let T=g,A=new oe,D=new I,L=0,S=v===!0?e:t,E=v===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*E,0),d.push(0,E,0),f.push(.5,.5),g++;let N=g;for(let O=0;O<=i;O++){let j=O/i*c+o,ee=Math.cos(j),Z=Math.sin(j);D.x=S*Z,D.y=m*E,D.z=S*ee,h.push(D.x,D.y,D.z),d.push(0,E,0),A.x=ee*.5+.5,A.y=Z*.5*E+.5,f.push(A.x,A.y),g++}for(let O=0;O<i;O++){let G=T+O,j=N+O;v===!0?u.push(j,j+1,G):u.push(j+1,j,G),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gs=class s extends rn{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wl=class s extends Mt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],a=[];o(i),l(n),u(),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(r.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new I,v=new I,T=new I;for(let A=0;A<t.length;A+=3)f(t[A+0],b),f(t[A+1],v),f(t[A+2],T),c(b,v,T,y)}function c(y,b,v,T){let A=T+1,D=[];for(let L=0;L<=A;L++){D[L]=[];let S=y.clone().lerp(v,L/A),E=b.clone().lerp(v,L/A),N=A-L;for(let O=0;O<=N;O++)O===0&&L===A?D[L][O]=S:D[L][O]=S.clone().lerp(E,O/N)}for(let L=0;L<A;L++)for(let S=0;S<2*(A-L)-1;S++){let E=Math.floor(S/2);S%2===0?(d(D[L][E+1]),d(D[L+1][E]),d(D[L][E])):(d(D[L][E+1]),d(D[L+1][E+1]),d(D[L+1][E]))}}function l(y){let b=new I;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(y),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function u(){let y=new I;for(let b=0;b<r.length;b+=3){y.x=r[b+0],y.y=r[b+1],y.z=r[b+2];let v=m(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;a.push(v,1-T)}g(),h()}function h(){for(let y=0;y<a.length;y+=6){let b=a[y+0],v=a[y+2],T=a[y+4],A=Math.max(b,v,T),D=Math.min(b,v,T);A>.9&&D<.1&&(b<.2&&(a[y+0]+=1),v<.2&&(a[y+2]+=1),T<.2&&(a[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function f(y,b){let v=y*3;b.x=e[v+0],b.y=e[v+1],b.z=e[v+2]}function g(){let y=new I,b=new I,v=new I,T=new I,A=new oe,D=new oe,L=new oe;for(let S=0,E=0;S<r.length;S+=9,E+=6){y.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),A.set(a[E+0],a[E+1]),D.set(a[E+2],a[E+3]),L.set(a[E+4],a[E+5]),T.copy(y).add(b).add(v).divideScalar(3);let N=m(T);x(A,E+0,y,N),x(D,E+2,b,N),x(L,E+4,v,N)}}function x(y,b,v,T){T<0&&y.x===1&&(a[b]=y.x-1),v.x===0&&v.z===0&&(a[b]=T/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Yn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ke("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(a-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),o=this.getPoint(r),c=t||(a.isVector2?new oe:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],r=[],a=[],o=new I,c=new Ze;for(let f=0;f<=e;f++){let g=f/e;i[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ft(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(ft(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Zr=class extends Yn{constructor(e=0,t=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new oe){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Xl=class extends Zr{constructor(e,t,n,i,r,a){super(e,t,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let s=0,e=0,t=0,n=0;function i(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,i(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+n*o}}}var Cl=new I,ph=new Yh,mh=new Yh,gh=new Yh,Kr=class extends Yn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,r=i.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=i[(o-1)%r]:(Cl.subVectors(i[0],i[1]).add(i[0]),l=Cl);let h=i[o%r],d=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Cl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Cl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),ph.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,g,x,m),mh.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,g,x,m),gh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,g,x,m)}else this.curveType==="catmullrom"&&(ph.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),mh.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),gh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(ph.calc(c),mh.calc(c),gh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gd(s,e,t,n,i){let r=(n-e)*.5,a=(i-t)*.5,o=s*s,c=s*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*s+t}function og(s,e){let t=1-s;return t*t*e}function lg(s,e){return 2*(1-s)*s*e}function cg(s,e){return s*s*e}function Na(s,e,t,n){return og(s,e)+lg(s,t)+cg(s,n)}function ug(s,e){let t=1-s;return t*t*t*e}function hg(s,e){let t=1-s;return 3*t*t*s*e}function fg(s,e){return 3*(1-s)*s*s*e}function dg(s,e){return s*s*s*e}function Ua(s,e,t,n,i){return ug(s,e)+hg(s,t)+fg(s,n)+dg(s,i)}var Ka=class extends Yn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ua(e,i.x,r.x,a.x,o.x),Ua(e,i.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ql=class extends Yn{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ua(e,i.x,r.x,a.x,o.x),Ua(e,i.y,r.y,a.y,o.y),Ua(e,i.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$a=class extends Yn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yl=class extends Yn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Yn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Na(e,i.x,r.x,a.x),Na(e,i.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ja=class extends Yn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,r=this.v1,a=this.v2;return n.set(Na(e,i.x,r.x,a.x),Na(e,i.y,r.y,a.y),Na(e,i.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Qa=class extends Yn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,i=this.points,r=(i.length-1)*e,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],u=i[a>i.length-2?i.length-1:a+1],h=i[a>i.length-3?i.length-1:a+2];return n.set(Gd(o,c.x,l.x,u.x,h.x),Gd(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new oe().fromArray(i))}return this}},Zl=Object.freeze({__proto__:null,ArcCurve:Xl,CatmullRomCurve3:Kr,CubicBezierCurve:Ka,CubicBezierCurve3:ql,EllipseCurve:Zr,LineCurve:$a,LineCurve3:Yl,QuadraticBezierCurve:Ja,QuadraticBezierCurve3:ja,SplineCurve:Qa}),Kl=class extends Yn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let a=i[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let a=r[i],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Zl[i.type]().fromJSON(i))}return this}},eo=class extends Kl{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new $a(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ja(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,a){let o=new Ka(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Qa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,i,r,a),this}absarc(e,t,n,i,r,a){return this.absellipse(e,t,n,n,i,r,a),this}ellipse(e,t,n,i,r,a,o,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,a,o,c),this}absellipse(e,t,n,i,r,a,o,c){let l=new Zr(e,t,n,i,r,a,o,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},gs=class extends eo{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new eo().fromJSON(i))}return this}};function pg(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Dp(s,0,i,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=_g(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let u=o,h=c;for(let d=t;d<i;d+=t){let f=s[d],g=s[d+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>h&&(h=g)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return to(r,a,t,o,c,l,0),a}function Dp(s,e,t,n,i){let r;if(i===Pg(s,e,t,n)>0)for(let a=e;a<t;a+=n)r=Wd(a/n|0,s[a],s[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Wd(a/n|0,s[a],s[a+1],r);return r&&$r(r,r.next)&&(io(r),r=r.next),r}function Ws(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&($r(t,t.next)||qt(t.prev,t,t.next)===0)){if(io(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function to(s,e,t,n,i,r,a){if(!s)return;!a&&r&&Eg(s,n,i,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?gg(s,n,i,r):mg(s)){e.push(c.i,s.i,l.i),io(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=xg(Ws(s),e),to(s,e,t,n,i,r,2)):a===2&&vg(s,e,t,n,i,r):to(Ws(s),e,t,n,i,r,1);break}}}function mg(s){let e=s.prev,t=s,n=s.next;if(qt(e,t,n)>=0)return!1;let i=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(i,r,a),h=Math.min(o,c,l),d=Math.max(i,r,a),f=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Ia(i,o,r,c,a,l,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gg(s,e,t,n){let i=s.prev,r=s,a=s.next;if(qt(i,r,a)>=0)return!1;let o=i.x,c=r.x,l=a.x,u=i.y,h=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(u,h,d),x=Math.max(o,c,l),m=Math.max(u,h,d),p=bh(f,g,e,t,n),y=bh(x,m,e,t,n),b=s.prevZ,v=s.nextZ;for(;b&&b.z>=p&&v&&v.z<=y;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&Ia(o,u,c,h,l,d,b.x,b.y)&&qt(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Ia(o,u,c,h,l,d,v.x,v.y)&&qt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==a&&Ia(o,u,c,h,l,d,b.x,b.y)&&qt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==i&&v!==a&&Ia(o,u,c,h,l,d,v.x,v.y)&&qt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function xg(s,e){let t=s;do{let n=t.prev,i=t.next.next;!$r(n,i)&&Np(n,t,t.next,i)&&no(n,i)&&no(i,n)&&(e.push(n.i,t.i,i.i),io(t),io(t.next),t=s=i),t=t.next}while(t!==s);return Ws(t)}function vg(s,e,t,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ag(a,o)){let c=Up(a,o);a=Ws(a,a.next),c=Ws(c,c.next),to(a,e,t,n,i,r,0),to(c,e,t,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function _g(s,e,t,n){let i=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:s.length,l=Dp(s,o,c,n,!1);l===l.next&&(l.steiner=!0),i.push(wg(l))}i.sort(yg);for(let r=0;r<i.length;r++)t=Mg(i[r],t);return t}function yg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Mg(s,e){let t=bg(s,e);if(!t)return e;let n=Up(t,s);return Ws(n,n.next),Ws(t,t.next)}function bg(s,e){let t=e,n=s.x,i=s.y,r=-1/0,a;if($r(s,t))return t;do{if($r(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Lp(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);no(t,s)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Sg(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Sg(s,e){return qt(s.prev,s,e.prev)<0&&qt(e.next,s,s.next)<0}function Eg(s,e,t,n){let i=s;do i.z===0&&(i.z=bh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Tg(i)}function Tg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(i=n,n=n.nextZ,o--):(i=a,a=a.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=a}r.nextZ=null,t*=2}while(e>1);return s}function bh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function wg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Lp(s,e,t,n,i,r,a,o){return(i-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(i-a)*(n-o)}function Ia(s,e,t,n,i,r,a,o){return!(s===a&&e===o)&&Lp(s,e,t,n,i,r,a,o)}function Ag(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Rg(s,e)&&(no(s,e)&&no(e,s)&&Cg(s,e)&&(qt(s.prev,s,e.prev)||qt(s,e.prev,e))||$r(s,e)&&qt(s.prev,s,s.next)>0&&qt(e.prev,e,e.next)>0)}function qt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function $r(s,e){return s.x===e.x&&s.y===e.y}function Np(s,e,t,n){let i=Il(qt(s,e,t)),r=Il(qt(s,e,n)),a=Il(qt(t,n,s)),o=Il(qt(t,n,e));return!!(i!==r&&a!==o||i===0&&Pl(s,t,e)||r===0&&Pl(s,n,e)||a===0&&Pl(t,s,n)||o===0&&Pl(t,e,n))}function Pl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Il(s){return s>0?1:s<0?-1:0}function Rg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Np(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function no(s,e){return qt(s.prev,s,s.next)<0?qt(s,e,s.next)>=0&&qt(s,s.prev,e)>=0:qt(s,e,s.prev)<0||qt(s,s.next,e)<0}function Cg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Up(s,e){let t=Sh(s.i,s.x,s.y),n=Sh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wd(s,e,t,n){let i=Sh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function io(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Sh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pg(s,e,t,n){let i=0;for(let r=e,a=t-n;r<t;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}var Eh=class{static triangulate(e,t,n=2){return pg(e,t,n)}},Ds=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Xd(e),qd(n,e);let a=e.length;t.forEach(Xd);for(let c=0;c<t.length;c++)i.push(a),a+=t[c].length,qd(n,t[c]);let o=Eh.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Xd(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function qd(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Xs=class s extends Mt{constructor(e=new gs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new st(i,3)),this.setAttribute("uv",new st(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ig,b,v=!1,T,A,D,L;if(p){b=p.getSpacedPoints(u),v=!0,d=!1;let pe=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(u,pe),A=new I,D=new I,L=new I}d||(m=0,f=0,g=0,x=0);let S=o.extractPoints(l),E=S.shape,N=S.holes;if(!Ds.isClockWise(E)){E=E.reverse();for(let pe=0,Me=N.length;pe<Me;pe++){let ve=N[pe];Ds.isClockWise(ve)&&(N[pe]=ve.reverse())}}function G(pe){let ve=10000000000000001e-36,se=pe[0];for(let P=1;P<=pe.length;P++){let z=P%pe.length,K=pe[z],_e=K.x-se.x,le=K.y-se.y,w=_e*_e+le*le,M=Math.max(Math.abs(K.x),Math.abs(K.y),Math.abs(se.x),Math.abs(se.y)),F=ve*M*M;if(w<=F){pe.splice(z,1),P--;continue}se=K}}G(E),N.forEach(G);let j=N.length,ee=E;for(let pe=0;pe<j;pe++){let Me=N[pe];E=E.concat(Me)}function Z(pe,Me,ve){return Me||tt("ExtrudeGeometry: vec does not exist"),pe.clone().addScaledVector(Me,ve)}let X=E.length;function ue(pe,Me,ve){let se,P,z,K=pe.x-Me.x,_e=pe.y-Me.y,le=ve.x-pe.x,w=ve.y-pe.y,M=K*K+_e*_e,F=K*w-_e*le;if(Math.abs(F)>Number.EPSILON){let q=Math.sqrt(M),re=Math.sqrt(le*le+w*w),B=Me.x-_e/q,me=Me.y+K/q,ae=ve.x-w/re,he=ve.y+le/re,Fe=((ae-B)*w-(he-me)*le)/(K*w-_e*le);se=B+K*Fe-pe.x,P=me+_e*Fe-pe.y;let fe=se*se+P*P;if(fe<=2)return new oe(se,P);z=Math.sqrt(fe/2)}else{let q=!1;K>Number.EPSILON?le>Number.EPSILON&&(q=!0):K<-Number.EPSILON?le<-Number.EPSILON&&(q=!0):Math.sign(_e)===Math.sign(w)&&(q=!0),q?(se=-_e,P=K,z=Math.sqrt(M)):(se=K,P=_e,z=Math.sqrt(M/2))}return new oe(se/z,P/z)}let $=[];for(let pe=0,Me=ee.length,ve=Me-1,se=pe+1;pe<Me;pe++,ve++,se++)ve===Me&&(ve=0),se===Me&&(se=0),$[pe]=ue(ee[pe],ee[ve],ee[se]);let ge=[],xe,Ne=$.concat();for(let pe=0,Me=j;pe<Me;pe++){let ve=N[pe];xe=[];for(let se=0,P=ve.length,z=P-1,K=se+1;se<P;se++,z++,K++)z===P&&(z=0),K===P&&(K=0),xe[se]=ue(ve[se],ve[z],ve[K]);ge.push(xe),Ne=Ne.concat(xe)}let Ue;if(m===0)Ue=Ds.triangulateShape(ee,N);else{let pe=[],Me=[];for(let ve=0;ve<m;ve++){let se=ve/m,P=f*Math.cos(se*Math.PI/2),z=g*Math.sin(se*Math.PI/2)+x;for(let K=0,_e=ee.length;K<_e;K++){let le=Z(ee[K],$[K],z);He(le.x,le.y,-P),se===0&&pe.push(le)}for(let K=0,_e=j;K<_e;K++){let le=N[K];xe=ge[K];let w=[];for(let M=0,F=le.length;M<F;M++){let q=Z(le[M],xe[M],z);He(q.x,q.y,-P),se===0&&w.push(q)}se===0&&Me.push(w)}}Ue=Ds.triangulateShape(pe,Me)}let qe=Ue.length,rt=g+x;for(let pe=0;pe<X;pe++){let Me=d?Z(E[pe],Ne[pe],rt):E[pe];v?(D.copy(T.normals[0]).multiplyScalar(Me.x),A.copy(T.binormals[0]).multiplyScalar(Me.y),L.copy(b[0]).add(D).add(A),He(L.x,L.y,L.z)):He(Me.x,Me.y,0)}for(let pe=1;pe<=u;pe++)for(let Me=0;Me<X;Me++){let ve=d?Z(E[Me],Ne[Me],rt):E[Me];v?(D.copy(T.normals[pe]).multiplyScalar(ve.x),A.copy(T.binormals[pe]).multiplyScalar(ve.y),L.copy(b[pe]).add(D).add(A),He(L.x,L.y,L.z)):He(ve.x,ve.y,h/u*pe)}for(let pe=m-1;pe>=0;pe--){let Me=pe/m,ve=f*Math.cos(Me*Math.PI/2),se=g*Math.sin(Me*Math.PI/2)+x;for(let P=0,z=ee.length;P<z;P++){let K=Z(ee[P],$[P],se);He(K.x,K.y,h+ve)}for(let P=0,z=N.length;P<z;P++){let K=N[P];xe=ge[P];for(let _e=0,le=K.length;_e<le;_e++){let w=Z(K[_e],xe[_e],se);v?He(w.x,w.y+b[u-1].y,b[u-1].x+ve):He(w.x,w.y,h+ve)}}}te(),de();function te(){let pe=i.length/3;if(d){let Me=0,ve=X*Me;for(let se=0;se<qe;se++){let P=Ue[se];Ce(P[2]+ve,P[1]+ve,P[0]+ve)}Me=u+m*2,ve=X*Me;for(let se=0;se<qe;se++){let P=Ue[se];Ce(P[0]+ve,P[1]+ve,P[2]+ve)}}else{for(let Me=0;Me<qe;Me++){let ve=Ue[Me];Ce(ve[2],ve[1],ve[0])}for(let Me=0;Me<qe;Me++){let ve=Ue[Me];Ce(ve[0]+X*u,ve[1]+X*u,ve[2]+X*u)}}n.addGroup(pe,i.length/3-pe,0)}function de(){let pe=i.length/3,Me=0;Te(ee,Me),Me+=ee.length;for(let ve=0,se=N.length;ve<se;ve++){let P=N[ve];Te(P,Me),Me+=P.length}n.addGroup(pe,i.length/3-pe,1)}function Te(pe,Me){let ve=pe.length;for(;--ve>=0;){let se=ve,P=ve-1;P<0&&(P=pe.length-1);for(let z=0,K=u+m*2;z<K;z++){let _e=X*z,le=X*(z+1),w=Me+se+_e,M=Me+P+_e,F=Me+P+le,q=Me+se+le;it(w,M,F,q)}}}function He(pe,Me,ve){c.push(pe),c.push(Me),c.push(ve)}function Ce(pe,Me,ve){ot(pe),ot(Me),ot(ve);let se=i.length/3,P=y.generateTopUV(n,i,se-3,se-2,se-1);Ye(P[0]),Ye(P[1]),Ye(P[2])}function it(pe,Me,ve,se){ot(pe),ot(Me),ot(se),ot(Me),ot(ve),ot(se);let P=i.length/3,z=y.generateSideWallUV(n,i,P-6,P-3,P-2,P-1);Ye(z[0]),Ye(z[1]),Ye(z[3]),Ye(z[1]),Ye(z[2]),Ye(z[3])}function ot(pe){i.push(c[pe*3+0]),i.push(c[pe*3+1]),i.push(c[pe*3+2])}function Ye(pe){r.push(pe.x),r.push(pe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Zl[i.type]().fromJSON(i)),new s(n,e.options)}},Ig={generateTopUV:function(s,e,t,n,i){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new oe(r,a),new oe(o,c),new oe(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],g=e[i*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new oe(a,1-c),new oe(l,1-h),new oe(d,1-g),new oe(x,1-p)]:[new oe(o,1-c),new oe(u,1-h),new oe(f,1-g),new oe(m,1-p)]}};function Dg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var so=class s extends Wl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},ro=class s extends Mt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=ft(i,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],u=1/t,h=new I,d=new oe,f=new I,g=new I,x=new I,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let y=0;y<=t;y++){let b=n+y*u*i,v=Math.sin(b),T=Math.cos(b);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*v,h.y=e[A].y,h.z=e[A].x*T,a.push(h.x,h.y,h.z),d.x=y/t,d.y=A/(e.length-1),o.push(d.x,d.y);let D=c[3*A+0]*v,L=c[3*A+1],S=c[3*A+0]*T;l.push(D,L,S)}}for(let y=0;y<t;y++)for(let b=0;b<e.length-1;b++){let v=b+y*e.length,T=v,A=v+e.length,D=v+e.length+1,L=v+1;r.push(T,A,L),r.push(D,L,A)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("uv",new st(o,2)),this.setAttribute("normal",new st(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Pt=class s extends Mt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let y=p*d-a;for(let b=0;b<l;b++){let v=b*h-r;g.push(v,-y,0),x.push(0,0,1),m.push(b/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let y=0;y<o;y++){let b=y+l*p,v=y+l*(p+1),T=y+1+l*(p+1),A=y+1+l*p;f.push(b,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ao=class s extends Mt{constructor(e=.5,t=1,n=32,i=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);let o=[],c=[],l=[],u=[],h=e,d=(t-e)/i,f=new I,g=new oe;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let x=0;x<i;x++){let m=x*(n+1);for(let p=0;p<n;p++){let y=p+m,b=y,v=y+n+1,T=y+n+2,A=y+1;o.push(b,v,A),o.push(v,T,A)}}this.setIndex(o),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Pn=class s extends Mt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],h=new I,d=new I,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let y=[],b=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let T=0;T<=t;T++){let A=T/t;h.x=-e*Math.cos(i+A*r)*Math.sin(a+b*o),h.y=e*Math.cos(a+b*o),h.z=e*Math.sin(i+A*r)*Math.sin(a+b*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),m.push(A+v,1-b),y.push(l++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let b=u[p][y+1],v=u[p][y],T=u[p+1][y],A=u[p+1][y+1];(p!==0||a>0)&&f.push(b,v,A),(p!==n-1||c<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mi=class s extends Mt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let a=[],o=[],c=[],l=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let x=g/i*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;a.push(x,m,y),a.push(m,p,y)}this.setIndex(a),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var oo=class s extends Mt{constructor(e=new ja(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,c=new I,l=new oe,u=new I,h=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new st(h,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function x(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),y(),p()}function m(b){u=e.getPointAt(b/t,u);let v=a.normals[b],T=a.binormals[b];for(let A=0;A<=i;A++){let D=A/i*Math.PI*2,L=Math.sin(D),S=-Math.cos(D);c.x=S*v.x+L*T.x,c.y=S*v.y+L*T.y,c.z=S*v.z+L*T.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,h.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let v=1;v<=i;v++){let T=(i+1)*(b-1)+(v-1),A=(i+1)*b+(v-1),D=(i+1)*b+v,L=(i+1)*(b-1)+v;g.push(T,A,L),g.push(A,D,L)}}function y(){for(let b=0;b<=t;b++)for(let v=0;v<=i;v++)l.x=b/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Zl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Jr=class extends lt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},at=class extends En{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Kt=class extends at{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var lo=class extends En{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ru,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var $l=class extends En{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Jl=class extends En{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Lg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Yd(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Fp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}var Yi=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jl=class extends Yi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ps,endingEnd:Ps}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Is:r=e,o=2*t-n;break;case Fa:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Is:a=e,c=2*n-t;break;case Fa:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+y*a[l+T]+b*a[c+T]+v*a[h+T];return r}},co=class extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},Ql=class extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dl(t,this.TimeBufferType),this.values=Dl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Dl(e.times,Array),values:Dl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new co(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Us:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case Ll:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ke("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Us;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Ll}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(tt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){tt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){tt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&y0(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){tt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ll,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let x=t[h+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Fs;var Zi=class extends On{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Us;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends On{constructor(e,t,n,i){super(e,t,n,i)}};uo.prototype.ValueTypeName="color";var bi=class extends On{constructor(e,t,n,i){super(e,t,n,i)}};bi.prototype.ValueTypeName="number";var ec=class extends Yi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t),l=e*o;for(let u=l+o;l!==u;l+=4)sn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Si=class extends On{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ec(this.times,this.values,this.getValueSize(),e)}};Si.prototype.ValueTypeName="quaternion";Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Ki=class extends On{constructor(e,t,n){super(e,t,n)}};Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=Us;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends On{constructor(e,t,n,i){super(e,t,n,i)}};Ei.prototype.ValueTypeName="vector";var qs=class{constructor(e="",t=-1,n=[],i=su){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ug(n[a]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(On.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Lg(c);c=Yd(c,1,u),l=Yd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new bi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let a=[];for(let o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(Ke("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return tt("AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,x){if(f.length!==0){let m=[],p=[];Fp(f,m,p,g),m.length!==0&&x.push(new h(d,m,p))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){let b=d[g];m.push(b.time),p.push(b.morphTarget===x?1:0)}i.push(new bi(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[h].name+"]";n(Ei,f+".position",d,"pos",i),n(Si,f+".quaternion",d,"rot",i),n(Ei,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ng(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Ei;case"color":return uo;case"quaternion":return Si;case"bool":case"boolean":return Zi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ug(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ng(s.type);if(s.times===void 0){let t=[],n=[];Fp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var mi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},tc=class{constructor(e,t,n){let i=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],g=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Op=new tc,Ti=class{constructor(e){this.manager=e!==void 0?e:Op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var Gi={},Th=class extends Error{constructor(e,t){super(e),this.response=t}},jr=class extends Ti{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=mi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Gi[e]!==void 0){Gi[e].push({onLoad:t,onProgress:n,onError:i});return}Gi[e]=[],Gi[e].push({onLoad:t,onProgress:n,onError:i});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ke("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=Gi[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){y();function y(){h.read().then(({done:b,value:v})=>{if(b)p.close();else{x+=v.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let A=0,D=u.length;A<D;A++){let L=u[A];L.onProgress&&L.onProgress(T)}p.enqueue(v),y()}},b=>{p.error(b)})}}});return new Response(m)}else throw new Th(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{mi.add(`file:${e}`,l);let u=Gi[e];delete Gi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=Gi[e];if(u===void 0)throw this.manager.itemError(e),l;delete Gi[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ur=new WeakMap,nc=class extends Ti{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=mi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Ur.get(a);h===void 0&&(h=[],Ur.set(a,h)),h.push({onLoad:t,onError:i})}return a}let o=Br("img");function c(){u(),t&&t(this);let h=Ur.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Ur.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),mi.remove(`image:${e}`);let d=Ur.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}Ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),mi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ys=class extends Ti{constructor(e){super(e)}load(e,t,n,i){let r=new on,a=new nc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},Zs=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ho=class extends Zs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},xh=new Ze,Zd=new I,Kd=new I,fo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zd),Kd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kd),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},wh=class extends fo{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Os*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ks=class extends Zs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new wh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ah=class extends fo{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},Bn=class extends Zs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},wi=class extends Va{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rh=class extends fo{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$s=class extends Zs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Rh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var $i=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var vh=new WeakMap,po=class extends Ti{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ke("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ke("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=mi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(vh.has(a)===!0)i&&i(vh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return mi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),vh.set(c,l),mi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});mi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ic=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Js=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var sc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){sn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let a=this._workIndex*r;sn.multiplyQuaternionsFlat(e,a,e,t,e,n),sn.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){let a=1-i;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*i}}},Zh="\\[\\]\\.:\\/",Fg=new RegExp("["+Zh+"]","g"),Kh="[^"+Zh+"]",Og="[^"+Zh.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",Kh),Hg=/(WCOD+)?/.source.replace("WCOD",Og),zg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kh),kg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kh),Vg=new RegExp("^"+Bg+Hg+zg+kg+"$"),Gg=["material","materials","bones","map"],Ch=class{constructor(e,t,n){let i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fg,"")}static parseTrackName(e){let t=Vg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Gg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ke("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[i];if(a===void 0){let l=t.nodeName;tt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=Ch;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Ps,endingEnd:Ps};for(let l=0;l!==a;++l){let u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=iu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case _p:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case su:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,a=n===vp;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===nu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){let o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Is,i.endingEnd=Is):(e?i.endingStart=this.zeroSlopeAtStart?Is:Ps:i.endingStart=Fa,t?i.endingEnd=this.zeroSlopeAtEnd?Is:Ps:i.endingEnd=Fa)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},Wg=new Float32Array(1),mo=class extends xi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,g=u[f];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;g=new sc(Lt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[h]=g}o[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new co(new Float32Array(2),new Float32Array(2),1,Wg),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,a=typeof e=="string"?qs.findByName(i,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=su),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let u=new rc(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?qs.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var $d=new Ze,go=class{constructor(e,t,n=0,i=1/0){this.ray=new hs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):tt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $d.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(e,t=!0,n=[]){return Ph(e,this,n,t),n.sort(Jd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Ph(e[i],this,n,t);return n.sort(Jd),n}};function Jd(s,e){return s.distance-e.distance}function Ph(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)Ph(r[a],e,t,!0)}}function $h(s,e,t,n){let i=Xg(n);switch(t){case zh:return s*e;case yc:return s*e/i.components*i.byteLength;case Mc:return s*e/i.components*i.byteLength;case ir:return s*e*2/i.components*i.byteLength;case bc:return s*e*2/i.components*i.byteLength;case kh:return s*e*3/i.components*i.byteLength;case In:return s*e*4/i.components*i.byteLength;case Sc:return s*e*4/i.components*i.byteLength;case wo:case Ao:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Tc:case Ac:return Math.max(s,16)*Math.max(e,8)/4;case Ec:case wc:return Math.max(s,8)*Math.max(e,8)/2;case Rc:case Cc:case Ic:case Dc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:case Nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case qc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Kc:case $c:case Jc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case jc:case Qc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case eu:case tu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xg(s){switch(s){case Tn:case Fh:return{byteLength:1,components:1};case ta:case Oh:case tn:return{byteLength:2,components:1};case vc:case _c:return{byteLength:2,components:4};case fi:case xc:case Kn:return{byteLength:4,components:1};case Bh:case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Ke("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function am(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Yg(s){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],x=h[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}var Zg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,xx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,_x=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ix=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Hx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,kx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$x=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,iv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ev=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Vv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,f_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,b_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,T_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,w_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,dt={alphahash_fragment:Zg,alphahash_pars_fragment:Kg,alphamap_fragment:$g,alphamap_pars_fragment:Jg,alphatest_fragment:jg,alphatest_pars_fragment:Qg,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ax,iridescence_fragment:ox,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:hx,clipping_planes_vertex:fx,color_fragment:dx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:xx,cube_uv_reflection_fragment:vx,defaultnormal_vertex:_x,displacementmap_pars_vertex:yx,displacementmap_vertex:Mx,emissivemap_fragment:bx,emissivemap_pars_fragment:Sx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:wx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:zx,envmap_vertex:Px,fog_vertex:Ix,fog_pars_vertex:Dx,fog_fragment:Lx,fog_pars_fragment:Nx,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Fx,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Bx,lights_pars_begin:Hx,lights_toon_fragment:kx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Wx,lights_physical_fragment:Xx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:Zx,lights_fragment_end:Kx,logdepthbuf_fragment:$x,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:jx,logdepthbuf_vertex:Qx,map_fragment:ev,map_pars_fragment:tv,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:av,morphcolor_vertex:ov,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:uv,normal_fragment_begin:hv,normal_fragment_maps:fv,normal_pars_fragment:dv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:xv,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:yv,opaque_fragment:Mv,packing:bv,premultiplied_alpha_fragment:Sv,project_vertex:Ev,dithering_fragment:Tv,dithering_pars_fragment:wv,roughnessmap_fragment:Av,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Cv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Iv,shadowmask_pars_fragment:Dv,skinbase_vertex:Lv,skinning_pars_vertex:Nv,skinning_vertex:Uv,skinnormal_vertex:Fv,specularmap_fragment:Ov,specularmap_pars_fragment:Bv,tonemapping_fragment:Hv,tonemapping_pars_fragment:zv,transmission_fragment:kv,transmission_pars_fragment:Vv,uv_pars_fragment:Gv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:qv,background_vert:Yv,background_frag:Zv,backgroundCube_vert:Kv,backgroundCube_frag:$v,cube_vert:Jv,cube_frag:jv,depth_vert:Qv,depth_frag:e_,distance_vert:t_,distance_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:a_,meshbasic_vert:o_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:u_,meshmatcap_vert:h_,meshmatcap_frag:f_,meshnormal_vert:d_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:x_,meshphysical_frag:v_,meshtoon_vert:__,meshtoon_frag:y_,points_vert:M_,points_frag:b_,shadow_vert:S_,shadow_frag:E_,sprite_vert:T_,sprite_frag:w_},Be={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ci={basic:{uniforms:wn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ee(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Be.points,Be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Be.common,Be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Be.sprite,Be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:wn([Be.common,Be.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:wn([Be.lights,Be.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ci.physical={uniforms:wn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};var cu={r:0,b:0,g:0},rr=new Xn,A_=new Ze;function R_(s,e,t,n,i,r,a){let o=new Ee(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function x(b){let v=!1,T=g(b);T===null?p(o,c):T&&T.isColor&&(p(T,1),v=!0);let A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,v){let T=g(v);T&&(T.isCubeTexture||T.mapping===To)?(u===void 0&&(u=new We(new _t(1,1,1),new lt({name:"BackgroundCubeMaterial",uniforms:sr(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,D,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),rr.copy(v.backgroundRotation),rr.x*=-1,rr.y*=-1,rr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(rr.y*=-1,rr.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(A_.makeRotationFromEuler(rr)),u.material.toneMapped=pt.getTransfer(T.colorSpace)!==Tt,(h!==T||d!==T.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new We(new Pt(2,2),new lt({name:"BackgroundMaterial",uniforms:sr(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=pt.getTransfer(T.colorSpace)!==Tt,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=T,d=T.version,f=s.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,v){b.getRGB(cu,qh(s)),n.buffers.color.setClear(cu.r,cu.g,cu.b,v,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),c=v,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:x,addToRenderList:m,dispose:y}}function C_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,a=!1;function o(E,N,O,G,j){let ee=!1,Z=h(G,O,N);r!==Z&&(r=Z,l(r.object)),ee=f(E,G,O,j),ee&&g(E,G,O,j),j!==null&&e.update(j,s.ELEMENT_ARRAY_BUFFER),(ee||a)&&(a=!1,v(E,N,O,G),j!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return s.createVertexArray()}function l(E){return s.bindVertexArray(E)}function u(E){return s.deleteVertexArray(E)}function h(E,N,O){let G=O.wireframe===!0,j=n[E.id];j===void 0&&(j={},n[E.id]=j);let ee=j[N.id];ee===void 0&&(ee={},j[N.id]=ee);let Z=ee[G];return Z===void 0&&(Z=d(c()),ee[G]=Z),Z}function d(E){let N=[],O=[],G=[];for(let j=0;j<t;j++)N[j]=0,O[j]=0,G[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:G,object:E,attributes:{},index:null}}function f(E,N,O,G){let j=r.attributes,ee=N.attributes,Z=0,X=O.getAttributes();for(let ue in X)if(X[ue].location>=0){let ge=j[ue],xe=ee[ue];if(xe===void 0&&(ue==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),ue==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor)),ge===void 0||ge.attribute!==xe||xe&&ge.data!==xe.data)return!0;Z++}return r.attributesNum!==Z||r.index!==G}function g(E,N,O,G){let j={},ee=N.attributes,Z=0,X=O.getAttributes();for(let ue in X)if(X[ue].location>=0){let ge=ee[ue];ge===void 0&&(ue==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),ue==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));let xe={};xe.attribute=ge,ge&&ge.data&&(xe.data=ge.data),j[ue]=xe,Z++}r.attributes=j,r.attributesNum=Z,r.index=G}function x(){let E=r.newAttributes;for(let N=0,O=E.length;N<O;N++)E[N]=0}function m(E){p(E,0)}function p(E,N){let O=r.newAttributes,G=r.enabledAttributes,j=r.attributeDivisors;O[E]=1,G[E]===0&&(s.enableVertexAttribArray(E),G[E]=1),j[E]!==N&&(s.vertexAttribDivisor(E,N),j[E]=N)}function y(){let E=r.newAttributes,N=r.enabledAttributes;for(let O=0,G=N.length;O<G;O++)N[O]!==E[O]&&(s.disableVertexAttribArray(O),N[O]=0)}function b(E,N,O,G,j,ee,Z){Z===!0?s.vertexAttribIPointer(E,N,O,j,ee):s.vertexAttribPointer(E,N,O,G,j,ee)}function v(E,N,O,G){x();let j=G.attributes,ee=O.getAttributes(),Z=N.defaultAttributeValues;for(let X in ee){let ue=ee[X];if(ue.location>=0){let $=j[X];if($===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&($=E.instanceColor)),$!==void 0){let ge=$.normalized,xe=$.itemSize,Ne=e.get($);if(Ne===void 0)continue;let Ue=Ne.buffer,qe=Ne.type,rt=Ne.bytesPerElement,te=qe===s.INT||qe===s.UNSIGNED_INT||$.gpuType===xc;if($.isInterleavedBufferAttribute){let de=$.data,Te=de.stride,He=$.offset;if(de.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ue.locationSize;Ce++)p(ue.location+Ce,de.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ce=0;Ce<ue.locationSize;Ce++)m(ue.location+Ce);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Ce=0;Ce<ue.locationSize;Ce++)b(ue.location+Ce,xe/ue.locationSize,qe,ge,Te*rt,(He+xe/ue.locationSize*Ce)*rt,te)}else{if($.isInstancedBufferAttribute){for(let de=0;de<ue.locationSize;de++)p(ue.location+de,$.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let de=0;de<ue.locationSize;de++)m(ue.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let de=0;de<ue.locationSize;de++)b(ue.location+de,xe/ue.locationSize,qe,ge,xe*rt,xe/ue.locationSize*de*rt,te)}}else if(Z!==void 0){let ge=Z[X];if(ge!==void 0)switch(ge.length){case 2:s.vertexAttrib2fv(ue.location,ge);break;case 3:s.vertexAttrib3fv(ue.location,ge);break;case 4:s.vertexAttrib4fv(ue.location,ge);break;default:s.vertexAttrib1fv(ue.location,ge)}}}}y()}function T(){L();for(let E in n){let N=n[E];for(let O in N){let G=N[O];for(let j in G)u(G[j].object),delete G[j];delete N[O]}delete n[E]}}function A(E){if(n[E.id]===void 0)return;let N=n[E.id];for(let O in N){let G=N[O];for(let j in G)u(G[j].object),delete G[j];delete N[O]}delete n[E.id]}function D(E){for(let N in n){let O=n[N];if(O[E.id]===void 0)continue;let G=O[E.id];for(let j in G)u(G[j].object),delete G[j];delete O[E.id]}}function L(){S(),a=!0,r!==i&&(r=i,l(r.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function P_(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let x=0;x<h;x++)g+=u[x]*d[x];t.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function I_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(D){return!(D!==In&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let L=D===tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Tn&&n.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Kn&&!L)}function c(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(Ke("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),A=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:A}}function D_(s){let e=this,t=null,n=0,i=!1,r=!1,a=new Qn,o=new ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let y=r?0:n,b=y*4,v=p.clippingState||null;c.value=v,v=u(g,d,b,f);for(let T=0;T!==b;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let x=h!==null?h.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==x;++b,v+=4)a.copy(h[b]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function L_(s){let e=new WeakMap;function t(a,o){return o===pc?a.mapping=xs:o===mc&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===pc||o===mc)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Wa(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){let o=a.target;o.removeEventListener("dispose",i);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var _s=4,Bp=[.125,.215,.35,.446,.526,.582],or=20,N_=256,Io=new wi,Hp=new Ee,Jh=null,jh=0,Qh=0,ef=!1,U_=new I,ra=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:a=256,position:o=U_}=r;Jh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jh,jh,Qh),this._renderer.xr.enabled=ef,e.scissorTest=!1,ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xs||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jh=this._renderer.getRenderTarget(),jh=this._renderer.getActiveCubeFace(),Qh=this._renderer.getActiveMipmapLevel(),ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:jt,minFilter:jt,generateMipmaps:!1,type:tn,format:In,colorSpace:gn,depthBuffer:!1},i=zp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F_(r)),this._blurMaterial=B_(r,e,t),this._ggxMaterial=O_(r,e,t)}return i}_compileMaterial(e){let t=new We(new Mt,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,i,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Hp),h.toneMapping=hi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new We(new _t,new St({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,p=!0):(m.color.copy(Hp),p=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[b],r.y,r.z)):v===1?(c.up.set(0,0,l[b]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[b],r.z)):(c.up.set(0,l[b],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[b]));let T=this._cubeSize;ia(i,v*T,b>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===xs||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kp());let r=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;ia(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-_s?n-g+_s:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,ia(r,m,p,3*x,2*x),i.setRenderTarget(r),i.render(o,Io),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ia(e,m,p,3*x,2*x),i.setRenderTarget(e),i.render(o,Io)}_blur(e,t,n,i,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[i];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*or-1),x=r/g,m=isFinite(r)?1+Math.floor(u*x):or;m>or&&Ke(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${or}`);let p=[],y=0;for(let D=0;D<or;++D){let L=D/x,S=Math.exp(-L*L/2);p.push(S),D===0?y+=S:D<m&&(y+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-n;let v=this._sizeLods[i],T=3*v*(i>b-_s?i-b+_s:0),A=4*(this._cubeSize-v);ia(t,T,A,3*v,2*v),c.setRenderTarget(t),c.render(h,Io)}};function F_(s){let e=[],t=[],n=[],i=s,r=s-_s+1+Bp.length;for(let a=0;a<r;a++){let o=Math.pow(2,i);e.push(o);let c=1/o;a>s-_s?c=Bp[a-s+_s-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),b=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){let D=A%3*2/3-1,L=A>2?0:-1,S=[D,L,0,D+2/3,L,0,D+2/3,L+1,0,D,L,0,D+2/3,L+1,0,D,L+1,0];y.set(S,x*g*A),b.set(d,m*g*A);let E=[A,A,A,A,A,A];v.set(E,p*g*A)}let T=new Mt;T.setAttribute("position",new vt(y,x)),T.setAttribute("uv",new vt(b,m)),T.setAttribute("faceIndex",new vt(v,p)),n.push(new We(T,null)),i>_s&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function zp(s,e,t){let n=new Xt(s,e,t);return n.texture.mapping=To,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function O_(s,e,t){return new lt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:N_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function B_(s,e,t){let n=new Float32Array(or),i=new I(0,1,0);return new lt({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function kp(){return new lt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function Vp(){return new lt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function fu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H_(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===pc||c===mc,u=c===xs||c===tr;if(l||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ra(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new ra(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function z_(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&zr("WebGLRenderer: "+n+" extension not supported."),i}}}function k_(s,e,t,n){let i={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,g=h.attributes.position,x=0;if(f!==null){let y=f.array;x=f.version;for(let b=0,v=y.length;b<v;b+=3){let T=y[b+0],A=y[b+1],D=y[b+2];d.push(T,A,A,D,D,T)}}else if(g!==void 0){let y=g.array;x=g.version;for(let b=0,v=y.length/3-1;b<v;b+=3){let T=b+0,A=b+1,D=b+2;d.push(T,A,A,D,D,T)}}else return;let m=new(Wh(d)?ka:vi)(d,1);m.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function V_(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function G_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function W_(s,e,t){let n=new WeakMap,i=new Rt;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=o.attributes.position.count*b,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*T*4*h),D=new za(A,v,T,h);D.type=Kn,D.needsUpdate=!0;let L=b*4;for(let E=0;E<h;E++){let N=m[E],O=p[E],G=y[E],j=v*T*4*E;for(let ee=0;ee<N.count;ee++){let Z=ee*L;f===!0&&(i.fromBufferAttribute(N,ee),A[j+Z+0]=i.x,A[j+Z+1]=i.y,A[j+Z+2]=i.z,A[j+Z+3]=0),g===!0&&(i.fromBufferAttribute(O,ee),A[j+Z+4]=i.x,A[j+Z+5]=i.y,A[j+Z+6]=i.z,A[j+Z+7]=0),x===!0&&(i.fromBufferAttribute(G,ee),A[j+Z+8]=i.x,A[j+Z+9]=i.y,A[j+Z+10]=i.z,A[j+Z+11]=G.itemSize===4?i.w:1)}}d={count:h,texture:D,size:new oe(v,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function X_(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function a(){i=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var q_={[_o]:"LINEAR_TONE_MAPPING",[yo]:"REINHARD_TONE_MAPPING",[Mo]:"CINEON_TONE_MAPPING",[er]:"ACES_FILMIC_TONE_MAPPING",[So]:"AGX_TONE_MAPPING",[Eo]:"NEUTRAL_TONE_MAPPING",[bo]:"CUSTOM_TONE_MAPPING"};function Y_(s,e,t,n,i){let r=new Xt(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),a=new Xt(e,t,{type:tn,depthBuffer:!1,stencilBuffer:!1}),o=new Mt;o.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new st([0,2,0,0,2,0],2));let c=new Jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new We(o,c),u=new wi(-1,1,1,-1,0,1),h=null,d=null,f=!1,g,x=null,m=[],p=!1;this.setSize=function(y,b){r.setSize(y,b),a.setSize(y,b);for(let v=0;v<m.length;v++){let T=m[v];T.setSize&&T.setSize(y,b)}},this.setEffects=function(y){m=y,p=m.length>0&&m[0].isRenderPass===!0;let b=r.width,v=r.height;for(let T=0;T<m.length;T++){let A=m[T];A.setSize&&A.setSize(b,v)}},this.begin=function(y,b){if(f||y.toneMapping===hi&&m.length===0)return!1;if(x=b,b!==null){let v=b.width,T=b.height;(r.width!==v||r.height!==T)&&this.setSize(v,T)}return p===!1&&y.setRenderTarget(r),g=y.toneMapping,y.toneMapping=hi,!0},this.hasRenderPass=function(){return p},this.end=function(y,b){y.toneMapping=g,f=!0;let v=r,T=a;for(let A=0;A<m.length;A++){let D=m[A];if(D.enabled!==!1&&(D.render(y,T,v,b),D.needsSwap!==!1)){let L=v;v=T,T=L}}if(h!==y.outputColorSpace||d!==y.toneMapping){h=y.outputColorSpace,d=y.toneMapping,c.defines={},pt.getTransfer(h)===Tt&&(c.defines.SRGB_TRANSFER="");let A=q_[d];A&&(c.defines[A]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(x),y.render(l,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}var om=new on,sf=new yi(1,1),lm=new za,cm=new Hl,um=new Ga,Gp=[],Wp=[],Xp=new Float32Array(16),qp=new Float32Array(9),Yp=new Float32Array(4);function aa(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=Gp[i];if(r===void 0&&(r=new Float32Array(i),Gp[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function un(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function du(s,e){let t=Wp[e];t===void 0&&(t=new Int32Array(e),Wp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Z_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function K_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),un(t,e)}}function $_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),un(t,e)}}function J_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),un(t,e)}}function j_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Yp.set(n),s.uniformMatrix2fv(this.addr,!1,Yp),un(t,n)}}function Q_(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;qp.set(n),s.uniformMatrix3fv(this.addr,!1,qp),un(t,n)}}function ey(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(cn(t,n))return;Xp.set(n),s.uniformMatrix4fv(this.addr,!1,Xp),un(t,n)}}function ty(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function ny(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),un(t,e)}}function iy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),un(t,e)}}function sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),un(t,e)}}function ry(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),un(t,e)}}function oy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),un(t,e)}}function ly(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),un(t,e)}}function cy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(sf.compareFunction=t.isReversedDepthBuffer()?ou:au,r=sf):r=om,t.setTexture2D(e||r,i)}function uy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cm,i)}function hy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||um,i)}function fy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lm,i)}function dy(s){switch(s){case 5126:return Z_;case 35664:return K_;case 35665:return $_;case 35666:return J_;case 35674:return j_;case 35675:return Q_;case 35676:return ey;case 5124:case 35670:return ty;case 35667:case 35671:return ny;case 35668:case 35672:return iy;case 35669:case 35673:return sy;case 5125:return ry;case 36294:return ay;case 36295:return oy;case 36296:return ly;case 35678:case 36198:case 36298:case 36306:case 35682:return cy;case 35679:case 36299:case 36307:return uy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return fy}}function py(s,e){s.uniform1fv(this.addr,e)}function my(s,e){let t=aa(e,this.size,2);s.uniform2fv(this.addr,t)}function gy(s,e){let t=aa(e,this.size,3);s.uniform3fv(this.addr,t)}function xy(s,e){let t=aa(e,this.size,4);s.uniform4fv(this.addr,t)}function vy(s,e){let t=aa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _y(s,e){let t=aa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yy(s,e){let t=aa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function My(s,e){s.uniform1iv(this.addr,e)}function by(s,e){s.uniform2iv(this.addr,e)}function Sy(s,e){s.uniform3iv(this.addr,e)}function Ey(s,e){s.uniform4iv(this.addr,e)}function Ty(s,e){s.uniform1uiv(this.addr,e)}function wy(s,e){s.uniform2uiv(this.addr,e)}function Ay(s,e){s.uniform3uiv(this.addr,e)}function Ry(s,e){s.uniform4uiv(this.addr,e)}function Cy(s,e,t){let n=this.cache,i=e.length,r=du(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=sf:a=om;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,r[o])}function Py(s,e,t){let n=this.cache,i=e.length,r=du(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cm,r[a])}function Iy(s,e,t){let n=this.cache,i=e.length,r=du(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||um,r[a])}function Dy(s,e,t){let n=this.cache,i=e.length,r=du(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lm,r[a])}function Ly(s){switch(s){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return vy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Sy;case 35669:case 35673:return Ey;case 5125:return Ty;case 36294:return wy;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Dy}}var rf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=dy(t.type)}},af=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ly(t.type)}},of=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,a=i.length;r!==a;++r){let o=i[r];o.setValue(e,t[o.id],n)}}},tf=/(\w+)(\])?(\[|\.)?/g;function Zp(s,e){s.seq.push(e),s.map[e.id]=e}function Ny(s,e,t){let n=s.name,i=n.length;for(tf.lastIndex=0;;){let r=tf.exec(n),a=tf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Zp(t,l===void 0?new rf(o,s,e):new af(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new of(o),Zp(t,h)),t=h}}}var sa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Ny(o,c,this)}let i=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):r.push(a);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let a=e[i];a.id in t&&n.push(a)}return n}};function Kp(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var Uy=37297,Fy=0;function Oy(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var $p=new ht;function By(s){pt._getMatrix($p,pt.workingColorSpace,s);let e=`mat3( ${$p.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(s)){case Oa:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return Ke("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Jp(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Oy(s.getShaderSource(e),o)}else return r}function Hy(s,e){let t=By(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var zy={[_o]:"Linear",[yo]:"Reinhard",[Mo]:"Cineon",[er]:"ACESFilmic",[So]:"AgX",[Eo]:"Neutral",[bo]:"Custom"};function ky(s,e){let t=zy[e];return t===void 0?(Ke("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var uu=new I;function Vy(){pt.getLuminanceCoefficients(uu);let s=uu.x.toFixed(4),e=uu.y.toFixed(4),t=uu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Gy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function Wy(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xy(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Lo(s){return s!==""}function jp(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function lf(s){return s.replace(qy,Zy)}var Yy=new Map;function Zy(s,e){let t=dt[e];if(t===void 0){let n=Yy.get(e);if(n!==void 0)t=dt[n],Ke('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lf(t)}var Ky=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function em(s){return s.replace(Ky,$y)}function $y(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Jy={[js]:"SHADOWMAP_TYPE_PCF",[Qr]:"SHADOWMAP_TYPE_VSM"};function jy(s){return Jy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qy={[xs]:"ENVMAP_TYPE_CUBE",[tr]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function eM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Qy[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var tM={[tr]:"ENVMAP_MODE_REFRACTION"};function nM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":tM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var iM={[Nh]:"ENVMAP_BLENDING_MULTIPLY",[mp]:"ENVMAP_BLENDING_MIX",[gp]:"ENVMAP_BLENDING_ADD"};function sM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":iM[s.combine]||"ENVMAP_BLENDING_NONE"}function rM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function aM(s,e,t,n){let i=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=jy(t),l=eM(t),u=nM(t),h=sM(t),d=rM(t),f=Gy(t),g=Wy(r),x=i.createProgram(),m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Lo).join(`
`),p.length>0&&(p+=`
`)):(m=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),p=[tm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?dt.tonemapping_pars_fragment:"",t.toneMapping!==hi?ky("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,Hy("linearToOutputTexel",t.outputColorSpace),Vy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=lf(a),a=jp(a,t),a=Qp(a,t),o=lf(o),o=jp(o,t),o=Qp(o,t),a=em(a),o=em(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=y+m+a,v=y+p+o,T=Kp(i,i.VERTEX_SHADER,b),A=Kp(i,i.FRAGMENT_SHADER,v);i.attachShader(x,T),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function D(N){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(x)||"",G=i.getShaderInfoLog(T)||"",j=i.getShaderInfoLog(A)||"",ee=O.trim(),Z=G.trim(),X=j.trim(),ue=!0,$=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ue=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,T,A);else{let ge=Jp(i,T,"vertex"),xe=Jp(i,A,"fragment");tt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ee+`
`+ge+`
`+xe)}else ee!==""?Ke("WebGLProgram: Program Info Log:",ee):(Z===""||X==="")&&($=!1);$&&(N.diagnostics={runnable:ue,programLog:ee,vertexShader:{log:Z,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(T),i.deleteShader(A),L=new sa(i,x),S=Xy(i,x)}let L;this.getUniforms=function(){return L===void 0&&D(this),L};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(x,Uy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}var oM=0,cf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new uf(e),t.set(e,n)),n}},uf=class{constructor(e){this.id=oM++,this.code=e,this.usedTimes=0}};function lM(s,e,t,n,i,r,a){let o=new Vr,c=new cf,l=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,E,N,O,G){let j=O.fog,ee=G.geometry,Z=S.isMeshStandardMaterial?O.environment:null,X=(S.isMeshStandardMaterial?t:e).get(S.envMap||Z),ue=X&&X.mapping===To?X.image.height:null,$=g[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Ke("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ge=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,xe=ge!==void 0?ge.length:0,Ne=0;ee.morphAttributes.position!==void 0&&(Ne=1),ee.morphAttributes.normal!==void 0&&(Ne=2),ee.morphAttributes.color!==void 0&&(Ne=3);let Ue,qe,rt,te;if($){let mt=Ci[$];Ue=mt.vertexShader,qe=mt.fragmentShader}else Ue=S.vertexShader,qe=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),te=c.getFragmentShaderID(S);let de=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),He=G.isInstancedMesh===!0,Ce=G.isBatchedMesh===!0,it=!!S.map,ot=!!S.matcap,Ye=!!X,pe=!!S.aoMap,Me=!!S.lightMap,ve=!!S.bumpMap,se=!!S.normalMap,P=!!S.displacementMap,z=!!S.emissiveMap,K=!!S.metalnessMap,_e=!!S.roughnessMap,le=S.anisotropy>0,w=S.clearcoat>0,M=S.dispersion>0,F=S.iridescence>0,q=S.sheen>0,re=S.transmission>0,B=le&&!!S.anisotropyMap,me=w&&!!S.clearcoatMap,ae=w&&!!S.clearcoatNormalMap,he=w&&!!S.clearcoatRoughnessMap,Fe=F&&!!S.iridescenceMap,fe=F&&!!S.iridescenceThicknessMap,be=q&&!!S.sheenColorMap,Se=q&&!!S.sheenRoughnessMap,ke=!!S.specularMap,Re=!!S.specularColorMap,Qe=!!S.specularIntensityMap,H=re&&!!S.transmissionMap,Pe=re&&!!S.thicknessMap,we=!!S.gradientMap,ze=!!S.alphaMap,Ae=S.alphaTest>0,ye=!!S.alphaHash,Ie=!!S.extensions,nt=hi;S.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(nt=s.toneMapping);let bt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Ue,fragmentShader:qe,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:te,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&G._colorsTexture!==null,instancing:He,instancingColor:He&&G.instanceColor!==null,instancingMorph:He&&G.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:gn,alphaToCoverage:!!S.alphaToCoverage,map:it,matcap:ot,envMap:Ye,envMapMode:Ye&&X.mapping,envMapCubeUVHeight:ue,aoMap:pe,lightMap:Me,bumpMap:ve,normalMap:se,displacementMap:P,emissiveMap:z,normalMapObjectSpace:se&&S.normalMapType===Mp,normalMapTangentSpace:se&&S.normalMapType===ru,metalnessMap:K,roughnessMap:_e,anisotropy:le,anisotropyMap:B,clearcoat:w,clearcoatMap:me,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,dispersion:M,iridescence:F,iridescenceMap:Fe,iridescenceThicknessMap:fe,sheen:q,sheenColorMap:be,sheenRoughnessMap:Se,specularMap:ke,specularColorMap:Re,specularIntensityMap:Qe,transmission:re,transmissionMap:H,thicknessMap:Pe,gradientMap:we,opaque:S.transparent===!1&&S.blending===Ls&&S.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ae,alphaHash:ye,combine:S.combine,mapUv:it&&x(S.map.channel),aoMapUv:pe&&x(S.aoMap.channel),lightMapUv:Me&&x(S.lightMap.channel),bumpMapUv:ve&&x(S.bumpMap.channel),normalMapUv:se&&x(S.normalMap.channel),displacementMapUv:P&&x(S.displacementMap.channel),emissiveMapUv:z&&x(S.emissiveMap.channel),metalnessMapUv:K&&x(S.metalnessMap.channel),roughnessMapUv:_e&&x(S.roughnessMap.channel),anisotropyMapUv:B&&x(S.anisotropyMap.channel),clearcoatMapUv:me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&x(S.sheenRoughnessMap.channel),specularMapUv:ke&&x(S.specularMap.channel),specularColorMapUv:Re&&x(S.specularColorMap.channel),specularIntensityMapUv:Qe&&x(S.specularIntensityMap.channel),transmissionMapUv:H&&x(S.transmissionMap.channel),thicknessMapUv:Pe&&x(S.thicknessMap.channel),alphaMapUv:ze&&x(S.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(se||le),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!ee.attributes.uv&&(it||ze),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:G.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:it&&S.map.isVideoTexture===!0&&pt.getTransfer(S.map.colorSpace)===Tt,decodeVideoTextureEmissive:z&&S.emissiveMap.isVideoTexture===!0&&pt.getTransfer(S.emissiveMap.colorSpace)===Tt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Qt,flipSided:S.side===dn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ie&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=l.has(1),bt.vertexUv2s=l.has(2),bt.vertexUv3s=l.has(3),l.clear(),bt}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let N in S.defines)E.push(N),E.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(y(E,S),b(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function y(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function b(S,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let E=g[S.type],N;if(E){let O=Ci[E];N=vn.clone(O.uniforms)}else N=S.uniforms;return N}function T(S,E){let N=h.get(E);return N!==void 0?++N.usedTimes:(N=new aM(s,E,S,r),u.push(N),h.set(E,N)),N}function A(S){if(--S.usedTimes===0){let E=u.indexOf(S);u[E]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function D(S){c.remove(S)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:D,programs:u,dispose:L}}function cM(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function uM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function im(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,d,f,g,x,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=x,p.group=m),e++,p}function o(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,g,x,m){let p=a(h,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||uM),n.length>1&&n.sort(d||nm),i.length>1&&i.sort(d||nm)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function hM(){let s=new WeakMap;function e(n,i){let r=s.get(n),a;return r===void 0?(a=new im,s.set(n,[a])):i>=r.length?(a=new im,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function fM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ee};break;case"SpotLight":t={position:new I,direction:new I,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new I,halfWidth:new I,halfHeight:new I};break}return s[e.id]=t,t}}}function dM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var pM=0;function mM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function gM(s){let e=new fM,t=dM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,r=new Ze,a=new Ze;function o(l){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,b=0,v=0,T=0,A=0,D=0;l.sort(mM);for(let S=0,E=l.length;S<E;S++){let N=l[S],O=N.color,G=N.intensity,j=N.distance,ee=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ir?ee=N.shadow.map.texture:ee=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=O.r*G,h+=O.g*G,d+=O.b*G;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],G);D++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let X=N.shadow,ue=t.get(N);ue.shadowIntensity=X.intensity,ue.shadowBias=X.bias,ue.shadowNormalBias=X.normalBias,ue.shadowRadius=X.radius,ue.shadowMapSize=X.mapSize,n.directionalShadow[f]=ue,n.directionalShadowMap[f]=ee,n.directionalShadowMatrix[f]=N.shadow.matrix,y++}n.directional[f]=Z,f++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(O).multiplyScalar(G),Z.distance=j,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[x]=Z;let X=N.shadow;if(N.map&&(n.spotLightMap[T]=N.map,T++,X.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[x]=X.matrix,N.castShadow){let ue=t.get(N);ue.shadowIntensity=X.intensity,ue.shadowBias=X.bias,ue.shadowNormalBias=X.normalBias,ue.shadowRadius=X.radius,ue.shadowMapSize=X.mapSize,n.spotShadow[x]=ue,n.spotShadowMap[x]=ee,v++}x++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(O).multiplyScalar(G),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=Z,m++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let X=N.shadow,ue=t.get(N);ue.shadowIntensity=X.intensity,ue.shadowBias=X.bias,ue.shadowNormalBias=X.normalBias,ue.shadowRadius=X.radius,ue.shadowMapSize=X.mapSize,ue.shadowCameraNear=X.camera.near,ue.shadowCameraFar=X.camera.far,n.pointShadow[g]=ue,n.pointShadowMap[g]=ee,n.pointShadowMatrix[g]=N.shadow.matrix,b++}n.point[g]=Z,g++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(G),Z.groundColor.copy(N.groundColor).multiplyScalar(G),n.hemi[p]=Z,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let L=n.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==x||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==y||L.numPointShadows!==b||L.numSpotShadows!==v||L.numSpotMaps!==T||L.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=D,L.directionalLength=f,L.pointLength=g,L.spotLength=x,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=y,L.numPointShadows=b,L.numSpotShadows=v,L.numSpotMaps=T,L.numLightProbes=D,n.version=pM++)}function c(l,u){let h=0,d=0,f=0,g=0,x=0,m=u.matrixWorldInverse;for(let p=0,y=l.length;p<y;p++){let b=l[p];if(b.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),h++}else if(b.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),i.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function sm(s){let e=new gM(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function xM(s){let e=new WeakMap;function t(i,r=0){let a=e.get(i),o;return a===void 0?(o=new sm(s),e.set(i,[o])):r>=a.length?(o=new sm(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var vM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_M=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yM=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],MM=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],rm=new Ze,Do=new I,nf=new I;function bM(s,e,t){let n=new Xr,i=new oe,r=new oe,a=new Rt,o=new $l,c=new Jl,l={},u=t.maxTextureSize,h={[ui]:dn,[dn]:ui,[Qt]:Qt},d=new lt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:vM,fragmentShader:_M}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=js;let p=this.type;this.render=function(A,D,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===ep&&(Ke("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=js);let S=s.getRenderTarget(),E=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),O=s.state;O.setBlending(en),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=p!==this.type;G&&D.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(ee=>ee.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,ee=A.length;j<ee;j++){let Z=A[j],X=Z.shadow;if(X===void 0){Ke("WebGLShadowMap:",Z,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let ue=X.getFrameExtents();if(i.multiply(ue),r.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ue.x),i.x=r.x*ue.x,X.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ue.y),i.y=r.y*ue.y,X.mapSize.y=r.y)),X.map===null||G===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Qr){if(Z.isPointLight){Ke("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Xt(i.x,i.y,{format:ir,type:tn,minFilter:jt,magFilter:jt,generateMipmaps:!1}),X.map.texture.name=Z.name+".shadowMap",X.map.depthTexture=new yi(i.x,i.y,Kn),X.map.depthTexture.name=Z.name+".shadowMapDepth",X.map.depthTexture.format=gi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Wt,X.map.depthTexture.magFilter=Wt}else{Z.isPointLight?(X.map=new Wa(i.x),X.map.depthTexture=new Gl(i.x,fi)):(X.map=new Xt(i.x,i.y),X.map.depthTexture=new yi(i.x,i.y,fi)),X.map.depthTexture.name=Z.name+".shadowMap",X.map.depthTexture.format=gi;let ge=s.state.buffers.depth.getReversed();this.type===js?(X.map.depthTexture.compareFunction=ge?ou:au,X.map.depthTexture.minFilter=jt,X.map.depthTexture.magFilter=jt):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Wt,X.map.depthTexture.magFilter=Wt)}X.camera.updateProjectionMatrix()}let $=X.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<$;ge++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,ge),s.clear();else{ge===0&&(s.setRenderTarget(X.map),s.clear());let xe=X.getViewport(ge);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),O.viewport(a)}if(Z.isPointLight){let xe=X.camera,Ne=X.matrix,Ue=Z.distance||xe.far;Ue!==xe.far&&(xe.far=Ue,xe.updateProjectionMatrix()),Do.setFromMatrixPosition(Z.matrixWorld),xe.position.copy(Do),nf.copy(xe.position),nf.add(yM[ge]),xe.up.copy(MM[ge]),xe.lookAt(nf),xe.updateMatrixWorld(),Ne.makeTranslation(-Do.x,-Do.y,-Do.z),rm.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),X._frustum.setFromProjectionMatrix(rm,xe.coordinateSystem,xe.reversedDepth)}else X.updateMatrices(Z);n=X.getFrustum(),v(D,L,X.camera,Z,this.type)}X.isPointLightShadow!==!0&&this.type===Qr&&y(X,L),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,N)};function y(A,D){let L=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Xt(i.x,i.y,{format:ir,type:tn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(D,null,L,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(D,null,L,f,x,null)}function b(A,D,L,S){let E=null,N=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)E=N;else if(E=L.isPointLight===!0?c:o,s.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let O=E.uuid,G=D.uuid,j=l[O];j===void 0&&(j={},l[O]=j);let ee=j[G];ee===void 0&&(ee=E.clone(),j[G]=ee,D.addEventListener("dispose",T)),E=ee}if(E.visible=D.visible,E.wireframe=D.wireframe,S===Qr?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:h[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,L.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=s.properties.get(E);O.light=L}return E}function v(A,D,L,S,E){if(A.visible===!1)return;if(A.layers.test(D.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Qr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);let G=e.update(A),j=A.material;if(Array.isArray(j)){let ee=G.groups;for(let Z=0,X=ee.length;Z<X;Z++){let ue=ee[Z],$=j[ue.materialIndex];if($&&$.visible){let ge=b(A,$,S,E);A.onBeforeShadow(s,A,D,L,G,ge,ue),s.renderBufferDirect(L,null,G,ge,A,ue),A.onAfterShadow(s,A,D,L,G,ge,ue)}}}else if(j.visible){let ee=b(A,j,S,E);A.onBeforeShadow(s,A,D,L,G,ee,null),s.renderBufferDirect(L,null,G,ee,A,null),A.onAfterShadow(s,A,D,L,G,ee,null)}}let O=A.children;for(let G=0,j=O.length;G<j;G++)v(O[G],D,L,S,E)}function T(A){A.target.removeEventListener("dispose",T);for(let L in l){let S=l[L],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}var SM={[oc]:lc,[cc]:fc,[uc]:dc,[Ns]:hc,[lc]:oc,[fc]:cc,[dc]:uc,[hc]:Ns};function EM(s,e){function t(){let H=!1,Pe=new Rt,we=null,ze=new Rt(0,0,0,0);return{setMask:function(Ae){we!==Ae&&!H&&(s.colorMask(Ae,Ae,Ae,Ae),we=Ae)},setLocked:function(Ae){H=Ae},setClear:function(Ae,ye,Ie,nt,bt){bt===!0&&(Ae*=nt,ye*=nt,Ie*=nt),Pe.set(Ae,ye,Ie,nt),ze.equals(Pe)===!1&&(s.clearColor(Ae,ye,Ie,nt),ze.copy(Pe))},reset:function(){H=!1,we=null,ze.set(-1,0,0,0)}}}function n(){let H=!1,Pe=!1,we=null,ze=null,Ae=null;return{setReversed:function(ye){if(Pe!==ye){let Ie=e.get("EXT_clip_control");ye?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Pe=ye;let nt=Ae;Ae=null,this.setClear(nt)}},getReversed:function(){return Pe},setTest:function(ye){ye?de(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(ye){we!==ye&&!H&&(s.depthMask(ye),we=ye)},setFunc:function(ye){if(Pe&&(ye=SM[ye]),ze!==ye){switch(ye){case oc:s.depthFunc(s.NEVER);break;case lc:s.depthFunc(s.ALWAYS);break;case cc:s.depthFunc(s.LESS);break;case Ns:s.depthFunc(s.LEQUAL);break;case uc:s.depthFunc(s.EQUAL);break;case hc:s.depthFunc(s.GEQUAL);break;case fc:s.depthFunc(s.GREATER);break;case dc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=ye}},setLocked:function(ye){H=ye},setClear:function(ye){Ae!==ye&&(Pe&&(ye=1-ye),s.clearDepth(ye),Ae=ye)},reset:function(){H=!1,we=null,ze=null,Ae=null,Pe=!1}}}function i(){let H=!1,Pe=null,we=null,ze=null,Ae=null,ye=null,Ie=null,nt=null,bt=null;return{setTest:function(mt){H||(mt?de(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(mt){Pe!==mt&&!H&&(s.stencilMask(mt),Pe=mt)},setFunc:function(mt,Nn,Hn){(we!==mt||ze!==Nn||Ae!==Hn)&&(s.stencilFunc(mt,Nn,Hn),we=mt,ze=Nn,Ae=Hn)},setOp:function(mt,Nn,Hn){(ye!==mt||Ie!==Nn||nt!==Hn)&&(s.stencilOp(mt,Nn,Hn),ye=mt,Ie=Nn,nt=Hn)},setLocked:function(mt){H=mt},setClear:function(mt){bt!==mt&&(s.clearStencil(mt),bt=mt)},reset:function(){H=!1,Pe=null,we=null,ze=null,Ae=null,ye=null,Ie=null,nt=null,bt=null}}}let r=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,v=null,T=null,A=null,D=new Ee(0,0,0),L=0,S=!1,E=null,N=null,O=null,G=null,j=null,ee=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,X=0,ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Z=X>=1):ue.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Z=X>=2);let $=null,ge={},xe=s.getParameter(s.SCISSOR_BOX),Ne=s.getParameter(s.VIEWPORT),Ue=new Rt().fromArray(xe),qe=new Rt().fromArray(Ne);function rt(H,Pe,we,ze){let Ae=new Uint8Array(4),ye=s.createTexture();s.bindTexture(H,ye),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ie=0;Ie<we;Ie++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ae):s.texImage2D(Pe+Ie,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ae);return ye}let te={};te[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),de(s.DEPTH_TEST),a.setFunc(Ns),ve(!1),se(Ih),de(s.CULL_FACE),pe(en);function de(H){u[H]!==!0&&(s.enable(H),u[H]=!0)}function Te(H){u[H]!==!1&&(s.disable(H),u[H]=!1)}function He(H,Pe){return h[H]!==Pe?(s.bindFramebuffer(H,Pe),h[H]=Pe,H===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Pe),H===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Ce(H,Pe){let we=f,ze=!1;if(H){we=d.get(Pe),we===void 0&&(we=[],d.set(Pe,we));let Ae=H.textures;if(we.length!==Ae.length||we[0]!==s.COLOR_ATTACHMENT0){for(let ye=0,Ie=Ae.length;ye<Ie;ye++)we[ye]=s.COLOR_ATTACHMENT0+ye;we.length=Ae.length,ze=!0}}else we[0]!==s.BACK&&(we[0]=s.BACK,ze=!0);ze&&s.drawBuffers(we)}function it(H){return g!==H?(s.useProgram(H),g=H,!0):!1}let ot={[Gn]:s.FUNC_ADD,[tp]:s.FUNC_SUBTRACT,[np]:s.FUNC_REVERSE_SUBTRACT};ot[ip]=s.MIN,ot[sp]=s.MAX;let Ye={[Qs]:s.ZERO,[rp]:s.ONE,[ap]:s.SRC_COLOR,[Nl]:s.SRC_ALPHA,[up]:s.SRC_ALPHA_SATURATE,[vo]:s.DST_COLOR,[xo]:s.DST_ALPHA,[op]:s.ONE_MINUS_SRC_COLOR,[Ul]:s.ONE_MINUS_SRC_ALPHA,[cp]:s.ONE_MINUS_DST_COLOR,[lp]:s.ONE_MINUS_DST_ALPHA,[hp]:s.CONSTANT_COLOR,[fp]:s.ONE_MINUS_CONSTANT_COLOR,[dp]:s.CONSTANT_ALPHA,[pp]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(H,Pe,we,ze,Ae,ye,Ie,nt,bt,mt){if(H===en){x===!0&&(Te(s.BLEND),x=!1);return}if(x===!1&&(de(s.BLEND),x=!0),H!==ac){if(H!==m||mt!==S){if((p!==Gn||v!==Gn)&&(s.blendEquation(s.FUNC_ADD),p=Gn,v=Gn),mt)switch(H){case Ls:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFunc(s.ONE,s.ONE);break;case Dh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:tt("WebGLState: Invalid blending: ",H);break}else switch(H){case Ls:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Dh:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lh:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",H);break}y=null,b=null,T=null,A=null,D.set(0,0,0),L=0,m=H,S=mt}return}Ae=Ae||Pe,ye=ye||we,Ie=Ie||ze,(Pe!==p||Ae!==v)&&(s.blendEquationSeparate(ot[Pe],ot[Ae]),p=Pe,v=Ae),(we!==y||ze!==b||ye!==T||Ie!==A)&&(s.blendFuncSeparate(Ye[we],Ye[ze],Ye[ye],Ye[Ie]),y=we,b=ze,T=ye,A=Ie),(nt.equals(D)===!1||bt!==L)&&(s.blendColor(nt.r,nt.g,nt.b,bt),D.copy(nt),L=bt),m=H,S=!1}function Me(H,Pe){H.side===Qt?Te(s.CULL_FACE):de(s.CULL_FACE);let we=H.side===dn;Pe&&(we=!we),ve(we),H.blending===Ls&&H.transparent===!1?pe(en):pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let ze=H.stencilWrite;o.setTest(ze),ze&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),z(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(H){E!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),E=H)}function se(H){H!==jd?(de(s.CULL_FACE),H!==N&&(H===Ih?s.cullFace(s.BACK):H===Qd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),N=H}function P(H){H!==O&&(Z&&s.lineWidth(H),O=H)}function z(H,Pe,we){H?(de(s.POLYGON_OFFSET_FILL),(G!==Pe||j!==we)&&(s.polygonOffset(Pe,we),G=Pe,j=we)):Te(s.POLYGON_OFFSET_FILL)}function K(H){H?de(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function _e(H){H===void 0&&(H=s.TEXTURE0+ee-1),$!==H&&(s.activeTexture(H),$=H)}function le(H,Pe,we){we===void 0&&($===null?we=s.TEXTURE0+ee-1:we=$);let ze=ge[we];ze===void 0&&(ze={type:void 0,texture:void 0},ge[we]=ze),(ze.type!==H||ze.texture!==Pe)&&($!==we&&(s.activeTexture(we),$=we),s.bindTexture(H,Pe||te[H]),ze.type=H,ze.texture=Pe)}function w(){let H=ge[$];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{s.compressedTexImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function F(){try{s.compressedTexImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function q(){try{s.texSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function re(){try{s.texSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function B(){try{s.compressedTexSubImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function me(){try{s.compressedTexSubImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function ae(){try{s.texStorage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function he(){try{s.texStorage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function Fe(){try{s.texImage2D(...arguments)}catch(H){tt("WebGLState:",H)}}function fe(){try{s.texImage3D(...arguments)}catch(H){tt("WebGLState:",H)}}function be(H){Ue.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ue.copy(H))}function Se(H){qe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),qe.copy(H))}function ke(H,Pe){let we=l.get(Pe);we===void 0&&(we=new WeakMap,l.set(Pe,we));let ze=we.get(H);ze===void 0&&(ze=s.getUniformBlockIndex(Pe,H.name),we.set(H,ze))}function Re(H,Pe){let ze=l.get(Pe).get(H);c.get(Pe)!==ze&&(s.uniformBlockBinding(Pe,ze,H.__bindingPointIndex),c.set(Pe,ze))}function Qe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},$=null,ge={},h={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,b=null,v=null,T=null,A=null,D=new Ee(0,0,0),L=0,S=!1,E=null,N=null,O=null,G=null,j=null,Ue.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:de,disable:Te,bindFramebuffer:He,drawBuffers:Ce,useProgram:it,setBlending:pe,setMaterial:Me,setFlipSided:ve,setCullFace:se,setLineWidth:P,setPolygonOffset:z,setScissorTest:K,activeTexture:_e,bindTexture:le,unbindTexture:w,compressedTexImage2D:M,compressedTexImage3D:F,texImage2D:Fe,texImage3D:fe,updateUBOMapping:ke,uniformBlockBinding:Re,texStorage2D:ae,texStorage3D:he,texSubImage2D:q,texSubImage3D:re,compressedTexSubImage2D:B,compressedTexSubImage3D:me,scissor:be,viewport:Se,reset:Qe}}function TM(s,e,t,n,i,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new oe,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,M){return f?new OffscreenCanvas(w,M):Br("canvas")}function x(w,M,F){let q=1,re=le(w);if((re.width>F||re.height>F)&&(q=F/Math.max(re.width,re.height)),q<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let B=Math.floor(q*re.width),me=Math.floor(q*re.height);h===void 0&&(h=g(B,me));let ae=M?g(B,me):h;return ae.width=B,ae.height=me,ae.getContext("2d").drawImage(w,0,0,B,me),Ke("WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+B+"x"+me+")."),ae}else return"data"in w&&Ke("WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){s.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(w,M,F,q,re=!1){if(w!==null){if(s[w]!==void 0)return s[w];Ke("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let B=M;if(M===s.RED&&(F===s.FLOAT&&(B=s.R32F),F===s.HALF_FLOAT&&(B=s.R16F),F===s.UNSIGNED_BYTE&&(B=s.R8)),M===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(B=s.R8UI),F===s.UNSIGNED_SHORT&&(B=s.R16UI),F===s.UNSIGNED_INT&&(B=s.R32UI),F===s.BYTE&&(B=s.R8I),F===s.SHORT&&(B=s.R16I),F===s.INT&&(B=s.R32I)),M===s.RG&&(F===s.FLOAT&&(B=s.RG32F),F===s.HALF_FLOAT&&(B=s.RG16F),F===s.UNSIGNED_BYTE&&(B=s.RG8)),M===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(B=s.RG8UI),F===s.UNSIGNED_SHORT&&(B=s.RG16UI),F===s.UNSIGNED_INT&&(B=s.RG32UI),F===s.BYTE&&(B=s.RG8I),F===s.SHORT&&(B=s.RG16I),F===s.INT&&(B=s.RG32I)),M===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(B=s.RGB8UI),F===s.UNSIGNED_SHORT&&(B=s.RGB16UI),F===s.UNSIGNED_INT&&(B=s.RGB32UI),F===s.BYTE&&(B=s.RGB8I),F===s.SHORT&&(B=s.RGB16I),F===s.INT&&(B=s.RGB32I)),M===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(B=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(B=s.RGBA16UI),F===s.UNSIGNED_INT&&(B=s.RGBA32UI),F===s.BYTE&&(B=s.RGBA8I),F===s.SHORT&&(B=s.RGBA16I),F===s.INT&&(B=s.RGBA32I)),M===s.RGB&&(F===s.UNSIGNED_INT_5_9_9_9_REV&&(B=s.RGB9_E5),F===s.UNSIGNED_INT_10F_11F_11F_REV&&(B=s.R11F_G11F_B10F)),M===s.RGBA){let me=re?Oa:pt.getTransfer(q);F===s.FLOAT&&(B=s.RGBA32F),F===s.HALF_FLOAT&&(B=s.RGBA16F),F===s.UNSIGNED_BYTE&&(B=me===Tt?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(B=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(B=s.RGB5_A1)}return(B===s.R16F||B===s.R32F||B===s.RG16F||B===s.RG32F||B===s.RGBA16F||B===s.RGBA32F)&&e.get("EXT_color_buffer_float"),B}function v(w,M){let F;return w?M===null||M===fi||M===vs?F=s.DEPTH24_STENCIL8:M===Kn?F=s.DEPTH32F_STENCIL8:M===ta&&(F=s.DEPTH24_STENCIL8,Ke("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===fi||M===vs?F=s.DEPTH_COMPONENT24:M===Kn?F=s.DEPTH_COMPONENT32F:M===ta&&(F=s.DEPTH_COMPONENT16),F}function T(w,M){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Wt&&w.minFilter!==jt?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function A(w){let M=w.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&u.delete(M)}function D(w){let M=w.target;M.removeEventListener("dispose",D),E(M)}function L(w){let M=n.get(w);if(M.__webglInit===void 0)return;let F=w.source,q=d.get(F);if(q){let re=q[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(w),Object.keys(q).length===0&&d.delete(F)}n.remove(w)}function S(w){let M=n.get(w);s.deleteTexture(M.__webglTexture);let F=w.source,q=d.get(F);delete q[M.__cacheKey],a.memory.textures--}function E(w){let M=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let re=0;re<M.__webglFramebuffer[q].length;re++)s.deleteFramebuffer(M.__webglFramebuffer[q][re]);else s.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)s.deleteFramebuffer(M.__webglFramebuffer[q]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let F=w.textures;for(let q=0,re=F.length;q<re;q++){let B=n.get(F[q]);B.__webglTexture&&(s.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(w)}let N=0;function O(){N=0}function G(){let w=N;return w>=i.maxTextures&&Ke("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),N+=1,w}function j(w){let M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function ee(w,M){let F=n.get(w);if(w.isVideoTexture&&K(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let q=w.image;if(q===null)Ke("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ke("WebGLRenderer: Texture marked for update but image is incomplete");else{te(F,w,M);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+M)}function Z(w,M){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){te(F,w,M);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+M)}function X(w,M){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){te(F,w,M);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+M)}function ue(w,M){let F=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){de(F,w,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+M)}let $={[Yt]:s.REPEAT,[ei]:s.CLAMP_TO_EDGE,[Or]:s.MIRRORED_REPEAT},ge={[Wt]:s.NEAREST,[gc]:s.NEAREST_MIPMAP_NEAREST,[nr]:s.NEAREST_MIPMAP_LINEAR,[jt]:s.LINEAR,[ea]:s.LINEAR_MIPMAP_NEAREST,[Zn]:s.LINEAR_MIPMAP_LINEAR},xe={[bp]:s.NEVER,[Ap]:s.ALWAYS,[Sp]:s.LESS,[au]:s.LEQUAL,[Ep]:s.EQUAL,[ou]:s.GEQUAL,[Tp]:s.GREATER,[wp]:s.NOTEQUAL};function Ne(w,M){if(M.type===Kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===jt||M.magFilter===ea||M.magFilter===nr||M.magFilter===Zn||M.minFilter===jt||M.minFilter===ea||M.minFilter===nr||M.minFilter===Zn)&&Ke("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,$[M.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,$[M.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,$[M.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ge[M.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ge[M.minFilter]),M.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,xe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==nr&&M.minFilter!==Zn||M.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ue(w,M){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",A));let q=M.source,re=d.get(q);re===void 0&&(re={},d.set(q,re));let B=j(M);if(B!==w.__cacheKey){re[B]===void 0&&(re[B]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),re[B].usedTimes++;let me=re[w.__cacheKey];me!==void 0&&(re[w.__cacheKey].usedTimes--,me.usedTimes===0&&S(M)),w.__cacheKey=B,w.__webglTexture=re[B].texture}return F}function qe(w,M,F){return Math.floor(Math.floor(w/F)/M)}function rt(w,M,F,q){let B=w.updateRanges;if(B.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,F,q,M.data);else{B.sort((fe,be)=>fe.start-be.start);let me=0;for(let fe=1;fe<B.length;fe++){let be=B[me],Se=B[fe],ke=be.start+be.count,Re=qe(Se.start,M.width,4),Qe=qe(be.start,M.width,4);Se.start<=ke+1&&Re===Qe&&qe(Se.start+Se.count-1,M.width,4)===Re?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++me,B[me]=Se)}B.length=me+1;let ae=s.getParameter(s.UNPACK_ROW_LENGTH),he=s.getParameter(s.UNPACK_SKIP_PIXELS),Fe=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let fe=0,be=B.length;fe<be;fe++){let Se=B[fe],ke=Math.floor(Se.start/4),Re=Math.ceil(Se.count/4),Qe=ke%M.width,H=Math.floor(ke/M.width),Pe=Re,we=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,Qe,H,Pe,we,F,q,M.data)}w.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,he),s.pixelStorei(s.UNPACK_SKIP_ROWS,Fe)}}function te(w,M,F){let q=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=s.TEXTURE_3D);let re=Ue(w,M),B=M.source;t.bindTexture(q,w.__webglTexture,s.TEXTURE0+F);let me=n.get(B);if(B.version!==me.__version||re===!0){t.activeTexture(s.TEXTURE0+F);let ae=pt.getPrimaries(pt.workingColorSpace),he=M.colorSpace===Ji?null:pt.getPrimaries(M.colorSpace),Fe=M.colorSpace===Ji||ae===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let fe=x(M.image,!1,i.maxTextureSize);fe=_e(M,fe);let be=r.convert(M.format,M.colorSpace),Se=r.convert(M.type),ke=b(M.internalFormat,be,Se,M.colorSpace,M.isVideoTexture);Ne(q,M);let Re,Qe=M.mipmaps,H=M.isVideoTexture!==!0,Pe=me.__version===void 0||re===!0,we=B.dataReady,ze=T(M,fe);if(M.isDepthTexture)ke=v(M.format===Ai,M.type),Pe&&(H?t.texStorage2D(s.TEXTURE_2D,1,ke,fe.width,fe.height):t.texImage2D(s.TEXTURE_2D,0,ke,fe.width,fe.height,0,be,Se,null));else if(M.isDataTexture)if(Qe.length>0){H&&Pe&&t.texStorage2D(s.TEXTURE_2D,ze,ke,Qe[0].width,Qe[0].height);for(let Ae=0,ye=Qe.length;Ae<ye;Ae++)Re=Qe[Ae],H?we&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Re.width,Re.height,be,Se,Re.data):t.texImage2D(s.TEXTURE_2D,Ae,ke,Re.width,Re.height,0,be,Se,Re.data);M.generateMipmaps=!1}else H?(Pe&&t.texStorage2D(s.TEXTURE_2D,ze,ke,fe.width,fe.height),we&&rt(M,fe,be,Se)):t.texImage2D(s.TEXTURE_2D,0,ke,fe.width,fe.height,0,be,Se,fe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ke,Qe[0].width,Qe[0].height,fe.depth);for(let Ae=0,ye=Qe.length;Ae<ye;Ae++)if(Re=Qe[Ae],M.format!==In)if(be!==null)if(H){if(we)if(M.layerUpdates.size>0){let Ie=$h(Re.width,Re.height,M.format,M.type);for(let nt of M.layerUpdates){let bt=Re.data.subarray(nt*Ie/Re.data.BYTES_PER_ELEMENT,(nt+1)*Ie/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,nt,Re.width,Re.height,1,be,bt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Re.width,Re.height,fe.depth,be,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,ke,Re.width,Re.height,fe.depth,0,Re.data,0,0);else Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,Re.width,Re.height,fe.depth,be,Se,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,ke,Re.width,Re.height,fe.depth,0,be,Se,Re.data)}else{H&&Pe&&t.texStorage2D(s.TEXTURE_2D,ze,ke,Qe[0].width,Qe[0].height);for(let Ae=0,ye=Qe.length;Ae<ye;Ae++)Re=Qe[Ae],M.format!==In?be!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,Re.width,Re.height,be,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,ke,Re.width,Re.height,0,Re.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,Re.width,Re.height,be,Se,Re.data):t.texImage2D(s.TEXTURE_2D,Ae,ke,Re.width,Re.height,0,be,Se,Re.data)}else if(M.isDataArrayTexture)if(H){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ze,ke,fe.width,fe.height,fe.depth),we)if(M.layerUpdates.size>0){let Ae=$h(fe.width,fe.height,M.format,M.type);for(let ye of M.layerUpdates){let Ie=fe.data.subarray(ye*Ae/fe.data.BYTES_PER_ELEMENT,(ye+1)*Ae/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,fe.width,fe.height,1,be,Se,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,be,Se,fe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,fe.width,fe.height,fe.depth,0,be,Se,fe.data);else if(M.isData3DTexture)H?(Pe&&t.texStorage3D(s.TEXTURE_3D,ze,ke,fe.width,fe.height,fe.depth),we&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,be,Se,fe.data)):t.texImage3D(s.TEXTURE_3D,0,ke,fe.width,fe.height,fe.depth,0,be,Se,fe.data);else if(M.isFramebufferTexture){if(Pe)if(H)t.texStorage2D(s.TEXTURE_2D,ze,ke,fe.width,fe.height);else{let Ae=fe.width,ye=fe.height;for(let Ie=0;Ie<ze;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,ke,Ae,ye,0,be,Se,null),Ae>>=1,ye>>=1}}else if(Qe.length>0){if(H&&Pe){let Ae=le(Qe[0]);t.texStorage2D(s.TEXTURE_2D,ze,ke,Ae.width,Ae.height)}for(let Ae=0,ye=Qe.length;Ae<ye;Ae++)Re=Qe[Ae],H?we&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,be,Se,Re):t.texImage2D(s.TEXTURE_2D,Ae,ke,be,Se,Re);M.generateMipmaps=!1}else if(H){if(Pe){let Ae=le(fe);t.texStorage2D(s.TEXTURE_2D,ze,ke,Ae.width,Ae.height)}we&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Se,fe)}else t.texImage2D(s.TEXTURE_2D,0,ke,be,Se,fe);m(M)&&p(q),me.__version=B.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function de(w,M,F){if(M.image.length!==6)return;let q=Ue(w,M),re=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+F);let B=n.get(re);if(re.version!==B.__version||q===!0){t.activeTexture(s.TEXTURE0+F);let me=pt.getPrimaries(pt.workingColorSpace),ae=M.colorSpace===Ji?null:pt.getPrimaries(M.colorSpace),he=M.colorSpace===Ji||me===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,fe=M.image[0]&&M.image[0].isDataTexture,be=[];for(let ye=0;ye<6;ye++)!Fe&&!fe?be[ye]=x(M.image[ye],!0,i.maxCubemapSize):be[ye]=fe?M.image[ye].image:M.image[ye],be[ye]=_e(M,be[ye]);let Se=be[0],ke=r.convert(M.format,M.colorSpace),Re=r.convert(M.type),Qe=b(M.internalFormat,ke,Re,M.colorSpace),H=M.isVideoTexture!==!0,Pe=B.__version===void 0||q===!0,we=re.dataReady,ze=T(M,Se);Ne(s.TEXTURE_CUBE_MAP,M);let Ae;if(Fe){H&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,Qe,Se.width,Se.height);for(let ye=0;ye<6;ye++){Ae=be[ye].mipmaps;for(let Ie=0;Ie<Ae.length;Ie++){let nt=Ae[Ie];M.format!==In?ke!==null?H?we&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,0,0,nt.width,nt.height,ke,nt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,Qe,nt.width,nt.height,0,nt.data):Ke("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,0,0,nt.width,nt.height,ke,Re,nt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie,Qe,nt.width,nt.height,0,ke,Re,nt.data)}}}else{if(Ae=M.mipmaps,H&&Pe){Ae.length>0&&ze++;let ye=le(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ze,Qe,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(fe){H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,be[ye].width,be[ye].height,ke,Re,be[ye].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Qe,be[ye].width,be[ye].height,0,ke,Re,be[ye].data);for(let Ie=0;Ie<Ae.length;Ie++){let bt=Ae[Ie].image[ye].image;H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,0,0,bt.width,bt.height,ke,Re,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,Qe,bt.width,bt.height,0,ke,Re,bt.data)}}else{H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ke,Re,be[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Qe,ke,Re,be[ye]);for(let Ie=0;Ie<Ae.length;Ie++){let nt=Ae[Ie];H?we&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,0,0,ke,Re,nt.image[ye]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Ie+1,Qe,ke,Re,nt.image[ye])}}}m(M)&&p(s.TEXTURE_CUBE_MAP),B.__version=re.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function Te(w,M,F,q,re,B){let me=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),he=b(F.internalFormat,me,ae,F.colorSpace),Fe=n.get(M),fe=n.get(F);if(fe.__renderTarget=M,!Fe.__hasExternalTextures){let be=Math.max(1,M.width>>B),Se=Math.max(1,M.height>>B);re===s.TEXTURE_3D||re===s.TEXTURE_2D_ARRAY?t.texImage3D(re,B,he,be,Se,M.depth,0,me,ae,null):t.texImage2D(re,B,he,be,Se,0,me,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),z(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,q,re,fe.__webglTexture,0,P(M)):(re===s.TEXTURE_2D||re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,q,re,fe.__webglTexture,B),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(w,M,F){if(s.bindRenderbuffer(s.RENDERBUFFER,w),M.depthBuffer){let q=M.depthTexture,re=q&&q.isDepthTexture?q.type:null,B=v(M.stencilBuffer,re),me=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;z(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(M),B,M.width,M.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(M),B,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,B,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,w)}else{let q=M.textures;for(let re=0;re<q.length;re++){let B=q[re],me=r.convert(B.format,B.colorSpace),ae=r.convert(B.type),he=b(B.internalFormat,me,ae,B.colorSpace);z(M)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(M),he,M.width,M.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(M),he,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,he,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ce(w,M,F){let q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let re=n.get(M.depthTexture);if(re.__renderTarget=M,(!re.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(re.__webglInit===void 0&&(re.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),re.__webglTexture===void 0){re.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M.depthTexture);let Fe=r.convert(M.depthTexture.format),fe=r.convert(M.depthTexture.type),be;M.depthTexture.format===gi?be=s.DEPTH_COMPONENT24:M.depthTexture.format===Ai&&(be=s.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,M.width,M.height,0,Fe,fe,null)}}else ee(M.depthTexture,0);let B=re.__webglTexture,me=P(M),ae=q?s.TEXTURE_CUBE_MAP_POSITIVE_X+F:s.TEXTURE_2D,he=M.depthTexture.format===Ai?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===gi)z(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ae,B,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,he,ae,B,0);else if(M.depthTexture.format===Ai)z(M)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ae,B,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,he,ae,B,0);else throw new Error("Unknown depthTexture format")}function it(w){let M=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){let q=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){let re=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",re)};q.addEventListener("dispose",re),M.__depthDisposeCallback=re}M.__boundDepthTexture=q}if(w.depthTexture&&!M.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)Ce(M.__webglFramebuffer[q],w,q);else{let q=w.texture.mipmaps;q&&q.length>0?Ce(M.__webglFramebuffer[0],w,0):Ce(M.__webglFramebuffer,w,0)}else if(F){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=s.createRenderbuffer(),He(M.__webglDepthbuffer[q],w,!1);else{let re=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=M.__webglDepthbuffer[q];s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,B)}}else{let q=w.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),He(M.__webglDepthbuffer,w,!1);else{let re=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,B=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,B),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,B)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ot(w,M,F){let q=n.get(w);M!==void 0&&Te(q.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&it(w)}function Ye(w){let M=w.texture,F=n.get(w),q=n.get(M);w.addEventListener("dispose",D);let re=w.textures,B=w.isWebGLCubeRenderTarget===!0,me=re.length>1;if(me||(q.__webglTexture===void 0&&(q.__webglTexture=s.createTexture()),q.__version=M.version,a.memory.textures++),B){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let he=0;he<M.mipmaps.length;he++)F.__webglFramebuffer[ae][he]=s.createFramebuffer()}else F.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)F.__webglFramebuffer[ae]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(me)for(let ae=0,he=re.length;ae<he;ae++){let Fe=n.get(re[ae]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=s.createTexture(),a.memory.textures++)}if(w.samples>0&&z(w)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<re.length;ae++){let he=re[ae];F.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);let Fe=r.convert(he.format,he.colorSpace),fe=r.convert(he.type),be=b(he.internalFormat,Fe,fe,he.colorSpace,w.isXRRenderTarget===!0),Se=P(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,be,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),He(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(B){t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture),Ne(s.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Te(F.__webglFramebuffer[ae][he],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else Te(F.__webglFramebuffer[ae],w,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){for(let ae=0,he=re.length;ae<he;ae++){let Fe=re[ae],fe=n.get(Fe),be=s.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(be=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),Ne(be,Fe),Te(F.__webglFramebuffer,w,Fe,s.COLOR_ATTACHMENT0+ae,be,0),m(Fe)&&p(be)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,q.__webglTexture),Ne(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)Te(F.__webglFramebuffer[he],w,M,s.COLOR_ATTACHMENT0,ae,he);else Te(F.__webglFramebuffer,w,M,s.COLOR_ATTACHMENT0,ae,0);m(M)&&p(ae),t.unbindTexture()}w.depthBuffer&&it(w)}function pe(w){let M=w.textures;for(let F=0,q=M.length;F<q;F++){let re=M[F];if(m(re)){let B=y(w),me=n.get(re).__webglTexture;t.bindTexture(B,me),p(B),t.unbindTexture()}}}let Me=[],ve=[];function se(w){if(w.samples>0){if(z(w)===!1){let M=w.textures,F=w.width,q=w.height,re=s.COLOR_BUFFER_BIT,B=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=n.get(w),ae=M.length>1;if(ae)for(let Fe=0;Fe<M.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);let he=w.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(re|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(re|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,me.__webglColorRenderbuffer[Fe]);let fe=n.get(M[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,fe,0)}s.blitFramebuffer(0,0,F,q,0,0,F,q,re,s.NEAREST),c===!0&&(Me.length=0,ve.length=0,Me.push(s.COLOR_ATTACHMENT0+Fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Me.push(B),ve.push(B),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Me))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let Fe=0;Fe<M.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,me.__webglColorRenderbuffer[Fe]);let fe=n.get(M[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let M=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function P(w){return Math.min(i.maxSamples,w.samples)}function z(w){let M=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function K(w){let M=a.render.frame;u.get(w)!==M&&(u.set(w,M),w.update())}function _e(w,M){let F=w.colorSpace,q=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==gn&&F!==Ji&&(pt.getTransfer(F)===Tt?(q!==In||re!==Tn)&&Ke("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",F)),M}function le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=O,this.setTexture2D=ee,this.setTexture2DArray=Z,this.setTexture3D=X,this.setTextureCube=ue,this.rebindTextures=ot,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=z,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wM(s,e){function t(n,i=Ji){let r,a=pt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===vc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===_c)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Bh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return s.BYTE;if(n===Oh)return s.SHORT;if(n===ta)return s.UNSIGNED_SHORT;if(n===xc)return s.INT;if(n===fi)return s.UNSIGNED_INT;if(n===Kn)return s.FLOAT;if(n===tn)return s.HALF_FLOAT;if(n===zh)return s.ALPHA;if(n===kh)return s.RGB;if(n===In)return s.RGBA;if(n===gi)return s.DEPTH_COMPONENT;if(n===Ai)return s.DEPTH_STENCIL;if(n===yc)return s.RED;if(n===Mc)return s.RED_INTEGER;if(n===ir)return s.RG;if(n===bc)return s.RG_INTEGER;if(n===Sc)return s.RGBA_INTEGER;if(n===wo||n===Ao||n===Ro||n===Co)if(a===Tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ec||n===Tc||n===wc||n===Ac)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ac)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rc||n===Cc||n===Pc||n===Ic||n===Dc||n===Lc||n===Nc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rc||n===Cc)return a===Tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Pc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ic)return r.COMPRESSED_R11_EAC;if(n===Dc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lc)return r.COMPRESSED_RG11_EAC;if(n===Nc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Uc||n===Fc||n===Oc||n===Bc||n===Hc||n===zc||n===kc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Uc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Fc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Oc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Bc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Vc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Gc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Wc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===qc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Yc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zc)return a===Tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===$c||n===Jc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Kc)return a===Tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jc||n===Qc||n===eu||n===tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===jc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,hf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Za(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new lt({vertexShader:AM,fragmentShader:RM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ff=class extends xi{constructor(e,t){super();let n=this,i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new hf,p={},y=t.getContextAttributes(),b=null,v=null,T=[],A=[],D=new oe,L=null,S=new Vt;S.viewport=new Rt;let E=new Vt;E.viewport=new Rt;let N=[S,E],O=new ic,G=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=T[te];return de===void 0&&(de=new Gr,T[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=T[te];return de===void 0&&(de=new Gr,T[te]=de),de.getGripSpace()},this.getHand=function(te){let de=T[te];return de===void 0&&(de=new Gr,T[te]=de),de.getHandSpace()};function ee(te){let de=A.indexOf(te.inputSource);if(de===-1)return;let Te=T[de];Te!==void 0&&(Te.update(te.inputSource,te.frame,l||a),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){i.removeEventListener("select",ee),i.removeEventListener("selectstart",ee),i.removeEventListener("selectend",ee),i.removeEventListener("squeeze",ee),i.removeEventListener("squeezestart",ee),i.removeEventListener("squeezeend",ee),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",X);for(let te=0;te<T.length;te++){let de=A[te];de!==null&&(A[te]=null,T[te].disconnect(de))}G=null,j=null,m.reset();for(let te in p)delete p[te];e.setRenderTarget(b),f=null,d=null,h=null,i=null,v=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(L),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Ke("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Ke("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(b=e.getRenderTarget(),i.addEventListener("select",ee),i.addEventListener("selectstart",ee),i.addEventListener("selectend",ee),i.addEventListener("squeeze",ee),i.addEventListener("squeezestart",ee),i.addEventListener("squeezeend",ee),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,He=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=y.stencil?Ai:gi,He=y.stencil?vs:fi);let it={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(it),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Xt(d.textureWidth,d.textureHeight,{format:In,type:Tn,depthTexture:new yi(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,Te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Xt(f.framebufferWidth,f.framebufferHeight,{format:In,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(te){for(let de=0;de<te.removed.length;de++){let Te=te.removed[de],He=A.indexOf(Te);He>=0&&(A[He]=null,T[He].disconnect(Te))}for(let de=0;de<te.added.length;de++){let Te=te.added[de],He=A.indexOf(Te);if(He===-1){for(let it=0;it<T.length;it++)if(it>=A.length){A.push(Te),He=it;break}else if(A[it]===null){A[it]=Te,He=it;break}if(He===-1)break}let Ce=T[He];Ce&&Ce.connect(Te)}}let ue=new I,$=new I;function ge(te,de,Te){ue.setFromMatrixPosition(de.matrixWorld),$.setFromMatrixPosition(Te.matrixWorld);let He=ue.distanceTo($),Ce=de.projectionMatrix.elements,it=Te.projectionMatrix.elements,ot=Ce[14]/(Ce[10]-1),Ye=Ce[14]/(Ce[10]+1),pe=(Ce[9]+1)/Ce[5],Me=(Ce[9]-1)/Ce[5],ve=(Ce[8]-1)/Ce[0],se=(it[8]+1)/it[0],P=ot*ve,z=ot*se,K=He/(-ve+se),_e=K*-ve;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(_e),te.translateZ(K),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ce[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let le=ot+K,w=Ye+K,M=P-_e,F=z+(He-_e),q=pe*Ye/w*le,re=Me*Ye/w*le;te.projectionMatrix.makePerspective(M,F,q,re,le,w),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function xe(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let de=te.near,Te=te.far;m.texture!==null&&(m.depthNear>0&&(de=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),O.near=E.near=S.near=de,O.far=E.far=S.far=Te,(G!==O.near||j!==O.far)&&(i.updateRenderState({depthNear:O.near,depthFar:O.far}),G=O.near,j=O.far),O.layers.mask=te.layers.mask|6,S.layers.mask=O.layers.mask&3,E.layers.mask=O.layers.mask&5;let He=te.parent,Ce=O.cameras;xe(O,He);for(let it=0;it<Ce.length;it++)xe(Ce[it],He);Ce.length===2?ge(O,S,E):O.projectionMatrix.copy(S.projectionMatrix),Ne(te,O,He)};function Ne(te,de,Te){Te===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Os*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(te){c=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(te){return p[te]};let Ue=null;function qe(te,de){if(u=de.getViewerPose(l||a),g=de,u!==null){let Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let He=!1;Te.length!==O.cameras.length&&(O.cameras.length=0,He=!0);for(let Ye=0;Ye<Te.length;Ye++){let pe=Te[Ye],Me=null;if(f!==null)Me=f.getViewport(pe);else{let se=h.getViewSubImage(d,pe);Me=se.viewport,Ye===0&&(e.setRenderTargetTextures(v,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(v))}let ve=N[Ye];ve===void 0&&(ve=new Vt,ve.layers.enable(Ye),ve.viewport=new Rt,N[Ye]=ve),ve.matrix.fromArray(pe.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(pe.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Me.x,Me.y,Me.width,Me.height),Ye===0&&(O.matrix.copy(ve.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),He===!0&&O.cameras.push(ve)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Ye=h.getDepthInformation(Te[0]);Ye&&Ye.isValid&&Ye.texture&&m.init(Ye,i.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Ye=0;Ye<Te.length;Ye++){let pe=Te[Ye].camera;if(pe){let Me=p[pe];Me||(Me=new Za,p[pe]=Me);let ve=h.getCameraImage(pe);Me.sourceTexture=ve}}}}for(let Te=0;Te<T.length;Te++){let He=A[Te],Ce=T[Te];He!==null&&Ce!==void 0&&Ce.update(He,de,l||a)}Ue&&Ue(te,de),de.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:de}),g=null}let rt=new am;rt.setAnimationLoop(qe),this.setAnimationLoop=function(te){Ue=te},this.dispose=function(){}}},ar=new Xn,CM=new Ze;function PM(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,y,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,y,b):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),b=y.envMap,v=y.envMapRotation;b&&(m.envMap.value=b,ar.copy(v),ar.x*=-1,ar.y*=-1,ar.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(CM.makeRotationFromEuler(ar)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,y,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function IM(s,e,t,n){let i={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,b){let v=b.program;n.uniformBlockBinding(y,v)}function l(y,b){let v=i[y.id];v===void 0&&(g(y),v=u(y),i[y.id]=v,y.addEventListener("dispose",m));let T=b.program;n.updateUBOMapping(y,T);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function u(y){let b=h();y.__bindingPointIndex=b;let v=s.createBuffer(),T=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,T,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,v),v}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let b=i[y.id],v=y.uniforms,T=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let A=0,D=v.length;A<D;A++){let L=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,E=L.length;S<E;S++){let N=L[S];if(f(N,A,S,T)===!0){let O=N.__offset,G=Array.isArray(N.value)?N.value:[N.value],j=0;for(let ee=0;ee<G.length;ee++){let Z=G[ee],X=x(Z);typeof Z=="number"||typeof Z=="boolean"?(N.__data[0]=Z,s.bufferSubData(s.UNIFORM_BUFFER,O+j,N.__data)):Z.isMatrix3?(N.__data[0]=Z.elements[0],N.__data[1]=Z.elements[1],N.__data[2]=Z.elements[2],N.__data[3]=0,N.__data[4]=Z.elements[3],N.__data[5]=Z.elements[4],N.__data[6]=Z.elements[5],N.__data[7]=0,N.__data[8]=Z.elements[6],N.__data[9]=Z.elements[7],N.__data[10]=Z.elements[8],N.__data[11]=0):(Z.toArray(N.__data,j),j+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,N.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,v,T){let A=y.value,D=b+"_"+v;if(T[D]===void 0)return typeof A=="number"||typeof A=="boolean"?T[D]=A:T[D]=A.clone(),!0;{let L=T[D];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return T[D]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(y){let b=y.uniforms,v=0,T=16;for(let D=0,L=b.length;D<L;D++){let S=Array.isArray(b[D])?b[D]:[b[D]];for(let E=0,N=S.length;E<N;E++){let O=S[E],G=Array.isArray(O.value)?O.value:[O.value];for(let j=0,ee=G.length;j<ee;j++){let Z=G[j],X=x(Z),ue=v%T,$=ue%X.boundary,ge=ue+$;v+=$,ge!==0&&T-ge<X.storage&&(v+=T-ge),O.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=X.storage}}}let A=v%T;return A>0&&(v+=T-A),y.__size=v,y.__cache={},this}function x(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?Ke("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ke("WebGLRenderer: Unsupported uniform value type.",y),b}function m(y){let b=y.target;b.removeEventListener("dispose",m);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function p(){for(let y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:p}}var DM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ri=null;function LM(){return Ri===null&&(Ri=new _i(DM,16,16,ir,tn),Ri.name="DFG_LUT",Ri.minFilter=jt,Ri.magFilter=jt,Ri.wrapS=ei,Ri.wrapT=ei,Ri.generateMipmaps=!1,Ri.needsUpdate=!0),Ri}var hu=class{constructor(e={}){let{canvas:t=Rp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Tn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Sc,bc,Mc]),p=new Set([Tn,fi,ta,vs,vc,_c]),y=new Uint32Array(4),b=new Int32Array(4),v=null,T=null,A=[],D=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,E=!1;this._outputColorSpace=Ft;let N=0,O=0,G=null,j=-1,ee=null,Z=new Rt,X=new Rt,ue=null,$=new Ee(0),ge=0,xe=t.width,Ne=t.height,Ue=1,qe=null,rt=null,te=new Rt(0,0,xe,Ne),de=new Rt(0,0,xe,Ne),Te=!1,He=new Xr,Ce=!1,it=!1,ot=new Ze,Ye=new I,pe=new Rt,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function se(){return G===null?Ue:1}let P=n;function z(R,W){return t.getContext(R,W)}try{let R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",mt,!1),P===null){let W="webgl2";if(P=z(W,R),P===null)throw z(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw tt("WebGLRenderer: "+R.message),R}let K,_e,le,w,M,F,q,re,B,me,ae,he,Fe,fe,be,Se,ke,Re,Qe,H,Pe,we,ze,Ae;function ye(){K=new z_(P),K.init(),we=new wM(P,K),_e=new I_(P,K,e,we),le=new EM(P,K),_e.reversedDepthBuffer&&d&&le.buffers.depth.setReversed(!0),w=new G_(P),M=new cM,F=new TM(P,K,le,M,_e,we,w),q=new L_(S),re=new H_(S),B=new Yg(P),ze=new C_(P,B),me=new k_(P,B,w,ze),ae=new X_(P,me,B,w),Qe=new W_(P,_e,F),Se=new D_(M),he=new lM(S,q,re,K,_e,ze,Se),Fe=new PM(S,M),fe=new hM,be=new xM(K),Re=new R_(S,q,re,le,ae,g,c),ke=new bM(S,ae,_e),Ae=new IM(P,w,_e,le),H=new P_(P,K,w),Pe=new V_(P,K,w),w.programs=he.programs,S.capabilities=_e,S.extensions=K,S.properties=M,S.renderLists=fe,S.shadowMap=ke,S.state=le,S.info=w}ye(),x!==Tn&&(L=new Y_(x,t.width,t.height,i,r));let Ie=new ff(S,P);this.xr=Ie,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let R=K.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=K.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(R){R!==void 0&&(Ue=R,this.setSize(xe,Ne,!1))},this.getSize=function(R){return R.set(xe,Ne)},this.setSize=function(R,W,ne=!0){if(Ie.isPresenting){Ke("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=R,Ne=W,t.width=Math.floor(R*Ue),t.height=Math.floor(W*Ue),ne===!0&&(t.style.width=R+"px",t.style.height=W+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(xe*Ue,Ne*Ue).floor()},this.setDrawingBufferSize=function(R,W,ne){xe=R,Ne=W,Ue=ne,t.width=Math.floor(R*ne),t.height=Math.floor(W*ne),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(x===Tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,W,ne,Q){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,W,ne,Q),le.viewport(Z.copy(te).multiplyScalar(Ue).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,W,ne,Q){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,W,ne,Q),le.scissor(X.copy(de).multiplyScalar(Ue).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){le.setScissorTest(Te=R)},this.setOpaqueSort=function(R){qe=R},this.setTransparentSort=function(R){rt=R},this.getClearColor=function(R){return R.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,ne=!0){let Q=0;if(R){let Y=!1;if(G!==null){let De=G.texture.format;Y=m.has(De)}if(Y){let De=G.texture.type,Ve=p.has(De),Le=Re.getClearColor(),Ge=Re.getClearAlpha(),Xe=Le.r,et=Le.g,je=Le.b;Ve?(y[0]=Xe,y[1]=et,y[2]=je,y[3]=Ge,P.clearBufferuiv(P.COLOR,0,y)):(b[0]=Xe,b[1]=et,b[2]=je,b[3]=Ge,P.clearBufferiv(P.COLOR,0,b))}else Q|=P.COLOR_BUFFER_BIT}W&&(Q|=P.DEPTH_BUFFER_BIT),ne&&(Q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),Re.dispose(),fe.dispose(),be.dispose(),M.dispose(),q.dispose(),re.dispose(),ae.dispose(),ze.dispose(),Ae.dispose(),he.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Ss),Ie.removeEventListener("sessionend",hr),Li.stop()};function nt(R){R.preventDefault(),Ha("WebGLRenderer: Context Lost."),E=!0}function bt(){Ha("WebGLRenderer: Context Restored."),E=!1;let R=w.autoReset,W=ke.enabled,ne=ke.autoUpdate,Q=ke.needsUpdate,Y=ke.type;ye(),w.autoReset=R,ke.enabled=W,ke.autoUpdate=ne,ke.needsUpdate=Q,ke.type=Y}function mt(R){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){let W=R.target;W.removeEventListener("dispose",Nn),Hn(W)}function Hn(R){ts(R),M.remove(R)}function ts(R){let W=M.get(R).programs;W!==void 0&&(W.forEach(function(ne){he.releaseProgram(ne)}),R.isShaderMaterial&&he.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ne,Q,Y,De){W===null&&(W=Me);let Ve=Y.isMesh&&Y.matrixWorld.determinant()<0,Le=ma(R,W,ne,Q,Y);le.setMaterial(Q,Ve);let Ge=ne.index,Xe=1;if(Q.wireframe===!0){if(Ge=me.getWireframeAttribute(ne),Ge===void 0)return;Xe=2}let et=ne.drawRange,je=ne.attributes.position,ct=et.start*Xe,wt=(et.start+et.count)*Xe;De!==null&&(ct=Math.max(ct,De.start*Xe),wt=Math.min(wt,(De.start+De.count)*Xe)),Ge!==null?(ct=Math.max(ct,0),wt=Math.min(wt,Ge.count)):je!=null&&(ct=Math.max(ct,0),wt=Math.min(wt,je.count));let Bt=wt-ct;if(Bt<0||Bt===1/0)return;ze.setup(Y,Q,Le,ne,Ge);let Ut,Ct=H;if(Ge!==null&&(Ut=B.get(Ge),Ct=Pe,Ct.setIndex(Ut)),Y.isMesh)Q.wireframe===!0?(le.setLineWidth(Q.wireframeLinewidth*se()),Ct.setMode(P.LINES)):Ct.setMode(P.TRIANGLES);else if(Y.isLine){let $e=Q.linewidth;$e===void 0&&($e=1),le.setLineWidth($e*se()),Y.isLineSegments?Ct.setMode(P.LINES):Y.isLineLoop?Ct.setMode(P.LINE_LOOP):Ct.setMode(P.LINE_STRIP)}else Y.isPoints?Ct.setMode(P.POINTS):Y.isSprite&&Ct.setMode(P.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)zr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(K.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let $e=Y._multiDrawStarts,Et=Y._multiDrawCounts,yt=Y._multiDrawCount,Rn=Ge?B.get(Ge).bytesPerElement:1,Ui=M.get(Q).currentProgram.getUniforms();for(let _n=0;_n<yt;_n++)Ui.setValue(P,"_gl_DrawID",_n),Ct.render($e[_n]/Rn,Et[_n])}else if(Y.isInstancedMesh)Ct.renderInstances(ct,Bt,Y.count);else if(ne.isInstancedBufferGeometry){let $e=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Et=Math.min(ne.instanceCount,$e);Ct.renderInstances(ct,Bt,Et)}else Ct.render(ct,Bt)};function qo(R,W,ne){R.transparent===!0&&R.side===Qt&&R.forceSinglePass===!1?(R.side=dn,R.needsUpdate=!0,Ni(R,W,ne),R.side=ui,R.needsUpdate=!0,Ni(R,W,ne),R.side=Qt):Ni(R,W,ne)}this.compile=function(R,W,ne=null){ne===null&&(ne=R),T=be.get(ne),T.init(W),D.push(T),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),R!==ne&&R.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights();let Q=new Set;return R.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let De=Y.material;if(De)if(Array.isArray(De))for(let Ve=0;Ve<De.length;Ve++){let Le=De[Ve];qo(Le,ne,Y),Q.add(Le)}else qo(De,ne,Y),Q.add(De)}),T=D.pop(),Q},this.compileAsync=function(R,W,ne=null){let Q=this.compile(R,W,ne);return new Promise(Y=>{function De(){if(Q.forEach(function(Ve){M.get(Ve).currentProgram.isReady()&&Q.delete(Ve)}),Q.size===0){Y(R);return}setTimeout(De,10)}K.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let ha=null;function ns(R){ha&&ha(R)}function Ss(){Li.stop()}function hr(){Li.start()}let Li=new am;Li.setAnimationLoop(ns),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){ha=R,Ie.setAnimationLoop(R),R===null?Li.stop():Li.start()},Ie.addEventListener("sessionstart",Ss),Ie.addEventListener("sessionend",hr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let ne=Ie.enabled===!0&&Ie.isPresenting===!0,Q=L!==null&&(G===null||ne)&&L.begin(S,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(W),W=Ie.getCamera()),R.isScene===!0&&R.onBeforeRender(S,R,W,G),T=be.get(R,D.length),T.init(W),D.push(T),ot.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),He.setFromProjectionMatrix(ot,ci,W.reversedDepth),it=this.localClippingEnabled,Ce=Se.init(this.clippingPlanes,it),v=fe.get(R,A.length),v.init(),A.push(v),Ie.enabled===!0&&Ie.isPresenting===!0){let Ve=S.xr.getDepthSensingMesh();Ve!==null&&fa(Ve,W,-1/0,S.sortObjects)}fa(R,W,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(qe,rt),ve=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ve&&Re.addToRenderList(v,R),this.info.render.frame++,Ce===!0&&Se.beginShadows();let Y=T.state.shadowsArray;if(ke.render(Y,R,W),Ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&L.hasRenderPass())===!1){let Ve=v.opaque,Le=v.transmissive;if(T.setupLights(),W.isArrayCamera){let Ge=W.cameras;if(Le.length>0)for(let Xe=0,et=Ge.length;Xe<et;Xe++){let je=Ge[Xe];fr(Ve,Le,R,je)}ve&&Re.render(R);for(let Xe=0,et=Ge.length;Xe<et;Xe++){let je=Ge[Xe];da(v,R,je,je.viewport)}}else Le.length>0&&fr(Ve,Le,R,W),ve&&Re.render(R),da(v,R,W)}G!==null&&O===0&&(F.updateMultisampleRenderTarget(G),F.updateRenderTargetMipmap(G)),Q&&L.end(S),R.isScene===!0&&R.onAfterRender(S,R,W),ze.resetDefaultState(),j=-1,ee=null,D.pop(),D.length>0?(T=D[D.length-1],Ce===!0&&Se.setGlobalState(S.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?v=A[A.length-1]:v=null};function fa(R,W,ne,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ne=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)T.pushLight(R),R.castShadow&&T.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||He.intersectsSprite(R)){Q&&pe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ot);let Ve=ae.update(R),Le=R.material;Le.visible&&v.push(R,Ve,Le,ne,pe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||He.intersectsObject(R))){let Ve=ae.update(R),Le=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pe.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),pe.copy(Ve.boundingSphere.center)),pe.applyMatrix4(R.matrixWorld).applyMatrix4(ot)),Array.isArray(Le)){let Ge=Ve.groups;for(let Xe=0,et=Ge.length;Xe<et;Xe++){let je=Ge[Xe],ct=Le[je.materialIndex];ct&&ct.visible&&v.push(R,Ve,ct,ne,pe.z,je)}}else Le.visible&&v.push(R,Ve,Le,ne,pe.z,null)}}let De=R.children;for(let Ve=0,Le=De.length;Ve<Le;Ve++)fa(De[Ve],W,ne,Q)}function da(R,W,ne,Q){let{opaque:Y,transmissive:De,transparent:Ve}=R;T.setupLightsView(ne),Ce===!0&&Se.setGlobalState(S.clippingPlanes,ne),Q&&le.viewport(Z.copy(Q)),Y.length>0&&is(Y,W,ne),De.length>0&&is(De,W,ne),Ve.length>0&&is(Ve,W,ne),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function fr(R,W,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){let ct=K.has("EXT_color_buffer_half_float")||K.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new Xt(1,1,{generateMipmaps:!0,type:ct?tn:Tn,minFilter:Zn,samples:_e.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let De=T.state.transmissionRenderTarget[Q.id],Ve=Q.viewport||Z;De.setSize(Ve.z*S.transmissionResolutionScale,Ve.w*S.transmissionResolutionScale);let Le=S.getRenderTarget(),Ge=S.getActiveCubeFace(),Xe=S.getActiveMipmapLevel();S.setRenderTarget(De),S.getClearColor($),ge=S.getClearAlpha(),ge<1&&S.setClearColor(16777215,.5),S.clear(),ve&&Re.render(ne);let et=S.toneMapping;S.toneMapping=hi;let je=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),Ce===!0&&Se.setGlobalState(S.clippingPlanes,Q),is(R,ne,Q),F.updateMultisampleRenderTarget(De),F.updateRenderTargetMipmap(De),K.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let wt=0,Bt=W.length;wt<Bt;wt++){let Ut=W[wt],{object:Ct,geometry:$e,material:Et,group:yt}=Ut;if(Et.side===Qt&&Ct.layers.test(Q.layers)){let Rn=Et.side;Et.side=dn,Et.needsUpdate=!0,dr(Ct,ne,Q,$e,Et,yt),Et.side=Rn,Et.needsUpdate=!0,ct=!0}}ct===!0&&(F.updateMultisampleRenderTarget(De),F.updateRenderTargetMipmap(De))}S.setRenderTarget(Le,Ge,Xe),S.setClearColor($,ge),je!==void 0&&(Q.viewport=je),S.toneMapping=et}function is(R,W,ne){let Q=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,De=R.length;Y<De;Y++){let Ve=R[Y],{object:Le,geometry:Ge,group:Xe}=Ve,et=Ve.material;et.allowOverride===!0&&Q!==null&&(et=Q),Le.layers.test(ne.layers)&&dr(Le,W,ne,Ge,et,Xe)}}function dr(R,W,ne,Q,Y,De){R.onBeforeRender(S,W,ne,Q,Y,De),R.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Y.onBeforeRender(S,W,ne,Q,R,De),Y.transparent===!0&&Y.side===Qt&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,S.renderBufferDirect(ne,W,Q,Y,R,De),Y.side=ui,Y.needsUpdate=!0,S.renderBufferDirect(ne,W,Q,Y,R,De),Y.side=Qt):S.renderBufferDirect(ne,W,Q,Y,R,De),R.onAfterRender(S,W,ne,Q,Y,De)}function Ni(R,W,ne){W.isScene!==!0&&(W=Me);let Q=M.get(R),Y=T.state.lights,De=T.state.shadowsArray,Ve=Y.state.version,Le=he.getParameters(R,Y.state,De,W,ne),Ge=he.getProgramCacheKey(Le),Xe=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?re:q).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",Nn),Xe=new Map,Q.programs=Xe);let et=Xe.get(Ge);if(et!==void 0){if(Q.currentProgram===et&&Q.lightsStateVersion===Ve)return Es(R,Le),et}else Le.uniforms=he.getUniforms(R),R.onBeforeCompile(Le,S),et=he.acquireProgram(Le,Ge),Xe.set(Ge,et),Q.uniforms=Le.uniforms;let je=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(je.clippingPlanes=Se.uniform),Es(R,Le),Q.needsLights=Zo(R),Q.lightsStateVersion=Ve,Q.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=et,Q.uniformsList=null,et}function pa(R){if(R.uniformsList===null){let W=R.currentProgram.getUniforms();R.uniformsList=sa.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Es(R,W){let ne=M.get(R);ne.outputColorSpace=W.outputColorSpace,ne.batching=W.batching,ne.batchingColor=W.batchingColor,ne.instancing=W.instancing,ne.instancingColor=W.instancingColor,ne.instancingMorph=W.instancingMorph,ne.skinning=W.skinning,ne.morphTargets=W.morphTargets,ne.morphNormals=W.morphNormals,ne.morphColors=W.morphColors,ne.morphTargetsCount=W.morphTargetsCount,ne.numClippingPlanes=W.numClippingPlanes,ne.numIntersection=W.numClipIntersection,ne.vertexAlphas=W.vertexAlphas,ne.vertexTangents=W.vertexTangents,ne.toneMapping=W.toneMapping}function ma(R,W,ne,Q,Y){W.isScene!==!0&&(W=Me),F.resetTextureUnits();let De=W.fog,Ve=Q.isMeshStandardMaterial?W.environment:null,Le=G===null?S.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:gn,Ge=(Q.isMeshStandardMaterial?re:q).get(Q.envMap||Ve),Xe=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,et=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),je=!!ne.morphAttributes.position,ct=!!ne.morphAttributes.normal,wt=!!ne.morphAttributes.color,Bt=hi;Q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Bt=S.toneMapping);let Ut=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ct=Ut!==void 0?Ut.length:0,$e=M.get(Q),Et=T.state.lights;if(Ce===!0&&(it===!0||R!==ee)){let hn=R===ee&&Q.id===j;Se.setState(Q,R,hn)}let yt=!1;Q.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Et.state.version||$e.outputColorSpace!==Le||Y.isBatchedMesh&&$e.batching===!1||!Y.isBatchedMesh&&$e.batching===!0||Y.isBatchedMesh&&$e.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&$e.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&$e.instancing===!1||!Y.isInstancedMesh&&$e.instancing===!0||Y.isSkinnedMesh&&$e.skinning===!1||!Y.isSkinnedMesh&&$e.skinning===!0||Y.isInstancedMesh&&$e.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&$e.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&$e.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&$e.instancingMorph===!1&&Y.morphTexture!==null||$e.envMap!==Ge||Q.fog===!0&&$e.fog!==De||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Se.numPlanes||$e.numIntersection!==Se.numIntersection)||$e.vertexAlphas!==Xe||$e.vertexTangents!==et||$e.morphTargets!==je||$e.morphNormals!==ct||$e.morphColors!==wt||$e.toneMapping!==Bt||$e.morphTargetsCount!==Ct)&&(yt=!0):(yt=!0,$e.__version=Q.version);let Rn=$e.currentProgram;yt===!0&&(Rn=Ni(Q,W,Y));let Ui=!1,_n=!1,di=!1,At=Rn.getUniforms(),yn=$e.uniforms;if(le.useProgram(Rn.program)&&(Ui=!0,_n=!0,di=!0),Q.id!==j&&(j=Q.id,_n=!0),Ui||ee!==R){le.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),At.setValue(P,"projectionMatrix",R.projectionMatrix),At.setValue(P,"viewMatrix",R.matrixWorldInverse);let pn=At.map.cameraPosition;pn!==void 0&&pn.setValue(P,Ye.setFromMatrixPosition(R.matrixWorld)),_e.logarithmicDepthBuffer&&At.setValue(P,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue(P,"isOrthographic",R.isOrthographicCamera===!0),ee!==R&&(ee=R,_n=!0,di=!0)}if($e.needsLights&&(Et.state.directionalShadowMap.length>0&&At.setValue(P,"directionalShadowMap",Et.state.directionalShadowMap,F),Et.state.spotShadowMap.length>0&&At.setValue(P,"spotShadowMap",Et.state.spotShadowMap,F),Et.state.pointShadowMap.length>0&&At.setValue(P,"pointShadowMap",Et.state.pointShadowMap,F)),Y.isSkinnedMesh){At.setOptional(P,Y,"bindMatrix"),At.setOptional(P,Y,"bindMatrixInverse");let hn=Y.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),At.setValue(P,"boneTexture",hn.boneTexture,F))}Y.isBatchedMesh&&(At.setOptional(P,Y,"batchingTexture"),At.setValue(P,"batchingTexture",Y._matricesTexture,F),At.setOptional(P,Y,"batchingIdTexture"),At.setValue(P,"batchingIdTexture",Y._indirectTexture,F),At.setOptional(P,Y,"batchingColorTexture"),Y._colorsTexture!==null&&At.setValue(P,"batchingColorTexture",Y._colorsTexture,F));let Mn=ne.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Qe.update(Y,ne,Rn),(_n||$e.receiveShadow!==Y.receiveShadow)&&($e.receiveShadow=Y.receiveShadow,At.setValue(P,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(yn.envMap.value=Ge,yn.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(yn.envMapIntensity.value=W.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=LM()),_n&&(At.setValue(P,"toneMappingExposure",S.toneMappingExposure),$e.needsLights&&Yo(yn,di),De&&Q.fog===!0&&Fe.refreshFogUniforms(yn,De),Fe.refreshMaterialUniforms(yn,Q,Ue,Ne,T.state.transmissionRenderTarget[R.id]),sa.upload(P,pa($e),yn,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(sa.upload(P,pa($e),yn,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue(P,"center",Y.center),At.setValue(P,"modelViewMatrix",Y.modelViewMatrix),At.setValue(P,"normalMatrix",Y.normalMatrix),At.setValue(P,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let hn=Q.uniformsGroups;for(let pn=0,zn=hn.length;pn<zn;pn++){let Fi=hn[pn];Ae.update(Fi,Rn),Ae.bind(Fi,Rn)}}return Rn}function Yo(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Zo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,W,ne){let Q=M.get(R);Q.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),M.get(R.texture).__webglTexture=W,M.get(R.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){let ne=M.get(R);ne.__webglFramebuffer=W,ne.__useDefaultFramebuffer=W===void 0};let ga=P.createFramebuffer();this.setRenderTarget=function(R,W=0,ne=0){G=R,N=W,O=ne;let Q=null,Y=!1,De=!1;if(R){let Le=M.get(R);if(Le.__useDefaultFramebuffer!==void 0){le.bindFramebuffer(P.FRAMEBUFFER,Le.__webglFramebuffer),Z.copy(R.viewport),X.copy(R.scissor),ue=R.scissorTest,le.viewport(Z),le.scissor(X),le.setScissorTest(ue),j=-1;return}else if(Le.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(Le.__hasExternalTextures)F.rebindTextures(R,M.get(R.texture).__webglTexture,M.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let et=R.depthTexture;if(Le.__boundDepthTexture!==et){if(et!==null&&M.has(et)&&(R.width!==et.image.width||R.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}let Ge=R.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);let Xe=M.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xe[W])?Q=Xe[W][ne]:Q=Xe[W],Y=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?Q=M.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?Q=Xe[ne]:Q=Xe,Z.copy(R.viewport),X.copy(R.scissor),ue=R.scissorTest}else Z.copy(te).multiplyScalar(Ue).floor(),X.copy(de).multiplyScalar(Ue).floor(),ue=Te;if(ne!==0&&(Q=ga),le.bindFramebuffer(P.FRAMEBUFFER,Q)&&le.drawBuffers(R,Q),le.viewport(Z),le.scissor(X),le.setScissorTest(ue),Y){let Le=M.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+W,Le.__webglTexture,ne)}else if(De){let Le=W;for(let Ge=0;Ge<R.textures.length;Ge++){let Xe=M.get(R.textures[Ge]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,ne,Le)}}else if(R!==null&&ne!==0){let Le=M.get(R.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Le.__webglTexture,ne)}j=-1},this.readRenderTargetPixels=function(R,W,ne,Q,Y,De,Ve,Le=0){if(!(R&&R.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge){le.bindFramebuffer(P.FRAMEBUFFER,Ge);try{let Xe=R.textures[Le],et=Xe.format,je=Xe.type;if(!_e.textureFormatReadable(et)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(je)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&ne>=0&&ne<=R.height-Y&&(R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Le),P.readPixels(W,ne,Q,Y,we.convert(et),we.convert(je),De))}finally{let Xe=G!==null?M.get(G).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,W,ne,Q,Y,De,Ve,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=M.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ge=Ge[Ve]),Ge)if(W>=0&&W<=R.width-Q&&ne>=0&&ne<=R.height-Y){le.bindFramebuffer(P.FRAMEBUFFER,Ge);let Xe=R.textures[Le],et=Xe.format,je=Xe.type;if(!_e.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.bufferData(P.PIXEL_PACK_BUFFER,De.byteLength,P.STREAM_READ),R.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Le),P.readPixels(W,ne,Q,Y,we.convert(et),we.convert(je),0);let wt=G!==null?M.get(G).__webglFramebuffer:null;le.bindFramebuffer(P.FRAMEBUFFER,wt);let Bt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Cp(P,Bt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ct),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,De),P.deleteBuffer(ct),P.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,ne=0){let Q=Math.pow(2,-ne),Y=Math.floor(R.image.width*Q),De=Math.floor(R.image.height*Q),Ve=W!==null?W.x:0,Le=W!==null?W.y:0;F.setTexture2D(R,0),P.copyTexSubImage2D(P.TEXTURE_2D,ne,0,0,Ve,Le,Y,De),le.unbindTexture()};let xa=P.createFramebuffer(),Ko=P.createFramebuffer();this.copyTextureToTexture=function(R,W,ne=null,Q=null,Y=0,De=null){De===null&&(Y!==0?(zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Y,Y=0):De=0);let Ve,Le,Ge,Xe,et,je,ct,wt,Bt,Ut=R.isCompressedTexture?R.mipmaps[De]:R.image;if(ne!==null)Ve=ne.max.x-ne.min.x,Le=ne.max.y-ne.min.y,Ge=ne.isBox3?ne.max.z-ne.min.z:1,Xe=ne.min.x,et=ne.min.y,je=ne.isBox3?ne.min.z:0;else{let Mn=Math.pow(2,-Y);Ve=Math.floor(Ut.width*Mn),Le=Math.floor(Ut.height*Mn),R.isDataArrayTexture?Ge=Ut.depth:R.isData3DTexture?Ge=Math.floor(Ut.depth*Mn):Ge=1,Xe=0,et=0,je=0}Q!==null?(ct=Q.x,wt=Q.y,Bt=Q.z):(ct=0,wt=0,Bt=0);let Ct=we.convert(W.format),$e=we.convert(W.type),Et;W.isData3DTexture?(F.setTexture3D(W,0),Et=P.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(F.setTexture2DArray(W,0),Et=P.TEXTURE_2D_ARRAY):(F.setTexture2D(W,0),Et=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,W.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,W.unpackAlignment);let yt=P.getParameter(P.UNPACK_ROW_LENGTH),Rn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ui=P.getParameter(P.UNPACK_SKIP_PIXELS),_n=P.getParameter(P.UNPACK_SKIP_ROWS),di=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Xe),P.pixelStorei(P.UNPACK_SKIP_ROWS,et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,je);let At=R.isDataArrayTexture||R.isData3DTexture,yn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){let Mn=M.get(R),hn=M.get(W),pn=M.get(Mn.__renderTarget),zn=M.get(hn.__renderTarget);le.bindFramebuffer(P.READ_FRAMEBUFFER,pn.__webglFramebuffer),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Fi=0;Fi<Ge;Fi++)At&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(R).__webglTexture,Y,je+Fi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,M.get(W).__webglTexture,De,Bt+Fi)),P.blitFramebuffer(Xe,et,Ve,Le,ct,wt,Ve,Le,P.DEPTH_BUFFER_BIT,P.NEAREST);le.bindFramebuffer(P.READ_FRAMEBUFFER,null),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Y!==0||R.isRenderTargetTexture||M.has(R)){let Mn=M.get(R),hn=M.get(W);le.bindFramebuffer(P.READ_FRAMEBUFFER,xa),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ko);for(let pn=0;pn<Ge;pn++)At?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Mn.__webglTexture,Y,je+pn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Mn.__webglTexture,Y),yn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,hn.__webglTexture,De,Bt+pn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,hn.__webglTexture,De),Y!==0?P.blitFramebuffer(Xe,et,Ve,Le,ct,wt,Ve,Le,P.COLOR_BUFFER_BIT,P.NEAREST):yn?P.copyTexSubImage3D(Et,De,ct,wt,Bt+pn,Xe,et,Ve,Le):P.copyTexSubImage2D(Et,De,ct,wt,Xe,et,Ve,Le);le.bindFramebuffer(P.READ_FRAMEBUFFER,null),le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else yn?R.isDataTexture||R.isData3DTexture?P.texSubImage3D(Et,De,ct,wt,Bt,Ve,Le,Ge,Ct,$e,Ut.data):W.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,De,ct,wt,Bt,Ve,Le,Ge,Ct,Ut.data):P.texSubImage3D(Et,De,ct,wt,Bt,Ve,Le,Ge,Ct,$e,Ut):R.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,De,ct,wt,Ve,Le,Ct,$e,Ut.data):R.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,De,ct,wt,Ut.width,Ut.height,Ct,Ut.data):P.texSubImage2D(P.TEXTURE_2D,De,ct,wt,Ve,Le,Ct,$e,Ut);P.pixelStorei(P.UNPACK_ROW_LENGTH,yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,_n),P.pixelStorei(P.UNPACK_SKIP_IMAGES,di),De===0&&W.generateMipmaps&&P.generateMipmap(Et),le.unbindTexture()},this.initRenderTarget=function(R){M.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),le.unbindTexture()},this.resetState=function(){N=0,O=0,G=null,le.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var Pi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Dn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},NM=new wi(-1,1,1,-1,0,1),df=class extends Mt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}},UM=new df,Ii=class{constructor(e){this._mesh=new We(UM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,NM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var oa=class extends Dn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof lt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vn.clone(e.uniforms),this.material=new lt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ii(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var No=class extends Dn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},pu=class extends Dn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new oa(Pi),this.copyPass.material.blending=en,this.clock=new Js}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}No!==void 0&&(a instanceof No?n=!0:a instanceof pu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gu=class extends Dn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ee}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}};var hm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ee(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var la=class s extends Dn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Ee(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,a,{type:tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new Xt(r,a,{type:tn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new Xt(r,a,{type:tn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=hm;this.highPassUniforms=vn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new lt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=vn.clone(Pi.uniforms),this.blendMaterial=new lt({uniforms:this.copyUniforms,vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,premultipliedAlpha:!0,blending:ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ee,this._oldClearAlpha=1,this._basic=new St,this._fsQuad=new Ii(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new lt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new lt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};la.BlurDirectionX=new oe(1,0);la.BlurDirectionY=new oe(0,1);var Uo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var xu=class extends Dn{constructor(){super(),this.isOutputPass=!0,this.uniforms=vn.clone(Uo.uniforms),this.material=new Jr({name:Uo.name,uniforms:this.uniforms,vertexShader:Uo.vertexShader,fragmentShader:Uo.fragmentShader}),this._fsQuad=new Ii(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===Tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===_o?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Mo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===er?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===So?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===bo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ze},cameraProjectionMatrixInverse:{value:new Ze},cameraWorldMatrix:{value:new Ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Oo={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},vu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function fm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=FM(e),n=t.length,i=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new I(Math.cos(c),Math.sin(c),0).normalize();i[a*4]=(l.x*.5+.5)*255,i[a*4+1]=(l.y*.5+.5)*255,i[a*4+2]=127,i[a*4+3]=255}let r=new _i(i,e,e);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}function FM(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=a++;r++,i--}return n}var Bo={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new oe},cameraProjectionMatrixInverse:{value:new Ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function pf(s,e,t){let n=OM(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let a=n[r];i+=`vec3(${a.x}, ${a.y}, ${a.z})${r<s-1?",":")"}`}return i}function OM(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,a=Math.pow(i/(s-1),t);n.push(new I(Math.cos(r),Math.sin(r),a))}return n}var _u=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,g=e-d,x=t-f,m,p;g>x?(m=1,p=0):(m=0,p=1);let y=g-m+u,b=x-p+u,v=g-1+2*u,T=x-1+2*u,A=c&255,D=l&255,L=this.perm[A+this.perm[D]]%12,S=this.perm[A+m+this.perm[D+p]]%12,E=this.perm[A+1+this.perm[D+1]]%12,N=.5-g*g-x*x;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[L],g,x));let O=.5-y*y-b*b;O<0?i=0:(O*=O,i=O*O*this._dot(this.grad3[S],y,b));let G=.5-v*v-T*T;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[E],v,T)),70*(n+i+r)}noise3d(e,t,n){let i,r,a,o,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(n+l),f=1/6,g=(u+h+d)*f,x=u-g,m=h-g,p=d-g,y=e-x,b=t-m,v=n-p,T,A,D,L,S,E;y>=b?b>=v?(T=1,A=0,D=0,L=1,S=1,E=0):y>=v?(T=1,A=0,D=0,L=1,S=0,E=1):(T=0,A=0,D=1,L=1,S=0,E=1):b<v?(T=0,A=0,D=1,L=0,S=1,E=1):y<v?(T=0,A=1,D=0,L=0,S=1,E=1):(T=0,A=1,D=0,L=1,S=1,E=0);let N=y-T+f,O=b-A+f,G=v-D+f,j=y-L+2*f,ee=b-S+2*f,Z=v-E+2*f,X=y-1+3*f,ue=b-1+3*f,$=v-1+3*f,ge=u&255,xe=h&255,Ne=d&255,Ue=this.perm[ge+this.perm[xe+this.perm[Ne]]]%12,qe=this.perm[ge+T+this.perm[xe+A+this.perm[Ne+D]]]%12,rt=this.perm[ge+L+this.perm[xe+S+this.perm[Ne+E]]]%12,te=this.perm[ge+1+this.perm[xe+1+this.perm[Ne+1]]]%12,de=.6-y*y-b*b-v*v;de<0?i=0:(de*=de,i=de*de*this._dot3(this.grad3[Ue],y,b,v));let Te=.6-N*N-O*O-G*G;Te<0?r=0:(Te*=Te,r=Te*Te*this._dot3(this.grad3[qe],N,O,G));let He=.6-j*j-ee*ee-Z*Z;He<0?a=0:(He*=He,a=He*He*this._dot3(this.grad3[rt],j,ee,Z));let Ce=.6-X*X-ue*ue-$*$;return Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this._dot3(this.grad3[te],X,ue,$)),32*(i+r+a+o)}noise4d(e,t,n,i){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,h,d,f,g,x=(e+t+n+i)*c,m=Math.floor(e+x),p=Math.floor(t+x),y=Math.floor(n+x),b=Math.floor(i+x),v=(m+p+y+b)*l,T=m-v,A=p-v,D=y-v,L=b-v,S=e-T,E=t-A,N=n-D,O=i-L,G=S>E?32:0,j=S>N?16:0,ee=E>N?8:0,Z=S>O?4:0,X=E>O?2:0,ue=N>O?1:0,$=G+j+ee+Z+X+ue,ge=a[$][0]>=3?1:0,xe=a[$][1]>=3?1:0,Ne=a[$][2]>=3?1:0,Ue=a[$][3]>=3?1:0,qe=a[$][0]>=2?1:0,rt=a[$][1]>=2?1:0,te=a[$][2]>=2?1:0,de=a[$][3]>=2?1:0,Te=a[$][0]>=1?1:0,He=a[$][1]>=1?1:0,Ce=a[$][2]>=1?1:0,it=a[$][3]>=1?1:0,ot=S-ge+l,Ye=E-xe+l,pe=N-Ne+l,Me=O-Ue+l,ve=S-qe+2*l,se=E-rt+2*l,P=N-te+2*l,z=O-de+2*l,K=S-Te+3*l,_e=E-He+3*l,le=N-Ce+3*l,w=O-it+3*l,M=S-1+4*l,F=E-1+4*l,q=N-1+4*l,re=O-1+4*l,B=m&255,me=p&255,ae=y&255,he=b&255,Fe=o[B+o[me+o[ae+o[he]]]]%32,fe=o[B+ge+o[me+xe+o[ae+Ne+o[he+Ue]]]]%32,be=o[B+qe+o[me+rt+o[ae+te+o[he+de]]]]%32,Se=o[B+Te+o[me+He+o[ae+Ce+o[he+it]]]]%32,ke=o[B+1+o[me+1+o[ae+1+o[he+1]]]]%32,Re=.6-S*S-E*E-N*N-O*O;Re<0?u=0:(Re*=Re,u=Re*Re*this._dot4(r[Fe],S,E,N,O));let Qe=.6-ot*ot-Ye*Ye-pe*pe-Me*Me;Qe<0?h=0:(Qe*=Qe,h=Qe*Qe*this._dot4(r[fe],ot,Ye,pe,Me));let H=.6-ve*ve-se*se-P*P-z*z;H<0?d=0:(H*=H,d=H*H*this._dot4(r[be],ve,se,P,z));let Pe=.6-K*K-_e*_e-le*le-w*w;Pe<0?f=0:(Pe*=Pe,f=Pe*Pe*this._dot4(r[Se],K,_e,le,w));let we=.6-M*M-F*F-q*q-re*re;return we<0?g=0:(we*=we,g=we*we*this._dot4(r[ke],M,F,q,re)),27*(u+h+d+f+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var Ho=class s extends Dn{constructor(e,t,n=512,i=512,r,a,o){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=fm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Xt(this.width,this.height,{type:tn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new lt({defines:Object.assign({},Fo.defines),uniforms:vn.clone(Fo.uniforms),vertexShader:Fo.vertexShader,fragmentShader:Fo.fragmentShader,blending:en,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new lo,this.normalMaterial.blending=en,this.pdMaterial=new lt({defines:Object.assign({},Bo.defines),uniforms:vn.clone(Bo.uniforms),vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new lt({defines:Object.assign({},Oo.defines),uniforms:vn.clone(Oo.uniforms),vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader,blending:en}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new lt({uniforms:vn.clone(Pi.uniforms),vertexShader:Pi.vertexShader,fragmentShader:Pi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vo,blendDst:Qs,blendEquation:Gn,blendSrcAlpha:xo,blendDstAlpha:Qs,blendEquationAlpha:Gn}),this.blendMaterial=new lt({uniforms:vn.clone(vu.uniforms),vertexShader:vu.vertexShader,fragmentShader:vu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ac,blendSrc:vo,blendDst:Qs,blendEquation:Gn,blendSrcAlpha:xo,blendDstAlpha:Qs,blendEquationAlpha:Gn}),this._fsQuad=new Ii(null),this._originalClearColor=new Ee,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new yi,this.depthTexture.format=Ai,this.depthTexture.type=vs,this.normalRenderTarget=new Xt(this.width,this.height,{minFilter:Wt,magFilter:Wt,type:tn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=en,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new _u,n=e*e*4,i=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;i[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,i[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new _i(i,e,e,In,Tn);return r.wrapS=Yt,r.wrapT=Yt,r.needsUpdate=!0,r}};Ho.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function an(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new Mt,l=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)h.push(f.getX(g)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=dm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let g=dm(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function dm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new vt(a,t,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let g=0;g<t;g++){let x=u.getComponent(d,g);o.setComponent(d+h,g,x)}}else a.set(u.array,c);c+=u.count*t}return i!==void 0&&(o.gpuType=i),o}function mf(s,e){if(e===Vh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===na||e===Po){let t=s.getIndex();if(t===null){let a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===na)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var zo=class s extends We{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Vt;let n=this,i=t.color!==void 0?new Ee(t.color):new Ee(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Qn,h=new I,d=new I,f=new I,g=new Ze,x=new I(0,0,-1),m=new Rt,p=new I,y=new I,b=new Rt,v=new Ze,T=this.camera,A=new Xt(r,a,{samples:l,type:tn}),D=new lt({name:c.name!==void 0?c.name:"unspecified",uniforms:vn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});D.uniforms.tDiffuse.value=A.texture,D.uniforms.color.value=i,D.uniforms.textureMatrix.value=v,this.material=D,this.onBeforeRender=function(L,S,E){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(g),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(f),y.subVectors(d,x),y.reflect(h).negate(),y.add(d),T.position.copy(p),T.up.set(0,1,0),T.up.applyMatrix4(g),T.up.reflect(h),T.lookAt(y),T.far=E.far,T.updateMatrixWorld(),T.projectionMatrix.copy(E.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(T.projectionMatrix),v.multiply(T.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(T.matrixWorldInverse),m.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let O=T.projectionMatrix;b.x=(Math.sign(m.x)+O.elements[8])/O.elements[0],b.y=(Math.sign(m.y)+O.elements[9])/O.elements[5],b.z=-1,b.w=(1+O.elements[10])/O.elements[14],m.multiplyScalar(2/m.dot(b)),O.elements[2]=m.x,O.elements[6]=m.y,O.elements[10]=m.z+1-o,O.elements[14]=m.w,n.visible=!1;let G=L.getRenderTarget(),j=L.xr.enabled,ee=L.shadowMap.autoUpdate;L.xr.enabled=!1,L.shadowMap.autoUpdate=!1,L.setRenderTarget(A),L.state.buffers.depth.setMask(!0),L.autoClear===!1&&L.clear(),L.render(S,T),L.xr.enabled=j,L.shadowMap.autoUpdate=ee,L.setRenderTarget(G);let Z=E.viewport;Z!==void 0&&L.state.viewport(Z),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return A},this.dispose=function(){A.dispose(),n.material.dispose()}}};zo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var yu=null;function BM(){if(yu)return yu;let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),yu=new qn(s),yu}function gf(s,e,t=.7){let n=new qa(new Wr({map:BM(),color:s,transparent:!0,opacity:t,blending:ln,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(e),n}var An='"Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","Noto Sans JP","Noto Sans CJK JP","Meiryo","MS Gothic",sans-serif';function cr(s){let e=s%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647)/2147483647}function Zt(s,e,t){let n=document.createElement("canvas");return n.width=Math.max(2,Math.round(s)),n.height=Math.max(2,Math.round(e)),t(n.getContext("2d")),n}function $t(s,e={}){let t=new qn(s);return e.srgb!==!1&&(t.colorSpace=Ft),e.repeat&&(t.wrapS=t.wrapT=Yt),t.anisotropy=e.aniso??4,t.generateMipmaps=!0,t.minFilter=Zn,t}var es={bays:6,floors:8,bayW:3.2,floorH:3.6},pm=es.bays*es.bayW,vf=es.floors*es.floorH;function mm(s,e,t=1){let n=Math.round(512*t),i=Math.round(512*t),r=n/es.bays,a=i/es.floors,o=[],c=cr(e);for(let f=0;f<es.floors;f++)for(let g=0;g<es.bays;g++)o.push({x:g*r,y:f*a,state:c(),r:c(),r2:c()});let l=s==="office"?.2:s==="glass"?.14:s==="old"?.1:.12,u=(f,g)=>{let x={office:"#171d2b",resi:"#1b1a24",glass:"#0b1424",old:"#201c20"}[s];f.fillStyle=g?"#000":x,f.fillRect(0,0,n,i);for(let m of o){let p=m.x+r*.1,y=m.y+a*(s==="glass"?.06:.14),b=r*(s==="glass"?.84:s==="office"?.78:.56),v=a*(s==="glass"?.8:s==="office"?.62:.5),T=m.state<l,A=m.r;if(g){if(T){let D,L=.3+m.r2*.4;if(A<.12?D="#ffbf80":A<.9?(D="#a8c8e0",L*=.8):D="#4a8cff",f.globalAlpha=L,f.fillStyle=D,f.fillRect(p,y,b,v),f.globalAlpha=1,f.fillStyle="rgba(0,0,0,0.5)",A>=.12&&A<.5&&(f.fillRect(p,y+v*.62,b*.4,v*.38),f.fillRect(p+b*.55,y+v*.7,b*.45,v*.3)),m.r2>.55&&A<.84){let S=p+b*(.25+(m.r2-.55)*1.2);f.fillStyle="rgba(0,0,0,0.82)",f.beginPath(),f.arc(S,y+v*.42,v*.11,0,Math.PI*2),f.fill(),f.fillRect(S-v*.14,y+v*.53,v*.28,v*.47)}if(m.r2<.2&&s!=="glass"){f.fillStyle="rgba(0,0,0,0.65)";let S=Math.max(3,Math.round(v/(3*t)));for(let E=0;E<S*.6;E++)f.fillRect(p,y+E*(v/S),b,v/S*.55)}(s==="office"||s==="glass")&&(f.fillStyle="rgba(0,0,0,0.9)",f.fillRect(p+b/2-t,y,2*t,v))}}else{let D=f.createLinearGradient(0,y,0,y+v);D.addColorStop(0,s==="glass"?"#243a5c":"#1a2438"),D.addColorStop(1,"#070a12"),f.fillStyle=T?"#1b2335":D,f.fillRect(p,y,b,v),f.strokeStyle="#0a0d14",f.lineWidth=Math.max(1,t*2),f.strokeRect(p,y,b,v),(s==="office"||s==="glass")&&(f.beginPath(),f.moveTo(p+b/2,y),f.lineTo(p+b/2,y+v),f.stroke()),f.fillStyle="#2b3345",f.fillRect(m.x,m.y+a-4*t,r,4*t),f.fillStyle="#10131c",f.fillRect(m.x,m.y+a-1.5*t,r,1.5*t),(s==="resi"||s==="old")&&(m.r2<.34&&(f.fillStyle="#394155",f.fillRect(p-4*t,y+v+2*t,b+8*t,4*t),f.fillStyle="#0c0f16",f.fillRect(p-4*t,y+v-7*t,b+8*t,2*t)),m.r2>.62&&m.r2<.8&&(f.fillStyle="#58606f",f.fillRect(p+b*.15,y+v+3*t,b*.7,8*t),f.fillStyle="#272c37",f.fillRect(p+b*.2,y+v+5*t,b*.5,4*t))),s==="old"&&m.r2>.94&&(f.fillStyle="#3b2432",f.fillRect(p,y,b,v))}}if(!g){f.fillStyle="rgba(255,255,255,0.025)";for(let m=0;m<=es.bays;m++)f.fillRect(m*r-t,0,2*t,i);if(s==="glass"){let m=f.createLinearGradient(0,0,n,i);m.addColorStop(0,"rgba(120,170,255,0.09)"),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(255,120,200,0.07)"),f.fillStyle=m,f.fillRect(0,0,n,i)}}},h=$t(Zt(n,i,f=>u(f,!1)),{repeat:!0}),d=$t(Zt(n,i,f=>u(f,!0)),{repeat:!0});return{map:h,em:d}}var _f={w:16,h:4.5};function gm(s,e=1){let t=Math.round(1024*e),n=Math.round(288*e),i=cr(s),r=["\u30CD\u30AA\u9EBA","\u30BC\u30ED\u85AC\u5C40","\u30B3\u30A4\u30F3\u5802","\u713C\u304D\u9CE5","\u6708\u5F71","\u96FB\u8133\u5802","\u30DF\u30E9\u30A4\u6E6F","\u30AB\u30E9\u30AA\u30B1"],a=["#5fc8e0","#3fa8ff","#5fc8e0","#ff9a4a","#ff3a4a","#4a8cff"],o=Array.from({length:4},()=>({hue:a[Math.floor(i()*a.length)],shut:i()<.22,name:r[Math.floor(i()*r.length)],awn:i()<.6})),c=(l,u)=>{l.fillStyle=u?"#000":"#14141c",l.fillRect(0,0,t,n);let h=t/4;o.forEach((d,f)=>{let g=f*h;if(d.shut)if(u)l.fillStyle="rgba(255,60,190,0.35)",l.fillRect(g+h*.2,n*.4,h*.5,n*.18);else{l.fillStyle="#2a2d36",l.fillRect(g+h*.08,n*.2,h*.84,n*.72),l.fillStyle="#1c1e26";for(let x=n*.22;x<n*.9;x+=5*e)l.fillRect(g+h*.08,x,h*.84,1.5*e);l.fillStyle="#6a2c7a",l.fillRect(g+h*.2,n*.4,h*.5,n*.18)}else{let x=g+h*.08,m=n*.22,p=h*.84,y=n*.7;if(!u)l.fillStyle="#0a0c12",l.fillRect(x,m,p,y);else{let b=l.createLinearGradient(0,m,0,m+y);b.addColorStop(0,d.hue),b.addColorStop(1,"rgba(0,0,0,0.25)"),l.globalAlpha=.85,l.fillStyle=b,l.fillRect(x,m,p,y),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,0.55)";for(let v=0;v<3;v++)l.fillRect(x+4*e,m+y*(.18+v*.22),p-8*e,2*e);l.fillStyle="rgba(0,0,0,0.7)",l.fillRect(x,m+y*.72,p,y*.28),l.beginPath(),l.arc(x+p*.62,m+y*.42,y*.08,0,Math.PI*2),l.fill(),l.fillRect(x+p*.62-y*.1,m+y*.5,y*.2,y*.25)}l.strokeStyle=u?"#000":"#232734",l.lineWidth=3*e,l.strokeRect(x,m,p,y)}if(d.awn&&!u)for(let x=0;x<8;x++)l.fillStyle=x%2?"#7a1f2c":"#d9d2c4",l.fillRect(g+h*.04+x*h*.92/8,n*.12,h*.92/8,n*.1);l.font=`900 ${n*.14}px ${An}`,l.textAlign="center",l.textBaseline="middle",u?(l.shadowColor=d.hue,l.shadowBlur=8*e,l.fillStyle=d.hue,l.fillText(d.name,g+h/2,n*.07),l.shadowBlur=0):(l.fillStyle="#05060a",l.fillRect(g+h*.1,0,h*.8,n*.14))})};return{map:$t(Zt(t,n,l=>c(l,!1)),{repeat:!0}),em:$t(Zt(t,n,l=>c(l,!0)),{repeat:!0})}}var lr=8,xf=4,ko=[{t:"\u30CD\u30AA\u30F3\u9152\u5834",c:"#2ec8e0"},{t:"\u591C\u660E\u3051\u9EBA",c:"#ff9a3a"},{t:"\u30DF\u30E9\u30A4\u6E6F",c:"#3fa8ff"},{t:"\u96FB\u8133\u30AB\u30D5\u30A7",c:"#2ec8e0"},{t:"\u30BC\u30ED\u85AC\u5C40",c:"#3fb8d8"},{t:"\u30B3\u30A4\u30F3\u5802",c:"#ff9a3a"},{t:"\u6708\u5F71\u30D0\u30FC",c:"#3a7bff"},{t:"\u30C8\u30FC\u30AF\u30F3\u5E02\u5834",c:"#ff2a46"},{t:"\u30CB\u30F3\u30B8\u30E3\u5802",c:"#ff2a46",sub:"NPG"},{t:"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6",c:"#ff2a3a",sub:"nSLAVE"},{t:"bWalletX",c:"#4da3ff",latin:!0},{t:"TOKENBLASTER",c:"#ff9a3a",latin:!0},{t:"NPG",c:"#ff2a46",latin:!0},{t:"\u713C\u304D\u9CE5",c:"#ff9a3a"},{t:"\u30AB\u30E9\u30AA\u30B1",c:"#3a7bff"},{t:"\u4E8C\u5341\u56DB\u6642\u9593",c:"#6fd8e8"},{t:"\u30B2\u30FC\u30E0\u8857",c:"#2ec8e0"},{t:"\u30B9\u30B7\u30FB\u30BC\u30ED",c:"#ff2a46"},{t:"\u30DB\u30C6\u30EB\u6708\u5149",c:"#6fb0ff"},{t:"\u4EBA\u5DE5\u5929\u4F7F",c:"#2ec8e0"},{t:"\u96FB\u6C17\u8857",c:"#3fa8ff"},{t:"BLOCK 21",c:"#27d8f0",latin:!0},{t:"\u591C\u52E4",c:"#ff2a46"},{t:"\u9EBB\u96C0",c:"#3fb8d8"},{t:"\u30D3\u30C3\u30C8\u30B3\u30A4\u30F3",c:"#ff9a3a"},{t:"\u4EEE\u60F3\u901A\u8CA8",c:"#2ec8e0"},{t:"\u5149\u306E\u5EAD",c:"#8fd8e8"},{t:"\u9244\u9AA8\u9152\u5834",c:"#3a7bff"},{t:"\u30B5\u30A4\u30D0\u30FC\u6574\u4F53",c:"#3a7bff"},{t:"\u96E8\u5BBF\u308A",c:"#3fa8ff"},{t:"\u30C9\u30ED\u30FC\u30F3\u4FBF",c:"#2ec8e0"},{t:"\u672A\u6765\u5802",c:"#3fa8ff"}];function xm(s=1){let e=128*s,t=512*s,n=e*lr,i=t*xf,r=Zt(n,i,a=>{a.fillStyle="#000",a.fillRect(0,0,n,i),ko.forEach((o,c)=>{let l=c%lr,u=Math.floor(c/lr),h=l*e,d=u*t;if(a.save(),a.translate(h,d),a.fillStyle="rgba(8,6,16,0.82)",a.fillRect(8*s,6*s,e-16*s,t-12*s),a.shadowColor=o.c,a.shadowBlur=14*s,a.strokeStyle=o.c,a.lineWidth=4*s,a.strokeRect(12*s,10*s,e-24*s,t-20*s),a.lineWidth=1.5*s,a.strokeRect(19*s,17*s,e-38*s,t-34*s),a.fillStyle=o.c,a.textAlign="center",a.textBaseline="middle",o.latin){a.save(),a.translate(e/2,t/2),a.rotate(-Math.PI/2);let f=Math.min(76*s,(t-70*s)/(o.t.length*.62));a.font=`900 ${f}px Impact, "Arial Black", sans-serif`,a.fillText(o.t,0,0),a.restore()}else{let f=[...o.t],g=o.sub?80*s:0,x=t-70*s-g,m=Math.min(74*s,x/f.length);a.font=`900 ${m}px ${An}`,f.forEach((p,y)=>a.fillText(p,e/2,36*s+m*(y+.55))),o.sub&&(a.save(),a.translate(e/2,t-44*s-g/2),a.rotate(-Math.PI/2),a.font=`800 ${Math.min(24*s,(g+20*s)/(o.sub.length*.7))}px Arial, sans-serif`,a.fillText(o.sub,0,0),a.restore())}a.shadowBlur=8*s,a.fillStyle="#fff";for(let f=0;f<9;f++)a.fillRect(e/2-1.5*s,24*s+f*((t-60*s)/8),3*s,3*s);a.restore()})});return{texture:$t(r,{aniso:4}),rect:a=>[a%lr/lr,1-(Math.floor(a/lr)+1)/xf,1/lr,1/xf]}}var ys=4,Mu=2;function vm(s=1){let e=512*s,t=Zt(e*ys,e*Mu,n=>{n.fillStyle="#000",n.fillRect(0,0,e*ys,e*Mu);let i=(a,o)=>{n.save(),n.translate(a%ys*e,Math.floor(a/ys)*e),n.beginPath(),n.rect(0,0,e,e),n.clip(),n.scale(s,s),o(n),n.restore()},r=(a,o,c,l,u,h=`900 ${l}px ${An}`,d=20)=>{a.font=h,a.textAlign="center",a.textBaseline="middle",a.shadowColor=u,a.shadowBlur=d,a.fillStyle=u,a.fillText(o,256,c),a.shadowBlur=0};i(0,a=>{a.strokeStyle="#ff3226",a.lineWidth=8,a.shadowColor="#ff2a1a",a.shadowBlur=24,a.beginPath(),a.ellipse(256,190,170,86,0,0,Math.PI*2),a.stroke(),a.fillStyle="#ff3a2a",a.beginPath(),a.arc(256,190,48,0,Math.PI*2),a.fill(),a.fillStyle="#000",a.fillRect(250,142,12,96),a.shadowBlur=0,r(a,"nSLAVE",340,64,"#f4f7ff",'900 64px "Arial Black", Impact, sans-serif',14),r(a,"T E R R O R N O D E",400,28,"#ff5646","700 28px Arial, sans-serif",10),r(a,"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",456,30,"#ffb0a8",`700 30px ${An}`,8)}),i(1,a=>{r(a,"TOKEN",190,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(a,"BLASTER",300,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(a,"\u30C8\u30FC\u30AF\u30F3\u30D6\u30E9\u30B9\u30BF\u30FC",400,40,"#ffe27a",`900 40px ${An}`,12),r(a,"\u6483\u3066\u3002\u30D6\u30ED\u30C3\u30AF\u3092\u3002",456,30,"#ff8a3a",`700 30px ${An}`,8)}),i(2,a=>{a.strokeStyle="#4da3ff",a.lineWidth=10,a.shadowColor="#2f7bff",a.shadowBlur=22,a.beginPath(),a.roundRect(150,70,212,168,28),a.stroke(),a.beginPath(),a.moveTo(150,120),a.lineTo(362,120),a.stroke(),a.shadowBlur=0,r(a,"bWalletX",340,94,"#8fc4ff",'900 94px "Arial Black", Impact, sans-serif',18),r(a,"\u30D3\u30FC\u30FB\u30A6\u30A9\u30EC\u30C3\u30C8",424,38,"#cfe4ff",`700 38px ${An}`,10)}),i(3,a=>{r(a,"NPG",200,190,"#ff2a46",'900 italic 190px Impact, "Arial Black", sans-serif',28),r(a,"NINJA PUNK GIRLS",340,44,"#ffc0c8","800 44px Arial, sans-serif",10),r(a,"\u30CB\u30F3\u30B8\u30E3\u30FB\u30D1\u30F3\u30AF\u30FB\u30AC\u30FC\u30EB\u30BA",410,32,"#ff7a88",`700 32px ${An}`,8)}),i(4,a=>{r(a,"NEO TOKYO",190,86,"#2ec8e0",'900 86px "Arial Black", Impact, sans-serif',24),r(a,"2048",300,150,"#ff2a46",'900 150px "Arial Black", Impact, sans-serif',26),r(a,"\u30CD\u30AA\u6771\u4EAC",410,66,"#cfeaf4",`900 66px ${An}`,14)}),i(5,a=>{r(a,"nSLAVE",110,58,"#f4f7ff",'900 58px "Arial Black", Impact, sans-serif',16),r(a,"NOW PATENTED:",214,40,"#ff5646","800 40px Arial, sans-serif",10),r(a,"YOUR SOUL.",290,84,"#ff2a3a",'900 84px "Arial Black", Impact, sans-serif',24),r(a,"\u3042\u306A\u305F\u306E\u9B42\u306B\u7279\u8A31\u3092",400,44,"#ffb0a8",`800 44px ${An}`,10),r(a,"terms apply \xB7 see you in court",462,22,"#8a98a8","600 22px Arial, sans-serif",0)}),i(6,a=>{r(a,"nSLAVE",84,42,"#f4f7ff",'900 42px "Arial Black", Impact, sans-serif',12),r(a,"SOUL",190,118,"#ff2a3a",'900 118px "Arial Black", Impact, sans-serif',24),r(a,"CHAIN\u2122",300,96,"#2ec8e0",'900 96px "Arial Black", Impact, sans-serif',22),r(a,"(chain of tools)",380,30,"#ffc0b8","italic 700 30px Arial, sans-serif",8),r(a,"\u30BD\u30A6\u30EB\u30C1\u30A7\u30FC\u30F3",450,42,"#80d8e8",`800 42px ${An}`,10)}),i(7,a=>{r(a,"nSLAVE",96,50,"#f4f7ff",'900 50px "Arial Black", Impact, sans-serif',14),r(a,"100% OPEN SOURCE",190,46,"#2ec8e0","800 46px Arial, sans-serif",12),r(a,"BUILD ON ANY CHAIN",262,38,"#c0e8f0","700 38px Arial, sans-serif",8),r(a,"AS LONG AS IT\u2019S BSV",330,40,"#ff9a3a","800 40px Arial, sans-serif",12),r(a,"\u3069\u306E\u30C1\u30A7\u30FC\u30F3\u3067\u3082\u3002BSV\u306A\u3089\u3002",420,34,"#80d8e8",`700 34px ${An}`,8)})});return{texture:$t(t,{aniso:4}),rect:n=>[n%ys/ys,1-(Math.floor(n/ys)+1)/Mu,1/ys,1/Mu]}}function _m(s=1){let e=384*s,t=256*s,n=[{c:"#2ec8e0",name:"\u30CD\u30AA\u8336",cans:["#ff4a4a","#e8b040","#5fc8e0","#4a7cd8"]},{c:"#3a8cff",name:"\u30BC\u30ED\u6C34",cans:["#8fd8e8","#d8e8f0","#4a7cd8","#ff9a3a"]},{c:"#ff9a3a",name:"\u96FB\u6C60\u30FB\u9EBA",cans:["#ff8a3a","#ff3b3b","#5fc8e0","#e6e6e6"]}],i=(r,a)=>{r.fillStyle=a?"#000":"#1b1e27",r.fillRect(0,0,e,t),n.forEach((o,c)=>{let l=c*128*s;r.fillStyle=a?o.c:"#222633",r.fillRect(l+8*s,8*s,112*s,30*s),r.fillStyle=a?"#000":o.c,r.font=`900 ${20*s}px ${An}`,r.textAlign="center",r.textBaseline="middle",r.fillText(o.name,l+64*s,24*s),r.fillStyle=a?"rgba(255,255,255,0.4)":"#0b0d13",r.fillRect(l+8*s,44*s,112*s,140*s);for(let u=0;u<4;u++)for(let h=0;h<5;h++)r.fillStyle=o.cans[(u+h)%4],r.globalAlpha=a?.9:.55,r.fillRect(l+(14+h*21)*s,(50+u*33)*s,14*s,26*s),r.globalAlpha=1;for(let u=0;u<5;u++)r.fillStyle=a?o.c:"#3a3f4e",r.fillRect(l+(14+u*21)*s,192*s,14*s,8*s);r.fillStyle=a?"#000":"#07080c",r.fillRect(l+20*s,214*s,88*s,28*s)})};return{map:$t(Zt(e,t,r=>i(r,!1))),em:$t(Zt(e,t,r=>i(r,!0)))}}function ym(s,e,t,n,i=1){let r=2048*i,a=512*i,o=cr(s),c=Zt(r,a,u=>{u.clearRect(0,0,r,a);let h=0;for(;h<r;){let f=(30+o()*90)*i,g=(60+Math.pow(o(),1.6)*380)*i;u.fillStyle=e,u.fillRect(h,a-g,f,g),o()<.35&&u.fillRect(h+f*.2,a-g-40*i*o(),f*.6,40*i),o()<.18&&u.fillRect(h+f*.48,a-g-70*i,3*i,70*i);for(let x=a-g+6*i;x<a-4*i;x+=9*i)for(let m=h+4*i;m<h+f-4*i;m+=7*i)if(o()<n){let p=o();u.fillStyle=p>.93?"#ff6a6a":p>.82?"#ffc890":p>.3?"#8fb8e0":"#5fd0e0",u.globalAlpha=.35+o()*.5,u.fillRect(m,x,3*i,4*i),u.globalAlpha=1}if(o()<.22){let x=["#ff2a46","#2ec8e0","#3a8cff","#2ec8e0"][Math.floor(o()*4)];u.fillStyle=x,u.globalAlpha=.9,u.fillRect(h+f-6*i,a-g+18*i,4*i,(50+o()*100)*i),u.globalAlpha=1}g>300*i&&o()<.7&&(u.fillStyle="#ff3030",u.fillRect(h+f*.5-2*i,a-g-3*i,4*i,4*i)),h+=f+o()*6*i}let d=u.createLinearGradient(0,0,0,a);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,t),u.globalCompositeOperation="source-atop",u.fillStyle=d,u.fillRect(0,0,r,a),u.globalCompositeOperation="source-over"}),l=$t(c,{repeat:!1});return l.wrapS=Yt,l}function Mm(s=1){let e=1024*s,t=1024*s,n=16,i=20,r=cr(77),a=[];for(let c=0;c<n*i;c++)a.push(r());let o=(c,l)=>{c.fillStyle=l?"#000":"#08101e",c.fillRect(0,0,e,t);let u=e/n,h=t/i;for(let d=0;d<i;d++)for(let f=0;f<n;f++){let g=a[d*n+f];if(l)g>.88&&(c.globalAlpha=.25+(g-.88)*2.2,c.fillStyle=g>.97?"#ffc890":"#9fc4e8",c.fillRect(f*u+2,d*h+2,u-4,h*.78),c.globalAlpha=1);else{let x=c.createLinearGradient(f*u,d*h,f*u+u,d*h+h);x.addColorStop(0,"#16294a"),x.addColorStop(1,"#070d1a"),c.fillStyle=x,c.fillRect(f*u+1,d*h+1,u-2,h*.82),c.fillStyle="#0e1626",c.fillRect(f*u,d*h+h*.84,u,h*.16)}}c.strokeStyle=l?"#000":"#1b2740",c.lineWidth=Math.max(1,2*s);for(let d=0;d<=n;d++)c.beginPath(),c.moveTo(d*(e/n),0),c.lineTo(d*(e/n),t),c.stroke();for(let d=0;d<=i;d++)c.beginPath(),c.moveTo(0,d*(t/i)),c.lineTo(e,d*(t/i)),c.stroke()};return{map:$t(Zt(e,t,c=>o(c,!1)),{repeat:!0,aniso:8}),em:$t(Zt(e,t,c=>o(c,!0)),{repeat:!0,aniso:8})}}function bm(s=1){let e=1024*s,t=256*s,n=Zt(e,t,i=>{let r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"#fff2d6"),r.addColorStop(.55,"#ffd9a0"),r.addColorStop(1,"#a8764a"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,0.9)";for(let a=0;a<8;a++)i.fillRect(a*(e/8)+e/32,8*s,e/16,6*s);i.fillStyle="rgba(40,24,14,0.55)";for(let a=0;a<=16;a++)i.fillRect(a*(e/16)-s,0,2*s,t);i.fillStyle="rgba(60,30,20,0.75)",i.fillRect(e*.3,t*.62,e*.4,t*.14),i.fillStyle="rgba(20,10,6,0.85)";for(let a of[.12,.22,.4,.58,.77,.9])i.beginPath(),i.arc(e*a,t*.46,t*.04,0,Math.PI*2),i.fill(),i.fillRect(e*a-t*.05,t*.5,t*.1,t*.34);i.fillStyle="#240406",i.fillRect(e*.38,t*.1,e*.24,t*.36),i.fillStyle="#ff3226",i.beginPath(),i.ellipse(e*.5,t*.28,e*.07,t*.1,0,0,Math.PI*2),i.fill(),i.fillStyle="#000",i.fillRect(e*.498,t*.19,e*.004,t*.18)});return $t(n)}var bu=null;function Vo(){return bu||(bu=$t(Zt(128,128,s=>{let e=s.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,128,128)}),{srgb:!1}),bu)}var Su=null;function Sm(){return Su||(Su=$t(Zt(128,128,s=>{s.strokeStyle="#fff",s.lineWidth=5,s.beginPath(),s.arc(64,64,52,0,Math.PI*2),s.stroke()}),{srgb:!1}),Su)}function Em(s,e=1){let t=Math.round(1024*e),n=Math.round(288*e),i=cr(s),r=Array.from({length:4},()=>{let o=i();return{kind:o<.5?"shutter":o<.72?"half":o<.88?"door":"blank",tone:26+Math.floor(i()*18),grime:i()}}),a=(o,c)=>{o.fillStyle=c?"#000":"#1c1d21",o.fillRect(0,0,t,n);let l=t/4;r.forEach((u,h)=>{let d=h*l,f=l*.06;if(c){if(u.kind==="half"){let m=o.createLinearGradient(0,n*.72,0,n);m.addColorStop(0,"rgba(255,240,215,0.15)"),m.addColorStop(1,"rgba(255,240,215,0.9)"),o.fillStyle=m,o.fillRect(d+f,n*.72,l-f*2,n*.28)}u.kind==="door"&&(o.fillStyle="#fff",o.fillRect(d+l*.47,n*.08,l*.06,n*.05));return}let g=u.tone;if(o.fillStyle=`rgb(${g},${g},${g+3})`,o.fillRect(d+2,0,l-4,n),u.kind==="shutter"||u.kind==="half"){let m=n*.12,p=u.kind==="half"?n*.72:n;o.fillStyle="#0e0f12",o.fillRect(d+f-4,m-6,l-f*2+8,8);for(let y=m;y<p;y+=7*e)o.fillStyle=`rgb(${g+22},${g+22},${g+24})`,o.fillRect(d+f,y,l-f*2,4*e),o.fillStyle=`rgb(${g+6},${g+6},${g+8})`,o.fillRect(d+f,y+4*e,l-f*2,3*e);o.fillStyle="#08090b",o.fillRect(d+f,p-3,l-f*2,3),u.kind==="half"?(o.fillStyle="#2b2620",o.fillRect(d+f,p,l-f*2,n-p)):(o.fillStyle="#0a0a0c",o.fillRect(d+l*.48,p-16,10,12))}else u.kind==="door"&&(o.fillStyle="#121316",o.fillRect(d+l*.36,n*.18,l*.28,n*.82),o.strokeStyle="#2c2e33",o.lineWidth=2,o.strokeRect(d+l*.38,n*.22,l*.24,n*.36),o.strokeRect(d+l*.38,n*.62,l*.24,n*.32));let x=o.createLinearGradient(0,0,0,n);x.addColorStop(0,`rgba(0,0,0,${.25+u.grime*.3})`),x.addColorStop(.3,"rgba(0,0,0,0)"),x.addColorStop(.85,"rgba(0,0,0,0)"),x.addColorStop(1,`rgba(0,0,0,${.35+u.grime*.3})`),o.fillStyle=x,o.fillRect(d,0,l,n);for(let m=0;m<6;m++)o.fillStyle=`rgba(0,0,0,${.05+i()*.12})`,o.fillRect(d+i()*l,0,1+i()*3,n*(.2+i()*.6));o.fillStyle="#060607",o.fillRect(d,0,3,n)})};return{map:$t(Zt(t,n,o=>a(o,!1)),{repeat:!0}),em:$t(Zt(t,n,o=>a(o,!0)),{repeat:!0})}}function Tm(s){return{uT:{value:0},uFog:{value:s.density},uFogColor:{value:new Ee(s.color)},uPx:{value:700}}}var Eu="float fadeAt(float d, float u){ return exp(-u*u*d*d*0.6); }";function wm(s,e){return new lt({side:Qt,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uFogColor:e.uFogColor},vertexShader:`
      attribute vec4 aRect; attribute vec3 aAnim;
      varying vec2 vUv; varying vec3 vAnim; varying float vD;
      void main(){
        vUv = aRect.xy + uv * aRect.zw; vAnim = aAnim;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
        vD = -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform sampler2D uMap; uniform float uT, uFog; uniform vec3 uFogColor;
      varying vec2 vUv; varying vec3 vAnim; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      void main(){
        vec3 c = texture2D(uMap, vUv).rgb;
        float m = vAnim.y, ph = vAnim.x;
        float f = 1.0;
        if (m > 0.5 && m < 1.5) f = 0.55 + 0.45 * step(0.12, h(floor(uT * 11.0 + ph * 40.0)));        // buzz
        else if (m > 1.5 && m < 2.5) f = 0.2 + 0.8 * step(0.5, fract(uT * vAnim.z + ph));                 // blink
        else if (m > 2.5 && m < 3.5) f = 0.45 + 0.55 * smoothstep(-0.2, 0.9, sin(vUv.y * 60.0 - uT * 6.0 * vAnim.z + ph * 6.28)); // chase
        else if (m > 3.5) f = mix(1.0, 0.1, step(0.93, h(floor(uT * 3.0 + ph * 20.0))));                   // dying tube
        c *= f * 1.45;
        float fog = 1.0 - exp(-uFog * uFog * vD * vD);
        c = mix(c, uFogColor * 0.6, fog * 0.75);
        gl_FragColor = vec4(c, 1.0);
      }`})}function Am(s,e,t,n,i){return new lt({transparent:!0,depthWrite:!1,blending:ln,side:Qt,uniforms:{uMap:{value:s},uRect:{value:new Rt(...e)},uT:t.uT,uFog:t.uFog,uTint:{value:new Ee(n)},uPh:{value:i}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform sampler2D uMap; uniform vec4 uRect; uniform float uT, uFog, uPh; uniform vec3 uTint;
      varying vec2 vUv; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      ${Eu}
      void main(){
        float band = step(0.965, h(floor(vUv.y * 24.0) + floor(uT * 7.0 + uPh * 9.0)));
        float sh = band * (h(floor(uT * 7.0) + vUv.y * 24.0) - 0.5) * 0.12;
        vec2 uv = uRect.xy + vec2(vUv.x + sh, vUv.y) * uRect.zw;
        float s = 0.0035;
        vec3 c = vec3(texture2D(uMap, uv + vec2(s, 0.0)).r, texture2D(uMap, uv).g, texture2D(uMap, uv - vec2(s, 0.0)).b);
        c *= uTint;
        float scan = 0.72 + 0.28 * sin(vUv.y * 420.0 + uT * 8.0);
        float sweep = 0.75 + 0.5 * smoothstep(0.0, 0.1, abs(fract(vUv.y * 0.6 - uT * 0.18 + uPh) - 0.5) - 0.4);
        float flick = 0.85 + 0.15 * step(0.1, h(floor(uT * 13.0 + uPh * 31.0)));
        float edge = smoothstep(0.0, 0.05, vUv.x) * smoothstep(1.0, 0.95, vUv.x) * smoothstep(0.0, 0.05, vUv.y) * smoothstep(1.0, 0.95, vUv.y);
        gl_FragColor = vec4(c * scan * sweep * flick * edge * 1.7 * fadeAt(vD, uFog), 1.0);
      }`})}function Rm(s,e,t){return new lt({transparent:!0,depthWrite:!1,blending:ln,side:Qt,uniforms:{uT:s.uT,uFog:s.uFog,uA:{value:new Ee(e)},uB:{value:new Ee(t)}},vertexShader:`
      uniform float uT; varying vec3 vN; varying vec3 vV; varying float vY; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      void main(){
        vec4 wp = modelMatrix * vec4(position, 1.0);
        float g = step(0.985, h(floor(wp.y * 0.9) + floor(uT * 6.0)));
        wp.x += g * (h(floor(uT * 6.0) + wp.y) - 0.5) * 2.2;
        vec4 mv = viewMatrix * wp;
        vN = normalize(mat3(viewMatrix) * mat3(modelMatrix) * normal); vV = -mv.xyz; vY = wp.y; vD = -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float uT, uFog; uniform vec3 uA, uB; varying vec3 vN; varying vec3 vV; varying float vY; varying float vD;
      ${Eu}
      void main(){
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 1.6);
        float bands = 0.55 + 0.45 * sin(vY * 3.2 - uT * 2.4);
        float fine = 0.7 + 0.3 * sin(vY * 38.0 + uT * 14.0);
        float climb = smoothstep(0.92, 1.0, sin(vY * 0.35 - uT * 1.1));
        vec3 c = mix(uA, uB, clamp(vY * 0.018 - 0.2 + 0.25 * sin(uT * 0.5), 0.0, 1.0));
        float k = (0.12 + rim * 1.15) * bands * fine + climb * 0.9;
        gl_FragColor = vec4(c * k * 3.0 * fadeAt(vD, uFog * 0.5), 1.0);
      }`})}function Tu(s,e,t,n,i){return new lt({transparent:!0,depthWrite:!1,blending:ln,side:Qt,uniforms:{uC:{value:new Ee(s)},uK:{value:e},uP:{value:t},uInv:{value:n?1:0},uT:i.uT,uFog:i.uFog},vertexShader:`
      varying vec3 vN; varying vec3 vV; varying float vY; varying float vD; varying vec3 vW;
      void main(){
        #ifdef USE_INSTANCING
          mat4 im = instanceMatrix;
        #else
          mat4 im = mat4(1.0);
        #endif
        vec4 wp = modelMatrix * im * vec4(position, 1.0);
        vec4 mv = viewMatrix * wp;
        vN = normalize(mat3(viewMatrix) * mat3(modelMatrix) * mat3(im) * normal); vV = -mv.xyz; vY = uv.y; vD = -mv.z; vW = wp.xyz;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 uC; uniform float uK, uP, uInv, uT, uFog; varying vec3 vN; varying vec3 vV; varying float vY; varying float vD; varying vec3 vW;
      ${Eu}
      void main(){
        float f = abs(dot(normalize(vN), normalize(vV)));
        float ax = pow(clamp(mix(vY, 1.0 - vY, uInv), 0.0, 1.0), uP);
        float dust = 0.82 + 0.18 * sin(vW.y * 0.7 + vW.x * 0.3 + uT * 0.8) * sin(vW.z * 0.4 - uT * 0.5);
        float edge = smoothstep(0.0, 0.7, f);
        float near = smoothstep(0.4, 3.0, vD);
        gl_FragColor = vec4(uC * uK * pow(f, 1.4) * edge * ax * dust * near * fadeAt(vD, uFog * 0.7), 1.0);
      }`})}function Cm(s,e){return new lt({transparent:!0,depthWrite:!1,blending:ln,uniforms:{uT:s.uT,uFog:s.uFog,uC:{value:new Ee(e)}},vertexShader:`
      attribute vec4 aSeed; attribute float aEnd; uniform float uT;
      varying float vA; varying float vD;
      void main(){
        float speed = 26.0 + aSeed.w * 14.0;
        float y = mod(position.y - uT * speed, 38.0);
        vec3 p = vec3(position.x + y * 0.04, y, position.z);
        float len = 0.55 + aSeed.w * 0.7;
        p.y += aEnd * len; p.x -= aEnd * len * 0.04;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        vD = -mv.z;
        vA = (1.0 - aEnd * 0.85) * smoothstep(0.0, 1.5, p.y) * smoothstep(1.0, 4.0, vD);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform vec3 uC; uniform float uFog; varying float vA; varying float vD; void main(){ gl_FragColor = vec4(uC * vA * 0.5 * exp(-uFog*uFog*vD*vD*0.5), 1.0); }"})}function Pm(s,e){return new lt({transparent:!0,depthWrite:!1,blending:ln,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog},vertexShader:`
      attribute vec2 aPh; uniform float uT; varying vec2 vUv; varying float vL; varying float vD;
      void main(){
        float life = fract(uT * aPh.y + aPh.x);
        vL = life; vUv = uv;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position * (0.08 + life * 0.55), 1.0);
        vD = -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform float uFog; varying vec2 vUv; varying float vL; varying float vD; void main(){ float a = texture2D(uMap, vUv).r * pow(1.0 - vL, 2.0) * smoothstep(0.0, 0.08, vL); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * a * 0.55 * exp(-uFog*uFog*vD*vD*0.6), 1.0); }"})}function Im(s,e){return new lt({transparent:!0,depthWrite:!1,blending:ln,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uPx:e.uPx},vertexShader:`
      attribute vec3 aColor; attribute float aSize; attribute vec2 aPh;
      uniform float uT, uPx, uFog; varying vec3 vC; varying float vK;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        float d = max(0.5, -mv.z);
        float m = aPh.y, k = 1.0;
        if (m > 0.5 && m < 1.5) k = step(0.6, fract(uT * 0.55 + aPh.x));              // aircraft beacon
        else if (m > 1.5 && m < 2.5) k = 0.65 + 0.35 * step(0.15, h(floor(uT * 9.0 + aPh.x * 50.0))); // flicker
        else if (m > 2.5) k = 0.75 + 0.25 * sin(uT * 1.7 + aPh.x * 6.28);              // lantern sway
        vC = aColor; vK = k * exp(-uFog * uFog * d * d * 0.35) * smoothstep(3.0, 14.0, d) * 0.8;
        gl_PointSize = clamp(aSize * uPx / d, 1.5, 96.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vK; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vC * a * vK, 1.0); }"})}function Dm(s,e){return new lt({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uPx:e.uPx,uC:{value:new Ee("#6a94ac")}},vertexShader:`
      attribute vec3 aVent; attribute vec2 aSeed; uniform float uT, uPx, uFog; varying float vA; varying vec3 vWp;
      void main(){
        float life = fract(uT * (0.18 + aSeed.y * 0.12) + aSeed.x);
        vec3 p = aVent + vec3(sin(aSeed.x * 40.0 + life * 3.0) * life * 1.1, life * 5.0, cos(aSeed.x * 23.0) * life * 0.8);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = max(0.5, -mv.z);
        vA = sin(life * 3.14159) * 0.09 * exp(-uFog * uFog * d * d * 0.5); vWp = p;
        gl_PointSize = clamp((0.9 + life * 3.6) * uPx / d, 1.0, 140.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform vec3 uC; varying float vA; varying vec3 vWp; void main(){ float a = texture2D(uMap, gl_PointCoord).r; vec3 tint = uC + vec3(0.02, 0.1, 0.16) * smoothstep(-2.0, 2.0, vWp.x) ; gl_FragColor = vec4(tint * 0.7, a * vA); }"})}function Lm(s,e,t){return new lt({transparent:!0,depthWrite:!1,side:Qt,uniforms:{uT:s.uT,uC:{value:new Ee(e)},uK:{value:t}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uK; uniform vec3 uC; varying vec2 vUv; varying float vD;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vUv * vec2(7.0, 2.0) + vec2(uT * 0.03, uT * 0.01);
        float n = vn(p) * 0.6 + vn(p * 2.3 + 7.0) * 0.3 + vn(p * 5.1) * 0.1;
        float a = smoothstep(0.35, 0.85, n) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y) * smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        a *= smoothstep(10.0, 34.0, vD);
        gl_FragColor = vec4(uC, a * uK);
      }`})}function Nm(s,e){s.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWp; varying vec4 vRc; uniform mat4 uReflMat;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vec4 wpp = modelMatrix * vec4(transformed, 1.0); vWp = wpp.xyz; vRc = uReflMat * wpp;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
        varying vec3 vWp; varying vec4 vRc; uniform sampler2D tReflect; uniform float uReflOn, uT, uWet;
        float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float gn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(gh(i),gh(i+vec2(1,0)),f.x), mix(gh(i+vec2(0,1)),gh(i+vec2(1,1)),f.x), f.y); }
        float gf(vec2 p){ return gn(p)*0.55 + gn(p*2.1+3.7)*0.3 + gn(p*4.7+1.3)*0.15; }
        float puddleAt(vec3 w){
          float n = gf(w.xz * 0.16 + 4.0);
          float lane = smoothstep(14.0, 4.0, abs(w.x)) * 0.12; // the middle of the street dries slightly less
          return smoothstep(0.5 - lane, 0.62 - lane, n) * uWet;
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        float puddle = puddleAt(vWp);
        roughnessFactor = mix(roughnessFactor * 0.8, 0.025, puddle);
        diffuseColor.rgb *= mix(1.0, 0.4, puddle);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        normal = normalize(mix(normal, nonPerturbedNormal, puddle));`).replace("#include <opaque_fragment>",`
        {
          vec3 vd = normalize(vViewPosition);
          float ndv = clamp(dot(normal, vd), 0.0, 1.0);
          float fres = 0.04 + 0.96 * pow(1.0 - ndv, 5.0);
          if (uReflOn > 0.5) {
            vec2 ruv = vRc.xy / vRc.w;
            vec2 wob = (vec2(gn(vWp.xz * 3.1 + uT * 0.6), gn(vWp.xz * 3.1 + 9.0 - uT * 0.5)) - 0.5) * (0.004 + puddle * 0.003);
            ruv += wob + normal.xz * 0.0;
            float blur = mix(0.012, 0.0015, puddle);
            vec3 r = texture2D(tReflect, ruv).rgb * 0.36
                   + texture2D(tReflect, ruv + vec2(blur, 0.0)).rgb * 0.16 + texture2D(tReflect, ruv - vec2(blur, 0.0)).rgb * 0.16
                   + texture2D(tReflect, ruv + vec2(0.0, blur * 1.6)).rgb * 0.16 + texture2D(tReflect, ruv - vec2(0.0, blur * 1.6)).rgb * 0.16;
            float amt = clamp(fres * (0.3 + 0.3 * uWet) + puddle * 0.5, 0.0, 0.8);
            outgoingLight = mix(outgoingLight, r * (1.0 + puddle * 0.3), amt);
          }
        }
        #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"wetground-v1"}function Um(s){return new lt({transparent:!0,depthWrite:!1,blending:ln,uniforms:{uT:s.uT,uFog:s.uFog,uLook:{value:new oe},uK:{value:2.1}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uFog, uK; uniform vec2 uLook; varying vec2 vUv; varying float vD;
      ${Eu}
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      void main(){
        vec2 p = (vUv - 0.5) * vec2(2.0 * 16.0 / 9.0, 2.0);
        float cyc = fract(uT / 6.0);
        float blink = smoothstep(0.0, 0.02, cyc) * smoothstep(0.075, 0.04, cyc);
        float hl = max(0.0, 0.62 * (1.0 - pow(abs(p.x) / 1.3, 2.2))) * (1.0 - blink * 0.97);
        float ay = abs(p.y);
        vec3 col = vec3(0.0);
        float inside = step(ay, hl);
        vec2 c = uLook * vec2(0.4, 0.16);
        vec2 q = p - c;
        float r = length(q);
        float ang = atan(q.y, q.x);
        float streak = 0.55 + 0.45 * sin(ang * 22.0 + uT * 0.6) * sin(ang * 7.0 - uT * 0.3);
        vec3 sclera = vec3(0.34, 0.025, 0.03) * (0.6 + 0.4 * h(floor(p * 40.0)));
        vec3 iris = mix(vec3(3.4, 0.55, 0.16), vec3(1.5, 0.05, 0.03), smoothstep(0.1, 0.34, r)) * streak;
        col = sclera;
        col = mix(col, iris, smoothstep(0.35, 0.32, r));
        float slit = 0.045 + 0.03 * sin(uT * 1.3);
        col = mix(col, vec3(0.0), step(abs(q.x), slit) * step(abs(q.y), 0.3) * step(r, 0.34));
        col += vec3(2.2, 1.0, 0.8) * smoothstep(0.06, 0.0, length(q - vec2(-0.1, 0.12))) * 0.7; // catchlight
        col *= inside * (0.65 + 0.35 * smoothstep(hl, hl * 0.2, ay)); // shaded toward the lids
        float lid = smoothstep(0.045, 0.0, abs(ay - hl)) * step(hl, 0.62) * step(0.01, hl);
        col += vec3(4.0, 0.45, 0.25) * lid * (0.85 + 0.15 * sin(uT * 9.0));
        // HUD ring
        float rr = length(p);
        float ticks = step(0.5, fract(atan(p.y, p.x) * 24.0 / 6.2832 + uT * 0.05));
        col += vec3(3.0, 0.3, 0.2) * smoothstep(0.012, 0.0, abs(rr - 0.96)) * (0.35 + 0.65 * ticks);
        col += vec3(2.2, 0.2, 0.15) * smoothstep(0.01, 0.0, abs(rr - 0.9)) * step(0.5, fract(atan(p.y, p.x) * 5.0 / 6.2832 - uT * 0.12)) * 0.8;
        // halo
        col += vec3(1.0, 0.08, 0.05) * exp(-pow(max(0.0, ay - hl), 1.0) * 3.0) * exp(-abs(p.x) * 1.1) * 0.35 * step(0.001, hl + 0.001);
        float scan = 0.85 + 0.15 * sin(vUv.y * 300.0 + uT * 6.0);
        float edge = smoothstep(0.0, 0.04, vUv.x) * smoothstep(1.0, 0.96, vUv.x) * smoothstep(0.0, 0.04, vUv.y) * smoothstep(1.0, 0.96, vUv.y);
        gl_FragColor = vec4(col * scan * edge * uK * fadeAt(vD, uFog), 1.0);
      }`})}function Fm(s){let e=Rm(s,"#2ec8e0","#ff2a46"),t=[],n=x=>(t.push(x),x),i=(x,m,p=0,y=0,b=0)=>{let v=new We(x,e);return v.position.set(p,y,b),v.userData.noAO=!0,m.add(v),v},r=new Gt,a=new Gt;r.add(a);let o=n(new ro([new oe(.15,1),new oe(.2,.88),new oe(.26,.62),new oe(.34,.36),new oe(.4,.2)],28));i(o,a);for(let x of[-1,1])i(n(new ms(.05,.2,4,10)),a,x*.08,.1,0);i(n(new ms(.13,.3,6,14)),a,0,1.2,0).scale.set(1.15,1,.8);let c=i(n(new Mi(.17,.045,8,28)),a,0,1.02,0);c.rotation.x=Math.PI/2,i(n(new _t(.26,.2,.06)),a,0,1.02,-.2),i(n(new rn(.045,.05,.1,10)),a,0,1.43,0);let l=new Gt;l.position.set(0,1.56,0),a.add(l),i(n(new Pn(.105,18,14)),l).scale.set(.95,1.08,1),i(n(new Pn(.125,16,12)),l,0,.02,-.03).scale.set(1,1,1.05),i(n(new Pn(.07,12,10)),l,0,.16,-.02),i(n(new Gs(.1,.55,12,1,!0)),l,0,-.26,-.1);let u=i(n(new Mi(.34,.01,6,48)),l,0,.02,-.22),h=[];for(let x of[-1,1]){let m=new Gt;m.position.set(x*.2,1.34,0),a.add(m),i(n(new ms(.04,.26,4,8)),m,0,-.17,0);let p=new Gt;p.position.set(0,-.34,0),m.add(p),i(n(new ms(.035,.24,4,8)),p,0,-.15,0),i(n(new Pt(.22,.42)),p,x*.05,-.2,0),h.push({sh:m,el:p})}let d=i(n(new Mi(.55,.012,6,56)),r,0,.01,0);d.rotation.x=Math.PI/2;let f=i(n(new Mi(.4,.008,6,48)),r,0,.01,0);return f.rotation.x=Math.PI/2,{group:r,update:x=>{a.rotation.y=Math.sin(x*.25)*.7,a.rotation.z=Math.sin(x*.9)*.025,a.position.y=Math.sin(x*1.3)*.015,l.rotation.z=Math.sin(x*.7+1)*.07,l.rotation.y=Math.sin(x*.4)*.25,u.rotation.z=x*.6;let[m,p]=h;p.sh.rotation.z=-2.4+Math.sin(x*.9)*.1,p.el.rotation.z=-.5+Math.sin(x*3.2)*.55,m.sh.rotation.z=.35+Math.sin(x*.7)*.05,m.el.rotation.z=.5,d.scale.setScalar(1+Math.sin(x*1.5)*.04),f.rotation.z=x*.8},dispose:()=>{t.forEach(x=>x.dispose()),e.dispose()}}}var HM={z:-70,w:34,h:56,d:26,cols:8,rows:10,winY0:12};var Ln=(s,e,t,n,i,r,a,o)=>{let c=new _t(e,t,n);c.translate(i,r,a);let l=c.attributes.position.count,u=new Float32Array(l*3);for(let h=0;h<l;h++)u.set(o,h*3);c.setAttribute("color",new vt(u,3)),s.push(c)},wu=s=>{let e=an(s.map(t=>t.index?t.toNonIndexed():t),!1);return s.forEach(t=>t.dispose()),e},Au=(s,e=2.4)=>new St({color:new Ee(s).multiplyScalar(e),toneMapped:!1}),Nt=27,Ru=51,Ms=["#2ec8e0","#2ec8e0","#3a8cff","#2ec8e0","#3a8cff","#ff2a46","#2ec8e0","#4da3ff"];function Om({renderer:s,scene:e,high:t,look:n,vexvoid:i=!1}){let r=t?1:.5,a=(_,C)=>t?_:C,o=new Gt,c=[],l=_=>(c.push(_),_),u=cr(2048),h=(_,C)=>_+(C-_)*u(),d=_=>Math.floor(u()*_),f=HM,g=new Bs;g.add(new We(new Pn(50,24,16),new lt({side:dn,vertexShader:"varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 p; void main(){ float h = normalize(p).y; vec3 lo = vec3(0.05,0.10,0.16); vec3 hi = vec3(0.01,0.02,0.07); gl_FragColor = vec4(mix(lo, hi, smoothstep(-0.1,0.7,h)),1.); }"})));let x=(_,C,U,V,k,J,ce)=>{let ie=new We(new Pt(U,V),new St({color:new Ee(_).multiplyScalar(C),side:Qt,toneMapped:!1}));ie.position.set(k,J,ce),ie.lookAt(0,0,0),g.add(ie)};x("#ff2a2a",7,30,4,0,16,-40),x("#27c8e0",5,34,3,-30,10,-10),x("#ffa24a",3,30,3,30,12,-6),x("#2ec8e0",4,20,5,18,24,20),x("#ff2a46",3,8,16,-34,18,-26),x("#2ec8e0",5,6,20,34,20,-30),x("#3a8cff",4,6,12,-20,14,-44),x("#ffffff",3,14,2,-8,32,-12);let m=new ra(s),p=m.fromScene(g,.03).texture;m.dispose(),g.traverse(_=>{let C=_;C.isMesh&&(C.geometry.dispose(),C.material.dispose())}),e.environment=p,e.environmentIntensity=.85,e.background=new Ee("#05060f");let y=new Xa("#071420",.0066);e.fog=y;let b=Tm(y),v=l(new lt({side:dn,depthWrite:!1,fog:!1,uniforms:{uT:b.uT},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
        varying vec3 vP; uniform float uT;
        float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float a=0.5, s=0.0; for(int i=0;i<5;i++){ s+=a*vn(p); p*=2.03; a*=0.5; } return s; }
        void main(){
          vec3 d = normalize(vP);
          float y = d.y;
          vec3 c = mix(vec3(0.04,0.11,0.18), vec3(0.02,0.05,0.12), smoothstep(0.0,0.28,y));
          c = mix(c, vec3(0.006,0.01,0.03), smoothstep(0.2,0.8,y));
          vec2 cp = vec2(atan(d.x,d.z)*1.8 + uT*0.006, y*3.0);
          float cl = fbm(cp*2.4);
          c += vec3(0.07,0.20,0.30) * cl * smoothstep(0.0,0.35,y) * (1.0-smoothstep(0.3,0.8,y)) * 0.6;
          vec3 td = normalize(vec3(0.0, 0.55, -1.0));
          c += vec3(0.6,0.03,0.02) * pow(max(dot(d, td), 0.0), 18.0) * 0.8;
          vec2 g = floor(vec2(atan(d.x,d.z)*80.0, y*120.0));
          float s = step(0.997, h21(g)) * smoothstep(0.25,0.6,y) * (1.0 - cl);
          c += vec3(s) * (0.6 + 0.4*sin(uT*2.0 + h21(g)*30.0));
          gl_FragColor = vec4(c, 1.0);
        }`})),T=new We(l(new Pn(400,32,20)),v);T.renderOrder=-10,T.userData.noAO=!0,o.add(T),o.add(new ho("#4f78b8","#150a14",.38));let A=new $s("#78a8ff",.9);if(A.position.set(-40,70,10),A.target.position.set(0,0,-40),t){A.castShadow=!0,A.shadow.mapSize.set(2048,2048);let _=A.shadow.camera;_.left=-50,_.right=50,_.top=60,_.bottom=-60,_.near=10,_.far=200,A.shadow.bias=-5e-4,A.shadow.normalBias=.05}o.add(A,A.target);let D=new Bn("#ff2418",t?500:300,90,1.6);D.position.set(0,f.h-4,f.z+14),o.add(D);let L=new Bn("#ffc27a",t?160:100,34,1.7);L.position.set(0,5,f.z+9),o.add(L);let S=new Bn("#ffd27a",0,26,1.6);o.add(S);let E=n.material("concrete_floor_02",[60,120],"#3b404c",.35);E.roughness=.34,E.envMapIntensity=1.6,l(E);let N={tReflect:{value:null},uReflMat:{value:new Ze},uReflOn:{value:0},uT:b.uT,uWet:{value:1}};Nm(E,N);let O=new We(l(new Pt(200,400)),E);O.rotation.x=-Math.PI/2,O.position.set(0,0,-120),O.receiveShadow=!0,o.add(O);let G=null,j=new Ze,ee=new oe;t&&(s.getDrawingBufferSize(ee),G=new zo(new Pt(2,2),{textureWidth:Math.max(64,Math.round(ee.x*.5)),textureHeight:Math.max(64,Math.round(ee.y*.5)),clipBias:.002,multisample:0}),G.rotation.x=-Math.PI/2,G.updateMatrixWorld(!0),j.copy(G.matrixWorld).invert(),N.tReflect.value=G.getRenderTarget().texture,N.uReflOn.value=1);let Z=l(n.material("large_floor_tiles_02",[8,90],"#5a5d6a",.1));Z.roughness=.45,Z.envMapIntensity=1.2;for(let _ of[-1,1]){let C=new We(l(new _t(11,.25,400)),Z);C.position.set(_*21.5,.12,-120),C.receiveShadow=!0,o.add(C)}let X=[],ue=(_,C,U,V,k=.03)=>{let J=new Pt(_,C);J.rotateX(-Math.PI/2),J.translate(U,k,V),X.push(J)};for(let _=-4;_>-300;_-=9)ue(.25,4,0,_);for(let _ of[-1,1])ue(.2,300,_*15.4,-150);for(let _ of[-9,-86,-150])for(let C=-6;C<=6;C++)ue(.7,3.6,C*1.9,_);let $=l(new at({color:"#c9ccd6",roughness:.4,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.add(new We(l(an(X,!1)),$)),X.forEach(_=>_.dispose());let ge=l($t(Zt(256,512,_=>{_.fillStyle="#e8eaf2",_.font=`900 220px ${An}`,_.textAlign="center",_.textBaseline="middle",["\u6B62","\u307E","\u308C"].forEach((C,U)=>_.fillText(C,128,90+U*165))}))),xe=new We(l(new Pt(3.4,6.6)),l(new at({map:ge,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1})));xe.rotation.x=-Math.PI/2,xe.position.set(-7,.035,-17),o.add(xe);let Ne=(_,C,U,V,k=!1)=>{let J=new xn(l(_),C,Math.max(1,U.length));return J.count=U.length,U.forEach((ce,ie)=>J.setMatrixAt(ie,ce)),V&&V.forEach((ce,ie)=>J.setColorAt(ie,ce)),J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0),J.frustumCulled=!1,J.castShadow=k,J.receiveShadow=!0,o.add(J),J},Ue=new I(0,1,0),qe=(_,C,U,V=1,k=1,J=1,ce=0)=>new Ze().compose(new I(_,C,U),new sn().setFromAxisAngle(Ue,ce),new I(V,k,J)),rt=[],te=(_,C,U,V,k,J=0,ce=1)=>rt.push({p:new I(_,C,U),c:new Ee(V).multiplyScalar(ce),s:k,ph:u(),mode:J}),de=[],Te=(_,C,U,V,k,J=1,ce=.03)=>de.push({p:new I(_,ce,C),sx:U,sz:V,c:new Ee(k).multiplyScalar(J*.22)}),He=["office","resi","glass","old"],Ce=He.map((_,C)=>mm(_,7+C*29,r));Ce.forEach(_=>c.push(_.map,_.em));let it={office:[.5,.35,1.1,1],resi:[.75,.15,1,.7],glass:[.22,.8,1.15,1.5],old:[.8,.1,1,.6]},ot={};He.forEach((_,C)=>{let[U,V,k,J]=it[_];ot[_]=l(new at({map:Ce[C].map,emissiveMap:Ce[C].em,emissive:"#ffffff",emissiveIntensity:k,roughness:U,metalness:V,envMapIntensity:J}))});let Ye=i?Em(5,r):gm(5,r);c.push(Ye.map,Ye.em);let pe=l(new at({map:Ye.map,emissiveMap:Ye.em,emissive:"#ffffff",emissiveIntensity:i?2.2:1.5,roughness:i?.62:.55,metalness:i?.35:.2})),Me=l(new at({color:"#232733",roughness:.75,metalness:.25})),ve=l(new at({color:"#0e1018",roughness:.9,metalness:.1})),se=l(new at({color:"#0c0e14",roughness:.55,metalness:.85})),P=l(new at({color:"#2a2d38",roughness:.85,metalness:.05})),z={office:[],resi:[],glass:[],old:[],shop:[],trim:[],roof:[],iron:[],concrete:[]},K=(_,C,U,V,k,J,ce,ie=0,Oe=0,Je=0,ut=0)=>{let Jt=new _t(U-C,k-V,ce-J);if(Jt.translate((C+U)/2,(V+k)/2,(J+ce)/2),ie>0){let zt=Jt.attributes.position,kt=Jt.attributes.normal,Ht=Jt.attributes.uv;for(let gt=0;gt<zt.count;gt++)Math.abs(kt.getX(gt))>.5?Ht.setXY(gt,zt.getZ(gt)/ie+Je,zt.getY(gt)/Oe+ut):Math.abs(kt.getZ(gt))>.5?Ht.setXY(gt,zt.getX(gt)/ie+Je,zt.getY(gt)/Oe+ut):Ht.setXY(gt,zt.getX(gt)/ie,zt.getZ(gt)/ie)}_.push(Jt)},_e=[],le=[],w=[],M=[],F=(_,C,U,V,k,J)=>{let ce=new Ee(J).multiplyScalar(3.2),ie=.16,Oe=[[_,C,V,V+ie],[_,C,U-ie,U],[_,_+ie,V,U],[C-ie,C,V,U]];for(let[Je,ut,Jt,zt]of Oe){let kt=new _t(ut-Je,.16,zt-Jt);kt.translate((Je+ut)/2,k,(Jt+zt)/2),M.push({g:kt,c:ce})}},q=(_,C,U,V,k)=>{let J=new _t(.16,V-U,.16);J.translate(_,(U+V)/2,C),M.push({g:J,c:new Ee(k).multiplyScalar(3)})},re=(_,C,U,V,k,J,ce,ie)=>{let Oe=u()*4,Je=(It,mn,xr,pi,si)=>{let Jn=_>0?It:-ce,ku=_>0?ce:-It;K(z[k],Jn,ku,mn,xr,si,pi,pm,vf,Oe,-mn/vf)},ut=(It,mn,xr,pi,si,Jn)=>{let ku=_>0?It-Jn:-ce-Jn,d0=_>0?ce+Jn:-It+Jn;K(z.trim,ku,d0,mn,xr,si-Jn,pi+Jn)},Jt=ie?4.5:0;if(ie){let It=_>0?J:-ce,mn=_>0?ce:-J;K(z.shop,It,mn,0,Jt,U,C,_f.w,_f.h,u()*4,0),ut(J,Jt,Jt+.35,C,U,.7)}let zt=Jt+(ie?.35:0),kt=V>36?Math.max(zt+8,V*.6):V;Je(J,zt,kt,C,U);for(let It=zt+14.4;It<kt-2;It+=14.4)ut(J,It,It+.22,C,U,.14);let Ht=kt,gt=[C,U],$n=J;if(V>36){ut(J,kt,kt+.4,C,U,.3);let It=V>52?V*.85:V;$n=J+1.6,gt=[C-.8,U+.8],Je($n,kt+.4,It,gt[0],gt[1]),Ht=It,V>52&&(ut($n,It,It+.4,gt[0],gt[1],.3),$n=J+3.6,gt=[C-2.2,U+2.2],Je($n,It+.4,V,gt[0],gt[1]),Ht=V)}if(ut($n,Ht,Ht+.55,gt[0],gt[1],.22),_e.push({xa:_>0?$n:-ce,xb:_>0?ce:-$n,za:gt[0],zb:gt[1],y:Ht+.55,kind:k,h:Ht}),!ie)return;let zu=_>0?$n:-ce,f0=_>0?ce:-$n;if(u()<.8&&F(zu,f0,gt[0],gt[1],Ht+.65,Ms[d(Ms.length)]),V>30&&u()<.7){let It=Ms[d(Ms.length)],mn=_*(Nt+.12);q(mn,C-.1,zt,Math.min(kt,V*.75),It),q(mn,U+.1,zt,Math.min(kt,V*.75),It)}if(le.push({sx:_,za:C,zb:U,h:V,h1:kt,kind:k}),(k==="resi"||k==="old")&&C-U>13&&u()<.8){let It=(C+U)/2+h(-2,2),mn=_*(J-.55),xr=Math.min(5,Math.floor((kt-zt-3)/3.6));for(let pi=0;pi<xr;pi++){let si=zt+1.4+pi*3.6;if(K(z.iron,mn-.55,mn+.55,si,si+.08,It-1.6,It+1.6),K(z.iron,mn-_*.55-.03,mn-_*.55+.03,si,si+.95,It-1.6,It+1.6),K(z.iron,mn-.55,mn+.55,si+.9,si+.95,It-1.6,It+1.6),pi<xr-1){let Jn=new _t(.8,.07,2.4);Jn.rotateX((pi%2?1:-1)*Math.atan2(3.6,2.4)),Jn.translate(mn,si+1.8,It+(pi%2?-.1:.1)),z.iron.push(Jn)}}}};for(let _ of[-1,1]){let C=-3.5,U=0,V=!1;for(;C>-200;){let J=h(13,21),ce=C,ie=C-J,Oe=h(22,62),Je=He[d(4)];_<0&&!V&&ie<-70?(ie=ce-20,Oe=32,Je="office",V=!0):ce<-26&&ce>-72&&Oe>40&&(Oe=h(30,40)),re(_,ce,ie,Oe,Je,Nt,Ru,!0),C=ie;let ut=U%3===2&&C>-150?5.4:h(1.2,2.6);ut>4&&w.push({sx:_,z:C-ut/2}),C-=ut,U++}let k=-2;for(;k>-210;){let J=h(18,30);re(_,k,k-J,h(70,150),u()<.6?"glass":"office",Ru,Ru+26,!1),k-=J}}let B=-20,me=15.2,ae=21,he=9.4;{K(z.concrete,B-4.7,B+4.7,me,me+1.3,-230,14),K(z.concrete,B-4.7,B-4.5,me+1.3,me+2.4,-230,14),K(z.concrete,B+4.5,B+4.7,me+1.3,me+2.4,-230,14);for(let U=4;U>-220;U-=20)K(z.concrete,B-.9,B+.9,0,me,U-1.3,U+1.3),K(z.concrete,B-3.6,B+3.6,me-1,me,U-1.6,U+1.6);for(let U=0;U>-220;U-=10)K(z.iron,B-4.4,B-4.3,me+1.3,me+6.2,U-.05,U+.05),te(B-3.9,me+6.2,U,"#ffb35a",1.1,0,1),te(B-3,me-.3,U-5,"#ff9a3a",.9,0,.8),te(B+3,me-.3,U-5,"#ff9a3a",.9,0,.8);K(z.concrete,ae-2.6,ae+2.6,he-.5,he+.3,-230,14),K(z.concrete,ae-2.6,ae-2.45,he+.3,he+1.15,-230,14),K(z.concrete,ae+2.45,ae+2.6,he+.3,he+1.15,-230,14),K(z.iron,ae-.95,ae-.85,he+.3,he+.42,-230,14),K(z.iron,ae+.85,ae+.95,he+.3,he+.42,-230,14),K(z.iron,ae-.02,ae+.02,he+4.6,he+4.64,-230,14);for(let U=0;U>-220;U-=14)K(z.concrete,ae-.7,ae+.7,0,he-.5,U-1.8,U+1.8),K(z.iron,ae+2.3-.07,ae+2.3+.07,he+.3,he+4.6,U-.07,U+.07),te(ae,he-.8,U,"#7ee8ff",1,2,.8)}{let _=[];for(let C of[B-2.2,B+2.2])for(let U=12;U>-230;U-=3){let V=new Pt(.12,1.4);V.rotateX(-Math.PI/2),V.translate(C,me+1.32,U),_.push(V)}o.add(new We(l(an(_,!1)),l(Au("#bcd8ec",.9)))),_.forEach(C=>C.dispose())}let Fe={...ot,shop:pe,trim:Me,roof:ve,iron:se,concrete:P};if(Object.keys(z).forEach(_=>{if(!z[_].length)return;let C=l(an(z[_],!1));z[_].forEach(V=>V.dispose());let U=new We(C,Fe[_]);U.castShadow=t&&_!=="iron",U.receiveShadow=!0,o.add(U)}),M.length){let _=M.map(({g:U,c:V})=>{let k=U.attributes.position.count,J=new Float32Array(k*3);for(let ce=0;ce<k;ce++)J.set([V.r,V.g,V.b],ce*3);return U.setAttribute("color",new vt(J,3)),U}),C=l(an(_,!1));_.forEach(U=>U.dispose()),o.add(new We(C,l(new St({vertexColors:!0,toneMapped:!1,fog:!0}))))}let fe=[],be=[],Se=[];for(let _ of _e){if(_.xb-_.xa<4||_.za-_.zb<4)continue;let C=()=>h(_.xa+1.5,_.xb-1.5),U=()=>h(_.zb+1.5,_.za-1.5);(_.kind==="resi"||_.kind==="old")&&u()<.5&&fe.push(qe(C(),_.y,U(),1,h(.8,1.2),1,u()*6));let V=Math.floor(h(1,a(6,4)));for(let k=0;k<V;k++)be.push(qe(C(),_.y,U(),h(.8,2.2),h(.7,1.4),h(.8,2),u()*3));if(u()<.7){let k=h(6,_.h>70?26:16),J=C(),ce=U();Se.push(qe(J,_.y+k/2,ce,1,k,1)),_.h>28&&te(J,_.y+k+.3,ce,"#ff2a1a",1.6,1,2.5)}}let ke=(()=>{let _=[],C=new rn(1.15,1.15,2.4,14);C.translate(0,2.6,0);let U=new Gs(1.3,.8,14);U.translate(0,4.2,0),_.push(C,U);for(let[k,J]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]]){let ce=new rn(.06,.06,1.5,4);ce.translate(k,.75,J),_.push(ce)}let V=an(_,!1);return _.forEach(k=>k.dispose()),V})();fe.length&&Ne(ke,l(new at({color:"#3a3430",roughness:.7,metalness:.5})),fe),be.length&&Ne(new _t(1,1,1).translate(0,.5,0),l(new at({color:"#4a505e",roughness:.65,metalness:.4})),be),Se.length&&Ne(new rn(.05,.1,1,5),l(new at({color:"#15171d",roughness:.5,metalness:.9})),Se);let Re=[],Qe=()=>Re.push({c0:o.children.length,g0:rt.length,c1:-1,g1:-1}),H=()=>{let _=Re[Re.length-1];_.c1=o.children.length,_.g1=rt.length};i&&Qe();let Pe=xm(r);c.push(Pe.texture);let we=[],ze=(_,C,U,V,k,J,ce)=>{let ie=u(),Oe=ie<.5?0:ie<.7?1:ie<.8?2:ie<.92?3:4,Je=(ce?2.2:1.8)*k,ut=Je*4;we.push({m:qe(C,U,V,Je,ut,1,J),rect:Pe.rect(_),mode:Oe,ph:u(),spd:h(1,2.6)}),(t||u()<.5)&&te(C-Math.sin(J)*.1,U,V+Math.cos(J)*.15,ko[_].c,ut*.24,0,.14)},Ae=[8,9,10,11,12];for(let _ of le){let C=Math.floor((_.za-_.zb)/a(6,7.5))+1;for(let U=0;U<C;U++){let V=u()<.3?Ae[d(Ae.length)]:d(ko.length),k=u()<.45,J=h(.7,1.5),ce=Math.min(_.h1-2,30),ie=(k?2.2:1.8)*J*4;if(ce<10)continue;let Oe=Math.min(ce-ie/2,h(6+ie/2,ce)),Je=h(_.zb+1.4,_.za-1.4);k?ze(V,_.sx*(Nt-.14),Oe,Je,J,_.sx>0?-Math.PI/2:Math.PI/2,!0):ze(V,_.sx*(Nt-.95),Oe,Je,J,0,!1)}}for(let _ of w)ze(d(ko.length),_.sx*(Nt+3),7.5+u()*3,_.z+h(-1.4,1.4),1.3,0,!1);{let _=we.length,C=new Pt(1,1),U=new Float32Array(_*4),V=new Float32Array(_*3);we.forEach((J,ce)=>{U.set(J.rect,ce*4),V.set([J.ph,J.mode,J.spd],ce*3)}),C.setAttribute("aRect",new ni(U,4)),C.setAttribute("aAnim",new ni(V,3));let k=new xn(l(C),l(wm(Pe.texture,b)),_);we.forEach((J,ce)=>k.setMatrixAt(ce,J.m)),k.instanceMatrix.needsUpdate=!0,k.frustumCulled=!1,o.add(k)}let ye=vm(r);c.push(ye.texture);let Ie=l(new Pt(1,1)),nt=(_,C,U,V,k,J,ce)=>{let ie=new We(Ie,l(Am(ye.texture,ye.rect(_),b,ce,u()*4)));ie.position.set(C,U,V),ie.scale.set(k,k,1),ie.rotation.y=J,ie.userData.noAO=!0,o.add(ie)};{let _=le.filter(k=>k.sx>0&&k.za<-18&&k.za>-150&&k.h1>18),C=le.filter(k=>k.sx<0&&k.za<-18&&k.za>-150&&k.h1>18),U=(k,J)=>k[Math.min(k.length-1,J)];if(_.length>3){let[k,J,ce]=[U(_,1),U(_,3),U(_,5)];nt(1,Nt-.4,Math.min(k.h1-6,17),(k.za+k.zb)/2,11,-Math.PI/2+.2,"#e8f4ff"),nt(2,Nt-.4,Math.min(J.h1-6,24),(J.za+J.zb)/2,10,-Math.PI/2+.25,"#e6f1ff"),nt(4,Nt-.4,Math.min(ce.h1-7,16),(ce.za+ce.zb)/2,11,-Math.PI/2+.3,"#ffffff")}if(C.length>3){let[k,J]=[U(C,2),U(C,4)];nt(3,-Nt+.4,Math.min(k.h1-6,15),(k.za+k.zb)/2,11,Math.PI/2-.2,"#e8f4ff"),nt(7,-Nt+.4,Math.min(J.h1-6,22),(J.za+J.zb)/2,10,Math.PI/2-.25,"#e8f4ff")}_e.filter(k=>k.xa>Nt&&k.h>80&&k.zb<-25&&k.za>-150).slice(0,3).forEach((k,J)=>nt([5,6,0][J],(k.xa+k.xb)/2-10,k.y+9,k.za-2,22,-.4,"#ffffff"))}let bt=_e.filter(_=>_.xb>-40&&_.xb<-20&&_.za>-96&&_.zb<-68).sort((_,C)=>Math.abs((_.za+_.zb)/2+82)-Math.abs((C.za+C.zb)/2+82))[0]??_e.find(_=>_.xb<0),mt=Fm(b);mt.group.scale.setScalar(24/1.8),mt.group.position.set((bt.xa+bt.xb)/2+2,bt.y,(bt.za+bt.zb)/2),o.add(mt.group),c.push(mt);let Nn=new We(l(new rn(7,3,13,20,1,!0)),l(Tu("#35e8ff",.3,1,!0,b)));Nn.position.copy(mt.group.position).add(new I(0,6.5,0)),Nn.userData.noAO=!0,o.add(Nn),te(mt.group.position.x,bt.y+1,mt.group.position.z,"#35e8ff",14,0,.55);let Hn=6,ts=9,qo=(()=>{let _=new gs,C=1.5,U=.7;_.moveTo(-C,-1.2),_.lineTo(C,-1.2),_.lineTo(C,1.55-U),_.quadraticCurveTo(C,1.55,C-U,1.55),_.lineTo(-C+U,1.55),_.quadraticCurveTo(-C,1.55,-C,1.55-U),_.closePath();let V=new Xs(_,{depth:ts-.5,bevelEnabled:!0,bevelSize:.12,bevelThickness:.25,bevelSegments:2,curveSegments:6});V.translate(0,0,-(ts-.5)/2);let k=new _t(2.5,.4,ts-1.2);k.translate(0,-1.4,0);let J=[V.index?V.toNonIndexed():V.clone(),k.index?k.toNonIndexed():k.clone()];V.dispose(),k.dispose();let ce=an(J,!1);return J.forEach(ie=>ie.dispose()),ce})(),ha=(()=>{let _=[],C=[1.5,1.35,1];for(let U of[-1,1]){for(let V=0;V<6;V++)Ln(_,.05,.85,.95,U*1.63,.45,-3.3+V*1.32,C);Ln(_,.05,.08,ts-.6,U*1.64,-.95,0,[.3,2.2,2.8]),Ln(_,.05,.05,ts-.8,U*1.62,1.08,0,[.6,.9,1.3]);for(let V of[-4.1,4.1])Ln(_,.06,1.9,.06,U*1.63,.1,V,[.9,1.1,1.4])}return Ln(_,.5,.06,.5,0,1.6,-3.6,[3,.25,.25]),Ln(_,.5,.06,.5,0,1.6,3.6,[3,.25,.25]),wu(_)})(),ns=new xn(l(qo),l(new at({color:"#d4d8e2",roughness:.28,metalness:.75,envMapIntensity:1.7})),Hn),Ss=new xn(l(ha),l(new St({vertexColors:!0,toneMapped:!1})),Hn);Ss.instanceMatrix=ns.instanceMatrix,ns.instanceMatrix.setUsage(lu),ns.frustumCulled=Ss.frustumCulled=!1,o.add(ns,Ss);let hr=(()=>{let _=[];Ln(_,2.4,.12,.08,0,.95,0,[3,3,2.7]);for(let C of[-1,1])Ln(_,.55,.22,.08,C*.95,-.7,0,[3.2,3.1,2.8]);return Ln(_,2,.9,.04,0,.35,-.02,[.05,.25,.35]),new We(l(wu(_)),Ss.material)})();o.add(hr),i&&H();let Li=l(new at({color:"#1b1e25",roughness:.5,metalness:.8})),fa=l(Au("#ffcf8a",3)),da=[],fr=[],is=[],dr=[],Ni=[];for(let _=0;_<10;_++)for(let C of[-1,1]){let U=-10-_*14-(C>0?7:0),V=new rn(.12,.17,8,8);V.translate(C*16.5,4,U);let k=new _t(2.6,.15,.15);k.translate(C*15.3,8,U),is.push(V,k);let J=new _t(.9,.12,.4);if(J.translate(C*14.3,7.9,U),dr.push(J),fr.push(new I(C*16.5,8.2,U)),Ni.push(new I(C*14.3,7.4,U)),te(C*14.3,7.85,U,"#ffb860",1,2,.6),_<3){let ce=new Bn("#ffb35a",60,26,1.7);ce.position.set(C*14.3,7.4,U),o.add(ce),da.push(ce)}}o.add(new We(l(an(is,!1)),Li),new We(l(an(dr,!1)),fa)),is.forEach(_=>_.dispose()),dr.forEach(_=>_.dispose());let pa=new rn(.25,4.6,7.4,16,1,!0);pa.translate(0,3.7,0);let Es=new xn(l(pa),l(Tu("#ffb460",.16,1.2,!1,b)),Ni.length);Ni.forEach((_,C)=>Es.setMatrixAt(C,qe(_.x,.02,_.z))),Es.userData.noAO=!0,Es.frustumCulled=!1,o.add(Es),Ni.forEach(_=>Te(_.x*.8,_.z,11,11,"#ffa550",1));let ma=[],Yo=[],Zo=(_,C,U,V=!1)=>{let k=[];for(let ce=0;ce<=8;ce++){let ie=ce/8;k.push(new I().lerpVectors(_,C,ie).add(new I(0,-U*4*ie*(1-ie),0)))}let J=new Kr(k);ma.push(new oo(J,14,.03,3,!1)),V&&Yo.push(J)},ga=fr.filter(_=>_.x<0).sort((_,C)=>C.z-_.z),xa=fr.filter(_=>_.x>0).sort((_,C)=>C.z-_.z);for(let _ of[ga,xa])for(let C=0;C<_.length-1;C++)for(let U of[0,-.3,.3])Zo(_[C].clone().add(new I(0,U,0)),_[C+1].clone().add(new I(0,U*.8,0)),.7+U*.3);for(let _=0;_<Math.min(ga.length,xa.length);_+=2){let C=ga[_],U=xa.reduce((V,k)=>Math.abs(k.z-C.z)<Math.abs(V.z-C.z)?k:V);Zo(C.clone(),U.clone().setZ(C.z-1.5),1.6,_%4===0)}o.add(new We(l(an(ma,!1)),l(new at({color:"#07080b",roughness:.6,metalness:.2})))),ma.forEach(_=>_.dispose());let Ko=[],R=[],W=["#ff3a1a","#ff7a22","#ff3a1a","#ff9a3a"],ne=(_,C,U,V=1)=>{let k=W[d(W.length)];Ko.push(qe(_,C,U,V,V,V)),R.push(new Ee(k).multiplyScalar(1.5)),te(_,C,U,k,.5*V,3,.25)};for(let _ of le)for(let C=_.za-1.8;C>_.zb+1.2;C-=h(2.4,3.8))u()<.4&&ne(_.sx*(Nt-.9),h(3.1,3.7),C);for(let _ of Yo)for(let C=1;C<12;C++){let U=_.getPoint(C/12);ne(U.x,U.y-.35,U.z,.55)}for(let _ of w){let C=a(9,5);for(let V=0;V<C;V++){let k=_.sx*(Nt+2+V*2.4);ne(k,h(3.9,4.6),_.z+h(-1.8,1.8)),V%2===0&&Te(k,_.z,6,6,V%4===0?"#ff5a3a":"#ff9a4a",.7)}let U=new We(l(new Pt(4.6,9)),l(new St({map:Vo(),color:new Ee(Ms[d(Ms.length)]).multiplyScalar(1.1),transparent:!0,blending:ln,depthWrite:!1,toneMapped:!1,fog:!1})));U.position.set(_.sx*(Ru-.3),5,_.z),U.rotation.y=_.sx>0?-Math.PI/2:Math.PI/2,U.userData.noAO=!0,o.add(U)}Ne(new Pn(.3,10,8).scale(1,1.3,1),l(new St({toneMapped:!1})),Ko,R);let Q=_m(r);c.push(Q.map,Q.em);let Y=l(new at({map:Q.map,emissiveMap:Q.em,emissive:"#ffffff",emissiveIntensity:1.8,roughness:.35,metalness:.55})),De=[[],[],[]],Ve=["#2ec8e0","#3a8cff","#ff9a3a"],Le=(_,C,U)=>{let V=d(3);De[V].push(qe(_,.25,C,1,1,1,U)),Te(_+Math.sin(U)*1.6,C+Math.cos(U)*1.6,4.5,4.5,Ve[V],.9,.27),te(_+Math.sin(U)*.5,1.4,C+Math.cos(U)*.5,Ve[V],1.2,0,.25)};for(let _ of le)for(let C=_.za-2;C>_.zb+2;C-=h(7,12))if(u()<.7){let U=_.sx>0?-Math.PI/2:Math.PI/2;Le(_.sx*(Nt-1.3),C,U),u()<.5&&Le(_.sx*(Nt-1.3),C-1.1,U)}for(let _ of w)Le(_.sx*(Nt+7),_.z-1.9,Math.PI),u()<.7&&Le(_.sx*(Nt+12),_.z+1.9,0);De.forEach((_,C)=>{let U=new _t(.9,1.9,.85);U.translate(0,.95,0);let V=U.attributes.uv;for(let k=0;k<V.count;k++)k>=16&&k<20?V.setXY(k,(C+V.getX(k))/3,V.getY(k)):V.setXY(k,.01+C/3,.99);_.length?Ne(U,Y,_):U.dispose()});let Ge=$t(Zt(128,32,_=>{_.fillStyle="#e8e8ea",_.fillRect(0,0,128,32),_.fillStyle="#ff7a1a";for(let C=-2;C<10;C++)_.beginPath(),_.moveTo(C*16,32),_.lineTo(C*16+8,32),_.lineTo(C*16+24,0),_.lineTo(C*16+16,0),_.fill()}));c.push(Ge);let Xe=[];for(let _=0;_<7;_++){let C=6.6+_*1.7,U=-27-_*.6;Xe.push(qe(C,.5,U,1,1,1,.12+_*.01)),_%2===0&&te(C,1.2,U,"#ffb000",.9,1,3)}for(let _ of[-1,1])for(let C=0;C<4;C++)Xe.push(qe(_*14.6,.5,-34-C*1.7-(_>0?40:0),1,1,1,Math.PI/2));Ne(new _t(1.6,.8,.22),l(new at({map:Ge,roughness:.5,metalness:.1})),Xe,void 0,t);let et=[],je=[],ct=[],wt=[],Bt=[],Ut=(_,C)=>{let U=4+d(4);for(let k=0;k<U;k++)et.push(qe(_+h(-1.1,1.1),.45,C+h(-1,1),h(.8,1.3),h(.7,1.1),h(.8,1.3),u()*6)),je.push(new Ee(["#10131a","#1a1226","#0f1a1a","#2a2a30"][d(4)]));u()<.6&&(ct.push(qe(_+h(-1.2,1.2),.25,C+h(-1,1))),wt.push(new Ee(["#2a3d48","#3a2a48","#2f4a36","#4a3a2a"][d(4)])));let V=d(4);for(let k=0;k<V;k++)Bt.push(qe(_+h(-1.4,1.4),.45+k%2*.4,C+h(-1,1),h(.8,1.4),1,h(.8,1.2),u()*3))};for(let _ of w)Ut(_.sx*(Nt+.5),_.z+1.8),Ut(_.sx*(Nt+5),_.z-2),Ut(_.sx*(Nt-1.5),_.z+3.6);for(let _ of le)u()<.5&&Ut(_.sx*(Nt-1.2),h(_.zb+2,_.za-2));et.length&&Ne(new so(.35,1),l(new at({color:"#ffffff",roughness:.22,metalness:.1,envMapIntensity:1.8})),et,je),ct.length&&Ne(new rn(.38,.32,.95,10).translate(0,.47,0),l(new at({color:"#ffffff",roughness:.5,metalness:.3})),ct,wt),Bt.length&&Ne(new _t(.6,.4,.5),l(new at({color:"#6b5238",roughness:.9})),Bt);let Ct=[new I(-3.5,0,-19),new I(5.5,0,-34),new I(-6,0,-52),new I(3,0,-64),new I(-11,0,-41),new I(10,0,-76)];Ne(new rn(.5,.5,.04,16),l(new at({color:"#15171d",roughness:.4,metalness:.9})),Ct.map(_=>qe(_.x,.04,_.z)));let $e=Ct.slice(0,a(6,4));for(let _ of w.slice(0,a(6,3)))$e.push(new I(_.sx*(Nt+3),0,_.z-2));{let _=a(26,14),C=$e.length*_,U=new Float32Array(C*3),V=new Float32Array(C*3),k=new Float32Array(C*2);$e.forEach((ie,Oe)=>{for(let Je=0;Je<_;Je++){let ut=Oe*_+Je;V.set([ie.x,.1,ie.z],ut*3),k.set([Je/_,u()],ut*2)}});let J=l(new Mt);J.setAttribute("position",new vt(U,3)),J.setAttribute("aVent",new vt(V,3)),J.setAttribute("aSeed",new vt(k,2));let ce=new ps(J,l(Dm(Vo(),b)));ce.frustumCulled=!1,ce.userData.noAO=!0,o.add(ce),$e.forEach(ie=>Te(ie.x,ie.z,5,5,"#a68cff",.35))}let Et=(()=>{let _=new gs,C=[[2.35,.3],[2.2,.5],[1.15,.66],[.25,1.02],[-.95,1.06],[-1.9,.82],[-2.3,.62],[-2.3,.3],[-1.9,.16],[1.9,.16]];_.moveTo(C[0][0],C[0][1]);for(let[ce,ie]of C.slice(1))_.lineTo(ce,ie);_.closePath();let U=1.75,V=new Xs(_,{depth:U,bevelEnabled:!0,bevelSize:.09,bevelThickness:.1,bevelSegments:2,curveSegments:1});V.rotateY(-Math.PI/2),V.translate(U/2,0,0);let k=[V.index?V.toNonIndexed():V.clone()];V.dispose();for(let ce of[-1,1]){let ie=new rn(.2,.24,1.6,10);ie.rotateX(Math.PI/2),ie.translate(ce*.98,.32,-1.45),k.push(ie.toNonIndexed()),ie.dispose()}let J=an(k,!1);return k.forEach(ce=>ce.dispose()),J.computeVertexNormals(),J})(),yt=(()=>{let _=[],C=new gs;C.moveTo(1.05,.7),C.lineTo(.27,1.05),C.lineTo(-.9,1.09),C.lineTo(-1.5,.92),C.closePath();let U=new Xs(C,{depth:1.5,bevelEnabled:!1});U.rotateY(-Math.PI/2),U.translate(.75,.02,0);let V=U.attributes.position.count,k=new Float32Array(V*3);for(let J=0;J<V;J++)k.set([.04,.12,.18],J*3);U.setAttribute("color",new vt(k,3)),_.push(U),Ln(_,1.7,.04,3.9,0,.12,0,[.4,1.6,2.4]),Ln(_,1.65,.06,.06,0,.5,2.27,[3,3,2.8]);for(let J of[-1,1])Ln(_,.32,.1,.06,J*.6,.36,2.33,[3.4,3.4,3.2]);Ln(_,1.85,.07,.06,0,.6,-2.38,[3,.12,.1]);for(let J of[-1,1])Ln(_,.04,.03,3.2,J*.97,.62,.3,[.5,1.4,2.2]),Ln(_,.3,.3,.05,J*.98,.32,-2.27,[.6,2.2,3.2]);return wu(_.map(J=>J.index?J.toNonIndexed():J))})(),Rn=(()=>{let _=[];for(let C of[-1,1])for(let U of[!1,!0]){let V=new Pt(.22,7,1,1);V.rotateX(-Math.PI/2),U&&V.rotateZ(Math.PI/2),V.translate(C*.98,.32,-2.3-3.5);let k=V.attributes.position,J=new Float32Array(k.count*3);for(let ce=0;ce<k.count;ce++){let ie=ji.clamp((k.getZ(ce)+9.3)/7,0,1);J.set([.5*ie,1.6*ie,2.4*ie],ce*3)}V.setAttribute("color",new vt(J,3)),_.push(V)}return wu(_)})(),Ui=l(new at({color:"#ffffff",roughness:.22,metalness:.9,envMapIntensity:1.8})),_n=l(new St({vertexColors:!0,toneMapped:!1})),di=["#0b0d12","#9aa6b4","#4a1018","#0e3a46","#10203a","#b8c0c8"],At=["#2ec8e0","#3a8cff","#2ec8e0","#ff2a46"],yn=a(12,7),Mn=[],hn=[],pn=[];for(let _=0;_<yn;_++){let C=_%2?1:-1,U=-14-_*h(9,12);Mn.push(qe(C*13.3,.45,U,1,1,1,u()<.5?0:Math.PI)),hn.push(new Ee(di[d(di.length)]));let V=At[d(At.length)];pn.push(new Ee(V)),Te(C*13.3,U,4.6,7,V,.55),te(C*13.3,.3,U,V,1.2,0,.3)}Ne(Et.clone(),Ui,Mn,hn,t),Ne(yt.clone(),_n,Mn,pn);let zn=[];for(let _=0;_<a(46,20);_++){let C=u()<.5?1:-1;_%3===0?zn.push({x:h(-170,170),y:h(32,120),z:h(-110,-260),ax:0,dir:C,spd:h(10,24),sc:h(2.2,4.5),lo:-180,hi:180,ry:C>0?Math.PI/2:-Math.PI/2}):zn.push({x:(u()<.5?-1:1)*h(34,75),y:h(26,95),z:h(-250,20),ax:1,dir:C,spd:h(12,28),sc:h(2,4),lo:-270,hi:30,ry:C>0?Math.PI:0})}let Fi=[B-3.1,B-1.1,B+1.1,B+3.1];for(let _=0;_<a(14,8);_++){let C=_%4,U=C<2?-1:1;zn.push({x:Fi[C],y:me+1.55,z:h(-200,10),ax:1,dir:U,spd:h(16,30),sc:1,lo:-230,hi:14,ry:U<0?0:Math.PI})}let ss=new xn(l(Et),Ui,zn.length),$o=new xn(l(yt),_n,zn.length);$o.instanceMatrix=ss.instanceMatrix,ss.instanceMatrix.setUsage(lu),zn.forEach((_,C)=>{ss.setColorAt(C,new Ee(di[d(di.length)])),$o.setColorAt(C,new Ee(At[d(At.length)]).lerp(new Ee("#ffffff"),.5)),_.dir*=1});let Jo=new xn(l(Rn),l(new St({vertexColors:!0,toneMapped:!1,transparent:!0,blending:ln,depthWrite:!1,side:Qt})),zn.length);Jo.instanceMatrix=ss.instanceMatrix,Jo.userData.noAO=!0,ss.frustumCulled=$o.frustumCulled=Jo.frustumCulled=!1,o.add(ss,$o,Jo);{for(let U of le)for(let V=U.za-2.5;V>U.zb+2;V-=h(4,6))Te(U.sx*22.4,V,8,5,Ms[d(Ms.length)],.5,.27);Te(0,f.z+9,42,16,"#ffc98a",.9),Te(0,f.z+12,30,14,"#ff2a3a",.35);let _=new Pt(1,1);_.rotateX(-Math.PI/2);let C=new xn(l(_),l(new St({map:Vo(),transparent:!0,blending:ln,depthWrite:!1,toneMapped:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),de.length);de.forEach((U,V)=>{C.setMatrixAt(V,qe(U.p.x,U.p.y,U.p.z,U.sx,1,U.sz*(t?1:1.6))),C.setColorAt(V,U.c)}),C.frustumCulled=!1,C.userData.noAO=!0,o.add(C)}{let _=a(420,160),C=new Pt(1,1);C.rotateX(-Math.PI/2);let U=new Float32Array(_*2);for(let k=0;k<_;k++)U.set([u(),h(.7,1.6)],k*2);C.setAttribute("aPh",new ni(U,2));let V=new xn(l(C),l(Pm(Sm(),b)),_);for(let k=0;k<_;k++)V.setMatrixAt(k,qe(h(-15,15),.04,h(8,-60)));V.frustumCulled=!1,V.userData.noAO=!0,V.layers.set(1),o.add(V)}i&&Qe();let pr=Mm(r);c.push(pr.map,pr.em);let Jf=l(new Kt({color:"#0b1222",metalness:.9,roughness:.16,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:.08})),Km=l(new Kt({color:"#9fb4d8",map:pr.map,emissiveMap:pr.em,emissive:"#ffffff",emissiveIntensity:1.2,metalness:.85,roughness:.14,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.06})),Iu=l(new Kt({color:"#0e1830",map:pr.map,emissiveMap:pr.em,emissive:"#ffffff",emissiveIntensity:.9,metalness:.85,roughness:.18,envMapIntensity:1.8})),mr=new We(l(new _t(f.w,f.h,f.d)),[Iu,Iu,ve,Jf,Km,Iu]);mr.position.set(0,f.h/2,f.z-f.d/2),mr.castShadow=t,mr.receiveShadow=!0,o.add(mr);let va=l(new at({color:"#2a3346",roughness:.35,metalness:.9})),Du=(f.w-4)/f.cols,Lu=(f.h-f.winY0-10)/f.rows;{let _=[];for(let C=0;C<=f.cols;C++){let U=new _t(.35,f.h-f.winY0-6,.5);U.translate(-f.w/2+2+C*Du,f.winY0+(f.h-f.winY0-6)/2-2,f.z+.2),_.push(U)}for(let C=0;C<=f.rows;C++){let U=new _t(f.w-3,.3,.5);U.translate(0,f.winY0+C*Lu-.2,f.z+.2),_.push(U)}for(let C of[-1,1]){let U=new _t(.8,f.h,1.2);U.translate(C*(f.w/2+.1),f.h/2,f.z+.3),_.push(U)}o.add(new We(l(an(_,!1)),va)),_.forEach(C=>C.dispose())}let Nu;{let _=[],C=(k,J,ce,ie)=>{let Oe=new _t(k,J,f.d-ie*2);Oe.translate(0,ce+J/2,f.z-f.d/2),_.push(Oe)};C(f.w-4,5,f.h,2),C(f.w-12,5,f.h+5,5),C(f.w-22,6,f.h+10,8),o.add(new We(l(an(_,!1)),Jf)),_.forEach(k=>k.dispose());let U=new We(l(new rn(.15,.4,24,6)),va);U.position.set(0,f.h+28,f.z-f.d/2),o.add(U),Nu=l(Au("#ff2a1a",2.8));let V=[];for(let[k,J]of[[f.h+5,f.w-4],[f.h+10,f.w-12],[f.h+16,f.w-22]]){let ce=new _t(J,.18,.18);ce.translate(0,k,f.z-1.6-(f.w-4-J)/8),V.push(ce)}for(let k of[-1,1]){let J=new _t(.22,f.h,.22);J.translate(k*(f.w/2-.2),f.h/2,f.z-.15),V.push(J)}o.add(new We(l(an(V,!1)),Nu)),V.forEach(k=>k.dispose())}let Uu=gf("#ff2020",5,.9);Uu.position.set(0,f.h+40.5,f.z-f.d/2),o.add(Uu);let $m=l($t(Zt(128,128,_=>{_.fillStyle="#fff",_.fillRect(0,0,128,128),_.fillStyle="rgba(0,0,0,0.16)";for(let C=0;C<5;C++)_.fillRect(8+C*24,6,14,5);_.fillStyle="rgba(0,0,0,0.5)",_.fillRect(8,84,44,40),_.fillRect(70,92,50,32),_.beginPath(),_.arc(90,70,9,0,6.3),_.fill(),_.fillRect(80,78,20,26),_.fillStyle="#000",_.fillRect(62,0,4,128),_.strokeStyle="#000",_.lineWidth=8,_.strokeRect(0,0,128,128)}))),Fu=[],Jm=l(new Pt(Du-.9,Lu-.8)),jm=l(new St({color:"#ffffff",map:$m,toneMapped:!0,fog:!0})),Un=new xn(Jm,jm,f.cols*f.rows),jf=new Ze,gr=new Ee,Qm=_=>_>.95?gr.set("#ffc890").multiplyScalar(.9):_>.8?gr.set("#a8c8e8").multiplyScalar(.6):_>.62?gr.set("#6a8cb0").multiplyScalar(.35):gr.set("#0c1626").multiplyScalar(.9),Qf=()=>{Fu.length=0;let _=4242,C=()=>(_=_*16807%2147483647)/2147483647;for(let U=0;U<f.rows;U++)for(let V=0;V<f.cols;V++){let k=U*f.cols+V,J=-f.w/2+2+Du*(V+.5),ce=f.winY0+Lu*(U+.5),ie=C();Fu.push({i:k,x:J,y:ce,hp:30,broke:!1,lit:ie}),jf.makeTranslation(J,ce,f.z+.06),Un.setMatrixAt(k,jf),Un.setColorAt(k,Qm(ie))}Un.instanceMatrix.needsUpdate=!0,Un.instanceColor&&(Un.instanceColor.needsUpdate=!0)};Qf(),o.add(Un);let jo=[],e0=_=>{_.broke=!0,Un.setColorAt(_.i,gr.set("#120604")),Un.instanceColor&&(Un.instanceColor.needsUpdate=!0),Math.random()<.35&&jo.push(_)},t0=l($t(Zt(1024,300,_=>{_.clearRect(0,0,1024,300),_.font='900 118px "Arial Black", Impact, sans-serif',_.textBaseline="middle",_.textAlign="center",_.fillStyle="#eef3fb",_.shadowColor="#9fc0ff",_.shadowBlur=0,_.fillText("nSLAVE",512,118),_.font="700 44px Arial, sans-serif",_.fillStyle="#ff4a3a",_.shadowColor="#ff2020",_.fillText("H  E  A  D  Q  U  A  R  T  E  R  S",512,224),_.font=`700 28px ${An}`,_.fillStyle="#ff9a8a",_.fillText("\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",512,275)}))),ed=new We(l(new Pt(19,5.6)),l(new St({map:t0,color:new Ee("#ffffff").multiplyScalar(1.5),toneMapped:!1,transparent:!0,depthWrite:!1,fog:!1})));ed.position.set(7.6,f.h-4.6,f.z+.45),o.add(ed);let _a=new Gt;_a.position.set(-9,f.h-4.7,f.z+.5);let td=l(Um(b)),nd=new We(l(new Pt(16,9)),td);nd.userData.noAO=!0;let Ou=gf("#ff2a1a",20,.3);Ou.position.z=.4,_a.add(nd,Ou),o.add(_a);let n0=new I(-9,f.h-4.7,f.z+3),i0=l(new St({map:l(bm(r)),color:new Ee("#ffffff").multiplyScalar(1.15),toneMapped:!0})),id=new We(l(new Pt(f.w-2.5,8.2)),i0);id.position.set(0,4.35,f.z+.32),o.add(id);{let _=[];for(let C=0;C<=14;C++){let U=new _t(.16,8.4,.24);U.translate(-(f.w-2.5)/2+C*((f.w-2.5)/14),4.4,f.z+.48),_.push(U)}for(let C of[.2,4.4,8.5]){let U=new _t(f.w-2.2,.24,.3);U.translate(0,C,f.z+.48),_.push(U)}o.add(new We(l(an(_,!1)),va)),_.forEach(C=>C.dispose())}let sd=new We(l(new _t(f.w+4,.6,7)),va);sd.position.set(0,9,f.z+3),o.add(sd);let rd=new We(l(new _t(f.w+2,.1,.4)),l(Au("#27e6ff",3)));rd.position.set(0,8.66,f.z+6.3),o.add(rd);for(let _=0;_<9;_++)te(-f.w/2+2+_*((f.w-4)/8),8.55,f.z+5.4,"#ffe0b0",2.2,0,.8);{let U=l($t(Zt(2048,360,Oe=>{Oe.clearRect(0,0,2048,360);let Je=230,ut=360/2;Oe.lineCap=Oe.lineJoin="round";let Jt=(kt,Ht)=>{for(let[gt,$n,zu]of[[Ht*3.2,"rgba(255,30,40,0.35)",60],[Ht*1.6,"#ff2030",26],[Ht*.55,"#ffd6d0",6]])Oe.shadowColor="#ff1a2a",Oe.shadowBlur=zu,Oe.strokeStyle=$n,Oe.lineWidth=gt,Oe.beginPath(),kt(),Oe.stroke()};Jt(()=>{Oe.moveTo(Je-170,ut),Oe.quadraticCurveTo(Je,ut-150,Je+170,ut),Oe.quadraticCurveTo(Je,ut+150,Je-170,ut)},9),Jt(()=>Oe.arc(Je,ut,52,0,Math.PI*2),8),Oe.shadowBlur=30,Oe.fillStyle="#ffe8e4",Oe.beginPath(),Oe.ellipse(Je,ut,9,40,0,0,Math.PI*2),Oe.fill(),Oe.font='900 210px "Arial Black", Impact, sans-serif',Oe.textBaseline="middle",Oe.textAlign="center";let zt=1230;for(let[kt,Ht,gt]of[[26,"rgba(255,30,40,0.35)",70],[12,"#ff2030",28],[4,"#ffd6d0",6]])Oe.shadowColor="#ff1a2a",Oe.shadowBlur=gt,Oe.strokeStyle=Ht,Oe.lineWidth=kt,Oe.strokeText("TERRORNODE",zt,ut+6,1500)}))),V=Math.min(f.w+2,30),k=V*360/2048,J=new We(l(new _t(V+.8,k+.5,.35)),va);J.position.set(0,9.3+k/2+.2,f.z+6.25),o.add(J);let ce=l(new St({map:U,color:new Ee("#ffffff").multiplyScalar(2.6),toneMapped:!1,transparent:!0,depthWrite:!1})),ie=new We(l(new Pt(V,k)),ce);ie.position.set(0,J.position.y,f.z+6.45),ie.userData.noAO=!0,o.add(ie);for(let Oe=0;Oe<5;Oe++)te(-V/2+V*(.1+Oe*.2),J.position.y,f.z+6.8,"#ff2030",5.5,0,.5)}let s0=Zt(64,128,_=>{_.fillStyle="#05070a",_.fillRect(0,0,64,128);for(let C=6;C<128;C+=8){_.fillStyle="#0d1520",_.fillRect(4,C,56,6);for(let U=8;U<58;U+=6)_.fillStyle=Math.random()<.5?"#27e6ff":Math.random()<.3?"#ff3030":"#0a3a44",_.fillRect(U,C+2,3,2)}}),ya=[],Bu=[];for(let _=0;_<8;_++){let C=l(new qn(s0));C.colorSpace=Ft,C.wrapS=C.wrapT=Yt;let U=l(new at({color:"#141a24",metalness:.7,roughness:.4,emissive:"#ffffff",emissiveMap:C,emissiveIntensity:2.2}));Bu.push(U);let V=new We(l(new _t(2.6,6.4,1.6)),U);V.position.set((_<4?-1:1)*(4.2+_%4*3.1),3.2,f.z+2.2),V.castShadow=t,o.add(V),ya.push({mesh:V,hp:160,broke:!1,t:0})}let r0=_=>{_.broke=!0;let C=_.mesh.material;C.emissiveIntensity=.05,C.color.set("#0a0a0a"),_.mesh.rotation.z=(Math.random()-.5)*.25},a0=()=>{Qf(),jo.length=0;for(let _ of ya){_.broke=!1,_.hp=160;let C=_.mesh.material;C.emissiveIntensity=2.2,C.color.set("#141a24"),_.mesh.rotation.z=0}};i&&H();let Oi=[],o0=l(Tu("#bcd4ff",.16,.7,!0,b)),l0=l(new rn(9,.6,160,24,1,!0)),Qo=(_,C,U)=>{let V=new Gt;V.position.set(_,C,U);let k=new We(l0,o0);k.position.y=80,k.userData.noAO=!0,k.frustumCulled=!1,V.add(k),o.add(V),Oi.push(V)};Qo(9,f.h+2,f.z-4),Qo(-9,f.h+2,f.z-4),t&&(Qo(-21,.5,-48),Qo(21,.5,-58)),i&&(Oi[0].visible=Oi[1].visible=!1,D.intensity=0,L.intensity=0);let ad=[],Hu=[];if(i){let _=(ie,Oe,Je)=>{let ut=l(n.material("concrete_floor_02",[ie/5,Oe/5],Je,.02));return ut.roughness=.92,ut.envMapIntensity=.5,ut},C=(ie,Oe,Je,ut,Jt,zt,kt="#55585f")=>{let Ht=new We(l(new _t(ie,Oe,Je)),_(Math.max(ie,Je),Oe,kt));return Ht.position.set(ut,Jt,zt),Ht.castShadow=t,Ht.receiveShadow=!0,o.add(Ht),Ht},U=(ie,Oe,Je,ut,Jt,zt,kt,Ht)=>{let gt=new We(l(new Pt(Oe,Je)),_(Oe,Je,"#8d9097"));gt.position.set(ut,Jt,zt),gt.rotation.y=Math.atan2(kt,Ht),gt.receiveShadow=!0,o.add(gt),ad.push({id:ie,mesh:gt,w:Oe,h:Je,center:new I(ut,Jt,zt),normal:new I(kt,0,Ht)})};C(2*Nt+6,2.2,8,0,8.6,-62);for(let ie of[-1,1]){C(2*Nt+6,1.1,.14,0,10.25,-62+ie*3.95,"#25272c");for(let Je of[-62-2.6,-62+2.6])C(2.4,7.5,2.2,ie*17.2,3.75,Je),Hu.push({x0:ie*17.2-1.3,x1:ie*17.2+1.3,z0:Je-1.2,z1:Je+1.2});U(ie<0?"bridge-left":"bridge-right",4.6,6.6,ie*(17.2-1.22),3.6,-62,-ie,0);let Oe=new Bn("#fff4e0",t?38:26,20,1.7);Oe.position.set(ie*8,7.2,-62),o.add(Oe),te(ie*8,7.45,-62,"#fff4e0",1.2,0,2)}let k=-80;C(2*Nt+2,15,2.4,0,7.5,k-1.2,"#4a4d54"),Hu.push({x0:-Nt-1,x1:Nt+1,z0:k-2.4,z1:k+.3}),U("hall-of-fame",30,9,0,4.8,k+.03,0,1);let J=new Ks("#ffffff",t?260:160,46,.95,.9,1.2);J.position.set(0,14.2,k+9),J.target.position.set(0,3,k),o.add(J,J.target),te(0,14.2,k+8.6,"#ffffff",1.8,0,1.8);let ce=0;for(let ie of le){if(ie.za<-54||ie.za>0||ie.za-ie.zb<9||ce++%2)continue;let Oe=Math.min(10,ie.za-ie.zb-3),Je=(ie.za+ie.zb)/2;U(`wall-${ie.sx<0?"l":"r"}${Math.round(-Je)}`,Oe,3.7,ie.sx*(Nt-.04),2.1,Je,-ie.sx,0)}}for(let _=0;_<a(6,3);_++){let C=new We(l(new Pt(64,8)),l(Lm(b,_%2?"#24607c":"#1e4a78",.2)));C.position.set(0,3.2,-8-_*14),C.userData.noAO=!0,o.add(C)}for(let[_,C,U,V,k,J]of[[-185,"#0b0e1e","rgba(20,50,80,0.55)",.16,1,1],[-240,"#0e1a30","rgba(25,60,95,0.7)",.12,1.35,2],[-310,"#142a45","rgba(40,90,120,0.8)",.09,1.8,3]]){let ce=l(ym(J*13,C,U,V,r)),ie=new We(l(new Pt(900*k,225*k)),l(new St({map:ce,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!0})));ie.position.set(0,225*k*.5-6,_),ie.renderOrder=-5,ie.userData.noAO=!0,o.add(ie)}{let _=a(3600,1300),C=new Float32Array(_*6),U=new Float32Array(_*8),V=new Float32Array(_*2);for(let ce=0;ce<_;ce++){let ie=(Math.random()-.5)*66,Oe=Math.random()*38,Je=-Math.random()*100+8,ut=Math.random();C.set([ie,Oe,Je,ie,Oe,Je],ce*6),U.set([0,0,0,ut,0,0,0,ut],ce*8),V.set([0,1],ce*2)}let k=l(new Mt);k.setAttribute("position",new vt(C,3)),k.setAttribute("aSeed",new vt(U,4)),k.setAttribute("aEnd",new vt(V,1));let J=new Vs(k,l(Cm(b,"#8fb0d0")));J.frustumCulled=!1,J.userData.noAO=!0,J.layers.set(1),o.add(J)}if(i)for(let _ of Re.slice().reverse())rt.splice(_.g0,_.g1-_.g0);{let _=rt.length,C=new Float32Array(_*3),U=new Float32Array(_*3),V=new Float32Array(_),k=new Float32Array(_*2);rt.forEach((ie,Oe)=>{C.set([ie.p.x,ie.p.y,ie.p.z],Oe*3),U.set([ie.c.r,ie.c.g,ie.c.b],Oe*3),V[Oe]=ie.s,k.set([ie.ph,ie.mode],Oe*2)});let J=l(new Mt);J.setAttribute("position",new vt(C,3)),J.setAttribute("aColor",new vt(U,3)),J.setAttribute("aSize",new vt(V,1)),J.setAttribute("aPh",new vt(k,2));let ce=new ps(J,l(Im(Vo(),b)));ce.frustumCulled=!1,ce.userData.noAO=!0,o.add(ce)}if(e.add(o),i)for(let _ of Re)for(let C of o.children.slice(_.c0,_.c1))C.visible=!1;let el=new I,tl=new sn,od=new I,nl=new Ze,c0=new Xn,ld=new oe,u0=(_,C,U)=>{if(b.uT.value=C,v.uniforms.uT.value=C,U instanceof Vt&&(s.getDrawingBufferSize(ee),b.uPx.value=ee.y/(2*Math.tan(ji.degToRad(U.fov)/2))),Uu.material.opacity=Math.sin(C*3)>0?.95:.1,Oi[0].rotation.set(Math.sin(C*.33)*.55,0,Math.cos(C*.27)*.45-.2),Oi[1].rotation.set(Math.cos(C*.29)*.5,0,Math.sin(C*.35)*.45+.2),Oi[2]&&Oi[2].rotation.set(-.15+Math.sin(C*.21)*.25,0,.3+Math.cos(C*.17)*.3),Oi[3]&&Oi[3].rotation.set(-.1+Math.cos(C*.19)*.25,0,-.3+Math.sin(C*.23)*.3),U.getWorldPosition(el),ld.set(ji.clamp((el.x-_a.position.x)/40,-1,1),-.2+Math.sin(C*.7)*.15),td.uniforms.uLook.value.copy(ld),Ou.material.opacity=.28+Math.sin(C*2.3)*.08,Nu.color.setRGB(2.4+Math.sin(C*4)*.7,.2,.15+(Math.sin(C*.8)>.6?1.2:0)),mt.update(C),jo.length){for(let ce of jo)Un.setColorAt(ce.i,gr.setRGB(1.6+Math.random()*.8,.45+Math.random()*.25,.08));Un.instanceColor&&(Un.instanceColor.needsUpdate=!0)}for(let ce=0;ce<Bu.length;ce++){let ie=Bu[ce].emissiveMap;ya[ce].broke||(ie.offset.y=Math.floor(C*6+ce)*.125)}for(let ce of da)ce.intensity=60*(.94+Math.random()*.06);for(let ce=0;ce<zn.length;ce++){let ie=zn[ce],Oe=ie.hi-ie.lo,Je=(ie.ax===0?ie.x:ie.z)+ie.dir*ie.spd*_;Je>ie.hi?Je-=Oe:Je<ie.lo&&(Je+=Oe),ie.ax===0?ie.x=Je:ie.z=Je,tl.setFromEuler(c0.set(0,ie.ry,Math.sin(C*.8+ce)*.03)),nl.compose(el.set(ie.x,ie.y+(ie.sc>1?Math.sin(C*.6+ce*2)*.4:0),ie.z),tl,od.setScalar(ie.sc)),ss.setMatrixAt(ce,nl)}ss.instanceMatrix.needsUpdate=!0;let V=C%16/16,k=V<.75,J=40-V/.75*300;tl.identity();for(let ce=0;ce<Hn;ce++)nl.compose(el.set(ae,he+1.95,J+ce*9.6),tl,od.setScalar(k?1:0)),ns.setMatrixAt(ce,nl);hr.visible=k,hr.position.set(ae,he+1.95,J-ts/2-.2),ns.instanceMatrix.needsUpdate=!0,S.intensity*=Math.pow(.002,_)},h0=0;return{group:o,spots:ad,blockers:Hu,windows:Un,wins:Fu,racks:ya,towerBody:mr,solids:[mr],ground:O,eye:_a,hitLight:S,lightWorld:n0,breakWindow:e0,breakRack:r0,rebuild:a0,beforeRender:(_,C,U)=>{if(!G||h0++<3)return;let V=G;(V.getReflectionCamera?V.getReflectionCamera(U):V.camera).layers.set(0),O.visible=!1,G.onBeforeRender.call(G,_,C,U),O.visible=!0,N.uReflMat.value.copy(G.material.uniforms.textureMatrix.value).multiply(j)},resize:(_,C)=>{G?.getRenderTarget().setSize(Math.max(64,Math.round(_*.5)),Math.max(64,Math.round(C*.5)))},update:u0,dispose:()=>{e.remove(o),c.forEach(_=>_.dispose());for(let _ of ya)_.mesh.geometry.dispose();Un.dispose(),G?.dispose(),p.dispose(),e.environment=null}}}async function Bm(s,e){let t=Math.min(8,s.capabilities.getMaxAnisotropy()),n=new Ys,i=(c,l)=>new Promise(u=>n.load(c,h=>{h.wrapS=h.wrapT=Yt,h.anisotropy=t,l&&(h.colorSpace=Ft),u(h)},void 0,()=>u(null))),r=new Map;await Promise.all(["concrete_floor_02","large_floor_tiles_02"].map(async c=>r.set(c,await Promise.all([i(`${e}${c}/diff.webp`,!0),i(`${e}${c}/nor.webp`,!1),i(`${e}${c}/rough.webp`,!1)]))));let a=[],o=(c,l)=>{if(!c)return null;let u=c.clone();return u.repeat.set(l[0],l[1]),u.needsUpdate=!0,a.push(u),u};return{env:null,material:(c,l,u,h=.05)=>{let[d,f,g]=r.get(c)||[null,null,null];return new at({map:o(d,l),normalMap:o(f,l),roughnessMap:o(g,l),color:u,metalness:h,normalScale:new oe(1.6,1.6)})},dispose:()=>a.forEach(c=>c.dispose())}}function Hm(){let s=new oa({uniforms:{tDiffuse:{value:null},uShadow:{value:new I(1,1,1)},uHigh:{value:new I(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.5},uTime:{value:0},uAberr:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tDiffuse; uniform vec3 uShadow; uniform vec3 uHigh;
      uniform float uSat, uContrast, uVignette, uTime, uAberr;
      varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
      void main(){
        vec2 d = vUv - 0.5;
        float r2 = dot(d, d);
        vec2 off = d * r2 * uAberr * 8.0;
        vec3 c = vec3(texture2D(tDiffuse, vUv + off).r, texture2D(tDiffuse, vUv).g, texture2D(tDiffuse, vUv - off).b);
        float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
        c *= mix(uShadow, uHigh, smoothstep(0.1, 0.8, l));
        c = mix(vec3(l), c, uSat);
        c = (c - 0.5) * uContrast + 0.5;
        c *= 1.0 - uVignette * smoothstep(0.18, 0.62, r2 * 2.2);
        c += (hash(vUv * 1024.0) - 0.5) * 0.035;
        gl_FragColor = vec4(max(c, 0.0), 1.0);
      }`}),e=s.uniforms;return{pass:s,apply:t=>{e.uShadow.value.set(...t.shadow),e.uHigh.value.set(...t.high),e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uVignette.value=t.vignette},tick:t=>{e.uTime.value=t%10}}}var Wo=class extends Ti{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new wf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Sf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new zf(t)})}load(e,t,n,i){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=$i.extractUrlBase(e);a=$i.resolveURL(l,this.path)}else a=$i.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Wm){try{a[xt.KHR_BINARY_GLTF]=new kf(e)}catch(h){i&&i(h);return}r=JSON.parse(a[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Zf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:a[h]=new Ef;break;case xt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Vf(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:a[h]=new Gf;break;case xt.KHR_MESH_QUANTIZATION:a[h]=new Wf;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function zM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Sf=class{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ee(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],gn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new $s(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Bn(u),l.distance=h;break;case"spot":l=new Ks(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Di(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Ef=class{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return St}extendParams(e,t,n){let i=[];e.color=new Ee(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],gn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}},Tf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},wf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(o,o)}return Promise.all(r)}},Af=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Rf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Cf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],gn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Pf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],gn),Promise.all(r)}},Df=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Lf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],gn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(r)}},Nf=class{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Kt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Of=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Bf=class{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=i.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},Hf=class{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},zf=class{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ii.TRIANGLES&&l.mode!==ii.TRIANGLE_STRIP&&l.mode!==ii.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let g of h){let x=new Ze,m=new I,p=new sn,y=new I(1,1,1),b=new xn(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),b.setMatrixAt(v,x.compose(m,p,y));for(let v in c)if(v==="_COLOR_0"){let T=c[v];b.instanceColor=new ni(T.array,T.itemSize,T.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Ot.prototype.copy.call(b,g),this.parser.assignFinalMaterial(b),f.push(b)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Wm="glTF",Go=12,zm={JSON:1313821514,BIN:5130562},kf=class{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Go),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Go,r=new DataView(e,Go),a=0;for(;a<i;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===zm.JSON){let l=new Uint8Array(e,Go+a,o);this.content=n.decode(l)}else if(c===zm.BIN){let l=Go+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=qf[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=qf[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=ca[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}h(f)},o,l,gn,d)})})}},Gf=class{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Wf=class{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}},Cu=class extends Yi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,y=1-m,b=p-d+h;for(let v=0;v!==o;v++){let T=a[x+v+o],A=a[x+v+c]*u,D=a[g+v+o],L=a[g+v]*u;r[v]=y*T+b*A+m*D+p*L}return r}},kM=new sn,Xf=class extends Cu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return kM.fromArray(r).normalize().toArray(r),r}},ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},ca={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},km={9728:Wt,9729:jt,9984:gc,9985:ea,9986:nr,9987:Zn},Vm={33071:ei,33648:Or,10497:Yt},yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},bs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VM={CUBICSPLINE:void 0,LINEAR:Fs,STEP:Us},Mf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function GM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new at({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),s.DefaultMaterial}function ur(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Di(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function WM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function XM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qM(s){let e,t=s.extensions&&s.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bf(t.attributes):e=s.indices+":"+bf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+bf(s.targets[n]);return e}function bf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Yf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ZM=new Ze,Zf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new zM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new Ys(this.options.manager):this.textureLoader=new po(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return ur(r,o,i),Di(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,a){n.load($i.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let a=yf[i.type],o=ca[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new vt(l,a,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=yf[i.type],l=ca[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,x,m;if(f&&f!==h){let p=Math.floor(d/f),y="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,b=t.cache.get(y);b||(x=new l(o,p*f,i.count*f/u),b=new Hs(x,f/u),t.cache.add(y,b)),m=new fs(b,c,d%f/u,g)}else o===null?x=new l(i.count*c):x=new l(o,d,i.count*c),m=new vt(x,c,g);if(i.sparse!==void 0){let p=yf.SCALAR,y=ca[i.sparse.indices.componentType],b=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,T=new y(a[1],b,i.sparse.count*p),A=new l(a[2],v,i.sparse.count*c);o!==null&&(m=new vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,L=T.length;D<L;D++){let S=T[D];if(m.setX(S,A[D*c]),c>=2&&m.setY(S,A[D*c+1]),c>=3&&m.setZ(S,A[D*c+2]),c>=4&&m.setW(S,A[D*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=km[d.magFilter]||jt,u.minFilter=km[d.minFilter]||Zn,u.wrapS=Vm[d.wrapS]||Yt,u.wrapT=Vm[d.wrapT]||Yt,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Wt&&u.minFilter!==jt,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=i.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new on(x);m.needsUpdate=!0,d(m)}),t.load($i.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Di(h,a),h.userData.mimeType=a.mimeType||YM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Yr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new qr,En.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return at}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[xt.KHR_MATERIALS_UNLIT]){let h=i[xt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],gn),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Ft)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Qt);let u=r.alphaMode||Mf.OPAQUE;if(u===Mf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Mf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==St&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new oe(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==St&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==St){let h=r.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],gn)}return r.emissiveTexture!==void 0&&a!==St&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),Di(h,r),t.associations.set(h,{materials:e}),r.extensions&&ur(i,h,r),h})}createUniqueName(e){let t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Gm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],u=qM(l),h=i[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Gm(new Mt,l,t),i[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?GM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let x=u[f],m=a[f],p,y=l[f];if(m.mode===ii.TRIANGLES||m.mode===ii.TRIANGLE_STRIP||m.mode===ii.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ds(x,y):new We(x,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ii.TRIANGLE_STRIP?p.geometry=mf(p.geometry,Po):m.mode===ii.TRIANGLE_FAN&&(p.geometry=mf(p.geometry,na));else if(m.mode===ii.LINES)p=new Vs(x,y);else if(m.mode===ii.LINE_STRIP)p=new ks(x,y);else if(m.mode===ii.LINE_LOOP)p=new Ya(x,y);else if(m.mode===ii.POINTS)p=new ps(x,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&XM(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Di(p,r),m.extensions&&ur(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&ur(i,h[0],r),h[0];let d=new Gt;r.extensions&&ur(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(ji.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new Ze;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new zs(o,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],g=i.samplers[f.sampler],x=f.target,m=x.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,y=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",y)),l.push(g),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],x=h[3],m=h[4],p=[];for(let b=0,v=d.length;b<v;b++){let T=d[b],A=f[b],D=g[b],L=x[b],S=m[b];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let E=n._createAnimationTracks(T,A,D,L,S);if(E)for(let N=0;N<E.length;N++)p.push(E[N])}let y=new qs(r,void 0,p);return Di(y,i),y})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ZM)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new qi:l.length>1?u=new Gt:l.length===1?u=l[0]:u=new Ot,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Di(u,r),r.extensions&&ur(n,u,r),r.matrix!==void 0){let h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Gt;n.name&&(r.name=i.createUniqueName(n.name)),Di(r,n),n.extensions&&ur(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof En||d instanceof on)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let a=[],o=e.name?e.name:e.uuid,c=[];bs[r.path]===bs.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(bs[r.path]){case bs.weights:l=bi;break;case bs.rotation:l=Si;break;case bs.translation:case bs.scale:l=Ei;break;default:n.itemSize===1?l=bi:l=Ei;break}let u=i.interpolation!==void 0?VM[i.interpolation]:Fs,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+bs[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Yf(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Si?Xf:Cu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function KM(s,e,t){let n=e.attributes,i=new Wn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new I(c[0],c[1],c[2]),new I(l[0],l[1],l[2])),o.normalized){let u=Yf(ca[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,c=new I;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Yf(ca[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;let a=new Fn;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Gm(s,e,t){let n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in n){let o=qf[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return pt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${pt.workingColorSpace}" not supported.`),Di(s,e),KM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?WM(s,e.targets,t):s})}var Kf=1.78,Xm=new Map;function Pu(s,e){let t=Xm.get(s);if(!t){let a=new Float32Array(65536);for(let f=0;f<256;f++)for(let g=0;g<256;g++){let x=g/256,m=f/256,p=0;if(s==="knit"){let y=x*8%1,b=m*8%1,v=Math.abs(y-.5)*2;p=Math.pow(Math.sin(Math.PI*((v*.55+b)%1)),2)*(.75+.25*Math.sin(Math.PI*y))}else s==="twill"?p=.5+.5*Math.sin(2*Math.PI*(x+m)*12)*(.85+.15*Math.sin(2*Math.PI*m*48)):p=Math.max(Math.pow(Math.abs(Math.sin(Math.PI*x*6)),30),Math.pow(Math.abs(Math.sin(Math.PI*m*6)),30))*.8+.2*Math.sin(2*Math.PI*x*40)*Math.sin(2*Math.PI*m*40);a[f*256+g]=p+(Math.random()-.5)*.08}let o=document.createElement("canvas"),c=document.createElement("canvas");o.width=o.height=c.width=c.height=256;let l=o.getContext("2d").createImageData(256,256),u=c.getContext("2d").createImageData(256,256),h=(f,g)=>a[(g+256)%256*256+(f+256)%256];for(let f=0;f<256;f++)for(let g=0;g<256;g++){let x=(h(g+1,f)-h(g-1,f))*2,m=(h(g,f+1)-h(g,f-1))*2,p=Math.hypot(x,m,1),y=(f*256+g)*4;l.data[y]=128-x/p*127,l.data[y+1]=128-m/p*127,l.data[y+2]=128+1/p*127,l.data[y+3]=255;let b=200+(.5-h(g,f))*90;u.data[y]=u.data[y+1]=u.data[y+2]=Math.max(0,Math.min(255,b)),u.data[y+3]=255}o.getContext("2d").putImageData(l,0,0),c.getContext("2d").putImageData(u,0,0);let d=f=>{let g=new qn(f);return g.wrapS=g.wrapT=Yt,g.anisotropy=4,g};t={normal:d(o),rough:d(c)},Xm.set(s,t)}let n=t.normal.clone(),i=t.rough.clone();return n.repeat.set(e,e),i.repeat.set(e,e),{normalMap:n,roughnessMap:i}}var $M={Hoodie:()=>new Kt({color:"#45464c",roughness:.92,metalness:0,sheen:.6,sheenRoughness:.6,sheenColor:new Ee("#8a8a90"),normalScale:new oe(.7,.7),...Pu("knit",36)}),Trousers:()=>new Kt({color:"#56575d",roughness:.86,metalness:0,sheen:.5,sheenRoughness:.65,sheenColor:new Ee("#7c7c82"),normalScale:new oe(.5,.5),...Pu("twill",30)}),Gloves:()=>new at({color:"#6a6a6e",roughness:.65,metalness:0}),Trim:()=>new at({color:"#2e2f34",roughness:.92,metalness:0,normalScale:new oe(.8,.8),...Pu("knit",60)}),Shoes:()=>new at({color:"#f4f4f4",roughness:.4,metalness:0,emissive:"#202020"}),Sole:()=>new at({color:"#8c8c8e",roughness:.6,metalness:0}),Void:()=>new St({color:"#000000"}),Mask:()=>new Kt({color:"#0b0b0d",roughness:.95,metalness:0,sheen:.25,sheenRoughness:.8,sheenColor:new Ee("#2a2a2e")}),Pack:()=>new at({color:"#36373c",roughness:.5,metalness:.05,normalScale:new oe(.45,.45),...Pu("ripstop",24)}),Can:()=>new at({color:"#b8b8bc",roughness:.35,metalness:.8}),Cap:()=>new at({color:"#f2f2f2",roughness:.5,metalness:0})};async function qm(s,e,t){let n=await new Wo().loadAsync(s),i=n.scene.getObjectByName("Armature")||n.scene.children[0],r=i.children[0],a=[],o=$=>{let ge=new qi;return ge.name=$.name,ge.position.copy($.position),ge.quaternion.copy($.quaternion),ge.scale.copy($.scale),a.push(ge),$.children.forEach(xe=>ge.add(o(xe))),ge},c=o(r),l=new Ot;l.position.copy(i.position),l.quaternion.copy(i.quaternion),l.scale.copy(i.scale),l.add(c);let u=new Gt;u.add(l),u.updateMatrixWorld(!0);let h=$=>{let ge=a.find(xe=>xe.name.replace(/^mixamorig:?/,"")===$);if(!ge)throw new Error("writer: no bone "+$);return ge},d=$=>h($).getWorldPosition(new I),f=$=>a.indexOf($),g=Math.min(d("LeftToeBase").y,d("RightToeBase").y),m=(d("Head").y-g)/.89,p=$=>$/Kf*m,y=[],b=[];if(t)try{let $=await new Wo().loadAsync(t);$.scene.updateMatrixWorld(!0),$.scene.traverse(ge=>{let xe=ge;if(!xe.isSkinnedMesh)return;let Ne=xe.geometry.clone();Ne.applyMatrix4(xe.matrixWorld);let Ue=xe.skeleton.bones.map(Te=>a.findIndex(He=>He.name===Te.name)),qe=Ne.attributes.skinIndex;for(let Te=0;Te<qe.array.length;Te++)qe.array[Te]=Math.max(0,Ue[qe.array[Te]]);qe.needsUpdate=!0;let rt=xe.material,te=($M[rt.name]||(()=>rt))(),de=new ds(Ne,te);de.name=xe.name,y.push(de),b.push(Ne,te)})}catch($){console.warn("writer model",$)}let v=[];if(!y.length){let $={hoodie:0,trousers:1,shoes:2,skin:3,void:4,trim:5},ge=(se,P,z,K,_e,le=.18)=>{let w=se.attributes.position,M=w.count,F=new Uint16Array(M*4),q=new Float32Array(M*4),re=z.clone().sub(P),B=Math.max(1e-9,re.lengthSq()),me=new I,ae=K.parent instanceof qi?K.parent:K;for(let he=0;he<M;he++){me.fromBufferAttribute(w,he);let Fe=ji.clamp(me.clone().sub(P).dot(re)/B,0,1),fe=f(K),be=f(K),Se=0;Fe<le&&ae!==K?(be=f(ae),Se=.5-Fe/le*.5):_e&&Fe>1-le&&(be=f(_e),Se=(Fe-(1-le))/le*.5),F[he*4]=fe,F[he*4+1]=be,q[he*4]=1-Se,q[he*4+1]=Se}return se.setAttribute("skinIndex",new vi(F,4)),se.setAttribute("skinWeight",new st(q,4)),se},xe=(se,P,z,K,_e,le,w={})=>{let M=d(se),F=d(P),q=F.clone().sub(M),re=q.length(),B=(w.extend||0)*re,me=M.clone().addScaledVector(q.normalize(),re+B),ae=re+B,he=w.radial||14,Fe=new rn(p(K),p(z),ae,he,8,!0);Fe.translate(0,ae/2,0);let fe=new Pn(p(z),he,8,0,Math.PI*2,Math.PI/2,Math.PI/2),be=new Pn(p(K),he,8,0,Math.PI*2,0,Math.PI/2);be.translate(0,ae,0);let Se=an([Fe.toNonIndexed(),fe.toNonIndexed(),be.toNonIndexed()]);w.squash&&Se.scale(1,1,w.squash),Se.applyQuaternion(new sn().setFromUnitVectors(new I(0,1,0),q)),Se.translate(M.x,M.y,M.z),v.push({geo:ge(Se,M,me,h(se),le?h(le):null),mat:_e})},Ne=(se,P)=>{let K=[],_e=[],le=[],w=[],M=[];for(let B=0;B<se.length-1;B++)for(let me=0;me<4;me++){let ae=me/4,he=se[B],Fe=se[B+1],fe=ae*ae*(3-2*ae);M.push({at:he.at.clone().lerp(Fe.at,ae),rx:he.rx+(Fe.rx-he.rx)*fe,rz:he.rz+(Fe.rz-he.rz)*fe,b0:he.bone,b1:Fe.bone,w:ae,dz:(he.dz||0)+((Fe.dz||0)-(he.dz||0))*fe})}let F=se[se.length-1];M.push({at:F.at.clone(),rx:F.rx,rz:F.rz,b0:F.bone,b1:F.bone,w:0,dz:F.dz||0}),M.forEach(B=>{for(let me=0;me<22;me++){let ae=me/22*Math.PI*2;K.push(B.at.x+Math.sin(ae)*p(B.rx),B.at.y,B.at.z+p(B.dz)+Math.cos(ae)*p(B.rz)),_e.push(f(B.b0),f(B.b1),0,0),le.push(1-B.w,B.w,0,0)}});for(let B=0;B<M.length-1;B++)for(let me=0;me<22;me++){let ae=B*22+me,he=B*22+(me+1)%22,Fe=ae+22,fe=he+22;w.push(ae,Fe,he,he,Fe,fe)}let q=new Mt;q.setAttribute("position",new st(K,3)),q.setAttribute("skinIndex",new vi(_e,4)),q.setAttribute("skinWeight",new st(le,4)),q.setIndex(w);let re=q.toNonIndexed();re.computeVertexNormals(),v.push({geo:re,mat:P})},Ue=(se,P,z,K,_e,le,w=0,M=Math.PI*2,F=0,q=Math.PI)=>{let re=new Pn(1,20,14,w,M,F,q).toNonIndexed();re.scale(p(z),p(K),p(_e)),re.translate(P.x,P.y,P.z);let B=re.attributes.position.count,me=f(h(se));return re.setAttribute("skinIndex",new vi(new Uint16Array(B*4).map((ae,he)=>he%4===0?me:0),4)),re.setAttribute("skinWeight",new st(new Float32Array(B*4).map((ae,he)=>he%4===0?1:0),4)),v.push({geo:re,mat:le}),re},qe=d("Hips"),rt=d("Spine"),te=d("Spine1"),de=d("Spine2"),Te=d("Neck"),He=d("Head");Ne([{at:qe.clone().add(new I(0,-p(.1),0)),rx:.19,rz:.13,bone:h("Hips"),dz:.01},{at:rt,rx:.175,rz:.125,bone:h("Spine"),dz:.015},{at:te,rx:.18,rz:.13,bone:h("Spine1"),dz:.01},{at:de,rx:.2,rz:.13,bone:h("Spine2")},{at:Te.clone().add(new I(0,-p(.02),0)),rx:.19,rz:.12,bone:h("Spine2")},{at:Te.clone().add(new I(0,p(.03),-p(.01))),rx:.085,rz:.08,bone:h("Neck")}],$.hoodie);for(let se of["Left","Right"]){xe(`${se}Shoulder`,`${se}Arm`,.07,.065,$.hoodie,`${se}Arm`,{extend:.1}),xe(`${se}Arm`,`${se}ForeArm`,.062,.052,$.hoodie,`${se}ForeArm`),xe(`${se}ForeArm`,`${se}Hand`,.052,.045,$.hoodie,`${se}Hand`);let P=d(`${se}Hand`),z=d(`${se}ForeArm`),K=P.clone().sub(z).normalize();Ue(`${se}Hand`,P.clone().addScaledVector(K,p(.06)),.045,.045,.045,$.skin),xe(`${se}UpLeg`,`${se}Leg`,.085,.068,$.trousers,`${se}Leg`,{extend:.04}),xe(`${se}Leg`,`${se}Foot`,.066,.06,$.trousers,`${se}Foot`);let _e=d(`${se}Foot`),le=d(`${se}ToeBase`),w=_e.clone().lerp(le,.55);w.y=Math.min(_e.y,le.y)+p(.03);let M=Ue(`${se}Foot`,w,.055,.05,.14,$.shoes),F=Math.atan2(le.x-_e.x,le.z-_e.z);M.translate(-w.x,-w.y,-w.z),M.rotateY(F),M.translate(w.x,w.y,w.z)}let Ce=He.clone().add(new I(0,p(.09),-p(.015)));Ue("Head",Ce,.125,.14,.135,$.hoodie,Math.PI*.18,Math.PI*1.64),Ue("Head",Ce.clone().add(new I(0,-p(.005),p(.02))),.1,.115,.1,$.void);let it=new Mi(1,.11,8,24).toNonIndexed();it.scale(p(.088),p(.112),p(.088)),it.translate(Ce.x,Ce.y-p(.005),Ce.z+p(.11));{let se=it.attributes.position.count,P=f(h("Head"));it.setAttribute("skinIndex",new vi(new Uint16Array(se*4).map((z,K)=>K%4===0?P:0),4)),it.setAttribute("skinWeight",new st(new Float32Array(se*4).map((z,K)=>K%4===0?1:0),4)),v.push({geo:it,mat:$.hoodie})}let ot=new Map;for(let se of v){let P=se.geo.index?se.geo.toNonIndexed():se.geo;P.attributes.normal||P.computeVertexNormals(),["uv","uv1"].forEach(z=>P.deleteAttribute(z)),(ot.get(se.mat)||ot.set(se.mat,[]).get(se.mat)).push(P)}let Ye=[...ot.keys()].sort((se,P)=>se-P),pe=an(Ye.map(se=>an(ot.get(se))),!0),Me=[new at({color:"#45464c",roughness:.86,metalness:0}),new at({color:"#5a5b61",roughness:.8,metalness:0}),new at({color:"#f4f4f4",roughness:.4,metalness:0,emissive:"#202020"}),new at({color:"#6a6a6e",roughness:.65,metalness:0}),new St({color:"#000000"})],ve=Ye.map(se=>Me[se]);y.push(new ds(pe,ve)),b.push(pe,...Me)}for(let $ of y)$.castShadow=e,$.receiveShadow=!0,$.frustumCulled=!1,u.add($);u.updateMatrixWorld(!0);let T=new zs(a);for(let $ of y)$.bind(T);let A=Kf/m,D=new Gt;u.scale.setScalar(A),u.position.y=-g*A,D.add(u);let L=new Map,S=c.position.clone();for(let $ of n.animations){for(let ge of $.tracks)if(/Hips\.position$/.test(ge.name))for(let xe=0;xe<ge.values.length;xe+=3)ge.values[xe]=S.x,ge.values[xe+2]=S.z;L.set($.name,$)}let E=new mo(u),N=null,O="",G=($,ge=.2,xe=!1)=>{if($===O)return;let Ne=L.get($);if(!Ne)return;let Ue=E.clipAction(Ne);Ue.reset(),Ue.setLoop(xe?nu:iu,1/0),Ue.clampWhenFinished=xe,Ue.enabled=!0,Ue.setEffectiveWeight(1),N&&Ue.crossFadeFrom(N,ge,!0),Ue.play(),N=Ue,O=$};G("Idle_Loop",0);let j=h("Spine1"),ee=h("Neck"),Z=h("Head"),X=0,ue=0;return{root:D,height:Kf,play:G,playing:()=>O,update:$=>{if(E.update($),ue+=$,X+=((/Idle/.test(O)?1:0)-X)*Math.min(1,$*2),X>.01){j.rotateX(Math.sin(ue*1.6)*.018*X);let ge=Math.sin(ue*.23)*.5+Math.sin(ue*.61+1.3)*.2;ee.rotateY(ge*.18*X),Z.rotateY(ge*.22*X),Z.rotateX((Math.sin(ue*.37)*.06+.03)*X)}},dispose:()=>{E.stopAllAction(),b.forEach($=>$.dispose())}}}var Xo=["#f4f4f4","#9a9a9e","#0c0c0e","#c9ccd2"],Ym=["WHITE","GREY","BLACK","CHROME"],$f=100;function Zm(s,e){let t=new Map,n=[];for(let a of e){let o=Math.round(a.w*$f),c=Math.round(a.h*$f),l=document.createElement("canvas");l.width=o,l.height=c;let u=l.getContext("2d"),h=new qn(l);h.colorSpace=Ft,h.anisotropy=4;let d=new at({map:h,transparent:!0,roughness:.62,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),f=new We(new Pt(a.w,a.h),d);f.position.copy(a.center).addScaledVector(a.normal,.012),f.quaternion.copy(a.mesh.quaternion),f.receiveShadow=!0,f.userData.spot=a.id,f.userData.noAO=!0,s.add(f);let g=24,x=Math.ceil(o/g);t.set(a.id,{spot:a,cv:l,g:u,tex:h,mesh:f,W:o,H:c,wet:new Float32Array(x*Math.ceil(c/g)),cell:g,cols:x,dirty:!1})}let i=(a,o,c,l,u)=>{let h=(.6+l.cap*.9+l.dist*26)*($f/100)*1.6,d=Math.max(.05,.75-l.dist*1.6),f=Math.min(1,u*(.5+l.cap*.35)/(1+l.dist*5)),g=a.g.createRadialGradient(o,c,0,o,c,h),x=new Ee(l.colour),m=`${Math.round(x.r*255)},${Math.round(x.g*255)},${Math.round(x.b*255)}`;g.addColorStop(0,`rgba(${m},${f})`),g.addColorStop(d,`rgba(${m},${f*.85})`),g.addColorStop(1,`rgba(${m},0)`),a.g.fillStyle=g,a.g.beginPath(),a.g.arc(o,c,h,0,Math.PI*2),a.g.fill();let p=Math.round(l.dist*40*u+1);a.g.fillStyle=`rgba(${m},${Math.min(.9,f*1.4)})`;for(let b=0;b<p;b++){let v=Math.random()*Math.PI*2,T=h*(.8+Math.random()*1.6);a.g.fillRect(o+Math.cos(v)*T,c+Math.sin(v)*T,1,1)}let y=Math.floor(c/a.cell)*a.cols+Math.floor(o/a.cell);y>=0&&y<a.wet.length&&(a.wet[y]+=f*(1.2-l.dist),a.wet[y]>6&&n.length<400&&(a.wet[y]=2,n.push({L:a,x:o+(Math.random()-.5)*h,y:c+h*.6,w:Math.max(1,h*.22),left:20+Math.random()*70,colour:m,speed:18+Math.random()*24}))),a.dirty=!0},r=null;return{hit(a){let o=a.intersectObjects([...t.values()].map(c=>c.mesh),!1);return!o.length||!o[0].uv?null:{id:o[0].object.userData.spot,u:o[0].uv.x,v:o[0].uv.y,point:o[0].point,dist:o[0].distance}},spray(a,o,c,l,u){let h=t.get(a);if(!h)return;let d=o*h.W,f=(1-c)*h.H,g=1.2+u.cap+u.dist*26,x=Math.max(1,g*.35);if(r&&r.id===a){let m=Math.hypot(d-r.x,f-r.y),p=Math.min(80,Math.ceil(m/x));for(let y=1;y<=p;y++)i(h,r.x+(d-r.x)*y/p,r.y+(f-r.y)*y/p,u,l*9/p+.08)}else i(h,d,f,u,l*9+.08);r={id:a,x:d,y:f}},lift(){r=null},path(a,o,c){if(!t.has(a))throw new Error("no wall "+a);r=null;for(let[l,u]of o)this.spray(a,l,u,1/30,c);r=null},clear(a){for(let o of t.values())(!a||o.spot.id===a)&&(o.g.clearRect(0,0,o.W,o.H),o.wet.fill(0),o.dirty=!0)},update(a){for(let o=n.length-1;o>=0;o--){let c=n[o],l=c.speed*a;c.L.g.fillStyle=`rgba(${c.colour},0.9)`,c.L.g.fillRect(c.x-c.w/2,c.y,c.w,l+1),c.y+=l,c.left-=l,c.w=Math.max(.6,c.w*(1-a*.25)),c.speed*=1-a*.35,c.L.dirty=!0,(c.left<=0||c.speed<2||c.y>c.L.H)&&(c.L.g.beginPath(),c.L.g.arc(c.x,c.y,c.w*.9,0,Math.PI*2),c.L.g.fill(),n.splice(o,1))}for(let o of t.values())o.dirty&&(o.tex.needsUpdate=!0,o.dirty=!1)},png(a){let o=t.get(a);return o?o.cv.toDataURL("image/png"):""},layers:t,dispose(){for(let a of t.values())s.remove(a.mesh),a.mesh.geometry.dispose(),a.mesh.material.dispose(),a.tex.dispose()}}}var JM={shadow:[1,1,1],high:[1,1,1],sat:0,contrast:1.32,vignette:.72},ua={x:25.5,z0:-79,z1:24};async function jM(s,e){let t=e.high!==!1,n=z=>e.onStatus&&e.onStatus(z);n("Building the city\u2026");let i=new hu({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});i.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),i.toneMapping=er,i.toneMappingExposure=1.05,i.shadowMap.enabled=t,i.shadowMap.type=js;let r=i.domElement;r.style.cssText="width:100%;height:100%;display:block;outline:none;cursor:grab",r.tabIndex=0,s.appendChild(r);let a=new Bs,o=new Vt(62,16/9,.05,900),c=await Bm(i,e.base+"tex/"),l=Om({renderer:i,scene:a,high:t,look:c,vexvoid:!0});a.add(l.group),n("Dressing the writer\u2026");let u=await qm(e.base+"anims/ual.glb",t,e.base+"models/writer.glb");a.add(u.root);let h=Zm(a,l.spots),d=new Bn("#ffffff",9,7,2),f=new Bn("#ffffff",6,5,2);a.add(d,f);let g=()=>{let z=s.getBoundingClientRect();return{w:Math.max(2,Math.round(z.width)),h:Math.max(2,Math.round(z.height))}},{w:x,h:m}=g();i.setSize(x,m,!1);let p=new mu(i);if(p.addPass(new gu(a,o)),t){let z=new Ho(a,o,x,m);z.updateGtaoMaterial({radius:1.4,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:8});let K=z.render.bind(z),_e=[];z.render=(...le)=>{a.traverse(w=>{(w.isSprite||w.isPoints||w.isLineSegments||w.userData.noAO)&&w.visible&&(w.visible=!1,_e.push(w))}),K(...le);for(let w of _e.splice(0))w.visible=!0},p.addPass(z)}let y=new la(new oe(x,m),.42,.45,1.5);p.addPass(y),p.addPass(new xu);let b=Hm();b.apply(JM),p.addPass(b.pass);let v={x:0,z:8,y:0,vy:0,heading:Math.PI,crouch:!1,airborne:!1},T={yaw:0,pitch:.12,dist:3.4},A=new Set,D=["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"," ","c","f","1","2","3","Tab","Escape"],L={colour:Xo[0],cap:2,dist:.22},S=null,E=!1,N=0,O=new oe,G=new go,j=()=>e.onHud&&e.onHud(S?`PAINTING ${S.id.toUpperCase()} \xB7 HOLD MOUSE TO SPRAY \xB7 WHEEL DISTANCE ${Math.round(L.dist*100)} CM \xB7 1 2 3 CAP ${["","SKINNY","MEDIUM","FAT"][L.cap]} \xB7 TAB ${Ym[N]} \xB7 A D MOVE \xB7 F DONE`:"WASD MOVE \xB7 SHIFT SPRINT \xB7 C CROUCH \xB7 SPACE JUMP \xB7 DRAG LOOK \xB7 F AT A WALL TO PAINT"),ee=()=>{let z=null,K=3.2;for(let _e of l.spots){let le=v.x-_e.center.x,w=v.z-_e.center.z,M=le*_e.normal.x+w*_e.normal.z,F=Math.abs(le*_e.normal.z-w*_e.normal.x);M>0&&M<K&&F<_e.w/2+.4&&(K=M,z={id:_e.id,spot:_e})}return z},Z=()=>{if(S){S=null,E=!1,h.lift(),j();return}let z=ee();if(!z){e.onHud&&e.onHud("GET CLOSER TO A WALL TO PAINT (F)");return}S=z,v.crouch=!1,T.yaw=Math.atan2(z.spot.normal.x,z.spot.normal.z),T.pitch=.1,T.dist=2.6,j()},X=null,ue=z=>{if(!X&&z){let K=new AudioContext,_e=K.createBuffer(1,K.sampleRate,K.sampleRate),le=_e.getChannelData(0);for(let q=0;q<le.length;q++)le[q]=Math.random()*2-1;let w=K.createBufferSource();w.buffer=_e,w.loop=!0;let M=K.createBiquadFilter();M.type="bandpass",M.frequency.value=3800,M.Q.value=.7;let F=K.createGain();F.gain.value=0,w.connect(M).connect(F).connect(K.destination),w.start(),X={ctx:K,gain:F}}X&&X.gain.gain.setTargetAtTime(z?.12:0,X.ctx.currentTime,.03)},$=new We(new ao(.8,1,32),new St({color:"#ffffff",transparent:!0,opacity:.8,depthTest:!1}));$.renderOrder=10,$.visible=!1,a.add($);let ge=(z,K)=>{let _e=z.key.length===1?z.key.toLowerCase():z.key;D.includes(_e)&&(z.preventDefault(),z.stopPropagation(),K&&!z.repeat&&_e==="f"&&Z(),K&&!z.repeat&&_e==="Escape"&&S&&Z(),K&&S&&(_e==="1"||_e==="2"||_e==="3")&&(L.cap=Number(_e),j()),K&&S&&_e==="Tab"&&(N=(N+1)%Xo.length,L.colour=Xo[N],j()),K&&!z.repeat&&_e==="c"&&!S&&(v.crouch=!v.crouch),K&&!z.repeat&&_e===" "&&!v.airborne&&(v.vy=4.6,v.airborne=!0,v.crouch=!1,u.play("Jump_Start",.08,!0)),K?A.add(_e):A.delete(_e))},xe=z=>ge(z,!0),Ne=z=>ge(z,!1);r.addEventListener("keydown",xe),r.addEventListener("keyup",Ne),r.addEventListener("blur",()=>A.clear());let Ue=null,qe=z=>{let K=r.getBoundingClientRect();O.set((z.clientX-K.left)/K.width*2-1,-((z.clientY-K.top)/K.height)*2+1)};r.addEventListener("pointerdown",z=>{if(r.focus(),qe(z),r.setPointerCapture(z.pointerId),S&&z.button===0){E=!0;return}Ue={x:z.clientX,y:z.clientY},r.style.cursor="grabbing"}),r.addEventListener("pointermove",z=>{qe(z),Ue&&(T.yaw-=(z.clientX-Ue.x)*.0045,T.pitch=Math.max(-.35,Math.min(.75,T.pitch+(z.clientY-Ue.y)*.003)),Ue={x:z.clientX,y:z.clientY})});let rt=()=>{Ue=null,E=!1,h.lift(),r.style.cursor=S?"crosshair":"grab"};r.addEventListener("pointerup",rt),r.addEventListener("pointercancel",rt),r.addEventListener("wheel",z=>{if(z.preventDefault(),S){L.dist=Math.max(.05,Math.min(.6,L.dist+z.deltaY*5e-4)),j();return}T.dist=Math.max(1.2,Math.min(7,T.dist*Math.exp(z.deltaY*.001)))},{passive:!1});let te=new ResizeObserver(()=>{({w:x,h:m}=g()),i.setSize(x,m,!1),p.setSize(x,m),l.resize(x,m),o.aspect=x/m,o.updateProjectionMatrix()});te.observe(s);let de=new Js,Te=0,He=0,Ce=!1,it=new I,ot=new I,Ye=new I(0,2,12),pe=new I,Me=0,ve="",se=0;o.position.copy(Ye);let P=()=>{if(Ce)return;Te=requestAnimationFrame(P);let z=Math.min(.05,de.getDelta());He+=z;let K=(A.has("d")||A.has("ArrowRight")?1:0)-(A.has("a")||A.has("ArrowLeft")?1:0),_e=(A.has("w")||A.has("ArrowUp")?1:0)-(A.has("s")||A.has("ArrowDown")?1:0),le=A.has("Shift")&&!v.crouch&&!S,w=!!(K||_e&&!S),M=S?1.1:v.crouch?1.35:le?6.2:3.3;if(it.set(-Math.sin(T.yaw),0,-Math.cos(T.yaw)),ot.set(Math.cos(T.yaw),0,-Math.sin(T.yaw)),w){let B=S?0:_e,me=it.x*B+ot.x*K,ae=it.z*B+ot.z*K,he=Math.hypot(me,ae);v.x=Math.max(-ua.x,Math.min(ua.x,v.x+me/he*M*z)),v.z=Math.max(ua.z0,Math.min(ua.z1,v.z+ae/he*M*z));let fe=(S?Math.atan2(-S.spot.normal.x,-S.spot.normal.z):Math.atan2(me,ae))-v.heading;fe=Math.atan2(Math.sin(fe),Math.cos(fe)),v.heading+=fe*Math.min(1,z*12);for(let be of l.blockers){let Se=be.x0-.35,ke=be.x1+.35,Re=be.z0-.35,Qe=be.z1+.35;if(v.x>Se&&v.x<ke&&v.z>Re&&v.z<Qe){let H=[v.x-Se,ke-v.x,v.z-Re,Qe-v.z],Pe=Math.min(...H);Pe===H[0]?v.x=Se:Pe===H[1]?v.x=ke:Pe===H[2]?v.z=Re:v.z=Qe}}}if(S){let B=S.spot,me=B.normal,ae=me.z,he=-me.x,Fe=(v.x-B.center.x)*me.x+(v.z-B.center.z)*me.z,fe=(v.x-B.center.x)*ae+(v.z-B.center.z)*he;Fe=Math.max(.55,Math.min(.9,Fe)),fe=Math.max(-B.w/2+.3,Math.min(B.w/2-.3,fe)),v.x=B.center.x+me.x*Fe+ae*fe,v.z=B.center.z+me.z*Fe+he*fe;let be=Math.atan2(-me.x,-me.z)-v.heading;be=Math.atan2(Math.sin(be),Math.cos(be)),v.heading+=be*Math.min(1,z*10),G.setFromCamera(O,o);let Se=h.hit(G),ke=Se&&Se.id===B.id&&Se.point.y<v.y+2.35&&Se.point.y>.08&&Math.abs((Se.point.x-v.x)*ae+(Se.point.z-v.z)*he)<1.25;$.visible=!!(Se&&Se.id===B.id),Se&&Se.id===B.id&&($.position.copy(Se.point).addScaledVector(me,.02),$.lookAt(Se.point.clone().add(me)),$.scale.setScalar(.012+L.dist*.45*.6+L.cap*.006),$.material.color.set(ke?"#ffffff":"#555555")),E&&ke&&Se?h.spray(Se.id,Se.u,Se.v,z,L):h.lift(),ue(!!(E&&ke))}else $.visible=!1,ue(!1);if(h.update(z),S&&!w)u.play(E?"Spell_Simple_Idle_Loop":"Idle_Loop",.15);else if(v.airborne)v.vy-=13*z,v.y+=v.vy*z,v.y<=0?(v.y=0,v.vy=0,v.airborne=!1,u.play("Jump_Land",.06,!0),Me=.28):v.vy<2.5&&u.play("Jump_Loop",.15);else if(Me>0)Me-=z;else if(ve)u.play(ve,.2);else{se=w||v.crouch?0:se+z;let B=se%16>9?"Idle_FoldArms_Loop":"Idle_Loop";u.play(v.crouch?w?"Crouch_Fwd_Loop":"Crouch_Idle_Loop":w?le?"Sprint_Loop":"Jog_Fwd_Loop":B,B==="Idle_FoldArms_Loop"?.6:.22)}u.root.position.set(v.x,v.y,v.z),u.root.rotation.y=v.heading,u.update(z),d.position.set(v.x+Math.sin(T.yaw)*1.8+Math.cos(T.yaw)*.9,v.y+2.4,v.z+Math.cos(T.yaw)*1.8-Math.sin(T.yaw)*.9),f.position.set(v.x-Math.sin(T.yaw)*1.4,v.y+2.1,v.z-Math.cos(T.yaw)*1.4);let F=v.y+(v.crouch?1.05:1.45),q=v.x+Math.sin(T.yaw)*Math.cos(T.pitch)*T.dist+Math.cos(T.yaw)*.55,re=v.z+Math.cos(T.yaw)*Math.cos(T.pitch)*T.dist-Math.sin(T.yaw)*.55;Ye.set(Math.max(-26.5,Math.min(26.5,q)),Math.max(.35,F+Math.sin(T.pitch)*T.dist),Math.max(ua.z0-.5,Math.min(ua.z1+4,re))),o.position.lerp(Ye,Math.min(1,z*10)),pe.set(v.x+Math.cos(T.yaw)*.55,F,v.z-Math.sin(T.yaw)*.55),o.lookAt(pe),l.update(z,He,o),l.beforeRender(i,a,o),b.tick(He),p.render(z)};return n(""),j(),P(),{canvas:r,where:()=>({x:v.x,z:v.z,yaw:T.yaw,heading:v.heading,anim:u.playing()}),snap:(z=768)=>{l.beforeRender(i,a,o),p.render(0);let K=document.createElement("canvas");return K.width=z,K.height=Math.round(z*r.height/r.width),K.getContext("2d").drawImage(r,0,0,K.width,K.height),K.toDataURL("image/jpeg",.82)},inspect:z=>{z.yaw!=null&&(T.yaw=z.yaw),z.pitch!=null&&(T.pitch=z.pitch),z.dist!=null&&(T.dist=z.dist),z.heading!=null&&(v.heading=z.heading),ve=z.anim||""},paint:(z,K,_e={})=>h.path(z,K,{colour:_e.colour||Xo[0],cap:_e.cap||2,dist:_e.dist??.2}),clearPaint:z=>h.clear(z),piece:z=>h.png(z),painting:()=>S?S.id:"",spots:()=>l.spots.map(z=>({id:z.id,w:z.w,h:z.h,x:z.center.x,y:z.center.y,z:z.center.z})),goto:(z,K,_e,le)=>{v.x=z,v.z=K,_e!=null&&(T.yaw=_e,v.heading=_e+Math.PI),le!=null&&(T.pitch=le)},stop:()=>{Ce=!0,cancelAnimationFrame(Te),te.disconnect(),r.removeEventListener("keydown",xe),r.removeEventListener("keyup",Ne),ue(!1),X&&X.ctx.close(),h.dispose(),u.dispose(),l.dispose(),c.dispose(),p.dispose(),i.dispose(),r.remove()}}}return _0(QM);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
