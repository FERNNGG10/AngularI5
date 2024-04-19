import{a as z}from"./chunk-ES5VQ5UD.js";import{a as G}from"./chunk-4LWGM43U.js";import{a as R,b as _,c as $,d as q,e as B,f as U,g as Z,l as H,m as J}from"./chunk-JCGB7RHH.js";import"./chunk-B56ZGRNC.js";import{b as N,c as A,d as O,e as j,k as D,l as L}from"./chunk-NGLC2CXL.js";import{Ga as c,Ia as s,La as n,Ma as i,Na as P,Oa as I,Pa as S,Qa as E,Ra as v,Sa as p,Wa as F,Xa as l,Y as C,Ya as T,Za as b,ab as w,bb as k,cb as V,db as M,ea as f,fa as g,ra as y,ua as o,va as x}from"./chunk-SYTZFNVP.js";var K=(t,r)=>({"border-primary":t,"border-danger":r}),Q=t=>["/lifeplants/plant",t];function W(t,r){if(t&1&&(n(0,"div",22),l(1),i()),t&2){let a=p();o(),b(" ",a.msg,`
`)}}function X(t,r){if(t&1&&(n(0,"div",23),l(1),i()),t&2){let a=p();o(),b(" ",a.error,`
`)}}function Y(t,r){if(t&1&&(I(0),n(1,"div",28),P(2,"img",29),n(3,"div",7)(4,"h5",30),l(5),i(),n(6,"p",31),l(7),i(),n(8,"button",32),l(9," Ver "),i()()(),S()),t&2){let a=p(),e=a.$implicit,m=a.index,d=p(2);o(),s("ngClass",V(5,K,e.status==1,e.status!=1)),o(),s("src",d.srcImg[m],y),o(3),T(e.plant),o(2),b("Estado: ",e.status==1?"Activo":"Inactivo",""),o(),s("routerLink",k(8,Q,e.id))}}function tt(t,r){if(t&1&&(n(0,"div",26),c(1,Y,10,10,"ng-container",27),i()),t&2){let a=r.$implicit,e=p(2);o(),s("ngIf",e.filteredPlants=="all"||e.filteredPlants=="active"&&a.status==1||e.filteredPlants=="inactive"&&a.status!=1)}}function et(t,r){if(t&1&&(n(0,"div",24),c(1,tt,2,1,"div",25),i()),t&2){let a=p();o(),s("ngForOf",a.plants.data)}}function nt(t,r){t&1&&(n(0,"div",4)(1,"div",5)(2,"h3"),l(3,"No hay plantas para mostrar."),i()()())}function it(t,r){t&1&&(n(0,"div"),l(1," Este campo es requerido. "),i())}function rt(t,r){t&1&&(n(0,"div"),l(1," El nombre de la planta debe tener al menos 3 caracteres. "),i())}function at(t,r){t&1&&(n(0,"div"),l(1," El nombre de la planta no puede tener m\xE1s de 50 caracteres. "),i())}function ot(t,r){t&1&&(n(0,"div"),l(1," El nombre de la planta solo puede contener letras, n\xFAmeros y espacios. "),i())}function lt(t,r){if(t&1&&(n(0,"div",33),c(1,it,2,0,"div",27)(2,rt,2,0,"div",27)(3,at,2,0,"div",27)(4,ot,2,0,"div",27),i()),t&2){let a=p();o(),s("ngIf",a.plantForm.controls.plant.errors==null?null:a.plantForm.controls.plant.errors.required),o(),s("ngIf",a.plantForm.controls.plant.errors==null?null:a.plantForm.controls.plant.errors.minlength),o(),s("ngIf",a.plantForm.controls.plant.errors==null?null:a.plantForm.controls.plant.errors.maxlength),o(),s("ngIf",a.plantForm.controls.plant.errors==null?null:a.plantForm.controls.plant.errors.pattern)}}var _t=(()=>{let r=class r{constructor(e,m,d){this.plantService=e,this.router=m,this.formBuilder=d,this.plants={data:[]},this.plantData={plant:""},this.filteredPlants="all",this.srcImg=[],this.img="",this.msg="",this.error="",this.plantForm=this.formBuilder.group({plant:[this.plantData.plant,[_.required,_.minLength(3),_.maxLength(50),_.pattern(/^[a-zA-Z0-9 ]+$/)]]})}ngOnInit(){this.getplants()}getImg(){return`../../../assets/imagenes/plantsIcons/${Math.floor(Math.random()*5)+1}.jpg`}filterPlants(e){this.filteredPlants=e}addPlant(){this.plantForm.valid&&(this.plantData=this.plantForm.value,this.plantService.storePlant(this.plantData).subscribe(e=>{console.log("PLANTA",e),this.msg=e.msg,setTimeout(()=>{this.msg=""},3e3),this.getplants()},e=>{console.log(e),this.error=e.error.errors.plant[0],setTimeout(()=>{this.error=""},3e3)}))}getplants(){this.plantService.getPlants().subscribe(e=>{this.plants=e,console.log("response",e),console.log("var",this.plants);for(let m=0;m<this.plants.data.length;m++)this.img=this.getImg(),this.srcImg.push(this.img)},e=>{console.log(e)})}};r.\u0275fac=function(m){return new(m||r)(x(z),x(D),x(H))},r.\u0275cmp=C({type:r,selectors:[["app-plants"]],standalone:!0,features:[w],decls:32,vars:9,consts:[["noPlants",""],["class","alert alert-success","role","alert",4,"ngIf"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"card","border-primary","shadow"],[1,"card-body"],[1,"card-title","text-primary"],[1,"row","mt-3","justify-content-center"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-success",3,"click"],[1,"btn","btn-danger",3,"click"],["data-bs-toggle","modal","data-bs-target","#addPlant",1,"btn","btn-secondary"],["class","row",4,"ngIf","ngIfElse"],[3,"modalId","modalTitle"],[3,"ngSubmit","formGroup"],[1,"mb-3"],["for","plant",1,"form-label"],["type","text","id","plant","formControlName","plant",1,"form-control"],["class","text-danger",4,"ngIf"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary",3,"disabled"],["role","alert",1,"alert","alert-success"],["role","alert",1,"alert","alert-danger"],[1,"row"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],[4,"ngIf"],[1,"card","md-3",2,"width","18rem",3,"ngClass"],["alt","...",1,"card-img-top","IconPlant",3,"src"],[1,"card-title"],[1,"card-text"],["type","button",1,"btn","add",3,"routerLink"],[1,"text-danger"]],template:function(m,d){if(m&1){let u=E();c(0,W,2,1,"div",1)(1,X,2,1,"div",2),n(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h1",8),l(8,"Plantas"),i()()()()(),n(9,"div",9)(10,"div",5)(11,"button",10),v("click",function(){return f(u),g(d.filterPlants("all"))}),l(12,"Todos"),i(),n(13,"button",11),v("click",function(){return f(u),g(d.filterPlants("active"))}),l(14,"Activos"),i(),n(15,"button",12),v("click",function(){return f(u),g(d.filterPlants("inactive"))}),l(16,"Inactivos"),i(),n(17,"button",13),l(18,"Agregar Planta"),i()()(),n(19,"div",3),c(20,et,2,1,"div",14)(21,nt,4,0,"ng-template",null,0,M),i(),n(23,"app-modal",15)(24,"form",16),v("ngSubmit",function(){return f(u),g(d.addPlant())}),n(25,"div",17)(26,"label",18),l(27,"Nombre de la planta"),i(),P(28,"input",19),c(29,lt,5,4,"div",20),i(),n(30,"button",21),l(31,"Agregar"),i()()()()}if(m&2){let u=F(22);s("ngIf",d.msg),o(),s("ngIf",d.error),o(19),s("ngIf",d.plants.data.length)("ngIfElse",u),o(3),s("modalId","addPlant")("modalTitle","Agrega una planta"),o(),s("formGroup",d.plantForm),o(5),s("ngIf",d.plantForm.controls.plant.invalid&&(d.plantForm.controls.plant.dirty||d.plantForm.controls.plant.touched)),o(),s("disabled",d.plantForm.invalid)}},dependencies:[j,N,A,O,L,G,J,B,R,$,q,U,Z],styles:[".add[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#4caf50;color:#fff;border:none;cursor:pointer;font-size:20px}.border[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#f2f2f2;color:#000;border:none;cursor:pointer;font-size:20px}.IconPlant[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;object-fit:cover}.card-img-top[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.card[_ngcontent-%COMP%]{margin:10px;padding:10px;border-radius:5px;background-color:#f2f2f2;color:#000;cursor:pointer;font-size:20px}"]});let t=r;return t})();export{_t as PlantsComponent};
