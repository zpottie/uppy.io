"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9046],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?o.createElement(g,n(n({ref:t},u),{},{components:r})):o.createElement(g,n({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var s=2;s<i;s++)n[s]=r[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1664:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const i={title:"Uppy 1.29: Golden Retriever, disableLocalFiles, Webcam previews, uppy.logout",date:new Date("2021-05-31T00:00:00.000Z"),authors:["arturi"],image:"https://uppy.io/img/blog/1.29/golden-retriever-all-recovered.png",published:!0,slug:"2021/04/1.29"},n=void 0,l={permalink:"/uppy.io/pr-preview/pr-67/blog/2021/04/1.29",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-04-1.29.md",source:"@site/blog/2021-04-1.29.md",title:"Uppy 1.29: Golden Retriever, disableLocalFiles, Webcam previews, uppy.logout",description:"In Uppy 1.29, we\u2019ve revamped the Golden Retriever plugin with support for",date:"2021-05-31T00:00:00.000Z",formattedDate:"May 31, 2021",tags:[],readingTime:2.53,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 1.29: Golden Retriever, disableLocalFiles, Webcam previews, uppy.logout",date:"2021-05-31T00:00:00.000Z",authors:["arturi"],image:"https://uppy.io/img/blog/1.29/golden-retriever-all-recovered.png",published:!0,slug:"2021/04/1.29"},prevItem:{title:"Uppy 1.30: Angular integration, granular image rotation, Google Drive shortcuts",permalink:"/uppy.io/pr-preview/pr-67/blog/2021/07/1.30"},nextItem:{title:"Uppy 1.27: Drop Target plugin, Vue 3 support, Dashboard dynamic meta fields, \u201cShared with me\u201d in Google Drive",permalink:"/uppy.io/pr-preview/pr-67/blog/2021/04/1.27"}},p={authorsImageUrls:[void 0]},s=[{value:"Golden Retriever",id:"golden-retriever",level:2},{value:"Dashboard: <code>disableLocalFiles</code>",id:"dashboard-disablelocalfiles",level:2},{value:"Webcam Previews",id:"webcam-previews",level:2},{value:"uppy.logout()",id:"uppylogout",level:2},{value:"Companion",id:"companion",level:2},{value:"Misc",id:"misc",level:2},{value:"Download",id:"download",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In Uppy 1.29, we\u2019ve revamped the Golden Retriever plugin with support for\npartially recovered \u201cghost\u201d files, added a ",(0,a.kt)("inlineCode",{parentName:"p"},"disableLocalFiles")," option to the\nDashboard, enabled the ability to preview webcam videos before submitting and\nprovided an ",(0,a.kt)("inlineCode",{parentName:"p"},"uppy.logout()")," method, along with an assortment of Companion\nimprovements."),(0,a.kt)("video",{alt:"Demo of Uppy Golden Retriever file restore plugin in action",muted:!0,autoplay:!0,loop:!0},(0,a.kt)("source",{src:"/img/blog/1.29/ghosts-demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/1.29/ghosts-demo.mp4"),(0,a.kt)("h2",{id:"golden-retriever"},"Golden Retriever"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/golden-retriever/"},"Golden Retriever")," (",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/golden-retriever"),") is Uppy\u2019s\ninnovative plugin that recovers users\u2019 files after an accidentally closed\ntab/window or a browser crash. Golden Retriever was first\n",(0,a.kt)("a",{parentName:"p",href:"/blog/2017/07/golden-retriever/"},"introduced a few years ago"),", during\nTransloadit\u2019s company meetup in Berlin, and now it finally underwent a proper\nrefactor."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(5114).Z,width:"1200",height:"880"})),(0,a.kt)("p",null,"In this release, we\u2019re adding support for \u201cghosts\u201d \u2014 files for which we\u2019ve\nrestored the metadata, but were unable to recover the data blob itself (usually\ndue to its size). In this case, users will see a ghost icon over the file and a\n\u201cRe-select\u201d button to pick the file again."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(3643).Z,width:"1200",height:"940"})),(0,a.kt)("p",null,"You can try Golden Retriever in action on\n",(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"the Dashboard example page"),"."),(0,a.kt)("center",null,(0,a.kt)("img",{src:"/img/blog/golden-retriever/catch-fail-2.gif",alt:"Golden Retriever failing to catch something",title:"Good try, girl!"})),(0,a.kt)("h2",{id:"dashboard-disablelocalfiles"},"Dashboard: ",(0,a.kt)("inlineCode",{parentName:"h2"},"disableLocalFiles")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"disableLocalFiles: true")," option will disable drag & drop, and hide the\n\u201cBrowse\u201d and \u201cMy Device\u201d buttons, allowing only uploads from plugins, such as\nWebcam, Screen Capture, Google Drive or Instagram."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(1977).Z,width:"1494",height:"1094"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/docs/dashboard/#disableLocalFiles"},"Docs: disableLocalFiles"),"."),(0,a.kt)("h2",{id:"webcam-previews"},"Webcam Previews"),(0,a.kt)("p",null,"When recording a video with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/webcam")," plugin, you will now be given the\nopportunity to play it back and review before submitting. If you happen to not\nlike the crab mask you\u2019ve used, you can re-record the video using a more\nappropriate baby Yoda or duckface mask."),(0,a.kt)("video",{alt:"Demo of Uppy Golden Retriever file restore plugin in action",muted:!0,autoplay:!0,loop:!0},(0,a.kt)("source",{src:"/img/blog/1.29/webcam-preview-demo.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/img/blog/1.29/webcam-preview-demo.mp4"),(0,a.kt)("h2",{id:"uppylogout"},"uppy.logout()"),(0,a.kt)("p",null,"When your users log out of your app, you might want to also log them out of any\ncloud providers they might have used through Uppy, for extra security."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"uppy.logout()")," calls ",(0,a.kt)("inlineCode",{parentName:"p"},"provider.logout()")," on each remote provider plugin, like\nGoogle Drive, Instagram, Dropbox, etc."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://uppy.io/docs/uppy/#uppy-logout"},"Docs: uppy-logout")),(0,a.kt)("h2",{id:"companion"},"Companion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@uppy/companion-client: rethrow original error objects (#2889 /\n@goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"Pull out metric middleware logic (#2854 / @mifi)"),(0,a.kt)("li",{parentName:"ul"},"Smaller Heroku deployment (#2845 / @goto-bus-stop)"),(0,a.kt)("li",{parentName:"ul"},"Bump redis from 2.8.0 to 3.1.1 (#2865 / @dependabot, @ kiloreux)"),(0,a.kt)("li",{parentName:"ul"},"add chunkSize Companion option (#2881 / @mifi)"),(0,a.kt)("li",{parentName:"ul"},"fix NRP TypeScript errors (#2884 / @mifi)"),(0,a.kt)("li",{parentName:"ul"},"support relative redirect URLs in responses (#2901 / @ goto-bus-stop)")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"core: use AggregateError when available (#2869 / @aduh95)"),(0,a.kt)("li",{parentName:"ul"},"build: upgrade TypeScript (#2856 / @ajkachnic)"),(0,a.kt)("li",{parentName:"ul"},"webcam: improve MIME type detection to solve issue in iOS Safari (#2851 /\n@dominiceden)")),(0,a.kt)("p",null,"See\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/blob/master/CHANGELOG.md#1291"},"changelog"),"\nfor details."),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("a",{class:"TryButton",href:"https://releases.transloadit.com/uppy/v1.29.1/uppy-v1.29.1.zip"},"Download Uppy 1.29.1"),(0,a.kt)("small",null,"Or [include from CDN](https://uppy.io/docs/). Note that it\u2019s highly recommended to [pick and choose specific Uppy plugins](https://uppy.io/docs/plugins/#package-list) that you need, and install them with `npm` or `yarn`. This is because the bundle includes all Uppy plugins at once."))}c.isMDXComponent=!0},1977:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/disableLocalFiles-4446a558b5557cef7389050794daf7d5.png"},5114:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/golden-retriever-all-recovered-b38cff840844494f6aa86cc305d4039a.png"},3643:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/golden-retriever-ghost-9e9b02b8ae7f4416a8b4026bc3461bac.png"}}]);