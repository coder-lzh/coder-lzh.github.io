webpackJsonp([69],{371:function(t,e,a){"use strict";function n(t){a(860)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(593),r=a(767),s=a(73),c=n,l=s(i.a,r.a,!1,c,"data-v-369d0141",null);e.default=l.exports},593:function(t,e,a){"use strict";e.a={name:"TextOne",data:function(){return{placeholder:"100\n101\n102\n103\n104\n105\n106",textarea:"",checkList:["1","2"]}},methods:{clear:function(){this.textarea=""},exec:function(){if(this.textarea){var t=this.textarea.split("\n");if(2==this.checkList.length){t=t.filter(function(t){return t}).map(function(t){return'"'+t.trim()+'",'});var e=t[t.length-1];t[t.length-1]=e.substring(0,e.length-1)}else-1!=this.checkList.indexOf("1")?t=t.filter(function(t){return t}).map(function(t){return'"'+t.trim()+'"'}):-1!=this.checkList.indexOf("2")?t=t.filter(function(t){return t}).map(function(t){return t.trim()+","}):this.$message({message:"什么规则都不加，执行毛啊~",type:"error"});var a=t.join("\n");this.textarea=a}else this.textarea=this.placeholder,this.exec()}}}},663:function(t,e,a){e=t.exports=a(7)(void 0),e.push([t.i,".btnClass[data-v-369d0141]{margin:5px 15px}.el-checkbox-group[data-v-369d0141]{display:inline-block}",""])},767:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-input",{staticClass:"textOne-Textarea",attrs:{type:"textarea",placeholder:t.placeholder},model:{value:t.textarea,callback:function(e){t.textarea=e},expression:"textarea"}}),t._v(" "),a("div",[a("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},[a("el-checkbox",{attrs:{label:"1"}},[t._v("添加双引号")]),t._v(" "),a("el-checkbox",{attrs:{label:"2"}},[t._v("添加逗号")])],1),t._v(" "),a("el-button",{staticClass:"btnClass",attrs:{size:"small",type:"primary"},on:{click:t.exec}},[t._v("执行")]),t._v(" "),a("el-button",{staticClass:"btnClass",attrs:{size:"small",type:"danger"},on:{click:t.clear}},[t._v("清空")])],1)],1)},i=[],r={render:n,staticRenderFns:i};e.a=r},860:function(t,e,a){var n=a(663);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(74)("a458c266",n,!0,{})}});