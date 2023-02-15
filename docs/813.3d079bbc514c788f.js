"use strict";(self.webpackChunkgitproject=self.webpackChunkgitproject||[]).push([[813],{813:(Re,R,m)=>{m.r(R),m.d(R,{UserdetailsModule:()=>Me});var w=m(808),A=m(459),g=m(382);const V=function(n){let t=n.value||"";return t&&(!1===/[A-Z]+/g.test(t)||!1===/[a-z]+/g.test(t)||!1===/[0-9]+/g.test(t)||!1===/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(t))?{passwordStrength:"password should contain at least 1 special character, 1 number ,1 lowecase letter, 1 uppercase letter"}:null};var s=m(223);function $(n,t){if(1&n){const e=s.EpF();s.TgZ(0,"tr")(1,"td",5),s._uU(2),s.qZA(),s.TgZ(3,"td",9),s._uU(4),s.qZA(),s.TgZ(5,"td",7)(6,"img",10),s.NdJ("click",function(){const r=s.CHM(e),i=r.$implicit,l=r.index;return s.oxw(2).clickaction(i,"U",l)}),s.qZA()()()}if(2&n){const e=t.$implicit;s.xp6(2),s.Oqu(e.username),s.xp6(2),s.Oqu(e.pwd)}}function Q(n,t){if(1&n){const e=s.EpF();s.TgZ(0,"div",2)(1,"div")(2,"button",3),s.NdJ("click",function(){return s.CHM(e),s.oxw().clickaction("","A","")}),s._uU(3,"add login"),s.qZA()(),s.TgZ(4,"table",4)(5,"thead")(6,"tr")(7,"th",5),s._uU(8,"Name"),s.qZA(),s.TgZ(9,"th",6),s._uU(10,"Password"),s.qZA(),s.TgZ(11,"th",7),s._uU(12,"Edit"),s.qZA()()(),s.TgZ(13,"tbody"),s.YNc(14,$,7,2,"tr",8),s.qZA()()()}if(2&n){const e=s.oxw();s.xp6(14),s.Q6J("ngForOf",e.userSubject)}}function W(n,t){1&n&&(s.TgZ(0,"div"),s._uU(1," username Name is required "),s.qZA())}function ee(n,t){if(1&n&&(s.TgZ(0,"div",23),s.YNc(1,W,2,0,"div",24),s.qZA()),2&n){const e=s.oxw(2);s.xp6(1),s.Q6J("ngIf",e.f.username.errors.required)}}function te(n,t){1&n&&(s.TgZ(0,"div"),s._uU(1," password is required "),s.qZA())}function se(n,t){1&n&&(s.TgZ(0,"div"),s._uU(1," password must be at least 8 characters "),s.qZA())}function ne(n,t){if(1&n&&(s.TgZ(0,"div"),s._uU(1),s.qZA()),2&n){const e=s.oxw(3);s.xp6(1),s.hij(" ",e.f.password.errors.passwordStrength," ")}}function re(n,t){if(1&n&&(s.TgZ(0,"div",23),s.YNc(1,te,2,0,"div",24),s.YNc(2,se,2,0,"div",24),s.YNc(3,ne,2,1,"div",24),s.qZA()),2&n){const e=s.oxw(2);s.xp6(1),s.Q6J("ngIf",e.f.password.errors.required),s.xp6(1),s.Q6J("ngIf",e.f.password.errors.minlength),s.xp6(1),s.Q6J("ngIf",e.f.password.hasError("passwordStrength"))}}function oe(n,t){1&n&&s._UZ(0,"span",25)}function ie(n,t){1&n&&s._UZ(0,"span",25)}const H=function(n){return{"is-invalid":n}};function ae(n,t){if(1&n){const e=s.EpF();s.TgZ(0,"div",11)(1,"h4",12),s._uU(2),s.qZA(),s.TgZ(3,"div",13)(4,"form",14),s.NdJ("ngSubmit",function(){return s.CHM(e),s.oxw().onSubmit()}),s.TgZ(5,"div",15)(6,"label",16),s._uU(7,"Username"),s.qZA(),s._UZ(8,"input",17),s.YNc(9,ee,2,1,"div",18),s.qZA(),s.TgZ(10,"div",15)(11,"label",16),s._uU(12,"Password"),s.qZA(),s._UZ(13,"input",19),s.YNc(14,re,4,3,"div",18),s.qZA(),s.TgZ(15,"div")(16,"button",20),s.YNc(17,oe,1,0,"span",21),s._uU(18," SAVE "),s.qZA(),s._uU(19," \xa0 "),s.TgZ(20,"button",22),s.NdJ("click",function(){return s.CHM(e),s.oxw().cancel()}),s.YNc(21,ie,1,0,"span",21),s._uU(22," cancel "),s.qZA()()()()()}if(2&n){const e=s.oxw();s.xp6(2),s.hij("","U"==e.action?"UPDATE LOGIN ":"ADD LOGIN"," "),s.xp6(2),s.Q6J("formGroup",e.form),s.xp6(4),s.Q6J("ngClass",s.VKq(8,H,e.submitted&&e.f.username.errors)),s.xp6(1),s.Q6J("ngIf",e.submitted&&e.f.username.errors),s.xp6(4),s.Q6J("ngClass",s.VKq(10,H,e.submitted&&e.f.password.errors)),s.xp6(1),s.Q6J("ngIf",e.submitted&&e.f.password.errors),s.xp6(3),s.Q6J("ngIf",e.loading),s.xp6(4),s.Q6J("ngIf",e.loading)}}const de=[{path:"",component:(()=>{class n{constructor(e){this.formBuilder=e,this.loading=!1,this.submitted=!0,this.showform=!1,this.showgrid=!0,this.namearr=[],this.exitdata=[],this.storeddata=[]}ngOnInit(){this.submitted=!0,this.form=this.formBuilder.group({username:["",g.kI.required],password:[""]}),this.getdata()}get f(){return this.form.controls}onSubmit(){this.number=10*Math.random()+1,console.log(this.number),this.ids=Math.trunc(this.number),console.log("no",this.number),this.submitted=!0,this.form.invalid||("A"==this.action?(this.namearr.push({username:this.form.value.username,pwd:this.form.value.password,id:this.ids}),localStorage.setItem("userobj",JSON.stringify(this.namearr)),console.log(this.namearr),alert("user details added successfully.."),this.getdata(),this.showgrid=!0,this.showform=!1):(this.exitdata=JSON.parse(localStorage.getItem("userobj")),this.exitdata[this.index].username=this.form.value.username,this.exitdata[this.index].pwd=""==this.form.value.password||null==this.form.value.password?this.paswd:this.form.value.password,this.namearr=this.exitdata,localStorage.setItem("userobj",JSON.stringify(this.namearr)),alert("user details updated successfully..."),this.getdata(),this.showgrid=!0,this.showform=!1))}getdata(){this.showform=!1,this.userSubject=JSON.parse(localStorage.getItem("userobj")),console.log(this.userSubject)}clickaction(e,o,r){this.action=o,this.id=e.id,this.index=r,console.log(this.id),console.log("index",this.index),"U"==this.action?(this.showform=!0,this.showgrid=!1,this.form.controls.username.setValue(e.username),this.form.controls.password.setValue(e.pwd),this.form.controls.password.clearValidators(),this.form.controls.password.updateValueAndValidity(),this.exitdata=JSON.parse(localStorage.getItem("userobj")),this.uname=this.exitdata[this.index].username,this.paswd=this.exitdata[this.index].pwd,this.submitted=!1,console.log(this.uname,this.paswd)):(this.form.controls.password.setValidators([g.kI.required,g.kI.minLength(8),V]),this.showform=!0,this.showgrid=!1,this.submitted=!1,this.form.reset())}cancel(){this.showform=!1,this.showgrid=!0,this.getdata(),this.form.reset()}}return n.\u0275fac=function(e){return new(e||n)(s.Y36(g.qu))},n.\u0275cmp=s.Xpm({type:n,selectors:[["app-userdetails"]],decls:2,vars:2,consts:[["class","data-tbl",4,"ngIf"],["class","card",4,"ngIf"],[1,"data-tbl"],["type","submit",1,"btn","btn-primary",3,"click"],[1,"table"],[1,"tdspname",2,"width","50%"],[1,"tdspname",2,"width","45%"],[1,"tdspname",2,"width","5%"],[4,"ngFor","ngForOf"],[1,"hidetext",2,"width","40%"],["src","../../../assets/images/edit.png",2,"cursor","pointer",3,"click"],[1,"card"],[1,"card-header"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"mb-3"],[1,"form-label"],["type","text","formControlName","username","id","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["formControlName","password","id","pwd",1,"form-control",3,"ngClass"],[1,"btn","btn-primary"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"btn","btn-primary",3,"click"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","me-1"]],template:function(e,o){1&e&&(s.YNc(0,Q,15,1,"div",0),s.YNc(1,ae,23,12,"div",1)),2&e&&(s.Q6J("ngIf",o.showgrid),s.xp6(1),s.Q6J("ngIf",o.showform))},directives:[w.O5,w.sg,g._Y,g.JL,g.sg,g.Fj,g.JJ,g.u,w.mk],styles:[".bg[_ngcontent-%COMP%]{background-size:100% 100%,cover;width:100%;height:100%;position:fixed}[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#ffffff7c}.keep_signin[_ngcontent-%COMP%]{float:left;cursor:pointer}.login-page[_ngcontent-%COMP%]{width:400px;padding:8% 0 0;margin:auto}.form[_ngcontent-%COMP%]{position:relative;z-index:1;width:100%;padding:45px;margin-top:5%;text-align:center;background-image:linear-gradient(to bottom,#6f7a7e,#e4e4e4,#6f7a7e)!important;border-radius:10px}.textbox[_ngcontent-%COMP%]{border-radius:10px;font-family:Roboto,sans-serif;outline:0;background:#3f3e3e;width:100%;border:0;padding:10px;box-sizing:border-box;font-size:14px;text-align:center;color:#f5f5f5}.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#ff4500}.form[_ngcontent-%COMP%]   .newUser[_ngcontent-%COMP%]{margin:15px 0 0;color:#b3b3b3;font-size:12px}.container[_ngcontent-%COMP%]{position:relative;z-index:1;max-width:300px;margin:0 auto}.hidetext[_ngcontent-%COMP%]{-webkit-text-security:disc}@media only screen and (min-width: 280px) and (max-width: 720px){.login-page[_ngcontent-%COMP%]{width:300px;padding:8% 0 0;margin:auto}.piped[_ngcontent-%COMP%]{display:none}.forgotpwd[_ngcontent-%COMP%]{padding-left:10px}.keep_signin[_ngcontent-%COMP%]{cursor:pointer;float:initial}}"]}),n})()}];let ce=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[[A.Bz.forChild(de)],A.Bz]}),n})();var ue=m(646),he=m(306),pe=m(351),fe=m(300),E=m(4);class I{}class F{}class y{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const o=e.indexOf(":");if(o>0){const r=e.slice(0,o),i=r.toLowerCase(),l=e.slice(o+1).trim();this.maybeSetNormalizedName(r,i),this.headers.has(i)?this.headers.get(i).push(l):this.headers.set(i,[l])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let o=t[e];const r=e.toLowerCase();"string"==typeof o&&(o=[o]),o.length>0&&(this.headers.set(r,o),this.maybeSetNormalizedName(e,r))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof y?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new y;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof y?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let o=t.value;if("string"==typeof o&&(o=[o]),0===o.length)return;this.maybeSetNormalizedName(t.name,e);const r=("a"===t.op?this.headers.get(e):void 0)||[];r.push(...o),this.headers.set(e,r);break;case"d":const i=t.value;if(i){let l=this.headers.get(e);if(!l)return;l=l.filter(u=>-1===i.indexOf(u)),0===l.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,l)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class me{encodeKey(t){return j(t)}encodeValue(t){return j(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const ye=/%(\d[a-f0-9])/gi,be={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function j(n){return encodeURIComponent(n).replace(ye,(t,e)=>{var o;return null!==(o=be[e])&&void 0!==o?o:t})}function L(n){return`${n}`}class v{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new me,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function ge(n,t){const e=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(r=>{const i=r.indexOf("="),[l,u]=-1==i?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,i)),t.decodeValue(r.slice(i+1))],a=e.get(l)||[];a.push(u),e.set(l,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const o=t.fromObject[e];this.map.set(e,Array.isArray(o)?o:[o])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(o=>{const r=t[o];Array.isArray(r)?r.forEach(i=>{e.push({param:o,value:i,op:"a"})}):e.push({param:o,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(o=>e+"="+this.encoder.encodeValue(o)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new v({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(L(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let o=this.map.get(t.param)||[];const r=o.indexOf(L(t.value));-1!==r&&o.splice(r,1),o.length>0?this.map.set(t.param,o):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class ve{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function D(n){return"undefined"!=typeof ArrayBuffer&&n instanceof ArrayBuffer}function z(n){return"undefined"!=typeof Blob&&n instanceof Blob}function B(n){return"undefined"!=typeof FormData&&n instanceof FormData}class _{constructor(t,e,o,r){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function we(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||r?(this.body=void 0!==o?o:null,i=r):i=o,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new y),this.context||(this.context=new ve),this.params){const l=this.params.toString();if(0===l.length)this.urlWithParams=e;else{const u=e.indexOf("?");this.urlWithParams=e+(-1===u?"?":u<e.length-1?"&":"")+l}}else this.params=new v,this.urlWithParams=e}serializeBody(){return null===this.body?null:D(this.body)||z(this.body)||B(this.body)||function xe(n){return"undefined"!=typeof URLSearchParams&&n instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof v?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||B(this.body)?null:z(this.body)?this.body.type||null:D(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof v?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var e;const o=t.method||this.method,r=t.url||this.url,i=t.responseType||this.responseType,l=void 0!==t.body?t.body:this.body,u=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,a=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let p=t.headers||this.headers,x=t.params||this.params;const T=null!==(e=t.context)&&void 0!==e?e:this.context;return void 0!==t.setHeaders&&(p=Object.keys(t.setHeaders).reduce((b,d)=>b.set(d,t.setHeaders[d]),p)),t.setParams&&(x=Object.keys(t.setParams).reduce((b,d)=>b.set(d,t.setParams[d]),x)),new _(o,r,l,{params:x,headers:p,context:T,reportProgress:a,responseType:i,withCredentials:u})}}var c=(()=>((c=c||{})[c.Sent=0]="Sent",c[c.UploadProgress=1]="UploadProgress",c[c.ResponseHeader=2]="ResponseHeader",c[c.DownloadProgress=3]="DownloadProgress",c[c.Response=4]="Response",c[c.User=5]="User",c))();class k{constructor(t,e=200,o="OK"){this.headers=t.headers||new y,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||o,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class O extends k{constructor(t={}){super(t),this.type=c.ResponseHeader}clone(t={}){return new O({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class N extends k{constructor(t={}){super(t),this.type=c.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new N({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class Z extends k{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function S(n,t){return{body:t,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials}}let Ce=(()=>{class n{constructor(e){this.handler=e}request(e,o,r={}){let i;if(e instanceof _)i=e;else{let a,p;a=r.headers instanceof y?r.headers:new y(r.headers),r.params&&(p=r.params instanceof v?r.params:new v({fromObject:r.params})),i=new _(e,o,void 0!==r.body?r.body:null,{headers:a,context:r.context,params:p,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials})}const l=(0,ue.of)(i).pipe((0,pe.b)(a=>this.handler.handle(a)));if(e instanceof _||"events"===r.observe)return l;const u=l.pipe((0,fe.h)(a=>a instanceof N));switch(r.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return u.pipe((0,E.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return u.pipe((0,E.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return u.pipe((0,E.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return u.pipe((0,E.U)(a=>a.body))}case"response":return u;default:throw new Error(`Unreachable: unhandled observe type ${r.observe}}`)}}delete(e,o={}){return this.request("DELETE",e,o)}get(e,o={}){return this.request("GET",e,o)}head(e,o={}){return this.request("HEAD",e,o)}jsonp(e,o){return this.request("JSONP",e,{params:(new v).append(o,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,o={}){return this.request("OPTIONS",e,o)}patch(e,o,r={}){return this.request("PATCH",e,S(r,o))}post(e,o,r={}){return this.request("POST",e,S(r,o))}put(e,o,r={}){return this.request("PUT",e,S(r,o))}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(I))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();class X{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const q=new s.OlP("HTTP_INTERCEPTORS");let _e=(()=>{class n{intercept(e,o){return o.handle(e)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();const Te=/^\)\]\}',?\n/;let G=(()=>{class n{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new he.y(o=>{const r=this.xhrFactory.build();if(r.open(e.method,e.urlWithParams),e.withCredentials&&(r.withCredentials=!0),e.headers.forEach((d,h)=>r.setRequestHeader(d,h.join(","))),e.headers.has("Accept")||r.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const d=e.detectContentTypeHeader();null!==d&&r.setRequestHeader("Content-Type",d)}if(e.responseType){const d=e.responseType.toLowerCase();r.responseType="json"!==d?d:"text"}const i=e.serializeBody();let l=null;const u=()=>{if(null!==l)return l;const d=r.statusText||"OK",h=new y(r.getAllResponseHeaders()),C=function Ee(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}(r)||e.url;return l=new O({headers:h,status:r.status,statusText:d,url:C}),l},a=()=>{let{headers:d,status:h,statusText:C,url:Y}=u(),f=null;204!==h&&(f=void 0===r.response?r.responseText:r.response),0===h&&(h=f?200:0);let J=h>=200&&h<300;if("json"===e.responseType&&"string"==typeof f){const Ue=f;f=f.replace(Te,"");try{f=""!==f?JSON.parse(f):null}catch(Je){f=Ue,J&&(J=!1,f={error:Je,text:f})}}J?(o.next(new N({body:f,headers:d,status:h,statusText:C,url:Y||void 0})),o.complete()):o.error(new Z({error:f,headers:d,status:h,statusText:C,url:Y||void 0}))},p=d=>{const{url:h}=u(),C=new Z({error:d,status:r.status||0,statusText:r.statusText||"Unknown Error",url:h||void 0});o.error(C)};let x=!1;const T=d=>{x||(o.next(u()),x=!0);let h={type:c.DownloadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),"text"===e.responseType&&!!r.responseText&&(h.partialText=r.responseText),o.next(h)},b=d=>{let h={type:c.UploadProgress,loaded:d.loaded};d.lengthComputable&&(h.total=d.total),o.next(h)};return r.addEventListener("load",a),r.addEventListener("error",p),r.addEventListener("timeout",p),r.addEventListener("abort",p),e.reportProgress&&(r.addEventListener("progress",T),null!==i&&r.upload&&r.upload.addEventListener("progress",b)),r.send(i),o.next({type:c.Sent}),()=>{r.removeEventListener("error",p),r.removeEventListener("abort",p),r.removeEventListener("load",a),r.removeEventListener("timeout",p),e.reportProgress&&(r.removeEventListener("progress",T),null!==i&&r.upload&&r.upload.removeEventListener("progress",b)),r.readyState!==r.DONE&&r.abort()}})}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(w.JF))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})();const P=new s.OlP("XSRF_COOKIE_NAME"),M=new s.OlP("XSRF_HEADER_NAME");class K{}let Ne=(()=>{class n{constructor(e,o,r){this.doc=e,this.platform=o,this.cookieName=r,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,w.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(w.K0),s.LFG(s.Lbi),s.LFG(P))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),U=(()=>{class n{constructor(e,o){this.tokenService=e,this.headerName=o}intercept(e,o){const r=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||r.startsWith("http://")||r.startsWith("https://"))return o.handle(e);const i=this.tokenService.getToken();return null!==i&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,i)})),o.handle(e)}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(K),s.LFG(M))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),ke=(()=>{class n{constructor(e,o){this.backend=e,this.injector=o,this.chain=null}handle(e){if(null===this.chain){const o=this.injector.get(q,[]);this.chain=o.reduceRight((r,i)=>new X(r,i),this.backend)}return this.chain.handle(e)}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(F),s.LFG(s.zs3))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac}),n})(),Oe=(()=>{class n{static disable(){return{ngModule:n,providers:[{provide:U,useClass:_e}]}}static withOptions(e={}){return{ngModule:n,providers:[e.cookieName?{provide:P,useValue:e.cookieName}:[],e.headerName?{provide:M,useValue:e.headerName}:[]]}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[U,{provide:q,useExisting:U,multi:!0},{provide:K,useClass:Ne},{provide:P,useValue:"XSRF-TOKEN"},{provide:M,useValue:"X-XSRF-TOKEN"}]}),n})(),Se=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({providers:[Ce,{provide:I,useClass:ke},G,{provide:F,useExisting:G}],imports:[[Oe.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),n})();var Pe=m(41);let Me=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n,bootstrap:[Pe.y]}),n.\u0275inj=s.cJS({imports:[[w.ez,ce,Se,g.UX,g.u5]]}),n})()}}]);