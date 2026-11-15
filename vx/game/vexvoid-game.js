var VXGAME=(()=>{var oh=Object.defineProperty;var Ip=Object.getOwnPropertyDescriptor;var Dp=Object.getOwnPropertyNames;var Lp=Object.prototype.hasOwnProperty;var Up=(i,e)=>{for(var t in e)oh(i,t,{get:e[t],enumerable:!0})},Np=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Dp(e))!Lp.call(i,s)&&s!==t&&oh(i,s,{get:()=>e[s],enumerable:!(n=Ip(e,s))||n.enumerable});return i};var Fp=i=>Np(oh({},"__esModule",{value:!0}),i);var ny={};Up(ny,{mount:()=>ty});var wf=0,Yh=1,Af=2;var Ms=1,Rf=2,yr=3,Ai=0,rn=1,Kt=2,Yt=0,cs=1,jt=2,Zh=3,$h=4,Cl=5,Un=100,Cf=101,Pf=102,If=103,Df=104,bs=200,Lf=201,Uf=202,Nf=203,Jo=204,Ko=205,Ua=206,Ff=207,Na=208,Bf=209,Of=210,zf=211,Hf=212,Vf=213,kf=214,Pl=0,Il=1,Dl=2,hs=3,Ll=4,Ul=5,Nl=6,Fl=7,Jh=0,Gf=1,Wf=2,jn=0,Fa=1,Ba=2,Oa=3,Ss=4,za=5,Ha=6,Va=7;var Kh=300,Ji=301,Es=302,Bl=303,Ol=304,ka=306,cn=1e3,ni=1001,jo=1002,Xt=1003,Xf=1004;var Ga=1005;var hn=1006,zl=1007;var ci=1008;var vn=1009,jh=1010,Qh=1011,Mr=1012,Hl=1013,Qn=1014,Wn=1015,Zt=1016,Vl=1017,kl=1018,Ki=1020,eu=35902,tu=35899,nu=1021,iu=1022,Cn=1023,si=1026,hi=1027,Gl=1028,Wl=1029,Ts=1030,Xl=1031;var ql=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Yl=35840,Zl=35841,$l=35842,Jl=35843,Kl=36196,jl=37492,Ql=37496,ec=37488,tc=37489,nc=37490,ic=37491,sc=37808,rc=37809,ac=37810,oc=37811,lc=37812,cc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,xc=37821,vc=36492,_c=36494,yc=36495,Mc=36283,bc=36284,Sc=36285,Ec=36286;var Qr=2300,Qo=2301,Zo=2302,Nh=2400,Fh=2401,Bh=2402;var qf=3200;var Tc=0,Yf=1,Di="",Jt="srgb",us="srgb-linear",ea="linear",yt="srgb";var os=7680;var Oh=519,Zf=512,$f=513,Jf=514,wc=515,Kf=516,jf=517,Ac=518,Qf=519,el=35044,Rc=35048;var su="300 es",Jn=2e3,ta=2001;function ru(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Bp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ed(){let i=rr("canvas");return i.style.display="block",i}var Xu={},ar=null;function na(...i){let e="THREE."+i.shift();ar?ar("log",e,...i):console.log(e,...i)}function Qe(...i){let e="THREE."+i.shift();ar?ar("warn",e,...i):console.warn(e,...i)}function et(...i){let e="THREE."+i.shift();ar?ar("error",e,...i):console.error(e,...i)}function or(...i){let e=i.join(" ");e in Xu||(Xu[e]=!0,Qe(...i))}function td(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ri=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qu=1234567,$r=Math.PI/180,fs=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function au(i,e){return(i%e+e)%e}function Op(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function zp(i,e,t){return i!==e?(t-i)/(e-i):0}function Jr(i,e,t){return(1-t)*i+t*e}function Hp(i,e,t,n){return Jr(i,e,1-Math.exp(-t*n))}function Vp(i,e=1){return e-Math.abs(au(i,e*2)-e)}function kp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Gp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xp(i,e){return i+Math.random()*(e-i)}function qp(i){return i*(.5-Math.random())}function Yp(i){i!==void 0&&(qu=i);let e=qu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Zp(i){return i*$r}function $p(i){return i*fs}function Jp(i){return(i&i-1)===0&&i!==0}function Kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),u=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*u,o*h,o*l);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Za={DEG2RAD:$r,RAD2DEG:fs,generateUUID:ii,clamp:ct,euclideanModulo:au,mapLinear:Op,inverseLerp:zp,lerp:Jr,damp:Hp,pingpong:Vp,smoothstep:kp,smootherstep:Gp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:Yp,degToRad:Zp,radToDeg:$p,isPowerOfTwo:Jp,ceilPowerOfTwo:Kp,floorPowerOfTwo:jp,setQuaternionFromProperEuler:Qp,normalize:At,denormalize:$n},ie=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==d||l!==u||h!==g){let m=c*d+l*u+h*g+f*x;m<0&&(d=-d,u=-u,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let S=Math.acos(m),M=Math.sin(S);p=Math.sin(p*S)/M,o=Math.sin(o*S)/M,c=c*p+d*o,l=l*p+u*o,h=h*p+g*o,f=f*p+x*o}else{c=c*p+d*o,l=l*p+u*o,h=h*p+g*o,f=f*p+x*o;let S=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=S,l*=S,h*=S,f*=S}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*f+c*u-l*d,e[t+1]=c*g+h*d+l*f-o*u,e[t+2]=l*g+h*u+o*d-c*f,e[t+3]=h*g-o*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f+d*u*g;break;case"YZX":this._x=d*h*f+l*u*g,this._y=l*u*f+d*h*g,this._z=l*h*g-d*u*f,this._w=l*h*f-d*u*g;break;case"XZY":this._x=d*h*f-l*u*g,this._y=l*u*f-d*h*g,this._z=l*h*g+d*u*f,this._w=l*h*f+d*u*g;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lh.copy(this).projectOnVector(e),this.sub(lh)}reflect(e){return this.sub(lh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},lh=new D,Yu=new kn,ot=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],M=s[4],b=s[7],w=s[2],R=s[5],P=s[8];return r[0]=a*x+o*S+c*w,r[3]=a*m+o*M+c*R,r[6]=a*p+o*b+c*P,r[1]=l*x+h*S+f*w,r[4]=l*m+h*M+f*R,r[7]=l*p+h*b+f*P,r[2]=d*x+u*S+g*w,r[5]=d*m+u*M+g*R,r[8]=d*p+u*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,g=t*f+n*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ch.makeScale(e,t)),this}rotate(e){return this.premultiply(ch.makeRotation(-e)),this}translate(e,t){return this.premultiply(ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ch=new ot,Zu=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$u=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let i={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=wi(s.r),s.g=wi(s.g),s.b=wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=sr(s.r),s.g=sr(s.g),s.b=sr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?ea:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return or("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return or("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[us]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Zu,fromXYZ:$u,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Jt},outputColorSpaceConfig:{drawingBufferColorSpace:Jt}},[Jt]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Zu,fromXYZ:$u,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Jt}}}),i}var pt=em();function wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,tl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hs===void 0&&(Hs=rr("canvas")),Hs.width=e.width,Hs.height=e.height;let s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=wi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(wi(t[n]/255)*255):t[n]=wi(t[n]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tm=0,lr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(hh(s[a].image)):r.push(hh(s[a]))}else r=hh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function hh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var nm=0,uh=new D,xn=class i extends Ri{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=hn,a=ci,o=Cn,c=vn,l=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=ii(),this.name="",this.source=new lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(uh).x}get height(){return this.source.getSize(uh).y}get depth(){return this.source.getSize(uh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cn:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cn:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=Kh;xn.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(l+1)/2,b=(u+1)/2,w=(p+1)/2,R=(h+d)/4,P=(f+x)/4,N=(g+m)/4;return M>b&&M>w?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=R/n,r=P/n):b>w?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=N/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=P/r,s=N/r),this.set(n,s,r,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-x)/S,this.z=(d-h)/S,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},nl=class extends Ri{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new xn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new lr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ot=class extends nl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var il=class extends xn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_o.copy(n.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),yo.subVectors(this.max,Or),Vs.subVectors(e.a,Or),ks.subVectors(e.b,Or),Gs.subVectors(e.c,Or),Oi.subVectors(ks,Vs),zi.subVectors(Gs,ks),is.subVectors(Vs,Gs);let t=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-is.z,is.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,is.z,0,-is.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-is.y,is.x,0];return!fh(t,Vs,ks,Gs,yo)||(t=[1,0,0,0,1,0,0,0,1],!fh(t,Vs,ks,Gs,yo))?!1:(Mo.crossVectors(Oi,zi),t=[Mo.x,Mo.y,Mo.z],fh(t,Vs,ks,Gs,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,_o=new ri,Vs=new D,ks=new D,Gs=new D,Oi=new D,zi=new D,is=new D,Or=new D,yo=new D,Mo=new D,ss=new D;function fh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ss.fromArray(i,r);let o=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=e.dot(ss),l=t.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var im=new ri,zr=new D,dh=new D,ai=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):im.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zr.subVectors(e,this.center);let t=zr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zr.copy(e.center).add(dh)),this.expandByPoint(zr.copy(e.center).sub(dh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Mi=new D,ph=new D,bo=new D,Hi=new D,mh=new D,So=new D,gh=new D,cr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ph.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(ph);let r=e.distanceTo(t)*.5,a=-this.direction.dot(bo),o=Hi.dot(this.direction),c=-Hi.dot(bo),l=Hi.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*c-o,d=a*o-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let x=1/h;f*=x,d*=x,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ph).addScaledVector(bo,d),u}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,n,s,r){mh.subVectors(t,e),So.subVectors(n,e),gh.crossVectors(mh,So);let a=this.direction.dot(gh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let c=o*this.direction.dot(So.crossVectors(Hi,So));if(c<0)return null;let l=o*this.direction.dot(mh.cross(Hi));if(l<0||c+l>a)return null;let h=-o*Hi.dot(gh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},it=class i{constructor(e,t,n,s,r,a,o,c,l,h,f,d,u,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,d,u,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,f,d,u,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,g=l*h,x=l*f;t[0]=d+x*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,g=l*h,x=l*f;t[0]=d-x*o,t[4]=-a*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*f,g=o*h,x=o*f;t[0]=c*h,t[4]=g*l-u,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*f,t[8]=g*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+g,t[10]=d-x*f}else if(e.order==="XZY"){let d=a*c,u=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+x,t[5]=a*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sm,e,rm)}lookAt(e,t,n){let s=this.elements;return Dn.subVectors(e,t),Dn.lengthSq()===0&&(Dn.z=1),Dn.normalize(),Vi.crossVectors(n,Dn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?Dn.x+=1e-4:Dn.z+=1e-4,Dn.normalize(),Vi.crossVectors(n,Dn)),Vi.normalize(),Eo.crossVectors(Dn,Vi),s[0]=Vi.x,s[4]=Eo.x,s[8]=Dn.x,s[1]=Vi.y,s[5]=Eo.y,s[9]=Dn.y,s[2]=Vi.z,s[6]=Eo.z,s[10]=Dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],M=n[7],b=n[11],w=n[15],R=s[0],P=s[4],N=s[8],y=s[12],E=s[1],U=s[5],F=s[9],V=s[13],$=s[2],k=s[6],W=s[10],X=s[14],ne=s[3],ce=s[7],xe=s[11],ve=s[15];return r[0]=a*R+o*E+c*$+l*ne,r[4]=a*P+o*U+c*k+l*ce,r[8]=a*N+o*F+c*W+l*xe,r[12]=a*y+o*V+c*X+l*ve,r[1]=h*R+f*E+d*$+u*ne,r[5]=h*P+f*U+d*k+u*ce,r[9]=h*N+f*F+d*W+u*xe,r[13]=h*y+f*V+d*X+u*ve,r[2]=g*R+x*E+m*$+p*ne,r[6]=g*P+x*U+m*k+p*ce,r[10]=g*N+x*F+m*W+p*xe,r[14]=g*y+x*V+m*X+p*ve,r[3]=S*R+M*E+b*$+w*ne,r[7]=S*P+M*U+b*k+w*ce,r[11]=S*N+M*F+b*W+w*xe,r[15]=S*y+M*V+b*X+w*ve,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=c*u-l*d,M=o*u-l*f,b=o*d-c*f,w=a*u-l*h,R=a*d-c*h,P=a*f-o*h;return t*(x*S-m*M+p*b)-n*(g*S-m*w+p*R)+s*(g*M-x*w+p*P)-r*(g*b-x*R+m*P)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=f*m*l-x*d*l+x*c*u-o*m*u-f*c*p+o*d*p,M=g*d*l-h*m*l-g*c*u+a*m*u+h*c*p-a*d*p,b=h*x*l-g*f*l+g*o*u-a*x*u-h*o*p+a*f*p,w=g*f*c-h*x*c-g*o*d+a*x*d+h*o*m-a*f*m,R=t*S+n*M+s*b+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/R;return e[0]=S*P,e[1]=(x*d*r-f*m*r-x*s*u+n*m*u+f*s*p-n*d*p)*P,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*P,e[3]=(f*c*r-o*d*r-f*s*l+n*d*l+o*s*u-n*c*u)*P,e[4]=M*P,e[5]=(h*m*r-g*d*r+g*s*u-t*m*u-h*s*p+t*d*p)*P,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*P,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*u+t*c*u)*P,e[8]=b*P,e[9]=(g*f*r-h*x*r-g*n*u+t*x*u+h*n*p-t*f*p)*P,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*P,e[11]=(h*o*r-a*f*r-h*n*l+t*f*l+a*n*u-t*o*u)*P,e[12]=w*P,e[13]=(h*x*s-g*f*s+g*n*d-t*x*d-h*n*m+t*f*m)*P,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*P,e[15]=(a*f*s-h*o*s+h*n*c-t*f*c-a*n*d+t*o*d)*P,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,g=r*f,x=a*h,m=a*f,p=o*f,S=c*l,M=c*h,b=c*f,w=n.x,R=n.y,P=n.z;return s[0]=(1-(x+p))*w,s[1]=(u+b)*w,s[2]=(g-M)*w,s[3]=0,s[4]=(u-b)*R,s[5]=(1-(d+p))*R,s[6]=(m+S)*R,s[7]=0,s[8]=(g+M)*P,s[9]=(m-S)*P,s[10]=(1-(d+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),o=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Yn.copy(this);let l=1/r,h=1/a,f=1/o;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Jn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===Jn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ta)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===Jn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===ta)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new D,Yn=new it,sm=new D(0,0,0),rm=new D(1,1,1),Vi=new D,Eo=new D,Dn=new D,Ju=new it,Ku=new kn,Nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ju.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ju,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ku.setFromEuler(this),this.setFromQuaternion(Ku,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Nn.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},am=0,ju=new D,Xs=new kn,bi=new it,To=new D,Hr=new D,om=new D,lm=new kn,Qu=new D(1,0,0),ef=new D(0,1,0),tf=new D(0,0,1),nf={type:"added"},cm={type:"removed"},qs={type:"childadded",child:null},xh={type:"childremoved",child:null},qt=class i extends Ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Nn,n=new kn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new it},normalMatrix:{value:new ot}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Qu,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,t){return ju.copy(e).applyQuaternion(this.quaternion),this.position.add(ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qu,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?To.copy(e):To.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Hr,To,this.up):bi.lookAt(To,Hr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(bi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),qs.child=e,this.dispatchEvent(qs),qs.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cm),xh.child=e,this.dispatchEvent(xh),xh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,e,om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hr,lm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};qt.DEFAULT_UP=new D(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Zn=new D,Si=new D,vh=new D,Ei=new D,Ys=new D,Zs=new D,sf=new D,_h=new D,yh=new D,Mh=new D,bh=new Ct,Sh=new Ct,Eh=new Ct,Ti=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Zn.subVectors(e,t),s.cross(Zn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Zn.subVectors(s,t),Si.subVectors(n,t),vh.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(Si),c=Zn.dot(vh),l=Si.dot(Si),h=Si.dot(vh),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ei.x),c.addScaledVector(a,Ei.y),c.addScaledVector(o,Ei.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return bh.setScalar(0),Sh.setScalar(0),Eh.setScalar(0),bh.fromBufferAttribute(e,t),Sh.fromBufferAttribute(e,n),Eh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(bh,r.x),a.addScaledVector(Sh,r.y),a.addScaledVector(Eh,r.z),a}static isFrontFacing(e,t,n,s){return Zn.subVectors(n,t),Si.subVectors(e,t),Zn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Zn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,n),Zs.subVectors(r,n),_h.subVectors(e,n);let c=Ys.dot(_h),l=Zs.dot(_h);if(c<=0&&l<=0)return t.copy(n);yh.subVectors(e,s);let h=Ys.dot(yh),f=Zs.dot(yh);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ys,a);Mh.subVectors(e,r);let u=Ys.dot(Mh),g=Zs.dot(Mh);if(g>=0&&u<=g)return t.copy(r);let x=u*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Zs,o);let m=h*g-u*f;if(m<=0&&f-h>=0&&u-g>=0)return sf.subVectors(r,s),o=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(sf,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Th(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Se=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=au(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Th(a,r,e+1/3),this.g=Th(a,r,e),this.b=Th(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=Jt){function n(r){r!==void 0&&parseFloat(r)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jt){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return pt.workingToColorSpace(gn.copy(this),e),Math.round(ct(gn.r*255,0,255))*65536+Math.round(ct(gn.g*255,0,255))*256+Math.round(ct(gn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(gn.copy(this),t);let n=gn.r,s=gn.g,r=gn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Jt){pt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,s=gn.b;return e!==Jt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+t,ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ki),e.getHSL(wo);let n=Jr(ki.h,wo.h,t),s=Jr(ki.s,wo.s,t),r=Jr(ki.l,wo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new Se;Se.NAMES=nd;var hm=0,Gn=class extends Ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hm++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=cs,this.side=Ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Ko,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==Ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},kt=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var $t=new D,Ao=new ie,um=0,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=el,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ao.fromBufferAttribute(this,t),Ao.applyMatrix3(e),this.setXY(t,Ao.x,Ao.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==el&&(e.usage=this.usage),e}};var ra=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var aa=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},fm=0,Hn=new it,wh=new qt,$s=new D,Ln=new ri,Vr=new ri,nn=new D,Rt=class i extends Ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ru(e)?aa:ra)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return wh.lookAt(e),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(Ln.min,Vr.min),Ln.expandByPoint(nn),nn.addVectors(Ln.max,Vr.max),Ln.expandByPoint(nn)):(Ln.expandByPoint(Vr.min),Ln.expandByPoint(Vr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)nn.fromBufferAttribute(o,l),c&&($s.fromBufferAttribute(e,l),nn.add($s)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new D,c[N]=new D;let l=new D,h=new D,f=new D,d=new ie,u=new ie,g=new ie,x=new D,m=new D;function p(N,y,E){l.fromBufferAttribute(n,N),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,E),d.fromBufferAttribute(r,N),u.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),h.sub(l),f.sub(l),u.sub(d),g.sub(d);let U=1/(u.x*g.y-g.x*u.y);isFinite(U)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(U),m.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(U),o[N].add(x),o[y].add(x),o[E].add(x),c[N].add(m),c[y].add(m),c[E].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let N=0,y=S.length;N<y;++N){let E=S[N],U=E.start,F=E.count;for(let V=U,$=U+F;V<$;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new D,b=new D,w=new D,R=new D;function P(N){w.fromBufferAttribute(s,N),R.copy(w);let y=o[N];M.copy(y),M.sub(w.multiplyScalar(w.dot(y))).normalize(),b.crossVectors(R,y);let U=b.dot(c[N])<0?-1:1;a.setXYZW(N,M.x,M.y,M.z,U)}for(let N=0,y=S.length;N<y;++N){let E=S[N],U=E.start,F=E.count;for(let V=U,$=U+F;V<$;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,f=new D;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?u=c[x]*o.data.stride+o.offset:u=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[u++]}return new Mt(d,h,f)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rf=new it,rs=new cr,Ro=new ai,af=new D,Co=new D,Po=new D,Io=new D,Ah=new D,Do=new D,of=new D,Lo=new D,qe=class extends qt{constructor(e=new Rt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Do.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Ah.fromBufferAttribute(f,e),a?Do.addScaledVector(Ah,h):Do.addScaledVector(Ah.sub(t),h))}t.add(Do)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!(Ro.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ro,af)===null||rs.origin.distanceToSquared(af)>(e.far-e.near)**2))&&(rf.copy(r).invert(),rs.copy(e.ray).applyMatrix4(rf),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,u.start),M=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let b=S,w=M;b<w;b+=3){let R=o.getX(b),P=o.getX(b+1),N=o.getX(b+2);s=Uo(this,p,e,n,l,h,f,R,P,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),x=Math.min(o.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let S=o.getX(m),M=o.getX(m+1),b=o.getX(m+2);s=Uo(this,a,e,n,l,h,f,S,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],S=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let b=S,w=M;b<w;b+=3){let R=b,P=b+1,N=b+2;s=Uo(this,p,e,n,l,h,f,R,P,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){let S=m,M=m+1,b=m+2;s=Uo(this,a,e,n,l,h,f,S,M,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function dm(i,e,t,n,s,r,a,o){let c;if(e.side===rn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ai,o),c===null)return null;Lo.copy(o),Lo.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Lo);return l<t.near||l>t.far?null:{distance:l,point:Lo.clone(),object:i}}function Uo(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,Co),i.getVertexPosition(c,Po),i.getVertexPosition(l,Io);let h=dm(i,e,t,n,Co,Po,Io,of);if(h){let f=new D;Ti.getBarycoord(of,Co,Po,Io,f),s&&(h.uv=Ti.getInterpolatedAttribute(s,o,c,l,f,new ie)),r&&(h.uv1=Ti.getInterpolatedAttribute(r,o,c,l,f,new ie)),a&&(h.normal=Ti.getInterpolatedAttribute(a,o,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new D,materialIndex:0};Ti.getNormal(Co,Po,Io,d.normal),h.face=d,h.barycoord=f}return h}var mt=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function g(x,m,p,S,M,b,w,R,P,N,y){let E=b/P,U=w/N,F=b/2,V=w/2,$=R/2,k=P+1,W=N+1,X=0,ne=0,ce=new D;for(let xe=0;xe<W;xe++){let ve=xe*U-V;for(let Fe=0;Fe<k;Fe++){let Ge=Fe*E-F;ce[x]=Ge*S,ce[m]=ve*M,ce[p]=$,l.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[p]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),f.push(Fe/P),f.push(1-xe/N),X+=1}}for(let xe=0;xe<N;xe++)for(let ve=0;ve<P;ve++){let Fe=d+ve+k*xe,Ge=d+ve+k*(xe+1),Ze=d+(ve+1)+k*(xe+1),nt=d+(ve+1)+k*xe;c.push(Fe,Ge,nt),c.push(Ge,Ze,nt),ne+=6}o.addGroup(u,ne,y),u+=ne,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ws(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function _n(i){let e={};for(let t=0;t<i.length;t++){let n=ws(i[t]);for(let s in n)e[s]=n[s]}return e}function pm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ou(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var un={clone:ws,merge:_n},mm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,st=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mm,this.fragmentShader=gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ws(e.uniforms),this.uniformsGroups=pm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},oa=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gi=new D,lf=new ie,cf=new ie,Vt=class extends oa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fs*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z),Gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Gi.x,Gi.y).multiplyScalar(-e/Gi.z)}getViewSize(e,t){return this.getViewBounds(e,lf,cf),t.subVectors(cf,lf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($r*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,Ks=1,sl=class extends qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Js,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Js,Ks,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Js,Ks,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Js,Ks,e,t);o.layers=this.layers,this.add(o);let c=new Vt(Js,Ks,e,t);c.layers=this.layers,this.add(c);let l=new Vt(Js,Ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},la=class extends xn{constructor(e=[],t=Ji,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ca=class extends Ot{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new la(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new mt(5,5,5),r=new st({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Yt});r.uniforms.tEquirect.value=t;let a=new qe(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=hn),new sl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ln=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},xm={type:"move"},hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ln,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ln,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ln,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&d>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(xm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ln;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ha=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ds=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ua=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=el,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new D,ur=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},fr=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},js,kr=new D,Qs=new D,er=new D,tr=new ie,Gr=new ie,id=new it,No=new D,Wr=new D,Fo=new D,hf=new ie,Rh=new ie,uf=new ie,fa=class extends qt{constructor(e=new fr){if(super(),this.isSprite=!0,this.type="Sprite",js===void 0){js=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ua(t,5);js.setIndex([0,1,2,0,2,3]),js.setAttribute("position",new ur(n,3,0,!1)),js.setAttribute("uv",new ur(n,2,3,!1))}this.geometry=js,this.material=e,this.center=new ie(.5,.5),this.count=1}raycast(e,t){e.camera===null&&et('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qs.setFromMatrixScale(this.matrixWorld),id.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qs.multiplyScalar(-er.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Bo(No.set(-.5,-.5,0),er,a,Qs,s,r),Bo(Wr.set(.5,-.5,0),er,a,Qs,s,r),Bo(Fo.set(.5,.5,0),er,a,Qs,s,r),hf.set(0,0),Rh.set(1,0),uf.set(1,1);let o=e.ray.intersectTriangle(No,Wr,Fo,!1,kr);if(o===null&&(Bo(Wr.set(-.5,.5,0),er,a,Qs,s,r),Rh.set(0,1),o=e.ray.intersectTriangle(No,Fo,Wr,!1,kr),o===null))return;let c=e.ray.origin.distanceTo(kr);c<e.near||c>e.far||t.push({distance:c,point:kr.clone(),uv:Ti.getInterpolation(kr,No,Wr,Fo,hf,Rh,uf,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Bo(i,e,t,n,s,r){tr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Gr.x=r*tr.x-s*tr.y,Gr.y=s*tr.x+r*tr.y):Gr.copy(tr),i.copy(e),i.x+=Gr.x,i.y+=Gr.y,i.applyMatrix4(id)}var Ci=class extends xn{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Xt,h=Xt,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},nr=new it,ff=new it,Oo=[],df=new ri,vm=new it,Xr=new qe,qr=new ai,En=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),df.copy(e.boundingBox).applyMatrix4(nr),this.boundingBox.union(df)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,nr),qr.copy(e.boundingSphere).applyMatrix4(nr),this.boundingSphere.union(qr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xr.geometry=this.geometry,Xr.material=this.material,Xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qr.copy(this.boundingSphere),qr.applyMatrix4(n),e.ray.intersectsSphere(qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,nr),ff.multiplyMatrices(n,nr),Xr.matrixWorld=ff,Xr.raycast(e,Oo);for(let a=0,o=Oo.length;a<o;a++){let c=Oo[a];c.instanceId=r,c.object=this,t.push(c)}Oo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ci(new Float32Array(s*this.count),s,this.count,Gl,Wn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ch=new D,_m=new D,ym=new ot,Vn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ch.subVectors(n,t).cross(_m.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ch),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ym.getNormalMatrix(e),s=this.coplanarPoint(Ch).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},as=new ai,Mm=new ie(.5,.5),zo=new D,dr=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],M=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,u-h,p-g,w-S).normalize(),s[1].setComponents(l+a,u+h,p+g,w+S).normalize(),s[2].setComponents(l+o,u+f,p+x,w+M).normalize(),s[3].setComponents(l-o,u-f,p-x,w-M).normalize(),n)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,u-d,p-m,w-b).normalize();else if(s[4].setComponents(l-c,u-d,p-m,w-b).normalize(),t===Jn)s[5].setComponents(l+c,u+d,p+m,w+b).normalize();else if(t===ta)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(e){as.center.set(0,0,0);let t=Mm.distanceTo(e.center);return as.radius=.7071067811865476+t,as.applyMatrix4(e.matrixWorld),this.intersectsSphere(as)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(zo.x=s.normal.x>0?e.max.x:e.min.x,zo.y=s.normal.y>0?e.max.y:e.min.y,zo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var rl=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},al=new D,ol=new D,pf=new it,Yr=new cr,Ho=new ai,Ph=new D,mf=new D,ll=class extends qt{constructor(e=new Rt,t=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)al.fromBufferAttribute(t,s-1),ol.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=al.distanceTo(ol);e.setAttribute("lineDistance",new lt(n,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;pf.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(pf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=u,m=g-1;x<m;x+=l){let p=h.getX(x),S=h.getX(x+1),M=Vo(this,e,Yr,c,p,S,x);M&&t.push(M)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(u),p=Vo(this,e,Yr,c,x,m,g-1);p&&t.push(p)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=u,m=g-1;x<m;x+=l){let p=Vo(this,e,Yr,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Vo(this,e,Yr,c,g-1,u,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Vo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(al.fromBufferAttribute(o,s),ol.fromBufferAttribute(o,r),t.distanceSqToSegment(al,ol,Ph,mf)>n)return;Ph.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ph);if(!(l<e.near||l>e.far))return{distance:l,point:mf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var gf=new D,xf=new D,da=class extends ll{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)gf.fromBufferAttribute(t,s),xf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+gf.distanceTo(xf);e.setAttribute("lineDistance",new lt(n,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var cl=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vf=new it,zh=new cr,ko=new ai,Go=new D,pr=class extends qt{constructor(e=new Rt,t=new cl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ko.copy(n.boundingSphere),ko.applyMatrix4(s),ko.radius+=r,e.ray.intersectsSphere(ko)===!1)return;vf.copy(s).invert(),zh.copy(e.ray).applyMatrix4(vf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=d,x=u;g<x;g++){let m=l.getX(g);Go.fromBufferAttribute(f,m),_f(Go,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let g=d,x=u;g<x;g++)Go.fromBufferAttribute(f,g),_f(Go,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _f(i,e,t,n,s,r,a){let o=zh.distanceSqToPoint(i);if(o<t){let c=new D;zh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pi=class extends xn{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class extends xn{constructor(e,t,n=Qn,s,r,a,o=Xt,c=Xt,l,h=si,f=1){if(h!==si&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new lr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},hl=class extends li{constructor(e,t=Qn,n=Ji,s,r,a=Xt,o=Xt,c,l=si){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pa=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wi=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],c=[],l=[],h=t/2,f=Math.PI/2*e,d=t,u=2*f+d,g=n*2+r,x=s+1,m=new D,p=new D;for(let S=0;S<=g;S++){let M=0,b=0,w=0,R=0;if(S<=n){let y=S/n,E=y*Math.PI/2;b=-h-e*Math.cos(E),w=e*Math.sin(E),R=-e*Math.cos(E),M=y*f}else if(S<=n+r){let y=(S-n)/r;b=-h+y*t,w=e,R=0,M=f+y*d}else{let y=(S-n-r)/n,E=y*Math.PI/2;b=h+e*Math.sin(E),w=e*Math.cos(E),R=e*Math.sin(E),M=f+d+y*f}let P=Math.max(0,Math.min(1,M/u)),N=0;S===0?N=.5/s:S===g&&(N=-.5/s);for(let y=0;y<=s;y++){let E=y/s,U=E*Math.PI*2,F=Math.sin(U),V=Math.cos(U);p.x=-w*V,p.y=b,p.z=w*F,o.push(p.x,p.y,p.z),m.set(-w*V,R,w*F),m.normalize(),c.push(m.x,m.y,m.z),l.push(E+N,P)}if(S>0){let y=(S-1)*x;for(let E=0;E<s;E++){let U=y+E,F=y+E+1,V=S*x+E,$=S*x+E+1;a.push(U,F,V),a.push(F,$,V)}}}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var sn=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],u=[],g=0,x=[],m=n/2,p=0;S(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function S(){let b=new D,w=new D,R=0,P=(t-e)/n;for(let N=0;N<=r;N++){let y=[],E=N/r,U=E*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,$=V*c+o,k=Math.sin($),W=Math.cos($);w.x=U*k,w.y=-E*n+m,w.z=U*W,f.push(w.x,w.y,w.z),b.set(k,P,W).normalize(),d.push(b.x,b.y,b.z),u.push(V,1-E),y.push(g++)}x.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){let E=x[y][N],U=x[y+1][N],F=x[y+1][N+1],V=x[y][N+1];(e>0||y!==0)&&(h.push(E,U,V),R+=3),(t>0||y!==r-1)&&(h.push(U,F,V),R+=3)}l.addGroup(p,R,0),p+=R}function M(b){let w=g,R=new ie,P=new D,N=0,y=b===!0?e:t,E=b===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*E,0),d.push(0,E,0),u.push(.5,.5),g++;let U=g;for(let F=0;F<=s;F++){let $=F/s*c+o,k=Math.cos($),W=Math.sin($);P.x=y*W,P.y=m*E,P.z=y*k,f.push(P.x,P.y,P.z),d.push(0,E,0),R.x=k*.5+.5,R.y=W*.5*E+.5,u.push(R.x,R.y),g++}for(let F=0;F<s;F++){let V=w+F,$=U+F;b===!0?h.push($,$+1,V):h.push($+1,$,V),N+=3}l.addGroup(p,N,b===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ps=class i extends sn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ul=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let M=new D,b=new D,w=new D;for(let R=0;R<t.length;R+=3)u(t[R+0],M),u(t[R+1],b),u(t[R+2],w),c(M,b,w,S)}function c(S,M,b,w){let R=w+1,P=[];for(let N=0;N<=R;N++){P[N]=[];let y=S.clone().lerp(b,N/R),E=M.clone().lerp(b,N/R),U=R-N;for(let F=0;F<=U;F++)F===0&&N===R?P[N][F]=y:P[N][F]=y.clone().lerp(E,F/U)}for(let N=0;N<R;N++)for(let y=0;y<2*(R-N)-1;y++){let E=Math.floor(y/2);y%2===0?(d(P[N][E+1]),d(P[N+1][E]),d(P[N][E])):(d(P[N][E+1]),d(P[N+1][E+1]),d(P[N+1][E]))}}function l(S){let M=new D;for(let b=0;b<r.length;b+=3)M.x=r[b+0],M.y=r[b+1],M.z=r[b+2],M.normalize().multiplyScalar(S),r[b+0]=M.x,r[b+1]=M.y,r[b+2]=M.z}function h(){let S=new D;for(let M=0;M<r.length;M+=3){S.x=r[M+0],S.y=r[M+1],S.z=r[M+2];let b=m(S)/2/Math.PI+.5,w=p(S)/Math.PI+.5;a.push(b,1-w)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){let M=a[S+0],b=a[S+2],w=a[S+4],R=Math.max(M,b,w),P=Math.min(M,b,w);R>.9&&P<.1&&(M<.2&&(a[S+0]+=1),b<.2&&(a[S+2]+=1),w<.2&&(a[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function u(S,M){let b=S*3;M.x=e[b+0],M.y=e[b+1],M.z=e[b+2]}function g(){let S=new D,M=new D,b=new D,w=new D,R=new ie,P=new ie,N=new ie;for(let y=0,E=0;y<r.length;y+=9,E+=6){S.set(r[y+0],r[y+1],r[y+2]),M.set(r[y+3],r[y+4],r[y+5]),b.set(r[y+6],r[y+7],r[y+8]),R.set(a[E+0],a[E+1]),P.set(a[E+2],a[E+3]),N.set(a[E+4],a[E+5]),w.copy(S).add(M).add(b).divideScalar(3);let U=m(w);x(R,E+0,S,U),x(P,E+2,M,U),x(N,E+4,b,U)}}function x(S,M,b,w){w<0&&S.x===1&&(a[M]=S.x-1),b.x===0&&b.z===0&&(a[M]=w/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new ie:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,c=new it;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ct(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(ct(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},mr=class extends Fn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fl=class extends mr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lu(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Wo=new D,Ih=new lu,Dh=new lu,Lh=new lu,gr=class extends Fn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Wo.subVectors(s[0],s[1]).add(s[0]),l=Wo);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Wo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(d),u),m=Math.pow(d.distanceToSquared(h),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ih.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,g,x,m),Dh.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,g,x,m),Lh.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ih.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Dh.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Lh.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Ih.calc(c),Dh.calc(c),Lh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function bm(i,e){let t=1-i;return t*t*e}function Sm(i,e){return 2*(1-i)*i*e}function Em(i,e){return i*i*e}function Kr(i,e,t,n){return bm(i,e)+Sm(i,t)+Em(i,n)}function Tm(i,e){let t=1-i;return t*t*t*e}function wm(i,e){let t=1-i;return 3*t*t*i*e}function Am(i,e){return 3*(1-i)*i*i*e}function Rm(i,e){return i*i*i*e}function jr(i,e,t,n,s){return Tm(i,e)+wm(i,t)+Am(i,n)+Rm(i,s)}var ma=class extends Fn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},dl=class extends Fn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(jr(e,s.x,r.x,a.x,o.x),jr(e,s.y,r.y,a.y,o.y),jr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ga=class extends Fn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends Fn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Fn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Kr(e,s.x,r.x,a.x),Kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},va=class extends Fn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Kr(e,s.x,r.x,a.x),Kr(e,s.y,r.y,a.y),Kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_a=class extends Fn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(yf(o,c.x,l.x,h.x,f.x),yf(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},ml=Object.freeze({__proto__:null,ArcCurve:fl,CatmullRomCurve3:gr,CubicBezierCurve:ma,CubicBezierCurve3:dl,EllipseCurve:mr,LineCurve:ga,LineCurve3:pl,QuadraticBezierCurve:xa,QuadraticBezierCurve3:va,SplineCurve:_a}),gl=class extends Fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ml[s.type]().fromJSON(s))}return this}},ya=class extends gl{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ga(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new xa(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ma(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new _a(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){let l=new mr(e,t,n,s,r,a,o,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Xi=class extends ya{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new ya().fromJSON(s))}return this}};function Cm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=Um(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let h=o,f=c;for(let d=t;d<s;d+=t){let u=i[d],g=i[d+1];u<o&&(o=u),g<c&&(c=g),u>h&&(h=u),g>f&&(f=g)}l=Math.max(h-o,f-c),l=l!==0?32767/l:0}return Ma(r,a,t,o,c,l,0),a}function sd(i,e,t,n,s){let r;if(s===Xm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Mf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Mf(a/n|0,i[a],i[a+1],r);return r&&xr(r,r.next)&&(Sa(r),r=r.next),r}function ms(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(xr(t,t.next)||zt(t.prev,t,t.next)===0)){if(Sa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ma(i,e,t,n,s,r,a){if(!i)return;!a&&r&&zm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Im(i,n,s,r):Pm(i)){e.push(c.i,i.i,l.i),Sa(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=Dm(ms(i),e),Ma(i,e,t,n,s,r,2)):a===2&&Lm(i,e,t,n,s,r):Ma(ms(i),e,t,n,s,r,1);break}}}function Pm(i){let e=i.prev,t=i,n=i.next;if(zt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(s,r,a),f=Math.min(o,c,l),d=Math.max(s,r,a),u=Math.max(o,c,l),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&Zr(s,o,r,c,a,l,g.x,g.y)&&zt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Im(i,e,t,n){let s=i.prev,r=i,a=i.next;if(zt(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,c,l),g=Math.min(h,f,d),x=Math.max(o,c,l),m=Math.max(h,f,d),p=Hh(u,g,e,t,n),S=Hh(x,m,e,t,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=p&&b&&b.z<=S;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Zr(o,h,c,f,l,d,M.x,M.y)&&zt(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=u&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Zr(o,h,c,f,l,d,b.x,b.y)&&zt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&Zr(o,h,c,f,l,d,M.x,M.y)&&zt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=S;){if(b.x>=u&&b.x<=x&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Zr(o,h,c,f,l,d,b.x,b.y)&&zt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Dm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!xr(n,s)&&ad(n,t,t.next,s)&&ba(n,s)&&ba(s,n)&&(e.push(n.i,t.i,s.i),Sa(t),Sa(t.next),t=i=s),t=t.next}while(t!==i);return ms(t)}function Lm(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&km(a,o)){let c=od(a,o);a=ms(a,a.next),c=ms(c,c.next),Ma(a,e,t,n,s,r,0),Ma(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Um(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=sd(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Vm(l))}s.sort(Nm);for(let r=0;r<s.length;r++)t=Fm(s[r],t);return t}function Nm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Fm(i,e){let t=Bm(i,e);if(!t)return e;let n=od(t,i);return ms(n,n.next),ms(t,t.next)}function Bm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(xr(i,t))return t;do{if(xr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&rd(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ba(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Om(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Om(i,e){return zt(i.prev,i,e.prev)<0&&zt(e.next,i,i.next)<0}function zm(i,e,t,n){let s=i;do s.z===0&&(s.z=Hh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Hm(s)}function Hm(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Hh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Vm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Zr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rd(i,e,t,n,s,r,a,o)}function km(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Gm(i,e)&&(ba(i,e)&&ba(e,i)&&Wm(i,e)&&(zt(i.prev,i,e.prev)||zt(i,e.prev,e))||xr(i,e)&&zt(i.prev,i,i.next)>0&&zt(e.prev,e,e.next)>0)}function zt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function xr(i,e){return i.x===e.x&&i.y===e.y}function ad(i,e,t,n){let s=qo(zt(i,e,t)),r=qo(zt(i,e,n)),a=qo(zt(t,n,i)),o=qo(zt(t,n,e));return!!(s!==r&&a!==o||s===0&&Xo(i,t,e)||r===0&&Xo(i,n,e)||a===0&&Xo(t,i,n)||o===0&&Xo(t,e,n))}function Xo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function qo(i){return i>0?1:i<0?-1:0}function Gm(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ba(i,e){return zt(i.prev,i,i.next)<0?zt(i,e,i.next)>=0&&zt(i,i.prev,e)>=0:zt(i,e,i.prev)<0||zt(i,i.next,e)<0}function Wm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function od(i,e){let t=Vh(i.i,i.x,i.y),n=Vh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Mf(i,e,t,n){let s=Vh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Sa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var kh=class{static triangulate(e,t,n=2){return Cm(e,t,n)}},ls=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bf(e),Sf(n,e);let a=e.length;t.forEach(bf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,Sf(n,t[c]);let o=kh.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function bf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var gs=class i extends Rt{constructor(e=new Xi([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:qm,M,b=!1,w,R,P,N;if(p){M=p.getSpacedPoints(h),b=!0,d=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ae),R=new D,P=new D,N=new D}d||(m=0,u=0,g=0,x=0);let y=o.extractPoints(l),E=y.shape,U=y.holes;if(!ls.isClockWise(E)){E=E.reverse();for(let ae=0,fe=U.length;ae<fe;ae++){let le=U[ae];ls.isClockWise(le)&&(U[ae]=le.reverse())}}function V(ae){let le=10000000000000001e-36,Re=ae[0];for(let I=1;I<=ae.length;I++){let Ee=I%ae.length,ge=ae[Ee],Ve=ge.x-Re.x,de=ge.y-Re.y,C=Ve*Ve+de*de,_=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs(Re.x),Math.abs(Re.y)),O=le*_*_;if(C<=O){ae.splice(Ee,1),I--;continue}Re=ge}}V(E),U.forEach(V);let $=U.length,k=E;for(let ae=0;ae<$;ae++){let fe=U[ae];E=E.concat(fe)}function W(ae,fe,le){return fe||et("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(fe,le)}let X=E.length;function ne(ae,fe,le){let Re,I,Ee,ge=ae.x-fe.x,Ve=ae.y-fe.y,de=le.x-ae.x,C=le.y-ae.y,_=ge*ge+Ve*Ve,O=ge*C-Ve*de;if(Math.abs(O)>Number.EPSILON){let ee=Math.sqrt(_),se=Math.sqrt(de*de+C*C),Y=fe.x-Ve/ee,be=fe.y+ge/ee,he=le.x-C/se,ye=le.y+de/se,$e=((he-Y)*C-(ye-be)*de)/(ge*C-Ve*de);Re=Y+ge*$e-ae.x,I=be+Ve*$e-ae.y;let ue=Re*Re+I*I;if(ue<=2)return new ie(Re,I);Ee=Math.sqrt(ue/2)}else{let ee=!1;ge>Number.EPSILON?de>Number.EPSILON&&(ee=!0):ge<-Number.EPSILON?de<-Number.EPSILON&&(ee=!0):Math.sign(Ve)===Math.sign(C)&&(ee=!0),ee?(Re=-Ve,I=ge,Ee=Math.sqrt(_)):(Re=ge,I=Ve,Ee=Math.sqrt(_/2))}return new ie(Re/Ee,I/Ee)}let ce=[];for(let ae=0,fe=k.length,le=fe-1,Re=ae+1;ae<fe;ae++,le++,Re++)le===fe&&(le=0),Re===fe&&(Re=0),ce[ae]=ne(k[ae],k[le],k[Re]);let xe=[],ve,Fe=ce.concat();for(let ae=0,fe=$;ae<fe;ae++){let le=U[ae];ve=[];for(let Re=0,I=le.length,Ee=I-1,ge=Re+1;Re<I;Re++,Ee++,ge++)Ee===I&&(Ee=0),ge===I&&(ge=0),ve[Re]=ne(le[Re],le[Ee],le[ge]);xe.push(ve),Fe=Fe.concat(ve)}let Ge;if(m===0)Ge=ls.triangulateShape(k,U);else{let ae=[],fe=[];for(let le=0;le<m;le++){let Re=le/m,I=u*Math.cos(Re*Math.PI/2),Ee=g*Math.sin(Re*Math.PI/2)+x;for(let ge=0,Ve=k.length;ge<Ve;ge++){let de=W(k[ge],ce[ge],Ee);ze(de.x,de.y,-I),Re===0&&ae.push(de)}for(let ge=0,Ve=$;ge<Ve;ge++){let de=U[ge];ve=xe[ge];let C=[];for(let _=0,O=de.length;_<O;_++){let ee=W(de[_],ve[_],Ee);ze(ee.x,ee.y,-I),Re===0&&C.push(ee)}Re===0&&fe.push(C)}}Ge=ls.triangulateShape(ae,fe)}let Ze=Ge.length,nt=g+x;for(let ae=0;ae<X;ae++){let fe=d?W(E[ae],Fe[ae],nt):E[ae];b?(P.copy(w.normals[0]).multiplyScalar(fe.x),R.copy(w.binormals[0]).multiplyScalar(fe.y),N.copy(M[0]).add(P).add(R),ze(N.x,N.y,N.z)):ze(fe.x,fe.y,0)}for(let ae=1;ae<=h;ae++)for(let fe=0;fe<X;fe++){let le=d?W(E[fe],Fe[fe],nt):E[fe];b?(P.copy(w.normals[ae]).multiplyScalar(le.x),R.copy(w.binormals[ae]).multiplyScalar(le.y),N.copy(M[ae]).add(P).add(R),ze(N.x,N.y,N.z)):ze(le.x,le.y,f/h*ae)}for(let ae=m-1;ae>=0;ae--){let fe=ae/m,le=u*Math.cos(fe*Math.PI/2),Re=g*Math.sin(fe*Math.PI/2)+x;for(let I=0,Ee=k.length;I<Ee;I++){let ge=W(k[I],ce[I],Re);ze(ge.x,ge.y,f+le)}for(let I=0,Ee=U.length;I<Ee;I++){let ge=U[I];ve=xe[I];for(let Ve=0,de=ge.length;Ve<de;Ve++){let C=W(ge[Ve],ve[Ve],Re);b?ze(C.x,C.y+M[h-1].y,M[h-1].x+le):ze(C.x,C.y,f+le)}}}Q(),re();function Q(){let ae=s.length/3;if(d){let fe=0,le=X*fe;for(let Re=0;Re<Ze;Re++){let I=Ge[Re];Pe(I[2]+le,I[1]+le,I[0]+le)}fe=h+m*2,le=X*fe;for(let Re=0;Re<Ze;Re++){let I=Ge[Re];Pe(I[0]+le,I[1]+le,I[2]+le)}}else{for(let fe=0;fe<Ze;fe++){let le=Ge[fe];Pe(le[2],le[1],le[0])}for(let fe=0;fe<Ze;fe++){let le=Ge[fe];Pe(le[0]+X*h,le[1]+X*h,le[2]+X*h)}}n.addGroup(ae,s.length/3-ae,0)}function re(){let ae=s.length/3,fe=0;Me(k,fe),fe+=k.length;for(let le=0,Re=U.length;le<Re;le++){let I=U[le];Me(I,fe),fe+=I.length}n.addGroup(ae,s.length/3-ae,1)}function Me(ae,fe){let le=ae.length;for(;--le>=0;){let Re=le,I=le-1;I<0&&(I=ae.length-1);for(let Ee=0,ge=h+m*2;Ee<ge;Ee++){let Ve=X*Ee,de=X*(Ee+1),C=fe+Re+Ve,_=fe+I+Ve,O=fe+I+de,ee=fe+Re+de;ut(C,_,O,ee)}}}function ze(ae,fe,le){c.push(ae),c.push(fe),c.push(le)}function Pe(ae,fe,le){gt(ae),gt(fe),gt(le);let Re=s.length/3,I=S.generateTopUV(n,s,Re-3,Re-2,Re-1);Je(I[0]),Je(I[1]),Je(I[2])}function ut(ae,fe,le,Re){gt(ae),gt(fe),gt(Re),gt(fe),gt(le),gt(Re);let I=s.length/3,Ee=S.generateSideWallUV(n,s,I-6,I-3,I-2,I-1);Je(Ee[0]),Je(Ee[1]),Je(Ee[3]),Je(Ee[1]),Je(Ee[2]),Je(Ee[3])}function gt(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function Je(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ym(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ml[s.type]().fromJSON(s)),new i(n,e.options)}},qm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],d=e[s*3],u=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-f),new ie(d,1-g),new ie(x,1-p)]:[new ie(o,1-c),new ie(h,1-f),new ie(u,1-g),new ie(m,1-p)]}};function Ym(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ea=class i extends ul{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ta=class i extends Rt{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,f=new D,d=new ie,u=new D,g=new D,x=new D,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,u.x=p*1,u.y=-m,u.z=p*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let S=0;S<=t;S++){let M=n+S*h*s,b=Math.sin(M),w=Math.cos(M);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*b,f.y=e[R].y,f.z=e[R].x*w,a.push(f.x,f.y,f.z),d.x=S/t,d.y=R/(e.length-1),o.push(d.x,d.y);let P=c[3*R+0]*b,N=c[3*R+1],y=c[3*R+0]*w;l.push(P,N,y)}}for(let S=0;S<t;S++)for(let M=0;M<e.length-1;M++){let b=M+S*e.length,w=b,R=b+e.length,P=b+e.length+1,N=b+1;r.push(w,R,N),r.push(P,N,R)}this.setIndex(r),this.setAttribute("position",new lt(a,3)),this.setAttribute("uv",new lt(o,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Pt=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,d=t/c,u=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*d-a;for(let M=0;M<l;M++){let b=M*f-r;g.push(b,-S,0),x.push(0,0,1),m.push(M/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){let M=S+l*p,b=S+l*(p+1),w=S+1+l*(p+1),R=S+1+l*p;u.push(M,b,R),u.push(b,w,R)}this.setIndex(u),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Kn=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new D,d=new D,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],M=p/n,b=0;p===0&&a===0?b=.5/t:p===n&&c===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){let R=w/t;f.x=-e*Math.cos(s+R*r)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(s+R*r)*Math.sin(a+M*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(R+b,1-M),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<t;S++){let M=h[p][S+1],b=h[p][S],w=h[p+1][S],R=h[p+1][S+1];(p!==0||a>0)&&u.push(M,b,R),(p!==n-1||c<Math.PI)&&u.push(b,w,R)}this.setIndex(u),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var qi=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new D,f=new D,d=new D;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let x=g/s*r,m=u/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let x=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,S=(s+1)*u+g;a.push(x,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var wa=class i extends Rt{constructor(e=new va(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,c=new D,l=new ie,h=new D,f=[],d=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function x(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),S(),p()}function m(M){h=e.getPointAt(M/t,h);let b=a.normals[M],w=a.binormals[M];for(let R=0;R<=s;R++){let P=R/s*Math.PI*2,N=Math.sin(P),y=-Math.cos(P);c.x=y*b.x+N*w.x,c.y=y*b.y+N*w.y,c.z=y*b.z+N*w.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let M=1;M<=t;M++)for(let b=1;b<=s;b++){let w=(s+1)*(M-1)+(b-1),R=(s+1)*M+(b-1),P=(s+1)*M+b,N=(s+1)*(M-1)+b;g.push(w,R,N),g.push(R,P,N)}}function S(){for(let M=0;M<=t;M++)for(let b=0;b<=s;b++)l.x=M/t,l.y=b/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vr=class extends st{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Tt=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xs=class extends Tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Aa=class extends Gn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var xl=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},vl=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var vs=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_l=class extends vs{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Fh:r=e,o=2*t-n;break;case Bh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Fh:a=e,c=2*n-t;break;case Bh:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-u)*m+(1.5+u)*x+.5*g,b=u*m-u*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+S*a[l+w]+M*a[c+w]+b*a[f+w];return r}},yl=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Ml=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Bn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yo(t,this.TimeBufferType),this.values=Yo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yo(e.times,Array),values:Yo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _l(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qr:t=this.InterpolantFactoryMethodDiscrete;break;case Qo:t=this.InterpolantFactoryMethodLinear;break;case Zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qr;case this.InterpolantFactoryMethodLinear:return Qo;case this.InterpolantFactoryMethodSmooth:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(et("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(et("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){et("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){et("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Bp(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){et("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Zo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[d+g]||x!==t[u+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Bn.prototype.ValueTypeName="";Bn.prototype.TimeBufferType=Float32Array;Bn.prototype.ValueBufferType=Float32Array;Bn.prototype.DefaultInterpolation=Qo;var Yi=class extends Bn{constructor(e,t,n){super(e,t,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Qr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};bl.prototype.ValueTypeName="color";var Sl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Sl.prototype.ValueTypeName="number";var El=class extends vs{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Ra=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new El(this.times,this.values,this.getValueSize(),e)}};Ra.prototype.ValueTypeName="quaternion";Ra.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Bn{constructor(e,t,n){super(e,t,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=Qr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Tl=class extends Bn{constructor(e,t,n,s){super(e,t,n,s)}};Tl.prototype.ValueTypeName="vector";var $o={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},wl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new wl,_r=class{constructor(e){this.manager=e!==void 0?e:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};_r.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=new WeakMap,Al=class extends _r{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=$o.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=ir.get(a);f===void 0&&(f=[],ir.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=rr("img");function c(){h(),t&&t(this);let f=ir.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}ir.delete(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),$o.remove(`image:${e}`);let d=ir.get(this)||[];for(let u=0;u<d.length;u++){let g=d[u];g.onError&&g.onError(f)}ir.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),$o.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ca=class extends _r{constructor(e){super(e)}load(e,t,n,s){let r=new xn,a=new Al(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},_s=class extends qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pa=class extends _s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uh=new it,Ef=new D,Tf=new D,Ia=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ef.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ef),Tf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Tf),t.updateMatrixWorld(),Uh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gh=class extends Ia{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Da=class extends _s{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Gh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Wh=class extends Ia{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},Ii=class extends _s{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Wh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},$i=class extends oa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xh=class extends Ia{constructor(){super(new $i(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},La=class extends _s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new Xh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rl=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ys=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var cu="\\[\\]\\.:\\/",Zm=new RegExp("["+cu+"]","g"),hu="[^"+cu+"]",$m="[^"+cu.replace("\\.","")+"]",Jm=/((?:WC+[\/:])*)/.source.replace("WC",hu),Km=/(WCOD+)?/.source.replace("WCOD",$m),jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),Qm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),e0=new RegExp("^"+Jm+Km+jm+Qm+"$"),t0=["material","materials","bones","map"],qh=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zm,"")}static parseTrackName(e){let t=e0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);t0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){et("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){et("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){et("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){et("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){et("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){et("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;et("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){et("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=qh;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ay=new Float32Array(1);function uu(i,e,t,n){let s=n0(n);switch(t){case nu:return i*e;case Gl:return i*e/s.components*s.byteLength;case Wl:return i*e/s.components*s.byteLength;case Ts:return i*e*2/s.components*s.byteLength;case Xl:return i*e*2/s.components*s.byteLength;case iu:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case ql:return i*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Jl:return Math.max(i,16)*Math.max(e,8)/4;case Yl:case $l:return Math.max(i,8)*Math.max(e,8)/2;case Kl:case jl:case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ql:case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vc:case _c:case yc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Mc:case bc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sc:case Ec:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function n0(i){switch(i){case vn:case jh:return{byteLength:1,components:1};case Mr:case Qh:case Zt:return{byteLength:2,components:1};case Vl:case kl:return{byteLength:2,components:4};case Qn:case Hl:case Wn:return{byteLength:4,components:1};case eu:case tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Id(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function o0(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var l0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c0=`#ifdef USE_ALPHAHASH
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
#endif`,h0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,u0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,M0=`#ifdef USE_IRIDESCENCE
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
#endif`,b0=`#ifdef USE_BUMPMAP
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
#endif`,S0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,D0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,k0=`#ifdef USE_ENVMAP
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
#endif`,G0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,q0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$0=`#ifdef USE_GRADIENTMAP
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
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ng=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ig=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rg=`PhysicalMaterial material;
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
#endif`,ag=`uniform sampler2D dfgLUT;
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
}`,og=`
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
#endif`,lg=`#if defined( RE_IndirectDiffuse )
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
#endif`,cg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ug=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xg=`#if defined( USE_POINTS_UV )
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
#endif`,vg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_g=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sg=`#ifdef USE_MORPHTARGETS
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
#endif`,Eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pg=`#ifdef USE_NORMALMAP
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
#endif`,Ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ug=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Og=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qg=`float getShadowMask() {
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
}`,Yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ex=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tx=`#ifdef USE_TRANSMISSION
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
#endif`,nx=`#ifdef USE_TRANSMISSION
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
#endif`,ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ax=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ox=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lx=`uniform sampler2D t2D;
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
}`,cx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ux=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`#include <common>
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
}`,px=`#if DEPTH_PACKING == 3200
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
}`,mx=`#define DISTANCE
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
}`,gx=`#define DISTANCE
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
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`uniform float scale;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Sx=`#define LAMBERT
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
}`,Ex=`#define LAMBERT
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
}`,Tx=`#define MATCAP
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
}`,wx=`#define MATCAP
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
}`,Ax=`#define NORMAL
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
}`,Rx=`#define NORMAL
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
}`,Cx=`#define PHONG
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
}`,Px=`#define PHONG
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
}`,Ix=`#define STANDARD
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
}`,Dx=`#define STANDARD
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
}`,Lx=`#define TOON
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
}`,Ux=`#define TOON
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
}`,Nx=`uniform float size;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Bx=`#include <common>
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
}`,Ox=`uniform vec3 color;
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
}`,zx=`uniform float rotation;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:l0,alphahash_pars_fragment:c0,alphamap_fragment:h0,alphamap_pars_fragment:u0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:x0,begin_vertex:v0,beginnormal_vertex:_0,bsdfs:y0,iridescence_fragment:M0,bumpmap_pars_fragment:b0,clipping_planes_fragment:S0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:w0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,cube_uv_reflection_fragment:D0,defaultnormal_vertex:L0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:F0,emissivemap_pars_fragment:B0,colorspace_fragment:O0,colorspace_pars_fragment:z0,envmap_fragment:H0,envmap_common_pars_fragment:V0,envmap_pars_fragment:k0,envmap_pars_vertex:G0,envmap_physical_pars_fragment:eg,envmap_vertex:W0,fog_vertex:X0,fog_pars_vertex:q0,fog_fragment:Y0,fog_pars_fragment:Z0,gradientmap_pars_fragment:$0,lightmap_pars_fragment:J0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:j0,lights_pars_begin:Q0,lights_toon_fragment:tg,lights_toon_pars_fragment:ng,lights_phong_fragment:ig,lights_phong_pars_fragment:sg,lights_physical_fragment:rg,lights_physical_pars_fragment:ag,lights_fragment_begin:og,lights_fragment_maps:lg,lights_fragment_end:cg,logdepthbuf_fragment:hg,logdepthbuf_pars_fragment:ug,logdepthbuf_pars_vertex:fg,logdepthbuf_vertex:dg,map_fragment:pg,map_pars_fragment:mg,map_particle_fragment:gg,map_particle_pars_fragment:xg,metalnessmap_fragment:vg,metalnessmap_pars_fragment:_g,morphinstance_vertex:yg,morphcolor_vertex:Mg,morphnormal_vertex:bg,morphtarget_pars_vertex:Sg,morphtarget_vertex:Eg,normal_fragment_begin:Tg,normal_fragment_maps:wg,normal_pars_fragment:Ag,normal_pars_vertex:Rg,normal_vertex:Cg,normalmap_pars_fragment:Pg,clearcoat_normal_fragment_begin:Ig,clearcoat_normal_fragment_maps:Dg,clearcoat_pars_fragment:Lg,iridescence_pars_fragment:Ug,opaque_fragment:Ng,packing:Fg,premultiplied_alpha_fragment:Bg,project_vertex:Og,dithering_fragment:zg,dithering_pars_fragment:Hg,roughnessmap_fragment:Vg,roughnessmap_pars_fragment:kg,shadowmap_pars_fragment:Gg,shadowmap_pars_vertex:Wg,shadowmap_vertex:Xg,shadowmask_pars_fragment:qg,skinbase_vertex:Yg,skinning_pars_vertex:Zg,skinning_vertex:$g,skinnormal_vertex:Jg,specularmap_fragment:Kg,specularmap_pars_fragment:jg,tonemapping_fragment:Qg,tonemapping_pars_fragment:ex,transmission_fragment:tx,transmission_pars_fragment:nx,uv_pars_fragment:ix,uv_pars_vertex:sx,uv_vertex:rx,worldpos_vertex:ax,background_vert:ox,background_frag:lx,backgroundCube_vert:cx,backgroundCube_frag:hx,cube_vert:ux,cube_frag:fx,depth_vert:dx,depth_frag:px,distance_vert:mx,distance_frag:gx,equirect_vert:xx,equirect_frag:vx,linedashed_vert:_x,linedashed_frag:yx,meshbasic_vert:Mx,meshbasic_frag:bx,meshlambert_vert:Sx,meshlambert_frag:Ex,meshmatcap_vert:Tx,meshmatcap_frag:wx,meshnormal_vert:Ax,meshnormal_frag:Rx,meshphong_vert:Cx,meshphong_frag:Px,meshphysical_vert:Ix,meshphysical_frag:Dx,meshtoon_vert:Lx,meshtoon_frag:Ux,points_vert:Nx,points_frag:Fx,shadow_vert:Bx,shadow_frag:Ox,sprite_vert:zx,sprite_frag:Hx},Le={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},fi={basic:{uniforms:_n([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:_n([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Se(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:_n([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:_n([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:_n([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Se(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:_n([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:_n([Le.points,Le.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:_n([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:_n([Le.common,Le.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:_n([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:_n([Le.sprite,Le.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:_n([Le.common,Le.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:_n([Le.lights,Le.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};fi.physical={uniforms:_n([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var Cc={r:0,b:0,g:0},As=new Nn,Vx=new it;function kx(i,e,t,n,s,r,a){let o=new Se(0),c=r===!0?0:1,l,h,f=null,d=0,u=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?t:e).get(b)),b}function x(M){let b=!1,w=g(M);w===null?p(o,c):w&&w.isColor&&(p(w,1),b=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,b){let w=g(b);w&&(w.isCubeTexture||w.mapping===ka)?(h===void 0&&(h=new qe(new mt(1,1,1),new st({name:"BackgroundCubeMaterial",uniforms:ws(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(b.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(As)),h.material.toneMapped=pt.getTransfer(w.colorSpace)!==yt,(f!==w||d!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,d=w.version,u=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new qe(new Pt(2,2),new st({name:"BackgroundMaterial",uniforms:ws(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=pt.getTransfer(w.colorSpace)!==yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=w,d=w.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,b){M.getRGB(Cc,ou(i)),n.buffers.color.setClear(Cc.r,Cc.g,Cc.b,b,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,b=1){o.set(M),c=b,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,p(o,c)},render:x,addToRenderList:m,dispose:S}}function Gx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(E,U,F,V,$){let k=!1,W=f(V,F,U);r!==W&&(r=W,l(r.object)),k=u(E,V,F,$),k&&g(E,V,F,$),$!==null&&e.update($,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,b(E,U,F,V),$!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,U,F){let V=F.wireframe===!0,$=n[E.id];$===void 0&&($={},n[E.id]=$);let k=$[U.id];k===void 0&&(k={},$[U.id]=k);let W=k[V];return W===void 0&&(W=d(c()),k[V]=W),W}function d(E){let U=[],F=[],V=[];for(let $=0;$<t;$++)U[$]=0,F[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:V,object:E,attributes:{},index:null}}function u(E,U,F,V){let $=r.attributes,k=U.attributes,W=0,X=F.getAttributes();for(let ne in X)if(X[ne].location>=0){let xe=$[ne],ve=k[ne];if(ve===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor)),xe===void 0||xe.attribute!==ve||ve&&xe.data!==ve.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(E,U,F,V){let $={},k=U.attributes,W=0,X=F.getAttributes();for(let ne in X)if(X[ne].location>=0){let xe=k[ne];xe===void 0&&(ne==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),ne==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));let ve={};ve.attribute=xe,xe&&xe.data&&(ve.data=xe.data),$[ne]=ve,W++}r.attributes=$,r.attributesNum=W,r.index=V}function x(){let E=r.newAttributes;for(let U=0,F=E.length;U<F;U++)E[U]=0}function m(E){p(E,0)}function p(E,U){let F=r.newAttributes,V=r.enabledAttributes,$=r.attributeDivisors;F[E]=1,V[E]===0&&(i.enableVertexAttribArray(E),V[E]=1),$[E]!==U&&(i.vertexAttribDivisor(E,U),$[E]=U)}function S(){let E=r.newAttributes,U=r.enabledAttributes;for(let F=0,V=U.length;F<V;F++)U[F]!==E[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function M(E,U,F,V,$,k,W){W===!0?i.vertexAttribIPointer(E,U,F,$,k):i.vertexAttribPointer(E,U,F,V,$,k)}function b(E,U,F,V){x();let $=V.attributes,k=F.getAttributes(),W=U.defaultAttributeValues;for(let X in k){let ne=k[X];if(ne.location>=0){let ce=$[X];if(ce===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){let xe=ce.normalized,ve=ce.itemSize,Fe=e.get(ce);if(Fe===void 0)continue;let Ge=Fe.buffer,Ze=Fe.type,nt=Fe.bytesPerElement,Q=Ze===i.INT||Ze===i.UNSIGNED_INT||ce.gpuType===Hl;if(ce.isInterleavedBufferAttribute){let re=ce.data,Me=re.stride,ze=ce.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<ne.locationSize;Pe++)p(ne.location+Pe,re.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<ne.locationSize;Pe++)m(ne.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Pe=0;Pe<ne.locationSize;Pe++)M(ne.location+Pe,ve/ne.locationSize,Ze,xe,Me*nt,(ze+ve/ne.locationSize*Pe)*nt,Q)}else{if(ce.isInstancedBufferAttribute){for(let re=0;re<ne.locationSize;re++)p(ne.location+re,ce.meshPerAttribute);E.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let re=0;re<ne.locationSize;re++)m(ne.location+re);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let re=0;re<ne.locationSize;re++)M(ne.location+re,ve/ne.locationSize,Ze,xe,ve*nt,ve/ne.locationSize*re*nt,Q)}}else if(W!==void 0){let xe=W[X];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(ne.location,xe);break;case 3:i.vertexAttrib3fv(ne.location,xe);break;case 4:i.vertexAttrib4fv(ne.location,xe);break;default:i.vertexAttrib1fv(ne.location,xe)}}}}S()}function w(){N();for(let E in n){let U=n[E];for(let F in U){let V=U[F];for(let $ in V)h(V[$].object),delete V[$];delete U[F]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;let U=n[E.id];for(let F in U){let V=U[F];for(let $ in V)h(V[$].object),delete V[$];delete U[F]}delete n[E.id]}function P(E){for(let U in n){let F=n[U];if(F[E.id]===void 0)continue;let V=F[E.id];for(let $ in V)h(V[$].object),delete V[$];delete F[E.id]}}function N(){y(),a=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Wx(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function o(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,n,1)}function c(l,h,f,d){if(f===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Xx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Cn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let N=P===Zt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==vn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Wn&&!N)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Qe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:b,maxSamples:w,samples:R}}function qx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,M=S*4,b=p.clippingState||null;c.value=b,b=h(g,d,M,u);for(let w=0;w!==M;++w)b[w]=t[w];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=u+x*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,b=u;M!==x;++M,b+=4)a.copy(f[M]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Yx(i){let e=new WeakMap;function t(a,o){return o===Bl?a.mapping=Ji:o===Ol&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bl||o===Ol)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new ca(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ji=4,cd=[.125,.215,.35,.446,.526,.582],Cs=20,Zx=256,$a=new $i,hd=new Se,fu=null,du=0,pu=0,mu=!1,$x=new D,Er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=$x}=r;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,du,pu),this._renderer.xr.enabled=mu,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),pu=this._renderer.getActiveMipmapLevel(),mu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Zt,format:Cn,colorSpace:us,depthBuffer:!1},s=ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Jx(r)),this._blurMaterial=jx(r,e,t),this._ggxMaterial=Kx(r,e,t)}return s}_compileMaterial(e){let t=new qe(new Rt,e);this._renderer.compile(t,$a)}_sceneToCubeUV(e,t,n,s,r){let c=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(hd),f.toneMapping=jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new mt,new kt({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(hd),p=!0);for(let M=0;M<6;M++){let b=M%3;b===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[M],r.y,r.z)):b===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[M]));let w=this._cubeSize;br(s,b*w,M>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(x,c),f.render(e,c)}f.toneMapping=u,f.autoClear=d,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ji||e.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;br(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,$a)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=0+l*1.25,u=f*d,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ji?n-g+ji:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=g-t,br(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,$a),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,br(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,$a)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&et("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=l;let d=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Cs-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Cs;m>Cs&&Qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Cs}`);let p=[],S=0;for(let P=0;P<Cs;++P){let N=P/x,y=Math.exp(-N*N/2);p.push(y),P===0?S+=y:P<m&&(S+=2*y)}for(let P=0;P<p.length;P++)p[P]=p[P]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let b=this._sizeLods[s],w=3*b*(s>M-ji?s-M+ji:0),R=4*(this._cubeSize-b);br(t,w,R,3*b,2*b),c.setRenderTarget(t),c.render(f,$a)}};function Jx(i){let e=[],t=[],n=[],s=i,r=i-ji+1+cd.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ji?c=cd[a-i+ji-1]:a===0&&(c=0),t.push(c);let l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*u),M=new Float32Array(m*g*u),b=new Float32Array(p*g*u);for(let R=0;R<u;R++){let P=R%3*2/3-1,N=R>2?0:-1,y=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];S.set(y,x*g*R),M.set(d,m*g*R);let E=[R,R,R,R,R,R];b.set(E,p*g*R)}let w=new Rt;w.setAttribute("position",new Mt(S,x)),w.setAttribute("uv",new Mt(M,m)),w.setAttribute("faceIndex",new Mt(b,p)),n.push(new qe(w,null)),s>ji&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function ud(i,e,t){let n=new Ot(i,e,t);return n.texture.mapping=ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function br(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Kx(i,e,t){return new st({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function jx(i,e,t){let n=new Float32Array(Cs),s=new D(0,1,0);return new st({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function fd(){return new st({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function dd(){return new st({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yt,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function Qx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Bl||c===Ol,h=c===Ji||c===Es;if(l||h){let f=e.get(o),d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Er(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let u=o.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Er(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function ev(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&or("WebGLRenderer: "+n+" extension not supported."),s}}}function tv(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)e.update(d[u],i.ARRAY_BUFFER)}function l(f){let d=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let S=u.array;x=u.version;for(let M=0,b=S.length;M<b;M+=3){let w=S[M+0],R=S[M+1],P=S[M+2];d.push(w,R,R,P,P,w)}}else if(g!==void 0){let S=g.array;x=g.version;for(let M=0,b=S.length/3-1;M<b;M+=3){let w=M+0,R=M+1,P=M+2;d.push(w,R,R,P,P,w)}}else return;let m=new(ru(d)?aa:ra)(d,1);m.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function nv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function l(d,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,d*a,g),t.update(u,n,g))}function h(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function f(d,u,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,d,0,x,0,g);let p=0;for(let S=0;S<g;S++)p+=u[S]*x[S];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function iv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:et("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function sv(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],M=0;u===!0&&(M=1),g===!0&&(M=2),x===!0&&(M=3);let b=o.attributes.position.count*M,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*w*4*f),P=new ia(R,b,w,f);P.type=Wn,P.needsUpdate=!0;let N=M*4;for(let E=0;E<f;E++){let U=m[E],F=p[E],V=S[E],$=b*w*4*E;for(let k=0;k<U.count;k++){let W=k*N;u===!0&&(s.fromBufferAttribute(U,k),R[$+W+0]=s.x,R[$+W+1]=s.y,R[$+W+2]=s.z,R[$+W+3]=0),g===!0&&(s.fromBufferAttribute(F,k),R[$+W+4]=s.x,R[$+W+5]=s.y,R[$+W+6]=s.z,R[$+W+7]=0),x===!0&&(s.fromBufferAttribute(V,k),R[$+W+8]=s.x,R[$+W+9]=s.y,R[$+W+10]=s.z,R[$+W+11]=V.itemSize===4?s.w:1)}}d={count:f,texture:P,size:new ie(b,w)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var av={[Fa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[Oa]:"CINEON_TONE_MAPPING",[Ss]:"ACES_FILMIC_TONE_MAPPING",[Ha]:"AGX_TONE_MAPPING",[Va]:"NEUTRAL_TONE_MAPPING",[za]:"CUSTOM_TONE_MAPPING"};function ov(i,e,t,n,s){let r=new Ot(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Ot(e,t,{type:Zt,depthBuffer:!1,stencilBuffer:!1}),o=new Rt;o.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new lt([0,2,0,0,2,0],2));let c=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new qe(o,c),h=new $i(-1,1,1,-1,0,1),f=null,d=null,u=!1,g,x=null,m=[],p=!1;this.setSize=function(S,M){r.setSize(S,M),a.setSize(S,M);for(let b=0;b<m.length;b++){let w=m[b];w.setSize&&w.setSize(S,M)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;let M=r.width,b=r.height;for(let w=0;w<m.length;w++){let R=m[w];R.setSize&&R.setSize(M,b)}},this.begin=function(S,M){if(u||S.toneMapping===jn&&m.length===0)return!1;if(x=M,M!==null){let b=M.width,w=M.height;(r.width!==b||r.height!==w)&&this.setSize(b,w)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=jn,!0},this.hasRenderPass=function(){return p},this.end=function(S,M){S.toneMapping=g,u=!0;let b=r,w=a;for(let R=0;R<m.length;R++){let P=m[R];if(P.enabled!==!1&&(P.render(S,w,b,M),P.needsSwap!==!1)){let N=b;b=w,w=N}}if(f!==S.outputColorSpace||d!==S.toneMapping){f=S.outputColorSpace,d=S.toneMapping,c.defines={},pt.getTransfer(f)===yt&&(c.defines.SRGB_TRANSFER="");let R=av[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,S.setRenderTarget(x),S.render(l,h),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),c.dispose()}}var Dd=new xn,vu=new li(1,1),Ld=new ia,Ud=new il,Nd=new la,pd=[],md=[],gd=new Float32Array(16),xd=new Float32Array(9),vd=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lc(i,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function hv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function fv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;vd.set(n),i.uniformMatrix2fv(this.addr,!1,vd),en(t,n)}}function dv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),en(t,n)}}function pv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),en(t,n)}}function mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function gv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function xv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function vv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function _v(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function yv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function Sv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(vu.compareFunction=t.isReversedDepthBuffer()?Ac:wc,r=vu):r=Dd,t.setTexture2D(e||r,s)}function Ev(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ud,s)}function Tv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Nd,s)}function wv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Ld,s)}function Av(i){switch(i){case 5126:return lv;case 35664:return cv;case 35665:return hv;case 35666:return uv;case 35674:return fv;case 35675:return dv;case 35676:return pv;case 5124:case 35670:return mv;case 35667:case 35671:return gv;case 35668:case 35672:return xv;case 35669:case 35673:return vv;case 5125:return _v;case 36294:return yv;case 36295:return Mv;case 36296:return bv;case 35678:case 36198:case 36298:case 36306:case 35682:return Sv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Tv;case 36289:case 36303:case 36311:case 36292:return wv}}function Rv(i,e){i.uniform1fv(this.addr,e)}function Cv(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Pv(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function Iv(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function Dv(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lv(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Uv(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Nv(i,e){i.uniform1iv(this.addr,e)}function Fv(i,e){i.uniform2iv(this.addr,e)}function Bv(i,e){i.uniform3iv(this.addr,e)}function Ov(i,e){i.uniform4iv(this.addr,e)}function zv(i,e){i.uniform1uiv(this.addr,e)}function Hv(i,e){i.uniform2uiv(this.addr,e)}function Vv(i,e){i.uniform3uiv(this.addr,e)}function kv(i,e){i.uniform4uiv(this.addr,e)}function Gv(i,e,t){let n=this.cache,s=e.length,r=Lc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=vu:a=Dd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Wv(i,e,t){let n=this.cache,s=e.length,r=Lc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ud,r[a])}function Xv(i,e,t){let n=this.cache,s=e.length,r=Lc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Nd,r[a])}function qv(i,e,t){let n=this.cache,s=e.length,r=Lc(t,s);Qt(n,r)||(i.uniform1iv(this.addr,r),en(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Ld,r[a])}function Yv(i){switch(i){case 5126:return Rv;case 35664:return Cv;case 35665:return Pv;case 35666:return Iv;case 35674:return Dv;case 35675:return Lv;case 35676:return Uv;case 5124:case 35670:return Nv;case 35667:case 35671:return Fv;case 35668:case 35672:return Bv;case 35669:case 35673:return Ov;case 5125:return zv;case 36294:return Hv;case 36295:return Vv;case 36296:return kv;case 35678:case 36198:case 36298:case 36306:case 35682:return Gv;case 35679:case 36299:case 36307:return Wv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return qv}}var _u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Av(t.type)}},yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yv(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},gu=/(\w+)(\])?(\[|\.)?/g;function _d(i,e){i.seq.push(e),i.map[e.id]=e}function Zv(i,e,t){let n=i.name,s=n.length;for(gu.lastIndex=0;;){let r=gu.exec(n),a=gu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){_d(t,l===void 0?new _u(o,i,e):new yu(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Mu(o),_d(t,f)),t=f}}}var Sr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Zv(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function yd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $v=37297,Jv=0;function Kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Md=new ot;function jv(i){pt._getMatrix(Md,pt.workingColorSpace,i);let e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case ea:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Kv(i.getShaderSource(e),o)}else return r}function Qv(i,e){let t=jv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var e_={[Fa]:"Linear",[Ba]:"Reinhard",[Oa]:"Cineon",[Ss]:"ACESFilmic",[Ha]:"AgX",[Va]:"Neutral",[za]:"Custom"};function t_(i,e){let t=e_[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Pc=new D;function n_(){pt.getLuminanceCoefficients(Pc);let i=Pc.x.toFixed(4),e=Pc.y.toFixed(4),t=Pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function s_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ka(i){return i!==""}function Sd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bu(i){return i.replace(a_,l_)}var o_=new Map;function l_(i,e){let t=ht[e];if(t===void 0){let n=o_.get(e);if(n!==void 0)t=ht[n],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bu(t)}var c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(c_,h_)}function h_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function wd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var u_={[Ms]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function f_(i){return u_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var d_={[Ji]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function p_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":d_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var m_={[Es]:"ENVMAP_MODE_REFRACTION"};function g_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":m_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[Jh]:"ENVMAP_BLENDING_MULTIPLY",[Gf]:"ENVMAP_BLENDING_MIX",[Wf]:"ENVMAP_BLENDING_ADD"};function v_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function __(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=f_(t),l=p_(t),h=g_(t),f=v_(t),d=__(t),u=i_(t),g=s_(r),x=s.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(m=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==jn?"#define TONE_MAPPING":"",t.toneMapping!==jn?ht.tonemapping_pars_fragment:"",t.toneMapping!==jn?t_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,Qv("linearToOutputTexel",t.outputColorSpace),n_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),a=bu(a),a=Sd(a,t),a=Ed(a,t),o=bu(o),o=Sd(o,t),o=Ed(o,t),a=Td(a),o=Td(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===su?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===su?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=S+m+a,b=S+p+o,w=yd(s,s.VERTEX_SHADER,M),R=yd(s,s.FRAGMENT_SHADER,b);s.attachShader(x,w),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(U){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",V=s.getShaderInfoLog(w)||"",$=s.getShaderInfoLog(R)||"",k=F.trim(),W=V.trim(),X=$.trim(),ne=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,R);else{let xe=bd(s,w,"vertex"),ve=bd(s,R,"fragment");et("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+k+`
`+xe+`
`+ve)}else k!==""?Qe("WebGLProgram: Program Info Log:",k):(W===""||X==="")&&(ce=!1);ce&&(U.diagnostics={runnable:ne,programLog:k,vertexShader:{log:W,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(w),s.deleteShader(R),N=new Sr(s,x),y=r_(s,x)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,$v)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}var M_=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Eu(e),t.set(e,n)),n}},Eu=class{constructor(e){this.id=M_++,this.code=e,this.usedTimes=0}};function b_(i,e,t,n,s,r,a){let o=new sa,c=new Su,l=new Set,h=[],f=new Map,d=s.logarithmicDepthBuffer,u=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return l.add(y),y===0?"uv":`uv${y}`}function m(y,E,U,F,V){let $=F.fog,k=V.geometry,W=y.isMeshStandardMaterial?F.environment:null,X=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),ne=X&&X.mapping===ka?X.image.height:null,ce=g[y.type];y.precision!==null&&(u=s.getMaxPrecision(y.precision),u!==y.precision&&Qe("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let xe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ve=xe!==void 0?xe.length:0,Fe=0;k.morphAttributes.position!==void 0&&(Fe=1),k.morphAttributes.normal!==void 0&&(Fe=2),k.morphAttributes.color!==void 0&&(Fe=3);let Ge,Ze,nt,Q;if(ce){let ft=fi[ce];Ge=ft.vertexShader,Ze=ft.fragmentShader}else Ge=y.vertexShader,Ze=y.fragmentShader,c.update(y),nt=c.getVertexShaderID(y),Q=c.getFragmentShaderID(y);let re=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),ze=V.isInstancedMesh===!0,Pe=V.isBatchedMesh===!0,ut=!!y.map,gt=!!y.matcap,Je=!!X,ae=!!y.aoMap,fe=!!y.lightMap,le=!!y.bumpMap,Re=!!y.normalMap,I=!!y.displacementMap,Ee=!!y.emissiveMap,ge=!!y.metalnessMap,Ve=!!y.roughnessMap,de=y.anisotropy>0,C=y.clearcoat>0,_=y.dispersion>0,O=y.iridescence>0,ee=y.sheen>0,se=y.transmission>0,Y=de&&!!y.anisotropyMap,be=C&&!!y.clearcoatMap,he=C&&!!y.clearcoatNormalMap,ye=C&&!!y.clearcoatRoughnessMap,$e=O&&!!y.iridescenceMap,ue=O&&!!y.iridescenceThicknessMap,Te=ee&&!!y.sheenColorMap,Be=ee&&!!y.sheenRoughnessMap,He=!!y.specularMap,_e=!!y.specularColorMap,tt=!!y.specularIntensityMap,B=se&&!!y.transmissionMap,we=se&&!!y.thicknessMap,pe=!!y.gradientMap,Ue=!!y.alphaMap,me=y.alphaTest>0,oe=!!y.alphaHash,Ae=!!y.extensions,je=jn;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(je=i.toneMapping);let vt={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:Ge,fragmentShader:Ze,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:Q,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Pe,batchingColor:Pe&&V._colorsTexture!==null,instancing:ze,instancingColor:ze&&V.instanceColor!==null,instancingMorph:ze&&V.morphTexture!==null,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:us,alphaToCoverage:!!y.alphaToCoverage,map:ut,matcap:gt,envMap:Je,envMapMode:Je&&X.mapping,envMapCubeUVHeight:ne,aoMap:ae,lightMap:fe,bumpMap:le,normalMap:Re,displacementMap:I,emissiveMap:Ee,normalMapObjectSpace:Re&&y.normalMapType===Yf,normalMapTangentSpace:Re&&y.normalMapType===Tc,metalnessMap:ge,roughnessMap:Ve,anisotropy:de,anisotropyMap:Y,clearcoat:C,clearcoatMap:be,clearcoatNormalMap:he,clearcoatRoughnessMap:ye,dispersion:_,iridescence:O,iridescenceMap:$e,iridescenceThicknessMap:ue,sheen:ee,sheenColorMap:Te,sheenRoughnessMap:Be,specularMap:He,specularColorMap:_e,specularIntensityMap:tt,transmission:se,transmissionMap:B,thicknessMap:we,gradientMap:pe,opaque:y.transparent===!1&&y.blending===cs&&y.alphaToCoverage===!1,alphaMap:Ue,alphaTest:me,alphaHash:oe,combine:y.combine,mapUv:ut&&x(y.map.channel),aoMapUv:ae&&x(y.aoMap.channel),lightMapUv:fe&&x(y.lightMap.channel),bumpMapUv:le&&x(y.bumpMap.channel),normalMapUv:Re&&x(y.normalMap.channel),displacementMapUv:I&&x(y.displacementMap.channel),emissiveMapUv:Ee&&x(y.emissiveMap.channel),metalnessMapUv:ge&&x(y.metalnessMap.channel),roughnessMapUv:Ve&&x(y.roughnessMap.channel),anisotropyMapUv:Y&&x(y.anisotropyMap.channel),clearcoatMapUv:be&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(y.sheenRoughnessMap.channel),specularMapUv:He&&x(y.specularMap.channel),specularColorMapUv:_e&&x(y.specularColorMap.channel),specularIntensityMapUv:tt&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:we&&x(y.thicknessMap.channel),alphaMapUv:Ue&&x(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Re||de),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!k.attributes.uv&&(ut||Ue),fog:!!$,useFog:y.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Me,skinning:V.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Fe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:ut&&y.map.isVideoTexture===!0&&pt.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:Ee&&y.emissiveMap.isVideoTexture===!0&&pt.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Kt,flipSided:y.side===rn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ae&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&y.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let U in y.defines)E.push(U),E.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(S(E,y),M(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function S(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function b(y){let E=g[y.type],U;if(E){let F=fi[E];U=un.clone(F.uniforms)}else U=y.uniforms;return U}function w(y,E){let U=f.get(E);return U!==void 0?++U.usedTimes:(U=new y_(i,E,y,r),h.push(U),f.set(E,U)),U}function R(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),f.delete(y.cacheKey),y.destroy()}}function P(y){c.remove(y)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:w,releaseProgram:R,releaseShaderCache:P,programs:h,dispose:N}}function S_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function E_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,d,u,g,x,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function o(f,d,u,g,x,m){let p=a(f,d,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function c(f,d,u,g,x,m){let p=a(f,d,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function l(f,d){t.length>1&&t.sort(f||E_),n.length>1&&n.sort(d||Ad),s.length>1&&s.sort(d||Ad)}function h(){for(let f=e,d=i.length;f<d;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function T_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Rd,i.set(n,[a])):s>=r.length?(a=new Rd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function w_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Se};break;case"SpotLight":t={position:new D,direction:new D,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function A_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var R_=0;function C_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P_(i){let e=new w_,t=A_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new it,a=new it;function o(l){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,S=0,M=0,b=0,w=0,R=0,P=0;l.sort(C_);for(let y=0,E=l.length;y<E;y++){let U=l[y],F=U.color,V=U.intensity,$=U.distance,k=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ts?k=U.shadow.map.texture:k=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=F.r*V,f+=F.g*V,d+=F.b*V;else if(U.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(U.sh.coefficients[W],V);P++}else if(U.isDirectionalLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let X=U.shadow,ne=t.get(U);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,n.directionalShadow[u]=ne,n.directionalShadowMap[u]=k,n.directionalShadowMatrix[u]=U.shadow.matrix,S++}n.directional[u]=W,u++}else if(U.isSpotLight){let W=e.get(U);W.position.setFromMatrixPosition(U.matrixWorld),W.color.copy(F).multiplyScalar(V),W.distance=$,W.coneCos=Math.cos(U.angle),W.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),W.decay=U.decay,n.spot[x]=W;let X=U.shadow;if(U.map&&(n.spotLightMap[w]=U.map,w++,X.updateMatrices(U),U.castShadow&&R++),n.spotLightMatrix[x]=X.matrix,U.castShadow){let ne=t.get(U);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,n.spotShadow[x]=ne,n.spotShadowMap[x]=k,b++}x++}else if(U.isRectAreaLight){let W=e.get(U);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(U.width*.5,0,0),W.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=W,m++}else if(U.isPointLight){let W=e.get(U);if(W.color.copy(U.color).multiplyScalar(U.intensity),W.distance=U.distance,W.decay=U.decay,U.castShadow){let X=U.shadow,ne=t.get(U);ne.shadowIntensity=X.intensity,ne.shadowBias=X.bias,ne.shadowNormalBias=X.normalBias,ne.shadowRadius=X.radius,ne.shadowMapSize=X.mapSize,ne.shadowCameraNear=X.camera.near,ne.shadowCameraFar=X.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=U.shadow.matrix,M++}n.point[g]=W,g++}else if(U.isHemisphereLight){let W=e.get(U);W.skyColor.copy(U.color).multiplyScalar(V),W.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Le.LTC_FLOAT_1,n.rectAreaLTC2=Le.LTC_FLOAT_2):(n.rectAreaLTC1=Le.LTC_HALF_1,n.rectAreaLTC2=Le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==u||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==S||N.numPointShadows!==M||N.numSpotShadows!==b||N.numSpotMaps!==w||N.numLightProbes!==P)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=P,N.directionalLength=u,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=S,N.numPointShadows=M,N.numSpotShadows=b,N.numSpotMaps=w,N.numLightProbes=P,n.version=R_++)}function c(l,h){let f=0,d=0,u=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){let M=l[p];if(M.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(M.isSpotLight){let b=n.spot[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(M.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let b=n.hemi[x];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Cd(i){let e=new P_(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function I_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cd(i),e.set(s,[o])):r>=a.length?(o=new Cd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L_=`uniform sampler2D shadow_pass;
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
}`,U_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],N_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Pd=new it,Ja=new D,xu=new D;function F_(i,e,t){let n=new dr,s=new ie,r=new ie,a=new Ct,o=new xl,c=new vl,l={},h=t.maxTextureSize,f={[Ai]:rn,[rn]:Ai,[Kt]:Kt},d=new st({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:D_,fragmentShader:L_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ms;let p=this.type;this.render=function(R,P,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===Rf&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Ms);let y=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Yt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==this.type;V&&P.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(k=>k.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,k=R.length;$<k;$++){let W=R[$],X=W.shadow;if(X===void 0){Qe("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ne=X.getFrameExtents();if(s.multiply(ne),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,X.mapSize.y=r.y)),X.map===null||V===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===yr){if(W.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Ot(s.x,s.y,{format:Ts,type:Zt,minFilter:hn,magFilter:hn,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new li(s.x,s.y,Wn),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=si,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt}else{W.isPointLight?(X.map=new ca(s.x),X.map.depthTexture=new hl(s.x,Qn)):(X.map=new Ot(s.x,s.y),X.map.depthTexture=new li(s.x,s.y,Qn)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=si;let xe=i.state.buffers.depth.getReversed();this.type===Ms?(X.map.depthTexture.compareFunction=xe?Ac:wc,X.map.depthTexture.minFilter=hn,X.map.depthTexture.magFilter=hn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt)}X.camera.updateProjectionMatrix()}let ce=X.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ce;xe++){if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(X.map),i.clear());let ve=X.getViewport(xe);a.set(r.x*ve.x,r.y*ve.y,r.x*ve.z,r.y*ve.w),F.viewport(a)}if(W.isPointLight){let ve=X.camera,Fe=X.matrix,Ge=W.distance||ve.far;Ge!==ve.far&&(ve.far=Ge,ve.updateProjectionMatrix()),Ja.setFromMatrixPosition(W.matrixWorld),ve.position.copy(Ja),xu.copy(ve.position),xu.add(U_[xe]),ve.up.copy(N_[xe]),ve.lookAt(xu),ve.updateMatrixWorld(),Fe.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Pd.multiplyMatrices(ve.projectionMatrix,ve.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Pd,ve.coordinateSystem,ve.reversedDepth)}else X.updateMatrices(W);n=X.getFrustum(),b(P,N,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===yr&&S(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,U)};function S(R,P){let N=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ot(s.x,s.y,{format:Ts,type:Zt})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(P,null,N,d,x,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(P,null,N,u,x,null)}function M(R,P,N,y){let E=null,U=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)E=U;else if(E=N.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=E.uuid,V=P.uuid,$=l[F];$===void 0&&($={},l[F]=$);let k=$[V];k===void 0&&(k=E.clone(),$[V]=k,P.addEventListener("dispose",w)),E=k}if(E.visible=P.visible,E.wireframe=P.wireframe,y===yr?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:f[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=N}return E}function b(R,P,N,y,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===yr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let V=e.update(R),$=R.material;if(Array.isArray($)){let k=V.groups;for(let W=0,X=k.length;W<X;W++){let ne=k[W],ce=$[ne.materialIndex];if(ce&&ce.visible){let xe=M(R,ce,y,E);R.onBeforeShadow(i,R,P,N,V,xe,ne),i.renderBufferDirect(N,null,V,xe,R,ne),R.onAfterShadow(i,R,P,N,V,xe,ne)}}}else if($.visible){let k=M(R,$,y,E);R.onBeforeShadow(i,R,P,N,V,k,null),i.renderBufferDirect(N,null,V,k,R,null),R.onAfterShadow(i,R,P,N,V,k,null)}}let F=R.children;for(let V=0,$=F.length;V<$;V++)b(F[V],P,N,y,E)}function w(R){R.target.removeEventListener("dispose",w);for(let N in l){let y=l[N],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}var B_={[Pl]:Il,[Dl]:Nl,[Ll]:Fl,[hs]:Ul,[Il]:Pl,[Nl]:Dl,[Fl]:Ll,[Ul]:hs};function O_(i,e){function t(){let B=!1,we=new Ct,pe=null,Ue=new Ct(0,0,0,0);return{setMask:function(me){pe!==me&&!B&&(i.colorMask(me,me,me,me),pe=me)},setLocked:function(me){B=me},setClear:function(me,oe,Ae,je,vt){vt===!0&&(me*=je,oe*=je,Ae*=je),we.set(me,oe,Ae,je),Ue.equals(we)===!1&&(i.clearColor(me,oe,Ae,je),Ue.copy(we))},reset:function(){B=!1,pe=null,Ue.set(-1,0,0,0)}}}function n(){let B=!1,we=!1,pe=null,Ue=null,me=null;return{setReversed:function(oe){if(we!==oe){let Ae=e.get("EXT_clip_control");oe?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),we=oe;let je=me;me=null,this.setClear(je)}},getReversed:function(){return we},setTest:function(oe){oe?re(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(oe){pe!==oe&&!B&&(i.depthMask(oe),pe=oe)},setFunc:function(oe){if(we&&(oe=B_[oe]),Ue!==oe){switch(oe){case Pl:i.depthFunc(i.NEVER);break;case Il:i.depthFunc(i.ALWAYS);break;case Dl:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Ll:i.depthFunc(i.EQUAL);break;case Ul:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Fl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=oe}},setLocked:function(oe){B=oe},setClear:function(oe){me!==oe&&(we&&(oe=1-oe),i.clearDepth(oe),me=oe)},reset:function(){B=!1,pe=null,Ue=null,me=null,we=!1}}}function s(){let B=!1,we=null,pe=null,Ue=null,me=null,oe=null,Ae=null,je=null,vt=null;return{setTest:function(ft){B||(ft?re(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(ft){we!==ft&&!B&&(i.stencilMask(ft),we=ft)},setFunc:function(ft,An,Pn){(pe!==ft||Ue!==An||me!==Pn)&&(i.stencilFunc(ft,An,Pn),pe=ft,Ue=An,me=Pn)},setOp:function(ft,An,Pn){(oe!==ft||Ae!==An||je!==Pn)&&(i.stencilOp(ft,An,Pn),oe=ft,Ae=An,je=Pn)},setLocked:function(ft){B=ft},setClear:function(ft){vt!==ft&&(i.clearStencil(ft),vt=ft)},reset:function(){B=!1,we=null,pe=null,Ue=null,me=null,oe=null,Ae=null,je=null,vt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,S=null,M=null,b=null,w=null,R=null,P=new Se(0,0,0),N=0,y=!1,E=null,U=null,F=null,V=null,$=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ne)[1]),W=X>=1):ne.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),W=X>=2);let ce=null,xe={},ve=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Ge=new Ct().fromArray(ve),Ze=new Ct().fromArray(Fe);function nt(B,we,pe,Ue){let me=new Uint8Array(4),oe=i.createTexture();i.bindTexture(B,oe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<pe;Ae++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(we,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(we+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return oe}let Q={};Q[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),re(i.DEPTH_TEST),a.setFunc(hs),le(!1),Re(Yh),re(i.CULL_FACE),ae(Yt);function re(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Me(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ze(B,we){return f[B]!==we?(i.bindFramebuffer(B,we),f[B]=we,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=we),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=we),!0):!1}function Pe(B,we){let pe=u,Ue=!1;if(B){pe=d.get(we),pe===void 0&&(pe=[],d.set(we,pe));let me=B.textures;if(pe.length!==me.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ae=me.length;oe<Ae;oe++)pe[oe]=i.COLOR_ATTACHMENT0+oe;pe.length=me.length,Ue=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(pe)}function ut(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let gt={[Un]:i.FUNC_ADD,[Cf]:i.FUNC_SUBTRACT,[Pf]:i.FUNC_REVERSE_SUBTRACT};gt[If]=i.MIN,gt[Df]=i.MAX;let Je={[bs]:i.ZERO,[Lf]:i.ONE,[Uf]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[Of]:i.SRC_ALPHA_SATURATE,[Na]:i.DST_COLOR,[Ua]:i.DST_ALPHA,[Nf]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Bf]:i.ONE_MINUS_DST_COLOR,[Ff]:i.ONE_MINUS_DST_ALPHA,[zf]:i.CONSTANT_COLOR,[Hf]:i.ONE_MINUS_CONSTANT_COLOR,[Vf]:i.CONSTANT_ALPHA,[kf]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(B,we,pe,Ue,me,oe,Ae,je,vt,ft){if(B===Yt){x===!0&&(Me(i.BLEND),x=!1);return}if(x===!1&&(re(i.BLEND),x=!0),B!==Cl){if(B!==m||ft!==y){if((p!==Un||b!==Un)&&(i.blendEquation(i.FUNC_ADD),p=Un,b=Un),ft)switch(B){case cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFunc(i.ONE,i.ONE);break;case Zh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case $h:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:et("WebGLState: Invalid blending: ",B);break}else switch(B){case cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Zh:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",B);break}S=null,M=null,w=null,R=null,P.set(0,0,0),N=0,m=B,y=ft}return}me=me||we,oe=oe||pe,Ae=Ae||Ue,(we!==p||me!==b)&&(i.blendEquationSeparate(gt[we],gt[me]),p=we,b=me),(pe!==S||Ue!==M||oe!==w||Ae!==R)&&(i.blendFuncSeparate(Je[pe],Je[Ue],Je[oe],Je[Ae]),S=pe,M=Ue,w=oe,R=Ae),(je.equals(P)===!1||vt!==N)&&(i.blendColor(je.r,je.g,je.b,vt),P.copy(je),N=vt),m=B,y=!1}function fe(B,we){B.side===Kt?Me(i.CULL_FACE):re(i.CULL_FACE);let pe=B.side===rn;we&&(pe=!pe),le(pe),B.blending===cs&&B.transparent===!1?ae(Yt):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ue=B.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function Re(B){B!==wf?(re(i.CULL_FACE),B!==U&&(B===Yh?i.cullFace(i.BACK):B===Af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),U=B}function I(B){B!==F&&(W&&i.lineWidth(B),F=B)}function Ee(B,we,pe){B?(re(i.POLYGON_OFFSET_FILL),(V!==we||$!==pe)&&(i.polygonOffset(we,pe),V=we,$=pe)):Me(i.POLYGON_OFFSET_FILL)}function ge(B){B?re(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function Ve(B){B===void 0&&(B=i.TEXTURE0+k-1),ce!==B&&(i.activeTexture(B),ce=B)}function de(B,we,pe){pe===void 0&&(ce===null?pe=i.TEXTURE0+k-1:pe=ce);let Ue=xe[pe];Ue===void 0&&(Ue={type:void 0,texture:void 0},xe[pe]=Ue),(Ue.type!==B||Ue.texture!==we)&&(ce!==pe&&(i.activeTexture(pe),ce=pe),i.bindTexture(B,we||Q[B]),Ue.type=B,Ue.texture=we)}function C(){let B=xe[ce];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function ee(){try{i.texSubImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function se(){try{i.texSubImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function he(){try{i.texStorage2D(...arguments)}catch(B){et("WebGLState:",B)}}function ye(){try{i.texStorage3D(...arguments)}catch(B){et("WebGLState:",B)}}function $e(){try{i.texImage2D(...arguments)}catch(B){et("WebGLState:",B)}}function ue(){try{i.texImage3D(...arguments)}catch(B){et("WebGLState:",B)}}function Te(B){Ge.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ge.copy(B))}function Be(B){Ze.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ze.copy(B))}function He(B,we){let pe=l.get(we);pe===void 0&&(pe=new WeakMap,l.set(we,pe));let Ue=pe.get(B);Ue===void 0&&(Ue=i.getUniformBlockIndex(we,B.name),pe.set(B,Ue))}function _e(B,we){let Ue=l.get(we).get(B);c.get(we)!==Ue&&(i.uniformBlockBinding(we,Ue,B.__bindingPointIndex),c.set(we,Ue))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,xe={},f={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,S=null,M=null,b=null,w=null,R=null,P=new Se(0,0,0),N=0,y=!1,E=null,U=null,F=null,V=null,$=null,Ge.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:re,disable:Me,bindFramebuffer:ze,drawBuffers:Pe,useProgram:ut,setBlending:ae,setMaterial:fe,setFlipSided:le,setCullFace:Re,setLineWidth:I,setPolygonOffset:Ee,setScissorTest:ge,activeTexture:Ve,bindTexture:de,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:$e,texImage3D:ue,updateUBOMapping:He,uniformBlockBinding:_e,texStorage2D:he,texStorage3D:ye,texSubImage2D:ee,texSubImage3D:se,compressedTexSubImage2D:Y,compressedTexSubImage3D:be,scissor:Te,viewport:Be,reset:tt}}function z_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,f,d=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return u?new OffscreenCanvas(C,_):rr("canvas")}function x(C,_,O){let ee=1,se=de(C);if((se.width>O||se.height>O)&&(ee=O/Math.max(se.width,se.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Y=Math.floor(ee*se.width),be=Math.floor(ee*se.height);f===void 0&&(f=g(Y,be));let he=_?g(Y,be):f;return he.width=Y,he.height=be,he.getContext("2d").drawImage(C,0,0,Y,be),Qe("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Y+"x"+be+")."),he}else return"data"in C&&Qe("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(C,_,O,ee,se=!1){if(C!==null){if(i[C]!==void 0)return i[C];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=_;if(_===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let be=se?ea:pt.getTransfer(ee);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=be===yt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function b(C,_){let O;return C?_===null||_===Qn||_===Ki?O=i.DEPTH24_STENCIL8:_===Wn?O=i.DEPTH32F_STENCIL8:_===Mr&&(O=i.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Qn||_===Ki?O=i.DEPTH_COMPONENT24:_===Wn?O=i.DEPTH_COMPONENT32F:_===Mr&&(O=i.DEPTH_COMPONENT16),O}function w(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xt&&C.minFilter!==hn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){let _=C.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function P(C){let _=C.target;_.removeEventListener("dispose",P),E(_)}function N(C){let _=n.get(C);if(_.__webglInit===void 0)return;let O=C.source,ee=d.get(O);if(ee){let se=ee[_.__cacheKey];se.usedTimes--,se.usedTimes===0&&y(C),Object.keys(ee).length===0&&d.delete(O)}n.remove(C)}function y(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let O=C.source,ee=d.get(O);delete ee[_.__cacheKey],a.memory.textures--}function E(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(_.__webglFramebuffer[ee]))for(let se=0;se<_.__webglFramebuffer[ee].length;se++)i.deleteFramebuffer(_.__webglFramebuffer[ee][se]);else i.deleteFramebuffer(_.__webglFramebuffer[ee]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[ee])}else{if(Array.isArray(_.__webglFramebuffer))for(let ee=0;ee<_.__webglFramebuffer.length;ee++)i.deleteFramebuffer(_.__webglFramebuffer[ee]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let ee=0;ee<_.__webglColorRenderbuffer.length;ee++)_.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[ee]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=C.textures;for(let ee=0,se=O.length;ee<se;ee++){let Y=n.get(O[ee]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(O[ee])}n.remove(C)}let U=0;function F(){U=0}function V(){let C=U;return C>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),U+=1,C}function $(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function k(C,_){let O=n.get(C);if(C.isVideoTexture&&ge(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let ee=C.image;if(ee===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function W(C,_){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Q(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function X(C,_){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){Q(O,C,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ne(C,_){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){re(O,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let ce={[cn]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[jo]:i.MIRRORED_REPEAT},xe={[Xt]:i.NEAREST,[Xf]:i.NEAREST_MIPMAP_NEAREST,[Ga]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[zl]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},ve={[Zf]:i.NEVER,[Qf]:i.ALWAYS,[$f]:i.LESS,[wc]:i.LEQUAL,[Jf]:i.EQUAL,[Ac]:i.GEQUAL,[Kf]:i.GREATER,[jf]:i.NOTEQUAL};function Fe(C,_){if(_.type===Wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===hn||_.magFilter===zl||_.magFilter===Ga||_.magFilter===ci||_.minFilter===hn||_.minFilter===zl||_.minFilter===Ga||_.minFilter===ci)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ce[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ce[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ce[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xe[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ve[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Xt||_.minFilter!==Ga&&_.minFilter!==ci||_.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ge(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));let ee=_.source,se=d.get(ee);se===void 0&&(se={},d.set(ee,se));let Y=$(_);if(Y!==C.__cacheKey){se[Y]===void 0&&(se[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),se[Y].usedTimes++;let be=se[C.__cacheKey];be!==void 0&&(se[C.__cacheKey].usedTimes--,be.usedTimes===0&&y(_)),C.__cacheKey=Y,C.__webglTexture=se[Y].texture}return O}function Ze(C,_,O){return Math.floor(Math.floor(C/O)/_)}function nt(C,_,O,ee){let Y=C.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,ee,_.data);else{Y.sort((ue,Te)=>ue.start-Te.start);let be=0;for(let ue=1;ue<Y.length;ue++){let Te=Y[be],Be=Y[ue],He=Te.start+Te.count,_e=Ze(Be.start,_.width,4),tt=Ze(Te.start,_.width,4);Be.start<=He+1&&_e===tt&&Ze(Be.start+Be.count-1,_.width,4)===_e?Te.count=Math.max(Te.count,Be.start+Be.count-Te.start):(++be,Y[be]=Be)}Y.length=be+1;let he=i.getParameter(i.UNPACK_ROW_LENGTH),ye=i.getParameter(i.UNPACK_SKIP_PIXELS),$e=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ue=0,Te=Y.length;ue<Te;ue++){let Be=Y[ue],He=Math.floor(Be.start/4),_e=Math.ceil(Be.count/4),tt=He%_.width,B=Math.floor(He/_.width),we=_e,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,tt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,tt,B,we,pe,O,ee,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,$e)}}function Q(C,_,O){let ee=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(ee=i.TEXTURE_3D);let se=Ge(C,_),Y=_.source;t.bindTexture(ee,C.__webglTexture,i.TEXTURE0+O);let be=n.get(Y);if(Y.version!==be.__version||se===!0){t.activeTexture(i.TEXTURE0+O);let he=pt.getPrimaries(pt.workingColorSpace),ye=_.colorSpace===Di?null:pt.getPrimaries(_.colorSpace),$e=_.colorSpace===Di||he===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ue=x(_.image,!1,s.maxTextureSize);ue=Ve(_,ue);let Te=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),He=M(_.internalFormat,Te,Be,_.colorSpace,_.isVideoTexture);Fe(ee,_);let _e,tt=_.mipmaps,B=_.isVideoTexture!==!0,we=be.__version===void 0||se===!0,pe=Y.dataReady,Ue=w(_,ue);if(_.isDepthTexture)He=b(_.format===hi,_.type),we&&(B?t.texStorage2D(i.TEXTURE_2D,1,He,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,He,ue.width,ue.height,0,Te,Be,null));else if(_.isDataTexture)if(tt.length>0){B&&we&&t.texStorage2D(i.TEXTURE_2D,Ue,He,tt[0].width,tt[0].height);for(let me=0,oe=tt.length;me<oe;me++)_e=tt[me],B?pe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,_e.width,_e.height,Te,Be,_e.data):t.texImage2D(i.TEXTURE_2D,me,He,_e.width,_e.height,0,Te,Be,_e.data);_.generateMipmaps=!1}else B?(we&&t.texStorage2D(i.TEXTURE_2D,Ue,He,ue.width,ue.height),pe&&nt(_,ue,Te,Be)):t.texImage2D(i.TEXTURE_2D,0,He,ue.width,ue.height,0,Te,Be,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,He,tt[0].width,tt[0].height,ue.depth);for(let me=0,oe=tt.length;me<oe;me++)if(_e=tt[me],_.format!==Cn)if(Te!==null)if(B){if(pe)if(_.layerUpdates.size>0){let Ae=uu(_e.width,_e.height,_.format,_.type);for(let je of _.layerUpdates){let vt=_e.data.subarray(je*Ae/_e.data.BYTES_PER_ELEMENT,(je+1)*Ae/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,je,_e.width,_e.height,1,Te,vt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,_e.width,_e.height,ue.depth,Te,_e.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,He,_e.width,_e.height,ue.depth,0,_e.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,_e.width,_e.height,ue.depth,Te,Be,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,He,_e.width,_e.height,ue.depth,0,Te,Be,_e.data)}else{B&&we&&t.texStorage2D(i.TEXTURE_2D,Ue,He,tt[0].width,tt[0].height);for(let me=0,oe=tt.length;me<oe;me++)_e=tt[me],_.format!==Cn?Te!==null?B?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,_e.width,_e.height,Te,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,me,He,_e.width,_e.height,0,_e.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?pe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,_e.width,_e.height,Te,Be,_e.data):t.texImage2D(i.TEXTURE_2D,me,He,_e.width,_e.height,0,Te,Be,_e.data)}else if(_.isDataArrayTexture)if(B){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ue,He,ue.width,ue.height,ue.depth),pe)if(_.layerUpdates.size>0){let me=uu(ue.width,ue.height,_.format,_.type);for(let oe of _.layerUpdates){let Ae=ue.data.subarray(oe*me/ue.data.BYTES_PER_ELEMENT,(oe+1)*me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,ue.width,ue.height,1,Te,Be,Ae)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Te,Be,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ue.width,ue.height,ue.depth,0,Te,Be,ue.data);else if(_.isData3DTexture)B?(we&&t.texStorage3D(i.TEXTURE_3D,Ue,He,ue.width,ue.height,ue.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Te,Be,ue.data)):t.texImage3D(i.TEXTURE_3D,0,He,ue.width,ue.height,ue.depth,0,Te,Be,ue.data);else if(_.isFramebufferTexture){if(we)if(B)t.texStorage2D(i.TEXTURE_2D,Ue,He,ue.width,ue.height);else{let me=ue.width,oe=ue.height;for(let Ae=0;Ae<Ue;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,He,me,oe,0,Te,Be,null),me>>=1,oe>>=1}}else if(tt.length>0){if(B&&we){let me=de(tt[0]);t.texStorage2D(i.TEXTURE_2D,Ue,He,me.width,me.height)}for(let me=0,oe=tt.length;me<oe;me++)_e=tt[me],B?pe&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te,Be,_e):t.texImage2D(i.TEXTURE_2D,me,He,Te,Be,_e);_.generateMipmaps=!1}else if(B){if(we){let me=de(ue);t.texStorage2D(i.TEXTURE_2D,Ue,He,me.width,me.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Be,ue)}else t.texImage2D(i.TEXTURE_2D,0,He,Te,Be,ue);m(_)&&p(ee),be.__version=Y.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function re(C,_,O){if(_.image.length!==6)return;let ee=Ge(C,_),se=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let Y=n.get(se);if(se.version!==Y.__version||ee===!0){t.activeTexture(i.TEXTURE0+O);let be=pt.getPrimaries(pt.workingColorSpace),he=_.colorSpace===Di?null:pt.getPrimaries(_.colorSpace),ye=_.colorSpace===Di||be===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let $e=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let oe=0;oe<6;oe++)!$e&&!ue?Te[oe]=x(_.image[oe],!0,s.maxCubemapSize):Te[oe]=ue?_.image[oe].image:_.image[oe],Te[oe]=Ve(_,Te[oe]);let Be=Te[0],He=r.convert(_.format,_.colorSpace),_e=r.convert(_.type),tt=M(_.internalFormat,He,_e,_.colorSpace),B=_.isVideoTexture!==!0,we=Y.__version===void 0||ee===!0,pe=se.dataReady,Ue=w(_,Be);Fe(i.TEXTURE_CUBE_MAP,_);let me;if($e){B&&we&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,tt,Be.width,Be.height);for(let oe=0;oe<6;oe++){me=Te[oe].mipmaps;for(let Ae=0;Ae<me.length;Ae++){let je=me[Ae];_.format!==Cn?He!==null?B?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,0,0,je.width,je.height,He,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,tt,je.width,je.height,0,je.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,0,0,je.width,je.height,He,_e,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae,tt,je.width,je.height,0,He,_e,je.data)}}}else{if(me=_.mipmaps,B&&we){me.length>0&&Ue++;let oe=de(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,tt,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ue){B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Te[oe].width,Te[oe].height,He,_e,Te[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,Te[oe].width,Te[oe].height,0,He,_e,Te[oe].data);for(let Ae=0;Ae<me.length;Ae++){let vt=me[Ae].image[oe].image;B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,0,0,vt.width,vt.height,He,_e,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,tt,vt.width,vt.height,0,He,_e,vt.data)}}else{B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,He,_e,Te[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,tt,He,_e,Te[oe]);for(let Ae=0;Ae<me.length;Ae++){let je=me[Ae];B?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,0,0,He,_e,je.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ae+1,tt,He,_e,je.image[oe])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),Y.__version=se.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Me(C,_,O,ee,se,Y){let be=r.convert(O.format,O.colorSpace),he=r.convert(O.type),ye=M(O.internalFormat,be,he,O.colorSpace),$e=n.get(_),ue=n.get(O);if(ue.__renderTarget=_,!$e.__hasExternalTextures){let Te=Math.max(1,_.width>>Y),Be=Math.max(1,_.height>>Y);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Y,ye,Te,Be,_.depth,0,be,he,null):t.texImage2D(se,Y,ye,Te,Be,0,be,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Ee(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,se,ue.__webglTexture,0,I(_)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,se,ue.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(C,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let ee=_.depthTexture,se=ee&&ee.isDepthTexture?ee.type:null,Y=b(_.stencilBuffer,se),be=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ee(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),Y,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),Y,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,C)}else{let ee=_.textures;for(let se=0;se<ee.length;se++){let Y=ee[se],be=r.convert(Y.format,Y.colorSpace),he=r.convert(Y.type),ye=M(Y.internalFormat,be,he,Y.colorSpace);Ee(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(_),ye,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(_),ye,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ye,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(C,_,O){let ee=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let se=n.get(_.depthTexture);if(se.__renderTarget=_,(!se.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ee){if(se.__webglInit===void 0&&(se.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),se.__webglTexture===void 0){se.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_.depthTexture);let $e=r.convert(_.depthTexture.format),ue=r.convert(_.depthTexture.type),Te;_.depthTexture.format===si?Te=i.DEPTH_COMPONENT24:_.depthTexture.format===hi&&(Te=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Te,_.width,_.height,0,$e,ue,null)}}else k(_.depthTexture,0);let Y=se.__webglTexture,be=I(_),he=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,ye=_.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)Ee(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,he,Y,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,ye,he,Y,0);else if(_.depthTexture.format===hi)Ee(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,he,Y,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,ye,he,Y,0);else throw new Error("Unknown depthTexture format")}function ut(C){let _=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let ee=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),ee){let se=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,ee.removeEventListener("dispose",se)};ee.addEventListener("dispose",se),_.__depthDisposeCallback=se}_.__boundDepthTexture=ee}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let ee=0;ee<6;ee++)Pe(_.__webglFramebuffer[ee],C,ee);else{let ee=C.texture.mipmaps;ee&&ee.length>0?Pe(_.__webglFramebuffer[0],C,0):Pe(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[ee]),_.__webglDepthbuffer[ee]===void 0)_.__webglDepthbuffer[ee]=i.createRenderbuffer(),ze(_.__webglDepthbuffer[ee],C,!1);else{let se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Y)}}else{let ee=C.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ze(_.__webglDepthbuffer,C,!1);else{let se=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(C,_,O){let ee=n.get(C);_!==void 0&&Me(ee.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ut(C)}function Je(C){let _=C.texture,O=n.get(C),ee=n.get(_);C.addEventListener("dispose",P);let se=C.textures,Y=C.isWebGLCubeRenderTarget===!0,be=se.length>1;if(be||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=_.version,a.memory.textures++),Y){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let ye=0;ye<_.mipmaps.length;ye++)O.__webglFramebuffer[he][ye]=i.createFramebuffer()}else O.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)O.__webglFramebuffer[he]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(be)for(let he=0,ye=se.length;he<ye;he++){let $e=n.get(se[he]);$e.__webglTexture===void 0&&($e.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Ee(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<se.length;he++){let ye=se[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);let $e=r.convert(ye.format,ye.colorSpace),ue=r.convert(ye.type),Te=M(ye.internalFormat,$e,ue,ye.colorSpace,C.isXRRenderTarget===!0),Be=I(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Te,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Me(O.__webglFramebuffer[he][ye],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,ye);else Me(O.__webglFramebuffer[he],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,ye=se.length;he<ye;he++){let $e=se[he],ue=n.get($e),Te=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Te=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,ue.__webglTexture),Fe(Te,$e),Me(O.__webglFramebuffer,C,$e,i.COLOR_ATTACHMENT0+he,Te,0),m($e)&&p(Te)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,ee.__webglTexture),Fe(he,_),_.mipmaps&&_.mipmaps.length>0)for(let ye=0;ye<_.mipmaps.length;ye++)Me(O.__webglFramebuffer[ye],C,_,i.COLOR_ATTACHMENT0,he,ye);else Me(O.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}C.depthBuffer&&ut(C)}function ae(C){let _=C.textures;for(let O=0,ee=_.length;O<ee;O++){let se=_[O];if(m(se)){let Y=S(C),be=n.get(se).__webglTexture;t.bindTexture(Y,be),p(Y),t.unbindTexture()}}}let fe=[],le=[];function Re(C){if(C.samples>0){if(Ee(C)===!1){let _=C.textures,O=C.width,ee=C.height,se=i.COLOR_BUFFER_BIT,Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(C),he=_.length>1;if(he)for(let $e=0;$e<_.length;$e++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);let ye=C.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let $e=0;$e<_.length;$e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[$e]);let ue=n.get(_[$e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,O,ee,0,0,O,ee,se,i.NEAREST),c===!0&&(fe.length=0,le.length=0,fe.push(i.COLOR_ATTACHMENT0+$e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(fe.push(Y),le.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let $e=0;$e<_.length;$e++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.RENDERBUFFER,be.__webglColorRenderbuffer[$e]);let ue=n.get(_[$e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$e,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function I(C){return Math.min(s.maxSamples,C.samples)}function Ee(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ge(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function Ve(C,_){let O=C.colorSpace,ee=C.format,se=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==us&&O!==Di&&(pt.getTransfer(O)===yt?(ee!==Cn||se!==vn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",O)),_}function de(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=k,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=ne,this.rebindTextures=gt,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ee,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function H_(i,e){function t(n,s=Di){let r,a=pt.getTransfer(s);if(n===vn)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return i.BYTE;if(n===Qh)return i.SHORT;if(n===Mr)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Zt)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===Cn)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Wl)return i.RED_INTEGER;if(n===Ts)return i.RG;if(n===Xl)return i.RG_INTEGER;if(n===ql)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yl||n===Zl||n===$l||n===Jl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$l)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kl||n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Kl||n===jl)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ql)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ec)return r.COMPRESSED_R11_EAC;if(n===tc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===nc)return r.COMPRESSED_RG11_EAC;if(n===ic)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc||n===fc||n===dc||n===pc||n===mc||n===gc||n===xc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ac)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===cc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===_c||n===yc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mc||n===bc||n===Sc||n===Ec)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===bc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var V_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k_=`
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

}`,Tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new st({vertexShader:V_,fragmentShader:k_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends Ri{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,g=null,x=typeof XRWebGLBinding<"u",m=new Tu,p={},S=t.getContextAttributes(),M=null,b=null,w=[],R=[],P=new ie,N=null,y=new Vt;y.viewport=new Ct;let E=new Vt;E.viewport=new Ct;let U=[y,E],F=new Rl,V=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let re=w[Q];return re===void 0&&(re=new hr,w[Q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(Q){let re=w[Q];return re===void 0&&(re=new hr,w[Q]=re),re.getGripSpace()},this.getHand=function(Q){let re=w[Q];return re===void 0&&(re=new hr,w[Q]=re),re.getHandSpace()};function k(Q){let re=R.indexOf(Q.inputSource);if(re===-1)return;let Me=w[re];Me!==void 0&&(Me.update(Q.inputSource,Q.frame,l||a),Me.dispatchEvent({type:Q.type,data:Q.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",X);for(let Q=0;Q<w.length;Q++){let re=R[Q];re!==null&&(R[Q]=null,w[Q].disconnect(re))}V=null,$=null,m.reset();for(let Q in p)delete p[Q];e.setRenderTarget(M),u=null,d=null,f=null,s=null,b=null,nt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",X),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,ze=null,Pe=null;S.depth&&(Pe=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=S.stencil?hi:si,ze=S.stencil?Ki:Qn);let ut={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(ut),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Ot(d.textureWidth,d.textureHeight,{format:Cn,type:vn,depthTexture:new li(d.textureWidth,d.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Me={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Me),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ot(u.framebufferWidth,u.framebufferHeight,{format:Cn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),nt.setContext(s),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function X(Q){for(let re=0;re<Q.removed.length;re++){let Me=Q.removed[re],ze=R.indexOf(Me);ze>=0&&(R[ze]=null,w[ze].disconnect(Me))}for(let re=0;re<Q.added.length;re++){let Me=Q.added[re],ze=R.indexOf(Me);if(ze===-1){for(let ut=0;ut<w.length;ut++)if(ut>=R.length){R.push(Me),ze=ut;break}else if(R[ut]===null){R[ut]=Me,ze=ut;break}if(ze===-1)break}let Pe=w[ze];Pe&&Pe.connect(Me)}}let ne=new D,ce=new D;function xe(Q,re,Me){ne.setFromMatrixPosition(re.matrixWorld),ce.setFromMatrixPosition(Me.matrixWorld);let ze=ne.distanceTo(ce),Pe=re.projectionMatrix.elements,ut=Me.projectionMatrix.elements,gt=Pe[14]/(Pe[10]-1),Je=Pe[14]/(Pe[10]+1),ae=(Pe[9]+1)/Pe[5],fe=(Pe[9]-1)/Pe[5],le=(Pe[8]-1)/Pe[0],Re=(ut[8]+1)/ut[0],I=gt*le,Ee=gt*Re,ge=ze/(-le+Re),Ve=ge*-le;if(re.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ve),Q.translateZ(ge),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Pe[10]===-1)Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let de=gt+ge,C=Je+ge,_=I-Ve,O=Ee+(ze-Ve),ee=ae*Je/C*de,se=fe*Je/C*de;Q.projectionMatrix.makePerspective(_,O,ee,se,de,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ve(Q,re){re===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(re.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let re=Q.near,Me=Q.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),F.near=E.near=y.near=re,F.far=E.far=y.far=Me,(V!==F.near||$!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,$=F.far),F.layers.mask=Q.layers.mask|6,y.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;let ze=Q.parent,Pe=F.cameras;ve(F,ze);for(let ut=0;ut<Pe.length;ut++)ve(Pe[ut],ze);Pe.length===2?xe(F,y,E):F.projectionMatrix.copy(y.projectionMatrix),Fe(Q,F,ze)};function Fe(Q,re,Me){Me===null?Q.matrix.copy(re.matrixWorld):(Q.matrix.copy(Me.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(re.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(re.projectionMatrix),Q.projectionMatrixInverse.copy(re.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=fs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return p[Q]};let Ge=null;function Ze(Q,re){if(h=re.getViewerPose(l||a),g=re,h!==null){let Me=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let ze=!1;Me.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Je=0;Je<Me.length;Je++){let ae=Me[Je],fe=null;if(u!==null)fe=u.getViewport(ae);else{let Re=f.getViewSubImage(d,ae);fe=Re.viewport,Je===0&&(e.setRenderTargetTextures(b,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(b))}let le=U[Je];le===void 0&&(le=new Vt,le.layers.enable(Je),le.viewport=new Ct,U[Je]=le),le.matrix.fromArray(ae.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ae.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(fe.x,fe.y,fe.width,fe.height),Je===0&&(F.matrix.copy(le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(le)}let Pe=s.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Je=f.getDepthInformation(Me[0]);Je&&Je.isValid&&Je.texture&&m.init(Je,s.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Je=0;Je<Me.length;Je++){let ae=Me[Je].camera;if(ae){let fe=p[ae];fe||(fe=new pa,p[ae]=fe);let le=f.getCameraImage(ae);fe.sourceTexture=le}}}}for(let Me=0;Me<w.length;Me++){let ze=R[Me],Pe=w[Me];ze!==null&&Pe!==void 0&&Pe.update(ze,re,l||a)}Ge&&Ge(Q,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let nt=new Id;nt.setAnimationLoop(Ze),this.setAnimationLoop=function(Q){Ge=Q},this.dispose=function(){}}},Rs=new Nn,G_=new it;function W_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ou(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,M,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===rn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===rn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),M=S.envMap,b=S.envMapRotation;M&&(m.envMap.value=M,Rs.copy(b),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(G_.makeRotationFromEuler(Rs)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function X_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){let b=M.program;n.uniformBlockBinding(S,b)}function l(S,M){let b=s[S.id];b===void 0&&(g(S),b=h(S),s[S.id]=b,S.addEventListener("dispose",m));let w=M.program;n.updateUBOMapping(S,w);let R=e.render.frame;r[S.id]!==R&&(d(S),r[S.id]=R)}function h(S){let M=f();S.__bindingPointIndex=M;let b=i.createBuffer(),w=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let M=s[S.id],b=S.uniforms,w=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,P=b.length;R<P;R++){let N=Array.isArray(b[R])?b[R]:[b[R]];for(let y=0,E=N.length;y<E;y++){let U=N[y];if(u(U,R,y,w)===!0){let F=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],$=0;for(let k=0;k<V.length;k++){let W=V[k],X=x(W);typeof W=="number"||typeof W=="boolean"?(U.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+$,U.__data)):W.isMatrix3?(U.__data[0]=W.elements[0],U.__data[1]=W.elements[1],U.__data[2]=W.elements[2],U.__data[3]=0,U.__data[4]=W.elements[3],U.__data[5]=W.elements[4],U.__data[6]=W.elements[5],U.__data[7]=0,U.__data[8]=W.elements[6],U.__data[9]=W.elements[7],U.__data[10]=W.elements[8],U.__data[11]=0):(W.toArray(U.__data,$),$+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,M,b,w){let R=S.value,P=M+"_"+b;if(w[P]===void 0)return typeof R=="number"||typeof R=="boolean"?w[P]=R:w[P]=R.clone(),!0;{let N=w[P];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return w[P]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(S){let M=S.uniforms,b=0,w=16;for(let P=0,N=M.length;P<N;P++){let y=Array.isArray(M[P])?M[P]:[M[P]];for(let E=0,U=y.length;E<U;E++){let F=y[E],V=Array.isArray(F.value)?F.value:[F.value];for(let $=0,k=V.length;$<k;$++){let W=V[$],X=x(W),ne=b%w,ce=ne%X.boundary,xe=ne+ce;b+=ce,xe!==0&&w-xe<X.storage&&(b+=w-xe),F.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=b,b+=X.storage}}}let R=b%w;return R>0&&(b+=w-R),S.__size=b,S.__cache={},this}function x(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",S),M}function m(S){let M=S.target;M.removeEventListener("dispose",m);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function Y_(){return ui===null&&(ui=new Ci(q_,16,16,Ts,Zt),ui.name="DFG_LUT",ui.minFilter=hn,ui.magFilter=hn,ui.wrapS=ni,ui.wrapT=ni,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Ic=class{constructor(e={}){let{canvas:t=ed(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=u,m=new Set([ql,Xl,Wl]),p=new Set([vn,Qn,Mr,Ki,Vl,kl]),S=new Uint32Array(4),M=new Int32Array(4),b=null,w=null,R=[],P=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=Jt;let U=0,F=0,V=null,$=-1,k=null,W=new Ct,X=new Ct,ne=null,ce=new Se(0),xe=0,ve=t.width,Fe=t.height,Ge=1,Ze=null,nt=null,Q=new Ct(0,0,ve,Fe),re=new Ct(0,0,ve,Fe),Me=!1,ze=new dr,Pe=!1,ut=!1,gt=new it,Je=new D,ae=new Ct,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function Re(){return V===null?Ge:1}let I=n;function Ee(T,G){return t.getContext(T,G)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",vt,!1),t.addEventListener("webglcontextcreationerror",ft,!1),I===null){let G="webgl2";if(I=Ee(G,T),I===null)throw Ee(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw et("WebGLRenderer: "+T.message),T}let ge,Ve,de,C,_,O,ee,se,Y,be,he,ye,$e,ue,Te,Be,He,_e,tt,B,we,pe,Ue,me;function oe(){ge=new ev(I),ge.init(),pe=new H_(I,ge),Ve=new Xx(I,ge,e,pe),de=new O_(I,ge),Ve.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),C=new iv(I),_=new S_,O=new z_(I,ge,de,_,Ve,pe,C),ee=new Yx(y),se=new Qx(y),Y=new o0(I),Ue=new Gx(I,Y),be=new tv(I,Y,C,Ue),he=new rv(I,be,Y,C),tt=new sv(I,Ve,O),Be=new qx(_),ye=new b_(y,ee,se,ge,Ve,Ue,Be),$e=new W_(y,_),ue=new T_,Te=new I_(ge),_e=new kx(y,ee,se,de,he,g,c),He=new F_(y,he,Ve),me=new X_(I,C,Ve,de),B=new Wx(I,ge,C),we=new nv(I,ge,C),C.programs=ye.programs,y.capabilities=Ve,y.extensions=ge,y.properties=_,y.renderLists=ue,y.shadowMap=He,y.state=de,y.info=C}oe(),x!==vn&&(N=new ov(x,t.width,t.height,s,r));let Ae=new wu(y,I);this.xr=Ae,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(T){T!==void 0&&(Ge=T,this.setSize(ve,Fe,!1))},this.getSize=function(T){return T.set(ve,Fe)},this.setSize=function(T,G,K=!0){if(Ae.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=T,Fe=G,t.width=Math.floor(T*Ge),t.height=Math.floor(G*Ge),K===!0&&(t.style.width=T+"px",t.style.height=G+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(ve*Ge,Fe*Ge).floor()},this.setDrawingBufferSize=function(T,G,K){ve=T,Fe=G,Ge=K,t.width=Math.floor(T*K),t.height=Math.floor(G*K),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(x===vn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(W)},this.getViewport=function(T){return T.copy(Q)},this.setViewport=function(T,G,K,J){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,G,K,J),de.viewport(W.copy(Q).multiplyScalar(Ge).round())},this.getScissor=function(T){return T.copy(re)},this.setScissor=function(T,G,K,J){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,G,K,J),de.scissor(X.copy(re).multiplyScalar(Ge).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(T){de.setScissorTest(Me=T)},this.setOpaqueSort=function(T){Ze=T},this.setTransparentSort=function(T){nt=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,K=!0){let J=0;if(T){let q=!1;if(V!==null){let Ce=V.texture.format;q=m.has(Ce)}if(q){let Ce=V.texture.type,Ne=p.has(Ce),Ie=_e.getClearColor(),Oe=_e.getClearAlpha(),ke=Ie.r,Ke=Ie.g,Ye=Ie.b;Ne?(S[0]=ke,S[1]=Ke,S[2]=Ye,S[3]=Oe,I.clearBufferuiv(I.COLOR,0,S)):(M[0]=ke,M[1]=Ke,M[2]=Ye,M[3]=Oe,I.clearBufferiv(I.COLOR,0,M))}else J|=I.COLOR_BUFFER_BIT}G&&(J|=I.DEPTH_BUFFER_BIT),K&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",vt,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),_e.dispose(),ue.dispose(),Te.dispose(),_.dispose(),ee.dispose(),se.dispose(),he.dispose(),Ue.dispose(),me.dispose(),ye.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",ts),Ae.removeEventListener("sessionend",Ls),mi.stop()};function je(T){T.preventDefault(),na("WebGLRenderer: Context Lost."),E=!0}function vt(){na("WebGLRenderer: Context Restored."),E=!1;let T=C.autoReset,G=He.enabled,K=He.autoUpdate,J=He.needsUpdate,q=He.type;oe(),C.autoReset=T,He.enabled=G,He.autoUpdate=K,He.needsUpdate=J,He.type=q}function ft(T){et("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function An(T){let G=T.target;G.removeEventListener("dispose",An),Pn(G)}function Pn(T){Ui(T),_.remove(T)}function Ui(T){let G=_.get(T).programs;G!==void 0&&(G.forEach(function(K){ye.releaseProgram(K)}),T.isShaderMaterial&&ye.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,K,J,q,Ce){G===null&&(G=fe);let Ne=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Dr(T,G,K,J,q);de.setMaterial(J,Ne);let Oe=K.index,ke=1;if(J.wireframe===!0){if(Oe=be.getWireframeAttribute(K),Oe===void 0)return;ke=2}let Ke=K.drawRange,Ye=K.attributes.position,rt=Ke.start*ke,bt=(Ke.start+Ke.count)*ke;Ce!==null&&(rt=Math.max(rt,Ce.start*ke),bt=Math.min(bt,(Ce.start+Ce.count)*ke)),Oe!==null?(rt=Math.max(rt,0),bt=Math.min(bt,Oe.count)):Ye!=null&&(rt=Math.max(rt,0),bt=Math.min(bt,Ye.count));let Lt=bt-rt;if(Lt<0||Lt===1/0)return;Ue.setup(q,J,Ie,K,Oe);let Dt,Et=B;if(Oe!==null&&(Dt=Y.get(Oe),Et=we,Et.setIndex(Dt)),q.isMesh)J.wireframe===!0?(de.setLineWidth(J.wireframeLinewidth*Re()),Et.setMode(I.LINES)):Et.setMode(I.TRIANGLES);else if(q.isLine){let We=J.linewidth;We===void 0&&(We=1),de.setLineWidth(We*Re()),q.isLineSegments?Et.setMode(I.LINES):q.isLineLoop?Et.setMode(I.LINE_LOOP):Et.setMode(I.LINE_STRIP)}else q.isPoints?Et.setMode(I.POINTS):q.isSprite&&Et.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)or("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))Et.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let We=q._multiDrawStarts,_t=q._multiDrawCounts,xt=q._multiDrawCount,bn=Oe?Y.get(Oe).bytesPerElement:1,xi=_.get(J).currentProgram.getUniforms();for(let fn=0;fn<xt;fn++)xi.setValue(I,"_gl_DrawID",fn),Et.render(We[fn]/bn,_t[fn])}else if(q.isInstancedMesh)Et.renderInstances(rt,Lt,q.count);else if(K.isInstancedBufferGeometry){let We=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,_t=Math.min(K.instanceCount,We);Et.renderInstances(rt,Lt,_t)}else Et.render(rt,Lt)};function oo(T,G,K){T.transparent===!0&&T.side===Kt&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,gi(T,G,K),T.side=Ai,T.needsUpdate=!0,gi(T,G,K),T.side=Kt):gi(T,G,K)}this.compile=function(T,G,K=null){K===null&&(K=T),w=Te.get(K),w.init(G),P.push(w),K.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),T!==K&&T.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(w.pushLight(q),q.castShadow&&w.pushShadow(q))}),w.setupLights();let J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ce=q.material;if(Ce)if(Array.isArray(Ce))for(let Ne=0;Ne<Ce.length;Ne++){let Ie=Ce[Ne];oo(Ie,K,q),J.add(Ie)}else oo(Ce,K,q),J.add(Ce)}),w=P.pop(),J},this.compileAsync=function(T,G,K=null){let J=this.compile(T,G,K);return new Promise(q=>{function Ce(){if(J.forEach(function(Ne){_.get(Ne).currentProgram.isReady()&&J.delete(Ne)}),J.size===0){q(T);return}setTimeout(Ce,10)}ge.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let Rr=null;function Ni(T){Rr&&Rr(T)}function ts(){mi.stop()}function Ls(){mi.start()}let mi=new Id;mi.setAnimationLoop(Ni),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(T){Rr=T,Ae.setAnimationLoop(T),T===null?mi.stop():mi.start()},Ae.addEventListener("sessionstart",ts),Ae.addEventListener("sessionend",Ls),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let K=Ae.enabled===!0&&Ae.isPresenting===!0,J=N!==null&&(V===null||K)&&N.begin(y,V);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(G),G=Ae.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,G,V),w=Te.get(T,P.length),w.init(G),P.push(w),gt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ze.setFromProjectionMatrix(gt,Jn,G.reversedDepth),ut=this.localClippingEnabled,Pe=Be.init(this.clippingPlanes,ut),b=ue.get(T,R.length),b.init(),R.push(b),Ae.enabled===!0&&Ae.isPresenting===!0){let Ne=y.xr.getDepthSensingMesh();Ne!==null&&Cr(Ne,G,-1/0,y.sortObjects)}Cr(T,G,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(Ze,nt),le=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,le&&_e.addToRenderList(b,T),this.info.render.frame++,Pe===!0&&Be.beginShadows();let q=w.state.shadowsArray;if(He.render(q,T,G),Pe===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(J&&N.hasRenderPass())===!1){let Ne=b.opaque,Ie=b.transmissive;if(w.setupLights(),G.isArrayCamera){let Oe=G.cameras;if(Ie.length>0)for(let ke=0,Ke=Oe.length;ke<Ke;ke++){let Ye=Oe[ke];Us(Ne,Ie,T,Ye)}le&&_e.render(T);for(let ke=0,Ke=Oe.length;ke<Ke;ke++){let Ye=Oe[ke];Pr(b,T,Ye,Ye.viewport)}}else Ie.length>0&&Us(Ne,Ie,T,G),le&&_e.render(T),Pr(b,T,G)}V!==null&&F===0&&(O.updateMultisampleRenderTarget(V),O.updateRenderTargetMipmap(V)),J&&N.end(y),T.isScene===!0&&T.onAfterRender(y,T,G),Ue.resetDefaultState(),$=-1,k=null,P.pop(),P.length>0?(w=P[P.length-1],Pe===!0&&Be.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?b=R[R.length-1]:b=null};function Cr(T,G,K,J){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){J&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(gt);let Ne=he.update(T),Ie=T.material;Ie.visible&&b.push(T,Ne,Ie,K,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){let Ne=he.update(T),Ie=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ae.copy(T.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ae.copy(Ne.boundingSphere.center)),ae.applyMatrix4(T.matrixWorld).applyMatrix4(gt)),Array.isArray(Ie)){let Oe=Ne.groups;for(let ke=0,Ke=Oe.length;ke<Ke;ke++){let Ye=Oe[ke],rt=Ie[Ye.materialIndex];rt&&rt.visible&&b.push(T,Ne,rt,K,ae.z,Ye)}}else Ie.visible&&b.push(T,Ne,Ie,K,ae.z,null)}}let Ce=T.children;for(let Ne=0,Ie=Ce.length;Ne<Ie;Ne++)Cr(Ce[Ne],G,K,J)}function Pr(T,G,K,J){let{opaque:q,transmissive:Ce,transparent:Ne}=T;w.setupLightsView(K),Pe===!0&&Be.setGlobalState(y.clippingPlanes,K),J&&de.viewport(W.copy(J)),q.length>0&&Fi(q,G,K),Ce.length>0&&Fi(Ce,G,K),Ne.length>0&&Fi(Ne,G,K),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Us(T,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let rt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Ot(1,1,{generateMipmaps:!0,type:rt?Zt:vn,minFilter:ci,samples:Ve.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ce=w.state.transmissionRenderTarget[J.id],Ne=J.viewport||W;Ce.setSize(Ne.z*y.transmissionResolutionScale,Ne.w*y.transmissionResolutionScale);let Ie=y.getRenderTarget(),Oe=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(Ce),y.getClearColor(ce),xe=y.getClearAlpha(),xe<1&&y.setClearColor(16777215,.5),y.clear(),le&&_e.render(K);let Ke=y.toneMapping;y.toneMapping=jn;let Ye=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),Pe===!0&&Be.setGlobalState(y.clippingPlanes,J),Fi(T,K,J),O.updateMultisampleRenderTarget(Ce),O.updateRenderTargetMipmap(Ce),ge.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let bt=0,Lt=G.length;bt<Lt;bt++){let Dt=G[bt],{object:Et,geometry:We,material:_t,group:xt}=Dt;if(_t.side===Kt&&Et.layers.test(J.layers)){let bn=_t.side;_t.side=rn,_t.needsUpdate=!0,Ns(Et,K,J,We,_t,xt),_t.side=bn,_t.needsUpdate=!0,rt=!0}}rt===!0&&(O.updateMultisampleRenderTarget(Ce),O.updateRenderTargetMipmap(Ce))}y.setRenderTarget(Ie,Oe,ke),y.setClearColor(ce,xe),Ye!==void 0&&(J.viewport=Ye),y.toneMapping=Ke}function Fi(T,G,K){let J=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Ce=T.length;q<Ce;q++){let Ne=T[q],{object:Ie,geometry:Oe,group:ke}=Ne,Ke=Ne.material;Ke.allowOverride===!0&&J!==null&&(Ke=J),Ie.layers.test(K.layers)&&Ns(Ie,G,K,Oe,Ke,ke)}}function Ns(T,G,K,J,q,Ce){T.onBeforeRender(y,G,K,J,q,Ce),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(y,G,K,J,T,Ce),q.transparent===!0&&q.side===Kt&&q.forceSinglePass===!1?(q.side=rn,q.needsUpdate=!0,y.renderBufferDirect(K,G,J,q,T,Ce),q.side=Ai,q.needsUpdate=!0,y.renderBufferDirect(K,G,J,q,T,Ce),q.side=Kt):y.renderBufferDirect(K,G,J,q,T,Ce),T.onAfterRender(y,G,K,J,q,Ce)}function gi(T,G,K){G.isScene!==!0&&(G=fe);let J=_.get(T),q=w.state.lights,Ce=w.state.shadowsArray,Ne=q.state.version,Ie=ye.getParameters(T,q.state,Ce,G,K),Oe=ye.getProgramCacheKey(Ie),ke=J.programs;J.environment=T.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(T.isMeshStandardMaterial?se:ee).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",An),ke=new Map,J.programs=ke);let Ke=ke.get(Oe);if(Ke!==void 0){if(J.currentProgram===Ke&&J.lightsStateVersion===Ne)return ns(T,Ie),Ke}else Ie.uniforms=ye.getUniforms(T),T.onBeforeCompile(Ie,y),Ke=ye.acquireProgram(Ie,Oe),ke.set(Oe,Ke),J.uniforms=Ie.uniforms;let Ye=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=Be.uniform),ns(T,Ie),J.needsLights=co(T),J.lightsStateVersion=Ne,J.needsLights&&(Ye.ambientLightColor.value=q.state.ambient,Ye.lightProbe.value=q.state.probe,Ye.directionalLights.value=q.state.directional,Ye.directionalLightShadows.value=q.state.directionalShadow,Ye.spotLights.value=q.state.spot,Ye.spotLightShadows.value=q.state.spotShadow,Ye.rectAreaLights.value=q.state.rectArea,Ye.ltc_1.value=q.state.rectAreaLTC1,Ye.ltc_2.value=q.state.rectAreaLTC2,Ye.pointLights.value=q.state.point,Ye.pointLightShadows.value=q.state.pointShadow,Ye.hemisphereLights.value=q.state.hemi,Ye.directionalShadowMap.value=q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ye.spotShadowMap.value=q.state.spotShadowMap,Ye.spotLightMatrix.value=q.state.spotLightMatrix,Ye.spotLightMap.value=q.state.spotLightMap,Ye.pointShadowMap.value=q.state.pointShadowMap,Ye.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Ke,J.uniformsList=null,Ke}function Ir(T){if(T.uniformsList===null){let G=T.currentProgram.getUniforms();T.uniformsList=Sr.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function ns(T,G){let K=_.get(T);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Dr(T,G,K,J,q){G.isScene!==!0&&(G=fe),O.resetTextureUnits();let Ce=G.fog,Ne=J.isMeshStandardMaterial?G.environment:null,Ie=V===null?y.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:us,Oe=(J.isMeshStandardMaterial?se:ee).get(J.envMap||Ne),ke=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ke=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ye=!!K.morphAttributes.position,rt=!!K.morphAttributes.normal,bt=!!K.morphAttributes.color,Lt=jn;J.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Lt=y.toneMapping);let Dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=Dt!==void 0?Dt.length:0,We=_.get(J),_t=w.state.lights;if(Pe===!0&&(ut===!0||T!==k)){let tn=T===k&&J.id===$;Be.setState(J,T,tn)}let xt=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==_t.state.version||We.outputColorSpace!==Ie||q.isBatchedMesh&&We.batching===!1||!q.isBatchedMesh&&We.batching===!0||q.isBatchedMesh&&We.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&We.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&We.instancing===!1||!q.isInstancedMesh&&We.instancing===!0||q.isSkinnedMesh&&We.skinning===!1||!q.isSkinnedMesh&&We.skinning===!0||q.isInstancedMesh&&We.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&We.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&We.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&We.instancingMorph===!1&&q.morphTexture!==null||We.envMap!==Oe||J.fog===!0&&We.fog!==Ce||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Be.numPlanes||We.numIntersection!==Be.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==Ke||We.morphTargets!==Ye||We.morphNormals!==rt||We.morphColors!==bt||We.toneMapping!==Lt||We.morphTargetsCount!==Et)&&(xt=!0):(xt=!0,We.__version=J.version);let bn=We.currentProgram;xt===!0&&(bn=gi(J,G,q));let xi=!1,fn=!1,ei=!1,St=bn.getUniforms(),dn=We.uniforms;if(de.useProgram(bn.program)&&(xi=!0,fn=!0,ei=!0),J.id!==$&&($=J.id,fn=!0),xi||k!==T){de.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(I,"projectionMatrix",T.projectionMatrix),St.setValue(I,"viewMatrix",T.matrixWorldInverse);let an=St.map.cameraPosition;an!==void 0&&an.setValue(I,Je.setFromMatrixPosition(T.matrixWorld)),Ve.logarithmicDepthBuffer&&St.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&St.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,fn=!0,ei=!0)}if(We.needsLights&&(_t.state.directionalShadowMap.length>0&&St.setValue(I,"directionalShadowMap",_t.state.directionalShadowMap,O),_t.state.spotShadowMap.length>0&&St.setValue(I,"spotShadowMap",_t.state.spotShadowMap,O),_t.state.pointShadowMap.length>0&&St.setValue(I,"pointShadowMap",_t.state.pointShadowMap,O)),q.isSkinnedMesh){St.setOptional(I,q,"bindMatrix"),St.setOptional(I,q,"bindMatrixInverse");let tn=q.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),St.setValue(I,"boneTexture",tn.boneTexture,O))}q.isBatchedMesh&&(St.setOptional(I,q,"batchingTexture"),St.setValue(I,"batchingTexture",q._matricesTexture,O),St.setOptional(I,q,"batchingIdTexture"),St.setValue(I,"batchingIdTexture",q._indirectTexture,O),St.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&St.setValue(I,"batchingColorTexture",q._colorsTexture,O));let pn=K.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&tt.update(q,K,bn),(fn||We.receiveShadow!==q.receiveShadow)&&(We.receiveShadow=q.receiveShadow,St.setValue(I,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(dn.envMap.value=Oe,dn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(dn.envMapIntensity.value=G.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=Y_()),fn&&(St.setValue(I,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&lo(dn,ei),Ce&&J.fog===!0&&$e.refreshFogUniforms(dn,Ce),$e.refreshMaterialUniforms(dn,J,Ge,Fe,w.state.transmissionRenderTarget[T.id]),Sr.upload(I,Ir(We),dn,O)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Sr.upload(I,Ir(We),dn,O),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&St.setValue(I,"center",q.center),St.setValue(I,"modelViewMatrix",q.modelViewMatrix),St.setValue(I,"normalMatrix",q.normalMatrix),St.setValue(I,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let tn=J.uniformsGroups;for(let an=0,In=tn.length;an<In;an++){let vi=tn[an];me.update(vi,bn),me.bind(vi,bn)}}return bn}function lo(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function co(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(T,G,K){let J=_.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),_.get(T.texture).__webglTexture=G,_.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){let K=_.get(T);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};let Lr=I.createFramebuffer();this.setRenderTarget=function(T,G=0,K=0){V=T,U=G,F=K;let J=null,q=!1,Ce=!1;if(T){let Ie=_.get(T);if(Ie.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(I.FRAMEBUFFER,Ie.__webglFramebuffer),W.copy(T.viewport),X.copy(T.scissor),ne=T.scissorTest,de.viewport(W),de.scissor(X),de.setScissorTest(ne),$=-1;return}else if(Ie.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(Ie.__hasExternalTextures)O.rebindTextures(T,_.get(T.texture).__webglTexture,_.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ke=T.depthTexture;if(Ie.__boundDepthTexture!==Ke){if(Ke!==null&&_.has(Ke)&&(T.width!==Ke.image.width||T.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}let Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);let ke=_.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[G])?J=ke[G][K]:J=ke[G],q=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?J=_.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?J=ke[K]:J=ke,W.copy(T.viewport),X.copy(T.scissor),ne=T.scissorTest}else W.copy(Q).multiplyScalar(Ge).floor(),X.copy(re).multiplyScalar(Ge).floor(),ne=Me;if(K!==0&&(J=Lr),de.bindFramebuffer(I.FRAMEBUFFER,J)&&de.drawBuffers(T,J),de.viewport(W),de.scissor(X),de.setScissorTest(ne),q){let Ie=_.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ie.__webglTexture,K)}else if(Ce){let Ie=G;for(let Oe=0;Oe<T.textures.length;Oe++){let ke=_.get(T.textures[Oe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Oe,ke.__webglTexture,K,Ie)}}else if(T!==null&&K!==0){let Ie=_.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ie.__webglTexture,K)}$=-1},this.readRenderTargetPixels=function(T,G,K,J,q,Ce,Ne,Ie=0){if(!(T&&T.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe){de.bindFramebuffer(I.FRAMEBUFFER,Oe);try{let ke=T.textures[Ie],Ke=ke.format,Ye=ke.type;if(!Ve.textureFormatReadable(Ke)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Ye)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-J&&K>=0&&K<=T.height-q&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),I.readPixels(G,K,J,q,pe.convert(Ke),pe.convert(Ye),Ce))}finally{let ke=V!==null?_.get(V).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,G,K,J,q,Ce,Ne,Ie=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ne!==void 0&&(Oe=Oe[Ne]),Oe)if(G>=0&&G<=T.width-J&&K>=0&&K<=T.height-q){de.bindFramebuffer(I.FRAMEBUFFER,Oe);let ke=T.textures[Ie],Ke=ke.format,Ye=ke.type;if(!Ve.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.bufferData(I.PIXEL_PACK_BUFFER,Ce.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ie),I.readPixels(G,K,J,q,pe.convert(Ke),pe.convert(Ye),0);let bt=V!==null?_.get(V).__webglFramebuffer:null;de.bindFramebuffer(I.FRAMEBUFFER,bt);let Lt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await td(I,Lt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,rt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ce),I.deleteBuffer(rt),I.deleteSync(Lt),Ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,K=0){let J=Math.pow(2,-K),q=Math.floor(T.image.width*J),Ce=Math.floor(T.image.height*J),Ne=G!==null?G.x:0,Ie=G!==null?G.y:0;O.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,Ne,Ie,q,Ce),de.unbindTexture()};let Ur=I.createFramebuffer(),ho=I.createFramebuffer();this.copyTextureToTexture=function(T,G,K=null,J=null,q=0,Ce=null){Ce===null&&(q!==0?(or("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ce=q,q=0):Ce=0);let Ne,Ie,Oe,ke,Ke,Ye,rt,bt,Lt,Dt=T.isCompressedTexture?T.mipmaps[Ce]:T.image;if(K!==null)Ne=K.max.x-K.min.x,Ie=K.max.y-K.min.y,Oe=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Ke=K.min.y,Ye=K.isBox3?K.min.z:0;else{let pn=Math.pow(2,-q);Ne=Math.floor(Dt.width*pn),Ie=Math.floor(Dt.height*pn),T.isDataArrayTexture?Oe=Dt.depth:T.isData3DTexture?Oe=Math.floor(Dt.depth*pn):Oe=1,ke=0,Ke=0,Ye=0}J!==null?(rt=J.x,bt=J.y,Lt=J.z):(rt=0,bt=0,Lt=0);let Et=pe.convert(G.format),We=pe.convert(G.type),_t;G.isData3DTexture?(O.setTexture3D(G,0),_t=I.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(O.setTexture2DArray(G,0),_t=I.TEXTURE_2D_ARRAY):(O.setTexture2D(G,0),_t=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,G.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,G.unpackAlignment);let xt=I.getParameter(I.UNPACK_ROW_LENGTH),bn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),xi=I.getParameter(I.UNPACK_SKIP_PIXELS),fn=I.getParameter(I.UNPACK_SKIP_ROWS),ei=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Dt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Dt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ye);let St=T.isDataArrayTexture||T.isData3DTexture,dn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){let pn=_.get(T),tn=_.get(G),an=_.get(pn.__renderTarget),In=_.get(tn.__renderTarget);de.bindFramebuffer(I.READ_FRAMEBUFFER,an.__webglFramebuffer),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,In.__webglFramebuffer);for(let vi=0;vi<Oe;vi++)St&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(T).__webglTexture,q,Ye+vi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,_.get(G).__webglTexture,Ce,Lt+vi)),I.blitFramebuffer(ke,Ke,Ne,Ie,rt,bt,Ne,Ie,I.DEPTH_BUFFER_BIT,I.NEAREST);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||_.has(T)){let pn=_.get(T),tn=_.get(G);de.bindFramebuffer(I.READ_FRAMEBUFFER,Ur),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,ho);for(let an=0;an<Oe;an++)St?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,pn.__webglTexture,q,Ye+an):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pn.__webglTexture,q),dn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,Ce,Lt+an):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,Ce),q!==0?I.blitFramebuffer(ke,Ke,Ne,Ie,rt,bt,Ne,Ie,I.COLOR_BUFFER_BIT,I.NEAREST):dn?I.copyTexSubImage3D(_t,Ce,rt,bt,Lt+an,ke,Ke,Ne,Ie):I.copyTexSubImage2D(_t,Ce,rt,bt,ke,Ke,Ne,Ie);de.bindFramebuffer(I.READ_FRAMEBUFFER,null),de.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(_t,Ce,rt,bt,Lt,Ne,Ie,Oe,Et,We,Dt.data):G.isCompressedArrayTexture?I.compressedTexSubImage3D(_t,Ce,rt,bt,Lt,Ne,Ie,Oe,Et,Dt.data):I.texSubImage3D(_t,Ce,rt,bt,Lt,Ne,Ie,Oe,Et,We,Dt):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ce,rt,bt,Ne,Ie,Et,We,Dt.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ce,rt,bt,Dt.width,Dt.height,Et,Dt.data):I.texSubImage2D(I.TEXTURE_2D,Ce,rt,bt,Ne,Ie,Et,We,Dt);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,xi),I.pixelStorei(I.UNPACK_SKIP_ROWS,fn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ei),Ce===0&&G.generateMipmaps&&I.generateMipmap(_t),de.unbindTexture()},this.initRenderTarget=function(T){_.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),de.unbindTexture()},this.resetState=function(){U=0,F=0,V=null,de.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var di={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Z_=new $i(-1,1,1,-1,0,1),Au=class extends Rt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},$_=new Au,pi=class{constructor(e){this._mesh=new qe($_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var wr=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof st?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=un.clone(e.uniforms),this.material=new st({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ja=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Uc=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Nc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new Ot(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wr(di),this.copyPass.material.blending=Yt,this.clock=new ys}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ja!==void 0&&(a instanceof ja?n=!0:a instanceof Uc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fc=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Se}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Fd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ar=class i extends Tn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new Se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ot(r,a,{type:Zt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ot(r,a,{type:Zt});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ot(r,a,{type:Zt});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Fd;this.highPassUniforms=un.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new st({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=un.clone(di.uniforms),this.blendMaterial=new st({uniforms:this.copyUniforms,vertexShader:di.vertexShader,fragmentShader:di.fragmentShader,premultipliedAlpha:!0,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Se,this._oldClearAlpha=1,this._basic=new kt,this._fsQuad=new pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new st({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new st({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ar.BlurDirectionX=new ie(1,0);Ar.BlurDirectionY=new ie(0,1);var Qa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Bc=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=un.clone(Qa.uniforms),this.material=new vr({name:Qa.name,uniforms:this.uniforms,vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader}),this._fsQuad=new pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},pt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ss?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ha?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===za&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var eo={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new it},cameraProjectionMatrixInverse:{value:new it},cameraWorldMatrix:{value:new it},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},to={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Oc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Bd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=J_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],c=2*Math.PI*o/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();s[a*4]=(l.x*.5+.5)*255,s[a*4+1]=(l.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ci(s,e,e);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}function J_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var no={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Ru(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ie},cameraProjectionMatrixInverse:{value:new it},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Ru(i,e,t){let n=K_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function K_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var zc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,c=Math.floor(e+o),l=Math.floor(t+o),h=(3-Math.sqrt(3))/6,f=(c+l)*h,d=c-f,u=l-f,g=e-d,x=t-u,m,p;g>x?(m=1,p=0):(m=0,p=1);let S=g-m+h,M=x-p+h,b=g-1+2*h,w=x-1+2*h,R=c&255,P=l&255,N=this.perm[R+this.perm[P]]%12,y=this.perm[R+m+this.perm[P+p]]%12,E=this.perm[R+1+this.perm[P+1]]%12,U=.5-g*g-x*x;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[N],g,x));let F=.5-S*S-M*M;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[y],S,M));let V=.5-b*b-w*w;return V<0?r=0:(V*=V,r=V*V*this._dot(this.grad3[E],b,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,l=(e+t+n)*.3333333333333333,h=Math.floor(e+l),f=Math.floor(t+l),d=Math.floor(n+l),u=1/6,g=(h+f+d)*u,x=h-g,m=f-g,p=d-g,S=e-x,M=t-m,b=n-p,w,R,P,N,y,E;S>=M?M>=b?(w=1,R=0,P=0,N=1,y=1,E=0):S>=b?(w=1,R=0,P=0,N=1,y=0,E=1):(w=0,R=0,P=1,N=1,y=0,E=1):M<b?(w=0,R=0,P=1,N=0,y=1,E=1):S<b?(w=0,R=1,P=0,N=0,y=1,E=1):(w=0,R=1,P=0,N=1,y=1,E=0);let U=S-w+u,F=M-R+u,V=b-P+u,$=S-N+2*u,k=M-y+2*u,W=b-E+2*u,X=S-1+3*u,ne=M-1+3*u,ce=b-1+3*u,xe=h&255,ve=f&255,Fe=d&255,Ge=this.perm[xe+this.perm[ve+this.perm[Fe]]]%12,Ze=this.perm[xe+w+this.perm[ve+R+this.perm[Fe+P]]]%12,nt=this.perm[xe+N+this.perm[ve+y+this.perm[Fe+E]]]%12,Q=this.perm[xe+1+this.perm[ve+1+this.perm[Fe+1]]]%12,re=.6-S*S-M*M-b*b;re<0?s=0:(re*=re,s=re*re*this._dot3(this.grad3[Ge],S,M,b));let Me=.6-U*U-F*F-V*V;Me<0?r=0:(Me*=Me,r=Me*Me*this._dot3(this.grad3[Ze],U,F,V));let ze=.6-$*$-k*k-W*W;ze<0?a=0:(ze*=ze,a=ze*ze*this._dot3(this.grad3[nt],$,k,W));let Pe=.6-X*X-ne*ne-ce*ce;return Pe<0?o=0:(Pe*=Pe,o=Pe*Pe*this._dot3(this.grad3[Q],X,ne,ce)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,h,f,d,u,g,x=(e+t+n+s)*c,m=Math.floor(e+x),p=Math.floor(t+x),S=Math.floor(n+x),M=Math.floor(s+x),b=(m+p+S+M)*l,w=m-b,R=p-b,P=S-b,N=M-b,y=e-w,E=t-R,U=n-P,F=s-N,V=y>E?32:0,$=y>U?16:0,k=E>U?8:0,W=y>F?4:0,X=E>F?2:0,ne=U>F?1:0,ce=V+$+k+W+X+ne,xe=a[ce][0]>=3?1:0,ve=a[ce][1]>=3?1:0,Fe=a[ce][2]>=3?1:0,Ge=a[ce][3]>=3?1:0,Ze=a[ce][0]>=2?1:0,nt=a[ce][1]>=2?1:0,Q=a[ce][2]>=2?1:0,re=a[ce][3]>=2?1:0,Me=a[ce][0]>=1?1:0,ze=a[ce][1]>=1?1:0,Pe=a[ce][2]>=1?1:0,ut=a[ce][3]>=1?1:0,gt=y-xe+l,Je=E-ve+l,ae=U-Fe+l,fe=F-Ge+l,le=y-Ze+2*l,Re=E-nt+2*l,I=U-Q+2*l,Ee=F-re+2*l,ge=y-Me+3*l,Ve=E-ze+3*l,de=U-Pe+3*l,C=F-ut+3*l,_=y-1+4*l,O=E-1+4*l,ee=U-1+4*l,se=F-1+4*l,Y=m&255,be=p&255,he=S&255,ye=M&255,$e=o[Y+o[be+o[he+o[ye]]]]%32,ue=o[Y+xe+o[be+ve+o[he+Fe+o[ye+Ge]]]]%32,Te=o[Y+Ze+o[be+nt+o[he+Q+o[ye+re]]]]%32,Be=o[Y+Me+o[be+ze+o[he+Pe+o[ye+ut]]]]%32,He=o[Y+1+o[be+1+o[he+1+o[ye+1]]]]%32,_e=.6-y*y-E*E-U*U-F*F;_e<0?h=0:(_e*=_e,h=_e*_e*this._dot4(r[$e],y,E,U,F));let tt=.6-gt*gt-Je*Je-ae*ae-fe*fe;tt<0?f=0:(tt*=tt,f=tt*tt*this._dot4(r[ue],gt,Je,ae,fe));let B=.6-le*le-Re*Re-I*I-Ee*Ee;B<0?d=0:(B*=B,d=B*B*this._dot4(r[Te],le,Re,I,Ee));let we=.6-ge*ge-Ve*Ve-de*de-C*C;we<0?u=0:(we*=we,u=we*we*this._dot4(r[Be],ge,Ve,de,C));let pe=.6-_*_-O*O-ee*ee-se*se;return pe<0?g=0:(pe*=pe,g=pe*pe*this._dot4(r[He],_,O,ee,se)),27*(h+f+d+u+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var io=class i extends Tn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Bd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ot(this.width,this.height,{type:Zt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new st({defines:Object.assign({},eo.defines),uniforms:un.clone(eo.uniforms),vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader,blending:Yt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Aa,this.normalMaterial.blending=Yt,this.pdMaterial=new st({defines:Object.assign({},no.defines),uniforms:un.clone(no.uniforms),vertexShader:no.vertexShader,fragmentShader:no.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new st({defines:Object.assign({},to.defines),uniforms:un.clone(to.uniforms),vertexShader:to.vertexShader,fragmentShader:to.fragmentShader,blending:Yt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new st({uniforms:un.clone(di.uniforms),vertexShader:di.vertexShader,fragmentShader:di.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Na,blendDst:bs,blendEquation:Un,blendSrcAlpha:Ua,blendDstAlpha:bs,blendEquationAlpha:Un}),this.blendMaterial=new st({uniforms:un.clone(Oc.uniforms),vertexShader:Oc.vertexShader,fragmentShader:Oc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Cl,blendSrc:Na,blendDst:bs,blendEquation:Un,blendSrcAlpha:Ua,blendDstAlpha:bs,blendEquationAlpha:Un}),this._fsQuad=new pi(null),this._originalClearColor=new Se,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new li,this.depthTexture.format=hi,this.depthTexture.type=Ki,this.normalRenderTarget=new Ot(this.width,this.height,{minFilter:Xt,magFilter:Xt,type:Zt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ru(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Yt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new zc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let c=a,l=o;s[(a*e+o)*4]=(t.noise(c,l)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(c+e,l)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(c,l+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Ci(s,e,e,Cn,vn);return r.wrapS=cn,r.wrapT=cn,r.needsUpdate=!0,r}};io.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function yn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,c=new Rt,l=0;for(let h=0;h<i.length;++h){let f=i[h],d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let u in f.attributes){if(!n.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+u+'" attribute exists among all geometries, or in none of them.'),null;r[u]===void 0&&(r[u]=[]),r[u].push(f.attributes[u]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let u in f.morphAttributes){if(!s.has(u))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[u]===void 0&&(a[u]=[]),a[u].push(f.morphAttributes[u])}if(e){let u;if(t)u=f.index.count;else if(f.attributes.position!==void 0)u=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,u,h),l+=u}}if(t){let h=0,f=[];for(let d=0;d<i.length;++d){let u=i[d].index;for(let g=0;g<u.count;++g)f.push(u.getX(g)+h);h+=i[d].attributes.position.count}c.setIndex(f)}for(let h in r){let f=Od(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<f;++d){let u=[];for(let x=0;x<a[h].length;++x)u.push(a[h][x][d]);let g=Od(u);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Od(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let d=0,u=h.count;d<u;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);o.setComponent(d+f,g,x)}}else a.set(h.array,c);c+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var so=class i extends qe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Vt;let n=this,s=t.color!==void 0?new Se(t.color):new Se(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||i.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,h=new Vn,f=new D,d=new D,u=new D,g=new it,x=new D(0,0,-1),m=new Ct,p=new D,S=new D,M=new Ct,b=new it,w=this.camera,R=new Ot(r,a,{samples:l,type:Zt}),P=new st({name:c.name!==void 0?c.name:"unspecified",uniforms:un.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});P.uniforms.tDiffuse.value=R.texture,P.uniforms.color.value=s,P.uniforms.textureMatrix.value=b,this.material=P,this.onBeforeRender=function(N,y,E){if(d.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(d,u),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(d),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(u),S.subVectors(d,x),S.reflect(f).negate(),S.add(d),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(f),w.lookAt(S),w.far=E.far,w.updateMatrixWorld(),w.projectionMatrix.copy(E.projectionMatrix),b.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),b.multiply(w.projectionMatrix),b.multiply(w.matrixWorldInverse),b.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(f,d),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let F=w.projectionMatrix;M.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],M.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],M.z=-1,M.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(M)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-o,F.elements[14]=m.w,n.visible=!1;let V=N.getRenderTarget(),$=N.xr.enabled,k=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(R),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(y,w),N.xr.enabled=$,N.shadowMap.autoUpdate=k,N.setRenderTarget(V);let W=E.viewport;W!==void 0&&N.state.viewport(W),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}};so.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Hc=null;function j_(){if(Hc)return Hc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Hc=new Pi(i),Hc}function Cu(i,e,t=.7){let n=new fa(new fr({map:j_(),color:i,transparent:!0,opacity:t,blending:jt,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(e),n}var Mn='"Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","Noto Sans JP","Noto Sans CJK JP","Meiryo","MS Gothic",sans-serif';function Ds(i){let e=i%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647)/2147483647}function Ht(i,e,t){let n=document.createElement("canvas");return n.width=Math.max(2,Math.round(i)),n.height=Math.max(2,Math.round(e)),t(n.getContext("2d")),n}function Gt(i,e={}){let t=new Pi(i);return e.srgb!==!1&&(t.colorSpace=Jt),e.repeat&&(t.wrapS=t.wrapT=cn),t.anisotropy=e.aniso??4,t.generateMipmaps=!0,t.minFilter=ci,t}var Li={bays:6,floors:8,bayW:3.2,floorH:3.6},zd=Li.bays*Li.bayW,Iu=Li.floors*Li.floorH;function Hd(i,e,t=1){let n=Math.round(512*t),s=Math.round(512*t),r=n/Li.bays,a=s/Li.floors,o=[],c=Ds(e);for(let u=0;u<Li.floors;u++)for(let g=0;g<Li.bays;g++)o.push({x:g*r,y:u*a,state:c(),r:c(),r2:c()});let l=i==="office"?.2:i==="glass"?.14:i==="old"?.1:.12,h=(u,g)=>{let x={office:"#171d2b",resi:"#1b1a24",glass:"#0b1424",old:"#201c20"}[i];u.fillStyle=g?"#000":x,u.fillRect(0,0,n,s);for(let m of o){let p=m.x+r*.1,S=m.y+a*(i==="glass"?.06:.14),M=r*(i==="glass"?.84:i==="office"?.78:.56),b=a*(i==="glass"?.8:i==="office"?.62:.5),w=m.state<l,R=m.r;if(g){if(w){let P,N=.3+m.r2*.4;if(R<.12?P="#ffbf80":R<.9?(P="#a8c8e0",N*=.8):P="#4a8cff",u.globalAlpha=N,u.fillStyle=P,u.fillRect(p,S,M,b),u.globalAlpha=1,u.fillStyle="rgba(0,0,0,0.5)",R>=.12&&R<.5&&(u.fillRect(p,S+b*.62,M*.4,b*.38),u.fillRect(p+M*.55,S+b*.7,M*.45,b*.3)),m.r2>.55&&R<.84){let y=p+M*(.25+(m.r2-.55)*1.2);u.fillStyle="rgba(0,0,0,0.82)",u.beginPath(),u.arc(y,S+b*.42,b*.11,0,Math.PI*2),u.fill(),u.fillRect(y-b*.14,S+b*.53,b*.28,b*.47)}if(m.r2<.2&&i!=="glass"){u.fillStyle="rgba(0,0,0,0.65)";let y=Math.max(3,Math.round(b/(3*t)));for(let E=0;E<y*.6;E++)u.fillRect(p,S+E*(b/y),M,b/y*.55)}(i==="office"||i==="glass")&&(u.fillStyle="rgba(0,0,0,0.9)",u.fillRect(p+M/2-t,S,2*t,b))}}else{let P=u.createLinearGradient(0,S,0,S+b);P.addColorStop(0,i==="glass"?"#243a5c":"#1a2438"),P.addColorStop(1,"#070a12"),u.fillStyle=w?"#1b2335":P,u.fillRect(p,S,M,b),u.strokeStyle="#0a0d14",u.lineWidth=Math.max(1,t*2),u.strokeRect(p,S,M,b),(i==="office"||i==="glass")&&(u.beginPath(),u.moveTo(p+M/2,S),u.lineTo(p+M/2,S+b),u.stroke()),u.fillStyle="#2b3345",u.fillRect(m.x,m.y+a-4*t,r,4*t),u.fillStyle="#10131c",u.fillRect(m.x,m.y+a-1.5*t,r,1.5*t),(i==="resi"||i==="old")&&(m.r2<.34&&(u.fillStyle="#394155",u.fillRect(p-4*t,S+b+2*t,M+8*t,4*t),u.fillStyle="#0c0f16",u.fillRect(p-4*t,S+b-7*t,M+8*t,2*t)),m.r2>.62&&m.r2<.8&&(u.fillStyle="#58606f",u.fillRect(p+M*.15,S+b+3*t,M*.7,8*t),u.fillStyle="#272c37",u.fillRect(p+M*.2,S+b+5*t,M*.5,4*t))),i==="old"&&m.r2>.94&&(u.fillStyle="#3b2432",u.fillRect(p,S,M,b))}}if(!g){u.fillStyle="rgba(255,255,255,0.025)";for(let m=0;m<=Li.bays;m++)u.fillRect(m*r-t,0,2*t,s);if(i==="glass"){let m=u.createLinearGradient(0,0,n,s);m.addColorStop(0,"rgba(120,170,255,0.09)"),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(255,120,200,0.07)"),u.fillStyle=m,u.fillRect(0,0,n,s)}}},f=Gt(Ht(n,s,u=>h(u,!1)),{repeat:!0}),d=Gt(Ht(n,s,u=>h(u,!0)),{repeat:!0});return{map:f,em:d}}var Du={w:16,h:4.5};function Vd(i,e=1){let t=Math.round(1024*e),n=Math.round(288*e),s=Ds(i),r=["\u30CD\u30AA\u9EBA","\u30BC\u30ED\u85AC\u5C40","\u30B3\u30A4\u30F3\u5802","\u713C\u304D\u9CE5","\u6708\u5F71","\u96FB\u8133\u5802","\u30DF\u30E9\u30A4\u6E6F","\u30AB\u30E9\u30AA\u30B1"],a=["#5fc8e0","#3fa8ff","#5fc8e0","#ff9a4a","#ff3a4a","#4a8cff"],o=Array.from({length:4},()=>({hue:a[Math.floor(s()*a.length)],shut:s()<.22,name:r[Math.floor(s()*r.length)],awn:s()<.6})),c=(l,h)=>{l.fillStyle=h?"#000":"#14141c",l.fillRect(0,0,t,n);let f=t/4;o.forEach((d,u)=>{let g=u*f;if(d.shut)if(h)l.fillStyle="rgba(255,60,190,0.35)",l.fillRect(g+f*.2,n*.4,f*.5,n*.18);else{l.fillStyle="#2a2d36",l.fillRect(g+f*.08,n*.2,f*.84,n*.72),l.fillStyle="#1c1e26";for(let x=n*.22;x<n*.9;x+=5*e)l.fillRect(g+f*.08,x,f*.84,1.5*e);l.fillStyle="#6a2c7a",l.fillRect(g+f*.2,n*.4,f*.5,n*.18)}else{let x=g+f*.08,m=n*.22,p=f*.84,S=n*.7;if(!h)l.fillStyle="#0a0c12",l.fillRect(x,m,p,S);else{let M=l.createLinearGradient(0,m,0,m+S);M.addColorStop(0,d.hue),M.addColorStop(1,"rgba(0,0,0,0.25)"),l.globalAlpha=.85,l.fillStyle=M,l.fillRect(x,m,p,S),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,0.55)";for(let b=0;b<3;b++)l.fillRect(x+4*e,m+S*(.18+b*.22),p-8*e,2*e);l.fillStyle="rgba(0,0,0,0.7)",l.fillRect(x,m+S*.72,p,S*.28),l.beginPath(),l.arc(x+p*.62,m+S*.42,S*.08,0,Math.PI*2),l.fill(),l.fillRect(x+p*.62-S*.1,m+S*.5,S*.2,S*.25)}l.strokeStyle=h?"#000":"#232734",l.lineWidth=3*e,l.strokeRect(x,m,p,S)}if(d.awn&&!h)for(let x=0;x<8;x++)l.fillStyle=x%2?"#7a1f2c":"#d9d2c4",l.fillRect(g+f*.04+x*f*.92/8,n*.12,f*.92/8,n*.1);l.font=`900 ${n*.14}px ${Mn}`,l.textAlign="center",l.textBaseline="middle",h?(l.shadowColor=d.hue,l.shadowBlur=8*e,l.fillStyle=d.hue,l.fillText(d.name,g+f/2,n*.07),l.shadowBlur=0):(l.fillStyle="#05060a",l.fillRect(g+f*.1,0,f*.8,n*.14))})};return{map:Gt(Ht(t,n,l=>c(l,!1)),{repeat:!0}),em:Gt(Ht(t,n,l=>c(l,!0)),{repeat:!0})}}var Is=8,Pu=4,ro=[{t:"\u30CD\u30AA\u30F3\u9152\u5834",c:"#2ec8e0"},{t:"\u591C\u660E\u3051\u9EBA",c:"#ff9a3a"},{t:"\u30DF\u30E9\u30A4\u6E6F",c:"#3fa8ff"},{t:"\u96FB\u8133\u30AB\u30D5\u30A7",c:"#2ec8e0"},{t:"\u30BC\u30ED\u85AC\u5C40",c:"#3fb8d8"},{t:"\u30B3\u30A4\u30F3\u5802",c:"#ff9a3a"},{t:"\u6708\u5F71\u30D0\u30FC",c:"#3a7bff"},{t:"\u30C8\u30FC\u30AF\u30F3\u5E02\u5834",c:"#ff2a46"},{t:"\u30CB\u30F3\u30B8\u30E3\u5802",c:"#ff2a46",sub:"NPG"},{t:"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6",c:"#ff2a3a",sub:"nSLAVE"},{t:"bWalletX",c:"#4da3ff",latin:!0},{t:"TOKENBLASTER",c:"#ff9a3a",latin:!0},{t:"NPG",c:"#ff2a46",latin:!0},{t:"\u713C\u304D\u9CE5",c:"#ff9a3a"},{t:"\u30AB\u30E9\u30AA\u30B1",c:"#3a7bff"},{t:"\u4E8C\u5341\u56DB\u6642\u9593",c:"#6fd8e8"},{t:"\u30B2\u30FC\u30E0\u8857",c:"#2ec8e0"},{t:"\u30B9\u30B7\u30FB\u30BC\u30ED",c:"#ff2a46"},{t:"\u30DB\u30C6\u30EB\u6708\u5149",c:"#6fb0ff"},{t:"\u4EBA\u5DE5\u5929\u4F7F",c:"#2ec8e0"},{t:"\u96FB\u6C17\u8857",c:"#3fa8ff"},{t:"BLOCK 21",c:"#27d8f0",latin:!0},{t:"\u591C\u52E4",c:"#ff2a46"},{t:"\u9EBB\u96C0",c:"#3fb8d8"},{t:"\u30D3\u30C3\u30C8\u30B3\u30A4\u30F3",c:"#ff9a3a"},{t:"\u4EEE\u60F3\u901A\u8CA8",c:"#2ec8e0"},{t:"\u5149\u306E\u5EAD",c:"#8fd8e8"},{t:"\u9244\u9AA8\u9152\u5834",c:"#3a7bff"},{t:"\u30B5\u30A4\u30D0\u30FC\u6574\u4F53",c:"#3a7bff"},{t:"\u96E8\u5BBF\u308A",c:"#3fa8ff"},{t:"\u30C9\u30ED\u30FC\u30F3\u4FBF",c:"#2ec8e0"},{t:"\u672A\u6765\u5802",c:"#3fa8ff"}];function kd(i=1){let e=128*i,t=512*i,n=e*Is,s=t*Pu,r=Ht(n,s,a=>{a.fillStyle="#000",a.fillRect(0,0,n,s),ro.forEach((o,c)=>{let l=c%Is,h=Math.floor(c/Is),f=l*e,d=h*t;if(a.save(),a.translate(f,d),a.fillStyle="rgba(8,6,16,0.82)",a.fillRect(8*i,6*i,e-16*i,t-12*i),a.shadowColor=o.c,a.shadowBlur=14*i,a.strokeStyle=o.c,a.lineWidth=4*i,a.strokeRect(12*i,10*i,e-24*i,t-20*i),a.lineWidth=1.5*i,a.strokeRect(19*i,17*i,e-38*i,t-34*i),a.fillStyle=o.c,a.textAlign="center",a.textBaseline="middle",o.latin){a.save(),a.translate(e/2,t/2),a.rotate(-Math.PI/2);let u=Math.min(76*i,(t-70*i)/(o.t.length*.62));a.font=`900 ${u}px Impact, "Arial Black", sans-serif`,a.fillText(o.t,0,0),a.restore()}else{let u=[...o.t],g=o.sub?80*i:0,x=t-70*i-g,m=Math.min(74*i,x/u.length);a.font=`900 ${m}px ${Mn}`,u.forEach((p,S)=>a.fillText(p,e/2,36*i+m*(S+.55))),o.sub&&(a.save(),a.translate(e/2,t-44*i-g/2),a.rotate(-Math.PI/2),a.font=`800 ${Math.min(24*i,(g+20*i)/(o.sub.length*.7))}px Arial, sans-serif`,a.fillText(o.sub,0,0),a.restore())}a.shadowBlur=8*i,a.fillStyle="#fff";for(let u=0;u<9;u++)a.fillRect(e/2-1.5*i,24*i+u*((t-60*i)/8),3*i,3*i);a.restore()})});return{texture:Gt(r,{aniso:4}),rect:a=>[a%Is/Is,1-(Math.floor(a/Is)+1)/Pu,1/Is,1/Pu]}}var Qi=4,Vc=2;function Gd(i=1){let e=512*i,t=Ht(e*Qi,e*Vc,n=>{n.fillStyle="#000",n.fillRect(0,0,e*Qi,e*Vc);let s=(a,o)=>{n.save(),n.translate(a%Qi*e,Math.floor(a/Qi)*e),n.beginPath(),n.rect(0,0,e,e),n.clip(),n.scale(i,i),o(n),n.restore()},r=(a,o,c,l,h,f=`900 ${l}px ${Mn}`,d=20)=>{a.font=f,a.textAlign="center",a.textBaseline="middle",a.shadowColor=h,a.shadowBlur=d,a.fillStyle=h,a.fillText(o,256,c),a.shadowBlur=0};s(0,a=>{a.strokeStyle="#ff3226",a.lineWidth=8,a.shadowColor="#ff2a1a",a.shadowBlur=24,a.beginPath(),a.ellipse(256,190,170,86,0,0,Math.PI*2),a.stroke(),a.fillStyle="#ff3a2a",a.beginPath(),a.arc(256,190,48,0,Math.PI*2),a.fill(),a.fillStyle="#000",a.fillRect(250,142,12,96),a.shadowBlur=0,r(a,"nSLAVE",340,64,"#f4f7ff",'900 64px "Arial Black", Impact, sans-serif',14),r(a,"T E R R O R N O D E",400,28,"#ff5646","700 28px Arial, sans-serif",10),r(a,"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",456,30,"#ffb0a8",`700 30px ${Mn}`,8)}),s(1,a=>{r(a,"TOKEN",190,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(a,"BLASTER",300,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(a,"\u30C8\u30FC\u30AF\u30F3\u30D6\u30E9\u30B9\u30BF\u30FC",400,40,"#ffe27a",`900 40px ${Mn}`,12),r(a,"\u6483\u3066\u3002\u30D6\u30ED\u30C3\u30AF\u3092\u3002",456,30,"#ff8a3a",`700 30px ${Mn}`,8)}),s(2,a=>{a.strokeStyle="#4da3ff",a.lineWidth=10,a.shadowColor="#2f7bff",a.shadowBlur=22,a.beginPath(),a.roundRect(150,70,212,168,28),a.stroke(),a.beginPath(),a.moveTo(150,120),a.lineTo(362,120),a.stroke(),a.shadowBlur=0,r(a,"bWalletX",340,94,"#8fc4ff",'900 94px "Arial Black", Impact, sans-serif',18),r(a,"\u30D3\u30FC\u30FB\u30A6\u30A9\u30EC\u30C3\u30C8",424,38,"#cfe4ff",`700 38px ${Mn}`,10)}),s(3,a=>{r(a,"NPG",200,190,"#ff2a46",'900 italic 190px Impact, "Arial Black", sans-serif',28),r(a,"NINJA PUNK GIRLS",340,44,"#ffc0c8","800 44px Arial, sans-serif",10),r(a,"\u30CB\u30F3\u30B8\u30E3\u30FB\u30D1\u30F3\u30AF\u30FB\u30AC\u30FC\u30EB\u30BA",410,32,"#ff7a88",`700 32px ${Mn}`,8)}),s(4,a=>{r(a,"NEO TOKYO",190,86,"#2ec8e0",'900 86px "Arial Black", Impact, sans-serif',24),r(a,"2048",300,150,"#ff2a46",'900 150px "Arial Black", Impact, sans-serif',26),r(a,"\u30CD\u30AA\u6771\u4EAC",410,66,"#cfeaf4",`900 66px ${Mn}`,14)}),s(5,a=>{r(a,"nSLAVE",110,58,"#f4f7ff",'900 58px "Arial Black", Impact, sans-serif',16),r(a,"NOW PATENTED:",214,40,"#ff5646","800 40px Arial, sans-serif",10),r(a,"YOUR SOUL.",290,84,"#ff2a3a",'900 84px "Arial Black", Impact, sans-serif',24),r(a,"\u3042\u306A\u305F\u306E\u9B42\u306B\u7279\u8A31\u3092",400,44,"#ffb0a8",`800 44px ${Mn}`,10),r(a,"terms apply \xB7 see you in court",462,22,"#8a98a8","600 22px Arial, sans-serif",0)}),s(6,a=>{r(a,"nSLAVE",84,42,"#f4f7ff",'900 42px "Arial Black", Impact, sans-serif',12),r(a,"SOUL",190,118,"#ff2a3a",'900 118px "Arial Black", Impact, sans-serif',24),r(a,"CHAIN\u2122",300,96,"#2ec8e0",'900 96px "Arial Black", Impact, sans-serif',22),r(a,"(chain of tools)",380,30,"#ffc0b8","italic 700 30px Arial, sans-serif",8),r(a,"\u30BD\u30A6\u30EB\u30C1\u30A7\u30FC\u30F3",450,42,"#80d8e8",`800 42px ${Mn}`,10)}),s(7,a=>{r(a,"nSLAVE",96,50,"#f4f7ff",'900 50px "Arial Black", Impact, sans-serif',14),r(a,"100% OPEN SOURCE",190,46,"#2ec8e0","800 46px Arial, sans-serif",12),r(a,"BUILD ON ANY CHAIN",262,38,"#c0e8f0","700 38px Arial, sans-serif",8),r(a,"AS LONG AS IT\u2019S BSV",330,40,"#ff9a3a","800 40px Arial, sans-serif",12),r(a,"\u3069\u306E\u30C1\u30A7\u30FC\u30F3\u3067\u3082\u3002BSV\u306A\u3089\u3002",420,34,"#80d8e8",`700 34px ${Mn}`,8)})});return{texture:Gt(t,{aniso:4}),rect:n=>[n%Qi/Qi,1-(Math.floor(n/Qi)+1)/Vc,1/Qi,1/Vc]}}function Wd(i=1){let e=384*i,t=256*i,n=[{c:"#2ec8e0",name:"\u30CD\u30AA\u8336",cans:["#ff4a4a","#e8b040","#5fc8e0","#4a7cd8"]},{c:"#3a8cff",name:"\u30BC\u30ED\u6C34",cans:["#8fd8e8","#d8e8f0","#4a7cd8","#ff9a3a"]},{c:"#ff9a3a",name:"\u96FB\u6C60\u30FB\u9EBA",cans:["#ff8a3a","#ff3b3b","#5fc8e0","#e6e6e6"]}],s=(r,a)=>{r.fillStyle=a?"#000":"#1b1e27",r.fillRect(0,0,e,t),n.forEach((o,c)=>{let l=c*128*i;r.fillStyle=a?o.c:"#222633",r.fillRect(l+8*i,8*i,112*i,30*i),r.fillStyle=a?"#000":o.c,r.font=`900 ${20*i}px ${Mn}`,r.textAlign="center",r.textBaseline="middle",r.fillText(o.name,l+64*i,24*i),r.fillStyle=a?"rgba(255,255,255,0.4)":"#0b0d13",r.fillRect(l+8*i,44*i,112*i,140*i);for(let h=0;h<4;h++)for(let f=0;f<5;f++)r.fillStyle=o.cans[(h+f)%4],r.globalAlpha=a?.9:.55,r.fillRect(l+(14+f*21)*i,(50+h*33)*i,14*i,26*i),r.globalAlpha=1;for(let h=0;h<5;h++)r.fillStyle=a?o.c:"#3a3f4e",r.fillRect(l+(14+h*21)*i,192*i,14*i,8*i);r.fillStyle=a?"#000":"#07080c",r.fillRect(l+20*i,214*i,88*i,28*i)})};return{map:Gt(Ht(e,t,r=>s(r,!1))),em:Gt(Ht(e,t,r=>s(r,!0)))}}function Xd(i,e,t,n,s=1){let r=2048*s,a=512*s,o=Ds(i),c=Ht(r,a,h=>{h.clearRect(0,0,r,a);let f=0;for(;f<r;){let u=(30+o()*90)*s,g=(60+Math.pow(o(),1.6)*380)*s;h.fillStyle=e,h.fillRect(f,a-g,u,g),o()<.35&&h.fillRect(f+u*.2,a-g-40*s*o(),u*.6,40*s),o()<.18&&h.fillRect(f+u*.48,a-g-70*s,3*s,70*s);for(let x=a-g+6*s;x<a-4*s;x+=9*s)for(let m=f+4*s;m<f+u-4*s;m+=7*s)if(o()<n){let p=o();h.fillStyle=p>.93?"#ff6a6a":p>.82?"#ffc890":p>.3?"#8fb8e0":"#5fd0e0",h.globalAlpha=.35+o()*.5,h.fillRect(m,x,3*s,4*s),h.globalAlpha=1}if(o()<.22){let x=["#ff2a46","#2ec8e0","#3a8cff","#2ec8e0"][Math.floor(o()*4)];h.fillStyle=x,h.globalAlpha=.9,h.fillRect(f+u-6*s,a-g+18*s,4*s,(50+o()*100)*s),h.globalAlpha=1}g>300*s&&o()<.7&&(h.fillStyle="#ff3030",h.fillRect(f+u*.5-2*s,a-g-3*s,4*s,4*s)),f+=u+o()*6*s}let d=h.createLinearGradient(0,0,0,a);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,t),h.globalCompositeOperation="source-atop",h.fillStyle=d,h.fillRect(0,0,r,a),h.globalCompositeOperation="source-over"}),l=Gt(c,{repeat:!1});return l.wrapS=cn,l}function qd(i=1){let e=1024*i,t=1024*i,n=16,s=20,r=Ds(77),a=[];for(let c=0;c<n*s;c++)a.push(r());let o=(c,l)=>{c.fillStyle=l?"#000":"#08101e",c.fillRect(0,0,e,t);let h=e/n,f=t/s;for(let d=0;d<s;d++)for(let u=0;u<n;u++){let g=a[d*n+u];if(l)g>.88&&(c.globalAlpha=.25+(g-.88)*2.2,c.fillStyle=g>.97?"#ffc890":"#9fc4e8",c.fillRect(u*h+2,d*f+2,h-4,f*.78),c.globalAlpha=1);else{let x=c.createLinearGradient(u*h,d*f,u*h+h,d*f+f);x.addColorStop(0,"#16294a"),x.addColorStop(1,"#070d1a"),c.fillStyle=x,c.fillRect(u*h+1,d*f+1,h-2,f*.82),c.fillStyle="#0e1626",c.fillRect(u*h,d*f+f*.84,h,f*.16)}}c.strokeStyle=l?"#000":"#1b2740",c.lineWidth=Math.max(1,2*i);for(let d=0;d<=n;d++)c.beginPath(),c.moveTo(d*(e/n),0),c.lineTo(d*(e/n),t),c.stroke();for(let d=0;d<=s;d++)c.beginPath(),c.moveTo(0,d*(t/s)),c.lineTo(e,d*(t/s)),c.stroke()};return{map:Gt(Ht(e,t,c=>o(c,!1)),{repeat:!0,aniso:8}),em:Gt(Ht(e,t,c=>o(c,!0)),{repeat:!0,aniso:8})}}function Yd(i=1){let e=1024*i,t=256*i,n=Ht(e,t,s=>{let r=s.createLinearGradient(0,0,0,t);r.addColorStop(0,"#fff2d6"),r.addColorStop(.55,"#ffd9a0"),r.addColorStop(1,"#a8764a"),s.fillStyle=r,s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.9)";for(let a=0;a<8;a++)s.fillRect(a*(e/8)+e/32,8*i,e/16,6*i);s.fillStyle="rgba(40,24,14,0.55)";for(let a=0;a<=16;a++)s.fillRect(a*(e/16)-i,0,2*i,t);s.fillStyle="rgba(60,30,20,0.75)",s.fillRect(e*.3,t*.62,e*.4,t*.14),s.fillStyle="rgba(20,10,6,0.85)";for(let a of[.12,.22,.4,.58,.77,.9])s.beginPath(),s.arc(e*a,t*.46,t*.04,0,Math.PI*2),s.fill(),s.fillRect(e*a-t*.05,t*.5,t*.1,t*.34);s.fillStyle="#240406",s.fillRect(e*.38,t*.1,e*.24,t*.36),s.fillStyle="#ff3226",s.beginPath(),s.ellipse(e*.5,t*.28,e*.07,t*.1,0,0,Math.PI*2),s.fill(),s.fillStyle="#000",s.fillRect(e*.498,t*.19,e*.004,t*.18)});return Gt(n)}var kc=null;function ao(){return kc||(kc=Gt(Ht(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)}),{srgb:!1}),kc)}var Gc=null;function Zd(){return Gc||(Gc=Gt(Ht(128,128,i=>{i.strokeStyle="#fff",i.lineWidth=5,i.beginPath(),i.arc(64,64,52,0,Math.PI*2),i.stroke()}),{srgb:!1}),Gc)}function $d(i,e=1){let t=Math.round(1024*e),n=Math.round(288*e),s=Ds(i),r=Array.from({length:4},()=>{let o=s();return{kind:o<.5?"shutter":o<.72?"half":o<.88?"door":"blank",tone:26+Math.floor(s()*18),grime:s()}}),a=(o,c)=>{o.fillStyle=c?"#000":"#1c1d21",o.fillRect(0,0,t,n);let l=t/4;r.forEach((h,f)=>{let d=f*l,u=l*.06;if(c){if(h.kind==="half"){let m=o.createLinearGradient(0,n*.72,0,n);m.addColorStop(0,"rgba(255,240,215,0.15)"),m.addColorStop(1,"rgba(255,240,215,0.9)"),o.fillStyle=m,o.fillRect(d+u,n*.72,l-u*2,n*.28)}h.kind==="door"&&(o.fillStyle="#fff",o.fillRect(d+l*.47,n*.08,l*.06,n*.05));return}let g=h.tone;if(o.fillStyle=`rgb(${g},${g},${g+3})`,o.fillRect(d+2,0,l-4,n),h.kind==="shutter"||h.kind==="half"){let m=n*.12,p=h.kind==="half"?n*.72:n;o.fillStyle="#0e0f12",o.fillRect(d+u-4,m-6,l-u*2+8,8);for(let S=m;S<p;S+=7*e)o.fillStyle=`rgb(${g+22},${g+22},${g+24})`,o.fillRect(d+u,S,l-u*2,4*e),o.fillStyle=`rgb(${g+6},${g+6},${g+8})`,o.fillRect(d+u,S+4*e,l-u*2,3*e);o.fillStyle="#08090b",o.fillRect(d+u,p-3,l-u*2,3),h.kind==="half"?(o.fillStyle="#2b2620",o.fillRect(d+u,p,l-u*2,n-p)):(o.fillStyle="#0a0a0c",o.fillRect(d+l*.48,p-16,10,12))}else h.kind==="door"&&(o.fillStyle="#121316",o.fillRect(d+l*.36,n*.18,l*.28,n*.82),o.strokeStyle="#2c2e33",o.lineWidth=2,o.strokeRect(d+l*.38,n*.22,l*.24,n*.36),o.strokeRect(d+l*.38,n*.62,l*.24,n*.32));let x=o.createLinearGradient(0,0,0,n);x.addColorStop(0,`rgba(0,0,0,${.25+h.grime*.3})`),x.addColorStop(.3,"rgba(0,0,0,0)"),x.addColorStop(.85,"rgba(0,0,0,0)"),x.addColorStop(1,`rgba(0,0,0,${.35+h.grime*.3})`),o.fillStyle=x,o.fillRect(d,0,l,n);for(let m=0;m<6;m++)o.fillStyle=`rgba(0,0,0,${.05+s()*.12})`,o.fillRect(d+s()*l,0,1+s()*3,n*(.2+s()*.6));o.fillStyle="#060607",o.fillRect(d,0,3,n)})};return{map:Gt(Ht(t,n,o=>a(o,!1)),{repeat:!0}),em:Gt(Ht(t,n,o=>a(o,!0)),{repeat:!0})}}function Jd(i){return{uT:{value:0},uFog:{value:i.density},uFogColor:{value:new Se(i.color)},uPx:{value:700}}}var Wc="float fadeAt(float d, float u){ return exp(-u*u*d*d*0.6); }";function Kd(i,e){return new st({side:Kt,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog,uFogColor:e.uFogColor},vertexShader:`
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
      }`})}function jd(i,e,t,n,s){return new st({transparent:!0,depthWrite:!1,blending:jt,side:Kt,uniforms:{uMap:{value:i},uRect:{value:new Ct(...e)},uT:t.uT,uFog:t.uFog,uTint:{value:new Se(n)},uPh:{value:s}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform sampler2D uMap; uniform vec4 uRect; uniform float uT, uFog, uPh; uniform vec3 uTint;
      varying vec2 vUv; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      ${Wc}
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
      }`})}function Qd(i,e,t){return new st({transparent:!0,depthWrite:!1,blending:jt,side:Kt,uniforms:{uT:i.uT,uFog:i.uFog,uA:{value:new Se(e)},uB:{value:new Se(t)}},vertexShader:`
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
      ${Wc}
      void main(){
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 1.6);
        float bands = 0.55 + 0.45 * sin(vY * 3.2 - uT * 2.4);
        float fine = 0.7 + 0.3 * sin(vY * 38.0 + uT * 14.0);
        float climb = smoothstep(0.92, 1.0, sin(vY * 0.35 - uT * 1.1));
        vec3 c = mix(uA, uB, clamp(vY * 0.018 - 0.2 + 0.25 * sin(uT * 0.5), 0.0, 1.0));
        float k = (0.12 + rim * 1.15) * bands * fine + climb * 0.9;
        gl_FragColor = vec4(c * k * 3.0 * fadeAt(vD, uFog * 0.5), 1.0);
      }`})}function Xc(i,e,t,n,s){return new st({transparent:!0,depthWrite:!1,blending:jt,side:Kt,uniforms:{uC:{value:new Se(i)},uK:{value:e},uP:{value:t},uInv:{value:n?1:0},uT:s.uT,uFog:s.uFog},vertexShader:`
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
      ${Wc}
      void main(){
        float f = abs(dot(normalize(vN), normalize(vV)));
        float ax = pow(clamp(mix(vY, 1.0 - vY, uInv), 0.0, 1.0), uP);
        float dust = 0.82 + 0.18 * sin(vW.y * 0.7 + vW.x * 0.3 + uT * 0.8) * sin(vW.z * 0.4 - uT * 0.5);
        float edge = smoothstep(0.0, 0.7, f);
        float near = smoothstep(0.4, 3.0, vD);
        gl_FragColor = vec4(uC * uK * pow(f, 1.4) * edge * ax * dust * near * fadeAt(vD, uFog * 0.7), 1.0);
      }`})}function ep(i,e){return new st({transparent:!0,depthWrite:!1,blending:jt,uniforms:{uT:i.uT,uFog:i.uFog,uC:{value:new Se(e)}},vertexShader:`
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
      }`,fragmentShader:"uniform vec3 uC; uniform float uFog; varying float vA; varying float vD; void main(){ gl_FragColor = vec4(uC * vA * 0.5 * exp(-uFog*uFog*vD*vD*0.5), 1.0); }"})}function tp(i,e){return new st({transparent:!0,depthWrite:!1,blending:jt,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog},vertexShader:`
      attribute vec2 aPh; uniform float uT; varying vec2 vUv; varying float vL; varying float vD;
      void main(){
        float life = fract(uT * aPh.y + aPh.x);
        vL = life; vUv = uv;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position * (0.08 + life * 0.55), 1.0);
        vD = -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform float uFog; varying vec2 vUv; varying float vL; varying float vD; void main(){ float a = texture2D(uMap, vUv).r * pow(1.0 - vL, 2.0) * smoothstep(0.0, 0.08, vL); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * a * 0.55 * exp(-uFog*uFog*vD*vD*0.6), 1.0); }"})}function np(i,e){return new st({transparent:!0,depthWrite:!1,blending:jt,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog,uPx:e.uPx},vertexShader:`
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
      }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vK; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vC * a * vK, 1.0); }"})}function ip(i,e){return new st({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog,uPx:e.uPx,uC:{value:new Se("#6a94ac")}},vertexShader:`
      attribute vec3 aVent; attribute vec2 aSeed; uniform float uT, uPx, uFog; varying float vA; varying vec3 vWp;
      void main(){
        float life = fract(uT * (0.18 + aSeed.y * 0.12) + aSeed.x);
        vec3 p = aVent + vec3(sin(aSeed.x * 40.0 + life * 3.0) * life * 1.1, life * 5.0, cos(aSeed.x * 23.0) * life * 0.8);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = max(0.5, -mv.z);
        vA = sin(life * 3.14159) * 0.09 * exp(-uFog * uFog * d * d * 0.5); vWp = p;
        gl_PointSize = clamp((0.9 + life * 3.6) * uPx / d, 1.0, 140.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform vec3 uC; varying float vA; varying vec3 vWp; void main(){ float a = texture2D(uMap, gl_PointCoord).r; vec3 tint = uC + vec3(0.02, 0.1, 0.16) * smoothstep(-2.0, 2.0, vWp.x) ; gl_FragColor = vec4(tint * 0.7, a * vA); }"})}function sp(i,e,t){return new st({transparent:!0,depthWrite:!1,side:Kt,uniforms:{uT:i.uT,uC:{value:new Se(e)},uK:{value:t}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uK; uniform vec3 uC; varying vec2 vUv; varying float vD;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vUv * vec2(7.0, 2.0) + vec2(uT * 0.03, uT * 0.01);
        float n = vn(p) * 0.6 + vn(p * 2.3 + 7.0) * 0.3 + vn(p * 5.1) * 0.1;
        float a = smoothstep(0.35, 0.85, n) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y) * smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        a *= smoothstep(10.0, 34.0, vD);
        gl_FragColor = vec4(uC, a * uK);
      }`})}function rp(i,e){i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},i.customProgramCacheKey=()=>"wetground-v1"}function ap(i){return new st({transparent:!0,depthWrite:!1,blending:jt,uniforms:{uT:i.uT,uFog:i.uFog,uLook:{value:new ie},uK:{value:2.1}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uFog, uK; uniform vec2 uLook; varying vec2 vUv; varying float vD;
      ${Wc}
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
      }`})}function op(i){let e=Qd(i,"#2ec8e0","#ff2a46"),t=[],n=x=>(t.push(x),x),s=(x,m,p=0,S=0,M=0)=>{let b=new qe(x,e);return b.position.set(p,S,M),b.userData.noAO=!0,m.add(b),b},r=new ln,a=new ln;r.add(a);let o=n(new Ta([new ie(.15,1),new ie(.2,.88),new ie(.26,.62),new ie(.34,.36),new ie(.4,.2)],28));s(o,a);for(let x of[-1,1])s(n(new Wi(.05,.2,4,10)),a,x*.08,.1,0);s(n(new Wi(.13,.3,6,14)),a,0,1.2,0).scale.set(1.15,1,.8);let c=s(n(new qi(.17,.045,8,28)),a,0,1.02,0);c.rotation.x=Math.PI/2,s(n(new mt(.26,.2,.06)),a,0,1.02,-.2),s(n(new sn(.045,.05,.1,10)),a,0,1.43,0);let l=new ln;l.position.set(0,1.56,0),a.add(l),s(n(new Kn(.105,18,14)),l).scale.set(.95,1.08,1),s(n(new Kn(.125,16,12)),l,0,.02,-.03).scale.set(1,1,1.05),s(n(new Kn(.07,12,10)),l,0,.16,-.02),s(n(new ps(.1,.55,12,1,!0)),l,0,-.26,-.1);let h=s(n(new qi(.34,.01,6,48)),l,0,.02,-.22),f=[];for(let x of[-1,1]){let m=new ln;m.position.set(x*.2,1.34,0),a.add(m),s(n(new Wi(.04,.26,4,8)),m,0,-.17,0);let p=new ln;p.position.set(0,-.34,0),m.add(p),s(n(new Wi(.035,.24,4,8)),p,0,-.15,0),s(n(new Pt(.22,.42)),p,x*.05,-.2,0),f.push({sh:m,el:p})}let d=s(n(new qi(.55,.012,6,56)),r,0,.01,0);d.rotation.x=Math.PI/2;let u=s(n(new qi(.4,.008,6,48)),r,0,.01,0);return u.rotation.x=Math.PI/2,{group:r,update:x=>{a.rotation.y=Math.sin(x*.25)*.7,a.rotation.z=Math.sin(x*.9)*.025,a.position.y=Math.sin(x*1.3)*.015,l.rotation.z=Math.sin(x*.7+1)*.07,l.rotation.y=Math.sin(x*.4)*.25,h.rotation.z=x*.6;let[m,p]=f;p.sh.rotation.z=-2.4+Math.sin(x*.9)*.1,p.el.rotation.z=-.5+Math.sin(x*3.2)*.55,m.sh.rotation.z=.35+Math.sin(x*.7)*.05,m.el.rotation.z=.5,d.scale.setScalar(1+Math.sin(x*1.5)*.04),u.rotation.z=x*.8},dispose:()=>{t.forEach(x=>x.dispose()),e.dispose()}}}var Q_={z:-70,w:34,h:56,d:26,cols:8,rows:10,winY0:12},lp=1.62,wn=(i,e,t,n,s,r,a,o)=>{let c=new mt(e,t,n);c.translate(s,r,a);let l=c.attributes.position.count,h=new Float32Array(l*3);for(let f=0;f<l;f++)h.set(o,f*3);c.setAttribute("color",new Mt(h,3)),i.push(c)},qc=i=>{let e=yn(i.map(t=>t.index?t.toNonIndexed():t),!1);return i.forEach(t=>t.dispose()),e},Yc=(i,e=2.4)=>new kt({color:new Se(i).multiplyScalar(e),toneMapped:!1}),It=27,Zc=51,es=["#2ec8e0","#2ec8e0","#3a8cff","#2ec8e0","#3a8cff","#ff2a46","#2ec8e0","#4da3ff"];function cp({renderer:i,scene:e,high:t,look:n,vexvoid:s=!1}){let r=t?1:.5,a=(v,A)=>t?v:A,o=new ln,c=[],l=v=>(c.push(v),v),h=Ds(2048),f=(v,A)=>v+(A-v)*h(),d=v=>Math.floor(h()*v),u=Q_,g=new ds;g.add(new qe(new Kn(50,24,16),new st({side:rn,vertexShader:"varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 p; void main(){ float h = normalize(p).y; vec3 lo = vec3(0.05,0.10,0.16); vec3 hi = vec3(0.01,0.02,0.07); gl_FragColor = vec4(mix(lo, hi, smoothstep(-0.1,0.7,h)),1.); }"})));let x=(v,A,L,H,z,Z,te)=>{let j=new qe(new Pt(L,H),new kt({color:new Se(v).multiplyScalar(A),side:Kt,toneMapped:!1}));j.position.set(z,Z,te),j.lookAt(0,0,0),g.add(j)};x("#ff2a2a",7,30,4,0,16,-40),x("#27c8e0",5,34,3,-30,10,-10),x("#ffa24a",3,30,3,30,12,-6),x("#2ec8e0",4,20,5,18,24,20),x("#ff2a46",3,8,16,-34,18,-26),x("#2ec8e0",5,6,20,34,20,-30),x("#3a8cff",4,6,12,-20,14,-44),x("#ffffff",3,14,2,-8,32,-12);let m=new Er(i),p=m.fromScene(g,.03).texture;m.dispose(),g.traverse(v=>{let A=v;A.isMesh&&(A.geometry.dispose(),A.material.dispose())}),e.environment=p,e.environmentIntensity=.85,e.background=new Se("#05060f");let S=new ha("#071420",.0066);e.fog=S;let M=Jd(S),b=l(new st({side:rn,depthWrite:!1,fog:!1,uniforms:{uT:M.uT},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
        }`})),w=new qe(l(new Kn(400,32,20)),b);w.renderOrder=-10,w.userData.noAO=!0,o.add(w),o.add(new Pa("#4f78b8","#150a14",.38));let R=new La("#78a8ff",.9);if(R.position.set(-40,70,10),R.target.position.set(0,0,-40),t){R.castShadow=!0,R.shadow.mapSize.set(2048,2048);let v=R.shadow.camera;v.left=-50,v.right=50,v.top=60,v.bottom=-60,v.near=10,v.far=200,R.shadow.bias=-5e-4,R.shadow.normalBias=.05}o.add(R,R.target);let P=new Ii("#ff2418",t?500:300,90,1.6);P.position.set(0,u.h-4,u.z+14),o.add(P);let N=new Ii("#ffc27a",t?160:100,34,1.7);N.position.set(0,5,u.z+9),o.add(N);let y=new Ii("#ffd27a",0,26,1.6);o.add(y);let E=n.material("concrete_floor_02",[60,120],"#3b404c",.35);E.roughness=.34,E.envMapIntensity=1.6,l(E);let U={tReflect:{value:null},uReflMat:{value:new it},uReflOn:{value:0},uT:M.uT,uWet:{value:1}};rp(E,U);let F=new qe(l(new Pt(200,400)),E);F.rotation.x=-Math.PI/2,F.position.set(0,0,-120),F.receiveShadow=!0,o.add(F);let V=null,$=new it,k=new ie;t&&(i.getDrawingBufferSize(k),V=new so(new Pt(2,2),{textureWidth:Math.max(64,Math.round(k.x*.5)),textureHeight:Math.max(64,Math.round(k.y*.5)),clipBias:.002,multisample:0}),V.rotation.x=-Math.PI/2,V.updateMatrixWorld(!0),$.copy(V.matrixWorld).invert(),U.tReflect.value=V.getRenderTarget().texture,U.uReflOn.value=1);let W=l(n.material("large_floor_tiles_02",[8,90],"#5a5d6a",.1));W.roughness=.45,W.envMapIntensity=1.2;for(let v of[-1,1]){let A=new qe(l(new mt(11,.25,400)),W);A.position.set(v*21.5,.12,-120),A.receiveShadow=!0,o.add(A)}let X=[],ne=(v,A,L,H,z=.03)=>{let Z=new Pt(v,A);Z.rotateX(-Math.PI/2),Z.translate(L,z,H),X.push(Z)};for(let v=-4;v>-300;v-=9)ne(.25,4,0,v);for(let v of[-1,1])ne(.2,300,v*15.4,-150);for(let v of[-9,-86,-150])for(let A=-6;A<=6;A++)ne(.7,3.6,A*1.9,v);let ce=l(new Tt({color:"#c9ccd6",roughness:.4,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));o.add(new qe(l(yn(X,!1)),ce)),X.forEach(v=>v.dispose());let xe=l(Gt(Ht(256,512,v=>{v.fillStyle="#e8eaf2",v.font=`900 220px ${Mn}`,v.textAlign="center",v.textBaseline="middle",["\u6B62","\u307E","\u308C"].forEach((A,L)=>v.fillText(A,128,90+L*165))}))),ve=new qe(l(new Pt(3.4,6.6)),l(new Tt({map:xe,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1})));ve.rotation.x=-Math.PI/2,ve.position.set(-7,.035,-17),o.add(ve);let Fe=(v,A,L,H,z=!1)=>{let Z=new En(l(v),A,Math.max(1,L.length));return Z.count=L.length,L.forEach((te,j)=>Z.setMatrixAt(j,te)),H&&H.forEach((te,j)=>Z.setColorAt(j,te)),Z.instanceMatrix.needsUpdate=!0,Z.instanceColor&&(Z.instanceColor.needsUpdate=!0),Z.frustumCulled=!1,Z.castShadow=z,Z.receiveShadow=!0,o.add(Z),Z},Ge=new D(0,1,0),Ze=(v,A,L,H=1,z=1,Z=1,te=0)=>new it().compose(new D(v,A,L),new kn().setFromAxisAngle(Ge,te),new D(H,z,Z)),nt=[],Q=(v,A,L,H,z,Z=0,te=1)=>nt.push({p:new D(v,A,L),c:new Se(H).multiplyScalar(te),s:z,ph:h(),mode:Z}),re=[],Me=(v,A,L,H,z,Z=1,te=.03)=>re.push({p:new D(v,te,A),sx:L,sz:H,c:new Se(z).multiplyScalar(Z*.22)}),ze=["office","resi","glass","old"],Pe=ze.map((v,A)=>Hd(v,7+A*29,r));Pe.forEach(v=>c.push(v.map,v.em));let ut={office:[.5,.35,1.1,1],resi:[.75,.15,1,.7],glass:[.22,.8,1.15,1.5],old:[.8,.1,1,.6]},gt={};ze.forEach((v,A)=>{let[L,H,z,Z]=ut[v];gt[v]=l(new Tt({map:Pe[A].map,emissiveMap:Pe[A].em,emissive:"#ffffff",emissiveIntensity:z,roughness:L,metalness:H,envMapIntensity:Z}))});let Je=s?$d(5,r):Vd(5,r);c.push(Je.map,Je.em);let ae=l(new Tt({map:Je.map,emissiveMap:Je.em,emissive:"#ffffff",emissiveIntensity:s?2.2:1.5,roughness:s?.62:.55,metalness:s?.35:.2})),fe=l(new Tt({color:"#232733",roughness:.75,metalness:.25})),le=l(new Tt({color:"#0e1018",roughness:.9,metalness:.1})),Re=l(new Tt({color:"#0c0e14",roughness:.55,metalness:.85})),I=l(new Tt({color:"#2a2d38",roughness:.85,metalness:.05})),Ee={office:[],resi:[],glass:[],old:[],shop:[],trim:[],roof:[],iron:[],concrete:[]},ge=(v,A,L,H,z,Z,te,j=0,De=0,Xe=0,at=0)=>{let Wt=new mt(L-A,z-H,te-Z);if(Wt.translate((A+L)/2,(H+z)/2,(Z+te)/2),j>0){let Nt=Wt.attributes.position,Ft=Wt.attributes.normal,Ut=Wt.attributes.uv;for(let dt=0;dt<Nt.count;dt++)Math.abs(Ft.getX(dt))>.5?Ut.setXY(dt,Nt.getZ(dt)/j+Xe,Nt.getY(dt)/De+at):Math.abs(Ft.getZ(dt))>.5?Ut.setXY(dt,Nt.getX(dt)/j+Xe,Nt.getY(dt)/De+at):Ut.setXY(dt,Nt.getX(dt)/j,Nt.getZ(dt)/j)}v.push(Wt)},Ve=[],de=[],C=[],_=[],O=(v,A,L,H,z,Z)=>{let te=new Se(Z).multiplyScalar(3.2),j=.16,De=[[v,A,H,H+j],[v,A,L-j,L],[v,v+j,H,L],[A-j,A,H,L]];for(let[Xe,at,Wt,Nt]of De){let Ft=new mt(at-Xe,.16,Nt-Wt);Ft.translate((Xe+at)/2,z,(Wt+Nt)/2),_.push({g:Ft,c:te})}},ee=(v,A,L,H,z)=>{let Z=new mt(.16,H-L,.16);Z.translate(v,(L+H)/2,A),_.push({g:Z,c:new Se(z).multiplyScalar(3)})},se=(v,A,L,H,z,Z,te,j)=>{let De=h()*4,Xe=(wt,on,zs,ti,Xn)=>{let zn=v>0?wt:-te,ah=v>0?te:-wt;ge(Ee[z],zn,ah,on,zs,Xn,ti,zd,Iu,De,-on/Iu)},at=(wt,on,zs,ti,Xn,zn)=>{let ah=v>0?wt-zn:-te-zn,Pp=v>0?te+zn:-wt+zn;ge(Ee.trim,ah,Pp,on,zs,Xn-zn,ti+zn)},Wt=j?4.5:0;if(j){let wt=v>0?Z:-te,on=v>0?te:-Z;ge(Ee.shop,wt,on,0,Wt,L,A,Du.w,Du.h,h()*4,0),at(Z,Wt,Wt+.35,A,L,.7)}let Nt=Wt+(j?.35:0),Ft=H>36?Math.max(Nt+8,H*.6):H;Xe(Z,Nt,Ft,A,L);for(let wt=Nt+14.4;wt<Ft-2;wt+=14.4)at(Z,wt,wt+.22,A,L,.14);let Ut=Ft,dt=[A,L],On=Z;if(H>36){at(Z,Ft,Ft+.4,A,L,.3);let wt=H>52?H*.85:H;On=Z+1.6,dt=[A-.8,L+.8],Xe(On,Ft+.4,wt,dt[0],dt[1]),Ut=wt,H>52&&(at(On,wt,wt+.4,dt[0],dt[1],.3),On=Z+3.6,dt=[A-2.2,L+2.2],Xe(On,wt+.4,H,dt[0],dt[1]),Ut=H)}if(at(On,Ut,Ut+.55,dt[0],dt[1],.22),Ve.push({xa:v>0?On:-te,xb:v>0?te:-On,za:dt[0],zb:dt[1],y:Ut+.55,kind:z,h:Ut}),!j)return;let rh=v>0?On:-te,Cp=v>0?te:-On;if(h()<.8&&O(rh,Cp,dt[0],dt[1],Ut+.65,es[d(es.length)]),H>30&&h()<.7){let wt=es[d(es.length)],on=v*(It+.12);ee(on,A-.1,Nt,Math.min(Ft,H*.75),wt),ee(on,L+.1,Nt,Math.min(Ft,H*.75),wt)}if(de.push({sx:v,za:A,zb:L,h:H,h1:Ft,kind:z}),(z==="resi"||z==="old")&&A-L>13&&h()<.8){let wt=(A+L)/2+f(-2,2),on=v*(Z-.55),zs=Math.min(5,Math.floor((Ft-Nt-3)/3.6));for(let ti=0;ti<zs;ti++){let Xn=Nt+1.4+ti*3.6;if(ge(Ee.iron,on-.55,on+.55,Xn,Xn+.08,wt-1.6,wt+1.6),ge(Ee.iron,on-v*.55-.03,on-v*.55+.03,Xn,Xn+.95,wt-1.6,wt+1.6),ge(Ee.iron,on-.55,on+.55,Xn+.9,Xn+.95,wt-1.6,wt+1.6),ti<zs-1){let zn=new mt(.8,.07,2.4);zn.rotateX((ti%2?1:-1)*Math.atan2(3.6,2.4)),zn.translate(on,Xn+1.8,wt+(ti%2?-.1:.1)),Ee.iron.push(zn)}}}};for(let v of[-1,1]){let A=-3.5,L=0,H=!1;for(;A>-200;){let Z=f(13,21),te=A,j=A-Z,De=f(22,62),Xe=ze[d(4)];v<0&&!H&&j<-70?(j=te-20,De=32,Xe="office",H=!0):te<-26&&te>-72&&De>40&&(De=f(30,40)),se(v,te,j,De,Xe,It,Zc,!0),A=j;let at=L%3===2&&A>-150?5.4:f(1.2,2.6);at>4&&C.push({sx:v,z:A-at/2}),A-=at,L++}let z=-2;for(;z>-210;){let Z=f(18,30);se(v,z,z-Z,f(70,150),h()<.6?"glass":"office",Zc,Zc+26,!1),z-=Z}}let Y=-20,be=15.2,he=21,ye=9.4;{ge(Ee.concrete,Y-4.7,Y+4.7,be,be+1.3,-230,14),ge(Ee.concrete,Y-4.7,Y-4.5,be+1.3,be+2.4,-230,14),ge(Ee.concrete,Y+4.5,Y+4.7,be+1.3,be+2.4,-230,14);for(let L=4;L>-220;L-=20)ge(Ee.concrete,Y-.9,Y+.9,0,be,L-1.3,L+1.3),ge(Ee.concrete,Y-3.6,Y+3.6,be-1,be,L-1.6,L+1.6);for(let L=0;L>-220;L-=10)ge(Ee.iron,Y-4.4,Y-4.3,be+1.3,be+6.2,L-.05,L+.05),Q(Y-3.9,be+6.2,L,"#ffb35a",1.1,0,1),Q(Y-3,be-.3,L-5,"#ff9a3a",.9,0,.8),Q(Y+3,be-.3,L-5,"#ff9a3a",.9,0,.8);ge(Ee.concrete,he-2.6,he+2.6,ye-.5,ye+.3,-230,14),ge(Ee.concrete,he-2.6,he-2.45,ye+.3,ye+1.15,-230,14),ge(Ee.concrete,he+2.45,he+2.6,ye+.3,ye+1.15,-230,14),ge(Ee.iron,he-.95,he-.85,ye+.3,ye+.42,-230,14),ge(Ee.iron,he+.85,he+.95,ye+.3,ye+.42,-230,14),ge(Ee.iron,he-.02,he+.02,ye+4.6,ye+4.64,-230,14);for(let L=0;L>-220;L-=14)ge(Ee.concrete,he-.7,he+.7,0,ye-.5,L-1.8,L+1.8),ge(Ee.iron,he+2.3-.07,he+2.3+.07,ye+.3,ye+4.6,L-.07,L+.07),Q(he,ye-.8,L,"#7ee8ff",1,2,.8)}{let v=[];for(let A of[Y-2.2,Y+2.2])for(let L=12;L>-230;L-=3){let H=new Pt(.12,1.4);H.rotateX(-Math.PI/2),H.translate(A,be+1.32,L),v.push(H)}o.add(new qe(l(yn(v,!1)),l(Yc("#bcd8ec",.9)))),v.forEach(A=>A.dispose())}let $e={...gt,shop:ae,trim:fe,roof:le,iron:Re,concrete:I};if(Object.keys(Ee).forEach(v=>{if(!Ee[v].length)return;let A=l(yn(Ee[v],!1));Ee[v].forEach(H=>H.dispose());let L=new qe(A,$e[v]);L.castShadow=t&&v!=="iron",L.receiveShadow=!0,o.add(L)}),_.length){let v=_.map(({g:L,c:H})=>{let z=L.attributes.position.count,Z=new Float32Array(z*3);for(let te=0;te<z;te++)Z.set([H.r,H.g,H.b],te*3);return L.setAttribute("color",new Mt(Z,3)),L}),A=l(yn(v,!1));v.forEach(L=>L.dispose()),o.add(new qe(A,l(new kt({vertexColors:!0,toneMapped:!1,fog:!0}))))}let ue=[],Te=[],Be=[];for(let v of Ve){if(v.xb-v.xa<4||v.za-v.zb<4)continue;let A=()=>f(v.xa+1.5,v.xb-1.5),L=()=>f(v.zb+1.5,v.za-1.5);(v.kind==="resi"||v.kind==="old")&&h()<.5&&ue.push(Ze(A(),v.y,L(),1,f(.8,1.2),1,h()*6));let H=Math.floor(f(1,a(6,4)));for(let z=0;z<H;z++)Te.push(Ze(A(),v.y,L(),f(.8,2.2),f(.7,1.4),f(.8,2),h()*3));if(h()<.7){let z=f(6,v.h>70?26:16),Z=A(),te=L();Be.push(Ze(Z,v.y+z/2,te,1,z,1)),v.h>28&&Q(Z,v.y+z+.3,te,"#ff2a1a",1.6,1,2.5)}}let He=(()=>{let v=[],A=new sn(1.15,1.15,2.4,14);A.translate(0,2.6,0);let L=new ps(1.3,.8,14);L.translate(0,4.2,0),v.push(A,L);for(let[z,Z]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]]){let te=new sn(.06,.06,1.5,4);te.translate(z,.75,Z),v.push(te)}let H=yn(v,!1);return v.forEach(z=>z.dispose()),H})();ue.length&&Fe(He,l(new Tt({color:"#3a3430",roughness:.7,metalness:.5})),ue),Te.length&&Fe(new mt(1,1,1).translate(0,.5,0),l(new Tt({color:"#4a505e",roughness:.65,metalness:.4})),Te),Be.length&&Fe(new sn(.05,.1,1,5),l(new Tt({color:"#15171d",roughness:.5,metalness:.9})),Be);let _e=[],tt=()=>_e.push({c0:o.children.length,g0:nt.length,c1:-1,g1:-1}),B=()=>{let v=_e[_e.length-1];v.c1=o.children.length,v.g1=nt.length};s&&tt();let we=kd(r);c.push(we.texture);let pe=[],Ue=(v,A,L,H,z,Z,te)=>{let j=h(),De=j<.5?0:j<.7?1:j<.8?2:j<.92?3:4,Xe=(te?2.2:1.8)*z,at=Xe*4;pe.push({m:Ze(A,L,H,Xe,at,1,Z),rect:we.rect(v),mode:De,ph:h(),spd:f(1,2.6)}),(t||h()<.5)&&Q(A-Math.sin(Z)*.1,L,H+Math.cos(Z)*.15,ro[v].c,at*.24,0,.14)},me=[8,9,10,11,12];for(let v of de){let A=Math.floor((v.za-v.zb)/a(6,7.5))+1;for(let L=0;L<A;L++){let H=h()<.3?me[d(me.length)]:d(ro.length),z=h()<.45,Z=f(.7,1.5),te=Math.min(v.h1-2,30),j=(z?2.2:1.8)*Z*4;if(te<10)continue;let De=Math.min(te-j/2,f(6+j/2,te)),Xe=f(v.zb+1.4,v.za-1.4);z?Ue(H,v.sx*(It-.14),De,Xe,Z,v.sx>0?-Math.PI/2:Math.PI/2,!0):Ue(H,v.sx*(It-.95),De,Xe,Z,0,!1)}}for(let v of C)Ue(d(ro.length),v.sx*(It+3),7.5+h()*3,v.z+f(-1.4,1.4),1.3,0,!1);{let v=pe.length,A=new Pt(1,1),L=new Float32Array(v*4),H=new Float32Array(v*3);pe.forEach((Z,te)=>{L.set(Z.rect,te*4),H.set([Z.ph,Z.mode,Z.spd],te*3)}),A.setAttribute("aRect",new oi(L,4)),A.setAttribute("aAnim",new oi(H,3));let z=new En(l(A),l(Kd(we.texture,M)),v);pe.forEach((Z,te)=>z.setMatrixAt(te,Z.m)),z.instanceMatrix.needsUpdate=!0,z.frustumCulled=!1,o.add(z)}let oe=Gd(r);c.push(oe.texture);let Ae=l(new Pt(1,1)),je=(v,A,L,H,z,Z,te)=>{let j=new qe(Ae,l(jd(oe.texture,oe.rect(v),M,te,h()*4)));j.position.set(A,L,H),j.scale.set(z,z,1),j.rotation.y=Z,j.userData.noAO=!0,o.add(j)};{let v=de.filter(z=>z.sx>0&&z.za<-18&&z.za>-150&&z.h1>18),A=de.filter(z=>z.sx<0&&z.za<-18&&z.za>-150&&z.h1>18),L=(z,Z)=>z[Math.min(z.length-1,Z)];if(v.length>3){let[z,Z,te]=[L(v,1),L(v,3),L(v,5)];je(1,It-.4,Math.min(z.h1-6,17),(z.za+z.zb)/2,11,-Math.PI/2+.2,"#e8f4ff"),je(2,It-.4,Math.min(Z.h1-6,24),(Z.za+Z.zb)/2,10,-Math.PI/2+.25,"#e6f1ff"),je(4,It-.4,Math.min(te.h1-7,16),(te.za+te.zb)/2,11,-Math.PI/2+.3,"#ffffff")}if(A.length>3){let[z,Z]=[L(A,2),L(A,4)];je(3,-It+.4,Math.min(z.h1-6,15),(z.za+z.zb)/2,11,Math.PI/2-.2,"#e8f4ff"),je(7,-It+.4,Math.min(Z.h1-6,22),(Z.za+Z.zb)/2,10,Math.PI/2-.25,"#e8f4ff")}Ve.filter(z=>z.xa>It&&z.h>80&&z.zb<-25&&z.za>-150).slice(0,3).forEach((z,Z)=>je([5,6,0][Z],(z.xa+z.xb)/2-10,z.y+9,z.za-2,22,-.4,"#ffffff"))}let vt=Ve.filter(v=>v.xb>-40&&v.xb<-20&&v.za>-96&&v.zb<-68).sort((v,A)=>Math.abs((v.za+v.zb)/2+82)-Math.abs((A.za+A.zb)/2+82))[0]??Ve.find(v=>v.xb<0),ft=op(M);ft.group.scale.setScalar(24/1.8),ft.group.position.set((vt.xa+vt.xb)/2+2,vt.y,(vt.za+vt.zb)/2),o.add(ft.group),c.push(ft);let An=new qe(l(new sn(7,3,13,20,1,!0)),l(Xc("#35e8ff",.3,1,!0,M)));An.position.copy(ft.group.position).add(new D(0,6.5,0)),An.userData.noAO=!0,o.add(An),Q(ft.group.position.x,vt.y+1,ft.group.position.z,"#35e8ff",14,0,.55);let Pn=6,Ui=9,oo=(()=>{let v=new Xi,A=1.5,L=.7;v.moveTo(-A,-1.2),v.lineTo(A,-1.2),v.lineTo(A,1.55-L),v.quadraticCurveTo(A,1.55,A-L,1.55),v.lineTo(-A+L,1.55),v.quadraticCurveTo(-A,1.55,-A,1.55-L),v.closePath();let H=new gs(v,{depth:Ui-.5,bevelEnabled:!0,bevelSize:.12,bevelThickness:.25,bevelSegments:2,curveSegments:6});H.translate(0,0,-(Ui-.5)/2);let z=new mt(2.5,.4,Ui-1.2);z.translate(0,-1.4,0);let Z=[H.index?H.toNonIndexed():H.clone(),z.index?z.toNonIndexed():z.clone()];H.dispose(),z.dispose();let te=yn(Z,!1);return Z.forEach(j=>j.dispose()),te})(),Rr=(()=>{let v=[],A=[1.5,1.35,1];for(let L of[-1,1]){for(let H=0;H<6;H++)wn(v,.05,.85,.95,L*1.63,.45,-3.3+H*1.32,A);wn(v,.05,.08,Ui-.6,L*1.64,-.95,0,[.3,2.2,2.8]),wn(v,.05,.05,Ui-.8,L*1.62,1.08,0,[.6,.9,1.3]);for(let H of[-4.1,4.1])wn(v,.06,1.9,.06,L*1.63,.1,H,[.9,1.1,1.4])}return wn(v,.5,.06,.5,0,1.6,-3.6,[3,.25,.25]),wn(v,.5,.06,.5,0,1.6,3.6,[3,.25,.25]),qc(v)})(),Ni=new En(l(oo),l(new Tt({color:"#d4d8e2",roughness:.28,metalness:.75,envMapIntensity:1.7})),Pn),ts=new En(l(Rr),l(new kt({vertexColors:!0,toneMapped:!1})),Pn);ts.instanceMatrix=Ni.instanceMatrix,Ni.instanceMatrix.setUsage(Rc),Ni.frustumCulled=ts.frustumCulled=!1,o.add(Ni,ts);let Ls=(()=>{let v=[];wn(v,2.4,.12,.08,0,.95,0,[3,3,2.7]);for(let A of[-1,1])wn(v,.55,.22,.08,A*.95,-.7,0,[3.2,3.1,2.8]);return wn(v,2,.9,.04,0,.35,-.02,[.05,.25,.35]),new qe(l(qc(v)),ts.material)})();o.add(Ls),s&&B();let mi=l(new Tt({color:"#1b1e25",roughness:.5,metalness:.8})),Cr=l(Yc("#ffcf8a",3)),Pr=[],Us=[],Fi=[],Ns=[],gi=[];for(let v=0;v<10;v++)for(let A of[-1,1]){let L=-10-v*14-(A>0?7:0),H=new sn(.12,.17,8,8);H.translate(A*16.5,4,L);let z=new mt(2.6,.15,.15);z.translate(A*15.3,8,L),Fi.push(H,z);let Z=new mt(.9,.12,.4);if(Z.translate(A*14.3,7.9,L),Ns.push(Z),Us.push(new D(A*16.5,8.2,L)),gi.push(new D(A*14.3,7.4,L)),Q(A*14.3,7.85,L,"#ffb860",1,2,.6),v<3){let te=new Ii("#ffb35a",60,26,1.7);te.position.set(A*14.3,7.4,L),o.add(te),Pr.push(te)}}o.add(new qe(l(yn(Fi,!1)),mi),new qe(l(yn(Ns,!1)),Cr)),Fi.forEach(v=>v.dispose()),Ns.forEach(v=>v.dispose());let Ir=new sn(.25,4.6,7.4,16,1,!0);Ir.translate(0,3.7,0);let ns=new En(l(Ir),l(Xc("#ffb460",.16,1.2,!1,M)),gi.length);gi.forEach((v,A)=>ns.setMatrixAt(A,Ze(v.x,.02,v.z))),ns.userData.noAO=!0,ns.frustumCulled=!1,o.add(ns),gi.forEach(v=>Me(v.x*.8,v.z,11,11,"#ffa550",1));let Dr=[],lo=[],co=(v,A,L,H=!1)=>{let z=[];for(let te=0;te<=8;te++){let j=te/8;z.push(new D().lerpVectors(v,A,j).add(new D(0,-L*4*j*(1-j),0)))}let Z=new gr(z);Dr.push(new wa(Z,14,.03,3,!1)),H&&lo.push(Z)},Lr=Us.filter(v=>v.x<0).sort((v,A)=>A.z-v.z),Ur=Us.filter(v=>v.x>0).sort((v,A)=>A.z-v.z);for(let v of[Lr,Ur])for(let A=0;A<v.length-1;A++)for(let L of[0,-.3,.3])co(v[A].clone().add(new D(0,L,0)),v[A+1].clone().add(new D(0,L*.8,0)),.7+L*.3);for(let v=0;v<Math.min(Lr.length,Ur.length);v+=2){let A=Lr[v],L=Ur.reduce((H,z)=>Math.abs(z.z-A.z)<Math.abs(H.z-A.z)?z:H);co(A.clone(),L.clone().setZ(A.z-1.5),1.6,v%4===0)}o.add(new qe(l(yn(Dr,!1)),l(new Tt({color:"#07080b",roughness:.6,metalness:.2})))),Dr.forEach(v=>v.dispose());let ho=[],T=[],G=["#ff3a1a","#ff7a22","#ff3a1a","#ff9a3a"],K=(v,A,L,H=1)=>{let z=G[d(G.length)];ho.push(Ze(v,A,L,H,H,H)),T.push(new Se(z).multiplyScalar(1.5)),Q(v,A,L,z,.5*H,3,.25)};for(let v of de)for(let A=v.za-1.8;A>v.zb+1.2;A-=f(2.4,3.8))h()<.4&&K(v.sx*(It-.9),f(3.1,3.7),A);for(let v of lo)for(let A=1;A<12;A++){let L=v.getPoint(A/12);K(L.x,L.y-.35,L.z,.55)}for(let v of C){let A=a(9,5);for(let H=0;H<A;H++){let z=v.sx*(It+2+H*2.4);K(z,f(3.9,4.6),v.z+f(-1.8,1.8)),H%2===0&&Me(z,v.z,6,6,H%4===0?"#ff5a3a":"#ff9a4a",.7)}let L=new qe(l(new Pt(4.6,9)),l(new kt({map:ao(),color:new Se(es[d(es.length)]).multiplyScalar(1.1),transparent:!0,blending:jt,depthWrite:!1,toneMapped:!1,fog:!1})));L.position.set(v.sx*(Zc-.3),5,v.z),L.rotation.y=v.sx>0?-Math.PI/2:Math.PI/2,L.userData.noAO=!0,o.add(L)}Fe(new Kn(.3,10,8).scale(1,1.3,1),l(new kt({toneMapped:!1})),ho,T);let J=Wd(r);c.push(J.map,J.em);let q=l(new Tt({map:J.map,emissiveMap:J.em,emissive:"#ffffff",emissiveIntensity:1.8,roughness:.35,metalness:.55})),Ce=[[],[],[]],Ne=["#2ec8e0","#3a8cff","#ff9a3a"],Ie=(v,A,L)=>{let H=d(3);Ce[H].push(Ze(v,.25,A,1,1,1,L)),Me(v+Math.sin(L)*1.6,A+Math.cos(L)*1.6,4.5,4.5,Ne[H],.9,.27),Q(v+Math.sin(L)*.5,1.4,A+Math.cos(L)*.5,Ne[H],1.2,0,.25)};for(let v of de)for(let A=v.za-2;A>v.zb+2;A-=f(7,12))if(h()<.7){let L=v.sx>0?-Math.PI/2:Math.PI/2;Ie(v.sx*(It-1.3),A,L),h()<.5&&Ie(v.sx*(It-1.3),A-1.1,L)}for(let v of C)Ie(v.sx*(It+7),v.z-1.9,Math.PI),h()<.7&&Ie(v.sx*(It+12),v.z+1.9,0);Ce.forEach((v,A)=>{let L=new mt(.9,1.9,.85);L.translate(0,.95,0);let H=L.attributes.uv;for(let z=0;z<H.count;z++)z>=16&&z<20?H.setXY(z,(A+H.getX(z))/3,H.getY(z)):H.setXY(z,.01+A/3,.99);v.length?Fe(L,q,v):L.dispose()});let Oe=Gt(Ht(128,32,v=>{v.fillStyle="#e8e8ea",v.fillRect(0,0,128,32),v.fillStyle="#ff7a1a";for(let A=-2;A<10;A++)v.beginPath(),v.moveTo(A*16,32),v.lineTo(A*16+8,32),v.lineTo(A*16+24,0),v.lineTo(A*16+16,0),v.fill()}));c.push(Oe);let ke=[];for(let v=0;v<7;v++){let A=6.6+v*1.7,L=-27-v*.6;ke.push(Ze(A,.5,L,1,1,1,.12+v*.01)),v%2===0&&Q(A,1.2,L,"#ffb000",.9,1,3)}for(let v of[-1,1])for(let A=0;A<4;A++)ke.push(Ze(v*14.6,.5,-34-A*1.7-(v>0?40:0),1,1,1,Math.PI/2));Fe(new mt(1.6,.8,.22),l(new Tt({map:Oe,roughness:.5,metalness:.1})),ke,void 0,t);let Ke=[],Ye=[],rt=[],bt=[],Lt=[],Dt=(v,A)=>{let L=4+d(4);for(let z=0;z<L;z++)Ke.push(Ze(v+f(-1.1,1.1),.45,A+f(-1,1),f(.8,1.3),f(.7,1.1),f(.8,1.3),h()*6)),Ye.push(new Se(["#10131a","#1a1226","#0f1a1a","#2a2a30"][d(4)]));h()<.6&&(rt.push(Ze(v+f(-1.2,1.2),.25,A+f(-1,1))),bt.push(new Se(["#2a3d48","#3a2a48","#2f4a36","#4a3a2a"][d(4)])));let H=d(4);for(let z=0;z<H;z++)Lt.push(Ze(v+f(-1.4,1.4),.45+z%2*.4,A+f(-1,1),f(.8,1.4),1,f(.8,1.2),h()*3))};for(let v of C)Dt(v.sx*(It+.5),v.z+1.8),Dt(v.sx*(It+5),v.z-2),Dt(v.sx*(It-1.5),v.z+3.6);for(let v of de)h()<.5&&Dt(v.sx*(It-1.2),f(v.zb+2,v.za-2));Ke.length&&Fe(new Ea(.35,1),l(new Tt({color:"#ffffff",roughness:.22,metalness:.1,envMapIntensity:1.8})),Ke,Ye),rt.length&&Fe(new sn(.38,.32,.95,10).translate(0,.47,0),l(new Tt({color:"#ffffff",roughness:.5,metalness:.3})),rt,bt),Lt.length&&Fe(new mt(.6,.4,.5),l(new Tt({color:"#6b5238",roughness:.9})),Lt);let Et=[new D(-3.5,0,-19),new D(5.5,0,-34),new D(-6,0,-52),new D(3,0,-64),new D(-11,0,-41),new D(10,0,-76)];Fe(new sn(.5,.5,.04,16),l(new Tt({color:"#15171d",roughness:.4,metalness:.9})),Et.map(v=>Ze(v.x,.04,v.z)));let We=Et.slice(0,a(6,4));for(let v of C.slice(0,a(6,3)))We.push(new D(v.sx*(It+3),0,v.z-2));{let v=a(26,14),A=We.length*v,L=new Float32Array(A*3),H=new Float32Array(A*3),z=new Float32Array(A*2);We.forEach((j,De)=>{for(let Xe=0;Xe<v;Xe++){let at=De*v+Xe;H.set([j.x,.1,j.z],at*3),z.set([Xe/v,h()],at*2)}});let Z=l(new Rt);Z.setAttribute("position",new Mt(L,3)),Z.setAttribute("aVent",new Mt(H,3)),Z.setAttribute("aSeed",new Mt(z,2));let te=new pr(Z,l(ip(ao(),M)));te.frustumCulled=!1,te.userData.noAO=!0,o.add(te),We.forEach(j=>Me(j.x,j.z,5,5,"#a68cff",.35))}let _t=(()=>{let v=new Xi,A=[[2.35,.3],[2.2,.5],[1.15,.66],[.25,1.02],[-.95,1.06],[-1.9,.82],[-2.3,.62],[-2.3,.3],[-1.9,.16],[1.9,.16]];v.moveTo(A[0][0],A[0][1]);for(let[te,j]of A.slice(1))v.lineTo(te,j);v.closePath();let L=1.75,H=new gs(v,{depth:L,bevelEnabled:!0,bevelSize:.09,bevelThickness:.1,bevelSegments:2,curveSegments:1});H.rotateY(-Math.PI/2),H.translate(L/2,0,0);let z=[H.index?H.toNonIndexed():H.clone()];H.dispose();for(let te of[-1,1]){let j=new sn(.2,.24,1.6,10);j.rotateX(Math.PI/2),j.translate(te*.98,.32,-1.45),z.push(j.toNonIndexed()),j.dispose()}let Z=yn(z,!1);return z.forEach(te=>te.dispose()),Z.computeVertexNormals(),Z})(),xt=(()=>{let v=[],A=new Xi;A.moveTo(1.05,.7),A.lineTo(.27,1.05),A.lineTo(-.9,1.09),A.lineTo(-1.5,.92),A.closePath();let L=new gs(A,{depth:1.5,bevelEnabled:!1});L.rotateY(-Math.PI/2),L.translate(.75,.02,0);let H=L.attributes.position.count,z=new Float32Array(H*3);for(let Z=0;Z<H;Z++)z.set([.04,.12,.18],Z*3);L.setAttribute("color",new Mt(z,3)),v.push(L),wn(v,1.7,.04,3.9,0,.12,0,[.4,1.6,2.4]),wn(v,1.65,.06,.06,0,.5,2.27,[3,3,2.8]);for(let Z of[-1,1])wn(v,.32,.1,.06,Z*.6,.36,2.33,[3.4,3.4,3.2]);wn(v,1.85,.07,.06,0,.6,-2.38,[3,.12,.1]);for(let Z of[-1,1])wn(v,.04,.03,3.2,Z*.97,.62,.3,[.5,1.4,2.2]),wn(v,.3,.3,.05,Z*.98,.32,-2.27,[.6,2.2,3.2]);return qc(v.map(Z=>Z.index?Z.toNonIndexed():Z))})(),bn=(()=>{let v=[];for(let A of[-1,1])for(let L of[!1,!0]){let H=new Pt(.22,7,1,1);H.rotateX(-Math.PI/2),L&&H.rotateZ(Math.PI/2),H.translate(A*.98,.32,-2.3-3.5);let z=H.attributes.position,Z=new Float32Array(z.count*3);for(let te=0;te<z.count;te++){let j=Za.clamp((z.getZ(te)+9.3)/7,0,1);Z.set([.5*j,1.6*j,2.4*j],te*3)}H.setAttribute("color",new Mt(Z,3)),v.push(H)}return qc(v)})(),xi=l(new Tt({color:"#ffffff",roughness:.22,metalness:.9,envMapIntensity:1.8})),fn=l(new kt({vertexColors:!0,toneMapped:!1})),ei=["#0b0d12","#9aa6b4","#4a1018","#0e3a46","#10203a","#b8c0c8"],St=["#2ec8e0","#3a8cff","#2ec8e0","#ff2a46"],dn=a(12,7),pn=[],tn=[],an=[];for(let v=0;v<dn;v++){let A=v%2?1:-1,L=-14-v*f(9,12);pn.push(Ze(A*13.3,.45,L,1,1,1,h()<.5?0:Math.PI)),tn.push(new Se(ei[d(ei.length)]));let H=St[d(St.length)];an.push(new Se(H)),Me(A*13.3,L,4.6,7,H,.55),Q(A*13.3,.3,L,H,1.2,0,.3)}Fe(_t.clone(),xi,pn,tn,t),Fe(xt.clone(),fn,pn,an);let In=[];for(let v=0;v<a(46,20);v++){let A=h()<.5?1:-1;v%3===0?In.push({x:f(-170,170),y:f(32,120),z:f(-110,-260),ax:0,dir:A,spd:f(10,24),sc:f(2.2,4.5),lo:-180,hi:180,ry:A>0?Math.PI/2:-Math.PI/2}):In.push({x:(h()<.5?-1:1)*f(34,75),y:f(26,95),z:f(-250,20),ax:1,dir:A,spd:f(12,28),sc:f(2,4),lo:-270,hi:30,ry:A>0?Math.PI:0})}let vi=[Y-3.1,Y-1.1,Y+1.1,Y+3.1];for(let v=0;v<a(14,8);v++){let A=v%4,L=A<2?-1:1;In.push({x:vi[A],y:be+1.55,z:f(-200,10),ax:1,dir:L,spd:f(16,30),sc:1,lo:-230,hi:14,ry:L<0?0:Math.PI})}let Bi=new En(l(_t),xi,In.length),uo=new En(l(xt),fn,In.length);uo.instanceMatrix=Bi.instanceMatrix,Bi.instanceMatrix.setUsage(Rc),In.forEach((v,A)=>{Bi.setColorAt(A,new Se(ei[d(ei.length)])),uo.setColorAt(A,new Se(St[d(St.length)]).lerp(new Se("#ffffff"),.5)),v.dir*=1});let fo=new En(l(bn),l(new kt({vertexColors:!0,toneMapped:!1,transparent:!0,blending:jt,depthWrite:!1,side:Kt})),In.length);fo.instanceMatrix=Bi.instanceMatrix,fo.userData.noAO=!0,Bi.frustumCulled=uo.frustumCulled=fo.frustumCulled=!1,o.add(Bi,uo,fo);{for(let L of de)for(let H=L.za-2.5;H>L.zb+2;H-=f(4,6))Me(L.sx*22.4,H,8,5,es[d(es.length)],.5,.27);Me(0,u.z+9,42,16,"#ffc98a",.9),Me(0,u.z+12,30,14,"#ff2a3a",.35);let v=new Pt(1,1);v.rotateX(-Math.PI/2);let A=new En(l(v),l(new kt({map:ao(),transparent:!0,blending:jt,depthWrite:!1,toneMapped:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),re.length);re.forEach((L,H)=>{A.setMatrixAt(H,Ze(L.p.x,L.p.y,L.p.z,L.sx,1,L.sz*(t?1:1.6))),A.setColorAt(H,L.c)}),A.frustumCulled=!1,A.userData.noAO=!0,o.add(A)}{let v=a(420,160),A=new Pt(1,1);A.rotateX(-Math.PI/2);let L=new Float32Array(v*2);for(let z=0;z<v;z++)L.set([h(),f(.7,1.6)],z*2);A.setAttribute("aPh",new oi(L,2));let H=new En(l(A),l(tp(Zd(),M)),v);for(let z=0;z<v;z++)H.setMatrixAt(z,Ze(f(-15,15),.04,f(8,-60)));H.frustumCulled=!1,H.userData.noAO=!0,H.layers.set(1),o.add(H)}s&&tt();let Fs=qd(r);c.push(Fs.map,Fs.em);let Lu=l(new xs({color:"#0b1222",metalness:.9,roughness:.16,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:.08})),fp=l(new xs({color:"#9fb4d8",map:Fs.map,emissiveMap:Fs.em,emissive:"#ffffff",emissiveIntensity:1.2,metalness:.85,roughness:.14,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.06})),Jc=l(new xs({color:"#0e1830",map:Fs.map,emissiveMap:Fs.em,emissive:"#ffffff",emissiveIntensity:.9,metalness:.85,roughness:.18,envMapIntensity:1.8})),Bs=new qe(l(new mt(u.w,u.h,u.d)),[Jc,Jc,le,Lu,fp,Jc]);Bs.position.set(0,u.h/2,u.z-u.d/2),Bs.castShadow=t,Bs.receiveShadow=!0,o.add(Bs);let Nr=l(new Tt({color:"#2a3346",roughness:.35,metalness:.9})),Kc=(u.w-4)/u.cols,jc=(u.h-u.winY0-10)/u.rows;{let v=[];for(let A=0;A<=u.cols;A++){let L=new mt(.35,u.h-u.winY0-6,.5);L.translate(-u.w/2+2+A*Kc,u.winY0+(u.h-u.winY0-6)/2-2,u.z+.2),v.push(L)}for(let A=0;A<=u.rows;A++){let L=new mt(u.w-3,.3,.5);L.translate(0,u.winY0+A*jc-.2,u.z+.2),v.push(L)}for(let A of[-1,1]){let L=new mt(.8,u.h,1.2);L.translate(A*(u.w/2+.1),u.h/2,u.z+.3),v.push(L)}o.add(new qe(l(yn(v,!1)),Nr)),v.forEach(A=>A.dispose())}let Qc;{let v=[],A=(z,Z,te,j)=>{let De=new mt(z,Z,u.d-j*2);De.translate(0,te+Z/2,u.z-u.d/2),v.push(De)};A(u.w-4,5,u.h,2),A(u.w-12,5,u.h+5,5),A(u.w-22,6,u.h+10,8),o.add(new qe(l(yn(v,!1)),Lu)),v.forEach(z=>z.dispose());let L=new qe(l(new sn(.15,.4,24,6)),Nr);L.position.set(0,u.h+28,u.z-u.d/2),o.add(L),Qc=l(Yc("#ff2a1a",2.8));let H=[];for(let[z,Z]of[[u.h+5,u.w-4],[u.h+10,u.w-12],[u.h+16,u.w-22]]){let te=new mt(Z,.18,.18);te.translate(0,z,u.z-1.6-(u.w-4-Z)/8),H.push(te)}for(let z of[-1,1]){let Z=new mt(.22,u.h,.22);Z.translate(z*(u.w/2-.2),u.h/2,u.z-.15),H.push(Z)}o.add(new qe(l(yn(H,!1)),Qc)),H.forEach(z=>z.dispose())}let eh=Cu("#ff2020",5,.9);eh.position.set(0,u.h+40.5,u.z-u.d/2),o.add(eh);let dp=l(Gt(Ht(128,128,v=>{v.fillStyle="#fff",v.fillRect(0,0,128,128),v.fillStyle="rgba(0,0,0,0.16)";for(let A=0;A<5;A++)v.fillRect(8+A*24,6,14,5);v.fillStyle="rgba(0,0,0,0.5)",v.fillRect(8,84,44,40),v.fillRect(70,92,50,32),v.beginPath(),v.arc(90,70,9,0,6.3),v.fill(),v.fillRect(80,78,20,26),v.fillStyle="#000",v.fillRect(62,0,4,128),v.strokeStyle="#000",v.lineWidth=8,v.strokeRect(0,0,128,128)}))),th=[],pp=l(new Pt(Kc-.9,jc-.8)),mp=l(new kt({color:"#ffffff",map:dp,toneMapped:!0,fog:!0})),Rn=new En(pp,mp,u.cols*u.rows),Uu=new it,Os=new Se,gp=v=>v>.95?Os.set("#ffc890").multiplyScalar(.9):v>.8?Os.set("#a8c8e8").multiplyScalar(.6):v>.62?Os.set("#6a8cb0").multiplyScalar(.35):Os.set("#0c1626").multiplyScalar(.9),Nu=()=>{th.length=0;let v=4242,A=()=>(v=v*16807%2147483647)/2147483647;for(let L=0;L<u.rows;L++)for(let H=0;H<u.cols;H++){let z=L*u.cols+H,Z=-u.w/2+2+Kc*(H+.5),te=u.winY0+jc*(L+.5),j=A();th.push({i:z,x:Z,y:te,hp:30,broke:!1,lit:j}),Uu.makeTranslation(Z,te,u.z+.06),Rn.setMatrixAt(z,Uu),Rn.setColorAt(z,gp(j))}Rn.instanceMatrix.needsUpdate=!0,Rn.instanceColor&&(Rn.instanceColor.needsUpdate=!0)};Nu(),o.add(Rn);let po=[],xp=v=>{v.broke=!0,Rn.setColorAt(v.i,Os.set("#120604")),Rn.instanceColor&&(Rn.instanceColor.needsUpdate=!0),Math.random()<.35&&po.push(v)},vp=l(Gt(Ht(1024,300,v=>{v.clearRect(0,0,1024,300),v.font='900 118px "Arial Black", Impact, sans-serif',v.textBaseline="middle",v.textAlign="center",v.fillStyle="#eef3fb",v.shadowColor="#9fc0ff",v.shadowBlur=0,v.fillText("nSLAVE",512,118),v.font="700 44px Arial, sans-serif",v.fillStyle="#ff4a3a",v.shadowColor="#ff2020",v.fillText("H  E  A  D  Q  U  A  R  T  E  R  S",512,224),v.font=`700 28px ${Mn}`,v.fillStyle="#ff9a8a",v.fillText("\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",512,275)}))),Fu=new qe(l(new Pt(19,5.6)),l(new kt({map:vp,color:new Se("#ffffff").multiplyScalar(1.5),toneMapped:!1,transparent:!0,depthWrite:!1,fog:!1})));Fu.position.set(7.6,u.h-4.6,u.z+.45),o.add(Fu);let Fr=new ln;Fr.position.set(-9,u.h-4.7,u.z+.5);let Bu=l(ap(M)),Ou=new qe(l(new Pt(16,9)),Bu);Ou.userData.noAO=!0;let nh=Cu("#ff2a1a",20,.3);nh.position.z=.4,Fr.add(Ou,nh),o.add(Fr);let _p=new D(-9,u.h-4.7,u.z+3),yp=l(new kt({map:l(Yd(r)),color:new Se("#ffffff").multiplyScalar(1.15),toneMapped:!0})),zu=new qe(l(new Pt(u.w-2.5,8.2)),yp);zu.position.set(0,4.35,u.z+.32),o.add(zu);{let v=[];for(let A=0;A<=14;A++){let L=new mt(.16,8.4,.24);L.translate(-(u.w-2.5)/2+A*((u.w-2.5)/14),4.4,u.z+.48),v.push(L)}for(let A of[.2,4.4,8.5]){let L=new mt(u.w-2.2,.24,.3);L.translate(0,A,u.z+.48),v.push(L)}o.add(new qe(l(yn(v,!1)),Nr)),v.forEach(A=>A.dispose())}let Hu=new qe(l(new mt(u.w+4,.6,7)),Nr);Hu.position.set(0,9,u.z+3),o.add(Hu);let Vu=new qe(l(new mt(u.w+2,.1,.4)),l(Yc("#27e6ff",3)));Vu.position.set(0,8.66,u.z+6.3),o.add(Vu);for(let v=0;v<9;v++)Q(-u.w/2+2+v*((u.w-4)/8),8.55,u.z+5.4,"#ffe0b0",2.2,0,.8);{let L=l(Gt(Ht(2048,360,De=>{De.clearRect(0,0,2048,360);let Xe=230,at=360/2;De.lineCap=De.lineJoin="round";let Wt=(Ft,Ut)=>{for(let[dt,On,rh]of[[Ut*3.2,"rgba(255,30,40,0.35)",60],[Ut*1.6,"#ff2030",26],[Ut*.55,"#ffd6d0",6]])De.shadowColor="#ff1a2a",De.shadowBlur=rh,De.strokeStyle=On,De.lineWidth=dt,De.beginPath(),Ft(),De.stroke()};Wt(()=>{De.moveTo(Xe-170,at),De.quadraticCurveTo(Xe,at-150,Xe+170,at),De.quadraticCurveTo(Xe,at+150,Xe-170,at)},9),Wt(()=>De.arc(Xe,at,52,0,Math.PI*2),8),De.shadowBlur=30,De.fillStyle="#ffe8e4",De.beginPath(),De.ellipse(Xe,at,9,40,0,0,Math.PI*2),De.fill(),De.font='900 210px "Arial Black", Impact, sans-serif',De.textBaseline="middle",De.textAlign="center";let Nt=1230;for(let[Ft,Ut,dt]of[[26,"rgba(255,30,40,0.35)",70],[12,"#ff2030",28],[4,"#ffd6d0",6]])De.shadowColor="#ff1a2a",De.shadowBlur=dt,De.strokeStyle=Ut,De.lineWidth=Ft,De.strokeText("TERRORNODE",Nt,at+6,1500)}))),H=Math.min(u.w+2,30),z=H*360/2048,Z=new qe(l(new mt(H+.8,z+.5,.35)),Nr);Z.position.set(0,9.3+z/2+.2,u.z+6.25),o.add(Z);let te=l(new kt({map:L,color:new Se("#ffffff").multiplyScalar(2.6),toneMapped:!1,transparent:!0,depthWrite:!1})),j=new qe(l(new Pt(H,z)),te);j.position.set(0,Z.position.y,u.z+6.45),j.userData.noAO=!0,o.add(j);for(let De=0;De<5;De++)Q(-H/2+H*(.1+De*.2),Z.position.y,u.z+6.8,"#ff2030",5.5,0,.5)}let Mp=Ht(64,128,v=>{v.fillStyle="#05070a",v.fillRect(0,0,64,128);for(let A=6;A<128;A+=8){v.fillStyle="#0d1520",v.fillRect(4,A,56,6);for(let L=8;L<58;L+=6)v.fillStyle=Math.random()<.5?"#27e6ff":Math.random()<.3?"#ff3030":"#0a3a44",v.fillRect(L,A+2,3,2)}}),Br=[],ih=[];for(let v=0;v<8;v++){let A=l(new Pi(Mp));A.colorSpace=Jt,A.wrapS=A.wrapT=cn;let L=l(new Tt({color:"#141a24",metalness:.7,roughness:.4,emissive:"#ffffff",emissiveMap:A,emissiveIntensity:2.2}));ih.push(L);let H=new qe(l(new mt(2.6,6.4,1.6)),L);H.position.set((v<4?-1:1)*(4.2+v%4*3.1),3.2,u.z+2.2),H.castShadow=t,o.add(H),Br.push({mesh:H,hp:160,broke:!1,t:0})}let bp=v=>{v.broke=!0;let A=v.mesh.material;A.emissiveIntensity=.05,A.color.set("#0a0a0a"),v.mesh.rotation.z=(Math.random()-.5)*.25},Sp=()=>{Nu(),po.length=0;for(let v of Br){v.broke=!1,v.hp=160;let A=v.mesh.material;A.emissiveIntensity=2.2,A.color.set("#141a24"),v.mesh.rotation.z=0}};s&&B();let _i=[],Ep=l(Xc("#bcd4ff",.16,.7,!0,M)),Tp=l(new sn(9,.6,160,24,1,!0)),mo=(v,A,L)=>{let H=new ln;H.position.set(v,A,L);let z=new qe(Tp,Ep);z.position.y=80,z.userData.noAO=!0,z.frustumCulled=!1,H.add(z),o.add(H),_i.push(H)};mo(9,u.h+2,u.z-4),mo(-9,u.h+2,u.z-4),t&&(mo(-21,.5,-48),mo(21,.5,-58)),s&&(_i[0].visible=_i[1].visible=!1,P.intensity=0,N.intensity=0);let ku=[],sh=[];if(s){let v=(j,De,Xe)=>{let at=l(n.material("concrete_floor_02",[j/5,De/5],Xe,.02));return at.roughness=.92,at.envMapIntensity=.5,at},A=(j,De,Xe,at,Wt,Nt,Ft="#55585f")=>{let Ut=new qe(l(new mt(j,De,Xe)),v(Math.max(j,Xe),De,Ft));return Ut.position.set(at,Wt,Nt),Ut.castShadow=t,Ut.receiveShadow=!0,o.add(Ut),Ut},L=(j,De,Xe,at,Wt,Nt,Ft,Ut)=>{let dt=new qe(l(new Pt(De,Xe)),v(De,Xe,"#8d9097"));dt.position.set(at,Wt,Nt),dt.rotation.y=Math.atan2(Ft,Ut),dt.receiveShadow=!0,o.add(dt),ku.push({id:j,mesh:dt,w:De,h:Xe,center:new D(at,Wt,Nt),normal:new D(Ft,0,Ut)})};A(2*It+6,2.2,8,0,8.6,-62);for(let j of[-1,1]){A(2*It+6,1.1,.14,0,10.25,-62+j*3.95,"#25272c");for(let Xe of[-62-2.6,-62+2.6])A(2.4,7.5,2.2,j*17.2,3.75,Xe),sh.push({x0:j*17.2-1.3,x1:j*17.2+1.3,z0:Xe-1.2,z1:Xe+1.2});L(j<0?"bridge-left":"bridge-right",4.6,6.6,j*(17.2-1.22),3.6,-62,-j,0);let De=new Ii("#fff4e0",t?38:26,20,1.7);De.position.set(j*8,7.2,-62),o.add(De),Q(j*8,7.45,-62,"#fff4e0",1.2,0,2)}let z=-80;A(2*It+2,15,2.4,0,7.5,z-1.2,"#4a4d54"),sh.push({x0:-It-1,x1:It+1,z0:z-2.4,z1:z+.3}),L("hall-of-fame",30,9,0,4.8,z+.03,0,1);let Z=new Da("#ffffff",t?260:160,46,.95,.9,1.2);Z.position.set(0,14.2,z+9),Z.target.position.set(0,3,z),o.add(Z,Z.target),Q(0,14.2,z+8.6,"#ffffff",1.8,0,1.8);let te=0;for(let j of de){if(j.za<-54||j.za>0||j.za-j.zb<9||te++%2)continue;let De=Math.min(10,j.za-j.zb-3),Xe=(j.za+j.zb)/2;L(`wall-${j.sx<0?"l":"r"}${Math.round(-Xe)}`,De,3.7,j.sx*(It-.04),2.1,Xe,-j.sx,0)}}for(let v=0;v<a(6,3);v++){let A=new qe(l(new Pt(64,8)),l(sp(M,v%2?"#24607c":"#1e4a78",.2)));A.position.set(0,3.2,-8-v*14),A.userData.noAO=!0,o.add(A)}for(let[v,A,L,H,z,Z]of[[-185,"#0b0e1e","rgba(20,50,80,0.55)",.16,1,1],[-240,"#0e1a30","rgba(25,60,95,0.7)",.12,1.35,2],[-310,"#142a45","rgba(40,90,120,0.8)",.09,1.8,3]]){let te=l(Xd(Z*13,A,L,H,r)),j=new qe(l(new Pt(900*z,225*z)),l(new kt({map:te,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!0})));j.position.set(0,225*z*.5-6,v),j.renderOrder=-5,j.userData.noAO=!0,o.add(j)}{let v=a(3600,1300),A=new Float32Array(v*6),L=new Float32Array(v*8),H=new Float32Array(v*2);for(let te=0;te<v;te++){let j=(Math.random()-.5)*66,De=Math.random()*38,Xe=-Math.random()*100+8,at=Math.random();A.set([j,De,Xe,j,De,Xe],te*6),L.set([0,0,0,at,0,0,0,at],te*8),H.set([0,1],te*2)}let z=l(new Rt);z.setAttribute("position",new Mt(A,3)),z.setAttribute("aSeed",new Mt(L,4)),z.setAttribute("aEnd",new Mt(H,1));let Z=new da(z,l(ep(M,"#8fb0d0")));Z.frustumCulled=!1,Z.userData.noAO=!0,Z.layers.set(1),o.add(Z)}if(s)for(let v of _e.slice().reverse())nt.splice(v.g0,v.g1-v.g0);{let v=nt.length,A=new Float32Array(v*3),L=new Float32Array(v*3),H=new Float32Array(v),z=new Float32Array(v*2);nt.forEach((j,De)=>{A.set([j.p.x,j.p.y,j.p.z],De*3),L.set([j.c.r,j.c.g,j.c.b],De*3),H[De]=j.s,z.set([j.ph,j.mode],De*2)});let Z=l(new Rt);Z.setAttribute("position",new Mt(A,3)),Z.setAttribute("aColor",new Mt(L,3)),Z.setAttribute("aSize",new Mt(H,1)),Z.setAttribute("aPh",new Mt(z,2));let te=new pr(Z,l(np(ao(),M)));te.frustumCulled=!1,te.userData.noAO=!0,o.add(te)}if(e.add(o),s)for(let v of _e)for(let A of o.children.slice(v.c0,v.c1))A.visible=!1;let go=new D,xo=new kn,Gu=new D,vo=new it,wp=new Nn,Wu=new ie,Ap=(v,A,L)=>{if(M.uT.value=A,b.uniforms.uT.value=A,L instanceof Vt&&(i.getDrawingBufferSize(k),M.uPx.value=k.y/(2*Math.tan(Za.degToRad(L.fov)/2))),eh.material.opacity=Math.sin(A*3)>0?.95:.1,_i[0].rotation.set(Math.sin(A*.33)*.55,0,Math.cos(A*.27)*.45-.2),_i[1].rotation.set(Math.cos(A*.29)*.5,0,Math.sin(A*.35)*.45+.2),_i[2]&&_i[2].rotation.set(-.15+Math.sin(A*.21)*.25,0,.3+Math.cos(A*.17)*.3),_i[3]&&_i[3].rotation.set(-.1+Math.cos(A*.19)*.25,0,-.3+Math.sin(A*.23)*.3),L.getWorldPosition(go),Wu.set(Za.clamp((go.x-Fr.position.x)/40,-1,1),-.2+Math.sin(A*.7)*.15),Bu.uniforms.uLook.value.copy(Wu),nh.material.opacity=.28+Math.sin(A*2.3)*.08,Qc.color.setRGB(2.4+Math.sin(A*4)*.7,.2,.15+(Math.sin(A*.8)>.6?1.2:0)),ft.update(A),po.length){for(let te of po)Rn.setColorAt(te.i,Os.setRGB(1.6+Math.random()*.8,.45+Math.random()*.25,.08));Rn.instanceColor&&(Rn.instanceColor.needsUpdate=!0)}for(let te=0;te<ih.length;te++){let j=ih[te].emissiveMap;Br[te].broke||(j.offset.y=Math.floor(A*6+te)*.125)}for(let te of Pr)te.intensity=60*(.94+Math.random()*.06);for(let te=0;te<In.length;te++){let j=In[te],De=j.hi-j.lo,Xe=(j.ax===0?j.x:j.z)+j.dir*j.spd*v;Xe>j.hi?Xe-=De:Xe<j.lo&&(Xe+=De),j.ax===0?j.x=Xe:j.z=Xe,xo.setFromEuler(wp.set(0,j.ry,Math.sin(A*.8+te)*.03)),vo.compose(go.set(j.x,j.y+(j.sc>1?Math.sin(A*.6+te*2)*.4:0),j.z),xo,Gu.setScalar(j.sc)),Bi.setMatrixAt(te,vo)}Bi.instanceMatrix.needsUpdate=!0;let H=A%16/16,z=H<.75,Z=40-H/.75*300;xo.identity();for(let te=0;te<Pn;te++)vo.compose(go.set(he,ye+1.95,Z+te*9.6),xo,Gu.setScalar(z?1:0)),Ni.setMatrixAt(te,vo);Ls.visible=z,Ls.position.set(he,ye+1.95,Z-Ui/2-.2),Ni.instanceMatrix.needsUpdate=!0,y.intensity*=Math.pow(.002,v)},Rp=0;return{group:o,spots:ku,blockers:sh,windows:Rn,wins:th,racks:Br,towerBody:Bs,solids:[Bs],ground:F,eye:Fr,hitLight:y,lightWorld:_p,breakWindow:xp,breakRack:bp,rebuild:Sp,beforeRender:(v,A,L)=>{if(!V||Rp++<3)return;let H=V;(H.getReflectionCamera?H.getReflectionCamera(L):H.camera).layers.set(0),F.visible=!1,V.onBeforeRender.call(V,v,A,L),F.visible=!0,U.uReflMat.value.copy(V.material.uniforms.textureMatrix.value).multiply($)},resize:(v,A)=>{V?.getRenderTarget().setSize(Math.max(64,Math.round(v*.5)),Math.max(64,Math.round(A*.5)))},update:Ap,dispose:()=>{e.remove(o),c.forEach(v=>v.dispose());for(let v of Br)v.mesh.geometry.dispose();Rn.dispose(),V?.dispose(),p.dispose(),e.environment=null}}}async function hp(i,e){let t=Math.min(8,i.capabilities.getMaxAnisotropy()),n=new Ca,s=(c,l)=>new Promise(h=>n.load(c,f=>{f.wrapS=f.wrapT=cn,f.anisotropy=t,l&&(f.colorSpace=Jt),h(f)},void 0,()=>h(null))),r=new Map;await Promise.all(["concrete_floor_02","large_floor_tiles_02"].map(async c=>r.set(c,await Promise.all([s(`${e}${c}/diff.webp`,!0),s(`${e}${c}/nor.webp`,!1),s(`${e}${c}/rough.webp`,!1)]))));let a=[],o=(c,l)=>{if(!c)return null;let h=c.clone();return h.repeat.set(l[0],l[1]),h.needsUpdate=!0,a.push(h),h};return{env:null,material:(c,l,h,f=.05)=>{let[d,u,g]=r.get(c)||[null,null,null];return new Tt({map:o(d,l),normalMap:o(u,l),roughnessMap:o(g,l),color:h,metalness:f,normalScale:new ie(1.6,1.6)})},dispose:()=>a.forEach(c=>c.dispose())}}function up(){let i=new wr({uniforms:{tDiffuse:{value:null},uShadow:{value:new D(1,1,1)},uHigh:{value:new D(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.5},uTime:{value:0},uAberr:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}),e=i.uniforms;return{pass:i,apply:t=>{e.uShadow.value.set(...t.shadow),e.uHigh.value.set(...t.high),e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uVignette.value=t.vignette},tick:t=>{e.uTime.value=t%10}}}var ey={shadow:[1,1,1],high:[1,1,1],sat:0,contrast:1.32,vignette:.72},$c={x:25.5,z0:-79,z1:24};async function ty(i,e){let t=e.high!==!1,n=k=>e.onStatus&&e.onStatus(k);n("Building the city\u2026");let s=new Ic({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),s.toneMapping=Ss,s.toneMappingExposure=1.05,s.shadowMap.enabled=t,s.shadowMap.type=Ms;let r=s.domElement;r.style.cssText="width:100%;height:100%;display:block;outline:none;cursor:grab",r.tabIndex=0,i.appendChild(r);let a=new ds,o=new Vt(62,16/9,.05,900),c=await hp(s,e.base+"tex/"),l=cp({renderer:s,scene:a,high:t,look:c,vexvoid:!0});a.add(l.group);let h=()=>{let k=i.getBoundingClientRect();return{w:Math.max(2,Math.round(k.width)),h:Math.max(2,Math.round(k.height))}},{w:f,h:d}=h();s.setSize(f,d,!1);let u=new Nc(s);if(u.addPass(new Fc(a,o)),t){let k=new io(a,o,f,d);k.updateGtaoMaterial({radius:1.4,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:8});let W=k.render.bind(k),X=[];k.render=(...ne)=>{a.traverse(ce=>{(ce.isSprite||ce.isPoints||ce.isLineSegments||ce.userData.noAO)&&ce.visible&&(ce.visible=!1,X.push(ce))}),W(...ne);for(let ce of X.splice(0))ce.visible=!0},u.addPass(k)}let g=new Ar(new ie(f,d),.42,.45,1.5);u.addPass(g),u.addPass(new Bc);let x=up();x.apply(ey),u.addPass(x.pass);let m={x:0,z:8,yaw:0,pitch:.04,bob:0},p=new Set,S=(k,W)=>{let X=k.key.length===1?k.key.toLowerCase():k.key;["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"].includes(X)&&(k.preventDefault(),k.stopPropagation(),W?p.add(X):p.delete(X))},M=k=>S(k,!0),b=k=>S(k,!1);r.addEventListener("keydown",M),r.addEventListener("keyup",b),r.addEventListener("blur",()=>p.clear());let w=null;r.addEventListener("pointerdown",k=>{r.focus(),w={x:k.clientX,y:k.clientY},r.setPointerCapture(k.pointerId),r.style.cursor="grabbing"}),r.addEventListener("pointermove",k=>{w&&(m.yaw-=(k.clientX-w.x)*.0035,m.pitch=Math.max(-.9,Math.min(.9,m.pitch-(k.clientY-w.y)*.0035)),w={x:k.clientX,y:k.clientY})});let R=()=>{w=null,r.style.cursor="grab"};r.addEventListener("pointerup",R),r.addEventListener("pointercancel",R);let P=new ResizeObserver(()=>{({w:f,h:d}=h()),s.setSize(f,d,!1),u.setSize(f,d),l.resize(f,d),o.aspect=f/d,o.updateProjectionMatrix()});P.observe(i);let N=new ys,y=0,E=0,U=!1,F=new D,V=new D,$=()=>{if(U)return;y=requestAnimationFrame($);let k=Math.min(.05,N.getDelta());E+=k;let W=p.has("Shift")?7.5:3.2,X=(p.has("d")||p.has("ArrowRight")?1:0)-(p.has("a")||p.has("ArrowLeft")?1:0),ne=(p.has("w")||p.has("ArrowUp")?1:0)-(p.has("s")||p.has("ArrowDown")?1:0);if(F.set(-Math.sin(m.yaw),0,-Math.cos(m.yaw)),V.set(Math.cos(m.yaw),0,-Math.sin(m.yaw)),X||ne){let ce=W*k/Math.hypot(X,ne);m.x=Math.max(-$c.x,Math.min($c.x,m.x+(F.x*ne+V.x*X)*ce)),m.z=Math.max($c.z0,Math.min($c.z1,m.z+(F.z*ne+V.z*X)*ce));for(let xe of l.blockers){let ve=xe.x0-.35,Fe=xe.x1+.35,Ge=xe.z0-.35,Ze=xe.z1+.35;if(m.x>ve&&m.x<Fe&&m.z>Ge&&m.z<Ze){let nt=[m.x-ve,Fe-m.x,m.z-Ge,Ze-m.z],Q=Math.min(...nt);Q===nt[0]?m.x=ve:Q===nt[1]?m.x=Fe:Q===nt[2]?m.z=Ge:m.z=Ze}}m.bob+=k*(W>4?13:8.5)}o.position.set(m.x,lp+Math.sin(m.bob)*(X||ne?.035:0),m.z),o.rotation.set(0,0,0),o.rotateY(m.yaw),o.rotateX(m.pitch),l.update(k,E,o),l.beforeRender(s,a,o),x.tick(E),u.render(k)};return n(""),$(),{canvas:r,where:()=>({x:m.x,z:m.z,yaw:m.yaw}),spots:()=>l.spots.map(k=>({id:k.id,w:k.w,h:k.h,x:k.center.x,y:k.center.y,z:k.center.z})),goto:(k,W,X,ne)=>{m.x=k,m.z=W,X!=null&&(m.yaw=X),ne!=null&&(m.pitch=ne)},stop:()=>{U=!0,cancelAnimationFrame(y),P.disconnect(),r.removeEventListener("keydown",M),r.removeEventListener("keyup",b),l.dispose(),c.dispose(),u.dispose(),s.dispose(),r.remove()}}}return Fp(ny);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
