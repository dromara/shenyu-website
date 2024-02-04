"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[11812],{95788:(e,t,n)=>{n.d(t,{Iu:()=>c,yg:()=>d});var r=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),y=i,d=s["".concat(p,".").concat(y)]||s[y]||g[y]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},32928:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(45072),i=(n(11504),n(95788));const a={title:"Mqtt Plugin",keywords:["Mqtt"],description:"Mqtt access shenyu gateway"},o=void 0,l={unversionedId:"plugin-center/proxy/mqtt-plugin",id:"version-2.4.3/plugin-center/proxy/mqtt-plugin",isDocsHomePage:!1,title:"Mqtt Plugin",description:"Mqtt access shenyu gateway",source:"@site/versioned_docs/version-2.4.3/plugin-center/proxy/mqtt-plugin.md",sourceDirName:"plugin-center/proxy",slug:"/plugin-center/proxy/mqtt-plugin",permalink:"/docs/2.4.3/plugin-center/proxy/mqtt-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/proxy/mqtt-plugin.md",version:"2.4.3",frontMatter:{title:"Mqtt Plugin",keywords:["Mqtt"],description:"Mqtt access shenyu gateway"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Motan Plugin",permalink:"/docs/2.4.3/plugin-center/proxy/motan-plugin"},next:{title:"Sofa Plugin",permalink:"/docs/2.4.3/plugin-center/proxy/sofa-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Introducing Plugin Support of Mqtt Gateway",id:"introducing-plugin-support-of-mqtt-gateway",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Notice",id:"notice",children:[]}],u={toc:p},c="wrapper";function s(e){let{components:t,...n}=e;return(0,i.yg)(c,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"description"},"Description"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"After the plugin is used, it will give the ability of mqtt.")),(0,i.yg)("h2",{id:"introducing-plugin-support-of-mqtt-gateway"},"Introducing Plugin Support of Mqtt Gateway"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Introducing those dependencies in the pom.xml file of the gateway.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu mqtt plugin start--\x3e\n<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-mqtt</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,i.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"port: MQTT BS port designation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"bossGroupThreadCount: default 1.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"maxPayloadSize: Maximum packet size.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"workerGroupThreadCount: default 12.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"username: default shenyu.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"password: default shenyu.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"isEncryptPassword: The default is false , whether to encrypt the password.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"encryptMode: encryption mode, currently only MD5 is implemented, the encryption mode can be customized, ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.protocol.mqtt.utils.EncryptUtil")," view the implementation of this encryption class.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"leakDetectorLevel: default DISABLED, resource target detection or detection level."))),(0,i.yg)("h2",{id:"notice"},"Notice"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Mqtt does not have selector and ruler configurations.")))}s.isMDXComponent=!0}}]);