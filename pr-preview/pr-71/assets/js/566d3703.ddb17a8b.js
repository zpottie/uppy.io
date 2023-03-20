"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6626],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},625:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={title:"Uppy 2.0.0: smaller, faster, modular plugins, Preact X, stricter types, and much more",date:new Date("2021-08-30T00:00:00.000Z"),authors:["aduh95","arturi","mifi","murderlon","renee","andrew"],image:"https://uppy.io/img/blog/2.0/uppy-2-0-cover.jpg",published:!0,slug:"2021/08/2.0"},o=void 0,l={permalink:"/uppy.io/pr-preview/pr-71/blog/2021/08/2.0",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2021-08-2.0.md",source:"@site/blog/2021-08-2.0.md",title:"Uppy 2.0.0: smaller, faster, modular plugins, Preact X, stricter types, and much more",description:"Today, our tails are positively wagging with excitement about the release of",date:"2021-08-30T00:00:00.000Z",formattedDate:"August 30, 2021",tags:[],readingTime:8.85,hasTruncateMarker:!0,authors:[{email:"antoine@transloadit.com",name:"Antoine du Hamel",id:"aduh95",tagline:"Developer",imageURL:"https://github.com/aduh95.png",key:"aduh95"},{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"},{email:"mikael@transloadit.com",name:"Mikael Finstad",id:"mikael",tagline:"Developer",imageURL:"https://github.com/mifi.png",key:"mifi"},{email:"merlijn@transloadit.com",name:"Merlijn Vos",id:"merlijn",tagline:"Developer",imageURL:"https://github.com/murderlon.png",key:"murderlon"},{email:"github@kooi.me",name:"Ren\xe9e Kooi",id:"renee",tagline:"Developer",imageURL:"https://github.com/goto-bus-stop.png",key:"renee"},{email:"andrew@transloadit.com",name:"Andrew Kachnic",id:"andrew",tagline:"Developer",key:"andrew"}],frontMatter:{title:"Uppy 2.0.0: smaller, faster, modular plugins, Preact X, stricter types, and much more",date:"2021-08-30T00:00:00.000Z",authors:["aduh95","arturi","mifi","murderlon","renee","andrew"],image:"https://uppy.io/img/blog/2.0/uppy-2-0-cover.jpg",published:!0,slug:"2021/08/2.0"},prevItem:{title:"\ud83c\udf84 Uppy 2.1-2.3: Audio plugin, fast and efficient streaming for Companion, production-ready Unsplash, and more",permalink:"/uppy.io/pr-preview/pr-71/blog/2021/12/2.1/2.3"},nextItem:{title:"Uppy 1.30: Angular integration, granular image rotation, Google Drive shortcuts",permalink:"/uppy.io/pr-preview/pr-71/blog/2021/07/1.30"}},p={authorsImageUrls:[void 0,void 0,void 0,void 0,void 0,void 0]},s=[{value:"A pup no more",id:"a-pup-no-more",level:2},{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Highlights since 1.0",id:"highlights-since-10",level:2},{value:"Smaller bundles",id:"smaller-bundles",level:2},{value:"Faster",id:"faster",level:2},{value:"Preact X and upgraded dependencies",id:"preact-x-and-upgraded-dependencies",level:2},{value:"<code>Plugin</code> is replaced with <code>BasePlugin</code> and <code>UIPlugin</code>",id:"plugin-is-replaced-with-baseplugin-and-uiplugin",level:2},{value:"Strict TypeScript types by default",id:"strict-typescript-types-by-default",level:2},{value:"Event types",id:"event-types",level:3},{value:"Batch pre-signing URLs for AWS S3 Multipart",id:"batch-pre-signing-urls-for-aws-s3-multipart",level:2},{value:"And more",id:"and-more",level:2},{value:"What future remains for 1.0?",id:"what-future-remains-for-10",level:2},{value:"That&#39;s it!",id:"thats-it",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Today, our tails are positively wagging with excitement about the release of\nUppy 2.0! This latest version is on average 25% smaller and up to a thousand\ntimes faster, thanks to dropping support for IE11 and a lot of refactoring work.\nWe\u2019ve upgraded many dependencies, most notably Preact 8 to Preact X, greatly\nimproved TypeScript support and screen reader accessibility, paid technical\ndebt, and added support for multiple messages in the Informer plugin."),(0,r.kt)("p",null,"Chow down on all the juicy bits and pieces inside! And make sure to\n",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/examples/dashboard/"},"try Uppy live demo"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Uppy 2.0 cover banner",src:a(8631).Z,width:"1200",height:"630"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Uppy is a sleek, modular JavaScript file uploader that integrates seamlessly\nwith any application. It is made for developers who want to provide their\nusers with the ability to see image previews, edit metadata, pick large files\ndirectly from Dropbox, restore selected files when a tab was accidentally\nclosed, or crop an image in-browser before sending.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"a-pup-no-more"},"A pup no more"),(0,r.kt)("p",null,"Ever since the first introduction of Uppy\n",(0,r.kt)("a",{parentName:"p",href:"/blog/2016/07/uppy-begins/"},"five years ago")," (or 36 in\n",(0,r.kt)("a",{parentName:"p",href:"https://www.akc.org/expert-advice/health/how-to-calculate-dog-years-to-human-years/"},"dog-years"),"),\nwe\u2019ve always referred to our project as \u2018the next open source file uploader for\nweb browsers\u2019. The release of ",(0,r.kt)("a",{parentName:"p",href:"/blog/2019/04/1.0/"},"Uppy 1.0")," a little over two\nyears ago, however, soon led to a steep increase in adoption. Uppy now boasts\nover\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/stargazers"},"24,000 stargazers on GitHub"),",\nmaking it the undisputed top dog in the world of file uploaders \ud83c\udf0d"),(0,r.kt)("p",null,"With that in mind, we felt it was high time to give Uppy some more much-needed\ntrimming. We want to take this opportunity to break with the past, to make the\nproject leaner \u2013 and to pave the way for an even brighter future for Uppy!"),(0,r.kt)("img",{className:"border",alt:"Uppy 2.0 UI with files",src:"/img/blog/2.0/uppy-ui-with-files.jpg"}),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Highlights-since-1-0"},"Highlights since 1.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Smaller-bundles"},"Smaller bundles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Faster"},"Faster")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Preact-X-and-upgraded-dependencies"},"Preact X and upgraded dependencies")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Plugin-is-replaced-with-BasePlugin-and-UIPlugin"},(0,r.kt)("inlineCode",{parentName:"a"},"Plugin")," is replaced with ",(0,r.kt)("inlineCode",{parentName:"a"},"BasePlugin")," and ",(0,r.kt)("inlineCode",{parentName:"a"},"UIPlugin"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Strict-TypeScript-types-by-default"},"Strict TypeScript types by default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#Batch-pre-signing-URLs-for-AWS-S3-Multipart"},"Batch pre-signing URL's for AWS S3 Multipart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#And-more"},"And more")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#What-future-remains-for-1-0?"},"What future remains for 1.0?")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#That%E2%80%99s-it"},"That's it"))),(0,r.kt)("video",{alt:"Video demo showing updated Uppy 2.0 UI",muted:!0,autoplay:!0,loop:!0},(0,r.kt)("source",{src:"/images/uppy-2-0-demo-aug-2021.mp4",type:"video/mp4"}),"Your browser does not support the video tag: https://uppy.io/images/uppy-2-0-demo-aug-2021.mp4"),(0,r.kt)("h2",{id:"highlights-since-10"},"Highlights since 1.0"),(0,r.kt)("p",null,"A lot of things have happened since we released Uppy 1.0 in April of 2019. In\ncase you have missed some of our 1.x releases, here is a small overview. We have\nadded:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Official integrations for ",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/11/1.23/"},"Vue"),"\n(",(0,r.kt)("a",{parentName:"li",href:"/blog/2021/04/1.27/"},"3"),"), ",(0,r.kt)("a",{parentName:"li",href:"/blog/2021/07/1.30/"},"Angular"),", and\n",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/12/1.24/"},"Svelte")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/12/1.24/"},"Hooks")," for the React integration"),(0,r.kt)("li",{parentName:"ul"},"Support for picking files from ",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/11/1.23/"},"Box"),",\n",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/10/1.22/"},"Unsplash"),", ",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/04/1.10/"},"Facebook"),", and\n",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/04/1.10/"},"OneDrive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2021/05/1.29/"},"\u201cGhost\u201d files"),", as part of a revamped Golden Retriever\nplugin, which makes recovering lost files even more intuitive"),(0,r.kt)("li",{parentName:"ul"},"Support for 25 more languages (bringing it to a total of\n",(0,r.kt)("a",{parentName:"li",href:"/docs/locales/#List-of-locale-packs"},"37"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2020/04/1.13/"},"Dark mode")),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("a",{parentName:"li",href:"/blog/2020/07/1.18-image-editor/"},"Image Editor")),(0,r.kt)("li",{parentName:"ul"},"And four new core team members: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ajkachnic"},"@ajkachnic"),",\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mifi"},"@mifi"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/aduh95"},"@aduh95"),", and\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/murderlon"},"@murderlon"))),(0,r.kt)("h2",{id:"smaller-bundles"},"Smaller bundles"),(0,r.kt)("p",null,"With 2.0, following in the footsteps of Microsoft, we are dropping support for\nIE11. As a result, we are able to remove all built-in polyfills, and the new\nbundle size is ",(0,r.kt)("strong",{parentName:"p"},"25% smaller"),"! If you want your app to still support older\nbrowsers (such as IE11), you may need to add the following polyfills to your\nbundle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mo/abortcontroller-polyfill"},"abortcontroller-polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zloirock/core-js"},"core-js")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/mozdevs/mediaDevices-getUserMedia-polyfill"},"md-gum-polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/que-etc/resize-observer-polyfill"},"resize-observer-polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/github/fetch"},"whatwg-fetch"))),(0,r.kt)("p",null,"If you're using a bundler, you need import these before Uppy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import 'core-js';\nimport 'whatwg-fetch';\nimport 'abortcontroller-polyfill/dist/polyfill-patch-fetch';\n// Order matters here: AbortController needs fetch, which needs Promise (provided by core-js).\n\nimport 'md-gum-polyfill';\nimport ResizeObserver from 'resize-observer-polyfill';\n\nwindow.ResizeObserver ??= ResizeObserver;\n\nexport { default } from '@uppy/core';\nexport * from '@uppy/core';\n")),(0,r.kt)("p",null,"If you're using Uppy from a CDN, we now provide two bundles: one for up-to-date\nbrowsers that do not include polyfills and use modern syntax, and one for legacy\nbrowsers. When migrating, be mindful about the types of browsers you want to\nsupport:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Modern browsers (recommended) --\x3e\n<script src="https://releases.transloadit.com/uppy/v2.0.1/uppy.min.js"><\/script>\n\n\x3c!-- Legacy browsers (IE11+) --\x3e\n<script\n    nomodule\n    src="https://releases.transloadit.com/uppy/v2.0.1/uppy.legacy.min.js"\n><\/script>\n<script type="module">\n    import \'https://releases.transloadit.com/uppy/v2.0.1/uppy.min.js\';\n<\/script>\n')),(0,r.kt)("p",null,"Please note that while you may be able to get 2.0 to work in IE11 this way, we\ndo not officially support it anymore."),(0,r.kt)("h2",{id:"faster"},"Faster"),(0,r.kt)("p",null,"Uppy now loads faster thanks to the decreased bundle size. With Uppy 1.0, adding\nmany files (hundreds or even thousands) used to take dozens of seconds. Uppy 2.0\ndoes the same thing in mere milliseconds! So, at least for this specific use\ncase, we feel comfortable in claiming that you may see your loading times go\n",(0,r.kt)("strong",{parentName:"p"},"up to a thousand times faster"),"."),(0,r.kt)("p",null,"This was made possible by avoiding having to re-render all the file components\nwhenever something changes, using ",(0,r.kt)("inlineCode",{parentName:"p"},"memoize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"virtual-list")," (allowing us to\nonly render what is actually visible on screen). In addition, multiple files are\nnow added to state in one go via ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.addFiles(Array)")," as opposed to before,\nwhen ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.addFile(File)")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.setState")," were being called in a loop."),(0,r.kt)("p",null,"Before optimizations:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2486).Z,width:"800",height:"438"})),(0,r.kt)("p",null,"And after:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8044).Z,width:"800",height:"438"})),(0,r.kt)("h2",{id:"preact-x-and-upgraded-dependencies"},"Preact X and upgraded dependencies"),(0,r.kt)("p",null,"We\u2019ve upgraded almost all of Uppy\u2019s dependencies. This includes the migration to\nPreact X. All plugins that depend on Preact have been upgraded from ",(0,r.kt)("inlineCode",{parentName:"p"},"8.2.9")," to\nthe latest version ",(0,r.kt)("inlineCode",{parentName:"p"},"10.5.13"),". If you\u2019d like your custom plugin to continue\nworking with Uppy 2.0, it also needs to be using latest version of Preact."),(0,r.kt)("p",null,"Other notable upgrades include browserify to ",(0,r.kt)("inlineCode",{parentName:"p"},"v10"),", typescript to ",(0,r.kt)("inlineCode",{parentName:"p"},"v4.3"),",\nautoprefixer to ",(0,r.kt)("inlineCode",{parentName:"p"},"v10"),", and lerna to ",(0,r.kt)("inlineCode",{parentName:"p"},"v4"),"."),(0,r.kt)("h2",{id:"plugin-is-replaced-with-baseplugin-and-uiplugin"},(0,r.kt)("inlineCode",{parentName:"h2"},"Plugin")," is replaced with ",(0,r.kt)("inlineCode",{parentName:"h2"},"BasePlugin")," and ",(0,r.kt)("inlineCode",{parentName:"h2"},"UIPlugin")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/core"))," provided a ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin")," class for creating plugins. This was\nused for any official plugin, but also for users who want to create their own\ncustom plugin. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin")," always came bundled with Preact, even if the\nplugin itself didn't add any UI elements."),(0,r.kt)("p",null,"As of Uppy 2.0.0, ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugin")," has been replaced with ",(0,r.kt)("inlineCode",{parentName:"p"},"BasePlugin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"UIPlugin"),".\n",(0,r.kt)("inlineCode",{parentName:"p"},"BasePlugin")," is the minimum you need to create a plugin and ",(0,r.kt)("inlineCode",{parentName:"p"},"UIPlugin")," adds\nPreact for rendering user interfaces."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," some bundlers will include ",(0,r.kt)("inlineCode",{parentName:"p"},"UIPlugin")," (and therefore Preact) if you\nimport from ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/core"),". To make sure this does not happen, you can import\n",(0,r.kt)("inlineCode",{parentName:"p"},"Uppy")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BasePlugin")," directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core/lib/Uppy.js';\nimport BasePlugin from '@uppy/core/lib/BasePlugin.js';\n")),(0,r.kt)("p",null,"Interested in creating your own plugin? Check out the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/writing-plugins"},"\u201cwriting plugins\u201d")," guide."),(0,r.kt)("h2",{id:"strict-typescript-types-by-default"},"Strict TypeScript types by default"),(0,r.kt)("p",null,"Uppy used to have loose types by default and strict types as an opt-in. The\ndefault export was a function that returned the ",(0,r.kt)("inlineCode",{parentName:"p"},"Uppy")," class, and the types came\nbundled with the default export (",(0,r.kt)("inlineCode",{parentName:"p"},"Uppy.SomeType"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import Uppy from '@uppy/core';\nimport Tus from '@uppy/tus';\n\nconst uppy = Uppy<Uppy.StrictTypes>();\n\nuppy.use(Tus, {\n    invalidOption: null, // this will make the compilation fail!\n});\n")),(0,r.kt)("p",null,"Uppy is now strictly typed by default and loose types have been removed. The\ndefault export is the ",(0,r.kt)("inlineCode",{parentName:"p"},"Uppy")," class and not a function. This means you need to\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"Uppy")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"new")," keyword when initializing it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// ...\n\nconst uppy = new Uppy();\n\nuppy.use(Tus, {\n    invalidOption: null, // this will make the compilation fail!\n});\n")),(0,r.kt)("p",null,"Uppy types are now individual exports and should be imported separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import type { PluginOptions, UIPlugin, PluginTarget } from '@uppy/core';\n")),(0,r.kt)("h3",{id:"event-types"},"Event types"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/core"))," provides an ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/#uppy-on-39-event-39-action"},(0,r.kt)("inlineCode",{parentName:"a"},".on")),"\nmethod to listen to ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy/#Events"},"events"),". The types for these events\nwere loose and allowed for invalid events to be passed, such as\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.on('upload-errrOOOoooOOOOOrrrr')"),"."),(0,r.kt)("p",null,"Events have received a big update thanks to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Hawxy"},"@Hawxy"),",\nmaking them more strict and accurate."),(0,r.kt)("p",null,"A breaking change was required to make this happen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Before:\n\ntype Meta = { myCustomMetadata: string };\n\n// Invalid event\nuppy.on<Meta>('upload-errrOOOoooOOOOOrrrr', () => {\n    // ...\n});\n\n// After:\n\n// Normal event signature\nuppy.on('complete', (result) => {\n    const successResults = result.successful;\n});\n\n// Custom signature\ntype Meta = { myCustomMetadata: string };\n\n// Notice how the custom type has now become the second argument\nuppy.on<'complete', Meta>('complete', (result) => {\n    // The passed type is now merged into the `meta` types.\n    const meta = result.successful[0].meta.myCustomMetadata;\n});\n")),(0,r.kt)("p",null,"Plugins that add their own events can merge with existing ones in ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/core"),"\nwith ",(0,r.kt)("inlineCode",{parentName:"p"},"declare module '@uppy/core' { ... }"),". This is a TypeScript pattern called\n",(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation"},"module augmentation"),".\nFor instance, when using ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"uppy.on('dashboard:file-edit-start', (file) => {\n    const fileName = file.name;\n});\n")),(0,r.kt)("h2",{id:"batch-pre-signing-urls-for-aws-s3-multipart"},"Batch pre-signing URLs for AWS S3 Multipart"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/aws-s3-multipart/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/aws-s3-multipart"))," plugin can be used to upload\nfiles directly to an S3 bucket using S3\u2019s Multipart upload strategy. With this\nstrategy, files are chopped up in parts of 5MB+ each, so they can be uploaded\nconcurrently. It is also very reliable: if a single part fails to upload, only\nthat 5MB chunk has to be retried."),(0,r.kt)("p",null,"However, in Uppy 1.0, every part had to make the trip to the server to generate\na pre-signed URL. This meant that a 1GB file uploaded in 5MB chunks would\nrequire two hundred trips to the server."),(0,r.kt)("p",null,"As of Uppy 2.0.0, we now pre-sign URLs in batches. That same 1GB file now only\ntakes fifty trips to the server (if the limit was four)."),(0,r.kt)("p",null,"This is now the new default. Thanks to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/martin-brennan"},"@martin-brennan")," for this contribution!"),(0,r.kt)("p",null,"Do you care about reliable uploads? You could also consider ",(0,r.kt)("a",{parentName:"p",href:"/docs/tus/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/tus")),"\nwith a self-hosted or Transloadit Tus server. Tus can resume uploads, supports\nsmaller chunks, and offers increased upload speeds."),(0,r.kt)("h2",{id:"and-more"},"And more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},".run")," method on the ",(0,r.kt)("inlineCode",{parentName:"li"},"Uppy")," instance has been removed. This method was\nalready obsolete and only logged a warning. As of this major version, it no\nlonger exists."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/informer/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/informer"))," now supports showing multiple notifications at\nthe same time. The notifications themselves have also been improved."),(0,r.kt)("li",{parentName:"ul"},"Improved screen reader accessibility for checkboxes and the 'remove file'\nbutton for ",(0,r.kt)("a",{parentName:"li",href:"/docs/dashboard/"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/dashboard")),"."),(0,r.kt)("li",{parentName:"ul"},"Sort files and folders alphabetically in the Google Drive provider."),(0,r.kt)("li",{parentName:"ul"},"Polished our code base with improved eslint rules, private field methods, and\nother modern JavaScript features that help us write more intention-revealing\nand safe code."),(0,r.kt)("li",{parentName:"ul"},"To make Uppy more friendly towards new contributors, we have renamed our\n",(0,r.kt)("inlineCode",{parentName:"li"},"master")," branch to ",(0,r.kt)("inlineCode",{parentName:"li"},"main"),".")),(0,r.kt)("h2",{id:"what-future-remains-for-10"},"What future remains for 1.0?"),(0,r.kt)("p",null,"Uppy 1.0 will continue to receive bug fixes for three more months (until"),(0,r.kt)("time",{datetime:"2021-12-01"},"1 December 2021"),"), security fixes for one more year (until ",(0,r.kt)("time",{datetime:"2022-09-01"},"1 September 2022"),"), but no more new features after today. Exceptions are unlikely, but _can_ be made \u2013 to accommodate those with commercial support contracts, for example.",(0,r.kt)("h2",{id:"thats-it"},"That's it!"),(0,r.kt)("p",null,"We hope you'll waste no time in taking Uppy 2.0 out for a walk. When you do,\nplease let us know what you thought of it on\n",(0,r.kt)("a",{parentName:"p",href:"https://www.reddit.com/r/javascript/comments/penbr7/uppy_file_uploader_20_smaller_and_faster_modular/"},"Reddit"),",\n",(0,r.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=28359287"},"HN"),", ProductHunt, or\n",(0,r.kt)("a",{parentName:"p",href:"https://twitter.com/uppy_io/status/1432399270846603264"},"Twitter"),". We're howling\nat the moon to hear from you!"))}m.isMDXComponent=!0},8631:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uppy-2-0-cover-1e95fd5e9bcdf0f841e1ceb04f3f4595.jpg"},8044:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uppy-performance-after-f44f25665c7970c71d9c5c93c5009a6d.gif"},2486:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/uppy-performance-before-b2a473c8bdbee03af5ea1c6a13d781fc.gif"}}]);