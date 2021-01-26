(this["webpackJsonpuseform-example"]=this["webpackJsonpuseform-example"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),a=n.n(s),i=n(6),c=n.n(i),u=(n(12),n(2)),l=n(3),o=n(4),b=function(e,t){return"string"===typeof e?e:"object"===typeof e&&e.hasOwnProperty("message")?e.message:t},j=function(e,t){return"string"===typeof e||"number"===typeof e?e:"object"===typeof e&&e.hasOwnProperty("value")?e.value:t},f={required:function(e,t){return""!==e||b(t,"The field field is required")},minLength:function(e,t){return!(e.length<j(t,1))||b(t,"This field must be at least ".concat(j(t,1)," characters."))},maxLength:function(e,t){return!(e.length>j(t,1))||b(t,"This field may not be greater than ".concat(j(t,1)," characters."))}},h=function(e,t){if(e){var n=[],r=void 0;return Object.keys(e).forEach((function(s){var a=e[s];"function"===typeof a?!1!==(r=a(t))&&"string"!==typeof r||n.push(r):f.hasOwnProperty([s])&&(!1!==(r=f[s](t,a))&&"string"!==typeof r||n.push(r))})),n.length?n[0]:void 0}},d=function(e){var t=e.schema,n=e.initialValues,r=e.onSubmit,a=Object(s.useState)(n||{}),i=Object(o.a)(a,2),c=i[0],b=i[1],j=Object(s.useState)({}),f=Object(o.a)(j,2),d=f[0],m=f[1],O=Object(s.useState)({}),g=Object(o.a)(O,2),p=g[0],x=g[1],v=Object(s.useState)(!1),y=Object(o.a)(v,2),S=y[0],N=y[1],T=function(e,n){b((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(u.a)({},e,n))})),x((function(r){return Object(l.a)(Object(l.a)({},r),{},Object(u.a)({},e,h(t[e],n)))}))},k=function(){b(n),m({}),x({}),N(!1)};return{values:c,errors:p,touched:d,isSubmitting:S,setIsSubmitting:N,setValue:T,reset:k,handleChange:function(e){var t=e.target.name,n=e.target.value;if(!t)return null;T(t,n)},handleSubmit:function(e){e.preventDefault(),m(Object.keys(c).reduce((function(e,t){return e[t]=!0,e}),{})),0===function(){var e=Object.keys(t).map((function(e){return{name:e,error:h(t[e],c[e])}})).filter((function(e){return Boolean(e.error)}));return e.length&&x(e.reduce((function(e,t){return e[t.name]=t.error,e}),{})),e}().length&&(N(!0),r({setIsSubmitting:N,reset:k},e))}}};var m=function(){var e=d({initialValues:{firstname:"",lastname:""},schema:{firstname:{required:"This is a custom message. This field is required",maxLength:10,validate:function(e){return!(e.length<=4)||"The field must be at least 5 characters."}}},onSubmit:function(e){console.log("Ready to send to backend...",{values:t}),setInterval((function(){e.reset()}),3e3)}}),t=e.values,n=e.errors,s=e.touched,a=e.isSubmitting,i=e.handleChange,c=e.handleSubmit;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:c,children:[Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsx)("label",{children:"First Name:"}),Object(r.jsx)("input",{type:"text",name:"firstname",value:t.firstname,onChange:i}),n.firstname&&s.firstname&&Object(r.jsx)("span",{className:"invalid",children:n.firstname})]}),Object(r.jsxs)("div",{className:"flex flex-col",children:[Object(r.jsx)("label",{children:"Last Name:"}),Object(r.jsx)("input",{type:"text",name:"lastname",value:t.lastname,onChange:i})]}),Object(r.jsx)("button",{type:"submit",disabled:a,children:"submit"})]}),Object(r.jsxs)("div",{className:"debug",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Errors:"}),Object(r.jsx)("pre",{children:JSON.stringify(n,null,2)})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Touched:"}),Object(r.jsx)("pre",{children:JSON.stringify(s,null,2)})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"Values:"}),Object(r.jsx)("pre",{children:JSON.stringify(t,null,2)})]})]})]})};c.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5974d43b.chunk.js.map