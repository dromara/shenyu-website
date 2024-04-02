"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56905],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},30643:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(58168),a=(n(96540),n(15680));const o={description:"Etcd",sidebar_position:4,title:"Etcd Example"},i="Etcd Registration get start",l={unversionedId:"etcd",id:"version-1.0.0/etcd",isDocsHomePage:!1,title:"Etcd Example",description:"Etcd",source:"@site/shenyuClientDotnet_versioned_docs/version-1.0.0/etcd.md",sourceDirName:".",slug:"/etcd",permalink:"/shenyuClientDotnet/etcd",version:"1.0.0",lastUpdatedBy:"Kerwin Bryant",lastUpdatedAt:1712025922,formattedLastUpdatedAt:"4/2/2024",sidebarPosition:4,frontMatter:{description:"Etcd",sidebar_position:4,title:"Etcd Example"},sidebar:"version-1.0.0/tutorialSidebar",previous:{title:"Nacos Example",permalink:"/shenyuClientDotnet/nacos"},next:{title:"Consul Example",permalink:"/shenyuClientDotnet/consul"}},p=[{value:"ASP.NET Core project",id:"aspnet-core-project",children:[]}],s={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"etcd-registration-get-start"},"Etcd Registration get start"),(0,a.yg)("h2",{id:"aspnet-core-project"},"ASP.NET Core project"),(0,a.yg)("p",null,"For ASP.NET Core project, we can refer to the example code at ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/apache/shenyu-client-dotnet/tree/main/examples/AspNetCoreExample"},"example code"),". What you need to do is quite\nsimple and straightforward."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"add the Shenyu ASP.NET Core dependency into project.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"dotnet add package Apache.ShenYu.AspNetCore\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"in ",(0,a.yg)("inlineCode",{parentName:"li"},"Startup.ConfigureServices")," method, add the ",(0,a.yg)("inlineCode",{parentName:"li"},"ShenyuRegister")," service.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c#"},"public void ConfigureServices(IServiceCollection services)\n{\n    ...\n    services.AddShenyuRegister(this.Configuration);\n    ...\n}\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"set your ",(0,a.yg)("inlineCode",{parentName:"li"},"Shenyu")," configurations in ",(0,a.yg)("inlineCode",{parentName:"li"},"appsettings.json"),".")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "Shenyu": {\n    "Register": {\n      "ServerList": "http://127.0.0.1:2379",\n      "RegisterType": "etcd",\n      "Props": {\n        // etcd userName,if have not set ectd server userName,this parmas can empty\n        "UserName": "",\n        // etcd password,if have not set ectd server password,this parmas can empty\n        "Password": "",\n        // 3000 ms default\n        "EtcdTimeout": 4000,\n        // 5 ms default\n        "EtcdTTL": 15\n      }\n    },\n    "Client": {\n      "AppName": "dotnetexampleetcd",\n      "ContextPath": "/etcddotnet",\n      "IsFull": false,\n      "ClientType": "http"\n    }\n  }\n}\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"enable calling via ip.")),(0,a.yg)("p",null,"When running on your local machine, ASP.NET Core service can only be called from ",(0,a.yg)("inlineCode",{parentName:"p"},"localhost"),". To enable calling by IP,\nyou can replace ",(0,a.yg)("inlineCode",{parentName:"p"},"https://localhost:{port};http://localhost:{port}")," with ",(0,a.yg)("inlineCode",{parentName:"p"},"https://*:{port};http://*:{port}")),(0,a.yg)("p",null,"Setting by environment variables ",(0,a.yg)("inlineCode",{parentName:"p"},"ASPNETCORE_URLS"),". e.g. ",(0,a.yg)("inlineCode",{parentName:"p"},'ASPNETCORE_URLS "http://*:5000"')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"export ASPNETCORE_URLS=http://+:5000\n")),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"start the application.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"# build project\ndotnet build --configuration Release\n# start project\ncd examples/AspNetCoreExample/bin/Release/netcoreapp3.1\ndotnet AspNetCoreExample.dll\n")),(0,a.yg)("p",null,"That's all! After finished above steps, you can start your project in IDE or below commands and you can\nvisit ",(0,a.yg)("inlineCode",{parentName:"p"},"shenyu-admin")," portal to see the APIs have been registered in Shenyu."))}d.isMDXComponent=!0}}]);