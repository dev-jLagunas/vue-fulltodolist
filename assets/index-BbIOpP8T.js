const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/TodoMainView-CDLvDYHs.js","assets/TodoMainView-BE1IdIpa.css"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xi(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const le={},Rn=[],it=()=>{},lf=()=>!1,mr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ui=e=>e.startsWith("onUpdate:"),me=Object.assign,Fi=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},uf=Object.prototype.hasOwnProperty,te=(e,t)=>uf.call(e,t),F=Array.isArray,An=e=>ys(e)==="[object Map]",Vn=e=>ys(e)==="[object Set]",Io=e=>ys(e)==="[object Date]",z=e=>typeof e=="function",pe=e=>typeof e=="string",lt=e=>typeof e=="symbol",ie=e=>e!==null&&typeof e=="object",fc=e=>(ie(e)||z(e))&&z(e.then)&&z(e.catch),dc=Object.prototype.toString,ys=e=>dc.call(e),ff=e=>ys(e).slice(8,-1),hc=e=>ys(e)==="[object Object]",Bi=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Yn=xi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),vr=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},df=/-(\w)/g,Je=vr(e=>e.replace(df,(t,n)=>n?n.toUpperCase():"")),hf=/\B([A-Z])/g,qt=vr(e=>e.replace(hf,"-$1").toLowerCase()),_r=vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),js=vr(e=>e?`on${_r(e)}`:""),Kt=(e,t)=>!Object.is(e,t),Ws=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},pc=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Zs=e=>{const t=parseFloat(e);return isNaN(t)?e:t},pf=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let To;const gc=()=>To||(To=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bs(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=pe(s)?_f(s):bs(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(pe(e)||ie(e))return e}const gf=/;(?![^(]*\))/g,mf=/:([^]+)/,vf=/\/\*[^]*?\*\//g;function _f(e){const t={};return e.replace(vf,"").split(gf).forEach(n=>{if(n){const s=n.split(mf);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function zt(e){let t="";if(pe(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const s=zt(e[n]);s&&(t+=s+" ")}else if(ie(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const yf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",bf=xi(yf);function mc(e){return!!e||e===""}function Ef(e,t){if(e.length!==t.length)return!1;let n=!0;for(let s=0;n&&s<e.length;s++)n=fn(e[s],t[s]);return n}function fn(e,t){if(e===t)return!0;let n=Io(e),s=Io(t);if(n||s)return n&&s?e.getTime()===t.getTime():!1;if(n=lt(e),s=lt(t),n||s)return e===t;if(n=F(e),s=F(t),n||s)return n&&s?Ef(e,t):!1;if(n=ie(e),s=ie(t),n||s){if(!n||!s)return!1;const r=Object.keys(e).length,i=Object.keys(t).length;if(r!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),c=t.hasOwnProperty(o);if(a&&!c||!a&&c||!fn(e[o],t[o]))return!1}}return String(e)===String(t)}function $i(e,t){return e.findIndex(n=>fn(n,t))}const vc=e=>!!(e&&e.__v_isRef===!0),Vi=e=>pe(e)?e:e==null?"":F(e)||ie(e)&&(e.toString===dc||!z(e.toString))?vc(e)?Vi(e.value):JSON.stringify(e,_c,2):String(e),_c=(e,t)=>vc(t)?_c(e,t.value):An(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[$r(s,i)+" =>"]=r,n),{})}:Vn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>$r(n))}:lt(t)?$r(t):ie(t)&&!F(t)&&!hc(t)?String(t):t,$r=(e,t="")=>{var n;return lt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Se;class yc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function bc(e){return new yc(e)}function Ec(){return Se}function wf(e,t=!1){Se&&Se.cleanups.push(e)}let ae;const Vr=new WeakSet;class wc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.nextEffect=void 0,this.cleanup=void 0,this.scheduler=void 0,Se&&Se.active&&Se.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vr.has(this)&&(Vr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||(this.flags|=8,this.nextEffect=Xn,Xn=this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,So(this),Tc(this);const t=ae,n=Ge;ae=this,Ge=!0;try{return this.fn()}finally{Sc(this),ae=t,Ge=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wi(t);this.deps=this.depsTail=void 0,So(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){li(this)&&this.run()}get dirty(){return li(this)}}let Ic=0,Xn;function Hi(){Ic++}function ji(){if(--Ic>0)return;let e;for(;Xn;){let t=Xn;for(Xn=void 0;t;){const n=t.nextEffect;if(t.nextEffect=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Tc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Sc(e){let t,n=e.depsTail;for(let s=n;s;s=s.prevDep)s.version===-1?(s===n&&(n=s.prevDep),Wi(s),If(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0;e.deps=t,e.depsTail=n}function li(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&Cc(t.dep.computed)||t.dep.version!==t.version)return!0;return!!e._dirty}function Cc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===os))return;e.globalVersion=os;const t=e.dep;if(e.flags|=2,t.version>0&&!e.isSSR&&!li(e)){e.flags&=-3;return}const n=ae,s=Ge;ae=e,Ge=!0;try{Tc(e);const r=e.fn(e._value);(t.version===0||Kt(r,e._value))&&(e._value=r,t.version++)}catch(r){throw t.version++,r}finally{ae=n,Ge=s,Sc(e),e.flags&=-3}}function Wi(e){const{dep:t,prevSub:n,nextSub:s}=e;if(n&&(n.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n),!t.subs&&t.computed){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Wi(r)}}function If(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ge=!0;const Rc=[];function Jt(){Rc.push(Ge),Ge=!1}function Yt(){const e=Rc.pop();Ge=e===void 0?!0:e}function So(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ae;ae=void 0;try{t()}finally{ae=n}}}let os=0;class yr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0}track(t){if(!ae||!Ge||ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ae)n=this.activeLink={dep:this,sub:ae,version:this.version,nextDep:void 0,prevDep:void 0,nextSub:void 0,prevSub:void 0,prevActiveLink:void 0},ae.deps?(n.prevDep=ae.depsTail,ae.depsTail.nextDep=n,ae.depsTail=n):ae.deps=ae.depsTail=n,ae.flags&4&&Ac(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ae.depsTail,n.nextDep=void 0,ae.depsTail.nextDep=n,ae.depsTail=n,ae.deps===n&&(ae.deps=s)}return n}trigger(t){this.version++,os++,this.notify(t)}notify(t){Hi();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()}finally{ji()}}}function Ac(e){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ac(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}const er=new WeakMap,cn=Symbol(""),ui=Symbol(""),as=Symbol("");function Ie(e,t,n){if(Ge&&ae){let s=er.get(e);s||er.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=new yr),r.track()}}function bt(e,t,n,s,r,i){const o=er.get(e);if(!o){os++;return}const a=c=>{c&&c.trigger()};if(Hi(),t==="clear")o.forEach(a);else{const c=F(e),l=c&&Bi(n);if(c&&n==="length"){const u=Number(s);o.forEach((d,p)=>{(p==="length"||p===as||!lt(p)&&p>=u)&&a(d)})}else switch(n!==void 0&&a(o.get(n)),l&&a(o.get(as)),t){case"add":c?l&&a(o.get("length")):(a(o.get(cn)),An(e)&&a(o.get(ui)));break;case"delete":c||(a(o.get(cn)),An(e)&&a(o.get(ui)));break;case"set":An(e)&&a(o.get(cn));break}}ji()}function Tf(e,t){var n;return(n=er.get(e))==null?void 0:n.get(t)}function bn(e){const t=X(e);return t===e?t:(Ie(t,"iterate",as),Ve(e)?t:t.map(we))}function br(e){return Ie(e=X(e),"iterate",as),e}const Sf={__proto__:null,[Symbol.iterator](){return Hr(this,Symbol.iterator,we)},concat(...e){return bn(this).concat(...e.map(t=>F(t)?bn(t):t))},entries(){return Hr(this,"entries",e=>(e[1]=we(e[1]),e))},every(e,t){return ft(this,"every",e,t,void 0,arguments)},filter(e,t){return ft(this,"filter",e,t,n=>n.map(we),arguments)},find(e,t){return ft(this,"find",e,t,we,arguments)},findIndex(e,t){return ft(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ft(this,"findLast",e,t,we,arguments)},findLastIndex(e,t){return ft(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ft(this,"forEach",e,t,void 0,arguments)},includes(...e){return jr(this,"includes",e)},indexOf(...e){return jr(this,"indexOf",e)},join(e){return bn(this).join(e)},lastIndexOf(...e){return jr(this,"lastIndexOf",e)},map(e,t){return ft(this,"map",e,t,void 0,arguments)},pop(){return Wn(this,"pop")},push(...e){return Wn(this,"push",e)},reduce(e,...t){return Co(this,"reduce",e,t)},reduceRight(e,...t){return Co(this,"reduceRight",e,t)},shift(){return Wn(this,"shift")},some(e,t){return ft(this,"some",e,t,void 0,arguments)},splice(...e){return Wn(this,"splice",e)},toReversed(){return bn(this).toReversed()},toSorted(e){return bn(this).toSorted(e)},toSpliced(...e){return bn(this).toSpliced(...e)},unshift(...e){return Wn(this,"unshift",e)},values(){return Hr(this,"values",we)}};function Hr(e,t,n){const s=br(e),r=s[t]();return s!==e&&!Ve(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const Cf=Array.prototype;function ft(e,t,n,s,r,i){const o=br(e),a=o!==e&&!Ve(e),c=o[t];if(c!==Cf[t]){const d=c.apply(e,i);return a?we(d):d}let l=n;o!==e&&(a?l=function(d,p){return n.call(this,we(d),p,e)}:n.length>2&&(l=function(d,p){return n.call(this,d,p,e)}));const u=c.call(o,l,s);return a&&r?r(u):u}function Co(e,t,n,s){const r=br(e);let i=n;return r!==e&&(Ve(e)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,e)}):i=function(o,a,c){return n.call(this,o,we(a),c,e)}),r[t](i,...s)}function jr(e,t,n){const s=X(e);Ie(s,"iterate",as);const r=s[t](...n);return(r===-1||r===!1)&&qi(n[0])?(n[0]=X(n[0]),s[t](...n)):r}function Wn(e,t,n=[]){Jt(),Hi();const s=X(e)[t].apply(e,n);return ji(),Yt(),s}const Rf=xi("__proto__,__v_isRef,__isVue"),Pc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(lt));function Af(e){lt(e)||(e=String(e));const t=X(this);return Ie(t,"has",e),t.hasOwnProperty(e)}class Oc{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?Vf:Lc:i?Dc:Nc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=F(t);if(!r){let c;if(o&&(c=Sf[n]))return c;if(n==="hasOwnProperty")return Af}const a=Reflect.get(t,n,he(t)?t:s);return(lt(n)?Pc.has(n):Rf(n))||(r||Ie(t,"get",n),i)?a:he(a)?o&&Bi(n)?a:a.value:ie(a)?r?xc(a):Es(a):a}}class kc extends Oc{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];if(!this._isShallow){const c=dn(i);if(!Ve(s)&&!dn(s)&&(i=X(i),s=X(s)),!F(t)&&he(i)&&!he(s))return c?!1:(i.value=s,!0)}const o=F(t)&&Bi(n)?Number(n)<t.length:te(t,n),a=Reflect.set(t,n,s,he(t)?t:r);return t===X(r)&&(o?Kt(s,i)&&bt(t,"set",n,s):bt(t,"add",n,s)),a}deleteProperty(t,n){const s=te(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&bt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!lt(n)||!Pc.has(n))&&Ie(t,"has",n),s}ownKeys(t){return Ie(t,"iterate",F(t)?"length":cn),Reflect.ownKeys(t)}}class Pf extends Oc{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Of=new kc,kf=new Pf,Nf=new kc(!0);const Ki=e=>e,Er=e=>Reflect.getPrototypeOf(e);function Ms(e,t,n=!1,s=!1){e=e.__v_raw;const r=X(e),i=X(t);n||(Kt(t,i)&&Ie(r,"get",t),Ie(r,"get",i));const{has:o}=Er(r),a=s?Ki:n?Yi:we;if(o.call(r,t))return a(e.get(t));if(o.call(r,i))return a(e.get(i));e!==r&&e.get(t)}function xs(e,t=!1){const n=this.__v_raw,s=X(n),r=X(e);return t||(Kt(e,r)&&Ie(s,"has",e),Ie(s,"has",r)),e===r?n.has(e):n.has(e)||n.has(r)}function Us(e,t=!1){return e=e.__v_raw,!t&&Ie(X(e),"iterate",cn),Reflect.get(e,"size",e)}function Ro(e,t=!1){!t&&!Ve(e)&&!dn(e)&&(e=X(e));const n=X(this);return Er(n).has.call(n,e)||(n.add(e),bt(n,"add",e,e)),this}function Ao(e,t,n=!1){!n&&!Ve(t)&&!dn(t)&&(t=X(t));const s=X(this),{has:r,get:i}=Er(s);let o=r.call(s,e);o||(e=X(e),o=r.call(s,e));const a=i.call(s,e);return s.set(e,t),o?Kt(t,a)&&bt(s,"set",e,t):bt(s,"add",e,t),this}function Po(e){const t=X(this),{has:n,get:s}=Er(t);let r=n.call(t,e);r||(e=X(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&bt(t,"delete",e,void 0),i}function Oo(){const e=X(this),t=e.size!==0,n=e.clear();return t&&bt(e,"clear",void 0,void 0),n}function Fs(e,t){return function(s,r){const i=this,o=i.__v_raw,a=X(o),c=t?Ki:e?Yi:we;return!e&&Ie(a,"iterate",cn),o.forEach((l,u)=>s.call(r,c(l),c(u),i))}}function Bs(e,t,n){return function(...s){const r=this.__v_raw,i=X(r),o=An(i),a=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...s),u=n?Ki:t?Yi:we;return!t&&Ie(i,"iterate",c?ui:cn),{next(){const{value:d,done:p}=l.next();return p?{value:d,done:p}:{value:a?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Pt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Df(){const e={get(i){return Ms(this,i)},get size(){return Us(this)},has:xs,add:Ro,set:Ao,delete:Po,clear:Oo,forEach:Fs(!1,!1)},t={get(i){return Ms(this,i,!1,!0)},get size(){return Us(this)},has:xs,add(i){return Ro.call(this,i,!0)},set(i,o){return Ao.call(this,i,o,!0)},delete:Po,clear:Oo,forEach:Fs(!1,!0)},n={get(i){return Ms(this,i,!0)},get size(){return Us(this,!0)},has(i){return xs.call(this,i,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Fs(!0,!1)},s={get(i){return Ms(this,i,!0,!0)},get size(){return Us(this,!0)},has(i){return xs.call(this,i,!0)},add:Pt("add"),set:Pt("set"),delete:Pt("delete"),clear:Pt("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Bs(i,!1,!1),n[i]=Bs(i,!0,!1),t[i]=Bs(i,!1,!0),s[i]=Bs(i,!0,!0)}),[e,n,t,s]}const[Lf,Mf,xf,Uf]=Df();function zi(e,t){const n=t?e?Uf:xf:e?Mf:Lf;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(te(n,r)&&r in s?n:s,r,i)}const Ff={get:zi(!1,!1)},Bf={get:zi(!1,!0)},$f={get:zi(!0,!1)};const Nc=new WeakMap,Dc=new WeakMap,Lc=new WeakMap,Vf=new WeakMap;function Hf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jf(e){return e.__v_skip||!Object.isExtensible(e)?0:Hf(ff(e))}function Es(e){return dn(e)?e:Gi(e,!1,Of,Ff,Nc)}function Mc(e){return Gi(e,!1,Nf,Bf,Dc)}function xc(e){return Gi(e,!0,kf,$f,Lc)}function Gi(e,t,n,s,r){if(!ie(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=jf(e);if(o===0)return e;const a=new Proxy(e,o===2?s:n);return r.set(e,a),a}function Ht(e){return dn(e)?Ht(e.__v_raw):!!(e&&e.__v_isReactive)}function dn(e){return!!(e&&e.__v_isReadonly)}function Ve(e){return!!(e&&e.__v_isShallow)}function qi(e){return e?!!e.__v_raw:!1}function X(e){const t=e&&e.__v_raw;return t?X(t):e}function Ji(e){return!te(e,"__v_skip")&&Object.isExtensible(e)&&pc(e,"__v_skip",!0),e}const we=e=>ie(e)?Es(e):e,Yi=e=>ie(e)?xc(e):e;function he(e){return e?e.__v_isRef===!0:!1}function wr(e){return Uc(e,!1)}function Wf(e){return Uc(e,!0)}function Uc(e,t){return he(e)?e:new Kf(e,t)}class Kf{constructor(t,n){this.dep=new yr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:X(t),this._value=n?t:we(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||Ve(t)||dn(t);t=s?t:X(t),Kt(t,n)&&(this._rawValue=t,this._value=s?t:we(t),this.dep.trigger())}}function ln(e){return he(e)?e.value:e}const zf={get:(e,t,n)=>t==="__v_raw"?e:ln(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return he(r)&&!he(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Fc(e){return Ht(e)?e:new Proxy(e,zf)}class Gf{constructor(t){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new yr,{get:s,set:r}=t(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=r}get value(){return this._value=this._get()}set value(t){this._set(t)}}function Jy(e){return new Gf(e)}function qf(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=Bc(e,n);return t}class Jf{constructor(t,n,s){this._object=t,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Tf(X(this._object),this._key)}}class Yf{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Yy(e,t,n){return he(e)?e:z(e)?new Yf(e):ie(e)&&arguments.length>1?Bc(e,t,n):wr(e)}function Bc(e,t,n){const s=e[t];return he(s)?s:new Jf(e,t,n)}class Xf{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new yr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=os-1,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){this.flags|=16,ae!==this&&this.dep.notify()}get value(){const t=this.dep.track();return Cc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qf(e,t,n=!1){let s,r;return z(e)?s=e:(s=e.get,r=e.set),new Xf(s,r,n)}const $s={},tr=new WeakMap;let rn;function Zf(e,t=!1,n=rn){if(n){let s=tr.get(n);s||tr.set(n,s=[]),s.push(e)}}function ed(e,t,n=le){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,l=P=>r?P:Ve(P)||r===!1||r===0?gt(P,1):gt(P);let u,d,p,g,w=!1,A=!1;if(he(e)?(d=()=>e.value,w=Ve(e)):Ht(e)?(d=()=>l(e),w=!0):F(e)?(A=!0,w=e.some(P=>Ht(P)||Ve(P)),d=()=>e.map(P=>{if(he(P))return P.value;if(Ht(P))return l(P);if(z(P))return c?c(P,2):P()})):z(e)?t?d=c?()=>c(e,2):e:d=()=>{if(p){Jt();try{p()}finally{Yt()}}const P=rn;rn=u;try{return c?c(e,3,[g]):e(g)}finally{rn=P}}:d=it,t&&r){const P=d,V=r===!0?1/0:r;d=()=>gt(P(),V)}const B=Ec(),M=()=>{u.stop(),B&&Fi(B.effects,u)};if(i)if(t){const P=t;t=(...V)=>{P(...V),M()}}else{const P=d;d=()=>{P(),M()}}let D=A?new Array(e.length).fill($s):$s;const L=P=>{if(!(!(u.flags&1)||!u.dirty&&!P))if(t){const V=u.run();if(r||w||(A?V.some((Z,q)=>Kt(Z,D[q])):Kt(V,D))){p&&p();const Z=rn;rn=u;try{const q=[V,D===$s?void 0:A&&D[0]===$s?[]:D,g];c?c(t,3,q):t(...q),D=V}finally{rn=Z}}}else u.run()};return a&&a(L),u=new wc(d),u.scheduler=o?()=>o(L,!1):L,g=P=>Zf(P,!1,u),p=u.onStop=()=>{const P=tr.get(u);if(P){if(c)c(P,4);else for(const V of P)V();tr.delete(u)}},t?s?L(!0):D=u.run():o?o(L.bind(null,!0),!0):u.run(),M.pause=u.pause.bind(u),M.resume=u.resume.bind(u),M.stop=M,M}function gt(e,t=1/0,n){if(t<=0||!ie(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,he(e))gt(e.value,t,n);else if(F(e))for(let s=0;s<e.length;s++)gt(e[s],t,n);else if(Vn(e)||An(e))e.forEach(s=>{gt(s,t,n)});else if(hc(e)){for(const s in e)gt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&gt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e,t,n,s){try{return s?e(...s):e()}catch(r){Ir(r,t,n)}}function Ye(e,t,n,s){if(z(e)){const r=ws(e,t,n,s);return r&&fc(r)&&r.catch(i=>{Ir(i,t,n)}),r}if(F(e)){const r=[];for(let i=0;i<e.length;i++)r.push(Ye(e[i],t,n,s));return r}}function Ir(e,t,n,s=!0){const r=t?t.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||le;if(t){let a=t.parent;const c=t.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,c,l)===!1)return}a=a.parent}if(i){Jt(),ws(i,null,10,[e,c,l]),Yt();return}}td(e,n,r,s,o)}function td(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}let cs=!1,fi=!1;const Ce=[];let nt=0;const Pn=[];let Mt=null,In=0;const $c=Promise.resolve();let Xi=null;function Is(e){const t=Xi||$c;return e?t.then(this?e.bind(this):e):t}function nd(e){let t=cs?nt+1:0,n=Ce.length;for(;t<n;){const s=t+n>>>1,r=Ce[s],i=ls(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function Qi(e){if(!(e.flags&1)){const t=ls(e),n=Ce[Ce.length-1];!n||!(e.flags&2)&&t>=ls(n)?Ce.push(e):Ce.splice(nd(t),0,e),e.flags|=1,Vc()}}function Vc(){!cs&&!fi&&(fi=!0,Xi=$c.then(jc))}function sd(e){F(e)?Pn.push(...e):Mt&&e.id===-1?Mt.splice(In+1,0,e):e.flags&1||(Pn.push(e),e.flags|=1),Vc()}function ko(e,t,n=cs?nt+1:0){for(;n<Ce.length;n++){const s=Ce[n];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ce.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&=-2}}}function Hc(e){if(Pn.length){const t=[...new Set(Pn)].sort((n,s)=>ls(n)-ls(s));if(Pn.length=0,Mt){Mt.push(...t);return}for(Mt=t,In=0;In<Mt.length;In++){const n=Mt[In];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mt=null,In=0}}const ls=e=>e.id==null?e.flags&2?-1:1/0:e.id;function jc(e){fi=!1,cs=!0;try{for(nt=0;nt<Ce.length;nt++){const t=Ce[nt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ws(t,t.i,t.i?15:14),t.flags&=-2)}}finally{for(;nt<Ce.length;nt++){const t=Ce[nt];t&&(t.flags&=-2)}nt=0,Ce.length=0,Hc(),cs=!1,Xi=null,(Ce.length||Pn.length)&&jc()}}let ve=null,Wc=null;function nr(e){const t=ve;return ve=e,Wc=e&&e.type.__scopeId||null,t}function Ts(e,t=ve,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&Vo(-1);const i=nr(t);let o;try{o=e(...r)}finally{nr(i),s._d&&Vo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Xy(e,t){if(ve===null)return e;const n=kr(ve),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[i,o,a,c=le]=t[r];i&&(z(i)&&(i={mounted:i,updated:i}),i.deep&&gt(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return e}function tn(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Jt(),Ye(c,n,8,[e.el,a,e,t]),Yt())}}const rd=Symbol("_vte"),id=e=>e.__isTeleport,En=Symbol("_leaveCb"),Vs=Symbol("_enterCb");function od(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zi(()=>{e.isMounted=!0}),Xc(()=>{e.isUnmounting=!0}),e}const Fe=[Function,Array],ad={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe};function cd(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function di(e,t,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:l,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:w,onLeaveCancelled:A,onBeforeAppear:B,onAppear:M,onAfterAppear:D,onAppearCancelled:L}=t,P=String(e.key),V=cd(n,e),Z=(S,K)=>{S&&Ye(S,s,9,K)},q=(S,K)=>{const Q=K[1];Z(S,K),F(S)?S.every(N=>N.length<=1)&&Q():S.length<=1&&Q()},W={mode:o,persisted:a,beforeEnter(S){let K=c;if(!n.isMounted)if(i)K=B||c;else return;S[En]&&S[En](!0);const Q=V[P];Q&&Tn(e,Q)&&Q.el[En]&&Q.el[En](),Z(K,[S])},enter(S){let K=l,Q=u,N=d;if(!n.isMounted)if(i)K=M||l,Q=D||u,N=L||d;else return;let J=!1;const ge=S[Vs]=Pe=>{J||(J=!0,Pe?Z(N,[S]):Z(Q,[S]),W.delayedLeave&&W.delayedLeave(),S[Vs]=void 0)};K?q(K,[S,ge]):ge()},leave(S,K){const Q=String(e.key);if(S[Vs]&&S[Vs](!0),n.isUnmounting)return K();Z(p,[S]);let N=!1;const J=S[En]=ge=>{N||(N=!0,K(),ge?Z(A,[S]):Z(w,[S]),S[En]=void 0,V[Q]===e&&delete V[Q])};V[Q]=e,g?q(g,[S,J]):J()},clone(S){return di(S,t,n,s)}};return W}function us(e,t){e.shapeFlag&6&&e.component?(e.transition=t,us(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Kc(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===_e?(o.patchFlag&128&&r++,s=s.concat(Kc(o.children,t,a))):(t||o.type!==It)&&s.push(a!=null?hn(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Ct(e,t){return z(e)?me({name:e.name},t,{setup:e}):e}function zc(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function hi(e,t,n,s,r=!1){if(F(e)){e.forEach((w,A)=>hi(w,t&&(F(t)?t[A]:t),n,s,r));return}if(On(s)&&!r)return;const i=s.shapeFlag&4?kr(s.component):s.el,o=r?null:i,{i:a,r:c}=e,l=t&&t.r,u=a.refs===le?a.refs={}:a.refs,d=a.setupState,p=X(d),g=d===le?()=>!1:w=>te(p,w);if(l!=null&&l!==c&&(pe(l)?(u[l]=null,g(l)&&(d[l]=null)):he(l)&&(l.value=null)),z(c))ws(c,a,12,[o,u]);else{const w=pe(c),A=he(c);if(w||A){const B=()=>{if(e.f){const M=w?g(c)?d[c]:u[c]:c.value;r?F(M)&&Fi(M,i):F(M)?M.includes(i)||M.push(i):w?(u[c]=[i],g(c)&&(d[c]=u[c])):(c.value=[i],e.k&&(u[e.k]=c.value))}else w?(u[c]=o,g(c)&&(d[c]=o)):A&&(c.value=o,e.k&&(u[e.k]=o))};o?(B.id=-1,De(B,n)):B()}}}const On=e=>!!e.type.__asyncLoader,Gc=e=>e.type.__isKeepAlive;function ld(e,t){qc(e,"a",t)}function ud(e,t){qc(e,"da",t)}function qc(e,t,n=ye){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Tr(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Gc(r.parent.vnode)&&fd(s,t,n,r),r=r.parent}}function fd(e,t,n,s){const r=Tr(t,e,s,!0);eo(()=>{Fi(s[t],r)},n)}function Tr(e,t,n=ye,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{Jt();const a=Ss(n),c=Ye(t,n,e,o);return a(),Yt(),c});return s?r.unshift(i):r.push(i),i}}const Rt=e=>(t,n=ye)=>{(!Or||e==="sp")&&Tr(e,(...s)=>t(...s),n)},Jc=Rt("bm"),Zi=Rt("m"),dd=Rt("bu"),Yc=Rt("u"),Xc=Rt("bum"),eo=Rt("um"),hd=Rt("sp"),pd=Rt("rtg"),gd=Rt("rtc");function md(e,t=ye){Tr("ec",e,t)}const Qc="components";function kn(e,t){return el(Qc,e,!0,t)||e}const Zc=Symbol.for("v-ndc");function to(e){return pe(e)?el(Qc,e,!1)||e:e||Zc}function el(e,t,n=!0,s=!1){const r=ve||ye;if(r){const i=r.type;{const a=ih(i,!1);if(a&&(a===t||a===Je(t)||a===_r(Je(t))))return i}const o=No(r[e]||i[e],t)||No(r.appContext[e],t);return!o&&s?i:o}}function No(e,t){return e&&(e[t]||e[Je(t)]||e[_r(Je(t))])}function Do(e,t,n,s){let r;const i=n,o=F(e);if(o||pe(e)){const a=o&&Ht(e);let c=!1;a&&(c=!Ve(e),e=br(e)),r=new Array(e.length);for(let l=0,u=e.length;l<u;l++)r[l]=t(c?we(e[l]):e[l],l,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,i)}else if(ie(e))if(e[Symbol.iterator])r=Array.from(e,(a,c)=>t(a,c,void 0,i));else{const a=Object.keys(e);r=new Array(a.length);for(let c=0,l=a.length;c<l;c++){const u=a[c];r[c]=t(e[u],u,c,i)}}else r=[];return r}function vd(e,t,n={},s,r){if(ve.ce||ve.parent&&On(ve.parent)&&ve.parent.ce)return de(),Ke(_e,null,[be("slot",n,s)],64);let i=e[t];i&&i._c&&(i._d=!1),de();const o=i&&tl(i(n)),a=Ke(_e,{key:(n.key||o&&o.key||`_${t}`)+(!o&&s?"_fb":"")},o||[],o&&e._===1?64:-2);return a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function tl(e){return e.some(t=>rr(t)?!(t.type===It||t.type===_e&&!tl(t.children)):!0)?e:null}function _d(e,t){const n={};for(const s in e)n[js(s)]=e[s];return n}const pi=e=>e?bl(e)?kr(e):pi(e.parent):null,Qn=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pi(e.parent),$root:e=>pi(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>no(e),$forceUpdate:e=>e.f||(e.f=()=>{Qi(e.update)}),$nextTick:e=>e.n||(e.n=Is.bind(e.proxy)),$watch:e=>Vd.bind(e)}),Wr=(e,t)=>e!==le&&!e.__isScriptSetup&&te(e,t),yd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(Wr(s,t))return o[t]=1,s[t];if(r!==le&&te(r,t))return o[t]=2,r[t];if((l=e.propsOptions[0])&&te(l,t))return o[t]=3,i[t];if(n!==le&&te(n,t))return o[t]=4,n[t];gi&&(o[t]=0)}}const u=Qn[t];let d,p;if(u)return t==="$attrs"&&Ie(e.attrs,"get",""),u(e);if((d=a.__cssModules)&&(d=d[t]))return d;if(n!==le&&te(n,t))return o[t]=4,n[t];if(p=c.config.globalProperties,te(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return Wr(r,t)?(r[t]=n,!0):s!==le&&te(s,t)?(s[t]=n,!0):te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==le&&te(e,o)||Wr(t,o)||(a=i[0])&&te(a,o)||te(s,o)||te(Qn,o)||te(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Lo(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let gi=!0;function bd(e){const t=no(e),n=e.proxy,s=e.ctx;gi=!1,t.beforeCreate&&Mo(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:d,mounted:p,beforeUpdate:g,updated:w,activated:A,deactivated:B,beforeDestroy:M,beforeUnmount:D,destroyed:L,unmounted:P,render:V,renderTracked:Z,renderTriggered:q,errorCaptured:W,serverPrefetch:S,expose:K,inheritAttrs:Q,components:N,directives:J,filters:ge}=t;if(l&&Ed(l,s,null),o)for(const G in o){const ee=o[G];z(ee)&&(s[G]=ee.bind(n))}if(r){const G=r.call(n,n);ie(G)&&(e.data=Es(G))}if(gi=!0,i)for(const G in i){const ee=i[G],ut=z(ee)?ee.bind(n,n):z(ee.get)?ee.get.bind(n,n):it,At=!z(ee)&&z(ee.set)?ee.set.bind(n):it,Ze=Be({get:ut,set:At});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>Ze.value,set:Ae=>Ze.value=Ae})}if(a)for(const G in a)nl(a[G],s,n,G);if(c){const G=z(c)?c.call(n):c;Reflect.ownKeys(G).forEach(ee=>{Ks(ee,G[ee])})}u&&Mo(u,e,"c");function oe(G,ee){F(ee)?ee.forEach(ut=>G(ut.bind(n))):ee&&G(ee.bind(n))}if(oe(Jc,d),oe(Zi,p),oe(dd,g),oe(Yc,w),oe(ld,A),oe(ud,B),oe(md,W),oe(gd,Z),oe(pd,q),oe(Xc,D),oe(eo,P),oe(hd,S),F(K))if(K.length){const G=e.exposed||(e.exposed={});K.forEach(ee=>{Object.defineProperty(G,ee,{get:()=>n[ee],set:ut=>n[ee]=ut})})}else e.exposed||(e.exposed={});V&&e.render===it&&(e.render=V),Q!=null&&(e.inheritAttrs=Q),N&&(e.components=N),J&&(e.directives=J),S&&zc(e)}function Ed(e,t,n=it){F(e)&&(e=mi(e));for(const s in e){const r=e[s];let i;ie(r)?"default"in r?i=qe(r.from||s,r.default,!0):i=qe(r.from||s):i=qe(r),he(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Mo(e,t,n){Ye(F(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function nl(e,t,n,s){let r=s.includes(".")?gl(n,s):()=>n[s];if(pe(e)){const i=t[e];z(i)&&Zn(r,i)}else if(z(e))Zn(r,e.bind(n));else if(ie(e))if(F(e))e.forEach(i=>nl(i,t,n,s));else{const i=z(e.handler)?e.handler.bind(n):t[e.handler];z(i)&&Zn(r,i,e)}}function no(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let c;return a?c=a:!r.length&&!n&&!s?c=t:(c={},r.length&&r.forEach(l=>sr(c,l,o,!0)),sr(c,t,o)),ie(t)&&i.set(t,c),c}function sr(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&sr(e,i,n,!0),r&&r.forEach(o=>sr(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=wd[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const wd={data:xo,props:Uo,emits:Uo,methods:Gn,computed:Gn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Gn,directives:Gn,watch:Td,provide:xo,inject:Id};function xo(e,t){return t?e?function(){return me(z(e)?e.call(this,this):e,z(t)?t.call(this,this):t)}:t:e}function Id(e,t){return Gn(mi(e),mi(t))}function mi(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Te(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?me(Object.create(null),e,t):t}function Uo(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:me(Object.create(null),Lo(e),Lo(t??{})):t}function Td(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const s in t)n[s]=Te(e[s],t[s]);return n}function sl(){return{app:null,config:{isNativeTag:lf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Sd=0;function Cd(e,t){return function(s,r=null){z(s)||(s=me({},s)),r!=null&&!ie(r)&&(r=null);const i=sl(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:Sd++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:ah,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...d)):z(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,p){if(!c){const g=l._ceVNode||be(s,r);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),d&&t?t(g,u):e(g,u,p),c=!0,l._container=u,u.__vue_app__=l,kr(g.component)}},onUnmount(u){a.push(u)},unmount(){c&&(Ye(a,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l},runWithContext(u){const d=un;un=l;try{return u()}finally{un=d}}};return l}}let un=null;function Ks(e,t){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[e]=t}}function qe(e,t,n=!1){const s=ye||ve;if(s||un){const r=un?un._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&z(t)?t.call(s&&s.proxy):t}}function Rd(){return!!(ye||ve||un)}const rl={},il=()=>Object.create(rl),ol=e=>Object.getPrototypeOf(e)===rl;function Ad(e,t,n,s=!1){const r={},i=il();e.propsDefaults=Object.create(null),al(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:Mc(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Pd(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,a=X(r),[c]=e.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(Cr(e.emitsOptions,p))continue;const g=t[p];if(c)if(te(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const w=Je(p);r[w]=vi(c,a,w,g,e,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{al(e,t,r,i)&&(l=!0);let u;for(const d in a)(!t||!te(t,d)&&((u=qt(d))===d||!te(t,u)))&&(c?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=vi(c,a,d,void 0,e,!0)):delete r[d]);if(i!==a)for(const d in i)(!t||!te(t,d))&&(delete i[d],l=!0)}l&&bt(e.attrs,"set","")}function al(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,a;if(t)for(let c in t){if(Yn(c))continue;const l=t[c];let u;r&&te(r,u=Je(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Cr(e.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=X(n),l=a||le;for(let u=0;u<i.length;u++){const d=i[u];n[d]=vi(r,c,d,l[d],e,!te(l,d))}}return o}function vi(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=te(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&z(c)){const{propsDefaults:l}=r;if(n in l)s=l[n];else{const u=Ss(r);s=l[n]=c.call(null,t),u()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===qt(n))&&(s=!0))}return s}const Od=new WeakMap;function cl(e,t,n=!1){const s=n?Od:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let c=!1;if(!z(e)){const u=d=>{c=!0;const[p,g]=cl(d,t,!0);me(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return ie(e)&&s.set(e,Rn),Rn;if(F(i))for(let u=0;u<i.length;u++){const d=Je(i[u]);Fo(d)&&(o[d]=le)}else if(i)for(const u in i){const d=Je(u);if(Fo(d)){const p=i[u],g=o[d]=F(p)||z(p)?{type:p}:me({},p),w=g.type;let A=!1,B=!0;if(F(w))for(let M=0;M<w.length;++M){const D=w[M],L=z(D)&&D.name;if(L==="Boolean"){A=!0;break}else L==="String"&&(B=!1)}else A=z(w)&&w.name==="Boolean";g[0]=A,g[1]=B,(A||te(g,"default"))&&a.push(d)}}const l=[o,a];return ie(e)&&s.set(e,l),l}function Fo(e){return e[0]!=="$"&&!Yn(e)}const ll=e=>e[0]==="_"||e==="$stable",so=e=>F(e)?e.map(st):[st(e)],kd=(e,t,n)=>{if(t._n)return t;const s=Ts((...r)=>so(t(...r)),n);return s._c=!1,s},ul=(e,t,n)=>{const s=e._ctx;for(const r in e){if(ll(r))continue;const i=e[r];if(z(i))t[r]=kd(r,i,s);else if(i!=null){const o=so(i);t[r]=()=>o}}},fl=(e,t)=>{const n=so(t);e.slots.default=()=>n},dl=(e,t,n)=>{for(const s in t)(n||s!=="_")&&(e[s]=t[s])},Nd=(e,t,n)=>{const s=e.slots=il();if(e.vnode.shapeFlag&32){const r=t._;r?(dl(s,t,n),n&&pc(s,"_",r,!0)):ul(t,s)}else t&&fl(e,t)},Dd=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=le;if(s.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:dl(r,t,n):(i=!t.$stable,ul(t,r)),o=t}else t&&(fl(e,t),o={default:1});if(i)for(const a in r)!ll(a)&&o[a]==null&&delete r[a]},De=qd;function Ld(e){return Md(e)}function Md(e,t){const n=gc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:d,nextSibling:p,setScopeId:g=it,insertStaticContent:w}=e,A=(f,h,m,y=null,v=null,b=null,C=void 0,T=null,I=!!h.dynamicChildren)=>{if(f===h)return;f&&!Tn(f,h)&&(y=_(f),Ae(f,v,b,!0),f=null),h.patchFlag===-2&&(I=!1,h.dynamicChildren=null);const{type:E,ref:$,shapeFlag:O}=h;switch(E){case Rr:B(f,h,m,y);break;case It:M(f,h,m,y);break;case es:f==null&&D(h,m,y,C);break;case _e:N(f,h,m,y,v,b,C,T,I);break;default:O&1?V(f,h,m,y,v,b,C,T,I):O&6?J(f,h,m,y,v,b,C,T,I):(O&64||O&128)&&E.process(f,h,m,y,v,b,C,T,I,x)}$!=null&&v&&hi($,f&&f.ref,b,h||f,!h)},B=(f,h,m,y)=>{if(f==null)s(h.el=a(h.children),m,y);else{const v=h.el=f.el;h.children!==f.children&&l(v,h.children)}},M=(f,h,m,y)=>{f==null?s(h.el=c(h.children||""),m,y):h.el=f.el},D=(f,h,m,y)=>{[f.el,f.anchor]=w(f.children,h,m,y,f.el,f.anchor)},L=({el:f,anchor:h},m,y)=>{let v;for(;f&&f!==h;)v=p(f),s(f,m,y),f=v;s(h,m,y)},P=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),r(f),f=m;r(h)},V=(f,h,m,y,v,b,C,T,I)=>{h.type==="svg"?C="svg":h.type==="math"&&(C="mathml"),f==null?Z(h,m,y,v,b,C,T,I):S(f,h,v,b,C,T,I)},Z=(f,h,m,y,v,b,C,T)=>{let I,E;const{props:$,shapeFlag:O,transition:U,dirs:j}=f;if(I=f.el=o(f.type,b,$&&$.is,$),O&8?u(I,f.children):O&16&&W(f.children,I,null,y,v,Kr(f,b),C,T),j&&tn(f,null,y,"created"),q(I,f,f.scopeId,C,y),$){for(const ue in $)ue!=="value"&&!Yn(ue)&&i(I,ue,null,$[ue],b,y);"value"in $&&i(I,"value",null,$.value,b),(E=$.onVnodeBeforeMount)&&tt(E,y,f)}j&&tn(f,null,y,"beforeMount");const Y=xd(v,U);Y&&U.beforeEnter(I),s(I,h,m),((E=$&&$.onVnodeMounted)||Y||j)&&De(()=>{E&&tt(E,y,f),Y&&U.enter(I),j&&tn(f,null,y,"mounted")},v)},q=(f,h,m,y,v)=>{if(m&&g(f,m),y)for(let b=0;b<y.length;b++)g(f,y[b]);if(v){let b=v.subTree;if(h===b||vl(b.type)&&(b.ssContent===h||b.ssFallback===h)){const C=v.vnode;q(f,C,C.scopeId,C.slotScopeIds,v.parent)}}},W=(f,h,m,y,v,b,C,T,I=0)=>{for(let E=I;E<f.length;E++){const $=f[E]=T?xt(f[E]):st(f[E]);A(null,$,h,m,y,v,b,C,T)}},S=(f,h,m,y,v,b,C)=>{const T=h.el=f.el;let{patchFlag:I,dynamicChildren:E,dirs:$}=h;I|=f.patchFlag&16;const O=f.props||le,U=h.props||le;let j;if(m&&nn(m,!1),(j=U.onVnodeBeforeUpdate)&&tt(j,m,h,f),$&&tn(h,f,m,"beforeUpdate"),m&&nn(m,!0),(O.innerHTML&&U.innerHTML==null||O.textContent&&U.textContent==null)&&u(T,""),E?K(f.dynamicChildren,E,T,m,y,Kr(h,v),b):C||ee(f,h,T,null,m,y,Kr(h,v),b,!1),I>0){if(I&16)Q(T,O,U,m,v);else if(I&2&&O.class!==U.class&&i(T,"class",null,U.class,v),I&4&&i(T,"style",O.style,U.style,v),I&8){const Y=h.dynamicProps;for(let ue=0;ue<Y.length;ue++){const se=Y[ue],Oe=O[se],Ee=U[se];(Ee!==Oe||se==="value")&&i(T,se,Oe,Ee,v,m)}}I&1&&f.children!==h.children&&u(T,h.children)}else!C&&E==null&&Q(T,O,U,m,v);((j=U.onVnodeUpdated)||$)&&De(()=>{j&&tt(j,m,h,f),$&&tn(h,f,m,"updated")},y)},K=(f,h,m,y,v,b,C)=>{for(let T=0;T<h.length;T++){const I=f[T],E=h[T],$=I.el&&(I.type===_e||!Tn(I,E)||I.shapeFlag&70)?d(I.el):m;A(I,E,$,null,y,v,b,C,!0)}},Q=(f,h,m,y,v)=>{if(h!==m){if(h!==le)for(const b in h)!Yn(b)&&!(b in m)&&i(f,b,h[b],null,v,y);for(const b in m){if(Yn(b))continue;const C=m[b],T=h[b];C!==T&&b!=="value"&&i(f,b,T,C,v,y)}"value"in m&&i(f,"value",h.value,m.value,v)}},N=(f,h,m,y,v,b,C,T,I)=>{const E=h.el=f?f.el:a(""),$=h.anchor=f?f.anchor:a("");let{patchFlag:O,dynamicChildren:U,slotScopeIds:j}=h;j&&(T=T?T.concat(j):j),f==null?(s(E,m,y),s($,m,y),W(h.children||[],m,$,v,b,C,T,I)):O>0&&O&64&&U&&f.dynamicChildren?(K(f.dynamicChildren,U,m,v,b,C,T),(h.key!=null||v&&h===v.subTree)&&hl(f,h,!0)):ee(f,h,m,$,v,b,C,T,I)},J=(f,h,m,y,v,b,C,T,I)=>{h.slotScopeIds=T,f==null?h.shapeFlag&512?v.ctx.activate(h,m,y,C,I):ge(h,m,y,v,b,C,I):Pe(f,h,I)},ge=(f,h,m,y,v,b,C)=>{const T=f.component=eh(f,y,v);if(Gc(f)&&(T.ctx.renderer=x),th(T,!1,C),T.asyncDep){if(v&&v.registerDep(T,oe,C),!f.el){const I=T.subTree=be(It);M(null,I,h,m)}}else oe(T,f,h,m,v,b,C)},Pe=(f,h,m)=>{const y=h.component=f.component;if(zd(f,h,m))if(y.asyncDep&&!y.asyncResolved){G(y,h,m);return}else y.next=h,y.update();else h.el=f.el,y.vnode=h},oe=(f,h,m,y,v,b,C)=>{const T=()=>{if(f.isMounted){let{next:O,bu:U,u:j,parent:Y,vnode:ue}=f;{const ke=pl(f);if(ke){O&&(O.el=ue.el,G(f,O,C)),ke.asyncDep.then(()=>{f.isUnmounted||T()});return}}let se=O,Oe;nn(f,!1),O?(O.el=ue.el,G(f,O,C)):O=ue,U&&Ws(U),(Oe=O.props&&O.props.onVnodeBeforeUpdate)&&tt(Oe,Y,O,ue),nn(f,!0);const Ee=zr(f),je=f.subTree;f.subTree=Ee,A(je,Ee,d(je.el),_(je),f,v,b),O.el=Ee.el,se===null&&Gd(f,Ee.el),j&&De(j,v),(Oe=O.props&&O.props.onVnodeUpdated)&&De(()=>tt(Oe,Y,O,ue),v)}else{let O;const{el:U,props:j}=h,{bm:Y,m:ue,parent:se,root:Oe,type:Ee}=f,je=On(h);if(nn(f,!1),Y&&Ws(Y),!je&&(O=j&&j.onVnodeBeforeMount)&&tt(O,se,h),nn(f,!0),U&&fe){const ke=()=>{f.subTree=zr(f),fe(U,f.subTree,f,v,null)};je&&Ee.__asyncHydrate?Ee.__asyncHydrate(U,f,ke):ke()}else{Oe.ce&&Oe.ce._injectChildStyle(Ee);const ke=f.subTree=zr(f);A(null,ke,m,y,f,v,b),h.el=ke.el}if(ue&&De(ue,v),!je&&(O=j&&j.onVnodeMounted)){const ke=h;De(()=>tt(O,se,ke),v)}(h.shapeFlag&256||se&&On(se.vnode)&&se.vnode.shapeFlag&256)&&f.a&&De(f.a,v),f.isMounted=!0,h=m=y=null}};f.scope.on();const I=f.effect=new wc(T);f.scope.off();const E=f.update=I.run.bind(I),$=f.job=I.runIfDirty.bind(I);$.i=f,$.id=f.uid,I.scheduler=()=>Qi($),nn(f,!0),E()},G=(f,h,m)=>{h.component=f;const y=f.vnode.props;f.vnode=h,f.next=null,Pd(f,h.props,y,m),Dd(f,h.children,m),Jt(),ko(f),Yt()},ee=(f,h,m,y,v,b,C,T,I=!1)=>{const E=f&&f.children,$=f?f.shapeFlag:0,O=h.children,{patchFlag:U,shapeFlag:j}=h;if(U>0){if(U&128){At(E,O,m,y,v,b,C,T,I);return}else if(U&256){ut(E,O,m,y,v,b,C,T,I);return}}j&8?($&16&&Ue(E,v,b),O!==E&&u(m,O)):$&16?j&16?At(E,O,m,y,v,b,C,T,I):Ue(E,v,b,!0):($&8&&u(m,""),j&16&&W(O,m,y,v,b,C,T,I))},ut=(f,h,m,y,v,b,C,T,I)=>{f=f||Rn,h=h||Rn;const E=f.length,$=h.length,O=Math.min(E,$);let U;for(U=0;U<O;U++){const j=h[U]=I?xt(h[U]):st(h[U]);A(f[U],j,m,null,v,b,C,T,I)}E>$?Ue(f,v,b,!0,!1,O):W(h,m,y,v,b,C,T,I,O)},At=(f,h,m,y,v,b,C,T,I)=>{let E=0;const $=h.length;let O=f.length-1,U=$-1;for(;E<=O&&E<=U;){const j=f[E],Y=h[E]=I?xt(h[E]):st(h[E]);if(Tn(j,Y))A(j,Y,m,null,v,b,C,T,I);else break;E++}for(;E<=O&&E<=U;){const j=f[O],Y=h[U]=I?xt(h[U]):st(h[U]);if(Tn(j,Y))A(j,Y,m,null,v,b,C,T,I);else break;O--,U--}if(E>O){if(E<=U){const j=U+1,Y=j<$?h[j].el:y;for(;E<=U;)A(null,h[E]=I?xt(h[E]):st(h[E]),m,Y,v,b,C,T,I),E++}}else if(E>U)for(;E<=O;)Ae(f[E],v,b,!0),E++;else{const j=E,Y=E,ue=new Map;for(E=Y;E<=U;E++){const Ne=h[E]=I?xt(h[E]):st(h[E]);Ne.key!=null&&ue.set(Ne.key,E)}let se,Oe=0;const Ee=U-Y+1;let je=!1,ke=0;const jn=new Array(Ee);for(E=0;E<Ee;E++)jn[E]=0;for(E=j;E<=O;E++){const Ne=f[E];if(Oe>=Ee){Ae(Ne,v,b,!0);continue}let et;if(Ne.key!=null)et=ue.get(Ne.key);else for(se=Y;se<=U;se++)if(jn[se-Y]===0&&Tn(Ne,h[se])){et=se;break}et===void 0?Ae(Ne,v,b,!0):(jn[et-Y]=E+1,et>=ke?ke=et:je=!0,A(Ne,h[et],m,null,v,b,C,T,I),Oe++)}const Eo=je?Ud(jn):Rn;for(se=Eo.length-1,E=Ee-1;E>=0;E--){const Ne=Y+E,et=h[Ne],wo=Ne+1<$?h[Ne+1].el:y;jn[E]===0?A(null,et,m,wo,v,b,C,T,I):je&&(se<0||E!==Eo[se]?Ze(et,m,wo,2):se--)}}},Ze=(f,h,m,y,v=null)=>{const{el:b,type:C,transition:T,children:I,shapeFlag:E}=f;if(E&6){Ze(f.component.subTree,h,m,y);return}if(E&128){f.suspense.move(h,m,y);return}if(E&64){C.move(f,h,m,x);return}if(C===_e){s(b,h,m);for(let O=0;O<I.length;O++)Ze(I[O],h,m,y);s(f.anchor,h,m);return}if(C===es){L(f,h,m);return}if(y!==2&&E&1&&T)if(y===0)T.beforeEnter(b),s(b,h,m),De(()=>T.enter(b),v);else{const{leave:O,delayLeave:U,afterLeave:j}=T,Y=()=>s(b,h,m),ue=()=>{O(b,()=>{Y(),j&&j()})};U?U(b,Y,ue):ue()}else s(b,h,m)},Ae=(f,h,m,y=!1,v=!1)=>{const{type:b,props:C,ref:T,children:I,dynamicChildren:E,shapeFlag:$,patchFlag:O,dirs:U,cacheIndex:j}=f;if(O===-2&&(v=!1),T!=null&&hi(T,null,m,f,!0),j!=null&&(h.renderCache[j]=void 0),$&256){h.ctx.deactivate(f);return}const Y=$&1&&U,ue=!On(f);let se;if(ue&&(se=C&&C.onVnodeBeforeUnmount)&&tt(se,h,f),$&6)Ls(f.component,m,y);else{if($&128){f.suspense.unmount(m,y);return}Y&&tn(f,null,h,"beforeUnmount"),$&64?f.type.remove(f,h,m,x,y):E&&!E.hasOnce&&(b!==_e||O>0&&O&64)?Ue(E,h,m,!1,!0):(b===_e&&O&384||!v&&$&16)&&Ue(I,h,m),y&&_n(f)}(ue&&(se=C&&C.onVnodeUnmounted)||Y)&&De(()=>{se&&tt(se,h,f),Y&&tn(f,null,h,"unmounted")},m)},_n=f=>{const{type:h,el:m,anchor:y,transition:v}=f;if(h===_e){yn(m,y);return}if(h===es){P(f);return}const b=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:T}=v,I=()=>C(m,b);T?T(f.el,b,I):I()}else b()},yn=(f,h)=>{let m;for(;f!==h;)m=p(f),r(f),f=m;r(h)},Ls=(f,h,m)=>{const{bum:y,scope:v,job:b,subTree:C,um:T,m:I,a:E}=f;Bo(I),Bo(E),y&&Ws(y),v.stop(),b&&(b.flags|=8,Ae(C,f,h,m)),T&&De(T,h),De(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Ue=(f,h,m,y=!1,v=!1,b=0)=>{for(let C=b;C<f.length;C++)Ae(f[C],h,m,y,v)},_=f=>{if(f.shapeFlag&6)return _(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const h=p(f.anchor||f.el),m=h&&h[rd];return m?p(m):h};let k=!1;const R=(f,h,m)=>{f==null?h._vnode&&Ae(h._vnode,null,null,!0):A(h._vnode||null,f,h,null,null,null,m),h._vnode=f,k||(k=!0,ko(),Hc(),k=!1)},x={p:A,um:Ae,m:Ze,r:_n,mt:ge,mc:W,pc:ee,pbc:K,n:_,o:e};let ne,fe;return{render:R,hydrate:ne,createApp:Cd(R,ne)}}function Kr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nn({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function xd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function hl(e,t,n=!1){const s=e.children,r=t.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=xt(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&hl(o,a)),a.type===Rr&&(a.el=o.el)}}function Ud(e){const t=e.slice(),n=[0];let s,r,i,o,a;const c=e.length;for(s=0;s<c;s++){const l=e[s];if(l!==0){if(r=n[n.length-1],e[r]<l){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<l?i=a+1:o=a;l<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function pl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:pl(t)}function Bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Fd=Symbol.for("v-scx"),Bd=()=>qe(Fd);function Qy(e,t){return Sr(e,null,t)}function $d(e,t){return Sr(e,null,{flush:"post"})}function Zn(e,t,n){return Sr(e,t,n)}function Sr(e,t,n=le){const{immediate:s,deep:r,flush:i,once:o}=n,a=me({},n);let c;if(Or)if(i==="sync"){const p=Bd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!t||s)a.once=!0;else return{stop:it,resume:it,pause:it};const l=ye;a.call=(p,g,w)=>Ye(p,l,g,w);let u=!1;i==="post"?a.scheduler=p=>{De(p,l&&l.suspense)}:i!=="sync"&&(u=!0,a.scheduler=(p,g)=>{g?p():Qi(p)}),a.augmentJob=p=>{t&&(p.flags|=4),u&&(p.flags|=2,l&&(p.id=l.uid,p.i=l))};const d=ed(e,t,a);return c&&c.push(d),d}function Vd(e,t,n){const s=this.proxy,r=pe(e)?e.includes(".")?gl(s,e):()=>s[e]:e.bind(s,s);let i;z(t)?i=t:(i=t.handler,n=t);const o=Ss(this),a=Sr(r,i.bind(s),n);return o(),a}function gl(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Hd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Je(t)}Modifiers`]||e[`${qt(t)}Modifiers`];function jd(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||le;let r=n;const i=t.startsWith("update:"),o=i&&Hd(s,t.slice(7));o&&(o.trim&&(r=n.map(u=>pe(u)?u.trim():u)),o.number&&(r=n.map(Zs)));let a,c=s[a=js(t)]||s[a=js(Je(t))];!c&&i&&(c=s[a=js(qt(t))]),c&&Ye(c,e,6,r);const l=s[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Ye(l,e,6,r)}}function ml(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!z(e)){const c=l=>{const u=ml(l,t,!0);u&&(a=!0,me(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!a?(ie(e)&&s.set(e,null),null):(F(i)?i.forEach(c=>o[c]=null):me(o,i),ie(e)&&s.set(e,o),o)}function Cr(e,t){return!e||!mr(t)?!1:(t=t.slice(2).replace(/Once$/,""),te(e,t[0].toLowerCase()+t.slice(1))||te(e,qt(t))||te(e,t))}function zr(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:u,props:d,data:p,setupState:g,ctx:w,inheritAttrs:A}=e,B=nr(e);let M,D;try{if(n.shapeFlag&4){const P=r||s,V=P;M=st(l.call(V,P,u,d,g,p,w)),D=a}else{const P=t;M=st(P.length>1?P(d,{attrs:a,slots:o,emit:c}):P(d,null)),D=t.props?a:Wd(a)}}catch(P){ts.length=0,Ir(P,e,1),M=be(It)}let L=M;if(D&&A!==!1){const P=Object.keys(D),{shapeFlag:V}=L;P.length&&V&7&&(i&&P.some(Ui)&&(D=Kd(D,i)),L=hn(L,D,!1,!0))}return n.dirs&&(L=hn(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&us(L,n.transition),M=L,nr(B),M}const Wd=e=>{let t;for(const n in e)(n==="class"||n==="style"||mr(n))&&((t||(t={}))[n]=e[n]);return t},Kd=(e,t)=>{const n={};for(const s in e)(!Ui(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function zd(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:a,patchFlag:c}=t,l=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?$o(s,o,l):!!o;if(c&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!Cr(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?$o(s,o,l):!0:!!o;return!1}function $o(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Cr(n,i))return!0}return!1}function Gd({vnode:e,parent:t},n){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=n,t=t.parent;else break}}const vl=e=>e.__isSuspense;function qd(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):sd(e)}const _e=Symbol.for("v-fgt"),Rr=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),es=Symbol.for("v-stc"),ts=[];let xe=null;function de(e=!1){ts.push(xe=e?null:[])}function Jd(){ts.pop(),xe=ts[ts.length-1]||null}let fs=1;function Vo(e){fs+=e,e<0&&xe&&(xe.hasOnce=!0)}function _l(e){return e.dynamicChildren=fs>0?xe||Rn:null,Jd(),fs>0&&xe&&xe.push(e),e}function $e(e,t,n,s,r,i){return _l(mn(e,t,n,s,r,i,!0))}function Ke(e,t,n,s,r){return _l(be(e,t,n,s,r,!0))}function rr(e){return e?e.__v_isVNode===!0:!1}function Tn(e,t){return e.type===t.type&&e.key===t.key}const yl=({key:e})=>e??null,zs=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||he(e)||z(e)?{i:ve,r:e,k:t,f:!!n}:e:null);function mn(e,t=null,n=null,s=0,r=null,i=e===_e?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&yl(t),ref:t&&zs(t),scopeId:Wc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ve};return a?(ro(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=pe(n)?8:16),fs>0&&!o&&xe&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&xe.push(c),c}const be=Yd;function Yd(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Zc)&&(e=It),rr(e)){const a=hn(e,t,!0);return n&&ro(a,n),fs>0&&!i&&xe&&(a.shapeFlag&6?xe[xe.indexOf(e)]=a:xe.push(a)),a.patchFlag=-2,a}if(oh(e)&&(e=e.__vccOpts),t){t=Xd(t);let{class:a,style:c}=t;a&&!pe(a)&&(t.class=zt(a)),ie(c)&&(qi(c)&&!F(c)&&(c=me({},c)),t.style=bs(c))}const o=pe(e)?1:vl(e)?128:id(e)?64:ie(e)?4:z(e)?2:0;return mn(e,t,n,s,r,o,i,!0)}function Xd(e){return e?qi(e)||ol(e)?me({},e):e:null}function hn(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=e,l=t?Pr(r||{},t):r,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&yl(l),ref:t&&t.ref?n&&i?F(i)?i.concat(zs(t)):[i,zs(t)]:zs(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&hn(e.ssContent),ssFallback:e.ssFallback&&hn(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&s&&us(u,c.clone(u)),u}function Ar(e=" ",t=0){return be(Rr,null,e,t)}function Zy(e,t){const n=be(es,null,e);return n.staticCount=t,n}function Gr(e="",t=!1){return t?(de(),Ke(It,null,e)):be(It,null,e)}function st(e){return e==null||typeof e=="boolean"?be(It):F(e)?be(_e,null,e.slice()):typeof e=="object"?xt(e):be(Rr,null,String(e))}function xt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:hn(e)}function ro(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ro(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ol(t)?t._ctx=ve:r===3&&ve&&(ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else z(t)?(t={default:t,_ctx:ve},n=32):(t=String(t),s&64?(n=16,t=[Ar(t)]):n=8);e.children=t,e.shapeFlag|=n}function Pr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=zt([t.class,s.class]));else if(r==="style")t.style=bs([t.style,s.style]);else if(mr(r)){const i=t[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[r]=i?[].concat(i,o):o)}else r!==""&&(t[r]=s[r])}return t}function tt(e,t,n,s=null){Ye(e,t,7,[n,s])}const Qd=sl();let Zd=0;function eh(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||Qd,i={uid:Zd++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:cl(s,r),emitsOptions:ml(s,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=jd.bind(null,i),e.ce&&e.ce(i),i}let ye=null;const io=()=>ye||ve;let ir,_i;{const e=gc(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};ir=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),_i=t("__VUE_SSR_SETTERS__",n=>Or=n)}const Ss=e=>{const t=ye;return ir(e),e.scope.on(),()=>{e.scope.off(),ir(t)}},Ho=()=>{ye&&ye.scope.off(),ir(null)};function bl(e){return e.vnode.shapeFlag&4}let Or=!1;function th(e,t=!1,n=!1){t&&_i(t);const{props:s,children:r}=e.vnode,i=bl(e);Ad(e,s,i,t),Nd(e,r,n);const o=i?nh(e,t):void 0;return t&&_i(!1),o}function nh(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,yd);const{setup:s}=n;if(s){const r=e.setupContext=s.length>1?rh(e):null,i=Ss(e);Jt();const o=ws(s,e,0,[e.props,r]);if(Yt(),i(),fc(o)){if(On(e)||zc(e),o.then(Ho,Ho),t)return o.then(a=>{jo(e,a,t)}).catch(a=>{Ir(a,e,0)});e.asyncDep=o}else jo(e,o,t)}else El(e,t)}function jo(e,t,n){z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ie(t)&&(e.setupState=Fc(t)),El(e,n)}let Wo;function El(e,t,n){const s=e.type;if(!e.render){if(!t&&Wo&&!s.render){const r=s.template||no(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:c}=s,l=me(me({isCustomElement:i,delimiters:a},o),c);s.render=Wo(r,l)}}e.render=s.render||it}{const r=Ss(e);Jt();try{bd(e)}finally{Yt(),r()}}}const sh={get(e,t){return Ie(e,"get",""),e[t]}};function rh(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,sh),slots:e.slots,emit:e.emit,expose:t}}function kr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Fc(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}})):e.proxy}function ih(e,t=!0){return z(e)?e.displayName||e.name:e.name||t&&e.__name}function oh(e){return z(e)&&"__vccOpts"in e}const Be=(e,t)=>Qf(e,t,Or);function wl(e,t,n){const s=arguments.length;return s===2?ie(t)&&!F(t)?rr(t)?be(e,null,[t]):be(e,t):be(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&rr(n)&&(n=[n]),be(e,t,n))}const ah="3.5.4";/**
* @vue/runtime-dom v3.5.4
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yi;const Ko=typeof window<"u"&&window.trustedTypes;if(Ko)try{yi=Ko.createPolicy("vue",{createHTML:e=>e})}catch{}const Il=yi?e=>yi.createHTML(e):e=>e,ch="http://www.w3.org/2000/svg",lh="http://www.w3.org/1998/Math/MathML",pt=typeof document<"u"?document:null,zo=pt&&pt.createElement("template"),uh={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?pt.createElementNS(ch,e):t==="mathml"?pt.createElementNS(lh,e):n?pt.createElement(e,{is:n}):pt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>pt.createTextNode(e),createComment:e=>pt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{zo.innerHTML=Il(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const a=zo.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ot="transition",Kn="animation",xn=Symbol("_vtc"),Tl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},fh=me({},ad,Tl),sn=(e,t=[])=>{F(e)?e.forEach(n=>n(...t)):e&&e(...t)},Go=e=>e?F(e)?e.some(t=>t.length>1):e.length>1:!1;function dh(e){const t={};for(const N in e)N in Tl||(t[N]=e[N]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,w=hh(r),A=w&&w[0],B=w&&w[1],{onBeforeEnter:M,onEnter:D,onEnterCancelled:L,onLeave:P,onLeaveCancelled:V,onBeforeAppear:Z=M,onAppear:q=D,onAppearCancelled:W=L}=t,S=(N,J,ge)=>{Dt(N,J?u:a),Dt(N,J?l:o),ge&&ge()},K=(N,J)=>{N._isLeaving=!1,Dt(N,d),Dt(N,g),Dt(N,p),J&&J()},Q=N=>(J,ge)=>{const Pe=N?q:D,oe=()=>S(J,N,ge);sn(Pe,[J,oe]),qo(()=>{Dt(J,N?c:i),ht(J,N?u:a),Go(Pe)||Jo(J,s,A,oe)})};return me(t,{onBeforeEnter(N){sn(M,[N]),ht(N,i),ht(N,o)},onBeforeAppear(N){sn(Z,[N]),ht(N,c),ht(N,l)},onEnter:Q(!1),onAppear:Q(!0),onLeave(N,J){N._isLeaving=!0;const ge=()=>K(N,J);ht(N,d),ht(N,p),Cl(),qo(()=>{N._isLeaving&&(Dt(N,d),ht(N,g),Go(P)||Jo(N,s,B,ge))}),sn(P,[N,ge])},onEnterCancelled(N){S(N,!1),sn(L,[N])},onAppearCancelled(N){S(N,!0),sn(W,[N])},onLeaveCancelled(N){K(N),sn(V,[N])}})}function hh(e){if(e==null)return null;if(ie(e))return[qr(e.enter),qr(e.leave)];{const t=qr(e);return[t,t]}}function qr(e){return pf(e)}function ht(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[xn]||(e[xn]=new Set)).add(t)}function Dt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[xn];n&&(n.delete(t),n.size||(e[xn]=void 0))}function qo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let ph=0;function Jo(e,t,n,s){const r=e._endId=++ph,i=()=>{r===e._endId&&s()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=Sl(e,t);if(!o)return s();const l=o+"end";let u=0;const d=()=>{e.removeEventListener(l,p),i()},p=g=>{g.target===e&&++u>=c&&d()};setTimeout(()=>{u<c&&d()},a+1),e.addEventListener(l,p)}function Sl(e,t){const n=window.getComputedStyle(e),s=w=>(n[w]||"").split(", "),r=s(`${Ot}Delay`),i=s(`${Ot}Duration`),o=Yo(r,i),a=s(`${Kn}Delay`),c=s(`${Kn}Duration`),l=Yo(a,c);let u=null,d=0,p=0;t===Ot?o>0&&(u=Ot,d=o,p=i.length):t===Kn?l>0&&(u=Kn,d=l,p=c.length):(d=Math.max(o,l),u=d>0?o>l?Ot:Kn:null,p=u?u===Ot?i.length:c.length:0);const g=u===Ot&&/\b(transform|all)(,|$)/.test(s(`${Ot}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function Yo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Xo(n)+Xo(e[s])))}function Xo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Cl(){return document.body.offsetHeight}function gh(e,t,n){const s=e[xn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Qo=Symbol("_vod"),mh=Symbol("_vsh"),Rl=Symbol("");function eb(e){const t=io();if(!t)return;const n=t.ut=(r=e(t.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach(i=>or(i,r))},s=()=>{const r=e(t.proxy);t.ce?or(t.ce,r):bi(t.subTree,r),n(r)};Jc(()=>{$d(s)}),Zi(()=>{const r=new MutationObserver(s);r.observe(t.subTree.el.parentNode,{childList:!0}),eo(()=>r.disconnect())})}function bi(e,t){if(e.shapeFlag&128){const n=e.suspense;e=n.activeBranch,n.pendingBranch&&!n.isHydrating&&n.effects.push(()=>{bi(n.activeBranch,t)})}for(;e.component;)e=e.component.subTree;if(e.shapeFlag&1&&e.el)or(e.el,t);else if(e.type===_e)e.children.forEach(n=>bi(n,t));else if(e.type===es){let{el:n,anchor:s}=e;for(;n&&(or(n,t),n!==s);)n=n.nextSibling}}function or(e,t){if(e.nodeType===1){const n=e.style;let s="";for(const r in t)n.setProperty(`--${r}`,t[r]),s+=`--${r}: ${t[r]};`;n[Rl]=s}}const vh=/(^|;)\s*display\s*:/;function _h(e,t,n){const s=e.style,r=pe(n);let i=!1;if(n&&!r){if(t)if(pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Gs(s,a,"")}else for(const o in t)n[o]==null&&Gs(s,o,"");for(const o in n)o==="display"&&(i=!0),Gs(s,o,n[o])}else if(r){if(t!==n){const o=s[Rl];o&&(n+=";"+o),s.cssText=n,i=vh.test(n)}}else t&&e.removeAttribute("style");Qo in e&&(e[Qo]=i?s.display:"",e[mh]&&(s.display="none"))}const Zo=/\s*!important$/;function Gs(e,t,n){if(F(n))n.forEach(s=>Gs(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=yh(e,t);Zo.test(n)?e.setProperty(qt(s),n.replace(Zo,""),"important"):e[s]=n}}const ea=["Webkit","Moz","ms"],Jr={};function yh(e,t){const n=Jr[t];if(n)return n;let s=Je(t);if(s!=="filter"&&s in e)return Jr[t]=s;s=_r(s);for(let r=0;r<ea.length;r++){const i=ea[r]+s;if(i in e)return Jr[t]=i}return t}const ta="http://www.w3.org/1999/xlink";function na(e,t,n,s,r,i=bf(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ta,t.slice(6,t.length)):e.setAttributeNS(ta,t,n):n==null||i&&!mc(n)?e.removeAttribute(t):e.setAttribute(t,i?"":lt(n)?String(n):n)}function bh(e,t,n,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Il(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(o!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let i=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=mc(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{e[t]=n}catch{}i&&e.removeAttribute(t)}function mt(e,t,n,s){e.addEventListener(t,n,s)}function Eh(e,t,n,s){e.removeEventListener(t,n,s)}const sa=Symbol("_vei");function wh(e,t,n,s,r=null){const i=e[sa]||(e[sa]={}),o=i[t];if(s&&o)o.value=s;else{const[a,c]=Ih(t);if(s){const l=i[t]=Ch(s,r);mt(e,a,l,c)}else o&&(Eh(e,a,o,c),i[t]=void 0)}}const ra=/(?:Once|Passive|Capture)$/;function Ih(e){let t;if(ra.test(e)){t={};let s;for(;s=e.match(ra);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):qt(e.slice(2)),t]}let Yr=0;const Th=Promise.resolve(),Sh=()=>Yr||(Th.then(()=>Yr=0),Yr=Date.now());function Ch(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ye(Rh(s,n.value),t,5,[s])};return n.value=e,n.attached=Sh(),n}function Rh(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const ia=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ah=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?gh(e,s,o):t==="style"?_h(e,n,s):mr(t)?Ui(t)||wh(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ph(e,t,s,o))?(bh(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&na(e,t,s,o,i,t!=="value")):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),na(e,t,s,o))};function Ph(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ia(t)&&z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ia(t)&&pe(n)?!1:!!(t in e||e._isVueCE&&(/[A-Z]/.test(t)||!pe(n)))}const Al=new WeakMap,Pl=new WeakMap,ar=Symbol("_moveCb"),oa=Symbol("_enterCb"),Oh=e=>(delete e.props.mode,e),kh=Oh({name:"TransitionGroup",props:me({},fh,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=io(),s=od();let r,i;return Yc(()=>{if(!r.length)return;const o=e.moveClass||`${e.name||"v"}-move`;if(!xh(r[0].el,n.vnode.el,o))return;r.forEach(Dh),r.forEach(Lh);const a=r.filter(Mh);Cl(),a.forEach(c=>{const l=c.el,u=l.style;ht(l,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=l[ar]=p=>{p&&p.target!==l||(!p||/transform$/.test(p.propertyName))&&(l.removeEventListener("transitionend",d),l[ar]=null,Dt(l,o))};l.addEventListener("transitionend",d)})}),()=>{const o=X(e),a=dh(o);let c=o.tag||_e;if(r=[],i)for(let l=0;l<i.length;l++){const u=i[l];u.el&&u.el instanceof Element&&(r.push(u),us(u,di(u,a,s,n)),Al.set(u,u.el.getBoundingClientRect()))}i=t.default?Kc(t.default()):[];for(let l=0;l<i.length;l++){const u=i[l];u.key!=null&&us(u,di(u,a,s,n))}return be(c,null,i)}}}),Nh=kh;function Dh(e){const t=e.el;t[ar]&&t[ar](),t[oa]&&t[oa]()}function Lh(e){Pl.set(e,e.el.getBoundingClientRect())}function Mh(e){const t=Al.get(e),n=Pl.get(e),s=t.left-n.left,r=t.top-n.top;if(s||r){const i=e.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${r}px)`,i.transitionDuration="0s",e}}function xh(e,t,n){const s=e.cloneNode(),r=e[xn];r&&r.forEach(a=>{a.split(/\s+/).forEach(c=>c&&s.classList.remove(c))}),n.split(/\s+/).forEach(a=>a&&s.classList.add(a)),s.style.display="none";const i=t.nodeType===1?t:t.parentNode;i.appendChild(s);const{hasTransform:o}=Sl(s);return i.removeChild(s),o}const Gt=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>Ws(t,n):t};function Uh(e){e.target.composing=!0}function aa(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const He=Symbol("_assign"),tb={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e[He]=Gt(r);const i=s||r.props&&r.props.type==="number";mt(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Zs(a)),e[He](a)}),n&&mt(e,"change",()=>{e.value=e.value.trim()}),t||(mt(e,"compositionstart",Uh),mt(e,"compositionend",aa),mt(e,"change",aa))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(e[He]=Gt(o),e.composing)return;const a=(i||e.type==="number")&&!/^0\d/.test(e.value)?Zs(e.value):e.value,c=t??"";a!==c&&(document.activeElement===e&&e.type!=="range"&&(s&&t===n||r&&e.value.trim()===c)||(e.value=c))}},nb={deep:!0,created(e,t,n){e[He]=Gt(n),mt(e,"change",()=>{const s=e._modelValue,r=Un(e),i=e.checked,o=e[He];if(F(s)){const a=$i(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(Vn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Ol(e,i))})},mounted:ca,beforeUpdate(e,t,n){e[He]=Gt(n),ca(e,t,n)}};function ca(e,{value:t,oldValue:n},s){e._modelValue=t;let r;F(t)?r=$i(t,s.props.value)>-1:Vn(t)?r=t.has(s.props.value):r=fn(t,Ol(e,!0)),e.checked!==r&&(e.checked=r)}const sb={created(e,{value:t},n){e.checked=fn(t,n.props.value),e[He]=Gt(n),mt(e,"change",()=>{e[He](Un(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e[He]=Gt(s),t!==n&&(e.checked=fn(t,s.props.value))}},rb={deep:!0,created(e,{value:t,modifiers:{number:n}},s){const r=Vn(t);mt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Zs(Un(o)):Un(o));e[He](e.multiple?r?new Set(i):i:i[0]),e._assigning=!0,Is(()=>{e._assigning=!1})}),e[He]=Gt(s)},mounted(e,{value:t,modifiers:{number:n}}){la(e,t)},beforeUpdate(e,t,n){e[He]=Gt(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||la(e,t)}};function la(e,t,n){const s=e.multiple,r=F(t);if(!(s&&!r&&!Vn(t))){for(let i=0,o=e.options.length;i<o;i++){const a=e.options[i],c=Un(a);if(s)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=t.some(u=>String(u)===String(c)):a.selected=$i(t,c)>-1}else a.selected=t.has(c);else if(fn(Un(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Un(e){return"_value"in e?e._value:e.value}function Ol(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Fh=["ctrl","shift","alt","meta"],Bh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Fh.some(n=>e[`${n}Key`]&&!t.includes(n))},$h=(e,t)=>{const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<t.length;o++){const a=Bh[t[o]];if(a&&a(r,t))return}return e(r,...i)})},Vh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ib=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=r=>{if(!("key"in r))return;const i=qt(r.key);if(t.some(o=>o===i||Vh[o]===i))return e(r)})},Hh=me({patchProp:Ah},uh);let ua;function jh(){return ua||(ua=Ld(Hh))}const kl=(...e)=>{const t=jh().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=Kh(s);if(!r)return;const i=t._component;!z(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Wh(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Wh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Kh(e){return pe(e)?document.querySelector(e):e}var zh=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let Nl;const Nr=e=>Nl=e,Dl=Symbol();function Ei(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ns;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ns||(ns={}));function Gh(){const e=bc(!0),t=e.run(()=>wr({}));let n=[],s=[];const r=Ji({install(i){Nr(r),r._a=i,i.provide(Dl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!zh?s.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Ll=()=>{};function fa(e,t,n,s=Ll){e.push(t);const r=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),s())};return!n&&Ec()&&wf(r),r}function wn(e,...t){e.slice().forEach(n=>{n(...t)})}const qh=e=>e(),da=Symbol(),Xr=Symbol();function wi(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,s)=>e.set(s,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];Ei(r)&&Ei(s)&&e.hasOwnProperty(n)&&!he(s)&&!Ht(s)?e[n]=wi(r,s):e[n]=s}return e}const Jh=Symbol();function Yh(e){return!Ei(e)||!e.hasOwnProperty(Jh)}const{assign:Lt}=Object;function Xh(e){return!!(he(e)&&e.effect)}function Qh(e,t,n,s){const{state:r,actions:i,getters:o}=t,a=n.state.value[e];let c;function l(){a||(n.state.value[e]=r?r():{});const u=qf(n.state.value[e]);return Lt(u,i,Object.keys(o||{}).reduce((d,p)=>(d[p]=Ji(Be(()=>{Nr(n);const g=n._s.get(e);return o[p].call(g,g)})),d),{}))}return c=Ml(e,l,t,n,s,!0),c}function Ml(e,t,n={},s,r,i){let o;const a=Lt({actions:{}},n),c={deep:!0};let l,u,d=[],p=[],g;const w=s.state.value[e];!i&&!w&&(s.state.value[e]={}),wr({});let A;function B(W){let S;l=u=!1,typeof W=="function"?(W(s.state.value[e]),S={type:ns.patchFunction,storeId:e,events:g}):(wi(s.state.value[e],W),S={type:ns.patchObject,payload:W,storeId:e,events:g});const K=A=Symbol();Is().then(()=>{A===K&&(l=!0)}),u=!0,wn(d,S,s.state.value[e])}const M=i?function(){const{state:S}=n,K=S?S():{};this.$patch(Q=>{Lt(Q,K)})}:Ll;function D(){o.stop(),d=[],p=[],s._s.delete(e)}const L=(W,S="")=>{if(da in W)return W[Xr]=S,W;const K=function(){Nr(s);const Q=Array.from(arguments),N=[],J=[];function ge(G){N.push(G)}function Pe(G){J.push(G)}wn(p,{args:Q,name:K[Xr],store:V,after:ge,onError:Pe});let oe;try{oe=W.apply(this&&this.$id===e?this:V,Q)}catch(G){throw wn(J,G),G}return oe instanceof Promise?oe.then(G=>(wn(N,G),G)).catch(G=>(wn(J,G),Promise.reject(G))):(wn(N,oe),oe)};return K[da]=!0,K[Xr]=S,K},P={_p:s,$id:e,$onAction:fa.bind(null,p),$patch:B,$reset:M,$subscribe(W,S={}){const K=fa(d,W,S.detached,()=>Q()),Q=o.run(()=>Zn(()=>s.state.value[e],N=>{(S.flush==="sync"?u:l)&&W({storeId:e,type:ns.direct,events:g},N)},Lt({},c,S)));return K},$dispose:D},V=Es(P);s._s.set(e,V);const q=(s._a&&s._a.runWithContext||qh)(()=>s._e.run(()=>(o=bc()).run(()=>t({action:L}))));for(const W in q){const S=q[W];if(he(S)&&!Xh(S)||Ht(S))i||(w&&Yh(S)&&(he(S)?S.value=w[W]:wi(S,w[W])),s.state.value[e][W]=S);else if(typeof S=="function"){const K=L(S,W);q[W]=K,a.actions[W]=S}}return Lt(V,q),Lt(X(V),q),Object.defineProperty(V,"$state",{get:()=>s.state.value[e],set:W=>{B(S=>{Lt(S,W)})}}),s._p.forEach(W=>{Lt(V,o.run(()=>W({store:V,app:s._a,pinia:s,options:a})))}),w&&i&&n.hydrate&&n.hydrate(V.$state,w),l=!0,u=!0,V}function ob(e,t,n){let s,r;const i=typeof t=="function";typeof e=="string"?(s=e,r=i?n:t):(r=e,s=e.id);function o(a,c){const l=Rd();return a=a||(l?qe(Dl,null):null),a&&Nr(a),a=Nl,a._s.has(s)||(i?Ml(s,t,r,a):Qh(s,r,a)),a._s.get(s)}return o.$id=s,o}var Zh=Object.defineProperty,ha=Object.getOwnPropertySymbols,ep=Object.prototype.hasOwnProperty,tp=Object.prototype.propertyIsEnumerable,pa=(e,t,n)=>t in e?Zh(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xl=(e,t)=>{for(var n in t||(t={}))ep.call(t,n)&&pa(e,n,t[n]);if(ha)for(var n of ha(t))tp.call(t,n)&&pa(e,n,t[n]);return e},Dr=e=>typeof e=="function",Lr=e=>typeof e=="string",Ul=e=>Lr(e)&&e.trim().length>0,np=e=>typeof e=="number",an=e=>typeof e>"u",ds=e=>typeof e=="object"&&e!==null,sp=e=>ot(e,"tag")&&Ul(e.tag),Fl=e=>window.TouchEvent&&e instanceof TouchEvent,Bl=e=>ot(e,"component")&&$l(e.component),rp=e=>Dr(e)||ds(e),$l=e=>!an(e)&&(Lr(e)||rp(e)||Bl(e)),ga=e=>ds(e)&&["height","width","right","left","top","bottom"].every(t=>np(e[t])),ot=(e,t)=>(ds(e)||Dr(e))&&t in e,ip=(e=>()=>e++)(0);function Qr(e){return Fl(e)?e.targetTouches[0].clientX:e.clientX}function ma(e){return Fl(e)?e.targetTouches[0].clientY:e.clientY}var op=e=>{an(e.remove)?e.parentNode&&e.parentNode.removeChild(e):e.remove()},Cs=e=>Bl(e)?Cs(e.component):sp(e)?Ct({render(){return e}}):typeof e=="string"?e:X(ln(e)),ap=e=>{if(typeof e=="string")return e;const t=ot(e,"props")&&ds(e.props)?e.props:{},n=ot(e,"listeners")&&ds(e.listeners)?e.listeners:{};return{component:Cs(e),props:t,listeners:n}},cp=()=>typeof window<"u",oo=class{constructor(){this.allHandlers={}}getHandlers(e){return this.allHandlers[e]||[]}on(e,t){const n=this.getHandlers(e);n.push(t),this.allHandlers[e]=n}off(e,t){const n=this.getHandlers(e);n.splice(n.indexOf(t)>>>0,1)}emit(e,t){this.getHandlers(e).forEach(s=>s(t))}},lp=e=>["on","off","emit"].every(t=>ot(e,t)&&Dr(e[t])),Le;(function(e){e.SUCCESS="success",e.ERROR="error",e.WARNING="warning",e.INFO="info",e.DEFAULT="default"})(Le||(Le={}));var cr;(function(e){e.TOP_LEFT="top-left",e.TOP_CENTER="top-center",e.TOP_RIGHT="top-right",e.BOTTOM_LEFT="bottom-left",e.BOTTOM_CENTER="bottom-center",e.BOTTOM_RIGHT="bottom-right"})(cr||(cr={}));var Me;(function(e){e.ADD="add",e.DISMISS="dismiss",e.UPDATE="update",e.CLEAR="clear",e.UPDATE_DEFAULTS="update_defaults"})(Me||(Me={}));var ze="Vue-Toastification",We={type:{type:String,default:Le.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Vl={type:We.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},qs={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:We.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},Ii={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Hl={transition:{type:[Object,String],default:`${ze}__bounce`}},up={position:{type:String,default:cr.TOP_RIGHT},draggable:We.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:We.trueBoolean,pauseOnHover:We.trueBoolean,closeOnClick:We.trueBoolean,timeout:Ii.timeout,hideProgressBar:Ii.hideProgressBar,toastClassName:We.classNames,bodyClassName:We.classNames,icon:Vl.customIcon,closeButton:qs.component,closeButtonClassName:qs.classNames,showCloseButtonOnHover:qs.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new oo}},fp={id:{type:[String,Number],required:!0,default:0},type:We.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},dp={container:{type:[Object,Function],default:()=>document.body},newestOnTop:We.trueBoolean,maxToasts:{type:Number,default:20},transition:Hl.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:e=>e},filterToasts:{type:Function,default:e=>e},containerClassName:We.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},Et={CORE_TOAST:up,TOAST:fp,CONTAINER:dp,PROGRESS_BAR:Ii,ICON:Vl,TRANSITION:Hl,CLOSE_BUTTON:qs},jl=Ct({name:"VtProgressBar",props:Et.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${ze}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function hp(e,t){return de(),$e("div",{style:bs(e.style),class:zt(e.cpClass)},null,6)}jl.render=hp;var pp=jl,Wl=Ct({name:"VtCloseButton",props:Et.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?Cs(this.component):"button"},classes(){const e=[`${ze}__close-button`];return this.showOnHover&&e.push("show-on-hover"),e.concat(this.classNames)}}}),gp=Ar(" × ");function mp(e,t){return de(),Ke(to(e.buttonComponent),Pr({"aria-label":e.ariaLabel,class:e.classes},e.$attrs),{default:Ts(()=>[gp]),_:1},16,["aria-label","class"])}Wl.render=mp;var vp=Wl,Kl={},_p={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},yp=mn("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),bp=[yp];function Ep(e,t){return de(),$e("svg",_p,bp)}Kl.render=Ep;var wp=Kl,zl={},Ip={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Tp=mn("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Sp=[Tp];function Cp(e,t){return de(),$e("svg",Ip,Sp)}zl.render=Cp;var va=zl,Gl={},Rp={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ap=mn("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Pp=[Ap];function Op(e,t){return de(),$e("svg",Rp,Pp)}Gl.render=Op;var kp=Gl,ql={},Np={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},Dp=mn("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),Lp=[Dp];function Mp(e,t){return de(),$e("svg",Np,Lp)}ql.render=Mp;var xp=ql,Jl=Ct({name:"VtIcon",props:Et.ICON,computed:{customIconChildren(){return ot(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return Lr(this.customIcon)?this.trimValue(this.customIcon):ot(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return ot(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:$l(this.customIcon)?Cs(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[Le.DEFAULT]:va,[Le.INFO]:va,[Le.SUCCESS]:wp,[Le.ERROR]:xp,[Le.WARNING]:kp}[this.type]},iconClasses(){const e=[`${ze}__icon`];return this.hasCustomIcon?e.concat(this.customIconClass):e}},methods:{trimValue(e,t=""){return Ul(e)?e.trim():t}}});function Up(e,t){return de(),Ke(to(e.component),{class:zt(e.iconClasses)},{default:Ts(()=>[Ar(Vi(e.customIconChildren),1)]),_:1},8,["class"])}Jl.render=Up;var Fp=Jl,Yl=Ct({name:"VtToast",components:{ProgressBar:pp,CloseButton:vp,Icon:Fp},inheritAttrs:!1,props:Object.assign({},Et.CORE_TOAST,Et.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const e=[`${ze}__toast`,`${ze}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&e.push("disable-transition"),this.rtl&&e.push(`${ze}__toast--rtl`),e},bodyClasses(){return[`${ze}__toast-${Lr(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return ga(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:ot,getVueComponentFromObj:Cs,closeToast(){this.eventBus.emit(Me.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const e=this.$el;e.addEventListener("touchstart",this.onDragStart,{passive:!0}),e.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const e=this.$el;e.removeEventListener("touchstart",this.onDragStart),e.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(e){this.beingDragged=!0,this.dragPos={x:Qr(e),y:ma(e)},this.dragStart=Qr(e),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(e){this.beingDragged&&(e.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:Qr(e),y:ma(e)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,ga(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),Bp=["role"];function $p(e,t){const n=kn("Icon"),s=kn("CloseButton"),r=kn("ProgressBar");return de(),$e("div",{class:zt(e.classes),style:bs(e.draggableStyle),onClick:t[0]||(t[0]=(...i)=>e.clickHandler&&e.clickHandler(...i)),onMouseenter:t[1]||(t[1]=(...i)=>e.hoverPause&&e.hoverPause(...i)),onMouseleave:t[2]||(t[2]=(...i)=>e.hoverPlay&&e.hoverPlay(...i))},[e.icon?(de(),Ke(n,{key:0,"custom-icon":e.icon,type:e.type},null,8,["custom-icon","type"])):Gr("v-if",!0),mn("div",{role:e.accessibility.toastRole||"alert",class:zt(e.bodyClasses)},[typeof e.content=="string"?(de(),$e(_e,{key:0},[Ar(Vi(e.content),1)],2112)):(de(),Ke(to(e.getVueComponentFromObj(e.content)),Pr({key:1,"toast-id":e.id},e.hasProp(e.content,"props")?e.content.props:{},_d(e.hasProp(e.content,"listeners")?e.content.listeners:{}),{onCloseToast:e.closeToast}),null,16,["toast-id","onCloseToast"]))],10,Bp),e.closeButton?(de(),Ke(s,{key:1,component:e.closeButton,"class-names":e.closeButtonClassName,"show-on-hover":e.showCloseButtonOnHover,"aria-label":e.accessibility.closeButtonLabel,onClick:$h(e.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):Gr("v-if",!0),e.timeout?(de(),Ke(r,{key:2,"is-running":e.isRunning,"hide-progress-bar":e.hideProgressBar,timeout:e.timeout,onCloseToast:e.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):Gr("v-if",!0)],38)}Yl.render=$p;var Vp=Yl,Xl=Ct({name:"VtTransition",props:Et.TRANSITION,emits:["leave"],methods:{hasProp:ot,leave(e){e instanceof HTMLElement&&(e.style.left=e.offsetLeft+"px",e.style.top=e.offsetTop+"px",e.style.width=getComputedStyle(e).width,e.style.position="absolute")}}});function Hp(e,t){return de(),Ke(Nh,{tag:"div","enter-active-class":e.transition.enter?e.transition.enter:`${e.transition}-enter-active`,"move-class":e.transition.move?e.transition.move:`${e.transition}-move`,"leave-active-class":e.transition.leave?e.transition.leave:`${e.transition}-leave-active`,onLeave:e.leave},{default:Ts(()=>[vd(e.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}Xl.render=Hp;var jp=Xl,Ql=Ct({name:"VueToastification",devtools:{hide:!0},components:{Toast:Vp,VtTransition:jp},props:Object.assign({},Et.CORE_TOAST,Et.CONTAINER,Et.TRANSITION),data(){return{count:0,positions:Object.values(cr),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const e=this.eventBus;e.on(Me.ADD,this.addToast),e.on(Me.CLEAR,this.clearToasts),e.on(Me.DISMISS,this.dismissToast),e.on(Me.UPDATE,this.updateToast),e.on(Me.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(e){Dr(e)&&(e=await e()),op(this.$el),e.appendChild(this.$el)},setToast(e){an(e.id)||(this.toasts[e.id]=e)},addToast(e){e.content=ap(e.content);const t=Object.assign({},this.defaults,e.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[e.type],e),n=this.defaults.filterBeforeCreate(t,this.toastArray);n&&this.setToast(n)},dismissToast(e){const t=this.toasts[e];!an(t)&&!an(t.onClose)&&t.onClose(),delete this.toasts[e]},clearToasts(){Object.keys(this.toasts).forEach(e=>{this.dismissToast(e)})},getPositionToasts(e){const t=this.filteredToasts.filter(n=>n.position===e).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?t.reverse():t},updateDefaults(e){an(e.container)||this.setup(e.container),this.defaults=Object.assign({},this.defaults,e)},updateToast({id:e,options:t,create:n}){this.toasts[e]?(t.timeout&&t.timeout===this.toasts[e].timeout&&t.timeout++,this.setToast(Object.assign({},this.toasts[e],t))):n&&this.addToast(Object.assign({},{id:e},t))},getClasses(e){return[`${ze}__container`,e].concat(this.defaults.containerClassName)}}});function Wp(e,t){const n=kn("Toast"),s=kn("VtTransition");return de(),$e("div",null,[(de(!0),$e(_e,null,Do(e.positions,r=>(de(),$e("div",{key:r},[be(s,{transition:e.defaults.transition,class:zt(e.getClasses(r))},{default:Ts(()=>[(de(!0),$e(_e,null,Do(e.getPositionToasts(r),i=>(de(),Ke(n,Pr({key:i.id},i),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}Ql.render=Wp;var Kp=Ql,_a=(e={},t=!0)=>{const n=e.eventBus=e.eventBus||new oo;t&&Is(()=>{const i=kl(Kp,xl({},e)),o=i.mount(document.createElement("div")),a=e.onMounted;if(an(a)||a(o,i),e.shareAppContext){const c=e.shareAppContext;c===!0?console.warn(`[${ze}] App to share context with was not provided.`):(i._context.components=c._context.components,i._context.directives=c._context.directives,i._context.mixins=c._context.mixins,i._context.provides=c._context.provides,i.config.globalProperties=c.config.globalProperties)}});const s=(i,o)=>{const a=Object.assign({},{id:ip(),type:Le.DEFAULT},o,{content:i});return n.emit(Me.ADD,a),a.id};s.clear=()=>n.emit(Me.CLEAR,void 0),s.updateDefaults=i=>{n.emit(Me.UPDATE_DEFAULTS,i)},s.dismiss=i=>{n.emit(Me.DISMISS,i)};function r(i,{content:o,options:a},c=!1){const l=Object.assign({},a,{content:o});n.emit(Me.UPDATE,{id:i,options:l,create:c})}return s.update=r,s.success=(i,o)=>s(i,Object.assign({},o,{type:Le.SUCCESS})),s.info=(i,o)=>s(i,Object.assign({},o,{type:Le.INFO})),s.error=(i,o)=>s(i,Object.assign({},o,{type:Le.ERROR})),s.warning=(i,o)=>s(i,Object.assign({},o,{type:Le.WARNING})),s},zp=()=>{const e=()=>console.warn(`[${ze}] This plugin does not support SSR!`);return new Proxy(e,{get(){return e}})};function Zl(e){return cp()?lp(e)?_a({eventBus:e},!1):_a(e,!0):zp()}var eu=Symbol("VueToastification"),tu=new oo,Gp=(e,t)=>{(t==null?void 0:t.shareAppContext)===!0&&(t.shareAppContext=e);const n=Zl(xl({eventBus:tu},t));e.provide(eu,n)},ab=e=>{const t=io()?qe(eu,void 0):void 0;return t||Zl(tu)},qp=Gp;const Jp=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},Yp={},Xp={class:""};function Qp(e,t){const n=kn("RouterView");return de(),$e("div",Xp,[be(n)])}const Zp=Jp(Yp,[["render",Qp]]),eg="modulepreload",tg=function(e){return"/vue-fulltodolist/"+e},ya={},ng=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),o=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.all(n.map(a=>{if(a=tg(a),a in ya)return;ya[a]=!0;const c=a.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":eg,c||(u.as="script"),u.crossOrigin="",u.href=a,o&&u.setAttribute("nonce",o),document.head.appendChild(u),c)return new Promise((d,p)=>{u.addEventListener("load",d),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})};/*!
  * vue-router v4.4.4
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Sn=typeof document<"u";function nu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function sg(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&nu(e.default)}const re=Object.assign;function Zr(e,t){const n={};for(const s in t){const r=t[s];n[s]=Xe(r)?r.map(e):e(r)}return n}const ss=()=>{},Xe=Array.isArray,su=/#/g,rg=/&/g,ig=/\//g,og=/=/g,ag=/\?/g,ru=/\+/g,cg=/%5B/g,lg=/%5D/g,iu=/%5E/g,ug=/%60/g,ou=/%7B/g,fg=/%7C/g,au=/%7D/g,dg=/%20/g;function ao(e){return encodeURI(""+e).replace(fg,"|").replace(cg,"[").replace(lg,"]")}function hg(e){return ao(e).replace(ou,"{").replace(au,"}").replace(iu,"^")}function Ti(e){return ao(e).replace(ru,"%2B").replace(dg,"+").replace(su,"%23").replace(rg,"%26").replace(ug,"`").replace(ou,"{").replace(au,"}").replace(iu,"^")}function pg(e){return Ti(e).replace(og,"%3D")}function gg(e){return ao(e).replace(su,"%23").replace(ag,"%3F")}function mg(e){return e==null?"":gg(e).replace(ig,"%2F")}function hs(e){try{return decodeURIComponent(""+e)}catch{}return""+e}const vg=/\/$/,_g=e=>e.replace(vg,"");function ei(e,t,n="/"){let s,r={},i="",o="";const a=t.indexOf("#");let c=t.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=t.slice(0,c),i=t.slice(c+1,a>-1?a:t.length),r=e(i)),a>-1&&(s=s||t.slice(0,a),o=t.slice(a,t.length)),s=wg(s??t,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:hs(o)}}function yg(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ba(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bg(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Fn(t.matched[s],n.matched[r])&&cu(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Fn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function cu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Eg(e[n],t[n]))return!1;return!0}function Eg(e,t){return Xe(e)?Ea(e,t):Xe(t)?Ea(t,e):e===t}function Ea(e,t){return Xe(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function wg(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ps;(function(e){e.pop="pop",e.push="push"})(ps||(ps={}));var rs;(function(e){e.back="back",e.forward="forward",e.unknown=""})(rs||(rs={}));function Ig(e){if(!e)if(Sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_g(e)}const Tg=/^[^#]+#/;function Sg(e,t){return e.replace(Tg,"#")+t}function Cg(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const Mr=()=>({left:window.scrollX,top:window.scrollY});function Rg(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=Cg(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function wa(e,t){return(history.state?history.state.position-t:-1)+e}const Si=new Map;function Ag(e,t){Si.set(e,t)}function Pg(e){const t=Si.get(e);return Si.delete(e),t}let Og=()=>location.protocol+"//"+location.host;function lu(e,t){const{pathname:n,search:s,hash:r}=t,i=e.indexOf("#");if(i>-1){let a=r.includes(e.slice(i))?e.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),ba(c,"")}return ba(n,e)+s+r}function kg(e,t,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const g=lu(e,location),w=n.value,A=t.value;let B=0;if(p){if(n.value=g,t.value=p,o&&o===w){o=null;return}B=A?p.position-A.position:0}else s(g);r.forEach(M=>{M(n.value,w,{delta:B,type:ps.pop,direction:B?B>0?rs.forward:rs.back:rs.unknown})})};function c(){o=n.value}function l(p){r.push(p);const g=()=>{const w=r.indexOf(p);w>-1&&r.splice(w,1)};return i.push(g),g}function u(){const{history:p}=window;p.state&&p.replaceState(re({},p.state,{scroll:Mr()}),"")}function d(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:d}}function Ia(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?Mr():null}}function Ng(e){const{history:t,location:n}=window,s={value:lu(e,n)},r={value:t.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const d=e.indexOf("#"),p=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+c:Og()+e+c;try{t[u?"replaceState":"pushState"](l,"",p),r.value=l}catch(g){console.error(g),n[u?"replace":"assign"](p)}}function o(c,l){const u=re({},t.state,Ia(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,u,!0),s.value=c}function a(c,l){const u=re({},r.value,t.state,{forward:c,scroll:Mr()});i(u.current,u,!0);const d=re({},Ia(s.value,c,null),{position:u.position+1},l);i(c,d,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Dg(e){e=Ig(e);const t=Ng(e),n=kg(e,t.state,t.location,t.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=re({location:"",base:e,go:s,createHref:Sg.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function Lg(e){return typeof e=="string"||e&&typeof e=="object"}function uu(e){return typeof e=="string"||typeof e=="symbol"}const fu=Symbol("");var Ta;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Ta||(Ta={}));function Bn(e,t){return re(new Error,{type:e,[fu]:!0},t)}function dt(e,t){return e instanceof Error&&fu in e&&(t==null||!!(e.type&t))}const Sa="[^/]+?",Mg={sensitive:!1,strict:!1,start:!0,end:!0},xg=/[.+*?^${}()[\]/\\]/g;function Ug(e,t){const n=re({},Mg,t),s=[];let r=n.start?"^":"";const i=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let d=0;d<l.length;d++){const p=l[d];let g=40+(n.sensitive?.25:0);if(p.type===0)d||(r+="/"),r+=p.value.replace(xg,"\\$&"),g+=40;else if(p.type===1){const{value:w,repeatable:A,optional:B,regexp:M}=p;i.push({name:w,repeatable:A,optional:B});const D=M||Sa;if(D!==Sa){g+=10;try{new RegExp(`(${D})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${w}" (${D}): `+P.message)}}let L=A?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;d||(L=B&&l.length<2?`(?:/${L})`:"/"+L),B&&(L+="?"),r+=L,g+=20,B&&(g+=-8),A&&(g+=-20),D===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const u=l.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const g=u[p]||"",w=i[p-1];d[w.name]=g&&w.repeatable?g.split("/"):g}return d}function c(l){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of p)if(g.type===0)u+=g.value;else if(g.type===1){const{value:w,repeatable:A,optional:B}=g,M=w in l?l[w]:"";if(Xe(M)&&!A)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const D=Xe(M)?M.join("/"):M;if(!D)if(B)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=D}}return u||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Fg(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function du(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const i=Fg(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Ca(s))return 1;if(Ca(r))return-1}return r.length-s.length}function Ca(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Bg={type:0,value:""},$g=/[a-zA-Z0-9_]/;function Vg(e){if(!e)return[[]];if(e==="/")return[[Bg]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",u="";function d(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<e.length;){if(c=e[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&d(),o()):c===":"?(d(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:$g.test(c)?p():(d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:d(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),d(),o(),r}function Hg(e,t,n){const s=Ug(Vg(e.path),n),r=re(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function jg(e,t){const n=[],s=new Map;t=Pa({strict:!1,end:!0,sensitive:!1},t);function r(d){return s.get(d)}function i(d,p,g){const w=!g,A=Wg(d);A.aliasOf=g&&g.record;const B=Pa(t,d),M=[A];if("alias"in d){const P=typeof d.alias=="string"?[d.alias]:d.alias;for(const V of P)M.push(re({},A,{components:g?g.record.components:A.components,path:V,aliasOf:g?g.record:A}))}let D,L;for(const P of M){const{path:V}=P;if(p&&V[0]!=="/"){const Z=p.record.path,q=Z[Z.length-1]==="/"?"":"/";P.path=p.record.path+(V&&q+V)}if(D=Hg(P,p,B),g?g.alias.push(D):(L=L||D,L!==D&&L.alias.push(D),w&&d.name&&!Aa(D)&&o(d.name)),hu(D)&&c(D),A.children){const Z=A.children;for(let q=0;q<Z.length;q++)i(Z[q],D,g&&g.children[q])}g=g||D}return L?()=>{o(L)}:ss}function o(d){if(uu(d)){const p=s.get(d);p&&(s.delete(d),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(d);p>-1&&(n.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function c(d){const p=Gg(d,n);n.splice(p,0,d),d.record.name&&!Aa(d)&&s.set(d.record.name,d)}function l(d,p){let g,w={},A,B;if("name"in d&&d.name){if(g=s.get(d.name),!g)throw Bn(1,{location:d});B=g.record.name,w=re(Ra(p.params,g.keys.filter(L=>!L.optional).concat(g.parent?g.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),d.params&&Ra(d.params,g.keys.map(L=>L.name))),A=g.stringify(w)}else if(d.path!=null)A=d.path,g=n.find(L=>L.re.test(A)),g&&(w=g.parse(A),B=g.record.name);else{if(g=p.name?s.get(p.name):n.find(L=>L.re.test(p.path)),!g)throw Bn(1,{location:d,currentLocation:p});B=g.record.name,w=re({},p.params,d.params),A=g.stringify(w)}const M=[];let D=g;for(;D;)M.unshift(D.record),D=D.parent;return{name:B,path:A,params:w,matched:M,meta:zg(M)}}e.forEach(d=>i(d));function u(){n.length=0,s.clear()}return{addRoute:i,resolve:l,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Ra(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function Wg(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Kg(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},mods:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Kg(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="object"?n[s]:n;return t}function Aa(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zg(e){return e.reduce((t,n)=>re(t,n.meta),{})}function Pa(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function Gg(e,t){let n=0,s=t.length;for(;n!==s;){const i=n+s>>1;du(e,t[i])<0?s=i:n=i+1}const r=qg(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function qg(e){let t=e;for(;t=t.parent;)if(hu(t)&&du(e,t)===0)return t}function hu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Jg(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(ru," "),o=i.indexOf("="),a=hs(o<0?i:i.slice(0,o)),c=o<0?null:hs(i.slice(o+1));if(a in t){let l=t[a];Xe(l)||(l=t[a]=[l]),l.push(c)}else t[a]=c}return t}function Oa(e){let t="";for(let n in e){const s=e[n];if(n=pg(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}(Xe(s)?s.map(i=>i&&Ti(i)):[s&&Ti(s)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+n,i!=null&&(t+="="+i))})}return t}function Yg(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=Xe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Xg=Symbol(""),ka=Symbol(""),co=Symbol(""),pu=Symbol(""),Ci=Symbol("");function zn(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Ut(e,t,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const l=p=>{p===!1?c(Bn(4,{from:n,to:t})):p instanceof Error?c(p):Lg(p)?c(Bn(2,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},u=i(()=>e.call(s&&s.instances[r],t,n,l));let d=Promise.resolve(u);e.length<3&&(d=d.then(l)),d.catch(p=>c(p))})}function ti(e,t,n,s,r=i=>i()){const i=[];for(const o of e)for(const a in o.components){let c=o.components[a];if(!(t!=="beforeRouteEnter"&&!o.instances[a]))if(nu(c)){const u=(c.__vccOpts||c)[t];u&&i.push(Ut(u,n,s,o,a,r))}else{let l=c();i.push(()=>l.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=sg(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const g=(d.__vccOpts||d)[t];return g&&Ut(g,n,s,o,a,r)()}))}}return i}function Na(e){const t=qe(co),n=qe(pu),s=Be(()=>{const c=ln(e.to);return t.resolve(c)}),r=Be(()=>{const{matched:c}=s.value,{length:l}=c,u=c[l-1],d=n.matched;if(!u||!d.length)return-1;const p=d.findIndex(Fn.bind(null,u));if(p>-1)return p;const g=Da(c[l-2]);return l>1&&Da(u)===g&&d[d.length-1].path!==g?d.findIndex(Fn.bind(null,c[l-2])):p}),i=Be(()=>r.value>-1&&tm(n.params,s.value.params)),o=Be(()=>r.value>-1&&r.value===n.matched.length-1&&cu(n.params,s.value.params));function a(c={}){return em(c)?t[ln(e.replace)?"replace":"push"](ln(e.to)).catch(ss):Promise.resolve()}return{route:s,href:Be(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Qg=Ct({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Na,setup(e,{slots:t}){const n=Es(Na(e)),{options:s}=qe(co),r=Be(()=>({[La(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[La(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:wl("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Zg=Qg;function em(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function tm(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Xe(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Da(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const La=(e,t,n)=>e??t??n,nm=Ct({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=qe(Ci),r=Be(()=>e.route||s.value),i=qe(ka,0),o=Be(()=>{let l=ln(i);const{matched:u}=r.value;let d;for(;(d=u[l])&&!d.components;)l++;return l}),a=Be(()=>r.value.matched[o.value]);Ks(ka,Be(()=>o.value+1)),Ks(Xg,a),Ks(Ci,r);const c=wr();return Zn(()=>[c.value,a.value,e.name],([l,u,d],[p,g,w])=>{u&&(u.instances[d]=l,g&&g!==u&&l&&l===p&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),l&&u&&(!g||!Fn(u,g)||!p)&&(u.enterCallbacks[d]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=r.value,u=e.name,d=a.value,p=d&&d.components[u];if(!p)return Ma(n.default,{Component:p,route:l});const g=d.props[u],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,B=wl(p,re({},w,t,{onVnodeUnmounted:M=>{M.component.isUnmounted&&(d.instances[u]=null)},ref:c}));return Ma(n.default,{Component:B,route:l})||B}}});function Ma(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const sm=nm;function rm(e){const t=jg(e.routes,e),n=e.parseQuery||Jg,s=e.stringifyQuery||Oa,r=e.history,i=zn(),o=zn(),a=zn(),c=Wf(kt);let l=kt;Sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zr.bind(null,_=>""+_),d=Zr.bind(null,mg),p=Zr.bind(null,hs);function g(_,k){let R,x;return uu(_)?(R=t.getRecordMatcher(_),x=k):x=_,t.addRoute(x,R)}function w(_){const k=t.getRecordMatcher(_);k&&t.removeRoute(k)}function A(){return t.getRoutes().map(_=>_.record)}function B(_){return!!t.getRecordMatcher(_)}function M(_,k){if(k=re({},k||c.value),typeof _=="string"){const h=ei(n,_,k.path),m=t.resolve({path:h.path},k),y=r.createHref(h.fullPath);return re(h,m,{params:p(m.params),hash:hs(h.hash),redirectedFrom:void 0,href:y})}let R;if(_.path!=null)R=re({},_,{path:ei(n,_.path,k.path).path});else{const h=re({},_.params);for(const m in h)h[m]==null&&delete h[m];R=re({},_,{params:d(h)}),k.params=d(k.params)}const x=t.resolve(R,k),ne=_.hash||"";x.params=u(p(x.params));const fe=yg(s,re({},_,{hash:hg(ne),path:x.path})),f=r.createHref(fe);return re({fullPath:fe,hash:ne,query:s===Oa?Yg(_.query):_.query||{}},x,{redirectedFrom:void 0,href:f})}function D(_){return typeof _=="string"?ei(n,_,c.value.path):re({},_)}function L(_,k){if(l!==_)return Bn(8,{from:k,to:_})}function P(_){return q(_)}function V(_){return P(re(D(_),{replace:!0}))}function Z(_){const k=_.matched[_.matched.length-1];if(k&&k.redirect){const{redirect:R}=k;let x=typeof R=="function"?R(_):R;return typeof x=="string"&&(x=x.includes("?")||x.includes("#")?x=D(x):{path:x},x.params={}),re({query:_.query,hash:_.hash,params:x.path!=null?{}:_.params},x)}}function q(_,k){const R=l=M(_),x=c.value,ne=_.state,fe=_.force,f=_.replace===!0,h=Z(R);if(h)return q(re(D(h),{state:typeof h=="object"?re({},ne,h.state):ne,force:fe,replace:f}),k||R);const m=R;m.redirectedFrom=k;let y;return!fe&&bg(s,x,R)&&(y=Bn(16,{to:m,from:x}),Ze(x,x,!0,!1)),(y?Promise.resolve(y):K(m,x)).catch(v=>dt(v)?dt(v,2)?v:At(v):ee(v,m,x)).then(v=>{if(v){if(dt(v,2))return q(re({replace:f},D(v.to),{state:typeof v.to=="object"?re({},ne,v.to.state):ne,force:fe}),k||m)}else v=N(m,x,!0,f,ne);return Q(m,x,v),v})}function W(_,k){const R=L(_,k);return R?Promise.reject(R):Promise.resolve()}function S(_){const k=yn.values().next().value;return k&&typeof k.runWithContext=="function"?k.runWithContext(_):_()}function K(_,k){let R;const[x,ne,fe]=im(_,k);R=ti(x.reverse(),"beforeRouteLeave",_,k);for(const h of x)h.leaveGuards.forEach(m=>{R.push(Ut(m,_,k))});const f=W.bind(null,_,k);return R.push(f),Ue(R).then(()=>{R=[];for(const h of i.list())R.push(Ut(h,_,k));return R.push(f),Ue(R)}).then(()=>{R=ti(ne,"beforeRouteUpdate",_,k);for(const h of ne)h.updateGuards.forEach(m=>{R.push(Ut(m,_,k))});return R.push(f),Ue(R)}).then(()=>{R=[];for(const h of fe)if(h.beforeEnter)if(Xe(h.beforeEnter))for(const m of h.beforeEnter)R.push(Ut(m,_,k));else R.push(Ut(h.beforeEnter,_,k));return R.push(f),Ue(R)}).then(()=>(_.matched.forEach(h=>h.enterCallbacks={}),R=ti(fe,"beforeRouteEnter",_,k,S),R.push(f),Ue(R))).then(()=>{R=[];for(const h of o.list())R.push(Ut(h,_,k));return R.push(f),Ue(R)}).catch(h=>dt(h,8)?h:Promise.reject(h))}function Q(_,k,R){a.list().forEach(x=>S(()=>x(_,k,R)))}function N(_,k,R,x,ne){const fe=L(_,k);if(fe)return fe;const f=k===kt,h=Sn?history.state:{};R&&(x||f?r.replace(_.fullPath,re({scroll:f&&h&&h.scroll},ne)):r.push(_.fullPath,ne)),c.value=_,Ze(_,k,R,f),At()}let J;function ge(){J||(J=r.listen((_,k,R)=>{if(!Ls.listening)return;const x=M(_),ne=Z(x);if(ne){q(re(ne,{replace:!0}),x).catch(ss);return}l=x;const fe=c.value;Sn&&Ag(wa(fe.fullPath,R.delta),Mr()),K(x,fe).catch(f=>dt(f,12)?f:dt(f,2)?(q(f.to,x).then(h=>{dt(h,20)&&!R.delta&&R.type===ps.pop&&r.go(-1,!1)}).catch(ss),Promise.reject()):(R.delta&&r.go(-R.delta,!1),ee(f,x,fe))).then(f=>{f=f||N(x,fe,!1),f&&(R.delta&&!dt(f,8)?r.go(-R.delta,!1):R.type===ps.pop&&dt(f,20)&&r.go(-1,!1)),Q(x,fe,f)}).catch(ss)}))}let Pe=zn(),oe=zn(),G;function ee(_,k,R){At(_);const x=oe.list();return x.length?x.forEach(ne=>ne(_,k,R)):console.error(_),Promise.reject(_)}function ut(){return G&&c.value!==kt?Promise.resolve():new Promise((_,k)=>{Pe.add([_,k])})}function At(_){return G||(G=!_,ge(),Pe.list().forEach(([k,R])=>_?R(_):k()),Pe.reset()),_}function Ze(_,k,R,x){const{scrollBehavior:ne}=e;if(!Sn||!ne)return Promise.resolve();const fe=!R&&Pg(wa(_.fullPath,0))||(x||!R)&&history.state&&history.state.scroll||null;return Is().then(()=>ne(_,k,fe)).then(f=>f&&Rg(f)).catch(f=>ee(f,_,k))}const Ae=_=>r.go(_);let _n;const yn=new Set,Ls={currentRoute:c,listening:!0,addRoute:g,removeRoute:w,clearRoutes:t.clearRoutes,hasRoute:B,getRoutes:A,resolve:M,options:e,push:P,replace:V,go:Ae,back:()=>Ae(-1),forward:()=>Ae(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:oe.add,isReady:ut,install(_){const k=this;_.component("RouterLink",Zg),_.component("RouterView",sm),_.config.globalProperties.$router=k,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(c)}),Sn&&!_n&&c.value===kt&&(_n=!0,P(r.location).catch(ne=>{}));const R={};for(const ne in kt)Object.defineProperty(R,ne,{get:()=>c.value[ne],enumerable:!0});_.provide(co,k),_.provide(pu,Mc(R)),_.provide(Ci,c);const x=_.unmount;yn.add(_),_.unmount=function(){yn.delete(_),yn.size<1&&(l=kt,J&&J(),J=null,c.value=kt,_n=!1,G=!1),x()}}};function Ue(_){return _.reduce((k,R)=>k.then(()=>S(R)),Promise.resolve())}return Ls}function im(e,t){const n=[],s=[],r=[],i=Math.max(t.matched.length,e.matched.length);for(let o=0;o<i;o++){const a=t.matched[o];a&&(e.matched.find(l=>Fn(l,a))?s.push(a):n.push(a));const c=e.matched[o];c&&(t.matched.find(l=>Fn(l,c))||r.push(c))}return[n,s,r]}const om=rm({history:Dg("/vue-fulltodolist"),routes:[{path:"/",name:"main",component:()=>ng(()=>import("./TodoMainView-CDLvDYHs.js"),__vite__mapDeps([0,1]))}]});var xa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=r&63|128):(r&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=r&63|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=r&63|128)}return t},am=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=e[n++],o=e[n++],a=e[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return t.join("")},mu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,c=r+2<e.length,l=c?e[r+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),s.push(n[u],n[d],n[p],n[g])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(gu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):am(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],a=r<e.length?n[e.charAt(r)]:0;++r;const l=r<e.length?n[e.charAt(r)]:64;++r;const d=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||a==null||l==null||d==null)throw new cm;const p=i<<2|a>>4;if(s.push(p),l!==64){const g=a<<4&240|l>>2;if(s.push(g),d!==64){const w=l<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class cm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const lm=function(e){const t=gu(e);return mu.encodeByteArray(t,!0)},vu=function(e){return lm(e).replace(/\./g,"")},_u=function(e){try{return mu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=()=>um().__FIREBASE_DEFAULTS__,dm=()=>{if(typeof process>"u"||typeof xa>"u")return;const e=xa.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},hm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&_u(e[1]);return t&&JSON.parse(t)},lo=()=>{try{return fm()||dm()||hm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},pm=e=>{var t,n;return(n=(t=lo())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},yu=()=>{var e;return(e=lo())===null||e===void 0?void 0:e.config},bu=e=>{var t;return(t=lo())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function vm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function _m(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ym(){const e=Re();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function bm(){try{return typeof indexedDB=="object"}catch{return!1}}function Em(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;t(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm="FirebaseError";class Xt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=wm,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?Im(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Xt(r,a,s)}}function Im(e,t){return e.replace(Tm,(n,s)=>{const r=t[s];return r!=null?String(r):`<${s}?>`})}const Tm=/\{\$([^}]+)}/g;function Sm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function lr(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(Ua(i)&&Ua(o)){if(!lr(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Ua(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function qn(e){const t={};return e.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");t[decodeURIComponent(r)]=decodeURIComponent(i)}}),t}function Jn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Cm(e,t){const n=new Rm(e,t);return n.subscribe.bind(n)}class Rm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let r;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Am(t,["next","error","complete"])?r=t:r={next:t,error:n,complete:s},r.next===void 0&&(r.next=ni),r.error===void 0&&(r.error=ni),r.complete===void 0&&(r.complete=ni);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Am(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function ni(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(e){return e&&e._delegate?e._delegate:e}class $n{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new gm;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(km(t))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=on){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=on){return this.instances.has(t)}getOptions(t=on){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Om(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=on){return this.component?this.component.multipleInstances?t:on:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Om(e){return e===on?void 0:e}function km(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Pm(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const Dm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Lm=ce.INFO,Mm={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},xm=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=Mm[t];if(r)console[r](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Eu{constructor(t){this.name=t,this._logLevel=Lm,this._logHandler=xm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Dm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const Um=(e,t)=>t.some(n=>e instanceof n);let Fa,Ba;function Fm(){return Fa||(Fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bm(){return Ba||(Ba=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wu=new WeakMap,Ri=new WeakMap,Iu=new WeakMap,si=new WeakMap,uo=new WeakMap;function $m(e){const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(jt(e.result)),r()},o=()=>{s(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wu.set(n,e)}).catch(()=>{}),uo.set(t,e),t}function Vm(e){if(Ri.has(e))return;const t=new Promise((n,s)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ri.set(e,t)}let Ai={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ri.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Iu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return jt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Hm(e){Ai=e(Ai)}function jm(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(ri(this),t,...n);return Iu.set(s,t.sort?t.sort():[t]),jt(s)}:Bm().includes(e)?function(...t){return e.apply(ri(this),t),jt(wu.get(this))}:function(...t){return jt(e.apply(ri(this),t))}}function Wm(e){return typeof e=="function"?jm(e):(e instanceof IDBTransaction&&Vm(e),Um(e,Fm())?new Proxy(e,Ai):e)}function jt(e){if(e instanceof IDBRequest)return $m(e);if(si.has(e))return si.get(e);const t=Wm(e);return t!==e&&(si.set(e,t),uo.set(t,e)),t}const ri=e=>uo.get(e);function Km(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=jt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(jt(o.result),c.oldVersion,c.newVersion,jt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",l=>r(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const zm=["get","getKey","getAll","getAllKeys","count"],Gm=["put","add","delete","clear"],ii=new Map;function $a(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ii.get(t))return ii.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=Gm.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||zm.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return ii.set(t,i),i}Hm(e=>({...e,get:(t,n,s)=>$a(t,n)||e.get(t,n,s),has:(t,n)=>!!$a(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jm(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Jm(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Pi="@firebase/app",Va="0.10.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=new Eu("@firebase/app"),Ym="@firebase/app-compat",Xm="@firebase/analytics-compat",Qm="@firebase/analytics",Zm="@firebase/app-check-compat",ev="@firebase/app-check",tv="@firebase/auth",nv="@firebase/auth-compat",sv="@firebase/database",rv="@firebase/database-compat",iv="@firebase/functions",ov="@firebase/functions-compat",av="@firebase/installations",cv="@firebase/installations-compat",lv="@firebase/messaging",uv="@firebase/messaging-compat",fv="@firebase/performance",dv="@firebase/performance-compat",hv="@firebase/remote-config",pv="@firebase/remote-config-compat",gv="@firebase/storage",mv="@firebase/storage-compat",vv="@firebase/firestore",_v="@firebase/vertexai-preview",yv="@firebase/firestore-compat",bv="firebase",Ev="10.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]",wv={[Pi]:"fire-core",[Ym]:"fire-core-compat",[Qm]:"fire-analytics",[Xm]:"fire-analytics-compat",[ev]:"fire-app-check",[Zm]:"fire-app-check-compat",[tv]:"fire-auth",[nv]:"fire-auth-compat",[sv]:"fire-rtdb",[rv]:"fire-rtdb-compat",[iv]:"fire-fn",[ov]:"fire-fn-compat",[av]:"fire-iid",[cv]:"fire-iid-compat",[lv]:"fire-fcm",[uv]:"fire-fcm-compat",[fv]:"fire-perf",[dv]:"fire-perf-compat",[hv]:"fire-rc",[pv]:"fire-rc-compat",[gv]:"fire-gcs",[mv]:"fire-gcs-compat",[vv]:"fire-fst",[yv]:"fire-fst-compat",[_v]:"fire-vertex","fire-js":"fire-js",[bv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Map,Iv=new Map,ki=new Map;function Ha(e,t){try{e.container.addComponent(t)}catch(n){Tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function gs(e){const t=e.name;if(ki.has(t))return Tt.debug(`There were multiple attempts to register component ${t}.`),!1;ki.set(t,e);for(const n of ur.values())Ha(n,e);for(const n of Iv.values())Ha(n,e);return!0}function Tu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function rt(e){return e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wt=new Rs("app","Firebase",Tv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Wt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=Ev;function Su(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Oi,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Wt.create("bad-app-name",{appName:String(r)});if(n||(n=yu()),!n)throw Wt.create("no-options");const i=ur.get(r);if(i){if(lr(n,i.options)&&lr(s,i.config))return i;throw Wt.create("duplicate-app",{appName:r})}const o=new Nm(r);for(const c of ki.values())o.addComponent(c);const a=new Sv(n,s,o);return ur.set(r,a),a}function Cv(e=Oi){const t=ur.get(e);if(!t&&e===Oi&&yu())return Su();if(!t)throw Wt.create("no-app",{appName:e});return t}function Nn(e,t,n){var s;let r=(s=wv[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Tt.warn(a.join(" "));return}gs(new $n(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebase-heartbeat-database",Av=1,ms="firebase-heartbeat-store";let oi=null;function Cu(){return oi||(oi=Km(Rv,Av,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ms)}catch(n){console.warn(n)}}}}).catch(e=>{throw Wt.create("idb-open",{originalErrorMessage:e.message})})),oi}async function Pv(e){try{const n=(await Cu()).transaction(ms),s=await n.objectStore(ms).get(Ru(e));return await n.done,s}catch(t){if(t instanceof Xt)Tt.warn(t.message);else{const n=Wt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Tt.warn(n.message)}}}async function ja(e,t){try{const s=(await Cu()).transaction(ms,"readwrite");await s.objectStore(ms).put(t,Ru(e)),await s.done}catch(n){if(n instanceof Xt)Tt.warn(n.message);else{const s=Wt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Tt.warn(s.message)}}}function Ru(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=1024,kv=30*24*60*60*1e3;class Nv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lv(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wa();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kv}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Tt.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wa(),{heartbeatsToSend:s,unsentEntries:r}=Dv(this._heartbeatsCache.heartbeats),i=vu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Tt.warn(n),""}}}function Wa(){return new Date().toISOString().substring(0,10)}function Dv(e,t=Ov){const n=[];let s=e.slice();for(const r of e){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Ka(n)>t){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ka(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Lv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bm()?Em().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pv(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ja(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ja(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Ka(e){return vu(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(e){gs(new $n("platform-logger",t=>new qm(t),"PRIVATE")),gs(new $n("heartbeat",t=>new Nv(t),"PRIVATE")),Nn(Pi,Va,e),Nn(Pi,Va,"esm2017"),Nn("fire-js","")}Mv("");var xv="firebase",Uv="10.13.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nn(xv,Uv,"app");function fo(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]]);return n}function Au(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fv=Au,Pu=new Rs("auth","Firebase",Au());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr=new Eu("@firebase/auth");function Bv(e,...t){fr.logLevel<=ce.WARN&&fr.warn(`Auth (${Ps}): ${e}`,...t)}function Js(e,...t){fr.logLevel<=ce.ERROR&&fr.error(`Auth (${Ps}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(e,...t){throw ho(e,...t)}function at(e,...t){return ho(e,...t)}function Ou(e,t,n){const s=Object.assign(Object.assign({},Fv()),{[t]:n});return new Rs("auth","Firebase",s).create(t,{appName:e.name})}function wt(e){return Ou(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ho(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Pu.create(e,...t)}function H(e,t,...n){if(!e)throw ho(t,...n)}function vt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Js(t),new Error(t)}function St(e,t){e||vt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function $v(){return za()==="http:"||za()==="https:"}function za(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($v()||vm()||"connection"in navigator)?navigator.onLine:!0}function Hv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(t,n){this.shortDelay=t,this.longDelay=n,St(n>t,"Short delay should be less than long delay!"),this.isMobile=mm()||_m()}get(){return Vv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t){St(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=new Os(3e4,6e4);function Zt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function en(e,t,n,s,r={}){return Nu(e,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=As(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),ku.fetch()(Du(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},i))})}async function Nu(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},jv),t);try{const r=new zv(e),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Hs(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hs(e,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Hs(e,"email-already-in-use",o);if(c==="USER_DISABLED")throw Hs(e,"user-disabled",o);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ou(e,u,l);Qe(e,u)}}catch(r){if(r instanceof Xt)throw r;Qe(e,"network-request-failed",{message:String(r)})}}async function ks(e,t,n,s,r={}){const i=await en(e,t,n,s,r);return"mfaPendingCredential"in i&&Qe(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Du(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?po(e.config,r):`${e.config.apiScheme}://${r}`}function Kv(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(at(this.auth,"network-request-failed")),Wv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hs(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=at(e,t,s);return r.customData._tokenResponse=n,r}function Ga(e){return e!==void 0&&e.enterprise!==void 0}class Gv{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return Kv(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function qv(e,t){return en(e,"GET","/v2/recaptchaConfig",Zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(e,t){return en(e,"POST","/v1/accounts:delete",t)}async function Lu(e,t){return en(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Yv(e,t=!1){const n=Qt(e),s=await n.getIdToken(t),r=go(s);H(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:is(ai(r.auth_time)),issuedAtTime:is(ai(r.iat)),expirationTime:is(ai(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ai(e){return Number(e)*1e3}function go(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return Js("JWT malformed, contained fewer than 3 sections"),null;try{const r=_u(n);return r?JSON.parse(r):(Js("Failed to decode base64 JWT payload"),null)}catch(r){return Js("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function qa(e){const t=go(e);return H(t,"internal-error"),H(typeof t.exp<"u","internal-error"),H(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Xt&&Xv(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}function Xv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=is(this.lastLoginAt),this.creationTime=is(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dr(e){var t;const n=e.auth,s=await e.getIdToken(),r=await vs(e,Lu(n,{idToken:s}));H(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?Mu(i.providerUserInfo):[],a=e_(e.providerData,o),c=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Di(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(e,d)}async function Zv(e){const t=Qt(e);await dr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function e_(e,t){return[...e.filter(s=>!t.some(r=>r.providerId===s.providerId)),...t]}function Mu(e){return e.map(t=>{var{providerId:n}=t,s=fo(t,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t_(e,t){const n=await Nu(e,{},async()=>{const s=As({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,o=Du(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ku.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function n_(e,t){return en(e,"POST","/v2/accounts:revokeToken",Zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){H(t.idToken,"internal-error"),H(typeof t.idToken<"u","internal-error"),H(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qa(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){H(t.length!==0,"internal-error");const n=qa(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await t_(t,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Dn;return s&&(H(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(H(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(H(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Dn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e,t){H(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class _t{constructor(t){var{uid:n,auth:s,stsTokenManager:r}=t,i=fo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Qv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Di(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await vs(this,this.stsTokenManager.getToken(this.auth,t));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Yv(this,t)}reload(){return Zv(this)}_assign(t){this!==t&&(H(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new _t(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await dr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(wt(this.auth));const t=await this.getIdToken();return await vs(this,Jv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,r,i,o,a,c,l,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(a=n.tenantId)!==null&&a!==void 0?a:void 0,B=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:P,isAnonymous:V,providerData:Z,stsTokenManager:q}=n;H(L&&q,t,"internal-error");const W=Dn.fromJSON(this.name,q);H(typeof L=="string",t,"internal-error"),Nt(d,t.name),Nt(p,t.name),H(typeof P=="boolean",t,"internal-error"),H(typeof V=="boolean",t,"internal-error"),Nt(g,t.name),Nt(w,t.name),Nt(A,t.name),Nt(B,t.name),Nt(M,t.name),Nt(D,t.name);const S=new _t({uid:L,auth:t,email:p,emailVerified:P,displayName:d,isAnonymous:V,photoURL:w,phoneNumber:g,tenantId:A,stsTokenManager:W,createdAt:M,lastLoginAt:D});return Z&&Array.isArray(Z)&&(S.providerData=Z.map(K=>Object.assign({},K))),B&&(S._redirectEventId=B),S}static async _fromIdTokenResponse(t,n,s=!1){const r=new Dn;r.updateFromServerResponse(n);const i=new _t({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await dr(i),i}static async _fromGetAccountInfoResponse(t,n,s){const r=n.users[0];H(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Mu(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new Dn;a.updateFromIdToken(s);const c=new _t({uid:r.localId,auth:t,stsTokenManager:a,isAnonymous:o}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Di(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new Map;function yt(e){St(e instanceof Function,"Expected a class definition");let t=Ja.get(e);return t?(St(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ja.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xu.type="NONE";const Ya=xu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e,t,n){return`firebase:${e}:${t}:${n}`}class Ln{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ys(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ys("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?_t._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Ln(yt(Ya),t,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||yt(Ya);const o=Ys(s,t.config.apiKey,t.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const d=_t._fromJSON(t,u);l!==i&&(a=d),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Ln(i,t,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Ln(i,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if($u(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Uu(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hu(t))return"Blackberry";if(ju(t))return"Webos";if(Fu(t))return"Safari";if((t.includes("chrome/")||Bu(t))&&!t.includes("edge/"))return"Chrome";if(Vu(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Uu(e=Re()){return/firefox\//i.test(e)}function Fu(e=Re()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bu(e=Re()){return/crios\//i.test(e)}function $u(e=Re()){return/iemobile/i.test(e)}function Vu(e=Re()){return/android/i.test(e)}function Hu(e=Re()){return/blackberry/i.test(e)}function ju(e=Re()){return/webos/i.test(e)}function mo(e=Re()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function s_(e=Re()){var t;return mo(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function r_(){return ym()&&document.documentMode===10}function Wu(e=Re()){return mo(e)||Vu(e)||ju(e)||Hu(e)||/windows phone/i.test(e)||$u(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ku(e,t=[]){let n;switch(e){case"Browser":n=Xa(Re());break;case"Worker":n=`${Xa(Re())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ps}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=i=>new Promise((o,a)=>{try{const c=t(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(e,t={}){return en(e,"GET","/v2/passwordPolicy",Zt(e,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=6;class c_{constructor(t){var n,s,r,i;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:a_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=t.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,c),this.validatePasswordCharacterOptions(t,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),r&&(n.meetsMaxPasswordLength=t.length<=r)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<t.length;r++)s=t.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,n,s,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qa(this),this.idTokenSubscription=new Qa(this),this.beforeStateQueue=new i_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await Ln.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Lu(this,{idToken:t}),s=await _t._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var n;if(rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(t);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await dr(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Hv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(rt(this.app))return Promise.reject(wt(this));const n=t?Qt(t):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&H(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return rt(this.app)?Promise.reject(wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await o_(this),n=new c_(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Rs("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await n_(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Ln.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=t.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=t.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ku(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&Bv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vn(e){return Qt(e)}class Qa{constructor(t){this.auth=t,this.observer=null,this.addObserver=Cm(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function u_(e){xr=e}function zu(e){return xr.loadJS(e)}function f_(){return xr.recaptchaEnterpriseScript}function d_(){return xr.gapiScript}function h_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const p_="recaptcha-enterprise",g_="NO_RECAPTCHA";class m_{constructor(t){this.type=p_,this.auth=vn(t)}async verify(t="verify",n=!1){async function s(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{qv(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Gv(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;Ga(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:t}).then(l=>{o(l)}).catch(()=>{o(g_)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{s(this.auth).then(a=>{if(!n&&Ga(window.grecaptcha))r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=f_();c.length!==0&&(c+=a),zu(c).then(()=>{r(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Za(e,t,n,s=!1){const r=new m_(e);let i;try{i=await r.verify(n)}catch{i=await r.verify(n,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Li(e,t,n,s){var r;if(!((r=e._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Za(e,t,n,n==="getOobCode");return s(e,i)}else return s(e,t).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Za(e,t,n,n==="getOobCode");return s(e,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v_(e,t){const n=Tu(e,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(lr(i,t??{}))return r;Qe(r,"already-initialized")}return n.initialize({options:t})}function __(e,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function y_(e,t,n){const s=vn(e);H(s._canInitEmulator,s,"emulator-config-failed"),H(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!1,i=Gu(t),{host:o,port:a}=b_(t),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),E_()}function Gu(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function b_(e){const t=Gu(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:ec(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:ec(o)}}}function ec(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function E_(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(t){return vt("not implemented")}_linkToIdToken(t,n){return vt("not implemented")}_getReauthenticationResolver(t){return vt("not implemented")}}async function w_(e,t){return en(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(e,t){return ks(e,"POST","/v1/accounts:signInWithPassword",Zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T_(e,t){return ks(e,"POST","/v1/accounts:signInWithEmailLink",Zt(e,t))}async function S_(e,t){return ks(e,"POST","/v1/accounts:signInWithEmailLink",Zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s extends vo{constructor(t,n,s,r=null){super("password",s),this._email=t,this._password=n,this._tenantId=r}static _fromEmailAndPassword(t,n){return new _s(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new _s(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Li(t,n,"signInWithPassword",I_);case"emailLink":return T_(t,{email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Li(t,s,"signUpPassword",w_);case"emailLink":return S_(t,{idToken:n,email:this._email,oobCode:this._password});default:Qe(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t){return ks(e,"POST","/v1/accounts:signInWithIdp",Zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="http://localhost";class pn extends vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Qe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=n,i=fo(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new pn(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const n=this.buildRequest();return Mn(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Mn(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Mn(t,n)}buildRequest(){const t={requestUri:C_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=As(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A_(e){const t=qn(Jn(e)).link,n=t?qn(Jn(t)).deep_link_id:null,s=qn(Jn(e)).deep_link_id;return(s?qn(Jn(s)).link:null)||s||n||t||e}class _o{constructor(t){var n,s,r,i,o,a;const c=qn(Jn(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(s=c.oobCode)!==null&&s!==void 0?s:null,d=R_((r=c.mode)!==null&&r!==void 0?r:null);H(l&&u&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=A_(t);try{return new _o(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(){this.providerId=Hn.PROVIDER_ID}static credential(t,n){return _s._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=_o.parseLink(n);return H(s,"argument-error"),_s._fromEmailAndCode(t,s.code,s.tenantId)}}Hn.PROVIDER_ID="password";Hn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns extends qu{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ns{constructor(){super("facebook.com")}static credential(t){return pn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ft.credential(t.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Ns{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return pn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Bt.credential(n,s)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Ns{constructor(){super("github.com")}static credential(t){return pn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Ns{constructor(){super("twitter.com")}static credential(t,n){return pn._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Vt.credentialFromTaggedObject(t)}static credentialFromError(t){return Vt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Vt.credential(n,s)}catch{return null}}}Vt.TWITTER_SIGN_IN_METHOD="twitter.com";Vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P_(e,t){return ks(e,"POST","/v1/accounts:signUp",Zt(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,r=!1){const i=await _t._fromIdTokenResponse(t,s,r),o=tc(s);return new gn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const r=tc(s);return new gn({user:t,providerId:r,_tokenResponse:s,operationType:n})}}function tc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Xt{constructor(t,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,r){return new hr(t,n,s,r)}}function Ju(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(e,i,t,s):i})}async function O_(e,t,n=!1){const s=await vs(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gn._forOperation(e,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k_(e,t,n=!1){const{auth:s}=e;if(rt(s.app))return Promise.reject(wt(s));const r="reauthenticate";try{const i=await vs(e,Ju(s,r,t,e),n);H(i.idToken,s,"internal-error");const o=go(i.idToken);H(o,s,"internal-error");const{sub:a}=o;return H(e.uid===a,s,"user-mismatch"),gn._forOperation(e,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Qe(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(e,t,n=!1){if(rt(e.app))return Promise.reject(wt(e));const s="signIn",r=await Ju(e,s,t),i=await gn._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}async function N_(e,t){return Yu(vn(e),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xu(e){const t=vn(e);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function cb(e,t,n){if(rt(e.app))return Promise.reject(wt(e));const s=vn(e),o=await Li(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",P_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Xu(e),c}),a=await gn._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(a.user),a}function lb(e,t,n){return rt(e.app)?Promise.reject(wt(e)):N_(Qt(e),Hn.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Xu(e),s})}function D_(e,t,n,s){return Qt(e).onIdTokenChanged(t,n,s)}function L_(e,t,n){return Qt(e).beforeAuthStateChanged(t,n)}function ub(e){return Qt(e).signOut()}const pr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pr,"1"),this.storage.removeItem(pr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=1e3,x_=10;class Zu extends Qu{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wu(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&t(n,r,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=t.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);r_()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,x_):r()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},M_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Zu.type="LOCAL";const U_=Zu;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends Qu{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}ef.type="SESSION";const tf=ef;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const s=new Ur(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await F_(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ur.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=yo("",20);r.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function $_(e){ct().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function V_(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function H_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function j_(){return nf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf="firebaseLocalStorageDb",W_=1,gr="firebaseLocalStorage",rf="fbase_key";class Ds{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fr(e,t){return e.transaction([gr],t?"readwrite":"readonly").objectStore(gr)}function K_(){const e=indexedDB.deleteDatabase(sf);return new Ds(e).toPromise()}function Mi(){const e=indexedDB.open(sf,W_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(gr,{keyPath:rf})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(gr)?t(s):(s.close(),await K_(),t(await Mi()))})})}async function nc(e,t,n){const s=Fr(e,!0).put({[rf]:t,value:n});return new Ds(s).toPromise()}async function z_(e,t){const n=Fr(e,!1).get(t),s=await new Ds(n).toPromise();return s===void 0?null:s.value}function sc(e,t){const n=Fr(e,!0).delete(t);return new Ds(n).toPromise()}const G_=800,q_=3;class of{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>q_)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ur._getInstance(j_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await V_(),!this.activeServiceWorker)return;this.sender=new B_(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||H_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Mi();return await nc(t,pr,"1"),await sc(t,pr),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nc(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>z_(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>sc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=Fr(r,!1).getAll();return new Ds(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}of.type="LOCAL";const J_=of;new Os(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(e,t){return t?yt(t):(H(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo extends vo{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Mn(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Mn(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Mn(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function X_(e){return Yu(e.auth,new bo(e),e.bypassAuthState)}function Q_(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),k_(n,new bo(e),e.bypassAuthState)}async function Z_(e){const{auth:t,user:n}=e;return H(n,t,"internal-error"),O_(n,new bo(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(t,n,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return X_;case"linkViaPopup":case"linkViaRedirect":return Z_;case"reauthViaPopup":case"reauthViaRedirect":return Q_;default:Qe(this.auth,"internal-error")}}resolve(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){St(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new Os(2e3,1e4);class Cn extends af{constructor(t,n,s,r,i){super(t,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Cn.currentPopupAction&&Cn.currentPopupAction.cancel(),Cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return H(t,this.auth,"internal-error"),t}async onExecution(){St(this.filter.length===1,"Popup operations only handle one event");const t=yo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,ey.get())};t()}}Cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="pendingRedirect",Xs=new Map;class ny extends af{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Xs.get(this.auth._key());if(!t){try{const s=await sy(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Xs.set(this.auth._key(),t)}return this.bypassAuthState||Xs.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sy(e,t){const n=oy(t),s=iy(e);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function ry(e,t){Xs.set(e._key(),t)}function iy(e){return yt(e._redirectPersistence)}function oy(e){return Ys(ty,e.config.apiKey,e.name)}async function ay(e,t,n=!1){if(rt(e.app))return Promise.reject(wt(e));const s=vn(e),r=Y_(s,t),o=await new ny(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=10*60*1e3;class ly{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!uy(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!cf(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(at(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=cy&&this.cachedEventUids.clear(),this.cachedEventUids.has(rc(t))}saveEventToCache(t){this.cachedEventUids.add(rc(t)),this.lastProcessedEventTime=Date.now()}}function rc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function cf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function uy(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fy(e,t={}){return en(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hy=/^https?/;async function py(e){if(e.config.emulator)return;const{authorizedDomains:t}=await fy(e);for(const n of t)try{if(gy(n))return}catch{}Qe(e,"unauthorized-domain")}function gy(e){const t=Ni(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const o=new URL(e);return o.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!hy.test(n))return!1;if(dy.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my=new Os(3e4,6e4);function ic(){const e=ct().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function vy(e){return new Promise((t,n)=>{var s,r,i;function o(){ic(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ic(),n(at(e,"network-request-failed"))},timeout:my.get()})}if(!((r=(s=ct().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else if(!((i=ct().gapi)===null||i===void 0)&&i.load)o();else{const a=h_("iframefcb");return ct()[a]=()=>{gapi.load?o():n(at(e,"network-request-failed"))},zu(`${d_()}?onload=${a}`).catch(c=>n(c))}}).catch(t=>{throw Qs=null,t})}let Qs=null;function _y(e){return Qs=Qs||vy(e),Qs}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Os(5e3,15e3),by="__/auth/iframe",Ey="emulator/auth/iframe",wy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Iy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ty(e){const t=e.config;H(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?po(t,Ey):`https://${e.config.authDomain}/${by}`,s={apiKey:t.apiKey,appName:e.name,v:Ps},r=Iy.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${As(s).slice(1)}`}async function Sy(e){const t=await _y(e),n=ct().gapi;return H(n,e,"internal-error"),t.open({where:document.body,url:Ty(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wy,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=at(e,"network-request-failed"),a=ct().setTimeout(()=>{i(o)},yy.get());function c(){ct().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ry=500,Ay=600,Py="_blank",Oy="http://localhost";class oc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ky(e,t,n,s=Ry,r=Ay){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cy),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Re().toLowerCase();n&&(a=Bu(l)?Py:n),Uu(l)&&(t=t||Oy,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[g,w])=>`${p}${g}=${w},`,"");if(s_(l)&&a!=="_self")return Ny(t||"",a),new oc(null);const d=window.open(t||"",a,u);H(d,e,"popup-blocked");try{d.focus()}catch{}return new oc(d)}function Ny(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="__/auth/handler",Ly="emulator/auth/handler",My=encodeURIComponent("fac");async function ac(e,t,n,s,r,i){H(e.config.authDomain,e,"auth-domain-config-required"),H(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Ps,eventId:r};if(t instanceof qu){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",Sm(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(t instanceof Ns){const u=t.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await e._getAppCheckToken(),l=c?`#${My}=${encodeURIComponent(c)}`:"";return`${xy(e)}?${As(a).slice(1)}${l}`}function xy({config:e}){return e.emulator?po(e,Ly):`https://${e.authDomain}/${Dy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="webStorageSupport";class Uy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tf,this._completeRedirectFn=ay,this._overrideRedirectResult=ry}async _openPopup(t,n,s,r){var i;St((i=this.eventManagers[t._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ac(t,n,s,Ni(),r);return ky(t,o,yo())}async _openRedirect(t,n,s,r){await this._originValidation(t);const i=await ac(t,n,s,Ni(),r);return $_(i),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(St(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await Sy(t),s=new ly(t);return n.register("authEvent",r=>(H(r==null?void 0:r.authEvent,t,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ci,{type:ci},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[ci];o!==void 0&&n(!!o),Qe(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=py(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wu()||Fu()||mo()}}const Fy=Uy;var cc="@firebase/auth",lc="1.7.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vy(e){gs(new $n("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),i=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ku(e)},l=new l_(s,r,i,c);return __(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),gs(new $n("auth-internal",t=>{const n=vn(t.getProvider("auth").getImmediate());return(s=>new By(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Nn(cc,lc,$y(e)),Nn(cc,lc,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=5*60,jy=bu("authIdTokenMaxAge")||Hy;let uc=null;const Wy=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jy)return;const r=n==null?void 0:n.token;uc!==r&&(uc=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Ky(e=Cv()){const t=Tu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=v_(e,{popupRedirectResolver:Fy,persistence:[J_,U_,tf]}),s=bu("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(s,location.origin);if(location.origin===i.origin){const o=Wy(i.toString());L_(n,o,()=>o(n.currentUser)),D_(n,a=>o(a))}}const r=pm("auth");return r&&y_(n,`http://${r}`),n}function zy(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}u_({loadJS(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=r=>{const i=at("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",zy().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vy("Browser");const Gy={apiKey:"AIzaSyDcAlFflAgTtW4vRGK4jbTz_D9D4B441EY",authDomain:"vue-todo-app-f5900.firebaseapp.com",projectId:"vue-todo-app-f5900",storageBucket:"vue-todo-app-f5900.appspot.com",messagingSenderId:"311935554567",appId:"1:311935554567:web:701f9dee1089f82ac846a2",measurementId:"G-KNYVMWGVF2"},qy=Su(Gy),fb=Ky(qy),Br=kl(Zp);Br.use(Gh());Br.use(qp);Br.use(om);Br.mount("#app");export{nb as A,he as B,tb as C,ib as D,sb as E,Gr as F,_e as G,Do as H,zt as I,be as J,rb as K,Zy as L,$h as M,eb as N,bs as O,vd as P,eo as Q,Ke as R,Jp as _,wr as a,Ec as b,Jy as c,wf as d,Be as e,Qy as f,io as g,ab as h,ob as i,lb as j,fb as k,cb as l,ub as m,Is as n,Zi as o,de as p,$e as q,xc as r,Wf as s,Yy as t,ln as u,mn as v,Zn as w,Ar as x,Vi as y,Xy as z};
