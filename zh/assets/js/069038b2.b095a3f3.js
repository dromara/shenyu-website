"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32352],{95788:(e,t,n)=>{n.d(t,{Iu:()=>o,yg:()=>c});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),y=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=y(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=y(n),u=r,c=s["".concat(g,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(c,p(p({ref:t},o),{},{components:n})):a.createElement(c,p({ref:t},o))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=u;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[s]="string"==typeof e?e:r,p[1]=i;for(var y=2;y<l;y++)p[y]=n[y];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18992:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var a=n(45072),r=(n(11504),n(95788));const l={title:"\u94fe\u8def\u8ffd\u8e2a\u63a5\u5165",keywords:["Tracing"],description:"Tracing access"},p=void 0,i={unversionedId:"user-guide/observability/tracing",id:"version-2.4.2/user-guide/observability/tracing",isDocsHomePage:!1,title:"\u94fe\u8def\u8ffd\u8e2a\u63a5\u5165",description:"Tracing access",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/user-guide/observability/tracing.md",sourceDirName:"user-guide/observability",slug:"/user-guide/observability/tracing",permalink:"/zh/docs/2.4.2/user-guide/observability/tracing",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/user-guide/observability/tracing.md",version:"2.4.2",frontMatter:{title:"\u94fe\u8def\u8ffd\u8e2a\u63a5\u5165",keywords:["Tracing"],description:"Tracing access"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"\u53ef\u89c2\u6d4b\u6027",permalink:"/zh/docs/2.4.2/user-guide/observability/observability"},next:{title:"Dubbo\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/2.4.2/user-guide/proxy/dubbo-proxy"}},g=[{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",children:[]},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",children:[]},{value:"\u4f7f\u7528 jaeger \u63d2\u4ef6",id:"\u4f7f\u7528-jaeger-\u63d2\u4ef6",children:[]},{value:"\u4f7f\u7528 zipkin \u63d2\u4ef6",id:"\u4f7f\u7528-zipkin-\u63d2\u4ef6",children:[]},{value:"\u4f7f\u7528 opentelemetry \u63d2\u4ef6",id:"\u4f7f\u7528-opentelemetry-\u63d2\u4ef6",children:[]}],y={toc:g},o="wrapper";function s(e){let{components:t,...l}=e;return(0,r.yg)(o,(0,a.c)({},y,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u6b64\u7bc7\u6587\u7ae0\u662f\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu Agent"),"\u4e2d\u7684tracing\u529f\u80fd\u3002"),(0,r.yg)("h2",{id:"\u76ee\u5f55\u7ed3\u6784"},"\u76ee\u5f55\u7ed3\u6784"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tracing-point.yaml\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-common-${latest.release.version}.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-jaeger-${latest.release.version}.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-opentelemetry-${latest.release.version}.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 shenyu-agent-plugin-tracing-zipkin-${latest.release.version}.jar\n\u2514\u2500\u2500 shenyu-agent.jar\n")),(0,r.yg)("h2",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,r.yg)("p",null,"\u914d\u7f6e\u6587\u4ef6 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," \u4f4d\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent-dist")," \u6a21\u5757\u4e2d\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n    - opentelemetry\n    - zipkin\n\nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n    zipkin:\n      host: "localhost"\n      port: 9411\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        URL_VERSION: "/api/v2/spans"\n        SAMPLER_TYPE: "const"\n        SAMPLER_PARAM: "1"\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728 supports \u4e2d\u9009\u62e9\u8981\u4f7f\u7528\u7684\u63d2\u4ef6\uff0c\u5982\u679c\u4e0d\u9700\u8981\u5219\u53bb\u9664\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5728 plugins \u4e2d\u914d\u7f6e\u63d2\u4ef6\u7684\u53c2\u6570\uff0c\u5176\u4e2d\u5404\u63d2\u4ef6props\u53c2\u6570\u7684\u5177\u4f53\u4f7f\u7528\u89c1\u4e0b\u9762\u51e0\u4e2a\u8868\u683c\uff1a")),(0,r.yg)("h5",{id:"jaeger"},"jaeger"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5728traces\u7cfb\u7edf\u4e2d\u663e\u793a\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_TYPE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"const"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Jaeger \u91c7\u6837\u7387\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_PARAM"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Jaeger \u91c7\u6837\u7387\u53c2\u6570")))),(0,r.yg)("h5",{id:"opentelemetry"},"opentelemetry"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"otel.traces.exporter"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"jaeger"),(0,r.yg)("td",{parentName:"tr",align:"left"},"traces\u5bfc\u51fa\u5668\u7c7b\u578b\uff0c\u82e5\u4e0d\u586b\u9ed8\u8ba4\u662fotlp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"otel.resource.attributes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"service.name=shenyu-agent"),(0,r.yg)("td",{parentName:"tr",align:"left"},"otel\u8d44\u6e90\u5c5e\u6027\uff0c\u82e5\u586b\u5199\u591a\u4e2a\uff0c\u53ef\u7528\u9017\u53f7\u5206\u9694")))),(0,r.yg)("p",null,"opentelemetry \u63d2\u4ef6\u4f7f\u7528\u7684sdk\u57fa\u4e8e ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry-sdk-extension-autoconfigure")," \u521d\u59cb\u5316\uff0c\u66f4\u591a\u4f7f\u7528\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/tree/v1.9.1/sdk-extensions/autoconfigure#opentelemetry-sdk-autoconfigure"},"OpenTelemetry SDK\u81ea\u52a8\u914d\u7f6e\u8bf4\u660e")),(0,r.yg)("h5",{id:"zipkin"},"zipkin"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u9ed8\u8ba4\u503c"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u5728traces\u7cfb\u7edf\u4e2d\u663e\u793a\u7684\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"URL_VERSION"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"/api/v2/spans"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zipkin\u7684\u7248\u672c")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SAMPLER_TYPE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"const"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zipkin \u91c7\u6837\u7387\u7c7b\u578b")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SAMPLER_PARAM"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Zipkin \u91c7\u6837\u7387\u53c2\u6570")))),(0,r.yg)("h2",{id:"\u4f7f\u7528-jaeger-\u63d2\u4ef6"},"\u4f7f\u7528 jaeger \u63d2\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6")),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," \u6587\u4ef6\u4e2d\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"supports.tracing"),"\u6307\u5b9a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")," \u63d2\u4ef6\uff0c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tracing")," \u586b\u5199 ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")," \u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n\nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u542f\u52a8 jaeger \u670d\u52a1")),(0,r.yg)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.28/getting-started/"},"jaeger-quickstart")," \u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d4b\u8bd5"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"li",href:"/zh/docs/2.4.2/deployment/deployment-local"},"\u8fd0\u7ef4\u90e8\u7f72")," \u7684\u76f8\u5173\u6587\u7ae0\uff0c\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin"),"\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u53c2\u8003\u4e0a\u8ff0\u64cd\u4f5c\u6b65\u9aa4\uff0c\u542f\u52a8\u7f51\u5173\uff1b"),(0,r.yg)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"li",href:"/zh/docs/2.4.2/quick-start/quick-start-http"},"Http\u5feb\u901f\u5f00\u59cb")," \uff0c\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-examples-http"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u5411\u7f51\u5173\u53d1\u8d77\u8bf7\u6c42\uff1a",(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=1"),(0,r.yg)("p",{parentName:"blockquote"},"Accept: application/json"))))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8bf7\u6c42\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u94fe\u8def\u65e5\u5fd7\u5df2\u7ecf\u4e0a\u62a5\u5230 jaeger \u4e2d\uff1a\n",(0,r.yg)("img",{src:n(3440).c}),"\n",(0,r.yg)("img",{src:n(32940).c})))),(0,r.yg)("h2",{id:"\u4f7f\u7528-zipkin-\u63d2\u4ef6"},"\u4f7f\u7528 zipkin \u63d2\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6")),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," \u6587\u4ef6\u4e2d\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"supports.tracing"),"\u6307\u5b9a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin")," \u63d2\u4ef6\uff0c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tracing")," \u586b\u5199 ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin")," \u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - zipkin\n\nplugins:\n  tracing:\n    zipkin:\n      host: "localhost"\n      port: 9411\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        URL_VERSION: "/api/v2/spans"\n        SAMPLER_TYPE: "const"\n        SAMPLER_PARAM: "1"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u542f\u52a8 zipkin-server")),(0,r.yg)("p",null,"\u8bf7\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart"},"zipkin-quickstart")," \u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin-server")," \u3002"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d4b\u8bd5"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/2.4.2/deployment/deployment-local"},"\u8fd0\u7ef4\u90e8\u7f72")," \u7684\u76f8\u5173\u6587\u7ae0\uff0c\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003\u4e0a\u8ff0\u64cd\u4f5c\u6b65\u9aa4\uff0c\u542f\u52a8\u7f51\u5173\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/2.4.2/quick-start/quick-start-http"},"Http\u5feb\u901f\u5f00\u59cb")," \uff0c\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5411\u7f51\u5173\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=999"),(0,r.yg)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8bf7\u6c42\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u94fe\u8def\u65e5\u5fd7\u5df2\u7ecf\u4e0a\u62a5\u5230zipkin\u4e2d\uff1a\n",(0,r.yg)("img",{src:n(39452).c}),"\n"))))),(0,r.yg)("h2",{id:"\u4f7f\u7528-opentelemetry-\u63d2\u4ef6"},"\u4f7f\u7528 opentelemetry \u63d2\u4ef6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6")),(0,r.yg)("p",null,"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," \u6587\u4ef6\u4e2d\u901a\u8fc7",(0,r.yg)("inlineCode",{parentName:"p"},"supports.tracing"),"\u6307\u5b9a\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry")," \u63d2\u4ef6\uff0c\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tracing")," \u586b\u5199 ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry")," \u7684\u914d\u7f6e\u4fe1\u606f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - opentelemetry\n\nplugins:\n  tracing:\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u6839\u636e\u5bfc\u51fa\u5668\u914d\u7f6e\u542f\u52a8 jaeger \u6216 zipkin \u6216 opentelemetry-collector")),(0,r.yg)("p",null,"\u542f\u52a8 jaeger \u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.28/getting-started/"},"jaeger-quickstart")),(0,r.yg)("p",null,"\u542f\u52a8 zipkin \u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart"},"zipkin-quickstart")),(0,r.yg)("p",null,"\u542f\u52a8 otel-collector \u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/getting-started/"},"opentelemetry-collector-quickstart")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d4b\u8bd5"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/2.4.2/deployment/deployment-local"},"\u8fd0\u7ef4\u90e8\u7f72")," \u7684\u76f8\u5173\u6587\u7ae0\uff0c\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003\u4e0a\u8ff0\u64cd\u4f5c\u6b65\u9aa4\uff0c\u542f\u52a8\u7f51\u5173\uff1b")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"/zh/docs/2.4.2/quick-start/quick-start-http"},"Http\u5feb\u901f\u5f00\u59cb")," \uff0c\u542f\u52a8 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-examples-http"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5411\u7f51\u5173\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=1"),(0,r.yg)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8bf7\u6c42\u6210\u529f\u540e\uff0c\u53ef\u5728\u76f8\u5e94\u540e\u7aef\u770b\u5230\u94fe\u8def\u65e5\u5fd7\uff0c\u6548\u679c\u4e0e\u4e0a\u9762\u7684jaeger\u63d2\u4ef6\u548czipkin\u63d2\u4ef6\u76f8\u540c\u3002"))))))}s.isMDXComponent=!0},3440:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/shenyu-agent-plugin-tracing-jaeger-1-675ef230ed483bf24008b91b0576e2dc.jpg"},32940:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/shenyu-agent-plugin-tracing-jaeger-2-d9f040809859450a478dbb52188eeb22.jpg"},39452:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/shenyu-agent-plugin-tracing-zipkin-7817c8ccb7bb44e939400213adebba08.png"}}]);