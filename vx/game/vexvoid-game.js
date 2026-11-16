var VXGAME=(()=>{var sh=Object.defineProperty;var G0=Object.getOwnPropertyDescriptor;var W0=Object.getOwnPropertyNames;var X0=Object.prototype.hasOwnProperty;var q0=(s,e)=>{for(var t in e)sh(s,t,{get:e[t],enumerable:!0})},Y0=(s,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of W0(e))!X0.call(s,i)&&i!==t&&sh(s,i,{get:()=>e[i],enumerable:!(n=G0(e,i))||n.enumerable});return s};var Z0=s=>Y0(sh({},"__esModule",{value:!0}),s);var Vb={};q0(Vb,{mount:()=>kb});var xp=0,Yh=1,vp=2;var Er=1,_p=2,Eo=3,zi=0,qn=1,wn=2,Dn=0,lr=1,Ln=2,Zh=3,$h=4,_c=5,xi=100,yp=101,Mp=102,bp=103,Ep=104,Sr=200,Sp=201,Tp=202,wp=203,Yl=204,Zl=205,Na=206,Ap=207,Ua=208,Rp=209,Cp=210,Pp=211,Ip=212,Dp=213,Lp=214,yc=0,Mc=1,bc=2,cr=3,Ec=4,Sc=5,Tc=6,wc=7,Kh=0,Np=1,Up=2,ki=0,Fa=1,Oa=2,Ba=3,Tr=4,Ha=5,za=6,ka=7,Uh="attached",Fp="detached",Jh=300,qs=301,wr=302,Ac=303,Rc=304,Va=306,Tn=1e3,Ci=1001,ao=1002,Mn=1003,Cc=1004;var Ar=1005;var In=1006,So=1007;var bi=1008;var ni=1009,jh=1010,Qh=1011,To=1012,Pc=1013,Vi=1014,Ei=1015,Nn=1016,Ic=1017,Dc=1018,Ys=1020,ef=35902,tf=35899,nf=1021,sf=1022,li=1023,qi=1026,rs=1027,Lc=1028,Nc=1029,Rr=1030,Uc=1031;var Fc=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Oc=35840,Bc=35841,Hc=35842,zc=35843,kc=36196,Vc=37492,Gc=37496,Wc=37488,Xc=37489,qc=37490,Yc=37491,Zc=37808,$c=37809,Kc=37810,Jc=37811,jc=37812,Qc=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,lu=36492,cu=36494,uu=36495,hu=36283,fu=36284,du=36285,pu=36286,mu=2200,gu=2201,Op=2202,ur=2300,hr=2301,ql=2302,rr=2400,or=2401,Qo=2402,xu=2500,Bp=2501,rf=0,Ya=1,wo=2,Hp=3200;var vu=0,zp=1,Ps="",pn="srgb",Zn="srgb-linear",ea="linear",Yt="srgb";var sr=7680;var Fh=519,kp=512,Vp=513,Gp=514,_u=515,Wp=516,Xp=517,yu=518,qp=519,$l=35044,Mu=35048;var of="300 es",Hi=2e3,ta=2001;function af(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yp(){let s=lo("canvas");return s.style.display="block",s}var Rd={},co=null;function na(...s){let e="THREE."+s.shift();co?co("log",e,...s):console.log(e,...s)}function ht(...s){let e="THREE."+s.shift();co?co("warn",e,...s):console.warn(e,...s)}function mt(...s){let e="THREE."+s.shift();co?co("error",e,...s):console.error(e,...s)}function uo(...s){let e=s.join(" ");e in Rd||(Rd[e]=!0,ht(...s))}function Zp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cd=1234567,$o=Math.PI/180,fr=180/Math.PI;function Pi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[t&63|128]+jn[t>>8&255]+"-"+jn[t>>16&255]+jn[t>>24&255]+jn[n&255]+jn[n>>8&255]+jn[n>>16&255]+jn[n>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function lf(s,e){return(s%e+e)%e}function K0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function J0(s,e,t){return s!==e?(t-s)/(e-s):0}function Ko(s,e,t){return(1-t)*s+t*e}function j0(s,e,t,n){return Ko(s,e,1-Math.exp(-t*n))}function Q0(s,e=1){return e-Math.abs(lf(s,e*2)-e)}function eg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function tg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ng(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ig(s,e){return s+Math.random()*(e-s)}function sg(s){return s*(.5-Math.random())}function rg(s){s!==void 0&&(Cd=s);let e=Cd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function og(s){return s*$o}function ag(s){return s*fr}function lg(s){return(s&s-1)===0&&s!==0}function cg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ug(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function hg(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*m,c*f,a*l);break;case"YXY":s.set(c*f,a*u,c*m,a*l);break;case"ZYZ":s.set(c*m,c*f,a*u,a*l);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Bi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function on(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Is={DEG2RAD:$o,RAD2DEG:fr,generateUUID:Pi,clamp:Ct,euclideanModulo:lf,mapLinear:K0,inverseLerp:J0,lerp:Ko,damp:j0,pingpong:Q0,smoothstep:eg,smootherstep:tg,randInt:ng,randFloat:ig,randFloatSpread:sg,seededRandom:rg,degToRad:og,radToDeg:ag,isPowerOfTwo:lg,ceilPowerOfTwo:cg,floorPowerOfTwo:ug,setQuaternionFromProperEuler:hg,normalize:on,denormalize:Bi},ye=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},an=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],d=r[o+0],f=r[o+1],m=r[o+2],x=r[o+3];if(a<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||c!==d||l!==f||u!==m){let g=c*d+l*f+u*m+h*x;g<0&&(d=-d,f=-f,m=-m,x=-x,g=-g);let p=1-a;if(g<.9995){let M=Math.acos(g),_=Math.sin(M);p=Math.sin(p*M)/_,a=Math.sin(a*M)/_,c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+x*a}else{c=c*p+d*a,l=l*p+f*a,u=u*p+m*a,h=h*p+x*a;let M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-a*f,e[t+2]=l*m+u*f+a*d-c*h,e[t+3]=u*m-a*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),f=c(i/2),m=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return rh.copy(this).projectOnVector(e),this.sub(rh)}reflect(e){return this.sub(rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},rh=new D,Pd=new an,Tt=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=i[0],g=i[3],p=i[6],M=i[1],_=i[4],v=i[7],C=i[2],S=i[5],F=i[8];return r[0]=o*x+a*M+c*C,r[3]=o*g+a*_+c*S,r[6]=o*p+a*v+c*F,r[1]=l*x+u*M+h*C,r[4]=l*g+u*_+h*S,r[7]=l*p+u*v+h*F,r[2]=d*x+f*M+m*C,r[5]=d*g+f*_+m*S,r[8]=d*p+f*v+m*F,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,f=l*r-o*c,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(i*l-u*n)*x,e[2]=(a*n-i*o)*x,e[3]=d*x,e[4]=(u*t-i*c)*x,e[5]=(i*r-a*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(oh.makeScale(e,t)),this}rotate(e){return this.premultiply(oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oh=new Tt,Id=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dd=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fg(){let s={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Yt&&(i.r=Ms(i.r),i.g=Ms(i.g),i.b=Ms(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Yt&&(i.r=oo(i.r),i.g=oo(i.g),i.b=oo(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ps?ea:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Zn]:{primaries:e,whitePoint:n,transfer:ea,toXYZ:Id,fromXYZ:Dd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:n,transfer:Yt,toXYZ:Id,fromXYZ:Dd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),s}var It=fg();function Ms(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function oo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Vr,Kl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=lo("canvas")),Vr.width=e.width,Vr.height=e.height;let i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ms(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ms(t[n]/255)*255):t[n]=Ms(t[n]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dg=0,ho=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Pi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ah(i[o].image)):r.push(ah(i[o]))}else r=ah(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function ah(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Kl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var pg=0,lh=new D,Hn=class s extends Yi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=Ci,i=Ci,r=In,o=bi,a=li,c=ni,l=s.DEFAULT_ANISOTROPY,u=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pg++}),this.uuid=Pi(),this.name="",this.source=new ho(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tn:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tn:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Jh;Hn.DEFAULT_ANISOTROPY=1;var Kt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],x=c[2],g=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,C=(p+1)/2,S=(u+d)/4,F=(h+x)/4,H=(m+g)/4;return _>v&&_>C?_<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(_),i=S/n,r=F/n):v>C?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=S/i,r=H/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=F/r,i=H/r),this.set(n,i,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-x)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Jl=class extends Yi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);let i={width:e,height:t,depth:n.depth},r=new Hn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new ho(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends Jl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ia=class extends Hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jl=class extends Hn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vi=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gl.copy(n.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),xl.subVectors(this.max,Bo),Gr.subVectors(e.a,Bo),Wr.subVectors(e.b,Bo),Xr.subVectors(e.c,Bo),Ns.subVectors(Wr,Gr),Us.subVectors(Xr,Wr),er.subVectors(Gr,Xr);let t=[0,-Ns.z,Ns.y,0,-Us.z,Us.y,0,-er.z,er.y,Ns.z,0,-Ns.x,Us.z,0,-Us.x,er.z,0,-er.x,-Ns.y,Ns.x,0,-Us.y,Us.x,0,-er.y,er.x,0];return!ch(t,Gr,Wr,Xr,xl)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Gr,Wr,Xr,xl))?!1:(vl.crossVectors(Ns,Us),t=[vl.x,vl.y,vl.z],ch(t,Gr,Wr,Xr,xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ps=[new D,new D,new D,new D,new D,new D,new D,new D],Ui=new D,gl=new vi,Gr=new D,Wr=new D,Xr=new D,Ns=new D,Us=new D,er=new D,Bo=new D,xl=new D,vl=new D,tr=new D;function ch(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){tr.fromArray(s,r);let a=i.x*Math.abs(tr.x)+i.y*Math.abs(tr.y)+i.z*Math.abs(tr.z),c=e.dot(tr),l=t.dot(tr),u=n.dot(tr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var mg=new vi,Ho=new D,uh=new D,fi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mg.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ho,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(uh)),this.expandByPoint(Ho.copy(e.center).sub(uh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ms=new D,hh=new D,_l=new D,Fs=new D,fh=new D,yl=new D,dh=new D,zs=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){hh.copy(e).add(t).multiplyScalar(.5),_l.copy(t).sub(e).normalize(),Fs.copy(this.origin).sub(hh);let r=e.distanceTo(t)*.5,o=-this.direction.dot(_l),a=Fs.dot(this.direction),c=-Fs.dot(_l),l=Fs.lengthSq(),u=Math.abs(1-o*o),h,d,f,m;if(u>0)if(h=o*c-a,d=o*a-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(hh).addScaledVector(_l,d),f}intersectSphere(e,t){ms.subVectors(e.center,this.origin);let n=ms.dot(this.direction),i=ms.dot(ms)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,n,i,r){fh.subVectors(t,e),yl.subVectors(n,e),dh.crossVectors(fh,yl);let o=this.direction.dot(dh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fs.subVectors(this.origin,e);let c=a*this.direction.dot(yl.crossVectors(Fs,yl));if(c<0)return null;let l=a*this.direction.dot(fh.cross(Fs));if(l<0||c+l>o)return null;let u=-a*Fs.dot(dh);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},lt=class s{constructor(e,t,n,i,r,o,a,c,l,u,h,d,f,m,x,g){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,x,g)}set(e,t,n,i,r,o,a,c,l,u,h,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/qr.setFromMatrixColumn(e,0).length(),r=1/qr.setFromMatrixColumn(e,1).length(),o=1/qr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-x*l,t[9]=-a*c,t[2]=x-d*l,t[6]=m+f*l,t[10]=o*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d+x*a,t[4]=m*a-f,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-m,t[6]=x+d*a,t[10]=o*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,m=l*u,x=l*h;t[0]=d-x*a,t[4]=-o*h,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*u,t[9]=x-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let d=o*u,f=o*h,m=a*u,x=a*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=f*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=o*c,f=o*l,m=a*c,x=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+x,t[5]=o*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=a*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gg,e,xg)}lookAt(e,t,n){let i=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Os.crossVectors(n,mi),Os.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Os.crossVectors(n,mi)),Os.normalize(),Ml.crossVectors(mi,Os),i[0]=Os.x,i[4]=Ml.x,i[8]=mi.x,i[1]=Os.y,i[5]=Ml.y,i[9]=mi.y,i[2]=Os.z,i[6]=Ml.z,i[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],M=n[3],_=n[7],v=n[11],C=n[15],S=i[0],F=i[4],H=i[8],b=i[12],w=i[1],B=i[5],V=i[9],Z=i[13],re=i[2],ae=i[6],N=i[10],G=i[14],oe=i[3],Te=i[7],xe=i[11],Ie=i[15];return r[0]=o*S+a*w+c*re+l*oe,r[4]=o*F+a*B+c*ae+l*Te,r[8]=o*H+a*V+c*N+l*xe,r[12]=o*b+a*Z+c*G+l*Ie,r[1]=u*S+h*w+d*re+f*oe,r[5]=u*F+h*B+d*ae+f*Te,r[9]=u*H+h*V+d*N+f*xe,r[13]=u*b+h*Z+d*G+f*Ie,r[2]=m*S+x*w+g*re+p*oe,r[6]=m*F+x*B+g*ae+p*Te,r[10]=m*H+x*V+g*N+p*xe,r[14]=m*b+x*Z+g*G+p*Ie,r[3]=M*S+_*w+v*re+C*oe,r[7]=M*F+_*B+v*ae+C*Te,r[11]=M*H+_*V+v*N+C*xe,r[15]=M*b+_*Z+v*G+C*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15],M=c*f-l*d,_=a*f-l*h,v=a*d-c*h,C=o*f-l*u,S=o*d-c*u,F=o*h-a*u;return t*(x*M-g*_+p*v)-n*(m*M-g*C+p*S)+i*(m*_-x*C+p*F)-r*(m*v-x*S+g*F)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],M=h*g*l-x*d*l+x*c*f-a*g*f-h*c*p+a*d*p,_=m*d*l-u*g*l-m*c*f+o*g*f+u*c*p-o*d*p,v=u*x*l-m*h*l+m*a*f-o*x*f-u*a*p+o*h*p,C=m*h*c-u*x*c-m*a*d+o*x*d+u*a*g-o*h*g,S=t*M+n*_+i*v+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/S;return e[0]=M*F,e[1]=(x*d*r-h*g*r-x*i*f+n*g*f+h*i*p-n*d*p)*F,e[2]=(a*g*r-x*c*r+x*i*l-n*g*l-a*i*p+n*c*p)*F,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*f-n*c*f)*F,e[4]=_*F,e[5]=(u*g*r-m*d*r+m*i*f-t*g*f-u*i*p+t*d*p)*F,e[6]=(m*c*r-o*g*r-m*i*l+t*g*l+o*i*p-t*c*p)*F,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*f+t*c*f)*F,e[8]=v*F,e[9]=(m*h*r-u*x*r-m*n*f+t*x*f+u*n*p-t*h*p)*F,e[10]=(o*x*r-m*a*r+m*n*l-t*x*l-o*n*p+t*a*p)*F,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*f-t*a*f)*F,e[12]=C*F,e[13]=(u*x*i-m*h*i+m*n*d-t*x*d-u*n*g+t*h*g)*F,e[14]=(m*a*i-o*x*i-m*n*c+t*x*c+o*n*g-t*a*g)*F,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*F,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,f=r*u,m=r*h,x=o*u,g=o*h,p=a*h,M=c*l,_=c*u,v=c*h,C=n.x,S=n.y,F=n.z;return i[0]=(1-(x+p))*C,i[1]=(f+v)*C,i[2]=(m-_)*C,i[3]=0,i[4]=(f-v)*S,i[5]=(1-(d+p))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(m+_)*F,i[9]=(g-M)*F,i[10]=(1-(d+x))*F,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=qr.set(i[0],i[1],i[2]).length(),o=qr.set(i[4],i[5],i[6]).length(),a=qr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),Fi.copy(this);let l=1/r,u=1/o,h=1/a;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=u,Fi.elements[5]*=u,Fi.elements[6]*=u,Fi.elements[8]*=h,Fi.elements[9]*=h,Fi.elements[10]*=h,t.setFromRotationMatrix(Fi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Hi,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),m,x;if(c)m=r/(o-r),x=o*r/(o-r);else if(a===Hi)m=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===ta)m=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Hi,c=!1){let l=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),m,x;if(c)m=1/(o-r),x=o/(o-r);else if(a===Hi)m=-2/(o-r),x=-(o+r)/(o-r);else if(a===ta)m=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},qr=new D,Fi=new lt,gg=new D(0,0,0),xg=new D(1,1,1),Os=new D,Ml=new D,mi=new D,Ld=new lt,Nd=new an,_i=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nd.setFromEuler(this),this.setFromQuaternion(Nd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_i.DEFAULT_ORDER="XYZ";var fo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vg=0,Ud=new D,Yr=new an,gs=new lt,bl=new D,zo=new D,_g=new D,yg=new an,Fd=new D(1,0,0),Od=new D(0,1,0),Bd=new D(0,0,1),Hd={type:"added"},Mg={type:"removed"},Zr={type:"childadded",child:null},ph={type:"childremoved",child:null},mn=class s extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=Pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new D,t=new _i,n=new an,i=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new Tt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,t){return Yr.setFromAxisAngle(e,t),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Fd,e)}rotateY(e){return this.rotateOnAxis(Od,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fd,e)}translateY(e){return this.translateOnAxis(Od,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bl.copy(e):bl.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(zo,bl,this.up):gs.lookAt(bl,zo,this.up),this.quaternion.setFromRotationMatrix(gs),i&&(gs.extractRotation(i.matrixWorld),Yr.setFromRotationMatrix(gs),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hd),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mg),ph.child=e,this.dispatchEvent(ph),ph.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(gs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hd),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};mn.DEFAULT_UP=new D(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Oi=new D,xs=new D,mh=new D,vs=new D,$r=new D,Kr=new D,zd=new D,gh=new D,xh=new D,vh=new D,_h=new Kt,yh=new Kt,Mh=new Kt,ys=class s{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Oi.subVectors(e,t),i.cross(Oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Oi.subVectors(i,t),xs.subVectors(n,t),mh.subVectors(e,t);let o=Oi.dot(Oi),a=Oi.dot(xs),c=Oi.dot(mh),l=xs.dot(xs),u=xs.dot(mh),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-a*u)*d,m=(o*u-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,vs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vs.x),c.addScaledVector(o,vs.y),c.addScaledVector(a,vs.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return _h.setScalar(0),yh.setScalar(0),Mh.setScalar(0),_h.fromBufferAttribute(e,t),yh.fromBufferAttribute(e,n),Mh.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(_h,r.x),o.addScaledVector(yh,r.y),o.addScaledVector(Mh,r.z),o}static isFrontFacing(e,t,n,i){return Oi.subVectors(n,t),xs.subVectors(e,t),Oi.cross(xs).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Oi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;$r.subVectors(i,n),Kr.subVectors(r,n),gh.subVectors(e,n);let c=$r.dot(gh),l=Kr.dot(gh);if(c<=0&&l<=0)return t.copy(n);xh.subVectors(e,i);let u=$r.dot(xh),h=Kr.dot(xh);if(u>=0&&h<=u)return t.copy(i);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector($r,o);vh.subVectors(e,r);let f=$r.dot(vh),m=Kr.dot(vh);if(m>=0&&f<=m)return t.copy(r);let x=f*l-c*m;if(x<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Kr,a);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return zd.subVectors(r,i),a=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(zd,a);let p=1/(g+x+d);return o=x*p,a=d*p,t.copy(n).addScaledVector($r,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$p={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bs={h:0,s:0,l:0},El={h:0,s:0,l:0};function bh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=lf(e,1),t=Ct(t,0,1),n=Ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=bh(o,r,e+1/3),this.g=bh(o,r,e),this.b=bh(o,r,e-1/3)}return It.colorSpaceToWorking(this,i),this}setStyle(e,t=pn){function n(r){r!==void 0&&parseFloat(r)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){let n=$p[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return It.workingToColorSpace(Qn.copy(this),e),Math.round(Ct(Qn.r*255,0,255))*65536+Math.round(Ct(Qn.g*255,0,255))*256+Math.round(Ct(Qn.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Qn.copy(this),t);let n=Qn.r,i=Qn.g,r=Qn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Qn.copy(this),t),e.r=Qn.r,e.g=Qn.g,e.b=Qn.b,e}getStyle(e=pn){It.workingToColorSpace(Qn.copy(this),e);let t=Qn.r,n=Qn.g,i=Qn.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Bs),this.setHSL(Bs.h+e,Bs.s+t,Bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Bs),e.getHSL(El);let n=Ko(Bs.h,El.h,t),i=Ko(Bs.s,El.s,t),r=Ko(Bs.l,El.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qn=new Oe;Oe.NAMES=$p;var bg=0,ei=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=Pi(),this.name="",this.type="Material",this.blending=lr,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yl,this.blendDst=Zl,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yl&&(n.blendSrc=this.blendSrc),this.blendDst!==Zl&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Lt=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Fn=new D,Sl=new ye,Eg=0,kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$l,this.updateRanges=[],this.gpuType=Ei,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Sl.fromBufferAttribute(this,t),Sl.applyMatrix3(e),this.setXY(t,Sl.x,Sl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix3(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyMatrix4(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.applyNormalMatrix(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Fn.fromBufferAttribute(this,t),Fn.transformDirection(e),this.setXYZ(t,Fn.x,Fn.y,Fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$l&&(e.usage=this.usage),e}};var Zi=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var sa=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var pt=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sg=0,Ai=new lt,Eh=new mn,Jr=new D,gi=new vi,ko=new vi,Xn=new D,Bt=class s extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?sa:Zi)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ai.makeRotationFromQuaternion(e),this.applyMatrix4(Ai),this}rotateX(e){return Ai.makeRotationX(e),this.applyMatrix4(Ai),this}rotateY(e){return Ai.makeRotationY(e),this.applyMatrix4(Ai),this}rotateZ(e){return Ai.makeRotationZ(e),this.applyMatrix4(Ai),this}translate(e,t,n){return Ai.makeTranslation(e,t,n),this.applyMatrix4(Ai),this}scale(e,t,n){return Ai.makeScale(e,t,n),this.applyMatrix4(Ai),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,r=e.length;i<r;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Xn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Xn),Xn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Xn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];ko.setFromBufferAttribute(a),this.morphTargetsRelative?(Xn.addVectors(gi.min,ko.min),gi.expandByPoint(Xn),Xn.addVectors(gi.max,ko.max),gi.expandByPoint(Xn)):(gi.expandByPoint(ko.min),gi.expandByPoint(ko.max))}gi.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)Xn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Xn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Xn.fromBufferAttribute(a,l),c&&(Jr.fromBufferAttribute(e,l),Xn.add(Jr)),i=Math.max(i,n.distanceToSquared(Xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let H=0;H<n.count;H++)a[H]=new D,c[H]=new D;let l=new D,u=new D,h=new D,d=new ye,f=new ye,m=new ye,x=new D,g=new D;function p(H,b,w){l.fromBufferAttribute(n,H),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,w),d.fromBufferAttribute(r,H),f.fromBufferAttribute(r,b),m.fromBufferAttribute(r,w),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let B=1/(f.x*m.y-m.x*f.y);isFinite(B)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(B),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(B),a[H].add(x),a[b].add(x),a[w].add(x),c[H].add(g),c[b].add(g),c[w].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let H=0,b=M.length;H<b;++H){let w=M[H],B=w.start,V=w.count;for(let Z=B,re=B+V;Z<re;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let _=new D,v=new D,C=new D,S=new D;function F(H){C.fromBufferAttribute(i,H),S.copy(C);let b=a[H];_.copy(b),_.sub(C.multiplyScalar(C.dot(b))).normalize(),v.crossVectors(S,b);let B=v.dot(c[H])<0?-1:1;o.setXYZW(H,_.x,_.y,_.z,B)}for(let H=0,b=M.length;H<b;++H){let w=M[H],B=w.start,V=w.count;for(let Z=B,re=B+V;Z<re;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new D,r=new D,o=new D,a=new D,c=new D,l=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,g),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,g),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Xn.fromBufferAttribute(e,t),Xn.normalize(),e.setXYZ(t,Xn.x,Xn.y,Xn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let x=0,g=c.length;x<g;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new kt(d,u,h)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kd=new lt,nr=new zs,Tl=new fi,Vd=new D,wl=new D,Al=new D,Rl=new D,Sh=new D,Cl=new D,Gd=new D,Pl=new D,Je=class extends mn{constructor(e=new Bt,t=new Lt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Cl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Sh.fromBufferAttribute(h,e),o?Cl.addScaledVector(Sh,u):Cl.addScaledVector(Sh.sub(t),u))}t.add(Cl)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tl.copy(n.boundingSphere),Tl.applyMatrix4(r),nr.copy(e.ray).recast(e.near),!(Tl.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Tl,Vd)===null||nr.origin.distanceToSquared(Vd)>(e.far-e.near)**2))&&(kd.copy(r).invert(),nr.copy(e.ray).applyMatrix4(kd),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,nr)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,C=_;v<C;v+=3){let S=a.getX(v),F=a.getX(v+1),H=a.getX(v+2);i=Il(this,p,e,n,l,u,h,S,F,H),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=a.getX(g),_=a.getX(g+1),v=a.getX(g+2);i=Il(this,o,e,n,l,u,h,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=o[g.materialIndex],M=Math.max(g.start,f.start),_=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=M,C=_;v<C;v+=3){let S=v,F=v+1,H=v+2;i=Il(this,p,e,n,l,u,h,S,F,H),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let m=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let M=g,_=g+1,v=g+2;i=Il(this,o,e,n,l,u,h,M,_,v),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function Tg(s,e,t,n,i,r,o,a){let c;if(e.side===qn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===zi,a),c===null)return null;Pl.copy(a),Pl.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Pl);return l<t.near||l>t.far?null:{distance:l,point:Pl.clone(),object:s}}function Il(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,wl),s.getVertexPosition(c,Al),s.getVertexPosition(l,Rl);let u=Tg(s,e,t,n,wl,Al,Rl,Gd);if(u){let h=new D;ys.getBarycoord(Gd,wl,Al,Rl,h),i&&(u.uv=ys.getInterpolatedAttribute(i,a,c,l,h,new ye)),r&&(u.uv1=ys.getInterpolatedAttribute(r,a,c,l,h,new ye)),o&&(u.normal=ys.getInterpolatedAttribute(o,a,c,l,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new D,materialIndex:0};ys.getNormal(wl,Al,Rl,d.normal),u.face=d,u.barycoord=h}return u}var Nt=class s extends Bt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new pt(l,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(h,2));function m(x,g,p,M,_,v,C,S,F,H,b){let w=v/F,B=C/H,V=v/2,Z=C/2,re=S/2,ae=F+1,N=H+1,G=0,oe=0,Te=new D;for(let xe=0;xe<N;xe++){let Ie=xe*B-Z;for(let R=0;R<ae;R++){let X=R*w-V;Te[x]=X*M,Te[g]=Ie*_,Te[p]=re,l.push(Te.x,Te.y,Te.z),Te[x]=0,Te[g]=0,Te[p]=S>0?1:-1,u.push(Te.x,Te.y,Te.z),h.push(R/F),h.push(1-xe/H),G+=1}}for(let xe=0;xe<H;xe++)for(let Ie=0;Ie<F;Ie++){let R=d+Ie+ae*xe,X=d+Ie+ae*(xe+1),j=d+(Ie+1)+ae*(xe+1),ne=d+(Ie+1)+ae*xe;c.push(R,X,ne),c.push(X,j,ne),oe+=6}a.addGroup(f,oe,b),f+=oe,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cr(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ii(s){let e={};for(let t=0;t<s.length;t++){let n=Cr(s[t]);for(let i in n)e[i]=n[i]}return e}function wg(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cf(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var Kn={clone:Cr,merge:ii},Ag=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yt=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ag,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=wg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ra=class extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Hs=new D,Wd=new ye,Xd=new ye,yn=class extends ra{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=fr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fr*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z),Hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hs.x,Hs.y).multiplyScalar(-e/Hs.z)}getViewSize(e,t){return this.getViewBounds(e,Wd,Xd),t.subVectors(Xd,Wd)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},jr=-90,Qr=1,Ql=class extends mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yn(jr,Qr,e,t);i.layers=this.layers,this.add(i);let r=new yn(jr,Qr,e,t);r.layers=this.layers,this.add(r);let o=new yn(jr,Qr,e,t);o.layers=this.layers,this.add(o);let a=new yn(jr,Qr,e,t);a.layers=this.layers,this.add(a);let c=new yn(jr,Qr,e,t);c.layers=this.layers,this.add(c);let l=new yn(jr,Qr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ta)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},oa=class extends Hn{constructor(e=[],t=qs,n,i,r,o,a,c,l,u){super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},aa=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new oa(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Nt(5,5,5),r=new yt({name:"CubemapFromEquirect",uniforms:Cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qn,blending:Dn});r.uniforms.tEquirect.value=t;let o=new Je(i,r),a=t.minFilter;return t.minFilter===bi&&(t.minFilter=In),new Ql(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},en=class extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},po=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new en,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new en,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new en,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(l,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new en;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},la=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var dr=class extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$l,this.updateRanges=[],this.version=0,this.uuid=Pi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ai=new D,ks=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyMatrix4(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.applyNormalMatrix(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ai.fromBufferAttribute(this,t),ai.transformDirection(e),this.setXYZ(t,ai.x,ai.y,ai.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=on(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=on(t,this.array),n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){na("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){na("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},mo=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},eo,Vo=new D,to=new D,no=new D,io=new ye,Go=new ye,Kp=new lt,Dl=new D,Wo=new D,Ll=new D,qd=new ye,Th=new ye,Yd=new ye,ca=class extends mn{constructor(e=new mo){if(super(),this.isSprite=!0,this.type="Sprite",eo===void 0){eo=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new pr(t,5);eo.setIndex([0,1,2,0,2,3]),eo.setAttribute("position",new ks(n,3,0,!1)),eo.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=eo,this.material=e,this.center=new ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),to.setFromMatrixScale(this.matrixWorld),Kp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),no.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&to.multiplyScalar(-no.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Nl(Dl.set(-.5,-.5,0),no,o,to,i,r),Nl(Wo.set(.5,-.5,0),no,o,to,i,r),Nl(Ll.set(.5,.5,0),no,o,to,i,r),qd.set(0,0),Th.set(1,0),Yd.set(1,1);let a=e.ray.intersectTriangle(Dl,Wo,Ll,!1,Vo);if(a===null&&(Nl(Wo.set(-.5,.5,0),no,o,to,i,r),Th.set(0,1),a=e.ray.intersectTriangle(Dl,Ll,Wo,!1,Vo),a===null))return;let c=e.ray.origin.distanceTo(Vo);c<e.near||c>e.far||t.push({distance:c,point:Vo.clone(),uv:ys.getInterpolation(Vo,Dl,Wo,Ll,qd,Th,Yd,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nl(s,e,t,n,i,r){io.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Go.x=r*io.x-i*io.y,Go.y=i*io.x+r*io.y):Go.copy(io),s.copy(e),s.x+=Go.x,s.y+=Go.y,s.applyMatrix4(Kp)}var Zd=new D,$d=new Kt,Kd=new Kt,Pg=new D,Jd=new lt,Ul=new D,wh=new fi,jd=new lt,Ah=new zs,Vs=class extends Je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uh,this.bindMatrix=new lt,this.bindMatrixInverse=new lt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ul),this.boundingBox.expandByPoint(Ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fi),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ul),this.boundingSphere.expandByPoint(Ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wh.copy(this.boundingSphere),wh.applyMatrix4(i),e.ray.intersectsSphere(wh)!==!1&&(jd.copy(i).invert(),Ah.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&Ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Kt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fp?this.bindMatrixInverse.copy(this.bindMatrix).invert():ht("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;$d.fromBufferAttribute(i.attributes.skinIndex,e),Kd.fromBufferAttribute(i.attributes.skinWeight,e),Zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Kd.getComponent(r);if(o!==0){let a=$d.getComponent(r);Jd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Pg.copy(Zd).applyMatrix4(Jd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},bs=class extends mn{constructor(){super(),this.isBone=!0,this.type="Bone"}},$i=class extends Hn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Mn,u=Mn,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qd=new lt,Ig=new lt,mr=class s{constructor(e=[],t=[]){this.uuid=Pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){ht("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new lt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new lt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:Ig;Qd.multiplyMatrices(a,t[r]),Qd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $i(t,e,e,li,Ei);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(ht("Skeleton: No bone found with UUID:",r),o=new bs),this.bones.push(o),this.boneInverses.push(new lt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},Ii=class extends kt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},so=new lt,ep=new lt,Fl=[],tp=new vi,Dg=new lt,Xo=new Je,qo=new fi,$n=class extends Je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ii(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Dg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),tp.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,so),qo.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,so),ep.multiplyMatrices(n,so),Xo.matrixWorld=ep,Xo.raycast(e,Fl);for(let o=0,a=Fl.length;o<a;o++){let c=Fl[o];c.instanceId=r,c.object=this,t.push(c)}Fl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ii(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $i(new Float32Array(i*this.count),i,this.count,Lc,Ei));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Rh=new D,Lg=new D,Ng=new Tt,Ri=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Rh.subVectors(n,t).cross(Lg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Rh),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ng.getNormalMatrix(e),i=this.coplanarPoint(Rh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ir=new fi,Ug=new ye(.5,.5),Ol=new D,go=class{constructor(e=new Ri,t=new Ri,n=new Ri,i=new Ri,r=new Ri,o=new Ri){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Hi,n=!1){let i=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],M=r[12],_=r[13],v=r[14],C=r[15];if(i[0].setComponents(l-o,f-u,p-m,C-M).normalize(),i[1].setComponents(l+o,f+u,p+m,C+M).normalize(),i[2].setComponents(l+a,f+h,p+x,C+_).normalize(),i[3].setComponents(l-a,f-h,p-x,C-_).normalize(),n)i[4].setComponents(c,d,g,v).normalize(),i[5].setComponents(l-c,f-d,p-g,C-v).normalize();else if(i[4].setComponents(l-c,f-d,p-g,C-v).normalize(),t===Hi)i[5].setComponents(l+c,f+d,p+g,C+v).normalize();else if(t===ta)i[5].setComponents(c,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(e){ir.center.set(0,0,0);let t=Ug.distanceTo(e.center);return ir.radius=.7071067811865476+t,ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ol.x=i.normal.x>0?e.max.x:e.min.x,Ol.y=i.normal.y>0?e.max.y:e.min.y,Ol.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ec=new D,tc=new D,np=new lt,Yo=new zs,Bl=new fi,Ch=new D,ip=new D,Es=class extends mn{constructor(e=new Bt,t=new Gs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ec.fromBufferAttribute(t,i-1),tc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ec.distanceTo(tc);e.setAttribute("lineDistance",new pt(n,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;np.copy(i).invert(),Yo.copy(e.ray).applyMatrix4(np);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=u.getX(x),M=u.getX(x+1),_=Hl(this,e,Yo,c,p,M,x);_&&t.push(_)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=Hl(this,e,Yo,c,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let x=f,g=m-1;x<g;x+=l){let p=Hl(this,e,Yo,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Hl(this,e,Yo,c,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hl(s,e,t,n,i,r,o){let a=s.geometry.attributes.position;if(ec.fromBufferAttribute(a,i),tc.fromBufferAttribute(a,r),t.distanceSqToSegment(ec,tc,Ch,ip)>n)return;Ch.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Ch);if(!(l<e.near||l>e.far))return{distance:l,point:ip.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var sp=new D,rp=new D,gr=class extends Es{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)sp.fromBufferAttribute(t,i),rp.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sp.distanceTo(rp);e.setAttribute("lineDistance",new pt(n,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ua=class extends Es{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xo=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},op=new lt,Oh=new zs,zl=new fi,kl=new D,Ws=class extends mn{constructor(e=new Bt,t=new xo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(i),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;op.copy(i).invert(),Oh.copy(e.ray).applyMatrix4(op);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let m=d,x=f;m<x;m++){let g=l.getX(m);kl.fromBufferAttribute(h,g),ap(kl,g,c,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=d,x=f;m<x;m++)kl.fromBufferAttribute(h,m),ap(kl,m,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ap(s,e,t,n,i,r,o){let a=Oh.distanceSqToPoint(s);if(a<t){let c=new D;Oh.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var yi=class extends Hn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Ki=class extends Hn{constructor(e,t,n=Vi,i,r,o,a=Mn,c=Mn,l,u=qi,h=1){if(u!==qi&&u!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ho(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nc=class extends Ki{constructor(e,t=Vi,n=qs,i,r,o=Mn,a=Mn,c,l=qi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,r,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ha=class extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xs=class s extends Bt{constructor(e=1,t=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=n*2+r,x=i+1,g=new D,p=new D;for(let M=0;M<=m;M++){let _=0,v=0,C=0,S=0;if(M<=n){let b=M/n,w=b*Math.PI/2;v=-u-e*Math.cos(w),C=e*Math.sin(w),S=-e*Math.cos(w),_=b*h}else if(M<=n+r){let b=(M-n)/r;v=-u+b*t,C=e,S=0,_=h+b*d}else{let b=(M-n-r)/n,w=b*Math.PI/2;v=u+e*Math.sin(w),C=e*Math.cos(w),S=e*Math.sin(w),_=h+d+b*h}let F=Math.max(0,Math.min(1,_/f)),H=0;M===0?H=.5/i:M===m&&(H=-.5/i);for(let b=0;b<=i;b++){let w=b/i,B=w*Math.PI*2,V=Math.sin(B),Z=Math.cos(B);p.x=-C*Z,p.y=v,p.z=C*V,a.push(p.x,p.y,p.z),g.set(-C*Z,S,C*V),g.normalize(),c.push(g.x,g.y,g.z),l.push(w+H,F)}if(M>0){let b=(M-1)*x;for(let w=0;w<i;w++){let B=b+w,V=b+w+1,Z=M*x+w,re=M*x+w+1;o.push(B,V,Z),o.push(V,re,Z)}}}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},fa=class s extends Bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new D,u=new ye;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*i;l.x=e*Math.cos(f),l.y=e*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ln=class s extends Bt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;M(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function M(){let v=new D,C=new D,S=0,F=(t-e)/n;for(let H=0;H<=r;H++){let b=[],w=H/r,B=w*(t-e)+e;for(let V=0;V<=i;V++){let Z=V/i,re=Z*c+a,ae=Math.sin(re),N=Math.cos(re);C.x=B*ae,C.y=-w*n+g,C.z=B*N,h.push(C.x,C.y,C.z),v.set(ae,F,N).normalize(),d.push(v.x,v.y,v.z),f.push(Z,1-w),b.push(m++)}x.push(b)}for(let H=0;H<i;H++)for(let b=0;b<r;b++){let w=x[b][H],B=x[b+1][H],V=x[b+1][H+1],Z=x[b][H+1];(e>0||b!==0)&&(u.push(w,B,Z),S+=3),(t>0||b!==r-1)&&(u.push(B,V,Z),S+=3)}l.addGroup(p,S,0),p+=S}function _(v){let C=m,S=new ye,F=new D,H=0,b=v===!0?e:t,w=v===!0?1:-1;for(let V=1;V<=i;V++)h.push(0,g*w,0),d.push(0,w,0),f.push(.5,.5),m++;let B=m;for(let V=0;V<=i;V++){let re=V/i*c+a,ae=Math.cos(re),N=Math.sin(re);F.x=b*N,F.y=g*w,F.z=b*ae,h.push(F.x,F.y,F.z),d.push(0,w,0),S.x=ae*.5+.5,S.y=N*.5*w+.5,f.push(S.x,S.y),m++}for(let V=0;V<i;V++){let Z=C+V,re=B+V;v===!0?u.push(re,re+1,Z):u.push(re+1,re,Z),H+=3}l.addGroup(p,H,v===!0?1:2),p+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ss=class s extends ln{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ic=class s extends Bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new pt(r,3)),this.setAttribute("normal",new pt(r.slice(),3)),this.setAttribute("uv",new pt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let _=new D,v=new D,C=new D;for(let S=0;S<t.length;S+=3)f(t[S+0],_),f(t[S+1],v),f(t[S+2],C),c(_,v,C,M)}function c(M,_,v,C){let S=C+1,F=[];for(let H=0;H<=S;H++){F[H]=[];let b=M.clone().lerp(v,H/S),w=_.clone().lerp(v,H/S),B=S-H;for(let V=0;V<=B;V++)V===0&&H===S?F[H][V]=b:F[H][V]=b.clone().lerp(w,V/B)}for(let H=0;H<S;H++)for(let b=0;b<2*(S-H)-1;b++){let w=Math.floor(b/2);b%2===0?(d(F[H][w+1]),d(F[H+1][w]),d(F[H][w])):(d(F[H][w+1]),d(F[H+1][w+1]),d(F[H+1][w]))}}function l(M){let _=new D;for(let v=0;v<r.length;v+=3)_.x=r[v+0],_.y=r[v+1],_.z=r[v+2],_.normalize().multiplyScalar(M),r[v+0]=_.x,r[v+1]=_.y,r[v+2]=_.z}function u(){let M=new D;for(let _=0;_<r.length;_+=3){M.x=r[_+0],M.y=r[_+1],M.z=r[_+2];let v=g(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(v,1-C)}m(),h()}function h(){for(let M=0;M<o.length;M+=6){let _=o[M+0],v=o[M+2],C=o[M+4],S=Math.max(_,v,C),F=Math.min(_,v,C);S>.9&&F<.1&&(_<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,_){let v=M*3;_.x=e[v+0],_.y=e[v+1],_.z=e[v+2]}function m(){let M=new D,_=new D,v=new D,C=new D,S=new ye,F=new ye,H=new ye;for(let b=0,w=0;b<r.length;b+=9,w+=6){M.set(r[b+0],r[b+1],r[b+2]),_.set(r[b+3],r[b+4],r[b+5]),v.set(r[b+6],r[b+7],r[b+8]),S.set(o[w+0],o[w+1]),F.set(o[w+2],o[w+3]),H.set(o[w+4],o[w+5]),C.copy(M).add(_).add(v).divideScalar(3);let B=g(C);x(S,w+0,M,B),x(F,w+2,_,B),x(H,w+4,v,B)}}function x(M,_,v,C){C<0&&M.x===1&&(o[_]=M.x-1),v.x===0&&v.z===0&&(o[_]=C/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Mi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],d=n[i+1]-u,f=(o-u)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new ye:new D);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,i=[],r=[],o=[],a=new D,c=new lt;for(let f=0;f<=e;f++){let m=f/e;i[f]=this.getTangentAt(m,new D)}r[0]=new D,o[0]=new D;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ct(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(Ct(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],r[m])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},vo=class extends Mi{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new ye){let n=t,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sc=class extends vo{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function uf(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let d=(o-r)/l-(a-r)/(l+u)+(a-o)/u,f=(a-o)/u-(c-o)/(u+h)+(c-a)/h;d*=u,f*=u,i(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Vl=new D,Ph=new uf,Ih=new uf,Dh=new uf,_o=class extends Mi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new D){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Vl.subVectors(i[0],i[1]).add(i[0]),l=Vl);let h=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Vl.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Vl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),Ph.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,x,g),Ih.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,x,g),Dh.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Ih.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Dh.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Ph.calc(c),Ih.calc(c),Dh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new D().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lp(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function Fg(s,e){let t=1-s;return t*t*e}function Og(s,e){return 2*(1-s)*s*e}function Bg(s,e){return s*s*e}function Jo(s,e,t,n){return Fg(s,e)+Og(s,t)+Bg(s,n)}function Hg(s,e){let t=1-s;return t*t*t*e}function zg(s,e){let t=1-s;return 3*t*t*s*e}function kg(s,e){return 3*(1-s)*s*s*e}function Vg(s,e){return s*s*s*e}function jo(s,e,t,n,i){return Hg(s,e)+zg(s,t)+kg(s,n)+Vg(s,i)}var da=class extends Mi{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jo(e,i.x,r.x,o.x,a.x),jo(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},rc=class extends Mi{constructor(e=new D,t=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(jo(e,i.x,r.x,o.x,a.x),jo(e,i.y,r.y,o.y,a.y),jo(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pa=class extends Mi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oc=class extends Mi{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ma=class extends Mi{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Jo(e,i.x,r.x,o.x),Jo(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ga=class extends Mi{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Jo(e,i.x,r.x,o.x),Jo(e,i.y,r.y,o.y),Jo(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xa=class extends Mi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(lp(a,c.x,l.x,u.x,h.x),lp(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ye().fromArray(i))}return this}},ac=Object.freeze({__proto__:null,ArcCurve:sc,CatmullRomCurve3:_o,CubicBezierCurve:da,CubicBezierCurve3:rc,EllipseCurve:vo,LineCurve:pa,LineCurve3:oc,QuadraticBezierCurve:ma,QuadraticBezierCurve3:ga,SplineCurve:xa}),lc=class extends Mi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ac[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new ac[i.type]().fromJSON(i))}return this}},va=class extends lc{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new pa(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new ma(this.currentPoint.clone(),new ye(e,t),new ye(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new da(this.currentPoint.clone(),new ye(e,t),new ye(n,i),new ye(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new vo(e,t,n,i,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ji=class extends va{constructor(e){super(e),this.uuid=Pi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new va().fromJSON(i))}return this}};function Gg(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=Jp(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=Zg(s,e,r,t)),s.length>80*t){a=s[0],c=s[1];let u=a,h=c;for(let d=t;d<i;d+=t){let f=s[d],m=s[d+1];f<a&&(a=f),m<c&&(c=m),f>u&&(u=f),m>h&&(h=m)}l=Math.max(u-a,h-c),l=l!==0?32767/l:0}return _a(r,o,t,a,c,l,0),o}function Jp(s,e,t,n,i){let r;if(i===rx(s,e,t,n)>0)for(let o=e;o<t;o+=n)r=cp(o/n|0,s[o],s[o+1],r);else for(let o=t-n;o>=e;o-=n)r=cp(o/n|0,s[o],s[o+1],r);return r&&yo(r,r.next)&&(Ma(r),r=r.next),r}function xr(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(yo(t,t.next)||Sn(t.prev,t,t.next)===0)){if(Ma(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function _a(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Qg(s,n,i,r);let a=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?Xg(s,n,i,r):Wg(s)){e.push(c.i,s.i,l.i),Ma(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=qg(xr(s),e),_a(s,e,t,n,i,r,2)):o===2&&Yg(s,e,t,n,i,r):_a(xr(s),e,t,n,i,r,1);break}}}function Wg(s){let e=s.prev,t=s,n=s.next;if(Sn(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=Math.min(i,r,o),h=Math.min(a,c,l),d=Math.max(i,r,o),f=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&Zo(i,a,r,c,o,l,m.x,m.y)&&Sn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xg(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Sn(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,d=o.y,f=Math.min(a,c,l),m=Math.min(u,h,d),x=Math.max(a,c,l),g=Math.max(u,h,d),p=Bh(f,m,e,t,n),M=Bh(x,g,e,t,n),_=s.prevZ,v=s.nextZ;for(;_&&_.z>=p&&v&&v.z<=M;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Zo(a,u,c,h,l,d,_.x,_.y)&&Sn(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Zo(a,u,c,h,l,d,v.x,v.y)&&Sn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==i&&_!==o&&Zo(a,u,c,h,l,d,_.x,_.y)&&Sn(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==i&&v!==o&&Zo(a,u,c,h,l,d,v.x,v.y)&&Sn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function qg(s,e){let t=s;do{let n=t.prev,i=t.next.next;!yo(n,i)&&Qp(n,t,t.next,i)&&ya(n,i)&&ya(i,n)&&(e.push(n.i,t.i,i.i),Ma(t),Ma(t.next),t=s=i),t=t.next}while(t!==s);return xr(t)}function Yg(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nx(o,a)){let c=em(o,a);o=xr(o,o.next),c=xr(c,c.next),_a(o,e,t,n,i,r,0),_a(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Zg(s,e,t,n){let i=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=Jp(s,a,c,n,!1);l===l.next&&(l.steiner=!0),i.push(tx(l))}i.sort($g);for(let r=0;r<i.length;r++)t=Kg(i[r],t);return t}function $g(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function Kg(s,e){let t=Jg(s,e);if(!t)return e;let n=em(t,s);return xr(n,n.next),xr(t,t.next)}function Jg(s,e){let t=e,n=s.x,i=s.y,r=-1/0,o;if(yo(s,t))return t;do{if(yo(s,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let h=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,o=t.x<t.next.x?t:t.next,h===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,u=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&jp(i<l?n:r,i,c,l,i<l?r:n,i,t.x,t.y)){let h=Math.abs(i-t.y)/(n-t.x);ya(t,s)&&(h<u||h===u&&(t.x>o.x||t.x===o.x&&jg(o,t)))&&(o=t,u=h)}t=t.next}while(t!==a);return o}function jg(s,e){return Sn(s.prev,s,e.prev)<0&&Sn(e.next,s,s.next)<0}function Qg(s,e,t,n){let i=s;do i.z===0&&(i.z=Bh(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,ex(i)}function ex(s){let e,t=1;do{let n=s,i;s=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,t*=2}while(e>1);return s}function Bh(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function tx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function jp(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Zo(s,e,t,n,i,r,o,a){return!(s===o&&e===a)&&jp(s,e,t,n,i,r,o,a)}function nx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!ix(s,e)&&(ya(s,e)&&ya(e,s)&&sx(s,e)&&(Sn(s.prev,s,e.prev)||Sn(s,e.prev,e))||yo(s,e)&&Sn(s.prev,s,s.next)>0&&Sn(e.prev,e,e.next)>0)}function Sn(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function yo(s,e){return s.x===e.x&&s.y===e.y}function Qp(s,e,t,n){let i=Wl(Sn(s,e,t)),r=Wl(Sn(s,e,n)),o=Wl(Sn(t,n,s)),a=Wl(Sn(t,n,e));return!!(i!==r&&o!==a||i===0&&Gl(s,t,e)||r===0&&Gl(s,n,e)||o===0&&Gl(t,s,n)||a===0&&Gl(t,e,n))}function Gl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wl(s){return s>0?1:s<0?-1:0}function ix(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Qp(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ya(s,e){return Sn(s.prev,s,s.next)<0?Sn(s,e,s.next)>=0&&Sn(s,s.prev,e)>=0:Sn(s,e,s.prev)<0||Sn(s,s.next,e)<0}function sx(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function em(s,e){let t=Hh(s.i,s.x,s.y),n=Hh(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cp(s,e,t,n){let i=Hh(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ma(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Hh(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function rx(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var zh=class{static triangulate(e,t,n=2){return Gg(e,t,n)}},ar=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];up(e),hp(n,e);let o=e.length;t.forEach(up);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,hp(n,t[c]);let a=zh.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function up(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function hp(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ts=class s extends Bt{constructor(e=new Ji([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new pt(i,3)),this.setAttribute("uv",new pt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:ox,_,v=!1,C,S,F,H;if(p){_=p.getSpacedPoints(u),v=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;C=p.computeFrenetFrames(u,te),S=new D,F=new D,H=new D}d||(g=0,f=0,m=0,x=0);let b=a.extractPoints(l),w=b.shape,B=b.holes;if(!ar.isClockWise(w)){w=w.reverse();for(let te=0,ve=B.length;te<ve;te++){let le=B[te];ar.isClockWise(le)&&(B[te]=le.reverse())}}function Z(te){let le=10000000000000001e-36,Re=te[0];for(let A=1;A<=te.length;A++){let de=A%te.length,_e=te[de],Ve=_e.x-Re.x,we=_e.y-Re.y,L=Ve*Ve+we*we,E=Math.max(Math.abs(_e.x),Math.abs(_e.y),Math.abs(Re.x),Math.abs(Re.y)),q=le*E*E;if(L<=q){te.splice(de,1),A--;continue}Re=_e}}Z(w),B.forEach(Z);let re=B.length,ae=w;for(let te=0;te<re;te++){let ve=B[te];w=w.concat(ve)}function N(te,ve,le){return ve||mt("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(ve,le)}let G=w.length;function oe(te,ve,le){let Re,A,de,_e=te.x-ve.x,Ve=te.y-ve.y,we=le.x-te.x,L=le.y-te.y,E=_e*_e+Ve*Ve,q=_e*L-Ve*we;if(Math.abs(q)>Number.EPSILON){let ue=Math.sqrt(E),Se=Math.sqrt(we*we+L*L),pe=ve.x-Ve/ue,Ge=ve.y+_e/ue,Pe=le.x-L/Se,ie=le.y+we/Se,Ae=((Pe-pe)*L-(ie-Ge)*we)/(_e*L-Ve*we);Re=pe+_e*Ae-te.x,A=Ge+Ve*Ae-te.y;let he=Re*Re+A*A;if(he<=2)return new ye(Re,A);de=Math.sqrt(he/2)}else{let ue=!1;_e>Number.EPSILON?we>Number.EPSILON&&(ue=!0):_e<-Number.EPSILON?we<-Number.EPSILON&&(ue=!0):Math.sign(Ve)===Math.sign(L)&&(ue=!0),ue?(Re=-Ve,A=_e,de=Math.sqrt(E)):(Re=_e,A=Ve,de=Math.sqrt(E/2))}return new ye(Re/de,A/de)}let Te=[];for(let te=0,ve=ae.length,le=ve-1,Re=te+1;te<ve;te++,le++,Re++)le===ve&&(le=0),Re===ve&&(Re=0),Te[te]=oe(ae[te],ae[le],ae[Re]);let xe=[],Ie,R=Te.concat();for(let te=0,ve=re;te<ve;te++){let le=B[te];Ie=[];for(let Re=0,A=le.length,de=A-1,_e=Re+1;Re<A;Re++,de++,_e++)de===A&&(de=0),_e===A&&(_e=0),Ie[Re]=oe(le[Re],le[de],le[_e]);xe.push(Ie),R=R.concat(Ie)}let X;if(g===0)X=ar.triangulateShape(ae,B);else{let te=[],ve=[];for(let le=0;le<g;le++){let Re=le/g,A=f*Math.cos(Re*Math.PI/2),de=m*Math.sin(Re*Math.PI/2)+x;for(let _e=0,Ve=ae.length;_e<Ve;_e++){let we=N(ae[_e],Te[_e],de);Y(we.x,we.y,-A),Re===0&&te.push(we)}for(let _e=0,Ve=re;_e<Ve;_e++){let we=B[_e];Ie=xe[_e];let L=[];for(let E=0,q=we.length;E<q;E++){let ue=N(we[E],Ie[E],de);Y(ue.x,ue.y,-A),Re===0&&L.push(ue)}Re===0&&ve.push(L)}}X=ar.triangulateShape(te,ve)}let j=X.length,ne=m+x;for(let te=0;te<G;te++){let ve=d?N(w[te],R[te],ne):w[te];v?(F.copy(C.normals[0]).multiplyScalar(ve.x),S.copy(C.binormals[0]).multiplyScalar(ve.y),H.copy(_[0]).add(F).add(S),Y(H.x,H.y,H.z)):Y(ve.x,ve.y,0)}for(let te=1;te<=u;te++)for(let ve=0;ve<G;ve++){let le=d?N(w[ve],R[ve],ne):w[ve];v?(F.copy(C.normals[te]).multiplyScalar(le.x),S.copy(C.binormals[te]).multiplyScalar(le.y),H.copy(_[te]).add(F).add(S),Y(H.x,H.y,H.z)):Y(le.x,le.y,h/u*te)}for(let te=g-1;te>=0;te--){let ve=te/g,le=f*Math.cos(ve*Math.PI/2),Re=m*Math.sin(ve*Math.PI/2)+x;for(let A=0,de=ae.length;A<de;A++){let _e=N(ae[A],Te[A],Re);Y(_e.x,_e.y,h+le)}for(let A=0,de=B.length;A<de;A++){let _e=B[A];Ie=xe[A];for(let Ve=0,we=_e.length;Ve<we;Ve++){let L=N(_e[Ve],Ie[Ve],Re);v?Y(L.x,L.y+_[u-1].y,_[u-1].x+le):Y(L.x,L.y,h+le)}}}T(),U();function T(){let te=i.length/3;if(d){let ve=0,le=G*ve;for(let Re=0;Re<j;Re++){let A=X[Re];Q(A[2]+le,A[1]+le,A[0]+le)}ve=u+g*2,le=G*ve;for(let Re=0;Re<j;Re++){let A=X[Re];Q(A[0]+le,A[1]+le,A[2]+le)}}else{for(let ve=0;ve<j;ve++){let le=X[ve];Q(le[2],le[1],le[0])}for(let ve=0;ve<j;ve++){let le=X[ve];Q(le[0]+G*u,le[1]+G*u,le[2]+G*u)}}n.addGroup(te,i.length/3-te,0)}function U(){let te=i.length/3,ve=0;O(ae,ve),ve+=ae.length;for(let le=0,Re=B.length;le<Re;le++){let A=B[le];O(A,ve),ve+=A.length}n.addGroup(te,i.length/3-te,1)}function O(te,ve){let le=te.length;for(;--le>=0;){let Re=le,A=le-1;A<0&&(A=te.length-1);for(let de=0,_e=u+g*2;de<_e;de++){let Ve=G*de,we=G*(de+1),L=ve+Re+Ve,E=ve+A+Ve,q=ve+A+we,ue=ve+Re+we;Ee(L,E,q,ue)}}}function Y(te,ve,le){c.push(te),c.push(ve),c.push(le)}function Q(te,ve,le){be(te),be(ve),be(le);let Re=i.length/3,A=M.generateTopUV(n,i,Re-3,Re-2,Re-1);me(A[0]),me(A[1]),me(A[2])}function Ee(te,ve,le,Re){be(te),be(ve),be(Re),be(ve),be(le),be(Re);let A=i.length/3,de=M.generateSideWallUV(n,i,A-6,A-3,A-2,A-1);me(de[0]),me(de[1]),me(de[3]),me(de[1]),me(de[2]),me(de[3])}function be(te){i.push(c[te*3+0]),i.push(c[te*3+1]),i.push(c[te*3+2])}function me(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return ax(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new ac[i.type]().fromJSON(i)),new s(n,e.options)}},ox={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new ye(r,o),new ye(a,c),new ye(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[i*3],f=e[i*3+1],m=e[i*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new ye(o,1-c),new ye(l,1-h),new ye(d,1-m),new ye(x,1-p)]:[new ye(a,1-c),new ye(u,1-h),new ye(f,1-m),new ye(g,1-p)]}};function ax(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ba=class s extends ic{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},Ea=class s extends Bt{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Ct(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new D,d=new ye,f=new D,m=new D,x=new D,g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(m)}for(let M=0;M<=t;M++){let _=n+M*u*i,v=Math.sin(_),C=Math.cos(_);for(let S=0;S<=e.length-1;S++){h.x=e[S].x*v,h.y=e[S].y,h.z=e[S].x*C,o.push(h.x,h.y,h.z),d.x=M/t,d.y=S/(e.length-1),a.push(d.x,d.y);let F=c[3*S+0]*v,H=c[3*S+1],b=c[3*S+0]*C;l.push(F,H,b)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let v=_+M*e.length,C=v,S=v+e.length,F=v+e.length+1,H=v+1;r.push(C,S,H),r.push(F,H,S)}this.setIndex(r),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var tn=class s extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let M=p*d-o;for(let _=0;_<l;_++){let v=_*h-r;m.push(v,-M,0),x.push(0,0,1),g.push(_/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let _=M+l*p,v=M+l*(p+1),C=M+1+l*(p+1),S=M+1+l*p;f.push(_,v,S),f.push(v,C,S)}this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Sa=class s extends Bt{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],u=[],h=e,d=(t-e)/i,f=new D,m=new ye;for(let x=0;x<=i;x++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<i;x++){let g=x*(n+1);for(let p=0;p<n;p++){let M=p+g,_=M,v=M+n+1,C=M+n+2,S=M+1;a.push(_,v,S),a.push(v,C,S)}}this.setIndex(a),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var zn=class s extends Bt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new D,d=new D,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let M=[],_=p/n,v=0;p===0&&o===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let C=0;C<=t;C++){let S=C/t;h.x=-e*Math.cos(i+S*r)*Math.sin(o+_*a),h.y=e*Math.cos(o+_*a),h.z=e*Math.sin(i+S*r)*Math.sin(o+_*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(S+v,1-_),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let _=u[p][M+1],v=u[p][M],C=u[p+1][M],S=u[p+1][M+1];(p!==0||o>0)&&f.push(_,v,S),(p!==n-1||c<Math.PI)&&f.push(v,C,S)}this.setIndex(f),this.setAttribute("position",new pt(m,3)),this.setAttribute("normal",new pt(x,3)),this.setAttribute("uv",new pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ji=class s extends Bt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let x=m/i*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),a.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let x=(i+1)*f+m-1,g=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,M=(i+1)*f+m;o.push(x,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(c,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ta=class s extends Bt{constructor(e=new ga(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new D,c=new D,l=new ye,u=new D,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new pt(h,3)),this.setAttribute("normal",new pt(d,3)),this.setAttribute("uv",new pt(f,2));function x(){for(let _=0;_<t;_++)g(_);g(r===!1?t:0),M(),p()}function g(_){u=e.getPointAt(_/t,u);let v=o.normals[_],C=o.binormals[_];for(let S=0;S<=i;S++){let F=S/i*Math.PI*2,H=Math.sin(F),b=-Math.cos(F);c.x=b*v.x+H*C.x,c.y=b*v.y+H*C.y,c.z=b*v.z+H*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=u.x+n*c.x,a.y=u.y+n*c.y,a.z=u.z+n*c.z,h.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=i;v++){let C=(i+1)*(_-1)+(v-1),S=(i+1)*_+(v-1),F=(i+1)*_+v,H=(i+1)*(_-1)+v;m.push(C,S,H),m.push(S,F,H)}}function M(){for(let _=0;_<=t;_++)for(let v=0;v<=i;v++)l.x=_/t,l.y=v/i,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new ac[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Mo=class extends yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ct=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jt=class extends ct{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var wa=class extends ei{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vu,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}};var cc=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},uc=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xl(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lx(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fp(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function tm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ws=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends ws{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rr,endingEnd:rr}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case or:r=e,a=2*t-n;break;case Qo:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case or:o=e,c=2*n-t;break;case Qo:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(i-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,M=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,_=(-1-f)*g+(1.5+f)*x+.5*m,v=f*g-f*x;for(let C=0;C!==a;++C)r[C]=p*o[u+C]+M*o[l+C]+_*o[c+C]+v*o[h+C];return r}},Aa=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}},fc=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},di=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xl(t,this.TimeBufferType),this.values=Xl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xl(e.times,Array),values:Xl(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case hr:t=this.InterpolantFactoryMethodLinear;break;case ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ht("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return hr;case this.InterpolantFactoryMethodSmooth:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){mt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){mt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&$0(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){mt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};di.prototype.ValueTypeName="";di.prototype.TimeBufferType=Float32Array;di.prototype.ValueBufferType=Float32Array;di.prototype.DefaultInterpolation=hr;var As=class extends di{constructor(e,t,n){super(e,t,n)}};As.prototype.ValueTypeName="bool";As.prototype.ValueBufferType=Array;As.prototype.DefaultInterpolation=ur;As.prototype.InterpolantFactoryMethodLinear=void 0;As.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends di{constructor(e,t,n,i){super(e,t,n,i)}};Ra.prototype.ValueTypeName="color";var Qi=class extends di{constructor(e,t,n,i){super(e,t,n,i)}};Qi.prototype.ValueTypeName="number";var dc=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)an.slerpFlat(r,0,o,l-a,o,l,c);return r}},es=class extends di{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new dc(this.times,this.values,this.getValueSize(),e)}};es.prototype.ValueTypeName="quaternion";es.prototype.InterpolantFactoryMethodSmooth=void 0;var Rs=class extends di{constructor(e,t,n){super(e,t,n)}};Rs.prototype.ValueTypeName="string";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ur;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends di{constructor(e,t,n,i){super(e,t,n,i)}};ts.prototype.ValueTypeName="vector";var vr=class{constructor(e="",t=-1,n=[],i=xu){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Pi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ux(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(di.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=lx(c);c=fp(c,1,u),l=fp(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new Qi(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=i[h];d||(i[h]=d=[]),d.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(ht("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return mt("AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,x){if(f.length!==0){let g=[],p=[];tm(f,g,p,m),g.length!==0&&x.push(new h(d,g,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){let _=d[m];g.push(_.time),p.push(_.morphTarget===x?1:0)}i.push(new Qi(".morphTargetInfluence["+x+"]",g,p))}c=f.length*o}else{let f=".bones["+t[h].name+"]";n(ts,f+".position",d,"pos",i),n(es,f+".quaternion",d,"rot",i),n(ts,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function cx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Qi;case"vector":case"vector2":case"vector3":case"vector4":return ts;case"color":return Ra;case"quaternion":return es;case"bool":case"boolean":return As;case"string":return Rs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ux(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=cx(s.type);if(s.times===void 0){let t=[],n=[];tm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Xi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},pc=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},nm=new pc,ns=class{constructor(e){this.manager=e!==void 0?e:nm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ns.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s={},kh=class extends Error{constructor(e,t){super(e),this.response=t}},bo=class extends ns{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Xi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(_s[e]!==void 0){_s[e].push({onLoad:t,onProgress:n,onError:i});return}_s[e]=[],_s[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=_s[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){M();function M(){h.read().then(({done:_,value:v})=>{if(_)p.close();else{x+=v.byteLength;let C=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let S=0,F=u.length;S<F;S++){let H=u[S];H.onProgress&&H.onProgress(C)}p.enqueue(v),M()}},_=>{p.error(_)})}}});return new Response(g)}else throw new kh(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Xi.add(`file:${e}`,l);let u=_s[e];delete _s[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=_s[e];if(u===void 0)throw this.manager.itemError(e),l;delete _s[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ro=new WeakMap,mc=class extends ns{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=ro.get(o);h===void 0&&(h=[],ro.set(o,h)),h.push({onLoad:t,onError:i})}return o}let a=lo("img");function c(){u(),t&&t(this);let h=ro.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}ro.delete(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),Xi.remove(`image:${e}`);let d=ro.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}ro.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Xi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}};var _r=class extends ns{constructor(e){super(e)}load(e,t,n,i){let r=new Hn,o=new mc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},yr=class extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ca=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lh=new lt,dp=new D,pp=new D,Pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(dp),pp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pp),t.updateMatrixWorld(),Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vh=class extends Pa{constructor(){super(new yn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=fr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},is=class extends yr{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Gh=class extends Pa{constructor(){super(new yn(90,1,.5,500)),this.isPointLightShadow=!0}},ti=class extends yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends ra{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Wh=class extends Pa{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new Wh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Cs=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Nh=new WeakMap,Ia=class extends ns{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&ht("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&ht("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Xi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{if(Nh.has(o)===!0)i&&i(Nh.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Xi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Nh.set(c,l),Xi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Xi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var gc=class extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},br=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var xc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){an.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;an.multiplyQuaternionsFlat(e,o,e,t,e,n),an.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},hf="\\[\\]\\.:\\/",hx=new RegExp("["+hf+"]","g"),ff="[^"+hf+"]",fx="[^"+hf.replace("\\.","")+"]",dx=/((?:WC+[\/:])*)/.source.replace("WC",ff),px=/(WCOD+)?/.source.replace("WCOD",fx),mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ff),gx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ff),xx=new RegExp("^"+dx+px+mx+gx+"$"),vx=["material","materials","bones","map"],Xh=class{constructor(e,t,n){let i=n||un.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},un=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hx,"")}static parseTrackName(e){let t=xx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);vx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};un.Composite=Xh;un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:rr,endingEnd:rr};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Bp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case xu:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Op;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===mu){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=or,i.endingEnd=or):(e?i.endingStart=this.zeroSlopeAtStart?or:rr:i.endingStart=Qo,t?i.endingEnd=this.zeroSlopeAtEnd?or:rr:i.endingEnd=Qo)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},_x=new Float32Array(1),Da=class extends Yi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let d=i[h],f=d.name,m=u[f];if(m!==void 0)++m.referenceCount,o[h]=m;else{if(m=o[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}let x=t&&t._propertyBindings[h].binding.parsedPath;m=new xc(un.create(n,f,x),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),o[h]=m}a[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Aa(new Float32Array(2),new Float32Array(2),1,_x),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?vr.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=xu),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new vc(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?vr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var mp=new lt,La=class{constructor(e,t,n=0,i=1/0){this.ray=new zs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):mt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mp),this}intersectObject(e,t=!0,n=[]){return qh(e,this,n,t),n.sort(gp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)qh(e[i],this,n,t);return n.sort(gp),n}};function gp(s,e){return s.distance-e.distance}function qh(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)qh(r[o],e,t,!0)}}function df(s,e,t,n){let i=yx(n);switch(t){case nf:return s*e;case Lc:return s*e/i.components*i.byteLength;case Nc:return s*e/i.components*i.byteLength;case Rr:return s*e*2/i.components*i.byteLength;case Uc:return s*e*2/i.components*i.byteLength;case sf:return s*e*3/i.components*i.byteLength;case li:return s*e*4/i.components*i.byteLength;case Fc:return s*e*4/i.components*i.byteLength;case Ga:case Wa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Xa:case qa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bc:case zc:return Math.max(s,16)*Math.max(e,8)/4;case Oc:case Hc:return Math.max(s,8)*Math.max(e,8)/2;case kc:case Vc:case Wc:case Xc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gc:case qc:case Yc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case jc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case lu:case cu:case uu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hu:case fu:return Math.ceil(s/4)*Math.ceil(e/4)*8;case du:case pu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function yx(s){switch(s){case ni:case jh:return{byteLength:1,components:1};case To:case Qh:case Nn:return{byteLength:2,components:1};case Ic:case Dc:return{byteLength:2,components:4};case Vi:case Pc:case Ei:return{byteLength:4,components:1};case ef:case tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Tm(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function bx(s){let e=new WeakMap;function t(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];s.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}var Ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sx=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ax=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
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
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ux=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zx=`vec3 transformedNormal = objectNormal;
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
#endif`,$x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ev=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tv=`#ifdef USE_ENVMAP
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
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
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
#endif`,sv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
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
#endif`,ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uv=`#ifdef USE_GRADIENTMAP
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
}`,hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pv=`uniform bool receiveShadow;
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
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yv=`PhysicalMaterial material;
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
#endif`,Mv=`uniform sampler2D dfgLUT;
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
}`,bv=`
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
#endif`,Ev=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dv=`#if defined( USE_POINTS_UV )
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
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`#ifdef USE_MORPHTARGETS
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
#endif`,Hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xv=`#ifdef USE_NORMALMAP
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
#endif`,qv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,e_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,n_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,i_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,a_=`float getShadowMask() {
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
}`,l_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,c_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,p_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,m_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,b_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E_=`uniform sampler2D t2D;
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,w_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,A_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R_=`#include <common>
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
}`,C_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,I_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,L_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`uniform float scale;
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
}`,U_=`uniform vec3 diffuse;
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
}`,F_=`#include <common>
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
}`,O_=`uniform vec3 diffuse;
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
}`,B_=`#define LAMBERT
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
}`,H_=`#define LAMBERT
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
}`,z_=`#define MATCAP
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
}`,k_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,G_=`#define NORMAL
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
}`,W_=`#define PHONG
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
}`,X_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define STANDARD
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
}`,Z_=`#define TOON
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
}`,$_=`#define TOON
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
}`,K_=`uniform float size;
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
}`,J_=`uniform vec3 diffuse;
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
}`,j_=`#include <common>
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
}`,Q_=`uniform vec3 color;
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
}`,ey=`uniform float rotation;
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
}`,ty=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Ex,alphahash_pars_fragment:Sx,alphamap_fragment:Tx,alphamap_pars_fragment:wx,alphatest_fragment:Ax,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Px,batching_pars_vertex:Ix,batching_vertex:Dx,begin_vertex:Lx,beginnormal_vertex:Nx,bsdfs:Ux,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Hx,clipping_planes_pars_vertex:zx,clipping_planes_vertex:kx,color_fragment:Vx,color_pars_fragment:Gx,color_pars_vertex:Wx,color_vertex:Xx,common:qx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:Zx,displacementmap_pars_vertex:$x,displacementmap_vertex:Kx,emissivemap_fragment:Jx,emissivemap_pars_fragment:jx,colorspace_fragment:Qx,colorspace_pars_fragment:ev,envmap_fragment:tv,envmap_common_pars_fragment:nv,envmap_pars_fragment:iv,envmap_pars_vertex:sv,envmap_physical_pars_fragment:mv,envmap_vertex:rv,fog_vertex:ov,fog_pars_vertex:av,fog_fragment:lv,fog_pars_fragment:cv,gradientmap_pars_fragment:uv,lightmap_pars_fragment:hv,lights_lambert_fragment:fv,lights_lambert_pars_fragment:dv,lights_pars_begin:pv,lights_toon_fragment:gv,lights_toon_pars_fragment:xv,lights_phong_fragment:vv,lights_phong_pars_fragment:_v,lights_physical_fragment:yv,lights_physical_pars_fragment:Mv,lights_fragment_begin:bv,lights_fragment_maps:Ev,lights_fragment_end:Sv,logdepthbuf_fragment:Tv,logdepthbuf_pars_fragment:wv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Pv,map_particle_fragment:Iv,map_particle_pars_fragment:Dv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Nv,morphinstance_vertex:Uv,morphcolor_vertex:Fv,morphnormal_vertex:Ov,morphtarget_pars_vertex:Bv,morphtarget_vertex:Hv,normal_fragment_begin:zv,normal_fragment_maps:kv,normal_pars_fragment:Vv,normal_pars_vertex:Gv,normal_vertex:Wv,normalmap_pars_fragment:Xv,clearcoat_normal_fragment_begin:qv,clearcoat_normal_fragment_maps:Yv,clearcoat_pars_fragment:Zv,iridescence_pars_fragment:$v,opaque_fragment:Kv,packing:Jv,premultiplied_alpha_fragment:jv,project_vertex:Qv,dithering_fragment:e_,dithering_pars_fragment:t_,roughnessmap_fragment:n_,roughnessmap_pars_fragment:i_,shadowmap_pars_fragment:s_,shadowmap_pars_vertex:r_,shadowmap_vertex:o_,shadowmask_pars_fragment:a_,skinbase_vertex:l_,skinning_pars_vertex:c_,skinning_vertex:u_,skinnormal_vertex:h_,specularmap_fragment:f_,specularmap_pars_fragment:d_,tonemapping_fragment:p_,tonemapping_pars_fragment:m_,transmission_fragment:g_,transmission_pars_fragment:x_,uv_pars_fragment:v_,uv_pars_vertex:__,uv_vertex:y_,worldpos_vertex:M_,background_vert:b_,background_frag:E_,backgroundCube_vert:S_,backgroundCube_frag:T_,cube_vert:w_,cube_frag:A_,depth_vert:R_,depth_frag:C_,distance_vert:P_,distance_frag:I_,equirect_vert:D_,equirect_frag:L_,linedashed_vert:N_,linedashed_frag:U_,meshbasic_vert:F_,meshbasic_frag:O_,meshlambert_vert:B_,meshlambert_frag:H_,meshmatcap_vert:z_,meshmatcap_frag:k_,meshnormal_vert:V_,meshnormal_frag:G_,meshphong_vert:W_,meshphong_frag:X_,meshphysical_vert:q_,meshphysical_frag:Y_,meshtoon_vert:Z_,meshtoon_frag:$_,points_vert:K_,points_frag:J_,shadow_vert:j_,shadow_frag:Q_,sprite_vert:ey,sprite_frag:ty},it={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},as={basic:{uniforms:ii([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:ii([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:ii([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:ii([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:ii([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:ii([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:ii([it.points,it.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:ii([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:ii([it.common,it.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:ii([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:ii([it.sprite,it.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distance:{uniforms:ii([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distance_vert,fragmentShader:Pt.distance_frag},shadow:{uniforms:ii([it.lights,it.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};as.physical={uniforms:ii([as.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};var bu={r:0,b:0,g:0},Pr=new _i,ny=new lt;function iy(s,e,t,n,i,r,o){let a=new Oe(0),c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(_){let v=_.isScene===!0?_.background:null;return v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v)),v}function x(_){let v=!1,C=m(_);C===null?p(a,c):C&&C.isColor&&(p(C,1),v=!0);let S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(_,v){let C=m(v);C&&(C.isCubeTexture||C.mapping===Va)?(u===void 0&&(u=new Je(new Nt(1,1,1),new yt({name:"BackgroundCubeMaterial",uniforms:Cr(as.backgroundCube.uniforms),vertexShader:as.backgroundCube.vertexShader,fragmentShader:as.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(S,F,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Pr.copy(v.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(Pr)),u.material.toneMapped=It.getTransfer(C.colorSpace)!==Yt,(h!==C||d!==C.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=s.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new Je(new tn(2,2),new yt({name:"BackgroundMaterial",uniforms:Cr(as.background.uniforms),vertexShader:as.background.vertexShader,fragmentShader:as.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=It.getTransfer(C.colorSpace)!==Yt,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,h=C,d=C.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,v){_.getRGB(bu,cf(s)),n.buffers.color.setClear(bu.r,bu.g,bu.b,v,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,v=1){a.set(_),c=v,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:x,addToRenderList:g,dispose:M}}function sy(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(w,B,V,Z,re){let ae=!1,N=h(Z,V,B);r!==N&&(r=N,l(r.object)),ae=f(w,Z,V,re),ae&&m(w,Z,V,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,v(w,B,V,Z),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function c(){return s.createVertexArray()}function l(w){return s.bindVertexArray(w)}function u(w){return s.deleteVertexArray(w)}function h(w,B,V){let Z=V.wireframe===!0,re=n[w.id];re===void 0&&(re={},n[w.id]=re);let ae=re[B.id];ae===void 0&&(ae={},re[B.id]=ae);let N=ae[Z];return N===void 0&&(N=d(c()),ae[Z]=N),N}function d(w){let B=[],V=[],Z=[];for(let re=0;re<t;re++)B[re]=0,V[re]=0,Z[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:Z,object:w,attributes:{},index:null}}function f(w,B,V,Z){let re=r.attributes,ae=B.attributes,N=0,G=V.getAttributes();for(let oe in G)if(G[oe].location>=0){let xe=re[oe],Ie=ae[oe];if(Ie===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(Ie=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(Ie=w.instanceColor)),xe===void 0||xe.attribute!==Ie||Ie&&xe.data!==Ie.data)return!0;N++}return r.attributesNum!==N||r.index!==Z}function m(w,B,V,Z){let re={},ae=B.attributes,N=0,G=V.getAttributes();for(let oe in G)if(G[oe].location>=0){let xe=ae[oe];xe===void 0&&(oe==="instanceMatrix"&&w.instanceMatrix&&(xe=w.instanceMatrix),oe==="instanceColor"&&w.instanceColor&&(xe=w.instanceColor));let Ie={};Ie.attribute=xe,xe&&xe.data&&(Ie.data=xe.data),re[oe]=Ie,N++}r.attributes=re,r.attributesNum=N,r.index=Z}function x(){let w=r.newAttributes;for(let B=0,V=w.length;B<V;B++)w[B]=0}function g(w){p(w,0)}function p(w,B){let V=r.newAttributes,Z=r.enabledAttributes,re=r.attributeDivisors;V[w]=1,Z[w]===0&&(s.enableVertexAttribArray(w),Z[w]=1),re[w]!==B&&(s.vertexAttribDivisor(w,B),re[w]=B)}function M(){let w=r.newAttributes,B=r.enabledAttributes;for(let V=0,Z=B.length;V<Z;V++)B[V]!==w[V]&&(s.disableVertexAttribArray(V),B[V]=0)}function _(w,B,V,Z,re,ae,N){N===!0?s.vertexAttribIPointer(w,B,V,re,ae):s.vertexAttribPointer(w,B,V,Z,re,ae)}function v(w,B,V,Z){x();let re=Z.attributes,ae=V.getAttributes(),N=B.defaultAttributeValues;for(let G in ae){let oe=ae[G];if(oe.location>=0){let Te=re[G];if(Te===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(Te=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(Te=w.instanceColor)),Te!==void 0){let xe=Te.normalized,Ie=Te.itemSize,R=e.get(Te);if(R===void 0)continue;let X=R.buffer,j=R.type,ne=R.bytesPerElement,T=j===s.INT||j===s.UNSIGNED_INT||Te.gpuType===Pc;if(Te.isInterleavedBufferAttribute){let U=Te.data,O=U.stride,Y=Te.offset;if(U.isInstancedInterleavedBuffer){for(let Q=0;Q<oe.locationSize;Q++)p(oe.location+Q,U.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let Q=0;Q<oe.locationSize;Q++)g(oe.location+Q);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Q=0;Q<oe.locationSize;Q++)_(oe.location+Q,Ie/oe.locationSize,j,xe,O*ne,(Y+Ie/oe.locationSize*Q)*ne,T)}else{if(Te.isInstancedBufferAttribute){for(let U=0;U<oe.locationSize;U++)p(oe.location+U,Te.meshPerAttribute);w.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let U=0;U<oe.locationSize;U++)g(oe.location+U);s.bindBuffer(s.ARRAY_BUFFER,X);for(let U=0;U<oe.locationSize;U++)_(oe.location+U,Ie/oe.locationSize,j,xe,Ie*ne,Ie/oe.locationSize*U*ne,T)}}else if(N!==void 0){let xe=N[G];if(xe!==void 0)switch(xe.length){case 2:s.vertexAttrib2fv(oe.location,xe);break;case 3:s.vertexAttrib3fv(oe.location,xe);break;case 4:s.vertexAttrib4fv(oe.location,xe);break;default:s.vertexAttrib1fv(oe.location,xe)}}}}M()}function C(){H();for(let w in n){let B=n[w];for(let V in B){let Z=B[V];for(let re in Z)u(Z[re].object),delete Z[re];delete B[V]}delete n[w]}}function S(w){if(n[w.id]===void 0)return;let B=n[w.id];for(let V in B){let Z=B[V];for(let re in Z)u(Z[re].object),delete Z[re];delete B[V]}delete n[w.id]}function F(w){for(let B in n){let V=n[B];if(V[w.id]===void 0)continue;let Z=V[w.id];for(let re in Z)u(Z[re].object),delete Z[re];delete V[w.id]}}function H(){b(),o=!0,r!==i&&(r=i,l(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:H,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:F,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function ry(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function oy(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let F=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(F){return!(F!==li&&n.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(F){let H=F===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ni&&n.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ei&&!H)}function c(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(ht("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,maxSamples:C,samples:S}}function ay(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Ri,a=new Tt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=s.get(h);if(!i||m===null||m.length===0||r&&!g)r?u(null):l();else{let M=r?0:n,_=M*4,v=p.clippingState||null;c.value=v,v=u(m,d,_,f);for(let C=0;C!==_;++C)v[C]=t[C];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=c.value,m!==!0||g===null){let p=f+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,v=f;_!==x;++_,v+=4)o.copy(h[_]).applyMatrix4(M,a),o.normal.toArray(g,v),g[v+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function ly(s){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=qs:a===Rc&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ac||a===Rc)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new aa(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Zs=4,im=[.125,.215,.35,.446,.526,.582],Dr=20,cy=256,Za=new ss,sm=new Oe,pf=null,mf=0,gf=0,xf=!1,uy=new D,Co=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,r={}){let{size:o=256,position:a=uy}=r;pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(pf,mf,gf),this._renderer.xr.enabled=xf,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),pf=this._renderer.getRenderTarget(),mf=this._renderer.getActiveCubeFace(),gf=this._renderer.getActiveMipmapLevel(),xf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Nn,format:li,colorSpace:Zn,depthBuffer:!1},i=rm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=hy(r)),this._blurMaterial=dy(r,e,t),this._ggxMaterial=fy(r,e,t)}return i}_compileMaterial(e){let t=new Je(new Bt,e);this._renderer.compile(t,Za)}_sceneToCubeUV(e,t,n,i,r){let c=new yn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(sm),h.toneMapping=ki,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Je(new Nt,new Lt({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,p=!1,M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(sm),p=!0);for(let _=0;_<6;_++){let v=_%3;v===0?(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[_],r.y,r.z)):v===1?(c.up.set(0,0,l[_]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[_],r.z)):(c.up.set(0,l[_],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[_]));let C=this._cubeSize;Ao(i,v*C,_>2?C:0,C,C),h.setRenderTarget(i),p&&h.render(x,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===qs||e.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=om());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Ao(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Za)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,f=h*d,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-Zs?n-m+Zs:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,Ao(r,g,p,3*x,2*x),i.setRenderTarget(r),i.render(a,Za),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Ao(e,g,p,3*x,2*x),i.setRenderTarget(e),i.render(a,Za)}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[i];h.material=l;let d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Dr-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):Dr;g>Dr&&ht(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Dr}`);let p=[],M=0;for(let F=0;F<Dr;++F){let H=F/x,b=Math.exp(-H*H/2);p.push(b),F===0?M+=b:F<g&&(M+=2*b)}for(let F=0;F<p.length;F++)p[F]=p[F]/M;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let v=this._sizeLods[i],C=3*v*(i>_-Zs?i-_+Zs:0),S=4*(this._cubeSize-v);Ao(t,C,S,3*v,2*v),c.setRenderTarget(t),c.render(h,Za)}};function hy(s){let e=[],t=[],n=[],i=s,r=s-Zs+1+im.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Zs?c=im[o-s+Zs-1]:o===0&&(c=0),t.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*f),_=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let S=0;S<f;S++){let F=S%3*2/3-1,H=S>2?0:-1,b=[F,H,0,F+2/3,H,0,F+2/3,H+1,0,F,H,0,F+2/3,H+1,0,F,H+1,0];M.set(b,x*m*S),_.set(d,g*m*S);let w=[S,S,S,S,S,S];v.set(w,p*m*S)}let C=new Bt;C.setAttribute("position",new kt(M,x)),C.setAttribute("uv",new kt(_,g)),C.setAttribute("faceIndex",new kt(v,p)),n.push(new Je(C,null)),i>Zs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function rm(s,e,t){let n=new bn(s,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ao(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function fy(s,e,t){return new yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function dy(s,e,t){let n=new Float32Array(Dr),i=new D(0,1,0);return new yt({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function om(){return new yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tu(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function am(){return new yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Tu(){return`

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
	`}function py(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ac||c===Rc,u=c===qs||c===wr;if(l||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Co(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let f=a.image;return l&&f&&f.height>0||u&&f&&i(f)?(t===null&&(t=new Co(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function my(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=s.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&uo("WebGLRenderer: "+n+" extension not supported."),i}}}function gy(s,e,t,n){let i={},r=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(f!==null){let M=f.array;x=f.version;for(let _=0,v=M.length;_<v;_+=3){let C=M[_+0],S=M[_+1],F=M[_+2];d.push(C,S,S,F,F,C)}}else if(m!==void 0){let M=m.array;x=m.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let C=_+0,S=_+1,F=_+2;d.push(C,S,S,F,F,C)}}else return;let g=new(af(d)?sa:Zi)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function xy(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function l(d,f,m){m!==0&&(s.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*x[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vy(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function _y(s,e,t){let n=new WeakMap,i=new Kt;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let b=function(){F.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;f===!0&&(_=1),m===!0&&(_=2),x===!0&&(_=3);let v=a.attributes.position.count*_,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*C*4*h),F=new ia(S,v,C,h);F.type=Ei,F.needsUpdate=!0;let H=_*4;for(let w=0;w<h;w++){let B=g[w],V=p[w],Z=M[w],re=v*C*4*w;for(let ae=0;ae<B.count;ae++){let N=ae*H;f===!0&&(i.fromBufferAttribute(B,ae),S[re+N+0]=i.x,S[re+N+1]=i.y,S[re+N+2]=i.z,S[re+N+3]=0),m===!0&&(i.fromBufferAttribute(V,ae),S[re+N+4]=i.x,S[re+N+5]=i.y,S[re+N+6]=i.z,S[re+N+7]=0),x===!0&&(i.fromBufferAttribute(Z,ae),S[re+N+8]=i.x,S[re+N+9]=i.y,S[re+N+10]=i.z,S[re+N+11]=Z.itemSize===4?i.w:1)}}d={count:h,texture:F,size:new ye(v,C)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let m=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function yy(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var My={[Fa]:"LINEAR_TONE_MAPPING",[Oa]:"REINHARD_TONE_MAPPING",[Ba]:"CINEON_TONE_MAPPING",[Tr]:"ACES_FILMIC_TONE_MAPPING",[za]:"AGX_TONE_MAPPING",[ka]:"NEUTRAL_TONE_MAPPING",[Ha]:"CUSTOM_TONE_MAPPING"};function by(s,e,t,n,i){let r=new bn(e,t,{type:s,depthBuffer:n,stencilBuffer:i}),o=new bn(e,t,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),a=new Bt;a.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new pt([0,2,0,0,2,0],2));let c=new Mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),l=new Je(a,c),u=new ss(-1,1,1,-1,0,1),h=null,d=null,f=!1,m,x=null,g=[],p=!1;this.setSize=function(M,_){r.setSize(M,_),o.setSize(M,_);for(let v=0;v<g.length;v++){let C=g[v];C.setSize&&C.setSize(M,_)}},this.setEffects=function(M){g=M,p=g.length>0&&g[0].isRenderPass===!0;let _=r.width,v=r.height;for(let C=0;C<g.length;C++){let S=g[C];S.setSize&&S.setSize(_,v)}},this.begin=function(M,_){if(f||M.toneMapping===ki&&g.length===0)return!1;if(x=_,_!==null){let v=_.width,C=_.height;(r.width!==v||r.height!==C)&&this.setSize(v,C)}return p===!1&&M.setRenderTarget(r),m=M.toneMapping,M.toneMapping=ki,!0},this.hasRenderPass=function(){return p},this.end=function(M,_){M.toneMapping=m,f=!0;let v=r,C=o;for(let S=0;S<g.length;S++){let F=g[S];if(F.enabled!==!1&&(F.render(M,C,v,_),F.needsSwap!==!1)){let H=v;v=C,C=H}}if(h!==M.outputColorSpace||d!==M.toneMapping){h=M.outputColorSpace,d=M.toneMapping,c.defines={},It.getTransfer(h)===Yt&&(c.defines.SRGB_TRANSFER="");let S=My[d];S&&(c.defines[S]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=v.texture,M.setRenderTarget(x),M.render(l,u),x=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),c.dispose()}}var wm=new Hn,yf=new Ki(1,1),Am=new ia,Rm=new jl,Cm=new oa,lm=[],cm=[],um=new Float32Array(16),hm=new Float32Array(9),fm=new Float32Array(4);function Po(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=lm[i];if(r===void 0&&(r=new Float32Array(i),lm[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function kn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Vn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function wu(s,e){let t=cm[e];t===void 0&&(t=new Int32Array(e),cm[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Ey(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Sy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2fv(this.addr,e),Vn(t,e)}}function Ty(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;s.uniform3fv(this.addr,e),Vn(t,e)}}function wy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4fv(this.addr,e),Vn(t,e)}}function Ay(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;fm.set(n),s.uniformMatrix2fv(this.addr,!1,fm),Vn(t,n)}}function Ry(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;hm.set(n),s.uniformMatrix3fv(this.addr,!1,hm),Vn(t,n)}}function Cy(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Vn(t,e)}else{if(kn(t,n))return;um.set(n),s.uniformMatrix4fv(this.addr,!1,um),Vn(t,n)}}function Py(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Iy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2iv(this.addr,e),Vn(t,e)}}function Dy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3iv(this.addr,e),Vn(t,e)}}function Ly(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4iv(this.addr,e),Vn(t,e)}}function Ny(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Uy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;s.uniform2uiv(this.addr,e),Vn(t,e)}}function Fy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;s.uniform3uiv(this.addr,e),Vn(t,e)}}function Oy(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;s.uniform4uiv(this.addr,e),Vn(t,e)}}function By(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(yf.compareFunction=t.isReversedDepthBuffer()?yu:_u,r=yf):r=wm,t.setTexture2D(e||r,i)}function Hy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Rm,i)}function zy(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cm,i)}function ky(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Am,i)}function Vy(s){switch(s){case 5126:return Ey;case 35664:return Sy;case 35665:return Ty;case 35666:return wy;case 35674:return Ay;case 35675:return Ry;case 35676:return Cy;case 5124:case 35670:return Py;case 35667:case 35671:return Iy;case 35668:case 35672:return Dy;case 35669:case 35673:return Ly;case 5125:return Ny;case 36294:return Uy;case 36295:return Fy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return ky}}function Gy(s,e){s.uniform1fv(this.addr,e)}function Wy(s,e){let t=Po(e,this.size,2);s.uniform2fv(this.addr,t)}function Xy(s,e){let t=Po(e,this.size,3);s.uniform3fv(this.addr,t)}function qy(s,e){let t=Po(e,this.size,4);s.uniform4fv(this.addr,t)}function Yy(s,e){let t=Po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Zy(s,e){let t=Po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function $y(s,e){let t=Po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ky(s,e){s.uniform1iv(this.addr,e)}function Jy(s,e){s.uniform2iv(this.addr,e)}function jy(s,e){s.uniform3iv(this.addr,e)}function Qy(s,e){s.uniform4iv(this.addr,e)}function eM(s,e){s.uniform1uiv(this.addr,e)}function tM(s,e){s.uniform2uiv(this.addr,e)}function nM(s,e){s.uniform3uiv(this.addr,e)}function iM(s,e){s.uniform4uiv(this.addr,e)}function sM(s,e,t){let n=this.cache,i=e.length,r=wu(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=yf:o=wm;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,r[a])}function rM(s,e,t){let n=this.cache,i=e.length,r=wu(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Rm,r[o])}function oM(s,e,t){let n=this.cache,i=e.length,r=wu(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Cm,r[o])}function aM(s,e,t){let n=this.cache,i=e.length,r=wu(t,i);kn(n,r)||(s.uniform1iv(this.addr,r),Vn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Am,r[o])}function lM(s){switch(s){case 5126:return Gy;case 35664:return Wy;case 35665:return Xy;case 35666:return qy;case 35674:return Yy;case 35675:return Zy;case 35676:return $y;case 5124:case 35670:return Ky;case 35667:case 35671:return Jy;case 35668:case 35672:return jy;case 35669:case 35673:return Qy;case 5125:return eM;case 36294:return tM;case 36295:return nM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return sM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return oM;case 36289:case 36303:case 36311:case 36292:return aM}}var Mf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Vy(t.type)}},bf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lM(t.type)}},Ef=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},vf=/(\w+)(\])?(\[|\.)?/g;function dm(s,e){s.seq.push(e),s.map[e.id]=e}function cM(s,e,t){let n=s.name,i=n.length;for(vf.lastIndex=0;;){let r=vf.exec(n),o=vf.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){dm(t,l===void 0?new Mf(a,s,e):new bf(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new Ef(a),dm(t,h)),t=h}}}var Ro=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);cM(a,c,this)}let i=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function pm(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var uM=37297,hM=0;function fM(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var mm=new Tt;function dM(s){It._getMatrix(mm,It.workingColorSpace,s);let e=`mat3( ${mm.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case ea:return[e,"LinearTransferOETF"];case Yt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function gm(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+fM(s.getShaderSource(e),a)}else return r}function pM(s,e){let t=dM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var mM={[Fa]:"Linear",[Oa]:"Reinhard",[Ba]:"Cineon",[Tr]:"ACESFilmic",[za]:"AgX",[ka]:"Neutral",[Ha]:"Custom"};function gM(s,e){let t=mM[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eu=new D;function xM(){It.getLuminanceCoefficients(Eu);let s=Eu.x.toFixed(4),e=Eu.y.toFixed(4),t=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function _M(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function yM(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Ka(s){return s!==""}function xm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var MM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(s){return s.replace(MM,EM)}var bM=new Map;function EM(s,e){let t=Pt[e];if(t===void 0){let n=bM.get(e);if(n!==void 0)t=Pt[n],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Sf(t)}var SM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(s){return s.replace(SM,TM)}function TM(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function ym(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}var wM={[Er]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function AM(s){return wM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var RM={[qs]:"ENVMAP_TYPE_CUBE",[wr]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function CM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":RM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var PM={[wr]:"ENVMAP_MODE_REFRACTION"};function IM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":PM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var DM={[Kh]:"ENVMAP_BLENDING_MULTIPLY",[Np]:"ENVMAP_BLENDING_MIX",[Up]:"ENVMAP_BLENDING_ADD"};function LM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":DM[s.combine]||"ENVMAP_BLENDING_NONE"}function NM(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function UM(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=AM(t),l=CM(t),u=IM(t),h=LM(t),d=NM(t),f=vM(t),m=_M(r),x=i.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ka).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ka).join(`
`),p.length>0&&(p+=`
`)):(g=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),p=[ym(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ki?"#define TONE_MAPPING":"",t.toneMapping!==ki?Pt.tonemapping_pars_fragment:"",t.toneMapping!==ki?gM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,pM("linearToOutputTexel",t.outputColorSpace),xM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ka).join(`
`)),o=Sf(o),o=xm(o,t),o=vm(o,t),a=Sf(a),a=xm(a,t),a=vm(a,t),o=_m(o),a=_m(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+g+o,v=M+p+a,C=pm(i,i.VERTEX_SHADER,_),S=pm(i,i.FRAGMENT_SHADER,v);i.attachShader(x,C),i.attachShader(x,S),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function F(B){if(s.debug.checkShaderErrors){let V=i.getProgramInfoLog(x)||"",Z=i.getShaderInfoLog(C)||"",re=i.getShaderInfoLog(S)||"",ae=V.trim(),N=Z.trim(),G=re.trim(),oe=!0,Te=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,C,S);else{let xe=gm(i,C,"vertex"),Ie=gm(i,S,"fragment");mt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ae+`
`+xe+`
`+Ie)}else ae!==""?ht("WebGLProgram: Program Info Log:",ae):(N===""||G==="")&&(Te=!1);Te&&(B.diagnostics={runnable:oe,programLog:ae,vertexShader:{log:N,prefix:g},fragmentShader:{log:G,prefix:p}})}i.deleteShader(C),i.deleteShader(S),H=new Ro(i,x),b=yM(i,x)}let H;this.getUniforms=function(){return H===void 0&&F(this),H};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(x,uM)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=S,this}var FM=0,Tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wf(e),t.set(e,n)),n}},wf=class{constructor(e){this.id=FM++,this.code=e,this.usedTimes=0}};function OM(s,e,t,n,i,r,o){let a=new fo,c=new Tf,l=new Set,u=[],h=new Map,d=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function g(b,w,B,V,Z){let re=V.fog,ae=Z.geometry,N=b.isMeshStandardMaterial?V.environment:null,G=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),oe=G&&G.mapping===Va?G.image.height:null,Te=m[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&ht("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let xe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ie=xe!==void 0?xe.length:0,R=0;ae.morphAttributes.position!==void 0&&(R=1),ae.morphAttributes.normal!==void 0&&(R=2),ae.morphAttributes.color!==void 0&&(R=3);let X,j,ne,T;if(Te){let xt=as[Te];X=xt.vertexShader,j=xt.fragmentShader}else X=b.vertexShader,j=b.fragmentShader,c.update(b),ne=c.getVertexShaderID(b),T=c.getFragmentShaderID(b);let U=s.getRenderTarget(),O=s.state.buffers.depth.getReversed(),Y=Z.isInstancedMesh===!0,Q=Z.isBatchedMesh===!0,Ee=!!b.map,be=!!b.matcap,me=!!G,te=!!b.aoMap,ve=!!b.lightMap,le=!!b.bumpMap,Re=!!b.normalMap,A=!!b.displacementMap,de=!!b.emissiveMap,_e=!!b.metalnessMap,Ve=!!b.roughnessMap,we=b.anisotropy>0,L=b.clearcoat>0,E=b.dispersion>0,q=b.iridescence>0,ue=b.sheen>0,Se=b.transmission>0,pe=we&&!!b.anisotropyMap,Ge=L&&!!b.clearcoatMap,Pe=L&&!!b.clearcoatNormalMap,ie=L&&!!b.clearcoatRoughnessMap,Ae=q&&!!b.iridescenceMap,he=q&&!!b.iridescenceThicknessMap,Fe=ue&&!!b.sheenColorMap,Be=ue&&!!b.sheenRoughnessMap,qe=!!b.specularMap,Ue=!!b.specularColorMap,ut=!!b.specularIntensityMap,W=Se&&!!b.transmissionMap,He=Se&&!!b.thicknessMap,Ne=!!b.gradientMap,Ke=!!b.alphaMap,Le=b.alphaTest>0,Ce=!!b.alphaHash,Xe=!!b.extensions,dt=ki;b.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(dt=s.toneMapping);let Gt={shaderID:Te,shaderType:b.type,shaderName:b.name,vertexShader:X,fragmentShader:j,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:T,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Q,batchingColor:Q&&Z._colorsTexture!==null,instancing:Y,instancingColor:Y&&Z.instanceColor!==null,instancingMorph:Y&&Z.morphTexture!==null,outputColorSpace:U===null?s.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Zn,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:be,envMap:me,envMapMode:me&&G.mapping,envMapCubeUVHeight:oe,aoMap:te,lightMap:ve,bumpMap:le,normalMap:Re,displacementMap:A,emissiveMap:de,normalMapObjectSpace:Re&&b.normalMapType===zp,normalMapTangentSpace:Re&&b.normalMapType===vu,metalnessMap:_e,roughnessMap:Ve,anisotropy:we,anisotropyMap:pe,clearcoat:L,clearcoatMap:Ge,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ie,dispersion:E,iridescence:q,iridescenceMap:Ae,iridescenceThicknessMap:he,sheen:ue,sheenColorMap:Fe,sheenRoughnessMap:Be,specularMap:qe,specularColorMap:Ue,specularIntensityMap:ut,transmission:Se,transmissionMap:W,thicknessMap:He,gradientMap:Ne,opaque:b.transparent===!1&&b.blending===lr&&b.alphaToCoverage===!1,alphaMap:Ke,alphaTest:Le,alphaHash:Ce,combine:b.combine,mapUv:Ee&&x(b.map.channel),aoMapUv:te&&x(b.aoMap.channel),lightMapUv:ve&&x(b.lightMap.channel),bumpMapUv:le&&x(b.bumpMap.channel),normalMapUv:Re&&x(b.normalMap.channel),displacementMapUv:A&&x(b.displacementMap.channel),emissiveMapUv:de&&x(b.emissiveMap.channel),metalnessMapUv:_e&&x(b.metalnessMap.channel),roughnessMapUv:Ve&&x(b.roughnessMap.channel),anisotropyMapUv:pe&&x(b.anisotropyMap.channel),clearcoatMapUv:Ge&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Be&&x(b.sheenRoughnessMap.channel),specularMapUv:qe&&x(b.specularMap.channel),specularColorMapUv:Ue&&x(b.specularColorMap.channel),specularIntensityMapUv:ut&&x(b.specularIntensityMap.channel),transmissionMapUv:W&&x(b.transmissionMap.channel),thicknessMapUv:He&&x(b.thicknessMap.channel),alphaMapUv:Ke&&x(b.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Re||we),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!ae.attributes.uv&&(Ee||Ke),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:O,skinning:Z.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:R,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&It.getTransfer(b.map.colorSpace)===Yt,decodeVideoTextureEmissive:de&&b.emissiveMap.isVideoTexture===!0&&It.getTransfer(b.emissiveMap.colorSpace)===Yt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wn,flipSided:b.side===qn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Xe&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&b.extensions.multiDraw===!0||Q)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function p(b){let w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(let B in b.defines)w.push(B),w.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(M(w,b),_(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function M(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let w=m[b.type],B;if(w){let V=as[w];B=Kn.clone(V.uniforms)}else B=b.uniforms;return B}function C(b,w){let B=h.get(w);return B!==void 0?++B.usedTimes:(B=new UM(s,w,b,r),u.push(B),h.set(w,B)),B}function S(b){if(--b.usedTimes===0){let w=u.indexOf(b);u[w]=u[u.length-1],u.pop(),h.delete(b.cacheKey),b.destroy()}}function F(b){c.remove(b)}function H(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:C,releaseProgram:S,releaseShaderCache:F,programs:u,dispose:H}}function BM(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function HM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Mm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function bm(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,f,m,x,g){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},s[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function a(h,d,f,m,x,g){let p=o(h,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function c(h,d,f,m,x,g){let p=o(h,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||HM),n.length>1&&n.sort(d||Mm),i.length>1&&i.sort(d||Mm)}function u(){for(let h=e,d=s.length;h<d;h++){let f=s[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function zM(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new bm,s.set(n,[o])):i>=r.length?(o=new bm,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function kM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function VM(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var GM=0;function WM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function XM(s){let e=new kM,t=VM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let i=new D,r=new lt,o=new lt;function a(l){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,M=0,_=0,v=0,C=0,S=0,F=0;l.sort(WM);for(let b=0,w=l.length;b<w;b++){let B=l[b],V=B.color,Z=B.intensity,re=B.distance,ae=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Rr?ae=B.shadow.map.texture:ae=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)u+=V.r*Z,h+=V.g*Z,d+=V.b*Z;else if(B.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(B.sh.coefficients[N],Z);F++}else if(B.isDirectionalLight){let N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let G=B.shadow,oe=t.get(B);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,n.directionalShadow[f]=oe,n.directionalShadowMap[f]=ae,n.directionalShadowMatrix[f]=B.shadow.matrix,M++}n.directional[f]=N,f++}else if(B.isSpotLight){let N=e.get(B);N.position.setFromMatrixPosition(B.matrixWorld),N.color.copy(V).multiplyScalar(Z),N.distance=re,N.coneCos=Math.cos(B.angle),N.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),N.decay=B.decay,n.spot[x]=N;let G=B.shadow;if(B.map&&(n.spotLightMap[C]=B.map,C++,G.updateMatrices(B),B.castShadow&&S++),n.spotLightMatrix[x]=G.matrix,B.castShadow){let oe=t.get(B);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,n.spotShadow[x]=oe,n.spotShadowMap[x]=ae,v++}x++}else if(B.isRectAreaLight){let N=e.get(B);N.color.copy(V).multiplyScalar(Z),N.halfWidth.set(B.width*.5,0,0),N.halfHeight.set(0,B.height*.5,0),n.rectArea[g]=N,g++}else if(B.isPointLight){let N=e.get(B);if(N.color.copy(B.color).multiplyScalar(B.intensity),N.distance=B.distance,N.decay=B.decay,B.castShadow){let G=B.shadow,oe=t.get(B);oe.shadowIntensity=G.intensity,oe.shadowBias=G.bias,oe.shadowNormalBias=G.normalBias,oe.shadowRadius=G.radius,oe.shadowMapSize=G.mapSize,oe.shadowCameraNear=G.camera.near,oe.shadowCameraFar=G.camera.far,n.pointShadow[m]=oe,n.pointShadowMap[m]=ae,n.pointShadowMatrix[m]=B.shadow.matrix,_++}n.point[m]=N,m++}else if(B.isHemisphereLight){let N=e.get(B);N.skyColor.copy(B.color).multiplyScalar(Z),N.groundColor.copy(B.groundColor).multiplyScalar(Z),n.hemi[p]=N,p++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=it.LTC_FLOAT_1,n.rectAreaLTC2=it.LTC_FLOAT_2):(n.rectAreaLTC1=it.LTC_HALF_1,n.rectAreaLTC2=it.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let H=n.hash;(H.directionalLength!==f||H.pointLength!==m||H.spotLength!==x||H.rectAreaLength!==g||H.hemiLength!==p||H.numDirectionalShadows!==M||H.numPointShadows!==_||H.numSpotShadows!==v||H.numSpotMaps!==C||H.numLightProbes!==F)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=F,H.directionalLength=f,H.pointLength=m,H.spotLength=x,H.rectAreaLength=g,H.hemiLength=p,H.numDirectionalShadows=M,H.numPointShadows=_,H.numSpotShadows=v,H.numSpotMaps=C,H.numLightProbes=F,n.version=GM++)}function c(l,u){let h=0,d=0,f=0,m=0,x=0,g=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){let _=l[p];if(_.isDirectionalLight){let v=n.directional[h];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),h++}else if(_.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),f++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(_.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(g),d++}else if(_.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:a,setupView:c,state:n}}function Em(s){let e=new XM(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function qM(s){let e=new WeakMap;function t(i,r=0){let o=e.get(i),a;return o===void 0?(a=new Em(s),e.set(i,[a])):r>=o.length?(a=new Em(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var YM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZM=`uniform sampler2D shadow_pass;
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
}`,$M=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],KM=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Sm=new lt,$a=new D,_f=new D;function JM(s,e,t){let n=new go,i=new ye,r=new ye,o=new Kt,a=new cc,c=new uc,l={},u=t.maxTextureSize,h={[zi]:qn,[qn]:zi,[wn]:wn},d=new yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:YM,fragmentShader:ZM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Bt;m.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Je(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Er;let p=this.type;this.render=function(S,F,H){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;S.type===_p&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=Er);let b=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),V=s.state;V.setBlending(Dn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Z=p!==this.type;Z&&F.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(ae=>ae.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,ae=S.length;re<ae;re++){let N=S[re],G=N.shadow;if(G===void 0){ht("WebGLShadowMap:",N,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let oe=G.getFrameExtents();if(i.multiply(oe),r.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/oe.x),i.x=r.x*oe.x,G.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/oe.y),i.y=r.y*oe.y,G.mapSize.y=r.y)),G.map===null||Z===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Eo){if(N.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new bn(i.x,i.y,{format:Rr,type:Nn,minFilter:In,magFilter:In,generateMipmaps:!1}),G.map.texture.name=N.name+".shadowMap",G.map.depthTexture=new Ki(i.x,i.y,Ei),G.map.depthTexture.name=N.name+".shadowMapDepth",G.map.depthTexture.format=qi,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn}else{N.isPointLight?(G.map=new aa(i.x),G.map.depthTexture=new nc(i.x,Vi)):(G.map=new bn(i.x,i.y),G.map.depthTexture=new Ki(i.x,i.y,Vi)),G.map.depthTexture.name=N.name+".shadowMap",G.map.depthTexture.format=qi;let xe=s.state.buffers.depth.getReversed();this.type===Er?(G.map.depthTexture.compareFunction=xe?yu:_u,G.map.depthTexture.minFilter=In,G.map.depthTexture.magFilter=In):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn)}G.camera.updateProjectionMatrix()}let Te=G.map.isWebGLCubeRenderTarget?6:1;for(let xe=0;xe<Te;xe++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,xe),s.clear();else{xe===0&&(s.setRenderTarget(G.map),s.clear());let Ie=G.getViewport(xe);o.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),V.viewport(o)}if(N.isPointLight){let Ie=G.camera,R=G.matrix,X=N.distance||Ie.far;X!==Ie.far&&(Ie.far=X,Ie.updateProjectionMatrix()),$a.setFromMatrixPosition(N.matrixWorld),Ie.position.copy($a),_f.copy(Ie.position),_f.add($M[xe]),Ie.up.copy(KM[xe]),Ie.lookAt(_f),Ie.updateMatrixWorld(),R.makeTranslation(-$a.x,-$a.y,-$a.z),Sm.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Sm,Ie.coordinateSystem,Ie.reversedDepth)}else G.updateMatrices(N);n=G.getFrustum(),v(F,H,G.camera,N,this.type)}G.isPointLightShadow!==!0&&this.type===Eo&&M(G,H),G.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(b,w,B)};function M(S,F){let H=e.update(x);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new bn(i.x,i.y,{format:Rr,type:Nn})),d.uniforms.shadow_pass.value=S.map.depthTexture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(F,null,H,d,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(F,null,H,f,x,null)}function _(S,F,H,b){let w=null,B=H.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(B!==void 0)w=B;else if(w=H.isPointLight===!0?c:a,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){let V=w.uuid,Z=F.uuid,re=l[V];re===void 0&&(re={},l[V]=re);let ae=re[Z];ae===void 0&&(ae=w.clone(),re[Z]=ae,F.addEventListener("dispose",C)),w=ae}if(w.visible=F.visible,w.wireframe=F.wireframe,b===Eo?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:h[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,H.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let V=s.properties.get(w);V.light=H}return w}function v(S,F,H,b,w){if(S.visible===!1)return;if(S.layers.test(F.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&w===Eo)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld);let Z=e.update(S),re=S.material;if(Array.isArray(re)){let ae=Z.groups;for(let N=0,G=ae.length;N<G;N++){let oe=ae[N],Te=re[oe.materialIndex];if(Te&&Te.visible){let xe=_(S,Te,b,w);S.onBeforeShadow(s,S,F,H,Z,xe,oe),s.renderBufferDirect(H,null,Z,xe,S,oe),S.onAfterShadow(s,S,F,H,Z,xe,oe)}}}else if(re.visible){let ae=_(S,re,b,w);S.onBeforeShadow(s,S,F,H,Z,ae,null),s.renderBufferDirect(H,null,Z,ae,S,null),S.onAfterShadow(s,S,F,H,Z,ae,null)}}let V=S.children;for(let Z=0,re=V.length;Z<re;Z++)v(V[Z],F,H,b,w)}function C(S){S.target.removeEventListener("dispose",C);for(let H in l){let b=l[H],w=S.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}var jM={[yc]:Mc,[bc]:Tc,[Ec]:wc,[cr]:Sc,[Mc]:yc,[Tc]:bc,[wc]:Ec,[Sc]:cr};function QM(s,e){function t(){let W=!1,He=new Kt,Ne=null,Ke=new Kt(0,0,0,0);return{setMask:function(Le){Ne!==Le&&!W&&(s.colorMask(Le,Le,Le,Le),Ne=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Ce,Xe,dt,Gt){Gt===!0&&(Le*=dt,Ce*=dt,Xe*=dt),He.set(Le,Ce,Xe,dt),Ke.equals(He)===!1&&(s.clearColor(Le,Ce,Xe,dt),Ke.copy(He))},reset:function(){W=!1,Ne=null,Ke.set(-1,0,0,0)}}}function n(){let W=!1,He=!1,Ne=null,Ke=null,Le=null;return{setReversed:function(Ce){if(He!==Ce){let Xe=e.get("EXT_clip_control");Ce?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),He=Ce;let dt=Le;Le=null,this.setClear(dt)}},getReversed:function(){return He},setTest:function(Ce){Ce?U(s.DEPTH_TEST):O(s.DEPTH_TEST)},setMask:function(Ce){Ne!==Ce&&!W&&(s.depthMask(Ce),Ne=Ce)},setFunc:function(Ce){if(He&&(Ce=jM[Ce]),Ke!==Ce){switch(Ce){case yc:s.depthFunc(s.NEVER);break;case Mc:s.depthFunc(s.ALWAYS);break;case bc:s.depthFunc(s.LESS);break;case cr:s.depthFunc(s.LEQUAL);break;case Ec:s.depthFunc(s.EQUAL);break;case Sc:s.depthFunc(s.GEQUAL);break;case Tc:s.depthFunc(s.GREATER);break;case wc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ke=Ce}},setLocked:function(Ce){W=Ce},setClear:function(Ce){Le!==Ce&&(He&&(Ce=1-Ce),s.clearDepth(Ce),Le=Ce)},reset:function(){W=!1,Ne=null,Ke=null,Le=null,He=!1}}}function i(){let W=!1,He=null,Ne=null,Ke=null,Le=null,Ce=null,Xe=null,dt=null,Gt=null;return{setTest:function(xt){W||(xt?U(s.STENCIL_TEST):O(s.STENCIL_TEST))},setMask:function(xt){He!==xt&&!W&&(s.stencilMask(xt),He=xt)},setFunc:function(xt,nt,Mt){(Ne!==xt||Ke!==nt||Le!==Mt)&&(s.stencilFunc(xt,nt,Mt),Ne=xt,Ke=nt,Le=Mt)},setOp:function(xt,nt,Mt){(Ce!==xt||Xe!==nt||dt!==Mt)&&(s.stencilOp(xt,nt,Mt),Ce=xt,Xe=nt,dt=Mt)},setLocked:function(xt){W=xt},setClear:function(xt){Gt!==xt&&(s.clearStencil(xt),Gt=xt)},reset:function(){W=!1,He=null,Ne=null,Ke=null,Le=null,Ce=null,Xe=null,dt=null,Gt=null}}}let r=new t,o=new n,a=new i,c=new WeakMap,l=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,C=null,S=null,F=new Oe(0,0,0),H=0,b=!1,w=null,B=null,V=null,Z=null,re=null,ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,G=0,oe=s.getParameter(s.VERSION);oe.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(oe)[1]),N=G>=1):oe.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),N=G>=2);let Te=null,xe={},Ie=s.getParameter(s.SCISSOR_BOX),R=s.getParameter(s.VIEWPORT),X=new Kt().fromArray(Ie),j=new Kt().fromArray(R);function ne(W,He,Ne,Ke){let Le=new Uint8Array(4),Ce=s.createTexture();s.bindTexture(W,Ce),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<Ne;Xe++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(He,0,s.RGBA,1,1,Ke,0,s.RGBA,s.UNSIGNED_BYTE,Le):s.texImage2D(He+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Le);return Ce}let T={};T[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),T[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),T[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),U(s.DEPTH_TEST),o.setFunc(cr),le(!1),Re(Yh),U(s.CULL_FACE),te(Dn);function U(W){u[W]!==!0&&(s.enable(W),u[W]=!0)}function O(W){u[W]!==!1&&(s.disable(W),u[W]=!1)}function Y(W,He){return h[W]!==He?(s.bindFramebuffer(W,He),h[W]=He,W===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=He),W===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=He),!0):!1}function Q(W,He){let Ne=f,Ke=!1;if(W){Ne=d.get(He),Ne===void 0&&(Ne=[],d.set(He,Ne));let Le=W.textures;if(Ne.length!==Le.length||Ne[0]!==s.COLOR_ATTACHMENT0){for(let Ce=0,Xe=Le.length;Ce<Xe;Ce++)Ne[Ce]=s.COLOR_ATTACHMENT0+Ce;Ne.length=Le.length,Ke=!0}}else Ne[0]!==s.BACK&&(Ne[0]=s.BACK,Ke=!0);Ke&&s.drawBuffers(Ne)}function Ee(W){return m!==W?(s.useProgram(W),m=W,!0):!1}let be={[xi]:s.FUNC_ADD,[yp]:s.FUNC_SUBTRACT,[Mp]:s.FUNC_REVERSE_SUBTRACT};be[bp]=s.MIN,be[Ep]=s.MAX;let me={[Sr]:s.ZERO,[Sp]:s.ONE,[Tp]:s.SRC_COLOR,[Yl]:s.SRC_ALPHA,[Cp]:s.SRC_ALPHA_SATURATE,[Ua]:s.DST_COLOR,[Na]:s.DST_ALPHA,[wp]:s.ONE_MINUS_SRC_COLOR,[Zl]:s.ONE_MINUS_SRC_ALPHA,[Rp]:s.ONE_MINUS_DST_COLOR,[Ap]:s.ONE_MINUS_DST_ALPHA,[Pp]:s.CONSTANT_COLOR,[Ip]:s.ONE_MINUS_CONSTANT_COLOR,[Dp]:s.CONSTANT_ALPHA,[Lp]:s.ONE_MINUS_CONSTANT_ALPHA};function te(W,He,Ne,Ke,Le,Ce,Xe,dt,Gt,xt){if(W===Dn){x===!0&&(O(s.BLEND),x=!1);return}if(x===!1&&(U(s.BLEND),x=!0),W!==_c){if(W!==g||xt!==b){if((p!==xi||v!==xi)&&(s.blendEquation(s.FUNC_ADD),p=xi,v=xi),xt)switch(W){case lr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ln:s.blendFunc(s.ONE,s.ONE);break;case Zh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:mt("WebGLState: Invalid blending: ",W);break}else switch(W){case lr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ln:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Zh:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $h:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",W);break}M=null,_=null,C=null,S=null,F.set(0,0,0),H=0,g=W,b=xt}return}Le=Le||He,Ce=Ce||Ne,Xe=Xe||Ke,(He!==p||Le!==v)&&(s.blendEquationSeparate(be[He],be[Le]),p=He,v=Le),(Ne!==M||Ke!==_||Ce!==C||Xe!==S)&&(s.blendFuncSeparate(me[Ne],me[Ke],me[Ce],me[Xe]),M=Ne,_=Ke,C=Ce,S=Xe),(dt.equals(F)===!1||Gt!==H)&&(s.blendColor(dt.r,dt.g,dt.b,Gt),F.copy(dt),H=Gt),g=W,b=!1}function ve(W,He){W.side===wn?O(s.CULL_FACE):U(s.CULL_FACE);let Ne=W.side===qn;He&&(Ne=!Ne),le(Ne),W.blending===lr&&W.transparent===!1?te(Dn):te(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let Ke=W.stencilWrite;a.setTest(Ke),Ke&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),de(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?U(s.SAMPLE_ALPHA_TO_COVERAGE):O(s.SAMPLE_ALPHA_TO_COVERAGE)}function le(W){w!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),w=W)}function Re(W){W!==xp?(U(s.CULL_FACE),W!==B&&(W===Yh?s.cullFace(s.BACK):W===vp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):O(s.CULL_FACE),B=W}function A(W){W!==V&&(N&&s.lineWidth(W),V=W)}function de(W,He,Ne){W?(U(s.POLYGON_OFFSET_FILL),(Z!==He||re!==Ne)&&(s.polygonOffset(He,Ne),Z=He,re=Ne)):O(s.POLYGON_OFFSET_FILL)}function _e(W){W?U(s.SCISSOR_TEST):O(s.SCISSOR_TEST)}function Ve(W){W===void 0&&(W=s.TEXTURE0+ae-1),Te!==W&&(s.activeTexture(W),Te=W)}function we(W,He,Ne){Ne===void 0&&(Te===null?Ne=s.TEXTURE0+ae-1:Ne=Te);let Ke=xe[Ne];Ke===void 0&&(Ke={type:void 0,texture:void 0},xe[Ne]=Ke),(Ke.type!==W||Ke.texture!==He)&&(Te!==Ne&&(s.activeTexture(Ne),Te=Ne),s.bindTexture(W,He||T[W]),Ke.type=W,Ke.texture=He)}function L(){let W=xe[Te];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function ue(){try{s.texSubImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function Se(){try{s.texSubImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function pe(){try{s.compressedTexSubImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function Ge(){try{s.compressedTexSubImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function Pe(){try{s.texStorage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function ie(){try{s.texStorage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function Ae(){try{s.texImage2D(...arguments)}catch(W){mt("WebGLState:",W)}}function he(){try{s.texImage3D(...arguments)}catch(W){mt("WebGLState:",W)}}function Fe(W){X.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),X.copy(W))}function Be(W){j.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function qe(W,He){let Ne=l.get(He);Ne===void 0&&(Ne=new WeakMap,l.set(He,Ne));let Ke=Ne.get(W);Ke===void 0&&(Ke=s.getUniformBlockIndex(He,W.name),Ne.set(W,Ke))}function Ue(W,He){let Ke=l.get(He).get(W);c.get(He)!==Ke&&(s.uniformBlockBinding(He,Ke,W.__bindingPointIndex),c.set(He,Ke))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},Te=null,xe={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,M=null,_=null,v=null,C=null,S=null,F=new Oe(0,0,0),H=0,b=!1,w=null,B=null,V=null,Z=null,re=null,X.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:U,disable:O,bindFramebuffer:Y,drawBuffers:Q,useProgram:Ee,setBlending:te,setMaterial:ve,setFlipSided:le,setCullFace:Re,setLineWidth:A,setPolygonOffset:de,setScissorTest:_e,activeTexture:Ve,bindTexture:we,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:Ae,texImage3D:he,updateUBOMapping:qe,uniformBlockBinding:Ue,texStorage2D:Pe,texStorage3D:ie,texSubImage2D:ue,texSubImage3D:Se,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ge,scissor:Fe,viewport:Be,reset:ut}}function eb(s,e,t,n,i,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(L,E){return f?new OffscreenCanvas(L,E):lo("canvas")}function x(L,E,q){let ue=1,Se=we(L);if((Se.width>q||Se.height>q)&&(ue=q/Math.max(Se.width,Se.height)),ue<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let pe=Math.floor(ue*Se.width),Ge=Math.floor(ue*Se.height);h===void 0&&(h=m(pe,Ge));let Pe=E?m(pe,Ge):h;return Pe.width=pe,Pe.height=Ge,Pe.getContext("2d").drawImage(L,0,0,pe,Ge),ht("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+pe+"x"+Ge+")."),Pe}else return"data"in L&&ht("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function g(L){return L.generateMipmaps}function p(L){s.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function _(L,E,q,ue,Se=!1){if(L!==null){if(s[L]!==void 0)return s[L];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pe=E;if(E===s.RED&&(q===s.FLOAT&&(pe=s.R32F),q===s.HALF_FLOAT&&(pe=s.R16F),q===s.UNSIGNED_BYTE&&(pe=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(pe=s.R8UI),q===s.UNSIGNED_SHORT&&(pe=s.R16UI),q===s.UNSIGNED_INT&&(pe=s.R32UI),q===s.BYTE&&(pe=s.R8I),q===s.SHORT&&(pe=s.R16I),q===s.INT&&(pe=s.R32I)),E===s.RG&&(q===s.FLOAT&&(pe=s.RG32F),q===s.HALF_FLOAT&&(pe=s.RG16F),q===s.UNSIGNED_BYTE&&(pe=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(pe=s.RG8UI),q===s.UNSIGNED_SHORT&&(pe=s.RG16UI),q===s.UNSIGNED_INT&&(pe=s.RG32UI),q===s.BYTE&&(pe=s.RG8I),q===s.SHORT&&(pe=s.RG16I),q===s.INT&&(pe=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),q===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),q===s.UNSIGNED_INT&&(pe=s.RGB32UI),q===s.BYTE&&(pe=s.RGB8I),q===s.SHORT&&(pe=s.RGB16I),q===s.INT&&(pe=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),q===s.UNSIGNED_INT&&(pe=s.RGBA32UI),q===s.BYTE&&(pe=s.RGBA8I),q===s.SHORT&&(pe=s.RGBA16I),q===s.INT&&(pe=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),E===s.RGBA){let Ge=Se?ea:It.getTransfer(ue);q===s.FLOAT&&(pe=s.RGBA32F),q===s.HALF_FLOAT&&(pe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(pe=Ge===Yt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function v(L,E){let q;return L?E===null||E===Vi||E===Ys?q=s.DEPTH24_STENCIL8:E===Ei?q=s.DEPTH32F_STENCIL8:E===To&&(q=s.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Vi||E===Ys?q=s.DEPTH_COMPONENT24:E===Ei?q=s.DEPTH_COMPONENT32F:E===To&&(q=s.DEPTH_COMPONENT16),q}function C(L,E){return g(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mn&&L.minFilter!==In?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function S(L){let E=L.target;E.removeEventListener("dispose",S),H(E),E.isVideoTexture&&u.delete(E)}function F(L){let E=L.target;E.removeEventListener("dispose",F),w(E)}function H(L){let E=n.get(L);if(E.__webglInit===void 0)return;let q=L.source,ue=d.get(q);if(ue){let Se=ue[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&b(L),Object.keys(ue).length===0&&d.delete(q)}n.remove(L)}function b(L){let E=n.get(L);s.deleteTexture(E.__webglTexture);let q=L.source,ue=d.get(q);delete ue[E.__cacheKey],o.memory.textures--}function w(L){let E=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let Se=0;Se<E.__webglFramebuffer[ue].length;Se++)s.deleteFramebuffer(E.__webglFramebuffer[ue][Se]);else s.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)s.deleteFramebuffer(E.__webglFramebuffer[ue]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let q=L.textures;for(let ue=0,Se=q.length;ue<Se;ue++){let pe=n.get(q[ue]);pe.__webglTexture&&(s.deleteTexture(pe.__webglTexture),o.memory.textures--),n.remove(q[ue])}n.remove(L)}let B=0;function V(){B=0}function Z(){let L=B;return L>=i.maxTextures&&ht("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),B+=1,L}function re(L){let E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ae(L,E){let q=n.get(L);if(L.isVideoTexture&&_e(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&q.__version!==L.version){let ue=L.image;if(ue===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{T(q,L,E);return}}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function N(L,E){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){T(q,L,E);return}else L.isExternalTexture&&(q.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function G(L,E){let q=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){T(q,L,E);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function oe(L,E){let q=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&q.__version!==L.version){U(q,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}let Te={[Tn]:s.REPEAT,[Ci]:s.CLAMP_TO_EDGE,[ao]:s.MIRRORED_REPEAT},xe={[Mn]:s.NEAREST,[Cc]:s.NEAREST_MIPMAP_NEAREST,[Ar]:s.NEAREST_MIPMAP_LINEAR,[In]:s.LINEAR,[So]:s.LINEAR_MIPMAP_NEAREST,[bi]:s.LINEAR_MIPMAP_LINEAR},Ie={[kp]:s.NEVER,[qp]:s.ALWAYS,[Vp]:s.LESS,[_u]:s.LEQUAL,[Gp]:s.EQUAL,[yu]:s.GEQUAL,[Wp]:s.GREATER,[Xp]:s.NOTEQUAL};function R(L,E){if(E.type===Ei&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===In||E.magFilter===So||E.magFilter===Ar||E.magFilter===bi||E.minFilter===In||E.minFilter===So||E.minFilter===Ar||E.minFilter===bi)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Te[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Te[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Te[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,xe[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,xe[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Ie[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==Ar&&E.minFilter!==bi||E.type===Ei&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function X(L,E){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",S));let ue=E.source,Se=d.get(ue);Se===void 0&&(Se={},d.set(ue,Se));let pe=re(E);if(pe!==L.__cacheKey){Se[pe]===void 0&&(Se[pe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,q=!0),Se[pe].usedTimes++;let Ge=Se[L.__cacheKey];Ge!==void 0&&(Se[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&b(E)),L.__cacheKey=pe,L.__webglTexture=Se[pe].texture}return q}function j(L,E,q){return Math.floor(Math.floor(L/q)/E)}function ne(L,E,q,ue){let pe=L.updateRanges;if(pe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,ue,E.data);else{pe.sort((he,Fe)=>he.start-Fe.start);let Ge=0;for(let he=1;he<pe.length;he++){let Fe=pe[Ge],Be=pe[he],qe=Fe.start+Fe.count,Ue=j(Be.start,E.width,4),ut=j(Fe.start,E.width,4);Be.start<=qe+1&&Ue===ut&&j(Be.start+Be.count-1,E.width,4)===Ue?Fe.count=Math.max(Fe.count,Be.start+Be.count-Fe.start):(++Ge,pe[Ge]=Be)}pe.length=Ge+1;let Pe=s.getParameter(s.UNPACK_ROW_LENGTH),ie=s.getParameter(s.UNPACK_SKIP_PIXELS),Ae=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let he=0,Fe=pe.length;he<Fe;he++){let Be=pe[he],qe=Math.floor(Be.start/4),Ue=Math.ceil(Be.count/4),ut=qe%E.width,W=Math.floor(qe/E.width),He=Ue,Ne=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),t.texSubImage2D(s.TEXTURE_2D,0,ut,W,He,Ne,q,ue,E.data)}L.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Pe),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ie),s.pixelStorei(s.UNPACK_SKIP_ROWS,Ae)}}function T(L,E,q){let ue=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=s.TEXTURE_3D);let Se=X(L,E),pe=E.source;t.bindTexture(ue,L.__webglTexture,s.TEXTURE0+q);let Ge=n.get(pe);if(pe.version!==Ge.__version||Se===!0){t.activeTexture(s.TEXTURE0+q);let Pe=It.getPrimaries(It.workingColorSpace),ie=E.colorSpace===Ps?null:It.getPrimaries(E.colorSpace),Ae=E.colorSpace===Ps||Pe===ie?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let he=x(E.image,!1,i.maxTextureSize);he=Ve(E,he);let Fe=r.convert(E.format,E.colorSpace),Be=r.convert(E.type),qe=_(E.internalFormat,Fe,Be,E.colorSpace,E.isVideoTexture);R(ue,E);let Ue,ut=E.mipmaps,W=E.isVideoTexture!==!0,He=Ge.__version===void 0||Se===!0,Ne=pe.dataReady,Ke=C(E,he);if(E.isDepthTexture)qe=v(E.format===rs,E.type),He&&(W?t.texStorage2D(s.TEXTURE_2D,1,qe,he.width,he.height):t.texImage2D(s.TEXTURE_2D,0,qe,he.width,he.height,0,Fe,Be,null));else if(E.isDataTexture)if(ut.length>0){W&&He&&t.texStorage2D(s.TEXTURE_2D,Ke,qe,ut[0].width,ut[0].height);for(let Le=0,Ce=ut.length;Le<Ce;Le++)Ue=ut[Le],W?Ne&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,Ue.width,Ue.height,Fe,Be,Ue.data):t.texImage2D(s.TEXTURE_2D,Le,qe,Ue.width,Ue.height,0,Fe,Be,Ue.data);E.generateMipmaps=!1}else W?(He&&t.texStorage2D(s.TEXTURE_2D,Ke,qe,he.width,he.height),Ne&&ne(E,he,Fe,Be)):t.texImage2D(s.TEXTURE_2D,0,qe,he.width,he.height,0,Fe,Be,he.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,qe,ut[0].width,ut[0].height,he.depth);for(let Le=0,Ce=ut.length;Le<Ce;Le++)if(Ue=ut[Le],E.format!==li)if(Fe!==null)if(W){if(Ne)if(E.layerUpdates.size>0){let Xe=df(Ue.width,Ue.height,E.format,E.type);for(let dt of E.layerUpdates){let Gt=Ue.data.subarray(dt*Xe/Ue.data.BYTES_PER_ELEMENT,(dt+1)*Xe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,dt,Ue.width,Ue.height,1,Fe,Gt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,Ue.width,Ue.height,he.depth,Fe,Ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Le,qe,Ue.width,Ue.height,he.depth,0,Ue.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Le,0,0,0,Ue.width,Ue.height,he.depth,Fe,Be,Ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Le,qe,Ue.width,Ue.height,he.depth,0,Fe,Be,Ue.data)}else{W&&He&&t.texStorage2D(s.TEXTURE_2D,Ke,qe,ut[0].width,ut[0].height);for(let Le=0,Ce=ut.length;Le<Ce;Le++)Ue=ut[Le],E.format!==li?Fe!==null?W?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,Le,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(s.TEXTURE_2D,Le,qe,Ue.width,Ue.height,0,Ue.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ne&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,Ue.width,Ue.height,Fe,Be,Ue.data):t.texImage2D(s.TEXTURE_2D,Le,qe,Ue.width,Ue.height,0,Fe,Be,Ue.data)}else if(E.isDataArrayTexture)if(W){if(He&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ke,qe,he.width,he.height,he.depth),Ne)if(E.layerUpdates.size>0){let Le=df(he.width,he.height,E.format,E.type);for(let Ce of E.layerUpdates){let Xe=he.data.subarray(Ce*Le/he.data.BYTES_PER_ELEMENT,(Ce+1)*Le/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ce,he.width,he.height,1,Fe,Be,Xe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Fe,Be,he.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,he.width,he.height,he.depth,0,Fe,Be,he.data);else if(E.isData3DTexture)W?(He&&t.texStorage3D(s.TEXTURE_3D,Ke,qe,he.width,he.height,he.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Fe,Be,he.data)):t.texImage3D(s.TEXTURE_3D,0,qe,he.width,he.height,he.depth,0,Fe,Be,he.data);else if(E.isFramebufferTexture){if(He)if(W)t.texStorage2D(s.TEXTURE_2D,Ke,qe,he.width,he.height);else{let Le=he.width,Ce=he.height;for(let Xe=0;Xe<Ke;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,qe,Le,Ce,0,Fe,Be,null),Le>>=1,Ce>>=1}}else if(ut.length>0){if(W&&He){let Le=we(ut[0]);t.texStorage2D(s.TEXTURE_2D,Ke,qe,Le.width,Le.height)}for(let Le=0,Ce=ut.length;Le<Ce;Le++)Ue=ut[Le],W?Ne&&t.texSubImage2D(s.TEXTURE_2D,Le,0,0,Fe,Be,Ue):t.texImage2D(s.TEXTURE_2D,Le,qe,Fe,Be,Ue);E.generateMipmaps=!1}else if(W){if(He){let Le=we(he);t.texStorage2D(s.TEXTURE_2D,Ke,qe,Le.width,Le.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Fe,Be,he)}else t.texImage2D(s.TEXTURE_2D,0,qe,Fe,Be,he);g(E)&&p(ue),Ge.__version=pe.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function U(L,E,q){if(E.image.length!==6)return;let ue=X(L,E),Se=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);let pe=n.get(Se);if(Se.version!==pe.__version||ue===!0){t.activeTexture(s.TEXTURE0+q);let Ge=It.getPrimaries(It.workingColorSpace),Pe=E.colorSpace===Ps?null:It.getPrimaries(E.colorSpace),ie=E.colorSpace===Ps||Ge===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Ae=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let Ce=0;Ce<6;Ce++)!Ae&&!he?Fe[Ce]=x(E.image[Ce],!0,i.maxCubemapSize):Fe[Ce]=he?E.image[Ce].image:E.image[Ce],Fe[Ce]=Ve(E,Fe[Ce]);let Be=Fe[0],qe=r.convert(E.format,E.colorSpace),Ue=r.convert(E.type),ut=_(E.internalFormat,qe,Ue,E.colorSpace),W=E.isVideoTexture!==!0,He=pe.__version===void 0||ue===!0,Ne=Se.dataReady,Ke=C(E,Be);R(s.TEXTURE_CUBE_MAP,E);let Le;if(Ae){W&&He&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,ut,Be.width,Be.height);for(let Ce=0;Ce<6;Ce++){Le=Fe[Ce].mipmaps;for(let Xe=0;Xe<Le.length;Xe++){let dt=Le[Xe];E.format!==li?qe!==null?W?Ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe,0,0,dt.width,dt.height,qe,dt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe,ut,dt.width,dt.height,0,dt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe,0,0,dt.width,dt.height,qe,Ue,dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe,ut,dt.width,dt.height,0,qe,Ue,dt.data)}}}else{if(Le=E.mipmaps,W&&He){Le.length>0&&Ke++;let Ce=we(Fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ke,ut,Ce.width,Ce.height)}for(let Ce=0;Ce<6;Ce++)if(he){W?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,Fe[Ce].width,Fe[Ce].height,qe,Ue,Fe[Ce].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ut,Fe[Ce].width,Fe[Ce].height,0,qe,Ue,Fe[Ce].data);for(let Xe=0;Xe<Le.length;Xe++){let Gt=Le[Xe].image[Ce].image;W?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe+1,0,0,Gt.width,Gt.height,qe,Ue,Gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe+1,ut,Gt.width,Gt.height,0,qe,Ue,Gt.data)}}else{W?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,0,0,qe,Ue,Fe[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,ut,qe,Ue,Fe[Ce]);for(let Xe=0;Xe<Le.length;Xe++){let dt=Le[Xe];W?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe+1,0,0,qe,Ue,dt.image[Ce]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Xe+1,ut,qe,Ue,dt.image[Ce])}}}g(E)&&p(s.TEXTURE_CUBE_MAP),pe.__version=Se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function O(L,E,q,ue,Se,pe){let Ge=r.convert(q.format,q.colorSpace),Pe=r.convert(q.type),ie=_(q.internalFormat,Ge,Pe,q.colorSpace),Ae=n.get(E),he=n.get(q);if(he.__renderTarget=E,!Ae.__hasExternalTextures){let Fe=Math.max(1,E.width>>pe),Be=Math.max(1,E.height>>pe);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,pe,ie,Fe,Be,E.depth,0,Ge,Pe,null):t.texImage2D(Se,pe,ie,Fe,Be,0,Ge,Pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),de(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ue,Se,he.__webglTexture,0,A(E)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ue,Se,he.__webglTexture,pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Y(L,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){let ue=E.depthTexture,Se=ue&&ue.isDepthTexture?ue.type:null,pe=v(E.stencilBuffer,Se),Ge=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;de(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,A(E),pe,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,A(E),pe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,pe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,L)}else{let ue=E.textures;for(let Se=0;Se<ue.length;Se++){let pe=ue[Se],Ge=r.convert(pe.format,pe.colorSpace),Pe=r.convert(pe.type),ie=_(pe.internalFormat,Ge,Pe,pe.colorSpace);de(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,A(E),ie,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,A(E),ie,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ie,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Q(L,E,q){let ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Se=n.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",S)),Se.__webglTexture===void 0){Se.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),R(s.TEXTURE_CUBE_MAP,E.depthTexture);let Ae=r.convert(E.depthTexture.format),he=r.convert(E.depthTexture.type),Fe;E.depthTexture.format===qi?Fe=s.DEPTH_COMPONENT24:E.depthTexture.format===rs&&(Fe=s.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Fe,E.width,E.height,0,Ae,he,null)}}else ae(E.depthTexture,0);let pe=Se.__webglTexture,Ge=A(E),Pe=ue?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,ie=E.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===qi)de(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Pe,pe,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Pe,pe,0);else if(E.depthTexture.format===rs)de(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ie,Pe,pe,0,Ge):s.framebufferTexture2D(s.FRAMEBUFFER,ie,Pe,pe,0);else throw new Error("Unknown depthTexture format")}function Ee(L){let E=n.get(L),q=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){let ue=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){let Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",Se)};ue.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=ue}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ue=0;ue<6;ue++)Q(E.__webglFramebuffer[ue],L,ue);else{let ue=L.texture.mipmaps;ue&&ue.length>0?Q(E.__webglFramebuffer[0],L,0):Q(E.__webglFramebuffer,L,0)}else if(q){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=s.createRenderbuffer(),Y(E.__webglDepthbuffer[ue],L,!1);else{let Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer[ue];s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,pe)}}else{let ue=L.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Y(E.__webglDepthbuffer,L,!1);else{let Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,pe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(L,E,q){let ue=n.get(L);E!==void 0&&O(ue.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ee(L)}function me(L){let E=L.texture,q=n.get(L),ue=n.get(E);L.addEventListener("dispose",F);let Se=L.textures,pe=L.isWebGLCubeRenderTarget===!0,Ge=Se.length>1;if(Ge||(ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture()),ue.__version=E.version,o.memory.textures++),pe){q.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Pe]=[];for(let ie=0;ie<E.mipmaps.length;ie++)q.__webglFramebuffer[Pe][ie]=s.createFramebuffer()}else q.__webglFramebuffer[Pe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)q.__webglFramebuffer[Pe]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Pe=0,ie=Se.length;Pe<ie;Pe++){let Ae=n.get(Se[Pe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&de(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<Se.length;Pe++){let ie=Se[Pe];q.__webglColorRenderbuffer[Pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Pe]);let Ae=r.convert(ie.format,ie.colorSpace),he=r.convert(ie.type),Fe=_(ie.internalFormat,Ae,he,ie.colorSpace,L.isXRRenderTarget===!0),Be=A(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Fe,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,q.__webglColorRenderbuffer[Pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Y(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,ue.__webglTexture),R(s.TEXTURE_CUBE_MAP,E);for(let Pe=0;Pe<6;Pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)O(q.__webglFramebuffer[Pe][ie],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,ie);else O(q.__webglFramebuffer[Pe],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);g(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Pe=0,ie=Se.length;Pe<ie;Pe++){let Ae=Se[Pe],he=n.get(Ae),Fe=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Fe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Fe,he.__webglTexture),R(Fe,Ae),O(q.__webglFramebuffer,L,Ae,s.COLOR_ATTACHMENT0+Pe,Fe,0),g(Ae)&&p(Fe)}t.unbindTexture()}else{let Pe=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Pe=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ue.__webglTexture),R(Pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ie=0;ie<E.mipmaps.length;ie++)O(q.__webglFramebuffer[ie],L,E,s.COLOR_ATTACHMENT0,Pe,ie);else O(q.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,Pe,0);g(E)&&p(Pe),t.unbindTexture()}L.depthBuffer&&Ee(L)}function te(L){let E=L.textures;for(let q=0,ue=E.length;q<ue;q++){let Se=E[q];if(g(Se)){let pe=M(L),Ge=n.get(Se).__webglTexture;t.bindTexture(pe,Ge),p(pe),t.unbindTexture()}}}let ve=[],le=[];function Re(L){if(L.samples>0){if(de(L)===!1){let E=L.textures,q=L.width,ue=L.height,Se=s.COLOR_BUFFER_BIT,pe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=n.get(L),Pe=E.length>1;if(Pe)for(let Ae=0;Ae<E.length;Ae++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);let ie=L.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),Pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ae]);let he=n.get(E[Ae]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,q,ue,0,0,q,ue,Se,s.NEAREST),c===!0&&(ve.length=0,le.length=0,ve.push(s.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ve.push(pe),le.push(pe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,le)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pe)for(let Ae=0;Ae<E.length;Ae++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Ae]);let he=n.get(E[Ae]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,he,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&c){let E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function A(L){return Math.min(i.maxSamples,L.samples)}function de(L){let E=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _e(L){let E=o.render.frame;u.get(L)!==E&&(u.set(L,E),L.update())}function Ve(L,E){let q=L.colorSpace,ue=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==Zn&&q!==Ps&&(It.getTransfer(q)===Yt?(ue!==li||Se!==ni)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",q)),E}function we(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.setTexture2D=ae,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=me,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=O,this.useMultisampledRTT=de,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tb(s,e){function t(n,i=Ps){let r,o=It.getTransfer(i);if(n===ni)return s.UNSIGNED_BYTE;if(n===Ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ef)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===tf)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===jh)return s.BYTE;if(n===Qh)return s.SHORT;if(n===To)return s.UNSIGNED_SHORT;if(n===Pc)return s.INT;if(n===Vi)return s.UNSIGNED_INT;if(n===Ei)return s.FLOAT;if(n===Nn)return s.HALF_FLOAT;if(n===nf)return s.ALPHA;if(n===sf)return s.RGB;if(n===li)return s.RGBA;if(n===qi)return s.DEPTH_COMPONENT;if(n===rs)return s.DEPTH_STENCIL;if(n===Lc)return s.RED;if(n===Nc)return s.RED_INTEGER;if(n===Rr)return s.RG;if(n===Uc)return s.RG_INTEGER;if(n===Fc)return s.RGBA_INTEGER;if(n===Ga||n===Wa||n===Xa||n===qa)if(o===Yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Oc||n===Bc||n===Hc||n===zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Oc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===kc||n===Vc)return o===Yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wc)return r.COMPRESSED_R11_EAC;if(n===Xc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qc)return r.COMPRESSED_RG11_EAC;if(n===Yc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===$c||n===Kc||n===Jc||n===jc||n===Qc||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$c)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qc)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===Yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lu||n===cu||n===uu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===lu)return o===Yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===fu||n===du||n===pu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===du)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ys?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}var nb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ib=`
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

}`,Af=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yt({vertexShader:nb,fragmentShader:ib,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Je(new tn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rf=class extends Yi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new Af,p={},M=t.getContextAttributes(),_=null,v=null,C=[],S=[],F=new ye,H=null,b=new yn;b.viewport=new Kt;let w=new yn;w.viewport=new Kt;let B=[b,w],V=new gc,Z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let U=C[T];return U===void 0&&(U=new po,C[T]=U),U.getTargetRaySpace()},this.getControllerGrip=function(T){let U=C[T];return U===void 0&&(U=new po,C[T]=U),U.getGripSpace()},this.getHand=function(T){let U=C[T];return U===void 0&&(U=new po,C[T]=U),U.getHandSpace()};function ae(T){let U=S.indexOf(T.inputSource);if(U===-1)return;let O=C[U];O!==void 0&&(O.update(T.inputSource,T.frame,l||o),O.dispatchEvent({type:T.type,data:T.inputSource}))}function N(){i.removeEventListener("select",ae),i.removeEventListener("selectstart",ae),i.removeEventListener("selectend",ae),i.removeEventListener("squeeze",ae),i.removeEventListener("squeezestart",ae),i.removeEventListener("squeezeend",ae),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",G);for(let T=0;T<C.length;T++){let U=S[T];U!==null&&(S[T]=null,C[T].disconnect(U))}Z=null,re=null,g.reset();for(let T in p)delete p[T];e.setRenderTarget(_),f=null,d=null,h=null,i=null,v=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){r=T,n.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){a=T,n.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(T){l=T},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(T){if(i=T,i!==null){if(_=e.getRenderTarget(),i.addEventListener("select",ae),i.addEventListener("selectstart",ae),i.addEventListener("selectend",ae),i.addEventListener("squeeze",ae),i.addEventListener("squeezestart",ae),i.addEventListener("squeezeend",ae),i.addEventListener("end",N),i.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(F),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let O=null,Y=null,Q=null;M.depth&&(Q=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=M.stencil?rs:qi,Y=M.stencil?Ys:Vi);let Ee={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new bn(d.textureWidth,d.textureHeight,{format:li,type:ni,depthTexture:new Ki(d.textureWidth,d.textureHeight,Y,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let O={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,O),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new bn(f.framebufferWidth,f.framebufferHeight,{format:li,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(T){for(let U=0;U<T.removed.length;U++){let O=T.removed[U],Y=S.indexOf(O);Y>=0&&(S[Y]=null,C[Y].disconnect(O))}for(let U=0;U<T.added.length;U++){let O=T.added[U],Y=S.indexOf(O);if(Y===-1){for(let Ee=0;Ee<C.length;Ee++)if(Ee>=S.length){S.push(O),Y=Ee;break}else if(S[Ee]===null){S[Ee]=O,Y=Ee;break}if(Y===-1)break}let Q=C[Y];Q&&Q.connect(O)}}let oe=new D,Te=new D;function xe(T,U,O){oe.setFromMatrixPosition(U.matrixWorld),Te.setFromMatrixPosition(O.matrixWorld);let Y=oe.distanceTo(Te),Q=U.projectionMatrix.elements,Ee=O.projectionMatrix.elements,be=Q[14]/(Q[10]-1),me=Q[14]/(Q[10]+1),te=(Q[9]+1)/Q[5],ve=(Q[9]-1)/Q[5],le=(Q[8]-1)/Q[0],Re=(Ee[8]+1)/Ee[0],A=be*le,de=be*Re,_e=Y/(-le+Re),Ve=_e*-le;if(U.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ve),T.translateZ(_e),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),Q[10]===-1)T.projectionMatrix.copy(U.projectionMatrix),T.projectionMatrixInverse.copy(U.projectionMatrixInverse);else{let we=be+_e,L=me+_e,E=A-Ve,q=de+(Y-Ve),ue=te*me/L*we,Se=ve*me/L*we;T.projectionMatrix.makePerspective(E,q,ue,Se,we,L),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function Ie(T,U){U===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(U.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(i===null)return;let U=T.near,O=T.far;g.texture!==null&&(g.depthNear>0&&(U=g.depthNear),g.depthFar>0&&(O=g.depthFar)),V.near=w.near=b.near=U,V.far=w.far=b.far=O,(Z!==V.near||re!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),Z=V.near,re=V.far),V.layers.mask=T.layers.mask|6,b.layers.mask=V.layers.mask&3,w.layers.mask=V.layers.mask&5;let Y=T.parent,Q=V.cameras;Ie(V,Y);for(let Ee=0;Ee<Q.length;Ee++)Ie(Q[Ee],Y);Q.length===2?xe(V,b,w):V.projectionMatrix.copy(b.projectionMatrix),R(T,V,Y)};function R(T,U,O){O===null?T.matrix.copy(U.matrixWorld):(T.matrix.copy(O.matrixWorld),T.matrix.invert(),T.matrix.multiply(U.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(U.projectionMatrix),T.projectionMatrixInverse.copy(U.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=fr*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(T){c=T,d!==null&&(d.fixedFoveation=T),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=T)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(T){return p[T]};let X=null;function j(T,U){if(u=U.getViewerPose(l||o),m=U,u!==null){let O=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Y=!1;O.length!==V.cameras.length&&(V.cameras.length=0,Y=!0);for(let me=0;me<O.length;me++){let te=O[me],ve=null;if(f!==null)ve=f.getViewport(te);else{let Re=h.getViewSubImage(d,te);ve=Re.viewport,me===0&&(e.setRenderTargetTextures(v,Re.colorTexture,Re.depthStencilTexture),e.setRenderTarget(v))}let le=B[me];le===void 0&&(le=new yn,le.layers.enable(me),le.viewport=new Kt,B[me]=le),le.matrix.fromArray(te.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(te.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ve.x,ve.y,ve.width,ve.height),me===0&&(V.matrix.copy(le.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Y===!0&&V.cameras.push(le)}let Q=i.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let me=h.getDepthInformation(O[0]);me&&me.isValid&&me.texture&&g.init(me,i.renderState)}if(Q&&Q.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let me=0;me<O.length;me++){let te=O[me].camera;if(te){let ve=p[te];ve||(ve=new ha,p[te]=ve);let le=h.getCameraImage(te);ve.sourceTexture=le}}}}for(let O=0;O<C.length;O++){let Y=S[O],Q=C[O];Y!==null&&Q!==void 0&&Q.update(Y,U,l||o)}X&&X(T,U),U.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:U}),m=null}let ne=new Tm;ne.setAnimationLoop(j),this.setAnimationLoop=function(T){X=T},this.dispose=function(){}}},Ir=new _i,sb=new lt;function rb(s,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,cf(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,M,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,M,_):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===qn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===qn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,v=M.envMapRotation;_&&(g.envMap.value=_,Ir.copy(v),Ir.x*=-1,Ir.y*=-1,Ir.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ir.y*=-1,Ir.z*=-1),g.envMapRotation.value.setFromMatrix4(sb.makeRotationFromEuler(Ir)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,M,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=_*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ob(s,e,t,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function l(M,_){let v=i[M.id];v===void 0&&(m(M),v=u(M),i[M.id]=v,M.addEventListener("dispose",g));let C=_.program;n.updateUBOMapping(M,C);let S=e.render.frame;r[M.id]!==S&&(d(M),r[M.id]=S)}function u(M){let _=h();M.__bindingPointIndex=_;let v=s.createBuffer(),C=M.__size,S=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,C,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,v),v}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=i[M.id],v=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let S=0,F=v.length;S<F;S++){let H=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,w=H.length;b<w;b++){let B=H[b];if(f(B,S,b,C)===!0){let V=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value],re=0;for(let ae=0;ae<Z.length;ae++){let N=Z[ae],G=x(N);typeof N=="number"||typeof N=="boolean"?(B.__data[0]=N,s.bufferSubData(s.UNIFORM_BUFFER,V+re,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=0,B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=0,B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=0):(N.toArray(B.__data,re),re+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,_,v,C){let S=M.value,F=_+"_"+v;if(C[F]===void 0)return typeof S=="number"||typeof S=="boolean"?C[F]=S:C[F]=S.clone(),!0;{let H=C[F];if(typeof S=="number"||typeof S=="boolean"){if(H!==S)return C[F]=S,!0}else if(H.equals(S)===!1)return H.copy(S),!0}return!1}function m(M){let _=M.uniforms,v=0,C=16;for(let F=0,H=_.length;F<H;F++){let b=Array.isArray(_[F])?_[F]:[_[F]];for(let w=0,B=b.length;w<B;w++){let V=b[w],Z=Array.isArray(V.value)?V.value:[V.value];for(let re=0,ae=Z.length;re<ae;re++){let N=Z[re],G=x(N),oe=v%C,Te=oe%G.boundary,xe=oe+Te;v+=Te,xe!==0&&C-xe<G.storage&&(v+=C-xe),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=v,v+=G.storage}}}let S=v%C;return S>0&&(v+=C-S),M.__size=v,M.__cache={},this}function x(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){let _=M.target;_.removeEventListener("dispose",g);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete r[_.id]}function p(){for(let M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var ab=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),os=null;function lb(){return os===null&&(os=new $i(ab,16,16,Rr,Nn),os.name="DFG_LUT",os.minFilter=In,os.magFilter=In,os.wrapS=Ci,os.wrapT=Ci,os.generateMipmaps=!1,os.needsUpdate=!0),os}var Su=class{constructor(e={}){let{canvas:t=Yp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ni}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let x=f,g=new Set([Fc,Uc,Nc]),p=new Set([ni,Vi,To,Ys,Ic,Dc]),M=new Uint32Array(4),_=new Int32Array(4),v=null,C=null,S=[],F=[],H=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,w=!1;this._outputColorSpace=pn;let B=0,V=0,Z=null,re=-1,ae=null,N=new Kt,G=new Kt,oe=null,Te=new Oe(0),xe=0,Ie=t.width,R=t.height,X=1,j=null,ne=null,T=new Kt(0,0,Ie,R),U=new Kt(0,0,Ie,R),O=!1,Y=new go,Q=!1,Ee=!1,be=new lt,me=new D,te=new Kt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},le=!1;function Re(){return Z===null?X:1}let A=n;function de(P,$){return t.getContext(P,$)}try{let P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",Gt,!1),t.addEventListener("webglcontextcreationerror",xt,!1),A===null){let $="webgl2";if(A=de($,P),A===null)throw de($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw mt("WebGLRenderer: "+P.message),P}let _e,Ve,we,L,E,q,ue,Se,pe,Ge,Pe,ie,Ae,he,Fe,Be,qe,Ue,ut,W,He,Ne,Ke,Le;function Ce(){_e=new my(A),_e.init(),Ne=new tb(A,_e),Ve=new oy(A,_e,e,Ne),we=new QM(A,_e),Ve.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),L=new vy(A),E=new BM,q=new eb(A,_e,we,E,Ve,Ne,L),ue=new ly(b),Se=new py(b),pe=new bx(A),Ke=new sy(A,pe),Ge=new gy(A,pe,L,Ke),Pe=new yy(A,Ge,pe,L),ut=new _y(A,Ve,q),Be=new ay(E),ie=new OM(b,ue,Se,_e,Ve,Ke,Be),Ae=new rb(b,E),he=new zM,Fe=new qM(_e),Ue=new iy(b,ue,Se,we,Pe,m,c),qe=new JM(b,Pe,Ve),Le=new ob(A,L,Ve,we),W=new ry(A,_e,L),He=new xy(A,_e,L),L.programs=ie.programs,b.capabilities=Ve,b.extensions=_e,b.properties=E,b.renderLists=he,b.shadowMap=qe,b.state=we,b.info=L}Ce(),x!==ni&&(H=new by(x,t.width,t.height,i,r));let Xe=new Rf(b,A);this.xr=Xe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){let P=_e.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=_e.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(P){P!==void 0&&(X=P,this.setSize(Ie,R,!1))},this.getSize=function(P){return P.set(Ie,R)},this.setSize=function(P,$,fe=!0){if(Xe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=P,R=$,t.width=Math.floor(P*X),t.height=Math.floor($*X),fe===!0&&(t.style.width=P+"px",t.style.height=$+"px"),H!==null&&H.setSize(t.width,t.height),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(Ie*X,R*X).floor()},this.setDrawingBufferSize=function(P,$,fe){Ie=P,R=$,X=fe,t.width=Math.floor(P*fe),t.height=Math.floor($*fe),this.setViewport(0,0,P,$)},this.setEffects=function(P){if(x===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let $=0;$<P.length;$++)if(P[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(N)},this.getViewport=function(P){return P.copy(T)},this.setViewport=function(P,$,fe,se){P.isVector4?T.set(P.x,P.y,P.z,P.w):T.set(P,$,fe,se),we.viewport(N.copy(T).multiplyScalar(X).round())},this.getScissor=function(P){return P.copy(U)},this.setScissor=function(P,$,fe,se){P.isVector4?U.set(P.x,P.y,P.z,P.w):U.set(P,$,fe,se),we.scissor(G.copy(U).multiplyScalar(X).round())},this.getScissorTest=function(){return O},this.setScissorTest=function(P){we.setScissorTest(O=P)},this.setOpaqueSort=function(P){j=P},this.setTransparentSort=function(P){ne=P},this.getClearColor=function(P){return P.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(P=!0,$=!0,fe=!0){let se=0;if(P){let ee=!1;if(Z!==null){let ke=Z.texture.format;ee=g.has(ke)}if(ee){let ke=Z.texture.type,je=p.has(ke),Ze=Ue.getClearColor(),Qe=Ue.getClearAlpha(),at=Ze.r,ft=Ze.g,We=Ze.b;je?(M[0]=at,M[1]=ft,M[2]=We,M[3]=Qe,A.clearBufferuiv(A.COLOR,0,M)):(_[0]=at,_[1]=ft,_[2]=We,_[3]=Qe,A.clearBufferiv(A.COLOR,0,_))}else se|=A.COLOR_BUFFER_BIT}$&&(se|=A.DEPTH_BUFFER_BIT),fe&&(se|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",Gt,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Ue.dispose(),he.dispose(),Fe.dispose(),E.dispose(),ue.dispose(),Se.dispose(),Pe.dispose(),Ke.dispose(),Le.dispose(),ie.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",nn),Xe.removeEventListener("sessionend",Ut),gt.stop()};function dt(P){P.preventDefault(),na("WebGLRenderer: Context Lost."),w=!0}function Gt(){na("WebGLRenderer: Context Restored."),w=!1;let P=L.autoReset,$=qe.enabled,fe=qe.autoUpdate,se=qe.needsUpdate,ee=qe.type;Ce(),L.autoReset=P,qe.enabled=$,qe.autoUpdate=fe,qe.needsUpdate=se,qe.type=ee}function xt(P){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function nt(P){let $=P.target;$.removeEventListener("dispose",nt),Mt($)}function Mt(P){Rn(P),E.remove(P)}function Rn(P){let $=E.get(P).programs;$!==void 0&&($.forEach(function(fe){ie.releaseProgram(fe)}),P.isShaderMaterial&&ie.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,fe,se,ee,ke){$===null&&($=ve);let je=ee.isMesh&&ee.matrixWorld.determinant()<0,Ze=Ye(P,$,fe,se,ee);we.setMaterial(se,je);let Qe=fe.index,at=1;if(se.wireframe===!0){if(Qe=Ge.getWireframeAttribute(fe),Qe===void 0)return;at=2}let ft=fe.drawRange,We=fe.attributes.position,rt=ft.start*at,Ot=(ft.start+ft.count)*at;ke!==null&&(rt=Math.max(rt,ke.start*at),Ot=Math.min(Ot,(ke.start+ke.count)*at)),Qe!==null?(rt=Math.max(rt,0),Ot=Math.min(Ot,Qe.count)):We!=null&&(rt=Math.max(rt,0),Ot=Math.min(Ot,We.count));let Wt=Ot-rt;if(Wt<0||Wt===1/0)return;Ke.setup(ee,se,Ze,fe,Qe);let Dt,St=W;if(Qe!==null&&(Dt=pe.get(Qe),St=He,St.setIndex(Dt)),ee.isMesh)se.wireframe===!0?(we.setLineWidth(se.wireframeLinewidth*Re()),St.setMode(A.LINES)):St.setMode(A.TRIANGLES);else if(ee.isLine){let st=se.linewidth;st===void 0&&(st=1),we.setLineWidth(st*Re()),ee.isLineSegments?St.setMode(A.LINES):ee.isLineLoop?St.setMode(A.LINE_LOOP):St.setMode(A.LINE_STRIP)}else ee.isPoints?St.setMode(A.POINTS):ee.isSprite&&St.setMode(A.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)uo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(_e.get("WEBGL_multi_draw"))St.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let st=ee._multiDrawStarts,wt=ee._multiDrawCounts,et=ee._multiDrawCount,vn=Qe?pe.get(Qe).bytesPerElement:1,Jn=E.get(se).currentProgram.getUniforms();for(let Wn=0;Wn<et;Wn++)Jn.setValue(A,"_gl_DrawID",Wn),St.render(st[Wn]/vn,wt[Wn])}else if(ee.isInstancedMesh)St.renderInstances(rt,Wt,ee.count);else if(fe.isInstancedBufferGeometry){let st=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,wt=Math.min(fe.instanceCount,st);St.renderInstances(rt,Wt,wt)}else St.render(rt,Wt)};function jt(P,$,fe){P.transparent===!0&&P.side===wn&&P.forceSinglePass===!1?(P.side=qn,P.needsUpdate=!0,Rt(P,$,fe),P.side=zi,P.needsUpdate=!0,Rt(P,$,fe),P.side=wn):Rt(P,$,fe)}this.compile=function(P,$,fe=null){fe===null&&(fe=P),C=Fe.get(fe),C.init($),F.push(C),fe.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(C.pushLight(ee),ee.castShadow&&C.pushShadow(ee))}),P!==fe&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(C.pushLight(ee),ee.castShadow&&C.pushShadow(ee))}),C.setupLights();let se=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let ke=ee.material;if(ke)if(Array.isArray(ke))for(let je=0;je<ke.length;je++){let Ze=ke[je];jt(Ze,fe,ee),se.add(Ze)}else jt(ke,fe,ee),se.add(ke)}),C=F.pop(),se},this.compileAsync=function(P,$,fe=null){let se=this.compile(P,$,fe);return new Promise(ee=>{function ke(){if(se.forEach(function(je){E.get(je).currentProgram.isReady()&&se.delete(je)}),se.size===0){ee(P);return}setTimeout(ke,10)}_e.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let hn=null;function gn(P){hn&&hn(P)}function nn(){gt.stop()}function Ut(){gt.start()}let gt=new Tm;gt.setAnimationLoop(gn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(P){hn=P,Xe.setAnimationLoop(P),P===null?gt.stop():gt.start()},Xe.addEventListener("sessionstart",nn),Xe.addEventListener("sessionend",Ut),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;let fe=Xe.enabled===!0&&Xe.isPresenting===!0,se=H!==null&&(Z===null||fe)&&H.begin(b,Z);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera($),$=Xe.getCamera()),P.isScene===!0&&P.onBeforeRender(b,P,$,Z),C=Fe.get(P,F.length),C.init($),F.push(C),be.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Y.setFromProjectionMatrix(be,Hi,$.reversedDepth),Ee=this.localClippingEnabled,Q=Be.init(this.clippingPlanes,Ee),v=he.get(P,S.length),v.init(),S.push(v),Xe.enabled===!0&&Xe.isPresenting===!0){let je=b.xr.getDepthSensingMesh();je!==null&&fn(je,$,-1/0,b.sortObjects)}fn(P,$,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(j,ne),le=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,le&&Ue.addToRenderList(v,P),this.info.render.frame++,Q===!0&&Be.beginShadows();let ee=C.state.shadowsArray;if(qe.render(ee,P,$),Q===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&H.hasRenderPass())===!1){let je=v.opaque,Ze=v.transmissive;if(C.setupLights(),$.isArrayCamera){let Qe=$.cameras;if(Ze.length>0)for(let at=0,ft=Qe.length;at<ft;at++){let We=Qe[at];Ft(je,Ze,P,We)}le&&Ue.render(P);for(let at=0,ft=Qe.length;at<ft;at++){let We=Qe[at];xn(v,P,We,We.viewport)}}else Ze.length>0&&Ft(je,Ze,P,$),le&&Ue.render(P),xn(v,P,$)}Z!==null&&V===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),se&&H.end(b),P.isScene===!0&&P.onAfterRender(b,P,$),Ke.resetDefaultState(),re=-1,ae=null,F.pop(),F.length>0?(C=F[F.length-1],Q===!0&&Be.setGlobalState(b.clippingPlanes,C.state.camera)):C=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function fn(P,$,fe,se){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)fe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)C.pushLight(P),P.castShadow&&C.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){se&&te.setFromMatrixPosition(P.matrixWorld).applyMatrix4(be);let je=Pe.update(P),Ze=P.material;Ze.visible&&v.push(P,je,Ze,fe,te.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Y.intersectsObject(P))){let je=Pe.update(P),Ze=P.material;if(se&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),te.copy(P.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),te.copy(je.boundingSphere.center)),te.applyMatrix4(P.matrixWorld).applyMatrix4(be)),Array.isArray(Ze)){let Qe=je.groups;for(let at=0,ft=Qe.length;at<ft;at++){let We=Qe[at],rt=Ze[We.materialIndex];rt&&rt.visible&&v.push(P,je,rt,fe,te.z,We)}}else Ze.visible&&v.push(P,je,Ze,fe,te.z,null)}}let ke=P.children;for(let je=0,Ze=ke.length;je<Ze;je++)fn(ke[je],$,fe,se)}function xn(P,$,fe,se){let{opaque:ee,transmissive:ke,transparent:je}=P;C.setupLightsView(fe),Q===!0&&Be.setGlobalState(b.clippingPlanes,fe),se&&we.viewport(N.copy(se)),ee.length>0&&Zt(ee,$,fe),ke.length>0&&Zt(ke,$,fe),je.length>0&&Zt(je,$,fe),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ft(P,$,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[se.id]===void 0){let rt=_e.has("EXT_color_buffer_half_float")||_e.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[se.id]=new bn(1,1,{generateMipmaps:!0,type:rt?Nn:ni,minFilter:bi,samples:Ve.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}let ke=C.state.transmissionRenderTarget[se.id],je=se.viewport||N;ke.setSize(je.z*b.transmissionResolutionScale,je.w*b.transmissionResolutionScale);let Ze=b.getRenderTarget(),Qe=b.getActiveCubeFace(),at=b.getActiveMipmapLevel();b.setRenderTarget(ke),b.getClearColor(Te),xe=b.getClearAlpha(),xe<1&&b.setClearColor(16777215,.5),b.clear(),le&&Ue.render(fe);let ft=b.toneMapping;b.toneMapping=ki;let We=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),C.setupLightsView(se),Q===!0&&Be.setGlobalState(b.clippingPlanes,se),Zt(P,fe,se),q.updateMultisampleRenderTarget(ke),q.updateRenderTargetMipmap(ke),_e.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Ot=0,Wt=$.length;Ot<Wt;Ot++){let Dt=$[Ot],{object:St,geometry:st,material:wt,group:et}=Dt;if(wt.side===wn&&St.layers.test(se.layers)){let vn=wt.side;wt.side=qn,wt.needsUpdate=!0,$t(St,fe,se,st,wt,et),wt.side=vn,wt.needsUpdate=!0,rt=!0}}rt===!0&&(q.updateMultisampleRenderTarget(ke),q.updateRenderTargetMipmap(ke))}b.setRenderTarget(Ze,Qe,at),b.setClearColor(Te,xe),We!==void 0&&(se.viewport=We),b.toneMapping=ft}function Zt(P,$,fe){let se=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,ke=P.length;ee<ke;ee++){let je=P[ee],{object:Ze,geometry:Qe,group:at}=je,ft=je.material;ft.allowOverride===!0&&se!==null&&(ft=se),Ze.layers.test(fe.layers)&&$t(Ze,$,fe,Qe,ft,at)}}function $t(P,$,fe,se,ee,ke){P.onBeforeRender(b,$,fe,se,ee,ke),P.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(b,$,fe,se,P,ke),ee.transparent===!0&&ee.side===wn&&ee.forceSinglePass===!1?(ee.side=qn,ee.needsUpdate=!0,b.renderBufferDirect(fe,$,se,ee,P,ke),ee.side=zi,ee.needsUpdate=!0,b.renderBufferDirect(fe,$,se,ee,P,ke),ee.side=wn):b.renderBufferDirect(fe,$,se,ee,P,ke),P.onAfterRender(b,$,fe,se,ee,ke)}function Rt(P,$,fe){$.isScene!==!0&&($=ve);let se=E.get(P),ee=C.state.lights,ke=C.state.shadowsArray,je=ee.state.version,Ze=ie.getParameters(P,ee.state,ke,$,fe),Qe=ie.getProgramCacheKey(Ze),at=se.programs;se.environment=P.isMeshStandardMaterial?$.environment:null,se.fog=$.fog,se.envMap=(P.isMeshStandardMaterial?Se:ue).get(P.envMap||se.environment),se.envMapRotation=se.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,at===void 0&&(P.addEventListener("dispose",nt),at=new Map,se.programs=at);let ft=at.get(Qe);if(ft!==void 0){if(se.currentProgram===ft&&se.lightsStateVersion===je)return ge(P,Ze),ft}else Ze.uniforms=ie.getUniforms(P),P.onBeforeCompile(Ze,b),ft=ie.acquireProgram(Ze,Qe),at.set(Qe,ft),se.uniforms=Ze.uniforms;let We=se.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(We.clippingPlanes=Be.uniform),ge(P,Ze),se.needsLights=Xt(P),se.lightsStateVersion=je,se.needsLights&&(We.ambientLightColor.value=ee.state.ambient,We.lightProbe.value=ee.state.probe,We.directionalLights.value=ee.state.directional,We.directionalLightShadows.value=ee.state.directionalShadow,We.spotLights.value=ee.state.spot,We.spotLightShadows.value=ee.state.spotShadow,We.rectAreaLights.value=ee.state.rectArea,We.ltc_1.value=ee.state.rectAreaLTC1,We.ltc_2.value=ee.state.rectAreaLTC2,We.pointLights.value=ee.state.point,We.pointLightShadows.value=ee.state.pointShadow,We.hemisphereLights.value=ee.state.hemi,We.directionalShadowMap.value=ee.state.directionalShadowMap,We.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,We.spotShadowMap.value=ee.state.spotShadowMap,We.spotLightMatrix.value=ee.state.spotLightMatrix,We.spotLightMap.value=ee.state.spotLightMap,We.pointShadowMap.value=ee.state.pointShadowMap,We.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=ft,se.uniformsList=null,ft}function k(P){if(P.uniformsList===null){let $=P.currentProgram.getUniforms();P.uniformsList=Ro.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function ge(P,$){let fe=E.get(P);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function Ye(P,$,fe,se,ee){$.isScene!==!0&&($=ve),q.resetTextureUnits();let ke=$.fog,je=se.isMeshStandardMaterial?$.environment:null,Ze=Z===null?b.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Zn,Qe=(se.isMeshStandardMaterial?Se:ue).get(se.envMap||je),at=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,ft=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),We=!!fe.morphAttributes.position,rt=!!fe.morphAttributes.normal,Ot=!!fe.morphAttributes.color,Wt=ki;se.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Wt=b.toneMapping);let Dt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,St=Dt!==void 0?Dt.length:0,st=E.get(se),wt=C.state.lights;if(Q===!0&&(Ee===!0||P!==ae)){let En=P===ae&&se.id===re;Be.setState(se,P,En)}let et=!1;se.version===st.__version?(st.needsLights&&st.lightsStateVersion!==wt.state.version||st.outputColorSpace!==Ze||ee.isBatchedMesh&&st.batching===!1||!ee.isBatchedMesh&&st.batching===!0||ee.isBatchedMesh&&st.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&st.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&st.instancing===!1||!ee.isInstancedMesh&&st.instancing===!0||ee.isSkinnedMesh&&st.skinning===!1||!ee.isSkinnedMesh&&st.skinning===!0||ee.isInstancedMesh&&st.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&st.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&st.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&st.instancingMorph===!1&&ee.morphTexture!==null||st.envMap!==Qe||se.fog===!0&&st.fog!==ke||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Be.numPlanes||st.numIntersection!==Be.numIntersection)||st.vertexAlphas!==at||st.vertexTangents!==ft||st.morphTargets!==We||st.morphNormals!==rt||st.morphColors!==Ot||st.toneMapping!==Wt||st.morphTargetsCount!==St)&&(et=!0):(et=!0,st.__version=se.version);let vn=st.currentProgram;et===!0&&(vn=Rt(se,$,ee));let Jn=!1,Wn=!1,pi=!1,qt=vn.getUniforms(),Vt=st.uniforms;if(we.useProgram(vn.program)&&(Jn=!0,Wn=!0,pi=!0),se.id!==re&&(re=se.id,Wn=!0),Jn||ae!==P){we.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),qt.setValue(A,"projectionMatrix",P.projectionMatrix),qt.setValue(A,"viewMatrix",P.matrixWorldInverse);let $e=qt.map.cameraPosition;$e!==void 0&&$e.setValue(A,me.setFromMatrixPosition(P.matrixWorld)),Ve.logarithmicDepthBuffer&&qt.setValue(A,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&qt.setValue(A,"isOrthographic",P.isOrthographicCamera===!0),ae!==P&&(ae=P,Wn=!0,pi=!0)}if(st.needsLights&&(wt.state.directionalShadowMap.length>0&&qt.setValue(A,"directionalShadowMap",wt.state.directionalShadowMap,q),wt.state.spotShadowMap.length>0&&qt.setValue(A,"spotShadowMap",wt.state.spotShadowMap,q),wt.state.pointShadowMap.length>0&&qt.setValue(A,"pointShadowMap",wt.state.pointShadowMap,q)),ee.isSkinnedMesh){qt.setOptional(A,ee,"bindMatrix"),qt.setOptional(A,ee,"bindMatrixInverse");let En=ee.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),qt.setValue(A,"boneTexture",En.boneTexture,q))}ee.isBatchedMesh&&(qt.setOptional(A,ee,"batchingTexture"),qt.setValue(A,"batchingTexture",ee._matricesTexture,q),qt.setOptional(A,ee,"batchingIdTexture"),qt.setValue(A,"batchingIdTexture",ee._indirectTexture,q),qt.setOptional(A,ee,"batchingColorTexture"),ee._colorsTexture!==null&&qt.setValue(A,"batchingColorTexture",ee._colorsTexture,q));let Pn=fe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&ut.update(ee,fe,vn),(Wn||st.receiveShadow!==ee.receiveShadow)&&(st.receiveShadow=ee.receiveShadow,qt.setValue(A,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(Vt.envMap.value=Qe,Vt.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&$.environment!==null&&(Vt.envMapIntensity.value=$.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=lb()),Wn&&(qt.setValue(A,"toneMappingExposure",b.toneMappingExposure),st.needsLights&&tt(Vt,pi),ke&&se.fog===!0&&Ae.refreshFogUniforms(Vt,ke),Ae.refreshMaterialUniforms(Vt,se,X,R,C.state.transmissionRenderTarget[P.id]),Ro.upload(A,k(st),Vt,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Ro.upload(A,k(st),Vt,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&qt.setValue(A,"center",ee.center),qt.setValue(A,"modelViewMatrix",ee.modelViewMatrix),qt.setValue(A,"normalMatrix",ee.normalMatrix),qt.setValue(A,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let En=se.uniformsGroups;for(let $e=0,vt=En.length;$e<vt;$e++){let Qt=En[$e];Le.update(Qt,vn),Le.bind(Qt,vn)}}return vn}function tt(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Xt(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(P,$,fe){let se=E.get(P);se.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),E.get(P.texture).__webglTexture=$,E.get(P.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,$){let fe=E.get(P);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0};let Gn=A.createFramebuffer();this.setRenderTarget=function(P,$=0,fe=0){Z=P,B=$,V=fe;let se=null,ee=!1,ke=!1;if(P){let Ze=E.get(P);if(Ze.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(A.FRAMEBUFFER,Ze.__webglFramebuffer),N.copy(P.viewport),G.copy(P.scissor),oe=P.scissorTest,we.viewport(N),we.scissor(G),we.setScissorTest(oe),re=-1;return}else if(Ze.__webglFramebuffer===void 0)q.setupRenderTarget(P);else if(Ze.__hasExternalTextures)q.rebindTextures(P,E.get(P.texture).__webglTexture,E.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let ft=P.depthTexture;if(Ze.__boundDepthTexture!==ft){if(ft!==null&&E.has(ft)&&(P.width!==ft.image.width||P.height!==ft.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(P)}}let Qe=P.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);let at=E.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(at[$])?se=at[$][fe]:se=at[$],ee=!0):P.samples>0&&q.useMultisampledRTT(P)===!1?se=E.get(P).__webglMultisampledFramebuffer:Array.isArray(at)?se=at[fe]:se=at,N.copy(P.viewport),G.copy(P.scissor),oe=P.scissorTest}else N.copy(T).multiplyScalar(X).floor(),G.copy(U).multiplyScalar(X).floor(),oe=O;if(fe!==0&&(se=Gn),we.bindFramebuffer(A.FRAMEBUFFER,se)&&we.drawBuffers(P,se),we.viewport(N),we.scissor(G),we.setScissorTest(oe),ee){let Ze=E.get(P.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ze.__webglTexture,fe)}else if(ke){let Ze=$;for(let Qe=0;Qe<P.textures.length;Qe++){let at=E.get(P.textures[Qe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Qe,at.__webglTexture,fe,Ze)}}else if(P!==null&&fe!==0){let Ze=E.get(P.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ze.__webglTexture,fe)}re=-1},this.readRenderTargetPixels=function(P,$,fe,se,ee,ke,je,Ze=0){if(!(P&&P.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&je!==void 0&&(Qe=Qe[je]),Qe){we.bindFramebuffer(A.FRAMEBUFFER,Qe);try{let at=P.textures[Ze],ft=at.format,We=at.type;if(!Ve.textureFormatReadable(ft)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(We)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-se&&fe>=0&&fe<=P.height-ee&&(P.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ze),A.readPixels($,fe,se,ee,Ne.convert(ft),Ne.convert(We),ke))}finally{let at=Z!==null?E.get(Z).__webglFramebuffer:null;we.bindFramebuffer(A.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(P,$,fe,se,ee,ke,je,Ze=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&je!==void 0&&(Qe=Qe[je]),Qe)if($>=0&&$<=P.width-se&&fe>=0&&fe<=P.height-ee){we.bindFramebuffer(A.FRAMEBUFFER,Qe);let at=P.textures[Ze],ft=at.format,We=at.type;if(!Ve.textureFormatReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,rt),A.bufferData(A.PIXEL_PACK_BUFFER,ke.byteLength,A.STREAM_READ),P.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ze),A.readPixels($,fe,se,ee,Ne.convert(ft),Ne.convert(We),0);let Ot=Z!==null?E.get(Z).__webglFramebuffer:null;we.bindFramebuffer(A.FRAMEBUFFER,Ot);let Wt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Zp(A,Wt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,rt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ke),A.deleteBuffer(rt),A.deleteSync(Wt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,$=null,fe=0){let se=Math.pow(2,-fe),ee=Math.floor(P.image.width*se),ke=Math.floor(P.image.height*se),je=$!==null?$.x:0,Ze=$!==null?$.y:0;q.setTexture2D(P,0),A.copyTexSubImage2D(A.TEXTURE_2D,fe,0,0,je,Ze,ee,ke),we.unbindTexture()};let dn=A.createFramebuffer(),_n=A.createFramebuffer();this.copyTextureToTexture=function(P,$,fe=null,se=null,ee=0,ke=null){ke===null&&(ee!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ke=ee,ee=0):ke=0);let je,Ze,Qe,at,ft,We,rt,Ot,Wt,Dt=P.isCompressedTexture?P.mipmaps[ke]:P.image;if(fe!==null)je=fe.max.x-fe.min.x,Ze=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,at=fe.min.x,ft=fe.min.y,We=fe.isBox3?fe.min.z:0;else{let Pn=Math.pow(2,-ee);je=Math.floor(Dt.width*Pn),Ze=Math.floor(Dt.height*Pn),P.isDataArrayTexture?Qe=Dt.depth:P.isData3DTexture?Qe=Math.floor(Dt.depth*Pn):Qe=1,at=0,ft=0,We=0}se!==null?(rt=se.x,Ot=se.y,Wt=se.z):(rt=0,Ot=0,Wt=0);let St=Ne.convert($.format),st=Ne.convert($.type),wt;$.isData3DTexture?(q.setTexture3D($,0),wt=A.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(q.setTexture2DArray($,0),wt=A.TEXTURE_2D_ARRAY):(q.setTexture2D($,0),wt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,$.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,$.unpackAlignment);let et=A.getParameter(A.UNPACK_ROW_LENGTH),vn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Jn=A.getParameter(A.UNPACK_SKIP_PIXELS),Wn=A.getParameter(A.UNPACK_SKIP_ROWS),pi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,Dt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Dt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,at),A.pixelStorei(A.UNPACK_SKIP_ROWS,ft),A.pixelStorei(A.UNPACK_SKIP_IMAGES,We);let qt=P.isDataArrayTexture||P.isData3DTexture,Vt=$.isDataArrayTexture||$.isData3DTexture;if(P.isDepthTexture){let Pn=E.get(P),En=E.get($),$e=E.get(Pn.__renderTarget),vt=E.get(En.__renderTarget);we.bindFramebuffer(A.READ_FRAMEBUFFER,$e.__webglFramebuffer),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Qt=0;Qt<Qe;Qt++)qt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,E.get(P).__webglTexture,ee,We+Qt),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,E.get($).__webglTexture,ke,Wt+Qt)),A.blitFramebuffer(at,ft,je,Ze,rt,Ot,je,Ze,A.DEPTH_BUFFER_BIT,A.NEAREST);we.bindFramebuffer(A.READ_FRAMEBUFFER,null),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||E.has(P)){let Pn=E.get(P),En=E.get($);we.bindFramebuffer(A.READ_FRAMEBUFFER,dn),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,_n);for(let $e=0;$e<Qe;$e++)qt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Pn.__webglTexture,ee,We+$e):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Pn.__webglTexture,ee),Vt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,En.__webglTexture,ke,Wt+$e):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,En.__webglTexture,ke),ee!==0?A.blitFramebuffer(at,ft,je,Ze,rt,Ot,je,Ze,A.COLOR_BUFFER_BIT,A.NEAREST):Vt?A.copyTexSubImage3D(wt,ke,rt,Ot,Wt+$e,at,ft,je,Ze):A.copyTexSubImage2D(wt,ke,rt,Ot,at,ft,je,Ze);we.bindFramebuffer(A.READ_FRAMEBUFFER,null),we.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Vt?P.isDataTexture||P.isData3DTexture?A.texSubImage3D(wt,ke,rt,Ot,Wt,je,Ze,Qe,St,st,Dt.data):$.isCompressedArrayTexture?A.compressedTexSubImage3D(wt,ke,rt,Ot,Wt,je,Ze,Qe,St,Dt.data):A.texSubImage3D(wt,ke,rt,Ot,Wt,je,Ze,Qe,St,st,Dt):P.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ke,rt,Ot,je,Ze,St,st,Dt.data):P.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ke,rt,Ot,Dt.width,Dt.height,St,Dt.data):A.texSubImage2D(A.TEXTURE_2D,ke,rt,Ot,je,Ze,St,st,Dt);A.pixelStorei(A.UNPACK_ROW_LENGTH,et),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,vn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Jn),A.pixelStorei(A.UNPACK_SKIP_ROWS,Wn),A.pixelStorei(A.UNPACK_SKIP_IMAGES,pi),ke===0&&$.generateMipmaps&&A.generateMipmap(wt),we.unbindTexture()},this.initRenderTarget=function(P){E.get(P).__webglFramebuffer===void 0&&q.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?q.setTextureCube(P,0):P.isData3DTexture?q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?q.setTexture2DArray(P,0):q.setTexture2D(P,0),we.unbindTexture()},this.resetState=function(){B=0,V=0,Z=null,we.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}};var ls={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ci=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},cb=new ss(-1,1,1,-1,0,1),Cf=class extends Bt{constructor(){super(),this.setAttribute("position",new pt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new pt([0,2,0,0,2,0],2))}},ub=new Cf,cs=class{constructor(e){this._mesh=new Je(ub,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Io=class extends ci{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof yt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kn.clone(e.uniforms),this.material=new yt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new cs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Ja=class extends ci{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Au=class extends ci{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ru=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new bn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Io(ls),this.copyPass.material.blending=Dn,this.clock=new br}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ja!==void 0&&(o instanceof Ja?n=!0:o instanceof Au&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Cu=class extends ci{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Oe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Pm={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Do=class s extends ci{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new bn(r,o,{type:Nn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let h=new bn(r,o,{type:Nn});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);let d=new bn(r,o,{type:Nn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=Pm;this.highPassUniforms=Kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new yt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ye(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Kn.clone(ls.uniforms),this.blendMaterial=new yt({uniforms:this.copyUniforms,vertexShader:ls.vertexShader,fragmentShader:ls.fragmentShader,premultipliedAlpha:!0,blending:Ln,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new Lt,this._fsQuad=new cs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new yt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new yt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Do.BlurDirectionX=new ye(1,0);Do.BlurDirectionY=new ye(0,1);var ja={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pu=class extends ci{constructor(){super(),this.isOutputPass=!0,this.uniforms=Kn.clone(ja.uniforms),this.material=new Mo({name:ja.name,uniforms:this.uniforms,vertexShader:ja.vertexShader,fragmentShader:ja.fragmentShader}),this._fsQuad=new cs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Yt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Tr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===za?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qa={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new lt},cameraProjectionMatrixInverse:{value:new lt},cameraWorldMatrix:{value:new lt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new D(-1,-1,-1)},sceneBoxMax:{value:new D(1,1,1)}},vertexShader:`

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
		}`},el={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Iu={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function Im(s=5){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=hb(e),n=t.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],c=2*Math.PI*a/n,l=new D(Math.cos(c),Math.sin(c),0).normalize();i[o*4]=(l.x*.5+.5)*255,i[o*4+1]=(l.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let r=new $i(i,e,e);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}function hb(s){let e=Math.floor(s)%2===0?Math.floor(s)+1:Math.floor(s),t=e*e,n=Array(t).fill(0),i=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(i===-1&&r===e?(r=e-2,i=0):(r===e&&(r=0),i<0&&(i=e-1)),n[i*e+r]!==0){r-=2,i++;continue}else n[i*e+r]=o++;r++,i--}return n}var tl={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Pf(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new ye},cameraProjectionMatrixInverse:{value:new lt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function Pf(s,e,t){let n=fb(s,e,t),i="vec3[SAMPLES](";for(let r=0;r<s;r++){let o=n[r];i+=`vec3(${o.x}, ${o.y}, ${o.z})${r<s-1?",":")"}`}return i}function fb(s,e,t){let n=[];for(let i=0;i<s;i++){let r=2*Math.PI*e*i/s,o=Math.pow(i/(s-1),t);n.push(new D(Math.cos(r),Math.sin(r),o))}return n}var Du=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,i,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(c+l)*u,d=c-h,f=l-h,m=e-d,x=t-f,g,p;m>x?(g=1,p=0):(g=0,p=1);let M=m-g+u,_=x-p+u,v=m-1+2*u,C=x-1+2*u,S=c&255,F=l&255,H=this.perm[S+this.perm[F]]%12,b=this.perm[S+g+this.perm[F+p]]%12,w=this.perm[S+1+this.perm[F+1]]%12,B=.5-m*m-x*x;B<0?n=0:(B*=B,n=B*B*this._dot(this.grad3[H],m,x));let V=.5-M*M-_*_;V<0?i=0:(V*=V,i=V*V*this._dot(this.grad3[b],M,_));let Z=.5-v*v-C*C;return Z<0?r=0:(Z*=Z,r=Z*Z*this._dot(this.grad3[w],v,C)),70*(n+i+r)}noise3d(e,t,n){let i,r,o,a,l=(e+t+n)*.3333333333333333,u=Math.floor(e+l),h=Math.floor(t+l),d=Math.floor(n+l),f=1/6,m=(u+h+d)*f,x=u-m,g=h-m,p=d-m,M=e-x,_=t-g,v=n-p,C,S,F,H,b,w;M>=_?_>=v?(C=1,S=0,F=0,H=1,b=1,w=0):M>=v?(C=1,S=0,F=0,H=1,b=0,w=1):(C=0,S=0,F=1,H=1,b=0,w=1):_<v?(C=0,S=0,F=1,H=0,b=1,w=1):M<v?(C=0,S=1,F=0,H=0,b=1,w=1):(C=0,S=1,F=0,H=1,b=1,w=0);let B=M-C+f,V=_-S+f,Z=v-F+f,re=M-H+2*f,ae=_-b+2*f,N=v-w+2*f,G=M-1+3*f,oe=_-1+3*f,Te=v-1+3*f,xe=u&255,Ie=h&255,R=d&255,X=this.perm[xe+this.perm[Ie+this.perm[R]]]%12,j=this.perm[xe+C+this.perm[Ie+S+this.perm[R+F]]]%12,ne=this.perm[xe+H+this.perm[Ie+b+this.perm[R+w]]]%12,T=this.perm[xe+1+this.perm[Ie+1+this.perm[R+1]]]%12,U=.6-M*M-_*_-v*v;U<0?i=0:(U*=U,i=U*U*this._dot3(this.grad3[X],M,_,v));let O=.6-B*B-V*V-Z*Z;O<0?r=0:(O*=O,r=O*O*this._dot3(this.grad3[j],B,V,Z));let Y=.6-re*re-ae*ae-N*N;Y<0?o=0:(Y*=Y,o=Y*Y*this._dot3(this.grad3[ne],re,ae,N));let Q=.6-G*G-oe*oe-Te*Te;return Q<0?a=0:(Q*=Q,a=Q*Q*this._dot3(this.grad3[T],G,oe,Te)),32*(i+r+o+a)}noise4d(e,t,n,i){let r=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20,u,h,d,f,m,x=(e+t+n+i)*c,g=Math.floor(e+x),p=Math.floor(t+x),M=Math.floor(n+x),_=Math.floor(i+x),v=(g+p+M+_)*l,C=g-v,S=p-v,F=M-v,H=_-v,b=e-C,w=t-S,B=n-F,V=i-H,Z=b>w?32:0,re=b>B?16:0,ae=w>B?8:0,N=b>V?4:0,G=w>V?2:0,oe=B>V?1:0,Te=Z+re+ae+N+G+oe,xe=o[Te][0]>=3?1:0,Ie=o[Te][1]>=3?1:0,R=o[Te][2]>=3?1:0,X=o[Te][3]>=3?1:0,j=o[Te][0]>=2?1:0,ne=o[Te][1]>=2?1:0,T=o[Te][2]>=2?1:0,U=o[Te][3]>=2?1:0,O=o[Te][0]>=1?1:0,Y=o[Te][1]>=1?1:0,Q=o[Te][2]>=1?1:0,Ee=o[Te][3]>=1?1:0,be=b-xe+l,me=w-Ie+l,te=B-R+l,ve=V-X+l,le=b-j+2*l,Re=w-ne+2*l,A=B-T+2*l,de=V-U+2*l,_e=b-O+3*l,Ve=w-Y+3*l,we=B-Q+3*l,L=V-Ee+3*l,E=b-1+4*l,q=w-1+4*l,ue=B-1+4*l,Se=V-1+4*l,pe=g&255,Ge=p&255,Pe=M&255,ie=_&255,Ae=a[pe+a[Ge+a[Pe+a[ie]]]]%32,he=a[pe+xe+a[Ge+Ie+a[Pe+R+a[ie+X]]]]%32,Fe=a[pe+j+a[Ge+ne+a[Pe+T+a[ie+U]]]]%32,Be=a[pe+O+a[Ge+Y+a[Pe+Q+a[ie+Ee]]]]%32,qe=a[pe+1+a[Ge+1+a[Pe+1+a[ie+1]]]]%32,Ue=.6-b*b-w*w-B*B-V*V;Ue<0?u=0:(Ue*=Ue,u=Ue*Ue*this._dot4(r[Ae],b,w,B,V));let ut=.6-be*be-me*me-te*te-ve*ve;ut<0?h=0:(ut*=ut,h=ut*ut*this._dot4(r[he],be,me,te,ve));let W=.6-le*le-Re*Re-A*A-de*de;W<0?d=0:(W*=W,d=W*W*this._dot4(r[Fe],le,Re,A,de));let He=.6-_e*_e-Ve*Ve-we*we-L*L;He<0?f=0:(He*=He,f=He*He*this._dot4(r[Be],_e,Ve,we,L));let Ne=.6-E*E-q*q-ue*ue-Se*Se;return Ne<0?m=0:(Ne*=Ne,m=Ne*Ne*this._dot4(r[qe],E,q,ue,Se)),27*(u+h+d+f+m)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,i){return e[0]*t+e[1]*n+e[2]*i}_dot4(e,t,n,i,r){return e[0]*t+e[1]*n+e[2]*i+e[3]*r}};var nl=class s extends ci{constructor(e,t,n=512,i=512,r,o,a){super(),this.width=n,this.height=i,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=Im(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new bn(this.width,this.height,{type:Nn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new yt({defines:Object.assign({},Qa.defines),uniforms:Kn.clone(Qa.uniforms),vertexShader:Qa.vertexShader,fragmentShader:Qa.fragmentShader,blending:Dn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new wa,this.normalMaterial.blending=Dn,this.pdMaterial=new yt({defines:Object.assign({},tl.defines),uniforms:Kn.clone(tl.uniforms),vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new yt({defines:Object.assign({},el.defines),uniforms:Kn.clone(el.uniforms),vertexShader:el.vertexShader,fragmentShader:el.fragmentShader,blending:Dn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new yt({uniforms:Kn.clone(ls.uniforms),vertexShader:ls.vertexShader,fragmentShader:ls.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Ua,blendDst:Sr,blendEquation:xi,blendSrcAlpha:Na,blendDstAlpha:Sr,blendEquationAlpha:xi}),this.blendMaterial=new yt({uniforms:Kn.clone(Iu.uniforms),vertexShader:Iu.vertexShader,fragmentShader:Iu.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:_c,blendSrc:Ua,blendDst:Sr,blendEquation:xi,blendSrcAlpha:Na,blendDstAlpha:Sr,blendEquationAlpha:xi}),this._fsQuad=new cs(null),this._originalClearColor=new Oe,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){e!==void 0?(this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1):(this.depthTexture=new Ki,this.depthTexture.format=rs,this.depthTexture.type=Ys,this.normalRenderTarget=new bn(this.width,this.height,{minFilter:Mn,magFilter:Mn,type:Nn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Pf(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case s.OUTPUT.Off:break;case s.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case s.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Dn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,i,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Du,n=e*e*4,i=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let c=o,l=a;i[(o*e+a)*4]=(t.noise(c,l)*.5+.5)*255,i[(o*e+a)*4+1]=(t.noise(c+e,l)*.5+.5)*255,i[(o*e+a)*4+2]=(t.noise(c,l+e)*.5+.5)*255,i[(o*e+a)*4+3]=(t.noise(c+e,l+e)*.5+.5)*255}let r=new $i(i,e,e,li,ni);return r.wrapS=Tn,r.wrapT=Tn,r.needsUpdate=!0,r}};nl.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};function On(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Bt,l=0;for(let u=0;u<s.length;++u){let h=s[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,u),l+=f}}if(t){let u=0,h=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=s[d].attributes.position.count}c.setIndex(h)}for(let u in r){let h=Dm(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<o[u].length;++x)f.push(o[u][x][d]);let m=Dm(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}return c}function Dm(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new kt(o,t,n),c=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute){let h=c/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){let x=u.getComponent(d,m);a.setComponent(d+h,m,x)}}else o.set(u.array,c);c+=u.count*t}return i!==void 0&&(a.gpuType=i),a}function If(s,e){if(e===rf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===wo||e===Ya){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===wo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var il=class s extends Je{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this.camera=new yn;let n=this,i=t.color!==void 0?new Oe(t.color):new Oe(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,c=t.shader||s.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,u=new Ri,h=new D,d=new D,f=new D,m=new lt,x=new D(0,0,-1),g=new Kt,p=new D,M=new D,_=new Kt,v=new lt,C=this.camera,S=new bn(r,o,{samples:l,type:Nn}),F=new yt({name:c.name!==void 0?c.name:"unspecified",uniforms:Kn.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});F.uniforms.tDiffuse.value=S.texture,F.uniforms.color.value=i,F.uniforms.textureMatrix.value=v,this.material=F,this.onBeforeRender=function(H,b,w){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(w.matrixWorld),m.extractRotation(n.matrixWorld),h.set(0,0,1),h.applyMatrix4(m),p.subVectors(d,f),p.dot(h)>0===!0&&this.forceUpdate===!1)return;p.reflect(h).negate(),p.add(d),m.extractRotation(w.matrixWorld),x.set(0,0,-1),x.applyMatrix4(m),x.add(f),M.subVectors(d,x),M.reflect(h).negate(),M.add(d),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(m),C.up.reflect(h),C.lookAt(M),C.far=w.far,C.updateMatrixWorld(),C.projectionMatrix.copy(w.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(C.projectionMatrix),v.multiply(C.matrixWorldInverse),v.multiply(n.matrixWorld),u.setFromNormalAndCoplanarPoint(h,d),u.applyMatrix4(C.matrixWorldInverse),g.set(u.normal.x,u.normal.y,u.normal.z,u.constant);let V=C.projectionMatrix;_.x=(Math.sign(g.x)+V.elements[8])/V.elements[0],_.y=(Math.sign(g.y)+V.elements[9])/V.elements[5],_.z=-1,_.w=(1+V.elements[10])/V.elements[14],g.multiplyScalar(2/g.dot(_)),V.elements[2]=g.x,V.elements[6]=g.y,V.elements[10]=g.z+1-a,V.elements[14]=g.w,n.visible=!1;let Z=H.getRenderTarget(),re=H.xr.enabled,ae=H.shadowMap.autoUpdate;H.xr.enabled=!1,H.shadowMap.autoUpdate=!1,H.setRenderTarget(S),H.state.buffers.depth.setMask(!0),H.autoClear===!1&&H.clear(),H.render(b,C),H.xr.enabled=re,H.shadowMap.autoUpdate=ae,H.setRenderTarget(Z);let N=w.viewport;N!==void 0&&H.state.viewport(N),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return S},this.dispose=function(){S.dispose(),n.material.dispose()}}};il.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
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

		}`};var Lu=null;function db(){if(Lu)return Lu;let s=document.createElement("canvas");s.width=s.height=128;let e=s.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,0.45)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Lu=new yi(s),Lu}function Df(s,e,t=.7){let n=new ca(new mo({map:db(),color:s,transparent:!0,opacity:t,blending:Ln,depthWrite:!1,toneMapped:!1}));return n.scale.setScalar(e),n}var si='"Hiragino Kaku Gothic ProN","Hiragino Sans","Yu Gothic","Noto Sans JP","Noto Sans CJK JP","Meiryo","MS Gothic",sans-serif';function Nr(s){let e=s%2147483647;return e<=0&&(e+=2147483646),()=>(e=e*16807%2147483647)/2147483647}function An(s,e,t){let n=document.createElement("canvas");return n.width=Math.max(2,Math.round(s)),n.height=Math.max(2,Math.round(e)),t(n.getContext("2d")),n}function Cn(s,e={}){let t=new yi(s);return e.srgb!==!1&&(t.colorSpace=pn),e.repeat&&(t.wrapS=t.wrapT=Tn),t.anisotropy=e.aniso??4,t.generateMipmaps=!0,t.minFilter=bi,t}var Ds={bays:6,floors:8,bayW:3.2,floorH:3.6},Lm=Ds.bays*Ds.bayW,Nf=Ds.floors*Ds.floorH;function Nm(s,e,t=1){let n=Math.round(512*t),i=Math.round(512*t),r=n/Ds.bays,o=i/Ds.floors,a=[],c=Nr(e);for(let f=0;f<Ds.floors;f++)for(let m=0;m<Ds.bays;m++)a.push({x:m*r,y:f*o,state:c(),r:c(),r2:c()});let l=s==="office"?.2:s==="glass"?.14:s==="old"?.1:.12,u=(f,m)=>{let x={office:"#171d2b",resi:"#1b1a24",glass:"#0b1424",old:"#201c20"}[s];f.fillStyle=m?"#000":x,f.fillRect(0,0,n,i);for(let g of a){let p=g.x+r*.1,M=g.y+o*(s==="glass"?.06:.14),_=r*(s==="glass"?.84:s==="office"?.78:.56),v=o*(s==="glass"?.8:s==="office"?.62:.5),C=g.state<l,S=g.r;if(m){if(C){let F,H=.3+g.r2*.4;if(S<.12?F="#ffbf80":S<.9?(F="#a8c8e0",H*=.8):F="#4a8cff",f.globalAlpha=H,f.fillStyle=F,f.fillRect(p,M,_,v),f.globalAlpha=1,f.fillStyle="rgba(0,0,0,0.5)",S>=.12&&S<.5&&(f.fillRect(p,M+v*.62,_*.4,v*.38),f.fillRect(p+_*.55,M+v*.7,_*.45,v*.3)),g.r2>.55&&S<.84){let b=p+_*(.25+(g.r2-.55)*1.2);f.fillStyle="rgba(0,0,0,0.82)",f.beginPath(),f.arc(b,M+v*.42,v*.11,0,Math.PI*2),f.fill(),f.fillRect(b-v*.14,M+v*.53,v*.28,v*.47)}if(g.r2<.2&&s!=="glass"){f.fillStyle="rgba(0,0,0,0.65)";let b=Math.max(3,Math.round(v/(3*t)));for(let w=0;w<b*.6;w++)f.fillRect(p,M+w*(v/b),_,v/b*.55)}(s==="office"||s==="glass")&&(f.fillStyle="rgba(0,0,0,0.9)",f.fillRect(p+_/2-t,M,2*t,v))}}else{let F=f.createLinearGradient(0,M,0,M+v);F.addColorStop(0,s==="glass"?"#243a5c":"#1a2438"),F.addColorStop(1,"#070a12"),f.fillStyle=C?"#1b2335":F,f.fillRect(p,M,_,v),f.strokeStyle="#0a0d14",f.lineWidth=Math.max(1,t*2),f.strokeRect(p,M,_,v),(s==="office"||s==="glass")&&(f.beginPath(),f.moveTo(p+_/2,M),f.lineTo(p+_/2,M+v),f.stroke()),f.fillStyle="#2b3345",f.fillRect(g.x,g.y+o-4*t,r,4*t),f.fillStyle="#10131c",f.fillRect(g.x,g.y+o-1.5*t,r,1.5*t),(s==="resi"||s==="old")&&(g.r2<.34&&(f.fillStyle="#394155",f.fillRect(p-4*t,M+v+2*t,_+8*t,4*t),f.fillStyle="#0c0f16",f.fillRect(p-4*t,M+v-7*t,_+8*t,2*t)),g.r2>.62&&g.r2<.8&&(f.fillStyle="#58606f",f.fillRect(p+_*.15,M+v+3*t,_*.7,8*t),f.fillStyle="#272c37",f.fillRect(p+_*.2,M+v+5*t,_*.5,4*t))),s==="old"&&g.r2>.94&&(f.fillStyle="#3b2432",f.fillRect(p,M,_,v))}}if(!m){f.fillStyle="rgba(255,255,255,0.025)";for(let g=0;g<=Ds.bays;g++)f.fillRect(g*r-t,0,2*t,i);if(s==="glass"){let g=f.createLinearGradient(0,0,n,i);g.addColorStop(0,"rgba(120,170,255,0.09)"),g.addColorStop(.5,"rgba(0,0,0,0)"),g.addColorStop(1,"rgba(255,120,200,0.07)"),f.fillStyle=g,f.fillRect(0,0,n,i)}}},h=Cn(An(n,i,f=>u(f,!1)),{repeat:!0}),d=Cn(An(n,i,f=>u(f,!0)),{repeat:!0});return{map:h,em:d}}var Uf={w:16,h:4.5};function Um(s,e=1){let t=Math.round(1024*e),n=Math.round(288*e),i=Nr(s),r=["\u30CD\u30AA\u9EBA","\u30BC\u30ED\u85AC\u5C40","\u30B3\u30A4\u30F3\u5802","\u713C\u304D\u9CE5","\u6708\u5F71","\u96FB\u8133\u5802","\u30DF\u30E9\u30A4\u6E6F","\u30AB\u30E9\u30AA\u30B1"],o=["#5fc8e0","#3fa8ff","#5fc8e0","#ff9a4a","#ff3a4a","#4a8cff"],a=Array.from({length:4},()=>({hue:o[Math.floor(i()*o.length)],shut:i()<.22,name:r[Math.floor(i()*r.length)],awn:i()<.6})),c=(l,u)=>{l.fillStyle=u?"#000":"#14141c",l.fillRect(0,0,t,n);let h=t/4;a.forEach((d,f)=>{let m=f*h;if(d.shut)if(u)l.fillStyle="rgba(255,60,190,0.35)",l.fillRect(m+h*.2,n*.4,h*.5,n*.18);else{l.fillStyle="#2a2d36",l.fillRect(m+h*.08,n*.2,h*.84,n*.72),l.fillStyle="#1c1e26";for(let x=n*.22;x<n*.9;x+=5*e)l.fillRect(m+h*.08,x,h*.84,1.5*e);l.fillStyle="#6a2c7a",l.fillRect(m+h*.2,n*.4,h*.5,n*.18)}else{let x=m+h*.08,g=n*.22,p=h*.84,M=n*.7;if(!u)l.fillStyle="#0a0c12",l.fillRect(x,g,p,M);else{let _=l.createLinearGradient(0,g,0,g+M);_.addColorStop(0,d.hue),_.addColorStop(1,"rgba(0,0,0,0.25)"),l.globalAlpha=.85,l.fillStyle=_,l.fillRect(x,g,p,M),l.globalAlpha=1,l.fillStyle="rgba(0,0,0,0.55)";for(let v=0;v<3;v++)l.fillRect(x+4*e,g+M*(.18+v*.22),p-8*e,2*e);l.fillStyle="rgba(0,0,0,0.7)",l.fillRect(x,g+M*.72,p,M*.28),l.beginPath(),l.arc(x+p*.62,g+M*.42,M*.08,0,Math.PI*2),l.fill(),l.fillRect(x+p*.62-M*.1,g+M*.5,M*.2,M*.25)}l.strokeStyle=u?"#000":"#232734",l.lineWidth=3*e,l.strokeRect(x,g,p,M)}if(d.awn&&!u)for(let x=0;x<8;x++)l.fillStyle=x%2?"#7a1f2c":"#d9d2c4",l.fillRect(m+h*.04+x*h*.92/8,n*.12,h*.92/8,n*.1);l.font=`900 ${n*.14}px ${si}`,l.textAlign="center",l.textBaseline="middle",u?(l.shadowColor=d.hue,l.shadowBlur=8*e,l.fillStyle=d.hue,l.fillText(d.name,m+h/2,n*.07),l.shadowBlur=0):(l.fillStyle="#05060a",l.fillRect(m+h*.1,0,h*.8,n*.14))})};return{map:Cn(An(t,n,l=>c(l,!1)),{repeat:!0}),em:Cn(An(t,n,l=>c(l,!0)),{repeat:!0})}}var Lr=8,Lf=4,sl=[{t:"\u30CD\u30AA\u30F3\u9152\u5834",c:"#2ec8e0"},{t:"\u591C\u660E\u3051\u9EBA",c:"#ff9a3a"},{t:"\u30DF\u30E9\u30A4\u6E6F",c:"#3fa8ff"},{t:"\u96FB\u8133\u30AB\u30D5\u30A7",c:"#2ec8e0"},{t:"\u30BC\u30ED\u85AC\u5C40",c:"#3fb8d8"},{t:"\u30B3\u30A4\u30F3\u5802",c:"#ff9a3a"},{t:"\u6708\u5F71\u30D0\u30FC",c:"#3a7bff"},{t:"\u30C8\u30FC\u30AF\u30F3\u5E02\u5834",c:"#ff2a46"},{t:"\u30CB\u30F3\u30B8\u30E3\u5802",c:"#ff2a46",sub:"NPG"},{t:"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6",c:"#ff2a3a",sub:"nSLAVE"},{t:"bWalletX",c:"#4da3ff",latin:!0},{t:"TOKENBLASTER",c:"#ff9a3a",latin:!0},{t:"NPG",c:"#ff2a46",latin:!0},{t:"\u713C\u304D\u9CE5",c:"#ff9a3a"},{t:"\u30AB\u30E9\u30AA\u30B1",c:"#3a7bff"},{t:"\u4E8C\u5341\u56DB\u6642\u9593",c:"#6fd8e8"},{t:"\u30B2\u30FC\u30E0\u8857",c:"#2ec8e0"},{t:"\u30B9\u30B7\u30FB\u30BC\u30ED",c:"#ff2a46"},{t:"\u30DB\u30C6\u30EB\u6708\u5149",c:"#6fb0ff"},{t:"\u4EBA\u5DE5\u5929\u4F7F",c:"#2ec8e0"},{t:"\u96FB\u6C17\u8857",c:"#3fa8ff"},{t:"BLOCK 21",c:"#27d8f0",latin:!0},{t:"\u591C\u52E4",c:"#ff2a46"},{t:"\u9EBB\u96C0",c:"#3fb8d8"},{t:"\u30D3\u30C3\u30C8\u30B3\u30A4\u30F3",c:"#ff9a3a"},{t:"\u4EEE\u60F3\u901A\u8CA8",c:"#2ec8e0"},{t:"\u5149\u306E\u5EAD",c:"#8fd8e8"},{t:"\u9244\u9AA8\u9152\u5834",c:"#3a7bff"},{t:"\u30B5\u30A4\u30D0\u30FC\u6574\u4F53",c:"#3a7bff"},{t:"\u96E8\u5BBF\u308A",c:"#3fa8ff"},{t:"\u30C9\u30ED\u30FC\u30F3\u4FBF",c:"#2ec8e0"},{t:"\u672A\u6765\u5802",c:"#3fa8ff"}];function Fm(s=1){let e=128*s,t=512*s,n=e*Lr,i=t*Lf,r=An(n,i,o=>{o.fillStyle="#000",o.fillRect(0,0,n,i),sl.forEach((a,c)=>{let l=c%Lr,u=Math.floor(c/Lr),h=l*e,d=u*t;if(o.save(),o.translate(h,d),o.fillStyle="rgba(8,6,16,0.82)",o.fillRect(8*s,6*s,e-16*s,t-12*s),o.shadowColor=a.c,o.shadowBlur=14*s,o.strokeStyle=a.c,o.lineWidth=4*s,o.strokeRect(12*s,10*s,e-24*s,t-20*s),o.lineWidth=1.5*s,o.strokeRect(19*s,17*s,e-38*s,t-34*s),o.fillStyle=a.c,o.textAlign="center",o.textBaseline="middle",a.latin){o.save(),o.translate(e/2,t/2),o.rotate(-Math.PI/2);let f=Math.min(76*s,(t-70*s)/(a.t.length*.62));o.font=`900 ${f}px Impact, "Arial Black", sans-serif`,o.fillText(a.t,0,0),o.restore()}else{let f=[...a.t],m=a.sub?80*s:0,x=t-70*s-m,g=Math.min(74*s,x/f.length);o.font=`900 ${g}px ${si}`,f.forEach((p,M)=>o.fillText(p,e/2,36*s+g*(M+.55))),a.sub&&(o.save(),o.translate(e/2,t-44*s-m/2),o.rotate(-Math.PI/2),o.font=`800 ${Math.min(24*s,(m+20*s)/(a.sub.length*.7))}px Arial, sans-serif`,o.fillText(a.sub,0,0),o.restore())}o.shadowBlur=8*s,o.fillStyle="#fff";for(let f=0;f<9;f++)o.fillRect(e/2-1.5*s,24*s+f*((t-60*s)/8),3*s,3*s);o.restore()})});return{texture:Cn(r,{aniso:4}),rect:o=>[o%Lr/Lr,1-(Math.floor(o/Lr)+1)/Lf,1/Lr,1/Lf]}}var $s=4,Nu=2;function Om(s=1){let e=512*s,t=An(e*$s,e*Nu,n=>{n.fillStyle="#000",n.fillRect(0,0,e*$s,e*Nu);let i=(o,a)=>{n.save(),n.translate(o%$s*e,Math.floor(o/$s)*e),n.beginPath(),n.rect(0,0,e,e),n.clip(),n.scale(s,s),a(n),n.restore()},r=(o,a,c,l,u,h=`900 ${l}px ${si}`,d=20)=>{o.font=h,o.textAlign="center",o.textBaseline="middle",o.shadowColor=u,o.shadowBlur=d,o.fillStyle=u,o.fillText(a,256,c),o.shadowBlur=0};i(0,o=>{o.strokeStyle="#ff3226",o.lineWidth=8,o.shadowColor="#ff2a1a",o.shadowBlur=24,o.beginPath(),o.ellipse(256,190,170,86,0,0,Math.PI*2),o.stroke(),o.fillStyle="#ff3a2a",o.beginPath(),o.arc(256,190,48,0,Math.PI*2),o.fill(),o.fillStyle="#000",o.fillRect(250,142,12,96),o.shadowBlur=0,r(o,"nSLAVE",340,64,"#f4f7ff",'900 64px "Arial Black", Impact, sans-serif',14),r(o,"T E R R O R N O D E",400,28,"#ff5646","700 28px Arial, sans-serif",10),r(o,"\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",456,30,"#ffb0a8",`700 30px ${si}`,8)}),i(1,o=>{r(o,"TOKEN",190,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(o,"BLASTER",300,110,"#ffb800",'900 italic 110px Impact, "Arial Black", sans-serif'),r(o,"\u30C8\u30FC\u30AF\u30F3\u30D6\u30E9\u30B9\u30BF\u30FC",400,40,"#ffe27a",`900 40px ${si}`,12),r(o,"\u6483\u3066\u3002\u30D6\u30ED\u30C3\u30AF\u3092\u3002",456,30,"#ff8a3a",`700 30px ${si}`,8)}),i(2,o=>{o.strokeStyle="#4da3ff",o.lineWidth=10,o.shadowColor="#2f7bff",o.shadowBlur=22,o.beginPath(),o.roundRect(150,70,212,168,28),o.stroke(),o.beginPath(),o.moveTo(150,120),o.lineTo(362,120),o.stroke(),o.shadowBlur=0,r(o,"bWalletX",340,94,"#8fc4ff",'900 94px "Arial Black", Impact, sans-serif',18),r(o,"\u30D3\u30FC\u30FB\u30A6\u30A9\u30EC\u30C3\u30C8",424,38,"#cfe4ff",`700 38px ${si}`,10)}),i(3,o=>{r(o,"NPG",200,190,"#ff2a46",'900 italic 190px Impact, "Arial Black", sans-serif',28),r(o,"NINJA PUNK GIRLS",340,44,"#ffc0c8","800 44px Arial, sans-serif",10),r(o,"\u30CB\u30F3\u30B8\u30E3\u30FB\u30D1\u30F3\u30AF\u30FB\u30AC\u30FC\u30EB\u30BA",410,32,"#ff7a88",`700 32px ${si}`,8)}),i(4,o=>{r(o,"NEO TOKYO",190,86,"#2ec8e0",'900 86px "Arial Black", Impact, sans-serif',24),r(o,"2048",300,150,"#ff2a46",'900 150px "Arial Black", Impact, sans-serif',26),r(o,"\u30CD\u30AA\u6771\u4EAC",410,66,"#cfeaf4",`900 66px ${si}`,14)}),i(5,o=>{r(o,"nSLAVE",110,58,"#f4f7ff",'900 58px "Arial Black", Impact, sans-serif',16),r(o,"NOW PATENTED:",214,40,"#ff5646","800 40px Arial, sans-serif",10),r(o,"YOUR SOUL.",290,84,"#ff2a3a",'900 84px "Arial Black", Impact, sans-serif',24),r(o,"\u3042\u306A\u305F\u306E\u9B42\u306B\u7279\u8A31\u3092",400,44,"#ffb0a8",`800 44px ${si}`,10),r(o,"terms apply \xB7 see you in court",462,22,"#8a98a8","600 22px Arial, sans-serif",0)}),i(6,o=>{r(o,"nSLAVE",84,42,"#f4f7ff",'900 42px "Arial Black", Impact, sans-serif',12),r(o,"SOUL",190,118,"#ff2a3a",'900 118px "Arial Black", Impact, sans-serif',24),r(o,"CHAIN\u2122",300,96,"#2ec8e0",'900 96px "Arial Black", Impact, sans-serif',22),r(o,"(chain of tools)",380,30,"#ffc0b8","italic 700 30px Arial, sans-serif",8),r(o,"\u30BD\u30A6\u30EB\u30C1\u30A7\u30FC\u30F3",450,42,"#80d8e8",`800 42px ${si}`,10)}),i(7,o=>{r(o,"nSLAVE",96,50,"#f4f7ff",'900 50px "Arial Black", Impact, sans-serif',14),r(o,"100% OPEN SOURCE",190,46,"#2ec8e0","800 46px Arial, sans-serif",12),r(o,"BUILD ON ANY CHAIN",262,38,"#c0e8f0","700 38px Arial, sans-serif",8),r(o,"AS LONG AS IT\u2019S BSV",330,40,"#ff9a3a","800 40px Arial, sans-serif",12),r(o,"\u3069\u306E\u30C1\u30A7\u30FC\u30F3\u3067\u3082\u3002BSV\u306A\u3089\u3002",420,34,"#80d8e8",`700 34px ${si}`,8)})});return{texture:Cn(t,{aniso:4}),rect:n=>[n%$s/$s,1-(Math.floor(n/$s)+1)/Nu,1/$s,1/Nu]}}function Bm(s=1){let e=384*s,t=256*s,n=[{c:"#2ec8e0",name:"\u30CD\u30AA\u8336",cans:["#ff4a4a","#e8b040","#5fc8e0","#4a7cd8"]},{c:"#3a8cff",name:"\u30BC\u30ED\u6C34",cans:["#8fd8e8","#d8e8f0","#4a7cd8","#ff9a3a"]},{c:"#ff9a3a",name:"\u96FB\u6C60\u30FB\u9EBA",cans:["#ff8a3a","#ff3b3b","#5fc8e0","#e6e6e6"]}],i=(r,o)=>{r.fillStyle=o?"#000":"#1b1e27",r.fillRect(0,0,e,t),n.forEach((a,c)=>{let l=c*128*s;r.fillStyle=o?a.c:"#222633",r.fillRect(l+8*s,8*s,112*s,30*s),r.fillStyle=o?"#000":a.c,r.font=`900 ${20*s}px ${si}`,r.textAlign="center",r.textBaseline="middle",r.fillText(a.name,l+64*s,24*s),r.fillStyle=o?"rgba(255,255,255,0.4)":"#0b0d13",r.fillRect(l+8*s,44*s,112*s,140*s);for(let u=0;u<4;u++)for(let h=0;h<5;h++)r.fillStyle=a.cans[(u+h)%4],r.globalAlpha=o?.9:.55,r.fillRect(l+(14+h*21)*s,(50+u*33)*s,14*s,26*s),r.globalAlpha=1;for(let u=0;u<5;u++)r.fillStyle=o?a.c:"#3a3f4e",r.fillRect(l+(14+u*21)*s,192*s,14*s,8*s);r.fillStyle=o?"#000":"#07080c",r.fillRect(l+20*s,214*s,88*s,28*s)})};return{map:Cn(An(e,t,r=>i(r,!1))),em:Cn(An(e,t,r=>i(r,!0)))}}function Hm(s,e,t,n,i=1){let r=2048*i,o=512*i,a=Nr(s),c=An(r,o,u=>{u.clearRect(0,0,r,o);let h=0;for(;h<r;){let f=(30+a()*90)*i,m=(60+Math.pow(a(),1.6)*380)*i;u.fillStyle=e,u.fillRect(h,o-m,f,m),a()<.35&&u.fillRect(h+f*.2,o-m-40*i*a(),f*.6,40*i),a()<.18&&u.fillRect(h+f*.48,o-m-70*i,3*i,70*i);for(let x=o-m+6*i;x<o-4*i;x+=9*i)for(let g=h+4*i;g<h+f-4*i;g+=7*i)if(a()<n){let p=a();u.fillStyle=p>.93?"#ff6a6a":p>.82?"#ffc890":p>.3?"#8fb8e0":"#5fd0e0",u.globalAlpha=.35+a()*.5,u.fillRect(g,x,3*i,4*i),u.globalAlpha=1}if(a()<.22){let x=["#ff2a46","#2ec8e0","#3a8cff","#2ec8e0"][Math.floor(a()*4)];u.fillStyle=x,u.globalAlpha=.9,u.fillRect(h+f-6*i,o-m+18*i,4*i,(50+a()*100)*i),u.globalAlpha=1}m>300*i&&a()<.7&&(u.fillStyle="#ff3030",u.fillRect(h+f*.5-2*i,o-m-3*i,4*i,4*i)),h+=f+a()*6*i}let d=u.createLinearGradient(0,0,0,o);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,t),u.globalCompositeOperation="source-atop",u.fillStyle=d,u.fillRect(0,0,r,o),u.globalCompositeOperation="source-over"}),l=Cn(c,{repeat:!1});return l.wrapS=Tn,l}function zm(s=1){let e=1024*s,t=1024*s,n=16,i=20,r=Nr(77),o=[];for(let c=0;c<n*i;c++)o.push(r());let a=(c,l)=>{c.fillStyle=l?"#000":"#08101e",c.fillRect(0,0,e,t);let u=e/n,h=t/i;for(let d=0;d<i;d++)for(let f=0;f<n;f++){let m=o[d*n+f];if(l)m>.88&&(c.globalAlpha=.25+(m-.88)*2.2,c.fillStyle=m>.97?"#ffc890":"#9fc4e8",c.fillRect(f*u+2,d*h+2,u-4,h*.78),c.globalAlpha=1);else{let x=c.createLinearGradient(f*u,d*h,f*u+u,d*h+h);x.addColorStop(0,"#16294a"),x.addColorStop(1,"#070d1a"),c.fillStyle=x,c.fillRect(f*u+1,d*h+1,u-2,h*.82),c.fillStyle="#0e1626",c.fillRect(f*u,d*h+h*.84,u,h*.16)}}c.strokeStyle=l?"#000":"#1b2740",c.lineWidth=Math.max(1,2*s);for(let d=0;d<=n;d++)c.beginPath(),c.moveTo(d*(e/n),0),c.lineTo(d*(e/n),t),c.stroke();for(let d=0;d<=i;d++)c.beginPath(),c.moveTo(0,d*(t/i)),c.lineTo(e,d*(t/i)),c.stroke()};return{map:Cn(An(e,t,c=>a(c,!1)),{repeat:!0,aniso:8}),em:Cn(An(e,t,c=>a(c,!0)),{repeat:!0,aniso:8})}}function km(s=1){let e=1024*s,t=256*s,n=An(e,t,i=>{let r=i.createLinearGradient(0,0,0,t);r.addColorStop(0,"#fff2d6"),r.addColorStop(.55,"#ffd9a0"),r.addColorStop(1,"#a8764a"),i.fillStyle=r,i.fillRect(0,0,e,t),i.fillStyle="rgba(255,255,255,0.9)";for(let o=0;o<8;o++)i.fillRect(o*(e/8)+e/32,8*s,e/16,6*s);i.fillStyle="rgba(40,24,14,0.55)";for(let o=0;o<=16;o++)i.fillRect(o*(e/16)-s,0,2*s,t);i.fillStyle="rgba(60,30,20,0.75)",i.fillRect(e*.3,t*.62,e*.4,t*.14),i.fillStyle="rgba(20,10,6,0.85)";for(let o of[.12,.22,.4,.58,.77,.9])i.beginPath(),i.arc(e*o,t*.46,t*.04,0,Math.PI*2),i.fill(),i.fillRect(e*o-t*.05,t*.5,t*.1,t*.34);i.fillStyle="#240406",i.fillRect(e*.38,t*.1,e*.24,t*.36),i.fillStyle="#ff3226",i.beginPath(),i.ellipse(e*.5,t*.28,e*.07,t*.1,0,0,Math.PI*2),i.fill(),i.fillStyle="#000",i.fillRect(e*.498,t*.19,e*.004,t*.18)});return Cn(n)}var Uu=null;function rl(){return Uu||(Uu=Cn(An(128,128,s=>{let e=s.createRadialGradient(64,64,0,64,64,64);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.55)"),e.addColorStop(.6,"rgba(255,255,255,0.12)"),e.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=e,s.fillRect(0,0,128,128)}),{srgb:!1}),Uu)}var Fu=null;function Vm(){return Fu||(Fu=Cn(An(128,128,s=>{s.strokeStyle="#fff",s.lineWidth=5,s.beginPath(),s.arc(64,64,52,0,Math.PI*2),s.stroke()}),{srgb:!1}),Fu)}function Gm(s,e=1){let t=Math.round(1024*e),n=Math.round(288*e),i=Nr(s),r=Array.from({length:4},()=>{let a=i();return{kind:a<.5?"shutter":a<.72?"half":a<.88?"door":"blank",tone:26+Math.floor(i()*18),grime:i()}}),o=(a,c)=>{a.fillStyle=c?"#000":"#1c1d21",a.fillRect(0,0,t,n);let l=t/4;r.forEach((u,h)=>{let d=h*l,f=l*.06;if(c){if(u.kind==="half"){let g=a.createLinearGradient(0,n*.72,0,n);g.addColorStop(0,"rgba(255,240,215,0.15)"),g.addColorStop(1,"rgba(255,240,215,0.9)"),a.fillStyle=g,a.fillRect(d+f,n*.72,l-f*2,n*.28)}u.kind==="door"&&(a.fillStyle="#fff",a.fillRect(d+l*.47,n*.08,l*.06,n*.05));return}let m=u.tone;if(a.fillStyle=`rgb(${m},${m},${m+3})`,a.fillRect(d+2,0,l-4,n),u.kind==="shutter"||u.kind==="half"){let g=n*.12,p=u.kind==="half"?n*.72:n;a.fillStyle="#0e0f12",a.fillRect(d+f-4,g-6,l-f*2+8,8);for(let M=g;M<p;M+=7*e)a.fillStyle=`rgb(${m+22},${m+22},${m+24})`,a.fillRect(d+f,M,l-f*2,4*e),a.fillStyle=`rgb(${m+6},${m+6},${m+8})`,a.fillRect(d+f,M+4*e,l-f*2,3*e);a.fillStyle="#08090b",a.fillRect(d+f,p-3,l-f*2,3),u.kind==="half"?(a.fillStyle="#2b2620",a.fillRect(d+f,p,l-f*2,n-p)):(a.fillStyle="#0a0a0c",a.fillRect(d+l*.48,p-16,10,12))}else u.kind==="door"&&(a.fillStyle="#121316",a.fillRect(d+l*.36,n*.18,l*.28,n*.82),a.strokeStyle="#2c2e33",a.lineWidth=2,a.strokeRect(d+l*.38,n*.22,l*.24,n*.36),a.strokeRect(d+l*.38,n*.62,l*.24,n*.32));let x=a.createLinearGradient(0,0,0,n);x.addColorStop(0,`rgba(0,0,0,${.25+u.grime*.3})`),x.addColorStop(.3,"rgba(0,0,0,0)"),x.addColorStop(.85,"rgba(0,0,0,0)"),x.addColorStop(1,`rgba(0,0,0,${.35+u.grime*.3})`),a.fillStyle=x,a.fillRect(d,0,l,n);for(let g=0;g<6;g++)a.fillStyle=`rgba(0,0,0,${.05+i()*.12})`,a.fillRect(d+i()*l,0,1+i()*3,n*(.2+i()*.6));a.fillStyle="#060607",a.fillRect(d,0,3,n)})};return{map:Cn(An(t,n,a=>o(a,!1)),{repeat:!0}),em:Cn(An(t,n,a=>o(a,!0)),{repeat:!0})}}function Wm(s){return{uT:{value:0},uFog:{value:s.density},uFogColor:{value:new Oe(s.color)},uPx:{value:700}}}var Ou="float fadeAt(float d, float u){ return exp(-u*u*d*d*0.6); }";function Xm(s,e){return new yt({side:wn,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uFogColor:e.uFogColor},vertexShader:`
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
      }`})}function qm(s,e,t,n,i){return new yt({transparent:!0,depthWrite:!1,blending:Ln,side:wn,uniforms:{uMap:{value:s},uRect:{value:new Kt(...e)},uT:t.uT,uFog:t.uFog,uTint:{value:new Oe(n)},uPh:{value:i}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform sampler2D uMap; uniform vec4 uRect; uniform float uT, uFog, uPh; uniform vec3 uTint;
      varying vec2 vUv; varying float vD;
      float h(float n){ return fract(sin(n * 91.345) * 47453.5453); }
      ${Ou}
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
      }`})}function Ym(s,e,t){return new yt({transparent:!0,depthWrite:!1,blending:Ln,side:wn,uniforms:{uT:s.uT,uFog:s.uFog,uA:{value:new Oe(e)},uB:{value:new Oe(t)}},vertexShader:`
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
      ${Ou}
      void main(){
        float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
        float rim = pow(f, 1.6);
        float bands = 0.55 + 0.45 * sin(vY * 3.2 - uT * 2.4);
        float fine = 0.7 + 0.3 * sin(vY * 38.0 + uT * 14.0);
        float climb = smoothstep(0.92, 1.0, sin(vY * 0.35 - uT * 1.1));
        vec3 c = mix(uA, uB, clamp(vY * 0.018 - 0.2 + 0.25 * sin(uT * 0.5), 0.0, 1.0));
        float k = (0.12 + rim * 1.15) * bands * fine + climb * 0.9;
        gl_FragColor = vec4(c * k * 3.0 * fadeAt(vD, uFog * 0.5), 1.0);
      }`})}function Bu(s,e,t,n,i){return new yt({transparent:!0,depthWrite:!1,blending:Ln,side:wn,uniforms:{uC:{value:new Oe(s)},uK:{value:e},uP:{value:t},uInv:{value:n?1:0},uT:i.uT,uFog:i.uFog},vertexShader:`
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
      ${Ou}
      void main(){
        float f = abs(dot(normalize(vN), normalize(vV)));
        float ax = pow(clamp(mix(vY, 1.0 - vY, uInv), 0.0, 1.0), uP);
        float dust = 0.82 + 0.18 * sin(vW.y * 0.7 + vW.x * 0.3 + uT * 0.8) * sin(vW.z * 0.4 - uT * 0.5);
        float edge = smoothstep(0.0, 0.7, f);
        float near = smoothstep(0.4, 3.0, vD);
        gl_FragColor = vec4(uC * uK * pow(f, 1.4) * edge * ax * dust * near * fadeAt(vD, uFog * 0.7), 1.0);
      }`})}function Zm(s,e){return new yt({transparent:!0,depthWrite:!1,blending:Ln,uniforms:{uT:s.uT,uFog:s.uFog,uC:{value:new Oe(e)}},vertexShader:`
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
      }`,fragmentShader:"uniform vec3 uC; uniform float uFog; varying float vA; varying float vD; void main(){ gl_FragColor = vec4(uC * vA * 0.5 * exp(-uFog*uFog*vD*vD*0.5), 1.0); }"})}function $m(s,e){return new yt({transparent:!0,depthWrite:!1,blending:Ln,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog},vertexShader:`
      attribute vec2 aPh; uniform float uT; varying vec2 vUv; varying float vL; varying float vD;
      void main(){
        float life = fract(uT * aPh.y + aPh.x);
        vL = life; vUv = uv;
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(position * (0.08 + life * 0.55), 1.0);
        vD = -mv.z; gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform float uFog; varying vec2 vUv; varying float vL; varying float vD; void main(){ float a = texture2D(uMap, vUv).r * pow(1.0 - vL, 2.0) * smoothstep(0.0, 0.08, vL); gl_FragColor = vec4(vec3(0.55, 0.7, 1.0) * a * 0.55 * exp(-uFog*uFog*vD*vD*0.6), 1.0); }"})}function Km(s,e){return new yt({transparent:!0,depthWrite:!1,blending:Ln,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uPx:e.uPx},vertexShader:`
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
      }`,fragmentShader:"uniform sampler2D uMap; varying vec3 vC; varying float vK; void main(){ float a = texture2D(uMap, gl_PointCoord).r; gl_FragColor = vec4(vC * a * vK, 1.0); }"})}function Jm(s,e){return new yt({transparent:!0,depthWrite:!1,uniforms:{uMap:{value:s},uT:e.uT,uFog:e.uFog,uPx:e.uPx,uC:{value:new Oe("#6a94ac")}},vertexShader:`
      attribute vec3 aVent; attribute vec2 aSeed; uniform float uT, uPx, uFog; varying float vA; varying vec3 vWp;
      void main(){
        float life = fract(uT * (0.18 + aSeed.y * 0.12) + aSeed.x);
        vec3 p = aVent + vec3(sin(aSeed.x * 40.0 + life * 3.0) * life * 1.1, life * 5.0, cos(aSeed.x * 23.0) * life * 0.8);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float d = max(0.5, -mv.z);
        vA = sin(life * 3.14159) * 0.09 * exp(-uFog * uFog * d * d * 0.5); vWp = p;
        gl_PointSize = clamp((0.9 + life * 3.6) * uPx / d, 1.0, 140.0);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:"uniform sampler2D uMap; uniform vec3 uC; varying float vA; varying vec3 vWp; void main(){ float a = texture2D(uMap, gl_PointCoord).r; vec3 tint = uC + vec3(0.02, 0.1, 0.16) * smoothstep(-2.0, 2.0, vWp.x) ; gl_FragColor = vec4(tint * 0.7, a * vA); }"})}function jm(s,e,t){return new yt({transparent:!0,depthWrite:!1,side:wn,uniforms:{uT:s.uT,uC:{value:new Oe(e)},uK:{value:t}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uK; uniform vec3 uC; varying vec2 vUv; varying float vD;
      float h21(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x), mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 p = vUv * vec2(7.0, 2.0) + vec2(uT * 0.03, uT * 0.01);
        float n = vn(p) * 0.6 + vn(p * 2.3 + 7.0) * 0.3 + vn(p * 5.1) * 0.1;
        float a = smoothstep(0.35, 0.85, n) * smoothstep(0.0, 0.35, vUv.y) * smoothstep(1.0, 0.45, vUv.y) * smoothstep(0.0, 0.12, vUv.x) * smoothstep(1.0, 0.88, vUv.x);
        a *= smoothstep(10.0, 34.0, vD);
        gl_FragColor = vec4(uC, a * uK);
      }`})}function Qm(s,e){s.onBeforeCompile=t=>{Object.assign(t.uniforms,e),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
        #include <opaque_fragment>`)},s.customProgramCacheKey=()=>"wetground-v1"}function e0(s){return new yt({transparent:!0,depthWrite:!1,blending:Ln,uniforms:{uT:s.uT,uFog:s.uFog,uLook:{value:new ye},uK:{value:2.1}},vertexShader:"varying vec2 vUv; varying float vD; void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position,1.); vD = -mv.z; gl_Position = projectionMatrix * mv; }",fragmentShader:`
      uniform float uT, uFog, uK; uniform vec2 uLook; varying vec2 vUv; varying float vD;
      ${Ou}
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
      }`})}function t0(s){let e=Ym(s,"#2ec8e0","#ff2a46"),t=[],n=x=>(t.push(x),x),i=(x,g,p=0,M=0,_=0)=>{let v=new Je(x,e);return v.position.set(p,M,_),v.userData.noAO=!0,g.add(v),v},r=new en,o=new en;r.add(o);let a=n(new Ea([new ye(.15,1),new ye(.2,.88),new ye(.26,.62),new ye(.34,.36),new ye(.4,.2)],28));i(a,o);for(let x of[-1,1])i(n(new Xs(.05,.2,4,10)),o,x*.08,.1,0);i(n(new Xs(.13,.3,6,14)),o,0,1.2,0).scale.set(1.15,1,.8);let c=i(n(new ji(.17,.045,8,28)),o,0,1.02,0);c.rotation.x=Math.PI/2,i(n(new Nt(.26,.2,.06)),o,0,1.02,-.2),i(n(new ln(.045,.05,.1,10)),o,0,1.43,0);let l=new en;l.position.set(0,1.56,0),o.add(l),i(n(new zn(.105,18,14)),l).scale.set(.95,1.08,1),i(n(new zn(.125,16,12)),l,0,.02,-.03).scale.set(1,1,1.05),i(n(new zn(.07,12,10)),l,0,.16,-.02),i(n(new Ss(.1,.55,12,1,!0)),l,0,-.26,-.1);let u=i(n(new ji(.34,.01,6,48)),l,0,.02,-.22),h=[];for(let x of[-1,1]){let g=new en;g.position.set(x*.2,1.34,0),o.add(g),i(n(new Xs(.04,.26,4,8)),g,0,-.17,0);let p=new en;p.position.set(0,-.34,0),g.add(p),i(n(new Xs(.035,.24,4,8)),p,0,-.15,0),i(n(new tn(.22,.42)),p,x*.05,-.2,0),h.push({sh:g,el:p})}let d=i(n(new ji(.55,.012,6,56)),r,0,.01,0);d.rotation.x=Math.PI/2;let f=i(n(new ji(.4,.008,6,48)),r,0,.01,0);return f.rotation.x=Math.PI/2,{group:r,update:x=>{o.rotation.y=Math.sin(x*.25)*.7,o.rotation.z=Math.sin(x*.9)*.025,o.position.y=Math.sin(x*1.3)*.015,l.rotation.z=Math.sin(x*.7+1)*.07,l.rotation.y=Math.sin(x*.4)*.25,u.rotation.z=x*.6;let[g,p]=h;p.sh.rotation.z=-2.4+Math.sin(x*.9)*.1,p.el.rotation.z=-.5+Math.sin(x*3.2)*.55,g.sh.rotation.z=.35+Math.sin(x*.7)*.05,g.el.rotation.z=.5,d.scale.setScalar(1+Math.sin(x*1.5)*.04),f.rotation.z=x*.8},dispose:()=>{t.forEach(x=>x.dispose()),e.dispose()}}}var pb={z:-70,w:34,h:56,d:26,cols:8,rows:10,winY0:12};var n0={x:16,h:.245},ui=(s,e,t,n,i,r,o,a)=>{let c=new Nt(e,t,n);c.translate(i,r,o);let l=c.attributes.position.count,u=new Float32Array(l*3);for(let h=0;h<l;h++)u.set(a,h*3);c.setAttribute("color",new kt(u,3)),s.push(c)},Hu=s=>{let e=On(s.map(t=>t.index?t.toNonIndexed():t),!1);return s.forEach(t=>t.dispose()),e},zu=(s,e=2.4)=>new Lt({color:new Oe(s).multiplyScalar(e),toneMapped:!1}),cn=27,ku=51,Ks=["#2ec8e0","#2ec8e0","#3a8cff","#2ec8e0","#3a8cff","#ff2a46","#2ec8e0","#4da3ff"];function i0({renderer:s,scene:e,high:t,look:n,vexvoid:i=!1}){let r=t?1:.5,o=(y,I)=>t?y:I,a=new en,c=[],l=y=>(c.push(y),y),u=Nr(2048),h=(y,I)=>y+(I-y)*u(),d=y=>Math.floor(u()*y),f=pb,m=new dr;m.add(new Je(new zn(50,24,16),new yt({side:qn,vertexShader:"varying vec3 p; void main(){ p = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 p; void main(){ float h = normalize(p).y; vec3 lo = vec3(0.05,0.10,0.16); vec3 hi = vec3(0.01,0.02,0.07); gl_FragColor = vec4(mix(lo, hi, smoothstep(-0.1,0.7,h)),1.); }"})));let x=(y,I,z,J,K,ce,Me)=>{let De=new Je(new tn(z,J),new Lt({color:new Oe(y).multiplyScalar(I),side:wn,toneMapped:!1}));De.position.set(K,ce,Me),De.lookAt(0,0,0),m.add(De)};x("#ff2a2a",7,30,4,0,16,-40),x("#27c8e0",5,34,3,-30,10,-10),x("#ffa24a",3,30,3,30,12,-6),x("#2ec8e0",4,20,5,18,24,20),x("#ff2a46",3,8,16,-34,18,-26),x("#2ec8e0",5,6,20,34,20,-30),x("#3a8cff",4,6,12,-20,14,-44),x("#ffffff",3,14,2,-8,32,-12);let g=new Co(s),p=g.fromScene(m,.03).texture;g.dispose(),m.traverse(y=>{let I=y;I.isMesh&&(I.geometry.dispose(),I.material.dispose())}),e.environment=p,e.environmentIntensity=.85,e.background=new Oe("#05060f");let M=new la("#071420",.0066);e.fog=M;let _=Wm(M),v=l(new yt({side:qn,depthWrite:!1,fog:!1,uniforms:{uT:_.uT},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`
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
        }`})),C=new Je(l(new zn(400,32,20)),v);C.renderOrder=-10,C.userData.noAO=!0,a.add(C),a.add(new Ca("#4f78b8","#150a14",.38));let S=new Mr("#78a8ff",.9);if(S.position.set(-40,70,10),S.target.position.set(0,0,-40),t){S.castShadow=!0,S.shadow.mapSize.set(2048,2048);let y=S.shadow.camera;y.left=-50,y.right=50,y.top=60,y.bottom=-60,y.near=10,y.far=200,S.shadow.bias=-5e-4,S.shadow.normalBias=.05}a.add(S,S.target);let F=new ti("#ff2418",t?500:300,90,1.6);F.position.set(0,f.h-4,f.z+14),a.add(F);let H=new ti("#ffc27a",t?160:100,34,1.7);H.position.set(0,5,f.z+9),a.add(H);let b=new ti("#ffd27a",0,26,1.6);a.add(b);let w=n.material("concrete_floor_02",[60,120],"#3b404c",.35);w.roughness=.34,w.envMapIntensity=1.6,l(w);let B={tReflect:{value:null},uReflMat:{value:new lt},uReflOn:{value:0},uT:_.uT,uWet:{value:1}};Qm(w,B);let V=new Je(l(new tn(200,400)),w);V.rotation.x=-Math.PI/2,V.position.set(0,0,-120),V.receiveShadow=!0,a.add(V);let Z=null,re=new lt,ae=new ye;t&&(s.getDrawingBufferSize(ae),Z=new il(new tn(2,2),{textureWidth:Math.max(64,Math.round(ae.x*.5)),textureHeight:Math.max(64,Math.round(ae.y*.5)),clipBias:.002,multisample:0}),Z.rotation.x=-Math.PI/2,Z.updateMatrixWorld(!0),re.copy(Z.matrixWorld).invert(),B.tReflect.value=Z.getRenderTarget().texture,B.uReflOn.value=1);let N=l(n.material("large_floor_tiles_02",[8,90],"#5a5d6a",.1));N.roughness=.45,N.envMapIntensity=1.2;for(let y of[-1,1]){let I=new Je(l(new Nt(11,.25,400)),N);I.position.set(y*21.5,.12,-120),I.receiveShadow=!0,a.add(I)}let G=[],oe=(y,I,z,J,K=.03)=>{let ce=new tn(y,I);ce.rotateX(-Math.PI/2),ce.translate(z,K,J),G.push(ce)};for(let y=-4;y>-300;y-=9)oe(.25,4,0,y);for(let y of[-1,1])oe(.2,300,y*15.4,-150);for(let y of[-9,-86,-150])for(let I=-6;I<=6;I++)oe(.7,3.6,I*1.9,y);let Te=l(new ct({color:"#c9ccd6",roughness:.4,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}));a.add(new Je(l(On(G,!1)),Te)),G.forEach(y=>y.dispose());let xe=l(Cn(An(256,512,y=>{y.fillStyle="#e8eaf2",y.font=`900 220px ${si}`,y.textAlign="center",y.textBaseline="middle",["\u6B62","\u307E","\u308C"].forEach((I,z)=>y.fillText(I,128,90+z*165))}))),Ie=new Je(l(new tn(3.4,6.6)),l(new ct({map:xe,transparent:!0,roughness:.45,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3,depthWrite:!1})));Ie.rotation.x=-Math.PI/2,Ie.position.set(-7,.035,-17),a.add(Ie);let R=(y,I,z,J,K=!1)=>{let ce=new $n(l(y),I,Math.max(1,z.length));return ce.count=z.length,z.forEach((Me,De)=>ce.setMatrixAt(De,Me)),J&&J.forEach((Me,De)=>ce.setColorAt(De,Me)),ce.instanceMatrix.needsUpdate=!0,ce.instanceColor&&(ce.instanceColor.needsUpdate=!0),ce.frustumCulled=!1,ce.castShadow=K,ce.receiveShadow=!0,a.add(ce),ce},X=new D(0,1,0),j=(y,I,z,J=1,K=1,ce=1,Me=0)=>new lt().compose(new D(y,I,z),new an().setFromAxisAngle(X,Me),new D(J,K,ce)),ne=[],T=(y,I,z,J,K,ce=0,Me=1)=>ne.push({p:new D(y,I,z),c:new Oe(J).multiplyScalar(Me),s:K,ph:u(),mode:ce}),U=[],O=(y,I,z,J,K,ce=1,Me=.03)=>U.push({p:new D(y,Me,I),sx:z,sz:J,c:new Oe(K).multiplyScalar(ce*.22)}),Y=["office","resi","glass","old"],Q=Y.map((y,I)=>Nm(y,7+I*29,r));Q.forEach(y=>c.push(y.map,y.em));let Ee={office:[.5,.35,1.1,1],resi:[.75,.15,1,.7],glass:[.22,.8,1.15,1.5],old:[.8,.1,1,.6]},be={};Y.forEach((y,I)=>{let[z,J,K,ce]=Ee[y];be[y]=l(new ct({map:Q[I].map,emissiveMap:Q[I].em,emissive:"#ffffff",emissiveIntensity:K,roughness:z,metalness:J,envMapIntensity:ce}))});let me=i?Gm(5,r):Um(5,r);c.push(me.map,me.em);let te=l(new ct({map:me.map,emissiveMap:me.em,emissive:"#ffffff",emissiveIntensity:i?2.2:1.5,roughness:i?.62:.55,metalness:i?.35:.2})),ve=l(new ct({color:"#232733",roughness:.75,metalness:.25})),le=l(new ct({color:"#0e1018",roughness:.9,metalness:.1})),Re=l(new ct({color:"#0c0e14",roughness:.55,metalness:.85})),A=l(new ct({color:"#2a2d38",roughness:.85,metalness:.05})),de={office:[],resi:[],glass:[],old:[],shop:[],trim:[],roof:[],iron:[],concrete:[]},_e=(y,I,z,J,K,ce,Me,De=0,ot=0,_t=0,ze=0)=>{let At=new Nt(z-I,K-J,Me-ce);if(At.translate((I+z)/2,(J+K)/2,(ce+Me)/2),De>0){let Et=At.attributes.position,zt=At.attributes.normal,sn=At.attributes.uv;for(let bt=0;bt<Et.count;bt++)Math.abs(zt.getX(bt))>.5?sn.setXY(bt,Et.getZ(bt)/De+_t,Et.getY(bt)/ot+ze):Math.abs(zt.getZ(bt))>.5?sn.setXY(bt,Et.getX(bt)/De+_t,Et.getY(bt)/ot+ze):sn.setXY(bt,Et.getX(bt)/De,Et.getZ(bt)/De)}y.push(At)},Ve=[],we=[],L=[],E=[],q=(y,I,z,J,K,ce)=>{let Me=new Oe(ce).multiplyScalar(3.2),De=.16,ot=[[y,I,J,J+De],[y,I,z-De,z],[y,y+De,J,z],[I-De,I,J,z]];for(let[_t,ze,At,Et]of ot){let zt=new Nt(ze-_t,.16,Et-At);zt.translate((_t+ze)/2,K,(At+Et)/2),E.push({g:zt,c:Me})}},ue=(y,I,z,J,K)=>{let ce=new Nt(.16,J-z,.16);ce.translate(y,(z+J)/2,I),E.push({g:ce,c:new Oe(K).multiplyScalar(3)})},Se=(y,I,z,J,K,ce,Me,De)=>{let ot=u()*4,_t=(rn,Yn,kr,Wi,Ni)=>{let wi=y>0?rn:-Me,ih=y>0?Me:-rn;_e(de[K],wi,ih,Yn,kr,Ni,Wi,Lm,Nf,ot,-Yn/Nf)},ze=(rn,Yn,kr,Wi,Ni,wi)=>{let ih=y>0?rn-wi:-Me-wi,V0=y>0?Me+wi:-rn+wi;_e(de.trim,ih,V0,Yn,kr,Ni-wi,Wi+wi)},At=De?4.5:0;if(De){let rn=y>0?ce:-Me,Yn=y>0?Me:-ce;_e(de.shop,rn,Yn,0,At,z,I,Uf.w,Uf.h,u()*4,0),ze(ce,At,At+.35,I,z,.7)}let Et=At+(De?.35:0),zt=J>36?Math.max(Et+8,J*.6):J;_t(ce,Et,zt,I,z);for(let rn=Et+14.4;rn<zt-2;rn+=14.4)ze(ce,rn,rn+.22,I,z,.14);let sn=zt,bt=[I,z],Bn=ce;if(J>36){ze(ce,zt,zt+.4,I,z,.3);let rn=J>52?J*.85:J;Bn=ce+1.6,bt=[I-.8,z+.8],_t(Bn,zt+.4,rn,bt[0],bt[1]),sn=rn,J>52&&(ze(Bn,rn,rn+.4,bt[0],bt[1],.3),Bn=ce+3.6,bt=[I-2.2,z+2.2],_t(Bn,rn+.4,J,bt[0],bt[1]),sn=J)}if(ze(Bn,sn,sn+.55,bt[0],bt[1],.22),Ve.push({xa:y>0?Bn:-Me,xb:y>0?Me:-Bn,za:bt[0],zb:bt[1],y:sn+.55,kind:K,h:sn}),!De)return;let Ti=y>0?Bn:-Me,Qs=y>0?Me:-Bn;if(u()<.8&&q(Ti,Qs,bt[0],bt[1],sn+.65,Ks[d(Ks.length)]),J>30&&u()<.7){let rn=Ks[d(Ks.length)],Yn=y*(cn+.12);ue(Yn,I-.1,Et,Math.min(zt,J*.75),rn),ue(Yn,z+.1,Et,Math.min(zt,J*.75),rn)}if(we.push({sx:y,za:I,zb:z,h:J,h1:zt,kind:K}),(K==="resi"||K==="old")&&I-z>13&&u()<.8){let rn=(I+z)/2+h(-2,2),Yn=y*(ce-.55),kr=Math.min(5,Math.floor((zt-Et-3)/3.6));for(let Wi=0;Wi<kr;Wi++){let Ni=Et+1.4+Wi*3.6;if(_e(de.iron,Yn-.55,Yn+.55,Ni,Ni+.08,rn-1.6,rn+1.6),_e(de.iron,Yn-y*.55-.03,Yn-y*.55+.03,Ni,Ni+.95,rn-1.6,rn+1.6),_e(de.iron,Yn-.55,Yn+.55,Ni+.9,Ni+.95,rn-1.6,rn+1.6),Wi<kr-1){let wi=new Nt(.8,.07,2.4);wi.rotateX((Wi%2?1:-1)*Math.atan2(3.6,2.4)),wi.translate(Yn,Ni+1.8,rn+(Wi%2?-.1:.1)),de.iron.push(wi)}}}};for(let y of[-1,1]){let I=-3.5,z=0,J=!1;for(;I>-200;){let ce=h(13,21),Me=I,De=I-ce,ot=h(22,62),_t=Y[d(4)];y<0&&!J&&De<-70?(De=Me-20,ot=32,_t="office",J=!0):Me<-26&&Me>-72&&ot>40&&(ot=h(30,40)),Se(y,Me,De,ot,_t,cn,ku,!0),I=De;let ze=z%3===2&&I>-150?5.4:h(1.2,2.6);ze>4&&L.push({sx:y,z:I-ze/2}),I-=ze,z++}let K=-2;for(;K>-210;){let ce=h(18,30);Se(y,K,K-ce,h(70,150),u()<.6?"glass":"office",ku,ku+26,!1),K-=ce}}let pe=[],Ge=(y,I,z,J,K=!1)=>pe.push({x0:y-z,x1:y+z,z0:I-J,z1:I+J,low:K}),Pe=-20,ie=15.2,Ae=21,he=9.4;{_e(de.concrete,Pe-4.7,Pe+4.7,ie,ie+1.3,-230,14),_e(de.concrete,Pe-4.7,Pe-4.5,ie+1.3,ie+2.4,-230,14),_e(de.concrete,Pe+4.5,Pe+4.7,ie+1.3,ie+2.4,-230,14);for(let z=4;z>-220;z-=20)_e(de.concrete,Pe-.9,Pe+.9,0,ie,z-1.3,z+1.3),Ge(Pe,z,.9,1.3),_e(de.concrete,Pe-3.6,Pe+3.6,ie-1,ie,z-1.6,z+1.6);for(let z=0;z>-220;z-=10)_e(de.iron,Pe-4.4,Pe-4.3,ie+1.3,ie+6.2,z-.05,z+.05),T(Pe-3.9,ie+6.2,z,"#ffb35a",1.1,0,1),T(Pe-3,ie-.3,z-5,"#ff9a3a",.9,0,.8),T(Pe+3,ie-.3,z-5,"#ff9a3a",.9,0,.8);_e(de.concrete,Ae-2.6,Ae+2.6,he-.5,he+.3,-230,14),_e(de.concrete,Ae-2.6,Ae-2.45,he+.3,he+1.15,-230,14),_e(de.concrete,Ae+2.45,Ae+2.6,he+.3,he+1.15,-230,14),_e(de.iron,Ae-.95,Ae-.85,he+.3,he+.42,-230,14),_e(de.iron,Ae+.85,Ae+.95,he+.3,he+.42,-230,14),_e(de.iron,Ae-.02,Ae+.02,he+4.6,he+4.64,-230,14);for(let z=0;z>-220;z-=14)_e(de.concrete,Ae-.7,Ae+.7,0,he-.5,z-1.8,z+1.8),Ge(Ae,z,.7,1.8),_e(de.iron,Ae+2.3-.07,Ae+2.3+.07,he+.3,he+4.6,z-.07,z+.07),T(Ae,he-.8,z,"#7ee8ff",1,2,.8)}{let y=[];for(let I of[Pe-2.2,Pe+2.2])for(let z=12;z>-230;z-=3){let J=new tn(.12,1.4);J.rotateX(-Math.PI/2),J.translate(I,ie+1.32,z),y.push(J)}a.add(new Je(l(On(y,!1)),l(zu("#bcd8ec",.9)))),y.forEach(I=>I.dispose())}let Fe={...be,shop:te,trim:ve,roof:le,iron:Re,concrete:A};if(Object.keys(de).forEach(y=>{if(!de[y].length)return;let I=l(On(de[y],!1));de[y].forEach(J=>J.dispose());let z=new Je(I,Fe[y]);z.castShadow=t&&y!=="iron",z.receiveShadow=!0,a.add(z)}),E.length){let y=E.map(({g:z,c:J})=>{let K=z.attributes.position.count,ce=new Float32Array(K*3);for(let Me=0;Me<K;Me++)ce.set([J.r,J.g,J.b],Me*3);return z.setAttribute("color",new kt(ce,3)),z}),I=l(On(y,!1));y.forEach(z=>z.dispose()),a.add(new Je(I,l(new Lt({vertexColors:!0,toneMapped:!1,fog:!0}))))}let Be=[],qe=[],Ue=[];for(let y of Ve){if(y.xb-y.xa<4||y.za-y.zb<4)continue;let I=()=>h(y.xa+1.5,y.xb-1.5),z=()=>h(y.zb+1.5,y.za-1.5);(y.kind==="resi"||y.kind==="old")&&u()<.5&&Be.push(j(I(),y.y,z(),1,h(.8,1.2),1,u()*6));let J=Math.floor(h(1,o(6,4)));for(let K=0;K<J;K++)qe.push(j(I(),y.y,z(),h(.8,2.2),h(.7,1.4),h(.8,2),u()*3));if(u()<.7){let K=h(6,y.h>70?26:16),ce=I(),Me=z();Ue.push(j(ce,y.y+K/2,Me,1,K,1)),y.h>28&&T(ce,y.y+K+.3,Me,"#ff2a1a",1.6,1,2.5)}}let ut=(()=>{let y=[],I=new ln(1.15,1.15,2.4,14);I.translate(0,2.6,0);let z=new Ss(1.3,.8,14);z.translate(0,4.2,0),y.push(I,z);for(let[K,ce]of[[-.8,-.8],[.8,-.8],[-.8,.8],[.8,.8]]){let Me=new ln(.06,.06,1.5,4);Me.translate(K,.75,ce),y.push(Me)}let J=On(y,!1);return y.forEach(K=>K.dispose()),J})();Be.length&&R(ut,l(new ct({color:"#3a3430",roughness:.7,metalness:.5})),Be),qe.length&&R(new Nt(1,1,1).translate(0,.5,0),l(new ct({color:"#4a505e",roughness:.65,metalness:.4})),qe),Ue.length&&R(new ln(.05,.1,1,5),l(new ct({color:"#15171d",roughness:.5,metalness:.9})),Ue);let W=[],He=()=>W.push({c0:a.children.length,g0:ne.length,c1:-1,g1:-1}),Ne=()=>{let y=W[W.length-1];y.c1=a.children.length,y.g1=ne.length};i&&He();let Ke=Fm(r);c.push(Ke.texture);let Le=[],Ce=(y,I,z,J,K,ce,Me)=>{let De=u(),ot=De<.5?0:De<.7?1:De<.8?2:De<.92?3:4,_t=(Me?2.2:1.8)*K,ze=_t*4;Le.push({m:j(I,z,J,_t,ze,1,ce),rect:Ke.rect(y),mode:ot,ph:u(),spd:h(1,2.6)}),(t||u()<.5)&&T(I-Math.sin(ce)*.1,z,J+Math.cos(ce)*.15,sl[y].c,ze*.24,0,.14)},Xe=[8,9,10,11,12];for(let y of we){let I=Math.floor((y.za-y.zb)/o(6,7.5))+1;for(let z=0;z<I;z++){let J=u()<.3?Xe[d(Xe.length)]:d(sl.length),K=u()<.45,ce=h(.7,1.5),Me=Math.min(y.h1-2,30),De=(K?2.2:1.8)*ce*4;if(Me<10)continue;let ot=Math.min(Me-De/2,h(6+De/2,Me)),_t=h(y.zb+1.4,y.za-1.4);K?Ce(J,y.sx*(cn-.14),ot,_t,ce,y.sx>0?-Math.PI/2:Math.PI/2,!0):Ce(J,y.sx*(cn-.95),ot,_t,ce,0,!1)}}for(let y of L)Ce(d(sl.length),y.sx*(cn+3),7.5+u()*3,y.z+h(-1.4,1.4),1.3,0,!1);{let y=Le.length,I=new tn(1,1),z=new Float32Array(y*4),J=new Float32Array(y*3);Le.forEach((ce,Me)=>{z.set(ce.rect,Me*4),J.set([ce.ph,ce.mode,ce.spd],Me*3)}),I.setAttribute("aRect",new Ii(z,4)),I.setAttribute("aAnim",new Ii(J,3));let K=new $n(l(I),l(Xm(Ke.texture,_)),y);Le.forEach((ce,Me)=>K.setMatrixAt(Me,ce.m)),K.instanceMatrix.needsUpdate=!0,K.frustumCulled=!1,a.add(K)}let dt=Om(r);c.push(dt.texture);let Gt=l(new tn(1,1)),xt=(y,I,z,J,K,ce,Me)=>{let De=new Je(Gt,l(qm(dt.texture,dt.rect(y),_,Me,u()*4)));De.position.set(I,z,J),De.scale.set(K,K,1),De.rotation.y=ce,De.userData.noAO=!0,a.add(De)};{let y=we.filter(K=>K.sx>0&&K.za<-18&&K.za>-150&&K.h1>18),I=we.filter(K=>K.sx<0&&K.za<-18&&K.za>-150&&K.h1>18),z=(K,ce)=>K[Math.min(K.length-1,ce)];if(y.length>3){let[K,ce,Me]=[z(y,1),z(y,3),z(y,5)];xt(1,cn-.4,Math.min(K.h1-6,17),(K.za+K.zb)/2,11,-Math.PI/2+.2,"#e8f4ff"),xt(2,cn-.4,Math.min(ce.h1-6,24),(ce.za+ce.zb)/2,10,-Math.PI/2+.25,"#e6f1ff"),xt(4,cn-.4,Math.min(Me.h1-7,16),(Me.za+Me.zb)/2,11,-Math.PI/2+.3,"#ffffff")}if(I.length>3){let[K,ce]=[z(I,2),z(I,4)];xt(3,-cn+.4,Math.min(K.h1-6,15),(K.za+K.zb)/2,11,Math.PI/2-.2,"#e8f4ff"),xt(7,-cn+.4,Math.min(ce.h1-6,22),(ce.za+ce.zb)/2,10,Math.PI/2-.25,"#e8f4ff")}Ve.filter(K=>K.xa>cn&&K.h>80&&K.zb<-25&&K.za>-150).slice(0,3).forEach((K,ce)=>xt([5,6,0][ce],(K.xa+K.xb)/2-10,K.y+9,K.za-2,22,-.4,"#ffffff"))}let nt=Ve.filter(y=>y.xb>-40&&y.xb<-20&&y.za>-96&&y.zb<-68).sort((y,I)=>Math.abs((y.za+y.zb)/2+82)-Math.abs((I.za+I.zb)/2+82))[0]??Ve.find(y=>y.xb<0),Mt=t0(_);Mt.group.scale.setScalar(24/1.8),Mt.group.position.set((nt.xa+nt.xb)/2+2,nt.y,(nt.za+nt.zb)/2),a.add(Mt.group),c.push(Mt);let Rn=new Je(l(new ln(7,3,13,20,1,!0)),l(Bu("#35e8ff",.3,1,!0,_)));Rn.position.copy(Mt.group.position).add(new D(0,6.5,0)),Rn.userData.noAO=!0,a.add(Rn),T(Mt.group.position.x,nt.y+1,Mt.group.position.z,"#35e8ff",14,0,.55);let jt=6,hn=9,gn=(()=>{let y=new Ji,I=1.5,z=.7;y.moveTo(-I,-1.2),y.lineTo(I,-1.2),y.lineTo(I,1.55-z),y.quadraticCurveTo(I,1.55,I-z,1.55),y.lineTo(-I+z,1.55),y.quadraticCurveTo(-I,1.55,-I,1.55-z),y.closePath();let J=new Ts(y,{depth:hn-.5,bevelEnabled:!0,bevelSize:.12,bevelThickness:.25,bevelSegments:2,curveSegments:6});J.translate(0,0,-(hn-.5)/2);let K=new Nt(2.5,.4,hn-1.2);K.translate(0,-1.4,0);let ce=[J.index?J.toNonIndexed():J.clone(),K.index?K.toNonIndexed():K.clone()];J.dispose(),K.dispose();let Me=On(ce,!1);return ce.forEach(De=>De.dispose()),Me})(),nn=(()=>{let y=[],I=[1.5,1.35,1];for(let z of[-1,1]){for(let J=0;J<6;J++)ui(y,.05,.85,.95,z*1.63,.45,-3.3+J*1.32,I);ui(y,.05,.08,hn-.6,z*1.64,-.95,0,[.3,2.2,2.8]),ui(y,.05,.05,hn-.8,z*1.62,1.08,0,[.6,.9,1.3]);for(let J of[-4.1,4.1])ui(y,.06,1.9,.06,z*1.63,.1,J,[.9,1.1,1.4])}return ui(y,.5,.06,.5,0,1.6,-3.6,[3,.25,.25]),ui(y,.5,.06,.5,0,1.6,3.6,[3,.25,.25]),Hu(y)})(),Ut=new $n(l(gn),l(new ct({color:"#d4d8e2",roughness:.28,metalness:.75,envMapIntensity:1.7})),jt),gt=new $n(l(nn),l(new Lt({vertexColors:!0,toneMapped:!1})),jt);gt.instanceMatrix=Ut.instanceMatrix,Ut.instanceMatrix.setUsage(Mu),Ut.frustumCulled=gt.frustumCulled=!1,a.add(Ut,gt);let fn=(()=>{let y=[];ui(y,2.4,.12,.08,0,.95,0,[3,3,2.7]);for(let I of[-1,1])ui(y,.55,.22,.08,I*.95,-.7,0,[3.2,3.1,2.8]);return ui(y,2,.9,.04,0,.35,-.02,[.05,.25,.35]),new Je(l(Hu(y)),gt.material)})();a.add(fn),i&&Ne();let xn=l(new ct({color:"#1b1e25",roughness:.5,metalness:.8})),Ft=l(zu("#ffcf8a",3)),Zt=[],$t=[],Rt=[],k=[],ge=[];for(let y=0;y<10;y++)for(let I of[-1,1]){let z=-10-y*14-(I>0?7:0),J=new ln(.12,.17,8,8);J.translate(I*16.5,4,z),Ge(I*16.5,z,.17,.17,!0);let K=new Nt(2.6,.15,.15);K.translate(I*15.3,8,z),Rt.push(J,K);let ce=new Nt(.9,.12,.4);if(ce.translate(I*14.3,7.9,z),k.push(ce),$t.push(new D(I*16.5,8.2,z)),ge.push(new D(I*14.3,7.4,z)),T(I*14.3,7.85,z,"#ffb860",1,2,.6),y<3){let Me=new ti("#ffb35a",60,26,1.7);Me.position.set(I*14.3,7.4,z),a.add(Me),Zt.push(Me)}}a.add(new Je(l(On(Rt,!1)),xn),new Je(l(On(k,!1)),Ft)),Rt.forEach(y=>y.dispose()),k.forEach(y=>y.dispose());let Ye=new ln(.25,4.6,7.4,16,1,!0);Ye.translate(0,3.7,0);let tt=new $n(l(Ye),l(Bu("#ffb460",.16,1.2,!1,_)),ge.length);ge.forEach((y,I)=>tt.setMatrixAt(I,j(y.x,.02,y.z))),tt.userData.noAO=!0,tt.frustumCulled=!1,a.add(tt),ge.forEach(y=>O(y.x*.8,y.z,11,11,"#ffa550",1));let Xt=[],Gn=[],dn=(y,I,z,J=!1)=>{let K=[];for(let Me=0;Me<=8;Me++){let De=Me/8;K.push(new D().lerpVectors(y,I,De).add(new D(0,-z*4*De*(1-De),0)))}let ce=new _o(K);Xt.push(new Ta(ce,14,.03,3,!1)),J&&Gn.push(ce)},_n=$t.filter(y=>y.x<0).sort((y,I)=>I.z-y.z),P=$t.filter(y=>y.x>0).sort((y,I)=>I.z-y.z);for(let y of[_n,P])for(let I=0;I<y.length-1;I++)for(let z of[0,-.3,.3])dn(y[I].clone().add(new D(0,z,0)),y[I+1].clone().add(new D(0,z*.8,0)),.7+z*.3);for(let y=0;y<Math.min(_n.length,P.length);y+=2){let I=_n[y],z=P.reduce((J,K)=>Math.abs(K.z-I.z)<Math.abs(J.z-I.z)?K:J);dn(I.clone(),z.clone().setZ(I.z-1.5),1.6,y%4===0)}a.add(new Je(l(On(Xt,!1)),l(new ct({color:"#07080b",roughness:.6,metalness:.2})))),Xt.forEach(y=>y.dispose());let $=[],fe=[],se=["#ff3a1a","#ff7a22","#ff3a1a","#ff9a3a"],ee=(y,I,z,J=1)=>{let K=se[d(se.length)];$.push(j(y,I,z,J,J,J)),fe.push(new Oe(K).multiplyScalar(1.5)),T(y,I,z,K,.5*J,3,.25)};for(let y of we)for(let I=y.za-1.8;I>y.zb+1.2;I-=h(2.4,3.8))u()<.4&&ee(y.sx*(cn-.9),h(3.1,3.7),I);for(let y of Gn)for(let I=1;I<12;I++){let z=y.getPoint(I/12);ee(z.x,z.y-.35,z.z,.55)}for(let y of L){let I=o(9,5);for(let J=0;J<I;J++){let K=y.sx*(cn+2+J*2.4);ee(K,h(3.9,4.6),y.z+h(-1.8,1.8)),J%2===0&&O(K,y.z,6,6,J%4===0?"#ff5a3a":"#ff9a4a",.7)}let z=new Je(l(new tn(4.6,9)),l(new Lt({map:rl(),color:new Oe(Ks[d(Ks.length)]).multiplyScalar(1.1),transparent:!0,blending:Ln,depthWrite:!1,toneMapped:!1,fog:!1})));z.position.set(y.sx*(ku-.3),5,y.z),z.rotation.y=y.sx>0?-Math.PI/2:Math.PI/2,z.userData.noAO=!0,a.add(z)}R(new zn(.3,10,8).scale(1,1.3,1),l(new Lt({toneMapped:!1})),$,fe);let ke=Bm(r);c.push(ke.map,ke.em);let je=l(new ct({map:ke.map,emissiveMap:ke.em,emissive:"#ffffff",emissiveIntensity:1.8,roughness:.35,metalness:.55})),Ze=[[],[],[]],Qe=["#2ec8e0","#3a8cff","#ff9a3a"],at=(y,I,z)=>{let J=d(3);Ze[J].push(j(y,.25,I,1,1,1,z)),Ge(y,I,.46,.46),O(y+Math.sin(z)*1.6,I+Math.cos(z)*1.6,4.5,4.5,Qe[J],.9,.27),T(y+Math.sin(z)*.5,1.4,I+Math.cos(z)*.5,Qe[J],1.2,0,.25)};for(let y of we)for(let I=y.za-2;I>y.zb+2;I-=h(7,12))if(u()<.7){let z=y.sx>0?-Math.PI/2:Math.PI/2;at(y.sx*(cn-1.3),I,z),u()<.5&&at(y.sx*(cn-1.3),I-1.1,z)}for(let y of L)at(y.sx*(cn+7),y.z-1.9,Math.PI),u()<.7&&at(y.sx*(cn+12),y.z+1.9,0);Ze.forEach((y,I)=>{let z=new Nt(.9,1.9,.85);z.translate(0,.95,0);let J=z.attributes.uv;for(let K=0;K<J.count;K++)K>=16&&K<20?J.setXY(K,(I+J.getX(K))/3,J.getY(K)):J.setXY(K,.01+I/3,.99);y.length?R(z,je,y):z.dispose()});let ft=Cn(An(128,32,y=>{y.fillStyle="#e8e8ea",y.fillRect(0,0,128,32),y.fillStyle="#ff7a1a";for(let I=-2;I<10;I++)y.beginPath(),y.moveTo(I*16,32),y.lineTo(I*16+8,32),y.lineTo(I*16+24,0),y.lineTo(I*16+16,0),y.fill()}));c.push(ft);let We=[];for(let y=0;y<7;y++){let I=6.6+y*1.7,z=-27-y*.6;We.push(j(I,.5,z,1,1,1,.12+y*.01)),Ge(I,z,.8,.2,!0),y%2===0&&T(I,1.2,z,"#ffb000",.9,1,3)}for(let y of[-1,1])for(let I=0;I<4;I++){let z=-34-I*1.7-(y>0?40:0);We.push(j(y*14.6,.5,z,1,1,1,Math.PI/2)),Ge(y*14.6,z,.14,.8,!0)}R(new Nt(1.6,.8,.22),l(new ct({map:ft,roughness:.5,metalness:.1})),We,void 0,t);let rt=[],Ot=[],Wt=[],Dt=[],St=[],st=(y,I)=>{let z=4+d(4);for(let K=0;K<z;K++)rt.push(j(y+h(-1.1,1.1),.45,I+h(-1,1),h(.8,1.3),h(.7,1.1),h(.8,1.3),u()*6)),Ot.push(new Oe(["#10131a","#1a1226","#0f1a1a","#2a2a30"][d(4)]));if(u()<.6){let K=y+h(-1.2,1.2),ce=I+h(-1,1);Wt.push(j(K,.25,ce)),Ge(K,ce,.36,.36,!0),Dt.push(new Oe(["#2a3d48","#3a2a48","#2f4a36","#4a3a2a"][d(4)]))}let J=d(4);for(let K=0;K<J;K++)St.push(j(y+h(-1.4,1.4),.45+K%2*.4,I+h(-1,1),h(.8,1.4),1,h(.8,1.2),u()*3))};for(let y of L)st(y.sx*(cn+.5),y.z+1.8),st(y.sx*(cn+5),y.z-2),st(y.sx*(cn-1.5),y.z+3.6);for(let y of we)u()<.5&&st(y.sx*(cn-1.2),h(y.zb+2,y.za-2));rt.length&&R(new ba(.35,1),l(new ct({color:"#ffffff",roughness:.22,metalness:.1,envMapIntensity:1.8})),rt,Ot),Wt.length&&R(new ln(.38,.32,.95,10).translate(0,.47,0),l(new ct({color:"#ffffff",roughness:.5,metalness:.3})),Wt,Dt),St.length&&R(new Nt(.6,.4,.5),l(new ct({color:"#6b5238",roughness:.9})),St);let wt=[new D(-3.5,0,-19),new D(5.5,0,-34),new D(-6,0,-52),new D(3,0,-64),new D(-11,0,-41),new D(10,0,-76)];R(new ln(.5,.5,.04,16),l(new ct({color:"#15171d",roughness:.4,metalness:.9})),wt.map(y=>j(y.x,.04,y.z)));let et=wt.slice(0,o(6,4));for(let y of L.slice(0,o(6,3)))et.push(new D(y.sx*(cn+3),0,y.z-2));{let y=o(26,14),I=et.length*y,z=new Float32Array(I*3),J=new Float32Array(I*3),K=new Float32Array(I*2);et.forEach((De,ot)=>{for(let _t=0;_t<y;_t++){let ze=ot*y+_t;J.set([De.x,.1,De.z],ze*3),K.set([_t/y,u()],ze*2)}});let ce=l(new Bt);ce.setAttribute("position",new kt(z,3)),ce.setAttribute("aVent",new kt(J,3)),ce.setAttribute("aSeed",new kt(K,2));let Me=new Ws(ce,l(Jm(rl(),_)));Me.frustumCulled=!1,Me.userData.noAO=!0,a.add(Me),et.forEach(De=>O(De.x,De.z,5,5,"#a68cff",.35))}let vn=(()=>{let y=new Ji,I=[[2.35,.3],[2.2,.5],[1.15,.66],[.25,1.02],[-.95,1.06],[-1.9,.82],[-2.3,.62],[-2.3,.3],[-1.9,.16],[1.9,.16]];y.moveTo(I[0][0],I[0][1]);for(let[Me,De]of I.slice(1))y.lineTo(Me,De);y.closePath();let z=1.75,J=new Ts(y,{depth:z,bevelEnabled:!0,bevelSize:.09,bevelThickness:.1,bevelSegments:2,curveSegments:1});J.rotateY(-Math.PI/2),J.translate(z/2,0,0);let K=[J.index?J.toNonIndexed():J.clone()];J.dispose();for(let Me of[-1,1]){let De=new ln(.2,.24,1.6,10);De.rotateX(Math.PI/2),De.translate(Me*.98,.32,-1.45),K.push(De.toNonIndexed()),De.dispose()}let ce=On(K,!1);return K.forEach(Me=>Me.dispose()),ce.computeVertexNormals(),ce})(),Jn=(()=>{let y=[],I=new Ji;I.moveTo(1.05,.7),I.lineTo(.27,1.05),I.lineTo(-.9,1.09),I.lineTo(-1.5,.92),I.closePath();let z=new Ts(I,{depth:1.5,bevelEnabled:!1});z.rotateY(-Math.PI/2),z.translate(.75,.02,0);let J=z.attributes.position.count,K=new Float32Array(J*3);for(let ce=0;ce<J;ce++)K.set([.04,.12,.18],ce*3);z.setAttribute("color",new kt(K,3)),y.push(z),ui(y,1.7,.04,3.9,0,.12,0,[.4,1.6,2.4]),ui(y,1.65,.06,.06,0,.5,2.27,[3,3,2.8]);for(let ce of[-1,1])ui(y,.32,.1,.06,ce*.6,.36,2.33,[3.4,3.4,3.2]);ui(y,1.85,.07,.06,0,.6,-2.38,[3,.12,.1]);for(let ce of[-1,1])ui(y,.04,.03,3.2,ce*.97,.62,.3,[.5,1.4,2.2]),ui(y,.3,.3,.05,ce*.98,.32,-2.27,[.6,2.2,3.2]);return Hu(y.map(ce=>ce.index?ce.toNonIndexed():ce))})(),Wn=(()=>{let y=[];for(let I of[-1,1])for(let z of[!1,!0]){let J=new tn(.22,7,1,1);J.rotateX(-Math.PI/2),z&&J.rotateZ(Math.PI/2),J.translate(I*.98,.32,-2.3-3.5);let K=J.attributes.position,ce=new Float32Array(K.count*3);for(let Me=0;Me<K.count;Me++){let De=Is.clamp((K.getZ(Me)+9.3)/7,0,1);ce.set([.5*De,1.6*De,2.4*De],Me*3)}J.setAttribute("color",new kt(ce,3)),y.push(J)}return Hu(y)})(),pi=l(new ct({color:"#ffffff",roughness:.22,metalness:.9,envMapIntensity:1.8})),qt=l(new Lt({vertexColors:!0,toneMapped:!1})),Vt=["#0b0d12","#9aa6b4","#4a1018","#0e3a46","#10203a","#b8c0c8"],Pn=["#2ec8e0","#3a8cff","#2ec8e0","#ff2a46"],En=o(12,7),$e=[],vt=[],Qt=[];for(let y=0;y<En;y++){let I=y%2?1:-1,z=-14-y*h(9,12);$e.push(j(I*13.3,i?.2:.45,z,1,1,1,u()<.5?0:Math.PI)),Ge(I*13.3,z,1.2,2.45,!0),vt.push(new Oe(Vt[d(Vt.length)]));let J=Pn[d(Pn.length)];Qt.push(new Oe(J)),O(I*13.3,z,4.6,7,J,.55),T(I*13.3,.3,z,J,1.2,0,.3)}if(R(vn.clone(),pi,$e,vt,t),R(Jn.clone(),qt,$e,Qt),i){let y=new ln(.34,.34,.26,20).rotateZ(Math.PI/2),I=new ln(.17,.17,.28,12).rotateZ(Math.PI/2),z=[];for(let J of $e)for(let K of[-.86,.86])for(let ce of[1.45,-1.3])z.push(J.clone().multiply(j(K,.14,ce)));R(y,l(new ct({color:"#0a0a0b",roughness:.85,metalness:0})),z,void 0,t),R(I,l(new ct({color:"#8d9096",roughness:.35,metalness:.8})),z)}let Un=[];for(let y=0;y<o(46,20);y++){let I=u()<.5?1:-1;y%3===0?Un.push({x:h(-170,170),y:h(32,120),z:h(-110,-260),ax:0,dir:I,spd:h(10,24),sc:h(2.2,4.5),lo:-180,hi:180,ry:I>0?Math.PI/2:-Math.PI/2}):Un.push({x:(u()<.5?-1:1)*h(34,75),y:h(26,95),z:h(-250,20),ax:1,dir:I,spd:h(12,28),sc:h(2,4),lo:-270,hi:30,ry:I>0?Math.PI:0})}let fs=[Pe-3.1,Pe-1.1,Pe+1.1,Pe+3.1];for(let y=0;y<o(14,8);y++){let I=y%4,z=I<2?-1:1;Un.push({x:fs[I],y:ie+1.55,z:h(-200,10),ax:1,dir:z,spd:h(16,30),sc:1,lo:-230,hi:14,ry:z<0?0:Math.PI})}let oi=new $n(l(vn),pi,Un.length),Li=new $n(l(Jn),qt,Un.length);Li.instanceMatrix=oi.instanceMatrix,oi.instanceMatrix.setUsage(Mu),Un.forEach((y,I)=>{oi.setColorAt(I,new Oe(Vt[d(Vt.length)])),Li.setColorAt(I,new Oe(Pn[d(Pn.length)]).lerp(new Oe("#ffffff"),.5)),y.dir*=1});let Ls=new $n(l(Wn),l(new Lt({vertexColors:!0,toneMapped:!1,transparent:!0,blending:Ln,depthWrite:!1,side:wn})),Un.length);Ls.instanceMatrix=oi.instanceMatrix,Ls.userData.noAO=!0,oi.frustumCulled=Li.frustumCulled=Ls.frustumCulled=!1,a.add(oi,Li,Ls);{for(let z of we)for(let J=z.za-2.5;J>z.zb+2;J-=h(4,6))O(z.sx*22.4,J,8,5,Ks[d(Ks.length)],.5,.27);O(0,f.z+9,42,16,"#ffc98a",.9),O(0,f.z+12,30,14,"#ff2a3a",.35);let y=new tn(1,1);y.rotateX(-Math.PI/2);let I=new $n(l(y),l(new Lt({map:rl(),transparent:!0,blending:Ln,depthWrite:!1,toneMapped:!1,fog:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1})),U.length);U.forEach((z,J)=>{I.setMatrixAt(J,j(z.p.x,z.p.y,z.p.z,z.sx,1,z.sz*(t?1:1.6))),I.setColorAt(J,z.c)}),I.frustumCulled=!1,I.userData.noAO=!0,a.add(I)}{let y=o(420,160),I=new tn(1,1);I.rotateX(-Math.PI/2);let z=new Float32Array(y*2);for(let K=0;K<y;K++)z.set([u(),h(.7,1.6)],K*2);I.setAttribute("aPh",new Ii(z,2));let J=new $n(l(I),l($m(Vm(),_)),y);for(let K=0;K<y;K++)J.setMatrixAt(K,j(h(-15,15),.04,h(8,-60)));J.frustumCulled=!1,J.userData.noAO=!0,J.layers.set(1),a.add(J)}i&&He();let Br=zm(r);c.push(Br.map,Br.em);let xd=l(new Jt({color:"#0b1222",metalness:.9,roughness:.16,envMapIntensity:1.8,clearcoat:1,clearcoatRoughness:.08})),T0=l(new Jt({color:"#9fb4d8",map:Br.map,emissiveMap:Br.em,emissive:"#ffffff",emissiveIntensity:1.2,metalness:.85,roughness:.14,envMapIntensity:2.2,clearcoat:1,clearcoatRoughness:.06})),Yu=l(new Jt({color:"#0e1830",map:Br.map,emissiveMap:Br.em,emissive:"#ffffff",emissiveIntensity:.9,metalness:.85,roughness:.18,envMapIntensity:1.8})),Hr=new Je(l(new Nt(f.w,f.h,f.d)),[Yu,Yu,le,xd,T0,Yu]);Hr.position.set(0,f.h/2,f.z-f.d/2),Hr.castShadow=t,Hr.receiveShadow=!0,a.add(Hr);let Uo=l(new ct({color:"#2a3346",roughness:.35,metalness:.9})),Zu=(f.w-4)/f.cols,$u=(f.h-f.winY0-10)/f.rows;{let y=[];for(let I=0;I<=f.cols;I++){let z=new Nt(.35,f.h-f.winY0-6,.5);z.translate(-f.w/2+2+I*Zu,f.winY0+(f.h-f.winY0-6)/2-2,f.z+.2),y.push(z)}for(let I=0;I<=f.rows;I++){let z=new Nt(f.w-3,.3,.5);z.translate(0,f.winY0+I*$u-.2,f.z+.2),y.push(z)}for(let I of[-1,1]){let z=new Nt(.8,f.h,1.2);z.translate(I*(f.w/2+.1),f.h/2,f.z+.3),y.push(z)}a.add(new Je(l(On(y,!1)),Uo)),y.forEach(I=>I.dispose())}let Ku;{let y=[],I=(K,ce,Me,De)=>{let ot=new Nt(K,ce,f.d-De*2);ot.translate(0,Me+ce/2,f.z-f.d/2),y.push(ot)};I(f.w-4,5,f.h,2),I(f.w-12,5,f.h+5,5),I(f.w-22,6,f.h+10,8),a.add(new Je(l(On(y,!1)),xd)),y.forEach(K=>K.dispose());let z=new Je(l(new ln(.15,.4,24,6)),Uo);z.position.set(0,f.h+28,f.z-f.d/2),a.add(z),Ku=l(zu("#ff2a1a",2.8));let J=[];for(let[K,ce]of[[f.h+5,f.w-4],[f.h+10,f.w-12],[f.h+16,f.w-22]]){let Me=new Nt(ce,.18,.18);Me.translate(0,K,f.z-1.6-(f.w-4-ce)/8),J.push(Me)}for(let K of[-1,1]){let ce=new Nt(.22,f.h,.22);ce.translate(K*(f.w/2-.2),f.h/2,f.z-.15),J.push(ce)}a.add(new Je(l(On(J,!1)),Ku)),J.forEach(K=>K.dispose())}let Ju=Df("#ff2020",5,.9);Ju.position.set(0,f.h+40.5,f.z-f.d/2),a.add(Ju);let w0=l(Cn(An(128,128,y=>{y.fillStyle="#fff",y.fillRect(0,0,128,128),y.fillStyle="rgba(0,0,0,0.16)";for(let I=0;I<5;I++)y.fillRect(8+I*24,6,14,5);y.fillStyle="rgba(0,0,0,0.5)",y.fillRect(8,84,44,40),y.fillRect(70,92,50,32),y.beginPath(),y.arc(90,70,9,0,6.3),y.fill(),y.fillRect(80,78,20,26),y.fillStyle="#000",y.fillRect(62,0,4,128),y.strokeStyle="#000",y.lineWidth=8,y.strokeRect(0,0,128,128)}))),ju=[],A0=l(new tn(Zu-.9,$u-.8)),R0=l(new Lt({color:"#ffffff",map:w0,toneMapped:!0,fog:!0})),hi=new $n(A0,R0,f.cols*f.rows),vd=new lt,zr=new Oe,C0=y=>y>.95?zr.set("#ffc890").multiplyScalar(.9):y>.8?zr.set("#a8c8e8").multiplyScalar(.6):y>.62?zr.set("#6a8cb0").multiplyScalar(.35):zr.set("#0c1626").multiplyScalar(.9),_d=()=>{ju.length=0;let y=4242,I=()=>(y=y*16807%2147483647)/2147483647;for(let z=0;z<f.rows;z++)for(let J=0;J<f.cols;J++){let K=z*f.cols+J,ce=-f.w/2+2+Zu*(J+.5),Me=f.winY0+$u*(z+.5),De=I();ju.push({i:K,x:ce,y:Me,hp:30,broke:!1,lit:De}),vd.makeTranslation(ce,Me,f.z+.06),hi.setMatrixAt(K,vd),hi.setColorAt(K,C0(De))}hi.instanceMatrix.needsUpdate=!0,hi.instanceColor&&(hi.instanceColor.needsUpdate=!0)};_d(),a.add(hi);let hl=[],P0=y=>{y.broke=!0,hi.setColorAt(y.i,zr.set("#120604")),hi.instanceColor&&(hi.instanceColor.needsUpdate=!0),Math.random()<.35&&hl.push(y)},I0=l(Cn(An(1024,300,y=>{y.clearRect(0,0,1024,300),y.font='900 118px "Arial Black", Impact, sans-serif',y.textBaseline="middle",y.textAlign="center",y.fillStyle="#eef3fb",y.shadowColor="#9fc0ff",y.shadowBlur=0,y.fillText("nSLAVE",512,118),y.font="700 44px Arial, sans-serif",y.fillStyle="#ff4a3a",y.shadowColor="#ff2020",y.fillText("H  E  A  D  Q  U  A  R  T  E  R  S",512,224),y.font=`700 28px ${si}`,y.fillStyle="#ff9a8a",y.fillText("\u30A8\u30CC\u30B9\u30EC\u30A4\u30D6\u672C\u793E",512,275)}))),yd=new Je(l(new tn(19,5.6)),l(new Lt({map:I0,color:new Oe("#ffffff").multiplyScalar(1.5),toneMapped:!1,transparent:!0,depthWrite:!1,fog:!1})));yd.position.set(7.6,f.h-4.6,f.z+.45),a.add(yd);let Fo=new en;Fo.position.set(-9,f.h-4.7,f.z+.5);let Md=l(e0(_)),bd=new Je(l(new tn(16,9)),Md);bd.userData.noAO=!0;let Qu=Df("#ff2a1a",20,.3);Qu.position.z=.4,Fo.add(bd,Qu),a.add(Fo);let D0=new D(-9,f.h-4.7,f.z+3),L0=l(new Lt({map:l(km(r)),color:new Oe("#ffffff").multiplyScalar(1.15),toneMapped:!0})),Ed=new Je(l(new tn(f.w-2.5,8.2)),L0);Ed.position.set(0,4.35,f.z+.32),a.add(Ed);{let y=[];for(let I=0;I<=14;I++){let z=new Nt(.16,8.4,.24);z.translate(-(f.w-2.5)/2+I*((f.w-2.5)/14),4.4,f.z+.48),y.push(z)}for(let I of[.2,4.4,8.5]){let z=new Nt(f.w-2.2,.24,.3);z.translate(0,I,f.z+.48),y.push(z)}a.add(new Je(l(On(y,!1)),Uo)),y.forEach(I=>I.dispose())}let Sd=new Je(l(new Nt(f.w+4,.6,7)),Uo);Sd.position.set(0,9,f.z+3),a.add(Sd);let Td=new Je(l(new Nt(f.w+2,.1,.4)),l(zu("#27e6ff",3)));Td.position.set(0,8.66,f.z+6.3),a.add(Td);for(let y=0;y<9;y++)T(-f.w/2+2+y*((f.w-4)/8),8.55,f.z+5.4,"#ffe0b0",2.2,0,.8);{let z=l(Cn(An(2048,360,ot=>{ot.clearRect(0,0,2048,360);let _t=230,ze=360/2;ot.lineCap=ot.lineJoin="round";let At=(zt,sn)=>{for(let[bt,Bn,Ti]of[[sn*3.2,"rgba(255,30,40,0.35)",60],[sn*1.6,"#ff2030",26],[sn*.55,"#ffd6d0",6]])ot.shadowColor="#ff1a2a",ot.shadowBlur=Ti,ot.strokeStyle=Bn,ot.lineWidth=bt,ot.beginPath(),zt(),ot.stroke()};At(()=>{ot.moveTo(_t-170,ze),ot.quadraticCurveTo(_t,ze-150,_t+170,ze),ot.quadraticCurveTo(_t,ze+150,_t-170,ze)},9),At(()=>ot.arc(_t,ze,52,0,Math.PI*2),8),ot.shadowBlur=30,ot.fillStyle="#ffe8e4",ot.beginPath(),ot.ellipse(_t,ze,9,40,0,0,Math.PI*2),ot.fill(),ot.font='900 210px "Arial Black", Impact, sans-serif',ot.textBaseline="middle",ot.textAlign="center";let Et=1230;for(let[zt,sn,bt]of[[26,"rgba(255,30,40,0.35)",70],[12,"#ff2030",28],[4,"#ffd6d0",6]])ot.shadowColor="#ff1a2a",ot.shadowBlur=bt,ot.strokeStyle=sn,ot.lineWidth=zt,ot.strokeText("TERRORNODE",Et,ze+6,1500)}))),J=Math.min(f.w+2,30),K=J*360/2048,ce=new Je(l(new Nt(J+.8,K+.5,.35)),Uo);ce.position.set(0,9.3+K/2+.2,f.z+6.25),a.add(ce);let Me=l(new Lt({map:z,color:new Oe("#ffffff").multiplyScalar(2.6),toneMapped:!1,transparent:!0,depthWrite:!1})),De=new Je(l(new tn(J,K)),Me);De.position.set(0,ce.position.y,f.z+6.45),De.userData.noAO=!0,a.add(De);for(let ot=0;ot<5;ot++)T(-J/2+J*(.1+ot*.2),ce.position.y,f.z+6.8,"#ff2030",5.5,0,.5)}let N0=An(64,128,y=>{y.fillStyle="#05070a",y.fillRect(0,0,64,128);for(let I=6;I<128;I+=8){y.fillStyle="#0d1520",y.fillRect(4,I,56,6);for(let z=8;z<58;z+=6)y.fillStyle=Math.random()<.5?"#27e6ff":Math.random()<.3?"#ff3030":"#0a3a44",y.fillRect(z,I+2,3,2)}}),Oo=[],eh=[];for(let y=0;y<8;y++){let I=l(new yi(N0));I.colorSpace=pn,I.wrapS=I.wrapT=Tn;let z=l(new ct({color:"#141a24",metalness:.7,roughness:.4,emissive:"#ffffff",emissiveMap:I,emissiveIntensity:2.2}));eh.push(z);let J=new Je(l(new Nt(2.6,6.4,1.6)),z);J.position.set((y<4?-1:1)*(4.2+y%4*3.1),3.2,f.z+2.2),J.castShadow=t,a.add(J),Oo.push({mesh:J,hp:160,broke:!1,t:0})}let U0=y=>{y.broke=!0;let I=y.mesh.material;I.emissiveIntensity=.05,I.color.set("#0a0a0a"),y.mesh.rotation.z=(Math.random()-.5)*.25},F0=()=>{_d(),hl.length=0;for(let y of Oo){y.broke=!1,y.hp=160;let I=y.mesh.material;I.emissiveIntensity=2.2,I.color.set("#141a24"),y.mesh.rotation.z=0}};i&&Ne();let ds=[],O0=l(Bu("#bcd4ff",.16,.7,!0,_)),B0=l(new ln(9,.6,160,24,1,!0)),fl=(y,I,z)=>{let J=new en;J.position.set(y,I,z);let K=new Je(B0,O0);K.position.y=80,K.userData.noAO=!0,K.frustumCulled=!1,J.add(K),a.add(J),ds.push(J)};fl(9,f.h+2,f.z-4),fl(-9,f.h+2,f.z-4),t&&(fl(-21,.5,-48),fl(21,.5,-58)),i&&(ds[0].visible=ds[1].visible=!1,F.intensity=0,H.intensity=0);let th=[],nh=[];if(i){let y=(ze,At,Et)=>{let zt=l(n.material("concrete_floor_02",[ze/5,At/5],Et,.02));return zt.roughness=.92,zt.envMapIntensity=.5,zt},I=(ze,At,Et,zt,sn,bt,Bn="#55585f")=>{let Ti=new Je(l(new Nt(ze,At,Et)),y(Math.max(ze,Et),At,Bn));return Ti.position.set(zt,sn,bt),Ti.castShadow=t,Ti.receiveShadow=!0,a.add(Ti),Ti},z=(ze,At,Et,zt,sn,bt,Bn,Ti)=>{let Qs=new Je(l(new tn(At,Et)),y(At,Et,"#8d9097"));Qs.position.set(zt,sn,bt),Qs.rotation.y=Math.atan2(Bn,Ti),Qs.receiveShadow=!0,a.add(Qs),th.push({id:ze,mesh:Qs,w:At,h:Et,center:new D(zt,sn,bt),normal:new D(Bn,0,Ti)})};I(2*cn+6,2.2,8,0,8.6,-62);for(let ze of[-1,1]){I(2*cn+6,1.1,.14,0,10.25,-62+ze*3.95,"#25272c");for(let Et of[-62-2.6,-62+2.6])I(2.4,7.5,2.2,ze*17.2,3.75,Et),pe.push({x0:ze*17.2-1.3,x1:ze*17.2+1.3,z0:Et-1.2,z1:Et+1.2});z(ze<0?"bridge-left":"bridge-right",4.6,6.6,ze*(17.2-1.22),3.6,-62,-ze,0);let At=new ti("#fff4e0",t?38:26,20,1.7);At.position.set(ze*8,7.2,-62),a.add(At),T(ze*8,7.45,-62,"#fff4e0",1.2,0,2)}let K=-80;I(2*cn+2,15,2.4,0,7.5,K-1.2,"#4a4d54"),pe.push({x0:-cn-1,x1:cn+1,z0:K-2.4,z1:K+.3}),z("hall-of-fame",30,9,0,4.8,K+.03,0,1);let ce=new is("#ffffff",t?260:160,46,.95,.9,1.2);ce.position.set(0,14.2,K+9),ce.target.position.set(0,3,K),a.add(ce,ce.target),T(0,14.2,K+8.6,"#ffffff",1.8,0,1.8);let Me=0;for(let ze of we){if(ze.za<-54||ze.za>0||ze.za-ze.zb<9||Me++%2)continue;let At=Math.min(10,ze.za-ze.zb-3),Et=(ze.za+ze.zb)/2;z(`wall-${ze.sx<0?"l":"r"}${Math.round(-Et)}`,At,3.7,ze.sx*(cn-.04),2.1,Et,-ze.sx,0)}nh.push(...th);let De=3.75,ot=(ze,At,Et,zt,sn,bt,Bn=.25)=>nh.push({id:ze,w:At,h:De,center:new D(Et,Bn+De/2,zt),normal:new D(sn,0,bt)});for(let ze of we)ze.za>-82&&ze.zb<26&&ot(`shop-${ze.sx<0?"l":"r"}${Math.round(-(ze.za+ze.zb)/2)}`,ze.za-ze.zb,ze.sx*cn,(ze.za+ze.zb)/2,-ze.sx,0);for(let ze of[-1,1])ot(ze<0?"end-l":"end-r",12,ze*21,K,0,1);let _t=(ze,At,Et,zt,sn,bt="")=>{bt.includes("e")||ot(`${ze}-e`,sn*2,At+zt,Et,1,0),bt.includes("w")||ot(`${ze}-w`,sn*2,At-zt,Et,-1,0),bt.includes("n")||ot(`${ze}-n`,zt*2,At,Et-sn,0,-1),bt.includes("s")||ot(`${ze}-s`,zt*2,At,Et+sn,0,1)};for(let ze=4;ze>-80;ze-=20)_t(`exp${Math.round(4-ze)/20+1}`,Pe,ze,.9,1.3);for(let ze=0;ze>-80;ze-=14)_t(`rail${Math.round(-ze)/14+1}`,Ae,ze,.7,1.8);for(let ze of[-1,1])for(let At of[-1,1])_t(`pier-${ze<0?"l":"r"}${At<0?"n":"s"}`,ze*17.2,-62+At*2.6,1.2,1.1,(ze<0?"e":"w")+(At<0?"s":"n"))}for(let y=0;y<o(6,3);y++){let I=new Je(l(new tn(64,8)),l(jm(_,y%2?"#24607c":"#1e4a78",.2)));I.position.set(0,3.2,-8-y*14),I.userData.noAO=!0,a.add(I)}for(let[y,I,z,J,K,ce]of[[-185,"#0b0e1e","rgba(20,50,80,0.55)",.16,1,1],[-240,"#0e1a30","rgba(25,60,95,0.7)",.12,1.35,2],[-310,"#142a45","rgba(40,90,120,0.8)",.09,1.8,3]]){let Me=l(Hm(ce*13,I,z,J,r)),De=new Je(l(new tn(900*K,225*K)),l(new Lt({map:Me,transparent:!0,depthWrite:!1,fog:!1,toneMapped:!0})));De.position.set(0,225*K*.5-6,y),De.renderOrder=-5,De.userData.noAO=!0,a.add(De)}{let y=o(3600,1300),I=new Float32Array(y*6),z=new Float32Array(y*8),J=new Float32Array(y*2);for(let Me=0;Me<y;Me++){let De=(Math.random()-.5)*66,ot=Math.random()*38,_t=-Math.random()*100+8,ze=Math.random();I.set([De,ot,_t,De,ot,_t],Me*6),z.set([0,0,0,ze,0,0,0,ze],Me*8),J.set([0,1],Me*2)}let K=l(new Bt);K.setAttribute("position",new kt(I,3)),K.setAttribute("aSeed",new kt(z,4)),K.setAttribute("aEnd",new kt(J,1));let ce=new gr(K,l(Zm(_,"#8fb0d0")));ce.frustumCulled=!1,ce.userData.noAO=!0,ce.layers.set(1),a.add(ce)}if(i)for(let y of W.slice().reverse())ne.splice(y.g0,y.g1-y.g0);{let y=ne.length,I=new Float32Array(y*3),z=new Float32Array(y*3),J=new Float32Array(y),K=new Float32Array(y*2);ne.forEach((De,ot)=>{I.set([De.p.x,De.p.y,De.p.z],ot*3),z.set([De.c.r,De.c.g,De.c.b],ot*3),J[ot]=De.s,K.set([De.ph,De.mode],ot*2)});let ce=l(new Bt);ce.setAttribute("position",new kt(I,3)),ce.setAttribute("aColor",new kt(z,3)),ce.setAttribute("aSize",new kt(J,1)),ce.setAttribute("aPh",new kt(K,2));let Me=new Ws(ce,l(Km(rl(),_)));Me.frustumCulled=!1,Me.userData.noAO=!0,a.add(Me)}if(e.add(a),i)for(let y of W)for(let I of a.children.slice(y.c0,y.c1))I.visible=!1;let dl=new D,pl=new an,wd=new D,ml=new lt,H0=new _i,Ad=new ye,z0=(y,I,z)=>{if(_.uT.value=I,v.uniforms.uT.value=I,z instanceof yn&&(s.getDrawingBufferSize(ae),_.uPx.value=ae.y/(2*Math.tan(Is.degToRad(z.fov)/2))),Ju.material.opacity=Math.sin(I*3)>0?.95:.1,ds[0].rotation.set(Math.sin(I*.33)*.55,0,Math.cos(I*.27)*.45-.2),ds[1].rotation.set(Math.cos(I*.29)*.5,0,Math.sin(I*.35)*.45+.2),ds[2]&&ds[2].rotation.set(-.15+Math.sin(I*.21)*.25,0,.3+Math.cos(I*.17)*.3),ds[3]&&ds[3].rotation.set(-.1+Math.cos(I*.19)*.25,0,-.3+Math.sin(I*.23)*.3),z.getWorldPosition(dl),Ad.set(Is.clamp((dl.x-Fo.position.x)/40,-1,1),-.2+Math.sin(I*.7)*.15),Md.uniforms.uLook.value.copy(Ad),Qu.material.opacity=.28+Math.sin(I*2.3)*.08,Ku.color.setRGB(2.4+Math.sin(I*4)*.7,.2,.15+(Math.sin(I*.8)>.6?1.2:0)),Mt.update(I),hl.length){for(let Me of hl)hi.setColorAt(Me.i,zr.setRGB(1.6+Math.random()*.8,.45+Math.random()*.25,.08));hi.instanceColor&&(hi.instanceColor.needsUpdate=!0)}for(let Me=0;Me<eh.length;Me++){let De=eh[Me].emissiveMap;Oo[Me].broke||(De.offset.y=Math.floor(I*6+Me)*.125)}for(let Me of Zt)Me.intensity=60*(.94+Math.random()*.06);for(let Me=0;Me<Un.length;Me++){let De=Un[Me],ot=De.hi-De.lo,_t=(De.ax===0?De.x:De.z)+De.dir*De.spd*y;_t>De.hi?_t-=ot:_t<De.lo&&(_t+=ot),De.ax===0?De.x=_t:De.z=_t,pl.setFromEuler(H0.set(0,De.ry,Math.sin(I*.8+Me)*.03)),ml.compose(dl.set(De.x,De.y+(De.sc>1?Math.sin(I*.6+Me*2)*.4:0),De.z),pl,wd.setScalar(De.sc)),oi.setMatrixAt(Me,ml)}oi.instanceMatrix.needsUpdate=!0;let J=I%16/16,K=J<.75,ce=40-J/.75*300;pl.identity();for(let Me=0;Me<jt;Me++)ml.compose(dl.set(Ae,he+1.95,ce+Me*9.6),pl,wd.setScalar(K?1:0)),Ut.setMatrixAt(Me,ml);fn.visible=K,fn.position.set(Ae,he+1.95,ce-hn/2-.2),Ut.instanceMatrix.needsUpdate=!0,b.intensity*=Math.pow(.002,y)},k0=0;return{group:a,spots:th,walls:nh,blockers:pe,groundY:y=>Math.abs(y)>=n0.x?n0.h:0,windows:hi,wins:ju,racks:Oo,towerBody:Hr,solids:[Hr],ground:V,eye:Fo,hitLight:b,lightWorld:D0,breakWindow:P0,breakRack:U0,rebuild:F0,beforeRender:(y,I,z)=>{if(!Z||k0++<3)return;let J=Z;(J.getReflectionCamera?J.getReflectionCamera(z):J.camera).layers.set(0),V.visible=!1,Z.onBeforeRender.call(Z,y,I,z),V.visible=!0,B.uReflMat.value.copy(Z.material.uniforms.textureMatrix.value).multiply(re)},resize:(y,I)=>{Z?.getRenderTarget().setSize(Math.max(64,Math.round(y*.5)),Math.max(64,Math.round(I*.5)))},update:z0,dispose:()=>{e.remove(a),c.forEach(y=>y.dispose());for(let y of Oo)y.mesh.geometry.dispose();hi.dispose(),Z?.dispose(),p.dispose(),e.environment=null}}}async function s0(s,e){let t=Math.min(8,s.capabilities.getMaxAnisotropy()),n=new _r,i=(c,l)=>new Promise(u=>n.load(c,h=>{h.wrapS=h.wrapT=Tn,h.anisotropy=t,l&&(h.colorSpace=pn),u(h)},void 0,()=>u(null))),r=new Map;await Promise.all(["concrete_floor_02","large_floor_tiles_02"].map(async c=>r.set(c,await Promise.all([i(`${e}${c}/diff.webp`,!0),i(`${e}${c}/nor.webp`,!1),i(`${e}${c}/rough.webp`,!1)]))));let o=[],a=(c,l)=>{if(!c)return null;let u=c.clone();return u.repeat.set(l[0],l[1]),u.needsUpdate=!0,o.push(u),u};return{env:null,material:(c,l,u,h=.05)=>{let[d,f,m]=r.get(c)||[null,null,null];return new ct({map:a(d,l),normalMap:a(f,l),roughnessMap:a(m,l),color:u,metalness:h,normalScale:new ye(1.6,1.6)})},dispose:()=>o.forEach(c=>c.dispose())}}function r0(){let s=new Io({uniforms:{tDiffuse:{value:null},uShadow:{value:new D(1,1,1)},uHigh:{value:new D(1,1,1)},uSat:{value:1},uContrast:{value:1},uVignette:{value:.5},uTime:{value:0},uAberr:{value:.0012}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
      }`}),e=s.uniforms;return{pass:s,apply:t=>{e.uShadow.value.set(...t.shadow),e.uHigh.value.set(...t.high),e.uSat.value=t.sat,e.uContrast.value=t.contrast,e.uVignette.value=t.vignette},tick:t=>{e.uTime.value=t%10}}}var Vu=class extends ns{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Vf(t)}),this.register(function(t){return new Gf(t)}),this.register(function(t){return new jf(t)}),this.register(function(t){return new Qf(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new Xf(t)}),this.register(function(t){return new qf(t)}),this.register(function(t){return new Yf(t)}),this.register(function(t){return new Zf(t)}),this.register(function(t){return new kf(t)}),this.register(function(t){return new $f(t)}),this.register(function(t){return new Wf(t)}),this.register(function(t){return new Jf(t)}),this.register(function(t){return new Kf(t)}),this.register(function(t){return new Hf(t)}),this.register(function(t){return new td(t)}),this.register(function(t){return new nd(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Cs.extractUrlBase(e);o=Cs.resolveURL(l,this.path)}else o=Cs.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new bo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===u0){try{o[Ht.KHR_BINARY_GLTF]=new id(e)}catch(h){i&&i(h);return}r=JSON.parse(o[Ht.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new ud(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ht.KHR_MATERIALS_UNLIT:o[h]=new zf;break;case Ht.KHR_DRACO_MESH_COMPRESSION:o[h]=new sd(r,this.dracoLoader);break;case Ht.KHR_TEXTURE_TRANSFORM:o[h]=new rd;break;case Ht.KHR_MESH_QUANTIZATION:o[h]=new od;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function mb(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var Ht={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Hf=class{constructor(e){this.parser=e,this.name=Ht.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],Zn);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ti(u),l.distance=h;break;case"spot":l=new is(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),us(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},zf=class{constructor(){this.name=Ht.KHR_MATERIALS_UNLIT}getMaterialType(){return Lt}extendParams(e,t,n){let i=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Zn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,pn))}return Promise.all(i)}},kf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Vf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(a,a)}return Promise.all(r)}},Gf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Wf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Xf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Zn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,pn)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},qf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},Yf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(a[0],a[1],a[2],Zn),Promise.all(r)}},Zf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},$f=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(a[0],a[1],a[2],Zn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,pn)),Promise.all(r)}},Kf=class{constructor(e){this.parser=e,this.name=Ht.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Jf=class{constructor(e){this.parser=e,this.name=Ht.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Jt}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},jf=class{constructor(e){this.parser=e,this.name=Ht.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Qf=class{constructor(e){this.parser=e,this.name=Ht.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},ed=class{constructor(e){this.parser=e,this.name=Ht.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return n.loadTextureImage(e,o.source,c)}},td=class{constructor(e){this.name=Ht.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,i.mode,i.filter),f})})}else return null}},nd=class{constructor(e){this.name=Ht.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Di.TRIANGLES&&l.mode!==Di.TRIANGLE_STRIP&&l.mode!==Di.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let x=new lt,g=new D,p=new an,M=new D(1,1,1),_=new $n(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&M.fromBufferAttribute(c.SCALE,v),_.setMatrixAt(v,x.compose(g,p,M));for(let v in c)if(v==="_COLOR_0"){let C=c[v];_.instanceColor=new Ii(C.array,C.itemSize,C.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);mn.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},u0="glTF",ol=12,o0={JSON:1313821514,BIN:5130562},id=class{constructor(e){this.name=Ht.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ol),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==u0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ol,r=new DataView(e,ol),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===o0.JSON){let l=new Uint8Array(e,ol+o,a);this.content=n.decode(l)}else if(c===o0.BIN){let l=ol+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},sd=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ht.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=ld[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=ld[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Lo[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=c[m];g!==void 0&&(x.normalized=g)}h(f)},a,l,Zn,d)})})}},rd=class{constructor(){this.name=Ht.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},od=class{constructor(){this.name=Ht.KHR_MESH_QUANTIZATION}},Gu=class extends ws{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,x=m-l,g=-2*f+3*d,p=f-d,M=1-g,_=p-d+h;for(let v=0;v!==a;v++){let C=o[x+v+a],S=o[x+v+c]*u,F=o[m+v+a],H=o[m+v]*u;r[v]=M*C+_*S+g*F+p*H}return r}},gb=new an,ad=class extends Gu{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return gb.fromArray(r).normalize().toArray(r),r}},Di={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},a0={9728:Mn,9729:In,9984:Cc,9985:So,9986:Ar,9987:bi},l0={33071:Ci,33648:ao,10497:Tn},Ff={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ld={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Js={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},xb={CUBICSPLINE:void 0,LINEAR:hr,STEP:ur},Of={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function vb(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zi})),s.DefaultMaterial}function Ur(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function us(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _b(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function yb(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Mb(s){let e,t=s.extensions&&s.extensions[Ht.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Bf(t.attributes):e=s.indices+":"+Bf(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Bf(s.targets[n]);return e}function Bf(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function cd(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function bb(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Eb=new lt,ud=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new _r(this.options.manager):this.textureLoader=new Ia(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return Ur(r,a,i),us(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(let c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ht.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Cs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=Ff[i.type],a=Lo[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new kt(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=Ff[i.type],l=Lo[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(d/f),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,_=t.cache.get(M);_||(x=new l(a,p*f,i.count*f/u),_=new pr(x,f/u),t.cache.add(M,_)),g=new ks(_,c,d%f/u,m)}else a===null?x=new l(i.count*c):x=new l(a,d,i.count*c),g=new kt(x,c,m);if(i.sparse!==void 0){let p=Ff.SCALAR,M=Lo[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,C=new M(o[1],_,i.sparse.count*p),S=new l(o[2],v,i.sparse.count*c);a!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let F=0,H=C.length;F<H;F++){let b=C[F];if(g.setX(b,S[F*c]),c>=2&&g.setY(b,S[F*c+1]),c>=3&&g.setZ(b,S[F*c+2]),c>=4&&g.setW(b,S[F*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=a0[d.magFilter]||In,u.minFilter=a0[d.minFilter]||bi,u.wrapS=l0[d.wrapS]||Tn,u.wrapT=l0[d.wrapT]||Tn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Mn&&u.minFilter!==In,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Hn(x);g.needsUpdate=!0,d(g)}),t.load(Cs.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),us(h,o),h.userData.mimeType=o.mimeType||bb(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Ht.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Ht.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[Ht.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new xo,ei.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Gs,ei.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ct}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[Ht.KHR_MATERIALS_UNLIT]){let h=i[Ht.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Oe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Zn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,pn)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wn);let u=r.alphaMode||Of.OPAQUE;if(u===Of.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Of.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ye(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Lt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Lt){let h=r.emissiveFactor;a.emissive=new Oe().setRGB(h[0],h[1],h[2],Zn)}return r.emissiveTexture!==void 0&&o!==Lt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,pn)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),us(h,r),t.associations.set(h,{materials:e}),r.extensions&&Ur(i,h,r),h})}createUniqueName(e){let t=un.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[Ht.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return c0(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=Mb(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[Ht.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=c0(new Bt,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?vb(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=o[f],p,M=l[f];if(g.mode===Di.TRIANGLES||g.mode===Di.TRIANGLE_STRIP||g.mode===Di.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Vs(x,M):new Je(x,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Di.TRIANGLE_STRIP?p.geometry=If(p.geometry,Ya):g.mode===Di.TRIANGLE_FAN&&(p.geometry=If(p.geometry,wo));else if(g.mode===Di.LINES)p=new gr(x,M);else if(g.mode===Di.LINE_STRIP)p=new Es(x,M);else if(g.mode===Di.LINE_LOOP)p=new ua(x,M);else if(g.mode===Di.POINTS)p=new Ws(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&yb(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),us(p,r),g.extensions&&Ur(i,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Ur(i,h[0],r),h[0];let d=new en;r.extensions&&Ur(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yn(Is.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ss(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),us(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let d=new lt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new mr(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){let f=i.channels[h],m=i.samplers[f.sampler],x=f.target,g=x.node,p=i.parameters!==void 0?i.parameters[m.input]:m.input,M=i.parameters!==void 0?i.parameters[m.output]:m.output;x.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(x))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let _=0,v=d.length;_<v;_++){let C=d[_],S=f[_],F=m[_],H=x[_],b=g[_];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();let w=n._createAnimationTracks(C,S,F,H,b);if(w)for(let B=0;B<w.length;B++)p.push(w[B])}let M=new vr(r,void 0,p);return us(M,i),M})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Eb)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new bs:l.length>1?u=new en:l.length===1?u=l[0]:u=new mn,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),us(u,r),r.extensions&&Ur(n,u,r),r.matrix!==void 0){let h=new lt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(r.mesh!==void 0&&i.meshCache.refs[r.mesh]>1){let h=i.associations.get(u);i.associations.set(u,{...h})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new en;n.name&&(r.name=i.createUniqueName(n.name)),us(r,n),n.extensions&&Ur(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[d,f]of i.associations)(d instanceof ei||d instanceof Hn)&&h.set(d,f);return u.traverse(d=>{let f=i.associations.get(d);f!=null&&h.set(d,f)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];Js[r.path]===Js.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(Js[r.path]){case Js.weights:l=Qi;break;case Js.rotation:l=es;break;case Js.translation:case Js.scale:l=ts;break;default:n.itemSize===1?l=Qi:l=ts;break}let u=i.interpolation!==void 0?xb[i.interpolation]:hr,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let m=new l(c[d]+"."+Js[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=cd(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof es?ad:Gu;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function Sb(s,e,t){let n=e.attributes,i=new vi;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){let u=cd(Lo[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new D,c=new D;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=cd(Lo[d.componentType]);c.multiplyScalar(x)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new fi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function c0(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=ld[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return It.workingColorSpace!==Zn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${It.workingColorSpace}" not supported.`),us(s,e),Sb(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?_b(s,e.targets,t):s})}var hd=1.78,h0=new Map;function al(s,e){let t=h0.get(s);if(!t){let o=new Float32Array(65536);for(let f=0;f<256;f++)for(let m=0;m<256;m++){let x=m/256,g=f/256,p=0;if(s==="knit"){let M=x*8%1,_=g*8%1,v=Math.abs(M-.5)*2;p=Math.pow(Math.sin(Math.PI*((v*.55+_)%1)),2)*(.75+.25*Math.sin(Math.PI*M))}else s==="twill"?p=.5+.5*Math.sin(2*Math.PI*(x+g)*12)*(.85+.15*Math.sin(2*Math.PI*g*48)):p=Math.max(Math.pow(Math.abs(Math.sin(Math.PI*x*6)),30),Math.pow(Math.abs(Math.sin(Math.PI*g*6)),30))*.8+.2*Math.sin(2*Math.PI*x*40)*Math.sin(2*Math.PI*g*40);o[f*256+m]=p+(Math.random()-.5)*.08}let a=document.createElement("canvas"),c=document.createElement("canvas");a.width=a.height=c.width=c.height=256;let l=a.getContext("2d").createImageData(256,256),u=c.getContext("2d").createImageData(256,256),h=(f,m)=>o[(m+256)%256*256+(f+256)%256];for(let f=0;f<256;f++)for(let m=0;m<256;m++){let x=(h(m+1,f)-h(m-1,f))*2,g=(h(m,f+1)-h(m,f-1))*2,p=Math.hypot(x,g,1),M=(f*256+m)*4;l.data[M]=128-x/p*127,l.data[M+1]=128-g/p*127,l.data[M+2]=128+1/p*127,l.data[M+3]=255;let _=200+(.5-h(m,f))*90;u.data[M]=u.data[M+1]=u.data[M+2]=Math.max(0,Math.min(255,_)),u.data[M+3]=255}a.getContext("2d").putImageData(l,0,0),c.getContext("2d").putImageData(u,0,0);let d=f=>{let m=new yi(f);return m.wrapS=m.wrapT=Tn,m.anisotropy=4,m};t={normal:d(a),rough:d(c)},h0.set(s,t)}let n=t.normal.clone(),i=t.rough.clone();return n.repeat.set(e,e),i.repeat.set(e,e),{normalMap:n,roughnessMap:i}}var Tb={Hoodie:()=>new Jt({color:"#4a4b51",roughness:.6,metalness:0,sheen:.9,sheenRoughness:.45,sheenColor:new Oe("#a4a5ad"),normalScale:new ye(.45,.45),...al("ripstop",44)}),Trousers:()=>new Jt({color:"#5d5e64",roughness:.84,metalness:0,sheen:.5,sheenRoughness:.65,sheenColor:new Oe("#84848a"),normalScale:new ye(.5,.5),...al("twill",30)}),Gloves:()=>new ct({color:"#34353a",roughness:.55,metalness:0,normalScale:new ye(.4,.4),...al("knit",70)}),Trim:()=>new ct({color:"#2a2b30",roughness:.9,metalness:0,normalScale:new ye(.8,.8),...al("knit",60)}),Shoes:()=>new ct({color:"#dcdcdf",roughness:.5,metalness:0,emissive:"#141414"}),Sole:()=>new ct({color:"#f1f1f1",roughness:.55,metalness:0,emissive:"#1c1c1c"}),Void:()=>new Lt({color:"#000000"}),Mask:()=>new Jt({color:"#0b0b0d",roughness:.95,metalness:0,sheen:.25,sheenRoughness:.8,sheenColor:new Oe("#2a2a2e")}),Pack:()=>new ct({color:"#36373c",roughness:.5,metalness:.05,normalScale:new ye(.45,.45),...al("ripstop",24)}),Can:()=>new ct({color:"#b8b8bc",roughness:.35,metalness:.8}),Cap:()=>new ct({color:"#f2f2f2",roughness:.5,metalness:0}),Reflect:()=>new ct({color:"#e6e7ea",roughness:.32,metalness:.35,emissive:"#2c2c2e"}),Detail:()=>new ct({color:"#17181b",roughness:.42,metalness:.15})},fd=new Map,f0=s=>fd.get(s)||fd.set(s,new Vu().loadAsync(s).catch(e=>{throw fd.delete(s),e})).get(s);async function Wu(s,e,t,n={}){let i=await f0(s),r=null;if(t)try{r=await f0(t)}catch(ie){console.warn("writer model",ie)}let o={};r?.scene.traverse(ie=>{if(typeof ie.userData.vx=="string")try{o=JSON.parse(ie.userData.vx)}catch{}});let a=i.scene.getObjectByName("Armature")||i.scene.children[0],c=a.children[0],l=[],u=ie=>{let Ae=new bs;return Ae.name=ie.name,Ae.position.copy(ie.position),Ae.quaternion.copy(ie.quaternion),Ae.scale.copy(ie.scale),o.rest?.[ie.name]&&Ae.position.fromArray(o.rest[ie.name]),l.push(Ae),ie.children.forEach(he=>Ae.add(u(he))),Ae},h=u(c),d=new mn;d.position.copy(a.position),d.quaternion.copy(a.quaternion),d.scale.copy(a.scale),d.add(h);let f=new en;f.add(d),f.updateMatrixWorld(!0);let m=ie=>{let Ae=l.find(he=>he.name.replace(/^mixamorig:?/,"")===ie);if(!Ae)throw new Error("writer: no bone "+ie);return Ae},x=ie=>m(ie).getWorldPosition(new D),g=ie=>l.indexOf(ie),p=Math.min(x("LeftToeBase").y,x("RightToeBase").y),_=(x("Head").y-p)/.89,v=ie=>ie/hd*_,C=[],S=[];if(r)try{r.scene.updateMatrixWorld(!0),r.scene.traverse(ie=>{let Ae=ie;if(!Ae.isSkinnedMesh)return;let he=Ae.geometry.clone();he.applyMatrix4(Ae.matrixWorld);let Fe=Ae.skeleton.bones.map(He=>l.findIndex(Ne=>Ne.name===He.name)),Be=he.attributes.skinIndex;for(let He=0;He<Be.array.length;He++)Be.array[He]=Math.max(0,Fe[Be.array[He]]);Be.needsUpdate=!0;let qe=Ae.material,Ue=(n[qe.name]||Tb[qe.name]||(()=>qe))(),ut=Ue;qe.map&&ut.isMeshStandardMaterial&&!ut.map&&(ut.map=qe.map,ut.aoMap=qe.map,ut.aoMapIntensity=1,ut.needsUpdate=!0);let W=new Vs(he,Ue);W.name=Ae.name,C.push(W),S.push(he,Ue)})}catch(ie){console.warn("writer model",ie)}let F=[];if(!C.length){let ie={hoodie:0,trousers:1,shoes:2,skin:3,void:4,trim:5},Ae=(nt,Mt,Rn,jt,hn,gn=.18)=>{let nn=nt.attributes.position,Ut=nn.count,gt=new Uint16Array(Ut*4),fn=new Float32Array(Ut*4),xn=Rn.clone().sub(Mt),Ft=Math.max(1e-9,xn.lengthSq()),Zt=new D,$t=jt.parent instanceof bs?jt.parent:jt;for(let Rt=0;Rt<Ut;Rt++){Zt.fromBufferAttribute(nn,Rt);let k=Is.clamp(Zt.clone().sub(Mt).dot(xn)/Ft,0,1),ge=g(jt),Ye=g(jt),tt=0;k<gn&&$t!==jt?(Ye=g($t),tt=.5-k/gn*.5):hn&&k>1-gn&&(Ye=g(hn),tt=(k-(1-gn))/gn*.5),gt[Rt*4]=ge,gt[Rt*4+1]=Ye,fn[Rt*4]=1-tt,fn[Rt*4+1]=tt}return nt.setAttribute("skinIndex",new Zi(gt,4)),nt.setAttribute("skinWeight",new pt(fn,4)),nt},he=(nt,Mt,Rn,jt,hn,gn,nn={})=>{let Ut=x(nt),gt=x(Mt),fn=gt.clone().sub(Ut),xn=fn.length(),Ft=(nn.extend||0)*xn,Zt=Ut.clone().addScaledVector(fn.normalize(),xn+Ft),$t=xn+Ft,Rt=nn.radial||14,k=new ln(v(jt),v(Rn),$t,Rt,8,!0);k.translate(0,$t/2,0);let ge=new zn(v(Rn),Rt,8,0,Math.PI*2,Math.PI/2,Math.PI/2),Ye=new zn(v(jt),Rt,8,0,Math.PI*2,0,Math.PI/2);Ye.translate(0,$t,0);let tt=On([k.toNonIndexed(),ge.toNonIndexed(),Ye.toNonIndexed()]);nn.squash&&tt.scale(1,1,nn.squash),tt.applyQuaternion(new an().setFromUnitVectors(new D(0,1,0),fn)),tt.translate(Ut.x,Ut.y,Ut.z),F.push({geo:Ae(tt,Ut,Zt,m(nt),gn?m(gn):null),mat:hn})},Fe=(nt,Mt)=>{let jt=[],hn=[],gn=[],nn=[],Ut=[];for(let Ft=0;Ft<nt.length-1;Ft++)for(let Zt=0;Zt<4;Zt++){let $t=Zt/4,Rt=nt[Ft],k=nt[Ft+1],ge=$t*$t*(3-2*$t);Ut.push({at:Rt.at.clone().lerp(k.at,$t),rx:Rt.rx+(k.rx-Rt.rx)*ge,rz:Rt.rz+(k.rz-Rt.rz)*ge,b0:Rt.bone,b1:k.bone,w:$t,dz:(Rt.dz||0)+((k.dz||0)-(Rt.dz||0))*ge})}let gt=nt[nt.length-1];Ut.push({at:gt.at.clone(),rx:gt.rx,rz:gt.rz,b0:gt.bone,b1:gt.bone,w:0,dz:gt.dz||0}),Ut.forEach(Ft=>{for(let Zt=0;Zt<22;Zt++){let $t=Zt/22*Math.PI*2;jt.push(Ft.at.x+Math.sin($t)*v(Ft.rx),Ft.at.y,Ft.at.z+v(Ft.dz)+Math.cos($t)*v(Ft.rz)),hn.push(g(Ft.b0),g(Ft.b1),0,0),gn.push(1-Ft.w,Ft.w,0,0)}});for(let Ft=0;Ft<Ut.length-1;Ft++)for(let Zt=0;Zt<22;Zt++){let $t=Ft*22+Zt,Rt=Ft*22+(Zt+1)%22,k=$t+22,ge=Rt+22;nn.push($t,k,Rt,Rt,k,ge)}let fn=new Bt;fn.setAttribute("position",new pt(jt,3)),fn.setAttribute("skinIndex",new Zi(hn,4)),fn.setAttribute("skinWeight",new pt(gn,4)),fn.setIndex(nn);let xn=fn.toNonIndexed();xn.computeVertexNormals(),F.push({geo:xn,mat:Mt})},Be=(nt,Mt,Rn,jt,hn,gn,nn=0,Ut=Math.PI*2,gt=0,fn=Math.PI)=>{let xn=new zn(1,20,14,nn,Ut,gt,fn).toNonIndexed();xn.scale(v(Rn),v(jt),v(hn)),xn.translate(Mt.x,Mt.y,Mt.z);let Ft=xn.attributes.position.count,Zt=g(m(nt));return xn.setAttribute("skinIndex",new Zi(new Uint16Array(Ft*4).map(($t,Rt)=>Rt%4===0?Zt:0),4)),xn.setAttribute("skinWeight",new pt(new Float32Array(Ft*4).map(($t,Rt)=>Rt%4===0?1:0),4)),F.push({geo:xn,mat:gn}),xn},qe=x("Hips"),Ue=x("Spine"),ut=x("Spine1"),W=x("Spine2"),He=x("Neck"),Ne=x("Head");Fe([{at:qe.clone().add(new D(0,-v(.1),0)),rx:.19,rz:.13,bone:m("Hips"),dz:.01},{at:Ue,rx:.175,rz:.125,bone:m("Spine"),dz:.015},{at:ut,rx:.18,rz:.13,bone:m("Spine1"),dz:.01},{at:W,rx:.2,rz:.13,bone:m("Spine2")},{at:He.clone().add(new D(0,-v(.02),0)),rx:.19,rz:.12,bone:m("Spine2")},{at:He.clone().add(new D(0,v(.03),-v(.01))),rx:.085,rz:.08,bone:m("Neck")}],ie.hoodie);for(let nt of["Left","Right"]){he(`${nt}Shoulder`,`${nt}Arm`,.07,.065,ie.hoodie,`${nt}Arm`,{extend:.1}),he(`${nt}Arm`,`${nt}ForeArm`,.062,.052,ie.hoodie,`${nt}ForeArm`),he(`${nt}ForeArm`,`${nt}Hand`,.052,.045,ie.hoodie,`${nt}Hand`);let Mt=x(`${nt}Hand`),Rn=x(`${nt}ForeArm`),jt=Mt.clone().sub(Rn).normalize();Be(`${nt}Hand`,Mt.clone().addScaledVector(jt,v(.06)),.045,.045,.045,ie.skin),he(`${nt}UpLeg`,`${nt}Leg`,.085,.068,ie.trousers,`${nt}Leg`,{extend:.04}),he(`${nt}Leg`,`${nt}Foot`,.066,.06,ie.trousers,`${nt}Foot`);let hn=x(`${nt}Foot`),gn=x(`${nt}ToeBase`),nn=hn.clone().lerp(gn,.55);nn.y=Math.min(hn.y,gn.y)+v(.03);let Ut=Be(`${nt}Foot`,nn,.055,.05,.14,ie.shoes),gt=Math.atan2(gn.x-hn.x,gn.z-hn.z);Ut.translate(-nn.x,-nn.y,-nn.z),Ut.rotateY(gt),Ut.translate(nn.x,nn.y,nn.z)}let Ke=Ne.clone().add(new D(0,v(.09),-v(.015)));Be("Head",Ke,.125,.14,.135,ie.hoodie,Math.PI*.18,Math.PI*1.64),Be("Head",Ke.clone().add(new D(0,-v(.005),v(.02))),.1,.115,.1,ie.void);let Le=new ji(1,.11,8,24).toNonIndexed();Le.scale(v(.088),v(.112),v(.088)),Le.translate(Ke.x,Ke.y-v(.005),Ke.z+v(.11));{let nt=Le.attributes.position.count,Mt=g(m("Head"));Le.setAttribute("skinIndex",new Zi(new Uint16Array(nt*4).map((Rn,jt)=>jt%4===0?Mt:0),4)),Le.setAttribute("skinWeight",new pt(new Float32Array(nt*4).map((Rn,jt)=>jt%4===0?1:0),4)),F.push({geo:Le,mat:ie.hoodie})}let Ce=new Map;for(let nt of F){let Mt=nt.geo.index?nt.geo.toNonIndexed():nt.geo;Mt.attributes.normal||Mt.computeVertexNormals(),["uv","uv1"].forEach(Rn=>Mt.deleteAttribute(Rn)),(Ce.get(nt.mat)||Ce.set(nt.mat,[]).get(nt.mat)).push(Mt)}let Xe=[...Ce.keys()].sort((nt,Mt)=>nt-Mt),dt=On(Xe.map(nt=>On(Ce.get(nt))),!0),Gt=[new ct({color:"#45464c",roughness:.86,metalness:0}),new ct({color:"#5a5b61",roughness:.8,metalness:0}),new ct({color:"#f4f4f4",roughness:.4,metalness:0,emissive:"#202020"}),new ct({color:"#6a6a6e",roughness:.65,metalness:0}),new Lt({color:"#000000"})],xt=Xe.map(nt=>Gt[nt]);C.push(new Vs(dt,xt)),S.push(dt,...Gt)}for(let ie of C)ie.castShadow=e,ie.receiveShadow=!0,ie.frustumCulled=!1,f.add(ie);f.updateMatrixWorld(!0);let H=o.bind?l.map(ie=>o.bind[ie.name]?new lt().fromArray(o.bind[ie.name]).invert():ie.matrixWorld.clone().invert()):void 0,b=new mr(l,H);for(let ie of C)ie.bind(b);let w=o.scale||hd/_,B=new en;f.scale.setScalar(w),f.position.y=o.scale?0:-p*w,B.add(f);let V=new Map,Z=h.position.clone();for(let ie of i.animations){for(let Ae of ie.tracks)if(/Hips\.position$/.test(Ae.name))for(let he=0;he<Ae.values.length;he+=3)Ae.values[he]=Z.x,Ae.values[he+2]=Z.z;V.set(ie.name,ie)}let re=new Da(f),ae=null,N="",G=(ie,Ae=.2,he=!1)=>{if(ie===N)return;let Fe=V.get(ie);if(!Fe)return;let Be=re.clipAction(Fe);Be.reset(),Be.setLoop(he?mu:gu,1/0),Be.clampWhenFinished=he,Be.enabled=!0,Be.setEffectiveWeight(1),ae&&Be.crossFadeFrom(ae,Ae,!0),Be.play(),ae=Be,N=ie};G("Idle_Loop",0);let oe=m("Spine1"),Te=m("Neck"),xe=m("Head"),Ie=0,R=0,X=m("RightArm"),j=m("RightForeArm"),ne=m("RightHand"),T=m("Spine2"),U=new en;{let ie=new Jt({color:"#c4c6cc",roughness:.28,metalness:.9,clearcoat:.6,clearcoatRoughness:.25}),Ae=new ct({color:"#f2f2f2",roughness:.5}),he=new Je(new ln(.033,.033,.19,20),ie),Fe=new Je(new zn(.033,20,10,0,Math.PI*2,0,Math.PI/2),ie);Fe.position.y=.095;let Be=new Je(new ln(.009,.01,.02,12),Ae);Be.position.y=.135;let qe=new Je(new ln(.003,.003,.012,8),Ae);qe.rotation.x=Math.PI/2,qe.position.set(0,.138,.01);for(let Ue of[he,Fe,Be,qe])Ue.castShadow=e,U.add(Ue);for(let Ue of U.children)Ue.position.y-=.07;S.push(he.geometry,Fe.geometry,Be.geometry,qe.geometry,ie,Ae)}U.visible=!1;let O=new D,Y=new D,Q=new D,Ee=new D,be=new D,me=new D,te=new an,ve=new an,le=new an,Re=(ie,Ae,he,Fe)=>{te.setFromUnitVectors(Ae,he),ie.getWorldQuaternion(ve),ie.parent.getWorldQuaternion(le),ie.quaternion.slerp(le.invert().multiply(te.multiply(ve)),Fe),ie.updateMatrixWorld(!0)},A=null,de=new an,_e=new an;if(o.grip&&o.bind?.[ne.name]){let ie=new lt().fromArray(o.bind[ne.name]).invert().multiply(new lt().fromArray(o.grip));A=new D,ie.decompose(A,de,new D),_e.copy(de).invert()}let Ve=new lt,we=new an,L=new an,E=new D(0,1,0),q=new D,ue=new D,Se=!1,pe=1,Ge=0,Pe=ie=>{B.updateMatrixWorld(!0),X.getWorldPosition(O),j.getWorldPosition(Y),ne.getWorldPosition(Q);let Ae=O.distanceTo(Y),he=Y.distanceTo(Q);Ee.copy(q).sub(O);let Fe=Math.max(.05,Math.min(Ee.length(),(Ae+he)*.995));Ee.normalize();let Be=Math.max(-1,Math.min(1,(Ae*Ae+Fe*Fe-he*he)/(2*Ae*Fe))),qe=Math.sqrt(1-Be*Be);T.getWorldPosition(me),me.subVectors(O,me).setY(0).normalize().multiplyScalar(.7),me.y=-1,me.addScaledVector(Ee,-me.dot(Ee)).normalize(),be.copy(O).addScaledVector(Ee,Ae*Be).addScaledVector(me,Ae*qe),Re(X,Y.clone().sub(O).normalize(),be.sub(O).normalize(),ie),j.getWorldPosition(Y),ne.getWorldPosition(Q),be.copy(O).addScaledVector(Ee,Fe),Re(j,Q.clone().sub(Y).normalize(),be.sub(Y).normalize(),ie),ne.getWorldPosition(Q)};return{root:B,height:hd,play:G,playing:()=>N,can:U,aim:(ie,Ae,he=1)=>{Se=!!ie,ie&&(q.copy(ie),ue.copy(Ae||ie),pe=he)},update:ie=>{if(re.update(ie),R+=ie,Ie+=((/Idle/.test(N)&&!Se?1:0)-Ie)*Math.min(1,ie*2),Ie>.01){oe.rotateX(Math.sin(R*1.6)*.018*Ie);let Ae=Math.sin(R*.23)*.5+Math.sin(R*.61+1.3)*.2;Te.rotateY(Ae*.18*Ie),xe.rotateY(Ae*.22*Ie),xe.rotateX((Math.sin(R*.37)*.06+.03)*Ie)}Ge+=((Se?pe:0)-Ge)*Math.min(1,ie*9),Ge>.01?(Pe(Ge),U.visible=Ge>.3,A?(we.setFromRotationMatrix(Ve.lookAt(ue,Q,E)),ne.parent.getWorldQuaternion(le),L.copy(le).invert().multiply(we).multiply(_e),ne.quaternion.slerp(L,Ge),ne.updateMatrixWorld(!0),ne.getWorldQuaternion(we).multiply(de),U.quaternion.copy(we),U.position.copy(A),ne.localToWorld(U.position),U.position.add(me.set(0,.075,0).applyQuaternion(we))):(U.position.copy(Q).lerp(Y,-.15),U.lookAt(ue))):U.visible=!1},dispose:()=>{re.stopAllAction(),S.forEach(ie=>ie.dispose())}}}var js=["#f4f4f4","#9a9a9e","#0c0c0e","#c9ccd2"],qu=["WHITE","GREY","BLACK","CHROME"],Si=200,ri=512,ll=16,d0=120,wb=64,Ab=40,p0=3e3,Rb=[0,.025,.06,.14],Cb=[0,.97,.93,.82],Pb=[0,.07,.11,.16],Ib=[0,1.2,.9,.7],Db=4,No=s=>{let e=Math.max(.05,Math.min(.6,s.dist)),t=Rb[s.cap]*(.45+.55*Math.pow(e/.2,.8))*(s.buff?1.6:1),n=Math.max(.1,Math.min(.85,.92-e*1.3-(s.cap-1)*.12));return{width:t,hard:n,r:t/(1+n)}},m0=s=>1/Math.pow(.35+.65*Math.max(.05,Math.min(.6,s))/.2,1.5),Lb="vexvoid-game",dd="walls",g0=null,Nb=()=>g0||(g0=new Promise(s=>{try{let e=indexedDB.open(Lb,1);e.onupgradeneeded=()=>e.result.createObjectStore(dd),e.onsuccess=()=>s(e.result),e.onerror=()=>s(null)}catch{s(null)}})),Xu=async(s,e)=>{let t=await Nb();if(t)return new Promise(n=>{try{let i=e(t.transaction(dd,s).objectStore(dd));i.onsuccess=()=>n(i.result),i.onerror=()=>n(void 0)}catch{n(void 0)}})},Ub={load:async s=>{let e=await Xu("readonly",t=>t.get(s));return e?e.png:null},save:async(s,e)=>{await Xu("readwrite",t=>e?t.put({w:0,h:0,png:e},s):t.delete(s))},loadStrokes:async s=>await Xu("readonly",e=>e.get(s+"#strokes"))||null,saveStrokes:async(s,e)=>{await Xu("readwrite",t=>e&&e.length?t.put(e,s+"#strokes"):t.delete(s+"#strokes"))}},Fb=s=>()=>{s=s+1831565813|0;let e=Math.imul(s^s>>>15,1|s);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296},cl=(s,e)=>{let t=document.createElement("canvas");return t.width=s,t.height=e,t};function x0(s,e,t=Ub){let n=new Map(e.map(R=>[R.id,R])),i=new Map,r=[],o=[],a=null,c=0,l=0,u=0,h=new Map,d=R=>{let X=i.get(R);if(X)return X;let j=n.get(R);if(!j)return null;let ne=Math.round(j.w*Si),T=Math.round(j.h*Si);return X={wall:j,W:ne,H:T,cols:Math.ceil(ne/ri),rows:Math.ceil(T/ri),tiles:new Map,wet:null,wetAt:null,wcols:Math.ceil(ne/ll),strokes:[],unsaved:0,blob:null,away:null,waking:null},i.set(R,X),X},f=(R,X)=>{let j=R.tiles.get(X);if(j)return j;let ne=X%R.cols*ri,T=Math.floor(X/R.cols)*ri,U=Math.min(ri,R.W-ne),O=Math.min(ri,R.H-T),Y=R.wall.normal,Q=cl(U,O),Ee=Q.getContext("2d");Ee.setTransform(1,0,0,1,-ne,-T);let be=new yi(Q);be.colorSpace=pn,be.anisotropy=4;let me=new ct({map:be,transparent:!0,roughness:.62,metalness:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),te=U+"x"+O,ve=h.get(te);ve||h.set(te,ve=new tn(U/Si,O/Si));let le=new Je(ve,me),Re=(ne+U/2)/Si-R.wall.w/2;return le.position.copy(R.wall.center).addScaledVector(Y,.012),le.position.x+=Y.z*Re,le.position.z-=Y.x*Re,le.position.y+=R.wall.h/2-(T+O/2)/Si,le.rotation.y=Math.atan2(Y.x,Y.z),le.receiveShadow=!0,le.userData.spot=R.wall.id,le.userData.noAO=!0,s.add(le),j={cv:Q,g:Ee,tex:be,mesh:le,dirty:!0},R.tiles.set(X,j),j},m=(R,X)=>{let j=R.tiles.get(X);j&&(s.remove(j.mesh),j.mesh.material.dispose(),j.tex.dispose(),R.tiles.delete(X))},x=(R,X,j,ne,T,U,O)=>{let Y=Math.max(0,Math.floor(X/ri)),Q=Math.min(R.cols-1,Math.floor(ne/ri)),Ee=Math.max(0,Math.floor(j/ri)),be=Math.min(R.rows-1,Math.floor(T/ri));for(let me=Ee;me<=be;me++)for(let te=Y;te<=Q;te++){let ve=me*R.cols+te,le=R.tiles.get(ve);if(U&&!U.snaps.has(ve)){let A=null;le&&(A=cl(le.cv.width,le.cv.height),A.getContext("2d").drawImage(le.cv,0,0)),U.snaps.set(ve,A)}let Re=le||f(R,ve);O(Re.g),Re.dirty=!0}R.unsaved=1.5},g=(R,X,j=!1)=>{if(Math.abs(X.width/X.height-R.W/R.H)>.02*R.W/R.H)return!1;let ne=32,T=Math.ceil(R.W/ne),U=Math.ceil(R.H/ne),O=cl(T,U),Y=O.getContext("2d",{willReadFrequently:!0});Y.drawImage(X,0,0,R.W/ne,R.H/ne);let Q=Y.getImageData(0,0,T,U).data,Ee=X.width/R.W,be=X.height/R.H;for(let me=0;me<R.cols*R.rows;me++){let te=me%R.cols*ri,ve=Math.floor(me/R.cols)*ri,le=Math.min(ri,R.W-te),Re=Math.min(ri,R.H-ve),A=!1;for(let _e=Math.max(0,Math.floor(ve/ne)-1);_e<=Math.min(U-1,Math.ceil((ve+Re)/ne))&&!A;_e++)for(let Ve=Math.max(0,Math.floor(te/ne)-1);Ve<=Math.min(T-1,Math.ceil((te+le)/ne));Ve++)if(Q[(_e*T+Ve)*4+3]){A=!0;break}if(!A)continue;let de=f(R,me).g;de.globalAlpha=1,de.globalCompositeOperation=j?"destination-over":"source-over",de.drawImage(X,te*Ee,ve*be,le*Ee,Re*be,te,ve,le,Re),de.globalCompositeOperation="source-over",R.tiles.get(me).dirty=!0}return!0},p=new Set,M=Promise.all(e.map(async R=>{try{let X=await t.load(R.id);if(!X||p.has(R.id))return;let j=await createImageBitmap(X),ne=d(R.id);if(!p.has(R.id)&&g(ne,j,!0)&&(ne.blob=X,t.loadStrokes)){let T=await t.loadStrokes(R.id);T&&Array.isArray(T)&&!p.has(R.id)&&ne.strokes.unshift(...T)}j.close()}catch{}})),_=R=>{let X=cl(R.W,R.H),j=X.getContext("2d");for(let[ne,T]of R.tiles)j.drawImage(T.cv,ne%R.cols*ri,Math.floor(ne/R.cols)*ri);return X},v=async R=>{try{R.waking&&await R.waking;let X=R.tiles.size?await new Promise(j=>_(R).toBlob(j,"image/png")):null;R.blob=R.unsaved>0?null:X,await t.save(R.wall.id,X),t.saveStrokes&&await t.saveStrokes(R.wall.id,X?R.strokes:null)}catch{}},C=R=>{for(let X=o.length-1;X>=0;X--)o[X].L===R&&o.splice(X,1)},S=R=>{if(!R.away||R.waking)return;let X=R.away;R.waking=createImageBitmap(X).then(j=>{g(R,j,!0),j.close()}).catch(()=>{}).then(()=>{R.away=null,R.waking=null})},F=()=>{let R=0;for(let X of i.values())R+=X.tiles.size;return R},H=R=>{let X=T=>Math.hypot(T.wall.center.x-R.x,T.wall.center.z-R.z)-T.wall.w/2;for(let T of i.values())T.away&&X(T)<26&&S(T);let j=F();if(j<=d0)return;let ne=[...i.values()].filter(T=>T.tiles.size&&T.blob&&!T.unsaved&&!T.waking&&(!a||a.L!==T)&&X(T)>32&&!r.some(U=>U.e.L===T)).sort((T,U)=>X(U)-X(T));for(let T of ne){if(j<=d0*.8)break;j-=T.tiles.size;for(let U of[...T.tiles.keys()])m(T,U);T.away=T.blob,C(T)}},b=new Map,w=(R,X,j)=>{let ne=R.toFixed(2)+"|"+X.toFixed(2)+"|"+j,T=b.get(ne);if(T)return T;b.size>80&&b.clear();let U=Math.ceil(R)*2+2;T=cl(U,U);let O=T.getContext("2d"),Y=O.createRadialGradient(U/2,U/2,0,U/2,U/2,R);Y.addColorStop(0,`rgba(${j},1)`),Y.addColorStop(X,`rgba(${j},1)`);for(let Q of[.25,.5,.75])Y.addColorStop(X+(1-X)*Q,`rgba(${j},${1-Q*Q*(3-2*Q)})`);return Y.addColorStop(1,`rgba(${j},0)`),O.fillStyle=Y,O.fillRect(0,0,U,U),b.set(ne,T),T},B=(R,X,j)=>{let ne=R.rng,T=Math.max(1.4,Math.min(5,R.r*.3)),U=(.16+ne()*.22)*Si,O=(.1+ne()*.5)*(.6+R.s.cap*.2)*Si,Y=0,Q=[],Ee=[];for(;O>0&&U>.02*Si&&Q.length<900;){let me=U/60;Y+=me,O-=me,Q.push(Y),Ee.push(T),T=Math.max(1.1,T*(1-.25/60)),U*=1-.35/60}let be={e:R.e,x:X+(ne()-.5)*R.r*.8,y:j+R.r*.45,ys:Float32Array.from(Q),ws:Float32Array.from(Ee),n:Q.length,i:0,rgb:R.rgb};x(R.L,be.x-4,be.y,be.x+4,be.y+Y+6,R.e,()=>{}),r.push(be),R.e.drips.push(be)},V=(R,X,j)=>{let ne=R.e.L,T=Math.floor(X),U=Math.min(R.n,Math.floor(j));if(U<=T&&j<R.n)return;let O=R.y+(T?R.ys[T-1]:0),Y=R.y+(U?R.ys[U-1]:0),Q=j>=R.n;x(ne,R.x-5,O-1,R.x+5,Y+6,null,Ee=>{Ee.globalAlpha=1,Ee.globalCompositeOperation="source-over",Ee.fillStyle=`rgba(${R.rgb},0.9)`;for(let be=T;be<U;be++){let me=R.ws[be],te=R.y+(be?R.ys[be-1]:0);Ee.fillRect(R.x-me/2,te,me,R.ys[be]-(be?R.ys[be-1]:0)+1)}Q&&R.n&&(Ee.beginPath(),Ee.arc(R.x,Y,R.ws[R.n-1]*.9,0,Math.PI*2),Ee.fill())})},Z=(R,X,j,ne,T)=>{let U=R.L;if(R.s.buff||X<0||j<0||X>=U.W||j>=U.H)return 0;if(!U.wet){let Q=U.wcols*Math.ceil(U.H/ll);U.wet=new Float32Array(Q),U.wetAt=new Float32Array(Q)}let O=Math.floor(j/ll)*U.wcols+Math.floor(X/ll),Y=U.wet[O]*Math.exp(-Math.max(0,T-U.wetAt[O])/Db)+ne;U.wetAt[O]=Math.max(T,U.wetAt[O]),U.wet[O]=Y;for(let Q=0;U.wet[O]>=1&&Q<3&&r.length<300;Q++)U.wet[O]-=.55,B(R,X,j);return Math.min(1,Y)},re=(R,X,j,ne,T=1)=>{let U=R.stamp,O=U.width*T,Y=R.r*T,Q=R.s.buff?"destination-out":"source-over";if(x(R.L,X-Y-1,j-Y-1,X+Y+1,j+Y+1,R.e,me=>{me.globalCompositeOperation=Q,me.globalAlpha=Math.min(1,ne),me.drawImage(U,X-O/2,j-O/2,O,O)}),R.s.buff)return;let Ee=Math.min(6,Math.max(0,R.s.dist-.12)*.6*R.s.cap*R.s.pressure*R.step),be=Math.floor(Ee+R.rng());for(let me=0;me<be;me++){let te=R.rng()*Math.PI*2,ve=Y*(.9+R.rng()*1.3),le=X+Math.cos(te)*ve,Re=j+Math.sin(te)*ve,A=1+R.rng();x(R.L,le,Re,le+A,Re+A,R.e,de=>{de.globalCompositeOperation="source-over",de.globalAlpha=.35+R.rng()*.4,de.fillStyle=`rgb(${R.rgb})`,de.fillRect(le,Re,A,A)})}},ae=(R,X,j,ne)=>{let T=Math.hypot(j.x-X.x,j.y-X.y)+Math.hypot(ne.x-j.x,ne.y-j.y),U=Math.max(0,ne.t-X.t),O=T/Si/Math.max(U,.001),Y=Math.ceil(T/R.step),Q=Math.max(.6,Math.min(1,1.2-O*.18)),Ee=Pb[R.s.cap]*m0(R.s.dist)*R.s.pressure*R.step/ll,be=X.x,me=X.y;for(let ve=1;ve<=Y;ve++){let le=ve/Y,Re=1-le,A=Re*Re*X.x+2*Re*le*j.x+le*le*ne.x,de=Re*Re*X.y+2*Re*le*j.y+le*le*ne.y,_e=Math.hypot(A-be,de-me),Ve=_e;for(;R.acc+Ve>=R.step;){Ve-=R.step-R.acc,R.acc=0;let we=1-Ve/_e,L=be+(A-be)*we,E=me+(de-me)*we;re(R,L,E,R.a*Q),Z(R,L,E,Ee,R.T0+X.t+U*le)}R.acc+=Ve,be=A,me=de}let te=Math.max(0,1-O/.12);if(te>0&&U>0){let ve=Z(R,ne.x,ne.y,U*te*R.s.pressure/(Ib[R.s.cap]/m0(R.s.dist)),R.T0+ne.t);re(R,ne.x,ne.y,1-Math.exp(-U*12*R.s.pressure*te),1+.35*ve)}},N=()=>{let R=a;if(R)for(R.m&&R.p&&(R.m.x!==R.p.x||R.m.y!==R.p.y)&&ae(R,R.m,R.p,R.p),a=null;(o.length>Ab||o.reduce((X,j)=>X+j.snaps.size,0)>wb)&&!(o.length<2);)o.shift()},G=(R,X,j={})=>{N();let ne=d(R);if(!ne)return!1;S(ne);let T={wall:R,cap:X.cap,dist:Math.max(.05,Math.min(.6,X.dist)),colour:X.colour,pressure:X.pressure??1,buff:!!X.buff,seed:j.seed??Math.random()*2147483647|0,pts:[]},U=No({...X,dist:T.dist}),O=Math.max(1,U.r*Si),Y=new Oe(T.colour),Q=`${Math.round(Y.r*255)},${Math.round(Y.g*255)},${Math.round(Y.b*255)}`,Ee=Math.max(.6,O*.25),be=T.buff?.97:Cb[T.cap]*(T.pressure<1?T.pressure*.9:1),me=o[o.length-1],te;return j.group&&me&&me.group===j.group&&me.L===ne?te=me:o.push(te={L:ne,strokes:[],snaps:new Map,drips:[],group:j.group||""}),te.strokes.push(T),ne.strokes.push(T),ne.strokes.length>p0&&ne.strokes.splice(0,ne.strokes.length-p0),a={e:te,L:ne,s:T,rng:Fb(T.seed),stamp:w(O,U.hard,Q),r:O,a:1-Math.pow(1-be,Ee/(O*(1+U.hard))),step:Ee,rgb:Q,T0:c,acc:0,m:null,p:null},!0},oe=R=>Math.round(R*1e4)/1e4,Te=(R,X,j)=>{let ne=a;if(!ne)return;let T={x:R*Si,y:ne.L.H-X*Si,t:j},U=ne.s.pts,O=U.length,Y=[oe(R),oe(X),Math.round(j*1e3)/1e3];if(O>1&&U[O-1][0]===Y[0]&&U[O-1][1]===Y[1]&&U[O-2][0]===Y[0]&&U[O-2][1]===Y[1]?U[O-1][2]=Y[2]:U.push(Y),!ne.p){ne.p=ne.m=T,re(ne,T.x,T.y,Math.min(1,ne.a*2));return}let Q={x:(ne.p.x+T.x)/2,y:(ne.p.y+T.y)/2,t:(ne.p.t+T.t)/2};ae(ne,ne.m,ne.p,Q),ne.p=T,ne.m=Q},xe=new D,Ie=new D;return{hit(R,X){let j=null,ne=R.ray.origin,T=R.ray.direction;for(let U of X?X.map(O=>n.get(O)):e){if(!U)continue;let O=U.normal,Y=T.dot(O);if(Y>-1e-4)continue;let Q=Ie.copy(U.center).addScaledVector(O,.012).sub(ne).dot(O)/Y;if(Q<=0||j&&Q>=j.dist)continue;let Ee=Ie.copy(ne).addScaledVector(T,Q),be=(Ee.x-U.center.x)*O.z-(Ee.z-U.center.z)*O.x+U.w/2,me=Ee.y-U.center.y+U.h/2;be<0||be>U.w||me<0||me>U.h||(j={id:U.id,wall:U,x:be,y:me,u:be/U.w,v:me/U.h,point:Ee.clone(),dist:Q})}return j},point(R,X,j,ne){let T=n.get(R);return T?(xe.set(T.normal.z,0,-T.normal.x),ne.copy(T.center).addScaledVector(xe,X-T.w/2).addScaledVector(T.normal,.012).setY(T.center.y-T.h/2+j)):ne},begin:G,to:Te,end:N,stroke:()=>a?a.s:null,path(R,X,j){let ne=n.get(R);if(!ne)throw new Error("no wall "+R);G(R,j);let T=0,U=0,O=0;X.forEach(([Y,Q],Ee)=>{let be=Y*ne.w,me=Q*ne.h;Ee&&(T+=Math.hypot(be-U,me-O)),U=be,O=me,Te(be,me,T)}),X.length===1&&Te(U,O,.15),N()},replay(R,X={}){let j="r"+ ++u,ne=X.scale??1,[T,U]=X.at||[0,0];for(let O of R){if(!G(X.wall||O.wall,O,{seed:O.seed,group:j}))throw new Error("no wall "+(X.wall||O.wall));for(let[Y,Q,Ee]of O.pts)Te(T+Y*ne,U+Q*ne,Ee);N()}},strokes:R=>{let X=i.get(R);return X?X.strokes:[]},undo(R){a&&R.includes(a.L.wall.id)&&N();let X=-1;for(let T=o.length-1;T>=0;T--)if(R.includes(o[T].L.wall.id)){X=T;break}if(X<0)return null;let j=o[X].group,ne=[];for(let T=o.length-1;T>=0;T--){if(T!==X&&(!j||o[T].group!==j))continue;let U=o.splice(T,1)[0],O=U.L;for(let Y=r.length-1;Y>=0;Y--)r[Y].e===U&&r.splice(Y,1);for(let[Y,Q]of U.snaps){if(!Q){m(O,Y);continue}let Ee=f(O,Y),be=Ee.g;be.save(),be.setTransform(1,0,0,1,0,0),be.globalAlpha=1,be.globalCompositeOperation="copy",be.drawImage(Q,0,0),be.restore(),Ee.dirty=!0}O.strokes=O.strokes.filter(Y=>!U.strokes.includes(Y));for(let Y of o)if(Y.L===O)for(let Q of Y.drips)V(Q,0,Q.i);O.unsaved=1,ne.unshift(...U.strokes)}return ne},undoable:R=>new Set(o.filter(X=>R.includes(X.L.wall.id)).map((X,j)=>X.group||"#"+j)).size,clear(R){for(let X of e)if(!R||X.id===R){p.add(X.id);let j=i.get(X.id);if(!j)continue;a&&a.L===j&&(a=null);for(let ne of[...j.tiles.keys()])m(j,ne);j.wet=j.wetAt=null,j.strokes=[],j.unsaved=0,j.blob=j.away=null,C(j);for(let ne=r.length-1;ne>=0;ne--)r[ne].e.L===j&&r.splice(ne,1);t.save(X.id,null).catch(()=>{}),t.saveStrokes&&t.saveStrokes(X.id,null).catch(()=>{})}},loaded:M,async flush(){await Promise.all([...i.values()].filter(R=>R.unsaved>0).map(R=>(R.unsaved=0,v(R))))},update(R,X){c+=R;for(let j=r.length-1;j>=0;j--){let ne=r[j],T=Math.min(ne.n,ne.i+R*60);V(ne,ne.i,T),ne.i=T,T>=ne.n&&r.splice(j,1)}for(let j of i.values()){for(let ne of j.tiles.values())ne.dirty&&(ne.tex.needsUpdate=!0,ne.dirty=!1);j.unsaved>0&&(j.unsaved-=R)<=0&&(a&&a.L===j||r.some(ne=>ne.e.L===j)?j.unsaved=.5:(j.unsaved=0,v(j)))}X&&(l+=R)>1&&(l=0,H(X))},png(R){let X=i.get(R);return X&&X.tiles.size?_(X).toDataURL("image/png"):""},painted:R=>{let X=i.get(R);return!!X&&(X.tiles.size>0||!!X.away)},stats(){let R=0,X=0,j=0,ne=0;for(let U of i.values()){U.away&&j++,(U.tiles.size||U.away)&&ne++;for(let O of U.tiles.values())R++,X+=O.cv.width*O.cv.height}let T=o.reduce((U,O)=>U+O.snaps.size,0);return{walls:e.length,painted:ne,tiles:R,mb:Math.round(X*4/1e5)/10,resting:j,undo:o.length,undoTiles:T,drips:r.length}},dispose(){N();for(let R of i.values())R.unsaved>0&&v(R);for(let R of i.values())for(let X of R.tiles.values())s.remove(X.mesh),X.mesh.material.dispose(),X.tex.dispose();for(let R of h.values())R.dispose()}}}var hs={len:4.9,wid:1.92};function v0(s){let e=[],t=N=>(e.push(N),N),n=new en,i=t(new Jt({color:"#08090b",roughness:.32,metalness:.55,clearcoat:1,clearcoatRoughness:.08})),r=t(new Jt({color:"#e6e7ea",roughness:.35,metalness:.1,clearcoat:1,clearcoatRoughness:.1})),o=t(new Jt({color:"#040405",roughness:.04,metalness:.3,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:1.6})),a=t(new ct({color:"#141518",roughness:.55,metalness:.4})),c=t(new ct({color:"#0d0d0e",roughness:.85,metalness:0})),l=t(new ct({color:"#9a9ca2",roughness:.25,metalness:.95})),u=(N,G)=>t(new Lt({color:new Oe(N).multiplyScalar(G),toneMapped:!1})),h=u("#ffffff",4),d=u("#ff2a2a",1.6),f=u("#ffffff",1),m=u("#ffffff",1),x=(N,G,oe,Te=!1)=>{let xe=new Ji;xe.moveTo(N[0][0],N[0][1]);for(let[R,X]of N.slice(1))xe.lineTo(R,X);Te&&(xe.lineTo(-1.98,.3),xe.absarc(-1.5,.36,.48,Math.PI+.12,-.12,!0),xe.lineTo(1.02,.3),xe.absarc(1.5,.36,.48,Math.PI+.12,-.12,!0)),xe.closePath();let Ie=new Ts(xe,{depth:G-oe*2,bevelEnabled:oe>0,bevelSize:oe*.8,bevelThickness:oe,bevelSegments:3,curveSegments:10});return Ie.translate(0,0,-(G-oe*2)/2),Ie.rotateY(-Math.PI/2),t(Ie)},g=(N,G,oe=!0)=>{let Te=new Je(N,G);return Te.castShadow=oe&&s,Te.receiveShadow=!0,n.add(Te),Te},p=(N,G,oe,Te,xe,Ie,R,X=!1)=>{let j=g(t(new Nt(N,G,oe)),R,X);return j.position.set(Te,xe,Ie),j};g(x([[2.42,.32],[2.47,.56],[2.32,.76],[1.1,.9],[-1.8,.96],[-2.38,.94],[-2.47,.62],[-2.42,.32]],hs.wid,.07,!0),i),g(x([[1.1,.88],[.12,1.38],[-.98,1.38],[-1.86,.94]],1.62,.05),o,!1),g(x([[.14,1.37],[.02,1.44],[-.9,1.44],[-1,1.37]],1.5,.03),i);for(let N of[-1,1])p(.02,.4,2.1,N*(hs.wid/2+.005),.66,-.05,r),p(.02,.025,4.2,N*(hs.wid/2+.008),.9,-.1,u("#d8d8d8",.6));p(1.92,.03,.9,0,.91,1.7,r),p(1.3,.08,.08,0,.42,2.58,a,!0),p(1.3,.08,.08,0,.66,2.55,a,!0);for(let N of[-1,1])p(.06,.32,.08,N*.45,.54,2.56,a),p(.2,.08,.12,N*1.02,1,.95,i),p(.5,.05,.04,N*.62,.7,2.43,h),p(.06,.12,.04,N*.88,.64,2.38,h);p(1.66,.05,.04,0,.82,-2.43,d);let M=p(.5,.03,.03,0,1.36,-.98,d);p(1.36,.07,.3,0,1.48,-.42,a,!0);for(let N=0;N<3;N++)for(let G of[-1,1])p(.18,.05,.26,G*(.22+N*.2),1.525,-.42,G<0?f:m);let _=[],v=t(new ln(.36,.36,.27,28));v.rotateZ(Math.PI/2);let C=t(new ln(.25,.25,.275,14));C.rotateZ(Math.PI/2);let S=t(new ln(.07,.07,.29,10));S.rotateZ(Math.PI/2);for(let[N,G]of[[-.82,1.5],[.82,1.5],[-.82,-1.5],[.82,-1.5]]){let oe=new en;oe.position.set(N,.36,G);let Te=new Je(v,c);Te.castShadow=s,oe.add(Te,new Je(C,l),new Je(S,a)),n.add(oe),_.push(oe)}let F=new is("#f4f6ff",0,42,.5,.55,1.3);F.position.set(0,.7,2.5),F.target.position.set(0,0,16);let H=new ti("#ffffff",0,22,1.6);H.position.set(0,2,-.4),n.add(F,F.target,H);let b=new is("#ffffff",0,70,.14,.45,1.1);s&&(b.castShadow=!0,b.shadow.mapSize.set(512,512),b.shadow.camera.near=.6,b.shadow.camera.far=60,b.shadow.bias=-4e-4,b.shadow.normalBias=.04);let w=new D(-.98,1.28,.9);p(.1,.1,.18,w.x,w.y,w.z,a);let B=34,V=t(new Ss(Math.tan(.14)*B,B,28,1,!0));V.translate(0,-B/2,0),V.rotateX(-Math.PI/2);let Z=t(new yt({transparent:!0,depthWrite:!1,blending:Ln,side:wn,uniforms:{uK:{value:0},uL:{value:B}},vertexShader:"varying float vA; varying vec3 vN, vV; void main(){ vA = position.z; vec4 mv = modelViewMatrix * vec4(position, 1.); vN = normalize(normalMatrix * normal); vV = -mv.xyz; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform float uK, uL; varying float vA; varying vec3 vN, vV; void main(){ float a = clamp(vA / uL, 0., 1.); float f = abs(dot(normalize(vN), normalize(vV))); gl_FragColor = vec4(vec3(uK * pow(1. - a, 1.6) * pow(f, 2.2) * smoothstep(0., 0.04, a)), 1.); }"})),re=new Je(V,Z);re.userData.noAO=!0,re.frustumCulled=!1;let ae=0;return{group:n,search:b,beam:re,searchMount:w,update:(N,G,oe)=>{ae+=oe.speed*N/.36;for(let X of _)X.rotation.x=ae;F.intensity=oe.lights?70:0,h.color.setScalar(oe.lights?4:.05),d.color.setRGB(oe.lights?oe.brake?3:1.4:.05,oe.lights?.25:.01,oe.lights?.25:.01),M.visible=oe.brake&&oe.lights;let Te=G*2.5%1,xe=X=>Te>X&&Te<X+.07||Te>X+.14&&Te<X+.21,Ie=oe.strobe&&xe(0),R=oe.strobe&&xe(.5);f.color.setScalar(Ie?9:.08),m.color.setScalar(R?9:.08),H.intensity=Ie||R?90:0,H.position.x=Ie?-.5:.5,Z.uniforms.uK.value=b.intensity>0?.11:0,re.visible=b.intensity>0,re.position.copy(b.position),re.lookAt(b.target.position)},dispose:()=>e.forEach(N=>N.dispose())}}var Fr=4.2,gd=46,pd=-66,md=Math.PI*Fr,ul=gd-pd,_0=ul*2+md,y0=s=>{if(s<ul)return{x:Fr,z:gd-s,h:Math.PI};if(s<ul+md){let e=(s-ul)/Fr;return{x:Fr*Math.cos(e),z:pd-Fr*Math.sin(e),h:Math.atan2(-Math.sin(e),-Math.cos(e))}}return{x:-Fr,z:pd+(s-ul-md),h:0}},M0=s=>Math.atan2(Math.sin(s),Math.cos(s)),Ob=5.5,b0=3.4,Bb=1.6,Hb=1,E0=22;async function S0(s){let{scene:e,high:t,blockers:n,bounds:i}=s,r=v0(t);e.add(r.group,r.search,r.search.target,r.beam);let o={Hoodie:new Jt({color:"#1a1b1f",roughness:.62,metalness:.05,sheen:.35,sheenRoughness:.5,sheenColor:new Oe("#5a5b62")}),Trousers:new ct({color:"#16171a",roughness:.78,metalness:0}),Gloves:new ct({color:"#0b0b0c",roughness:.5,metalness:0}),Trim:new ct({color:"#d4d5d8",roughness:.3,metalness:.2,emissive:"#3a3a3a"}),Shoes:new ct({color:"#0e0e10",roughness:.35,metalness:.1}),Sole:new ct({color:"#1c1c1f",roughness:.7,metalness:0}),Mask:new Lt({color:"#000000"})},a=Object.fromEntries(Object.entries(o).map(([T,U])=>[T,()=>U])),c=new zn(.155,28,14,0,Math.PI*2,0,Math.PI*.56),l=new zn(.162,28,10,-Math.PI*.42,Math.PI*.84,Math.PI*.3,Math.PI*.36),u=new Jt({color:"#0c0c0e",roughness:.22,metalness:.3,clearcoat:1,clearcoatRoughness:.05}),h=new Jt({color:"#020203",roughness:.03,metalness:.85,clearcoat:1,clearcoatRoughness:.02,envMapIntensity:2}),d=[];for(let T=0;T<2;T++){let U=await Wu(s.base+"anims/ual.glb",t,s.base+"models/writer.glb",a),O=U.root;U.root.traverse(be=>{/Can\d|Cap\d|Pack|strap|String|Hood/i.test(be.name)&&(be.visible=!1),/(^|:)Head$/.test(be.name)&&(O=be)});let Y=new en,Q=new Je(c,u),Ee=new Je(l,h);Q.castShadow=t,Y.add(Q,Ee),U.root.visible=!1,Y.visible=!1,e.add(U.root,Y),d.push({w:U,helmet:Y,head:O,x:0,z:0,h:0,out:!1,doing:"in",wind:0,tired:0,side:T?1:-1,goal:new ye,look:0,door:T?1:-1})}let f=!0,m=0,x="calm",g=!1,p=0,M=0,_=0,v=0,C=new ye,S={s:0,speed:0,onStreet:!1,gap:6,x:Fr,z:gd,h:Math.PI},F=0,H=new D,b=(T,U,O)=>{if(Math.abs(T)>i.x||U<i.z0||U>i.z1)return!1;for(let Y of n)if(T>Y.x0-O&&T<Y.x1+O&&U>Y.z0-O&&U<Y.z1+O)return!1;return!w(T,U,O)},w=(T,U,O)=>{if(!S.onStreet)return!1;let Y=T-S.x,Q=U-S.z,Ee=Math.sin(S.h),be=Math.cos(S.h),me=Y*Ee+Q*be,te=Y*be-Q*Ee;return Math.abs(me)<hs.len/2+O&&Math.abs(te)<hs.wid/2+O},B=(T,U)=>{if(!w(T.x,T.z,U))return;let O=Math.sin(S.h),Y=Math.cos(S.h),Q=T.x-S.x,Ee=T.z-S.z,be=Q*O+Ee*Y,me=Q*Y-Ee*O,te=hs.len/2+U-Math.abs(be),ve=hs.wid/2+U-Math.abs(me);te<ve?be=Math.sign(be||1)*(hs.len/2+U):me=Math.sign(me||1)*(hs.wid/2+U),T.x=S.x+be*O+me*Y,T.z=S.z+be*Y-me*O},V=(T,U)=>{for(let O of n){let Y=O.x0-U,Q=O.x1+U,Ee=O.z0-U,be=O.z1+U;if(T.x>Y&&T.x<Q&&T.z>Ee&&T.z<be){let me=[T.x-Y,Q-T.x,T.z-Ee,be-T.z],te=Math.min(...me);te===me[0]?T.x=Y:te===me[1]?T.x=Q:te===me[2]?T.z=Ee:T.z=be}}T.x=Math.max(-i.x,Math.min(i.x,T.x)),T.z=Math.max(i.z0,Math.min(i.z1,T.z)),B(T,U)},Z=(T,U,O,Y,Q=!1)=>{let Ee=O-T,be=Y-U;for(let me of n){if(me.low&&!Q)continue;let te=0,ve=1;for(let[le,Re,A,de]of[[T,Ee,me.x0,me.x1],[U,be,me.z0,me.z1]]){if(Math.abs(Re)<1e-6){if(le<A||le>de){te=2;break}continue}let _e=(A-le)/Re,Ve=(de-le)/Re;if(_e>Ve&&([_e,Ve]=[Ve,_e]),te=Math.max(te,_e),ve=Math.min(ve,Ve),te>ve)break}if(te<=ve)return!1}return!0},re=(T,U,O,Y,Q,Ee)=>{let be=Ee.x-T,me=Ee.z-U,te=Math.hypot(be,me);return te>Q||te<.01?te<.01:Math.abs(M0(Math.atan2(be,me)-O))>Y?!1:Z(T,U,Ee.x,Ee.z,Ee.crouch)},ae=null,N=0,G=()=>{if(ae)return ae;let T=s.sound();if(!T)return null;try{let U=T.ctx,O=U.createOscillator(),Y=U.createOscillator(),Q=U.createBiquadFilter(),Ee=U.createGain(),be=U.createOscillator(),me=U.createGain(),te=U.createGain();O.type="sawtooth",Y.type="square",Y.detune.value=12,te.gain.value=.5,Q.type="lowpass",Q.frequency.value=2400,Q.Q.value=.8,be.type="triangle",be.frequency.value=.32,me.gain.value=0,be.connect(me),me.connect(O.frequency),me.connect(Y.frequency),O.connect(Q),Y.connect(te).connect(Q),Ee.gain.value=0,Q.connect(Ee).connect(T.out),O.start(),Y.start(),be.start(),ae={ctx:U,f:[O.frequency,Y.frequency],depth:me,gain:Ee}}catch{ae=null}return ae},oe=()=>{let T=G();if(!T)return;T.ctx.resume();let U=T.ctx.currentTime;T.depth.gain.cancelScheduledValues(U),T.depth.gain.setValueAtTime(0,U),T.depth.gain.setValueAtTime(380,U+1.3);for(let O of T.f)O.cancelScheduledValues(U),O.setValueAtTime(380,U),O.linearRampToValueAtTime(1350,U+.42),O.linearRampToValueAtTime(420,U+.62),O.linearRampToValueAtTime(1350,U+1.02),O.linearRampToValueAtTime(900,U+1.3);T.gain.gain.cancelScheduledValues(U),T.gain.gain.setValueAtTime(0,U),T.gain.gain.linearRampToValueAtTime(.09,U+.05),N=.09},Te=T=>{ae&&Math.abs(T-N)>.004&&(N=T,ae.gain.gain.setTargetAtTime(T,ae.ctx.currentTime,.25))},xe=()=>{let T=Math.sin(S.h),U=Math.cos(S.h);for(let O of d)O.x=S.x+U*O.door*1.35+T*(O.door<0?.6:-.2),O.z=S.z-T*O.door*1.35+U*(O.door<0?.6:-.2),O.h=S.h+O.door*Math.PI/2,O.out=!0,O.doing="run",O.wind=0,O.tired=0,O.w.root.visible=O.helmet.visible=!0,O.w.play("Idle_Loop",0)},Ie=()=>{for(let T of d)T.out=!1,T.doing="in",T.w.root.visible=T.helmet.visible=!1},R={x:0,z:0},X=(T,U,O,Y,Q)=>{let Ee=U-T.x,be=O-T.z,me=Math.hypot(Ee,be);if(me<.15)return!1;let te=Math.atan2(Ee,be),ve=!1,le=Math.min(1.3,me);for(let A of[0,.35,.7,1.05,1.4,1.75,2.1]){for(let de of A?[T.side,-T.side]:[1]){let _e=te+A*de;if(b(T.x+Math.sin(_e)*le,T.z+Math.cos(_e)*le,.35)){te=_e,ve=!0,A&&(T.side=de);break}}if(ve)break}let Re=Math.min(me,Y*Q);return R.x=T.x+Math.sin(te)*Re,R.z=T.z+Math.cos(te)*Re,V(R,.35),T.x=R.x,T.z=R.z,T.h+=M0(te-T.h)*Math.min(1,Q*10),!0},j=T=>{T.w.root.updateMatrixWorld(!0);let U=T.head.matrixWorld,O=new D().setFromMatrixPosition(U),Y=new an;U.decompose(new D,Y,new D),T.helmet.position.copy(O).add(new D(0,.175,.045).applyQuaternion(Y)),T.helmet.quaternion.copy(Y)};return{update:(T,U,O)=>{let Y="";f?!S.onStreet&&x==="calm"&&(S.gap-=T,(S.gap<=0||m>=1)&&(S.onStreet=!0,S.s=0,S.speed=7)):S.onStreet=!1;let Q=x==="alerted"||x==="chase"||x==="searching"||x==="busted";if(S.onStreet){let A=Q?0:m>.5?5:7.5,de=y0(S.s),_e=Math.sin(de.h),Ve=Math.cos(de.h),we=O.x-de.x,L=O.z-de.z,E=we*_e+L*Ve,q=Math.abs(we*Ve-L*_e);E>0&&E<8&&q<1.7&&(A=0),d.some(Se=>Se.out)&&(A=0),S.speed+=Math.max(-9*T,Math.min(4*T,A-S.speed)),S.s+=S.speed*T,S.s>=_0&&(S.onStreet=!1,S.gap=9+Math.random()*10);let ue=y0(Math.min(S.s,_0-.01));S.x=ue.x,S.z=ue.z,S.h=ue.h}r.group.visible=S.onStreet,r.group.position.set(S.x,0,S.z),r.group.rotation.y=S.h,r.group.updateMatrixWorld(!0);let Ee=r.searchMount.clone().applyMatrix4(r.group.matrixWorld);if(r.search.position.copy(Ee),Q)H.lerp(new D(C.x,.9,C.y),Math.min(1,T*3));else{F+=T*.5;let A=Math.sin(F)*1.45,de=S.h+A;H.set(Ee.x+Math.sin(de)*24,1.2,Ee.z+Math.cos(de)*24)}r.search.target.position.copy(H),r.search.target.updateMatrixWorld(),r.search.intensity=S.onStreet?650:0;let be=S.onStreet&&(()=>{let A=O.x-Ee.x,de=O.z-Ee.z,_e=O.y+1-Ee.y,Ve=Math.hypot(A,_e,de),we=H.x-Ee.x,L=H.y-Ee.y,E=H.z-Ee.z,q=Math.hypot(we,L,E);return Ve<48&&(A*we+_e*L+de*E)/(Ve*q)>Math.cos(.17)&&Z(Ee.x,Ee.z,O.x,O.z,O.crouch)})(),me=S.onStreet&&(be||re(S.x+Math.sin(S.h)*2.4,S.z+Math.cos(S.h)*2.4,S.h,.62,O.crouch?14:26,O)),te=!1;for(let A of d)A.out&&re(A.x,A.z,A.h,A.doing==="search"?1.6:1.3,O.crouch?E0*.55:E0,O)&&(te=!0);g=!!(me||te);let ve=g&&(O.spraying||O.painting);if(f?Q?m=Math.min(1,m+T):O.spraying?m=Math.min(1,m+T*(g?.8:.03)):ve?m=Math.min(1,m+T*.3):m=Math.max(0,m-T*.05):m=0,f&&x==="calm"&&S.onStreet){let A=O.spraying||O.painting||m>=.6;p=g&&A?p+T:0;let de=m>=1&&Math.hypot(O.x-S.x,O.z-S.z)<45;(p>.3||de)&&(x="alerted",v=0,C.set(O.x,O.z),Y="alert",oe())}if(x==="alerted"&&(v+=T,g&&C.set(O.x,O.z),v>.9&&S.speed<.5&&(xe(),x="chase",M=0)),x==="chase"||x==="searching"){if(g){if(C.set(O.x,O.z),M=0,x==="searching"){x="chase";for(let de of d)de.doing="run"}}else M+=T;let A=Math.min(...d.map(de=>Math.hypot(de.x-O.x,de.z-O.z)));if(x==="chase"&&M>3&&A>9&&(x="searching",_=0,d.forEach((de,_e)=>{de.doing="search",de.goal.set(C.x+(_e?1.6:-1.6),C.y+(_e?-1:1)),de.look=0})),x==="searching"&&(_+=T)>13){x="calm",m=.3,Y="escaped";for(let de of d)de.doing="return"}}for(let A of d)if(A.out){if(A.doing==="run"){A.wind+=T,A.tired>0?A.tired-=T:A.wind>8&&(A.tired=2.6,A.wind=0);let de=g?O.x:C.x,_e=g?O.z:C.y,Ve=X(A,de,_e,A.tired>0?b0:Ob,T);if(A.w.play(Ve?A.tired>0?"Jog_Fwd_Loop":"Sprint_Loop":"Idle_Loop",.2),Math.hypot(A.x-O.x,A.z-O.z)<Hb&&O.y<.6&&x==="chase"){x="busted",Y="busted",A.doing="bust",A.h=Math.atan2(O.x-A.x,O.z-A.z),A.w.play("Punch_Jab",.1,!0);for(let we of d)we!==A&&(we.doing="bust",we.w.play("Idle_Loop",.3))}}else if(A.doing==="search")X(A,A.goal.x,A.goal.y,b0,T)?A.w.play("Jog_Fwd_Loop",.25):(A.look+=T,A.h+=Math.sin(U*1.3+A.door)*T*1.4,A.w.play("Idle_Loop",.3),A.look>3&&(A.look=0,A.goal.set(C.x+(Math.random()-.5)*12,C.y+(Math.random()-.5)*12)));else if(A.doing==="return"){let de=Math.sin(S.h),_e=Math.cos(S.h),Ve=Math.sign((A.x-S.x)*_e-(A.z-S.z)*de)||A.door,we=S.x+_e*Ve*1.4,L=S.z-de*Ve*1.4;if(!X(A,we,L,Bb*1.4,T)||Math.hypot(A.x-we,A.z-L)<.5?(A.out=!1,A.doing="in",A.w.root.visible=A.helmet.visible=!1):A.w.play("Walk_Loop",.3),g&&m>=.6&&x==="calm"){x="chase",M=0,C.set(O.x,O.z);for(let E of d)E.out&&(E.doing="run");Y="alert",oe()}}}if(d[0].out&&d[1].out){let A=d[1].x-d[0].x,de=d[1].z-d[0].z,_e=Math.hypot(A,de);if(_e<.8&&_e>1e-4){let Ve=(.8-_e)/2/_e;d[0].x-=A*Ve,d[0].z-=de*Ve,d[1].x+=A*Ve,d[1].z+=de*Ve}}for(let A of d)A.out&&(A.w.root.position.set(A.x,s.groundY(A.x,A.z),A.z),A.w.root.rotation.y=A.h,A.w.update(T),j(A));let le=x==="alerted"||x==="chase"||x==="searching"||x==="busted"||d.some(A=>A.out);r.update(T,U,{speed:S.speed,strobe:le&&S.onStreet,lights:S.onStreet,brake:S.onStreet&&S.speed<1.5});let Re=Math.hypot(O.x-S.x,O.z-S.z);return Te(x==="alerted"?.09:x==="chase"||x==="searching"?.08/(1+Re/25):0),Y},state:()=>({on:f,heat:+m.toFixed(3),chase:f?x:"off",seen:g,car:{x:+S.x.toFixed(2),z:+S.z.toFixed(2),heading:+S.h.toFixed(2),onStreet:S.onStreet,speed:+S.speed.toFixed(2)},cops:d.map(T=>({x:+T.x.toFixed(2),z:+T.z.toFixed(2),anim:T.out?T.w.playing():"",out:T.out,doing:T.doing}))}),setOn:T=>{f=T,Ie(),x="calm",m=0,p=0,Te(0),S.onStreet=!1,S.gap=T?1.5:0},reset:()=>{Ie(),x="calm",m=0,p=0,Te(0)},pushOut:B,nearest:()=>{let T=d.filter(U=>U.out);return T.length?{x:T[0].x,z:T[0].z}:null},dispose:()=>{for(let T of d)e.remove(T.w.root,T.helmet),T.w.dispose();e.remove(r.group,r.search,r.search.target,r.beam),r.dispose(),c.dispose(),l.dispose(),u.dispose(),h.dispose(),Object.values(o).forEach(T=>T.dispose())}}}var zb={shadow:[1,1,1],high:[1,1,1],sat:0,contrast:1.32,vignette:.72},Or={x:25.5,z0:-79,z1:24};async function kb(s,e){let t=e.high!==!1,n=k=>e.onStatus&&e.onStatus(k);n("Building the city\u2026");let i=new Su({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!1});i.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1)),i.toneMapping=Tr,i.toneMappingExposure=1.05,i.shadowMap.enabled=t,i.shadowMap.type=Er;let r=i.domElement;r.style.cssText="width:100%;height:100%;display:block;outline:none;cursor:grab",r.tabIndex=0,s.appendChild(r);let o=document.createElement("div");o.style.cssText="position:absolute;left:50%;bottom:9%;transform:translateX(-50%);padding:9px 16px;background:rgba(0,0,0,.72);border:1px solid rgba(255,255,255,.55);color:#fff;font:600 13px/1 ui-monospace,Menlo,monospace;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;pointer-events:none;display:none",getComputedStyle(s).position==="static"&&(s.style.position="relative"),s.appendChild(o);let a="",c=!1,l=0,u=0,h="",d=k=>{k!==a&&(a=k,o.textContent=k,o.style.display=k?"block":"none")},f=(k,ge=1.4)=>{h=k,u=q+ge},m=document.createElement("div");m.style.cssText="position:absolute;left:12px;top:12px;padding:8px 10px;background:rgba(0,0,0,.6);border:1px solid rgba(255,255,255,.28);color:rgba(255,255,255,.82);font:500 10px/1.7 ui-monospace,Menlo,monospace;letter-spacing:.14em;text-transform:uppercase;white-space:pre;pointer-events:none;display:none",m.textContent=["MOUSE  SPRAY \xB7 RIGHT BUTTON  LIGHT COAT","SHIFT  STRAIGHT LINE \xB7 WHEEL  CAN CLOSER / FURTHER","1 2 3  CAP \xB7 TAB  COLOUR \xB7 X  BUFF CAN \xB7 Z  UNDO","A D  STEP ALONG \xB7 W S  VIEW IN / OUT \xB7 ARROWS  LOOK","H  HIDE THIS \xB7 F  DONE"].join(`
`),s.appendChild(m);let x=new dr,g=new yn(62,16/9,.05,900),p=await s0(i,e.base+"tex/"),M=i0({renderer:i,scene:x,high:t,look:p,vexvoid:!0});x.add(M.group),n("Dressing the writer\u2026");let _=await Wu(e.base+"anims/ual.glb",t,e.base+"models/writer.glb");x.add(_.root,_.can);let v=x0(x,M.walls,e.store),C=null,S=()=>{if(!C)try{let k=new AudioContext,ge=k.createGain();ge.connect(k.destination),C={ctx:k,out:ge}}catch{C=null}return C};n("Calling the law\u2026");let F=await S0({scene:x,high:t,base:e.base,blockers:M.blockers,groundY:M.groundY,bounds:Or,sound:S}),H=new ti("#ffffff",9,7,2),b=new ti("#ffffff",6,5,2);x.add(H,b);let w=()=>{let k=s.getBoundingClientRect();return{w:Math.max(2,Math.round(k.width)),h:Math.max(2,Math.round(k.height))}},{w:B,h:V}=w();i.setSize(B,V,!1);let Z=new Ru(i);if(Z.addPass(new Cu(x,g)),t){let k=new nl(x,g,B,V);k.updateGtaoMaterial({radius:1.4,distanceExponent:1.4,thickness:1.5,scale:1.1,samples:8});let ge=k.render.bind(k),Ye=[];k.render=(...tt)=>{x.traverse(Xt=>{(Xt.isSprite||Xt.isPoints||Xt.isLineSegments||Xt.userData.noAO)&&Xt.visible&&(Xt.visible=!1,Ye.push(Xt))}),ge(...tt);for(let Xt of Ye.splice(0))Xt.visible=!0},Z.addPass(k)}let re=new Do(new ye(B,V),.42,.45,1.5);Z.addPass(re),Z.addPass(new Pu);let ae=r0();ae.apply(zb),Z.addPass(ae.pass);let N={x:0,z:8,y:0,gy:0,vy:0,heading:Math.PI,crouch:!1,airborne:!1},G={yaw:0,pitch:.12,dist:3.4},oe=new Set,Te=["w","a","s","d","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Shift"," ","c","f","p","r","1","2","3","4","5","6","7","z","x","h","Tab","Escape"],xe={colour:js[0],cap:2,dist:.2,pressure:1,buff:!1},Ie=["","SKINNY","MEDIUM","FAT"],R=null,X=0,j=0,ne=!0,T=!1,U=null,O=null,Y=null,Q=null,Ee=0,be=0,me=new ye,te=new La,ve=new D,le=new D,Re=new D,A=new Map(M.walls.map(k=>[k.id,k])),de=(k,ge,Ye)=>(ge-k.center.x)*k.normal.z-(Ye-k.center.z)*k.normal.x,_e=(k,ge,Ye)=>(ge-k.center.x)*k.normal.x+(Ye-k.center.z)*k.normal.z,Ve=new Map,we=k=>{let ge=Ve.get(k.id);if(ge)return ge;let Ye=M.walls.filter(tt=>tt!==k&&tt.normal.dot(k.normal)>.99&&Math.abs(_e(k,tt.center.x,tt.center.z))<.1&&Math.abs(de(k,tt.center.x,tt.center.z))<(tt.w+k.w)/2+.3);return ge={ids:[k.id,...Ye.map(tt=>tt.id)],lo:Math.min(-k.w/2,...Ye.map(tt=>de(k,tt.center.x,tt.center.z)-tt.w/2)),hi:Math.max(k.w/2,...Ye.map(tt=>de(k,tt.center.x,tt.center.z)+tt.w/2))},Ve.set(k.id,ge),ge},L={text:"",until:0},E="",q=0,ue=(k,ge)=>{L={text:k,until:q+ge}},Se=k=>{let ge=k*100;return ge<10?ge.toFixed(1):String(Math.round(ge))},pe=()=>{if(L.until>q)return L.text;let k=F.state(),ge=Math.min(5,Math.ceil(k.heat*5-.001)),Ye={off:"PATROL OFF",calm:k.seen?"SEEN":k.heat>=.6?"WANTED":"CALM",alerted:"ALERT",chase:"CHASE",searching:"SEARCHING",busted:"BUSTED"}[k.chase],tt=k.on?`HEAT ${"\u25AE".repeat(ge)}${"\u25AF".repeat(5-ge)} ${Ye} \xB7 P PATROL OFF`:"PATROL OFF \xB7 P PATROL ON";return(R?`PAINTING ${R.id.toUpperCase()} \xB7 ${xe.buff?"BUFF":qu[X]} \xB7 ${Ie[xe.cap]} CAP \xB7 ${Math.round(xe.dist*100)} CM OFF \xB7 LINE ${Se(No(xe).width)} CM \xB7 ${ne?"F DONE":"H HELP \xB7 F DONE"}`:"WASD MOVE \xB7 SHIFT SPRINT \xB7 C CROUCH \xB7 SPACE JUMP \xB7 DRAG LOOK \xB7 F AT ANY WALL TO PAINT")+" \xB7 "+tt+(e.onRec?" \xB7 R RECORD":"")},Ge=()=>{let k=pe();k!==E&&(E=k,e.onHud&&e.onHud(k))},Pe=new D(0,0,-1),ie=new D,Ae=(k=4.5)=>{let ge=null,Ye=1e9;for(let tt of M.walls){let Xt=_e(tt,N.x,N.z);if(Xt<=0||Xt>k||Math.abs(de(tt,N.x,N.z))>tt.w/2+.3)continue;let Gn=Xt+1.5*(1-Math.max(0,-(Pe.x*tt.normal.x+Pe.z*tt.normal.z)));Gn<Ye&&(Ye=Gn,ge=tt)}return ge?{id:ge.id,spot:ge}:null},he=(k,ge,Ye,tt,Xt,Gn,dn)=>{let _n=1,P=tt-k,$=Xt-ge,fe=dn?dn.center.x-dn.normal.x*.2:1e9,se=dn?dn.center.z-dn.normal.z*.2:1e9;for(let ee of M.blockers){if(fe>ee.x0&&fe<ee.x1&&se>ee.z0&&se<ee.z1)continue;let ke=0,je=_n;if(Math.abs(P)<1e-6){if(k<ee.x0||k>ee.x1)continue}else{let Ze=(ee.x0-k)/P,Qe=(ee.x1-k)/P;ke=Math.max(ke,Math.min(Ze,Qe)),je=Math.min(je,Math.max(Ze,Qe))}if(Math.abs($)<1e-6){if(ge<ee.z0||ge>ee.z1)continue}else{let Ze=(ee.z0-ge)/$,Qe=(ee.z1-ge)/$;ke=Math.max(ke,Math.min(Ze,Qe)),je=Math.min(je,Math.max(Ze,Qe))}ke>=je||ee.low&&Ye+(Gn-Ye)*ke>1.2||(_n=ke)}return _n},Fe=k=>{let ge=Q;ge&&(Q=null,v.end(),ge.done(k))},Be=k=>{R={id:k.id,spot:k},G.yaw=Math.atan2(k.normal.x,k.normal.z),G.pitch=.1,G.dist=2.6},qe=()=>{if(R){R=null,j=0,O=null,Y=null,v.end(),Fe(!1),N.crouch=!1,Ge();return}let k=Ae();if(!k){ue("NO WALL WITHIN REACH",2.5),f("WALK UP TO A WALL \xB7 THEN F",2.5);return}N.crouch=!1,Be(k.spot),Ge()},Ue=null,ut=(k,ge=1)=>{let Ye=!Ue&&k?S():null;if(Ye){let tt=Ye.ctx,Xt=tt.createBuffer(1,tt.sampleRate,tt.sampleRate),Gn=Xt.getChannelData(0);for(let $=0;$<Gn.length;$++)Gn[$]=Math.random()*2-1;let dn=tt.createBufferSource();dn.buffer=Xt,dn.loop=!0;let _n=tt.createBiquadFilter();_n.type="bandpass",_n.frequency.value=3800,_n.Q.value=.7;let P=tt.createGain();P.gain.value=0,dn.connect(_n).connect(P).connect(Ye.out),dn.start(),Ue={ctx:tt,gain:P}}Ue&&Ue.gain.gain.setTargetAtTime(k?.12*ge:0,Ue.ctx.currentTime,.03)},W=new Je(new Sa(.86,1,40),new Lt({color:"#ffffff",transparent:!0,opacity:.8,depthTest:!1})),He=new Je(new fa(.0035,12),new Lt({color:"#ffffff",transparent:!0,opacity:.9,depthTest:!1})),Ne=new Es(new Bt().setFromPoints([new D,new D]),new Gs({color:"#ffffff",transparent:!0,opacity:.8,depthTest:!1}));for(let k of[W,He,Ne])k.renderOrder=10,k.visible=!1,k.userData.noAO=!0,k.frustumCulled=!1,x.add(k);let Ke=k=>{xe.cap=k,f(`${Ie[k]} CAP \xB7 ${Se(No(xe).width)} CM LINE`),Ge()},Le=k=>{X=(k+js.length)%js.length,xe.colour=js[X],xe.buff=!1,f(qu[X]),Ge()},Ce=k=>{let ge=k?A.get(k):R?R.spot:null;if(!ge)return 0;O=null,Y=null;let Ye=k?[k]:we(ge).ids,tt=v.undo(Ye);return R&&f(tt?`UNDONE \xB7 ${v.undoable(Ye)} MORE`:"NOTHING TO UNDO"),tt?tt.length:0},Xe=(k,ge)=>{let Ye=k.key.length===1?k.key.toLowerCase():k.key;if(Te.includes(Ye)){if(k.preventDefault(),k.stopPropagation(),ge&&!k.repeat&&Ye==="r"){e.onRec&&e.onRec();return}if(!gt){if(ge&&!k.repeat&&Ye==="f"&&qe(),ge&&!k.repeat&&Ye==="p"){let tt=!F.state().on;F.setOn(tt),ue(tt?"PATROL ON \xB7 WATCH FOR THE CAR":"PATROL OFF \xB7 PAINT IN PEACE",2)}ge&&!k.repeat&&Ye==="Escape"&&R&&qe(),ge&&!k.repeat&&R&&(Ye==="1"||Ye==="2"||Ye==="3")&&Ke(Number(Ye)),ge&&!k.repeat&&R&&Ye>="4"&&Ye<="7"&&Ye.length===1&&Le(Number(Ye)-4),ge&&!k.repeat&&R&&Ye==="Tab"&&Le(X+(k.shiftKey?-1:1)),ge&&!k.repeat&&R&&Ye==="x"&&(xe.buff=!xe.buff,f(xe.buff?"BUFF CAN \xB7 TAKES PAINT OFF":`PAINT \xB7 ${qu[X]}`),Ge()),ge&&R&&Ye==="z"&&!Q&&Ce(),ge&&!k.repeat&&R&&Ye==="h"&&(ne=!ne,Ge()),ge&&!k.repeat&&Ye==="c"&&!R&&(N.crouch=!N.crouch),ge&&!k.repeat&&Ye===" "&&!N.airborne&&(N.vy=4.6,N.airborne=!0,N.crouch=!1,_.play("Jump_Start",.08,!0)),ge?oe.add(Ye):oe.delete(Ye)}}},dt=k=>Xe(k,!0),Gt=k=>Xe(k,!1);r.addEventListener("keydown",dt),r.addEventListener("keyup",Gt),r.addEventListener("blur",()=>{oe.clear(),j=0});let xt=null,nt=k=>{let ge=r.getBoundingClientRect();me.set((k.clientX-ge.left)/ge.width*2-1,-((k.clientY-ge.top)/ge.height)*2+1)};r.addEventListener("pointerdown",k=>{if(r.focus(),nt(k),r.setPointerCapture(k.pointerId),k.button===1&&k.preventDefault(),R&&(k.button===0||k.button===2)){j||be++,j|=k.button===0?1:2,U=me.clone();return}xt={x:k.clientX,y:k.clientY},r.style.cursor="grabbing"}),r.addEventListener("contextmenu",k=>k.preventDefault()),r.addEventListener("mousedown",k=>{k.button===1&&k.preventDefault()});let Mt=(k,ge)=>{if(G.yaw+=k,G.pitch=Math.max(-.35,Math.min(.75,G.pitch+ge)),R){let Ye=Math.atan2(R.spot.normal.x,R.spot.normal.z),tt=G.yaw-Ye;tt=Math.atan2(Math.sin(tt),Math.cos(tt)),G.yaw=Ye+Math.max(-1.1,Math.min(1.1,tt))}};r.addEventListener("pointermove",k=>{nt(k),xt&&(Mt(-(k.clientX-xt.x)*.0045,(k.clientY-xt.y)*.003),xt={x:k.clientX,y:k.clientY})});let Rn=k=>{nt(k),k.type==="pointercancel"||!k.buttons?(j=0,xt=null):(k.button===0&&(j&=-2),k.button===2&&(j&=-3),k.button===1&&(xt=null)),r.style.cursor=R?"crosshair":"grab"};r.addEventListener("pointerup",Rn),r.addEventListener("pointercancel",Rn),r.addEventListener("wheel",k=>{if(k.preventDefault(),R){xe.dist=Math.round(Math.max(.05,Math.min(.6,xe.dist+k.deltaY*5e-4))*200)/200,f(`CAN ${Math.round(xe.dist*100)} CM OFF \xB7 ${Se(No(xe).width)} CM LINE`,1),Ge();return}G.dist=Math.max(1.2,Math.min(7,G.dist*Math.exp(k.deltaY*.001)))},{passive:!1});let jt=new ResizeObserver(()=>{({w:B,h:V}=w()),i.setSize(B,V,!1),Z.setSize(B,V),M.resize(B,V),g.aspect=B/V,g.updateProjectionMatrix()});jt.observe(s);let hn=new br,gn=0,nn=!1,Ut="",gt=null,fn=new D(0,2,12),xn=new D,Ft=0,Zt="",$t=0;g.position.copy(fn);let Rt=()=>{if(nn)return;gn=requestAnimationFrame(Rt);let k=Math.min(.05,hn.getDelta()),ge=gt&&gt.t<1.4?k*.3:k;q+=k;let Ye=oe.has("ArrowLeft"),tt=oe.has("ArrowRight"),Xt=oe.has("ArrowUp"),Gn=oe.has("ArrowDown"),dn=gt?0:(oe.has("d")||!R&&tt?1:0)-(oe.has("a")||!R&&Ye?1:0),_n=gt?0:(oe.has("w")||!R&&Xt?1:0)-(oe.has("s")||!R&&Gn?1:0),P=oe.has("Shift")&&!N.crouch&&!R,$=!!(dn||_n&&!R),fe=N.crouch?1.35:P?6.2:3.3;if(Pe.set(-Math.sin(G.yaw),0,-Math.cos(G.yaw)),ie.set(Math.cos(G.yaw),0,-Math.sin(G.yaw)),$&&!R){let We=Pe.x*_n+ie.x*dn,rt=Pe.z*_n+ie.z*dn,Ot=Math.hypot(We,rt);N.x=Math.max(-Or.x,Math.min(Or.x,N.x+We/Ot*fe*ge)),N.z=Math.max(Or.z0,Math.min(Or.z1,N.z+rt/Ot*fe*ge));let Wt=Math.atan2(We,rt)-N.heading;Wt=Math.atan2(Math.sin(Wt),Math.cos(Wt)),N.heading+=Wt*Math.min(1,ge*12);for(let Dt of M.blockers){let St=Dt.x0-.35,st=Dt.x1+.35,wt=Dt.z0-.35,et=Dt.z1+.35;if(N.x>St&&N.x<st&&N.z>wt&&N.z<et){let vn=[N.x-St,st-N.x,N.z-wt,et-N.z],Jn=Math.min(...vn);Jn===vn[0]?N.x=St:Jn===vn[1]?N.x=st:Jn===vn[2]?N.z=wt:N.z=et}}}if(T=!1,R){gt||(G.dist=Math.max(1.5,Math.min(7,G.dist+((oe.has("s")?1:0)-(oe.has("w")?1:0))*3*ge)),(Ye||tt||Xt||Gn)&&Mt(((Ye?1:0)-(tt?1:0))*1.2*ge,((Xt?1:0)-(Gn?1:0))*.8*ge));let We=R.spot,rt=We.normal,Ot=rt.z,Wt=-rt.x,Dt=we(We),St=_e(We,N.x,N.z),st=de(We,N.x,N.z);st+=dn*1.1*ge,Math.abs(l)>1.1&&(st+=Math.sign(l)*Math.min(Math.abs(l)-1.1,(Q?4:1.6)*ge)),St=Math.max(.55,Math.min(.9,St)),st=Dt.hi-Dt.lo>.7?Math.max(Dt.lo+.3,Math.min(Dt.hi-.3,st)):(Dt.lo+Dt.hi)/2;for(let $e of M.blockers){let vt=We.center.x+rt.x*St+Ot*st,Qt=We.center.z+rt.z*St+Wt*st,Un=We.center.x-rt.x*.2,fs=We.center.z-rt.z*.2;if(vt<=$e.x0-.35||vt>=$e.x1+.35||Qt<=$e.z0-.35||Qt>=$e.z1+.35||Un>$e.x0&&Un<$e.x1&&fs>$e.z0&&fs<$e.z1)continue;let oi=[de(We,$e.x0-.35,$e.z0-.35),de(We,$e.x1+.35,$e.z1+.35)],Li=Math.min(...oi),Ls=Math.max(...oi);st=dn>0?Ls:dn<0||st-Li<Ls-st?Li:Ls}N.x=We.center.x+rt.x*St+Ot*st,N.z=We.center.z+rt.z*St+Wt*st;let wt=Math.atan2(-rt.x,-rt.z)-N.heading;wt=Math.atan2(Math.sin(wt),Math.cos(wt)),N.heading+=wt*Math.min(1,ge*10),te.setFromCamera(me,g);let et=Q||gt?null:v.hit(te,Dt.ids);if(et){let $e=g.position,vt=Math.hypot(et.point.x-$e.x,et.point.z-$e.z);(1-he($e.x,$e.z,$e.y,et.point.x,et.point.z,et.point.y,et.wall))*vt>.3&&(et=null)}et&&et.wall!==We&&(R={id:et.id,spot:et.wall},We=et.wall,rt=We.normal,Ge());let vn=N.gy,Jn=vn+N.y+(N.crouch?1.9:2.6),Wn=!!et&&et.point.y>=Jn,pi=!!et&&!Wn,qt=j!==0&&!Q,Vt=null,Pn=1,En=et;if(U&&et){te.setFromCamera(U,g);let $e=v.hit(te,[et.id]);$e&&$e.point.y<Jn&&(En=$e)}if(U=null,Q){Ne.visible=!1;let $e=Q,vt=$e.list[$e.i];if(vt.wall!==We.id&&(Be(A.get(vt.wall)),We=R.spot,rt=We.normal),$e.gap>0)$e.gap-=ge,Vt=v.point(vt.wall,vt.pts[0][0],vt.pts[0][1],le);else{$e.k===0&&v.begin(vt.wall,vt.can,{seed:vt.seed,group:$e.group}),$e.t+=ge*$e.speed;let Qt=vt.pts[Math.max(0,$e.k-1)];for(;$e.k<vt.pts.length&&vt.pts[$e.k][2]<=$e.t;)Qt=vt.pts[$e.k++],v.to(Qt[0],Qt[1],Qt[2]);let Un=Qt[0],fs=Qt[1];if($e.k<vt.pts.length&&$e.k>0){let oi=vt.pts[$e.k],Li=($e.t-Qt[2])/Math.max(1e-4,oi[2]-Qt[2]);Un+=(oi[0]-Un)*Li,fs+=(oi[1]-fs)*Li,v.to(Un,fs,$e.t)}Vt=v.point(vt.wall,Un,fs,le),T=!0,Ut=vt.wall,Pn=vt.can.pressure??1,$e.k>=vt.pts.length&&(v.end(),$e.i++,$e.k=0,$e.t=0,$e.gap=.18/$e.speed,$e.i>=$e.list.length&&Fe(!0))}}else{qt&&oe.has("Shift")&&!Y&&et&&pi&&(v.end(),O=null,Y={id:et.id,x:En.x,y:En.y,press:j&1?1:.5});let $e=null;if(Y){if(et&&et.id===Y.id&&pi){let vt=et.x-Y.x,Qt=et.y-Y.y;Math.abs(Qt)<Math.abs(vt)*.07?Qt=0:Math.abs(vt)<Math.abs(Qt)*.07&&(vt=0),$e={x:Y.x+vt,y:Y.y+Qt}}if(qt)oe.has("Shift")||(Y=null);else{let vt=$e?Math.hypot($e.x-Y.x,$e.y-Y.y):0;$e&&vt>.02&&(Q={list:[{wall:Y.id,can:{...xe,pressure:Y.press},pts:[[Y.x,Y.y,0],[$e.x,$e.y,vt/2.4]]}],i:0,k:0,t:0,gap:0,speed:1,group:"",done:()=>{}},c=!0),Y=null}}if(Ne.visible=!!(Y&&$e),Y&&$e){let vt=Ne.geometry.attributes.position;v.point(Y.id,Y.x,Y.y,Re).addScaledVector(rt,.02),vt.setXYZ(0,Re.x,Re.y,Re.z),v.point(Y.id,$e.x,$e.y,Re).addScaledVector(rt,.02),vt.setXYZ(1,Re.x,Re.y,Re.z),vt.needsUpdate=!0}if(qt&&!Y&&!Q&&et&&pi){let vt=j&1?1:.5,Qt=[et.id,xe.cap,xe.dist,xe.colour,vt,xe.buff].join("|");(!O||O.key!==Qt||!v.stroke())&&(v.begin(et.id,{...xe,pressure:vt},{group:"h"+be}),O={key:Qt,t0:q-k,x:En.x,y:En.y},v.to(O.x,O.y,0));let Un=1-Math.exp(-k/.035);O.x+=(et.x-O.x)*Un,O.y+=(et.y-O.y)*Un,v.to(O.x,O.y,q-O.t0),T=c=!0,Ut=et.id,Pn=vt,Vt=v.point(et.id,O.x,O.y,le)}else O&&(v.end(),O=null),et&&(Vt=le.copy(et.point))}if(Vt&&!N.airborne&&(Vt.y<vn+.8?N.crouch=!0:Vt.y>vn+1.15&&(N.crouch=!1)),l=Vt&&(T||Q)?(Vt.x-N.x)*rt.z-(Vt.z-N.z)*rt.x:0,d(q<u?h:Q?"":Y?"STRAIGHT LINE \xB7 LET GO TO SPRAY IT":Wn?"TOO HIGH TO REACH \xB7 AIM LOWER":et?c?"":"HOLD THE MOUSE BUTTON TO SPRAY \xB7 F WHEN DONE":"POINT AT THE WALL"),W.visible=He.visible=!!Vt,Vt){W.position.copy(Vt).addScaledVector(rt,.02),W.rotation.set(0,Math.atan2(rt.x,rt.z),0),He.position.copy(W.position),He.rotation.copy(W.rotation),W.scale.setScalar(Math.max(.004,No(Q?Q.list[Math.min(Q.i,Q.list.length-1)].can:xe).width/2));let $e=Q||pi?xe.buff&&!Q?"#9a9a9e":"#ffffff":"#555555";W.material.color.set($e),He.material.color.set($e),_.aim(ve.copy(Vt).addScaledVector(rt,xe.dist+.03),Vt,T?1:.85)}else _.aim(null);ut(T,.55+.45*Pn)}else{W.visible=He.visible=Ne.visible=!1,ut(!1),_.aim(null),l=0;let We=!gt&&Ae(2.5);d(q<u?h:We?"PRESS F TO PAINT THIS WALL":"")}m.style.display=R&&ne?"block":"none",v.update(ge,N),F.pushOut(N,.35);let se=F.update(ge,q,{x:N.x,z:N.z,y:N.y,crouch:N.crouch,painting:!!R,spraying:T});if(se&&e.onEvent)try{e.onEvent(se)}catch{}if(se==="busted"){gt={t:0,spot:Ut},R&&qe(),j=0,N.crouch=!1,oe.clear(),_.play("Hit_Knockback",.08,!0);let We=F.nearest();We&&(G.yaw=Math.atan2(N.x-We.x,N.z-We.z)+1.1)}if(se==="escaped"&&(ue("ESCAPED \xB7 THEY LOST YOU",3),Ut=""),se==="alert"&&ue("ALERT \xB7 THEY SAW YOU \xB7 RUN",1.4),gt&&(gt.t+=k,G.yaw+=k*.45,G.dist+=(5.2-G.dist)*Math.min(1,k*2),G.pitch+=(.32-G.pitch)*Math.min(1,k*2),L={text:gt.spot?`BUSTED \xB7 THEY ARE BUFFING ${gt.spot.toUpperCase()}`:"BUSTED",until:q+.1},gt.t>2.8&&(gt.spot&&v.clear(gt.spot),ue(gt.spot?`BUSTED \xB7 ${gt.spot.toUpperCase()} GOT BUFFED \xB7 BACK TO THE START`:"BUSTED \xB7 BACK TO THE START",3.5),Object.assign(N,{x:0,z:8,y:0,vy:0,heading:Math.PI,crouch:!1,airborne:!1}),Object.assign(G,{yaw:0,pitch:.12,dist:3.4}),gt=null,Ut="",F.reset(),_.play("Idle_Loop",.2))),!gt)if(R&&!N.airborne)_.play(N.crouch?dn?"Crouch_Fwd_Loop":"Crouch_Idle_Loop":dn?"Jog_Fwd_Loop":"Idle_Loop",.15);else if(N.airborne)N.vy-=13*ge,N.y+=N.vy*ge,N.y<=0?(N.y=0,N.vy=0,N.airborne=!1,_.play("Jump_Land",.06,!0),Ft=.28):N.vy<2.5&&_.play("Jump_Loop",.15);else if(Ft>0)Ft-=ge;else if(Zt)_.play(Zt,.2);else{$t=$||N.crouch?0:$t+ge;let We=$t%16>9?"Idle_FoldArms_Loop":"Idle_Loop";_.play(N.crouch?$?"Crouch_Fwd_Loop":"Crouch_Idle_Loop":$?P?"Sprint_Loop":"Jog_Fwd_Loop":We,We==="Idle_FoldArms_Loop"?.6:.22)}N.gy+=(M.groundY(N.x,N.z)-N.gy)*Math.min(1,ge*16);let ee=N.gy+N.y;_.root.position.set(N.x,ee,N.z),_.root.rotation.y=N.heading,_.update(ge),H.position.set(N.x+Math.sin(G.yaw)*1.8+Math.cos(G.yaw)*.9,ee+2.4,N.z+Math.cos(G.yaw)*1.8-Math.sin(G.yaw)*.9),b.position.set(N.x-Math.sin(G.yaw)*1.4,ee+2.1,N.z-Math.cos(G.yaw)*1.4);let ke=ee+(N.crouch?1.05:1.45),je=N.x+Math.sin(G.yaw)*Math.cos(G.pitch)*G.dist+Math.cos(G.yaw)*.55,Ze=N.z+Math.cos(G.yaw)*Math.cos(G.pitch)*G.dist-Math.sin(G.yaw)*.55,Qe=Math.max(.35,ke+Math.sin(G.pitch)*G.dist),at=Math.max(-26.5,Math.min(26.5,je)),ft=Math.max(Or.z0-.5,Math.min(Or.z1+4,Ze));if(R){let We=he(N.x,N.z,ke,at,ft,Qe);if(We<1){let rt=Math.max(.3,We-.1);at=N.x+(at-N.x)*rt,ft=N.z+(ft-N.z)*rt,Qe=ke+(Qe-ke)*rt}}fn.set(at,Qe,ft),g.position.lerp(fn,Math.min(1,ge*10)),xn.set(N.x+Math.cos(G.yaw)*.55,ke,N.z-Math.sin(G.yaw)*.55),g.lookAt(xn),M.update(ge,q,g),M.beforeRender(i,x,g),ae.tick(q),Z.render(ge),Ge()};return n(""),Ge(),Rt(),{canvas:r,where:()=>({x:N.x,z:N.z,yaw:G.yaw,heading:N.heading,anim:_.playing()}),snap:(k=768)=>{M.beforeRender(i,x,g),Z.render(0);let ge=document.createElement("canvas");return ge.width=k,ge.height=Math.round(k*r.height/r.width),ge.getContext("2d").drawImage(r,0,0,ge.width,ge.height),ge.toDataURL("image/jpeg",.82)},inspect:k=>{k.yaw!=null&&(G.yaw=k.yaw),k.pitch!=null&&(G.pitch=k.pitch),k.dist!=null&&(G.dist=k.dist),k.heading!=null&&(N.heading=k.heading),Zt=k.anim||""},paint:(k,ge,Ye={})=>{O=null,v.path(k,ge,{colour:Ye.colour||js[0],cap:Ye.cap||2,dist:Ye.dist??.2,pressure:Ye.pressure??1,buff:!!Ye.buff})},clearPaint:k=>{O=null,Y=null,Fe(!1),v.clear(k)},strokes:k=>v.strokes(k).map(ge=>({...ge,pts:ge.pts.map(Ye=>[Ye[0],Ye[1],Ye[2]])})),play:(k,ge={})=>new Promise((Ye,tt)=>{try{if(!(ge.speed&&ge.speed>0))return O=null,v.replay(k,ge),Ye(!0);let Xt=ge.scale??1,[Gn,dn]=ge.at||[0,0],_n=k.filter(se=>se.pts.length).map(se=>({wall:ge.wall||se.wall,can:{colour:se.colour,cap:se.cap,dist:se.dist,pressure:se.pressure,buff:se.buff},seed:se.seed,pts:se.pts.map(([ee,ke,je])=>[Gn+ee*Xt,dn+ke*Xt,je])})),P=_n.find(se=>!A.has(se.wall));if(P)throw new Error("no wall "+P.wall);if(!_n.length||gt)return Ye(!1);Fe(!1),O=null,Y=null,j=0;let $=A.get(_n[0].wall),fe=_n[0].pts[0][0]-$.w/2;(!R||R.spot!==$||Math.abs(de($,N.x,N.z)-fe)>3)&&(N.x=$.center.x+$.normal.x*.7+$.normal.z*fe,N.z=$.center.z+$.normal.z*.7-$.normal.x*fe,N.heading=Math.atan2(-$.normal.x,-$.normal.z),Be($)),Q={list:_n,i:0,k:0,t:0,gap:.4,speed:ge.speed,group:"p"+ ++Ee,done:Ye}}catch(Xt){tt(Xt)}}),undo:k=>Ce(k),can:k=>(k&&(k.cap&&(xe.cap=k.cap),k.dist!=null&&(xe.dist=Math.max(.05,Math.min(.6,k.dist))),k.buff!=null&&(xe.buff=k.buff),k.colour&&js.includes(k.colour)&&(X=js.indexOf(k.colour),xe.colour=k.colour),Ge()),{...xe}),paintStats:()=>v.stats(),walls:(k={})=>M.walls.filter(ge=>k.near==null||Math.hypot(ge.center.x-N.x,ge.center.z-N.z)-ge.w/2<k.near).map(ge=>({id:ge.id,w:ge.w,h:ge.h,x:ge.center.x,y:ge.center.y,z:ge.center.z,nx:ge.normal.x,nz:ge.normal.z,painted:v.painted(ge.id)})),piece:k=>v.png(k),painting:()=>R?R.id:"",flush:async()=>{await v.loaded,await v.flush()},spots:()=>M.spots.map(k=>({id:k.id,w:k.w,h:k.h,x:k.center.x,y:k.center.y,z:k.center.z})),law:()=>F.state(),cops:k=>F.setOn(k),audio:()=>{let k=S();return k?{ctx:k.ctx,node:k.out}:null},goto:(k,ge,Ye,tt)=>{R&&qe(),N.x=k,N.z=ge,Ye!=null&&(G.yaw=Ye,N.heading=Ye+Math.PI),tt!=null&&(G.pitch=tt)},stop:()=>{nn=!0,cancelAnimationFrame(gn),jt.disconnect(),r.removeEventListener("keydown",dt),r.removeEventListener("keyup",Gt),ut(!1),F.dispose(),C&&C.ctx.close(),v.dispose(),_.dispose(),M.dispose(),p.dispose(),Z.dispose(),i.dispose(),r.remove(),o.remove(),m.remove();for(let k of[W,He,Ne])k.geometry.dispose(),k.material.dispose()}}}return Z0(Vb);})();
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
