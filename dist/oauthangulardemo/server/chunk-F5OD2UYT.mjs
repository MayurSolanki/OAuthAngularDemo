import './polyfills.server.mjs';
import{B as l,C as b,E as B,F as S,a as n,b as m,c as u,d as a,e as i,f as p,g as d,h as s,i as f,j as C,k as g,r as v,t as y,u as _,x as k}from"./chunk-C3XCVOGG.mjs";var h=(()=>{let e=class e{constructor(){this.title="oauthangulardemo"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n({type:e,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(o,c){o&1&&p(0,"router-outlet")},dependencies:[b]});let r=e;return r})();var w=(()=>{let e=class e{constructor(t){this.route=t,this.countdown=10,this.dataString="",this.oauthConsumerKey="",this.successCallBack="",this.oauthConsumerSecret="",this.storeBaseUrl="",this.oauthVerifier=""}ngOnInit(){this.route.queryParams.subscribe(t=>{this.oauthConsumerKey=t.oauth_consumer_keyy,this.successCallBack=t.success_call_back,this.oauthConsumerSecret=t.oauth_consumer_secret,this.storeBaseUrl=t.store_baseUrl,this.oauthVerifier=t.oauth_verifier,this.dataString=` 

      params : ${t} 

      oauthConsumerKey : ${this.oauthConsumerKey} 

      oauthConsumerSecret : ${this.oauthConsumerSecret} 

      storeBaseUrl : ${this.storeBaseUrl} 

      oauthVerifier : ${this.oauthVerifier} 

      successCallBack : ${this.successCallBack} 

      `,this.startCountdown()})}startCountdown(){let t=setInterval(()=>{this.countdown--,this.countdown===0&&(clearInterval(t),this.successCallBack&&(window.location.href=this.successCallBack))},1e3)}};e.\u0275fac=function(o){return new(o||e)(u(l))},e.\u0275cmp=n({type:e,selectors:[["app-dashboard"]],decls:6,vars:2,template:function(o,c){o&1&&(a(0,"h1"),s(1,"dashboard Page"),i(),a(2,"div")(3,"pre"),s(4),i(),s(5),i()),o&2&&(m(4),f(c.dataString),m(),C(" Redirecting in ",c.countdown,` seconds...
`))}});let r=e;return r})();var U=(()=>{let e=class e{constructor(t,o){this.router=t,this.route=o,this.oauthConsumerKey="",this.successCallBack="",this.oauthConsumerSecret="",this.storeBaseUrl="",this.oauthVerifier=""}ngOnInit(){this.route.queryParams.subscribe(t=>{this.oauthConsumerKey=t.oauth_consumer_key,this.successCallBack=t.success_call_back,this.oauthConsumerSecret=t.oauth_consumer_secret,this.storeBaseUrl=t.store_base_url,this.oauthVerifier=t.oauth_verifier,console.log("oauthConsumerKey",this.oauthConsumerKey),console.log("successCallBack",this.successCallBack),console.log("oauthConsumerSecret",this.oauthConsumerSecret),console.log("storeBaseUrl",this.storeBaseUrl),console.log("oauthVerifier",this.oauthVerifier)})}OnClick(){this.router.navigate(["/dashboard"],{queryParams:{oauth_consumer_key:this.oauthConsumerKey,success_call_back:this.successCallBack,oauth_consumer_secret:this.oauthConsumerSecret,store_baseUrl:this.storeBaseUrl,oauth_verifier:this.oauthVerifier}})}};e.\u0275fac=function(o){return new(o||e)(u(B),u(l))},e.\u0275cmp=n({type:e,selectors:[["app-login"]],decls:5,vars:0,consts:[["mat-flat-button","","color","primary",3,"click"]],template:function(o,c){o&1&&(a(0,"h1"),s(1,"login works!"),i(),a(2,"section")(3,"button",0),d("click",function(){return c.OnClick()}),s(4," Login"),i()())}});let r=e;return r})();var I=[{path:"home",component:h},{path:"login",component:U},{path:"dashboard",component:w},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",redirectTo:"/login"}];var K={providers:[S(I),_()]};var M={providers:[k()]},V=v(K,M);var R=()=>y(h,V),tt=R;export{tt as a};
