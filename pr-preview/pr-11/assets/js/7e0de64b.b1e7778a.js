"use strict";(self.webpackChunkuppy_io=self.webpackChunkuppy_io||[]).push([[434],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||r;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));function c(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3612:function(e,n,t){t.d(n,{Z:function(){return h}});var a=t(7294),i=t(6010),r=t(5281),o=t(5999),l="admonition_LlT9",u="admonitionHeading_tbUL",s="admonitionIcon_kALy",p="admonitionContent_S0QG";var d={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(o.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(o.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(o.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(o.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},m={secondary:"note",important:"info",success:"tip",warning:"danger"};function c(e){var n,t=function(e){var n=a.Children.toArray(e),t=n.find((function(e){var n;return a.isValidElement(e)&&"mdxAdmonitionTitle"===(null==(n=e.props)?void 0:n.mdxType)})),i=a.createElement(a.Fragment,null,n.filter((function(e){return e!==t})));return{mdxAdmonitionTitle:t,rest:i}}(e.children),i=t.mdxAdmonitionTitle,r=t.rest;return Object.assign({},e,{title:null!=(n=e.title)?n:i,children:r})}function h(e){var n=c(e),t=n.children,o=n.type,h=n.title,f=n.icon,b=function(e){var n,t=null!=(n=m[e])?n:e;return d[t]||(console.warn('No admonition config found for admonition type "'+t+'". Using Info as fallback.'),d.info)}(o),v=null!=h?h:b.label,g=b.iconComponent,y=null!=f?f:a.createElement(g,null);return a.createElement("div",{className:(0,i.Z)(r.k.common.admonition,r.k.common.admonitionType(e.type),"alert","alert--"+b.infimaClassName,l)},a.createElement("div",{className:u},a.createElement("span",{className:s},y),v),a.createElement("div",{className:p},t))}},5162:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(7294),i=t(6010),r="tabItem_Ymn6";function o(e){var n=e.children,t=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:t},n)}},5488:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(7462),i=t(7294),r=t(6010),o=t(2389),l=t(7392),u=t(7094),s=t(2466),p="tabList__CuJ",d="tabItem_LNqP";function m(e){var n,t,o=e.lazy,m=e.block,c=e.defaultValue,h=e.values,f=e.groupId,b=e.className,v=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(g,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:v[0].props.value;if(null!==k&&!g.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,u.U)(),N=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,i.useState)(k),E=C[0],x=C[1],I=[],O=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=N[f];null!=j&&j!==E&&g.some((function(e){return e.value===j}))&&x(j)}var Z=function(e){var n=e.currentTarget,t=I.indexOf(n),a=g[t].value;a!==E&&(O(n),x(a),null!=f&&T(f,String(a)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a,i=I.indexOf(e.currentTarget)+1;t=null!=(a=I[i])?a:I[0];break;case"ArrowLeft":var r,o=I.indexOf(e.currentTarget)-1;t=null!=(r=I[o])?r:I[I.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},b)},g.map((function(e){var n=e.value,t=e.label,o=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return I.push(e)},onKeyDown:P,onFocus:Z,onClick:Z},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,i.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},v.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function c(e){var n=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(n)},e))}},5810:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return h}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=t(5488),l=t(5162),u=t(3612),s=["components"],p={sidebar_position:2},d="Thumbnail generator",m={unversionedId:"user-interfaces/elements/thumbnail-generator",id:"user-interfaces/elements/thumbnail-generator",title:"Thumbnail generator",description:"@uppy/thumbnail-generator generates proportional thumbnails (file previews) for images that are added to Uppy.",source:"@site/docs/user-interfaces/elements/thumbnail-generator.mdx",sourceDirName:"user-interfaces/elements",slug:"/user-interfaces/elements/thumbnail-generator",permalink:"/uppy.io/pr-preview/pr-11/docs/user-interfaces/elements/thumbnail-generator",draft:!1,editUrl:"https://github.com/transloadit/uppy.io/tree/main/docs/user-interfaces/elements/thumbnail-generator.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Image editor",permalink:"/uppy.io/pr-preview/pr-11/docs/user-interfaces/elements/image-editor"},next:{title:"Informer",permalink:"/uppy.io/pr-preview/pr-11/docs/user-interfaces/elements/informer"}},c={},h=[{value:"When should I use this?",id:"when-should-i-use-this",level:2},{value:"Install",id:"install",level:2},{value:"Use",id:"use",level:2},{value:"API",id:"api",level:2},{value:"Options",id:"options",level:3},{value:"<code>id</code>",id:"id",level:4},{value:"<code>locale</code>",id:"locale",level:4},{value:"<code>thumbnailWidth</code>",id:"thumbnailwidth",level:4},{value:"<code>thumbnailHeight</code>",id:"thumbnailheight",level:4},{value:"<code>thumbnailType</code>",id:"thumbnailtype",level:4},{value:"<code>waitForThumbnailsBeforeUpload</code>",id:"waitforthumbnailsbeforeupload",level:4},{value:"Events",id:"events",level:3},{value:"<code>thumbnail:generated</code>",id:"thumbnailgenerated",level:4}],f={toc:h};function b(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thumbnail-generator"},"Thumbnail generator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@uppy/thumbnail-generator")," generates proportional thumbnails (file previews) for images that are added to Uppy."),(0,r.kt)("h2",{id:"when-should-i-use-this"},"When should I use this?"),(0,r.kt)("p",null,"This plugin is included by default with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," plugin, and can also be useful to display image previews in a custom UI."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Thumbnails are only generated for ",(0,r.kt)("em",{parentName:"p"},"local")," files.\nRemote files through ",(0,r.kt)("a",{parentName:"p",href:"/docs/companion"},"Companion")," generally won\u2019t have thumbnails because they are downloaded on the server.\nSome providers, such as Google Drive, have baked in thumbnails into their API responses.")),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"npm",label:"NPM",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @uppy/thumbnail-generator\n"))),(0,r.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @uppy/thumbnail-generator\n"))),(0,r.kt)(l.Z,{value:"cdn",label:"CDN",mdxType:"TabItem"},(0,r.kt)(u.Z,{type:"caution",mdxType:"Admonition"},(0,r.kt)("p",null,"The bundle consists of most Uppy plugins, so this method is not recommended for production, as your users will have to download all plugins when you are likely using only a few.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'  \x3c!-- 1. Add CSS to `<head>` --\x3e\n  <link href="https://releases.transloadit.com/uppy/v2.9.0/uppy.min.css" rel="stylesheet">\n\n  \x3c!-- 2. Add JS before the closing `</body>` --\x3e\n  <script src="https://releases.transloadit.com/uppy/v2.9.0/uppy.min.js"><\/script>\n\n  \x3c!-- 3. Initialize --\x3e\n  <div id="uppy"></div>\n  <script>\n    var uppy = new Uppy.Core()\n    uppy.use(Uppy.ThumbnailGenerator)\n  <\/script>\n')))),(0,r.kt)("h2",{id:"use"},"Use"),(0,r.kt)("p",null,"If you use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-interfaces/dashboard"},"Dashboard")," then it\u2019s already installed.\nIf you want to use it programatically for your own UI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import Uppy from '@uppy/core'\nimport ThumbnailGenerator from '@uppy/thumbnail-generator'\n\nconst uppy = new Uppy()\n\n// Example of setting all the options to their defaults.\n// Not passing anything to `ThumbnailGenerator` is therefor the same as the example below.\nuppy.use(ThumbnailGenerator, {\n  id: 'ThumbnailGenerator',\n  thumbnailWidth: 200,\n  thumbnailHeight: 200,\n  thumbnailType: 'image/jpeg',\n  waitForThumbnailsBeforeUpload: false,\n})\n\nuppy.on(\"thumbnail:generated\", (file, preview) => doSomething(file, preview));\n")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("h4",{id:"id"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")),(0,r.kt)("p",null,"A unique identifier for this plugin (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'ThumbnailGenerator'"),")."),(0,r.kt)("h4",{id:"locale"},(0,r.kt)("inlineCode",{parentName:"h4"},"locale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  strings: {\n    generatingThumbnails: 'Generating thumbnails...',\n  },\n}\n")),(0,r.kt)("h4",{id:"thumbnailwidth"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnailWidth")),(0,r.kt)("p",null,"Width of the resulting thumbnail (",(0,r.kt)("inlineCode",{parentName:"p"},"Number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"). "),(0,r.kt)("p",null,"Thumbnails are always proportional and not cropped.\nIf width is provided, height is calculated automatically to match ratio.\nIf both width and height are given, only width is taken into account."),(0,r.kt)("h4",{id:"thumbnailheight"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnailHeight")),(0,r.kt)("p",null,"Height of the resulting thumbnail (",(0,r.kt)("inlineCode",{parentName:"p"},"Number"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"). "),(0,r.kt)("p",null,"Thumbnails are always proportional and not cropped.\nIf height is provided, width is calculated automatically to match ratio.\nIf both width and height are given, only width is taken into account."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Produce a 300px height thumbnail with calculated width to match ratio:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailHeight: 300 })\n")),(0,r.kt)("p",{parentName:"admonition"},"Produce a 300px width thumbnail with calculated height to match ratio (and ignore the given height):"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.use(ThumbnailGenerator, { thumbnailWidth: 300, thumbnailHeight: 300 }) \n")),(0,r.kt)("p",{parentName:"admonition"},"See issue ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/issues/979"},"#979")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/transloadit/uppy/pull/1096"},"#1096")," for details on this feature.")),(0,r.kt)("h4",{id:"thumbnailtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnailType")),(0,r.kt)("p",null,"MIME type of the resulting thumbnail (",(0,r.kt)("inlineCode",{parentName:"p"},"String"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"'image/jpeg'"),")."),(0,r.kt)("p",null,"This is useful if you want to support transparency in your thumbnails by switching to ",(0,r.kt)("inlineCode",{parentName:"p"},"image/png"),"."),(0,r.kt)("h4",{id:"waitforthumbnailsbeforeupload"},(0,r.kt)("inlineCode",{parentName:"h4"},"waitForThumbnailsBeforeUpload")),(0,r.kt)("p",null,"Whether to wait for all thumbnails to be ready before starting the upload (",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),", default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),")."),(0,r.kt)("p",null,"If set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", Thumbnail Generator will invoke Uppy\u2019s internal processing stage and wait for ",(0,r.kt)("inlineCode",{parentName:"p"},"thumbnail:all-generated")," event, before proceeding to the uploading stage.\nThis is useful because Thumbnail Generator also adds EXIF data to images, and if we wait until it\u2019s done processing, this data will be available on the server after the upload."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onevent-action"},(0,r.kt)("inlineCode",{parentName:"a"},"on"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/uppy-core#onceevent-action"},(0,r.kt)("inlineCode",{parentName:"a"},"once"))," to listen to these events.")),(0,r.kt)("h4",{id:"thumbnailgenerated"},(0,r.kt)("inlineCode",{parentName:"h4"},"thumbnail:generated")),(0,r.kt)("p",null,"Emitted with ",(0,r.kt)("inlineCode",{parentName:"p"},"file")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"preview")," local url as arguments:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"uppy.on('thumbnail:generated', (file, preview) => {\n  const img = document.createElement('img')\n  img.src = preview\n  img.width = 100\n  document.body.appendChild(img)\n})\n")))}b.isMDXComponent=!0}}]);