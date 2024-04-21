import{a as N}from"./chunk-4LWGM43U.js";import"./chunk-RHMV3US2.js";import{a as $,b as d,c as D,d as A,e as R,f as j,g as M,h as O,i as L,j as V,k as z,l as B,m as G}from"./chunk-IPELWIB7.js";import{i as T,j as q,k,o as F,r as v}from"./chunk-LYJN6XNL.js";import{Ga as p,Ia as m,La as r,Ma as t,Na as f,Oa as E,P as b,Pa as S,Qa as I,Ra as _,Sa as u,U as h,Xa as s,Y as C,Ya as U,ab as w,ea as y,fa as P,ua as l,va as x}from"./chunk-SYTZFNVP.js";var H=(()=>{let i=class i{constructor(o){this.http=o}getUsers(){return this.http.get(`${v.UrlUsers}/index`)}delete(o){return this.http.delete(`${v.UrlUsers}/destroy/${o}`)}postUser(o){return this.http.post(`${v.UrlUsers}/store`,o)}updateUser(o,c){return this.http.put(`${v.UrlUsers}/update/${o}`,c)}getUser(o){return this.http.get(`${v.UrlUsers}/show/${o}`)}};i.\u0275fac=function(c){return new(c||i)(h(F))},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();var J=(()=>{let i=class i{constructor(o){this.http=o}getRoles(){return this.http.get(`${v.UrlRoles}/index2`)}};i.\u0275fac=function(c){return new(c||i)(h(F))},i.\u0275prov=b({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();function X(e,i){e&1&&(E(0),r(1,"tr")(2,"td",38),s(3,"No hay usuarios"),t()(),S())}function Y(e,i){if(e&1){let n=I();E(0),r(1,"td"),s(2),t(),r(3,"td"),s(4),t(),r(5,"td"),s(6),t(),r(7,"td")(8,"button",39),_("click",function(){y(n);let c=u().$implicit,a=u();return P(a.deleteModal(c.id))}),f(9,"i",40),t()(),S()}if(e&2){let n=u().$implicit;l(2),U(n.name),l(2),U(n.email),l(2),U(n.status==1?"Activo":"Inactivo")}}function ee(e,i){if(e&1&&(r(0,"tr"),p(1,Y,10,3,"ng-container",16),t()),e&2){let n=i.$implicit,o=u();l(),m("ngIf",o.userfilter=="all"||o.userfilter=="active"&&n.status==1||o.userfilter=="inactive"&&n.status!=1)}}function te(e,i){e&1&&(r(0,"div"),s(1,"El nombre es requerido"),t())}function re(e,i){e&1&&(r(0,"div"),s(1,"El nombre debe tener al menos 3 caracteres"),t())}function ie(e,i){e&1&&(r(0,"div"),s(1,"El nombre no puede tener m\xE1s de 30 caracteres"),t())}function oe(e,i){if(e&1&&(r(0,"div",41),p(1,te,2,0,"div",16)(2,re,2,0,"div",16)(3,ie,2,0,"div",16),t()),e&2){let n=u();l(),m("ngIf",n.PostUserForm.controls.name.errors==null?null:n.PostUserForm.controls.name.errors.required),l(),m("ngIf",n.PostUserForm.controls.name.errors==null?null:n.PostUserForm.controls.name.errors.minlength),l(),m("ngIf",n.PostUserForm.controls.name.errors==null?null:n.PostUserForm.controls.name.errors.maxlength)}}function ne(e,i){e&1&&(r(0,"div"),s(1,"El correo electr\xF3nico es requerido"),t())}function se(e,i){e&1&&(r(0,"div"),s(1,"El correo electr\xF3nico debe ser v\xE1lido"),t())}function le(e,i){e&1&&(r(0,"div"),s(1,"El correo electr\xF3nico debe seguir el patr\xF3n especificado"),t())}function ae(e,i){if(e&1&&(r(0,"div",41),p(1,ne,2,0,"div",16)(2,se,2,0,"div",16)(3,le,2,0,"div",16),t()),e&2){let n=u();l(),m("ngIf",n.PostUserForm.controls.email.errors==null?null:n.PostUserForm.controls.email.errors.required),l(),m("ngIf",n.PostUserForm.controls.email.errors==null?null:n.PostUserForm.controls.email.errors.email),l(),m("ngIf",n.PostUserForm.controls.email.errors==null?null:n.PostUserForm.controls.email.errors.pattern)}}function me(e,i){e&1&&(r(0,"div"),s(1,"La contrase\xF1a es requerida"),t())}function de(e,i){e&1&&(r(0,"div"),s(1,"La contrase\xF1a debe tener al menos 8 caracteres"),t())}function ce(e,i){e&1&&(r(0,"div"),s(1,"La contrase\xF1a no puede tener m\xE1s de 230 caracteres"),t())}function pe(e,i){e&1&&(r(0,"div"),s(1,"La contrase\xF1a debe seguir el patr\xF3n especificado"),t())}function ue(e,i){if(e&1&&(r(0,"div",41),p(1,me,2,0,"div",16)(2,de,2,0,"div",16)(3,ce,2,0,"div",16)(4,pe,2,0,"div",16),t()),e&2){let n=u();l(),m("ngIf",n.PostUserForm.controls.password.errors==null?null:n.PostUserForm.controls.password.errors.required),l(),m("ngIf",n.PostUserForm.controls.password.errors==null?null:n.PostUserForm.controls.password.errors.minlength),l(),m("ngIf",n.PostUserForm.controls.password.errors==null?null:n.PostUserForm.controls.password.errors.maxlength),l(),m("ngIf",n.PostUserForm.controls.password.errors==null?null:n.PostUserForm.controls.password.errors.pattern)}}function ve(e,i){e&1&&(r(0,"div"),s(1,"El status es requerido"),t())}function fe(e,i){e&1&&(r(0,"div"),s(1,"El status debe ser 0 o 1"),t())}function _e(e,i){if(e&1&&(r(0,"div",41),p(1,ve,2,0,"div",16)(2,fe,2,0,"div",16),t()),e&2){let n=u();l(),m("ngIf",n.PostUserForm.controls.status.errors==null?null:n.PostUserForm.controls.status.errors.required),l(),m("ngIf",n.PostUserForm.controls.status.errors==null?null:n.PostUserForm.controls.status.errors.pattern)}}function Ue(e,i){if(e&1&&(r(0,"option",42),s(1),t()),e&2){let n=i.$implicit;m("value",n.id),l(),U(n.rol)}}function ge(e,i){e&1&&(r(0,"div"),s(1,"El Rol ID es requerido"),t())}function be(e,i){e&1&&(r(0,"div"),s(1,"El Rol ID debe ser un n\xFAmero"),t())}function he(e,i){if(e&1&&(r(0,"div",41),p(1,ge,2,0,"div",16)(2,be,2,0,"div",16),t()),e&2){let n=u();l(),m("ngIf",n.PostUserForm.controls.rol_id.errors==null?null:n.PostUserForm.controls.rol_id.errors.required),l(),m("ngIf",n.PostUserForm.controls.rol_id.errors==null?null:n.PostUserForm.controls.rol_id.errors.pattern)}}var Ie=(()=>{let i=class i{constructor(o,c,a){this.userService=o,this.formBuilde=c,this.rolesSerivce=a,this.users={data:[]},this.userfilter="all",this.userData={name:"",email:"",password:"",status:0,rol_id:0},this.userDataUpdate={name:"",email:"",password:"",status:0,rol_id:0},this.roles={data:[]},this.id=0,this.errors={name:"",email:"",password:"",status:"",rol_id:""},this.PostUserForm=this.formBuilde.group({name:[this.userData.name,[d.required,d.minLength(3),d.maxLength(30)]],email:[this.userData.email,[d.required,d.email,d.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],password:[this.userData.password,[d.required,d.minLength(8),d.pattern(/^[a-zA-Z0-9 ]*$/),d.maxLength(230)]],status:[this.userData.status,[d.required,d.pattern(/^[0-1]{1}$/)]],rol_id:[1,[d.required,d.pattern(/^[0-9]{1}$/)]]})}ngOnInit(){this.getUsers(),this.getRoles()}filterUsers(o){this.userfilter=o}deleteModal(o){this.id=o,console.log(this.id)}postUser(){this.PostUserForm.valid&&(this.userData=this.PostUserForm.value,this.userService.postUser(this.userData).subscribe(o=>{this.getUsers(),this.PostUserForm.reset()},o=>{console.log(o),this.errors.password=o.error.errors.password,this.errors.email=o.error.errors.email,this.errors.name=o.error.errors.name,this.errors.status=o.error.errors.status,this.errors.rol_id=o.error.errors.rol_id,setTimeout(()=>{this.errors={name:"",email:"",password:"",status:"",rol_id:""}},3e3)}))}getUsers(){this.userService.getUsers().subscribe(o=>{this.users=o},o=>{console.log(o)})}getRoles(){this.rolesSerivce.getRoles().subscribe(o=>{console.log(o),this.roles=o},o=>{console.log(o)})}deleteUser(){this.userService.delete(this.id).subscribe(o=>{this.getUsers()},o=>{console.log(o)})}};i.\u0275fac=function(c){return new(c||i)(x(H),x(B),x(J))},i.\u0275cmp=C({type:i,selectors:[["app-users"]],standalone:!0,features:[w],decls:83,vars:14,consts:[[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"card","border-primary","shadow"],[1,"card-body"],[1,"card-title","text-primary"],[1,"row"],[1,"col-md-12"],[1,"card","border","shadow"],["type","button","data-bs-toggle","modal","data-bs-target","#postUser",1,"btn","add"],[1,"bi","bi-person"],["role","group","aria-label","Basic example",1,"btn-group"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-success",3,"click"],["type","button",1,"btn","btn-danger",3,"click"],[1,"table","table-striped"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"modalId","modalTitle"],["type","button","data-bs-dismiss","modal",1,"btn","btn-danger",3,"click"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name","formControlName","name","placeholder","Nombre","required","",1,"form-control"],["class","text-danger",4,"ngIf"],["for","email",1,"form-label"],["type","email","id","email","name","email","formControlName","email","placeholder","Email","required","",1,"form-control"],["for","password",1,"form-label"],["type","password","id","password","name","password","formControlName","password","placeholder","Contrase\xF1a","required","",1,"form-control"],["for","status",1,"form-label"],["id","status","name","status","formControlName","status","required","",1,"form-select"],["value","1"],["value","0"],["for","rol_id",1,"form-label"],["id","rol_id","name","rol_id","formControlName","rol_id","required","",1,"form-select"],[3,"value",4,"ngFor","ngForOf"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary",3,"disabled"],["colspan","4",1,"text-center"],["type","button","data-bs-toggle","modal","data-bs-target","#deleteUser",1,"btn","btn-danger",3,"click"],[1,"bi","bi-trash-fill"],[1,"text-danger"],[3,"value"]],template:function(c,a){c&1&&(r(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h1",5),s(6,"Usuarios"),t()()()()(),r(7,"div",0)(8,"div",6)(9,"div",7)(10,"div",8),f(11,"div",4),r(12,"div",6)(13,"div",7)(14,"button",9),f(15,"i",10),s(16," Agregar usuario "),t()()(),r(17,"div",11)(18,"button",12),_("click",function(){return a.filterUsers("all")}),s(19,"Todos"),t(),r(20,"button",13),_("click",function(){return a.filterUsers("active")}),s(21,"Activos"),t(),r(22,"button",14),_("click",function(){return a.filterUsers("inactive")}),s(23,"Inactivos"),t()(),r(24,"div",6)(25,"div",7)(26,"table",15)(27,"thead")(28,"tr")(29,"th"),s(30,"Nombre"),t(),r(31,"th"),s(32,"Email"),t(),r(33,"th"),s(34,"Status"),t(),r(35,"th"),s(36,"Actions"),t()()(),r(37,"tbody"),p(38,X,4,0,"ng-container",16)(39,ee,2,1,"tr",17),t()()()()()()()(),r(40,"app-modal",18)(41,"p"),s(42,"\xBFEst\xE1s seguro de desactivar al usuario?"),t(),r(43,"button",19),_("click",function(){return a.deleteUser()}),s(44,"Eliminar"),t(),r(45,"button",20),s(46,"Cancelar"),t()(),r(47,"app-modal",18)(48,"form",21),_("ngSubmit",function(){return a.postUser()}),r(49,"div",22)(50,"label",23),s(51,"Nombre"),t(),f(52,"input",24),p(53,oe,4,3,"div",25),t(),r(54,"div",22)(55,"label",26),s(56,"Email"),t(),f(57,"input",27),p(58,ae,4,3,"div",25),t(),r(59,"div",22)(60,"label",28),s(61,"Contrase\xF1a"),t(),f(62,"input",29),p(63,ue,5,4,"div",25),t(),r(64,"div",22)(65,"label",30),s(66,"Status"),t(),r(67,"select",31)(68,"option",32),s(69,"Activo"),t(),r(70,"option",33),s(71,"Inactivo"),t()(),p(72,_e,3,2,"div",25),t(),r(73,"div",22)(74,"label",34),s(75,"Rol ID"),t(),r(76,"select",35),p(77,Ue,2,2,"option",36),t(),p(78,he,3,2,"div",25),t(),r(79,"button",37),s(80,"Agregar"),t(),r(81,"button",20),s(82,"Cancelar"),t()()()()),c&2&&(l(38),m("ngIf",a.users.data.length===0),l(),m("ngForOf",a.users.data),l(),m("modalId","deleteUser")("modalTitle","Eliminar usuario"),l(7),m("modalId","postUser")("modalTitle","Agregar usuario"),l(),m("formGroup",a.PostUserForm),l(5),m("ngIf",a.PostUserForm.controls.name.invalid&&(a.PostUserForm.controls.name.dirty||a.PostUserForm.controls.name.touched)),l(5),m("ngIf",a.PostUserForm.controls.email.invalid&&(a.PostUserForm.controls.email.dirty||a.PostUserForm.controls.email.touched)),l(5),m("ngIf",a.PostUserForm.controls.password.invalid&&(a.PostUserForm.controls.password.dirty||a.PostUserForm.controls.password.touched)),l(9),m("ngIf",a.PostUserForm.controls.status.invalid&&(a.PostUserForm.controls.status.dirty||a.PostUserForm.controls.status.touched)),l(5),m("ngForOf",a.roles.data),l(),m("ngIf",a.PostUserForm.controls.rol_id.invalid&&(a.PostUserForm.controls.rol_id.dirty||a.PostUserForm.controls.rol_id.touched)),l(),m("disabled",a.PostUserForm.invalid))},dependencies:[k,T,q,G,R,L,V,$,O,D,A,z,j,M,N],styles:[".add[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;font-size:20px}.border[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#f2f2f2;color:#000;border:none;cursor:pointer;font-size:20px}"]});let e=i;return e})();export{Ie as UsersComponent};