(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"list"}},[e("router-link",{staticClass:"times",attrs:{to:"/"}},[e("font-awesome-icon",{attrs:{icon:["fas","times"],size:"lg"}})],1),e("b-container",{staticClass:"ab d-flex"},[e("b-container",{staticClass:"a"},[e("b-row",{staticClass:"flex-column h-100 justify-content-between"},[e("div",[e("b-col",{staticClass:"todo"},[e("font-awesome-icon",{attrs:{icon:["fas","list"],size:"lg"}}),e("router-link",{attrs:{to:"/list"}},[t._v("TO-DO LIST")])],1),e("b-col",{staticClass:"ana"},[e("font-awesome-icon",{attrs:{icon:["fas","chart-bar"],size:"lg"}}),e("router-link",{attrs:{to:"/analytics"}},[t._v("ANALYTICS")])],1),e("b-col",{staticClass:"ring"},[e("font-awesome-icon",{attrs:{icon:["fas","music"],size:"lg"}}),e("router-link",{attrs:{to:"/settings"}},[t._v("RINGTONES")])],1)],1),e("div",[e("b-col",[e("div",{staticClass:"circle"},[e("div",{staticClass:"bigCircle"}),e("router-link",{staticClass:"play",attrs:{to:"/"}},[e("font-awesome-icon",{attrs:{icon:["fas","play"],size:"lg"}})],1),e("span",{staticClass:"time"},[t._v(t._s(t.timeText))]),e("span",{staticClass:"current"},[t._v(t._s(t.current))])],1)])],1)])],1),e("b-container",{staticClass:"b"},[e("b-row",{staticClass:"flex-column"},[e("b-col",{staticClass:"addInput",attrs:{cols:"12"}},[e("b-input-group",{attrs:{"invalid-feedback":"Enter at least 4 characters.",state:t.state}},[e("b-form-input",{attrs:{placeholder:"ADD A NEW MISSION...",state:t.state,trim:""},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.additem.apply(null,arguments)}},model:{value:t.newitem,callback:function(s){t.newitem=s},expression:"newitem"}}),e("b-input-group-append",[e("b-button",{staticClass:"addBtn",on:{click:t.additem}},[e("font-awesome-icon",{attrs:{icon:["fas","plus"]}})],1)],1)],1)],1),e("b-col",{staticClass:"input",attrs:{cols:"12"}}),e("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1.visible",modifiers:{"collapse-1":!0,visible:!0}}],staticClass:"todoBtn"},[t._v("TO-DO")]),e("b-collapse",{attrs:{id:"collapse-1",visible:""}},[e("b-card",[e("b-table-simple",[e("thead",[e("tr")]),e("tbody",t._l(t.list,(function(s,i){return e("tr",{key:i},[e("td",[s.edit?e("b-form-input",{attrs:{trim:"",state:s.state},on:{keydown:[function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.changelist(i)},function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"esc",27,s.key,["Esc","Escape"])?null:t.cancellist(i)}]},model:{value:s.model,callback:function(e){t.$set(s,"model",e)},expression:"item.model"}}):e("span",[e("font-awesome-icon",{attrs:{icon:["far","circle"]}}),t._v(" "+t._s(s.name))],1)],1),e("td",{staticClass:"d-flex justify-content-end"},[s.edit?e("span",[e("b-btn",{on:{click:function(s){return t.changelist(i)}}},[e("font-awesome-icon",{attrs:{icon:["fas","check"]}})],1),e("b-btn",{on:{click:function(s){return t.cancellist(i)}}},[e("font-awesome-icon",{attrs:{icon:["fas","undo"]}})],1)],1):e("span",[e("b-btn",{on:{click:function(s){return t.editlist(i)}}},[e("font-awesome-icon",{attrs:{icon:["fas","pen"]}})],1),e("b-btn",{on:{click:function(s){return t.dellist(i)}}},[e("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])])})),0)])],1)],1),e("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2.visible",modifiers:{"collapse-2":!0,visible:!0}}],staticClass:"todoBtn"},[t._v("DONE")]),e("b-collapse",{attrs:{id:"collapse-2",visible:""}},[e("b-card",[e("b-table-simple",[e("thead",[e("tr")]),e("tbody",t._l(t.finished,(function(s,i){return e("tr",{key:i},[e("td",[e("font-awesome-icon",{attrs:{icon:["far","check-circle"]}}),e("span",{staticClass:"finishedItem"},[t._v(" "+t._s(s))])],1),e("td",{staticClass:"d-flex justify-content-end"},[e("b-btn",{on:{click:function(s){return t.delfinish(i)}}},[e("font-awesome-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])})),0)])],1)],1)],1)],1)],1)],1)},a=[],n=(e("d81d"),e("99af"),{name:"List",data:function(){return{newitem:""}},computed:{state:function(){return 0===this.newitem.length?null:!(this.newitem.length<2)},list:function(){return this.$store.getters.list.map((function(t){return t.model.length<2?t.state=!1:t.state=!0,t}))},current:function(){return this.$store.state.current},finished:function(){return this.$store.state.finished},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60),s=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(s)}},methods:{additem:function(){this.state?(this.$store.commit("addList",this.newitem),this.newitem=""):this.$swal({icon:"error",title:"錯誤",text:"必須要兩個字以上"})},editlist:function(t){this.$store.commit("editList",t)},changelist:function(t){console.log(t),this.list[t].state&&this.$store.commit("changeList",t)},cancellist:function(t){this.$store.commit("cancelList",t)},dellist:function(t){this.$store.commit("delList",t)},delfinish:function(t){this.$store.commit("delFinish",t)}}}),o=n,c=e("2877"),r=Object(c["a"])(o,i,a,!1,null,null,null);s["default"]=r.exports},"41f2":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"analytics"}},[e("router-link",{staticClass:"times",attrs:{to:"/"}},[e("font-awesome-icon",{attrs:{icon:["fas","times"],size:"lg"}})],1),e("b-container",{staticClass:"ab d-flex"},[e("b-container",{staticClass:"a"},[e("b-row",{staticClass:"flex-column h-100 justify-content-between"},[e("div",[e("b-col",{staticClass:"todo"},[e("font-awesome-icon",{attrs:{icon:["fas","list"],size:"lg"}}),e("router-link",{attrs:{to:"/list"}},[t._v("TO-DO LIST")])],1),e("b-col",{staticClass:"ana"},[e("font-awesome-icon",{attrs:{icon:["fas","chart-bar"],size:"lg"}}),e("router-link",{attrs:{to:"/analytics"}},[t._v("ANALYTICS")])],1),e("b-col",{staticClass:"ring"},[e("font-awesome-icon",{attrs:{icon:["fas","music"],size:"lg"}}),e("router-link",{attrs:{to:"/settings"}},[t._v("RINGTONES")])],1)],1),e("div",[e("b-col",[e("div",{staticClass:"circle"},[e("div",{staticClass:"bigCircle"}),e("router-link",{staticClass:"play",attrs:{to:"/"}},[e("font-awesome-icon",{attrs:{icon:["fas","play"],size:"lg"}})],1),e("span",{staticClass:"time"},[t._v(t._s(t.timeText))]),e("span",{staticClass:"current"},[t._v(t._s(t.current))])],1)])],1)])],1),e("b-container",{staticClass:"b"},[e("b-row",[e("b-col",{staticClass:"focus",attrs:{cols:"12"}},[t._v("FOCUS TIME")]),e("b-col",{attrs:{cols:"6"}},[t._v("TODAY")]),e("b-col",{attrs:{cols:"6"}},[t._v("WEEK")]),e("b-col",{attrs:{cols:"6"}},[e("span",{staticClass:"number"},[t._v("20")]),e("span",{staticClass:"tomato"},[t._v("/TOMATO")])]),e("b-col",{attrs:{cols:"6"}},[e("span",{staticClass:"number"},[t._v("108")]),e("span",{staticClass:"tomato"},[t._v("/TOMATO")])]),e("b-col",{staticClass:"chart",attrs:{cols:"12"}},[t._v("CHART")]),e("apexchart",{staticClass:"apexchart",attrs:{width:"500",type:"bar",options:t.options,series:t.series}})],1)],1)],1)],1)},a=[],n=(e("99af"),{name:"Analytics",data:function(){return{series:[{name:"Data1",data:[44,55,57,56,61,58,63,60,66]}],chart:{type:"bar",height:350},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},options:{xaxis:{categories:["7/5","7/6","7/7","7/8","7/9","7/10","7/11","7/12","7/13"]}},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}}},computed:{current:function(){return this.$store.state.current},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60),s=Math.floor(this.timeleft%60);return"".concat(t," : ").concat(s)}},methods:{}}),o=n,c=e("2877"),r=Object(c["a"])(o,i,a,!1,null,null,null);s["default"]=r.exports},b727:function(t,s,e){var i=e("0366"),a=e("44ad"),n=e("7b0b"),o=e("50c4"),c=e("65f0"),r=[].push,l=function(t){var s=1==t,e=2==t,l=3==t,u=4==t,f=6==t,d=7==t,m=5==t||f;return function(b,h,p,v){for(var C,w,g=n(b),k=a(g),y=i(h,p,3),_=o(k.length),x=0,O=v||c,T=s?O(b,_):e||d?O(b,0):void 0;_>x;x++)if((m||x in k)&&(C=k[x],w=y(C,x,g),t))if(s)T[x]=w;else if(w)switch(t){case 3:return!0;case 5:return C;case 6:return x;case 2:r.call(T,C)}else switch(t){case 4:return!1;case 7:r.call(T,C)}return f?-1:l||u?u:T}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6),filterOut:l(7)}},d81d:function(t,s,e){"use strict";var i=e("23e7"),a=e("b727").map,n=e("1dde"),o=n("map");i({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=list.34b3b61b.js.map