"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[944],{944:function(e,t,n){n.r(t);var r=n(885),o=n(791),c=n(501),u=n(299),i=n(184),a=(0,o.lazy)((function(){return n.e(354).then(n.bind(n,354))}));t.default=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],s=t[1],f=(0,o.useState)([]),h=(0,r.Z)(f,2),p=h[0],v=h[1],l=(0,c.lr)(),d=(0,r.Z)(l,2),m=d[0],b=d[1],g=m.get("query");return(0,o.useEffect)((function(){g&&(0,u.Zh)(g).then((function(e){return v(e.results)}))}),[g]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b({query:n.toLowerCase().trim()}),e.currentTarget.value=""},children:[(0,i.jsx)("input",{onChange:function(e){s(e.currentTarget.value)},value:n,name:"searchQuery",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Enter movie name"}),(0,i.jsx)("button",{type:"submit",children:(0,i.jsx)("span",{children:"Search"})})]}),(0,i.jsx)(o.Suspense,{fallback:(0,i.jsx)("div",{children:"Loading..."}),children:p.length>0&&(0,i.jsx)(a,{movies:p})})]})}},299:function(e,t,n){n.d(t,{BC:function(){return s},IQ:function(){return p},Jh:function(){return v},TP:function(){return h},Zh:function(){return f}});var r=n(861),o=n(757),c=n.n(o),u="d82e9b87075796c7a6b6bfa80b102f66";function i(){return a.apply(this,arguments)}function a(){return a=(0,r.Z)(c().mark((function e(){var t,n,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=10;break}return e.next=7,n.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not Found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function s(){return i("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u))}function f(e){return i("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(e))}function h(e){return i("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u))}function p(e){return i("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u))}function v(e){return i("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u,"&page=1"))}}}]);
//# sourceMappingURL=944.0e82162f.chunk.js.map