var VXGAME=(()=>{var qu=Object.defineProperty;var N0=Object.getOwnPropertyDescriptor;var U0=Object.getOwnPropertyNames;var F0=Object.prototype.hasOwnProperty;var O0=(s,e)=>{for(var t in e)qu(s,t,{get:e[t],enumerable:!0})},B0=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of U0(e))!F0.call(s,i)&&i!==t&&qu(s,i,{get:()=>e[i],enumerable:!(n=N0(e,i))||n.enumerable});return s};var H0=s=>B0(qu({},"__esModule",{value:!0}),s);var Tb={};O0(Tb,{mount:()=>Sb});var ap=0,Uh=1,lp=2;var ir=1,cp=2,ao=3,gi=0,bn=1,sn=2,un=0,ks=1,hn=2,Fh=3,Oh=4,cc=5,Kn=100,up=101,hp=102,fp=103,dp=104,sr=200,pp=201,mp=202,gp=203,Ol=204,Bl=205,_a=206,xp=207,ya=208,vp=209,_p=210,yp=211,Mp=212,bp=213,Ep=214,uc=0,hc=1,fc=2,Vs=3,dc=4,pc=5,mc=6,gc=7,Bh=0,Sp=1,Tp=2,xi=0,Ma=1,ba=2,Ea=3,rr=4,Sa=5,Ta=6,wa=7,Eh="attached",wp="detached",Hh=300,Ts=301,or=302,xc=303,vc=304,Aa=306,nn=1e3,oi=1001,Xr=1002,Qt=1003,_c=1004;var ar=1005;var cn=1006,lo=1007;var ei=1008;var Un=1009,zh=1010,kh=1011,co=1012,yc=1013,vi=1014,ti=1015,fn=1016,Mc=1017,bc=1018,ws=1020,Vh=35902,Gh=35899,Wh=1021,Xh=1022,zn=1023,Si=1026,Oi=1027,Ec=1028,Sc=1029,lr=1030,Tc=1031;var wc=1033,Ra=33776,Ca=33777,Pa=33778,Ia=33779,Ac=35840,Rc=35841,Cc=35842,Pc=35843,Ic=36196,Dc=37492,Lc=37496,Nc=37488,Uc=37489,Fc=37490,Oc=37491,Bc=37808,Hc=37809,zc=37810,kc=37811,Vc=37812,Gc=37813,Wc=37814,Xc=37815,qc=37816,Yc=37817,Zc=37818,Kc=37819,$c=37820,Jc=37821,jc=36492,Qc=36494,eu=36495,tu=36283,nu=36284,iu=36285,su=36286,ru=2200,ou=2201,Ap=2202,Gs=2300,Ws=2301,Fl=2302,Bs=2400,Hs=2401,Ho=2402,au=2500,Rp=2501,qh=0,Da=1,uo=2,Cp=3200;var lu=0,Pp=1,ls="",Vt="srgb",An="srgb-linear",zo="linear",Ct="srgb";var Os=7680;var Sh=519,Ip=512,Dp=513,Lp=514,cu=515,Np=516,Up=517,uu=518,Fp=519,Hl=35044,hu=35048;var Yh="300 es",mi=2e3,ko=2001;function Zh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function z0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Op(){let s=qr("canvas");return s.style.display="block",s}var vd={},Yr=null;function Vo(...s){let e="THREE."+s.shift();Yr?Yr("log",e,...s):console.log(e,...s)}function et(...s){let e="THREE."+s.shift();Yr?Yr("warn",e,...s):console.warn(e,...s)}function at(...s){let e="THREE."+s.shift();Yr?Yr("error",e,...s):console.error(e,...s)}function Zr(...s){let e=s.join(" ");e in vd||(vd[e]=!0,et(...s))}function Bp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=1234567,Uo=Math.PI/180,Xs=180/Math.PI;function ai(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[s&255]+In[s>>8&255]+In[s>>16&255]+In[s>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Kh(s,e){return(s%e+e)%e}function k0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function V0(s,e,t){return s!==e?(t-s)/(e-s):0}function Fo(s,e,t){return(1-t)*s+t*e}function G0(s,e,t,n){return Fo(s,e,1-Math.exp(-t*n))}function W0(s,e=1){return e-Math.abs(Kh(s,e*2)-e)}function X0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function q0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Y0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Z0(s,e){return s+Math.random()*(e-s)}function K0(s){return s*(.5-Math.random())}function $0(s){s!==void 0&&(_d=s);let e=_d+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J0(s){return s*Uo}function j0(s){return s*Xs}function Q0(s){return(s&s-1)===0&&s!==0}function eg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ng(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*u,a*l);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ht(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var cs={DEG2RAD:Uo,RAD2DEG:Xs,generateUUID:ai,clamp:gt,euclideanModulo:Kh,mapLinear:k0,inverseLerp:V0,lerp:Fo,damp:G0,pingpong:W0,smoothstep:X0,smootherstep:q0,randInt:Y0,randFloat:Z0,randFloatSpread:K0,seededRandom:$0,degToRad:J0,radToDeg:j0,isPowerOfTwo:Q0,ceilPowerOfTwo:eg,floorPowerOfTwo:tg,setQuaternionFromProperEuler:ng,normalize:Ht,denormalize:pi},de=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),_=Math.sin(v);p=Math.sin(p*v)/_,a=Math.sin(a*v)/_,c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+x*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+x*a;let v=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=v,l*=v,u*=v,h*=v}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(gt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yu=new L,yd=new Jt,pt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],v=i[1],_=i[4],y=i[7],A=i[2],S=i[5],w=i[8];return r[0]=o*x+a*v+c*A,r[3]=o*g+a*_+c*S,r[6]=o*p+a*y+c*w,r[1]=l*x+u*v+h*A,r[4]=l*g+u*_+h*S,r[7]=l*p+u*y+h*w,r[2]=d*x+f*v+m*A,r[5]=d*g+f*_+m*S,r[8]=d*p+f*y+m*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zu.makeScale(e,t)),this}rotate(e){return this.premultiply(Zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zu=new pt,Md=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bd=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ig(){let s={enabled:!0,workingColorSpace:An,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ct&&(i.r=es(i.r),i.g=es(i.g),i.b=es(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ct&&(i.r=Wr(i.r),i.g=Wr(i.g),i.b=Wr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ls?zo:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Zr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Zr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[An]:{primaries:e,whitePoint:n,transfer:zo,toXYZ:Md,fromXYZ:bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Md,fromXYZ:bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),s}var vt=ig();function es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var wr,zl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{wr===void 0&&(wr=qr("canvas")),wr.width=e.width,wr.height=e.height;let i=wr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=wr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=es(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(es(t[n]/255)*255):t[n]=es(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sg=0,Kr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ku(i[o].image)):r.push(Ku(i[o]))}else r=Ku(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var rg=0,$u=new L,gn=class s extends Ti{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=oi,i=oi,r=cn,o=ei,a=zn,c=Un,l=s.DEFAULT_ANISOTROPY,u=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=ai(),this.name="",this.source=new Kr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nn:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nn:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Hh;gn.DEFAULT_ANISOTROPY=1;var Dt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,y=(f+1)/2,A=(p+1)/2,S=(u+d)/4,w=(h+x)/4,D=(m+g)/4;return _>y&&_>A?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=w/n):y>A?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=S/i,r=D/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=w/r,i=D/r),this.set(n,i,r,t),this}let v=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(h-x)/v,this.z=(d-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(gt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},kl=class extends Ti{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new gn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Kr(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends kl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Go=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vl=class extends gn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $n=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,hi):hi.fromBufferAttribute(r,o),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ol.copy(n.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),al.subVectors(this.max,So),Ar.subVectors(e.a,So),Rr.subVectors(e.b,So),Cr.subVectors(e.c,So),ps.subVectors(Rr,Ar),ms.subVectors(Cr,Rr),Ls.subVectors(Ar,Cr);let t=[0,-ps.z,ps.y,0,-ms.z,ms.y,0,-Ls.z,Ls.y,ps.z,0,-ps.x,ms.z,0,-ms.x,Ls.z,0,-Ls.x,-ps.y,ps.x,0,-ms.y,ms.x,0,-Ls.y,Ls.x,0];return!Ju(t,Ar,Rr,Cr,al)||(t=[1,0,0,0,1,0,0,0,1],!Ju(t,Ar,Rr,Cr,al))?!1:(ll.crossVectors(ps,ms),t=[ll.x,ll.y,ll.z],Ju(t,Ar,Rr,Cr,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yi=[new L,new L,new L,new L,new L,new L,new L,new L],hi=new L,ol=new $n,Ar=new L,Rr=new L,Cr=new L,ps=new L,ms=new L,Ls=new L,So=new L,al=new L,ll=new L,Ns=new L;function Ju(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ns.fromArray(s,r);let a=i.x*Math.abs(Ns.x)+i.y*Math.abs(Ns.y)+i.z*Math.abs(Ns.z),c=e.dot(Ns),l=t.dot(Ns),u=n.dot(Ns);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var og=new $n,To=new L,ju=new L,Wn=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):og.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);let t=To.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(To,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(ju)),this.expandByPoint(To.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Zi=new L,Qu=new L,cl=new L,gs=new L,eh=new L,ul=new L,th=new L,ys=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,t),Zi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qu.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),gs.copy(this.origin).sub(Qu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(cl),a=gs.dot(this.direction),c=-gs.dot(cl),l=gs.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Qu).addScaledVector(cl,d),f}intersectSphere(e,t){Zi.subVectors(e.center,this.origin);let n=Zi.dot(this.direction),i=Zi.dot(Zi)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,t,n,i,r){eh.subVectors(t,e),ul.subVectors(n,e),th.crossVectors(eh,ul);let o=this.direction.dot(th),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gs.subVectors(this.origin,e);let c=a*this.direction.dot(ul.crossVectors(gs,ul));if(c<0)return null;let l=a*this.direction.dot(eh.cross(gs));if(l<0||c+l>o)return null;let u=-a*gs.dot(th);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qe=class s{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,x,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ag,e,lg)}lookAt(e,t,n){let i=this.elements;return Yn.subVectors(e,t),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),xs.crossVectors(n,Yn),xs.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),xs.crossVectors(n,Yn)),xs.normalize(),hl.crossVectors(Yn,xs),i[0]=xs.x,i[4]=hl.x,i[8]=Yn.x,i[1]=xs.y,i[5]=hl.y,i[9]=Yn.y,i[2]=xs.z,i[6]=hl.z,i[10]=Yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],v=n[3],_=n[7],y=n[11],A=n[15],S=i[0],w=i[4],D=i[8],E=i[12],T=i[1],U=i[5],B=i[9],z=i[13],J=i[2],te=i[6],X=i[10],K=i[14],ie=i[3],_e=i[7],Se=i[11],Te=i[15];return r[0]=o*S+a*T+c*J+l*ie,r[4]=o*w+a*U+c*te+l*_e,r[8]=o*D+a*B+c*X+l*Se,r[12]=o*E+a*z+c*K+l*Te,r[1]=u*S+h*T+d*J+f*ie,r[5]=u*w+h*U+d*te+f*_e,r[9]=u*D+h*B+d*X+f*Se,r[13]=u*E+h*z+d*K+f*Te,r[2]=m*S+x*T+g*J+p*ie,r[6]=m*w+x*U+g*te+p*_e,r[10]=m*D+x*B+g*X+p*Se,r[14]=m*E+x*z+g*K+p*Te,r[3]=v*S+_*T+y*J+A*ie,r[7]=v*w+_*U+y*te+A*_e,r[11]=v*D+_*B+y*X+A*Se,r[15]=v*E+_*z+y*K+A*Te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],v=c*f-l*d,_=a*f-l*h,y=a*d-c*h,A=o*f-l*u,S=o*d-c*u,w=o*h-a*u;return t*(x*v-g*_+p*y)-n*(m*v-g*A+p*S)+i*(m*_-x*A+p*w)-r*(m*y-x*S+g*w)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],v=h*g*l-x*d*l+x*c*f-a*g*f-h*c*p+a*d*p,_=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,y=u*x*l-m*h*l+m*a*f-o*x*f-u*a*p+o*h*p,A=m*h*c-u*x*c-m*a*d+o*x*d+u*a*g-o*h*g,S=t*v+n*_+i*y+r*A;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=v*w,e[1]=(x*d*r-h*g*r-x*i*f+n*g*f+h*i*p-n*d*p)*w,e[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*w,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*w,e[4]=_*w,e[5]=(u*g*r-m*d*r+m*i*f-t*g*f-u*i*p+t*d*p)*w,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*w,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*w,e[8]=y*w,e[9]=(m*h*r-u*x*r-m*n*f+t*x*f+u*n*p-t*h*p)*w,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*p+t*a*p)*w,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*w,e[12]=A*w,e[13]=(u*x*i-m*h*i+m*n*d-t*x*d-u*n*g+t*h*g)*w,e[14]=(m*a*i-o*x*i-m*n*c+t*x*c+o*n*g-t*a*g)*w,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,v=c*l,_=c*u,y=c*h,A=n.x,S=n.y,w=n.z;return i[0]=(1-(x+p))*A,i[1]=(f+y)*A,i[2]=(m-_)*A,i[3]=0,i[4]=(f-y)*S,i[5]=(1-(d+p))*S,i[6]=(g+v)*S,i[7]=0,i[8]=(m+_)*w,i[9]=(g-v)*w,i[10]=(1-(d+x))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Pr.set(i[0],i[1],i[2]).length(),o=Pr.set(i[4],i[5],i[6]).length(),a=Pr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),fi.copy(this);let l=1/r,u=1/o,h=1/a;return fi.elements[0]*=l,fi.elements[1]*=l,fi.elements[2]*=l,fi.elements[4]*=u,fi.elements[5]*=u,fi.elements[6]*=u,fi.elements[8]*=h,fi.elements[9]*=h,fi.elements[10]*=h,t.setFromRotationMatrix(fi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=mi,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===mi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ko)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=mi,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===mi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ko)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pr=new L,fi=new Qe,ag=new L(0,0,0),lg=new L(1,1,1),xs=new L,hl=new L,Yn=new L,Ed=new Qe,Sd=new Jt,Jn=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ed.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ed,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},cg=0,Td=new L,Ir=new Jt,Ki=new Qe,fl=new L,wo=new L,ug=new L,hg=new Jt,wd=new L(1,0,0),Ad=new L(0,1,0),Rd=new L(0,0,1),Cd={type:"added"},fg={type:"removed"},Dr={type:"childadded",child:null},nh={type:"childremoved",child:null},Gt=class s extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cg++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new L,t=new Jn,n=new Jt,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pt}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(wd,e)}rotateY(e){return this.rotateOnAxis(Ad,e)}rotateZ(e){return this.rotateOnAxis(Rd,e)}translateOnAxis(e,t){return Td.copy(e).applyQuaternion(this.quaternion),this.position.add(Td.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wd,e)}translateY(e){return this.translateOnAxis(Ad,e)}translateZ(e){return this.translateOnAxis(Rd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fl.copy(e):fl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(wo,fl,this.up):Ki.lookAt(fl,wo,this.up),this.quaternion.setFromRotationMatrix(Ki),i&&(Ki.extractRotation(i.matrixWorld),Ir.setFromRotationMatrix(Ki),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cd),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fg),nh.child=e,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cd),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,ug),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,hg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};Gt.DEFAULT_UP=new L(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var di=new L,$i=new L,ih=new L,Ji=new L,Lr=new L,Nr=new L,Pd=new L,sh=new L,rh=new L,oh=new L,ah=new Dt,lh=new Dt,ch=new Dt,Qi=class s{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),di.subVectors(e,t),i.cross(di);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){di.subVectors(i,t),$i.subVectors(n,t),ih.subVectors(e,t);let o=di.dot(di),a=di.dot($i),c=di.dot(ih),l=$i.dot($i),u=$i.dot(ih),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ji)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ji.x),c.addScaledVector(o,Ji.y),c.addScaledVector(a,Ji.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ah.setScalar(0),lh.setScalar(0),ch.setScalar(0),ah.fromBufferAttribute(e,t),lh.fromBufferAttribute(e,n),ch.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ah,r.x),o.addScaledVector(lh,r.y),o.addScaledVector(ch,r.z),o}static isFrontFacing(e,t,n,i){return di.subVectors(n,t),$i.subVectors(e,t),di.cross($i).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),di.cross($i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Lr.subVectors(i,n),Nr.subVectors(r,n),sh.subVectors(e,n);let c=Lr.dot(sh),l=Nr.dot(sh);if(c<=0&&l<=0)return t.copy(n);rh.subVectors(e,i);let u=Lr.dot(rh),h=Nr.dot(rh);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Lr,o);oh.subVectors(e,r);let f=Lr.dot(oh),m=Nr.dot(oh);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Nr,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Pd.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(Pd,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector(Lr,o).addScaledVector(Nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},dl={h:0,s:0,l:0};function uh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=vt.workingColorSpace){if(e=Kh(e,1),t=gt(t,0,1),n=gt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=uh(o,r,e+1/3),this.g=uh(o,r,e),this.b=uh(o,r,e-1/3)}return vt.colorSpaceToWorking(this,i),this}setStyle(e,t=Vt){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){let n=Hp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return vt.workingToColorSpace(Dn.copy(this),e),Math.round(gt(Dn.r*255,0,255))*65536+Math.round(gt(Dn.g*255,0,255))*256+Math.round(gt(Dn.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(Dn.copy(this),t);let n=Dn.r,i=Dn.g,r=Dn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=Vt){vt.workingToColorSpace(Dn.copy(this),e);let t=Dn.r,n=Dn.g,i=Dn.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vs),this.setHSL(vs.h+e,vs.s+t,vs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vs),e.getHSL(dl);let n=Fo(vs.h,dl.h,t),i=Fo(vs.s,dl.s,t),r=Fo(vs.l,dl.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dn=new Ie;Ie.NAMES=Hp;var dg=0,Ln=class extends Ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=ai(),this.name="",this.type="Material",this.blending=ks,this.side=gi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(n.blending=this.blending),this.side!==gi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Bl&&(n.blendDst=this.blendDst),this.blendEquation!==Kn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Et=class extends Ln{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var dn=new L,pl=new de,pg=0,Tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Hl,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hl&&(e.usage=this.usage),e}};var wi=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Wo=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},mg=0,si=new Qe,hh=new Gt,Ur=new L,Zn=new $n,Ao=new $n,Mn=new L,wt=class s extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?Wo:wi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new pt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,n){return si.makeTranslation(e,t,n),this.applyMatrix4(si),this}scale(e,t,n){return si.makeScale(e,t,n),this.applyMatrix4(si),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ur).negate(),this.translate(Ur.x,Ur.y,Ur.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ct(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Zn.setFromBufferAttribute(r),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ao.setFromBufferAttribute(a),this.morphTargetsRelative?(Mn.addVectors(Zn.min,Ao.min),Zn.expandByPoint(Mn),Mn.addVectors(Zn.max,Ao.max),Zn.expandByPoint(Mn)):(Zn.expandByPoint(Ao.min),Zn.expandByPoint(Ao.max))}Zn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Mn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Mn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Mn.fromBufferAttribute(a,l),c&&(Ur.fromBufferAttribute(e,l),Mn.add(Ur)),i=Math.max(i,n.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new L,c[D]=new L;let l=new L,u=new L,h=new L,d=new de,f=new de,m=new de,x=new L,g=new L;function p(D,E,T){l.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,T),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,T),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(U),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(U),a[D].add(x),a[E].add(x),a[T].add(x),c[D].add(g),c[E].add(g),c[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,E=v.length;D<E;++D){let T=v[D],U=T.start,B=T.count;for(let z=U,J=U+B;z<J;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new L,y=new L,A=new L,S=new L;function w(D){A.fromBufferAttribute(i,D),S.copy(A);let E=a[D];_.copy(E),_.sub(A.multiplyScalar(A.dot(E))).normalize(),y.crossVectors(S,E);let U=y.dot(c[D])<0?-1:1;o.setXYZW(D,_.x,_.y,_.z,U)}for(let D=0,E=v.length;D<E;++D){let T=v[D],U=T.start,B=T.count;for(let z=U,J=U+B;z<J;z+=3)w(e.getX(z+0)),w(e.getX(z+1)),w(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new Tt(d,u,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Id=new Qe,Us=new ys,ml=new Wn,Dd=new L,gl=new L,xl=new L,vl=new L,fh=new L,_l=new L,Ld=new L,yl=new L,Ge=class extends Gt{constructor(e=new wt,t=new Et){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){_l.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(fh.fromBufferAttribute(h,e),o?_l.addScaledVector(fh,u):_l.addScaledVector(fh.sub(t),u))}t.add(_l)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(r),Us.copy(e.ray).recast(e.near),!(ml.containsPoint(Us.origin)===!1&&(Us.intersectSphere(ml,Dd)===null||Us.origin.distanceToSquared(Dd)>(e.far-e.near)**2))&&(Id.copy(r).invert(),Us.copy(e.ray).applyMatrix4(Id),!(n.boundingBox!==null&&Us.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=_;y<A;y+=3){let S=a.getX(y),w=a.getX(y+1),D=a.getX(y+2);i=Ml(this,p,e,n,l,u,h,S,w,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);i=Ml(this,o,e,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],v=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,A=_;y<A;y+=3){let S=y,w=y+1,D=y+2;i=Ml(this,p,e,n,l,u,h,S,w,D),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let v=g,_=g+1,y=g+2;i=Ml(this,o,e,n,l,u,h,v,_,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function gg(s,e,t,n,i,r,o,a){let c;if(e.side===bn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===gi,a),c===null)return null;yl.copy(a),yl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(yl);return l<t.near||l>t.far?null:{distance:l,point:yl.clone(),object:s}}function Ml(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,gl),s.getVertexPosition(c,xl),s.getVertexPosition(l,vl);let u=gg(s,e,t,n,gl,xl,vl,Ld);if(u){let h=new L;Qi.getBarycoord(Ld,gl,xl,vl,h),i&&(u.uv=Qi.getInterpolatedAttribute(i,a,c,l,h,new de)),r&&(u.uv1=Qi.getInterpolatedAttribute(r,a,c,l,h,new de)),o&&(u.normal=Qi.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};Qi.getNormal(gl,xl,vl,d.normal),u.face=d,u.barycoord=h}return u}var Mt=class s extends wt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(u,3)),this.setAttribute("uv",new ct(h,2));function m(x,g,p,v,_,y,A,S,w,D,E){let T=y/w,U=A/D,B=y/2,z=A/2,J=S/2,te=w+1,X=D+1,K=0,ie=0,_e=new L;for(let Se=0;Se<X;Se++){let Te=Se*U-z;for(let Ue=0;Ue<te;Ue++){let ze=Ue*T-B;_e[x]=ze*v,_e[g]=Te*_,_e[p]=J,l.push(_e.x,_e.y,_e.z),_e[x]=0,_e[g]=0,_e[p]=S>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(Ue/w),h.push(1-Se/D),K+=1}}for(let Se=0;Se<D;Se++)for(let Te=0;Te<w;Te++){let Ue=d+Te+te*Se,ze=d+Te+te*(Se+1),Ke=d+(Te+1)+te*(Se+1),rt=d+(Te+1)+te*Se;c.push(Ue,ze,rt),c.push(ze,Ke,rt),ie+=6}a.addGroup(f,ie,E),f+=ie,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function cr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Fn(s){let e={};for(let t=0;t<s.length;t++){let n=cr(s[t]);for(let i in n)e[i]=n[i]}return e}function xg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $h(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}var Cn={clone:cr,merge:Fn},vg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_g=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ht=class extends Ln{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vg,this.fragmentShader=_g,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Xo=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_s=new L,Nd=new de,Ud=new de,jt=class extends Xo{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xs*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_s.x,_s.y).multiplyScalar(-e/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_s.x,_s.y).multiplyScalar(-e/_s.z)}getViewSize(e,t){return this.getViewBounds(e,Nd,Ud),t.subVectors(Ud,Nd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Or=1,Gl=class extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new jt(Fr,Or,e,t);i.layers=this.layers,this.add(i);let r=new jt(Fr,Or,e,t);r.layers=this.layers,this.add(r);let o=new jt(Fr,Or,e,t);o.layers=this.layers,this.add(o);let a=new jt(Fr,Or,e,t);a.layers=this.layers,this.add(a);let c=new jt(Fr,Or,e,t);c.layers=this.layers,this.add(c);let l=new jt(Fr,Or,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},qo=class extends gn{constructor(e=[],t=Ts,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yo=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qo(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mt(5,5,5),r=new ht({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bn,blending:un});r.uniforms.tEquirect.value=t;let o=new Ge(i,r),a=t.minFilter;return t.minFilter===ei&&(t.minFilter=cn),new Gl(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ut=class extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},Jr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Zo=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ie(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var qs=class extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ys=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Hl,this.updateRanges=[],this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Hn=new L,Ms=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix4(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.applyNormalMatrix(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Hn.fromBufferAttribute(this,t),Hn.transformDirection(e),this.setXYZ(t,Hn.x,Hn.y,Hn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=pi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=class extends Ln{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Br,Ro=new L,Hr=new L,zr=new L,kr=new de,Co=new de,zp=new Qe,bl=new L,Po=new L,El=new L,Fd=new de,dh=new de,Od=new de,Ko=class extends Gt{constructor(e=new jr){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new wt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ys(t,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new Ms(n,3,0,!1)),Br.setAttribute("uv",new Ms(n,2,3,!1))}this.geometry=Br,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hr.setFromMatrixScale(this.matrixWorld),zp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hr.multiplyScalar(-zr.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Sl(bl.set(-.5,-.5,0),zr,o,Hr,i,r),Sl(Po.set(.5,-.5,0),zr,o,Hr,i,r),Sl(El.set(.5,.5,0),zr,o,Hr,i,r),Fd.set(0,0),dh.set(1,0),Od.set(1,1);let a=e.ray.intersectTriangle(bl,Po,El,!1,Ro);if(a===null&&(Sl(Po.set(-.5,.5,0),zr,o,Hr,i,r),dh.set(0,1),a=e.ray.intersectTriangle(bl,El,Po,!1,Ro),a===null))return;let c=e.ray.origin.distanceTo(Ro);c<e.near||c>e.far||t.push({distance:c,point:Ro.clone(),uv:Qi.getInterpolation(Ro,bl,Po,El,Fd,dh,Od,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Sl(s,e,t,n,i,r){kr.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Co.x=r*kr.x-i*kr.y,Co.y=i*kr.x+r*kr.y):Co.copy(kr),s.copy(e),s.x+=Co.x,s.y+=Co.y,s.applyMatrix4(zp)}var Bd=new L,Hd=new Dt,zd=new Dt,Mg=new L,kd=new Qe,Tl=new L,ph=new Wn,Vd=new Qe,mh=new ys,bs=class extends Ge{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Eh,this.bindMatrix=new Qe,this.bindMatrixInverse=new Qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $n),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingBox.expandByPoint(Tl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Tl),this.boundingSphere.expandByPoint(Tl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ph.copy(this.boundingSphere),ph.applyMatrix4(i),e.ray.intersectsSphere(ph)!==!1&&(Vd.copy(i).invert(),mh.copy(e.ray).applyMatrix4(Vd),!(this.boundingBox!==null&&mh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,mh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Eh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===wp?this.bindMatrixInverse.copy(this.bindMatrix).invert():et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;Hd.fromBufferAttribute(i.attributes.skinIndex,e),zd.fromBufferAttribute(i.attributes.skinWeight,e),Bd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=zd.getComponent(r);if(o!==0){let a=Hd.getComponent(r);kd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Mg.copy(Bd).applyMatrix4(kd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},ts=class extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ai=class extends gn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Qt,u=Qt,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gd=new Qe,bg=new Qe,Zs=class s{constructor(e=[],t=[]){this.uuid=ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Qe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:bg;Gd.multiplyMatrices(a,t[r]),Gd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ai(t,e,e,zn,ti);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(et("Skeleton: No bone found with UUID:",r),o=new ts),this.bones.push(o),this.boneInverses.push(new Qe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},li=class extends Tt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Qe,Wd=new Qe,wl=[],Xd=new $n,Eg=new Qe,Io=new Ge,Do=new Wn,Rn=class extends Ge{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new li(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Eg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Xd.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Xd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Do.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Do)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Do.copy(this.boundingSphere),Do.applyMatrix4(n),e.ray.intersectsSphere(Do)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Vr),Wd.multiplyMatrices(n,Vr),Io.matrixWorld=Wd,Io.raycast(e,wl);for(let o=0,a=wl.length;o<a;o++){let c=wl[o];c.instanceId=r,c.object=this,t.push(c)}wl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new li(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ai(new Float32Array(i*this.count),i,this.count,Ec,ti));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gh=new L,Sg=new L,Tg=new pt,ri=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=gh.subVectors(n,t).cross(Sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(gh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tg.getNormalMatrix(e),i=this.coplanarPoint(gh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Wn,wg=new de(.5,.5),Al=new L,Qr=class{constructor(e=new ri,t=new ri,n=new ri,i=new ri,r=new ri,o=new ri){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],v=r[12],_=r[13],y=r[14],A=r[15];if(i[0].setComponents(l-o,f-u,p-m,A-v).normalize(),i[1].setComponents(l+o,f+u,p+m,A+v).normalize(),i[2].setComponents(l+a,f+h,p+x,A+_).normalize(),i[3].setComponents(l-a,f-h,p-x,A-_).normalize(),n)i[4].setComponents(c,d,g,y).normalize(),i[5].setComponents(l-c,f-d,p-g,A-y).normalize();else if(i[4].setComponents(l-c,f-d,p-g,A-y).normalize(),t===mi)i[5].setComponents(l+c,f+d,p+g,A+y).normalize();else if(t===ko)i[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);let t=wg.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Al.x=i.normal.x>0?e.max.x:e.min.x,Al.y=i.normal.y>0?e.max.y:e.min.y,Al.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var eo=class extends Ln{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Wl=new L,Xl=new L,qd=new Qe,Lo=new ys,Rl=new Wn,xh=new L,Yd=new L,Ks=class extends Gt{constructor(e=new wt,t=new eo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wl.fromBufferAttribute(t,i-1),Xl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new ct(n,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(i),Rl.radius+=r,e.ray.intersectsSphere(Rl)===!1)return;qd.copy(i).invert(),Lo.copy(e.ray).applyMatrix4(qd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=u.getX(x),v=u.getX(x+1),_=Cl(this,e,Lo,c,p,v,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=Cl(this,e,Lo,c,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=Cl(this,e,Lo,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Cl(this,e,Lo,c,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Cl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(Wl.fromBufferAttribute(a,i),Xl.fromBufferAttribute(a,r),t.distanceSqToSegment(Wl,Xl,xh,Yd)>n)return;xh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(xh);if(!(l<e.near||l>e.far))return{distance:l,point:Yd.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Zd=new L,Kd=new L,$s=class extends Ks{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Zd.fromBufferAttribute(t,i),Kd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Zd.distanceTo(Kd);e.setAttribute("lineDistance",new ct(n,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},$o=class extends Ks{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},to=class extends Ln{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$d=new Qe,Th=new ys,Pl=new Wn,Il=new L,Es=class extends Gt{constructor(e=new wt,t=new to){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pl.copy(n.boundingSphere),Pl.applyMatrix4(i),Pl.radius+=r,e.ray.intersectsSphere(Pl)===!1)return;$d.copy(i).invert(),Th.copy(e.ray).applyMatrix4($d);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);Il.fromBufferAttribute(h,g),Jd(Il,g,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)Il.fromBufferAttribute(h,m),Jd(Il,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Jd(s,e,t,n,i,r,o){let a=Th.distanceSqToPoint(s);if(a<t){let c=new L;Th.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var jn=class extends gn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ri=class extends gn{constructor(e,t,n=vi,i,r,o,a=Qt,c=Qt,l,u=Si,h=1){if(u!==Si&&u!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ql=class extends Ri{constructor(e,t=vi,n=Ts,i,r,o=Qt,a=Qt,c,l=Si){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jo=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ss=class s extends wt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=n*2+r,x=i+1,g=new L,p=new L;for(let v=0;v<=m;v++){let _=0,y=0,A=0,S=0;if(v<=n){let E=v/n,T=E*Math.PI/2;y=-u-e*Math.cos(T),A=e*Math.sin(T),S=-e*Math.cos(T),_=E*h}else if(v<=n+r){let E=(v-n)/r;y=-u+E*t,A=e,S=0,_=h+E*d}else{let E=(v-n-r)/n,T=E*Math.PI/2;y=u+e*Math.sin(T),A=e*Math.cos(T),S=e*Math.sin(T),_=h+d+E*h}let w=Math.max(0,Math.min(1,_/f)),D=0;v===0?D=.5/i:v===m&&(D=-.5/i);for(let E=0;E<=i;E++){let T=E/i,U=T*Math.PI*2,B=Math.sin(U),z=Math.cos(U);p.x=-A*z,p.y=y,p.z=A*B,a.push(p.x,p.y,p.z),g.set(-A*z,S,A*B),g.normalize(),c.push(g.x,g.y,g.z),l.push(T+D,w)}if(v>0){let E=(v-1)*x;for(let T=0;T<i;T++){let U=E+T,B=E+T+1,z=v*x+T,J=v*x+T+1;o.push(U,B,z),o.push(B,J,z)}}}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Wt=class s extends wt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;v(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function v(){let y=new L,A=new L,S=0,w=(t-e)/n;for(let D=0;D<=r;D++){let E=[],T=D/r,U=T*(t-e)+e;for(let B=0;B<=i;B++){let z=B/i,J=z*c+a,te=Math.sin(J),X=Math.cos(J);A.x=U*te,A.y=-T*n+g,A.z=U*X,h.push(A.x,A.y,A.z),y.set(te,w,X).normalize(),d.push(y.x,y.y,y.z),f.push(z,1-T),E.push(m++)}x.push(E)}for(let D=0;D<i;D++)for(let E=0;E<r;E++){let T=x[E][D],U=x[E+1][D],B=x[E+1][D+1],z=x[E][D+1];(e>0||E!==0)&&(u.push(T,U,z),S+=3),(t>0||E!==r-1)&&(u.push(U,B,z),S+=3)}l.addGroup(p,S,0),p+=S}function _(y){let A=m,S=new de,w=new L,D=0,E=y===!0?e:t,T=y===!0?1:-1;for(let B=1;B<=i;B++)h.push(0,g*T,0),d.push(0,T,0),f.push(.5,.5),m++;let U=m;for(let B=0;B<=i;B++){let J=B/i*c+a,te=Math.cos(J),X=Math.sin(J);w.x=E*X,w.y=g*T,w.z=E*te,h.push(w.x,w.y,w.z),d.push(0,T,0),S.x=te*.5+.5,S.y=X*.5*T+.5,f.push(S.x,S.y),m++}for(let B=0;B<i;B++){let z=A+B,J=U+B;y===!0?u.push(J,J+1,z):u.push(J+1,J,z),D+=3}l.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ns=class s extends Wt{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yl=class s extends wt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let _=new L,y=new L,A=new L;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],y),f(t[S+2],A),c(_,y,A,v)}function c(v,_,y,A){let S=A+1,w=[];for(let D=0;D<=S;D++){w[D]=[];let E=v.clone().lerp(y,D/S),T=_.clone().lerp(y,D/S),U=S-D;for(let B=0;B<=U;B++)B===0&&D===S?w[D][B]=E:w[D][B]=E.clone().lerp(T,B/U)}for(let D=0;D<S;D++)for(let E=0;E<2*(S-D)-1;E++){let T=Math.floor(E/2);E%2===0?(d(w[D][T+1]),d(w[D+1][T]),d(w[D][T])):(d(w[D][T+1]),d(w[D+1][T+1]),d(w[D+1][T]))}}function l(v){let _=new L;for(let y=0;y<r.length;y+=3)_.x=r[y+0],_.y=r[y+1],_.z=r[y+2],_.normalize().multiplyScalar(v),r[y+0]=_.x,r[y+1]=_.y,r[y+2]=_.z}function u(){let v=new L;for(let _=0;_<r.length;_+=3){v.x=r[_+0],v.y=r[_+1],v.z=r[_+2];let y=g(v)/2/Math.PI+.5,A=p(v)/Math.PI+.5;o.push(y,1-A)}m(),h()}function h(){for(let v=0;v<o.length;v+=6){let _=o[v+0],y=o[v+2],A=o[v+4],S=Math.max(_,y,A),w=Math.min(_,y,A);S>.9&&w<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),A<.2&&(o[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,_){let y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function m(){let v=new L,_=new L,y=new L,A=new L,S=new de,w=new de,D=new de;for(let E=0,T=0;E<r.length;E+=9,T+=6){v.set(r[E+0],r[E+1],r[E+2]),_.set(r[E+3],r[E+4],r[E+5]),y.set(r[E+6],r[E+7],r[E+8]),S.set(o[T+0],o[T+1]),w.set(o[T+2],o[T+3]),D.set(o[T+4],o[T+5]),A.copy(v).add(_).add(y).divideScalar(3);let U=g(A);x(S,T+0,v,U),x(w,T+2,_,U),x(D,T+4,y,U)}}function x(v,_,y,A){A<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=A/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Qn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new de:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],r=[],o=[],a=new L,c=new Qe;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(gt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(gt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},no=class extends Qn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new de){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Zl=class extends no{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Jh(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Dl=new L,vh=new Jh,_h=new Jh,yh=new Jh,io=class extends Qn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Dl.subVectors(i[0],i[1]).add(i[0]),l=Dl);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Dl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),vh.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,x,g),_h.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,x,g),yh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),_h.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),yh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(vh.calc(c),_h.calc(c),yh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function jd(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Ag(s,e){let t=1-s;return t*t*e}function Rg(s,e){return 2*(1-s)*s*e}function Cg(s,e){return s*s*e}function Oo(s,e,t,n){return Ag(s,e)+Rg(s,t)+Cg(s,n)}function Pg(s,e){let t=1-s;return t*t*t*e}function Ig(s,e){let t=1-s;return 3*t*t*s*e}function Dg(s,e){return 3*(1-s)*s*s*e}function Lg(s,e){return s*s*s*e}function Bo(s,e,t,n,i){return Pg(s,e)+Ig(s,t)+Dg(s,n)+Lg(s,i)}var jo=class extends Qn{constructor(e=new de,t=new de,n=new de,i=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,i.x,r.x,o.x,a.x),Bo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Kl=class extends Qn{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Bo(e,i.x,r.x,o.x,a.x),Bo(e,i.y,r.y,o.y,a.y),Bo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Qo=class extends Qn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$l=class extends Qn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ea=class extends Qn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Oo(e,i.x,r.x,o.x),Oo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ta=class extends Qn{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Oo(e,i.x,r.x,o.x),Oo(e,i.y,r.y,o.y),Oo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},na=class extends Qn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(jd(a,c.x,l.x,u.x,h.x),jd(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new de().fromArray(i))}return this}},Jl=Object.freeze({__proto__:null,ArcCurve:Zl,CatmullRomCurve3:io,CubicBezierCurve:jo,CubicBezierCurve3:Kl,EllipseCurve:no,LineCurve:Qo,LineCurve3:$l,QuadraticBezierCurve:ea,QuadraticBezierCurve3:ta,SplineCurve:na}),jl=class extends Qn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Jl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new Jl[i.type]().fromJSON(i))}return this}},ia=class extends jl{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Qo(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ea(this.currentPoint.clone(),new de(e,t),new de(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new jo(this.currentPoint.clone(),new de(e,t),new de(n,i),new de(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new na(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new no(e,t,n,i,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ci=class extends ia{constructor(e){super(e),this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new ia().fromJSON(i))}return this}};function Ng(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=kp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Hg(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let u=a,h=c;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return sa(r,o,t,a,c,l,0),o}function kp(s,e,t,n,i){let r;if(i===$g(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=Qd(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Qd(o/n|0,s[o],s[o+1],r);return r&&so(r,r.next)&&(oa(r),r=r.next),r}function Js(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(so(t,t.next)||tn(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sa(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Wg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Fg(s,n,i,r):Ug(s)){e.push(c.i,s.i,l.i),oa(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=Og(Js(s),e),sa(s,e,t,n,i,r,2)):o===2&&Bg(s,e,t,n,i,r):sa(Js(s),e,t,n,i,r,1);break}}}function Ug(s){let e=s.prev,t=s,n=s.next;if(tn(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,r,o),h=Math.min(a,c,l),d=Math.max(i,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&No(i,a,r,c,o,l,m.x,m.y)&&tn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(tn(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(u,h,d),x=Math.max(a,c,l),g=Math.max(u,h,d),p=wh(f,m,e,t,n),v=wh(x,g,e,t,n),_=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&No(a,u,c,h,l,d,_.x,_.y)&&tn(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&No(a,u,c,h,l,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&No(a,u,c,h,l,d,_.x,_.y)&&tn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=x&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&No(a,u,c,h,l,d,y.x,y.y)&&tn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Og(s,e){let t=s;do{let n=t.prev,i=t.next.next;!so(n,i)&&Gp(n,t,t.next,i)&&ra(n,i)&&ra(i,n)&&(e.push(n.i,t.i,i.i),oa(t),oa(t.next),t=s=i),t=t.next}while(t!==s);return Js(t)}function Bg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let c=Wp(o,a);o=Js(o,o.next),c=Js(c,c.next),sa(o,e,t,n,i,r,0),sa(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Hg(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=kp(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(qg(l))}i.sort(zg);for(let r=0;r<i.length;r++)t=kg(i[r],t);return t}function zg(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function kg(s,e){let t=Vg(s,e);if(!t)return e;let n=Wp(t,s);return Js(n,n.next),Js(t,t.next)}function Vg(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(so(s,t))return t;do{if(so(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Vp(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);ra(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&Gg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function Gg(s,e){return tn(s.prev,s,e.prev)<0&&tn(e.next,s,s.next)<0}function Wg(s,e,t,n){let i=s;do i.z===0&&(i.z=wh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Xg(i)}function Xg(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function wh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function qg(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Vp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function No(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&Vp(s,e,t,n,i,r,o,a)}function Yg(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Zg(s,e)&&(ra(s,e)&&ra(e,s)&&Kg(s,e)&&(tn(s.prev,s,e.prev)||tn(s,e.prev,e))||so(s,e)&&tn(s.prev,s,s.next)>0&&tn(e.prev,e,e.next)>0)}function tn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function so(s,e){return s.x===e.x&&s.y===e.y}function Gp(s,e,t,n){let i=Nl(tn(s,e,t)),r=Nl(tn(s,e,n)),o=Nl(tn(t,n,s)),a=Nl(tn(t,n,e));return!!(i!==r&&o!==a||i===0&&Ll(s,t,e)||r===0&&Ll(s,n,e)||o===0&&Ll(t,s,n)||a===0&&Ll(t,e,n))}function Ll(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Nl(s){return s>0?1:s<0?-1:0}function Zg(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Gp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ra(s,e){return tn(s.prev,s,s.next)<0?tn(s,e,s.next)>=0&&tn(s,s.prev,e)>=0:tn(s,e,s.prev)<0||tn(s,s.next,e)<0}function Kg(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function Wp(s,e){let t=Ah(s.i,s.x,s.y),n=Ah(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Qd(s,e,t,n){let i=Ah(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function oa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ah(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $g(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Rh=class{static triangulate(e,t,n=2){return Ng(e,t,n)}},zs=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];ep(e),tp(n,e);let o=e.length;t.forEach(ep);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,tp(n,t[c]);let a=Rh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ep(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function tp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var is=class s extends wt{constructor(e=new Ci([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(i,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Jg,_,y=!1,A,S,w,D;if(p){_=p.getSpacedPoints(u),y=!0,d=!1;let re=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,re),S=new L,w=new L,D=new L}d||(g=0,f=0,m=0,x=0);let E=a.extractPoints(l),T=E.shape,U=E.holes;if(!zs.isClockWise(T)){T=T.reverse();for(let re=0,Ee=U.length;re<Ee;re++){let ve=U[re];zs.isClockWise(ve)&&(U[re]=ve.reverse())}}function z(re){let ve=10000000000000001e-36,De=re[0];for(let R=1;R<=re.length;R++){let pe=R%re.length,ae=re[pe],ne=ae.x-De.x,se=ae.y-De.y,C=ne*ne+se*se,b=Math.max(Math.abs(ae.x),Math.abs(ae.y),Math.abs(De.x),Math.abs(De.y)),H=ve*b*b;if(C<=H){re.splice(pe,1),R--;continue}De=ae}}z(T),U.forEach(z);let J=U.length,te=T;for(let re=0;re<J;re++){let Ee=U[re];T=T.concat(Ee)}function X(re,Ee,ve){return Ee||at("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(Ee,ve)}let K=T.length;function ie(re,Ee,ve){let De,R,pe,ae=re.x-Ee.x,ne=re.y-Ee.y,se=ve.x-re.x,C=ve.y-re.y,b=ae*ae+ne*ne,H=ae*C-ne*se;if(Math.abs(H)>Number.EPSILON){let Q=Math.sqrt(b),me=Math.sqrt(se*se+C*C),$=Ee.x-ne/Q,k=Ee.y+ae/Q,Z=ve.x-C/me,ue=ve.y+se/me,ke=((Z-$)*C-(ue-k)*se)/(ae*C-ne*se);De=$+ae*ke-re.x,R=k+ne*ke-re.y;let xe=De*De+R*R;if(xe<=2)return new de(De,R);pe=Math.sqrt(xe/2)}else{let Q=!1;ae>Number.EPSILON?se>Number.EPSILON&&(Q=!0):ae<-Number.EPSILON?se<-Number.EPSILON&&(Q=!0):Math.sign(ne)===Math.sign(C)&&(Q=!0),Q?(De=-ne,R=ae,pe=Math.sqrt(b)):(De=ae,R=ne,pe=Math.sqrt(b/2))}return new de(De/pe,R/pe)}let _e=[];for(let re=0,Ee=te.length,ve=Ee-1,De=re+1;re<Ee;re++,ve++,De++)ve===Ee&&(ve=0),De===Ee&&(De=0),_e[re]=ie(te[re],te[ve],te[De]);let Se=[],Te,Ue=_e.concat();for(let re=0,Ee=J;re<Ee;re++){let ve=U[re];Te=[];for(let De=0,R=ve.length,pe=R-1,ae=De+1;De<R;De++,pe++,ae++)pe===R&&(pe=0),ae===R&&(ae=0),Te[De]=ie(ve[De],ve[pe],ve[ae]);Se.push(Te),Ue=Ue.concat(Te)}let ze;if(g===0)ze=zs.triangulateShape(te,U);else{let re=[],Ee=[];for(let ve=0;ve<g;ve++){let De=ve/g,R=f*Math.cos(De*Math.PI/2),pe=m*Math.sin(De*Math.PI/2)+x;for(let ae=0,ne=te.length;ae<ne;ae++){let se=X(te[ae],_e[ae],pe);be(se.x,se.y,-R),De===0&&re.push(se)}for(let ae=0,ne=J;ae<ne;ae++){let se=U[ae];Te=Se[ae];let C=[];for(let b=0,H=se.length;b<H;b++){let Q=X(se[b],Te[b],pe);be(Q.x,Q.y,-R),De===0&&C.push(Q)}De===0&&Ee.push(C)}}ze=zs.triangulateShape(re,Ee)}let Ke=ze.length,rt=m+x;for(let re=0;re<K;re++){let Ee=d?X(T[re],Ue[re],rt):T[re];y?(w.copy(A.normals[0]).multiplyScalar(Ee.x),S.copy(A.binormals[0]).multiplyScalar(Ee.y),D.copy(_[0]).add(w).add(S),be(D.x,D.y,D.z)):be(Ee.x,Ee.y,0)}for(let re=1;re<=u;re++)for(let Ee=0;Ee<K;Ee++){let ve=d?X(T[Ee],Ue[Ee],rt):T[Ee];y?(w.copy(A.normals[re]).multiplyScalar(ve.x),S.copy(A.binormals[re]).multiplyScalar(ve.y),D.copy(_[re]).add(w).add(S),be(D.x,D.y,D.z)):be(ve.x,ve.y,h/u*re)}for(let re=g-1;re>=0;re--){let Ee=re/g,ve=f*Math.cos(Ee*Math.PI/2),De=m*Math.sin(Ee*Math.PI/2)+x;for(let R=0,pe=te.length;R<pe;R++){let ae=X(te[R],_e[R],De);be(ae.x,ae.y,h+ve)}for(let R=0,pe=U.length;R<pe;R++){let ae=U[R];Te=Se[R];for(let ne=0,se=ae.length;ne<se;ne++){let C=X(ae[ne],Te[ne],De);y?be(C.x,C.y+_[u-1].y,_[u-1].x+ve):be(C.x,C.y,h+ve)}}}N(),q();function N(){let re=i.length/3;if(d){let Ee=0,ve=K*Ee;for(let De=0;De<Ke;De++){let R=ze[De];ye(R[2]+ve,R[1]+ve,R[0]+ve)}Ee=u+g*2,ve=K*Ee;for(let De=0;De<Ke;De++){let R=ze[De];ye(R[0]+ve,R[1]+ve,R[2]+ve)}}else{for(let Ee=0;Ee<Ke;Ee++){let ve=ze[Ee];ye(ve[2],ve[1],ve[0])}for(let Ee=0;Ee<Ke;Ee++){let ve=ze[Ee];ye(ve[0]+K*u,ve[1]+K*u,ve[2]+K*u)}}n.addGroup(re,i.length/3-re,0)}function q(){let re=i.length/3,Ee=0;V(te,Ee),Ee+=te.length;for(let ve=0,De=U.length;ve<De;ve++){let R=U[ve];V(R,Ee),Ee+=R.length}n.addGroup(re,i.length/3-re,1)}function V(re,Ee){let ve=re.length;for(;--ve>=0;){let De=ve,R=ve-1;R<0&&(R=re.length-1);for(let pe=0,ae=u+g*2;pe<ae;pe++){let ne=K*pe,se=K*(pe+1),C=Ee+De+ne,b=Ee+R+ne,H=Ee+R+se,Q=Ee+De+se;Ne(C,b,H,Q)}}}function be(re,Ee,ve){c.push(re),c.push(Ee),c.push(ve)}function ye(re,Ee,ve){Ve(re),Ve(Ee),Ve(ve);let De=i.length/3,R=v.generateTopUV(n,i,De-3,De-2,De-1);Le(R[0]),Le(R[1]),Le(R[2])}function Ne(re,Ee,ve,De){Ve(re),Ve(Ee),Ve(De),Ve(Ee),Ve(ve),Ve(De);let R=i.length/3,pe=v.generateSideWallUV(n,i,R-6,R-3,R-2,R-1);Le(pe[0]),Le(pe[1]),Le(pe[3]),Le(pe[1]),Le(pe[2]),Le(pe[3])}function Ve(re){i.push(c[re*3+0]),i.push(c[re*3+1]),i.push(c[re*3+2])}function Le(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return jg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Jl[i.type]().fromJSON(i)),new s(n,e.options)}},Jg={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new de(r,o),new de(a,c),new de(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new de(o,1-c),new de(l,1-h),new de(d,1-m),new de(x,1-p)]:[new de(a,1-c),new de(u,1-h),new de(f,1-m),new de(g,1-p)]}};function jg(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var aa=class s extends Yl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},la=class s extends wt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=gt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new L,d=new de,f=new L,m=new L,x=new L,g=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let v=0;v<=t;v++){let _=n+v*u*i,y=Math.sin(_),A=Math.cos(_);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*y,h.y=e[S].y,h.z=e[S].x*A,o.push(h.x,h.y,h.z),d.x=v/t,d.y=S/(e.length-1),a.push(d.x,d.y);let w=c[3*S+0]*y,D=c[3*S+1],E=c[3*S+0]*A;l.push(w,D,E)}}for(let v=0;v<t;v++)for(let _=0;_<e.length-1;_++){let y=_+v*e.length,A=y,S=y+e.length,w=y+e.length+1,D=y+1;r.push(A,S,D),r.push(w,D,S)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ft=class s extends wt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let v=p*d-o;for(let _=0;_<l;_++){let y=_*h-r;m.push(y,-v,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let _=v+l*p,y=v+l*(p+1),A=v+1+l*(p+1),S=v+1+l*p;f.push(_,y,S),f.push(y,A,S)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},ca=class s extends wt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/i,f=new L,m=new de;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let v=p+g,_=v,y=v+n+1,A=v+n+2,S=v+1;a.push(_,y,S),a.push(y,A,S)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var xn=class s extends wt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new L,d=new L,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let v=[],_=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&c===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let S=A/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(S+y,1-_),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let _=u[p][v+1],y=u[p][v],A=u[p+1][v],S=u[p+1][v+1];(p!==0||o>0)&&f.push(_,y,S),(p!==n-1||c<Math.PI)&&f.push(y,A,S)}this.setIndex(f),this.setAttribute("position",new ct(m,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Pi=class s extends wt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,v=(i+1)*f+m;o.push(x,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ua=class s extends wt{constructor(e=new ta(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new de,u=new L,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ct(h,3)),this.setAttribute("normal",new ct(d,3)),this.setAttribute("uv",new ct(f,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),v(),p()}function g(_){u=e.getPointAt(_/t,u);let y=o.normals[_],A=o.binormals[_];for(let S=0;S<=i;S++){let w=S/i*Math.PI*2,D=Math.sin(w),E=-Math.cos(w);c.x=E*y.x+D*A.x,c.y=E*y.y+D*A.y,c.z=E*y.z+D*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let y=1;y<=i;y++){let A=(i+1)*(_-1)+(y-1),S=(i+1)*_+(y-1),w=(i+1)*_+y,D=(i+1)*(_-1)+y;m.push(A,S,D),m.push(S,w,D)}}function v(){for(let _=0;_<=t;_++)for(let y=0;y<=i;y++)l.x=_/t,l.y=y/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Jl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ro=class extends ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tt=class extends Ln{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Lt=class extends tt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ha=class extends Ln{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lu,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var Ql=class extends Ln{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends Ln{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ul(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Qg(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function np(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Xp(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ss=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends ss{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bs,endingEnd:Bs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Hs:r=e,a=2*t-n;break;case Ho:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hs:o=e,c=2*n-t;break;case Ho:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,v=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,y=f*g-f*x;for(let A=0;A!==a;++A)r[A]=p*o[u+A]+v*o[l+A]+_*o[c+A]+y*o[h+A];return r}},fa=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},nc=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Xn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Gs:t=this.InterpolantFactoryMethodDiscrete;break;case Ws:t=this.InterpolantFactoryMethodLinear;break;case Fl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gs;case this.InterpolantFactoryMethodLinear:return Ws;case this.InterpolantFactoryMethodSmooth:return Fl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(at("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(at("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){at("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){at("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&z0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){at("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Fl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ws;var rs=class extends Xn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Gs;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var da=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};da.prototype.ValueTypeName="color";var Ii=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};Ii.prototype.ValueTypeName="number";var ic=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)Jt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Di=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new ic(this.times,this.values,this.getValueSize(),e)}};Di.prototype.ValueTypeName="quaternion";Di.prototype.InterpolantFactoryMethodSmooth=void 0;var os=class extends Xn{constructor(e,t,n){super(e,t,n)}};os.prototype.ValueTypeName="string";os.prototype.ValueBufferType=Array;os.prototype.DefaultInterpolation=Gs;os.prototype.InterpolantFactoryMethodLinear=void 0;os.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends Xn{constructor(e,t,n,i){super(e,t,n,i)}};Li.prototype.ValueTypeName="vector";var js=class{constructor(e="",t=-1,n=[],i=au){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(tx(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Xn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=Qg(c);c=np(c,1,u),l=np(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Ii(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(et("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return at("AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,x){if(f.length!==0){let g=[],p=[];Xp(f,g,p,m),g.length!==0&&x.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let v=0;v!==d[m].morphTargets.length;++v){let _=d[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new Ii(".morphTargetInfluence["+x+"]",g,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";n(Li,f+".position",d,"pos",i),n(Di,f+".quaternion",d,"rot",i),n(Li,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ex(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return da;case"quaternion":return Di;case"bool":case"boolean":return rs;case"string":return os}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function tx(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ex(s.type);if(s.times===void 0){let t=[],n=[];Xp(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},sc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qp=new sc,Ni=class{constructor(e){this.manager=e!==void 0?e:qp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ni.DEFAULT_MATERIAL_NAME="__DEFAULT";var ji={},Ch=class extends Error{constructor(e,t){super(e),this.response=t}},oo=class extends Ni{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ei.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=ji[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){v();function v(){h.read().then(({done:_,value:y})=>{if(_)p.close();else{x+=y.byteLength;let A=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,w=u.length;S<w;S++){let D=u[S];D.onProgress&&D.onProgress(A)}p.enqueue(y),v()}},_=>{p.error(_)})}}});return new Response(g)}else throw new Ch(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Ei.add(`file:${e}`,l);let u=ji[e];delete ji[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=ji[e];if(u===void 0)throw this.manager.itemError(e),l;delete ji[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Gr=new WeakMap,rc=class extends Ni{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ei.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Gr.get(o);h===void 0&&(h=[],Gr.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=qr("img");function c(){u(),t&&t(this);let h=Gr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Gr.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Ei.remove(`image:${e}`);let d=Gr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Gr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ei.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var Qs=class extends Ni{constructor(e){super(e)}load(e,t,n,i){let r=new gn,o=new rc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},er=class extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},pa=class extends er{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Mh=new Qe,ip=new L,sp=new L,ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qr,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ph=class extends ma{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Xs*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ui=class extends er{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Ph}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Ih=class extends ma{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Nn=class extends er{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ih}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Fi=class extends Xo{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends ma{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends er{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var as=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var bh=new WeakMap,ga=class extends Ni{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&et("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&et("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ei.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(bh.has(o)===!0)i&&i(bh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ei.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),bh.set(c,l),Ei.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ei.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var oc=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},nr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var ac=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Jt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Jt.multiplyQuaternionsFlat(e,o,e,t,e,n),Jt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},jh="\\[\\]\\.:\\/",nx=new RegExp("["+jh+"]","g"),Qh="[^"+jh+"]",ix="[^"+jh.replace("\\.","")+"]",sx=/((?:WC+[\/:])*)/.source.replace("WC",Qh),rx=/(WCOD+)?/.source.replace("WCOD",ix),ox=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Qh),ax=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Qh),lx=new RegExp("^"+sx+rx+ox+ax+"$"),cx=["material","materials","bones","map"],Lh=class{constructor(e,t,n){let i=n||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},zt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nx,"")}static parseTrackName(e){let t=lx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);cx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){at("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){at("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){at("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){at("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){at("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){at("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;at("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){at("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=Lh;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Bs,endingEnd:Bs};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=ou,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Rp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case au:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Ap;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===ru){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=Hs,i.endingEnd=Hs):(e?i.endingStart=this.zeroSlopeAtStart?Hs:Bs:i.endingStart=Ho,t?i.endingEnd=this.zeroSlopeAtEnd?Hs:Bs:i.endingEnd=Ho)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},ux=new Float32Array(1),xa=class extends Ti{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new ac(zt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new fa(new Float32Array(2),new Float32Array(2),1,ux),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?js.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=au),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new lc(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?js.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var rp=new Qe,va=class{constructor(e,t,n=0,i=1/0){this.ray=new ys(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return rp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(rp),this}intersectObject(e,t=!0,n=[]){return Nh(e,this,n,t),n.sort(op),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Nh(e[i],this,n,t);return n.sort(op),n}};function op(s,e){return s.distance-e.distance}function Nh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Nh(r[o],e,t,!0)}}function ef(s,e,t,n){let i=hx(n);switch(t){case Wh:return s*e;case Ec:return s*e/i.components*i.byteLength;case Sc:return s*e/i.components*i.byteLength;case lr:return s*e*2/i.components*i.byteLength;case Tc:return s*e*2/i.components*i.byteLength;case Xh:return s*e*3/i.components*i.byteLength;case zn:return s*e*4/i.components*i.byteLength;case wc:return s*e*4/i.components*i.byteLength;case Ra:case Ca:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Pa:case Ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Pc:return Math.max(s,16)*Math.max(e,8)/4;case Ac:case Cc:return Math.max(s,8)*Math.max(e,8)/2;case Ic:case Dc:case Nc:case Uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Fc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case qc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jc:case Qc:case eu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case tu:case nu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case iu:case su:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hx(s){switch(s){case Un:case zh:return{byteLength:1,components:1};case co:case kh:case fn:return{byteLength:2,components:1};case Mc:case bc:return{byteLength:2,components:4};case vi:case yc:case ti:return{byteLength:4,components:1};case Vh:case Gh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function mm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function dx(s){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var px=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mx=`#ifdef USE_ALPHAHASH
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
#endif`,gx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yx=`#ifdef USE_AOMAP
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
#endif`,Mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bx=`#ifdef USE_BATCHING
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
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ax=`#ifdef USE_IRIDESCENCE
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
#endif`,Rx=`#ifdef USE_BUMPMAP
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
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Bx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hx=`vec3 transformedNormal = objectNormal;
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
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
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
#endif`,Jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ev=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tv=`#ifdef USE_GRADIENTMAP
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
}`,nv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rv=`uniform bool receiveShadow;
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
#endif`,ov=`#ifdef USE_ENVMAP
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
#endif`,av=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hv=`PhysicalMaterial material;
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
#endif`,fv=`uniform sampler2D dfgLUT;
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
}`,dv=`
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
#endif`,pv=`#if defined( RE_IndirectDiffuse )
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
#endif`,mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_v=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ev=`#if defined( USE_POINTS_UV )
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
#endif`,Sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cv=`#ifdef USE_MORPHTARGETS
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
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fv=`#ifdef USE_NORMALMAP
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
#endif`,Ov=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$v=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jv=`float getShadowMask() {
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
}`,Qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,o_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,y_=`#if DEPTH_PACKING == 3200
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
}`,M_=`#define DISTANCE
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
}`,b_=`#define DISTANCE
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T_=`uniform float scale;
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
}`,w_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,P_=`#define LAMBERT
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
}`,I_=`#define MATCAP
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
}`,D_=`#define MATCAP
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
}`,L_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,U_=`#define PHONG
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
}`,F_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,B_=`#define STANDARD
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
}`,H_=`#define TOON
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
}`,z_=`#define TOON
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
}`,k_=`uniform float size;
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,W_=`uniform vec3 color;
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
}`,X_=`uniform float rotation;
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
}`,q_=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:px,alphahash_pars_fragment:mx,alphamap_fragment:gx,alphamap_pars_fragment:xx,alphatest_fragment:vx,alphatest_pars_fragment:_x,aomap_fragment:yx,aomap_pars_fragment:Mx,batching_pars_vertex:bx,batching_vertex:Ex,begin_vertex:Sx,beginnormal_vertex:Tx,bsdfs:wx,iridescence_fragment:Ax,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Cx,clipping_planes_pars_fragment:Px,clipping_planes_pars_vertex:Ix,clipping_planes_vertex:Dx,color_fragment:Lx,color_pars_fragment:Nx,color_pars_vertex:Ux,color_vertex:Fx,common:Ox,cube_uv_reflection_fragment:Bx,defaultnormal_vertex:Hx,displacementmap_pars_vertex:zx,displacementmap_vertex:kx,emissivemap_fragment:Vx,emissivemap_pars_fragment:Gx,colorspace_fragment:Wx,colorspace_pars_fragment:Xx,envmap_fragment:qx,envmap_common_pars_fragment:Yx,envmap_pars_fragment:Zx,envmap_pars_vertex:Kx,envmap_physical_pars_fragment:ov,envmap_vertex:$x,fog_vertex:Jx,fog_pars_vertex:jx,fog_fragment:Qx,fog_pars_fragment:ev,gradientmap_pars_fragment:tv,lightmap_pars_fragment:nv,lights_lambert_fragment:iv,lights_lambert_pars_fragment:sv,lights_pars_begin:rv,lights_toon_fragment:av,lights_toon_pars_fragment:lv,lights_phong_fragment:cv,lights_phong_pars_fragment:uv,lights_physical_fragment:hv,lights_physical_pars_fragment:fv,lights_fragment_begin:dv,lights_fragment_maps:pv,lights_fragment_end:mv,logdepthbuf_fragment:gv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:vv,logdepthbuf_vertex:_v,map_fragment:yv,map_pars_fragment:Mv,map_particle_fragment:bv,map_particle_pars_fragment:Ev,metalnessmap_fragment:Sv,metalnessmap_pars_fragment:Tv,morphinstance_vertex:wv,morphcolor_vertex:Av,morphnormal_vertex:Rv,morphtarget_pars_vertex:Cv,morphtarget_vertex:Pv,normal_fragment_begin:Iv,normal_fragment_maps:Dv,normal_pars_fragment:Lv,normal_pars_vertex:Nv,normal_vertex:Uv,normalmap_pars_fragment:Fv,clearcoat_normal_fragment_begin:Ov,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:Hv,iridescence_pars_fragment:zv,opaque_fragment:kv,packing:Vv,premultiplied_alpha_fragment:Gv,project_vertex:Wv,dithering_fragment:Xv,dithering_pars_fragment:qv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Kv,shadowmap_pars_vertex:$v,shadowmap_vertex:Jv,shadowmask_pars_fragment:jv,skinbase_vertex:Qv,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:o_,transmission_fragment:a_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:u_,uv_vertex:h_,worldpos_vertex:f_,background_vert:d_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:x_,cube_frag:v_,depth_vert:__,depth_frag:y_,distance_vert:M_,distance_frag:b_,equirect_vert:E_,equirect_frag:S_,linedashed_vert:T_,linedashed_frag:w_,meshbasic_vert:A_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:P_,meshmatcap_vert:I_,meshmatcap_frag:D_,meshnormal_vert:L_,meshnormal_frag:N_,meshphong_vert:U_,meshphong_frag:F_,meshphysical_vert:O_,meshphysical_frag:B_,meshtoon_vert:H_,meshtoon_frag:z_,points_vert:k_,points_frag:V_,shadow_vert:G_,shadow_frag:W_,sprite_vert:X_,sprite_frag:q_},Ye={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Hi={basic:{uniforms:Fn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Fn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Fn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Fn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Fn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new Ie(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Fn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Fn([Ye.points,Ye.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Fn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Fn([Ye.common,Ye.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Fn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Fn([Ye.sprite,Ye.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Fn([Ye.common,Ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Fn([Ye.lights,Ye.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Hi.physical={uniforms:Fn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};var fu={r:0,b:0,g:0},ur=new Jn,Y_=new Qe;function Z_(s,e,t,n,i,r,o){let a=new Ie(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,A=m(_);A===null?p(a,c):A&&A.isColor&&(p(A,1),y=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,y){let A=m(y);A&&(A.isCubeTexture||A.mapping===Aa)?(u===void 0&&(u=new Ge(new Mt(1,1,1),new ht({name:"BackgroundCubeMaterial",uniforms:cr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,w,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ur.copy(y.backgroundRotation),ur.x*=-1,ur.y*=-1,ur.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Y_.makeRotationFromEuler(ur)),u.material.toneMapped=vt.getTransfer(A.colorSpace)!==Ct,(h!==A||d!==A.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ge(new Ft(2,2),new ht({name:"BackgroundMaterial",uniforms:cr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=vt.getTransfer(A.colorSpace)!==Ct,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(h!==A||d!==A.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=A,d=A.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(fu,$h(s)),n.buffers.color.setClear(fu.r,fu.g,fu.b,y,o)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g,dispose:v}}function K_(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(T,U,B,z,J){let te=!1,X=h(z,B,U);r!==X&&(r=X,l(r.object)),te=f(T,z,B,J),te&&m(T,z,B,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(te||o)&&(o=!1,y(T,U,B,z),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return s.createVertexArray()}function l(T){return s.bindVertexArray(T)}function u(T){return s.deleteVertexArray(T)}function h(T,U,B){let z=B.wireframe===!0,J=n[T.id];J===void 0&&(J={},n[T.id]=J);let te=J[U.id];te===void 0&&(te={},J[U.id]=te);let X=te[z];return X===void 0&&(X=d(c()),te[z]=X),X}function d(T){let U=[],B=[],z=[];for(let J=0;J<t;J++)U[J]=0,B[J]=0,z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:z,object:T,attributes:{},index:null}}function f(T,U,B,z){let J=r.attributes,te=U.attributes,X=0,K=B.getAttributes();for(let ie in K)if(K[ie].location>=0){let Se=J[ie],Te=te[ie];if(Te===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(Te=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(Te=T.instanceColor)),Se===void 0||Se.attribute!==Te||Te&&Se.data!==Te.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function m(T,U,B,z){let J={},te=U.attributes,X=0,K=B.getAttributes();for(let ie in K)if(K[ie].location>=0){let Se=te[ie];Se===void 0&&(ie==="instanceMatrix"&&T.instanceMatrix&&(Se=T.instanceMatrix),ie==="instanceColor"&&T.instanceColor&&(Se=T.instanceColor));let Te={};Te.attribute=Se,Se&&Se.data&&(Te.data=Se.data),J[ie]=Te,X++}r.attributes=J,r.attributesNum=X,r.index=z}function x(){let T=r.newAttributes;for(let U=0,B=T.length;U<B;U++)T[U]=0}function g(T){p(T,0)}function p(T,U){let B=r.newAttributes,z=r.enabledAttributes,J=r.attributeDivisors;B[T]=1,z[T]===0&&(s.enableVertexAttribArray(T),z[T]=1),J[T]!==U&&(s.vertexAttribDivisor(T,U),J[T]=U)}function v(){let T=r.newAttributes,U=r.enabledAttributes;for(let B=0,z=U.length;B<z;B++)U[B]!==T[B]&&(s.disableVertexAttribArray(B),U[B]=0)}function _(T,U,B,z,J,te,X){X===!0?s.vertexAttribIPointer(T,U,B,J,te):s.vertexAttribPointer(T,U,B,z,J,te)}function y(T,U,B,z){x();let J=z.attributes,te=B.getAttributes(),X=U.defaultAttributeValues;for(let K in te){let ie=te[K];if(ie.location>=0){let _e=J[K];if(_e===void 0&&(K==="instanceMatrix"&&T.instanceMatrix&&(_e=T.instanceMatrix),K==="instanceColor"&&T.instanceColor&&(_e=T.instanceColor)),_e!==void 0){let Se=_e.normalized,Te=_e.itemSize,Ue=e.get(_e);if(Ue===void 0)continue;let ze=Ue.buffer,Ke=Ue.type,rt=Ue.bytesPerElement,N=Ke===s.INT||Ke===s.UNSIGNED_INT||_e.gpuType===yc;if(_e.isInterleavedBufferAttribute){let q=_e.data,V=q.stride,be=_e.offset;if(q.isInstancedInterleavedBuffer){for(let ye=0;ye<ie.locationSize;ye++)p(ie.location+ye,q.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ye=0;ye<ie.locationSize;ye++)g(ie.location+ye);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let ye=0;ye<ie.locationSize;ye++)_(ie.location+ye,Te/ie.locationSize,Ke,Se,V*rt,(be+Te/ie.locationSize*ye)*rt,N)}else{if(_e.isInstancedBufferAttribute){for(let q=0;q<ie.locationSize;q++)p(ie.location+q,_e.meshPerAttribute);T.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let q=0;q<ie.locationSize;q++)g(ie.location+q);s.bindBuffer(s.ARRAY_BUFFER,ze);for(let q=0;q<ie.locationSize;q++)_(ie.location+q,Te/ie.locationSize,Ke,Se,Te*rt,Te/ie.locationSize*q*rt,N)}}else if(X!==void 0){let Se=X[K];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(ie.location,Se);break;case 3:s.vertexAttrib3fv(ie.location,Se);break;case 4:s.vertexAttrib4fv(ie.location,Se);break;default:s.vertexAttrib1fv(ie.location,Se)}}}}v()}function A(){D();for(let T in n){let U=n[T];for(let B in U){let z=U[B];for(let J in z)u(z[J].object),delete z[J];delete U[B]}delete n[T]}}function S(T){if(n[T.id]===void 0)return;let U=n[T.id];for(let B in U){let z=U[B];for(let J in z)u(z[J].object),delete z[J];delete U[B]}delete n[T.id]}function w(T){for(let U in n){let B=n[U];if(B[T.id]===void 0)continue;let z=B[T.id];for(let J in z)u(z[J].object),delete z[J];delete B[T.id]}}function D(){E(),o=!0,r!==i&&(r=i,l(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function $_(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function J_(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==zn&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let D=w===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Un&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ti&&!D)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(et("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,maxSamples:A,samples:S}}function j_(s){let e=this,t=null,n=0,i=!1,r=!1,o=new ri,a=new pt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{let v=r?0:n,_=v*4,y=p.clippingState||null;c.value=y,y=u(m,d,_,f);for(let A=0;A!==_;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=f;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function Q_(s){let e=new WeakMap;function t(o,a){return a===xc?o.mapping=Ts:a===vc&&(o.mapping=or),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xc||a===vc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Yo(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var As=4,Yp=[.125,.215,.35,.446,.526,.582],fr=20,ey=256,La=new Fi,Zp=new Ie,tf=null,nf=0,sf=0,rf=!1,ty=new L,po=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=ty}=r;tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tf,nf,sf),this._renderer.xr.enabled=rf,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),sf=this._renderer.getActiveMipmapLevel(),rf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:fn,format:zn,colorSpace:An,depthBuffer:!1},i=Kp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ny(r)),this._blurMaterial=sy(r,e,t),this._ggxMaterial=iy(r,e,t)}return i}_compileMaterial(e){let t=new Ge(new wt,e);this._renderer.compile(t,La)}_sceneToCubeUV(e,t,n,i,r){let c=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Zp),h.toneMapping=xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new Mt,new Et({name:"PMREM.Background",side:bn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(Zp),p=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):y===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));let A=this._cubeSize;ho(i,y*A,_>2?A:0,A,A),h.setRenderTarget(i),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Ts||e.mapping===or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;ho(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,La)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-As?n-m+As:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,ho(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,La),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,ho(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(a,La)}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[i];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*fr-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):fr;g>fr&&et(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${fr}`);let p=[],v=0;for(let w=0;w<fr;++w){let D=w/x,E=Math.exp(-D*D/2);p.push(E),w===0?v+=E:w<g&&(v+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let y=this._sizeLods[i],A=3*y*(i>_-As?i-_+As:0),S=4*(this._cubeSize-y);ho(t,A,S,3*y,2*y),c.setRenderTarget(t),c.render(h,La)}};function ny(s){let e=[],t=[],n=[],i=s,r=s-As+1+Yp.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-As?c=Yp[o-s+As-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,x=3,g=2,p=1,v=new Float32Array(x*m*f),_=new Float32Array(g*m*f),y=new Float32Array(p*m*f);for(let S=0;S<f;S++){let w=S%3*2/3-1,D=S>2?0:-1,E=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set(E,x*m*S),_.set(d,g*m*S);let T=[S,S,S,S,S,S];y.set(T,p*m*S)}let A=new wt;A.setAttribute("position",new Tt(v,x)),A.setAttribute("uv",new Tt(_,g)),A.setAttribute("faceIndex",new Tt(y,p)),n.push(new Ge(A,null)),i>As&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Kp(s,e,t){let n=new en(s,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function iy(s,e,t){return new ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ey,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:mu(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function sy(s,e,t){let n=new Float32Array(fr),i=new L(0,1,0);return new ht({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mu(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function $p(){return new ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mu(),fragmentShader:`

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
		`,blending:un,depthTest:!1,depthWrite:!1})}function Jp(){return new ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:un,depthTest:!1,depthWrite:!1})}function mu(){return`

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
	`}function ry(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===xc||c===vc,u=c===Ts||c===or;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new po(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new po(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oy(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Zr("WebGLRenderer: "+n+" extension not supported."),i}}}function ay(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(f!==null){let v=f.array;x=f.version;for(let _=0,y=v.length;_<y;_+=3){let A=v[_+0],S=v[_+1],w=v[_+2];d.push(A,S,S,w,w,A)}}else if(m!==void 0){let v=m.array;x=m.version;for(let _=0,y=v.length/3-1;_<y;_+=3){let A=_+0,S=_+1,w=_+2;d.push(A,S,S,w,w,A)}}else return;let g=new(Zh(d)?Wo:wi)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function ly(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let v=0;v<m;v++)p+=f[v]*x[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:at("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function uy(s,e,t){let n=new WeakMap,i=new Dt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let E=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*A*4*h),w=new Go(S,y,A,h);w.type=ti,w.needsUpdate=!0;let D=_*4;for(let T=0;T<h;T++){let U=g[T],B=p[T],z=v[T],J=y*A*4*T;for(let te=0;te<U.count;te++){let X=te*D;f===!0&&(i.fromBufferAttribute(U,te),S[J+X+0]=i.x,S[J+X+1]=i.y,S[J+X+2]=i.z,S[J+X+3]=0),m===!0&&(i.fromBufferAttribute(B,te),S[J+X+4]=i.x,S[J+X+5]=i.y,S[J+X+6]=i.z,S[J+X+7]=0),x===!0&&(i.fromBufferAttribute(z,te),S[J+X+8]=i.x,S[J+X+9]=i.y,S[J+X+10]=i.z,S[J+X+11]=z.itemSize===4?i.w:1)}}d={count:h,texture:w,size:new de(y,A)},n.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function hy(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var fy={[Ma]:"LINEAR_TONE_MAPPING",[ba]:"REINHARD_TONE_MAPPING",[Ea]:"CINEON_TONE_MAPPING",[rr]:"ACES_FILMIC_TONE_MAPPING",[Ta]:"AGX_TONE_MAPPING",[wa]:"NEUTRAL_TONE_MAPPING",[Sa]:"CUSTOM_TONE_MAPPING"};function dy(s,e,t,n,i){let r=new en(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new en(e,t,{type:fn,depthBuffer:!1,stencilBuffer:!1}),a=new wt;a.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ct([0,2,0,0,2,0],2));let c=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Ge(a,c),u=new Fi(-1,1,1,-1,0,1),h=null,d=null,f=!1,m,x=null,g=[],p=!1;this.setSize=function(v,_){r.setSize(v,_),o.setSize(v,_);for(let y=0;y<g.length;y++){let A=g[y];A.setSize&&A.setSize(v,_)}},this.setEffects=function(v){g=v,p=g.length>0&&g[0].isRenderPass===!0;let _=r.width,y=r.height;for(let A=0;A<g.length;A++){let S=g[A];S.setSize&&S.setSize(_,y)}},this.begin=function(v,_){if(f||v.toneMapping===xi&&g.length===0)return!1;if(x=_,_!==null){let y=_.width,A=_.height;(r.width!==y||r.height!==A)&&this.setSize(y,A)}return p===!1&&v.setRenderTarget(r),m=v.toneMapping,v.toneMapping=xi,!0},this.hasRenderPass=function(){return p},this.end=function(v,_){v.toneMapping=m,f=!0;let y=r,A=o;for(let S=0;S<g.length;S++){let w=g[S];if(w.enabled!==!1&&(w.render(v,A,y,_),w.needsSwap!==!1)){let D=y;y=A,A=D}}if(h!==v.outputColorSpace||d!==v.toneMapping){h=v.outputColorSpace,d=v.toneMapping,c.defines={},vt.getTransfer(h)===Ct&&(c.defines.SRGB_TRANSFER="");let S=fy[d];S&&(c.defines[S]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(x),v.render(l,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}var gm=new gn,lf=new Ri(1,1),xm=new Go,vm=new Vl,_m=new qo,jp=[],Qp=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function mo(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=jp[i];if(r===void 0&&(r=new Float32Array(i),jp[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function vn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function _n(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function gu(s,e){let t=Qp[e];t===void 0&&(t=new Int32Array(e),Qp[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function py(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function my(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2fv(this.addr,e),_n(t,e)}}function gy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;s.uniform3fv(this.addr,e),_n(t,e)}}function xy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4fv(this.addr,e),_n(t,e)}}function vy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,n))return;nm.set(n),s.uniformMatrix2fv(this.addr,!1,nm),_n(t,n)}}function _y(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,n))return;tm.set(n),s.uniformMatrix3fv(this.addr,!1,tm),_n(t,n)}}function yy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,n))return;em.set(n),s.uniformMatrix4fv(this.addr,!1,em),_n(t,n)}}function My(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function by(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2iv(this.addr,e),_n(t,e)}}function Ey(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3iv(this.addr,e),_n(t,e)}}function Sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4iv(this.addr,e),_n(t,e)}}function Ty(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;s.uniform2uiv(this.addr,e),_n(t,e)}}function Ay(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;s.uniform3uiv(this.addr,e),_n(t,e)}}function Ry(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;s.uniform4uiv(this.addr,e),_n(t,e)}}function Cy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(lf.compareFunction=t.isReversedDepthBuffer()?uu:cu,r=lf):r=gm,t.setTexture2D(e||r,i)}function Py(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||vm,i)}function Iy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||_m,i)}function Dy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||xm,i)}function Ly(s){switch(s){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return xy;case 35674:return vy;case 35675:return _y;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Sy;case 5125:return Ty;case 36294:return wy;case 36295:return Ay;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Cy;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Dy}}function Ny(s,e){s.uniform1fv(this.addr,e)}function Uy(s,e){let t=mo(e,this.size,2);s.uniform2fv(this.addr,t)}function Fy(s,e){let t=mo(e,this.size,3);s.uniform3fv(this.addr,t)}function Oy(s,e){let t=mo(e,this.size,4);s.uniform4fv(this.addr,t)}function By(s,e){let t=mo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Hy(s,e){let t=mo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zy(s,e){let t=mo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ky(s,e){s.uniform1iv(this.addr,e)}function Vy(s,e){s.uniform2iv(this.addr,e)}function Gy(s,e){s.uniform3iv(this.addr,e)}function Wy(s,e){s.uniform4iv(this.addr,e)}function Xy(s,e){s.uniform1uiv(this.addr,e)}function qy(s,e){s.uniform2uiv(this.addr,e)}function Yy(s,e){s.uniform3uiv(this.addr,e)}function Zy(s,e){s.uniform4uiv(this.addr,e)}function Ky(s,e,t){let n=this.cache,i=e.length,r=gu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=lf:o=gm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function $y(s,e,t){let n=this.cache,i=e.length,r=gu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||vm,r[o])}function Jy(s,e,t){let n=this.cache,i=e.length,r=gu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||_m,r[o])}function jy(s,e,t){let n=this.cache,i=e.length,r=gu(t,i);vn(n,r)||(s.uniform1iv(this.addr,r),_n(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||xm,r[o])}function Qy(s){switch(s){case 5126:return Ny;case 35664:return Uy;case 35665:return Fy;case 35666:return Oy;case 35674:return By;case 35675:return Hy;case 35676:return zy;case 5124:case 35670:return ky;case 35667:case 35671:return Vy;case 35668:case 35672:return Gy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return qy;case 36295:return Yy;case 36296:return Zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Jy;case 36289:case 36303:case 36311:case 36292:return jy}}var cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ly(t.type)}},uf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qy(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},of=/(\w+)(\])?(\[|\.)?/g;function im(s,e){s.seq.push(e),s.map[e.id]=e}function eM(s,e,t){let n=s.name,i=n.length;for(of.lastIndex=0;;){let r=of.exec(n),o=of.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){im(t,l===void 0?new cf(a,s,e):new uf(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new hf(a),im(t,h)),t=h}}}var fo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);eM(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function sm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var tM=37297,nM=0;function iM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var rm=new pt;function sM(s){vt._getMatrix(rm,vt.workingColorSpace,s);let e=`mat3( ${rm.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(s)){case zo:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function om(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+iM(s.getShaderSource(e),a)}else return r}function rM(s,e){let t=sM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var oM={[Ma]:"Linear",[ba]:"Reinhard",[Ea]:"Cineon",[rr]:"ACESFilmic",[Ta]:"AgX",[wa]:"Neutral",[Sa]:"Custom"};function aM(s,e){let t=oM[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var du=new L;function lM(){vt.getLuminanceCoefficients(du);let s=du.x.toFixed(4),e=du.y.toFixed(4),t=du.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function uM(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ua(s){return s!==""}function am(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(s){return s.replace(fM,pM)}var dM=new Map;function pM(s,e){let t=xt[e];if(t===void 0){let n=dM.get(e);if(n!==void 0)t=xt[n],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ff(t)}var mM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(s){return s.replace(mM,gM)}function gM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function um(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var xM={[ir]:"SHADOWMAP_TYPE_PCF",[ao]:"SHADOWMAP_TYPE_VSM"};function vM(s){return xM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _M={[Ts]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function yM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":_M[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var MM={[or]:"ENVMAP_MODE_REFRACTION"};function bM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":MM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var EM={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[Sp]:"ENVMAP_BLENDING_MIX",[Tp]:"ENVMAP_BLENDING_ADD"};function SM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":EM[s.combine]||"ENVMAP_BLENDING_NONE"}function TM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=vM(t),l=yM(t),u=bM(t),h=SM(t),d=TM(t),f=cM(t),m=uM(r),x=i.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ua).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ua).join(`
`),p.length>0&&(p+=`
`)):(g=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),p=[um(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?xt.tonemapping_pars_fragment:"",t.toneMapping!==xi?aM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,rM("linearToOutputTexel",t.outputColorSpace),lM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),o=ff(o),o=am(o,t),o=lm(o,t),a=ff(a),a=am(a,t),a=lm(a,t),o=cm(o),a=cm(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=v+g+o,y=v+p+a,A=sm(i,i.VERTEX_SHADER,_),S=sm(i,i.FRAGMENT_SHADER,y);i.attachShader(x,A),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function w(U){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x)||"",z=i.getShaderInfoLog(A)||"",J=i.getShaderInfoLog(S)||"",te=B.trim(),X=z.trim(),K=J.trim(),ie=!0,_e=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(ie=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,A,S);else{let Se=om(i,A,"vertex"),Te=om(i,S,"fragment");at("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+te+`
`+Se+`
`+Te)}else te!==""?et("WebGLProgram: Program Info Log:",te):(X===""||K==="")&&(_e=!1);_e&&(U.diagnostics={runnable:ie,programLog:te,vertexShader:{log:X,prefix:g},fragmentShader:{log:K,prefix:p}})}i.deleteShader(A),i.deleteShader(S),D=new fo(i,x),E=hM(i,x)}let D;this.getUniforms=function(){return D===void 0&&w(this),D};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(x,tM)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=S,this}var AM=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new pf(e),t.set(e,n)),n}},pf=class{constructor(e){this.id=AM++,this.code=e,this.usedTimes=0}};function RM(s,e,t,n,i,r,o){let a=new $r,c=new df,l=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,T,U,B,z){let J=B.fog,te=z.geometry,X=E.isMeshStandardMaterial?B.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||X),ie=K&&K.mapping===Aa?K.image.height:null,_e=m[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&et("WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Se=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Te=Se!==void 0?Se.length:0,Ue=0;te.morphAttributes.position!==void 0&&(Ue=1),te.morphAttributes.normal!==void 0&&(Ue=2),te.morphAttributes.color!==void 0&&(Ue=3);let ze,Ke,rt,N;if(_e){let He=Hi[_e];ze=He.vertexShader,Ke=He.fragmentShader}else ze=E.vertexShader,Ke=E.fragmentShader,c.update(E),rt=c.getVertexShaderID(E),N=c.getFragmentShaderID(E);let q=s.getRenderTarget(),V=s.state.buffers.depth.getReversed(),be=z.isInstancedMesh===!0,ye=z.isBatchedMesh===!0,Ne=!!E.map,Ve=!!E.matcap,Le=!!K,re=!!E.aoMap,Ee=!!E.lightMap,ve=!!E.bumpMap,De=!!E.normalMap,R=!!E.displacementMap,pe=!!E.emissiveMap,ae=!!E.metalnessMap,ne=!!E.roughnessMap,se=E.anisotropy>0,C=E.clearcoat>0,b=E.dispersion>0,H=E.iridescence>0,Q=E.sheen>0,me=E.transmission>0,$=se&&!!E.anisotropyMap,k=C&&!!E.clearcoatMap,Z=C&&!!E.clearcoatNormalMap,ue=C&&!!E.clearcoatRoughnessMap,ke=H&&!!E.iridescenceMap,xe=H&&!!E.iridescenceThicknessMap,Ce=Q&&!!E.sheenColorMap,Oe=Q&&!!E.sheenRoughnessMap,Xe=!!E.specularMap,Pe=!!E.specularColorMap,ot=!!E.specularIntensityMap,O=me&&!!E.transmissionMap,Re=me&&!!E.thicknessMap,fe=!!E.gradientMap,we=!!E.alphaMap,Me=E.alphaTest>0,he=!!E.alphaHash,Ae=!!E.extensions,Fe=xi;E.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Fe=s.toneMapping);let je={shaderID:_e,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:Ke,defines:E.defines,customVertexShaderID:rt,customFragmentShaderID:N,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ye,batchingColor:ye&&z._colorsTexture!==null,instancing:be,instancingColor:be&&z.instanceColor!==null,instancingMorph:be&&z.morphTexture!==null,outputColorSpace:q===null?s.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:An,alphaToCoverage:!!E.alphaToCoverage,map:Ne,matcap:Ve,envMap:Le,envMapMode:Le&&K.mapping,envMapCubeUVHeight:ie,aoMap:re,lightMap:Ee,bumpMap:ve,normalMap:De,displacementMap:R,emissiveMap:pe,normalMapObjectSpace:De&&E.normalMapType===Pp,normalMapTangentSpace:De&&E.normalMapType===lu,metalnessMap:ae,roughnessMap:ne,anisotropy:se,anisotropyMap:$,clearcoat:C,clearcoatMap:k,clearcoatNormalMap:Z,clearcoatRoughnessMap:ue,dispersion:b,iridescence:H,iridescenceMap:ke,iridescenceThicknessMap:xe,sheen:Q,sheenColorMap:Ce,sheenRoughnessMap:Oe,specularMap:Xe,specularColorMap:Pe,specularIntensityMap:ot,transmission:me,transmissionMap:O,thicknessMap:Re,gradientMap:fe,opaque:E.transparent===!1&&E.blending===ks&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:Me,alphaHash:he,combine:E.combine,mapUv:Ne&&x(E.map.channel),aoMapUv:re&&x(E.aoMap.channel),lightMapUv:Ee&&x(E.lightMap.channel),bumpMapUv:ve&&x(E.bumpMap.channel),normalMapUv:De&&x(E.normalMap.channel),displacementMapUv:R&&x(E.displacementMap.channel),emissiveMapUv:pe&&x(E.emissiveMap.channel),metalnessMapUv:ae&&x(E.metalnessMap.channel),roughnessMapUv:ne&&x(E.roughnessMap.channel),anisotropyMapUv:$&&x(E.anisotropyMap.channel),clearcoatMapUv:k&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Z&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(E.sheenRoughnessMap.channel),specularMapUv:Xe&&x(E.specularMap.channel),specularColorMapUv:Pe&&x(E.specularColorMap.channel),specularIntensityMapUv:ot&&x(E.specularIntensityMap.channel),transmissionMapUv:O&&x(E.transmissionMap.channel),thicknessMapUv:Re&&x(E.thicknessMap.channel),alphaMapUv:we&&x(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(De||se),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!te.attributes.uv&&(Ne||we),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:V,skinning:z.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ue,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&U.length>0,shadowMapType:s.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ne&&E.map.isVideoTexture===!0&&vt.getTransfer(E.map.colorSpace)===Ct,decodeVideoTextureEmissive:pe&&E.emissiveMap.isVideoTexture===!0&&vt.getTransfer(E.emissiveMap.colorSpace)===Ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===sn,flipSided:E.side===bn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return je.vertexUv1s=l.has(1),je.vertexUv2s=l.has(2),je.vertexUv3s=l.has(3),l.clear(),je}function p(E){let T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)T.push(U),T.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(v(T,E),_(T,E),T.push(s.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function v(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function _(E,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),E.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),E.push(a.mask)}function y(E){let T=m[E.type],U;if(T){let B=Hi[T];U=Cn.clone(B.uniforms)}else U=E.uniforms;return U}function A(E,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new wM(s,T,E,r),u.push(U),h.set(T,U)),U}function S(E){if(--E.usedTimes===0){let T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),h.delete(E.cacheKey),E.destroy()}}function w(E){c.remove(E)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:D}}function CM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function PM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,x,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function a(h,d,f,m,x,g){let p=o(h,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,x,g){let p=o(h,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||PM),n.length>1&&n.sort(d||hm),i.length>1&&i.sort(d||hm)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function IM(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new fm,s.set(n,[o])):i>=r.length?(o=new fm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function DM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Ie};break;case"SpotLight":t={position:new L,direction:new L,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function LM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var NM=0;function UM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FM(s){let e=new DM,t=LM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,r=new Qe,o=new Qe;function a(l){let u=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,v=0,_=0,y=0,A=0,S=0,w=0;l.sort(UM);for(let E=0,T=l.length;E<T;E++){let U=l[E],B=U.color,z=U.intensity,J=U.distance,te=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===lr?te=U.shadow.map.texture:te=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)u+=B.r*z,h+=B.g*z,d+=B.b*z;else if(U.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(U.sh.coefficients[X],z);w++}else if(U.isDirectionalLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,ie=t.get(U);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,n.directionalShadow[f]=ie,n.directionalShadowMap[f]=te,n.directionalShadowMatrix[f]=U.shadow.matrix,v++}n.directional[f]=X,f++}else if(U.isSpotLight){let X=e.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(B).multiplyScalar(z),X.distance=J,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,n.spot[x]=X;let K=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,K.updateMatrices(U),U.castShadow&&S++),n.spotLightMatrix[x]=K.matrix,U.castShadow){let ie=t.get(U);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,n.spotShadow[x]=ie,n.spotShadowMap[x]=te,y++}x++}else if(U.isRectAreaLight){let X=e.get(U);X.color.copy(B).multiplyScalar(z),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),n.rectArea[g]=X,g++}else if(U.isPointLight){let X=e.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let K=U.shadow,ie=t.get(U);ie.shadowIntensity=K.intensity,ie.shadowBias=K.bias,ie.shadowNormalBias=K.normalBias,ie.shadowRadius=K.radius,ie.shadowMapSize=K.mapSize,ie.shadowCameraNear=K.camera.near,ie.shadowCameraFar=K.camera.far,n.pointShadow[m]=ie,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=U.shadow.matrix,_++}n.point[m]=X,m++}else if(U.isHemisphereLight){let X=e.get(U);X.skyColor.copy(U.color).multiplyScalar(z),X.groundColor.copy(U.groundColor).multiplyScalar(z),n.hemi[p]=X,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==x||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==v||D.numPointShadows!==_||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=y+A-S,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,D.directionalLength=f,D.pointLength=m,D.spotLength=x,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=v,D.numPointShadows=_,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=w,n.version=NM++)}function c(l,u){let h=0,d=0,f=0,m=0,x=0,g=u.matrixWorldInverse;for(let p=0,v=l.length;p<v;p++){let _=l[p];if(_.isDirectionalLight){let y=n.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),h++}else if(_.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let y=n.hemi[x];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function dm(s){let e=new FM(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function OM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new dm(s),e.set(i,[a])):r>=o.length?(a=new dm(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var BM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HM=`uniform sampler2D shadow_pass;
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
}`,zM=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],kM=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],pm=new Qe,Na=new L,af=new L;function VM(s,e,t){let n=new Qr,i=new de,r=new de,o=new Dt,a=new Ql,c=new ec,l={},u=t.maxTextureSize,h={[gi]:bn,[bn]:gi,[sn]:sn},d=new ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:BM,fragmentShader:HM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new wt;m.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ge(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let p=this.type;this.render=function(S,w,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;S.type===cp&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=ir);let E=s.getRenderTarget(),T=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),B=s.state;B.setBlending(un),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&w.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(te=>te.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,te=S.length;J<te;J++){let X=S[J],K=X.shadow;if(K===void 0){et("WebGLShadowMap:",X,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);let ie=K.getFrameExtents();if(i.multiply(ie),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ie.x),i.x=r.x*ie.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ie.y),i.y=r.y*ie.y,K.mapSize.y=r.y)),K.map===null||z===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ao){if(X.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new en(i.x,i.y,{format:lr,type:fn,minFilter:cn,magFilter:cn,generateMipmaps:!1}),K.map.texture.name=X.name+".shadowMap",K.map.depthTexture=new Ri(i.x,i.y,ti),K.map.depthTexture.name=X.name+".shadowMapDepth",K.map.depthTexture.format=Si,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt}else{X.isPointLight?(K.map=new Yo(i.x),K.map.depthTexture=new ql(i.x,vi)):(K.map=new en(i.x,i.y),K.map.depthTexture=new Ri(i.x,i.y,vi)),K.map.depthTexture.name=X.name+".shadowMap",K.map.depthTexture.format=Si;let Se=s.state.buffers.depth.getReversed();this.type===ir?(K.map.depthTexture.compareFunction=Se?uu:cu,K.map.depthTexture.minFilter=cn,K.map.depthTexture.magFilter=cn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Qt,K.map.depthTexture.magFilter=Qt)}K.camera.updateProjectionMatrix()}let _e=K.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<_e;Se++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(K.map),s.clear());let Te=K.getViewport(Se);o.set(r.x*Te.x,r.y*Te.y,r.x*Te.z,r.y*Te.w),B.viewport(o)}if(X.isPointLight){let Te=K.camera,Ue=K.matrix,ze=X.distance||Te.far;ze!==Te.far&&(Te.far=ze,Te.updateProjectionMatrix()),Na.setFromMatrixPosition(X.matrixWorld),Te.position.copy(Na),af.copy(Te.position),af.add(zM[Se]),Te.up.copy(kM[Se]),Te.lookAt(af),Te.updateMatrixWorld(),Ue.makeTranslation(-Na.x,-Na.y,-Na.z),pm.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),K._frustum.setFromProjectionMatrix(pm,Te.coordinateSystem,Te.reversedDepth)}else K.updateMatrices(X);n=K.getFrustum(),y(w,D,K.camera,X,this.type)}K.isPointLightShadow!==!0&&this.type===ao&&v(K,D),K.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(E,T,U)};function v(S,w){let D=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new en(i.x,i.y,{format:lr,type:fn})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(w,null,D,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(w,null,D,f,x,null)}function _(S,w,D,E){let T=null,U=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(U!==void 0)T=U;else if(T=D.isPointLight===!0?c:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=T.uuid,z=w.uuid,J=l[B];J===void 0&&(J={},l[B]=J);let te=J[z];te===void 0&&(te=T.clone(),J[z]=te,w.addEventListener("dispose",A)),T=te}if(T.visible=w.visible,T.wireframe=w.wireframe,E===ao?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:h[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){let B=s.properties.get(T);B.light=D}return T}function y(S,w,D,E,T){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&T===ao)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);let z=e.update(S),J=S.material;if(Array.isArray(J)){let te=z.groups;for(let X=0,K=te.length;X<K;X++){let ie=te[X],_e=J[ie.materialIndex];if(_e&&_e.visible){let Se=_(S,_e,E,T);S.onBeforeShadow(s,S,w,D,z,Se,ie),s.renderBufferDirect(D,null,z,Se,S,ie),S.onAfterShadow(s,S,w,D,z,Se,ie)}}}else if(J.visible){let te=_(S,J,E,T);S.onBeforeShadow(s,S,w,D,z,te,null),s.renderBufferDirect(D,null,z,te,S,null),S.onAfterShadow(s,S,w,D,z,te,null)}}let B=S.children;for(let z=0,J=B.length;z<J;z++)y(B[z],w,D,E,T)}function A(S){S.target.removeEventListener("dispose",A);for(let D in l){let E=l[D],T=S.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}var GM={[uc]:hc,[fc]:mc,[dc]:gc,[Vs]:pc,[hc]:uc,[mc]:fc,[gc]:dc,[pc]:Vs};function WM(s,e){function t(){let O=!1,Re=new Dt,fe=null,we=new Dt(0,0,0,0);return{setMask:function(Me){fe!==Me&&!O&&(s.colorMask(Me,Me,Me,Me),fe=Me)},setLocked:function(Me){O=Me},setClear:function(Me,he,Ae,Fe,je){je===!0&&(Me*=Fe,he*=Fe,Ae*=Fe),Re.set(Me,he,Ae,Fe),we.equals(Re)===!1&&(s.clearColor(Me,he,Ae,Fe),we.copy(Re))},reset:function(){O=!1,fe=null,we.set(-1,0,0,0)}}}function n(){let O=!1,Re=!1,fe=null,we=null,Me=null;return{setReversed:function(he){if(Re!==he){let Ae=e.get("EXT_clip_control");he?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Re=he;let Fe=Me;Me=null,this.setClear(Fe)}},getReversed:function(){return Re},setTest:function(he){he?q(s.DEPTH_TEST):V(s.DEPTH_TEST)},setMask:function(he){fe!==he&&!O&&(s.depthMask(he),fe=he)},setFunc:function(he){if(Re&&(he=GM[he]),we!==he){switch(he){case uc:s.depthFunc(s.NEVER);break;case hc:s.depthFunc(s.ALWAYS);break;case fc:s.depthFunc(s.LESS);break;case Vs:s.depthFunc(s.LEQUAL);break;case dc:s.depthFunc(s.EQUAL);break;case pc:s.depthFunc(s.GEQUAL);break;case mc:s.depthFunc(s.GREATER);break;case gc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=he}},setLocked:function(he){O=he},setClear:function(he){Me!==he&&(Re&&(he=1-he),s.clearDepth(he),Me=he)},reset:function(){O=!1,fe=null,we=null,Me=null,Re=!1}}}function i(){let O=!1,Re=null,fe=null,we=null,Me=null,he=null,Ae=null,Fe=null,je=null;return{setTest:function(He){O||(He?q(s.STENCIL_TEST):V(s.STENCIL_TEST))},setMask:function(He){Re!==He&&!O&&(s.stencilMask(He),Re=He)},setFunc:function(He,mt,ut){(fe!==He||we!==mt||Me!==ut)&&(s.stencilFunc(He,mt,ut),fe=He,we=mt,Me=ut)},setOp:function(He,mt,ut){(he!==He||Ae!==mt||Fe!==ut)&&(s.stencilOp(He,mt,ut),he=He,Ae=mt,Fe=ut)},setLocked:function(He){O=He},setClear:function(He){je!==He&&(s.clearStencil(He),je=He)},reset:function(){O=!1,Re=null,fe=null,we=null,Me=null,he=null,Ae=null,Fe=null,je=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,y=null,A=null,S=null,w=new Ie(0,0,0),D=0,E=!1,T=null,U=null,B=null,z=null,J=null,te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,K=0,ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ie)[1]),X=K>=1):ie.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),X=K>=2);let _e=null,Se={},Te=s.getParameter(s.SCISSOR_BOX),Ue=s.getParameter(s.VIEWPORT),ze=new Dt().fromArray(Te),Ke=new Dt().fromArray(Ue);function rt(O,Re,fe,we){let Me=new Uint8Array(4),he=s.createTexture();s.bindTexture(O,he),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<fe;Ae++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Re+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return he}let N={};N[s.TEXTURE_2D]=rt(s.TEXTURE_2D,s.TEXTURE_2D,1),N[s.TEXTURE_CUBE_MAP]=rt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[s.TEXTURE_2D_ARRAY]=rt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),N[s.TEXTURE_3D]=rt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(s.DEPTH_TEST),o.setFunc(Vs),ve(!1),De(Uh),q(s.CULL_FACE),re(un);function q(O){u[O]!==!0&&(s.enable(O),u[O]=!0)}function V(O){u[O]!==!1&&(s.disable(O),u[O]=!1)}function be(O,Re){return h[O]!==Re?(s.bindFramebuffer(O,Re),h[O]=Re,O===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=Re),O===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function ye(O,Re){let fe=f,we=!1;if(O){fe=d.get(Re),fe===void 0&&(fe=[],d.set(Re,fe));let Me=O.textures;if(fe.length!==Me.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let he=0,Ae=Me.length;he<Ae;he++)fe[he]=s.COLOR_ATTACHMENT0+he;fe.length=Me.length,we=!0}}else fe[0]!==s.BACK&&(fe[0]=s.BACK,we=!0);we&&s.drawBuffers(fe)}function Ne(O){return m!==O?(s.useProgram(O),m=O,!0):!1}let Ve={[Kn]:s.FUNC_ADD,[up]:s.FUNC_SUBTRACT,[hp]:s.FUNC_REVERSE_SUBTRACT};Ve[fp]=s.MIN,Ve[dp]=s.MAX;let Le={[sr]:s.ZERO,[pp]:s.ONE,[mp]:s.SRC_COLOR,[Ol]:s.SRC_ALPHA,[_p]:s.SRC_ALPHA_SATURATE,[ya]:s.DST_COLOR,[_a]:s.DST_ALPHA,[gp]:s.ONE_MINUS_SRC_COLOR,[Bl]:s.ONE_MINUS_SRC_ALPHA,[vp]:s.ONE_MINUS_DST_COLOR,[xp]:s.ONE_MINUS_DST_ALPHA,[yp]:s.CONSTANT_COLOR,[Mp]:s.ONE_MINUS_CONSTANT_COLOR,[bp]:s.CONSTANT_ALPHA,[Ep]:s.ONE_MINUS_CONSTANT_ALPHA};function re(O,Re,fe,we,Me,he,Ae,Fe,je,He){if(O===un){x===!0&&(V(s.BLEND),x=!1);return}if(x===!1&&(q(s.BLEND),x=!0),O!==cc){if(O!==g||He!==E){if((p!==Kn||y!==Kn)&&(s.blendEquation(s.FUNC_ADD),p=Kn,y=Kn),He)switch(O){case ks:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hn:s.blendFunc(s.ONE,s.ONE);break;case Fh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Oh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:at("WebGLState: Invalid blending: ",O);break}else switch(O){case ks:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Fh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",O);break}v=null,_=null,A=null,S=null,w.set(0,0,0),D=0,g=O,E=He}return}Me=Me||Re,he=he||fe,Ae=Ae||we,(Re!==p||Me!==y)&&(s.blendEquationSeparate(Ve[Re],Ve[Me]),p=Re,y=Me),(fe!==v||we!==_||he!==A||Ae!==S)&&(s.blendFuncSeparate(Le[fe],Le[we],Le[he],Le[Ae]),v=fe,_=we,A=he,S=Ae),(Fe.equals(w)===!1||je!==D)&&(s.blendColor(Fe.r,Fe.g,Fe.b,je),w.copy(Fe),D=je),g=O,E=!1}function Ee(O,Re){O.side===sn?V(s.CULL_FACE):q(s.CULL_FACE);let fe=O.side===bn;Re&&(fe=!fe),ve(fe),O.blending===ks&&O.transparent===!1?re(un):re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let we=O.stencilWrite;a.setTest(we),we&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),pe(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?q(s.SAMPLE_ALPHA_TO_COVERAGE):V(s.SAMPLE_ALPHA_TO_COVERAGE)}function ve(O){T!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),T=O)}function De(O){O!==ap?(q(s.CULL_FACE),O!==U&&(O===Uh?s.cullFace(s.BACK):O===lp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):V(s.CULL_FACE),U=O}function R(O){O!==B&&(X&&s.lineWidth(O),B=O)}function pe(O,Re,fe){O?(q(s.POLYGON_OFFSET_FILL),(z!==Re||J!==fe)&&(s.polygonOffset(Re,fe),z=Re,J=fe)):V(s.POLYGON_OFFSET_FILL)}function ae(O){O?q(s.SCISSOR_TEST):V(s.SCISSOR_TEST)}function ne(O){O===void 0&&(O=s.TEXTURE0+te-1),_e!==O&&(s.activeTexture(O),_e=O)}function se(O,Re,fe){fe===void 0&&(_e===null?fe=s.TEXTURE0+te-1:fe=_e);let we=Se[fe];we===void 0&&(we={type:void 0,texture:void 0},Se[fe]=we),(we.type!==O||we.texture!==Re)&&(_e!==fe&&(s.activeTexture(fe),_e=fe),s.bindTexture(O,Re||N[O]),we.type=O,we.texture=Re)}function C(){let O=Se[_e];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function Q(){try{s.texSubImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function me(){try{s.texSubImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function $(){try{s.compressedTexSubImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function k(){try{s.compressedTexSubImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function Z(){try{s.texStorage2D(...arguments)}catch(O){at("WebGLState:",O)}}function ue(){try{s.texStorage3D(...arguments)}catch(O){at("WebGLState:",O)}}function ke(){try{s.texImage2D(...arguments)}catch(O){at("WebGLState:",O)}}function xe(){try{s.texImage3D(...arguments)}catch(O){at("WebGLState:",O)}}function Ce(O){ze.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),ze.copy(O))}function Oe(O){Ke.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),Ke.copy(O))}function Xe(O,Re){let fe=l.get(Re);fe===void 0&&(fe=new WeakMap,l.set(Re,fe));let we=fe.get(O);we===void 0&&(we=s.getUniformBlockIndex(Re,O.name),fe.set(O,we))}function Pe(O,Re){let we=l.get(Re).get(O);c.get(Re)!==we&&(s.uniformBlockBinding(Re,we,O.__bindingPointIndex),c.set(Re,we))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},_e=null,Se={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,v=null,_=null,y=null,A=null,S=null,w=new Ie(0,0,0),D=0,E=!1,T=null,U=null,B=null,z=null,J=null,ze.set(0,0,s.canvas.width,s.canvas.height),Ke.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:q,disable:V,bindFramebuffer:be,drawBuffers:ye,useProgram:Ne,setBlending:re,setMaterial:Ee,setFlipSided:ve,setCullFace:De,setLineWidth:R,setPolygonOffset:pe,setScissorTest:ae,activeTexture:ne,bindTexture:se,unbindTexture:C,compressedTexImage2D:b,compressedTexImage3D:H,texImage2D:ke,texImage3D:xe,updateUBOMapping:Xe,uniformBlockBinding:Pe,texStorage2D:Z,texStorage3D:ue,texSubImage2D:Q,texSubImage3D:me,compressedTexSubImage2D:$,compressedTexSubImage3D:k,scissor:Ce,viewport:Oe,reset:ot}}function XM(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(C,b){return f?new OffscreenCanvas(C,b):qr("canvas")}function x(C,b,H){let Q=1,me=se(C);if((me.width>H||me.height>H)&&(Q=H/Math.max(me.width,me.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let $=Math.floor(Q*me.width),k=Math.floor(Q*me.height);h===void 0&&(h=m($,k));let Z=b?m($,k):h;return Z.width=$,Z.height=k,Z.getContext("2d").drawImage(C,0,0,$,k),et("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+$+"x"+k+")."),Z}else return"data"in C&&et("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),C;return C}function g(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(C,b,H,Q,me=!1){if(C!==null){if(s[C]!==void 0)return s[C];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=b;if(b===s.RED&&(H===s.FLOAT&&($=s.R32F),H===s.HALF_FLOAT&&($=s.R16F),H===s.UNSIGNED_BYTE&&($=s.R8)),b===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.R8UI),H===s.UNSIGNED_SHORT&&($=s.R16UI),H===s.UNSIGNED_INT&&($=s.R32UI),H===s.BYTE&&($=s.R8I),H===s.SHORT&&($=s.R16I),H===s.INT&&($=s.R32I)),b===s.RG&&(H===s.FLOAT&&($=s.RG32F),H===s.HALF_FLOAT&&($=s.RG16F),H===s.UNSIGNED_BYTE&&($=s.RG8)),b===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RG8UI),H===s.UNSIGNED_SHORT&&($=s.RG16UI),H===s.UNSIGNED_INT&&($=s.RG32UI),H===s.BYTE&&($=s.RG8I),H===s.SHORT&&($=s.RG16I),H===s.INT&&($=s.RG32I)),b===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGB8UI),H===s.UNSIGNED_SHORT&&($=s.RGB16UI),H===s.UNSIGNED_INT&&($=s.RGB32UI),H===s.BYTE&&($=s.RGB8I),H===s.SHORT&&($=s.RGB16I),H===s.INT&&($=s.RGB32I)),b===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&($=s.RGBA8UI),H===s.UNSIGNED_SHORT&&($=s.RGBA16UI),H===s.UNSIGNED_INT&&($=s.RGBA32UI),H===s.BYTE&&($=s.RGBA8I),H===s.SHORT&&($=s.RGBA16I),H===s.INT&&($=s.RGBA32I)),b===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),b===s.RGBA){let k=me?zo:vt.getTransfer(Q);H===s.FLOAT&&($=s.RGBA32F),H===s.HALF_FLOAT&&($=s.RGBA16F),H===s.UNSIGNED_BYTE&&($=k===Ct?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(C,b){let H;return C?b===null||b===vi||b===ws?H=s.DEPTH24_STENCIL8:b===ti?H=s.DEPTH32F_STENCIL8:b===co&&(H=s.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===vi||b===ws?H=s.DEPTH_COMPONENT24:b===ti?H=s.DEPTH_COMPONENT32F:b===co&&(H=s.DEPTH_COMPONENT16),H}function A(C,b){return g(C)===!0||C.isFramebufferTexture&&C.minFilter!==Qt&&C.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function S(C){let b=C.target;b.removeEventListener("dispose",S),D(b),b.isVideoTexture&&u.delete(b)}function w(C){let b=C.target;b.removeEventListener("dispose",w),T(b)}function D(C){let b=n.get(C);if(b.__webglInit===void 0)return;let H=C.source,Q=d.get(H);if(Q){let me=Q[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&E(C),Object.keys(Q).length===0&&d.delete(H)}n.remove(C)}function E(C){let b=n.get(C);s.deleteTexture(b.__webglTexture);let H=C.source,Q=d.get(H);delete Q[b.__cacheKey],o.memory.textures--}function T(C){let b=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let me=0;me<b.__webglFramebuffer[Q].length;me++)s.deleteFramebuffer(b.__webglFramebuffer[Q][me]);else s.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)s.deleteFramebuffer(b.__webglFramebuffer[Q]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let H=C.textures;for(let Q=0,me=H.length;Q<me;Q++){let $=n.get(H[Q]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(H[Q])}n.remove(C)}let U=0;function B(){U=0}function z(){let C=U;return C>=i.maxTextures&&et("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),U+=1,C}function J(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function te(C,b){let H=n.get(C);if(C.isVideoTexture&&ae(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let Q=C.image;if(Q===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{N(H,C,b);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+b)}function X(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){N(H,C,b);return}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+b)}function K(C,b){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){N(H,C,b);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+b)}function ie(C,b){let H=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&H.__version!==C.version){q(H,C,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+b)}let _e={[nn]:s.REPEAT,[oi]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},Se={[Qt]:s.NEAREST,[_c]:s.NEAREST_MIPMAP_NEAREST,[ar]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[lo]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},Te={[Ip]:s.NEVER,[Fp]:s.ALWAYS,[Dp]:s.LESS,[cu]:s.LEQUAL,[Lp]:s.EQUAL,[uu]:s.GEQUAL,[Np]:s.GREATER,[Up]:s.NOTEQUAL};function Ue(C,b){if(b.type===ti&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===cn||b.magFilter===lo||b.magFilter===ar||b.magFilter===ei||b.minFilter===cn||b.minFilter===lo||b.minFilter===ar||b.minFilter===ei)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,_e[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,_e[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,_e[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Se[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,Te[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Qt||b.minFilter!==ar&&b.minFilter!==ei||b.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ze(C,b){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",S));let Q=b.source,me=d.get(Q);me===void 0&&(me={},d.set(Q,me));let $=J(b);if($!==C.__cacheKey){me[$]===void 0&&(me[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,H=!0),me[$].usedTimes++;let k=me[C.__cacheKey];k!==void 0&&(me[C.__cacheKey].usedTimes--,k.usedTimes===0&&E(b)),C.__cacheKey=$,C.__webglTexture=me[$].texture}return H}function Ke(C,b,H){return Math.floor(Math.floor(C/H)/b)}function rt(C,b,H,Q){let $=C.updateRanges;if($.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,H,Q,b.data);else{$.sort((xe,Ce)=>xe.start-Ce.start);let k=0;for(let xe=1;xe<$.length;xe++){let Ce=$[k],Oe=$[xe],Xe=Ce.start+Ce.count,Pe=Ke(Oe.start,b.width,4),ot=Ke(Ce.start,b.width,4);Oe.start<=Xe+1&&Pe===ot&&Ke(Oe.start+Oe.count-1,b.width,4)===Pe?Ce.count=Math.max(Ce.count,Oe.start+Oe.count-Ce.start):(++k,$[k]=Oe)}$.length=k+1;let Z=s.getParameter(s.UNPACK_ROW_LENGTH),ue=s.getParameter(s.UNPACK_SKIP_PIXELS),ke=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let xe=0,Ce=$.length;xe<Ce;xe++){let Oe=$[xe],Xe=Math.floor(Oe.start/4),Pe=Math.ceil(Oe.count/4),ot=Xe%b.width,O=Math.floor(Xe/b.width),Re=Pe,fe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,O),t.texSubImage2D(s.TEXTURE_2D,0,ot,O,Re,fe,H,Q,b.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Z),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ue),s.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function N(C,b,H){let Q=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=s.TEXTURE_3D);let me=ze(C,b),$=b.source;t.bindTexture(Q,C.__webglTexture,s.TEXTURE0+H);let k=n.get($);if($.version!==k.__version||me===!0){t.activeTexture(s.TEXTURE0+H);let Z=vt.getPrimaries(vt.workingColorSpace),ue=b.colorSpace===ls?null:vt.getPrimaries(b.colorSpace),ke=b.colorSpace===ls||Z===ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let xe=x(b.image,!1,i.maxTextureSize);xe=ne(b,xe);let Ce=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),Xe=_(b.internalFormat,Ce,Oe,b.colorSpace,b.isVideoTexture);Ue(Q,b);let Pe,ot=b.mipmaps,O=b.isVideoTexture!==!0,Re=k.__version===void 0||me===!0,fe=$.dataReady,we=A(b,xe);if(b.isDepthTexture)Xe=y(b.format===Oi,b.type),Re&&(O?t.texStorage2D(s.TEXTURE_2D,1,Xe,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Ce,Oe,null));else if(b.isDataTexture)if(ot.length>0){O&&Re&&t.texStorage2D(s.TEXTURE_2D,we,Xe,ot[0].width,ot[0].height);for(let Me=0,he=ot.length;Me<he;Me++)Pe=ot[Me],O?fe&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ce,Oe,Pe.data):t.texImage2D(s.TEXTURE_2D,Me,Xe,Pe.width,Pe.height,0,Ce,Oe,Pe.data);b.generateMipmaps=!1}else O?(Re&&t.texStorage2D(s.TEXTURE_2D,we,Xe,xe.width,xe.height),fe&&rt(b,xe,Ce,Oe)):t.texImage2D(s.TEXTURE_2D,0,Xe,xe.width,xe.height,0,Ce,Oe,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){O&&Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Xe,ot[0].width,ot[0].height,xe.depth);for(let Me=0,he=ot.length;Me<he;Me++)if(Pe=ot[Me],b.format!==zn)if(Ce!==null)if(O){if(fe)if(b.layerUpdates.size>0){let Ae=ef(Pe.width,Pe.height,b.format,b.type);for(let Fe of b.layerUpdates){let je=Pe.data.subarray(Fe*Ae/Pe.data.BYTES_PER_ELEMENT,(Fe+1)*Ae/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,Fe,Pe.width,Pe.height,1,Ce,je)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,xe.depth,Ce,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Me,Xe,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?fe&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Me,0,0,0,Pe.width,Pe.height,xe.depth,Ce,Oe,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Me,Xe,Pe.width,Pe.height,xe.depth,0,Ce,Oe,Pe.data)}else{O&&Re&&t.texStorage2D(s.TEXTURE_2D,we,Xe,ot[0].width,ot[0].height);for(let Me=0,he=ot.length;Me<he;Me++)Pe=ot[Me],b.format!==zn?Ce!==null?O?fe&&t.compressedTexSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Me,Xe,Pe.width,Pe.height,0,Pe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?fe&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Pe.width,Pe.height,Ce,Oe,Pe.data):t.texImage2D(s.TEXTURE_2D,Me,Xe,Pe.width,Pe.height,0,Ce,Oe,Pe.data)}else if(b.isDataArrayTexture)if(O){if(Re&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,Xe,xe.width,xe.height,xe.depth),fe)if(b.layerUpdates.size>0){let Me=ef(xe.width,xe.height,b.format,b.type);for(let he of b.layerUpdates){let Ae=xe.data.subarray(he*Me/xe.data.BYTES_PER_ELEMENT,(he+1)*Me/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,xe.width,xe.height,1,Ce,Oe,Ae)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Oe,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,xe.width,xe.height,xe.depth,0,Ce,Oe,xe.data);else if(b.isData3DTexture)O?(Re&&t.texStorage3D(s.TEXTURE_3D,we,Xe,xe.width,xe.height,xe.depth),fe&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ce,Oe,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Xe,xe.width,xe.height,xe.depth,0,Ce,Oe,xe.data);else if(b.isFramebufferTexture){if(Re)if(O)t.texStorage2D(s.TEXTURE_2D,we,Xe,xe.width,xe.height);else{let Me=xe.width,he=xe.height;for(let Ae=0;Ae<we;Ae++)t.texImage2D(s.TEXTURE_2D,Ae,Xe,Me,he,0,Ce,Oe,null),Me>>=1,he>>=1}}else if(ot.length>0){if(O&&Re){let Me=se(ot[0]);t.texStorage2D(s.TEXTURE_2D,we,Xe,Me.width,Me.height)}for(let Me=0,he=ot.length;Me<he;Me++)Pe=ot[Me],O?fe&&t.texSubImage2D(s.TEXTURE_2D,Me,0,0,Ce,Oe,Pe):t.texImage2D(s.TEXTURE_2D,Me,Xe,Ce,Oe,Pe);b.generateMipmaps=!1}else if(O){if(Re){let Me=se(xe);t.texStorage2D(s.TEXTURE_2D,we,Xe,Me.width,Me.height)}fe&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Oe,xe)}else t.texImage2D(s.TEXTURE_2D,0,Xe,Ce,Oe,xe);g(b)&&p(Q),k.__version=$.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function q(C,b,H){if(b.image.length!==6)return;let Q=ze(C,b),me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+H);let $=n.get(me);if(me.version!==$.__version||Q===!0){t.activeTexture(s.TEXTURE0+H);let k=vt.getPrimaries(vt.workingColorSpace),Z=b.colorSpace===ls?null:vt.getPrimaries(b.colorSpace),ue=b.colorSpace===ls||k===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);let ke=b.isCompressedTexture||b.image[0].isCompressedTexture,xe=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let he=0;he<6;he++)!ke&&!xe?Ce[he]=x(b.image[he],!0,i.maxCubemapSize):Ce[he]=xe?b.image[he].image:b.image[he],Ce[he]=ne(b,Ce[he]);let Oe=Ce[0],Xe=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),ot=_(b.internalFormat,Xe,Pe,b.colorSpace),O=b.isVideoTexture!==!0,Re=$.__version===void 0||Q===!0,fe=me.dataReady,we=A(b,Oe);Ue(s.TEXTURE_CUBE_MAP,b);let Me;if(ke){O&&Re&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,ot,Oe.width,Oe.height);for(let he=0;he<6;he++){Me=Ce[he].mipmaps;for(let Ae=0;Ae<Me.length;Ae++){let Fe=Me[Ae];b.format!==zn?Xe!==null?O?fe&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Fe.width,Fe.height,Xe,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,ot,Fe.width,Fe.height,0,Fe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,0,0,Fe.width,Fe.height,Xe,Pe,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae,ot,Fe.width,Fe.height,0,Xe,Pe,Fe.data)}}}else{if(Me=b.mipmaps,O&&Re){Me.length>0&&we++;let he=se(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,we,ot,he.width,he.height)}for(let he=0;he<6;he++)if(xe){O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ce[he].width,Ce[he].height,Xe,Pe,Ce[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Ce[he].width,Ce[he].height,0,Xe,Pe,Ce[he].data);for(let Ae=0;Ae<Me.length;Ae++){let je=Me[Ae].image[he].image;O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,je.width,je.height,Xe,Pe,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,ot,je.width,je.height,0,Xe,Pe,je.data)}}else{O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Xe,Pe,Ce[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Xe,Pe,Ce[he]);for(let Ae=0;Ae<Me.length;Ae++){let Fe=Me[Ae];O?fe&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,0,0,Xe,Pe,Fe.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,Ae+1,ot,Xe,Pe,Fe.image[he])}}}g(b)&&p(s.TEXTURE_CUBE_MAP),$.__version=me.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function V(C,b,H,Q,me,$){let k=r.convert(H.format,H.colorSpace),Z=r.convert(H.type),ue=_(H.internalFormat,k,Z,H.colorSpace),ke=n.get(b),xe=n.get(H);if(xe.__renderTarget=b,!ke.__hasExternalTextures){let Ce=Math.max(1,b.width>>$),Oe=Math.max(1,b.height>>$);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,$,ue,Ce,Oe,b.depth,0,k,Z,null):t.texImage2D(me,$,ue,Ce,Oe,0,k,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),pe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,me,xe.__webglTexture,0,R(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,me,xe.__webglTexture,$),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(C,b,H){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){let Q=b.depthTexture,me=Q&&Q.isDepthTexture?Q.type:null,$=y(b.stencilBuffer,me),k=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;pe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(b),$,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(b),$,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,$,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,k,s.RENDERBUFFER,C)}else{let Q=b.textures;for(let me=0;me<Q.length;me++){let $=Q[me],k=r.convert($.format,$.colorSpace),Z=r.convert($.type),ue=_($.internalFormat,k,Z,$.colorSpace);pe(b)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,R(b),ue,b.width,b.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,R(b),ue,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ue,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(C,b,H){let Q=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let me=n.get(b.depthTexture);if(me.__renderTarget=b,(!me.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(me.__webglInit===void 0&&(me.__webglInit=!0,b.depthTexture.addEventListener("dispose",S)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,b.depthTexture);let ke=r.convert(b.depthTexture.format),xe=r.convert(b.depthTexture.type),Ce;b.depthTexture.format===Si?Ce=s.DEPTH_COMPONENT24:b.depthTexture.format===Oi&&(Ce=s.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ce,b.width,b.height,0,ke,xe,null)}}else te(b.depthTexture,0);let $=me.__webglTexture,k=R(b),Z=Q?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ue=b.depthTexture.format===Oi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Si)pe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,Z,$,0,k):s.framebufferTexture2D(s.FRAMEBUFFER,ue,Z,$,0);else if(b.depthTexture.format===Oi)pe(b)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,Z,$,0,k):s.framebufferTexture2D(s.FRAMEBUFFER,ue,Z,$,0);else throw new Error("Unknown depthTexture format")}function Ne(C){let b=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let Q=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){let me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",me)};Q.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=Q}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(H)for(let Q=0;Q<6;Q++)ye(b.__webglFramebuffer[Q],C,Q);else{let Q=C.texture.mipmaps;Q&&Q.length>0?ye(b.__webglFramebuffer[0],C,0):ye(b.__webglFramebuffer,C,0)}else if(H){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=s.createRenderbuffer(),be(b.__webglDepthbuffer[Q],C,!1);else{let me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,$)}}else{let Q=C.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),be(b.__webglDepthbuffer,C,!1);else{let me=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,$)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(C,b,H){let Q=n.get(C);b!==void 0&&V(Q.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ne(C)}function Le(C){let b=C.texture,H=n.get(C),Q=n.get(b);C.addEventListener("dispose",w);let me=C.textures,$=C.isWebGLCubeRenderTarget===!0,k=me.length>1;if(k||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=b.version,o.memory.textures++),$){H.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[Z]=[];for(let ue=0;ue<b.mipmaps.length;ue++)H.__webglFramebuffer[Z][ue]=s.createFramebuffer()}else H.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let Z=0;Z<b.mipmaps.length;Z++)H.__webglFramebuffer[Z]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(k)for(let Z=0,ue=me.length;Z<ue;Z++){let ke=n.get(me[Z]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&pe(C)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Z=0;Z<me.length;Z++){let ue=me[Z];H.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Z]);let ke=r.convert(ue.format,ue.colorSpace),xe=r.convert(ue.type),Ce=_(ue.internalFormat,ke,xe,ue.colorSpace,C.isXRRenderTarget===!0),Oe=R(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Oe,Ce,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,H.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),be(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),Ue(s.TEXTURE_CUBE_MAP,b);for(let Z=0;Z<6;Z++)if(b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)V(H.__webglFramebuffer[Z][ue],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ue);else V(H.__webglFramebuffer[Z],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);g(b)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(k){for(let Z=0,ue=me.length;Z<ue;Z++){let ke=me[Z],xe=n.get(ke),Ce=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Ce=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,xe.__webglTexture),Ue(Ce,ke),V(H.__webglFramebuffer,C,ke,s.COLOR_ATTACHMENT0+Z,Ce,0),g(ke)&&p(Ce)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,Q.__webglTexture),Ue(Z,b),b.mipmaps&&b.mipmaps.length>0)for(let ue=0;ue<b.mipmaps.length;ue++)V(H.__webglFramebuffer[ue],C,b,s.COLOR_ATTACHMENT0,Z,ue);else V(H.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,Z,0);g(b)&&p(Z),t.unbindTexture()}C.depthBuffer&&Ne(C)}function re(C){let b=C.textures;for(let H=0,Q=b.length;H<Q;H++){let me=b[H];if(g(me)){let $=v(C),k=n.get(me).__webglTexture;t.bindTexture($,k),p($),t.unbindTexture()}}}let Ee=[],ve=[];function De(C){if(C.samples>0){if(pe(C)===!1){let b=C.textures,H=C.width,Q=C.height,me=s.COLOR_BUFFER_BIT,$=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,k=n.get(C),Z=b.length>1;if(Z)for(let ke=0;ke<b.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,k.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer);let ue=C.texture.mipmaps;ue&&ue.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,k.__webglColorRenderbuffer[ke]);let xe=n.get(b[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,H,Q,0,0,H,Q,me,s.NEAREST),c===!0&&(Ee.length=0,ve.length=0,Ee.push(s.COLOR_ATTACHMENT0+ke),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ee.push($),ve.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ve)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let ke=0;ke<b.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,k.__webglColorRenderbuffer[ke]);let xe=n.get(b[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,k.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){let b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function R(C){return Math.min(i.maxSamples,C.samples)}function pe(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ae(C){let b=o.render.frame;u.get(C)!==b&&(u.set(C,b),C.update())}function ne(C,b){let H=C.colorSpace,Q=C.format,me=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==An&&H!==ls&&(vt.getTransfer(H)===Ct?(Q!==zn||me!==Un)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",H)),b}function se(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.setTexture2D=te,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=ie,this.rebindTextures=Ve,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=V,this.useMultisampledRTT=pe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qM(s,e){function t(n,i=ls){let r,o=vt.getTransfer(i);if(n===Un)return s.UNSIGNED_BYTE;if(n===Mc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===bc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Vh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Gh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===zh)return s.BYTE;if(n===kh)return s.SHORT;if(n===co)return s.UNSIGNED_SHORT;if(n===yc)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===ti)return s.FLOAT;if(n===fn)return s.HALF_FLOAT;if(n===Wh)return s.ALPHA;if(n===Xh)return s.RGB;if(n===zn)return s.RGBA;if(n===Si)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===Ec)return s.RED;if(n===Sc)return s.RED_INTEGER;if(n===lr)return s.RG;if(n===Tc)return s.RG_INTEGER;if(n===wc)return s.RGBA_INTEGER;if(n===Ra||n===Ca||n===Pa||n===Ia)if(o===Ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===Rc||n===Cc||n===Pc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ac)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Cc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ic||n===Dc||n===Lc||n===Nc||n===Uc||n===Fc||n===Oc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ic||n===Dc)return o===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Nc)return r.COMPRESSED_R11_EAC;if(n===Uc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Fc)return r.COMPRESSED_RG11_EAC;if(n===Oc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Bc||n===Hc||n===zc||n===kc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===Zc||n===Kc||n===$c||n===Jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jc)return o===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===jc||n===Qc||n===eu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===jc)return o===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===eu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tu||n===nu||n===iu||n===su)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===tu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===iu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===su)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var YM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`,mf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jo(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ht({vertexShader:YM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new Ft(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},gf=class extends Ti{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new mf,p={},v=t.getContextAttributes(),_=null,y=null,A=[],S=[],w=new de,D=null,E=new jt;E.viewport=new Dt;let T=new jt;T.viewport=new Dt;let U=[E,T],B=new oc,z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let q=A[N];return q===void 0&&(q=new Jr,A[N]=q),q.getTargetRaySpace()},this.getControllerGrip=function(N){let q=A[N];return q===void 0&&(q=new Jr,A[N]=q),q.getGripSpace()},this.getHand=function(N){let q=A[N];return q===void 0&&(q=new Jr,A[N]=q),q.getHandSpace()};function te(N){let q=S.indexOf(N.inputSource);if(q===-1)return;let V=A[q];V!==void 0&&(V.update(N.inputSource,N.frame,l||o),V.dispatchEvent({type:N.type,data:N.inputSource}))}function X(){i.removeEventListener("select",te),i.removeEventListener("selectstart",te),i.removeEventListener("selectend",te),i.removeEventListener("squeeze",te),i.removeEventListener("squeezestart",te),i.removeEventListener("squeezeend",te),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",K);for(let N=0;N<A.length;N++){let q=S[N];q!==null&&(S[N]=null,A[N].disconnect(q))}z=null,J=null,g.reset();for(let N in p)delete p[N];e.setRenderTarget(_),f=null,d=null,h=null,i=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(N){l=N},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",te),i.addEventListener("selectstart",te),i.addEventListener("selectend",te),i.addEventListener("squeeze",te),i.addEventListener("squeezestart",te),i.addEventListener("squeezeend",te),i.addEventListener("end",X),i.addEventListener("inputsourceschange",K),v.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,be=null,ye=null;v.depth&&(ye=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=v.stencil?Oi:Si,be=v.stencil?ws:vi);let Ne={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ne),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new en(d.textureWidth,d.textureHeight,{format:zn,type:Un,depthTexture:new Ri(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let V={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,V),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new en(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(N){for(let q=0;q<N.removed.length;q++){let V=N.removed[q],be=S.indexOf(V);be>=0&&(S[be]=null,A[be].disconnect(V))}for(let q=0;q<N.added.length;q++){let V=N.added[q],be=S.indexOf(V);if(be===-1){for(let Ne=0;Ne<A.length;Ne++)if(Ne>=S.length){S.push(V),be=Ne;break}else if(S[Ne]===null){S[Ne]=V,be=Ne;break}if(be===-1)break}let ye=A[be];ye&&ye.connect(V)}}let ie=new L,_e=new L;function Se(N,q,V){ie.setFromMatrixPosition(q.matrixWorld),_e.setFromMatrixPosition(V.matrixWorld);let be=ie.distanceTo(_e),ye=q.projectionMatrix.elements,Ne=V.projectionMatrix.elements,Ve=ye[14]/(ye[10]-1),Le=ye[14]/(ye[10]+1),re=(ye[9]+1)/ye[5],Ee=(ye[9]-1)/ye[5],ve=(ye[8]-1)/ye[0],De=(Ne[8]+1)/Ne[0],R=Ve*ve,pe=Ve*De,ae=be/(-ve+De),ne=ae*-ve;if(q.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ne),N.translateZ(ae),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),ye[10]===-1)N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let se=Ve+ae,C=Le+ae,b=R-ne,H=pe+(be-ne),Q=re*Le/C*se,me=Ee*Le/C*se;N.projectionMatrix.makePerspective(b,H,Q,me,se,C),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Te(N,q){q===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(q.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;let q=N.near,V=N.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(V=g.depthFar)),B.near=T.near=E.near=q,B.far=T.far=E.far=V,(z!==B.near||J!==B.far)&&(i.updateRenderState({depthNear:B.near,depthFar:B.far}),z=B.near,J=B.far),B.layers.mask=N.layers.mask|6,E.layers.mask=B.layers.mask&3,T.layers.mask=B.layers.mask&5;let be=N.parent,ye=B.cameras;Te(B,be);for(let Ne=0;Ne<ye.length;Ne++)Te(ye[Ne],be);ye.length===2?Se(B,E,T):B.projectionMatrix.copy(E.projectionMatrix),Ue(N,B,be)};function Ue(N,q,V){V===null?N.matrix.copy(q.matrixWorld):(N.matrix.copy(V.matrixWorld),N.matrix.invert(),N.matrix.multiply(q.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(q.projectionMatrix),N.projectionMatrixInverse.copy(q.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Xs*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(N){c=N,d!==null&&(d.fixedFoveation=N),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=N)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(B)},this.getCameraTexture=function(N){return p[N]};let ze=null;function Ke(N,q){if(u=q.getViewerPose(l||o),m=q,u!==null){let V=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let be=!1;V.length!==B.cameras.length&&(B.cameras.length=0,be=!0);for(let Le=0;Le<V.length;Le++){let re=V[Le],Ee=null;if(f!==null)Ee=f.getViewport(re);else{let De=h.getViewSubImage(d,re);Ee=De.viewport,Le===0&&(e.setRenderTargetTextures(y,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(y))}let ve=U[Le];ve===void 0&&(ve=new jt,ve.layers.enable(Le),ve.viewport=new Dt,U[Le]=ve),ve.matrix.fromArray(re.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(re.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),Le===0&&(B.matrix.copy(ve.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),be===!0&&B.cameras.push(ve)}let ye=i.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let Le=h.getDepthInformation(V[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,i.renderState)}if(ye&&ye.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let Le=0;Le<V.length;Le++){let re=V[Le].camera;if(re){let Ee=p[re];Ee||(Ee=new Jo,p[re]=Ee);let ve=h.getCameraImage(re);Ee.sourceTexture=ve}}}}for(let V=0;V<A.length;V++){let be=S[V],ye=A[V];be!==null&&ye!==void 0&&ye.update(be,q,l||o)}ze&&ze(N,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),m=null}let rt=new mm;rt.setAnimationLoop(Ke),this.setAnimationLoop=function(N){ze=N},this.dispose=function(){}}},hr=new Jn,KM=new Qe;function $M(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$h(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,v,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===bn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===bn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),_=v.envMap,y=v.envMapRotation;_&&(g.envMap.value=_,hr.copy(y),hr.x*=-1,hr.y*=-1,hr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),g.envMapRotation.value.setFromMatrix4(KM.makeRotationFromEuler(hr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,v,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===bn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JM(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){let y=_.program;n.uniformBlockBinding(v,y)}function l(v,_){let y=i[v.id];y===void 0&&(m(v),y=u(v),i[v.id]=y,v.addEventListener("dispose",g));let A=_.program;n.updateUBOMapping(v,A);let S=e.render.frame;r[v.id]!==S&&(d(v),r[v.id]=S)}function u(v){let _=h();v.__bindingPointIndex=_;let y=s.createBuffer(),A=v.__size,S=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,A,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let _=i[v.id],y=v.uniforms,A=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,w=y.length;S<w;S++){let D=Array.isArray(y[S])?y[S]:[y[S]];for(let E=0,T=D.length;E<T;E++){let U=D[E];if(f(U,S,E,A)===!0){let B=U.__offset,z=Array.isArray(U.value)?U.value:[U.value],J=0;for(let te=0;te<z.length;te++){let X=z[te],K=x(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,B+J,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,J),J+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,_,y,A){let S=v.value,w=_+"_"+y;if(A[w]===void 0)return typeof S=="number"||typeof S=="boolean"?A[w]=S:A[w]=S.clone(),!0;{let D=A[w];if(typeof S=="number"||typeof S=="boolean"){if(D!==S)return A[w]=S,!0}else if(D.equals(S)===!1)return D.copy(S),!0}return!1}function m(v){let _=v.uniforms,y=0,A=16;for(let w=0,D=_.length;w<D;w++){let E=Array.isArray(_[w])?_[w]:[_[w]];for(let T=0,U=E.length;T<U;T++){let B=E[T],z=Array.isArray(B.value)?B.value:[B.value];for(let J=0,te=z.length;J<te;J++){let X=z[J],K=x(X),ie=y%A,_e=ie%K.boundary,Se=ie+_e;y+=_e,Se!==0&&A-Se<K.storage&&(y+=A-Se),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=K.storage}}}let S=y%A;return S>0&&(y+=A-S),v.__size=y,v.__cache={},this}function x(v){let _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",v),_}function g(v){let _=v.target;_.removeEventListener("dispose",g);let y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var jM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bi=null;function QM(){return Bi===null&&(Bi=new Ai(jM,16,16,lr,fn),Bi.name="DFG_LUT",Bi.minFilter=cn,Bi.magFilter=cn,Bi.wrapS=oi,Bi.wrapT=oi,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}var pu=class{constructor(e={}){let{canvas:t=Op(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Un}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([wc,Tc,Sc]),p=new Set([Un,vi,co,ws,Mc,bc]),v=new Uint32Array(4),_=new Int32Array(4),y=null,A=null,S=[],w=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,T=!1;this._outputColorSpace=Vt;let U=0,B=0,z=null,J=-1,te=null,X=new Dt,K=new Dt,ie=null,_e=new Ie(0),Se=0,Te=t.width,Ue=t.height,ze=1,Ke=null,rt=null,N=new Dt(0,0,Te,Ue),q=new Dt(0,0,Te,Ue),V=!1,be=new Qr,ye=!1,Ne=!1,Ve=new Qe,Le=new L,re=new Dt,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function De(){return z===null?ze:1}let R=n;function pe(P,Y){return t.getContext(P,Y)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",He,!1),R===null){let Y="webgl2";if(R=pe(Y,P),R===null)throw pe(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw at("WebGLRenderer: "+P.message),P}let ae,ne,se,C,b,H,Q,me,$,k,Z,ue,ke,xe,Ce,Oe,Xe,Pe,ot,O,Re,fe,we,Me;function he(){ae=new oy(R),ae.init(),fe=new qM(R,ae),ne=new J_(R,ae,e,fe),se=new WM(R,ae),ne.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),C=new cy(R),b=new CM,H=new XM(R,ae,se,b,ne,fe,C),Q=new Q_(E),me=new ry(E),$=new dx(R),we=new K_(R,$),k=new ay(R,$,C,we),Z=new hy(R,k,$,C),ot=new uy(R,ne,H),Oe=new j_(b),ue=new RM(E,Q,me,ae,ne,we,Oe),ke=new $M(E,b),xe=new IM,Ce=new OM(ae),Pe=new Z_(E,Q,me,se,Z,m,c),Xe=new VM(E,Z,ne),Me=new JM(R,C,ne,se),O=new $_(R,ae,C),Re=new ly(R,ae,C),C.programs=ue.programs,E.capabilities=ne,E.extensions=ae,E.properties=b,E.renderLists=xe,E.shadowMap=Xe,E.state=se,E.info=C}he(),x!==Un&&(D=new dy(x,t.width,t.height,i,r));let Ae=new gf(E,R);this.xr=Ae,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let P=ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ze},this.setPixelRatio=function(P){P!==void 0&&(ze=P,this.setSize(Te,Ue,!1))},this.getSize=function(P){return P.set(Te,Ue)},this.setSize=function(P,Y,le=!0){if(Ae.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=P,Ue=Y,t.width=Math.floor(P*ze),t.height=Math.floor(Y*ze),le===!0&&(t.style.width=P+"px",t.style.height=Y+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(Te*ze,Ue*ze).floor()},this.setDrawingBufferSize=function(P,Y,le){Te=P,Ue=Y,ze=le,t.width=Math.floor(P*le),t.height=Math.floor(Y*le),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(x===Un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(X)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,Y,le,oe){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,Y,le,oe),se.viewport(X.copy(N).multiplyScalar(ze).round())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,Y,le,oe){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,Y,le,oe),se.scissor(K.copy(q).multiplyScalar(ze).round())},this.getScissorTest=function(){return V},this.setScissorTest=function(P){se.setScissorTest(V=P)},this.setOpaqueSort=function(P){Ke=P},this.setTransparentSort=function(P){rt=P},this.getClearColor=function(P){return P.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,le=!0){let oe=0;if(P){let j=!1;if(z!==null){let Be=z.texture.format;j=g.has(Be)}if(j){let Be=z.texture.type,Ze=p.has(Be),qe=Pe.getClearColor(),$e=Pe.getClearAlpha(),Je=qe.r,lt=qe.g,st=qe.b;Ze?(v[0]=Je,v[1]=lt,v[2]=st,v[3]=$e,R.clearBufferuiv(R.COLOR,0,v)):(_[0]=Je,_[1]=lt,_[2]=st,_[3]=$e,R.clearBufferiv(R.COLOR,0,_))}else oe|=R.COLOR_BUFFER_BIT}Y&&(oe|=R.DEPTH_BUFFER_BIT),le&&(oe|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",He,!1),Pe.dispose(),xe.dispose(),Ce.dispose(),b.dispose(),Q.dispose(),me.dispose(),Z.dispose(),we.dispose(),Me.dispose(),ue.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",En),Ae.removeEventListener("sessionend",qn),on.stop()};function Fe(P){P.preventDefault(),Vo("WebGLRenderer: Context Lost."),T=!0}function je(){Vo("WebGLRenderer: Context Restored."),T=!1;let P=C.autoReset,Y=Xe.enabled,le=Xe.autoUpdate,oe=Xe.needsUpdate,j=Xe.type;he(),C.autoReset=P,Xe.enabled=Y,Xe.autoUpdate=le,Xe.needsUpdate=oe,Xe.type=j}function He(P){at("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function mt(P){let Y=P.target;Y.removeEventListener("dispose",mt),ut(Y)}function ut(P){At(P),b.remove(P)}function At(P){let Y=b.get(P).programs;Y!==void 0&&(Y.forEach(function(le){ue.releaseProgram(le)}),P.isShaderMaterial&&ue.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,le,oe,j,Be){Y===null&&(Y=Ee);let Ze=j.isMesh&&j.matrixWorld.determinant()<0,qe=$a(P,Y,le,oe,j);se.setMaterial(oe,Ze);let $e=le.index,Je=1;if(oe.wireframe===!0){if($e=k.getWireframeAttribute(le),$e===void 0)return;Je=2}let lt=le.drawRange,st=le.attributes.position,ft=lt.start*Je,Pt=(lt.start+lt.count)*Je;Be!==null&&(ft=Math.max(ft,Be.start*Je),Pt=Math.min(Pt,(Be.start+Be.count)*Je)),$e!==null?(ft=Math.max(ft,0),Pt=Math.min(Pt,$e.count)):st!=null&&(ft=Math.max(ft,0),Pt=Math.min(Pt,st.count));let Xt=Pt-ft;if(Xt<0||Xt===1/0)return;we.setup(j,oe,qe,le,$e);let Zt,It=O;if($e!==null&&(Zt=$.get($e),It=Re,It.setIndex(Zt)),j.isMesh)oe.wireframe===!0?(se.setLineWidth(oe.wireframeLinewidth*De()),It.setMode(R.LINES)):It.setMode(R.TRIANGLES);else if(j.isLine){let nt=oe.linewidth;nt===void 0&&(nt=1),se.setLineWidth(nt*De()),j.isLineSegments?It.setMode(R.LINES):j.isLineLoop?It.setMode(R.LINE_LOOP):It.setMode(R.LINE_STRIP)}else j.isPoints?It.setMode(R.POINTS):j.isSprite&&It.setMode(R.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)Zr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),It.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))It.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let nt=j._multiDrawStarts,Rt=j._multiDrawCounts,bt=j._multiDrawCount,Pn=$e?$.get($e).bytesPerElement:1,Wi=b.get(oe).currentProgram.getUniforms();for(let Bn=0;Bn<bt;Bn++)Wi.setValue(R,"_gl_DrawID",Bn),It.render(nt[Bn]/Pn,Rt[Bn])}else if(j.isInstancedMesh)It.renderInstances(ft,Xt,j.count);else if(le.isInstancedBufferGeometry){let nt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Rt=Math.min(le.instanceCount,nt);It.renderInstances(ft,Xt,Rt)}else It.render(ft,Xt)};function Nt(P,Y,le){P.transparent===!0&&P.side===sn&&P.forceSinglePass===!1?(P.side=bn,P.needsUpdate=!0,hs(P,Y,le),P.side=gi,P.needsUpdate=!0,hs(P,Y,le),P.side=sn):hs(P,Y,le)}this.compile=function(P,Y,le=null){le===null&&(le=P),A=Ce.get(le),A.init(Y),w.push(A),le.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),P!==le&&P.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights();let oe=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Be=j.material;if(Be)if(Array.isArray(Be))for(let Ze=0;Ze<Be.length;Ze++){let qe=Be[Ze];Nt(qe,le,j),oe.add(qe)}else Nt(Be,le,j),oe.add(Be)}),A=w.pop(),oe},this.compileAsync=function(P,Y,le=null){let oe=this.compile(P,Y,le);return new Promise(j=>{function Be(){if(oe.forEach(function(Ze){b.get(Ze).currentProgram.isReady()&&oe.delete(Ze)}),oe.size===0){j(P);return}setTimeout(Be,10)}ae.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let _t=null;function Yt(P){_t&&_t(P)}function En(){on.stop()}function qn(){on.start()}let on=new mm;on.setAnimationLoop(Yt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(P){_t=P,Ae.setAnimationLoop(P),P===null?on.stop():on.start()},Ae.addEventListener("sessionstart",En),Ae.addEventListener("sessionend",qn),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;let le=Ae.enabled===!0&&Ae.isPresenting===!0,oe=D!==null&&(z===null||le)&&D.begin(E,z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(Y),Y=Ae.getCamera()),P.isScene===!0&&P.onBeforeRender(E,P,Y,z),A=Ce.get(P,w.length),A.init(Y),w.push(A),Ve.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),be.setFromProjectionMatrix(Ve,mi,Y.reversedDepth),Ne=this.localClippingEnabled,ye=Oe.init(this.clippingPlanes,Ne),y=xe.get(P,S.length),y.init(),S.push(y),Ae.enabled===!0&&Ae.isPresenting===!0){let Ze=E.xr.getDepthSensingMesh();Ze!==null&&yi(Ze,Y,-1/0,E.sortObjects)}yi(P,Y,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(Ke,rt),ve=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,ve&&Pe.addToRenderList(y,P),this.info.render.frame++,ye===!0&&Oe.beginShadows();let j=A.state.shadowsArray;if(Xe.render(j,P,Y),ye===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&D.hasRenderPass())===!1){let Ze=y.opaque,qe=y.transmissive;if(A.setupLights(),Y.isArrayCamera){let $e=Y.cameras;if(qe.length>0)for(let Je=0,lt=$e.length;Je<lt;Je++){let st=$e[Je];Ka(Ze,qe,P,st)}ve&&Pe.render(P);for(let Je=0,lt=$e.length;Je<lt;Je++){let st=$e[Je];Za(y,P,st,st.viewport)}}else qe.length>0&&Ka(Ze,qe,P,Y),ve&&Pe.render(P),Za(y,P,Y)}z!==null&&B===0&&(H.updateMultisampleRenderTarget(z),H.updateRenderTargetMipmap(z)),oe&&D.end(E),P.isScene===!0&&P.onAfterRender(E,P,Y),we.resetDefaultState(),J=-1,te=null,w.pop(),w.length>0?(A=w[w.length-1],ye===!0&&Oe.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,S.pop(),S.length>0?y=S[S.length-1]:y=null};function yi(P,Y,le,oe){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||be.intersectsSprite(P)){oe&&re.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ve);let Ze=Z.update(P),qe=P.material;qe.visible&&y.push(P,Ze,qe,le,re.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||be.intersectsObject(P))){let Ze=Z.update(P),qe=P.material;if(oe&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),re.copy(P.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),re.copy(Ze.boundingSphere.center)),re.applyMatrix4(P.matrixWorld).applyMatrix4(Ve)),Array.isArray(qe)){let $e=Ze.groups;for(let Je=0,lt=$e.length;Je<lt;Je++){let st=$e[Je],ft=qe[st.materialIndex];ft&&ft.visible&&y.push(P,Ze,ft,le,re.z,st)}}else qe.visible&&y.push(P,Ze,qe,le,re.z,null)}}let Be=P.children;for(let Ze=0,qe=Be.length;Ze<qe;Ze++)yi(Be[Ze],Y,le,oe)}function Za(P,Y,le,oe){let{opaque:j,transmissive:Be,transparent:Ze}=P;A.setupLightsView(le),ye===!0&&Oe.setGlobalState(E.clippingPlanes,le),oe&&se.viewport(X.copy(oe)),j.length>0&&Is(j,Y,le),Be.length>0&&Is(Be,Y,le),Ze.length>0&&Is(Ze,Y,le),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function Ka(P,Y,le,oe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[oe.id]===void 0){let ft=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[oe.id]=new en(1,1,{generateMipmaps:!0,type:ft?fn:Un,minFilter:ei,samples:ne.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}let Be=A.state.transmissionRenderTarget[oe.id],Ze=oe.viewport||X;Be.setSize(Ze.z*E.transmissionResolutionScale,Ze.w*E.transmissionResolutionScale);let qe=E.getRenderTarget(),$e=E.getActiveCubeFace(),Je=E.getActiveMipmapLevel();E.setRenderTarget(Be),E.getClearColor(_e),Se=E.getClearAlpha(),Se<1&&E.setClearColor(16777215,.5),E.clear(),ve&&Pe.render(le);let lt=E.toneMapping;E.toneMapping=xi;let st=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),A.setupLightsView(oe),ye===!0&&Oe.setGlobalState(E.clippingPlanes,oe),Is(P,le,oe),H.updateMultisampleRenderTarget(Be),H.updateRenderTargetMipmap(Be),ae.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Pt=0,Xt=Y.length;Pt<Xt;Pt++){let Zt=Y[Pt],{object:It,geometry:nt,material:Rt,group:bt}=Zt;if(Rt.side===sn&&It.layers.test(oe.layers)){let Pn=Rt.side;Rt.side=bn,Rt.needsUpdate=!0,vr(It,le,oe,nt,Rt,bt),Rt.side=Pn,Rt.needsUpdate=!0,ft=!0}}ft===!0&&(H.updateMultisampleRenderTarget(Be),H.updateRenderTargetMipmap(Be))}E.setRenderTarget(qe,$e,Je),E.setClearColor(_e,Se),st!==void 0&&(oe.viewport=st),E.toneMapping=lt}function Is(P,Y,le){let oe=Y.isScene===!0?Y.overrideMaterial:null;for(let j=0,Be=P.length;j<Be;j++){let Ze=P[j],{object:qe,geometry:$e,group:Je}=Ze,lt=Ze.material;lt.allowOverride===!0&&oe!==null&&(lt=oe),qe.layers.test(le.layers)&&vr(qe,Y,le,$e,lt,Je)}}function vr(P,Y,le,oe,j,Be){P.onBeforeRender(E,Y,le,oe,j,Be),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(E,Y,le,oe,P,Be),j.transparent===!0&&j.side===sn&&j.forceSinglePass===!1?(j.side=bn,j.needsUpdate=!0,E.renderBufferDirect(le,Y,oe,j,P,Be),j.side=gi,j.needsUpdate=!0,E.renderBufferDirect(le,Y,oe,j,P,Be),j.side=sn):E.renderBufferDirect(le,Y,oe,j,P,Be),P.onAfterRender(E,Y,le,oe,j,Be)}function hs(P,Y,le){Y.isScene!==!0&&(Y=Ee);let oe=b.get(P),j=A.state.lights,Be=A.state.shadowsArray,Ze=j.state.version,qe=ue.getParameters(P,j.state,Be,Y,le),$e=ue.getProgramCacheKey(qe),Je=oe.programs;oe.environment=P.isMeshStandardMaterial?Y.environment:null,oe.fog=Y.fog,oe.envMap=(P.isMeshStandardMaterial?me:Q).get(P.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Je===void 0&&(P.addEventListener("dispose",mt),Je=new Map,oe.programs=Je);let lt=Je.get($e);if(lt!==void 0){if(oe.currentProgram===lt&&oe.lightsStateVersion===Ze)return Ds(P,qe),lt}else qe.uniforms=ue.getUniforms(P),P.onBeforeCompile(qe,E),lt=ue.acquireProgram(qe,$e),Je.set($e,lt),oe.uniforms=qe.uniforms;let st=oe.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(st.clippingPlanes=Oe.uniform),Ds(P,qe),oe.needsLights=_o(P),oe.lightsStateVersion=Ze,oe.needsLights&&(st.ambientLightColor.value=j.state.ambient,st.lightProbe.value=j.state.probe,st.directionalLights.value=j.state.directional,st.directionalLightShadows.value=j.state.directionalShadow,st.spotLights.value=j.state.spot,st.spotLightShadows.value=j.state.spotShadow,st.rectAreaLights.value=j.state.rectArea,st.ltc_1.value=j.state.rectAreaLTC1,st.ltc_2.value=j.state.rectAreaLTC2,st.pointLights.value=j.state.point,st.pointLightShadows.value=j.state.pointShadow,st.hemisphereLights.value=j.state.hemi,st.directionalShadowMap.value=j.state.directionalShadowMap,st.directionalShadowMatrix.value=j.state.directionalShadowMatrix,st.spotShadowMap.value=j.state.spotShadowMap,st.spotLightMatrix.value=j.state.spotLightMatrix,st.spotLightMap.value=j.state.spotLightMap,st.pointShadowMap.value=j.state.pointShadowMap,st.pointShadowMatrix.value=j.state.pointShadowMatrix),oe.currentProgram=lt,oe.uniformsList=null,lt}function _r(P){if(P.uniformsList===null){let Y=P.currentProgram.getUniforms();P.uniformsList=fo.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function Ds(P,Y){let le=b.get(P);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function $a(P,Y,le,oe,j){Y.isScene!==!0&&(Y=Ee),H.resetTextureUnits();let Be=Y.fog,Ze=oe.isMeshStandardMaterial?Y.environment:null,qe=z===null?E.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:An,$e=(oe.isMeshStandardMaterial?me:Q).get(oe.envMap||Ze),Je=oe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,lt=!!le.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),st=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,Pt=!!le.morphAttributes.color,Xt=xi;oe.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Xt=E.toneMapping);let Zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,It=Zt!==void 0?Zt.length:0,nt=b.get(oe),Rt=A.state.lights;if(ye===!0&&(Ne===!0||P!==te)){let Tn=P===te&&oe.id===J;Oe.setState(oe,P,Tn)}let bt=!1;oe.version===nt.__version?(nt.needsLights&&nt.lightsStateVersion!==Rt.state.version||nt.outputColorSpace!==qe||j.isBatchedMesh&&nt.batching===!1||!j.isBatchedMesh&&nt.batching===!0||j.isBatchedMesh&&nt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&nt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&nt.instancing===!1||!j.isInstancedMesh&&nt.instancing===!0||j.isSkinnedMesh&&nt.skinning===!1||!j.isSkinnedMesh&&nt.skinning===!0||j.isInstancedMesh&&nt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&nt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&nt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&nt.instancingMorph===!1&&j.morphTexture!==null||nt.envMap!==$e||oe.fog===!0&&nt.fog!==Be||nt.numClippingPlanes!==void 0&&(nt.numClippingPlanes!==Oe.numPlanes||nt.numIntersection!==Oe.numIntersection)||nt.vertexAlphas!==Je||nt.vertexTangents!==lt||nt.morphTargets!==st||nt.morphNormals!==ft||nt.morphColors!==Pt||nt.toneMapping!==Xt||nt.morphTargetsCount!==It)&&(bt=!0):(bt=!0,nt.__version=oe.version);let Pn=nt.currentProgram;bt===!0&&(Pn=hs(oe,Y,j));let Wi=!1,Bn=!1,fs=!1,Ot=Pn.getUniforms(),mn=nt.uniforms;if(se.useProgram(Pn.program)&&(Wi=!0,Bn=!0,fs=!0),oe.id!==J&&(J=oe.id,Bn=!0),Wi||te!==P){se.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ot.setValue(R,"projectionMatrix",P.projectionMatrix),Ot.setValue(R,"viewMatrix",P.matrixWorldInverse);let yn=Ot.map.cameraPosition;yn!==void 0&&yn.setValue(R,Le.setFromMatrixPosition(P.matrixWorld)),ne.logarithmicDepthBuffer&&Ot.setValue(R,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Ot.setValue(R,"isOrthographic",P.isOrthographicCamera===!0),te!==P&&(te=P,Bn=!0,fs=!0)}if(nt.needsLights&&(Rt.state.directionalShadowMap.length>0&&Ot.setValue(R,"directionalShadowMap",Rt.state.directionalShadowMap,H),Rt.state.spotShadowMap.length>0&&Ot.setValue(R,"spotShadowMap",Rt.state.spotShadowMap,H),Rt.state.pointShadowMap.length>0&&Ot.setValue(R,"pointShadowMap",Rt.state.pointShadowMap,H)),j.isSkinnedMesh){Ot.setOptional(R,j,"bindMatrix"),Ot.setOptional(R,j,"bindMatrixInverse");let Tn=j.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Ot.setValue(R,"boneTexture",Tn.boneTexture,H))}j.isBatchedMesh&&(Ot.setOptional(R,j,"batchingTexture"),Ot.setValue(R,"batchingTexture",j._matricesTexture,H),Ot.setOptional(R,j,"batchingIdTexture"),Ot.setValue(R,"batchingIdTexture",j._indirectTexture,H),Ot.setOptional(R,j,"batchingColorTexture"),j._colorsTexture!==null&&Ot.setValue(R,"batchingColorTexture",j._colorsTexture,H));let Sn=le.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&ot.update(j,le,Pn),(Bn||nt.receiveShadow!==j.receiveShadow)&&(nt.receiveShadow=j.receiveShadow,Ot.setValue(R,"receiveShadow",j.receiveShadow)),oe.isMeshGouraudMaterial&&oe.envMap!==null&&(mn.envMap.value=$e,mn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),oe.isMeshStandardMaterial&&oe.envMap===null&&Y.environment!==null&&(mn.envMapIntensity.value=Y.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=QM()),Bn&&(Ot.setValue(R,"toneMappingExposure",E.toneMappingExposure),nt.needsLights&&yr(mn,fs),Be&&oe.fog===!0&&ke.refreshFogUniforms(mn,Be),ke.refreshMaterialUniforms(mn,oe,ze,Ue,A.state.transmissionRenderTarget[P.id]),fo.upload(R,_r(nt),mn,H)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(fo.upload(R,_r(nt),mn,H),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Ot.setValue(R,"center",j.center),Ot.setValue(R,"modelViewMatrix",j.modelViewMatrix),Ot.setValue(R,"normalMatrix",j.normalMatrix),Ot.setValue(R,"modelMatrix",j.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){let Tn=oe.uniformsGroups;for(let yn=0,Mr=Tn.length;yn<Mr;yn++){let Mi=Tn[yn];Me.update(Mi,Pn),Me.bind(Mi,Pn)}}return Pn}function yr(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function _o(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(P,Y,le){let oe=b.get(P);oe.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),b.get(P.texture).__webglTexture=Y,b.get(P.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:le,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){let le=b.get(P);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};let Ja=R.createFramebuffer();this.setRenderTarget=function(P,Y=0,le=0){z=P,U=Y,B=le;let oe=null,j=!1,Be=!1;if(P){let qe=b.get(P);if(qe.__useDefaultFramebuffer!==void 0){se.bindFramebuffer(R.FRAMEBUFFER,qe.__webglFramebuffer),X.copy(P.viewport),K.copy(P.scissor),ie=P.scissorTest,se.viewport(X),se.scissor(K),se.setScissorTest(ie),J=-1;return}else if(qe.__webglFramebuffer===void 0)H.setupRenderTarget(P);else if(qe.__hasExternalTextures)H.rebindTextures(P,b.get(P.texture).__webglTexture,b.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let lt=P.depthTexture;if(qe.__boundDepthTexture!==lt){if(lt!==null&&b.has(lt)&&(P.width!==lt.image.width||P.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(P)}}let $e=P.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Be=!0);let Je=b.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Je[Y])?oe=Je[Y][le]:oe=Je[Y],j=!0):P.samples>0&&H.useMultisampledRTT(P)===!1?oe=b.get(P).__webglMultisampledFramebuffer:Array.isArray(Je)?oe=Je[le]:oe=Je,X.copy(P.viewport),K.copy(P.scissor),ie=P.scissorTest}else X.copy(N).multiplyScalar(ze).floor(),K.copy(q).multiplyScalar(ze).floor(),ie=V;if(le!==0&&(oe=Ja),se.bindFramebuffer(R.FRAMEBUFFER,oe)&&se.drawBuffers(P,oe),se.viewport(X),se.scissor(K),se.setScissorTest(ie),j){let qe=b.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+Y,qe.__webglTexture,le)}else if(Be){let qe=Y;for(let $e=0;$e<P.textures.length;$e++){let Je=b.get(P.textures[$e]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+$e,Je.__webglTexture,le,qe)}}else if(P!==null&&le!==0){let qe=b.get(P.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,qe.__webglTexture,le)}J=-1},this.readRenderTargetPixels=function(P,Y,le,oe,j,Be,Ze,qe=0){if(!(P&&P.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ze!==void 0&&($e=$e[Ze]),$e){se.bindFramebuffer(R.FRAMEBUFFER,$e);try{let Je=P.textures[qe],lt=Je.format,st=Je.type;if(!ne.textureFormatReadable(lt)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(st)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-oe&&le>=0&&le<=P.height-j&&(P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+qe),R.readPixels(Y,le,oe,j,fe.convert(lt),fe.convert(st),Be))}finally{let Je=z!==null?b.get(z).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(P,Y,le,oe,j,Be,Ze,qe=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=b.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ze!==void 0&&($e=$e[Ze]),$e)if(Y>=0&&Y<=P.width-oe&&le>=0&&le<=P.height-j){se.bindFramebuffer(R.FRAMEBUFFER,$e);let Je=P.textures[qe],lt=Je.format,st=Je.type;if(!ne.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ft=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,ft),R.bufferData(R.PIXEL_PACK_BUFFER,Be.byteLength,R.STREAM_READ),P.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+qe),R.readPixels(Y,le,oe,j,fe.convert(lt),fe.convert(st),0);let Pt=z!==null?b.get(z).__webglFramebuffer:null;se.bindFramebuffer(R.FRAMEBUFFER,Pt);let Xt=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await Bp(R,Xt,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,ft),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Be),R.deleteBuffer(ft),R.deleteSync(Xt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,le=0){let oe=Math.pow(2,-le),j=Math.floor(P.image.width*oe),Be=Math.floor(P.image.height*oe),Ze=Y!==null?Y.x:0,qe=Y!==null?Y.y:0;H.setTexture2D(P,0),R.copyTexSubImage2D(R.TEXTURE_2D,le,0,0,Ze,qe,j,Be),se.unbindTexture()};let ja=R.createFramebuffer(),yo=R.createFramebuffer();this.copyTextureToTexture=function(P,Y,le=null,oe=null,j=0,Be=null){Be===null&&(j!==0?(Zr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Be=j,j=0):Be=0);let Ze,qe,$e,Je,lt,st,ft,Pt,Xt,Zt=P.isCompressedTexture?P.mipmaps[Be]:P.image;if(le!==null)Ze=le.max.x-le.min.x,qe=le.max.y-le.min.y,$e=le.isBox3?le.max.z-le.min.z:1,Je=le.min.x,lt=le.min.y,st=le.isBox3?le.min.z:0;else{let Sn=Math.pow(2,-j);Ze=Math.floor(Zt.width*Sn),qe=Math.floor(Zt.height*Sn),P.isDataArrayTexture?$e=Zt.depth:P.isData3DTexture?$e=Math.floor(Zt.depth*Sn):$e=1,Je=0,lt=0,st=0}oe!==null?(ft=oe.x,Pt=oe.y,Xt=oe.z):(ft=0,Pt=0,Xt=0);let It=fe.convert(Y.format),nt=fe.convert(Y.type),Rt;Y.isData3DTexture?(H.setTexture3D(Y,0),Rt=R.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),Rt=R.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),Rt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,Y.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,Y.unpackAlignment);let bt=R.getParameter(R.UNPACK_ROW_LENGTH),Pn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Wi=R.getParameter(R.UNPACK_SKIP_PIXELS),Bn=R.getParameter(R.UNPACK_SKIP_ROWS),fs=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Zt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Zt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Je),R.pixelStorei(R.UNPACK_SKIP_ROWS,lt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,st);let Ot=P.isDataArrayTexture||P.isData3DTexture,mn=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){let Sn=b.get(P),Tn=b.get(Y),yn=b.get(Sn.__renderTarget),Mr=b.get(Tn.__renderTarget);se.bindFramebuffer(R.READ_FRAMEBUFFER,yn.__webglFramebuffer),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,Mr.__webglFramebuffer);for(let Mi=0;Mi<$e;Mi++)Ot&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,b.get(P).__webglTexture,j,st+Mi),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,Be,Xt+Mi)),R.blitFramebuffer(Je,lt,Ze,qe,ft,Pt,Ze,qe,R.DEPTH_BUFFER_BIT,R.NEAREST);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||b.has(P)){let Sn=b.get(P),Tn=b.get(Y);se.bindFramebuffer(R.READ_FRAMEBUFFER,ja),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,yo);for(let yn=0;yn<$e;yn++)Ot?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Sn.__webglTexture,j,st+yn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Sn.__webglTexture,j),mn?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tn.__webglTexture,Be,Xt+yn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Tn.__webglTexture,Be),j!==0?R.blitFramebuffer(Je,lt,Ze,qe,ft,Pt,Ze,qe,R.COLOR_BUFFER_BIT,R.NEAREST):mn?R.copyTexSubImage3D(Rt,Be,ft,Pt,Xt+yn,Je,lt,Ze,qe):R.copyTexSubImage2D(Rt,Be,ft,Pt,Je,lt,Ze,qe);se.bindFramebuffer(R.READ_FRAMEBUFFER,null),se.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else mn?P.isDataTexture||P.isData3DTexture?R.texSubImage3D(Rt,Be,ft,Pt,Xt,Ze,qe,$e,It,nt,Zt.data):Y.isCompressedArrayTexture?R.compressedTexSubImage3D(Rt,Be,ft,Pt,Xt,Ze,qe,$e,It,Zt.data):R.texSubImage3D(Rt,Be,ft,Pt,Xt,Ze,qe,$e,It,nt,Zt):P.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Be,ft,Pt,Ze,qe,It,nt,Zt.data):P.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Be,ft,Pt,Zt.width,Zt.height,It,Zt.data):R.texSubImage2D(R.TEXTURE_2D,Be,ft,Pt,Ze,qe,It,nt,Zt);R.pixelStorei(R.UNPACK_ROW_LENGTH,bt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Pn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Wi),R.pixelStorei(R.UNPACK_SKIP_ROWS,Bn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,fs),Be===0&&Y.generateMipmaps&&R.generateMipmap(Rt),se.unbindTexture()},this.initRenderTarget=function(P){b.get(P).__webglFramebuffer===void 0&&H.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?H.setTextureCube(P,0):P.isData3DTexture?H.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?H.setTexture2DArray(P,0):H.setTexture2D(P,0),se.unbindTexture()},this.resetState=function(){U=0,B=0,z=null,se.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}};var zi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},eb=new Fi(-1,1,1,-1,0,1),xf=class extends wt{constructor(){super(),this.setAttribute("position",new ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ct([0,2,0,0,2,0],2))}},tb=new xf,ki=class{constructor(e){this._mesh=new Ge(tb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var go=class extends kn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ht?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Cn.clone(e.uniforms),this.material=new ht({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new ki(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Fa=class extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},xu=class extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var vu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new de);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new go(zi),this.copyPass.material.blending=un,this.clock=new nr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fa!==void 0&&(o instanceof Fa?n=!0:o instanceof xu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var _u=class extends kn{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ie}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var ym={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var xo=class s extends kn{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new Ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new en(r,o,{type:fn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new en(r,o,{type:fn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new en(r,o,{type:fn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=ym;this.highPassUniforms=Cn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ht({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new de(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Cn.clone(zi.uniforms),this.blendMaterial=new ht({uniforms:this.copyUniforms,vertexShader:zi.vertexShader,fragmentShader:zi.fragmentShader,premultipliedAlpha:!0,blending:hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ie,this._oldClearAlpha=1,this._basic=new Et,this._fsQuad=new ki(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new de(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new ht({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new ht({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};xo.BlurDirectionX=new de(1,0);xo.BlurDirectionY=new de(0,1);var Oa={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var yu=class extends kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Cn.clone(Oa.uniforms),this.material=new ro({name:Oa.name,uniforms:this.uniforms,vertexShader:Oa.vertexShader,fragmentShader:Oa.fragmentShader}),this._fsQuad=new ki(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===Ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ma?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ea?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===rr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ta?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Sa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ba={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Qe},cameraProjectionMatrixInverse:{value:new Qe},cameraWorldMatrix:{value:new Qe},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new L(-1,-1,-1)},sceneBoxMax:{value:new L(1,1,1)}},vertexShader:`

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
		}`},Ha={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Mu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Mm(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=nb(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new L(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new Ai(i,e,e);return r.wrapS=nn,r.wrapT=nn,r.needsUpdate=!0,r}function nb(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var za={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:vf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new de},cameraProjectionMatrixInverse:{value:new Qe},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function vf(s,e,t){let n=ib(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function ib(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new L(Math.cos(r),Math.sin(r),o))}return n}var bu=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,m=e-d,x=t-f,g,p;m>x?(g=1,p=0):(g=0,p=1);let v=m-g+u,_=x-p+u,y=m-1+2*u,A=x-1+2*u,S=c&255,w=l&255,D=this.perm[S+this.perm[w]]%12,E=this.perm[S+g+this.perm[w+p]]%12,T=this.perm[S+1+this.perm[w+1]]%12,U=.5-m*m-x*x;U<0?n=0:(U*=U,n=U*U*this._dot(this.grad3[D],m,x));let B=.5-v*v-_*_;B<0?i=0:(B*=B,i=B*B*this._dot(this.grad3[E],v,_));let z=.5-y*y-A*A;return z<0?r=0:(z*=z,r=z*z*this._dot(this.grad3[T],y,A)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(n+l),f=1/6,m=(u+h+d)*f,x=u-m,g=h-m,p=d-m,v=e-x,_=t-g,y=n-p,A,S,w,D,E,T;v>=_?_>=y?(A=1,S=0,w=0,D=1,E=1,T=0):v>=y?(A=1,S=0,w=0,D=1,E=0,T=1):(A=0,S=0,w=1,D=1,E=0,T=1):_<y?(A=0,S=0,w=1,D=0,E=1,T=1):v<y?(A=0,S=1,w=0,D=0,E=1,T=1):(A=0,S=1,w=0,D=1,E=1,T=0);let U=v-A+f,B=_-S+f,z=y-w+f,J=v-D+2*f,te=_-E+2*f,X=y-T+2*f,K=v-1+3*f,ie=_-1+3*f,_e=y-1+3*f,Se=u&255,Te=h&255,Ue=d&255,ze=this.perm[Se+this.perm[Te+this.perm[Ue]]]%12,Ke=this.perm[Se+A+this.perm[Te+S+this.perm[Ue+w]]]%12,rt=this.perm[Se+D+this.perm[Te+E+this.perm[Ue+T]]]%12,N=this.perm[Se+1+this.perm[Te+1+this.perm[Ue+1]]]%12,q=.6-v*v-_*_-y*y;q<0?i=0:(q*=q,i=q*q*this._dot3(this.grad3[ze],v,_,y));let V=.6-U*U-B*B-z*z;V<0?r=0:(V*=V,r=V*V*this._dot3(this.grad3[Ke],U,B,z));let be=.6-J*J-te*te-X*X;be<0?o=0:(be*=be,o=be*be*this._dot3(this.grad3[rt],J,te,X));let ye=.6-K*K-ie*ie-_e*_e;return ye<0?a=0:(ye*=ye,a=ye*ye*this._dot3(this.grad3[N],K,ie,_e)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,h,d,f,m,x=(e+t+n+i)*c,g=Math.floor(e+x),p=Math.floor(t+x),v=Math.floor(n+x),_=Math.floor(i+x),y=(g+p+v+_)*l,A=g-y,S=p-y,w=v-y,D=_-y,E=e-A,T=t-S,U=n-w,B=i-D,z=E>T?32:0,J=E>U?16:0,te=T>U?8:0,X=E>B?4:0,K=T>B?2:0,ie=U>B?1:0,_e=z+J+te+X+K+ie,Se=o[_e][0]>=3?1:0,Te=o[_e][1]>=3?1:0,Ue=o[_e][2]>=3?1:0,ze=o[_e][3]>=3?1:0,Ke=o[_e][0]>=2?1:0,rt=o[_e][1]>=2?1:0,N=o[_e][2]>=2?1:0,q=o[_e][3]>=2?1:0,V=o[_e][0]>=1?1:0,be=o[_e][1]>=1?1:0,ye=o[_e][2]>=1?1:0,Ne=o[_e][3]>=1?1:0,Ve=E-Se+l,Le=T-Te+l,re=U-Ue+l,Ee=B-ze+l,ve=E-Ke+2*l,De=T-rt+2*l,R=U-N+2*l,pe=B-q+2*l,ae=E-V+3*l,ne=T-be+3*l,se=U-ye+3*l,C=B-Ne+3*l,b=E-1+4*l,H=T-1+4*l,Q=U-1+4*l,me=B-1+4*l,$=g&255,k=p&255,Z=v&255,ue=_&255,ke=a[$+a[k+a[Z+a[ue]]]]%32,xe=a[$+Se+a[k+Te+a[Z+Ue+a[ue+ze]]]]%32,Ce=a[$+Ke+a[k+rt+a[Z+N+a[ue+q]]]]%32,Oe=a[$+V+a[k+be+a[Z+ye+a[ue+Ne]]]]%32,Xe=a[$+1+a[k+1+a[Z+1+a[ue+1]]]]%32,Pe=.6-E*E-T*T-U*U-B*B;Pe<0?u=0:(Pe*=Pe,u=Pe*Pe*this._dot4(r[ke],E,T,U,B));let ot=.6-Ve*Ve-Le*Le-re*re-Ee*Ee;ot<0?h=0:(ot*=ot,h=ot*ot*this._dot4(r[xe],Ve,Le,re,Ee));let O=.6-ve*ve-De*De-R*R-pe*pe;O<0?d=0:(O*=O,d=O*O*this._dot4(r[Ce],ve,De,R,pe));let Re=.6-ae*ae-ne*ne-se*se-C*C;Re<0?f=0:(Re*=Re,f=Re*Re*this._dot4(r[Oe],ae,ne,se,C));let fe=.6-b*b-H*H-Q*Q-me*me;return fe<0?m=0:(fe*=fe,m=fe*fe*this._dot4(r[Xe],b,H,Q,me)),27*(u+h+d+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var ka=class s extends kn{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Mm(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new en(this.width,this.height,{type:fn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new ht({defines:Object.assign({},Ba.defines),uniforms:Cn.clone(Ba.uniforms),vertexShader:Ba.vertexShader,fragmentShader:Ba.fragmentShader,blending:un,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ha,this.normalMaterial.blending=un,this.pdMaterial=new ht({defines:Object.assign({},za.defines),uniforms:Cn.clone(za.uniforms),vertexShader:za.vertexShader,fragmentShader:za.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new ht({defines:Object.assign({},Ha.defines),uniforms:Cn.clone(Ha.uniforms),vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader,blending:un}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new ht({uniforms:Cn.clone(zi.uniforms),vertexShader:zi.vertexShader,fragmentShader:zi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ya,blendDst:sr,blendEquation:Kn,blendSrcAlpha:_a,blendDstAlpha:sr,blendEquationAlpha:Kn}),this.blendMaterial=new ht({uniforms:Cn.clone(Mu.uniforms),vertexShader:Mu.vertexShader,fragmentShader:Mu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:cc,blendSrc:ya,blendDst:sr,blendEquation:Kn,blendSrcAlpha:_a,blendDstAlpha:sr,blendEquationAlpha:Kn}),this._fsQuad=new ki(null),this._originalClearColor=new Ie,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ri,this.depthTexture.format=Oi,this.depthTexture.type=ws,this.normalRenderTarget=new en(this.width,this.height,{minFilter:Qt,magFilter:Qt,type:fn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=vf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=un,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=un,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=un,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=un,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=un,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new bu,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new Ai(i,e,e,zn,Un);return r.wrapS=nn,r.wrapT=nn,r.needsUpdate=!0,r}};ka.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function pn(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new wt,l=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=bm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let m=bm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function bm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Tt(o,t,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){let x=u.getComponent(d,m);a.setComponent(d+h,m,x)}}else o.set(u.array,c);c+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function _f(s,e){if(e===qh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===uo||e===Da){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===uo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Va=class s extends Ge{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new jt;let n=this,i=t.color!==void 0?new Ie(t.color):new Ie(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new ri,h=new L,d=new L,f=new L,m=new Qe,x=new L(0,0,-1),g=new Dt,p=new L,v=new L,_=new Dt,y=new Qe,A=this.camera,S=new en(r,o,{samples:l,type:fn}),w=new ht({name:c.name!==void 0?c.name:"unspecified",uniforms:Cn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=S.texture,w.uniforms.color.value=i,w.uniforms.textureMatrix.value=y,this.material=w,this.onBeforeRender=function(D,E,T){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(T.matrixWorld),m.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),m.extractRotation(T.matrixWorld),x.set(0,0,-1),x.applyMatrix4(m),x.add(f),v.subVectors(d,x),v.reflect(h).negate(),v.add(d),A.position.copy(p),A.up.set(0,1,0),A.up.applyMatrix4(m),A.up.reflect(h),A.lookAt(v),A.far=T.far,A.updateMatrixWorld(),A.projectionMatrix.copy(T.projectionMatrix),y.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),y.multiply(A.projectionMatrix),y.multiply(A.matrixWorldInverse),y.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(A.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let B=A.projectionMatrix;_.x=(Math.sign(g.x)+B.elements[8])/B.elements[0],_.y=(Math.sign(g.y)+B.elements[9])/B.elements[5],_.z=-1,_.w=(1+B.elements[10])/B.elements[14],g.multiplyScalar(2/g.dot(_)),B.elements[2]=g.x,B.elements[6]=g.y,B.elements[10]=g.z+1-a,B.elements[14]=g.w,n.visible=!1;let z=D.getRenderTarget(),J=D.xr.enabled,te=D.shadowMap.autoUpdate;D.xr.enabled=!1,D.shadowMap.autoUpdate=!1,D.setRenderTarget(S),D.state.buffers.depth.setMask(!0),D.autoClear===!1&&D.clear(),D.render(E,A),D.xr.enabled=J,D.shadowMap.autoUpdate=te,D.setRenderTarget(z);let X=T.viewport;X!==void 0&&D.state.viewport(X),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};Va.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Eu=null;function sb(){if(Eu)return Eu;let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Eu=new jn(s),Eu}function yf(s,e,t=.7){let n=new Ko(new jr({map:sb(),color:s,transparent:!0,opacity:t,blending:hn,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(e),n}var On='"Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","Noto Sans JP","Noto Sans CJK JP","Meiryo","MS Gothic",sans-serif';function pr(s){let e=s%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647)/2147483647}function rn(s,e,t){let n=document.createElement("canvas");return n.width=Math.max(2,Math.round(s)),n.height=Math.max(2,Math.round(e)),t(n.getContext("2d")),n}function an(s,e={}){let t=new jn(s);return e.srgb!==!1&&(t.colorSpace=Vt),e.repeat&&(t.wrapS=t.wrapT=nn),t.anisotropy=e.aniso??4,t.generateMipmaps=!0,t.minFilter=ei,t}var us={bays:6,floors:8,bayW:3.2,floorH:3.6},Em=us.bays*us.bayW,bf=us.floors*us.floorH;function Sm(s,e,t=1){let n=Math.round(512*t),i=Math.round(512*t),r=n/us.bays,o=i/us.floors,a=[],c=pr(e);for(let f=0;f<us.floors;f++)for(let m=0;m<us.bays;m++)a.push({x:m*r,y:f*o,state:c(),r:c(),r2:c()});let l=s==="office"?.2:s==="glass"?.14:s==="old"?.1:.12,u=(f,m)=>{let x={office:"#171d2b",resi:"#1b1a24",glass:"#0b1424",old:"#201c20"}[s];f.fillStyle=m?"#000":x,f.fillRect(0,0,n,i);for(let g of a){let p=g.x+r*.1,v=g.y+o*(s==="glass"?.06:.14),_=r*(s==="glass"?.84:s==="office"?.78:.56),y=o*(s==="glass"?.8:s==="office"?.62:.5),A=g.state<l,S=g.r;if(m){if(A){let w,D=.3+g.r2*.4;if(S<.12?w="#ffbf80":S<.9?(w="#a8c8e0",D*=.8):w="#4a8cff",f.globalAlpha=D,f.fillStyle=w,f.fillRect(p,v,_,y),f.globalAlpha=1,f.fillStyle="rgba(0,0,0,0.5)",S>=.12&&S<.5&&(f.fillRect(p,v+y*.62,_*.4,y*.38),f.fillRect(p+_*.55,v+y*.7,_*.45,y*.3)),g.r2>.55&&S<.84){let E=p+_*(.25+(g.r2-.55)*1.2);f.fillStyle="rgba(0,0,0,0.82)",f.beginPath(),f.arc(E,v+y*.42,y*.11,0,Math.PI*2),f.fill(),f.fillRect(E-y*.14,v+y*.53,y*.28,y*.47)}if(g.r2<.2&&s!=="glass"){f.fillStyle="rgba(0,0,0,0.65)";let E=Math.max(3,Math.round(y/(3*t)));for(let T=0;T<E*.6;T++)f.fillRect(p,v+T*(y/E),_,y/E*.55)}(s==="office"||s==="glass")&&(f.fillStyle="rgba(0,0,0,0.9)",f.fillRect(p+_/2-t,v,2*t,y))}}else{let w=f.createLinearGradient(0,v,0,v+y);w.addColorStop(0,s==="glass"?"#243a5c":"#1a2438"),w.addColorStop(1,"#070a12"),f.fillStyle=A?"#1b2335":w,f.fillRect(p,v,_,y),f.strokeStyle="#0a0d14",f.lineWidth=Math.max(1,t*2),f.strokeRect(p,v,_,y),(s==="office"||s==="glass")&&(f.beginPath(),f.moveTo(p+_/2,v),f.lineTo(p+_/2,v+y),f.stroke()),f.fillStyle="#2b3345",f.fillRect(g.x,g.y+o-4*t,r,4*t),f.fillStyle="#10131c",f.fillRect(g.x,g.y+o-1.5*t,r,1.5*t),(s==="resi"||s==="old")&&(g.r2<.34&&(f.fillStyle="#394155",f.fillRect(p-4*t,v+y+2*t,_+8*t,4*t),f.fillStyle="#0c0f16",f.fillRect(p-4*t,v+y-7*t,_+8*t,2*t)),g.r2>.62&&g.r2<.8&&(f.fillStyle="#58606f",f.fillRect(p+_*.15,v+y+3*t,_*.7,8*t),f.fillStyle="#272c37",f.fillRect(p+_*.2,v+y+5*t,_*.5,4*t))),s==="old"&&g.r2>.94&&(f.fillStyle="#3b2432",f.fillRect(p,v,_,y))}}if(!m){f.fillStyle="rgba(255,255,255,0.025)";for(let g=0;g<=us.bays;g++)f.fillRect(g*r-t,0,2*t,i);if(s==="glass"){let g=f.createLinearGradient(0,0,n,i);g.addColorStop(0,"rgba(120,170,255,0.09)"),g.addColorStop(.5,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(255,120,200,0.07)"),f.fillStyle=g,f.fillRect(0,0,n,i)}}},h=an(rn(n,i,f=>u(f,!1)),{repeat:!0}),d=an(rn(n,i,f=>u(f,!0)),{repeat:!0});return{map:h,em:d}}var Ef={w:16,h:4.5};function Tm(s,e=1){let t=Math.round(1024*e),n=Math.round(288*e),i=pr(s),r=["\u30CD\u30AA\u9EBA","\u30BC\u30ED\u85AC\u5C40","\u30B3\u30A4\u30F3\u5802","\u713C\u304D\u9CE5","\u6708\u5F71","\u96FB\u8133\u5802","\u30DF\u30E9\u30A4\u6E6F","\u30AB\u30E9\u30AA\u30B1"],o=["#5fc8e0","#3fa8ff","#5fc8e0","#ff9a4a","#ff3a4a","#4a8cff"],a=Array.from({length:4},()=>({hue:o[Math.floor(i()*o.length)],shut:i()<.22,name:r[Math.floor(i()*r.length)],awn:i()<.6})),c=(l,u)=>{l.fillStyle=u?"#000":"#14141c",l.fillRect(0,0,t,n);let h=t/4;a.forEach((d,f)=>{let m=f*h;if(d.shut)if(u)l.fillStyle="rgba(255,60,190,0.35)",l.fillRect(m+h*.2,n*.4,h*.5,n*.18);else{l.fillStyle="#2a2d36",l.fillRect(m+h*.08,n*.2,h*.84,n*.72),l.fillStyle="#1c1e26";for(let x=n*.22;x<n*.9;x+=5*e)l.fillRect(m+h*.08,x,h*.84,1.5*e);l.fillStyle="#6a2c7a",l.fillRect(m+h*.2,n*.4,h*.5,n*.18)}else{let x=m+h*.08,g=n*.22,p=h*.84,v=n*.7;if(!u)l.fillStyle="#0a0c12",l.fillRect(x,g,p,v);else{let _=l.createLinearGradient(0,g,0,g+v);_.addColorStop(0,d.hue),_.addColorStop(1,"rgba(0,0,0,0.25)"),l.globalAlpha=.85,l.fillStyle=_,l.fillRect(x,g,p,v),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,0.55)";for(let y=0;y<3;y++)l.fillRect(x+4*e,g+v*(.18+y*.22),p-8*e,2*e);l.fillStyle="rgba(0,0,0,0.7)",l.fillRect(x,g+v*.72,p,v*.28),l.beginPath(),l.arc(x+p*.62,g+v*.42,v*.08,0,Math.PI*2),l.fill(),l.fillRect(x+p*.62-v*.1,g+v*.5,v*.2,v*.25)}l.strokeStyle=u?"#000":"#232734",l.lineWidth=3*e,l.strokeRect(x,g,p,v)}if(d.awn&&!u)for(let x=0;x<8;x++)l.fillStyle=x%2?"#7a1f2c":"#d9d2c4",l.fillRect(m+h*.04+x*h*.92/8,n*.12,h*.92/8,n*.1);l.font=`900 ${n*.14}px ${On}`,l.textAlign="center",l.textBaseline="middle",u?(l.shadowColor=d.hue,l.shadowBlur=8*e,l.fillStyle=d.hue,l.fillText(d.name,m+h/2,n*.07),l.shadowBlur=0):(l.fillStyle="#05060a",l.fillRect(m+h*.1,0,h*.8,n*.14))})};return{map:an(rn(t,n,l=>c(l,!1)),{repeat:!0}),em:an(rn(t,n,l=>c(l,!0)),{repeat:!0})}}var dr=8,Mf=4,Ga=[{t:"\u30CD\u30AA\u30F3\u9152\u5834",c:"#2ec8e0"},{t:"\u591C\u660E\u3051\u9EBA",c:"#ff9a3a"},{t:"\u30DF\u30E9\u30A4\u6E6F",c:"#3fa8ff"},{t:"\u96FB\u8133\u30AB\u30D5\u30A7",c:"#2ec8e0"},{t:"\u30BC\u30ED\u85AC\u5C40",c:"#3fb8d8"},{t:"\u30B3\u30A4\u30F3\u5802",c:"#ff9a3a"},{t:"\u6708\u5F71\u30D0\u30FC",c:"#3a7bff"},{t:"\u30C8\u30FC\u30AF\u30F3\u5E02\u5834",c:"#ff2a46"},{t:"\u30CB\u30F3\u30B8\u30E3\u5802",c:"#ff2a46",sub:"NPG"},{t:"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6",c:"#ff2a3a",sub:"nSLAVE"},{t:"bWalletX",c:"#4da3ff",latin:!0},{t:"TOKENBLASTER",c:"#ff9a3a",latin:!0},{t:"NPG",c:"#ff2a46",latin:!0},{t:"\u713C\u304D\u9CE5",c:"#ff9a3a"},{t:"\u30AB\u30E9\u30AA\u30B1",c:"#3a7bff"},{t:"\u4E8C\u5341\u56DB\u6642\u9593",c:"#6fd8e8"},{t:"\u30B2\u30FC\u30E0\u8857",c:"#2ec8e0"},{t:"\u30B9\u30B7\u30FB\u30BC\u30ED",c:"#ff2a46"},{t:"\u30DB\u30C6\u30EB\u6708\u5149",c:"#6fb0ff"},{t:"\u4EBA\u5DE5\u5929\u4F7F",c:"#2ec8e0"},{t:"\u96FB\u6C17\u8857",c:"#3fa8ff"},{t:"BLOCK 21",c:"#27d8f0",latin:!0},{t:"\u591C\u52E4",c:"#ff2a46"},{t:"\u9EBB\u96C0",c:"#3fb8d8"},{t:"\u30D3\u30C3\u30C8\u30B3\u30A4\u30F3",c:"#ff9a3a"},{t:"\u4EEE\u60F3\u901A\u8CA8",c:"#2ec8e0"},{t:"\u5149\u306E\u5EAD",c:"#8fd8e8"},{t:"\u9244\u9AA8\u9152\u5834",c:"#3a7bff"},{t:"\u30B5\u30A4\u30D0\u30FC\u6574\u4F53",c:"#3a7bff"},{t:"\u96E8\u5BBF\u308A",c:"#3fa8ff"},{t:"\u30C9\u30ED\u30FC\u30F3\u4FBF",c:"#2ec8e0"},{t:"\u672A\u6765\u5802",c:"#3fa8ff"}];function wm(s=1){let e=128*s,t=512*s,n=e*dr,i=t*Mf,r=rn(n,i,o=>{o.fillStyle="#000",o.fillRect(0,0,n,i),Ga.forEach((a,c)=>{let l=c%dr,u=Math.floor(c/dr),h=l*e,d=u*t;if(o.save(),o.translate(h,d),o.fillStyle="rgba(8,6,16,0.82)",o.fillRect(8*s,6*s,e-16*s,t-12*s),o.shadowColor=a.c,o.shadowBlur=14*s,o.strokeStyle=a.c,o.lineWidth=4*s,o.strokeRect(12*s,10*s,e-24*s,t-20*s),o.lineWidth=1.5*s,o.strokeRect(19*s,17*s,e-38*s,t-34*s),o.fillStyle=a.c,o.textAlign="center",o.textBaseline="middle",a.latin){o.save(),o.translate(e/2,t/2),o.rotate(-Math.PI/2);let f=Math.min(76*s,(t-70*s)/(a.t.length*.62));o.font=`900 ${f}px Impact, "Arial Black", sans-serif`,o.fillText(a.t,0,0),o.restore()}else{let f=[...a.t],m=a.sub?80*s:0,x=t-70*s-m,g=Math.min(74*s,x/f.length);o.font=`900 ${g}px ${On}`,f.forEach((p,v)=>o.fillText(p,e/2,36*s+g*(v+.55))),a.sub&&(o.save(),o.translate(e/2,t-44*s-m/2),o.rotate(-Math.PI/2),o.font=`800 ${Math.min(24*s,(m+20*s)/(a.sub.length*.7))}px Arial, sans-serif`,o.fillText(a.sub,0,0),o.restore())}o.shadowBlur=8*s,o.fillStyle="#fff";for(let f=0;f<9;f++)o.fillRect(e/2-1.5*s,24*s+f*((t-60*s)/8),3*s,3*s);o.restore()})});return{texture:an(r,{aniso:4}),rect:o=>[o%dr/dr,1-(Math.floor(o/dr)+1)/Mf,1/dr,1/Mf]}}var Rs=4,Su=2;function Am(s=1){let e=512*s,t=rn(e*Rs,e*Su,n=>{n.fillStyle="#000",n.fillRect(0,0,e*Rs,e*Su);let i=(o,a)=>{n.save(),n.translate(o%Rs*e,Math.floor(o/Rs)*e),n.beginPath(),n.rect(0,0,e,e),n.clip(),n.scale(s,s),a(n),n.restore()},r=(o,a,c,l,u,h=`900 ${l}px ${On}`,d=20)=>{o.font=h,o.textAlign="center",o.textBaseline="middle",o.shadowColor=u,o.shadowBlur=d,o.fillStyle=u,o.fillText(a,256,c),o.shadowBlur=0};i(0,o=>{o.strokeStyle="#ff3226",o.lineWidth=8,o.shadowColor="#ff2a1a",o.shadowBlur=24,o.beginPath(),o.ellipse(256,190,170,86,0,0,Math.PI*2),o.stroke(),o.fillStyle="#ff3a2a",o.beginPath(),o.arc(256,190,48,0,Math.PI*2),o.fill(),o.fillStyle="#000",o.fillRect(250,142,12,96),o.shadowBlur=0,r(o,"nSLAVE",340,64,"#f4f7ff",'900 64px "Arial Black", Impact, sans-serif',14),r(o,"T E R R O R N O D E",400,28,"#ff5646","700 28px Arial, sans-serif",10),r(o,"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",456,30,"#ffb0a8",`700 30px ${On}`,8)}),i(1,o=>{r(o,"TOKEN",190,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(o,"BLASTER",300,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(o,"\u30C8\u30FC\u30AF\u30F3\u30D6\u30E9\u30B9\u30BF\u30FC",400,40,"#ffe27a",`900 40px ${On}`,12),r(o,"\u6483\u3066\u3002\u30D6\u30ED\u30C3\u30AF\u3092\u3002",456,30,"#ff8a3a",`700 30px ${On}`,8)}),i(2,o=>{o.strokeStyle="#4da3ff",o.lineWidth=10,o.shadowColor="#2f7bff",o.shadowBlur=22,o.beginPath(),o.roundRect(150,70,212,168,28),o.stroke(),o.beginPath(),o.moveTo(150,120),o.lineTo(362,120),o.stroke(),o.shadowBlur=0,r(o,"bWalletX",340,94,"#8fc4ff",'900 94px "Arial Black", Impact, sans-serif',18),r(o,"\u30D3\u30FC\u30FB\u30A6\u30A9\u30EC\u30C3\u30C8",424,38,"#cfe4ff",`700 38px ${On}`,10)}),i(3,o=>{r(o,"NPG",200,190,"#ff2a46",'900 italic 190px Impact, "Arial Black", sans-serif',28),r(o,"NINJA PUNK GIRLS",340,44,"#ffc0c8","800 44px Arial, sans-serif",10),r(o,"\u30CB\u30F3\u30B8\u30E3\u30FB\u30D1\u30F3\u30AF\u30FB\u30AC\u30FC\u30EB\u30BA",410,32,"#ff7a88",`700 32px ${On}`,8)}),i(4,o=>{r(o,"NEO TOKYO",190,86,"#2ec8e0",'900 86px "Arial Black", Impact, sans-serif',24),r(o,"2048",300,150,"#ff2a46",'900 150px "Arial Black", Impact, sans-serif',26),r(o,"\u30CD\u30AA\u6771\u4EAC",410,66,"#cfeaf4",`900 66px ${On}`,14)}),i(5,o=>{r(o,"nSLAVE",110,58,"#f4f7ff",'900 58px "Arial Black", Impact, sans-serif',16),r(o,"NOW PATENTED:",214,40,"#ff5646","800 40px Arial, sans-serif",10),r(o,"YOUR SOUL.",290,84,"#ff2a3a",'900 84px "Arial Black", Impact, sans-serif',24),r(o,"\u3042\u306A\u305F\u306E\u9B42\u306B\u7279\u8A31\u3092",400,44,"#ffb0a8",`800 44px ${On}`,10),r(o,"terms apply \xB7 see you in court",462,22,"#8a98a8","600 22px Arial, sans-serif",0)}),i(6,o=>{r(o,"nSLAVE",84,42,"#f4f7ff",'900 42px "Arial Black", Impact, sans-serif',12),r(o,"SOUL",190,118,"#ff2a3a",'900 118px "Arial Black", Impact, sans-serif',24),r(o,"CHAIN\u2122",300,96,"#2ec8e0",'900 96px "Arial Black", Impact, sans-serif',22),r(o,"(chain of tools)",380,30,"#ffc0b8","italic 700 30px Arial, sans-serif",8),r(o,"\u30BD\u30A6\u30EB\u30C1\u30A7\u30FC\u30F3",450,42,"#80d8e8",`800 42px ${On}`,10)}),i(7,o=>{r(o,"nSLAVE",96,50,"#f4f7ff",'900 50px "Arial Black", Impact, sans-serif',14),r(o,"100% OPEN SOURCE",190,46,"#2ec8e0","800 46px Arial, sans-serif",12),r(o,"BUILD ON ANY CHAIN",262,38,"#c0e8f0","700 38px Arial, sans-serif",8),r(o,"AS LONG AS IT\u2019S BSV",330,40,"#ff9a3a","800 40px Arial, sans-serif",12),r(o,"\u3069\u306E\u30C1\u30A7\u30FC\u30F3\u3067\u3082\u3002BSV\u306A\u3089\u3002",420,34,"#80d8e8",`700 34px ${On}`,8)})});return{texture:an(t,{aniso:4}),rect:n=>[n%Rs/Rs,1-(Math.floor(n/Rs)+1)/Su,1/Rs,1/Su]}}function Rm(s=1){let e=384*s,t=256*s,n=[{c:"#2ec8e0",name:"\u30CD\u30AA\u8336",cans:["#ff4a4a","#e8b040","#5fc8e0","#4a7cd8"]},{c:"#3a8cff",name:"\u30BC\u30ED\u6C34",cans:["#8fd8e8","#d8e8f0","#4a7cd8","#ff9a3a"]},{c:"#ff9a3a",name:"\u96FB\u6C60\u30FB\u9EBA",cans:["#ff8a3a","#ff3b3b","#5fc8e0","#e6e6e6"]}],i=(r,o)=>{r.fillStyle=o?"#000":"#1b1e27",r.fillRect(0,0,e,t),n.forEach((a,c)=>{let l=c*128*s;r.fillStyle=o?a.c:"#222633",r.fillRect(l+8*s,8*s,112*s,30*s),r.fillStyle=o?"#000":a.c,r.font=`900 ${20*s}px ${On}`,r.textAlign="center",r.textBaseline="middle",r.fillText(a.name,l+64*s,24*s),r.fillStyle=o?"rgba(255,255,255,0.4)":"#0b0d13",r.fillRect(l+8*s,44*s,112*s,140*s);for(let u=0;u<4;u++)for(let h=0;h<5;h++)r.fillStyle=a.cans[(u+h)%4],r.globalAlpha=o?.9:.55,r.fillRect(l+(14+h*21)*s,(50+u*33)*s,14*s,26*s),r.globalAlpha=1;for(let u=0;u<5;u++)r.fillStyle=o?a.c:"#3a3f4e",r.fillRect(l+(14+u*21)*s,192*s,14*s,8*s);r.fillStyle=o?"#000":"#07080c",r.fillRect(l+20*s,214*s,88*s,28*s)})};return{map:an(rn(e,t,r=>i(r,!1))),em:an(rn(e,t,r=>i(r,!0)))}}function Cm(s,e,t,n,i=1){let r=2048*i,o=512*i,a=pr(s),c=rn(r,o,u=>{u.clearRect(0,0,r,o);let h=0;for(;h<r;){let f=(30+a()*90)*i,m=(60+Math.pow(a(),1.6)*380)*i;u.fillStyle=e,u.fillRect(h,o-m,f,m),a()<.35&&u.fillRect(h+f*.2,o-m-40*i*a(),f*.6,40*i),a()<.18&&u.fillRect(h+f*.48,o-m-70*i,3*i,70*i);for(let x=o-m+6*i;x<o-4*i;x+=9*i)for(let g=h+4*i;g<h+f-4*i;g+=7*i)if(a()<n){let p=a();u.fillStyle=p>.93?"#ff6a6a":p>.82?"#ffc890":p>.3?"#8fb8e0":"#5fd0e0",u.globalAlpha=.35+a()*.5,u.fillRect(g,x,3*i,4*i),u.globalAlpha=1}if(a()<.22){let x=["#ff2a46","#2ec8e0","#3a8cff","#2ec8e0"][Math.floor(a()*4)];u.fillStyle=x,u.globalAlpha=.9,u.fillRect(h+f-6*i,o-m+18*i,4*i,(50+a()*100)*i),u.globalAlpha=1}m>300*i&&a()<.7&&(u.fillStyle="#ff3030",u.fillRect(h+f*.5-2*i,o-m-3*i,4*i,4*i)),h+=f+a()*6*i}let d=u.createLinearGradient(0,0,0,o);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,t),u.globalCompositeOperation="source-atop",u.fillStyle=d,u.fillRect(0,0,r,o),u.globalCompositeOperation="source-over"}),l=an(c,{repeat:!1});return l.wrapS=nn,l}function Pm(s=1){let e=1024*s,t=1024*s,n=16,i=20,r=pr(77),o=[];for(let c=0;c<n*i;c++)o.push(r());let a=(c,l)=>{c.fillStyle=l?"#000":"#08101e",c.fillRect(0,0,e,t);let u=e/n,h=t/i;for(let d=0;d<i;d++)for(let f=0;f<n;f++){let m=o[d*n+f];if(l)m>.88&&(c.globalAlpha=.25+(m-.88)*2.2,c.fillStyle=m>.97?"#ffc890":"#9fc4e8",c.fillRect(f*u+2,d*h+2,u-4,h*.78),c.globalAlpha=1);else{let x=c.createLinearGradient(f*u,d*h,f*u+u,d*h+h);x.addColorStop(0,"#16294a"),x.addColorStop(1,"#070d1a"),c.fillStyle=x,c.fillRect(f*u+1,d*h+1,u-2,h*.82),c.fillStyle="#0e1626",c.fillRect(f*u,d*h+h*.84,u,h*.16)}}c.strokeStyle=l?"#000":"#1b2740",c.lineWidth=Math.max(1,2*s);for(let d=0;d<=n;d++)c.beginPath(),c.moveTo(d*(e/n),0),c.lineTo(d*(e/n),t),c.stroke();for(let d=0;d<=i;d++)c.beginPath(),c.moveTo(0,d*(t/i)),c.lineTo(e,d*(t/i)),c.stroke()};return{map:an(rn(e,t,c=>a(c,!1)),{repeat:!0,aniso:8}),em:an(rn(e,t,c=>a(c,!0)),{repeat:!0,aniso:8})}}function Im(s=1){let e=1024*s,t=256*s,n=rn(e,t,i=>{let r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"#fff2d6"),r.addColorStop(.55,"#ffd9a0"),r.addColorStop(1,"#a8764a"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,0.9)";for(let o=0;o<8;o++)i.fillRect(o*(e/8)+e/32,8*s,e/16,6*s);i.fillStyle="rgba(40,24,14,0.55)";for(let o=0;o<=16;o++)i.fillRect(o*(e/16)-s,0,2*s,t);i.fillStyle="rgba(60,30,20,0.75)",i.fillRect(e*.3,t*.62,e*.4,t*.14),i.fillStyle="rgba(20,10,6,0.85)";for(let o of[.12,.22,.4,.58,.77,.9])i.beginPath(),i.arc(e*o,t*.46,t*.04,0,Math.PI*2),i.fill(),i.fillRect(e*o-t*.05,t*.5,t*.1,t*.34);i.fillStyle="#240406",i.fillRect(e*.38,t*.1,e*.24,t*.36),i.fillStyle="#ff3226",i.beginPath(),i.ellipse(e*.5,t*.28,e*.07,t*.1,0,0,Math.PI*2),i.fill(),i.fillStyle="#000",i.fillRect(e*.498,t*.19,e*.004,t*.18)});return an(n)}var Tu=null;function Wa(){return Tu||(Tu=an(rn(128,128,s=>{let e=s.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,128,128)}),{srgb:!1}),Tu)}var wu=null;function Dm(){return wu||(wu=an(rn(128,128,s=>{s.strokeStyle="#fff",s.lineWidth=5,s.beginPath(),s.arc(64,64,52,0,Math.PI*2),s.stroke()}),{srgb:!1}),wu)}function Lm(s,e=1){let t=Math.round(1024*e),n=Math.round(288*e),i=pr(s),r=Array.from({length:4},()=>{let a=i();return{kind:a<.5?"shutter":a<.72?"half":a<.88?"door":"blank",tone:26+Math.floor(i()*18),grime:i()}}),o=(a,c)=>{a.fillStyle=c?"#000":"#1c1d21",a.fillRect(0,0,t,n);let l=t/4;r.forEach((u,h)=>{let d=h*l,f=l*.06;if(c){if(u.kind==="half"){let g=a.createLinearGradient(0,n*.72,0,n);g.addColorStop(0,"rgba(255,240,215,0.15)"),g.addColorStop(1,"rgba(255,240,215,0.9)"),a.fillStyle=g,a.fillRect(d+f,n*.72,l-f*2,n*.28)}u.kind==="door"&&(a.fillStyle="#fff",a.fillRect(d+l*.47,n*.08,l*.06,n*.05));return}let m=u.tone;if(a.fillStyle=`rgb(${m},${m},${m+3})`,a.fillRect(d+2,0,l-4,n),u.kind==="shutter"||u.kind==="half"){let g=n*.12,p=u.kind==="half"?n*.72:n;a.fillStyle="#0e0f12",a.fillRect(d+f-4,g-6,l-f*2+8,8);for(let v=g;v<p;v+=7*e)a.fillStyle=`rgb(${m+22},${m+22},${m+24})`,a.fillRect(d+f,v,l-f*2,4*e),a.fillStyle=`rgb(${m+6},${m+6},${m+8})`,a.fillRect(d+f,v+4*e,l-f*2,3*e);a.fillStyle="#08090b",a.fillRect(d+f,p-3,l-f*2,3),u.kind==="half"?(a.fillStyle="#2b2620",a.fillRect(d+f,p,l-f*2,n-p)):(a.fillStyle="#0a0a0c",a.fillRect(d+l*.48,p-16,10,12))}else u.kind==="door"&&(a.fillStyle="#121316",a.fillRect(d+l*.36,n*.18,l*.28,n*.82),a.strokeStyle="#2c2e33",a.lineWidth=2,a.strokeRect(d+l*.38,n*.22,l*.24,n*.36),a.strokeRect(d+l*.38,n*.62,l*.24,n*.32));let x=a.createLinearGradient(0,0,0,n);x.addColorStop(0,`rgba(0,0,0,${.25+u.grime*.3})`),x.addColorStop(.3,"rgba(0,0,0,0)"),x.addColorStop(.85,"rgba(0,0,0,0)"),x.addColorStop(1,`rgba(0,0,0,${.35+u.grime*.3})`),a.fillStyle=x,a.fillRect(d,0,l,n);for(let g=0;g<6;g++)a.fillStyle=`rgba(0,0,0,${.05+i()*.12})`,a.fillRect(d+i()*l,0,1+i()*3,n*(.2+i()*.6));a.fillStyle="#060607",a.fillRect(d,0,3,n)})};return{map:an(rn(t,n,a=>o(a,!1)),{repeat:!0}),em:an(rn(t,n,a=>o(a,!0)),{repeat:!0})}}function Nm(s){return{uT:{value:0},uFog:{value:s.density},uFogColor:{value:new Ie(s.color)},uPx:{value:700}}}var Au="float fadeAt(float d, float u){ return exp(-u*u*d*d*0.6); }";function Um(s,e){return new ht({side:sn,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uFogColor:e.uFogColor},vertexShader:`
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
      }`})}function Fm(s,e,t,n,i){return new ht({transparent:!0,depthWrite:!1,blending:hn,side:sn,uniforms:{uMap:{value:s},uRect:{value:new Dt(...e)},uT:t.uT,uFog:t.uFog,uTint:{value:new Ie(n)},uPh:{value:i}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform sampler2D uMap; uniform vec4 uRect; uniform float uT, uFog, uPh; uniform vec3 uTint;
      varying vec2 vUv; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      ${Au}
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
      }`})}function Om(s,e,t){return new ht({transparent:!0,depthWrite:!1,blending:hn,side:sn,uniforms:{uT:s.uT,uFog:s.uFog,uA:{value:new Ie(e)},uB:{value:new Ie(t)}},vertexShader:`
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
      ${Au}
      void main(){
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 1.6);
        float bands = 0.55 + 0.45 * sin(vY * 3.2 - uT * 2.4);
        float fine = 0.7 + 0.3 * sin(vY * 38.0 + uT * 14.0);
        float climb = smoothstep(0.92, 1.0, sin(vY * 0.35 - uT * 1.1));
        vec3 c = mix(uA, uB, clamp(vY * 0.018 - 0.2 + 0.25 * sin(uT * 0.5), 0.0, 1.0));
        float k = (0.12 + rim * 1.15) * bands * fine + climb * 0.9;
        gl_FragColor = vec4(c * k * 3.0 * fadeAt(vD, uFog * 0.5), 1.0);
      }`})}function Ru(s,e,t,n,i){return new ht({transparent:!0,depthWrite:!1,blending:hn,side:sn,uniforms:{uC:{value:new Ie(s)},uK:{value:e},uP:{value:t},uInv:{value:n?1:0},uT:i.uT,uFog:i.uFog},vertexShader:`
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
      ${Au}
      void main(){
        float f = abs(dot(normalize(vN), normalize(vV)));
        float ax = pow(clamp(mix(vY, 1.0 - vY, uInv), 0.0, 1.0), uP);
        float dust = 0.82 + 0.18 * sin(vW.y * 0.7 + vW.x * 0.3 + uT * 0.8) * sin(vW.z * 0.4 - uT * 0.5);
        float edge = smoothstep(0.0, 0.7, f);
        float near = smoothstep(0.4, 3.0, vD);
        gl_FragColor = vec4(uC * uK * pow(f, 1.4) * edge * ax * dust * near * fadeAt(vD, uFog * 0.7), 1.0);
      }`})}function Bm(s,e){return new ht({transparent:!0,depthWrite:!1,blending:hn,uniforms:{uT:s.uT,uFog:s.uFog,uC:{value:new Ie(e)}},vertexShader:`
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
      }`,fragmentShader:"uniform vec3 uC; uniform float uFog; varying float vA; varying float vD; void main(){ gl_FragColor = vec4(uC * vA * 0.5 * exp(-uFog*uFog*vD*vD*0.5), 1.0); }"})}function Hm(s,e){return new ht({transparent:!0,depthWrite:!1,blending:hn,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog},vertexShader:`
      attribute vec2 aPh; uniform float uT; varying vec2 vUv; varying float vL; varying float vD;
      void main(){
        float life = fract(uT * aPh.y + aPh.x);
        vL = life; vUv = uv;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position * (0.08 + life * 0.55), 1.0);
        vD = -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform float uFog; varying vec2 vUv; varying float vL; varying float vD; void main(){ float a = texture2D(uMap, vUv).r * pow(1.0 - vL, 2.0) * smoothstep(0.0, 0.08, vL); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * a * 0.55 * exp(-uFog*uFog*vD*vD*0.6), 1.0); }"})}function zm(s,e){return new ht({transparent:!0,depthWrite:!1,blending:hn,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uPx:e.uPx},vertexShader:`
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
      }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vK; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vC * a * vK, 1.0); }"})}function km(s,e){return new ht({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uPx:e.uPx,uC:{value:new Ie("#6a94ac")}},vertexShader:`
      attribute vec3 aVent; attribute vec2 aSeed; uniform float uT, uPx, uFog; varying float vA; varying vec3 vWp;
      void main(){
        float life = fract(uT * (0.18 + aSeed.y * 0.12) + aSeed.x);
        vec3 p = aVent + vec3(sin(aSeed.x * 40.0 + life * 3.0) * life * 1.1, life * 5.0, cos(aSeed.x * 23.0) * life * 0.8);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = max(0.5, -mv.z);
        vA = sin(life * 3.14159) * 0.09 * exp(-uFog * uFog * d * d * 0.5); vWp = p;
        gl_PointSize = clamp((0.9 + life * 3.6) * uPx / d, 1.0, 140.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform vec3 uC; varying float vA; varying vec3 vWp; void main(){ float a = texture2D(uMap, gl_PointCoord).r; vec3 tint = uC + vec3(0.02, 0.1, 0.16) * smoothstep(-2.0, 2.0, vWp.x) ; gl_FragColor = vec4(tint * 0.7, a * vA); }"})}function Vm(s,e,t){return new ht({transparent:!0,depthWrite:!1,side:sn,uniforms:{uT:s.uT,uC:{value:new Ie(e)},uK:{value:t}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uK; uniform vec3 uC; varying vec2 vUv; varying float vD;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vUv * vec2(7.0, 2.0) + vec2(uT * 0.03, uT * 0.01);
        float n = vn(p) * 0.6 + vn(p * 2.3 + 7.0) * 0.3 + vn(p * 5.1) * 0.1;
        float a = smoothstep(0.35, 0.85, n) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y) * smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        a *= smoothstep(10.0, 34.0, vD);
        gl_FragColor = vec4(uC, a * uK);
      }`})}function Gm(s,e){s.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"wetground-v1"}function Wm(s){return new ht({transparent:!0,depthWrite:!1,blending:hn,uniforms:{uT:s.uT,uFog:s.uFog,uLook:{value:new de},uK:{value:2.1}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uFog, uK; uniform vec2 uLook; varying vec2 vUv; varying float vD;
      ${Au}
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
      }`})}function Xm(s){let e=Om(s,"#2ec8e0","#ff2a46"),t=[],n=x=>(t.push(x),x),i=(x,g,p=0,v=0,_=0)=>{let y=new Ge(x,e);return y.position.set(p,v,_),y.userData.noAO=!0,g.add(y),y},r=new Ut,o=new Ut;r.add(o);let a=n(new la([new de(.15,1),new de(.2,.88),new de(.26,.62),new de(.34,.36),new de(.4,.2)],28));i(a,o);for(let x of[-1,1])i(n(new Ss(.05,.2,4,10)),o,x*.08,.1,0);i(n(new Ss(.13,.3,6,14)),o,0,1.2,0).scale.set(1.15,1,.8);let c=i(n(new Pi(.17,.045,8,28)),o,0,1.02,0);c.rotation.x=Math.PI/2,i(n(new Mt(.26,.2,.06)),o,0,1.02,-.2),i(n(new Wt(.045,.05,.1,10)),o,0,1.43,0);let l=new Ut;l.position.set(0,1.56,0),o.add(l),i(n(new xn(.105,18,14)),l).scale.set(.95,1.08,1),i(n(new xn(.125,16,12)),l,0,.02,-.03).scale.set(1,1,1.05),i(n(new xn(.07,12,10)),l,0,.16,-.02),i(n(new ns(.1,.55,12,1,!0)),l,0,-.26,-.1);let u=i(n(new Pi(.34,.01,6,48)),l,0,.02,-.22),h=[];for(let x of[-1,1]){let g=new Ut;g.position.set(x*.2,1.34,0),o.add(g),i(n(new Ss(.04,.26,4,8)),g,0,-.17,0);let p=new Ut;p.position.set(0,-.34,0),g.add(p),i(n(new Ss(.035,.24,4,8)),p,0,-.15,0),i(n(new Ft(.22,.42)),p,x*.05,-.2,0),h.push({sh:g,el:p})}let d=i(n(new Pi(.55,.012,6,56)),r,0,.01,0);d.rotation.x=Math.PI/2;let f=i(n(new Pi(.4,.008,6,48)),r,0,.01,0);return f.rotation.x=Math.PI/2,{group:r,update:x=>{o.rotation.y=Math.sin(x*.25)*.7,o.rotation.z=Math.sin(x*.9)*.025,o.position.y=Math.sin(x*1.3)*.015,l.rotation.z=Math.sin(x*.7+1)*.07,l.rotation.y=Math.sin(x*.4)*.25,u.rotation.z=x*.6;let[g,p]=h;p.sh.rotation.z=-2.4+Math.sin(x*.9)*.1,p.el.rotation.z=-.5+Math.sin(x*3.2)*.55,g.sh.rotation.z=.35+Math.sin(x*.7)*.05,g.el.rotation.z=.5,d.scale.setScalar(1+Math.sin(x*1.5)*.04),f.rotation.z=x*.8},dispose:()=>{t.forEach(x=>x.dispose()),e.dispose()}}}var rb={z:-70,w:34,h:56,d:26,cols:8,rows:10,winY0:12};var qm={x:16,h:.245},Vn=(s,e,t,n,i,r,o,a)=>{let c=new Mt(e,t,n);c.translate(i,r,o);let l=c.attributes.position.count,u=new Float32Array(l*3);for(let h=0;h<l;h++)u.set(a,h*3);c.setAttribute("color",new Tt(u,3)),s.push(c)},Cu=s=>{let e=pn(s.map(t=>t.index?t.toNonIndexed():t),!1);return s.forEach(t=>t.dispose()),e},Pu=(s,e=2.4)=>new Et({color:new Ie(s).multiplyScalar(e),toneMapped:!1}),kt=27,Iu=51,Cs=["#2ec8e0","#2ec8e0","#3a8cff","#2ec8e0","#3a8cff","#ff2a46","#2ec8e0","#4da3ff"];function Ym({renderer:s,scene:e,high:t,look:n,vexvoid:i=!1}){let r=t?1:.5,o=(M,I)=>t?M:I,a=new Ut,c=[],l=M=>(c.push(M),M),u=pr(2048),h=(M,I)=>M+(I-M)*u(),d=M=>Math.floor(u()*M),f=rb,m=new qs;m.add(new Ge(new xn(50,24,16),new ht({side:bn,vertexShader:"varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 p; void main(){ float h = normalize(p).y; vec3 lo = vec3(0.05,0.10,0.16); vec3 hi = vec3(0.01,0.02,0.07); gl_FragColor = vec4(mix(lo, hi, smoothstep(-0.1,0.7,h)),1.); }"})));let x=(M,I,F,W,G,ee,ge)=>{let ce=new Ge(new Ft(F,W),new Et({color:new Ie(M).multiplyScalar(I),side:sn,toneMapped:!1}));ce.position.set(G,ee,ge),ce.lookAt(0,0,0),m.add(ce)};x("#ff2a2a",7,30,4,0,16,-40),x("#27c8e0",5,34,3,-30,10,-10),x("#ffa24a",3,30,3,30,12,-6),x("#2ec8e0",4,20,5,18,24,20),x("#ff2a46",3,8,16,-34,18,-26),x("#2ec8e0",5,6,20,34,20,-30),x("#3a8cff",4,6,12,-20,14,-44),x("#ffffff",3,14,2,-8,32,-12);let g=new po(s),p=g.fromScene(m,.03).texture;g.dispose(),m.traverse(M=>{let I=M;I.isMesh&&(I.geometry.dispose(),I.material.dispose())}),e.environment=p,e.environmentIntensity=.85,e.background=new Ie("#05060f");let v=new Zo("#071420",.0066);e.fog=v;let _=Nm(v),y=l(new ht({side:bn,depthWrite:!1,fog:!1,uniforms:{uT:_.uT},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
        }`})),A=new Ge(l(new xn(400,32,20)),y);A.renderOrder=-10,A.userData.noAO=!0,a.add(A),a.add(new pa("#4f78b8","#150a14",.38));let S=new tr("#78a8ff",.9);if(S.position.set(-40,70,10),S.target.position.set(0,0,-40),t){S.castShadow=!0,S.shadow.mapSize.set(2048,2048);let M=S.shadow.camera;M.left=-50,M.right=50,M.top=60,M.bottom=-60,M.near=10,M.far=200,S.shadow.bias=-5e-4,S.shadow.normalBias=.05}a.add(S,S.target);let w=new Nn("#ff2418",t?500:300,90,1.6);w.position.set(0,f.h-4,f.z+14),a.add(w);let D=new Nn("#ffc27a",t?160:100,34,1.7);D.position.set(0,5,f.z+9),a.add(D);let E=new Nn("#ffd27a",0,26,1.6);a.add(E);let T=n.material("concrete_floor_02",[60,120],"#3b404c",.35);T.roughness=.34,T.envMapIntensity=1.6,l(T);let U={tReflect:{value:null},uReflMat:{value:new Qe},uReflOn:{value:0},uT:_.uT,uWet:{value:1}};Gm(T,U);let B=new Ge(l(new Ft(200,400)),T);B.rotation.x=-Math.PI/2,B.position.set(0,0,-120),B.receiveShadow=!0,a.add(B);let z=null,J=new Qe,te=new de;t&&(s.getDrawingBufferSize(te),z=new Va(new Ft(2,2),{textureWidth:Math.max(64,Math.round(te.x*.5)),textureHeight:Math.max(64,Math.round(te.y*.5)),clipBias:.002,multisample:0}),z.rotation.x=-Math.PI/2,z.updateMatrixWorld(!0),J.copy(z.matrixWorld).invert(),U.tReflect.value=z.getRenderTarget().texture,U.uReflOn.value=1);let X=l(n.material("large_floor_tiles_02",[8,90],"#5a5d6a",.1));X.roughness=.45,X.envMapIntensity=1.2;for(let M of[-1,1]){let I=new Ge(l(new Mt(11,.25,400)),X);I.position.set(M*21.5,.12,-120),I.receiveShadow=!0,a.add(I)}let K=[],ie=(M,I,F,W,G=.03)=>{let ee=new Ft(M,I);ee.rotateX(-Math.PI/2),ee.translate(F,G,W),K.push(ee)};for(let M=-4;M>-300;M-=9)ie(.25,4,0,M);for(let M of[-1,1])ie(.2,300,M*15.4,-150);for(let M of[-9,-86,-150])for(let I=-6;I<=6;I++)ie(.7,3.6,I*1.9,M);let _e=l(new tt({color:"#c9ccd6",roughness:.4,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.add(new Ge(l(pn(K,!1)),_e)),K.forEach(M=>M.dispose());let Se=l(an(rn(256,512,M=>{M.fillStyle="#e8eaf2",M.font=`900 220px ${On}`,M.textAlign="center",M.textBaseline="middle",["\u6B62","\u307E","\u308C"].forEach((I,F)=>M.fillText(I,128,90+F*165))}))),Te=new Ge(l(new Ft(3.4,6.6)),l(new tt({map:Se,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1})));Te.rotation.x=-Math.PI/2,Te.position.set(-7,.035,-17),a.add(Te);let Ue=(M,I,F,W,G=!1)=>{let ee=new Rn(l(M),I,Math.max(1,F.length));return ee.count=F.length,F.forEach((ge,ce)=>ee.setMatrixAt(ce,ge)),W&&W.forEach((ge,ce)=>ee.setColorAt(ce,ge)),ee.instanceMatrix.needsUpdate=!0,ee.instanceColor&&(ee.instanceColor.needsUpdate=!0),ee.frustumCulled=!1,ee.castShadow=G,ee.receiveShadow=!0,a.add(ee),ee},ze=new L(0,1,0),Ke=(M,I,F,W=1,G=1,ee=1,ge=0)=>new Qe().compose(new L(M,I,F),new Jt().setFromAxisAngle(ze,ge),new L(W,G,ee)),rt=[],N=(M,I,F,W,G,ee=0,ge=1)=>rt.push({p:new L(M,I,F),c:new Ie(W).multiplyScalar(ge),s:G,ph:u(),mode:ee}),q=[],V=(M,I,F,W,G,ee=1,ge=.03)=>q.push({p:new L(M,ge,I),sx:F,sz:W,c:new Ie(G).multiplyScalar(ee*.22)}),be=["office","resi","glass","old"],ye=be.map((M,I)=>Sm(M,7+I*29,r));ye.forEach(M=>c.push(M.map,M.em));let Ne={office:[.5,.35,1.1,1],resi:[.75,.15,1,.7],glass:[.22,.8,1.15,1.5],old:[.8,.1,1,.6]},Ve={};be.forEach((M,I)=>{let[F,W,G,ee]=Ne[M];Ve[M]=l(new tt({map:ye[I].map,emissiveMap:ye[I].em,emissive:"#ffffff",emissiveIntensity:G,roughness:F,metalness:W,envMapIntensity:ee}))});let Le=i?Lm(5,r):Tm(5,r);c.push(Le.map,Le.em);let re=l(new tt({map:Le.map,emissiveMap:Le.em,emissive:"#ffffff",emissiveIntensity:i?2.2:1.5,roughness:i?.62:.55,metalness:i?.35:.2})),Ee=l(new tt({color:"#232733",roughness:.75,metalness:.25})),ve=l(new tt({color:"#0e1018",roughness:.9,metalness:.1})),De=l(new tt({color:"#0c0e14",roughness:.55,metalness:.85})),R=l(new tt({color:"#2a2d38",roughness:.85,metalness:.05})),pe={office:[],resi:[],glass:[],old:[],shop:[],trim:[],roof:[],iron:[],concrete:[]},ae=(M,I,F,W,G,ee,ge,ce=0,We=0,it=0,dt=0)=>{let ln=new Mt(F-I,G-W,ge-ee);if(ln.translate((I+F)/2,(W+G)/2,(ee+ge)/2),ce>0){let Kt=ln.attributes.position,$t=ln.attributes.normal,qt=ln.attributes.uv;for(let yt=0;yt<Kt.count;yt++)Math.abs($t.getX(yt))>.5?qt.setXY(yt,Kt.getZ(yt)/ce+it,Kt.getY(yt)/We+dt):Math.abs($t.getZ(yt))>.5?qt.setXY(yt,Kt.getX(yt)/ce+it,Kt.getY(yt)/We+dt):qt.setXY(yt,Kt.getX(yt)/ce,Kt.getZ(yt)/ce)}M.push(ln)},ne=[],se=[],C=[],b=[],H=(M,I,F,W,G,ee)=>{let ge=new Ie(ee).multiplyScalar(3.2),ce=.16,We=[[M,I,W,W+ce],[M,I,F-ce,F],[M,M+ce,W,F],[I-ce,I,W,F]];for(let[it,dt,ln,Kt]of We){let $t=new Mt(dt-it,.16,Kt-ln);$t.translate((it+dt)/2,G,(ln+Kt)/2),b.push({g:$t,c:ge})}},Q=(M,I,F,W,G)=>{let ee=new Mt(.16,W-F,.16);ee.translate(M,(F+W)/2,I),b.push({g:ee,c:new Ie(G).multiplyScalar(3)})},me=(M,I,F,W,G,ee,ge,ce)=>{let We=u()*4,it=(Bt,wn,Tr,bi,ui)=>{let ii=M>0?Bt:-ge,Xu=M>0?ge:-Bt;ae(pe[G],ii,Xu,wn,Tr,ui,bi,Em,bf,We,-wn/bf)},dt=(Bt,wn,Tr,bi,ui,ii)=>{let Xu=M>0?Bt-ii:-ge-ii,L0=M>0?ge+ii:-Bt+ii;ae(pe.trim,Xu,L0,wn,Tr,ui-ii,bi+ii)},ln=ce?4.5:0;if(ce){let Bt=M>0?ee:-ge,wn=M>0?ge:-ee;ae(pe.shop,Bt,wn,0,ln,F,I,Ef.w,Ef.h,u()*4,0),dt(ee,ln,ln+.35,I,F,.7)}let Kt=ln+(ce?.35:0),$t=W>36?Math.max(Kt+8,W*.6):W;it(ee,Kt,$t,I,F);for(let Bt=Kt+14.4;Bt<$t-2;Bt+=14.4)dt(ee,Bt,Bt+.22,I,F,.14);let qt=$t,yt=[I,F],ni=ee;if(W>36){dt(ee,$t,$t+.4,I,F,.3);let Bt=W>52?W*.85:W;ni=ee+1.6,yt=[I-.8,F+.8],it(ni,$t+.4,Bt,yt[0],yt[1]),qt=Bt,W>52&&(dt(ni,Bt,Bt+.4,yt[0],yt[1],.3),ni=ee+3.6,yt=[I-2.2,F+2.2],it(ni,Bt+.4,W,yt[0],yt[1]),qt=W)}if(dt(ni,qt,qt+.55,yt[0],yt[1],.22),ne.push({xa:M>0?ni:-ge,xb:M>0?ge:-ni,za:yt[0],zb:yt[1],y:qt+.55,kind:G,h:qt}),!ce)return;let Wu=M>0?ni:-ge,D0=M>0?ge:-ni;if(u()<.8&&H(Wu,D0,yt[0],yt[1],qt+.65,Cs[d(Cs.length)]),W>30&&u()<.7){let Bt=Cs[d(Cs.length)],wn=M*(kt+.12);Q(wn,I-.1,Kt,Math.min($t,W*.75),Bt),Q(wn,F+.1,Kt,Math.min($t,W*.75),Bt)}if(se.push({sx:M,za:I,zb:F,h:W,h1:$t,kind:G}),(G==="resi"||G==="old")&&I-F>13&&u()<.8){let Bt=(I+F)/2+h(-2,2),wn=M*(ee-.55),Tr=Math.min(5,Math.floor(($t-Kt-3)/3.6));for(let bi=0;bi<Tr;bi++){let ui=Kt+1.4+bi*3.6;if(ae(pe.iron,wn-.55,wn+.55,ui,ui+.08,Bt-1.6,Bt+1.6),ae(pe.iron,wn-M*.55-.03,wn-M*.55+.03,ui,ui+.95,Bt-1.6,Bt+1.6),ae(pe.iron,wn-.55,wn+.55,ui+.9,ui+.95,Bt-1.6,Bt+1.6),bi<Tr-1){let ii=new Mt(.8,.07,2.4);ii.rotateX((bi%2?1:-1)*Math.atan2(3.6,2.4)),ii.translate(wn,ui+1.8,Bt+(bi%2?-.1:.1)),pe.iron.push(ii)}}}};for(let M of[-1,1]){let I=-3.5,F=0,W=!1;for(;I>-200;){let ee=h(13,21),ge=I,ce=I-ee,We=h(22,62),it=be[d(4)];M<0&&!W&&ce<-70?(ce=ge-20,We=32,it="office",W=!0):ge<-26&&ge>-72&&We>40&&(We=h(30,40)),me(M,ge,ce,We,it,kt,Iu,!0),I=ce;let dt=F%3===2&&I>-150?5.4:h(1.2,2.6);dt>4&&C.push({sx:M,z:I-dt/2}),I-=dt,F++}let G=-2;for(;G>-210;){let ee=h(18,30);me(M,G,G-ee,h(70,150),u()<.6?"glass":"office",Iu,Iu+26,!1),G-=ee}}let $=-20,k=15.2,Z=21,ue=9.4;{ae(pe.concrete,$-4.7,$+4.7,k,k+1.3,-230,14),ae(pe.concrete,$-4.7,$-4.5,k+1.3,k+2.4,-230,14),ae(pe.concrete,$+4.5,$+4.7,k+1.3,k+2.4,-230,14);for(let F=4;F>-220;F-=20)ae(pe.concrete,$-.9,$+.9,0,k,F-1.3,F+1.3),ae(pe.concrete,$-3.6,$+3.6,k-1,k,F-1.6,F+1.6);for(let F=0;F>-220;F-=10)ae(pe.iron,$-4.4,$-4.3,k+1.3,k+6.2,F-.05,F+.05),N($-3.9,k+6.2,F,"#ffb35a",1.1,0,1),N($-3,k-.3,F-5,"#ff9a3a",.9,0,.8),N($+3,k-.3,F-5,"#ff9a3a",.9,0,.8);ae(pe.concrete,Z-2.6,Z+2.6,ue-.5,ue+.3,-230,14),ae(pe.concrete,Z-2.6,Z-2.45,ue+.3,ue+1.15,-230,14),ae(pe.concrete,Z+2.45,Z+2.6,ue+.3,ue+1.15,-230,14),ae(pe.iron,Z-.95,Z-.85,ue+.3,ue+.42,-230,14),ae(pe.iron,Z+.85,Z+.95,ue+.3,ue+.42,-230,14),ae(pe.iron,Z-.02,Z+.02,ue+4.6,ue+4.64,-230,14);for(let F=0;F>-220;F-=14)ae(pe.concrete,Z-.7,Z+.7,0,ue-.5,F-1.8,F+1.8),ae(pe.iron,Z+2.3-.07,Z+2.3+.07,ue+.3,ue+4.6,F-.07,F+.07),N(Z,ue-.8,F,"#7ee8ff",1,2,.8)}{let M=[];for(let I of[$-2.2,$+2.2])for(let F=12;F>-230;F-=3){let W=new Ft(.12,1.4);W.rotateX(-Math.PI/2),W.translate(I,k+1.32,F),M.push(W)}a.add(new Ge(l(pn(M,!1)),l(Pu("#bcd8ec",.9)))),M.forEach(I=>I.dispose())}let ke={...Ve,shop:re,trim:Ee,roof:ve,iron:De,concrete:R};if(Object.keys(pe).forEach(M=>{if(!pe[M].length)return;let I=l(pn(pe[M],!1));pe[M].forEach(W=>W.dispose());let F=new Ge(I,ke[M]);F.castShadow=t&&M!=="iron",F.receiveShadow=!0,a.add(F)}),b.length){let M=b.map(({g:F,c:W})=>{let G=F.attributes.position.count,ee=new Float32Array(G*3);for(let ge=0;ge<G;ge++)ee.set([W.r,W.g,W.b],ge*3);return F.setAttribute("color",new Tt(ee,3)),F}),I=l(pn(M,!1));M.forEach(F=>F.dispose()),a.add(new Ge(I,l(new Et({vertexColors:!0,toneMapped:!1,fog:!0}))))}let xe=[],Ce=[],Oe=[];for(let M of ne){if(M.xb-M.xa<4||M.za-M.zb<4)continue;let I=()=>h(M.xa+1.5,M.xb-1.5),F=()=>h(M.zb+1.5,M.za-1.5);(M.kind==="resi"||M.kind==="old")&&u()<.5&&xe.push(Ke(I(),M.y,F(),1,h(.8,1.2),1,u()*6));let W=Math.floor(h(1,o(6,4)));for(let G=0;G<W;G++)Ce.push(Ke(I(),M.y,F(),h(.8,2.2),h(.7,1.4),h(.8,2),u()*3));if(u()<.7){let G=h(6,M.h>70?26:16),ee=I(),ge=F();Oe.push(Ke(ee,M.y+G/2,ge,1,G,1)),M.h>28&&N(ee,M.y+G+.3,ge,"#ff2a1a",1.6,1,2.5)}}let Xe=(()=>{let M=[],I=new Wt(1.15,1.15,2.4,14);I.translate(0,2.6,0);let F=new ns(1.3,.8,14);F.translate(0,4.2,0),M.push(I,F);for(let[G,ee]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]]){let ge=new Wt(.06,.06,1.5,4);ge.translate(G,.75,ee),M.push(ge)}let W=pn(M,!1);return M.forEach(G=>G.dispose()),W})();xe.length&&Ue(Xe,l(new tt({color:"#3a3430",roughness:.7,metalness:.5})),xe),Ce.length&&Ue(new Mt(1,1,1).translate(0,.5,0),l(new tt({color:"#4a505e",roughness:.65,metalness:.4})),Ce),Oe.length&&Ue(new Wt(.05,.1,1,5),l(new tt({color:"#15171d",roughness:.5,metalness:.9})),Oe);let Pe=[],ot=()=>Pe.push({c0:a.children.length,g0:rt.length,c1:-1,g1:-1}),O=()=>{let M=Pe[Pe.length-1];M.c1=a.children.length,M.g1=rt.length};i&&ot();let Re=wm(r);c.push(Re.texture);let fe=[],we=(M,I,F,W,G,ee,ge)=>{let ce=u(),We=ce<.5?0:ce<.7?1:ce<.8?2:ce<.92?3:4,it=(ge?2.2:1.8)*G,dt=it*4;fe.push({m:Ke(I,F,W,it,dt,1,ee),rect:Re.rect(M),mode:We,ph:u(),spd:h(1,2.6)}),(t||u()<.5)&&N(I-Math.sin(ee)*.1,F,W+Math.cos(ee)*.15,Ga[M].c,dt*.24,0,.14)},Me=[8,9,10,11,12];for(let M of se){let I=Math.floor((M.za-M.zb)/o(6,7.5))+1;for(let F=0;F<I;F++){let W=u()<.3?Me[d(Me.length)]:d(Ga.length),G=u()<.45,ee=h(.7,1.5),ge=Math.min(M.h1-2,30),ce=(G?2.2:1.8)*ee*4;if(ge<10)continue;let We=Math.min(ge-ce/2,h(6+ce/2,ge)),it=h(M.zb+1.4,M.za-1.4);G?we(W,M.sx*(kt-.14),We,it,ee,M.sx>0?-Math.PI/2:Math.PI/2,!0):we(W,M.sx*(kt-.95),We,it,ee,0,!1)}}for(let M of C)we(d(Ga.length),M.sx*(kt+3),7.5+u()*3,M.z+h(-1.4,1.4),1.3,0,!1);{let M=fe.length,I=new Ft(1,1),F=new Float32Array(M*4),W=new Float32Array(M*3);fe.forEach((ee,ge)=>{F.set(ee.rect,ge*4),W.set([ee.ph,ee.mode,ee.spd],ge*3)}),I.setAttribute("aRect",new li(F,4)),I.setAttribute("aAnim",new li(W,3));let G=new Rn(l(I),l(Um(Re.texture,_)),M);fe.forEach((ee,ge)=>G.setMatrixAt(ge,ee.m)),G.instanceMatrix.needsUpdate=!0,G.frustumCulled=!1,a.add(G)}let he=Am(r);c.push(he.texture);let Ae=l(new Ft(1,1)),Fe=(M,I,F,W,G,ee,ge)=>{let ce=new Ge(Ae,l(Fm(he.texture,he.rect(M),_,ge,u()*4)));ce.position.set(I,F,W),ce.scale.set(G,G,1),ce.rotation.y=ee,ce.userData.noAO=!0,a.add(ce)};{let M=se.filter(G=>G.sx>0&&G.za<-18&&G.za>-150&&G.h1>18),I=se.filter(G=>G.sx<0&&G.za<-18&&G.za>-150&&G.h1>18),F=(G,ee)=>G[Math.min(G.length-1,ee)];if(M.length>3){let[G,ee,ge]=[F(M,1),F(M,3),F(M,5)];Fe(1,kt-.4,Math.min(G.h1-6,17),(G.za+G.zb)/2,11,-Math.PI/2+.2,"#e8f4ff"),Fe(2,kt-.4,Math.min(ee.h1-6,24),(ee.za+ee.zb)/2,10,-Math.PI/2+.25,"#e6f1ff"),Fe(4,kt-.4,Math.min(ge.h1-7,16),(ge.za+ge.zb)/2,11,-Math.PI/2+.3,"#ffffff")}if(I.length>3){let[G,ee]=[F(I,2),F(I,4)];Fe(3,-kt+.4,Math.min(G.h1-6,15),(G.za+G.zb)/2,11,Math.PI/2-.2,"#e8f4ff"),Fe(7,-kt+.4,Math.min(ee.h1-6,22),(ee.za+ee.zb)/2,10,Math.PI/2-.25,"#e8f4ff")}ne.filter(G=>G.xa>kt&&G.h>80&&G.zb<-25&&G.za>-150).slice(0,3).forEach((G,ee)=>Fe([5,6,0][ee],(G.xa+G.xb)/2-10,G.y+9,G.za-2,22,-.4,"#ffffff"))}let je=ne.filter(M=>M.xb>-40&&M.xb<-20&&M.za>-96&&M.zb<-68).sort((M,I)=>Math.abs((M.za+M.zb)/2+82)-Math.abs((I.za+I.zb)/2+82))[0]??ne.find(M=>M.xb<0),He=Xm(_);He.group.scale.setScalar(24/1.8),He.group.position.set((je.xa+je.xb)/2+2,je.y,(je.za+je.zb)/2),a.add(He.group),c.push(He);let mt=new Ge(l(new Wt(7,3,13,20,1,!0)),l(Ru("#35e8ff",.3,1,!0,_)));mt.position.copy(He.group.position).add(new L(0,6.5,0)),mt.userData.noAO=!0,a.add(mt),N(He.group.position.x,je.y+1,He.group.position.z,"#35e8ff",14,0,.55);let ut=6,At=9,Nt=(()=>{let M=new Ci,I=1.5,F=.7;M.moveTo(-I,-1.2),M.lineTo(I,-1.2),M.lineTo(I,1.55-F),M.quadraticCurveTo(I,1.55,I-F,1.55),M.lineTo(-I+F,1.55),M.quadraticCurveTo(-I,1.55,-I,1.55-F),M.closePath();let W=new is(M,{depth:At-.5,bevelEnabled:!0,bevelSize:.12,bevelThickness:.25,bevelSegments:2,curveSegments:6});W.translate(0,0,-(At-.5)/2);let G=new Mt(2.5,.4,At-1.2);G.translate(0,-1.4,0);let ee=[W.index?W.toNonIndexed():W.clone(),G.index?G.toNonIndexed():G.clone()];W.dispose(),G.dispose();let ge=pn(ee,!1);return ee.forEach(ce=>ce.dispose()),ge})(),_t=(()=>{let M=[],I=[1.5,1.35,1];for(let F of[-1,1]){for(let W=0;W<6;W++)Vn(M,.05,.85,.95,F*1.63,.45,-3.3+W*1.32,I);Vn(M,.05,.08,At-.6,F*1.64,-.95,0,[.3,2.2,2.8]),Vn(M,.05,.05,At-.8,F*1.62,1.08,0,[.6,.9,1.3]);for(let W of[-4.1,4.1])Vn(M,.06,1.9,.06,F*1.63,.1,W,[.9,1.1,1.4])}return Vn(M,.5,.06,.5,0,1.6,-3.6,[3,.25,.25]),Vn(M,.5,.06,.5,0,1.6,3.6,[3,.25,.25]),Cu(M)})(),Yt=new Rn(l(Nt),l(new tt({color:"#d4d8e2",roughness:.28,metalness:.75,envMapIntensity:1.7})),ut),En=new Rn(l(_t),l(new Et({vertexColors:!0,toneMapped:!1})),ut);En.instanceMatrix=Yt.instanceMatrix,Yt.instanceMatrix.setUsage(hu),Yt.frustumCulled=En.frustumCulled=!1,a.add(Yt,En);let qn=(()=>{let M=[];Vn(M,2.4,.12,.08,0,.95,0,[3,3,2.7]);for(let I of[-1,1])Vn(M,.55,.22,.08,I*.95,-.7,0,[3.2,3.1,2.8]);return Vn(M,2,.9,.04,0,.35,-.02,[.05,.25,.35]),new Ge(l(Cu(M)),En.material)})();a.add(qn),i&&O();let on=[],yi=(M,I,F,W,G=!1)=>on.push({x0:M-F,x1:M+F,z0:I-W,z1:I+W,low:G}),Za=l(new tt({color:"#1b1e25",roughness:.5,metalness:.8})),Ka=l(Pu("#ffcf8a",3)),Is=[],vr=[],hs=[],_r=[],Ds=[];for(let M=0;M<10;M++)for(let I of[-1,1]){let F=-10-M*14-(I>0?7:0),W=new Wt(.12,.17,8,8);W.translate(I*16.5,4,F),yi(I*16.5,F,.17,.17,!0);let G=new Mt(2.6,.15,.15);G.translate(I*15.3,8,F),hs.push(W,G);let ee=new Mt(.9,.12,.4);if(ee.translate(I*14.3,7.9,F),_r.push(ee),vr.push(new L(I*16.5,8.2,F)),Ds.push(new L(I*14.3,7.4,F)),N(I*14.3,7.85,F,"#ffb860",1,2,.6),M<3){let ge=new Nn("#ffb35a",60,26,1.7);ge.position.set(I*14.3,7.4,F),a.add(ge),Is.push(ge)}}a.add(new Ge(l(pn(hs,!1)),Za),new Ge(l(pn(_r,!1)),Ka)),hs.forEach(M=>M.dispose()),_r.forEach(M=>M.dispose());let $a=new Wt(.25,4.6,7.4,16,1,!0);$a.translate(0,3.7,0);let yr=new Rn(l($a),l(Ru("#ffb460",.16,1.2,!1,_)),Ds.length);Ds.forEach((M,I)=>yr.setMatrixAt(I,Ke(M.x,.02,M.z))),yr.userData.noAO=!0,yr.frustumCulled=!1,a.add(yr),Ds.forEach(M=>V(M.x*.8,M.z,11,11,"#ffa550",1));let _o=[],Ja=[],ja=(M,I,F,W=!1)=>{let G=[];for(let ge=0;ge<=8;ge++){let ce=ge/8;G.push(new L().lerpVectors(M,I,ce).add(new L(0,-F*4*ce*(1-ce),0)))}let ee=new io(G);_o.push(new ua(ee,14,.03,3,!1)),W&&Ja.push(ee)},yo=vr.filter(M=>M.x<0).sort((M,I)=>I.z-M.z),P=vr.filter(M=>M.x>0).sort((M,I)=>I.z-M.z);for(let M of[yo,P])for(let I=0;I<M.length-1;I++)for(let F of[0,-.3,.3])ja(M[I].clone().add(new L(0,F,0)),M[I+1].clone().add(new L(0,F*.8,0)),.7+F*.3);for(let M=0;M<Math.min(yo.length,P.length);M+=2){let I=yo[M],F=P.reduce((W,G)=>Math.abs(G.z-I.z)<Math.abs(W.z-I.z)?G:W);ja(I.clone(),F.clone().setZ(I.z-1.5),1.6,M%4===0)}a.add(new Ge(l(pn(_o,!1)),l(new tt({color:"#07080b",roughness:.6,metalness:.2})))),_o.forEach(M=>M.dispose());let Y=[],le=[],oe=["#ff3a1a","#ff7a22","#ff3a1a","#ff9a3a"],j=(M,I,F,W=1)=>{let G=oe[d(oe.length)];Y.push(Ke(M,I,F,W,W,W)),le.push(new Ie(G).multiplyScalar(1.5)),N(M,I,F,G,.5*W,3,.25)};for(let M of se)for(let I=M.za-1.8;I>M.zb+1.2;I-=h(2.4,3.8))u()<.4&&j(M.sx*(kt-.9),h(3.1,3.7),I);for(let M of Ja)for(let I=1;I<12;I++){let F=M.getPoint(I/12);j(F.x,F.y-.35,F.z,.55)}for(let M of C){let I=o(9,5);for(let W=0;W<I;W++){let G=M.sx*(kt+2+W*2.4);j(G,h(3.9,4.6),M.z+h(-1.8,1.8)),W%2===0&&V(G,M.z,6,6,W%4===0?"#ff5a3a":"#ff9a4a",.7)}let F=new Ge(l(new Ft(4.6,9)),l(new Et({map:Wa(),color:new Ie(Cs[d(Cs.length)]).multiplyScalar(1.1),transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1,fog:!1})));F.position.set(M.sx*(Iu-.3),5,M.z),F.rotation.y=M.sx>0?-Math.PI/2:Math.PI/2,F.userData.noAO=!0,a.add(F)}Ue(new xn(.3,10,8).scale(1,1.3,1),l(new Et({toneMapped:!1})),Y,le);let Be=Rm(r);c.push(Be.map,Be.em);let Ze=l(new tt({map:Be.map,emissiveMap:Be.em,emissive:"#ffffff",emissiveIntensity:1.8,roughness:.35,metalness:.55})),qe=[[],[],[]],$e=["#2ec8e0","#3a8cff","#ff9a3a"],Je=(M,I,F)=>{let W=d(3);qe[W].push(Ke(M,.25,I,1,1,1,F)),yi(M,I,.46,.46),V(M+Math.sin(F)*1.6,I+Math.cos(F)*1.6,4.5,4.5,$e[W],.9,.27),N(M+Math.sin(F)*.5,1.4,I+Math.cos(F)*.5,$e[W],1.2,0,.25)};for(let M of se)for(let I=M.za-2;I>M.zb+2;I-=h(7,12))if(u()<.7){let F=M.sx>0?-Math.PI/2:Math.PI/2;Je(M.sx*(kt-1.3),I,F),u()<.5&&Je(M.sx*(kt-1.3),I-1.1,F)}for(let M of C)Je(M.sx*(kt+7),M.z-1.9,Math.PI),u()<.7&&Je(M.sx*(kt+12),M.z+1.9,0);qe.forEach((M,I)=>{let F=new Mt(.9,1.9,.85);F.translate(0,.95,0);let W=F.attributes.uv;for(let G=0;G<W.count;G++)G>=16&&G<20?W.setXY(G,(I+W.getX(G))/3,W.getY(G)):W.setXY(G,.01+I/3,.99);M.length?Ue(F,Ze,M):F.dispose()});let lt=an(rn(128,32,M=>{M.fillStyle="#e8e8ea",M.fillRect(0,0,128,32),M.fillStyle="#ff7a1a";for(let I=-2;I<10;I++)M.beginPath(),M.moveTo(I*16,32),M.lineTo(I*16+8,32),M.lineTo(I*16+24,0),M.lineTo(I*16+16,0),M.fill()}));c.push(lt);let st=[];for(let M=0;M<7;M++){let I=6.6+M*1.7,F=-27-M*.6;st.push(Ke(I,.5,F,1,1,1,.12+M*.01)),yi(I,F,.8,.2,!0),M%2===0&&N(I,1.2,F,"#ffb000",.9,1,3)}for(let M of[-1,1])for(let I=0;I<4;I++){let F=-34-I*1.7-(M>0?40:0);st.push(Ke(M*14.6,.5,F,1,1,1,Math.PI/2)),yi(M*14.6,F,.14,.8,!0)}Ue(new Mt(1.6,.8,.22),l(new tt({map:lt,roughness:.5,metalness:.1})),st,void 0,t);let ft=[],Pt=[],Xt=[],Zt=[],It=[],nt=(M,I)=>{let F=4+d(4);for(let G=0;G<F;G++)ft.push(Ke(M+h(-1.1,1.1),.45,I+h(-1,1),h(.8,1.3),h(.7,1.1),h(.8,1.3),u()*6)),Pt.push(new Ie(["#10131a","#1a1226","#0f1a1a","#2a2a30"][d(4)]));if(u()<.6){let G=M+h(-1.2,1.2),ee=I+h(-1,1);Xt.push(Ke(G,.25,ee)),yi(G,ee,.36,.36,!0),Zt.push(new Ie(["#2a3d48","#3a2a48","#2f4a36","#4a3a2a"][d(4)]))}let W=d(4);for(let G=0;G<W;G++)It.push(Ke(M+h(-1.4,1.4),.45+G%2*.4,I+h(-1,1),h(.8,1.4),1,h(.8,1.2),u()*3))};for(let M of C)nt(M.sx*(kt+.5),M.z+1.8),nt(M.sx*(kt+5),M.z-2),nt(M.sx*(kt-1.5),M.z+3.6);for(let M of se)u()<.5&&nt(M.sx*(kt-1.2),h(M.zb+2,M.za-2));ft.length&&Ue(new aa(.35,1),l(new tt({color:"#ffffff",roughness:.22,metalness:.1,envMapIntensity:1.8})),ft,Pt),Xt.length&&Ue(new Wt(.38,.32,.95,10).translate(0,.47,0),l(new tt({color:"#ffffff",roughness:.5,metalness:.3})),Xt,Zt),It.length&&Ue(new Mt(.6,.4,.5),l(new tt({color:"#6b5238",roughness:.9})),It);let Rt=[new L(-3.5,0,-19),new L(5.5,0,-34),new L(-6,0,-52),new L(3,0,-64),new L(-11,0,-41),new L(10,0,-76)];Ue(new Wt(.5,.5,.04,16),l(new tt({color:"#15171d",roughness:.4,metalness:.9})),Rt.map(M=>Ke(M.x,.04,M.z)));let bt=Rt.slice(0,o(6,4));for(let M of C.slice(0,o(6,3)))bt.push(new L(M.sx*(kt+3),0,M.z-2));{let M=o(26,14),I=bt.length*M,F=new Float32Array(I*3),W=new Float32Array(I*3),G=new Float32Array(I*2);bt.forEach((ce,We)=>{for(let it=0;it<M;it++){let dt=We*M+it;W.set([ce.x,.1,ce.z],dt*3),G.set([it/M,u()],dt*2)}});let ee=l(new wt);ee.setAttribute("position",new Tt(F,3)),ee.setAttribute("aVent",new Tt(W,3)),ee.setAttribute("aSeed",new Tt(G,2));let ge=new Es(ee,l(km(Wa(),_)));ge.frustumCulled=!1,ge.userData.noAO=!0,a.add(ge),bt.forEach(ce=>V(ce.x,ce.z,5,5,"#a68cff",.35))}let Pn=(()=>{let M=new Ci,I=[[2.35,.3],[2.2,.5],[1.15,.66],[.25,1.02],[-.95,1.06],[-1.9,.82],[-2.3,.62],[-2.3,.3],[-1.9,.16],[1.9,.16]];M.moveTo(I[0][0],I[0][1]);for(let[ge,ce]of I.slice(1))M.lineTo(ge,ce);M.closePath();let F=1.75,W=new is(M,{depth:F,bevelEnabled:!0,bevelSize:.09,bevelThickness:.1,bevelSegments:2,curveSegments:1});W.rotateY(-Math.PI/2),W.translate(F/2,0,0);let G=[W.index?W.toNonIndexed():W.clone()];W.dispose();for(let ge of[-1,1]){let ce=new Wt(.2,.24,1.6,10);ce.rotateX(Math.PI/2),ce.translate(ge*.98,.32,-1.45),G.push(ce.toNonIndexed()),ce.dispose()}let ee=pn(G,!1);return G.forEach(ge=>ge.dispose()),ee.computeVertexNormals(),ee})(),Wi=(()=>{let M=[],I=new Ci;I.moveTo(1.05,.7),I.lineTo(.27,1.05),I.lineTo(-.9,1.09),I.lineTo(-1.5,.92),I.closePath();let F=new is(I,{depth:1.5,bevelEnabled:!1});F.rotateY(-Math.PI/2),F.translate(.75,.02,0);let W=F.attributes.position.count,G=new Float32Array(W*3);for(let ee=0;ee<W;ee++)G.set([.04,.12,.18],ee*3);F.setAttribute("color",new Tt(G,3)),M.push(F),Vn(M,1.7,.04,3.9,0,.12,0,[.4,1.6,2.4]),Vn(M,1.65,.06,.06,0,.5,2.27,[3,3,2.8]);for(let ee of[-1,1])Vn(M,.32,.1,.06,ee*.6,.36,2.33,[3.4,3.4,3.2]);Vn(M,1.85,.07,.06,0,.6,-2.38,[3,.12,.1]);for(let ee of[-1,1])Vn(M,.04,.03,3.2,ee*.97,.62,.3,[.5,1.4,2.2]),Vn(M,.3,.3,.05,ee*.98,.32,-2.27,[.6,2.2,3.2]);return Cu(M.map(ee=>ee.index?ee.toNonIndexed():ee))})(),Bn=(()=>{let M=[];for(let I of[-1,1])for(let F of[!1,!0]){let W=new Ft(.22,7,1,1);W.rotateX(-Math.PI/2),F&&W.rotateZ(Math.PI/2),W.translate(I*.98,.32,-2.3-3.5);let G=W.attributes.position,ee=new Float32Array(G.count*3);for(let ge=0;ge<G.count;ge++){let ce=cs.clamp((G.getZ(ge)+9.3)/7,0,1);ee.set([.5*ce,1.6*ce,2.4*ce],ge*3)}W.setAttribute("color",new Tt(ee,3)),M.push(W)}return Cu(M)})(),fs=l(new tt({color:"#ffffff",roughness:.22,metalness:.9,envMapIntensity:1.8})),Ot=l(new Et({vertexColors:!0,toneMapped:!1})),mn=["#0b0d12","#9aa6b4","#4a1018","#0e3a46","#10203a","#b8c0c8"],Sn=["#2ec8e0","#3a8cff","#2ec8e0","#ff2a46"],Tn=o(12,7),yn=[],Mr=[],Mi=[];for(let M=0;M<Tn;M++){let I=M%2?1:-1,F=-14-M*h(9,12);yn.push(Ke(I*13.3,.45,F,1,1,1,u()<.5?0:Math.PI)),yi(I*13.3,F,1.2,2.45,!0),Mr.push(new Ie(mn[d(mn.length)]));let W=Sn[d(Sn.length)];Mi.push(new Ie(W)),V(I*13.3,F,4.6,7,W,.55),N(I*13.3,.3,F,W,1.2,0,.3)}Ue(Pn.clone(),fs,yn,Mr,t),Ue(Wi.clone(),Ot,yn,Mi);let Xi=[];for(let M=0;M<o(46,20);M++){let I=u()<.5?1:-1;M%3===0?Xi.push({x:h(-170,170),y:h(32,120),z:h(-110,-260),ax:0,dir:I,spd:h(10,24),sc:h(2.2,4.5),lo:-180,hi:180,ry:I>0?Math.PI/2:-Math.PI/2}):Xi.push({x:(u()<.5?-1:1)*h(34,75),y:h(26,95),z:h(-250,20),ax:1,dir:I,spd:h(12,28),sc:h(2,4),lo:-270,hi:30,ry:I>0?Math.PI:0})}let p0=[$-3.1,$-1.1,$+1.1,$+3.1];for(let M=0;M<o(14,8);M++){let I=M%4,F=I<2?-1:1;Xi.push({x:p0[I],y:k+1.55,z:h(-200,10),ax:1,dir:F,spd:h(16,30),sc:1,lo:-230,hi:14,ry:F<0?0:Math.PI})}let ds=new Rn(l(Pn),fs,Xi.length),Qa=new Rn(l(Wi),Ot,Xi.length);Qa.instanceMatrix=ds.instanceMatrix,ds.instanceMatrix.setUsage(hu),Xi.forEach((M,I)=>{ds.setColorAt(I,new Ie(mn[d(mn.length)])),Qa.setColorAt(I,new Ie(Sn[d(Sn.length)]).lerp(new Ie("#ffffff"),.5)),M.dir*=1});let el=new Rn(l(Bn),l(new Et({vertexColors:!0,toneMapped:!1,transparent:!0,blending:hn,depthWrite:!1,side:sn})),Xi.length);el.instanceMatrix=ds.instanceMatrix,el.userData.noAO=!0,ds.frustumCulled=Qa.frustumCulled=el.frustumCulled=!1,a.add(ds,Qa,el);{for(let F of se)for(let W=F.za-2.5;W>F.zb+2;W-=h(4,6))V(F.sx*22.4,W,8,5,Cs[d(Cs.length)],.5,.27);V(0,f.z+9,42,16,"#ffc98a",.9),V(0,f.z+12,30,14,"#ff2a3a",.35);let M=new Ft(1,1);M.rotateX(-Math.PI/2);let I=new Rn(l(M),l(new Et({map:Wa(),transparent:!0,blending:hn,depthWrite:!1,toneMapped:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),q.length);q.forEach((F,W)=>{I.setMatrixAt(W,Ke(F.p.x,F.p.y,F.p.z,F.sx,1,F.sz*(t?1:1.6))),I.setColorAt(W,F.c)}),I.frustumCulled=!1,I.userData.noAO=!0,a.add(I)}{let M=o(420,160),I=new Ft(1,1);I.rotateX(-Math.PI/2);let F=new Float32Array(M*2);for(let G=0;G<M;G++)F.set([u(),h(.7,1.6)],G*2);I.setAttribute("aPh",new li(F,2));let W=new Rn(l(I),l(Hm(Dm(),_)),M);for(let G=0;G<M;G++)W.setMatrixAt(G,Ke(h(-15,15),.04,h(8,-60)));W.frustumCulled=!1,W.userData.noAO=!0,W.layers.set(1),a.add(W)}i&&ot();let br=Pm(r);c.push(br.map,br.em);let od=l(new Lt({color:"#0b1222",metalness:.9,roughness:.16,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:.08})),m0=l(new Lt({color:"#9fb4d8",map:br.map,emissiveMap:br.em,emissive:"#ffffff",emissiveIntensity:1.2,metalness:.85,roughness:.14,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.06})),Fu=l(new Lt({color:"#0e1830",map:br.map,emissiveMap:br.em,emissive:"#ffffff",emissiveIntensity:.9,metalness:.85,roughness:.18,envMapIntensity:1.8})),Er=new Ge(l(new Mt(f.w,f.h,f.d)),[Fu,Fu,ve,od,m0,Fu]);Er.position.set(0,f.h/2,f.z-f.d/2),Er.castShadow=t,Er.receiveShadow=!0,a.add(Er);let Mo=l(new tt({color:"#2a3346",roughness:.35,metalness:.9})),Ou=(f.w-4)/f.cols,Bu=(f.h-f.winY0-10)/f.rows;{let M=[];for(let I=0;I<=f.cols;I++){let F=new Mt(.35,f.h-f.winY0-6,.5);F.translate(-f.w/2+2+I*Ou,f.winY0+(f.h-f.winY0-6)/2-2,f.z+.2),M.push(F)}for(let I=0;I<=f.rows;I++){let F=new Mt(f.w-3,.3,.5);F.translate(0,f.winY0+I*Bu-.2,f.z+.2),M.push(F)}for(let I of[-1,1]){let F=new Mt(.8,f.h,1.2);F.translate(I*(f.w/2+.1),f.h/2,f.z+.3),M.push(F)}a.add(new Ge(l(pn(M,!1)),Mo)),M.forEach(I=>I.dispose())}let Hu;{let M=[],I=(G,ee,ge,ce)=>{let We=new Mt(G,ee,f.d-ce*2);We.translate(0,ge+ee/2,f.z-f.d/2),M.push(We)};I(f.w-4,5,f.h,2),I(f.w-12,5,f.h+5,5),I(f.w-22,6,f.h+10,8),a.add(new Ge(l(pn(M,!1)),od)),M.forEach(G=>G.dispose());let F=new Ge(l(new Wt(.15,.4,24,6)),Mo);F.position.set(0,f.h+28,f.z-f.d/2),a.add(F),Hu=l(Pu("#ff2a1a",2.8));let W=[];for(let[G,ee]of[[f.h+5,f.w-4],[f.h+10,f.w-12],[f.h+16,f.w-22]]){let ge=new Mt(ee,.18,.18);ge.translate(0,G,f.z-1.6-(f.w-4-ee)/8),W.push(ge)}for(let G of[-1,1]){let ee=new Mt(.22,f.h,.22);ee.translate(G*(f.w/2-.2),f.h/2,f.z-.15),W.push(ee)}a.add(new Ge(l(pn(W,!1)),Hu)),W.forEach(G=>G.dispose())}let zu=yf("#ff2020",5,.9);zu.position.set(0,f.h+40.5,f.z-f.d/2),a.add(zu);let g0=l(an(rn(128,128,M=>{M.fillStyle="#fff",M.fillRect(0,0,128,128),M.fillStyle="rgba(0,0,0,0.16)";for(let I=0;I<5;I++)M.fillRect(8+I*24,6,14,5);M.fillStyle="rgba(0,0,0,0.5)",M.fillRect(8,84,44,40),M.fillRect(70,92,50,32),M.beginPath(),M.arc(90,70,9,0,6.3),M.fill(),M.fillRect(80,78,20,26),M.fillStyle="#000",M.fillRect(62,0,4,128),M.strokeStyle="#000",M.lineWidth=8,M.strokeRect(0,0,128,128)}))),ku=[],x0=l(new Ft(Ou-.9,Bu-.8)),v0=l(new Et({color:"#ffffff",map:g0,toneMapped:!0,fog:!0})),Gn=new Rn(x0,v0,f.cols*f.rows),ad=new Qe,Sr=new Ie,_0=M=>M>.95?Sr.set("#ffc890").multiplyScalar(.9):M>.8?Sr.set("#a8c8e8").multiplyScalar(.6):M>.62?Sr.set("#6a8cb0").multiplyScalar(.35):Sr.set("#0c1626").multiplyScalar(.9),ld=()=>{ku.length=0;let M=4242,I=()=>(M=M*16807%2147483647)/2147483647;for(let F=0;F<f.rows;F++)for(let W=0;W<f.cols;W++){let G=F*f.cols+W,ee=-f.w/2+2+Ou*(W+.5),ge=f.winY0+Bu*(F+.5),ce=I();ku.push({i:G,x:ee,y:ge,hp:30,broke:!1,lit:ce}),ad.makeTranslation(ee,ge,f.z+.06),Gn.setMatrixAt(G,ad),Gn.setColorAt(G,_0(ce))}Gn.instanceMatrix.needsUpdate=!0,Gn.instanceColor&&(Gn.instanceColor.needsUpdate=!0)};ld(),a.add(Gn);let tl=[],y0=M=>{M.broke=!0,Gn.setColorAt(M.i,Sr.set("#120604")),Gn.instanceColor&&(Gn.instanceColor.needsUpdate=!0),Math.random()<.35&&tl.push(M)},M0=l(an(rn(1024,300,M=>{M.clearRect(0,0,1024,300),M.font='900 118px "Arial Black", Impact, sans-serif',M.textBaseline="middle",M.textAlign="center",M.fillStyle="#eef3fb",M.shadowColor="#9fc0ff",M.shadowBlur=0,M.fillText("nSLAVE",512,118),M.font="700 44px Arial, sans-serif",M.fillStyle="#ff4a3a",M.shadowColor="#ff2020",M.fillText("H  E  A  D  Q  U  A  R  T  E  R  S",512,224),M.font=`700 28px ${On}`,M.fillStyle="#ff9a8a",M.fillText("\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",512,275)}))),cd=new Ge(l(new Ft(19,5.6)),l(new Et({map:M0,color:new Ie("#ffffff").multiplyScalar(1.5),toneMapped:!1,transparent:!0,depthWrite:!1,fog:!1})));cd.position.set(7.6,f.h-4.6,f.z+.45),a.add(cd);let bo=new Ut;bo.position.set(-9,f.h-4.7,f.z+.5);let ud=l(Wm(_)),hd=new Ge(l(new Ft(16,9)),ud);hd.userData.noAO=!0;let Vu=yf("#ff2a1a",20,.3);Vu.position.z=.4,bo.add(hd,Vu),a.add(bo);let b0=new L(-9,f.h-4.7,f.z+3),E0=l(new Et({map:l(Im(r)),color:new Ie("#ffffff").multiplyScalar(1.15),toneMapped:!0})),fd=new Ge(l(new Ft(f.w-2.5,8.2)),E0);fd.position.set(0,4.35,f.z+.32),a.add(fd);{let M=[];for(let I=0;I<=14;I++){let F=new Mt(.16,8.4,.24);F.translate(-(f.w-2.5)/2+I*((f.w-2.5)/14),4.4,f.z+.48),M.push(F)}for(let I of[.2,4.4,8.5]){let F=new Mt(f.w-2.2,.24,.3);F.translate(0,I,f.z+.48),M.push(F)}a.add(new Ge(l(pn(M,!1)),Mo)),M.forEach(I=>I.dispose())}let dd=new Ge(l(new Mt(f.w+4,.6,7)),Mo);dd.position.set(0,9,f.z+3),a.add(dd);let pd=new Ge(l(new Mt(f.w+2,.1,.4)),l(Pu("#27e6ff",3)));pd.position.set(0,8.66,f.z+6.3),a.add(pd);for(let M=0;M<9;M++)N(-f.w/2+2+M*((f.w-4)/8),8.55,f.z+5.4,"#ffe0b0",2.2,0,.8);{let F=l(an(rn(2048,360,We=>{We.clearRect(0,0,2048,360);let it=230,dt=360/2;We.lineCap=We.lineJoin="round";let ln=($t,qt)=>{for(let[yt,ni,Wu]of[[qt*3.2,"rgba(255,30,40,0.35)",60],[qt*1.6,"#ff2030",26],[qt*.55,"#ffd6d0",6]])We.shadowColor="#ff1a2a",We.shadowBlur=Wu,We.strokeStyle=ni,We.lineWidth=yt,We.beginPath(),$t(),We.stroke()};ln(()=>{We.moveTo(it-170,dt),We.quadraticCurveTo(it,dt-150,it+170,dt),We.quadraticCurveTo(it,dt+150,it-170,dt)},9),ln(()=>We.arc(it,dt,52,0,Math.PI*2),8),We.shadowBlur=30,We.fillStyle="#ffe8e4",We.beginPath(),We.ellipse(it,dt,9,40,0,0,Math.PI*2),We.fill(),We.font='900 210px "Arial Black", Impact, sans-serif',We.textBaseline="middle",We.textAlign="center";let Kt=1230;for(let[$t,qt,yt]of[[26,"rgba(255,30,40,0.35)",70],[12,"#ff2030",28],[4,"#ffd6d0",6]])We.shadowColor="#ff1a2a",We.shadowBlur=yt,We.strokeStyle=qt,We.lineWidth=$t,We.strokeText("TERRORNODE",Kt,dt+6,1500)}))),W=Math.min(f.w+2,30),G=W*360/2048,ee=new Ge(l(new Mt(W+.8,G+.5,.35)),Mo);ee.position.set(0,9.3+G/2+.2,f.z+6.25),a.add(ee);let ge=l(new Et({map:F,color:new Ie("#ffffff").multiplyScalar(2.6),toneMapped:!1,transparent:!0,depthWrite:!1})),ce=new Ge(l(new Ft(W,G)),ge);ce.position.set(0,ee.position.y,f.z+6.45),ce.userData.noAO=!0,a.add(ce);for(let We=0;We<5;We++)N(-W/2+W*(.1+We*.2),ee.position.y,f.z+6.8,"#ff2030",5.5,0,.5)}let S0=rn(64,128,M=>{M.fillStyle="#05070a",M.fillRect(0,0,64,128);for(let I=6;I<128;I+=8){M.fillStyle="#0d1520",M.fillRect(4,I,56,6);for(let F=8;F<58;F+=6)M.fillStyle=Math.random()<.5?"#27e6ff":Math.random()<.3?"#ff3030":"#0a3a44",M.fillRect(F,I+2,3,2)}}),Eo=[],Gu=[];for(let M=0;M<8;M++){let I=l(new jn(S0));I.colorSpace=Vt,I.wrapS=I.wrapT=nn;let F=l(new tt({color:"#141a24",metalness:.7,roughness:.4,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:2.2}));Gu.push(F);let W=new Ge(l(new Mt(2.6,6.4,1.6)),F);W.position.set((M<4?-1:1)*(4.2+M%4*3.1),3.2,f.z+2.2),W.castShadow=t,a.add(W),Eo.push({mesh:W,hp:160,broke:!1,t:0})}let T0=M=>{M.broke=!0;let I=M.mesh.material;I.emissiveIntensity=.05,I.color.set("#0a0a0a"),M.mesh.rotation.z=(Math.random()-.5)*.25},w0=()=>{ld(),tl.length=0;for(let M of Eo){M.broke=!1,M.hp=160;let I=M.mesh.material;I.emissiveIntensity=2.2,I.color.set("#141a24"),M.mesh.rotation.z=0}};i&&O();let qi=[],A0=l(Ru("#bcd4ff",.16,.7,!0,_)),R0=l(new Wt(9,.6,160,24,1,!0)),nl=(M,I,F)=>{let W=new Ut;W.position.set(M,I,F);let G=new Ge(R0,A0);G.position.y=80,G.userData.noAO=!0,G.frustumCulled=!1,W.add(G),a.add(W),qi.push(W)};nl(9,f.h+2,f.z-4),nl(-9,f.h+2,f.z-4),t&&(nl(-21,.5,-48),nl(21,.5,-58)),i&&(qi[0].visible=qi[1].visible=!1,w.intensity=0,D.intensity=0);let md=[];if(i){let M=(ce,We,it)=>{let dt=l(n.material("concrete_floor_02",[ce/5,We/5],it,.02));return dt.roughness=.92,dt.envMapIntensity=.5,dt},I=(ce,We,it,dt,ln,Kt,$t="#55585f")=>{let qt=new Ge(l(new Mt(ce,We,it)),M(Math.max(ce,it),We,$t));return qt.position.set(dt,ln,Kt),qt.castShadow=t,qt.receiveShadow=!0,a.add(qt),qt},F=(ce,We,it,dt,ln,Kt,$t,qt)=>{let yt=new Ge(l(new Ft(We,it)),M(We,it,"#8d9097"));yt.position.set(dt,ln,Kt),yt.rotation.y=Math.atan2($t,qt),yt.receiveShadow=!0,a.add(yt),md.push({id:ce,mesh:yt,w:We,h:it,center:new L(dt,ln,Kt),normal:new L($t,0,qt)})};I(2*kt+6,2.2,8,0,8.6,-62);for(let ce of[-1,1]){I(2*kt+6,1.1,.14,0,10.25,-62+ce*3.95,"#25272c");for(let it of[-62-2.6,-62+2.6])I(2.4,7.5,2.2,ce*17.2,3.75,it),on.push({x0:ce*17.2-1.3,x1:ce*17.2+1.3,z0:it-1.2,z1:it+1.2});F(ce<0?"bridge-left":"bridge-right",4.6,6.6,ce*(17.2-1.22),3.6,-62,-ce,0);let We=new Nn("#fff4e0",t?38:26,20,1.7);We.position.set(ce*8,7.2,-62),a.add(We),N(ce*8,7.45,-62,"#fff4e0",1.2,0,2)}let G=-80;I(2*kt+2,15,2.4,0,7.5,G-1.2,"#4a4d54"),on.push({x0:-kt-1,x1:kt+1,z0:G-2.4,z1:G+.3}),F("hall-of-fame",30,9,0,4.8,G+.03,0,1);let ee=new Ui("#ffffff",t?260:160,46,.95,.9,1.2);ee.position.set(0,14.2,G+9),ee.target.position.set(0,3,G),a.add(ee,ee.target),N(0,14.2,G+8.6,"#ffffff",1.8,0,1.8);let ge=0;for(let ce of se){if(ce.za<-54||ce.za>0||ce.za-ce.zb<9||ge++%2)continue;let We=Math.min(10,ce.za-ce.zb-3),it=(ce.za+ce.zb)/2;F(`wall-${ce.sx<0?"l":"r"}${Math.round(-it)}`,We,3.7,ce.sx*(kt-.04),2.1,it,-ce.sx,0)}}for(let M=0;M<o(6,3);M++){let I=new Ge(l(new Ft(64,8)),l(Vm(_,M%2?"#24607c":"#1e4a78",.2)));I.position.set(0,3.2,-8-M*14),I.userData.noAO=!0,a.add(I)}for(let[M,I,F,W,G,ee]of[[-185,"#0b0e1e","rgba(20,50,80,0.55)",.16,1,1],[-240,"#0e1a30","rgba(25,60,95,0.7)",.12,1.35,2],[-310,"#142a45","rgba(40,90,120,0.8)",.09,1.8,3]]){let ge=l(Cm(ee*13,I,F,W,r)),ce=new Ge(l(new Ft(900*G,225*G)),l(new Et({map:ge,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!0})));ce.position.set(0,225*G*.5-6,M),ce.renderOrder=-5,ce.userData.noAO=!0,a.add(ce)}{let M=o(3600,1300),I=new Float32Array(M*6),F=new Float32Array(M*8),W=new Float32Array(M*2);for(let ge=0;ge<M;ge++){let ce=(Math.random()-.5)*66,We=Math.random()*38,it=-Math.random()*100+8,dt=Math.random();I.set([ce,We,it,ce,We,it],ge*6),F.set([0,0,0,dt,0,0,0,dt],ge*8),W.set([0,1],ge*2)}let G=l(new wt);G.setAttribute("position",new Tt(I,3)),G.setAttribute("aSeed",new Tt(F,4)),G.setAttribute("aEnd",new Tt(W,1));let ee=new $s(G,l(Bm(_,"#8fb0d0")));ee.frustumCulled=!1,ee.userData.noAO=!0,ee.layers.set(1),a.add(ee)}if(i)for(let M of Pe.slice().reverse())rt.splice(M.g0,M.g1-M.g0);{let M=rt.length,I=new Float32Array(M*3),F=new Float32Array(M*3),W=new Float32Array(M),G=new Float32Array(M*2);rt.forEach((ce,We)=>{I.set([ce.p.x,ce.p.y,ce.p.z],We*3),F.set([ce.c.r,ce.c.g,ce.c.b],We*3),W[We]=ce.s,G.set([ce.ph,ce.mode],We*2)});let ee=l(new wt);ee.setAttribute("position",new Tt(I,3)),ee.setAttribute("aColor",new Tt(F,3)),ee.setAttribute("aSize",new Tt(W,1)),ee.setAttribute("aPh",new Tt(G,2));let ge=new Es(ee,l(zm(Wa(),_)));ge.frustumCulled=!1,ge.userData.noAO=!0,a.add(ge)}if(e.add(a),i)for(let M of Pe)for(let I of a.children.slice(M.c0,M.c1))I.visible=!1;let il=new L,sl=new Jt,gd=new L,rl=new Qe,C0=new Jn,xd=new de,P0=(M,I,F)=>{if(_.uT.value=I,y.uniforms.uT.value=I,F instanceof jt&&(s.getDrawingBufferSize(te),_.uPx.value=te.y/(2*Math.tan(cs.degToRad(F.fov)/2))),zu.material.opacity=Math.sin(I*3)>0?.95:.1,qi[0].rotation.set(Math.sin(I*.33)*.55,0,Math.cos(I*.27)*.45-.2),qi[1].rotation.set(Math.cos(I*.29)*.5,0,Math.sin(I*.35)*.45+.2),qi[2]&&qi[2].rotation.set(-.15+Math.sin(I*.21)*.25,0,.3+Math.cos(I*.17)*.3),qi[3]&&qi[3].rotation.set(-.1+Math.cos(I*.19)*.25,0,-.3+Math.sin(I*.23)*.3),F.getWorldPosition(il),xd.set(cs.clamp((il.x-bo.position.x)/40,-1,1),-.2+Math.sin(I*.7)*.15),ud.uniforms.uLook.value.copy(xd),Vu.material.opacity=.28+Math.sin(I*2.3)*.08,Hu.color.setRGB(2.4+Math.sin(I*4)*.7,.2,.15+(Math.sin(I*.8)>.6?1.2:0)),He.update(I),tl.length){for(let ge of tl)Gn.setColorAt(ge.i,Sr.setRGB(1.6+Math.random()*.8,.45+Math.random()*.25,.08));Gn.instanceColor&&(Gn.instanceColor.needsUpdate=!0)}for(let ge=0;ge<Gu.length;ge++){let ce=Gu[ge].emissiveMap;Eo[ge].broke||(ce.offset.y=Math.floor(I*6+ge)*.125)}for(let ge of Is)ge.intensity=60*(.94+Math.random()*.06);for(let ge=0;ge<Xi.length;ge++){let ce=Xi[ge],We=ce.hi-ce.lo,it=(ce.ax===0?ce.x:ce.z)+ce.dir*ce.spd*M;it>ce.hi?it-=We:it<ce.lo&&(it+=We),ce.ax===0?ce.x=it:ce.z=it,sl.setFromEuler(C0.set(0,ce.ry,Math.sin(I*.8+ge)*.03)),rl.compose(il.set(ce.x,ce.y+(ce.sc>1?Math.sin(I*.6+ge*2)*.4:0),ce.z),sl,gd.setScalar(ce.sc)),ds.setMatrixAt(ge,rl)}ds.instanceMatrix.needsUpdate=!0;let W=I%16/16,G=W<.75,ee=40-W/.75*300;sl.identity();for(let ge=0;ge<ut;ge++)rl.compose(il.set(Z,ue+1.95,ee+ge*9.6),sl,gd.setScalar(G?1:0)),Yt.setMatrixAt(ge,rl);qn.visible=G,qn.position.set(Z,ue+1.95,ee-At/2-.2),Yt.instanceMatrix.needsUpdate=!0,E.intensity*=Math.pow(.002,M)},I0=0;return{group:a,spots:md,blockers:on,groundY:M=>Math.abs(M)>=qm.x?qm.h:0,windows:Gn,wins:ku,racks:Eo,towerBody:Er,solids:[Er],ground:B,eye:bo,hitLight:E,lightWorld:b0,breakWindow:y0,breakRack:T0,rebuild:w0,beforeRender:(M,I,F)=>{if(!z||I0++<3)return;let W=z;(W.getReflectionCamera?W.getReflectionCamera(F):W.camera).layers.set(0),B.visible=!1,z.onBeforeRender.call(z,M,I,F),B.visible=!0,U.uReflMat.value.copy(z.material.uniforms.textureMatrix.value).multiply(J)},resize:(M,I)=>{z?.getRenderTarget().setSize(Math.max(64,Math.round(M*.5)),Math.max(64,Math.round(I*.5)))},update:P0,dispose:()=>{e.remove(a),c.forEach(M=>M.dispose());for(let M of Eo)M.mesh.geometry.dispose();Gn.dispose(),z?.dispose(),p.dispose(),e.environment=null}}}async function Zm(s,e){let t=Math.min(8,s.capabilities.getMaxAnisotropy()),n=new Qs,i=(c,l)=>new Promise(u=>n.load(c,h=>{h.wrapS=h.wrapT=nn,h.anisotropy=t,l&&(h.colorSpace=Vt),u(h)},void 0,()=>u(null))),r=new Map;await Promise.all(["concrete_floor_02","large_floor_tiles_02"].map(async c=>r.set(c,await Promise.all([i(`${e}${c}/diff.webp`,!0),i(`${e}${c}/nor.webp`,!1),i(`${e}${c}/rough.webp`,!1)]))));let o=[],a=(c,l)=>{if(!c)return null;let u=c.clone();return u.repeat.set(l[0],l[1]),u.needsUpdate=!0,o.push(u),u};return{env:null,material:(c,l,u,h=.05)=>{let[d,f,m]=r.get(c)||[null,null,null];return new tt({map:a(d,l),normalMap:a(f,l),roughnessMap:a(m,l),color:u,metalness:h,normalScale:new de(1.6,1.6)})},dispose:()=>o.forEach(c=>c.dispose())}}function Km(){let s=new go({uniforms:{tDiffuse:{value:null},uShadow:{value:new L(1,1,1)},uHigh:{value:new L(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.5},uTime:{value:0},uAberr:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}),e=s.uniforms;return{pass:s,apply:t=>{e.uShadow.value.set(...t.shadow),e.uHigh.value.set(...t.high),e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uVignette.value=t.vignette},tick:t=>{e.uTime.value=t%10}}}var Du=class extends Ni{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Pf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new Vf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new Wf(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=as.extractUrlBase(e);o=as.resolveURL(l,this.path)}else o=as.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new oo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===e0){try{o[St.KHR_BINARY_GLTF]=new Xf(e)}catch(h){i&&i(h);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new jf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case St.KHR_MATERIALS_UNLIT:o[h]=new Rf;break;case St.KHR_DRACO_MESH_COMPRESSION:o[h]=new qf(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[h]=new Yf;break;case St.KHR_MESH_QUANTIZATION:o[h]=new Zf;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function ob(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Af=class{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Ie(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],An);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new tr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Nn(u),l.distance=h;break;case"spot":l=new Ui(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},Rf=class{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return Et}extendParams(e,t,n){let i=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],An),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Vt))}return Promise.all(i)}},Cf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Pf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(a,a)}return Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Df=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Lf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],An)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Nf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(a[0],a[1],a[2],An),Promise.all(r)}},Ff=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Of=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(a[0],a[1],a[2],An),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Vt)),Promise.all(r)}},Bf=class{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Hf=class{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Lt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},zf=class{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},kf=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Vf=class{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},Gf=class{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},Wf=class{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==ci.TRIANGLES&&l.mode!==ci.TRIANGLE_STRIP&&l.mode!==ci.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let x=new Qe,g=new L,p=new Jt,v=new L(1,1,1),_=new Rn(m.geometry,m.material,d);for(let y=0;y<d;y++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,y),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,y),c.SCALE&&v.fromBufferAttribute(c.SCALE,y),_.setMatrixAt(y,x.compose(g,p,v));for(let y in c)if(y==="_COLOR_0"){let A=c[y];_.instanceColor=new li(A.array,A.itemSize,A.normalized)}else y!=="TRANSLATION"&&y!=="ROTATION"&&y!=="SCALE"&&m.geometry.setAttribute(y,c[y]);Gt.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},e0="glTF",Xa=12,$m={JSON:1313821514,BIN:5130562},Xf=class{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Xa),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==e0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-Xa,r=new DataView(e,Xa),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===$m.JSON){let l=new Uint8Array(e,Xa+o,a);this.content=n.decode(l)}else if(c===$m.BIN){let l=Xa+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},qf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=$f[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=$f[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=vo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}h(f)},a,l,An,d)})})}},Yf=class{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Zf=class{constructor(){this.name=St.KHR_MESH_QUANTIZATION}},Lu=class extends ss{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,v=1-g,_=p-d+h;for(let y=0;y!==a;y++){let A=o[x+y+a],S=o[x+y+c]*u,w=o[m+y+a],D=o[m+y]*u;r[y]=v*A+_*S+g*w+p*D}return r}},ab=new Jt,Kf=class extends Lu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return ab.fromArray(r).normalize().toArray(r),r}},ci={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jm={9728:Qt,9729:cn,9984:_c,9985:lo,9986:ar,9987:ei},jm={33071:oi,33648:Xr,10497:nn},Sf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},$f={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},lb={CUBICSPLINE:void 0,LINEAR:Ws,STEP:Gs},Tf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function cb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new tt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:gi})),s.DefaultMaterial}function mr(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ub(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function hb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fb(s){let e,t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wf(t.attributes):e=s.indices+":"+wf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+wf(s.targets[n]);return e}function wf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Jf(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function db(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var pb=new Qe,jf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ob,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Qs(this.options.manager):this.textureLoader=new ga(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mr(r,a,i),Vi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(as.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Sf[i.type],a=vo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Tt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Sf[i.type],l=vo[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(d/f),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(v);_||(x=new l(a,p*f,i.count*f/u),_=new Ys(x,f/u),t.cache.add(v,_)),g=new Ms(_,c,d%f/u,m)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),g=new Tt(x,c,m);if(i.sparse!==void 0){let p=Sf.SCALAR,v=vo[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,A=new v(o[1],_,i.sparse.count*p),S=new l(o[2],y,i.sparse.count*c);a!==null&&(g=new Tt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let w=0,D=A.length;w<D;w++){let E=A[w];if(g.setX(E,S[w*c]),c>=2&&g.setY(E,S[w*c+1]),c>=3&&g.setZ(E,S[w*c+2]),c>=4&&g.setW(E,S[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Jm[d.magFilter]||cn,u.minFilter=Jm[d.minFilter]||ei,u.wrapS=jm[d.wrapS]||nn,u.wrapT=jm[d.wrapT]||nn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Qt&&u.minFilter!==cn,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new gn(x);g.needsUpdate=!0,d(g)}),t.load(as.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Vi(h,o),h.userData.mimeType=o.mimeType||db(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new to,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new eo,Ln.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return tt}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[St.KHR_MATERIALS_UNLIT]){let h=i[St.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],An),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Vt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=sn);let u=r.alphaMode||Tf.OPAQUE;if(u===Tf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Et&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Et&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Et){let h=r.emissiveFactor;a.emissive=new Ie().setRGB(h[0],h[1],h[2],An)}return r.emissiveTexture!==void 0&&o!==Et&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Vt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Vi(h,r),t.associations.set(h,{materials:e}),r.extensions&&mr(i,h,r),h})}createUniqueName(e){let t=zt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Qm(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=fb(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[St.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Qm(new wt,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?cb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=o[f],p,v=l[f];if(g.mode===ci.TRIANGLES||g.mode===ci.TRIANGLE_STRIP||g.mode===ci.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new bs(x,v):new Ge(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===ci.TRIANGLE_STRIP?p.geometry=_f(p.geometry,Da):g.mode===ci.TRIANGLE_FAN&&(p.geometry=_f(p.geometry,uo));else if(g.mode===ci.LINES)p=new $s(x,v);else if(g.mode===ci.LINE_STRIP)p=new Ks(x,v);else if(g.mode===ci.LINE_LOOP)p=new $o(x,v);else if(g.mode===ci.POINTS)p=new Es(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&hb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vi(p,r),g.extensions&&mr(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&mr(i,h[0],r),h[0];let d=new Ut;r.extensions&&mr(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(cs.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new Qe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Zs(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,v=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let _=0,y=d.length;_<y;_++){let A=d[_],S=f[_],w=m[_],D=x[_],E=g[_];if(A===void 0)continue;A.updateMatrix&&A.updateMatrix();let T=n._createAnimationTracks(A,S,w,D,E);if(T)for(let U=0;U<T.length;U++)p.push(T[U])}let v=new js(r,void 0,p);return Vi(v,i),v})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,pb)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new ts:l.length>1?u=new Ut:l.length===1?u=l[0]:u=new Gt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Vi(u,r),r.extensions&&mr(n,u,r),r.matrix!==void 0){let h=new Qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ut;n.name&&(r.name=i.createUniqueName(n.name)),Vi(r,n),n.extensions&&mr(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof Ln||d instanceof gn)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Ps[r.path]===Ps.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Ps[r.path]){case Ps.weights:l=Ii;break;case Ps.rotation:l=Di;break;case Ps.translation:case Ps.scale:l=Li;break;default:n.itemSize===1?l=Ii:l=Li;break}let u=i.interpolation!==void 0?lb[i.interpolation]:Ws,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Ps[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Jf(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Di?Kf:Lu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function mb(s,e,t){let n=e.attributes,i=new $n;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){let u=Jf(vo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new L,c=new L;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=Jf(vo[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Wn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Qm(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=$f[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return vt.workingColorSpace!==An&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${vt.workingColorSpace}" not supported.`),Vi(s,e),mb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?ub(s,e.targets,t):s})}var Qf=1.78,t0=new Map;function Nu(s,e){let t=t0.get(s);if(!t){let o=new Float32Array(65536);for(let f=0;f<256;f++)for(let m=0;m<256;m++){let x=m/256,g=f/256,p=0;if(s==="knit"){let v=x*8%1,_=g*8%1,y=Math.abs(v-.5)*2;p=Math.pow(Math.sin(Math.PI*((y*.55+_)%1)),2)*(.75+.25*Math.sin(Math.PI*v))}else s==="twill"?p=.5+.5*Math.sin(2*Math.PI*(x+g)*12)*(.85+.15*Math.sin(2*Math.PI*g*48)):p=Math.max(Math.pow(Math.abs(Math.sin(Math.PI*x*6)),30),Math.pow(Math.abs(Math.sin(Math.PI*g*6)),30))*.8+.2*Math.sin(2*Math.PI*x*40)*Math.sin(2*Math.PI*g*40);o[f*256+m]=p+(Math.random()-.5)*.08}let a=document.createElement("canvas"),c=document.createElement("canvas");a.width=a.height=c.width=c.height=256;let l=a.getContext("2d").createImageData(256,256),u=c.getContext("2d").createImageData(256,256),h=(f,m)=>o[(m+256)%256*256+(f+256)%256];for(let f=0;f<256;f++)for(let m=0;m<256;m++){let x=(h(m+1,f)-h(m-1,f))*2,g=(h(m,f+1)-h(m,f-1))*2,p=Math.hypot(x,g,1),v=(f*256+m)*4;l.data[v]=128-x/p*127,l.data[v+1]=128-g/p*127,l.data[v+2]=128+1/p*127,l.data[v+3]=255;let _=200+(.5-h(m,f))*90;u.data[v]=u.data[v+1]=u.data[v+2]=Math.max(0,Math.min(255,_)),u.data[v+3]=255}a.getContext("2d").putImageData(l,0,0),c.getContext("2d").putImageData(u,0,0);let d=f=>{let m=new jn(f);return m.wrapS=m.wrapT=nn,m.anisotropy=4,m};t={normal:d(a),rough:d(c)},t0.set(s,t)}let n=t.normal.clone(),i=t.rough.clone();return n.repeat.set(e,e),i.repeat.set(e,e),{normalMap:n,roughnessMap:i}}var gb={Hoodie:()=>new Lt({color:"#45464c",roughness:.92,metalness:0,sheen:.6,sheenRoughness:.6,sheenColor:new Ie("#8a8a90"),normalScale:new de(.7,.7),...Nu("knit",36)}),Trousers:()=>new Lt({color:"#56575d",roughness:.86,metalness:0,sheen:.5,sheenRoughness:.65,sheenColor:new Ie("#7c7c82"),normalScale:new de(.5,.5),...Nu("twill",30)}),Gloves:()=>new tt({color:"#6a6a6e",roughness:.65,metalness:0}),Trim:()=>new tt({color:"#2e2f34",roughness:.92,metalness:0,normalScale:new de(.8,.8),...Nu("knit",60)}),Shoes:()=>new tt({color:"#f4f4f4",roughness:.4,metalness:0,emissive:"#202020"}),Sole:()=>new tt({color:"#8c8c8e",roughness:.6,metalness:0}),Void:()=>new Et({color:"#000000"}),Mask:()=>new Lt({color:"#0b0b0d",roughness:.95,metalness:0,sheen:.25,sheenRoughness:.8,sheenColor:new Ie("#2a2a2e")}),Pack:()=>new tt({color:"#36373c",roughness:.5,metalness:.05,normalScale:new de(.45,.45),...Nu("ripstop",24)}),Can:()=>new tt({color:"#b8b8bc",roughness:.35,metalness:.8}),Cap:()=>new tt({color:"#f2f2f2",roughness:.5,metalness:0})},ed=new Map,n0=s=>ed.get(s)||ed.set(s,new Du().loadAsync(s).catch(e=>{throw ed.delete(s),e})).get(s);async function Uu(s,e,t,n={}){let i=await n0(s),r=i.scene.getObjectByName("Armature")||i.scene.children[0],o=r.children[0],a=[],c=ne=>{let se=new ts;return se.name=ne.name,se.position.copy(ne.position),se.quaternion.copy(ne.quaternion),se.scale.copy(ne.scale),a.push(se),ne.children.forEach(C=>se.add(c(C))),se},l=c(o),u=new Gt;u.position.copy(r.position),u.quaternion.copy(r.quaternion),u.scale.copy(r.scale),u.add(l);let h=new Ut;h.add(u),h.updateMatrixWorld(!0);let d=ne=>{let se=a.find(C=>C.name.replace(/^mixamorig:?/,"")===ne);if(!se)throw new Error("writer: no bone "+ne);return se},f=ne=>d(ne).getWorldPosition(new L),m=ne=>a.indexOf(ne),x=Math.min(f("LeftToeBase").y,f("RightToeBase").y),p=(f("Head").y-x)/.89,v=ne=>ne/Qf*p,_=[],y=[];if(t)try{let ne=await n0(t);ne.scene.updateMatrixWorld(!0),ne.scene.traverse(se=>{let C=se;if(!C.isSkinnedMesh)return;let b=C.geometry.clone();b.applyMatrix4(C.matrixWorld);let H=C.skeleton.bones.map(Z=>a.findIndex(ue=>ue.name===Z.name)),Q=b.attributes.skinIndex;for(let Z=0;Z<Q.array.length;Z++)Q.array[Z]=Math.max(0,H[Q.array[Z]]);Q.needsUpdate=!0;let me=C.material,$=(n[me.name]||gb[me.name]||(()=>me))(),k=new bs(b,$);k.name=C.name,_.push(k),y.push(b,$)})}catch(ne){console.warn("writer model",ne)}let A=[];if(!_.length){let ne={hoodie:0,trousers:1,shoes:2,skin:3,void:4,trim:5},se=(O,Re,fe,we,Me,he=.18)=>{let Ae=O.attributes.position,Fe=Ae.count,je=new Uint16Array(Fe*4),He=new Float32Array(Fe*4),mt=fe.clone().sub(Re),ut=Math.max(1e-9,mt.lengthSq()),At=new L,Nt=we.parent instanceof ts?we.parent:we;for(let _t=0;_t<Fe;_t++){At.fromBufferAttribute(Ae,_t);let Yt=cs.clamp(At.clone().sub(Re).dot(mt)/ut,0,1),En=m(we),qn=m(we),on=0;Yt<he&&Nt!==we?(qn=m(Nt),on=.5-Yt/he*.5):Me&&Yt>1-he&&(qn=m(Me),on=(Yt-(1-he))/he*.5),je[_t*4]=En,je[_t*4+1]=qn,He[_t*4]=1-on,He[_t*4+1]=on}return O.setAttribute("skinIndex",new wi(je,4)),O.setAttribute("skinWeight",new ct(He,4)),O},C=(O,Re,fe,we,Me,he,Ae={})=>{let Fe=f(O),je=f(Re),He=je.clone().sub(Fe),mt=He.length(),ut=(Ae.extend||0)*mt,At=Fe.clone().addScaledVector(He.normalize(),mt+ut),Nt=mt+ut,_t=Ae.radial||14,Yt=new Wt(v(we),v(fe),Nt,_t,8,!0);Yt.translate(0,Nt/2,0);let En=new xn(v(fe),_t,8,0,Math.PI*2,Math.PI/2,Math.PI/2),qn=new xn(v(we),_t,8,0,Math.PI*2,0,Math.PI/2);qn.translate(0,Nt,0);let on=pn([Yt.toNonIndexed(),En.toNonIndexed(),qn.toNonIndexed()]);Ae.squash&&on.scale(1,1,Ae.squash),on.applyQuaternion(new Jt().setFromUnitVectors(new L(0,1,0),He)),on.translate(Fe.x,Fe.y,Fe.z),A.push({geo:se(on,Fe,At,d(O),he?d(he):null),mat:Me})},b=(O,Re)=>{let we=[],Me=[],he=[],Ae=[],Fe=[];for(let ut=0;ut<O.length-1;ut++)for(let At=0;At<4;At++){let Nt=At/4,_t=O[ut],Yt=O[ut+1],En=Nt*Nt*(3-2*Nt);Fe.push({at:_t.at.clone().lerp(Yt.at,Nt),rx:_t.rx+(Yt.rx-_t.rx)*En,rz:_t.rz+(Yt.rz-_t.rz)*En,b0:_t.bone,b1:Yt.bone,w:Nt,dz:(_t.dz||0)+((Yt.dz||0)-(_t.dz||0))*En})}let je=O[O.length-1];Fe.push({at:je.at.clone(),rx:je.rx,rz:je.rz,b0:je.bone,b1:je.bone,w:0,dz:je.dz||0}),Fe.forEach(ut=>{for(let At=0;At<22;At++){let Nt=At/22*Math.PI*2;we.push(ut.at.x+Math.sin(Nt)*v(ut.rx),ut.at.y,ut.at.z+v(ut.dz)+Math.cos(Nt)*v(ut.rz)),Me.push(m(ut.b0),m(ut.b1),0,0),he.push(1-ut.w,ut.w,0,0)}});for(let ut=0;ut<Fe.length-1;ut++)for(let At=0;At<22;At++){let Nt=ut*22+At,_t=ut*22+(At+1)%22,Yt=Nt+22,En=_t+22;Ae.push(Nt,Yt,_t,_t,Yt,En)}let He=new wt;He.setAttribute("position",new ct(we,3)),He.setAttribute("skinIndex",new wi(Me,4)),He.setAttribute("skinWeight",new ct(he,4)),He.setIndex(Ae);let mt=He.toNonIndexed();mt.computeVertexNormals(),A.push({geo:mt,mat:Re})},H=(O,Re,fe,we,Me,he,Ae=0,Fe=Math.PI*2,je=0,He=Math.PI)=>{let mt=new xn(1,20,14,Ae,Fe,je,He).toNonIndexed();mt.scale(v(fe),v(we),v(Me)),mt.translate(Re.x,Re.y,Re.z);let ut=mt.attributes.position.count,At=m(d(O));return mt.setAttribute("skinIndex",new wi(new Uint16Array(ut*4).map((Nt,_t)=>_t%4===0?At:0),4)),mt.setAttribute("skinWeight",new ct(new Float32Array(ut*4).map((Nt,_t)=>_t%4===0?1:0),4)),A.push({geo:mt,mat:he}),mt},Q=f("Hips"),me=f("Spine"),$=f("Spine1"),k=f("Spine2"),Z=f("Neck"),ue=f("Head");b([{at:Q.clone().add(new L(0,-v(.1),0)),rx:.19,rz:.13,bone:d("Hips"),dz:.01},{at:me,rx:.175,rz:.125,bone:d("Spine"),dz:.015},{at:$,rx:.18,rz:.13,bone:d("Spine1"),dz:.01},{at:k,rx:.2,rz:.13,bone:d("Spine2")},{at:Z.clone().add(new L(0,-v(.02),0)),rx:.19,rz:.12,bone:d("Spine2")},{at:Z.clone().add(new L(0,v(.03),-v(.01))),rx:.085,rz:.08,bone:d("Neck")}],ne.hoodie);for(let O of["Left","Right"]){C(`${O}Shoulder`,`${O}Arm`,.07,.065,ne.hoodie,`${O}Arm`,{extend:.1}),C(`${O}Arm`,`${O}ForeArm`,.062,.052,ne.hoodie,`${O}ForeArm`),C(`${O}ForeArm`,`${O}Hand`,.052,.045,ne.hoodie,`${O}Hand`);let Re=f(`${O}Hand`),fe=f(`${O}ForeArm`),we=Re.clone().sub(fe).normalize();H(`${O}Hand`,Re.clone().addScaledVector(we,v(.06)),.045,.045,.045,ne.skin),C(`${O}UpLeg`,`${O}Leg`,.085,.068,ne.trousers,`${O}Leg`,{extend:.04}),C(`${O}Leg`,`${O}Foot`,.066,.06,ne.trousers,`${O}Foot`);let Me=f(`${O}Foot`),he=f(`${O}ToeBase`),Ae=Me.clone().lerp(he,.55);Ae.y=Math.min(Me.y,he.y)+v(.03);let Fe=H(`${O}Foot`,Ae,.055,.05,.14,ne.shoes),je=Math.atan2(he.x-Me.x,he.z-Me.z);Fe.translate(-Ae.x,-Ae.y,-Ae.z),Fe.rotateY(je),Fe.translate(Ae.x,Ae.y,Ae.z)}let ke=ue.clone().add(new L(0,v(.09),-v(.015)));H("Head",ke,.125,.14,.135,ne.hoodie,Math.PI*.18,Math.PI*1.64),H("Head",ke.clone().add(new L(0,-v(.005),v(.02))),.1,.115,.1,ne.void);let xe=new Pi(1,.11,8,24).toNonIndexed();xe.scale(v(.088),v(.112),v(.088)),xe.translate(ke.x,ke.y-v(.005),ke.z+v(.11));{let O=xe.attributes.position.count,Re=m(d("Head"));xe.setAttribute("skinIndex",new wi(new Uint16Array(O*4).map((fe,we)=>we%4===0?Re:0),4)),xe.setAttribute("skinWeight",new ct(new Float32Array(O*4).map((fe,we)=>we%4===0?1:0),4)),A.push({geo:xe,mat:ne.hoodie})}let Ce=new Map;for(let O of A){let Re=O.geo.index?O.geo.toNonIndexed():O.geo;Re.attributes.normal||Re.computeVertexNormals(),["uv","uv1"].forEach(fe=>Re.deleteAttribute(fe)),(Ce.get(O.mat)||Ce.set(O.mat,[]).get(O.mat)).push(Re)}let Oe=[...Ce.keys()].sort((O,Re)=>O-Re),Xe=pn(Oe.map(O=>pn(Ce.get(O))),!0),Pe=[new tt({color:"#45464c",roughness:.86,metalness:0}),new tt({color:"#5a5b61",roughness:.8,metalness:0}),new tt({color:"#f4f4f4",roughness:.4,metalness:0,emissive:"#202020"}),new tt({color:"#6a6a6e",roughness:.65,metalness:0}),new Et({color:"#000000"})],ot=Oe.map(O=>Pe[O]);_.push(new bs(Xe,ot)),y.push(Xe,...Pe)}for(let ne of _)ne.castShadow=e,ne.receiveShadow=!0,ne.frustumCulled=!1,h.add(ne);h.updateMatrixWorld(!0);let S=new Zs(a);for(let ne of _)ne.bind(S);let w=Qf/p,D=new Ut;h.scale.setScalar(w),h.position.y=-x*w,D.add(h);let E=new Map,T=l.position.clone();for(let ne of i.animations){for(let se of ne.tracks)if(/Hips\.position$/.test(se.name))for(let C=0;C<se.values.length;C+=3)se.values[C]=T.x,se.values[C+2]=T.z;E.set(ne.name,ne)}let U=new xa(h),B=null,z="",J=(ne,se=.2,C=!1)=>{if(ne===z)return;let b=E.get(ne);if(!b)return;let H=U.clipAction(b);H.reset(),H.setLoop(C?ru:ou,1/0),H.clampWhenFinished=C,H.enabled=!0,H.setEffectiveWeight(1),B&&H.crossFadeFrom(B,se,!0),H.play(),B=H,z=ne};J("Idle_Loop",0);let te=d("Spine1"),X=d("Neck"),K=d("Head"),ie=0,_e=0,Se=d("RightArm"),Te=d("RightForeArm"),Ue=d("RightHand"),ze=d("Spine2"),Ke=new Ut;{let ne=new Lt({color:"#c4c6cc",roughness:.28,metalness:.9,clearcoat:.6,clearcoatRoughness:.25}),se=new tt({color:"#f2f2f2",roughness:.5}),C=new Ge(new Wt(.033,.033,.19,20),ne),b=new Ge(new xn(.033,20,10,0,Math.PI*2,0,Math.PI/2),ne);b.position.y=.095;let H=new Ge(new Wt(.009,.01,.02,12),se);H.position.y=.135;let Q=new Ge(new Wt(.003,.003,.012,8),se);Q.rotation.x=Math.PI/2,Q.position.set(0,.138,.01);for(let me of[C,b,H,Q])me.castShadow=e,Ke.add(me);for(let me of Ke.children)me.position.y-=.07;y.push(C.geometry,b.geometry,H.geometry,Q.geometry,ne,se)}Ke.visible=!1;let rt=new L,N=new L,q=new L,V=new L,be=new L,ye=new L,Ne=new Jt,Ve=new Jt,Le=new Jt,re=(ne,se,C,b)=>{Ne.setFromUnitVectors(se,C),ne.getWorldQuaternion(Ve),ne.parent.getWorldQuaternion(Le),ne.quaternion.slerp(Le.invert().multiply(Ne.multiply(Ve)),b),ne.updateMatrixWorld(!0)},Ee=new L,ve=new L,De=!1,R=1,pe=0,ae=ne=>{D.updateMatrixWorld(!0),Se.getWorldPosition(rt),Te.getWorldPosition(N),Ue.getWorldPosition(q);let se=rt.distanceTo(N),C=N.distanceTo(q);V.copy(Ee).sub(rt);let b=Math.max(.05,Math.min(V.length(),(se+C)*.995));V.normalize();let H=Math.max(-1,Math.min(1,(se*se+b*b-C*C)/(2*se*b))),Q=Math.sqrt(1-H*H);ze.getWorldPosition(ye),ye.subVectors(rt,ye).setY(0).normalize().multiplyScalar(.7),ye.y=-1,ye.addScaledVector(V,-ye.dot(V)).normalize(),be.copy(rt).addScaledVector(V,se*H).addScaledVector(ye,se*Q),re(Se,N.clone().sub(rt).normalize(),be.sub(rt).normalize(),ne),Te.getWorldPosition(N),Ue.getWorldPosition(q),be.copy(rt).addScaledVector(V,b),re(Te,q.clone().sub(N).normalize(),be.sub(N).normalize(),ne),Ue.getWorldPosition(q)};return{root:D,height:Qf,play:J,playing:()=>z,can:Ke,aim:(ne,se,C=1)=>{De=!!ne,ne&&(Ee.copy(ne),ve.copy(se||ne),R=C)},update:ne=>{if(U.update(ne),_e+=ne,ie+=((/Idle/.test(z)&&!De?1:0)-ie)*Math.min(1,ne*2),ie>.01){te.rotateX(Math.sin(_e*1.6)*.018*ie);let se=Math.sin(_e*.23)*.5+Math.sin(_e*.61+1.3)*.2;X.rotateY(se*.18*ie),K.rotateY(se*.22*ie),K.rotateX((Math.sin(_e*.37)*.06+.03)*ie)}pe+=((De?R:0)-pe)*Math.min(1,ne*9),pe>.01?(ae(pe),Ke.visible=pe>.3,Ke.position.copy(q).lerp(N,-.15),Ke.lookAt(ve)):Ke.visible=!1},dispose:()=>{U.stopAllAction(),y.forEach(ne=>ne.dispose())}}}var qa=["#f4f4f4","#9a9a9e","#0c0c0e","#c9ccd2"],r0=["WHITE","GREY","BLACK","CHROME"],td=100,xb="vexvoid-game",nd="walls",i0=null,vb=()=>i0||(i0=new Promise(s=>{try{let e=indexedDB.open(xb,1);e.onupgradeneeded=()=>e.result.createObjectStore(nd),e.onsuccess=()=>s(e.result),e.onerror=()=>s(null)}catch{s(null)}})),s0=async(s,e)=>{let t=await vb();if(t)return new Promise(n=>{try{let i=e(t.transaction(nd,s).objectStore(nd));i.onsuccess=()=>n(i.result),i.onerror=()=>n(void 0)}catch{n(void 0)}})},_b={load:async s=>{let e=await s0("readonly",t=>t.get(s));return e?e.png:null},save:async(s,e)=>{await s0("readwrite",t=>e?t.put({w:0,h:0,png:e},s):t.delete(s))}};function o0(s,e,t=_b){let n=new Map,i=[];for(let l of e){let u=Math.round(l.w*td),h=Math.round(l.h*td),d=document.createElement("canvas");d.width=u,d.height=h;let f=d.getContext("2d"),m=new jn(d);m.colorSpace=Vt,m.anisotropy=4;let x=new tt({map:m,transparent:!0,roughness:.62,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),g=new Ge(new Ft(l.w,l.h),x);g.position.copy(l.center).addScaledVector(l.normal,.012),g.quaternion.copy(l.mesh.quaternion),g.receiveShadow=!0,g.userData.spot=l.id,g.userData.noAO=!0,s.add(g);let p=24,v=Math.ceil(u/p);n.set(l.id,{spot:l,cv:d,g:f,tex:m,mesh:g,W:u,H:h,wet:new Float32Array(v*Math.ceil(h/p)),cell:p,cols:v,dirty:!1,unsaved:0})}let r=Promise.all([...n.values()].map(async l=>{try{let u=await t.load(l.spot.id);if(!u)return;let h=await createImageBitmap(u);h.width===l.W&&h.height===l.H&&(l.g.drawImage(h,0,0),l.dirty=!0),h.close()}catch{}})),o=l=>new Promise(u=>l.cv.toBlob(async h=>{try{h&&await t.save(l.spot.id,h)}catch{}u()},"image/png")),a=(l,u,h,d,f)=>{let m=(.6+d.cap*.9+d.dist*26)*(td/100)*1.6,x=Math.max(.05,.75-d.dist*1.6),g=Math.min(1,f*(.5+d.cap*.35)/(1+d.dist*5)),p=l.g.createRadialGradient(u,h,0,u,h,m),v=new Ie(d.colour),_=`${Math.round(v.r*255)},${Math.round(v.g*255)},${Math.round(v.b*255)}`;p.addColorStop(0,`rgba(${_},${g})`),p.addColorStop(x,`rgba(${_},${g*.85})`),p.addColorStop(1,`rgba(${_},0)`),l.g.fillStyle=p,l.g.beginPath(),l.g.arc(u,h,m,0,Math.PI*2),l.g.fill();let y=Math.round(d.dist*40*f+1);l.g.fillStyle=`rgba(${_},${Math.min(.9,g*1.4)})`;for(let S=0;S<y;S++){let w=Math.random()*Math.PI*2,D=m*(.8+Math.random()*1.6);l.g.fillRect(u+Math.cos(w)*D,h+Math.sin(w)*D,1,1)}let A=Math.floor(h/l.cell)*l.cols+Math.floor(u/l.cell);A>=0&&A<l.wet.length&&(l.wet[A]+=g*(1.2-d.dist),l.wet[A]>6&&i.length<400&&(l.wet[A]=2,i.push({L:l,x:u+(Math.random()-.5)*m,y:h+m*.6,w:Math.max(1,m*.22),left:20+Math.random()*70,colour:_,speed:18+Math.random()*24}))),l.dirty=!0,l.unsaved=1.5},c=null;return{hit(l){let u=l.intersectObjects([...n.values()].map(h=>h.mesh),!1);return!u.length||!u[0].uv?null:{id:u[0].object.userData.spot,u:u[0].uv.x,v:u[0].uv.y,point:u[0].point,dist:u[0].distance}},spray(l,u,h,d,f){let m=n.get(l);if(!m)return;let x=u*m.W,g=(1-h)*m.H,p=1.2+f.cap+f.dist*26,v=Math.max(1,p*.35);if(c&&c.id===l){let _=Math.hypot(x-c.x,g-c.y),y=Math.min(80,Math.ceil(_/v));for(let A=1;A<=y;A++)a(m,c.x+(x-c.x)*A/y,c.y+(g-c.y)*A/y,f,d*9/y+.08)}else a(m,x,g,f,d*9+.08);c={id:l,x,y:g}},lift(){c=null},path(l,u,h){if(!n.has(l))throw new Error("no wall "+l);c=null;for(let[d,f]of u)this.spray(l,d,f,1/30,h);c=null},clear(l){for(let u of n.values())if(!l||u.spot.id===l){u.g.clearRect(0,0,u.W,u.H),u.wet.fill(0),u.dirty=!0,u.unsaved=0;for(let h=i.length-1;h>=0;h--)i[h].L===u&&i.splice(h,1);t.save(u.spot.id,null).catch(()=>{})}},loaded:r,async flush(){await Promise.all([...n.values()].filter(l=>l.unsaved>0).map(l=>(l.unsaved=0,o(l))))},update(l){for(let u=i.length-1;u>=0;u--){let h=i[u],d=h.speed*l;h.L.g.fillStyle=`rgba(${h.colour},0.9)`,h.L.g.fillRect(h.x-h.w/2,h.y,h.w,d+1),h.y+=d,h.left-=d,h.w=Math.max(.6,h.w*(1-l*.25)),h.speed*=1-l*.35,h.L.dirty=!0,(h.left<=0||h.speed<2||h.y>h.L.H)&&(h.L.g.beginPath(),h.L.g.arc(h.x,h.y,h.w*.9,0,Math.PI*2),h.L.g.fill(),i.splice(u,1))}for(let u of n.values())u.dirty&&(u.tex.needsUpdate=!0,u.dirty=!1),u.unsaved>0&&(u.unsaved-=l)<=0&&(i.some(h=>h.L===u)?u.unsaved=.5:(u.unsaved=0,o(u)))},png(l){let u=n.get(l);return u?u.cv.toDataURL("image/png"):""},layers:n,dispose(){for(let l of n.values())l.unsaved>0&&o(l);for(let l of n.values())s.remove(l.mesh),l.mesh.geometry.dispose(),l.mesh.material.dispose(),l.tex.dispose()}}}var Gi={len:4.9,wid:1.92};function a0(s){let e=[],t=X=>(e.push(X),X),n=new Ut,i=t(new Lt({color:"#08090b",roughness:.32,metalness:.55,clearcoat:1,clearcoatRoughness:.08})),r=t(new Lt({color:"#e6e7ea",roughness:.35,metalness:.1,clearcoat:1,clearcoatRoughness:.1})),o=t(new Lt({color:"#040405",roughness:.04,metalness:.3,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6})),a=t(new tt({color:"#141518",roughness:.55,metalness:.4})),c=t(new tt({color:"#0d0d0e",roughness:.85,metalness:0})),l=t(new tt({color:"#9a9ca2",roughness:.25,metalness:.95})),u=(X,K)=>t(new Et({color:new Ie(X).multiplyScalar(K),toneMapped:!1})),h=u("#ffffff",4),d=u("#ff2a2a",1.6),f=u("#ffffff",1),m=u("#ffffff",1),x=(X,K,ie,_e=!1)=>{let Se=new Ci;Se.moveTo(X[0][0],X[0][1]);for(let[Ue,ze]of X.slice(1))Se.lineTo(Ue,ze);_e&&(Se.lineTo(-1.98,.3),Se.absarc(-1.5,.36,.48,Math.PI+.12,-.12,!0),Se.lineTo(1.02,.3),Se.absarc(1.5,.36,.48,Math.PI+.12,-.12,!0)),Se.closePath();let Te=new is(Se,{depth:K-ie*2,bevelEnabled:ie>0,bevelSize:ie*.8,bevelThickness:ie,bevelSegments:3,curveSegments:10});return Te.translate(0,0,-(K-ie*2)/2),Te.rotateY(-Math.PI/2),t(Te)},g=(X,K,ie=!0)=>{let _e=new Ge(X,K);return _e.castShadow=ie&&s,_e.receiveShadow=!0,n.add(_e),_e},p=(X,K,ie,_e,Se,Te,Ue,ze=!1)=>{let Ke=g(t(new Mt(X,K,ie)),Ue,ze);return Ke.position.set(_e,Se,Te),Ke};g(x([[2.42,.32],[2.47,.56],[2.32,.76],[1.1,.9],[-1.8,.96],[-2.38,.94],[-2.47,.62],[-2.42,.32]],Gi.wid,.07,!0),i),g(x([[1.1,.88],[.12,1.38],[-.98,1.38],[-1.86,.94]],1.62,.05),o,!1),g(x([[.14,1.37],[.02,1.44],[-.9,1.44],[-1,1.37]],1.5,.03),i);for(let X of[-1,1])p(.02,.4,2.1,X*(Gi.wid/2+.005),.66,-.05,r),p(.02,.025,4.2,X*(Gi.wid/2+.008),.9,-.1,u("#d8d8d8",.6));p(1.92,.03,.9,0,.91,1.7,r),p(1.3,.08,.08,0,.42,2.58,a,!0),p(1.3,.08,.08,0,.66,2.55,a,!0);for(let X of[-1,1])p(.06,.32,.08,X*.45,.54,2.56,a),p(.2,.08,.12,X*1.02,1,.95,i),p(.5,.05,.04,X*.62,.7,2.43,h),p(.06,.12,.04,X*.88,.64,2.38,h);p(1.66,.05,.04,0,.82,-2.43,d);let v=p(.5,.03,.03,0,1.36,-.98,d);p(1.36,.07,.3,0,1.48,-.42,a,!0);for(let X=0;X<3;X++)for(let K of[-1,1])p(.18,.05,.26,K*(.22+X*.2),1.525,-.42,K<0?f:m);let _=[],y=t(new Wt(.36,.36,.27,28));y.rotateZ(Math.PI/2);let A=t(new Wt(.25,.25,.275,14));A.rotateZ(Math.PI/2);let S=t(new Wt(.07,.07,.29,10));S.rotateZ(Math.PI/2);for(let[X,K]of[[-.82,1.5],[.82,1.5],[-.82,-1.5],[.82,-1.5]]){let ie=new Ut;ie.position.set(X,.36,K);let _e=new Ge(y,c);_e.castShadow=s,ie.add(_e,new Ge(A,l),new Ge(S,a)),n.add(ie),_.push(ie)}let w=new Ui("#f4f6ff",0,42,.5,.55,1.3);w.position.set(0,.7,2.5),w.target.position.set(0,0,16);let D=new Nn("#ffffff",0,22,1.6);D.position.set(0,2,-.4),n.add(w,w.target,D);let E=new Ui("#ffffff",0,70,.14,.45,1.1);s&&(E.castShadow=!0,E.shadow.mapSize.set(512,512),E.shadow.camera.near=.6,E.shadow.camera.far=60,E.shadow.bias=-4e-4,E.shadow.normalBias=.04);let T=new L(-.98,1.28,.9);p(.1,.1,.18,T.x,T.y,T.z,a);let U=34,B=t(new ns(Math.tan(.14)*U,U,28,1,!0));B.translate(0,-U/2,0),B.rotateX(-Math.PI/2);let z=t(new ht({transparent:!0,depthWrite:!1,blending:hn,side:sn,uniforms:{uK:{value:0},uL:{value:U}},vertexShader:"varying float vA; varying vec3 vN, vV; void main(){ vA = position.z; vec4 mv = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uK, uL; varying float vA; varying vec3 vN, vV; void main(){ float a = clamp(vA / uL, 0., 1.); float f = abs(dot(normalize(vN), normalize(vV))); gl_FragColor = vec4(vec3(uK * pow(1. - a, 1.6) * pow(f, 2.2) * smoothstep(0., 0.04, a)), 1.); }"})),J=new Ge(B,z);J.userData.noAO=!0,J.frustumCulled=!1;let te=0;return{group:n,search:E,beam:J,searchMount:T,update:(X,K,ie)=>{te+=ie.speed*X/.36;for(let ze of _)ze.rotation.x=te;w.intensity=ie.lights?70:0,h.color.setScalar(ie.lights?4:.05),d.color.setRGB(ie.lights?ie.brake?3:1.4:.05,ie.lights?.25:.01,ie.lights?.25:.01),v.visible=ie.brake&&ie.lights;let _e=K*2.5%1,Se=ze=>_e>ze&&_e<ze+.07||_e>ze+.14&&_e<ze+.21,Te=ie.strobe&&Se(0),Ue=ie.strobe&&Se(.5);f.color.setScalar(Te?9:.08),m.color.setScalar(Ue?9:.08),D.intensity=Te||Ue?90:0,D.position.x=Te?-.5:.5,z.uniforms.uK.value=E.intensity>0?.11:0,J.visible=E.intensity>0,J.position.copy(E.position),J.lookAt(E.target.position)},dispose:()=>e.forEach(X=>X.dispose())}}var gr=4.2,rd=46,id=-66,sd=Math.PI*gr,Ya=rd-id,l0=Ya*2+sd,c0=s=>{if(s<Ya)return{x:gr,z:rd-s,h:Math.PI};if(s<Ya+sd){let e=(s-Ya)/gr;return{x:gr*Math.cos(e),z:id-gr*Math.sin(e),h:Math.atan2(-Math.sin(e),-Math.cos(e))}}return{x:-gr,z:id+(s-Ya-sd),h:0}},u0=s=>Math.atan2(Math.sin(s),Math.cos(s)),yb=5.5,h0=3.4,Mb=1.6,bb=1,f0=22;async function d0(s){let{scene:e,high:t,blockers:n,bounds:i}=s,r=a0(t);e.add(r.group,r.search,r.search.target,r.beam);let o={Hoodie:new Lt({color:"#1a1b1f",roughness:.62,metalness:.05,sheen:.35,sheenRoughness:.5,sheenColor:new Ie("#5a5b62")}),Trousers:new tt({color:"#16171a",roughness:.78,metalness:0}),Gloves:new tt({color:"#0b0b0c",roughness:.5,metalness:0}),Trim:new tt({color:"#d4d5d8",roughness:.3,metalness:.2,emissive:"#3a3a3a"}),Shoes:new tt({color:"#0e0e10",roughness:.35,metalness:.1}),Sole:new tt({color:"#1c1c1f",roughness:.7,metalness:0}),Mask:new Et({color:"#000000"})},a=Object.fromEntries(Object.entries(o).map(([N,q])=>[N,()=>q])),c=new xn(.155,28,14,0,Math.PI*2,0,Math.PI*.56),l=new xn(.162,28,10,-Math.PI*.42,Math.PI*.84,Math.PI*.3,Math.PI*.36),u=new Lt({color:"#0c0c0e",roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.05}),h=new Lt({color:"#020203",roughness:.03,metalness:.85,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2}),d=[];for(let N=0;N<2;N++){let q=await Uu(s.base+"anims/ual.glb",t,s.base+"models/writer.glb",a),V=q.root;q.root.traverse(Ve=>{/Can\d|Cap\d|Pack|strap|String/i.test(Ve.name)&&(Ve.visible=!1),/(^|:)Head$/.test(Ve.name)&&(V=Ve)});let be=new Ut,ye=new Ge(c,u),Ne=new Ge(l,h);ye.castShadow=t,be.add(ye,Ne),q.root.visible=!1,be.visible=!1,e.add(q.root,be),d.push({w:q,helmet:be,head:V,x:0,z:0,h:0,out:!1,doing:"in",wind:0,tired:0,side:N?1:-1,goal:new de,look:0,door:N?1:-1})}let f=!0,m=0,x="calm",g=!1,p=0,v=0,_=0,y=0,A=new de,S={s:0,speed:0,onStreet:!1,gap:6,x:gr,z:rd,h:Math.PI},w=0,D=new L,E=(N,q,V)=>{if(Math.abs(N)>i.x||q<i.z0||q>i.z1)return!1;for(let be of n)if(N>be.x0-V&&N<be.x1+V&&q>be.z0-V&&q<be.z1+V)return!1;return!T(N,q,V)},T=(N,q,V)=>{if(!S.onStreet)return!1;let be=N-S.x,ye=q-S.z,Ne=Math.sin(S.h),Ve=Math.cos(S.h),Le=be*Ne+ye*Ve,re=be*Ve-ye*Ne;return Math.abs(Le)<Gi.len/2+V&&Math.abs(re)<Gi.wid/2+V},U=(N,q)=>{if(!T(N.x,N.z,q))return;let V=Math.sin(S.h),be=Math.cos(S.h),ye=N.x-S.x,Ne=N.z-S.z,Ve=ye*V+Ne*be,Le=ye*be-Ne*V,re=Gi.len/2+q-Math.abs(Ve),Ee=Gi.wid/2+q-Math.abs(Le);re<Ee?Ve=Math.sign(Ve||1)*(Gi.len/2+q):Le=Math.sign(Le||1)*(Gi.wid/2+q),N.x=S.x+Ve*V+Le*be,N.z=S.z+Ve*be-Le*V},B=(N,q)=>{for(let V of n){let be=V.x0-q,ye=V.x1+q,Ne=V.z0-q,Ve=V.z1+q;if(N.x>be&&N.x<ye&&N.z>Ne&&N.z<Ve){let Le=[N.x-be,ye-N.x,N.z-Ne,Ve-N.z],re=Math.min(...Le);re===Le[0]?N.x=be:re===Le[1]?N.x=ye:re===Le[2]?N.z=Ne:N.z=Ve}}N.x=Math.max(-i.x,Math.min(i.x,N.x)),N.z=Math.max(i.z0,Math.min(i.z1,N.z)),U(N,q)},z=(N,q,V,be,ye=!1)=>{let Ne=V-N,Ve=be-q;for(let Le of n){if(Le.low&&!ye)continue;let re=0,Ee=1;for(let[ve,De,R,pe]of[[N,Ne,Le.x0,Le.x1],[q,Ve,Le.z0,Le.z1]]){if(Math.abs(De)<1e-6){if(ve<R||ve>pe){re=2;break}continue}let ae=(R-ve)/De,ne=(pe-ve)/De;if(ae>ne&&([ae,ne]=[ne,ae]),re=Math.max(re,ae),Ee=Math.min(Ee,ne),re>Ee)break}if(re<=Ee)return!1}return!0},J=(N,q,V,be,ye,Ne)=>{let Ve=Ne.x-N,Le=Ne.z-q,re=Math.hypot(Ve,Le);return re>ye||re<.01?re<.01:Math.abs(u0(Math.atan2(Ve,Le)-V))>be?!1:z(N,q,Ne.x,Ne.z,Ne.crouch)},te=null,X=0,K=()=>{if(te)return te;let N=s.sound();if(!N)return null;try{let q=N.ctx,V=q.createOscillator(),be=q.createOscillator(),ye=q.createBiquadFilter(),Ne=q.createGain(),Ve=q.createOscillator(),Le=q.createGain(),re=q.createGain();V.type="sawtooth",be.type="square",be.detune.value=12,re.gain.value=.5,ye.type="lowpass",ye.frequency.value=2400,ye.Q.value=.8,Ve.type="triangle",Ve.frequency.value=.32,Le.gain.value=0,Ve.connect(Le),Le.connect(V.frequency),Le.connect(be.frequency),V.connect(ye),be.connect(re).connect(ye),Ne.gain.value=0,ye.connect(Ne).connect(N.out),V.start(),be.start(),Ve.start(),te={ctx:q,f:[V.frequency,be.frequency],depth:Le,gain:Ne}}catch{te=null}return te},ie=()=>{let N=K();if(!N)return;N.ctx.resume();let q=N.ctx.currentTime;N.depth.gain.cancelScheduledValues(q),N.depth.gain.setValueAtTime(0,q),N.depth.gain.setValueAtTime(380,q+1.3);for(let V of N.f)V.cancelScheduledValues(q),V.setValueAtTime(380,q),V.linearRampToValueAtTime(1350,q+.42),V.linearRampToValueAtTime(420,q+.62),V.linearRampToValueAtTime(1350,q+1.02),V.linearRampToValueAtTime(900,q+1.3);N.gain.gain.cancelScheduledValues(q),N.gain.gain.setValueAtTime(0,q),N.gain.gain.linearRampToValueAtTime(.09,q+.05),X=.09},_e=N=>{te&&Math.abs(N-X)>.004&&(X=N,te.gain.gain.setTargetAtTime(N,te.ctx.currentTime,.25))},Se=()=>{let N=Math.sin(S.h),q=Math.cos(S.h);for(let V of d)V.x=S.x+q*V.door*1.35+N*(V.door<0?.6:-.2),V.z=S.z-N*V.door*1.35+q*(V.door<0?.6:-.2),V.h=S.h+V.door*Math.PI/2,V.out=!0,V.doing="run",V.wind=0,V.tired=0,V.w.root.visible=V.helmet.visible=!0,V.w.play("Idle_Loop",0)},Te=()=>{for(let N of d)N.out=!1,N.doing="in",N.w.root.visible=N.helmet.visible=!1},Ue={x:0,z:0},ze=(N,q,V,be,ye)=>{let Ne=q-N.x,Ve=V-N.z,Le=Math.hypot(Ne,Ve);if(Le<.15)return!1;let re=Math.atan2(Ne,Ve),Ee=!1,ve=Math.min(1.3,Le);for(let R of[0,.35,.7,1.05,1.4,1.75,2.1]){for(let pe of R?[N.side,-N.side]:[1]){let ae=re+R*pe;if(E(N.x+Math.sin(ae)*ve,N.z+Math.cos(ae)*ve,.35)){re=ae,Ee=!0,R&&(N.side=pe);break}}if(Ee)break}let De=Math.min(Le,be*ye);return Ue.x=N.x+Math.sin(re)*De,Ue.z=N.z+Math.cos(re)*De,B(Ue,.35),N.x=Ue.x,N.z=Ue.z,N.h+=u0(re-N.h)*Math.min(1,ye*10),!0},Ke=N=>{N.w.root.updateMatrixWorld(!0);let q=N.head.matrixWorld,V=new L().setFromMatrixPosition(q),be=new Jt;q.decompose(new L,be,new L),N.helmet.position.copy(V).add(new L(0,.1,.012).applyQuaternion(be)),N.helmet.quaternion.copy(be)};return{update:(N,q,V)=>{let be="";f?!S.onStreet&&x==="calm"&&(S.gap-=N,(S.gap<=0||m>=1)&&(S.onStreet=!0,S.s=0,S.speed=7)):S.onStreet=!1;let ye=x==="alerted"||x==="chase"||x==="searching"||x==="busted";if(S.onStreet){let R=ye?0:m>.5?5:7.5,pe=c0(S.s),ae=Math.sin(pe.h),ne=Math.cos(pe.h),se=V.x-pe.x,C=V.z-pe.z,b=se*ae+C*ne,H=Math.abs(se*ne-C*ae);b>0&&b<8&&H<1.7&&(R=0),d.some(me=>me.out)&&(R=0),S.speed+=Math.max(-9*N,Math.min(4*N,R-S.speed)),S.s+=S.speed*N,S.s>=l0&&(S.onStreet=!1,S.gap=9+Math.random()*10);let Q=c0(Math.min(S.s,l0-.01));S.x=Q.x,S.z=Q.z,S.h=Q.h}r.group.visible=S.onStreet,r.group.position.set(S.x,0,S.z),r.group.rotation.y=S.h,r.group.updateMatrixWorld(!0);let Ne=r.searchMount.clone().applyMatrix4(r.group.matrixWorld);if(r.search.position.copy(Ne),ye)D.lerp(new L(A.x,.9,A.y),Math.min(1,N*3));else{w+=N*.5;let R=Math.sin(w)*1.45,pe=S.h+R;D.set(Ne.x+Math.sin(pe)*24,1.2,Ne.z+Math.cos(pe)*24)}r.search.target.position.copy(D),r.search.target.updateMatrixWorld(),r.search.intensity=S.onStreet?2600:0;let Ve=S.onStreet&&(()=>{let R=V.x-Ne.x,pe=V.z-Ne.z,ae=V.y+1-Ne.y,ne=Math.hypot(R,ae,pe),se=D.x-Ne.x,C=D.y-Ne.y,b=D.z-Ne.z,H=Math.hypot(se,C,b);return ne<48&&(R*se+ae*C+pe*b)/(ne*H)>Math.cos(.17)&&z(Ne.x,Ne.z,V.x,V.z,V.crouch)})(),Le=S.onStreet&&(Ve||J(S.x+Math.sin(S.h)*2.4,S.z+Math.cos(S.h)*2.4,S.h,.62,V.crouch?14:26,V)),re=!1;for(let R of d)R.out&&J(R.x,R.z,R.h,R.doing==="search"?1.6:1.3,V.crouch?f0*.55:f0,V)&&(re=!0);g=!!(Le||re);let Ee=g&&(V.spraying||V.painting);if(f?ye?m=Math.min(1,m+N):V.spraying?m=Math.min(1,m+N*(g?.8:.03)):Ee?m=Math.min(1,m+N*.3):m=Math.max(0,m-N*.05):m=0,f&&x==="calm"&&S.onStreet){let R=V.spraying||V.painting||m>=.6;p=g&&R?p+N:0;let pe=m>=1&&Math.hypot(V.x-S.x,V.z-S.z)<45;(p>.3||pe)&&(x="alerted",y=0,A.set(V.x,V.z),be="alert",ie())}if(x==="alerted"&&(y+=N,g&&A.set(V.x,V.z),y>.9&&S.speed<.5&&(Se(),x="chase",v=0)),x==="chase"||x==="searching"){if(g){if(A.set(V.x,V.z),v=0,x==="searching"){x="chase";for(let pe of d)pe.doing="run"}}else v+=N;let R=Math.min(...d.map(pe=>Math.hypot(pe.x-V.x,pe.z-V.z)));if(x==="chase"&&v>3&&R>9&&(x="searching",_=0,d.forEach((pe,ae)=>{pe.doing="search",pe.goal.set(A.x+(ae?1.6:-1.6),A.y+(ae?-1:1)),pe.look=0})),x==="searching"&&(_+=N)>13){x="calm",m=.3,be="escaped";for(let pe of d)pe.doing="return"}}for(let R of d)if(R.out){if(R.doing==="run"){R.wind+=N,R.tired>0?R.tired-=N:R.wind>8&&(R.tired=2.6,R.wind=0);let pe=g?V.x:A.x,ae=g?V.z:A.y,ne=ze(R,pe,ae,R.tired>0?h0:yb,N);if(R.w.play(ne?R.tired>0?"Jog_Fwd_Loop":"Sprint_Loop":"Idle_Loop",.2),Math.hypot(R.x-V.x,R.z-V.z)<bb&&V.y<.6&&x==="chase"){x="busted",be="busted",R.doing="bust",R.h=Math.atan2(V.x-R.x,V.z-R.z),R.w.play("Punch_Jab",.1,!0);for(let se of d)se!==R&&(se.doing="bust",se.w.play("Idle_Loop",.3))}}else if(R.doing==="search")ze(R,R.goal.x,R.goal.y,h0,N)?R.w.play("Jog_Fwd_Loop",.25):(R.look+=N,R.h+=Math.sin(q*1.3+R.door)*N*1.4,R.w.play("Idle_Loop",.3),R.look>3&&(R.look=0,R.goal.set(A.x+(Math.random()-.5)*12,A.y+(Math.random()-.5)*12)));else if(R.doing==="return"){let pe=Math.sin(S.h),ae=Math.cos(S.h),ne=Math.sign((R.x-S.x)*ae-(R.z-S.z)*pe)||R.door,se=S.x+ae*ne*1.4,C=S.z-pe*ne*1.4;if(!ze(R,se,C,Mb*1.4,N)||Math.hypot(R.x-se,R.z-C)<.5?(R.out=!1,R.doing="in",R.w.root.visible=R.helmet.visible=!1):R.w.play("Walk_Loop",.3),g&&m>=.6&&x==="calm"){x="chase",v=0,A.set(V.x,V.z);for(let b of d)b.out&&(b.doing="run");be="alert",ie()}}}if(d[0].out&&d[1].out){let R=d[1].x-d[0].x,pe=d[1].z-d[0].z,ae=Math.hypot(R,pe);if(ae<.8&&ae>1e-4){let ne=(.8-ae)/2/ae;d[0].x-=R*ne,d[0].z-=pe*ne,d[1].x+=R*ne,d[1].z+=pe*ne}}for(let R of d)R.out&&(R.w.root.position.set(R.x,s.groundY(R.x,R.z),R.z),R.w.root.rotation.y=R.h,R.w.update(N),Ke(R));let ve=x==="alerted"||x==="chase"||x==="searching"||x==="busted"||d.some(R=>R.out);r.update(N,q,{speed:S.speed,strobe:ve&&S.onStreet,lights:S.onStreet,brake:S.onStreet&&S.speed<1.5});let De=Math.hypot(V.x-S.x,V.z-S.z);return _e(x==="alerted"?.09:x==="chase"||x==="searching"?.08/(1+De/25):0),be},state:()=>({on:f,heat:+m.toFixed(3),chase:f?x:"off",seen:g,car:{x:+S.x.toFixed(2),z:+S.z.toFixed(2),heading:+S.h.toFixed(2),onStreet:S.onStreet,speed:+S.speed.toFixed(2)},cops:d.map(N=>({x:+N.x.toFixed(2),z:+N.z.toFixed(2),anim:N.out?N.w.playing():"",out:N.out,doing:N.doing}))}),setOn:N=>{f=N,Te(),x="calm",m=0,p=0,_e(0),S.onStreet=!1,S.gap=N?1.5:0},reset:()=>{Te(),x="calm",m=0,p=0,_e(0)},pushOut:U,nearest:()=>{let N=d.filter(q=>q.out);return N.length?{x:N[0].x,z:N[0].z}:null},dispose:()=>{for(let N of d)e.remove(N.w.root,N.helmet),N.w.dispose();e.remove(r.group,r.search,r.search.target,r.beam),r.dispose(),c.dispose(),l.dispose(),u.dispose(),h.dispose(),Object.values(o).forEach(N=>N.dispose())}}}var Eb={shadow:[1,1,1],high:[1,1,1],sat:0,contrast:1.32,vignette:.72},xr={x:25.5,z0:-79,z1:24};async function Sb(s,e){let t=e.high!==!1,n=k=>e.onStatus&&e.onStatus(k);n("Building the city\u2026");let i=new pu({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});i.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),i.toneMapping=rr,i.toneMappingExposure=1.05,i.shadowMap.enabled=t,i.shadowMap.type=ir;let r=i.domElement;r.style.cssText="width:100%;height:100%;display:block;outline:none;cursor:grab",r.tabIndex=0,s.appendChild(r);let o=new qs,a=new jt(62,16/9,.05,900),c=await Zm(i,e.base+"tex/"),l=Ym({renderer:i,scene:o,high:t,look:c,vexvoid:!0});o.add(l.group),n("Dressing the writer\u2026");let u=await Uu(e.base+"anims/ual.glb",t,e.base+"models/writer.glb");o.add(u.root,u.can);let h=o0(o,l.spots,e.store),d=null,f=()=>{if(!d)try{let k=new AudioContext,Z=k.createGain();Z.connect(k.destination),d={ctx:k,out:Z}}catch{d=null}return d};n("Calling the law\u2026");let m=await d0({scene:o,high:t,base:e.base,blockers:l.blockers,groundY:l.groundY,bounds:xr,sound:f}),x=new Nn("#ffffff",9,7,2),g=new Nn("#ffffff",6,5,2);o.add(x,g);let p=()=>{let k=s.getBoundingClientRect();return{w:Math.max(2,Math.round(k.width)),h:Math.max(2,Math.round(k.height))}},{w:v,h:_}=p();i.setSize(v,_,!1);let y=new vu(i);if(y.addPass(new _u(o,a)),t){let k=new ka(o,a,v,_);k.updateGtaoMaterial({radius:1.4,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:8});let Z=k.render.bind(k),ue=[];k.render=(...ke)=>{o.traverse(xe=>{(xe.isSprite||xe.isPoints||xe.isLineSegments||xe.userData.noAO)&&xe.visible&&(xe.visible=!1,ue.push(xe))}),Z(...ke);for(let xe of ue.splice(0))xe.visible=!0},y.addPass(k)}let A=new xo(new de(v,_),.42,.45,1.5);y.addPass(A),y.addPass(new yu);let S=Km();S.apply(Eb),y.addPass(S.pass);let w={x:0,z:8,y:0,gy:0,vy:0,heading:Math.PI,crouch:!1,airborne:!1},D={yaw:0,pitch:.12,dist:3.4},E=new Set,T=["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"," ","c","f","p","r","1","2","3","Tab","Escape"],U={colour:qa[0],cap:2,dist:.22},B=null,z=!1,J=0,te=new de,X=new va,K=new L,ie={text:"",until:0},_e="",Se=0,Te=(k,Z)=>{ie={text:k,until:Se+Z}},Ue=()=>{if(ie.until>Se)return ie.text;let k=m.state(),Z=Math.min(5,Math.ceil(k.heat*5-.001)),ue={off:"PATROL OFF",calm:k.seen?"SEEN":k.heat>=.6?"WANTED":"CALM",alerted:"ALERT",chase:"CHASE",searching:"SEARCHING",busted:"BUSTED"}[k.chase],ke=k.on?`HEAT ${"\u25AE".repeat(Z)}${"\u25AF".repeat(5-Z)} ${ue} \xB7 P PATROL OFF`:"PATROL OFF \xB7 P PATROL ON";return(B?`PAINTING ${B.id.toUpperCase()} \xB7 HOLD MOUSE TO SPRAY \xB7 WHEEL ${Math.round(U.dist*100)} CM \xB7 1 2 3 CAP ${["","SKINNY","MEDIUM","FAT"][U.cap]} \xB7 TAB ${r0[J]} \xB7 A D MOVE \xB7 F DONE`:"WASD MOVE \xB7 SHIFT SPRINT \xB7 C CROUCH \xB7 SPACE JUMP \xB7 DRAG LOOK \xB7 F AT A WALL TO PAINT")+" \xB7 "+ke+(e.onRec?" \xB7 R RECORD":"")},ze=()=>{let k=Ue();k!==_e&&(_e=k,e.onHud&&e.onHud(k))},Ke=()=>{let k=null,Z=3.2;for(let ue of l.spots){let ke=w.x-ue.center.x,xe=w.z-ue.center.z,Ce=ke*ue.normal.x+xe*ue.normal.z,Oe=Math.abs(ke*ue.normal.z-xe*ue.normal.x);Ce>0&&Ce<Z&&Oe<ue.w/2+.4&&(Z=Ce,k={id:ue.id,spot:ue})}return k},rt=()=>{if(B){B=null,z=!1,h.lift(),ze();return}let k=Ke();if(!k){Te("GET CLOSER TO A WALL TO PAINT (F)",1.6);return}B=k,w.crouch=!1,D.yaw=Math.atan2(k.spot.normal.x,k.spot.normal.z),D.pitch=.1,D.dist=2.6,ze()},N=null,q=k=>{let Z=!N&&k?f():null;if(Z){let ue=Z.ctx,ke=ue.createBuffer(1,ue.sampleRate,ue.sampleRate),xe=ke.getChannelData(0);for(let Pe=0;Pe<xe.length;Pe++)xe[Pe]=Math.random()*2-1;let Ce=ue.createBufferSource();Ce.buffer=ke,Ce.loop=!0;let Oe=ue.createBiquadFilter();Oe.type="bandpass",Oe.frequency.value=3800,Oe.Q.value=.7;let Xe=ue.createGain();Xe.gain.value=0,Ce.connect(Oe).connect(Xe).connect(Z.out),Ce.start(),N={ctx:ue,gain:Xe}}N&&N.gain.gain.setTargetAtTime(k?.12:0,N.ctx.currentTime,.03)},V=new Ge(new ca(.8,1,32),new Et({color:"#ffffff",transparent:!0,opacity:.8,depthTest:!1}));V.renderOrder=10,V.visible=!1,o.add(V);let be=(k,Z)=>{let ue=k.key.length===1?k.key.toLowerCase():k.key;if(T.includes(ue)){if(k.preventDefault(),k.stopPropagation(),Z&&!k.repeat&&ue==="r"){e.onRec&&e.onRec();return}if(!ae){if(Z&&!k.repeat&&ue==="f"&&rt(),Z&&!k.repeat&&ue==="p"){let ke=!m.state().on;m.setOn(ke),Te(ke?"PATROL ON \xB7 WATCH FOR THE CAR":"PATROL OFF \xB7 PAINT IN PEACE",2)}Z&&!k.repeat&&ue==="Escape"&&B&&rt(),Z&&B&&(ue==="1"||ue==="2"||ue==="3")&&(U.cap=Number(ue),ze()),Z&&B&&ue==="Tab"&&(J=(J+1)%qa.length,U.colour=qa[J],ze()),Z&&!k.repeat&&ue==="c"&&!B&&(w.crouch=!w.crouch),Z&&!k.repeat&&ue===" "&&!w.airborne&&(w.vy=4.6,w.airborne=!0,w.crouch=!1,u.play("Jump_Start",.08,!0)),Z?E.add(ue):E.delete(ue)}}},ye=k=>be(k,!0),Ne=k=>be(k,!1);r.addEventListener("keydown",ye),r.addEventListener("keyup",Ne),r.addEventListener("blur",()=>E.clear());let Ve=null,Le=k=>{let Z=r.getBoundingClientRect();te.set((k.clientX-Z.left)/Z.width*2-1,-((k.clientY-Z.top)/Z.height)*2+1)};r.addEventListener("pointerdown",k=>{if(r.focus(),Le(k),r.setPointerCapture(k.pointerId),B&&k.button===0){z=!0;return}Ve={x:k.clientX,y:k.clientY},r.style.cursor="grabbing"}),r.addEventListener("pointermove",k=>{Le(k),Ve&&(D.yaw-=(k.clientX-Ve.x)*.0045,D.pitch=Math.max(-.35,Math.min(.75,D.pitch+(k.clientY-Ve.y)*.003)),Ve={x:k.clientX,y:k.clientY})});let re=()=>{Ve=null,z=!1,h.lift(),r.style.cursor=B?"crosshair":"grab"};r.addEventListener("pointerup",re),r.addEventListener("pointercancel",re),r.addEventListener("wheel",k=>{if(k.preventDefault(),B){U.dist=Math.max(.05,Math.min(.6,U.dist+k.deltaY*5e-4)),ze();return}D.dist=Math.max(1.2,Math.min(7,D.dist*Math.exp(k.deltaY*.001)))},{passive:!1});let Ee=new ResizeObserver(()=>{({w:v,h:_}=p()),i.setSize(v,_,!1),y.setSize(v,_),l.resize(v,_),a.aspect=v/_,a.updateProjectionMatrix()});Ee.observe(s);let ve=new nr,De=0,R=!1,pe="",ae=null,ne=new L,se=new L,C=new L(0,2,12),b=new L,H=0,Q="",me=0;a.position.copy(C);let $=()=>{if(R)return;De=requestAnimationFrame($);let k=Math.min(.05,ve.getDelta()),Z=ae&&ae.t<1.4?k*.3:k;Se+=k;let ue=ae?0:(E.has("d")||E.has("ArrowRight")?1:0)-(E.has("a")||E.has("ArrowLeft")?1:0),ke=ae?0:(E.has("w")||E.has("ArrowUp")?1:0)-(E.has("s")||E.has("ArrowDown")?1:0),xe=E.has("Shift")&&!w.crouch&&!B,Ce=!!(ue||ke&&!B),Oe=B?1.1:w.crouch?1.35:xe?6.2:3.3;if(ne.set(-Math.sin(D.yaw),0,-Math.cos(D.yaw)),se.set(Math.cos(D.yaw),0,-Math.sin(D.yaw)),Ce){let fe=B?0:ke,we=ne.x*fe+se.x*ue,Me=ne.z*fe+se.z*ue,he=Math.hypot(we,Me);w.x=Math.max(-xr.x,Math.min(xr.x,w.x+we/he*Oe*Z)),w.z=Math.max(xr.z0,Math.min(xr.z1,w.z+Me/he*Oe*Z));let Fe=(B?Math.atan2(-B.spot.normal.x,-B.spot.normal.z):Math.atan2(we,Me))-w.heading;Fe=Math.atan2(Math.sin(Fe),Math.cos(Fe)),w.heading+=Fe*Math.min(1,Z*12);for(let je of l.blockers){let He=je.x0-.35,mt=je.x1+.35,ut=je.z0-.35,At=je.z1+.35;if(w.x>He&&w.x<mt&&w.z>ut&&w.z<At){let Nt=[w.x-He,mt-w.x,w.z-ut,At-w.z],_t=Math.min(...Nt);_t===Nt[0]?w.x=He:_t===Nt[1]?w.x=mt:_t===Nt[2]?w.z=ut:w.z=At}}}if(B){let fe=B.spot,we=fe.normal,Me=we.z,he=-we.x,Ae=(w.x-fe.center.x)*we.x+(w.z-fe.center.z)*we.z,Fe=(w.x-fe.center.x)*Me+(w.z-fe.center.z)*he;Ae=Math.max(.55,Math.min(.9,Ae)),Fe=Math.max(-fe.w/2+.3,Math.min(fe.w/2-.3,Fe)),w.x=fe.center.x+we.x*Ae+Me*Fe,w.z=fe.center.z+we.z*Ae+he*Fe;let je=Math.atan2(-we.x,-we.z)-w.heading;je=Math.atan2(Math.sin(je),Math.cos(je)),w.heading+=je*Math.min(1,Z*10),X.setFromCamera(te,a);let He=h.hit(X),mt=He&&He.id===fe.id&&He.point.y<w.gy+w.y+2.35&&He.point.y>w.gy+.08&&Math.abs((He.point.x-w.x)*Me+(He.point.z-w.z)*he)<1.25;V.visible=!!(He&&He.id===fe.id),He&&He.id===fe.id&&(V.position.copy(He.point).addScaledVector(we,.02),V.lookAt(He.point.clone().add(we)),V.scale.setScalar(.012+U.dist*.45*.6+U.cap*.006),V.material.color.set(mt?"#ffffff":"#555555")),z&&mt&&He?(h.spray(He.id,He.u,He.v,Z,U),pe=He.id):h.lift(),He&&He.id===fe.id?u.aim(K.copy(He.point).addScaledVector(we,U.dist+.03),He.point,z?1:.85):u.aim(null),q(!!(z&&mt))}else V.visible=!1,q(!1),u.aim(null);h.update(Z),m.pushOut(w,.35);let Xe=m.update(Z,Se,{x:w.x,z:w.z,y:w.y,crouch:w.crouch,painting:!!B,spraying:!!(B&&z&&V.visible)});if(Xe&&e.onEvent)try{e.onEvent(Xe)}catch{}if(Xe==="busted"){ae={t:0,spot:pe},B&&rt(),z=!1,w.crouch=!1,E.clear(),u.play("Hit_Knockback",.08,!0);let fe=m.nearest();fe&&(D.yaw=Math.atan2(w.x-fe.x,w.z-fe.z)+1.1)}if(Xe==="escaped"&&(Te("ESCAPED \xB7 THEY LOST YOU",3),pe=""),Xe==="alert"&&Te("ALERT \xB7 THEY SAW YOU \xB7 RUN",1.4),ae&&(ae.t+=k,D.yaw+=k*.45,D.dist+=(5.2-D.dist)*Math.min(1,k*2),D.pitch+=(.32-D.pitch)*Math.min(1,k*2),ie={text:ae.spot?`BUSTED \xB7 THEY ARE BUFFING ${ae.spot.toUpperCase()}`:"BUSTED",until:Se+.1},ae.t>2.8&&(ae.spot&&h.clear(ae.spot),Te(ae.spot?`BUSTED \xB7 ${ae.spot.toUpperCase()} GOT BUFFED \xB7 BACK TO THE START`:"BUSTED \xB7 BACK TO THE START",3.5),Object.assign(w,{x:0,z:8,y:0,vy:0,heading:Math.PI,crouch:!1,airborne:!1}),Object.assign(D,{yaw:0,pitch:.12,dist:3.4}),ae=null,pe="",m.reset(),u.play("Idle_Loop",.2))),!ae)if(B&&!Ce)u.play("Idle_Loop",.15);else if(w.airborne)w.vy-=13*Z,w.y+=w.vy*Z,w.y<=0?(w.y=0,w.vy=0,w.airborne=!1,u.play("Jump_Land",.06,!0),H=.28):w.vy<2.5&&u.play("Jump_Loop",.15);else if(H>0)H-=Z;else if(Q)u.play(Q,.2);else{me=Ce||w.crouch?0:me+Z;let fe=me%16>9?"Idle_FoldArms_Loop":"Idle_Loop";u.play(w.crouch?Ce?"Crouch_Fwd_Loop":"Crouch_Idle_Loop":Ce?xe?"Sprint_Loop":"Jog_Fwd_Loop":fe,fe==="Idle_FoldArms_Loop"?.6:.22)}w.gy+=(l.groundY(w.x,w.z)-w.gy)*Math.min(1,Z*16);let Pe=w.gy+w.y;u.root.position.set(w.x,Pe,w.z),u.root.rotation.y=w.heading,u.update(Z),x.position.set(w.x+Math.sin(D.yaw)*1.8+Math.cos(D.yaw)*.9,Pe+2.4,w.z+Math.cos(D.yaw)*1.8-Math.sin(D.yaw)*.9),g.position.set(w.x-Math.sin(D.yaw)*1.4,Pe+2.1,w.z-Math.cos(D.yaw)*1.4);let ot=Pe+(w.crouch?1.05:1.45),O=w.x+Math.sin(D.yaw)*Math.cos(D.pitch)*D.dist+Math.cos(D.yaw)*.55,Re=w.z+Math.cos(D.yaw)*Math.cos(D.pitch)*D.dist-Math.sin(D.yaw)*.55;C.set(Math.max(-26.5,Math.min(26.5,O)),Math.max(.35,ot+Math.sin(D.pitch)*D.dist),Math.max(xr.z0-.5,Math.min(xr.z1+4,Re))),a.position.lerp(C,Math.min(1,Z*10)),b.set(w.x+Math.cos(D.yaw)*.55,ot,w.z-Math.sin(D.yaw)*.55),a.lookAt(b),l.update(Z,Se,a),l.beforeRender(i,o,a),S.tick(Se),y.render(Z),ze()};return n(""),ze(),$(),{canvas:r,where:()=>({x:w.x,z:w.z,yaw:D.yaw,heading:w.heading,anim:u.playing()}),snap:(k=768)=>{l.beforeRender(i,o,a),y.render(0);let Z=document.createElement("canvas");return Z.width=k,Z.height=Math.round(k*r.height/r.width),Z.getContext("2d").drawImage(r,0,0,Z.width,Z.height),Z.toDataURL("image/jpeg",.82)},inspect:k=>{k.yaw!=null&&(D.yaw=k.yaw),k.pitch!=null&&(D.pitch=k.pitch),k.dist!=null&&(D.dist=k.dist),k.heading!=null&&(w.heading=k.heading),Q=k.anim||""},paint:(k,Z,ue={})=>h.path(k,Z,{colour:ue.colour||qa[0],cap:ue.cap||2,dist:ue.dist??.2}),clearPaint:k=>h.clear(k),piece:k=>h.png(k),painting:()=>B?B.id:"",flush:async()=>{await h.loaded,await h.flush()},spots:()=>l.spots.map(k=>({id:k.id,w:k.w,h:k.h,x:k.center.x,y:k.center.y,z:k.center.z})),law:()=>m.state(),cops:k=>m.setOn(k),audio:()=>{let k=f();return k?{ctx:k.ctx,node:k.out}:null},goto:(k,Z,ue,ke)=>{w.x=k,w.z=Z,ue!=null&&(D.yaw=ue,w.heading=ue+Math.PI),ke!=null&&(D.pitch=ke)},stop:()=>{R=!0,cancelAnimationFrame(De),Ee.disconnect(),r.removeEventListener("keydown",ye),r.removeEventListener("keyup",Ne),q(!1),m.dispose(),d&&d.ctx.close(),h.dispose(),u.dispose(),l.dispose(),c.dispose(),y.dispose(),i.dispose(),r.remove()}}}return H0(Tb);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
