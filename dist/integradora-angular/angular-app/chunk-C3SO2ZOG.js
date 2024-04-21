import{a as A}from"./chunk-7VXPXGV5.js";import{c as S,d as y}from"./chunk-RHMV3US2.js";import{a as I}from"./chunk-HJVEYBOB.js";import{a as R,b as d,c as T,d as q,e as N,f as D,g as L,k as P,l as M,m as k}from"./chunk-IPELWIB7.js";import{j as C,k as E}from"./chunk-LYJN6XNL.js";import{Ga as c,Ia as s,La as n,Ma as i,Na as g,P as F,Ra as _,Sa as p,Xa as a,Y as w,Ya as h,Za as x,ab as b,ua as o,va as f}from"./chunk-SYTZFNVP.js";var V=(()=>{let r=class r{constructor(){this.message=""}setMessage(m){this.message=m}getMessage(){let m=this.message;return this.message="",m}clearMessage(){this.message=""}};r.\u0275fac=function(u){return new(u||r)},r.\u0275prov=F({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function B(e,r){if(e&1&&(n(0,"li"),a(1),i()),e&2){let t=p(2);o(),x("<",t.errors.name,"")}}function G(e,r){if(e&1&&(n(0,"li"),a(1),i()),e&2){let t=p(2);o(),h(t.errors.email)}}function Z(e,r){if(e&1&&(n(0,"li"),a(1),i()),e&2){let t=p(2);o(),h(t.errors.password)}}function O(e,r){if(e&1&&(n(0,"div",24),c(1,B,2,1,"li",25)(2,G,2,1,"li",25)(3,Z,2,1,"li",25),i()),e&2){let t=p();o(),s("ngIf",t.errors.name),o(),s("ngIf",t.errors.email),o(),s("ngIf",t.errors.password)}}function $(e,r){if(e&1&&(n(0,"div",26),a(1),i()),e&2){let t=p();o(),x(" ",t.msg,`
`)}}function Y(e,r){e&1&&(n(0,"div"),a(1,"El nombre es requerido"),i())}function H(e,r){e&1&&(n(0,"div"),a(1,"El nombre debe tener al menos 3 caracteres"),i())}function J(e,r){e&1&&(n(0,"div"),a(1,"El nombre no puede tener m\xE1s de 230 caracteres"),i())}function K(e,r){if(e&1&&(n(0,"div",27),c(1,Y,2,0,"div",25)(2,H,2,0,"div",25)(3,J,2,0,"div",25),i()),e&2){let t=p();o(),s("ngIf",t.registerForm.controls.name.errors==null?null:t.registerForm.controls.name.errors.required),o(),s("ngIf",t.registerForm.controls.name.errors==null?null:t.registerForm.controls.name.errors.minlength),o(),s("ngIf",t.registerForm.controls.name.errors==null?null:t.registerForm.controls.name.errors.maxlength)}}function Q(e,r){e&1&&(n(0,"div"),a(1,"El correo electr\xF3nico es requerido"),i())}function U(e,r){e&1&&(n(0,"div"),a(1,"El correo electr\xF3nico debe ser v\xE1lido"),i())}function W(e,r){e&1&&(n(0,"div"),a(1,"El correo electr\xF3nico debe ser de Gmail"),i())}function X(e,r){if(e&1&&(n(0,"div",27),c(1,Q,2,0,"div",25)(2,U,2,0,"div",25)(3,W,2,0,"div",25),i()),e&2){let t=p();o(),s("ngIf",t.registerForm.controls.email.errors==null?null:t.registerForm.controls.email.errors.required),o(),s("ngIf",t.registerForm.controls.email.errors==null?null:t.registerForm.controls.email.errors.email),o(),s("ngIf",t.registerForm.controls.email.errors==null?null:t.registerForm.controls.email.errors.pattern)}}function ee(e,r){e&1&&(n(0,"div"),a(1,"La contrase\xF1a es requerida"),i())}function te(e,r){e&1&&(n(0,"div"),a(1,"La contrase\xF1a debe tener al menos 8 caracteres"),i())}function re(e,r){e&1&&(n(0,"div"),a(1,"La contrase\xF1a debe contener solo letras y n\xFAmeros"),i())}function ie(e,r){e&1&&(n(0,"div"),a(1,"La contrase\xF1a no puede tener m\xE1s de 230 caracteres"),i())}function ne(e,r){if(e&1&&(n(0,"div",27),c(1,ee,2,0,"div",25)(2,te,2,0,"div",25)(3,re,2,0,"div",25)(4,ie,2,0,"div",25),i()),e&2){let t=p();o(),s("ngIf",t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.required),o(),s("ngIf",t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.minlength),o(),s("ngIf",t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.pattern),o(),s("ngIf",t.registerForm.controls.password.errors==null?null:t.registerForm.controls.password.errors.maxlength)}}function oe(e,r){e&1&&(n(0,"div"),a(1,"La confirmaci\xF3n de la contrase\xF1a es requerida"),i())}function ae(e,r){e&1&&(n(0,"div"),a(1,"La confirmaci\xF3n de la contrase\xF1a debe tener al menos 8 caracteres"),i())}function se(e,r){e&1&&(n(0,"div"),a(1,"La confirmaci\xF3n de la contrase\xF1a debe contener solo letras y n\xFAmeros"),i())}function le(e,r){if(e&1&&(n(0,"div",27),c(1,oe,2,0,"div",25)(2,ae,2,0,"div",25)(3,se,2,0,"div",25),i()),e&2){let t=p();o(),s("ngIf",t.registerForm.controls.password_confirmation.errors==null?null:t.registerForm.controls.password_confirmation.errors.required),o(),s("ngIf",t.registerForm.controls.password_confirmation.errors==null?null:t.registerForm.controls.password_confirmation.errors.minlength),o(),s("ngIf",t.registerForm.controls.password_confirmation.errors==null?null:t.registerForm.controls.password_confirmation.errors.pattern)}}var _e=(()=>{let r=class r{constructor(m,u,l,v){this.authService=m,this.formBuilder=u,this.router=l,this.msgService=v,this.showPassword=!1,this.errors={name:"",email:"",password:""},this.msg="",this.errorsV=!1,this.buttonDisabled=!1,this.registerData={name:"",email:"",password:"",password_confirmation:""},this.registerForm=this.formBuilder.group({name:[this.registerData.name,[d.required,d.minLength(3),d.maxLength(30)]],email:[this.registerData.email,[d.required,d.email,d.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],password:[this.registerData.password,[d.required,d.minLength(8),d.pattern(/^[a-zA-Z0-9 ]*$/),d.maxLength(230)]],password_confirmation:[this.registerData.password_confirmation,[d.required,d.minLength(8),d.pattern(/^[a-zA-Z0-9 ]*$/)]]})}register(){this.registerForm.valid&&(this.registerData=this.registerForm.value,this.authService.register(this.registerData).subscribe(m=>{console.log(m),this.msg=m.msg,setTimeout(()=>{this.msg="",this.router.navigate(["/login"])},2500)},m=>{this.errorsV=!0,console.log(m),this.errors.password=m.error.errors.password,this.errors.email=m.error.errors.email,this.errors.name=m.error.errors.name,setTimeout(()=>{this.errorsV=!1,this.errors={name:"",email:"",password:""}},3e3)}),this.buttonDisabled=!0,setTimeout(()=>{this.buttonDisabled=!1},3e3))}toggleShowPassword(){this.showPassword=!this.showPassword}};r.\u0275fac=function(u){return new(u||r)(f(I),f(M),f(S),f(V))},r.\u0275cmp=w({type:r,selectors:[["app-register"]],standalone:!0,features:[b],decls:43,vars:8,consts:[["class","alert alert-danger","role","alert",4,"ngIf"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6"],[1,"card"],[1,"card-header","text-white","text-center"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","inputNombre",1,"form-label"],["type","name","id","inputNombre","name","name","formControlName","name","placeholder","Nombre","required","",1,"form-control"],["class","text-danger",4,"ngIf"],["for","inputEmail",1,"form-label"],["type","email","id","inputEmail","name","email","formControlName","email","placeholder","Email","required","",1,"form-control"],["for","inputPassword",1,"form-label"],["type","password","id","inputPassword","name","password","formControlName","password","placeholder","Contrase\xF1a","required","",1,"form-control"],["for","password_confirmation",1,"form-label"],["type","password","id","password_confirmation","name","password_confirmation","formControlName","password_confirmation","placeholder","Confirmar Contrase\xF1a","required","",1,"form-control"],["type","checkbox","id","showPassword",1,"form-check-input",3,"change"],["for","showPassword",1,"form-check-label"],["type","submit",1,"btn","text-white","w-100",3,"disabled"],[1,"card-footer","text-center"],["routerLink","/login"],["role","alert",1,"alert","alert-danger"],[4,"ngIf"],["role","alert",1,"alert","alert-success"],[1,"text-danger"]],template:function(u,l){u&1&&(g(0,"app-no-login-nav-bar"),c(1,O,4,3,"div",0)(2,$,2,1,"div",1),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6)(8,"h3"),a(9,"Registro"),i()(),n(10,"div",7)(11,"form",8),_("ngSubmit",function(){return l.register()}),n(12,"div",9)(13,"label",10),a(14,"Nombre"),i(),g(15,"input",11),c(16,K,4,3,"div",12),i(),n(17,"div",9)(18,"label",13),a(19,"Correo electr\xF3nico"),i(),g(20,"input",14),c(21,X,4,3,"div",12),i(),n(22,"div",9)(23,"label",15),a(24,"Contrase\xF1a"),i(),g(25,"input",16),c(26,ne,5,4,"div",12),i(),n(27,"div",9)(28,"label",17),a(29,"Confirmar contrase\xF1a"),i(),g(30,"input",18),c(31,le,4,3,"div",12),i(),n(32,"div",9)(33,"input",19),_("change",function(){return l.toggleShowPassword()}),i(),n(34,"label",20),a(35,"Mostrar contrase\xF1a"),i()(),n(36,"button",21),a(37,"Registrarse"),i()()(),n(38,"div",22)(39,"p"),a(40,"\xBFYa tienes una cuenta? "),n(41,"a",23),a(42,"Iniciar sesi\xF3n"),i()()()()()()()),u&2&&(o(),s("ngIf",l.errorsV),o(),s("ngIf",l.msg),o(9),s("formGroup",l.registerForm),o(5),s("ngIf",l.registerForm.controls.name.invalid&&(l.registerForm.controls.name.dirty||l.registerForm.controls.name.touched)),o(5),s("ngIf",l.registerForm.controls.email.invalid&&(l.registerForm.controls.email.dirty||l.registerForm.controls.email.touched)),o(5),s("ngIf",l.registerForm.controls.password.invalid&&(l.registerForm.controls.password.dirty||l.registerForm.controls.password.touched)),o(5),s("ngIf",l.registerForm.controls.password_confirmation.invalid&&(l.registerForm.controls.password_confirmation.dirty||l.registerForm.controls.password_confirmation.touched)),o(5),s("disabled",l.registerForm.invalid||l.buttonDisabled))},dependencies:[A,y,E,C,k,N,R,T,q,P,D,L],styles:[".card-header[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]{background-color:#00c881}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#007bff;border-color:#007bff}"]});let e=r;return e})();export{_e as RegisterComponent};