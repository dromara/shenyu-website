"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[44474],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55819:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u544a\u8b66\u901a\u77e5",keywords:["alarm"],description:"Alarm message dispatch and notice"},i=void 0,o={unversionedId:"developer/notice-alert",id:"version-2.6.1/developer/notice-alert",isDocsHomePage:!1,title:"\u544a\u8b66\u901a\u77e5",description:"Alarm message dispatch and notice",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/notice-alert.md",sourceDirName:"developer",slug:"/developer/notice-alert",permalink:"/zh/docs/developer/notice-alert",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.6.1/developer/notice-alert.md",version:"2.6.1",frontMatter:{title:"\u544a\u8b66\u901a\u77e5",keywords:["alarm"],description:"Alarm message dispatch and notice"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"\u672c\u5730\u6a21\u5f0f",permalink:"/zh/docs/developer/local-model"},next:{title:"ShenYu \u6027\u80fd\u4f18\u5316",permalink:"/zh/docs/developer/shenyu-optimize"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"ShenYu\u7f51\u5173\u5f00\u542f\u544a\u8b66\u901a\u77e5",id:"shenyu\u7f51\u5173\u5f00\u542f\u544a\u8b66\u901a\u77e5",children:[]},{value:"\u53d1\u9001\u544a\u8b66\u6d88\u606f",id:"\u53d1\u9001\u544a\u8b66\u6d88\u606f",children:[]},{value:"\u544a\u8b66\u6d88\u606f\u8f6c\u53d1",id:"\u544a\u8b66\u6d88\u606f\u8f6c\u53d1",children:[]},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]}],p={toc:c},s="wrapper";function u(e){let{components:n,...l}=e;return(0,r.kt)(s,(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u672c\u6587\u4e3b\u8981\u4ecb\u7ecd Apache ShenYu \u7684\u7f51\u5173\u63d2\u4ef6\u53d1\u9001\u544a\u8b66\u901a\u77e5\u6d88\u606f\u7684\u652f\u6301\u3002")),(0,r.kt)("h2",{id:"shenyu\u7f51\u5173\u5f00\u542f\u544a\u8b66\u901a\u77e5"},"ShenYu\u7f51\u5173\u5f00\u542f\u544a\u8b66\u901a\u77e5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e ShenYu\u7f51\u5173\u7684\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml"),"\uff0c\u5f00\u542f\u544a\u8b66\uff0c\u914d\u7f6e ShenYu Admin\u670d\u52a1\u5730\u5740\u3002 ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  alert:\n    enabled: true\n    # the shenyu admin servers, if admin cluster, config like 127.0.0.1:9095,192.3.4.2:9095\n    admins: localhost:9095\n")),(0,r.kt)("h2",{id:"\u53d1\u9001\u544a\u8b66\u6d88\u606f"},"\u53d1\u9001\u544a\u8b66\u6d88\u606f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u63d2\u4ef6\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"AlarmSender.alarm()")," \u53d1\u9001\u81ea\u5b9a\u4e49\u544a\u8b66\u6d88\u606f\u3002")),(0,r.kt)("p",null,"\u53c2\u8003\u5982\u4e0b:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class ParamMappingPlugin extends AbstractShenyuPlugin {\n\n    @Override\n    public Mono<Void> doExecute(final ServerWebExchange exchange, final ShenyuPluginChain chain, final SelectorData selector, final RuleData rule) {\n        ParamMappingRuleHandle paramMappingRuleHandle = ParamMappingPluginDataHandler.CACHED_HANDLE.get().obtainHandle(CacheKeyUtils.INST.getKey(rule));\n     \n        if(some condition) {\n             Map<String, String> labels = new HashMap<>(8);\n             labels.put("plugin", "http-redirect");\n             labels.put("component", "http");\n             AlarmSender.alarmHighEmergency("alarm-title", "alarm-content", labels);\n             AlarmSender.alarmMediumCritical("alarm-title", "alarm-content", labels);\n             AlarmSender.alarmLowWarning("alarm-title", "alarm-content", labels);\n             AlarmSender.alarm((byte) 0, "alarm-title", "alarm-content");\n        }\n      \n        HttpHeaders headers = exchange.getRequest().getHeaders();\n        MediaType contentType = headers.getContentType();\n        return match(contentType).apply(exchange, chain, paramMappingRuleHandle);\n    }\n}\n')),(0,r.kt)("h2",{id:"\u544a\u8b66\u6d88\u606f\u8f6c\u53d1"},"\u544a\u8b66\u6d88\u606f\u8f6c\u53d1"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u4e0a\u4e00\u6b65\u4e2d\uff0c\u6211\u4eec\u5728\u63d2\u4ef6\u4e2d\u53d1\u9001\u7684\u544a\u8b66\u6d88\u606f\u3002 "),(0,r.kt)("li",{parentName:"ul"},"\u73b0\u5728\u6211\u4eec\u9700\u8981\u914d\u7f6e\u8fd9\u4e9b\u6d88\u606f\u53d1\u7ed9\u8c01\uff0c\u901a\u8fc7\u4ec0\u4e48\u6e20\u9053\u53d1(\u90ae\u4ef6\uff0c\u9489\u9489\u3002\u3002\u3002)"),(0,r.kt)("li",{parentName:"ul"},"\u5728 ShenYu Admin \u9875\u9762\u64cd\u4f5c\u914d\u7f6e\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alarm-config",src:t(11560).Z})),(0,r.kt)("p",null,"Have fun!"),(0,r.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u82e5\u60a8\u4f7f\u7528\u4e86\u90ae\u4ef6\u901a\u77e5\u6e20\u9053\uff0c\u60a8\u9700\u8981\u63d0\u524d\u5728 ShenYu Admin \u7684\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u81ea\u5df1\u7684\u90ae\u4ef6\u670d\u52a1\u5668\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yml")," ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  mail:\n    # Attention: this is mail server address.\n    host: smtp.qq.com\n    username: shenyu@apache.com\n    # Attention: this is not email account password, this requires an email authorization code\n    password: your-password\n    port: 465\n    default-encoding: UTF-8\n    properties:\n      mail:\n        smtp:\n          socketFactoryClass: javax.net.ssl.SSLSocketFactory\n          ssl:\n            enable: true\n")))}u.isMDXComponent=!0},11560:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/alarm-config-b93b5e5f2e8b71d5c79a49a07398e674.png"}}]);