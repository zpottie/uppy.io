"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[7795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),d=a,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3056:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",date:new Date("2022-12-23T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.1-3.3/dashboard-christmas.jpg",published:!0,slug:"2022/12/3.3"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-74/blog/2022/12/3.3",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2022-12-3.3.md",source:"@site/blog/2022-12-3.3.md",title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",description:"\ud83c\udf85\ud83d\udc36 Ho-ho-ho, we are about to wrap up another year for Uppy! Three minor",date:"2022-12-23T00:00:00.000Z",formattedDate:"December 23, 2022",tags:[],readingTime:2.48,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"}],frontMatter:{title:"\ud83c\udf84 Uppy 3.1-3.3: Improved AWS S3 Multipart, Single File Mode",date:"2022-12-23T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon"],image:"https://uppy.io/img/blog/3.1-3.3/dashboard-christmas.jpg",published:!0,slug:"2022/12/3.3"},nextItem:{title:"Uppy 3.0: Future-proof, conveniently easy, stable as ever",permalink:"/uppy.io/pr-preview/pr-74/blog/2022/09/3.0"}},l={authorsImageUrls:[void 0,void 0,void 0,void 0]},u=[],s={toc:u},c="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9232).Z,width:"1400",height:"1097"})),(0,a.kt)("p",null,"\ud83c\udf85\ud83d\udc36 Ho-ho-ho, we are about to wrap up another year for Uppy! Three ",(0,a.kt)("inlineCode",{parentName:"p"},"minor"),"\nreleases ago we\u2019ve introduced Uppy 3.0. It\u2019s time to give you an update on\nwhat\u2019s been cooking in the Uppy-Transloadit headquarters (besides cranberry\nsauce) for the past couple of months."),(0,a.kt)("p",null,"In short: AWS S3 Multipart stability improvements, Single File Mode for the\nDashboard, more tests and bugfixes, new locales."))}m.isMDXComponent=!0},9232:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/dashboard-christmas-7bdeb276706cce5b1944c93b7680ccfa.jpg"}}]);