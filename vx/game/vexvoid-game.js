var VXGAME=(()=>{var th=Object.defineProperty;var bp=Object.getOwnPropertyDescriptor;var Sp=Object.getOwnPropertyNames;var Ep=Object.prototype.hasOwnProperty;var Tp=(i,e)=>{for(var t in e)th(i,t,{get:e[t],enumerable:!0})},wp=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Sp(e))!Ep.call(i,s)&&s!==t&&th(i,s,{get:()=>e[s],enumerable:!(n=bp(e,s))||n.enumerable});return i};var Ap=i=>wp(th({},"__esModule",{value:!0}),i);var Y_={};Tp(Y_,{mount:()=>q_});var vf=0,Hh=1,_f=2;var gs=1,yf=2,vr=3,Si=0,an=1,jt=2,kt=0,as=1,Qt=2,Vh=3,kh=4,Sl=5,Ln=100,Mf=101,bf=102,Sf=103,Ef=104,xs=200,Tf=201,wf=202,Af=203,Go=204,Wo=205,Pa=206,Rf=207,Ia=208,Cf=209,Pf=210,If=211,Df=212,Lf=213,Uf=214,El=0,Tl=1,wl=2,os=3,Al=4,Rl=5,Cl=6,Pl=7,Gh=0,Nf=1,Ff=2,Qn=0,Da=1,La=2,Ua=3,vs=4,Na=5,Fa=6,Ba=7;var Wh=300,Xi=301,_s=302,Il=303,Dl=304,Oa=306,un=1e3,ni=1001,Xo=1002,Vt=1003,Bf=1004;var za=1005;var fn=1006,Ll=1007;var ci=1008;var _n=1009,Xh=1010,qh=1011,_r=1012,Ul=1013,ei=1014,Wn=1015,Gt=1016,Nl=1017,Fl=1018,qi=1020,Yh=35902,Zh=35899,Jh=1021,$h=1022,Pn=1023,si=1026,hi=1027,Bl=1028,Ol=1029,ys=1030,zl=1031;var Hl=1033,Ha=33776,Va=33777,ka=33778,Ga=33779,Vl=35840,kl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Yl=37496,Zl=37488,Jl=37489,$l=37490,Kl=37491,jl=37808,Ql=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,ac=37816,oc=37817,lc=37818,cc=37819,hc=37820,uc=37821,fc=36492,dc=36494,pc=36495,mc=36283,gc=36284,xc=36285,vc=36286;var Kr=2300,qo=2301,Vo=2302,Ch=2400,Ph=2401,Ih=2402;var Of=3200;var _c=0,zf=1,Ai="",$t="srgb",ls="srgb-linear",jr="linear",yt="srgb";var ss=7680;var Dh=519,Hf=512,Vf=513,kf=514,yc=515,Gf=516,Wf=517,Mc=518,Xf=519,Yo=35044,bc=35048;var Kh="300 es",Kn=2e3,Qr=2001;function jh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Rp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function qf(){let i=tr("canvas");return i.style.display="block",i}var Bu={},nr=null;function ea(...i){let e="THREE."+i.shift();nr?nr("log",e,...i):console.log(e,...i)}function Je(...i){let e="THREE."+i.shift();nr?nr("warn",e,...i):console.warn(e,...i)}function $e(...i){let e="THREE."+i.shift();nr?nr("error",e,...i):console.error(e,...i)}function ir(...i){let e=i.join(" ");e in Bu||(Bu[e]=!0,Je(...i))}function Yf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ou=1234567,Yr=Math.PI/180,sr=180/Math.PI;function ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[n&255]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function Qh(i,e){return(i%e+e)%e}function Cp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Pp(i,e,t){return i!==e?(t-i)/(e-i):0}function Zr(i,e,t){return(1-t)*i+t*e}function Ip(i,e,t,n){return Zr(i,e,1-Math.exp(-t*n))}function Dp(i,e=1){return e-Math.abs(Qh(i,e*2)-e)}function Lp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Up(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Np(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fp(i,e){return i+Math.random()*(e-i)}function Bp(i){return i*(.5-Math.random())}function Op(i){i!==void 0&&(Ou=i);let e=Ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zp(i){return i*Yr}function Hp(i){return i*sr}function Vp(i){return(i&i-1)===0&&i!==0}function kp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Gp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Wp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wa={DEG2RAD:Yr,RAD2DEG:sr,generateUUID:ii,clamp:lt,euclideanModulo:Qh,mapLinear:Cp,inverseLerp:Pp,lerp:Zr,damp:Ip,pingpong:Dp,smoothstep:Lp,smootherstep:Up,randInt:Np,randFloat:Fp,randFloatSpread:Bp,seededRandom:Op,degToRad:zp,radToDeg:Hp,isPowerOfTwo:Vp,ceilPowerOfTwo:kp,floorPowerOfTwo:Gp,setQuaternionFromProperEuler:Wp,normalize:At,denormalize:$n},ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],x=r[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o>=1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*x;m<0&&(u=-u,d=-d,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,o=Math.sin(o*b)/S,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+x*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+x*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nh.copy(this).projectOnVector(e),this.sub(nh)}reflect(e){return this.sub(nh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},nh=new D,zu=new kn,it=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],b=s[1],S=s[4],M=s[7],w=s[2],R=s[5],I=s[8];return r[0]=a*x+o*b+l*w,r[3]=a*m+o*S+l*R,r[6]=a*p+o*M+l*I,r[1]=c*x+h*b+f*w,r[4]=c*m+h*S+f*R,r[7]=c*p+h*M+f*I,r[2]=u*x+d*b+g*w,r[5]=u*m+d*S+g*R,r[8]=u*p+d*M+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=t*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=d*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ih.makeScale(e,t)),this}rotate(e){return this.premultiply(ih.makeRotation(-e)),this}translate(e,t){return this.premultiply(ih.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ih=new it,Hu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xp(){let i={enabled:!0,workingColorSpace:ls,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=er(s.r),s.g=er(s.g),s.b=er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?jr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ls]:{primaries:e,whitePoint:n,transfer:jr,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Hu,fromXYZ:Vu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}var dt=Xp();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fs,Zo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=tr("canvas")),Fs.width=e.width,Fs.height=e.height;let s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},qp=0,rr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qp++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(sh(s[a].image)):r.push(sh(s[a]))}else r=sh(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function sh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var Yp=0,rh=new D,vn=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ni,s=ni,r=fn,a=ci,o=Pn,l=_n,c=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=ii(),this.name="",this.source=new rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case un:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case un:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Wh;vn.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,M=(d+1)/2,w=(p+1)/2,R=(h+u)/4,I=(f+x)/4,N=(g+m)/4;return S>M&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=R/n,r=I/n):M>w?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=R/s,r=N/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=N/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(f-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jo=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new vn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new rr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ft=class extends Jo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ta=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends vn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ri=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Yn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),uo.copy(n.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),fo.subVectors(this.max,Fr),Bs.subVectors(e.a,Fr),Os.subVectors(e.b,Fr),zs.subVectors(e.c,Fr),Di.subVectors(Os,Bs),Li.subVectors(zs,Os),es.subVectors(Bs,zs);let t=[0,-Di.z,Di.y,0,-Li.z,Li.y,0,-es.z,es.y,Di.z,0,-Di.x,Li.z,0,-Li.x,es.z,0,-es.x,-Di.y,Di.x,0,-Li.y,Li.x,0,-es.y,es.x,0];return!ah(t,Bs,Os,zs,fo)||(t=[1,0,0,0,1,0,0,0,1],!ah(t,Bs,Os,zs,fo))?!1:(po.crossVectors(Di,Li),t=[po.x,po.y,po.z],ah(t,Bs,Os,zs,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},gi=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,uo=new ri,Bs=new D,Os=new D,zs=new D,Di=new D,Li=new D,es=new D,Fr=new D,fo=new D,po=new D,ts=new D;function ah(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ts.fromArray(i,r);let o=s.x*Math.abs(ts.x)+s.y*Math.abs(ts.y)+s.z*Math.abs(ts.z),l=e.dot(ts),c=t.dot(ts),h=n.dot(ts);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Zp=new ri,Br=new D,oh=new D,ai=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Zp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);let t=Br.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Br,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(oh)),this.expandByPoint(Br.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xi=new D,lh=new D,mo=new D,Ui=new D,ch=new D,go=new D,hh=new D,ar=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lh.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(lh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(mo),o=Ui.dot(this.direction),l=-Ui.dot(mo),c=Ui.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let x=1/h;f*=x,u*=x,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lh).addScaledVector(mo,u),d}intersectSphere(e,t){xi.subVectors(e.center,this.origin);let n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){ch.subVectors(t,e),go.subVectors(n,e),hh.crossVectors(ch,go);let a=this.direction.dot(hh),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ui.subVectors(this.origin,e);let l=o*this.direction.dot(go.crossVectors(Ui,go));if(l<0)return null;let c=o*this.direction.dot(ch.cross(Ui));if(c<0||l+c>a)return null;let h=-o*Ui.dot(hh);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,x,m)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,x=c*f;t[0]=u+x*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,x=c*f;t[0]=u-x*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,x=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+x,t[1]=l*f,t[5]=x*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-x*f}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+x,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=x*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jp,e,$p)}lookAt(e,t,n){let s=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ni.crossVectors(n,In),Ni.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ni.crossVectors(n,In)),Ni.normalize(),xo.crossVectors(In,Ni),s[0]=Ni.x,s[4]=xo.x,s[8]=In.x,s[1]=Ni.y,s[5]=xo.y,s[9]=In.y,s[2]=Ni.z,s[6]=xo.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],b=n[3],S=n[7],M=n[11],w=n[15],R=s[0],I=s[4],N=s[8],y=s[12],E=s[1],L=s[5],F=s[9],k=s[13],Y=s[2],G=s[6],X=s[10],q=s[14],ie=s[3],ce=s[7],xe=s[11],pe=s[15];return r[0]=a*R+o*E+l*Y+c*ie,r[4]=a*I+o*L+l*G+c*ce,r[8]=a*N+o*F+l*X+c*xe,r[12]=a*y+o*k+l*q+c*pe,r[1]=h*R+f*E+u*Y+d*ie,r[5]=h*I+f*L+u*G+d*ce,r[9]=h*N+f*F+u*X+d*xe,r[13]=h*y+f*k+u*q+d*pe,r[2]=g*R+x*E+m*Y+p*ie,r[6]=g*I+x*L+m*G+p*ce,r[10]=g*N+x*F+m*X+p*xe,r[14]=g*y+x*k+m*q+p*pe,r[3]=b*R+S*E+M*Y+w*ie,r[7]=b*I+S*L+M*G+w*ce,r[11]=b*N+S*F+M*X+w*xe,r[15]=b*y+S*k+M*q+w*pe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],x=e[7],m=e[11],p=e[15],b=l*d-c*u,S=o*d-c*f,M=o*u-l*f,w=a*d-c*h,R=a*u-l*h,I=a*f-o*h;return t*(x*b-m*S+p*M)-n*(g*b-m*w+p*R)+s*(g*S-x*w+p*I)-r*(g*M-x*R+m*I)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],x=e[13],m=e[14],p=e[15],b=f*m*c-x*u*c+x*l*d-o*m*d-f*l*p+o*u*p,S=g*u*c-h*m*c-g*l*d+a*m*d+h*l*p-a*u*p,M=h*x*c-g*f*c+g*o*d-a*x*d-h*o*p+a*f*p,w=g*f*l-h*x*l-g*o*u+a*x*u+h*o*m-a*f*m,R=t*b+n*S+s*M+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/R;return e[0]=b*I,e[1]=(x*u*r-f*m*r-x*s*d+n*m*d+f*s*p-n*u*p)*I,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*I,e[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*I,e[4]=S*I,e[5]=(h*m*r-g*u*r+g*s*d-t*m*d-h*s*p+t*u*p)*I,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*I,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*d+t*l*d)*I,e[8]=M*I,e[9]=(g*f*r-h*x*r-g*n*d+t*x*d+h*n*p-t*f*p)*I,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*p+t*o*p)*I,e[11]=(h*o*r-a*f*r-h*n*c+t*f*c+a*n*d-t*o*d)*I,e[12]=w*I,e[13]=(h*x*s-g*f*s+g*n*u-t*x*u-h*n*m+t*f*m)*I,e[14]=(g*o*s-a*x*s-g*n*l+t*x*l+a*n*m-t*o*m)*I,e[15]=(a*f*s-h*o*s+h*n*l-t*f*l-a*n*u+t*o*u)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,x=a*h,m=a*f,p=o*f,b=l*c,S=l*h,M=l*f,w=n.x,R=n.y,I=n.z;return s[0]=(1-(x+p))*w,s[1]=(d+M)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(d-M)*R,s[5]=(1-(u+p))*R,s[6]=(m+b)*R,s[7]=0,s[8]=(g+S)*I,s[9]=(m-b)*I,s[10]=(1-(u+x))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Hs.set(s[0],s[1],s[2]).length(),a=Hs.set(s[4],s[5],s[6]).length(),o=Hs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),Zn.copy(this);let c=1/r,h=1/a,f=1/o;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=f,Zn.elements[9]*=f,Zn.elements[10]*=f,t.setFromRotationMatrix(Zn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Kn,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Kn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Qr)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Kn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Qr)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new D,Zn=new tt,Jp=new D(0,0,0),$p=new D(1,1,1),Ni=new D,xo=new D,In=new D,ku=new tt,Gu=new kn,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gu.setFromEuler(this),this.setFromQuaternion(Gu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var na=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Kp=0,Wu=new D,Vs=new kn,vi=new tt,vo=new D,Or=new D,jp=new D,Qp=new kn,Xu=new D(1,0,0),qu=new D(0,1,0),Yu=new D(0,0,1),Zu={type:"added"},em={type:"removed"},ks={type:"childadded",child:null},uh={type:"childremoved",child:null},Kt=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kp++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Un,n=new kn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new it}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new na,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(qu,e)}rotateZ(e){return this.rotateOnAxis(Yu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(qu,e)}translateZ(e){return this.translateOnAxis(Yu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vo.copy(e):vo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Or,vo,this.up):vi.lookAt(vo,Or,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),Vs.setFromRotationMatrix(vi),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),ks.child=e,this.dispatchEvent(ks),ks.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(em),uh.child=e,this.dispatchEvent(uh),uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Qp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Kt.DEFAULT_UP=new D(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Jn=new D,_i=new D,fh=new D,yi=new D,Gs=new D,Ws=new D,Ju=new D,dh=new D,ph=new D,mh=new D,gh=new Ct,xh=new Ct,vh=new Ct,Mi=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jn.subVectors(e,t),s.cross(Jn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jn.subVectors(s,t),_i.subVectors(n,t),fh.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(_i),l=Jn.dot(fh),c=_i.dot(_i),h=_i.dot(fh),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return gh.setScalar(0),xh.setScalar(0),vh.setScalar(0),gh.fromBufferAttribute(e,t),xh.fromBufferAttribute(e,n),vh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(gh,r.x),a.addScaledVector(xh,r.y),a.addScaledVector(vh,r.z),a}static isFrontFacing(e,t,n,s){return Jn.subVectors(n,t),_i.subVectors(e,t),Jn.cross(_i).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Jn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Ws.subVectors(r,n),dh.subVectors(e,n);let l=Gs.dot(dh),c=Ws.dot(dh);if(l<=0&&c<=0)return t.copy(n);ph.subVectors(e,s);let h=Gs.dot(ph),f=Ws.dot(ph);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Gs,a);mh.subVectors(e,r);let d=Gs.dot(mh),g=Ws.dot(mh);if(g>=0&&d<=g)return t.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ws,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Ju.subVectors(r,s),o=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Ju,o);let p=1/(m+x+u);return a=x*p,o=u*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function _h(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ye=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Qh(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=_h(a,r,e+1/3),this.g=_h(a,r,e),this.b=_h(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=Zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return dt.workingToColorSpace(xn.copy(this),e),Math.round(lt(xn.r*255,0,255))*65536+Math.round(lt(xn.g*255,0,255))*256+Math.round(lt(xn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=$t){dt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+t,Fi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fi),e.getHSL(_o);let n=Zr(Fi.h,_o.h,t),s=Zr(Fi.s,_o.s,t),r=Zr(Fi.l,_o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new ye;ye.NAMES=Zf;var tm=0,Gn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=as,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Wo,this.blendEquation=Ln,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==as&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Go&&(n.blendSrc=this.blendSrc),this.blendDst!==Wo&&(n.blendDst=this.blendDst),this.blendEquation!==Ln&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ot=class extends Gn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Yt=new D,yo=new ne,nm=0,Mt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Yo,this.updateRanges=[],this.gpuType=Wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)yo.fromBufferAttribute(this,t),yo.applyMatrix3(e),this.setXY(t,yo.x,yo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yo&&(e.usage=this.usage),e}};var ia=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},im=0,Hn=new tt,yh=new Kt,Xs=new D,Dn=new ri,zr=new ri,sn=new D,Rt=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jh(e)?sa:ia)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return yh.lookAt(e),yh.updateMatrix(),this.applyMatrix4(yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(Dn.min,zr.min),Dn.expandByPoint(sn),sn.addVectors(Dn.max,zr.max),Dn.expandByPoint(sn)):(Dn.expandByPoint(zr.min),Dn.expandByPoint(zr.max))}Dn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(Xs.fromBufferAttribute(e,c),sn.add(Xs)),s=Math.max(s,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;let c=new D,h=new D,f=new D,u=new ne,d=new ne,g=new ne,x=new D,m=new D;function p(N,y,E){c.fromBufferAttribute(n,N),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,E),u.fromBufferAttribute(r,N),d.fromBufferAttribute(r,y),g.fromBufferAttribute(r,E),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),o[N].add(x),o[y].add(x),o[E].add(x),l[N].add(m),l[y].add(m),l[E].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let N=0,y=b.length;N<y;++N){let E=b[N],L=E.start,F=E.count;for(let k=L,Y=L+F;k<Y;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let S=new D,M=new D,w=new D,R=new D;function I(N){w.fromBufferAttribute(s,N),R.copy(w);let y=o[N];S.copy(y),S.sub(w.multiplyScalar(w.dot(y))).normalize(),M.crossVectors(R,y);let L=M.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,L)}for(let N=0,y=b.length;N<y;++N){let E=b[N],L=E.start,F=E.count;for(let k=L,Y=L+F;k<Y;k+=3)I(e.getX(k+0)),I(e.getX(k+1)),I(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?d=l[x]*o.data.stride+o.offset:d=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Mt(u,h,f)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$u=new tt,ns=new ar,Mo=new ai,Ku=new D,bo=new D,So=new D,Eo=new D,Mh=new D,To=new D,ju=new D,wo=new D,qe=class extends Kt{constructor(e=new Rt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Mh.fromBufferAttribute(f,e),a?To.addScaledVector(Mh,h):To.addScaledVector(Mh.sub(t),h))}t.add(To)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(Mo.containsPoint(ns.origin)===!1&&(ns.intersectSphere(Mo,Ku)===null||ns.origin.distanceToSquared(Ku)>(e.far-e.near)**2))&&($u.copy(r).invert(),ns.copy(e.ray).applyMatrix4($u),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,w=S;M<w;M+=3){let R=o.getX(M),I=o.getX(M+1),N=o.getX(M+2);s=Ao(this,p,e,n,c,h,f,R,I,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=o.getX(m),S=o.getX(m+1),M=o.getX(m+2);s=Ao(this,a,e,n,c,h,f,b,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=b,w=S;M<w;M+=3){let R=M,I=M+1,N=M+2;s=Ao(this,p,e,n,c,h,f,R,I,N),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let b=m,S=m+1,M=m+2;s=Ao(this,a,e,n,c,h,f,b,S,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function sm(i,e,t,n,s,r,a,o){let l;if(e.side===an?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Si,o),l===null)return null;wo.copy(o),wo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:i}}function Ao(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,bo),i.getVertexPosition(l,So),i.getVertexPosition(c,Eo);let h=sm(i,e,t,n,bo,So,Eo,ju);if(h){let f=new D;Mi.getBarycoord(ju,bo,So,Eo,f),s&&(h.uv=Mi.getInterpolatedAttribute(s,o,l,c,f,new ne)),r&&(h.uv1=Mi.getInterpolatedAttribute(r,o,l,c,f,new ne)),a&&(h.normal=Mi.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};Mi.getNormal(bo,So,Eo,u.normal),h.face=u,h.barycoord=f}return h}var pt=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function g(x,m,p,b,S,M,w,R,I,N,y){let E=M/I,L=w/N,F=M/2,k=w/2,Y=R/2,G=I+1,X=N+1,q=0,ie=0,ce=new D;for(let xe=0;xe<X;xe++){let pe=xe*L-k;for(let Ye=0;Ye<G;Ye++){let Ne=Ye*E-F;ce[x]=Ne*b,ce[m]=pe*S,ce[p]=Y,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[m]=0,ce[p]=R>0?1:-1,h.push(ce.x,ce.y,ce.z),f.push(Ye/I),f.push(1-xe/N),q+=1}}for(let xe=0;xe<N;xe++)for(let pe=0;pe<I;pe++){let Ye=u+pe+G*xe,Ne=u+pe+G*(xe+1),ht=u+(pe+1)+G*(xe+1),Qe=u+(pe+1)+G*xe;l.push(Ye,Ne,Qe),l.push(Ne,ht,Qe),ie+=6}o.addGroup(d,ie,y),d+=ie,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ms(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Ms(i[t]);for(let s in n)e[s]=n[s]}return e}function rm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function eu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var dn={clone:Ms,merge:yn},am=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,nt=class extends Gn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=am,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ra=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Bi=new D,Qu=new ne,ef=new ne,Ht=class extends ra{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Qu,ef),t.subVectors(ef,Qu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Yr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},qs=-90,Ys=1,Ko=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(qs,Ys,e,t);s.layers=this.layers,this.add(s);let r=new Ht(qs,Ys,e,t);r.layers=this.layers,this.add(r);let a=new Ht(qs,Ys,e,t);a.layers=this.layers,this.add(a);let o=new Ht(qs,Ys,e,t);o.layers=this.layers,this.add(o);let l=new Ht(qs,Ys,e,t);l.layers=this.layers,this.add(l);let c=new Ht(qs,Ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},aa=class extends vn{constructor(e=[],t=Xi,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new aa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new pt(5,5,5),r=new nt({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:an,blending:kt});r.uniforms.tEquirect.value=t;let a=new qe(s,r),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=fn),new Ko(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hn=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},lm={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new hn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},la=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var cs=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ca=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yo,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Sn=new D,lr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),s=At(s,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ea("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ea("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cr=class extends Gn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Zs,Hr=new D,Js=new D,$s=new D,Ks=new ne,Vr=new ne,Jf=new tt,Ro=new D,kr=new D,Co=new D,tf=new ne,bh=new ne,nf=new ne,ha=class extends Kt{constructor(e=new cr){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Rt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ca(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new lr(n,3,0,!1)),Zs.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new ne(.5,.5),this.count=1}raycast(e,t){e.camera===null&&$e('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Jf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),$s.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-$s.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Po(Ro.set(-.5,-.5,0),$s,a,Js,s,r),Po(kr.set(.5,-.5,0),$s,a,Js,s,r),Po(Co.set(.5,.5,0),$s,a,Js,s,r),tf.set(0,0),bh.set(1,0),nf.set(1,1);let o=e.ray.intersectTriangle(Ro,kr,Co,!1,Hr);if(o===null&&(Po(kr.set(-.5,.5,0),$s,a,Js,s,r),bh.set(0,1),o=e.ray.intersectTriangle(Ro,Co,kr,!1,Hr),o===null))return;let l=e.ray.origin.distanceTo(Hr);l<e.near||l>e.far||t.push({distance:l,point:Hr.clone(),uv:Mi.getInterpolation(Hr,Ro,kr,Co,tf,bh,nf,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Po(i,e,t,n,s,r){Ks.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Vr.x=r*Ks.x-s*Ks.y,Vr.y=s*Ks.x+r*Ks.y):Vr.copy(Ks),i.copy(e),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(Jf)}var Ti=class extends vn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Vt,h=Vt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var oi=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new tt,sf=new tt,Io=[],rf=new ri,cm=new tt,Gr=new qe,Wr=new ai,En=class extends qe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new oi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),rf.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(rf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Wr.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Wr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wr.copy(this.boundingSphere),Wr.applyMatrix4(n),e.ray.intersectsSphere(Wr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,js),sf.multiplyMatrices(n,js),Gr.matrixWorld=sf,Gr.raycast(e,Io);for(let a=0,o=Io.length;a<o;a++){let l=Io[a];l.instanceId=r,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new oi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(s*this.count),s,this.count,Bl,Wn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Sh=new D,hm=new D,um=new it,Vn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Sh.subVectors(n,t).cross(hm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Sh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||um.getNormalMatrix(e),s=this.coplanarPoint(Sh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new ai,fm=new ne(.5,.5),Do=new D,hr=class{constructor(e=new Vn,t=new Vn,n=new Vn,s=new Vn,r=new Vn,a=new Vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],b=r[12],S=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,d-h,p-g,w-b).normalize(),s[1].setComponents(c+a,d+h,p+g,w+b).normalize(),s[2].setComponents(c+o,d+f,p+x,w+S).normalize(),s[3].setComponents(c-o,d-f,p-x,w-S).normalize(),n)s[4].setComponents(l,u,m,M).normalize(),s[5].setComponents(c-l,d-u,p-m,w-M).normalize();else if(s[4].setComponents(c-l,d-u,p-m,w-M).normalize(),t===Kn)s[5].setComponents(c+l,d+u,p+m,w+M).normalize();else if(t===Qr)s[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){is.center.set(0,0,0);let t=fm.distanceTo(e.center);return is.radius=.7071067811865476+t,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var jo=class extends Gn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new D,el=new D,af=new tt,Xr=new ar,Lo=new ai,Eh=new D,of=new D,tl=class extends Kt{constructor(e=new Rt,t=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),el.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Qo.distanceTo(el);e.setAttribute("lineDistance",new at(n,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;af.copy(s).invert(),Xr.copy(e.ray).applyMatrix4(af);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),b=h.getX(x+1),S=Uo(this,e,Xr,l,p,b,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Uo(this,e,Xr,l,x,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=d,m=g-1;x<m;x+=c){let p=Uo(this,e,Xr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Uo(this,e,Xr,l,g-1,d,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Qo.fromBufferAttribute(o,s),el.fromBufferAttribute(o,r),t.distanceSqToSegment(Qo,el,Eh,of)>n)return;Eh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Eh);if(!(c<e.near||c>e.far))return{distance:c,point:of.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var lf=new D,cf=new D,ua=class extends tl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lf.fromBufferAttribute(t,s),cf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lf.distanceTo(cf);e.setAttribute("lineDistance",new at(n,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nl=class extends Gn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hf=new tt,Lh=new ar,No=new ai,Fo=new D,ur=class extends Kt{constructor(e=new Rt,t=new nl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;hf.copy(s).invert(),Lh.copy(e.ray).applyMatrix4(hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,x=d;g<x;g++){let m=c.getX(g);Fo.fromBufferAttribute(f,m),uf(Fo,m,l,s,e,t,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,x=d;g<x;g++)Fo.fromBufferAttribute(f,g),uf(Fo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function uf(i,e,t,n,s,r,a){let o=Lh.distanceSqToPoint(i);if(o<t){let l=new D;Lh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var wi=class extends vn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},li=class extends vn{constructor(e,t,n=ei,s,r,a,o=Vt,l=Vt,c,h=si,f=1){if(h!==si&&h!==hi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},il=class extends li{constructor(e,t=ei,n=Xi,s,r,a=Vt,o=Vt,l,c=si){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},fa=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Oi=class i extends Rt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,g=n*2+r,x=s+1,m=new D,p=new D;for(let b=0;b<=g;b++){let S=0,M=0,w=0,R=0;if(b<=n){let y=b/n,E=y*Math.PI/2;M=-h-e*Math.cos(E),w=e*Math.sin(E),R=-e*Math.cos(E),S=y*f}else if(b<=n+r){let y=(b-n)/r;M=-h+y*t,w=e,R=0,S=f+y*u}else{let y=(b-n-r)/n,E=y*Math.PI/2;M=h+e*Math.sin(E),w=e*Math.cos(E),R=e*Math.sin(E),S=f+u+y*f}let I=Math.max(0,Math.min(1,S/d)),N=0;b===0?N=.5/s:b===g&&(N=-.5/s);for(let y=0;y<=s;y++){let E=y/s,L=E*Math.PI*2,F=Math.sin(L),k=Math.cos(L);p.x=-w*k,p.y=M,p.z=w*F,o.push(p.x,p.y,p.z),m.set(-w*k,R,w*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(E+N,I)}if(b>0){let y=(b-1)*x;for(let E=0;E<s;E++){let L=y+E,F=y+E+1,k=b*x+E,Y=b*x+E+1;a.push(L,F,k),a.push(F,Y,k)}}}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var rn=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,x=[],m=n/2,p=0;b(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(d,2));function b(){let M=new D,w=new D,R=0,I=(t-e)/n;for(let N=0;N<=r;N++){let y=[],E=N/r,L=E*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,Y=k*l+o,G=Math.sin(Y),X=Math.cos(Y);w.x=L*G,w.y=-E*n+m,w.z=L*X,f.push(w.x,w.y,w.z),M.set(G,I,X).normalize(),u.push(M.x,M.y,M.z),d.push(k,1-E),y.push(g++)}x.push(y)}for(let N=0;N<s;N++)for(let y=0;y<r;y++){let E=x[y][N],L=x[y+1][N],F=x[y+1][N+1],k=x[y][N+1];(e>0||y!==0)&&(h.push(E,L,k),R+=3),(t>0||y!==r-1)&&(h.push(L,F,k),R+=3)}c.addGroup(p,R,0),p+=R}function S(M){let w=g,R=new ne,I=new D,N=0,y=M===!0?e:t,E=M===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*E,0),u.push(0,E,0),d.push(.5,.5),g++;let L=g;for(let F=0;F<=s;F++){let Y=F/s*l+o,G=Math.cos(Y),X=Math.sin(Y);I.x=y*X,I.y=m*E,I.z=y*G,f.push(I.x,I.y,I.z),u.push(0,E,0),R.x=G*.5+.5,R.y=X*.5*E+.5,d.push(R.x,R.y),g++}for(let F=0;F<s;F++){let k=w+F,Y=L+F;M===!0?h.push(Y,Y+1,k):h.push(Y+1,Y,k),N+=3}c.addGroup(p,N,M===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hs=class i extends rn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},sl=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let S=new D,M=new D,w=new D;for(let R=0;R<t.length;R+=3)d(t[R+0],S),d(t[R+1],M),d(t[R+2],w),l(S,M,w,b)}function l(b,S,M,w){let R=w+1,I=[];for(let N=0;N<=R;N++){I[N]=[];let y=b.clone().lerp(M,N/R),E=S.clone().lerp(M,N/R),L=R-N;for(let F=0;F<=L;F++)F===0&&N===R?I[N][F]=y:I[N][F]=y.clone().lerp(E,F/L)}for(let N=0;N<R;N++)for(let y=0;y<2*(R-N)-1;y++){let E=Math.floor(y/2);y%2===0?(u(I[N][E+1]),u(I[N+1][E]),u(I[N][E])):(u(I[N][E+1]),u(I[N+1][E+1]),u(I[N+1][E]))}}function c(b){let S=new D;for(let M=0;M<r.length;M+=3)S.x=r[M+0],S.y=r[M+1],S.z=r[M+2],S.normalize().multiplyScalar(b),r[M+0]=S.x,r[M+1]=S.y,r[M+2]=S.z}function h(){let b=new D;for(let S=0;S<r.length;S+=3){b.x=r[S+0],b.y=r[S+1],b.z=r[S+2];let M=m(b)/2/Math.PI+.5,w=p(b)/Math.PI+.5;a.push(M,1-w)}g(),f()}function f(){for(let b=0;b<a.length;b+=6){let S=a[b+0],M=a[b+2],w=a[b+4],R=Math.max(S,M,w),I=Math.min(S,M,w);R>.9&&I<.1&&(S<.2&&(a[b+0]+=1),M<.2&&(a[b+2]+=1),w<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function d(b,S){let M=b*3;S.x=e[M+0],S.y=e[M+1],S.z=e[M+2]}function g(){let b=new D,S=new D,M=new D,w=new D,R=new ne,I=new ne,N=new ne;for(let y=0,E=0;y<r.length;y+=9,E+=6){b.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),R.set(a[E+0],a[E+1]),I.set(a[E+2],a[E+3]),N.set(a[E+4],a[E+5]),w.copy(b).add(S).add(M).divideScalar(3);let L=m(w);x(R,E+0,b,L),x(I,E+2,S,L),x(N,E+4,M,L)}}function x(b,S,M,w){w<0&&b.x===1&&(a[S]=b.x-1),M.x===0&&M.z===0&&(a[S]=w/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ne:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new tt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(lt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(lt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fr=class extends Nn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rl=class extends fr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Bo=new D,Th=new tu,wh=new tu,Ah=new tu,dr=class extends Nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Bo.subVectors(s[0],s[1]).add(s[0]),c=Bo);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Th.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,x,m),wh.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,x,m),Ah.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Th.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),wh.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),Ah.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Th.calc(l),wh.calc(l),Ah.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ff(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function dm(i,e){let t=1-i;return t*t*e}function pm(i,e){return 2*(1-i)*i*e}function mm(i,e){return i*i*e}function Jr(i,e,t,n){return dm(i,e)+pm(i,t)+mm(i,n)}function gm(i,e){let t=1-i;return t*t*t*e}function xm(i,e){let t=1-i;return 3*t*t*i*e}function vm(i,e){return 3*(1-i)*i*i*e}function _m(i,e){return i*i*i*e}function $r(i,e,t,n,s){return gm(i,e)+xm(i,t)+vm(i,n)+_m(i,s)}var da=class extends Nn{constructor(e=new ne,t=new ne,n=new ne,s=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($r(e,s.x,r.x,a.x,o.x),$r(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},al=class extends Nn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($r(e,s.x,r.x,a.x,o.x),$r(e,s.y,r.y,a.y,o.y),$r(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends Nn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ol=class extends Nn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Nn{constructor(e=new ne,t=new ne,n=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ne){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Nn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Jr(e,s.x,r.x,a.x),Jr(e,s.y,r.y,a.y),Jr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(ff(o,l.x,c.x,h.x,f.x),ff(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ne().fromArray(s))}return this}},ll=Object.freeze({__proto__:null,ArcCurve:rl,CatmullRomCurve3:dr,CubicBezierCurve:da,CubicBezierCurve3:al,EllipseCurve:fr,LineCurve:pa,LineCurve3:ol,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ga,SplineCurve:xa}),cl=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ll[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ll[s.type]().fromJSON(s))}return this}},va=class extends cl{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pa(this.currentPoint.clone(),new ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ma(this.currentPoint.clone(),new ne(e,t),new ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new da(this.currentPoint.clone(),new ne(e,t),new ne(n,s),new ne(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new fr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zi=class extends va{constructor(e){super(e),this.uuid=ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new va().fromJSON(s))}return this}};function ym(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=$f(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Tm(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,f=l;for(let u=t;u<s;u+=t){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return _a(r,a,t,o,l,c,0),a}function $f(i,e,t,n,s){let r;if(s===Fm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=df(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=df(a/n|0,i[a],i[a+1],r);return r&&pr(r,r.next)&&(Ma(r),r=r.next),r}function us(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pr(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _a(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Pm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?bm(i,n,s,r):Mm(i)){e.push(l.i,i.i,c.i),Ma(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Sm(us(i),e),_a(i,e,t,n,s,r,2)):a===2&&Em(i,e,t,n,s,r):_a(us(i),e,t,n,s,r,1);break}}}function Mm(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&qr(s,o,r,l,a,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function bm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),x=Math.max(o,l,c),m=Math.max(h,f,u),p=Uh(d,g,e,t,n),b=Uh(x,m,e,t,n),S=i.prevZ,M=i.nextZ;for(;S&&S.z>=p&&M&&M.z<=b;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&qr(o,h,l,f,c,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0||(S=S.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&qr(o,h,l,f,c,u,M.x,M.y)&&Bt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=x&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&qr(o,h,l,f,c,u,S.x,S.y)&&Bt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;M&&M.z<=b;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==a&&qr(o,h,l,f,c,u,M.x,M.y)&&Bt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Sm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!pr(n,s)&&jf(n,t,t.next,s)&&ya(n,s)&&ya(s,n)&&(e.push(n.i,t.i,s.i),Ma(t),Ma(t.next),t=i=s),t=t.next}while(t!==i);return us(t)}function Em(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Lm(a,o)){let l=Qf(a,o);a=us(a,a.next),l=us(l,l.next),_a(a,e,t,n,s,r,0),_a(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Tm(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=$f(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Dm(c))}s.sort(wm);for(let r=0;r<s.length;r++)t=Am(s[r],t);return t}function wm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Am(i,e){let t=Rm(i,e);if(!t)return e;let n=Qf(t,i);return us(n,n.next),us(t,t.next)}function Rm(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(pr(i,t))return t;do{if(pr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Kf(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);ya(t,i)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&Cm(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function Cm(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function Pm(i,e,t,n){let s=i;do s.z===0&&(s.z=Uh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Im(s)}function Im(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Uh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Dm(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Kf(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function qr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Kf(i,e,t,n,s,r,a,o)}function Lm(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Um(i,e)&&(ya(i,e)&&ya(e,i)&&Nm(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||pr(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pr(i,e){return i.x===e.x&&i.y===e.y}function jf(i,e,t,n){let s=zo(Bt(i,e,t)),r=zo(Bt(i,e,n)),a=zo(Bt(t,n,i)),o=zo(Bt(t,n,e));return!!(s!==r&&a!==o||s===0&&Oo(i,t,e)||r===0&&Oo(i,n,e)||a===0&&Oo(t,i,n)||o===0&&Oo(t,e,n))}function Oo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zo(i){return i>0?1:i<0?-1:0}function Um(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&jf(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ya(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function Nm(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Qf(i,e){let t=Nh(i.i,i.x,i.y),n=Nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function df(i,e,t,n){let s=Nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ma(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Fm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Fh=class{static triangulate(e,t,n=2){return ym(e,t,n)}},rs=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];pf(e),mf(n,e);let a=e.length;t.forEach(pf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,mf(n,t[l]);let o=Fh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function pf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function mf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var fs=class i extends Rt{constructor(e=new zi([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new at(s,3)),this.setAttribute("uv",new at(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Bm,S,M=!1,w,R,I,N;if(p){S=p.getSpacedPoints(h),M=!0,u=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(h,ae),R=new D,I=new D,N=new D}u||(m=0,d=0,g=0,x=0);let y=o.extractPoints(c),E=y.shape,L=y.holes;if(!rs.isClockWise(E)){E=E.reverse();for(let ae=0,fe=L.length;ae<fe;ae++){let le=L[ae];rs.isClockWise(le)&&(L[ae]=le.reverse())}}function k(ae){let le=10000000000000001e-36,Ee=ae[0];for(let P=1;P<=ae.length;P++){let Re=P%ae.length,Te=ae[Re],He=Te.x-Ee.x,me=Te.y-Ee.y,C=He*He+me*me,_=Math.max(Math.abs(Te.x),Math.abs(Te.y),Math.abs(Ee.x),Math.abs(Ee.y)),O=le*_*_;if(C<=O){ae.splice(Re,1),P--;continue}Ee=Te}}k(E),L.forEach(k);let Y=L.length,G=E;for(let ae=0;ae<Y;ae++){let fe=L[ae];E=E.concat(fe)}function X(ae,fe,le){return fe||$e("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(fe,le)}let q=E.length;function ie(ae,fe,le){let Ee,P,Re,Te=ae.x-fe.x,He=ae.y-fe.y,me=le.x-ae.x,C=le.y-ae.y,_=Te*Te+He*He,O=Te*C-He*me;if(Math.abs(O)>Number.EPSILON){let j=Math.sqrt(_),Q=Math.sqrt(me*me+C*C),Z=fe.x-He/j,_e=fe.y+Te/j,he=le.x-C/Q,Le=le.y+me/Q,We=((he-Z)*C-(Le-_e)*me)/(Te*C-He*me);Ee=Z+Te*We-ae.x,P=_e+He*We-ae.y;let ue=Ee*Ee+P*P;if(ue<=2)return new ne(Ee,P);Re=Math.sqrt(ue/2)}else{let j=!1;Te>Number.EPSILON?me>Number.EPSILON&&(j=!0):Te<-Number.EPSILON?me<-Number.EPSILON&&(j=!0):Math.sign(He)===Math.sign(C)&&(j=!0),j?(Ee=-He,P=Te,Re=Math.sqrt(_)):(Ee=Te,P=He,Re=Math.sqrt(_/2))}return new ne(Ee/Re,P/Re)}let ce=[];for(let ae=0,fe=G.length,le=fe-1,Ee=ae+1;ae<fe;ae++,le++,Ee++)le===fe&&(le=0),Ee===fe&&(Ee=0),ce[ae]=ie(G[ae],G[le],G[Ee]);let xe=[],pe,Ye=ce.concat();for(let ae=0,fe=Y;ae<fe;ae++){let le=L[ae];pe=[];for(let Ee=0,P=le.length,Re=P-1,Te=Ee+1;Ee<P;Ee++,Re++,Te++)Re===P&&(Re=0),Te===P&&(Te=0),pe[Ee]=ie(le[Ee],le[Re],le[Te]);xe.push(pe),Ye=Ye.concat(pe)}let Ne;if(m===0)Ne=rs.triangulateShape(G,L);else{let ae=[],fe=[];for(let le=0;le<m;le++){let Ee=le/m,P=d*Math.cos(Ee*Math.PI/2),Re=g*Math.sin(Ee*Math.PI/2)+x;for(let Te=0,He=G.length;Te<He;Te++){let me=X(G[Te],ce[Te],Re);ze(me.x,me.y,-P),Ee===0&&ae.push(me)}for(let Te=0,He=Y;Te<He;Te++){let me=L[Te];pe=xe[Te];let C=[];for(let _=0,O=me.length;_<O;_++){let j=X(me[_],pe[_],Re);ze(j.x,j.y,-P),Ee===0&&C.push(j)}Ee===0&&fe.push(C)}}Ne=rs.triangulateShape(ae,fe)}let ht=Ne.length,Qe=g+x;for(let ae=0;ae<q;ae++){let fe=u?X(E[ae],Ye[ae],Qe):E[ae];M?(I.copy(w.normals[0]).multiplyScalar(fe.x),R.copy(w.binormals[0]).multiplyScalar(fe.y),N.copy(S[0]).add(I).add(R),ze(N.x,N.y,N.z)):ze(fe.x,fe.y,0)}for(let ae=1;ae<=h;ae++)for(let fe=0;fe<q;fe++){let le=u?X(E[fe],Ye[fe],Qe):E[fe];M?(I.copy(w.normals[ae]).multiplyScalar(le.x),R.copy(w.binormals[ae]).multiplyScalar(le.y),N.copy(S[ae]).add(I).add(R),ze(N.x,N.y,N.z)):ze(le.x,le.y,f/h*ae)}for(let ae=m-1;ae>=0;ae--){let fe=ae/m,le=d*Math.cos(fe*Math.PI/2),Ee=g*Math.sin(fe*Math.PI/2)+x;for(let P=0,Re=G.length;P<Re;P++){let Te=X(G[P],ce[P],Ee);ze(Te.x,Te.y,f+le)}for(let P=0,Re=L.length;P<Re;P++){let Te=L[P];pe=xe[P];for(let He=0,me=Te.length;He<me;He++){let C=X(Te[He],pe[He],Ee);M?ze(C.x,C.y+S[h-1].y,S[h-1].x+le):ze(C.x,C.y,f+le)}}}te(),se();function te(){let ae=s.length/3;if(u){let fe=0,le=q*fe;for(let Ee=0;Ee<ht;Ee++){let P=Ne[Ee];Ce(P[2]+le,P[1]+le,P[0]+le)}fe=h+m*2,le=q*fe;for(let Ee=0;Ee<ht;Ee++){let P=Ne[Ee];Ce(P[0]+le,P[1]+le,P[2]+le)}}else{for(let fe=0;fe<ht;fe++){let le=Ne[fe];Ce(le[2],le[1],le[0])}for(let fe=0;fe<ht;fe++){let le=Ne[fe];Ce(le[0]+q*h,le[1]+q*h,le[2]+q*h)}}n.addGroup(ae,s.length/3-ae,0)}function se(){let ae=s.length/3,fe=0;Ae(G,fe),fe+=G.length;for(let le=0,Ee=L.length;le<Ee;le++){let P=L[le];Ae(P,fe),fe+=P.length}n.addGroup(ae,s.length/3-ae,1)}function Ae(ae,fe){let le=ae.length;for(;--le>=0;){let Ee=le,P=le-1;P<0&&(P=ae.length-1);for(let Re=0,Te=h+m*2;Re<Te;Re++){let He=q*Re,me=q*(Re+1),C=fe+Ee+He,_=fe+P+He,O=fe+P+me,j=fe+Ee+me;ot(C,_,O,j)}}}function ze(ae,fe,le){l.push(ae),l.push(fe),l.push(le)}function Ce(ae,fe,le){ut(ae),ut(fe),ut(le);let Ee=s.length/3,P=b.generateTopUV(n,s,Ee-3,Ee-2,Ee-1);Ke(P[0]),Ke(P[1]),Ke(P[2])}function ot(ae,fe,le,Ee){ut(ae),ut(fe),ut(Ee),ut(fe),ut(le),ut(Ee);let P=s.length/3,Re=b.generateSideWallUV(n,s,P-6,P-3,P-2,P-1);Ke(Re[0]),Ke(Re[1]),Ke(Re[3]),Ke(Re[1]),Ke(Re[2]),Ke(Re[3])}function ut(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function Ke(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Om(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ll[s.type]().fromJSON(s)),new i(n,e.options)}},Bm={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ne(r,a),new ne(o,l),new ne(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ne(a,1-l),new ne(c,1-f),new ne(u,1-g),new ne(x,1-p)]:[new ne(o,1-l),new ne(h,1-f),new ne(d,1-g),new ne(m,1-p)]}};function Om(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ba=class i extends sl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Sa=class i extends Rt{constructor(e=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,f=new D,u=new ne,d=new D,g=new D,x=new D,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),l.push(d.x,d.y,d.z),x.copy(g)}for(let b=0;b<=t;b++){let S=n+b*h*s,M=Math.sin(S),w=Math.cos(S);for(let R=0;R<=e.length-1;R++){f.x=e[R].x*M,f.y=e[R].y,f.z=e[R].x*w,a.push(f.x,f.y,f.z),u.x=b/t,u.y=R/(e.length-1),o.push(u.x,u.y);let I=l[3*R+0]*M,N=l[3*R+1],y=l[3*R+0]*w;c.push(I,N,y)}}for(let b=0;b<t;b++)for(let S=0;S<e.length-1;S++){let M=S+b*e.length,w=M,R=M+e.length,I=M+e.length+1,N=M+1;r.push(w,R,N),r.push(I,N,R)}this.setIndex(r),this.setAttribute("position",new at(a,3)),this.setAttribute("uv",new at(o,2)),this.setAttribute("normal",new at(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Pt=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let S=0;S<c;S++){let M=S*f-r;g.push(M,-b,0),x.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let S=b+c*p,M=b+c*(p+1),w=b+1+c*(p+1),R=b+1+c*p;d.push(S,M,R),d.push(M,w,R)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var jn=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new D,u=new D,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let b=[],S=p/n,M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let w=0;w<=t;w++){let R=w/t;f.x=-e*Math.cos(s+R*r)*Math.sin(a+S*o),f.y=e*Math.cos(a+S*o),f.z=e*Math.sin(s+R*r)*Math.sin(a+S*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),x.push(u.x,u.y,u.z),m.push(R+M,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let S=h[p][b+1],M=h[p][b],w=h[p+1][b],R=h[p+1][b+1];(p!==0||a>0)&&d.push(S,M,R),(p!==n-1||l<Math.PI)&&d.push(M,w,R)}this.setIndex(d),this.setAttribute("position",new at(g,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class i extends Rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new D,f=new D,u=new D;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;a.push(x,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ea=class i extends Rt{constructor(e=new ga(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new ne,h=new D,f=[],u=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(d,2));function x(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),b(),p()}function m(S){h=e.getPointAt(S/t,h);let M=a.normals[S],w=a.binormals[S];for(let R=0;R<=s;R++){let I=R/s*Math.PI*2,N=Math.sin(I),y=-Math.cos(I);l.x=y*M.x+N*w.x,l.y=y*M.y+N*w.y,l.z=y*M.z+N*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=t;S++)for(let M=1;M<=s;M++){let w=(s+1)*(S-1)+(M-1),R=(s+1)*S+(M-1),I=(s+1)*S+M,N=(s+1)*(S-1)+M;g.push(w,R,N),g.push(R,I,N)}}function b(){for(let S=0;S<=t;S++)for(let M=0;M<=s;M++)c.x=S/t,c.y=M/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ll[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var mr=class extends nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},St=class extends Gn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ds=class extends St{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ta=class extends Gn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var hl=class extends Gn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ul=class extends Gn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ho(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}var ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fl=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ch,endingEnd:Ch}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ph:r=e,o=2*t-n;break;case Ih:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ph:a=e,l=2*n-t;break;case Ih:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,b=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+b*a[c+w]+S*a[l+w]+M*a[f+w];return r}},dl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},pl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(t,this.TimeBufferType),this.values=Ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case qo:t=this.InterpolantFactoryMethodLinear;break;case Vo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Vo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&($e("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&($e("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){$e("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){$e("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Rp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){$e("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Vo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[u+g]||x!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=qo;var Vi=class extends Fn{constructor(e,t,n){super(e,t,n)}};Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=Kr;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};ml.prototype.ValueTypeName="color";var gl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};gl.prototype.ValueTypeName="number";var xl=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)kn.slerpFlat(r,0,a,c-o,a,c,l);return r}},wa=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xl(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var ki=class extends Fn{constructor(e,t,n){super(e,t,n)}};ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=Kr;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;var vl=class extends Fn{constructor(e,t,n,s){super(e,t,n,s)}};vl.prototype.ValueTypeName="vector";var ko={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},_l=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ed=new _l,gr=class{constructor(e){this.manager=e!==void 0?e:ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=new WeakMap,yl=class extends gr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ko.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=Qs.get(a);f===void 0&&(f=[],Qs.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=tr("img");function l(){h(),t&&t(this);let f=Qs.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),ko.remove(`image:${e}`);let u=Qs.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ko.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Aa=class extends gr{constructor(e){super(e)}load(e,t,n,s){let r=new vn,a=new yl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},xr=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ra=class extends xr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Rh=new tt,gf=new D,xf=new D,Ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),xf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xf),t.updateMatrixWorld(),Rh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Bh=class extends Ml{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Gi=class extends xr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Bh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wi=class extends ra{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Oh=class extends Ml{constructor(){super(new Wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ca=class extends xr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Oh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var bl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ms=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var nu="\\[\\]\\.:\\/",zm=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",Hm="[^"+nu.replace("\\.","")+"]",Vm=/((?:WC+[\/:])*)/.source.replace("WC",iu),km=/(WCOD+)?/.source.replace("WCOD",Hm),Gm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Wm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),Xm=new RegExp("^"+Vm+km+Gm+Wm+"$"),qm=["material","materials","bones","map"],zh=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zm,"")}static parseTrackName(e){let t=Xm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){$e("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){$e("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){$e("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){$e("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){$e("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){$e("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;$e("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){$e("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=zh;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);function su(i,e,t,n){let s=Ym(n);switch(t){case Jh:return i*e;case Bl:return i*e/s.components*s.byteLength;case Ol:return i*e/s.components*s.byteLength;case ys:return i*e*2/s.components*s.byteLength;case zl:return i*e*2/s.components*s.byteLength;case $h:return i*e*3/s.components*s.byteLength;case Pn:return i*e*4/s.components*s.byteLength;case Hl:return i*e*4/s.components*s.byteLength;case Ha:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:case Wl:return Math.max(i,16)*Math.max(e,8)/4;case Vl:case Gl:return Math.max(i,8)*Math.max(e,8)/2;case Xl:case ql:case Zl:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fc:case dc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xc:case vc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ym(i){switch(i){case _n:case Xh:return{byteLength:1,components:1};case _r:case qh:case Gt:return{byteLength:2,components:1};case Nl:case Fl:return{byteLength:2,components:4};case ei:case Ul:case Wn:return{byteLength:4,components:1};case Yh:case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Sd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function jm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,f[u]=x)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
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
#endif`,t0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,r0=`#ifdef USE_AOMAP
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
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o0=`#ifdef USE_BATCHING
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
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,b0=`#define PI 3.141592653589793
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
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,E0=`vec3 transformedNormal = objectNormal;
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
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,L0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,F0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,O0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W0=`uniform bool receiveShadow;
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
#endif`,X0=`#ifdef USE_ENVMAP
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
#endif`,q0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$0=`PhysicalMaterial material;
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
#endif`,K0=`uniform sampler2D dfgLUT;
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
}`,j0=`
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
#endif`,Q0=`#if defined( RE_IndirectDiffuse )
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
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ng=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ag=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,og=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lg=`#if defined( USE_POINTS_UV )
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
#endif`,cg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pg=`#ifdef USE_MORPHTARGETS
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
#endif`,mg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
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
#endif`,bg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ag=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Rg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ig=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bg=`float getShadowMask() {
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
}`,Og=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zg=`#ifdef USE_SKINNING
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
#endif`,Hg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vg=`#ifdef USE_SKINNING
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
#endif`,kg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qg=`#ifdef USE_TRANSMISSION
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
#endif`,Yg=`#ifdef USE_TRANSMISSION
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
#endif`,Zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,jg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qg=`uniform sampler2D t2D;
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ax=`#define DISTANCE
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
}`,ox=`#define DISTANCE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hx=`uniform float scale;
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
}`,ux=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,xx=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,_x=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,bx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,Ex=`#define TOON
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
}`,Tx=`#define TOON
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
}`,wx=`uniform float size;
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
}`,Ax=`uniform vec3 diffuse;
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
}`,Rx=`#include <common>
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
}`,Cx=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Ix=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Qm,alphahash_pars_fragment:e0,alphamap_fragment:t0,alphamap_pars_fragment:n0,alphatest_fragment:i0,alphatest_pars_fragment:s0,aomap_fragment:r0,aomap_pars_fragment:a0,batching_pars_vertex:o0,batching_vertex:l0,begin_vertex:c0,beginnormal_vertex:h0,bsdfs:u0,iridescence_fragment:f0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:x0,color_fragment:v0,color_pars_fragment:_0,color_pars_vertex:y0,color_vertex:M0,common:b0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:w0,emissivemap_fragment:A0,emissivemap_pars_fragment:R0,colorspace_fragment:C0,colorspace_pars_fragment:P0,envmap_fragment:I0,envmap_common_pars_fragment:D0,envmap_pars_fragment:L0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:X0,envmap_vertex:N0,fog_vertex:F0,fog_pars_vertex:B0,fog_fragment:O0,fog_pars_fragment:z0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:G0,lights_pars_begin:W0,lights_toon_fragment:q0,lights_toon_pars_fragment:Y0,lights_phong_fragment:Z0,lights_phong_pars_fragment:J0,lights_physical_fragment:$0,lights_physical_pars_fragment:K0,lights_fragment_begin:j0,lights_fragment_maps:Q0,lights_fragment_end:eg,logdepthbuf_fragment:tg,logdepthbuf_pars_fragment:ng,logdepthbuf_pars_vertex:ig,logdepthbuf_vertex:sg,map_fragment:rg,map_pars_fragment:ag,map_particle_fragment:og,map_particle_pars_fragment:lg,metalnessmap_fragment:cg,metalnessmap_pars_fragment:hg,morphinstance_vertex:ug,morphcolor_vertex:fg,morphnormal_vertex:dg,morphtarget_pars_vertex:pg,morphtarget_vertex:mg,normal_fragment_begin:gg,normal_fragment_maps:xg,normal_pars_fragment:vg,normal_pars_vertex:_g,normal_vertex:yg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:bg,clearcoat_normal_fragment_maps:Sg,clearcoat_pars_fragment:Eg,iridescence_pars_fragment:Tg,opaque_fragment:wg,packing:Ag,premultiplied_alpha_fragment:Rg,project_vertex:Cg,dithering_fragment:Pg,dithering_pars_fragment:Ig,roughnessmap_fragment:Dg,roughnessmap_pars_fragment:Lg,shadowmap_pars_fragment:Ug,shadowmap_pars_vertex:Ng,shadowmap_vertex:Fg,shadowmask_pars_fragment:Bg,skinbase_vertex:Og,skinning_pars_vertex:zg,skinning_vertex:Hg,skinnormal_vertex:Vg,specularmap_fragment:kg,specularmap_pars_fragment:Gg,tonemapping_fragment:Wg,tonemapping_pars_fragment:Xg,transmission_fragment:qg,transmission_pars_fragment:Yg,uv_pars_fragment:Zg,uv_pars_vertex:Jg,uv_vertex:$g,worldpos_vertex:Kg,background_vert:jg,background_frag:Qg,backgroundCube_vert:ex,backgroundCube_frag:tx,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distance_vert:ax,distance_frag:ox,equirect_vert:lx,equirect_frag:cx,linedashed_vert:hx,linedashed_frag:ux,meshbasic_vert:fx,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:xx,meshnormal_vert:vx,meshnormal_frag:_x,meshphong_vert:yx,meshphong_frag:Mx,meshphysical_vert:bx,meshphysical_frag:Sx,meshtoon_vert:Ex,meshtoon_frag:Tx,points_vert:wx,points_frag:Ax,shadow_vert:Rx,shadow_frag:Cx,sprite_vert:Px,sprite_frag:Ix},De={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},fi={basic:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ye(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:yn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:yn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:yn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new ye(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:yn([De.points,De.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:yn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:yn([De.common,De.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:yn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:yn([De.sprite,De.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:yn([De.common,De.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:yn([De.lights,De.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};fi.physical={uniforms:yn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Sc={r:0,b:0,g:0},bs=new Un,Dx=new tt;function Lx(i,e,t,n,s,r,a){let o=new ye(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function g(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?t:e).get(M)),M}function x(S){let M=!1,w=g(S);w===null?p(o,l):w&&w.isColor&&(p(w,1),M=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,M){let w=g(M);w&&(w.isCubeTexture||w.mapping===Oa)?(h===void 0&&(h=new qe(new pt(1,1,1),new nt({name:"BackgroundCubeMaterial",uniforms:Ms(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bs.copy(M.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(bs)),h.material.toneMapped=dt.getTransfer(w.colorSpace)!==yt,(f!==w||u!==w.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=w,u=w.version,d=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new qe(new Pt(2,2),new nt({name:"BackgroundMaterial",uniforms:Ms(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=dt.getTransfer(w.colorSpace)!==yt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||u!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=w,u=w.version,d=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,M){S.getRGB(Sc,eu(i)),n.buffers.color.setClear(Sc.r,Sc.g,Sc.b,M,a)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,M=1){o.set(S),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:x,addToRenderList:m,dispose:b}}function Ux(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(E,L,F,k,Y){let G=!1,X=f(k,F,L);r!==X&&(r=X,c(r.object)),G=d(E,k,F,Y),G&&g(E,k,F,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(E,L,F,k),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function f(E,L,F){let k=F.wireframe===!0,Y=n[E.id];Y===void 0&&(Y={},n[E.id]=Y);let G=Y[L.id];G===void 0&&(G={},Y[L.id]=G);let X=G[k];return X===void 0&&(X=u(l()),G[k]=X),X}function u(E){let L=[],F=[],k=[];for(let Y=0;Y<t;Y++)L[Y]=0,F[Y]=0,k[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:E,attributes:{},index:null}}function d(E,L,F,k){let Y=r.attributes,G=L.attributes,X=0,q=F.getAttributes();for(let ie in q)if(q[ie].location>=0){let xe=Y[ie],pe=G[ie];if(pe===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),xe===void 0||xe.attribute!==pe||pe&&xe.data!==pe.data)return!0;X++}return r.attributesNum!==X||r.index!==k}function g(E,L,F,k){let Y={},G=L.attributes,X=0,q=F.getAttributes();for(let ie in q)if(q[ie].location>=0){let xe=G[ie];xe===void 0&&(ie==="instanceMatrix"&&E.instanceMatrix&&(xe=E.instanceMatrix),ie==="instanceColor"&&E.instanceColor&&(xe=E.instanceColor));let pe={};pe.attribute=xe,xe&&xe.data&&(pe.data=xe.data),Y[ie]=pe,X++}r.attributes=Y,r.attributesNum=X,r.index=k}function x(){let E=r.newAttributes;for(let L=0,F=E.length;L<F;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){let F=r.newAttributes,k=r.enabledAttributes,Y=r.attributeDivisors;F[E]=1,k[E]===0&&(i.enableVertexAttribArray(E),k[E]=1),Y[E]!==L&&(i.vertexAttribDivisor(E,L),Y[E]=L)}function b(){let E=r.newAttributes,L=r.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==E[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function S(E,L,F,k,Y,G,X){X===!0?i.vertexAttribIPointer(E,L,F,Y,G):i.vertexAttribPointer(E,L,F,k,Y,G)}function M(E,L,F,k){x();let Y=k.attributes,G=F.getAttributes(),X=L.defaultAttributeValues;for(let q in G){let ie=G[q];if(ie.location>=0){let ce=Y[q];if(ce===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ce=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ce=E.instanceColor)),ce!==void 0){let xe=ce.normalized,pe=ce.itemSize,Ye=e.get(ce);if(Ye===void 0)continue;let Ne=Ye.buffer,ht=Ye.type,Qe=Ye.bytesPerElement,te=ht===i.INT||ht===i.UNSIGNED_INT||ce.gpuType===Ul;if(ce.isInterleavedBufferAttribute){let se=ce.data,Ae=se.stride,ze=ce.offset;if(se.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ie.locationSize;Ce++)p(ie.location+Ce,se.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ce=0;Ce<ie.locationSize;Ce++)m(ie.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let Ce=0;Ce<ie.locationSize;Ce++)S(ie.location+Ce,pe/ie.locationSize,ht,xe,Ae*Qe,(ze+pe/ie.locationSize*Ce)*Qe,te)}else{if(ce.isInstancedBufferAttribute){for(let se=0;se<ie.locationSize;se++)p(ie.location+se,ce.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let se=0;se<ie.locationSize;se++)m(ie.location+se);i.bindBuffer(i.ARRAY_BUFFER,Ne);for(let se=0;se<ie.locationSize;se++)S(ie.location+se,pe/ie.locationSize,ht,xe,pe*Qe,pe/ie.locationSize*se*Qe,te)}}else if(X!==void 0){let xe=X[q];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(ie.location,xe);break;case 3:i.vertexAttrib3fv(ie.location,xe);break;case 4:i.vertexAttrib4fv(ie.location,xe);break;default:i.vertexAttrib1fv(ie.location,xe)}}}}b()}function w(){N();for(let E in n){let L=n[E];for(let F in L){let k=L[F];for(let Y in k)h(k[Y].object),delete k[Y];delete L[F]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let F in L){let k=L[F];for(let Y in k)h(k[Y].object),delete k[Y];delete L[F]}delete n[E.id]}function I(E){for(let L in n){let F=n[L];if(F[E.id]===void 0)continue;let k=F[E.id];for(let Y in k)h(k[Y].object),delete k[Y];delete F[E.id]}}function N(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Nx(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),t.update(h,n,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function l(c,h,f,u){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Fx(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==Pn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let N=I===Gt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==_n&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wn&&!N)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Je("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:M,maxSamples:w,samples:R}}function Bx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Vn,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,S=b*4,M=p.clippingState||null;l.value=M,M=h(g,u,S,d);for(let w=0;w!==S;++w)M[w]=t[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,M=d;S!==x;++S,M+=4)a.copy(f[S]).applyMatrix4(b,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Ox(i){let e=new WeakMap;function t(a,o){return o===Il?a.mapping=Xi:o===Dl&&(a.mapping=_s),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Il||o===Dl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new oa(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Yi=4,td=[.125,.215,.35,.446,.526,.582],Es=20,zx=256,Xa=new Wi,nd=new ye,ru=null,au=0,ou=0,lu=!1,Hx=new D,br=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Hx}=r;ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ru,au,ou),this._renderer.xr.enabled=lu,e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===_s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ru=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),ou=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Gt,format:Pn,colorSpace:ls,depthBuffer:!1},s=id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vx(r)),this._blurMaterial=Gx(r,e,t),this._ggxMaterial=kx(r,e,t)}return s}_compileMaterial(e){let t=new qe(new Rt,e);this._renderer.compile(t,Xa)}_sceneToCubeUV(e,t,n,s,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(nd),f.toneMapping=Qn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qe(new pt,new Ot({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,b=e.background;b?b.isColor&&(m.color.copy(b),e.background=null,p=!0):(m.color.copy(nd),p=!0);for(let S=0;S<6;S++){let M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let w=this._cubeSize;yr(s,M*w,S>2?w:0,w,w),f.setRenderTarget(s),p&&f.render(x,l),f.render(e,l)}f.toneMapping=d,f.autoClear=u,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Xi||e.mapping===_s;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=rd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;yr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Yi?n-g+Yi:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,yr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(o,Xa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,yr(e,m,p,3*x,2*x),s.setRenderTarget(e),s.render(o,Xa)}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Es-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Es;m>Es&&Je(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Es}`);let p=[],b=0;for(let I=0;I<Es;++I){let N=I/x,y=Math.exp(-N*N/2);p.push(y),I===0?b+=y:I<m&&(b+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;let M=this._sizeLods[s],w=3*M*(s>S-Yi?s-S+Yi:0),R=4*(this._cubeSize-M);yr(t,w,R,3*M,2*M),l.setRenderTarget(t),l.render(f,Xa)}};function Vx(i){let e=[],t=[],n=[],s=i,r=i-Yi+1+td.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Yi?l=td[a-i+Yi-1]:a===0&&(l=0),t.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,p=1,b=new Float32Array(x*g*d),S=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let R=0;R<d;R++){let I=R%3*2/3-1,N=R>2?0:-1,y=[I,N,0,I+2/3,N,0,I+2/3,N+1,0,I,N,0,I+2/3,N+1,0,I,N+1,0];b.set(y,x*g*R),S.set(u,m*g*R);let E=[R,R,R,R,R,R];M.set(E,p*g*R)}let w=new Rt;w.setAttribute("position",new Mt(b,x)),w.setAttribute("uv",new Mt(S,m)),w.setAttribute("faceIndex",new Mt(M,p)),n.push(new qe(w,null)),s>Yi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function id(i,e,t){let n=new Ft(i,e,t);return n.texture.mapping=Oa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function kx(i,e,t){return new nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function Gx(i,e,t){let n=new Float32Array(Es),s=new D(0,1,0);return new nt({name:"SphericalGaussianBlur",defines:{n:Es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wc(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function sd(){return new nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:kt,depthTest:!1,depthWrite:!1})}function rd(){return new nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kt,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function Wx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Il||l===Dl,h=l===Xi||l===_s;if(c||h){let f=e.get(o),u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new br(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new br(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Xx(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ir("WebGLRenderer: "+n+" extension not supported."),s}}}function qx(i,e,t,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)e.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let b=d.array;x=d.version;for(let S=0,M=b.length;S<M;S+=3){let w=b[S+0],R=b[S+1],I=b[S+2];u.push(w,R,R,I,I,w)}}else if(g!==void 0){let b=g.array;x=g.version;for(let S=0,M=b.length/3-1;S<M;S+=3){let w=S+0,R=S+1,I=S+2;u.push(w,R,R,I,I,w)}}else return;let m=new(jh(u)?sa:ia)(u,1);m.version=x;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Yx(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,u*a,g),t.update(d,n,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function f(u,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,x,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*x[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Zx(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jx(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let y=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;d===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let M=o.attributes.position.count*S,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let R=new Float32Array(M*w*4*f),I=new ta(R,M,w,f);I.type=Wn,I.needsUpdate=!0;let N=S*4;for(let E=0;E<f;E++){let L=m[E],F=p[E],k=b[E],Y=M*w*4*E;for(let G=0;G<L.count;G++){let X=G*N;d===!0&&(s.fromBufferAttribute(L,G),R[Y+X+0]=s.x,R[Y+X+1]=s.y,R[Y+X+2]=s.z,R[Y+X+3]=0),g===!0&&(s.fromBufferAttribute(F,G),R[Y+X+4]=s.x,R[Y+X+5]=s.y,R[Y+X+6]=s.z,R[Y+X+7]=0),x===!0&&(s.fromBufferAttribute(k,G),R[Y+X+8]=s.x,R[Y+X+9]=s.y,R[Y+X+10]=s.z,R[Y+X+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:I,size:new ne(M,w)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function $x(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Kx={[Da]:"LINEAR_TONE_MAPPING",[La]:"REINHARD_TONE_MAPPING",[Ua]:"CINEON_TONE_MAPPING",[vs]:"ACES_FILMIC_TONE_MAPPING",[Fa]:"AGX_TONE_MAPPING",[Ba]:"NEUTRAL_TONE_MAPPING",[Na]:"CUSTOM_TONE_MAPPING"};function jx(i,e,t,n,s){let r=new Ft(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),a=new Ft(e,t,{type:Gt,depthBuffer:!1,stencilBuffer:!1}),o=new Rt;o.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new at([0,2,0,0,2,0],2));let l=new mr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new qe(o,l),h=new Wi(-1,1,1,-1,0,1),f=null,u=null,d=!1,g,x=null,m=[],p=!1;this.setSize=function(b,S){r.setSize(b,S),a.setSize(b,S);for(let M=0;M<m.length;M++){let w=m[M];w.setSize&&w.setSize(b,S)}},this.setEffects=function(b){m=b,p=m.length>0&&m[0].isRenderPass===!0;let S=r.width,M=r.height;for(let w=0;w<m.length;w++){let R=m[w];R.setSize&&R.setSize(S,M)}},this.begin=function(b,S){if(d||b.toneMapping===Qn&&m.length===0)return!1;if(x=S,S!==null){let M=S.width,w=S.height;(r.width!==M||r.height!==w)&&this.setSize(M,w)}return p===!1&&b.setRenderTarget(r),g=b.toneMapping,b.toneMapping=Qn,!0},this.hasRenderPass=function(){return p},this.end=function(b,S){b.toneMapping=g,d=!0;let M=r,w=a;for(let R=0;R<m.length;R++){let I=m[R];if(I.enabled!==!1&&(I.render(b,w,M,S),I.needsSwap!==!1)){let N=M;M=w,w=N}}if(f!==b.outputColorSpace||u!==b.toneMapping){f=b.outputColorSpace,u=b.toneMapping,l.defines={},dt.getTransfer(f)===yt&&(l.defines.SRGB_TRANSFER="");let R=Kx[u];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,b.setRenderTarget(x),b.render(c,h),x=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){r.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Ed=new vn,uu=new li(1,1),Td=new ta,wd=new $o,Ad=new aa,ad=[],od=[],ld=new Float32Array(16),cd=new Float32Array(9),hd=new Float32Array(4);function Sr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=ad[s];if(r===void 0&&(r=new Float32Array(s),ad[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function en(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function tn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ac(i,e){let t=od[e];t===void 0&&(t=new Int32Array(e),od[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2fv(this.addr,e),tn(t,e)}}function tv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;i.uniform3fv(this.addr,e),tn(t,e)}}function nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4fv(this.addr,e),tn(t,e)}}function iv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;hd.set(n),i.uniformMatrix2fv(this.addr,!1,hd),tn(t,n)}}function sv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),tn(t,n)}}function rv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(en(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,n))return;ld.set(n),i.uniformMatrix4fv(this.addr,!1,ld),tn(t,n)}}function av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ov(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2iv(this.addr,e),tn(t,e)}}function lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3iv(this.addr,e),tn(t,e)}}function cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4iv(this.addr,e),tn(t,e)}}function hv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;i.uniform2uiv(this.addr,e),tn(t,e)}}function fv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;i.uniform3uiv(this.addr,e),tn(t,e)}}function dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;i.uniform4uiv(this.addr,e),tn(t,e)}}function pv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(uu.compareFunction=t.isReversedDepthBuffer()?Mc:yc,r=uu):r=Ed,t.setTexture2D(e||r,s)}function mv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wd,s)}function gv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ad,s)}function xv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Td,s)}function vv(i){switch(i){case 5126:return Qx;case 35664:return ev;case 35665:return tv;case 35666:return nv;case 35674:return iv;case 35675:return sv;case 35676:return rv;case 5124:case 35670:return av;case 35667:case 35671:return ov;case 35668:case 35672:return lv;case 35669:case 35673:return cv;case 5125:return hv;case 36294:return uv;case 36295:return fv;case 36296:return dv;case 35678:case 36198:case 36298:case 36306:case 35682:return pv;case 35679:case 36299:case 36307:return mv;case 35680:case 36300:case 36308:case 36293:return gv;case 36289:case 36303:case 36311:case 36292:return xv}}function _v(i,e){i.uniform1fv(this.addr,e)}function yv(i,e){let t=Sr(e,this.size,2);i.uniform2fv(this.addr,t)}function Mv(i,e){let t=Sr(e,this.size,3);i.uniform3fv(this.addr,t)}function bv(i,e){let t=Sr(e,this.size,4);i.uniform4fv(this.addr,t)}function Sv(i,e){let t=Sr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ev(i,e){let t=Sr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tv(i,e){let t=Sr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function wv(i,e){i.uniform1iv(this.addr,e)}function Av(i,e){i.uniform2iv(this.addr,e)}function Rv(i,e){i.uniform3iv(this.addr,e)}function Cv(i,e){i.uniform4iv(this.addr,e)}function Pv(i,e){i.uniform1uiv(this.addr,e)}function Iv(i,e){i.uniform2uiv(this.addr,e)}function Dv(i,e){i.uniform3uiv(this.addr,e)}function Lv(i,e){i.uniform4uiv(this.addr,e)}function Uv(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=uu:a=Ed;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Nv(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wd,r[a])}function Fv(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ad,r[a])}function Bv(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);en(n,r)||(i.uniform1iv(this.addr,r),tn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Td,r[a])}function Ov(i){switch(i){case 5126:return _v;case 35664:return yv;case 35665:return Mv;case 35666:return bv;case 35674:return Sv;case 35675:return Ev;case 35676:return Tv;case 5124:case 35670:return wv;case 35667:case 35671:return Av;case 35668:case 35672:return Rv;case 35669:case 35673:return Cv;case 5125:return Pv;case 36294:return Iv;case 36295:return Dv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Bv}}var fu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vv(t.type)}},du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ov(t.type)}},pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},cu=/(\w+)(\])?(\[|\.)?/g;function ud(i,e){i.seq.push(e),i.map[e.id]=e}function zv(i,e,t){let n=i.name,s=n.length;for(cu.lastIndex=0;;){let r=cu.exec(n),a=cu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ud(t,c===void 0?new fu(o,i,e):new du(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new pu(o),ud(t,f)),t=f}}}var Mr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);zv(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function fd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Hv=37297,Vv=0;function kv(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dd=new it;function Gv(i){dt._getMatrix(dd,dt.workingColorSpace,i);let e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case jr:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function pd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+kv(i.getShaderSource(e),o)}else return r}function Wv(i,e){let t=Gv(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Xv={[Da]:"Linear",[La]:"Reinhard",[Ua]:"Cineon",[vs]:"ACESFilmic",[Fa]:"AgX",[Ba]:"Neutral",[Na]:"Custom"};function qv(i,e){let t=Xv[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ec=new D;function Yv(){dt.getLuminanceCoefficients(Ec);let i=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ya).join(`
`)}function Jv(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $v(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ya(i){return i!==""}function md(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Kv=/^[ \t]*#include +<([\w\d./]+)>/gm;function mu(i){return i.replace(Kv,Qv)}var jv=new Map;function Qv(i,e){let t=ct[e];if(t===void 0){let n=jv.get(e);if(n!==void 0)t=ct[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return mu(t)}var e_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xd(i){return i.replace(e_,t_)}function t_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function vd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var n_={[gs]:"SHADOWMAP_TYPE_PCF",[vr]:"SHADOWMAP_TYPE_VSM"};function i_(i){return n_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var s_={[Xi]:"ENVMAP_TYPE_CUBE",[_s]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE_UV"};function r_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":s_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var a_={[_s]:"ENVMAP_MODE_REFRACTION"};function o_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":a_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var l_={[Gh]:"ENVMAP_BLENDING_MULTIPLY",[Nf]:"ENVMAP_BLENDING_MIX",[Ff]:"ENVMAP_BLENDING_ADD"};function c_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":l_[i.combine]||"ENVMAP_BLENDING_NONE"}function h_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function u_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=i_(t),c=r_(t),h=o_(t),f=c_(t),u=h_(t),d=Zv(t),g=Jv(r),x=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ya).join(`
`),p.length>0&&(p+=`
`)):(m=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ya).join(`
`),p=[vd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?ct.tonemapping_pars_fragment:"",t.toneMapping!==Qn?qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Wv("linearToOutputTexel",t.outputColorSpace),Yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ya).join(`
`)),a=mu(a),a=md(a,t),a=gd(a,t),o=mu(o),o=md(o,t),o=gd(o,t),a=xd(a),o=xd(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+a,M=b+p+o,w=fd(s,s.VERTEX_SHADER,S),R=fd(s,s.FRAGMENT_SHADER,M);s.attachShader(x,w),s.attachShader(x,R),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function I(L){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(w)||"",Y=s.getShaderInfoLog(R)||"",G=F.trim(),X=k.trim(),q=Y.trim(),ie=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,R);else{let xe=pd(s,w,"vertex"),pe=pd(s,R,"fragment");$e("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+xe+`
`+pe)}else G!==""?Je("WebGLProgram: Program Info Log:",G):(X===""||q==="")&&(ce=!1);ce&&(L.diagnostics={runnable:ie,programLog:G,vertexShader:{log:X,prefix:m},fragmentShader:{log:q,prefix:p}})}s.deleteShader(w),s.deleteShader(R),N=new Mr(s,x),y=$v(s,x)}let N;this.getUniforms=function(){return N===void 0&&I(this),N};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Hv)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=R,this}var f_=0,gu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xu(e),t.set(e,n)),n}},xu=class{constructor(e){this.id=f_++,this.code=e,this.usedTimes=0}};function d_(i,e,t,n,s,r,a){let o=new na,l=new gu,c=new Set,h=[],f=new Map,u=s.logarithmicDepthBuffer,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,E,L,F,k){let Y=F.fog,G=k.geometry,X=y.isMeshStandardMaterial?F.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),ie=q&&q.mapping===Oa?q.image.height:null,ce=g[y.type];y.precision!==null&&(d=s.getMaxPrecision(y.precision),d!==y.precision&&Je("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let xe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,pe=xe!==void 0?xe.length:0,Ye=0;G.morphAttributes.position!==void 0&&(Ye=1),G.morphAttributes.normal!==void 0&&(Ye=2),G.morphAttributes.color!==void 0&&(Ye=3);let Ne,ht,Qe,te;if(ce){let bt=fi[ce];Ne=bt.vertexShader,ht=bt.fragmentShader}else Ne=y.vertexShader,ht=y.fragmentShader,l.update(y),Qe=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);let se=i.getRenderTarget(),Ae=i.state.buffers.depth.getReversed(),ze=k.isInstancedMesh===!0,Ce=k.isBatchedMesh===!0,ot=!!y.map,ut=!!y.matcap,Ke=!!q,ae=!!y.aoMap,fe=!!y.lightMap,le=!!y.bumpMap,Ee=!!y.normalMap,P=!!y.displacementMap,Re=!!y.emissiveMap,Te=!!y.metalnessMap,He=!!y.roughnessMap,me=y.anisotropy>0,C=y.clearcoat>0,_=y.dispersion>0,O=y.iridescence>0,j=y.sheen>0,Q=y.transmission>0,Z=me&&!!y.anisotropyMap,_e=C&&!!y.clearcoatMap,he=C&&!!y.clearcoatNormalMap,Le=C&&!!y.clearcoatRoughnessMap,We=O&&!!y.iridescenceMap,ue=O&&!!y.iridescenceThicknessMap,Me=j&&!!y.sheenColorMap,Be=j&&!!y.sheenRoughnessMap,Oe=!!y.specularMap,ve=!!y.specularColorMap,je=!!y.specularIntensityMap,B=Q&&!!y.transmissionMap,Se=Q&&!!y.thicknessMap,ge=!!y.gradientMap,Ie=!!y.alphaMap,de=y.alphaTest>0,re=!!y.alphaHash,be=!!y.extensions,et=Qn;y.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(et=i.toneMapping);let mt={shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:ht,defines:y.defines,customVertexShaderID:Qe,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&k._colorsTexture!==null,instancing:ze,instancingColor:ze&&k.instanceColor!==null,instancingMorph:ze&&k.morphTexture!==null,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ls,alphaToCoverage:!!y.alphaToCoverage,map:ot,matcap:ut,envMap:Ke,envMapMode:Ke&&q.mapping,envMapCubeUVHeight:ie,aoMap:ae,lightMap:fe,bumpMap:le,normalMap:Ee,displacementMap:P,emissiveMap:Re,normalMapObjectSpace:Ee&&y.normalMapType===zf,normalMapTangentSpace:Ee&&y.normalMapType===_c,metalnessMap:Te,roughnessMap:He,anisotropy:me,anisotropyMap:Z,clearcoat:C,clearcoatMap:_e,clearcoatNormalMap:he,clearcoatRoughnessMap:Le,dispersion:_,iridescence:O,iridescenceMap:We,iridescenceThicknessMap:ue,sheen:j,sheenColorMap:Me,sheenRoughnessMap:Be,specularMap:Oe,specularColorMap:ve,specularIntensityMap:je,transmission:Q,transmissionMap:B,thicknessMap:Se,gradientMap:ge,opaque:y.transparent===!1&&y.blending===as&&y.alphaToCoverage===!1,alphaMap:Ie,alphaTest:de,alphaHash:re,combine:y.combine,mapUv:ot&&x(y.map.channel),aoMapUv:ae&&x(y.aoMap.channel),lightMapUv:fe&&x(y.lightMap.channel),bumpMapUv:le&&x(y.bumpMap.channel),normalMapUv:Ee&&x(y.normalMap.channel),displacementMapUv:P&&x(y.displacementMap.channel),emissiveMapUv:Re&&x(y.emissiveMap.channel),metalnessMapUv:Te&&x(y.metalnessMap.channel),roughnessMapUv:He&&x(y.roughnessMap.channel),anisotropyMapUv:Z&&x(y.anisotropyMap.channel),clearcoatMapUv:_e&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(y.sheenRoughnessMap.channel),specularMapUv:Oe&&x(y.specularMap.channel),specularColorMapUv:ve&&x(y.specularColorMap.channel),specularIntensityMapUv:je&&x(y.specularIntensityMap.channel),transmissionMapUv:B&&x(y.transmissionMap.channel),thicknessMapUv:Se&&x(y.thicknessMap.channel),alphaMapUv:Ie&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ee||me),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(ot||Ie),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ae,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:Ye,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:ot&&y.map.isVideoTexture===!0&&dt.getTransfer(y.map.colorSpace)===yt,decodeVideoTextureEmissive:Re&&y.emissiveMap.isVideoTexture===!0&&dt.getTransfer(y.emissiveMap.colorSpace)===yt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jt,flipSided:y.side===an,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:be&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&y.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)E.push(L),E.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(b(E,y),S(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function b(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){let E=g[y.type],L;if(E){let F=fi[E];L=dn.clone(F.uniforms)}else L=y.uniforms;return L}function w(y,E){let L=f.get(E);return L!==void 0?++L.usedTimes:(L=new u_(i,E,y,r),h.push(L),f.set(E,L)),L}function R(y){if(--y.usedTimes===0){let E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),f.delete(y.cacheKey),y.destroy()}}function I(y){l.remove(y)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:w,releaseProgram:R,releaseShaderCache:I,programs:h,dispose:N}}function p_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function m_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function _d(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function yd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,u,d,g,x,m){let p=i[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function o(f,u,d,g,x,m){let p=a(f,u,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,u,d,g,x,m){let p=a(f,u,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||m_),n.length>1&&n.sort(u||_d),s.length>1&&s.sort(u||_d)}function h(){for(let f=e,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function g_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new yd,i.set(n,[a])):s>=r.length?(a=new yd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function x_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ye};break;case"SpotLight":t={position:new D,direction:new D,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function v_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var __=0;function y_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function M_(i){let e=new x_,t=v_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new tt,a=new tt;function o(c){let h=0,f=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,b=0,S=0,M=0,w=0,R=0,I=0;c.sort(y_);for(let y=0,E=c.length;y<E;y++){let L=c[y],F=L.color,k=L.intensity,Y=L.distance,G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===ys?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=F.r*k,f+=F.g*k,u+=F.b*k;else if(L.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(L.sh.coefficients[X],k);I++}else if(L.isDirectionalLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let q=L.shadow,ie=t.get(L);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.directionalShadow[d]=ie,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,b++}n.directional[d]=X,d++}else if(L.isSpotLight){let X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(F).multiplyScalar(k),X.distance=Y,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,n.spot[x]=X;let q=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,q.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[x]=q.matrix,L.castShadow){let ie=t.get(L);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,n.spotShadow[x]=ie,n.spotShadowMap[x]=G,M++}x++}else if(L.isRectAreaLight){let X=e.get(L);X.color.copy(F).multiplyScalar(k),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=X,m++}else if(L.isPointLight){let X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){let q=L.shadow,ie=t.get(L);ie.shadowIntensity=q.intensity,ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=X,g++}else if(L.isHemisphereLight){let X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(k),X.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let N=n.hash;(N.directionalLength!==d||N.pointLength!==g||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==M||N.numSpotMaps!==w||N.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=M+w-R,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=I,N.directionalLength=d,N.pointLength=g,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=M,N.numSpotMaps=w,N.numLightProbes=I,n.version=__++)}function l(c,h){let f=0,u=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let S=c[p];if(S.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(S.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(S.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Md(i){let e=new M_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function b_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Md(i),e.set(s,[o])):r>=a.length?(o=new Md(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var S_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E_=`uniform sampler2D shadow_pass;
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
}`,T_=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],w_=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],bd=new tt,qa=new D,hu=new D;function A_(i,e,t){let n=new hr,s=new ne,r=new ne,a=new Ct,o=new hl,l=new ul,c={},h=t.maxTextureSize,f={[Si]:an,[an]:Si,[jt]:jt},u=new nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:S_,fragmentShader:E_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new qe(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(R,I,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;R.type===yf&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=gs);let y=i.getRenderTarget(),E=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),F=i.state;F.setBlending(kt),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&I.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(G=>G.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,G=R.length;Y<G;Y++){let X=R[Y],q=X.shadow;if(q===void 0){Je("WebGLShadowMap:",X,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ie=q.getFrameExtents();if(s.multiply(ie),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ie.x),s.x=r.x*ie.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ie.y),s.y=r.y*ie.y,q.mapSize.y=r.y)),q.map===null||k===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===vr){if(X.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Ft(s.x,s.y,{format:ys,type:Gt,minFilter:fn,magFilter:fn,generateMipmaps:!1}),q.map.texture.name=X.name+".shadowMap",q.map.depthTexture=new li(s.x,s.y,Wn),q.map.depthTexture.name=X.name+".shadowMapDepth",q.map.depthTexture.format=si,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Vt,q.map.depthTexture.magFilter=Vt}else{X.isPointLight?(q.map=new oa(s.x),q.map.depthTexture=new il(s.x,ei)):(q.map=new Ft(s.x,s.y),q.map.depthTexture=new li(s.x,s.y,ei)),q.map.depthTexture.name=X.name+".shadowMap",q.map.depthTexture.format=si;let xe=i.state.buffers.depth.getReversed();this.type===gs?(q.map.depthTexture.compareFunction=xe?Mc:yc,q.map.depthTexture.minFilter=fn,q.map.depthTexture.magFilter=fn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Vt,q.map.depthTexture.magFilter=Vt)}q.camera.updateProjectionMatrix()}let ce=q.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<ce;xe++){if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,xe),i.clear();else{xe===0&&(i.setRenderTarget(q.map),i.clear());let pe=q.getViewport(xe);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a)}if(X.isPointLight){let pe=q.camera,Ye=q.matrix,Ne=X.distance||pe.far;Ne!==pe.far&&(pe.far=Ne,pe.updateProjectionMatrix()),qa.setFromMatrixPosition(X.matrixWorld),pe.position.copy(qa),hu.copy(pe.position),hu.add(T_[xe]),pe.up.copy(w_[xe]),pe.lookAt(hu),pe.updateMatrixWorld(),Ye.makeTranslation(-qa.x,-qa.y,-qa.z),bd.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),q._frustum.setFromProjectionMatrix(bd,pe.coordinateSystem,pe.reversedDepth)}else q.updateMatrices(X);n=q.getFrustum(),M(I,N,q.camera,X,this.type)}q.isPointLightShadow!==!0&&this.type===vr&&b(q,N),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,E,L)};function b(R,I){let N=e.update(x);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ft(s.x,s.y,{format:ys,type:Gt})),u.uniforms.shadow_pass.value=R.map.depthTexture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(I,null,N,u,x,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(I,null,N,d,x,null)}function S(R,I,N,y){let E=null,L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)E=L;else if(E=N.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=E.uuid,k=I.uuid,Y=c[F];Y===void 0&&(Y={},c[F]=Y);let G=Y[k];G===void 0&&(G=E.clone(),Y[k]=G,I.addEventListener("dispose",w)),E=G}if(E.visible=I.visible,E.wireframe=I.wireframe,y===vr?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:f[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,N.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let F=i.properties.get(E);F.light=N}return E}function M(R,I,N,y,E){if(R.visible===!1)return;if(R.layers.test(I.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===vr)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let k=e.update(R),Y=R.material;if(Array.isArray(Y)){let G=k.groups;for(let X=0,q=G.length;X<q;X++){let ie=G[X],ce=Y[ie.materialIndex];if(ce&&ce.visible){let xe=S(R,ce,y,E);R.onBeforeShadow(i,R,I,N,k,xe,ie),i.renderBufferDirect(N,null,k,xe,R,ie),R.onAfterShadow(i,R,I,N,k,xe,ie)}}}else if(Y.visible){let G=S(R,Y,y,E);R.onBeforeShadow(i,R,I,N,k,G,null),i.renderBufferDirect(N,null,k,G,R,null),R.onAfterShadow(i,R,I,N,k,G,null)}}let F=R.children;for(let k=0,Y=F.length;k<Y;k++)M(F[k],I,N,y,E)}function w(R){R.target.removeEventListener("dispose",w);for(let N in c){let y=c[N],E=R.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}var R_={[El]:Tl,[wl]:Cl,[Al]:Pl,[os]:Rl,[Tl]:El,[Cl]:wl,[Pl]:Al,[Rl]:os};function C_(i,e){function t(){let B=!1,Se=new Ct,ge=null,Ie=new Ct(0,0,0,0);return{setMask:function(de){ge!==de&&!B&&(i.colorMask(de,de,de,de),ge=de)},setLocked:function(de){B=de},setClear:function(de,re,be,et,mt){mt===!0&&(de*=et,re*=et,be*=et),Se.set(de,re,be,et),Ie.equals(Se)===!1&&(i.clearColor(de,re,be,et),Ie.copy(Se))},reset:function(){B=!1,ge=null,Ie.set(-1,0,0,0)}}}function n(){let B=!1,Se=!1,ge=null,Ie=null,de=null;return{setReversed:function(re){if(Se!==re){let be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Se=re;let et=de;de=null,this.setClear(et)}},getReversed:function(){return Se},setTest:function(re){re?se(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(re){ge!==re&&!B&&(i.depthMask(re),ge=re)},setFunc:function(re){if(Se&&(re=R_[re]),Ie!==re){switch(re){case El:i.depthFunc(i.NEVER);break;case Tl:i.depthFunc(i.ALWAYS);break;case wl:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case Al:i.depthFunc(i.EQUAL);break;case Rl:i.depthFunc(i.GEQUAL);break;case Cl:i.depthFunc(i.GREATER);break;case Pl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=re}},setLocked:function(re){B=re},setClear:function(re){de!==re&&(Se&&(re=1-re),i.clearDepth(re),de=re)},reset:function(){B=!1,ge=null,Ie=null,de=null,Se=!1}}}function s(){let B=!1,Se=null,ge=null,Ie=null,de=null,re=null,be=null,et=null,mt=null;return{setTest:function(bt){B||(bt?se(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(bt){Se!==bt&&!B&&(i.stencilMask(bt),Se=bt)},setFunc:function(bt,Bn,pn){(ge!==bt||Ie!==Bn||de!==pn)&&(i.stencilFunc(bt,Bn,pn),ge=bt,Ie=Bn,de=pn)},setOp:function(bt,Bn,pn){(re!==bt||be!==Bn||et!==pn)&&(i.stencilOp(bt,Bn,pn),re=bt,be=Bn,et=pn)},setLocked:function(bt){B=bt},setClear:function(bt){mt!==bt&&(i.clearStencil(bt),mt=bt)},reset:function(){B=!1,Se=null,ge=null,Ie=null,de=null,re=null,be=null,et=null,mt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,S=null,M=null,w=null,R=null,I=new ye(0,0,0),N=0,y=!1,E=null,L=null,F=null,k=null,Y=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,q=0,ie=i.getParameter(i.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),X=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),X=q>=2);let ce=null,xe={},pe=i.getParameter(i.SCISSOR_BOX),Ye=i.getParameter(i.VIEWPORT),Ne=new Ct().fromArray(pe),ht=new Ct().fromArray(Ye);function Qe(B,Se,ge,Ie){let de=new Uint8Array(4),re=i.createTexture();i.bindTexture(B,re),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<ge;be++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,de):i.texImage2D(Se+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,de);return re}let te={};te[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),te[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),te[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(os),le(!1),Ee(Hh),se(i.CULL_FACE),ae(kt);function se(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ae(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function ze(B,Se){return f[B]!==Se?(i.bindFramebuffer(B,Se),f[B]=Se,B===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=Se),B===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function Ce(B,Se){let ge=d,Ie=!1;if(B){ge=u.get(Se),ge===void 0&&(ge=[],u.set(Se,ge));let de=B.textures;if(ge.length!==de.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let re=0,be=de.length;re<be;re++)ge[re]=i.COLOR_ATTACHMENT0+re;ge.length=de.length,Ie=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ge)}function ot(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let ut={[Ln]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};ut[Sf]=i.MIN,ut[Ef]=i.MAX;let Ke={[xs]:i.ZERO,[Tf]:i.ONE,[wf]:i.SRC_COLOR,[Go]:i.SRC_ALPHA,[Pf]:i.SRC_ALPHA_SATURATE,[Ia]:i.DST_COLOR,[Pa]:i.DST_ALPHA,[Af]:i.ONE_MINUS_SRC_COLOR,[Wo]:i.ONE_MINUS_SRC_ALPHA,[Cf]:i.ONE_MINUS_DST_COLOR,[Rf]:i.ONE_MINUS_DST_ALPHA,[If]:i.CONSTANT_COLOR,[Df]:i.ONE_MINUS_CONSTANT_COLOR,[Lf]:i.CONSTANT_ALPHA,[Uf]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(B,Se,ge,Ie,de,re,be,et,mt,bt){if(B===kt){x===!0&&(Ae(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),B!==Sl){if(B!==m||bt!==y){if((p!==Ln||M!==Ln)&&(i.blendEquation(i.FUNC_ADD),p=Ln,M=Ln),bt)switch(B){case as:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFunc(i.ONE,i.ONE);break;case Vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$e("WebGLState: Invalid blending: ",B);break}else switch(B){case as:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Qt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Vh:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case kh:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",B);break}b=null,S=null,w=null,R=null,I.set(0,0,0),N=0,m=B,y=bt}return}de=de||Se,re=re||ge,be=be||Ie,(Se!==p||de!==M)&&(i.blendEquationSeparate(ut[Se],ut[de]),p=Se,M=de),(ge!==b||Ie!==S||re!==w||be!==R)&&(i.blendFuncSeparate(Ke[ge],Ke[Ie],Ke[re],Ke[be]),b=ge,S=Ie,w=re,R=be),(et.equals(I)===!1||mt!==N)&&(i.blendColor(et.r,et.g,et.b,mt),I.copy(et),N=mt),m=B,y=!1}function fe(B,Se){B.side===jt?Ae(i.CULL_FACE):se(i.CULL_FACE);let ge=B.side===an;Se&&(ge=!ge),le(ge),B.blending===as&&B.transparent===!1?ae(kt):ae(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ie=B.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function Ee(B){B!==vf?(se(i.CULL_FACE),B!==L&&(B===Hh?i.cullFace(i.BACK):B===_f?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),L=B}function P(B){B!==F&&(X&&i.lineWidth(B),F=B)}function Re(B,Se,ge){B?(se(i.POLYGON_OFFSET_FILL),(k!==Se||Y!==ge)&&(i.polygonOffset(Se,ge),k=Se,Y=ge)):Ae(i.POLYGON_OFFSET_FILL)}function Te(B){B?se(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function He(B){B===void 0&&(B=i.TEXTURE0+G-1),ce!==B&&(i.activeTexture(B),ce=B)}function me(B,Se,ge){ge===void 0&&(ce===null?ge=i.TEXTURE0+G-1:ge=ce);let Ie=xe[ge];Ie===void 0&&(Ie={type:void 0,texture:void 0},xe[ge]=Ie),(Ie.type!==B||Ie.texture!==Se)&&(ce!==ge&&(i.activeTexture(ge),ce=ge),i.bindTexture(B,Se||te[B]),Ie.type=B,Ie.texture=Se)}function C(){let B=xe[ce];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function j(){try{i.texSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function _e(){try{i.compressedTexSubImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function he(){try{i.texStorage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function Le(){try{i.texStorage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function We(){try{i.texImage2D(...arguments)}catch(B){$e("WebGLState:",B)}}function ue(){try{i.texImage3D(...arguments)}catch(B){$e("WebGLState:",B)}}function Me(B){Ne.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Ne.copy(B))}function Be(B){ht.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ht.copy(B))}function Oe(B,Se){let ge=c.get(Se);ge===void 0&&(ge=new WeakMap,c.set(Se,ge));let Ie=ge.get(B);Ie===void 0&&(Ie=i.getUniformBlockIndex(Se,B.name),ge.set(B,Ie))}function ve(B,Se){let Ie=c.get(Se).get(B);l.get(Se)!==Ie&&(i.uniformBlockBinding(Se,Ie,B.__bindingPointIndex),l.set(Se,Ie))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ce=null,xe={},f={},u=new WeakMap,d=[],g=null,x=!1,m=null,p=null,b=null,S=null,M=null,w=null,R=null,I=new ye(0,0,0),N=0,y=!1,E=null,L=null,F=null,k=null,Y=null,Ne.set(0,0,i.canvas.width,i.canvas.height),ht.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:Ae,bindFramebuffer:ze,drawBuffers:Ce,useProgram:ot,setBlending:ae,setMaterial:fe,setFlipSided:le,setCullFace:Ee,setLineWidth:P,setPolygonOffset:Re,setScissorTest:Te,activeTexture:He,bindTexture:me,unbindTexture:C,compressedTexImage2D:_,compressedTexImage3D:O,texImage2D:We,texImage3D:ue,updateUBOMapping:Oe,uniformBlockBinding:ve,texStorage2D:he,texStorage3D:Le,texSubImage2D:j,texSubImage3D:Q,compressedTexSubImage2D:Z,compressedTexSubImage3D:_e,scissor:Me,viewport:Be,reset:je}}function P_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,_){return d?new OffscreenCanvas(C,_):tr("canvas")}function x(C,_,O){let j=1,Q=me(C);if((Q.width>O||Q.height>O)&&(j=O/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Z=Math.floor(j*Q.width),_e=Math.floor(j*Q.height);f===void 0&&(f=g(Z,_e));let he=_?g(Z,_e):f;return he.width=Z,he.height=_e,he.getContext("2d").drawImage(C,0,0,Z,_e),Je("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+_e+")."),he}else return"data"in C&&Je("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,_,O,j,Q=!1){if(C!==null){if(i[C]!==void 0)return i[C];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=_;if(_===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),_===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),_===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),_===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),_===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),_===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),_===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),_===i.RGBA){let _e=Q?jr:dt.getTransfer(j);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=_e===yt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function M(C,_){let O;return C?_===null||_===ei||_===qi?O=i.DEPTH24_STENCIL8:_===Wn?O=i.DEPTH32F_STENCIL8:_===_r&&(O=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===qi?O=i.DEPTH_COMPONENT24:_===Wn?O=i.DEPTH_COMPONENT32F:_===_r&&(O=i.DEPTH_COMPONENT16),O}function w(C,_){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==fn?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function R(C){let _=C.target;_.removeEventListener("dispose",R),N(_),_.isVideoTexture&&h.delete(_)}function I(C){let _=C.target;_.removeEventListener("dispose",I),E(_)}function N(C){let _=n.get(C);if(_.__webglInit===void 0)return;let O=C.source,j=u.get(O);if(j){let Q=j[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(C),Object.keys(j).length===0&&u.delete(O)}n.remove(C)}function y(C){let _=n.get(C);i.deleteTexture(_.__webglTexture);let O=C.source,j=u.get(O);delete j[_.__cacheKey],a.memory.textures--}function E(C){let _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let Q=0;Q<_.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(_.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let O=C.textures;for(let j=0,Q=O.length;j<Q;j++){let Z=n.get(O[j]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(O[j])}n.remove(C)}let L=0;function F(){L=0}function k(){let C=L;return C>=s.maxTextures&&Je("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function Y(C){let _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function G(C,_){let O=n.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&O.__version!==C.version){let j=C.image;if(j===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{te(O,C,_);return}}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+_)}function X(C,_){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){te(O,C,_);return}else C.isExternalTexture&&(O.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+_)}function q(C,_){let O=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){te(O,C,_);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+_)}function ie(C,_){let O=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&O.__version!==C.version){se(O,C,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+_)}let ce={[un]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[Xo]:i.MIRRORED_REPEAT},xe={[Vt]:i.NEAREST,[Bf]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[Ll]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},pe={[Hf]:i.NEVER,[Xf]:i.ALWAYS,[Vf]:i.LESS,[yc]:i.LEQUAL,[kf]:i.EQUAL,[Mc]:i.GEQUAL,[Gf]:i.GREATER,[Wf]:i.NOTEQUAL};function Ye(C,_){if(_.type===Wn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===fn||_.magFilter===Ll||_.magFilter===za||_.magFilter===ci||_.minFilter===fn||_.minFilter===Ll||_.minFilter===za||_.minFilter===ci)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ce[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ce[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ce[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,xe[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,xe[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==za&&_.minFilter!==ci||_.type===Wn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ne(C,_){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",R));let j=_.source,Q=u.get(j);Q===void 0&&(Q={},u.set(j,Q));let Z=Y(_);if(Z!==C.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[Z].usedTimes++;let _e=Q[C.__cacheKey];_e!==void 0&&(Q[C.__cacheKey].usedTimes--,_e.usedTimes===0&&y(_)),C.__cacheKey=Z,C.__webglTexture=Q[Z].texture}return O}function ht(C,_,O){return Math.floor(Math.floor(C/O)/_)}function Qe(C,_,O,j){let Z=C.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,O,j,_.data);else{Z.sort((ue,Me)=>ue.start-Me.start);let _e=0;for(let ue=1;ue<Z.length;ue++){let Me=Z[_e],Be=Z[ue],Oe=Me.start+Me.count,ve=ht(Be.start,_.width,4),je=ht(Me.start,_.width,4);Be.start<=Oe+1&&ve===je&&ht(Be.start+Be.count-1,_.width,4)===ve?Me.count=Math.max(Me.count,Be.start+Be.count-Me.start):(++_e,Z[_e]=Be)}Z.length=_e+1;let he=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),We=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ue=0,Me=Z.length;ue<Me;ue++){let Be=Z[ue],Oe=Math.floor(Be.start/4),ve=Math.ceil(Be.count/4),je=Oe%_.width,B=Math.floor(Oe/_.width),Se=ve,ge=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,je,B,Se,ge,O,j,_.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,he),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,We)}}function te(C,_,O){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let Q=Ne(C,_),Z=_.source;t.bindTexture(j,C.__webglTexture,i.TEXTURE0+O);let _e=n.get(Z);if(Z.version!==_e.__version||Q===!0){t.activeTexture(i.TEXTURE0+O);let he=dt.getPrimaries(dt.workingColorSpace),Le=_.colorSpace===Ai?null:dt.getPrimaries(_.colorSpace),We=_.colorSpace===Ai||he===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ue=x(_.image,!1,s.maxTextureSize);ue=He(_,ue);let Me=r.convert(_.format,_.colorSpace),Be=r.convert(_.type),Oe=S(_.internalFormat,Me,Be,_.colorSpace,_.isVideoTexture);Ye(j,_);let ve,je=_.mipmaps,B=_.isVideoTexture!==!0,Se=_e.__version===void 0||Q===!0,ge=Z.dataReady,Ie=w(_,ue);if(_.isDepthTexture)Oe=M(_.format===hi,_.type),Se&&(B?t.texStorage2D(i.TEXTURE_2D,1,Oe,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,Me,Be,null));else if(_.isDataTexture)if(je.length>0){B&&Se&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,je[0].width,je[0].height);for(let de=0,re=je.length;de<re;de++)ve=je[de],B?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ve.width,ve.height,Me,Be,ve.data):t.texImage2D(i.TEXTURE_2D,de,Oe,ve.width,ve.height,0,Me,Be,ve.data);_.generateMipmaps=!1}else B?(Se&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,ue.width,ue.height),ge&&Qe(_,ue,Me,Be)):t.texImage2D(i.TEXTURE_2D,0,Oe,ue.width,ue.height,0,Me,Be,ue.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){B&&Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Oe,je[0].width,je[0].height,ue.depth);for(let de=0,re=je.length;de<re;de++)if(ve=je[de],_.format!==Pn)if(Me!==null)if(B){if(ge)if(_.layerUpdates.size>0){let be=su(ve.width,ve.height,_.format,_.type);for(let et of _.layerUpdates){let mt=ve.data.subarray(et*be/ve.data.BYTES_PER_ELEMENT,(et+1)*be/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,et,ve.width,ve.height,1,Me,mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,ue.depth,Me,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,de,Oe,ve.width,ve.height,ue.depth,0,ve.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,de,0,0,0,ve.width,ve.height,ue.depth,Me,Be,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,de,Oe,ve.width,ve.height,ue.depth,0,Me,Be,ve.data)}else{B&&Se&&t.texStorage2D(i.TEXTURE_2D,Ie,Oe,je[0].width,je[0].height);for(let de=0,re=je.length;de<re;de++)ve=je[de],_.format!==Pn?Me!==null?B?ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,de,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,de,Oe,ve.width,ve.height,0,ve.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,ve.width,ve.height,Me,Be,ve.data):t.texImage2D(i.TEXTURE_2D,de,Oe,ve.width,ve.height,0,Me,Be,ve.data)}else if(_.isDataArrayTexture)if(B){if(Se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ie,Oe,ue.width,ue.height,ue.depth),ge)if(_.layerUpdates.size>0){let de=su(ue.width,ue.height,_.format,_.type);for(let re of _.layerUpdates){let be=ue.data.subarray(re*de/ue.data.BYTES_PER_ELEMENT,(re+1)*de/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,ue.width,ue.height,1,Me,Be,be)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Me,Be,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,ue.width,ue.height,ue.depth,0,Me,Be,ue.data);else if(_.isData3DTexture)B?(Se&&t.texStorage3D(i.TEXTURE_3D,Ie,Oe,ue.width,ue.height,ue.depth),ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Me,Be,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,ue.width,ue.height,ue.depth,0,Me,Be,ue.data);else if(_.isFramebufferTexture){if(Se)if(B)t.texStorage2D(i.TEXTURE_2D,Ie,Oe,ue.width,ue.height);else{let de=ue.width,re=ue.height;for(let be=0;be<Ie;be++)t.texImage2D(i.TEXTURE_2D,be,Oe,de,re,0,Me,Be,null),de>>=1,re>>=1}}else if(je.length>0){if(B&&Se){let de=me(je[0]);t.texStorage2D(i.TEXTURE_2D,Ie,Oe,de.width,de.height)}for(let de=0,re=je.length;de<re;de++)ve=je[de],B?ge&&t.texSubImage2D(i.TEXTURE_2D,de,0,0,Me,Be,ve):t.texImage2D(i.TEXTURE_2D,de,Oe,Me,Be,ve);_.generateMipmaps=!1}else if(B){if(Se){let de=me(ue);t.texStorage2D(i.TEXTURE_2D,Ie,Oe,de.width,de.height)}ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Be,ue)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Me,Be,ue);m(_)&&p(j),_e.__version=Z.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function se(C,_,O){if(_.image.length!==6)return;let j=Ne(C,_),Q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+O);let Z=n.get(Q);if(Q.version!==Z.__version||j===!0){t.activeTexture(i.TEXTURE0+O);let _e=dt.getPrimaries(dt.workingColorSpace),he=_.colorSpace===Ai?null:dt.getPrimaries(_.colorSpace),Le=_.colorSpace===Ai||_e===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let We=_.isCompressedTexture||_.image[0].isCompressedTexture,ue=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let re=0;re<6;re++)!We&&!ue?Me[re]=x(_.image[re],!0,s.maxCubemapSize):Me[re]=ue?_.image[re].image:_.image[re],Me[re]=He(_,Me[re]);let Be=Me[0],Oe=r.convert(_.format,_.colorSpace),ve=r.convert(_.type),je=S(_.internalFormat,Oe,ve,_.colorSpace),B=_.isVideoTexture!==!0,Se=Z.__version===void 0||j===!0,ge=Q.dataReady,Ie=w(_,Be);Ye(i.TEXTURE_CUBE_MAP,_);let de;if(We){B&&Se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,je,Be.width,Be.height);for(let re=0;re<6;re++){de=Me[re].mipmaps;for(let be=0;be<de.length;be++){let et=de[be];_.format!==Pn?Oe!==null?B?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,et.width,et.height,Oe,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,je,et.width,et.height,0,et.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,0,0,et.width,et.height,Oe,ve,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be,je,et.width,et.height,0,Oe,ve,et.data)}}}else{if(de=_.mipmaps,B&&Se){de.length>0&&Ie++;let re=me(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,je,re.width,re.height)}for(let re=0;re<6;re++)if(ue){B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Me[re].width,Me[re].height,Oe,ve,Me[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Me[re].width,Me[re].height,0,Oe,ve,Me[re].data);for(let be=0;be<de.length;be++){let mt=de[be].image[re].image;B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,mt.width,mt.height,Oe,ve,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,je,mt.width,mt.height,0,Oe,ve,mt.data)}}else{B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Oe,ve,Me[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,je,Oe,ve,Me[re]);for(let be=0;be<de.length;be++){let et=de[be];B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,0,0,Oe,ve,et.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,be+1,je,Oe,ve,et.image[re])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),Z.__version=Q.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ae(C,_,O,j,Q,Z){let _e=r.convert(O.format,O.colorSpace),he=r.convert(O.type),Le=S(O.internalFormat,_e,he,O.colorSpace),We=n.get(_),ue=n.get(O);if(ue.__renderTarget=_,!We.__hasExternalTextures){let Me=Math.max(1,_.width>>Z),Be=Math.max(1,_.height>>Z);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,Le,Me,Be,_.depth,0,_e,he,null):t.texImage2D(Q,Z,Le,Me,Be,0,_e,he,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,ue.__webglTexture,0,P(_)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,ue.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(C,_,O){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){let j=_.depthTexture,Q=j&&j.isDepthTexture?j.type:null,Z=M(_.stencilBuffer,Q),_e=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),Z,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),Z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,C)}else{let j=_.textures;for(let Q=0;Q<j.length;Q++){let Z=j[Q],_e=r.convert(Z.format,Z.colorSpace),he=r.convert(Z.type),Le=S(Z.internalFormat,_e,he,Z.colorSpace);Re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P(_),Le,_.width,_.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,P(_),Le,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Le,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(C,_,O){let j=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Q=n.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_.depthTexture);let We=r.convert(_.depthTexture.format),ue=r.convert(_.depthTexture.type),Me;_.depthTexture.format===si?Me=i.DEPTH_COMPONENT24:_.depthTexture.format===hi&&(Me=i.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Me,_.width,_.height,0,We,ue,null)}}else G(_.depthTexture,0);let Z=Q.__webglTexture,_e=P(_),he=j?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Le=_.depthTexture.format===hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)Re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,he,Z,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,Le,he,Z,0);else if(_.depthTexture.format===hi)Re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Le,he,Z,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,Le,he,Z,0);else throw new Error("Unknown depthTexture format")}function ot(C){let _=n.get(C),O=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){let j=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=j}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let j=0;j<6;j++)Ce(_.__webglFramebuffer[j],C,j);else{let j=C.texture.mipmaps;j&&j.length>0?Ce(_.__webglFramebuffer[0],C,0):Ce(_.__webglFramebuffer,C,0)}else if(O){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),ze(_.__webglDepthbuffer[j],C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}else{let j=C.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ze(_.__webglDepthbuffer,C,!1);else{let Q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(C,_,O){let j=n.get(C);_!==void 0&&Ae(j.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ot(C)}function Ke(C){let _=C.texture,O=n.get(C),j=n.get(_);C.addEventListener("dispose",I);let Q=C.textures,Z=C.isWebGLCubeRenderTarget===!0,_e=Q.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let Le=0;Le<_.mipmaps.length;Le++)O.__webglFramebuffer[he][Le]=i.createFramebuffer()}else O.__webglFramebuffer[he]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)O.__webglFramebuffer[he]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_e)for(let he=0,Le=Q.length;he<Le;he++){let We=n.get(Q[he]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Re(C)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<Q.length;he++){let Le=Q[he];O.__webglColorRenderbuffer[he]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[he]);let We=r.convert(Le.format,Le.colorSpace),ue=r.convert(Le.type),Me=S(Le.internalFormat,We,ue,Le.colorSpace,C.isXRRenderTarget===!0),Be=P(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Be,Me,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,O.__webglColorRenderbuffer[he])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(O.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)Ae(O.__webglFramebuffer[he][Le],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le);else Ae(O.__webglFramebuffer[he],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let he=0,Le=Q.length;he<Le;he++){let We=Q[he],ue=n.get(We),Me=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Me=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,ue.__webglTexture),Ye(Me,We),Ae(O.__webglFramebuffer,C,We,i.COLOR_ATTACHMENT0+he,Me,0),m(We)&&p(Me)}t.unbindTexture()}else{let he=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(he=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,j.__webglTexture),Ye(he,_),_.mipmaps&&_.mipmaps.length>0)for(let Le=0;Le<_.mipmaps.length;Le++)Ae(O.__webglFramebuffer[Le],C,_,i.COLOR_ATTACHMENT0,he,Le);else Ae(O.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}C.depthBuffer&&ot(C)}function ae(C){let _=C.textures;for(let O=0,j=_.length;O<j;O++){let Q=_[O];if(m(Q)){let Z=b(C),_e=n.get(Q).__webglTexture;t.bindTexture(Z,_e),p(Z),t.unbindTexture()}}}let fe=[],le=[];function Ee(C){if(C.samples>0){if(Re(C)===!1){let _=C.textures,O=C.width,j=C.height,Q=i.COLOR_BUFFER_BIT,Z=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=n.get(C),he=_.length>1;if(he)for(let We=0;We<_.length;We++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);let Le=C.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let We=0;We<_.length;We++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),he){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[We]);let ue=n.get(_[We]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,Q,i.NEAREST),l===!0&&(fe.length=0,le.length=0,fe.push(i.COLOR_ATTACHMENT0+We),C.depthBuffer&&C.resolveDepthBuffer===!1&&(fe.push(Z),le.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,le)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),he)for(let We=0;We<_.length;We++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.RENDERBUFFER,_e.__webglColorRenderbuffer[We]);let ue=n.get(_[We]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+We,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function P(C){return Math.min(s.maxSamples,C.samples)}function Re(C){let _=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(C){let _=a.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function He(C,_){let O=C.colorSpace,j=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==ls&&O!==Ai&&(dt.getTransfer(O)===yt?(j!==Pn||Q!==_n)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",O)),_}function me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=q,this.setTextureCube=ie,this.rebindTextures=ut,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=Re,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function I_(i,e){function t(n,s=Ai){let r,a=dt.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xh)return i.BYTE;if(n===qh)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===ei)return i.UNSIGNED_INT;if(n===Wn)return i.FLOAT;if(n===Gt)return i.HALF_FLOAT;if(n===Jh)return i.ALPHA;if(n===$h)return i.RGB;if(n===Pn)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===hi)return i.DEPTH_STENCIL;if(n===Bl)return i.RED;if(n===Ol)return i.RED_INTEGER;if(n===ys)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===Hl)return i.RGBA_INTEGER;if(n===Ha||n===Va||n===ka||n===Ga)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ga)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===kl||n===Gl||n===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Yl||n===Zl||n===Jl||n===$l||n===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xl||n===ql)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zl)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$l)return r.COMPRESSED_RG11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fc||n===dc||n===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fc)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===xc||n===vc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var D_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
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

}`,vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new nt({vertexShader:D_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new qe(new Pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_u=class extends Ei{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new vu,p={},b=t.getContextAttributes(),S=null,M=null,w=[],R=[],I=new ne,N=null,y=new Ht;y.viewport=new Ct;let E=new Ht;E.viewport=new Ct;let L=[y,E],F=new bl,k=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let se=w[te];return se===void 0&&(se=new or,w[te]=se),se.getTargetRaySpace()},this.getControllerGrip=function(te){let se=w[te];return se===void 0&&(se=new or,w[te]=se),se.getGripSpace()},this.getHand=function(te){let se=w[te];return se===void 0&&(se=new or,w[te]=se),se.getHandSpace()};function G(te){let se=R.indexOf(te.inputSource);if(se===-1)return;let Ae=w[se];Ae!==void 0&&(Ae.update(te.inputSource,te.frame,c||a),Ae.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",q);for(let te=0;te<w.length;te++){let se=R[te];se!==null&&(R[te]=null,w[te].disconnect(se))}k=null,Y=null,m.reset();for(let te in p)delete p[te];e.setRenderTarget(S),d=null,u=null,f=null,s=null,M=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",X),s.addEventListener("inputsourceschange",q),b.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ze=null,Ce=null;b.depth&&(Ce=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ae=b.stencil?hi:si,ze=b.stencil?qi:ei);let ot={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(ot),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Ft(u.textureWidth,u.textureHeight,{format:Pn,type:_n,depthTexture:new li(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let Ae={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ft(d.framebufferWidth,d.framebufferHeight,{format:Pn,type:_n,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function q(te){for(let se=0;se<te.removed.length;se++){let Ae=te.removed[se],ze=R.indexOf(Ae);ze>=0&&(R[ze]=null,w[ze].disconnect(Ae))}for(let se=0;se<te.added.length;se++){let Ae=te.added[se],ze=R.indexOf(Ae);if(ze===-1){for(let ot=0;ot<w.length;ot++)if(ot>=R.length){R.push(Ae),ze=ot;break}else if(R[ot]===null){R[ot]=Ae,ze=ot;break}if(ze===-1)break}let Ce=w[ze];Ce&&Ce.connect(Ae)}}let ie=new D,ce=new D;function xe(te,se,Ae){ie.setFromMatrixPosition(se.matrixWorld),ce.setFromMatrixPosition(Ae.matrixWorld);let ze=ie.distanceTo(ce),Ce=se.projectionMatrix.elements,ot=Ae.projectionMatrix.elements,ut=Ce[14]/(Ce[10]-1),Ke=Ce[14]/(Ce[10]+1),ae=(Ce[9]+1)/Ce[5],fe=(Ce[9]-1)/Ce[5],le=(Ce[8]-1)/Ce[0],Ee=(ot[8]+1)/ot[0],P=ut*le,Re=ut*Ee,Te=ze/(-le+Ee),He=Te*-le;if(se.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(He),te.translateZ(Te),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ce[10]===-1)te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let me=ut+Te,C=Ke+Te,_=P-He,O=Re+(ze-He),j=ae*Ke/C*me,Q=fe*Ke/C*me;te.projectionMatrix.makePerspective(_,O,j,Q,me,C),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function pe(te,se){se===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(se.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let se=te.near,Ae=te.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(Ae=m.depthFar)),F.near=E.near=y.near=se,F.far=E.far=y.far=Ae,(k!==F.near||Y!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,Y=F.far),F.layers.mask=te.layers.mask|6,y.layers.mask=F.layers.mask&3,E.layers.mask=F.layers.mask&5;let ze=te.parent,Ce=F.cameras;pe(F,ze);for(let ot=0;ot<Ce.length;ot++)pe(Ce[ot],ze);Ce.length===2?xe(F,y,E):F.projectionMatrix.copy(y.projectionMatrix),Ye(te,F,ze)};function Ye(te,se,Ae){Ae===null?te.matrix.copy(se.matrixWorld):(te.matrix.copy(Ae.matrixWorld),te.matrix.invert(),te.matrix.multiply(se.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(se.projectionMatrix),te.projectionMatrixInverse.copy(se.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(te){l=te,u!==null&&(u.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(te){return p[te]};let Ne=null;function ht(te,se){if(h=se.getViewerPose(c||a),g=se,h!==null){let Ae=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ze=!1;Ae.length!==F.cameras.length&&(F.cameras.length=0,ze=!0);for(let Ke=0;Ke<Ae.length;Ke++){let ae=Ae[Ke],fe=null;if(d!==null)fe=d.getViewport(ae);else{let Ee=f.getViewSubImage(u,ae);fe=Ee.viewport,Ke===0&&(e.setRenderTargetTextures(M,Ee.colorTexture,Ee.depthStencilTexture),e.setRenderTarget(M))}let le=L[Ke];le===void 0&&(le=new Ht,le.layers.enable(Ke),le.viewport=new Ct,L[Ke]=le),le.matrix.fromArray(ae.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ae.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(fe.x,fe.y,fe.width,fe.height),Ke===0&&(F.matrix.copy(le.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ze===!0&&F.cameras.push(le)}let Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let Ke=f.getDepthInformation(Ae[0]);Ke&&Ke.isValid&&Ke.texture&&m.init(Ke,s.renderState)}if(Ce&&Ce.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let Ke=0;Ke<Ae.length;Ke++){let ae=Ae[Ke].camera;if(ae){let fe=p[ae];fe||(fe=new fa,p[ae]=fe);let le=f.getCameraImage(ae);fe.sourceTexture=le}}}}for(let Ae=0;Ae<w.length;Ae++){let ze=R[Ae],Ce=w[Ae];ze!==null&&Ce!==void 0&&Ce.update(ze,se,c||a)}Ne&&Ne(te,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let Qe=new Sd;Qe.setAnimationLoop(ht),this.setAnimationLoop=function(te){Ne=te},this.dispose=function(){}}},Ss=new Un,U_=new tt;function N_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,eu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===an&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===an&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),S=b.envMap,M=b.envMapRotation;S&&(m.envMap.value=S,Ss.copy(M),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),m.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(Ss)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===an&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function F_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){let M=S.program;n.uniformBlockBinding(b,M)}function c(b,S){let M=s[b.id];M===void 0&&(g(b),M=h(b),s[b.id]=M,b.addEventListener("dispose",m));let w=S.program;n.updateUBOMapping(b,w);let R=e.render.frame;r[b.id]!==R&&(u(b),r[b.id]=R)}function h(b){let S=f();b.__bindingPointIndex=S;let M=i.createBuffer(),w=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,M),M}function f(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let S=s[b.id],M=b.uniforms,w=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let R=0,I=M.length;R<I;R++){let N=Array.isArray(M[R])?M[R]:[M[R]];for(let y=0,E=N.length;y<E;y++){let L=N[y];if(d(L,R,y,w)===!0){let F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],Y=0;for(let G=0;G<k.length;G++){let X=k[G],q=x(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+Y,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,Y),Y+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,S,M,w){let R=b.value,I=S+"_"+M;if(w[I]===void 0)return typeof R=="number"||typeof R=="boolean"?w[I]=R:w[I]=R.clone(),!0;{let N=w[I];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return w[I]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(b){let S=b.uniforms,M=0,w=16;for(let I=0,N=S.length;I<N;I++){let y=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,L=y.length;E<L;E++){let F=y[E],k=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,G=k.length;Y<G;Y++){let X=k[Y],q=x(X),ie=M%w,ce=ie%q.boundary,xe=ie+ce;M+=ce,xe!==0&&w-xe<q.storage&&(M+=w-xe),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=q.storage}}}let R=M%w;return R>0&&(M+=w-R),b.__size=M,b.__cache={},this}function x(b){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){let S=b.target;S.removeEventListener("dispose",m);let M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var B_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ui=null;function O_(){return ui===null&&(ui=new Ti(B_,16,16,ys,Gt),ui.name="DFG_LUT",ui.minFilter=fn,ui.magFilter=fn,ui.wrapS=ni,ui.wrapT=ni,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}var Tc=class{constructor(e={}){let{canvas:t=qf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=_n}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=d,m=new Set([Hl,zl,Ol]),p=new Set([_n,ei,_r,qi,Nl,Fl]),b=new Uint32Array(4),S=new Int32Array(4),M=null,w=null,R=[],I=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,E=!1;this._outputColorSpace=$t;let L=0,F=0,k=null,Y=-1,G=null,X=new Ct,q=new Ct,ie=null,ce=new ye(0),xe=0,pe=t.width,Ye=t.height,Ne=1,ht=null,Qe=null,te=new Ct(0,0,pe,Ye),se=new Ct(0,0,pe,Ye),Ae=!1,ze=new hr,Ce=!1,ot=!1,ut=new tt,Ke=new D,ae=new Ct,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function Ee(){return k===null?Ne:1}let P=n;function Re(T,V){return t.getContext(T,V)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",mt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),P===null){let V="webgl2";if(P=Re(V,T),P===null)throw Re(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw $e("WebGLRenderer: "+T.message),T}let Te,He,me,C,_,O,j,Q,Z,_e,he,Le,We,ue,Me,Be,Oe,ve,je,B,Se,ge,Ie,de;function re(){Te=new Xx(P),Te.init(),ge=new I_(P,Te),He=new Fx(P,Te,e,ge),me=new C_(P,Te),He.reversedDepthBuffer&&u&&me.buffers.depth.setReversed(!0),C=new Zx(P),_=new p_,O=new P_(P,Te,me,_,He,ge,C),j=new Ox(y),Q=new Wx(y),Z=new jm(P),Ie=new Ux(P,Z),_e=new qx(P,Z,C,Ie),he=new $x(P,_e,Z,C),je=new Jx(P,He,O),Be=new Bx(_),Le=new d_(y,j,Q,Te,He,Ie,Be),We=new N_(y,_),ue=new g_,Me=new b_(Te),ve=new Lx(y,j,Q,me,he,g,l),Oe=new A_(y,he,He),de=new F_(P,C,He,me),B=new Nx(P,Te,C),Se=new Yx(P,Te,C),C.programs=Le.programs,y.capabilities=He,y.extensions=Te,y.properties=_,y.renderLists=ue,y.shadowMap=Oe,y.state=me,y.info=C}re(),x!==_n&&(N=new jx(x,t.width,t.height,s,r));let be=new _u(y,P);this.xr=be,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(T){T!==void 0&&(Ne=T,this.setSize(pe,Ye,!1))},this.getSize=function(T){return T.set(pe,Ye)},this.setSize=function(T,V,K=!0){if(be.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=T,Ye=V,t.width=Math.floor(T*Ne),t.height=Math.floor(V*Ne),K===!0&&(t.style.width=T+"px",t.style.height=V+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(pe*Ne,Ye*Ne).floor()},this.setDrawingBufferSize=function(T,V,K){pe=T,Ye=V,Ne=K,t.width=Math.floor(T*K),t.height=Math.floor(V*K),this.setViewport(0,0,T,V)},this.setEffects=function(T){if(x===_n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let V=0;V<T.length;V++)if(T[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(X)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,V,K,$){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,V,K,$),me.viewport(X.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,V,K,$){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,V,K,$),me.scissor(q.copy(se).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(T){me.setScissorTest(Ae=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){Qe=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,K=!0){let $=0;if(T){let W=!1;if(k!==null){let we=k.texture.format;W=m.has(we)}if(W){let we=k.texture.type,Ue=p.has(we),Pe=ve.getClearColor(),Fe=ve.getClearAlpha(),ke=Pe.r,Ze=Pe.g,Ge=Pe.b;Ue?(b[0]=ke,b[1]=Ze,b[2]=Ge,b[3]=Fe,P.clearBufferuiv(P.COLOR,0,b)):(S[0]=ke,S[1]=Ze,S[2]=Ge,S[3]=Fe,P.clearBufferiv(P.COLOR,0,S))}else $|=P.COLOR_BUFFER_BIT}V&&($|=P.DEPTH_BUFFER_BIT),K&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",mt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),ve.dispose(),ue.dispose(),Me.dispose(),_.dispose(),j.dispose(),Q.dispose(),he.dispose(),Ie.dispose(),de.dispose(),Le.dispose(),be.dispose(),be.removeEventListener("sessionstart",Rr),be.removeEventListener("sessionend",Cs),Xn.stop()};function et(T){T.preventDefault(),ea("WebGLRenderer: Context Lost."),E=!0}function mt(){ea("WebGLRenderer: Context Restored."),E=!1;let T=C.autoReset,V=Oe.enabled,K=Oe.autoUpdate,$=Oe.needsUpdate,W=Oe.type;re(),C.autoReset=T,Oe.enabled=V,Oe.autoUpdate=K,Oe.needsUpdate=$,Oe.type=W}function bt(T){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Bn(T){let V=T.target;V.removeEventListener("dispose",Bn),pn(V)}function pn(T){As(T),_.remove(T)}function As(T){let V=_.get(T).programs;V!==void 0&&(V.forEach(function(K){Le.releaseProgram(K)}),T.isShaderMaterial&&Le.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,K,$,W,we){V===null&&(V=fe);let Ue=W.isMesh&&W.matrixWorld.determinant()<0,Pe=Ir(T,V,K,$,W);me.setMaterial($,Ue);let Fe=K.index,ke=1;if($.wireframe===!0){if(Fe=_e.getWireframeAttribute(K),Fe===void 0)return;ke=2}let Ze=K.drawRange,Ge=K.attributes.position,st=Ze.start*ke,gt=(Ze.start+Ze.count)*ke;we!==null&&(st=Math.max(st,we.start*ke),gt=Math.min(gt,(we.start+we.count)*ke)),Fe!==null?(st=Math.max(st,0),gt=Math.min(gt,Fe.count)):Ge!=null&&(st=Math.max(st,0),gt=Math.min(gt,Ge.count));let It=gt-st;if(It<0||It===1/0)return;Ie.setup(W,$,Pe,K,Fe);let Dt,Et=B;if(Fe!==null&&(Dt=Z.get(Fe),Et=Se,Et.setIndex(Dt)),W.isMesh)$.wireframe===!0?(me.setLineWidth($.wireframeLinewidth*Ee()),Et.setMode(P.LINES)):Et.setMode(P.TRIANGLES);else if(W.isLine){let Xe=$.linewidth;Xe===void 0&&(Xe=1),me.setLineWidth(Xe*Ee()),W.isLineSegments?Et.setMode(P.LINES):W.isLineLoop?Et.setMode(P.LINE_LOOP):Et.setMode(P.LINE_STRIP)}else W.isPoints?Et.setMode(P.POINTS):W.isSprite&&Et.setMode(P.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ir("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Et.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Xe=W._multiDrawStarts,vt=W._multiDrawCounts,ft=W._multiDrawCount,nn=Fe?Z.get(Fe).bytesPerElement:1,Ci=_.get($).currentProgram.getUniforms();for(let on=0;on<ft;on++)Ci.setValue(P,"_gl_DrawID",on),Et.render(Xe[on]/nn,vt[on])}else if(W.isInstancedMesh)Et.renderInstances(st,It,W.count);else if(K.isInstancedBufferGeometry){let Xe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,vt=Math.min(K.instanceCount,Xe);Et.renderInstances(st,It,vt)}else Et.render(st,It)};function Rs(T,V,K){T.transparent===!0&&T.side===jt&&T.forceSinglePass===!1?(T.side=an,T.needsUpdate=!0,ji(T,V,K),T.side=Si,T.needsUpdate=!0,ji(T,V,K),T.side=jt):ji(T,V,K)}this.compile=function(T,V,K=null){K===null&&(K=T),w=Me.get(K),w.init(V),I.push(w),K.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),T!==K&&T.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(w.pushLight(W),W.castShadow&&w.pushShadow(W))}),w.setupLights();let $=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let we=W.material;if(we)if(Array.isArray(we))for(let Ue=0;Ue<we.length;Ue++){let Pe=we[Ue];Rs(Pe,K,W),$.add(Pe)}else Rs(we,K,W),$.add(we)}),w=I.pop(),$},this.compileAsync=function(T,V,K=null){let $=this.compile(T,V,K);return new Promise(W=>{function we(){if($.forEach(function(Ue){_.get(Ue).currentProgram.isReady()&&$.delete(Ue)}),$.size===0){W(T);return}setTimeout(we,10)}Te.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ar=null;function Wc(T){Ar&&Ar(T)}function Rr(){Xn.stop()}function Cs(){Xn.start()}let Xn=new Sd;Xn.setAnimationLoop(Wc),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(T){Ar=T,be.setAnimationLoop(T),T===null?Xn.stop():Xn.start()},be.addEventListener("sessionstart",Rr),be.addEventListener("sessionend",Cs),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let K=be.enabled===!0&&be.isPresenting===!0,$=N!==null&&(k===null||K)&&N.begin(y,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(V),V=be.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,V,k),w=Me.get(T,I.length),w.init(V),I.push(w),ut.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ze.setFromProjectionMatrix(ut,Kn,V.reversedDepth),ot=this.localClippingEnabled,Ce=Be.init(this.clippingPlanes,ot),M=ue.get(T,R.length),M.init(),R.push(M),be.enabled===!0&&be.isPresenting===!0){let Ue=y.xr.getDepthSensingMesh();Ue!==null&&$i(Ue,V,-1/0,y.sortObjects)}$i(T,V,0,y.sortObjects),M.finish(),y.sortObjects===!0&&M.sort(ht,Qe),le=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,le&&ve.addToRenderList(M,T),this.info.render.frame++,Ce===!0&&Be.beginShadows();let W=w.state.shadowsArray;if(Oe.render(W,T,V),Ce===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&N.hasRenderPass())===!1){let Ue=M.opaque,Pe=M.transmissive;if(w.setupLights(),V.isArrayCamera){let Fe=V.cameras;if(Pe.length>0)for(let ke=0,Ze=Fe.length;ke<Ze;ke++){let Ge=Fe[ke];Cr(Ue,Pe,T,Ge)}le&&ve.render(T);for(let ke=0,Ze=Fe.length;ke<Ze;ke++){let Ge=Fe[ke];Ki(M,T,Ge,Ge.viewport)}}else Pe.length>0&&Cr(Ue,Pe,T,V),le&&ve.render(T),Ki(M,T,V)}k!==null&&F===0&&(O.updateMultisampleRenderTarget(k),O.updateRenderTargetMipmap(k)),$&&N.end(y),T.isScene===!0&&T.onAfterRender(y,T,V),Ie.resetDefaultState(),Y=-1,G=null,I.pop(),I.length>0?(w=I[I.length-1],Ce===!0&&Be.setGlobalState(y.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function $i(T,V,K,$){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ze.intersectsSprite(T)){$&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);let Ue=he.update(T),Pe=T.material;Pe.visible&&M.push(T,Ue,Pe,K,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ze.intersectsObject(T))){let Ue=he.update(T),Pe=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ae.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ae.copy(Ue.boundingSphere.center)),ae.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(Pe)){let Fe=Ue.groups;for(let ke=0,Ze=Fe.length;ke<Ze;ke++){let Ge=Fe[ke],st=Pe[Ge.materialIndex];st&&st.visible&&M.push(T,Ue,st,K,ae.z,Ge)}}else Pe.visible&&M.push(T,Ue,Pe,K,ae.z,null)}}let we=T.children;for(let Ue=0,Pe=we.length;Ue<Pe;Ue++)$i(we[Ue],V,K,$)}function Ki(T,V,K,$){let{opaque:W,transmissive:we,transparent:Ue}=T;w.setupLightsView(K),Ce===!0&&Be.setGlobalState(y.clippingPlanes,K),$&&me.viewport(X.copy($)),W.length>0&&mi(W,V,K),we.length>0&&mi(we,V,K),Ue.length>0&&mi(Ue,V,K),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Cr(T,V,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){let st=Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new Ft(1,1,{generateMipmaps:!0,type:st?Gt:_n,minFilter:ci,samples:He.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let we=w.state.transmissionRenderTarget[$.id],Ue=$.viewport||X;we.setSize(Ue.z*y.transmissionResolutionScale,Ue.w*y.transmissionResolutionScale);let Pe=y.getRenderTarget(),Fe=y.getActiveCubeFace(),ke=y.getActiveMipmapLevel();y.setRenderTarget(we),y.getClearColor(ce),xe=y.getClearAlpha(),xe<1&&y.setClearColor(16777215,.5),y.clear(),le&&ve.render(K);let Ze=y.toneMapping;y.toneMapping=Qn;let Ge=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Ce===!0&&Be.setGlobalState(y.clippingPlanes,$),mi(T,K,$),O.updateMultisampleRenderTarget(we),O.updateRenderTargetMipmap(we),Te.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let gt=0,It=V.length;gt<It;gt++){let Dt=V[gt],{object:Et,geometry:Xe,material:vt,group:ft}=Dt;if(vt.side===jt&&Et.layers.test($.layers)){let nn=vt.side;vt.side=an,vt.needsUpdate=!0,Ps(Et,K,$,Xe,vt,ft),vt.side=nn,vt.needsUpdate=!0,st=!0}}st===!0&&(O.updateMultisampleRenderTarget(we),O.updateRenderTargetMipmap(we))}y.setRenderTarget(Pe,Fe,ke),y.setClearColor(ce,xe),Ge!==void 0&&($.viewport=Ge),y.toneMapping=Ze}function mi(T,V,K){let $=V.isScene===!0?V.overrideMaterial:null;for(let W=0,we=T.length;W<we;W++){let Ue=T[W],{object:Pe,geometry:Fe,group:ke}=Ue,Ze=Ue.material;Ze.allowOverride===!0&&$!==null&&(Ze=$),Pe.layers.test(K.layers)&&Ps(Pe,V,K,Fe,Ze,ke)}}function Ps(T,V,K,$,W,we){T.onBeforeRender(y,V,K,$,W,we),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(y,V,K,$,T,we),W.transparent===!0&&W.side===jt&&W.forceSinglePass===!1?(W.side=an,W.needsUpdate=!0,y.renderBufferDirect(K,V,$,W,T,we),W.side=Si,W.needsUpdate=!0,y.renderBufferDirect(K,V,$,W,T,we),W.side=jt):y.renderBufferDirect(K,V,$,W,T,we),T.onAfterRender(y,V,K,$,W,we)}function ji(T,V,K){V.isScene!==!0&&(V=fe);let $=_.get(T),W=w.state.lights,we=w.state.shadowsArray,Ue=W.state.version,Pe=Le.getParameters(T,W.state,we,V,K),Fe=Le.getProgramCacheKey(Pe),ke=$.programs;$.environment=T.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(T.isMeshStandardMaterial?Q:j).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,ke===void 0&&(T.addEventListener("dispose",Bn),ke=new Map,$.programs=ke);let Ze=ke.get(Fe);if(Ze!==void 0){if($.currentProgram===Ze&&$.lightsStateVersion===Ue)return Is(T,Pe),Ze}else Pe.uniforms=Le.getUniforms(T),T.onBeforeCompile(Pe,y),Ze=Le.acquireProgram(Pe,Fe),ke.set(Fe,Ze),$.uniforms=Pe.uniforms;let Ge=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Be.uniform),Is(T,Pe),$.needsLights=so(T),$.lightsStateVersion=Ue,$.needsLights&&(Ge.ambientLightColor.value=W.state.ambient,Ge.lightProbe.value=W.state.probe,Ge.directionalLights.value=W.state.directional,Ge.directionalLightShadows.value=W.state.directionalShadow,Ge.spotLights.value=W.state.spot,Ge.spotLightShadows.value=W.state.spotShadow,Ge.rectAreaLights.value=W.state.rectArea,Ge.ltc_1.value=W.state.rectAreaLTC1,Ge.ltc_2.value=W.state.rectAreaLTC2,Ge.pointLights.value=W.state.point,Ge.pointLightShadows.value=W.state.pointShadow,Ge.hemisphereLights.value=W.state.hemi,Ge.directionalShadowMap.value=W.state.directionalShadowMap,Ge.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ge.spotShadowMap.value=W.state.spotShadowMap,Ge.spotLightMatrix.value=W.state.spotLightMatrix,Ge.spotLightMap.value=W.state.spotLightMap,Ge.pointShadowMap.value=W.state.pointShadowMap,Ge.pointShadowMatrix.value=W.state.pointShadowMatrix),$.currentProgram=Ze,$.uniformsList=null,Ze}function Pr(T){if(T.uniformsList===null){let V=T.currentProgram.getUniforms();T.uniformsList=Mr.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Is(T,V){let K=_.get(T);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Ir(T,V,K,$,W){V.isScene!==!0&&(V=fe),O.resetTextureUnits();let we=V.fog,Ue=$.isMeshStandardMaterial?V.environment:null,Pe=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ls,Fe=($.isMeshStandardMaterial?Q:j).get($.envMap||Ue),ke=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ze=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ge=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,gt=!!K.morphAttributes.color,It=Qn;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=y.toneMapping);let Dt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Et=Dt!==void 0?Dt.length:0,Xe=_.get($),vt=w.state.lights;if(Ce===!0&&(ot===!0||T!==G)){let Nt=T===G&&$.id===Y;Be.setState($,T,Nt)}let ft=!1;$.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==vt.state.version||Xe.outputColorSpace!==Pe||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==Fe||$.fog===!0&&Xe.fog!==we||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Be.numPlanes||Xe.numIntersection!==Be.numIntersection)||Xe.vertexAlphas!==ke||Xe.vertexTangents!==Ze||Xe.morphTargets!==Ge||Xe.morphNormals!==st||Xe.morphColors!==gt||Xe.toneMapping!==It||Xe.morphTargetsCount!==Et)&&(ft=!0):(ft=!0,Xe.__version=$.version);let nn=Xe.currentProgram;ft===!0&&(nn=ji($,V,W));let Ci=!1,on=!1,Pi=!1,Tt=nn.getUniforms(),Ut=Xe.uniforms;if(me.useProgram(nn.program)&&(Ci=!0,on=!0,Pi=!0),$.id!==Y&&(Y=$.id,on=!0),Ci||G!==T){me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Tt.setValue(P,"projectionMatrix",T.projectionMatrix),Tt.setValue(P,"viewMatrix",T.matrixWorldInverse);let Jt=Tt.map.cameraPosition;Jt!==void 0&&Jt.setValue(P,Ke.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&Tt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,on=!0,Pi=!0)}if(Xe.needsLights&&(vt.state.directionalShadowMap.length>0&&Tt.setValue(P,"directionalShadowMap",vt.state.directionalShadowMap,O),vt.state.spotShadowMap.length>0&&Tt.setValue(P,"spotShadowMap",vt.state.spotShadowMap,O),vt.state.pointShadowMap.length>0&&Tt.setValue(P,"pointShadowMap",vt.state.pointShadowMap,O)),W.isSkinnedMesh){Tt.setOptional(P,W,"bindMatrix"),Tt.setOptional(P,W,"bindMatrixInverse");let Nt=W.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),Tt.setValue(P,"boneTexture",Nt.boneTexture,O))}W.isBatchedMesh&&(Tt.setOptional(P,W,"batchingTexture"),Tt.setValue(P,"batchingTexture",W._matricesTexture,O),Tt.setOptional(P,W,"batchingIdTexture"),Tt.setValue(P,"batchingIdTexture",W._indirectTexture,O),Tt.setOptional(P,W,"batchingColorTexture"),W._colorsTexture!==null&&Tt.setValue(P,"batchingColorTexture",W._colorsTexture,O));let An=K.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&je.update(W,K,nn),(on||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,Tt.setValue(P,"receiveShadow",W.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Ut.envMap.value=Fe,Ut.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(Ut.envMapIntensity.value=V.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=O_()),on&&(Tt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&io(Ut,Pi),we&&$.fog===!0&&We.refreshFogUniforms(Ut,we),We.refreshMaterialUniforms(Ut,$,Ne,Ye,w.state.transmissionRenderTarget[T.id]),Mr.upload(P,Pr(Xe),Ut,O)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mr.upload(P,Pr(Xe),Ut,O),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(P,"center",W.center),Tt.setValue(P,"modelViewMatrix",W.modelViewMatrix),Tt.setValue(P,"normalMatrix",W.normalMatrix),Tt.setValue(P,"modelMatrix",W.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let Nt=$.uniformsGroups;for(let Jt=0,Ii=Nt.length;Jt<Ii;Jt++){let Rn=Nt[Jt];de.update(Rn,nn),de.bind(Rn,nn)}}return nn}function io(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function so(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,V,K){let $=_.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),_.get(T.texture).__webglTexture=V,_.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){let K=_.get(T);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};let ro=P.createFramebuffer();this.setRenderTarget=function(T,V=0,K=0){k=T,L=V,F=K;let $=null,W=!1,we=!1;if(T){let Pe=_.get(T);if(Pe.__useDefaultFramebuffer!==void 0){me.bindFramebuffer(P.FRAMEBUFFER,Pe.__webglFramebuffer),X.copy(T.viewport),q.copy(T.scissor),ie=T.scissorTest,me.viewport(X),me.scissor(q),me.setScissorTest(ie),Y=-1;return}else if(Pe.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(Pe.__hasExternalTextures)O.rebindTextures(T,_.get(T.texture).__webglTexture,_.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ze=T.depthTexture;if(Pe.__boundDepthTexture!==Ze){if(Ze!==null&&_.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}let Fe=T.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(we=!0);let ke=_.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ke[V])?$=ke[V][K]:$=ke[V],W=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?$=_.get(T).__webglMultisampledFramebuffer:Array.isArray(ke)?$=ke[K]:$=ke,X.copy(T.viewport),q.copy(T.scissor),ie=T.scissorTest}else X.copy(te).multiplyScalar(Ne).floor(),q.copy(se).multiplyScalar(Ne).floor(),ie=Ae;if(K!==0&&($=ro),me.bindFramebuffer(P.FRAMEBUFFER,$)&&me.drawBuffers(T,$),me.viewport(X),me.scissor(q),me.setScissorTest(ie),W){let Pe=_.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+V,Pe.__webglTexture,K)}else if(we){let Pe=V;for(let Fe=0;Fe<T.textures.length;Fe++){let ke=_.get(T.textures[Fe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,K,Pe)}}else if(T!==null&&K!==0){let Pe=_.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Pe.__webglTexture,K)}Y=-1},this.readRenderTargetPixels=function(T,V,K,$,W,we,Ue,Pe=0){if(!(T&&T.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){me.bindFramebuffer(P.FRAMEBUFFER,Fe);try{let ke=T.textures[Pe],Ze=ke.format,Ge=ke.type;if(!He.textureFormatReadable(Ze)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ge)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-$&&K>=0&&K<=T.height-W&&(T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pe),P.readPixels(V,K,$,W,ge.convert(Ze),ge.convert(Ge),we))}finally{let ke=k!==null?_.get(k).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(T,V,K,$,W,we,Ue,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=_.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(V>=0&&V<=T.width-$&&K>=0&&K<=T.height-W){me.bindFramebuffer(P.FRAMEBUFFER,Fe);let ke=T.textures[Pe],Ze=ke.format,Ge=ke.type;if(!He.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,st),P.bufferData(P.PIXEL_PACK_BUFFER,we.byteLength,P.STREAM_READ),T.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Pe),P.readPixels(V,K,$,W,ge.convert(Ze),ge.convert(Ge),0);let gt=k!==null?_.get(k).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,gt);let It=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Yf(P,It,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,st),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,we),P.deleteBuffer(st),P.deleteSync(It),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,K=0){let $=Math.pow(2,-K),W=Math.floor(T.image.width*$),we=Math.floor(T.image.height*$),Ue=V!==null?V.x:0,Pe=V!==null?V.y:0;O.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,K,0,0,Ue,Pe,W,we),me.unbindTexture()};let Dr=P.createFramebuffer(),Ds=P.createFramebuffer();this.copyTextureToTexture=function(T,V,K=null,$=null,W=0,we=null){we===null&&(W!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=W,W=0):we=0);let Ue,Pe,Fe,ke,Ze,Ge,st,gt,It,Dt=T.isCompressedTexture?T.mipmaps[we]:T.image;if(K!==null)Ue=K.max.x-K.min.x,Pe=K.max.y-K.min.y,Fe=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Ze=K.min.y,Ge=K.isBox3?K.min.z:0;else{let An=Math.pow(2,-W);Ue=Math.floor(Dt.width*An),Pe=Math.floor(Dt.height*An),T.isDataArrayTexture?Fe=Dt.depth:T.isData3DTexture?Fe=Math.floor(Dt.depth*An):Fe=1,ke=0,Ze=0,Ge=0}$!==null?(st=$.x,gt=$.y,It=$.z):(st=0,gt=0,It=0);let Et=ge.convert(V.format),Xe=ge.convert(V.type),vt;V.isData3DTexture?(O.setTexture3D(V,0),vt=P.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(O.setTexture2DArray(V,0),vt=P.TEXTURE_2D_ARRAY):(O.setTexture2D(V,0),vt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,V.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,V.unpackAlignment);let ft=P.getParameter(P.UNPACK_ROW_LENGTH),nn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ci=P.getParameter(P.UNPACK_SKIP_PIXELS),on=P.getParameter(P.UNPACK_SKIP_ROWS),Pi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ke),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ge);let Tt=T.isDataArrayTexture||T.isData3DTexture,Ut=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){let An=_.get(T),Nt=_.get(V),Jt=_.get(An.__renderTarget),Ii=_.get(Nt.__renderTarget);me.bindFramebuffer(P.READ_FRAMEBUFFER,Jt.__webglFramebuffer),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Rn=0;Rn<Fe;Rn++)Tt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(T).__webglTexture,W,Ge+Rn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_.get(V).__webglTexture,we,It+Rn)),P.blitFramebuffer(ke,Ze,Ue,Pe,st,gt,Ue,Pe,P.DEPTH_BUFFER_BIT,P.NEAREST);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||_.has(T)){let An=_.get(T),Nt=_.get(V);me.bindFramebuffer(P.READ_FRAMEBUFFER,Dr),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ds);for(let Jt=0;Jt<Fe;Jt++)Tt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,An.__webglTexture,W,Ge+Jt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,An.__webglTexture,W),Ut?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Nt.__webglTexture,we,It+Jt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Nt.__webglTexture,we),W!==0?P.blitFramebuffer(ke,Ze,Ue,Pe,st,gt,Ue,Pe,P.COLOR_BUFFER_BIT,P.NEAREST):Ut?P.copyTexSubImage3D(vt,we,st,gt,It+Jt,ke,Ze,Ue,Pe):P.copyTexSubImage2D(vt,we,st,gt,ke,Ze,Ue,Pe);me.bindFramebuffer(P.READ_FRAMEBUFFER,null),me.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Ut?T.isDataTexture||T.isData3DTexture?P.texSubImage3D(vt,we,st,gt,It,Ue,Pe,Fe,Et,Xe,Dt.data):V.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,we,st,gt,It,Ue,Pe,Fe,Et,Dt.data):P.texSubImage3D(vt,we,st,gt,It,Ue,Pe,Fe,Et,Xe,Dt):T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,we,st,gt,Ue,Pe,Et,Xe,Dt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,we,st,gt,Dt.width,Dt.height,Et,Dt.data):P.texSubImage2D(P.TEXTURE_2D,we,st,gt,Ue,Pe,Et,Xe,Dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,nn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ci),P.pixelStorei(P.UNPACK_SKIP_ROWS,on),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Pi),we===0&&V.generateMipmaps&&P.generateMipmap(vt),me.unbindTexture()},this.initRenderTarget=function(T){_.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),me.unbindTexture()},this.resetState=function(){L=0,F=0,k=null,me.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var di={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},z_=new Wi(-1,1,1,-1,0,1),yu=class extends Rt{constructor(){super(),this.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new at([0,2,0,0,2,0],2))}},H_=new yu,pi=class{constructor(e){this._mesh=new qe(H_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,z_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Er=class extends Tn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dn.clone(e.uniforms),this.material=new nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Za=class extends Tn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Rc=class extends Tn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Cc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ne);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Er(di),this.copyPass.material.blending=kt,this.clock=new ms}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Za!==void 0&&(a instanceof Za?n=!0:a instanceof Rc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Pc=class extends Tn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ye}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Rd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Tr=class i extends Tn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ne(e.x,e.y):new ne(256,256),this.clearColor=new ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(r,a,{type:Gt}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Ft(r,a,{type:Gt});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Ft(r,a,{type:Gt});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Rd;this.highPassUniforms=dn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dn.clone(di.uniforms),this.blendMaterial=new nt({uniforms:this.copyUniforms,vertexShader:di.vertexShader,fragmentShader:di.fragmentShader,premultipliedAlpha:!0,blending:Qt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ye,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new pi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ne(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Tr.BlurDirectionX=new ne(1,0);Tr.BlurDirectionY=new ne(0,1);var Ja={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ic=class extends Tn{constructor(){super(),this.isOutputPass=!0,this.uniforms=dn.clone(Ja.uniforms),this.material=new mr({name:Ja.name,uniforms:this.uniforms,vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader}),this._fsQuad=new pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Da?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===La?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Fa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Na&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $a={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new tt},cameraProjectionMatrixInverse:{value:new tt},cameraWorldMatrix:{value:new tt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},Ka={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Dc={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Cd(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=V_(e),n=t.length,s=new Uint8Array(n*4);for(let a=0;a<n;++a){let o=t[a],l=2*Math.PI*o/n,c=new D(Math.cos(l),Math.sin(l),0).normalize();s[a*4]=(c.x*.5+.5)*255,s[a*4+1]=(c.y*.5+.5)*255,s[a*4+2]=127,s[a*4+3]=255}let r=new Ti(s,e,e);return r.wrapS=un,r.wrapT=un,r.needsUpdate=!0,r}function V_(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let a=1;a<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=a++;r++,s--}return n}var ja={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Mu(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ne},cameraProjectionMatrixInverse:{value:new tt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Mu(i,e,t){let n=k_(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let a=n[r];s+=`vec3(${a.x}, ${a.y}, ${a.z})${r<i-1?",":")"}`}return s}function k_(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,a=Math.pow(s/(i-1),t);n.push(new D(Math.cos(r),Math.sin(r),a))}return n}var Lc=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,a=.5*(Math.sqrt(3)-1),o=(e+t)*a,l=Math.floor(e+o),c=Math.floor(t+o),h=(3-Math.sqrt(3))/6,f=(l+c)*h,u=l-f,d=c-f,g=e-u,x=t-d,m,p;g>x?(m=1,p=0):(m=0,p=1);let b=g-m+h,S=x-p+h,M=g-1+2*h,w=x-1+2*h,R=l&255,I=c&255,N=this.perm[R+this.perm[I]]%12,y=this.perm[R+m+this.perm[I+p]]%12,E=this.perm[R+1+this.perm[I+1]]%12,L=.5-g*g-x*x;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[N],g,x));let F=.5-b*b-S*S;F<0?s=0:(F*=F,s=F*F*this._dot(this.grad3[y],b,S));let k=.5-M*M-w*w;return k<0?r=0:(k*=k,r=k*k*this._dot(this.grad3[E],M,w)),70*(n+s+r)}noise3d(e,t,n){let s,r,a,o,c=(e+t+n)*.3333333333333333,h=Math.floor(e+c),f=Math.floor(t+c),u=Math.floor(n+c),d=1/6,g=(h+f+u)*d,x=h-g,m=f-g,p=u-g,b=e-x,S=t-m,M=n-p,w,R,I,N,y,E;b>=S?S>=M?(w=1,R=0,I=0,N=1,y=1,E=0):b>=M?(w=1,R=0,I=0,N=1,y=0,E=1):(w=0,R=0,I=1,N=1,y=0,E=1):S<M?(w=0,R=0,I=1,N=0,y=1,E=1):b<M?(w=0,R=1,I=0,N=0,y=1,E=1):(w=0,R=1,I=0,N=1,y=1,E=0);let L=b-w+d,F=S-R+d,k=M-I+d,Y=b-N+2*d,G=S-y+2*d,X=M-E+2*d,q=b-1+3*d,ie=S-1+3*d,ce=M-1+3*d,xe=h&255,pe=f&255,Ye=u&255,Ne=this.perm[xe+this.perm[pe+this.perm[Ye]]]%12,ht=this.perm[xe+w+this.perm[pe+R+this.perm[Ye+I]]]%12,Qe=this.perm[xe+N+this.perm[pe+y+this.perm[Ye+E]]]%12,te=this.perm[xe+1+this.perm[pe+1+this.perm[Ye+1]]]%12,se=.6-b*b-S*S-M*M;se<0?s=0:(se*=se,s=se*se*this._dot3(this.grad3[Ne],b,S,M));let Ae=.6-L*L-F*F-k*k;Ae<0?r=0:(Ae*=Ae,r=Ae*Ae*this._dot3(this.grad3[ht],L,F,k));let ze=.6-Y*Y-G*G-X*X;ze<0?a=0:(ze*=ze,a=ze*ze*this._dot3(this.grad3[Qe],Y,G,X));let Ce=.6-q*q-ie*ie-ce*ce;return Ce<0?o=0:(Ce*=Ce,o=Ce*Ce*this._dot3(this.grad3[te],q,ie,ce)),32*(s+r+a+o)}noise4d(e,t,n,s){let r=this.grad4,a=this.simplex,o=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,f,u,d,g,x=(e+t+n+s)*l,m=Math.floor(e+x),p=Math.floor(t+x),b=Math.floor(n+x),S=Math.floor(s+x),M=(m+p+b+S)*c,w=m-M,R=p-M,I=b-M,N=S-M,y=e-w,E=t-R,L=n-I,F=s-N,k=y>E?32:0,Y=y>L?16:0,G=E>L?8:0,X=y>F?4:0,q=E>F?2:0,ie=L>F?1:0,ce=k+Y+G+X+q+ie,xe=a[ce][0]>=3?1:0,pe=a[ce][1]>=3?1:0,Ye=a[ce][2]>=3?1:0,Ne=a[ce][3]>=3?1:0,ht=a[ce][0]>=2?1:0,Qe=a[ce][1]>=2?1:0,te=a[ce][2]>=2?1:0,se=a[ce][3]>=2?1:0,Ae=a[ce][0]>=1?1:0,ze=a[ce][1]>=1?1:0,Ce=a[ce][2]>=1?1:0,ot=a[ce][3]>=1?1:0,ut=y-xe+c,Ke=E-pe+c,ae=L-Ye+c,fe=F-Ne+c,le=y-ht+2*c,Ee=E-Qe+2*c,P=L-te+2*c,Re=F-se+2*c,Te=y-Ae+3*c,He=E-ze+3*c,me=L-Ce+3*c,C=F-ot+3*c,_=y-1+4*c,O=E-1+4*c,j=L-1+4*c,Q=F-1+4*c,Z=m&255,_e=p&255,he=b&255,Le=S&255,We=o[Z+o[_e+o[he+o[Le]]]]%32,ue=o[Z+xe+o[_e+pe+o[he+Ye+o[Le+Ne]]]]%32,Me=o[Z+ht+o[_e+Qe+o[he+te+o[Le+se]]]]%32,Be=o[Z+Ae+o[_e+ze+o[he+Ce+o[Le+ot]]]]%32,Oe=o[Z+1+o[_e+1+o[he+1+o[Le+1]]]]%32,ve=.6-y*y-E*E-L*L-F*F;ve<0?h=0:(ve*=ve,h=ve*ve*this._dot4(r[We],y,E,L,F));let je=.6-ut*ut-Ke*Ke-ae*ae-fe*fe;je<0?f=0:(je*=je,f=je*je*this._dot4(r[ue],ut,Ke,ae,fe));let B=.6-le*le-Ee*Ee-P*P-Re*Re;B<0?u=0:(B*=B,u=B*B*this._dot4(r[Me],le,Ee,P,Re));let Se=.6-Te*Te-He*He-me*me-C*C;Se<0?d=0:(Se*=Se,d=Se*Se*this._dot4(r[Be],Te,He,me,C));let ge=.6-_*_-O*O-j*j-Q*Q;return ge<0?g=0:(ge*=ge,g=ge*ge*this._dot4(r[Oe],_,O,j,Q)),27*(h+f+u+d+g)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var Qa=class i extends Tn{constructor(e,t,n=512,s=512,r,a,o){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Cd(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new Ft(this.width,this.height,{type:Gt}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new nt({defines:Object.assign({},$a.defines),uniforms:dn.clone($a.uniforms),vertexShader:$a.vertexShader,fragmentShader:$a.fragmentShader,blending:kt,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ta,this.normalMaterial.blending=kt,this.pdMaterial=new nt({defines:Object.assign({},ja.defines),uniforms:dn.clone(ja.uniforms),vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new nt({defines:Object.assign({},Ka.defines),uniforms:dn.clone(Ka.uniforms),vertexShader:Ka.vertexShader,fragmentShader:Ka.fragmentShader,blending:kt}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new nt({uniforms:dn.clone(di.uniforms),vertexShader:di.vertexShader,fragmentShader:di.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ia,blendDst:xs,blendEquation:Ln,blendSrcAlpha:Pa,blendDstAlpha:xs,blendEquationAlpha:Ln}),this.blendMaterial=new nt({uniforms:dn.clone(Dc.uniforms),vertexShader:Dc.vertexShader,fragmentShader:Dc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Sl,blendSrc:Ia,blendDst:xs,blendEquation:Ln,blendSrcAlpha:Pa,blendDstAlpha:xs,blendEquationAlpha:Ln}),this._fsQuad=new pi(null),this._originalClearColor=new ye,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),a!==void 0&&this.updateGtaoMaterial(a),o!==void 0&&this.updatePdMaterial(o)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new li,this.depthTexture.format=hi,this.depthTexture.type=qi,this.normalRenderTarget=new Ft(this.width,this.height,{minFilter:Vt,magFilter:Vt,type:Gt,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,s=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=s,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=s,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Mu(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=kt,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Lc,n=e*e*4,s=new Uint8Array(n);for(let a=0;a<e;a++)for(let o=0;o<e;o++){let l=a,c=o;s[(a*e+o)*4]=(t.noise(l,c)*.5+.5)*255,s[(a*e+o)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(a*e+o)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(a*e+o)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ti(s,e,e,Pn,_n);return r.wrapS=un,r.wrapT=un,r.needsUpdate=!0,r}};Qa.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function Mn(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Rt,c=0;for(let h=0;h<i.length;++h){let f=i[h],u=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[d]===void 0&&(a[d]=[]),a[d].push(f.morphAttributes[d])}if(e){let d;if(t)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let g=0;g<d.count;++g)f.push(d.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(f)}for(let h in r){let f=Pd(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,f)}for(let h in a){let f=a[h][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let x=0;x<a[h].length;++x)d.push(a[h][x][u]);let g=Pd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Pd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Mt(a,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let f=l/t;for(let u=0,d=h.count;u<d;u++)for(let g=0;g<t;g++){let x=h.getComponent(u,g);o.setComponent(u+f,g,x)}}else a.set(h.array,l);l+=h.count*t}return s!==void 0&&(o.gpuType=s),o}var eo=class i extends qe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new Ht;let n=this,s=t.color!==void 0?new ye(t.color):new ye(8355711),r=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,l=t.shader||i.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Vn,f=new D,u=new D,d=new D,g=new tt,x=new D(0,0,-1),m=new Ct,p=new D,b=new D,S=new Ct,M=new tt,w=this.camera,R=new Ft(r,a,{samples:c,type:Gt}),I=new nt({name:l.name!==void 0?l.name:"unspecified",uniforms:dn.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});I.uniforms.tDiffuse.value=R.texture,I.uniforms.color.value=s,I.uniforms.textureMatrix.value=M,this.material=I,this.onBeforeRender=function(N,y,E){if(u.setFromMatrixPosition(n.matrixWorld),d.setFromMatrixPosition(E.matrixWorld),g.extractRotation(n.matrixWorld),f.set(0,0,1),f.applyMatrix4(g),p.subVectors(u,d),p.dot(f)>0===!0&&this.forceUpdate===!1)return;p.reflect(f).negate(),p.add(u),g.extractRotation(E.matrixWorld),x.set(0,0,-1),x.applyMatrix4(g),x.add(d),b.subVectors(u,x),b.reflect(f).negate(),b.add(u),w.position.copy(p),w.up.set(0,1,0),w.up.applyMatrix4(g),w.up.reflect(f),w.lookAt(b),w.far=E.far,w.updateMatrixWorld(),w.projectionMatrix.copy(E.projectionMatrix),M.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),M.multiply(w.projectionMatrix),M.multiply(w.matrixWorldInverse),M.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(f,u),h.applyMatrix4(w.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);let F=w.projectionMatrix;S.x=(Math.sign(m.x)+F.elements[8])/F.elements[0],S.y=(Math.sign(m.y)+F.elements[9])/F.elements[5],S.z=-1,S.w=(1+F.elements[10])/F.elements[14],m.multiplyScalar(2/m.dot(S)),F.elements[2]=m.x,F.elements[6]=m.y,F.elements[10]=m.z+1-o,F.elements[14]=m.w,n.visible=!1;let k=N.getRenderTarget(),Y=N.xr.enabled,G=N.shadowMap.autoUpdate;N.xr.enabled=!1,N.shadowMap.autoUpdate=!1,N.setRenderTarget(R),N.state.buffers.depth.setMask(!0),N.autoClear===!1&&N.clear(),N.render(y,w),N.xr.enabled=Y,N.shadowMap.autoUpdate=G,N.setRenderTarget(k);let X=E.viewport;X!==void 0&&N.state.viewport(X),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return R},this.dispose=function(){R.dispose(),n.material.dispose()}}};eo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Uc=null;function G_(){if(Uc)return Uc;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Uc=new wi(i),Uc}function bu(i,e,t=.7){let n=new ha(new cr({map:G_(),color:i,transparent:!0,opacity:t,blending:Qt,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(e),n}var bn='"Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","Noto Sans JP","Noto Sans CJK JP","Meiryo","MS Gothic",sans-serif';function wr(i){let e=i%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647)/2147483647}function Wt(i,e,t){let n=document.createElement("canvas");return n.width=Math.max(2,Math.round(i)),n.height=Math.max(2,Math.round(e)),t(n.getContext("2d")),n}function Zt(i,e={}){let t=new wi(i);return e.srgb!==!1&&(t.colorSpace=$t),e.repeat&&(t.wrapS=t.wrapT=un),t.anisotropy=e.aniso??4,t.generateMipmaps=!0,t.minFilter=ci,t}var Ri={bays:6,floors:8,bayW:3.2,floorH:3.6},Id=Ri.bays*Ri.bayW,Eu=Ri.floors*Ri.floorH;function Dd(i,e,t=1){let n=Math.round(512*t),s=Math.round(512*t),r=n/Ri.bays,a=s/Ri.floors,o=[],l=wr(e);for(let d=0;d<Ri.floors;d++)for(let g=0;g<Ri.bays;g++)o.push({x:g*r,y:d*a,state:l(),r:l(),r2:l()});let c=i==="office"?.2:i==="glass"?.14:i==="old"?.1:.12,h=(d,g)=>{let x={office:"#171d2b",resi:"#1b1a24",glass:"#0b1424",old:"#201c20"}[i];d.fillStyle=g?"#000":x,d.fillRect(0,0,n,s);for(let m of o){let p=m.x+r*.1,b=m.y+a*(i==="glass"?.06:.14),S=r*(i==="glass"?.84:i==="office"?.78:.56),M=a*(i==="glass"?.8:i==="office"?.62:.5),w=m.state<c,R=m.r;if(g){if(w){let I,N=.3+m.r2*.4;if(R<.12?I="#ffbf80":R<.9?(I="#a8c8e0",N*=.8):I="#4a8cff",d.globalAlpha=N,d.fillStyle=I,d.fillRect(p,b,S,M),d.globalAlpha=1,d.fillStyle="rgba(0,0,0,0.5)",R>=.12&&R<.5&&(d.fillRect(p,b+M*.62,S*.4,M*.38),d.fillRect(p+S*.55,b+M*.7,S*.45,M*.3)),m.r2>.55&&R<.84){let y=p+S*(.25+(m.r2-.55)*1.2);d.fillStyle="rgba(0,0,0,0.82)",d.beginPath(),d.arc(y,b+M*.42,M*.11,0,Math.PI*2),d.fill(),d.fillRect(y-M*.14,b+M*.53,M*.28,M*.47)}if(m.r2<.2&&i!=="glass"){d.fillStyle="rgba(0,0,0,0.65)";let y=Math.max(3,Math.round(M/(3*t)));for(let E=0;E<y*.6;E++)d.fillRect(p,b+E*(M/y),S,M/y*.55)}(i==="office"||i==="glass")&&(d.fillStyle="rgba(0,0,0,0.9)",d.fillRect(p+S/2-t,b,2*t,M))}}else{let I=d.createLinearGradient(0,b,0,b+M);I.addColorStop(0,i==="glass"?"#243a5c":"#1a2438"),I.addColorStop(1,"#070a12"),d.fillStyle=w?"#1b2335":I,d.fillRect(p,b,S,M),d.strokeStyle="#0a0d14",d.lineWidth=Math.max(1,t*2),d.strokeRect(p,b,S,M),(i==="office"||i==="glass")&&(d.beginPath(),d.moveTo(p+S/2,b),d.lineTo(p+S/2,b+M),d.stroke()),d.fillStyle="#2b3345",d.fillRect(m.x,m.y+a-4*t,r,4*t),d.fillStyle="#10131c",d.fillRect(m.x,m.y+a-1.5*t,r,1.5*t),(i==="resi"||i==="old")&&(m.r2<.34&&(d.fillStyle="#394155",d.fillRect(p-4*t,b+M+2*t,S+8*t,4*t),d.fillStyle="#0c0f16",d.fillRect(p-4*t,b+M-7*t,S+8*t,2*t)),m.r2>.62&&m.r2<.8&&(d.fillStyle="#58606f",d.fillRect(p+S*.15,b+M+3*t,S*.7,8*t),d.fillStyle="#272c37",d.fillRect(p+S*.2,b+M+5*t,S*.5,4*t))),i==="old"&&m.r2>.94&&(d.fillStyle="#3b2432",d.fillRect(p,b,S,M))}}if(!g){d.fillStyle="rgba(255,255,255,0.025)";for(let m=0;m<=Ri.bays;m++)d.fillRect(m*r-t,0,2*t,s);if(i==="glass"){let m=d.createLinearGradient(0,0,n,s);m.addColorStop(0,"rgba(120,170,255,0.09)"),m.addColorStop(.5,"rgba(0,0,0,0)"),m.addColorStop(1,"rgba(255,120,200,0.07)"),d.fillStyle=m,d.fillRect(0,0,n,s)}}},f=Zt(Wt(n,s,d=>h(d,!1)),{repeat:!0}),u=Zt(Wt(n,s,d=>h(d,!0)),{repeat:!0});return{map:f,em:u}}var Tu={w:16,h:4.5};function Ld(i,e=1){let t=Math.round(1024*e),n=Math.round(288*e),s=wr(i),r=["\u30CD\u30AA\u9EBA","\u30BC\u30ED\u85AC\u5C40","\u30B3\u30A4\u30F3\u5802","\u713C\u304D\u9CE5","\u6708\u5F71","\u96FB\u8133\u5802","\u30DF\u30E9\u30A4\u6E6F","\u30AB\u30E9\u30AA\u30B1"],a=["#5fc8e0","#3fa8ff","#5fc8e0","#ff9a4a","#ff3a4a","#4a8cff"],o=Array.from({length:4},()=>({hue:a[Math.floor(s()*a.length)],shut:s()<.22,name:r[Math.floor(s()*r.length)],awn:s()<.6})),l=(c,h)=>{c.fillStyle=h?"#000":"#14141c",c.fillRect(0,0,t,n);let f=t/4;o.forEach((u,d)=>{let g=d*f;if(u.shut)if(h)c.fillStyle="rgba(255,60,190,0.35)",c.fillRect(g+f*.2,n*.4,f*.5,n*.18);else{c.fillStyle="#2a2d36",c.fillRect(g+f*.08,n*.2,f*.84,n*.72),c.fillStyle="#1c1e26";for(let x=n*.22;x<n*.9;x+=5*e)c.fillRect(g+f*.08,x,f*.84,1.5*e);c.fillStyle="#6a2c7a",c.fillRect(g+f*.2,n*.4,f*.5,n*.18)}else{let x=g+f*.08,m=n*.22,p=f*.84,b=n*.7;if(!h)c.fillStyle="#0a0c12",c.fillRect(x,m,p,b);else{let S=c.createLinearGradient(0,m,0,m+b);S.addColorStop(0,u.hue),S.addColorStop(1,"rgba(0,0,0,0.25)"),c.globalAlpha=.85,c.fillStyle=S,c.fillRect(x,m,p,b),c.globalAlpha=1,c.fillStyle="rgba(0,0,0,0.55)";for(let M=0;M<3;M++)c.fillRect(x+4*e,m+b*(.18+M*.22),p-8*e,2*e);c.fillStyle="rgba(0,0,0,0.7)",c.fillRect(x,m+b*.72,p,b*.28),c.beginPath(),c.arc(x+p*.62,m+b*.42,b*.08,0,Math.PI*2),c.fill(),c.fillRect(x+p*.62-b*.1,m+b*.5,b*.2,b*.25)}c.strokeStyle=h?"#000":"#232734",c.lineWidth=3*e,c.strokeRect(x,m,p,b)}if(u.awn&&!h)for(let x=0;x<8;x++)c.fillStyle=x%2?"#7a1f2c":"#d9d2c4",c.fillRect(g+f*.04+x*f*.92/8,n*.12,f*.92/8,n*.1);c.font=`900 ${n*.14}px ${bn}`,c.textAlign="center",c.textBaseline="middle",h?(c.shadowColor=u.hue,c.shadowBlur=8*e,c.fillStyle=u.hue,c.fillText(u.name,g+f/2,n*.07),c.shadowBlur=0):(c.fillStyle="#05060a",c.fillRect(g+f*.1,0,f*.8,n*.14))})};return{map:Zt(Wt(t,n,c=>l(c,!1)),{repeat:!0}),em:Zt(Wt(t,n,c=>l(c,!0)),{repeat:!0})}}var ws=8,Su=4,to=[{t:"\u30CD\u30AA\u30F3\u9152\u5834",c:"#2ec8e0"},{t:"\u591C\u660E\u3051\u9EBA",c:"#ff9a3a"},{t:"\u30DF\u30E9\u30A4\u6E6F",c:"#3fa8ff"},{t:"\u96FB\u8133\u30AB\u30D5\u30A7",c:"#2ec8e0"},{t:"\u30BC\u30ED\u85AC\u5C40",c:"#3fb8d8"},{t:"\u30B3\u30A4\u30F3\u5802",c:"#ff9a3a"},{t:"\u6708\u5F71\u30D0\u30FC",c:"#3a7bff"},{t:"\u30C8\u30FC\u30AF\u30F3\u5E02\u5834",c:"#ff2a46"},{t:"\u30CB\u30F3\u30B8\u30E3\u5802",c:"#ff2a46",sub:"NPG"},{t:"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6",c:"#ff2a3a",sub:"nSLAVE"},{t:"bWalletX",c:"#4da3ff",latin:!0},{t:"TOKENBLASTER",c:"#ff9a3a",latin:!0},{t:"NPG",c:"#ff2a46",latin:!0},{t:"\u713C\u304D\u9CE5",c:"#ff9a3a"},{t:"\u30AB\u30E9\u30AA\u30B1",c:"#3a7bff"},{t:"\u4E8C\u5341\u56DB\u6642\u9593",c:"#6fd8e8"},{t:"\u30B2\u30FC\u30E0\u8857",c:"#2ec8e0"},{t:"\u30B9\u30B7\u30FB\u30BC\u30ED",c:"#ff2a46"},{t:"\u30DB\u30C6\u30EB\u6708\u5149",c:"#6fb0ff"},{t:"\u4EBA\u5DE5\u5929\u4F7F",c:"#2ec8e0"},{t:"\u96FB\u6C17\u8857",c:"#3fa8ff"},{t:"BLOCK 21",c:"#27d8f0",latin:!0},{t:"\u591C\u52E4",c:"#ff2a46"},{t:"\u9EBB\u96C0",c:"#3fb8d8"},{t:"\u30D3\u30C3\u30C8\u30B3\u30A4\u30F3",c:"#ff9a3a"},{t:"\u4EEE\u60F3\u901A\u8CA8",c:"#2ec8e0"},{t:"\u5149\u306E\u5EAD",c:"#8fd8e8"},{t:"\u9244\u9AA8\u9152\u5834",c:"#3a7bff"},{t:"\u30B5\u30A4\u30D0\u30FC\u6574\u4F53",c:"#3a7bff"},{t:"\u96E8\u5BBF\u308A",c:"#3fa8ff"},{t:"\u30C9\u30ED\u30FC\u30F3\u4FBF",c:"#2ec8e0"},{t:"\u672A\u6765\u5802",c:"#3fa8ff"}];function Ud(i=1){let e=128*i,t=512*i,n=e*ws,s=t*Su,r=Wt(n,s,a=>{a.fillStyle="#000",a.fillRect(0,0,n,s),to.forEach((o,l)=>{let c=l%ws,h=Math.floor(l/ws),f=c*e,u=h*t;if(a.save(),a.translate(f,u),a.fillStyle="rgba(8,6,16,0.82)",a.fillRect(8*i,6*i,e-16*i,t-12*i),a.shadowColor=o.c,a.shadowBlur=14*i,a.strokeStyle=o.c,a.lineWidth=4*i,a.strokeRect(12*i,10*i,e-24*i,t-20*i),a.lineWidth=1.5*i,a.strokeRect(19*i,17*i,e-38*i,t-34*i),a.fillStyle=o.c,a.textAlign="center",a.textBaseline="middle",o.latin){a.save(),a.translate(e/2,t/2),a.rotate(-Math.PI/2);let d=Math.min(76*i,(t-70*i)/(o.t.length*.62));a.font=`900 ${d}px Impact, "Arial Black", sans-serif`,a.fillText(o.t,0,0),a.restore()}else{let d=[...o.t],g=o.sub?80*i:0,x=t-70*i-g,m=Math.min(74*i,x/d.length);a.font=`900 ${m}px ${bn}`,d.forEach((p,b)=>a.fillText(p,e/2,36*i+m*(b+.55))),o.sub&&(a.save(),a.translate(e/2,t-44*i-g/2),a.rotate(-Math.PI/2),a.font=`800 ${Math.min(24*i,(g+20*i)/(o.sub.length*.7))}px Arial, sans-serif`,a.fillText(o.sub,0,0),a.restore())}a.shadowBlur=8*i,a.fillStyle="#fff";for(let d=0;d<9;d++)a.fillRect(e/2-1.5*i,24*i+d*((t-60*i)/8),3*i,3*i);a.restore()})});return{texture:Zt(r,{aniso:4}),rect:a=>[a%ws/ws,1-(Math.floor(a/ws)+1)/Su,1/ws,1/Su]}}var Zi=4,Nc=2;function Nd(i=1){let e=512*i,t=Wt(e*Zi,e*Nc,n=>{n.fillStyle="#000",n.fillRect(0,0,e*Zi,e*Nc);let s=(a,o)=>{n.save(),n.translate(a%Zi*e,Math.floor(a/Zi)*e),n.beginPath(),n.rect(0,0,e,e),n.clip(),n.scale(i,i),o(n),n.restore()},r=(a,o,l,c,h,f=`900 ${c}px ${bn}`,u=20)=>{a.font=f,a.textAlign="center",a.textBaseline="middle",a.shadowColor=h,a.shadowBlur=u,a.fillStyle=h,a.fillText(o,256,l),a.shadowBlur=0};s(0,a=>{a.strokeStyle="#ff3226",a.lineWidth=8,a.shadowColor="#ff2a1a",a.shadowBlur=24,a.beginPath(),a.ellipse(256,190,170,86,0,0,Math.PI*2),a.stroke(),a.fillStyle="#ff3a2a",a.beginPath(),a.arc(256,190,48,0,Math.PI*2),a.fill(),a.fillStyle="#000",a.fillRect(250,142,12,96),a.shadowBlur=0,r(a,"nSLAVE",340,64,"#f4f7ff",'900 64px "Arial Black", Impact, sans-serif',14),r(a,"T E R R O R N O D E",400,28,"#ff5646","700 28px Arial, sans-serif",10),r(a,"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",456,30,"#ffb0a8",`700 30px ${bn}`,8)}),s(1,a=>{r(a,"TOKEN",190,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(a,"BLASTER",300,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(a,"\u30C8\u30FC\u30AF\u30F3\u30D6\u30E9\u30B9\u30BF\u30FC",400,40,"#ffe27a",`900 40px ${bn}`,12),r(a,"\u6483\u3066\u3002\u30D6\u30ED\u30C3\u30AF\u3092\u3002",456,30,"#ff8a3a",`700 30px ${bn}`,8)}),s(2,a=>{a.strokeStyle="#4da3ff",a.lineWidth=10,a.shadowColor="#2f7bff",a.shadowBlur=22,a.beginPath(),a.roundRect(150,70,212,168,28),a.stroke(),a.beginPath(),a.moveTo(150,120),a.lineTo(362,120),a.stroke(),a.shadowBlur=0,r(a,"bWalletX",340,94,"#8fc4ff",'900 94px "Arial Black", Impact, sans-serif',18),r(a,"\u30D3\u30FC\u30FB\u30A6\u30A9\u30EC\u30C3\u30C8",424,38,"#cfe4ff",`700 38px ${bn}`,10)}),s(3,a=>{r(a,"NPG",200,190,"#ff2a46",'900 italic 190px Impact, "Arial Black", sans-serif',28),r(a,"NINJA PUNK GIRLS",340,44,"#ffc0c8","800 44px Arial, sans-serif",10),r(a,"\u30CB\u30F3\u30B8\u30E3\u30FB\u30D1\u30F3\u30AF\u30FB\u30AC\u30FC\u30EB\u30BA",410,32,"#ff7a88",`700 32px ${bn}`,8)}),s(4,a=>{r(a,"NEO TOKYO",190,86,"#2ec8e0",'900 86px "Arial Black", Impact, sans-serif',24),r(a,"2048",300,150,"#ff2a46",'900 150px "Arial Black", Impact, sans-serif',26),r(a,"\u30CD\u30AA\u6771\u4EAC",410,66,"#cfeaf4",`900 66px ${bn}`,14)}),s(5,a=>{r(a,"nSLAVE",110,58,"#f4f7ff",'900 58px "Arial Black", Impact, sans-serif',16),r(a,"NOW PATENTED:",214,40,"#ff5646","800 40px Arial, sans-serif",10),r(a,"YOUR SOUL.",290,84,"#ff2a3a",'900 84px "Arial Black", Impact, sans-serif',24),r(a,"\u3042\u306A\u305F\u306E\u9B42\u306B\u7279\u8A31\u3092",400,44,"#ffb0a8",`800 44px ${bn}`,10),r(a,"terms apply \xB7 see you in court",462,22,"#8a98a8","600 22px Arial, sans-serif",0)}),s(6,a=>{r(a,"nSLAVE",84,42,"#f4f7ff",'900 42px "Arial Black", Impact, sans-serif',12),r(a,"SOUL",190,118,"#ff2a3a",'900 118px "Arial Black", Impact, sans-serif',24),r(a,"CHAIN\u2122",300,96,"#2ec8e0",'900 96px "Arial Black", Impact, sans-serif',22),r(a,"(chain of tools)",380,30,"#ffc0b8","italic 700 30px Arial, sans-serif",8),r(a,"\u30BD\u30A6\u30EB\u30C1\u30A7\u30FC\u30F3",450,42,"#80d8e8",`800 42px ${bn}`,10)}),s(7,a=>{r(a,"nSLAVE",96,50,"#f4f7ff",'900 50px "Arial Black", Impact, sans-serif',14),r(a,"100% OPEN SOURCE",190,46,"#2ec8e0","800 46px Arial, sans-serif",12),r(a,"BUILD ON ANY CHAIN",262,38,"#c0e8f0","700 38px Arial, sans-serif",8),r(a,"AS LONG AS IT\u2019S BSV",330,40,"#ff9a3a","800 40px Arial, sans-serif",12),r(a,"\u3069\u306E\u30C1\u30A7\u30FC\u30F3\u3067\u3082\u3002BSV\u306A\u3089\u3002",420,34,"#80d8e8",`700 34px ${bn}`,8)})});return{texture:Zt(t,{aniso:4}),rect:n=>[n%Zi/Zi,1-(Math.floor(n/Zi)+1)/Nc,1/Zi,1/Nc]}}function Fd(i=1){let e=384*i,t=256*i,n=[{c:"#2ec8e0",name:"\u30CD\u30AA\u8336",cans:["#ff4a4a","#e8b040","#5fc8e0","#4a7cd8"]},{c:"#3a8cff",name:"\u30BC\u30ED\u6C34",cans:["#8fd8e8","#d8e8f0","#4a7cd8","#ff9a3a"]},{c:"#ff9a3a",name:"\u96FB\u6C60\u30FB\u9EBA",cans:["#ff8a3a","#ff3b3b","#5fc8e0","#e6e6e6"]}],s=(r,a)=>{r.fillStyle=a?"#000":"#1b1e27",r.fillRect(0,0,e,t),n.forEach((o,l)=>{let c=l*128*i;r.fillStyle=a?o.c:"#222633",r.fillRect(c+8*i,8*i,112*i,30*i),r.fillStyle=a?"#000":o.c,r.font=`900 ${20*i}px ${bn}`,r.textAlign="center",r.textBaseline="middle",r.fillText(o.name,c+64*i,24*i),r.fillStyle=a?"rgba(255,255,255,0.4)":"#0b0d13",r.fillRect(c+8*i,44*i,112*i,140*i);for(let h=0;h<4;h++)for(let f=0;f<5;f++)r.fillStyle=o.cans[(h+f)%4],r.globalAlpha=a?.9:.55,r.fillRect(c+(14+f*21)*i,(50+h*33)*i,14*i,26*i),r.globalAlpha=1;for(let h=0;h<5;h++)r.fillStyle=a?o.c:"#3a3f4e",r.fillRect(c+(14+h*21)*i,192*i,14*i,8*i);r.fillStyle=a?"#000":"#07080c",r.fillRect(c+20*i,214*i,88*i,28*i)})};return{map:Zt(Wt(e,t,r=>s(r,!1))),em:Zt(Wt(e,t,r=>s(r,!0)))}}function Bd(i,e,t,n,s=1){let r=2048*s,a=512*s,o=wr(i),l=Wt(r,a,h=>{h.clearRect(0,0,r,a);let f=0;for(;f<r;){let d=(30+o()*90)*s,g=(60+Math.pow(o(),1.6)*380)*s;h.fillStyle=e,h.fillRect(f,a-g,d,g),o()<.35&&h.fillRect(f+d*.2,a-g-40*s*o(),d*.6,40*s),o()<.18&&h.fillRect(f+d*.48,a-g-70*s,3*s,70*s);for(let x=a-g+6*s;x<a-4*s;x+=9*s)for(let m=f+4*s;m<f+d-4*s;m+=7*s)if(o()<n){let p=o();h.fillStyle=p>.93?"#ff6a6a":p>.82?"#ffc890":p>.3?"#8fb8e0":"#5fd0e0",h.globalAlpha=.35+o()*.5,h.fillRect(m,x,3*s,4*s),h.globalAlpha=1}if(o()<.22){let x=["#ff2a46","#2ec8e0","#3a8cff","#2ec8e0"][Math.floor(o()*4)];h.fillStyle=x,h.globalAlpha=.9,h.fillRect(f+d-6*s,a-g+18*s,4*s,(50+o()*100)*s),h.globalAlpha=1}g>300*s&&o()<.7&&(h.fillStyle="#ff3030",h.fillRect(f+d*.5-2*s,a-g-3*s,4*s,4*s)),f+=d+o()*6*s}let u=h.createLinearGradient(0,0,0,a);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,t),h.globalCompositeOperation="source-atop",h.fillStyle=u,h.fillRect(0,0,r,a),h.globalCompositeOperation="source-over"}),c=Zt(l,{repeat:!1});return c.wrapS=un,c}function Od(i=1){let e=1024*i,t=1024*i,n=16,s=20,r=wr(77),a=[];for(let l=0;l<n*s;l++)a.push(r());let o=(l,c)=>{l.fillStyle=c?"#000":"#08101e",l.fillRect(0,0,e,t);let h=e/n,f=t/s;for(let u=0;u<s;u++)for(let d=0;d<n;d++){let g=a[u*n+d];if(c)g>.88&&(l.globalAlpha=.25+(g-.88)*2.2,l.fillStyle=g>.97?"#ffc890":"#9fc4e8",l.fillRect(d*h+2,u*f+2,h-4,f*.78),l.globalAlpha=1);else{let x=l.createLinearGradient(d*h,u*f,d*h+h,u*f+f);x.addColorStop(0,"#16294a"),x.addColorStop(1,"#070d1a"),l.fillStyle=x,l.fillRect(d*h+1,u*f+1,h-2,f*.82),l.fillStyle="#0e1626",l.fillRect(d*h,u*f+f*.84,h,f*.16)}}l.strokeStyle=c?"#000":"#1b2740",l.lineWidth=Math.max(1,2*i);for(let u=0;u<=n;u++)l.beginPath(),l.moveTo(u*(e/n),0),l.lineTo(u*(e/n),t),l.stroke();for(let u=0;u<=s;u++)l.beginPath(),l.moveTo(0,u*(t/s)),l.lineTo(e,u*(t/s)),l.stroke()};return{map:Zt(Wt(e,t,l=>o(l,!1)),{repeat:!0,aniso:8}),em:Zt(Wt(e,t,l=>o(l,!0)),{repeat:!0,aniso:8})}}function zd(i=1){let e=1024*i,t=256*i,n=Wt(e,t,s=>{let r=s.createLinearGradient(0,0,0,t);r.addColorStop(0,"#fff2d6"),r.addColorStop(.55,"#ffd9a0"),r.addColorStop(1,"#a8764a"),s.fillStyle=r,s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.9)";for(let a=0;a<8;a++)s.fillRect(a*(e/8)+e/32,8*i,e/16,6*i);s.fillStyle="rgba(40,24,14,0.55)";for(let a=0;a<=16;a++)s.fillRect(a*(e/16)-i,0,2*i,t);s.fillStyle="rgba(60,30,20,0.75)",s.fillRect(e*.3,t*.62,e*.4,t*.14),s.fillStyle="rgba(20,10,6,0.85)";for(let a of[.12,.22,.4,.58,.77,.9])s.beginPath(),s.arc(e*a,t*.46,t*.04,0,Math.PI*2),s.fill(),s.fillRect(e*a-t*.05,t*.5,t*.1,t*.34);s.fillStyle="#240406",s.fillRect(e*.38,t*.1,e*.24,t*.36),s.fillStyle="#ff3226",s.beginPath(),s.ellipse(e*.5,t*.28,e*.07,t*.1,0,0,Math.PI*2),s.fill(),s.fillStyle="#000",s.fillRect(e*.498,t*.19,e*.004,t*.18)});return Zt(n)}var Fc=null;function no(){return Fc||(Fc=Zt(Wt(128,128,i=>{let e=i.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=e,i.fillRect(0,0,128,128)}),{srgb:!1}),Fc)}var Bc=null;function Hd(){return Bc||(Bc=Zt(Wt(128,128,i=>{i.strokeStyle="#fff",i.lineWidth=5,i.beginPath(),i.arc(64,64,52,0,Math.PI*2),i.stroke()}),{srgb:!1}),Bc)}function Vd(i){return{uT:{value:0},uFog:{value:i.density},uFogColor:{value:new ye(i.color)},uPx:{value:700}}}var Oc="float fadeAt(float d, float u){ return exp(-u*u*d*d*0.6); }";function kd(i,e){return new nt({side:jt,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog,uFogColor:e.uFogColor},vertexShader:`
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
      }`})}function Gd(i,e,t,n,s){return new nt({transparent:!0,depthWrite:!1,blending:Qt,side:jt,uniforms:{uMap:{value:i},uRect:{value:new Ct(...e)},uT:t.uT,uFog:t.uFog,uTint:{value:new ye(n)},uPh:{value:s}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform sampler2D uMap; uniform vec4 uRect; uniform float uT, uFog, uPh; uniform vec3 uTint;
      varying vec2 vUv; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      ${Oc}
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
      }`})}function Wd(i,e,t){return new nt({transparent:!0,depthWrite:!1,blending:Qt,side:jt,uniforms:{uT:i.uT,uFog:i.uFog,uA:{value:new ye(e)},uB:{value:new ye(t)}},vertexShader:`
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
      ${Oc}
      void main(){
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 1.6);
        float bands = 0.55 + 0.45 * sin(vY * 3.2 - uT * 2.4);
        float fine = 0.7 + 0.3 * sin(vY * 38.0 + uT * 14.0);
        float climb = smoothstep(0.92, 1.0, sin(vY * 0.35 - uT * 1.1));
        vec3 c = mix(uA, uB, clamp(vY * 0.018 - 0.2 + 0.25 * sin(uT * 0.5), 0.0, 1.0));
        float k = (0.12 + rim * 1.15) * bands * fine + climb * 0.9;
        gl_FragColor = vec4(c * k * 3.0 * fadeAt(vD, uFog * 0.5), 1.0);
      }`})}function zc(i,e,t,n,s){return new nt({transparent:!0,depthWrite:!1,blending:Qt,side:jt,uniforms:{uC:{value:new ye(i)},uK:{value:e},uP:{value:t},uInv:{value:n?1:0},uT:s.uT,uFog:s.uFog},vertexShader:`
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
      ${Oc}
      void main(){
        float f = abs(dot(normalize(vN), normalize(vV)));
        float ax = pow(clamp(mix(vY, 1.0 - vY, uInv), 0.0, 1.0), uP);
        float dust = 0.82 + 0.18 * sin(vW.y * 0.7 + vW.x * 0.3 + uT * 0.8) * sin(vW.z * 0.4 - uT * 0.5);
        float edge = smoothstep(0.0, 0.7, f);
        float near = smoothstep(0.4, 3.0, vD);
        gl_FragColor = vec4(uC * uK * pow(f, 1.4) * edge * ax * dust * near * fadeAt(vD, uFog * 0.7), 1.0);
      }`})}function Xd(i,e){return new nt({transparent:!0,depthWrite:!1,blending:Qt,uniforms:{uT:i.uT,uFog:i.uFog,uC:{value:new ye(e)}},vertexShader:`
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
      }`,fragmentShader:"uniform vec3 uC; uniform float uFog; varying float vA; varying float vD; void main(){ gl_FragColor = vec4(uC * vA * 0.5 * exp(-uFog*uFog*vD*vD*0.5), 1.0); }"})}function qd(i,e){return new nt({transparent:!0,depthWrite:!1,blending:Qt,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog},vertexShader:`
      attribute vec2 aPh; uniform float uT; varying vec2 vUv; varying float vL; varying float vD;
      void main(){
        float life = fract(uT * aPh.y + aPh.x);
        vL = life; vUv = uv;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position * (0.08 + life * 0.55), 1.0);
        vD = -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform float uFog; varying vec2 vUv; varying float vL; varying float vD; void main(){ float a = texture2D(uMap, vUv).r * pow(1.0 - vL, 2.0) * smoothstep(0.0, 0.08, vL); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * a * 0.55 * exp(-uFog*uFog*vD*vD*0.6), 1.0); }"})}function Yd(i,e){return new nt({transparent:!0,depthWrite:!1,blending:Qt,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog,uPx:e.uPx},vertexShader:`
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
      }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vK; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vC * a * vK, 1.0); }"})}function Zd(i,e){return new nt({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:i},uT:e.uT,uFog:e.uFog,uPx:e.uPx,uC:{value:new ye("#6a94ac")}},vertexShader:`
      attribute vec3 aVent; attribute vec2 aSeed; uniform float uT, uPx, uFog; varying float vA; varying vec3 vWp;
      void main(){
        float life = fract(uT * (0.18 + aSeed.y * 0.12) + aSeed.x);
        vec3 p = aVent + vec3(sin(aSeed.x * 40.0 + life * 3.0) * life * 1.1, life * 5.0, cos(aSeed.x * 23.0) * life * 0.8);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = max(0.5, -mv.z);
        vA = sin(life * 3.14159) * 0.09 * exp(-uFog * uFog * d * d * 0.5); vWp = p;
        gl_PointSize = clamp((0.9 + life * 3.6) * uPx / d, 1.0, 140.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform vec3 uC; varying float vA; varying vec3 vWp; void main(){ float a = texture2D(uMap, gl_PointCoord).r; vec3 tint = uC + vec3(0.02, 0.1, 0.16) * smoothstep(-2.0, 2.0, vWp.x) ; gl_FragColor = vec4(tint * 0.7, a * vA); }"})}function Jd(i,e,t){return new nt({transparent:!0,depthWrite:!1,side:jt,uniforms:{uT:i.uT,uC:{value:new ye(e)},uK:{value:t}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uK; uniform vec3 uC; varying vec2 vUv; varying float vD;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vUv * vec2(7.0, 2.0) + vec2(uT * 0.03, uT * 0.01);
        float n = vn(p) * 0.6 + vn(p * 2.3 + 7.0) * 0.3 + vn(p * 5.1) * 0.1;
        float a = smoothstep(0.35, 0.85, n) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y) * smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        a *= smoothstep(10.0, 34.0, vD);
        gl_FragColor = vec4(uC, a * uK);
      }`})}function $d(i,e){i.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},i.customProgramCacheKey=()=>"wetground-v1"}function Kd(i){return new nt({transparent:!0,depthWrite:!1,blending:Qt,uniforms:{uT:i.uT,uFog:i.uFog,uLook:{value:new ne},uK:{value:2.1}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uFog, uK; uniform vec2 uLook; varying vec2 vUv; varying float vD;
      ${Oc}
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
      }`})}function jd(i){let e=Wd(i,"#2ec8e0","#ff2a46"),t=[],n=x=>(t.push(x),x),s=(x,m,p=0,b=0,S=0)=>{let M=new qe(x,e);return M.position.set(p,b,S),M.userData.noAO=!0,m.add(M),M},r=new hn,a=new hn;r.add(a);let o=n(new Sa([new ne(.15,1),new ne(.2,.88),new ne(.26,.62),new ne(.34,.36),new ne(.4,.2)],28));s(o,a);for(let x of[-1,1])s(n(new Oi(.05,.2,4,10)),a,x*.08,.1,0);s(n(new Oi(.13,.3,6,14)),a,0,1.2,0).scale.set(1.15,1,.8);let l=s(n(new Hi(.17,.045,8,28)),a,0,1.02,0);l.rotation.x=Math.PI/2,s(n(new pt(.26,.2,.06)),a,0,1.02,-.2),s(n(new rn(.045,.05,.1,10)),a,0,1.43,0);let c=new hn;c.position.set(0,1.56,0),a.add(c),s(n(new jn(.105,18,14)),c).scale.set(.95,1.08,1),s(n(new jn(.125,16,12)),c,0,.02,-.03).scale.set(1,1,1.05),s(n(new jn(.07,12,10)),c,0,.16,-.02),s(n(new hs(.1,.55,12,1,!0)),c,0,-.26,-.1);let h=s(n(new Hi(.34,.01,6,48)),c,0,.02,-.22),f=[];for(let x of[-1,1]){let m=new hn;m.position.set(x*.2,1.34,0),a.add(m),s(n(new Oi(.04,.26,4,8)),m,0,-.17,0);let p=new hn;p.position.set(0,-.34,0),m.add(p),s(n(new Oi(.035,.24,4,8)),p,0,-.15,0),s(n(new Pt(.22,.42)),p,x*.05,-.2,0),f.push({sh:m,el:p})}let u=s(n(new Hi(.55,.012,6,56)),r,0,.01,0);u.rotation.x=Math.PI/2;let d=s(n(new Hi(.4,.008,6,48)),r,0,.01,0);return d.rotation.x=Math.PI/2,{group:r,update:x=>{a.rotation.y=Math.sin(x*.25)*.7,a.rotation.z=Math.sin(x*.9)*.025,a.position.y=Math.sin(x*1.3)*.015,c.rotation.z=Math.sin(x*.7+1)*.07,c.rotation.y=Math.sin(x*.4)*.25,h.rotation.z=x*.6;let[m,p]=f;p.sh.rotation.z=-2.4+Math.sin(x*.9)*.1,p.el.rotation.z=-.5+Math.sin(x*3.2)*.55,m.sh.rotation.z=.35+Math.sin(x*.7)*.05,m.el.rotation.z=.5,u.scale.setScalar(1+Math.sin(x*1.5)*.04),d.rotation.z=x*.8},dispose:()=>{t.forEach(x=>x.dispose()),e.dispose()}}}var W_={z:-70,w:34,h:56,d:26,cols:8,rows:10,winY0:12},Qd=1.62,wn=(i,e,t,n,s,r,a,o)=>{let l=new pt(e,t,n);l.translate(s,r,a);let c=l.attributes.position.count,h=new Float32Array(c*3);for(let f=0;f<c;f++)h.set(o,f*3);l.setAttribute("color",new Mt(h,3)),i.push(l)},Hc=i=>{let e=Mn(i.map(t=>t.index?t.toNonIndexed():t),!1);return i.forEach(t=>t.dispose()),e},Vc=(i,e=2.4)=>new Ot({color:new ye(i).multiplyScalar(e),toneMapped:!1}),zt=27,kc=51,Ji=["#2ec8e0","#2ec8e0","#3a8cff","#2ec8e0","#3a8cff","#ff2a46","#2ec8e0","#4da3ff"];function ep({renderer:i,scene:e,high:t,look:n}){let s=t?1:.5,r=(v,A)=>t?v:A,a=new hn,o=[],l=v=>(o.push(v),v),c=wr(2048),h=(v,A)=>v+(A-v)*c(),f=v=>Math.floor(c()*v),u=W_,d=new cs;d.add(new qe(new jn(50,24,16),new nt({side:an,vertexShader:"varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 p; void main(){ float h = normalize(p).y; vec3 lo = vec3(0.05,0.10,0.16); vec3 hi = vec3(0.01,0.02,0.07); gl_FragColor = vec4(mix(lo, hi, smoothstep(-0.1,0.7,h)),1.); }"})));let g=(v,A,U,z,H,J,ee)=>{let oe=new qe(new Pt(U,z),new Ot({color:new ye(v).multiplyScalar(A),side:jt,toneMapped:!1}));oe.position.set(H,J,ee),oe.lookAt(0,0,0),d.add(oe)};g("#ff2a2a",7,30,4,0,16,-40),g("#27c8e0",5,34,3,-30,10,-10),g("#ffa24a",3,30,3,30,12,-6),g("#2ec8e0",4,20,5,18,24,20),g("#ff2a46",3,8,16,-34,18,-26),g("#2ec8e0",5,6,20,34,20,-30),g("#3a8cff",4,6,12,-20,14,-44),g("#ffffff",3,14,2,-8,32,-12);let x=new br(i),m=x.fromScene(d,.03).texture;x.dispose(),d.traverse(v=>{let A=v;A.isMesh&&(A.geometry.dispose(),A.material.dispose())}),e.environment=m,e.environmentIntensity=.85,e.background=new ye("#05060f");let p=new la("#071420",.0066);e.fog=p;let b=Vd(p),S=l(new nt({side:an,depthWrite:!1,fog:!1,uniforms:{uT:b.uT},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
        }`})),M=new qe(l(new jn(400,32,20)),S);M.renderOrder=-10,M.userData.noAO=!0,a.add(M),a.add(new Ra("#4f78b8","#150a14",.38));let w=new Ca("#78a8ff",.9);if(w.position.set(-40,70,10),w.target.position.set(0,0,-40),t){w.castShadow=!0,w.shadow.mapSize.set(2048,2048);let v=w.shadow.camera;v.left=-50,v.right=50,v.top=60,v.bottom=-60,v.near=10,v.far=200,w.shadow.bias=-5e-4,w.shadow.normalBias=.05}a.add(w,w.target);let R=new Gi("#ff2418",t?500:300,90,1.6);R.position.set(0,u.h-4,u.z+14),a.add(R);let I=new Gi("#ffc27a",t?160:100,34,1.7);I.position.set(0,5,u.z+9),a.add(I);let N=new Gi("#ffd27a",0,26,1.6);a.add(N);let y=n.material("concrete_floor_02",[60,120],"#3b404c",.35);y.roughness=.34,y.envMapIntensity=1.6,l(y);let E={tReflect:{value:null},uReflMat:{value:new tt},uReflOn:{value:0},uT:b.uT,uWet:{value:1}};$d(y,E);let L=new qe(l(new Pt(200,400)),y);L.rotation.x=-Math.PI/2,L.position.set(0,0,-120),L.receiveShadow=!0,a.add(L);let F=null,k=new tt,Y=new ne;t&&(i.getDrawingBufferSize(Y),F=new eo(new Pt(2,2),{textureWidth:Math.max(64,Math.round(Y.x*.5)),textureHeight:Math.max(64,Math.round(Y.y*.5)),clipBias:.002,multisample:0}),F.rotation.x=-Math.PI/2,F.updateMatrixWorld(!0),k.copy(F.matrixWorld).invert(),E.tReflect.value=F.getRenderTarget().texture,E.uReflOn.value=1);let G=l(n.material("large_floor_tiles_02",[8,90],"#5a5d6a",.1));G.roughness=.45,G.envMapIntensity=1.2;for(let v of[-1,1]){let A=new qe(l(new pt(11,.25,400)),G);A.position.set(v*21.5,.12,-120),A.receiveShadow=!0,a.add(A)}let X=[],q=(v,A,U,z,H=.03)=>{let J=new Pt(v,A);J.rotateX(-Math.PI/2),J.translate(U,H,z),X.push(J)};for(let v=-4;v>-300;v-=9)q(.25,4,0,v);for(let v of[-1,1])q(.2,300,v*15.4,-150);for(let v of[-9,-86,-150])for(let A=-6;A<=6;A++)q(.7,3.6,A*1.9,v);let ie=l(new St({color:"#c9ccd6",roughness:.4,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.add(new qe(l(Mn(X,!1)),ie)),X.forEach(v=>v.dispose());let ce=l(Zt(Wt(256,512,v=>{v.fillStyle="#e8eaf2",v.font=`900 220px ${bn}`,v.textAlign="center",v.textBaseline="middle",["\u6B62","\u307E","\u308C"].forEach((A,U)=>v.fillText(A,128,90+U*165))}))),xe=new qe(l(new Pt(3.4,6.6)),l(new St({map:ce,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1})));xe.rotation.x=-Math.PI/2,xe.position.set(-7,.035,-17),a.add(xe);let pe=(v,A,U,z,H=!1)=>{let J=new En(l(v),A,Math.max(1,U.length));return J.count=U.length,U.forEach((ee,oe)=>J.setMatrixAt(oe,ee)),z&&z.forEach((ee,oe)=>J.setColorAt(oe,ee)),J.instanceMatrix.needsUpdate=!0,J.instanceColor&&(J.instanceColor.needsUpdate=!0),J.frustumCulled=!1,J.castShadow=H,J.receiveShadow=!0,a.add(J),J},Ye=new D(0,1,0),Ne=(v,A,U,z=1,H=1,J=1,ee=0)=>new tt().compose(new D(v,A,U),new kn().setFromAxisAngle(Ye,ee),new D(z,H,J)),ht=[],Qe=(v,A,U,z,H,J=0,ee=1)=>ht.push({p:new D(v,A,U),c:new ye(z).multiplyScalar(ee),s:H,ph:c(),mode:J}),te=[],se=(v,A,U,z,H,J=1,ee=.03)=>te.push({p:new D(v,ee,A),sx:U,sz:z,c:new ye(H).multiplyScalar(J*.22)}),Ae=["office","resi","glass","old"],ze=Ae.map((v,A)=>Dd(v,7+A*29,s));ze.forEach(v=>o.push(v.map,v.em));let Ce={office:[.5,.35,1.1,1],resi:[.75,.15,1,.7],glass:[.22,.8,1.15,1.5],old:[.8,.1,1,.6]},ot={};Ae.forEach((v,A)=>{let[U,z,H,J]=Ce[v];ot[v]=l(new St({map:ze[A].map,emissiveMap:ze[A].em,emissive:"#ffffff",emissiveIntensity:H,roughness:U,metalness:z,envMapIntensity:J}))});let ut=Ld(5,s);o.push(ut.map,ut.em);let Ke=l(new St({map:ut.map,emissiveMap:ut.em,emissive:"#ffffff",emissiveIntensity:1.5,roughness:.55,metalness:.2})),ae=l(new St({color:"#232733",roughness:.75,metalness:.25})),fe=l(new St({color:"#0e1018",roughness:.9,metalness:.1})),le=l(new St({color:"#0c0e14",roughness:.55,metalness:.85})),Ee=l(new St({color:"#2a2d38",roughness:.85,metalness:.05})),P={office:[],resi:[],glass:[],old:[],shop:[],trim:[],roof:[],iron:[],concrete:[]},Re=(v,A,U,z,H,J,ee,oe=0,Ve=0,rt=0,xt=0)=>{let mn=new pt(U-A,H-z,ee-J);if(mn.translate((A+U)/2,(z+H)/2,(J+ee)/2),oe>0){let Xt=mn.attributes.position,qt=mn.attributes.normal,ln=mn.attributes.uv;for(let _t=0;_t<Xt.count;_t++)Math.abs(qt.getX(_t))>.5?ln.setXY(_t,Xt.getZ(_t)/oe+rt,Xt.getY(_t)/Ve+xt):Math.abs(qt.getZ(_t))>.5?ln.setXY(_t,Xt.getX(_t)/oe+rt,Xt.getY(_t)/Ve+xt):ln.setXY(_t,Xt.getX(_t)/oe,Xt.getZ(_t)/oe)}v.push(mn)},Te=[],He=[],me=[],C=[],_=(v,A,U,z,H,J)=>{let ee=new ye(J).multiplyScalar(3.2),oe=.16,Ve=[[v,A,z,z+oe],[v,A,U-oe,U],[v,v+oe,z,U],[A-oe,A,z,U]];for(let[rt,xt,mn,Xt]of Ve){let qt=new pt(xt-rt,.16,Xt-mn);qt.translate((rt+xt)/2,H,(mn+Xt)/2),C.push({g:qt,c:ee})}},O=(v,A,U,z,H)=>{let J=new pt(.16,z-U,.16);J.translate(v,(U+z)/2,A),C.push({g:J,c:new ye(H).multiplyScalar(3)})},j=(v,A,U,z,H,J,ee,oe)=>{let Ve=c()*4,rt=(wt,cn,Ns,ti,qn)=>{let zn=v>0?wt:-ee,eh=v>0?ee:-wt;Re(P[H],zn,eh,cn,Ns,qn,ti,Id,Eu,Ve,-cn/Eu)},xt=(wt,cn,Ns,ti,qn,zn)=>{let eh=v>0?wt-zn:-ee-zn,Mp=v>0?ee+zn:-wt+zn;Re(P.trim,eh,Mp,cn,Ns,qn-zn,ti+zn)},mn=oe?4.5:0;if(oe){let wt=v>0?J:-ee,cn=v>0?ee:-J;Re(P.shop,wt,cn,0,mn,U,A,Tu.w,Tu.h,c()*4,0),xt(J,mn,mn+.35,A,U,.7)}let Xt=mn+(oe?.35:0),qt=z>36?Math.max(Xt+8,z*.6):z;rt(J,Xt,qt,A,U);for(let wt=Xt+14.4;wt<qt-2;wt+=14.4)xt(J,wt,wt+.22,A,U,.14);let ln=qt,_t=[A,U],On=J;if(z>36){xt(J,qt,qt+.4,A,U,.3);let wt=z>52?z*.85:z;On=J+1.6,_t=[A-.8,U+.8],rt(On,qt+.4,wt,_t[0],_t[1]),ln=wt,z>52&&(xt(On,wt,wt+.4,_t[0],_t[1],.3),On=J+3.6,_t=[A-2.2,U+2.2],rt(On,wt+.4,z,_t[0],_t[1]),ln=z)}if(xt(On,ln,ln+.55,_t[0],_t[1],.22),Te.push({xa:v>0?On:-ee,xb:v>0?ee:-On,za:_t[0],zb:_t[1],y:ln+.55,kind:H,h:ln}),!oe)return;let Qc=v>0?On:-ee,yp=v>0?ee:-On;if(c()<.8&&_(Qc,yp,_t[0],_t[1],ln+.65,Ji[f(Ji.length)]),z>30&&c()<.7){let wt=Ji[f(Ji.length)],cn=v*(zt+.12);O(cn,A-.1,Xt,Math.min(qt,z*.75),wt),O(cn,U+.1,Xt,Math.min(qt,z*.75),wt)}if(He.push({sx:v,za:A,zb:U,h:z,h1:qt,kind:H}),(H==="resi"||H==="old")&&A-U>13&&c()<.8){let wt=(A+U)/2+h(-2,2),cn=v*(J-.55),Ns=Math.min(5,Math.floor((qt-Xt-3)/3.6));for(let ti=0;ti<Ns;ti++){let qn=Xt+1.4+ti*3.6;if(Re(P.iron,cn-.55,cn+.55,qn,qn+.08,wt-1.6,wt+1.6),Re(P.iron,cn-v*.55-.03,cn-v*.55+.03,qn,qn+.95,wt-1.6,wt+1.6),Re(P.iron,cn-.55,cn+.55,qn+.9,qn+.95,wt-1.6,wt+1.6),ti<Ns-1){let zn=new pt(.8,.07,2.4);zn.rotateX((ti%2?1:-1)*Math.atan2(3.6,2.4)),zn.translate(cn,qn+1.8,wt+(ti%2?-.1:.1)),P.iron.push(zn)}}}};for(let v of[-1,1]){let A=-3.5,U=0,z=!1;for(;A>-200;){let J=h(13,21),ee=A,oe=A-J,Ve=h(22,62),rt=Ae[f(4)];v<0&&!z&&oe<-70?(oe=ee-20,Ve=32,rt="office",z=!0):ee<-26&&ee>-72&&Ve>40&&(Ve=h(30,40)),j(v,ee,oe,Ve,rt,zt,kc,!0),A=oe;let xt=U%3===2&&A>-150?5.4:h(1.2,2.6);xt>4&&me.push({sx:v,z:A-xt/2}),A-=xt,U++}let H=-2;for(;H>-210;){let J=h(18,30);j(v,H,H-J,h(70,150),c()<.6?"glass":"office",kc,kc+26,!1),H-=J}}let Q=-20,Z=15.2,_e=21,he=9.4;{Re(P.concrete,Q-4.7,Q+4.7,Z,Z+1.3,-230,14),Re(P.concrete,Q-4.7,Q-4.5,Z+1.3,Z+2.4,-230,14),Re(P.concrete,Q+4.5,Q+4.7,Z+1.3,Z+2.4,-230,14);for(let U=4;U>-220;U-=20)Re(P.concrete,Q-.9,Q+.9,0,Z,U-1.3,U+1.3),Re(P.concrete,Q-3.6,Q+3.6,Z-1,Z,U-1.6,U+1.6);for(let U=0;U>-220;U-=10)Re(P.iron,Q-4.4,Q-4.3,Z+1.3,Z+6.2,U-.05,U+.05),Qe(Q-3.9,Z+6.2,U,"#ffb35a",1.1,0,1),Qe(Q-3,Z-.3,U-5,"#ff9a3a",.9,0,.8),Qe(Q+3,Z-.3,U-5,"#ff9a3a",.9,0,.8);Re(P.concrete,_e-2.6,_e+2.6,he-.5,he+.3,-230,14),Re(P.concrete,_e-2.6,_e-2.45,he+.3,he+1.15,-230,14),Re(P.concrete,_e+2.45,_e+2.6,he+.3,he+1.15,-230,14),Re(P.iron,_e-.95,_e-.85,he+.3,he+.42,-230,14),Re(P.iron,_e+.85,_e+.95,he+.3,he+.42,-230,14),Re(P.iron,_e-.02,_e+.02,he+4.6,he+4.64,-230,14);for(let U=0;U>-220;U-=14)Re(P.concrete,_e-.7,_e+.7,0,he-.5,U-1.8,U+1.8),Re(P.iron,_e+2.3-.07,_e+2.3+.07,he+.3,he+4.6,U-.07,U+.07),Qe(_e,he-.8,U,"#7ee8ff",1,2,.8)}{let v=[];for(let A of[Q-2.2,Q+2.2])for(let U=12;U>-230;U-=3){let z=new Pt(.12,1.4);z.rotateX(-Math.PI/2),z.translate(A,Z+1.32,U),v.push(z)}a.add(new qe(l(Mn(v,!1)),l(Vc("#bcd8ec",.9)))),v.forEach(A=>A.dispose())}let Le={...ot,shop:Ke,trim:ae,roof:fe,iron:le,concrete:Ee};if(Object.keys(P).forEach(v=>{if(!P[v].length)return;let A=l(Mn(P[v],!1));P[v].forEach(z=>z.dispose());let U=new qe(A,Le[v]);U.castShadow=t&&v!=="iron",U.receiveShadow=!0,a.add(U)}),C.length){let v=C.map(({g:U,c:z})=>{let H=U.attributes.position.count,J=new Float32Array(H*3);for(let ee=0;ee<H;ee++)J.set([z.r,z.g,z.b],ee*3);return U.setAttribute("color",new Mt(J,3)),U}),A=l(Mn(v,!1));v.forEach(U=>U.dispose()),a.add(new qe(A,l(new Ot({vertexColors:!0,toneMapped:!1,fog:!0}))))}let We=[],ue=[],Me=[];for(let v of Te){if(v.xb-v.xa<4||v.za-v.zb<4)continue;let A=()=>h(v.xa+1.5,v.xb-1.5),U=()=>h(v.zb+1.5,v.za-1.5);(v.kind==="resi"||v.kind==="old")&&c()<.5&&We.push(Ne(A(),v.y,U(),1,h(.8,1.2),1,c()*6));let z=Math.floor(h(1,r(6,4)));for(let H=0;H<z;H++)ue.push(Ne(A(),v.y,U(),h(.8,2.2),h(.7,1.4),h(.8,2),c()*3));if(c()<.7){let H=h(6,v.h>70?26:16),J=A(),ee=U();Me.push(Ne(J,v.y+H/2,ee,1,H,1)),v.h>28&&Qe(J,v.y+H+.3,ee,"#ff2a1a",1.6,1,2.5)}}let Be=(()=>{let v=[],A=new rn(1.15,1.15,2.4,14);A.translate(0,2.6,0);let U=new hs(1.3,.8,14);U.translate(0,4.2,0),v.push(A,U);for(let[H,J]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]]){let ee=new rn(.06,.06,1.5,4);ee.translate(H,.75,J),v.push(ee)}let z=Mn(v,!1);return v.forEach(H=>H.dispose()),z})();We.length&&pe(Be,l(new St({color:"#3a3430",roughness:.7,metalness:.5})),We),ue.length&&pe(new pt(1,1,1).translate(0,.5,0),l(new St({color:"#4a505e",roughness:.65,metalness:.4})),ue),Me.length&&pe(new rn(.05,.1,1,5),l(new St({color:"#15171d",roughness:.5,metalness:.9})),Me);let Oe=Ud(s);o.push(Oe.texture);let ve=[],je=(v,A,U,z,H,J,ee)=>{let oe=c(),Ve=oe<.5?0:oe<.7?1:oe<.8?2:oe<.92?3:4,rt=(ee?2.2:1.8)*H,xt=rt*4;ve.push({m:Ne(A,U,z,rt,xt,1,J),rect:Oe.rect(v),mode:Ve,ph:c(),spd:h(1,2.6)}),(t||c()<.5)&&Qe(A-Math.sin(J)*.1,U,z+Math.cos(J)*.15,to[v].c,xt*.24,0,.14)},B=[8,9,10,11,12];for(let v of He){let A=Math.floor((v.za-v.zb)/r(6,7.5))+1;for(let U=0;U<A;U++){let z=c()<.3?B[f(B.length)]:f(to.length),H=c()<.45,J=h(.7,1.5),ee=Math.min(v.h1-2,30),oe=(H?2.2:1.8)*J*4;if(ee<10)continue;let Ve=Math.min(ee-oe/2,h(6+oe/2,ee)),rt=h(v.zb+1.4,v.za-1.4);H?je(z,v.sx*(zt-.14),Ve,rt,J,v.sx>0?-Math.PI/2:Math.PI/2,!0):je(z,v.sx*(zt-.95),Ve,rt,J,0,!1)}}for(let v of me)je(f(to.length),v.sx*(zt+3),7.5+c()*3,v.z+h(-1.4,1.4),1.3,0,!1);{let v=ve.length,A=new Pt(1,1),U=new Float32Array(v*4),z=new Float32Array(v*3);ve.forEach((J,ee)=>{U.set(J.rect,ee*4),z.set([J.ph,J.mode,J.spd],ee*3)}),A.setAttribute("aRect",new oi(U,4)),A.setAttribute("aAnim",new oi(z,3));let H=new En(l(A),l(kd(Oe.texture,b)),v);ve.forEach((J,ee)=>H.setMatrixAt(ee,J.m)),H.instanceMatrix.needsUpdate=!0,H.frustumCulled=!1,a.add(H)}let Se=Nd(s);o.push(Se.texture);let ge=l(new Pt(1,1)),Ie=(v,A,U,z,H,J,ee)=>{let oe=new qe(ge,l(Gd(Se.texture,Se.rect(v),b,ee,c()*4)));oe.position.set(A,U,z),oe.scale.set(H,H,1),oe.rotation.y=J,oe.userData.noAO=!0,a.add(oe)};{let v=He.filter(H=>H.sx>0&&H.za<-18&&H.za>-150&&H.h1>18),A=He.filter(H=>H.sx<0&&H.za<-18&&H.za>-150&&H.h1>18),U=(H,J)=>H[Math.min(H.length-1,J)];if(v.length>3){let[H,J,ee]=[U(v,1),U(v,3),U(v,5)];Ie(1,zt-.4,Math.min(H.h1-6,17),(H.za+H.zb)/2,11,-Math.PI/2+.2,"#e8f4ff"),Ie(2,zt-.4,Math.min(J.h1-6,24),(J.za+J.zb)/2,10,-Math.PI/2+.25,"#e6f1ff"),Ie(4,zt-.4,Math.min(ee.h1-7,16),(ee.za+ee.zb)/2,11,-Math.PI/2+.3,"#ffffff")}if(A.length>3){let[H,J]=[U(A,2),U(A,4)];Ie(3,-zt+.4,Math.min(H.h1-6,15),(H.za+H.zb)/2,11,Math.PI/2-.2,"#e8f4ff"),Ie(7,-zt+.4,Math.min(J.h1-6,22),(J.za+J.zb)/2,10,Math.PI/2-.25,"#e8f4ff")}Te.filter(H=>H.xa>zt&&H.h>80&&H.zb<-25&&H.za>-150).slice(0,3).forEach((H,J)=>Ie([5,6,0][J],(H.xa+H.xb)/2-10,H.y+9,H.za-2,22,-.4,"#ffffff"))}let de=Te.filter(v=>v.xb>-40&&v.xb<-20&&v.za>-96&&v.zb<-68).sort((v,A)=>Math.abs((v.za+v.zb)/2+82)-Math.abs((A.za+A.zb)/2+82))[0]??Te.find(v=>v.xb<0),re=jd(b);re.group.scale.setScalar(24/1.8),re.group.position.set((de.xa+de.xb)/2+2,de.y,(de.za+de.zb)/2),a.add(re.group),o.push(re);let be=new qe(l(new rn(7,3,13,20,1,!0)),l(zc("#35e8ff",.3,1,!0,b)));be.position.copy(re.group.position).add(new D(0,6.5,0)),be.userData.noAO=!0,a.add(be),Qe(re.group.position.x,de.y+1,re.group.position.z,"#35e8ff",14,0,.55);let et=6,mt=9,bt=(()=>{let v=new zi,A=1.5,U=.7;v.moveTo(-A,-1.2),v.lineTo(A,-1.2),v.lineTo(A,1.55-U),v.quadraticCurveTo(A,1.55,A-U,1.55),v.lineTo(-A+U,1.55),v.quadraticCurveTo(-A,1.55,-A,1.55-U),v.closePath();let z=new fs(v,{depth:mt-.5,bevelEnabled:!0,bevelSize:.12,bevelThickness:.25,bevelSegments:2,curveSegments:6});z.translate(0,0,-(mt-.5)/2);let H=new pt(2.5,.4,mt-1.2);H.translate(0,-1.4,0);let J=[z.index?z.toNonIndexed():z.clone(),H.index?H.toNonIndexed():H.clone()];z.dispose(),H.dispose();let ee=Mn(J,!1);return J.forEach(oe=>oe.dispose()),ee})(),Bn=(()=>{let v=[],A=[1.5,1.35,1];for(let U of[-1,1]){for(let z=0;z<6;z++)wn(v,.05,.85,.95,U*1.63,.45,-3.3+z*1.32,A);wn(v,.05,.08,mt-.6,U*1.64,-.95,0,[.3,2.2,2.8]),wn(v,.05,.05,mt-.8,U*1.62,1.08,0,[.6,.9,1.3]);for(let z of[-4.1,4.1])wn(v,.06,1.9,.06,U*1.63,.1,z,[.9,1.1,1.4])}return wn(v,.5,.06,.5,0,1.6,-3.6,[3,.25,.25]),wn(v,.5,.06,.5,0,1.6,3.6,[3,.25,.25]),Hc(v)})(),pn=new En(l(bt),l(new St({color:"#d4d8e2",roughness:.28,metalness:.75,envMapIntensity:1.7})),et),As=new En(l(Bn),l(new Ot({vertexColors:!0,toneMapped:!1})),et);As.instanceMatrix=pn.instanceMatrix,pn.instanceMatrix.setUsage(bc),pn.frustumCulled=As.frustumCulled=!1,a.add(pn,As);let Rs=(()=>{let v=[];wn(v,2.4,.12,.08,0,.95,0,[3,3,2.7]);for(let A of[-1,1])wn(v,.55,.22,.08,A*.95,-.7,0,[3.2,3.1,2.8]);return wn(v,2,.9,.04,0,.35,-.02,[.05,.25,.35]),new qe(l(Hc(v)),As.material)})();a.add(Rs);let Ar=l(new St({color:"#1b1e25",roughness:.5,metalness:.8})),Wc=l(Vc("#ffcf8a",3)),Rr=[],Cs=[],Xn=[],$i=[],Ki=[];for(let v=0;v<10;v++)for(let A of[-1,1]){let U=-10-v*14-(A>0?7:0),z=new rn(.12,.17,8,8);z.translate(A*16.5,4,U);let H=new pt(2.6,.15,.15);H.translate(A*15.3,8,U),Xn.push(z,H);let J=new pt(.9,.12,.4);if(J.translate(A*14.3,7.9,U),$i.push(J),Cs.push(new D(A*16.5,8.2,U)),Ki.push(new D(A*14.3,7.4,U)),Qe(A*14.3,7.85,U,"#ffb860",1,2,.6),v<3){let ee=new Gi("#ffb35a",60,26,1.7);ee.position.set(A*14.3,7.4,U),a.add(ee),Rr.push(ee)}}a.add(new qe(l(Mn(Xn,!1)),Ar),new qe(l(Mn($i,!1)),Wc)),Xn.forEach(v=>v.dispose()),$i.forEach(v=>v.dispose());let Cr=new rn(.25,4.6,7.4,16,1,!0);Cr.translate(0,3.7,0);let mi=new En(l(Cr),l(zc("#ffb460",.16,1.2,!1,b)),Ki.length);Ki.forEach((v,A)=>mi.setMatrixAt(A,Ne(v.x,.02,v.z))),mi.userData.noAO=!0,mi.frustumCulled=!1,a.add(mi),Ki.forEach(v=>se(v.x*.8,v.z,11,11,"#ffa550",1));let Ps=[],ji=[],Pr=(v,A,U,z=!1)=>{let H=[];for(let ee=0;ee<=8;ee++){let oe=ee/8;H.push(new D().lerpVectors(v,A,oe).add(new D(0,-U*4*oe*(1-oe),0)))}let J=new dr(H);Ps.push(new Ea(J,14,.03,3,!1)),z&&ji.push(J)},Is=Cs.filter(v=>v.x<0).sort((v,A)=>A.z-v.z),Ir=Cs.filter(v=>v.x>0).sort((v,A)=>A.z-v.z);for(let v of[Is,Ir])for(let A=0;A<v.length-1;A++)for(let U of[0,-.3,.3])Pr(v[A].clone().add(new D(0,U,0)),v[A+1].clone().add(new D(0,U*.8,0)),.7+U*.3);for(let v=0;v<Math.min(Is.length,Ir.length);v+=2){let A=Is[v],U=Ir.reduce((z,H)=>Math.abs(H.z-A.z)<Math.abs(z.z-A.z)?H:z);Pr(A.clone(),U.clone().setZ(A.z-1.5),1.6,v%4===0)}a.add(new qe(l(Mn(Ps,!1)),l(new St({color:"#07080b",roughness:.6,metalness:.2})))),Ps.forEach(v=>v.dispose());let io=[],so=[],ro=["#ff3a1a","#ff7a22","#ff3a1a","#ff9a3a"],Dr=(v,A,U,z=1)=>{let H=ro[f(ro.length)];io.push(Ne(v,A,U,z,z,z)),so.push(new ye(H).multiplyScalar(1.5)),Qe(v,A,U,H,.5*z,3,.25)};for(let v of He)for(let A=v.za-1.8;A>v.zb+1.2;A-=h(2.4,3.8))c()<.4&&Dr(v.sx*(zt-.9),h(3.1,3.7),A);for(let v of ji)for(let A=1;A<12;A++){let U=v.getPoint(A/12);Dr(U.x,U.y-.35,U.z,.55)}for(let v of me){let A=r(9,5);for(let z=0;z<A;z++){let H=v.sx*(zt+2+z*2.4);Dr(H,h(3.9,4.6),v.z+h(-1.8,1.8)),z%2===0&&se(H,v.z,6,6,z%4===0?"#ff5a3a":"#ff9a4a",.7)}let U=new qe(l(new Pt(4.6,9)),l(new Ot({map:no(),color:new ye(Ji[f(Ji.length)]).multiplyScalar(1.1),transparent:!0,blending:Qt,depthWrite:!1,toneMapped:!1,fog:!1})));U.position.set(v.sx*(kc-.3),5,v.z),U.rotation.y=v.sx>0?-Math.PI/2:Math.PI/2,U.userData.noAO=!0,a.add(U)}pe(new jn(.3,10,8).scale(1,1.3,1),l(new Ot({toneMapped:!1})),io,so);let Ds=Fd(s);o.push(Ds.map,Ds.em);let T=l(new St({map:Ds.map,emissiveMap:Ds.em,emissive:"#ffffff",emissiveIntensity:1.8,roughness:.35,metalness:.55})),V=[[],[],[]],K=["#2ec8e0","#3a8cff","#ff9a3a"],$=(v,A,U)=>{let z=f(3);V[z].push(Ne(v,.25,A,1,1,1,U)),se(v+Math.sin(U)*1.6,A+Math.cos(U)*1.6,4.5,4.5,K[z],.9,.27),Qe(v+Math.sin(U)*.5,1.4,A+Math.cos(U)*.5,K[z],1.2,0,.25)};for(let v of He)for(let A=v.za-2;A>v.zb+2;A-=h(7,12))if(c()<.7){let U=v.sx>0?-Math.PI/2:Math.PI/2;$(v.sx*(zt-1.3),A,U),c()<.5&&$(v.sx*(zt-1.3),A-1.1,U)}for(let v of me)$(v.sx*(zt+7),v.z-1.9,Math.PI),c()<.7&&$(v.sx*(zt+12),v.z+1.9,0);V.forEach((v,A)=>{let U=new pt(.9,1.9,.85);U.translate(0,.95,0);let z=U.attributes.uv;for(let H=0;H<z.count;H++)H>=16&&H<20?z.setXY(H,(A+z.getX(H))/3,z.getY(H)):z.setXY(H,.01+A/3,.99);v.length?pe(U,T,v):U.dispose()});let W=Zt(Wt(128,32,v=>{v.fillStyle="#e8e8ea",v.fillRect(0,0,128,32),v.fillStyle="#ff7a1a";for(let A=-2;A<10;A++)v.beginPath(),v.moveTo(A*16,32),v.lineTo(A*16+8,32),v.lineTo(A*16+24,0),v.lineTo(A*16+16,0),v.fill()}));o.push(W);let we=[];for(let v=0;v<7;v++){let A=6.6+v*1.7,U=-27-v*.6;we.push(Ne(A,.5,U,1,1,1,.12+v*.01)),v%2===0&&Qe(A,1.2,U,"#ffb000",.9,1,3)}for(let v of[-1,1])for(let A=0;A<4;A++)we.push(Ne(v*14.6,.5,-34-A*1.7-(v>0?40:0),1,1,1,Math.PI/2));pe(new pt(1.6,.8,.22),l(new St({map:W,roughness:.5,metalness:.1})),we,void 0,t);let Ue=[],Pe=[],Fe=[],ke=[],Ze=[],Ge=(v,A)=>{let U=4+f(4);for(let H=0;H<U;H++)Ue.push(Ne(v+h(-1.1,1.1),.45,A+h(-1,1),h(.8,1.3),h(.7,1.1),h(.8,1.3),c()*6)),Pe.push(new ye(["#10131a","#1a1226","#0f1a1a","#2a2a30"][f(4)]));c()<.6&&(Fe.push(Ne(v+h(-1.2,1.2),.25,A+h(-1,1))),ke.push(new ye(["#2a3d48","#3a2a48","#2f4a36","#4a3a2a"][f(4)])));let z=f(4);for(let H=0;H<z;H++)Ze.push(Ne(v+h(-1.4,1.4),.45+H%2*.4,A+h(-1,1),h(.8,1.4),1,h(.8,1.2),c()*3))};for(let v of me)Ge(v.sx*(zt+.5),v.z+1.8),Ge(v.sx*(zt+5),v.z-2),Ge(v.sx*(zt-1.5),v.z+3.6);for(let v of He)c()<.5&&Ge(v.sx*(zt-1.2),h(v.zb+2,v.za-2));Ue.length&&pe(new ba(.35,1),l(new St({color:"#ffffff",roughness:.22,metalness:.1,envMapIntensity:1.8})),Ue,Pe),Fe.length&&pe(new rn(.38,.32,.95,10).translate(0,.47,0),l(new St({color:"#ffffff",roughness:.5,metalness:.3})),Fe,ke),Ze.length&&pe(new pt(.6,.4,.5),l(new St({color:"#6b5238",roughness:.9})),Ze);let st=[new D(-3.5,0,-19),new D(5.5,0,-34),new D(-6,0,-52),new D(3,0,-64),new D(-11,0,-41),new D(10,0,-76)];pe(new rn(.5,.5,.04,16),l(new St({color:"#15171d",roughness:.4,metalness:.9})),st.map(v=>Ne(v.x,.04,v.z)));let gt=st.slice(0,r(6,4));for(let v of me.slice(0,r(6,3)))gt.push(new D(v.sx*(zt+3),0,v.z-2));{let v=r(26,14),A=gt.length*v,U=new Float32Array(A*3),z=new Float32Array(A*3),H=new Float32Array(A*2);gt.forEach((oe,Ve)=>{for(let rt=0;rt<v;rt++){let xt=Ve*v+rt;z.set([oe.x,.1,oe.z],xt*3),H.set([rt/v,c()],xt*2)}});let J=l(new Rt);J.setAttribute("position",new Mt(U,3)),J.setAttribute("aVent",new Mt(z,3)),J.setAttribute("aSeed",new Mt(H,2));let ee=new ur(J,l(Zd(no(),b)));ee.frustumCulled=!1,ee.userData.noAO=!0,a.add(ee),gt.forEach(oe=>se(oe.x,oe.z,5,5,"#a68cff",.35))}let It=(()=>{let v=new zi,A=[[2.35,.3],[2.2,.5],[1.15,.66],[.25,1.02],[-.95,1.06],[-1.9,.82],[-2.3,.62],[-2.3,.3],[-1.9,.16],[1.9,.16]];v.moveTo(A[0][0],A[0][1]);for(let[ee,oe]of A.slice(1))v.lineTo(ee,oe);v.closePath();let U=1.75,z=new fs(v,{depth:U,bevelEnabled:!0,bevelSize:.09,bevelThickness:.1,bevelSegments:2,curveSegments:1});z.rotateY(-Math.PI/2),z.translate(U/2,0,0);let H=[z.index?z.toNonIndexed():z.clone()];z.dispose();for(let ee of[-1,1]){let oe=new rn(.2,.24,1.6,10);oe.rotateX(Math.PI/2),oe.translate(ee*.98,.32,-1.45),H.push(oe.toNonIndexed()),oe.dispose()}let J=Mn(H,!1);return H.forEach(ee=>ee.dispose()),J.computeVertexNormals(),J})(),Dt=(()=>{let v=[],A=new zi;A.moveTo(1.05,.7),A.lineTo(.27,1.05),A.lineTo(-.9,1.09),A.lineTo(-1.5,.92),A.closePath();let U=new fs(A,{depth:1.5,bevelEnabled:!1});U.rotateY(-Math.PI/2),U.translate(.75,.02,0);let z=U.attributes.position.count,H=new Float32Array(z*3);for(let J=0;J<z;J++)H.set([.04,.12,.18],J*3);U.setAttribute("color",new Mt(H,3)),v.push(U),wn(v,1.7,.04,3.9,0,.12,0,[.4,1.6,2.4]),wn(v,1.65,.06,.06,0,.5,2.27,[3,3,2.8]);for(let J of[-1,1])wn(v,.32,.1,.06,J*.6,.36,2.33,[3.4,3.4,3.2]);wn(v,1.85,.07,.06,0,.6,-2.38,[3,.12,.1]);for(let J of[-1,1])wn(v,.04,.03,3.2,J*.97,.62,.3,[.5,1.4,2.2]),wn(v,.3,.3,.05,J*.98,.32,-2.27,[.6,2.2,3.2]);return Hc(v.map(J=>J.index?J.toNonIndexed():J))})(),Et=(()=>{let v=[];for(let A of[-1,1])for(let U of[!1,!0]){let z=new Pt(.22,7,1,1);z.rotateX(-Math.PI/2),U&&z.rotateZ(Math.PI/2),z.translate(A*.98,.32,-2.3-3.5);let H=z.attributes.position,J=new Float32Array(H.count*3);for(let ee=0;ee<H.count;ee++){let oe=Wa.clamp((H.getZ(ee)+9.3)/7,0,1);J.set([.5*oe,1.6*oe,2.4*oe],ee*3)}z.setAttribute("color",new Mt(J,3)),v.push(z)}return Hc(v)})(),Xe=l(new St({color:"#ffffff",roughness:.22,metalness:.9,envMapIntensity:1.8})),vt=l(new Ot({vertexColors:!0,toneMapped:!1})),ft=["#0b0d12","#9aa6b4","#4a1018","#0e3a46","#10203a","#b8c0c8"],nn=["#2ec8e0","#3a8cff","#2ec8e0","#ff2a46"],Ci=r(12,7),on=[],Pi=[],Tt=[];for(let v=0;v<Ci;v++){let A=v%2?1:-1,U=-14-v*h(9,12);on.push(Ne(A*13.3,.45,U,1,1,1,c()<.5?0:Math.PI)),Pi.push(new ye(ft[f(ft.length)]));let z=nn[f(nn.length)];Tt.push(new ye(z)),se(A*13.3,U,4.6,7,z,.55),Qe(A*13.3,.3,U,z,1.2,0,.3)}pe(It.clone(),Xe,on,Pi,t),pe(Dt.clone(),vt,on,Tt);let Ut=[];for(let v=0;v<r(46,20);v++){let A=c()<.5?1:-1;v%3===0?Ut.push({x:h(-170,170),y:h(32,120),z:h(-110,-260),ax:0,dir:A,spd:h(10,24),sc:h(2.2,4.5),lo:-180,hi:180,ry:A>0?Math.PI/2:-Math.PI/2}):Ut.push({x:(c()<.5?-1:1)*h(34,75),y:h(26,95),z:h(-250,20),ax:1,dir:A,spd:h(12,28),sc:h(2,4),lo:-270,hi:30,ry:A>0?Math.PI:0})}let An=[Q-3.1,Q-1.1,Q+1.1,Q+3.1];for(let v=0;v<r(14,8);v++){let A=v%4,U=A<2?-1:1;Ut.push({x:An[A],y:Z+1.55,z:h(-200,10),ax:1,dir:U,spd:h(16,30),sc:1,lo:-230,hi:14,ry:U<0?0:Math.PI})}let Nt=new En(l(It),Xe,Ut.length),Jt=new En(l(Dt),vt,Ut.length);Jt.instanceMatrix=Nt.instanceMatrix,Nt.instanceMatrix.setUsage(bc),Ut.forEach((v,A)=>{Nt.setColorAt(A,new ye(ft[f(ft.length)])),Jt.setColorAt(A,new ye(nn[f(nn.length)]).lerp(new ye("#ffffff"),.5)),v.dir*=1});let Ii=new En(l(Et),l(new Ot({vertexColors:!0,toneMapped:!1,transparent:!0,blending:Qt,depthWrite:!1,side:jt})),Ut.length);Ii.instanceMatrix=Nt.instanceMatrix,Ii.userData.noAO=!0,Nt.frustumCulled=Jt.frustumCulled=Ii.frustumCulled=!1,a.add(Nt,Jt,Ii);{for(let U of He)for(let z=U.za-2.5;z>U.zb+2;z-=h(4,6))se(U.sx*22.4,z,8,5,Ji[f(Ji.length)],.5,.27);se(0,u.z+9,42,16,"#ffc98a",.9),se(0,u.z+12,30,14,"#ff2a3a",.35);let v=new Pt(1,1);v.rotateX(-Math.PI/2);let A=new En(l(v),l(new Ot({map:no(),transparent:!0,blending:Qt,depthWrite:!1,toneMapped:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),te.length);te.forEach((U,z)=>{A.setMatrixAt(z,Ne(U.p.x,U.p.y,U.p.z,U.sx,1,U.sz*(t?1:1.6))),A.setColorAt(z,U.c)}),A.frustumCulled=!1,A.userData.noAO=!0,a.add(A)}{let v=r(420,160),A=new Pt(1,1);A.rotateX(-Math.PI/2);let U=new Float32Array(v*2);for(let H=0;H<v;H++)U.set([c(),h(.7,1.6)],H*2);A.setAttribute("aPh",new oi(U,2));let z=new En(l(A),l(qd(Hd(),b)),v);for(let H=0;H<v;H++)z.setMatrixAt(H,Ne(h(-15,15),.04,h(8,-60)));z.frustumCulled=!1,z.userData.noAO=!0,z.layers.set(1),a.add(z)}let Rn=Od(s);o.push(Rn.map,Rn.em);let wu=l(new ds({color:"#0b1222",metalness:.9,roughness:.16,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:.08})),ip=l(new ds({color:"#9fb4d8",map:Rn.map,emissiveMap:Rn.em,emissive:"#ffffff",emissiveIntensity:1.2,metalness:.85,roughness:.14,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.06})),Xc=l(new ds({color:"#0e1830",map:Rn.map,emissiveMap:Rn.em,emissive:"#ffffff",emissiveIntensity:.9,metalness:.85,roughness:.18,envMapIntensity:1.8})),Ls=new qe(l(new pt(u.w,u.h,u.d)),[Xc,Xc,fe,wu,ip,Xc]);Ls.position.set(0,u.h/2,u.z-u.d/2),Ls.castShadow=t,Ls.receiveShadow=!0,a.add(Ls);let Lr=l(new St({color:"#2a3346",roughness:.35,metalness:.9})),qc=(u.w-4)/u.cols,Yc=(u.h-u.winY0-10)/u.rows;{let v=[];for(let A=0;A<=u.cols;A++){let U=new pt(.35,u.h-u.winY0-6,.5);U.translate(-u.w/2+2+A*qc,u.winY0+(u.h-u.winY0-6)/2-2,u.z+.2),v.push(U)}for(let A=0;A<=u.rows;A++){let U=new pt(u.w-3,.3,.5);U.translate(0,u.winY0+A*Yc-.2,u.z+.2),v.push(U)}for(let A of[-1,1]){let U=new pt(.8,u.h,1.2);U.translate(A*(u.w/2+.1),u.h/2,u.z+.3),v.push(U)}a.add(new qe(l(Mn(v,!1)),Lr)),v.forEach(A=>A.dispose())}let Zc;{let v=[],A=(H,J,ee,oe)=>{let Ve=new pt(H,J,u.d-oe*2);Ve.translate(0,ee+J/2,u.z-u.d/2),v.push(Ve)};A(u.w-4,5,u.h,2),A(u.w-12,5,u.h+5,5),A(u.w-22,6,u.h+10,8),a.add(new qe(l(Mn(v,!1)),wu)),v.forEach(H=>H.dispose());let U=new qe(l(new rn(.15,.4,24,6)),Lr);U.position.set(0,u.h+28,u.z-u.d/2),a.add(U),Zc=l(Vc("#ff2a1a",2.8));let z=[];for(let[H,J]of[[u.h+5,u.w-4],[u.h+10,u.w-12],[u.h+16,u.w-22]]){let ee=new pt(J,.18,.18);ee.translate(0,H,u.z-1.6-(u.w-4-J)/8),z.push(ee)}for(let H of[-1,1]){let J=new pt(.22,u.h,.22);J.translate(H*(u.w/2-.2),u.h/2,u.z-.15),z.push(J)}a.add(new qe(l(Mn(z,!1)),Zc)),z.forEach(H=>H.dispose())}let Jc=bu("#ff2020",5,.9);Jc.position.set(0,u.h+40.5,u.z-u.d/2),a.add(Jc);let sp=l(Zt(Wt(128,128,v=>{v.fillStyle="#fff",v.fillRect(0,0,128,128),v.fillStyle="rgba(0,0,0,0.16)";for(let A=0;A<5;A++)v.fillRect(8+A*24,6,14,5);v.fillStyle="rgba(0,0,0,0.5)",v.fillRect(8,84,44,40),v.fillRect(70,92,50,32),v.beginPath(),v.arc(90,70,9,0,6.3),v.fill(),v.fillRect(80,78,20,26),v.fillStyle="#000",v.fillRect(62,0,4,128),v.strokeStyle="#000",v.lineWidth=8,v.strokeRect(0,0,128,128)}))),$c=[],rp=l(new Pt(qc-.9,Yc-.8)),ap=l(new Ot({color:"#ffffff",map:sp,toneMapped:!0,fog:!0})),Cn=new En(rp,ap,u.cols*u.rows),Au=new tt,Us=new ye,op=v=>v>.95?Us.set("#ffc890").multiplyScalar(.9):v>.8?Us.set("#a8c8e8").multiplyScalar(.6):v>.62?Us.set("#6a8cb0").multiplyScalar(.35):Us.set("#0c1626").multiplyScalar(.9),Ru=()=>{$c.length=0;let v=4242,A=()=>(v=v*16807%2147483647)/2147483647;for(let U=0;U<u.rows;U++)for(let z=0;z<u.cols;z++){let H=U*u.cols+z,J=-u.w/2+2+qc*(z+.5),ee=u.winY0+Yc*(U+.5),oe=A();$c.push({i:H,x:J,y:ee,hp:30,broke:!1,lit:oe}),Au.makeTranslation(J,ee,u.z+.06),Cn.setMatrixAt(H,Au),Cn.setColorAt(H,op(oe))}Cn.instanceMatrix.needsUpdate=!0,Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0)};Ru(),a.add(Cn);let ao=[],lp=v=>{v.broke=!0,Cn.setColorAt(v.i,Us.set("#120604")),Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0),Math.random()<.35&&ao.push(v)},cp=l(Zt(Wt(1024,300,v=>{v.clearRect(0,0,1024,300),v.font='900 118px "Arial Black", Impact, sans-serif',v.textBaseline="middle",v.textAlign="center",v.fillStyle="#eef3fb",v.shadowColor="#9fc0ff",v.shadowBlur=0,v.fillText("nSLAVE",512,118),v.font="700 44px Arial, sans-serif",v.fillStyle="#ff4a3a",v.shadowColor="#ff2020",v.fillText("H  E  A  D  Q  U  A  R  T  E  R  S",512,224),v.font=`700 28px ${bn}`,v.fillStyle="#ff9a8a",v.fillText("\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",512,275)}))),Cu=new qe(l(new Pt(19,5.6)),l(new Ot({map:cp,color:new ye("#ffffff").multiplyScalar(1.5),toneMapped:!1,transparent:!0,depthWrite:!1,fog:!1})));Cu.position.set(7.6,u.h-4.6,u.z+.45),a.add(Cu);let Ur=new hn;Ur.position.set(-9,u.h-4.7,u.z+.5);let Pu=l(Kd(b)),Iu=new qe(l(new Pt(16,9)),Pu);Iu.userData.noAO=!0;let Kc=bu("#ff2a1a",20,.3);Kc.position.z=.4,Ur.add(Iu,Kc),a.add(Ur);let hp=new D(-9,u.h-4.7,u.z+3),up=l(new Ot({map:l(zd(s)),color:new ye("#ffffff").multiplyScalar(1.15),toneMapped:!0})),Du=new qe(l(new Pt(u.w-2.5,8.2)),up);Du.position.set(0,4.35,u.z+.32),a.add(Du);{let v=[];for(let A=0;A<=14;A++){let U=new pt(.16,8.4,.24);U.translate(-(u.w-2.5)/2+A*((u.w-2.5)/14),4.4,u.z+.48),v.push(U)}for(let A of[.2,4.4,8.5]){let U=new pt(u.w-2.2,.24,.3);U.translate(0,A,u.z+.48),v.push(U)}a.add(new qe(l(Mn(v,!1)),Lr)),v.forEach(A=>A.dispose())}let Lu=new qe(l(new pt(u.w+4,.6,7)),Lr);Lu.position.set(0,9,u.z+3),a.add(Lu);let Uu=new qe(l(new pt(u.w+2,.1,.4)),l(Vc("#27e6ff",3)));Uu.position.set(0,8.66,u.z+6.3),a.add(Uu);for(let v=0;v<9;v++)Qe(-u.w/2+2+v*((u.w-4)/8),8.55,u.z+5.4,"#ffe0b0",2.2,0,.8);{let U=l(Zt(Wt(2048,360,Ve=>{Ve.clearRect(0,0,2048,360);let rt=230,xt=360/2;Ve.lineCap=Ve.lineJoin="round";let mn=(qt,ln)=>{for(let[_t,On,Qc]of[[ln*3.2,"rgba(255,30,40,0.35)",60],[ln*1.6,"#ff2030",26],[ln*.55,"#ffd6d0",6]])Ve.shadowColor="#ff1a2a",Ve.shadowBlur=Qc,Ve.strokeStyle=On,Ve.lineWidth=_t,Ve.beginPath(),qt(),Ve.stroke()};mn(()=>{Ve.moveTo(rt-170,xt),Ve.quadraticCurveTo(rt,xt-150,rt+170,xt),Ve.quadraticCurveTo(rt,xt+150,rt-170,xt)},9),mn(()=>Ve.arc(rt,xt,52,0,Math.PI*2),8),Ve.shadowBlur=30,Ve.fillStyle="#ffe8e4",Ve.beginPath(),Ve.ellipse(rt,xt,9,40,0,0,Math.PI*2),Ve.fill(),Ve.font='900 210px "Arial Black", Impact, sans-serif',Ve.textBaseline="middle",Ve.textAlign="center";let Xt=1230;for(let[qt,ln,_t]of[[26,"rgba(255,30,40,0.35)",70],[12,"#ff2030",28],[4,"#ffd6d0",6]])Ve.shadowColor="#ff1a2a",Ve.shadowBlur=_t,Ve.strokeStyle=ln,Ve.lineWidth=qt,Ve.strokeText("TERRORNODE",Xt,xt+6,1500)}))),z=Math.min(u.w+2,30),H=z*360/2048,J=new qe(l(new pt(z+.8,H+.5,.35)),Lr);J.position.set(0,9.3+H/2+.2,u.z+6.25),a.add(J);let ee=l(new Ot({map:U,color:new ye("#ffffff").multiplyScalar(2.6),toneMapped:!1,transparent:!0,depthWrite:!1})),oe=new qe(l(new Pt(z,H)),ee);oe.position.set(0,J.position.y,u.z+6.45),oe.userData.noAO=!0,a.add(oe);for(let Ve=0;Ve<5;Ve++)Qe(-z/2+z*(.1+Ve*.2),J.position.y,u.z+6.8,"#ff2030",5.5,0,.5)}let fp=Wt(64,128,v=>{v.fillStyle="#05070a",v.fillRect(0,0,64,128);for(let A=6;A<128;A+=8){v.fillStyle="#0d1520",v.fillRect(4,A,56,6);for(let U=8;U<58;U+=6)v.fillStyle=Math.random()<.5?"#27e6ff":Math.random()<.3?"#ff3030":"#0a3a44",v.fillRect(U,A+2,3,2)}}),Nr=[],jc=[];for(let v=0;v<8;v++){let A=l(new wi(fp));A.colorSpace=$t,A.wrapS=A.wrapT=un;let U=l(new St({color:"#141a24",metalness:.7,roughness:.4,emissive:"#ffffff",emissiveMap:A,emissiveIntensity:2.2}));jc.push(U);let z=new qe(l(new pt(2.6,6.4,1.6)),U);z.position.set((v<4?-1:1)*(4.2+v%4*3.1),3.2,u.z+2.2),z.castShadow=t,a.add(z),Nr.push({mesh:z,hp:160,broke:!1,t:0})}let dp=v=>{v.broke=!0;let A=v.mesh.material;A.emissiveIntensity=.05,A.color.set("#0a0a0a"),v.mesh.rotation.z=(Math.random()-.5)*.25},pp=()=>{Ru(),ao.length=0;for(let v of Nr){v.broke=!1,v.hp=160;let A=v.mesh.material;A.emissiveIntensity=2.2,A.color.set("#141a24"),v.mesh.rotation.z=0}},Qi=[],mp=l(zc("#bcd4ff",.16,.7,!0,b)),gp=l(new rn(9,.6,160,24,1,!0)),oo=(v,A,U)=>{let z=new hn;z.position.set(v,A,U);let H=new qe(gp,mp);H.position.y=80,H.userData.noAO=!0,H.frustumCulled=!1,z.add(H),a.add(z),Qi.push(z)};oo(9,u.h+2,u.z-4),oo(-9,u.h+2,u.z-4),t&&(oo(-21,.5,-48),oo(21,.5,-58));for(let v=0;v<r(6,3);v++){let A=new qe(l(new Pt(64,8)),l(Jd(b,v%2?"#24607c":"#1e4a78",.2)));A.position.set(0,3.2,-8-v*14),A.userData.noAO=!0,a.add(A)}for(let[v,A,U,z,H,J]of[[-185,"#0b0e1e","rgba(20,50,80,0.55)",.16,1,1],[-240,"#0e1a30","rgba(25,60,95,0.7)",.12,1.35,2],[-310,"#142a45","rgba(40,90,120,0.8)",.09,1.8,3]]){let ee=l(Bd(J*13,A,U,z,s)),oe=new qe(l(new Pt(900*H,225*H)),l(new Ot({map:ee,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!0})));oe.position.set(0,225*H*.5-6,v),oe.renderOrder=-5,oe.userData.noAO=!0,a.add(oe)}{let v=r(3600,1300),A=new Float32Array(v*6),U=new Float32Array(v*8),z=new Float32Array(v*2);for(let ee=0;ee<v;ee++){let oe=(Math.random()-.5)*66,Ve=Math.random()*38,rt=-Math.random()*100+8,xt=Math.random();A.set([oe,Ve,rt,oe,Ve,rt],ee*6),U.set([0,0,0,xt,0,0,0,xt],ee*8),z.set([0,1],ee*2)}let H=l(new Rt);H.setAttribute("position",new Mt(A,3)),H.setAttribute("aSeed",new Mt(U,4)),H.setAttribute("aEnd",new Mt(z,1));let J=new ua(H,l(Xd(b,"#8fb0d0")));J.frustumCulled=!1,J.userData.noAO=!0,J.layers.set(1),a.add(J)}{let v=ht.length,A=new Float32Array(v*3),U=new Float32Array(v*3),z=new Float32Array(v),H=new Float32Array(v*2);ht.forEach((oe,Ve)=>{A.set([oe.p.x,oe.p.y,oe.p.z],Ve*3),U.set([oe.c.r,oe.c.g,oe.c.b],Ve*3),z[Ve]=oe.s,H.set([oe.ph,oe.mode],Ve*2)});let J=l(new Rt);J.setAttribute("position",new Mt(A,3)),J.setAttribute("aColor",new Mt(U,3)),J.setAttribute("aSize",new Mt(z,1)),J.setAttribute("aPh",new Mt(H,2));let ee=new ur(J,l(Yd(no(),b)));ee.frustumCulled=!1,ee.userData.noAO=!0,a.add(ee)}e.add(a);let lo=new D,co=new kn,Nu=new D,ho=new tt,xp=new Un,Fu=new ne,vp=(v,A,U)=>{if(b.uT.value=A,S.uniforms.uT.value=A,U instanceof Ht&&(i.getDrawingBufferSize(Y),b.uPx.value=Y.y/(2*Math.tan(Wa.degToRad(U.fov)/2))),Jc.material.opacity=Math.sin(A*3)>0?.95:.1,Qi[0].rotation.set(Math.sin(A*.33)*.55,0,Math.cos(A*.27)*.45-.2),Qi[1].rotation.set(Math.cos(A*.29)*.5,0,Math.sin(A*.35)*.45+.2),Qi[2]&&Qi[2].rotation.set(-.15+Math.sin(A*.21)*.25,0,.3+Math.cos(A*.17)*.3),Qi[3]&&Qi[3].rotation.set(-.1+Math.cos(A*.19)*.25,0,-.3+Math.sin(A*.23)*.3),U.getWorldPosition(lo),Fu.set(Wa.clamp((lo.x-Ur.position.x)/40,-1,1),-.2+Math.sin(A*.7)*.15),Pu.uniforms.uLook.value.copy(Fu),Kc.material.opacity=.28+Math.sin(A*2.3)*.08,Zc.color.setRGB(2.4+Math.sin(A*4)*.7,.2,.15+(Math.sin(A*.8)>.6?1.2:0)),re.update(A),ao.length){for(let ee of ao)Cn.setColorAt(ee.i,Us.setRGB(1.6+Math.random()*.8,.45+Math.random()*.25,.08));Cn.instanceColor&&(Cn.instanceColor.needsUpdate=!0)}for(let ee=0;ee<jc.length;ee++){let oe=jc[ee].emissiveMap;Nr[ee].broke||(oe.offset.y=Math.floor(A*6+ee)*.125)}for(let ee of Rr)ee.intensity=60*(.94+Math.random()*.06);for(let ee=0;ee<Ut.length;ee++){let oe=Ut[ee],Ve=oe.hi-oe.lo,rt=(oe.ax===0?oe.x:oe.z)+oe.dir*oe.spd*v;rt>oe.hi?rt-=Ve:rt<oe.lo&&(rt+=Ve),oe.ax===0?oe.x=rt:oe.z=rt,co.setFromEuler(xp.set(0,oe.ry,Math.sin(A*.8+ee)*.03)),ho.compose(lo.set(oe.x,oe.y+(oe.sc>1?Math.sin(A*.6+ee*2)*.4:0),oe.z),co,Nu.setScalar(oe.sc)),Nt.setMatrixAt(ee,ho)}Nt.instanceMatrix.needsUpdate=!0;let z=A%16/16,H=z<.75,J=40-z/.75*300;co.identity();for(let ee=0;ee<et;ee++)ho.compose(lo.set(_e,he+1.95,J+ee*9.6),co,Nu.setScalar(H?1:0)),pn.setMatrixAt(ee,ho);Rs.visible=H,Rs.position.set(_e,he+1.95,J-mt/2-.2),pn.instanceMatrix.needsUpdate=!0,N.intensity*=Math.pow(.002,v)},_p=0;return{group:a,windows:Cn,wins:$c,racks:Nr,towerBody:Ls,solids:[Ls],ground:L,eye:Ur,hitLight:N,lightWorld:hp,breakWindow:lp,breakRack:dp,rebuild:pp,beforeRender:(v,A,U)=>{if(!F||_p++<3)return;let z=F;(z.getReflectionCamera?z.getReflectionCamera(U):z.camera).layers.set(0),L.visible=!1,F.onBeforeRender.call(F,v,A,U),L.visible=!0,E.uReflMat.value.copy(F.material.uniforms.textureMatrix.value).multiply(k)},resize:(v,A)=>{F?.getRenderTarget().setSize(Math.max(64,Math.round(v*.5)),Math.max(64,Math.round(A*.5)))},update:vp,dispose:()=>{e.remove(a),o.forEach(v=>v.dispose());for(let v of Nr)v.mesh.geometry.dispose();Cn.dispose(),F?.dispose(),m.dispose(),e.environment=null}}}async function tp(i,e){let t=Math.min(8,i.capabilities.getMaxAnisotropy()),n=new Aa,s=(l,c)=>new Promise(h=>n.load(l,f=>{f.wrapS=f.wrapT=un,f.anisotropy=t,c&&(f.colorSpace=$t),h(f)},void 0,()=>h(null))),r=new Map;await Promise.all(["concrete_floor_02","large_floor_tiles_02"].map(async l=>r.set(l,await Promise.all([s(`${e}${l}/diff.webp`,!0),s(`${e}${l}/nor.webp`,!1),s(`${e}${l}/rough.webp`,!1)]))));let a=[],o=(l,c)=>{if(!l)return null;let h=l.clone();return h.repeat.set(c[0],c[1]),h.needsUpdate=!0,a.push(h),h};return{env:null,material:(l,c,h,f=.05)=>{let[u,d,g]=r.get(l)||[null,null,null];return new St({map:o(u,c),normalMap:o(d,c),roughnessMap:o(g,c),color:h,metalness:f,normalScale:new ne(1.6,1.6)})},dispose:()=>a.forEach(l=>l.dispose())}}function np(){let i=new Er({uniforms:{tDiffuse:{value:null},uShadow:{value:new D(1,1,1)},uHigh:{value:new D(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.5},uTime:{value:0},uAberr:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}),e=i.uniforms;return{pass:i,apply:t=>{e.uShadow.value.set(...t.shadow),e.uHigh.value.set(...t.high),e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uVignette.value=t.vignette},tick:t=>{e.uTime.value=t%10}}}var X_={shadow:[1,1,1],high:[1,1,1],sat:0,contrast:1.32,vignette:.72},Gc={x:25.5,z0:-58,z1:24};async function q_(i,e){let t=e.high!==!1,n=G=>e.onStatus&&e.onStatus(G);n("Building the city\u2026");let s=new Tc({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});s.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),s.toneMapping=vs,s.toneMappingExposure=1.05,s.shadowMap.enabled=t,s.shadowMap.type=gs;let r=s.domElement;r.style.cssText="width:100%;height:100%;display:block;outline:none;cursor:grab",r.tabIndex=0,i.appendChild(r);let a=new cs,o=new Ht(62,16/9,.05,900),l=await tp(s,e.base+"tex/"),c=ep({renderer:s,scene:a,high:t,look:l});a.add(c.group);let h=()=>{let G=i.getBoundingClientRect();return{w:Math.max(2,Math.round(G.width)),h:Math.max(2,Math.round(G.height))}},{w:f,h:u}=h();s.setSize(f,u,!1);let d=new Cc(s);if(d.addPass(new Pc(a,o)),t){let G=new Qa(a,o,f,u);G.updateGtaoMaterial({radius:1.4,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:8});let X=G.render.bind(G),q=[];G.render=(...ie)=>{a.traverse(ce=>{(ce.isSprite||ce.isPoints||ce.isLineSegments||ce.userData.noAO)&&ce.visible&&(ce.visible=!1,q.push(ce))}),X(...ie);for(let ce of q.splice(0))ce.visible=!0},d.addPass(G)}let g=new Tr(new ne(f,u),.42,.45,1.5);d.addPass(g),d.addPass(new Ic);let x=np();x.apply(X_),d.addPass(x.pass);let m={x:0,z:8,yaw:0,pitch:.04,bob:0},p=new Set,b=(G,X)=>{let q=G.key.length===1?G.key.toLowerCase():G.key;["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"].includes(q)&&(G.preventDefault(),G.stopPropagation(),X?p.add(q):p.delete(q))},S=G=>b(G,!0),M=G=>b(G,!1);r.addEventListener("keydown",S),r.addEventListener("keyup",M),r.addEventListener("blur",()=>p.clear());let w=null;r.addEventListener("pointerdown",G=>{r.focus(),w={x:G.clientX,y:G.clientY},r.setPointerCapture(G.pointerId),r.style.cursor="grabbing"}),r.addEventListener("pointermove",G=>{w&&(m.yaw-=(G.clientX-w.x)*.0035,m.pitch=Math.max(-.9,Math.min(.9,m.pitch-(G.clientY-w.y)*.0035)),w={x:G.clientX,y:G.clientY})});let R=()=>{w=null,r.style.cursor="grab"};r.addEventListener("pointerup",R),r.addEventListener("pointercancel",R);let I=new ResizeObserver(()=>{({w:f,h:u}=h()),s.setSize(f,u,!1),d.setSize(f,u),c.resize(f,u),o.aspect=f/u,o.updateProjectionMatrix()});I.observe(i);let N=new ms,y=0,E=0,L=!1,F=new D,k=new D,Y=()=>{if(L)return;y=requestAnimationFrame(Y);let G=Math.min(.05,N.getDelta());E+=G;let X=p.has("Shift")?7.5:3.2,q=(p.has("d")||p.has("ArrowRight")?1:0)-(p.has("a")||p.has("ArrowLeft")?1:0),ie=(p.has("w")||p.has("ArrowUp")?1:0)-(p.has("s")||p.has("ArrowDown")?1:0);if(F.set(-Math.sin(m.yaw),0,-Math.cos(m.yaw)),k.set(Math.cos(m.yaw),0,-Math.sin(m.yaw)),q||ie){let ce=X*G/Math.hypot(q,ie);m.x=Math.max(-Gc.x,Math.min(Gc.x,m.x+(F.x*ie+k.x*q)*ce)),m.z=Math.max(Gc.z0,Math.min(Gc.z1,m.z+(F.z*ie+k.z*q)*ce)),m.bob+=G*(X>4?13:8.5)}o.position.set(m.x,Qd+Math.sin(m.bob)*(q||ie?.035:0),m.z),o.rotation.set(0,0,0),o.rotateY(m.yaw),o.rotateX(m.pitch),c.update(G,E,o),c.beforeRender(s,a,o),x.tick(E),d.render(G)};return n(""),Y(),{canvas:r,where:()=>({x:m.x,z:m.z,yaw:m.yaw}),stop:()=>{L=!0,cancelAnimationFrame(y),I.disconnect(),r.removeEventListener("keydown",S),r.removeEventListener("keyup",M),c.dispose(),l.dispose(),d.dispose(),s.dispose(),r.remove()}}}return Ap(Y_);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
