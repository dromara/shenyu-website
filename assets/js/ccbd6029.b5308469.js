"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[7068],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>y});var n=r(11504);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=i,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(y,a(a({ref:t},p),{},{components:r})):n.createElement(y,a({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95052:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(45072),i=(r(11504),r(95788));const o={title:"Custom Metrics Monitor",keywords:["MetricsMonitor"],description:"custom Metrics Monitor"},a=void 0,s={unversionedId:"developer/spi/custom-metrics-monitor",id:"version-2.4.1/developer/spi/custom-metrics-monitor",isDocsHomePage:!1,title:"Custom Metrics Monitor",description:"custom Metrics Monitor",source:"@site/versioned_docs/version-2.4.1/developer/spi/custom-metrics-monitor.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-metrics-monitor",permalink:"/docs/2.4.1/developer/spi/custom-metrics-monitor",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.1/developer/spi/custom-metrics-monitor.md",version:"2.4.1",frontMatter:{title:"Custom Metrics Monitor",keywords:["MetricsMonitor"],description:"custom Metrics Monitor"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Custom Match Mode",permalink:"/docs/2.4.1/developer/spi/custom-match-mode"},next:{title:"Custom Parameter Data",permalink:"/docs/2.4.1/developer/spi/custom-parameter-data"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Extension",id:"extension",children:[]}],l={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.yg)(p,(0,n.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"explanation"},"Explanation"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Before custom development, please customize and build the gateway environment first, please refer to: ",(0,i.yg)("a",{parentName:"p",href:"../deployment-custom"},"custom deployment"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"This article describes how to customize the extension of  ",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.metrics.spi.MetricsBootService"),"."))),(0,i.yg)("h2",{id:"extension"},"Extension"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Create a new class ",(0,i.yg)("inlineCode",{parentName:"li"},"${you class}"),"\uff0cimplements ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.metrics.spi.MetricsBootService"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"public class ${you class} implements MetricsBootService {\n   \n    /**\n     * Start metrics tracker.\n     *\n     * @param metricsConfig metrics config\n     * @param metricsRegister the metrics register\n     */\n    public void start(MetricsConfig metricsConfig, MetricsRegister metricsRegister){\n                //your code\n    }\n    \n    /**\n     * Stop metrics tracker.\n     */\n    public void stop() {\n        //your code\n    }\n}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In the project  ",(0,i.yg)("inlineCode",{parentName:"li"},"resources")," directory\uff0cCreate a new ",(0,i.yg)("inlineCode",{parentName:"li"},"META-INF/shenyu")," directory\uff0c and the new file name is : ",(0,i.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.metrics.spi.MetricsBootService"),".\nadd ",(0,i.yg)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,i.yg)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"In the ",(0,i.yg)("inlineCode",{parentName:"li"},"Admin")," service ---\x3e BasicConfig ---\x3e Plugin ,  Find the ",(0,i.yg)("inlineCode",{parentName:"li"},"Monitor")," plugin,  edit config, pay attention to the ",(0,i.yg)("inlineCode",{parentName:"li"},"metricsName")," name: ",(0,i.yg)("inlineCode",{parentName:"li"},"${you spi name}"),".")),(0,i.yg)("img",{src:"/img/shenyu/custom/custom-metrics-monitor-en.jpg",width:"40%",height:"30%"}))}m.isMDXComponent=!0}}]);