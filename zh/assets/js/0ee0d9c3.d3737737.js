"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69776],{95788:(e,n,t)=>{t.d(n,{Iu:()=>m,yg:()=>d});var a=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),g=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=g(e.components);return a.createElement(o.Provider,{value:n},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),y=g(t),u=r,d=y["".concat(o,".").concat(u)]||y[u]||s[u]||i;return t?a.createElement(d,l(l({ref:n},m),{},{components:t})):a.createElement(d,l({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[y]="string"==typeof e?e:r,l[1]=p;for(var g=2;g<i;g++)l[g]=t[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61932:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=t(45072),r=(t(11504),t(95788));const i={title:"Monitor\u63d2\u4ef6",keywords:["monitor"],description:"monitor\u63d2\u4ef6"},l=void 0,p={unversionedId:"plugin-center/observability/monitor-plugin",id:"version-2.4.0/plugin-center/observability/monitor-plugin",isDocsHomePage:!1,title:"Monitor\u63d2\u4ef6",description:"monitor\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/observability/monitor-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/monitor-plugin",permalink:"/zh/docs/2.4.0/plugin-center/observability/monitor-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/observability/monitor-plugin.md",version:"2.4.0",frontMatter:{title:"Monitor\u63d2\u4ef6",keywords:["monitor"],description:"monitor\u63d2\u4ef6"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Logging\u63d2\u4ef6",permalink:"/zh/docs/2.4.0/plugin-center/observability/logging-plugin"},next:{title:"\u81ea\u5b9a\u4e49\u8d1f\u8f7d\u5747\u8861\u7b56\u7565",permalink:"/zh/docs/2.4.0/developer/spi/custom-load-balance"}},o=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u6280\u672f\u65b9\u6848",id:"\u6280\u672f\u65b9\u6848",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u63d2\u4ef6\u4f7f\u7528",id:"\u63d2\u4ef6\u4f7f\u7528",children:[]},{value:"metrics\u4fe1\u606f",id:"metrics\u4fe1\u606f",children:[]},{value:"\u6536\u96c6 metrics",id:"\u6536\u96c6-metrics",children:[]},{value:"\u9762\u677f\u5c55\u793a",id:"\u9762\u677f\u5c55\u793a",children:[]}],g={toc:o},m="wrapper";function y(e){let{components:n,...i}=e;return(0,r.yg)(m,(0,a.c)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"monitor"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u76d1\u63a7\u81ea\u8eab\u8fd0\u884c\u72b6\u6001\uff08",(0,r.yg)("inlineCode",{parentName:"li"},"JVM"),"\u76f8\u5173\uff09\uff0c\u8bf7\u6c42\u7684\u54cd\u5e94\u8fdf\u5ef6\uff0c",(0,r.yg)("inlineCode",{parentName:"li"},"QPS"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"TPS"),"\u7b49\u76f8\u5173",(0,r.yg)("inlineCode",{parentName:"li"},"metrics"),"\u3002")),(0,r.yg)("h2",{id:"\u6280\u672f\u65b9\u6848"},"\u6280\u672f\u65b9\u6848"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6d41\u7a0b\u56fe\n",(0,r.yg)("img",{src:t(920).c}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5f02\u6b65\u6216\u8005\u540c\u6b65\u7684\u65b9\u5f0f\uff0c\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u91cc\u9762\u8fdb\u884c ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")," \u57cb\u70b9\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"prometheus")," \u670d\u52a1\u7aef\u901a\u8fc7 ",(0,r.yg)("inlineCode",{parentName:"p"},"http")," \u8bf7\u6c42\u6765\u62c9\u53d6  ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics"),"\uff0c\u518d\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana")," \u5c55\u793a\u3002"))),(0,r.yg)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"shenyu-admin"),"--\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406-> ",(0,r.yg)("inlineCode",{parentName:"p"},"monitor")," \uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"monitor")," \u63d2\u4ef6\u4e2d\u65b0\u589e\u4ee5\u4e0b\u914d\u7f6e\uff1a"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'{"metricsName":"prometheus","host":"localhost","port":"9190","async":"true"}\n\n# port : \u4e3a\u66b4\u9732\u7ed9 prometheus\u670d\u52a1\u6765\u62c9\u53d6\u7684\u7aef\u53e3\n# host : \u4e0d\u586b\u5199\u5219\u4e3a Apache ShenYu \u7f51\u5173\u7684host.\n# async :"true" \u4e3a\u5f02\u6b65\u57cb\u70b9\uff0c false \u4e3a\u540c\u6b65\u57cb\u70b9\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u5219\u5728 ",(0,r.yg)("inlineCode",{parentName:"li"},"shenyu-admin")," \u540e\u53f0\u628a\u6b64\u63d2\u4ef6\u505c\u7528\u3002")),(0,r.yg)("img",{src:"/img/shenyu/plugin/monitor/monitor_open.png",width:"70%",height:"60%"}),(0,r.yg)("h2",{id:"\u63d2\u4ef6\u4f7f\u7528"},"\u63d2\u4ef6\u4f7f\u7528"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,r.yg)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,r.yg)("inlineCode",{parentName:"li"},"monitor")," \u7684\u4f9d\u8d56\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu monitor plugin starter--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-monitor</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu monitor plugin end--\x3e\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003: ",(0,r.yg)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,r.yg)("li",{parentName:"ul"},"\u53ea\u6709\u5f53\u5339\u914d\u7684",(0,r.yg)("inlineCode",{parentName:"li"},"url"),"\uff0c\u624d\u4f1a\u8fdb\u884c",(0,r.yg)("inlineCode",{parentName:"li"},"url"),"\u8bf7\u6c42\u57cb\u70b9\u3002")),(0,r.yg)("h2",{id:"metrics\u4fe1\u606f"},"metrics\u4fe1\u606f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6240\u6709\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"JVM"),"\uff0c\u7ebf\u7a0b\uff0c\u5185\u5b58\uff0c\u7b49\u76f8\u5173\u4fe1\u606f\u90fd\u4f1a\u57cb\u70b9\uff0c\u53ef\u4ee5\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana")," \u9762\u677f\u4e2d\uff0c\u65b0\u589e\u4e00\u4e2a ",(0,r.yg)("inlineCode",{parentName:"p"},"JVM")," \u6a21\u5757\uff0c\u5219\u4f1a\u5b8c\u5168\u5c55\u793a \u5177\u4f53\u8bf7\u770b\uff1a",(0,r.yg)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"https://github.com/prometheus/jmx_exporter"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u53e6\u5916\u8fd8\u6709\u5982\u4e0b\u81ea\u5b9a\u4e49\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u6807\u7b7e\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:"left"},"\u8bf4\u660e"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"request_total"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Counter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6536\u96c6ShenYu\u7f51\u5173\u6240\u6709\u7684\u8bf7\u6c42")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"http_request_total"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Counter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"path,type"),(0,r.yg)("td",{parentName:"tr",align:"left"},"\u6536\u96c6monitor\u63d2\u4ef6\u5339\u914d\u7684\u8bf7\u6c42")))),(0,r.yg)("h2",{id:"\u6536\u96c6-metrics"},"\u6536\u96c6 metrics"),(0,r.yg)("p",null,"\u7528\u6237\u9700\u90e8\u7f72",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus")," \u670d\u52a1\u6765\u91c7\u96c6"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9009\u62e9\u5bf9\u5e94\u73af\u5883\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/download/"},"\u4e0b\u8f7d\u5730\u5740"),"\u5b89\u88c5")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"prometheus.yml")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n    static_configs:\n    - targets: ['localhost:9190']\n")))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\uff1a")," ",(0,r.yg)("inlineCode",{parentName:"p"},"job_name"),"\u8ddf",(0,r.yg)("inlineCode",{parentName:"p"},"monitor"),"\u63d2\u4ef6\u914d\u7f6e\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"metricsName"),"\u76f8\u5bf9\u5e94"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e ",(0,r.yg)("inlineCode",{parentName:"li"},"window")," \u4e0b\u53ef\u4ee5\u76f4\u63a5\u53cc\u51fb ",(0,r.yg)("inlineCode",{parentName:"li"},"prometheus.exe")," \u542f\u52a8\u5373\u53ef\uff0c\u9ed8\u8ba4\u542f\u52a8\u7aef\u53e3\u4e3a ",(0,r.yg)("inlineCode",{parentName:"li"},"9090")," \uff0c\u53ef\u901a\u8fc7http://localhost:9090/ \u9a8c\u8bc1\u662f\u5426\u6210\u529f")),(0,r.yg)("h2",{id:"\u9762\u677f\u5c55\u793a"},"\u9762\u677f\u5c55\u793a"),(0,r.yg)("p",null,"\u63a8\u8350\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana"),"\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5b9a\u4e49\u67e5\u8be2\u6765\u4e2a\u6027\u5316\u663e\u793a\u9762\u677f\u76d8\u3002"),(0,r.yg)("p",null,"\u4e0b\u9762\u4ecb\u7ecd ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana")," \u90e8\u7f72\uff08",(0,r.yg)("inlineCode",{parentName:"p"},"windows"),"\u7248\uff09"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5b89\u88c5 ",(0,r.yg)("inlineCode",{parentName:"li"},"Grafana"))),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://dl.grafana.com/oss/release/grafana-7.4.2.windows-amd64.zip"},"\u4e0b\u8f7d\u5730\u5740")," \u89e3\u538b\u8fdb\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," \u76ee\u5f55\u7136\u540e\u53cc\u51fb ",(0,r.yg)("inlineCode",{parentName:"p"},"grafana-server.exe")," \u8fd0\u884c \u8bbf\u95ee ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/?orgId=1")," admin/admin \u9a8c\u8bc1\u662f\u5426\u6210\u529f"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,r.yg)("inlineCode",{parentName:"li"},"Prometheus")," \u6570\u636e\u6e90")),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(54072).c})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,r.yg)("inlineCode",{parentName:"li"},"JVM")," \u9762\u677f")),(0,r.yg)("p",null,"\u70b9\u51fb",(0,r.yg)("inlineCode",{parentName:"p"},"Create")," - ",(0,r.yg)("inlineCode",{parentName:"p"},"Import"),"\uff0c\u8f93\u5165 ",(0,r.yg)("inlineCode",{parentName:"p"},"dashboards")," \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"id"),"\uff08\u63a8\u8350",(0,r.yg)("inlineCode",{parentName:"p"},"8563"),"\uff09"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(1740).c})),(0,r.yg)("p",null,"\u6700\u7ec8",(0,r.yg)("inlineCode",{parentName:"p"},"JVM"),"\u76d1\u63a7\u9762\u677f\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(37856).c})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u914d\u7f6e\u81ea\u5b9a\u4e49metric\u9762\u677f",(0,r.yg)("inlineCode",{parentName:"li"},"request_total"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"http_request_total"))),(0,r.yg)("p",null,"\u70b9\u51fb ",(0,r.yg)("inlineCode",{parentName:"p"},"Create")," - ",(0,r.yg)("inlineCode",{parentName:"p"},"Import")," \u8f93\u5165",(0,r.yg)("inlineCode",{parentName:"p"},"dashboards")," \u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/img/shenyu/monitor/request_metric_dashboard.json"},"\u9762\u677fjson\u914d\u7f6e")),(0,r.yg)("p",null,"\u6700\u7ec8\u81ea\u5b9a\u4e49 ",(0,r.yg)("inlineCode",{parentName:"p"},"Http")," \u8bf7\u6c42\u76d1\u63a7\u9762\u677f\u6548\u679c\u5982\u4e0b\uff1a"),(0,r.yg)("p",null,(0,r.yg)("img",{src:t(65040).c})))}y.isMDXComponent=!0},1740:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/jvm-import-07851d0a4298b838f4940e1255a4b27b.png"},37856:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/jvm-4ec37708e8560160feeece11efe12ac5.png"},54072:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/prometheus-datasource-dc030a55d003f5aec547dd0756f94da1.png"},65040:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/request-metric-668b020e651affd9dfd0399da7c8e008.png"},920:(e,n,t)=>{t.d(n,{c:()=>a});const a=t.p+"assets/images/shenyu-metrics-805b9a2539e9808d934caae9b3a1404f.png"}}]);