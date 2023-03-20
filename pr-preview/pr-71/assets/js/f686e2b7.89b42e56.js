"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[3502],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1874:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Uppy 0.12: Responsive. Cancel. Feedback. Refreshed\xa0ES6 server",date:new Date("2016-12-07T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2016/12/0.12"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-71/blog/2016/12/0.12",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2016-12-0.12.md",source:"@site/blog/2016-12-0.12.md",title:"Uppy 0.12: Responsive. Cancel. Feedback. Refreshed\xa0ES6 server",description:"Hello! Here\u2019s what\u2019s new in Uppy 0.12.",date:"2016-12-07T00:00:00.000Z",formattedDate:"December 7, 2016",tags:[],readingTime:3.095,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.12: Responsive. Cancel. Feedback. Refreshed\xa0ES6 server",date:"2016-12-07T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2016/12/0.12"},prevItem:{title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",permalink:"/uppy.io/pr-preview/pr-71/blog/2017/02/0.14"},nextItem:{title:"Uppy 0.11: StatusBar, research, https and API docs",permalink:"/uppy.io/pr-preview/pr-71/blog/2016/11/0.11"}},p={authorsImageUrls:[void 0]},s=[{value:"Dashboard: local mode and multipart uploads support in UI",id:"dashboard-local-mode-and-multipart-uploads-support-in-ui",level:2},{value:"Server",id:"server",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Hello! Here\u2019s what\u2019s new in Uppy 0.12."),(0,n.kt)("h2",{id:"dashboard-local-mode-and-multipart-uploads-support-in-ui"},"Dashboard: local mode and multipart uploads support in UI"),(0,n.kt)("p",null,"Prior to this release, we\u2019ve optimized the Dashboard for usage with multiple\n\u201cacquire plugins\u201d, say Webcam + Google Drive. But sometimes all you need is\n\u201clocal disk\u201d with drag & drop support, nice file previews and progress. And now\nthe Dashboard UI works great with that use case out of the box. When you don\u2019t\nadd (.use) any acquire plugins, it looks like this:"),(0,n.kt)("figure",{class:"wide"},(0,n.kt)("img",{src:"/img/blog/0.12/uppy-dashboard-local.jpg"})),(0,n.kt)("p",null,"Also (prior to this release), we\u2019ve built the Dashboard to work well with\n",(0,n.kt)("a",{parentName:"p",href:"http://tus.io"},"tus resumable uploads"),". That\u2019s why you can pause and resume\nindividual uploads, as well as all at once. But if you use an endpoint that is\nnot yet ready for the future and upload resumability (here\u2019s\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-node-server"},"how")," to\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tus/tusd"},"fix that"),", by the way), the Dashboard UI will show\nregular \u201ccancel\u201d buttons instead of pause/resume."),(0,n.kt)("p",null,"Dashboard is gradually becoming more mobile friendly too, but we\u2019ll be saving\nsome of that stuff for the next release."),(0,n.kt)("h2",{id:"server"},"Server"),(0,n.kt)("p",null,"Uppy server has undergone a quite a few changes, including the build setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We are using ES2015, transpiling to ES5 with Babel."),(0,n.kt)("li",{parentName:"ul"},"Added linting, lint-staged, pre-commit all that good stuff."),(0,n.kt)("li",{parentName:"ul"},"Added ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run release")," command that publishes releases for us."),(0,n.kt)("li",{parentName:"ul"},"Google Drive is working again on the Uppy Server side."),(0,n.kt)("li",{parentName:"ul"},"Refactoring, error handling and more minor improvements.")))}c.isMDXComponent=!0}}]);