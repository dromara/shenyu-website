"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[3520],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>y});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),d=i,y=c["".concat(l,".").concat(d)]||c[d]||g[d]||a;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15104:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(45072),i=(n(11504),n(95788));const a={title:"RequestPlugin",keywords:["RequestPlugin"],description:"RequestPlugin"},o=void 0,u={unversionedId:"plugin-center/http-process/request-plugin",id:"version-2.5.0/plugin-center/http-process/request-plugin",isDocsHomePage:!1,title:"RequestPlugin",description:"RequestPlugin",source:"@site/versioned_docs/version-2.5.0/plugin-center/http-process/request-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/request-plugin",permalink:"/docs/2.5.0/plugin-center/http-process/request-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/plugin-center/http-process/request-plugin.md",version:"2.5.0",frontMatter:{title:"RequestPlugin",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Redirect Plugin",permalink:"/docs/2.5.0/plugin-center/http-process/redirect-plugin"},next:{title:"Rewrite Plugin",permalink:"/docs/2.5.0/plugin-center/http-process/rewrite-plugin"}},l=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:l},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"explanation"},"Explanation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When ",(0,i.yg)("inlineCode",{parentName:"li"},"ShenYu")," gateway makes proxy call to target service, it also allows users to add, modify and remove request headers by using 'request' plugin to request parameters, request headers and cookies.")),(0,i.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"request")," , set to enable."),(0,i.yg)("li",{parentName:"ul"},"Introduce ",(0,i.yg)("inlineCode",{parentName:"li"},"request")," support in the pox.xml file of the gateway."),(0,i.yg)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,i.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,i.yg)("li",{parentName:"ul"},"The custom request parameter modification function is performed only for matching requests.")),(0,i.yg)("h2",{id:"situation"},"Situation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"As the name implies, a request plugin is a custom modification of a ",(0,i.yg)("inlineCode",{parentName:"li"},"URI")," request parameter."),(0,i.yg)("li",{parentName:"ul"},"When a request is matched, the custom modification rule is set to change the parameters accepted by the downstream service.")))}c.isMDXComponent=!0}}]);