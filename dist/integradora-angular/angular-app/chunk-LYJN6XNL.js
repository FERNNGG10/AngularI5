import{$ as me,Aa as X,D as fe,Fa as Fe,J as ge,M as z,N as De,P as g,Q as V,S as y,U as f,V as p,X as pe,Z as G,_ as O,ba as ye,ca as Ee,g as ce,ka as W,kb as Ae,la as we,m as de,n as j,pa as Y,r as S,va as w,wa as Z,x as le,ya as K,z as he}from"./chunk-SYTZFNVP.js";var Re=null;function q(){return Re}function un(e){Re??=e}var Ce=class{};var _=new y(""),Me=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=g({token:t,factory:()=>p(Xe),providedIn:"platform"});let e=t;return e})();var Xe=(()=>{let t=class t extends Me{constructor(){super(),this._doc=p(_),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return q().getBaseHref(this._doc)}onPopState(n){let r=q().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",n,!1),()=>r.removeEventListener("popstate",n)}onHashChange(n){let r=q().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",n,!1),()=>r.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,r,i){this._history.pushState(n,r,i)}replaceState(n,r,i){this._history.replaceState(n,r,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=g({token:t,factory:()=>new t,providedIn:"platform"});let e=t;return e})();function Oe(e,t){if(e.length==0)return t;if(t.length==0)return e;let s=0;return e.endsWith("/")&&s++,t.startsWith("/")&&s++,s==2?e+t.substring(1):s==1?e+t:e+"/"+t}function be(e){let t=e.match(/#|\?|$/),s=t&&t.index||e.length,n=s-(e[s-1]==="/"?1:0);return e.slice(0,n)+e.slice(s)}function A(e){return e&&e[0]!=="?"?"?"+e:e}var ee=(()=>{let t=class t{historyGo(n){throw new Error("")}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=g({token:t,factory:()=>p(Je),providedIn:"root"});let e=t;return e})(),qe=new y(""),Je=(()=>{let t=class t extends ee{constructor(n,r){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??p(_).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return Oe(this._baseHref,n)}path(n=!1){let r=this._platformLocation.pathname+A(this._platformLocation.search),i=this._platformLocation.hash;return i&&n?`${r}${i}`:r}pushState(n,r,i,a){let o=this.prepareExternalUrl(i+A(a));this._platformLocation.pushState(n,r,o)}replaceState(n,r,i,a){let o=this.prepareExternalUrl(i+A(a));this._platformLocation.replaceState(n,r,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};t.\u0275fac=function(r){return new(r||t)(f(Me),f(qe,8))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var He=(()=>{let t=class t{constructor(n){this._subject=new we,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let r=this._locationStrategy.getBaseHref();this._basePath=tt(be(ve(r))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,r=""){return this.path()==this.normalize(n+A(r))}normalize(n){return t.stripTrailingSlash(et(this._basePath,ve(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,r="",i=null){this._locationStrategy.pushState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+A(r)),i)}replaceState(n,r="",i=null){this._locationStrategy.replaceState(i,"",n,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+A(r)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",r){this._urlChangeListeners.forEach(i=>i(n,r))}subscribe(n,r,i){return this._subject.subscribe({next:n,error:r,complete:i})}};t.normalizeQueryParams=A,t.joinWithSlash=Oe,t.stripTrailingSlash=be,t.\u0275fac=function(r){return new(r||t)(f(ee))},t.\u0275prov=g({token:t,factory:()=>Qe(),providedIn:"root"});let e=t;return e})();function Qe(){return new He(f(ee))}function et(e,t){if(!e||!t.startsWith(e))return t;let s=t.substring(e.length);return s===""||["/",";","?","#"].includes(s[0])?s:t}function ve(e){return e.replace(/\/index.html$/,"")}function tt(e){if(new RegExp("^(https?:)?//").test(e)){let[,s]=e.split(/\/\/[^\/]+/);return s}return e}function Pe(e,t){t=encodeURIComponent(t);for(let s of e.split(";")){let n=s.indexOf("="),[r,i]=n==-1?[s,""]:[s.slice(0,n),s.slice(n+1)];if(r.trim()===t)return decodeURIComponent(i)}return null}var J=/\s+/,Se=[],cn=(()=>{let t=class t{constructor(n,r){this._ngEl=n,this._renderer=r,this.initialClasses=Se,this.stateMap=new Map}set klass(n){this.initialClasses=n!=null?n.trim().split(J):Se}set ngClass(n){this.rawClass=typeof n=="string"?n.trim().split(J):n}ngDoCheck(){for(let r of this.initialClasses)this._updateState(r,!0);let n=this.rawClass;if(Array.isArray(n)||n instanceof Set)for(let r of n)this._updateState(r,!0);else if(n!=null)for(let r of Object.keys(n))this._updateState(r,!!n[r]);this._applyStateDiff()}_updateState(n,r){let i=this.stateMap.get(n);i!==void 0?(i.enabled!==r&&(i.changed=!0,i.enabled=r),i.touched=!0):this.stateMap.set(n,{enabled:r,changed:!0,touched:!0})}_applyStateDiff(){for(let n of this.stateMap){let r=n[0],i=n[1];i.changed?(this._toggleClass(r,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(r,!1),this.stateMap.delete(r)),i.touched=!1}}_toggleClass(n,r){n=n.trim(),n.length>0&&n.split(J).forEach(i=>{r?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}};t.\u0275fac=function(r){return new(r||t)(w(W),w(K))},t.\u0275dir=O({type:t,selectors:[["","ngClass",""]],inputs:{klass:[pe.None,"class","klass"],ngClass:"ngClass"},standalone:!0});let e=t;return e})();var H=class{constructor(t,s,n,r){this.$implicit=t,this.ngForOf=s,this.index=n,this.count=r}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},dn=(()=>{let t=class t{set ngForOf(n){this._ngForOf=n,this._ngForOfDirty=!0}set ngForTrackBy(n){this._trackByFn=n}get ngForTrackBy(){return this._trackByFn}constructor(n,r,i){this._viewContainer=n,this._template=r,this._differs=i,this._ngForOf=null,this._ngForOfDirty=!0,this._differ=null}set ngForTemplate(n){n&&(this._template=n)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let n=this._ngForOf;if(!this._differ&&n)if(0)try{}catch{}else this._differ=this._differs.find(n).create(this.ngForTrackBy)}if(this._differ){let n=this._differ.diff(this._ngForOf);n&&this._applyChanges(n)}}_applyChanges(n){let r=this._viewContainer;n.forEachOperation((i,a,o)=>{if(i.previousIndex==null)r.createEmbeddedView(this._template,new H(i.item,this._ngForOf,-1,-1),o===null?void 0:o);else if(o==null)r.remove(a===null?void 0:a);else if(a!==null){let c=r.get(a);r.move(c,o),Te(c,i)}});for(let i=0,a=r.length;i<a;i++){let c=r.get(i).context;c.index=i,c.count=a,c.ngForOf=this._ngForOf}n.forEachIdentityChange(i=>{let a=r.get(i.currentIndex);Te(a,i)})}static ngTemplateContextGuard(n,r){return!0}};t.\u0275fac=function(r){return new(r||t)(w(X),w(Z),w(Ae))},t.\u0275dir=O({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"},standalone:!0});let e=t;return e})();function Te(e,t){e.context.$implicit=t.item}var ln=(()=>{let t=class t{constructor(n,r){this._viewContainer=n,this._context=new Q,this._thenTemplateRef=null,this._elseTemplateRef=null,this._thenViewRef=null,this._elseViewRef=null,this._thenTemplateRef=r}set ngIf(n){this._context.$implicit=this._context.ngIf=n,this._updateView()}set ngIfThen(n){Ie("ngIfThen",n),this._thenTemplateRef=n,this._thenViewRef=null,this._updateView()}set ngIfElse(n){Ie("ngIfElse",n),this._elseTemplateRef=n,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngTemplateContextGuard(n,r){return!0}};t.\u0275fac=function(r){return new(r||t)(w(X),w(Z))},t.\u0275dir=O({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"},standalone:!0});let e=t;return e})(),Q=class{constructor(){this.$implicit=null,this.ngIf=null}};function Ie(e,t){if(!!!(!t||t.createEmbeddedView))throw new Error(`${e} must be a TemplateRef, but received '${De(t)}'.`)}var hn=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=G({type:t}),t.\u0275inj=V({});let e=t;return e})(),fn="browser",nt="server";function rt(e){return e===nt}var P=class{};var I=class{},N=class{},C=class e{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(s=>{let n=s.indexOf(":");if(n>0){let r=s.slice(0,n),i=r.toLowerCase(),a=s.slice(n+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(a):this.headers.set(i,[a])}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((s,n)=>{this.setHeaderEntries(n,s)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([s,n])=>{this.setHeaderEntries(s,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let s=this.headers.get(t.toLowerCase());return s&&s.length>0?s[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,s){return this.clone({name:t,value:s,op:"a"})}set(t,s){return this.clone({name:t,value:s,op:"s"})}delete(t,s){return this.clone({name:t,value:s,op:"d"})}maybeSetNormalizedName(t,s){this.normalizedNames.has(s)||this.normalizedNames.set(s,t)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(s=>{this.headers.set(s,t.headers.get(s)),this.normalizedNames.set(s,t.normalizedNames.get(s))})}clone(t){let s=new e;return s.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,s.lazyUpdate=(this.lazyUpdate||[]).concat([t]),s}applyUpdate(t){let s=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,s);let r=(t.op==="a"?this.headers.get(s):void 0)||[];r.push(...n),this.headers.set(s,r);break;case"d":let i=t.value;if(!i)this.headers.delete(s),this.normalizedNames.delete(s);else{let a=this.headers.get(s);if(!a)return;a=a.filter(o=>i.indexOf(o)===-1),a.length===0?(this.headers.delete(s),this.normalizedNames.delete(s)):this.headers.set(s,a)}break}}setHeaderEntries(t,s){let n=(Array.isArray(s)?s:[s]).map(i=>i.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(s=>t(this.normalizedNames.get(s),this.headers.get(s)))}};var ne=class{encodeKey(t){return _e(t)}encodeValue(t){return _e(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function st(e,t){let s=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(r=>{let i=r.indexOf("="),[a,o]=i==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,i)),t.decodeValue(r.slice(i+1))],c=s.get(a)||[];c.push(o),s.set(a,c)}),s}var ot=/%(\d[a-f0-9])/gi,at={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function _e(e){return encodeURIComponent(e).replace(ot,(t,s)=>at[s]??t)}function L(e){return`${e}`}var F=class e{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new ne,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=st(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(s=>{let n=t.fromObject[s],r=Array.isArray(n)?n.map(L):[L(n)];this.map.set(s,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let s=this.map.get(t);return s?s[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,s){return this.clone({param:t,value:s,op:"a"})}appendAll(t){let s=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(i=>{s.push({param:n,value:i,op:"a"})}):s.push({param:n,value:r,op:"a"})}),this.clone(s)}set(t,s){return this.clone({param:t,value:s,op:"s"})}delete(t,s){return this.clone({param:t,value:s,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let s=this.encoder.encodeKey(t);return this.map.get(t).map(n=>s+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let s=new e({encoder:this.encoder});return s.cloneFrom=this.cloneFrom||this,s.updates=(this.updates||[]).concat(t),s}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let s=(t.op==="a"?this.map.get(t.param):void 0)||[];s.push(L(t.value)),this.map.set(t.param,s);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(L(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};var re=class{constructor(){this.map=new Map}set(t,s){return this.map.set(t,s),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}};function ut(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Le(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function Ne(e){return typeof Blob<"u"&&e instanceof Blob}function Be(e){return typeof FormData<"u"&&e instanceof FormData}function ct(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var T=class e{constructor(t,s,n,r){this.url=s,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase();let i;if(ut(this.method)||r?(this.body=n!==void 0?n:null,i=r):i=n,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params),this.transferCache=i.transferCache),this.headers??=new C,this.context??=new re,!this.params)this.params=new F,this.urlWithParams=s;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=s;else{let o=s.indexOf("?"),c=o===-1?"?":o<s.length-1?"&":"";this.urlWithParams=s+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Le(this.body)||Ne(this.body)||Be(this.body)||ct(this.body)?this.body:this.body instanceof F?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Be(this.body)?null:Ne(this.body)?this.body.type||null:Le(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof F?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(t={}){let s=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,i=t.transferCache??this.transferCache,a=t.body!==void 0?t.body:this.body,o=t.withCredentials??this.withCredentials,c=t.reportProgress??this.reportProgress,u=t.headers||this.headers,D=t.params||this.params,M=t.context??this.context;return t.setHeaders!==void 0&&(u=Object.keys(t.setHeaders).reduce((m,E)=>m.set(E,t.setHeaders[E]),u)),t.setParams&&(D=Object.keys(t.setParams).reduce((m,E)=>m.set(E,t.setParams[E]),D)),new e(s,n,a,{params:D,headers:u,context:M,reportProgress:c,responseType:r,withCredentials:o,transferCache:i})}},v=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}(v||{}),R=class{constructor(t,s=x.Ok,n="OK"){this.headers=t.headers||new C,this.status=t.status!==void 0?t.status:s,this.statusText=t.statusText||n,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}},ie=class e extends R{constructor(t={}){super(t),this.type=v.ResponseHeader}clone(t={}){return new e({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},B=class e extends R{constructor(t={}){super(t),this.type=v.Response,this.body=t.body!==void 0?t.body:null}clone(t={}){return new e({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},k=class extends R{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},x=function(e){return e[e.Continue=100]="Continue",e[e.SwitchingProtocols=101]="SwitchingProtocols",e[e.Processing=102]="Processing",e[e.EarlyHints=103]="EarlyHints",e[e.Ok=200]="Ok",e[e.Created=201]="Created",e[e.Accepted=202]="Accepted",e[e.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",e[e.NoContent=204]="NoContent",e[e.ResetContent=205]="ResetContent",e[e.PartialContent=206]="PartialContent",e[e.MultiStatus=207]="MultiStatus",e[e.AlreadyReported=208]="AlreadyReported",e[e.ImUsed=226]="ImUsed",e[e.MultipleChoices=300]="MultipleChoices",e[e.MovedPermanently=301]="MovedPermanently",e[e.Found=302]="Found",e[e.SeeOther=303]="SeeOther",e[e.NotModified=304]="NotModified",e[e.UseProxy=305]="UseProxy",e[e.Unused=306]="Unused",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect",e[e.BadRequest=400]="BadRequest",e[e.Unauthorized=401]="Unauthorized",e[e.PaymentRequired=402]="PaymentRequired",e[e.Forbidden=403]="Forbidden",e[e.NotFound=404]="NotFound",e[e.MethodNotAllowed=405]="MethodNotAllowed",e[e.NotAcceptable=406]="NotAcceptable",e[e.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",e[e.RequestTimeout=408]="RequestTimeout",e[e.Conflict=409]="Conflict",e[e.Gone=410]="Gone",e[e.LengthRequired=411]="LengthRequired",e[e.PreconditionFailed=412]="PreconditionFailed",e[e.PayloadTooLarge=413]="PayloadTooLarge",e[e.UriTooLong=414]="UriTooLong",e[e.UnsupportedMediaType=415]="UnsupportedMediaType",e[e.RangeNotSatisfiable=416]="RangeNotSatisfiable",e[e.ExpectationFailed=417]="ExpectationFailed",e[e.ImATeapot=418]="ImATeapot",e[e.MisdirectedRequest=421]="MisdirectedRequest",e[e.UnprocessableEntity=422]="UnprocessableEntity",e[e.Locked=423]="Locked",e[e.FailedDependency=424]="FailedDependency",e[e.TooEarly=425]="TooEarly",e[e.UpgradeRequired=426]="UpgradeRequired",e[e.PreconditionRequired=428]="PreconditionRequired",e[e.TooManyRequests=429]="TooManyRequests",e[e.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",e[e.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",e[e.InternalServerError=500]="InternalServerError",e[e.NotImplemented=501]="NotImplemented",e[e.BadGateway=502]="BadGateway",e[e.ServiceUnavailable=503]="ServiceUnavailable",e[e.GatewayTimeout=504]="GatewayTimeout",e[e.HttpVersionNotSupported=505]="HttpVersionNotSupported",e[e.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",e[e.InsufficientStorage=507]="InsufficientStorage",e[e.LoopDetected=508]="LoopDetected",e[e.NotExtended=510]="NotExtended",e[e.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",e}(x||{});function te(e,t){return{body:t,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var dt=(()=>{let t=class t{constructor(n){this.handler=n}request(n,r,i={}){let a;if(n instanceof T)a=n;else{let u;i.headers instanceof C?u=i.headers:u=new C(i.headers);let D;i.params&&(i.params instanceof F?D=i.params:D=new F({fromObject:i.params})),a=new T(n,r,i.body!==void 0?i.body:null,{headers:u,context:i.context,params:D,reportProgress:i.reportProgress,responseType:i.responseType||"json",withCredentials:i.withCredentials,transferCache:i.transferCache})}let o=j(a).pipe(he(u=>this.handler.handle(u)));if(n instanceof T||i.observe==="events")return o;let c=o.pipe(le(u=>u instanceof B));switch(i.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return c.pipe(S(u=>{if(u.body!==null&&!(u.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return u.body}));case"blob":return c.pipe(S(u=>{if(u.body!==null&&!(u.body instanceof Blob))throw new Error("Response is not a Blob.");return u.body}));case"text":return c.pipe(S(u=>{if(u.body!==null&&typeof u.body!="string")throw new Error("Response is not a string.");return u.body}));case"json":default:return c.pipe(S(u=>u.body))}case"response":return c;default:throw new Error(`Unreachable: unhandled observe type ${i.observe}}`)}}delete(n,r={}){return this.request("DELETE",n,r)}get(n,r={}){return this.request("GET",n,r)}head(n,r={}){return this.request("HEAD",n,r)}jsonp(n,r){return this.request("JSONP",n,{params:new F().append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(n,r={}){return this.request("OPTIONS",n,r)}patch(n,r,i={}){return this.request("PATCH",n,te(i,r))}post(n,r,i={}){return this.request("POST",n,te(i,r))}put(n,r,i={}){return this.request("PUT",n,te(i,r))}};t.\u0275fac=function(r){return new(r||t)(f(I))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();function lt(e,t){return t(e)}function ht(e,t,s){return(n,r)=>Ee(s,()=>t(n,i=>e(i,r)))}var se=new y(""),ft=new y(""),gt=new y("");var ke=(()=>{let t=class t extends I{constructor(n,r){super(),this.backend=n,this.injector=r,this.chain=null,this.pendingTasks=p(Fe);let i=p(gt,{optional:!0});this.backend=i??n}handle(n){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(se),...this.injector.get(ft,[])]));this.chain=i.reduceRight((a,o)=>ht(a,o,this.injector),lt)}let r=this.pendingTasks.add();return this.chain(n,i=>this.backend.handle(i)).pipe(fe(()=>this.pendingTasks.remove(r)))}};t.\u0275fac=function(r){return new(r||t)(f(N),f(ye))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();var Dt=/^\)\]\}',?\n/;function pt(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var xe=(()=>{let t=class t{constructor(n){this.xhrFactory=n}handle(n){if(n.method==="JSONP")throw new z(-2800,!1);let r=this.xhrFactory;return(r.\u0275loadImpl?de(r.\u0275loadImpl()):j(null)).pipe(ge(()=>new ce(a=>{let o=r.build();if(o.open(n.method,n.urlWithParams),n.withCredentials&&(o.withCredentials=!0),n.headers.forEach((d,l)=>o.setRequestHeader(d,l.join(","))),n.headers.has("Accept")||o.setRequestHeader("Accept","application/json, text/plain, */*"),!n.headers.has("Content-Type")){let d=n.detectContentTypeHeader();d!==null&&o.setRequestHeader("Content-Type",d)}if(n.responseType){let d=n.responseType.toLowerCase();o.responseType=d!=="json"?d:"text"}let c=n.serializeBody(),u=null,D=()=>{if(u!==null)return u;let d=o.statusText||"OK",l=new C(o.getAllResponseHeaders()),b=pt(o)||n.url;return u=new ie({headers:l,status:o.status,statusText:d,url:b}),u},M=()=>{let{headers:d,status:l,statusText:b,url:ue}=D(),h=null;l!==x.NoContent&&(h=typeof o.response>"u"?o.responseText:o.response),l===0&&(l=h?x.Ok:0);let $=l>=200&&l<300;if(n.responseType==="json"&&typeof h=="string"){let je=h;h=h.replace(Dt,"");try{h=h!==""?JSON.parse(h):null}catch(ze){h=je,$&&($=!1,h={error:ze,text:h})}}$?(a.next(new B({body:h,headers:d,status:l,statusText:b,url:ue||void 0})),a.complete()):a.error(new k({error:h,headers:d,status:l,statusText:b,url:ue||void 0}))},m=d=>{let{url:l}=D(),b=new k({error:d,status:o.status||0,statusText:o.statusText||"Unknown Error",url:l||void 0});a.error(b)},E=!1,oe=d=>{E||(a.next(D()),E=!0);let l={type:v.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),n.responseType==="text"&&o.responseText&&(l.partialText=o.responseText),a.next(l)},ae=d=>{let l={type:v.UploadProgress,loaded:d.loaded};d.lengthComputable&&(l.total=d.total),a.next(l)};return o.addEventListener("load",M),o.addEventListener("error",m),o.addEventListener("timeout",m),o.addEventListener("abort",m),n.reportProgress&&(o.addEventListener("progress",oe),c!==null&&o.upload&&o.upload.addEventListener("progress",ae)),o.send(c),a.next({type:v.Sent}),()=>{o.removeEventListener("error",m),o.removeEventListener("abort",m),o.removeEventListener("load",M),o.removeEventListener("timeout",m),n.reportProgress&&(o.removeEventListener("progress",oe),c!==null&&o.upload&&o.upload.removeEventListener("progress",ae)),o.readyState!==o.DONE&&o.abort()}})))}};t.\u0275fac=function(r){return new(r||t)(f(P))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})(),Ue=new y(""),mt="XSRF-TOKEN",yt=new y("",{providedIn:"root",factory:()=>mt}),Et="X-XSRF-TOKEN",wt=new y("",{providedIn:"root",factory:()=>Et}),U=class{},Ft=(()=>{let t=class t{constructor(n,r,i){this.doc=n,this.platform=r,this.cookieName=i,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let n=this.doc.cookie||"";return n!==this.lastCookieString&&(this.parseCount++,this.lastToken=Pe(n,this.cookieName),this.lastCookieString=n),this.lastToken}};t.\u0275fac=function(r){return new(r||t)(f(_),f(Y),f(yt))},t.\u0275prov=g({token:t,factory:t.\u0275fac});let e=t;return e})();function At(e,t){let s=e.url.toLowerCase();if(!p(Ue)||e.method==="GET"||e.method==="HEAD"||s.startsWith("http://")||s.startsWith("https://"))return t(e);let n=p(U).getToken(),r=p(wt);return n!=null&&!e.headers.has(r)&&(e=e.clone({headers:e.headers.set(r,n)})),t(e)}var $e=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}($e||{});function Ct(e,t){return{\u0275kind:e,\u0275providers:t}}function Pn(...e){let t=[dt,xe,ke,{provide:I,useExisting:ke},{provide:N,useExisting:xe},{provide:se,useValue:At,multi:!0},{provide:Ue,useValue:!0},{provide:U,useClass:Ft}];for(let s of e)t.push(...s.\u0275providers);return me(t)}function _n(e){return Ct($e.Interceptors,e.map(t=>({provide:se,useValue:t,multi:!0})))}var Bn={UrlAuth:"http://18.227.105.11:8000/api/auth",UrlUsers:"http://18.227.105.11:8000/api/v1/users",UrlPlants:"http://18.227.105.11:8000/api/v1/plants",UrlSensors:"http://18.227.105.11:8000/api/v1/sensors",UrlMongo:"http://18.227.105.11:8000/api/v1/websocket",UrlRoles:"http://18.227.105.11:8000/api/v1/roles",production:!0};export{q as a,un as b,Ce as c,_ as d,ee as e,He as f,Pe as g,cn as h,dn as i,ln as j,hn as k,fn as l,rt as m,P as n,dt as o,Pn as p,_n as q,Bn as r};