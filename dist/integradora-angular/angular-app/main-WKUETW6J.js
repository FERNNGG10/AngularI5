import{a as x,b as E,c as h,e as w,f as R}from"./chunk-E7ZUTVDQ.js";import{a as l}from"./chunk-FKG64SIN.js";import{q as b,r as k}from"./chunk-U4WR533Z.js";import{Oa as j,P as u,U as n,Y as I,db as y,n as f,o as A,r as s,y as m}from"./chunk-M4ZKV64V.js";var p=(()=>{let o=class o{constructor(e,r){this.router=e,this.auth=r}canActivate(e,r){return this.auth.isauth().pipe(s(i=>i.status===200?!0:(this.router.navigate(["/login"]),!1)),m(i=>(console.error(i),this.router.navigate(["/login"]),f(!1))))}};o.\u0275fac=function(r){return new(r||o)(n(h),n(l))},o.\u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var F=(()=>{let o=class o{constructor(e,r){this.router=e,this.auth=r}canActivate(e,r){return this.auth.checkRol().pipe(s(i=>i===2?!0:(this.router.navigate(["/lifeplants/home"]),!1)))}};o.\u0275fac=function(r){return new(r||o)(n(h),n(l))},o.\u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var c=(()=>{let o=class o{constructor(e,r){this.router=e,this.auth=r}canActivate(e,r){return this.auth.checkActive().pipe(s(i=>i===1?!0:(this.router.navigate(["/login"]),!1)),m(i=>(console.error(i),this.router.navigate(["/login"]),f(!1))))}};o.\u0275fac=function(r){return new(r||o)(n(h),n(l))},o.\u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var C=(()=>{let o=class o{constructor(e,r){this.router=e,this.auth=r}canActivate(e,r){return this.auth.isauth().pipe(s(i=>i.status===200?(this.router.navigate(["/lifeplants/home"]),!1):!0),m(i=>(console.error(i),f(!0))))}};o.\u0275fac=function(r){return new(r||o)(n(h),n(l))},o.\u0275prov=u({token:o,factory:o.\u0275fac,providedIn:"root"});let t=o;return t})();var M=[{path:"lifeplants",loadComponent:()=>import("./chunk-4AK5TBDX.js").then(t=>t.LoginNavBarComponent),canActivate:[c,p],children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",loadComponent:()=>import("./chunk-K3P2SJYE.js").then(t=>t.HomeComponent),canActivate:[c,p]},{path:"plants",loadComponent:()=>import("./chunk-4PQSIVJZ.js").then(t=>t.PlantsComponent),canActivate:[p,c]},{path:"plant/:id",loadComponent:()=>import("./chunk-Z3PZDQRD.js").then(t=>t.PlantComponent),canActivate:[p,c]},{path:"users",loadComponent:()=>import("./chunk-VIX3L7LY.js").then(t=>t.UsersComponent),canActivate:[p,F,c]},{path:"about",loadComponent:()=>import("./chunk-Q44AVL5M.js").then(t=>t.AboutComponent),canActivate:[p,c]},{path:"perfil",loadComponent:()=>import("./chunk-I3MEDLZD.js").then(t=>t.ProfileComponent),canActivate:[p,c]},{path:"historial",loadComponent:()=>import("./chunk-TFLV7IKX.js").then(t=>t.HistorialComponent),canActivate:[p,c]}]},{path:"login",loadComponent:()=>import("./chunk-XYSPA7FF.js").then(t=>t.LoginComponent),canActivate:[C]},{path:"registro",loadComponent:()=>import("./chunk-EMI3QOVO.js").then(t=>t.RegisterComponent),canActivate:[C]},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",loadComponent:()=>import("./chunk-W53QEC75.js").then(t=>t.NotfoundComponent)}];var S=(t,o)=>{let a=localStorage.getItem("token"),e=t.headers;return a&&(e=e.set("Authorization","Bearer "+a)),e=e.set("Content-Type","application/json"),t=t.clone({headers:e}),console.log(t.headers),o(t)};var T=(t,o)=>o(t).pipe(m(a=>(console.log("Error Code: "+a+" Error Message: "+a.message),a.status===401&&console.log("Error Code: "+a.status+" Error Message: "+a.message),A(a))));var B={providers:[w(M,R()),b(k([S,T]))]};var H=(()=>{let o=class o{constructor(){this.title="IntegradoraAngular"}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=I({type:o,selectors:[["app-root"]],standalone:!0,features:[y],decls:1,vars:0,template:function(r,i){r&1&&j(0,"router-outlet")},dependencies:[E]});let t=o;return t})();x(H,B).catch(t=>console.error(t));
