(function(){"use strict";var t={6994:function(t,e,o){var n=o(8935),s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},a=[],i={name:"App"},c=i,r=o(3736),l=(0,r.Z)(c,s,a,!1,null,null,null),d=l.exports,u=o(2809),p=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"main_page"},[o("div",{staticClass:"container"},[o("h1",[t._v("Main page")]),o("div",{staticClass:"notes_wrapper"},[t._l(t.NOTES,(function(e){return o("div",{key:e.id,staticClass:"note"},[o("custom-note",{attrs:{data:e},on:{editNote:function(o){return t.editNote(e.id)}}})],1)})),o("div",{staticClass:"add_note"},[o("custom-create-note")],1)],2)])])},m=[],h=o(4665),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note_wrapper"},[o("div",{staticClass:"note_title_block"},[o("h4",{staticClass:"note_title",domProps:{innerHTML:t._s(t.data.name)}}),o("div",{staticClass:"icon_block"},[o("addIcon",{on:{editNote:function(e){return t.$emit("editNote")}}}),o("trashIcon",{on:{remove:function(e){t.approveChanges=!0}}})],1)]),o("div",{staticClass:"note_data_block"},[o("p",[t._v("TODO LIST:")]),o("div",{staticClass:"todo_list"},t._l(t.data.data.slice(0,2),(function(e){return o("div",{key:t.data.data[e],staticClass:"todo"},[o("p",{class:e.checked?"checked":"",domProps:{innerHTML:t._s(e.description)}})])})),0)]),t.approveChanges?o("custom-modal",{attrs:{title:"Approve delete "+t.data.name+"?"},on:{close:function(e){t.approveChanges=!1}}},[o("div",{staticClass:"buttons_block"},[o("custom-button",{on:{click:function(e){return t.removeNote(t.data.id)}}},[t._v("Delete")]),o("custom-button",{on:{click:function(e){t.approveChanges=!1}}},[t._v("Cancel")])],1)]):t._e()],1)},_=[],f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add_icon_wrapper"},[o("svg",{attrs:{viewBox:t.view,width:t.width,height:t.height},on:{click:function(e){return t.$emit("editNote")}}},[o("path",{attrs:{d:"M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"}})])])},g=[],C={name:"editIcon",props:{width:{type:[String,Number],default:24},height:{type:[String,Number],default:24},view:{type:String,default:"0 0 24 24"}}},T=C,k=(0,r.Z)(T,f,g,!1,null,"5978c7b0",null),b=k.exports,N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"trash_icon_wrapper"},[o("svg",{attrs:{viewBox:t.view,width:t.width,height:t.height},on:{click:function(e){return t.$emit("remove")}}},[o("path",{attrs:{d:"M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z"}}),o("path",{attrs:{d:"M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z"}}),o("path",{attrs:{d:"M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"}})])])},S=[],O={name:"trashIcon",props:{width:{type:[String,Number],default:24},height:{type:[String,Number],default:24},view:{type:String,default:"0 0 24 24"}}},E=O,y=(0,r.Z)(E,N,S,!1,null,"5fc2d988",null),w=y.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"custom_modal",class:t.customPopUpClasses},[o("div",{staticClass:"modal_wrapper"},[o("div",{staticClass:"modal-content"},[t.closeButton?o("div",{staticClass:"modal-close-button",on:{click:function(e){return t.$emit("close")}}},[o("close-icon")],1):t._e(),t.title?o("div",{staticClass:"modal-title"},[o("h2",{domProps:{innerHTML:t._s(t.title)}})]):t._e(),t.subTitle?o("div",{staticClass:"modal-sub-title"},[o("p",{domProps:{innerHTML:t._s(t.subTitle)}})]):t._e(),t._t("default")],2)])])},$=[],M=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("svg",{attrs:{width:t.width,height:t.height,viewBox:t.view,fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{d:"M7 7L17 17M7 17L17 7",stroke:"white","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])},A=[],Z={name:"closeIcon",props:{width:{type:[String,Number],default:24},height:{type:[String,Number],default:24},view:{type:String,default:"0 0 24 24"}}},I=Z,B=(0,r.Z)(I,M,A,!1,null,"b306728c",null),P=B.exports,H={name:"customModal",components:{closeIcon:P},data(){return{open:!0}},props:{title:{type:String},subTitle:{type:String},customPopUpClasses:{type:String},closeButton:{type:Boolean,default:!0}}},R=H,L=(0,r.Z)(R,x,$,!1,null,"73fefe30",null),D=L.exports,V=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"button_wrapper"},[o("button",{staticClass:"custom_button",attrs:{disabled:t.disabled,type:t.type},on:{click:t.onButtonClick}},[t._t("icon"),t._t("default")],2)])},j=[],q={name:"customButton",props:{disabled:{type:Boolean,default:!1},type:{type:String}},methods:{onButtonClick(t){this.$emit("click",t)}}},F=q,J=(0,r.Z)(F,V,j,!1,null,"2b2ff942",null),G=J.exports,U={name:"customNote",components:{addIcon:b,trashIcon:w,customModal:D,customButton:G},data(){return{approveChanges:!1,isDelete:!1}},props:{data:{type:Object,default:()=>{}}},methods:{removeNote(t){this.$store.commit("REMOVE_NOTE_FROM_NOTES",t)}}},W=U,Y=(0,r.Z)(W,v,_,!1,null,"c36db934",null),z=Y.exports,K=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"note_wrapper"},[o("div",{staticClass:"add_note_icon",on:{click:function(e){t.approveSaveChanges=!0}}},[o("addIcon")],1),t.approveSaveChanges?o("custom-modal",{attrs:{title:"Create note"},on:{close:function(e){t.approveSaveChanges=!1}}},[o("div",{staticClass:"create_todo_form"},[o("div",{staticClass:"title_form"},[o("p",{staticClass:"form_title"},[t._v("Note name")]),o("custom-input",{attrs:{placeholder:"Write note name"},model:{value:t.noteTitle,callback:function(e){t.noteTitle=e},expression:"noteTitle"}})],1),o("div",{staticClass:"todos_form"},[o("p",{staticClass:"form_title"},[t._v("Todo")]),t._l(t.noteTodo,(function(e){return o("div",{key:t.noteTodo[e],staticClass:"todo"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"todo.checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?t._i(e.checked,null)>-1:e.checked},on:{change:function(o){var n=e.checked,s=o.target,a=!!s.checked;if(Array.isArray(n)){var i=null,c=t._i(n,i);s.checked?c<0&&t.$set(e,"checked",n.concat([i])):c>-1&&t.$set(e,"checked",n.slice(0,c).concat(n.slice(c+1)))}else t.$set(e,"checked",a)}}}),o("custom-input",{attrs:{"is-disabled":e.checked,"custom-class":e.checked?"checked":"",placeholder:e.description},model:{value:e.description,callback:function(o){t.$set(e,"description",o)},expression:"todo.description"}})],1)})),o("div",{staticClass:"add_todo"},[o("add-icon",{on:{add:t.addTodo}})],1)],2)]),o("div",{staticClass:"buttons_block"},[o("custom-button",{on:{click:function(e){t.approveSaveChanges=!1}}},[t._v("Cancel")]),o("custom-button",{on:{click:t.createNote}},[t._v("Create")])],1)]):t._e()],1)},Q=[],X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"add_icon_wrapper"},[o("svg",{attrs:{viewBox:t.view,width:t.width,height:t.height},on:{click:function(e){return t.$emit("add")}}},[o("path",{attrs:{d:"M23,11H13V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V11H1a1,1,0,0,0-1,1H0a1,1,0,0,0,1,1H11V23a1,1,0,0,0,1,1h0a1,1,0,0,0,1-1V13H23a1,1,0,0,0,1-1h0A1,1,0,0,0,23,11Z"}})])])},tt=[],et={name:"addIcon",props:{width:{type:[String,Number],default:24},height:{type:[String,Number],default:24},view:{type:String,default:"0 0 24 24"}}},ot=et,nt=(0,r.Z)(ot,X,tt,!1,null,null,null),st=nt.exports,at=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"input_wrapper"},["checkbox"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"custom_input",class:t.customClass,attrs:{disabled:t.isDisabled,required:t.required,placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.input)?t._i(t.input,null)>-1:t.input},on:{change:function(e){var o=t.input,n=e.target,s=!!n.checked;if(Array.isArray(o)){var a=null,i=t._i(o,a);n.checked?i<0&&(t.input=o.concat([a])):i>-1&&(t.input=o.slice(0,i).concat(o.slice(i+1)))}else t.input=s}}}):"radio"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"custom_input",class:t.customClass,attrs:{disabled:t.isDisabled,required:t.required,placeholder:t.placeholder,type:"radio"},domProps:{checked:t._q(t.input,null)},on:{change:function(e){t.input=null}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"custom_input",class:t.customClass,attrs:{disabled:t.isDisabled,required:t.required,placeholder:t.placeholder,type:t.type},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}})])},it=[],ct={name:"customInput",props:{type:{type:String,default:"text"},value:{type:String,default:""},isDisabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},placeholder:{type:String,default:""},customClass:{type:String,default:""}},computed:{input:{get(){return this.value},set(t){this.$emit("input",t)}}}},rt=ct,lt=(0,r.Z)(rt,at,it,!1,null,"1ec7f18a",null),dt=lt.exports,ut={name:"customCreateNote",components:{customModal:D,customButton:G,addIcon:st,customInput:dt},data(){return{approveSaveChanges:!1,noteTitle:"",noteTodo:[{checked:!1,description:""}]}},computed:{...(0,h.Se)(["NOTES"])},methods:{createNote(){let t=this.NOTES.length+1,e={id:t,name:this.noteTitle,data:this.noteTodo};this.$store.commit("CREATE_NOTE",e),e={},this.approveSaveChanges=!1},addTodo(){let t={checked:!1,description:""};this.noteTodo.push(t)}}},pt=ut,mt=(0,r.Z)(pt,K,Q,!1,null,null,null),ht=mt.exports,vt={name:"mainPage",components:{customNote:z,customCreateNote:ht},data(){return{}},created(){if(localStorage.getItem("notes"))this.$store.commit("SET_NOTES_FROM_LOCAL_STORE",JSON.parse(localStorage.getItem("notes")));else{let t=JSON.stringify(this.NOTES);localStorage.setItem("notes",t)}},computed:{...(0,h.Se)(["NOTES"])},methods:{editNote(t){this.$router.push(`/edit/${t}`)}}},_t=vt,ft=(0,r.Z)(_t,p,m,!1,null,"fbecc4d8",null),gt=ft.exports,Ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("div",{staticClass:"container"},[o("p",{staticClass:"crumbs",on:{click:function(e){t.isBacToMainPage=!0}}},[t._v(" Main page ")]),o("div",{staticClass:"edit_page_wrapper"},[t._m(0),o("div",{staticClass:"add_form"},[o("div",{staticClass:"form_title"},[o("p",{staticClass:"title_text"},[t._v(" Note title ")]),o("custom-input",{model:{value:t.editedNote.name,callback:function(e){t.$set(t.editedNote,"name",e)},expression:"editedNote.name"}})],1),o("div",{staticClass:"form_data"},[o("p",{staticClass:"title_text"},[t._v(" Todo list: ")]),o("div",{staticClass:"todos_wrapper"},[t._l(t.editedNote.data,(function(e){return o("div",{key:t.editedNote.data[e],staticClass:"todo"},[o("custom-input",{attrs:{type:"checkbox",customClass:"checkbox"},model:{value:e.checked,callback:function(o){t.$set(e,"checked",o)},expression:"todo.checked"}}),o("custom-input",{attrs:{"is-disabled":e.checked,"custom-class":e.checked?"checked":""},model:{value:e.description,callback:function(o){t.$set(e,"description",o)},expression:"todo.description"}}),o("trash-icon",{on:{remove:function(o){return t.openModal(e)}}})],1)})),o("div",{staticClass:"add_todo"},[o("add-icon",{on:{add:t.addTodo}})],1)],2)]),o("div",{staticClass:"form_button"},[o("custom-button",{on:{click:function(e){t.isCancelChanges=!0}}},[t._v(" Cancel changes ")]),o("custom-button",{on:{click:t.saveChanges}},[t._v(" Save changes ")])],1)])]),t.isBacToMainPage?o("custom-modal",{attrs:{title:"Save changes?"},on:{close:function(e){t.isBacToMainPage=!1}}},[o("div",{staticClass:"buttons_block"},[o("custom-button",{on:{click:function(e){return t.saveChanges("/")}}},[t._v(" Save ")]),o("custom-button",{on:{click:t.backToMain}},[t._v(" Cancel ")])],1)]):t._e(),t.isCancelChanges?o("custom-modal",{attrs:{title:"Cancel changes?"},on:{close:function(e){t.isCancelChanges=!1}}},[o("div",{staticClass:"buttons_block"},[o("custom-button",{on:{click:t.cancelChanges}},[t._v(" Yes ")]),o("custom-button",{on:{click:function(e){t.isCancelChanges=!1}}},[t._v(" No ")])],1)]):t._e(),t.isRemovedTodo?o("custom-modal",{attrs:{title:"Delete ?"},on:{close:function(e){t.isRemovedTodo=!1}}},[o("div",{staticClass:"buttons_block"},[o("custom-button",{on:{click:function(e){return t.removeTodo(t.removedTodo)}}},[t._v(" Delete ")]),o("custom-button",{on:{click:function(e){t.isRemovedTodo=!1}}},[t._v(" Cancel ")])],1)]):t._e()],1)])},Tt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"title_block"},[o("h1",{staticClass:"title"},[t._v("Edit note")])])}],kt={name:"editPage",components:{customInput:dt,customButton:G,trashIcon:w,addIcon:st,customModal:D},data(){return{editedNote:null,isBacToMainPage:!1,isCancelChanges:!1,isRemovedTodo:!1,removedTodo:{}}},created(){this.$store.dispatch("GET_NOTE_FROM_NOTES_STATE",parseInt(this.$route.params.id)),this.editedNote={...this.NOTE}},computed:{...(0,h.Se)(["NOTE"])},methods:{saveChanges(t){this.$store.commit("ADD_NOTE_TO_NOTES",this.editedNote),t&&this.$router.push(t)},cancelChanges(){this.editedNote={...this.NOTE},this.isCancelChanges=!1},openModal(t){this.removedTodo=t,this.isRemovedTodo=!0},removeTodo(t){this.editedNote.data=this.editedNote.data.filter((e=>e!==t)),this.isRemovedTodo=!1},addTodo(){let t={checked:!1,description:""};this.editedNote.data.push(t)},backToMain(){this.$router.push("/")}}},bt=kt,Nt=(0,r.Z)(bt,Ct,Tt,!1,null,"0ca46af1",null),St=Nt.exports;const Ot=[{path:"/",component:gt},{path:"/edit/:id",component:St}],Et=new u.Z({mode:"history",routes:Ot});var yt=Et;const wt=JSON.parse(localStorage.getItem("notes")),xt={state:()=>({notes:[{id:1,name:"Note №1",data:[{checked:!0,description:"Some text1"},{checked:!0,description:"Some text2"}]}],note:{}}),mutations:{SET_NOTES_FROM_LOCAL_STORE(t,e){t.notes=e},CREATE_NOTE(t,e){t.notes.push(e),localStorage.setItem("notes",JSON.stringify(t.notes))},ADD_NOTE_TO_NOTES(t,e){t.notes[t.notes.indexOf(t.notes.find((t=>t.id===parseInt(e.id))))]=e,localStorage.setItem("notes",JSON.stringify(t.notes))},REMOVE_NOTE_FROM_NOTES(t,e){t.notes=t.notes.filter((t=>t.id!==e)),localStorage.setItem("notes",JSON.stringify(wt.filter((t=>t.id!==e))))},SET_NOTE_TO_STATE(t,e){t.note=e}},actions:{GET_NOTE_FROM_NOTES_STATE({state:t,commit:e},o){let n=t.notes.find((t=>t.id===o));e("SET_NOTE_TO_STATE",n)}},getters:{NOTES(t){return t.notes},NOTE(t){return t.note}}};var $t=xt;n.Z.use(h.ZP);const Mt=new h.ZP.Store({modules:{namespaced:!0,notes:$t}});var At=Mt;n.Z.config.productionTip=!1,n.Z.use(u.Z),new n.Z({store:At,router:yt,render:t=>t(d)}).$mount("#app")}},e={};function o(n){var s=e[n];if(void 0!==s)return s.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,n,s,a){if(!n){var i=1/0;for(d=0;d<t.length;d++){n=t[d][0],s=t[d][1],a=t[d][2];for(var c=!0,r=0;r<n.length;r++)(!1&a||i>=a)&&Object.keys(o.O).every((function(t){return o.O[t](n[r])}))?n.splice(r--,1):(c=!1,a<i&&(i=a));if(c){t.splice(d--,1);var l=s();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[n,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var s,a,i=n[0],c=n[1],r=n[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(s in c)o.o(c,s)&&(o.m[s]=c[s]);if(r)var d=r(o)}for(e&&e(n);l<i.length;l++)a=i[l],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},n=self["webpackChunktest_project_notes"]=self["webpackChunktest_project_notes"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(6994)}));n=o.O(n)})();
//# sourceMappingURL=app.6450ba87.js.map