import{c as _}from"./chunk-YG76ARML.js";import{a as x}from"./chunk-5BRVOJ4S.js";import"./chunk-B56ZGRNC.js";import{j as g,k as v,l as h}from"./chunk-NGLC2CXL.js";import{Ga as f,Ka as b,La as t,Ma as n,Na as i,Ra as p,Xa as a,Y as d,ab as u,ua as m,va as c}from"./chunk-SYTZFNVP.js";function k(l,r){l&1&&(t(0,"tr")(1,"td")(2,"a",30),i(3,"i",31),a(4,"Usuarios"),n()()())}var O=(()=>{let r=class r{constructor(o,e,s){this.authService=o,this.router=e,this.socketService=s,this.user_id=0,this.rol_id=0}logout(){this.authService.logout().subscribe(o=>{console.log(o),localStorage.removeItem("token"),this.router.navigate(["/login"])},o=>{console.log(o)})}ngOnInit(){this.authService.me().subscribe(e=>{console.log(e),this.rol_id=e.rol_id,this.user_id=e.id,console.log("variable",this.rol_id),console.log("variable",this.user_id)},e=>{console.log(e)}),this.socketService.UserRolSocket();let o=this.socketService.getEcho();o.channel("userRol").listen(".UserRol",e=>{console.log(o),console.log("socket",e.data.user_id),this.user_id==e.data.user_id&&(this.rol_id=e.data.rol_id,console.log("socket",this.rol_id))})}ngOnDestroy(){this.socketService.closeWebSocket()}};r.\u0275fac=function(e){return new(e||r)(c(x),c(v),c(_))},r.\u0275cmp=d({type:r,selectors:[["app-login-nav-bar"]],standalone:!0,features:[u],decls:46,vars:1,consts:[[1,"navbar","shadow"],[1,"container-fluid"],["routerLink","/lifeplants/home","data-bs-toggle","offcanvas","data-bs-target","#offcanvasExample","aria-controls","offcanvasExample",1,"navbar-brand"],["src","../assets/imagenes/icon.png","alt","",1,"icon"],["routerLink","/lifeplants/home",1,"navbar-brand"],[1,"navbar","me-auto","mb-2","mb-lg-0"],[1,"navbar-item"],["type","button","data-bs-toggle","offcanvas","data-bs-target","#offcanvasExample",1,"btn","btn-principal"],[1,"bi","bi-list"],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-principal","dropdown-toggle"],[1,"bi","bi-person-circle"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu","dropdown-menu-end"],["routerLink","/lifeplants/perfil",1,"dropdown-item"],[1,"dropdown-divider"],[1,"dropdown-item",3,"click"],["tabindex","-1","id","offcanvasExample","aria-labelledby","offcanvasExampleLabel",1,"offcanvas","offcanvas-start"],[1,"offcanvas-header"],["id","offcanvasExampleLabel",1,"offcanvas-title"],["src","../../assets/imagenes/icon.png","alt","",1,"icon"],["type","button","data-bs-dismiss","offcanvas","aria-label","Close",1,"btn-close","text-reset"],[1,"offcanvas-body","d-flex","bg-dark"],[1,"table","table-dark","fs-3"],["routerLink","/lifeplants/home","data-bs-dismiss","offcanvas"],[1,"bi","bi-house-door","me-2"],["src","../../../assets/imagenes/iconbw.png","alt","",1,"iconplanta"],["routerLink","/lifeplants/plants","data-bs-dismiss","offcanvas"],[1,"bi","bi-leaf","me-2"],["routerLink","/lifeplants/about","data-bs-dismiss","offcanvas"],[1,"bi","bi-info-circle","me-2"],["routerLink","/lifeplants/users","data-bs-dismiss","offcanvas"],[1,"bi","bi-person","me-2"]],template:function(e,s){e&1&&(t(0,"nav",0)(1,"div",1)(2,"a",2),i(3,"img",3),n(),t(4,"a",4),a(5,"Life plants"),n(),t(6,"ul",5)(7,"li",6)(8,"button",7),i(9,"i",8),n()()(),t(10,"div",9)(11,"button",10),i(12,"i",11),n(),t(13,"div",12)(14,"a",13),a(15,"Perfil"),n(),i(16,"div",14),t(17,"a",15),p("click",function(){return s.logout()}),a(18,"Cerrar sesion"),n()()()()(),t(19,"div",16)(20,"div",17)(21,"h5",18),i(22,"img",19),a(23,"Men\xFA"),n(),i(24,"button",20),n(),t(25,"div",21)(26,"table",22)(27,"tbody")(28,"tr")(29,"td")(30,"a",23),i(31,"i",24),a(32,"Inicio"),n()()(),t(33,"tr")(34,"td"),i(35,"img",25),t(36,"a",26),i(37,"i",27),a(38,"Plantas"),n()()(),f(39,k,5,0,"tr"),t(40,"tr")(41,"td")(42,"a",28),i(43,"i",29),a(44,"Acerca de"),n()()()()()()(),i(45,"router-outlet")),e&2&&(m(39),b(39,s.rol_id==2?39:-1))},dependencies:[g,h],styles:[".navbar[_ngcontent-%COMP%]{background-color:#00c881;color:#fff;padding:10px;font-size:18px;font-weight:700;text-align:center}.navbar-item[_ngcontent-%COMP%]{margin-right:10px}.icon[_ngcontent-%COMP%]{width:50px}.offcanvas-header[_ngcontent-%COMP%]{background-color:#00c881}.offcanvas-body[_ngcontent-%COMP%]{background-color:#1a1919}.footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;background-color:#1b1b1b;position:fixed;bottom:0;width:100%}dropdown-menu[_ngcontent-%COMP%]{position:fixed}.card-header[_ngcontent-%COMP%]{background-color:#00c881}.btn-principal[_ngcontent-%COMP%]{background-color:#743c07;color:#fff;border:none;padding:10px 20px;cursor:pointer;border-radius:5px}.offcanvas-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.iconplanta[_ngcontent-%COMP%]{width:29px;height:35px;filter:invert(1)}"]});let l=r;return l})();export{O as LoginNavBarComponent};
