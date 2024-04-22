import{a as T}from"./chunk-GDBBP72C.js";import{c as P}from"./chunk-E7ZUTVDQ.js";import{i as I,j as w,l as k}from"./chunk-U4WR533Z.js";import{$a as y,Ha as c,Ja as p,Ma as n,Na as e,Pa as x,Qa as v,Ra as S,Ua as _,Va as h,Y as g,Za as b,_a as t,db as C,fa as E,ga as f,ib as F,va as o,wa as m}from"./chunk-M4ZKV64V.js";function H(i,a){if(i&1&&(n(0,"tr")(1,"td"),t(2),e()()),i&2){let s=a.$implicit;o(2),y(s.plant)}}function q(i,a){if(i&1&&(x(0),c(1,H,3,1,"tr",15),v()),i&2){let s=h();o(),p("ngForOf",s.plants.data)}}function M(i,a){i&1&&(n(0,"tr")(1,"td",16),t(2,"No hay plantas por mostrar."),e()())}var R=(()=>{let a=class a{constructor(l,r){this.plantService=l,this.router=r,this.plants={data:[]}}ngOnInit(){this.plantService.getPlants().subscribe(l=>{this.plants=l,console.log("response",l),console.log("var",this.plants)},l=>{console.log(l)})}link(){this.router.navigate(["/lifeplants/plants"])}};a.\u0275fac=function(r){return new(r||a)(m(T),m(P))},a.\u0275cmp=g({type:a,selectors:[["app-home"]],standalone:!0,features:[C],decls:59,vars:2,consts:[["noPlants",""],[1,"container","mt-5"],[1,"row","justify-content-center"],[1,"col-md-6","text-center"],[1,"card","border-primary","shadow"],[1,"card-body"],[1,"card-title","text-primary"],[1,"row","mt-5"],[1,"col-md-2"],[1,"card-title","text-primary","text-center"],[1,"table"],[4,"ngIf","ngIfElse"],[1,"card-footer","align-items-center"],["type","button",1,"btn","add",3,"click"],[1,"col-md-8"],[4,"ngFor","ngForOf"],[1,"text-center"]],template:function(r,u){if(r&1){let d=S();n(0,"div",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"h1",6),t(6,"Bienvenido"),e()()()()(),n(7,"div",7)(8,"div",8)(9,"div",4)(10,"div",5)(11,"h5",9),t(12,"Plantas"),e(),n(13,"table",10)(14,"tbody"),c(15,q,2,1,"ng-container",11)(16,M,3,0,"ng-template",null,0,F),e()()(),n(18,"div",12)(19,"button",13),_("click",function(){return E(d),f(u.link())}),t(20,"Agregar Planta"),e()()()(),n(21,"div",14)(22,"div",4)(23,"div",5)(24,"h5",9),t(25,"Funciones de los Sensores"),e(),n(26,"ul")(27,"li")(28,"strong"),t(29,"Agua:"),e(),t(30," Este sensor mide la cantidad de agua disponible para la planta."),e(),n(31,"li")(32,"strong"),t(33,"Temperatura:"),e(),t(34," Este sensor mide la temperatura del ambiente en el que se encuentra la planta."),e(),n(35,"li")(36,"strong"),t(37,"Humedad:"),e(),t(38," Este sensor mide la humedad del ambiente en el que se encuentra la planta."),e(),n(39,"li")(40,"strong"),t(41,"Lluvia:"),e(),t(42," Este sensor detecta si est\xE1 lloviendo o no."),e(),n(43,"li")(44,"strong"),t(45,"Suelo:"),e(),t(46," Este sensor mide la calidad del suelo en el que se encuentra la planta."),e(),n(47,"li")(48,"strong"),t(49,"Luz:"),e(),t(50," Este sensor mide la cantidad de luz que recibe la planta."),e(),n(51,"li")(52,"strong"),t(53,"Movimiento:"),e(),t(54," Este sensor detecta si hay alg\xFAn movimiento alrededor de la planta."),e(),n(55,"li")(56,"strong"),t(57,"Vibraci\xF3n:"),e(),t(58," Este sensor detecta si hay alguna vibraci\xF3n en el suelo donde se encuentra la planta."),e()()()()()()()}if(r&2){let d=b(17);o(15),p("ngIf",u.plants.data.length)("ngIfElse",d)}},dependencies:[k,I,w]});let i=a;return i})();export{R as HomeComponent};