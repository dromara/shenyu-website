"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[41600],{95788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>d});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):g(g({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=m(a),s=r,d=y["".concat(o,".").concat(s)]||y[s]||c[s]||l;return a?n.createElement(d,g(g({ref:t},p),{},{components:a})):n.createElement(d,g({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,g=new Array(l);g[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[y]="string"==typeof e?e:r,g[1]=i;for(var m=2;m<l;m++)g[m]=a[m];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},52664:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>g,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var n=a(45072),r=(a(11504),a(95788));const l={title:"Metrics Plugin",keywords:["Metrics"],description:"Metrics plugin"},g=void 0,i={unversionedId:"plugin-center/observability/metrics-plugin",id:"version-2.6.1/plugin-center/observability/metrics-plugin",isDocsHomePage:!1,title:"Metrics Plugin",description:"Metrics plugin",source:"@site/versioned_docs/version-2.6.1/plugin-center/observability/metrics-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/metrics-plugin",permalink:"/docs/plugin-center/observability/metrics-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/plugin-center/observability/metrics-plugin.md",version:"2.6.1",frontMatter:{title:"Metrics Plugin",keywords:["Metrics"],description:"Metrics plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"Logging-Tencent-Cls Plugin",permalink:"/docs/plugin-center/observability/logging-tencent-cls"},next:{title:"GeneralContext Plugin",permalink:"/docs/plugin-center/common/general-context-plugin"}},o=[{value:"Description",id:"description",children:[]},{value:"Technical Solutions",id:"technical-solutions",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metrics Detail",id:"metrics-detail",children:[{value:"shenyu gateway custom metrics",id:"shenyu-gateway-custom-metrics",children:[]},{value:"jmx metrics",id:"jmx-metrics",children:[]},{value:"jvm metrics",id:"jvm-metrics",children:[]}]},{value:"Collect metrics",id:"collect-metrics",children:[{value:"Install Prometheus in windows",id:"install-prometheus-in-windows",children:[]},{value:"Install Prometheus in the macOS",id:"install-prometheus-in-the-macos",children:[]}]},{value:"Panel Display",id:"panel-display",children:[{value:"Install Grafana in windows",id:"install-grafana-in-windows",children:[]},{value:"Install Grafana in macOS",id:"install-grafana-in-macos",children:[]},{value:"View monitoring data with Grafana",id:"view-monitoring-data-with-grafana",children:[]}]}],m={toc:o},p="wrapper";function y(e){let{components:t,...l}=e;return(0,r.yg)(p,(0,n.c)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Metrics plugin is used to monitor its own running status(JVM-related) by gateway, include request response delay, QPS, TPS, and other related metrics.")),(0,r.yg)("h2",{id:"technical-solutions"},"Technical Solutions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Flow Diagram\n",(0,r.yg)("img",{src:a(920).c}))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Make even tracking in ShenYu Gateway by asynchronous or synchronous mode.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"prometheus")," server pulls metrics' through http request, and then displays it by ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana"),"."))),(0,r.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Introduce ",(0,r.yg)("inlineCode",{parentName:"li"},"metrics")," dependency in the pom.xml file of the gateway.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu metrics plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu metrics plugin end--\x3e\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"modify this config in shenyu gateway yaml")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yml"},"shenyu:\n  metrics:\n    enabled: false #false is close, true is open\n    name : prometheus \n    host: 127.0.0.1\n    port: 8090\n    jmxConfig:\n    props:\n      jvm_enabled: true #enable jvm monitoring\n")),(0,r.yg)("h2",{id:"metrics-detail"},"Metrics Detail"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"All JVM\uff0cthread\uff0cmemory\uff0cand other related information will be made event tracking\uff0cyou can add a JVM module in the Grafana' panel, and it will be fully displayed, please refer to\uff1a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"https://github.com/prometheus/jmx_exporter"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"There are also the following custom ",(0,r.yg)("inlineCode",{parentName:"p"},"metrics")))),(0,r.yg)("h3",{id:"shenyu-gateway-custom-metrics"},"shenyu gateway custom metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,r.yg)("th",{parentName:"tr",align:"left"},"type"),(0,r.yg)("th",{parentName:"tr",align:"left"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"left"},"description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu_request_total"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Counter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"none"),(0,r.yg)("td",{parentName:"tr",align:"left"},"collecting all requests of Apache ShenYu Gateway")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu_request_throw_total"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Counter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"none"),(0,r.yg)("td",{parentName:"tr",align:"left"},"collecting all exception requests of Apache ShenYu Gateway")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu_request_type_total"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Counter"),(0,r.yg)("td",{parentName:"tr",align:"left"},"path,type"),(0,r.yg)("td",{parentName:"tr",align:"left"},"collecting all matched requests of monitor")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"shenyu_execute_latency_millis"),(0,r.yg)("td",{parentName:"tr",align:"left"},"histogram"),(0,r.yg)("td",{parentName:"tr",align:"left"},"none"),(0,r.yg)("td",{parentName:"tr",align:"left"},"ShenYu gateway execute time interval")))),(0,r.yg)("h3",{id:"jmx-metrics"},"jmx metrics"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labals"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_config_reload_success_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of times configuration have successfully been reloaded.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_config_reload_failure_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of times configuration have failed to be reloaded.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_scrape_duration_seconds"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Time this JMX scrape took, in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_scrape_error"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Non-zero if this scrape failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_scrape_cached_beans"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of beans with their matching rule cached")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_scrape_duration_seconds"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Time this JMX scrape took, in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_scrape_error"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Non-zero if this scrape failed.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jmx_scrape_cached_beans"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of beans with their matching rule cached")))),(0,r.yg)("h3",{id:"jvm-metrics"},"jvm metrics"),(0,r.yg)("h4",{id:"standardexports"},"StandardExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"process_cpu_seconds_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Total user and system CPU time spent in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"process_start_time_seconds"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Start time of the process since unix epoch in seconds.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"process_open_fds"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Number of open file descriptors.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"process_max_fds"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Maximum number of open file descriptors.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"process_virtual_memory_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Virtual memory size in bytes.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"process_resident_memory_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Resident memory size in bytes.")))),(0,r.yg)("h4",{id:"memorypoolsexports"},"MemoryPoolsExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_objects_pending_finalization"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,r.yg)("td",{parentName:"tr",align:"center"},"The number of objects waiting in the finalizer queue.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_used"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,r.yg)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM memory area.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_committed"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,r.yg)("td",{parentName:"tr",align:"center"},"Committed (bytes) of a given JVM memory area.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_max"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,r.yg)("td",{parentName:"tr",align:"center"},"Max (bytes) of a given JVM memory area.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_bytes_init"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},'{area="heap',"|",'nonheap"}'),(0,r.yg)("td",{parentName:"tr",align:"center"},"Initial bytes of a given JVM memory area.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_used"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_committed"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Committed bytes of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_max"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Max bytes of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_bytes_init"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Initial bytes of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_used_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Used bytes after last collection of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_committed_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Committed after last collection bytes of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_max_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Max bytes after last collection of a given JVM memory pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_collection_init_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Initial after last collection bytes of a given JVM memory pool.")))),(0,r.yg)("h4",{id:"memoryallocationexports"},"MemoryAllocationExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_memory_pool_allocated_bytes_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Total bytes allocated in a given JVM memory pool. Only updated after GC, not continuously.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"})))),(0,r.yg)("h4",{id:"bufferpoolsexports"},"BufferPoolsExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_used_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Used bytes of a given JVM buffer pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_capacity_bytes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Bytes capacity of a given JVM buffer pool.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_buffer_pool_used_buffers"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{pool}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Used buffers of a given JVM buffer pool.")))),(0,r.yg)("h4",{id:"garbagecollectorexports"},"GarbageCollectorExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_gc_collection_seconds"),(0,r.yg)("td",{parentName:"tr",align:"center"},"summary"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{gc}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Time spent in a given JVM garbage collector in seconds.")))),(0,r.yg)("h4",{id:"threadexports"},"ThreadExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_current"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Current thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_daemon"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Daemon thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_peak"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Peak thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_started_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Started thread count of a JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_deadlocked"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors or ownable synchronizers")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_deadlocked_monitor"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"Cycles of JVM-threads that are in deadlock waiting to acquire object monitors")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_threads_state"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{state}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Current count of threads by state")))),(0,r.yg)("h4",{id:"classloadingexports"},"ClassLoadingExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_classes_loaded"),(0,r.yg)("td",{parentName:"tr",align:"center"},"gauge"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The number of classes that are currently loaded in the JVM")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_classes_loaded_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The total number of classes that have been loaded since the JVM has started execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm_classes_unloaded_total"),(0,r.yg)("td",{parentName:"tr",align:"center"},"counter"),(0,r.yg)("td",{parentName:"tr",align:"center"}),(0,r.yg)("td",{parentName:"tr",align:"center"},"The total number of classes that have been unloaded since the JVM has started execution")))),(0,r.yg)("h4",{id:"versioninfoexports"},"VersionInfoExports"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"name"),(0,r.yg)("th",{parentName:"tr",align:"center"},"type"),(0,r.yg)("th",{parentName:"tr",align:"center"},"labels"),(0,r.yg)("th",{parentName:"tr",align:"center"},"help"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"jvm"),(0,r.yg)("td",{parentName:"tr",align:"center"},"info"),(0,r.yg)("td",{parentName:"tr",align:"center"},"{version(java.runtime.version),vendor(java.vm.vendor),runtime(java.runtime.name)}"),(0,r.yg)("td",{parentName:"tr",align:"center"},"VM version info")))),(0,r.yg)("h2",{id:"collect-metrics"},"Collect metrics"),(0,r.yg)("p",null,"Users need to install ",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus")," service to collect"),(0,r.yg)("h3",{id:"install-prometheus-in-windows"},"Install Prometheus in windows"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Choose the corresponding environment ",(0,r.yg)("a",{parentName:"p",href:"https://prometheus.io/download/"},"download address")," to install")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Modify configuration file: ",(0,r.yg)("inlineCode",{parentName:"p"},"prometheus.yml")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'Apache ShenYu'\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n    static_configs:\n    - targets: ['localhost:8090'] # metrics of apache shenyu are exposed on port 8090 by default\n"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After the configuration is completed, you can directly double-click ",(0,r.yg)("inlineCode",{parentName:"p"},"prometheus.exe")," in the window to start. The default boot port is ",(0,r.yg)("inlineCode",{parentName:"p"},"9090"),",check ",(0,r.yg)("inlineCode",{parentName:"p"},"status"),"->",(0,r.yg)("inlineCode",{parentName:"p"},"Targets")," . Success can be verified at http://localhost:9090/"))),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(36588).c})),(0,r.yg)("h3",{id:"install-prometheus-in-the-macos"},"Install Prometheus in the macOS"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install prometheus with brew\uff0cAfter installation ",(0,r.yg)("inlineCode",{parentName:"li"},"prometheus")," is in the ",(0,r.yg)("inlineCode",{parentName:"li"},"Cellar")," folder under ",(0,r.yg)("inlineCode",{parentName:"li"},"homebrew"),"\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"brew install prometheus\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Execute the following command in the location of the prometheus.yml file to start prometheus\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"prometheus --config.file=prometheus.yml &\n")),(0,r.yg)("p",null,"Visit ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:9090/")," to verify that it starts normally\u3002"),(0,r.yg)("h2",{id:"panel-display"},"Panel Display"),(0,r.yg)("p",null,"It is recommended to use ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana"),", Users can customize the query to personalize the display panel."),(0,r.yg)("p",null,"Here's how to install and deploy ",(0,r.yg)("inlineCode",{parentName:"p"},"Grafana")),(0,r.yg)("h3",{id:"install-grafana-in-windows"},"Install Grafana in windows"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install Grafana")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://dl.grafana.com/oss/release/grafana-7.4.2.windows-amd64.zip"},"download")," Unzip it and enter the ",(0,r.yg)("inlineCode",{parentName:"p"},"bin")," directory and ",(0,r.yg)("inlineCode",{parentName:"p"},"double-click")," ",(0,r.yg)("inlineCode",{parentName:"p"},"grafana-server.exe")," to run it. Go to http://localhost:3000/?orgId=1 ",(0,r.yg)("inlineCode",{parentName:"p"},"admin/admin")," to verify the success"),(0,r.yg)("h3",{id:"install-grafana-in-macos"},"Install Grafana in macOS"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Install grafana using brew.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"brew install grafana\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Start grafana as a service")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"brew services start grafana\n")),(0,r.yg)("p",null,"Visit ",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:3000/")," to verify that it starts normally."),(0,r.yg)("h3",{id:"view-monitoring-data-with-grafana"},"View monitoring data with Grafana"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Configure the data source, select prometheus, note that the data source name is prometheus.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(69908).c})),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(9364).c})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Config Custom Metric Dashboard ",(0,r.yg)("inlineCode",{parentName:"li"},"request_total"),"\u3001",(0,r.yg)("inlineCode",{parentName:"li"},"http_request_total"))),(0,r.yg)("p",null,"Click ",(0,r.yg)("inlineCode",{parentName:"p"},"Create")," - ",(0,r.yg)("inlineCode",{parentName:"p"},"Import")," and enter the ",(0,r.yg)("a",{parentName:"p",href:"https://shenyu.apache.org/img/shenyu/monitor/request_metric_dashboard.json"},"panel config json")),(0,r.yg)("p",null,"The final custom HTTP request monitoring panel looks like this:"),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(44792).c})),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(65976).c})),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(16824).c})),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(62436).c})),(0,r.yg)("p",null,(0,r.yg)("img",{src:a(17392).c})))}y.isMDXComponent=!0},44792:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-1-92f09dff492b284cf5462a1b2149f804.png"},65976:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-2-4ef0ea780f6d612bb1076decaa4c4549.png"},16824:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-3-25e310a4c0c636d2ccd872bada66bfe9.png"},62436:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-4-d95d82437f8344ab537170fc78ee980c.png"},17392:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-5-5be0cded02230111957e9cbf0b74f653.png"},36588:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-6-e6e3fea6e33e3799c8f4d2dfa98bc5ec.png"},69908:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-7-355daf90afad71497091d1b1fdb477fb.png"},9364:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/request-metric-8-8425d041585a6db6b27412ac052c5e57.png"},920:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/shenyu-metrics-805b9a2539e9808d934caae9b3a1404f.png"}}]);