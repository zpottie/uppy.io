"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[9195],{5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),o=t(6010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(7462),o=t(7294),r=t(6010),i=t(2389),l=t(7392),s=t(7094),p=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:n,block:t,defaultValue:i,values:d,groupId:c,className:h}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,l.l)(f,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:b}=(0,s.U)(),[N,C]=(0,o.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=c){const e=g[c];null!=e&&e!==N&&f.some((n=>n.value===e))&&C(e)}const Z=e=>{const n=e.currentTarget,t=w.indexOf(n),a=f[t].value;a!==N&&(x(n),C(a),null!=c&&b(c,String(a)))},T=e=>{let n=null;switch(e.key){case"Enter":Z(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}n?.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},h)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>w.push(e),onKeyDown:T,onClick:Z},i,{className:(0,r.Z)("tabs__item",m,i?.className,{"tabs__item--active":N===n})}),t??n)}))),n?(0,o.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function c(e){const n=(0,i.Z)();return o.createElement(d,(0,a.Z)({key:String(n)},e))}},3068:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(7294),o=t(814),r=t(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function s(e){let{children:n,uppyCssName:t="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,s=[];a.Children.toArray(n).forEach((e=>{s=[...s,...String(e).trim().split("\n").map((e=>e.trim()))]}));const p=s.map((e=>`  ${e}`)).join("\n"),u=`https://releases.transloadit.com/uppy/v${l}/${i}`,m=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${t}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${p.replace(/{{UPPY_JS_URL}}/g,u)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(r.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(o.Z,{language:"html"},m))}},4499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=t(7462),o=(t(7294),t(3905)),r=t(5488),i=t(5162),l=t(3068);const s={},p="Zoom",u={unversionedId:"sources/companion-plugins/zoom",id:"sources/companion-plugins/zoom",title:"Zoom",description:"The @uppy/zoom plugin lets users import files from their",source:"@site/docs/sources/companion-plugins/zoom.mdx",sourceDirName:"sources/companion-plugins",slug:"/sources/companion-plugins/zoom",permalink:"/uppy.io/pr-preview/pr-64/docs/sources/companion-plugins/zoom",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/sources/companion-plugins/zoom.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Import from URL",permalink:"/uppy.io/pr-preview/pr-64/docs/sources/companion-plugins/url"},next:{title:"Transloadit",permalink:"/uppy.io/pr-preview/pr-64/docs/uploader/transloadit"}},m={},d=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Use",id:"use",level:2},{value:"Use in Uppy",id:"use-in-uppy",level:3},{value:"Use in Companion",id:"use-in-companion",level:3},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>title</code>",id:"title",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>companionUrl</code>",id:"companionurl",level:4},{value:"<code>companionHeaders</code>",id:"companionheaders",level:4},{value:"<code>companionAllowedHosts</code>",id:"companionallowedhosts",level:4},{value:"<code>companionCookiesRule</code>",id:"companioncookiesrule",level:4},{value:"<code>locale</code>",id:"locale",level:4}],c={toc:d};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"zoom"},"Zoom"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@uppy/zoom")," plugin lets users import files from their\n",(0,o.kt)("a",{parentName:"p",href:"https://zoom.com"},"Zoom")," account."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/examples"},"Try out the live example")," or take it for a spin in\n",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-dashboard-xpxuhd"},"CodeSandbox"),".")),(0,o.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,o.kt)("p",null,"When you want to let users import files from their ",(0,o.kt)("a",{parentName:"p",href:"https://zoom.com"},"Zoom"),"\naccount."),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance is required for the Zoom plugin to work.\nCompanion handles authentication with Zoom, downloads the files, and uploads\nthem to the destination. This saves the user bandwidth, especially helpful if\nthey are on a mobile connection."),(0,o.kt)("p",null,"You can self-host Companion or get a hosted version with any\n",(0,o.kt)("a",{parentName:"p",href:"https://transloadit.com/pricing/"},"Transloadit plan"),"."),(0,o.kt)(r.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/zoom\n"))),(0,o.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/zoom\n"))),(0,o.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,o.kt)(l.Z,{mdxType:"UppyCdnExample"},'\n        import { Uppy, Zoom } from "{{UPPY_JS_URL}}"\n        const uppy = new Uppy()\n        uppy.use(Zoom, {\n          // Options\n        })\n      '))),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"Using Zoom requires setup in both Uppy and Companion."),(0,o.kt)("h3",{id:"use-in-uppy"},"Use in Uppy"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"{10-13} showLineNumbers","{10-13}":!0,showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport Dashboard from '@uppy/dashboard';\nimport Zoom from '@uppy/zoom';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/dashboard/dist/style.min.css';\n\nnew Uppy().use(Dashboard, { inline: true, target: '#dashboard' }).use(Zoom, {\n    target: Dashboard,\n    companionUrl: 'https://your-companion.com',\n});\n")),(0,o.kt)("h3",{id:"use-in-companion"},"Use in Companion"),(0,o.kt)("p",null,"Configure the Zoom key and secret. With the standalone Companion server, specify\nenvironment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'export COMPANION_ZOOM_KEY="Zoom API key"\nexport COMPANION_ZOOM_SECRET="Zoom API secret"\n')),(0,o.kt)("p",null,"When using the Companion Node.js API, configure these options:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"companion.app({\n    providerOptions: {\n        zoom: {\n            key: 'Zoom API key',\n            secret: 'Zoom API secret',\n        },\n    },\n});\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("h4",{id:"id"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")),(0,o.kt)("p",null,"A unique identifier for this plugin (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'Zoom'"),")."),(0,o.kt)("h4",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")),(0,o.kt)("p",null,"Title / name shown in the UI, such as Dashboard tabs (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default:\n",(0,o.kt)("inlineCode",{parentName:"p"},"'Zoom'"),")."),(0,o.kt)("h4",{id:"target"},(0,o.kt)("inlineCode",{parentName:"h4"},"target")),(0,o.kt)("p",null,"DOM element, CSS selector, or plugin to place the drag and drop area into\n(",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Element"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionurl"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionUrl")),(0,o.kt)("p",null,"URL to a ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," instance (",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,o.kt)("h4",{id:"companionheaders"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionHeaders")),(0,o.kt)("p",null,"Custom headers that should be sent along to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," on\nevery request (",(0,o.kt)("inlineCode",{parentName:"p"},"Object"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"{}"),")."),(0,o.kt)("h4",{id:"companionallowedhosts"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionAllowedHosts")),(0,o.kt)("p",null,"The valid and authorised URL(s) from which OAuth responses should be accepted\n(",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Array"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"companionUrl"),")."),(0,o.kt)("p",null,"This value can be a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"RegExp")," pattern, or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Array")," of both. This is\nuseful when you have your ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," running on several hosts.\nOtherwise, the default value should do fine."),(0,o.kt)("h4",{id:"companioncookiesrule"},(0,o.kt)("inlineCode",{parentName:"h4"},"companionCookiesRule")),(0,o.kt)("p",null,"This option correlates to the\n",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials"},"RequestCredentials value"),"\n(",(0,o.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,o.kt)("inlineCode",{parentName:"p"},"'same-origin'"),")."),(0,o.kt)("p",null,"This tells the plugin whether to send cookies to ",(0,o.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion"),"."),(0,o.kt)("h4",{id:"locale"},(0,o.kt)("inlineCode",{parentName:"h4"},"locale")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        pluginNameZoom: 'Zoom',\n    },\n};\n")))}h.isMDXComponent=!0}}]);