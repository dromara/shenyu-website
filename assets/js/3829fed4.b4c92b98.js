"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[21672],{95788:(e,n,i)=>{i.d(n,{Iu:()=>u,yg:()=>f});var r=i(11504);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=r.createContext({}),s=function(e){var n=r.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},u=function(e){var n=s(e.components);return r.createElement(d.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,o=e.originalType,d=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(i),g=t,f=c["".concat(d,".").concat(g)]||c[g]||p[g]||o;return i?r.createElement(f,l(l({ref:n},u),{},{components:i})):r.createElement(f,l({ref:n},u))}));function f(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=i.length,l=new Array(o);l[0]=g;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a[c]="string"==typeof e?e:t,l[1]=a;for(var s=2;s<o;s++)l[s]=i[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}g.displayName="MDXCreateElement"},43594:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=i(45072),t=(i(11504),i(95788));const o={sidebar_position:3,title:"File Uploading And Downloading",keywords:["soul"],description:"file uploading and downloading"},l=void 0,a={unversionedId:"developer-guide/file-and-image",id:"version-2.3.0-Legacy/developer-guide/file-and-image",isDocsHomePage:!1,title:"File Uploading And Downloading",description:"file uploading and downloading",source:"@site/versioned_docs/version-2.3.0-Legacy/developer-guide/file-and-image.md",sourceDirName:"developer-guide",slug:"/developer-guide/file-and-image",permalink:"/docs/2.3.0-Legacy/developer-guide/file-and-image",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/developer-guide/file-and-image.md",version:"2.3.0-Legacy",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"File Uploading And Downloading",keywords:["soul"],description:"file uploading and downloading"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Custom Plugin",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-plugin"},next:{title:"Fetching Correct IP Address And Host",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-parsing-ip-and-host"}},d=[{value:"description",id:"description",children:[]},{value:"File Uploading",id:"file-uploading",children:[]},{value:"File Downloading",id:"file-downloading",children:[]}],s={toc:d},u="wrapper";function c(e){let{components:n,...i}=e;return(0,t.yg)(u,(0,r.c)({},s,i,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"description"},"description"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"This doc gives a brief description for uploading and downloading files using soul.")),(0,t.yg)("h2",{id:"file-uploading"},"File Uploading"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"The default file size limit is 10M."),(0,t.yg)("li",{parentName:"ul"},"For custom limitation, use",(0,t.yg)("inlineCode",{parentName:"li"},"--file.size")," with an integer variable. e.g.",(0,t.yg)("inlineCode",{parentName:"li"},"--file.size = 30")),(0,t.yg)("li",{parentName:"ul"},"Upload your files just as way you did before")),(0,t.yg)("h2",{id:"file-downloading"},"File Downloading"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"Soul supports downloading files in streams. There is no need to change anything.")))}c.isMDXComponent=!0}}]);