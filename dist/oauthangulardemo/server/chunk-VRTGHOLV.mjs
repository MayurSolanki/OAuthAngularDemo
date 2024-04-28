import './polyfills.server.mjs';
import{B as l,C as B,E as w,F as K,a as c,b as h,c as u,d as a,e as i,f,g as C,h as s,i as g,j as y,k as v,r as k,t as b,u as _,x}from"./chunk-C3XCVOGG.mjs";var m=(()=>{let e=class e{constructor(){this.title="oauthangulardemo"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=c({type:e,selectors:[["app-root"]],standalone:!0,features:[v],decls:1,vars:0,template:function(o,r){o&1&&f(0,"router-outlet")},dependencies:[B]});let n=e;return n})();var I=(()=>{let e=class e{constructor(t){this.route=t,this.oauthConsumerKeyy="",this.successCallBack="",this.countdown=10,this.dataString=""}ngOnInit(){this.route.queryParams.subscribe(t=>{console.log("params",t);let o=t.oauth_consumer_key,r=t.oauth_consumer_secret,p=t.store_base_url,d=t.oauth_verifier;this.oauthConsumerKeyy=t.oauth_consumer_keyy,this.successCallBack=t.success_call_back,console.log("params",t),console.log("oauthConsumerKey",o),console.log("oauthConsumerSecret",r),console.log("storeBaseUrl",p),console.log("oauthVerifier",d),console.log("oauthConsumerKeyy",this.oauthConsumerKeyy),console.log("successCallBack",this.successCallBack),this.dataString=` 

      params : ${t} 

      oauthConsumerKey : ${o} 

      oauthConsumerSecret : ${r} 

      storeBaseUrl : ${p} 

      oauthVerifier : ${d} 

      oauthConsumerKeyy : ${this.oauthConsumerKeyy} 

      successCallBack : ${this.successCallBack} 

      `,this.startCountdown()})}startCountdown(){let t=setInterval(()=>{this.countdown--,this.countdown===0&&(clearInterval(t),this.successCallBack&&(window.location.href=this.successCallBack))},1e3)}};e.\u0275fac=function(o){return new(o||e)(u(l))},e.\u0275cmp=c({type:e,selectors:[["app-dashboard"]],decls:6,vars:2,template:function(o,r){o&1&&(a(0,"h1"),s(1,"dashboard works!"),i(),a(2,"div")(3,"pre"),s(4),i(),s(5),i()),o&2&&(h(4),g(r.dataString),h(),y(" Redirecting in ",r.countdown,` seconds...
`))}});let n=e;return n})();var D=(()=>{let e=class e{constructor(t,o){this.router=t,this.route=o,this.oauthConsumerKey="",this.successCallBack=""}ngOnInit(){this.route.queryParams.subscribe(t=>{this.oauthConsumerKey=t.oauth_consumer_key,this.successCallBack=t.success_call_back})}OnClick(){this.router.navigate(["/dashboard"],{queryParams:{oauth_consumer_keyy:this.oauthConsumerKey,success_call_back:this.successCallBack}})}};e.\u0275fac=function(o){return new(o||e)(u(w),u(l))},e.\u0275cmp=c({type:e,selectors:[["app-login"]],decls:5,vars:0,consts:[["mat-flat-button","","color","primary",3,"click"]],template:function(o,r){o&1&&(a(0,"h1"),s(1,"login works!"),i(),a(2,"section")(3,"button",0),C("click",function(){return r.OnClick()}),s(4," Login"),i()())}});let n=e;return n})();var M=[{path:"home",component:m},{path:"login",component:D},{path:"dashboard",component:I},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",redirectTo:"/login"}];var R={providers:[K(M),_()]};var T={providers:[x()]},$=k(R,T);var E=()=>b(m,$),et=E;export{et as a};
