"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[63418],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=m;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[d]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54673:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const l={title:"Discovery\u6a21\u5757",keywords:["Discovery"],description:"Discovery\u6a21\u5757"},o="1. \u6982\u8ff0",a={unversionedId:"plugin-center/discovery/discovery-mode",id:"version-2.6.0/plugin-center/discovery/discovery-mode",isDocsHomePage:!1,title:"Discovery\u6a21\u5757",description:"Discovery\u6a21\u5757",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/discovery/discovery-mode.md",sourceDirName:"plugin-center/discovery",slug:"/plugin-center/discovery/discovery-mode",permalink:"/zh/docs/2.6.0/plugin-center/discovery/discovery-mode",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.0/plugin-center/discovery/discovery-mode.md",version:"2.6.0",frontMatter:{title:"Discovery\u6a21\u5757",keywords:["Discovery"],description:"Discovery\u6a21\u5757"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Mock \u63d2\u4ef6",permalink:"/zh/docs/2.6.0/plugin-center/mock/mock-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",permalink:"/zh/docs/2.6.0/developer/spi/custom-load-balance"}},s=[{value:"1.1 \u6a21\u5757\u540d\u79f0",id:"11-\u6a21\u5757\u540d\u79f0",children:[]},{value:"1.2 \u8bbe\u8ba1",id:"12-\u8bbe\u8ba1",children:[]},{value:"1.3 \u8bf4\u660e",id:"13-\u8bf4\u660e",children:[{value:"1.3.1 \u76d1\u542c\u6a21\u5f0f",id:"131-\u76d1\u542c\u6a21\u5f0f",children:[]},{value:"1.3.2 \u4f5c\u7528\u8303\u56f4",id:"132-\u4f5c\u7528\u8303\u56f4",children:[]}]},{value:"2.1 \u63d2\u4ef6\u7ea7\u522b\u914d\u7f6e",id:"21-\u63d2\u4ef6\u7ea7\u522b\u914d\u7f6e",children:[]},{value:"2.2 \u9009\u62e9\u5668\u7ea7\u522b\u914d\u7f6e",id:"22-\u9009\u62e9\u5668\u7ea7\u522b\u914d\u7f6e",children:[]},{value:"3.1 \u6ce8\u518c\u4fe1\u606f\u914d\u7f6e",id:"31-\u6ce8\u518c\u4fe1\u606f\u914d\u7f6e",children:[{value:"3.1.1 \u57fa\u672c\u914d\u7f6e",id:"311-\u57fa\u672c\u914d\u7f6e",children:[]},{value:"3.1.2 \u6570\u636e\u8be6\u89e3",id:"312-\u6570\u636e\u8be6\u89e3",children:[]}]},{value:"3.2 \u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u914d\u7f6e",id:"32-\u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u914d\u7f6e",children:[{value:"3.1 LOCAL",id:"31-local",children:[]},{value:"3.2 ZOOKEEPER",id:"32-zookeeper",children:[]}]}],c={toc:s},p="wrapper";function d(e){let{components:n,...l}=e;return(0,i.kt)(p,(0,r.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,i.kt)("h2",{id:"11-\u6a21\u5757\u540d\u79f0"},"1.1 \u6a21\u5757\u540d\u79f0"),(0,i.kt)("p",null,"Discovery"),(0,i.kt)("h2",{id:"12-\u8bbe\u8ba1"},"1.2 \u8bbe\u8ba1"),(0,i.kt)("p",null,"\u8bbe\u8ba1\u56fe\n",(0,i.kt)("img",{alt:"discovery-design.png",src:t(23002).Z})),(0,i.kt)("p",null,"\u6570\u636e\u5e93\u8bbe\u8ba1\n",(0,i.kt)("img",{alt:"db-design.png",src:t(16162).Z})),(0,i.kt)("h2",{id:"13-\u8bf4\u660e"},"1.3 \u8bf4\u660e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Discovery"),"\u7f51\u5173admin\u670d\u52a1\u4e3b\u52a8\u76d1\u542c \u6ce8\u518c\u5230\u7f51\u5173\u7684\u670d\u52a1. \u4f7f\u5f97shenyu\u7f51\u5173\u5177\u5907\u4e3b\u52a8\u53d1\u73b0\u88ab\u4ee3\u7406\u670d\u52a1\u5217\u8868\u7684\u53d8\u5316\n",(0,i.kt)("inlineCode",{parentName:"p"},"Discovery")," \u53ef\u4ee5\u9488\u5bf9 \u9009\u62e9\u5668\u7ea7\u522b, \u4e5f\u53ef\u4ee5\u9488\u5bf9 \u63d2\u4ef6\u7ea7\u522b.\n\u76ee\u524d \u5f15\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"Discovery")," \u63d2\u4ef6\u4e3a TCP \u63d2\u4ef6."),(0,i.kt)("h3",{id:"131-\u76d1\u542c\u6a21\u5f0f"},"1.3.1 \u76d1\u542c\u6a21\u5f0f"),(0,i.kt)("p",null,"LOCAL , ZOOKEEPER , NACOS(\u5f85\u652f\u6301) , ERURKA(\u5f85\u652f\u6301) ...."),(0,i.kt)("p",null,"LOCAL \u6a21\u5f0f : \u4e3b\u8981\u4f9d\u9760\u624b\u52a8\u7ef4\u62a4 upstream \u5217\u8868 \u63a8\u9001\u5230\u7f51\u5173"),(0,i.kt)("p",null,"ZOOKEEPER \u6a21\u5f0f : \u76d1\u542c zk \u4e0b\u6307\u5b9a\u8282\u70b9\u4e0b\u7684 \u4e34\u65f6\u8282\u70b9\u53d8\u5316\u6765\u83b7\u53d6\u6570\u636e"),(0,i.kt)("h3",{id:"132-\u4f5c\u7528\u8303\u56f4"},"1.3.2 \u4f5c\u7528\u8303\u56f4"),(0,i.kt)("p",null,"\u63d2\u4ef6\u7ea7: \u4f5c\u7528\u4e8e\u6574\u4e2a\u63d2\u4ef6,\u8be5\u63d2\u4ef6\u4e0b\u6240\u4ee5\u7684\u9009\u62e9\u90fd\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u5f53\u524d\u76d1\u542c\u6a21\u5f0f\n\u9009\u62e9\u5668\u7ea7\u522b: \u4f5c\u7528\u4e8e\u5f53\u524d\u9009\u62e9\u5668,\u5f53\u524d\u63d2\u4ef6\u4e0b\u6709\u4e0d\u540c\u9009\u62e9\u5668\u4f7f\u7528\u4e0d\u540c\u7684\u76d1\u542c\u6a21\u5f0f"),(0,i.kt)("h1",{id:"2-\u4f7f\u7528"},"2. \u4f7f\u7528"),(0,i.kt)("h2",{id:"21-\u63d2\u4ef6\u7ea7\u522b\u914d\u7f6e"},"2.1 \u63d2\u4ef6\u7ea7\u522b\u914d\u7f6e"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u652f\u6301Discovery\u6a21\u5757\u7684\u63d2\u4ef6\u4e2d \u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Discovery configuration")," \u9009\u62e9\u54cd\u5e94\u7684\u76d1\u542c\u6a21\u5f0f\n\u4e0b\u56fe\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"Zookeeper"),"\u4e3a\u4f8b"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"config_zk_plugin.png",src:t(48841).Z}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728\u9009\u62e9\u5668\u4e2d\u4f7f\u7528 \u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," \u5728\u65b0\u589e\u9009\u62e9\u5668\u9875\u9762\u70b9\u51fb ",(0,i.kt)("inlineCode",{parentName:"p"},"DiscoveryConfig")," \u53d1\u73b0Type \u7c7b\u578b\u5f3a\u5236\u9009\u62e9\u521a\u624d\u914d\u7f6e\u7684\u63d2\u4ef6\u7ea7\u76d1\u542c\u6a21\u5757\n\u6b64\u65f6 \u6536\u5165\u9700\u8981\u76d1\u542c\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ListenerNode")," \u6211\u4eec\u4ee5 : /shenyu/discovery \u4e3a\u4f8b"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"add_listener_node.png",src:t(97665).Z})),(0,i.kt)("p",{parentName:"li"},"\u6ce8\u610f: \u8fd9\u91cc\u7684 Handler \u914d\u7f6e, shenyu \u89c4\u5b9a\u7684upstream \u6ce8\u518c\u6570\u636e\u662f\u4ee5\u4e0b json \u5f62\u5f0f\u53d1\u9001"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "url": "127.0.0.1::6379",  // upstream \u7684 url\n    "protocol": "tcp", // upstream \u7684 \u901a\u4fe1\u534f\u8bae\n    "status": 0, // upstream \u8282\u70b9\u7684\u72b6\u6001 (0, healthy, 1 unhealthy)\n    "weight": 10 // \u8ba1\u7b97\u8d1f\u8f7d\u5747\u8861\u65f6\u4f7f\u7528\n}\n')),(0,i.kt)("p",{parentName:"li"},"\u5982\u679c \u4f60\u7684\u670d\u52a1 \u522b\u540d\u548cshenyu \u5b9a\u4e49\u7684 json \u683c\u5f0f\u4e0d\u540c\u65f6\u5019 \u53ef\u4ee5\u5728 handler \u8d77\u522b\u540d\n\u5982\u4e0a\u56fe \u6211\u9700\u8981\u5427status \u6539\u4e3a healthy. \u5176\u4ed6\u4e3a\u6539 \u4fdd\u5b58 \u539f\u6709 json-key \u7684\u5f62\u5f0f")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u8fdb\u884c\u540e\u7eedselector\u5c5e\u6027\u914d\u7f6e \u8be6\u60c5\u89c1\u5177\u4f53plugin"))),(0,i.kt)("h2",{id:"22-\u9009\u62e9\u5668\u7ea7\u522b\u914d\u7f6e"},"2.2 \u9009\u62e9\u5668\u7ea7\u522b\u914d\u7f6e"),(0,i.kt)("p",null,"\u7c7b\u4f3c\u4e8e\u63d2\u4ef6\u7ea7\u522b\u914d\u7f6e. \u628a \u4e0a\u8ff0\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),",",(0,i.kt)("inlineCode",{parentName:"p"},"2")," \u6b65\u9aa4\u5408\u5e76\u5728\u4e00\u8d77\n",(0,i.kt)("img",{alt:"discovery-seletor-config.png",src:t(50588).Z})),(0,i.kt)("p",null,"\u6ce8\u610f: \u4f7f\u7528\u9009\u62e9\u5668\u7ea7\u522b\u65f6\u5019. \u6bcf\u6b21\u90fd\u5fc5\u987b\u91cd\u65b0\u914d\u7f6e"),(0,i.kt)("p",null,"\u82e5\u9009\u62e9\u4e86 LOCAL \u6a21\u5f0f \u5219\u65e0\u9700\u63a5\u5165\u6ce8\u518c\u4e2d\u5fc3, \u624b\u52a8\u7ef4\u62a4upstream\u5217\u8868"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"discovery-local-mode.png",src:t(84495).Z})),(0,i.kt)("h1",{id:"3-\u914d\u7f6e"},"3. \u914d\u7f6e"),(0,i.kt)("h2",{id:"31-\u6ce8\u518c\u4fe1\u606f\u914d\u7f6e"},"3.1 \u6ce8\u518c\u4fe1\u606f\u914d\u7f6e"),(0,i.kt)("h3",{id:"311-\u57fa\u672c\u914d\u7f6e"},"3.1.1 \u57fa\u672c\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"common-config.png",src:t(11957).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type \u6ce8\u518c\u7c7b\u578b ","[LOCAL|ZOOKEEPER]"),(0,i.kt)("li",{parentName:"ul"},"ListenerNode \u6ce8\u518c\u7684\u76d1\u542c\u8282\u70b9 \u5982",(0,i.kt)("inlineCode",{parentName:"li"},"/shenyu/discovery")),(0,i.kt)("li",{parentName:"ul"},"Handler \u5904\u7406 upstream \u6ce8\u518c\u4fe1\u606f\u7684\u522b\u540d\u95ee\u9898"),(0,i.kt)("li",{parentName:"ul"},"ServerList \u6ce8\u518c\u4e2d\u5fc3\u94fe\u63a5url")),(0,i.kt)("h3",{id:"312-\u6570\u636e\u8be6\u89e3"},"3.1.2 \u6570\u636e\u8be6\u89e3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"upstream \u6ce8\u518c\u6570\u636e\u4e3a:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocol": "tcp",\n  "url": "127.0.0.1:6379",\n  "status": 0,\n  "weight": 1,\n  "props": "{}"\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u82e5\u6ce8\u518c\u7684\u6570\u636e\u4e0e\u9ed8\u8ba4\u7684json\u683c\u5f0f\u4e0d\u540c\u65f6\uff0c\u53ef\u4ee5\u5728\u201c\u8f6c\u6362\u5904\u7406\u201d\u4e2d\u8bbe\u7f6e\u522b\u540d\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "${yourProtocol}": "tcp",\n  "${yourUrl}": "127.0.0.1:6379",\n  "${yourStatus}": 1,\n  "${yourWeight}": 1,\n  "${yourProps}": "{}"\n}\n')),(0,i.kt)("h2",{id:"32-\u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u914d\u7f6e"},"3.2 \u4e0d\u540c\u6a21\u5f0f\u4e0b\u7684\u914d\u7f6e"),(0,i.kt)("h3",{id:"31-local"},"3.1 LOCAL"),(0,i.kt)("p",null,"LOCAL\u6a21\u5f0f\u4e0b \u53ea\u652f\u6301 \u9009\u62e9\u5668\u7ea7\u522b\n\u65e0\u9700\u6307\u5b9a\u94fe\u63a5 \u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e \u53ea\u9700\u624b\u52a8\u7ef4\u62a4 upstream \u5217\u8868\n",(0,i.kt)("img",{alt:"discovery-local-mode.png",src:t(84495).Z})),(0,i.kt)("h3",{id:"32-zookeeper"},"3.2 ZOOKEEPER"),(0,i.kt)("p",null,"ZOOKEEPER\u6a21\u5f0f\u4e0b \u652f\u6301 \u63d2\u4ef6\u7ea7\u522b \u548c \u9009\u62e9\u5668\u7ea7\u522b"),(0,i.kt)("p",null,"\u8be6\u60c5\u89c1 ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-discovery-zookeeper#ZookeeperDiscoveryService#init")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "baseSleepTimeMilliseconds": "1000",\n  "maxRetries": "3",\n  "maxSleepTimeMilliseconds": "1000",\n  "connectionTimeoutMilliseconds": "1000",\n  "sessionTimeoutMilliseconds": "1000",\n  "namespace": "",\n  "digest": null\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u6237\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u5b57\u5178\u7ba1\u7406 \u4e2d\uff0c\u641c\u7d22\u5b57\u5178\u540d\u79f0\u4e3a\u201czookeeper\u201d\uff0c\u5bf9\u9ed8\u8ba4\u5c5e\u6027\u5bf9\u5e94\u7684\u5b57\u5178\u503c\u8fdb\u884c\u4fee\u6539\u7f16\u8f91\n\uff08",(0,i.kt)("strong",{parentName:"li"},"\u6ce8\u610f"),"\uff1a\u4e0d\u53ef\u4fee\u6539\u5b57\u5178\u7c7b\u578b\u548c\u5b57\u5178\u540d\u79f0\uff09\uff1a")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"zk_dict.png",src:t(25664).Z})))}d.isMDXComponent=!0},97665:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/add_listener_node-fcab34011135088da7d7bfe08219bae5.png"},11957:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/common-config-4807e44ef780a311651c4c784c46040d.png"},48841:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/config_zk_plugin-5271390332992da24b2a6217511a5858.png"},16162:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/db-design-ace76c69c809afe5bf47464fc1b0209c.png"},23002:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/discovery-design-3081f14fec1ef9322d39bd1b998f42a3.png"},84495:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/discovery-local-mode-608163775c2d412644ce9af4fff9f23d.png"},50588:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/discovery-seletor-config-906cdc621f3f0100b3d36449a28cbb43.png"},25664:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/zk_dict_zh-7711eeddd9904ca431ad023400379950.png"}}]);