"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32982],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>g});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||y[d]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78593:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),a=(t(96540),t(15680));const o={description:"Nacos",sidebar_position:3,title:"Nacos Example"},i="Nacos Registration get start",l={unversionedId:"nacos",id:"version-1.0.0/nacos",isDocsHomePage:!1,title:"Nacos Example",description:"Nacos",source:"@site/shenyuClientDotnet_versioned_docs/version-1.0.0/nacos.md",sourceDirName:".",slug:"/nacos",permalink:"/shenyuClientDotnet/nacos",version:"1.0.0",lastUpdatedBy:"\u4e50\u54e5",lastUpdatedAt:1711377032,formattedLastUpdatedAt:"3/25/2024",sidebarPosition:3,frontMatter:{description:"Nacos",sidebar_position:3,title:"Nacos Example"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Zookeeper Example",permalink:"/shenyuClientDotnet/zookeeper"},next:{title:"Etcd Example",permalink:"/shenyuClientDotnet/etcd"}},s=[{value:"ASP.NET Core project",id:"aspnet-core-project",children:[]}],p={toc:s},c="wrapper";function u(e){let{components:n,...t}=e;return(0,a.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"nacos-registration-get-start"},"Nacos Registration get start"),(0,a.yg)("h2",{id:"aspnet-core-project"},"ASP.NET Core project"),(0,a.yg)("p",null,"For ASP.NET Core project, we can refer to the example code at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-client-dotnet/tree/main/examples/AspNetCoreExample"},"example code"),". What you need to do is quite\nsimple and straightforward."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"add the Shenyu ASP.NET Core dependency into project.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"dotnet add package Apache.ShenYu.AspNetCore\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"in ",(0,a.yg)("inlineCode",{parentName:"li"},"Startup.ConfigureServices")," method, add the ",(0,a.yg)("inlineCode",{parentName:"li"},"ShenyuRegister")," service.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c#"},"public void ConfigureServices(IServiceCollection services)\n{\n    ...\n    services.AddShenyuRegister(this.Configuration);\n    ...\n}\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"set your ",(0,a.yg)("inlineCode",{parentName:"li"},"Shenyu")," configurations in ",(0,a.yg)("inlineCode",{parentName:"li"},"appsettings.json"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Shenyu": {\n    "Register": {\n      "RegisterType": "nacos",\n      "ServerList": "localhost:8848",\n      "Props": {\n        // your nacos user name\n        "UserName": "nacos",\n        // your nacos password\n        "Password": "nacos",\n        // align with the namespace set in admin project\n        "Namespace": "ShenyuRegisterCenter",\n        // when want to aliyun AccessKey ,can ignore\n        "AccessKey": "",\n        // when want to aliyun SecretKey,can ignore\n        "SecretKey": ""\n      }\n    },\n    "Client": {\n      "AppName": "dotnet-example",\n      "ContextPath": "/dotnet",\n      "IsFull": false,\n      "ClientType": "http"\n    }\n  }\n}\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"enable calling via ip.")),(0,a.yg)("p",null,"When running on your local machine, ASP.NET Core service can only be called from ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost"),". To enable calling by IP,\nyou can replace ",(0,a.yg)("inlineCode",{parentName:"p"},"https://localhost:{port};http://localhost:{port}")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"https://*:{port};http://*:{port}")),(0,a.yg)("p",null,"Setting by environment variables ",(0,a.yg)("inlineCode",{parentName:"p"},"ASPNETCORE_URLS"),". e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},'ASPNETCORE_URLS "http://*:5000"')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"export ASPNETCORE_URLS=http://+:5000\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"start the application.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# build project\ndotnet build --configuration Release\n# start project\ncd examples/AspNetCoreExample/bin/Release/netcoreapp3.1\ndotnet AspNetCoreExample.dll\n")),(0,a.yg)("p",null,"That's all! After finished above steps, you can start your project in IDE or below commands and you can\nvisit ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," portal to see the APIs have been registered in Shenyu."))}u.isMDXComponent=!0}}]);