"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[31036],{95788:(e,n,r)=>{r.d(n,{Iu:()=>g,yg:()=>d});var t=r(11504);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},g=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},o="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),o=c(r),y=i,d=o["".concat(u,".").concat(y)]||o[y]||s[y]||l;return r?t.createElement(d,a(a({ref:n},g),{},{components:r})):t.createElement(d,a({ref:n},g))}));function d(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=r.length,a=new Array(l);a[0]=y;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p[o]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<l;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50508:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=r(45072),i=(r(11504),r(95788));const l={title:"Rewrite\u63d2\u4ef6",keywords:["rewrite"],description:"rewrite\u63d2\u4ef6"},a="1. \u6982\u8ff0",p={unversionedId:"plugin-center/http-process/rewrite-plugin",id:"version-2.6.0/plugin-center/http-process/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite\u63d2\u4ef6",description:"rewrite\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/http-process/rewrite-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/rewrite-plugin",permalink:"/zh/docs/2.6.0/plugin-center/http-process/rewrite-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/http-process/rewrite-plugin.md",version:"2.6.0",frontMatter:{title:"Rewrite\u63d2\u4ef6",keywords:["rewrite"],description:"rewrite\u63d2\u4ef6"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Request\u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/http-process/request-plugin"},next:{title:"Brpc\u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/proxy/brpc-plugin"}},u=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2aShenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165pom",id:"22-\u5bfc\u5165pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[{value:"2.4.1 \u63d2\u4ef6\u914d\u7f6e",id:"241-\u63d2\u4ef6\u914d\u7f6e",children:[]},{value:"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e",id:"242-\u9009\u62e9\u5668\u914d\u7f6e",children:[]},{value:"2.4.3 \u89c4\u5219\u914d\u7f6e",id:"243-\u89c4\u5219\u914d\u7f6e",children:[]}]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u91cd\u65b0uri\u793a\u4f8b",id:"251-\u91cd\u65b0uri\u793a\u4f8b",children:[]}]}],c={toc:u},g="wrapper";function o(e){let{components:n,...l}=e;return(0,i.yg)(g,(0,t.c)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Rewrite\u63d2\u4ef6")),(0,i.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u901a\u8fc7\u91cd\u5199\u8bf7\u6c42\u8def\u5f84, \u53ef\u4ee5\u4f7f\u7528\u4e0e\u76ee\u6807\u670d\u52a1\u4e0d\u540c\u7684uri\u3002")),(0,i.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8be5\u63d2\u4ef6\u7528\u4e8e\u91cd\u5199\u8bf7\u6c42uri\u3002")),(0,i.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u6838\u5fc3\u6a21\u5757 ",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-plugin-rewrite"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u6838\u5fc3\u7c7b ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.rewrite.RewritePlugin")))),(0,i.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2aShenyu\u7248\u672c"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2.4.0")),(0,i.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.yg)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(75984).c})),(0,i.yg)("h2",{id:"22-\u5bfc\u5165pom"},"2.2 \u5bfc\u5165pom"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,i.yg)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\u3002")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n")),(0,i.yg)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"rewrite")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002\n",(0,i.yg)("img",{src:r(25256).c}))),(0,i.yg)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,i.yg)("h3",{id:"241-\u63d2\u4ef6\u914d\u7f6e"},"2.4.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u4f7f\u7528\u524d\u8981\u542f\u7528\u63d2\u4ef6\u3002"),(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u518d\u4f7f\u7528\u63d2\u4ef6\u9700\u8981\u7981\u7528\u3002 ")),(0,i.yg)("h3",{id:"242-\u9009\u62e9\u5668\u914d\u7f6e"},"2.4.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u8bf7\u53c2\u8003: ",(0,i.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),".")),(0,i.yg)("h3",{id:"243-\u89c4\u5219\u914d\u7f6e"},"2.4.3 \u89c4\u5219\u914d\u7f6e"),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(19704).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u53c2\u6570\u89e3\u91ca:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"regex")," : \u5339\u914duri\u4e2d\u8981\u91cd\u5199\u90e8\u5206\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u3002"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"replace")," : \u66ff\u6362\u7684\u5185\u5bb9")))),(0,i.yg)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,i.yg)("h3",{id:"251-\u91cd\u65b0uri\u793a\u4f8b"},"2.5.1 \u91cd\u65b0uri\u793a\u4f8b"),(0,i.yg)("h4",{id:"2511-\u8fd0\u884c-shenyu-examples-http-\u9879\u76ee"},"2.5.1.1 \u8fd0\u884c ",(0,i.yg)("inlineCode",{parentName:"h4"},"shenyu-examples-http")," \u9879\u76ee"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),", \u53c2\u8003",(0,i.yg)("a",{parentName:"li",href:"../../quick-start/quick-start-http#%E8%BF%90%E8%A1%8Cshenyu-examples-http%E9%A1%B9%E7%9B%AE"}))),(0,i.yg)("h4",{id:"2511-\u63d2\u4ef6\u914d\u7f6e"},"2.5.1.1 \u63d2\u4ef6\u914d\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.yg)("a",{parentName:"li",href:"#241-%E6%8F%92%E4%BB%B6%E9%85%8D%E7%BD%AE"},"2.4.1"),"\u914d\u7f6e\u63d2\u4ef6.")),(0,i.yg)("h4",{id:"2512-\u9009\u62e9\u5668\u914d\u7f6e"},"2.5.1.2 \u9009\u62e9\u5668\u914d\u7f6e"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u53c2\u8003",(0,i.yg)("a",{parentName:"li",href:"#242-%E9%80%89%E6%8B%A9%E5%99%A8%E9%85%8D%E7%BD%AE"},"2.4.2"),"\u914d\u7f6e\u9009\u62e9\u5668")),(0,i.yg)("h4",{id:"2513-\u89c4\u5219\u914d\u7f6e"},"2.5.1.3 \u89c4\u5219\u914d\u7f6e"),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(74820).c})),(0,i.yg)("p",null,"\u8bf7\u6c42 ",(0,i.yg)("inlineCode",{parentName:"p"},"/http/hello")," \u5c06\u88ab\u91cd\u5199\u6210",(0,i.yg)("inlineCode",{parentName:"p"},"/hi"),"\u3002"),(0,i.yg)("h4",{id:"2514-\u9a8c\u8bc1\u7ed3\u679c"},"2.5.1.4 \u9a8c\u8bc1\u7ed3\u679c"),(0,i.yg)("p",null,"\u4f7f\u7528\u5de5\u5177\uff08\u5982Postman\uff09\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{src:r(12100).c})),(0,i.yg)("h1",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"rewrite")," \u8bbe\u7f6e\u4e3a\u5173\u95ed\u3002")))}o.isMDXComponent=!0},12100:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/rewrite_example_result-1f6860e296fc5418aa97ad425dca82b3.png"},74820:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/rewrite_example_rule-5ad55fb5d2a785738487d663b9c49977.png"},25256:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/rewrite_open-c55fca4d158b61d0ae9cc8bd592204ce.png"},19704:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/rewrite_rule_config-d5e17a2648c2d6a0e0def60767164ae5.png"},75984:(e,n,r)=>{r.d(n,{c:()=>t});const t=r.p+"assets/images/rewrite_use_zh-12454c7c233b74dd945dfa3637056ed4.png"}}]);