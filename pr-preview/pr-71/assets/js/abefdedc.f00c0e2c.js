"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1549],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={title:"Uppy 0.15: Spring cleanup",date:new Date("2017-03-15T00:00:00.000Z"),authors:["arturi"],published:!0,slug:"2017/03/0.15"},i=void 0,l={permalink:"/uppy.io/pr-preview/pr-71/blog/2017/03/0.15",editUrl:"https://github.com/transloadit/uppy.io/tree/main/blog/2017-03-0.15.md",source:"@site/blog/2017-03-0.15.md",title:"Uppy 0.15: Spring cleanup",description:"Spring is in the air and Uppy is feeling particularly full of life. In this post",date:"2017-03-15T00:00:00.000Z",formattedDate:"March 15, 2017",tags:[],readingTime:4.19,hasTruncateMarker:!0,authors:[{email:"artur@transloadit.com",name:"Artur Paikin",id:"artur",tagline:"Developer",imageURL:"https://github.com/arturi.png",key:"arturi"}],frontMatter:{title:"Uppy 0.15: Spring cleanup",date:"2017-03-15T00:00:00.000Z",authors:["arturi"],published:!0,slug:"2017/03/0.15"},prevItem:{title:"Uppy 0.16: Transloadit!",permalink:"/uppy.io/pr-preview/pr-71/blog/2017/05/0.16"},nextItem:{title:"Uppy 0.14: Responsive Dashboard, Standalone & Pluggable Server, Dropbox",permalink:"/uppy.io/pr-preview/pr-71/blog/2017/02/0.14"}},p={authorsImageUrls:[void 0]},s=[{value:"Yo-yoify for NPM-installed Uppy",id:"yo-yoify-for-npm-installed-uppy",level:2},{value:"Pause &amp; Resume Remote Uploads",id:"pause--resume-remote-uploads",level:2},{value:"Progress Throttling",id:"progress-throttling",level:2},{value:"Informer coming at you in full-color mode",id:"informer-coming-at-you-in-full-color-mode",level:2},{value:"Some other things",id:"some-other-things",level:2},{value:"Release Notes",id:"release-notes",level:2}],u={toc:s},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Spring is in the air and Uppy is feeling particularly full of life. In this post\nabout Uppy 0.15, we have some exciting stories about ",(0,r.kt)("inlineCode",{parentName:"p"},"babel-plugin-yo-yoify"),",\nprogress event throttling, and new friends."),(0,r.kt)("h2",{id:"yo-yoify-for-npm-installed-uppy"},"Yo-yoify for NPM-installed Uppy"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"https://uppy.io/blog/2017/02/0.14/"},(0,r.kt)("inlineCode",{parentName:"a"},"0.14")),", we added ",(0,r.kt)("inlineCode",{parentName:"p"},"yo-yoify")," transform\nto give Uppy some extra speed and eliminate ",(0,r.kt)("inlineCode",{parentName:"p"},"Function.caller")," issues. As it\nturned out, we ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/158"},"forgot")," about\nour Babel-transpiled ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," version of Uppy that gets published to NPM \ud83d\ude40. We\nthen spent some time creating a standalone version of ",(0,r.kt)("inlineCode",{parentName:"p"},"yo-yoify")," that would be\nable to parse ",(0,r.kt)("inlineCode",{parentName:"p"},"yo-yo")," template strings before Babel-transpilation, only to\ndiscover that there already is a\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-plugin-yo-yoify"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-yo-yoify")),"\nthat not only does precisely that, but also frees us from jumping through a lot\nof unnecessary hoops. It did\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop/babel-plugin-yo-yoify/issues/9"},"have"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop/babel-plugin-yo-yoify/pull/8"},"a few"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop/babel-plugin-yo-yoify/issues/11"},"issues")," at\nfirst, but luckily our friend ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/goto-bus-stop"},"Ren\xe9e")," was\navailable to colaborate with us on this. Ren\xe9e has also agreed to join Uppy for\na while to help us with other pressing issues. So, silver linings \u2014 bugs can\nsometimes lead to new friends and wonderful beginnings. We are very excited\nabout what this all means for Uppy in the months to come."),(0,r.kt)("p",null,"Uppy from NPM is now good to go and the issue has been completely resolved. You\ncan update at: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/uppy"},"https://www.npmjs.com/package/uppy"),". And yeah, if you use\n",(0,r.kt)("inlineCode",{parentName:"p"},"yo-yo"),", give\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/babel-plugin-yo-yoify"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-yo-yoify"))," a\ntry."),(0,r.kt)("h2",{id:"pause--resume-remote-uploads"},"Pause & Resume Remote Uploads"),(0,r.kt)("p",null,"Just like with \u201clocal\u201d uploads, Uppy can now pause and resume remote uploads\nfrom Google Drive or Dropbox (handled on the backend by ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy-server")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"tus"),").\n\ud83c\udf89"),(0,r.kt)("h2",{id:"progress-throttling"},"Progress Throttling"),(0,r.kt)("p",null,"While working on pausing remote uploads with ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy-server"),", Ife discovered a\nstrange bug: uppy-client would hang during the upload, after which the progress\nwould immediately jump to 100%. After some solid Sherlock Holmesing, we found\nwhat was causing it: uploads were happening too fast. This was leading to\nprogress events being sent very, very often (like 300 / second), which trashed\nthe interface rendering loop. We have solved this by\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tus/tus-js-client/commit/9940f27b2361fd7e10ba58b09b60d82422183bbb"},"adding throttling in tus-js-client"),"\n(thanks Marius!) and\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy-server/commit/936ad48e92631c45d123664900b9aabcf7a190fa"},"uppy-server"),"\n(thanks Ife!). I would also very much like to take this opportunity to thank\nmyself for\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/commit/1d5f4404546420442deabc94df84bd3ec0677eec"},"fixing"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/commit/db32c6f4fd85420532f27f04920dbaf6d126ea9b"},"it"),"\nin uppy-client too! \ud83d\ude07"),(0,r.kt)("p",null,"To prevent \u201cjumping\u201d progress, numbers and text in StatusBar are now only\nupdated once a second. Plus, we have switched to\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/prettier-bytes"},(0,r.kt)("inlineCode",{parentName:"a"},"prettier-bytes")),", which adds\nsome nice number rounding. Smooth as butter!"),(0,r.kt)("p",null,"TL;DR Uppy was simply too fast at uploading, so we had to shorten the leash a\nbit!"),(0,r.kt)("h2",{id:"informer-coming-at-you-in-full-color-mode"},"Informer coming at you in full-color mode"),(0,r.kt)("p",null,"Informer will now be able to change the way it looks depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\nargument:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// (`'informer'`, `text`, `type`, `duration`)\nuppy.emit('informer', 'Connected!', 'success', 3000);\n")),(0,r.kt)("img",{src:"/img/blog/0.15/informer.png"}),(0,r.kt)("p",null,"This supports the following ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"s: ",(0,r.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"warning"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"success"),", all\nwith their own colors!"),(0,r.kt)("h2",{id:"some-other-things"},"Some other things"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multipart now treats all 2xx responses as successful and returns xhr object in\n",(0,r.kt)("inlineCode",{parentName:"li"},"core:upload-success")," event callback."),(0,r.kt)("li",{parentName:"ul"},"That progress circle that you can see on each file in Dashboard has been\nimproved on the inside: precise ",(0,r.kt)("inlineCode",{parentName:"li"},"circleLength")," and\n",(0,r.kt)("inlineCode",{parentName:"li"},"stroke-dasharray/stroke-dashoffset")," calculation."),(0,r.kt)("li",{parentName:"ul"},"Uppy-server returns uploaded file urls and sizes for remote uploads (from\nGoogle Drive & Dropbox)."),(0,r.kt)("li",{parentName:"ul"},"Provider plugins now have a loading screen, error screen and logout link.\nBreadcrumbs are also working again.")),(0,r.kt)("h2",{id:"release-notes"},"Release Notes"),(0,r.kt)("p",null,"Here is the full list of changes for version 0.15:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"build: update dependencies and eslint-plugin-standard, nodemon --\x3e onchange,\nbecause simpler and better options (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"build: fix ",(0,r.kt)("inlineCode",{parentName:"li"},"Function.caller")," issue in ",(0,r.kt)("inlineCode",{parentName:"li"},"lib")," which gets published to NPM\npackage, add babel-plugin-yo-yoify (@arturi #158 #163)"),(0,r.kt)("li",{parentName:"ul"},"provider: show error view for things like not being able to connect to uppy\nserver, should this be happening when uppy-server is unavailable\n",(0,r.kt)("a",{parentName:"li",href:"http://i.imgur.com/cYJakc9.png"},"http://i.imgur.com/cYJakc9.png")," (@arturi, @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"provider: loading indicator while files from GoogleDrive / Dropbox are loading\n(@arturi, @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"provider: logout link/button (@arturi, @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"provider: fix breadcrumbs (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"server: refactor local/remote uploads in tus, allow for pause/resume with\nremote upload (@arturi, @ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"server: throttle progress updates sent through websockets, sometimes it can be\noverwhelming when uploads are getting this fast (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"server: pass file size from Google Drive / Dropbox (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"server: return uploaded file urls (from Google Drive / Dropbox)\n(@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"server: research having less permissions, smaller auth expiration time for\nsecurity (@ifedapoolarewaju)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: basic React component (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"core: experiment with ",(0,r.kt)("inlineCode",{parentName:"li"},"nanoraf")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"requestAnimationFrame")," (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"core: add throttling of progress updates (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashobard: fix Missing ",(0,r.kt)("inlineCode",{parentName:"li"},"file.progress.bytesTotal")," property (@arturi #152)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: switch to prettier-bytes for more user-friendly progress updates\n(@arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: fix ",(0,r.kt)("inlineCode",{parentName:"li"},"updateDashboardElWidth()")," not firing in time, causing\ncontainer width to be 0 (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"multipart: treat all 2xx responses as successful, return xhr object in\n",(0,r.kt)("inlineCode",{parentName:"li"},"core:upload-success")," (@arturi #156 #154)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: throttle StatusBar numbers, so they update only once a second\n(@arturi, @acconut)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: add titles to pause/resume/cancel in StatusBar (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: precise ",(0,r.kt)("inlineCode",{parentName:"li"},"circleLength")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"stroke-dasharray/stroke-dashoffset"),"\ncalculation for progress circles on FileItem (@arturi)"),(0,r.kt)("li",{parentName:"ul"},"dashboard: don\u2019t show per-file detailed progress by default \u2014 too much noise\n(@arturi)"),(0,r.kt)("li",{parentName:"ul"},"website: blog post and images cleanup (@arturi)")),(0,r.kt)("p",null,"Enjoy!"),(0,r.kt)("p",null,"The Uppy Team"))}m.isMDXComponent=!0}}]);