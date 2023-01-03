"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[1528],{5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7462),a=r(7294),i=r(6010),s=r(2389),l=r(7392),o=r(7094),u=r(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:s,values:m,groupId:c,className:f}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),y=(0,l.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===s?s:s??h.find((e=>e.props.default))?.props.value??h[0].props.value;if(null!==b&&!k.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:g}=(0,o.U)(),[w,N]=(0,a.useState)(b),x=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=c){const e=v[c];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,r=x.indexOf(t),n=k[r].value;n!==w&&(I(t),N(n),null!=c&&g(c,String(n)))},T=e=>{let t=null;switch(e.key){case"Enter":C(e);break;case"ArrowRight":{const r=x.indexOf(e.currentTarget)+1;t=x[r]??x[0];break}case"ArrowLeft":{const r=x.indexOf(e.currentTarget)-1;t=x[r]??x[x.length-1];break}}t?.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},f)},k.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:T,onClick:C},s,{className:(0,i.Z)("tabs__item",d,s?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,s.Z)();return a.createElement(m,(0,n.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(814),i=r(3612);const s=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=s;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:s="uppy.min.js"}=e,o=[];n.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${s}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(i.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(a.Z,{language:"html"},d))}},3376:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),i=r(5488),s=r(5162),l=r(3068);const o={sidebar_position:3},u="Informer",p={unversionedId:"user-interfaces/elements/informer",id:"user-interfaces/elements/informer",title:"Informer",description:"The @uppy/informer plugin is a pop-up bar for showing notifications for the Dashboard.",source:"@site/docs/user-interfaces/elements/informer.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/informer",permalink:"/uppy.io/pr-preview/pr-50/docs/user-interfaces/elements/informer",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/informer.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Thumbnail generator",permalink:"/uppy.io/pr-preview/pr-50/docs/user-interfaces/elements/thumbnail-generator"},next:{title:"Status bar",permalink:"/uppy.io/pr-preview/pr-50/docs/user-interfaces/elements/status-bar"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>target</code>",id:"target",level:3}],c={toc:m};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"informer"},"Informer"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@uppy/informer")," plugin is a pop-up bar for showing notifications for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard"),".\nWhen plugins have some exciting news (or errors) to share, they can with Informer"),(0,a.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,a.kt)("p",null,"When you use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," it\u2019s already included by default.\nThis plugin is published separately but made specifically for the Dashboard.\nYou can technically use it without it, but it\u2019s not officially supported."),(0,a.kt)("h2",{id:"install"},"Install"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/informer\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/informer\n"))),(0,a.kt)(s.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,a.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, Informer } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(Informer, { target: '#informer' })\n      "))),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport Informer from '@uppy/informer';\n\n// The `@uppy/informer` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/informer/dist/style.min.css';\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `Informer` is therefor the same as the example below.\nnew Uppy().use(Informer, {\n    id: 'Informer',\n    target: null,\n});\n")),(0,a.kt)("p",null,"Informer gets its data from ",(0,a.kt)("inlineCode",{parentName:"p"},"uppy.state.info"),",\nwhich is updated by various plugins via ",(0,a.kt)("a",{parentName:"p",href:"/docs/uppy-core#infomessage-type-duration"},(0,a.kt)("inlineCode",{parentName:"a"},"uppy.info"))," method."),(0,a.kt)("p",null,"In the ",(0,a.kt)("a",{parentName:"p",href:"/docs/compressor"},"compressor")," plugin we use it like this for instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const size = prettierBytes(totalCompressedSize);\nthis.uppy.info(this.i18n('compressedX', { size }), 'info');\n")),(0,a.kt)("p",null,"When calling ",(0,a.kt)("inlineCode",{parentName:"p"},"uppy.info"),", ",(0,a.kt)("a",{parentName:"p",href:"/docs/uppy-core"},"Uppy")," emits ",(0,a.kt)("a",{parentName:"p",href:"/docs/uppy-core#info-visible"},(0,a.kt)("inlineCode",{parentName:"a"},"info-visible")),"\nand will emit ",(0,a.kt)("a",{parentName:"p",href:"/docs/uppy-core#info-hidden"},(0,a.kt)("inlineCode",{parentName:"a"},"info-hidden"))," after the timeout."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("p",null,"A unique identifier for this plugin (",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"'Informer'"),")."),(0,a.kt)("p",null,"Use this if you need several ",(0,a.kt)("inlineCode",{parentName:"p"},"Informer")," instances."),(0,a.kt)("h3",{id:"target"},(0,a.kt)("inlineCode",{parentName:"h3"},"target")),(0,a.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Informer into (",(0,a.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),")."))}f.isMDXComponent=!0}}]);