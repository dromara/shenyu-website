"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[30278],{95788:(e,n,t)=>{t.d(n,{Iu:()=>g,yg:()=>y});var i=t(11504);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},g=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return t?i.createElement(y,l(l({ref:n},g),{},{components:t})):i.createElement(y,l({ref:n},g))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},96544:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>p});var i=t(45072),o=(t(11504),t(95788));const a={sidebar_position:2,title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",keywords:["soul"],description:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1"},l=void 0,r={unversionedId:"design/data-sync",id:"version-2.3.0-Legacy/design/data-sync",isDocsHomePage:!1,title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",description:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/design/data-sync.md",sourceDirName:"design",slug:"/design/data-sync",permalink:"/zh/docs/2.3.0-Legacy/design/data-sync",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.3.0-Legacy/design/data-sync.md",version:"2.3.0-Legacy",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1",keywords:["soul"],description:"\u6570\u636e\u540c\u6b65\u8bbe\u8ba1"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"\u6570\u636e\u5e93\u8bbe\u8ba1",permalink:"/zh/docs/2.3.0-Legacy/design/database-design"},next:{title:"\u914d\u7f6e\u6d41\u7a0b\u4ecb\u7ecd",permalink:"/zh/docs/2.3.0-Legacy/design/config"}},p=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u524d\u8a00",id:"\u524d\u8a00",children:[]},{value:"\u539f\u7406\u5206\u6790",id:"\u539f\u7406\u5206\u6790",children:[]},{value:"Zookeeper\u540c\u6b65",id:"zookeeper\u540c\u6b65",children:[]},{value:"Websocket\u540c\u6b65",id:"websocket\u540c\u6b65",children:[]},{value:"Http\u957f\u8f6e\u8be2",id:"http\u957f\u8f6e\u8be2",children:[]},{value:"\u4ed3\u5e93\u5730\u5740",id:"\u4ed3\u5e93\u5730\u5740",children:[]},{value:"\u6700\u540e",id:"\u6700\u540e",children:[]}],s={toc:p},g="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(g,(0,i.c)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,o.yg)("p",null,"\u672c\u7bc7\u4e3b\u8981\u8bb2\u89e3\u6570\u636e\u5e93\u540c\u6b65\u7684\u4e09\u79cd\u65b9\u5f0f\uff0c\u4ee5\u53ca\u539f\u7406\u3002"),(0,o.yg)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.yg)("p",null,"\u7f51\u5173\u662f\u6d41\u91cf\u8bf7\u6c42\u7684\u5165\u53e3\uff0c\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u627f\u62c5\u4e86\u975e\u5e38\u91cd\u8981\u7684\u89d2\u8272\uff0c\u7f51\u5173\u9ad8\u53ef\u7528\u7684\u91cd\u8981\u6027\u4e0d\u8a00\u800c\u55bb\u3002\u5728\u4f7f\u7528\u7f51\u5173\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e3a\u4e86\u6ee1\u8db3\u4e1a\u52a1\u8bc9\u6c42\uff0c\u7ecf\u5e38\u9700\u8981\u53d8\u66f4\u914d\u7f6e\uff0c\u6bd4\u5982\u6d41\u63a7\u89c4\u5219\u3001\u8def\u7531\u89c4\u5219\u7b49\u7b49\u3002\u56e0\u6b64\uff0c\u7f51\u5173\u52a8\u6001\u914d\u7f6e\u662f\u4fdd\u969c\u7f51\u5173\u9ad8\u53ef\u7528\u7684\u91cd\u8981\u56e0\u7d20\u3002\u90a3\u4e48\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u7f51\u5173\u53c8\u662f\u5982\u4f55\u652f\u6301\u52a8\u6001\u914d\u7f6e\u7684\u5462\uff1f"),(0,o.yg)("p",null,"\u4f7f\u7528\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u7684\u540c\u5b66\u90fd\u77e5\u9053\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u7684\u63d2\u4ef6\u5168\u90fd\u662f\u70ed\u63d2\u62d4\u7684\uff0c\u5e76\u4e14\u6240\u6709\u63d2\u4ef6\u7684\u9009\u62e9\u5668\u3001\u89c4\u5219\u90fd\u662f\u52a8\u6001\u914d\u7f6e\uff0c\u7acb\u5373\u751f\u6548\uff0c\u4e0d\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002\u4f46\u662f\u6211\u4eec\u5728\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u7f51\u5173\u8fc7\u7a0b\u4e2d\uff0c\u7528\u6237\u4e5f\u53cd\u9988\u4e86\u4e0d\u5c11\u95ee\u9898"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4f9d\u8d56 ",(0,o.yg)("inlineCode",{parentName:"li"},"zookeeper"),"\uff0c\u8fd9\u8ba9\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"li"},"etcd"),"\u3001",(0,o.yg)("inlineCode",{parentName:"li"},"consul"),"\u3001",(0,o.yg)("inlineCode",{parentName:"li"},"nacos")," \u6ce8\u518c\u4e2d\u5fc3\u7684\u7528\u6237\u5f88\u662f\u56f0\u6270"),(0,o.yg)("li",{parentName:"ul"},"\u4f9d\u8d56 ",(0,o.yg)("inlineCode",{parentName:"li"},"redis"),"\u3001",(0,o.yg)("inlineCode",{parentName:"li"},"influxdb"),"\uff0c\u6211\u8fd8\u6ca1\u6709\u4f7f\u7528\u9650\u6d41\u63d2\u4ef6\u3001\u76d1\u63a7\u63d2\u4ef6\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u8fd9\u4e9b")),(0,o.yg)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u5bf9 ",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u8fdb\u884c\u4e86\u5c40\u90e8\u91cd\u6784\uff0c\u5386\u65f6\u4e24\u4e2a\u6708\u7684\u7248\u672c\u8fed\u4ee3\uff0c\u6211\u4eec\u53d1\u5e03\u4e86 ",(0,o.yg)("inlineCode",{parentName:"p"},"2.0")," \u7248\u672c"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u6570\u636e\u540c\u6b65\u65b9\u5f0f\u79fb\u9664\u4e86\u5bf9 ",(0,o.yg)("inlineCode",{parentName:"li"},"zookeeper")," \u7684\u5f3a\u4f9d\u8d56\uff0c\u65b0\u589e ",(0,o.yg)("inlineCode",{parentName:"li"},"http \u957f\u8f6e\u8be2")," \u4ee5\u53ca ",(0,o.yg)("inlineCode",{parentName:"li"},"websocket")),(0,o.yg)("li",{parentName:"ul"},"\u9650\u6d41\u63d2\u4ef6\u4e0e\u76d1\u63a7\u63d2\u4ef6\u5b9e\u73b0\u771f\u6b63\u7684\u52a8\u6001\u914d\u7f6e\uff0c\u7531\u4e4b\u524d\u7684 ",(0,o.yg)("inlineCode",{parentName:"li"},"yml")," \u914d\u7f6e\uff0c\u6539\u4e3a ",(0,o.yg)("inlineCode",{parentName:"li"},"admin")," \u540e\u53f0\u7528\u6237\u52a8\u6001\u914d\u7f6e")),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"\u914d\u7f6e\u540c\u6b65\u4e3a\u4ec0\u4e48\u4e0d\u4f7f\u7528\u914d\u7f6e\u4e2d\u5fc3\u5462\uff1f")),(0,o.yg)("p",null,"\u9996\u5148\uff0c\u5f15\u5165\u914d\u7f6e\u4e2d\u5fc3\uff0c\u4f1a\u589e\u52a0\u5f88\u591a\u989d\u5916\u7684\u6210\u672c\uff0c\u4e0d\u5149\u662f\u8fd0\u7ef4\uff0c\u800c\u4e14\u4f1a\u8ba9 ",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u53d8\u5f97\u5f88\u91cd\uff1b\u53e6\u5916\uff0c\u4f7f\u7528\u914d\u7f6e\u4e2d\u5fc3\uff0c\u6570\u636e\u683c\u5f0f\u4e0d\u53ef\u63a7\uff0c\u4e0d\u4fbf\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u8fdb\u884c\u914d\u7f6e\u7ba1\u7406\u3002"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"\u52a8\u6001\u914d\u7f6e\u66f4\u65b0\uff1f\u6bcf\u6b21\u6211\u67e5\u6570\u636e\u5e93\uff0c\u6216\u8005redis\u4e0d\u5c31\u884c\u4e86\u5417\uff1f\u62ff\u5230\u7684\u5c31\u662f\u6700\u65b0\u7684\uff0c\u54ea\u91cc\u90a3\u4e48\u591a\u4e8b\u60c5\u5462\uff1f")),(0,o.yg)("p",null,"soul\u4f5c\u4e3a\u7f51\u5173\uff0c\u4e3a\u4e86\u63d0\u4f9b\u66f4\u9ad8\u7684\u54cd\u5e94\u901f\u5ea6\uff0c\u6240\u6709\u7684\u914d\u7f6e\u90fd\u7f13\u5b58\u5728JVM\u7684Hashmap\u4e2d\uff0c\u6bcf\u6b21\u8bf7\u6c42\u90fd\u8d70\u7684\u672c\u5730\u7f13\u5b58\uff0c\u901f\u5ea6\u975e\u5e38\u5feb\u3002\u6240\u4ee5\u672c\u6587\u4e5f\u53ef\u4ee5\u7406\u89e3\u4e3a\u5206\u5e03\u5f0f\u73af\u5883\u4e2d\uff0c\u5185\u5b58\u540c\u6b65\u7684\u4e09\u79cd\u65b9\u5f0f\u3002"),(0,o.yg)("h2",{id:"\u539f\u7406\u5206\u6790"},"\u539f\u7406\u5206\u6790"),(0,o.yg)("p",null,"\u5148\u6765\u5f20\u9ad8\u6e05\u65e0\u7801\u56fe\uff0c\u4e0b\u56fe\u5c55\u793a\u4e86 ",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u6570\u636e\u540c\u6b65\u7684\u6d41\u7a0b\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u7f51\u5173\u5728\u542f\u52a8\u65f6\uff0c\u4f1a\u4ece\u914d\u7f6e\u670d\u52a1\u540c\u6b65\u914d\u7f6e\u6570\u636e\uff0c\u5e76\u4e14\u652f\u6301\u63a8\u62c9\u6a21\u5f0f\u83b7\u53d6\u914d\u7f6e\u53d8\u66f4\u4fe1\u606f\uff0c\u5e76\u4e14\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002\u800c\u7ba1\u7406\u5458\u5728\u7ba1\u7406\u540e\u53f0\uff0c\u53d8\u66f4\u7528\u6237\u3001\u89c4\u5219\u3001\u63d2\u4ef6\u3001\u6d41\u91cf\u914d\u7f6e\uff0c\u901a\u8fc7\u63a8\u62c9\u6a21\u5f0f\u5c06\u53d8\u66f4\u4fe1\u606f\u540c\u6b65\u7ed9 ",(0,o.yg)("inlineCode",{parentName:"p"},"Soul")," \u7f51\u5173\uff0c\u5177\u4f53\u662f ",(0,o.yg)("inlineCode",{parentName:"p"},"push")," \u6a21\u5f0f\uff0c\u8fd8\u662f ",(0,o.yg)("inlineCode",{parentName:"p"},"pull")," \u6a21\u5f0f\u53d6\u51b3\u4e8e\u914d\u7f6e\u3002\u5173\u4e8e\u914d\u7f6e\u540c\u6b65\u6a21\u5757\uff0c\u5176\u5b9e\u662f\u4e00\u4e2a\u7b80\u7248\u7684\u914d\u7f6e\u4e2d\u5fc3\u3002\n",(0,o.yg)("img",{parentName:"p",src:"https://bestkobe.gitee.io/images/soul/soul-config-processor.png?_t=201908032316",alt:"Soul\u6570\u636e\u540c\u6b65\u6d41\u7a0b\u56fe"})),(0,o.yg)("p",null,"\u5728 ",(0,o.yg)("inlineCode",{parentName:"p"},"1.x")," \u7248\u672c\u4e2d\uff0c\u914d\u7f6e\u670d\u52a1\u4f9d\u8d56 ",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper")," \u5b9e\u73b0\uff0c\u7ba1\u7406\u540e\u53f0\u5c06\u53d8\u66f4\u4fe1\u606f ",(0,o.yg)("inlineCode",{parentName:"p"},"push")," \u7ed9\u7f51\u5173\u3002\u800c ",(0,o.yg)("inlineCode",{parentName:"p"},"2.x")," \u7248\u672c\u652f\u6301 ",(0,o.yg)("inlineCode",{parentName:"p"},"websocket"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"http"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper"),"\uff0c\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"soul.sync.strategy")," \u6307\u5b9a\u5bf9\u5e94\u7684\u540c\u6b65\u7b56\u7565\uff0c\u9ed8\u8ba4\u4f7f\u7528 ",(0,o.yg)("inlineCode",{parentName:"p"},"websocket")," \u540c\u6b65\u7b56\u7565\uff0c\u53ef\u4ee5\u505a\u5230\u79d2\u7ea7\u6570\u636e\u540c\u6b65\u3002\u4f46\u662f\uff0c\u6709\u4e00\u70b9\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"soul-web")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u540c\u6b65\u673a\u5236\u3002"),(0,o.yg)("p",null,"\u5982\u4e0b\u56fe\u6240\u793a\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u5728\u7528\u6237\u53d1\u751f\u914d\u7f6e\u53d8\u66f4\u4e4b\u540e\uff0c\u4f1a\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"EventPublisher")," \u53d1\u51fa\u914d\u7f6e\u53d8\u66f4\u901a\u77e5\uff0c\u7531 ",(0,o.yg)("inlineCode",{parentName:"p"},"EventDispatcher")," \u5904\u7406\u8be5\u53d8\u66f4\u901a\u77e5\uff0c\u7136\u540e\u6839\u636e\u914d\u7f6e\u7684\u540c\u6b65\u7b56\u7565(http\u3001websocket\u3001zookeeper)\uff0c\u5c06\u914d\u7f6e\u53d1\u9001\u7ed9\u5bf9\u5e94\u7684\u4e8b\u4ef6\u5904\u7406\u5668"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,o.yg)("inlineCode",{parentName:"li"},"websocket")," \u540c\u6b65\u7b56\u7565\uff0c\u5219\u5c06\u53d8\u66f4\u540e\u7684\u6570\u636e\u4e3b\u52a8\u63a8\u9001\u7ed9 ",(0,o.yg)("inlineCode",{parentName:"li"},"soul-web"),"\uff0c\u5e76\u4e14\u5728\u7f51\u5173\u5c42\uff0c\u4f1a\u6709\u5bf9\u5e94\u7684 ",(0,o.yg)("inlineCode",{parentName:"li"},"WebsocketCacheHandler")," \u5904\u7406\u5668\u6765\u5904\u7406 ",(0,o.yg)("inlineCode",{parentName:"li"},"admin")," \u7684\u6570\u636e\u63a8\u9001"),(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,o.yg)("inlineCode",{parentName:"li"},"zookeeper")," \u540c\u6b65\u7b56\u7565\uff0c\u5c06\u53d8\u66f4\u6570\u636e\u66f4\u65b0\u5230 ",(0,o.yg)("inlineCode",{parentName:"li"},"zookeeper"),"\uff0c\u800c ",(0,o.yg)("inlineCode",{parentName:"li"},"ZookeeperSyncCache")," \u4f1a\u76d1\u542c\u5230 ",(0,o.yg)("inlineCode",{parentName:"li"},"zookeeper")," \u7684\u6570\u636e\u53d8\u66f4\uff0c\u5e76\u4e88\u4ee5\u5904\u7406"),(0,o.yg)("li",{parentName:"ul"},"\u5982\u679c\u662f ",(0,o.yg)("inlineCode",{parentName:"li"},"http")," \u540c\u6b65\u7b56\u7565\uff0c",(0,o.yg)("inlineCode",{parentName:"li"},"soul-web")," \u4e3b\u52a8\u53d1\u8d77\u957f\u8f6e\u8be2\u8bf7\u6c42\uff0c\u9ed8\u8ba4\u6709 90s \u8d85\u65f6\u65f6\u95f4\uff0c\u5982\u679c ",(0,o.yg)("inlineCode",{parentName:"li"},"soul-admin")," \u6ca1\u6709\u6570\u636e\u53d8\u66f4\uff0c\u5219\u4f1a\u963b\u585e http \u8bf7\u6c42\uff0c\u5982\u679c\u6709\u6570\u636e\u53d1\u751f\u53d8\u66f4\u5219\u54cd\u5e94\u53d8\u66f4\u7684\u6570\u636e\u4fe1\u606f\uff0c\u5982\u679c\u8d85\u8fc7 60s \u4ecd\u7136\u6ca1\u6709\u6570\u636e\u53d8\u66f4\u5219\u54cd\u5e94\u7a7a\u6570\u636e\uff0c\u7f51\u5173\u5c42\u63a5\u5230\u54cd\u5e94\u540e\uff0c\u7ee7\u7eed\u53d1\u8d77 http \u8bf7\u6c42\uff0c\u53cd\u590d\u540c\u6837\u7684\u8bf7\u6c42\n",(0,o.yg)("img",{parentName:"li",src:"https://bestkobe.gitee.io/images/soul/config-strage-processor.png?_t=201908032339",alt:"Soul\u914d\u7f6e\u540c\u6b65\u7b56\u7565\u6d41\u7a0b\u56fe"}))),(0,o.yg)("h2",{id:"zookeeper\u540c\u6b65"},"Zookeeper\u540c\u6b65"),(0,o.yg)("p",null,"\u57fa\u4e8e zookeeper \u7684\u540c\u6b65\u539f\u7406\u5f88\u7b80\u5355\uff0c\u4e3b\u8981\u662f\u4f9d\u8d56 ",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper")," \u7684 watch \u673a\u5236\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"soul-web")," \u4f1a\u76d1\u542c\u914d\u7f6e\u7684\u8282\u70b9\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u5728\u542f\u52a8\u7684\u65f6\u5019\uff0c\u4f1a\u5c06\u6570\u636e\u5168\u91cf\u5199\u5165 ",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper"),"\uff0c\u540e\u7eed\u6570\u636e\u53d1\u751f\u53d8\u66f4\u65f6\uff0c\u4f1a\u589e\u91cf\u66f4\u65b0 ",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper")," \u7684\u8282\u70b9\uff0c\u4e0e\u6b64\u540c\u65f6\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"soul-web")," \u4f1a\u76d1\u542c\u914d\u7f6e\u4fe1\u606f\u7684\u8282\u70b9\uff0c\u4e00\u65e6\u6709\u4fe1\u606f\u53d8\u66f4\u65f6\uff0c\u4f1a\u66f4\u65b0\u672c\u5730\u7f13\u5b58\u3002"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/soul-zookeeper.png",alt:"zookeeper\u8282\u70b9\u8bbe\u8ba1"})),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"soul")," \u5c06\u914d\u7f6e\u4fe1\u606f\u5199\u5230zookeeper\u8282\u70b9\uff0c\u662f\u901a\u8fc7\u7cbe\u7ec6\u8bbe\u8ba1\u7684\u3002"),(0,o.yg)("h2",{id:"websocket\u540c\u6b65"},"Websocket\u540c\u6b65"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"websocket")," \u548c ",(0,o.yg)("inlineCode",{parentName:"p"},"zookeeper")," \u673a\u5236\u6709\u70b9\u7c7b\u4f3c\uff0c\u5c06\u7f51\u5173\u4e0e ",(0,o.yg)("inlineCode",{parentName:"p"},"admin")," \u5efa\u7acb\u597d ",(0,o.yg)("inlineCode",{parentName:"p"},"websocket")," \u8fde\u63a5\u65f6\uff0c",(0,o.yg)("inlineCode",{parentName:"p"},"admin")," \u4f1a\u63a8\u9001\u4e00\u6b21\u5168\u91cf\u6570\u636e\uff0c\u540e\u7eed\u5982\u679c\u914d\u7f6e\u6570\u636e\u53d1\u751f\u53d8\u66f4\uff0c\u5219\u5c06\u589e\u91cf\u6570\u636e\u901a\u8fc7 ",(0,o.yg)("inlineCode",{parentName:"p"},"websocket")," \u4e3b\u52a8\u63a8\u9001\u7ed9 ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-web")),(0,o.yg)("p",null,"\u4f7f\u7528websocket\u540c\u6b65\u7684\u65f6\u5019\uff0c\u7279\u522b\u8981\u6ce8\u610f\u65ad\u7ebf\u91cd\u8fde\uff0c\u4e5f\u53eb\u4fdd\u6301\u5fc3\u8df3\u3002",(0,o.yg)("inlineCode",{parentName:"p"},"soul"),"\u4f7f\u7528",(0,o.yg)("inlineCode",{parentName:"p"},"java-websocket")," \u8fd9\u4e2a\u7b2c\u4e09\u65b9\u5e93\u6765\u8fdb\u884c",(0,o.yg)("inlineCode",{parentName:"p"},"websocket"),"\u8fde\u63a5\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'public class WebsocketSyncCache extends WebsocketCacheHandler {\n    /**\n     * The Client.\n     */\n    private WebSocketClient client;\n\n    public WebsocketSyncCache(final SoulConfig.WebsocketConfig websocketConfig) {\n        ScheduledThreadPoolExecutor executor = new ScheduledThreadPoolExecutor(1,\n                SoulThreadFactory.create("websocket-connect", true));\n         client = new WebSocketClient(new URI(websocketConfig.getUrl())) {\n                @Override\n                public void onOpen(final ServerHandshake serverHandshake) {\n                  //....\n                }\n                @Override\n                public void onMessage(final String result) {\n                  //....\n                }\n            };\n        //\u8fdb\u884c\u8fde\u63a5\n        client.connectBlocking();\n        //\u4f7f\u7528\u8c03\u5ea6\u7ebf\u7a0b\u6c60\u8fdb\u884c\u65ad\u7ebf\u91cd\u8fde\uff0c30\u79d2\u8fdb\u884c\u4e00\u6b21\n        executor.scheduleAtFixedRate(() -> {\n            if (client != null && client.isClosed()) {\n                    client.reconnectBlocking();\n            }\n        }, 10, 30, TimeUnit.SECONDS);\n    }\n')),(0,o.yg)("h2",{id:"http\u957f\u8f6e\u8be2"},"Http\u957f\u8f6e\u8be2"),(0,o.yg)("p",null,"zookeeper\u3001websocket \u6570\u636e\u540c\u6b65\u7684\u673a\u5236\u6bd4\u8f83\u7b80\u5355\uff0c\u800c http \u540c\u6b65\u4f1a\u76f8\u5bf9\u590d\u6742\u4e00\u4e9b\u3002Soul \u501f\u9274\u4e86 ",(0,o.yg)("inlineCode",{parentName:"p"},"Apollo"),"\u3001",(0,o.yg)("inlineCode",{parentName:"p"},"Nacos")," \u7684\u8bbe\u8ba1\u601d\u60f3\uff0c\u53d6\u5176\u7cbe\u534e\uff0c\u81ea\u5df1\u5b9e\u73b0\u4e86 ",(0,o.yg)("inlineCode",{parentName:"p"},"http")," \u957f\u8f6e\u8be2\u6570\u636e\u540c\u6b65\u529f\u80fd\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u5e76\u975e\u4f20\u7edf\u7684 ajax \u957f\u8f6e\u8be2\uff01"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://bestkobe.gitee.io/images/soul/http-long-polling.png?_t=201908032339",alt:"http\u957f\u8f6e\u8be2"})),(0,o.yg)("p",null,"http \u957f\u8f6e\u8be2\u673a\u5236\u5982\u4e0a\u6240\u793a\uff0csoul-web \u7f51\u5173\u8bf7\u6c42 admin \u7684\u914d\u7f6e\u670d\u52a1\uff0c\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4\u4e3a 90s\uff0c\u610f\u5473\u7740\u7f51\u5173\u5c42\u8bf7\u6c42\u914d\u7f6e\u670d\u52a1\u6700\u591a\u4f1a\u7b49\u5f85 90s\uff0c\u8fd9\u6837\u4fbf\u4e8e admin \u914d\u7f6e\u670d\u52a1\u53ca\u65f6\u54cd\u5e94\u53d8\u66f4\u6570\u636e\uff0c\u4ece\u800c\u5b9e\u73b0\u51c6\u5b9e\u65f6\u63a8\u9001\u3002"),(0,o.yg)("p",null,"http \u8bf7\u6c42\u5230\u8fbe soul-admin \u4e4b\u540e\uff0c\u5e76\u975e\u7acb\u9a6c\u54cd\u5e94\u6570\u636e\uff0c\u800c\u662f\u5229\u7528 Servlet3.0 \u7684\u5f02\u6b65\u673a\u5236\uff0c\u5f02\u6b65\u54cd\u5e94\u6570\u636e\u3002\u9996\u5148\uff0c\u5c06\u957f\u8f6e\u8be2\u8bf7\u6c42\u4efb\u52a1 ",(0,o.yg)("inlineCode",{parentName:"p"},"LongPollingClient")," \u6254\u5230 ",(0,o.yg)("inlineCode",{parentName:"p"},"BlockingQueue")," \u4e2d\uff0c\u5e76\u4e14\u5f00\u542f\u8c03\u5ea6\u4efb\u52a1\uff0c60s \u540e\u6267\u884c\uff0c\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f 60s \u540e\u5c06\u8be5\u957f\u8f6e\u8be2\u8bf7\u6c42\u79fb\u9664\u961f\u5217\uff0c\u5373\u4fbf\u662f\u8fd9\u6bb5\u65f6\u95f4\u5185\u6ca1\u6709\u53d1\u751f\u914d\u7f6e\u6570\u636e\u53d8\u66f4\u3002\u56e0\u4e3a\u5373\u4fbf\u662f\u6ca1\u6709\u914d\u7f6e\u53d8\u66f4\uff0c\u4e5f\u5f97\u8ba9\u7f51\u5173\u77e5\u9053\uff0c\u603b\u4e0d\u80fd\u8ba9\u5176\u5e72\u7b49\u5427\uff0c\u800c\u4e14\u7f51\u5173\u8bf7\u6c42\u914d\u7f6e\u670d\u52a1\u65f6\uff0c\u4e5f\u6709 90s \u7684\u8d85\u65f6\u65f6\u95f4\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},"public void doLongPolling(final HttpServletRequest request, final HttpServletResponse response) {\n    // \u56e0\u4e3asoul-web\u53ef\u80fd\u672a\u6536\u5230\u67d0\u4e2a\u914d\u7f6e\u53d8\u66f4\u7684\u901a\u77e5\uff0c\u56e0\u6b64MD5\u503c\u53ef\u80fd\u4e0d\u4e00\u81f4\uff0c\u5219\u7acb\u5373\u54cd\u5e94\n    List<ConfigGroupEnum> changedGroup = compareMD5(request);\n    String clientIp = getRemoteIp(request);\n    if (CollectionUtils.isNotEmpty(changedGroup)) {\n        this.generateResponse(response, changedGroup);\n        return;\n    }\n\n    // Servlet3.0\u5f02\u6b65\u54cd\u5e94http\u8bf7\u6c42\n    final AsyncContext asyncContext = request.startAsync();\n    asyncContext.setTimeout(0L);\n    scheduler.execute(new LongPollingClient(asyncContext, clientIp, 60));\n}\n\nclass LongPollingClient implements Runnable {\n    LongPollingClient(final AsyncContext ac, final String ip, final long timeoutTime) {\n        // \u7701\u7565......\n    }\n    @Override\n    public void run() {\n        // \u52a0\u5165\u5b9a\u65f6\u4efb\u52a1\uff0c\u5982\u679c60s\u4e4b\u5185\u6ca1\u6709\u914d\u7f6e\u53d8\u66f4\uff0c\u521960s\u540e\u6267\u884c\uff0c\u54cd\u5e94http\u8bf7\u6c42\n        this.asyncTimeoutFuture = scheduler.schedule(() -> {\n            // clients\u662f\u963b\u585e\u961f\u5217\uff0c\u4fdd\u5b58\u4e86\u6765\u81easoul-web\u7684\u8bf7\u6c42\u4fe1\u606f\n            clients.remove(LongPollingClient.this);\n            List<ConfigGroupEnum> changedGroups = HttpLongPollingDataChangedListener.compareMD5((HttpServletRequest) asyncContext.getRequest());\n            sendResponse(changedGroups);\n        }, timeoutTime, TimeUnit.MILLISECONDS);\n        //\n        clients.add(this);\n    }\n}\n")),(0,o.yg)("p",null,"\u5982\u679c\u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u7ba1\u7406\u5458\u53d8\u66f4\u4e86\u914d\u7f6e\u6570\u636e\uff0c\u6b64\u65f6\uff0c\u4f1a\u6328\u4e2a\u79fb\u9664\u961f\u5217\u4e2d\u7684\u957f\u8f6e\u8be2\u8bf7\u6c42\uff0c\u5e76\u54cd\u5e94\u6570\u636e\uff0c\u544a\u77e5\u662f\u54ea\u4e2a Group \u7684\u6570\u636e\u53d1\u751f\u4e86\u53d8\u66f4\uff08\u6211\u4eec\u5c06\u63d2\u4ef6\u3001\u89c4\u5219\u3001\u6d41\u91cf\u914d\u7f6e\u3001\u7528\u6237\u914d\u7f6e\u6570\u636e\u5206\u6210\u4e0d\u540c\u7684\u7ec4\uff09\u3002\u7f51\u5173\u6536\u5230\u54cd\u5e94\u4fe1\u606f\u4e4b\u540e\uff0c\u53ea\u77e5\u9053\u662f\u54ea\u4e2a Group \u53d1\u751f\u4e86\u914d\u7f6e\u53d8\u66f4\uff0c\u8fd8\u9700\u8981\u518d\u6b21\u8bf7\u6c42\u8be5 Group \u7684\u914d\u7f6e\u6570\u636e\u3002\u6709\u4eba\u4f1a\u95ee\uff0c\u4e3a\u4ec0\u4e48\u4e0d\u662f\u76f4\u63a5\u5c06\u53d8\u66f4\u7684\u6570\u636e\u5199\u51fa\uff1f\u6211\u4eec\u5728\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u4e5f\u6df1\u5165\u8ba8\u8bba\u8fc7\u8be5\u95ee\u9898\uff0c\u56e0\u4e3a http \u957f\u8f6e\u8be2\u673a\u5236\u53ea\u80fd\u4fdd\u8bc1\u51c6\u5b9e\u65f6\uff0c\u5982\u679c\u5728\u7f51\u5173\u5c42\u5904\u7406\u4e0d\u53ca\u65f6\uff0c\u6216\u8005\u7ba1\u7406\u5458\u9891\u7e41\u66f4\u65b0\u914d\u7f6e\uff0c\u5f88\u6709\u53ef\u80fd\u4fbf\u9519\u8fc7\u4e86\u67d0\u4e2a\u914d\u7f6e\u53d8\u66f4\u7684\u63a8\u9001\uff0c\u5b89\u5168\u8d77\u89c1\uff0c\u6211\u4eec\u53ea\u544a\u77e5\u67d0\u4e2a Group \u4fe1\u606f\u53d1\u751f\u4e86\u53d8\u66f4\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'// soul-admin\u53d1\u751f\u4e86\u914d\u7f6e\u53d8\u66f4\uff0c\u6328\u4e2a\u5c06\u961f\u5217\u4e2d\u7684\u8bf7\u6c42\u79fb\u9664\uff0c\u5e76\u4e88\u4ee5\u54cd\u5e94\nclass DataChangeTask implements Runnable {\n    DataChangeTask(final ConfigGroupEnum groupKey) {\n        this.groupKey = groupKey;\n    }\n    @Override\n    public void run() {\n        try {\n            for (Iterator<LongPollingClient> iter = clients.iterator(); iter.hasNext(); ) {\n                LongPollingClient client = iter.next();\n                iter.remove();\n                client.sendResponse(Collections.singletonList(groupKey));\n            }\n        } catch (Throwable e) {\n            LOGGER.error("data change error.", e);\n        }\n    }\n}\n')),(0,o.yg)("p",null,"\u5f53 ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-web")," \u7f51\u5173\u5c42\u63a5\u6536\u5230 http \u54cd\u5e94\u4fe1\u606f\u4e4b\u540e\uff0c\u62c9\u53d6\u53d8\u66f4\u4fe1\u606f\uff08\u5982\u679c\u6709\u53d8\u66f4\u7684\u8bdd\uff09\uff0c\u7136\u540e\u518d\u6b21\u8bf7\u6c42 ",(0,o.yg)("inlineCode",{parentName:"p"},"soul-admin")," \u7684\u914d\u7f6e\u670d\u52a1\uff0c\u5982\u6b64\u53cd\u590d\u5faa\u73af\u3002"),(0,o.yg)("h2",{id:"\u4ed3\u5e93\u5730\u5740"},"\u4ed3\u5e93\u5730\u5740"),(0,o.yg)("p",null,"github: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Dromara/soul"},"https://github.com/Dromara/soul")),(0,o.yg)("p",null,"gitee:  ",(0,o.yg)("a",{parentName:"p",href:"https://gitee.com/dromara/soul"},"https://gitee.com/dromara/soul")),(0,o.yg)("p",null,"\u9879\u76ee\u4e3b\u9875\u4e0a\u8fd8\u6709\u89c6\u9891\u6559\u7a0b\uff0c\u6709\u9700\u8981\u7684\u670b\u53cb\u53ef\u4ee5\u53bb\u89c2\u770b\u3002"),(0,o.yg)("h2",{id:"\u6700\u540e"},"\u6700\u540e"),(0,o.yg)("p",null,"\u6b64\u6587\u4ecb\u7ecd\u4e86",(0,o.yg)("inlineCode",{parentName:"p"},"soul"),"\u4f5c\u4e3a\u4e00\u4e2a\u9ad8\u53ef\u7528\u7684\u5fae\u670d\u52a1\u7f51\u5173\uff0c\u4e3a\u4e86\u4f18\u5316\u54cd\u5e94\u901f\u5ea6\uff0c\u5728\u5bf9\u914d\u7f6e\u3001\u89c4\u5219\u3001\u9009\u62e9\u5668\u6570\u636e\u8fdb\u884c\u672c\u5730\u7f13\u5b58\u7684\u4e09\u79cd\u65b9\u5f0f\uff0c\u5b66\u4e86\u6b64\u6587\uff0c\u6211\u76f8\u4fe1\u4f60\u5bf9\u73b0\u5728\u6bd4\u8f83\u6d41\u884c\u7684\u914d\u7f6e\u4e2d\u5fc3\u6709\u4e86\u4e00\u5b9a\u7684\u4e86\u89e3\uff0c\u770b\u4ed6\u4eec\u7684\u4ee3\u7801\u4e5f\u8bb8\u4f1a\u53d8\u5f97\u5bb9\u6613\uff0c\u6211\u76f8\u4fe1\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u5199\u4e00\u4e2a\u5206\u5e03\u5f0f\u914d\u7f6e\u4e2d\u5fc3\u51fa\u6765\u30023.0\u7248\u672c\u5df2\u7ecf\u5728\u89c4\u5212\u4e2d\uff0c\u80af\u5b9a\u4f1a\u7ed9\u5927\u5bb6\u5e26\u6765\u60ca\u559c\u3002"))}u.isMDXComponent=!0}}]);