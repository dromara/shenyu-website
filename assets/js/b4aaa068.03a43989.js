"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[9176],{95788:(e,t,a)=>{a.d(t,{Iu:()=>c,yg:()=>y});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},44092:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(45072),r=(a(11504),a(95788));const o={title:"Custom Parameter Data",keywords:["ParameterData"],description:"Custom Parameter Data"},i=void 0,p={unversionedId:"developer/spi/custom-parameter-data",id:"developer/spi/custom-parameter-data",isDocsHomePage:!1,title:"Custom Parameter Data",description:"Custom Parameter Data",source:"@site/docs/developer/spi/custom-parameter-data.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-parameter-data",permalink:"/docs/next/developer/spi/custom-parameter-data",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/developer/spi/custom-parameter-data.md",version:"current",frontMatter:{title:"Custom Parameter Data",keywords:["ParameterData"],description:"Custom Parameter Data"},sidebar:"tutorialSidebar",previous:{title:"Custom Mock Data Generator",permalink:"/docs/next/developer/spi/custom-mock-generator"},next:{title:"Custom Predicate Judge",permalink:"/docs/next/developer/spi/custom-predicate-judge"}},l=[],s={toc:l},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This paper describes how to customize the extension of  ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.data.ParameterData"),"."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a new project and introduce the following dependencies:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a new class ",(0,r.yg)("inlineCode",{parentName:"li"},"CustomParameterData"),", implements ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.data.ParameterData"),", add annotation ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"/**\n * This is custom parameter data.\n */\n@Join\npublic class CustomParameterData implements ParameterData {\n    \n    @Override\n    public String builder(final String paramName, final ServerWebExchange exchange) {\n        // custom parameter data\n    }\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In the project's META-INF/services directory, create ",(0,r.yg)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.data.ParameterData")," file, add key-value as following:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name} = ${custom class path}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,r.yg)("inlineCode",{parentName:"p"},"spi")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomParameterData\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Package the project and copy it to the ",(0,r.yg)("inlineCode",{parentName:"p"},"lib")," or ",(0,r.yg)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In the ",(0,r.yg)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary,  find the dictionary code as ",(0,r.yg)("inlineCode",{parentName:"p"},"PARAM_TYPE"),", add a new piece of data, pay attention to the dictionary name: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,r.yg)("img",{src:"/img/shenyu/custom/custom_parameter_data_en.png",width:"70%",height:"60%"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"DictionaryType: ",(0,r.yg)("inlineCode",{parentName:"p"},"paramType"),";"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,r.yg)("inlineCode",{parentName:"p"},"PARAM_TYPE"),";"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryName: ",(0,r.yg)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,r.yg)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,r.yg)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,r.yg)("p",{parentName:"blockquote"},"Status: open or close.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom parameter data:")),(0,r.yg)("img",{src:"/img/shenyu/custom/use_custom_parameter_data_en.png",width:"80%",height:"70%"}))}m.isMDXComponent=!0}}]);