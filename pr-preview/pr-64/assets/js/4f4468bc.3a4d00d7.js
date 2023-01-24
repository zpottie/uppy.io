"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[6990],{9408:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var n=o(7462),a=(o(7294),o(3905));const s={sidebar_position:11},i="Compressor",p={unversionedId:"compressor",id:"compressor",title:"Compressor",description:"The @uppy/compressor plugin optimizes images (JPEG, PNG, and any other format",source:"@site/docs/compressor.mdx",sourceDirName:".",slug:"/compressor",permalink:"/uppy.io/pr-preview/pr-64/docs/compressor",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/compressor.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Golden Retriever",permalink:"/uppy.io/pr-preview/pr-64/docs/golden-retriever"},next:{title:"Form",permalink:"/uppy.io/pr-preview/pr-64/docs/form"}},r={},l=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>quality</code>",id:"quality",level:3},{value:"<code>limit</code>",id:"limit",level:3},{value:"<code>locale</code>",id:"locale",level:4},{value:"Events",id:"events",level:2},{value:"<code>compressor:complete</code>",id:"compressorcomplete",level:4}],m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},d=m("Tabs"),u=m("TabItem"),c=m("UppyCdnExample"),h={toc:l};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compressor"},"Compressor"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/compressor")," plugin optimizes images (JPEG, PNG, and any other format\nsupported by the client's browser) before upload, saving up to 60% in size\n(roughly 18 MB for 10 images). It uses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," library under the hood."),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,"When your users are likely to upload images, potentially on mobile devices, and\nsaving data and faster uploads are important."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(d,{mdxType:"Tabs"},(0,a.kt)(u,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/compressor\n"))),(0,a.kt)(u,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/compressor\n"))),(0,a.kt)(u,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Compressor } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Compressor, {\n          // Options\n        })\n      '))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport Compressor from '@uppy/compressor';\n\nnew Uppy().use(Compressor);\n")),(0,a.kt)("p",null,"No action is needed from the user \u2014 Uppy will automatically optimize images,\nshow an ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-interfaces/elements/informer"},"Informer")," message with saved\nbytes, and then begin the upload as usual."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also pass any of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs#options"},"Compressor.js options")," here as well.")),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Compressor'"),")."),(0,a.kt)("h3",{id:"quality"},(0,a.kt)("inlineCode",{parentName:"h3"},"quality")),(0,a.kt)("p",null,"The quality of the output image passed to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/fengyuanchen/compressorjs"},"Compressor.js")," (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", default:\n",(0,a.kt)("inlineCode",{parentName:"p"},"0.6"),")."),(0,a.kt)("p",null,"It must be a number between ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"1"),". Be careful to use ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," as it may make\nthe size of the output image become larger. In most cases, going with the\ndefault value is best."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This option is only available for ",(0,a.kt)("inlineCode",{parentName:"p"},"image/jpeg")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"image/webp")," images.")),(0,a.kt)("h3",{id:"limit"},(0,a.kt)("inlineCode",{parentName:"h3"},"limit")),(0,a.kt)("p",null,"Number of images that will be compressed in parallel (",(0,a.kt)("inlineCode",{parentName:"p"},"number"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),")."),(0,a.kt)("p",null,"You likely don\u2019t need to change this, unless you are experiencing performance\nissues."),(0,a.kt)("h4",{id:"locale"},(0,a.kt)("inlineCode",{parentName:"h4"},"locale")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the Status Bar\n        compressingImages: 'Compressing images...',\n        compressedX: 'Saved %{size} by compressing images',\n    },\n};\n")),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("h4",{id:"compressorcomplete"},(0,a.kt)("inlineCode",{parentName:"h4"},"compressor:complete")),(0,a.kt)("p",null,"The event is emitted when all files are compressed. You can use it for side\neffects or custom UI notifications."))}k.isMDXComponent=!0}}]);