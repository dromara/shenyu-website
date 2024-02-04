"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56404],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>y});var r=t(11504);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,y=u["".concat(c,".").concat(g)]||u[g]||d[g]||a;return t?r.createElement(y,l(l({ref:n},s),{},{components:t})):r.createElement(y,l({ref:n},s))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32220:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(45072),i=(t(11504),t(95788));const a={sidebar_position:15,title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},l=void 0,o={unversionedId:"plugins/redirect-plugin",id:"version-2.3.0-Legacy/plugins/redirect-plugin",isDocsHomePage:!1,title:"Redirect Plugin",description:"redirect plugin",source:"@site/versioned_docs/version-2.3.0-Legacy/plugins/redirect-plugin.md",sourceDirName:"plugins",slug:"/plugins/redirect-plugin",permalink:"/docs/2.3.0-Legacy/plugins/redirect-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/plugins/redirect-plugin.md",version:"2.3.0-Legacy",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Redirect Plugin",keywords:["redirect"],description:"redirect plugin"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"ContextPath Plugin",permalink:"/docs/2.3.0-Legacy/plugins/context-path-plugin"},next:{title:"Filter Extension",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-filter"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Maven Dependency",id:"maven-dependency",children:[]},{value:"Situation",id:"situation",children:[{value:"Redirect",id:"redirect",children:[]},{value:"Gateway&#39;s own interface forwarding",id:"gateways-own-interface-forwarding",children:[]}]}],p={toc:c},s="wrapper";function u(e){let{components:n,...a}=e;return(0,i.yg)(s,(0,r.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"explanation"},"Explanation"),(0,i.yg)("p",null,"When the soul gateway makes proxy calls to the target service, it also allows users to use the ",(0,i.yg)("inlineCode",{parentName:"p"},"redirect")," plugin to redirect requests."),(0,i.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In ",(0,i.yg)("inlineCode",{parentName:"li"},"soul-admin")," --\x3e plugin management --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"redirect")," ,set to enable\u3002"),(0,i.yg)("li",{parentName:"ul"},"Introduce ",(0,i.yg)("inlineCode",{parentName:"li"},"redirect")," support in the pox.xml file of the gateway."),(0,i.yg)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background."),(0,i.yg)("li",{parentName:"ul"},"Selectors and rules, only matching requests will be forwarded and redirected, please see: ",(0,i.yg)("a",{parentName:"li",href:"../admin/selector-and-rule"},"Selector rules"),"\u3002")),(0,i.yg)("h2",{id:"maven-dependency"},"Maven Dependency"),(0,i.yg)("p",null,"Add the plugin dependency in the pom.xml file of the soul-bootstrap project."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul redirect plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-redirect</artifactId>\n     <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul redirect plugin end--\x3e\n")),(0,i.yg)("h2",{id:"situation"},"Situation"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"As the name suggests, the ",(0,i.yg)("inlineCode",{parentName:"p"},"redirect")," plugin is to re-forward and redirect ",(0,i.yg)("inlineCode",{parentName:"p"},"uri"),".")),(0,i.yg)("h3",{id:"redirect"},"Redirect"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When we configure a custom path in ",(0,i.yg)("inlineCode",{parentName:"li"},"Rule"),", it should be a reachable service path."),(0,i.yg)("li",{parentName:"ul"},"When the request is matched, the ",(0,i.yg)("inlineCode",{parentName:"li"},"Soul Gateway")," will perform the ",(0,i.yg)("inlineCode",{parentName:"li"},"308")," service jump according to the customized path.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Redirect",src:t(23799).c})),(0,i.yg)("h3",{id:"gateways-own-interface-forwarding"},"Gateway's own interface forwarding"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"When the matching rules are met, the service will use the ",(0,i.yg)("inlineCode",{parentName:"li"},"DispatcherHandler")," internal interface for forwarding."),(0,i.yg)("li",{parentName:"ul"},"To implement the gateway's own interface forwarding, we need to use ",(0,i.yg)("inlineCode",{parentName:"li"},"/")," as the prefix in the configuration path. The specific configuration is as shown in the figure below.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Forwarding",src:t(3528).c})))}u.isMDXComponent=!0},23799:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/redirect-01-8f1507e5451cd9246539f456752ce69e.png"},3528:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/redirect-02-66fdb33f7e936df0371f887317ac93cb.png"}}]);