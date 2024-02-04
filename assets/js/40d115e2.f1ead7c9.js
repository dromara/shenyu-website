"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[93088],{95788:(e,n,t)=>{t.d(n,{Iu:()=>s,yg:()=>m});var i=t(11504);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},y=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(t),y=r,m=c["".concat(l,".").concat(y)]||c[y]||g[y]||a;return t?i.createElement(m,o(o({ref:n},s),{},{components:t})):i.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=y;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:r,o[1]=p;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}y.displayName="MDXCreateElement"},57156:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var i=t(45072),r=(t(11504),t(95788));const a={title:"SPI Design",keywords:["spi design"],description:"spi-design"},o=void 0,p={unversionedId:"design/spi-design",id:"version-2.4.0/design/spi-design",isDocsHomePage:!1,title:"SPI Design",description:"spi-design",source:"@site/versioned_docs/version-2.4.0/design/spi-design.md",sourceDirName:"design",slug:"/design/spi-design",permalink:"/docs/2.4.0/design/spi-design",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/design/spi-design.md",version:"2.4.0",frontMatter:{title:"SPI Design",keywords:["spi design"],description:"spi-design"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Application Client Access",permalink:"/docs/2.4.0/design/register-center-design"},next:{title:"Local Deployment",permalink:"/docs/2.4.0/deployment/deployment-local"}},l=[{value:"Registry Center",id:"registry-center",children:[]},{value:"Metrics Center",id:"metrics-center",children:[]},{value:"Load Balance",id:"load-balance",children:[]},{value:"RateLimiter",id:"ratelimiter",children:[]},{value:"Match Strategy",id:"match-strategy",children:[]},{value:"Parameter Data",id:"parameter-data",children:[]},{value:"Predicate Judge",id:"predicate-judge",children:[]}],d={toc:l},s="wrapper";function c(e){let{components:n,...t}=e;return(0,r.yg)(s,(0,i.c)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"SPI, called Service Provider Interface, is a built-in JDK Service that provides discovery function and a dynamic replacement discovery mechanism."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/master/shenyu-spi"},"shenyu-spi")," is a custom SPI extension implementation for Apache Shenyu gateway. The design and implementation principles refer to ",(0,r.yg)("a",{parentName:"p",href:"https://dubbo.apache.org/en/docs/v2.7/dev/impls/"},"SPI Extension Implementations")," ."),(0,r.yg)("h3",{id:"registry-center"},"Registry Center"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Consul"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Etcd"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Http"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Nacos")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Zookeeper")," are supported. The expansion of the registry including client and server, interface respectively ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuServerRegisterRepository")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"ShenyuClientRegisterRepository"),"."),(0,r.yg)("h3",{id:"metrics-center"},"Metrics Center"),(0,r.yg)("p",null,"Responsible for service monitoring, loading concrete implementation through ",(0,r.yg)("inlineCode",{parentName:"p"},"SPI"),", currently support ",(0,r.yg)("inlineCode",{parentName:"p"},"Prometheus"),", service interface is ",(0,r.yg)("inlineCode",{parentName:"p"},"MetricsBootService"),"."),(0,r.yg)("h3",{id:"load-balance"},"Load Balance"),(0,r.yg)("p",null,"Select one of the service providers to call. Currently, the supported algorithms are ",(0,r.yg)("inlineCode",{parentName:"p"},"Hash"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Random"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"RoundRobin"),", and the extended interface is ",(0,r.yg)("inlineCode",{parentName:"p"},"LoadBalance"),"."),(0,r.yg)("h3",{id:"ratelimiter"},"RateLimiter"),(0,r.yg)("p",null,"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"RateLimiter")," plugin, which stream limiting algorithm to use, currently supporting ",(0,r.yg)("inlineCode",{parentName:"p"},"Concurren"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"LeakyBucke"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"SlidingWindow")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"TokenBucket"),", the extension interface is ",(0,r.yg)("inlineCode",{parentName:"p"},"RateLimiterAlgorithm"),"."),(0,r.yg)("h3",{id:"match-strategy"},"Match Strategy"),(0,r.yg)("p",null,"Which matching method to use when adding selectors And rules, currently supports ",(0,r.yg)("inlineCode",{parentName:"p"},"And"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Or"),", And the extension interface is ",(0,r.yg)("inlineCode",{parentName:"p"},"MatchStrategy"),"."),(0,r.yg)("h3",{id:"parameter-data"},"Parameter Data"),(0,r.yg)("p",null,"Currently, ",(0,r.yg)("inlineCode",{parentName:"p"},"URI"),",",(0,r.yg)("inlineCode",{parentName:"p"},"RequestMethod"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Query"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Post"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"IP"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Host"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Cookie"),", and ",(0,r.yg)("inlineCode",{parentName:"p"},"Header")," are supported. The extended interface is ",(0,r.yg)("inlineCode",{parentName:"p"},"ParameterData"),"."),(0,r.yg)("h3",{id:"predicate-judge"},"Predicate Judge"),(0,r.yg)("p",null,"Which conditional policy to use when adding selectors and rules currently supports ",(0,r.yg)("inlineCode",{parentName:"p"},"Match"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Contains"),",",(0,r.yg)("inlineCode",{parentName:"p"},"Equals"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Groovy"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"Regex"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"SpEL"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"TimerAfter")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"TimerBefore"),". The extension interface is ",(0,r.yg)("inlineCode",{parentName:"p"},"PredicateJudge"),"."))}c.isMDXComponent=!0}}]);