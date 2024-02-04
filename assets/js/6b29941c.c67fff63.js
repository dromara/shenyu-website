"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[47252],{95788:(e,n,i)=>{i.d(n,{Iu:()=>s,yg:()=>m});var t=i(11504);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function a(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?l(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function o(e,n){if(null==e)return{};var i,t,r=function(e,n){if(null==e)return{};var i,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var p=t.createContext({}),u=function(e){var n=t.useContext(p),i=n;return e&&(i="function"==typeof e?e(n):a(a({},n),e)),i},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(i),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||l;return i?t.createElement(m,a(a({ref:n},s),{},{components:i})):t.createElement(m,a({ref:n},s))}));function m(e,n){var i=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=i.length,a=new Array(l);a[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var u=2;u<l;u++)a[u]=i[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},31700:(e,n,i)=>{i.r(n),i.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var t=i(45072),r=(i(11504),i(95788));const l={title:"Resilience4j Plugin",keywords:["Resilience4j"],description:"resilience4j plugin"},a=void 0,o={unversionedId:"plugin-center/fault-tolerance/resilience4j-plugin",id:"version-2.6.1/plugin-center/fault-tolerance/resilience4j-plugin",isDocsHomePage:!1,title:"Resilience4j Plugin",description:"resilience4j plugin",source:"@site/versioned_docs/version-2.6.1/plugin-center/fault-tolerance/resilience4j-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/resilience4j-plugin",permalink:"/docs/plugin-center/fault-tolerance/resilience4j-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.6.1/plugin-center/fault-tolerance/resilience4j-plugin.md",version:"2.6.1",frontMatter:{title:"Resilience4j Plugin",keywords:["Resilience4j"],description:"resilience4j plugin"},sidebar:"version-2.6.0/tutorialSidebar",previous:{title:"RateLimiter Plugin",permalink:"/docs/plugin-center/fault-tolerance/rate-limiter-plugin"},next:{title:"Sentinel Plugin",permalink:"/docs/plugin-center/fault-tolerance/sentinel-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Add resilience4j plugin dependency",id:"add-resilience4j-plugin-dependency",children:[]},{value:"Resilience4j Config",id:"resilience4j-config",children:[]}],u={toc:p},s="wrapper";function c(e){let{components:n,...i}=e;return(0,r.yg)(s,(0,t.c)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Resilience4j")," is one of the options that supports flow control and circuit breaking."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Resilience4j")," supports flow control and circuit breaking functions for gateway.")),(0,r.yg)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.yg)("p",null,"Select a mode to start shenyu-admin. For details, see  deployment. For example, with ",(0,r.yg)("a",{parentName:"p",href:"../../deployment/deployment-local"},"Local Deployment")," starts the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," background management system."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In BasicConfig --\x3e Plugin --\x3e resilience4j, set to enable."),(0,r.yg)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,r.yg)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-plugin-en-1.png",width:"80%",height:"80%"}),(0,r.yg)("h2",{id:"add-resilience4j-plugin-dependency"},"Add resilience4j plugin dependency"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Add ",(0,r.yg)("inlineCode",{parentName:"li"},"resilience4j")," dependency in the ",(0,r.yg)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu resilience4j plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-resilience4j</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu resilience4j plugin end--\x3e\n")),(0,r.yg)("h2",{id:"resilience4j-config"},"Resilience4j Config"),(0,r.yg)("p",null,"For more information on selectors and rules configuration, see ",(0,r.yg)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," , only some of the fields are covered here."),(0,r.yg)("h4",{id:"selector-config"},"Selector Config"),(0,r.yg)("p",null,"It is used to filter traffic for the first time and does not require handle fields."),(0,r.yg)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-plugin-en-2.png",width:"80%",height:"80%"}),(0,r.yg)("h4",{id:"rule-config"},"Rule Config"),(0,r.yg)("p",null,"For the final filtering of traffic, there is a rule handler logic."),(0,r.yg)("img",{src:"/img/shenyu/plugin/resilience4j/resilience4j-plugin-en-3.png",width:"80%",height:"80%"}),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Resilience4j Processing Details"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"limitForPeriod")," \uff1aConfigures the number of permissions available during one limit refresh period,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"50"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"limitRefreshPeriod")," \uff1aConfigures the period of a limit refresh. After each period the rate limiter sets its permissions count back to the limitForPeriod value,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"500"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timeoutDurationRate")," \uff1aConfigures wait time(ms) a thread waits for a permission,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"5000"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"circuitEnable")," \uff1aConfigures circuitBreaker enable, ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),":OFF ,",(0,r.yg)("inlineCode",{parentName:"p"},"1"),":ON ,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"0"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"failureRateThreshold")," \uff1aConfigures the failure rate threshold in percentage,When the failure rate is equal or greater than the threshold the CircuitBreaker transitions to open and starts short-circuiting calls,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"50"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"fallbackUri")," \uff1aConfigures the fallback uri.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"minimumNumberOfCalls")," \uff1aConfigures the minimum number of calls which are required (per sliding window period) before the CircuitBreaker can calculate the error rate or slow call rate,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"100"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"bufferSizeInHalfOpen"),"\uff1aConfigures the number of permitted calls when the CircuitBreaker is half open,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"10"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"slidingWindowSize")," \uff1aConfigures the size of the sliding window which is used to record the outcome of calls when the CircuitBreaker is closed,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"100"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"slidingWindowType")," \uff1aConfigures the type of the sliding window which is used to record the outcome of calls when the CircuitBreaker is closed,\nSliding window can either be ",(0,r.yg)("inlineCode",{parentName:"p"},"0"),":count-based or ",(0,r.yg)("inlineCode",{parentName:"p"},"1"),":time-based.,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"0"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"timeoutDuration")," \uff1aConfigures request CircuitBreaker timeout(ms),default value:",(0,r.yg)("inlineCode",{parentName:"p"},"30000"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"waitIntervalInOpen")," \uff1aConfigures the circuitBreaker time(ms) of duration,default value:",(0,r.yg)("inlineCode",{parentName:"p"},"10"),".")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"automaticTransitionFromOpenToHalfOpenEnabled")," \uff1aConfigures automatically transition from open state to half open state,",(0,r.yg)("inlineCode",{parentName:"p"},"true"),":ON, ",(0,r.yg)("inlineCode",{parentName:"p"},"false"),":OFF, default value:",(0,r.yg)("inlineCode",{parentName:"p"},"false"),"."))))))}c.isMDXComponent=!0}}]);