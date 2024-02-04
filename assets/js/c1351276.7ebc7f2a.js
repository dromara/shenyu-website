"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10960],{95788:(e,n,a)=>{a.d(n,{Iu:()=>s,yg:()=>y});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),p=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},s=function(e){var n=p(e.components);return t.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(y,i(i({ref:n},s),{},{components:a})):t.createElement(y,i({ref:n},s))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},25920:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=a(45072),r=(a(11504),a(95788));const o={title:"Custom Load Balancer",keywords:["LoadBalance"],description:"Custom Load Balance"},i=void 0,l={unversionedId:"developer/spi/custom-load-balance",id:"version-2.4.3/developer/spi/custom-load-balance",isDocsHomePage:!1,title:"Custom Load Balancer",description:"Custom Load Balance",source:"@site/versioned_docs/version-2.4.3/developer/spi/custom-load-balance.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-load-balance",permalink:"/docs/2.4.3/developer/spi/custom-load-balance",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/developer/spi/custom-load-balance.md",version:"2.4.3",frontMatter:{title:"Custom Load Balancer",keywords:["LoadBalance"],description:"Custom Load Balance"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Cache Plugin",permalink:"/docs/2.4.3/plugin-center/cache/cache-plugin"},next:{title:"Custom Match Mode",permalink:"/docs/2.4.3/developer/spi/custom-match-mode"}},c=[],p={toc:c},s="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(s,(0,t.c)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"This paper describes how to customize the extension of  ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Create a new project and introduce the following dependencies:"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a new class  ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomLoadBalancer"),", extends ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.AbstractLoadBalancer"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"public class CustomLoadBalancer extends AbstractLoadBalancer {\n\n    @Override\n    public Upstream doSelect(final List<Upstream> upstreamList, final String ip) {\n        // custom load balancer\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In the project's META-INF/services directory, create key-value as following in ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.loadbalancer.spi.LoadBalancer")," file.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name}=${custom class path}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,r.yg)("inlineCode",{parentName:"p"},"spi")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomLoadBalancer\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Package the project and copy it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary,  find the dictionary code as ",(0,r.yg)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),", add a new piece of data, pay attention to the dictionary name: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,r.yg)("img",{src:"/img/shenyu/custom/custom_load_balancer_en.png",width:"80%",height:"70%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"DictionaryType: ",(0,r.yg)("inlineCode",{parentName:"p"},"loadBalance"),";"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,r.yg)("inlineCode",{parentName:"p"},"LOAD_BALANCE"),";"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryName: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,r.yg)("p",{parentName:"blockquote"},"Sort: to sort;")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom MatchType:")),(0,r.yg)("img",{src:"/img/shenyu/custom/use_custom_load_balancer_en.png",width:"90%",height:"80%"}))}u.isMDXComponent=!0}}]);