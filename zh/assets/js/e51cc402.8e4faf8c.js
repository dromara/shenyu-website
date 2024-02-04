"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32456],{95788:(e,n,t)=>{t.d(n,{Iu:()=>y,yg:()=>d});var r=t(11504);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},y=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,y=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,d=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return t?r.createElement(d,i(i({ref:n},y),{},{components:t})):r.createElement(d,i({ref:n},y))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},42416:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(45072),a=(t(11504),t(95788));const o={sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},i=void 0,l={unversionedId:"deployment/deployment-local",id:"version-2.4.0/deployment/deployment-local",isDocsHomePage:!1,title:"\u672c\u5730\u90e8\u7f72",description:"\u672c\u5730\u90e8\u7f72",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-local.md",sourceDirName:"deployment",slug:"/deployment/deployment-local",permalink:"/zh/docs/2.4.0/deployment/deployment-local",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/deployment/deployment-local.md",version:"2.4.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u672c\u5730\u90e8\u7f72",keywords:["Deployment"],description:"\u672c\u5730\u90e8\u7f72"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"SPI\u6269\u5c55",permalink:"/zh/docs/2.4.0/design/spi-design"},next:{title:"\u4e8c\u8fdb\u5236\u5305\u90e8\u7f72",permalink:"/zh/docs/2.4.0/deployment/deployment-package"}},p=[{value:"\u73af\u5883\u51c6\u5907",id:"\u73af\u5883\u51c6\u5907",children:[]},{value:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801",children:[]}],c={toc:p},y="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(y,(0,r.c)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u672c\u5730\u73af\u5883\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002"),(0,a.yg)("h3",{id:"\u73af\u5883\u51c6\u5907"},"\u73af\u5883\u51c6\u5907"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5JDK1.8+"),(0,a.yg)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Git"),(0,a.yg)("li",{parentName:"ul"},"\u672c\u5730\u6b63\u786e\u5b89\u88c5Maven"),(0,a.yg)("li",{parentName:"ul"},"\u9009\u62e9\u4e00\u6b3e\u5f00\u53d1\u5de5\u5177\uff0c\u6bd4\u5982IDEA")),(0,a.yg)("h3",{id:"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"},"\u4e0b\u8f7d\u7f16\u8bd1\u4ee3\u7801"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4ee3\u7801")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"git clone https://github.com/apache/incubator-shenyu.git\ncd incubator-shenyu\nmvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.admin.ShenyuAdminBootstrap"),"\uff0c\u8bbf\u95ee http://localhost:9095 \uff0c \u9ed8\u8ba4\u7528\u6237\u540d\u548c\u5bc6\u7801\u5206\u522b\u4e3a: ",(0,a.yg)("inlineCode",{parentName:"p"},"admin")," \u548c ",(0,a.yg)("inlineCode",{parentName:"p"},"123456"),"\u3002"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"h2"),"\u6765\u5b58\u50a8\uff0c\u8bbe\u7f6e\u53d8\u91cf ",(0,a.yg)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u5982\u679c\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"MySQL"),"\u6765\u5b58\u50a8\uff0c\u4fee\u6539 ",(0,a.yg)("inlineCode",{parentName:"p"},"application.yaml")," \u4e2d\u7684 ",(0,a.yg)("inlineCode",{parentName:"p"},"mysql")," \u914d\u7f6e\u3002")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528\u5f00\u53d1\u5de5\u5177\u542f\u52a8 ",(0,a.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.bootstrap.ShenyuBootstrapApplication"),"\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4f7f\u7528 Windows \u6765\u8fd0\u884c\u4ee3\u7801\u65f6\uff0c\u53ef\u80fd\u4f1a\u78b0\u5230 ",(0,a.yg)("inlineCode",{parentName:"p"},"filename too long")," \u7684 Git \u62a5\u9519\uff0c\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u7ba1\u7406\u5458\u6743\u9650\u8fd0\u884c ",(0,a.yg)("inlineCode",{parentName:"p"},"git config --system core.longpaths true")," \u547d\u4ee4\u6765\u89e3\u51b3"))))}u.isMDXComponent=!0}}]);