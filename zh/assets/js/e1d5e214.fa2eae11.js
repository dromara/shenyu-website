"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[95248],{95788:(e,n,l)=>{l.d(n,{Iu:()=>s,yg:()=>d});var t=l(11504);function i(e,n,l){return n in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function r(e,n){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),l.push.apply(l,t)}return l}function a(e){for(var n=1;n<arguments.length;n++){var l=null!=arguments[n]?arguments[n]:{};n%2?r(Object(l),!0).forEach((function(n){i(e,n,l[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(l,n))}))}return e}function c(e,n){if(null==e)return{};var l,t,i=function(e,n){if(null==e)return{};var l,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||(i[l]=e[l]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)l=r[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var o=t.createContext({}),p=function(e){var n=t.useContext(o),l=n;return e&&(l="function"==typeof e?e(n):a(a({},n),e)),l},s=function(e){var n=p(e.components);return t.createElement(o.Provider,{value:n},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var l=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),y=p(l),g=i,d=y["".concat(o,".").concat(g)]||y[g]||u[g]||r;return l?t.createElement(d,a(a({ref:n},s),{},{components:l})):t.createElement(d,a({ref:n},s))}));function d(e,n){var l=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=l.length,a=new Array(r);a[0]=g;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[y]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<r;p++)a[p]=l[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,l)}g.displayName="MDXCreateElement"},78929:(e,n,l)=>{l.r(n),l.d(n,{contentTitle:()=>a,default:()=>y,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var t=l(45072),i=(l(11504),l(95788));const r={title:"Tcp\u63d2\u4ef6",keywords:["Tcp"],description:"Tcp\u63d2\u4ef6"},a="1. \u6982\u8ff0",c={unversionedId:"plugin-center/proxy/tcp-plugin",id:"version-2.6.1/plugin-center/proxy/tcp-plugin",isDocsHomePage:!1,title:"Tcp\u63d2\u4ef6",description:"Tcp\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/plugin-center/proxy/tcp-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/tcp-plugin",permalink:"/zh/docs/plugin-center/proxy/tcp-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/plugin-center/proxy/tcp-plugin.md",version:"2.6.1",frontMatter:{title:"Tcp\u63d2\u4ef6",keywords:["Tcp"],description:"Tcp\u63d2\u4ef6"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Tars\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/tars-plugin"},next:{title:"Websocket\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/proxy/websocket-plugin"}},o=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c",children:[]},{value:"2.1 \u542f\u7528\u63d2\u4ef6",id:"21-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.2 \u914d\u7f6e\u63d2\u4ef6",id:"22-\u914d\u7f6e\u63d2\u4ef6",children:[]},{value:"2.3 \u914d\u7f6e\u670d\u52a1\u53d1\u73b0",id:"23-\u914d\u7f6e\u670d\u52a1\u53d1\u73b0",children:[{value:"2.3.1 Zookeeper \u6a21\u5f0f",id:"231-zookeeper-\u6a21\u5f0f",children:[]},{value:"2.3.2 Local \u6a21\u5f0f",id:"232-local-\u6a21\u5f0f",children:[]}]},{value:"2.4 \u914d\u7f6e\u9009\u62e9\u5668",id:"24-\u914d\u7f6e\u9009\u62e9\u5668",children:[]},{value:"2.5 \u65e5\u5fd7",id:"25-\u65e5\u5fd7",children:[]},{value:"2.6 \u793a\u4f8b",id:"26-\u793a\u4f8b",children:[]}],p={toc:o},s="wrapper";function y(e){let{components:n,...r}=e;return(0,i.yg)(s,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.yg)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"TCP\u63d2\u4ef6")),(0,i.yg)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5904\u7406 TCP \u534f\u8bae\u8bf7\u6c42\uff0c\u5c06\u5176\u8f6c\u53d1\u5230\u540e\u7aef\u5176\u4ed6 TCP \u534f\u8bae\u7684\u670d\u52a1"),(0,i.yg)("li",{parentName:"ul"},"\u670d\u52a1\u8d1f\u8f7d\u5747\u8861")),(0,i.yg)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u652f\u6301\u6839\u636e\u914d\u7f6e\u7684 upstream list \u505a TCP \u4ee3\u7406\uff1b"),(0,i.yg)("li",{parentName:"ul"},"upstream list \u53ef\u5728 admin \u6a21\u5757\u81ea\u884c\u914d\u7f6e\uff0c\u70ed\u540c\u6b65\u5230 gateway\uff1b"),(0,i.yg)("li",{parentName:"ul"},"\u652f\u6301\u8bbe\u7f6e\u8bf7\u6c42\u7684\u8d1f\u8f7d\u5747\u8861\u7b56\u7565\uff0c\u76ee\u524d\u652f\u6301 shenyu \u8d1f\u8f7d\u5747\u8861\u6a21\u5757\u7684\u7b56\u7565\uff1b"),(0,i.yg)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u5f00\u542f\u7aef\u53e3\u8fdb\u884c\u76d1\u542c\uff0c\u53ef\u914d\u7f6e reactor-netty \u53c2\u6570\uff1b"),(0,i.yg)("li",{parentName:"ul"},"\u652f\u6301\u5f00\u542f\u591a\u4e2a\u4ee3\u7406\u9009\u62e9\u5668")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),": \u8d1f\u8f7d\u5747\u8861\u4f5c\u7528\u4e0egateway\u5efa\u7acb\u8fde\u63a5\u65f6\uff0c\u5f53\u8fde\u63a5\u5efa\u7acb\uff0c\u540e\u7eed\u7684\u6d41\u91cf\u7ee7\u7eed\u4fdd\u6301\u8d1f\u8f7d\u5747\u8861\u6a21\u5757\u5df2\u7ecf\u9009\u5b9a\u7684upstream")),(0,i.yg)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757\uff1a",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-plugin-tcp")," ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-protocol-tcp"))),(0,i.yg)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2ashenyu\u7248\u672c"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"2.6.0")),(0,i.yg)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,i.yg)("h2",{id:"21-\u542f\u7528\u63d2\u4ef6"},"2.1 \u542f\u7528\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u521d\u6b21\u4f7f\u7528\u65f6\uff0c\u542f\u52a8 admin server\uff0c\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 \u4e2d\uff0c \u641c\u7d22 tcp \u63d2\u4ef6 \u5e76\u4e14\u70b9\u51fb\u201c\u8d44\u6e90\u201d\u6fc0\u6d3b TCP \u63d2\u4ef6\u6a21\u5757")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"init-tcp-zh",src:l(27132).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,i.yg)("inlineCode",{parentName:"li"},"tcp"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"start-tcp-zh",src:l(93700).c})),(0,i.yg)("h2",{id:"22-\u914d\u7f6e\u63d2\u4ef6"},"2.2 \u914d\u7f6e\u63d2\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"TCP \u63d2\u4ef6\u662f\u4ee5\u4ee3\u7406\u9009\u62e9\u5668\uff08proxy-selector\uff09\u4e3a\u5355\u4f4d\u521b\u5efa\u7684\uff0c\u56e0\u6b64\u914d\u7f6e\u63d2\u4ef6\u5373\u662f\u914d\u7f6e\u4ee3\u7406\u9009\u62e9\u5668\u7684\u5c5e\u6027\u3002 \u521b\u5efa\u4ee3\u7406\u9009\u62e9\u5668\u65f6\uff0c\u70b9\u51fb\u9875\u9762\u7684\u201c\u6dfb\u52a0\u9009\u62e9\u5668\u6309\u94ae\u201d\uff0c\u5728\u5f39\u51fa\u7684\u9009\u62e9\u5668\u8868\u5355\u4e2d\uff0c\u5373\u53ef\u5bf9\u9009\u62e9\u5668\u5c5e\u6027\u8fdb\u884c\u914d\u7f6e\uff1a")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"selector_props",src:l(59832).c})),(0,i.yg)("p",null," \u9ed8\u8ba4\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "loadBalance": "random",\n  "bossGroupThreadCount": "1",\n  "workerGroupThreadCount": "12",\n  "clientMaxConnections": "20",\n  "clientMaxIdleTimeMs": "30000",\n  "clientMaxLifeTimeMs": "60000",\n  "clientPendingAcquireTimeout": "5",\n  "clientPendingAcquireMaxCount": "5"\n}\n')),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"loadBalanceAlgorithm")," : shenyu\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\uff0c\u9ed8\u8ba4\u4e3arandom"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"bossGroupThreadCount")," , ",(0,i.yg)("inlineCode",{parentName:"li"},"workerGroupThreadCount"),"\uff1a\nReactorNetty TcpServer \u914d\u7f6e\uff0c\u8be6\u60c5\u89c1  ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-protocol-tcp#TcpBootstrapServer#start")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"clientMaxConnections")," , ",(0,i.yg)("inlineCode",{parentName:"li"},"clientMaxIdleTimeMs")," , ",(0,i.yg)("inlineCode",{parentName:"li"},"clientMaxLifeTimeMs")," , ",(0,i.yg)("inlineCode",{parentName:"li"},"clientPendingAcquireTimeout")," ,\n",(0,i.yg)("inlineCode",{parentName:"li"},"clientPendingAcquireMaxCount"),": ReactorNetty ",(0,i.yg)("inlineCode",{parentName:"li"},"ConnectionProvider")," \u914d\u7f6e\uff0c\u8be6\u60c5\u89c1 ",(0,i.yg)("inlineCode",{parentName:"li"},"shenyu-protocol-tcp#ConnectionContext"))),(0,i.yg)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728",(0,i.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u5904\u7406\u7ba1\u7406 \u4e2d\uff0c\u641c\u7d22 tcp \u63d2\u4ef6\uff0c\u5bf9\u9ed8\u8ba4\u914d\u7f6e\u8fdb\u884c\u4fee\u6539\u7f16\u8f91\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"plugin_handle_zh",src:l(12644).c})),(0,i.yg)("h2",{id:"23-\u914d\u7f6e\u670d\u52a1\u53d1\u73b0"},"2.3 \u914d\u7f6e\u670d\u52a1\u53d1\u73b0"),(0,i.yg)("p",null,"TCP \u63d2\u4ef6\u652f\u6301\u63d2\u4ef6\u7ea7\u522b\u3001\u9009\u62e9\u5668\u7ea7\u522b\u4e24\u79cd\u7ea7\u522b\u7684\u670d\u52a1\u53d1\u73b0\u914d\u7f6e\uff1a"),(0,i.yg)("p",null,"\u670d\u52a1\u53d1\u73b0 \u8be6\u60c5 \u89c1  ",(0,i.yg)("a",{parentName:"p",href:"../discovery/discovery-mode.md"},"discovery-mode")),(0,i.yg)("p",null,"\u2460 \u7528\u6237\u70b9\u51fb\u9875\u9762\u4e0a\u7684\u201c\u670d\u52a1\u53d1\u73b0\u914d\u7f6e\u201d\u6309\u94ae\uff0c\u4fbf\u53ef\u4ee5\u5728\u5f39\u51fa\u7684\u8868\u5355\u4e2d\u914d\u7f6e\u63d2\u4ef6\u7ea7\u522b\u7684\u670d\u52a1\u53d1\u73b0\u3002\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u518d\u6b21\u6253\u5f00\u8868\u5355\uff0c\u53ef\u4ee5\u4fee\u6539\u6216\u5220\u9664\u4e4b\u524d\u7684\u914d\u7f6e\u3002\n\u63d2\u4ef6\u7ea7\u522bdiscovery\u914d\u7f6e\u540e\uff0c\u9009\u62e9\u5668\u7684discovery\u8bbe\u7f6e\u9ed8\u8ba4\u4e0e\u63d2\u4ef6\u7ea7\u522b\u4fdd\u6301\u4e00\u81f4\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"discovery_config",src:l(22240).c})),(0,i.yg)("p",null,"\u2461 \u5982\u679c\u7528\u6237\u6ca1\u6709\u914d\u7f6e\u63d2\u4ef6\u7ea7\u522b\u7684\u670d\u52a1\u53d1\u73b0\uff0c\u5728\u6bcf\u6b21\u521b\u5efa\u4ee3\u7406\u9009\u62e9\u5668\uff08proxy-selector)\u65f6\uff0c\u90fd\u53ef\u4ee5\u5bf9\u8be5\u9009\u62e9\u5668\u7684discovery\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"selector_discovery",src:l(44636).c})),(0,i.yg)("p",null,"\u76ee\u524d\uff0cTCP \u63d2\u4ef6\u652f\u6301 Zookeeper \u6a21\u5f0f\u548c Local \u6a21\u5f0f\u7684\u670d\u52a1\u53d1\u73b0\u3002"),(0,i.yg)("h3",{id:"231-zookeeper-\u6a21\u5f0f"},"2.3.1 Zookeeper \u6a21\u5f0f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"\u5f53\u670d\u52a1\u53d1\u73b0\u7684\u7c7b\u578b\u9009\u62e9zookeeper\u65f6\uff0c\u9700\u8981\u586b\u5199 Discovery-Zookeeper \u914d\u7f6e \u57f9\u8bad\u8be6\u60c5\u89c1 ",(0,i.yg)("a",{parentName:"p",href:"../discovery/discovery-mode.md"},"discovery-mode"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"zookeeper\u6a21\u5f0f\u4e0b\uff0cdiscovery\u6a21\u5757\u4f1a\u81ea\u52a8\u76d1\u542c\u7528\u6237\u7684 zookeeper \u6ce8\u518c\u4e2d\u5fc3\uff0c\u81ea\u52a8\u7ef4\u62a4 discovery_upstream "))),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"zookeeper.png",src:l(23936).c})),(0,i.yg)("h3",{id:"232-local-\u6a21\u5f0f"},"2.3.2 Local \u6a21\u5f0f"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5f53\u670d\u52a1\u53d1\u73b0\u7684\u7c7b\u578b\u9009\u62e9local\u65f6\uff0c\u9700\u8981\u624b\u52a8\u586b\u5199\u670d\u52a1\u4e0b\u6e38\u5217\u8868\u3002\u5982\u56fe\u6240\u793a\uff0c\u670d\u52a1\u4e0b\u6e38\u5217\u8868\u4e3a\u53ef\u7f16\u8f91\u8868\u683c\uff0c\n\u53cc\u51fb\u6bcf\u4e00\u4e2a\u5355\u5143\u683c\u53ef\u4ee5\u8fdb\u884c\u8868\u683c\u5185\u5bb9\u7684\u4fee\u6539:")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"local_selector_zh.png",src:l(94580).c})),(0,i.yg)("h2",{id:"24-\u914d\u7f6e\u9009\u62e9\u5668"},"2.4 \u914d\u7f6e\u9009\u62e9\u5668"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u9664\u4e86\u4e0a\u6587\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u914d\u7f6e\u5916\uff0c\u521b\u5efa\u9009\u62e9\u5668\u65f6\uff0c\u8fd8\u9700\u8981\u586b\u5199\u9009\u62e9\u5668\u7684\u201c\u57fa\u672c\u914d\u7f6e\u201d\u90e8\u5206\uff0c\u5305\u62ec\u540d\u79f0\u4e0e\u4ee3\u7406\u7aef\u53e3\u7b49\u3002\u4e3a\u4e86\u63d0\u5347\u586b\u5199\u7684\u4fbf\u6377\u6027\uff0c\n\u53ef\u4ee5\u70b9\u51fb\u201c\u590d\u5236\u9009\u62e9\u5668\u201d\uff0c\u62f7\u8d1d\u5df2\u7ecf\u521b\u5efa\u7684\u9009\u62e9\u5668\u7684\u90e8\u5206\u4fe1\u606f\u3002")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},(0,i.yg)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u9009\u62e9\u5668\u7684\u540d\u79f0\u552f\u4e00\u6807\u8bc6\u9009\u62e9\u5668\uff0c\u4e0d\u80fd\u91cd\u590d")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"selector_basic.png",src:l(44503).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u521b\u5efa\u5b8c\u9009\u62e9\u5668\u540e\uff0c\u9009\u62e9\u5668\u4ee5\u5361\u7247\u7684\u5f62\u5f0f\u5c55\u73b0\uff0c\u9f20\u6807\u60ac\u505c\u4e8e\u5361\u7247\u4e0a\uff0c\u5c06\u4f1a\u5c55\u793a\u9009\u62e9\u5668\u7684\u521b\u5efa\u65f6\u95f4\u3001\u66f4\u65b0\u65f6\u95f4\u4e0e\u5c5e\u6027\u3002\n\u5361\u7247\u4e0b\u65b9\u6709\u4e09\u4e2a\u56fe\u6807\u6309\u94ae\uff0c\u4ece\u5de6\u81f3\u53f3\u4f9d\u6b21\u4e3a\u540c\u6b65\u3001\u7f16\u8f91\u4e0e\u5220\u9664\u9009\u62e9\u5668\uff1a")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"card_list_zh.png",src:l(404).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5982\u679c\u5f53\u524d admin \u7684 UpstreamList \u4e0e gateway \u51fa\u73b0\u5dee\u5f02\u65f6\uff0c\u53ef\u4ee5\u70b9\u51fb\u201c\u540c\u6b65\u201d\u56fe\u6807\uff0c\u5f3a\u5236\u540c\u6b65\u5230gateway\u3002")),(0,i.yg)("h2",{id:"25-\u65e5\u5fd7"},"2.5 \u65e5\u5fd7"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"shenyu-gateway \u7aef\u53e3\u542f\u52a8log")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"gateway_start_port_log.png",src:l(63732).c})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"shenyu-gateway \u4ee3\u7406\u5217\u8868\u540c\u6b65log")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"gateway_upstream_list.png",src:l(91108).c})),(0,i.yg)("h2",{id:"26-\u793a\u4f8b"},"2.6 \u793a\u4f8b"),(0,i.yg)("p",null,"\u4ee5\u4ee3\u7406 redis \u4e3a\u4f8b\uff0c\u4f7f\u7528 ",(0,i.yg)("inlineCode",{parentName:"p"},"redis-cli -p {forwardPort}")," \u8bbf\u95ee"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"connection.png",src:l(81136).c})))}y.isMDXComponent=!0},404:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/card_list_zh-5a32a8ec1b2a8eed4c649bb3e4f1c7f3.png"},22240:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/discovery_config-8f34c97c7a96d519d870bacf1873be66.png"},63732:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/gateway_start_port_log-66e5b55d4865a6cf6e2219d9678e724e.png"},91108:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/gateway_upstream_list-45dd034fab2ed19e67687c9d135dcba9.png"},27132:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/init_tcp_zh-a1dd1b15024cb61f1c9c4ee884d1df10.png"},94580:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/local_selector_zh-bbf2972fd8b6d599ac406fcf606ded60.png"},12644:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/plugin_handle_zh-00033e76fa4a1bb7fdc25830e3c9eb43.png"},81136:(e,n,l)=>{l.d(n,{c:()=>t});const t="data:image/png;base64,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"},44503:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/selector_basic-241efc7df26c57ac77b22ff9b836ff5d.png"},44636:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/selector_discovery-e91aefafb97077cedd8ab2ab2e7f2dfc.png"},59832:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/selector_props-9eeca237c9db8a4c941d90c408cea38a.png"},93700:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/start_tcp_zh-fd52647c88a6f5d758122b8b25d30546.png"},23936:(e,n,l)=>{l.d(n,{c:()=>t});const t=l.p+"assets/images/zookeeper-02405e396bbe1de2d53c3ac3943fdbed.png"}}]);