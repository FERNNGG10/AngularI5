import{a as k}from"./chunk-SGIEY5O7.js";import{a as I}from"./chunk-5BRVOJ4S.js";import{a as T,b as p,c as D,d as M,e as q,f as V,g as P,k as N,l as A,m as G}from"./chunk-JCGB7RHH.js";import"./chunk-B56ZGRNC.js";import{d as S,e as E,k as y,l as L}from"./chunk-NGLC2CXL.js";import{Ga as c,Ia as d,Ka as g,La as o,Ma as i,Na as _,Qa as C,Ra as x,Sa as m,Xa as a,Y as w,Za as F,ab as b,ea as f,fa as v,ua as r,va as h}from"./chunk-SYTZFNVP.js";function B(t,n){if(t&1&&(o(0,"div",0),a(1),i()),t&2){let e=m();r(),F(" ",e.errorMsg,`
`)}}function R(t,n){if(t&1&&(o(0,"div",1),a(1),i()),t&2){let e=m();r(),F(" ",e.msg," ")}}function j(t,n){t&1&&(o(0,"div"),a(1,"El correo electr\xF3nico es requerido"),i())}function z(t,n){t&1&&(o(0,"div"),a(1,"El correo electr\xF3nico debe ser v\xE1lido"),i())}function Z(t,n){t&1&&(o(0,"div"),a(1,"El correo electr\xF3nico debe ser de Gmail"),i())}function O(t,n){if(t&1&&(o(0,"div",21),c(1,j,2,0,"div",22)(2,z,2,0,"div",22)(3,Z,2,0,"div",22),i()),t&2){let e=m(2);r(),d("ngIf",e.loginForm.controls.email.errors==null?null:e.loginForm.controls.email.errors.required),r(),d("ngIf",e.loginForm.controls.email.errors==null?null:e.loginForm.controls.email.errors.email),r(),d("ngIf",e.loginForm.controls.email.errors==null?null:e.loginForm.controls.email.errors.pattern)}}function $(t,n){t&1&&(o(0,"div"),a(1,"La contrase\xF1a es requerida"),i())}function H(t,n){if(t&1&&(o(0,"div",21),c(1,$,2,0,"div",22),i()),t&2){let e=m(2);r(),d("ngIf",e.loginForm.controls.password.errors==null?null:e.loginForm.controls.password.errors.required)}}function J(t,n){if(t&1){let e=C();o(0,"form",11),x("ngSubmit",function(){f(e);let s=m();return v(s.login())}),o(1,"div",12)(2,"label",13),a(3,"Correo electr\xF3nico"),i(),_(4,"input",14),c(5,O,4,3,"div",15),i(),o(6,"div",12)(7,"label",16),a(8,"Contrase\xF1a"),i(),_(9,"input",17),c(10,H,2,1,"div",15),i(),o(11,"div",12)(12,"input",18),x("change",function(){f(e);let s=m();return v(s.toggleShowPassword())}),i(),o(13,"label",19),a(14,"Mostrar contrase\xF1a"),i()(),o(15,"button",20),a(16,"Iniciar sesi\xF3n"),i()()}if(t&2){let e=m();d("formGroup",e.loginForm),r(5),d("ngIf",e.loginForm.controls.email.invalid&&(e.loginForm.controls.email.dirty||e.loginForm.controls.email.touched)),r(4),d("type",e.showPassword?"text":"password"),r(),d("ngIf",e.loginForm.controls.password.invalid&&(e.loginForm.controls.password.dirty||e.loginForm.controls.password.touched)),r(5),d("disabled",e.loginForm.invalid||e.buttonDisabled)}}function K(t,n){t&1&&(o(0,"div"),a(1,"El codigo es requerido"),i())}function Q(t,n){t&1&&(o(0,"div"),a(1,"El codigo debe tener al menos 6 caracteres"),i())}function U(t,n){t&1&&(o(0,"div"),a(1,"El codigo no puede tener m\xE1s de 6 caracteres"),i())}function W(t,n){t&1&&(o(0,"div"),a(1,"El codigo debe ser un n\xFAmero de 6 d\xEDgitos"),i())}function X(t,n){if(t&1&&(o(0,"div",21),c(1,K,2,0,"div",22)(2,Q,2,0,"div",22)(3,U,2,0,"div",22)(4,W,2,0,"div",22),i()),t&2){let e=m(2);r(),d("ngIf",e.codeForm.controls.code.errors==null?null:e.codeForm.controls.code.errors.required),r(),d("ngIf",e.codeForm.controls.code.errors==null?null:e.codeForm.controls.code.errors.minLength),r(),d("ngIf",e.codeForm.controls.code.errors==null?null:e.codeForm.controls.code.errors.maxLength),r(),d("ngIf",e.codeForm.controls.code.errors==null?null:e.codeForm.controls.code.errors.pattern)}}function Y(t,n){if(t&1){let e=C();o(0,"form",11),x("ngSubmit",function(){f(e);let s=m();return v(s.verifycode())}),o(1,"div",12)(2,"label",23),a(3,"Codigo de autorizacion"),i(),_(4,"input",24),c(5,X,5,4,"div",15),i(),o(6,"button",20),a(7,"Verificar"),i()()}if(t&2){let e=m();d("formGroup",e.codeForm),r(5),d("ngIf",e.codeForm.controls.code.invalid&&(e.codeForm.controls.code.dirty||e.codeForm.controls.code.touched)),r(),d("disabled",e.codeForm.invalid)}}var se=(()=>{let n=class n{constructor(l,s,u){this.authService=l,this.formBuilder=s,this.router=u,this.showCode=!1,this.showPassword=!1,this.buttonDisabled=!1,this.errorMsg="",this.msg="",this.loginData={email:"",password:""},this.codeData={email:"",password:"",code:""},this.loginForm=this.formBuilder.group({email:[this.loginData.email,[p.required,p.email,p.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],password:[this.loginData.password,[p.required]]}),this.codeForm=this.formBuilder.group({code:[this.codeData.code,[p.required,p.minLength(6),p.maxLength(6),p.pattern(/^[0-9]{6}$/)]]})}login(){this.loginForm.valid&&(this.loginData=this.loginForm.value,this.authService.login(this.loginData).subscribe(l=>{this.showCode=!0,console.log(l),this.msg=l.msg,setTimeout(()=>{this.msg=""},3e3)},l=>{console.log(l),console.log(l.error.error),this.errorMsg=l.error.error,console.log(this.errorMsg),setTimeout(()=>{this.errorMsg=""},3e3)}),this.buttonDisabled=!0,setTimeout(()=>{this.buttonDisabled=!1},3e3))}verifycode(){this.codeData.code=this.codeForm.value.code,this.codeData.email=this.loginData.email,this.codeData.password=this.loginData.password,this.authService.verifyCode(this.codeData).subscribe(l=>{console.log(l),localStorage.setItem("token",l.access_token),this.router.navigate(["/lifeplants/home"])},l=>{this.errorMsg=l.error,console.log(l),console.log(l.error),setTimeout(()=>{this.errorMsg=""},3e3)})}toggleShowPassword(){this.showPassword=!this.showPassword}};n.\u0275fac=function(s){return new(s||n)(h(I),h(A),h(y))},n.\u0275cmp=w({type:n,selectors:[["app-login"]],standalone:!0,features:[b],decls:18,vars:4,consts:[["role","alert",1,"alert","alert-danger"],["role","alert",1,"alert","alert-success"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-header","text-white","text-center"],[1,"card-body"],[3,"formGroup"],[1,"card-footer","text-center"],["routerLink","/registro"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","inputEmail",1,"form-label"],["type","email","id","inputEmail","name","email","formControlName","email","placeholder","Email","required","",1,"form-control"],["class","text-danger",4,"ngIf"],["for","inputPassword",1,"form-label"],["id","inputPassword","name","password","required","","formControlName","password","placeholder","Contrase\xF1a",1,"form-control",3,"type"],["type","checkbox","id","showPassword",3,"change"],["for","showPassword",1,"form-label"],[1,"btn","text-white","w-100",3,"disabled"],[1,"text-danger"],[4,"ngIf"],["for","code",1,"form-label"],["type","text","id","code","name","code","placeholder","Ingresa el codigo","formControlName","code","required","",1,"form-control"]],template:function(s,u){s&1&&(_(0,"app-no-login-nav-bar"),c(1,B,2,1,"div",0)(2,R,2,1,"div",1),o(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h3"),a(9,"Iniciar sesi\xF3n"),i()(),o(10,"div",7),c(11,J,17,5,"form",8)(12,Y,8,3,"form",8),i(),o(13,"div",9)(14,"p"),a(15,"\xBFAun no tienes cuenta? "),o(16,"a",10),a(17,"Registrate"),i()()()()()()()),s&2&&(r(),g(1,u.errorMsg?1:-1),r(),g(2,u.msg?2:-1),r(9),g(11,u.showCode?-1:11),r(),g(12,u.showCode?12:-1))},dependencies:[k,L,E,S,G,q,T,D,M,N,V,P],styles:[".card-header[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]{background-color:#00c881}"]});let t=n;return t})();export{se as LoginComponent};
