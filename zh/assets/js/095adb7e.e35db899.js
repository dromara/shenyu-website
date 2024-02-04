"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69224],{95788:(e,n,o)=>{o.d(n,{Iu:()=>s,yg:()=>u});var r=o(11504);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function c(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?c(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var a=r.createContext({}),i=function(e){var n=r.useContext(a),o=n;return e&&(o="function"==typeof e?e(n):l(l({},n),e)),o},s=function(e){var n=i(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=i(o),y=t,u=d["".concat(a,".").concat(y)]||d[y]||m[y]||c;return o?r.createElement(u,l(l({ref:n},s),{},{components:o})):r.createElement(u,l({ref:n},s))}));function u(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var c=o.length,l=new Array(c);l[0]=y;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p[d]="string"==typeof e?e:t,l[1]=p;for(var i=2;i<c;i++)l[i]=o[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},81060:(e,n,o)=>{o.r(n),o.d(n,{contentTitle:()=>l,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>a});var r=o(45072),t=(o(11504),o(95788));const c={sidebar_position:3,title:"Docker-compose \u90e8\u7f72",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},l=void 0,p={unversionedId:"deployment/deployment-docker-compose",id:"version-2.6.1/deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker-compose \u90e8\u7f72",description:"Docker-compose Deployment",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/zh/docs/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/deployment/deployment-docker-compose.md",version:"2.6.1",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker-compose \u90e8\u7f72",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-package"},next:{title:"Docker\u90e8\u7f72",permalink:"/zh/docs/deployment/deployment-docker"}},a=[{value:"\u4e0b\u8f7d shell \u811a\u672c",id:"\u4e0b\u8f7d-shell-\u811a\u672c",children:[]},{value:"\u6267\u884c\u811a\u672c",id:"\u6267\u884c\u811a\u672c",children:[]},{value:"\u521d\u59cb\u5316<code>shenyu-admin</code>\u5b58\u50a8\u6570\u636e\u6e90",id:"\u521d\u59cb\u5316shenyu-admin\u5b58\u50a8\u6570\u636e\u6e90",children:[]},{value:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u6267\u884c docker-compose",id:"\u6267\u884c-docker-compose",children:[]}],i={toc:a},s="wrapper";function d(e){let{components:n,...o}=e;return(0,t.yg)(s,(0,r.c)({},i,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u4f7f\u7528 ",(0,t.yg)("inlineCode",{parentName:"p"},"docker-compose")," \u6765\u90e8\u7f72 ",(0,t.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u5728\u9605\u8bfb\u672c\u6587\u6863\u524d\uff0c\u4f60\u9700\u8981\u5148\u9605\u8bfb",(0,t.yg)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before"},"\u90e8\u7f72\u5148\u51b3\u6761\u4ef6"),"\u6587\u6863\u6765\u5b8c\u6210\u90e8\u7f72 ",(0,t.yg)("inlineCode",{parentName:"p"},"shenyu")," \u524d\u7684\u73af\u5883\u51c6\u5907\u5de5\u4f5c\u3002")),(0,t.yg)("h3",{id:"\u4e0b\u8f7d-shell-\u811a\u672c"},"\u4e0b\u8f7d shell \u811a\u672c"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"curl -O https://raw.githubusercontent.com/apache/shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh\n")),(0,t.yg)("h3",{id:"\u6267\u884c\u811a\u672c"},"\u6267\u884c\u811a\u672c"),(0,t.yg)("p",null,"\u8fd9\u4e2a\u811a\u672c\u4f1a\u4e0b\u8f7d\u9700\u8981\u7684\u914d\u7f6e\u6587\u4ef6\u3001mysql-connector\uff0c\u5982\u679c\u53d1\u73b0\u4e0b\u8f7d\u5931\u8d25\u53ef\u4ee5\u91cd\u590d\u6267\u884c\u3002"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"sh ./install.sh #\u9ed8\u8ba4\u62c9\u53d6\u6700\u65b0\u914d\u7f6e\uff0c\u5982\u679c\u9700\u8981\u90e8\u7f72\u5df2\u53d1\u5e03\u7248\u672c\uff0c\u53ef\u589e\u52a0\u4e00\u4e2a\u53c2\u6570\u8868\u793a\u7248\u672c\u53f7\uff0c\u6bd4\u5982\uff1av2.4.2 \u6216 latest\n")),(0,t.yg)("h3",{id:"\u521d\u59cb\u5316shenyu-admin\u5b58\u50a8\u6570\u636e\u6e90"},"\u521d\u59cb\u5316",(0,t.yg)("inlineCode",{parentName:"h3"},"shenyu-admin"),"\u5b58\u50a8\u6570\u636e\u6e90"),(0,t.yg)("p",null,"\u53c2\u8003",(0,t.yg)("a",{parentName:"p",href:"/zh/docs/deployment/deployment-before#%E6%95%B0%E6%8D%AE%E5%BA%93%E7%8E%AF%E5%A2%83%E5%87%86%E5%A4%87"},"\u6570\u636e\u5e93\u521d\u59cb\u6587\u6863")," \u521d\u59cb\u5316\u6570\u636e\u5e93\u73af\u5883 \u3002"),(0,t.yg)("h3",{id:"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6"),(0,t.yg)("p",null,"\u4fee\u6539\u811a\u672c\u4e0b\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u6765\u8bbe\u7f6e",(0,t.yg)("inlineCode",{parentName:"p"},"JDBC"),"\u7b49\u914d\u7f6e\u3002"),(0,t.yg)("h3",{id:"\u6267\u884c-docker-compose"},"\u6267\u884c docker-compose"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-${VERSION}/docker-compose.yaml up -d\n")))}d.isMDXComponent=!0}}]);