"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[8190],{5162:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(7294),n=r(6010);const s="tabItem_Ymn6";function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,i),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(7462),n=r(7294),s=r(6010),i=r(2389),l=r(7392),o=r(7094),u=r(2466);const p="tabList__CuJ",d="tabItem_LNqP";function m(e){const{lazy:t,block:r,defaultValue:i,values:m,groupId:c,className:h}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),g=(0,l.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===i?i:i??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,o.U)(),[w,x]=(0,n.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=c){const e=y[c];null!=e&&e!==w&&f.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,r=N.indexOf(t),a=f[r].value;a!==w&&(C(t),x(a),null!=c&&v(c,String(a)))},T=e=>{let t=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const r=N.indexOf(e.currentTarget)+1;t=N[r]??N[0];break}case"ArrowLeft":{const r=N.indexOf(e.currentTarget)-1;t=N[r]??N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},h)},f.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>N.push(e),onKeyDown:T,onClick:E},i,{className:(0,s.Z)("tabs__item",d,i?.className,{"tabs__item--active":w===t})}),r??t)}))),t?(0,n.cloneElement)(k.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function c(e){const t=(0,i.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}},3068:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(814),s=r(3612);const i=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md prettier:check","prepare":"husky install","prettier:check":"prettier -c .","prettier:fix":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:l}=i;function o(e){let{children:t,uppyCssName:r="uppy.min.css",uppyJsName:i="uppy.min.js"}=e,o=[];a.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),p=`https://releases.transloadit.com/uppy/v${l}/${i}`,d=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${l}/${r}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,p)}\n<\/script>\n`;return a.createElement(a.Fragment,null,a.createElement(s.Z,{type:"caution"},a.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),a.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),a.createElement(n.Z,{language:"html"},d))}},7259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),s=r(5488),i=r(5162),l=r(3068);const o={sidebar_position:5},u="Progress bar",p={unversionedId:"user-interfaces/elements/progress-bar",id:"user-interfaces/elements/progress-bar",title:"Progress bar",description:"@uppy/progress-bar is a minimalist plugin that shows the current upload progress in a thin bar element,",source:"@site/docs/user-interfaces/elements/progress-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/progress-bar",permalink:"/uppy.io/pr-preview/pr-50/docs/user-interfaces/elements/progress-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/progress-bar.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Status bar",permalink:"/uppy.io/pr-preview/pr-50/docs/user-interfaces/elements/status-bar"},next:{title:"Webcam",permalink:"/uppy.io/pr-preview/pr-50/docs/sources/webcam"}},d={},m=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>fixed</code>",id:"fixed",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4}],c={toc:m};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"progress-bar"},"Progress bar"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"@uppy/progress-bar")," is a minimalist plugin that shows the current upload progress in a thin bar element,\nlike the ones used by YouTube and GitHub when navigating between pages."),(0,n.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,n.kt)("p",null,"When you need a minimalistec progress indicator and you\u2019re ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides/building-your-own-ui-with-uppy"},"building your own UI"),".\nFor most cases, ",(0,n.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," or ",(0,n.kt)("a",{parentName:"p",href:"/docs/user-interfaces/drag-drop"},"Drag & Drop"),"\n(with ",(0,n.kt)("a",{parentName:"p",href:"/docs/user-interfaces/elements/status-bar"},"Status Bar"),") is more likely what you need."),(0,n.kt)("h2",{id:"install"},"Install"),(0,n.kt)(s.Z,{mdxType:"Tabs"},(0,n.kt)(i.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/progress-bar\n"))),(0,n.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/progress-bar\n"))),(0,n.kt)(i.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,n.kt)(l.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, ProgressBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(ProgressBar, { target: '#progress-bar' })\n      "))),(0,n.kt)("h2",{id:"use"},"Use"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core';\nimport ProgressBar from '@uppy/progress-bar';\n\n// The `@uppy/progress-bar` plugin includes some basic styles.\n// You can also choose not to use it and provide your own styles instead.\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/progress-bar/dist/style.min.css';\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `ProgressBar` is therefor the same as the example below.\nnew Uppy().use(ProgressBar, {\n    id: 'ProgressBar',\n    target: null,\n});\n")),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ProgressBar, {\n    id: 'ProgressBar',\n    target: '#progress-bar',\n    fixed: false,\n    hideAfterFinish: true,\n});\n")),(0,n.kt)("h4",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h4"},"id")),(0,n.kt)("p",null,"A unique identifier for this Status Bar (",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"'ProgressBar'"),")."),(0,n.kt)("p",null,"Use this if you need to add several ProgressBar instances."),(0,n.kt)("h4",{id:"target"},(0,n.kt)("inlineCode",{parentName:"h4"},"target")),(0,n.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,n.kt)("inlineCode",{parentName:"p"},"Element"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,n.kt)("h4",{id:"fixed"},(0,n.kt)("inlineCode",{parentName:"h4"},"fixed")),(0,n.kt)("p",null,"Show the progress bar at the top of the page with ",(0,n.kt)("inlineCode",{parentName:"p"},"position: fixed")," (",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,n.kt)("p",null,"When set to false, show the progress bar inline wherever it\u2019s mounted."),(0,n.kt)("h4",{id:"hideafterfinish"},(0,n.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,n.kt)("p",null,"Hides the progress bar after the upload has finished (",(0,n.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),")."))}h.isMDXComponent=!0}}]);