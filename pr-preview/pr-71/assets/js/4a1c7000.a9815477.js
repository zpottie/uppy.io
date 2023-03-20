"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(g,i(i({ref:t},s),{},{components:r})):a.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={title:"Uppy 1.30: Angular integration, granular image rotation, Google Drive shortcuts",date:new Date("2021-07-02T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2021/07/1.30"},i=void 0,p={permalink:"/uppy.io/pr-preview/pr-71/blog/2021/07/1.30",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-07-1.30.md",source:"@site/blog/2021-07-1.30.md",title:"Uppy 1.30: Angular integration, granular image rotation, Google Drive shortcuts",description:"Uppy 1.30 introduces the long-awaited Angular integration (beta), granular image",date:"2021-07-02T00:00:00.000Z",formattedDate:"July 2, 2021",tags:[],readingTime:1.66,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.30: Angular integration, granular image rotation, Google Drive shortcuts",date:"2021-07-02T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2021/07/1.30"},prevItem:{title:"Uppy 2.0.0: smaller, faster, modular plugins, Preact X, stricter types, and much more",permalink:"/uppy.io/pr-preview/pr-71/blog/2021/08/2.0"},nextItem:{title:"Uppy 1.29: Golden Retriever, disableLocalFiles, Webcam previews, uppy.logout",permalink:"/uppy.io/pr-preview/pr-71/blog/2021/04/1.29"}},l={authorsImageUrls:[void 0]},u=[{value:"Angular integration",id:"angular-integration",level:2},{value:"Granular image rotation",id:"granular-image-rotation",level:2},{value:"Google Drive Shortcuts",id:"google-drive-shortcuts",level:2},{value:"Misc",id:"misc",level:2},{value:"Download",id:"download",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Uppy 1.30 introduces the long-awaited Angular integration (beta), granular image\nrotation and Google Drive shortcuts."),(0,n.kt)("h2",{id:"angular-integration"},"Angular integration"),(0,n.kt)("p",null,"Uppy now has an official Angular integration! It\u2019s still in beta, so please try\nit out and do let us know how we can improve through\n",(0,n.kt)("a",{parentName:"p",href:"https://mobile.twitter.com/uppy_io/"},"Twitter")," or\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy"},"GitHub"),". The original draft implementation\nwas made by ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adammedford"},"Adam Medford"),", then finalized,\npolished and brought to release today by\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ajkachnic"},"Andrew Kachnic")," \ud83d\udc4f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @uppy/angular\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"// app.component.ts\n\nimport { Component } from '@angular/core';\nimport { Uppy } from '@uppy/core';\n\n@Component({\n    selector: 'app-root',\n})\nexport class AppComponent {\n    uppy: Uppy = new Uppy({ debug: true, autoProceed: true });\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!--- app.component.html --\x3e\n\n<uppy-dashboard [uppy]="uppy"> </uppy-dashboard>\n')),(0,n.kt)("p",null,"The following plugins are available as Angular component wrappers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<uppy-dashboard />")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<uppy-drag-drop />")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<uppy-progress-bar />")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<uppy-status-bar />"))),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"/docs/angular/"},"Angular docs")," for more details."),(0,n.kt)("h2",{id:"granular-image-rotation"},"Granular image rotation"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/image-editor")," plugin received a new option ",(0,n.kt)("inlineCode",{parentName:"p"},"granularRotate: true")," that\nallows for granular image rotation: be it 12\xb0 or 59\xb0 \u2014 just adjust the slider to\nyour liking."),(0,n.kt)("video",{alt:"",muted:!0,autoplay:!0,loop:!0},(0,n.kt)("source",{src:"/img/blog/1.30/granular-rotation.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/1.30/granular-rotation.mp4"),(0,n.kt)("h2",{id:"google-drive-shortcuts"},"Google Drive Shortcuts"),(0,n.kt)("p",null,"Google Drive shortcuts, much like in a desktop OS, are pointers to files or\nfolders that can be stored in another folder or drive. Uppy now supports\nshortcuts \u2013 you will see them alongside your usual files and folders."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(9358).Z,width:"1400",height:"898"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1031).Z,width:"1200",height:"940"})),(0,n.kt)("h2",{id:"misc"},"Misc"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"@uppy/react: allowed HTML attributes to be passed via props (#2891 /\n@ajkachnic)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/drag-drop: Expose drag-drop events (#2914 / @Murderlon)"),(0,n.kt)("li",{parentName:"ul"},"@uppy/companion: add ",(0,n.kt)("inlineCode",{parentName:"li"},"logClientVersion")," option (#2855 / @mifi)"),(0,n.kt)("li",{parentName:"ul"},"build: Fix eslint uppy package imports (#2915 / @Murderlon)")),(0,n.kt)("p",null,"See the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1300"},"changelog"),"\nfor more details."),(0,n.kt)("h2",{id:"download"},"Download"),(0,n.kt)("a",{class:"TryButton",href:"https://releases.transloadit.com/uppy/v1.29.1/uppy-v1.30.0.zip"},"Download Uppy 1.30 Bundle"),(0,n.kt)("small",null,"Or [include from CDN](https://uppy.io/docs/). Note that it\u2019s highly recommended to [pick and choose specific Uppy plugins](https://uppy.io/docs/plugins/#package-list) that you need, and install them with `npm` or `yarn`. This is because the bundle includes all Uppy plugins at once."))}d.isMDXComponent=!0},9358:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/drive-shortcut-8e2ea1eb3b003abb51d0c1f080b3f11c.png"},1031:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/uppy-shortcut-bcc51c3d4b0990a0ae9a8fa8dd5384a1.png"}}]);