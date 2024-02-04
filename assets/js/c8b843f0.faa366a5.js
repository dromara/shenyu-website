"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[71416],{95788:(e,t,n)=>{n.d(t,{Iu:()=>y,yg:()=>m});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),o=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},y=function(e){var t=o(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,g=e.parentName,y=p(e,["components","mdxType","originalType","parentName"]),s=o(n),c=r,m=s["".concat(g,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(m,l(l({ref:t},y),{},{components:n})):a.createElement(m,l({ref:t},y))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p[s]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60444:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>g});var a=n(45072),r=(n(11504),n(95788));const i={title:"Tracing",keywords:["Tracing"],description:"Tracing access"},l=void 0,p={unversionedId:"user-guide/observability/tracing",id:"version-2.4.2/user-guide/observability/tracing",isDocsHomePage:!1,title:"Tracing",description:"Tracing access",source:"@site/versioned_docs/version-2.4.2/user-guide/observability/tracing.md",sourceDirName:"user-guide/observability",slug:"/user-guide/observability/tracing",permalink:"/docs/2.4.2/user-guide/observability/tracing",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.2/user-guide/observability/tracing.md",version:"2.4.2",frontMatter:{title:"Tracing",keywords:["Tracing"],description:"Tracing access"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"Observability",permalink:"/docs/2.4.2/user-guide/observability/observability"},next:{title:"Dubbo Proxy",permalink:"/docs/2.4.2/user-guide/proxy/dubbo-proxy"}},g=[{value:"Catalog Structure",id:"catalog-structure",children:[]},{value:"Edit shenyu-agent.yaml",id:"edit-shenyu-agentyaml",children:[]},{value:"Agent Plugin Tracing Jaeger",id:"agent-plugin-tracing-jaeger",children:[]},{value:"Agent Plugin Tracing Zipkin",id:"agent-plugin-tracing-zipkin",children:[]},{value:"Agent Plugin Tracing OpenTelemetry",id:"agent-plugin-tracing-opentelemetry",children:[]}],o={toc:g},y="wrapper";function s(e){let{components:t,...i}=e;return(0,r.yg)(y,(0,a.c)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This article introduces how to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu Agent Tracing"),"."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," uses ",(0,r.yg)("inlineCode",{parentName:"p"},"java agent")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"bytecode enhancement")," technology to achieve seamless embedding, so that users can access third-party observability systems without introducing dependencies, and obtain Traces, Metrics and Logging."),(0,r.yg)("h2",{id:"catalog-structure"},"Catalog Structure"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-text"},".\n\u251c\u2500\u2500 conf\n\u2502\xa0\xa0 \u251c\u2500\u2500 logback.xml\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 tracing-point.yaml\n\u251c\u2500\u2500 plugins\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-common-${latest.release.version}.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-jaeger-${latest.release.version}.jar\n\u2502\xa0\xa0 \u251c\u2500\u2500 shenyu-agent-plugin-tracing-opentelemetry-${latest.release.version}.jar\n\u2502\xa0\xa0 \u2514\u2500\u2500 shenyu-agent-plugin-tracing-zipkin-${latest.release.version}.jar\n\u2514\u2500\u2500 shenyu-agent.jar\n")),(0,r.yg)("h2",{id:"edit-shenyu-agentyaml"},"Edit shenyu-agent.yaml"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n    - opentelemetry\n    - zipkin\n\nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n    zipkin:\n      host: \n      port: \n      props:\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Select the plugin to be used in ",(0,r.yg)("inlineCode",{parentName:"li"},"supports")),(0,r.yg)("li",{parentName:"ul"},"Configure the parameters of the plug-in in ",(0,r.yg)("inlineCode",{parentName:"li"},"plugins"),". The specific usage of each plug-in props parameter is shown in the following tables:")),(0,r.yg)("h4",{id:"jaeger"},"jaeger"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The name displayed in the traces system")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_TYPE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"const"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Jaeger sample rate type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"JAEGER_SAMPLER_PARAM"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Jaeger sample rate parameters")))),(0,r.yg)("h4",{id:"opentelemetry"},"opentelemetry"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"otel.traces.exporter"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"jaeger"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Traces exporter type, if not filled in, the default is otlp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"otel.resource.attributes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"service.name=shenyu-agent"),(0,r.yg)("td",{parentName:"tr",align:"left"},"otel resource attributes, if you fill in more than one, they can be separated by commas")))),(0,r.yg)("p",null,"The SDK used by the opentelemetry plugin is initialized based on ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry-sdk-extension-autoconfigure"),". For more usage, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-telemetry/opentelemetry-java/tree/v1.9.1/sdk-extensions/autoconfigure#opentelemetry-sdk-autoconfigure"},"OpenTelemetry SDK AutoConfiguration Instructions")),(0,r.yg)("h5",{id:"zipkin"},"zipkin"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Default"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SERVICE_NAME"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu-agent"),(0,r.yg)("td",{parentName:"tr",align:"left"},"The name displayed in the traces system")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"URL_VERSION"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"/api/v2/spans"),(0,r.yg)("td",{parentName:"tr",align:"left"},"zipkin url version")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SAMPLER_TYPE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"const"),(0,r.yg)("td",{parentName:"tr",align:"left"},"zipkin sampler type")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"SAMPLER_PARAM"),(0,r.yg)("td",{parentName:"tr",align:"center"},"String"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"zipkin sampler param")))),(0,r.yg)("h2",{id:"agent-plugin-tracing-jaeger"},"Agent Plugin Tracing Jaeger"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"modify yaml file")),(0,r.yg)("p",null,"Specify the use of the ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")," plugin via ",(0,r.yg)("inlineCode",{parentName:"p"},"supports.tracing")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," file, and fill in the ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")," configuration information via ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tracing"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - jaeger\n\nplugins:\n  tracing:\n    jaeger:\n      host: "localhost"\n      port: 5775\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        JAEGER_SAMPLER_TYPE: "const"\n        JAEGER_SAMPLER_PARAM: "1"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"start jaeger server")),(0,r.yg)("p",null,"please see ",(0,r.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.28/getting-started/"},"jaeger-quickstart")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"tracing test"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reference ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/deployment/deployment-local"},"Deployment")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start the gateway by referring to the above procedure.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/quick-start/quick-start-http"},"Quick start with Http")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-examples-http"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Launch a request to the gateway."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=1"),(0,r.yg)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After a successful request, you can see that the link log has been reported to jaeger:\n",(0,r.yg)("img",{src:n(3440).c}),"\n",(0,r.yg)("img",{src:n(32940).c})))))),(0,r.yg)("h2",{id:"agent-plugin-tracing-zipkin"},"Agent Plugin Tracing Zipkin"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"modify yaml file")),(0,r.yg)("p",null,"Specify the use of the ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin")," plugin via ",(0,r.yg)("inlineCode",{parentName:"p"},"supports.tracing")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," file, and fill in the ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin")," configuration information via ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tracing"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - zipkin\n\nplugins:\n  tracing:\n    zipkin:\n      host: "localhost"\n      port: 9411\n      props:\n        SERVICE_NAME: "shenyu-agent"\n        URL_VERSION: "/api/v2/spans"\n        SAMPLER_TYPE: "const"\n        SAMPLER_PARAM: "1"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"start zipkin-server")),(0,r.yg)("p",null,"please see ",(0,r.yg)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart"},"zipkin-quickstart")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin-server")," ."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"tracing test "),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reference ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/deployment/deployment-local"},"Deployment")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start the gateway by referring to the above procedure.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/quick-start/quick-start-http"},"Quick start with Http")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-examples-http"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Launch a request to the gateway."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=999"),(0,r.yg)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After a successful request, you can see that the link log has been reported to zipkin:\n",(0,r.yg)("img",{src:n(39452).c})))))),(0,r.yg)("h2",{id:"agent-plugin-tracing-opentelemetry"},"Agent Plugin Tracing OpenTelemetry"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"modify yaml file")),(0,r.yg)("p",null,"Specify the use of the ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry")," plugin via ",(0,r.yg)("inlineCode",{parentName:"p"},"supports.tracing")," in the ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-agent.yaml")," file, and fill in the ",(0,r.yg)("inlineCode",{parentName:"p"},"opentelemetry")," configuration information via ",(0,r.yg)("inlineCode",{parentName:"p"},"plugins.tracing"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'appName: shenyu-agent\nsupports:\n  tracing:\n    - opentelemetry\n\nplugins:\n  tracing:\n    opentelemetry:\n      props:\n        otel.traces.exporter: jaeger #zipkin #otlp\n        otel.resource.attributes: "service.name=shenyu-agent"\n        otel.exporter.jaeger.endpoint: "http://localhost:14250/api/traces"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Start jaeger or zipkin or opentelemetry-collector according to exporter configuration")),(0,r.yg)("p",null,"To start jaeger, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://www.jaegertracing.io/docs/1.28/getting-started/"},"jaeger-quickstart")),(0,r.yg)("p",null,"To start zipkin, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://zipkin.io/pages/quickstart"},"zipkin-quickstart")),(0,r.yg)("p",null,"To start otel-collector, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/getting-started/"},"opentelemetry-collector-quickstart")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"tracing test"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Reference ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/deployment/deployment-local"},"Deployment")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Start the gateway by referring to the above procedure.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.4.2/quick-start/quick-start-http"},"Quick start with Http")," to start ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-examples-http"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Launch a request to the gateway."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"GET http://localhost:9195/http/order/findById?id=999"),(0,r.yg)("p",{parentName:"blockquote"},"Accept: application/json"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After the request is successful, you can see the link log in the corresponding backend, the effect is the same as the above ",(0,r.yg)("inlineCode",{parentName:"p"},"jaeger")," plugin and ",(0,r.yg)("inlineCode",{parentName:"p"},"zipkin")," plugin."))))))}s.isMDXComponent=!0},3440:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/shenyu-agent-plugin-tracing-jaeger-1-675ef230ed483bf24008b91b0576e2dc.jpg"},32940:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/shenyu-agent-plugin-tracing-jaeger-2-d9f040809859450a478dbb52188eeb22.jpg"},39452:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/shenyu-agent-plugin-tracing-zipkin-7817c8ccb7bb44e939400213adebba08.png"}}]);