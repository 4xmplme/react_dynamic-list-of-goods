(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var r=e(5),c=e.n(r),o=e(6),a=e(2),u=(e(11),e(0)),i=function(t){var n=t.goods;return Object(u.jsx)("ul",{children:n.map((function(t){return Object(u.jsx)("li",{"data-cy":"good",style:{color:t.color},children:t.name},t.id)}))})},s=e(1),d=e(3),f="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function p(){return l.apply(this,arguments)}function l(){return(l=Object(d.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(f).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(d.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=Object(d.a)(Object(s.a)().mark((function t(){return Object(s.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",p().then((function(t){return t.filter((function(t){return"red"===t.color}))})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var h=function(){var t=Object(a.useState)([]),n=Object(o.a)(t,2),e=n[0],r=n[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Dynamic list of Goods"}),Object(u.jsx)("button",{type:"button","data-cy":"all-button",onClick:function(){return p().then(r)},children:"Load all goods"}),Object(u.jsx)("button",{type:"button","data-cy":"first-five-button",onClick:function(){return function(){return b.apply(this,arguments)}().then(r)},children:"Load 5 first goods"}),Object(u.jsx)("button",{type:"button","data-cy":"red-button",onClick:function(){return function(){return j.apply(this,arguments)}().then(r)},children:"Load red goods"}),Object(u.jsx)(i,{goods:e})]})};c.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.726b941a.chunk.js.map