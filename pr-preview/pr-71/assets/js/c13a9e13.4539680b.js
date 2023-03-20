"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[2465],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(6010);const s={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7462),r=a(7294),s=a(6010),l=a(2466),i=a(6550),o=a(1980),u=a(7392),d=a(12);function p(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=c(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),b=(()=>{const e=o??p;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var b=a(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),c=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==i&&(p(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:c},l,{className:(0,s.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;if(a=Array.isArray(a)?a:[a],t){const e=a.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",k.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},3068:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(814),s=a(3612);const l=JSON.parse('{"name":"uppy-io","version":"0.0.0","private":true,"scripts":{"build":"docusaurus build","clear":"docusaurus clear","deploy":"docusaurus deploy","dev":"docusaurus start","lint:js":"eslint . --cache","lint:md":"run-s --continue-on-error remark:md remark:mdx","lint":"run-s --continue-on-error lint:js lint:md format:check-diff","prepare":"husky install","format:show-diff":"git stash push -q; prettier . -w --loglevel silent && git --no-pager diff && git reset --hard; git stash pop -q","format:check":"prettier -c .","format:check-diff":"yarn format:check || yarn format:show-diff","format":"prettier -w .","remark:md":"remark . -qf","remark:mdx":"remark . -e mdx -u mdx -qf","serve":"docusaurus serve","swizzle":"docusaurus swizzle","typecheck":"tsc --noEmit","write-heading-ids":"docusaurus write-heading-ids","write-translations":"docusaurus write-translations"},"lint-staged":{"*.{js,jsx,ts,tsx}":["eslint --fix --cache","prettier --write"],"*.md":["remark -qf --","prettier --write"],"*.mdx":["remark -u mdx -qf --","prettier --write"],"*.{css,html,json,yml}":"prettier --write"},"browserslist":{"production":[">0.5%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]},"dependencies":{"@docusaurus/core":"^2.0.1","@docusaurus/preset-classic":"^2.0.1","@mdx-js/react":"^1.6.22","@uppy/audio":"latest","@uppy/box":"latest","@uppy/core":"latest","@uppy/dashboard":"latest","@uppy/dropbox":"latest","@uppy/google-drive":"latest","@uppy/image-editor":"latest","@uppy/instagram":"latest","@uppy/onedrive":"latest","@uppy/react":"latest","@uppy/remote-sources":"latest","@uppy/screen-capture":"latest","@uppy/tus":"latest","@uppy/unsplash":"latest","@uppy/url":"latest","@uppy/webcam":"latest","clsx":"^1.1.1","prism-react-renderer":"^1.2.1","react":"^17.0.1","react-dom":"^17.0.1"},"devDependencies":{"@docusaurus/eslint-plugin":"^2.0.1","@docusaurus/module-type-aliases":"^2.0.1","@tsconfig/docusaurus":"^1.0.4","@typescript-eslint/eslint-plugin":"^5.48.1","@typescript-eslint/parser":"^5.48.1","eslint":"^8.19.0","eslint-config-prettier":"^8.5.0","eslint-plugin-markdown":"^3.0.0","eslint-plugin-mdx":"^2.0.4","husky":"^8.0.1","lint-staged":"^13.0.3","mdast-comment-marker":"^2.1.0","npm-run-all":"^4.1.5","prettier":"2.8.1","remark-cli":"^11.0.0","remark-directive":"^2.0.1","remark-frontmatter":"^4.0.0","remark-gfm":"^3.0.1","remark-lint":"^9.0.0","remark-lint-final-newline":"^2.0.0","remark-lint-hard-break-spaces":"^3.0.0","remark-lint-list-item-bullet-indent":"^4.0.0","remark-lint-list-item-indent":"^3.0.0","remark-lint-no-blockquote-without-marker":"^5.0.0","remark-lint-no-duplicate-definitions":"^3.0.0","remark-lint-no-heading-content-indent":"^4.0.0","remark-lint-no-inline-padding":"^4.0.0","remark-lint-no-literal-urls":"^3.0.0","remark-lint-no-shortcut-reference-image":"^3.0.0","remark-lint-no-shortcut-reference-link":"^3.0.0","remark-lint-no-undefined-references":"^4.0.0","remark-lint-no-unused-definitions":"^3.0.0","remark-lint-ordered-list-marker-style":"^3.0.0","remark-mdx":"^2.1.2","remark-preset-lint-consistent":"^5.1.1","remark-preset-lint-markdown-style-guide":"^5.1.2","remark-preset-prettier":"^2.0.1","remark-retext":"^5.0.0","retext-english":"^4.0.0","retext-equality":"^6.2.0","retext-profanities":"^7.1.0","retext-quotes":"^5.0.0","retext-simplify":"^7.0.0","retext-syntax-mentions":"^3.1.0","typescript":"^4.6.2","unified":"^10.0.0","unified-message-control":"^4.0.0"},"packageManager":"yarn@3.3.1+sha224.1c866bd0fca5cf439c5b6a019f1653906d5e7ea807b01a9c7b18adab"}'),{version:i}=l;function o(e){let{children:t,uppyCssName:a="uppy.min.css",uppyJsName:l="uppy.min.js"}=e,o=[];n.Children.toArray(t).forEach((e=>{o=[...o,...String(e).trim().split("\n").map((e=>e.trim()))]}));const u=o.map((e=>`  ${e}`)).join("\n"),d=`https://releases.transloadit.com/uppy/v${i}/${l}`,p=`\x3c!-- 1. Add CSS to \`<head>\` --\x3e\n<link href="https://releases.transloadit.com/uppy/v${i}/${a}" rel="stylesheet">\n\n\x3c!-- 2. Initialize --\x3e\n<div id="uppy"></div>\n\n<script type="module">\n${u.replace(/{{UPPY_JS_URL}}/g,d)}\n<\/script>\n`;return n.createElement(n.Fragment,null,n.createElement(s.Z,{type:"caution"},n.createElement("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few."),n.createElement("p",null,"It can be useful to speed up your development environment, so don't hesitate to use it to get you started.")),n.createElement(r.Z,{language:"html"},p))}},1589:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var n=a(7462),r=(a(7294),a(3905)),s=a(4866),l=a(5162),i=a(3068);const o={sidebar_position:4},u="Status bar",d={unversionedId:"user-interfaces/elements/status-bar",id:"user-interfaces/elements/status-bar",title:"Status bar",description:"The @uppy/status-bar plugin shows upload progress and speed, estimated time,",source:"@site/docs/user-interfaces/elements/status-bar.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/status-bar",permalink:"/uppy.io/pr-preview/pr-71/docs/user-interfaces/elements/status-bar",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/status-bar.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-71/docs/user-interfaces/elements/informer"},next:{title:"Progress bar",permalink:"/uppy.io/pr-preview/pr-71/docs/user-interfaces/elements/progress-bar"}},p={},c=[{value:"When should I use it?",id:"when-should-i-use-it",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>target</code>",id:"target",level:4},{value:"<code>hideAfterFinish</code>",id:"hideafterfinish",level:4},{value:"<code>showProgressDetails</code>",id:"showprogressdetails",level:4},{value:"<code>hideUploadButton</code>",id:"hideuploadbutton",level:4},{value:"<code>hideRetryButton</code>",id:"hideretrybutton",level:4},{value:"<code>hidePauseResumeButton</code>",id:"hidepauseresumebutton",level:4},{value:"<code>hideCancelButton</code>",id:"hidecancelbutton",level:4},{value:"<code>doneButtonHandler</code>",id:"donebuttonhandler",level:4},{value:"<code>locale</code>",id:"locale",level:4}],m={toc:c},h="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"status-bar"},"Status bar"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/status-bar")," plugin shows upload progress and speed, estimated time,\npre- and post-processing information, and allows users to control\n(pause/resume/cancel) the upload."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Try it out together with ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/drag-drop"},(0,r.kt)("inlineCode",{parentName:"a"},"@uppy/drag-drop"))," in\n",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/uppy-drag-drop-gyewzx?file=/src/index.js"},"CodeSandbox"))),(0,r.kt)("h2",{id:"when-should-i-use-it"},"When should I use it?"),(0,r.kt)("p",null,"When you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," it\u2019s already\nincluded by default. This plugin is published separately but made specifically\nfor the Dashboard. You can still use it without it but it may need some (CSS)\ntweaking for your use case."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/status-bar\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/status-bar\n"))),(0,r.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(i.Z,{mdxType:"UppyCdnExample"},"\n        import { Uppy, StatusBar } from \"{{UPPY_JS_URL}}\"\n        const uppy = new Uppy()\n        uppy.use(StatusBar, { target: '#status-bar' })\n      "))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"import Uppy from '@uppy/core';\nimport StatusBar from '@uppy/status-bar';\n\nimport '@uppy/core/dist/style.min.css';\nimport '@uppy/status-bar/dist/style.min.css';\n\nnew Uppy().use(StatusBar, { target: '#status-bar' });\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this Status Bar (",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'StatusBar'"),")."),(0,r.kt)("p",null,"Use this if you need to add several StatusBar instances."),(0,r.kt)("h4",{id:"target"},(0,r.kt)("inlineCode",{parentName:"h4"},"target")),(0,r.kt)("p",null,"DOM element, CSS selector, or plugin to mount the Status Bar into (",(0,r.kt)("inlineCode",{parentName:"p"},"Element"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"UIPlugin"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'body'"),")."),(0,r.kt)("h4",{id:"hideafterfinish"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideAfterFinish")),(0,r.kt)("p",null,"Hide the Status Bar after the upload is complete (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),")."),(0,r.kt)("h4",{id:"showprogressdetails"},(0,r.kt)("inlineCode",{parentName:"h4"},"showProgressDetails")),(0,r.kt)("p",null,"Display remaining upload size and estimated time (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"false"),": Uploading: 45%"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"true"),": Uploading: 45%\u30fb43 MB of 101 MB\u30fb8s left")),(0,r.kt)("h4",{id:"hideuploadbutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideUploadButton")),(0,r.kt)("p",null,"Hide the upload button (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing a custom upload button somewhere, and using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.upload()")," API."),(0,r.kt)("h4",{id:"hideretrybutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideRetryButton")),(0,r.kt)("p",null,"Hide the retry button (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.retryAll()")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.retryUpload(fileID)")," API."),(0,r.kt)("h4",{id:"hidepauseresumebutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hidePauseResumeButton")),(0,r.kt)("p",null,"Hide pause/resume buttons (for resumable uploads, via ",(0,r.kt)("a",{parentName:"p",href:"http://tus.io"},"tus"),", for\nexample) (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing custom cancel or pause/resume buttons somewhere,\nand using the ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.pauseResume(fileID)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.removeFile(fileID)")," API."),(0,r.kt)("h4",{id:"hidecancelbutton"},(0,r.kt)("inlineCode",{parentName:"h4"},"hideCancelButton")),(0,r.kt)("p",null,"Hide the cancel button (",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"Use this if you are providing a custom retry button somewhere, and using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"uppy.cancelAll()")," API."),(0,r.kt)("h4",{id:"donebuttonhandler"},(0,r.kt)("inlineCode",{parentName:"h4"},"doneButtonHandler")),(0,r.kt)("p",null,"Status Bar will render a \u201cDone\u201d button in place of pause/resume/cancel buttons,\nonce the upload/encoding is done (",(0,r.kt)("inlineCode",{parentName:"p"},"Function"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),")."),(0,r.kt)("p",null,"The behaviour of this \u201cDone\u201d button is defined by the handler function \u2014 can be\nused to close file picker modals or clear the upload state. This is what the\nDashboard plugin, which uses Status Bar internally, sets:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const doneButtonHandler = () => {\n    this.uppy.reset();\n    this.requestCloseModal();\n};\n")),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n    strings: {\n        // Shown in the status bar while files are being uploaded.\n        uploading: 'Uploading',\n        // Shown in the status bar once all files have been uploaded.\n        complete: 'Complete',\n        // Shown in the status bar if an upload failed.\n        uploadFailed: 'Upload failed',\n        // Shown in the status bar while the upload is paused.\n        paused: 'Paused',\n        // Used as the label for the button that retries an upload.\n        retry: 'Retry',\n        // Used as the label for the button that cancels an upload.\n        cancel: 'Cancel',\n        // Used as the label for the button that pauses an upload.\n        pause: 'Pause',\n        // Used as the label for the button that resumes an upload.\n        resume: 'Resume',\n        // Used as the label for the button that resets the upload state after an upload\n        done: 'Done',\n        // When `showProgressDetails` is set, shows the number of files that have been fully uploaded so far.\n        filesUploadedOfTotal: {\n            0: '%{complete} of %{smart_count} file uploaded',\n            1: '%{complete} of %{smart_count} files uploaded',\n        },\n        // When `showProgressDetails` is set, shows the amount of bytes that have been uploaded so far.\n        dataUploadedOfTotal: '%{complete} of %{total}',\n        // When `showProgressDetails` is set, shows an estimation of how long the upload will take to complete.\n        xTimeLeft: '%{time} left',\n        // Used as the label for the button that starts an upload.\n        uploadXFiles: {\n            0: 'Upload %{smart_count} file',\n            1: 'Upload %{smart_count} files',\n        },\n        // Used as the label for the button that starts an upload, if another upload has been started in the past\n        // and new files were added later.\n        uploadXNewFiles: {\n            0: 'Upload +%{smart_count} file',\n            1: 'Upload +%{smart_count} files',\n        },\n        upload: 'Upload',\n        retryUpload: 'Retry upload',\n        xMoreFilesAdded: {\n            0: '%{smart_count} more file added',\n            1: '%{smart_count} more files added',\n        },\n        showErrorDetails: 'Show error details',\n    },\n};\n")))}f.isMDXComponent=!0}}]);